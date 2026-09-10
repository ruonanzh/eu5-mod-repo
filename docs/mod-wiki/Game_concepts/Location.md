<!-- source: https://eu5.paradoxwikis.com/Location revid: 36695 fetched: 2026-09-09 -->
# Location

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") pre-release.

[![](/thumb.php?f=UI_location.png&width=330)](/File%3AUI_location.png)

A location

A location is the smallest unit of land. There are four types of locations:

* **Habitable** locations have [population](/Population "Population") and can support ownership or be entered by armies. Each habitable location has a dominant [culture](/Culture "Culture") and a dominant [religion](/Religion "Religion"), which are the culture and religion followed by most pops. Each habitable location also has a raw good and may construct or upgrade an [R.G.O.](/R.G.O. "R.G.O.") to extract it.
* **Impassable** locations do not have population and cannot support ownership or be entered by units. If all adjacent locations are owned by the same country, the impassable location will also take on the country's color on the map.
* **Corridor** locations do not have population and cannot support ownership but can be entered by armies and are always connected to two habitable locations. If both connected locations are owned by the same country, the corridor location will also take on the country's color on the map.
* **Seazone** locations do not have population and cannot support ownership but can be entered by navies. Seazones have Maritime Presence from adjacent countries.
  + **Sea Current** locations function like seazones but also include a directional current, indicated by waves when the map is zoomed in and with arrows when the map is zoomed out. Navies traveling in the same direction as the current will move faster.

## Map hierarchy

The map is divided into 6 levels of subdivisions:

* [![Continent.png](/thumb.php?f=Continent.png&width=24)](/Continent "Continent") Continent
* [![Sub continent.png](/thumb.php?f=Sub_continent.png&width=24)](/Sub-continent "Sub-continent") Sub-continent
* [![Region.png](/thumb.php?f=Region.png&width=24)](/Region "Region") Region
* [![Area.png](/thumb.php?f=Area.png&width=24)](/Area "Area") Area
* [![Province.png](/thumb.php?f=Province.png&width=24)](/Province "Province") Province
* [![Location.png](/thumb.php?f=Location.png&width=24)](/Location "Location") Location

Various actions will target different levels of the hierarchy.

Provinces share and distribute [![Food.png](/thumb.php?f=Food.png&width=24)](/Food "Food") Food between its locations, and levies are raised from an entire province at once. Several cabinet actions target a province. Each province has a province capital, which has a star in the middle of the rank icon. If the province capital is occupied during war, all remaining unfortified locations are automatically occupied by the invader over a short period of time. If a province spreads over two market areas, the market where the province capital is located will be used to buy and sell food. Each province has its own provincial food storage. Any food that is not consumed by the pops in a location is contributed to the provincial food storage. If monthly food is negative, stored food will be consumed. If there is a deficit, the province will buy food from its market, and if there is a surplus, the province will sell food on its market. Armies in the province can also consume stored food if they would otherwise suffer attrition.

Provinces refer to both a static set of locations – sometimes called a province definition – as well as the set of locations that a country owns within that set. Thus, two or more countries can each have a province within the same province definition.

## Integration status

Integration status represents how well a location is incorporated into the administrative apparatus of its owner. Every owned location falls into one of four different statuses. Conquered locations can be integrated via the Integrate Province cabinet action, and the integration speed depends on the number and culture of the population. Reaching Core status requires a 50% or more population of primary and accepted cultures.

| Status | Pop growth | Effects |
| --- | --- | --- |
| **Colonized** | All cultures | * ![Monthly Control](/thumb.php?f=Global_monthly_control.png&width=24 "Monthly Control") +0.1% Monthly Control |
| **Conquered** | All cultures | * ![Garrison Growth](/thumb.php?f=Global_garrison_growth.png&width=24 "Garrison Growth") −0.5% Garrison Growth * ![Max Control](/thumb.php?f=Global_max_control.png&width=24 "Max Control") −10% Max Control * ![Pop Assimilation Speed](/thumb.php?f=Global_pop_conversion_speed.png&width=24 "Pop Assimilation Speed") −20 Pop Assimilation Speed * ![Local Pop Conversion Speed](/thumb.php?f=Global_pop_conversion_speed.png&width=24 "Local Pop Conversion Speed") −20 Local Pop Conversion Speed * ![Separatism](/thumb.php?f=Separatism.png&width=24 "Separatism") +50% Separatism |
| **Integrated** | All cultures | * ![Max Control](/thumb.php?f=Global_max_control.png&width=24 "Max Control") +5% Max Control * ![Pop Assimilation Speed](/thumb.php?f=Global_pop_conversion_speed.png&width=24 "Pop Assimilation Speed") −10 Pop Assimilation Speed * ![Separatism](/thumb.php?f=Separatism.png&width=24 "Separatism") +10% Separatism |
| **Core** | Primary and accepted cultures | * ![Only Primary & Accepted Pops can Grow](/thumb.php?f=Growth_is_primary_culture.png&width=24 "Only Primary & Accepted Pops can Grow")  Only Primary & Accepted Pops can Grow * ![Max Control](/thumb.php?f=Global_max_control.png&width=24 "Max Control") +20% Max Control * ![Monthly Control](/thumb.php?f=Global_monthly_control.png&width=24 "Monthly Control") +0.1% Monthly Control * ![Owner gets Vision when Occupied](/thumb.php?f=Owner_gets_vision_when_occupied.png&width=24 "Owner gets Vision when Occupied")  Owner gets Vision when Occupied |

## Rank

*Information about location ranks are available at /Europa Universalis V/game/in-game/common/location\_ranks/00\_default.txt*

