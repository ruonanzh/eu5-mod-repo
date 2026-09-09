# EU5 mod spec (pdx-script)

> This is the **executable spec** for mod artifacts. Each constraint is annotated with whether
> `validate_mod` enforces it. Principle: deterministic hard rules (syntax/format that makes the
> game error or silently fail) go into `validate_mod`; soft rules that need vanilla data or
> semantic judgment are left to the agent (see the "semantic boundary" section in
> [docs/eu5-modding-conventions.md](../docs/eu5-modding-conventions.md)).

## 1. Directory structure

Each mod is a directory `your_mods/<ModName>/`:

```
<ModName>/
├── .metadata/
│   ├── metadata.json        # required; the game errors without it
│   └── thumbnail.png        # launcher/workshop image (optional; may live only locally)
├── in_game/                 # in-game content (common/ events/ gui/ localization/ …)
├── main_menu/               # main-menu content (localization/ gui/ …)
└── loading_screen/          # (optional) loading-screen content
```

- **Artifact root**: all mod content lives under `<ModName>/`, created and bound by
  `create_mod_folder`.
- **Read-only boundary**: everything outside `your_mods/` (specs/docs/.pi/reference) is read-only;
  inside `your_mods/` you may only write the one mod directory bound to your session.

## 2. metadata.json [validate_mod checks]

`.metadata/metadata.json` must exist and be a valid JSON object. Standard fields:

| Field | Rule | Level |
|---|---|---|
| file itself | exists, valid JSON, top-level object | missing/invalid = **ERROR** |
| `name` | non-empty string, matches dir name (`lower_snake_case`) | missing = WARN |
| `id` | non-empty string | missing = WARN |
| `version` | `x.x` or `x.x.x` (two- or three-part semver) | not semver = **ERROR** |
| `supported_game_version` | `1.*` form | missing = WARN |
| `tags` | array of strings | missing = WARN |
| `picture` | `"thumbnail.png"`, placed after `tags`; a missing referenced file is WARN only if other images are versioned | missing = WARN |

## 3. Localization [validate_mod checks]

`**/localization/**/*.yml` (under `in_game/` and `main_menu/`):

| Rule | Level |
|---|---|
| Encoding must be **UTF-8 with BOM** (`EF BB BF`) — without a BOM the game silently ignores the file | **ERROR** |
| Filename must end with `_l_<language>`, and `<language>` must match the language folder | **ERROR** |
| First content line must be `l_<lang>:` and match the folder | **ERROR** |
| Entry format: `  key: "value"` or `  key:0 "value"` (explicit version) | malformed = **ERROR** |
| Value must be double-quoted; quotes balanced; `[`/`]` placeholders balanced | **ERROR** |
| No duplicate keys within one file | **ERROR** |
| Override vanilla keys via a `replace/` subfolder (`<lang>/replace/…_l_<lang>.yml`) | convention (agent follows) |
| Value contains U+FFFD / private-use chars / simp_chinese mojibake | WARN |

## 4. PDXScript / GUI syntax [validate_mod checks]

`.txt` / `.gui` / `.gfx` / `.asset` under `in_game/` and `main_menu/`:

| Rule | Level |
|---|---|
| File encoding UTF-8 | non-UTF-8 = **ERROR** |
| `{` and `}` balanced (`#` line comments aware; `#` inside a string is literal) | unbalanced = **ERROR** |
| `"` quotes balanced (GUI datamodel strings may span multiple lines, must eventually close) | unbalanced = **ERROR** |
| `INJECT:`/`REPLACE:` family keywords only in **top-level blocks**, formatted `KEYWORD:key = {` | nested/malformed = **ERROR** |

> Brace/quote checks apply only to game script files under `in_game/` and `main_menu/`;
> `README.md`, `INTEGRATION.txt`, `thumbnail.txt` and other sidecar files are not tokenized.

## 5. Overriding vanilla [partly validate_mod, partly agent judgment]

Three override mechanisms (see [docs/eu5-modding-conventions.md](../docs/eu5-modding-conventions.md)):

1. **Direct file overwrite**: same path+filename as a vanilla file replaces it entirely (brittle).
2. **Implicit replace**: in non-keyword folders, a later top-level object with the same name wins.
3. **`INJECT:` / `REPLACE:` family**: in keyword folders (most `common/` subfolders) a keyword is
   required to modify an existing object; implicit replace does not work there.

| Keyword | Semantics |
|---|---|
| `INJECT:` / `REPLACE:` | append / replace; errors if the object does not exist |
| `TRY_INJECT:` / `TRY_REPLACE:` | same, no error if absent |
| `INJECT_OR_CREATE:` / `REPLACE_OR_CREATE:` | same, create if absent |

- **Hard rule [validate_mod checks]**: `INJECT:`/`REPLACE:` family only in top-level blocks (see §4).
- **Soft rule [agent judgment]**: whether an object redefines a vanilla object of the same name and
  needs a keyword — the agent checks with `grep`/`read` against the local game directory
  (`gameDir` discovered by `check_runtime`); the linter does not do semantic judgment.

## 6. Load order [convention, agent follows]

- Files load in **ASCII order**: `00_foo.txt` before `01_bar.txt`.
- **Files in a subfolder load after files in the parent folder** (regardless of name).
- Prefix idioms: `00_` forces early (foundation); `zz_`/`98_`/`99_` forces late.
- **GUI exception**: cross-mod `type`/`template` conflicts resolve by **mod load order (playlist
  position)**; filenames have no effect.

## 7. Naming conventions [convention, agent follows]

- Mod dir name: `lower_snake_case` (enforced by `create_mod_folder` sanitization).
- File naming: `00_`/`01_`… ordered prefixes to express load intent; localization filenames end
  with `_l_<language>`.
- Do not leave scratch/backup files (`temp_*`, `_tmp_*`, editor backups) in the mod directory.

## 8. Semantic boundary (important)

`validate_mod` is a **syntax/convention linter**, not a scope/type semantic validator:
- It cannot catch a misspelled effect/trigger/modifier name or a wrong scope usage.
- Exact effect/trigger/modifier/scope-link/GUI datatype names are authoritative in
  [`docs/script_docs/`](../docs/script_docs/) and [`docs/data_types/`](../docs/data_types/)
  (game-generated dumps); concepts and examples live in
  [`docs/eu5-modding-conventions.md`](../docs/eu5-modding-conventions.md).
