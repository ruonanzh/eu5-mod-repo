<!-- source: https://eu5.paradoxwikis.com/Population revid: 35567 fetched: 2026-09-09 -->
# Population

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") Pre-release.

[![](/thumb.php?f=UI_population.png&width=330)](/File%3AUI_population.png)

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
![{\displaystyle {\frac {(pops)\times (pop\ growth)}{12}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/3d4486ebd0c374d4f365ddd7e87eef7dccd80701) new pops will be born in each location. For example, a location with ![Population Growth](/thumb.php?f=Global_population_growth.png&width=30 "Population Growth") +1% Population Growth and 10,000 population will gain 9 new pops per month (the number appears to always be rounded up). Note that pop loss due to "starvation" is really just negative population growth, and as such can occur even if the province has plenty of food (though due to the large malus, real starvation is still the most common reason).

Pops are born as peasants or tribesmen, based on the pops already in the location. If both peasants and tribesmen are present, the newly born pops will be assigned social classes based on the ratio between them (notably, while other social classes are counted for total population growth, they are not counted in this ratio). As a result, highly urbanized locations (i.e. those with few peasants remaining due to promotion) which still have tribesmen present may see an unexpected increase in tribesmen due to this calculation.

Common effects on population growth include:

* [Rural Settlement Location Rank](/Location#rank "Location"): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.1% Population Growth
* [Prosperity](/Prosperity "Prosperity"): scaling up to ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.2% Population Growth with positive prosperity, or down to ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") −0.5% Population Growth with negative prosperity
* Food price: scaling between ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.1% Population Growth with cheap food to ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") −0.1% Population Growth with expensive food
* Available Free Land: Up to ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.25% Population Growth, which is based on the total population vs the population capacity, for locations with more than 10K pops or 10% population capacity
* Abundant Free Land: Up to ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +1.5% Population Growth, which is based on the total population vs the population capacity, only for locations with less than 10K pops and 10% population capacity
* Large [Food](/Food "Food") Storage in [Province](/Province "Province"): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.08% Population Growth per 12 months of food stored in the province, up to 120 months[[1]](#cite_note-1)
* Province [Starving](/Starving "Starving"): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") −2.5% Population Growth
* Looted: ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") −0.5% Population Growth
* [War Exhaustion](/Warfare#War_exhaustion "Warfare"): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") −0.03% Population Growth per point of war exhaustion
* New Colonial Nation Founded modifier: ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +1% Population Growth, decaying over time
* AI (Hard Difficulty): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.05% Population Growth
* AI (Very Hard Difficulty): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.1% Population Growth
* Conduct a Census [Parliament issue](/Parliament#Parliament_issues "Parliament"): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.5% Population Growth while being debated

Advances that affect population growth include:

* Colonial Traditions ([![Age of traditions.png](/thumb.php?f=Age_1_traditions.png&width=24)](/Age_of_Traditions "Age of Traditions") Age of Traditions, colonial subjects only): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.2% Population Growth
* Theotokos ([![Age of discovery.png](/thumb.php?f=Age_3_discovery.png&width=24)](/Age_of_Discovery "Age of Discovery") Age of Discovery, Orthodox/Miaphysite only): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.05% Population Growth
* Siberian Frontiers ([![Age of discovery.png](/thumb.php?f=Age_3_discovery.png&width=24)](/Age_of_Discovery "Age of Discovery") Age of Discovery, Russian culture group only): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.05% Population Growth
* Holi ([![Age of reformation.png](/thumb.php?f=Age_4_reformation.png&width=24)](/Age_of_Reformation "Age of Reformation") Age of Reformation, Dharmic religions only): ![Population Growth](/thumb.php?f=Global_population_growth.png&width=24 "Population Growth") +0.03% Population Growth

### Migration

Each month, pops may migrate into a location within their market that one of the highest migration attraction values. Distance to the migration destination is also considered, with closer destinations getting a priority over farther away ones with similar migration attraction. The Closed Borders law makes it such that only destinations within a country's borders are possible migration destinations. Only locations at a certain distance from the average migration attraction in the market experience migration. This occasionally leads to situations where lowering attraction can result in less migration.

When a location experiences migration, all eligible pops in it will migrate at once. However, not all social classes are eligible all the time. By default, only Nobles, Clerics, and Burghers are allowed to migrate. Pops of the Laborers, Peasants, and Tribesmen social classes require specific [estate privileges](/Estate_privileges "Estate privileges") or the expel population cabinet action in order to migrate. Soldiers and Slaves cannot migrate at all. In addition to this, the game rolls every month to see which classes are allowed to migrate. Peasants are allowed to migrate every month, while higher classes are only allowed to migrate more rarely.

Base [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png)migration speed is 1 per 10,000 people in a pop. The base can only be increased or decreased by a few things, most notably expel population, which increases the speed to 1 per 100 people before modifiers, as well as the Granary Town urban right which decreases the rate by 1 per 2 people, essentially turning off migration in a location. This base rate is then modified by the migration speed modifier for the pop type, as well as any local or global speed modifiers. If migration will occur, at least 1 person will migrate. Given the low base rate, this means that pops of size 10 or 1000 often migrate at the same rate, while disregarding migration speed modifiers.

## Literacy

Literacy is a measure of how well pops can read and write and ranges from 0% to 100%. Literacy provides bonuses based on the pop's social class and is also used to calculate the country's Average Literacy. Each 1% of country Average Literacy gives a

* ![Monthly Progress to Innovative](/thumb.php?f=Monthly_towards_innovative.png&width=24 "Monthly Progress to Innovative") +0.001 Monthly Progress to Innovative
* ![Monthly Research Progress %](/thumb.php?f=Research_speed.png&width=24 "Monthly Research Progress %") +1% Monthly Research Progress %
* ![Skill of New Artists](/thumb.php?f=Skill_of_new_artists.png&width=24 "Skill of New Artists") +0.1% Skill of New Artists bonus.

Additionally, average literacy of different social classes' on each location gives local bonuses to that location. For example, Monthly Promotion Speed in each location is increased for each 1% Average Literacy of [![Pop peasants.png](/thumb.php?f=Pop_peasants.png&width=24)](/File%3APop_peasants.png) Peasants.

## Pop satisfaction

Pop satisfaction is a measure of how happy pops are with their situation in life and is influenced by the following factors:

* The satisfaction of their estate
* The unrest in their location
* The tolerance of their religion
* The culture status of their culture
* Pop needs
* Market price of pop needs

Pop satisfaction ranges from 0% to 100% and every point of pop satisfaction below 100% brings the following effects:

* [![Global monthly prosperity.png](/thumb.php?f=Global_monthly_prosperity.png&width=24)](/File%3AGlobal_monthly_prosperity.png) **-0.0025%** Monthly prosperity (starts at **0%**)
* [![Global max control.png](/thumb.php?f=Global_max_control.png&width=24)](/File%3AGlobal_max_control.png) **-0.1%** Max control (starts at **0%**)
* [![Institution growth.png](/thumb.php?f=Institution_growth.png&width=24)](/File%3AInstitution_growth.png) **-0.1%** Institution growth (starts at **+10%**)

Pops join rebels when below 20% satisfaction. This can be reduced by stability and other factors but can never go below 5%.

Pops leave rebels when above 35% satisfaction. This can be increased by stability and other factors but can never go below 10%.

## Social class

|  |  |
| --- | --- |
| ![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png) | Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.1. |

Each pop in every location belongs to a social class[[2]](#cite_note-2). Unemployed Tribesmen and Slaves will slowly promote to Peasants, and if there is available employment at higher social classes, Peasants will upgrade to these. If the population of the higher classes is higher than the available employment then pops will demote to Peasants. The speed at which pops promote and demote can be affected by a variety of factors.

| Class | 100% Average literacy effect[[3]](#cite_note-3). | Effect per population percentage | [![Resource food.png](/thumb.php?f=Food.png&width=24)](/Food "Food") Food use Per 1000 pops | [![Global pop conversion speed.png](/thumb.php?f=Global_pop_conversion_speed.png&width=24)](/File%3AGlobal_pop_conversion_speed.png) Assimilation / Conversion rate | [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) Promotion speed | [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) Migration speed | Can gather raw materials | Can migrate[[4]](#cite_note-4) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [![Nobles icon](/thumb.php?f=Pop_nobles.png&width=64)](/File%3APop_nobles.png "Nobles icon") Nobles  These represent the rich and powerful, with a lineage that can not be doubted. They provide the main characters to lead the country. | * [![Global monthly control.png](/thumb.php?f=Global_monthly_control.png&width=24)](/File%3AGlobal_monthly_control.png) **+1%** Monthly control * [![Cultural tradition.png](/thumb.php?f=Cultural_tradition.png&width=24)](/File%3ACultural_tradition.png) **+0.2** Cultural tradition | **Max effect at 1%**  * [![Discipline.png](/thumb.php?f=Discipline.png&width=24)](/File%3ADiscipline.png) **+10%** Discipline * [![Resource legitimacy.png](/thumb.php?f=Legitimacy.png&width=24)](/File%3ALegitimacy.png) **+0.5** Monthly government power * [![Diplomatic reputation.png](/thumb.php?f=Diplomatic_reputation.png&width=24)](/File%3ADiplomatic_reputation.png) **+2** Diplomatic reputation * [![Monthly towards aristocracy.png](/thumb.php?f=Monthly_towards_aristocracy.png&width=24)](/File%3AMonthly_towards_aristocracy.png) **+0.1** Monthly progress to Aristocracy | 20 | 5% | 10% | 100% | ![No](/thumb.php?f=No.png&width=24 "No") | Yes |
| [![Clerics icon](/thumb.php?f=Pop_clergy.png&width=64)](/File%3APop_clergy.png "Clerics icon") Clerics  The spiritual leaders of our country, the clergy pops constitute the group that keeps our religious traditions in check and educates our people in the mysteries of our faith. | * [![Global pop conversion speed.png](/thumb.php?f=Global_pop_conversion_speed.png&width=24)](/File%3AGlobal_pop_conversion_speed.png) **+25%** Pop assimilation speed * [![Global pop conversion speed.png](/thumb.php?f=Global_pop_conversion_speed.png&width=24)](/File%3AGlobal_pop_conversion_speed.png) **+25%** Pop conversion speed | **Max effect at 10%**  * [![Stability investment.png](/thumb.php?f=Stability_investment.png&width=24)](/File%3AStability_investment.png) **+0.1** Stability investment * [![Monthly towards spiritualist.png](/thumb.php?f=Monthly_towards_spiritualist.png&width=24)](/File%3AMonthly_towards_spiritualist.png) **+0.1** Monthly progress to Spiritualist | 5 | 5% | 10% | 100% | ![No](/thumb.php?f=No.png&width=24 "No") | Yes |
| [![Burghers icon](/thumb.php?f=Pop_burghers.png&width=64)](/File%3APop_burghers.png "Burghers icon") Burghers  These represent the mercantile strata of the country, economics and finances being their reign. They are based mostly in towns and cities, where they promote wealth with productive buildings. | * [![Local trades per burgher.png](/thumb.php?f=Local_trades_per_burgher.png&width=24)](/File%3ALocal_trades_per_burgher.png) **+50%** Burghers trade capacity * [![Global monthly development.png](/thumb.php?f=Global_monthly_development.png&width=24)](/File%3AGlobal_monthly_development.png) **+25%** Monthly development growth | **Max effect at 100%**  * [![Monthly towards capital economy.png](/thumb.php?f=Monthly_towards_capital_economy.png&width=24)](/File%3AMonthly_towards_capital_economy.png) **+0.5** Monthly progress to Capital Economy | 4 | 10% | 50% | 50% | ![No](/thumb.php?f=No.png&width=24 "No") | Yes |
| [![Laborers icon](/thumb.php?f=Pop_laborers.png&width=64)](/File%3APop_laborers.png "Laborers icon") Laborers  These represent the people who work manual labour in our towns, cities and rural locations. They work the land to create, harvest and gather the raw materials that are the backbone of the country, or work as unskilled labour in mills. | * [![Global max rgo size modifier.png](/thumb.php?f=Global_max_rgo_size_modifier.png&width=24)](/File%3AGlobal_max_rgo_size_modifier.png) **+10%** Maximum RGO size * [![Global production efficiency.png](/thumb.php?f=Global_production_efficiency.png&width=24)](/File%3AGlobal_production_efficiency.png) **+5%** Production efficiency |  | 1 | 50% | 150% | 10% | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | Requires privilege |
| [![Soldiers icon](/thumb.php?f=Pop_soldiers.png&width=64)](/File%3APop_soldiers.png "Soldiers icon") Soldiers  These represent the common people that provide the manpower for our armies and garrisons as well as sailors for our navies. | * [![Global defensive.png](/thumb.php?f=Global_defensive.png&width=24)](/File%3AGlobal_defensive.png) **+10%** Fort defense * [![Global manpower modifier.png](/thumb.php?f=Global_manpower_modifier.png&width=24)](/File%3AGlobal_manpower_modifier.png) **+10%** Monthly manpower | **Max effect at 100%**  * [![Monthly towards quality.png](/thumb.php?f=Monthly_towards_quality.png&width=24)](/File%3AMonthly_towards_quality.png) **+0.5** Monthly progress to Quantity | 5 | 50% | 100% | 5% | ![No](/thumb.php?f=No.png&width=24 "No") | No |
| [![Peasants icon](/thumb.php?f=Pop_peasants.png&width=64)](/File%3APop_peasants.png "Peasants icon") Peasants  These represent the common people over whom we rule. Most of them live on subsistence farming, or in our villages. | * [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) **+200%** Pop promotion speed * [![Global levy recruitment speed modifier.png](/thumb.php?f=Global_levy_recruitment_speed_modifier.png&width=24)](/File%3AGlobal_levy_recruitment_speed_modifier.png) **+20%** Levy recruitment speed | **Max effect at 100%**  * [![Monthly towards traditional economy.png](/thumb.php?f=Monthly_towards_traditional_economy.png&width=24)](/File%3AMonthly_towards_traditional_economy.png) **+0.1** Monthly progress to Traditional Economy | 1 | 100% | 50% | 10% | ![No](/thumb.php?f=No.png&width=24 "No") | Requires privilege |
| [![Tribesmen icon](/thumb.php?f=Pop_tribesmen.png&width=64)](/File%3APop_tribesmen.png "Tribesmen icon") Tribesmen  These represent communities that populate rural locations, subsisting on their own as farmers, shepherds, or hunter-gatherers, and that we can hardly govern, since they maintain their own differentiated social structures and organization. | * [![Global tribal promotion.png](/thumb.php?f=Global_tribal_promotion.png&width=24)](/File%3AGlobal_tribal_promotion.png) **50%** Tribal promotion speed |  | 0 | 0% | 100% | 100% | ![No](/thumb.php?f=No.png&width=24 "No") | Requires privilege |
| [![Slaves icon](/thumb.php?f=Pop_slaves.png&width=64)](/File%3APop_slaves.png "Slaves icon") Slaves  These represent dispossessed people who gather raw materials or work on plantations for their masters, being treated as commodities either by their birth, or by acquisition in trade markets. | * [![Pop slaves.png](/thumb.php?f=Pop_slaves.png&width=24)](/File%3APop_slaves.png) **-50%** Slave pops satisfaction |  | 1 | 100% | 100% | 1% | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | No |

## References

1. [↑](#cite_ref-1) See `positive_province_food_growth` in `Europa Universalis V\game\main_menu\common\static_modifiers\province.txt`, last updated for v1.1.10
2. [↑](#cite_ref-2) Social classes and their attributes are defined in /Europa Universalis V/game/in\_game/common/pop\_types
3. [↑](#cite_ref-3) Each effect is local
4. [↑](#cite_ref-4) See `global_[insert social class]_migration_allowed` in `Europa Universalis V\game\in_game\common\auto_modifiers\country.txt`

[Return to top](#top)

Mechanics

|  |  |
| --- | --- |
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |

|  |  |
| --- | --- |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • Population • [Age](/Age "Age") |

|  |  |
| --- | --- |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |

|  |  |
| --- | --- |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |