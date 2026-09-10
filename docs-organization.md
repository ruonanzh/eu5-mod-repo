# EU5 mod repo — docs/wiki/scripts 整改记录与剩余待办

> 工作文档：记录 `docs/` 与 `scripts/` 的整理决策与执行结果。全部整改完成后归档或删除。
> 更新：2026-09-09

## 1. 当前结构（整改后）

```
eu5-mod-repo/
├── mod-repo.json                  # ✅ pdx-script 声明
├── AGENTS.md / README.md          # ⚠️ 仍是 Fake Game 占位（M5 待做）
├── lefthook.yml                   # ⚠️ json 占位
├── .gitignore                     # ✅ ignore: __pycache__/ + .gamer-agent.local.json + game-scripts/
├── .pi/
│   ├── extensions/
│   │   ├── mod-lint.ts            # ✅ validate_mod（语法/约定 linter）
│   │   ├── runtime-check.ts       # ✅ check_runtime（三目录探测，Windows-only）
│   │   ├── runtime-install.ts     # ✅ install_runtime（无依赖，永远 PASS）
│   │   ├── sync-game-scripts.ts   # ✅ sync_game_scripts（vanilla 脚本镜像，增量）
│   │   └── mod-install.ts         # ⚠️ install_mod 仍 json 占位
│   └── skills/mod-authoring/SKILL.md  # ⚠️ Fake Game 占位
├── docs/
│   ├── INDEX.md                   # ✅ docs 地图（⚠️ 未纳入 mod-wiki）
│   ├── game.md                    # ✅ EU5 概览（英文）
│   ├── eu5-modding-conventions.md # ✅ 约定 cheat-sheet（英文）
│   ├── data_types/                # ✅ 语义 dumps 3.0M（游戏导出，进 repo）
│   ├── script_docs/               # ✅ 语义 dumps 1.9M（同上）
│   └── mod-wiki/                  # ✅ 118 页 mod API/机制（9.2M，进 repo）
├── game-scripts/                  # ✅ vanilla 脚本镜像（git-ignore，428M，玩家端生成）
├── reference/example_mod/         # ⚠️ 仍是 json 占位
├── scripts/
│   └── crawl_eu5_wiki.py          # ✅ 全站抓取（⚠️ 范围未限制，见待办 1）
└── specs/mod-spec.md              # ✅ 英文，与 validate_mod 一致
```

## 2. 知识层决策（已定）

### 2.1 mod-wiki（wiki 快照）—— 已改名 + 精简

- **改名**：`eu5-wiki` → `mod-wiki`（进 repo）。
- **范围标准**：只保留「agent 写 mod 会查的 API/机制」页；砍「攻略/列表/消歧义/元页」。
- **保留 9 目录 118 页（9.2M）**：`Modding/` 53（mod API 核心）、`Game_concepts/` 29（script 引用的 concept）、`Estates/` 8、`Economy/` 7、`Laws/` 6、`Ages/` 6、`Government/` 4、`Modding_tools/` 3、`Interface/` 2。
- **砍 344 页**：`Countries/` 189（各国攻略）、`_uncategorized/` 90（消歧义 stub + 列表 + 攻略）、`Events/` 15 与 `Scripted_content/` 10（各国 `*_content` 攻略，非 modding 机制）、`Patches/`、`Military/`、`Religion/`、`Flags/`、`Wiki/`、`Community_Mod_Framework/` 等。
- **验证依据**：三个真实问题实测（伊斯坦布尔特产 / 意大利局势结束条件 / 专制时代法律）——`game-scripts` 能精确回答（can_end 的 50 年、`current_age` 限制），wiki 攻略页不能；wiki 的价值在「机制概念」，mod API 全在 `Modding/`。

### 2.2 game-scripts（vanilla 脚本镜像）—— 保留，本地生成

- **定位**：**精确数据源**（agent grep vanilla 对象/字段/条件），是写 mod 的核心事实来源，必须保留。
- **不进 repo**：428M 本地缓存（git-ignore），由 `sync_game_scripts` 工具在玩家端生成。
- **排除缓存目录**：`gfx/map/map_objects/generated`、`sound/banks`、`terrain_cache`、`binaries`（生成数据非脚本）。

### 2.3 运行时工具（M4 完成 3/4）

| 工具 | 状态 |
|---|---|
| `check_runtime` | ✅ 探测 gameDir/workshopDir/modInstallDir（Steam libraryfolders.vdf + 注册表 + installDirHint，Windows-only），写 `.gamer-agent.local.json` |
| `install_runtime` | ✅ 永远 PASS（无依赖，提示游戏需玩家自装） |
| `sync_game_scripts` | ✅ 增量拉取 vanilla 文本 → `game-scripts/`（KEEP_SUFFIXES allowlist + 排除缓存目录 + 删 stale） |
| `install_mod` | ⚠️ 仍 json 占位 |

## 3. 剩余待办

| # | 事项 | 说明 |
|---|---|---|
| 1 | ✅ crawler 范围限制 | 已改：默认只 sync `KEEP_TOPICS`（9 分类 118 页），`--all-content` 才全站；`.revisions.json`/`categories.json` 已清理到 118 页 |
| 2 | **mod-install.ts** | install_mod 工具：复制 `your_mods/<name>/` → `modInstallDir`（幂等覆盖，目标未发现 → FAIL + NEXT: check_runtime） |
| 3 | **M5 提示词** | AGENTS.md（短地图）+ README + SKILL.md（操作手册，说明 check_runtime/sync_game_scripts/validate_mod 用法）+ reference/example_mod 样例（英文） |
| 4 | **INDEX.md 更新** | 纳入 mod-wiki 导航 + 三层职责（精选层 / dumps / mod-wiki）说明 |
| 5 | **全 repo 英文一致性** | AGENTS/README/SKILL/reference 仍 Fake Game 中文占位 |

## 4. crawler 抓取过程中已修的问题（记录）

1. `find_repo_root` 靠 `mod/` 目录识别根 → 改用 `mod-repo.json` 标记。
2. `allpages&aprop=categories` 在此 wiki 失效 → 两阶段（allpages 标题 + `prop=categories` 批量）。
3. 分类名下划线 vs 排除正则空格不匹配 → 匹配前 `replace("_"," ")`。
4. 网络超时（`TimeoutError`）崩死进程 → API 请求 3 次重试 + 单页失败 skip。
5. `Compilation` 等 meta 分类混成目录 → 扩展排除名单 + `--reclassify` 本地重归类。
