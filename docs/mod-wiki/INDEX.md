# EU5 mod API reference (mod-wiki)

The mod API and mechanics reference. A curated snapshot of `eu5.paradoxwikis.com`: **112 pages** under
9 topic directories, captured 2026-09-09 and 2026-09-10. Load a page only when the task needs it. See
[`../INDEX.md`](../INDEX.md) for the overall docs map.

**Pick the page from this list. Do not list or grep the directory to find one.** A name in
`backticks` is a file under that directory. The words after the dash are what the page covers.

**Six wiki pages are not in this snapshot.** `Effect`, `Trigger`, `Scope`, `Modifier_types`,
`Defines`, and `List_of_GUI_script_functions` are pure name-and-scope tables, 97 to 100 percent
table lines. The dumps carry the same data, they name a game version, and they are cheaper to read:
[`../script_docs/`](../script_docs/) and [`../data_types/`](../data_types/). Read those instead.
`scripts/crawl_eu5_wiki.py` skips the six titles, so a re-sync does not bring them back.

## Modding/ (47 pages)

- `Action_modding.md` — generic actions, character and country interactions, cabinet actions.
- `Advance_modding.md` — advances: definition, syntax, localization, script use.
- `Art_modding.md` — work-of-art types, artist types, work of art in setup.
- `Building_modding.md` — building types, production methods, employment systems, road types.
- `Character_modding.md` — character interactions, select triggers, character scopes.
- `Color.md` — colour modes, colours as scopes, named colours, scripted colour maths.
- `Concept_modding.md` — game concepts: definition and localization.
- `Console_commands.md` — debug mode and the full console command list.
- `Country_modding.md` — country definition and country setup.
- `Culture_modding.md` — cultures, culture groups, languages and dialects.
- `Disaster_modding.md` — disaster structure.
- `Disease_modding.md` — spawning a disease, infection rate, mortality, spread, stagnation.
- `Estate_modding.md` — estate structure, modifier blocks, opinion, base-game estates.
- `Event_modding.md` — event file structure, options, illustrations, firing an event.
- `Flag_modding.md` — flags, coats of arms, dynasty emblems, coat-of-arms templates.
- `GUI_script.md` — GUI data types, const rules, GUI functions and promotes.
- `Goods_modding.md` — goods, good demand, starting good setup.
- `Institution_modding.md` — institution structure, spread mechanics, spread values, ages.
- `Interface_modding_guide.md` — build a custom window step by step, tooltip widgets.
- `International_organization_modding.md` — IO structure, statuses, variables, parliament.
- `Law_modding.md` — law structure, law categories, estate preferences, base-game law groups.
- `Localization.md` — localization format, data functions, concepts, variables.
- `Macro.md` — scripted effects and triggers used as macros.
- `Map_modding.md` — heightmap, terrain texture, splines, rivers, map borders.
- `Mean_time_to_happen.md` — MTTH syntax and scripted modifiers.
- `Mission_modding.md` — mission and mission-task structure, select triggers.
- `Mod.md` — installing mods, mod lists, mods with wiki pages, modding tools.
- `Mod_compatibility.md` — the only local source for file loading order, overwrite precedence, `INJECT` and `REPLACE` behavior, operation priority, and the GUI and localization exceptions.
- `Mod_structure.md` — mod folder location, metadata, mod folder layout.
- `Modding.md` — getting started, tools and utilities, common problems, terminology.
- `Modifier_modding.md` — static modifiers, auto modifiers, new modifier types.
- `On_action.md` — on_action structure and the full on_action list.
- `Pop_modding.md` — pop types, estate assignment, impact modifiers, promotion chains.
- `Religion_modding.md` — religions, schools, aspects, figures, focuses, factions.
- `Save-game_editing.md` — save file location and format, PDX Unlimiter, packed saves.
- `Scope_link.md` — data and value scope links, wildcards, every link by scope.
- `Script_value.md` — named and inline values, operators, conditionals, iterators.
- `Scripted_gui.md` — scripted GUI definitions, key attributes, saved scopes, AI use.
- `Settlement_position_modding_guide.md` — move a settlement, update the map objects.
- `Setup_modding.md` — setup file structure, start setup, timed modifiers.
- `Situation_modding.md` — situation structure.
- `Subject_type_modding.md` — subject types: war participation, acceptance, modifiers.
- `Terrain_modding.md` — add terrain, topography, vegetation and climate per location.
- `Trait_modding.md` — trait structure, categories, flavours, allow blocks.
- `Unit_modding.md` — unit definitions, categories, abilities, recruitment, levies.
- `Variable.md` — variable types, lists, maps, variable effects and triggers.
- `War_modding.md` — casus belli, wargoal types, scripted peace treaties.

## Game_concepts/ (29 pages)

- `Age.md` — the ages, their institutions and advances.
- `Character.md` — abilities, marriage, ruler, education, traits, life expectancy.
- `Chivalric_order.md` — the list of chivalric orders.
- `Control.md` — control effects, maximum control, proximity.
- `Country.md` — base values, capital, country type and rank, control, maritime presence.
- `Culture.md` — culture war, culture status and opinion, the list of cultures.
- `Diplomacy.md` — relations, diplomatic capacity, power projection, great powers, rivals.
- `Disasters.md` — the disaster list.
- `Diseases.md` — disease spread and the list of diseases.
- `Economy.md` — gold, control, tax, manpower, sailors.
- `Estate.md` — estate stats, privileges, crown estate, estate power calculation.
- `Event.md` — event mechanics and the list of event pages.
- `Exploration.md` — exploration, colonies, conquistadors.
- `Formable_country.md` — the list of formable countries.
- `International_organization.md` — Catholic Church, HRE, Middle Kingdom, Shogunate, and others.
- `Language.md` — language categories, language power, the list of languages.
- `Laws.md` — the law lists.
- `Ledger.md` — the in-game ledger.
- `Location.md` — map hierarchy, integration status, rank, topography, climate.
- `Map_modes.md` — every map mode, by category.
- `Military.md` — actions, morale, experience, attrition, military bonuses.
- `Missions.md` — economy, politics and expansion mission trees.
- `Parliament.md` — parliament types, requests, calling parliament.
- `Population.md` — demographics, literacy, pop satisfaction, social class.
- `Religion.md` — religion status, opinion, tolerance, mechanics, religious actions.
- `Situations.md` — the historical situations, such as the Hundred Years War.
- `Starting_countries.md` — the starting-country reference.
- `Subjects.md` — loyalty, diplomatic annexation, military stance, subject types.
- `Work_of_Art.md` — the list of historical works of art.

## Estates/ (8 pages)

- `Burghers.md` — modifiers, privileges, other countries' opinion.
- `Clergy.md` — modifiers, privileges, other countries' opinion.
- `Commoners.md` — modifiers, privileges, other countries' opinion.
- `Cossacks.md` — modifiers, privileges, advances, other countries' opinion.
- `Dhimmi.md` — modifiers, privileges, other countries' opinion.
- `Estate_laws.md` — the list of estate laws.
- `Nobility.md` — modifiers, privileges, other countries' opinion.
- `Tribes.md` — modifiers, privileges, other countries' opinion.

## Economy/ (7 pages)

- `Building.md` — building cost, levels, employment system, profit, food output.
- `Common_buildings.md` — town and rural common buildings.
- `Goods.md` — pop needs, raw goods, produced goods.
- `Market.md` — market centre, creating a market, market access.
- `Resource_gathering_operation.md` — RGO size, unique RGO locations, RGO goods.
- `Rural_buildings.md` — rural buildings by category.
- `Urban_buildings.md` — town and city buildings.

## Laws/ (6 pages)

- `Administrative_laws.md` — the list of administrative laws.
- `International_organization_laws.md` — IO laws: Patriarchate, Church, Colonial Federation, HRE.
- `Military_laws.md` — the list of military laws.
- `Religious_laws.md` — the list of religious laws.
- `Socioeconomic_laws.md` — the list of socioeconomic laws.
- `Succession_laws.md` — the list of succession laws.

## Ages/ (6 pages)

- `Age_of_Absolutism.md` — effects, institutions, advances.
- `Age_of_Discovery.md` — effects, institutions, advances.
- `Age_of_Reformation.md` — effects, institutions, advances.
- `Age_of_Renaissance.md` — effects, institutions, advances.
- `Age_of_Revolutions.md` — effects, institutions, advances.
- `Age_of_Traditions.md` — effects, institutions, advances.

## Government/ (4 pages)

- `Government.md` — government types, cabinet, regency, societal values, resources.
- `Government_reform.md` — minor and major reforms.
- `Monarchy.md` — the monarchy type and its special advances.
- `Republic.md` — republic reforms and special advances.

## Interface/ (2 pages)

- `Ingame_screen.md` — the in-game screen layout.
- `User_interface.md` — launcher, main menu, in-game interface, colour code.

## Modding_tools/ (3 pages)

- `PDX_DeepL.md` — machine and manual translation for localization.
- `PDX_Flag_Builder.md` — build a flag.
- `PDX_Workshop_Manager.md` — upload a mod to the Workshop.

## Relationship to the other references

- **mod-wiki is prose, not authoritative data.** It explains how the systems work and the mod API
  concepts. It is a curated snapshot of eu5.paradoxwikis.com and can lag one patch behind.
- **Exact keywords and values: use `game-scripts/` and the dumps.** To answer "does X exist", "what
  value does it have", or "which scope does it use", grep `game-scripts/`, the script mirror that
  `sync_game_scripts` generates. Also read [`../script_docs/`](../script_docs/) and
  [`../data_types/`](../data_types/), the game dumps. Those are the source of truth for exact names
  and values.
- **The live wiki** (eu5.paradoxwikis.com) has the latest version. Re-sync mod-wiki with
  `scripts/crawl_eu5_wiki.py` when it drifts. Each page header carries its `revid` and fetch date, and
  `.revisions.json` holds both for every page.
