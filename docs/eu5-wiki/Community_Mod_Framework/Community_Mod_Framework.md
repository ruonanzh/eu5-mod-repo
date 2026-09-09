<!-- source: https://eu5.paradoxwikis.com/Community_Mod_Framework revid: 35034 fetched: 2026-09-09 -->
# Community Mod Framework

|  |  |  |
| --- | --- | --- |
| **Community Mod Framework** | [Community Mod Menu](/Community_Mod_Menu "Community Mod Menu") | [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") |

**[Game modification](/Mod "Mod")**: Community Mod Framework

Community Mod Framework

[![CMF Logo.png](/thumb.php?f=CMF_Logo.png&width=330)](/File%3ACMF_Logo.png)

---

**Type**

Mod Framework & Toolkit

---

**Author(s)**

Bahmut, CaesarVincens, Conner, Glorp, Pickle, RomanImperator

---

**Status**

Released

Community Mod Framework

[![CMF Logo.png](/thumb.php?f=CMF_Logo.png&width=165)](/File%3ACMF_Logo.png)

---

**Type**

Mod Framework & Toolkit

---

**Author(s)**

Bahmut, CaesarVincens, Conner, Glorp, Pickle, RomanImperator

---

**Status**

Released

# Overview

The Community Mod Framework (CMF) is a shared mod framework for Europa Universalis 5 that provides a set of features mods can use to integrate with the game without conflicting with each other. It includes a shared in-game mod menu, a custom action bar, dynamic alerts, utility triggers, and a companion development toolkit with a visual editor, workshop uploader, and mod translator.

The framework is designed to be invisible when no dependent mods are active.

CMF is available on the [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3692202776). For full documentation, see the [GitHub wiki](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki).

# Basic Setup

Hook your mod into CMF's shared registration on\_action. This runs for each human player on game start and when the mod menu opens. Not all features require it, but it is the standard entry point for registering CMM settings, action bar buttons, and alerts.

```
# in_game/common/scripted_effects/your_effects.txt
your_mod_register = {
	# Register settings, action bar elements, alerts, etc.
}

# in_game/common/on_action/your_on_actions.txt
cmf_on_mod_registration = {
	on_actions = {
		your_mod_on_register
	}
}

your_mod_on_register = {
	effect = {
		your_mod_register = yes
		# You can optionally split registration into as many effects as you like:
		# your_mod_register_cmm_settings = yes
		# your_mod_register_action_bar = yes
	}
}
```

# Features

## Community Mod Menu (CMM)

[![](/thumb.php?f=CMM_Example_Mod.png&width=300)](/File%3ACMM_Example_Mod.png)

The Community Mod Menu.

The [Community Mod Menu](/Community_Mod_Menu "Community Mod Menu") is a shared in-game settings UI that allows multiple mods to hook into a single menu through a registration API. It supports toggles, sliders, dropdowns, buttons, text inputs, and settings lists.

See the [CMM page](/Community_Mod_Menu "Community Mod Menu") for a quick reference.

[![](/thumb.php?f=CMM_Visual_Editor.png&width=300)](/File%3ACMM_Visual_Editor.png)

The CMM Visual Editor.

You can create your mod menu using the [visual editor tool](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki/CMM-Visual-Editor), which provides a graphical interface and a live preview to create your mod menu.

## Action Bar

[![](/thumb.php?f=CMF_Action_Bar.png&width=300)](/File%3ACMF_Action_Bar.png)

Custom action bar buttons.

The Action Bar is a shared UI bar where mods can place interactive buttons. Players can reposition the bar (top, bottom-left, or bottom-right) and toggle individual buttons on or off from the Action Bar tab of the Community Mod Framework entry in the mod menu.

Each button requires localization keys:

```
l_english:
 cmf_action_bar_element_example: "cmf_action_bar_element_example"
 cmf_action_bar_element_example_color: "gold"
 cmf_action_bar_element_example_icon: "@advance!"
 cmf_action_bar_element_example_name: "Some Button"
 cmf_action_bar_element_example_tooltip: "This is a custom Action Bar Button."
```

| Effect | Description |
| --- | --- |
| `cmf_add_action_bar_element = { element = <root_key> }` | Register a button |
| `cmf_remove_action_bar_element = { element = <root_key> }` | Remove a button |

Handle clicks via `cmf_on_callback` on\_action (`var:cmf_callback` = the element flag).

Hide the entire action bar from GUI code with `GetVariableSystem.Set('cmf_hide_action_bar', 'yes')` and restore it with `GetVariableSystem.Clear('cmf_hide_action_bar')`.

## Custom Alerts

[![](/thumb.php?f=CMF_Custom_Alerts.png&width=300)](/File%3ACMF_Custom_Alerts.png)

Custom alerts in the alert bar.

The Custom Alerts system allows mods to display dynamic, dismissable notifications in the in-game alert bar. Alerts are color-coded and interactive: players can click them to trigger an effect, or right-click to dismiss.

Each alert requires localization keys:

```
l_english:
 cmf_alert_example_color: "orange"
 cmf_alert_example_icon: "@advance!"
 cmf_alert_example_name: "Some Alert"
 cmf_alert_example_tooltip: "This is a dynamic custom alert."
```

| Key | Description |
| --- | --- |
| `<root_key>_color` | `blue`, `orange`, `red`, `red_war`, `black`, `yellow`, `green`, or `purple` |
| `<root_key>_icon` | Text icon (e.g. `@advance!`) |
| `<root_key>_name` | Tooltip header text |
| `<root_key>_tooltip` | Tooltip body text |

All effects require **country scope**.

| Effect | Description |
| --- | --- |
| `cmf_show_alert = { alert = <root_key> }` | Show an alert |
| `cmf_remove_alert = { alert = <root_key> }` | Remove an alert |
| `cmf_is_alert_active = { alert = <root_key> }` | Check if an alert is active (trigger) |

Handle clicks via `cmf_on_callback` on\_action (`var:cmf_callback` = the alert flag). Left-click automatically removes the alert.

## Mod Banners

Display your mod as a banner on the pre-game lobby screen, with an icon, name, and description. Opt in by calling `cmf_register_lobby_banner` from a leaf on\_action under `cmf_on_banner_registration`.

```
cmf_on_banner_registration = {
	on_actions = {
		your_mod_register_lobby_banner
	}
}

your_mod_register_lobby_banner = {
	effect = {
		cmf_register_lobby_banner = { mod_id = your_mod }
	}
}
```

The banner icon and background are game concepts (`<mod_id>_banner_logo`, `<mod_id>_banner_background`); the title and description come from the `<mod_id>_name` and `<mod_id>_desc` localization keys.

## Mod Action Log

The Mod Action Log provides a shared, global in-game log where mods can record actions. Each entry stores the actor country and localized action text, with optional named arguments for richer messages.

```
# Simple entry - actor is the current country scope
cmf_log = { action = my_mod_action_key }

# Entry with arguments - renders as: [arg1] [action] [arg2]
cmf_log_with_args = { action = transferred_to arg1 = paris arg2 = FRA }

# Clear all entries (disabled in multiplayer)
cmf_clear_log = yes
```

| Effect | Description |
| --- | --- |
| `cmf_log = { action = <flag> }` | Log an action (country scope = actor) |
| `cmf_log_with_args = { action = <flag> arg1 = <flag> arg2 = <flag> }` | Log with two named arguments (localization keys) |
| `cmf_log_with_scope_arg = { action = <flag> }` | Log with one country scope argument (requires `scope:cmf_log_arg2`) |
| `cmf_log_with_scope_args = { action = <flag> }` | Log with two country scope arguments (requires `scope:cmf_log_arg1` and `scope:cmf_log_arg2`) |
| `cmf_clear_log = yes` | Clear all entries |

All arguments are localization keys. The log is viewed via **Mod Menu > General > Session > Mod Action Log**.

## On-Action Hooks

CMF provides shared on\_action hooks. Hook into them the same way as `cmf_on_mod_registration`.

### Game Start & Load Hooks

All fire once in no scope (like vanilla `on_game_start`). Each has a `_human_country` variant that fires in country scope for each human player.

| Hook | Scope | When |
| --- | --- | --- |
| `on_game_start_after_lobby` | none | Once on new game, after country selection |
| `on_game_start_after_lobby_human_country` | country | Same, per human country |
| `on_game_load` | none | Every save load (including from country selection) |
| `on_game_load_human_country` | country | Same, per human country |
| `on_game_load_after_lobby` | none | Every save load, only after passing country selection |
| `on_game_load_after_lobby_human_country` | country | Same, per human country |

```
# No scope - for global effects
on_game_start_after_lobby = {
	on_actions = { your_mod_on_new_game }
}

# Country scope - for human country effects
on_game_start_after_lobby_human_country = {
	on_actions = { your_mod_on_new_game_country }
}
```

### Country Transfer

`cmf_on_country_transfer` fires when the player switches countries (tag switches, inheritance, etc.). CMF auto-copies CMM settings. `scope:old_country` and `scope:new_country` are available.

```
cmf_on_country_transfer = {
	on_actions = { your_mod_on_country_transfer }
}
```

### Recurring Hooks

Slightly more efficient than each mod checking `is_ai = no` individually:

| Hook | Frequency |
| --- | --- |
| `cmf_yearly_human_country_pulse` | Once per year |
| `cmf_monthly_human_country_pulse` | Once per month |

```
cmf_yearly_human_country_pulse = {
	on_actions = {
		your_mod_on_yearly
	}
}

cmf_monthly_human_country_pulse = {
	on_actions = {
		your_mod_on_monthly
	}
}
```

## is\_host Trigger

CMF provides a trigger to check if the current country is controlled by the host player. Always evaluates to yes in singleplayer.

```
if = {
	limit = {
		is_host = yes
	}
	# Runs if the country is controlled by the host
}
```

## cmf\_can\_use\_unrestricted\_tools Trigger

True when the "Enable Unrestricted Tools" setting (labelled "Enable Host-Only Tools" in multiplayer) is on and this country is the host (or in singleplayer). Use to gate restricted features not meant for normal play, e.g. unrestricted land transfer.

```
if = {
	limit = {
		cmf_can_use_unrestricted_tools = yes
	}
	# Runs if this country is the host and unrestricted tools are enabled
}
```

Mark individual CMM settings as requiring Unrestricted Tools with `cmm_set_requires_unrestricted_tools_enabled` (call after registration). The CMM menu will disable editing of marked settings unless the "Enable Unrestricted Tools" setting is on.

## Mod Detection

`cmf_is_mod_active` checks whether another mod is active in the current game. Mods that register CMM settings are detected automatically; other mods call `cmf_register_mod` in their `cmf_on_mod_registration` hook.

```
if = {
	limit = { cmf_is_mod_active = { mod_id = some_other_mod } }
	# Runs only when some_other_mod is loaded
}

# Non-CMM mods: register so others can detect you
cmf_register_mod = { mod_id = your_mod }
```

## cmf\_suppress Effect

CMF provides a `cmf_suppress` effect to silence "used but never set" and "set but never used" engine warnings. Call inside an `always = no` dead branch:

```
if = {
	limit = { always = no }
	cmf_suppress = { v = my_variable }
	cmf_suppress = { v = my_flag_name }
}
```

Group multiple calls in one `if` block so the engine evaluates `always = no` only once.

## cmf\_change\_variable\_map Effect (Deprecated)

Deprecated because `add_to_variable_map` now overwrites an existing key directly.

| Effect | Description |
| --- | --- |
| `cmf_change_variable_map = { name = ... key = ... value = ... }` | Update a country-scoped variable map entry |
| `cmf_change_local_variable_map = { name = ... key = ... value = ... }` | Update a local variable map entry |
| `cmf_change_global_variable_map = { name = ... key = ... value = ... }` | Update a global variable map entry |

## GUI Macros

```
visible = "[Nand(Foo, Bar)]"   # not both
visible = "[Nor(Foo, Bar)]"    # neither
visible = "[Xor(Foo, Bar)]"    # exactly one
```

## Improved Vanilla Top-Level Widget Overrides

Top-level vanilla widgets like lateralviews can only be overridden by replacing the whole file they're defined in, which normally forces you to copy every type and template in that file too. CMF includes extracted copies of those definitions, so your override only needs the top-level widget itself. That reduces what you have to maintain and lowers the chance of conflicts with other mods that modify parts of the same file.

Covered files: `foreign_country_lateralview.gui`, `government_lateralview.gui`, `ingame_topbar.gui`, `location_window.gui`, `outliner_entries.gui`, `single_unit_window.gui`, `technology_lateralview.gui`.

## Community Mod Toolkit (CMT)

The [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") is a companion set of development tools for EU5 mod authors. It provides a structured mod template and automation tools that work together through shared configuration:

* **[CMM Visual Editor](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki/CMM-Visual-Editor)** - Browser-based interface for designing CMM settings without scripting it by hand. The easiest way to get started with CMM.
* **Upload Tool** - Automated Steam Workshop deployment with submod support.
* **Translation Tool** - Automated localization via DeepL or Gemini AI for all EU5-supported languages.

See the [CMT page](/Community_Mod_Toolkit "Community Mod Toolkit") for details.

# Additional Configuration

## Conditional Visibility

Any CMM setting or CMF element (action bar buttons) can optionally use a Scripted GUI for dynamic visibility or enabled state. Create a Scripted GUI named after the element and register it with `cmf_register_scripted_gui`:

```
# Register the GUI (call after adding the element):
cmf_register_scripted_gui = { element = cmf_action_bar_element_example }
```

```
# Action bar: is_shown controls visibility, is_valid controls enabled/greyed out
cmf_action_bar_element_example = {
	scope = country
	is_shown = { ... }
	is_valid = { ... }
}

# CMM setting: is_shown controls visibility (named [mod_id]__[setting_id]_on_changed)
your_mod__your_toggle_on_changed = {
	scope = country
	is_shown = {
		"variable_map(cmm|flag:your_mod__some_other_setting)" >= 1
	}
}
```

## Dependency Check Popup

Main menu popup that alerts players when CMF is missing. Offers to enable or open workshop to subscribe automatically. Download `cmf-dependency-check.zip` from the [latest release](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/releases) and extract into your mod folder. See the [GitHub wiki](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki/Dependency-Check-Popup) for details.

# Links

* [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3692202776)
* [GitHub Repository](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework)
* [Full Documentation (GitHub Wiki)](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki)
* [Example Mod (GitHub)](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/tree/main/submods/cmf-example-mod)

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

|  |  |
| --- | --- |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |

|  |  |
| --- | --- |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

|  |  |
| --- | --- |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |

|  |  |
| --- | --- |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |

|  |  |
| --- | --- |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |

|  |  |
| --- | --- |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |

|  |  |
| --- | --- |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |

|  |  |
| --- | --- |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |