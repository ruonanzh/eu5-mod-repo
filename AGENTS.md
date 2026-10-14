# EU5 mod workspace

**Europa Universalis V** (Paradox, Clausewitz/Jomini engine) modding environment.
Mods are pure PDXScript text files. There is no compilation and no runtime SDK.
The game is **Windows-only**.

## Environment facts

These are fixed facts about this machine and this workspace. They prevent wasted turns.

- **Prefer `node` for scripts.** The product ships its own node, so every player machine has it.
  On this machine `python` is a Microsoft Store stub: it exits with `exit 49`
  and is a silent no-op. If python is truly needed, run `command -v py` first. If `py`
  is missing, fall back to `node` / `awk`.
- **When you develop, read scripts only from the mirror `game-scripts/`** (this does not affect mod
  runtime). The vanilla scripts live in the mirror at `game-scripts/game/game/...` — **two** `game/`
  levels. The real install directory `.../Europa Universalis V/game/...` — **one** `game/` level —
  is the vanilla source that `sync_game_scripts` reads to build the mirror. Do not `cat` / `grep`
  there while developing. Installing a mod is a third place: `install_mod` writes to the Paradox
  launcher mod directory, `<user documents>/Paradox Interactive/Europa Universalis V/mod/`.
- **`supported_game_version`: write a patch-level wildcard** (e.g. `1.3.*`). An exact
  version such as `1.0.4` goes stale. This game updates its minor version often, and the game flags
  an exact version as outdated. Do not take the easy way out with a loose `1.*` — the linter WARNs on it.
  Read `supported_game_version` from the `supportedGameVersion` value of `get_game_info`. Do not do
  binary forensics.

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
The tool checks syntax, conventions, and **name-level semantics**: that effect, trigger, and modifier
names exist, that `INJECT:`/`REPLACE:` targets exist, and that a new object has its localization
keys. It is not a scope or type validator.

## mod-guard (mod session tools, added in this worktree)

`.pi/extensions/mod-guard.ts` is a copy of `pi-desktop/extensions/mod-guard.ts`. The product copy simulates the player mod session.

- `create_mod_folder`: creates `your_mods/<name>/` and binds it to this session. This tool is the only sanctioned write path.
- **Write isolation (fail-closed):** the mod-guard extension refuses every `write` and `edit` call from a session that has no bound mod directory in this workspace. After the session binds a directory, it can write only inside that mod directory.
- `before_agent_start`: appends the `## Mod development session` prompt to a session in this workspace.

> `pi-desktop/extensions/mod-guard.ts` is authoritative. Sync your change back to the product.

