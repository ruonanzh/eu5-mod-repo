# EU5 modding conventions (cheat-sheet)

A committed, retrieval-oriented reference for writing EU5 mods. It explains the reason behind the
rules that `validate_mod` enforces. It also explains the load-order and override semantics that the
tool cannot check on its own. This is the **knowledge layer**: read it for guidance. It runs and
enforces nothing.

- Enforcement lives in `.pi/extensions/mod-lint.ts` (the `validate_mod` tool).
- This document is the **single source of truth** for the modding rules. `AGENTS.md` and
  `.pi/skills/mod-creator/SKILL.md` reference it instead of repeating the rules.
- The boundaries and the mandatory `validate_mod` step live in [`AGENTS.md`](../AGENTS.md). The
  step-by-step procedure, with the product shapes and the `validate_mod` usage, is in
  [`../.pi/skills/mod-creator/SKILL.md`](../.pi/skills/mod-creator/SKILL.md).
- The exact semantic names (effects, triggers, modifiers, scope links, data types) are authoritative
  in the game-generated dumps: [`script_docs/`](script_docs/) and [`data_types/`](data_types/).
- A mod is PDXScript text only. The game engine is C++, and it is out of scope. A mod cannot add
  behavior that the engine does not expose.

> Sources: the EU5 wiki grounds the mechanics below. Online pages:
> [Mod files load order](https://eu5.paradoxwikis.com/Mod_files_load_order),
> [Mod structure](https://eu5.paradoxwikis.com/Mod_structure),
> [Localization](https://eu5.paradoxwikis.com/Localization). The wiki flags some pages as
> "requires verification". Where the precedence is version-sensitive, this page notes it.

## 1. Overriding vanilla: file overwrite, implicit replace, and INJECT:/REPLACE:

EU5 loads the mod files on top of the vanilla files. Three override mechanisms exist. See
`Mod_files_load_order`, sections "Overview" and "Inject and replace".

- **Direct file overwrite:** a mod file with the *same path and filename* as a base-game/DLC/other-mod
  file takes precedence; the lower-in-playlist mod wins, and the losing files are treated "as if they
  did not exist." Whole-file, so anything you omit is lost - brittle across patches.
- **Implicit replace:** in folders that do **not** use the keyword system, if two files define the
  same top-level object, the **later-loaded definition wins** (the object is redefined). This works
  only outside keyword folders.
- **`INJECT:` / `REPLACE:` keywords:** most `<top_folder>/common/` folders (and some others) require
  a keyword to modify an existing object without a full file overwrite. Implicit replace does **not**
  work in these folders. Keywords must sit **directly before a database entry** — that is the file's
  **top level** in most `common/` folders, but in *container* folders the entry is **one level in**, e.g.
  `genes/accessory_genes = { <entry> = { … } }`, where vanilla itself writes
  `INJECT_OR_CREATE:<entry> = { … }` (see `dlc/D008_fate_of_the_phoenix/in_game/common/genes/D008_genes_accessories.txt`).
  Injecting into a sub-block **below the entry level** is still invalid:

  | Keyword | Effect |
  | --- | --- |
  | `INJECT:` | Append script to the end of an existing entry. The game errors if the entry does not exist. |
  | `REPLACE:` | Replace an existing entry. The game errors if the entry does not exist. |
  | `TRY_INJECT:` or `TRY_REPLACE:` | The same, but the game does not error if the entry does not exist. |
  | `INJECT_OR_CREATE:` or `REPLACE_OR_CREATE:` | The same, but the game creates the entry if it does not exist. |

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
change most of a file. `validate_mod` flags a keyword nested below the entry level as a **WARN** (not a
hard error — container folders legitimately nest entries one level in, and vanilla does so); whether a
top-level object redefines a vanilla name **without** a keyword is a soft rule the agent checks with
`grep`/`read` against the local game directory (the exact list of keyword folders is not yet fully
documented on the wiki - marked "TBA").

## 2. Load order (ASCII order, and a subdirectory after its parent)

Per `Mod_files_load_order`, section "File loading order":

- Files load in **ASCII order** by name: `00_foo.txt` before `01_bar.txt`. Vanilla compared with mod
  does not matter for ordering. It does matter for overwrite precedence, which section 1 covers.
- **A file in a subdirectory loads after the files in the parent directory**, regardless of ASCII
  order. Example: `events/zz_example.txt` loads before `events/example/00_example.txt`.
- **Game objects** apply in the order the files define them. Multiple files concatenate as if they
  were one file.
- Ordering-prefix idioms. They tune the ASCII position only, and do not change which definition wins
  semantically.
  - `00_...` forces an **early** load, for base and framework definitions that others build on.
  - `zz_...`, `98_...`, and `99_...` force a **late** load.
- **GUI is an exception.** **Mod load order**, which is the playlist position, resolves a `type` or
  `template` definition that clashes across mods. It does not resolve a `types` container. The
  definition that loads last wins. **Filenames have no effect** for GUI.

## 3. Localization (BOM, filename, header, and the override directory)

Write the files under `your_mods/<name>/<top_folder>/localization/<lang>/...`. See `Localization`
and `Mod_files_load_order`, section "Localization".

- **Encoding (mandatory):** UTF-8 **with BOM** (`EF BB BF`). Without a BOM the game **ignores the
  file**. This failure is fatal, not cosmetic, so the linter treats a missing BOM as an ERROR.
- **Filename (mandatory):** the filename must end with `_l_<language>`, for example
  `work_of_art_quality_l_simp_chinese.yml`. The leading part is free-form. The linter enforces the
  suffix and anchors `<language>` to the directory.
- **Header:** the first content line is `l_<lang>:`, and it must match the language **directory**
  (`.../localization/simp_chinese/...` gives `l_simp_chinese:`).
- **Entry format:** an indented `  key: "value"`, or `  key:0 "value"` with an explicit version
  number. The value is double-quoted, so keep the quotes balanced. Placeholders such as
  `[Scope.GetName]`, escapes such as `\n`, and nested calls such as `[Localize('other_key')]` all
  live inside the quoted value.
- **Overriding vanilla loc keys:** the reliable mechanism is a `replace` **subdirectory**,
  `<lang>/replace/overwriting_l_<lang>.yml`. Keys there overwrite identical keys elsewhere. Outside
  `replace/`, the precedence between duplicate keys is version-sensitive. The `Localization` page
  notes reverse-alphabetical processing with an `a` or `0` prefix trick. `Mod_files_load_order`
  states that a key that loads later does **not** overwrite an earlier one. Prefer the `replace/`
  directory, and do not rely on filename ordering to win a key.
- **No duplicate keys** within one file. They are ambiguous and easy to miss, and the linter flags
  them.

## 4. Brace and quote balance (PDXScript and GUI)

- Every `.txt`, `.gui`, `.gfx`, or `.asset` file under `in_game/` or `main_menu/` must have balanced
  `{ }` and balanced `"`. An extra `}` or an unterminated string breaks the parse of the file. The
  game often drops everything after it, without a message.
- A `#` starts a line comment **outside** a quoted string. Inside a string, `#` is literal. For
  example, the loc markup `#italic ... #!` lives inside the quotes.
- **A GUI string can span several physical lines.** A datamodel expression such as
  `visible = "[Or( ... )]"` legitimately wraps across lines, and the closing `"` can be several
  lines below the opening one. That is correct, as long as the string eventually closes.
- A file **outside** `in_game/` and `main_menu/` is not game script, and the linter does not check
  its braces. Examples: `README.md`, `INTEGRATION.txt`, a UTF-16 `thumbnail.txt`, and the files in a
  `tools/` directory.

## 5. `metadata.json`

Per `Mod_structure`, section "Metadata": every mod **requires** a `metadata.json` inside a
`.metadata` directory, or "the game will error". The documented standard structure is valid JSON
with `name`, `id`, `version` (`x.x` or `x.x.x`), `supported_game_version` (for example `1.0.*`),
`short_description`, and `tags`, plus optional `relationships` and `game_custom_data`. The summary
field is `short_description`, not `description`. The wiki does not document an individual missing
field as load-fatal, so the linter treats a missing file or invalid JSON as an ERROR, and a missing
standard field as a WARN.

The `.metadata` directory should also hold a `thumbnail.png`: the launcher and Workshop image. It
must be smaller than 1 MB, and the recommended size is 512x512. Reference it with a
`"picture": "thumbnail.png"` entry, placed after `tags`. The image can live only in the Paradox mod
directory, and you do not have to version it in the repository. The linter therefore warns about a
missing picture file only when other images **are** versioned.

## 6. Housekeeping

- Edit only under `your_mods/<name>/`. Treat `docs/`, `.pi/`, and `reference/` as read-only.
  The game directory lives on the player's machine. `try_set_game_dir` records it as `gameDir`, and
  it is a read-only reference.
- Do not leave scratch files or backup files under `your_mods/<name>/`. Examples: `temp_*`,
  `_tmp_*`, and editor backups.

---

## Going deeper (semantic validation that the linter cannot do)

The linter checks **syntax and conventions only**. For scope, type, and effect correctness, and for
exact vanilla values, follow the lookup hierarchy in [`INDEX.md`](INDEX.md).

- **Game-generated dumps:** `docs/script_docs/` and `docs/data_types/` list the valid effects,
  triggers, scopes, modifiers, and data types for the current game version. They are the
  **authoritative** reference for semantics. Prefer them over a guess.
- **Script mirror:** `game-scripts/`, generated by `sync_game_scripts`, holds the vanilla `game/`
  scripts and the `workshop/` scripts. Grep it for exact object definitions, field values, INJECT
  targets, and loc keys.
- **The official wiki:** eu5.paradoxwikis.com. It has the concepts and worked examples, and can lag
  a patch behind the dumps.
- **Paradox Language Support (PLS):** an IntelliJ plugin for editor-time EU5 validation, when a
  human can open the project.
