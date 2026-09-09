<!-- source: https://eu5.paradoxwikis.com/Community_Mod_Menu revid: 35035 fetched: 2026-09-09 -->
# Community Mod Menu

|  |  |  |
| --- | --- | --- |
| [Community Mod Framework](/Community_Mod_Framework "Community Mod Framework") | **Community Mod Menu** | [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") |

**[Modding tool](/Category%3AModding_tools "Category:Modding tools")**: Community Mod Menu

Community Mod Menu

[![CMM Logo.png](/thumb.php?f=CMM_Logo.png&width=330)](/File%3ACMM_Logo.png)

---

**Type**

Visual Editor

---

**Author(s)**

Conner

---

**Status**

Released

---

**Github**

[Link](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework)

Community Mod Menu

[![CMM Logo.png](/thumb.php?f=CMM_Logo.png&width=165)](/File%3ACMM_Logo.png)

---

**Type**

Visual Editor

---

**Author(s)**

Conner

---

**Status**

Released

---

**Github**

[Link](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework)

# Overview

The Community Mod Menu (CMM) is part of the [Community Mod Framework](/Community_Mod_Framework "Community Mod Framework") and allows multiple mods to hook into a single shared in-game settings menu through a registration API. For full documentation, see the [GitHub wiki](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki).

[![](/thumb.php?f=CMM_Example_Mod.png&width=600)](/File%3ACMM_Example_Mod.png)

The CMM Example Mod.

# CMM Visual Editor

[![](/thumb.php?f=CMM_Visual_Editor.png&width=600)](/File%3ACMM_Visual_Editor.png)

The CMM Visual Editor.

The easiest way to create CMM settings is the **[CMM Visual Editor](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki/CMM-Visual-Editor)**, a browser-based tool that generates all required files (effects, scripted GUIs, localization, on\_action) with no manual scripting. It supports every setting type, provides a live preview, and can import existing mods for editing.

Run in a terminal to launch:

```
curl.exe -sL https://raw.githubusercontent.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/main/tools/cmm-visual-editor.bat -o "$env:TEMP\cmm-visual-editor.bat"; & "$env:TEMP\cmm-visual-editor.bat"
```

# Basic Setup

If you prefer to set up settings manually (instead of using the [Visual Editor](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki/CMM-Visual-Editor) above), follow the [CMF Basic Setup](/Community_Mod_Framework#Basic_Setup "Community Mod Framework") to create your registration effect and `cmf_on_mod_registration` on\_action hook. Then create a localization file for your settings.

# Settings

Most settings work automatically: just register them and CMM handles the UI and value storage. Only text and settings list require callbacks. All other types use auto-apply and work out of the box.

All types except text have global variants (`cmm_register_global_*`); these store values globally and apply to all players rather than per country, and in multiplayer only the host can edit them.

## Toggle

[![](/thumb.php?f=CMM_Toggle.png&width=300)](/File%3ACMM_Toggle.png)

A CMM toggle.

```
cmm_register_bool_setting = {
	mod_id = your_mod
	setting_id = your_toggle
	tab_id = general
	group_id = general_toggles
	default_value = 0           # 0 = Disabled, 1 = Enabled
}
```

Value: `"variable_map(cmm|flag:your_mod__your_toggle)"` - `0` (disabled) or `1` (enabled).

## Dropdown

[![](/thumb.php?f=CMM_Dropdown.png&width=300)](/File%3ACMM_Dropdown.png)

A CMM dropdown.

```
cmm_register_dropdown_setting = {
	mod_id = your_mod
	setting_id = your_dropdown
	tab_id = general
	group_id = general_values
	default_index = 1  # Default selected option (starting from 1)
	option_count = 3   # Total number of options
}
```

Value: `"variable_map(cmm|flag:your_mod__your_dropdown)"` - selected option ordinal (starting from 1). Options support optional `_option_[N]_desc` tooltip localization keys.

## Button

[![](/thumb.php?f=CMM_Button.png&width=300)](/File%3ACMM_Button.png)

A CMM button.

```
cmm_register_button_setting = {
	mod_id = your_mod
	setting_id = your_button
	tab_id = general
	group_id = general_toggles
}
```

No stored value. Hook into `cmf_on_callback` to run an effect when clicked.

## Numeric

[![](/thumb.php?f=CMM_Numeric.png&width=300)](/File%3ACMM_Numeric.png)

A CMM numeric stepper.

```
cmm_register_numeric_setting = {
	mod_id = your_mod
	setting_id = your_numeric
	tab_id = general
	group_id = general_values
	default_value = 5
	min_value = 0
	max_value = 10
	step_value = 1    # Ctrl+click = 5x step, Shift+click = jump to min/max
}
```

Value: `"variable_map(cmm|flag:your_mod__your_numeric)"` - current numeric value.

## Slider

[![](/thumb.php?f=CMM_Slider.png&width=300)](/File%3ACMM_Slider.png)

A CMM slider.

```
cmm_register_slider_setting = {
	mod_id = your_mod
	setting_id = your_slider
	tab_id = general
	group_id = general_values
	default_value = 50
	min_value = 0
	max_value = 100
	step_value = 1
}
```

Value: `"variable_map(cmm|flag:your_mod__your_slider)"` - current slider value. Players can click to jump, double click to drag, or use the `-`/`+` buttons.

# Reading Setting Values

## Basic Settings

Setting values are stored in the `cmm` variable map, keyed by `flag:[mod_id]__[setting_id]`:

```
if = {
	limit = {
		"variable_map(cmm|flag:your_mod__your_toggle)" >= 1
	}
	# Effect when toggle is enabled
}
```

Global settings use `global_variable_map`:

```
"global_variable_map(cmm|flag:your_mod__your_global_toggle)" >= 1
```

When the setting key comes from a macro, use a local variable (macros don't expand inside quotes):

```
set_local_variable = { name = cmm_tmp value = flag:$setting$ }
"variable_map(cmm|local_var:cmm_tmp)" >= 1
```

## Reacting to Changes

CMF fires `cmf_on_callback` after any setting is changed through the UI, an alert is clicked, or an action bar button is clicked. Hook into it in an on\_action file (`in_game/common/on_action/`), the same way as `cmf_on_mod_registration`:

```
cmf_on_callback = {
	on_actions = { your_mod_on_callback }
}

your_mod_on_callback = {
	effect = {
		if = {
			limit = { var:cmf_callback = flag:your_mod__your_toggle }
			# Runs when your_toggle changes
		}
	}
}
```

`var:cmf_callback` is set to the flag of the element that was interacted with.

# Advanced

## Conditional Visibility

Hide (`is_shown`) or grey out (`is_valid`) a setting based on a condition, through a Scripted GUI. See [Conditional Visibility](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework/wiki/Conditional-Visibility) on the GitHub wiki.

## Text

[![](/thumb.php?f=CMM_Text.png&width=300)](/File%3ACMM_Text.png)

A CMM text input.

|  |  |
| --- | --- |
| ![](https://central.paradoxwikis.com/images/thumb/8/8c/Templates_Information_icon.png/20px-Templates_Information_icon.png) | Text settings are **singleplayer only**. |

```
cmm_register_text_setting = {
	mod_id = your_mod
	setting_id = your_text
	tab_id = general
	group_id = general_values
	character_limit = 42  # Minimum 1
	quote_text = 1        # 1 = wrap in double quotes, 0 = no wrap
}
```

Text settings use a **scripted effect** callback (not a Scripted GUI):

```
your_mod__your_text_on_changed = {
	# $text$ contains the submitted text
	change_country_name = $text$
}
```

## Settings List

[![](/thumb.php?f=CMM_Ordered_Settings_List.png&width=300)](/File%3ACMM_Ordered_Settings_List.png)

An ordered list setting in CMM.

A table of items where each row has one or more field columns (toggles, dropdowns, or numeric steppers). Lists can optionally be ordered. Settings lists require a Scripted GUI callback.

### Registering a List

```
cmm_register_settings_list = {
	mod_id = your_mod
	setting_id = your_list
	tab_id = general
	item_count = 5    # Number of rows (1-50)
	is_ordered = 1    # 1 = players can reorder, 0 = fixed order
}
```

### Registering Fields

Register fields after the list. Each field becomes a column:

```
cmm_register_list_bool_field = {
	mod_id = your_mod
	setting_id = your_list
	field_id = enabled
	default_value = 1
}

cmm_register_list_dropdown_field = {
	mod_id = your_mod
	setting_id = your_list
	field_id = mode
	default_index = 1
	option_count = 3
}

cmm_register_list_numeric_field = {
	mod_id = your_mod
	setting_id = your_list
	field_id = weight
	default_value = 5
	min_value = 0
	max_value = 10
	step_value = 1
}

cmm_register_list_slider_field = {
	mod_id = your_mod
	setting_id = your_list
	field_id = intensity
	default_value = 50
	min_value = 0
	max_value = 100
	step_value = 5
}

cmm_register_list_data_field = {
	mod_id = your_mod
	setting_id = your_list
	field_id = score
	default_value = 0
}
# Data fields are read-only; update at runtime with cmm_set_list_data_value
```

### List Field Display Formatting

Enable prefix/postfix display for numeric, slider, or data fields. Call after registering the field:

```
cmm_set_list_field_format = {
	mod_id = your_mod
	setting_id = your_list
	field_id = weight
}
```

Then define `_prefix` / `_postfix` localization keys. For sign-conditional formatting (`_prefix_high` / `_postfix_high` / `_prefix_low` / `_postfix_low`), use `cmm_set_list_field_conditional_format` instead.

### Repointing Field Localization

Repoint a field's localization keys at runtime, for example to relabel a column when another setting changes its meaning:

```
cmm_set_list_field_localization = {
	mod_id = your_mod
	setting_id = your_list
	field_id = weight
	name = your_mod__your_list__weight_alt_name
	root = your_mod__your_list__weight_alt
}
```

The column header localizes `name` directly; desc, prefix, and postfix localize from `root` plus `_desc` / `_prefix` / `_postfix`.

### Disabling Fields for Specific Items

Disable a field column for specific items so the cell renders as empty space:

```
cmm_disable_list_field_for_item = {
	mod_id = your_mod
	setting_id = your_list
	field_id = enabled
	item = 2
}
```

Call after registering the field. Right-click "apply to all" skips disabled items. Use `cmm_enable_list_field_for_item` with the same parameters to re-enable.

### Hiding Specific Items

Hide entire item rows from the menu (items remain in the datamodel):

```
cmm_hide_list_item = {
	mod_id = your_mod
	setting_id = your_list
	item = 3
}
```

Call after registering the list. Use `cmm_show_list_item` with the same parameters to show again.

### List Callback

Settings lists require a Scripted GUI callback (unlike other types which use auto-apply):

```
your_mod__your_list_on_changed = {
	scope = country
	effect = {
		cmm_apply_list_change = {
			setting = your_mod__your_list
		}
	}
}
```

### How Ordering Works

Each item has a stable identity number (1 through `item_count`) that never changes. Reordering only changes a separate display order list. `cmm_for_each_list_item` visits items in display order, but `$i$` resolves to the stable item number.

### Reading List Values

Field values are stored in the `cmm` variable map as: `"variable_map(cmm|flag:[mod_id]__[setting_id]_i[N]_f[slot])"`

* `[N]` = stable item number (1 through `item_count`)
* `[slot]` = field registration order (1 through 5)

### Iterating List Items

```
cmm_for_each_list_item = {
	setting = your_mod__your_list
	effect = your_mod__your_list_each_item
}

your_mod__your_list_each_item = {
	# $i$ = resolved item number, respects player reordering
	set_local_variable = { name = cmm_tmp value = flag:your_mod__your_list_i$i$_f1 }
	if = {
		limit = {
			"variable_map(cmm|local_var:cmm_tmp)" >= 1
		}
		# Item $i$ has field 1 (enabled) set to true
	}
}
```

### Attaching Values

Attach game object scopes to list items for use during iteration:

```
cmm_set_list_item_value = {
	mod_id = your_mod
	setting_id = your_list
	item = 1
	value = building_type:fine_cloth_guild
}
```

Access during iteration as `scope:cmm_list_current_item_value`.

### Dynamic Lists

Build lists dynamically instead of specifying a fixed `item_count`:

```
cmm_begin_settings_list = {
	mod_id = your_mod
	setting_id = your_list
	tab_id = general
	is_ordered = 0
}

cmm_add_settings_list_item = {
	mod_id = your_mod
	setting_id = your_list
	value = building_type:fine_cloth_guild
	name = fine_cloth_guild              # Localization key for row label
}

cmm_finish_settings_list = { mod_id = your_mod setting_id = your_list }
# Register fields after this
```

Or build from an existing country variable list:

```
cmm_register_settings_list_from_list = {
	mod_id = your_mod
	setting_id = your_list
	tab_id = general
	is_ordered = 0
	list = my_variable_list  # Country variable list of scopes (max 50)
}
# Register fields after this
```

## Per-Item Defaults

Set one item's default value in a settings list field. Called before the field is registered, it also sets the item's starting value:

```
cmm_set_list_field_default_for_item = {
	mod_id = your_mod
	setting_id = your_list
	field_id = enabled
	item = 1
	value = 1
}
```

## Non-Resettable Settings

Exclude a setting from the Reset to Defaults button:

```
cmm_set_no_reset = {
	mod_id = your_mod
	setting_id = your_setting
}
```

Call after the setting registration effect.

## Setting Aliases

Assign an **alias** variable that mirrors a setting value. Add the sync call in your registration effect and `cmf_on_callback` callback.

### Setting Alias

```
cmm_sync_setting_alias = {
	setting = your_mod__your_toggle
	alias = your_mod_toggle
}
```

Access: `var:your_mod_toggle`. Also works for list fields: pass the field map key (e.g. `your_mod__your_list_i1_f1`) as `setting`.

### Bool Alias

Sets the alias variable when the toggle is on, removes it when off. `cmm_sync_setting_alias` also works for bools (copies the numeric value), but this variant supports the `has_variable` pattern:

```
cmm_sync_bool_alias = {
	setting = your_mod__your_toggle
	alias = your_mod_toggle
}
```

Check with: `has_variable = your_mod_toggle`

### Dropdown Option Alias

Sets a variable when that option is selected, removes it otherwise:

```
cmm_sync_dropdown_option_alias = {
	setting = your_mod__your_dropdown
	index = 2
	alias = using_feature_b
}
```

Check with: `has_variable = using_feature_b`

# Localization

| Key Pattern | Description |
| --- | --- |
| `[mod_id]_name` / `_desc` | Mod name / description |
| `[mod_id]__[tab_id]_name` / `_desc` | Tab name / description |
| `[mod_id]__[tab_id]__[group_id]_name` / `_desc` | Group name / description |
| `[mod_id]__[setting_id]_name` / `_desc` | Setting name / description |
| `[mod_id]__[setting_id]_option_[N]_name` | Dropdown option label |
| `[mod_id]__[setting_id]_option_[N]_desc` | Dropdown option tooltip (optional) |
| `[mod_id]__[setting_id]_text` | Button text |
| `[mod_id]__[setting_id]_item_column_name` | List item column header |
| `[mod_id]__[setting_id]_i[N]_name` | List row label |
| `[mod_id]__[setting_id]__[field_id]_name` | List field column label |
| `[mod_id]__[setting_id]__[field_id]_desc` | List field column header tooltip (optional) |
| `[mod_id]__[setting_id]__[field_id]_option_[N]_name` | List dropdown field option |
| `[mod_id]__[setting_id]__[field_id]_prefix` | List field value prefix (optional) |
| `[mod_id]__[setting_id]__[field_id]_postfix` | List field value postfix (optional) |

# Links

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