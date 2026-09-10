<!-- source: https://eu5.paradoxwikis.com/Disaster_modding revid: 33328 fetched: 2026-09-09 -->
# Disaster modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

Disaster modding

**Game folderThis is the folder where the files for this type are stored.:** `common/disasters`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/icons/disasters"`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

**Disasters** in Europa Universalis V represent internal situations and turmoil that may befall certain countries. They are represented via an alert and provide a unified interface for dealing with them.

## Disaster structure

```
example_disaster = {
	monthly_spawn_chance = 1

	can_start = {
		stability <= 25
		current_year >= 1400
	}

	modifier = {
		monthly_stability = -0.1
	}

	can_end = {
		OR = {
			current_year > 1500
			var:target_var >= 90
		}
	}

	on_start = {
		set_variable = {
			name = target_var
			value = 0
		}
	}

	on_monthly = {
		random_list = {
			11 = { }
			1 = {
				fire_example_disaster_event = yes
			}
		}
	}

	on_end = {
		remove_variable = target_var
	}
}
```

### Starting a disaster

In order for a disaster to start, the `can_start` field needs to be fulfilled and then every month, the game will have a chance equal to `monthly_spawn_chance` to activate the disaster. Once a disaster has naturally ended, it may not refire without being forcefully activated with a script effect or a console command. When a disaster fires, it executes the effect provided in `on_start`.

Both `can_start` and `on_start` fields are on `country` scope.

Moreover, if `fire_only_once = yes` is set, the disaster will be only able to fire once per country.

`monthly_spawn_chance` as a field accepts any value between 0-1 representing a monthly percentage chance for the disaster to begin. Moreover, it accepts a [scripted value](/Scripted_value "Scripted value"), so the chance can be made dynamic based on current game conditions:

```
monthly_spawn_chance = {
	value = 0
	if = {
		limit = {
			current_year >= 1338
		}
		value = 1
	}
}
```

### Disaster modifier

Disaster might be impact the nation with a modifier - those modifiers are set in `modifier` field.

### Executing monthly effects

`on_monthly` is an effect field that executes monthly. It is executed on the `country` scope, so it can be easily used to calculate variables and to fire events for the disaster.

### Ending a disaster

The disaster will end when the `can_end` trigger field is fulfilled. `can_end` is on the `country` scope, with `scope:disaster` provided with the `disaster type` scope.

When disaster ends, it will fire the `on_end` effect on the `country` scope.

### Mapmode selection

Unlike a [situation](/Situation_modding "Situation modding"), disasters do not have unique mapmodes. However, one can force a disaster panel to bring up an existing mapmode using `map_mode` which accepts a [mapmode key](/index.php?title=Mapmode_Modding&action=edit&redlink=1 "Mapmode Modding (page does not exist)") on the right side.

### Disaster image

Besides manually being assigned icon based on usual icon rules, disasters should also have an image assigned to them using `image`. The right side is a path to the `.dds` illustration.

It can be fetched in GUI system using `GetDisasterIllustration( Arg0 )`, which takes a disaster. If there is no illustration assigned, it will use `"placeholder.dds"` from [DISASTER\_ILLUSTRATION\_PATH](/Defines#DISASTER_ILLUSTRATION_PATH "Defines") define (Vanilla value: `"gfx/interface/illustrations/disaster"`)

### Graphical interface

In order to add a GUI for our disaster, we need to create a `.gui` file that is in the following folder and whose key corresponds to the disaster key:
/Europa Universalis V/game/in\_game/gui/panels/disaster/<key>.gui

Within that file, we need to add a `disaster_panel` widget within which we will add our UI elements. Within the panel, `DisasterView` datacontext is available, allowing to fetch the Disaster for the currently viewed panel with `DisasterView.GetDisaster`.

### Creating events

One can have a disaster icon added at the top of an event window by using [category = disaster](/Event_modding#disaster_event "Event modding") in the event. The icon is pulled according to the [namespace](/Event_modding#namespace "Event modding"): the namespace must be the same as the disaster key.

### Creating hints

A [scriptable\_hint](/index.php?title=Scriptable_hint&action=edit&redlink=1 "Scriptable hint (page does not exist)") can be assigned to a disaster with `hint_tag` field. It will be visible in the alert and the user will be able to open with the hint by shift-pressing the alert.

## References

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

|  |  |
| --- | --- |
| Scripted content | [Actions](/Action_modding "Action modding") • Disasters • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |

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