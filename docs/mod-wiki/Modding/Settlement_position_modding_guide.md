<!-- source: https://eu5.paradoxwikis.com/Settlement_position_modding_guide revid: 29868 fetched: 2026-09-09 -->
# Settlement position modding guide

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

This guide deals with the relocation of the settlement position within a location.

## Debug mode

To do this, you will need to have debug mode enabled so that you can access the console and use console commands. This guide assumes you already know how to enable debug mode and open the console. If not, please refer to the guide on [console commands](/Console_commands "Console commands").

## Getting the settlement coordinates

### Selecting a location

First, select the location whose settlement you want to move to a different position. For the purpose of this guide, we will be relocating the settlement in the `zalavar` location in Hungary, which, at the time of writing, has its town placed incorrectly.

### Getting the new coordinates

1. To move the settlement to a different location, you will need to get its new coordinates. To do this, open the console and type `copy_mouse_pos`, but do not press `↵ Enter` yet. In our case, the settlement of `zalavar` is currently positioned roughly in the middle section of the `lake_balaton` coastline, but its actual location should be near the southwestern edge of the lake.
2. Move your cursor to the desired spot within the location where you want to place the settlement, then press `↵ Enter`.

Pressing `↵ Enter` will copy your cursor’s coordinates to the clipboard. Then, pressing `CTRL + V` in the console will paste the saved coordinates, which should look something like this: `8475.943 3.1205864 6065.1533` These coordinates will be used in the next step.

## Moving the settlement

Once we have the new coordinates, we can move the settlement to the desired position within the location. Most locations have their settlement positions generated automatically, with only a few having predefined coordinates. These custom coordinates are stored in the following file: /Europa Universalis V/game/in\_game/gfx/map/locators\_override/locators\_override.txt.

Inside the file, there are many location settlement entries, all following the same format:

```
44 = {
	position = {8349.87 3.5126057 6289.352}
	province = prague
	type = vfx
}
```

Following this format, we will create two entries for our location of `zalavar`, the only difference being in the `type`, since we are going to move both its name and the 'dot' on the map `type = city`, and its model of buildings `type = vfx`. Using our new coordinates, our entries should look like this:

```
45 = {
	position = {8475.943 3.1205864 6065.1533}
	province = zalavar
	type = vfx
}

46 = {
	position = {8475.943 3.1205864 6065.1533}
	province = zalavar
	type = city
}
```

Once you reload the game, the settlement of `zalavar` will be placed at your new coordinates.

## Updating map objects

Although your settlements will move to the desired coordinates even without this step, skipping it will cause the following two errors to appear in your error log:

```
Locator transform overrides modified. Make sure to update them with the command [MapObjects.GenerateGameLocators city] and copying the 'Paradox Interactive/Europa Universalis V' locators file into the project
Locator transform overrides modified. Make sure to update them with the command [MapObjects.GenerateGameLocators vfx] and copying the 'Paradox Interactive/Europa Universalis V' locators file into the project
```

In order to get rid of these errors, we will need to do exactly what the error says.

1. Open the console and type the following console commands: `MapObjects.GenerateGameLocators city` and `MapObjects.GenerateGameLocators vfx`.
2. Navigate to the folder where your files are generated. For Windows users, this is usually located at `Documents\ParadoxInteractive\EuropaUniversalisV`.
3. There, you should be able to find two generated files, namely `generated_locators_city` and `generated_locators_vfx`.

You will need to copy the contents of those generated text files into the corresponding files in your game or mod directory. These files are located at /Europa Universalis V/game/in\_game/gfx/map/map\_objects and are named `generated_map_object_locators_city` and `generated_map_object_locators_vfx`. However, proceed with caution: you cannot simply drop the generated files into the folder. The generated versions do not share the same filenames as the ones used by the game, and they also lack a proper layer setting on the sixth line. For example, you can do one of the following:

* Open the generated file, select all its contents, and paste them into the corresponding file in the game directory. Then edit the sixth line and add either `layer="vfx_layer"` or `layer="cities_layer"`, depending on which file you are replacing.
* Alternatively, delete the original game files, paste the generated files into their place, and rename them to the correct filenames—for instance, renaming `generated_locators_city` to `generated_map_object_locators_city`. After that, add either `layer="vfx_layer"` or `layer="cities_layer"`, depending on which locator file you are working with.

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
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • Settlement position modding guide |

|  |  |
| --- | --- |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |