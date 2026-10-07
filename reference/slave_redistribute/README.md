# Slave Redistribute（奴隶再分配）

**1.2.0**（适配 EU5 1.3.x；1.4 测试版待验证）

在地点右键菜单里用两步操作，把你国家境内所有奴隶人口在各地点之间转移。

---

## 方法一：先标记「迁出」，再「接收」（经典流程）

适合：先选定要搬空的地点，再在目标地点一次性接走全部奴隶。

1. 在**有奴隶**的地点上右键，打开地点菜单。
2. 点击 **「… — 设为迁出地点」**（菜单前半段会显示该地点当前奴隶数量）。
3. 在要**接收奴隶**的地点上右键。
4. 点击 **「接收迁出地点的 _N_ 名奴隶到此地」**（`_N_` 为迁出地奴隶总数）。
5. 在确认窗口中核对人数与地名后确认。

完成后，迁出标记会自动清除。

_说明：早期介绍里使用「设为来源」「接收奴隶」等简称；当前游戏内文案为上述完整条目，以游戏为准。_

---

## 方法二：先设「接收地点」，再从别处「送入」（反向流程）

适合：先固定一个集散地，再从多个有奴隶的地点依次把奴隶送过去。

1. 在要作为**集散地**的地点上右键，点击 **「设为奴隶接收地点」**（不要求该地点先有奴隶）。
2. 在**其它有奴隶**的己方地点上右键，点击 **「将本地 _M_ 名奴隶送入 _地名_（_K_）」**  
   - `_M_`：当前地点要送出的奴隶数  
   - `_地名_`：接收地点名  
   - `_K_`：接收地点**当前**奴隶总人口（便于对照，仅作参考）
3. 确认后，奴隶会迁入接收地，**接收地点标记仍然保留**，可继续在别的地点重复「送入」。

取消接收标记：在**任意己方地点**右键，使用 **「撤销接收地点：…」**。

---

## 两种模式的并存与互斥

- **设迁出地点**时，若已存在接收地点标记，会先清除接收标记。  
- **设接收地点**时，若已存在迁出地点标记，会先清除迁出标记。  
- **撤销迁出** / **撤销接收** 均可在任意己方地点操作；撤销不会移动人口。

---

## 致谢

为了摸透这套奴隶分配与劳工机制花了很长时间，感谢 B 站 up **清溪鱼233** 的分析与讲解：

https://www.bilibili.com/video/BV1rDX1B8E5q/?spm_id_from=333.1387.homepage.video_card.click&vd_source=56b6f30d9d0add4f1dbbb17d638529c1

---

## English

**1.1.0** — Compatible with EU5 **1.3.x** (1.4 beta not yet verified).

### Updates

**1.1.0**
- Rebased `context_menu.gui` on the current **1.3 vanilla** file instead of shipping an older full copy (~1983 lines vs ~2629 in 1.3).
- With the mod enabled, vanilla location menu changes from 1.3 remain available (e.g. **Move Capital**, updated building/unit/market icons, pin buttons using `action_tooltip` + `down`).
- Previously, the mod still “worked” on 1.3 because it **overwrote the new menu with an old UI snapshot**; slave transfers worked, but newer vanilla entries were hidden.
- Slave transfer logic (`scripted_guis`, localization) is unchanged; `supported_game_version` is now **1.3.***.

**1.0.6 and earlier**
- Two flows via location right-click: export-then-receive, or set a receiving hub and send from other locations; confirm dialogs with counts and names; export marker clears after receive.

Use the **location context menu** (right-click a location) for a two-step workflow to move **all slave pops** between locations inside your country.

### Method 1: mark an export location, then receive (classic)

Best when you want to pick **one donor location** first, then pull every slave to a **receiver location** in one action.

1. Right-click a location that **has slaves** and open the menu.
2. Choose **Export slaves from here: _N_ — set as source location** (the number is the current slave count on that location).
3. Right-click the location where you want slaves to **arrive**.
4. Choose **Receive _N_ slaves here** (the game shows the total from the saved source).
5. Confirm in the dialog after checking counts and names.

After a successful transfer, the **export marker is cleared** automatically.

_Note: older write-ups sometimes said “set as source” / “receive slaves” in short form; in-game strings are the full lines above._

### Method 2: set a hub first, then send from elsewhere (reverse flow)

Best when you want a **fixed hub** and will ship slaves from **several** donor locations one after another.

1. Right-click the location that should be the **hub** and choose **Set as slave destination (receiver)**. That location does **not** need slaves first.
2. On **other owned** locations that **have slaves**, right-click and use **Send _M_ slaves to _Name_ (_K_)**, where:
   - **_M_** — slaves you are sending from the current location  
   - **_Name_** — the saved destination’s name  
   - **_K_** — the destination’s **current total slave population** (reference only; updates with the game state)
3. After you confirm, pops move to the hub and the **destination marker stays active** so you can repeat **Send** from more locations.

To drop the hub flag: on **any owned** location, use **Cancel destination: …**.

### How the two modes interact

- Choosing **set as source (export)** removes a **destination** flag if one was set.  
- Choosing **set as destination (receiver)** removes an **export/source** flag if one was set.  
- **Cancel export** and **Cancel destination** are available from any owned location and **do not** move pops.

### Acknowledgments

Understanding slave distribution and labor in EU5 took a lot of time. Thanks to Bilibili creator **清溪鱼233** for their analysis (Mandarin video):

https://www.bilibili.com/video/BV1rDX1B8E5q/?spm_id_from=333.1387.homepage.video_card.click&vd_source=56b6f30d9d0add4f1dbbb17d638529c1

If the query parameters break, open `https://www.bilibili.com/video/BV1rDX1B8E5q/` or search the creator / ID on Bilibili.
