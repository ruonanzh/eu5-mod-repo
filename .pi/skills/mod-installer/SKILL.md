---
name: mod-installer
description: 把 EU5 的 mod 装进游戏的 Paradox mod 目录（`install_mod`）：安装目录名 = `your_mods/` 目录名（须等于 `metadata.id`）、重装原地更新、被别的 mod 占用时改装 `<目录名>_pimod`、事务化替换，以及装完要让玩家看到/启用它。当玩家要「装进游戏 / 在启动器里看到它 / 更新已装 mod」时读取。
---

# 装进游戏（EU5）

`install_mod` 把 mod 复制到 **Paradox mod 目录**（`<userDocuments>/Paradox Interactive/Europa Universalis V/mod`）。
目标来自 `check_runtime` 的发现结果，**它自己不探测**；路径没记录时先看 `setup-workspace`。
目录不存在**不是错误**（全新机器的正常状态，工具会创建）。

## 规则

- **装进去的目录名 = `your_mods/` 下的目录名**（本 repo 约定它与 `metadata.id` 一致）—— 这样名字始终是单层路径段，
  构造上不可能写到游戏目录之外；玩家在**启动器**里看到的目录名与工作区里的一致，便于对号入座。
- **重装 = 原地更新**：靠安装目录里的 `.pi-mod.json` 标记识别「这是我上次装的」。
- **目标目录属于别的 mod**：不覆盖别人，改装成 `<目录名>_pimod`，只加标记，**不修改**该副本的 `metadata.json`。
  这时候要**告诉玩家**它实际装成了哪个目录名（游戏内标题 `name` 与 `id` 不变）。
- **替换是事务性的**：旧的那份先挪到旁边（不删），新的换入成功后才删；换入失败则旧版本仍在。

## 装完之后

- `install_mod` 成功 ≠ 游戏里已加载/已启用：如实区分「已复制到 mod 目录」「启动器里能看到」「游戏内生效」三种状态。
- 需要玩家在**启动器的播放集（playlist）**里启用它 —— 按 `docs/INDEX.md` / `docs/game.md` 的说明告诉玩家下一步。

## 相关技能

- 路径没准备 / 需要镜像 vanilla 脚本 → `setup-workspace`。
- 产物本身（metadata.json、localization、PDXScript）→ `mod-creator`。
