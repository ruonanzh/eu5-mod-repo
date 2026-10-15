/**
 * The static index of the EU5 entry mechanisms. It is a data module, and it is not a tool.
 *
 * It is read-only. The module imports nothing, it opens no file, it runs no command, and it walks
 * no directory. Every path in the table was checked by hand against the vanilla scripts, and the
 * `locate_entry` tool checks the paths again at call time, because a game patch can move them.
 *
 * It lives in `.pi/lib/` for the same reason as `game-paths.ts`: pi loads `.pi/extensions/*.ts`,
 * so a shared module must stay outside that directory. The tool imports this file by relative path.
 *
 * The table holds 11 mechanisms. It is not complete. It is the common set that 22 sample sessions
 * hit before their first write, ranked by how often they searched for the mechanism name.
 *
 * Field meanings:
 *   - `dir`        The registration target, relative to the vanilla script root. It is a directory for most
 *                  mechanisms, and a single file for the per-file mechanisms (`topbar`, `shortcut`,
 *                  `context_menu`).
 *   - `infoFile`   The readme the game ships for the mechanism. The empty string means that the
 *                  game ships none. The game readmes are the answers a session cannot find by
 *                  reading the conventions page.
 *   - `examples`   Real paths in the vanilla scripts, at most 3. An empty list means that those
 *                  scripts hold no example. `scripted_widgets` is that case: the folder holds the readme
 *                  only.
 *   - `skeleton`   The smallest copyable frame. The weak-evidence mechanisms have no skeleton, and
 *                  the field is then the empty string.
 *   - `wiring`     Who renders the mechanism, or how it is called from script. It is the part the
 *                  registration folder alone does not answer.
 *   - `locateCmd`  The shortest command that lists the mechanism from the repository root.
 *   - `evidence`   How strong the sample evidence is: `strong` is 50 hits or more, `medium` is 20
 *                  to 49, and `weak` is under 20.
 *   - `liveEnum`   A volatile enum that the mechanism accepts, as a snapshot of this game build.
 *                  The empty list means that the mechanism has no such enum. The `locate_entry`
 *                  tool rescans the vanilla scripts when the list is not empty, because the values
 *                  drift.
 *
 * The index does not hold workshop-only paths, because a copy made with `.no-workshop` has no
 * workshop directory. The words `window` and `panel` are generic, so they are not entries.
 */

export type EntryPointFamily = "data-entry" | "ui-container";

export type EntryPointEvidence = "strong" | "medium" | "weak";

export interface EntryPoint {
  /** The mechanism name. It is the `mechanism` argument of the `locate_entry` tool. */
  id: string;
  family: EntryPointFamily;
  /** The registration target, relative to `ENTRY_POINT_ROOT_REL`. */
  dir: string;
  /** The game readme, relative to `ENTRY_POINT_ROOT_REL`. The empty string means that the game ships none. */
  infoFile: string;
  /** Real example paths, relative to `ENTRY_POINT_ROOT_REL`. At most 3, and possibly empty. */
  examples: string[];
  /** The smallest copyable frame. The empty string means that the index holds no skeleton for it. */
  skeleton: string;
  /** Who renders the mechanism, or how script calls it. */
  wiring: string;
  /** The shortest locate command, run from the repository root. */
  locateCmd: string;
  evidence: EntryPointEvidence;
  /** A volatile enum, as a snapshot of this game build. The empty list means that there is none. */
  liveEnum: string[];
}

/** The vanilla script root. Every path in the table is relative to it, and `game-scripts` is a symlink. */
export const ENTRY_POINT_ROOT_REL = "game-scripts/game/game";

export const ENTRY_POINTS: EntryPoint[] = [
  {
    id: "lateralview",
    family: "ui-container",
    dir: "in_game/gui/",
    infoFile: "",
    examples: ["in_game/gui/advances_lateralview.gui", "in_game/gui/battle_lateralview.gui"],
    skeleton: `types MyLateralViewTypes
{
	# declare the blocks this lateral view uses, for example:
	# type my_row = hbox { }
}

lateralview = {
	# The panel id is this name without a trailing _lateralview, so OpenLateralView('my_panel') opens it.
	name = "my_panel"
	blockoverride "panel_header" { }
	blockoverride "panel_content" { }
}`,
    wiring:
      "The lateralview_left_setup and the lateralview_right_setup template in in_game/gui/ingame_topbar.gui place the panel on layer = lateralview. A button opens the panel with OpenLateralViewWithFilter('automation', 'automation_filter_advances'), and that first argument is the lateral view id. The id is the block name without the trailing _lateralview: the block name = \"automation_lateralview\" takes the id 'automation'. Some ids open a view that no lateralview block in the vanilla scripts defines, for example 'missions'.",
    locateCmd: "ls game-scripts/game/game/in_game/gui/ | grep lateralview",
    evidence: "strong",
    liveEnum: [],
  },
  {
    id: "topbar",
    family: "ui-container",
    // The mechanism has three registration files, so `dir` holds the main one and `examples` holds
    // all three. A directory would be wrong here: in_game/gui/ holds every in-game screen.
    dir: "in_game/gui/ingame_topbar.gui",
    infoFile: "",
    examples: ["in_game/gui/ingame_topbar.gui", "in_game/gui/hud_topbar.gui", "in_game/gui/common_topbar.gui"],
    skeleton: `widget = {
	name = "my_topbar"
	layer = topbar
	# add the new button here, or override the vanilla widget
}`,
    wiring:
      "Two of the three files declare a top-level widget with a fixed name: ingame_topbar (layer = topbar), and common_topbar. The third file, hud_topbar.gui, declares type topbar = widget { name = \"HUD TopBar\" } inside Types HUD_TopbarTypes. ingame_topbar.gui also holds the lateralview_left_setup and lateralview_right_setup templates.",
    locateCmd: "ls game-scripts/game/game/in_game/gui/ | grep topbar",
    evidence: "strong",
    liveEnum: [],
  },
  {
    id: "on_action",
    family: "data-entry",
    dir: "in_game/common/on_action/",
    infoFile: "in_game/common/on_action/on_actions.info",
    examples: ["in_game/common/on_action/character.txt"],
    skeleton: `my_on_action = {
	trigger = { <trigger> }
	events = { my_event.1 }
}`,
    wiring:
      "The engine fires the on_action by name. Script fires it with trigger_event_non_silently = { on_action = <name> }, and the events block inside the on_action fires the listed event ids.",
    locateCmd: "ls game-scripts/game/game/in_game/common/on_action/",
    evidence: "strong",
    liveEnum: [],
  },
  {
    id: "scripted_gui",
    family: "data-entry",
    dir: "in_game/common/scripted_guis/",
    infoFile: "in_game/common/scripted_guis/scripted_guis.info",
    examples: ["in_game/common/scripted_guis/economy_satisfaction_target.txt", "in_game/gui/economy_lateralview.gui"],
    skeleton: `my_scripted_gui = {
	scope = country
	is_shown = { <trigger> }
	is_valid = { <trigger> }
	effect = { <effect> }
}`,
    wiring:
      "A .gui element calls the SGUI by name, for example on_action = \"[GetScriptedGui('my_scripted_gui').Execute(GuiScope.SetRoot(GetPlayer.MakeScope).End)]\". The vanilla scripts use on_action for their SGUI calls. on_finish also calls an SGUI, but only inside a state = { } block. The definition alone does nothing.",
    locateCmd: "ls game-scripts/game/game/in_game/common/scripted_guis/",
    evidence: "strong",
    liveEnum: [],
  },
  {
    id: "generic_actions",
    family: "data-entry",
    dir: "in_game/common/generic_actions/",
    infoFile: "",
    examples: ["in_game/common/generic_actions/black_death.txt"],
    skeleton: `my_generic_action = {
	type = situation        # the type decides where the game shows the action
	potential = { scope:actor ?= { <trigger> } }
	select_trigger = {      # needed when the action targets an object
		looking_for_a = situation
		target_flag = recipient
		name = "choose_situation"
	}
	effect = { <effect> }
	ai_will_do = { add = 10 }
}`,
    wiring:
      "The action name is global, and the type value decides where the game shows the action. The value is the first-level type = of the entry block. A nested type = and a scope: prefixed expression do not count. The entry needs no .gui wiring.",
    locateCmd: "ls game-scripts/game/game/in_game/common/generic_actions/",
    evidence: "strong",
    // A snapshot of the first-level type = values in this build, ranked by how often they occur.
    liveEnum: [
      "situation",
      "owncountry",
      "religious",
      "disaster",
      "internationalorganization",
      "religiousfaction",
      "parliament",
      "internationalorganizationparliament",
    ],
  },
  {
    id: "events",
    family: "data-entry",
    dir: "in_game/events/",
    infoFile: "",
    examples: ["in_game/events/ages.txt"],
    skeleton: `namespace = my_mod

my_mod.1 = {
	type = country_event
	title = my_mod.1.title
	desc = my_mod.1.desc
	option = { name = my_mod.1.a }
}`,
    wiring:
      "An on_action lists the event id in its events block, or a script fires it with trigger_event_non_silently = my_mod.1. The event needs its title and desc loc keys, and every option needs its name loc key.",
    locateCmd: "ls game-scripts/game/game/in_game/events/",
    evidence: "medium",
    liveEnum: [],
  },
  {
    id: "situations",
    family: "data-entry",
    dir: "in_game/common/situations/",
    infoFile: "",
    examples: ["in_game/common/situations/black_death.txt"],
    skeleton: `my_situation = {
	can_start = { <trigger> }
	can_end = { <trigger> }
	visible = { <trigger> }
	on_start = { <effect> }
	on_ended = { <effect> }
}`,
    wiring:
      "The engine starts the situation when can_start holds, and it stops the situation at can_end. The visible block decides which countries see it. on_monthly runs while the situation is active.",
    locateCmd: "ls game-scripts/game/game/in_game/common/situations/",
    evidence: "medium",
    liveEnum: [],
  },
  {
    id: "shortcut",
    family: "ui-container",
    dir: "loading_screen/gui/shortcuts.shortcuts",
    infoFile: "",
    examples: ["loading_screen/gui/shortcuts.shortcuts"],
    skeleton: `input_actionbindings = {
	my_action = "<key binding>"
}`,
    wiring:
      "The loading screen reads input_actionbindings. Each key is an engine input action name, and the value is the key binding. The vanilla file holds placeholders with empty values, so it defines no real binding.",
    locateCmd: "cat game-scripts/game/game/loading_screen/gui/shortcuts.shortcuts",
    evidence: "medium",
    liveEnum: [],
  },
  {
    id: "character_interactions",
    family: "data-entry",
    dir: "in_game/common/character_interactions/",
    infoFile: "",
    examples: ["in_game/common/character_interactions/dismiss_artist.txt"],
    skeleton: `my_character_interaction = {
	on_own_nation = yes
	message = yes
	potential = { }
	select_trigger = {
		looking_for_a = character
		source = actor
		target_flag = recipient
		name = "choose_character"
	}
	effect = { scope:recipient = { <effect> } }
	ai_will_do = { add = 0 }
}`,
    wiring:
      "The character window lists the interaction when potential holds. select_trigger picks the target character with looking_for_a = character, and the effect reads that character as scope:recipient.",
    locateCmd: "ls game-scripts/game/game/in_game/common/character_interactions/",
    evidence: "medium",
    liveEnum: [],
  },
  {
    id: "scripted_widgets",
    family: "ui-container",
    dir: "main_menu/gui/scripted_widgets/",
    infoFile: "main_menu/gui/scripted_widgets/_scripted_widgets.info",
    // The vanilla folder holds the readme only, so the copy has no example to show.
    examples: [],
    // The evidence is weak, so the index holds no skeleton. The readme has the format.
    skeleton: "",
    wiring:
      "The readme line maps a .gui unit to a name: gui/<file>.gui = <scripted_widget_name>. The .gui unit must carry a visible attribute that a function returns, because visible = yes does not work there.",
    locateCmd: "ls game-scripts/game/game/main_menu/gui/scripted_widgets/",
    evidence: "weak",
    liveEnum: [],
  },
  {
    id: "context_menu",
    family: "ui-container",
    dir: "in_game/gui/context_menu.gui",
    infoFile: "",
    examples: ["in_game/gui/context_menu_types.gui"],
    // The evidence is weak, so the index holds no skeleton. The file is the format.
    skeleton: "",
    wiring:
      "Declare the new type inside types ContextMenuSpecificTypes, for example type MyContextMenu = ContextMenuBase { ... }. The engine then opens that entry for the matching entity. The shared templates live in in_game/gui/context_menu_types.gui.",
    locateCmd: "cat game-scripts/game/game/in_game/gui/context_menu.gui",
    evidence: "weak",
    liveEnum: [],
  },
  // ---- Data kinds (added 2026-10-15 from the r6 measured frequency, same shape as the entry
  // mechanisms above) ----
  {
    id: "scripted_effects",
    family: "data-entry",
    dir: "in_game/common/scripted_effects/",
    infoFile: "in_game/common/scripted_effects/readme.txt",
    examples: ["in_game/common/scripted_effects/country_effects.txt", "in_game/common/scripted_effects/character_effects.txt"],
    skeleton: `my_simple_effect = {
\t<list of effects>
}`,
    wiring:
      "Another script calls it in an effects position: my_simple_effect = yes. With arguments it is my_simple_effect = { value = 12 }, and the effect runs in the calling scope.",
    locateCmd: "ls game-scripts/game/game/in_game/common/scripted_effects/",
    evidence: "strong",
    liveEnum: [],
  },
  {
    id: "scripted_triggers",
    family: "data-entry",
    dir: "in_game/common/scripted_triggers/",
    infoFile: "in_game/common/scripted_triggers/readme.txt",
    examples: ["in_game/common/scripted_triggers/00_clothing_triggers.txt"],
    skeleton: `my_simple_trigger = {
\t<list of triggers>
}`,
    wiring:
      "Another script calls it in a trigger position: my_simple_trigger = yes. With arguments it is my_simple_trigger = { value = 12 }, and it evaluates in the calling scope.",
    locateCmd: "ls game-scripts/game/game/in_game/common/scripted_triggers/",
    evidence: "strong",
    liveEnum: [],
  },
  {
    id: "script_values",
    family: "data-entry",
    dir: "in_game/common/script_values/",
    infoFile: "in_game/common/script_values/_script_values.info",
    examples: ["in_game/common/script_values/albanian_migrations.txt"],
    skeleton: `my_static_value = 10

my_formula_value = {
\tadd = <number or scripted value>
\tmultiply = <number or scripted value>
}`,
    wiring:
      "Script reads it by name wherever a number is expected, for example add_stress = minor_stress_gain. A formula is recalculated on every evaluation, so keep the expensive ones out of hot paths.",
    locateCmd: "ls game-scripts/game/game/in_game/common/script_values/",
    evidence: "medium",
    liveEnum: [],
  },
  {
    id: "laws",
    family: "data-entry",
    dir: "in_game/common/laws/",
    infoFile: "in_game/common/laws/readme.txt",
    examples: ["in_game/common/laws/00_monarchy.txt", "in_game/common/laws/colonial_laws.txt"],
    skeleton: `my_law = {
\tlaw_category = <category>
\tpotential = { <trigger> }
\tmy_law_no = {
\t\tcountry_modifier = { <modifiers> }
\t\tyears = 2
\t}
\tmy_law_yes = {
\t\tcountry_modifier = { <modifiers> }
\t\tprice = <price id>
\t}
}`,
    wiring:
      "The Laws panel lists the law, and a country holds exactly one policy of it. A policy with a price pays that price when it activates. The readme in the folder lists the law attributes and the policy attributes.",
    locateCmd: "ls game-scripts/game/game/in_game/common/laws/",
    evidence: "strong",
    liveEnum: [],
  },
  {
    id: "traits",
    family: "data-entry",
    dir: "in_game/common/traits/",
    infoFile: "in_game/common/traits/_traits.info",
    examples: ["in_game/common/traits/04_explorer.txt"],
    skeleton: `my_trait = {
\tcategory = <ruler / cabinet / general / admiral / artist / health / explorer>
\tallow = { <trigger> }
\tmodifier = { <modifiers> }
}`,
    wiring:
      "category fixes which character role can hold the trait, and modifier applies while the character's role matches that category. Triggers and effects use has_trait and add_trait, and the bare name is the form: vanilla has 708 sites with has_trait = <name> and none with a trait: prefix.",
    locateCmd: "ls game-scripts/game/game/in_game/common/traits/",
    evidence: "medium",
    liveEnum: [],
  },
  {
    id: "estates",
    family: "data-entry",
    dir: "in_game/common/estates/",
    infoFile: "",
    examples: ["in_game/common/estates/00_default.txt"],
    skeleton: `my_estate = {
\tcolor = estate_<name>
\tpower_per_pop = 0
\ttax_per_pop = 0
\tcan_spawn_random_characters = no
}`,
    wiring:
      "Estate privileges, estate actions, and the estate UI target the estate by its name. The vanilla file defines the estates the game ships with, so a new estate is a new block in it.",
    locateCmd: "ls game-scripts/game/game/in_game/common/estates/",
    evidence: "weak",
    liveEnum: [],
  },
  {
    id: "prices",
    family: "data-entry",
    dir: "in_game/common/prices/",
    infoFile: "in_game/common/prices/readme.txt",
    examples: ["in_game/common/prices/D008_lutheran_prices.txt"],
    skeleton: `my_price = {
\tgold = 10
\treligious_influence = 25
}`,
    wiring:
      "Other content charges it by name, for example price_to_select in a child education. The readme in the folder lists every currency the block accepts.",
    locateCmd: "ls game-scripts/game/game/in_game/common/prices/",
    evidence: "weak",
    liveEnum: [],
  },
  {
    id: "child_educations",
    family: "data-entry",
    dir: "in_game/common/child_educations/",
    infoFile: "in_game/common/child_educations/readme.txt",
    examples: ["in_game/common/child_educations/00_default.txt"],
    skeleton: `my_child_education = {
\tmodifier = { <character modifiers> }
\tcountry_modifier = { <country modifiers> }
\tprice_to_select = <price id>
\tprice_to_deselect = <price id>
\tpotential = { <character triggers> }
\tallow = { <character triggers> }
\ton_education_start_effect = { <character effects> }
}`,
    wiring:
      "The education panel offers it for a child. Choosing it pays price_to_select and runs on_education_start_effect. The readme in the folder is the field list.",
    locateCmd: "ls game-scripts/game/game/in_game/common/child_educations/",
    evidence: "weak",
    liveEnum: [],
  },
  {
    id: "attribute_columns",
    family: "ui-container",
    dir: "in_game/common/attribute_columns/",
    infoFile: "in_game/common/attribute_columns/readme.txt",
    examples: ["in_game/common/attribute_columns/130_bureaucracy_type.txt"],
    skeleton: `my_column = {
\tname = {
\t\twidget = <widget type from the .gui files>
\t\twidth = 150
\t\tis_constant_width = no
\t}
}`,
    wiring:
      "A select_trigger in a generic action or a country or character interaction shows these columns for the object being selected. The widget gets an InteractionTarget, so it reads that object.",
    locateCmd: "ls game-scripts/game/game/in_game/common/attribute_columns/",
    evidence: "medium",
    liveEnum: [],
  },
  {
    id: "modifier_type_definitions",
    family: "data-entry",
    dir: "main_menu/common/modifier_type_definitions/",
    infoFile: "",
    examples: ["main_menu/common/modifier_type_definitions/02_generic_bureaucracies.txt"],
    skeleton: `my_bureaucracy_impact_modifier = {
\tpercent = yes
\tgame_data = {
\t\tcategory = country
\t}
}`,
    wiring:
      "It registers the impact modifier tag that script and the bureaucracy UI use for that modifier type. The tag name must match the type it belongs to.",
    locateCmd: "ls game-scripts/game/game/main_menu/common/modifier_type_definitions/",
    evidence: "weak",
    liveEnum: [],
  },
];
