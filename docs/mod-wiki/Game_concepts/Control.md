<!-- source: https://eu5.paradoxwikis.com/Control revid: 36230 fetched: 2026-09-09 -->
# Control
**Control** is a characteristic of a [location](/Location "Location") expressing how much the central government can tap into the resources of the location. It has a wide range of effects, from directly impacting how much the local [population](/Population "Population") can be taxed, to the amount of levies they will contribute when called. A lack of control in a location reduces the crown power gained from its population, while also decreases the manpower and sailors available locally and weakens the market attraction of your own markets, making them likelier to belong to foreign markets if they have low control.
## Effects
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
The follow table illustrates the effects of control at 0, 50 and 100 percent:
|  Control | **0%** | **50%** | **100%** |
| Effects | *  **×0** Tax base  *  +0% Local Crown Power *  +0% Levy Size *  +0% Monthly Manpower *  +0% Monthly Sailors *  +0% Peasant Enfranchisement *  +0% Local Market Protection *  +50% Mercenary Size | *  **×0.5** Tax base  *  +50% Local Crown Power *  +50% Levy Size *  +50% Monthly Manpower *  +50% Monthly Sailors *  +25% Peasant Enfranchisement *  +25% Local Market Protection *  +0% Mercenary Size | *  **×1** Tax base  *  +100% Local Crown Power *  +100% Levy Size *  +100% Monthly Manpower *  +100% Monthly Sailors *  +50% Peasant Enfranchisement *  +50% Local Market Protection *  −50% Mercenary Size |
## Maximum control
The current control of a location slowly trends towards its  **Maximum Control**. The maximum control of a location is primarily determined by its Proximity to Capital, among other modifiers:
*  [Proximity](#Proximity): **0** at 0 Proximity to **+75%** at 100 Proximity
*  Average Satisfaction of pops: **−10%** at 0% Satisfaction to **0** at 100% Satisfaction
* [Integration Status](/Intergration_Status "Intergration Status"): Conquered **−10%**, Integrated **+5%**, Core **+20%**
* [Location rank](/Location_rank "Location rank"):  Town **+5%**,  City **+10%**
* [Buildings](/Buildings "Buildings"): Council hall **+2.5 / 5 / 10%**, Minting Office **+5%**
* Friendly Armies in Location: Troop count / Location population \* **10%**?
* Friendly Armies in Province: around **1%**?
Maximum control can also be temporarily increased by using the Increase Province Control cabinet action.
## Proximity
By default, **Proximity** starts at **100** in the capital, and gradually decreases along the shortest path from the capital to the location, shortest as defined by the  proximity costs between locations. Each point of proximity in a location gives  **+0.75%** Max Control.
The  proximity cost between two land locations has a base cost of **+40**, and is affected by either the [road](/Road "Road") between the two locations (Gravel Road **−20**, Paved Road **−25**, Modern Road **−30**, Railroad **−35**), or by the adjacent river (both downstream and upstream **−28**).
The  proximity cost between a sea location and a land location on the coast has the same base cost of **+40**, with **−28** if there is an adjacent river. A location's [harbor capacity](/Harbor_Capacity "Harbor Capacity") then modifies this cost (**−50%** at **1.00**, although it scales beyond **1.00**).
The  proximity cost between two sea locations depends on the [maritime presence](/Maritime_Presence "Maritime Presence") in the originating location, ranging from **+30** at 0% maritime presence ("through Open Sea"), to **+5** at 100% maritime presence ("through Maritime"). If the maritime presence is a value between these two bounds, the proximity costs is computed as a proportion of each, i.e (maritime presence \* proximity cost through maritime) + ((1 - maritime presence) \* proximity cost through open sea). Proximity cost through maritime is modified by the Land vs Naval societal value, giving up to **−1** to Maritime proximity cost with 100 Naval and other various advances; while the Overseas Trade Route advance gives **−10** to proximity cost through open sea.
Despite involving at least one land location, moving to or from a lake or moving across a strait acts like moving between two sea locations for  proximity cost. It is affected by the maritime presence of the relevant body of water; the lake in case of a lake crossing (which are always considered to have 100% maritime presence), or the sea zone the strait crosses, in case of a strait.
Finally, the proximity cost between two locations is effected by  **Proximity Speed**.
### Proximity speed
Once the base proximity cost between two locations has been established,  **Proximity Speed** modifiers are applied to reach the final proximity cost. The calculation is:
P
r
o
x
i
m
i
t
y
C
o
s
t
f
i
n
a
l
=
P
r
o
x
i
m
i
t
y
C
o
s
t
b
a
s
e
1
+
P
r
o
x
i
m
i
t
y
S
p
e
e
d
{\displaystyle Proximity\ Cost\_{final}={\frac {Proximity\ Cost\_{base}}{1+Proximity\ Speed}}}
As proximity speed is a divisor, this means that it has diminishing returns when stacked; while **+100%** proximity speed gives **−50%** (÷2) final proximity cost, **+200%** proximity speed only gives **−66.6%** (÷3).
Proximity speed *can* go negative (typically through terrain modifiers), which makes the final proximity cost more expensive instead of cheaper. Negative proximity speed, unlike positive proximity speed, scales **exponentially**, with **−50%** proximity speed doubling the final proximity cost (÷0.5, i.e. ×2), but **−75%** proximity speed *quadrupling* the final proximity cost (÷0.25, i.e. ×4).
Proximity speed modifiers come in two varieties: **Local Proximity Speed** and **Global Proximity Speed**. These two values are summed to find the proximity speed for traveling between two different locations.
Local proximity speed modifiers are specific to a location and are used when *leaving* and location and entering another and typically come in the form of terrain features or buildings. Terrain features, however, are **only** applied when traveling between land locations, and are not considered when moving from land to sea through a harbor. Furthermore, proximity speed from vegetation is ignored when traveling along a road or river.
The sources of local proximity speed are:
|  | Type | Source |
| **−12.5%** |  Topography |  Plateau |
| **−25%** |  Topography |  Wetlands |
| **−25%** |  Topography |  Hills |
| **−50%** |  Topography |  Mountains |
| **−5%** |  Vegetation |  Desert |
| **−5%** |  Vegetation |  Farmlands |
| **−12.5%** |  Vegetation |  Woods |
| **−25%** |  Vegetation |  Forest |
| **−50%** |  Vegetation |  Jungle |
| **−100%** |  Pop Type | 100% local  Tribesmen population (scales) |
| **+50%** |  Development | 100.00  Development (scales) |
| **+50%** |  Building |  Bulgarian Administration Center |
| **+50%** |  Building |  Hexamilion Wall |
| **+25%** |  Building |  Seljuk Mint |
| **+10%** |  Building |  Ostrog |
| **+10%** |  Building |  Bridge |
| **+10%** |  Building |  Pound Lock Canal |
Global proximity speed modifiers apply to the country as a whole and are applied to all proximity calculations.
The sources of local proximity speed are:
|  | Type | Source | Requirements |
| **+5%** |  Law | Maiestas Carolina  Legal Code Law | Bohemia |
| **+10%** |  Law | Joseon Code  Legal Code Law | Unlocked via event |
| **+20%** |  Law | Danske Lov  Legal Code Law | Danish culture |
| **+10%** |  Law | Leyes Nuevas  Legal Code Law | Colonial subject of Spain |
| **+20%** |  Law | kanun‐i Osmani  Legal Code Law | Ottomans |
| **+5%** |  Law | Political Principle  Principle of Administration Law | Republic Government |
| **+5%** |  Law | Yassa Decree  Tribal Legal Basis Law | Steppe Horde |
| **+10%** |  Law | Brehon Law  Tribal Legal Basis Law | Irish tribe |
| **+20%** |  Law | Federal Tribe  Tribal Organization Law | Tribal Government |
| **+5%** |  Law | Unitary Administration  Administrative System Law |  Age of Absolutism |
| **+10%** |  Law | Merindad Division  Administrative System Law | Aragonese, Basque, or Castilian culture |
| **+10%** |  Law | Calpixque System  Administrative System Law | Nahua culture |
| **+10%** |  Law | Adelantamiento System  Administrative System Law | Castilian culture |
| **+5%** |  Law | Namestnik Office  Bureaucracy Law | Russian culture group |
| **+10%** |  Law | Agrarian Constitution  Foreign Cultural Law | Teutonic Order |
| **+10%** |  Law | Centralized  Civil Registration Law | Middle Kingdom IO |
| **+10%** |  Law | Zǒngdū  Provincial Governorship Law | Middle Kingdom IO |
| **+10%** |  Law | Basic Legal Framework  Bureaucratic Law | Jurchen Confederation IO |
| **+10%** |  Law | Sinicized Legal Framework  Bureaucratic Law | Jurchen Confederation IO |
| **+5%** |  Law | Itinerant Court  Royal Court Customs Law (land only) | Monarchy |
| **+10%** |  Law | Eyalet Division  Administrative System (land only) |  |
| **+10%** |  Law | Reliance on Local Tribes  Amazigh Familial Connections (land only) | Capital in Maghreb Region |
| **+10%** |  Government Reform |  Tsardom |  Age of Renaissance, Monarchy government, Russian culture group |
| **+10%** |  Government Reform | Louis Legal Code | France |
| **+10%** |  Government Reform | Voivode |  Age of Discovery,  Voivode Advance, Russian culture group |
| **+5%** |  Government Reform | Collegium | Muscovy or Russia |
| **+20%** |  Government Reform | Local Audiences | Ethiopia |
| **+20%** |  Government Reform | Sudebnik (land only) |  Age of Discovery, Russian culture group |
| **+10%** |  Advance | Measuring the World Advance |  Age of Absolutism |
| **+10%** |  Advance | Local Infrastructure |  Age of Renaissance (admin focus) |
| **+10%** |  Advance | Centralized Government |  Age of Absolutism (admin focus) |
| **+10%** |  Advance | Stronger United |  Age of Reformation, Aragon |
| **+10%** |  Advance | A Permanent Capital |  Age of Discovery, Ethiopia |
| **+20%** |  Advance | Indian Administration |  Age of Absolutism, Hindustan |
| **+10%** |  Advance | Restore the Yäm |  Age of Renaissance, Ilkhanate |
| **+10%** |  Advance | Daedongbeop |  Age of Absolutism, Korea |
| **+10%** |  Advance | Improved Yam System |  Age of Absolutism, Mongolia |
| **+5%** |  Advance | Chartered Councils |  Age of Discovery, Navarra |
| **+10%** |  Advance | Expand the Kwarteers |  Age of Discovery, Guelders |
| **+10%** |  Advance | Lǐ Jiǎ System |  Age of Renaissance, China |
| **+10%** |  Advance | Georgian Principalities |  Age of Absolutism, Georgia |
| **+10%** |  Advance | The Lifeblood of Khmer |  Age of Discovery, Khmer |
| **+10%** |  Advance | Barīd |  Age of Traditions, Mamluks |
| **+10%** |  Advance | Maghrebi Administration |  Age of Revolutions, Morocco |
| **+10%** |  Advance | Kasztelanowie |  Age of Traditions, Poland |
| **+10%** |  Advance | Provincial Governors |  Age of Absolutism, Rome |
| **+10%** |  Advance | Kungliga Postverket |  Age of Reformation, Sweden |
| **+10%** |  Advance | Autonomous Pashas |  Age of Discovery, Ottomans |
| **+10%** |  Advance | City of Victory |  Age of Traditions, Vijayanagar |
| **+10%** |  Advance | Provincial Administrators |  Age of Reformation, Shona culture |
| **+10%** |  Advance | Imperial Road Network |  Age of Discovery, Germany |
| **+10%** |  Advance | Yams of the Great Khan |  Age of Traditions, Steppe Horde government |
| **+10%** |  Advance | Canoes |  Age of Traditions, Capital in US or Canada |
| **+10%** |  Advance | Nomadic Tendencies |  Age of Traditions, Original Capital in West, East, Central or South Africa Regions |
| **+10%** |  Advance | Remote Patriarchates |  Age of Absolutism, Miaphysite religion |
| **+10%** |  Advance | Network of Cities (land only) |  Age of Traditions, Aztecs |
| **+10%** |  Advance | Bakongo Confederation (land only) |  Age of Traditions, Kongo |
| **+15%** |  Advance | A Unified House (land only) |  Age of Traditions, Savoy |
| **+10%** |  Advance | Marmorina (land only) |  Age of Renaissance, Verona |
| **+10%** |  Estate Privilege |  Cima Fiefs Noble Privilege | Kanem Empire |
| **+10%** |  Estate Privilege |  Control of the Borderlands Noble Privilege (land only) | Theocracy |
| **+20%** |  Societal Value |  Centralization (scales) |  |
| **+20%** |  Societal Value |  Land (scales) (land only) |  |
| **+10%** |  Building |  Supreme Court |  Supreme Court ( Age of Absolutism) |
| **+10%** |  Religious Aspect |  Organized Through Bishops | Anglican, Calvinist, Hussite, Lollard, Lutheran, Waldensian |
| **+10%** |  Ruler Trait |  Lawgiver | >66 Administrative Ability |
| **+10%** |  Ruler Ability | 100 ruler  Administrative Ability (scales) |  |
| **+2.5%** |  Cabinet Action |  Kazenny Prikaz (base; scales with cabinet efficiency) |  |
### Proximity sources
Beside the country capital, various [buildings](/Building "Building") can act as  local proximity sources which can project control further away from the capital and are used instead of the capital, if they result in a higher proximity. These buildings are:
|  | Building |
| **80** | Local Governor |
| **80** | Naval Governor |
| **50** | King's Manor |
| **30** | Viceroyalty |
| **25** | Lieutenancy |
| **15** | Bulgarian Administration Center |
#### Governors
Governors are the most typical sources of local proximity, and come in two types: the Local Governor and the Naval Governor. There are a few requirements for building either governor.
##### Local Governor
The **Local Governor** can only be built if:
* The country has a higher **Number of Local Governors** value than Local Governor buildings currently exist in the country.
* The target location is a ** City**.
* The target location has a road connection to the Capital.
The number of Local Governors can be increased through the following modifiers:
|  | Requirement |
| **+1** | Base |
| **+1** |  Empire Country Rank |
| **+1** |  Local Governor ( Age of Discovery) |
| **+1** |  Absolutist Ambitions ( Age of Absolutism) |
##### Naval Governor
The **Naval Governor** can only be built if:
* The country has a higher **Number of Naval Governors** value than Naval Governor buildings currently exist in the country.
* The target location is a ** City**.
* The target location is a **Port**.
* The target location does *not* have a land connection to the Capital. (Subject locations do count, but don't for local governor, so you can't build either if the only land connection is going through a subject)
* The target location is *not* overseas from the owner.
The number of Naval Governors can be increased through the following modifiers:
|  | Requirement |
| **+1** |  Harbor Administration Government Reform |
| **+1** |  Naval Infrastructure Act Government Reform |
## References
[Return to top](#top)
Mechanics
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |
