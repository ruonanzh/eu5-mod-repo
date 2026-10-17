# EU5 modding docs index

A curated map of the knowledge layer under `docs/`.
**Load selectively.** Read this index first. Then open only the one or two pages that the current
task needs, instead of pulling the whole `docs/` directory into context.

## Lookup hierarchy (which source is authoritative for what)

| You need | Source |
|---|---|
| Exact effect, trigger, and modifier names, and their scopes | [`script_docs/`](script_docs/) and [`data_types/`](data_types/) — game-generated dumps, authoritative |
| Exact vanilla object definitions, field values, INJECT targets, and loc keys | `game-scripts/` (the script mirror that `sync_game_scripts` generates), or the local game directory recorded by `try_set_game_dir` |
| Mechanics concepts and how-to method (mod API) | [`mod-wiki/`](mod-wiki/) (a curated wiki snapshot) |
| The modding conventions and the reason behind them | [`eu5-modding-conventions.md`](eu5-modding-conventions.md) |

> **Dumps compared with `game-scripts/`.** The dumps list what exists: effect, trigger, and
> modifier names with their scopes. `game-scripts/` holds the script source from the game and from
> the Workshop mods: object definitions and field values. Grep `game-scripts/` for exact values,
> INJECT targets, and loc keys. Use the dumps to check that a name exists and to read its scope.
> Both are text-only, and both come from the local game directory. Prefer `game-scripts/` after you
> run
> `sync_game_scripts`.

- **Start here:** [`eu5-modding-conventions.md`](eu5-modding-conventions.md). This cheat-sheet
  covers override and `INJECT` semantics, ASCII load order, localization, and metadata. It answers
  most modding questions on its own. Read the pages below only when you need more depth.
- **Exact names, scopes, and signatures: use the game dumps.** To find whether an effect, trigger,
  or modifier exists, and in which scope, use the
  [game-generated reference dumps](#game-generated-reference-dumps-authoritative). The running
  game exports them, so they match the installed version. Prefer them over the wiki, which is a
  periodic copy and can lag.
- **Concepts and how-to method: use [`mod-wiki/`](mod-wiki/), a curated wiki snapshot.** It
  explains how the systems work and the mod API concepts, in 112 pages under 9 topic directories.
  See [`mod-wiki/INDEX.md`](mod-wiki/INDEX.md). The live wiki (eu5.paradoxwikis.com) is newer.
  Re-sync with `scripts/crawl_eu5_wiki.py` when it drifts.

> `validate_mod` checks syntax, conventions, and **name-level semantics**: whether an effect, trigger,
> or modifier name exists, whether an `INJECT:`/`REPLACE:` target exists, and whether a new object has
> its localization keys. These docs are the reference for **scope and type** semantics:
> which scopes, effects, triggers, and types exist. Always prefer them over a guess.

## Game-generated reference dumps (authoritative)

The running game exports these dumps through the `script_docs` and `dump_data_types` console
commands. They are plain text, one entry per record, and easy to grep. They are the source of truth
for exact keywords.

**The version behind these files is not recorded.** They arrived with the initial commit `e968448`
and have not changed since, and the files carry no version or date header. The counts below were
re-counted on 2026-10-18. To refresh them, take `current_docs/` from the
[`modding-digests`](https://github.com/Europa-Universalis-5-Modding-Co-op/modding-digests) repository,
which versions the same files per game release, or run the two console commands in the game. When you
record a new set, note the game build next to it. The repository has no dump refresh script.

| Dump | Entries | Load it when you need to |
|------|--------:|------------------------|
| [`script_docs/effects.log`](script_docs/effects.log) | 1,534 | Check an **effect** name and its supported scopes and targets. |
| [`script_docs/triggers.log`](script_docs/triggers.log) | 1,798 | Check a **trigger** name and its supported scopes and targets. |
| [`script_docs/modifiers.log`](script_docs/modifiers.log) | 2,437 | Check a **modifier** tag and its category. |
| [`script_docs/event_targets.log`](script_docs/event_targets.log) | 334 | Check a **scope link** or event target and its input and output scopes. |
| [`script_docs/on_actions.log`](script_docs/on_actions.log) | 257 | Check an **on_action** hook name and its expected scope. |
| [`script_docs/custom_localization.log`](script_docs/custom_localization.log) | 464 promotes | Check a **custom localization** promote and its entries. |
| [`data_types/data_types_*.txt`](data_types/) | 28,527 definitions | Check a **GUI or script data-type promote or function** (name and return type) for `.gui` datamodel bindings, scripted GUI, and script values. The dumps are the only source, because the wiki has no equivalent. |

> `data_types/` has no wiki counterpart, so it is the only reference for GUI and script promotes
> and functions. The files are split by area: `_gui`, `_script`, `_common`,
> `_internalclausewitzgui`, and a large `_uncategorized`.

## mod-wiki (mod API reference)

A curated snapshot of the EU5 wiki. It has 112 pages that cover the mod API and the core mechanics,
under 9 topic directories. See [`mod-wiki/INDEX.md`](mod-wiki/INDEX.md) for the full page list.

| Directory | Pages | Covers |
|---|---:|---|
| `Modding/` | 47 | The mod API. Start here for almost any modding question. The directory listing for [`Modding/`](mod-wiki/Modding/) is the full list. |
| `Game_concepts/` | 29 | The `$game_concept_*$` references. |
| `Estates/` | 8 | Estate mechanics. |
| `Economy/` | 7 | Building, goods, and market mechanics. |
| `Laws/` | 6 | The law categories: administrative, military, religious, socioeconomic, succession, and international-organization. |
| `Ages/` | 6 | The age mechanics: Discovery, Reformation, Renaissance, Absolutism, Revolutions, and Traditions. |
| `Government/` | 4 | Government forms and reforms. |
| `Interface/` | 2 | GUI and user-interface modding. |
| `Modding_tools/` | 3 | The Paradox official tools. |

**Six wiki pages are left out:** `Effect`, `Trigger`, `Scope`, `Modifier_types`, `Defines`, and
`List_of_GUI_script_functions`. They are 97 to 100 percent name tables, and the dumps above carry the
same data with a game version. Read [`script_docs/`](script_docs/) and [`data_types/`](data_types/)
instead. `scripts/crawl_eu5_wiki.py` skips the six titles.

## Other pages in `docs/`

| Page | Load it when you need to |
|------|------------------------|
| [`game.md`](game.md) | The game overview and the mod loading mechanics. |
| [`eu5-modding-conventions.md`](eu5-modding-conventions.md) | The reason behind the override, load-order, localization, and metadata rules. |
