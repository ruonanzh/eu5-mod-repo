<!-- source: https://eu5.paradoxwikis.com/Art_modding revid: 22076 fetched: 2026-09-09 -->
# Art modding
*This page discussing modding works of art and artists; for modding game art, see [Graphical asset modding](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)").*
**Art modding** involves creating new work of art types, artist types and adding them to the game setup.
## Work of art type modding
Work of art type
**Game folderThis is the folder where the files for this type are stored.:** `common/artist_work`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/icons/work_of_art"`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
**Work of art type modding** is the practice of creating new work of art types.
### Example definition
```
statue = {
	captured = yes
	allow = {
		artist_type = sculptor
	}
}
```
### Passive creation of art
Artist characters will produce art passively when their owner country has [has\_cultural\_maintenance](/index.php?title=Modifiers&action=edit&redlink=1 "Modifiers (page does not exist)") modifier. Once that is active, every artist has a chance to begin producing work of art according to the sum of the [global\_monthly\_art\_start\_chance](/index.php?title=Modifiers&action=edit&redlink=1 "Modifiers (page does not exist)") (checked on owner country) and [artist\_monthly\_start\_chance](/index.php?title=Modifiers&action=edit&redlink=1 "Modifiers (page does not exist)") (from the character).
`allow` is the trigger that determines if a certain work of art type can be produced by a character. It is a `character` trigger which determines if character can start producing the work of art type.
Once a character starts production of a work of art, it will be produced at a pace determined by [ARTIST\_MONTHLY\_PROGRESS](/Defines#ARTIST_MONTHLY_PROGRESS "Defines") define (Vanilla value: `0.01`), further increased by [art\_creation\_speed](/index.php?title=Modifiers&action=edit&redlink=1 "Modifiers (page does not exist)") and multiplied by the share of the Culture Investment slider.
The quality of the resulting work of art is gradually built up every month from the artist's skill multiplied by (1 + [work\_of\_art\_quality\_modifier](/index.php?title=Modifiers&action=edit&redlink=1 "Modifiers (page does not exist)")).
### Work of art destruction and capturing
When a location is sieged, work of arts can be captured or destroyed by the occupant - whether a work of art can be captured or not is determined by `captured` attribute, which, when set to `yes`, will make nations able to capture works of art of this type.
For each work of art piece in a sieged location, it has a chance to be destroyed equal to [ART\_DESTROY\_CHANCE\_ON\_CONQUEST](/Defines#ART_DESTROY_CHANCE_ON_CONQUEST "Defines") define (Vanilla value: `10`). If this chance is realized, there is additional chance for it to be captured, according to [ART\_CAPTURE\_CHANCE\_ON\_CONQUEST](/Defines#ART_CAPTURE_CHANCE_ON_CONQUEST "Defines") define (Vanilla value: `40`). The chance to destroy is subtracted from chance to capture, so for 10.0% chance to destroy and 40.0% chance to capture the chances are as follows:
* 10.0% to destroy a work of art
* 40.0% - 10.0% = 30.0% to capture a work of art
* 100.0% - 10.0% - (40.0% - 10.0%) = 60.0% for nothing
### Modifiers
Countries and locations receive modifiers based on how much share of total world art they hold. For countries, it is `country_art` static modifier which is multiplied by country's art share. For locations, it is `location_art`.
In addition, additional modifiers can be added to a work of art type using `country_modifier` and `location_modifier` blocks.
Both of those modifiers are scaled with the work of art's quality and through a modifier provided in `religion_scale_modifier`. They stack multiplicatively (quality \* (1 + religion scale modifier)).
```
religion_scale_modifier = religious_icon_power_modifier
location_modifier = {
	local_unrest = -0.2
	local_max_rgo_size_modifier = 0.10
}
```
### Localisation
All work of art types need to have their title and descriptions localized as such:
* `<key>` for title
* `<key>_desc` for description
* `<key>_name_<dialect_key>_<int>` for random names with dialects
* `<key>_name_<int>` for random names
#### Work of art names
When an art of work is created with no set name, the game will try to generate a name for it.
There is no definition for how those names are created - they are created based on presence of localisation keys, which follow those rules:
* `<key>_name_<dialect_key>_<int>` - for language based work of art names
* `<key>_name_<int>` - for general, global work of art names if there are no dialect names available
* `<key>_name` in case there are no names that follow any of the above
Examples:
This one will select one of the possible keys:
```
 scripture_name_0: "$ADJECTIVE|U$ $FIRST_NOUN|U$"
 scripture_name_1: "$ADJECTIVE|U$ Book"
 scripture_name_2: "$ADJECTIVE|U$ Scripture"
 scripture_name_3: "$ADJECTIVE|U$ Gospel"
```
This one will select scandinavian option if the author is scandinavian, otherwise it will pick one of the keys ending with a number. Because those are valid, the regular `_name` one will never be used:
```
 painting_name: "$ADJECTIVE|U$ $FIRST_NOUN|U$"
 painting_name_0: "$FIRST_NOUN|U$ or $SECOND_NOUN|U$"
 painting_name_1: "$ADJECTIVE|U$ $FEMALE|U$"
 painting_name_scandinavian_language_0: "Vackra Drottning $FEMALE|U$"
```
Within those fields, the following keys (denoted in $) are available:
| Key | What it does |
| **ADJECTIVE** | Takes and localizes a random adjective key from [NAME\_ADJECTIVES](/Defines#NAME_ADJECTIVES "Defines") define |
| **FIRST\_NOUN** | Takes and localizes a random noun key from [NAME\_NOUNS](/Defines#NAME_ADJECTIVES "Defines") define |
| **SECOND\_NOUN** | Takes and localizes a random noun key from [NAME\_NOUNS](/Defines#NAME_ADJECTIVES "Defines") define |
| **FEMALE** | Takes and localizes a random female name key sourced from creator's culture's language |
| **SAINT** | Takes and localizes a random noun key from [NAME\_SAINTS](/Defines#NAME_SAINTS "Defines") define |
| **LASTNAME** | Takes creator's last name |
| **NUM** | If there is more than one of such works of art made by this creator, it will display which one it is in pure number. To be used with $SUFFIX$ |
| **ORIGIN** | Takes the location name of where the work of art was created |
| **FIRSTNAME** | Takes creator's first name |
| **TARGET** | If the work of art targets a character, this one will return their name. |
| **SUFFIX** | Appends "st", "nd" and "th" for the $NUM$. |
### Art qualities
Based on art quality, a work of art can be classified into one of 8 "tiers". The strings and intervals are hardcoded:
| Loc string | Basegame english localisation | Quality interval |
| **art\_quality\_bad** | Locally Known | 0 <= x < 12 |
| **art\_quality\_below\_average** | Locally Well Known | 12 <= x < 25 |
| **art\_quality\_average** | Well Known in Area | 25 <= x < 37 |
| **art\_quality\_above\_average** | Renowned in Area | 37 <= x < 50 |
| **art\_quality\_good** | Regionally Well Known | 50 <= x < 62 |
| **art\_quality\_very\_good** | Regionally Renowned | 62 <= x < 75 |
| **art\_quality\_great** | Masterpiece | 75 <= x < 87 |
| **art\_quality\_best** | Magnum Opus | 87 <= x <= 100 |
## Artist type modding
Artist type
**Game folderThis is the folder where the files for this type are stored.:** `common/artist_types`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/icons/artist"`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
**Artist type modding** is the practice of creating new artist types - usually to limit certain work of art types to those artist types.
Artist types are usually checked in character scope triggers using [artist\_type](/Triggers#artist_type "Triggers") trigger.
### Example definition
```
iconographer = {
	potential = {
		OR = {
			religion = religion:orthodox
			religion = religion:miaphysite
		}
	}
}
```
The only attribute artist types accept is `potential` - a `country` trigger that checks if the country can spawn an artist of this type.
### Localisation
Every artist type should have a name and description key localized as such:
* `ARTIST_TYPE_NAME_<key>` for artist type name
* `ARTIST_TYPE_DESC_<key>` for description
## Work of art in setup
*Main article: [Setup modding](/Setup_modding "Setup modding")*
`work_of_art_manager` is used to setup works of art at the start of the game.
An example that illustrates what is possible:
```
work_of_art_manager = {
	painting = {	# Work of art key
		location = london 	# key of the location where the WoA is at game start
		origin = canterbury	# location of where the WoA is considered to have been created
		quality = 75		# quality of the WoA, on scale from 0 to 100
		key = loc_key		# localisation key for the WoA
		creation_date = 1330.6.1# date the WoA was created
		artist = character_key	# key of the character who created this WoA (not necessary)
	}
}
```
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • Art • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
