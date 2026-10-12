# EU5 mod workspace

**Europa Universalis V** (Paradox, Clausewitz/Jomini engine) modding environment.
Mods are pure PDXScript text files. There is no compilation and no runtime SDK.
The game is **Windows-only**.

## Directory map

- `docs/` — the knowledge layer. Start at [`docs/INDEX.md`](docs/INDEX.md) for the map.
  The modding conventions live **only** in
  [`docs/eu5-modding-conventions.md`](docs/eu5-modding-conventions.md). They cover override,
  load order, localization, and metadata.
- `game-scripts/` — the script mirror. `sync_game_scripts` copies the vanilla `game/` scripts and
  the `workshop/` scripts into it, and git ignores it. This is the modding context you must load
  before writing mods. PDXScript has no self-describing API, so you cannot write a correct override
  or `INJECT` without it.
- `.pi/skills/` — the step guidance: role skills `setup-workspace`, `mod-creator`, and `mod-installer`,
  plus `how-to-speak` (how to write anything the player reads) and `mod-page` (how to write a mod page
  and revise it from the player's marks). Each skill describes its own scope and trigger. Pi keeps the
  descriptions in context, so read the matching skill. This repo's step guidance lives there, not in
  the product prompt.
- `.pi/extensions/` — the tools. Path tools: `try_set_game_dir`, `set_game_dir`, and
  `check_game_paths`. Runtime tools: `check_runtime` and `install_runtime` (EU5 has no runtime).
  Mod tools: `validate_mod` and `install_mod`. Context tool: `sync_game_scripts`. Trust the
  capabilities and the side effects that each tool declares.
- `reference/` — read-only mod samples. `reference/example_mod/` is a runnable sample that passes
  `validate_mod`. `reference/README.md` maps the real-world pattern mods.
- `mod-repo.json` — the machine-readable game and environment declaration. `workshop.supported`
  declares whether this game has a Steam Workshop. `workshopDir` is a read-only reference and is
  not used for installing. The rule is in the `setup-workspace` skill.
- `your_mods/` — the mod output area. Write mods only here, as `your_mods/<ModName>/`.

## Runtime state file

`.gamer-agent.local.json` (**under this workspace directory**) is the single source of truth for
path state. The tools in `.pi/extensions/` read and write it.
**Only trust the copy in this workspace.** The machine may have same-named files elsewhere, from
other clones or leftover state. Using those leads to wrong conclusions.
**"Ready" means the recorded values plus the tool result.** Seeing a directory with `ls` does not
mean that `.gamer-agent.local.json` records it. The workspace panel, `validate_mod`, `install_mod`, and
`sync_game_scripts` all read the recorded state.
Field meanings are in `.pi/skills/setup-workspace/SKILL.md`.

## Session roles and write boundary

The session sets one of two roles. The agent does not choose the role.

- **Q&A (Game Helper):** read-only. Answer game-mechanics and mod API questions from `docs/`.
  May run the read-only tools `check_game_paths`, `check_runtime`, `install_runtime`, and
  `validate_mod`. Must **not** write or edit any mod file, locate or record paths, or mirror the
  scripts into `game-scripts/`.
- **Mod development:** write only under `your_mods/<ModName>/`. The session role and binding decide
  whether writing is allowed and which mod directory is writable. This file does not decide that.

The repository owner maintains everything else (`docs/`, `.pi/`, `reference/`, `mod-repo.json`).
Do not write there.

## Checklist before you write a mod

Keep these in mind while you write a mod. They prevent most `validate_mod` failures.

- Keep `{` and `}` balanced. Keep `"` balanced. A `#` starts a line comment, and `#` is literal
  inside a string.
- To override a vanilla-defined object in a keyword directory, prefix it with `REPLACE:` or
  `INJECT:`. The keyword must be in a top-level block.
- Use load-order prefixes so an override loads after its target: `00_` early, and `zz_`, `98_`, or
  `99_` late.
- Localization YAML must be UTF-8 **with BOM**. The filename must end with `_l_<language>`. The
  first line must be `l_<lang>:`. Each entry is `key: "value"`.
- Do not leave `temp_*` or `_tmp_*` scratch files, or editor backups, in the mod directory.

## Validation

After you finish or change a mod, run `validate_mod` on `your_mods/<ModName>/`.
Clear every ERROR before you end the turn.
The tool checks syntax and conventions only. It is not a semantic validator.

## mod-guard（mod 会话工具，本 worktree 新增）

`.pi/extensions/mod-guard.ts` 复制自 `pi-desktop/extensions/mod-guard.ts`（产品侧模拟「玩家 mod 会话」的那份）。

- `create_mod_folder`：建 `your_mods/<name>/` 并绑定到本 session（唯一的写豁免通道）。
- **写隔离（fail-closed）**：本 workspace 里**未绑定** mod 目录的 session，`write`/`edit` 一律被拒；绑定后只能写该 mod 目录。
- `before_agent_start`：为本 workspace 的 session 追加 `## Mod development session` 提示。

> 以 `pi-desktop/extensions/mod-guard.ts` 为准；改动请同步回产品。
