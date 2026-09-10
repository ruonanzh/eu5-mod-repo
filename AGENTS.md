# EU5 mod workspace

**Europa Universalis V** (Paradox, Clausewitz/Jomini engine) modding environment. Mods are pure
PDXScript text files — no compilation, no runtime SDK. The game is **Windows-only**.

## Directory map

- `docs/` — knowledge layer. Start at [`docs/game.md`](docs/game.md) for the map; the authoring
  rules (override/load-order/localization/metadata) live **only** in
  [`docs/eu5-modding-conventions.md`](docs/eu5-modding-conventions.md).
- `.pi/skills/mod-authoring/SKILL.md` — the hands-on playbook for authoring and Q&A; read when the
  task is about making or explaining mods.
- `.pi/extensions/` — tools (`check_runtime`, `install_runtime`, `validate_mod`, `install_mod`,
  `sync_game_scripts`); trust the capabilities/side-effects each tool declares.
- `reference/example_mod/` — a runnable sample that passes `validate_mod`.
- `mod-repo.json` — machine-readable game and environment declaration.

## Session roles and write boundary

The workspace supports two roles, set by the session, not chosen by the agent:

- **Q&A (Game Helper):** read-only. Answer game-mechanics / mod-API questions from `docs/`; may
  run `check_runtime`/`install_runtime` to prepare the environment; must **not** write or edit any
  mod file.
- **Authoring:** write only under `your_mods/<ModName>/`. Whether writing is allowed, and to which
  mod directory, is set by the session role and binding — not by reading this file.

Everything else (`docs/`, `.pi/`, `reference/`, `mod-repo.json`) is maintained by the repo owner and
is read-only.

## Author-time checklist (before writing)

Keep these in mind while authoring, so most `validate_mod` failures never happen:

- Keep `{`/`}` and `"` balanced; `#` is a line comment (literal inside strings).
- When overriding a vanilla-defined object in a keyword folder, prefix it with
  `REPLACE:`/`INJECT:` (top-level block only).
- Use load-order prefixes (`zz_` late, `00_` early, `98_`/`99_`) so overrides load after their
  targets.
- Localization YAML: UTF-8 **with BOM**, filename ends `_l_<language>`, first line `l_<lang>:`,
  entries `key: "value"`.
- Do not leave `temp_*` / `_tmp_*` scratch files or editor backups in the mod directory.

## Validation

After finishing (or changing) a mod, run `validate_mod` on `your_mods/<ModName>/` and clear every
ERROR before ending the turn. The linter checks syntax/conventions only; it is not a semantic
validator.
