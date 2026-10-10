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
 *         `game-scripts/game/` 缺失/空时跳过 vanilla 侧核对并给 NOTE。【已实现】
 *         注：vanilla 严格 = 真原版 `game-scripts/game/**`；`game-scripts/workshop/**`
 *         （他 mod 镜像）不算 vanilla（用户决议，见 A3 卡与下方 vanillaRoot 注释）。
 *   - C2  粘性上下文拼写校验：只查 effect/trigger/modifier 左值；长度 ≥8、不扫裸值、
 *         参数块退出、排除 mod 自己定义的名；编辑距离 ≤2 给出 did-you-mean。
 *         **容器名单来自 `docs/script_docs` 的结构示例解析**（A0：示例含 `<effects>`/`<triggers>`
 *         ⇒ 该名字的 body 是 effect/trigger 列表 ⇒ 进 context；见 loadContainerModel）；
 *         **已知名**集合 = effects ∪ triggers ∪ modifiers ∪ event_targets ∪ on_actions ∪
 *         custom_localization ∪ vanilla（`game-scripts/game/**`）键名 ∪ 合法结构字段
 *         （A9：候选名在「已知名」里 ⇒ 放过，不作候选；见 checkCandidate）。
 *         块名不是 effect/trigger 的**结构字段**（option / immediate / potential / visible /
 *         modifier 左值表族 / 数据驱动目录 …）仍是手写名单：script_docs 提供不了，依据是
 *         文件结构 + 实际语料（见 CONTEXT_ENTER_NAMES / TRIGGER_CONTAINER_NAMES /
 *         DATA_DRIVEN_CONTEXT_DIRS 的 JSDoc 与 board/C2-COVERAGE.md）。【已实现】
 *   - C3  新对象缺 loc key：mod 新加的建筑/商品须有 `<id>` + `<id>_desc` 的 loc key；
 *         只查 mod 已提供的语言（各语言分别报；一个语言都没提供时按基语言 english 判定）；
 *         in_game 与 main_menu 的 localization/ 都算合法。vanilla 侧同 C1：只算
 *         `game-scripts/game/**`（排除 workshop 镜像）。【已实现】
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

/**
 * A8：**行首**的覆盖关键字前缀（`REPLACE:` / `INJECT:` / `TRY_*` / `*_OR_CREATE`）在 C2 扫描前剥掉，
 * 让 `KEYWORD:foo = { … }` 里的 `foo` 重新成为**块名** —— 覆盖体因此等价于「**该目录的一个普通对象**」，
 * 由**既有规则**处置（scripted / 数据驱动目录 → context；其它目录 → neutral）。**不新增任何判据**。
 *
 * 为何必须剥：`scanStickyContext` 的块名判定带 `prev !== ":"` 守卫（防 `scope:actor =` 被当块名），
 * 于是 `REPLACE:foo` 的 `foo` 被跳过、紧随的裸 `{` 只 `push(currentMode())` = neutral
 * ⇒ **覆盖体整块不扫**（`REPLACE:foo = { add_prestigez = 1 }` 在 scripted_effects 里也是 0 条）。
 * 为何安全：只用 `OVERRIDE_KEYWORD`（与 C1 同源）⇒ `scope:actor = {` 这类「`:` 前是 scope 名而非
 * 覆盖关键字」的照旧**不**剥。只在行首（允许前导空白；vanilla 的条目级嵌套覆盖，如
 * `dlc/D008.../in_game/common/genes/D008_genes_accessories.txt:3` 的 `\tINJECT_OR_CREATE:headwear = {`
 * 也是行首缩进）剥，且要求后面确实是 `name =` 形态（`(?=\w+\s*=)`），避免误剥字符串里的同形文本。
 */
const OVERRIDE_PREFIX_LINE_RE = new RegExp(
  `^(\\s*)${OVERRIDE_KEYWORD}:(?=\\w+\\s*=)`,
  "gm",
);
function stripOverrideKeywordPrefixes(text: string): string {
  return text.replace(OVERRIDE_PREFIX_LINE_RE, "$1");
}

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
 * 在 vanilla 根（调用方传 `game-scripts/game/`，见 analyzeSemantics 的 vanillaRoot）下，
 * 按 `<目录>` 收集 `…/common/<目录>/…` 下的 .txt 文件。
 * 不写死层级（game/jomini/dlc 都可能嵌套），用「包含 /common/<目录>/」定位。
 * 注意：调用方**不能**把整棵 `game-scripts/`（含 `workshop/**` 他 mod 镜像）当作 root ——
 * 那正是 A3 的假阴性来源。
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
 * 进入 effect/trigger/modifier 上下文的**结构字段**名单（方案 §2 C2，实现期对着 reference mod 调准）。
 *
 * 为什么仍是手写：这些是**文件结构字段**（事件/建筑/法律/科技/交互的固定部位），**不是**
 * effect/trigger 名 —— `docs/script_docs` 里根本没有它们，所以**不可从 dump 派生**。
 * 依据 = 文件结构（wiki 的 `Event_modding` / `Building_modding` / `Subject_type_modding` /
 * `Cabinet_action_modding` / `Generic_action_modding` 等页面 + 实际语料形态）。
 * 对照：本名单 **0/48** 在「script_docs 结构示例派生的容器集合」（1220 个）里（A0 对照命令），
 * 即解析不可能覆盖它们。
 * 名单**冻结**（GOAL #8）：新增覆盖须新开卡 + 用户确认；清单与逐项证据见 `board/C2-COVERAGE.md`。
 * trigger **列表容器**（`visible` / `enabled` / `on_*` / `*_trigger` …）另见 TRIGGER_CONTAINER_NAMES。
 *
 * ===== modifier 左值表族（A4，2026-10）=====
 * 判据（什么样的块算「modifier 左值表」）：块 body 是形如 `<modifier 名> = <数值>` 的
 * **左值列表**——modifier 名取自 docs/script_docs/modifiers.log 词典；既不是效果/触发的
 * **参数表**（参数名常与词典撞车），也不是 scope 目标块 / 脚本值。进入该块即 context，块内
 * 「不在词典、且与某词典名拼写距离 ≤2」的左值 → WARN（与 effect/trigger 左值同一条通路）。
 *
 * 成员按两类枚举（括号 = vanilla 全量 `c2-coverage.mjs --vanilla` 里「该父块下出现 modifier
 * 名」次数；成员是**按类**枚举，不是只挑卡里列的 21 个）：
 *  类 A · 名字自证（含 modifier 词根，或 `_base_values` 形）：
 *   country_modifier(5005) modifier(2278) definition_modifier(815) location_modifier(429)
 *   modifier_when_in_debate(205) capital_country_modifier(170) country_base_values(161)
 *   left_modifier(120) right_modifier(116) rank_modifier(100) leader_modifier(87)
 *   international_organization_modifier(76) raw_modifier(64) character_modifier(45)
 *   subject_modifier(43) positive_modifier(35) negative_modifier(33) neutral_modifier(32)
 *   capital_modifier(29) overlord_modifier(23) maintenance_modifier(21)
 *   modifier_while_progressing(19) market_center_modifier(16) non_leader_modifier(10)
 *   modifier_on_completion(10) province_modifier(8)
 *  类 B · 名字不自证；vanilla 里这个名字**既有「body 是 modifier 左值表」的用法，也有他种语义的块**，
 *  按「全量语料实测零误报」纳入（逐名给正例）：
 *   literacy_impact(6)  pop_types/00_default.txt:24    local_cultural_tradition = 0.2
 *   goods_demand(30)    age/00_default.txt:14          global_liquor_pop_demand = -0.75
 *   high_power(25)      estates/00_default.txt:66       nobles_estate_max_tax = -1.0
 *   low_power(12)       estates/00_default.txt:72       nobles_estate_max_tax = 0.5
 *   power(12)           estates/00_default.txt:20       parliament_base_support = 0.5
 *   satisfaction(15)    estates/00_default.txt:61       monthly_prestige = 0.2
 *   unique(10)          age/00_default.txt:59           diplomatic_capacity_modifier = 0.25
 *   diplo_chance(18) / diplo_chance_accept_subject(37)
 *                       country_interactions / subject_types：base=… + diplomatic_reputation=…
 *
 *  ⚠️ 类 B 的**他种用法**（已全量语料实测 0 误报，属**潜在误报面**：词典随版本刷新可能点亮）：
 *   - power: in_game/common/attribute_columns/27_language.txt:21、94_dialect.txt:21
 *       `power = { widget = language_power  width = 100  fixed_height = 32  is_constant_width = yes  sort = {…} }`（GUI 列定义，无 modifier 左值）
 *   - power: in_game/common/trigger_localization/estate_triggers.txt:13（trigger loc 键表 none/global/third）
 *   - satisfaction: in_game/common/attribute_columns/20_province.txt:119（`widget = province_satisfaction …`）
 *   - goods_demand: main_menu/common/game_concepts/00_game_concepts.txt:82（alias/family/texture）
 *   - modifier 本身: main_menu/gfx/portraits/portrait_modifiers/*.txt 共 405+43 处
 *       `modifier = { add = 100000  <trigger> }`（权重/触发块，非 modifier 表）
 *   依据：vanilla 全量复刻扫描；`fixed_height` / `is_constant_width` / `portrait_clothing_trigger` 等
 *   均无 ≤2 纠错候选 → 0 新增告警。
 *
 * 有意**不**纳入（避免再成为「未记录的洞」）：
 *  - `(top)`：不是块，是 c2-coverage 的伪块名（顶层对象定义名本身与词典撞车，如 auto_modifiers
 *    的 `prestige = {…}`、cabinet_actions 的 `form_new_culture = {…}`）。C2 不把顶层定义名当
 *    左值候选，属正常行为。
 *  - `create_character`：效果**参数表**（body 是 `adm = {…}` / `dip` / `save_scope_as` / `if`），
 *    命中它是「已知效果 → param 退出」这条既有行为的正常结果（probe10 G2 同族）。
 *  - `capital`：byParentMod 里的命中**全部**来自 `main_menu/common/static_modifiers/location.txt:326`
 *    的 `capital = {…}`（= 下一条「数据驱动目录里的任意 id 对象」），不是独立的一类，也不属 A5。
 *  - 数据驱动目录里的**任意 id 对象**（`common/static_modifiers/**`、`common/auto_modifiers/**`
 *    的对象定义，body 也是 modifier 表，如 `location_base_values` / `development` /
 *    `rome_reborn` / `is_great_power` / `complacency_impact` / `foodstuffs_exports_banned`）：
 *    块名是作者起的 id、不能枚举，**不能**进本名字名单。A6 已用**目录级**规则
 *    （`DATA_DRIVEN_CONTEXT_DIRS` + `isDataDrivenContextDir`，与 scripted_effects 同一条
 *    `scanStickyContext` 通路）覆盖其**清单内**的目录；清单外的目录见该 JSDoc 的「有意排除」。
 *
 * 回归门槛：本族在 33 个真实 mod（reference + workshop + Paradox）上跑过「C2 零误报」
 * （probe11 / tool-content-sweep）；零误报是硬门槛。
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
  // --- modifier 左值表族（判据与逐名理由见上方 JSDoc）---
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
]);

/**
 * trigger 列表容器：这些块名在真实脚本里 body 是 **trigger/effect 列表**（而非参数表），
 * 进入该块即 context。判据（什么样的块名算「名字级容器」）：
 *   块名可枚举、在 vanilla 全量语料里 body 表现为 effect/trigger 列表（或列表 wrapper），
 *   且块名本身不在 effects.log/triggers.log 里承担「已知效果/触发的参数表」语义。
 * 名单来源：A2/A5 卡用 c2-coverage.mjs 在真实 mod 上做的模式复刻统计；每一族都由
 * probe11（temp 复制件）在 **33 个真实 mod** 上验证「加入后 C2 零误报」（零误报是硬门槛）。
 *
 * ===== A2 族（交互/选择的可见性与合法性列表，括号为统计出现次数）=====
 * - visible                     generic_actions / select_trigger 的可见性 trigger 列表（56）
 * - enabled                     cabinet_actions / generic_actions 的启用条件 trigger 列表（12）
 * - is_shown / show_if          交互类的显示条件 trigger 列表（7 / 7）
 * - can_start / can_end         situation / 交互的开始/结束条件 trigger 列表（5 / 5）
 * - is_valid / ai_is_valid      交互类的合法性 trigger 列表（5 / 9）
 * - ai_interaction_source_list  select_trigger 内的 AI 目标来源列表（内部 every_goods > limit 仍是 context）
 *
 * ===== A9 复核（2026-10，容器名单从 script_docs 解析后）=====
 * 对照：本名单 **0/53** 在「结构示例派生的容器集合」（1220 个）里 —— 它们**都不是** effect/trigger
 * 名，是**结构字段/列表部位**，dump 不提供 ⇒ 只能手写（与 CONTEXT_ENTER_NAMES 同理）。
 * 逐项复核后**剔除 1 条**：
 * - `select_trigger`（已删）：`c2-coverage --vanilla` 证据 = 988 个块 / body 键 6751 / 命中词典 **0**（ratio 0%）
 *   —— body 是**选择器配置**（`looking_for_a` / `name` / 嵌套 `visible` / `ai_interaction_source_list`），
 *   不是 effect/trigger 左值列表；作 ENTER 会把配置名当左值候选（仅扩大误报面）。
 *   剔除后其真 trigger 列表部位（`visible` / `ai_interaction_source_list`）仍在名单里 ⇒ 不丢覆盖
 *   （`board/cases/c2-trigger-list-container` 仍 2 条命中，见 A0 验收）。
 * 复核后**保留**（有证据）：`sort_text`（vanilla 97 块 / 194 键 **100%** 命中词典 —— dump 无文档但语料
 * 形态确为 trigger 列表）；`is_shown` / `is_valid` / `ai_is_valid`（vanilla 0 块 —— 无证据也无误报面，
 * A2 经 probe11 在 33 真实 mod 验证保留）。
 *
 * ===== A5 族（2026-10，名字级剩余缺口收口）=====
 * 判据与 A2 同源：**块名可枚举、body 是 effect/trigger 列表**；差别在于这些块名此前被
 * 「块名在词典 → param」或「顶层对象父模式 neutral」两条既有分支短路，整块不查。
 *  - situations / 交互脚本的 `on_*`：body 是**某时机执行的 effect 列表**；它们出现在顶层
 *    对象（situation/casus_belli/…）下，父模式是 neutral，不显式纳入则整块 neutral。
 *    名字判据 = `on_<时机>` 形态，vanilla 计数：on_start 206 / on_monthly 148 /
 *    on_completion 218 / on_accept 218 / on_activate 145 / on_end 118 / on_debate_passed 225。
 *    成员（probe10 观测到的 9 名，A5 按类收口后同族共 22 名，见下方收口段）：on_start on_monthly
 *    on_ended on_ending on_completion on_accept on_activate on_end on_debate_passed。
 *  - potential_trigger：auto_modifiers 的 **trigger 列表容器**（body 全为 trigger 左值，
 *    `potential_trigger = { has_societal_value = … culture = { OR = {…} } }`，vanilla 297）。
 *  - ai_will_do：**script value 容器**。判据 = 「脚本值容器里 `if > limit` 仍是 trigger 守卫」
 *    （`ai_will_do = { value = 10  if = { limit = { is_situation_active = … } add = 10 } }`）；
 *    ai_will_do 在 triggers.log 里是已知触发名，旧逻辑判 param，limit 里的 trigger 不查（vanilla 476）。
 *  - custom_tooltip / custom_description / show_as_tooltip：**wrapper 块**。判据 = body 是
 *    「左值列表 + 可选 triggers」的 loc 包装，而非参数表；这三个名字本身在 effects/triggers
 *    词典里是效果/触发名，旧逻辑判 param 而整块短路，故必须走 ENTER 优先 + 纳入本名单。
 *    vanilla 计数：custom_tooltip 1253 / custom_description 289 / show_as_tooltip 283。
 *  - sort_text：`attribute_columns > info > sort > sort_text > if > limit > { <typo-trigger> }`。
 *    判据 = UI 排序配置里唯一的 trigger 列表是 `limit`，其 body 是真 trigger 列表；vanilla 192。
 *    （A5 卡「优先纳入」；probe11 V2 实测 33 真实 mod 零误报。）
 *    A2 卡曾把它列为「未验证容器」，A5 完成验证后正式纳入。
 *
 * 有意**不**纳入（避免再成为「未记录的洞」）：
 * - `switch`：见下方 CONTAINER_CONTROL_NAMES 注释（case 名是任意值，纳入会误报）。
 * - `limit` / `owner` / `area` / `value` / `map_color`：形态混杂（trigger 列表 / 参数表 /
 *   scope 目标 / 取值块），无法用名字判据区分，不加；其内部漏查属已知的**名字级不可判**面。
 * - `(top)` 伪块名与数据驱动目录里作者自起 id 的对象（如 `common/static_modifiers/**`
 *   的 `location_base_values`）：块名不可枚举，属**目录级**规则（A6，已实装为
 *   `DATA_DRIVEN_CONTEXT_DIRS`），不在本名单。
 *   注（A4）：`modifier` / `country_modifier` / `raw_modifier` / `rank_modifier` /
 *   `literacy_impact` 已作为 **modifier 左值表族** 并入 CONTEXT_ENTER_NAMES（见其 JSDoc）。
 * - **同族的未验证成员** —— **已由 A5 按类收口**（2026-10）：① IO / 议会 / 任务 / 官僚等
 *   数据驱动目录里的 `on_*` 成员块（on_debate_failed / on_joined / on_abort / on_deactivate /
 *   on_left / on_fully_activated / on_persistent_completion / on_enable / on_spread_to_country /
 *   on_disband / on_creation / on_persistent_start / on_calc_effect）与 ② `*_trigger` / `actor_trigger`
 *   后缀成员块（can_join_trigger / create_visible_trigger / invite_visible_trigger /
 *   can_bestow_trigger / can_lead_trigger / can_leave_trigger / auto_leave_trigger /
 *   auto_disband_trigger / auto_bestowal_trigger / can_add_location_trigger / actor_trigger /
 *   can_remove_trigger / can_add_trigger / location_trigger / potential_target_trigger /
 *   pause_trigger）已按类并入本名单，并经「逐名计数 + 33 真实 mod 零误报」验证（probe10 G3
 *   命中、`c2-coverage --vanilla` 中这 29 名全部从 top 榜消失）。
 *
 * ===== A5 收口后仍出现在 `c2-coverage.mjs --vanilla` neutral 榜的项 =====
 * 这些**不是本名单遗漏**，已在下面显式归类：
 * - 参数名与词典撞车的**噪声**（卡里已注明）：`(top)` 6846 / `(bare)` 2603 / create_character
 *   4794+77 / dynamic_historical_event 3648 / limit / if / value / add / OR …（auditor 已逐个核过：
 *   这些块的 body 是参数表，不是 effect/trigger 列表）。
 * - **数据驱动目录的任意 id 对象内部**的成员块（`common/international_organizations/**`、
 *   `common/parliament_issues/**`、`common/formable_countries/**`、`events/**` 等）——
 *   如 create_visible 84 / form_effect 56 / ai_desire_to_join 54 / calc 53 / every_subject 53 /
 *   major_trigger 27 / can_lead_tooltip_trigger / auto_rescind_trigger …：父对象是作者起
 *   的 **id** → neutral，于是内部所有块（含已知 effect/trigger 名）都 neutral。
 *   → A6 已按**目录即上下文**覆盖其中「对象 body 是词典左值列表」的目录（清单 + 逐目录
 *   depth=1 计数见 `DATA_DRIVEN_CONTEXT_DIRS` 的 JSDoc）；不在该清单的目录为**有意排除**
 *   （同上 JSDoc）；`events/**` 这类不在 `{in_game|main_menu}/common/<目录>/` 下的形状，其
 *   对象的 effect/trigger 列表容器（`immediate`/`option`/`trigger`…）已由 ENTER 名单覆盖。
 *   A5 按卡边界不动。
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
  // --- A5：situations / 交互脚本 on_*（effect 列表）---
  "on_start",
  "on_monthly",
  "on_ended",
  "on_ending",
  "on_completion",
  "on_accept",
  "on_activate",
  "on_end",
  "on_debate_passed",
  // --- A5：同族收口（IO / 议会 / 任务 / 官僚等数据驱动目录里的 on_* 成员块，
  //     body 同样是 effect/trigger 列表；逐名由 probe10/probe11 + 33 真实 mod 零误报验证）---
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
  // --- A5：`*_trigger` / `actor_trigger` 后缀成员块（IO 的 can_*_trigger、scripted
  //     diplomatic objectives 的 actor_trigger 等，body 是 trigger 列表）---
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
  // --- A5：trigger 列表容器 / script value 容器 / loc wrapper ---
  "potential_trigger",
  "ai_will_do",
  "custom_tooltip",
  "custom_description",
  "show_as_tooltip",
  // --- A7：同族 wrapper —— 文档占位符是**单数** `<trigger>`/`<effects>`，A0 的
  //     `<effects>`/`<triggers>` 结构示例派生看不见，故显式按名纳入（与 A5 loc wrapper 同族）。---
  // calc_true_if：triggers.log `calc_true_if = { amount = 2 <trigger> <trigger> <trigger> }`。
  //   名字在 triggers 词典 ⇒ 旧逻辑判 param → body 不扫，其内的作用域容器
  //   （`any_unit = { <triggers> }`）被连带短路（真形态
  //   `country_interactions/lend_unit_to_ally.txt:162-165` 的 `ai_will_do > if > limit > calc_true_if`）。
  "calc_true_if",
  // custom_label / custom_description_no_bullet：与 custom_tooltip / custom_description /
  //   show_as_tooltip **同族 loc wrapper**（effects.log：`custom_label = { text = key subject = scope
  //   <hidden effects> }`、`custom_description_no_bullet = { … ... effects ... }`；占位符同样不是
  //   `<effects>` ⇒ 派生看不见）。语料（vanilla + 33 真实 mod）**0 次使用** ⇒ 纳入不改变零误报面，
  //   只为不留「同族未记录」的洞（清单见 board/C2-COVERAGE.md 表 B2）。
  "custom_label",
  "custom_description_no_bullet",
  // --- A5：UI 排序里的 trigger 列表（limit）---
  "sort_text",
]);

/**
 * ===== 容器/控制块（effect/trigger 列表容器）：从 script_docs 结构示例解析（A0，2026-10）=====
 *
 * **权威来源**：`docs/script_docs/effects.log` / `triggers.log` —— 每个 `## <name>` 的**示例行**
 * （`<name> = { … }`，可跨行；名字大小写不敏感，dump 里有 `every_town_rights_in_Location` 这类）
 * 只要示例块含 `<effects>` 或 `<triggers>`，该 name 的 body 就是 effect/trigger **列表** ⇒ 容器
 * ⇒ 进入后**继续** context 扫描（否则 `if = { add_prestigez = … }` 里的 typo 会漏）。
 * 判定优先级**高于**「块名在词典 → param」。
 * 实测：`effects.log` + `triggers.log` → **1220 个**（其中 **1212 = every_/any_/ordered_/random_ 各 303**，
 * 非前缀 8 = if/else/else_if/while/trigger_if/trigger_else/trigger_else_if/**switch**）。
 * 权威对照（见 `board/C2-COVERAGE.md` 的复现命令 ①）：权威有而我们没有的**只有 `switch`**，
 * 而 `switch` **有意排除**（见下）。⇒ 「权威容器集合 ∖ {switch} ⊆ 我们的容器集合」成立。
 *
 * **维护成本归零**：dump 刷新（游戏 patch）后**不改代码即自动跟随**；前缀族不必再手写。
 *
 * ⚠️ **不含 switch**：trigger 侧 `switch = { trigger = <t> <值> = { <triggers> } … }` 的 case 名是
 * 任意**值**（如 location_key `antigonish`），不是 trigger 名——纳入会把 case 名误报成拼写错
 * （实测 workshop mod 3633816300：`antigonish` 被报 did-you-mean `antagonism`）。零误报是硬门槛，
 * 故宁可少纳入 switch（其 case body 内部 typo 暂不查）。
 *
 * **dump 看不见的容器（少量）** —— `DUMP_INVISIBLE_CONTAINERS`：dump 页面写了「body 是
 * effect/trigger 列表」但示例行没有 `<effects>`/`<triggers>` 占位符（`random` = `effects...`；
 * `random_list` = 数值选项列表；`and`/`or`/`not`/`nor`/`nand`/`any_false`/`all_false` = 布尔算子，
 * 文档无示例行）⇒ 解析天然漏掉，显式列出（逐条证据见该常量注释）。
 */

/** 有意排除的权威容器（解析后删除）：`switch`（理由见上方）。 */
const DERIVED_CONTAINER_EXCLUSIONS = new Set(["switch"]);

/**
 * dump 文档语义是「effect/trigger 列表」但示例行**无**占位符（解析漏掉）的容器，显式补入。
 * 逐条依据（都来自 script_docs 页面本身 + vanilla 全量语料计数）：
 *  - `random`      effects.log（`effects... # effects to run if the random roll succeeds`）；45 块
 *  - `random_list` effects.log「randomly choose effects from a list」；472 块（body 是 `10 = {…}` 数值选项）
 *  - `and`/`or`/`not`/`nor` triggers.log 描述即「all inside trigger must be true」/「at least one entry inside
 *                  trigger must be true」/「negates content of trigger」/「a negated OR trigger」；
 *                  语料 body 命中词典 53% / 69% / 72% / 97%（vanilla）
 *  - `nand`/`any_false`/`all_false` triggers.log 里是 NAND/全假算子（`any_false` = 「equivalent to NAND」）；
 *                  语料出现极少（`nand = {` ×1），补入只为不丢这类 block 的内部扫描
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
 * **退化名单**：`script_docs` 结构示例不可用（文件缺失/格式变/全无示例）时回退到的手工容器名。
 * 与旧行为等价（A5 收口的精确名单 + 前缀族），保证「dump 不可用也不崩、不丢既有覆盖」。
 * 名字保持不变是为了审计 harness（`board/audits/harness/c2-coverage.mjs`）仍能按名解析。
 * 解析成功时**不使用**本名单（容器集合完全由 dump 决定 —— A0 验收 4）。
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

interface ContainerModel {
  /** 容器名（解析成功时为 dump 派生集 ∪ dump 不可见容器）。 */
  names: Set<string>;
  /** 前缀族（仅退化模式非空；解析成功时 dump 已枚举 1212 个）。 */
  prefixes: string[];
  /** true = 来自 script_docs 结构示例；false = 退化手工名单。 */
  derived: boolean;
}

/** 进程内缓存的容器模型（按 script_docs 目录）。 */
const containerModelCache = new Map<string, ContainerModel>();

/** 退化容器模型（新建 Set，避免调用方意外共享可变集合）。 */
function fallbackContainerModel(): ContainerModel {
  return {
    names: new Set([...CONTAINER_CONTROL_NAMES, ...DUMP_INVISIBLE_CONTAINERS]),
    prefixes: [...CONTAINER_CONTROL_PREFIXES],
    derived: false,
  };
}

/**
 * 从 effects.log / triggers.log 的**结构示例行**解析容器名。
 * 逐 `## <name>` 块：找 `^\s*<name>\s*=\s*\{`（大小写不敏感）起始的**平衡大括号**示例块，
 * 块内含 `<effects>` 或 `<triggers>` ⇒ 容器。未找到示例行/无占位符 ⇒ 不加入（如 `random`）。
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
    // name 来自 \w+（无正则元字符），直接内插安全。
    const exampleRe = new RegExp(`^\\s*${name}\\s*=\\s*\\{`, "i");
    let j = i + 1;
    let blockStart = -1;
    while (j < lines.length && !/^##\s+\w/.test(lines[j])) {
      if (blockStart < 0 && exampleRe.test(lines[j])) blockStart = j;
      j += 1;
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
 * 从 effects.log / triggers.log 文本解析容器名（不含退化名单、不含 dump 不可见容器）。
 * 有意排除的权威容器（`switch`）在这里就删掉。
 */
function deriveContainerNames(effectsText: string, triggersText: string): Set<string> {
  const names = new Set<string>();
  for (const n of containersFromLogText(effectsText)) names.add(n);
  for (const n of containersFromLogText(triggersText)) names.add(n);
  for (const n of DERIVED_CONTAINER_EXCLUSIONS) names.delete(n);
  return names;
}

/**
 * 测试/审计入口：给定 `docs/script_docs` 目录，返回结构示例派生的容器集合
 * （= 权威容器集合 ∖ 有意排除；文件缺失/无示例时为空集）。
 * A0 验收 1（「权威容器集合 ∖ {switch} ⊆ 我们的容器集合」）与 `board/C2-COVERAGE.md` 用它。
 */
export function deriveScriptDocContainers(scriptDocsDir: string): Set<string> {
  const effects = readText(join(scriptDocsDir, "effects.log"));
  const triggers = readText(join(scriptDocsDir, "triggers.log"));
  if (effects === null || triggers === null) return new Set();
  return deriveContainerNames(effects, triggers);
}

/**
 * 解析 / 取缓存的容器模型。解析出 0 个容器（dump 无结构示例）⇒ 退化手工名单。
 * 缓存按 script_docs 目录：verify.mjs 的 sweep 对 33 个 mod 调 33 次，只解析一次。
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
    model = { names, prefixes: [], derived: true };
  } else {
    model = fallbackContainerModel();
  }
  containerModelCache.set(dir, model);
  return model;
}

/**
 * 本次校验生效的容器模型。
 * 为何是进程级变量而不是参数：保持 `isContainerControl(name)` 与 `pushBlock` 的字面形状，
 * 审计 harness（`probe13.mjs` / `probe14.mjs`）以这些行做 temp 副本实验的文本锚点；
 * `analyzeSemantics` 是同步单线程的，设置后立即用于扫描，无并发可观测性。
 */
let activeContainers: ContainerModel = fallbackContainerModel();

/**
 * 合法结构字段（像是左值、实为文件结构字段）：进「已知名」排除集，**不作候选**。
 * 依据 = 文件结构（wiki 的 `Building_modding` 等）+ vanilla 实际语料（A9 卡差距 B / 修法 1），
 * **不是** script_docs（dump 里没有这些字段）。也见 board/C2-COVERAGE.md。
 */
const LEGITIMATE_STRUCTURAL_FIELDS = new Set([
  // building_types 的建筑结构字段（vanilla `building_types/capital_buildings.txt` 等 10+ 处）
  "remove_if",
  "lifts_fog_of_war",
]);

function isContainerControl(name: string): boolean {
  if (activeContainers.names.has(name)) return true;
  return activeContainers.prefixes.some((p) => name.startsWith(p));
}

/**
 * **非双用**容器（A7，P2）：容器名**不在** `CONTAINER_CONTROL_NAMES`
 * （`if`/`else`/`else_if`/`while`/`trigger_if`/`trigger_else`/`trigger_else_if`）。
 *
 * 为何要分：`if` 这类控制关键字是**双用**的 —— 既作 effect/trigger 列表容器，又作**脚本值表达式**
 * 节点（param 块里的值分支，vanilla 全量 `if`×19 / `else`×3，如
 * `add_research_progress = { if = { limit = {…} value = … } }`），在 param 父块下必须保守（不放行）。
 * 其余容器（`every_*`/`any_*`/`ordered_*`/`random_*` 作用域迭代，`random`/`random_list`，
 * `and`/`or`/`not`/`nor`/`nand`/`any_false`/`all_false`）的 body **只可能**是 effect/trigger 列表
 * ⇒ 即使在 param 下也放行（否则真形态 `create_character > every_country > <typo>` 整块不扫）。
 * 判据只叠加在**派生容器集合**（A0）之上，不引入手写前缀名单。
 */
function isUnambiguousContainer(name: string): boolean {
  return isContainerControl(name) && !CONTAINER_CONTROL_NAMES.has(name);
}

/** 相对路径是否在 common/scripted_effects/ 或 common/scripted_triggers/ 下（目录即上下文）。 */
function isScriptedDir(rel: string): boolean {
  const c = categoryFromRel(rel);
  return c === "scripted_effects" || c === "scripted_triggers";
}

/**
 * ===== 数据驱动目录（A6，2026-10）：「目录即上下文」第二类 =====
 *
 * 判据（什么样的 `<目录>` 算「body 是左值列表」的数据驱动目录，块名不可枚举）：
 *  1. 目录里的**顶层块名是作者自起的 id**（`<id> = { … }`），不可能按名字进 ENTER / 容器 / 词典，
 *     因此 `pushBlock` 对顶层对象只能给 neutral（`isScripted` 分支是唯一的入口）→ 整个 body 不扫；
 *  2. 对象 body 里存在**直接依赖 script_docs 词典的左值**——`name = <number|yes/no|scope|…>` 形式的
 *     modifier / effect / trigger 名（或与词典撞名的资源/成本键），使「左值写成 dist ≤2 的 typo」
 *     在名字级是**可判**的；
 *  3. **全量真实语料零误报（硬门槛）**：加入后必须在 33 个真实 mod（reference + workshop +
 *     Paradox mod 目录）上保持 C2 WARN = 0（`probe13.mjs` 的目录集实验 + `tool-content-sweep.mjs`）。
 *
 * 满足 1+2+3 的目录 → 其**顶层对象**（及内部 scope 块）进入 context，与 scripted_effects 走同一条
 * `scanStickyContext` 通路。顶层对象名本身**不**参与候选（C2 只查 body 左值，与 `(top)` 噪声同口径）。
 *
 * 成员（6 个；括号 = 在 `game-scripts/game/**` 真原版全量语料上，该目录的对象 body **直系**
 * `depth=1` 出现词典左值的次数 / distinct id 数；eff/trg/mod = effects/triggers/modifiers 词典）：
 *  - `static_modifiers`  body 是纯 modifier 左值表：726 个 distinct modifier 名（monthly_legitimacy 113、
 *                       monthly_prestige 112、local_max_control 51 …），2616 个 id。
 *  - `auto_modifiers`    242 个 distinct modifier 名（monthly_towards_hellenization 26 …），140 个 id。
 *  - `advances`          487 个 distinct（`unlock_unit` effect 186 + modifier 名，monthly_prestige 68 …），
 *                       2892 个 id；body 是 effect + modifier 左值表。
 *  - `prices`            17 个资源/成本键（gold 109、stability 87、prestige 53 …）——这些键同时是词典名
 *                       （词典名与结构化键撞车，正是可判的前提），332 个 id。
 *  - `holy_sites`        `importance`（trigger 名，241 次），241 个 id。
 *  - `building_types`    `employment_size`(465) / `is_foreign`(456)（trigger 名），465 个 id。
 * 6 个目录全部有 `probe13.mjs` 的目录夹具（命中 6/6）与 `board/cases` 的 `c2-dir-context-data-*` 用例。
 *
 * 有意**排除**（看起来像数据驱动目录，但**不该**按目录进 context；避免「未记录的洞」）：
 *  - **无 depth=1 词典左值**（唯一命中是已在 ENTER 的容器名）→ 纳入零收益：
 *    `country_interactions` / `character_interactions` / `generic_actions`（depth=1 唯一词典名是
 *    `ai_will_do`，A5 已 ENTER）、`death_reason`（0 条）。
 *  - **body 是结构化字段表（布尔/枚举/颜色/贴图/局部化键），depth=1 的词典名是「字段名与词典
 *    合法撞车」，不是左值列表**；纳入等于把字段名当左值候选（只扩大潜在误报面），且这些目录里
 *    真正的 effect/trigger 列表容器（`potential_trigger` / `on_*` / `*_trigger` / 各 `*_modifier`）
 *    已由名字级 ENTER/容器名单覆盖 → 不纳入：
 *      `religions`（`has_karma = yes` 等 14 名）、`gods`（`is_female`）、`laws`（`requires_vote`）、
 *      `casus_belli`（`war_goal_type`）、`parliament_agendas`（`importance`）、`subject_types`
 *      （`has_overlords_ruler` 等 7 名）、`international_organizations`（`leader_type` 等 10 个枚举
 *      字段）、`topography`（`movement_cost`/`proximity` 等 3 个地形字段）、`script_values`
 *      （`value`/`if`/`multiply` 脚本值表达式 + `save_temporary_scope_as`；其 `if > limit` 是脚本值
 *      的**值分支**，与 A7 的「param 值分支」同族，需外科式规则，不属本卡）。
 *    注：`subject_types` 的 `visible_through_diplomacy = { <trigger 列表> }` 是作者自起名的
 *    trigger 容器，属**已知的名字级不可判**面；若真实语料给出反例，按下方维护规则重新评估。
 *  - 其余 `common/<目录>`（`countries` / `locations` / … 游戏状态表、界面/贴图表、loc 表）：顶层块名
 *    不是「作者 id 对象」或 body 无词典左值，一律不纳入。
 *  - 顶层 `REPLACE:` / `INJECT:` **覆盖对象**的 body（如 `REPLACE:slave_center = { … }`，见 workshop
 *    3610028078 `…/building_types/ftc_foreign_buildings.txt:66`）仍不进 context —— `KEYWORD:` 前缀使
 *    行扫描只看到一个无名 scope 块。这是与 `common/scripted_effects/**` **同源的既有行为**（覆盖体
 *    不查，`REPLACE:foo = { add_goldd = 1 }` 在 scripted_effects 里也为 0 条），不是本目录判据的
 *    一部分；若要覆盖，属独立卡（C2 覆盖体规则），且需另做零误报验证。
 *
 * 维护规则（验收 6，零误报优先）：真实语料一旦在**已纳入**目录里出现 C2 WARN，先逐条判定——
 *  **真命中**（作者把 modifier/effect/trigger 名写错）→ 保留；**新误报**（词典名与结构化字段
 *  合法撞车）→ 收紧该目录（必要时移出清单）并**在此记录依据**。宁可少纳，不可误报。
 *
 * 命名说明：不叫 `DATA_DRIVEN_DIRS` / `isDataDrivenDir`，是为了不撞审计 harness `probe13.mjs`
 * 在 temp 副本里插入的同名 Set/函数（`const` 重名会 SyntaxError，令 D1/D2 实验跑不起来）。
 */
const DATA_DRIVEN_CONTEXT_DIRS = new Set([
  "static_modifiers",
  "auto_modifiers",
  "advances",
  "prices",
  "holy_sites",
  "building_types",
]);

/** 相对路径是否在「数据驱动目录」下（顶层块名是作者 id、body 是词典左值列表）。 */
function isDataDrivenContextDir(rel: string): boolean {
  const c = categoryFromRel(rel);
  return c !== null && DATA_DRIVEN_CONTEXT_DIRS.has(c);
}

interface ScriptDictionary {
  names: Set<string>;
  /** 按首字母分桶，供有界纠错缩小候选。 */
  byFirstLetter: Map<string, string[]>;
  /**
   * **已知名**（候选排除集，A9）：names ∪ event_targets ∪ on_actions ∪ custom_localization
   * ∪ vanilla 键名 ∪ 合法结构字段。
   *
   * ⚠️ 为何**不**直接把它合进 `names`：`names` 在 `pushBlock` 里还决定 block 是 param
   * 还是 context —— 如 `dynasty_home = { <trigger 列表> }` 的 body 是 trigger 列表，
   * 加进 `names` 会把整块变 param、body 不再扫（新的漏查）。故**块分类逻辑不动**，
   * 本集合只影响 `checkCandidate`。
   */
  knownNames: Set<string>;
  /** 容器模型（来自 script_docs 结构示例；解析不可用时为退化手工名单）。 */
  containers: ContainerModel;
}

/** `### <name>`（event_targets.log，334 条）。 */
function parseEventTargetNames(text: string | null): string[] {
  if (text === null) return [];
  return [...text.matchAll(/^### (\w+)/gm)].map((m) => m[1]);
}

/**
 * on_actions.log：`<name>:` **独占一行**（行尾是 CRLF ⇒ 用 `\r?$`，不能用 `$` 锚点）。
 * 实测 256 条（>8 长度的用于排除；数字/短名无害）。
 */
function parseOnActionNames(text: string | null): string[] {
  if (text === null) return [];
  return [...text.matchAll(/^([a-z_0-9]+):\r?$/gm)].map((m) => m[1]);
}

/**
 * custom_localization.log：**有层级** —— 顶层 `<name>:`，`Entries:` 下的子项（裸标识符）
 * **也是名字**，所以不能一行一个（naive 逐行会同时把 `Scope:` / `Random Valid:` 当名字）。
 * 实测：顶层 926 条（464 distinct）+ Entries 子项 ~47k ⇒ 并入已知名（只减误报）。
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
        inEntries = false; // 分隔线/空行 → Entries 段结束
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
 * vanilla 键名/对象名的**行首**形态：`name =`、`REPLACE:name =`（`==` 不算；`name:` 不算）。
 * 只取行首（`^`）—— 值里的标识符不是「作为键名出现过」。
 */
const VANILLA_KEY_RE = /^\s*(?:[A-Z_]+:)?([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/gm;

/** 进程内缓存的 vanilla 键名集合（按 vanilla 根路径）。实测 2830 文件 / ~0.7s。 */
const vanillaKeyNameCache = new Map<string, Set<string>>();

/**
 * 收集真原版 `game-scripts/game/**` 里**作为键名/对象名出现过**的全部名字（A9 修法 1）。
 * 只取 vanilla：① vanilla 是唯一权威的「已知名」来源；② 取其它 mod 会让流传的 typo 互相背书；
 * ③ 语义上「合法」= vanilla 已知 **或** 本 mod 自己定义。
 * 实测能档住 remove_if×82 / dynasty_home×2 / lifts_fog_of_war×3 / birth_date×8612 /
 * opinions×2390 / dynasty_names×547 / building_levels×1 / antigonish×3 / cultural_ties×1。
 * 副作用（已记录、可接受）：vanilla 自己的错字 `hidden_Effect` 会被放过 —— 不是我们的职责。
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

/** 进程内缓存的词典（按 repoRoot|vanillaRoot）。避免 sweep 对 33 个 mod 重复解析/扫 vanilla。 */
const dictionaryCache = new Map<string, ScriptDictionary | null>();

/**
 * 现解析 script_docs 词典：effects/triggers/modifiers（→ `names`，兼作块分类）+ 已知名补充
 * （event_targets/on_actions/custom_localization，仅排除候选）+ vanilla 键名（A9）。
 * 容器模型也从同一目录的 effects.log/triggers.log 结构示例解析（A0）。
 * 优先相对模块自身定位（import.meta.dirname → ../../docs/script_docs，Node 24 ESM 可用）；
 * 找不到再退回 repo 根的 docs/script_docs（workshop 真实 mod 下 findRepoRoot 常为 null）。
 * 全部找不到返回 null，C2 安全跳过（不产 WARN/NOTE）。
 */
function loadScriptDictionary(
  repoRoot: string | null,
  vanillaRoot: string | null,
): ScriptDictionary | null {
  const cacheKey = `${repoRoot ?? "<null>"}|${vanillaRoot ?? "<null>"}`;
  const cached = dictionaryCache.get(cacheKey);
  if (cached !== undefined) return cached;
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

/**
 * C2 候选命中条件：长度 ≥8、**不在已知名集合**（词典 ∪ event_targets ∪ on_actions ∪
 * custom_localization ∪ vanilla 键名 ∪ 合法结构字段）、不是 mod 自己定义的名、且有 ≤2 的纠错候选。
 * A9：`knownNames` 的判定只在这里（候选层），不影响 `pushBlock` 的 param/context 分类。
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
 * - A8：扫描前剥掉**行首覆盖关键字前缀**（`REPLACE:`/`INJECT:`/`TRY_*`/`*_OR_CREATE`），
 *   于是 `KEYWORD:foo = { … }` 的 `foo` 是普通块名、覆盖体由上面这些**既有规则**处置。
 */
function scanStickyContext(
  rawCleaned: string,
  isScripted: boolean,
  dict: ScriptDictionary,
  modDefined: Set<string>,
  modScripted: Set<string>,
  warnings: SemanticWarning[],
  // A6：文件是否在「数据驱动目录」下（顶层对象是作者 id、body 是词典左值列表）。
  // 与 `isScripted` 分开传（不在此处 OR）是为了保持调用点第二行 `isScriptedDir(rel),` 的
  // 字面不变——审计 harness probe13.mjs 以此行做 temp 副本的 D1/D2 实验锚点。
  isDataDriven: boolean,
): void {
  // A8：先剥行首覆盖关键字前缀（理由与判据见 stripOverrideKeywordPrefixes 的 JSDoc）。
  const cleaned = stripOverrideKeywordPrefixes(rawCleaned);
  const n = cleaned.length;
  const stack: ContextMode[] = [];
  let inString = false;
  let i = 0;

  const currentMode = (): ContextMode =>
    stack.length > 0 ? stack[stack.length - 1] : "neutral";

  const pushBlock = (name: string, parentMode: ContextMode): void => {
    const isTopLevel = stack.length === 0;
    // A7（P2）：param 父块下的**非双用容器**（作用域迭代 every_/any_/ordered_/random_、
    // random/random_list、and/or/not/nor/nand/any_false/all_false）body 仍是 effect/trigger 列表
    // ⇒ 放行进 context；否则整块被短路成 param、body 不扫（真形态
    // `create_character = { every_country = { <typo> } }`）。**不放行**双用控制关键字
    // （见 isUnambiguousContainer 的 JSDoc：param 值分支的 if/else 必须保持不扫）。
    if (parentMode === "param" && isUnambiguousContainer(name)) {
      stack.push("context");
      return;
    }
    let mode: ContextMode;
    // ENTER 名单**优先**于 param（A5 G2a/G2b）：已知效果的参数块里嵌套的
    // effect/trigger/hidden_effect/hidden_trigger/容器块（真实形态
    // `create_building_country_in_location > hidden_effect > <effect>`）body 仍是
    // effect/trigger 列表；先判 `parentMode === "param"` 会把整块短路成参数表而漏查。
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

  // vanilla 侧可用性：`game-scripts/game/` 缺失，或其中按 `<目录>` 收集到的 common 文件总数为 0
  // （空/坏），都无法判定目标是否为 vanilla 对象 → 退化：只给一条 NOTE，跳过 per-target 产出。
  // 注意：vanilla 根有内容、只是某个特定 `<目录>` 恰好无 vanilla 文件 → 那是真命中，照常 WARN。
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
  // vanilla 根严格限定为真原版 `game-scripts/game/**`（**不含** `game-scripts/workshop/**`）。
  // 为何排除 workshop 镜像：`sync_game_scripts` 把**所有已订阅 workshop mod** 的内容镜像到
  // `game-scripts/workshop/<mod_id>/**`（见 sync-game-scripts.ts）。若并入 vanilla，
  // 镜像过的 mod 只要自己的对象也在镜像里 → 被 `vanilla.has(id)` 判为「vanilla 已有」：
  //   - C3：新对象的 loc 检查被跳过 —— 对镜像过的 workshop mod C3 实际失效（假阴性）；
  //   - C1：`REPLACE:` 一个只存在于他 mod 镜像里的目标被判「存在」→ 少报。
  // 用户决议（2026-10-09，见 board/tasks/A3-workshop-mirror-treated-as-vanilla.md）：
  // vanilla 严格 = 真原版 `game-scripts/game/**`。
  // 退化口径不变：`game-scripts/game/` 缺失/空 → 跳过 vanilla 侧核对并给 NOTE。
  const vanillaRoot =
    gameScriptsRoot !== null && isDirectory(join(gameScriptsRoot, "game"))
      ? join(gameScriptsRoot, "game")
      : null;

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
  let totalVanillaFiles = 0;
  for (const category of overridesByCategory.keys()) {
    totalVanillaFiles += vanillaFileCountByCategory.get(category) ?? 0;
  }
  const vanillaAvailable = vanillaRoot !== null && totalVanillaFiles > 0;

  for (const category of overridesByCategory.keys()) {
    checked.push(`common/${category}`);
  }

  // C1 的 game-scripts/game/ 缺失退化逻辑（NOTE）保持不动；但不再 early-return，C2 独立运行。
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
  const dict = loadScriptDictionary(repoRoot, vanillaRoot);
  if (dict !== null) {
    checked.push("c2:script_docs");
    // 容器模型：从 script_docs 结构示例解析（A0）；不可用时为退化手工名单。
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

  // ---- C3：新对象缺约定 loc key（只查 mod 新加的建筑/商品；独立于 C1/C2） ----
  if (c3DefCategories.length > 0) {
    for (const category of c3DefCategories) checked.push(`c3:common/${category}`);
    let c3VanillaFiles = 0;
    for (const category of c3DefCategories) {
      c3VanillaFiles += vanillaFileCountByCategory.get(category) ?? 0;
    }
    if (vanillaRoot !== null && c3VanillaFiles > 0) {
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
      // 与 C1 同口径退化：game-scripts/game/ 缺失或空 → 无法区分 vanilla/新对象，跳过 + NOTE（不 crash）。
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
