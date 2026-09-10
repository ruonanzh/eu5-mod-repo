<!-- source: https://eu5.paradoxwikis.com/Population revid: 35567 fetched: 2026-09-09 -->
# Population
The population tab
Population is divided into **pops** based on social class, [culture](/Culture "Culture"), [religion](/Religion "Religion") and location. Each pop has a literacy level, a satisfaction level, and pop needs that must be met.
Every pop has a [culture](/Culture "Culture"), [religion](/Religion "Religion"), social class, and location. If the country's primary culture or religion is different from a pop's culture or religion, the population will slowly change their culture and religion to the country's primary ones. This process is called Assimilation and depends on the average literacy of Clerics and is reduced by 1% for each 1% Control below 100% in the location.
Hovering over the population number on the top information bar will automatically change the map mode to population view.
## Demographics
The population growth of the pops in a location is connected to how many are born in a month compared to how many died. It is increased by prosperity, capacity, the price of food in the location and the amount of food stored in the province. It is decreased by lack of food, diseases, sieges, or other calamities.
Every location has a Population Capacity, which is the amount of population it can support. It is affected primarily by the location's rank, vegetation, climate, development, and whether the location is coastal or a country capital. The less population a location has compared to its Population Capacity, the faster population will grow, especially when a location has less than 10% population compared to its Population Capacity. If population becomes higher than Population Capacity, it will not be able to grow more and will cause population to migrate away.
### Population Growth
Population Growth determines the rate at which new pops are born in a location each year. Each month,
(
p
o
p
s
)
×
(
p
o
p
g
r
o
w
t
h
)
12
{\displaystyle {\frac {(pops)\times (pop\ growth)}{12}}}
 new pops will be born in each location. For example, a location with  +1% Population Growth and 10,000 population will gain 9 new pops per month (the number appears to always be rounded up). Note that pop loss due to "starvation" is really just negative population growth, and as such can occur even if the province has plenty of food (though due to the large malus, real starvation is still the most common reason).
Pops are born as peasants or tribesmen, based on the pops already in the location. If both peasants and tribesmen are present, the newly born pops will be assigned social classes based on the ratio between them (notably, while other social classes are counted for total population growth, they are not counted in this ratio). As a result, highly urbanized locations (i.e. those with few peasants remaining due to promotion) which still have tribesmen present may see an unexpected increase in tribesmen due to this calculation.
Common effects on population growth include:
* [Rural Settlement Location Rank](/Location#rank "Location"):  +0.1% Population Growth
* [Prosperity](/Prosperity "Prosperity"): scaling up to  +0.2% Population Growth with positive prosperity, or down to  −0.5% Population Growth with negative prosperity
* Food price: scaling between  +0.1% Population Growth with cheap food to  −0.1% Population Growth with expensive food
* Available Free Land: Up to  +0.25% Population Growth, which is based on the total population vs the population capacity, for locations with more than 10K pops or 10% population capacity
* Abundant Free Land: Up to  +1.5% Population Growth, which is based on the total population vs the population capacity, only for locations with less than 10K pops and 10% population capacity
* Large [Food](/Food "Food") Storage in [Province](/Province "Province"):  +0.08% Population Growth per 12 months of food stored in the province, up to 120 months[[1]](#cite_note-1)
* Province [Starving](/Starving "Starving"):  −2.5% Population Growth
* Looted:  −0.5% Population Growth
* [War Exhaustion](/Warfare#War_exhaustion "Warfare"):  −0.03% Population Growth per point of war exhaustion
* New Colonial Nation Founded modifier:  +1% Population Growth, decaying over time
* AI (Hard Difficulty):  +0.05% Population Growth
* AI (Very Hard Difficulty):  +0.1% Population Growth
* Conduct a Census [Parliament issue](/Parliament#Parliament_issues "Parliament"):  +0.5% Population Growth while being debated
Advances that affect population growth include:
* Colonial Traditions ( Age of Traditions, colonial subjects only):  +0.2% Population Growth
* Theotokos ( Age of Discovery, Orthodox/Miaphysite only):  +0.05% Population Growth
* Siberian Frontiers ( Age of Discovery, Russian culture group only):  +0.05% Population Growth
* Holi ( Age of Reformation, Dharmic religions only):  +0.03% Population Growth
### Migration
Each month, pops may migrate into a location within their market that one of the highest migration attraction values. Distance to the migration destination is also considered, with closer destinations getting a priority over farther away ones with similar migration attraction. The Closed Borders law makes it such that only destinations within a country's borders are possible migration destinations. Only locations at a certain distance from the average migration attraction in the market experience migration. This occasionally leads to situations where lowering attraction can result in less migration.
When a location experiences migration, all eligible pops in it will migrate at once. However, not all social classes are eligible all the time. By default, only Nobles, Clerics, and Burghers are allowed to migrate. Pops of the Laborers, Peasants, and Tribesmen social classes require specific [estate privileges](/Estate_privileges "Estate privileges") or the expel population cabinet action in order to migrate. Soldiers and Slaves cannot migrate at all. In addition to this, the game rolls every month to see which classes are allowed to migrate. Peasants are allowed to migrate every month, while higher classes are only allowed to migrate more rarely.
Base migration speed is 1 per 10,000 people in a pop. The base can only be increased or decreased by a few things, most notably expel population, which increases the speed to 1 per 100 people before modifiers, as well as the Granary Town urban right which decreases the rate by 1 per 2 people, essentially turning off migration in a location. This base rate is then modified by the migration speed modifier for the pop type, as well as any local or global speed modifiers. If migration will occur, at least 1 person will migrate. Given the low base rate, this means that pops of size 10 or 1000 often migrate at the same rate, while disregarding migration speed modifiers.
## Literacy
Literacy is a measure of how well pops can read and write and ranges from 0% to 100%. Literacy provides bonuses based on the pop's social class and is also used to calculate the country's Average Literacy. Each 1% of country Average Literacy gives a
*  +0.001 Monthly Progress to Innovative
*  +1% Monthly Research Progress %
*  +0.1% Skill of New Artists bonus.
Additionally, average literacy of different social classes' on each location gives local bonuses to that location. For example, Monthly Promotion Speed in each location is increased for each 1% Average Literacy of  Peasants.
## Pop satisfaction
Pop satisfaction is a measure of how happy pops are with their situation in life and is influenced by the following factors:
* The satisfaction of their estate
* The unrest in their location
* The tolerance of their religion
* The culture status of their culture
* Pop needs
* Market price of pop needs
Pop satisfaction ranges from 0% to 100% and every point of pop satisfaction below 100% brings the following effects:
*  **-0.0025%** Monthly prosperity (starts at **0%**)
*  **-0.1%** Max control (starts at **0%**)
*  **-0.1%** Institution growth (starts at **+10%**)
Pops join rebels when below 20% satisfaction. This can be reduced by stability and other factors but can never go below 5%.
Pops leave rebels when above 35% satisfaction. This can be increased by stability and other factors but can never go below 10%.
## Social class
Each pop in every location belongs to a social class[[2]](#cite_note-2). Unemployed Tribesmen and Slaves will slowly promote to Peasants, and if there is available employment at higher social classes, Peasants will upgrade to these. If the population of the higher classes is higher than the available employment then pops will demote to Peasants. The speed at which pops promote and demote can be affected by a variety of factors.
| Class | 100% Average literacy effect[[3]](#cite_note-3). | Effect per population percentage |  Food use Per 1000 pops |  Assimilation / Conversion rate |  Promotion speed |  Migration speed | Can gather raw materials | Can migrate[[4]](#cite_note-4) |
|  Nobles  These represent the rich and powerful, with a lineage that can not be doubted. They provide the main characters to lead the country. | *  **+1%** Monthly control *  **+0.2** Cultural tradition | **Max effect at 1%**  *  **+10%** Discipline *  **+0.5** Monthly government power *  **+2** Diplomatic reputation *  **+0.1** Monthly progress to Aristocracy | 20 | 5% | 10% | 100% |  | Yes |
|  Clerics  The spiritual leaders of our country, the clergy pops constitute the group that keeps our religious traditions in check and educates our people in the mysteries of our faith. | *  **+25%** Pop assimilation speed *  **+25%** Pop conversion speed | **Max effect at 10%**  *  **+0.1** Stability investment *  **+0.1** Monthly progress to Spiritualist | 5 | 5% | 10% | 100% |  | Yes |
|  Burghers  These represent the mercantile strata of the country, economics and finances being their reign. They are based mostly in towns and cities, where they promote wealth with productive buildings. | *  **+50%** Burghers trade capacity *  **+25%** Monthly development growth | **Max effect at 100%**  *  **+0.5** Monthly progress to Capital Economy | 4 | 10% | 50% | 50% |  | Yes |
|  Laborers  These represent the people who work manual labour in our towns, cities and rural locations. They work the land to create, harvest and gather the raw materials that are the backbone of the country, or work as unskilled labour in mills. | *  **+10%** Maximum RGO size *  **+5%** Production efficiency |  | 1 | 50% | 150% | 10% |  | Requires privilege |
|  Soldiers  These represent the common people that provide the manpower for our armies and garrisons as well as sailors for our navies. | *  **+10%** Fort defense *  **+10%** Monthly manpower | **Max effect at 100%**  *  **+0.5** Monthly progress to Quantity | 5 | 50% | 100% | 5% |  | No |
|  Peasants  These represent the common people over whom we rule. Most of them live on subsistence farming, or in our villages. | *  **+200%** Pop promotion speed *  **+20%** Levy recruitment speed | **Max effect at 100%**  *  **+0.1** Monthly progress to Traditional Economy | 1 | 100% | 50% | 10% |  | Requires privilege |
|  Tribesmen  These represent communities that populate rural locations, subsisting on their own as farmers, shepherds, or hunter-gatherers, and that we can hardly govern, since they maintain their own differentiated social structures and organization. | *  **50%** Tribal promotion speed |  | 0 | 0% | 100% | 100% |  | Requires privilege |
|  Slaves  These represent dispossessed people who gather raw materials or work on plantations for their masters, being treated as commodities either by their birth, or by acquisition in trade markets. | *  **-50%** Slave pops satisfaction |  | 1 | 100% | 100% | 1% |  | No |
## References
1. [↑](#cite_ref-1) See `positive_province_food_growth` in `Europa Universalis V\game\main_menu\common\static_modifiers\province.txt`, last updated for v1.1.10
2. [↑](#cite_ref-2) Social classes and their attributes are defined in /Europa Universalis V/game/in\_game/common/pop\_types
3. [↑](#cite_ref-3) Each effect is local
4. [↑](#cite_ref-4) See `global_[insert social class]_migration_allowed` in `Europa Universalis V\game\in_game\common\auto_modifiers\country.txt`
[Return to top](#top)
Mechanics
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • Population • [Age](/Age "Age") |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |
