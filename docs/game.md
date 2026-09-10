# Europa Universalis V game mechanics

EU5 (Paradox, Clausewitz/Jomini engine) is a grand-strategy game. A mod is **pure PDXScript data /
script files** (`.txt` / `.gui` / `.gfx` / `.asset` / `.yml`) — **no compilation, no runtime SDK**;
the game is **Windows-only**.

## How mods are loaded

- A mod is a directory placed under the Paradox user-documents directory
  `%USERPROFILE%\Documents\Paradox Interactive\Europa Universalis V\mod\<name>\`, loaded by the
  Paradox launcher.
- Directory structure: `.metadata/metadata.json` (required) + `in_game/` (in-game content) +
  `main_menu/` (main-menu) + optional `loading_screen/` (full shape in
  [`../.pi/skills/mod-authoring/SKILL.md`](../.pi/skills/mod-authoring/SKILL.md)).
- At load time, mod files are layered on top of the base game: same-name files overwrite, same-name
  top-level objects override per the folder's keyword rules (`INJECT:`/`REPLACE:` family), and load
  order is ASCII by filename + subfolders after parents.

## Knowledge layer map

| Want to know… | Go to |
|---|---|
| The "why" behind override/load/localization/metadata mechanics | [`eu5-modding-conventions.md`](eu5-modding-conventions.md) |
| Concepts / how-to (mod API mechanics) | [`mod-wiki/`](mod-wiki/) (curated wiki snapshot, 118 pages) |
| Exact effect/trigger/modifier names and scopes | [`script_docs/`](script_docs/) (game-generated, authoritative) |
| GUI/script datatype promotes and function signatures | [`data_types/`](data_types/) (game-generated, authoritative; no wiki equivalent) |
| The hands-on authoring playbook | [`../.pi/skills/mod-authoring/SKILL.md`](../.pi/skills/mod-authoring/SKILL.md) |

## Key reminders

- **Windows-only**: no macOS/Linux build; `check_runtime` returns an explicit Windows-only result on
  other platforms rather than pretending to succeed.
- **Localization YAML must be UTF-8 with BOM**, otherwise the game silently ignores the file (fatal).
- **The semantic dumps are authoritative**: `script_docs/` and `data_types/` are exported by the
  running game and match the installed version; the official wiki (eu5.paradoxwikis.com) is the same
  data with prose and can lag a patch behind.
