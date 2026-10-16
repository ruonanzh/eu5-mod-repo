---
name: mod-creator
description: The guide for writing and modifying EU5 (pdx-script) mods. Always read it first, before you search the vanilla scripts, before you read the reference mods, and before your first write. Covers the order of work, the mod structure, the `metadata.json` fields, localization YAML, PDXScript and GUI syntax, `INJECT:` and `REPLACE:` overrides, load order and naming, the entry mechanisms, `validate_mod` errors, and the semantic lookup path.
---

# Writing EU5 mods (pdx-script)

An EU5 mod is a directory of **pure PDXScript text files**: `.txt`, `.gui`, `.gfx`, `.asset`, and
`.yml`. There is no compilation and no runtime SDK. Write the mod under `your_mods/<ModName>/`, then
check the result with the `validate_mod` tool.
All paths below are relative to the workspace root, not to the skill directory.

This skill provides domain method only, and it **grants no permissions**. Reading it does not allow
you to create directories, to check or install runtimes, or to modify source files. The session role
and its bound directory gate those actions.

## Usage modes (two roles)

- **Q&A and consultation (read-only).** Answer game-mechanics and mod API questions by reading the
  knowledge layer. Start from [`docs/INDEX.md`](docs/INDEX.md) to locate the right source. Do **not**
  create files or prepare the environment, unless the player explicitly asks about their
  environment. Preparing the environment means locating paths and mirroring the scripts into
  `game-scripts/`.
- **Writing or modifying the mod.** Do these steps in this order.
  1. **Research the real values first.** EU5 is pure PDXScript, with no self-describing API and no
     framework. Run `sync_game_scripts` to load the modding context into `game-scripts/`. Then grep
     that directory carefully to pin down the real vanilla values and their connections: which
     goods, buildings, and modifiers exist, and what consumes or produces what. Do not guess from
     names alone. Three hard ordering rules:
     1. For a player-worded feature request, name the question shape first. For a lookup of a name
        that you already know, grep vanilla yourself, within calls 2 to 4:
        `grep -rln <keyword> game-scripts/`. For a survey of what vanilla already has for a theme,
        dispatch `entry-scout` and read its first candidate. The `## Survey before you research`
        section below has the details.
     2. Read in this fixed order: `docs/eu5-modding-conventions.md` (the single source of truth),
        then locate 1 or 2 reference mods of the same kind, then write.
     3. Decide the screen first, then research how to mount on that one screen. Where a mechanism
        lives and where to attach something inside an existing screen are two different questions.
        Section 7 answers the first. For the second, read that screen's own `.gui` file and find the
        block to override.
  2. **Agree with the player before you write.** Give a short description of the mod content: what it
     modifies, its scope, and the shape of the mod. Then wait for the player's confirmation. Do this
     **even when the request looks specific**. Skip it only when the player explicitly says to start,
     for example "start now, no confirmation".
  3. **Then write.** Produce or modify a mod under `your_mods/<ModName>/`. Reuse
     `reference/example_mod/`. You may write only inside the bound mod directory. With no binding,
     call `create_mod_folder` with a `lower_snake_case` name, as the **Directory name** rule below
     defines it. Do not create a second binding when one already exists.
  4. **Then check the UI side.** A mod here is mostly PDXScript code, but an in-game check often
     fails without the UI part. Before you finish, ask: does this modification need an icon, a UI
     label (localization), a menu entry, a column, a filter, or a panel? Add what is missing. Reuse
     an existing in-game icon or asset when one fits, because you do not have to create new art. Do
     not wait for the player to ask about the icon.
- **Directory name** (this repository's rule, enforced by `create_mod_folder`). The name is
  `lower_snake_case`: it starts with a lowercase letter, then holds only lowercase letters, digits,
  and underscores, at most 40 characters. Do **not** use hyphens: `fix_trade_companies`, not
  `fix-trade-companies`. It must not be a Windows reserved device name: `con`, `prn`, `aux`,
  `nul`, `com1` to `com9`, and `lpt1` to `lpt9`.

## Survey before you research

A survey answers "what does vanilla already have for this theme?". A lookup answers "where is this
name defined?". The two questions need different work.

Dispatch `entry-scout` for a survey, before you grep the vanilla scripts. Give it the theme and the
planned change. It returns candidate entry points as `file:line`, with the mechanism family. Its
answer is a candidate list, not a decision: read its first candidate yourself before you write.
When the `subagent` tool is not available, run the survey yourself along the lookup path in
`docs/INDEX.md`.

Run a lookup yourself. When you know the name, `grep -rln <keyword> game-scripts/` finds it within a
few calls.

When the change has two or three independent parts, send one survey per part, one after another.
Each dispatch returns its answer before the next one starts.

Skip this step when the task only changes values inside an existing block.

## Mod structure

```
<ModName>/
├── .metadata/
│   ├── metadata.json        # required, or the game errors
│   └── thumbnail.png        # launcher and Workshop image (optional, may live only locally)
├── in_game/                 # in-game content, subdirectories mirror the game's layout
├── main_menu/               # main-menu content, subdirectories mirror the game's layout
└── loading_screen/          # optional
```

## metadata.json

`.metadata/metadata.json` holds one valid JSON object. Standard fields:

| Field | Rule |
|---|---|
| `name` | A non-empty string: the mod title that the player reads. |
| `id` | A non-empty string. The game requires only that the value identifies the mod (EU5 wiki). **This repository suggests** lowercase snake_case that matches the `your_mods/` directory name. That is not a game rule. `install_mod` uses the `your_mods/` directory name as the install directory name, so a match helps the player. `validate_mod` does **not** report an error when the two differ. |
| `version` | `x.x` or `x.x.x`, two or three parts. |
| `supported_game_version` | A patch-level wildcard, for example `1.3.*`. An exact version such as `1.0.4` goes stale: this game updates its minor version often, and the game then flags the mod outdated. A loose `1.*` is a WARN. |
| `short_description` | A one-line summary. The field is **`short_description`**, not `description`. |
| `tags` | An array of strings. |
| `picture` | `"thumbnail.png"`, placed **after `tags`**. |
| `relationships` | `[]`, optional. |
| `game_custom_data` | `{}`, optional. |

```json
{
  "name": "Elite Education Cost Tweak",
  "id": "elite_education_cost_tweak",
  "version": "1.0",
  "supported_game_version": "1.3.*",
  "short_description": "Adjusts expensive child education costs.",
  "tags": ["Gameplay", "Balance"],
  "picture": "thumbnail.png",
  "relationships": [],
  "game_custom_data": {}
}
```

## Localization YAML

The files are `**/localization/**/*.yml`, under `in_game/` and `main_menu/`.

- **Write the file as UTF-8 with BOM** (`EF BB BF`) in the call that creates it: start the content
  with the BOM character. A later rewrite of the file drops the BOM, and the game then ignores the
  file in silence. That failure is fatal, not cosmetic. To add the BOM to a file that already
  exists, use: `printf '\xEF\xBB\xBF' | cat - <file> > tmp && mv tmp <file>`.
- The filename must end with `_l_<language>`, which matches the language directory.
- The first content line is `l_<lang>:`, and it must match the directory.
- An entry is `  key: "value"` or `  key:0 "value"` with an explicit version. The value starts
  and ends with a double quote on the same line, so an inner `"` and a doubled `""` are legal. A
  value with no closing `"` on its line is an error. Keep the `[` and `]` placeholders balanced.
- One file must not hold duplicate keys.
- To override a vanilla loc key, use a `replace/` subdirectory:
  `<lang>/replace/overwriting_l_<lang>.yml`. Keys there overwrite identical keys elsewhere.

## PDXScript and GUI

The `.txt`, `.gui`, `.gfx`, and `.asset` files are under `in_game/` and `main_menu/`.

- The encoding is UTF-8. Keep the `{` and `}` balanced, and keep the `"` balanced. A `#` starts a
  line comment outside a string, and `#` is literal inside a string. A GUI string can span several
  lines.
- The `INJECT:` and `REPLACE:` keywords go in **top-level blocks** only, in the form
  `KEYWORD:key = {`.

## Overriding vanilla

Three mechanisms exist. The reason and the edge cases are in
[`docs/eu5-modding-conventions.md`](docs/eu5-modding-conventions.md).

1. **Direct file overwrite.** A file with the same path and filename replaces the vanilla file
   entirely. This is brittle.
2. **Implicit replace.** In a directory that is not a keyword directory, a later top-level object
   with the same name wins.
3. **The `INJECT:` and `REPLACE:` keywords.** A keyword directory, which is most `common/`
   subdirectories, requires a keyword to modify an existing object. Implicit replace does not work
   there.

| Keyword | Effect |
|---|---|
| `INJECT:` or `REPLACE:` | Append or replace. The game errors when the object does not exist. |
| `TRY_INJECT:` or `TRY_REPLACE:` | The same, without the error when the object is absent. |
| `INJECT_OR_CREATE:` or `REPLACE_OR_CREATE:` | The same, and the game creates the object when it is absent. |

```txt
REPLACE:expensive_in_depth_education = {
    # replaces the vanilla block instead of duplicating the key
}
```

**Rule of thumb.** Prefer additive new objects. Use `INJECT:` or `REPLACE:` for a surgical
modification in a keyword directory. Reserve a full-file overwrite for a modification to most of a
file.

## Load order and naming

- Files load in **ASCII order**: `00_foo.txt` before `01_bar.txt`. A file in a subdirectory loads
  after the files in the parent directory.
- Prefix idioms: `00_` forces an early load, and `zz_`, `98_`, or `99_` forces a late load, so an
  override wins.
- **GUI exception.** A `type` or `template` clash across mods resolves by **mod load order**, which
  is the playlist position, and not by filename.
- The mod directory name is `lower_snake_case`. Do not leave scratch files in the mod directory:
  `temp_*`, `_tmp_*`, and editor backups.

## The validate_mod tool

Call `validate_mod` with `modDir = your_mods/<ModName>/`.

- `PASS: <name> is valid` means the static syntax, convention, **and name-level semantic** checks
  passed. It does not mean the mod ran in the game.
- `FAIL: <reason>` gives one reason per line, in English, and points at the offending file or field.
  Use the `NEXT:` line to locate it. Fix every ERROR, and do not modify another mod.
- The tool checks syntax, conventions, and **name-level semantics**: a misspelled effect, trigger, or
  modifier name, a missing `INJECT:`/`REPLACE:` target, and a new object without localization keys.
  It does **not** check scope or type. Use `how-to-speak` to report the result to the player.

## Common errors

The `FAIL` messages below are the common ones. The text after each one is the fix.

- `FAIL: .metadata/metadata.json not found`: create the file with the standard fields above.
- `FAIL: metadata.json is not valid JSON` or `not an object`: fix the JSON.
- `FAIL: metadata.version is not semver`: use `x.x` or `x.x.x`.
- `FAIL: localization file is not UTF-8 with BOM`: save the file as UTF-8 **with BOM** (`EF BB BF`).
- `FAIL: filename must end with _l_<language>`: rename the file to `<name>_l_<language>.yml`.
- `FAIL: missing/incorrect l_<lang>: header`: the first content line must be `l_<lang>:`.
- `FAIL: key line not in 'key: "value"' form`: write `  key: "value"` with a closing double quote
  on the same line.
- `FAIL: unbalanced { }` or `unbalanced "`: fix the brace balance or add the missing closing quote.
- `FAIL: INJECT:/REPLACE: must be in a top-level block`: move the keyword to the top level.

## Entry mechanisms and data kinds (what to add, and where it lives)

Pick the entry mechanism from the table in `docs/eu5-modding-conventions.md` section 7, then open the
folder it names and read one of the examples there. Send the intent to `entry-scout` first and read
the candidate it returns, in two cases: when you are unsure which mechanism fits, and when you must
survey the mechanisms that the game already has for a theme.

A mod can also add its own content to one of the game's own data folders. The common ones are:

| Kind | Folder | One real example |
| --- | --- | --- |
| scripted effects | `in_game/common/scripted_effects/` | `country_effects.txt` |
| scripted triggers | `in_game/common/scripted_triggers/` | `00_clothing_triggers.txt` |
| script values | `in_game/common/script_values/` | `albanian_migrations.txt` |
| laws | `in_game/common/laws/` | `00_monarchy.txt` |
| traits | `in_game/common/traits/` | `04_explorer.txt` |
| estates | `in_game/common/estates/` | `00_default.txt` |
| prices | `in_game/common/prices/` | `D008_lutheran_prices.txt` |
| child educations | `in_game/common/child_educations/` | `00_default.txt` |
| attribute columns | `in_game/common/attribute_columns/` | `130_bureaucracy_type.txt` |
| modifier type definitions | `main_menu/common/modifier_type_definitions/` | `02_generic_bureaucracies.txt` |

Most of these folders ship a `readme.txt` or a `.info` file that lists the fields. Read that file
before you write the block. When a task only changes values inside an existing block, there is no new
definition to place.

## Semantic lookup path

For the question "does X exist, and what is the vanilla value?", follow the lookup hierarchy in
[`docs/INDEX.md`](docs/INDEX.md). It is the single authoritative map of which source to use.

- Exact effect, trigger, and modifier names, and their scopes: `docs/script_docs/` and
  `docs/data_types/`, the game dumps.
- Exact vanilla object definitions, field values, INJECT targets, and loc keys: `game-scripts/game/`,
  which `sync_game_scripts` generates, or the local game directory.
- Mechanics concepts: `docs/mod-wiki/`. The modding conventions and the reason behind them:
  `docs/eu5-modding-conventions.md`.

For a survey, `entry-scout` runs this search and returns candidates as `file:line`.
Give it the intent and the planned change list. Its answer is a candidate list, not a decision: read
its first candidate yourself before you write.
When the `subagent` tool is not available, run the search yourself along the same path.

## Reference

- A runnable sample, which must pass `validate_mod`: `reference/example_mod/`.
- **Real-world pattern references.** They are read-only, so copy the pattern you need.
  `reference/README.md` maps each one to what it demonstrates. The five mods are
  `megalopolis_core_upgrade` (the simplest tweak), `sync_market_ui_focus` (GUI only),
  `character_traits_on_cards` (GUI, attribute columns, and filters), `slave_redistribute` (scripted
  GUIs and a context menu), and `globalization_age` (a full situation and event mechanic).
- Knowledge-layer navigation, and what to load when: `docs/INDEX.md`.
- The game overview: `docs/game.md`.
- The modding conventions, the single source of truth: `docs/eu5-modding-conventions.md`.

## Related skills

- The paths are not ready. Use `setup-workspace`. EU5 has no runtime to install.
- Getting the mod into the game, which uses the Paradox mod directory. Use `mod-installer`.
