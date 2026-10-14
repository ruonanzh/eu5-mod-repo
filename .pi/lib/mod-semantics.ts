/**
 * mod-semantics - name-level semantic validation for an EU5 mod (against the dumps and the vanilla dictionary).
 *
 * It is the semantic part of `validate_mod` (the syntax and the conventions live in mod-lint.ts). It looks for three classes of name problem that a syntax check cannot find
 * (in EU5 a misspelled name often fails silently):
 *   - C1  Existence of a REPLACE:/INJECT: target: a top-level `^(REPLACE|INJECT|TRY_REPLACE|TRY_INJECT|
 *         REPLACE_OR_CREATE|INJECT_OR_CREATE):\s*(\w+)\s*=`, where the target name must exist in the **same class of database**
 *         (the same `common/<directory>/`, with in_game and main_menu merged), either in vanilla or in this mod.
 *         A missing REPLACE:/INJECT: target gives WARN, and TRY_* or _OR_CREATE gives NOTE (often intentional, and never FAIL).
 *         If `game-scripts/game/` is absent or empty, the check skips the vanilla side and gives NOTE.
 *         Note: vanilla in the strict sense means the real original `game-scripts/game/**`, and `game-scripts/workshop/**`
 *         (the mirror of other mods) does not count as vanilla (see the vanillaRoot comment below).
 *         An `INJECT:<name>` whose name is in (this mod union vanilla) and is a top-level definition name
 *         in scripted_effects or scripted_triggers gives WARN `semantic:c1-inject-scripted` (the wiki states that INJECT has no effect on those two and overwrites the whole original definition).
 *         Only `INJECT:` is checked. `REPLACE:` (a legal replace), `TRY_INJECT:`, and `*_OR_CREATE` are outside this rule.
 *   - C2  Spelling check inside a sticky context: only effect, trigger, and modifier left-hand values are checked, the value must be 8 characters or longer, and no bare value is scanned.
 *         A parameter block exits the context, and a name the mod defines itself is excluded. An edit distance of 2 or less gives a did-you-mean.
 *         **The container name list comes from parsing the structure examples in `docs/script_docs`** (an example that holds `<effects>` or `<triggers>`
 *         means the body of that name is an effect or trigger list, so the name enters context, and see loadContainerModel).
 *         The **known name** set is effects union triggers union modifiers union event_targets union on_actions union
 *         custom_localization union the key names in vanilla (`game-scripts/game/**`) union the legal structure fields
 *         (a candidate name that is in the known name set passes through and never becomes a candidate, and see checkCandidate).
 *         A **structure field** whose block name is not an effect or a trigger (option, immediate, potential, visible,
 *         the modifier left-hand value table family, a data driven directory, and others) is still a hand written list. script_docs cannot supply it, so the evidence is
 *         the file structure plus the actual corpus (see CONTEXT_ENTER_NAMES, TRIGGER_CONTAINER_NAMES, and
 *         the JSDoc of DATA_DRIVEN_CONTEXT_DIRS). That list is **frozen**, and a new entry needs confirmation.
 *   - C3  A new object that lacks a loc key: a building or a good that the mod adds must have a loc key for `<id>` and one for `<id>_desc`.
 *         Only the languages the mod already provides are checked (each language reports separately, and when the mod provides no language at all the check uses the base language english).
 *         A localization/ directory under in_game and one under main_menu are both legal. The vanilla side matches C1, so it counts only
 *         `game-scripts/game/**` (the Workshop mirror is excluded).
 *
 * Contract: read only, with zero third party dependencies. Interface fields and return text are always ASCII or English (Windows GBK turns any other byte into garbage).
 * A semantic item gives WARN by default, and never FAIL.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

export interface SemanticWarning {
  code: string;
  message: string;
  /** warn means fix it, and note means only a hint (TRY_* or _OR_CREATE often misses on purpose, and never FAILs). The default is warn. */
  level?: "warn" | "note";
}

export interface SemanticResult {
  checked: string[];
  warnings: SemanticWarning[];
}

// ---- C1: existence of a REPLACE:/INJECT: target ----

/** The override keyword family (the same source as OVERRIDE_KEYWORD_RE in mod-lint.ts, and it includes the TRY_*_OR_CREATE combination). */
const OVERRIDE_KEYWORD = "(?:TRY_)?(?:INJECT|REPLACE)(?:_OR_CREATE)?";
/** A top-level override declaration, that is `KEYWORD:name =` (the name uses `\w+` by design). */
const OVERRIDE_DECL_RE = new RegExp(`^(${OVERRIDE_KEYWORD}):\\s*(\\w+)\\s*=`);
/** A top-level ordinary object definition, that is `name =`. */
const TOPLEVEL_DEF_RE = /^(\w+)\s*=/;
/**
 * The declaration header of a **top-level inline** scripted definition, that is `scripted_trigger <name> = {` or `scripted_effect <name> = {`
 * (the `<name>` may contain `.`). `TOPLEVEL_DEF_RE` cannot match that form (the keyword comes first and is not the name), so an inline definition name
 * never enters `modDefinedNames` or `modScriptedNames`. See `topLevelInlineScriptedNames`.
 *
 * A newline is **allowed** between `=` and `{` (including `\r`, for CRLF compatibility). This closes a boundary the earlier rule left explicit:
 * `scanStickyContext` uses `isWs` (**which includes `\n`**) while it looks for `=` and `{`, so the body of a **multi-line declaration header**
 * (`scripted_effect set_variables =` followed by a newline and `{`) passes through. That regular expression however required `name = {` on
 * **the same line**, so a **definition name** in that same form never entered the set of custom names, and a call to that name was still reported (one false report before the fix).
 * So **this one place** is relaxed to the **same set** as `isWs` (space, tab, newline, carriage return), and every other criterion stays as it was:
 * the line start anchor `^[ \t]*` and the rule that the keyword sits at the **line start** stay in place (the earlier tightening does not regress).
 * The two gaps of "keyword to name" and "name to `=`" are **not** relaxed (vanilla and 33 real mods have **0 places** of either newline form,
 * and a relaxation would only widen the set of custom names and thus **narrow** the detection surface, but no measurement supports it. That case is handled at its minimum surface).
 * Note: this item and `isInlineScriptedKeywordAtLineStart()` are **two implementations of the same rule**, and the drift between them is exactly what started this change.
 * When only this place changes, check that both implementations agree on the "separating whitespace" (see the JSDoc of `topLevelInlineScriptedNames`).
 */
const INLINE_SCRIPTED_DECL_RE =
  /^[ \t]*(?:scripted_trigger|scripted_effect)[ \t]+([A-Za-z_]\w*(?:\.[A-Za-z0-9_]+)*)[ \t]*=[ \t\r\n]*\{/i;

/**
 * The wiki page `Modding/Mod_structure.md` states that **INJECT has no effect on scripted effects and scripted triggers**.
 * Using it on them **overwrites the whole original definition** (a silent trap, because the author believes the mod appends while it actually replaces).
 * The scripted top-level definition names on the mod side are in `modScriptedNames`, and the vanilla side comes from those two directories under the vanilla root
 * (vanilla in the strict sense means `game-scripts/game/**`, which matches C1).
 */
const SCRIPTED_CATEGORIES = ["scripted_effects", "scripted_triggers"] as const;

/** Whether that `<directory>` is a database directory for a scripted effect or trigger (needed when the scripted-INJECT rule narrows by the category of the declaration itself). */
function isScriptedCategory(category: string): boolean {
  return (SCRIPTED_CATEGORIES as readonly string[]).includes(category);
}

/**
 * An override keyword prefix at the **line start** (`REPLACE:`, `INJECT:`, `TRY_*`, `*_OR_CREATE`) is stripped before the C2 scan,
 * so `foo` in `KEYWORD:foo = { … }` becomes a **block name** again. The override body is therefore equal to **an ordinary object of that directory**,
 * and the **existing rules** decide it (a scripted or a data driven directory gives context, and any other directory gives neutral). **No new rule is added**.
 *
 * Why the strip is necessary: the block name test in `scanStickyContext` carries a `prev !== ":"` guard (it stops `scope:actor =` from counting as a block name),
 * so the `foo` of `REPLACE:foo` is skipped, and the bare `{` that follows only runs `push(currentMode())`, which is neutral.
 * So the **whole override body stays unscanned** (`REPLACE:foo = { add_prestigez = 1 }` in scripted_effects also gives 0 items).
 * Why it is safe: the code uses only `OVERRIDE_KEYWORD` (the same source as C1), so a form such as `scope:actor = {`, where the text before `:` is a scope name and not
 * an override keyword, is still **not** stripped. The strip happens only at the line start (leading whitespace is allowed, because a vanilla entry level nested override such as
 * `\tINJECT_OR_CREATE:headwear = {` in `dlc/D008.../in_game/common/genes/D008_genes_accessories.txt:3`
 * is also indented at the line start), and the text after the prefix must really have the `name =` form (`(?=\w+\s*=)`) so that the same shape inside a string is never stripped.
 */
const OVERRIDE_PREFIX_LINE_RE = new RegExp(
  `^(\\s*)${OVERRIDE_KEYWORD}:(?=\\w+\\s*=)`,
  "gm",
);
function stripOverrideKeywordPrefixes(text: string): string {
  return text.replace(OVERRIDE_PREFIX_LINE_RE, "$1");
}

/** TRY_* and *_OR_CREATE carry a "best effort" or "creation allowed" meaning, so a missing target is normal and gives NOTE, never WARN. */
function isAdvisoryKeyword(keyword: string): boolean {
  return keyword.startsWith("TRY_") || keyword.endsWith("_OR_CREATE");
}

/** Strip a '#' line comment that sits outside a quoted string (the same approach as mod-lint.ts, where a string can span lines). */
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
        break; // a line comment, so the rest of this line is ignored
      } else {
        buf += ch;
        if (ch === '"') inString = true;
      }
    }
    outLines.push(buf);
  }
  return outLines.join("\n");
}

interface TopLevelScan {
  /** A top-level ordinary object definition name (`name =`, without an override declaration, because an override declaration itself does not mean the target exists). */
  definitions: Set<string>;
  /** A top-level override declaration, that is `KEYWORD:name =`. */
  overrides: Array<{ keyword: string; name: string }>;
}

/**
 * Scan the top-level objects with comment and string awareness. Only a `name =` or a `KEYWORD:name =` at **depth==0** counts
 * (the line start **allows** leading whitespace, and see the rule below).
 * A `{` and `}` count maintains depth, and a brace or a keyword inside a string never counts (the same approach as checkOverrideKeywords in mod-lint).
 *
 * The rule is **depth==0**, and it is **independent** of leading whitespace. A top-level object in an EU5 script usually starts at column zero, but
 * **a leading tab or space carries no meaning**. The evidence (the real original under `game-scripts/game/**`) is **35 top-level definitions
 * at depth==0 that start with indentation, across 16 files** (a per-directory count: advances 19, modifier_icons 8,
 * cultures 4, genes 1, holy_sites 1, religious_aspects 1, script_values 1), for example
 * `\tbyz_heart_of_orthodoxy_advance = {` in `in_game/common/advances/country_byz.txt:3`.
 * The old implementation used "`i-1 === "\n"` immediately at the line start plus a `^` anchor", and as soon as the line starts with whitespace both `^` anchors fail to match. So
 * **a whole class of depth==0 top-level definitions and override declarations went unparsed** (a C1 false negative, a C1 false positive, and a C3 false negative).
 * The criterion matches `checkOverrideKeywords` in mod-lint, where the pattern was already `^[ \t]*<KEYWORD>:.
 * Note: this function handles only leading whitespace at **depth==0**. An entry level override keyword at depth>0
 * (such as the 6 `\tINJECT_OR_CREATE:` lines **inside** `accessory_genes = {` in `D008_genes_accessories.txt`, where the measurement gives depth==1)
 * belongs to the **syntax layer** (checkOverrideKeywords), and not to C1 or C3.
 */
function scanTopLevel(cleaned: string): TopLevelScan {
  const definitions = new Set<string>();
  const overrides: Array<{ keyword: string; name: string }> = [];
  let depth = 0;
  let inString = false;
  const n = cleaned.length;
  let i = 0;
  while (i < n) {
    const ch = cleaned[i];
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
      if (depth > 0) depth -= 1;
      i += 1;
      continue;
    }
    // depth==0 and at the **line start** (leading whitespace is allowed, since whitespace carries no meaning, and see the function JSDoc for the reason):
    // Skip the leading whitespace first, then try the override declaration (longer and more specific), and try the ordinary definition last.
    if (depth === 0 && (i === 0 || cleaned[i - 1] === "\n")) {
      let j = i;
      while (j < n && (cleaned[j] === " " || cleaned[j] === "\t")) j += 1;
      const window = cleaned.slice(j, j + 200);
      const om = OVERRIDE_DECL_RE.exec(window);
      if (om && om.index === 0) {
        overrides.push({ keyword: om[1], name: om[2] });
        // Do not count the override declaration itself as an existing target, because it is exactly the object under check.
        i = j + om[0].length;
        continue;
      }
      const dm = TOPLEVEL_DEF_RE.exec(window);
      if (dm && dm.index === 0) {
        definitions.add(dm[1]);
        i = j + dm[0].length;
        continue;
      }
    }
    i += 1;
  }
  return { definitions, overrides };
}

function readText(abs: string): string | null {
  try {
    const text = readFileSync(abs, "utf8");
    // Strip a single leading UTF-8 BOM (\ufeff). Some vanilla files (such as subject_types/march.txt)
    // start with the BOM byte and the definition name follows it directly, and without the strip the BOM pushes `march = {` away from the line start, so C1 wrongly reports "not found".
    // The BOM carries no meaning at all, and the strip is safe for every caller (definitionsFrom, the mod scan, and loadScriptDictionary).
    return text.startsWith("\ufeff") ? text.slice(1) : text;
  } catch {
    return null;
  }
}

function isDirectory(p: string): boolean {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/** List every .txt file under a directory recursively (the .git directory is skipped), and return { abs, rel } (rel uses `/` as the separator). */
function walkTxtFiles(root: string): Array<{ abs: string; rel: string }> {
  const out: Array<{ abs: string; rel: string }> = [];
  const walk = (dir: string, relDir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name === ".git") continue;
      const abs = join(dir, e.name);
      const rel = relDir ? `${relDir}/${e.name}` : e.name;
      if (e.isDirectory()) walk(abs, rel);
      else if (e.isFile() && e.name.toLowerCase().endsWith(".txt"))
        out.push({ abs, rel });
    }
  };
  walk(root, "");
  return out;
}

/**
 * Derive the `<directory>` from the relative path of a mod file, that is `{in_game|main_menu}/common/<directory>/…` gives `<directory>`.
 * Only a common/ directory directly under in_game/ or main_menu/ counts, and anything else (README, tools, and others) returns null.
 */
function categoryFromRel(rel: string): string | null {
  const parts = rel.split("/");
  const idx = parts.indexOf("common");
  if (idx <= 0 || idx + 1 >= parts.length) return null;
  const parent = parts[idx - 1];
  if (parent !== "in_game" && parent !== "main_menu") return null;
  return parts[idx + 1];
}

/** Walk up from the mod directory to find the repository root (the directory that holds mod-repo.json), which locates `game-scripts/`. */
function findRepoRoot(start: string): string | null {
  let dir = resolve(start);
  for (;;) {
    if (isDirectory(dir) && existsSync(join(dir, "mod-repo.json"))) return dir;
    const parent = dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

/**
 * Under the vanilla root (the caller passes `game-scripts/game/`, and see vanillaRoot in analyzeSemantics),
 * collect the .txt files under `…/common/<directory>/…` for each `<directory>`.
 * The level is never hard coded (game, jomini, and dlc can all be nested), and the code locates a file by the substring `/common/<directory>/`.
 * Note: the caller **must not** pass the whole `game-scripts/` tree (which includes the `workshop/**` mirror of other mods) as the root, because
 * exactly that was the source of the earlier false negatives.
 */
function findVanillaCommonFiles(
  root: string,
  categories: Set<string>,
): Map<string, string[]> {
  const map = new Map<string, string[]>();
  const walk = (dir: string, relDir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name === ".git") continue;
      const abs = join(dir, e.name);
      const rel = relDir ? `${relDir}/${e.name}` : e.name;
      if (e.isDirectory()) {
        walk(abs, rel);
      } else if (e.isFile() && e.name.toLowerCase().endsWith(".txt")) {
        for (const cat of categories) {
          if (rel.includes(`/common/${cat}/`)) {
            let list = map.get(cat);
            if (!list) {
              list = [];
              map.set(cat, list);
            }
            list.push(abs);
          }
        }
      }
    }
  };
  walk(root, "");
  return map;
}

/** Scan one `<directory>` for all of its top-level object names across a group of files. */
function definitionsFrom(files: string[]): Set<string> {
  const defs = new Set<string>();
  for (const f of files) {
    const text = readText(f);
    if (text === null) continue;
    for (const d of scanTopLevel(stripLineComments(text)).definitions) defs.add(d);
  }
  return defs;
}

/**
 * Collect the **inline** scripted definition names at the **file top level**
 * (`scripted_trigger <name> = { … }` or `scripted_effect <name> = { … }`).
 *
 * Why a separate collector exists: `TOPLEVEL_DEF_RE = /^(\w+)\s*=/` in `scanTopLevel` accepts only the "name + `=`" form,
 * and it cannot match "keyword + name + `=`". So an inline definition name of this mod never enters `modDefinedNames` or `modScriptedNames`,
 * and a call to that name is reported as an unknown name (**a pre-existing gap** the earlier rules only carry into the new scan surface).
 *
 * The rules share their source with the inline definition path in `scanStickyContext` (both are tightened together):
 *  - the keyword sits at the **line start** (only whitespace precedes it), which excludes a form such as `x = scripted_trigger` where the **keyword is a value**,
 *  - the name has the form `<segment>(.<segment>)*` (the same as the narrow path of a dotted inline name, where an identifier character must follow each `.`),
 *  - `=` and `{` follow (**a newline is allowed** between them, which is the same set as `isWs` in the scanner),
 *  - the definition must sit **at brace depth 0 only** (top level), because the same shape in a nested position is not a definition (the custom name set only **suppresses** a candidate,
 *    and a relaxed rule would only introduce a false negative, so the rule stays strict).
 * The caller strips the comments first (it uses the same `stripLineComments(text)` as `scanTopLevel`).
 */
function topLevelInlineScriptedNames(text: string): Set<string> {
  const names = new Set<string>();
  const n = text.length;
  let depth = 0;
  let inString = false;
  let i = 0;
  while (i < n) {
    const ch = text[i];
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
      if (depth > 0) depth -= 1;
      i += 1;
      continue;
    }
    if (depth === 0 && (i === 0 || text[i - 1] === "\n")) {
      let j = i;
      while (j < n && (text[j] === " " || text[j] === "\t")) j += 1;
      const m = INLINE_SCRIPTED_DECL_RE.exec(text.slice(j, j + 200));
      if (m && m.index === 0) {
        names.add(m[1]);
        // Stop on the last character of the declaration header (`{`), so the main loop counts the brace depth as usual.
        i = j + m[0].length - 1;
        continue;
      }
    }
    i += 1;
  }
  return names;
}

// ---- C2: spelling check inside a sticky context ----

/**
 * The list of **structure fields** that enter an effect, trigger, or modifier context (tuned against the reference mods during implementation).
 *
 * Why the list is still hand written: these are **file structure fields** (fixed parts of an event, a building, a law, a technology, or an interaction), and they are **not**
 * effect or trigger names. `docs/script_docs` does not hold them at all, so a **dump cannot derive them**.
 * The evidence is the file structure (the wiki pages `Event_modding`, `Building_modding`, `Subject_type_modding`,
 * `Cabinet_action_modding`, and `Generic_action_modding`, plus the shape of the actual corpus).
 * For comparison, **0 of 53** entries of this list are in the container set derived from the script_docs structure examples (1221 entries), which the authoritative comparison command measures,
 * so that parse can never cover them.
 * The list is **frozen**, and a new entry needs confirmation (the list and the evidence for each entry are recorded separately).
 * A trigger **list container** (`visible`, `enabled`, `on_*`, `*_trigger`, and others) appears in TRIGGER_CONTAINER_NAMES.
 *
 * ===== the modifier left-hand value table family (2026-10) =====
 * The rule for which block counts as a "modifier left-hand value table": the block body is a
 * **left-hand value list** of the form `<modifier name> = <number>`, where the modifier names come from the docs/script_docs/modifiers.log dictionary. Such a body is neither a
 * **parameter table** of an effect or a trigger (a parameter name often collides with the dictionary) nor a scope target block nor a script value. Entering that block gives context, and inside it
 * a left-hand value that is absent from the dictionary and sits within an edit distance of 2 of a dictionary name gives WARN (the same path as an effect or trigger left-hand value).
 *
 * The members are enumerated in two classes (a parenthesized number is the count of "modifier name occurrences under that parent block" in a full vanilla run,
 * and the members are enumerated **by class**, not only the 21 that were listed):
 *  Class A, where the name proves itself (it holds the modifier root or the `_base_values` form):
 *   country_modifier(5005) modifier(2278) definition_modifier(815) location_modifier(429)
 *   modifier_when_in_debate(205) capital_country_modifier(170) country_base_values(161)
 *   left_modifier(120) right_modifier(116) rank_modifier(100) leader_modifier(87)
 *   international_organization_modifier(76) raw_modifier(64) character_modifier(45)
 *   subject_modifier(43) positive_modifier(35) negative_modifier(33) neutral_modifier(32)
 *   capital_modifier(29) overlord_modifier(23) maintenance_modifier(21)
 *   modifier_while_progressing(19) market_center_modifier(16) non_leader_modifier(10)
 *   modifier_on_completion(10) province_modifier(8)
 *  Class B, where the name does not prove itself. In vanilla that name **has both a use whose body is a modifier left-hand value table and blocks of another meaning**,
 *  and the list includes it because the full corpus measurement reports zero false reports (a positive example follows for each name):
 *   literacy_impact(6)  pop_types/00_default.txt:24    local_cultural_tradition = 0.2
 *   goods_demand(30)    age/00_default.txt:14          global_liquor_pop_demand = -0.75
 *   high_power(25)      estates/00_default.txt:66       nobles_estate_max_tax = -1.0
 *   low_power(12)       estates/00_default.txt:72       nobles_estate_max_tax = 0.5
 *   power(12)           estates/00_default.txt:20       parliament_base_support = 0.5
 *   satisfaction(15)    estates/00_default.txt:61       monthly_prestige = 0.2
 *   unique(10)          age/00_default.txt:59           diplomatic_capacity_modifier = 0.25
 *   diplo_chance(18) / diplo_chance_accept_subject(37)
 *                       country_interactions / subject_types: base=… + diplomatic_reputation=…
 *
 *  Warning: the **other uses** of class B (the full corpus measurement reports 0 false reports today, and they are a **potential false report surface** that a dictionary refresh with a new game version may light up):
 *   - power: in_game/common/attribute_columns/27_language.txt:21, 94_dialect.txt:21
 *       `power = { widget = language_power  width = 100  fixed_height = 32  is_constant_width = yes  sort = {…} }` (a GUI column definition, with no modifier left-hand value)
 *   - power: in_game/common/trigger_localization/estate_triggers.txt:13 (a trigger loc key table of none, global, and third)
 *   - satisfaction: in_game/common/attribute_columns/20_province.txt:119 (`widget = province_satisfaction …`)
 *   - goods_demand: main_menu/common/game_concepts/00_game_concepts.txt:82 (alias/family/texture)
 *   - modifier itself: main_menu/gfx/portraits/portrait_modifiers/*.txt holds 405+43 places in total
 *       `modifier = { add = 100000  <trigger> }` (a weight or trigger block, not a modifier table)
 *   Evidence: a full vanilla replica scan. Names such as `fixed_height`, `is_constant_width`, and `portrait_clothing_trigger`
 *   have no correction candidate within 2, so they add 0 warnings.
 *
 * The list deliberately **excludes** the following names, so that they never become an "unrecorded hole" again:
 *  - `(top)`: not a block at all, but a pseudo block name (a top-level object definition name itself collides with the dictionary, such as the
 *    `prestige = {…}` of auto_modifiers and the `form_new_culture = {…}` of cabinet_actions). C2 never treats a top-level definition name as a
 *    left-hand value candidate, and that behaviour is normal.
 *  - `create_character`: an effect **parameter table** (the body holds `adm = {…}`, `dip`, `save_scope_as`, and `if`),
 *    and a hit on it is the normal result of the existing behaviour "a known effect exits into param".
 *  - `capital`: **every** hit in byParentMod comes from the `capital = {…}` at
 *    `main_menu/common/static_modifiers/location.txt:326` (which is the next item, "an arbitrary id object in a data driven directory"). It is not a class of its own, and it does not belong to the trigger container list.
 *  - an **arbitrary id object** inside a data driven directory (an object definition under `common/static_modifiers/**` or `common/auto_modifiers/**`
 *    whose body is also a modifier table, such as `location_base_values`, `development`, and
 *    `rome_reborn` / `is_great_power` / `complacency_impact` / `foodstuffs_exports_banned`):
 *    where the block name is an author-chosen id that cannot be enumerated, so it **must not** enter this name list. The directory level rule already covers the directories inside its
 *    own list with a **directory level** rule (`DATA_DRIVEN_CONTEXT_DIRS` plus `isDataDrivenContextDir`, on the same
 *    `scanStickyContext` path as scripted_effects), and a directory outside that list appears under "deliberate exclusions" in its JSDoc.
 *
 * ===== (added on 2026-10-10 with the confirmation of the player) a container or a structure field under a non-context parent mode (param or neutral) =====
 * Root cause: the branch order in `pushBlock`. The block name is absent from the ENTER list, and the parent mode is **not `context`**
 * (it is `param` **or** `neutral`), so the block never enters context and the body is never scanned. So **the same name is scanable at a context position
 * but is missed under a non-context parent mode** (a position dependent false negative that a look at the block name list alone cannot find).
 * Warning: the main source of the `neutral` parent mode is **a top-level object in a directory that is neither scripted nor data driven**
 * (`(isScripted || isDataDriven) && isTopLevel` does not hold, so a top-level block can only be neutral). Examples are
 * an ability object under `common/unit_abilities/**` and an interaction object under `common/generic_actions/**`.
 * The candidate site count infers a candidate from "the parent block name is in the dictionary", and that rule lists these
 * **neutral parents** as well. So "the parent block name is in the dictionary" is not equal to "the parent position is param". This change adds:
 *  - `hidden` (a wrapper block, in the same family as `hidden_effect` and `hidden_trigger`). vanilla has 15 blocks, of which
 *    14 sit under a **top-level ability object** (parent mode neutral) of `common/unit_abilities/*.txt` as
 *    `hidden = { <trigger> }` (such as `hidden = { has_prisoners = no }` at `execute_prisoners.txt:6`),
 *    and 1 is the **object name** `hidden` at `main_menu/common/game_concepts/00_game_concepts.txt:3321`.
 *    Warning: the form "a param position of a dictionary effect" is a **synthetic fixture**, and
 *    vanilla has **no** instance of it.
 *  - `prev`, `root`, `ROOT`, and `ruler_or_regent` (**scope target blocks**, where the block name is a scope link
 *    keyword or a link name, and the body is an effect or trigger list). The vanilla instances are
 *    `create_character > prev = { set_new_ruler = prev }` (6 places), and
 *    `create_country_from_location > ruler_or_regent = { save_scope_as = … }`,
 *    `start_civil_war > ROOT = { change_player = PREV }` (1 place).
 *    Warning: about the letter case, vanilla uses both spellings (`root = {` 745 blocks and `ROOT = {` 70 blocks, plus
 *    `prev = {` 31 and `PREV = {` 9). This change **explicitly lists only the instances that the candidate site count
 *    measured**, namely `root` and `ROOT`. The more general **keyword
 *    case normalization** (for `AND`, `OR`, `NOT`, `NOR`, and `NAND` at a param position) **is implemented by the keyword normalization**, where
 *    `normalizeKeywordLookup` changes the match of this list (and the other built-in lists) to be case insensitive, so `ROOT` and
 *    `root` are equivalent (the original entries stay only to keep the list count unchanged).
 *  - `limit` and `ai_prerequisite` belong to TRIGGER_CONTAINER_NAMES (see the section of that list below).
 * The zero false report bar: after the addition of the 7 names the whole real mod set passes (the sweep over 33 real mods gives WARN=0),
 * and the false reports for each name were checked one by one (the conclusion is recorded separately).
 *
 * The regression bar: this family was run over 33 real mods (reference, workshop, and Paradox) for "C2 zero false report"
 * and zero false reports is a hard bar.
 */
const CONTEXT_ENTER_NAMES = new Set([
  "option",
  "immediate",
  "after",
  "potential",
  "allow",
  "location_potential",
  "country_potential",
  "on_built",
  "on_destroyed",
  "effect",
  "trigger",
  "hidden_effect",
  "hidden_trigger",
  // --- `hidden` is a wrapper block (the same family as hidden_effect), and the real vanilla site is
  //     under a **top-level ability object** (parent mode neutral) of common/unit_abilities/*.txt as
  //     `hidden = { <trigger> }`, so without the entry the whole body stays unscanned (see the section of this list JSDoc below) ---
  "hidden",
  // --- the modifier left-hand value table family (the rule and the reason for each name are in the JSDoc above) ---
  "modifier",
  "country_modifier",
  "definition_modifier",
  "location_modifier",
  "modifier_when_in_debate",
  "capital_country_modifier",
  "country_base_values",
  "left_modifier",
  "right_modifier",
  "rank_modifier",
  "leader_modifier",
  "international_organization_modifier",
  "raw_modifier",
  "character_modifier",
  "subject_modifier",
  "positive_modifier",
  "negative_modifier",
  "neutral_modifier",
  "capital_modifier",
  "overlord_modifier",
  "literacy_impact",
  "diplo_chance_accept_subject",
  "goods_demand",
  "high_power",
  "maintenance_modifier",
  "modifier_while_progressing",
  "diplo_chance",
  "market_center_modifier",
  "satisfaction",
  "power",
  "low_power",
  "unique",
  "non_leader_modifier",
  "modifier_on_completion",
  "province_modifier",
  // --- scope target blocks (the block name is a scope link keyword or a link name, and the body is an effect or trigger list) ---
  "prev",
  "root",
  "ROOT",
  "ruler_or_regent",
]);

/**
 * A trigger list container: in a real script the body of such a block name is a **trigger or effect list** and not a parameter table,
 * so entering that block gives context. The rule for which block name counts as a "name level container" is:
 *   the block name can be enumerated and its body appears as an effect or trigger list (or a list wrapper) in the full vanilla corpus,
 *   and the block name itself carries no "parameter table of a known effect or trigger" meaning in effects.log or triggers.log.
 * The list comes from the pattern replica statistics measured over real mods, and
 * (on a temporary copy) verified every family over **33 real mods** for "C2 reports zero false reports after the addition" (zero false reports is a hard bar).
 *
 * ===== the visibility and validity lists (of an interaction or a selection, where a parenthesized number is the observed occurrence count) =====
 * - visible                     the visibility trigger list of generic_actions and select_trigger (56)
 * - enabled                     the enable condition trigger list of cabinet_actions and generic_actions (12)
 * - is_shown / show_if          the display condition trigger list of an interaction class (7 / 7)
 * - can_start / can_end         the start and end condition trigger list of a situation or an interaction (5 / 5)
 * - is_valid / ai_is_valid      the validity trigger list of an interaction class (5 / 9)
 * - ai_interaction_source_list  the AI target source list inside select_trigger (an inner every_goods > limit is still context)
 *
 * ===== the review (2026-10, after the container list came from the script_docs parse) =====
 * For comparison, **0 of 58** entries of this list are in the container set derived from the structure examples (1221 entries), because they are **not** effect or trigger
 * names but **structure fields or list positions**, and a dump does not supply them, so the list can only be hand written (the same as CONTEXT_ENTER_NAMES).
 * The review **removed 1 entry** after a check of each item:
 * - `select_trigger` (deleted): the evidence from a full vanilla run is 988 blocks, 6751 body keys, and **0** dictionary hits (a ratio of 0%)
 *   because the body is a **selector configuration** (`looking_for_a`, `name`, a nested `visible`, and `ai_interaction_source_list`),
 *   and it is not an effect or trigger left-hand value list. As an ENTER entry it would treat a configuration name as a left-hand value candidate, which only widens the false report surface.
 *   After the removal its real trigger list positions (`visible` and `ai_interaction_source_list`) stay in the list, so no coverage is lost
 *   (those positions still give 2 hits).
 * The review **keeps** the entries with evidence: `sort_text` (vanilla has 97 blocks and 194 keys, and **100%** of them hit the dictionary, so the dump has no document but the corpus
 * shape really is a trigger list), and `is_shown`, `is_valid`, and `ai_is_valid` (vanilla has 0 blocks, so there is neither evidence nor a false report surface, and
 * they stay after the verification over 33 real mods).
 *
 * ===== the name level gap closure (2026-10, closing the remaining name level gaps) =====
 * The rule shares its source with the visibility and validity lists: **the block name can be enumerated and the body is an effect or trigger list**. The difference is that these block names were previously short circuited by
 * one of two existing branches, "the block name is in the dictionary gives param" or "the parent mode of a top-level object is neutral", so the whole block went unchecked.
 *  - the `on_*` of a situations script or an interaction script: the body is **a list of effects that run at one timing**. The block appears under a top-level
 *    object (situation, casus_belli, and others), and the parent mode is neutral, so without an explicit entry the whole block stays neutral.
 *    The name rule is the `on_<timing>` form. The vanilla counts are on_start 206, on_monthly 148,
 *    on_completion 218 / on_accept 218 / on_activate 145 / on_end 118 / on_debate_passed 225.
 *    The members are the 9 names that have been observed, and the family holds 22 names in total after the class closure (see the closure section below): on_start on_monthly
 *    on_ended on_ending on_completion on_accept on_activate on_end on_debate_passed.
 *  - potential_trigger: a **trigger list container** of auto_modifiers (its body is entirely trigger left-hand values, as in
 *    `potential_trigger = { has_societal_value = … culture = { OR = {…} } }`, vanilla 297).
 *  - ai_will_do: a **script value container**. The rule is "inside a script value container an `if > limit` is still a trigger guard"
 *    (`ai_will_do = { value = 10  if = { limit = { is_situation_active = … } add = 10 } }`).
 *    ai_will_do is a known trigger name in triggers.log, so the old logic judged param and never checked the trigger inside limit (vanilla 476).
 *  - custom_tooltip, custom_description, and show_as_tooltip: **wrapper blocks**. The rule is that the body is
 *    a loc wrapper of "a left-hand value list plus optional triggers" and not a parameter table. Those three names themselves are effect or trigger
 *    names in the effects and triggers dictionaries, so the old logic judged param and short circuited the whole block, and ENTER priority plus an entry in this list is required.
 *    The vanilla counts are custom_tooltip 1253, custom_description 289, and show_as_tooltip 283.
 *  - sort_text: `attribute_columns > info > sort > sort_text > if > limit > { <typo-trigger> }`.
 *    The rule: the only trigger list in a UI sort configuration is `limit`, and its body is a real trigger list (vanilla 192).
 *    (It is marked "add first", and the second measurement over 33 real mods reports zero false reports.)
 *    It was once listed as an "unverified container", and it was added formally after the verification.
 *
 * ===== (added on 2026-10-10 with the confirmation of the player) a trigger list under a non-context parent mode (param or neutral) =====
 * This shares its root cause with the other name level gaps: the name is in the dictionary and the parent mode is not `context` (it is `param` or the `neutral` of a top-level object),
 * so the old logic never scanned the whole block.
 *  - `limit`: a real trigger list. In vanilla **both parent modes of `limit` exist**, namely
 *    `param` (`immediate > assert_if > limit`: `events/hre.txt:732,809,816`,
 *    `events/colonization/settle_the_frontier.txt:523`) and `neutral`
 *    (the `vote_effect > assert_if` chain at `common/resolutions/hre_election.txt:227` is **neutral from the top-level object onward**).
 *    The candidate site count measured **7** places under the criterion "the parent block name is in the dictionary". The change only adds the name to the list and does not change the position test.
 *    Note: `limit` at a **context position** (`every_country = { limit = {…} }`) was already scanned, so this is a
 *    "position dependent" false negative that a look at the block name list alone cannot find.
 *    The existing path `attribute_columns > info > sort > sort_text > if > limit` also uses it.
 *  - `ai_prerequisite`: vanilla has 46 blocks, and every one is a structure field of a **top-level** interaction or generic_action object
 *    (parent mode **neutral**), such as the one at `generic_actions/culture.txt:94`
 *    `remove_accepted_culture > ai_prerequisite = { <triggers> }`. The candidate site count measured 4 places.
 *  The false reports for each name were checked one by one (the conclusion is recorded separately).
 *
 * The list deliberately **excludes** the following names, so that they never become an "unrecorded hole" again:
 * - `switch`: **not an ordinary ENTER entry** but a **label container**, whose direct child keys are case names or values and not effect or trigger
 *   names. See the JSDoc of `LABEL_CONTAINER_NAMES`: a label never becomes a candidate, and a case body enters context.
 * - `limit`, `owner`, `area`, `value`, and `map_color`: the shape is mixed (a trigger list, a parameter table, a
 *   scope target, and a value block), so a name rule cannot tell them apart and they are not added. A missed check inside them is a known **name level undecidable** surface.
 *   Warning: **this rule reverses the judgment on `limit`**, because under a **non-context parent mode** (the param of `immediate > assert_if > limit` and the
 *   neutral of `vote_effect > assert_if > limit`) it is **a real trigger list** (the candidate site count gives 7 places).
 *   So `limit` is now in this list, and
 *   `owner`, `area`, `value`, and `map_color` are still excluded (see the section above).
 * - the `(top)` pseudo block name and an author-chosen id object inside a data driven directory (such as `location_base_values` in
 *   `common/static_modifiers/**`). The block name cannot be enumerated, so it belongs to a **directory level** rule (already implemented as
 *   `DATA_DRIVEN_CONTEXT_DIRS`) and not to this list.
 *   Note: `modifier`, `country_modifier`, `raw_modifier`, `rank_modifier`, and
 *   `literacy_impact` already joined CONTEXT_ENTER_NAMES as part of the **modifier left-hand value table family** (see its JSDoc).
 * - the **unverified members of the same family**, **closed by class** (2026-10): first, the `on_*` member blocks
 *   inside data driven directories such as an international organization, a parliament, a mission, and a bureaucracy (on_debate_failed, on_joined, on_abort, on_deactivate,
 *   on_left / on_fully_activated / on_persistent_completion / on_enable / on_spread_to_country /
 *   on_disband, on_creation, on_persistent_start, and on_calc_effect), and second, the member blocks with the suffix `*_trigger` or `actor_trigger`
 *   (can_join_trigger, create_visible_trigger, invite_visible_trigger,
 *   can_bestow_trigger / can_lead_trigger / can_leave_trigger / auto_leave_trigger /
 *   auto_disband_trigger / auto_bestowal_trigger / can_add_location_trigger / actor_trigger /
 *   can_remove_trigger / can_add_trigger / location_trigger / potential_target_trigger /
 *   pause_trigger). They joined this list by class and passed the "count per name plus zero false reports over 33 real mods" verification (the observed
 *   hits, and all 29 of those names left the top list of the full vanilla run).
 *
 * ===== the items that still appear on the neutral list of the full vanilla run after the closure =====
 * These are **not omissions from this list** and are classified explicitly below:
 * - the **noise** of a parameter name that collides with the dictionary (already noted): `(top)` 6846, `(bare)` 2603, create_character
 *   4794+77, dynamic_historical_event 3648, limit, if, value, add, OR, and others (each one was checked, and
 *   the body of those blocks is a parameter table and not an effect or trigger list).
 * - a member block **inside an arbitrary id object of a data driven directory** (`common/international_organizations/**`,
 *   `common/parliament_issues/**`, `common/formable_countries/**`, `events/**`, and others), for example
 *   create_visible 84, form_effect 56, ai_desire_to_join 54, calc 53, every_subject 53, and
 *   major_trigger 27, can_lead_tooltip_trigger, auto_rescind_trigger, and others. The parent object is an author-chosen
 *   **id** that gives neutral, so every block inside it (including a known effect or trigger name) becomes neutral.
 *   The directory level rule already covers the directories whose "object body is a dictionary left-hand value list" under the rule **a directory is a context** (the list and the depth=1
 *   count for each directory are in the JSDoc of `DATA_DRIVEN_CONTEXT_DIRS`). A directory outside that list is a **deliberate exclusion**
 *   (in the same JSDoc). For a shape such as `events/**`, which does not sit under `{in_game|main_menu}/common/<directory>/`,
 *   the effect and trigger list containers of its objects (`immediate`, `option`, `trigger`, and others) are already covered by the ENTER list.
 *   That change stays inside its boundary and changes nothing.
 */
const TRIGGER_CONTAINER_NAMES = new Set([
  "ai_interaction_source_list",
  "visible",
  "enabled",
  "is_shown",
  "show_if",
  "can_start",
  "can_end",
  "is_valid",
  "ai_is_valid",
  // --- the on_* of a situations script or an interaction script (effect lists) ---
  "on_start",
  "on_monthly",
  "on_ended",
  "on_ending",
  "on_completion",
  "on_accept",
  "on_activate",
  "on_end",
  "on_debate_passed",
  // --- the family closure (the on_* member blocks of data driven directories such as an international organization, a parliament, a mission, and a bureaucracy,
  //     where the body is also an effect or trigger list, and each name passed the zero false report run over 33 real mods) ---
  "on_debate_failed",
  "on_joined",
  "on_abort",
  "on_deactivate",
  "on_left",
  "on_fully_activated",
  "on_persistent_completion",
  "on_enable",
  "on_spread_to_country",
  "on_disband",
  "on_creation",
  "on_persistent_start",
  "on_calc_effect",
  // --- the member blocks with the suffix `*_trigger` or `actor_trigger` (the can_*_trigger of an international organization, the actor_trigger of a scripted
  //     diplomatic objective, and others, where the body is a trigger list) ---
  "can_join_trigger",
  "create_visible_trigger",
  "invite_visible_trigger",
  "can_bestow_trigger",
  "can_lead_trigger",
  "can_leave_trigger",
  "auto_leave_trigger",
  "auto_disband_trigger",
  "auto_bestowal_trigger",
  "can_add_location_trigger",
  "actor_trigger",
  "can_remove_trigger",
  "can_add_trigger",
  "location_trigger",
  "potential_target_trigger",
  "pause_trigger",
  // --- a trigger list container, a script value container, and a loc wrapper ---
  "potential_trigger",
  "ai_will_do",
  "custom_tooltip",
  "custom_description",
  "show_as_tooltip",
  // --- a wrapper of the same family. The documentation placeholder is **singular**, `<trigger>` or `<effects>`, and the
  //     derivation from the `<effects>` and `<triggers>` structure examples cannot see it, so it joins the list explicitly by name (the same family as the loc wrapper). ---
  // calc_true_if: triggers.log `calc_true_if = { amount = 2 <trigger> <trigger> <trigger> }`.
  //   The name is in the triggers dictionary, so the old logic judged param and never scanned the body, and the scope containers inside it
  //   (`any_unit = { <triggers> }`) were short circuited along with it (the real shape is
  //   `ai_will_do > if > limit > calc_true_if` at `country_interactions/lend_unit_to_ally.txt:162-165`).
  "calc_true_if",
  // weighted_calc_true_if: a wrapper of **exactly the same family** as calc_true_if (triggers.log
  //   `weighted_calc_true_if = { amount = 10 5 = { <trigger> } 15 = { <trigger> } 7 = { <trigger> } }`).
  //   uses the same **singular** placeholder `<trigger>`, and the sub-triggers hide inside numeric label blocks). So the `<effects>` and `<triggers>`
  //   structure example derivation cannot see it (the measurement gives `deriveScriptDocContainers` = false). The name is in the triggers dictionary, so
  //   the old logic judged param and never scanned the whole weighted sub-trigger list (vanilla has **5 blocks**: `situations/red_turban_rebellions.txt`,
  //   `events/DHE/flavor_MOS.txt` 3 times, and `flavor_RUS.txt`). The mechanism is **the wrapper list plus 1** (the same as calc_true_if),
  //   and it is neither a letter case issue nor a new position class. It joined the frozen list after a confirmation.
  "weighted_calc_true_if",
  // custom_label and custom_description_no_bullet: **the same family of loc wrapper** as custom_tooltip, custom_description, and
  //   show_as_tooltip (effects.log holds `custom_label = { text = key subject = scope
  //   <hidden effects> }` and `custom_description_no_bullet = { … ... effects ... }`, where the placeholder is also not
  //   `<effects>`, so the derivation cannot see it). The corpus (vanilla plus 33 real mods) uses them **0 times**, so the entry does not change the zero false report surface, and
  //   it exists only to leave no "unrecorded family member" hole (it joined the frozen list).
  "custom_label",
  "custom_description_no_bullet",
  // --- the trigger list inside a UI sort (limit) ---
  "sort_text",
  // --- `limit` and `ai_prerequisite`, which land under a **non-context parent mode** (the param of a dictionary name or the
  //     neutral of a top-level object) as a trigger list (the real shapes are `immediate > assert_if > limit = { <triggers> }` and
  //     `remove_accepted_culture > ai_prerequisite = { <triggers> }`), so ENTER takes priority over
  //     param and neutral, and otherwise the body stays unscanned (see the section of this list JSDoc above) ---
  "limit",
  "ai_prerequisite",
]);

