<!-- source: https://eu5.paradoxwikis.com/Resource_gathering_operation revid: 34742 fetched: 2026-09-09 -->
# Resource gathering operation

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") Pre-release.

**Resource gathering operations**, commonly abbreviated as **RGOs**, represent industry of extracting the [raw goods](/Goods#Raw_goods "Goods") of a [location](/Location "Location") by one of five methods: *mines*, *farms*, *gathering operations*, *forestry*, or *hunting grounds*.

## RGO size

Each level of an RGO employs **1000** [![Pop laborers.png](/thumb.php?f=Pop_laborers.png&width=24)](/Laborers "Laborers") laborers, [![Pop slaves.png](/thumb.php?f=Pop_slaves.png&width=24)](/Slaves "Slaves") slaves, or a mix of the two. Each level of an RGO also increases the maximum laborers possible in a location by 1000.

Constructing a new RGO level costs a base of 50 gold and 0.1 of either [![Lumber](/thumb.php?f=Goods_lumber.png&width=24)](/Goods#Lumber "Lumber") lumber or [![Tools](/thumb.php?f=Goods_tools.png&width=24)](/Goods#Tools "Tools") tools and takes a base time of 180 days.

| Method | Gold cost | Resource cost |
| --- | --- | --- |
| Farms | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") 50 | [![Lumber](/thumb.php?f=Goods_lumber.png&width=24)](/Goods#Lumber "Lumber") 0.1 |
| Forestry | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") 50 | [![Tools](/thumb.php?f=Goods_tools.png&width=24)](/Goods#Tools "Tools") 0.1 |
| Gathering operations | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") 50 | [![Lumber](/thumb.php?f=Goods_lumber.png&width=24)](/Goods#Lumber "Lumber") 0.1 |
| Hunting grounds | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") 50 | [![Tools](/thumb.php?f=Goods_tools.png&width=24)](/Goods#Tools "Tools") 0.1 |
| Mines | [![Ducats](/thumb.php?f=Resource_gold.png&width=24)](/Economy#Gold "Ducats") 50 | [![Lumber](/thumb.php?f=Goods_lumber.png&width=24)](/Goods#Lumber "Lumber") 0.1 |

The time is modified by the following:

| Source | Effect |
| --- | --- |
| Mountains topography | **+100%** |
| Hills topography | **+25%** |
| Plateau topography | **+25%** |
| Wetlands topography | **+25%** |
| Desert vegetation | **+50%** |
| Jungle vegetation | **+50%** |
| Forest vegetation | **+33%** |

Each location starts with a maximum RGO level of **2**, which is increased by the following:

| Source | Effect |
| --- | --- |
| Scaled 1K population | **+0.25** |
| Scaled development | **+0.1** |
|  | |
| Rural location | **+100%** |
| Farmland vegetation | **+10%** |
| Scaled land societal value | **+0.05%** |
| Scaled local laborer literacy | **+0.1%** |

Each level of an RGO outputs **1** of its good, scaled by employment and modified by the following:

| Source | Effect |
| --- | --- |
| Raised levies | **−20%** |
| Scaled devastation | **−0.5%** |
| Scaled serfdom societal value | **+0.1%** |
| Scaled traditional economy societal value | **+0.2%** |

In addition to the various modifiers above, RGO values are modified by many [advances](/Advances "Advances"), privileges, [laws](/Laws "Laws"), and temporary modifiers

### Max RGO Size Calculation

(
0.025
p
o
p
u
l
a
t
i
o
n
+
100
d
e
v
+
2000
)
×
(
1
+
∑

m
a
x
R
g
o
S
i
z
e
M
o
d
i
f
i
e
r
s
)
1000
{\displaystyle {\frac {(0.025population+100dev+2000)\times (1+\sum {maxRgoSizeModifiers})}{1000}}}
![{\displaystyle {\frac {(0.025population+100dev+2000)\times (1+\sum {maxRgoSizeModifiers})}{1000}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/1e7d0cc7d2a51cd726aed29f266a283ae120d5aa)

### RGO Profit per Level Calculation

R
G
O

p
r
o
f
i
t

p
e
r

l
e
v
e
l
=
(
R
G
O

o
u
t
p
u
t

p
e
r

l
e
v
e
l
)
×
(
m
a
r
k
e
t

p
r
i
c
e
)
×
(
m
a
r
k
e
t

a
c
c
e
s
s
)
×
(
c
o
n
t
r
o
l
)
{\displaystyle RGO\ profit\ per\ level=(RGO\ output\ per\ level)\times (market\ price)\times (market\ access)\times (control)}
![{\displaystyle RGO\ profit\ per\ level=(RGO\ output\ per\ level)\times (market\ price)\times (market\ access)\times (control)}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/8fb083125e6f20a1867e10e135f9cf774545bc31)

## List of unique RGO locations

| [![Location.png](/thumb.php?f=Location.png&width=24)](/Location "Location") Location | [![Region.png](/thumb.php?f=Region.png&width=24)](/Region "Region") Region | [![Goods.png](/thumb.php?f=Goods.png&width=24)](/Goods "Goods") Goods | Modifier |
| --- | --- | --- | --- |
| Ccantumarcani | Andes | [![Silver](/thumb.php?f=Goods_silver.png&width=24)](/Goods#Silver "Silver") Silver | ![Local Silver Output](/thumb.php?f=Silver_positive.png&width=30 "Local Silver Output") +250% Local Silver Output |
| Llacsapallanca | Andes | [![Mercury](/thumb.php?f=Goods_mercury.png&width=24)](/Goods#Mercury "Mercury") Mercury | ![Mercury Output](/thumb.php?f=Mercury_positive.png&width=30 "Mercury Output") +250% Mercury Output |
| Al-Mukhā | Arabia | [![Coffee](/thumb.php?f=Goods_coffee.png&width=24)](/Goods#Coffee "Coffee") Coffee | ![Local Coffee Output](/thumb.php?f=Coffee_positive.png&width=30 "Local Coffee Output") +50% Local Coffee Output |
| Ta'izz | Arabia | [![Coffee](/thumb.php?f=Goods_coffee.png&width=24)](/Goods#Coffee "Coffee") Coffee | ![Local Coffee Output](/thumb.php?f=Coffee_positive.png&width=30 "Local Coffee Output") +50% Local Coffee Output |
| Zain | Aridoamerica | [![Silver](/thumb.php?f=Goods_silver.png&width=24)](/Goods#Silver "Silver") Silver | ![Local Silver Output](/thumb.php?f=Silver_positive.png&width=30 "Local Silver Output") +150% Local Silver Output |
| Srebrenica | Balkans | [![Silver](/thumb.php?f=Goods_silver.png&width=24)](/Goods#Silver "Silver") Silver | ![Local Silver Output](/thumb.php?f=Silver_positive.png&width=30 "Local Silver Output") +30% Local Silver Output |
| Tolmin | Balkans | [![Mercury](/thumb.php?f=Goods_mercury.png&width=24)](/Goods#Mercury "Mercury") Mercury | ![Mercury Output](/thumb.php?f=Mercury_positive.png&width=30 "Mercury Output") +200% Mercury Output |
| Balga | Baltic | [![Amber](/thumb.php?f=Goods_amber.png&width=24)](/Goods#Amber "Amber") Amber | ![Local Amber Output](/thumb.php?f=Amber_positive.png&width=30 "Local Amber Output") +50% Local Amber Output |
| Elbląg | Baltic | [![Amber](/thumb.php?f=Goods_amber.png&width=24)](/Goods#Amber "Amber") Amber | ![Local Amber Output](/thumb.php?f=Amber_positive.png&width=30 "Local Amber Output") +50% Local Amber Output |
| Königsberg | Baltic | [![Amber](/thumb.php?f=Goods_amber.png&width=24)](/Goods#Amber "Amber") Amber | ![Local Amber Output](/thumb.php?f=Amber_positive.png&width=30 "Local Amber Output") +50% Local Amber Output |
| Wipetikil | Canada | [![Fish](/thumb.php?f=Goods_fish.png&width=24)](/Goods#Fish "Fish") Fish | ![Local Fish Output](/thumb.php?f=Fish_positive.png&width=30 "Local Fish Output") +200% Local Fish Output |
| Ciguayo | Caribbean | [![Amber](/thumb.php?f=Goods_amber.png&width=24)](/Goods#Amber "Amber") Amber | ![Local Amber Output](/thumb.php?f=Amber_positive.png&width=30 "Local Amber Output") +50% Local Amber Output |
| Kremnica | Carpathia | [![Gold](/thumb.php?f=Goods_gold.png&width=24)](/Goods#Gold "Gold") Gold | ![Local Gold Output](/thumb.php?f=Goods_gold_positive.png&width=30 "Local Gold Output") +30% Local Gold Output |
| Turda | Carpathia | [![Salt](/thumb.php?f=Goods_salt.png&width=24)](/Goods#Salt "Salt") Salt | ![Local Salt Output](/thumb.php?f=Salt_positive.png&width=30 "Local Salt Output") +50% Local Salt Output |
| Kondapalli | Deccan | [![Gems](/thumb.php?f=Goods_gems.png&width=24)](/Goods#Gems "Gems") Gems | ![Local Gems Output](/thumb.php?f=Gems_positive.png&width=30 "Local Gems Output") +200% Local Gems Output |
| Al-Mina | Egypt | [![Rice](/thumb.php?f=Goods_rice.png&width=24)](/Goods#Rice "Rice") Rice | ![Local Rice Output](/thumb.php?f=Rice_positive.png&width=30 "Local Rice Output") +30% Local Rice Output |
| Atfih | Egypt | [![Fiber Crops](/thumb.php?f=Goods_fiber_crops.png&width=24)](/Goods#Fiber_Crops "Fiber Crops") Fiber crops | ![Local Fiber Crops Output](/thumb.php?f=Fiber_crops_positive.png&width=30 "Local Fiber Crops Output") +30% Local Fiber Crops Output |
| Bilbeis | Egypt | [![Cotton](/thumb.php?f=Goods_cotton.png&width=24)](/Goods#Cotton "Cotton") Cotton | ![Local Cotton Output](/thumb.php?f=Cotton_positive.png&width=30 "Local Cotton Output") +30% Local Cotton Output |
| Cairo | Egypt | [![Wheat](/thumb.php?f=Goods_wheat.png&width=24)](/Goods#Wheat "Wheat") Wheat | ![Local Wheat Output](/thumb.php?f=Wheat_positive.png&width=30 "Local Wheat Output") +30% Local Wheat Output |
| Dakahla | Egypt | [![Rice](/thumb.php?f=Goods_rice.png&width=24)](/Goods#Rice "Rice") Rice | ![Local Rice Output](/thumb.php?f=Rice_positive.png&width=30 "Local Rice Output") +30% Local Rice Output |
| Damanhur | Egypt | [![Wheat](/thumb.php?f=Goods_wheat.png&width=24)](/Goods#Wheat "Wheat") Wheat | ![Local Wheat Output](/thumb.php?f=Wheat_positive.png&width=30 "Local Wheat Output") +30% Local Wheat Output |
| Faqus | Egypt | [![Fiber Crops](/thumb.php?f=Goods_fiber_crops.png&width=24)](/Goods#Fiber_Crops "Fiber Crops") Fiber crops | ![Local Fiber Crops Output](/thumb.php?f=Fiber_crops_positive.png&width=30 "Local Fiber Crops Output") +30% Local Fiber Crops Output |
| Fuwa | Egypt | [![Sugar](/thumb.php?f=Goods_sugar.png&width=24)](/Goods#Sugar "Sugar") Sugar | ![Local Sugar Output](/thumb.php?f=Sugar_positive.png&width=30 "Local Sugar Output") +30% Local Sugar Output |
| Giza | Egypt | [![Sugar](/thumb.php?f=Goods_sugar.png&width=24)](/Goods#Sugar "Sugar") Sugar | ![Local Sugar Output](/thumb.php?f=Sugar_positive.png&width=30 "Local Sugar Output") +30% Local Sugar Output |
| Kafr Saqr | Egypt | [![Legumes](/thumb.php?f=Goods_legumes.png&width=24)](/Goods#Legumes "Legumes") Legumes | ![Local Legumes Output](/thumb.php?f=Legume_positive.png&width=30 "Local Legumes Output") +30% Local Legumes Output |
| Kharibta | Egypt | [![Fruit](/thumb.php?f=Goods_fruit.png&width=24)](/Goods#Fruit "Fruit") Fruit | ![Local Fruit Output](/thumb.php?f=Fruit_positive.png&width=30 "Local Fruit Output") +30% Local Fruit Output |
| Mahalla | Egypt | [![Cotton](/thumb.php?f=Goods_cotton.png&width=24)](/Goods#Cotton "Cotton") Cotton | ![Local Cotton Output](/thumb.php?f=Cotton_positive.png&width=30 "Local Cotton Output") +30% Local Cotton Output |
| Mansoura | Egypt | [![Sugar](/thumb.php?f=Goods_sugar.png&width=24)](/Goods#Sugar "Sugar") Sugar | ![Local Sugar Output](/thumb.php?f=Sugar_positive.png&width=30 "Local Sugar Output") +30% Local Sugar Output |
| Menouf | Egypt | [![Rice](/thumb.php?f=Goods_rice.png&width=24)](/Goods#Rice "Rice") Rice | ![Local Rice Output](/thumb.php?f=Rice_positive.png&width=30 "Local Rice Output") +30% Local Rice Output |
| Samanoud | Egypt | [![Wheat](/thumb.php?f=Goods_wheat.png&width=24)](/Goods#Wheat "Wheat") Wheat | ![Local Wheat Output](/thumb.php?f=Wheat_positive.png&width=30 "Local Wheat Output") +30% Local Wheat Output |
| Tarrana | Egypt | [![Fruit](/thumb.php?f=Goods_fruit.png&width=24)](/Goods#Fruit "Fruit") Fruit | ![Local Fruit Output](/thumb.php?f=Fruit_positive.png&width=30 "Local Fruit Output") +30% Local Fruit Output |
| Ushmum-Tannah | Egypt | [![Fruit](/thumb.php?f=Goods_fruit.png&width=24)](/Goods#Fruit "Fruit") Fruit | ![Local Fruit Output](/thumb.php?f=Fruit_positive.png&width=30 "Local Fruit Output") +30% Local Fruit Output |
| Kouroussa | Guinea | [![Gold](/thumb.php?f=Goods_gold.png&width=24)](/Goods#Gold "Gold") Gold | ![Local Gold Output](/thumb.php?f=Goods_gold_positive.png&width=30 "Local Gold Output") +30% Local Gold Output |
| Nounkonkan | Guinea | [![Gold](/thumb.php?f=Goods_gold.png&width=24)](/Goods#Gold "Gold") Gold | ![Local Gold Output](/thumb.php?f=Goods_gold_positive.png&width=30 "Local Gold Output") +30% Local Gold Output |
| Almadén | Iberia | [![Mercury](/thumb.php?f=Goods_mercury.png&width=24)](/Goods#Mercury "Mercury") Mercury | ![Mercury Output](/thumb.php?f=Mercury_positive.png&width=30 "Mercury Output") +300% Mercury Output |
| Amassing | Indonesia | [![Cloves](/thumb.php?f=Goods_cloves.png&width=24)](/Goods#Cloves "Cloves") Cloves | ![Cloves Output](/thumb.php?f=Cloves_positive.png&width=30 "Cloves Output") +500% Cloves Output |
| Ternate | Indonesia | [![Cloves](/thumb.php?f=Goods_cloves.png&width=24)](/Goods#Cloves "Cloves") Cloves | ![Cloves Output](/thumb.php?f=Cloves_positive.png&width=30 "Cloves Output") +500% Cloves Output |
| Tidore | Indonesia | [![Cloves](/thumb.php?f=Goods_cloves.png&width=24)](/Goods#Cloves "Cloves") Cloves | ![Cloves Output](/thumb.php?f=Cloves_positive.png&width=30 "Cloves Output") +500% Cloves Output |
| Mazara del Vallo | Italy | [![Saltpeter](/thumb.php?f=Goods_saltpeter.png&width=24)](/Goods#Saltpeter "Saltpeter") Saltpeter | ![Local Saltpeter Output](/thumb.php?f=Saltpeter_positive.png&width=30 "Local Saltpeter Output") +50% Local Saltpeter Output |
| Piazza | Italy | [![Saltpeter](/thumb.php?f=Goods_saltpeter.png&width=24)](/Goods#Saltpeter "Saltpeter") Saltpeter | ![Local Saltpeter Output](/thumb.php?f=Saltpeter_positive.png&width=30 "Local Saltpeter Output") +50% Local Saltpeter Output |
| Bagrām | Khorasan | [![Silver](/thumb.php?f=Goods_silver.png&width=24)](/Goods#Silver "Silver") Silver | ![Local Silver Output](/thumb.php?f=Silver_positive.png&width=30 "Local Silver Output") +30% Local Silver Output |
| Nīshāpūr | Khorasan | [![Gems](/thumb.php?f=Goods_gems.png&width=24)](/Goods#Gems "Gems") Gems | ![Local Gems Output](/thumb.php?f=Gems_positive.png&width=30 "Local Gems Output") +50% Local Gems Output |
| Mo o ti | Mesoamerica | [![Silver](/thumb.php?f=Goods_silver.png&width=24)](/Goods#Silver "Silver") Silver | ![Local Silver Output](/thumb.php?f=Silver_positive.png&width=30 "Local Silver Output") +100% Local Silver Output |
| Goslar | Northern Germany | [![Silver](/thumb.php?f=Goods_silver.png&width=24)](/Goods#Silver "Silver") Silver | ![Local Silver Output](/thumb.php?f=Silver_positive.png&width=30 "Local Silver Output") +30% Local Silver Output |
| Siguiri | Sahel | [![Gold](/thumb.php?f=Goods_gold.png&width=24)](/Goods#Gold "Gold") Gold | ![Local Gold Output](/thumb.php?f=Goods_gold_positive.png&width=30 "Local Gold Output") +30% Local Gold Output |
| Taghaza | Sahel | [![Salt](/thumb.php?f=Goods_salt.png&width=24)](/Goods#Salt "Salt") Salt | ![Local Salt Output](/thumb.php?f=Salt_positive.png&width=30 "Local Salt Output") +100% Local Salt Output |
| Taoudenni | Sahel | [![Salt](/thumb.php?f=Goods_salt.png&width=24)](/Goods#Salt "Salt") Salt | ![Local Salt Output](/thumb.php?f=Salt_positive.png&width=30 "Local Salt Output") +100% Local Salt Output |
| Falun | Scandinavia | [![Copper](/thumb.php?f=Goods_copper.png&width=24)](/Goods#Copper "Copper") Copper | ![Local Copper Output](/thumb.php?f=Copper_positive.png&width=30 "Local Copper Output") +400% Local Copper Output |
| Malmo | Scandinavia | [![Fish](/thumb.php?f=Goods_fish.png&width=24)](/Goods#Fish "Fish") Fish | ![Local Fish Output](/thumb.php?f=Fish_positive.png&width=30 "Local Fish Output") +500% Local Fish Output |
| Xincheng | South China | [![Mercury](/thumb.php?f=Goods_mercury.png&width=24)](/Goods#Mercury "Mercury") Mercury | ![Mercury Output](/thumb.php?f=Mercury_positive.png&width=30 "Mercury Output") +200% Mercury Output |
| Kutná Hora | Southern Germany | [![Silver](/thumb.php?f=Goods_silver.png&width=24)](/Goods#Silver "Silver") Silver | ![Local Silver Output](/thumb.php?f=Silver_positive.png&width=30 "Local Silver Output") +30% Local Silver Output |
| Sikar | Western India | [![Copper](/thumb.php?f=Goods_copper.png&width=24)](/Goods#Copper "Copper") Copper | ![Local Copper Output](/thumb.php?f=Copper_positive.png&width=30 "Local Copper Output") +100% Local Copper Output |

## List of RGO goods

*See also: [Goods#Raw\_goods](/Goods#Raw_goods "Goods")*

## References

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
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |