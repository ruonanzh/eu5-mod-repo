<!-- source: https://eu5.paradoxwikis.com/Location revid: 37115 fetched: 2026-09-10 -->
# Location
A location
A location is the smallest unit of land. There are four types of locations:
* **Habitable** locations have [population](/Population "Population") and can support ownership or be entered by armies. Each habitable location has a dominant [culture](/Culture "Culture") and a dominant [religion](/Religion "Religion"), which are the culture and religion followed by most pops. Each habitable location also has a raw good and may construct or upgrade an [R.G.O.](/R.G.O. "R.G.O.") to extract it.
* **Impassable** locations do not have population and cannot support ownership or be entered by units. If all adjacent locations are owned by the same country, the impassable location will also take on the country's color on the map.
* **Corridor** locations do not have population and cannot support ownership but can be entered by armies and are always connected to two habitable locations. If both connected locations are owned by the same country, the corridor location will also take on the country's color on the map.
* **Seazone** locations do not have population and cannot support ownership but can be entered by navies. Seazones have Maritime Presence from adjacent countries.
  + **Sea Current** locations function like seazones but also include a directional current, indicated by waves when the map is zoomed in and with arrows when the map is zoomed out. Navies traveling in the same direction as the current will move faster.
## Map hierarchy
The map is divided into 6 levels of subdivisions:
*  Continent
*  Sub-continent
*  Region
*  Area
*  Province
*  Location
Various actions will target different levels of the hierarchy.
Provinces share and distribute  Food between its locations, and levies are raised from an entire province at once. Several cabinet actions target a province. Each province has a province capital, which has a star in the middle of the rank icon. If the province capital is occupied during war, all remaining unfortified locations are automatically occupied by the invader over a short period of time. If a province spreads over two market areas, the market where the province capital is located will be used to buy and sell food. Each province has its own provincial food storage. Any food that is not consumed by the pops in a location is contributed to the provincial food storage. If monthly food is negative, stored food will be consumed. If there is a deficit, the province will buy food from its market, and if there is a surplus, the province will sell food on its market. Armies in the province can also consume stored food if they would otherwise suffer attrition.
Provinces refer to both a static set of locations – sometimes called a province definition – as well as the set of locations that a country owns within that set. Thus, two or more countries can each have a province within the same province definition.
## Integration status
Integration status represents how well a location is incorporated into the administrative apparatus of its owner. Every owned location falls into one of four different statuses. Conquered locations can be integrated via the Integrate Province cabinet action, and the integration speed depends on the number and culture of the population. Reaching Core status requires a 50% or more population of primary and accepted cultures.
| Status | Pop growth | Effects |
| **Colonized** | All cultures | *  +0.1% Monthly Control |
| **Conquered** | All cultures | *  −0.5% Garrison Growth *  −10% Max Control *  −20 Pop Assimilation Speed *  −20 Local Pop Conversion Speed *  +50% Separatism |
| **Integrated** | All cultures | *  +5% Max Control *  −10 Pop Assimilation Speed *  +10% Separatism |
| **Core** | Primary and accepted cultures | *   Only Primary & Accepted Pops can Grow *  +20% Max Control *  +0.1% Monthly Control *   Owner gets Vision when Occupied |
## Rank
*Information about location ranks are available at /Europa Universalis V/game/in-game/common/location\_ranks/00\_default.txt*
Each location has a  rank, which can be increased or decreased at any time. It affects what buildings can be constructed in the location, and increasing or decreasing the location rank will remove all incompatible buildings. The cost to increase a location's rank is impacted by market prices. Downgrading a location is instant and always costs 500  Gold and doesn't require goods.
| Rank |  Food capacity |  Food production | Population | Other effects |  Nahua Ritualism Doom |  Base cost | Upgrade time | Requirements[[1]](#cite_note-1) |
|  Rural Settlement  A Rural Settlement is land that is ripe for exploitation, representing everything from wilderness to clusters of countryside villages. |  | **+10%** |  | *  **+100%** Maximum RGO size *  **+0.1%** Population growth * -20% [File:Local peasant enfranchisment.png](/index.php?title=Special:Upload&wpDestFile=Local_peasant_enfranchisment.png "File:Local peasant enfranchisment.png") | **+0.005** per month |  |  |  |
|  Town  A modest settlement able to fulfil basic manufacturing needs, a Town marks the beginnings of urban life. | 250 |  | *  **+20K** Population capacity *  **+25** Possible Nobles *  **+50** Possible Clerics *  **+100** Possible Soldiers *  **+200** Possible Burghers *  **+200** Possible Labourers *  **+10%** Population capacity | *  **+25** Supported building levels *  **+5%** Max control *  **−25%** Speed of integration *  **+1** * [File:Local peasant enfranchisment.png](/index.php?title=Special:Upload&wpDestFile=Local_peasant_enfranchisment.png "File:Local peasant enfranchisment.png")+10% *  +10% * [File:File:Local frontage allowed positive.png](/index.php?title=Special:Upload&wpDestFile=File:Local_frontage_allowed_positive.png "File:File:Local frontage allowed positive.png") -1 | **+0.01** per month | 500 | 1 year | *  5000 Population *  2 Masonry *  1 Glass *  1 Lumber |
|  City  The very epitome of civilization, a City is a bustling metropolis of industry, great temples, and seats of governmental authority sprawled across multiple districts. | 500 |  | *  **+100K** Population capacity *  **+50** Possible Nobles *  **+100** Possible Clerics *  **+250** Possible Soldiers *  **+1000** Possible Burghers *  **+1000** Possible Labourers *  **+25%** Population capacity | *  **+100** Supported building levels *  **+10%** Max control *  **−50%** Speed of integration *  **+25%** Pop promotion speed *  **+1**  *  **+25%** Construction speed * [File:Local peasant enfranchisment.png](/index.php?title=Special:Upload&wpDestFile=Local_peasant_enfranchisment.png "File:Local peasant enfranchisment.png") +25% * [File:Local trade center power](/index.php?title=Special:Upload&wpDestFile=Local_trade_center_power "File:Local trade center power") **+2,5%** *  **+2** * [File:Local mills build buildings efficiency](/index.php?title=Special:Upload&wpDestFile=Local_mills_build_buildings_efficiency "File:Local mills build buildings efficiency") **+20%** * +20%  *  -2 *  **+1** | **+0.03** per month | 2000 | 2 years | *  30000 Population *  4 Masonry *  2 Glass *  2 Lumber |
## Topography
Each location has a  topography, which represents the relief and elevation of its area.
### Land topography
The topography map
Land locations have one of the following topographies:
| Topography | Blocks vision |  Movement cost | Expanding RGO time | Road building time |  Development | Proximity impact | Other effects |
|  Flatland  Flatland represents terrain that does not have any major topographic variation, so there are no impediments for Army movement or Building development. |  |  |  |  |  |  |  |
|  Hills  A terrain with hills has variations in the topography, but the slopes are not as steep nor as high as those of mountains, so the penalties are also not as bad. | * Sea * Land | **+50%** | **+25%** | **+100%** | **−25%** | **+25%** | * **−10%** Food production * **+1** Attacker penalty in combat * **−3** Possible frontage |
|  Mountains  Mountain terrain has high altitude and also steep slopes with relatively few and narrow flat areas, so it is more difficult for Armies to cross and fight in it, and also more difficult to develop. | * Sea * Land | **+100%** | **+100%** | **+300%** | **−50%** | **+50%** | * **−50%** Population capacity * **−20%** Food production * **+2** Attacker penalty in combat * **−4** Possible frontage * Armies cannot enter during normal and severe winter |
|  Plateau  They represent relatively flat areas situated at high altitude, so they have some penalties compared to flatlands due to their elevation. | Sea | **+25%** | **+25%** | **+50%** | **−25%** | **+12.5%** | * **+1** Attacker penalty in combat * **−1** Possible frontage |
|  Wetlands  Wetlands are terrain that is partially flooded, generally due to being near a river, lake, or coast. |  | **+50%** | **+25%** | **+100%** | **−30%** | **+25%** | * **−10%** Food production * **+1** Attacker penalty in combat * **−3** Possible frontage |
### Seazone topography
A seazone that has frozen
Seazones have one of the following topographies. Some seazones will freeze if the location experiences winter, which blocks ships from moving and allows armies to move on them. If an army is on a seazone when it thaws, half of it will be destroyed.
| Topography | Can freeze | Effects |
|  Atoll  Atolls are circular low-altitude islands that usually encircle a lagoon. |  |  |
|  Narrows  Narrows are areas of sea with proximity of coast on many sides, like straits or the sea inside archipelagos, where there is not much space for movement. |  | * **+20%** Movement cost of units * **−2** Possible frontage * **+1** Attacker penalty in combat * Blocks vision from sea |
|  Inland Sea  Inland seas represent the land-enclosed seas like the Mediterranean or the Baltic. |  |  |
|  Coastal Ocean  This is the open seas between the continents, where only the best of ships can travel, but in the areas closer to the coast. |  |  |
|  Ocean  This is the open seas between the continents, where only the best of ships can travel. |  | **+1** Naval attrition |
|  Deep Ocean  This is the open seas between the continents, where only the best of ships can travel, in the furthest areas from any coast. |  | **+2** Naval attrition |
|  Lakes  Lakes represent inland bodies of water without any contact with the open sea except through possible rivers, so no ships of relevance are able to sail in them. |  | Blocks vision from sea |
|  Salt Pan  Salt Pans are barren expanses of extremely flat land formed by the evaporation of a lake or a pond. |  |  |
|  Ocean Wasteland  This is ocean sea outside of the main currents, so it is not a convenient path for ships to take, as they could end up stranded in the middle of it. |  | Impassable |
### Coast
Locations that are not adjacent to a seazone that cannot support ships, have a port or build ships and cannot be blockaded. Locations that are adjacent to a seazone can have a port and build ships and can be blockaded. In addition, locations that are adjacent to a seazone receive the following bonuses:
*  +10% Local Monthly Development Growth
*  +5% Local Food Production %
*  +25% Local Population Capacity %
*  +5% Supply Limit
**All Coastal Locations also have a Natural Harbor Suitability, which ranges from 0% to 100% and gives the following bonuses scaled by %:**
 **0-1** Harbor capacity
  **0-60%** Port Buildings Efficiency
 **0-1%**  Market Attraction
**Harbor Capacity also applies bonuses which at 1 Harbor Capacity gives the following :**
 **+0.30** Local Maritime Presence
 **−75%** Proximity Cost Through Port
 **−5.0** Naval attrition
 **−20%** Disembark time
 **−50%** Trade embark/disembark cost
Harbor Capacity can further be increased above 1 by Buildings and Town Rights.
### Straits
A Strait connects two [Locations](/Locations "Locations") that are separated by a [Seazone](/Seazone "Seazone"), but are close enough to each other so [Armies](/Armies "Armies") can cross it without the need of a [Navy](/Navy "Navy").
This is represented by a dotted golden line between the two locations on the world map.
Armies can travel across a strait so long as the strait is not blocked by a hostile fleet in the sea zone, unless both sides of the strait are owned by the army's controller or those they have military access with. Food and supply lines can go over straits regardless of any naval blockade.
Units who cannot retreat over a blocked strait to friendly territory or friendly naval transports after being broken in battle will be stack wiped. A manual forced retreat will have the army stay in place and restart the battle.
### River
Certain land locations may have rivers between them, which give the following bonuses:(Unrecognized modifier "river\_flowing\_through" for [Module:Modifier](/Module%3AModifier "Module:Modifier"))(Unrecognized modifier "river\_flowing\_through\_coast" for [Module:Modifier](/Module%3AModifier "Module:Modifier")) if location is coastal
If an army attacks immediately after crossing a river, it will receive penalties in combat. Rivers are not navigable by navies.
Tracing control from a proximity source downstream a river reduces the base  proximity cost between locations by **−28** (in earlier versions, this bonus would be different when travelling upstream or downstream). This bonus is mutually exclusive with the ones provided by roads – only the highest reduction will apply. In addition, a location upstream of a market center will have a **−10%** market access loss reduction, while a location downstream will have **−50%**.
### Sound tolls
A few locations have a Sound Toll, which add an additional Gold cost to trade routes from other countries that pass through the location and give 10% of that  Gold to the location's owner. Hovering over a Sound Toll will list all trade routes going through the location and the income from each. The following locations have Sound Toll:
* Hormuz
* Kōnstantinoúpolis
* Roskilde
Countries can become exempt from Sound Tolls either through a Treaty or through events. Countries owning a Sound Toll location can remove exemptions but this will give the previously-exempt country the Sound Tolls Exemptions Broken casus belli.
### Grand Canal of China
The Grand Canal of China is not visible on the world map and can only be seen as part of location modifiers. The canal flows through the following locations: Hangzhou, Wutong, Jiaxing, Songling, Suzhou, Wuxi, Changzhou, Danyang, Zhenjiang, Jiangdu, Gaoyou, Yancheng Baoying, Huaian, Huaiyin, Taoyuan Huaian, Suqian, Suicheng, Xuzhou, Peicheng, Guting, Jining, Wenshang, Dongping Yanzhou, Tongcheng, Liaocheng, Linqing, Guantao, Gexianzhuang, Gucheng Jingzhou, Dezhou, Sangyuan, Dongguang, Nanpi, Cangzhou, Qingzhou Hejian, Jinghai, Tianjin, Wuqing, Tongzhou, Beijing.
The Grand Canal of China gives every location it passes through the following bonuses:
*  +20% Local Proximity Efficiency
*  +100 Local Food Capacity
*  +5% Local Monthly Development Growth
After 1345 there is a 10% chance each month that the canal will be damaged, replacing its bonus with a **+10%** Proximity Cost penalty. Afterwards, as long as the Emperor of China owns at least one location that is part of the Grand Canal of China, every 4 years it has a 2.5% chance to be offered to pay a very large amount of scaled gold to repair the canal and restore its initial effects.
## Climate
The climate map
Each location has a  climate, which determines whether it can have winter effects and how severe they can be, as well as how much population it can support.
| Climate | Max winter |  Population capacity |  Supply limit |  Character life expectancy |  Monthly development growth | Wheat output |
|  Arctic  Arctic represents areas with very cold winters. |  Severe | **−33%** | **−20%** | **−5** | **−25%** |  |
|  Hot Arid  Hot Arid represents an area that has a severe lack of available water. | None |  | **−10%** | **−5** |  | **−10%** |
|  Continental  Continental represents areas with cold winters. |  Normal | **+50%** |  |  |  |  |
|  Mediterranean  Mediterranean represents areas with a perfect climate, where everyone wants to live. | None | **+150%** |  |  |  |  |
|  Oceanic  Oceanic represents areas with mild winters but high humidity. |  Mild | **+100%** |  |  |  |  |
|  Cold Arid  Cold Arid represents an area that has a severe lack of available water but experiences winters. |  Mild |  | **−5%** |  |  | **−5%** |
|  Subtropical  Subtropical represents areas with high average temperatures and mild winters. | None | **+100%** |  |  |  |  |
|  Tropical  Tropical represents areas with high average temperatures and no winter. | None | **+50%** |  | **−5** | **−10%** |  |
### Winter
Depending on climate, locations may have  winters, which give increasing penalties. The severity of a winter in each location at a given in game date is semi-random but limited by climate. Winters begin around January for locations in the northern hemisphere and around June for locations in the southern hemisphere. Armies cannot move into locations with Mountains topography with Normal or Severe winter level. Winters always start as mild and increase in severity then reverse and decrease in severity
| Winter level | Effects |
|  Mild | *  −25% Local Food Production % *  +2 Maximum Attrition |
|  Normal | *  +1% Army Attrition *  −50% Construction Speed *  +0.25% Food Decay *  −50% Local Food Production % *  +5 Naval Attrition *  +2 Maximum Attrition |
|  Severe | *   Constructions Stalled *  +2% Army Attrition *  +0.5% Food Decay *  −200% Local Food Production % *  +10 Naval Attrition *  +4 Maximum Attrition *  +25% Movement Cost |
## Vegetation
The vegetation map
Each location has a  vegetation type, which represents the foliage cover of its area.
| Vegetation |  Pop cap | Road building time | Development growth | Proximity impact | Movement cost | Blocks vision | Other effects |
|  Desert  Deserts are barren landscapes with little precipitation and almost no potential for plant or animal life. | **+10K** | **+100%** | **−33%** | **+5%** | **+10%** |  | * Cyclones cause Sandstorms * **−33%** Food production * **−5** Supply limit * **+50%** Expanding RGO time |
|  Sparse  Sparse represent large flat areas of land with few or no trees. | **+25K** | **−10%** |  |  |  |  |  |
|  Grasslands  Grasslands represent terrain dominated by grass with little or no trees or shrubs. | **+50K** | **−10%** |  |  |  |  | **+2** Supply limit |
|  Farmlands  Farmland represents anthropogenic terrain, devoted to crops and/or extensive pastures. | **+100K** | **+10%** | **+10%** | **+5%** | **+10%** |  | * **+10%** Maximum RGO size * **+33%** Food production * **+5** Supply limit |
|  Woods  Woods represent terrain with less dense vegetation than forests. | **+50K** | **+25%** | **−20%** | **+12.5%** | **+25%** | Sea | * **+10%** Food production * **+2** Supply limit * **+1** Attacker penalty in combat * **−2** Possible frontage |
|  Forest  Forest represents terrain with dense vegetation. | **+25K** | **+50%** | **−25%** | **+25%** | **+50%** | Sea and land | * **+33%** Expanding RGO time * **+1** Attacker penalty in combat * **−3** Possible frontage |
|  Jungle  A jungle represents terrain with dense forest and tangled vegetation that makes doing anything on the land difficult. | **+50K** | **+200%** | **−25%** | **+50%** | **+100%** | Sea and land | * **+50%** Expanding RGO time * **+1** Attacker penalty in combat * **−4** Possible frontage |
## Roads
The road builder
Locations can be connected to each other via roads, which are drawn by selecting the start and end location in the Road Builder. The Road Builder can be set to prioritize proximity, army travel time, cost or construction time when drawing roads. Locations with roads receive the following bonuses:
*  +5% Construction Speed
*  +5% Local Monthly Development Growth
Roads come in four levels, which are unlocked by the advances with the same name and provide additional bonuses. The Road Builder includes a button to automatically upgrade all existing roads to a higher level.
| Road[[2]](#cite_note-2) |  Movement cost | Market access cost | Proximity impact | Maintenance |
|  Gravel Road  The Road has a loose gravel surface. Better than mud. | **−25%** | **−10%** | **−20** |  0.01 Sand |
|  Paved Road  The Road has a solid paved surface which is much better for travel. | **−30%** | **−15%** | **−25** | *  0.01 Sand *  0.01 Masonry |
|  Modern Road  The Road has a modern flat surface and is of good quality. | **−35%** | **−20%** | **−30** | *  0.01 Sand *  0.01 Masonry |
|  Railroad  The Road has been upgraded to a rail connection, massively increasing travel speed and logistics. | **−80%** | **−25%** | **−35** | *  0.01 Sand *  0.01 Masonry *  0.01 Steel |
## Control
*Main article: [Control](/Control "Control")*
Each location you own has a ** Control** percentage, expressing how much the central government can tap into the ressources of the location. It has a wide range of effects, from directly impacting how much the local population can be taxed, to the amount of levies they will contribute when called. A lack of control in a location reduces the crown power gained from its population, while also decreases the manpower and sailors available locally and weakens the market attraction of your own markets, making them likelier to belong to foreign markets if they have low control.
Each percent of control has the following effects on locations:
*  +1% Local Crown Power
*  +1% Levy Size
*  +1% Monthly Manpower
*  +1% Monthly Sailors
*  +0.5% Peasant Enfranchisement
*  +0.5% Local Market Protection
Each percent of control above 50% has the following effect on locations:
*  −1% Mercenary Size
Each percent of control below 50% has the inverse effect:
*  +1% Mercenary Size
On top of these modifiers, the effective  [Tax Base](/Tax_Base "Tax Base") of a location is calculated by multiplying the  [Potential Tax Base](/Potential_Tax_Base "Potential Tax Base") with the location's control.
A location with **75%** or more control prevents [estates](/Estates "Estates") from building there and allows the owner to destroy estate buildings.
## Development
Development at the start of the game
Each location has a  development score, which represents how cultivated the land is and how much it is used by the pops living there and can be increased via the Develop Province cabinet action. Each point of development gives the following:
*  +0.01 Blockade Force Required
*  +1 Supported Building Levels
*  +0.2% Buildings Construction Efficiency
*  +1% Construction Speed
*  +0.5% Local Proximity Efficiency
*  +0.2% Institution Growth
*  +0.1 Character Life Expectancy
*  +100 Maximum RGO Size
*  +0.0025 Migration Attraction
*  +1% Local Mills Construction Efficiency
*  +1% Local Food Production %
*  +2.5% Local Population Capacity %
*  +2% Supply Limit
*  +0.2% Market Attraction
*  +5 Maximum Stockpile Capacity
*  +1% Occupation Time
## Prosperity
Each location has a  prosperity percentage, which represents how prosperous and resourceful a location is. Prosperity has a base increase of +0.50% if prosperity is below 0, and +0.25% at every location with positive prosperity and a decay rate of current prosperity/100. This results in hitting equilibrium at 25% without any other prosperity modifiers. Government estate and law policies are common sources of increasing prosperity. Prosperity can decrease as a result of low pop satisfaction, diseases, sieges, occupation, or looting from enemy armies. Negative prosperity is also called devastation and has potential modifiers to recover prosperity back to zero quicker.
Every 1% prosperity above 0 brings the following bonuses:[[3]](#cite_note-3)
*  +0.1 Character Life Expectancy
*  −0.5% Mercenary Size
*  +0.001 Migration Attraction
*  +0.00004 Local Monthly Development
*  +0.002% Population Growth
Every 1% prosperity below 0 brings the following penalties:
*  −0.0001 Building Establishment Reduction
*  −0.5% Construction Speed
*  −0.1 Character Life Expectancy
*  +0.5% Mercenary Size
*  −0.01 Migration Attraction
*  −0.00004 Local Monthly Development
*  −0.5% Local Food Production %
*  −0.0005% Local Monthly Literacy
*  −0.5% Local Pop Promotion Speed %
*  −0.005% Population Growth
*  −0.5% Production Efficiency
*  −0.5% Raw Materials Output
## Weather Fronts
Weather fronts give the following effects in 3 months in each location they pass through, depending on whether the location currently has a severe winter or not.
|  Normal,  Mild or  No winter |  Severe Winter |
| *  +25% Local Food Production % *  +2 Naval Attrition | *  +5% Army Attrition *  +0.1% Food Decay *  −1 Local Maritime Presence *  −25% Local Food Production % *  +10 Naval Attrition *  −50% Raw Materials Output *  +50% Movement Cost |
Most weather fronts are the size of an area. There are three weather fronts that are the size of a subcontinent and will take place each year:
* The Monsoon starts at the beginning of June at the bottom of India and will expand through the subcontinent of India before moving north-east into parts of South East Asia and China.
* The Post-Monsoon starts in at the beginning of October in the region of Xinjiang and will move south, south-west and south-east.
* The Polar Vortex has a 75% chance to appear each year at the beginning of February from the north of the map.
## Cyclones
A cyclone
Locations touched by a cyclone will gain a negative modifier for 3 months that scales with the strength of the cyclone and the location's distance from the eye of the storm:
* Locations that do not have  Desert vegetation will gain the Wind Damage modifier
* Locations that have  Desert vegetation will gain the Sandstorm modifier
* Coastal locations may gain the Storm Surge modifier
| Max Wind Damage penalties | Max Sandstorm penalties | Max Storm Surge penalties |
| *  +0.1% Food Decay *  −0.5 Local Maritime Presence *  −5% Local Food Production % *  −1% Local Monthly Prosperity *  +10 Naval Attrition *  −15% Raw Materials Output *  +25% Movement Cost | *  +5% Army Attrition *  +0.25% Food Decay *  −1 Local Maritime Presence *  −15% Local Food Production % *  −1.5% Local Monthly Prosperity *  +10 Naval Attrition *  −25% Raw Materials Output *  +25% Movement Cost | *  −0.5 Local Maritime Presence *  −1% Local Monthly Prosperity *  +10 Naval Attrition *  −15% Raw Materials Output |
Cyclones will always move from their origin to their dissipation location, but their path towards the dissipation location will be random.
| Origin | Possible dissipation locations | Strength | Monthly chance |
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
*  +10% Army Attrition
*  −2 Local Maritime Presence
*  −20% Local Food Production %
*  −2.5% Local Monthly Prosperity
*  +10 Naval Attrition
*  −100% Raw Materials Output
Tornadoes have a 50% chance to appear in the regions of East Coast, Aridoamerica or Louisiana each month.
Tornadoes have 1% chance to appear in Europe each year.
## Dangers
Danger locations
Dangers are present in certain locations and displayed in the  Dangers map mode. When a danger strikes the affected countries will be given the option to pay scaled  Gold to give the location a Recovery Efforts modifier, which lasts for 10 years and gives the following effects:
| Minor Recovery Efforts | Major Recovery Efforts |
| *  +20% Buildings Construction Efficiency *  +0.5% Prosperity Recovery | *  +40% Buildings Construction Efficiency *  +0.5% Prosperity Recovery |
### Volcanoes
 Volcanoes are present in certain locations and appear **red** on the Dangers map mode. Each Volcano has a very low chance to erupt each month.
| Eruption | Monthly chance |  Population |  Prosperity |  Development | RGO Level | Buildings | Volcanic Soil | Recovery Efforts |  Recovery Cost |
| **Minor** | 0.008% | **−10%** | **−20%** | **−0.25** | **−1** |  | **20 Years** | Minor | 200% of income |
| **Moderate** | 0.006% | **−20%** | **−50%** | **−0.5** | **−2** | **−1** | **50 Years** | Minor | 400% of income |
| **Major** | 0.004% | **−30%** | **−70%** | **−1** | **−3** | **−1 per 8 buildings** | **70 Years** | Major | 600% of income |
| **Catastrophic** | 0.002% | **−50%** | **−95%** | **−2.5** | **−5** | **−1 per 6 buildings** | **100 Years** | Major | 1000% of income |
After an eruption the location will gain the Volcanic Soil modifier, which is visible on the map and gives the following effects:
*  +50% Local Food Production %
*  −25% Expanding Raw Materials Time
### Earthquakes
 Earthquakes can occur along certain lines that pass through locations and appear orange on the Dangers map mode. Every month there is a chance that an earthquake will take place somewhere in the world. The epicenter location will take the full penalties of the earthquake while all adjacent locations will take half of the penalties and will not lose buildings. Earthquake have several possible severity levels with increasing penalties.
|  | **This table is planned to be [automatically generated](/Europa_Universalis_5_Wiki%3AAutogeneration "Europa Universalis 5 Wiki:Autogeneration") and should not be edited directly.**  Instead, suggest changes on the **[talk page](/index.php?title=Talk:Location&action=edit&redlink=1 "Talk:Location (page does not exist)")**. |
| Tier |  Population |  Prosperity | Buildings | Army health |  Recovery Cost |
| **Minor** | **−5%** | **Severe penalty** | **−1 per 15 buildings** | **−33%** | 7 times the location's tax base  **−25**  |
| **Major** | **−10%** | **Ultimate penalty** | **−1 per 10 buildings** | **−50%** | 15 times the location's tax base  **−50**  |
| **Catastrophic** | **−20%** | **Radical penalty** | **−1 per 8 buildings** | **Killed** | 20 times the location's tax base  **−100**  |
| Neighbor locations | | | |
| Population | Morale |  Prosperity | Buildings |
| **−5%** | **−33%** | **Weak penalty** | **−1 per 20 buildings** |  |
| **−5%** | **−33%** | **Severe penalty** | **−1 per 15 buildings** |  |
| **−10%** | **−50%** | **Extreme penalty** | **−1 per 10 buildings** |  |
In addition to random earthquakes, there are a number of historical  earthquakes, each of them having 25% chance to open every year within a given range (typically 10-year wide around the real-life occurence). Below is the list of all scripted  earthquakes.
|  | **This table is [automatically generated](/Europa_Universalis_5_Wiki%3AAutogeneration "Europa Universalis 5 Wiki:Autogeneration") and should not be edited directly.**  Instead, suggest changes on the **[talk page](/index.php?title=Talk:Location&action=edit&redlink=1 "Talk:Location (page does not exist)")**. |
| Region | Location | Date range | Severity |
| Pontic Steppe | Lusta | 1338-1346 | Minor |
| Balkans | Constantinople | 1338.6.1-1365.6.10 | Special |
| Italy | Udine | 1343-1352 | Minor |
| Southern Germany | Basel | 1351-1361 | Minor |
| Iberia | Lisbon | 1351-1361 | Catastrophic |
| Iberia | Sevilla | 1351-1361 | Catastrophic |
| Balkans | Gallipoli | 1354.3.1-1364.3.1 | Special |
| Britain | Canterbury | 1377-1387 | Minor |
| Iberia | Vic | 1377-1387 | Minor |
| Italy | Ariano | 1451-1461 | Major |
| Balkans | Ródos | 1476-1486 | Major |
| Japan | Fuchi | 1493-1503 | Catastrophic |
| Hindustan | Yanal Densa | 1500-1510 | Catastrophic |
| Balkans | Constantinople | 1504-1514 | Major |
| Iberia | Lisbon | 1526-1536 | Minor |
| West China | Líntóng | 1551-1561 | Catastrophic |
| Italy | Ferrara | 1565-1575 | Minor |
| Andes | Pikunwijimapu | 1570-1580 | Catastrophic |
| Alaska | Unimax | 1580-1590 | Catastrophic |
| Japan | Gujō | 1581-1591 | Major |
| Andes | Chaucalana | 1599-1609 | Catastrophic |
| Japan | Shida | 1600-1610 | Major |
| South China | Qióngshān | 1600-1610 | Major |
| Japan | Kuji | 1606-1616 | Catastrophic |
| West China | Níngxià | 1617-1627 | Major |
| Maghreb | Fez | 1619-1629 | Minor |
| Indonesia | Banda | 1624-1634 | Catastrophic |
| Persia | Tabrīz | 1633-1643 | Minor |
| Italy | Monteleone | 1633-1643 | Major |
| Canada | Ondaonnentakwi | 1658-1668 | Major |
| Caucasus | Şamaxi | 1662-1672 | Minor |
| Balkans | Dubrovnik | 1662-1672 | Major |
| North China | Gégōu | 1663-1673 | Catastrophic |
| Anatolia | Lâdik | 1663-1673 | Catastrophic |
| Indonesia | Tifu | 1669-1679 | Minor |
| Japan | Isumi | 1672-1682 | Catastrophic |
| Andes | Ica | 1682-1692 | Catastrophic |
| Italy | Avellino | 1683-1693 | Major |
| Andes | Tolombon | 1687-1697 | Major |
| Caribbean | Maynoa | 1687-1697 | Major |
| Italy | Catania | 1688-1698 | Major |
| North China | Línfén | 1690-1700 | Major |
| Italy | Melfi | 1691-1699 | Minor |
| Indonesia | Banten | 1694-1704 | Major |
| West Coast | Tillamook | 1695-1705 | Catastrophic |
| Italy | Spoleto | 1698-1708 | Minor |
| Italy | Aquila | 1698-1708 | Minor |
| Japan | Kamakura | 1698-1708 | Catastrophic |
| Italy | Sulmona | 1701-1711 | Minor |
| Japan | Hidaka | 1702-1712 | Catastrophic |
| West China | Yìnglǐ | 1704-1714 | Major |
| Maghreb | Arzew | 1711-1721 | Major |
| West China | Fúqiāng | 1713-1723 | Major |
| Persia | Tabrīz | 1716-1726 | Major |
| North China | Dàdū | 1725-1735 | Minor |
| Andes | Mawlen | 1725-1735 | Catastrophic |
| Italy | Ariano | 1727-1737 | Minor |
| East Siberia | Achava | 1732-1742 | Catastrophic |
| West China | Dìngyuǎn | 1734-1744 | Catastrophic |
| Andes | Chancay | 1741-1751 | Catastrophic |
| Andes | Lafkenmapu | 1746-1756 | Catastrophic |
| Maghreb | Fez | 1750-1760 | Major |
| Iberia | Lisbon | 1750-1760 | Catastrophic |
| East Coast | Naumkeag | 1750-1760 | Minor |
| Crescent | Nawa | 1754-1764 | Major |
| Iberia | Lisbon | 1756-1766 | Catastrophic |
| Indochina | Chittagong | 1757-1767 | Catastrophic |
| Carpathia | Komárom | 1758-1768 | Minor |
| Balkans | Constantinople | 1761-1769 | Major |
| Colombia | Turuepano | 1761-1771 | Minor |
| Caribbean | Haniguayagua | 1765-1775 | Major |
| Central America | Cuauhtemallan | 1768-1778 | Major |
| Persia | Tabrīz | 1775-1785 | Major |
| Italy | Monteleone | 1778-1788 | Minor |
| Tibet | Dartsedo | 1781-1791 | Major |
| Mesoamerica | Ometepec | 1782-1792 | Catastrophic |
| Andes | Waranka | 1792-1802 | Major |
| Indonesia | Siberut | 1792-1802 | Catastrophic |
| Carpathia | Covasna | 1797-1807 | Major |
| Balkans | Candia | 1805-1810 | Major |
| Great Plains | Towosaghy | 1806-1816 | Catastrophic |
| Great Plains | Towosaghy | 1806-1816 | Catastrophic |
| Great Plains | Towosaghy | 1807-1817 | Major |
| Colombia | Caracas | 1807-1817 | Major |
| West Coast | Yaanga | 1807-1817 | Major |
| West Coast | Ineseno | 1807-1817 | Major |
| Western India | Morvi | 1814-1824 | Major |
| Polynesia | Kona | 1818-1828 | Major |
| Hindustan | Kathmandu | 1827-1837 | Major |
| Indonesia | Pagai | 1827-1837 | Catastrophic |
| West Coast | Suisin | 1831-1837 | Minor |
## References
1. [↑](#cite_ref-1) `Europa Universalis V\game\in_game\common\goods_demand\special_construction_demands.txt`
2. [↑](#cite_ref-2) From /Europa Universalis V/game/in\_game/common/road\_types/00\_generic.txt
3. [↑](#cite_ref-3) From /Europa Universalis V/game/main\_menu/common/static\_modifiers/location.txt
[Return to top](#top)
Mechanics
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |
| The world | Location • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |
