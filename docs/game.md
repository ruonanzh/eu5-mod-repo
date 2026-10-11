# Europa Universalis V game mechanics

EU5 (Paradox, Clausewitz/Jomini engine) is a grand-strategy game.
A mod is a set of pure PDXScript text files: `.txt`, `.gui`, `.gfx`, `.asset`, and `.yml`.
A mod needs no compilation and no runtime SDK.
The game is **Windows-only**.

## How the game loads mods

- A mod is a directory under the Paradox user-documents directory:
  `%USERPROFILE%\Documents\Paradox Interactive\Europa Universalis V\mod\<name>\`.
  The Paradox launcher loads it.
- The mod directory holds `.metadata/metadata.json` (required), `in_game/` (in-game content),
  `main_menu/` (main-menu content), and an optional `loading_screen/`.
- At load time, the game layers the mod files on top of the vanilla files. A file with the same
  name overwrites the vanilla file. A top-level object with the same name replaces the vanilla
  object, per the directory's keyword rules (`INJECT:` and `REPLACE:`). Files load in ASCII order
  by filename, and a subdirectory loads after its parent.

## Where to find the reference

The knowledge layer has its own map. See [`INDEX.md`](INDEX.md).
This page describes the game mechanics only.

## Key reminders

- **Windows-only.** There is no macOS or Linux build. On another platform, `try_set_game_dir`
  reports that no game files can be located.
- **Localization YAML must be UTF-8 with BOM.** Without a BOM, the game ignores the file silently,
  and that failure is fatal.
- **The semantic dumps are authoritative.** The running game exports `script_docs/` and
  `data_types/`, so they match the installed version. The official wiki (eu5.paradoxwikis.com)
  holds the same data as prose, and can lag one patch behind.
