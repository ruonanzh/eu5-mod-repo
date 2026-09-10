<!-- source: https://eu5.paradoxwikis.com/Save-game_editing revid: 35563 fetched: 2026-09-09 -->
# Save-game editing
Save games come in two forms, which are similar but distinct. Both files start with a one-line header.
NOTE: All of this information assumes non-Ironman saves.
## Save file location
There are two options for save locations.
### Local saves
Local saves can be compressed or uncompressed(if not ironman) and are usually stored in:
| Windows | `Documents\Paradox Interactive\Europa Universalis V\save games\` |
| Linux (via proton) | `~/.local/share/Steam/steamapps/compatdata/3450310/pfx/drive_c/users/steamuser/Documents/Paradox Interactive/Europa Universalis V/save games` |
### Cloud saves
If choosing to save on Steam Cloud, the save will be uploaded to the Steam servers. A backup is also kept locally on your computer, at:
| Windows | `C:\Program Files (x86)\Steam\userdata\<YOUR STEAM ID>\3450310\remote\save games` |
| Linux | `~/.local/share/Steam/userdata/<YOUR STEAM ID>/3450310/remote/save games` or `~/.steam/debian-installation/userdata/<YOUR STEAM ID>/3450310/remote/save games` or `~/.steam/steam/userdata/<YOUR STEAM ID>/3450310/remote/save games` |
#### Prerequisites
The option “Keep games saves in the Steam Cloud for Europa Universalis V” must be enabled in the properties of the game in the Steam library (right click on Europa Universalis V, click Properties, click on the General tab) and in the Steam settings (Steam>Settings, click on the Cloud tab).
## PDX Unlimiter
[PDX Unlimiter](https://github.com/crschnick/pdx_unlimiter) is a third-party tool that makes save editing much easier. It can decode any save format and presents them as structured trees so it's much easier to find the correct data to edit.
## Header
Every save file begins with a line of text such as:
* `SAV02003fb9bd370004e75d00000000`
The first three letters are always SAV. The next two are a version number (always 02 as of Dec 2025), and then the next two are 00 for a debug mode save file, or 03 for a packed save file. Eight digits of ID or checksum (TODO: What is this? 3fb9bd37 in the example given), then either 0004 for a text save file or 0006 for a packed save file. Four more digits (another checksum? TODO) and then eight zeroes.
This header is always followed by a newline (0x0A).
## Debug mode save file
When EU5 is launched in [debug mode](/Console_commands#Debug_mode "Console commands"), saves are stored in text format. This is the same format as is used for mod files, and consists of a series of `name=value` entries, where each value could be:
* A keyword (atom), eg blue
* A quoted string, eg "Spain"
* An integer, eg 12345
* A fixed-point non-integer, eg 1000.00000 - these always have exactly five digits following the decimal point
* A date, eg 1464.5.18 or 1464.5.18.12 (the latter including the time)
* An array of values eg { value1 value2 value3 }
* A mapping of names to values eg { key1=value1 key2=value2 }
In the case of arrays and mappings, these values can contain other arrays and mappings.
A quotation mark inside a quoted string is escaped with a backslash, eg "This \" is a string". Newlines are permitted inside quoted strings.
## Packed save file
In non-debug mode, the same information is provided in a more compact binary format. After the header line, a block of metadata is placed, followed by a zip file containing two files: gamestate and string\_lookup. The metadata block and gamestate have the same format.
All integers are stored little-endian (Intel format).
Strings are stored with a 16-bit length followed by that many bytes - sometimes called a Hollerith string (though without the "H" marker from the original Fortran). Example: 05 00 68 65 6c 6c 6f would mean the string "hello".
### Game state
The game state consists of name-value entries. The name is provided as a two-byte ID and will be any of:
* 4b50: Not actually an ID; you've just found the zip file. Decompress the two files and start over.
* 0003: Subobject; recursively parse until 0004 is found.
* 0004: End of mapping/array. Placed after all of a subobject's contents.
* 000c: 32-bit integer; might also be a date (see below)
* 000e: Boolean - next byte is 01 or 00 for yes/no
* 0014: 32-bit integer; might be signed
* 0017: Hollerith string. Possibly also ID 000f?
* 0167: 64-bit integer, interpreted as fixed-point (eg 100000 means 1.0)
* 0243: RGB color, will be followed by a type 0003 subarray containing three integers
* 0d3e: Read a 16-bit integer; the name is that index within the string\_lookup file (see below).
* 0d40: Read an 8-bit integer; is the index in string\_lookup
* 0d48-0d4e: Fixed-point integer, same as 0167, but with 1-7 bytes of integer
* 0d4f-0d56: Ditto but a negative number
* Any other value is an ID. These IDs appear to be fixed but there is no table of them made available. For example, 09de means "metadata" and will be found at the very start of the save file (immediately after the header line).
After the name, there may be a two byte marker 01 00, followed by the value for that name (starting with its ID, as above). If this marker is absent, the name is actually an array entry, and will be followed immediately by the next array entry.
* 000c, 0014, 029c: 32-bit integer. TODO: What's the difference between these three?
* 000f: Hollerith string.
* 0167: Fixed-point non-integer value. Read a 64-bit integer; it is implicitly that value divided by 10000.0.
* 0d40, 0d3e: String table lookup. Read an 8-bit (0d40) or 16-bit (0d3e) integer; the value is that index within the string\_lookup file.
* A number of other type codes represent enumerated values such as booleans (000e means "yes").
The file should end with the final 04 00 object termination marker.
### String lookup
Once decompressed, the string\_lookup file has a short header followed by a series of Hollerith strings. The header is five bytes long; a one-byte value (meaning unknown), a two-byte count of the number of strings that follow, and then two more bytes (meaning unknown). The strings then follow - 16-bit length then that many bytes, then the next length, etc. There is no footer.
Strings from this file are referenced by position. The first string in the file is index zero and is referenced as 40 0d 00; the second is index 1, 40 0d 01; etc. For the later strings, 3e 0d xx yy refers to a string in a position given by a two-byte index.
TODO: Is position 255 special somehow? It seems that 40 0d ff is not used, and 3e 0d ff 00 is used instead.
### Date values
Dates are stored as integers. They count the number of hours since the year -5000, ignoring leap years.
Whether the field contains a time or not, each day consists of 24 hours; two consecutive days are therefore 24 apart.
The date value is ((year + 5000) \* 365 + Julian) \* 24, where the Julian day number counts Jan 1st as 0 and Dec 31st as 364.
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • Save-game editing • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
