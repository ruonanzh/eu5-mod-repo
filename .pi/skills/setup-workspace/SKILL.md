---
name: setup-workspace
description: EU5 (pdx-script) 的环境与路径准备：定位游戏安装目录、Steam 创意工坊内容目录与 Paradox mod 安装目录，并用 sync_game_scripts 镜像 vanilla 脚本作参考。当路径未知/记错、需要验证玩家给的路径、或准备在全新机器上开始做 mod 时读取。EU5 无运行时依赖、无编译。
---

# Environment & paths (EU5)

EU5 mods are **pure PDXScript text** — no compilation, no runtime SDK, **no runtime to install**.
The game is **Windows-only**. What this repo still needs is knowing **where the game and the mod
folder are**.

Three paths (recorded in `.gamer-agent.local.json` by the path tools):

| Key | Meaning | Who uses it |
|---|---|---|
| `gameDir` | game install directory | reading vanilla scripts; deriving the mod folder |
| `workshopDir` | Steam Workshop content directory | **read-only reference** (read existing workshop mods); **not involved in installing** |
| `modInstallDir` | Paradox mod directory (`<userDocuments>/Paradox Interactive/Europa Universalis V/mod`) | `install_mod` copies the mod here |

**Required vs optional (U29)**: `gameDir` is required; `modInstallDir` is required when the contract
declares `modInstall` (non-null) — a wrong one of either = `FAIL`.
`workshopDir` is only a read-only reference and **never produces FAIL** (at most `WARN`); when the
contract says `workshop.supported: false` it is **not looked at at all**. This repo sets
`workshop.supported = true`.

## Tool split (do not mix them up; one shared implementation in `.pi/lib/game-paths.ts`)

| Tool | When | Side effects |
|---|---|---|
| `check_runtime` | one-shot: discover + validate + record (first time, or when the environment may have changed) | writes runtime state |
| `check_game_paths` | **verify only**: player gave a path, or re-check what is remembered | **none** (read-only, no scanning, no state) |
| `set_game_dir` / `set_workshop_dir` / `set_mod_install_dir` | player gave a **specific** path → remember it (validated first; falls back to internal discovery/derivation → `WARN`) | writes runtime state |
| `set_game_paths` | several paths at once (at least one) | writes runtime state |
| `install_runtime` | **guide only** (or reports "already present") — never installs | none |
| `sync_game_scripts` | mirror vanilla `game/` + `workshop/` text/definition scripts into `game-scripts/` for reference while authoring | writes `game-scripts/` |

## How to use

- **Environment unknown or possibly changed and you need it**: run `check_runtime` (it discovers via
  explicit path → remembered path → platform hints → Steam libraries). No need to repeat it every turn.
- **Player gave a path**: verify with `check_game_paths`, then record with the matching `set_*`
  (or `set_game_paths` for several).
- **Need vanilla definitions / loc keys / INJECT targets**: run `sync_game_scripts` and read
  `game-scripts/` (see `docs/INDEX.md` for which source to use).
- **Failures**: fix the cause the message points at; when the environment or network blocks you or the
  same failure repeats, resolve the precondition instead of retrying indefinitely.

## Related skills

- Authoring/modifying the mod itself → `mod-creator`.
- Getting the artifact into the game → `mod-installer`.
