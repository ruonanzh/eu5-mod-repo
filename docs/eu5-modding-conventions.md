# EU5 modding conventions (cheat-sheet)

A committed, retrieval-oriented reference for writing EU5 mods. It explains the reason behind the
rules that `validate_mod` enforces. It also explains the load-order and override semantics that the
tool cannot check on its own. This is the **knowledge layer**: read it for guidance. It runs and
enforces nothing.

- Enforcement lives in `.pi/extensions/mod-lint.ts` (the `validate_mod` tool).
- This document is the **authoritative version** of the modding rules. `AGENTS.md` and
  `.pi/skills/mod-creator/SKILL.md` carry short summaries at the point where the agent needs them.
  When a summary and this page disagree, this page wins.
- The boundaries and the mandatory `validate_mod` step live in [`AGENTS.md`](../AGENTS.md). The
  step-by-step procedure, with the product shapes and the `validate_mod` usage, is in
  [`../.pi/skills/mod-creator/SKILL.md`](../.pi/skills/mod-creator/SKILL.md).
- The exact semantic names (effects, triggers, modifiers, scope links, data types) are authoritative
  in the game-generated dumps: [`script_docs/`](script_docs/) and [`data_types/`](data_types/).
- A mod is PDXScript text only. The game engine is C++, and it is out of scope. A mod cannot add
  behavior that the engine does not expose.

> Sources: the EU5 wiki grounds the mechanics below. The local snapshot is the copy to read:
> `docs/mod-wiki/Modding/Mod_compatibility.md` (file loading order, overwrites, `INJECT:` and
> `REPLACE:` behavior, processing order, and the GUI and localization exceptions) and
> `docs/mod-wiki/Modding/Mod_structure.md`. Online pages:
> [Mod compatibility](https://eu5.paradoxwikis.com/Mod_compatibility),
> [Mod structure](https://eu5.paradoxwikis.com/Mod_structure),
> [Localization](https://eu5.paradoxwikis.com/Localization). The wiki asks for verification of
> `Mod_compatibility`. Where the precedence is version-sensitive, this page notes it.

## 1. Overriding vanilla: file overwrite, implicit replace, and the INJECT:/REPLACE: keywords

EU5 loads the mod files on top of the vanilla files. Three override mechanisms exist. See
`Mod_compatibility`, sections "Overview" and "Inject and replace".

- **Direct file overwrite:** a mod file with the *same path and filename* as a base-game/DLC/other-mod
  file takes precedence. The lower-in-playlist mod wins, and the losing files are treated "as if they
  did not exist." Whole-file, so anything you omit is lost - brittle across patches.
- **Implicit replace:** in directories that do **not** use the keyword system, if two files define the
  same top-level object, the **later-loaded definition wins** (the object is redefined). This works
  only outside keyword directories.
- **`INJECT:` / `REPLACE:` keywords:** most `<top_folder>/common/` directories (and some others) require
  a keyword to modify an existing object without a full file overwrite. Implicit replace does **not**
  work in these directories. **Write the keyword at the file's top level.** `Mod_compatibility` states
  this as a rule, in these words: "The `INJECT:` and `REPLACE:` keywords can only be used on
  top-level blocks in a file." In most `common/` directories that entry is a top-level object. The one
  exception is a *container* directory, where the entry is **one level in**, for example
  `genes/accessory_genes = { <entry> = { … } }`, where vanilla itself writes
  `INJECT_OR_CREATE:<entry> = { … }` (see `dlc/D008_fate_of_the_phoenix/in_game/common/genes/D008_genes_accessories.txt`).
  **That exception is untested here.** The wiki states the top-level rule without a container case, and
  the evidence for the exception is the shape vanilla itself uses. Treat the top-level form as the safe
  default, and use the one-level form only inside a container such as `genes/`.
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

**Two limits on `INJECT:`.** See `Mod_compatibility`, section "Behavior".

- A block that the target already defines cannot be injected. Injecting `is_visible` into a law that
  already has an `is_visible` block fails. The same `INJECT:` works when the block is absent.
- `INJECT:` does not work on a scripted effect or a scripted trigger. It overwrites the whole
  definition, as `REPLACE:` does. `validate_mod` reports this as `semantic:c1-inject-scripted`. Use
  `REPLACE:`, or add a new object.

**Rule of thumb:** prefer additive new objects. Use `INJECT:`/`REPLACE:` (or the `TRY_`/`_OR_CREATE`
variants) for surgical changes in keyword directories. Reserve full-file overwrite for when you must
change most of a file. `validate_mod` flags a keyword nested below the entry level as a **WARN** (not a
hard error — container directories legitimately nest entries one level in, and vanilla does so). Whether a
top-level object redefines a vanilla name **without** a keyword is a soft rule the agent checks with
`grep`/`read` against the local game directory (the exact list of keyword directories is not yet fully
documented on the wiki - marked "TBA").

## 2. Load order (ASCII order, a subdirectory after its parent, and operation order)

Per `Mod_compatibility`, section "File loading order":

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

### Operation order beats filename order

For database entry keywords, the game processes every declaration by **operation type first, then by
filename**. The operation therefore outranks the file's ASCII position. The order is:

`INJECT_OR_CREATE` → `REPLACE_OR_CREATE` → `TRY_INJECT` → `TRY_REPLACE` → `INJECT` → `REPLACE`

Three consequences, from `Mod_compatibility`, section "Processing order":

- Two files that both `REPLACE:` the same object: the later filename wins.
- One file uses `REPLACE_OR_CREATE:` and another uses `REPLACE:` on the same object: `REPLACE:` wins,
  whatever the filenames are, because it is processed later.
- `INJECT:` and `TRY_INJECT:` are processed before `REPLACE:`, so a replace overwrites an injected
  change. `REPLACE_OR_CREATE:` is processed before every inject, so a later inject still applies to
  the object it created.

## 3. Localization (BOM, filename, header, and the override directory)

Write the files under `your_mods/<name>/<top_folder>/localization/<lang>/...`. See `Localization`
and `Mod_compatibility`, section "Localization".

- **Encoding (mandatory):** UTF-8 **with BOM** (`EF BB BF`). Without a BOM the game **ignores the
  file**. This failure is fatal, not cosmetic, so the linter treats a missing BOM as an ERROR.
- **Filename (mandatory):** the filename must end with `_l_<language>`, for example
  `work_of_art_quality_l_simp_chinese.yml`. The leading part is free-form. The linter enforces the
  suffix and anchors `<language>` to the directory.
- **Header:** the first content line is `l_<lang>:`, and it must match the language **directory**
  (`.../localization/simp_chinese/...` gives `l_simp_chinese:`).
- **Entry format:** an indented `  key: "value"`, or `  key:0 "value"` with an explicit version
  number. The value starts at the first `"` and ends at the last unescaped `"` on the same line,
  so an inner `"` and a doubled `""` are both legal (vanilla writes `""L'État, c'est moi!""`). A
  value that does not start with `"`, or that is never closed by a `"` at the end of its line, is
  an error. Placeholders such as `[Scope.GetName]`, escapes such as `\n`, and nested calls such as
  `[Localize('other_key')]` all live inside the quoted value.
- **Overriding vanilla loc keys:** the reliable mechanism is a `replace` **subdirectory**,
  `<lang>/replace/overwriting_l_<lang>.yml`. Keys there overwrite identical keys elsewhere. Outside
  `replace/`, the precedence between duplicate keys is version-sensitive. The `Localization` page
  notes reverse-alphabetical processing with an `a` or `0` prefix trick. `Mod_compatibility`, section
  "Localization", states that a key that loads later does **not** overwrite an earlier one. Prefer the
  `replace/` directory, and do not rely on filename ordering to win a key.
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
with `name`, `id`, `version` (`x.x` or `x.x.x`), `supported_game_version` (for example `1.3.*`),
`short_description`, and `tags`, plus optional `relationships` and `game_custom_data`. The summary
field is `short_description`, not `description`. The linter treats a missing file or invalid JSON as
an ERROR. It reports a missing field as a WARN for these five only: `name`, `id`, `version`,
`supported_game_version`, and `tags`. A missing `short_description`, `picture`, or `relationships`
passes without a message.
Read `supported_game_version` from the `supportedGameVersion` value of `get_game_info`. Do not do
binary forensics.

The `.metadata` directory should also hold a `thumbnail.png`: the launcher and Workshop image. It
must be smaller than 1 MB, and the recommended size is 512x512. Reference it with a
`"picture": "thumbnail.png"` entry, placed after `tags`. Keep the image in the mod directory, because
`install_mod` copies only the contents of `your_mods/<name>/`, so an image that lives elsewhere alone
never reaches the installed copy. The linter warns when the `picture` value names no existing file in
the mod root or `.metadata/`.

## 6. Housekeeping

- Edit only under `your_mods/<name>/`. Treat `docs/`, `.pi/`, and `reference/` as read-only.
  The game directory lives on the player's machine. `try_set_game_dir` records it as `gameDir`, and
  it is a read-only reference.
- Do not leave scratch files or backup files under `your_mods/<name>/`. Examples: `temp_*`,
  `_tmp_*`, and editor backups.

## 7. Choosing an entry mechanism (five entry points, four families, and the other mechanisms)

EU5 hooks new content into the game through a small number of **entry points**. They are not
interchangeable: a feature that reports a one-off choice is an event, a feature that keeps running
is a situation, and a feature that puts a button on an existing screen is a scripted GUI. Most mods
need one of them at most, and many need none.

Pick the entry **before** you write script. Read the row that matches your feature, then open the
directory it names and read one of the examples in it.

| Entry point | Use it when | Defined in / read this example |
| --- | --- | --- |
| `character_interactions` | The action becomes available **after the player selects a character** (the interaction fires on that character). | `in_game/common/character_interactions/`, for example `dismiss_artist.txt` |
| `scripted_gui` | The feature needs a **custom panel** (its own buttons or widgets on the interface). | the definition in `in_game/common/scripted_guis/` and the layout under `in_game/gui/`, for example `in_game/common/scripted_guis/economy_satisfaction_target.txt` |
| `generic_actions` | The feature needs a **custom action** (an action that the player or the AI triggers. The action's `type` decides where it shows). | `in_game/common/generic_actions/`, for example `black_death.txt` |
| `events` | The feature surfaces as an **event popup** (a one-off window with a choice or a notification). | `in_game/events/`, for example `ages.txt` |
| `situations` | The feature is a **persistent state** (it stays active, is visible to a subset of countries, and runs until its end condition is met). | `in_game/common/situations/`, for example `black_death.txt` |
| Other mechanisms for existing screens and hooks | These hook into an existing screen or hook, and the five entry points above do not cover them. | Read the directory each one lives in: `in_game/gui/` (`lateralview`, `topbar`, `context_menu`), `in_game/common/on_action/` (`on_action`), `loading_screen/gui/shortcuts.shortcuts` (`shortcut`), `main_menu/gui/scripted_widgets/` (`scripted_widgets`). |

A mod can also add its own content to one of the game's own data directories, such as scripted effects,
script values, laws, or traits. The `mod-creator` skill lists the common ones.

The four families are a **target interaction** (`character_interactions`), a **panel**
(`scripted_gui`), an **action** (`generic_actions`), and **event-driven content** (`events` for the
one-off popup, `situations` for the persistent state).

**Decide this before you write any script: does this version need its own panel, or any new entry
point at all?** If it does, open the directory that the row names, read one of the examples there or the
readme the game ships for that directory, then write. If it does not, skip this whole page.

---

## Going deeper (semantics the linter does not check)

The linter checks syntax, conventions, and **name-level semantics** (do the effect, trigger, and
modifier names exist. Does an `INJECT:`/`REPLACE:` target exist. Does a new object have its
localization keys). For **scope and type** correctness, and for exact vanilla values, follow the
lookup hierarchy in [`INDEX.md`](INDEX.md).

- **Game-generated dumps:** `docs/script_docs/` and `docs/data_types/` list the valid effects,
  triggers, scopes, modifiers, and data types for the current game version. They are the
  **authoritative** reference for semantics. Prefer them over a guess.
- **Vanilla scripts:** `game-scripts/`, generated by `sync_game_scripts`, holds the vanilla `game/`
  scripts and the `workshop/` scripts. Grep it for exact object definitions, field values, INJECT
  targets, and loc keys.
- **The official wiki:** eu5.paradoxwikis.com. It has the concepts and worked examples, and can lag
  a patch behind the dumps.
- **Paradox Language Support (PLS):** an IntelliJ plugin for editor-time EU5 validation, when a
  human can open the project.