|  |  |
| --- | --- |
| ![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png) | Please help improve this article or section by [**expanding it**](https://eu5.paradoxwikis.com/index.php?title=Location&action=edit) with:  * Information about the new megalopolis rank. |

Each location has a [![Location rank.png](/thumb.php?f=Location_rank.png&width=24)](/Rank "Rank") rank, which can be increased or decreased at any time. It affects what buildings can be constructed in the location, and increasing or decreasing the location rank will remove all incompatible buildings. The cost to increase a location's rank is impacted by market prices. Downgrading a location is instant and always costs 500 [![Resource gold.png](/thumb.php?f=Resource_gold.png&width=24)](/Gold "Gold") Gold and doesn't require goods.

| Rank | [![Global food capacity.png](/thumb.php?f=Global_food_capacity.png&width=24)](/File%3AGlobal_food_capacity.png) Food capacity | [![Global monthly food modifier.png](/thumb.php?f=Global_monthly_food_modifier.png&width=24)](/File%3AGlobal_monthly_food_modifier.png) Food production | Population | Other effects | [![Religion nahuatl.png](/thumb.php?f=Religion_nahuatl.png&width=24)](/File%3AReligion_nahuatl.png) Nahua Ritualism Doom | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") Base cost | Upgrade time | Requirements[[1]](#cite_note-1) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [![Rural Settlement icon](/thumb.php?f=Rural_settlement.png&width=64)](/File%3ARural_settlement.png "Rural Settlement icon") Rural Settlement  A Rural Settlement is land that is ripe for exploitation, representing everything from wilderness to clusters of countryside villages. |  | **+10%** |  | * [![Global max rgo size modifier.png](/thumb.php?f=Global_max_rgo_size_modifier.png&width=24)](/File%3AGlobal_max_rgo_size_modifier.png) **+100%** Maximum RGO size * [![Global population growth.png](/thumb.php?f=Global_population_growth.png&width=24)](/File%3AGlobal_population_growth.png) **+0.1%** Population growth * -20% [File:Local peasant enfranchisment.png](/index.php?title=Special:Upload&wpDestFile=Local_peasant_enfranchisment.png "File:Local peasant enfranchisment.png") | **+0.005** per month |  |  |  |
| [![Town icon](/thumb.php?f=Town.png&width=64)](/File%3ATown.png "Town icon") Town  A modest settlement able to fulfil basic manufacturing needs, a Town marks the beginnings of urban life. | 250 |  | * [![Global population capacity modifier.png](/thumb.php?f=Global_population_capacity_modifier.png&width=24)](/File%3AGlobal_population_capacity_modifier.png) **+20K** Population capacity * [![Pop nobles.png](/thumb.php?f=Pop_nobles.png&width=24)](/File%3APop_nobles.png) **+25** Possible Nobles * [![Pop clergy.png](/thumb.php?f=Pop_clergy.png&width=24)](/File%3APop_clergy.png) **+50** Possible Clerics * [![Pop soldiers.png](/thumb.php?f=Pop_soldiers.png&width=24)](/File%3APop_soldiers.png) **+100** Possible Soldiers * [![Pop burghers.png](/thumb.php?f=Pop_burghers.png&width=24)](/File%3APop_burghers.png) **+200** Possible Burghers * [![Pop laborers.png](/thumb.php?f=Pop_laborers.png&width=24)](/File%3APop_laborers.png) **+200** Possible Labourers * [![Global population capacity modifier.png](/thumb.php?f=Global_population_capacity_modifier.png&width=24)](/File%3AGlobal_population_capacity_modifier.png) **+10%** Population capacity | * [![Free building levels.png](/thumb.php?f=Free_building_levels.png&width=24)](/File%3AFree_building_levels.png) **+25** Supported building levels * [![Global max control.png](/thumb.php?f=Global_max_control.png&width=24)](/File%3AGlobal_max_control.png) **+5%** Max control * [![Global integration speed modifier.png](/thumb.php?f=Global_integration_speed_modifier.png&width=24)](/File%3AGlobal_integration_speed_modifier.png) **−25%** Speed of integration * [![Town rights.png](/images/a/a7/Town_rights.png)](/File%3ATown_rights.png) **+1** * [File:Local peasant enfranchisment.png](/index.php?title=Special:Upload&wpDestFile=Local_peasant_enfranchisment.png "File:Local peasant enfranchisment.png")+10% * [![Movement cost.png](/thumb.php?f=Movement_cost.png&width=24)](/File%3AMovement_cost.png) +10% * [File:File:Local frontage allowed positive.png](/index.php?title=Special:Upload&wpDestFile=File:Local_frontage_allowed_positive.png "File:File:Local frontage allowed positive.png") -1 | **+0.01** per month | 500 | 1 year | * [![Population.png](/thumb.php?f=Population.png&width=24)](/File%3APopulation.png) 5000 Population * [![Masonry](/thumb.php?f=Goods_masonry.png&width=24)](/Goods#Masonry "Masonry") 2 Masonry * [![Glass](/thumb.php?f=Goods_glass.png&width=24)](/Goods#Glass "Glass") 1 Glass * [![Lumber](/thumb.php?f=Goods_lumber.png&width=24)](/Goods#Lumber "Lumber") 1 Lumber |
| [![City icon](/thumb.php?f=City.png&width=64)](/File%3ACity.png "City icon") City  The very epitome of civilization, a City is a bustling metropolis of industry, great temples, and seats of governmental authority sprawled across multiple districts. | 500 |  | * [![Global population capacity modifier.png](/thumb.php?f=Global_population_capacity_modifier.png&width=24)](/File%3AGlobal_population_capacity_modifier.png) **+100K** Population capacity * [![Pop nobles.png](/thumb.php?f=Pop_nobles.png&width=24)](/File%3APop_nobles.png) **+50** Possible Nobles * [![Pop clergy.png](/thumb.php?f=Pop_clergy.png&width=24)](/File%3APop_clergy.png) **+100** Possible Clerics * [![Pop soldiers.png](/thumb.php?f=Pop_soldiers.png&width=24)](/File%3APop_soldiers.png) **+250** Possible Soldiers * [![Pop burghers.png](/thumb.php?f=Pop_burghers.png&width=24)](/File%3APop_burghers.png) **+1000** Possible Burghers * [![Pop laborers.png](/thumb.php?f=Pop_laborers.png&width=24)](/File%3APop_laborers.png) **+1000** Possible Labourers * [![Global population capacity modifier.png](/thumb.php?f=Global_population_capacity_modifier.png&width=24)](/File%3AGlobal_population_capacity_modifier.png) **+25%** Population capacity | * [![Free building levels.png](/thumb.php?f=Free_building_levels.png&width=24)](/File%3AFree_building_levels.png) **+100** Supported building levels * [![Global max control.png](/thumb.php?f=Global_max_control.png&width=24)](/File%3AGlobal_max_control.png) **+10%** Max control * [![Global integration speed modifier.png](/thumb.php?f=Global_integration_speed_modifier.png&width=24)](/File%3AGlobal_integration_speed_modifier.png) **−50%** Speed of integration * [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) **+25%** Pop promotion speed * [![Default.png](/thumb.php?f=Default.png&width=24)](/File%3ADefault.png) **+1** [![Max constructions at same time.png](/images/7/75/Max_constructions_at_same_time.png)](/File%3AMax_constructions_at_same_time.png) * [![Global construction speed.png](/thumb.php?f=Global_construction_speed.png&width=24)](/File%3AGlobal_construction_speed.png) **+25%** Construction speed * [File:Local peasant enfranchisment.png](/index.php?title=Special:Upload&wpDestFile=Local_peasant_enfranchisment.png "File:Local peasant enfranchisment.png") +25% * [File:Local trade center power](/index.php?title=Special:Upload&wpDestFile=Local_trade_center_power "File:Local trade center power") **+2,5%** * [![Town rights.png](/images/a/a7/Town_rights.png)](/File%3ATown_rights.png) **+2** * [File:Local mills build buildings efficiency](/index.php?title=Special:Upload&wpDestFile=Local_mills_build_buildings_efficiency "File:Local mills build buildings efficiency") **+20%** * +20% [![Movement cost.png](/thumb.php?f=Movement_cost.png&width=24)](/File%3AMovement_cost.png) * [![Local frontage allowed positive.png](/images/0/0f/Local_frontage_allowed_positive.png)](/File%3ALocal_frontage_allowed_positive.png) -2 * [![Fort limit.png](/images/3/37/Fort_limit.png)](/File%3AFort_limit.png) **+1** | **+0.03** per month | 2000 | 2 years | * [![Population.png](/thumb.php?f=Population.png&width=24)](/File%3APopulation.png) 30000 Population * [![Masonry](/thumb.php?f=Goods_masonry.png&width=24)](/Goods#Masonry "Masonry") 4 Masonry * [![Glass](/thumb.php?f=Goods_glass.png&width=24)](/Goods#Glass "Glass") 2 Glass * [![Lumber](/thumb.php?f=Goods_lumber.png&width=24)](/Goods#Lumber "Lumber") 2 Lumber |

## Topography

Each location has a [![Topography.png](/thumb.php?f=Topography.png&width=24)](/Topography "Topography") topography, which represents the relief and elevation of its area.

### Land topography

[![](/thumb.php?f=Map_topography.jpg&width=330)](/File%3AMap_topography.jpg)

The topography map

Land locations have one of the following topographies:

| Topography | Blocks vision | [![Movement cost.png](/thumb.php?f=Movement_cost.png&width=24)](/File%3AMovement_cost.png) Movement cost | Expanding RGO time | Road building time | [![Global monthly development.png](/thumb.php?f=Global_monthly_development.png&width=24)](/File%3AGlobal_monthly_development.png) Development | Proximity impact | Other effects |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [![Flatland icon](/images/f/f4/Topography_flatland.png)](/File%3ATopography_flatland.png "Flatland icon") Flatland  Flatland represents terrain that does not have any major topographic variation, so there are no impediments for Army movement or Building development. |  |  |  |  |  |  |  |
| [![Hills icon](/thumb.php?f=Topography_hills.png&width=64)](/File%3ATopography_hills.png "Hills icon") Hills  A terrain with hills has variations in the topography, but the slopes are not as steep nor as high as those of mountains, so the penalties are also not as bad. | * Sea * Land | **+50%** | **+25%** | **+100%** | **−25%** | **+25%** | * **−10%** Food production * **+1** Attacker penalty in combat * **−3** Possible frontage |
| [![Mountains icon](/thumb.php?f=Topography_mountains.png&width=64)](/File%3ATopography_mountains.png "Mountains icon") Mountains  Mountain terrain has high altitude and also steep slopes with relatively few and narrow flat areas, so it is more difficult for Armies to cross and fight in it, and also more difficult to develop. | * Sea * Land | **+100%** | **+100%** | **+300%** | **−50%** | **+50%** | * **−50%** Population capacity * **−20%** Food production * **+2** Attacker penalty in combat * **−4** Possible frontage * Armies cannot enter during normal and severe winter |
| [![Plateau icon](/thumb.php?f=Topography_plateau.png&width=64)](/File%3ATopography_plateau.png "Plateau icon") Plateau  They represent relatively flat areas situated at high altitude, so they have some penalties compared to flatlands due to their elevation. | Sea | **+25%** | **+25%** | **+50%** | **−25%** | **+12.5%** | * **+1** Attacker penalty in combat * **−1** Possible frontage |
| [![Wetlands icon](/thumb.php?f=Topography_wetlands.png&width=64)](/File%3ATopography_wetlands.png "Wetlands icon") Wetlands  Wetlands are terrain that is partially flooded, generally due to being near a river, lake, or coast. |  | **+50%** | **+25%** | **+100%** | **−30%** | **+25%** | * **−10%** Food production * **+1** Attacker penalty in combat * **−3** Possible frontage |

### Seazone topography

[![](/thumb.php?f=Seazone_frozen_over.png&width=330)](/File%3ASeazone_frozen_over.png)

A seazone that has frozen

Seazones have one of the following topographies. Some seazones will freeze if the location experiences winter, which blocks ships from moving and allows armies to move on them. If an army is on a seazone when it thaws, half of it will be destroyed.

| Topography | Can freeze | Effects |
| --- | --- | --- |
| [![Atoll icon](/images/d/d2/Topography_atoll.png)](/File%3ATopography_atoll.png "Atoll icon") Atoll  Atolls are circular low-altitude islands that usually encircle a lagoon. | ![No](/thumb.php?f=No.png&width=24 "No") |  |
| [![Narrows icon](/images/1/1f/Topography_narrows.png)](/File%3ATopography_narrows.png "Narrows icon") Narrows  Narrows are areas of sea with proximity of coast on many sides, like straits or the sea inside archipelagos, where there is not much space for movement. | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | * **+20%** Movement cost of units * **−2** Possible frontage * **+1** Attacker penalty in combat * Blocks vision from sea |
| [![Inland Sea icon](/images/0/06/Topography_inland_sea.png)](/File%3ATopography_inland_sea.png "Inland Sea icon") Inland Sea  Inland seas represent the land-enclosed seas like the Mediterranean or the Baltic. | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") |  |
| [![Coastal Ocean icon](/images/d/d2/Topography_coastal_ocean.png)](/File%3ATopography_coastal_ocean.png "Coastal Ocean icon") Coastal Ocean  This is the open seas between the continents, where only the best of ships can travel, but in the areas closer to the coast. | ![No](/thumb.php?f=No.png&width=24 "No") |  |
| [![Ocean icon](/thumb.php?f=Topography_ocean.png&width=64)](/File%3ATopography_ocean.png "Ocean icon") Ocean  This is the open seas between the continents, where only the best of ships can travel. | ![No](/thumb.php?f=No.png&width=24 "No") | **+1** Naval attrition |
| [![Deep Ocean icon](/images/7/76/Topography_deep_ocean.png)](/File%3ATopography_deep_ocean.png "Deep Ocean icon") Deep Ocean  This is the open seas between the continents, where only the best of ships can travel, in the furthest areas from any coast. | ![No](/thumb.php?f=No.png&width=24 "No") | **+2** Naval attrition |
| [![Lakes icon](/images/8/81/Topography_lakes.png)](/File%3ATopography_lakes.png "Lakes icon") Lakes  Lakes represent inland bodies of water without any contact with the open sea except through possible rivers, so no ships of relevance are able to sail in them. | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | Blocks vision from sea |
| [![Salt Pan icon](/images/7/7a/Topography_salt_pans.png)](/File%3ATopography_salt_pans.png "Salt Pan icon") Salt Pan  Salt Pans are barren expanses of extremely flat land formed by the evaporation of a lake or a pond. | ![No](/thumb.php?f=No.png&width=24 "No") |  |
| [![Ocean Wasteland icon](/thumb.php?f=Impassable_terrain.png&width=64)](/File%3AImpassable_terrain.png "Ocean Wasteland icon") Ocean Wasteland  This is ocean sea outside of the main currents, so it is not a convenient path for ships to take, as they could end up stranded in the middle of it. | ![No](/thumb.php?f=No.png&width=24 "No") | Impassable |

### Coast

Locations that are not adjacent to a seazone that cannot support ships, have a port or build ships and cannot be blockaded. Locations that are adjacent to a seazone can have a port and build ships and can be blockaded. In addition, locations that are adjacent to a seazone receive the following bonuses:

* ![Local Monthly Development Growth](/thumb.php?f=Global_monthly_development.png&width=24 "Local Monthly Development Growth") +10% Local Monthly Development Growth
* ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") +5% Local Food Production %
* ![Local Population Capacity %](/thumb.php?f=Global_population_capacity_modifier.png&width=24 "Local Population Capacity %") +25% Local Population Capacity %
* ![Supply Limit](/thumb.php?f=Global_supply_limit_modifier.png&width=24 "Supply Limit") +5% Supply Limit

**All Coastal Locations also have a Natural Harbor Suitability, which ranges from 0% to 100% and gives the following bonuses scaled by %:**

[![Natural harbor suitability.png](/thumb.php?f=Natural_harbor_suitability.png&width=24)](/File%3ANatural_harbor_suitability.png) **0-1** Harbor capacity

[![Building.png](/thumb.php?f=Building.png&width=24)](/File%3ABuilding.png)  **0-60%** Port Buildings Efficiency

[![Market.png](/thumb.php?f=Market.png&width=24)](/File%3AMarket.png) **0-1%**  Market Attraction

**Harbor Capacity also applies bonuses which at 1 Harbor Capacity gives the following :**

[![Maritime presence.png](/thumb.php?f=Maritime_presence.png&width=24)](/File%3AMaritime_presence.png) **+0.30** Local Maritime Presence

[![Local proximity source.png](/thumb.php?f=Local_proximity_source.png&width=24)](/File%3ALocal_proximity_source.png) **−75%** Proximity Cost Through Port

[![Navy attrition.png](/thumb.php?f=Navy_attrition.png&width=24)](/File%3ANavy_attrition.png) **−5.0** Naval attrition

[![Army disembark speed.png](/thumb.php?f=Army_disembark_speed.png&width=24)](/File%3AArmy_disembark_speed.png) **−20%** Disembark time

[![Global trade through owned territory cost modifier.png](/thumb.php?f=Global_trade_through_owned_territory_cost_modifier.png&width=24)](/File%3AGlobal_trade_through_owned_territory_cost_modifier.png) **−50%** Trade embark/disembark cost

Harbor Capacity can further be increased above 1 by Buildings and Town Rights.

### Straits

A Strait connects two [Locations](/Locations "Locations") that are separated by a [Seazone](/Seazone "Seazone"), but are close enough to each other so [Armies](/Armies "Armies") can cross it without the need of a [Navy](/Navy "Navy").
This is represented by a dotted golden line between the two locations on the world map.

Armies can travel across a strait so long as the strait is not blocked by a hostile fleet in the sea zone, unless both sides of the strait are owned by the army's controller or those they have military access with. Food and supply lines can go over straits regardless of any naval blockade.

Units who cannot retreat over a blocked strait to friendly territory or friendly naval transports after being broken in battle will be stack wiped. A manual forced retreat will have the army stay in place and restart the battle.

### River

Certain land locations may have rivers between them, which give the following bonuses:(Unrecognized modifier "river\_flowing\_through" for [Module:Modifier](/Module%3AModifier "Module:Modifier"))(Unrecognized modifier "river\_flowing\_through\_coast" for [Module:Modifier](/Module%3AModifier "Module:Modifier")) if location is coastal
If an army attacks immediately after crossing a river, it will receive penalties in combat. Rivers are not navigable by navies.

Tracing control from a proximity source downstream a river reduces the base [![Proximity cost.png](/thumb.php?f=Global_distance_from_capital_cost_modifier.png&width=24)](/Proximity_cost "Proximity cost") proximity cost between locations by **−28** (in earlier versions, this bonus would be different when travelling upstream or downstream). This bonus is mutually exclusive with the ones provided by roads – only the highest reduction will apply. In addition, a location upstream of a market center will have a **−10%** market access loss reduction, while a location downstream will have **−50%**.

### Sound tolls

A few locations have a Sound Toll, which add an additional Gold cost to trade routes from other countries that pass through the location and give 10% of that [![Resource gold.png](/thumb.php?f=Resource_gold.png&width=24)](/Gold "Gold") Gold to the location's owner. Hovering over a Sound Toll will list all trade routes going through the location and the income from each. The following locations have Sound Toll:

* Hormuz
* Kōnstantinoúpolis
* Roskilde

Countries can become exempt from Sound Tolls either through a Treaty or through events. Countries owning a Sound Toll location can remove exemptions but this will give the previously-exempt country the Sound Tolls Exemptions Broken casus belli.

### Grand Canal of China

The Grand Canal of China is not visible on the world map and can only be seen as part of location modifiers. The canal flows through the following locations: Hangzhou, Wutong, Jiaxing, Songling, Suzhou, Wuxi, Changzhou, Danyang, Zhenjiang, Jiangdu, Gaoyou, Yancheng Baoying, Huaian, Huaiyin, Taoyuan Huaian, Suqian, Suicheng, Xuzhou, Peicheng, Guting, Jining, Wenshang, Dongping Yanzhou, Tongcheng, Liaocheng, Linqing, Guantao, Gexianzhuang, Gucheng Jingzhou, Dezhou, Sangyuan, Dongguang, Nanpi, Cangzhou, Qingzhou Hejian, Jinghai, Tianjin, Wuqing, Tongzhou, Beijing.

The Grand Canal of China gives every location it passes through the following bonuses:

* ![Local Proximity Efficiency](/thumb.php?f=Global_distance_from_capital_cost_modifier.png&width=24 "Local Proximity Efficiency") +20% Local Proximity Efficiency
* ![Local Food Capacity](/thumb.php?f=Global_food_capacity.png&width=24 "Local Food Capacity") +100 Local Food Capacity
* ![Local Monthly Development Growth](/thumb.php?f=Global_monthly_development.png&width=24 "Local Monthly Development Growth") +5% Local Monthly Development Growth

After 1345 there is a 10% chance each month that the canal will be damaged, replacing its bonus with a **+10%** Proximity Cost penalty. Afterwards, as long as the Emperor of China owns at least one location that is part of the Grand Canal of China, every 4 years it has a 2.5% chance to be offered to pay a very large amount of scaled gold to repair the canal and restore its initial effects.

## Climate

[![](/thumb.php?f=Map_climate.jpg&width=330)](/File%3AMap_climate.jpg)

The climate map

Each location has a [![Climate.png](/thumb.php?f=Climate.png&width=24)](/Climate "Climate") climate, which determines whether it can have winter effects and how severe they can be, as well as how much population it can support.

| Climate | Max winter | [![Global population capacity modifier.png](/thumb.php?f=Global_population_capacity_modifier.png&width=24)](/File%3AGlobal_population_capacity_modifier.png) Population capacity | [![Global supply limit modifier.png](/thumb.php?f=Global_supply_limit_modifier.png&width=24)](/File%3AGlobal_supply_limit_modifier.png) Supply limit | [![Global life expectancy.png](/thumb.php?f=Global_life_expectancy.png&width=24)](/File%3AGlobal_life_expectancy.png) Character life expectancy | [![Global monthly development.png](/thumb.php?f=Global_monthly_development.png&width=24)](/File%3AGlobal_monthly_development.png) Monthly development growth | Wheat output |
| --- | --- | --- | --- | --- | --- | --- |
| [![Arctic icon](/thumb.php?f=Climate_arctic.png&width=64)](/File%3AClimate_arctic.png "Arctic icon") Arctic  Arctic represents areas with very cold winters. | [![Severe winter.png](/thumb.php?f=Severe_winter.png&width=30)](/File%3ASevere_winter.png) Severe | **−33%** | **−20%** | **−5** | **−25%** |  |
| [![Hot Arid icon](/thumb.php?f=Climate_arid.png&width=64)](/File%3AClimate_arid.png "Hot Arid icon") Hot Arid  Hot Arid represents an area that has a severe lack of available water. | None |  | **−10%** | **−5** |  | **−10%** |
| [![Continental icon](/thumb.php?f=Climate_continental.png&width=64)](/File%3AClimate_continental.png "Continental icon") Continental  Continental represents areas with cold winters. | [![Normal winter.png](/thumb.php?f=Normal_winter.png&width=30)](/File%3ANormal_winter.png) Normal | **+50%** |  |  |  |  |
| [![Mediterranean icon](/thumb.php?f=Climate_mediterranean.png&width=64)](/File%3AClimate_mediterranean.png "Mediterranean icon") Mediterranean  Mediterranean represents areas with a perfect climate, where everyone wants to live. | None | **+150%** |  |  |  |  |
| [![Oceanic icon](/thumb.php?f=Climate_oceanic.png&width=64)](/File%3AClimate_oceanic.png "Oceanic icon") Oceanic  Oceanic represents areas with mild winters but high humidity. | [![Mild winter.png](/thumb.php?f=Mild_winter.png&width=30)](/File%3AMild_winter.png) Mild | **+100%** |  |  |  |  |
| [![Cold Arid icon](/thumb.php?f=Climate_cold_arid.png&width=64)](/File%3AClimate_cold_arid.png "Cold Arid icon") Cold Arid  Cold Arid represents an area that has a severe lack of available water but experiences winters. | [![Mild winter.png](/thumb.php?f=Mild_winter.png&width=30)](/File%3AMild_winter.png) Mild |  | **−5%** |  |  | **−5%** |
| [![Subtropical icon](/thumb.php?f=Climate_subtropical.png&width=64)](/File%3AClimate_subtropical.png "Subtropical icon") Subtropical  Subtropical represents areas with high average temperatures and mild winters. | None | **+100%** |  |  |  |  |
| [![Tropical icon](/thumb.php?f=Climate_tropical.png&width=64)](/File%3AClimate_tropical.png "Tropical icon") Tropical  Tropical represents areas with high average temperatures and no winter. | None | **+50%** |  | **−5** | **−10%** |  |

### Winter

Depending on climate, locations may have [![Winter.png](/thumb.php?f=Winter.png&width=24)](/Winter "Winter") winters, which give increasing penalties. The severity of a winter in each location at a given in game date is semi-random but limited by climate. Winters begin around January for locations in the northern hemisphere and around June for locations in the southern hemisphere. Armies cannot move into locations with Mountains topography with Normal or Severe winter level. Winters always start as mild and increase in severity then reverse and decrease in severity

| Winter level | Effects |
| --- | --- |
| [![Mild winter.png](/thumb.php?f=Mild_winter.png&width=50)](/File%3AMild_winter.png) Mild | * ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −25% Local Food Production % * ![Maximum Attrition](/thumb.php?f=Max_attrition.png&width=24 "Maximum Attrition") +2 Maximum Attrition |
| [![Normal winter.png](/thumb.php?f=Normal_winter.png&width=50)](/File%3ANormal_winter.png) Normal | * ![Army Attrition](/thumb.php?f=Army_attrition.png&width=24 "Army Attrition") +1% Army Attrition * ![Construction Speed](/thumb.php?f=Global_construction_speed.png&width=24 "Construction Speed") −50% Construction Speed * ![Food Decay](/thumb.php?f=Global_food_decay.png&width=24 "Food Decay") +0.25% Food Decay * ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −50% Local Food Production % * ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +5 Naval Attrition * ![Maximum Attrition](/thumb.php?f=Max_attrition.png&width=24 "Maximum Attrition") +2 Maximum Attrition |
| [![Severe winter.png](/thumb.php?f=Severe_winter.png&width=50)](/File%3ASevere_winter.png) Severe | * ![Constructions Stalled](/thumb.php?f=Constructions_stalled.png&width=24 "Constructions Stalled")  Constructions Stalled * ![Army Attrition](/thumb.php?f=Army_attrition.png&width=24 "Army Attrition") +2% Army Attrition * ![Food Decay](/thumb.php?f=Global_food_decay.png&width=24 "Food Decay") +0.5% Food Decay * ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −200% Local Food Production % * ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +10 Naval Attrition * ![Maximum Attrition](/thumb.php?f=Max_attrition.png&width=24 "Maximum Attrition") +4 Maximum Attrition * ![Movement Cost](/thumb.php?f=Movement_cost.png&width=24 "Movement Cost") +25% Movement Cost |

## Vegetation

[![](/thumb.php?f=Map_vegetation.jpg&width=330)](/File%3AMap_vegetation.jpg)

The vegetation map

Each location has a [![Vegetation.png](/thumb.php?f=Vegetation.png&width=24)](/Vegetation "Vegetation") vegetation type, which represents the foliage cover of its area.

| Vegetation | [![Global population capacity modifier.png](/thumb.php?f=Global_population_capacity_modifier.png&width=24)](/File%3AGlobal_population_capacity_modifier.png) Pop cap | Road building time | Development growth | Proximity impact | Movement cost | Blocks vision | Other effects |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [![Desert icon](/thumb.php?f=Vegetation_desert.png&width=64)](/File%3AVegetation_desert.png "Desert icon") Desert  Deserts are barren landscapes with little precipitation and almost no potential for plant or animal life. | **+10K** | **+100%** | **−33%** | **+5%** | **+10%** |  | * Cyclones cause Sandstorms * **−33%** Food production * **−5** Supply limit * **+50%** Expanding RGO time |
| [![Sparse icon](/thumb.php?f=Vegetation_sparse.png&width=64)](/File%3AVegetation_sparse.png "Sparse icon") Sparse  Sparse represent large flat areas of land with few or no trees. | **+25K** | **−10%** |  |  |  |  |  |
| [![Grasslands icon](/thumb.php?f=Vegetation_grasslands.png&width=64)](/File%3AVegetation_grasslands.png "Grasslands icon") Grasslands  Grasslands represent terrain dominated by grass with little or no trees or shrubs. | **+50K** | **−10%** |  |  |  |  | **+2** Supply limit |
| [![Farmlands icon](/thumb.php?f=Vegetation_farmland.png&width=64)](/File%3AVegetation_farmland.png "Farmlands icon") Farmlands  Farmland represents anthropogenic terrain, devoted to crops and/or extensive pastures. | **+100K** | **+10%** | **+10%** | **+5%** | **+10%** |  | * **+10%** Maximum RGO size * **+33%** Food production * **+5** Supply limit |
| [![Woods icon](/thumb.php?f=Vegetation_woods.png&width=64)](/File%3AVegetation_woods.png "Woods icon") Woods  Woods represent terrain with less dense vegetation than forests. | **+50K** | **+25%** | **−20%** | **+12.5%** | **+25%** | Sea | * **+10%** Food production * **+2** Supply limit * **+1** Attacker penalty in combat * **−2** Possible frontage |
| [![Forest icon](/thumb.php?f=Vegetation_forest.png&width=64)](/File%3AVegetation_forest.png "Forest icon") Forest  Forest represents terrain with dense vegetation. | **+25K** | **+50%** | **−25%** | **+25%** | **+50%** | Sea and land | * **+33%** Expanding RGO time * **+1** Attacker penalty in combat * **−3** Possible frontage |
| [![Jungle icon](/thumb.php?f=Vegetation_jungle.png&width=64)](/File%3AVegetation_jungle.png "Jungle icon") Jungle  A jungle represents terrain with dense forest and tangled vegetation that makes doing anything on the land difficult. | **+50K** | **+200%** | **−25%** | **+50%** | **+100%** | Sea and land | * **+50%** Expanding RGO time * **+1** Attacker penalty in combat * **−4** Possible frontage |

## Roads

[![](/thumb.php?f=UI_road_builder.png&width=330)](/File%3AUI_road_builder.png)

The road builder

Locations can be connected to each other via roads, which are drawn by selecting the start and end location in the Road Builder. The Road Builder can be set to prioritize proximity, army travel time, cost or construction time when drawing roads. Locations with roads receive the following bonuses:

* ![Construction Speed](/thumb.php?f=Global_construction_speed.png&width=24 "Construction Speed") +5% Construction Speed
* ![Local Monthly Development Growth](/thumb.php?f=Global_monthly_development.png&width=24 "Local Monthly Development Growth") +5% Local Monthly Development Growth

Roads come in four levels, which are unlocked by the advances with the same name and provide additional bonuses. The Road Builder includes a button to automatically upgrade all existing roads to a higher level.

| Road[[2]](#cite_note-2) | [![Movement cost.png](/thumb.php?f=Movement_cost.png&width=24)](/File%3AMovement_cost.png) Movement cost | Market access cost | Proximity impact | Maintenance |
| --- | --- | --- | --- | --- |
| [![Gravel Road icon](/thumb.php?f=Gravel_road.png&width=64)](/File%3AGravel_road.png "Gravel Road icon") Gravel Road  The Road has a loose gravel surface. Better than mud. | **−25%** | **−10%** | **−20** | [![Sand](/thumb.php?f=Goods_sand.png&width=24)](/Goods#Sand "Sand") 0.01 Sand |
| [![Paved Road icon](/thumb.php?f=Paved_road.png&width=64)](/File%3APaved_road.png "Paved Road icon") Paved Road  The Road has a solid paved surface which is much better for travel. | **−30%** | **−15%** | **−25** | * [![Sand](/thumb.php?f=Goods_sand.png&width=24)](/Goods#Sand "Sand") 0.01 Sand * [![Masonry](/thumb.php?f=Goods_masonry.png&width=24)](/Goods#Masonry "Masonry") 0.01 Masonry |
| [![Modern Road icon](/thumb.php?f=Modern_road.png&width=64)](/File%3AModern_road.png "Modern Road icon") Modern Road  The Road has a modern flat surface and is of good quality. | **−35%** | **−20%** | **−30** | * [![Sand](/thumb.php?f=Goods_sand.png&width=24)](/Goods#Sand "Sand") 0.01 Sand * [![Masonry](/thumb.php?f=Goods_masonry.png&width=24)](/Goods#Masonry "Masonry") 0.01 Masonry |
| [![Railroad icon](/thumb.php?f=Railroad.png&width=64)](/File%3ARailroad.png "Railroad icon") Railroad  The Road has been upgraded to a rail connection, massively increasing travel speed and logistics. | **−80%** | **−25%** | **−35** | * [![Sand](/thumb.php?f=Goods_sand.png&width=24)](/Goods#Sand "Sand") 0.01 Sand * [![Masonry](/thumb.php?f=Goods_masonry.png&width=24)](/Goods#Masonry "Masonry") 0.01 Masonry * [![Steel](/thumb.php?f=Goods_steel.png&width=24)](/Goods#Steel "Steel") 0.01 Steel |

## Control

*Main article: [Control](/Control "Control")*

Each location you own has a **[![Control.png](/thumb.php?f=Control.png&width=24)](/Control "Control") Control** percentage, expressing how much the central government can tap into the ressources of the location. It has a wide range of effects, from directly impacting how much the local population can be taxed, to the amount of levies they will contribute when called. A lack of control in a location reduces the crown power gained from its population, while also decreases the manpower and sailors available locally and weakens the market attraction of your own markets, making them likelier to belong to foreign markets if they have low control.

Each percent of control has the following effects on locations:

* ![Local Crown Power](/thumb.php?f=Global_crown_estate_power.png&width=24 "Local Crown Power") +1% Local Crown Power
* ![Levy Size](/thumb.php?f=Global_levy_size_modifier.png&width=24 "Levy Size") +1% Levy Size
* ![Monthly Manpower](/thumb.php?f=Global_manpower_modifier.png&width=24 "Monthly Manpower") +1% Monthly Manpower
* ![Monthly Sailors](/thumb.php?f=Local_sailors.png&width=24 "Monthly Sailors") +1% Monthly Sailors
* ![Peasant Enfranchisement](/thumb.php?f=Global_peasant_enfranchisment.png&width=24 "Peasant Enfranchisement") +0.5% Peasant Enfranchisement
* ![Local Market Protection](/thumb.php?f=Market_protection.png&width=24 "Local Market Protection") +0.5% Local Market Protection

Each percent of control above 50% has the following effect on locations:

* ![Mercenary Size](/thumb.php?f=Global_mercenaries_modifier.png&width=24 "Mercenary Size") −1% Mercenary Size

Each percent of control below 50% has the inverse effect:

* ![Mercenary Size](/thumb.php?f=Global_mercenaries_modifier.png&width=24 "Mercenary Size") +1% Mercenary Size

On top of these modifiers, the effective [![Tax base.png](/thumb.php?f=Tax_base.png&width=24)](/Tax_Base "Tax Base") [Tax Base](/Tax_Base "Tax Base") of a location is calculated by multiplying the [![Potential tax base.png](/thumb.php?f=Potential_tax_base.png&width=24)](/Potential_Tax_Base "Potential Tax Base") [Potential Tax Base](/Potential_Tax_Base "Potential Tax Base") with the location's control.

A location with **75%** or more control prevents [estates](/Estates "Estates") from building there and allows the owner to destroy estate buildings.

## Development

[![](/thumb.php?f=Map_development.jpg&width=330)](/File%3AMap_development.jpg)

Development at the start of the game

Each location has a [![Development.png](/thumb.php?f=Development.png&width=24)](/Development "Development") development score, which represents how cultivated the land is and how much it is used by the pops living there and can be increased via the Develop Province cabinet action. Each point of development gives the following:

* ![Blockade Force Required](/thumb.php?f=Blockade_force_required.png&width=24 "Blockade Force Required") +0.01 Blockade Force Required
* ![Supported Building Levels](/thumb.php?f=Free_building_levels.png&width=24 "Supported Building Levels") +1 Supported Building Levels
* ![Buildings Construction Efficiency](/thumb.php?f=Small_foreign_building_cost_modifier.png&width=24 "Buildings Construction Efficiency") +0.2% Buildings Construction Efficiency
* ![Construction Speed](/thumb.php?f=Global_construction_speed.png&width=24 "Construction Speed") +1% Construction Speed
* ![Local Proximity Efficiency](/thumb.php?f=Global_distance_from_capital_cost_modifier.png&width=24 "Local Proximity Efficiency") +0.5% Local Proximity Efficiency
* ![Institution Growth](/thumb.php?f=Institution_growth.png&width=24 "Institution Growth") +0.2% Institution Growth
* ![Character Life Expectancy](/thumb.php?f=Global_life_expectancy.png&width=24 "Character Life Expectancy") +0.1 Character Life Expectancy
* ![Maximum RGO Size](/thumb.php?f=Global_max_rgo_size_modifier.png&width=24 "Maximum RGO Size") +100 Maximum RGO Size
* ![Migration Attraction](/thumb.php?f=Migration_attraction.png&width=24 "Migration Attraction") +0.0025 Migration Attraction
* ![Local Mills Construction Efficiency](/thumb.php?f=Default.png&width=24 "Local Mills Construction Efficiency") +1% Local Mills Construction Efficiency
* ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") +1% Local Food Production %
* ![Local Population Capacity %](/thumb.php?f=Global_population_capacity_modifier.png&width=24 "Local Population Capacity %") +2.5% Local Population Capacity %
* ![Supply Limit](/thumb.php?f=Global_supply_limit_modifier.png&width=24 "Supply Limit") +2% Supply Limit
* ![Market Attraction](/thumb.php?f=Create_market_cost_modifier.png&width=24 "Market Attraction") +0.2% Market Attraction
* ![Maximum Stockpile Capacity](/thumb.php?f=Maximum_stockpile_capacity.png&width=24 "Maximum Stockpile Capacity") +5 Maximum Stockpile Capacity
* ![Occupation Time](/thumb.php?f=Occupation_time.png&width=24 "Occupation Time") +1% Occupation Time

## Prosperity

|  |  |
| --- | --- |
| ![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png) | Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0. |

Each location has a [![Prosperity.png](/thumb.php?f=Prosperity.png&width=24)](/Prosperity "Prosperity") prosperity percentage, which represents how prosperous and resourceful a location is. Prosperity has a base increase of +0.50% if prosperity is below 0, and +0.25% at every location with positive prosperity and a decay rate of current prosperity/100. This results in hitting equilibrium at 25% without any other prosperity modifiers. Government estate and law policies are common sources of increasing prosperity. Prosperity can decrease as a result of low pop satisfaction, diseases, sieges, occupation, or looting from enemy armies. Negative prosperity is also called devastation and has potential modifiers to recover prosperity back to zero quicker.

Every 1% prosperity above 0 brings the following bonuses:[[3]](#cite_note-3)

* ![Character Life Expectancy](/thumb.php?f=Global_life_expectancy.png&width=24 "Character Life Expectancy") +0.1 Character Life Expectancy
* ![Mercenary Size](/thumb.php?f=Global_mercenaries_modifier.png&width=24 "Mercenary Size") −0.5% Mercenary Size
* ![Migration Attraction](/thumb.php?f=Migration_attraction.png&width=24 "Migration Attraction") +0.001 Migration Attraction
* ![Local Monthly Development](/thumb.php?f=Global_monthly_development.png&width=24 "Local Monthly Development") +0.00004 Local Monthly Development
* ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.002% Population Growth

Every 1% prosperity below 0 brings the following penalties:

* ![Building Establishment Reduction](/thumb.php?f=Default.png&width=24 "Building Establishment Reduction") −0.0001 Building Establishment Reduction
* ![Construction Speed](/thumb.php?f=Global_construction_speed.png&width=24 "Construction Speed") −0.5% Construction Speed
* ![Character Life Expectancy](/thumb.php?f=Global_life_expectancy.png&width=24 "Character Life Expectancy") −0.1 Character Life Expectancy
* ![Mercenary Size](/thumb.php?f=Global_mercenaries_modifier.png&width=24 "Mercenary Size") +0.5% Mercenary Size
* ![Migration Attraction](/thumb.php?f=Migration_attraction.png&width=24 "Migration Attraction") −0.01 Migration Attraction
* ![Local Monthly Development](/thumb.php?f=Global_monthly_development.png&width=24 "Local Monthly Development") −0.00004 Local Monthly Development
* ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −0.5% Local Food Production %
* ![Local Monthly Literacy](/thumb.php?f=Global_monthly_literacy.png&width=24 "Local Monthly Literacy") −0.0005% Local Monthly Literacy
* ![Local Pop Promotion Speed %](/thumb.php?f=Global_pop_promotion_speed.png&width=24 "Local Pop Promotion Speed %") −0.5% Local Pop Promotion Speed %
* ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") −0.005% Population Growth
* ![Production Efficiency](/thumb.php?f=Global_production_efficiency.png&width=24 "Production Efficiency") −0.5% Production Efficiency
* ![Raw Materials Output](/thumb.php?f=Global_raw_material_output.png&width=24 "Raw Materials Output") −0.5% Raw Materials Output

## Weather Fronts

Weather fronts give the following effects in 3 months in each location they pass through, depending on whether the location currently has a severe winter or not.

| [![Normal winter.png](/thumb.php?f=Normal_winter.png&width=24)](/File%3ANormal_winter.png) Normal, [![Mild winter.png](/thumb.php?f=Mild_winter.png&width=24)](/File%3AMild_winter.png) Mild or ![No](/thumb.php?f=No.png&width=24 "No") No winter | [![Severe winter.png](/thumb.php?f=Severe_winter.png&width=24)](/File%3ASevere_winter.png) Severe Winter |
| --- | --- |
| * ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") +25% Local Food Production % * ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +2 Naval Attrition | * ![Army Attrition](/thumb.php?f=Army_attrition.png&width=24 "Army Attrition") +5% Army Attrition * ![Food Decay](/thumb.php?f=Global_food_decay.png&width=24 "Food Decay") +0.1% Food Decay * ![Local Maritime Presence](/thumb.php?f=Maritime_presence.png&width=24 "Local Maritime Presence") −1 Local Maritime Presence * ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −25% Local Food Production % * ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +10 Naval Attrition * ![Raw Materials Output](/thumb.php?f=Global_raw_material_output.png&width=24 "Raw Materials Output") −50% Raw Materials Output * ![Movement Cost](/thumb.php?f=Movement_cost.png&width=24 "Movement Cost") +50% Movement Cost |

Most weather fronts are the size of an area. There are three weather fronts that are the size of a subcontinent and will take place each year:

* The Monsoon starts at the beginning of June at the bottom of India and will expand through the subcontinent of India before moving north-east into parts of South East Asia and China.
* The Post-Monsoon starts in at the beginning of October in the region of Xinjiang and will move south, south-west and south-east.
* The Polar Vortex has a 75% chance to appear each year at the beginning of February from the north of the map.

## Cyclones

[![](/thumb.php?f=A_cyclone.png&width=330)](/File%3AA_cyclone.png)

A cyclone

Locations touched by a cyclone will gain a negative modifier for 3 months that scales with the strength of the cyclone and the location's distance from the eye of the storm:

* Locations that do not have [![Vegetation desert.png](/thumb.php?f=Vegetation_desert.png&width=24)](/File%3AVegetation_desert.png) Desert vegetation will gain the Wind Damage modifier
* Locations that have [![Vegetation desert.png](/thumb.php?f=Vegetation_desert.png&width=24)](/File%3AVegetation_desert.png) Desert vegetation will gain the Sandstorm modifier
* Coastal locations may gain the Storm Surge modifier

| Max Wind Damage penalties | Max Sandstorm penalties | Max Storm Surge penalties |
| --- | --- | --- |
| * ![Food Decay](/thumb.php?f=Global_food_decay.png&width=24 "Food Decay") +0.1% Food Decay * ![Local Maritime Presence](/thumb.php?f=Maritime_presence.png&width=24 "Local Maritime Presence") −0.5 Local Maritime Presence * ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −5% Local Food Production % * ![Local Monthly Prosperity](/thumb.php?f=Global_monthly_prosperity.png&width=24 "Local Monthly Prosperity") −1% Local Monthly Prosperity * ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +10 Naval Attrition * ![Raw Materials Output](/thumb.php?f=Global_raw_material_output.png&width=24 "Raw Materials Output") −15% Raw Materials Output * ![Movement Cost](/thumb.php?f=Movement_cost.png&width=24 "Movement Cost") +25% Movement Cost | * ![Army Attrition](/thumb.php?f=Army_attrition.png&width=24 "Army Attrition") +5% Army Attrition * ![Food Decay](/thumb.php?f=Global_food_decay.png&width=24 "Food Decay") +0.25% Food Decay * ![Local Maritime Presence](/thumb.php?f=Maritime_presence.png&width=24 "Local Maritime Presence") −1 Local Maritime Presence * ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −15% Local Food Production % * ![Local Monthly Prosperity](/thumb.php?f=Global_monthly_prosperity.png&width=24 "Local Monthly Prosperity") −1.5% Local Monthly Prosperity * ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +10 Naval Attrition * ![Raw Materials Output](/thumb.php?f=Global_raw_material_output.png&width=24 "Raw Materials Output") −25% Raw Materials Output * ![Movement Cost](/thumb.php?f=Movement_cost.png&width=24 "Movement Cost") +25% Movement Cost | * ![Local Maritime Presence](/thumb.php?f=Maritime_presence.png&width=24 "Local Maritime Presence") −0.5 Local Maritime Presence * ![Local Monthly Prosperity](/thumb.php?f=Global_monthly_prosperity.png&width=24 "Local Monthly Prosperity") −1% Local Monthly Prosperity * ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +10 Naval Attrition * ![Raw Materials Output](/thumb.php?f=Global_raw_material_output.png&width=24 "Raw Materials Output") −15% Raw Materials Output |

Cyclones will always move from their origin to their dissipation location, but their path towards the dissipation location will be random.

| Origin | Possible dissipation locations | Strength | Monthly chance |
| --- | --- | --- | --- |
| **North Polynesian Sea** | Alaska Sea | Full | 8.3% |
| **Erg Aoukar** | North Eastern Atlantic Cape Verde High Sea Central Atlantic High Seas | Half | 8.3% |
| **Caspian Sea** | Saryeshik-Atyrau Sands | Half | 8.3% |
| **Indian South Current** | African High Sea | Half | 8.3% |
| **Andaman Sea** | Lushai Sreepur | Full | 4.2% |
| **Indonesia High Sea** | Indian Tropic of Capricorn Gibson Desert | Full | 4.2% |
| **Pacific Polynesia Current** | South Pacific Ocean Tasman Sea | Full | 4.2% |
| **Eastern Pacific High Sea** | Pacific North Equatorial Current Eastern Pacific High Sea Colorado Delta | Full | 4.2% |
| **Al Jaza'ir** | Arabian Sea Red Sea Marshaq Cape | Half | 4% |
| **South Indian Countercurrent** | Mozambique Channel Eastern Southern Ocean | Full | 2.8% |
| **Arabian Sea** | Dubbi Jāleq | Full | 2.1% |
| **Cape Verde High Sea** | random | Full | 80% in May, June and July |

## Tornadoes

Tornadoes move from one end of a province to another, giving all locations they pass through in a straight line the following penalties for 3 months:

* ![Army Attrition](/thumb.php?f=Army_attrition.png&width=24 "Army Attrition") +10% Army Attrition
* ![Local Maritime Presence](/thumb.php?f=Maritime_presence.png&width=24 "Local Maritime Presence") −2 Local Maritime Presence
* ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") −20% Local Food Production %
* ![Local Monthly Prosperity](/thumb.php?f=Global_monthly_prosperity.png&width=24 "Local Monthly Prosperity") −2.5% Local Monthly Prosperity
* ![Naval Attrition](/thumb.php?f=Navy_attrition.png&width=24 "Naval Attrition") +10 Naval Attrition
* ![Raw Materials Output](/thumb.php?f=Global_raw_material_output.png&width=24 "Raw Materials Output") −100% Raw Materials Output

Tornadoes have a 50% chance to appear in the regions of East Coast, Aridoamerica or Louisiana each month.

Tornadoes have 1% chance to appear in Europe each year.

## Dangers

[![](/thumb.php?f=Map_dangers.jpg&width=330)](/File%3AMap_dangers.jpg)

Danger locations

Dangers are present in certain locations and displayed in the [![Map mode bg.png](/thumb.php?f=Map_mode_bg.png&width=24)](/File%3AMap_mode_bg.png)[![Map mode square.png](/thumb.php?f=Map_mode_square.png&width=24)](/Map_modes "Map modes")[![Danger.png](/thumb.php?f=Danger.png&width=24)](/Map_modes "Map modes") Dangers map mode. When a danger strikes the affected countries will be given the option to pay scaled [![Resource gold.png](/thumb.php?f=Resource_gold.png&width=24)](/Gold "Gold") Gold to give the location a Recovery Efforts modifier, which lasts for 10 years and gives the following effects:

| Minor Recovery Efforts | Major Recovery Efforts |
| --- | --- |
| * ![Buildings Construction Efficiency](/thumb.php?f=Small_foreign_building_cost_modifier.png&width=24 "Buildings Construction Efficiency") +20% Buildings Construction Efficiency * ![Prosperity Recovery](/thumb.php?f=Global_devastation_recovery.png&width=24 "Prosperity Recovery") +0.5% Prosperity Recovery | * ![Buildings Construction Efficiency](/thumb.php?f=Small_foreign_building_cost_modifier.png&width=24 "Buildings Construction Efficiency") +40% Buildings Construction Efficiency * ![Prosperity Recovery](/thumb.php?f=Global_devastation_recovery.png&width=24 "Prosperity Recovery") +0.5% Prosperity Recovery |

### Volcanoes

[![Volcano.png](/thumb.php?f=Volcano.png&width=24)](/Volcano "Volcano") Volcanoes are present in certain locations and appear **red** on the Dangers map mode. Each Volcano has a very low chance to erupt each month.

| Eruption | Monthly chance | [![Population.png](/thumb.php?f=Population.png&width=24)](/File%3APopulation.png) Population | [![Prosperity.png](/thumb.php?f=Prosperity.png&width=24)](/File%3AProsperity.png) Prosperity | [![Development.png](/thumb.php?f=Development.png&width=24)](/File%3ADevelopment.png) Development | RGO Level | Buildings | Volcanic Soil | Recovery Efforts | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") Recovery Cost |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Minor** | 0.008% | **−10%** | **−20%** | **−0.25** | **−1** |  | **20 Years** | Minor | 200% of income |
| **Moderate** | 0.006% | **−20%** | **−50%** | **−0.5** | **−2** | **−1** | **50 Years** | Minor | 400% of income |
| **Major** | 0.004% | **−30%** | **−70%** | **−1** | **−3** | **−1 per 8 buildings** | **70 Years** | Major | 600% of income |
| **Catastrophic** | 0.002% | **−50%** | **−95%** | **−2.5** | **−5** | **−1 per 6 buildings** | **100 Years** | Major | 1000% of income |

After an eruption the location will gain the Volcanic Soil modifier, which is visible on the map and gives the following effects:

* ![Local Food Production %](/thumb.php?f=Global_monthly_food_modifier.png&width=24 "Local Food Production %") +50% Local Food Production %
* ![Expanding Raw Materials Time](/thumb.php?f=Global_rgo_build_time.png&width=24 "Expanding Raw Materials Time") −25% Expanding Raw Materials Time

### Earthquakes

[![Earthquake.png](/thumb.php?f=Earthquake.png&width=24)](/Earthquake "Earthquake") Earthquakes can occur along certain lines that pass through locations and appear orange on the Dangers map mode. Every month there is a chance that an earthquake will take place somewhere in the world. The epicenter location will take the full penalties of the earthquake while all adjacent locations will take half of the penalties and will not lose buildings.

| Earthquake | Monthly chance | [![Population.png](/thumb.php?f=Population.png&width=24)](/File%3APopulation.png) Population | [![Prosperity.png](/thumb.php?f=Prosperity.png&width=24)](/File%3AProsperity.png) Prosperity | Buildings | Army health | Cities | Recovery Efforts | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") Recovery Cost |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Minor** | 1.6% | **−10%** | **−20%** | **−1 per 10 buildings** | **−33%** | Unchanged | Minor | 10 times the location's tax base |
| **Major** | 0.4% | **−20%** | **−50%** | **−1 per 8 buildings** | **−50%** | Unchanged | Major | 20 times the location's tax base |
| **Catastrophic** | 0.1% | **−33%** | **−75%** | **−1 per 6 buildings** | **Killed** | **Downgraded to Town** | Major | 30 times the location's tax base |

#### Historical earthquakes

Historical [![Earthquake.png](/thumb.php?f=Earthquake.png&width=24)](/Earthquake "Earthquake") earthquakes occur in every game, but each one happens only once. They have predetermined locations and years, and also affect all neighboring locations.
Most of the time when a historical [![Earthquake.png](/thumb.php?f=Earthquake.png&width=24)](/Earthquake "Earthquake") earthquake occurs, players will have the choice between different options, each with different penalties.

|  |  |
| --- | --- |
| ![Templates Information icon.png](https://central.paradoxwikis.com/images/thumb/8/8c/Templates_Information_icon.png/30px-Templates_Information_icon.png) | **This section is planned to be [automatically generated](/Europa_Universalis_5_Wiki%3AAutogeneration "Europa Universalis 5 Wiki:Autogeneration") and should not be edited directly.**  Instead, suggest changes on the **[talk page](/index.php?title=Talk:Location&action=edit&redlink=1 "Talk:Location (page does not exist)")**. |

|  | | | | | |
| --- | --- | --- | --- | --- | --- |
| Tier | [![Population.png](/thumb.php?f=Population.png&width=24)](/File%3APopulation.png) Population | [![Prosperity.png](/thumb.php?f=Prosperity.png&width=24)](/File%3AProsperity.png) Prosperity | Buildings | Army health | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") Recovery Cost |
| **Minor** | **−5%** | **Severe penalty** | **−1 per 15 buildings** | **−33%** | 7 times the location's tax base  **−25** [![Gold.png](/thumb.php?f=Resource_gold.png&width=24)](/File%3AResource_gold.png) |
| **Major** | **−10%** | **Ultimate penalty** | **−1 per 10 buildings** | **−50%** | 15 times the location's tax base  **−50** [![Gold.png](/thumb.php?f=Resource_gold.png&width=24)](/File%3AResource_gold.png) |
| **Catastrophic** | **−20%** | **Radical penalty** | **−1 per 8 buildings** | **Killed** | 20 times the location's tax base  **−100** [![Gold.png](/thumb.php?f=Resource_gold.png&width=24)](/File%3AResource_gold.png) |

| Neighbor locations | | | |
| --- | --- | --- | --- |
| Population | Morale | [![Prosperity.png](/thumb.php?f=Prosperity.png&width=24)](/File%3AProsperity.png) Prosperity | Buildings |
| **−5%** | **−33%** | **Weak penalty** | **−1 per 20 buildings** |  |
| **−5%** | **−33%** | **Severe penalty** | **−1 per 15 buildings** |  |
| **−10%** | **−50%** | **Extreme penalty** | **−1 per 10 buildings** |  |

Below is the list of all scripted [![Earthquake.png](/thumb.php?f=Earthquake.png&width=24)](/Earthquake "Earthquake") earthquakes. Most of them have a 10-year time window in which they will occur.

| Tier | Location | Date is between |
| --- | --- | --- |
| Minor | Constantinople | 1338 and 1365 |
| Minor | Lusta | 1338 and 1348 |
| Minor | Udine | 1343 and 1352 |
| Minor | Basel | 1351 and 1361 |
| Minor | Canterbury | 1377 and 1387 |
| Minor | Vic | 1377 and 1387 |
| Minor | Lisbon | 1526 and 1536 |
| Minor | Ferrara | 1565 and 1575 |
| Minor | Fez | 1619 and 1629 |
| Minor | Tabriz | 1633 and 1643 |
| Minor | Shamakhi | 1662 and 1672 |
| Minor | Tifu | 1669 and 1679 |
| Minor | Melfi | 1691 and 1699 |
| Minor | Spoleto | 1698 and 1708 |
| Minor | Aquila | 1698 and 1708 |
| Minor | Sulmona | 1701 and 1711 |
| Minor | Dadu | 1725 and 1735 |
| Minor | Ariano | 1727 and 1737 |
| Minor | Naumkeag | 1750 and 1760 |
| Minor | Komarom | 1758 and 1768 |
| Minor | Turuepano | 1761 and 1771 |
| Minor | Monteleone | 1778 and 1788 |
| Minor | Suisin | 1831 and 1837 |
| Major | Ariano | 1451 and 1461 |
| Major | Rodos | 1476 and 1486 |
| Major | Constantinople | 1504 and 1514 |
| Major | Gujou | 1581 and 1591 |
| Major | Shida | 1600 and 1610 |
| Major | Qiongshan | 1600 and 1610 |
| Major | Ningxia | 1617 and 1627 |
| Major | Monteleone | 1633 and 1643 |
| Major | Ondaonnentakwi | 1658 and 1668 |
| Major | Dubrovnik | 1662 and 1672 |
| Major | Avellino | 1683 and 1693 |
| Major | Tolombon | 1687 and 1697 |
| Major | Maynoa | 1687 and 1697 |
| Major | Catania | 1688 and 1698 |
| Major | Linfen | 1690 and 1700 |
| Major | Banten | 1694 and 1704 |
| Major | Yingli | 1704 and 1714 |
| Major | Arzew | 1711 and 1721 |
| Major | Fuqiang | 1713 and 1723 |
| Major | Tabriz | 1716 and 1726 |
| Major | Fez | 1750 and 1760 |
| Major | Nawa | 1754 and 1764 |
| Major | Constantinople | 1761 and 1769 |
| Major | Haniguayagua | 1765 and 1775 |
| Major | Cuauhtemallan | 1768 and 1778 |
| Major | Tabriz | 1775 and 1785 |
| Major | Dartsedo | 1781 and 1791 |
| Major | Waranka | 1792 and 1802 |
| Major | Covasna | 1797 and 1807 |
| Major | Candia | 1805 and 1810 |
| Major | Towosaghy | 1807 and 1817 |
| Major | Caracas | 1807 and 1817 |
| Major | Yaanga | 1807 and 1817 |
| Major | Ineseno | 1807 and 1817 |
| Major | Morvi | 1814 and 1824 |
| Major | Kona | 1818 and 1828 |
| Major | Kathmandu | 1827 and 1837 |
| Catastrophic | Lisbon | 1351 and 1361 |
| Catastrophic | Fuchi | 1493 and 1503 |
| Catastrophic | Yanal\_densa | 1500 and 1510 |
| Catastrophic | Lintong | 1551 and 1561 |
| Catastrophic | Pikunwijimapu | 1570 and 1580 |
| Catastrophic | Unimax | 1580 and 1590 |
| Catastrophic | Chaucalana | 1599 and 1609 |
| Catastrophic | Kuji | 1606 and 1616 |
| Catastrophic | Banda\_island | 1624 and 1634 |
| Catastrophic | Gegou | 1663 and 1673 |
| Catastrophic | Ladik\_pontus | 1663 and 1673 |
| Catastrophic | Isumi | 1672 and 1682 |
| Catastrophic | Ica | 1682 and 1692 |
| Catastrophic | Tillamok | 1695 and 1705 |
| Catastrophic | Kamakura | 1698 and 1708 |
| Catastrophic | Hidaka | 1702 and 1712 |
| Catastrophic | Mawlen | 1725 and 1735 |
| Catastrophic | Achava | 1732 and 1742 |
| Catastrophic | Dingyuan\_lingzhou | 1734 and 1744 |
| Catastrophic | Chancay | 1741 and 1751 |
| Catastrophic | Lafkenmapu | 1746 and 1756 |
| Catastrophic | Lisbon | 1750 and 1760 |
| Catastrophic | Lisbon | 1756 and 1766 |
| Catastrophic | Chittagong | 1757 and 1767 |
| Catastrophic | Ometepec | 1782 and 1792 |
| Catastrophic | Siberut | 1792 and 1802 |
| Catastrophic | Towosaghy | 1806 and 1816 |
| Catastrophic | Towosaghy | 1806 and 1816 |
| Catastrophic | Pagai | 1827 and 1837 |
| Special | Gallipoli | 1354 and 1364 |

## References

1. [↑](#cite_ref-1) `Europa Universalis V\game\in_game\common\goods_demand\special_construction_demands.txt`
2. [↑](#cite_ref-2) From /Europa Universalis V/game/in\_game/common/road\_types/00\_generic.txt
3. [↑](#cite_ref-3) From /Europa Universalis V/game/main\_menu/common/static\_modifiers/location.txt

[Return to top](#top)

Mechanics

|  |  |
| --- | --- |
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |

|  |  |
| --- | --- |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |

|  |  |
| --- | --- |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |

|  |  |
| --- | --- |
| The world | Location • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |