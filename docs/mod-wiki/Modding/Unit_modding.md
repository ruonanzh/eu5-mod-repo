<!-- source: https://eu5.paradoxwikis.com/Unit_modding revid: 35028 fetched: 2026-09-09 -->
# Unit modding
**Unit** modding refers to the creation of new units in the game and defining their abilities.
## Unit definitions
Unit definition
**Game folderThis is the folder where the files for this type are stored.:** `common/unit_types`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
New types of subunits can be defined using unit definitions.
### Example
```
a_caterans = {
	category = army_infantry
	copy_from = a_age_1_traditions_infantry
	light = yes
	buildable = no
	levy = yes
	combat_speed = 0.05
	flanking_ability = 1.5
	initiative = 5
	mercenaries_per_location = {
		pop_type = peasants
		multiply = 0.01
	}
	gfx_tags = { sword_tag light_tag }
}
```
### Templating units and copy from
`copy_from` is used to copy stats from a theoretical baseline. Additionally, the tooltips for a specific unit will show how much the unit stats differ compared to the unit that is being copied from. Therefore, it is recommended to create base subunit definitions for each unit at every age, and create unique units that would slightly modify the stats of units they copy from.
The unit that is being copied from must be loaded before the unit that is copying. When editing existing templates with `INJECT`, the mod file must be loaded before any copying takes place, otherwise the the unmodified template will be copied instead.
The following aspects are copied:
* Unit category
* Build time
* Demands
* Age association
* Terrain Modifier impacts
* Whether the unit is a light unit
* Whether the unit uses ship names
* Whether the unit is used as a levy
### Unit statistics
An important part of any subunit definition is the unit stats, which are inserted straight into the definition.
Those statistics, like others, may be inherited from another unit using `copy_from` and are added onto the base stats of the subunit category.
Those stats also accept [named script values](/Script_value#Named_values_and_inline_values "Script value"):
```
maritime_presence = 0.24
maritime_presence = ship_above_medium_maritime
```
Those are equivalent to each other when `ship_above_medium_maritime = 0.24`.
The following is a list of possible unit stats and what they do:
| Stat | Land or Naval | Behavior |
| **max\_strength** | Land | Defines the amount of men in the subunit |
| **crew\_size** | Naval | Defines the amount of crewmen in the naval subunit |
| **combat\_power** | Land | Defines the combat power of the land subunit |
| **cannons** | Naval | Defines the cannons this naval subunit has |
| **frontage** | Both | How much frontage the subunit takes up. |
| **combat\_speed** | Both | Defines the combat speed of the subunit |
| **initiative** | Both | How much initiative the subunit has. |
| **hull\_size** | Naval | The size of the hull. |
| **artillery\_barrage** | Land | Gives bonuses to siege progress based on the sieged fort level. |
| **bombard\_efficiency** | Land | Impacts the chance of units to fire during the bombard phase. |
| **flanking\_ability** | Both | Defines the flanking ability of the subunit. |
| **secure\_flanks\_defense** | Land | Provides the "secure flanks" bonus. |
| **morale\_damage\_taken** | Both | Affects the amount of morale damage taken in %. |
| **morale\_damage\_done** | Both | Affects the amount of morale damage dealt in %. |
| **strength\_damage\_taken** | Land | Affects the amount of morale damage taken in %. |
| **strength\_damage\_done** | Land | Affects the amount of morale damage done in %. |
| **food\_storage\_per\_strength** | Both | How much food the subunit may store to be used. |
| **food\_consumption\_per\_strength** | Land | How much food the subunit utilizes. |
| **maritime\_presence** | Naval | How much frontage the maritime presence the ship projects when stationed in a coastal tile. |
| **movement\_speed** | Both | Defines the movement speed of the unit. |
| **supply\_weight** | Land | Determines the supply weight as a percentage of max strength to be compared against supply limit. |
| **attrition\_loss** | Both | How much additional attrition damage the unit takes. |
| **blockade\_capacity** | Naval | Determines how much blockade capacity the ship has. |
| **anti\_piracy\_warfare** | Naval | Defines the anti piracy impact of the subunit. |
| **transport\_capacity** | Naval | Determines how much manpower one instance of this subunit may transport. |
### Category and age
A subunit must be assigned to a specific [unit category](#Unit_categories) using `category`:
```
category = army_infantry
```
It must also be assigned or inherit an `age` parameter, which is used for UI and AI logic. Levy combat power is also dependent on the age index multiplied by [LAND\_LEVY\_COMBAT\_AGE\_MUL](/Defines#LAND_LEVY_COMBAT_AGE_MUL "Defines") define (Vanilla value: `nil`)
### Other parameters
* `default = yes` can be used to make a unit into a "default" one. The only use of this is in the unit viewer console command.
* `use_ship_names = yes` is used to make the unit have ship naming system.
* `light = yes` is used to mark the unit as a light unit. Whether a unit is light or not is used in the army upgrade logic. A light infantry unit will have a different upgrade from a "heavy" infantry unit.
* `buildable = no` can be used to mark the unit as not buildable - nations will not be able to build those units explicitly. Levy units need to be marked as non buildable.
* `levy = yes` marks this unit as intended to be used by a levy. This is used by the [definition\_is\_for\_levy](/Triggers#definition_is_for_levy "Triggers") trigger. Levies have a minimum max strength definition that is determined by the \* \* `minimum_levy_size` value of their [unit category](/index.php?title=Unit_category&action=edit&redlink=1 "Unit category (page does not exist)").
`color` is a parameter that accepts a [script color](/index.php?title=Script_color&action=edit&redlink=1 "Script color (page does not exist)"), but appears to be unused.
### Upgrading logic
A chain of upgrades can be defined for a unit using `upgrades_to_only` and `upgrades_to`, which accept keys of units that the unit can be upgraded to.
When `upgrades_to_only` is defined, the unit will only and only be upgradeable if the one subunit on the right side is available.
Otherwise, `upgrades_to` defined the preferred unit that can be upgraded to, if available. If it is not available, it will try to find a `light` and non-light counterpart in the next age, and if that is not available, it will pick the next higher-age equivalent. A unit upgrade must have a higher age index than the original -
### Terrain impacts
Subunits can be made to have their power vary in certain terrains using `combat` and `impact` parameters.
Those arrays accept pairs of keys and values, where a key is either a [vegetation](/Terrain_modding#vegetation "Terrain modding"), [topography](/Terrain_modding#topography "Terrain modding") or [climate](/Terrain_modding#climate "Terrain modding"). The right side needs to be a number.
```
combat = {
	jungle = -0.10
	wetlands = -0.10
	mountains = -0.10
}
```
`combat` affects the combat power of those subunits in target terrain, while `impact` is used to calculate the impact of modifiers on the unit. In game, however, `impact` is localized as "Movement".
### Potential
To determine if a country can recruit the target subunit definition, `country_potential` is used, which is evaluated where ROOT is the country that owns the location that is being evaluated. Subunits can also be locked by advances when their key is provided in an [unlock\_unit](/Advance_modding#unlock_unit "Advance modding") statement.
Moreover, `location_potential` and `location_allow` statements exist to check if a unit is buildable in target location. Potential is used to determine if the unit should show up as buildable - and allow if it can be built, even when showing up.
`build_time_modifier` can be used to affect the speed of building this unit, added on top of 1. `-0.25` will result in a speed multiplicative of 0.75.
`limit` is a script value that can be used to limit the amount of a subunit that a country may have. It is evaluated on the country scope.
### Good demands
Good demands are used to set how much of a certain good demand is created in the market where the unit is stationed or constructed. Both of those point towards [good demand objects|](/Goods_modding#Demands "Goods modding").
`construction_demand` is used to determine the demand of this unit during this construction.
### Mercenaries
Pops which fulfill requirements of a subunit's `mercenaries_per_location` may passively become mercenaries.
The syntax for `mercenaries_per_location` is simple and has only two members:
```
mercenaries_per_location = {
	pop_type = nobles
	multiply = 0.25
}
```
`pop_type` represents the pop type which might try their luck as mercenaries, while `multiply` is the maximum location share of pops that might try their luck as mercenaries. Both of those values must be provided - not providing pop\_type will not match all pop types, instead it will cease to work.
### Gfx tags
*Main article: [Unit graphics modding](/index.php?title=Unit_graphics_modding&action=edit&redlink=1 "Unit graphics modding (page does not exist)")*
`gfx_tags` is a set of strings that represent tags that are used when determining the icon for the subunit and its look ingame.
### Localisation
Each subunit definition should have the following keys localized:
* `<key>` representing the title
* `<key>_desc` representing the description
## Unit categories
Unit category
**Game folderThis is the folder where the files for this type are stored.:** `common/unit_categories`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
Unit categories are the basis for unit creation. They define the quintessential split between infantry, cavalry, artillery and so forth.
### Example
```
army_infantry = {
	is_army = yes
	assault = yes
	is_garrison = yes
	movement_speed = 2.5
	build_time = standard_inf_recruitment_time
	max_strength = 0
	supply_weight = 1.0
	food_storage_per_strength = 1
	food_consumption_per_strength = 1
	damage_taken = 1.0		#infantry vs infantry in size
	frontage = 1
	initiative = 1
	combat_speed = 2
	flanking_ability = 1.0
	secure_flanks_defense = 0.25
	maintenance_demand =  infantry_maintenance
	construction_demand = infantry_construction
	minimum_levy_size = 1
	startup_amount = 20
	ai_weight = 0.5
}
```
### Stats
Unit categories share the same stat definitions with subunit definitions. More on that in [Unit statistics](#Unit_statistics).
Values added here get added onto the ones in the subunit definition.
### Startup amount
If possible, the game will try to create starting professional armies for nations with enough manpower. The amount of each unit that gets created in this way is capped using `startup_amount`.
### Basic behavior toggles
* `assault = yes` can be used to make this unit category able to assault forts.
* `bombard = yes` is used to make this units of this category able to attack from the backline in the bombard phase. The likelihood of this happening is defined on unit level using [bombard\_efficiency](#bombard_efficiency).
* `transport = yes` defines this unit as a unit that may transport other units - used for transport ships in base game.
* `support = yes` defines this category as "support" - enabling special action to detach support units and automatically assigning them to reserves.
* `is_garrison = yes` is used to define this category as the category that is used for determing the defender units in a fort garrison. There must be a one and only one garrison category.
### Naval categories
A naval unit category is created by providing a unit category `is_army = no` token.
### Goods demands in unit categories
If a subunit definition fails to provide a demand for construction or maintenance, it will be pulled from category instead. The syntax is otherwise the same as in [subunit demand syntax](#Good_demands).
### Category terrain impact
Subunit categories, like subunit definitions, can also have additional combat power depending on terrain. This is not the case with modifier impact, though. The syntax is otherwise the same as in [subunit terrain impact syntax](#Terrain_impacts):
```
combat = {
	jungle = -0.10
	wetlands = -0.10
	mountains = -0.10
}
```
### Ai unit ratio
`ai_weight` is a number used to determine what total share of units this category should fill for the AI. If the total share of all categories is 1 and this category has 0.3, the AI will seek to have 30% of units be of this type.
### Minimum levy size
`minimum_levy_size` is a number that determines what the minimum max strength of a levy of this category should be. The `minimum_levy_size = 1` in an infantry category dictates that all infantry levies will be at least 1000 men strong.
### Damage taken multiplier
`damage_taken` is a number used to override the % of damage taken by a subunit of this category. The default value is 1, so a `damage_taken = 0.5` will decrease damage taken by half.
### Build time
`build_time` is used to define the recruitment time of this unit category. It is then modified by the individual unit's `build_time_modifier` and by the [Recruitment methods](/index.php?title=Recruitment_methods&action=edit&redlink=1 "Recruitment methods (page does not exist)"). It may also accept [named script value](/Script_value#Named_values_and_inline_values "Script value").
### Prices
Each subunit category should have the following [prices](/index.php?title=Price_modding&action=edit&redlink=1 "Price modding (page does not exist)"):
* `<key>_build`
* `<key>_reinforce`
* `<key>_maintenance`
### Hardcoded categories
`navy_galley`, `navy_light_ship`, `navy_heavy_ship`, `navy_transport` are 4 categories that used internally by the game code and should always be present.
## Unit abilities
Unit ability
**Game folderThis is the folder where the files for this type are stored.:** `common/unit_abilities`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
Unit abilities are actions that can be done on units a country owns. They can be toggleable modifiers, a single-time action, and much more.
### Example
```
march_to_sound_of_guns = {
	duration = -1
	toggle = yes
	army_only = yes
	cancel_on_combat_end = no
	allow = {
		is_army = yes
		has_commander = yes
		is_exiled = no
		in_retreat = no
	}
	modifier = {
	}
	start_effect = {
		move_to_assist_on_adjacent_combat = yes
	}
	finish_effect = {
		move_to_assist_on_adjacent_combat = no
	}
	finished_when = {
		OR = {
			is_exiled = yes
			in_retreat = yes
			has_commander = no
		}
	}
	ai_will_do = {
		value = -1
	}
}
```
### Potential
`allow` trigger on the unit is used to determine if the unit ability can be used.
`hidden` unit trigger will hide the unit ability if it is fulfilled - notably the opposite behavior of what tends to be called potential.
`army_only = yes` can be used to make this ability only usable on land armies - otherwise the ability will be hidden.
Likewise, `navy_only = yes` will enforce the same, but for navies.
Moreover, if a unit ability is used in a [unlock\_ability](/Advance_modding#unlock_ability "Advance modding") statement - it will also require such an advance.
### Effects
When a unit ability is used, it will fire `start_effect` effect on the unit scope.
Additionally, when an ability finishes, it will fire `finish_effect` on the unit scope - this is only used for [toggleable actions](#Toggling_actions).
### Toggling actions
Some unit abilities can be made to be toggleable, i.e. they remain active until they are cancelled either by the country, or by one of the scripted requirements in [Cancelling unit actions](/index.php?title=Cancelling_unit_actions&action=edit&redlink=1 "Cancelling unit actions (page does not exist)").
This is done by using `toggle = yes`.
`duration` can be used to set a timer for when the unit ability should be disabled.
While toggled, the unit will receive unit modifiers in `modifier` block and whenever they enter a new location, the effects in `on_entering_location`, executed on unit scope. The location which was just entered is then easily accessible using [unit\_location scope link](/Scope_links#unit_location "Scope links").
### Cancelling unit actions
If a unit ability is toggleable and active, the game will check every day if its `finished_when` trigger is fulfilled - `finished_when` is a unit scope trigger, which has no additional scopes.
Additionally, additional settings exist to make the ability toggle react more actively to unit actions:
* `cancel_on_move = yes` will cancel the unit ability if a movement command is issued
* `cancel_on_combat = yes` will cancel the unit ability if the unit enters combat
* `cancel_on_combat_end = yes` will cancel the unit ability if the unit finishes combat
### Other parameters
* `block_reorg = yes` will block the unit from being disbanded, split, turned into mercenaries and other actions that could undermine the structure of the unit.
* `confirm = yes` will force the unit ability to seek confirmation from the user for whether they want to use it.
* `soundeffect` is in the readme file but does not seem to function.
* `animation_gfx_override` can be used to change the unit animation. 0 is idling, 1 is attacking, 2 is movement, 3 is retreating, 4 is charging.
* `map = yes` seems to be unused.
* `idle_entity_state` seems to be unused.
* `move_entity_state` seems to be unused.
* `available_states` seems to be unused.
* `ai_allow_plan_slowdown` seems to be unused.
### Unit action ai
The ai desire to use a certain unit ability can be modified using `ai_will_do` script value - if it evaluates to above 0, AI will want to use the unit ability.
The `ROOT` on this scope is the unit and location and unit owner are provided with <scope>scope:location and `scope:owner`.
The cancelling of active unit abilities is governed by `ai_will_revoke` script value which accepts the same parameters. If it is above 0 - ai will want to revoke it.
## Recruitment methods
Recruitment method
**Game folderThis is the folder where the files for this type are stored.:** `common/recruitment_method`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
Recruitment methods are various settings that determine how fast a unit is built by the country and how that might impact the unit.
Here is an example of a recruitment method:
```
elite_training = {
	army = yes
	experience = 20
	build_time = 0.5
}
```
### Parameters
Recruitment methods have only five parameters:
* `army` is a boolean used to determine whether this recruitment method should be used by land forces or by naval units.
* `default` is a boolean used to determine whether this recruitment method should be the default one selected. There must be only one default per land/naval type.
* `experience` is an additional amount of experience added to the unit when recruitment with this recruitment method is finished. Values should be from 0 to 100.
* `strength` is a value that determines the size of the unit when the recruitment finishes. The value added is added to 1, so a value of -0.75 will result in 0.25. Even if a strength is reduced by -75.0% though, the manpower cost remains the same.
* `build_time` works in a similar fashion to `strength` and modifies the time taken.
### Required methods
Two methods are used by the game internally and should not be removed:
* `normal_training`
* `normal_navy_method`
### Localisation
Each recruitment method should have the following localized:
* `<key>` representing the title
* `<key>_desc` representing the description
## Levies
Levy definition
**Game folderThis is the folder where the files for this type are stored.:** `common/levies`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
Levy definitions are used to determine what levies will be raised out of what pop types at the current stage in the game.
Here is an example of a levy definition:
```
levy_a_late_longbowmen = {
	size = levy_generic_infantry_size
	allowed_pop_type = peasants
	allow = {
		unit_longbowmen_pop_trigger = yes
	}
	unit = a_late_longbowmen
}
```
This script will try to make levies of size "levy\_generic\_infantry\_size" out of peasant pop types that fulfill the `unit_longbowmen_pop_trigger` on the pop. Those pops will be of a\_late\_longbowmen [subunit type](#Unit_definitions).
### Parameters
`size` is an integer or a literal [static value](/Script_value#Static_values "Script value") that is used to determine the size of the levy. This value is not a dynamic scripted value!
`unit` represents the [subunit type](#Unit_definitions) that this levy will organize into. That subunit definition must have `buildable = no` set.
### Allow parameters
`allow` is a trigger on `pop` scope to check if the selected pop can be turned into this levy. Additionally `country_allow` is a country scope that determines if this levy is allowed for them.
To determine what pop types can be part of this levy, `allowed_pop_type` is used. There can be multiple pop types that can be part of a levy.
```
	allowed_pop_type = peasants
	allowed_pop_type = laborers
	allowed_pop_type = tribesmen
```
Moreover, pops can also be limited based on their culture using `allowed_culture`.
### Naval levies
Naval levies use a slightly different system - here `allow` is evaluated to decide the one pop that owns the ship - and to treat them as the owner of this ship. The rest of the pops that are used to fill the `size` are sourced from the pops that fulfill `allow_as_crew`.
Those levies do not use `allowed_pop_type` and `allowed_culture`.
### Unlocking levies
Besides locking behind `allow_country` and `allow`, levies can also be locked by advances when their key is provided in an [unlock\_levy](/Advance_modding#unlock_levy "Advance modding") statement.
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • Units • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
