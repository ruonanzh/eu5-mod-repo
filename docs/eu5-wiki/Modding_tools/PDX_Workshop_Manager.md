<!-- source: https://eu5.paradoxwikis.com/PDX_Workshop_Manager revid: 35527 fetched: 2026-09-09 -->
# PDX Workshop Manager

**[Modding tool](/Category%3AModding_tools "Category:Modding tools")**: PDX Workshop Manager

PDX Workshop Manager

[![PDX Workshop Manager Icon.jpg](/thumb.php?f=PDX_Workshop_Manager_Icon.jpg&width=330)](/File%3APDX_Workshop_Manager_Icon.jpg)

---

**Type**

Steam Workshop

---

**Author(s)**

Bahmut

---

**Status**

Released

---

**Github**

[Link](https://github.com/kaiser-chris/pdx-workshop-manager)

---

**Download**

[Link](https://github.com/kaiser-chris/pdx-workshop-manager/releases)

PDX Workshop Manager

[![PDX Workshop Manager Icon.jpg](/thumb.php?f=PDX_Workshop_Manager_Icon.jpg&width=165)](/File%3APDX_Workshop_Manager_Icon.jpg)

---

**Type**

Steam Workshop

---

**Author(s)**

Bahmut

---

**Status**

Released

---

**Github**

[Link](https://github.com/kaiser-chris/pdx-workshop-manager)

---

**Download**

[Link](https://github.com/kaiser-chris/pdx-workshop-manager/releases)

**pdx-workshop-manager** is a tool to publish paradox mods, to the steam workshop in a repeatable and configurable way.

There are both **Windows** and **Linux** builds. If requested a **MacOSX** build can be added.

Thanks to [nnnn20430](https://github.com/nnnn20430) for creating a go based wrapper of the original steamworks API.

## Features

* Updating the workshop **name** for different languages based on configuration or the `metadata.json`
* Updating the workshop **tags** based on the tags in the `metadata.json`
* Updating the workshop **description** for different languages based on configured files
* Updating the workshop **thumbnail**
* Adding a **change note** to workshop update based on a configured directory

## How does it work?

The tool will parse the `metadata.json` of either a provided configured mod or each configured mod and then publish the mod to the steam workshop.

## Configuration

The tool is configured using a json file.

### Attributes

* **REQUIRED** `game` steam app id of the game to upload for
* **REQUIRED** `mods`a list of mods that can be uploaded
* **REQUIRED** `id` id of the mod to upload, if kept `0` it will create the mod on the first upload and replace the id with the newly created one
* **REQUIRED** `directory` location of the mod, either a relative path from the executable or an absolute path
* **REQUIRED** `thumbnail` thumbnail file located in the mod directory (defaults to `thumbnail.png`)
* **OPTIONAL** `names` map of steam [api language code](https://partner.steamgames.com/doc/store/localization/languages) to localized mod names (defaults to the name defined in the `metadata.json`)
* **OPTIONAL** `descriptions` map of steam [api language code](https://partner.steamgames.com/doc/store/localization/languages) to file containing the localized steam description bbcode
* **OPTIONAL** `change-note-directory` directory containing files with version based change notes (see [change notes](#adding-workshop-change-notes))

### Example JSON config

```
{
  "game": 529340,
  "mods": [
    {
      "id": 0,
      "directory": "/Path/To/Mod",
      "thumbnail": "thumbnail.png",
      "names": {
        "english": "Your mod name"
      },
      "descriptions": {
        "english": "/Path/To/Bbcode/File/STEAM_PAGE.bbcode"
      },
      "change-note-directory": "/Path/To/Change/Note/Directory"
    }
  ]
}
```

## Adding Workshop Change Notes

The application will try to add change notes if a `change-note-directory` is defined.

It does this by reading the `version` attribute from the `metadata.json` and adding a `.bbcode` at the end.

So if a mod has the version `1.0.1` it will try to find a file called `1.0.1.bbcode` in the change note directory.

> **NOTE** The upload will **not** fail if there is no corresponding change note, but just warn about it in the console output.

## Usage

First download the latest release from the Releases page of the repository:

* <https://github.com/kaiser-chris/pdx-workshop-manager/releases>

> The ZIP may be marked as a *Virus*. This is a **false positive**!
>
> If you do not trust this, then you can [build](#how-to-build) it yourself.

### Graphical UI

Download the GUI version and after unzipping it simply run the provided executable.

The application will open a new browser window with the GUI.

It will allow you to set up mods to be uploaded and do the upload. **Make sure to save your changes before clicking upload.**

[![pdx-workshop-manager-gui.png](/thumb.php?f=Pdx-workshop-manager-gui.png&width=500)](/File%3APdx-workshop-manager-gui.png "pdx-workshop-manager-gui.png")

> **NOTE** If no browser window opens, you can find a link to the GUI in the command line window.

### Command Line

Then, after configuration it, you can run the application by double-clicking, or running it in the terminal like this:

```
.\pdx-workshop-manager.exe
```

By default, the application expects the config file to be in the same folder as the executable and will upload **all** mods configured in it.

> **NOTE** You need to have steam running and be logged in for the tool to work!

All optional commands can be found in the help dialog. Help dialog (`.\pdx-workshop-manager.exe -h`):

```
Usage of pdx-workshop-manager:
  -config string
    	Path to the config file (default "manager-config.json")
  -mod uint
    	Configured workshop mod id or 0 for all mods (default 0)
```

### Usage Tip

If you do not know how to open the command line on Windows:

* Open the folder containing the `pdx-deepl.exe`
* Click into the top address bar of the explorer
* Clear it
* Write `cmd` and press enter
* Now you should have a command line window open

[![Open CMD example.png](/images/9/9e/Open_CMD_example.png)](/File%3AOpen_CMD_example.png "Open CMD example.png")

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
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • PDX Workshop Manager • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |