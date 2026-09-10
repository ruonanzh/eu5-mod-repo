import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

/**
 * validate_mod — EU5 mod 校验工具（pdx-script 类型）。
 * 移植自 eu5-starry-night-project 的 lint_mod.py，只查语法/约定硬规则：
 *   - metadata.json：存在 / 合法 JSON / 顶层对象 / version semver / 标准字段 / picture
 *   - localization YAML：UTF-8 BOM / 编码 / 文件名 _l_<lang> / l_<lang>: 头 / key 行格式 /
 *     值双引号 / 引号平衡 / 重复 key / mojibake 提示
 *   - PDXScript/GUI（in_game/、main_menu/ 下 .txt/.gui/.gfx/.asset）：
 *     非 UTF-8 / {} 平衡 / "" 平衡（# 注释与跨行字符串感知）/ INJECT:REPLACE: 族关键字只在顶层块
 *
 * 契约见 docs/mod-repo-guide.md §3.1 + game-mod-guide/eu5.md §6；只读、零第三方依赖、
 * content 输出 PASS/FAIL + NEXT（ASCII/英文），details 只放 ok/errors/warnings。
 */

const UTF8_BOM = Buffer.from([0xef, 0xbb, 0xbf]);
const PDX_SUFFIXES = new Set([".txt", ".gui", ".gfx", ".asset"]);
const CONTENT_ROOT_MARKERS = ["/in_game/", "/main_menu/"];
const STANDARD_METADATA_FIELDS = ["name", "id", "version", "supported_game_version", "tags"];
const IMAGE_EXTS = new Set([".png", ".dds", ".jpg", ".jpeg", ".tga"]);
const SEMVER_RE = /^\d+\.\d+(\.\d+)?$/;
const PUA_RE = /[\ue000-\uf8ff]/;
const LOC_KEY_RE = /^\s+(?<key>[^\s:#][^:]*):(?<ver>\d*)\s*(?<rest>.*?)\s*$/;
const LOC_HEADER_RE = /^\ufeff?\s*l_(?<lang>[a-z_]+):(?<tail>.*)$/;
const OVERRIDE_KEYWORD_RE = /(?:TRY_)?(?:INJECT|REPLACE)(?:_OR_CREATE)?:/;
const TOPLEVEL_KEY_RE = /(?<kw>(?:TRY_)?(?:INJECT|REPLACE)(?:_OR_CREATE)?:)?(?<key>[A-Za-z0-9_.\-]+)\s*=\s*\{/;

type Severity = "error" | "warn";
interface Finding {
  severity: Severity;
  rel: string;
  message: string;
}

function toPosix(p: string): string {
  return p.split(sep).join("/");
}

/** 递归列出 modDir 下所有文件（跳过 .git），返回 { absPath, relPosix }。 */
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

function expectedLanguageFromPath(rel: string): string | null {
  const parts = rel.split("/");
  const lowered = parts.map((p) => p.toLowerCase());
  const idx = lowered.indexOf("localization");
  if (idx < 0) return null;
  const tail = parts.slice(idx + 1, -1);
  if (tail.length === 0) return null;
  if (tail[0].toLowerCase() === "replace" && tail.length >= 2) return tail[1].toLowerCase();
  return tail[0].toLowerCase();
}

function decodeUtf8(raw: Buffer): { text: string | null; err?: string } {
  try {
    // 严格 UTF-8 解码（BOM 已单独处理）
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
 * 校验 localization 值的引号结构：以 `"` 开头，找到第一个非转义的闭合 `"`，
 * 闭合后只能剩空白或 `#` 注释。`\"` 转义引号不计入配对；裸引号（如 `"a"b"c"`）
 * 会因闭合后仍有残留被判结构错误。
 */
function localizationValueQuoteOk(rest: string): boolean {
  let i = 1; // 跳过开头 "（调用方已保证 rest 以 " 开头）
  while (i < rest.length) {
    if (rest[i] !== '"') {
      i += 1;
      continue;
    }
    let backslashes = 0;
    for (let j = i - 1; j >= 0 && rest[j] === "\\"; j -= 1) backslashes += 1;
    if (backslashes % 2 === 1) {
      i += 1; // 被转义的引号，继续
      continue;
    }
    // 找到闭合引号：之后只能剩空白或注释
    const tail = rest.slice(i + 1).trim();
    return tail === "" || tail.startsWith("#");
  }
  return false; // 未找到闭合引号（未闭合）
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
      findings.push({ severity: "error", rel, message: "missing UTF-8 BOM (game ignores localization files without a BOM)" });
    }
    const { text, err } = decodeUtf8(raw);
    if (text === null) {
      findings.push({ severity: "error", rel, message: err ?? "not valid UTF-8" });
      continue;
    }
    if (text.includes("\ufffd")) findings.push({ severity: "warn", rel, message: "contains U+FFFD replacement character (file may be damaged)" });
    if (PUA_RE.test(text)) findings.push({ severity: "warn", rel, message: "contains Unicode private-use character(s) U+E000-U+F8FF" });
    const relLower = rel.toLowerCase();
    if ((relLower.includes("/simp_chinese/") || relLower.includes("_simp_chinese")) && simpChineseMojibakeHint(text)) {
      findings.push({ severity: "warn", rel, message: "possible simplified-Chinese mojibake (euro sign / rare ext ideographs); verify in-game" });
    }

    const expectedLang = expectedLanguageFromPath(rel);
    const name = rel.split("/").pop() ?? rel;
    const stem = name.endsWith(".yml") ? name.slice(0, -4) : name;
    if (expectedLang) {
      if (!stem.endsWith(`_l_${expectedLang}`)) {
        findings.push({ severity: "error", rel, message: `filename must end with '_l_${expectedLang}.yml' to match the '${expectedLang}' localization folder` });
      }
    } else if (!/_l_[a-z_]+$/.test(stem)) {
      findings.push({ severity: "error", rel, message: "filename must end with '_l_<language>.yml'" });
    }

    const lines = text.split("\n");
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
          findings.push({ severity: "error", rel, message: `line ${lineNo}: expected a language header 'l_<lang>:' as the first content line` });
          headerSeen = true;
        } else {
          headerSeen = true;
          const lang = headerMatch.groups?.lang;
          if (expectedLang && lang !== expectedLang) {
            findings.push({ severity: "error", rel, message: `line ${lineNo}: header 'l_${lang}:' does not match folder language '${expectedLang}'` });
          }
          continue;
        }
      }
      if (headerMatch) continue; // 后续语言头行允许
      const m = LOC_KEY_RE.exec(line);
      if (!m) {
        findings.push({ severity: "error", rel, message: `line ${lineNo}: malformed localization line (expected '  key: \"value\"' or '  key:0 \"value\"')` });
        continue;
      }
      const rest = m.groups?.rest ?? "";
      if (!rest.startsWith('"')) {
        findings.push({ severity: "error", rel, message: `line ${lineNo}: value must be double-quoted` });
      } else if (!localizationValueQuoteOk(rest)) {
        findings.push({ severity: "error", rel, message: `line ${lineNo}: unbalanced '\"' in value` });
      }
      const key = (m.groups?.key ?? "").trim();
      if (seenKeys.has(key)) {
        findings.push({ severity: "error", rel, message: `line ${lineNo}: duplicate key '${key}' (first seen line ${seenKeys.get(key)})` });
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
    findings.push({ severity: "error", rel, message: "missing .metadata/metadata.json" });
    return findings;
  }
  let raw: Buffer;
  try {
    raw = readFileSync(meta);
  } catch {
    findings.push({ severity: "error", rel, message: "cannot read metadata.json" });
    return findings;
  }
  const { text, err } = decodeUtf8(raw);
  if (text === null) {
    findings.push({ severity: "error", rel, message: err ?? "cannot decode metadata.json" });
    return findings;
  }
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch (e) {
    findings.push({ severity: "error", rel, message: `invalid JSON (${e instanceof Error ? e.message : String(e)})` });
    return findings;
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    findings.push({ severity: "error", rel, message: "metadata.json top-level value must be an object" });
    return findings;
  }
  const obj = data as Record<string, unknown>;
  for (const field of STANDARD_METADATA_FIELDS) {
    if (!(field in obj)) findings.push({ severity: "warn", rel, message: `missing expected field '${field}' (EU5 wiki metadata.json standard structure)` });
  }
  if (typeof obj.version === "string" && obj.version !== "" && !SEMVER_RE.test(obj.version)) {
    findings.push({ severity: "error", rel, message: `version '${obj.version}' is not semver x.x or x.x.x` });
  }
  const picture = obj.picture;
  if (!picture) {
    findings.push({ severity: "warn", rel, message: "missing 'picture' entry (expects e.g. \"thumbnail.png\")" });
  } else if (typeof picture === "string") {
    const candidates = [join(modRoot, picture), join(modRoot, ".metadata", picture)];
    if (!candidates.some((c) => existsSync(c) && statSync(c, { throwIfNoEntry: false })?.isFile())) {
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
          return IMAGE_EXTS.has(f.slice(dot).toLowerCase()) && statSync(f, { throwIfNoEntry: false })?.isFile();
        });
      if (versioned.length > 0) {
        findings.push({ severity: "warn", rel, message: `picture '${picture}' not found, but other image files are versioned here (possible filename mismatch)` });
      }
    }
  }
  return findings;
}

// ---- PDXScript / GUI 括号与引号平衡 + INJECT/REPLACE 顶层块 ----

/** 去掉引号字符串外的 '#' 行注释（保留换行以便行号对应；字符串可跨行）。 */
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
        break; // 行注释，本行剩余忽略
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
      if (depth < 0) return { ok: false, message: `line ${line}: unexpected '}' (more closing than opening braces)` };
    }
  }
  if (inString) return { ok: false, message: `line ${stringStartLine}: unbalanced '\"' (unterminated string)` };
  if (depth > 0) return { ok: false, message: `unbalanced braces: ${depth} '{' never closed` };
  if (depth < 0) return { ok: false, message: "unbalanced braces: extra '}'" };
  return { ok: true };
}

/**
 * INJECT:/REPLACE: 族关键字只能出现在顶层块，且格式为 `KEYWORD:key = {`。
 * comment/string-aware 的 depth 扫描；depth>0 处出现关键字，或顶层关键字后不是 `key = {`，均 ERROR。
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
    // 完整匹配 `[KEYWORD:]key = {`（顶层对象定义，有/无覆盖关键字都算）。
    const m = TOPLEVEL_KEY_RE.exec(cleaned.slice(i, i + 400));
    if (m && m.index === 0 && m.groups?.key) {
      const hasKw = !!m.groups.kw;
      if (hasKw && depth > 0) {
        findings.push({ severity: "error", rel: "", message: `line ${line}: '${m.groups.kw}' override keyword must be at a top-level block, not nested` });
      }
      // 跳过整个 `[KEYWORD:]key = {` 到 '{'，让下一轮对 '{' 计数。
      i += m[0].length - 1;
      continue;
    }
    // 只匹配到裸关键字（如 `REPLACE:` 后不是 `key = {`）→ 格式错。
    const kw = OVERRIDE_KEYWORD_RE.exec(cleaned.slice(i, i + 40));
    if (kw && kw.index === 0) {
      findings.push({ severity: "error", rel: "", message: `line ${line}: malformed override '${kw[0]}' (expected '${kw[0]}key = {')` });
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
    if (!CONTENT_ROOT_MARKERS.some((m) => rl.includes(m))) continue; // README/thumbnail/tools 等非游戏脚本
    let raw: Buffer;
    try {
      raw = readFileSync(abs);
    } catch {
      findings.push({ severity: "error", rel, message: "cannot read file" });
      continue;
    }
    const { text, err } = decodeUtf8(raw);
    if (text === null) {
      findings.push({ severity: "error", rel, message: err ?? "not valid UTF-8" });
      continue;
    }
    const cleaned = stripLineComments(text);
    const bal = checkBraceQuoteBalance(cleaned);
    if (!bal.ok && bal.message) findings.push({ severity: "error", rel, message: bal.message });
    for (const f of checkOverrideKeywords(cleaned)) {
      findings.push({ severity: "error", rel, message: f.message });
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
      "Validate a PDX-script EU5 mod (under your_mods/): metadata.json fields, localization YAML (UTF-8 BOM/header/filename/keys), and PDXScript/GUI brace+quote balance and INJECT/REPLACE top-level rules. Syntax/convention only; not a scope/type semantic validator.",
    promptSnippet: "Validate a mod under your_mods/",
    promptGuidelines: [
      "Use validate_mod after writing a mod to check it passes the spec.",
      "Fix all ERRORs before declaring a mod done; WARNs are advisory.",
    ],
    parameters: Type.Object({
      modDir: Type.String({ description: "Path to the mod directory (e.g. your_mods/<ModName>)" }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, _ctx) {
      const modDir = params.modDir;
      if (!modDir || typeof modDir !== "string" || !statSync(modDir, { throwIfNoEntry: false })?.isDirectory()) {
        throw new Error(`INVALID_MOD_DIR: ${modDir ?? "(empty)"} is not a directory`);
      }

      const findings = [...checkMetadata(modDir), ...checkLocalization(modDir), ...checkPdxScript(modDir)];
      const errors = findings.filter((f) => f.severity === "error");
      const warnings = findings.filter((f) => f.severity === "warn");

      const name = modDir.split(/[\\/]/).pop() || modDir;
      const lines: string[] = [];
      if (errors.length === 0) {
        lines.push(`PASS: ${name} is valid${warnings.length > 0 ? ` (${warnings.length} warning(s))` : ""}`);
        for (const w of warnings.slice(0, MAX_CONTENT_LINES)) {
          lines.push(`WARN: ${w.rel}: ${w.message}`);
        }
      } else {
        lines.push(`FAIL: ${name} has ${errors.length} error(s), ${warnings.length} warning(s)`);
        for (const e of errors.slice(0, MAX_CONTENT_LINES)) {
          lines.push(`ERROR: ${e.rel}: ${e.message}`);
        }
        if (errors.length > MAX_CONTENT_LINES) {
          lines.push(`... ${errors.length - MAX_CONTENT_LINES} more error(s) omitted`);
        }
        lines.push(`NEXT: fix the errors above and re-run validate_mod.`);
      }

      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: {
          ok: errors.length === 0,
          errors: errors.map((e) => `${e.rel}: ${e.message}`),
          warnings: warnings.map((w) => `${w.rel}: ${w.message}`),
        },
      };
    },
  });
}
