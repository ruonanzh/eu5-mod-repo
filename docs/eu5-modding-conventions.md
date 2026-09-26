# EU5 modding conventions (cheat-sheet)

A committed, retrieval-oriented reference for authoring EU5 mods. It explains the *why* behind the
rules `validate_mod` enforces, plus load-order and override semantics that the linter cannot check
on its own. This is the **knowledge layer**: read it for guidance; it does not run or enforce
anything.

- Enforcement lives in `.pi/extensions/mod-lint.ts` (the `validate_mod` tool).
- This document is the **single source of truth** for authoring language rules — `AGENTS.md` and
  `.pi/skills/mod-creator/SKILL.md` reference it rather than repeating the rules.
- Boundaries and the mandatory validate step live in [`AGENTS.md`](../AGENTS.md); the hands-on
  playbook (product shapes, validate_mod usage) is in
  [`../.pi/skills/mod-creator/SKILL.md`](../.pi/skills/mod-creator/SKILL.md).
- Exact semantic names (effects/triggers/modifiers/scope-links/datatypes) are authoritative in the
  game-generated dumps: [`script_docs/`](script_docs/) and [`data_types/`](data_types/).

> Sources: the mechanics below are grounded in the EU5 wiki. Online pages:
> [Mod files load order](https://eu5.paradoxwikis.com/Mod_files_load_order),
> [Mod structure](https://eu5.paradoxwikis.com/Mod_structure),
> [Localization](https://eu5.paradoxwikis.com/Localization). Some wiki pages are flagged
> "requires verification"; where precedence is version-sensitive it is noted below.

## 1. Overriding vanilla: file overwrite, implicit replace, INJECT:/REPLACE:

EU5 loads a mod's files on top of the base game. There are three distinct override mechanisms
(see `Mod_files_load_order` "Overview" / "Inject and replace"):

- **Direct file overwrite:** a mod file with the *same path and filename* as a base-game/DLC/other-mod
  file takes precedence; the lower-in-playlist mod wins, and the losing files are treated "as if they
  did not exist." Whole-file, so anything you omit is lost - brittle across patches.
- **Implicit replace:** in folders that do **not** use the keyword system, if two files define the
  same top-level object, the **later-loaded definition wins** (the object is redefined). This works
  only outside keyword folders.
- **`INJECT:` / `REPLACE:` keywords:** most `<top_folder>/common/` folders (and some others) require
  a keyword to modify an existing object without a full file overwrite. Implicit replace does **not**
  work in these folders. Keywords apply to **top-level blocks only** (you cannot inject into a
  sub-block):

  | Keyword | Effect |
  | --- | --- |
  | `INJECT:` | Append script to the end of an existing entry; errors if it does not exist. |
  | `REPLACE:` | Replace an existing entry; errors if it does not exist. |
  | `TRY_INJECT:` / `TRY_REPLACE:` | Same, but no error if the entry does not exist. |
  | `INJECT_OR_CREATE:` / `REPLACE_OR_CREATE:` | Same, but create the entry if it does not exist. |

  ```txt
  REPLACE:some_vanilla_key = {
      # replaces the vanilla `some_vanilla_key` entirely
  }
  INJECT:some_vanilla_key = {
      # appends to the existing vanilla `some_vanilla_key`
  }
  ```

**Rule of thumb:** prefer additive new objects; use `INJECT:`/`REPLACE:` (or the `TRY_`/`_OR_CREATE`
variants) for surgical changes in keyword folders; reserve full-file overwrite for when you must
change most of a file. `validate_mod` flags a keyword nested in a sub-block (hard ERROR); whether a
top-level object redefines a vanilla name **without** a keyword is a soft rule the agent checks with
`grep`/`read` against the local game directory (the exact list of keyword folders is not yet fully
documented on the wiki - marked "TBA").

## 2. Load order (ASCII order; subfolders after parent)

Per `Mod_files_load_order` "File loading order":

- Files load in **ASCII order** by name: `00_foo.txt` before `01_bar.txt`. Base-game vs mod does not
  matter for *ordering* (it does for *overwrite precedence*, see section 1).
- **Files in a subfolder load AFTER files in the parent folder**, regardless of ASCII order - e.g.
  `events/zz_example.txt` loads before `events/example/00_example.txt`.
- **Game objects** are applied in the order they are defined; multiple files concatenate as if one.
- Ordering-prefix idioms (they only tune ASCII position, not who "wins" semantically):
  - `00_...` - force **early** (base/framework definitions others build on).
  - `zz_...`, `98_...`, `99_...` - force **late**.
- **GUI is an exception:** `type` / `template` definitions (not `types` containers) that clash across
  mods are resolved by **mod load order (playlist position)** - the last one loaded wins, and
  **filenames have no effect** for GUI.

## 3. Localization (BOM + filename + header + override folder)

Authored under `your_mods/<name>/<top_folder>/localization/<lang>/...` (per `Localization` and
`Mod_files_load_order` "Localization"):

- **Encoding (mandatory):** UTF-8 **with BOM** (`EF BB BF`). Without a BOM the game **simply ignores
  the file** - this is fatal, not cosmetic, so the linter treats a missing BOM as an ERROR.
- **Filename (mandatory):** the filename must end with `_l_<language>` (e.g.
  `work_of_art_quality_l_simp_chinese.yml`); the leading part is free-form. The linter enforces this
  and anchors `<language>` to the folder.
- **Header:** the first content line is `l_<lang>:` and must match the language **folder**
  (`.../localization/simp_chinese/...` -> `l_simp_chinese:`).
- **Entry format:** indented `  key: "value"` (or `  key:0 "value"` with an explicit version number).
  Values are double-quoted; keep quotes balanced. Placeholders `[Scope.GetName]`, escapes `\n`, and
  nested `[Localize('other_key')]` all live inside the quoted value.
- **Overriding vanilla loc keys:** the reliable mechanism is a `replace` **subfolder** -
  `<lang>/replace/overwriting_l_<lang>.yml`; keys there overwrite identical keys elsewhere. Outside
  `replace/`, precedence between duplicate keys is version-sensitive (the `Localization` page notes
  reverse-alphabetical processing with an `a`/`0` prefix trick, while `Mod_files_load_order` states
  later-loaded keys do **not** overwrite earlier ones) - prefer the `replace/` folder and do not rely
  on filename ordering to win a key.
- **No duplicate keys** within one file - ambiguous and easy to miss; the linter flags them.

## 4. Brace / quote balance (PDXScript & GUI)

- Every `.txt` / `.gui` / `.gfx` / `.asset` under `in_game/` or `main_menu/` must have balanced
  `{ }` and balanced `"`. An extra `}` or an unterminated string breaks parsing of the file (often
  silently dropping everything after it).
- `#` starts a line comment - **outside** of a quoted string. Inside a string, `#` is literal
  (e.g. loc `#italic ... #!` markup lives inside the quotes).
- **GUI strings may span multiple physical lines.** Datamodel expressions such as
  `visible = "[Or( ... )]"` legitimately wrap across lines; the closing `"` may be several lines
  below the opening one. That is fine as long as it eventually closes.
- Files **outside** `in_game/` / `main_menu/` (e.g. `README.md`, `INTEGRATION.txt`, a UTF-16
  `thumbnail.txt`, a `tools/` folder) are **not** game script and are not brace-checked.

## 5. `metadata.json`

Per `Mod_structure` "Metadata": each mod **requires** a `metadata.json` inside a `.metadata` folder,
"otherwise the game will error." The documented standard structure is valid JSON with:
`name`, `id`, `version` (`x.x` / `x.x.x`), `supported_game_version` (e.g. `1.0.*`),
`short_description` (the summary field is `short_description`, not `description`), and `tags`
(plus optional `relationships`, `game_custom_data`). Because individual missing fields are not
documented as load-fatal, the linter treats a missing file / invalid JSON as an ERROR but a missing
standard field as a WARN.

The `.metadata` folder should also hold a `thumbnail.png` (the launcher + workshop image): smaller
than 1 MB, recommended 512x512. Reference it via a `"picture": "thumbnail.png"` entry (placed after
`tags`). The image may live only on the Paradox mod directory and need not be versioned in the repo -
so the linter only warns about a missing picture file when other images *are* versioned.

## 6. Housekeeping

- Edit only under `your_mods/<name>/`. Treat `docs/`, `.pi/`, `reference/` as read-only.
  The game directory lives on the player's machine (discovered by `check_runtime` as `gameDir`) and
  is read-only reference.
- Do not leave scratch/backup files (`temp_*`, `_tmp_*`, editor backups) under `your_mods/<name>/`.

---

## Going deeper (semantic validation the linter can't do)

The linter checks **syntax/convention only**. For scope/type/effect correctness and exact vanilla
values, follow the lookup hierarchy in [`INDEX.md`](INDEX.md):

- **Game-generated dumps:** `docs/script_docs/` + `docs/data_types/` list valid effects, triggers,
  scopes, modifiers, and data types for the current game version - the **authoritative** reference
  for semantics. Prefer them over guessing.
- **Vanilla script mirror:** `game-scripts/` (generated by `sync_game_scripts`) holds vanilla's
  actual script source - grep it for exact object definitions, field values, INJECT targets, and
  loc keys.
- **The official wiki:** eu5.paradoxwikis.com (concepts and worked examples; can lag a patch behind
  the dumps).
- **Paradox Language Support (PLS):** an IntelliJ plugin giving editor-time EU5 validation when a
  human is available to open the project.
