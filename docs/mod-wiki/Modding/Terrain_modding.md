<!-- source: https://eu5.paradoxwikis.com/Terrain_modding revid: 20946 fetched: 2026-09-09 -->
# Terrain modding
**Terrain modding** involves changing the starting topography/vegetation and climate setup of a location and what they do. Once a location is assigned one of those in setup, that cannot be changed - there are no effects to change topography, vegetation and climate during runtime.
## Adding terrain to locations
Climates, topographies and vegetations are assigned to locations in `in_game/map_data/location_templates.txt` specifically using `topography`, `climate`, `vegetation` paired with their keys.
For example:
```
stockholm = { topography = flatland vegetation = grasslands climate = continental <...> }
```
Those terrain types are assigned during game load and cannot be changed during gametime. No effects or methods for changing them exist.
## Common syntax
Whether you are modding topography, vegetation or climate, some aspects are shared amongst them and are explained here.
### Local modifiers
Terrain types allow for `location_modifier` and `unit_modifier` fields, which apply modifiers on locations with the respective terrain and units that are stationed in such locations.
### Colors
Terrain can be assigned a map color and a debug color using `color` and `debug_color`.
* `color` is used for the terrain mapmode, visible in mapmode selection
* `debug_color` is used for `<terrain>_screenshot` mapmode, only accessible via console commands.
### Defender bonus
`defender` is an integer value that gives reduces attacker dice rolls for units attacking in this terrain.
### Audio tags
*Main article: [Sound modding](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)")*
`audio_tags` is a list of string and value pairs that represent weighting for different ambience related to this terrain.
## Topography modding
Topography modding
**Game folderThis is the folder where the files for this type are stored.:** `common/topography`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/topography"`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
**Topography modding** includes the creation and edition of topographies that can be assigned to locations.
### Movement cost
`movement_cost` is a number that defines the proximity cost penalties that moving through this topography inflicts. A movement cost of `1.1` will result in additional cost of `+10.0%`.
If not provided, default value is 1.
### Colors, defender bonus and modifiers
This is described in the terrain [common syntax](#Common_syntax).
### Weather front impacts
Topographies contain data that allow to modify the decay of various weather fronts:
| Attribute | Related Define | Behavior |
| **weather\_front\_strength\_change\_percent** | NWeather.FRONT\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY | every FRONT\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY pixels moved, the strength of the weather front changes by weather\_front\_strength\_change\_percent on locations underneath the front |
| **weather\_cyclone\_strength\_change\_percent** | NWeather.CYCLONE\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY | every CYCLONE\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY pixels moved, the strength of the cyclone changes by weather\_cyclone\_strength\_change\_percent on locations underneath the cyclone |
| **weather\_tornado\_strength\_change\_percent** | NWeather.TORNADO\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY | every TORNADO\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY pixels moved, the strength of the tornado changes by weather\_tornado\_strength\_change\_percent on locations underneath the tornado |
### Other parameters
* `is_lake = yes` will mark this topography as one that represents a lake. This will give location a more seazone-like tooltip and will be checkable using `Topography.IsLake` data function.
* `is_deep_ocean = yes` will mark this topography as representing a deep ocean tile. This will allow the location to be recognized as a sea current and be identifiable with `Topography.IsDeepOcean` data function.
* `always_winter = yes` will guarantee that locations with this topography will always experience severe winter if also paired with a climate that also has `always_winter = yes`.
* `has_sand = yes` will mark this topography as "having sand". Locations whose topography or vegetations are marked as having sand (and their climate is also marked as not having precipitation - `has_precipitation`) may suffer from sandstorms instead of high winds (`sandstorm_in_location` static modifier)
* `blocked_in_winter = yes` blocks locations with this topography when they are suffering from at least normal level winter. Those locations do not receive market access and will not allow troops to march into them.
* `can_have_ice = yes` will mark this topography's location as one that may ice over during winter. This has no gameplay impact - but will make the sea location graphically freeze over depending on its winter level.
* `can_freeze_over = yes` will mark the water tiles with this topography as ones that may freeze over - if severe winter happens in those locations, they may freeze over and allow land units to pass through while freezing naval units.
* `vegetation_density` reads numbers, but seems to have no real impact.
## Vegetation modding
Vegetation modding
**Game folderThis is the folder where the files for this type are stored.:** `common/vegetation`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/vegetation"`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
**Vegetation modding** includes the creation and edition of vegetation that can be assigned to locations. Vegetation modding mostly uses parameters from [common syntax](#Common_syntax).
### Colors, defender bonus and modifiers
This is described in the terrain [common syntax](#Common_syntax).
### Movement cost
`movement_cost` is a number that defines the proximity cost penalties that moving through this vegetation inflicts. A movement cost of `1.1` will result in additional cost of `+10.0%`.
If not provided, default value is 1.
### Other parameters
Vegetations have only one attribute other than the ones in common syntax:
`has_sand = yes` will mark this vegetation as "having sand". Locations whose topography or vegetations are marked as having sand (and their climate is also marked as not having precipitation - `has_precipitation`) may suffer from sandstorms instead of high winds (`sandstorm_in_location` static modifier).
## Climate modding
Climate modding
**Game folderThis is the folder where the files for this type are stored.:** `common/climates`
---
**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`
---
**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`
---
**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/icons/climate"`
---
**InjectableCan the `INJECT` database functions be used with this type?:** 
**ReplaceableCan the `REPLACE` database functions be used with this type?:** 
**Climate modding** includes the creation and edition of climates that can be assigned to locations.
Unlike [topographies](#topography_modding) or [vegetations](#vegetation_modding), climates do not have a `movement_cost` parameter.
### Colors, defender bonus and modifiers
This is described in the terrain [common syntax](#Common_syntax).
### Other parameters
* `has_precipitation = yes` will mark this climate as having rain. If locations of this climate also have been marked as having sand (either from topography, or vegetation) may experience sandstorms instead of high winds (`sandstorm_in_location` static modifier).
* `winter` defines the max winter level for locations of this climate. If not provided, the locations will not suffer from winters. Possible values are `none`, `mild`, `normal` and `severe`.
* `always_winter = yes` will guarantee that locations with this climate will always experience severe winter if also paired with a topography that also has `always_winter = yes`.
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • Terrain |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
