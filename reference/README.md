# Reference mods

Real-world mod examples for the agent to learn EU5 (pdx-script) modding patterns from. Each
subdirectory is a complete mod (`.metadata/` + `in_game/` + `main_menu/`), kept here read-only as a
pattern reference — do **not** edit them, copy the pattern you need into `your_mods/<ModName>/`.

- `example_mod/` — the **minimal runnable sample** that must pass `validate_mod` (one tweak +
  bilingual localization). Start here for the bare skeleton.
- The five below are **real mods** covering richer patterns:

| Mod | What it demonstrates | Key files to read |
|---|---|---|
| `megalopolis_core_upgrade` | Simplest tweak: `REPLACE` one vanilla rank | `in_game/common/location_ranks/00_default.txt` |
| `sync_market_ui_focus` | GUI-only: overwrite a vanilla `.gui`, call a GUI API (`SetUIFocusMarket`) | `in_game/gui/selected_market_view.gui` |
| `character_traits_on_cards` | GUI + data: full `.gui` overwrite, `attribute_columns/`, `gui/filters/`, bilingual localization | `in_game/gui/people_lateral_view.gui`, `in_game/common/attribute_columns/09_character.txt`, `in_game/gui/filters/98_character_trait_filters.txt` |
| `slave_redistribute` | Scripted GUIs: right-click context menu driving gameplay | `in_game/common/scripted_guis/slave_redistribute.txt`, `in_game/gui/context_menu.gui` |
| `globalization_age` | Full mechanic: `situations/` + `events/` + `generic_actions/` + `scriptable_hints/` + `prices/` + a situation GUI + icon + extensive bilingual localization | start at `in_game/common/situations/globalization_age.txt`, then its event/gui/localization |

Common patterns worth noticing across all of them:

- `.metadata/metadata.json` — the standard fields (`name`/`id`/`version`/`supported_game_version`/`short_description`/`tags`/`picture`/`relationships`/`game_custom_data`); `id` = `your_mods/<目录名>`.
- Overrides use `REPLACE:`/`INJECT:` in keyword folders, `zz_`/`98_`/`99_` filename prefixes for load order.
- Localization files: UTF-8 **with BOM**, filename ends `_l_<language>`, first line `l_<lang>:`.
- GUI overwrites replace the whole vanilla `.gui` file (same path+filename) — note the conflict risk the mod READMEs mention.
