<!-- source: https://eu5.paradoxwikis.com/Mod_structure revid: 34659 fetched: 2026-09-09 -->
# Mod structure
This article is [timeless](/Category%3ATimeless "Category:Timeless") and should be accurate for any version of the game.
Understanding of Europa Universalis V's mod structure is critical to modding the game.
## Mod folder location
By default, the folder for local mods is located at:
%USERPROFILE%/Documents/Paradox Interactive/Europa Universalis V/mod
Each local mod needs its own folder in there. It is also expected all of them have [Metadata](#Metadata), otherwise the game will error.
Mods downloaded from the Steam workshop are located in Steam/steamapps/workshop/content/3450310 directory.
## Metadata
Mods require a `metadata.json` file within a `.metadata` folder to provide additional information for the launcher.
The `.metadata` folder should also contain a `thumbnail.png` file that serves as the thumbnail both inside the launcher and for the workshop. The thumbnail must be smaller than 1MB and is recommended to be 512x512.
The basic structure for the metadata file looks like this:
```
 {
 	"name" : "Test", 					# The display name of your mod
 	"id" : "testmod", 					# Id of the mod for recognition
 	"version" : "1.2",					# Version of the Mod (x.x.x or x.x number format where x is integers)
 	"supported_game_version" : "1.0.*",	# Supported Game Version. The '*' is a wildcard which means any number will be supported. 'x' also works here but is less common.
 										# Using it means that this mod is expected to work on this version regardless of hotfix
 	"short_description" : "",			# Short Description to be used as initial description in Steam upload
 	"tags" : [							# List of Tags that will be used in the uploaded mod
 		"Situations",
 		"Religions"
 	],
 	"relationships" : [
 		{
 			"rel_type" : "dependency",			# only available option. Makes this mod require the mod/dlc under the "id" of the mod
 			"id" : "anothermod",				# the "id" field of the target mod/dlc
 			"display_name" : "TestMod2",		# If the mod under "id" cannot be found, this text will be displayed as the mod name
 			"resource_type" : "mod",	 		# either "mod" or "dlc"
 			"version" : "1.2.*"					# version of the target dependency
  		},
 		{
 			# Another relationship entry here.
 		}
 	],
 	"game_custom_data" : {						# Custom Data, only supports replace_paths right now
 		"replace_paths" : [
 			"events",							# Only gets rid of files in loading in events/, not in its subfolders.
 			"common/casus_belli"
 		]
 	}
 }
```
## Mod folder structure
The mod folder is the counterpart of base Europa Universalis V's `game` folder. Thus, the structure within that folder must be maintained for the mod to function correctly.
This means, that the 3 top folders at the top should be `in_game`, `loading_screen` and `main_menu`.
Examples of correct paths:
* mod/TestMod/in\_game/events/event\_file.txt
Examples of incorrect paths, that often add an unnecessary level or omit one of the 3 top folder specifications:
* mod/TestMod/game/in\_game/events/event\_file.txt (Unnecessary addition of `game`)
* mod/TestMod/events/event\_file.txt (Missing [top folder](#Top_folders))
* mod/TestMod/in\_game/on\_action/on\_action\_file.txt (Missing common folder inside in\_game)
Be certain that you spelled the folders and paths correctly. Mispelled folders are not read correctly and will not generate errors.
Certain folders, namely events, can have any number of subfolders, which can be arbitrarily named. This is mainly useful for organization, to keep related files closer together.
### Top folders
The three top folders are `in_game`, `loading_screen` and `main_menu`.
Their purpose is to load game resources in certain batches, in order they are loaded:
* **loading\_screen** - this is the first directory that is read and contains information required for the pre-menu loading screen. When this directory is being loaded, a black screen with Paradox Interactive and Paradox Tinto logo is visible.
* **main\_menu** - files that are needed to display everything in the main menu (main menu, mod view, multiplayer view) are loaded. When this directory is being loaded, you can see a background with a "Loading" bar at the bottom. This is the loading screen before the main menu.
* **in\_game** - the rest of the files needed for gameplay are loaded here. This is loaded while you are in the main menu and it is required to enter the game lobby (the lobby is where you can select which country to play, may view the map etc.)
Everything placed below the top folders shares the same [general layout](#General_layout). The top folders are here **only** to decide load order.
### General layout
Below the [top folders](#Top_folders), which load files in batches, are game folders. They all follow a specific, common layout, which compartmentalizes different aspects of the game.
There are many different subfolders, but the most notable are:
* `common` - this is the folder with the majority of interactable game concepts are and where most easily moddable types can be found.
* `events` - folder where [events](/Event_modding "Event modding") are made, one of the most basic and primary ways of delivering flavor to the end user.
* `gui` - folder where the [GUI](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") can be edited.
* `gfx` - folder that stores [graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") for use in the UI.
* `localization` - folder where various game strings are [localized](/Localization "Localization") into the respective languages.
* `setup` - folder that contains the script files that are responsible for creating the starting [setup](/Setup_modding "Setup modding")
### Overriding files
A file in vanilla or in previously read mod can be entirely overridden by a file in the same directory and of the same name.
For instance a mod file like this:
mod/TestMod/in\_game/common/vegetation/00\_default.txt
will overwrite this:
Europa Universalis V/game/in\_game/common/vegetation/00\_default.txt
even if it the mod's `00_default.txt` is empty.
This behavior is expected and will not inherently generate any errors, unless one overwrites a file without compensating for outside references.
### Database entry modes
Database entry modes are certain "commands" that can be entered before a game database entry to allow for interaction with existing objects (e.g `INJECT:sparse = { }`).
They are **only** usable in the vast majority of subfolders in `common` with the notable exception of `on_action`(see [On actions#Modding on actions](/On_actions#Modding_on_actions "On actions")) and `defines`(see [Defines#Define modding](/Defines#Define_modding "Defines")).
Database entry modes permit easy injection into and replacement of existing game objects without the need to override those objects by tricking the game into loading mod files earlier/later with different naming schemes.
Here is a table of every database entry mode and what it does:
| Entry Mode | Error if object missing | Description |
| `INJECT:key` |  | Adds the insides into the original object |
| `REPLACE:key` |  | Replaces the original with this definition |
| `TRY_INJECT:key` |  | Adds the insides into the original object. If the object does not exist, ignores this. |
| `TRY_REPLACE:key` |  | Replaces the original with this definition. If the object does not exist, ignores this. |
| `INJECT_OR_CREATE:key` |  | Adds the insides into the original object. If no such object, exists, creates it |
| `REPLACE_OR_CREATE:key` |  | Replaces the original with this definition. If no such object, exists, creates it |
Note that INJECT does not work for scripted effects and scripted triggers. Using INJECT for either of these will result in the original effect/trigger getting overwritten.
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • Mod structure • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
