# README

---

## 中文

### 名称

**生产与贸易对齐市场地图模式所选市场**

**模组 ID：** `sync_market_ui_focus`

### 说明

《欧陆风云 V》里，**生产**（建筑、原料等）和**贸易**界面顶部都有「按市场筛选」的下拉框。游戏内部用一层共用的 **UI 焦点市场** 来决定这里显示哪个市场。

**原版问题：** 你在**市场地图模式**里点选某地，右侧会打开对应市场的侧边栏，看起来已经换市场了；但再去开**生产**或**贸易**时，顶上的市场筛选**往往还停留在上一次选过的市场**，必须再手动点一次下拉框，非常啰嗦。

**本 mod 做法：** 在你查看或切换市场侧边栏时，自动调用 `SetUIFocusMarket`，把上述共用焦点改成**当前正在看的这个市场**。具体包括：

- 鼠标进入市场侧边栏（头部或主内容区）时同步；
- 在市场列表里点开另一个市场时，在打开前先同步；
- 用侧边栏上/下箭头在相邻市场间切换时同步。

**效果：** 从地图选好市场后，再进生产和贸易，**市场筛选会与你在地图 / 侧边栏里看的那个市场一致**，不必重复手选。

**范围说明：** 只影响经济体相关界面里的市场筛选，不会改动军事、外交等无关界面。若与其它同样覆盖 `selected_market_view.gui` 的 mod 同开，可能冲突，需自行取舍或合并。

### 安装

1. 将模组放入 Paradox 《欧陆风云 V》的 mod 目录（或通过本仓库 `eu5-upload-mod` 同步到 `local.paths.json` 中的 `paradox_mods.host_path`）。
2. 在启动器中启用 **Production & Trade Match Map Mode Market**（id：`sync_market_ui_focus`）。

**维护说明：** 本 mod 以仓库内 vanilla 的 `game/in_game/gui/selected_market_view.gui` 为底，**仅追加**几处 `SetUIFocusMarket`；游戏大版本更新后若市场 / 贸易页报错，需对照新版 vanilla 重新合并，不要继续整文件覆盖旧版 gui。

**游戏版本：** 见 `.metadata/metadata.json` 的 `supported_game_version`（当前为 `1.3.*`）。

### 更新说明

#### 1.0.1

- **修复：** 先前整文件覆盖的是**旧版** `selected_market_view.gui`，与 vanilla 1.3 不一致，可能导致贸易 / 市场页布局异常，并在 `error.log` 出现 `Malformed item desc`（例如原 mod 约第 964 行附近）。
- **调整：** 改为以 **vanilla 1.3** 为底，只保留 mod 所需的 `SetUIFocusMarket` 调用；恢复 1.3 原版行为（如点击商人贸易利润时使用 `OpenTradesSubtabFilteredByCountry` 等）。
- **文档：** README 补充中文说明与维护提示。

#### 1.0.0

- **初版：** 在市场侧边栏打开 / 浏览 / 切换市场时同步 UI 焦点市场，使生产与贸易的市场筛选与地图或侧边栏当前市场一致。

---

## English

### Name

**Production & Trade Match Map Mode Market**

**Mod ID:** `sync_market_ui_focus`

### Description

In *Europa Universalis V*, **Production** (buildings, raw goods, etc.) and **Trade** both have a **market filter dropdown** at the top. The game uses a shared **UI focus market** to decide which market is shown there.

**Vanilla issue:** When you pick a location in **market map mode**, the matching market opens in the side panel—you’ve clearly switched markets. But if you then open **Production** or **Trade**, the market filter at the top **often still shows the previous market**, and you have to change the dropdown again by hand.

**What this mod does:** While you view or switch markets in the market lateral panel, it calls `SetUIFocusMarket` to set that shared focus to **the market you are currently viewing**. Specifically:

- When the pointer enters the market side panel (header or main content);
- When you open another market from the market list (sync before opening);
- When you move to the previous/next market with the up/down arrows in the side panel.

**Result:** After choosing a market on the map, opening Production or Trade **uses the same market in the filter** as on the map / in the side panel—no second manual selection.

**Scope:** Only economy-related market filters are affected; military, diplomacy, and other unrelated UIs are unchanged. If another mod also overrides `selected_market_view.gui`, you may get conflicts—pick one version or merge manually.

### Installation

1. Place the mod in your Paradox *Europa Universalis V* mod folder (or sync from this repo with `eu5-upload-mod` to the path in `local.paths.json` → `paradox_mods.host_path`).
2. Enable **Production & Trade Match Map Mode Market** in the launcher (id: `sync_market_ui_focus`).

**Maintenance:** This mod is based on vanilla `game/in_game/gui/selected_market_view.gui` in the repo, with **only** a few `SetUIFocusMarket` calls added. After a major game update, if the market / trade panel throws errors, re-merge against the new vanilla file—do not keep overwriting with an old full gui copy.

**Game version:** See `supported_game_version` in `.metadata/metadata.json` (currently `1.3.*`).

### Changelog

#### 1.0.1

- **Fix:** The mod previously replaced the entire `selected_market_view.gui` with an **older** vanilla copy, out of sync with vanilla 1.3. That could break the trade / market layout and trigger `Malformed item desc` in `error.log` (e.g. around the old mod’s line ~964).
- **Change:** Rebased on **vanilla 1.3**, keeping only the mod’s `SetUIFocusMarket` hooks; restored 1.3 behaviour (e.g. merchant trade profit click uses `OpenTradesSubtabFilteredByCountry`).
- **Docs:** Added Chinese description and maintenance notes to the README.

#### 1.0.0

- **Initial release:** Sync UI focus market when opening, browsing, or switching markets in the market lateral panel, so Production and Trade market filters match the map / side panel selection.
