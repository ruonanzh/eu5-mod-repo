<!-- source: https://eu5.paradoxwikis.com/Goods_modding revid: 22124 fetched: 2026-09-09 -->
# Goods modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Goods modding** involves the creation of new good types, adding raw materials to game start, and defining demands of pops.

## Good type modding

Good types

**Game folderThis is the folder where the files for this type are stored.:** `common/goods`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**Icon folderThis is the folder where icons for this type *must* go.:** `"gfx/interface/icons/trade_goods"`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

Good type modding involves the creation of new good types.

### Example

```
copper = {
	method = mining
	category = raw_material
	color = goods_copper
	default_market_price = 3
	transport_cost = 2
}
```

### Creating raw materials

Goods can be marked as raw materials using `category = raw_material`. If the created good is not meant to be a raw material, it should be explicitly marked as such using `category = produced`.

Raw materials need to have a gathering type specified using `method`. There are 5 gathering types available and `farming` is the default one:

* `mining`
* `farming`
* `hunting`
* `gathering`
* `forestry`

### Basic attributes

`color` is an attribute to associate a good with a color for mapmode purposes - the RHS uses color notation.

`food` is a number of food units that this good produces for the province.

`default_market_price` is the default price of the good when supply and demand are equal to each other.

`transport_cost`, default 1, is the measure of how pricy this good is to transport when importing and exporting. Goods that are harder to transport will yield less in trade income.

### Slaves good

There needs to be one and only one good marked with `is_slaves = yes`.

### Base production

Some goods can be made to be produced in every location with `base_production`. Every location in a market will then supply the market with this value times scaled by development (0 for 0 development, 1 for 100 development). The right side is a number but not a script value.

### Tags

Goods can be given tags by using `custom_tags`, which accept a list of strings:

```
custom_tags = {
	lategame_manufactory
	guild
}
```

Those can then be checked using [has\_tag](/Triggers#has_tag "Triggers") trigger.

### Pop type demands

Basic values for pop demands are handled via [pop\_demand](#Pop_demands) goods category. Goods, in addition, have two fields to impact goods demand on pop type basis that accept pop type (and a few other wildcards) - value pairs. Those fields are `demand_add` and `demand_multiply`.

Example:

```
demand_add = {
	all = 0.001
}
demand_multiply = {
	upper = 2
	slaves = 0
	tribesmen = 0
}
```

Demand add will add the right-side amount of demand per pop type and multiply will multiply the value added by add.

Regarding wildcards:

* `all` is a wildcard that stands for all pop types
* `upper` is a wildcard that stands for pop types that are "upper class", i.e. pop types that have `upper = yes` attribute.

`wealth_impact_threshold` attribute works similarly to make pops only demand the good if their estates' wealth meets the declared threshold. It uses the same syntax.

### Other parameters

* `block_rgo_upgrade = yes` can be used to block rgo expansion of this good.
* `inflation = yes` marks this good as one that may cause inflation when produced. The inflation is calculated as this goods' share of total good production multiplied by [INFLATION\_RGO\_INCOME\_FACTOR](/Defines#INFLATION_RGO_INCOME_FACTOR "Defines") define (Vanilla value: `2`)
* `development_threshold` is the development value a location needs to reach before pops in it will starting demanding this good.

### Ai importance

There are two ways to impact the AI when it comes to goods - `ai_rgo_size_importance` and `ai_rgo_expansion_priority` - both accept numbers but not script values.

`ai_rgo_size_importance`, default value 1, is used to increase the value of rgo size modifiers in the location. This value is multiplied with the market price of the good and [AI\_RGO\_SIZE\_PRICE\_UTIL](/Defines#AI_RGO_SIZE_PRICE_UTIL "Defines") define (Vanilla value: `0.02`)

`ai_rgo_expansion_priority` is used to determine AIs priority for expanding this good when it is in shortage of it - used for RGOs that are important for the economy to function.

### Hardcoded goods

There is one good that the game needs access to internally: `tools`.

### Modifier types

Every good should also have modifier types associated with it:

* `ban_exports_of_<key>` - used for embargos
* `ban_imports_of_<key>` - used for embargos
* `local_<key>_output_modifier` - used for increasing local goods production
* `global_<key>_output_modifier` - used for increasing country-wide goods production
* `can_extract_<key>` - determined if a country can benefit from RGO of this good

### Localisation

Every good should have its name and desc localized with:

* `<key>`
* `<key>_desc`

As well as any modifier types it would use.

### Icons and illustrations

While trade goods follow the familiar icon folder logic like other objects - it must also be specified that trade goods also have illustrations placed in path defined by [TRADE\_GOODS\_ILLUSTRATION\_PATH](/Defines#TRADE_GOODS_ILLUSTRATION_PATH "Defines") define (Vanilla value: `"gfx/interface/icons/trade_goods/illustrations"`).

Moreover, entries for both illustrations and icons need a prefix defined by [GOODS\_ICON\_PREFIX](/Defines#GOODS_ICON_PREFIX "Defines") define (Vanilla value: `"icon_goods_"`).

## Good demands modding

Good demands

**Game folderThis is the folder where the files for this type are stored.:** `common/goods_demand`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

Good demands are good-value pairs that represent the good needs of certain in game objects. While technically the right side accepts script values, those script values only work in the case of pop demands - a special case of good demands.

### Example

```
road_maintenance = {
	lumber = 0.02
	masonry = 0.02
	sand = 0.01
	category = building_maintenance
}
```

### Syntax

Besides the good-value pairs, good demands also accept the following three attributes:

* `copy_from` accepts a key of a previously defined goods demand. When a good demand is copied over, its values are added onto existing entries, or added if there is no such good demand already existing.
* `hidden = yes` will hide the tooltip for the demand.
* `category` is used to assign a category of a goods demand.

### Hardcoded demands

These are demands that the game requires to function:

* `grant_privilege`
* `revoke_privilege`
* `set_cabinet_action`
* `set_cabinet_member`
* `remove_government_reform`
* `embrace_institution`
* `market_create_demand`
* `market_destroy_demand`
* `default_construct_building`
* `capital_movement_demand`
* `create_supply_depot`
* `pop_demand`
* `minting_maintenance`
* `colonial_charter_maintenance`
* `slave_rgo_demands`
* `create_sea_exploration`
* `create_land_exploration`
* `create_conquistador`
* `upgrade_rgo_demand_farming`
* `upgrade_rgo_demand_mining`
* `upgrade_rgo_demand_gathering`
* `upgrade_rgo_demand_hunting`
* `upgrade_rgo_demand_forestry`

### Pop demands

Pop demands are a special case of goods demand - they fully accept the use of script values. Such pop demands are done in the `pop_demand` good demand.

```
pop_demand = {
	wine = {      # Demand for wine
		value = 1 # base value
		if = {
			limit = {
				#Andeans favor "Chicha" that is a beer
				culture = { has_culture_group = culture_group:andean_group }
			}
			multiply = {
				desc = "POP_DEMAND_CULTURAL_PREFERENCES"
				value = 0.5
			}
		}
		if = {
			limit = {
				#Japanese favor "Sake" that is a liquor
				culture = { has_culture_group = culture_group:japanese_group }
			}
			multiply = {
				desc = "POP_DEMAND_CULTURAL_PREFERENCES"
				value = 0.5
			}
		}
		...
	}
	...
}
```

### Good demand categories

Good demand category

**Game folderThis is the folder where the files for this type are stored.:** `common/goods_demand_category`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `in_game`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

Good demand categories are defined in a separate file - this is mostly used to define a way they are displayed in.

#### Example

```
government_activities = {
	display = integer
}
```

The only available attribute is `display`, which accepts one of the following three values:

* `pop`
* `integer`
* `default` (the default)

The display attribute is not known to do anything in particular.

#### Localisation

Good demand keys need to be localized with their key:

* `<key>`

## Starting good setup

In basegame, starting raw materials are defined in `in_game\map_data\location_templates.txt`, inside each location using `raw_material`:

```
stockholm = { ... raw_material = clay }
```

Due to the file's non-additive nature, it may be recommended to insert any good changes using on actions, which can be made additive:

```
on_game_start = {
	on_actions = {
		mod_goods_change
	}
}

mod_goods_change = {
	effect = {
		location:stockholm = {
			change_raw_material = goods:fish
		}
	}
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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • Goods • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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