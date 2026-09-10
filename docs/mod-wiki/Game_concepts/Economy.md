<!-- source: https://eu5.paradoxwikis.com/Economy revid: 36948 fetched: 2026-09-09 -->
# Economy
The economy menu
At the start of the game most countries start with 30  Stability, 20  Prestige and 95 
Government power
Based on government type:
*  Legitimacy if Monarchy
*  Republican Tradition if Republic
*  Devotion if Theocracy
*  Horde Unity if Steppe Horde
*  Tribal Cohesion if Tribe
.
## Gold
Gold, or Ducats, represents liquid wealth. It is spent on almost everything, from constructing buildings to maintaining armies, and many costs are scaled by the country's income. Gold changes hands through the purchases and sales on the market. The main sources of gold income and expenses are the following:
| Sources of income | Sources of expenses |
| * Minting * Estate tax * Trade income * Selling food * Foreign buildings * Mercenary income * Positive diplomatic deals * Interests from loans (given) | * Cost of the court * Army maintenance (min 50%) * Navy maintenance (min 50%) * Fort maintenance (min 50%) * Cost of colonies * Diplomatic spending * Stability spending * Exploration cost * Building subsidies * Mercenary paying * Negative diplomatic deals * Interests from loans (taken) * Buying food |
Each location has a tax base, which is the combined profit of its R.G.O. and buildings selling their goods to the market as well as Burghers activities, multiplied by the control percentage in the location. The tax base of each location is distributed among the estates of its pops according to their relative population in the location. Then each estate pays a portion of it to the country according to the tax rate imposed on it.
Estate taxation can be automated, which will raise and lower estates tax until their Satisfaction Equilibrium is 50%.
### Minting
Minting is one of the primary ways of gaining additional ducats. Income from minting range from 0% to 25% of the country's tax base modified by the Income from minting modifier and increase demand for  Gold and  Silver in the capital market by
T
a
x
B
a
s
e
/
100
{\displaystyle TaxBase/100}
 at 100% minting. In addition, every country has a minting threshold[[1]](#cite_note-1), starting at 5% and modified by laws and privileges. Minting above the threshold will increase inflation.
#### Inflation
Inflation represents the increase in all prices in the game. Each month inflation decreases by **-0.1%**[[2]](#cite_note-2) and is increased by **+0.005** for each 1% minting above the minting threshold.
Gold and Silver also increase inflation but it depends on the total amount of a countries production that is precious metals. The calculation is: (Precious Metal Output)/(Total Country Output) x (1% inflation).
So if a country produces 10 precious metals and in total produce 20 goods the inflation gained would be **+0.5%**.
The Reduce Inflation cabinet action can be used to reduce inflation, which is unlocked with  Strict Monetary Control [advance](/Advances "Advances").
### Expected expenses
Every country is expected to pay three expenses. How much each country chooses to pay ranges from 0% to 100%. Paying them is optional but doing so grants various bonuses. Each expected expense scales with the country's tax base but the percentage can be increased or decreased by various factors.
| Expense | % of tax base | Effect per 1% paid |
|  **Cost of the Court** | 10% |  **+0.02** Monthly Government power Based on government type:  *  Legitimacy if Monarchy *  Republican Tradition if Republic *  Devotion if Theocracy *  Horde Unity if Steppe Horde *  Tribal Cohesion if Tribe |
|  **Stability Investment** | 10% |  **+0.005** Monthly Stability |
|  **Diplomatic Spending** | 10% | *  +0.005 Speed of Annexation *  +0.5% Counterespionage *  +0.03 Diplomatic Reputation *  +0.03 Maximum Diplomats *  −0.001 Monthly Complacency *  +0.004 Monthly Diplomats *  +0.3 Loyalty of Subjects |
### Maintenance
Armies, navies and forts have a monthly influence cost, which by default it is set to be paid in full. It is possible to reduce the percentage of maintenance that is it paid for all three, but this will give penalties. Reducing the maintenance of armies or navies reduces their morale by an equal percentage. Reducing the maintenance of forts gives the following penalties for each 1% reduced:
*  −2% Fort Defense
*  −0.5% Garrison Size
*  −0.0005 Monthly Prestige
### Loans
Loans are instant sums of money that can be taken and must be monthly paid over the course of 60 months with interest. The base interest for every country is 10% and can range from 1% to 25%. The sum of all loans of a country is called the debt.
* Left-clicking on the loan button will borrow money from the estates. There is a finite amount of gold that can be borrowed from estates.
* Right-clicking on the loan button will borrow money from banking countries. A list of all banking countries within diplomatic range will appear. How big the loan is depends on how much the banking country can afford to lend.
If a country has negative gold at the end of a month, it will automatically take a loan. If there is not enough gold that can be borrowed, the country will declare bankruptcy.
#### Bankruptcy
Bankruptcy can be declared while a country has loans, either manually from the Current Loans menu or automatically if the country has a negative balance and there is not enough gold that can be borrowed. Bankruptcy will remove all loans, reduce inflation and reset the country's gold to 1 but will also cost **50** Stability, downgrade 10% of all buildings, and bring the following penalties for 60 months:
*  −90% Construction Speed
*  −90% Crown Power
*  −2.5% Estates Satisfaction Equilibrium
*  +200 Pop Demotion Speed
*  −50 Pop Promotion Speed
*  −90% Army Morale
*  +0.5 Monthly Progress to Traditional Economy
*  −90% Navy Morale
*  −90% Monthly Research Progress %
*  −50% Total Loan Capacity
## Control
*Main article: [Control](/Control "Control")*
The effective  [Tax Base](/Tax_Base "Tax Base") of a location is calculated by multiplying the  Wealth with the location's  [Control](/Control "Control").
The current control of a location slowly trends towards its  **Maximum Control**. The maximum control of a location is primarily determined by its Proximity to Capital, among other modifiers:
*  [Proximity](#Proximity): **0** at 0 Proximity to **+75%** at 100 Proximity
*  Average Satisfaction of pops: **−10%** at 0% Satisfaction to **0** at 100% Satisfaction
* [Integration Status](/Intergration_Status "Intergration Status"): Conquered **−10%**, Integrated **+5%**, Core **+20%**
* [Location rank](/Location_rank "Location rank"):  Town **+5%**,  City **+10%**
* [Buildings](/Buildings "Buildings"): Council hall **+2.5 / 5 / 10%**, Minting Office **+5%**
* Friendly Armies in Location: Troop count / Location population \* **10%**?
* Friendly Armies in Province: around **1%**?
Maximum control can also be temporarily increased by using the Increase Province Control cabinet action.
## Tax
A location's  Wealth is calculated by adding the total profits from [RGO](/RGO "RGO"), the sum of Potential Profits from buildings, and some factors involving Burghers tradingwhat?.
The effective  **Tax Base** is then calculated by multiplying the Potential Tax Base with the location's Control. The loss of  Wealth due to low control is divided between estates with respect to their power in that location. There is also a matter of Peasant Enfranchisment which redistributes wealth from Commoners to Nobles.
The Tax Base is then divided among [Estates](/Estates "Estates"), based on the local **Tax Base Share**. The Tax Base Share is the local population, weighted by
| Estate | tax weight[[3]](#cite_note-3) |
|  Nobles | 100 |
|  Clergy | 25 |
|  Burghers | 40 |
|  Peasants | 1 |
|  Tribesmen | 0.01 |
Note that the tax base weighting is different from the weighting used in Estate Power calculations.
After dividing up the Tax Base to each estate, it is taxed according to the national **tax rate** for each estate.
### Example
This picture is old - before 1.1 patch - and therefore, doesn't take into account Peasant Enfranchisement and the Tax Base Share was weighted different.
At the start of the game in April 1337, León has a  Wealth of 7.26 and Peasant Enfranchisement of 55%:
| Source | calculation | Tax Base Share |
| R.G.O. | 2 level \* 0.17 profit per level |  0.34 Wealth |
| Buildings | adding up all Potential Profits, ignoring unprofitable buildings |  6.23 Wealth |
| Burghers trading | ?? | ?? |
|  | Total Wealth |  7.26 Wealth |
Factoring in Control, we get  7.26 Wealth \*  42.82% control =  3.11 tax base.
Wealth Share, at 1.3.2, for each Estate is calculated using the population:
| Estate | weighted population | Wealth Share |
|  Nobles |  339 pops \* 100 | 33900 (19.10% of total) |
|  Clergy |  966 pops \* 25 | 24150 (13.61% of total) |
|  Burghers |  1850 pops \* 40 | 74000 (41.70% of total) |
|  Peasants |  2750 pops \* 1 +  1100 pops \* 1 +  41527 pops \* 1 | 45377 (25.57% of total) |
Redistribution of Wealth from Commoners to Nobles due to Peasant Enfranchisement:
| Estate | Peasant enfranchisement impact | Wealth Share |
|  Nobles |  339 pops \* 100 + 45377\*(1-55%) | 54319 |
|  Peasants | ( 2750 pops \* 1 +  1100 pops \* 1 +  41527 pops \* 1)\*55% | 24957 |
Adjusted Wealth Share of the Estates:
| Estate | Wealth Share |
|  Nobles | 54319 (30.61% of total) |
|  Clergy | 24150 (13.61% of total) |
|  Burghers | 74000 (41.70% of total) |
|  Peasants | 24957 (14.06% of total) |
Finally, the tax generated from León can be calculated:
| Estate | calculation | Taxed income |
|  Nobles | 3.11 tax base \* 30.61% wealth share \* 17.05% tax rate |  0.162 gold |
|  Clergy | 3.11 tax base \* 13.61% wealth share \* 0.00% tax rate |  0.000 gold |
|  Burghers | 3.11 tax base \* 41.70% wealth share \* 34.05% tax rate |  0.441 gold |
|  Peasants | 3.11 tax base \* 14.06% wealth share \* 44.61% tax rate |  0.195 gold |
|  | Total Tax from the Location |  0.798 gold |
However, tax amount reaching the treasury is dependend on the Tax efficiency as well.
Total Tax from the Location reaching the Treasury = Total Tax from the Location \* (1 + Tax efficiency)
So, if in our example the Tax efficiency were -5% then Tax recieved form Leon = 0.798\*95%=0.758 gold
## Manpower
Manpower represents the limit of how many blaggards and scoundrels a [Country](/Country "Country") can support in its standing [Army](/Army "Army").
Manpower is expended when training and maintaining professional [Regiments](/index.php?title=Regiments&action=edit&redlink=1 "Regiments (page does not exist)"), which are usually more effective than [Army Levies](/index.php?title=Army_Levies&action=edit&redlink=1 "Army Levies (page does not exist)").
The rate at which Manpower is gained can be increased by constructing Manpower [Buildings](/Buildings "Buildings") or researching certain [Advances](/Advances "Advances").
A country can store up to 5 years worth of their Manpower income.
## Sailors
A [Country](/Country "Country") may possess a number of Sailors, representing the fishermen, merchant seamen, and naval officers who make a living on the open seas.
Such experienced tars are required to build [Ships](/index.php?title=Ships&action=edit&redlink=1 "Ships (page does not exist)"), and are expended while maintaining a [Navy](/Navy "Navy"). These are separate from [Naval Levies](/index.php?title=Naval_Levies&action=edit&redlink=1 "Naval Levies (page does not exist)") and more effective. They are even required to man [Exploration](/Exploration "Exploration") missions.
The rate at which Sailors are gained can be increased by constructing port [Buildings](/Buildings "Buildings") or researching certain [Advances](/Advances "Advances").
A country can store up to 5 years worth of their Sailors income.
## Food
 **Food** is a resources used by both armies and pops. Food is produced by:
* [Food raw materials](/Goods#Raw_goods "Goods") RGOs,
* Laborer and Slave pops which are not employed, and
* Villages buildings, which may directly produce food (Forest Village), or indirectly by producing food raw materials (Fishing Village).
The local  **Food Productivity** modifies the amount of food produced at each location. The Local Food Production % takes into account:
* [Weather](/Weather "Weather") (e.g. wind damage **-5%**, sandstorm **-15%**) and [Winter](/Winter "Winter") (mild **-25%**, normal **-50%**, severe **-200%**)
* Raised Levies **-20%**
* Location Rank (Rural Settlement **+10%**, Megalopolis **-67%**)
* [Development](/Development "Development") (up to **+100%**)
* [Topography](/Topography "Topography"), Vegetation, rivers, and coasts
* Capital Economy vs Traditional Economy [societal values](/Societal_values "Societal values") (**-20%** to **+20%**)
* Peasants, Dhimmi, and Tribes [estate satisfaction](/Estate_Satisfaction "Estate Satisfaction")
* [Laws](/Laws "Laws") or Policies (e.g. Feudal Administration)
* [Advances](/Advances "Advances")
* [Buildings](/Common_buildings#Infrastructure_Buildings "Common buildings") (e.g. Irrigation)
There are 3 layers involved in the production and distribution of food:
* **Local Food**: Local Food is produced and consumed in the Locations, and any excess or deficit is added to Provincial Food.
* **Provincial Food**: Provincial Food is a province-wide food storage, and any excess when it is full or deficit when it is empty is added to Market Food unless the province is under Siege. Armies will consume Provincial Food if they would otherwise suffer attrition. A province can only buy or sell as much food on the market as it can store in Provincial Food, regardless of Local Food production and consumption.
* **Market Food**: Market Food is a market-wide food storage. Food prices depends on the amount of Market Food present. Any food bought or sold on the market will affect the income of the location's owner. Market Food can be moved between markets via trades of food raw materials.
Every location has a food consumption that depends on its pops. If a location does not have food in any of the three layers, it will suffer starvation, which brings the following effects:
*   Allows Laborers to Migrate
*  −10 Character Life Expectancy
*  −1 Migration Attraction
*  +0.025 Pop Migration Speed
*   Allows Peasants to Migrate
*  +50% Pop Demotion Speed
*  −2.5% Population Growth
*  −25% Supply Limit
*   Allows Tribesmen to Migrate
*  −50% Upper-Class Population Capacity
## References
1. [↑](#cite_ref-1) See `minting_inflation_threshold` in `Europa Universalis V\game\in_game\common\auto_modifiers\country.txt`
2. [↑](#cite_ref-2) See `monthly_inflation` in `Europa Universalis V\game\in_game\common\auto_modifiers\country.txt`
3. [↑](#cite_ref-3) tax weights defined as tax\_per\_pop in /Europa Universalis V/game/in\_game/common/estates/00\_default.txt
[Return to top](#top)
Mechanics
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |
| Economy & Research | Economy • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |
