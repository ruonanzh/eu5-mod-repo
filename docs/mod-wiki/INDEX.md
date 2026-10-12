# EU5 mod API reference (mod-wiki)

The mod API and mechanics reference. It is a curated snapshot of the EU5 wiki: 118 pages under 9
topic directories. Load a page only when the task needs it. See [`../INDEX.md`](../INDEX.md) for the
overall docs map.

## Topic directories

| Directory | Pages | Load it when you need to |
|---|---:|---|
| [`Modding/`](Modding/) | 53 | The mod API. Start here for almost any modding question. The directory listing for [`Modding/`](Modding/) is the full list. |
| [`Game_concepts/`](Game_concepts/) | 29 | The game concepts that script and localization reference as `$game_concept_*$`. |
| [`Estates/`](Estates/) | 8 | Estate mechanics: Burghers, Clergy, Commoners, Cossacks, Dhimmi, Estate laws, Nobility, and Tribes. |
| [`Economy/`](Economy/) | 7 | Building, goods, and market mechanics. |
| [`Laws/`](Laws/) | 6 | The law categories: Administrative, International organization, Military, Religious, Socioeconomic, and Succession. |
| [`Ages/`](Ages/) | 6 | The age mechanics: Absolutism, Discovery, Reformation, Renaissance, Revolutions, and Traditions. |
| [`Government/`](Government/) | 4 | Government forms and reforms. |
| [`Interface/`](Interface/) | 2 | GUI and user-interface modding: the in-game screen and the user interface. |
| [`Modding_tools/`](Modding_tools/) | 3 | The Paradox official tools: PDX DeepL, PDX Flag Builder, and PDX Workshop Manager. |

## Relationship to the other references

- **mod-wiki is prose, not authoritative data.** It explains how the systems work and the mod API
  concepts. It is a curated snapshot of eu5.paradoxwikis.com and can lag one patch behind.
- **Exact keywords and values: use `game-scripts/` and the dumps.** To answer "does X exist", "what
  value does it have", or "which scope does it use", grep `game-scripts/`, the script mirror that
  `sync_game_scripts` generates. Also read [`../script_docs/`](../script_docs/) and
  [`../data_types/`](../data_types/), the game dumps. Those are the source of truth for exact names
  and values.
- **The live wiki** (eu5.paradoxwikis.com) has the latest version. Re-sync mod-wiki with
  `scripts/crawl_eu5_wiki.py` when it drifts.
