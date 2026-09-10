<!-- source: https://eu5.paradoxwikis.com/Macro revid: 20933 fetched: 2026-09-09 -->
# Macro
This article is [timeless](/Category%3ATimeless "Category:Timeless") and should be accurate for any version of the game.
*See also: [Effects](/Effects "Effects"), [Triggers](/Triggers "Triggers")*
**Macros** are blocks of script that can be reused. There are two main types of macros: **scripted effects** and **scripted triggers**. A macro is usually equivalent to copying the script from where it is defined to where it is used. They are useful for maintaining commonly used [effects](/Effect "Effect") and [triggers](/Trigger "Trigger"), as only one script block needs to be updated to update the effect or triggers across multiple uses.
## Scripted effects and triggers
Scripted effects
**Game folderThis is the folder where the files for this type are stored.:** `common/scripted_effects`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
---
**Related game objects:** [Effects](/Effect "Effect")
Scripted triggers
**Game folderThis is the folder where the files for this type are stored.:** `common/scripted_triggers`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
---
**Related game objects:** [Triggers](/Trigger "Trigger")
Scripted effects and triggers are defined in their respective folders: /common/scripted\_effects/ and /common/scripted\_triggers/
A scripted effect or trigger is defined as a script name and a block of script, for example:
```
setup_colonial_nation = {
	change_government_type = government_type:republic
	add_gold = 100
	capital.province = { change_province_integration = integrated }
	add_reform = government_reform:colonial_subject
	every_owned_location = {
		change_control = control_radical_bonus
	}
	add_country_modifier = {
		modifier = new_colonial_nation_founded
		years = 50
		mode = add_and_extend
	}
}
```
This particular scripted effect is used for setting up colonial nations.
A scripted effect is a regular [effect](/Effect "Effect") block and can use any effect scripting as required. Similarly, a scripted trigger is a regular [trigger](/Trigger "Trigger") block and can use any trigger scripting as required. This includes the use of scripted effects and triggers within other scripted effects and triggers.
### Inline scripted effects and triggers
In [event files](/Event_modding#Inline_scripted_triggers/effects "Event modding"), scripted effects and triggers can be defined for use in that file only. These should not have the same name as a "global" scripted effect or trigger. A name conflict raises an error.
### Localization
*See also: [Localization](/Localization "Localization")*
By default, using a scripted effect or trigger generates the same tooltip as if it were scripted in place.
This behavior can be overridden by adding a respective entry to `effect_localization` and `trigger_localization`. The entry must bear the same name as the scripted effect/trigger.
However, those entries can be lacking in scope access. Thus, it is often convenient to wrap the macro script in a `hidden_effect/hidden_trigger = { }`, `custom_tooltip = { }`, or `custom_description = { }` block. These script blocks function similarly, by hiding the auto-generated tooltip. The first, `hidden_effect/hidden_trigger = { }`, simply prevents any contained script from generating tooltips. The second, `custom_tooltip = { }`, prevents auto tooltips and instead displays a specified localization string. The last, `custom_description = { }`, also sets up a full effect or trigger localization set. It must be ensured that the `text` entry in the `custom_description` must be different as to avoid a conflict with the scripted\_effect/trigger name.
### Arguments
Arguments or parameters can be inserted into scripted effects and triggers using $<arg>$. Here is a definition of such a scripted effect that defines a singular argument - `target`:
```
add_character_to_random_open_cabinet = {
	random_cabinet = {
		limit = {
			NOT = {
				exists = cabinet_member
			}
		}
		add_to_cabinet = $target$
	}
}
```
When the scripted effect is used, it **must** be provided with all the arguments:
```
add_character_to_random_open_cabinet = {
	target = character:maj_gajah_mada
}
```
Note the usage of `$` in the scripted effect definition but not in the call.
Argument names can be anything and are case sensitive.
Arguments can also be inserted inside regular text:
```
add_currency_to_each_country = {
	add_$currency$ = $value$
}
```
then called with
```
add_currency_to_each_country = {
	currency = gold
	value = 15
}
```
These arguments work as literal text replacement, which is why `add_$currency$` can be used. There is no way to pass a value, so for example if an effect or trigger expects a raw integer, it cannot be given the value of a variable this way.
#### Metascripting
As scripted effects arguments are text that is copy-pasted, you can therefore insert whole script blocks into them:
```
metascripting_example = {
	every_owned_location = {
		limit = {
			$limit$
		}
		change_development = 100
	}
}
```
This can be used for example as the following. Note that quote marks are necessary as the passed text contains white space, both spaces and line returns.
```
metascripting_example = {
	limit = "
		province_definition = root.capital.province_definition
	"
}
```
#### Recursion
Scripted effects and triggers can be called recursively but might require a bit of a workaround. There is a base game example for effects, which is implemented as
```
call_recursive_scripted_effect = {
	$effect$
}
```
Example:
```
test_effect = {
	every_neighbor_country = {
		limit = { NOT = { has_variable = is_neighbor_flag } }
		set_variable = is_neighbor_flag
		call_recursive_scripted_effect = {
			effect = "test_effect = yes"
		}
	}
}
```
## Other macros
Beside scripted effects and triggers, there are a few other macro or macro-like script elements.
### GUI function macros
GUI macros
**Game folderThis is the folder where the files for this type are stored.:** `data_binding`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `loading_screen`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
---
**Related game objects:** [GUI script](/GUI_script "GUI script"), [Interface files](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)")
*See also: [Interface modding](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)"), [GUI script](/GUI_script "GUI script")*
GUI function macros are defined in /data\_binding/ in any text file. There are no examples in base Europa Universalis 5 at this time. These macros can be used in GUI and localization functions. GUI macros can use parameterized arguments, where an argument can be passed through the macro to an actual GUI function.
For example:
```
macro = {
    description = "Add a loc key with a trailing newline if a condition is satisfied" #reminder of purpose/function
    definition = "MakeLineIf(Condition, LocKey)" #form of macro for use in interface and localization
    replace_with = "ConcatIfNeitherEmpty(AddLocalizationIf(Condition, LocKey), Localize( 'NEWLINE' ))" #result of macro
}
```
This macro can be called with `[MakeLineIf(boolean, loc key)]`. For example:
```
[MakeLineIf( Not(Country.CanColonize), 'NOT_ABLE_TO_COLONIZE')]
```
This is equivalent to and read by the game as:
```
[ConcatIfNeitherEmpty(AddLocalizationIf( Not(Country.CanColonize), 'NOT_ABLE_TO_COLONIZE'), Localize( 'NEWLINE' )]
```
### Scripted lists
Scripted lists
**Game folderThis is the folder where the files for this type are stored.:** `common/scripted_lists`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
---
**Related game objects:** [Iterators](/Scope#Iterators "Scope")
*See also: [Scope § Iterators](/Scope#Iterators "Scope")*
Scripted lists are defined in /common/scripted\_lists/. These are customized [iterator lists](/Scope#Iterators "Scope") with a built in trigger. They are defined as follows:
```
scripted_list_name = {
	base = base_game_list
	conditions = {
		<triggers>
	}
}
```
A base game list is the same as an iterator/list set without its prefixes. For example, the base game list `country` is used in `any_country`, `every_country`, `ordered_country`, and `random_country`.
Scripted lists filter the base list with given triggers and can be used as `any_<scripted_list_name>`, `every_<scripted_list_name>`, `ordered_<scripted_list_name>`, and `random_<scripted_list_name>`. For example, with a scripted list:
```
general = {
	base = character
	conditions = {
		is_general = yes
	}
}
```
The following example scripts would be equivalent:
```
every_character = {
	limit = {
		is_general = yes
	}
	add_mil = 5
}
every_general = {
    add_mil = 5
}
```
The latter iterator contains the same limit triggers as they are scripted in the list definition.
### Script values
Script values
**Game folderThis is the folder where the files for this type are stored.:** `common/script_value`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `main_menu`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
*Main article: [Script value](/Script_value "Script value")*
Script values, defined in /common/script\_values/, are similar to macros, particularly static script values. In particular, script values can be used in most places that expect a number or numerical value.
### @ values
*Main article: [Script value § @ values](/Script_value#@_values "Script value")*
@ values are intra-file macros. They must be defined in the file where they are used, and can be used in place of most number values.
### Scripted modifiers
Scripted modifiers
**Game folderThis is the folder where the files for this type are stored.:** `common/scripted_modifiers`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `main_menu`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
*Main article: [Mean time to happen § Scripted modifiers](/Mean_time_to_happen#Scripted_modifiers "Mean time to happen")*
*Not to be confused with [Modifier types](/Modifier_types "Modifier types").*
Scripted modifiers are macros that can be defined in `common/scripted_modifiers`.
Here is an example of a scripted modifier definition:
```
gold_scaled_by_prestige_modifier = {
	modifier = {
		add = gold
	}
	modifier = {
		factor = {
			value = prestige
			divide = 100
		}
	}
}
```
This scripted modifier can then be used in a mean time to happen field by using `gold_scaled_by_prestige_modifier = yes`:
```
weight = {
	base = 0
	gold_scaled_by_prestige_modifier = yes
}
```
### Arguments
Scripted modifiers are very similar to scripted effects and triggers in that they can also use arguments that are copy pasted.
Here is an example of argumented scripted modifier and how it is used:
```
gold_scaled_by_currency_modifier = {
	modifier = {
		add = gold
	}
	modifier = {
		factor = {
			value = $currency$
			divide = 100
		}
	}
}
```
```
weight = {
	base = 0
	gold_scaled_by_currency_modifier = {
		currency = stability
	}
}
```
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • Macros • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
