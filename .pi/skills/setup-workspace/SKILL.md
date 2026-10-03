---
name: setup-workspace
description: EU5 (pdx-script) 的环境与路径准备：定位游戏安装目录、Paradox mod 安装目录与 Steam 创意工坊内容目录，并把 vanilla 脚本镜像进 game-scripts/ 作为写 mod 的上下文。当路径未知/记错、需要验证玩家给的路径、或准备在全新机器上开始做 mod 时读取。EU5 无运行时、无编译。
---

# Environment & paths (EU5)

Get the facts straight and record them: where the game is, what the three paths are, and that the
vanilla context is ready. **This step only produces facts** — it does not produce a mod. Loading the
skill does not grant write permission; consulting can just explain the method.

EU5 mods are **pure PDXScript text** — no compilation, no runtime SDK, **no runtime to install**.
The game is **Windows-only**.

## What's in the state file (this repo's convention)

`.gamer-agent.local.json` (**under this workspace directory**) is the single source of truth for path
state, read/written by the tools in `.pi/extensions/`. Fields:

| Key | Meaning | Source | Used by |
|---|---|---|---|
| `gameDir` | game install directory (`steamapps/common/Europa Universalis V`) | player-given, or discovered by `try_set_game_dir` | `sync_game_scripts` mirrors vanilla scripts from it; `install_mod` derives the install target |
| `workshopDir` | Steam Workshop content directory (`steamapps/workshop/content/3450310`) | **derived from `gameDir`** (no separate setter) | **read-only reference**: read existing workshop mods; **not involved in installing** |
| `modInstallDir` | Paradox launcher mod directory (`<userDocuments>/Paradox Interactive/Europa Universalis V/mod`) | **computed from `mod-repo.json`'s `modInstall.path`** (independent of `gameDir`) | `install_mod` copies the mod here |

**The two derived paths do not need separate setters**: get `gameDir` right (`try_set_game_dir` or
`set_game_dir`), and `workshopDir` + `modInstallDir` are computed and recorded along with it.

**Required vs optional**: `gameDir` and `modInstallDir` are required — a wrong one of either = `FAIL`.
`workshopDir` is only a read-only reference and **never produces FAIL** (at most `WARN`).
This repo sets `workshop.supported = true` in `mod-repo.json`.

## Completion standard

**All three paths must be accounted for before you are done**: `gameDir` and `modInstallDir` must be
usable; `workshopDir` is either usable or you say explicitly "no Workshop directory found" (it is
read-only and does not affect installing). `workshopDir` is derived from `gameDir` and `modInstallDir`
is computed from the Paradox directory — getting `gameDir` right records them together. **Do not stop
after setting just `gameDir`.**

## Tool split (do not mix them up; one shared implementation in `.pi/lib/game-paths.ts`)

| Tool | What it does | Side effects |
|---|---|---|
| `try_set_game_dir` | **Ensure the game directory is ready** (no args, idempotent): if ready, just reports; if missing/stale, locates the game and records the game directory plus the derived mod install and Workshop directories | writes path state (only when it actually recorded) |
| `set_game_dir` | **Record a concrete game install directory** (player-given, or one you found): validates first, then records | writes path state |
| `check_game_paths` | **Verify only** (read-only): check given or remembered paths — does not record | none |
| `check_runtime` | **Report runtime prerequisites only**: EU5 has none, so it always passes; it does **not** locate the game or touch paths | none |
| `sync_game_scripts` | **Mirror the vanilla scripts into `game-scripts/`** (the context you need before writing mods) | writes `game-scripts/` |

## How to use

- **You need the game location and the environment is unknown/changed**: paths → `try_set_game_dir`
  (no args, ensures ready); runtime → `check_runtime` (EU5: none). Do not re-check every turn once a
  valid result exists.
- **Cannot find the game directory**: `try_set_game_dir` looks for it — it reads the Windows registry
  and each Steam library's `libraryfolders.vdf` → `steamapps/common/Europa Universalis V` (validated
  by `binaries/eu5.exe`). **If it fails, keep going yourself — do not stop at the failure**:
  ① turn the player's vague hints ("it's on D:", "in Steam", "the one I downloaded") into candidate
  directories and verify each read-only with `check_game_paths`; record the winner with `set_game_dir`;
  ② only if none of that works, ask the player — first say what you already tried (which libraries you
  searched, which candidates you verified), and give a copyable entry point (Steam → Library →
  right-click the game → Manage → Browse local files, or have them paste the path).
  **Do not**: guess paths, create directories yourself.
- **Player gave a path**: use `set_game_dir` (validate first, then record).
- **Before writing any mod you must** `sync_game_scripts` to mirror the vanilla scripts into
  `game-scripts/` (PDXScript has no self-describing API; without this context you cannot write
  correct PDXScript — this is **required**, not "look it up when needed"). For exact
  effect/trigger/modifier names and scopes use `docs/script_docs/` + `docs/data_types/` (semantic
  dumps) — do not confuse those with `game-scripts/`.
- **Failures**: follow the NEXT line the tool gives; when the same failure repeats, resolve the
  precondition instead of retrying indefinitely.

## Related skills

- Authoring/modifying the mod itself (structure, metadata, localization, INJECT/REPLACE) → `mod-creator`.
- Getting the artifact into the game → `mod-installer`.
