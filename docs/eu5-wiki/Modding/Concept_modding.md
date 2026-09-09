<!-- source: https://eu5.paradoxwikis.com/Concept_modding revid: 18491 fetched: 2026-09-09 -->
# Concept modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Concept** modding involves the creation of new game concepts to be usable in Europa Universalis V.

## Technical details

Game concepts are located in `common/game_concepts`, usually in the `main_menu` [top folder](/Mod_structure#Top_folders "Mod structure").

For example:

common/game\_concepts/example\_file.txt

## Syntax

Here is example of a simple game concept definition:

```
reformation = {
	alias = { protestant protestants }
	texture = "gfx/interface/icons/situations/reformation.dds"
}
```

`reformation` represents the name of the game concept. It is the key that needs to be localized both with a title and description in [localization](#Localization).
Below are the aliases, which, when used, will be shown in text with their alias localization. When hovered over, the main concept tooltip will use the original title and description.

Last is the `texture` field, which points to the icon texture to be used. There is no implicit icon assignment, the icon must be assigned for each game concept using this field.

### Family and parent

Game concept can be set in a "family" of another game concept using the `family` attribute. As a result, the game concept of the "family" parent will be shown in the tooltip for this concept.
Game concept can also have a "parent" game concept set using `parent`. However, this is unused. Were this to be used, it can be accessed in GUI script using `GameConceptTooltip.GetParentText`.

### Europedia and loading screen entries

By default, all game concepts are shown in the [Europedia](/index.php?title=Europedia&action=edit&redlink=1 "Europedia (page does not exist)"). This behavior can be turned off using `shown_in_encyclopedia = no`.
On the contrary, game concepts will not be shown in the loading screen by default. This behavior can be toggled on using `shown_in_loading_screen = yes`.

### Map mode

Game concept can be set to override current mapmode shown using `tooltip_map_mode`. The keys of mapmodes available can be found in the map mode definitions `gfx/map/map_modes/`.

## Localization

Every game concept needs to have the following localized:

* `game_concept_<key>`
* `game_concept_<key>_desc`

Moreover, every alias needs to be additionally localized:

* `game_concept_<alias_key>`

No description is required, as the alias will use the same description as the main one.

Game concepts and their aliases can be referred to in localization using `[<concept_key>]`, but they are mostly used with the `[<concept_key>|e]`. Both print the respective concept name/alias name alongside providing a tooltip when hovered. The `|e` tag additionally colors the text to the distinct "concept light blue" color.

Game concepts have other references in the datacontext `GC( Arg0 )` global promote which accepts the game concept key and returns a tooltip for game concept, used mainly in GUI.
`Concept( Arg0, Arg1 )` can be used to create a concept tooltip with different than one expected from alias. Arg0 is the concept key, while Arg1 is the text that will be shown.
`SelectGameConcept( Arg0, Arg1, Arg2 )` is used to select between two concepts shown based on a condition. Arg0 is the conditional statement, Arg1 is key of the game concept that should be shown if the condition is true, Arg2 is key of the game concept shown otherwise.

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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • Concepts • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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