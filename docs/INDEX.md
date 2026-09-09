# EU5 modding docs index

Curated map of the knowledge layer under `docs/`. **Load selectively:** read this index, then open
only the one or two pages relevant to the current task instead of pulling the whole `docs/` folder
into context.

- **Start here:** [`eu5-modding-conventions.md`](eu5-modding-conventions.md) — the committed
  cheat-sheet (override/INJECT semantics, ASCII load order, localization/BOM, metadata). Covers most
  authoring questions on its own; reach for the pages below only when you need depth.
- **Exact names / scopes / signatures → the game dumps.** For "does effect/trigger/modifier X exist,
  and in which scope?" or "what GUI function/promote can I call?", the
  [game-generated reference dumps](#game-generated-reference-dumps-authoritative) are the
  **authoritative** source: they are exported from the running game, so they match the installed
  game version. Prefer them over the wiki, which is a periodically-updated copy and can lag.
- **Concepts / how-to → the official wiki.** eu5.paradoxwikis.com explains *how* systems work and
  gives worked examples. Use it to understand a mechanic; use the dumps to confirm the exact keyword.

> The linter (`validate_mod`) only checks syntax/conventions. These docs are the reference for
> *semantics* (which scopes/effects/triggers/types actually exist) — always the source of truth over
> guessing.

## Game-generated reference dumps (authoritative)

Exported from the running game via the `script_docs` and `dump_data_types` console commands. These
are **plain text, one entry per record, easy to grep**, and match the installed game version — treat
them as the source of truth for exact keywords.

| Dump | Entries | Load when you need to… |
|------|--------:|------------------------|
| [`script_docs/effects.log`](script_docs/effects.log) | ~1490 | Confirm an **effect** name and its supported scopes/targets. |
| [`script_docs/triggers.log`](script_docs/triggers.log) | ~1725 | Confirm a **trigger** name and its supported scopes/targets. |
| [`script_docs/modifiers.log`](script_docs/modifiers.log) | ~2333 | Look up a **modifier** tag and its category. |
| [`script_docs/event_targets.log`](script_docs/event_targets.log) | ~326 | Find a **scope link / event target** and its input/output scopes. |
| [`script_docs/on_actions.log`](script_docs/on_actions.log) | ~244 | Check an **on_action** hook name and its expected scope. |
| [`script_docs/custom_localization.log`](script_docs/custom_localization.log) | ~927 | Find a **custom localization** promote and its entries. |
| [`data_types/data_types_*.txt`](data_types/) | ~27000 | Find a **GUI/script data-type promote or function** (name, return type) for `.gui` datamodel bindings, scripted GUI, and script values. **No wiki equivalent — dumps only.** |

> `data_types/` has **no** wiki counterpart, so it is the only reference for GUI/script promotes
> and functions. Files are split by area: `_gui`, `_script`, `_common`, `_internalclausewitzgui`,
> and a large `_uncategorized`.

## Other pages in `docs/`

| Page | Load when you need to… |
|------|------------------------|
| [`game.md`](game.md) | Game overview + mod loading mechanics. |
| [`eu5-modding-conventions.md`](eu5-modding-conventions.md) | The "why" behind override/load-order/localization/metadata. |
