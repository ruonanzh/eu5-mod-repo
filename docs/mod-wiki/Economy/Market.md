<!-- source: https://eu5.paradoxwikis.com/Market revid: 35631 fetched: 2026-09-09 -->
# Market

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") pre-release.

[![](/thumb.php?f=UI_market.png&width=330)](/File%3AUI_market.png)

Markets

A Market is where [Goods](/Goods "Goods") are bought and sold. It is named after and based in a Market Center, but extends into other locations as well. All locations within a market will exclusively buy from and sell to that market. The market price of all goods on it depends on supply and demand but can deviate based on Price Stability, which is determined by the current age. Hovering over a market will show which goods are in surplus and which goods are needed the most as well as which countries trade on the market the most.

Every location will decide which market to use depending on each market's [![Market attraction.png](/thumb.php?f=Create_market_cost_modifier.png&width=24)](/Market_Attraction "Market Attraction") Market Attraction and [![Market protection.png](/thumb.php?f=Market_protection.png&width=24)](/Market_Protection "Market Protection") Market Protection, and the location Market Access to each one. [![Market attraction.png](/thumb.php?f=Create_market_cost_modifier.png&width=24)](/Market_Attraction "Market Attraction") Market Attraction scales with the [![Prestige.png](/thumb.php?f=Prestige.png&width=24)](/Prestige "Prestige") Prestige of the country owning the Market Center, [![Development.png](/thumb.php?f=Development.png&width=24)](/Development "Development") Development in the Market Center, staffed buildings in the Market Center, and the market's Trade Income against the location's Tax Base.

Every country has a [![Trade capacity.png](/thumb.php?f=Trade_capacity.png&width=24)](/Trade_Capacity "Trade Capacity") Trade Capacity within each market, which can be spent to either import or export goods to and from that market. Profits from trade are divided among estates, including the Crown, according to their power. Selecting a market will display all import routes with a **blue** line and all export routes with an **orange** line. The Trading tab will list all current trades as well as suggest the most profitable trades that can be made.

A country can choose to create a new market at any time, which takes 3 months. An owned location will have to be selected as the new Market Center and this will cost an amount of [![Resource gold.png](/thumb.php?f=Resource_gold.png&width=24)](/Gold "Gold") Gold that scales with the location's current [![Market attraction.png](/thumb.php?f=Create_market_cost_modifier.png&width=24)](/Market_Attraction "Market Attraction") Market Attraction. Once the new market is created, every location will recalculate its market and decide whether to join the new market or stay in their existing one.

Every country has a [![Trade advantage.png](/thumb.php?f=Merchant_power_from_maritime.png&width=24)](/Trade_Advantage "Trade Advantage") Trade Advantage value, which is used to determine the order in which countries fulfill their exports within a market. If there are insufficient goods in a market, they will get distributed by the Trade Advantage of every country in the market.

## Market center

A location that is a market center receives the following bonuses:

* ![Supported Building Levels](/thumb.php?f=Free_building_levels.png&width=24 "Supported Building Levels") +5 Supported Building Levels
* ![Institution Growth](/thumb.php?f=Institution_growth.png&width=24 "Institution Growth") +25% Institution Growth
* ![Trade Capacity](/thumb.php?f=Global_merchant_capacity_modifier.png&width=24 "Trade Capacity") +2 Trade Capacity
* ![Trade Advantage](/thumb.php?f=Merchant_power_from_maritime.png&width=24 "Trade Advantage") +20 Trade Advantage
* ![Migration Attraction](/thumb.php?f=Migration_attraction.png&width=24 "Migration Attraction") +0.025 Migration Attraction
* ![Maximum Stockpile Capacity](/thumb.php?f=Maximum_stockpile_capacity.png&width=24 "Maximum Stockpile Capacity") +25 Maximum Stockpile Capacity

The owner of a market center unlocks the following abilities:

* Can embargo another country that uses the same market. An embargoed country cannot establish trade routes within the market or use owned locations when deciding where to route trade. This costs 25 [![Opinion.png](/thumb.php?f=Opinion.png&width=24)](/Opinion "Opinion") Opinion with the embargoed country.
* Can move the market center to another owned location. This costs 800 [![Resource gold.png](/thumb.php?f=Resource_gold.png&width=24)](/Gold "Gold") Gold.
* Can destroy the market. This costs 50 [![Stability.png](/thumb.php?f=Stability.png&width=24)](/Stability "Stability") Stability and 25 [![Prestige.png](/thumb.php?f=Prestige.png&width=24)](/Prestige "Prestige") Prestige.

Each owned market center gives the following country bonuses:

* ![Burgher Estate Satisfaction Equilibrium](/thumb.php?f=Burghers_estate_target_satisfaction.png&width=24 "Burgher Estate Satisfaction Equilibrium") +1% Burgher Estate Satisfaction Equilibrium
* ![Destroy Market Cost](/thumb.php?f=Create_market_cost_modifier.png&width=24 "Destroy Market Cost") −10% Destroy Market Cost
* ![Monthly Progress to Mercantilism](/thumb.php?f=Monthly_towards_mercantilism.png&width=24 "Monthly Progress to Mercantilism") +0.05 Monthly Progress to Mercantilism

## Creating a market

If you notice that your market access is very low, or that you are split in between several markets, you may want to create your own market [![Market.png](/thumb.php?f=Market.png&width=24)](/Market "Market") market. To create your own market, the following conditions must be met:

* The province can be owned.
* **AND**
  + (The province is in an urban location **OR** the province has less than 25% market attraction in its current market.)
  + (The new market location is owned by you **OR** the new market location has buildings owned by you **OR** the new market center is in a province that is your subject.)
  + You do not have any treaties preventing you from creating a new market, such as the [Market Access Preference Treaty](/Diplomacy "Diplomacy") Holland starts with.

## Market access

Market access of a location determine the profits of its [RGO](/RGO "RGO") and the throughput of its buildings.

# Trade

Trades can be created in markets to export or import [goods](/Goods "Goods") to or from another market. A trade will use the owner's [trade capacity](/Market#Trade_Capacity "Market") based on the amount of goods to trade multiplied by the good's transport cost and a distance modifier. This means that trades over a longer distance will move fewer goods per unit of trade capacity.

The profit for a trade is computed by

(
I
m
p
o
r
t
P
r
i
c
e
)
(
G
o
o
d
s
Q
u
a
n
t
i
t
y
)
(
T
r
a
d
e
E
f
f
i
c
i
e
n
c
y
)
−
(
E
x
p
o
r
t
P
r
i
c
e
)
(
G
o
o
d
s
Q
u
a
n
t
i
t
y
)
(
E
x
p
o
r
t
C
o
s
t
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
−
(
T
r
a
d
e
M
a
i
n
t
e
n
a
n
c
e
)
−
(
S
o
u
n
d
T
o
l
l
s
)
{\displaystyle (ImportPrice)(GoodsQuantity)(TradeEfficiency)-(ExportPrice)(GoodsQuantity)(ExportCostModifiers)-(TradeMaintenance)-(SoundTolls)}
![{\displaystyle (ImportPrice)(GoodsQuantity)(TradeEfficiency)-(ExportPrice)(GoodsQuantity)(ExportCostModifiers)-(TradeMaintenance)-(SoundTolls)}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/1eb59145069001a49ad0f97b5af1d2860468909c) where:

* (Import Price) is the price of the good in the importing market
* (Export Price) is the price of the good in the exporting market
* (Goods Quantity) is the total amount of goods moved
* ([Trade Efficiency](#Trade_Efficiency)) is the trade efficiency modifier of the trade's owner
* (Export Cost Modifiers) currently represents the Export Cost from Market for Foreign Traders modifier, which will increase the cost of purchasing goods in foreign markets owned by countries with the modifier. The most notable source is from [Mercantilism (societal value)](/Mercantilism_%28societal_value%29 "Mercantilism (societal value)").
* ([Trade Maintenance](#Trade_Route_Maintenance)) is the cost of transporting goods
* ([Sound Tolls](/Sound_Toll "Sound Toll")) are a tax on trade routes passing through certain narrow straits

### Prices

Prices trend up or down towards a target price depending on the difference between effective supply and Demand as well as the price stability which depends on the current age.

Target Price = Base Price \* min( (1 + Supply-Demand Ratio \* Price Stability) / ( Supply-Demand Ratio + Price Stability), Max Price)

Effective Demand = Demand + Burgher Exports \* 0.25 + Manual Exports \* 0.75

Effective Supply = Domestic RGO Production + Common Goods + Burghers Import \* 0.25 + Manual Import \* 0.75

Supply-Demand Ratio = (1 + Effective Supply) / (1 + Effective Demand)

So if you want to increase effective supply it is better to import yourself instead of letting the burghers do that so if the burghers import something and you want to drop the price of it you can manually import it instead and thus making it unprofitable for them but the same amount of good are in your market but due to manual imports being weighted more in the effective supply you are dropping the price by doing so. The same logic goes if you want to decrease demand you want to replace your exports with burgher exports, if they are profitable enough for the burghers to import and if you want to increase demand and drive up the price you want to replace burgher exports with your own.

### Trade Capacity

Trade capacity represents the capacity of your merchants to move goods between markets. It primarily is provided by a country's trade buildings in a market, and is used by their trades based in that market.

### Trade Route Maintenance

The maintenance cost for each trade route is **-0.25** per [trade capacity](/Market#Trade_Capacity "Market") used in the trade.

The following are a non-exhaustive list of common modifiers which can affect trade maintenance:

* [Mercantilism (societal value)](/Mercantilism_%28societal_value%29 "Mercantilism (societal value)"): scaling up to (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Age of reformation.png](/thumb.php?f=Age_4_reformation.png&width=24)](/Age_of_Reformation "Age of Reformation") Age of Reformation: (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Advancement background.png](/thumb.php?f=Advancement_background.png&width=24)](/File%3AAdvancement_background.png)[![Global Trade](/thumb.php?f=Advance_global_trade_advance.png&width=24)](/Advances#Global_Trade "Global Trade") Global Trade ([![Age of reformation.png](/thumb.php?f=Age_4_reformation.png&width=24)](/Age_of_Reformation "Age of Reformation") Age of Reformation advance): (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Advancement background.png](/thumb.php?f=Advancement_background.png&width=24)](/File%3AAdvancement_background.png)[![Development of Maritime Law](/thumb.php?f=Advance_development_of_maritime_law.png&width=24)](/Advances#Development_of_Maritime_Law "Development of Maritime Law") Development of Maritime Law ([![Age of reformation.png](/thumb.php?f=Age_4_reformation.png&width=24)](/Age_of_Reformation "Age of Reformation") Age of Reformation advance): (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Advancement background.png](/thumb.php?f=Advancement_background.png&width=24)](/File%3AAdvancement_background.png)[![Fast Negotiations](/thumb.php?f=Advance_merchant_power_from_maritime_reformation_advance.png&width=24)](/Advances#Fast_Negotiations "Fast Negotiations") Fast Negotiations ([![Age of reformation.png](/thumb.php?f=Age_4_reformation.png&width=24)](/Age_of_Reformation "Age of Reformation") Age of Reformation advance, [![Ability dip.png](/thumb.php?f=Ability_dip.png&width=24)](/Ability_dip "Ability dip") Ability dip): (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Advancement background.png](/thumb.php?f=Advancement_background.png&width=24)](/File%3AAdvancement_background.png)[![Free Cities](/thumb.php?f=Advance_free_cities.png&width=24)](/Advances#Free_Cities "Free Cities") Free Cities ([![Age of reformation.png](/thumb.php?f=Age_4_reformation.png&width=24)](/Age_of_Reformation "Age of Reformation") Age of Reformation advance, [Republic](/Republic "Republic")): (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Government reform bank ledgers system.png](/thumb.php?f=Government_reform_bank_ledgers_system.png&width=24)](/File%3AGovernment_reform_bank_ledgers_system.png)[![Bank Ledgers System](/thumb.php?f=Frame_2_er.png&width=24)](/Government_reform#Bank_Ledgers_System "Bank Ledgers System") Bank Ledgers System ([![Age of renaissance.png](/thumb.php?f=Age_2_renaissance.png&width=24)](/Age_of_Renaissance "Age of Renaissance") Age of Renaissance government reform): (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Government reform merchant republic.png](/thumb.php?f=Government_reform_merchant_republic.png&width=24)](/File%3AGovernment_reform_merchant_republic.png)[![Merchant Republic](/thumb.php?f=Frame_2_er.png&width=24)](/Government_reform#Merchant_Republic "Merchant Republic") Merchant Republic ([Republic](/Republic "Republic")): (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type"))
* [![Estate burghers.png](/thumb.php?f=Estate_burghers.png&width=24)](/Burghers "Burghers") [Expand our Market](/Parliament#Expand_our_Market "Parliament") parliament issue: (Unrecognized modifier type "merchant\_maintenance\_cost" for [Module:Modifier type](/Module%3AModifier_type "Module:Modifier type")) while in debate

### Trade Efficiency

Trade efficiency modifies the sale cost of goods for trades, increasing profits.

# References

[Return to top](#top)

Mechanics

|  |  |
| --- | --- |
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |

|  |  |
| --- | --- |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • Market • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |

|  |  |
| --- | --- |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |

|  |  |
| --- | --- |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |