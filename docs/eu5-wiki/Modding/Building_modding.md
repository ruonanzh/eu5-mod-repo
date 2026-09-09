<!-- source: https://eu5.paradoxwikis.com/Building_modding revid: 34697 fetched: 2026-09-09 -->
# Building modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Building modding** includes addition of new buildings and road types. Buildings are an essential piece of economic foundation of the game.

## Building type modding

Building type modding

**Game folderThis is the folder where the files for this type are stored.:** `common/building_types`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/icons/buildings"`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

**Building type modding** includes addition of new building types.

### Example

```
sanssouci = {
	is_foreign = no
	pop_type = nobles
	max_levels = 1

	employment_size = noble_cultural_employment

	category = cultural_category

	town = yes
	city = yes

	expensive = yes
	build_time = cultural_building_time

	country_potential = {
		always = no
	}
	allow = {
		always = no
	}

	modifier = {
		local_cultural_tradition = 0.33
		local_cultural_influence = 0.33
		local_crown_estate_power = 0.25
	}

	possible_production_methods = {
		capital_building_maintenance
	}
	custom_tags = { unique_palace }
	construction_demand = capital_building_construction
}
```

### Basic parameters

A building needs to know what pop type to employ and how many of them to employ - that is done via `pop_type` (which accepts the [pop type](/Pop_modding#pop_type_modding "Pop modding") key on the right side). The number of pops needed is governed via `employment_size` which accepts either a number or a [named script value](/Script_value#Named_values_and_inline_values "Script value").

When a building is supposed to make another building obsolete, it marks the obsolete building using `obsolete`, which accepts the key of the obsolete building on the right-hand side. Obsolete building must be defined before in the files. A building can mark multiple buildings obsolete.

### Building and destroying buildings

In order to see a certain building (let alone building it), the `country_potential` must be fulfilled., where the `ROOT` is the country trying to build the building. Additionally, if a building is unlocked by an advance using [unlock\_building](/Advance_modding#unlock_building "Advance modding"), it will require that advance even if it is not stated explicitly in script.

Next, in order to be built, a building needs to have a location to be built in. Valid locations are checked via `location_potential`. Some locations may also be valid but not buildable in - that can be checked via `allow`. Both are `location` triggers with `scope:actor` provided as the country.

Moreover, other conditions may apply. Adding a [location rank key](/index.php?title=Location_modding&action=edit&redlink=1 "Location modding (page does not exist)") paired with `yes` will make the building type require that or another location rank provided. Any and all location ranks added this way will also be represented in the UI.

* `is_foreign = yes` will mark the building as "foreign" - such a building can only be built in locations not owned by the actor. If the owner has blocked building with the actor, it will also not possible
* `in_empty` works similarly, allowing building in locations not owned by actor. `empty` will mean this building can built in locations without owner only (so, uncolonized), `owned` will make it buildable in locations with an owner, and `any` will allow for both.
* `stronger_power_projection = yes` will make the foreign building require actor to have more power projection that the target location's owner.
* `need_good_relation = yes` will require the owner of the location to have "good relations" governed by the [GOOD\_RELATION\_THRESHOLD\_FOR\_BUILDINGS](/Defines#GOOD_RELATION_THRESHOLD_FOR_BUILDINGS "Defines") define entry (Vanilla value: `100`).
* `own_or_overlord_relation_needed` accepts a [scripted relation object key](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") which will be required to build this building.

The duration for which the building construction takes place is governed by `build_time` which takes either a number or a [named script value](/Script_value#Named_values_and_inline_values "Script value").

### Building pricing and demands

Building price can be assigned using `price` which takes a [price object](/index.php?title=Price_modding&action=edit&redlink=1 "Price modding (page does not exist)"). However, if not provided - the game has a backup system for deciding the price.

If a building is unlocked by an advance, the game will pull the age that advance is in and fetch building price based on that age by adding `p_building_<key>`. If there is no advance, the first age is assumed.
If a building has been marked as an expensive one via `expensive = yes`; the prefix changes to `p_expensive_building_`.

Moreover, if a building has been marked as buildable by an estate (via `estate`) - it will use the `small_estate_building` price. Moreover, estate buildings dont cost maintenance and cannot be built by nations.

A building's price can be further increased per each level by using `increase_per_level_cost` each level of building will increase the cost times that amount. The right hand side is a number that cannot be a named value.

While a building is being constructed, it will add demand to local market that is set via `construction_demand`.

### Maximum building level

Maximum building level is decided via `max_levels` script value. The ROOT in this script value is `location` with `scope:owner` for the owner, and `scope:builder` for the paying country.

### Building removal and closing

Buildings can be closed by default, but this behavior may be turned off using `can_close = no`.

Similarly, any building can be destroyed by default, unless it is disabled with `can_destroy` trigger. The `ROOT` in that trigger is `location`, with country `scope:actor` and building `scope:building` provided.
Similarly, `destroy_if` exists to automatically remove buildings when they fulfill this trigger. The ROOT is is `building` scope and there is `scope:actor` provided for building owner.

A price may also be added to destroying a building using `destroy_price`, which takes the [price object](/index.php?title=Price_modding&action=edit&redlink=1 "Price modding (page does not exist)") key on the right side.

### Tags and graphical tags

Buildings can be given tags by using `custom_tags`, which accept a list of strings:

```
custom_tags = {
	lategame_manufactory
	guild
}
```

Those can then be checked using [has\_tag](/Triggers#has_tag "Triggers") trigger.

Similarly, graphical tags can be set using `graphical_tags`.

```
graphical_tags = { palace }
```

### Building modifiers

Buildings have a lot of modifier fields with a lot of differing behavior:

| Modifier attribute | Category | Affected by pop and good shortages | Behavior |
| --- | --- | --- | --- |
| **modifier** | `location` | Yes | Regular location modifier. |
| **raw\_modifier** | `location` | No | Not affected by pop and good shortages. |
| **market\_center\_modifier** | `location` | Yes | Applies only if building is placed in the market center. |
| **capital\_modifier** | `location` | Yes | Applies only if building is placed in the building owner's capital location. |
| **capital\_country\_modifier** | `country` | Yes | Applies a country modifier when placed in building owner's capital. |
| **foreign\_country\_modifier** | `country` | Yes | Applies a country modifier to building owner when placed in another country. Must be foreign. |

None of the modifiers allow for arbitrary scaling or arbitrary conditions. If one wants to have a building scale its efficiency somehow - the `max_levels` is a script value that can be dynamic.

### Production methods

[Production methods](#Production_method_modding) can be assigned to a building in one of two ways - `possible_production_methods` and `unique_production_methods`.

Possible production methods is a list of key references to methods from the production method database (`common/production_methods`):

```
possible_production_methods = {
	monastery_maintenance
	composite_nature_maintenance
	single_nature_maintenance
	dual_nature_maintenance
	separate_nature_maintenance
}
```

The usage of production methods from the database (`common/production_methods`) is mandatory, trying to define the production method directly inside `possible_production_methods` will break the building definition.

Meanwhile, unique production methods are just production methods, but created in the building itself:

```
horse_breeders_maintenance = {
	produced = horses
	output = 1
	wheat = 1.5
	horses = 0.3
	category = building_maintenance
}
```

While used in conjunction with `[REPLACE](/Mod_compatibility#Inject_and_replace_2 "Mod compatibility")`, do not use the same localisation key. For example, when replacing `horse_breeders`, you will need to change `horse_breeders_maintenance` to something else new (even if you do not touch the production methods at all), otherwise the production methods list will break.

### Building effects

Building can run 4 effects relating to them:

| Parameter name | ROOT Scope | Additional scopes | Behavior |
| --- | --- | --- | --- |
| **on\_construction\_started** | `building` | None | Fires on the buiding when its construction starts. |
| **on\_construction\_ended** | `building` | None | Runs when the construction finishes - either due to cancellation or due to being complete. |
| **on\_built** | `building` | None | Runs when the building is added to a location (changing level does not count) - also notably fires for when it is added via script. |
| **on\_destroyed** | `building` | None | Runs when the building is destroyed. |

### Other parameters

* `lifts_fog_of_war = yes` will lift the fog of war in the location the building is built in for its owner.
* `pop_size_created` is an attribute on foreign buildings that accepts a number or [named script value](/Script_value#Named_values_and_inline_values "Script value") and, when that foreign building is created, it will migrate that amount of pops into the building's location to fulfill the demand instantly - taking them from the capital of the building owner country.
* `conversion_religion` the religion key on the right side is the religion that this building will convert pops to using `building_missionary_effort` modifier and related.
* `always_add_demands = yes` will make the building add full demand even if it is not fully employing.
* `allow_wrong_startup = yes` will make the game not error if a location got a building it setup it could not get.

### Icon

Building types will be assigned an icon according to the .dds entry in the icon database that shares their key. It can be assigned to a different one using `icon`.

```
icon = irrigation_systems
```

This will assign the icon to this building to `irrigation_systems.dds`.

### Building Ai

AI evaluates building worth based on what modifiers it provides. There are, however, a few parameters that can be used:

* `important_for_AI = yes` attribute will make the game spend more performance trying to build this building. Should be used selectively for important buildings.
* `AI_ignore_available_worker_flag = yes` will make the AI ignore the lack of relevant pop type for constructing this building. Used for buildings that increase pop promotion.
* `AI_optimization_flag_coastal = yes` can be used to optimize AI evaluation for buildings that can only be built in coastal locations.
* `ai_foreign_ignore_naval_range = yes` will make AI ignore the lack of naval range to the location this building is built in - used for foreign buildings and building based countries that do not own locations.

### Localisation

Every building has a title and description that need to be localized under:

* `<key>` for title
* `<key>_desc` for description

### Building category

A building can be assigned a [building category](/index.php?title=Building_category&action=edit&redlink=1 "Building category (page does not exist)") via `category` attribute. The right side expects key of the building category.

### Building category modding

Building category modding

**Game folderThis is the folder where the files for this type are stored.:** `common/building_categories`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

Building categories are objects that represent building categories. Instead of being identified by a string in a building, they are a database object stored in `common/building_categories`.

Every category needs to be localized with `<key>`.

The game code caches and uses one of the categories - `estate_category` - when overhauling building categories, it should not be removed.

Building categories are used like such:

```
estate_category = {
}

government_category = {
}

<...>
```

There is nothing that can be put inside categories.

A building's category can be checked in triggers using the [building\_category](/Triggers#building_category "Triggers") trigger.

### Building setup

*Main article: [Setup modding](/Setup_modding "Setup modding")*

`building_manager` is used to have certain buildings present in locations at game start. For a more templated approach, see [town setups](/Setup_modding#town_setups "Setup modding")

```
building_manager = {
	order_stronghold = {		#A building of type “order_stronghold”
		location = calatrava	# is present in calatrava location
		tag = CAS		# owned by CAS
		level = 1		# and is of level 1.
	}
}
```

## Production method modding

Production Method modding

**Game folderThis is the folder where the files for this type are stored.:** `common/production_methods`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

Production methods modding includes creation of production methods - collections of good demands that may result in production of another good. For some cases, production methods are used as good maintenance - they are only there to produce demand. Production methods are used in buildings as a form of maintenance cost and production of goods.

### Potential and allow

Like many other objects, production methods have a potential trigger field that decides when the production method should be visible. `ROOT` in this case is the country which would be using the production method.
For when a production method is visible but cannot be used - `allow` can be used.

Both fields can also use location scope to allow different production methods depending on location, within the same building. Location scope is accessed with `scope:target` rather than `location`.

Additionally, if a production method is unlocked by an advance using [unlock\_production\_method](/Advance_modding#unlock_production_method "Advance modding"), it will require that advance even if it is not stated explicitly in script.

### Maintenance

Good demands are declared with [good](/Goods_modding#goods "Goods modding") object pair with a number on the right representing the amount of that good that is demanded.

### Production

A production method may produce goods - the good is selected by assigning [good](/Goods_modding#goods "Goods modding") key on the right side of a `produced` statement. The amount produced in this way is 0 by default, so it must be set by using `output` with the number on the right side.

### Maintenance costs

Buildings will also require passive upkeep beyond the need for goods in the market - this upkeep is calculated based on the market price of production method inputs multiplied by [BUILDING\_UPKEEP\_FACTOR](/Defines#BUILDING_UPKEEP_FACTOR "Defines") define (Vanilla value: `nil`).

This maintenance cost for a production method can be disabled by entering `no_upkeep = yes` into the production method.

### Other parameters

`debug_max_profit = <number>` is set to test whether this production method would produce enough profit. The number on the right will be multiplied by 50 and 100 to set minimum and maximum profit respectively and information from this will be shown in the error log, the profit being calculated based on default market prices.

### Localisation

Every production method should be localized under its `<key>`.

## Employment system modding

Employment system modding

**Game folderThis is the folder where the files for this type are stored.:** `employment_systems`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

**Employment system modding** includes modding of employment systems - the way that countries determine how pops in their buildings are employed.

### Parameters

Employment systems only have 3 parameters.

`country_modifier` is a modifier of `country` type that is set when the employment system is used by the country.

`priority` is a script value on a `building` that determines which building in a location will be prioritized when filling with pops. Higher numbers get the priority.

`ai_will_do` is a script value that determines when the AI will want to change to this employment system. `ROOT` is the country in this case.

### Localisation

Each employment system should have the following localized:

* `<key>` representing the title.
* `<key>_desc` representing the description.

### Cached employment systems

`first_come_first_serve` is used by the game code and should not be removed by the game.

### Setting employment systems

In base Europa Universalis V, the employment system is set using `change_employment_system` [generic action](/Action_modding#generic_action_modding "Action modding"), where the target employment system is set using [set\_country\_employment\_system](/Effects#set_country_employment_system "Effects") effect.

## Road type modding

Road type modding

**Game folderThis is the folder where the files for this type are stored.:** `common/road_types`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/icons/roads"`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

**Road type modding** includes the creation of new road types - primary vectors for a country's ability where they can project proximity over land.

### Level

`level` is an integer that determines the tier of the road. All roads of a higher level are considered more modern and superior.

### Proximity, market\_access and movement cost impacts

All roads, no matter the values provided, will always provide a base proximity cost reduction based on the [road\_cost\_on\_distance\_from\_capital](/index.php?title=Modifiers&action=edit&redlink=1 "Modifiers (page does not exist)") modifier. In addition to that value, the value in `proximity` field is provided.

```
country_base_values = {
	road_cost_on_distance_from_capital = 20
}
```

and

```
road_type = {
	proximity = 5
}
```

will result in a proximity reduction of 25.

`movement_cost` is used to reduce the "time cost" of moving into this location for units and trade. This value is added to local location sources of [movement\_cost](/index.php?title=Modifiers&action=edit&redlink=1 "Modifiers (page does not exist)") and then multiplied. If there are no other sources of movement cost in the location, a `movement_cost = -0.25` would result in a multiplication of `0.75`, therefore cutting the time needed to travel into this location by 25%.

`market_access` is another number multiplier, this time to market access promulgation. A `market_access = -0.25` would result in 1/(1-0.25) more market access = +33.3%.

### Building and maintaining roads

Cost for building a road is governed via `price_per_unit_distance` attribute, which points to a [price](/index.php?title=Price_modding&action=edit&redlink=1 "Price modding (page does not exist)") object. It is theoretically possible to put other currencies other than gold, it must be considered that estates build roads by spending their gold - lack of gold in price could lead to estates building roads at no cost. The price cost is then modified with the price modifier and the distance between the two locations. The time to build that road is then governed via `build_time_per_unit_distance` which will take a number that will be scaled with the distance between locations for time it takes to construct the road.

While a road is being constructed, locations constructing the road will add the [demand](/index.php?title=Economy_Modding&action=edit&redlink=1 "Economy Modding (page does not exist)") in the `construction_demand` to the market. Once a road is constructed, roads will demand the demand outline on the right hand side of `maintenance_demand`.

### Color

The color of the road in the road mapmode is determined by the `color` attribute, which accepts a color on the right.

### Road triggers

Unlike many other types, roads cannot be hidden. They can only be disabled if they do not fulfill `enabled` trigger. The trigger's `ROOT` is the country with no additional scopes provided.

In addition, if a road type is unlocked by an advance using [unlock\_road\_type](/Advance_modding#unlock_road_type "Advance modding"), it will require that advance even if it is not stated explicitly in script.

There is no way to check a road's availability based on location or to hide a road.

### Splines

*Main article: [Graphics modding](/index.php?title=Graphics_modding&action=edit&redlink=1 "Graphics modding (page does not exist)")*

`spline_style_id` identifies the spline this road is connected with. The valid numbers here are 0-15.

### Localisation

Each road type should have the following localized:

* `<key>` representing the title.
* `<key>_desc` representing the description.

### Road setup

*Main article: [Setup modding](/Setup_modding "Setup modding")*

`road_network` is used to define road connections at game start, which will by default pick the earliest road possible. Pairs of location keys are accepted here.
The locations provided need to be adjacent, so a road chain must be declared location pair by location pair:

```
road_network = {
	 london = barking #Create road from london location to barking location
}
```

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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • Buildings • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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