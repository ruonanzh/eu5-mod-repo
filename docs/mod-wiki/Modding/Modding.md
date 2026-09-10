<!-- source: https://eu5.paradoxwikis.com/Modding revid: 33186 fetched: 2026-09-09 -->
# Modding
This article is [timeless](/Category%3ATimeless "Category:Timeless") and should be accurate for any version of the game.
*This page discusses the basics of modding. For information about* using *game mods, see [Mod](/Mod "Mod")*
Modding (using 'mods', short for modification) in Europa Universalis V provides players with the ability to alter various aspects of the game or incorporate new features, enhancing the overall gaming experience. While certain elements remain hardcoded and cannot be modified, such as the Migration or Battle casualty logic or map modes, a wide range of options are available for customization.
Modding[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
## Getting started
### Setting up the mod folder
The mod tools button is immediately next to the mod manager button
The create mod screen prompts most basic information a mod should have. It creates an empty folder in the local mods document folder.
*See also: [Mod structure](/Mod_structure "Mod structure")*
* Create a new folder in `Documents/Paradox Interactive/Europa Universalis V/mod`, this new folder corresponds with the `game` folder in the base game.
  + Don't directly modify the game files, they will be overwritten with any game update.
* In the new folder, create your "*in\_game*", "*main\_menu*", and "*loading\_screen*" [top level folders](/Mod_structure#Top_folders "Mod structure"), then within those "*common*", "*localization*", etc. folders of your mod as needed.
  + Follow the same structure as found in *Europa Universalis V\game* folder.
* Place .txt and other files for the actual content inside the appropriate folder.
* Add a `.metadata` folder with a *[metadata.json](/Mod_structure "Mod structure")* file inside. The file may be bare bones, but is a requirement in order for the game to load your mod at all.
The in-game mod tools can also be used to set up the basic mod folder. The images for what that looks like.
### Basic tools and resources
* Utilize a source code editor with syntax highlighting and other helpful features, such as Code Search. Popular free programs for modding Europa Universalis V include:
  + [Visual Studio Code](https://code.visualstudio.com/) has the extension Paradox Highlight and [CwTools](https://marketplace.visualstudio.com/items?itemName=tboby.cwtools-vscode) available.
  + [IntelliJ](https://www.jetbrains.com/idea/download/other.html) (The Community Edition is free) has the extension [Paradox Language Support](https://plugins.jetbrains.com/plugin/16825-paradox-language-support) available.
  + [Notepad++](https://notepad-plus-plus.org/) is a less powerful choice, but may feel less overwhelming.
    - There is a community-sourced custom language for Europa Universalis V that can be found on [github](https://github.com/Aetherum17/EU5_Notepad_Language).
    - Alternatively, select *Perl* as your language syntax for closet built-in syntax highlighting.
* Add the following options in Steam via left click on Europa Universalis V -> Properties at the bottom of the General folder:
  + `-debug_mode` to activate the console and in-game dev tools. Alternatively, there are also mods to activate/deactivate debug mode in-game. Also, hotloads changes to your mod files without needing to restart the game.
    - A few files are not covered, such as on\_action.
* Use **`script_docs`** and **`dump_data_types`** commands in the game console to generate other logs with effects, triggers, and scopes.
  + Access the console in-game with `~` when debug\_mode is active.
  + Generated files from **`script_docs`** are located in `Documents\Paradox Interactive\Europa Universalis V\docs`; see also [Effect](/Effect "Effect"), [Trigger](/Trigger "Trigger"), [Event target](/Event_target "Event target"), and [Modifier types](/Modifier_types "Modifier types") on the wiki
  + Generated files from **`dump_data_types`** are located in `Documents\Paradox Interactive\Europa Universalis V\logs\data_types`; see also [GUI script](/GUI_script "GUI script") on the wiki
  + This is the most reliable technical documentation you can get.
  + Those extracted files can also be found [on GitHub](https://github.com/Europa-Universalis-5-Modding-Co-op/modding-digests)
* The [Modding Git Guide](https://docs.google.com/document/d/1bQdOVMY6FTu-2AKXZblYp6bF2-_W2JMUtXc5a0nZ8Ls) is a community made guide for using Git, GitHub/GitLab, and related tools such as KDiff3. It can be a useful stop for questions beyond this wiki, and contains step-by-step guides for much of what is talked about here. Though the examples are HOI4 based, the principles apply equally well to any Paradox game mod.
### Best practices
* Use proper indentation to ensure opening and closing brackets are on the same level. This allows for code folding, easier error spotting, and improved readability.
  + Consider using an automatic formatting extension for your editor.
* When uncertain about implementation, search the base game code for relevant keywords using your editor.
* Add comments, starting with #, to remember later how things works, to navigate easier or to disable parts of code without deleting them.
* Avoid overwriting items you didn't change to minimize conflicts and enhance clarity.
### Priority of modded files
*Main article: [Mod files load order](/Mod_files_load_order "Mod files load order")*
* Using a filename that exists in vanilla will overwrite the original file completely.
  + If several files with the same name are used by different mods, the lowest mod list position in the launcher is relevant.
* If an item is modified by multiple mods, the game will choose from the file sorted last alphabetically by filename.
  + This takes priority over the position in the mod list in the launcher.
### Debugging
* Read the error.log to find exceptions and warnings the game identified in `Documents/Paradox Interactive/Europa Universalis V/logs`
* `-debug_mode` adds a button that opens the `error.log` for you and also shows its current number of lines.
  + The default editor used for this on Windows is Notepad, but it is configurable.
  + You can either edit `Documents/Paradox Interactive/Europa Universalis V/pdx_settings.json` directly, adding the following keys under the `System` key:
    - `"editor": "C:\\Program Files\\Sublime Text\\sublime_text.exe"` - tells the game which editor to use, you can use any valid editor on your computer, just make sure to use the correct path.
    - `"editor_postfix": ":$:1"` - this is used when opening the editor, for example this Sublime Text specific postfix makes sure the editor is opened scrolled to the latest line.
  + Or you can use the ingame settings editor accessible through the in-game console, under the Settings button. Choose System in the Category selector and find the `Editor` key.
* `--ignore-disable-mods-on-crash` . If the game crashes during loading resources, it will load with all mods disabled the next time. Use this option to force load the same playset. Useful when debugging crash in your own mod.
* Backup your work, things can go wrong, and it is always good to have a backup.
  + Using a version control system like [**Git**](https://git-scm.com/) allows you to track your changes, revert to a working version and collaborate.
  + If you are part of a team, consider using GitHub for team collaboration. If you are new to Git, a program like [Github Desktop](https://desktop.github.com/)is great for beginners.
* Set *encoding* to `[UTF-8 with BOM](https://en.wikipedia.org/wiki/UTF-8)` inside your editor for code files, especially for localization .yml files.
* For localization files, make sure your filenames end with l\_*language* like `foo_l_english.yml`. Note the first character in the suffix is an ell (lowercase L), not the numeral 1 or uppercase i.
* Join the [**EU5 Mod Coop discord**](https://discord.gg/KeXMv4yM3a) to ask other modders for help.
## Tools and utilities
*[Add your mod tool to the wiki](/Form%3AModding_tool "Form:Modding tool")*
| Name | Category | Link(s) | Description |
| Paradox Highlight | Editor (VS Code) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=dragon-archer.paradox-highlight) | Up-to-date syntax highlighting for all Europa Universalis V files. Other paradox games like Crusader Kings III are also supported. |
| CWTools - Paradox Language Services | Editor (VS Code) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=tboby.cwtools-vscode) | For editing Paradox game files in Visual Studio Code. It has syntax-highlighting, error checking, auto-completion and more. Based on the [CWTools library](https://github.com/cwtools/cwtools) for parsing, editing, and validating Paradox Interactive script files. |
| Paradox Language Support | Editor (IntelliJ) | [JETBRAINS Marketplace](https://plugins.jetbrains.com/plugin/16825-paradox-language-support) | The Intellij IDEA plugin for Paradox Interactive game modding. It has syntax-highlighting, error checking, auto-completion and more. |
| EU5 Language for Notepad++ | Editor (Notepad++) | [Github](https://github.com/Aetherum17/EU5_Notepad_Language) | Provides EU5-specific script keywords and text highlighting in Notepad++ |
| [Arcanum](/Arcanum "Arcanum") | Map Modding, Visual Editor | [GitHub](https://github.com/The-Arcanum-Project/Arcanum) | A feature rich mod and map data editor |
| [Community Mod Framework](/Community_Mod_Framework "Community Mod Framework") | Framework, Toolkit, Visual Editor | [GitHub](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework) | A community made mod framework providing a mod menu, custom alerts, action bar, development tools (visual editor, workshop uploader, mod translator), and more. |
| [PDX DeepL](/PDX_DeepL "PDX DeepL") | Translation | [GitHub](https://github.com/kaiser-chris/pdx-deepl) | A tool to do incremental auto translation of mods for Paradox games using DeepL |
| [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") | General | [GitHub](https://github.com/kaiser-chris/pdx-workshop-manager) | A tool to publish Paradox mods, to the Steam workshop in repeatable and configurable way |
| Pdx-Unlimiter | General | [GitHub](https://github.com/crschnick/pdx_unlimiter) | A powerful and smart savegame manager, it can edit save files. It can preview modded flags without starting the game. |
| UWPDumper | General | [GitHub](https://github.com/Wunkolo/UWPDumper) | A tool to extract files from Microsoft Store games. |
| Clausewitz Maya Exporter | General | [Paradox Forums](https://forum.paradoxplaza.com/forum "forumdirect:/threads/information-and-faq.924764/") | A tool to create and export 3D models to use in EU5 and other Clausewitz games. |
| Jomini.js | General | [GitHub](https://github.com/nickbabcock/jomini) | A powerful parsing library in javascript based on webassemby, has a C version named [Rakaly](https://github.com/rakaly/librakaly). |
| Europa Universalis V Community Graphical Assets | General | [GitHub](https://github.com/Europa-Universalis-5-Modding-Co-op/graphical-assets) | A graphical assets repository for EU5 modders to use and contribute to |
| EU5 Map Maker | Map modding | [Webpage](https://eumapeditor.neurel.ch/) | An online graphical map editor |
| Location Definition Tool | Map modding | [Github](https://github.com/JammingEnd/Eu5_LocationDefinitionTool) | A downloadable graphical map editor |
| GIMP Heightmap Filter | Map modding | [Github](https://github.com/krendil/display-filter-heightmap) | A filter for GIMP which colorizes greyscale heightmaps |
## Common problems
* **Some local mod files fail to load.**
  + **Symptoms:**
    - A mod is correctly shown in the mod manager, it is added to the playset, but some files do not have an effect.
    - `error.log` contains a line such as `[virtualfilesystem.cpp:562]: Could not create lexer from file due to 'fopen() failed: 2'` followed by a line about encoding.
    - Potentially also problems with opening `error.log` by clicking on the error deer in game launched with the `-debug_mode` flag.
  + **Likely causes:**
    - Permissions. The game could have trouble accessing the mod files due to broken permissions.
    - File path containing non-ASCII characters. It seems like Europa Universalis V (similarly to other games such as [Hearts of Iron IV](http://hoi4.paradoxwikis.com/Modding#Common_mistakes "hoi4:Modding")) has troubles with this. On Windows, this can happen due to the user's username, and therefore the user folder containing `Documents/Paradox Interactive/Europa Universalis V/` , containing non-ASCII characters. You can easily check whether this is the case by looking at your file path.
  + **Solutions:**
    - Unfortunately, it looks like modifying the path used by the game for user files (similarly to how it is explained for HoI4) [does not seem to work](https://forum.paradoxplaza.com/forum/index.php?posts/29509912 "forumpost:29509912") as of writing.
    - Symlinking the mod directory to another place also does not work, because the game would still access the original file path.
    - For now, if your user folder on Windows contains non-ASCII characters, the simplest solution is to create a new user profile with an ASCII compliant name, and work on your mods from that profile. Renaming the user folder under `Users` is not advised due to inherent risks of breaking your Windows installation.
## Terminology
Europa Universalis 5 modding has a number of terms that are derived from or similar to those in general programming. The following is a partial list of common terms.
Script
:   This is the 'code' that modders can use to change how the game functions.
[Effect](/Effect "Effect")
:   Script commands that change the game state in some way
[Trigger](/Trigger "Trigger")
:   Script checks of the game state that are used to condition effects
[Scope](/Scope "Scope")
:   The context for a trigger or effect
[Scope link](/Scope_link "Scope link")
:   A keyword for a scope or game value; also called *event target*
Type
:   The 'class' for a game object
Key
:   The script name of a type
Tag/TAG
:   The key for a country
## See also
* [Console commands](/Console_commands "Console commands")
## References
[Europa Universalis V](/Europa_Universalis_V "Europa Universalis V")[Return to top](#top)
| Game | [Achievements](/Achievements "Achievements") • [Features](/Europa_Universalis_V#Game_features "Europa Universalis V") • [Game rules](/Game_rule "Game rule") |
| Guides | [Beginner's guide](/Beginner%27s_guide "Beginner's guide") • [Europedia](/index.php?title=Europedia&action=edit&redlink=1 "Europedia (page does not exist)") • [Keyboard shortcuts](/index.php?title=Keyboard_shortcuts&action=edit&redlink=1 "Keyboard shortcuts (page does not exist)") • [Map modes](/Map_modes "Map modes") • [Tutorial videos](/index.php?title=Tutorial_videos&action=edit&redlink=1 "Tutorial videos (page does not exist)") • [User interface](/User_interface "User interface") |
| Development | [Developer diaries](/Developer_diaries "Developer diaries") • [Downloadable content](/Downloadable_content "Downloadable content") • [Patches](/Patches "Patches") |
| Community | [Easter eggs](/index.php?title=Easter_eggs&action=edit&redlink=1 "Easter eggs (page does not exist)") • [Jargon](/Jargon "Jargon") • Modding |
