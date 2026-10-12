# Reference mods

Real-world mod examples. The agent reads them to learn EU5 (pdx-script) modding patterns. Each
subdirectory is a complete mod (`.metadata/`, `in_game/`, and `main_menu/`). Do not edit these
files. Copy the pattern you need into `your_mods/<ModName>/`.

- `example_mod/` — the **minimal runnable sample**, which must pass `validate_mod`. It holds one
  tweak and a bilingual localization. Start here for the bare skeleton.
- The five mods below are **real mods**, and they show richer patterns.

| Mod | What it demonstrates | Key files to read |
|---|---|---|
| `megalopolis_core_upgrade` | The simplest tweak: replace one vanilla rank with `REPLACE` | `in_game/common/location_ranks/00_default.txt` |
| `sync_market_ui_focus` | GUI only: overwrite a vanilla `.gui` file and call a GUI API (`SetUIFocusMarket`) | `in_game/gui/selected_market_view.gui` |
| `character_traits_on_cards` | GUI and data: a full `.gui` overwrite, `attribute_columns/`, `gui/filters/`, and a bilingual localization | `in_game/gui/people_lateral_view.gui`, `in_game/common/attribute_columns/09_character.txt`, `in_game/gui/filters/98_character_trait_filters.txt` |
| `slave_redistribute` | Scripted GUIs: a right-click context menu that drives gameplay | `in_game/common/scripted_guis/slave_redistribute.txt`, `in_game/gui/context_menu.gui` |
| `globalization_age` | A full mechanic: `situations/`, `events/`, `generic_actions/`, `scriptable_hints/`, `prices/`, a situation GUI, an icon, and an extensive bilingual localization | Start at `in_game/common/situations/globalization_age.txt`, then read its event, GUI, and localization files |

**This repository keeps the four `README.md` files inside these mod directories verbatim, in the
original language.** They do not follow this repository's prompt standard.

Common patterns across all of them:

- `.metadata/metadata.json` holds the standard fields: `name`, `id`, `version`,
  `supported_game_version`, `short_description`, `tags`, `picture`, `relationships`, and
  `game_custom_data`. This repository suggests that `id` matches the `your_mods/` directory name,
  but the game requires only a non-empty string. Two mods below do not match.
- Overrides use `REPLACE:` or `INJECT:` in keyword directories, and the filename prefixes `zz_`,
  `98_`, and `99_` set the load order.
- A localization file must be UTF-8 **with BOM**. Its filename must end with `_l_<language>`, and its
  first line must be `l_<lang>:`.
- A GUI overwrite replaces the whole vanilla `.gui` file, so the path and the filename must match.
  The mod READMEs note the conflict risk.
