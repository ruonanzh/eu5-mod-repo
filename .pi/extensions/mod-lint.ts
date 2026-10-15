import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { isValidModId } from "../lib/mod-identity";
import { analyzeSemantics } from "../lib/mod-semantics";
import { Type } from "typebox";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, resolve, sep, basename } from "node:path";

/**
 * validate_mod - the EU5 mod validation tool for the pdx-script mod type.
 * It was ported from lint_mod.py in eu5-starry-night-project, and it checks syntax and convention
 * rules, and then the name-level semantic checks in ../lib/mod-semantics:
 *   - metadata.json: presence, valid JSON, a top-level object, a semver version, the standard
 *     fields, and the picture entry.
 *   - Localization YAML: the UTF-8 BOM, the encoding, the `_l_<lang>` filename, the `l_<lang>:`
 *     header, the key line format, the double-quoted value, the quote balance, duplicate keys, and
 *     a mojibake warning.
 *   - PDXScript and GUI files: the .txt, .gui, .gfx, and .asset files under in_game/ and main_menu/.
 *     The tool checks the UTF-8 encoding, the `{` and `}` balance, and the `"` balance, with
 *     awareness of `#` comments and multiline strings. It also checks that the INJECT: and REPLACE:
 *     family starts only at a top-level block.
 *   - Semantics (name level, in ../lib/mod-semantics): the effect, trigger, and modifier names
 *     exist; the INJECT: and REPLACE: targets exist in the same database directory; and a new
 *     object has its localization keys.
 *
 * The tool is read-only, and it has no third-party dependency. Its content output uses PASS or FAIL with NEXT,
 * in ASCII English, and its details hold only ok, errors, and warnings.
 */

const UTF8_BOM = Buffer.from([0xef, 0xbb, 0xbf]);
const PDX_SUFFIXES = new Set([".txt", ".gui", ".gfx", ".asset"]);
const CONTENT_ROOT_MARKERS = ["/in_game/", "/main_menu/"];
const STANDARD_METADATA_FIELDS = [
  "name",
  "id",
  "version",
  "supported_game_version",
  "tags",
];
const IMAGE_EXTS = new Set([".png", ".dds", ".jpg", ".jpeg", ".tga"]);
const SEMVER_RE = /^\d+\.\d+(\.\d+)?$/;
// A wildcard supported_game_version names no concrete game version, so it is too loose. This table
// is the single place to add a form. A value that names a concrete minor release ("1.3.*", or the
// two-level form "1.0.*") stays silent, because it still tells the player which release works.
const LOOSE_GAME_VERSION_RES = [
  /^\d+\.\*$/, // "1.*"   - wildcard patch level
  /^\d+\.\*\.\*$/, // "1.*.*" - wildcard minor and patch level
  /^\*$/, // "*"     - any game version
  /^\d+\.[xX]$/, // "1.x"   - wildcard patch level, spelled with x
];
const PUA_RE = /[\ue000-\uf8ff]/;
const LOC_KEY_RE = /^[ \t]*(?<key>[^\s:#][^:]*):(?<ver>\d*)\s*(?<rest>.*?)\s*$/;
const LOC_HEADER_RE = /^\ufeff?\s*l_(?<lang>[a-z_]+):(?<tail>.*)$/;
const OVERRIDE_KEYWORD_RE = /(?:TRY_)?(?:INJECT|REPLACE)(?:_OR_CREATE)?:/;
const TOPLEVEL_KEY_RE =
  /(?<kw>(?:TRY_)?(?:INJECT|REPLACE)(?:_OR_CREATE)?:)?(?<key>[A-Za-z0-9_.\-]+)\s*=\s*\{/;

type Severity = "error" | "warn";
interface Finding {
  severity: Severity;
  rel: string;
  message: string;
}

function toPosix(p: string): string {
  return p.split(sep).join("/");
}

/** Lists every file under modDir, and skips .git. Returns { absPath, relPosix }. */
function walkFiles(root: string): Array<{ abs: string; rel: string }> {
  const out: Array<{ abs: string; rel: string }> = [];
  const walk = (dir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name === ".git") continue;
      const abs = join(dir, e.name);
      if (e.isDirectory()) walk(abs);
      else if (e.isFile()) out.push({ abs, rel: toPosix(relative(root, abs)) });
    }
  };
  walk(root);
  return out;
}

function isLocalizationYml(rel: string): boolean {
  const r = rel.toLowerCase();
  return r.endsWith(".yml") && r.includes("/localization/");
}

// The languages EU5 ships. A localization file names its language with the `_l_<lang>` filename
// suffix (wiki Modding/Localization: "the filename must end with `_l_<language>`; any file name can
// be used as long as this format is respected"). The engine and DLC trees group files as
// `localization/<group>/<file>_l_<lang>.yml`, so the first directory is often a group and not a
// language. This set is the single place to add a language.
const LOC_LANGUAGES = new Set([
  "braz_por",
  "english",
  "french",
  "german",
  "japanese",
  "korean",
  "polish",
  "russian",
  "simp_chinese",
  "spanish",
  "turkish",
]);

/** The known language named by the `_l_<lang>.yml` filename suffix, or null. */
function filenameLanguage(rel: string): string | null {
  const name = rel.split("/").pop() ?? rel;
  const stem = name.endsWith(".yml") ? name.slice(0, -4) : name;
  const lang = /_l_([a-z_]+)$/.exec(stem)?.[1];
  return lang !== undefined && LOC_LANGUAGES.has(lang) ? lang : null;
}

/**
 * The known language named by the localization directory, or null when the directory is a group.
 * The `replace/` level is skipped, because `localization/replace/<lang>/` overrides the vanilla keys
 * of <lang>.
 */
function directoryLanguage(rel: string): string | null {
  const parts = rel.split("/");
  const lowered = parts.map((p) => p.toLowerCase());
  const idx = lowered.indexOf("localization");
  if (idx < 0) return null;
  const tail = lowered.slice(idx + 1, -1);
  if (tail.length === 0) return null;
  const dir = tail[0] === "replace" && tail.length >= 2 ? tail[1] : tail[0];
  return LOC_LANGUAGES.has(dir) ? dir : null;
}

/**
 * The language that a localization file must declare. The directory is only a hint: the engine and
 * DLC trees group files as `localization/<group>/<file>_l_<lang>.yml`, where the first directory is
 * a group and not a language, so a directory that does not name a known language is ignored and the
 * `_l_<lang>` filename suffix decides. Returns null when neither names a known language, which
 * means the filename does not end with `_l_<language>.yml`.
 */
function expectedLanguageFromPath(rel: string): string | null {
  return directoryLanguage(rel) ?? filenameLanguage(rel);
}

function decodeUtf8(raw: Buffer): { text: string | null; err?: string } {
  try {
    // Strict UTF-8 decoding. The BOM is handled separately.
    const text = new TextDecoder("utf-8", { fatal: true }).decode(raw);
    return { text };
  } catch {
    return { text: null, err: "not valid UTF-8" };
  }
}

function simpChineseMojibakeHint(text: string): boolean {
  if (text.includes("\u20ac")) return true; // euro sign
  let hits = 0;
  for (const ch of text) {
    const o = ch.codePointAt(0) ?? 0;
    if (o >= 0x20000 && o <= 0x323af) {
      hits += 1;
      if (hits >= 3) return true;
    }
  }
  return false;
}

/**
 * Checks the quote structure of a localization value. The value starts with `"` and ends at an
 * unescaped `"` that has only whitespace or a `#` comment after it. The tool accepts the last such
 * quote, so an inner quote and a doubled `""` are both legal: vanilla writes
 * `""L'État, c'est moi!""` and `"Enables a "bloom" effect."`. The check fails only when no
 * unescaped quote closes the value, for example `"unterminated` or `"a" trailing text`.
 */
function localizationValueQuoteOk(rest: string): boolean {
  let closed = false;
  for (let i = 1; i < rest.length; i += 1) {
    // Skip the opening quote. The caller guarantees that rest starts with one.
    if (rest[i] !== '"') continue;
    let backslashes = 0;
    for (let j = i - 1; j >= 0 && rest[j] === "\\"; j -= 1) backslashes += 1;
    if (backslashes % 2 === 1) continue; // An escaped quote is text, not a delimiter.
    const tail = rest.slice(i + 1).trim();
    if (tail === "" || tail.startsWith("#")) closed = true; // This quote closes the value.
  }
  return closed; // false when no closing quote was found, so the string is unterminated.
}

// ---- localization YAML ----

function checkLocalization(modRoot: string): Finding[] {
  const findings: Finding[] = [];
  for (const { abs, rel } of walkFiles(modRoot)) {
    if (!isLocalizationYml(rel)) continue;
    let raw: Buffer;
    try {
      raw = readFileSync(abs);
    } catch {
      findings.push({ severity: "error", rel, message: "cannot read file" });
      continue;
    }
    if (!raw.subarray(0, 3).equals(UTF8_BOM)) {
      findings.push({
        severity: "error",
        rel,
        message:
          "missing UTF-8 BOM (game ignores localization files without a BOM)",
      });
    }
    const { text, err } = decodeUtf8(raw);
    if (text === null) {
      findings.push({
        severity: "error",
        rel,
        message: err ?? "not valid UTF-8",
      });
      continue;
    }
    if (text.includes("\ufffd"))
      findings.push({
        severity: "warn",
        rel,
        message: "contains U+FFFD replacement character (file may be damaged)",
      });
    if (PUA_RE.test(text))
      findings.push({
        severity: "warn",
        rel,
        message: "contains Unicode private-use character(s) U+E000-U+F8FF",
      });
    const relLower = rel.toLowerCase();
    if (
      (relLower.includes("/simp_chinese/") ||
        relLower.includes("_simp_chinese")) &&
      simpChineseMojibakeHint(text)
    ) {
      findings.push({
        severity: "warn",
        rel,
        message:
          "possible simplified-Chinese mojibake (euro sign or rare extended ideographs). Check it in the game.",
      });
    }

    const expectedLang = expectedLanguageFromPath(rel);
    const name = rel.split("/").pop() ?? rel;
    const stem = name.endsWith(".yml") ? name.slice(0, -4) : name;
    if (expectedLang === null) {
      // Neither the directory nor the `_l_<lang>` suffix names a known language, so the required
      // filename suffix is missing or misspelled.
      findings.push({
        severity: "error",
        rel,
        message: "filename must end with '_l_<language>.yml'",
      });
    } else if (!stem.endsWith(`_l_${expectedLang}`)) {
      findings.push({
        severity: "error",
        rel,
        message: `filename must end with '_l_${expectedLang}.yml' to match the '${expectedLang}' localization directory`,
      });
    }

    const lines = text.split(/\r?\n/);
    let headerSeen = false;
    const seenKeys = new Map<string, number>();
    for (let i = 0; i < lines.length; i += 1) {
      const lineNo = i + 1;
      const line = lines[i];
      const stripped = line.trim();
      if (stripped === "" || stripped.startsWith("#")) continue;
      const headerMatch = LOC_HEADER_RE.exec(line);
      if (!headerSeen) {
        if (!headerMatch) {
          findings.push({
            severity: "error",
            rel,
            message: `line ${lineNo}: expected a language header 'l_<lang>:' as the first content line`,
          });
          headerSeen = true;
        } else {
          headerSeen = true;
          const lang = headerMatch.groups?.lang;
          if (expectedLang && lang !== expectedLang) {
            findings.push({
              severity: "error",
              rel,
              message: `line ${lineNo}: header 'l_${lang}:' does not match the expected language '${expectedLang}'`,
            });
          }
          continue;
        }
      }
      if (headerMatch) continue; // A later language header line is allowed here.
      const m = LOC_KEY_RE.exec(line);
      if (!m) {
        findings.push({
          severity: "error",
          rel,
          message: `line ${lineNo}: malformed localization line (expected '  key: \"value\"' or '  key:0 \"value\"')`,
        });
        continue;
      }
      const rest = m.groups?.rest ?? "";
      if (!rest.startsWith('"')) {
        findings.push({
          severity: "error",
          rel,
          message: `line ${lineNo}: value must be double-quoted`,
        });
      } else if (!localizationValueQuoteOk(rest)) {
        findings.push({
          severity: "error",
          rel,
          message: `line ${lineNo}: unbalanced '\"' in value`,
        });
      }
      const key = (m.groups?.key ?? "").trim();
      if (seenKeys.has(key)) {
        findings.push({
          severity: "error",
          rel,
          message: `line ${lineNo}: duplicate key '${key}' (first seen line ${seenKeys.get(key)})`,
        });
      } else {
        seenKeys.set(key, lineNo);
      }
    }
  }
  return findings;
}

// ---- metadata.json ----

function checkMetadata(modRoot: string): Finding[] {
  const findings: Finding[] = [];
  const meta = join(modRoot, ".metadata", "metadata.json");
  const rel = ".metadata/metadata.json";
  if (!existsSync(meta)) {
    findings.push({
      severity: "error",
      rel,
      message: "missing .metadata/metadata.json",
    });
    return findings;
  }
  let raw: Buffer;
  try {
    raw = readFileSync(meta);
  } catch {
    findings.push({
      severity: "error",
      rel,
      message: "cannot read metadata.json",
    });
    return findings;
  }
  const { text, err } = decodeUtf8(raw);
  if (text === null) {
    findings.push({
      severity: "error",
      rel,
      message: err ?? "cannot decode metadata.json",
    });
    return findings;
  }
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch (e) {
    findings.push({
      severity: "error",
      rel,
      message: `invalid JSON (${e instanceof Error ? e.message : String(e)})`,
    });
    return findings;
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    findings.push({
      severity: "error",
      rel,
      message: "metadata.json top-level value must be an object",
    });
    return findings;
  }
  const obj = data as Record<string, unknown>;
  // Check the id against the game rule only. The EU5 wiki metadata page says that the id is the
  // "Id of the mod for recognition", and it only requires the field. There is no hard rule for
  // lowercase snake_case, and no hard rule that it equals the directory name. The official example
  // `testmod` and the community template `[modname].dev` both contain a dot, which proves it.
  // "It equals the directory name, in lower_snake_case" was this repository's own convention. The
  // linter no longer enforces it, and the SKILL suggests it only.
  if (!isValidModId(obj.id)) {
    findings.push({ severity: "error", rel, message: "metadata.id must be a non-empty string" });
  }
  for (const field of STANDARD_METADATA_FIELDS) {
    if (!(field in obj))
      findings.push({
        severity: "warn",
        rel,
        message: `missing expected field '${field}' (EU5 wiki metadata.json standard structure)`,
      });
  }
  // The field presence check above does not read the value. A value such as "1.*" or "*" matches
  // every release and tells the player nothing about the supported game version, so warn. A concrete
  // value ("1.0.4") and a concrete-minor wildcard ("1.3.*", "1.0.*") stay silent.
  const supportedGameVersion =
    typeof obj.supported_game_version === "string" ? obj.supported_game_version.trim() : null;
  if (
    supportedGameVersion !== null &&
    LOOSE_GAME_VERSION_RES.some((re) => re.test(supportedGameVersion))
  ) {
    findings.push({
      severity: "warn",
      rel,
      message: `supported_game_version '${obj.supported_game_version}' is too loose. Write a patch-level wildcard such as 1.3.*, not an exact version.`,
    });
  }
  if (
    typeof obj.version === "string" &&
    obj.version !== "" &&
    !SEMVER_RE.test(obj.version)
  ) {
    findings.push({
      severity: "error",
      rel,
      message: `version '${obj.version}' is not semver x.x or x.x.x`,
    });
  }
  const picture = obj.picture;
  if (!picture) {
    findings.push({
      severity: "warn",
      rel,
      message: "missing 'picture' entry (the value is for example \"thumbnail.png\")",
    });
  } else if (typeof picture === "string") {
    const candidates = [
      join(modRoot, picture),
      join(modRoot, ".metadata", picture),
    ];
    if (
      !candidates.some(
        (c) =>
          existsSync(c) && statSync(c, { throwIfNoEntry: false })?.isFile(),
      )
    ) {
      const versioned = [modRoot, join(modRoot, ".metadata")]
        .filter((b) => existsSync(b))
        .flatMap((b) => {
          try {
            return readdirSync(b).map((f) => join(b, f));
          } catch {
            return [];
          }
        })
        .filter((f) => {
          const dot = f.lastIndexOf(".");
          if (dot < 0) return false;
          return (
            IMAGE_EXTS.has(f.slice(dot).toLowerCase()) &&
            statSync(f, { throwIfNoEntry: false })?.isFile()
          );
        });
      // The file is missing, so always warn. The wording depends on whether the mod has other
      // images: with one or more, a filename mismatch is the likely cause; with none, the mod
      // simply has no image, and the mismatch hint would be false.
      findings.push({
        severity: "warn",
        rel,
        message:
          versioned.length > 0
            ? `picture '${picture}' not found, but other image files are versioned here (possible filename mismatch)`
            : `picture '${picture}' not found, and the mod has no image file (the value must name an existing file in the mod root or .metadata/)`,
      });
    }
  }
  return findings;
}

// ---- PDXScript and GUI brace and quote balance, and the INJECT: and REPLACE: top-level block ----

/** Deletes a `#` line comment that is outside a quoted string. It keeps the line breaks, so line numbers still match. A string can span lines. */
function stripLineComments(text: string): string {
  const outLines: string[] = [];
  let inString = false;
  for (const raw of text.split("\n")) {
    let buf = "";
    for (const ch of raw) {
      if (inString) {
        buf += ch;
        if (ch === '"') inString = false;
      } else if (ch === "#") {
        break; // A line comment. Ignore the rest of this line.
      } else {
        buf += ch;
        if (ch === '"') inString = true;
      }
    }
    outLines.push(buf);
  }
  return outLines.join("\n");
}

interface BalanceResult {
  ok: boolean;
  message?: string;
}

function checkBraceQuoteBalance(cleaned: string): BalanceResult {
  let depth = 0;
  let inString = false;
  let stringStartLine = 0;
  let line = 1;
  for (const ch of cleaned) {
    if (ch === "\n") {
      line += 1;
      continue;
    }
    if (inString) {
      if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      stringStartLine = line;
    } else if (ch === "{") {
      depth += 1;
    } else if (ch === "}") {
      depth -= 1;
      if (depth < 0)
        return {
          ok: false,
          message: `line ${line}: unexpected '}' (more closing than opening braces)`,
        };
    }
  }
  if (inString)
    return {
      ok: false,
      message: `line ${stringStartLine}: unbalanced '\"' (unterminated string)`,
    };
  if (depth > 0)
    return {
      ok: false,
      message: `unbalanced braces: ${depth} '{' never closed`,
    };
  if (depth < 0) return { ok: false, message: "unbalanced braces: extra '}'" };
  return { ok: true };
}

/**
 * A keyword of the INJECT: or REPLACE: family must sit directly before a *database entry*, in the
 * form `KEYWORD:key = {`. The tool scans depth with awareness of comments and strings. A keyword
 * nested below the entry level is a WARN (container folders legitimately nest entries one level in -
 * e.g. `genes/accessory_genes` - and vanilla itself does so), and a keyword not followed by `key = {`
 * is an ERROR.
 */
function checkOverrideKeywords(cleaned: string): Finding[] {
  const findings: Finding[] = [];
  let depth = 0;
  let inString = false;
  let line = 1;
  let i = 0;
  const n = cleaned.length;
  while (i < n) {
    const ch = cleaned[i];
    if (ch === "\n") {
      line += 1;
      i += 1;
      continue;
    }
    if (inString) {
      if (ch === '"') inString = false;
      i += 1;
      continue;
    }
    if (ch === '"') {
      inString = true;
      i += 1;
      continue;
    }
    if (ch === "{") {
      depth += 1;
      i += 1;
      continue;
    }
    if (ch === "}") {
      depth -= 1;
      i += 1;
      continue;
    }
    // Full match of `[KEYWORD:]key = {`, which is a top-level object definition with or without an override keyword.
    const m = TOPLEVEL_KEY_RE.exec(cleaned.slice(i, i + 400));
    if (m && m.index === 0 && m.groups?.key) {
      const hasKw = !!m.groups.kw;
      if (hasKw && depth > 0) {
        // Downgraded from error to warn. The rule is "directly before a database entry", and the
        // entry level depends on the folder. Most common/ folders put entries at the file top level,
        // and a container folder nests them one level in, for example genes/ nests inside
        // `accessory_genes = { <entry> = { } }`. Vanilla writes it that way itself: all 6
        // `INJECT_OR_CREATE:` sites in dlc/D008_fate_of_the_phoenix/in_game/common/genes/
        // D008_genes_accessories.txt sit inside accessory_genes.
        findings.push({
          severity: "warn",
          rel: "",
          message: `line ${line}: '${m.groups.kw}' override keyword is nested (depth ${depth}). It must sit directly before a *database entry* - that is the file's top level in most common/ folders, but in container folders (e.g. genes/accessory_genes) the entry is one level in, and vanilla does that too. Confirm before treating as an error.`,
        });
      }
      // Skip the whole `[KEYWORD:]key = {` up to the `{`, so the next round counts that brace.
      i += m[0].length - 1;
      continue;
    }
    // The match reached a bare keyword only, so `REPLACE:` is not followed by `key = {`. That is a format error.
    const kw = OVERRIDE_KEYWORD_RE.exec(cleaned.slice(i, i + 40));
    if (kw && kw.index === 0) {
      findings.push({
        severity: "error",
        rel: "",
        message: `line ${line}: malformed override '${kw[0]}' (expected '${kw[0]}key = {')`,
      });
    }
    i += 1;
  }
  return findings;
}

function checkPdxScript(modRoot: string): Finding[] {
  const findings: Finding[] = [];
  for (const { abs, rel } of walkFiles(modRoot)) {
    const dot = rel.lastIndexOf(".");
    if (dot < 0 || !PDX_SUFFIXES.has(rel.slice(dot).toLowerCase())) continue;
    if (isLocalizationYml(rel)) continue;
    const rl = "/" + rel.toLowerCase();
    if (!CONTENT_ROOT_MARKERS.some((m) => rl.includes(m))) continue; // A non-game script such as README, thumbnail, or tools.
    let raw: Buffer;
    try {
      raw = readFileSync(abs);
    } catch {
      findings.push({ severity: "error", rel, message: "cannot read file" });
      continue;
    }
    const { text, err } = decodeUtf8(raw);
    if (text === null) {
      findings.push({
        severity: "error",
        rel,
        message: err ?? "not valid UTF-8",
      });
      continue;
    }
    const cleaned = stripLineComments(text);
    const bal = checkBraceQuoteBalance(cleaned);
    if (!bal.ok && bal.message)
      findings.push({ severity: "error", rel, message: bal.message });
    for (const f of checkOverrideKeywords(cleaned)) {
      // Keep the severity that checkOverrideKeywords reports. A nested keyword is a warn, not an error.
      findings.push({ severity: f.severity ?? "error", rel, message: f.message });
    }
  }
  return findings;
}

const MAX_CONTENT_LINES = 200;

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "validate_mod",
    label: "Validate Mod",
    description:
      "Validate an EU5 mod of the pdx-script type, under your_mods/. It checks the metadata.json fields, the localization YAML, and the brace and quote balance in PDXScript and GUI files. It also checks the rule that INJECT: and REPLACE: stay at the top level, and it runs the name-level semantic checks: effect, trigger, and modifier names exist, INJECT:/REPLACE: targets exist, and new objects have their localization keys. It is not a scope or type validator.",
    promptSnippet: "Validate a mod under your_mods/",
    promptGuidelines: [
      "Use validate_mod after you write a mod, to check that it passes the rules.",
      "Fix every validate_mod ERROR before you call a mod done. WARNs are advisory.",
    ],
    parameters: Type.Object({
      modDir: Type.String({
        description: "Path to the mod directory, for example your_mods/<ModName>",
      }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      // Resolve a relative path against the workspace, which is ctx.cwd. The agent passes
      // your_mods/<name>, and the process cwd is not reliable. install_mod and sync_game_scripts
      // do the same.
      const modDir = params.modDir ? resolve(ctx.cwd, params.modDir) : "";
      if (
        !params.modDir ||
        typeof params.modDir !== "string" ||
        !statSync(modDir, { throwIfNoEntry: false })?.isDirectory()
      ) {
        throw new Error(
          `INVALID_MOD_DIR: ${params.modDir ?? "(not given)"} is not a directory`,
        );
      }

      const findings = [
        ...checkMetadata(modDir),
        ...checkLocalization(modDir),
        ...checkPdxScript(modDir),
      ];
      const errors = findings.filter((f) => f.severity === "error");
      const warnings = findings.filter((f) => f.severity === "warn");
      const semantic = analyzeSemantics(modDir);

      // The semantic lines go into content as their own block. The agent reads content only, and
      // details never reaches it. w.message already starts with `semantic: `, so no prefix here.
      const semanticLines = semantic.warnings
        .slice(0, MAX_CONTENT_LINES)
        .map((w) => `${w.level === "note" ? "NOTE" : "WARN"}: ${w.message}`);
      if (semantic.warnings.length > MAX_CONTENT_LINES) {
        semanticLines.push(
          `... ${semantic.warnings.length - MAX_CONTENT_LINES} more semantic warning(s) omitted`,
        );
      }

      const name = modDir.split(/[\\/]/).pop() || modDir;
      const lines: string[] = [];
      if (errors.length === 0) {
        lines.push(
          `PASS: ${name} is valid - names only. Scope, type, and values are not checked.${warnings.length > 0 ? ` (${warnings.length} warning(s))` : ""}`,
        );
        for (const w of warnings.slice(0, MAX_CONTENT_LINES)) {
          lines.push(`WARN: ${w.rel}: ${w.message}`);
        }
        lines.push(...semanticLines);
      } else {
        lines.push(
          `FAIL: ${name} has ${errors.length} error(s), ${warnings.length} warning(s)`,
        );
        for (const e of errors.slice(0, MAX_CONTENT_LINES)) {
          lines.push(`ERROR: ${e.rel}: ${e.message}`);
        }
        if (errors.length > MAX_CONTENT_LINES) {
          lines.push(
            `... ${errors.length - MAX_CONTENT_LINES} more error(s) omitted`,
          );
        }
        lines.push(...semanticLines);
        lines.push(`NEXT: fix the errors above and re-run validate_mod.`);
      }

      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: {
          ok: errors.length === 0,
          errors: errors.map((e) => `${e.rel}: ${e.message}`),
          warnings: warnings.map((w) => `${w.rel}: ${w.message}`),
          semantic: {
            checked: semantic.checked,
            warnings: semantic.warnings,
          },
        },
      };
    },
  });
}
