/**
 * mod-semantics — EU5 mod 语义校验（名字级，基于 dumps/vanilla 词典）。
 *
 * 定位：`validate_mod` 目前只做语法/约定校验，查不出「effect/trigger/modifier 名打错
 * （EU5 常静默失败）」「REPLACE:/INJECT: 目标不存在」「新对象漏 loc key」。
 *
 * 计划（方案见 docs/eu5-semantic-validation-plan.md §2）：
 *   - C1  REPLACE:/INJECT: 目标存在性：顶层 `^(REPLACE|INJECT|TRY_REPLACE|TRY_INJECT|
 *         REPLACE_OR_CREATE|INJECT_OR_CREATE):\s*(\w+)\s*=`，目标名须在**同一类数据库**
 *         （同一 `common/<目录>/`；in_game 与 main_menu 合并）的 vanilla 或本 mod 里存在。
 *         REPLACE:/INJECT: 缺失 → WARN；TRY_* / _OR_CREATE → NOTE（常是故意的，永不 FAIL）。
 *         game-scripts/ 缺失时跳过 vanilla 侧核对并给 NOTE。【已实现】
 *   - C2  粘性上下文拼写校验：只查 effect/trigger/modifier 左值；长度 ≥8、不扫裸值、
 *         参数块退出、排除 mod 自己定义的名；编辑距离 ≤2 给出 did-you-mean。
 *         trigger 列表容器（visible / enabled / select_trigger / ai_interaction_source_list …）
 *         也进入上下文（A2）。【已实现】
 *   - C3  新对象缺 loc key：mod 新加的建筑/商品须有 `<id>` + `<id>_desc` 的 loc key；
 *         只查 mod 已提供的语言（各语言分别报；一个语言都没提供时按基语言 english 判定）；
 *         in_game 与 main_menu 的 localization/ 都算合法。【已实现】
 *
 * 契约：只读、零第三方依赖；接口字段/返回文案一律 ASCII/英文（Windows GBK 会乱码）。
 * 语义项默认 WARN，不 FAIL。
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

export interface SemanticWarning {
  code: string;
  message: string;
  /** warn = 建议修；note = 提示（TRY_* / _OR_CREATE 常是故意不命中，永不 FAIL）。缺省 warn。 */
  level?: "warn" | "note";
}

export interface SemanticResult {
  checked: string[];
  warnings: SemanticWarning[];
}

// ---- C1：REPLACE:/INJECT: 目标存在性 ----

/** 覆盖关键字族（与 mod-lint.ts 的 OVERRIDE_KEYWORD_RE 同源，含 TRY_*_OR_CREATE 组合）。 */
const OVERRIDE_KEYWORD = "(?:TRY_)?(?:INJECT|REPLACE)(?:_OR_CREATE)?";
/** 顶层覆盖声明：`KEYWORD:name =`（name 按方案用 `\w+`）。 */
const OVERRIDE_DECL_RE = new RegExp(`^(${OVERRIDE_KEYWORD}):\\s*(\\w+)\\s*=`);
/** 顶层普通对象定义：`name =`。 */
const TOPLEVEL_DEF_RE = /^(\w+)\s*=/;

/** TRY_* / *_OR_CREATE 是"尽力而为/允许新建"语义，目标缺失是常事 → NOTE，永不 WARN。 */
function isAdvisoryKeyword(keyword: string): boolean {
  return keyword.startsWith("TRY_") || keyword.endsWith("_OR_CREATE");
}

/** 去掉引号字符串外的 '#' 行注释（与 mod-lint.ts 同思路：字符串可跨行）。 */
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

interface TopLevelScan {
  /** 顶层普通对象定义名（`name =`，不含覆盖声明；覆盖声明本身不代表目标已存在）。 */
  definitions: Set<string>;
  /** 顶层覆盖声明 `KEYWORD:name =`。 */
  overrides: Array<{ keyword: string; name: string }>;
}

/**
 * 注释/字符串感知地扫描顶层对象：只认 depth==0 且行首的 `name =` 或 `KEYWORD:name =`。
 * `{`/`}` 计数维护 depth，字符串内的括号与关键字不计（与 mod-lint 的 checkOverrideKeywords 同思路）。
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
    // 顶层且行首：先试覆盖声明（更长、更具体），再试普通定义。
    if (depth === 0 && (i === 0 || cleaned[i - 1] === "\n")) {
      const window = cleaned.slice(i, i + 200);
      const om = OVERRIDE_DECL_RE.exec(window);
      if (om && om.index === 0) {
        overrides.push({ keyword: om[1], name: om[2] });
        // 不把覆盖声明本身算作「目标已存在」——它正是被核对的对象。
        i += om[0].length;
        continue;
      }
      const dm = TOPLEVEL_DEF_RE.exec(window);
      if (dm && dm.index === 0) {
        definitions.add(dm[1]);
        i += dm[0].length;
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
    // 剥离单个前导 UTF-8 BOM（\ufeff）：vanilla 部分文件（如 subject_types/march.txt）
    // 首字节就是 BOM 且紧跟定义名，若不剥掉会把 `march = {` 挤离行首，导致 C1 漏判为「not found」。
    // BOM 无任何语义，对所有调用方（definitionsFrom / mod 扫描 / loadScriptDictionary）都安全。
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

/** 递归列出目录下所有 .txt 文件（跳过 .git），返回 { abs, rel }（rel 用 `/` 分隔）。 */
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
 * 从 mod 文件相对路径求 `<目录>`：`{in_game|main_menu}/common/<目录>/…` → `<目录>`。
 * 只认直接挂在 in_game/ 或 main_menu/ 下的 common/；其余（README/tools/…）返回 null。
 */
function categoryFromRel(rel: string): string | null {
  const parts = rel.split("/");
  const idx = parts.indexOf("common");
  if (idx <= 0 || idx + 1 >= parts.length) return null;
  const parent = parts[idx - 1];
  if (parent !== "in_game" && parent !== "main_menu") return null;
  return parts[idx + 1];
}

/** 从 mod 目录向上找仓库根（含 mod-repo.json 的目录），用于定位 game-scripts/。 */
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
 * 在 game-scripts 镜像里，按 `<目录>` 收集 `…/common/<目录>/…` 下的 .txt 文件。
 * 不写死层级（game/jomini/dlc/workshop 都可能有），用「包含 /common/<目录>/」定位。
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

/** 扫描一组文件里某 `<目录>` 的全部顶层对象名。 */
function definitionsFrom(files: string[]): Set<string> {
  const defs = new Set<string>();
  for (const f of files) {
    const text = readText(f);
    if (text === null) continue;
    for (const d of scanTopLevel(stripLineComments(text)).definitions) defs.add(d);
  }
  return defs;
}

// ---- C2：粘性上下文拼写校验 ----

/**
 * 进入 effect/trigger 上下文的块名名单（方案 §2 C2，实现期对着 reference mod 调准）。
 * trigger **列表容器**（visible/enabled/select_trigger/…）另见 TRIGGER_CONTAINER_NAMES。
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
]);

/**
 * trigger 列表容器（A2 卡补）：这些块名在真实脚本里 body 是 **trigger 列表**（非参数表），
 * 但既不在 CONTEXT_ENTER_NAMES，也不是 if/every_* 一类控制效果 —— 不加的话整块不进入上下文
 * （`select_trigger = { visible = { <typo> = yes } }` 必然漏报）。
 * 名单来源：A2 卡用 c2-coverage.mjs 在真实 mod 上做的模式复刻统计；并由 probe4.mjs 在
 * 33 个真实 mod 上验证「加入后 C2 零误报」（零误报是硬门槛）。
 * 逐名依据（括号为统计出现次数）：
 * - visible                     generic_actions / select_trigger 的可见性 trigger 列表（56）
 * - enabled                     cabinet_actions / generic_actions 的启用条件 trigger 列表（12）
 * - is_shown / show_if          交互类的显示条件 trigger 列表（7 / 7）
 * - can_start / can_end         situation / 交互的开始/结束条件 trigger 列表（5 / 5）
 * - is_valid / ai_is_valid      交互类的合法性 trigger 列表（5 / 9）
 * - select_trigger              上述列表的**外层容器**（generic_actions 等），本身也是列表容器
 * - ai_interaction_source_list  select_trigger 内的 AI 目标来源列表（内部 every_goods > limit 仍是 context）
 *
 * 有意**不**纳入（避免再成为「未记录的洞」）：
 * - `switch`：见下方注释（case 名是任意值）。
 * - `rank_modifier` / `literacy_impact` / `sort_text` 等（c2-coverage 里也成规模出现）：形态上
 *   可能同样是容器，但本卡只对上面 10 个跑过「33 个真实 mod 零误报」，未验证的一律不加，
 *   留作后续候选（见 A2 结论里的「新发现」）。
 * - `limit` / `modifier` / `country_modifier` / `raw_modifier` / `owner` / `area` / `value` /
 *   `map_color` 等：形态混杂（参数表 / scope 目标 / 取值块），未验证，不加。
 */
const TRIGGER_CONTAINER_NAMES = new Set([
  "select_trigger",
  "ai_interaction_source_list",
  "visible",
  "enabled",
  "is_shown",
  "show_if",
  "can_start",
  "can_end",
  "is_valid",
  "ai_is_valid",
]);

/**
 * 容器/控制效果的块：body 是 effect/trigger **列表**而非参数表，进入后应**继续** context 扫描
 * （否则 `if = { add_prestigez = … }` 里的 typo 会漏）。判定优先级**高于**「块名在词典 → param」。
 * 精确名以 script_docs（effects.log/triggers.log）实测为准；first_valid 不在词典也纳入（无害）。
 * 前缀 every_/any_/ordered_ 对应 effects.log（every_/ordered_ 各 300+）与 triggers.log（any_ 300+）。
 * hidden_effect/hidden_trigger 已在 CONTEXT_ENTER_NAMES，不重复。
 *
 * ⚠️ **不含 switch**：trigger 侧 `switch = { trigger = <t> <值> = { <triggers> } … }` 的 case 名是
 * 任意**值**（如 location_key `antigonish`），不是 trigger 名——纳入会把 case 名误报成拼写错
 * （实测 workshop mod 3633816300：`antigonish` 被报 did-you-mean `antagonism`）。零误报是硬门槛，
 * 故宁可少纳入 switch（其 case body 内部 typo 暂不查）。
 */
const CONTAINER_CONTROL_NAMES = new Set([
  "if",
  "else",
  "else_if",
  "random",
  "random_list",
  "while",
  "first_valid",
  "trigger_if",
  "trigger_else",
  "trigger_else_if",
  "and",
  "or",
  "not",
  "nor",
]);
const CONTAINER_CONTROL_PREFIXES = ["every_", "any_", "ordered_"];

function isContainerControl(name: string): boolean {
  if (CONTAINER_CONTROL_NAMES.has(name)) return true;
  return CONTAINER_CONTROL_PREFIXES.some((p) => name.startsWith(p));
}

/** 相对路径是否在 common/scripted_effects/ 或 common/scripted_triggers/ 下（目录即上下文）。 */
function isScriptedDir(rel: string): boolean {
  const c = categoryFromRel(rel);
  return c === "scripted_effects" || c === "scripted_triggers";
}

interface ScriptDictionary {
  names: Set<string>;
  /** 按首字母分桶，供有界纠错缩小候选。 */
  byFirstLetter: Map<string, string[]>;
}

/**
 * 现解析 script_docs 三个词典（effects/triggers/modifiers），合并成 Set + 首字母分桶。
 * 优先相对模块自身定位（import.meta.dirname → ../../docs/script_docs，Node 24 ESM 可用）；
 * 找不到再退回 repo 根的 docs/script_docs（workshop 真实 mod 下 findRepoRoot 常为 null）。
 * 全部找不到返回 null，C2 安全跳过（不产 WARN/NOTE）。
 */
function loadScriptDictionary(repoRoot: string | null): ScriptDictionary | null {
  const dirs: string[] = [
    join(import.meta.dirname, "..", "..", "docs", "script_docs"),
  ];
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
    return { names, byFirstLetter };
  }
  return null;
}

/** 有界 Levenshtein：一旦最坏可能距离超过 max 即剪枝返回 max+1（避免 O(n·m) 全算）。 */
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

/** 首字母同 + 长度 ±1 + 编辑距离 ≤2 的词典名（纠错候选）。 */
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
      if (bestDist === 1) break; // name 不在词典，最小距离为 1，已最优
    }
  }
  return bestDist <= 2 ? best : null;
}

/** C2 候选命中条件：长度 ≥8、不在词典、不是 mod 自己定义的名、且有 ≤2 的纠错候选。 */
function checkCandidate(
  name: string,
  dict: ScriptDictionary,
  modDefined: Set<string>,
  warnings: SemanticWarning[],
): void {
  if (name.length < 8) return;
  if (dict.names.has(name)) return;
  if (modDefined.has(name)) return;
  const suggestion = findDidYouMean(name, dict);
  if (suggestion !== null) {
    warnings.push({
      code: "semantic:c2",
      message: `semantic: unknown name '${name}' - did you mean '${suggestion}'?`,
    });
  }
}

type ContextMode = "context" | "param" | "neutral";

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
 * 粘性上下文扫描（注释/字符串感知的 char 级扫描，栈记每层块的 interior 模式）：
 * - 进入 context：块名 ∈ 名单，或 scripted_effects/scripted_triggers 的顶层对象；
 * - 保持：scope 块（块名不在词典）不退出 context；
 * - 退出：块名在词典（已知 effect/trigger/modifier 的参数块），或块名 ∈ mod 自定义的
 *   scripted effect/trigger 名（调用体是参数列表，如 `_cmm_register_bool_setting_internal = { is_global = 0 }`）
 *   → 该块内部为 param；
 * - context 里 `name = ...` 左值（含块名）是候选；裸值、长度 <8、mod 定义名不扫。
 */
function scanStickyContext(
  cleaned: string,
  isScripted: boolean,
  dict: ScriptDictionary,
  modDefined: Set<string>,
  modScripted: Set<string>,
  warnings: SemanticWarning[],
): void {
  const n = cleaned.length;
  const stack: ContextMode[] = [];
  let inString = false;
  let i = 0;

  const currentMode = (): ContextMode =>
    stack.length > 0 ? stack[stack.length - 1] : "neutral";

  const pushBlock = (name: string, parentMode: ContextMode): void => {
    const isTopLevel = stack.length === 0;
    let mode: ContextMode;
    if (parentMode === "param") mode = "param";
    else if (CONTEXT_ENTER_NAMES.has(name) || TRIGGER_CONTAINER_NAMES.has(name))
      mode = "context";
    else if (parentMode === "context" && isContainerControl(name)) mode = "context";
    else if (parentMode === "context")
      mode = dict.names.has(name) || modScripted.has(name) ? "param" : "context";
    else if (isScripted && isTopLevel) mode = "context";
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
      // 裸 `{`（`?=`、`scope:actor =` 等之后）：视作 scope 块，继承父模式
      stack.push(currentMode());
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
          pushBlock(name, mode);
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

// ---- C3：新对象缺约定 loc key ----

/** C3 关注的对象类别（plan §2 C3）：mod 新加的建筑 / 商品。 */
const C3_CATEGORY_ORDER = ["building_types", "goods"];
/** 文案里的类别名词。 */
const C3_CATEGORY_NOUN: Record<string, string> = {
  building_types: "building",
  goods: "goods",
};
/**
 * mod 一个 localization 目录都没有时的判定语言（基语言）。
 * 「只查 mod 已提供的语言」的语义是「不因缺**其它**语言而报警」，不是「没有 loc 就不查」——
 * 新对象全无 loc 正是 C3 要抓的情形，故退化为按基语言 english 判一次。
 */
const C3_DEFAULT_LANGUAGE = "english";
/** loc 文件名里的语言后缀：`<name>_l_<lang>.yml`（也容忍 `.yaml`）。 */
const LOC_FILE_LANG_RE = /_l_([a-z0-9_]+)\.ya?ml$/i;
/**
 * loc 行的定义 key。**宽松匹配**（不要求 value 带引号）：多认一个假 key 只会少报一条，
 * 少认一个真 key 会造出误报——零误报是硬门槛，故宁松勿严。
 */
const LOC_KEY_LINE_RE = /^\s*([A-Za-z0-9_]+)\s*:\s*(?:\d+\s*)?/;

/**
 * 扫 mod 的 `{in_game|main_menu}/localization/**`，按**文件名语言后缀**归集 loc key。
 * 语言取自文件名而非目录名：真实 workshop mod 有 `localization/replace/<lang>/…` 这类嵌套，
 * 目录名会多出一个 `replace` 假语言。目录递归，覆盖 `<lang>/<子目录>/…`。
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

  // 一遍扫 mod：按 `<目录>` 收集覆盖声明 + 顶层定义（in_game/main_menu 合并为同类）。
  const overridesByCategory = new Map<
    string,
    Array<{ keyword: string; name: string }>
  >();
  const modDefsByCategory = new Map<string, Set<string>>();
  // C2 排除「本 mod 自己定义的名」：全部 .txt 的顶层 `name =` 定义名（跨 category 合并）。
  const modDefinedNames = new Set<string>();
  // 仅 scripted_effects/scripted_triggers 目录的顶层定义名：这些才是「会被调用、
  // 调用体是参数列表」的名，用于 param 判定（building/goods 等对象名不参与）。
  const modScriptedNames = new Set<string>();
  for (const { abs, rel } of modFiles) {
    const category = categoryFromRel(rel);
    const text = readText(abs);
    if (text === null) continue;
    const scan = scanTopLevel(stripLineComments(text));
    for (const d of scan.definitions) modDefinedNames.add(d);
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

  // vanilla 侧可用性：game-scripts/ 缺失，或镜像里按 `<目录>` 收集到的 common 文件总数为 0
  // （空/坏），都无法判定目标是否为 vanilla 对象 → 退化：只给一条 NOTE，跳过 per-target 产出。
  // 注意：镜像有内容、只是某个特定 `<目录>` 恰好无 vanilla 文件 → 那是真命中，照常 WARN。
  const repoRoot = findRepoRoot(modPath);
  // game-scripts 定位顺序：①mod 所在 repo 根（findRepoRoot）→ ②工具自身 repo 根（import.meta.dirname 往上）。
  // workshop/Paradox mod 目录在仓库外，findRepoRoot 常为 null → 用工具自身 repo 兜底（与 loadScriptDictionary 同思路）。
  const gameScriptsCandidates: string[] = [];
  if (repoRoot) gameScriptsCandidates.push(join(repoRoot, "game-scripts"));
  gameScriptsCandidates.push(
    join(import.meta.dirname, "..", "..", "game-scripts"),
  );
  const gameScriptsRoot =
    gameScriptsCandidates.find((c) => isDirectory(c)) ?? null;
  const hasGameScripts = gameScriptsRoot !== null;

  // C3 也要 vanilla 侧的建筑/商品名；为省一次全树遍历，与 C1 的 `<目录>` 并成一次收集。
  // 但 C1 的可用性判定（totalVanillaFiles/vanillaAvailable）仍**只统计 C1 自己的 `<目录>`**，
  // 以免新增 C3 类别把 C1 的 game-scripts 退化分支从 NOTE 变回正常核对。
  const c3DefCategories = C3_CATEGORY_ORDER.filter(
    (c) => (modDefsByCategory.get(c)?.size ?? 0) > 0,
  );
  const vanillaCategories = new Set<string>(overridesByCategory.keys());
  for (const c of c3DefCategories) vanillaCategories.add(c);

  const vanillaDefsByCategory = new Map<string, Set<string>>();
  const vanillaFileCountByCategory = new Map<string, number>();
  if (hasGameScripts) {
    const filesByCategory = findVanillaCommonFiles(
      gameScriptsRoot as string,
      vanillaCategories,
    );
    for (const [category, files] of filesByCategory) {
      vanillaFileCountByCategory.set(category, files.length);
      vanillaDefsByCategory.set(category, definitionsFrom(files));
    }
  }
  let totalVanillaFiles = 0;
  for (const category of overridesByCategory.keys()) {
    totalVanillaFiles += vanillaFileCountByCategory.get(category) ?? 0;
  }
  const vanillaAvailable = hasGameScripts && totalVanillaFiles > 0;

  for (const category of overridesByCategory.keys()) {
    checked.push(`common/${category}`);
  }

  // C1 的 game-scripts 缺失退化逻辑（NOTE）保持不动；但不再 early-return，C2 独立运行。
  if (overridesByCategory.size > 0 && !vanillaAvailable) {
    warnings.push({
      code: "semantic:c1",
      message:
        "semantic: game-scripts/ unavailable (missing or empty); REPLACE/INJECT target lookup against vanilla skipped",
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

  // ---- C2：粘性上下文拼写校验（独立运行，不依赖 C1 的 overrides 非空） ----
  const dict = loadScriptDictionary(repoRoot);
  if (dict !== null) {
    checked.push("c2:script_docs");
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
      );
    }
  }

  // ---- C3：新对象缺约定 loc key（只查 mod 新加的建筑/商品；独立于 C1/C2） ----
  if (c3DefCategories.length > 0) {
    for (const category of c3DefCategories) checked.push(`c3:common/${category}`);
    let c3VanillaFiles = 0;
    for (const category of c3DefCategories) {
      c3VanillaFiles += vanillaFileCountByCategory.get(category) ?? 0;
    }
    if (hasGameScripts && c3VanillaFiles > 0) {
      checked.push("c3:localization");
      const locByLang = collectLocKeys(modPath);
      // plan §2 C3 v3：只查 mod 已经提供的语言，各语言分别报；一个语言都没提供时
      // 按基语言 english 判一次（见 C3_DEFAULT_LANGUAGE 注释）。
      const languages =
        locByLang.size > 0 ? [...locByLang.keys()] : [C3_DEFAULT_LANGUAGE];
      const multiLang = languages.length > 1;
      for (const lang of languages) {
        const keys = locByLang.get(lang) ?? new Set<string>();
        for (const category of c3DefCategories) {
          const vanilla =
            vanillaDefsByCategory.get(category) ?? new Set<string>();
          for (const id of modDefsByCategory.get(category) ?? []) {
            if (vanilla.has(id)) continue; // vanilla 已有 → 覆盖，不是新对象
            const missingDesc = !keys.has(`${id}_desc`);
            const missingId = !keys.has(id);
            if (!missingDesc && !missingId) continue;
            // 一个 (对象, 语言) 只出一条：`_desc` 优先（约定里最常漏的那个 key）。
            // 两个都缺时在同一行括号里补一句 base key，不另开一条（保持一条一对象的粒度）。
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
      // 与 C1 同口径退化：game-scripts/ 缺失或空 → 无法区分 vanilla/新对象，跳过 + NOTE（不 crash）。
      warnings.push({
        code: "semantic:c3",
        message:
          "semantic: game-scripts/ unavailable (missing or empty); new building/goods localization lookup skipped",
        level: "note",
      });
    }
  }

  return { checked, warnings };
}
