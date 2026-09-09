<!-- source: https://eu5.paradoxwikis.com/Culture_modding revid: 14184 fetched: 2026-09-09 -->
# Culture modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

[Cultures](/Culture "Culture") in [Europa Universalis V](/Europa_Universalis_V "Europa Universalis V") are highly customisable with a number of different options.

## Culture definition

Cultures are defined in the in\_game/common/cultures folder.

Each culture needs a language, a color, tags for graphics, and a culture group.

```
welsh = {  #Script name for the culture. Can be anything but is best matched to the in-game localization.
	language = welsh_dialect #The language or dialect spoken by the culture

	color = map_WLS #The map color of the culture. Can either be a reference to a definition in the named_colors folder or a RGB or HSV color.

	tags = { welsh_gfx celtic_gfx british_gfx western_european_gfx european_gfx } #The 3D graphics groups used by the culture in game.

	opinions = { # This culture's starting opinion of other cultures. Can be enemy, negative, neutral, positive, or kindred.
		cornish = kindred
		english = negative
		breton = positive
	}

	culture_groups = { # A list of culture groups this culture belongs to,
		celtic_group
		british_group
	}
}
```

## Culture groups

Culture groups are defined in the in\_game/common/culture\_groups folder.

The only thing a culture group needs is it's script name.

```
celtic_group = {
}
```

A culture can be part of multiple culture groups.

## Languages and dialects

Languages are defined in the in\_game/common/languages folder.

```
brythonic_language = { #Script tag for the primary language.

	color = map_WLS #The map colour for the language.

	family = celtic_language_family #The family group of the language.

	male_names = {
		[Male First Names]
	}
	female_names = {
		[Female First Names]
	}

	dynasty_names = {
		[Dynasty Names]
	}

	ship_names = {
		[Ship Names]
	}

	lowborn = {
		[Lowborn Surnames]
	}

	patronym_prefix_son = "patronym_prefix_welsh_son" #Optional: The patronym prefix for sons.
	patronym_prefix_son_vowel = "patronym_prefix_welsh_son_vowel" #Optional: The patronym prefix for sons as a vowel if different from the patronym_prefix_son.
	patronym_prefix_daughter = "patronym_prefix_welsh_daughter" #Optional: The patronym prefix for daughters.

	dialects = { #Dilects of the language.
		welsh_dialect = {

		}

		breton_dialect = {

		}
	}
}
```

### Patronym properties

Newly generated characters can be named after their parents. Prefixes and suffixes can be applied to these names.

* `patronym_prefix_son` for a patronym prefix for sons. For example "mac" in Gaelic.
* `patronym_prefix_son_vowel` The patronym prefix for sons as a vowel if different from the `patronym_prefix_son`. For example "mág" in Gaelic
* `patronym_prefix_daughter` = The patronym prefix for daughters. For example "nic" in Gaelic.
* `patronym_prefix_daughter_vowel` = The patronym prefix for daughters as a vowel if different from the `patronym_prefix_daughter`. For example "nig" in Gaelic.

* `patronym_suffix_son` for the patronym suffix for sons. For example "sson" in Swedish.
* `patronym_suffix_daughter` for the patronym suffix for daughters. For example "sdotter" in Swedish.

### Location-based name properties

There are six location-based name properties that can be applied to characters. Newly generated character names can be named after a location on the map with the following prefixes and suffixes.

* `location_prefix` a location-based prefix for surnames. For example "de" in French.
* `location_prefix_vowel` a location-based prefix for surnames as a vowel if different from `location_prefix`. For example "d'" in French.
* `location_suffix` a location-based suffix for surnames.
* `location_prefix_elision` a list of location prefixes that the game will check against. If the location the character is being named after has a match to any of the strings in `location_prefix_elision`, then it will not apply the `location_prefix`. This is to prevent things such as an Arabic character being named "al-Al-Basra".

### Dialects

Each dialect can have any of the properties of the language within it, except for its own dialects. The game will read from the dialect's specific properties if they exist, otherwise they will use the same as the parent language.

## References

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

|  |  |
| --- | --- |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |

|  |  |
| --- | --- |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • Culture • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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