/**
 * ===== containers and control blocks (effect and trigger list containers): derived from the script_docs structure examples (2026-10) =====
 *
 * **The authoritative source** is `docs/script_docs/effects.log` and `triggers.log`, where the **example line** of each `## <name>`
 * (`<name> = { … }`, which may span lines, and the name is case insensitive, as the dump shows with a name such as `every_town_rights_in_Location`)
 * matters only when the example block holds `<effects>` or `<triggers>`, because the body of that name is then an effect or trigger **list** and therefore a container,
 * so the scan **continues** in context after the entry (otherwise a typo in `if = { add_prestigez = … }` stays unseen).
 * This judgment takes priority **above** "the block name is in the dictionary gives param".
 * The measurement of `effects.log` plus `triggers.log` gives **1221 entries** (**1212 = 303 each for every_, any_, ordered_, and random_**, and
 * the 9 without a prefix = if, else, else_if, while, trigger_if, trigger_else, trigger_else_if, switch, and conditional_effect).
 * Note: an example line is **not always** aligned at the line start, because the dump writes `conditional_effect` as a single line in the middle of a line
 * `… Usage: conditional_effect = { effect = <effects> limit = <triggers> [else = <effects>] }`
 * so the rule has **two stages** (see `containersFromLogText`).
 * The authoritative comparison: the authoritative container set is a subset of our container set, with 0 difference.
 *
 * **The maintenance cost drops to zero**: after a dump refresh (a game patch) the code **follows automatically with no change**, and the prefix family no longer needs a hand written list.
 *
 * Warning: **`switch` is a label container and not an ordinary container**. On the trigger side, `switch = { trigger = <t> <value> = { <triggers> } … }`
 * holds case names that are arbitrary **values** (the location_key `antigonish`, the scope prefixed label `god:viracocha`, and others) and not
 * trigger names, so **its direct child keys (the labels) never become candidates**. A case body however is still an effect or trigger **list**, so
 * **a case body enters context**. So it **stays in the container set** (the authoritative comparison now has no exception), and the
 * "label mode" of `LABEL_CONTAINER_NAMES` plus pushBlock handles it separately.
 * History (decided by the player on 2026-10-10): an early version **excluded** switch from the container set to avoid a label false report
 * (the measurement of workshop 3633816300 gives `antigonish` and a did-you-mean of `antagonism`), and the side effect was that
 * a case body was never scanned (a C2 false negative). The current design is a label container: a label still never becomes a candidate, and a case body is scanned.
 *
 * **The containers the dump cannot see (a small set)** live in `DUMP_INVISIBLE_CONTAINERS`. The dump page states that the body is
 * an effect or trigger list, but the example line holds no `<effects>` or `<triggers>` placeholder (`random` = `effects...`,
 * `random_list` = a list of numeric options, and `and`, `or`, `not`, `nor`, `nand`, `any_false`, and `all_false` = boolean operators with
 * no example line in the document), so the parse misses them by nature and the list names them explicitly (see the constant comment for the evidence of each entry).
 */

/**
 * A **label container**: the block **is** an effect or trigger list container, but its **direct child keys are labels**
 * (case names or branch names, which are **values** and not effect or trigger names), so a label itself **never becomes a candidate** and its body enters context.
 *
 * The members and their evidence:
 *  - `switch` (the structure examples in script_docs, where effects.log and triggers.log both give
 *    `switch = { trigger = <single trigger> case_1 = { <effects|triggers> } … fallback = { … } }`).
 *    The rule: the value of `trigger =` is a **scalar** trigger name (68 of the 70 vanilla blocks are like that, and 0 blocks use a block form),
 *    and the body of every other top-level key (a case label plus `fallback`) is an effect or trigger list. A label comes in
 *    **a bare name** (`alpha` and `eventopt1`) and **a scope prefixed form** (`god:viracocha` and `location:constantinople`),
 *    and the second form takes the "bare `{`" path in the scanner (the `prev === ":"` guard produces no block name).
 *    The vanilla scale is 70 blocks and 75 distinct labels (the label counting criterion).
 *    History (decided by the player on 2026-10-10): an early version **excluded** switch from the container set to avoid a label false report
 *    (the measurement of workshop 3633816300 gives `antigonish` and a did-you-mean of `antagonism`), and the side effect was that
 *    **a case body was never scanned** (a C2 false negative over the 75 vanilla labels). The current design is a label container.
 *
 * Warning: the judgment is **separate** from the ENTER and ordinary container lists. A label container name **does not enter** `CONTEXT_ENTER_NAMES` or
 * `TRIGGER_CONTAINER_NAMES` (that would make pushBlock give context, so a label would become a candidate and give a false report), and
 * the **first branch** of pushBlock handles it. From the keyword normalization on, the match of this list (and of `switch`) is case insensitive, so
 * an upper case `SWITCH` also enters label mode (a label never becomes a candidate, and a case body enters context). See `normalizeKeywordLookup`.
 */
const LABEL_CONTAINER_NAMES = new Set(["switch"]);

/**
 * A container whose dump document means an effect or trigger list but whose example line has **no** placeholder (so the parse misses it) is added explicitly.
 * The evidence for each entry comes from the script_docs page itself plus the full vanilla corpus count:
 *  - `random`      effects.log (`effects... # effects to run if the random roll succeeds`), 45 blocks
 *  - `random_list` effects.log "randomly choose effects from a list", 472 blocks (the body is a numeric option such as `10 = {…}`)
 *  - `and`/`or`/`not`/`nor` triggers.log, whose description is "all inside trigger must be true" or "at least one entry inside
 *                  trigger must be true"/"negates content of trigger"/"a negated OR trigger".
 *                  The corpus body hits the dictionary 53%, 69%, 72%, and 97% of the time (vanilla).
 *  - `nand`/`any_false`/`all_false` are NAND or all-false operators in triggers.log (`any_false` = "equivalent to NAND"), and
 *                  the corpus holds very few of them (`nand = {` 1 time). The addition exists only to keep the inner scan of such a block,
 */
const DUMP_INVISIBLE_CONTAINERS = new Set([
  "random",
  "random_list",
  "and",
  "or",
  "not",
  "nor",
  "nand",
  "any_false",
  "all_false",
]);

/**
 * **The fallback list**: the hand written container names used when the `script_docs` structure examples are unavailable (a missing file, a changed format, or no example at all).
 * It is equal to the old behaviour (the exact closure list plus the prefix family) and guarantees that "an unavailable dump neither breaks the tool nor loses existing coverage".
 * The names stay unchanged so that a name list extractor still resolves them by name.
 * A successful parse **does not use** this list (the dump decides the container set completely).
 */
const CONTAINER_CONTROL_NAMES = new Set([
  "if",
  "else",
  "else_if",
  "while",
  "trigger_if",
  "trigger_else",
  "trigger_else_if",
]);
const CONTAINER_CONTROL_PREFIXES = ["every_", "any_", "ordered_", "random_"];

/**
 * The match of the **built-in keyword and container lists** changes to **case normalization** (a PDXScript keyword is case insensitive).
 *
 * The mechanism changes the `has` of **these built-in lists** to be case insensitive, and it does **not** add a name:
 * vanilla writes many of them in upper case (the measurement gives `NOT` 6478 blocks, `AND` 1157, `OR` 4753, `NOR` 561, and `NAND` 75,
 * for about 13000 blocks in total under `game-scripts/game/**`). With a case sensitive match these blocks at a **param** parent position
 * (such as `trigger > assert_if > NOT`) never count as a container, so the whole block is treated as a parameter table and the body stays unscanned (a C2 position dependent false negative).
 * At a **context** position such a block **happens to be scanned** (an unknown block name keeps context inside context), so a look at the block name list alone cannot find it.
 *
 * The boundary (a hard constraint): only these **built-in lists** normalize. A custom name of the player, an object name, and a value **do not** normalize, because
 * `dict.knownNames` and `modDefined` of `checkCandidate` and `dict.names` and
 * `modScripted` of `pushBlock` all stay as they are (the letter case of an object name can really matter for the C1 and C3 checks).
 *
 * The implementation choice (why an instance replaces `has` instead of each call site changing):
 *   1. A call site keeps the literal shape `SET.has(x)`, because an experiment on a temporary copy
 *      uses those lines as its text anchor.
 *   2. A list extractor parses a list from the source by `const NAME = new Set([`, so
 *      the declaration form must stay.
 */
function normalizeKeywordLookup(set: Set<string>): void {
  const lower = new Set([...set].map((n) => n.toLowerCase()));
  set.has = (value: string): boolean =>
    Set.prototype.has.call(set, value) || lower.has(value.toLowerCase());
}

// The match of every built-in list is case insensitive (the mechanism and the boundary are in the JSDoc of normalizeKeywordLookup).
// Note: `ROOT` (added explicitly to close the upper case instance) is equal to `root` after the normalization. The entry stays so that the
//     list count and the document numbers do not change (the 53 entries of the list and the 0/53 of the comparison).
for (const keywordTable of [
  CONTEXT_ENTER_NAMES,
  TRIGGER_CONTAINER_NAMES,
  LABEL_CONTAINER_NAMES,
  DUMP_INVISIBLE_CONTAINERS,
  CONTAINER_CONTROL_NAMES,
]) {
  normalizeKeywordLookup(keywordTable);
}

interface ContainerModel {
  /** The container names (a successful parse gives the dump derived set union the dump invisible containers). */
  names: Set<string>;
  /** The prefix family (it is non-empty only in the fallback mode, and a successful parse already enumerates 1212 of them from the dump). */
  prefixes: string[];
  /** true = the entry came from a script_docs structure example, and false = the fallback hand written list. */
  derived: boolean;
}

/** The container model cached inside the process (per `script_docs` directory). */
const containerModelCache = new Map<string, ContainerModel>();

/** The fallback container model (a new Set, so that a caller never shares a mutable set by accident). */
function fallbackContainerModel(): ContainerModel {
  const names = new Set([...CONTAINER_CONTROL_NAMES, ...DUMP_INVISIBLE_CONTAINERS]);
  normalizeKeywordLookup(names); // the container name match is case insensitive (a spread copy does not inherit `has`, so the set is rebuilt)
  return {
    names,
    prefixes: [...CONTAINER_CONTROL_PREFIXES],
    derived: false,
  };
}

/**
 * Parse the container names from the **structure example lines** of effects.log and triggers.log.
 * For each `## <name>` block, **two steps** look for the example start line (case insensitive):
 *   1. an alignment at the line start, that is `^\s*<name>\s*=\s*\{`, and
 *   2. the position fallback, where **any position** inside the section holds `\b<name>\s*=\s*\{` (the dump writes the example inside a line, as with
 *      the `… Usage: conditional_effect = { … }` of `conditional_effect`).
 * From the start line the code takes the **balanced brace** example block, and a block that holds `<effects>` or `<triggers>` is a container.
 * When neither step finds a start line, or the block has no placeholder, the name does not join (as with `random`).
 */
function containersFromLogText(text: string): Set<string> {
  const found = new Set<string>();
  const lines = text.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const header = /^##\s+(\w+)\s*$/.exec(lines[i]);
    if (header === null) {
      i += 1;
      continue;
    }
    const name = header[1];
    // The name comes from \w+ and holds no regular expression metacharacter, so the direct interpolation is safe.
    const exampleRe = new RegExp(`^\\s*${name}\\s*=\\s*\\{`, "i");
    let j = i + 1;
    let blockStart = -1;
    while (j < lines.length && !/^##\s+\w/.test(lines[j])) {
      if (blockStart < 0 && exampleRe.test(lines[j])) blockStart = j;
      j += 1;
    }
    // The position fallback: when no example sits at the line start, the code falls back to "any position inside the section holds `<name> = {`"
    // (the `\b` plus the `\s*=` directly after the name already excludes a wrong match on the prefix or the suffix of a longer identifier).
    if (blockStart < 0) {
      const anywhereRe = new RegExp(`\\b${name}\\s*=\\s*\\{`, "i");
      for (let k = i + 1; k < j; k += 1) {
        if (anywhereRe.test(lines[k])) {
          blockStart = k;
          break;
        }
      }
    }
    if (blockStart >= 0) {
      let depth = 0;
      let started = false;
      const block: string[] = [];
      for (let k = blockStart; k < j; k += 1) {
        block.push(lines[k]);
        for (const ch of lines[k]) {
          if (ch === "{") {
            depth += 1;
            started = true;
          } else if (ch === "}") {
            depth -= 1;
          }
        }
        if (started && depth <= 0) break;
      }
      const body = block.join("\n");
      if (body.includes("<effects>") || body.includes("<triggers>")) {
        found.add(name);
      }
    }
    i = j;
  }
  return found;
}

/**
 * Parse the container names from the effects.log and triggers.log text (without the fallback list and without the dump invisible containers).
 * The result holds no deliberate exclusion: `switch` is also a container (a label container, handled by `LABEL_CONTAINER_NAMES`).
 */
function deriveContainerNames(effectsText: string, triggersText: string): Set<string> {
  const names = new Set<string>();
  for (const n of containersFromLogText(effectsText)) names.add(n);
  for (const n of containersFromLogText(triggersText)) names.add(n);
  return names;
}

/**
 * A test and audit entry point: given the `docs/script_docs` directory, it returns the container set derived from the structure examples
 * (= the authoritative container set, and an empty set when a file is absent or holds no example).
 * The comparison "the authoritative container set is a subset of our container set" and the frozen list both use it.
 */
export function deriveScriptDocContainers(scriptDocsDir: string): Set<string> {
  const effects = readText(join(scriptDocsDir, "effects.log"));
  const triggers = readText(join(scriptDocsDir, "triggers.log"));
  if (effects === null || triggers === null) return new Set();
  return deriveContainerNames(effects, triggers);
}

/**
 * Parse the container model or read the cached one. A parse that gives 0 containers (a dump with no structure example) gives the fallback hand written list.
 * The cache is per script_docs directory, because the sweep calls it 33 times for 33 mods and the parse runs only once.
 */
function loadContainerModel(
  dir: string,
  effectsText: string,
  triggersText: string,
): ContainerModel {
  const cached = containerModelCache.get(dir);
  if (cached) return cached;
  const names = deriveContainerNames(effectsText, triggersText);
  let model: ContainerModel;
  if (names.size > 0) {
    for (const n of DUMP_INVISIBLE_CONTAINERS) names.add(n);
    normalizeKeywordLookup(names); // the container name match is case insensitive (a spread copy does not inherit `has`, so the set is rebuilt)
    model = { names, prefixes: [], derived: true };
  } else {
    model = fallbackContainerModel();
  }
  containerModelCache.set(dir, model);
  return model;
}

/**
 * The container model in effect for this validation.
 * Why it is a process level variable and not a parameter: it keeps the literal shape of `isContainerControl(name)` and `pushBlock`, because
 * an experiment on a temporary copy uses those lines as a text anchor, and
 * `analyzeSemantics` is synchronous and single threaded, so the value is set and used by the scan at once and no concurrency is observable.
 */
let activeContainers: ContainerModel = fallbackContainerModel();

/**
 * A legal structure field (it looks like a left-hand value but really is a file structure field) enters the "known name" exclusion set and **never becomes a candidate**.
 * The evidence is the file structure (the wiki page `Building_modding` and others) plus the actual vanilla corpus,
 * and **not** script_docs (the dump holds none of those fields). The list is frozen.
 */
const LEGITIMATE_STRUCTURAL_FIELDS = new Set([
  // The building structure fields of building_types (10 or more places in vanilla, such as `building_types/capital_buildings.txt`)
  "remove_if",
  "lifts_fog_of_war",
]);

function isContainerControl(name: string): boolean {
  if (activeContainers.names.has(name)) return true;
  // the prefix family is non-empty only in the fallback mode (the derived mode already enumerates it), and the comparison uses the lower case prefix after the normalization.
  return activeContainers.prefixes.some((p) => name.toLowerCase().startsWith(p));
}

/**
 * A **non-dual-use** container: the container name is **not** in `CONTAINER_CONTROL_NAMES`
 * (`if`/`else`/`else_if`/`while`/`trigger_if`/`trigger_else`/`trigger_else_if`).
 *
 * Why the split exists: a control keyword such as `if` is **dual use**, because it is both an effect or trigger list container and a **script value expression**
 * node (a value branch inside a param block, and the full vanilla corpus gives `if` 19 times and `else` 3 times, as in
 * `add_research_progress = { if = { limit = {…} value = … } }`). Under a param parent block the rule must stay conservative and never pass it through.
 * The body of every other container (`every_*`, `any_*`, `ordered_*`, and `random_*` scope iteration, `random` and `random_list`, and
 * `and`, `or`, `not`, `nor`, `nand`, `any_false`, and `all_false`) **can only** be an effect or trigger list,
 * so it passes through even under param or **neutral** (otherwise the real shape `create_character > every_country > <typo>`, and
 * the body of a top-level `scripted_trigger xx = { NOT = { … } }` in vanilla `events/**`, would go unscanned).
 *
 * **The handling under a `neutral` parent block (recorded explicitly)**:
 * The pass-through rule shares its source with the dual use rule (both belong to the `isUnambiguousContainer` family, so **a dual use control keyword does not pass through under neutral either**),
 * **but the two do not share one function**. neutral uses `isUnambiguousContainerExactCase` with **the original letter case**, and
 * the reason is in the JSDoc of the latter (the country tag `NOR` collides with the `nor` container).
 * `else` and `else_if` really appear **15 times** at a vanilla neutral site (such as the script value branches of `common/script_values/**`), and
 * a pass-through would scan a value branch as a left-hand value list, which widens the false report surface, so the rule stays conservative as under param.
 * The mechanism here is one root cause, "**a neutral parent mode does not pass through**". It is not "the name is absent from the ENTER list",
 * and it is not "the block has no name".
 * The rule only adds to the **derived container set** and introduces no hand written prefix list.
 * Both comparisons (`isContainerControl` and `CONTAINER_CONTROL_NAMES.has`) change to a **case insensitive** match.
 */
function isUnambiguousContainer(name: string): boolean {
  return isContainerControl(name) && !CONTAINER_CONTROL_NAMES.has(name);
}

/**
 * The pass-through rule under a **neutral parent**. It **differs** from the param parent (which uses the case normalization), because
 * here the container name compares with **the original letter case**.
 *
 * Why the two are separate (a measurement, because otherwise a false report appears): after the container test changed to be case insensitive,
 * the country tag **`NOR = { … }`** in vanilla `main_menu/setup/start/10_countries.txt` became equal to the boolean container
 * `nor`. If a neutral parent also passed through after the normalization, the whole body of the country object would enter context, so the structure field
 * `end_date = …` would become a left-hand value candidate (vanilla-as-mod C2 gives **1 false report**).
 * So under neutral only the **original literal of the dictionary** counts. A derived container name and a scope iteration prefix are both lower case, so `nor`, `not`,
 * `or`, and `every_*` pass through as usual, while an all upper case token such as `NOR` or `AND` never matches.
 * The param parent keeps the normalization, because an upper case `NOT`, `AND`, or `OR` there is a real keyword (such as `assert_if > NOT`).
 */
function isUnambiguousContainerExactCase(name: string): boolean {
  const isContainer =
    Set.prototype.has.call(activeContainers.names, name) ||
    activeContainers.prefixes.some((p) => name.startsWith(p));
  return isContainer && !CONTAINER_CONTROL_NAMES.has(name);
}

/** Whether a relative path sits under common/scripted_effects/ or common/scripted_triggers/ (a directory is a context). */
function isScriptedDir(rel: string): boolean {
  const c = categoryFromRel(rel);
  return c === "scripted_effects" || c === "scripted_triggers";
}

/**
 * ===== data driven directories (2026-10): the second kind of "a directory is a context" =====
 *
 * The rule for which `<directory>` counts as a data driven directory whose "body is a left-hand value list" and whose block names cannot be enumerated:
 *  1. The **top-level block name in the directory is an author-chosen id** (`<id> = { … }`), which can never enter ENTER, a container, or the dictionary by name,
 *     so `pushBlock` can only give neutral for a top-level object (the `isScripted` branch is the only entry), and the whole body stays unscanned.
 *  2. The object body holds a **left-hand value that depends directly on the script_docs dictionary**, that is a modifier, effect, or trigger name in the form `name = <number|yes/no|scope|…>`
 *     (or a resource or cost key that collides with a dictionary name), so that "a left-hand value written as a typo within a distance of 2"
 *     is **decidable** at the name level.
 *  3. **Zero false reports over the whole real corpus (a hard bar)**: after the addition the C2 WARN count must stay 0 over 33 real mods (the reference, the workshop, and the
 *     Paradox mod directories), which the directory set experiment measures.
 *
 * A directory that meets 1, 2, and 3 sends its **top-level objects** (and the inner scope blocks) into context, on the same
 * `scanStickyContext` path as scripted_effects. A top-level object name itself **never** becomes a candidate (C2 checks only a body left-hand value, which matches the `(top)` noise criterion).
 *
 * The 6 members (the parenthesized numbers come from the whole real original corpus under `game-scripts/game/**`, where the object body of the directory holds a dictionary left-hand value **directly**
 * at depth=1, and they give the count of such values and the number of distinct ids, where eff, trg, and mod mean the effects, triggers, and modifiers dictionaries):
 *  - `static_modifiers`  The body is a pure modifier left-hand value table with 726 distinct modifier names (monthly_legitimacy 113,
 *                       monthly_prestige 112, local_max_control 51, and others) and 2616 ids.
 *  - `auto_modifiers`    242 distinct modifier names (monthly_towards_hellenization 26, and others) and 140 ids.
 *  - `advances`          487 distinct entries (the `unlock_unit` effect 186 times plus modifier names such as monthly_prestige 68, and others),
 *                       2892 ids, and the body is an effect plus modifier left-hand value table.
 *  - `prices`            17 resource or cost keys (gold 109, stability 87, prestige 53, and others), and those keys are also dictionary names
 *                       (the collision of a dictionary name with a structure key is exactly the premise that makes the check decidable), with 332 ids.
 *  - `holy_sites`        `importance` (a trigger name used 241 times) and 241 ids.
 *  - `building_types`    `employment_size` (465) and `is_foreign` (456), which are trigger names, with 465 ids.
 * All 6 directories have a data driven context directory fixture (6 of 6 hits).
 *
 * The list deliberately **excludes** the following entries, which look like a data driven directory but **must not** enter context as a directory, so that no "unrecorded hole" appears:
 *  - a directory with **no dictionary left-hand value at depth=1** (the only hit is a container name that is already in ENTER), so the entry gains nothing:
 *    `country_interactions`, `character_interactions`, and `generic_actions` (the only dictionary name at depth=1 is
 *    `ai_will_do`, which is already in the ENTER list), and `death_reason` (0 entries).
 *  - a directory whose **body is a structure field table (a boolean, an enum, a color, a texture, or a localization key)**, where a dictionary name at depth=1 is "a legal collision of a field name with the
 *    dictionary" and not a left-hand value list. The entry would treat a field name as a left-hand value candidate (which only widens the potential false report surface), and inside those directories the
 *    real effect and trigger list containers (`potential_trigger`, `on_*`, `*_trigger`, and each `*_modifier`)
 *    are already covered by the name level ENTER and container lists, so the entry is not added:
 *      `religions` (14 names such as `has_karma = yes`), `gods` (`is_female`), `laws` (`requires_vote`),
 *      `casus_belli` (`war_goal_type`), `parliament_agendas` (`importance`), `subject_types`
 *      (7 names such as `has_overlords_ruler`), `international_organizations` (10 enum
 *      fields such as `leader_type`), `topography` (3 terrain fields such as `movement_cost` and `proximity`), and `script_values`
 *      (`value`, `if`, and `multiply` script value expressions plus `save_temporary_scope_as`, where the `if > limit` is the
 *      **value branch** of a script value, which is the same family as the "param value branch" rule above and needs a surgical rule, so it does not belong to this change).
 *    Note: `visible_through_diplomacy = { <trigger list> }` in `subject_types` is a trigger container with an author-chosen name,
 *    so it is a **known name level undecidable** surface. If the real corpus gives a counterexample, the maintenance rule below re-evaluates it.
 *  - every other `common/<directory>` (`countries`, `locations`, and others, which are game state tables, interface and texture tables, and loc tables). Its top-level block name
 *    is not an "author id object", or its body holds no dictionary left-hand value, so the list never adds it.
 *  - the body of a top-level **override object** of `REPLACE:` or `INJECT:` (such as `REPLACE:slave_center = { … }` in the workshop mod
 *    3610028078 at `…/building_types/ftc_foreign_buildings.txt:66`) still does not enter context, because the `KEYWORD:` prefix makes
 *    the line scan see only an unnamed scope block. This is **existing behaviour of the same source** as for `common/scripted_effects/**` (an override body
 *    goes unchecked, and `REPLACE:foo = { add_goldd = 1 }` gives 0 entries in scripted_effects too). It is not part of this directory
 *    rule, and a coverage of it belongs to a separate change (the C2 override body rule) that needs its own zero false report verification.
 *
 * The maintenance rule (where zero false reports comes first): as soon as the real corpus gives a C2 WARN inside an **included** directory, check each item first, and
 *  keep a **true hit** (the author misspelled a modifier, effect, or trigger name), then tighten the directory for a **new false report** (a legal collision of a dictionary name with a structure
 *  field), which may mean removing it from the list, and **record the evidence here**. A missing entry is better than a false report.
 *
 * A note on the names: the constant is not called `DATA_DRIVEN_DIRS` and the function is not called `isDataDrivenDir`, so that they never collide with the `Set` and the
 * function of the same name that an experiment inserts into a temporary copy (a duplicate `const` name gives a SyntaxError and the experiments cannot run).
 */
const DATA_DRIVEN_CONTEXT_DIRS = new Set([
  "static_modifiers",
  "auto_modifiers",
  "advances",
  "prices",
  "holy_sites",
  "building_types",
]);

/** Whether a relative path sits under a data driven directory (the top-level block name is an author id and the body is a dictionary left-hand value list). */
function isDataDrivenContextDir(rel: string): boolean {
  const c = categoryFromRel(rel);
  return c !== null && DATA_DRIVEN_CONTEXT_DIRS.has(c);
}

interface ScriptDictionary {
  names: Set<string>;
  /** Buckets by first letter, which narrow the candidates for the bounded correction search. */
  byFirstLetter: Map<string, string[]>;
  /**
   * The **known names** (the candidate exclusion set): names union event_targets union on_actions union custom_localization
   * union the vanilla key names union the legal structure fields.
   *
   * Warning: why it is **not** merged into `names` directly: inside `pushBlock` `names` also decides whether a block is param
   * or context. For example the body of `dynasty_home = { <trigger list> }` is a trigger list, so
   * adding it to `names` would turn the whole block into param and stop the body scan (a new missed check). So the **block classification logic stays as it is**, and
   * this set affects only `checkCandidate`.
   */
  knownNames: Set<string>;
  /** The container model (from the script_docs structure examples, or the fallback hand written list when the parse is unavailable). */
  containers: ContainerModel;
}

/** `### <name>` (event_targets.log, 334 entries). */
function parseEventTargetNames(text: string | null): string[] {
  if (text === null) return [];
  return [...text.matchAll(/^### (\w+)/gm)].map((m) => m[1]);
}

/**
 * on_actions.log: `<name>:` occupies a whole line (the line end is CRLF, so the pattern uses `\r?$` and not a `$` anchor).
 * The measurement gives 256 entries (a length above 8 serves the exclusion, and a number or a short name is harmless).
 */
function parseOnActionNames(text: string | null): string[] {
  if (text === null) return [];
  return [...text.matchAll(/^([a-z_0-9]+):\r?$/gm)].map((m) => m[1]);
}

/**
 * custom_localization.log **has a hierarchy**: a top-level `<name>:` and the sub-items (bare identifiers) under `Entries:`
 * are **also names**, so one line cannot give one name (a naive line by line parse would also treat `Scope:` and `Random Valid:` as names).
 * The measurement gives 926 top-level entries (464 distinct) plus about 47k Entries sub-items, so they join the known names and only reduce the false reports.
 */
function parseCustomLocalizationNames(text: string | null): string[] {
  if (text === null) return [];
  const out: string[] = [];
  let inEntries = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line === "Entries:") {
      inEntries = true;
      continue;
    }
    if (inEntries) {
      if (line === "" || line.startsWith("-")) {
        inEntries = false; // a separator line or a blank line ends the Entries section
      } else if (/^[A-Za-z0-9_]+$/.test(line)) {
        out.push(line);
        continue;
      }
    }
    const top = /^([A-Za-z0-9_]+):$/.exec(line);
    if (top !== null) out.push(top[1]);
  }
  return out;
}

/**
 * The **line start** forms of a vanilla key name or object name: `name =` and `REPLACE:name =` (an `==` does not count, and a `name:` does not count).
 * Only the line start counts (the `^` anchor), because an identifier inside a value has not "appeared as a key name".
 */
const VANILLA_KEY_RE = /^\s*(?:[A-Z_]+:)?([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/gm;

/** The set of vanilla key names cached inside the process (per vanilla root path). The measurement gives 2830 files in about 0.7s. */
const vanillaKeyNameCache = new Map<string, Set<string>>();

/**
 * Collect every name that has **appeared as a key name or an object name** in the real original `game-scripts/game/**`.
 * Only vanilla counts: 1. vanilla is the only authoritative source of a "known name". 2. A name from another mod would let a circulating typo endorse itself.
 * 3. A name is "legal" when vanilla knows it **or** this mod defines it.
 * The measurement shows this blocks remove_if 82 times, dynasty_home 2 times, lifts_fog_of_war 3 times, birth_date 8612 times, and
 * opinions 2390 / dynasty_names 547 / building_levels 1 / antigonish 3 / cultural_ties 1.
 * One side effect (recorded and acceptable): a typo of vanilla itself such as `hidden_Effect` passes through, and that is not our responsibility.
 */
function collectVanillaKeyNames(vanillaRoot: string): Set<string> {
  const cached = vanillaKeyNameCache.get(vanillaRoot);
  if (cached) return cached;
  const keys = new Set<string>();
  for (const { abs } of walkTxtFiles(vanillaRoot)) {
    const text = readText(abs);
    if (text === null) continue;
    for (const m of text.matchAll(VANILLA_KEY_RE)) keys.add(m[1]);
  }
  vanillaKeyNameCache.set(vanillaRoot, keys);
  return keys;
}

/** The dictionary cached inside the process (keyed by repoRoot and vanillaRoot). It stops the sweep from parsing and scanning vanilla again for each of the 33 mods. */
const dictionaryCache = new Map<string, ScriptDictionary | null>();

/**
 * The directory of this module, for both loaders: `import.meta.dirname` exists only in ESM
 * (Node 24), while a CJS bundle exposes `__dirname` instead (pi-desktop's contract test bundles
 * the tools to CJS, and there that path points at the bundle, not at this file).
 * Returns null when neither is usable, so a caller skips the candidate instead of joining undefined.
 */
function moduleDir(): string | null {
  const metaDir = (import.meta as ImportMeta & { dirname?: unknown }).dirname;
  if (typeof metaDir === "string" && metaDir.length > 0) return metaDir;
  if (typeof __dirname === "string" && __dirname.length > 0) return __dirname;
  return null;
}

/**
 * The code parses the script_docs dictionary: effects, triggers, and modifiers (which give `names` and also serve the block classification), plus the known name additions
 * (event_targets, on_actions, and custom_localization, which only exclude a candidate) plus the vanilla key names.
 * The container model also comes from the structure examples in effects.log and triggers.log of the same directory.
 * The location prefers the module itself (moduleDir() gives ../../docs/script_docs in both ESM and a CJS bundle), and
 * falls back to docs/script_docs at the repository root when it finds nothing (under a real workshop mod findRepoRoot is often null).
 * When nothing is found it returns null, and C2 skips safely (it produces no WARN and no NOTE).
 */
function loadScriptDictionary(
  repoRoot: string | null,
  vanillaRoot: string | null,
): ScriptDictionary | null {
  const cacheKey = `${repoRoot ?? "<null>"}|${vanillaRoot ?? "<null>"}`;
  const cached = dictionaryCache.get(cacheKey);
  if (cached !== undefined) return cached;
  const dirs: string[] = [];
  const ownRoot = moduleDir();
  if (ownRoot) dirs.push(join(ownRoot, "..", "..", "docs", "script_docs"));
  if (repoRoot) dirs.push(join(repoRoot, "docs", "script_docs"));
  for (const dir of dirs) {
    const effects = readText(join(dir, "effects.log"));
    const triggers = readText(join(dir, "triggers.log"));
    const modifiers = readText(join(dir, "modifiers.log"));
    if (effects === null || triggers === null || modifiers === null) continue;
    const names = new Set<string>();
    for (const m of effects.matchAll(/^## (\w+)/gm)) names.add(m[1]);
    for (const m of triggers.matchAll(/^## (\w+)/gm)) names.add(m[1]);
    for (const m of modifiers.matchAll(/^Tag: ([\w]+),/gm)) names.add(m[1]);
    if (names.size === 0) continue;
    const byFirstLetter = new Map<string, string[]>();
    for (const name of names) {
      const key = name[0].toLowerCase();
      let bucket = byFirstLetter.get(key);
      if (!bucket) {
        bucket = [];
        byFirstLetter.set(key, bucket);
      }
      bucket.push(name);
    }
    const knownNames = new Set<string>(names);
    for (const n of parseEventTargetNames(readText(join(dir, "event_targets.log")))) knownNames.add(n);
    for (const n of parseOnActionNames(readText(join(dir, "on_actions.log")))) knownNames.add(n);
    for (const n of parseCustomLocalizationNames(readText(join(dir, "custom_localization.log")))) knownNames.add(n);
    for (const n of LEGITIMATE_STRUCTURAL_FIELDS) knownNames.add(n);
    if (vanillaRoot !== null) {
      for (const n of collectVanillaKeyNames(vanillaRoot)) knownNames.add(n);
    }
    const result: ScriptDictionary = {
      names,
      byFirstLetter,
      knownNames,
      containers: loadContainerModel(dir, effects, triggers),
    };
    dictionaryCache.set(cacheKey, result);
    return result;
  }
  dictionaryCache.set(cacheKey, null);
  return null;
}

/** A bounded Levenshtein distance: as soon as the worst possible distance passes max, the code prunes and returns max+1 (which avoids the full O(n*m) computation). */
function boundedLevenshtein(a: string, b: string, max: number): number {
  const m = a.length;
  const n = b.length;
  if (Math.abs(m - n) > max) return max + 1;
  let prev = new Array(n + 1);
  for (let j = 0; j <= n; j += 1) prev[j] = j;
  for (let i = 1; i <= m; i += 1) {
    const cur = new Array(n + 1);
    cur[0] = i;
    let rowMin = cur[0];
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[n];
}

/** A dictionary name with the same first letter, a length within 1, and an edit distance of 2 or less (a correction candidate). */
function findDidYouMean(name: string, dict: ScriptDictionary): string | null {
  const bucket = dict.byFirstLetter.get(name[0].toLowerCase());
  if (!bucket) return null;
  let best: string | null = null;
  let bestDist = 3;
  for (const candidate of bucket) {
    if (Math.abs(candidate.length - name.length) > 1) continue;
    const d = boundedLevenshtein(name, candidate, 2);
    if (d < bestDist) {
      bestDist = d;
      best = candidate;
      if (bestDist === 1) break; // the name is absent from the dictionary, so the minimum distance is 1 and the result is already optimal
    }
  }
  return bestDist <= 2 ? best : null;
}

/**
 * The C2 candidate hit condition: the length is 8 or more, the name is **absent from the known name set** (the dictionary union event_targets union on_actions union
 * custom_localization union the vanilla key names union the legal structure fields), it is not a name this mod defines, and it has a correction candidate within 2.
 * The `knownNames` test happens only here (at the candidate layer) and never affects the param and context classification of `pushBlock`.
 */
function checkCandidate(
  name: string,
  dict: ScriptDictionary,
  modDefined: Set<string>,
  warnings: SemanticWarning[],
): void {
  if (name.length < 8) return;
  if (dict.knownNames.has(name)) return;
  if (modDefined.has(name)) return;
  const suggestion = findDidYouMean(name, dict);
  if (suggestion !== null) {
    warnings.push({
      code: "semantic:c2",
      message: `semantic: unknown name '${name}' - did you mean '${suggestion}'?`,
    });
  }
}

type ContextMode = "context" | "param" | "neutral" | "label";

function isIdentStart(ch: string): boolean {
  return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || ch === "_";
}
function isIdentChar(ch: string): boolean {
  return isIdentStart(ch) || (ch >= "0" && ch <= "9");
}
function isWs(ch: string): boolean {
  return ch === " " || ch === "\t" || ch === "\n" || ch === "\r";
}

/**
 * The sticky context scan (a character level scan with comment and string awareness, where a stack holds the interior mode of each block):
 * - entering context: the block name is in a list, or the block is a top-level object of scripted_effects or scripted_triggers,
 * - **label mode**: the block name is in `LABEL_CONTAINER_NAMES` (`switch`), so the interior of that block is a label, where
 *   a direct child key (a case label) **never becomes a candidate**, and its child block (a case body or `trigger = { … }`) enters context,
 *   and the **scope prefixed form** of a label (`location:constantinople = { … }`) takes the bare `{` path and also enters context,
 * - keeping context: a scope block (whose block name is absent from the dictionary) never leaves context,
 * - leaving context: the block name is in the dictionary (the parameter block of a known effect, trigger, or modifier), or the block name is a scripted effect or trigger name
 *   this mod defines itself (a call body is a parameter list, such as `_cmm_register_bool_setting_internal = { is_global = 0 }`),
 *   and the interior of that block becomes param,
 * - a `name = ...` left-hand value inside context (including a block name) is a candidate, while a bare value, a length below 8, and a name the mod defines are never scanned.
 * - the scan strips a **line start override keyword prefix** first (`REPLACE:`, `INJECT:`, `TRY_*`, and `*_OR_CREATE`), and
 *   the `foo` of `KEYWORD:foo = { … }` is then an ordinary block name, and the **existing rules** above handle the override body.
 * - the **body of a top-level inline** `scripted_trigger <name> = { … }` or `scripted_effect <name> = { … }`
 *   (which vanilla writes in large numbers inside a **non-scripted directory** such as `events/**`) **is an effect or trigger list**,
 *   which shares its source with the `common/scripted_effects|triggers` directory rule. The old implementation decided by the **directory** alone, so a top-level object here
 *   became `neutral` and its body stayed unscanned. The current code passes it into context explicitly when "the word before the block name is `scripted_trigger` or `scripted_effect` (case insensitive)
 *   and the block sits at the top level".
 * - the rule above did not work for a definition with a **dotted name** (`scripted_trigger flavor_chi.15_foreign_country_trigger = {`),
 *   because the block name test carries a `prev !== "."` and a `prev !== ":"` guard, the ident-run stops at the `.`,
 *   that `{` produces no block name (so it takes the bare `{` path and inherits neutral), and the pass-through above **never triggered**, so the whole body stayed unscanned.
 *   **The guards stay as they are** (they stop exactly a scope path such as `scope:actor = {` or `ROOT.province:xxx = {` from becoming a block name), and
 *   the **narrow path** of `inlineScriptedDottedBodyStart` now judges that one `{` as context at a **top level** position.
 */
function scanStickyContext(
  rawCleaned: string,
  isScripted: boolean,
  dict: ScriptDictionary,
  modDefined: Set<string>,
  modScripted: Set<string>,
  warnings: SemanticWarning[],
  // whether the file sits under a data driven directory (a top-level object is an author id and the body is a dictionary left-hand value list).
  // It passes separately from `isScripted` and is not ORed here, so that the literal form of the second line
  // `isScriptedDir(rel),` at the call site stays unchanged, because a temporary-copy experiment uses that line as its anchor.
  isDataDriven: boolean,
): void {
  // the code strips the line start override keyword prefix first (the reason and the rule are in the JSDoc of stripOverrideKeywordPrefixes).
  const cleaned = stripOverrideKeywordPrefixes(rawCleaned);
  const n = cleaned.length;
  const stack: ContextMode[] = [];
  let inString = false;
  let i = 0;

  const currentMode = (): ContextMode =>
    stack.length > 0 ? stack[stack.length - 1] : "neutral";

  // take the **word before** a position (skip the whitespace and read a whole identifier run backward), which identifies
  // the inline definition of `scripted_trigger <name> = {` or `scripted_effect <name> = {` (the word before the block name).
  const prevWordBefore = (pos: number): string => {
    let p = pos - 1;
    while (p >= 0 && isWs(cleaned[p])) p -= 1;
    let q = p;
    while (q >= 0 && isIdentChar(cleaned[q])) q -= 1;
    return q === p ? "" : cleaned.slice(q + 1, p + 1);
  };
  /** The keywords of a top-level inline scripted definition (case insensitive, which matches the built-in keyword criterion). */
  const isInlineScriptedKeyword = (word: string): boolean => {
    const w = word.toLowerCase();
    return w === "scripted_trigger" || w === "scripted_effect";
  };
  /**
   * Whether the `scripted_trigger|scripted_effect` keyword sits at the **line start** (only whitespace precedes it up to the line start).
   *
   * Why this rule exists: the old rule looked only at "the word before the block name is a scripted_* keyword", so after a form where the **keyword is a value**
   * (`zz_meta = scripted_trigger`) the **next top-level block** was taken for an inline definition, so the body of that block entered context
   * and the scan went too wide (a **potential false report surface** that the earlier pass-through introduced and the dotted name path extended). In a real shape the keyword sits at the line start
   * (all 548 "keyword + name + `=`" sites of the full vanilla corpus sit at the line start, and across vanilla and 33 real mods the measurement
   * gives 0 places of "the keyword is a value").
   *
   * The correction: the rule is this **stricter** one, "the keyword must sit at the **line start** (only whitespace precedes it up to the line start)", which
   * excludes a form such as `x = scripted_trigger` (the keyword as a value) and relaxes no true hit (the positive cases above do not regress).
   * The old JSDoc text "the previous non-whitespace character is not `=`" is only an **equivalent effect** in this case and not the implementation rule (the implementation is never looser than it), so
   * the wording here matches the implementation.
   */
  const isInlineScriptedKeywordAtLineStart = (pos: number): boolean => {
    if (!isInlineScriptedKeyword(prevWordBefore(pos))) return false;
    let p = pos - 1;
    while (p >= 0 && isWs(cleaned[p])) p -= 1;
    let q = p;
    while (q >= 0 && isIdentChar(cleaned[q])) q -= 1;
    let s = q; // q = the character before the keyword (the ident-run)
    while (
      s >= 0 &&
      (cleaned[s] === " " || cleaned[s] === "\t" || cleaned[s] === "\r")
    )
      s -= 1;
    return s < 0 || cleaned[s] === "\n";
  };

  /**
   * A top-level inline scripted definition with a **dotted name**. It returns the index of its body `{` and returns -1 on a miss.
   *
   * The mechanism (do not confuse it with a neighbouring rule): the block name test carries a `prev !== "."` and a `prev !== ":"` guard, so
   * the ident-run of `scripted_trigger flavor_chi.15_foreign_country_trigger = {` stops at the `.`,
   * that `{` **produces no block name**, the pass-through of "the word before the block name is scripted_*" **never triggers**, and the whole body stays unscanned
   * (it is **not** the "a neutral parent mode does not pass through" rule, **not** "the name is absent from ENTER", and
   * **not** "a scope path has no block name").
   *
   * This path is a **separate** narrow rule: the caller has already confirmed that "the word before is in {scripted_trigger, scripted_effect}"
   * and that the block sits at the **top level**. Here the code accepts only `<name> (.<name segment>)+ = {`, where an identifier must follow each `.` and a `:` means no match
   * (so `ROOT.province:xxx = {` and `scope:actor = {` are never consumed by this path). The return value is only that one `{`,
   * which `pushBlock(..., isInlineScriptedDecl = true)` judges as context. It **does not** change the ordinary block name path,
   * **does not** add another block name, and **does not** relax a guard.
   */
  const inlineScriptedDottedBodyStart = (nameEnd: number): number => {
    let d = nameEnd;
    let sawDot = false;
    while (d < n && cleaned[d] === ".") {
      let e = d + 1;
      while (e < n && isIdentChar(cleaned[e])) e += 1;
      if (e === d + 1) return -1; // an identifier does not follow the `.`, so the name is not a dotted name
      d = e;
      sawDot = true;
    }
    if (!sawDot) return -1;
    let t = d;
    while (t < n && isWs(cleaned[t])) t += 1;
    if (t >= n || cleaned[t] !== "=" || cleaned[t + 1] === "=") return -1;
    let r = t + 1;
    while (r < n && isWs(cleaned[r])) r += 1;
    return r < n && cleaned[r] === "{" ? r : -1;
  };

  /**
   * Whether the bare `{` at the current position directly follows **a `name =` form that the `prev === ":"` guard skipped**.
   *
   * The mechanism: in `scope:zz_case_tgt = { … }`, `ROOT.province:zzz = { … }`, and `location:constantinople = { … }`
   * the character before each "name" is a `:`, so the guard of the ident branch in the main loop (`prev !== ":"`) skips it,
   * that `{` **produces no block name**, it takes the bare `{` branch, and it only inherits the parent mode. When the parent mode is `param` or `neutral`,
   * the whole body (an effect or trigger list) stays unscanned, which is a **C2 false negative**.
   * (This is the same family as the position rule with a **different mechanism**: there the name is in the ENTER list but the position is param",
   *  the dotted name case is "a dotted name plus a scripted keyword", and this one is "there is **no block name at all** to compare".)
   *
   * The rule (strict, and it looks only at the adjacent text): from the `{` leftward there is whitespace (including a newline, the same set as `isWs`), then an `=` (and not an `==`),
   * then whitespace, then **a whole identifier run** (which starts with an identifier start character and is therefore really a "name"), then a **`:`** right before it.
   * Every other form (`?= {`, `"…" = {`, `name = {`, and `0.5 = {`) never matches and still inherits the parent mode.
   *
   * Warning: **why only a `:` counts and a `.` does not** (this differs from the literal "`prev === ':'` / `'.'`", and this note must stay):
   * Both comparison lines (`scope:xxx` and `ROOT.province:xxx`) have a `:` directly before the assigned name, so the `:` already covers the whole comparison surface, and
   * an assigned name directly after a `.` appears in another form that is **not a scope path**, namely a dotted **object id** (`zz_ns.zz_t = { … }`).
   * A judgment of context for it would break that negative case directly
   * (the `zz_ns.zz_t = { has_traitq = yes }` after `some_kind = scripted_effect` must stay at **0 entries**),
   * which conflicts directly with the required result of that case.
   * A path with a `:` (`scope:x`, `X.y:z`, and `location:constantinople`) is always a **scope reference with a target**, and
   * its body is an effect or trigger list, while an `a.b = {` without a `:` cannot be told apart from an object id. So "only a `:` counts" is the smallest fix with the lowest risk of refutation.
   * **The guard itself stays as it is** (neither the override prefix strip nor the narrow path above is affected, because the latter already runs
   * `i = bodyStart + 1` in the ident branch and skips that `{`).
   */
  const isScopePrefixedBodyBrace = (pos: number): boolean => {
    let p = pos - 1;
    while (p >= 0 && isWs(cleaned[p])) p -= 1;
    if (p < 0 || cleaned[p] !== "=" || cleaned[p - 1] === "=") return false;
    p -= 1;
    while (p >= 0 && isWs(cleaned[p])) p -= 1;
    const nameEnd = p;
    while (p >= 0 && isIdentChar(cleaned[p])) p -= 1;
    if (p === nameEnd) return false; // the left side of the `=` holds no identifier
    if (!isIdentStart(cleaned[p + 1])) return false; // the segment starts with a digit, so it is not a "name" (as in `flavor.1`)
    return cleaned[p] === ":";
  };

  const pushBlock = (
    name: string,
    parentMode: ContextMode,
    isInlineScriptedDecl: boolean,
  ): void => {
    const isTopLevel = stack.length === 0;
    // A label container (`switch`): its **direct child keys are labels or values**, so it enters "label mode", where a label never becomes a candidate and
    // its child block (a case body) enters context. This test comes **first**, because a direct child key of switch is a label whatever the parent block is.
    if (LABEL_CONTAINER_NAMES.has(name)) {
      stack.push("label");
      return;
    }
    // Inside label mode every child block is a case body (`<label> = { … }`) or the `trigger = { … }` of switch, and
    // the body of both is an effect or trigger list, so it enters context (otherwise a case body stays unscanned as a whole).
    if (parentMode === "label") {
      stack.push("context");
      return;
    }
    // a top-level inline `scripted_trigger <name> = { … }` or `scripted_effect <name> = { … }`
    // (in a non-scripted directory such as `events/**`), where the body is an effect or trigger list from the same source as a scripted directory,
    // so it enters context (otherwise the whole block is neutral and the body stays unscanned). Only the **top level** counts, so no nested surface is added.
    if (isInlineScriptedDecl && isTopLevel) {
      stack.push("context");
      return;
    }
    // the pass-through rule (both parent modes): a **non-dual-use container** under a param or **neutral** parent block (a scope iteration
    // every_/any_/ordered_/random_, random/random_list, and/or/not/nor/nand/any_false/all_false)
    // still has an effect or trigger list as its body, so it passes into context. Otherwise the whole block is short circuited to param or neutral and the body stays unscanned
    // (the real shape `create_character = { every_country = { <typo> } }`, and the `NOT` of a top-level
    // `scripted_trigger xx = { NOT = { … } }` in vanilla `events/**`). A dual use control keyword **never passes through**
    // (see the JSDoc of isUnambiguousContainer: a value branch of if or else inside param or neutral must stay unscanned).
    // Warning: the pass-through rule **differs** between the two parent modes, because param uses the normalized version and neutral uses the original letter case
    // (the reason is in the JSDoc of isUnambiguousContainerExactCase: a country tag such as `NOR` collides with `nor`).
    if (
      (parentMode === "param" && isUnambiguousContainer(name)) ||
      (parentMode === "neutral" && isUnambiguousContainerExactCase(name))
    ) {
      stack.push("context");
      return;
    }
    let mode: ContextMode;
    // The ENTER list takes priority **above** param and neutral (the later additions brought `limit`, `hidden`,
    // `ai_prerequisite`, `prev`, `root`, `ROOT`, and `ruler_or_regent` into this path, where the `neutral` parent mode
    // comes mainly from a top-level object of a directory that is neither scripted nor data driven). An effect, a trigger, a hidden_effect, a hidden_trigger, or a container block
    // nested inside the parameter block of a known effect (the real shape is
    // `create_building_country_in_location > hidden_effect > <effect>`) still has an
    // effect or trigger list as its body, and a test of `parentMode === "param"` first would short circuit the whole block into a parameter table and miss the check.
    if (CONTEXT_ENTER_NAMES.has(name) || TRIGGER_CONTAINER_NAMES.has(name))
      mode = "context";
    else if (parentMode === "param") mode = "param";
    else if (parentMode === "context" && isContainerControl(name)) mode = "context";
    else if (parentMode === "context")
      mode = dict.names.has(name) || modScripted.has(name) ? "param" : "context";
    else if ((isScripted || isDataDriven) && isTopLevel) mode = "context";
    else mode = "neutral";
    stack.push(mode);
  };

  while (i < n) {
    const ch = cleaned[i];
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
      // A bare `{` (after `?=`, `scope:actor =`, and others) counts as a scope block and inherits the parent mode.
      // Warning: label mode is an exception, because a **scope prefixed label** such as `location:constantinople = {` produces no block name
      // (the `prev === ":"` guard), so the `{` met here is a **case body** and enters context.
      // the body of `scope:xxx = {`, `ROOT.province:xxx = {`, and `location:constantinople = {`
      // is also an effect or trigger list, but that `{` **produces no block name** because of the `prev === ":"` guard, so the old implementation only inherited
      // the parent mode and left the whole block unscanned under param or neutral. A hit of `isScopePrefixedBodyBrace` also enters context
      // (the guard still stays as it is, and the reason that only a `:` counts and a `.` does not is in the JSDoc of that helper).
      stack.push(
        currentMode() === "label" || isScopePrefixedBodyBrace(i)
          ? "context"
          : currentMode(),
      );
      i += 1;
      continue;
    }
    if (ch === "}") {
      if (stack.length > 0) stack.pop();
      i += 1;
      continue;
    }
    if (isIdentStart(ch)) {
      let j = i;
      while (j < n && isIdentChar(cleaned[j])) j += 1;
      const name = cleaned.slice(i, j);
      const prev = i > 0 ? cleaned[i - 1] : "";
      // the narrow path of a top-level inline `scripted_trigger|scripted_effect <dotted name> = {` (see
      // the JSDoc of inlineScriptedDottedBodyStart). It takes effect **at the top level only**, and only when the keyword sits at the **line start**
      // (the line start tightening, which excludes the over-wide scan of a form such as `x = scripted_trigger` where the **keyword is a value**),
      // because that `{` produces no block name under the `prev !== "."` guard, and this path judges it as context on its own.
      if (
        stack.length === 0 &&
        prev !== ":" &&
        prev !== "." &&
        !isIdentChar(prev) &&
        isInlineScriptedKeywordAtLineStart(i)
      ) {
        const bodyStart = inlineScriptedDottedBodyStart(j);
        if (bodyStart >= 0) {
          pushBlock(name, currentMode(), true);
          i = bodyStart + 1;
          continue;
        }
      }
      let k = j;
      while (k < n && isWs(cleaned[k])) k += 1;
      if (
        k < n &&
        cleaned[k] === "=" &&
        cleaned[k + 1] !== "=" &&
        prev !== ":" &&
        prev !== "." &&
        !isIdentChar(prev)
      ) {
        const mode = currentMode();
        if (mode === "context") {
          checkCandidate(name, dict, modDefined, warnings);
        }
        let r = k + 1;
        while (r < n && isWs(cleaned[r])) r += 1;
        if (r < n && cleaned[r] === "{") {
          pushBlock(
            name,
            mode,
            isInlineScriptedKeywordAtLineStart(i),
          );
          i = r + 1;
          continue;
        }
        i = r;
        continue;
      }
      i = j;
      continue;
    }
    i += 1;
  }
}

// ---- C3: a new object that lacks the expected loc key ----

/** The object classes that C3 covers: a building or a good that the mod adds. */
const C3_CATEGORY_ORDER = ["building_types", "goods"];
/** The class noun used in the text. */
const C3_CATEGORY_NOUN: Record<string, string> = {
  building_types: "building",
  goods: "goods",
};
/**
 * The language used for the judgment when the mod has no localization directory at all (the base language).
 * The meaning of "only the languages the mod already provides are checked" is "never report a missing **other** language", and not "skip the check when no loc exists", because
 * a new object with no loc at all is exactly the case C3 looks for, so the check falls back to the base language english and runs once.
 */
const C3_DEFAULT_LANGUAGE = "english";
/** The language suffix in a loc file name, that is `<name>_l_<lang>.yml` (a `.yaml` also passes). */
const LOC_FILE_LANG_RE = /_l_([a-z0-9_]+)\.ya?ml$/i;
/**
 * The definition key of a loc line, with a **loose match** that does not require quotes around the value. One extra false key only drops one report, while
 * one missed true key creates a false report. Zero false reports is a hard bar, so the loose match is the safer side.
 */
const LOC_KEY_LINE_RE = /^\s*([A-Za-z0-9_]+)\s*:\s*(?:\d+\s*)?/;

/**
 * Scan `{in_game|main_menu}/localization/**` of the mod and collect the loc keys by the **language suffix of the file name**.
 * The language comes from the file name and not from the directory name, because a real workshop mod has a nesting such as `localization/replace/<lang>/…`
 * where the directory name would add a false language `replace`. The scan is recursive and covers `<lang>/<subdirectory>/…`.
 */
function collectLocKeys(modPath: string): Map<string, Set<string>> {
  const byLang = new Map<string, Set<string>>();
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
      if (e.isDirectory()) {
        walk(abs);
        continue;
      }
      if (!e.isFile()) continue;
      const m = LOC_FILE_LANG_RE.exec(e.name);
      if (!m) continue;
      const lang = m[1].toLowerCase();
      const text = readText(abs);
      if (text === null) continue;
      let keys = byLang.get(lang);
      if (!keys) {
        keys = new Set<string>();
        byLang.set(lang, keys);
      }
      for (const line of text.split(/\r?\n/)) {
        const km = LOC_KEY_LINE_RE.exec(line);
        if (km) keys.add(km[1]);
      }
    }
  };
  for (const base of ["in_game", "main_menu"]) {
    walk(join(modPath, base, "localization"));
  }
  return byLang;
}

export function analyzeSemantics(
  modPath: string,
  opts?: unknown,
): SemanticResult {
  void opts;
  const checked: string[] = [];
  const warnings: SemanticWarning[] = [];

  const modFiles = walkTxtFiles(modPath);

  // One pass over the mod collects the override declarations and the top-level definitions by `<directory>` (in_game and main_menu merge into one class).
  const overridesByCategory = new Map<
    string,
    Array<{ keyword: string; name: string }>
  >();
  const modDefsByCategory = new Map<string, Set<string>>();
  // C2 excludes "a name this mod defines itself", which is a top-level `name =` definition name of any .txt file (merged across category).
  const modDefinedNames = new Set<string>();
  // Only the top-level definition names of a scripted_effects or scripted_triggers directory, because only those are names that
  // a call invokes with a parameter list. They serve the param judgment (an object name such as a building or a good takes no part).
  const modScriptedNames = new Set<string>();
  for (const { abs, rel } of modFiles) {
    const category = categoryFromRel(rel);
    const text = readText(abs);
    if (text === null) continue;
    const cleanedText = stripLineComments(text);
    const scan = scanTopLevel(cleanedText);
    for (const d of scan.definitions) modDefinedNames.add(d);
    // a **top-level inline** scripted definition name is also "a name this mod defines". `TOPLEVEL_DEF_RE` accepts only
    // the "name + `=`" form and cannot match `scripted_trigger <name> =`, so a call to it is reported as an unknown name (a pre-existing gap).
    // An inline definition shares its source with `common/scripted_effects|triggers` (see the inline pass-through in scanStickyContext), so
    // its name enters modDefinedNames (which suppresses a C2 candidate) and modScriptedNames (where a call body is a parameter list, which gives param) at the same time.
    for (const d of topLevelInlineScriptedNames(cleanedText)) {
      modDefinedNames.add(d);
      modScriptedNames.add(d);
    }
    if (isScriptedDir(rel)) {
      for (const d of scan.definitions) modScriptedNames.add(d);
    }
    if (!category) continue;
    if (scan.overrides.length > 0) {
      const list = overridesByCategory.get(category) ?? [];
      for (const o of scan.overrides) list.push(o);
      overridesByCategory.set(category, list);
    }
    if (scan.definitions.size > 0) {
      const defs = modDefsByCategory.get(category) ?? new Set<string>();
      for (const d of scan.definitions) defs.add(d);
      modDefsByCategory.set(category, defs);
    }
  }

  // The availability of the vanilla side: `game-scripts/game/` is absent, or the total number of common files collected under it for `<directory>` is 0
  // (empty or broken). In either case the code cannot decide whether a target is a vanilla object, so it falls back to one NOTE and skips the per-target output.
  // Note: when the vanilla root holds content and only one particular `<directory>` happens to have no vanilla file, that is a true hit and gives WARN as usual.
  const repoRoot = findRepoRoot(modPath);
  // The order that locates game-scripts: 1. the repository root of the mod (findRepoRoot), then 2. the repository root of the tool itself (upward from moduleDir()).
  // A workshop or Paradox mod directory sits outside the repository, so findRepoRoot is often null and the tool falls back to its own repository (the same approach as loadScriptDictionary).
  const gameScriptsCandidates: string[] = [];
  if (repoRoot) gameScriptsCandidates.push(join(repoRoot, "game-scripts"));
  const ownRoot = moduleDir();
  if (ownRoot) gameScriptsCandidates.push(join(ownRoot, "..", "..", "game-scripts"));
  const gameScriptsRoot =
    gameScriptsCandidates.find((c) => isDirectory(c)) ?? null;
  // The vanilla root is strictly the real original `game-scripts/game/**` and **excludes** `game-scripts/workshop/**`.
  // Why the workshop mirror is excluded: `sync_game_scripts` mirrors the content of **every subscribed workshop mod** to
  // `game-scripts/workshop/<mod_id>/**` (see sync-game-scripts.ts). If it counted as vanilla, then
  // a mirrored mod whose own object also sits in the mirror would be judged "vanilla already has it" by `vanilla.has(id)`, so
  //   - C3: the loc check of a new object is skipped, and C3 is effectively dead for a mirrored workshop mod (a false negative), and
  //   - C1: a `REPLACE:` target that exists only in the mirror of another mod is judged "present", which drops a report.
  // The decision (the workshop mirror does not count as vanilla):
  // vanilla in the strict sense means the real original `game-scripts/game/**`.
  // The fallback criterion stays unchanged: an absent or empty `game-scripts/game/` skips the vanilla side and gives NOTE.
  const vanillaRoot =
    gameScriptsRoot !== null && isDirectory(join(gameScriptsRoot, "game"))
      ? join(gameScriptsRoot, "game")
      : null;

  // C3 also needs the vanilla side building and good names, and to save one walk of the whole tree the code collects them together with the `<directory>` of C1 in one pass.
  // However the availability test of C1 (totalVanillaFiles and vanillaAvailable) still **counts only the `<directory>` of C1 itself**, so that
  // the added C3 classes never turn the game-scripts fallback branch of C1 from NOTE back into a normal check.
  // the code picks only `INJECT:` (`REPLACE:`, `TRY_INJECT:`, and `*_OR_CREATE` are outside this check).
  // the code also records **the category of the override declaration itself**, because the question "is the target a scripted name" narrows by category
  // (a same-name collision across categories). For example the target of `INJECT:unlock_advance_effect` in `common/effect_localization/`
  // really is an effect_localization object (that name **happens** to be a vanilla scripted_effect name too), so it is not a trap.
  const injectOverrides: Array<{
    category: string;
    keyword: string;
    name: string;
  }> = [];
  for (const [category, list] of overridesByCategory)
    for (const o of list)
      if (o.keyword === "INJECT") injectOverrides.push({ category, ...o });

  const c3DefCategories = C3_CATEGORY_ORDER.filter(
    (c) => (modDefsByCategory.get(c)?.size ?? 0) > 0,
  );
  const vanillaCategories = new Set<string>(overridesByCategory.keys());
  for (const c of c3DefCategories) vanillaCategories.add(c);
  // the code collects the vanilla scripted names only when this mod really writes an `INJECT:` (which saves one directory match).
  if (injectOverrides.length > 0)
    for (const c of SCRIPTED_CATEGORIES) vanillaCategories.add(c);

  const vanillaDefsByCategory = new Map<string, Set<string>>();
  const vanillaFileCountByCategory = new Map<string, number>();
  if (vanillaRoot !== null) {
    const filesByCategory = findVanillaCommonFiles(
      vanillaRoot,
      vanillaCategories,
    );
    for (const [category, files] of filesByCategory) {
      vanillaFileCountByCategory.set(category, files.length);
      vanillaDefsByCategory.set(category, definitionsFrom(files));
    }
  }
  // the top-level scripted effect and trigger names of the vanilla side (an empty set when the vanilla root is absent, so only the mod names are judged).
  const vanillaScriptedNames = new Set<string>();
  if (injectOverrides.length > 0) {
    for (const c of SCRIPTED_CATEGORIES)
      for (const n of vanillaDefsByCategory.get(c) ?? []) vanillaScriptedNames.add(n);
  }
  let totalVanillaFiles = 0;
  for (const category of overridesByCategory.keys()) {
    totalVanillaFiles += vanillaFileCountByCategory.get(category) ?? 0;
  }
  const vanillaAvailable = vanillaRoot !== null && totalVanillaFiles > 0;

  for (const category of overridesByCategory.keys()) {
    checked.push(`common/${category}`);
  }
  // Any override declaration in this mod means the branch premise of this check holds (with or without an INJECT), which serves the `checked` output of this check.
  if (overridesByCategory.size > 0) checked.push("c1:inject-scripted");

  // The fallback logic of C1 for an absent game-scripts/game/ (NOTE) stays as it is, but it no longer returns early and C2 runs on its own.
  if (overridesByCategory.size > 0 && !vanillaAvailable) {
    warnings.push({
      code: "semantic:c1",
      message:
        "semantic: game-scripts/ is not available (missing or empty). The REPLACE: and INJECT: target lookup against the vanilla scripts is skipped",
      level: "note",
    });
  } else {
    for (const [category, overrides] of overridesByCategory) {
      const vanilla = vanillaDefsByCategory.get(category) ?? new Set<string>();
      const mod = modDefsByCategory.get(category) ?? new Set<string>();
      for (const o of overrides) {
        if (vanilla.has(o.name) || mod.has(o.name)) continue;
        const advisory = isAdvisoryKeyword(o.keyword);
        warnings.push({
          code: "semantic:c1",
          message:
            `semantic: ${o.keyword} target '${o.name}' not found in common/${category}` +
            (advisory ? " (advisory)" : ""),
          level: advisory ? "note" : "warn",
        });
      }
    }
  }

  // ---- C1: an `INJECT:` that points at a scripted effect or trigger gives WARN ----
  // This is independent of the "target exists" judgment above, because the target **does** exist (it is exactly a scripted name of this mod or of vanilla),
  // but the wiki states that INJECT has no effect on scripted effects and scripted triggers and overwrites the whole definition, so it is still a mistake.
  // The category narrowing: when the target name **appears in the vanilla name set of the category of the declaration itself**, it points at an object of that
  // category (such as `INJECT:unlock_advance_effect` in `common/effect_localization/`) and not at a scripted
  // effect or trigger, so no report appears (a false positive from a same-name collision across categories). **This exemption does not apply when the declaration itself sits in a scripted directory**, because
  // the target there really falls into the scripted_effects or scripted_triggers database, which is exactly the trap this check reports.
  for (const o of injectOverrides) {
    if (!modScriptedNames.has(o.name) && !vanillaScriptedNames.has(o.name)) continue;
    if (
      !isScriptedCategory(o.category) &&
      (vanillaDefsByCategory.get(o.category)?.has(o.name) ?? false)
    )
      continue;
    warnings.push({
      code: "semantic:c1-inject-scripted",
      message:
        `semantic: INJECT target '${o.name}' is a scripted effect or trigger. ` +
        `INJECT does not work for a scripted effect or trigger, and it overwrites the original definition. ` +
        `Use REPLACE: to replace it. To add to it, use a new object or another mechanism.`,
    });
  }

  // ---- C2: the spelling check inside a sticky context (it runs on its own and does not need the overrides of C1 to be non-empty) ----
  const dict = loadScriptDictionary(repoRoot, vanillaRoot);
  if (dict !== null) {
    checked.push("c2:script_docs");
    // The container model: from the script_docs structure examples, or the fallback hand written list when they are unavailable.
    activeContainers = dict.containers;
    for (const { abs, rel } of modFiles) {
      const text = readText(abs);
      if (text === null) continue;
      scanStickyContext(
        stripLineComments(text),
        isScriptedDir(rel),
        dict,
        modDefinedNames,
        modScriptedNames,
        warnings,
        isDataDrivenContextDir(rel),
      );
    }
  }

  // ---- C3: a new object that lacks the expected loc key (only a building or a good that the mod adds, and independent of C1 and C2) ----
  if (c3DefCategories.length > 0) {
    for (const category of c3DefCategories) checked.push(`c3:common/${category}`);
    let c3VanillaFiles = 0;
    for (const category of c3DefCategories) {
      c3VanillaFiles += vanillaFileCountByCategory.get(category) ?? 0;
    }
    if (vanillaRoot !== null && c3VanillaFiles > 0) {
      checked.push("c3:localization");
      const locByLang = collectLocKeys(modPath);
      // only the languages the mod already provides are checked and each language reports separately, and when the mod provides no language at all
      // the check runs once under the base language english (see the comment on C3_DEFAULT_LANGUAGE).
      const languages =
        locByLang.size > 0 ? [...locByLang.keys()] : [C3_DEFAULT_LANGUAGE];
      const multiLang = languages.length > 1;
      for (const lang of languages) {
        const keys = locByLang.get(lang) ?? new Set<string>();
        for (const category of c3DefCategories) {
          const vanilla =
            vanillaDefsByCategory.get(category) ?? new Set<string>();
          for (const id of modDefsByCategory.get(category) ?? []) {
            if (vanilla.has(id)) continue; // vanilla already has it, so the object is an override and not a new object
            const missingDesc = !keys.has(`${id}_desc`);
            const missingId = !keys.has(id);
            if (!missingDesc && !missingId) continue;
            // One (object, language) pair gives one report only, with `_desc` first (the key that goes missing most often in practice).
            // When both are missing the line adds one clause about the base key inside the same parentheses and opens no second report (which keeps one object to one report).
            const namedKey = missingDesc ? `${id}_desc` : id;
            const extras: string[] = [];
            if (missingId && missingDesc)
              extras.push(`base key '${id}' is missing too`);
            if (multiLang) extras.push(`language '${lang}'`);
            warnings.push({
              code: "semantic:c3",
              message:
                `semantic: new ${C3_CATEGORY_NOUN[category] ?? category} '${id}' ` +
                `has no localization key '${namedKey}'` +
                (extras.length > 0 ? ` (${extras.join("; ")})` : ""),
            });
          }
        }
      }
    } else {
      // The same fallback criterion as C1: an absent or empty game-scripts/game/ cannot tell a vanilla object from a new one, so the check skips with NOTE and never crashes.
      warnings.push({
        code: "semantic:c3",
        message:
          "semantic: game-scripts/ is not available (missing or empty). The localization lookup for a new building or good is skipped",
        level: "note",
      });
    }
  }

  return { checked, warnings };
}
