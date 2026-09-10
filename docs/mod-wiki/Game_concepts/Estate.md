<!-- source: https://eu5.paradoxwikis.com/Estate revid: 36206 fetched: 2026-09-09 -->
# Estate
Europa Universalis 5
[Estates](/Estates "Estates")
 [Nobility](/Nobility "Nobility")
 [Clergy](/Clergy "Clergy")
 [Burghers](/Burghers "Burghers")
 [Commoners](/Commoners "Commoners")
 [Tribes](/Tribes "Tribes")
 [Dhimmi](/Dhimmi "Dhimmi")
 [Cossacks](/Cossacks "Cossacks")
**Estates** are special interest groups within a [country](/Country "Country"). They may provide [tax](/Tax_Base "Tax Base"), [army levies](/Army#Army_Levies "Army"), and [naval levies](/Navy#Naval_Levies "Navy"). Each [character](/Characters "Characters") belongs to one of the estates; some [succession laws](/Succession_laws "Succession laws") limit their heirs to specific estates.
The name of an estate depends on the country's government, culture, and religion.
## Estate stats
Every estate has 3 stats to track, except for the  Crown estate, which only tracks the  Estate Power .
### Estate power
 Estate power is a percentage divided among all estates that represents their political strength within the country and how much influence the estate has when debating parliament issues. It depends on how many pops the estate has and what privileges the estate has been given. Every pop has a Political Power, which is decided by the social class it belongs to and determines how much they contribute to Estate Power. When an estate's power is below 25%, it provides scaling bonuses the lower is it, mainly increased maximum tax. When an estate's power is above 25%, it provides different scaling bonuses but also reduces the estate's maximum tax and increases monthly progress towards a certain [societal value](/Societal_value "Societal value").
| Estate | Power per 1k pop[[1]](#cite_note-1) |
|  Nobles | 25 |
|  Clergy | 10 |
|  Burghers | 4 |
|  Peasants | 0.025 |
|  Tribesmen | 0.01 |
### Estate satisfaction
 Estate satisfaction represents how happy an estate is with how the country is currently being ruled. If it is above 50%, the country gains bonuses depending on the estate, but if it is below 50%, it gives similar penalties. If it drops below 25%, the country is not able to recruit levies from that estate and if below 1% will not be taxed either. Estate satisfaction also has a direct impact on the satisfaction of its pops. The game displays both the current estate satisfaction and the *satisfaction equilibrium*, which is the value the estate satisfaction slowly drifts towards. Estates can be bribed with gold at any point to increase their estate satisfaction by 10%, but without increasing the satisfaction equilibrium. Each country has a base satisfaction equilibrium of 30%. The probability for estates to build beneficial buildings depend of the satisfaction and calculated as
Estate Satisfaction - 50
{\displaystyle {\text{Estate Satisfaction - 50}}}
.
### Estate opinion
 Estate Opinion is the opinion each estate has towards every other country. Estates want their country to befriend countries the estate has positive opinion of and to be hostile towards countries the estate has negative opinion of. Hovering over an estate displays its 5 most liked and least liked countries, and hovering over that tooltip as well displays its 20 more liked or least liked countries. Estate opinion is affected by country opinion, as well as how much estate power the same estate has in each country.
## Estate privileges
Each estate except the  Crown estate can be granted estate privileges, which provide various bonuses and increase the estate's  Satisfaction but also increase the estate's power. Granting an estate privilege costs 5 Government Power, and revoking an estate privilege costs  4 stability for every 1% estate  Power. Granting an estate privilege gives its estate Satisfaction equal to 3 times the Satisfaction Equilibrium provided by it, and reduces the Satisfaction of the other estates by half that amount. Revoking an estate privilege reduces the Satisfaction by 3 times the Satisfaction Equilibrium provided by it and by an additional −25%. The  stability is reduced by 400 multiplied by estate relative power then affected by various modifiers. If the primary religion is  Sānjiào it will also cost 10  Righteousness.
## Crown estate
The  Crown estate represents the power of the government that other estates do not have. This estate does not have population, and its estate power scales with the country population adjusted with control of each location and the ruler's administrative ability. Instead of estate privileges, the crown estate has  [Reforms](/Reforms "Reforms").
Each percent of  Crown power also grants  **+0.5%** parliament base support. Unlike other estates, low estate power for the  Crown estate gives penalties and the estate should have as much power as possible.
|  Crown power below 25% |  Crown power above 25% |
| *  Up to **−25%** Efficiency of our cabinet *  Up to **+25%** Expected cost of court *  Up to **+12.5%** Change policy cost *  Up to **−25%** Tax efficiency *  Up to **−16.5%** Estate satisfaction for destroying estate buildings | *  Up to **+37.5%** Efficiency of our cabinet *  Up to **−3.75%** Expected cost of court *  Up to **−37.5%** Change policy cost *  Up to **+3.75** Power projection *  Up to **−75%** Revoke privilege cost *  Up to **+22.5%** Estates satisfaction equilibrium |
## Estate power calculations
An estate’s total  power is determined by summing the political power generated by the pops of each location in the country, applying any *local estate power modifiers*, and finally applying the *national modifiers* affecting the country as a whole (such as  Legitimacy,  Estate Privilege,  Reforms).
For each location, the game calculates political power by looking at every population type present there, multiplying the number of individuals of that pop type by the political power provided per pop of that type, and then applying the location’s total local modifiers. The national modifiers are then applied once to the final sum.
The full formula is:
EstatePower
=
(
∑
location
[
∑
pop type
PopCount
pop type, location
⋅
PowerPerPop
pop type
]
⋅
(
1
+
LocalModifier
location
)
)
⋅
(
1
+
NationalModifier
)
{\displaystyle {\text{EstatePower}}=\left(\sum \_{\text{location}}\left[\sum \_{\text{pop type}}{\text{PopCount}}\_{\text{pop type, location}}\cdot {\text{PowerPerPop}}\_{\text{pop type}}\right]\cdot (1+{\text{LocalModifier}}\_{\text{location}})\right)\cdot (1+{\text{NationalModifier}})}
## References
1. [↑](#cite_ref-1) Defined as power\_per\_pop in /Europa Universalis V/game/in\_game/common/estates/00\_default.txt
[Return to top](#top)
Mechanics
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • Estate • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |
