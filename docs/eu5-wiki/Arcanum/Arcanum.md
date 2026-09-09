<!-- source: https://eu5.paradoxwikis.com/Arcanum revid: 22221 fetched: 2026-09-09 -->
# Arcanum

**[Modding tool](/Category%3AModding_tools "Category:Modding tools")**: Arcanum

Arcanum

[![ArcanumLogo.png](/thumb.php?f=ArcanumLogo.png&width=330)](/File%3AArcanumLogo.png)

---

**Type**

Universal Editor

---

**Author(s)**

Minnator, MelCo

---

**Status**

Released 1.0

---

**Github**

[Link](https://github.com/The-Arcanum-Project/Arcanum)

---

**Other**

Under continuous development

Arcanum

[![ArcanumLogo.png](/thumb.php?f=ArcanumLogo.png&width=165)](/File%3AArcanumLogo.png)

---

**Type**

Universal Editor

---

**Author(s)**

Minnator, MelCo

---

**Status**

Released 1.0

---

**Github**

[Link](https://github.com/The-Arcanum-Project/Arcanum)

---

**Other**

Under continuous development

[![Arcanum logo.png](/thumb.php?f=Arcanum_logo.png&width=300)](/File%3AArcanum_logo.png)

Arcanum is a modding tool meant to suit all your needs for EUV modding, which is actively under development and already released in 1.0.

The tool is mainly being developed by Minnator and MelonCoaster with the help of CzerstfyChlep, zulacecek.

Join the official [Arcanum discord server](https://discord.gg/CXFGsEgugn) to receive the latest updates, report bugs or request features.

---

GitHub: [Source code](https://github.com/The-Arcanum-Project/Arcanum)

## Documentation

The official documentation of Arcanum can be found [here](https://the-arcanum-project.github.io/Arcanum/user/about-arcanum.html).

*This documentation is very much WIP, but still already holds valuable information.*

## State

As Arcanum is still in development, this list will grow as time goes on.

### Current

* **Syntax Analysis**: Detailed error logging for any mistakes in the loaded mods with pinpointing the error to file, line and char as well as tips on how to resolve them
* **Editing History**: Full undo / redo tree capabilities
* **Interactive Map**: A map to select any amount of locations to edit at once or to infer data from
* **Hot Reloading**: Reload any external changes to files while Arcanum is already running
* **Broad Editing Support**: Support for more than 40 different game objects to be edited, more in the future
* **Search** **Anything**: The build in Queastor has an extensive search index to help you find anything, even when misspelling
* **Specialized Editors**: Specialized editors to simplify and ease the modding of Pops, Development, Province/Area/Region/SuperRegion/Continent groups...
* **Smart Saving** Only the objects you modified will change in the file to keep your git commits clean and readable
* **INJECT/REPLACE Optimizations** When saving, Arcanum automatically optimizes the usage of `INJECT/REPLACE` in your mod. This behavior is customizable in the settings
* [**Headless Validation**](#Headless_Validation) Arcanum can be run headless via CLI to only validate the specified game and mod files

### Planned or already in the works

* Map Editor with extensive automation capabilities
  + Automatic generation of coastal waters
  + Automatic generation of ocean streams
  + Smart subdivision of locations
  + Importing data from overlaid graphs / images
* Automatic Error correction
* In depth localization editing and translation via DeepL
* Plugin Support
* User defined map modes just like EUV map modes
* Script execution, validation, debugging
* Map exporting with height map, normals, overlaid map modes and more
* Height map editor and baker

## Features

### Error Log

[![](/thumb.php?f=ErrorLogExample.png&width=300)](/File%3AErrorLogExample.png)

The Error Log of Arcanum showing issues detected in the Vanilla files of EUV

Arcanum features a detailed error logging system, that is able to detect and report syntax aswell as contextual errors in the loaded mods and vanilla files.
These errors are categorized into different severity levels, and can be filtered and sorted in various ways to quickly find what you are looking for.
The error log is automatically generated whenever a mod is loaded, but additional validations can be triggered via the console (`F8`).

When selecting an error, Arcanum will display a detailed description of the error, possible ways to resolve it, and also show a small preview of the faulty file where the error is located.
To immediately jump to the faulty line, simply press the button in the bottom right corner of the window.
A warning might pop up, as Arcanum will launch the default text editor for the file type, which is not part of Arcanum itself.

After fixing the error and saving the now corrected file, a popup will appear stating that external changes were detected and asking whether to reload the file.
Press *Yes* to reload the file and have Arcanum re-validate the file.
For larger issues it is recommended to relaunch Arcanum to have a full re-validation of all loaded files.

You can also export a full error report to share with others via the other buttons on the bottome right of the window.

### Map Modes

[![](/thumb.php?f=MapModesExample.png&width=300)](/File%3AMapModesExample.png)

Different map modes in Arcanum, similar to the ones in EUV

Arcanum features various map modes to help you visualize different data on the map.
Map modes will update immediately when any data displayed is changed.
There are 10 buttons available to which you can assign any map mode you want.
Each button has a shortcut assigned starting with `CTRL + 1` up to `CTRL + 0` for quick access.
To Change the assigned map mode, simply right click the button and select the wanted map mode from the dropdown.

The currently available map modes are:

* Climate
* Culture
* Language
* Locations
* Natural Harbor Suitability
* Plurality Culture
* Plurality Religion
* Political
* Population
* Goods
* Religion Group
* Religion
* Topography
* Vegetation
* Provinces
* Continents
* Super Regions
* Regions
* Areas

## Guide

### Quick Start Guide

[![](/thumb.php?f=ArcanumMainMenu.png&width=300)](/File%3AArcanumMainMenu.png)

The main menu screen with the automatically filled in vanilla path

#### Requirements

* 64bit processor
* Windows 10 or later (Some community members are trying to make Arcanum run via Proton, but to no success so far)
* The command `script_docs` was run in the [EUV console](/Console_commands "Console commands")

**Starting procedure:**

1. Backup your mod files using some sort of version control like [Git](https://git-scm.com/)
2. Download the latest version from [GitHub](https://github.com/The-Arcanum-Project/Arcanum)
3. Run the Arcanum app
4. Navigate to *configure* and select the path to the `../game` folder of EUV vanilla, as well as the mod folder
5. Press the green *Play* button to launch into the editor

### Workflow

[![](/thumb.php?f=ArcanumMainScreen.png&width=300)](/File%3AArcanumMainScreen.png)

The main editing screen of Arcanum

Arcanum has a clear separation of concerns build in.

On the left you have the UI always displaying the currently selected objects. On the right specialized editors will appear whenever applicable and in the center lives the interactive map with selection highlighting and mapmodes.

This makes the workflow to modify existing mods or create a new mod becomes really simple.
Either via the Queastor or by simply clicking on the map, you can select any number of objects and edit their properties at once in the UI.

To use the map for inferring data from the current selection to the objects in the UI, simply press `Freeze Selection`, change your selection to what you want to infer, press the wanted UI element and done.

After completing your changes to an object, simply hit `CTRL + S` to save the changes to the mod.

---

As Arcanum is meant to be as customizable as possible, make sure to check the settings (`F1`) whenever something does not work as you want it to, objects are saved in unwanted formatting, or the UI is too full of information.

## Headless Validation

The headless mode is meant for quick mod validations, e.g. after updates. It skips major parts of the map loading and generation, and thus is significantly faster than running Arcanum with GUI.

The currently supported features for headless mode are:

| Option | Description |
| --- | --- |
| `-h` `--headless` | Run without UI |
| `-c` `--clean` | Clear the output before printing the error information Useful for automated parsing of the output |
| `-v <path>` `--vanilla <path>` | Path to the vanilla game files (`/game folder`) or base mods. They have to be specified in the intended loading order |
| `-m <path>` `--mod <path>` | Path to the mod |

An example of the command looks like this:
`Arcanum.exe -h -m "C:\Users\user\Dokumente\Paradox Interactive\Europa Universalis V\mod\test_mod" -v "S:\SteamLibrary\steamapps\common\Europa Universalis V\game" -c`

The output, the consists of 3 main parts.

### Header

Here a general summary of the output is shown; The total error count split up into the different severities, which errors were found and how may.
This is the place you look at to get an idea of what you are dealing with.

[![ErrorLogHeader.png](/images/c/c5/ErrorLogHeader.png)](/File%3AErrorLogHeader.png)

### Faulty Files

Here, Arcanum provides a detailed list in which folder or files the errors are located.

### Error Listing

For every error type, Arcanum report all occurrences with detailed descriptions in the following format:

```
 Format:
 # Error Type: Error Name, ID: Error ID, Occurrences: Count, Severity: Severity
 --> Description: Error Description (replace the {x} with the 0 indexed argument from the line below to get the full error message)
 - FilePath (Line Number, Column Number) || Argument1 -|- Argument2 -|- ...
```

## Help

With Arcanum still being actively developed, the chance of encountering a bug or faulty behavior is always there. So make sure you always back up your files, and for the time being we recommend verifying each modified file after saving.

If you encounter any bugs, please do always contact us on our Discord server and provide the generated logs, which can be found under `..Documents/Arcanum/Crash_logs`.

If there is a feature missing, that you think would be very useful, feel free to create a feature request either on the GitHub or in the official discord, and it might be added in the future.

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
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |

|  |  |
| --- | --- |
| Tools | Arcanum • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |