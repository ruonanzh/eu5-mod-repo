---
name: mod-authoring
description: Authoring, modifying, and Q&A for EU5 (pdx-script) mods: metadata.json fields, localization YAML (UTF-8 BOM, _l_<language> filename, l_<lang>: header, key format), PDXScript/GUI syntax, INJECT:/REPLACE: overrides, load order, and validate_mod troubleshooting. Read when a task touches any of these. Q&A/consultation is read-only (no file writes); actual writes depend on session role and binding.
---

# Authoring EU5 mods (pdx-script)

An EU5 mod is a directory of **pure PDXScript text files** (`.txt` / `.gui` / `.gfx` / `.asset` /
`.yml`) — no compilation, no runtime SDK. Author under `your_mods/<ModName>/`, then check with the
`validate_mod` tool. The game is **Windows-only**.

All paths below are relative to the workspace root (not the skill directory).

## Usage modes (two roles)

The same repo serves two roles; which one applies is set by the session role, not chosen here:

This skill provides domain method only and **grants no permissions**: reading it does not authorise
creating directories, checking/installing runtimes, or modifying source files (those stay gated by the
session role and its bound directory).

- **Q&A / consultation (read-only):** answer game-mechanics or mod-API questions by reading the
  knowledge layer. Start from [`docs/INDEX.md`](docs/INDEX.md) to locate the right source
  (mod-wiki for concepts, `script_docs/`/`data_types/` for exact names, `eu5-modding-conventions.md`
  for authoring rules). Do **not** create files or check the runtime unless the player explicitly
  asks about their environment.
- **Authoring / modifying (writes):** produce or change a mod under `your_mods/<ModName>/`. Reuse
  the structure of `reference/example_mod/`. Writes are limited to the mod directory bound to the
  current session; with no binding, call `create_mod_folder` with a `lower_snake_case` name. Do not
  create a second binding if one already exists.
- **Directory name (our rule, enforced by `create_mod_folder`)**: starts with a lowercase letter, then only lowercase letters/digits/underscores, max 40 characters, and not a Windows reserved device name (con/prn/aux/nul/com1-9/lpt1-9).
- **Installing (after validate_mod passes):** `install_mod` copies the mod into the Paradox mod
  directory (target comes from `check_runtime`'s discovery, it does not probe itself).
  - The installed folder name is the **`your_mods/` directory name** (which must equal
    `metadata.id`), so the name stays a single safe path segment and the folder the player sees in the
    launcher matches the one in the workspace.
  - Re-running for the same mod updates it in place (recognised by the `.pi-mod.json` marker inside
    the installed folder). If the target directory belongs to a **different** mod it installs as
    `<directory>_pimod` instead, leaving that directory untouched and adding only the marker — the
    copy's `metadata.json` is **not** modified. When that happens, tell the player which directory it
    installs as (the in-game title `name` and `id` are unchanged).
  - Replacement is transactional: the previously installed copy is moved aside (not deleted) and only
    removed after the new one is in place; if the swap fails the old copy stays.

## Mod artifact structure

```
<ModName>/
├── .metadata/
│   ├── metadata.json        # required; the game errors without it
│   └── thumbnail.png        # launcher/workshop image (optional; may live only locally)
├── in_game/                 # in-game content (common/ events/ gui/ localization/ …)
├── main_menu/               # main-menu content (localization/ gui/ …)
└── loading_screen/          # (optional)
```

## metadata.json

`.metadata/metadata.json` — valid JSON object. Standard fields:

| Field | Rule |
|---|---|
| `name` | non-empty string (human-readable mod title) |
| `id` | non-empty string. 游戏只要求它**能识别这个 mod**（EU5 wiki）。**本仓库建议**（不是游戏要求）：用小写蛇形、并让它与 `your_mods/<目录名>` 一致 —— 安装用的目录名就是它，一致了玩家更好对号入座；`validate_mod` 现在**不会**因为不一致而报错 |
| `version` | `x.x` or `x.x.x` (two- or three-part semver) |
| `supported_game_version` | `1.*` form |
| `short_description` | one-line summary — the field is **`short_description`**, not `description` |
| `tags` | array of strings |
| `picture` | `"thumbnail.png"`, placed **after `tags`** |
| `relationships` | `[]` (optional) |
| `game_custom_data` | `{}` (optional) |

```json
{
  "name": "Elite Education Cost Tweak",
  "id": "elite_education_cost_tweak",
  "version": "1.0",
  "supported_game_version": "1.*",
  "short_description": "Adjusts expensive child education costs.",
  "tags": ["Gameplay", "Balance"],
  "picture": "thumbnail.png",
  "relationships": [],
  "game_custom_data": {}
}
```

## Localization YAML

`**/localization/**/*.yml` (under `in_game/` and `main_menu/`):

- **Encoding must be UTF-8 with BOM** (`EF BB BF`). Without a BOM the game silently ignores the
  file — fatal, not cosmetic.
- Filename must end with `_l_<language>`, matching the language folder.
- First content line is `l_<lang>:` and must match the folder.
- Entry format: `  key: "value"` or `  key:0 "value"` (explicit version). Values double-quoted,
  quotes balanced, `[`/`]` placeholders balanced.
- No duplicate keys within one file.
- To override vanilla loc keys, use a `replace/` subfolder:
  `<lang>/replace/overwriting_l_<lang>.yml` — keys there overwrite identical keys elsewhere.

## PDXScript / GUI

`.txt` / `.gui` / `.gfx` / `.asset` under `in_game/` and `main_menu/`:

- UTF-8 encoding; `{`/`}` balanced; `"` balanced (`#` is a line comment outside strings, literal
  inside; GUI strings may span multiple lines).
- `INJECT:`/`REPLACE:` family keywords only in **top-level blocks**, formatted `KEYWORD:key = {`.

## Overriding vanilla

Three mechanisms (the *why* and edge cases are in
[`docs/eu5-modding-conventions.md`](docs/eu5-modding-conventions.md)):

1. **Direct file overwrite** — same path+filename replaces the vanilla file entirely (brittle).
2. **Implicit replace** — in non-keyword folders, a later top-level object with the same name wins.
3. **`INJECT:`/`REPLACE:` keywords** — required in keyword folders (most `common/` subfolders) to
   modify an existing object; implicit replace does not work there.

| Keyword | Effect |
|---|---|
| `INJECT:` / `REPLACE:` | append / replace; errors if the object does not exist |
| `TRY_INJECT:` / `TRY_REPLACE:` | same, no error if absent |
| `INJECT_OR_CREATE:` / `REPLACE_OR_CREATE:` | same, create if absent |

```txt
REPLACE:expensive_in_depth_education = {
    # replaces the vanilla block instead of duplicating the key
}
```

**Rule of thumb:** prefer additive new objects; use `INJECT:`/`REPLACE:` for surgical changes in
keyword folders; reserve full-file overwrite for when you must change most of a file.

## Load order & naming

- Files load in **ASCII order**: `00_foo.txt` before `01_bar.txt`; files in a subfolder load after
  files in the parent folder.
- Prefix idioms: `00_` forces early (foundation); `zz_`/`98_`/`99_` forces late (so overrides win).
- **GUI exception:** `type`/`template` clashes across mods resolve by **mod load order** (playlist
  position), not filename.
- Mod dir name: `lower_snake_case`. Do not leave scratch files (`temp_*`, `_tmp_*`, editor backups)
  in the mod directory.

## validate_mod tool

Call `validate_mod` with `modDir = your_mods/<ModName>/`.

- `PASS: <name> is valid` — the static syntax/convention check passed; this does not mean it ran in
  the game.
- `FAIL: <reason>` (one per line, English) — points at the offending file/field; use the `NEXT:`
  line to locate it. Fix each ERROR; do not modify other mods.
- The tool is a **syntax/convention linter**, not a semantic validator — it cannot catch a
  misspelled effect/trigger/modifier or a wrong scope. Always say what was generated vs what was
  actually checked.

## Common errors (validate_mod FAIL → fix)

- `FAIL: .metadata/metadata.json not found` → create it with the standard fields above.
- `FAIL: metadata.json is not valid JSON` / `not an object` → fix the JSON.
- `FAIL: metadata.version is not semver` → use `x.x` or `x.x.x`.
- `FAIL: localization file is not UTF-8 with BOM` → save as UTF-8 **with BOM** (`EF BB BF`).
- `FAIL: filename must end with _l_<language>` → rename to `…_l_<language>.yml`.
- `FAIL: missing/incorrect l_<lang>: header` → first content line must be `l_<lang>:`.
- `FAIL: key line not in 'key: "value"' form` → `  key: "value"` (double quotes, balanced).
- `FAIL: unbalanced { } / unbalanced "` → fix the brace/quote balance.
- `FAIL: INJECT:/REPLACE: must be in a top-level block` → move the keyword to the top level.

## Semantic lookup path

For "does X exist / what is vanilla's exact value?", follow the lookup hierarchy in
[`docs/INDEX.md`](docs/INDEX.md) — the single authoritative map of which source to use:

- exact effect/trigger/modifier names + scopes → `docs/script_docs/` + `docs/data_types/` (game dumps)
- exact vanilla object definitions / field values / INJECT targets / loc keys → `game-scripts/`
  (generated by `sync_game_scripts`) or the local gameDir
- mechanics concepts → `docs/mod-wiki/`; authoring rules & why → `docs/eu5-modding-conventions.md`

## Reference

- Runnable sample: `reference/example_mod/`.
- Knowledge-layer navigation (what to load when): `docs/INDEX.md`.
- Game overview (mechanics): `docs/game.md`.
- Authoring rules (single source of truth): `docs/eu5-modding-conventions.md`.

## 路径工具（gameDir / workshopDir / modInstallDir）

三个工具分工不同，**别混用**（判据是同一份实现，见 `.pi/lib/game-paths.ts`）：

| 工具 | 什么时候用 | 副作用 |
|---|---|---|
| `check_game_paths` | **只验**：玩家给了一个路径，或想确认已记住的路径还对不对 | **无**（只读、不扫描、不写状态）|
| `try_set_game_paths` | 位置**未知或已变**：扫 Steam（注册表 + `libraryfolders.vdf` 各库）并记录 | 写运行时状态 |
| `check_runtime` | 一次跑全流程：发现 + 校验 + 记录 | 写运行时状态 |
| `install_mod` | 安装（复用同一判据；目标目录不存在时会**创建**，这是全新机器的正常状态）| 写安装目标 |

要点：

- **EU5 是 Windows-only**：非 Windows 上 `try_set_game_paths` 返回 `PARTIAL`，不假装能找到。
- **mod 安装目录与游戏安装位置无关**：它在 Paradox 启动器目录（`~/Documents/Paradox Interactive/Europa Universalis V/mod`），
  所以判据是**形状校验**（绝对路径、不是文件、以 `mod-repo.json` 声明的相对路径结尾），
  而不是"向上找游戏目录"。
- **发现 ≠ 信任**：候选目录必须含 `game/` 或 `.metadata/`。
- **验 ≠ 改**：`check_game_paths` 从不写状态；要"记录"用 `try_set_game_paths`。
- FAIL 先读 `NEXT:` 行 —— 多是要玩家提供游戏目录（Steam → 库 → 右键游戏 → 管理 → 浏览本地文件）。
