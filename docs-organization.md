# EU5 mod repo — docs/wiki/scripts 现状与整改计划

> 工作文档：盘点 `docs/` 三层内容与 `scripts/` 的现状，提出整理方案。整理执行完成后本文件归档或删除。
> 日期：2026-09-09

## 1. 现状盘点

### 1.1 整体结构

```
eu5-mod-repo/
├── mod-repo.json                  # pdx-script 声明 ✅
├── AGENTS.md / README.md          # ⚠️ 仍是 Fake Game 中文占位（M5 未做）
├── lefthook.yml                   # ⚠️ json 占位（未核对）
├── .gitignore                     # ⚠️ 当前 ignore 掉 docs/mod-wiki/
├── .pi/
│   ├── extensions/                # ✅ mod-lint.ts(validate_mod)；⚠️ runtime-check/install/mod-install 仍 json 占位
│   └── skills/mod-authoring/SKILL.md  # ⚠️ Fake Game 占位
├── docs/
│   ├── INDEX.md                   # ✅ docs 地图（但未纳入 mod-wiki）
│   ├── game.md                    # ✅ EU5 概览（英文）
│   ├── eu5-modding-conventions.md # ✅ 约定 cheat-sheet（英文）
│   ├── data_types/                # ✅ 语义 dumps 3.0M（游戏生成）
│   ├── script_docs/               # ✅ 语义 dumps 1.9M（游戏生成）
│   └── mod-wiki/                  # ⚠️ 31M / 462 页 / 30 目录（当前被 ignore）
├── reference/example_mod/         # ⚠️ 仍是 json 占位（content.json/manifest.json）
├── scripts/
│   ├── crawl_eu5_wiki.py          # ✅ 全站抓取工具（合规）
│   └── __pycache__/               # ⚠️ 垃圾（Python 编译缓存）
└── specs/mod-spec.md              # ✅ 英文，与 validate_mod 一致
```

### 1.2 docs/ 三层的职责与体量

| 层 | 目录 | 体量 | 职责 | 玩家是否需要 |
|---|---|---|---|---|
| 精选知识层 | `game.md` + `eu5-modding-conventions.md` + `INDEX.md` | ~20K | agent 做 mod 时直接读的「为什么」与约定 | ✅ 必须 |
| 语义 dumps | `data_types/` + `script_docs/` | 4.9M | 精确 effect/trigger/modifier/scope/datatype 清单（游戏导出，权威） | ✅ 必须（D1 已定进 repo） |
| wiki 全站快照 | `mod-wiki/` | 31M / 462 页 | 完整 wiki 参考（30 分类目录） | ❓ 待定（本次整改核心） |

### 1.3 mod-wiki 快照的现状

- 462 个 `.md`，31M，30 个分类目录（已按主题分类 + `_uncategorized/`）
- 分类分布：Countries 189、_uncategorized 90、Modding 53、Game_concepts 29、Events 15、Scripted_content 10、Patches 8、Estates 8、Economy 7、Laws 6、其余小类
- `categories.json`：完整 title→分类索引
- `.revisions.json`：增量同步缓存
- 生成器 `scripts/crawl_eu5_wiki.py` 支持全站/分类/显式列表抓取 + 增量 + 15s 合规限速

### 1.4 问题清单（混乱点）

1. **`docs/mod-wiki/` 被 `.gitignore` 忽略** —— 但这是维护者已整理好的知识资产，玩家自整理成本高，应进 repo。
2. **docs/ 三层职责未显式分离** —— `INDEX.md` 没说明精选层 / dumps / wiki 快照的关系与取舍。
3. **31M 体积 vs 玩家价值未决** —— Countries(189)/Patches(8) 是攻略/数据页，对 mod 开发价值低但占大头；全进会让 clone 变大。
4. **M4/M5 未完成** —— runtime-check/install/mod-install 仍是 json 占位；AGENTS/README/SKILL/reference 仍是 Fake Game 占位。
5. **垃圾文件** —— `scripts/__pycache__/`、可能残留的旧产物。
6. **`.revisions.json` 处置未定** —— 若 wiki 进 repo，这个缓存是否也提交（方便他人增量更新）。

## 2. 整改计划

### 2.1 决策点（需确认）

- **D-wiki-1：wiki 快照范围**。三选一：
  - A. 462 页全进 repo（31M，最全，clone 慢）
  - B. 只进 modding 相关分类（Modding/Game_concepts/Events/Scripted_content/Estates/Economy/Laws/Interface/Modding_tools 等 ≈ 120 页 ≈ 8M），Countries/Patches/攻略页不进
  - C. 逐页筛选（人工过一遍 462 页，最精确但最费劲）
- **D-wiki-2：`_uncategorized/` 90 页**。人工筛 or 暂留（玩家可按需查）or 删。
- **D-wiki-3：`.revisions.json` 是否提交**。提交（他人 clone 后可增量更新）vs 忽略（纯机器状态）。

### 2.2 目标结构（整改后）

```
docs/
├── INDEX.md                       # 总地图：精选层 + dumps + wiki 快照的导航与取舍
├── game.md / eu5-modding-conventions.md   # 精选层（不变）
├── data_types/ + script_docs/     # 语义 dumps（不变）
└── mod-wiki/                      # wiki 快照（进 repo，范围按 D-wiki-1）
    ├── <分类目录>/
    ├── categories.json
    └── .revisions.json            # 按 D-wiki-3
```

### 2.3 分步行动

| 步 | 内容 | 依赖 |
|---|---|---|
| **P0 清理** | 删 `scripts/__pycache__/`、旧残留；`.gitignore` 去掉 `docs/mod-wiki/` | 无 |
| **P1 定 wiki 范围** | 按 D-wiki-1/2/3 决定 mod-wiki 保留哪些，删掉不要的分类 | D-wiki-1/2/3 |
| **P2 INDEX 更新** | `INDEX.md` 写明三层职责 + mod-wiki 导航 + 取舍说明 | P1 |
| **P3 补 M4/M5** | runtime-check/install/mod-install 三个工具；AGENTS/README/SKILL/reference 英文重写 | 无（与 P0-P2 并行） |
| **P4 收尾** | 全 repo 英文一致性检查、`.revisions.json` 处置、`git add` 提交 wiki | P1/P2/P3 |

## 3. 附：crawler 抓取过程中已修的问题（记录）

1. `find_repo_root` 靠 `mod/` 目录识别根 → 改用 `mod-repo.json` 标记。
2. `allpages&aprop=categories` 在此 wiki 失效 → 两阶段（allpages 标题 + `prop=categories` 批量）。
3. 分类名下划线 vs 排除正则空格不匹配 → 匹配前 `replace("_"," ")`。
4. 网络超时（`TimeoutError`）崩死进程 → API 请求 3 次重试 + 单页失败 skip。
5. `Compilation` 等 meta 分类混成目录 → 扩展排除名单 + `--reclassify` 本地重归类。
