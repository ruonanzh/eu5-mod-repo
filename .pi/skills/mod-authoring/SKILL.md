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

- **Q&A / consultation (read-only):** answer game-mechanics or mod-API questions by reading the
  knowledge layer. Start from [`docs/INDEX.md`](docs/INDEX.md) to locate the right source
  (mod-wiki for concepts, `script_docs/`/`data_types/` for exact names, `eu5-modding-conventions.md`
  for authoring rules). Do **not** create files or check the runtime unless the player explicitly
  asks about their environment.
- **Authoring / modifying (writes):** produce or change a mod under `your_mods/<ModName>/`. Reuse
  the structure of `reference/example_mod/`. Writes are limited to the mod directory bound to the
  current session; with no binding, call `create_mod_folder` with a `lower_snake_case` name. Do not
  create a second binding if one already exists.

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
| `id` | non-empty string, `lower_snake_case` (matches dir name) |
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

For "does effect/trigger/modifier X exist, and in which scope?", in this order:

1. **Exact names (authoritative):** `docs/script_docs/` + `docs/data_types/` — game-generated
   dumps matching the installed version. Prefer over guessing.
2. **Concepts / how-to:** `docs/mod-wiki/` (curated wiki snapshot; see `docs/mod-wiki/INDEX.md`).
3. **Authoring rules & why:** `docs/eu5-modding-conventions.md`.

## Reference

- Runnable sample: `reference/example_mod/`.
- Knowledge-layer navigation (what to load when): `docs/INDEX.md`.
- Game overview (mechanics): `docs/game.md`.
- Authoring rules (single source of truth): `docs/eu5-modding-conventions.md`.
