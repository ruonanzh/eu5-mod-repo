<!-- source: https://eu5.paradoxwikis.com/Map_modding revid: 35593 fetched: 2026-09-09 -->
# Map modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.1.

*This page discusses editing the game map, for modding the starting setup, see [setup modding](/Setup_modding "Setup modding").*

In Europa Universalis V, it is possible to mod the game map by either using the official map editor or editing the game files oneself. This includes editing land, seas, rivers and locations.

**Important preemptive note:** the format of image files must be scrupulously respected! Any deviation like RGB vs grayscale, wrong number of bits, presence of several layers or of a transparency (alpha) channel will cause the game or map editor to crash or misbehave.

## Getting started

### Map files

Most map related files are located in /Europa Universalis V/game/in\_game/map\_data/, specifically:

* `[locations.png](#locations.png)` (Location Map): This image file defines individual locations of the map, assigning a unique color code to each location.
* `[named_locations/00_default.txt](#00_default.txt)`: This text file assigns a name to each color code, following a `<name key> = <hex color>` syntax.
* `[definitions.txt](#definitions.txt)`: This text file groups individual locations into continents, subcontinents, regions, areas, and provinces.
* `[location_templates.txt](#location_templates.txt)`: This text file defines topography, vegetation, climate, religion and culture of each location, however, religions and culture can be overriden by [setup modding](/Setup_modding "Setup modding").
* `[ports.csv](#ports.csv)`: This csv file defines coordinates of ports for all coastal land locations.
* `[adjacencies.csv](#adjacencies.csv)`: This csv file defines straits between locations that are not touching, usually connecting islands to landmasses.
* `[default.map](#default.map)`: This text file defines sea zones, lakes, wastelands, earthquake zones and volcano zones.
* `[rivers.png](#rivers.png)`: This image file defines rivers that the game places onto the map itself.

Additional files:

* Heightmap: TODO
* Terrain: TODO
* Locators: TODO
* Splines: TODO

### Map editor

Europa Universalis V comes with a map editor. To open it, launch EU5 with the option `-map_editor` (in Steam, right-click on EU5 -> Properties -> General -> launch options, and add -map-editor).

The map editor requires high resources, notably 32GB of RAM or more.

The map editor is necessary for:

* The heightmap,
* The terrain texture.

It is NOT necessary for:

* The location map,
* The rivers map.

When saving within the map editor, all red alerts must be fixed. Notably, an output folder must be selected for all sections, even if you're not saving anything in that section.

## The map drawing process

### The map itself (locations.png)

The `locations.png` file defines all land locations and sea locations, each unique color representing one unique location. The file *must* be saved as an 8-bit RGB image without transparency and with compression level 7.

The file has a default resolution of 16384 x 8192 pixels. This size can be modified in /Europa Universalis V/game/loading\_screen/common/defines/, using the `WORLD_EXTENTS_X` and `WORLD_EXTENTS_Z` defines.

**Note**: If you plan on changing the map aspect ratio from 2:1 to something else, be aware that using a heightmap is technically possible, but will also lead to major graphical bugs as of now. It is thus advised to stick to a 2:1 ration or disable the 3D map ingame to avoid graphical bugs.

**Note**: If `locations.png` has been saved without the correct export settings, the game will be stuck in a loading loop and use all available system memory.

### Defining locations (00\_default.txt)

All color codes existing in `locations.png` must be properly defined for the map to load.

In `named_locations/00_default.txt`, each color is assigned a unique location identifier per line, such as: `stockholm = dda910`

Each color present in `locations.png` must be assigned to a location **exactly once**, and each location identifier must be unique. The file uses `<ID key> = <hex color>` as the syntax, with the hex code having to be used for the color, however, capitalization does not matter.

**Note**: EVERY color present in `locations.png` must be defined in `named_locations/00_default.txt`, lest it causes a crash. Notably, using a brush tool or non-max hardness or opacity in an image editor will create shades of colors that will quickly become impossible to track down.

### Defining hierarchy (definitions.txt)

Subsequently, all locations must be assigned to a continent, subcontinent, region, area and province in `definitions.txt`, such as:

```
europe = {
	western_europe = {
		scandinavian_region = {
			svealand_area = {
				uppland_province = { stockholm norrtalje enkoping uppsala kastelholm tierp heby }
			}
		}
	}
}
```

**Note**: There are certain minimum requirements for a map to be launched by the game: a map requires at least 256 land locations, 5 provinces, 1 sea location and 1 port otherwise it will result in a crash while booting.

**Note**: Provinces containing sea zones should not be added to an area in `definitions.txt` that otherwise only contains locations that are land, as this causes all locations in that area to show up as a seazone when hovering over them.

### Assigning attributes to locations (location\_templates.txt)

In `location_templates.txt`, each location gets its topography, vegetation, climate, religion, culture, [RGO](/RGO "RGO") and harbor suitability assigned, such as:

```
stockholm = {
 topography = flatland
 vegetation = grasslands
 climate = continental
 religion = catholic
 culture = swedish
 raw_material = clay
 natural_harbor_suitability = 0.75
}
```

In the base game, these templates are written as a single line, while this example has been expanded for easier readability. Either format works.

Topography, vegetation and climate, combined with the mask files (see the dedicated section), define the terrain texture displayed in game.

Religion and culture are placeholders as they are overwritten by the contents of /Europa Universalis V/game/main\_menu/setup/start/06\_pops.txt, see [setup modding](/Setup_modding "Setup modding"). If no pops are being defined in `06_pops.txt`, the game will, however, (re)populate any empty empty location with a single pop of the specified culture and religion. Removing the definition in `location_templates.txt` prevents this behaviour and allows for uninhabited locations.

Wastelands and corridors only have a topography, vegetation and climate, while lakes and sea locations only have a topography and a climate.

### Defining sea zones, wastelands and lakes (default.map)

In `default.map`, sea zones, [lakes](/Lake "Lake"), wastelands (called `impassable_mountains` but also contains impassable deserts and forests), corridors (called `non_ownable`), zones affected by [earthquakes](/Earthquake "Earthquake") and zones affected by [volcanos](/Volcano "Volcano") are defined.

In this file, it is also possible to change the coordinates of the equator via `equator_y`.

### Defining ports (ports.csv)

*Note that although this file is a .csv, the separator is a semi-colon (;).*

* `ports.csv`, for coastal locations only, where each location is defined as such: `<land location name key>;<adjacent sea location name key>;<x coordinate>;<y coordinate>;x`
  + The coordinates must correspond to a pixel of `locations.png` belonging to the sea location and immediately adjacent to the land location (diagonal does not count),
  + y coordinate starts at the bottom of the image, while the y coordinate given by paint or gimp starts at the top of the image. `<EU5 y coordinate> = WORLD_EXTENTS_Z - <paint/gimp y coordinate>`
  + **Every sea coastal location MUST have at least one port for maritime presence calculations, so sea coastal locations must be on average noticeably bigger than land coastal locations.**

### Defining adjacencies (adjacencies.csv)

*Note that although this file is a .csv, the separator is a semi-colon (;).*

`adjacencies.csv` defines connections between non-contiguous locations, such as straits. Each connection has nine elements

```
From;To;Type;Through;start_x;start_y;stop_x;stop_y;Comment
viborg;thisted;sea;limfjorden;8096;6745;8093;6748;xxx
```

* `From` and `To` are the connected locations, defined with their ID
* `Type` is the type of adjacency, with `sea` being the only base game example
* `Through` a location the adjacency crosses. For `sea` connections, this location allows blockading the adjacency when possible.
* `start_x`, `start_y`, `stop_x`, and `stop_y` are the two pairs of coordinates that define the visual end points of the adjacency, corresponding to pixels of `locations.png`
* `comment` is a comment, no game impact, but useful for reminders of what the adjacency represents.

### Map objects locators (gfx/map/map\_objects)

When modifying the map or creating a map you are modifying the the Map object locators, these decide the graphical coordinates of different elements of your locations : where the city is generated, where units are positioned, etc.

Unless updated they will create Map Objects locators errors in error.log that look like this:

```
Locator transform overrides modified. Make sure to update them with the command [MapObjects.GenerateGameLocators city] and copying the 'Paradox Interactive/Europa Universalis V' locators file into the project
Locator transform overrides modified. Make sure to update them with the command [MapObjects.GenerateGameLocators vfx] and copying the 'Paradox Interactive/Europa Universalis V' locators file into the project
Locator transform overrides modified. Make sure to update them with the command [MapObjects.GenerateGameLocators combat] and copying the 'Paradox Interactive/Europa Universalis V' locators file into the project
Locator transform overrides modified. Make sure to update them with the command [MapObjects.GenerateGameLocators unit_stack] and copying the 'Paradox Interactive/Europa Universalis V' locators file into the project
```

They happen if the map was modified and afterwards the map objects locators were not updated.
In order to get rid of these errors, we will need to do exactly what the error says.

1. Open the console and type the `MapObjects.GenerateGameLocators` console command with the following parameters: `city`, `vfx`, `combat`, and `unit_stack`
2. Navigate to the folder where your files are generated. For Windows users, this is usually located at Documents/Paradox Interactive/Europa Universalis V.
3. There, you should be able to find two generated files named :`generated_locators_city`, `generated_locators_vfx`, `generated_locators_combat`, and`generated_locators_unit_stack`

You will need to copy those generated text files into the corresponding folder in your game or mod directory. These files are located at /Europa Universalis V/game/in\_game/gfx/map/map\_objects and are named `generated_map_object_locators_city`, `generated_map_object_locators_vfx`, etc. However, proceed with caution: you cannot simply drop the generated files into the folder. The generated versions do not share the same filenames as the ones used by the game.

```
generated_locators_city becomes generated_map_object_locators_city
generated_locators_vfx becomes generated_map_object_locators_vfx
generated_locators_combat becomes generated_map_object_locators_combat
generated_locators_unit_stack becomes generated_map_object_locators_unit_stack
```

You may also want to copy two files named `generated_map_object_locators_volcano_eruption`, and`dynamic_game_objects` over to your mod folder, that come from the game folder.

#### Lakes

For lake locators, the lake object needs the line `disable_transform_packing = yes` to be correctly rendered in game.

## Heightmap and terrain texture

### Decals

[![](/thumb.php?f=Heightmap_folder_image.png&width=900)](/File%3AHeightmap_folder_image.png)

Folder of a decal set

Default (empty) heightmap places everything at seabed level. Default terrain texture is determined by the terrain type from the Location map (see the dedicated section). Both can then be refined.

The game uses the following files to refine its heightmap:

* /Europa Universalis V/game/in\_game/gfx/terrain2/terrain\_cache/heightmap.bin,
* /Europa Universalis V/game/in\_game/gfx/terrain2/terrain\_cache/heightmap.info.

And the following files to refine its terrain texture:

* /Europa Universalis V/game/in\_game/gfx/terrain2/terrain\_cache/materials.bin,
* /Europa Universalis V/game/in\_game/gfx/terrain2/terrain\_cache/materials.info.

All are created in the map editor, by "baking" several "decals" together. A "decal" is a shape and texture in the map editor composed of various PNG images of the same size:

* UP to 16 PNG mask image files, in 8bit grayscale, without transparency, determining the prevalence of various terrain textures,

* A bitmask image file, in 16bit grayscale, without transparency, aggregating together the several mask images,
* A heightmap image file, in 16bit grayscale, without transparency, determining the altitude.

Several identical decals can be instantiated in the world, making together a decal set. A decal set, in addition to its PNG images, contains:

* An "instances" folder with JSON files describing each instance, with position, scale and rotation, corresponding to the "Decal instances" window on the right of the map editor,
* A presets.json file, determining default properties for each instantiated decal, corresponding to the "Property Presets" window on the bottom-left of the map editor.

All decal sets are defined in /Europa Universalis V/game/in\_game/gfx/terrain2/decals/decal\_definitions.txt. You can add, remove or rename a decal set by modifying this file and creating the corresponding folder. Note that canyon\_buttes\_01, cliffs\_coastal\_04, mountain\_04, mountain\_jagged and rocky\_mountain\_planes\_05 are present in the game files, but unused. If you wish to use them, add them to decal\_definitions.txt.

### Terrain texture of a decal

Materials are defined in /Europa Universalis V/game/in\_game/gfx/terrain2/materials.txt. Each unique climate-topography-vegetation triplet is associated with a terrain texture for each of the following cases:

* MASK 0 : Coastline flatland
* MASK 1 : Coastline Hills
* MASK 2 : Coastline Plateaus
* MASK 3 : Coastline Mountains
* MASK 4 : Coastline Wetlands
* MASK 5 : Coastline Transition
* MASK 6 : Rivers/Lakes
* MASK 7 : Borders / Water Transition
* MASK 8 : Transition Vegetation
* MASK 9 : Transition Climate
* MASK 10 : Variation 1.1
* MASK 11 : Variation 1.2
* MASK 12 : Variation 1.3
* MASK 13 : Variation 2.1
* MASK 14 : Variation 2.2
* MASK 15 : Variation 2.3

There can be redundancy: for instance, as of writing, arctic\_flatlands\_desert\_biome uses the same texture for 5 of its 6 coastline textures.

The 16 mask images determine the intensity of each texture, according to the climate-topography-vegetation of the location.

Let's take an example: let's say that after instantiating a decal, pixel (12, 34) on the decal ends up at pixel (56, 78) on the Location map. Let's say that pixel (56, 78) on the Location map corresponds to an arctic flatlands desert location and that pixel (12, 34) on MASK 11 of the decal is full white. For MASK 11, arctic\_flatlands\_desert\_biome has dirt\_dark\_transition\_01, which reorients to `textures\dirt\dirt_dark_transition_01_*.dds`. Then, in game and after baking, dirt\_dark\_transition\_01\_\*.dds will strongly display around pixel (56, 78).

The map editor has a very underwhelming mask painter mode. Alternatively, use GIMP or whichever photo editing software you prefer to create masks.

Once masks are created, open the map editor under "Decals editor", select your decal set and click on "Reprocess materials". This aggregates the masks together and creates the bitmask. A popup indicates where the bitmask is created: copy it in the decal folder.

Both the masks and the bitmask of a decal set can be hotloaded by selecting the decal set and clicking "Reload all".

### Heightmap of a decal

A heightmap image is created by hand, using GIMP or whichever photo editing software you prefer. Darker shades are lower (and, if dark enough, below sea level) while lighter shades are higher. Sea level is defined in /Europa Universalis V/game/loading\_screen/common/defines/ by `WATER_LEVEL_PERCENTAGE`. It is 8.34% by default, which corresponds to RGB = (21, 21, 21) on the standard 8-bit RGB scale (where black is (0, 0, 0) and white is (255, 255, 255).

The heightmap of a decal set can be hotloaded by the map editor by selecting the decal set and clicking "Reload all".

### Placing a decal

To add a decal, select a decal set, select the "Create new decal" mode and click on the map. The decal can be reshaped, rotated, moved around by selecting the corresponding mode.

A decal can be locked to avoid moving it by accident (main base game EU5 decals are locked by default), hidden (not displayed on the map editor but still baked when baking) or deactivated (neither displayed nor baked).

Saving will update the "instances" folder, remembering where decals are.

### Baking

Once decals are placed, ensure the decal baking state is set to `Baked` under `Instance(s) Properties`, then click "Bake decals". The map editor will display where the .bin and .info output files are created. Copy them to /Europa Universalis V/game/in\_game/gfx/terrain2/terrain\_cache. The game will now load the newly created heightmap and terrain textures when executed without the -map\_editor option.

### Base EU5 decals

This section describes the base game EU5 decals. Applying this is in no way mandatory, but it is easier to follow the same architecture, reusing existing "instances" folders for the main heightmap.

#### Main heightmap

The global shape of the world is distributed over 16 decals with a resolution of 8192 x 4096 each, named heightmap\_X\_16, X in [1, 16]. 1 is top left and it goes top to bottom, then left to right. Those decals are locked by default in the map editor and are instantiated once each.

#### Mountains

Additionally, base game EU5 uses 5 mountain and volcano decals, instantiated hundreds of times each, to add granularity to the map.

When making a total conversion, you'll want to remove entirely the instances of the mountain and volcano decals. This can be done from the map editor, or by emptying the corresponding "instances" folders.

## Regenerating splines

Spline errors in error.log look like this: `[jomini_spline_network_graphics_old.cpp:1416]: Could not find spline network strip of type 0 between anchors <insert Location names here>`

They happen if the map was modified and afterwards the Spline Network was not updated.

To regenerate the Spline Network, do:

1. Console command `SplineNetwork.ClearAssets`
2. Console command `SplineNetwork.AppendAssets`. This takes about a minute
3. Move the generated .splnet file from my documents to the game folder (don't copy the file, move it. Files in my documents get loaded as if they were a DLC or mod so keeping it there will prevent you from getting updated files)

The spline file is generated in: Documents/Paradox Interactive/Europa Universalis V/gfx/map/spline\_network/; move it to: /Europa Universalis V/game/in\_game/gfx/map/spline\_network/

## River Map

Refer to Vic3 wiki: [v3:Map modding](https://vic3.paradoxwikis.com/Map_modding#River_Mapping "v3:Map modding")

The river map is similar to that of Vic3 but it's color palet is slightly different and is as followed :

**Special colors:**

0: #00ff00 (pure green) indicates the source of a river system

1: #ff0000 (pure red) indicates a tributary joining the main river

2: #fffc00 (pure yellow) indicates a river splitting

**Width of the river, from narrowest to widest , the colors are:**

3: #00e1ff is the minimum river width

4: #00c8ff

[![EU5 color palet](/thumb.php?f=Eu5_color_palet.png&width=300)](/File%3AEu5_color_palet.png)

EU5 color palet

5: #0096ff

6: #0064ff

7: #0000ff

8: #0000e1

9: #0000c8

10: #000096

11: #000064

12: #005500

13: #007d00

14: #009e00

15: #18ce00 is the maximum river width

**Background colors:**

254 : #ff0080 (deep pink) indicates water

255 : #ffffff (white) indicates land

## Map border models

These are defined in /Europa Universalis V/game/in\_game/gfx/models/papermap/ with .asset and .mesh files. These are referenced in /Europa Universalis V/game/in\_game/gfx/papermap\_entities/

## Adding map object masks

[![Example custom map mask.png](/thumb.php?f=Example_custom_map_mask.png&width=689)](/File%3AExample_custom_map_mask.png)

Map object masks are one of the ways that you can modify the map in the game, paradox uses them primarily for adding things like trees, such as in the picture to the right, where they are used to add pine trees the pine\_mask, they can also be used to add various features to the terrain, such as the red splotches added in the photo on the right which are custom and defined as the europa\_mask. Do note that these will fade if you zoom out, probably for performance reasons, so they should not be used to things that should be seen at all zoom levels (you might be able to change this somewhere, probably by playing around with the generator settings.

### Create textures

Place in /Europa Universalis V/game/in\_game/gfx/models/mapitems/environment\_decals/:

* `decal_<name>_diffuse.dds` - Color
* `decal_<name>_normal.dds` - Normal map
* `decal_<name>_properties.dds` - Material properties

### Create asset file

/Europa Universalis V/game/in\_game/gfx/models/mapitems/environment\_decals/decal\_<name>.asset:

```
pdxmesh = {
    name = "decal_<name>_mesh"
    file = "decal_base.mesh"
    meshsettings = {
        name = "meshShape"
        index = 0
        texture_diffuse = "decal_<name>_diffuse.dds"
        texture_normal = "decal_<name>_normal.dds"
        texture_specular = "decal_<name>_properties.dds"
        shader = "decal_local"
        shader_file = "gfx/FX/pdxmesh_decal.shader"
        subpass = "LocalDecals"
    }
}
entity = {
    name = "decal_<name>_entity"
    pdxmesh = "decal_<name>_mesh"
}
```

### Create placement mask

/Europa Universalis V/game/in\_game/content\_source/map\_objects/masks/<name>\_mask.png

* Grayscale PNG: white = spawn, black = no spawn

### Add generator

/Europa Universalis V/game/in\_game/content\_source/map\_objects/generators/vegetation\_generators.txt:

```
@<name>_density_base = 1.0005
<name>_generator_low = {
    layer = "vegetation_low"
    max_density = @[<name>_density_base * density_factor_low]
    mask = "<name>_mask"
    meshes = { "decal_<name>_mesh" = 1.00 }
    density_curve = { { x = 0.0 y = 0.29 } { x = 1.0 y = 0.32 } }
    scale_curve = { { x = 0.9 y = 2.9 } { x = 1.0 y = 3.0 } }
    scale_fuzziness_curve = { { x = 1.0 y = 0.1 } }
}
<name>_generator_medium = { clone = <name>_generator_low  layer = "vegetation_medium"  max_density = @[<name>_density_base * density_factor_medium] }
<name>_generator_high = { clone = <name>_generator_low  layer = "vegetation_high"  max_density = @[<name>_density_base * density_factor_high] }
```

## Water 3D Map

The 3D watermap image is created by hand, using GIMP or whichever photo editing software you prefer, and is located in /Europa Universalis V/game/in\_game/gfx/map/water/watercolor\_rgb\_waterspec\_a.dds
For this guide all color codes are hexadecimal.

1. Take master height map, shrink to dimensions of water map (8192 x 4096)
2. Fill in oceans with chosen colors, recommended is 0d1618
3. Fill in land with color, recommended is 385f5f
4. Select by color tool => selecting land, select=>border 5 px, fill this selection in it's entirety with coastal color. Recommended is 4c9396
5. Select by color => selecting only the sea colors, then just gaussian blur until satisfied

## External tools

Beside the included map editor, there are a number of tools created by the community to make map modding easier.

* [EU5 Map Maker](https://eumapeditor.neurel.ch/) by ralf.keller
* [Location Definition Tool](https://github.com/JammingEnd/Eu5_LocationDefinitionTool) by JammingEnd
* [GIMP Heightmap Filter](https://github.com/krendil/display-filter-heightmap) by krendil

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
| Map | Map • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |

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