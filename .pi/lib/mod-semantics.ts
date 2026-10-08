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
 *         参数块退出、排除 mod 自己定义的名；编辑距离 ≤2 给出 did-you-mean。【待实现】
 *   - C3  新对象缺 loc key：mod 新加的建筑/商品须有 `<id>` + `<id>_desc` 的 loc key；
 *         只查 mod 已提供的语言；in_game 与 main_menu 的 localization/ 都算合法。【待实现】
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
    return readFileSync(abs, "utf8");
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
  for (const { abs, rel } of modFiles) {
    const category = categoryFromRel(rel);
    if (!category) continue;
    const text = readText(abs);
    if (text === null) continue;
    const scan = scanTopLevel(stripLineComments(text));
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

  if (overridesByCategory.size === 0) {
    return { checked, warnings };
  }

  // vanilla 侧可用性：game-scripts/ 缺失，或镜像里按 `<目录>` 收集到的 common 文件总数为 0
  // （空/坏），都无法判定目标是否为 vanilla 对象 → 退化：只给一条 NOTE，跳过 per-target 产出。
  // 注意：镜像有内容、只是某个特定 `<目录>` 恰好无 vanilla 文件 → 那是真命中，照常 WARN。
  const repoRoot = findRepoRoot(modPath);
  const gameScriptsRoot = repoRoot ? join(repoRoot, "game-scripts") : null;
  const hasGameScripts =
    gameScriptsRoot !== null && isDirectory(gameScriptsRoot);

  const vanillaDefsByCategory = new Map<string, Set<string>>();
  let totalVanillaFiles = 0;
  if (hasGameScripts) {
    const filesByCategory = findVanillaCommonFiles(
      gameScriptsRoot as string,
      new Set(overridesByCategory.keys()),
    );
    for (const [category, files] of filesByCategory) {
      totalVanillaFiles += files.length;
      vanillaDefsByCategory.set(category, definitionsFrom(files));
    }
  }
  const vanillaAvailable = hasGameScripts && totalVanillaFiles > 0;

  for (const category of overridesByCategory.keys()) {
    checked.push(`common/${category}`);
  }

  if (!vanillaAvailable) {
    warnings.push({
      code: "semantic:c1",
      message:
        "semantic: game-scripts/ unavailable (missing or empty); REPLACE/INJECT target lookup against vanilla skipped",
      level: "note",
    });
    return { checked, warnings };
  }

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

  return { checked, warnings };
}
