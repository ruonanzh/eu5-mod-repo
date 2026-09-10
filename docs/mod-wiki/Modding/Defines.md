<!-- source: https://eu5.paradoxwikis.com/Defines revid: 35665 fetched: 2026-09-09 -->
# Defines

This article has been verified for the current [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") (1.3) of the game.

**Defines** are variables used by the engine. They regulate basic game behaviors and settings that are not opened to scripting (estate thresholds, camera field-of-view, etc.).

Defines are static and global: they apply to the whole game and cannot be changed dynamically.

Base game values are configured in the folder /Europa Universalis V/game/loading\_screen/common/defines/, primarily in `00_defines.txt`.

Each of the lists on this represents a section of the defines; in the defines files, these sections are all prefixed with `N`, for example `NCountry`.

|  |
| --- |
| **Contents**0 |
| * [1Define modding](#Define_modding) * [2List of defines](#List_of_defines)   * In `00_defines.txt`   + [2.1AI](#AI)   + [2.3AlertAudio](#AlertAudio)   + [2.6Character](#Character)   + [2.10Colony](#Colony)   + [2.11Combat](#Combat)   + [2.13Country](#Country)   + [2.14Culture](#Culture)   + [2.15Diplomacy](#Diplomacy)   + [2.16Disease](#Disease)   + [2.17Dynasty](#Dynasty)   + [2.18Economy](#Economy)   + [2.19Estate](#Estate)   + [2.21Game](#Game)   + [2.28GUI](#GUI)   + [2.30ImperialCircle](#ImperialCircle)   + [2.31InternationalOrganization](#InternationalOrganization)   + [2.38Location](#Location)   + [2.47Market](#Market)   + [2.48Mercenary](#Mercenary)   + [2.51Pop](#Pop)   + [2.52Portrait](#Portrait)   + [2.53Religion](#Religion)   + [2.58Spreadable](#Spreadable)   + [2.60Text](#Text)   + [2.66Unit](#Unit)   + [2.69War](#War)   + [2.72WorkOfArt](#WorkOfArt)  * In `00_graphics.txt`   + [2.4BlockadeGraphics](#BlockadeGraphics)   + [2.5Border](#Border)   + [2.7Cities](#Cities)   + [2.9CityGraphics](#CityGraphics)   + [2.12CombatPrediction](#CombatPrediction)   + [2.22GameCityLocators](#GameCityLocators)   + [2.23GameIcons](#GameIcons)   + [2.24GameIllustrations](#GameIllustrations)   + [2.25GameLocators](#GameLocators)   + [2.26Graphics](#Graphics)   + [2.27GraphicsTest](#GraphicsTest)   + [2.29Gui](#Gui)   + [2.32JominiEars](#JominiEars)   + [2.33JominiGraphics](#JominiGraphics)   + [2.36JominiMapGraphics](#JominiMapGraphics)   + [2.37LateralView](#LateralView)   + [2.39LocationMapObjects](#LocationMapObjects)   + [2.40MapColors](#MapColors)   + [2.41MapGraphics](#MapGraphics)   + [2.43MapLines](#MapLines)   + [2.44MapMarker](#MapMarker)   + [2.45MapModeSelector](#MapModeSelector)   + [2.46MapName](#MapName)   + [2.49Messages](#Messages)   + [2.50Outliner](#Outliner)   + [2.56SeaCurrents](#SeaCurrents)   + [2.57SiegeEffect](#SiegeEffect)   + [2.59TerraIncognita](#TerraIncognita)   + [2.61TextSettings](#TextSettings)   + [2.63TradeGraphics](#TradeGraphics)   + [2.64TreeTweaks](#TreeTweaks)   + [2.65Trees](#Trees)   + [2.67UnitGraphics](#UnitGraphics)   + [2.68VisibleLocationsGfx](#VisibleLocationsGfx)   + [2.70Water](#Water)  * In `defines/jomini/`   + [2.2Adjacencies](#Adjacencies)   + [2.20FogOfWar](#FogOfWar)   + [2.34JominiIcons](#JominiIcons)   + [2.41MapEditor](#MapEditor)   + [2.54Rivers](#Rivers)   + [2.62Tooltip](#Tooltip)  * In multiple files   + [2.8CityAudio](#CityAudio)   + [2.55Roads](#Roads)   + [2.71Weather](#Weather)   * [3References](#References) |

## Define modding

*See also: [Mod compatibility](/Mod_compatibility "Mod compatibility")*

Defines can be modified individually or in batches without overwriting an entire defines file. This better preserves compatibility and makes it easier to keep up with changes in future patches.

To modify a define, create a new file in <mod>/loading\_screen/common/defines/ that loads after the base game files such as `01_mod_defines.txt`. In that file, add a block for each set of defines to be modified and include the modified defines in those blocks, for example

```
NCountry = {
	COUNTRIES_GETTING_SCORE = 12	# Base game 8; number of top countries that gain score
}

NDiplomacy = {
	CALL_FOR_PEACE_THRESHOLD_MONTHS = 120	# Base game 60
}
```

In the case of multiple mods modifying the same define, the mod with the last loaded filename determines the final value of the define.

## List of defines

Sections are ordered alphabetically, rather than by their position in the file. Many of these are defined in 00\_defines.txt with most graphic related defines in /graphic/00\_graphics.txt or the files in /jomini/

### AI

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| USE\_REGULARS\_IN\_WAR\_WEIGHT\_MULT | 10 |  |
| USE\_LEVIES\_IN\_WAR\_WEIGHT\_MULT | 5 |  |
| USE\_MERCENARIES\_IN\_WAR\_WEIGHT\_MULT | 1 |  |
| AI\_HEAVY\_DEBT\_THRESHOLD | 0.75 | if total debt is >% of max debt |
| FOG\_OF\_WAR\_FORGET\_CHANCE | 1 | Chance of AI forgetting a unit in FoW. |
| OFFER\_MINIMUM\_MONTHS | 18 | Minimum months until AI may resend a similar offer to a human country. |
| PEACE\_STALLED\_WAR\_THRESHOLD | 3 |  |
| PEACE\_KNAPSACK\_EXTRAS | 0 | Number of times knapsack algo is run by default with (different) pre-selected treaties |
| PEACE\_KNAPSACK\_EXTRAS\_MAX | 3 | absolute max number of tries it will do if it can't find anything that works |
| WAR\_ALLY\_DISTANCE\_BASE | 200 |  |
| WAR\_BALANCE\_MANPOWER\_IMPORTANCE | 0.5 |  |
| WAR\_BALANCE\_LEVIES\_IMPORTANCE | 1 |  |
| WAR\_BALANCE\_REGULARS\_IMPORTANCE | 3 |  |
| WAR\_BALANCE\_SAILORS\_IMPORTANCE | 1 |  |
| WAR\_BALANCE\_LEVY\_BOATS\_IMPORTANCE | 10 |  |
| WAR\_BALANCE\_TAXBASE\_IMPORTANCE | 0.05 |  |
| WAR\_WIN\_CHANCE\_SENSITIVITY | 8 |  |
| MARKET\_FLIPPING\_IMPORTANCE | 0.1 |  |
| LOCATION\_CITY\_RELIGION\_PERCENTAGE\_FACTOR | 2 |  |
| LOCATION\_RELIGION\_PERCENTAGE\_FACTOR | 15 | utility of having your entire country be your primary religion |
| AI\_CONVERT\_RELIGION\_REVOLT\_PREVENTION\_FACTOR | 100 | bonus score locations to pervent zealot revolts based on strength of the revolt |
| AI\_GLOBAL\_CONVERSION\_SPEED\_UTILITY | 5 |  |
| AI\_CROWN\_ESTATE\_CABINET\_MEMBER\_FACTOR | 1.5 | How much extra score AI gives to characters from crown estate when assigning cabinet members |
| AI\_ESTATE\_BLOCKED\_FROM\_CABINET\_UTILITY | -0.25 | Compounding negative utility for each estate blocked from cabinet |
| AI\_CULTURE\_CAPACITY\_UTILITY | 0.1 | Utility based on used culture capacity, gives 100% of the utility when 100% of the capacity is used |
| AI\_UTILITY\_PER\_CAPITA\_THRESHOLD | 0.25 | when a location has less than this amount of available peasants start favouring utility per capita |
| AI\_UTILITY\_PER\_CAPITA\_BASE\_EMPLOYMENT | 0.3 | employment number to normalize against, employing more is penalized and employing less is encouraged |
| AI\_CULTURE\_CONVERSION\_UTIL | 0.5 | score when converting pops in our cores |
| AI\_CULTURE\_CONVERSION\_CORE\_FACTOR | 5 | AI score for promoting primary culture to make a location into a core, normalized by tax base of location |
| AI\_CULTURE\_CONVERSION\_DOMINANT\_CULTURE\_FACTOR | 0.25 | AI score for promoting primary culture to make a location into dominant culture |
| AI\_GLOBAL\_ASSIMILATION\_SPEED\_UTIL | 0.25 | modifier score multiplied by inverse accepted culture ratio |
| AI\_GLOBAL\_ASSIMILATION\_SPEED\_MODIFIER\_UTIL | 0.25 | modifier score multiplied by inverse accepted culture ratio |
| AI\_INTEGRATION\_IMPORTANCE\_MULT | 0.075 | overall importance of integrating provinces |
| AI\_INTEGRATION\_ACCEPTED\_CULTURE\_MULT | 2 | bonus multiplier of importance for locations of accepted culture |
| AI\_INTEGRATION\_POPULATION\_SHARE\_MULT | 0.01 | importance factor of the population for integration |
| AI\_INTEGRATION\_TAXBASE\_SHARE\_MULT | 0.01 | importance factor of the taxbase for integration |
| UNBALANCED\_FAVORS\_ACCEPTANCE\_MULT | 200 |  |
| AFFORDABLE\_LOAN\_COST\_FRACTION | 0.2 |  |
| COLONY\_OWNED\_AREA\_UTILITY\_MODIFIER | -100 | negative if others owns.. |
| MONTHLY\_MIGRATION\_UTILITY\_MODIFIER | 10 |  |
| MORE\_COLONIES\_UTILITY\_MODIFIER | 0.75 |  |
| AI\_BASE\_COLONY\_UTILITY | 3 | AI base desire to create colonial charters |
| AI\_COLONIAL\_RANGE\_UTILITY | 2e-05 | how much non landlocked countries care about colonial range modifier |
| AI\_GREAT\_POWER\_COLONIAL\_RANGE\_UTILITY | 0.0002 | how much non landlocked great powers care about colonial range modifier |
| AI\_COLONIAL\_MIGRATION\_SPEED\_UTILITY | 0.05 | utility per colonial charter |
| AI\_COLONY\_COMPETING\_CHARTER\_UTILITY\_PENALTY | 0.25 | Utility penalty when creating a charter for each other ongoing charter |
| COLONY\_GOODS\_PRICE\_UTILITY\_MODIFIER | 0.1 | Utility based on the cost of the RGO multiplied by the population when creating new colonies |
| COLONY\_LOCATION\_POPULATION\_UTILITY\_MODIFIER | 0.02 | Utility based on the population when creating new colonies (if < thresold) |
| COLONY\_LOCATION\_POPULATION\_PENALTY\_MODIFIER | -0.01 | Utility based on the population when creating new colonies (if > thresold) |
| COLONY\_NEIGHBORING\_UTILITY\_BONUS | 10 | additive bonus to colonize neighboring land |
| COLONY\_NEIGHBORING\_CHARTER\_UTILITY\_BONUS | 5 | additive bonus to colonize neighboring charter |
| COLONY\_REGION\_COMPLETION\_UTILITY\_BONUS | 5 | multiplicative bonus from ratio of locations we own (or vassals) in the region which we colonize |
| COLONY\_POP\_THRESHOLD | 20 |  |
| COLONY\_DISEASE\_UTILITY\_PENALTY | 50 | Utility penalty for target province, disabled when above threshold migration (discourages colonizing disease-endemic regions) |
| AI\_MIGRATION\_THRESHOLD\_FOR\_DISEASED\_LOCATIONS | 0.05 | expected monthly migration required to be able to successfully colonize locations with disease e.g. malaria |
| AI\_MARKET\_LOW\_FOOD\_THRESHOLD | 0.5 | when market food stockpile reaches this level AI will improve food production if food balance is negative |
| AI\_MARKET\_CRITICAL\_FOOD\_THRESHOLD | 0.1 | when market food stockpile reaches this level AI will improve food production even if food balance is positive |
| AI\_PROVINCE\_FOOD\_STOCKPILE\_UTILITY | 0.1 | utility for province food stockpile modifier, upper limit based on total province food consumption change |
| AI\_RGO\_SIZE\_PRICE\_UTIL | 0.02 | utility for RGO size modifier based on price of the location RGO, multiplied further by the goods ai\_rgo\_size\_importance |
| AI\_TOWN\_RIGHTS\_MIN\_UTILITY | 0.1 | minimum net utility required for AI to grant a town right (prevents spamming marginal grants) |
| AI\_MAXIMUM\_EXPECT\_TOWN\_RATIO | 0.33 | when evaluating RGO vs town efficiency modifier we consider this town Ratio as "100% urbanized" |
| AI\_TOWN\_RATIO\_PRODUCTION\_EFFICIENCY\_UTIL | 2 | global building efficiency modifier based on ratio of locations that are towns |
| AI\_RGO\_PRODUCTION\_EFFICIENCY\_UTIL | 2 | global RGO efficiency modifier util from inverse ratio of locations that are towns |
| AI\_UPGRADE\_CITY\_POPULATION\_UTILITY | 8 | utility based on number of pops in location |
| AI\_UPGRADE\_CITY\_COASTAL\_POPULATION\_UTILITY | 2 | utility from pops on coastal location |
| AI\_UPGRADE\_CITY\_PROVINCE\_POPULATION\_UTILITY | 0.2 | utility based on total pops in province |
| ``` Next 3 defines is to tell AI to build more coastal cities when they don't have any sailors, only active when we don't have any ongoing city construction only active if province doesnt have any city/town already ``` | | |
| AI\_UPGRADE\_CITY\_LOW\_MONTHLY\_SAILORS\_THRESHOLD | 0.01 | less than 1% of total sailors gained per month |
| AI\_UPGRADE\_CITY\_LOW\_CURRENT\_SAILORS\_THRESHOLD | 0.2 | have less than 20% of maximum sailors |
| AI\_UPGRADE\_CITY\_LOW\_SAILORS\_UTILITY | 0.025 | how strong the incentive is to build more costal cities when both above requirements are met |
| AI\_ONGOING\_CITY\_UPGRADE\_MULT | 0.5 | multiplicative score factor for each ongoing city upgrade |
| AI\_UPGRADE\_CITY\_LOW\_MANPOWER\_UTILITY | 0.035 | AI desire to build more towns when limited on manpower |
| AI\_CITY\_UPGRADE\_GOVERNOR\_POTENTIAL\_FACTOR | 0.4 | partial credit for city upgrade unlocking a potential local\_governor hub site |
| AI\_MIN\_ALLOWED\_URBANIZE\_FOOD\_LOCATION\_RATIO | 0.2 | minimum ratio of food locations that is allowed to be cities based on market average market food yield |
| AI\_MAX\_ALLOWED\_URBANIZE\_FOOD\_LOCATION\_RATIO | 0.8 | maximum ratio of food locations that is allowed to be cities based on market average market food yield |
| AI\_AVERAGE\_MARKET\_FOOD\_FOR\_MAX\_FOOD\_URBANIZATION | 5 | AI\_MAX\_ALLOWED\_URBANIZE\_FOOD\_LOCATION is reached when average location in market has this base food output of their rgo |
| AI\_PROVINCE\_DEFINITION\_MAX\_URBANIZATION | 0.2 | max location ratio allowed to be urbanized per province def. Rounded up. |
| AI\_PREEMPTIVE\_SPECIALIZATION\_BONUS | 0.005 | AI score for granting a town right that synergize with province rgo if there is no such method in this market |
| AI\_SPECIALIZE\_TOWN\_CONTROL\_THRESHOLD | 0.5 | control needed for AI to hand out a pre-emptive specialization in the hopes of building an industry here |
| AI\_SPECIALIZE\_TOWN\_MARKET\_ACCESS\_THRESHOLD | 0.5 | market access needed for AI to hand out a pre-emptive specialization in the hopes of building an industry here |
| PROFITABLE\_EXPORT\_GOODS\_UTILITY\_FACTOR | 0.5 | How much AI factors in that a building is producing a profitable export good that has no surplus when building new buildings |
| PROFITABLE\_EXPORT\_GOODS\_REDUCE\_PRICE\_UTILITY\_FACTOR | 0.05 | Same as above but when we have surplus, this is AI working to lower price of their exports to make them more profitable |
| AI\_EXPORT\_GOODS\_SURPLUS\_GRADIENT\_CAP | 0.5 | Projected surplus at which the export utility factor bottoms out at PROFITABLE\_EXPORT\_GOODS\_REDUCE\_PRICE\_UTILITY\_FACTOR |
| AI\_RGO\_PRICE\_TREND\_WINDOW | 12 | Number of monthly price history entries to check for a falling price trend |
| AI\_RGO\_FALLING\_PRICE\_PENALTY\_THRESHOLD | 0.1 | Price must have dropped by more than this fraction over the trend window to trigger the dampener |
| AI\_RGO\_FALLING\_PRICE\_UTILITY\_FACTOR | 0.4 | RGO utility is multiplied by this when the goods price has been falling |
| CONSTRUCTION\_GOODS\_SHORTAGE\_UTILITY\_FACTOR | 0.66 | How much AI factors in that a building is producing a goods that is in shortage for construction |
| CONSTRUCTION\_GOODS\_SHORTAGE\_MAX\_UTILITY\_FACTOR | 2 | Maximum extra utility for building something that produces a construction good with shortage |
| CONSTRUCTION\_GOODS\_OVERPRICED\_UTILITY\_FACTOR | 3 | multiplied on price ratio above 50% of default |
| POP\_MISSING\_GOODS\_UTILITY\_FACTOR | 0.02 | Extra utility for building a resource that pop currently are missing for their demands |
| MISSING\_MILITARY\_GOODS\_UTILITY\_FACTOR | 0.015 | Extra utility for producing a resource needed to build the best type of regiment that is not in stockpile in capital market |
| FOOD\_NEGATIVE\_IN\_PROV\_UTILITY | 0.1 |  |
| AI\_ALLOWED\_FORT\_BUDGET | 0.1 | % of income allowed fort maintenance, normalized to full slider value |
| AI\_ALLOWED\_BUILDING\_MAINTENANCE | 0.25 | % of income allowed for building maintenance excluding forts, only used to close or reopen buildings during crisis |
| AI\_BUILDING\_MAINTENANCE\_LEEWAY | 1.2 | How much above the maintenance budget AI can be before they start closing buildings |
| AI\_STEAL\_MERCHANT\_CAPACITY\_PROFIT\_MARGIN | 1.25 | AI will remove merchant capacity from low profit and move it to high profit if its this much more profitable |
| AI\_STEAL\_MERCHANT\_CAPACITY\_RATIO | 0.1 | How much in % that AI can move their trade capacity from low to high profit per month |
| AI\_MINIMUM\_TRADE\_SIZE | 0.5 | AI will avoid to make trades smaller than this whenever possible |
| AI\_TRADE\_ORDER\_MAX\_MONTHLY\_CAPACITY\_INCREASE | 10 | Max merchant capacity a trade order can add to a route in a single month, preventing market flooding |
| ADJUST\_TRADE\_ROUTE\_CHANCE | 0.5 | Chance AI will act on any given trade opportunity (sorted by profitability) lower chance reduces likelihood of all AI jumping on the same profitable trade |
| TRADE\_MARKETS\_PER\_DAY | 1 | Max number of HandleTradesFromMarket calls per country per daily tick; remaining markets are deferred to the next day |
| AI\_IMPORT\_POP\_NEED\_SCORE\_BONUS | 5 | bonus score for AI to import goods that are in shortage for pop needs |
| AI\_IMPORT\_INSTITUTION\_SCORE\_BONUS | 2 | bonus score for AI to import from a market that has an institution that we dont |
| AI\_IMPORT\_INPUT\_GOODS\_SCORE\_BONUS | 2 | bonus score for AI to import goods that are missing as inputs for local buildings |
| AI\_WELFARE\_IMPORT\_PROFIT\_CUTOFF | -1 | AI will accept this much loss per merchant capacity if the import satisfies pop needs or building inputs |
| AI\_EXPORT\_POP\_SHORTAGE\_PENALTY | 5 | penalty score per unit for exporting goods that local pops are short on |
| AI\_COLONIAL\_EXPORT\_SCORE\_BONUS | 3 | bonus score per unit for exporting plantation goods (ai\_rgo\_size\_importance >= 5) from overseas markets |
| AI\_TRADE\_SURPLUS\_CUSHION\_PROFIT\_UTILITY\_FACTOR | 0.5 | at full surplus cushion, add this fraction of monetary trade profit as extra AI utility |
| AI\_TRADE\_SURPLUS\_CUSHION\_FULL\_COVERAGE | 10 | surplus/trade-size ratio needed for full surplus cushion |
| AI\_LONG\_TERM\_DISCOUNT\_FACTOR | 0.9988 | AI long term utility planing, used for evaluating long term modifiers such as estate privileges: 1 - (1 / 75\*12) 75 years lookahead |
| AI\_BUILDING\_OPTIMIZATION\_TIMEMULTI\_THRESHOLD | 250 | time multiplier needed for moving buildings around |
| AI\_DEVELOPMENT\_UTILITY | 0.1 | Utility bonus from development as it has so many modifiers that are hard to calculate |
| AI\_BUILDING\_PROFIT\_THRESHOLD | 1.2 | needs to be at least 20% profitable for AI to expand a building that is not producing strategic goods |
| ``` These two defines adjust AI desire to maintain a profit margin for their country ``` | | |
| AI\_PROFIT\_MARGIN\_TARGET | 0.25 | the desired profit margin |
| AI\_GOLD\_COST\_UTIL\_FROM\_LOW\_PROFIT\_MARGIN | 3 | how hard the AI tries to maintain that margin |
| AI\_EARLY\_GAME\_MONTHS | 36 | during these first months AI will focus more on building up their initial economy by disabling some other things like unit recruitment |
| PEASANT\_BUILDING\_IN\_CITY\_UTILITY\_MULT | 0.5 | penalty for building peasant building in city that could be built in rural |
| AI\_UPGRADE\_BUILDING\_UTILITY | 0.001 | score from upgrading buildings, becomes relevant when new building choices run out due to lack of pops |
| INPUT\_GOODS\_SHORTAGE\_UTILITY\_FACTOR | 0.02 |  |
| SELL\_PROVINCE\_DEBT\_CAP | 2 | Max bonus from being in debt, in percentage |
| SELL\_PROVINCE\_DEBT\_CASH\_CAP | 2 | Multiplied with the Total Debt and cap the bonus from cash, in percentage |
| SELL\_PROVINCE\_FRACTURE\_COUNTRY | -3 | Multiplied by how many new country areas will be created |
| AI\_PROFITABILITY\_THRESHOLD\_FOR\_MISSING\_GOODS\_UTIL | 1.2 | Must be at least 15% profitable to build it in order to solve input issues for other buildings, safe guard against it closing |
| AI\_ESTATE\_PROFIT\_UTILITY\_FACTOR | 0.5 | AI utility score for enriching estates based on income from tax rates being lower than 35% |
| AI\_UTILITY\_MARGIN\_REQUIRED\_TO\_REOPEN\_BUILDING | 0.2 | AI needs at least this much utility to reopen a closed building |
| AI\_CHANCE\_TO\_REOPEN\_PROFITABLE\_BUILDING | 0.25 | chance to reopen a building each month if it meets the profit requirements |
| AI\_PARLIAMENT\_LAW\_CHANGE\_SCORE\_THRESHOLD | 10 | Score difference between current policy needed to ask parliament to change law |
| ``` These two defines below determine AI performance optimizations for extremely large markets Example: AI market with 500 locations that are all desert, we try to evaluate if we can build a fishing village in at least the minimum target, up to the maximum of the ratio of they market. A small market will look everywhere, a huge market will only try 10% and then give up. Next month they will try a different 10% of the market anyway. ``` | | |
| AI\_PERFORMANCE\_EVALUATE\_MARKET\_RATIO\_PER\_BUILDING | 0.042 | 1/24, check all locations against all buildings at least bi yearly |
| AI\_PERFORMANCE\_EVALUATE\_MARKET\_MINIMUM\_PER\_BUILDING | 20 | Check at least 20 different locations before giving up on a building |
| AI\_PERFORMANCE\_EVALUATE\_CITY\_UPGRADES\_MINIMUM | 20 | Upgrade (1/56) of all locations or minimum 100 whichever is largest |
| AI\_PERFORMANCE\_EVALUATE\_CITY\_UPGRADES\_RATIO | 0.017 | 1/56, check all locations once per 5 years if they should upgrade city |
| AI\_ALLOWED\_PARALLEL\_SAME\_TYPE\_CONSTRUCTION\_RATIO | 0.02 | allowed to build the same type of building in 2% of our locations in parallel |
| AI\_ALLOWED\_PARALLEL\_SAME\_TYPE\_CONSTRUCTION\_MINIMUM | 3 | minimum allowed of parallel construction of the same type of building |
| AI\_ALLOWED\_PARALLEL\_TOTAL\_CONSTRUCTION\_RATIO | 0.05 | Allowed to start new constructions in 5% of our locations each monthly tick |
| AI\_MAX\_NEW\_BUILDINGS\_PER\_LOCATION | 3 | AI will not start a new ramping building if doing so would put more than this many ramping/in-flight buildings at the same location |
| AI\_PROXIMITY\_SOURCE\_MINIMUM\_DISTANCE | 150 | minimum map distance between proximity source buildings |
| AI\_PERFORMANCE\_UTILITY\_LOCATIONS\_TO\_SAMPLE | 20 | Maximum number of sample locations for AI modifier utility for performance costly modifiers |
| AI\_PERFORMANCE\_CABINET\_ACTION\_LOCATION\_SAMPLE\_SIZE | 20 | Maximum number of sample locations for AI cabinet actions |
| AI\_PERFORMANCE\_CABINET\_ACTION\_PROVINCE\_SAMPLE\_SIZE | 5 | Maximum number of sample provinces for AI cabinet actions |
| AI\_PERFORMANCE\_CABINET\_ACTION\_AREA\_SAMPLE\_SIZE | 1 | Maximum number of sample areas for AI cabinet actions |
| AI\_PERFORMANCE\_CABINET\_ACTION\_MONTHS\_BETWEEN\_UPDATES | 36 | Number of months between each AI update to change cabinet actions |
| AI\_PERFORMANCE\_REFORMS\_MONTHS\_BETWEEN\_UPDATES | 24 | Number of months between each AI update to change government reforms |
| AI\_PERFORMANCE\_BUREAUCRACY\_MONTHS\_BETWEEN\_UPDATES | 24 | Number of months between each AI update to add or remove bureaucracies |
| AI\_PERFORMANCE\_POLICIES\_MONTHS\_BETWEEN\_UPDATES | 6 | Number of months between each AI update to change policies of laws |
| AI\_PERFORMANCE\_ESTATE\_PRIVILEGES\_MONTHS\_BETWEEN\_UPDATES | 12 | Number of months between each AI update to change estate privileges |
| AI\_PERFORMANCE\_ESTATE\_PRIVILEGES\_UNUSED\_TAX\_MONTHS\_BETWEEN\_UPDATES | 2 | Number of months between each AI update to change estate privileges |
| AI\_PERFORMANCE\_SCHOLARS\_MONTHS\_BETWEEN\_UPDATES | 6 | Number of months between each AI update to change religion scholars |
| AI\_PERFORMANCE\_TRADE\_PROFIT\_PER\_WEIGHT\_CUTOFF | 0.25 | If expected profit from a trade route is less than this amount per merchant capacity used we skip it |
| AI\_PERFORMANCE\_TRADE\_RANGE\_SCALE\_CUTOFF | 1.5 | If distance to market is more than country trade range times this we skip it |
| AI\_PERFORMANCE\_PATHFIND\_DISTANCE\_THRESHOLD | 100 | distance threshold for less accurate pathfind to save performance for ai, smaller threshold saves more performance |
| AI\_NAVAL\_PERFORMANCE\_PATHFIND\_DISTANCE\_THRESHOLD | 2500 | same as above but for navies; Naval threshold higher as it causes ships to incorrectly sail against the wind accross the atlantic otherwise |
| AI\_TRANSPORT\_STRENGTH\_THRESHOLD\_PER\_DISTANCE | 0.0004 | 2500 distance needs to have a 100% strength transport fleet |
| AI\_PERFORMANCE\_NODE\_LIMIT\_PER\_DISTANCE | 4 | AI allowed pathfind node depth based on map distance |
| AI\_PERFORMANCE\_NAVAL\_NODE\_LIMIT\_PER\_DISTANCE | 3 | AI allowed pathfind node depth based on map distance for naval |
| AI\_PERFORMANCE\_NODE\_LIMIT\_BASE | 100 | each pathfind is allowed at least this many node expansions |
| CHANGE\_RELIGION\_THRESHOLD | 1.25 | New religion must be >25% bigger |
| AI\_PERFORMANCE\_ATTACH\_UNIT\_MAX\_DISTANCE | 200 | maximum distance AI allied units are allowed to travel to attach, shorter number saves more performance on pathfinding |
| AI\_PERFORMANCE\_TRADE\_ATTEMPT\_PER\_GOOD | 5 | number of attempts AI will do per good per market when looking for profitable import/exports before giving up |
| AI\_PERFORMANCE\_EXPORT\_PRICE\_DIFF | 0.65 | if price ratio between base and max possible is at least this value for a certain good, it will skip it when trading (0-1) |
| AI\_PERFORMANCE\_SAMPLE\_SIZE | 3 | cutting down on colonial charter tests |
| AI\_PERFORMANCE\_TECH\_QUEUE\_SIZE | 5 | how many techs AI queue at once, higher number is better performance but makes AI slower to react to changes |
| AI\_ESTATE\_SATISFACTION\_TAX\_TARGET | 0.5 | AI will adjust tax sliders to have this minimum estate satisfaction |
| AI\_REVOKE\_PRIVILEGE\_STABILITY\_THRESHOLD | -50 | ai needs at least this much stability left after revoking a privilege |
| AI\_VALUE\_CREATION\_UTILITY | 0.1 | Conversion factor from goods value creation to gold, e.g. when building RGO in 0% control |
| AI\_PROXIMITY\_CANDIDATE\_MIGRATION\_UTIL | 50 | Extra util score for migrating pops to our proximity candidate |
| AI\_PROXIMITY\_CANDIDATE\_ROAD\_CONNECTION\_UTIL | 0.05 | extra util score for connecting the proximity candidate to capital road |
| AI\_PROXIMITY\_CANDIDATE\_RANK\_UPGRADE\_UTIL | 2 | extra score for upgrade the city rank of the proximity candidate |
| AI\_LOCAL\_GOVERNOR\_TAX\_BASE\_THRESHOLD | 100 | if AI has lower than this tax base they wont bother trying to find a place for local governor |
| AI\_PROXIMITY\_CANDIDATE\_UPDATE\_CHANCE | 0.2 | 20% chance per building update to check for good locations for local governors |
| AI\_ESTATE\_SATISFACTION\_TARGET\_FOR\_GRANTING\_PRIVILEGES | 0.55 | when below this target satisfaction (excluding temp modifiers) we want to grant a privilege |
| AI\_ESTATE\_SATISFACTION\_TARGET\_FOR\_REVOKING\_PRIVILEGES | 0.75 | When above this target satisfaction (excluding temp modifiers) we want to revoke a privilege |
| AI\_ESTATE\_SATISFACTION\_STABILITY\_ESTIMATE | 0.3 | when evaluating if we should remove or grant a privilege we estimate estate satisfaction based on this stability |
| AI\_GRANT\_ESTATE\_PRIVILEGE\_THRESHOLD | 75 | positive utility needed to grant an estate privilege so won't change our mind and remove it later |
| AI\_ESTATE\_SATISFACTION\_TARGET\_PARLIAMENT\_AGENDAS | 0.4 | Parliament agendas will not be considered if they lower estate satisfaction below this point |
| AI\_ESTATE\_SATISFACTION\_TARGET\_PRIVILEGES | 0.02 | Estate privileges will not be considered if they give less estate satisfaction than this |
| AI\_ESTATE\_TARGET\_SATISFACTION\_NEEDED\_THRESHOLD\_PRIVILEGES | 0.05 |  |
| AI\_DEFAULT\_COUNTRY\_INTERACTION\_FREQUENCY | 30 | default number of days between ai checking each country interaction |
| AI\_DEFAULT\_CHARACTER\_INTERACTION\_FREQUENCY | 180 | default number of days between ai checking each character interaction |
| AI\_KEEP\_SPY\_NETWORK\_NEEDED\_AMOUNT\_FACTOR | 1.2 |  |
| AI\_KEEP\_SPY\_NETWORK\_MONTHLY\_DIPLOMATS\_THRESHOLD | 0.1 |  |
| AI\_KEEP\_SPY\_NETWORK\_CURRENT\_DIPLOMATS\_THRESHOLD | 1 |  |
| ORGANIZATION\_WAR\_WIN\_CHANCE\_TO\_START | 0.55 | Values 0 - 1. If the win chance of an IO vs target is below this value, IO will not declare. |
| LOCATION\_POP\_PROMOTION\_SPEED\_FACTOR | 20 | How much AI values quick pop promotion |
| LOCATION\_POP\_PROMOTION\_SPEED\_FACTOR\_TRIBESMEN | 20 | How much AI values quick pop promotion of tribesmen |
| LOCATION\_POP\_PROMOTION\_SPEED\_FACTOR\_SOLDIERS | 40 | How much AI values pop promotion modifier when location needs soldier pops |
| MARKET\_ACCESS\_IMPORTANCE | 0.15 | How much the AI values having high market access per raw tax base, measured in monthly ducats (assuming large markets) |
| MARKET\_TAX\_BASE\_REFERENCE | 100 | A reference for how large markets should be, measured in raw tax base (raw = assuming 100% market access) |
| MARKET\_OWNING\_IMPORTANCE | 0.0005 | How much the AI values owning the market center per raw tax base, measured in monthly ducats |
| MERCHANT\_CAPACITY\_GOLD\_RELATION\_FACTOR | 0.25 | Estimated profitability of trade per merchant capacity, used when AI has 0 trades so there is nothing to calc profitability on |
| RECRUITMENT\_TIME\_BASE\_DAYS | 10 | Base number of days to consider getting a new unit to a place |
| RECRUITMENT\_TIME\_FACTOR | 0.1 | Multiplier for how significant recruitment time is for AI recruitment decisions |
| SHIP\_RECRUITMENT\_COST\_FACTOR | 0.2 | multiplier for how much we care about the cost of ships vs budget |
| REGIMENT\_RECRUITMENT\_COST\_FACTOR | 0.5 | multiplier for how much we care about the cost of regiments vs budget |
| MONTHLY\_MANPOWER\_PER\_BASE\_TAX\_REFERENCE | 0.04 | This is how big manpower pool AI wants based on each 100 taxbase |
| MAXIMUM\_MANPOWER\_MAXIMUM\_VALUE | 0.85 | This is how hard they will try to reach their manpower pool target |
| AI\_ESSENTIAL\_MANPOWER\_UTILITY\_VALUE | 0.25 | This is how hard they will try to reach their essential manpower pool target, which is enough to maintain their armies and have enough replenishment to rebuild them fast |
| MONTHLY\_SAILORS\_PER\_BASE\_TAX\_REFERENCE | 0.0008 | This much monthly\_sailors per tax base will be used as "default" reference |
| MONTHLY\_SAILORS\_DESIRE\_FACTOR | 0.2 |  |
| MONTHLY\_SAILORS\_MAXIMUM\_VALUE | 0.04 | The maximum value the sailors scale curve can reach |
| MAXIMUM\_SAILORS\_MAXIMUM\_VALUE | 0.45 | inherent utility scale for maximum sailor modifier |
| AVERAGE\_FRONTAGE | 12 |  |
| MONTHLY\_CONTROL\_MAXIMUM\_VALUE | 0.1 | The maximum value the control scale curve can reach |
| MAX\_CONTROL\_DESIRE\_PER\_PROFIT | 1 | The maximum the max control we have per spread |
| MAXIMUM\_LOCAL\_CONTROL\_MAXIMUM\_VALUE | 1 | The maximum max control desire we have |
| AI\_CULTURE\_INFLUENCE\_UTILITY\_FACTOR | 0.1 | Utility from having 125% culture influence compared to highest culture tradition present in country |
| AI\_CULTURE\_TRADITION\_UTILITY\_FACTOR | 0.05 | Utility from having 125% culture tradition compared to highest influence present in country |
| AI\_DISEASE\_RESISTANCE\_UTILITY | 0.05 | base utility for disease resistance |
| AI\_DISEASE\_RESISTANCE\_AFFECTED\_MULTIPLIER | 10 | multiplier for locations with ongoing diseases |
| AI\_HEATHEN\_TOLERANCE\_UTILITY | 0.25 | Utility scaled on % of heathen population |
| AI\_HERETIC\_TOLERANCE\_UTILITY | 0.25 | Utility scaled on % of heretic population |
| AI\_TRUE\_TOLERANCE\_UTILITY | 0.25 | Utility scaled on % of true faith population |
| PROXIMITY\_DESIRE\_PER\_MAX\_CONTROL | 0.1 | The maximum value the proximity scale curve can reach on max control |
| MAXIMUM\_LOCAL\_PROXIMITY\_MAXIMUM\_VALUE | 0.2 | The maximum proximity desire we have (inherent utility) |
| PROXIMITY\_NEIGHBOURS\_ON\_MAX\_CONTROL | 0.1 | Proximity utility per neighbors on max control |
| LOCAL\_PROXIMITY\_SOURCE\_DESIRE | 0.1 | The local proximity source desire (currency effect) |
| AI\_GLOBAL\_PROXIMITY\_COST\_UTILITY | 5 | Inherent utility for global proximity speed modifier |
| AI\_GLOBAL\_INSTITUTION\_GROWTH\_UTILITY | 0.8 | Inherent value of global institution growth modifier |
| AI\_UNLOCK\_BUILDING\_ADVANCE\_UTIL | 5 | Base score from unlocking new builings for AI that doesnt have capital modifiers |
| AI\_UNLOCK\_BUILDING\_ADVANCE\_UTIL\_PER\_UPGRADE | 50 | score from unlocking a building from number of buildings upgrades per tax base |
| AI\_UNLOCK\_PM\_ADVANCE\_UTIL | 50 | score for unlocking a pm from number of buildings using it per tax base |
| AI\_GLOBAL\_BUILDING\_COST\_UTIL | -0.75 |  |
| AI\_GLOBAL\_URBAN\_BUILDING\_COST\_UTIL | -0.5 |  |
| ROAD\_MARKET\_VALUE\_FLOW\_FACTOR | 0.0005 | how much AI cares about building roads that increase the flow towards market capital |
| ROAD\_TAX\_RATE\_ESTIMATE\_FOR\_ESTATES | 25 | estimated recovery percentage of lost tax due to low control, when estates build roads |
| ROAD\_MARKET\_VALUE\_FLOW\_FACTOR\_FOR\_ESTATES | 0.5 | how much AI cares about building roads that increase the flow towards market capital, when estates build roads |
| AI\_ROAD\_TAX\_ESTIMATE\_MULTIPLIER | 1.5 | AI score multiplier for building roads towards taxbase |
| AI\_POPULATION\_PROPAGATION\_UTIL | 25 | AI willingness to build roads towards population (% share of country) |
| AI\_TAXBASE\_PROPAGATION\_UTIL | 0.5 | AI willingness to build roads towards taxbase |
| MONTHLY\_INFLATION\_COST\_PER\_TAX\_BASE | 0.33 |  |
| CURRENCY\_AMOUNT\_BIAS\_MONTHLY\_DECAY | 0.96 |  |
| AI\_REVOKE\_PRIVILEGE\_COST\_MODIFIER\_UTILITY | -0.1 | Utility of the revoke privilege cost modifier |
| AI\_GLOBAL\_MARITIME\_PRESENCE\_DECAY\_UTIL | -100 |  |
| AI\_GLOBAL\_MARITIME\_PRESENCE\_MODIFIER\_UTIL | 1 |  |
| AI\_GLOBAL\_MARITIME\_PROXIMITY\_COST\_UTIL | -0.12 |  |
| AI\_GLOBAL\_PORT\_PROXIMITY\_COST\_UTIL | -0.02 |  |
| AI\_GLOBAL\_MERCHANT\_POWER\_FROM\_MARITIME\_UTIL | 0.5 |  |
| AI\_GLOBAL\_SEA\_TRADE\_COST\_UTIL | 0.2 |  |
| AI\_GLOBAL\_SEA\_COST\_UTIL | -0.01 |  |
| GOVERNMENT\_POWER\_INHERENT\_UTILITY | 0.9 | inherent util when below 70 to avoid bad situations |
| AI\_STABILITY\_INHERENT\_UTILITY | 0.25 | AI diminishing inherent willingness to invest in stability slider up to 100 |
| AI\_STABILITY\_LINEAR\_INHERENT\_UTILITY | 1 | AI linear willingness to invest up to 0 stability |
| AI\_EMBRACE\_INSTITUTION\_STABILITY\_UTILITY | 0.05 | AI extra willingness to invest in stability slider when it is close to embracing institutions |
| AI\_ALLOWED\_STABILITY\_FIRST\_INSTITUTION\_EMBRACE | 20 | AI is allowed to go a bit negative into stability to embrace their first institution of each age |
| AI\_REBEL\_JOIN\_THRESHOLD\_IMPORTANCE | 5 | AI willingness to invest into rebel join threshold modifier |
| AI\_REBEL\_LEAVE\_THRESHOLD\_IMPORTANCE | 2.5 | AI willingness to invest into rebel leave threshold modifier |
| POP\_SATISFACTION\_IMPORTANCE\_FOR\_REVOLTS | 10 | AI willingness to invest into unrest reduction / satisfaction to reduce revolts |
| POP\_SATISFACTION\_IMPORTANCE\_TO\_ESTATES | 250 |  |
| ESTATE\_SATISFACTION\_LEVY\_THRESHOLD\_IMPORTANCE | 10 | AI willingness to specifically keep estate satisfaction above the threshold for raising levies |
| AI\_ESTATE\_SATISFACTION\_LINEAR\_UTIL | 0 |  |
| AI\_ESTATE\_SATISFACTION\_QUAD\_UTIL | 1 |  |
| GRANT\_PRIVILEGE\_COOLDOWN | 1500 | Cooldown for an individual estate for AI to grand privilege to let the effect of the grant play out |
| GRANT\_PRIVILEGE\_UNUSED\_TAX\_COOLDOWN | 180 |  |
| REVOKE\_PRIVILEGE\_COOLDOWN | 3000 | Cooldown for all estates when AI revokes a privilege |
| AI\_TOWN\_RIGHTS\_COOLDOWN | 350 | Cooldown after an AI grants an town right before they are allowed to make any more changes |
| ARMY\_LEVY\_SIZE\_IMPORTANCE | 20 | normalized on taxbase |
| NAVY\_LEVY\_SIZE\_IMPORTANCE | 5 | normalized on taxbase |
| POP\_SATISFACTION\_IMPORTANCE | 60 |  |
| OPINION\_IMPORTANCE | 0.2 |  |
| MAX\_LOAN\_FOR\_TROOPS | 0 | How many % in debt the AI can be before they stop buying troops with loans |
| ESTATE\_MAX\_TAX\_MODIFIER\_UTILITY\_IMPORTANCE | 0.025 | AI utility of changing the max estate tax modifier is determine by this multiplied with the estate taxbase |
| NUM\_PRIVILEGES\_QUADRATIC\_UTILITY\_PENALTY | 0 | stacking quadratic penalty for handing out estate privileges |
| AI\_ALLOWED\_NAVAL\_CONSTRUCTIONS\_TAX\_BASE\_DIVIDER | 100 | Taxbase divided by this is how many parallel fleet constructions AI is allowed |
| AI\_ALLOWED\_ARMY\_CONSTRUCTIONS\_TAX\_BASE\_DIVIDER | 100 | Taxbase divided by this is how many parallel armies constructions AI is allowed |
| FLEET\_REPAIR\_THRESHOLD | 0.9 | if a fleet average strength is below this threshold the fleet will repair |
| AI\_DAYS\_AT\_SEA\_ATTRITION\_THRESHOLD | 60 | if a ship is in risk of taking attrition and has been this many days at sea AI will go to port |
| MINIMUM\_GALLEY\_THRESHOLD | 0.33 | AI needs to have at least this many % of their coast be appropriate for galleys in order for galley to be allowed |
| AI\_HEAVY\_SHIP\_RATIO\_FOR\_TRANSPORTS | 0.25 | AI wants this % of heavy ships to be part of their transport fleets for safety |
| AI\_REQUIRED\_SAILORS\_SURPLUS\_MARGIN | 0.33333 | AI needs this much % of monthly sailors reserved for reinforcements |
| AI\_REQUIRED\_MANPOWER\_SURPLUS\_MARGIN | 0.33333 | AI needs this much % of monthly manpower reserved for reinforcements |
| HUNT\_ARMIES\_MAX\_RADIUS | 20 |  |
| HUNT\_ARMIES\_STAY\_PRIO | 0.05 | This number works like a threshold for how important tasks should be for the AI to leave base |
| HUNT\_ARMIES\_CONFRONT\_FACTOR | 2 | This factor determines how likely the AI is to initiate a battle, as opposed to just staying close by |
| HUNT\_ARMIES\_WIN\_CHANCE\_SPLIT | 0.99 | Split up the army if it has more than this win chance |
| HUNT\_ARMIES\_MAX\_SPLINTERS | 6 | Don't split into more armies than this |
| HUNT\_ARMIES\_PRESENCE\_RADIUS | 3 | Consider armies this far away |
| HUNT\_ARMIES\_DESIRED\_STRENGTH\_MULT | 1.5 | We want this number times the enemy strength |
| HUNT\_ARMIES\_AI\_MAX\_DISTANCE | 3 | Maximum distance AI will have between base location and important province |
| HUNT\_ARMIES\_AI\_RADIUS\_BUFFER | 2 | Additional objective radius |
| HUNT\_ARMIES\_AI\_MAX\_NUM\_OBJECTIVES | 5 | How many simultaneous HUNT\_ARMIES objectives the AI will have at most (soft cap) |
| HUNT\_ARMIES\_AI\_WAR\_GOAL\_VALUE | 1 |  |
| HUNT\_ARMIES\_AI\_CAPITAL\_VALUE | 1 |  |
| HUNT\_ARMIES\_AI\_PROVINCE\_CAPITAL\_VALUE | 1 |  |
| HUNT\_ARMIES\_AI\_ENEMY\_VALUE\_FACTOR | 0.5 |  |
| HUNT\_ARMIES\_AI\_REACHABLE\_FACTOR | 10 |  |
| HUNT\_NAVIES\_DESIRED\_STRENGTH\_MULT | 1.5 | We want this number times the enemy strength |
| MAXIMUM\_ALLOWED\_NUMBER\_OF\_EACH\_OBJECTIVE | 20 | How many objectives (e.g. carpet siege area) of a certain type the AI can have at once for performance reasons |
| MAXIMUM\_ALLOWED\_SIDE\_OBJECTIVES | 10 | How many side objectives we can have per objective, e.g. "win war versus". So in 1 war we focus on maximum this many enemies at once |
| CARPET\_SIEGE\_REQUIRED\_WIN\_CHANCE | 0.8 |  |
| CARPET\_SIEGE\_CONFRONT\_FACTOR | 0.5 | This factor determines how likely the AI is to initiate a battle, as opposed to just staying close by |
| CARPET\_SIEGE\_SEARCH\_DEPTHS | { 10, 8, 6, 5, 4, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 } | How far away will units look when carpet sieging; First (biggest) units looks 10 steps away, smaller units get less allowance. This is important for performance. If they don't find anything, they get moved to logistics to get them somewhere near |
| CARPET\_SIEGE\_MAX\_ARMIES | 10 | carpet siege won't split down to more armies than this |
| AI\_NAVAL\_INVASION\_PORT\_PREFERENCE | 5 | score bonus for choosing a port as naval invasion landing point (fleet can dock there) |
| AI\_NAVAL\_INVASION\_THREAT\_WEIGHT | 0.001 | score penalty per unit of enemy combat strength at a candidate naval invasion landing point |
| AI\_SUPPLY\_LIMIT\_TARGET | 0.95 | AI will try to make army stacks of this ratio of average supply limit in their country |
| RATIO\_OVER\_SUPPLY\_TARGET\_TO\_SPLIT | 1.3 | A stack has to be this much over the supply limit target to be split in half |
| AI\_GLOBAL\_SUPPLY\_LIMIT\_UTILITY | 0.2 | AI score for global supply limit modifier |
| AI\_MINIMUM\_AUXILIARY\_RATIO | 0.15 | minimum ratio of auxiliaries that AI will keep in their armies regardless of country bonuses |
| AI\_UNIT\_CATEGORY\_WEIGHT\_FROM\_POWER | 10 | how much power modifiers to unit categories influence AI army composition |
| AI\_GROUP\_RECENTLY\_REMOVED\_UNIT\_FORGET\_CHANCE | 0.25 | chance to forget a forcefully removed unit which prevents it to be assigned again |
| AVOID\_BATTLES\_PATHFIND\_CONFRONT\_FACTOR | 0.5 | This factor determines how likely the AI is to initiate a battle, as opposed to just staying close by |
| AI\_POWER\_PROJECTION\_UTIL\_FROM\_COLONIZATION | 0.01 | Power Projection util per ongoing colonization |
| MAX\_RECRUIT\_DISTANCE | 10 | How far away from base location AI may recruit troops |
| RELEVANT\_ARMY\_MIN\_RAW\_STRENGTH | 0.025 | How many levies to even worth considering raising |
| RELEVANT\_NAVY\_MIN\_RAW\_STRENGTH | 0.025 | How many levies to even worth considering raising |
| AI\_MAXIMUM\_ARMY\_VS\_NAVY\_BUDGET\_ALLOCATION | 0.75 | maximum allocation budget for land vs navy based on society value |
| AI\_MAINTENANCE\_BUDGET\_RATIO | 0.2 | How much of monthly income on maximum sliders is allocated for maintenance budget of armies and navies |
| AI\_MAINTENANCE\_BUDGET\_RATIO\_AGE\_INCREASE | 0.025 | how much every age adds. |
| SUPPLY\_DEPOT\_RANGE | 2 | how far away a supply depot can be to be used by a unit |
| NAVAL\_SUPPLY\_RANGE | 1 | how far away a ship can be to supply an army |
| FOOD\_STORAGE\_TO\_ESCORT\_STRENGTH\_RATIO | 0.2 | how many troops will escort supply wagons |
| GO\_LOOKING\_FOR\_FOOD\_RANGE | 6 | how far supply wagons will wander looking for food |
| GO\_LOOKING\_FOR\_FOOD\_DISTANCE\_IMPORTANCE | -1 | further away is worse |
| GO\_LOOKING\_FOR\_FOOD\_AMOUNT\_IMPORTANCE | 3 | more is better |
| AI\_AVOID\_ATTRITION\_MAX\_PATH\_FIND\_DISTANCE | 7 | dinstance in locations AI will look for a safe spot to avoid attrition, further distance costs more performance |
| BATTLE\_WIN\_CHANCE\_SENSITIVITY | 16 |  |
| BATTLE\_WIN\_CHANCE\_ENEMY\_BIAS | 1.1 |  |
| BATTLE\_WIN\_CHANCE\_GENERAL\_MIL\_FACTOR | 0.25 | -> 100 MIL ~ 25% bigger army |
| BATTLE\_WIN\_CHANCE\_ADMIRAL\_SKILL\_FACTOR | 0.25 | -> 100 Dip ~ 25% better fleet |
| INITIATIVE\_COMBAT\_STRENGTH\_FACTOR | 0.025 | -> 10 initiative ~25% better army |
| AI\_FLANKING\_COMBAT\_STRENGTH\_FACTOR | 0.3 |  |
| BUILDING\_THRESHOLD\_FACTOR | 1.2 | Increase this to make AI more careful with building buildings. Don't make < 1 |
| AI\_HOSTILE\_BORDER\_MIN\_SUBUNITS | 3 | Minimum subunits in a hostile army near our border before AI raises fort maintenance |
| LOCATION\_BORDER\_DISTANCE\_RELEVANCE\_THRESHOLD | 20 |  |
| BASE\_FORT\_LEVEL\_BENEFIT\_SCALAR | 0.1 |  |
| BASE\_ZOC\_BENEFIT\_SCALAR | 0.1 |  |
| FORT\_PROTECTION\_BORDER\_MULT | 20 |  |
| FORT\_PROTECTION\_LOCATION\_MULT | 1 |  |
| FORT\_PROTECTION\_CAPITAL\_MULT | 0.3 |  |
| FORT\_PROTECTION\_PROVINCE\_CAPITAL\_MULT | 1 |  |
| FORT\_UTILITY\_NO\_MARKET\_ACCESS | -50 |  |
| AI\_OVERLAPPING\_ZOC\_PENALTY\_FACTOR | -2.1 | Bigger negative value means AI is more forbidden to make forts with overlapping ZOC |
| HOW\_MUCH\_WE\_CARE\_ABOUT\_PRIVATEERING\_RIVALS | 1 |  |
| HOW\_MUCH\_WE\_CARE\_ABOUT\_PRIVATEERING\_ENEMIES | 1 |  |
| HOW\_MUCH\_WE\_CARE\_ABOUT\_PRIVATEERING\_NEUTRALS | 0.2 |  |
| HOW\_MUCH\_WE\_CARE\_ABOUT\_PRIVATEERING\_FRIENDS | 0 |  |
| HOW\_MUCH\_WE\_CARE\_ABOUT\_PRIVATEERING\_MERCHANT\_POWER | 50 |  |
| PRIVATEERING\_MERCHANT\_POWER\_HALF\_LIFE\_MIN | 10 |  |
| PRIVATEER\_TRADE\_COUNT\_FACTOR | 0.2 |  |
| EXPLORATION\_UTILITY\_SEA | 6 |  |
| EXPLORATION\_UTILITY\_LAND | 10 |  |
| EXPLORATION\_PREPARATION\_TIME\_UTILITY | -0.4 |  |
| EXPLORATION\_DISTANCE\_BASE | 1000 |  |
| EXPLORATION\_GOLD\_EFFECT | 1 |  |
| ONGOING\_EXPLORATION\_UTILITY\_PENALTY | 0.5 | utility penalty for each ongoing exploration |
| ROYAL\_MARRIAGE\_RULER\_WEIGHT | 20 |  |
| ROYAL\_MARRIAGE\_HEIR\_WEIGHT | 10 |  |
| ROYAL\_MARRIAGE\_OTHER\_WEIGHT | 10 |  |
| MOVEMENT\_SPEED\_FACTOR | 0.05 |  |
| AI\_LITERACY\_LOCAL\_GROWTH\_RATE\_IMPORTANCE | 0.1 |  |
| AI\_LITERACY\_GLOBAL\_GROWTH\_RATE\_IMPORTANCE | 0.1 |  |
| AI\_LITERACY\_UTILITY\_FACTOR | 4 |  |
| AI\_RESEARCH\_SPEED\_UTILITY | 2 |  |
| AI\_MARKET\_POWER\_UTIL | 0.0005 | inherent util for market power |
| PEACE\_OFFER\_WAR\_ENTHUSIASM\_THRESHOLD | 0.6 |  |
| PEACE\_OFFER\_WAR\_SCORE\_THRESHOLD | 50 |  |
| PEACE\_OFFER\_ACCEPTANCE\_THRESHOLD | -20 |  |
| PEACE\_OFFER\_OCCUPATION\_PERCENTAGE\_THRESHOLD | 0.25 |  |
| PEACE\_OFFER\_WARSCORE\_PERCENTAGE\_THRESHOLD | 0.33 |  |
| PEACE\_OFFER\_WAR\_ENTHUSIASM\_STALE\_WAR | 0.5 |  |
| PEACE\_OFFER\_MISSING\_IMPORTANT\_TREATIES\_STRENGTH\_COMPARISON\_MULT | 0.1 |  |
| PEACE\_OFFER\_ALLY\_LEAVE\_WAR\_ENTHUSIASM | 0.25 |  |
| PEACE\_OFFER\_SEND\_PEACE\_ENEMY\_STRENGTH\_FACTOR | 0.2 | Ai will always send peace offers if the enemy side \* factor is stronger than the Ai country alone. |
| HEAVILY\_OUTNUMBERED\_RATIO | 0.4 | StrengthBalance below this activates outnumbered war behavior |
| OUTNUMBERED\_BATTLE\_ADVANTAGE | 0.6 | when outnumbered, only chase stacks whose power is <= this fraction of our strength |
| OUTNUMBERED\_TERRAIN\_BONUS\_MIN | 0.05 | terrain impact must be >= this for a battle to count as terrain-advantaged when outnumbered |
| OUTNUMBERED\_ENTHUSIASM\_WEIGHT | 2 | multiplier on (1 - enthusiasm) bonus to win\_war\_versus priority when outnumbered |
| OUTNUMBERED\_SEPARABLE\_WEIGHT | 1.5 | additional priority multiplier for enemies that can be directly separate-peaced when outnumbered |
| MAX\_LOANS\_FOR\_MERCS | 3 | hard ceiling on total active loans before AI stops taking debt to hire mercenaries |
| AI\_CIRCULAR\_STRAIT\_DISTANCE\_THRESHOLD | 8 | when distance (in locations) to walk around a strait is smaller than this just ignore it |
| AI\_STRAIT\_DISTANCE\_TO\_ENEMY\_THRESHOLD | 6 | distance (in locations) how close a strait has to be to enemy controlled area to be important |
| AI\_FOW\_FORGET\_CHASE\_ARMY\_CHANCE | 0.33 | chance that AI will forget a chase army objective about an army that goes into fow |
| AI\_RECOVER\_MORALE\_THRESHOLD | 66 | AI will stop and rest armies when their morale is below this percentage |
| AI\_RETREAT\_DICE\_MARGIN | 3 | Retreat if enemy effective dice exceeds ours by this much while morale is low |
| AI\_RETREAT\_DICE\_MARGIN\_SIEGE\_RAIDER | 2 | Lower dice margin used when the active stance is siege-focused (retreat more readily) |
| AI\_RETREAT\_DICE\_MORALE\_THRESHOLD | 0.45 | Morale threshold below which dice disadvantage triggers retreat |
| AI\_RETREAT\_FLANK\_MORALE\_THRESHOLD | 0.4 | Morale threshold below which total flank exposure triggers retreat |
| AI\_TERRAIN\_RETREAT\_THRESHOLD | 0.8 | AI retreats from battle if CalcArmyTerrainEffectiveness returns below this (1.0 = neutral, 0.80 = 20% penalty) |
| AI\_NAVAL\_RETREAT\_STRENGTH\_RATIO | 2 | AI naval fleet retreats if enemy total strength exceeds ours by this factor |
| AI\_NAVAL\_RETREAT\_MORALE\_THRESHOLD | 1.5 | ...and our fleet morale has dropped below this value (50% of base naval morale 3.0) |
| AI\_FLANK\_ADVANTAGE\_FRONTAGE\_RATIO | 1.25 | Terrain retreat is suppressed if our possible frontage exceeds enemy's by this ratio |
| AI\_TERRAIN\_EFFECTIVENESS\_FLOOR | 0.5 | Minimum terrain effectiveness multiplier applied to WinChance/Score during battle selection |
| AI\_AWAIT\_REINFORCING\_ARMY\_DISTANCE\_MAX | 35 | above this map AI will wait for other collaborating armies before engaging their target |
| AI\_AWAIT\_REINFORCING\_ARMY\_DISTANCE\_MIN | 20 | below this map distance collaborating armies are considered closed enough to start moving again |
| AI\_REINFORCE\_ONGOING\_BATTLE\_DISTANCE | 2 | How many locations away AI will try and look to move their arimes to reinforce ongoing combat |
| AI\_STICK\_TO\_SIEGE\_TIME\_FACTOR | 0.003 | extra score factor to prevent reassigning away from a sieging per day, 0.003 = 1/365 every year double score |
| AI\_WAIT\_FOR\_JOINING\_UNIT\_STRENGTH\_THRESHOLD | 0.33 | AI will wait for joining units if they are at least this strong of the target |
| AI\_LAND\_ARMY\_MERGE\_THRESHOLD | 0.8 | Idle armies below 80% frontage fill are candidates for merging with co-located armies |
| AI\_ATTACH\_FRONTAGE\_SCORE\_WEIGHT | 0.5 | Score bonus per unit of free frontage when picking ally attach targets |
| AI\_ATTACH\_MIN\_FRONTAGE\_ROOM | 1 | Don't attach to an ally army that has less than 1 frontage unit free |
| AI\_FRONTAGE\_FILL\_TARGET | 0.9 | Stop assigning allies to an objective once 90% of battle frontage is covered |
| AI\_REMOVE\_BUREAUCRACY\_THRESHOLD | 5 | AI utility threshold needed for removing a bureaucracy |
| AI\_GRANT\_BUREAUCRACY\_THRESHOLD | 5 | AI utility threshold needed for granting a bureaucracy |
| ``` Used for AI assignment of units to objectives ``` | | |
| AI\_MILITARY\_ARMY\_ASSIGNMENT\_PROXIMITY\_FACTOR | -1 | Negative score for army targets further away |
| AI\_MILITARY\_NAVY\_ASSIGNMENT\_PROXIMITY\_FACTOR | -0.1 | negative score for navy targets further away |
| AI\_MILITARY\_ASSIGNMENT\_PRIORITY\_FACTOR | 100 | Positive score based on objective priority (1-10) |
| ``` all these cumulative multiply the total war-worth  if true.. ``` | | |
| PEACE\_MAKE\_SUBJECT\_BASE\_FACTOR | 0.8 |  |
| PEACE\_MAKE\_SUBJECT\_OTHER\_DOMINANT\_CULTURE | 1.2 |  |
| PEACE\_MAKE\_SUBJECT\_OTHER\_DOMINANT\_RELIGION | 1.2 |  |
| PEACE\_MAKE\_SUBJECT\_TOO\_MUCH\_TO\_INTEGRATE | 1.5 |  |
| PEACE\_MAKE\_SUBJECT\_OVER\_LIMIT | 0.05 |  |
| PEACE\_MAKE\_SUBJECT\_REVOLT\_WAR | 0 | If the target is a rebellious province |
| PEACE\_MAKE\_SUBJECT\_AS\_ALLY | 0.5 | If as the taker we are only an ally in the war, focus on land |
| TRANSFER\_OCCUPATION\_WAR\_PARTICIPATION\_BASE\_SCORE | 0.5 |  |
| TRANSFER\_OCCUPATION\_WAR\_PARTICIPATION\_MULTIPLIER | 1 |  |
| TRANSFER\_OCCUPATION\_OPINION\_BIAS\_MULTIPLIER | 1 |  |
| TRANSFER\_OCCUPATION\_WAR\_LEADER\_MULTIPLIER | 0.5 |  |
| TRANSFER\_OCCUPATION\_RIVAL\_MULTIPLIER | -1 |  |
| TRANSFER\_OCCUPATION\_CONTROLLER\_SCORE\_BASE | 10 |  |
| TRANSFER\_OCCUPATION\_CONTROLLER\_SCORE\_MULTIPLIER | 3 |  |
| PEACE\_ANNUL\_GUARANTEED\_FACTOR | 0.25 |  |
| PEACE\_ANNUL\_GUARANTEEING\_FACTOR | 0.25 |  |
| PEACE\_ANNUL\_ALLIANCE\_FACTOR | 0.25 |  |
| PEACE\_ANNUL\_ALLIANCE\_FUTURE\_WAR\_FACTOR | 0.5 |  |
| PEACE\_ANNUL\_GUARANTEEING\_FUTURE\_WAR\_FACTOR | 0.25 |  |
| AI\_ANNEX\_SUBJECT\_DISTANCE\_THRESHOLD | 50 | How far it can be between borders until AI does not want to annex a subject |
| AI\_ANNEX\_SUBJECT\_BORDERING\_CONTROL\_NEEDED | 0.35 | AI will only subjugate another country if they have at least this much bordering control |
| CONQUER\_DESIRE\_POPULATION\_FACTOR | 0.025 | Multiplier on Location.GetTotalPopulation(), which is itself scaled (1 unit = 1000 actual pops); 20k pops = 0.5, 100k pops = 2.5, 1M pops = 25 |
| CONQUER\_DESIRE\_TAX\_BASE\_FACTOR | 0.2 | Per-gold multiplier on potential tax base — 20g = 4, 100g = 20, 350g great-midgame = 70, no per-term cap (saturates against AI\_CONQUER\_DESIRE\_MAX) |
| CONQUER\_DESIRE\_BASE\_SCORE | 20 | Flat base score every candidate location gets |
| CONQUER\_DESIRE\_CITY\_BONUS | 5 | Bonus when the location has city status |
| CONQUER\_DESIRE\_COASTAL\_BONUS | 5 | Bonus when the location is coastal and we have no coast |
| CONQUER\_DESIRE\_CORE\_BONUS | 100 | Bonus when the location is our core |
| CONQUER\_DESIRE\_CB\_BONUS | 20 | Bonus when we have an active casus belli on the owner (no core). CB-age weighting deferred — flat value for now. |
| CONQUER\_DESIRE\_EXCLAVED\_BONUS | 50 | Bonus when the location's area is surrounded by us/our subjects/impassable |
| CONQUER\_DESIRE\_SAME\_CULTURE\_BONUS | 1 | Per-rank base bonus for matching primary culture (Duchy+); scaled by rank multiplier |
| CONQUER\_DESIRE\_ACCEPTED\_CULTURE\_BONUS | 5 | Per-rank base bonus for accepted culture (Kingdom+); scaled by rank multiplier |
| CONQUER\_DESIRE\_COMMON\_LANGUAGE\_BONUS | 5 | Per-rank base bonus for shared language (Kingdom+); scaled by rank multiplier |
| CONQUER\_DESIRE\_CAPITAL\_REGION\_BONUS | 5 | Per-rank base bonus for being in our capital region (Kingdom+); scaled by rank multiplier |
| CONQUER\_DESIRE\_HERETIC\_BONUS | 10 | Flat bonus when target location's religion differs from ours but shares our religion group; scaled by ai\_conquer\_desire\_religion\_mult country modifier |
| CONQUER\_DESIRE\_HEATHEN\_BONUS | 20 | Flat bonus when target location's religion is in a different religion group from ours; scaled by ai\_conquer\_desire\_religion\_mult country modifier |
| CONQUER\_DESIRE\_AREA\_COMPLETE\_BONUS | 40 | Maximum area-completion bonus when we already own 100% of the area; ramps linearly from 0 at AREA\_RAMP\_START |
| CONQUER\_DESIRE\_AREA\_RAMP\_START | 0.6 | Ownership ratio at which area-completion bonus starts ramping up (we get nothing below this; full bonus at 100%) |
| CONQUER\_DESIRE\_REGION\_BONUS | 30 | Maximum region-completion bonus when we already own 100% of the region; ramps linearly from 0 at REGION\_RAMP\_START |
| CONQUER\_DESIRE\_REGION\_RAMP\_START | 0.5 | Ownership ratio at which region-completion bonus starts ramping up |
| CONQUER\_DESIRE\_DISTANCE\_FLOOR | 0 | In-range distance multiplier floor — value at distance equal to AllowedDistance (0 = hard gate, score zeroes at AllowedDistance) |
| CONQUER\_DESIRE\_DISTANCE\_FLOOR\_NEAR\_HOME | 0 | Floor lift for cores / bordering-capital / scripted-preference loosening (0 = no lift, even cores can decay to 0) |
| CONQUER\_DESIRE\_DISTANCE\_TAIL\_FLOOR | 0 | Hard floor for the exponential tail beyond AllowedDistance (0 = far-away locations can decay fully) |
| CONQUER\_DESIRE\_DISTANCE\_TAIL\_DECAY | 0.5 | Multiplier applied each AllowedDistance step beyond the gate (0.5 = halve per step) |
| CONQUER\_DESIRE\_DISTANCE\_LOOSEN\_FACTOR | 1.5 | When scripted area preference > 1, distances up to this multiple of AllowedDistance retain the floor |
| CONQUER\_DESIRE\_DYNASTIC\_UNION\_MULT | 0.4 | Reach multiplier applied when target has a marriage union with us |
| CONQUER\_DESIRE\_DYNASTIC\_MARRIAGE\_MULT | 0.75 | Reach multiplier applied when target has a royal marriage with us |
| CONQUER\_DESIRE\_THREAT\_MIN | 0.2 | Reach multiplier floor when target is overwhelmingly stronger than us |
| CONQUER\_DESIRE\_THREAT\_MAX | 1.5 | Reach multiplier ceiling when target is overwhelmingly weaker than us |
| TARGET\_SAFE\_ANTAGONISM\_FOR\_AI | 50 | How much antagonism Ai is willing to take before getting a too much antagonism modifier |
| EXPECTED\_WAR\_SCORE\_BASE | 25 | How much warscore Ai expects to get in a war |
| EARLY\_PEACE\_TIME\_MONTHS | 4 | How many months need to pass for Ai to lose the early war peace acceptance modifier |
| EARLY\_PEACE\_TIME\_BASE | 10 | How much negative acceptance is added by the early war modifier |
| EARLY\_PEACE\_TIME\_FACTOR | 1.5 | How much acceptance is multiplied by the early war modifier |
| MINIMUM\_WIN\_CHANCE\_TO\_CONSIDER\_DEFEAT | 0.25 | Win chance below this number will make Ai try to White Peace or give something instead of fighting on |
| MINIMUM\_WAR\_SCORE\_TO\_CONSIDER\_DEFEAT | -50 | Warscore below this number will make Ai try to White Peace or give something instead of fighting on |
| AI\_RECENT\_WAR\_MONTHS | 6 |  |
| POTENTIAL\_COALITION\_MAX\_SAFE\_RELATIVE\_STRENGTH | 0.75 | A potential coalition will be ignored if its strength is lower than our strength times this mult |
| AI\_DEFENSE\_STRENGTH\_ALLY\_MULTI | 0.5 | When calculating total defensive stregth multiply allies by this |
| AI\_RIVAL\_THREAT\_THRESHOLD | 0.6 | If threat of the potential rival is this or higher then skip it (Alarmed threshold) |
| AI\_RIVAL\_WARY\_THRESHOLD | 0.3 | If threat is above this but below AI\_RIVAL\_THREAT\_THRESHOLD, apply wary score penalty |
| AI\_RIVAL\_WARY\_SCORE\_MULTIPLIER | 0.3 | Score multiplier applied to rival candidates in the wary threat range |
| IDEAL\_WARSCORE\_DIFFERENCE\_THRESHOLD\_TO\_CONSIDER\_PEACE | 20 | If the current warscore is only X away from the ideal peace deal warscore, AI will try to make peace with that nation |
| PEACE\_RELEASE\_COUNTRY\_FUTURE\_CONQUEST\_FACTOR | 0.15 | How much future conquest of released locations is valued when releasing a country via a peace deal |
| PEACE\_RELEASE\_COUNTRY\_CUT\_RIVAL\_FACTOR | 0.25 | How much cutting a rival/threat is valued when releasing a country via a peace deal |
| PEACE\_RELEASE\_COUNTRY\_STRENGTH\_REQUIREMENT | 0.75 | How strong a nation needs to be relative to us to consider them a threat we need to cut in size |
| PEACE\_RELEASE\_COUNTRY\_RIVAL\_FACTOR | 1 | How many times more does Ai value releasing countries from their rival than just a big country |
| PEACE\_RELEASE\_COUNTRY\_GORE\_FACTOR | -3 | multiplied by how many new country areas will be created |
| PEACE\_RELEASE\_SUBJECT\_FUTURE\_CONQUEST\_FACTOR | 0.1 | How much future conquest of released subject is valued when releasing them via a peace deal |
| PEACE\_RELEASE\_SUBJECT\_CUT\_RIVAL\_FACTOR | 0.25 | How much cutting a rival/threat is valued when releasing a country via a peace deal |
| PEACE\_RELEASE\_SUBJECT\_STRENGTH\_REQUIREMENT | 0.75 | How strong a nation needs to be relative to us to consider them a threat we need to cut in size |
| PEACE\_RELEASE\_SUBJECT\_RIVAL\_FACTOR | 1 | How many times more does Ai value releasing countries from their rival than just a big country |
| PEACE\_BECOME\_JUNIOR\_PARTNER\_FACTOR | 3 | How much Ai wants to get other countries as junior partners |
| PEACE\_RM\_CLOSER\_TO\_THRONE\_FACTOR\_NUMERATOR | 10 | how much to value a RM target being closer to the throne PEACE\_RM\_CLOSER\_TO\_THRONE\_FACTOR\_NUMERATOR / ( 1 + rank / PEACE\_RM\_CLOSER\_TO\_THRONE\_FACTOR\_DENOMINATOR ) |
| PEACE\_RM\_CLOSER\_TO\_THRONE\_FACTOR\_DENOMINATOR | 1 | PEACE\_RM\_CLOSER\_TO\_THRONE\_FACTOR\_NUMERATOR / ( 1 + rank / PEACE\_RM\_CLOSER\_TO\_THRONE\_FACTOR\_DENOMINATOR ) |
| PEACE\_RM\_YOUTH\_FACTOR\_NUMERATOR | 3 | how much to value youth PEACE\_RM\_YOUTH\_FACTOR\_NUMERATOR / ( 1 + age / PEACE\_RM\_YOUTH\_FACTOR\_DENOMINATOR ) |
| PEACE\_RM\_YOUTH\_FACTOR\_DENOMINATOR | 30 | PEACE\_RM\_YOUTH\_FACTOR\_NUMERATOR / ( 1 + age / PEACE\_RM\_YOUTH\_FACTOR\_DENOMINATOR ) |
| PEACE\_CEDE\_PROVINCE\_GORE\_FACTOR | -3 | multiplied by how many new country areas will be created |
| PEACE\_CEDE\_CITY\_BASE\_MULTIPLIER | 0.5 | Prefer taking provinces not cities |
| PEACE\_CEDE\_CITY\_REVOLT\_WAR | 0 | If the target is a rebellious province |
| PEACE\_GOLD\_REVOLT\_WAR | 0 | If the target is a rebellious province |
| PEACE\_OFFER\_ALLY\_DEFAULT\_FAIRNESS | 0.4 | Fraction of warscore Ai will distribute according to the war participation |
| PEACE\_CEDE\_PROVINCE\_ALLY\_DESIRE\_BASE | 0.7 | Base desire multiplier of giving a province to an ally in a peace deal. |
| PEACE\_CEDE\_PROVINCE\_ALLY\_DESIRE\_OUR\_CONQUER\_DESIRE\_FACTOR | 1 | Multiplies the desire of giving a province to an ally in a peace deal based on how much we desire the province. |
| PEACE\_OFFER\_TOO\_MUCH\_ALLY\_WARSCORE\_THRESHOLD | 1.25 | How much at most should we go above the promised warscore to our allies |
| PEACE\_OFFER\_ALLY\_NOT\_ENOUGH\_TO\_CARE\_THRESHOLD | 0.03 | If an ally is promised to get less than this % of warscore in the final offer Ai will ignore them |
| DEFAULT\_REGULAR\_ARMY\_PREFERENCE | 1 | Default number at 0% War Balance |
| DEFAULT\_LEVY\_ARMY\_PREFERENCE | 1 |  |
| DEFAULT\_MERCENARY\_ARMY\_PREFERENCE | 1 |  |
| REGULAR\_ARMY\_PREFERENCE\_FACTOR | 0 | How fast the preference goes down with War Balance increasing. The higher the number the less of those units will be used if we are stronger than the enemy. |
| LEVY\_ARMY\_PREFERENCE\_FACTOR | 0.5 | With negative numbers the reliance on those units will grow instead. |
| MERCENARY\_ARMY\_PREFERENCE\_FACTOR | 1.33 |  |
| MERCENARY\_ARMY\_PREFERENCE\_SMALL\_ALLY\_IGNORE\_THERSHOLD | 0.33 | How much we have to be losing to ignore the small ally factor and go all in anyway. Lower number = Need to be losing more. |
| MERCENARY\_ARMY\_PREFERENCE\_SMALL\_ALLY\_THRESHOLD | 0.05 | Minimum share of strength we can have before we start ignoring mercenaries |
| MERCENARY\_ARMY\_PREFERENCE\_SMALL\_ALLY\_FACTOR | 0.25 |  |
| DEFAULT\_REGULAR\_NAVY\_PREFERENCE | 1 |  |
| DEFAULT\_LEVY\_NAVY\_PREFERENCE | 1 |  |
| DEFAULT\_MERCENARY\_NAVY\_PREFERENCE | 1 |  |
| REGULAR\_NAVY\_PREFERENCE\_FACTOR | 0 | How fast the preference goes down with War Balance increasing. The higher the number the less of those units will be used if we are stronger than the enemy. |
| LEVY\_NAVY\_PREFERENCE\_FACTOR | 0.5 | With negative numbers the reliance on those units will grow instead. |
| MERCENARY\_NAVY\_PREFERENCE\_FACTOR | 1.33 |  |
| MERCENARY\_NAVY\_PREFERENCE\_SMALL\_ALLY\_IGNORE\_THERSHOLD | 0.33 | How much we have to be losing to ignore the small ally factor and go all in anyway. Lower number = Need to be losing more. |
| MERCENARY\_NAVY\_PREFERENCE\_SMALL\_ALLY\_THRESHOLD | 0.05 | Minimum share of strength we can have before we start ignoring mercenaries |
| MERCENARY\_NAVY\_PREFERENCE\_SMALL\_ALLY\_FACTOR | 0.25 |  |
| COURT\_LANGUAGE\_POWER\_DIFFERENCE\_NEEDED | 0.8 | How much more powerful a language needs to be in order to be considered a potential court language |
| LITURGICAL\_LANGUAGE\_POWER\_DIFFERENCE\_NEEDED | 0.8 | How much more powerful a language needs to be in order to be considered a potential liturgical language |
| COMMON\_LANGUAGE\_PREFERENCE\_FACTOR | 2 | How much more powerful we consider our common language when changing it |
| COMMON\_LANGUAGE\_PREFERENCE\_BASE | 0.05 | How much more powerful we consider our common language when changing it - static value in case our language has 0% power |
| COURT\_LANGUAGE\_OVERLORDS\_COURT\_LANGAUGE\_MODIFIER | 1 | How much more powerful we consider our Overlord's court language when changing it. Scaled by Subject Loyalty |
| COURT\_LANGUAGE\_NEGATIVE\_CULTURE\_OPINION\_FACTOR | 0 | Don't adopt a language of a culture we don't like |
| LANGUAGE\_DEAD\_BASE\_FACTOR | 0.05 | AI utility multiplier for a language when no pops in the country speak it. Lower = dead liturgical languages get crushed in court-language scoring. |
| MINIMUM\_MONTHS\_BETWEEN\_EXPANSION | 12 |  |
| SUBJUGATION\_EXPANSION\_FACTOR | 0.75 |  |
| DEFAULT\_AGGRESSIVENESS | -1.05 | Higher = more aggressive |
| POWER\_BALANCE\_AGGRESSIVENESS\_FACTOR | 20 | Higher = more aggressive against weak enemies, more cautious against strong enemies |
| EXPANSION\_SCORE\_OPINION\_FACTOR | 1 | How much opinion matters when choosing conquest targets. Keep it between 0-1 |
| ROYAL\_MARRIAGE\_CONQUEST\_FACTOR | 0.1 |  |
| ROYAL\_MARRIAGE\_SUBJUGATION\_FACTOR | 1.25 |  |
| GUARANTEEING\_CONQUEST\_FACTOR | 0 |  |
| GUARANTEEING\_SUBJUGATION\_FACTOR | 1.1 |  |
| ALLIANCE\_CONQUEST\_FACTOR | 0 |  |
| ALLIANCE\_SUBJUGATION\_FACTOR | 1.25 |  |
| RIVAL\_CONQUEST\_FACTOR | 1.25 |  |
| RIVAL\_SUBJUGATION\_FACTOR | 0 |  |
| AI\_USE\_CONQUER\_CB\_FACTOR | 25 | AI score multiplier for attacking someone where we have an available CB with better or equal than no cb conquer cost |
| AI\_DYNASTIC\_RESTRAINT\_HEIRLESS\_MULTIPLIER | 0.05 | Tier A — near-veto when a royal marriage exists and target has no heir (imminent PU window). Stacks with ROYAL\_MARRIAGE\_CONQUEST\_FACTOR above (0.1 \* 0.05 = 0.005 effective). |
| AI\_DYNASTIC\_RESTRAINT\_SHARED\_HEIR\_MULTIPLIER | 0.25 | Tier B — strong restraint when our heir and their heir share a dynasty (PU set up for next succession).Stacks with ROYAL\_MARRIAGE\_CONQUEST\_FACTOR above (0.1 \* 0.25 = 0.025 effective). |
| DYNASTIC\_HEIRLESS\_MARRIAGE\_FACTOR | 2 | Personality marriage-partner boost: heirless candidates get vScore \*= (1 + DynasticBias \* FACTOR). At DynasticBias = 1.0 and factor = 2.0, score triples — strong enough to overcome economic-base size differences with mid-tier partners. |
| NAVY\_COMPARABILITY\_RATIO | 0.5 | CCountry::HasAtLeastComparableNavyTo threshold. Replaces a strict-superiority navy check in the AI's cross-water reachability filter. 0.5 means a country with half the enemy's navy (or more) is still allowed to consider cross-water targets; the previous gate required strict superiority and was hiding Bosphorus-style strait crossings entirely. |
| AI\_BORDERING\_CONQUEST\_FACTOR | 2 |  |
| DISTANT\_WAR\_BORDER\_DISTANCE | 100 |  |
| DISTANT\_WAR\_CONQUEST\_FACTOR | 0.1 |  |
| DISTANT\_WAR\_SUBJUGATION\_FACTOR | 0.33 |  |
| NO\_CASUS\_BELLI\_CONQUEST\_FACTOR | 0.8 |  |
| NO\_CASUS\_BELLI\_AND\_NO\_PARLIAMENT\_CONQUEST\_FACTOR | 0.25 |  |
| EXPANSION\_TARGET\_SCORE\_NEEDED\_TO\_KEEP | 15 |  |
| EXPANSION\_TARGET\_SCORE\_NEEDED\_TO\_PICK | 20 |  |
| AI\_NUM\_EXPANSION\_TARGETS | 20 | AI will evaluate war against the top AI\_NUM\_EXPANSION\_TARGETS targets, more is worse performance but possibly can find more attack targets |
| AI\_SUBJUGATION\_OBJECTIVE\_MONTHLY\_CHANCE | 0.083 | 1/12 Once per year on average |
| AI\_SUBJUGATION\_OBJECTIVE\_MAX\_ALLOWED | 2 | maximum allowed parallel ongoing ai subjugation objectives |
| PEACE\_MILITARY\_ACCESS\_NEIGBOURS\_FACTOR | 10 |  |
| PEACE\_MILITARY\_FLEET\_BASING\_AREAS\_FACTOR | 10 |  |
| PEACE\_MILITARY\_ANTI\_PIRACY\_LOCATIONS\_FACTOR | 3 |  |
| MIN\_MONTHS\_BETWEEN\_REJECTED\_OFFERS | 48 |  |
| LOCAL\_POPULATION\_IMPORTANCE | 4 |  |
| MAX\_VALUE\_SAMPLES\_FOR\_TARGETTED\_ACTIONS | 6 | when looking for a value in targeted actions, how many iterations will we do before settling on the best value we found |
| MONTHS\_TO\_WAIT\_FOR\_CASUS\_BELLI | 24 | How many months will Ai wait for a potential casus belli from script before declaring a no CB or abandoning the war |
| MONTHS\_TO\_WAIT\_FOR\_MAINTENANCE | 3 | How many months will Ai wait for maintenance sliders to go up before declaring a war |
| PEACE\_DEAL\_BASE\_CONTRIBUTION | 0 |  |
| PEACE\_DEAL\_CONTRIBUTION\_TAX\_BASE\_FACTOR | 0.25 |  |
| PEACE\_DEAL\_CONTRIBUTION\_BASE\_MODIFIER | 1 |  |
| PEACE\_DEAL\_CONTRIBUTION\_PARTICIPATION\_FACTOR | 1 |  |
| PEACE\_DEAL\_CONTRIBUTION\_NEGOTIATION\_POWER\_FACTOR | 1 |  |
| PEACE\_DEAL\_CONTRIBUTION\_OPINION\_FACTOR | 0.5 |  |
| PEACE\_DEAL\_INTEGRATION\_LIMIT\_MULTIPLIER | 2 |  |
| PEACE\_DEAL\_ADDITIONAL\_INTEGRATION\_LIMIT | 0 | If a peace deal would require more than (Cabinet size + PEACE\_DEAL\_ADDITIONAL\_INTEGRATION\_LIMIT) \* PEACE\_DEAL\_INTEGRATION\_LIMIT\_MULTIPLIER to integrate it won't be accepted, set to -1 so the limit is ignored. |
| PEACE\_DEAL\_PROMISED\_LAND\_GUARANTEED\_PARTICIPATION | 0.75 | How much warscore share Ai expects and will give if it was promised or itself promised land based on war participation |
| MOVE\_CAPITAL\_TOTAL\_LOCATIONS\_THRESHOLD | 0.33 |  |
| MOVE\_CAPITAL\_CURRENT\_CAPITAL\_AREA\_SCORE\_FACTOR | 3 |  |
| MOVE\_CAPITAL\_TAX\_BASE\_FACTOR | 1 |  |
| MOVE\_CAPITAL\_POPULATION\_FACTOR | 0.1 |  |
| MOVE\_CAPITAL\_LOCATION\_RANK\_FACTOR | 1 |  |
| WAR\_PLANNER\_AUTOCALL\_ATTACKER\_FACTOR | 0.9 | How much "power" does a nation add to a potential war if they are on attackers side and are autocalled |
| WAR\_PLANNER\_CAN\_CALL\_ATTACKER\_FACTOR | 0.5 | If they can be called on attackers side |
| WAR\_PLANNER\_CAN\_CALL\_DEFENDER\_FACTOR | 0.75 | If they can be called on defenders side |
| AI\_MAX\_PROVINCES\_TO\_INTEGRATE\_PER\_CABINET\_MEMBER | 4 | How many provinces will Ai accept over their cabinet size before they start releasing subjects. |
| AI\_RELEASE\_SUBJECT\_AREA\_MINIMUM\_SIZE | 6 | Minimum owner area size neede for an AI to release that area as a subject |
| AI\_BUFFER\_TAX\_BASE\_FACTOR | 3 | AI will save their taxbase multiplied by this for buffer for sudden expenses like event options and hiring mercs |
| AI\_HIGH\_OPINION\_THRESHOLD | 100 | Makes ai use certain interactions with countries with that opinion, only checks Our opinion of Them |
| AI\_LOW\_OPINION\_THRESHOLD | -100 |  |
| MONTHS\_TO\_WAIT\_BEFORE\_DECLARING\_IO\_WARS | 4 | IOs like coalitions will wait that many months before they consider declaring a war |
| POWERBALANCE\_NEEDED\_FOR\_EARLY\_IO\_WAR | 1.5 | If the strength of an IO is that much stronger than the target, they will declare ignoring the MONTHS\_TO\_WAIT\_BEFORE\_DECLARING\_IO\_WARS |
| POWERBALANCE\_NEEDED\_FOR\_IO\_WAR | 1.1 | If the strength of an IO is that much stronger than the target , they will declare after waiting for MONTHS\_TO\_WAIT\_BEFORE\_DECLARING\_IO\_WARS |
| NO\_CASUS\_BELLI\_SELECTION\_PENALTY | -100 | How less likely will Ai be to select this as the best casus belli |
| DEFAULT\_CHANCE\_OF\_EXPANSION | 0.25 | How likely AI is to start a war plan against other nations each month |
| CHANCE\_OF\_EXPANSION\_AGGRESSIVENESS\_SCALE | 10 | How the aggressiveness\_modifier is scaled when used for chance of expansion |
| PARLIAMENT\_IN\_SESSION\_EXPANSION\_CHECK\_MULTIPLIER | 5 | How more likely a country is to check new expansion paths if their parliament is in session |
| PARLIAMENT\_IN\_SESSION\_MONTHS\_BETWEEN\_WARS\_MULTIPLIER | 0.25 | Multiplies the months between wars modifier if parliament is currently in session |
| AI\_WAR\_EXHAUSTION\_EXPANSION\_PENALTY | 0.1 | Penalty to the chance to start new wars per war exhaustion |
| AI\_UNINTEGRATED\_LAND\_EXPANSION\_PENALTY | 2 | e.g. 50% unintegrated land with value 2 = -100% chance to expand |
| AI\_UNINTEGRATED\_LAND\_EXPANSION\_PENALTY\_MINIMUM | 5 | Needs at least 5 unintegrated locations to apply AI\_UNINTEGRATED\_LAND\_EXPANSION\_PENALTY |
| RANDOM\_RANGE\_OF\_EXPANSION\_SORTING\_VALUES | 0.25 | -25% to 25% will be added to the sorting value of expansion targets to make it more varied |
| SAFE\_AMOUNT\_OF\_ANTAGONISM | 30 | Ai will try not to expand above this, it's NOT their target antagonism when peacing out |
| SAFE\_AMOUNT\_OF\_WAR\_EXHAUSTION | 5 | Ai will try not to expand above this WE |
| SAFE\_THREAT\_LEVEL\_DEFEND\_OBJECTIVE\_KEEP | 0.6 | Threat level below that will cause defend objectives to be abandoned |
| SAFE\_WIN\_CHANCE\_DEFEND\_OBJECTIVE\_KEEP | 0.4 | Win chance above that will cause defend objectives to be abandoned |
| SAFE\_THREAT\_LEVEL\_DEFEND\_OBJECTIVE | 0.6 | Threat level below that will cause defend objectives to be abandoned |
| SAFE\_WIN\_CHANCE\_DEFEND\_OBJECTIVE | 0.4 | Win chance above that will cause defend objectives to be abandoned |
| AI\_VERY\_SMALL\_TARGET\_THRESHOLD | 0.05 | If Targets tax base is lower than Actors tax base \* this, apply the multiplier |
| AI\_VERY\_SMALL\_TARGET\_MULTIPLIER | 0.1 | See above, it won't make the conquest score go below the value needed to pick if the original value |
| AI\_GLOBAL\_INTEGRATION\_SPEED\_UTILITY | 1 | utility for global integration speed multiplied by ratio of unintegrated land |
| AI\_ENEMY\_LAND\_SUPREMACY\_THRESHOLD | 3 | If enemies have this much more land armies than us and we are in a defensive war then we will hang back and defend |
| AI\_REASSIGN\_UNIT\_THRESHOLD | 1.33 | how much more score is needed for a new objective in order for a unit to be reassigned to it |
| AI\_MAX\_RECRUIT\_DISTANCE\_FROM\_UNIT | 500 | maximum distance allowed from where a unit recruit is started to which unit it is supposed to join into |
| MILITARY\_ACCESS\_MAX\_OBJECTIVES | 3 |  |
| THREAT\_CALCULATION\_BASE\_VALUE | 10 |  |
| THREAT\_CALCULATION\_OPINION\_DIVISOR | 50 |  |
| THREAT\_CALCULATION\_ANTAGONISM\_DIVISOR | 5 |  |
| THREAT\_DANGEROUS\_SCORE | 2.5 | Threat score above this can't be dealt with by just fighting it alone, AI will seek strong allies |
| LAW\_TARGET\_UTILITY\_VALUE | 25 | Additional utility for AI if they need a law for a mission |
| POLICY\_TARGET\_UTILITY\_VALUE | 50 | Additional utility for AI if they need a policy for a mission |
| PARLIAMENT\_CALLED\_TARGET\_UTILITY\_VALUE | 25 | Additional utility for AI if they need a parliament called |
| PARLIAMENT\_SUPPORT\_TARGET\_UTILITY\_MODIFIER | 1 | Additional utility for AI if they need parliament support for each % |
| AI\_MISSION\_CURRENCY\_TARGET\_UTILITY\_MODIFIER\_MORE | 0.15 |  |
| AI\_MISSION\_CURRENCY\_TARGET\_UTILITY\_MODIFIER\_LESS | -0.15 |  |
| AI\_MISSION\_LOCATION\_TARGET\_UTILITY\_VALUE | 10 |  |
| AI\_CLAN\_BUILDING\_DISTANCE\_PENALTY\_FACTOR | 0.005 | Proximity penalty for building-based clan foreign building placement. Utility is multiplied by 1/(1 + distance \* factor). At factor 0.005: distance 100 -> 0.67x, distance 200 -> 0.5x. |
| AI\_CONQUER\_DESIRE\_DISTANCE\_BASE | 100 |  |
| AI\_CONQUER\_DESIRE\_DISTANCE\_PER\_COUNTRY\_SIZE | 0.5 |  |
| AI\_CONQUER\_DESIRE\_DISTANCE\_PER\_AGE | 50 |  |
| AI\_CONQUER\_DESIRE\_DISTANCE\_MULTIPLIER | -0.1 | Penalty for ai to attack targets far away |
| AI\_CONQUER\_DESIRE\_NAVAL\_DISTANCE\_MULTIPLIER | -0.5 | Penalty for ai to attack targets far away over sea, smaller number means more likely to attack |
| AI\_CONQUER\_DESIRE\_MAX | 100 |  |
| AI\_CONQUER\_DESIRE\_THROUGH\_SUBJECT\_MULT | 0.5 | Score mult when you have to go through your subject to reach enemy |
| AI\_CONQUER\_DESIRE\_CAPITAL\_DISTANCE | 100 | After this map distance locations starts getting a penalty from being too far away from capital |
| AI\_CONQUER\_DESIRE\_CAPITAL\_DISTANCE\_MIN\_FACTOR | 0.05 | Minimum allowed multiplier from distance to capital |
| AI\_CALL\_ALLY\_STRENGTH\_BALANCE\_THRESHOLD | 0.75 | AI will not call in allies if war balance is over this |
| AI\_CEDE\_TREATY\_DISTANCE | 500 |  |
| AI\_STABILITY\_LOWER\_LIMIT | -50 |  |
| AI\_GOVERNMENT\_POWER\_LOWER\_LIMIT | 50 |  |
| AI\_NORMAL\_SATISFACTION\_TARGET | 0.5 |  |
| AI\_SAVING\_MODE\_SATISFACTION\_TARGET | 0.4 |  |
| BUILDING\_LOW\_PRODUCTION\_EFFICIENCY\_IMPACT\_ON\_RGO | 5 |  |
| AI\_ASSAULT\_FORT\_NO\_BREACH\_STRENGTH\_NEEDED | 3 |  |
| AI\_ASSAULT\_FORT\_BREACH\_STRENGTH\_NEEDED | 1.5 |  |
| AI\_ASSAULT\_FORT\_NEARBY\_ENEMY\_MAX\_RADIUS | 3 |  |
| AI\_LOCAL\_POPULATION\_CAPACITY\_UTILITY | 0.01 |  |
| AI\_IMPROVE\_RELATIONS\_IMPACT\_UTILITY | 0.08 |  |
| AI\_POP\_FOOD\_CONSUMPTION\_MODIFIER\_UTILITY | -0.05 |  |
| AI\_GARRISON\_SIZE\_UTILITY | 0.05 |  |
| AI\_DIPLOMATIC\_CAPACITY\_UTILITY | 0.05 |  |
| AI\_DIPLOMAT\_UTILITY | 0.0075 | utility for having diplomats, increased x10 when needed for import diplo actions like peacing out |
| AI\_ANNEX\_UTILITY | 0.25 | utility for base annexation speed per ongoing annexation, diminishing quadratic |
| AI\_ANNEX\_UTILITY\_OTHER\_SUBJECTS | 0.05 | utility for base annexation speed for every other vassal not being annexed, important due to modifiers related to relatvie subject tax base on crown power |
| AI\_LOCAL\_TRADES\_PER\_BURGHER\_UTILITY | 0.001 |  |
| AI\_SUBJECTS\_LOYALTY\_UTILITY | 0.1 |  |
| AI\_ESTATE\_ROADS\_UTILITY | 10 |  |
| AI\_MERCENARY\_COST\_UTILITY | -0.15 |  |
| AI\_LOGISTIC\_DISTANCE\_UTILITY | 0.005 |  |
| AI\_LAND\_MORALE\_MODIFIER\_UTILITY | 0.25 |  |
| AI\_LAND\_MORALE\_UTILITY | 0.15 |  |
| AI\_LAND\_MORALE\_ATTRITION\_UTILITY | -4.5 |  |
| AI\_LAND\_MORALE\_MOVEMENT\_COST\_UTILITY | -50 |  |
| AI\_GOVERNMENT\_SIZE\_UTILITY | 0.5 |  |
| AI\_SATISFACTION\_RECOVERY\_UTILITY | 5 |  |
| AI\_SATISFACTION\_DECAY\_UTILITY | -0.1 |  |
| AI\_MILITARY\_TACTICS\_UTILITY | 0.01 |  |
| AI\_LAND\_MORALE\_RECOVERY\_UTILITY | 1.25 |  |
| AI\_ARMY\_INITIATIVE\_UTILITY | 0.01 |  |
| AI\_ARMY\_DISCIPLINE\_UTILITY | 0.2 |  |
| AI\_UNIT\_CATEGORY\_POWER\_UTILITY | 0.08 |  |
| AI\_SCRIPTED\_OBJECTIVE\_INTERACTION\_SCORE\_BONUS | 25 |  |
| AI\_IO\_RESOLUTION\_PROPOSAL\_RANDOM\_INTERVAL | 250 |  |
| AI\_CALL\_FOR\_PEACE\_CHANCE\_MULTIPLIER | 0.25 |  |
| AI\_CONQUER\_TREATY\_DESIRE\_FROM\_WORTH\_MULT | 5 |  |
| AI\_CONQUER\_TREATY\_DESIRE\_NOT\_WARGOAL\_MULT | 0.5 |  |
| AI\_CHILD\_EDUCATION\_CHANGE\_THRESHOLD | 5 |  |
| AI\_CONQUER\_TREATY\_DESIRE\_WARGOAL\_BASE | 2 |  |
| AI\_CONQUER\_TREATY\_DESIRE\_SAME\_PROVINCE | 3 |  |
| AI\_CONQUER\_LOCATION\_TREATY\_BASE\_SCORE | 3 | base score for AI to pick locations in war goal |
| AI\_CONQUER\_LOCATION\_TREATY\_WAR\_WORTH\_FACTOR | 0.5 | How much AI cares about war worth when picking locations in peace deals |
| AI\_CONQUER\_TREATY\_DESIRE\_ADJECENT | 5 | score bonus for picking neighboring locations in peace deal, other locations get 1/bonus penalty |
| AI\_CONQUER\_TREATY\_DESIRE\_POTENTIAL\_BORDERGORE | 0.005 | Score penalty for when AI is taking a location that will maybe cause bordergore |
| AI\_CONQUER\_TREATY\_DESIRE\_SMALL\_AREA\_THRESHOLD | 5 | If an owner area is this small apply the bonus below to taking it |
| AI\_CONQUER\_TREATY\_DESIRE\_SMALL\_AREA\_FACTOR | 1.5 | Makes AI take small areas to prevent multiple wars against the same target |
| AI\_CONQUER\_TREATY\_DESIRE\_LOCATION\_DISTANCE\_DIVIDER | 250 |  |
| AI\_CONQUER\_TREATY\_DESIRE\_LOCATION\_DISTANCE\_FACTOR | -0.1 |  |
| AI\_CONQUER\_TREATY\_DESIRE\_LOCATION\_DISTANCE\_MAX | 1500 |  |
| AI\_REVOKE\_CORES\_DESIRE\_MULT | 0.1 |  |
| AI\_CONSTRUCTIONS\_PREDICTED\_INCOME\_MONTHS | 24 | How much more months of last median balance does the evaluator add to the utility bias for construction queue |
| AI\_CONSTRUCTIONS\_EMPTY\_QUEUE\_UPDATE\_MONTHS | 6 | Cooldown for construction queue if the previous recalc resulted in an empty queue |
| AI\_CONSTRUCTIONS\_CLEAR\_QUEUE\_MONTHS | 60 | After how many months will the construction queue be purged |
| AI\_CONSTRUCTION\_QUEUE\_SIZE\_OWNED\_LOCATIONS\_MULT | 0.25 | OwnedLocations \* this = How many buildings will be added to the queue at most |
| AI\_CONSTRUCTION\_QUEUE\_SIZE\_BUILDING\_PRICE\_REFERENCE | 60 | Additional buildings will be added to the queue if countries balance allows to build new buildings every 1-2 months, based on this reference |
| AI\_CONSTRUCTION\_QUEUE\_SIZE\_MINIMUM | 10 | Minimum allowed size of the build queue if you have low amount of locations |
| AI\_CONSTRUCTION\_QUEUE\_PARALLEL\_BUILD\_RATIO | 0.025 | 1 + OwnedLocations \* this = How many building candidates in AI queue will be built in a month |
| AI\_CONSTRUCTION\_QUEUE\_PARALLEL\_CHECK\_RATIO | 0.05 | 1 + OwnedLocations \* this = How many building candidates in AI queue will be checked in a month |
| AI\_CONSTRUCTION\_QUEUE\_PARALLEL\_BUILD\_MAX | 30 | Absolute cap on building candidates committed per firing; bounds per-spike cost for very large empires |
| AI\_CONSTRUCTION\_QUEUE\_PARALLEL\_CHECK\_MAX | 60 | Absolute cap on building candidates evaluated per firing; bounds per-spike cost for very large empires |
| AI\_CONSTRUCTION\_DAILY\_RANK\_BASE\_DIVISION | 4 | Max(this - CountryRank, 1) = BuildingAi will handle candidates every X months |
| AI\_LOAN\_CHECK\_DAYS | 3 | How often (in days) each country checks whether to repay loans or declare bankruptcy |
| CREDIT\_AUTOMATION\_LOAN\_COVERAGE\_MONTHS | 12 | Credit automation skips taking a loan if the treasury already covers this many months of the current deficit |
| AI\_SELL\_BONDS\_NEGATIVE\_BALANCE\_MONTHS | 12 | AI nations will sell government bonds if their gold reserves won't be enough to cover for that many months of their current negative balance |
| AI\_REDEEM\_BONDS\_UPDATE\_MONTHS | 3 | AI nations will check if they can redeem bonds every that many months |
| AI\_CONSTRUCTION\_QUEUE\_REPEAT\_MULT | 0.9 | PrevUtility \* pow(this, iteration) - AI\_CONSTRUCTION\_QUEUE\_REPEAT\_BIAS = Utility of a new candidate placed in the queue after starting a construction, each iteration of this check decreases the value |
| AI\_CONSTRUCTION\_QUEUE\_REPEAT\_BIAS | 0 | See above |
| AI\_MIN\_COUNTRY\_RANK | 1 | Clamped min country rank for AI |
| AI\_MAX\_COUNTRY\_RANK | 4 | Clamped max country rank for AI |
| AI\_MONTHLY\_DIPLOMATS\_THRESHOLD\_TO\_BUILD\_OPINION | 0.1 | Relevant country relation improvements will try to maintain that many monthly diplomats |
| AI\_MAX\_BUILD\_OPINION\_AT\_ONCE | 2 | How many relation improvements will AI countries maintain at once |
| AI\_MAX\_BUILD\_OPINION\_AT\_ONCE\_BUILDING\_BASED\_COUNTRIES | 16 | How many relation improvements will building based AI countries maintain at once |
| AI\_MIN\_DIPLOMATS\_TO\_MAINTAIN\_BEFORE\_IMPROVING | 2 | AI countries will try to have at least that many diplomatic actions before trying to improve relations |
| AI\_BUILD\_OPINION\_ALLY\_BIAS | 3 | Sorting bias for relevant countries if the actor is allied with them |
| AI\_BUILD\_OPINION\_HIGH\_ANTAGONISM\_BIAS | 5 | Sorting bias for relevant countries if the actor has high antagonism with them |
| AI\_BUILD\_OPINION\_NEIGHBOUR\_BIAS | 0.75 | Sorting bias for relevant countries if they are neighbors with the actor |
| AI\_BUILD\_OPINION\_BUILDING\_BASED\_AVERAGE\_TAX\_BASE\_FACTOR | 1 | Sorting bias for relevant countries if the actor is a BBC based on average tax base of the recipient |
| AI\_BUILD\_OPINION\_BUILDING\_BASED\_LOCATION\_COUNT\_FACTOR | 0.025 | Sorting bias for relevant countries if the actor is a BBC based on location count of the recipient |
| AI\_BUILD\_OPINION\_BUILDING\_BASED\_CITY\_COUNT\_FACTOR | 0.75 | Sorting bias for relevant countries if the actor is a BBC based on location with town or a city count of the recipient |
| AI\_BUILD\_OPINION\_GEOGRAPHY\_BIAS | 0.5 | Sorting bias for relevant countries in the same geography depending on country rank (area, region, superregion) |
| AI\_BUILD\_OPINION\_ALREADY\_IMPROVED\_THRESHOLD | 0.75 | Ai will skip trying to improve relations with relevant countries when the improved opinion modifier is at this fraction of the max value |
| AI\_BUILD\_OPINION\_CURRENT\_BIAS\_MAX | 75 | Ai will skip trying to improve relations with relevant countries when opinion is above that |
| AI\_BUILD\_OPINION\_MIN\_REMAINING | 5 | Ai will not start improving relations with relevant countries if the remaining improve relation amount is less than that |
| AI\_BUILD\_OPINION\_IMPROVE\_UNTIL | 100 | Ai will improve relations with relevant countries (neighbors, allies) up until this opinion |
| AI\_INCREASE\_OPINION\_OBJECTIVE\_SCORE | 1 | AI diplomatic priority |
| AI\_REDUCE\_ANTAGONISM\_OBJECTIVE\_SCORE | 2 | AI diplomatic priority |
| ``` Saving mode defines, used mainly when AI enters saving modes: low and high. Goal is to try to stay afloat during bankruptcies and repay loans ``` | | |
| AI\_HIGH\_DEBT\_RATIO\_TO\_TAX\_BASE | 10 | If debt is x times larger than the tax base of a country, high saving mode is enabled |
| AI\_SAVING\_MODE\_STABILITY\_THRESHOLD | 0 | See defines below |
| AI\_SAVING\_MODE\_LOW\_STABILITY\_GROWTH | 0.1 | Stability growth target when below AI\_SAVING\_MODE\_STABILITY\_THRESHOLD |
| AI\_SAVING\_MODE\_HIGH\_STABILITY\_GROWTH | 0 | Stability growth target when above AI\_SAVING\_MODE\_STABILITY\_THRESHOLD |
| AI\_SAVING\_MODE\_MONTHS\_TO\_REPAY\_DEBT | 60 | AI will try to have a balance which would allow to repay their debts in that many months |
| AI\_SAVING\_MODE\_GOVERNMENT\_POWER\_THRESHOLD | 85 | See defines below |
| AI\_SAVING\_MODE\_GOVERNMENT\_CRITICAL\_POWER\_THRESHOLD | 40 | See defines below |
| AI\_SAVING\_MODE\_VERY\_LOW\_GOVERNMENT\_POWER\_GROWTH | 0.3 | Government power growth per month target when government power is below AI\_SAVING\_MODE\_GOVERNMENT\_CRITICAL\_POWER\_THRESHOLD |
| AI\_SAVING\_MODE\_LOW\_GOVERNMENT\_POWER\_GROWTH | 0.15 | Government power growth per month target when government power is below AI\_SAVING\_MODE\_GOVERNMENT\_POWER\_THRESHOLD |
| AI\_SAVING\_MODE\_HIGH\_GOVERNMENT\_POWER\_GROWTH | 0.05 | Government power growth per month target when government power is above AI\_SAVING\_MODE\_GOVERNMENT\_POWER\_THRESHOLD |
| AI\_DEFAULT\_IO\_MAINETANCE\_VALUE | 0.5 | Default IO maintenance if it's not defined anywhere else |
| AI\_DEFAULT\_BUREAUCRACY\_MAINETANCE\_VALUE | 1 | Default bureaucracy maintenance if it's not defined anywhere else |
| AI\_SAVING\_BUREAUCRACY\_MAINETANCE\_VALUE | 0.7 | we're trying to save some moolah |
| AI\_SAVING\_MODE\_COLONIAL\_MAINTENANCE | 0.5 | Static colonial maintenance when in saving mode (or lower if it would mean a negative balance) |
| AI\_SAVING\_MODE\_EXPLORATION\_MAINTENANCE | 0.5 | Static exploration maintenance when in saving mode (or lower if it would mean a negative balance) |
| AI\_SAVING\_MODE\_CULTURAL\_MAINTENANCE | 0.25 | Static cultural maintenance when in saving mode (or lower if it would mean a negative balance) |
| AI\_SAVING\_MODE\_ALLOWED\_INFLATION\_MODIFIER\_LOW | 3 | Mult max allowed inflation by this much when in low saving mode |
| AI\_SAVING\_MODE\_ALLOWED\_INFLATION\_MODIFIER\_HIGH | 10 | Mult max allowed inflation by this much when in high saving mode |
| MAX\_ALLOWED\_INFLATION | 0.02 | AI target for inflation during normal times |
| AI\_PRIVILEGE\_LONG\_MODIFIER\_TRESHOLD | 24 | Ai will ignore modifiers giving global estate max tax when adding privileges if the modifier will last for longer than that many months |
| AI\_THREAT\_STRENGTH\_THRESHOLD | 0.5 | Ai will look for allies that would put them around this fraction of their targets strength |
| AI\_THREAT\_TOO\_HIGH\_THRESHOLD | 0.875 | Threat level (0 - 1, enemy strength divided by summed strength) at which AI will ignore a threat as it would require a big chain of allies |
| MAX\_ALLIES\_TO\_PICK\_AGAINST\_ENEMIES | 2 | Amount of allies which will be simultaneously worked towards when looking for allies |
| AI\_ALLIES\_SELECTION\_RANDOMNESS\_RANGE | 0.5 | Randomness added to the factor which is used when sorting nations when looking for alliances |
| AI\_TOO\_STRONG\_ALLY | 1.25 | Ai will try to avoid countries that would make the balance of power go above this fraction in comparison to their target strength when looking for allies against strong neighbors |
| AI\_TOO\_WEAK\_ALLY | 0.33 | Ai will try to avoid countries that are below this fraction of our strength when looking for allies against strong neighbors |
| AI\_DESIRED\_ARMY\_MANPOWER\_RECOVERY\_MONTHS | 48 | Ai will try to have enough manpower recovery to rebuild their whole current army in that many months |
| AI\_INDEPENDENCE\_WAR\_WIN\_CHANCE | 0.25 | Winchance above which AI will try to fight independence wars |
| AI\_ALLIES\_SELECTION\_NUM\_ALLIES\_FACTOR | -0.2 |  |
| ``` AI TECH ``` | | |
| AI\_UNLOCK\_UNIT\_SCORE\_PER\_AGE | 25 | AI score to unlock a unit based on age difference in that category |
| AI\_UNLOCK\_LEVY\_SCORE | 20 | AI Score to unlock levies multiplied by size of levy and size of poptype it applies to as % of country multiplied by unlocked unit score |
| AI\_UNLOCK\_SPECIAL\_UNIT\_FACTOR | 3 | score multiplier for AI to unlock techs that give special units |
| AI\_UNLOCK\_UNIT\_QUALITY\_SCORE | 100 | extra score based on quality difference between a current unit and its potential upgrade |
| ``` END OF AI TECH ``` | | |
| AI\_PEACE\_CHECK\_DAYS | 90 |  |
| AI\_REINFORCE\_BATTLE\_SIEGE\_ACCUMULATION\_LIMIT | 0 | AI will not leave a siege to reinforce a battle if the accumulation is above that |
| AI\_REINFORCE\_BATTLE\_DISTANCE\_LIMIT | 3 | AI will not look for battles to reinforce that are more than that many locations away |
| AI\_LOW\_FOOD\_PERCENTAGE\_THRESHOLD | 0.25 | AI will ask for food access more often if there are units in foreign countries with food capacity percentage below this value |
| AI\_REINFORCE\_BATTLE\_STRENGTH\_TRESHOLD | 0.55 | AI will not reinforce battles if their side already have this strength percentage compared to all units in the battle |
| AI\_REINFORCE\_BATTLE\_STRENGTH\_HELPER\_TRESHOLD | 0.1 | AI will not reinforce battles if the help that they can send divided by total strength in the battle is less than this |
| AI\_ENEMY\_STRENGTH\_NO\_SUPPORT\_ARMIES\_FACTOR | 2 | AI will not add support armies objectives if their army is at least that much stronger than the enemies |
| AI\_SUPPORT\_ARMIES\_DESIRED\_STRENGTH\_FACTOR | 0.33 | AI will try to use that much of their armies to support sieges and other units |
| AI\_CARPET\_SIEGE\_MAX\_ARMIES\_FACTOR | 0.1 | AI will use that many armies at most times number of locations to siege when carpet sieging |
| AI\_SUPPORT\_ARMIES\_POWER\_NEEDED\_FACTOR | 0.5 | AI will want to have at least that much combat power of the strongest enemy unit in units helping each siege |
| AI\_SUPPORT\_ARMIES\_POWER\_DESIRED\_FACTOR | 1 | AI will want to have ideally that much combat power of the strongest enemy unit in units helping each siege |
| AI\_HIGH\_CONQUER\_DESIRE\_THRESHOLD | 0.5 |  |
| AI\_DICE\_ROLL\_COMBAT\_WIN\_CHANCE\_FACTOR | 0.1 |  |
| AI\_ALREADY\_INSULTED\_FACTOR | 0.9 |  |

### Adjacencies

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| UV\_SCALE | 0.125 |  |
| SMOOTH\_FADE\_DISTANCE | 5 |  |
| SMOOTH\_ITERATIONS | 0 |  |
| SMOOTH\_KERNEL\_SIZE | 1 |  |
| TESSELATION\_MAX\_ANGLE | 5 |  |
| TESSELATION\_MIN\_DISTANCE | 0.1 |  |
| TESSELATION\_MAX\_DISTANCE | 1 |  |
| DEFAULT\_WIDTH | 1.5 |  |
| OPACITY\_FADE\_DISTANCE | 0.25 |  |
| GROUND\_OFFSET | 1 |  |
| MIDPOINT\_STRETCH | 0.01 |  |
| ADJUST\_UNDEFINED | 0.5 |  |

### AlertAudio

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` Wwise event played when an alert banner of the given priority appears. ``` | | |
| ALERT\_APPEAR\_BLUE | UI\_alert\_appear\_blue |  |
| ALERT\_APPEAR\_GREEN | UI\_alert\_appear\_green |  |
| ALERT\_APPEAR\_YELLOW | UI\_alert\_appear\_yellow |  |
| ALERT\_APPEAR\_ORANGE | UI\_alert\_appear\_orange |  |
| ALERT\_APPEAR\_RED | UI\_alert\_appear\_red | also used for War priority alerts |
| ALERT\_APPEAR\_BLACK | UI\_alert\_appear\_black |  |
| ALERT\_APPEAR\_PURPLE | UI\_alert\_appear\_purple |  |
| ALERT\_APPEAR\_DEFAULT | UI\_alert\_appear | fallback when an alert has no specific priority |

### BlockadeGraphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| SCHEMATIC\_NAME | blockade\_schematic |  |
| SCALING\_SPEED | 5 |  |
| FINAL\_SCALE | 0.5 |  |
| PORT\_DISPLACEMENT | { 0, 0, 2.2 } |  |
| OPACITY\_ZOOM\_STEP | 5 |  |

### Border

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` cull borders when zooming out ``` | | |
| MAX\_ZOOM\_STEP\_LOCATION | 12 | @province\_zoomstep\_max |
| MAX\_ZOOM\_STEP\_PROVINCE | 16 | @location\_zoomstep\_max |
| MAX\_ZOOM\_STEP\_AREA | 22 | @area\_zoomstep\_max |
| MAX\_ZOOM\_STEP\_COUNTRY | 22 |  |
| MAX\_ZOOM\_STEP\_WAR | 22 |  |
| MAX\_ZOOM\_STEP\_SELECTED | -1 | @location\_zoomstep\_max |
| MAX\_ZOOM\_STEP\_HIGHLIGHTED | -1 | @province\_zoomstep\_max |
| MAX\_ZOOM\_STEP\_IMPASSABLE | 8 | @province\_zoomstep\_max |
| MAX\_ZOOM\_STEP\_BLOCKADED | -1 | @province\_zoomstep\_max |
| MAX\_ZOOM\_STEP\_SEA\_LANE | 22 |  |
| SPLINE\_TESSELATION\_MAX\_ANGLE | 15 |  |
| SPLINE\_TESSELATION\_MAX\_DISTANCE | 10 |  |

### Character

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| BASE\_AMOUNT\_FOR\_COUNTRY | 1.25 | multiply with cabinet size. |
| MAX\_INFANT\_AGE | 2 |  |
| MAX\_CHILD\_AGE | 10 |  |
| MAX\_ADOLESCENT\_AGE | 15 |  |
| ADULT\_AGE | 16 |  |
| AI\_MIN\_MARRIAGE\_AGE | 19 |  |
| AI\_MAX\_FEMALE\_MARRIAGE\_AGE | 30 |  |
| OLD\_AGE\_MONTH\_CHANCE | 3 | 100 is dice roll |
| MAX\_CHARACTER\_AGE | 100 | hard cap; characters die when they reach this age |
| MAX\_PREGNANCY\_AGE | 40 | blocked above this |
| PREGNANCY\_AGE\_THRESHOLD | 35 |  |
| PREGNANCY\_CHANCE | 170 | 1000 is diceroll |
| PREGNANCY\_FERTILITY\_MIN\_REDUCTION | 12 |  |
| PREGNANCY\_FERTILITY\_MAX\_REDUCTION | 25 |  |
| MONTHLY\_STAT\_INCREASE\_CHANCE\_FOR\_CHILD | 55 | <= on 1d100 |
| MAX\_ABILITY\_VALUE | 100 |  |
| EXPLORER\_EXTRA\_LIFE | 15 |  |
| DYNASTY\_HEAD\_MARRY\_AGE | 25 |  |
| DYNASTY\_HEAD\_MARRY\_TARGET\_MIN\_AGE | 20 |  |
| DYNASTY\_HEAD\_MARRY\_TARGET\_MAX\_AGE | 32 |  |
| CHILD\_TRAIT\_AGE | 3 |  |
| YEARS\_OF\_RULING\_FIRST\_TRAIT | 1 |  |
| YEARS\_OF\_RULING\_SECOND\_TRAIT | 10 |  |
| YEARS\_OF\_RULING\_THIRD\_TRAIT | 25 |  |
| CABINET\_TRAIT\_GAIN\_CHANCE | 2 | monthly chance vs d100 to get a trait |
| LEADER\_COMBAT\_TRAIT\_GAIN\_CHANCE | 0.5 | dice 100 less than Chance \* Tradition gained in battle |
| EDUCATION\_AGE | 3 |  |
| MAX\_AGE\_SETUP\_ERROR\_LOG | 100 |  |
| INCOMPETENT\_TOTAL\_ABILITY\_THRESHOLD | 50 | If all the ability scores are added together and are still lower than this, the character is considered Incompetent and it will give you an Alert |
| INCOMPETENT\_AGE\_THRESHOLD | 10 | you won't get Alert until the Ruler/Heir is this age |
| RULER\_ATTRIBUTE\_IMPORTANCE | 1 |  |
| HEIR\_ATTRIBUTE\_IMPORTANCE | 0.9 |  |
| RULER\_OTHER\_CHILD\_ATTRIBUTE\_IMPORTANCE | 0.8 |  |
| HEIR\_OTHER\_CHILD\_ATTRIBUTE\_IMPORTANCE | 0.7 |  |
| OTHER\_CHARACTER\_ATTRIBUTE\_IMPORTANCE | 0.5 |  |
| ATTRIBUTE\_IMPORTANCE\_MULTIPLIER | 4 |  |
| ``` these modify liklihood of certain pops being used to generate a new character ``` | | |
| RANDOM\_CHARACTER\_CHANCE\_PRIMARY\_CULTURE\_MULTIPLIER | 80 | n-times more likely to select a Primary Culture pop |
| RANDOM\_CHARACTER\_CHANCE\_ACCEPTED\_CULTURE\_MULTIPLIER | 50 | n-times more likely to select an Accepted Culture Culture pop |
| RANDOM\_CHARACTER\_CHANCE\_TOLERATED\_CULTURE\_MULTIPLIER | 20 | n-times more likely to select an Tolerated Culture Culture pop |
| RANDOM\_CHARACTER\_CHANCE\_CULTURE\_OPINION\_MULTIPLIER | 1 | multiplies with primary culture's opinion of a pop's culture, e.g. if it was 10, Kindred 3 becomes 30. Same culture is treated as Kindred |
| RANDOM\_CHARACTER\_CHANCE\_RELIGION\_OPINION\_MULTIPLIER | 1 | multiplies with primary religion's opinion of a pop's religion, e.g. if it was 10, Kindred 3 becomes 30 |

### Cities

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` Select a province and use the "Cities.DrawDebugLines" for easy tweaking ``` | | |
| GRID\_TILE\_SIZE | 1.25 | Target size of the tiles in the grid. WARNING: this can be set through the user settings. |
| GRID\_TILE\_MIN\_RELATIVE\_SIZE | 0.2 | It is quite common for tiles close to water to be very small. All tiles that are smaller than GRID\_TILE\_SIZE \* GRID\_TILE\_MIN\_RELATIVE\_SIZE will be ignored |
| MESH\_GLOBAL\_SCALE\_FACTOR | 1.1 | A global multiplier on mesh scales. Preferred place to tweak scales is in gfx/map/city\_data |
| MAX\_ACTIVE\_SOUND\_EFFECTS | 5 |  |
| CULTURE\_THRESSHOLD | 0.05 | min percentage of the dominant culture that another culture hast to have to start being able to spawn buildings |

### CityAudio

From /Europa Universalis V/game/loading\_screen/common/defines/00\_defines.txt

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` From loading_screen/defines/00_defines.txt ``` | | |
| CONSTRUCTION\_AUDIO\_MODE | 2 | 0 = only on click, 1 = only on completion, 2 = both |
| CONSTRUCTION\_AUDIO\_MIN\_TIER | 1 | tier values below this are clamped up |
| CONSTRUCTION\_AUDIO\_MAX\_TIER | 6 | tier values above this are clamped down |
| CONSTRUCTION\_DEFAULT\_AUDIO\_CATEGORY | generic | fallback when a building's category has no audio\_category |
| ``` From loading_screen/defines/graphic/00_graphics.txt ``` | | |
| SCHEMATIC\_NAME | city\_audio |  |
| MAX\_ZOOM\_STEP | 3 |  |

### CityGraphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| FLAG\_MESH\_NAME | flag\_mesh | Use "simple\_plane\_A\_flag\_mesh" for better debugging of the flags |
| FLAG\_LOCATOR\_PREFIX | flag |  |
| FLAG\_LOOK\_DIRECTION | { 0, -1 } |  |
| FLAG\_TEXTURE\_SIZE | { 192, 128 } |  |
| LOW\_QUALITY\_FLAG\_TEXTURE\_SIZE | { 42, 28 } |  |
| LOW\_QUALITY\_FLAG\_CAMERA\_ZOOM\_LEVEL | 4 |  |
| TOOLTIP\_ZOOM\_LEVEL | 2 |  |
| FLAG\_POSITION | { 0, 0, 0 } |  |
| FLAG\_SCALE | 1 |  |
| MAX\_LOCATIONS\_REBUILT\_BY\_FRAME | 10 |  |
| COUNTRY\_COLOR\_BUILDING\_PRIMARY\_REPLACEMENT\_OPACITY | 1 |  |
| COUNTRY\_COLOR\_BUILDING\_SECONDARY\_REPLACEMENT\_OPACITY | 0.25 |  |
| COUNTRY\_COLOR\_BUILDING\_TERCIARY\_REPLACEMENT\_OPACITY | 0.25 |  |
| ``` These two defines create a curve that rescales the location's population for the pop_count contributors All pops up to the first threshold value will be scaled by the first scale factor, all pops from the first threshold value up to the second threshold value will be scaled by the second scale factor, etc. The last scale factor will be used for all pops above the last threshold value ``` | | |
| POP\_CURVE\_THRESHOLDS | { 10, 50, 100, 200, 400 } | Thousands of pops |
| POP\_CURVE\_SCALE\_FACTORS | { 2, 1, 0.9, 0.8, 0.7, 0.25 } |  |
| ``` Screen percentage culling values for city graphics This makes large cities be visible for a lot longer than small villages. Lower values mean that the city will be visible at a longer distance (a value of 50% means that the item will be culled if it takes up less than 50% of the screen height) Array values are used for different Map Object quality settings (off,low,medium,high) 'off' will disable all trees etc, but cities are still rendered. We could use the same settings as low, but this allows us to tweak them separately. ``` | | |
| DECAL\_CULL\_SCREEN\_PERCENTAGE | { 0.2, 0.125, 0.075, 0.05 } |  |
| ROAD\_CULL\_SCREEN\_PERCENTAGE | { 0.2, 0.125, 0.075, 0.05 } |  |
| MESH\_CULL\_SCREEN\_PERCENTAGE | { 0.075, 0.05, 0.04, 0.03 } |  |
| MESH\_CULL\_FADE\_RANGE | { 0.3, 0.25, 0.12, 0.08 } | this vale is in actual screen percentage, it's used for gradual mesh culling - when the "city's" screen percentage is MESH\_CULL\_SCREEN\_PERCENTAGE or lower all meshes are culled, when it's MESH\_CULL\_SCREEN\_PERCENTAGE + MESH\_CULL\_FADE\_RANGE or higher all meshes are visible |
| CULL\_FADE\_RANGE | { 0.1, 0.1, 0.1, 0.1 } | This value is in % of decal/road\_cull\_screen\_percentage |
| ``` Impostor settings Impostors are placed with the most important mesh directly on the city position (the locator), and subsequent meshes in a circle around it (filler slots). Some meshes can have the "exclusive" mode set, which means its mesh will be placed in the middle and scaled with EXCLUSIVE_SCALE. In this mode no other meshes will spawn If there's no exclusive mesh there's going to be 1 center piece mesh and up to FILLER_SLOT_COUNT filler meshes Some settings in the db can make the center-piece mesh use filler scale or center-piece scale ``` | | |
| IMPOSTOR\_EXCLUSIVE\_SCALE | 2.5 |  |
| IMPOSTOR\_CENTERPIECE\_SCALE | 2.25 |  |
| IMPOSTOR\_FILLER\_SCALE | 2 |  |
| IMPOSTOR\_FILLER\_SLOT\_COUNT | 5 |  |
| IMPOSTOR\_FILLER\_RADIUS | 3.5 |  |
| IMPOSTOR\_FILLER\_ROT\_OFFSET | 0.5s | This value is relative to SLOT\_COUNT. 1.0 means the rotation offset is "1 slot" - i.e if you have 4 slots, 1.0 means 90 degrees. |
| IMPOSTOR\_ZOOM\_STEP | 6 |  |
| IMPOSTOR\_MOVING\_STEP | 1 |  |
| ZOOM\_OUT\_STEP | 9 |  |
| INVISIBLE\_CITY\_TIME\_THRESHOLD | 600 |  |
| WALL\_HALF\_WIDTH | 0.4 |  |
| WALL\_BEZIER\_POWER | 0.35 |  |
| CITY\_SAFE\_GRID\_RADIUS | 5 |  |
| LAKES\_LAYERS | { lake\_layer } |  |

### Colony

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| BASE\_COST | 1 |  |
| DISTANCE\_COST\_FACTOR | 0.0005 |  |
| POPULATION\_COST\_FACTOR | 0.25 |  |
| POPULATION\_COST\_CAP | 3 |  |
| LOCATION\_MAX\_POP\_ALLOWED\_FOR\_COLONY | 50 |  |
| DEVELOPMENT\_AT\_NEW\_COLONY | 5 |  |
| SAME\_AREA\_COST\_FACTOR | -0.5 |  |
| SAME\_REGION\_COST\_FACTOR | -0.33 |  |
| POWER\_PROJECTION\_SPREAD | 0.005 |  |
| CONQUISTADOR\_CONSTRUCTION\_TIME | 90 | days |
| EXPLORATION\_CONSTRUCTION\_TIME | 270 | days |
| EXPLORATION\_BASE\_COST | 10 |  |
| EXPLORATION\_BASE\_TIME | 3 |  |
| EXPLORATION\_DISTANCE\_TIME | 9 |  |
| EXPEL\_TRIBAL\_BENEFIT\_DURATION | 120 |  |
| MAX\_CHARTERS\_IN\_PROVINCE | 3 |  |

### Combat

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| NAVAL\_LEVY\_IMPACT | 0.05 |  |
| RETREAT\_STRENGTH\_DAMAGE | 0.1 |  |
| GARRISON\_AFTER\_OCCUPATION | 0.01 |  |
| MORALE\_COLLAPSE\_THRESHOLD | 0.05 |  |
| MINIMUM\_COMBAT\_DURATION | 24 |  |
| MINIMUM\_NAVAL\_COMBAT\_DURATION | 72 | 3 game-days minimum for naval battles |
| NAVAL\_LOW\_MORALE\_THRESHOLD | 1.5 | below 50% of base naval morale (3.0) → shattered retreat to port |
| BOMBARD\_BASE\_CHANCE | 0.2 |  |
| BOMBARD\_HOURS | 5 |  |
| HOURS\_PER\_PHASE | 5 |  |
| COMBAT\_DICE\_SIDE | 10 |  |
| COMBAT\_BASE | 5 |  |
| COMBAT\_MAX | 15 |  |
| COMBAT\_DAMAGE\_MULT | 0.01 |  |
| COMBAT\_HOURLY\_MORALE\_TICK | 0.01 |  |
| COMBAT\_IMPRISONED\_UNIT\_DEATH\_RATE | 0.4 |  |
| STRAIT\_CROSSING\_DICE | -2 |  |
| RIVER\_CROSSING\_DICE | -1 |  |
| SEA\_LANDING\_DICE | -1 |  |
| FOOD\_PERCENTAGE\_LOST\_AT\_OCCUPATION | 0.9 | lost 90% at occupation.. |
| MAX\_FRONTAGE\_OVERSTACKING | 1.25 | 25% overstack in flanks. |
| LAND\_LEVY\_COMBAT\_IMPACT | 0.75 |  |
| INITIATIVE\_BASE\_CHANCE | 0.1 | base chance each tick |
| INITIATIVE\_CHANCE\_EACH | 0.02 | Chance to engage per point of initiative |
| INITIATIVE\_CHANCE\_HOURS | 0.01 | Chance to engage per hour passed (adds with INITIATIVE\_CHANCE\_EACH) |
| INITIATIVE\_CHANCE\_MAX | 0.1 | Cap on the initiative-derived part of engage chance, before base/hours add. Prevents stacked initiative + army\_initiative bonuses from snowballing engagement. |
| COMBAT\_SPEED\_SCALE | 0.05 |  |
| NAVAL\_EXPERIENCE\_DAMAGE\_REDUCTION | 0.5 |  |
| LAND\_EXPERIENCE\_DAMAGE\_REDUCTION | 0.5 |  |
| LAND\_STRENGTH\_DAMAGE\_MODIFIER | 0.2 |  |
| NAVAL\_STRENGTH\_DAMAGE\_MODIFIER | 0.25 |  |
| LAND\_MORALE\_DAMAGE\_MODIFIER | 1 |  |
| NAVAL\_MORALE\_DAMAGE\_MODIFIER | 0.2 |  |
| NOT\_ENGAGED\_STRENGTH\_DAMAGE\_MODIFIER | 1.1 |  |
| NOT\_ENGAGED\_MORALE\_DAMAGE\_MODIFIER | 1.2 |  |
| NAVY\_OVERRUN\_EXTRA\_CAPTURE\_CHANCE | 0.15 |  |
| NAVAL\_COMBAT\_DAMAGED\_SHIP\_EXTRA\_CAPTURE\_SCALE | 0.025 |  |
| NAVAL\_COMBAT\_SHIP\_STR\_SINK\_THRESHOLD | 0.1 | ships below this % have a chance of sinking when retreating. |
| NAVAL\_COMBAT\_DAMAGED\_SHIP\_SINK\_CHANCE | 10 | chance vs (1-100) dice to sink when retreating at below threshold |
| NAVAL\_RETREAT\_DAMAGE\_THRESHOLD | 0.5 | if below this % strength, check chance to retreat. |
| NAVAL\_RETREAT\_CHANCE | 10 | out of 100 if below the damage threshold, it will retreat .. combat speed increases it. |
| BASE\_MORALE\_DAMAGE | 1 |  |
| FOOD\_PERCENTAGE\_LOST\_AT\_RETREAT | 0.5 |  |
| EXPERIENCE\_GAIN | 30 |  |
| LAND\_WAR\_EXHAUSTION\_FROM\_LOSSES | 1 |  |
| NAVAL\_WAR\_EXHAUSTION\_FROM\_LOSSES | 1.5 | Multiplier on losses |
| MAX\_WAR\_EXHAUSTION\_FROM\_BATTLE | 5 |  |
| TRADITION\_GAIN\_LAND | 10 |  |
| TRADITION\_GAIN\_NAVAL | 20 |  |
| PRESTIGE\_VS\_RIVAL | 1.5 | prestige multiplier from battles vs rivals |
| PRESTIGE\_FROM\_LAND | 0.5 |  |
| PRESTIGE\_FROM\_NAVAL | 0.5 |  |
| DAYS\_PER\_SIEGE\_PHASE | 30 |  |
| MIN\_DAYS\_PER\_SIEGE\_PHASE | 7 |  |
| DAYS\_PER\_SIEGE\_PHASE\_WITHOUT\_FORT | 15 |  |
| SIEGE\_DISEASE\_IMPACT | 0.05 |  |
| SIEGE\_MAX\_FORT\_LIMIT\_BONUS | 8 |  |
| SIEGE\_REGIMENTS\_FOR\_ARTILLERY | 3 |  |
| SIEGE\_MEMORY | 11 |  |
| SIEGE\_WIN | 20 |  |
| MAX\_BREACH | 3 |  |
| BREACH\_REPAIR\_PER\_DAY | 0.01 |  |
| SIEGE\_SUPPLY\_SHORTAGE\_LOSS | 0.02 |  |
| SIEGE\_SUPPLY\_SHORTAGE\_IMPACT | 1 |  |
| SIEGE\_FOOD\_SHORTAGE\_LOSS | 0.03 |  |
| SIEGE\_FOOD\_SHORTAGE\_IMPACT | 2 |  |
| SIEGE\_WATER\_SHORTAGE\_LOSS | 0.05 |  |
| SIEGE\_WATER\_SHORTAGE\_IMPACT | 3 |  |
| SIEGE\_DEFENDER\_DESERTION\_LOSS | 0.1 |  |
| SIEGE\_DEFENDER\_DESERTION\_IMPACT | 2 |  |
| SIEGE\_BREACH\_LOSS | 0.05 |  |
| SIEGE\_BREACH\_IMPACT | 2 |  |
| SIEGE\_DAYS\_PER\_PHASE | 5 |  |
| ASSAULT\_ATTACKER\_LOSS | 2.5 |  |
| ASSAULT\_ATTACKER\_MORALE\_LOSS | 3 |  |
| ASSAULT\_DEFENDER\_LOSS | 0.03 |  |
| ASSAULT\_DEFENDER\_MORALE\_LOSS | 0.3 |  |
| ASSAULT\_DICE\_MODIFIER | 5 |  |
| ASSAULT\_WIDTH\_LIMIT | 1 |  |

### CombatPrediction

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| CLEAR\_VICTORY\_THRESHOLD | 2 |  |
| PROBABLE\_VICTORY\_THRESHOLD | 1 |  |
| LEADER\_CONTRIBUTION | 0.01 |  |
| STRENGTH\_THRESHOLD | 0.15 |  |
| STRENGTH\_CONTRIBUTION | 0.5 |  |
| MORALE\_THRESHOLD | 0.1 |  |
| MORALE\_CONTRIBUTION | 2 |  |
| QUALITY\_THRESHOLD | 0.1 |  |
| QUALITY\_CONTRIBUTION | 4.5 |  |
| TERRAIN\_CONTRIBUTION | 0.667 |  |
| UNPREDICTABLE\_SMALL\_BATTLE\_THRESHOLD | 0.1 |  |

### Country

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MONTHS\_FOR\_REBEL\_UPRISING\_EFFECT | 60 |  |
| SCRIPTED\_CORE\_DURATION\_YEARS | 100 |  |
| REBEL\_JOIN\_OTHER\_THRESHOLD | 0.75 |  |
| REBEL\_FORT\_LOYALTY\_BASE | 50 | base roll-to-stay-loyal chance (out of 100) when rebels spawn |
| REBEL\_FORT\_LOYALTY\_ESTATE\_SATISFACTION\_SCALE | 30 | max bonus from estate satisfaction (multiplied by satisfaction 0-1) |
| REBEL\_FORT\_LOYALTY\_ESTATE\_CATEGORY\_PENALTY | 15 | penalty when garrison estate matches rebel category |
| REBEL\_FORT\_LOYALTY\_LOW\_UNREST\_THRESHOLD | 3 | local\_unrest below this counts as "low" |
| REBEL\_FORT\_LOYALTY\_LOW\_UNREST\_BONUS | 10 | bonus when local\_unrest is below threshold |
| REBEL\_FORT\_LOYALTY\_CULTURE\_BONUS | 10 | bonus when fort location culture matches owner primary culture |
| REBEL\_FORT\_LOYALTY\_RELIGION\_BONUS | 10 | bonus when fort location religion matches owner religion |
| REBEL\_FORT\_LOYALTY\_HIGH\_PROGRESS\_THRESHOLD | 0.8 | rebel progress above this applies the high-progress penalty |
| REBEL\_FORT\_LOYALTY\_HIGH\_PROGRESS\_PENALTY | 20 | penalty applied when rebel progress exceeds threshold |
| REBEL\_FORT\_LOYALTY\_MIN | 10 | minimum loyalty chance after all modifiers |
| REBEL\_FORT\_LOYALTY\_MAX | 90 | maximum loyalty chance after all modifiers |
| BASE\_ESTATE\_POWER\_FROM\_CABINET | 0.25 |  |
| BASE\_ESTATE\_POWER\_FROM\_COMMAND | 0.25 |  |
| COUNTRIES\_GETTING\_SCORE | 20 |  |
| SCORE\_FACTOR | 0.5 |  |
| PEACE\_IMPACT\_ADM\_SCORE | 0.25 |  |
| PEACE\_IMPACT\_DIP\_SCORE | 0.25 |  |
| PEACE\_IMPACT\_MIL\_SCORE | 0.25 |  |
| PEACE\_IMPACT\_LENGTH\_IN\_YEARS | 3 |  |
| VICTORY\_CARD\_DECAY\_MONTHS | 120 | months to lose all score. |
| VICTORY\_CARD\_INCREASE\_MONTHS | 120 | months to gain all score. |
| VICTORY\_CARD\_BONUS\_SCORE | 1000 | score given per level |
| RANDOM\_PRIVATEER\_SPAWN\_POWER | 0.2 | how much power is added to privateers when they appear or get a random boost |
| SOCIAL\_VALUE\_REQUIREMENT\_FOR\_REFORM | 50 |  |
| SOCIETAL\_VALUE\_INERTIA\_SCALE | 100 |  |
| SOCIETAL\_VALUE\_MIN | -100 |  |
| SOCIETAL\_VALUE\_MAX | 100 |  |
| GRANT\_PRIVILEGE\_SATISFACTION\_IMPACT | 3 |  |
| REVOKE\_PRIVILEGE\_SATISFACTION\_BASE | -0.25 |  |
| REVOKE\_PRIVILEGE\_SATISFACTION\_IMPACT | -3 |  |
| GRANT\_PRIVILEGE\_PENALTY\_FOR\_OTHERS\_SCALE | -0.5 |  |
| PARLIAMENT\_AGENDA\_FOR\_OTHERS\_SCALE | -0.2 |  |
| POTENTIAL\_MISSION\_COUNT | 10 |  |
| COUNTRY\_PRIMARY\_COLOR\_LIST | normal\_colors |  |
| COUNTRY\_SECONDARY\_COLOR\_LIST | metal\_colors |  |
| COUNTRY\_TERTIARY\_COLOR\_LIST | normal\_colors |  |
| COUNTRY\_MAP\_COLOR\_LIST | normal\_colors |  |
| COUNTRY\_COLOR\_MIN\_SATURATION | 0.35 |  |
| COUNTRY\_COLOR\_MAX\_SATURATION | 1 |  |
| COUNTRY\_COLOR\_MIN\_VALUE | 0.7 |  |
| COUNTRY\_COLOR\_MAX\_VALUE | 1 |  |
| COUNTRY\_COLOR\_DISTANCE\_NEIGHBOUR | 0.1 |  |
| COUNTRY\_COLOR\_DISTANCE\_ORIGIN | 0.25 |  |
| MINIMUM\_GOLD | -99999999 |  |
| MAXIMUM\_GOLD | 99999999 |  |
| MAX\_MANPOWER\_YEARS | 5 |  |
| MAX\_SAILORS\_YEARS | 5 |  |
| BASE\_RESEARCH\_COST | 25 | is set when advance db is loaded. |
| BASE\_UNIQUE\_RESEARCH\_COST | 5 | is set when advance db is loaded. |
| AGE\_RESEARCH\_MODIFIER | 0.15 | multiplied per age.. |
| PREVIOUS\_AGE\_REDUCTION | -8 |  |
| INSTITUTION\_MINIMUM\_PERCENT | 0.2 |  |
| ``` Trade-spread of institutions: distance-discounted share of a market's trade with the embraced world ``` | | |
| INSTITUTION\_TRADE\_SPREAD\_RANGE\_HALFCOST | 50 | trade path cost at which a source market's contribution halves |
| INSTITUTION\_TRADE\_SPREAD\_SOFTKNEE | 0.25 | connectedness fraction at which trade spread reaches half of base |
| INSTITUTION\_TRADE\_MIN\_VOLUME | 10 | min total market throughput before trade spread applies |
| CABINET\_ACTION\_SKILL\_MODIFIER | 0.005 |  |
| ENSLAVE\_AT\_OCCUPATION\_DAY\_COOLDOWN | 240 | more than a year, should cover most back&forth shit. |
| ENSLAVE\_AT\_OCCUPATION | 0.15 | percentage of a pop to enslave on occupying a location |
| ENSLAVE\_FROM\_PRIVATEERS | 0.01 |  |
| MONTHLY\_PRIVATEER\_SLAVE\_CHANCE | 25 | less than this on a d1000 |
| ANNEX\_BASE\_COST | 200 |  |
| ANNEX\_COST\_PER\_LOCATION | 10 |  |
| ALERT\_HIGH\_WAR\_EXHAUSTION | 10 |  |
| ALERT\_HIGH\_COMPLACENCY\_VALUE | 60 |  |
| ALERT\_HIGH\_DOOM | 90 |  |
| ARMY\_LEVY\_RECRUITMENT\_TIME | 15 |  |
| NAVY\_LEVY\_RECRUITMENT\_TIME | 15 |  |
| LEVY\_RECOVERY\_MONTHS | 240 |  |
| LEVY\_RECRUIT\_THRESHOLD | 0.2 |  |
| ESTATE\_LEVY\_SATISFACTION\_THRESHOLD | 0.25 |  |
| ESTATE\_TAX\_SATISFACTION\_THRESHOLD | 0.01 |  |
| ESTATE\_SATISFACTION\_BUREAUCRACY | 0.01 |  |
| SLAVE\_MONTHLY\_MAX\_DISTRIBUTION | 0.25 |  |
| TRADE\_SLAVE\_FACTOR | 0.2 |  |
| COLONIAL\_MIGRATION\_DISTANCE\_FACTOR | 0.0001 |  |
| COLONIAL\_POWER\_PROJECTION\_THRESHOLD\_TO\_START | 25 |  |
| COLONIAL\_CHARTER\_MIN\_POPS\_TO\_TAKE\_LOCATION | 1 | 1000 |
| COLONIAL\_CHARTER\_MAX\_POPS\_TO\_TAKE\_LOCATION | 5 | 5000 |
| COLONIAL\_CHARTER\_PP\_POP\_TARGET\_IMPACT | 0.04 |  |
| CAPITAL\_MOVE\_BASE\_DAYS | 180 |  |
| CAPITAL\_MOVE\_DISTANCE\_FACTOR | 0.05 |  |
| MERCHANT\_DISTANCE\_COST\_DIVISOR | 1200 |  |
| MERCHANT\_MAINTENANCE\_COST | 0.25 |  |
| NEGATIVE\_CULTURE\_OPINION\_ON\_COUNTRY | 10 |  |
| NEGATIVE\_RELIGION\_OPINION\_ON\_COUNTRY | 10 |  |
| POSITIVE\_CULTURE\_OPINION\_ON\_COUNTRY | 5 |  |
| POSITIVE\_RELIGION\_OPINION\_ON\_COUNTRY | 5 |  |
| POP\_SATISFACTION\_NUDGE\_AFTER\_REANNEX | 0.5 |  |
| REBEL\_MONTHLY\_POWER\_SCALE | 0.01 |  |
| NATIONALISM\_BASE\_PROGRESS | 0.0025 |  |
| REBEL\_MONTHLY\_FOREIGN\_SUPPORT\_SCALE | 0.01 |  |
| REBEL\_DYNASTY\_SUPPORT | 0.001 |  |
| REBEL\_ESTATE\_INVEST\_IMPACT\_PER\_POP | 0.025 |  |
| REBEL\_LACK\_OF\_CONTROL\_FACTOR | 0.02 |  |
| REBEL\_ESTATE\_POWER\_FACTOR | 0.01 |  |
| REBEL\_POPULATION\_FRACTION\_IMPACT | 0.01 |  |
| REBEL\_NON\_INTEGRATED\_FACTOR | 0.01 |  |
| KARMA\_NEUTRAL\_THRESHOLD | 33 |  |
| KARMA\_POP\_SIZE\_CONVERSION\_MULTIPLY | 1 |  |
| KARMA\_DEVELOPMENT\_RELEASED\_MULTIPLY | 0.1 |  |
| KARMA\_DEVELOPMENT\_TAKEN\_MULTIPLY | -1 |  |
| KARMA\_ON\_DEATH\_MULTIPLY | 0.25 |  |
| REGIONAL\_FOOD\_BASE\_CAPACITY | 100 |  |
| EXTEND\_REGENCY\_YEARS | 5 |  |
| PRIVATEER\_MARITIME\_IMPACT | 0.01 |  |
| PRIVATEER\_NO\_SAILORS\_DECAY | 0.05 |  |
| PRIVATEER\_HARASSMENT\_IMPACT | -0.005 |  |
| PARLIAMENT\_DURATION\_DAYS | 180 |  |
| PARLIAMENT\_ISSUE\_THRESHOLD | 0.5 |  |
| PARLIAMENT\_AGENDA\_REPEAT\_FACTOR | -0.25 |  |
| PARLIAMENT\_ABOLISHED\_ESTATE\_SATISFACTION\_PENALTY | -0.2 |  |
| DURATION\_BEFORE\_PURGING\_INACTIVE\_COUNTRIES\_IN\_DAYS | 365 |  |
| PARLIAMENT\_COOLDOWN\_MONTHS | 59 |  |
| LOW\_CONTROL\_THRESHOLD\_FOR\_BEST\_TAX | 0.95 |  |
| BUREAUCRACY\_ENTRENCHMENT\_YEARS\_PER\_PHASE | 100 |  |
| BUREAUCRACY\_ENTRENCHMENT\_QUOTE\_PER\_PHASE | 50 |  |

### Culture

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ACCEPTED\_CULTURE\_BASE\_COST | 3 |  |
| TOLERATED\_CULTURE\_BASE\_COST | 1 |  |
| ACCEPTANCE\_OPINION\_POSITIVE\_FACTOR | -0.25 | Kindred and Positive |
| ACCEPTANCE\_OPINION\_NEGATIVE\_FACTOR | -0.5 | Enemy and Negative has a bigger impact |
| ACCEPTANCE\_LANGUAGE\_FACTOR | -0.15 |  |
| ACCEPTANCE\_LANGUAGE\_FAMILY\_FACTOR | -0.05 |  |
| ACCEPTANCE\_POP\_SIZE\_COUNTRY\_MULTIPLIER | 0.35 |  |
| ACCEPTANCE\_POP\_SIZE\_GLOBAL\_MULTIPLIER | 0.35 |  |
| ACCEPTANCE\_POP\_SIZE\_COUNTRY\_MIN\_MAX | { -0.35, 0.35 } |  |
| ACCEPTANCE\_POP\_SIZE\_GLOBAL\_MIN\_MAX | { -0.35, 0.35 } |  |
| ACCEPTANCE\_SHARED\_CULTURE\_GROUP\_FACTOR | -0.3 | the maximum. reduced by each unshared culture group |
| TRADITION\_DECAY | -0.05 |  |
| TRADITION\_POWER\_SCALE | 1000 |  |
| INFLUENCE\_POWER\_SCALE | 1000 |  |
| INFLUENCE\_DECAY | -0.05 |  |
| ARTIST\_INFLUENCE\_GAIN\_FACTOR | 2 |  |
| ARTIST\_MONTHLY\_PROGRESS | 0.01 |  |
| ART\_DESTROY\_CHANCE\_ON\_CONQUEST | 10 | % chance 0-100 |
| ART\_CAPTURE\_CHANCE\_ON\_CONQUEST | 40 | % chance 0-100 |
| STATE\_CLERGY\_LITURGICAL\_POWER | 20 |  |
| COUNTRY\_POWER\_COURT\_LANGUAGE | 1 |  |
| MERCHANT\_POWER\_COMMON\_LANGUAGE | 1 |  |
| CULTURAL\_INFLUENCE\_ON\_LANGUAGE\_POWER | 1 |  |
| MARKET\_TOTAL\_MERCHANT\_POWER\_ON\_LANGUAGE\_POWER | 1 |  |
| NOBLE\_LIKE\_LANGUAGE\_THRESHOLD | 0.5 |  |
| MINIMUM\_NAMES\_PER\_LANGUAGE | 10 | lowest number of male or female names in a language before throwing an error |
| CORE\_THRESHOLD | 0.5 |  |
| CULTURE\_WAR\_RANGE | 0.5 |  |
| ASSIMILATION\_SHARED\_CULTURE\_GROUPS\_MODIFIER | 0.3 |  |
| ASSIMILATION\_DOMINANT\_ACTOR\_CULTURE\_MODIFIER | 0.5 |  |
| ASSIMILATION\_SAME\_LANGUAGE\_MODIFIER | 0.5 |  |
| ASSIMILATION\_SAME\_LANGUAGE\_FAMILY\_MODIFIER | 0.1 |  |
| ASSIMILATION\_ACTOR\_AND\_TARGET\_HAVE\_MARKET\_LANGUAGE\_MODIFIER | 0.4 |  |
| ASSIMILATION\_ACTOR\_HAS\_MARKET\_LANGUAGE\_MODIFIER | 0.2 |  |
| ASSIMILATION\_TARGET\_HAS\_MARKET\_LANGUAGE\_MODIFIER | -0.2 |  |
| ASSIMILATION\_BURGHER\_MARKET\_LANGUAGE\_MIN\_MULTIPLIER | 0.01 | Burghers whose language matches the market language assimilate at (1 - market\_access), floored at this value, instead of being blocked outright |
| ASSIMILATION\_PRIMARY\_CULTURE\_MODIFIER | -1 | The primary culture is slowest to assimilate |
| ASSIMILATION\_ACCEPTED\_CULTURE\_MODIFIER | -0.75 | Accepted cultures are slower to assimilate because we already give them extra rights |
| ASSIMILATION\_TOLERATED\_CULTURE\_MODIFIER | -0.25 |  |
| ASSIMILATION\_IS\_MERGED\_CULTURE\_GROUP\_MODIFIER | 1 | if the owner culture is a Unified Culture Group and the target is part of that culture group |
| ASSIMILATION\_TARGET\_CULTURE\_OPINION\_OF\_OWNER\_MODIFER | 0.2 | range -3 to +3 |
| ASSIMILATION\_OWNER\_CULTURE\_OPINION\_OF\_TARGET\_MODIFER | -0.1 | range -3 to +3. negative because the more they like a culture, the less drive to eradicate it |
| ACCEPTED\_CULTURE\_SETUP\_ERROR\_IF\_ABOVE\_MAX | 2 | If setup country has this many accepted cultures above the max accepted cultures, throw an error |
| ACCEPTED\_CULTURE\_SETUP\_ERROR\_IF\_BELOW\_MAX | 1 | If setup country has this many accepted cultures below the max accepted cultures (and there are available targets inside the country), throw an error |

### Diplomacy

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| AUTO\_TIME\_OUT\_MONTHS | 2 |  |
| SEND\_GIFT\_COOLDOWN | 120 | months |
| REMOVE\_RIVAL\_COOLDOWN | 60 | months |
| SPYNETWORK\_VS\_RIVAL | 0.25 |  |
| BASE\_THREAT | 0.1 |  |
| THREAT\_DISTANCE\_FACTOR\_FOR\_RIVAL | 0.002 |  |
| THREAT\_DISTANCE\_SIZE\_SCALING | 0.1 | how much steeper distance attenuates a rival's threat per unit of size disparity (their economy / ours - 1); 0 restores flat distance for all |
| THREAT\_DISTANCE\_SIZE\_SCALING\_MAX | 5 | cap on the size-disparity distance multiplier, so a vastly larger rival's distance bites at most this many times harder than an equal's |
| THREAT\_COMPONENT\_DENOMINATOR\_FLOOR\_FRACTION | 0.5 | each threat axis is normalized by max( our stat, this fraction of their stat ), so a tiny country dividing by its own near-zero base can no longer explode the relative comparison |
| THREAT\_COMPONENT\_CAP | 1.5 | hard ceiling on each positive threat axis (economy / military / population), so no single comparison alone can push a country into Alarmed |
| THREAT\_BORDER\_PERCENTAGE\_FACTOR\_FOR\_RIVAL | 0.1 |  |
| THREAT\_FACTOR\_WHEN\_REDUCING | 0.25 |  |
| DISPOSITION\_BREAKDOWN\_MAX\_LOCATIONS | 5 | max coveted locations listed in the AI disposition breakdown tooltip |
| DISPOSITION\_THREAT\_HYSTERESIS | 0.15 | deadband below the threat thresholds (1.0 wary / 2.0 alarmed) a disposition must fall past before leaving that state, to stop monthly flicker |
| DISPOSITION\_OPPORTUNITY\_HYSTERESIS | 0.1 | same deadband below the 0.5 opportunity / rivalry gates |
| DISPOSITION\_FRIENDLY\_OPINION\_THRESHOLD | 75 | an otherwise-indifferent pair reads as friendly once opinion reaches this (OPINION range is -200..200) |
| DISPOSITION\_FRIENDLY\_TRUST\_THRESHOLD | 75 | ...or once trust reaches this (TRUST range is 0..100, equilibrium 50) |
| DISPOSITION\_FRIENDLY\_HYSTERESIS | 5 | deadband below the friendly opinion/trust thresholds a pair must fall past before leaving the friendly state |
| DISPOSITION\_MESSAGE\_RELEVANCE\_RATIO | 2 | a non-neighbor with no relations is named in the disposition-change digest only if its economy is at least this multiple of the player's |
| NOTABLE\_DISPOSITIONS\_MAX | 5 | max stances listed in a foreign country's "notable stances" panel block |
| MULTIPLE\_ANNEX\_PENALTY | -0.5 |  |
| SUBJECT\_LOYALTY\_ANNEXATION\_SPEED\_FACTOR | 0.2 |  |
| SUBJECTS\_STRENGTH\_THRESHOLD | 0.25 |  |
| SUBJECTS\_STRENGTH\_SCALE | -2 | default value |
| LOYALTY\_FROM\_INDEPENDENCE\_MOVEMENT\_SCALE | 10 | how much each unit of relative IO strength reduces loyalty |
| LOYALTY\_FROM\_INDEPENDENCE\_MOVEMENT\_MAX | 20 | maximum loyalty reduction from independence movement strength |
| GOOD\_RELATION\_THRESHOLD\_FOR\_BUILDINGS | 100 |  |
| RIVAL\_OPINION\_THRESHOLD | 100 |  |
| FRIENDLY\_CULTURE\_SCALE\_ON\_SHARED\_BORDER | 0.1 |  |
| MAKE\_SUBJECT\_PEACE\_POP\_NATION | 25 |  |
| PEACE\_BUILD\_LEVEL\_SCALE | 0.2 |  |
| PEACE\_BUILD\_CAP | 90 |  |
| ``` base ``` | | |
| SUBJECT\_UPKEEP\_BASE | 0.1 |  |
| SUBJECT\_UPKEEP\_ECONOMY\_RATIO\_SCALE | 2 |  |
| SUBJECT\_UPKEEP\_ECONOMY\_MIN | 0.1 |  |
| ``` modifiers ``` | | |
| SUBJECT\_UPKEEP\_RANK\_SCALE | 0.2 |  |
| SUBJECT\_UPKEEP\_COMMON\_DIALECT | -0.1 |  |
| SUBJECT\_UPKEEP\_COMMON\_LANGUAGE | -0.05 |  |
| SUBJECT\_UPKEEP\_COMMON\_RELIGION | -0.1 |  |
| SUBJECT\_UPKEEP\_COMMON\_GROUP | -0.05 |  |
| TOO\_DISLOYAL\_THRESHOLD | 50 |  |
| DISLOYAL\_REVENUE\_SCALE | -0.02 |  |
| CALL\_FOR\_PEACE\_THRESHOLD\_MONTHS | 60 |  |
| CALL\_FOR\_PEACE\_WARSCORE\_LIMIT | 67 |  |
| CALL\_FOR\_PEACE\_FROM\_UNCONDITIONAL\_SURRENDER | 3 |  |
| UNCONDITIONAL\_SURRENDER\_MONTHS | 2 | Months before unconditional surrender starts having an effect on Call for Peace. Set to negative values to disable feature. |
| UNCONDITIONAL\_SURRENDER\_MIN\_MONTHS | 12 | cannot surrender before the war is this long |
| UNCONDITIONAL\_SURRENDER\_WARSCORE\_LIMIT | -90 | AI won't surrender unless it's this bad. |
| MINIMUM\_STRENGTH\_TO\_AVOID\_UNCONDITIONAL\_SURRENDER | 0.15 |  |
| ACCEPTABLE\_BALANCE\_DEFAULT | 1.2 |  |
| UNCONDITIONAL\_SURRENDER\_HOPELESS\_STRENGTH\_COMPARISON | 20 | if they have 20 times the army strength you do, wave the white flag |
| STABILITY\_BLOCK\_THRESHOLD | -50 |  |
| STAB\_HIT\_GOOD\_PEACE | -10 |  |
| SELL\_CORE\_STABILITY\_COST | -20 | Stability lost per core location sold diplomatically |
| SELL\_CORE\_REBEL\_MODIFIER\_YEARS | 10 | Duration in years of the rebel growth modifier after selling a core |
| ``` additive base values ``` | | |
| ANTAGONISM\_BASE\_PER\_LOCATION | 0.4 | fixed for any location |
| ANTAGONISM\_BASE\_PER\_LOCATION\_DEVELOPMENT | 0.04 | multiplied by dev |
| ANTAGONISM\_BASE\_PER\_LOCATION\_LOG\_DEVELOPMENT | 0.4 | multiplied by a log2 scale of dev |
| ANTAGONISM\_BASE\_ATTACKER\_GREAT\_POWER\_SCORE\_MULTIPLIER | 0.01 | multiplied by attacker's GP score to provide antagonism increase |
| ANTAGONISM\_BASE\_ATTACKER\_GREAT\_POWER\_SCORE\_MAX | 0.25 | max antagonism bonus from attacker GP score |
| ANTAGONISM\_BASE\_DEFENDER\_GREAT\_POWER\_SCORE\_MULTIPLIER | 0.01 | multiplied by defender's GP score to provide antagonism reduction |
| ANTAGONISM\_BASE\_DEFENDER\_GREAT\_POWER\_SCORE\_MAX | 0.5 | max antagonism reduction from defender GP score |
| ANTAGONISM\_BASE\_AE\_INCREASE\_FOR\_NON\_TARGET\_MODIFIER | 0.15 | AE increase for countries that are not main targets of the war |
| ``` modify the base value of antagonism for the location ``` | | |
| ANTAGONISM\_BASE\_MODIFIER\_WE\_ARE\_BBC | -0.85 |  |
| ANTAGONISM\_BASE\_MODIFIER\_WE\_ARE\_OVERLORD | -0.9 |  |
| ANTAGONISM\_BASE\_MODIFIER\_WE\_ARE\_THE\_TARGET | 0.5 |  |
| ANTAGONISM\_BASE\_MODIFIER\_EPICENTRE\_DISTANCE\_FACTOR | 0.75 | 0.75 per 100 distance |
| ``` these modify dropped antagonism bombs ``` | | |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_OVERLORD | 0.5 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_NON\_COBELLIGERENT | 0.2 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_CULTURE | 0.4 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_CULTURE\_GROUP | 0.2 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_INFIDEL\_CONQUEST | 0.4 | different religion group conquered same religion province |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_RELIGION | 0.35 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_RELIGION\_GROUP | 0 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_DIFFERENT\_RELIGION | -0.35 | we don't care about those heathens |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_GOVERNMENT\_TYPE | 0.05 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_DIFFERENT\_GOVERNMENT\_TYPE | -0.05 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_DIPLOMATIC\_REPUTATION | -0.04 | reduces antagonism |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_DIALECT | 0.25 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_LANGUAGE | 0.2 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SAME\_LANGUAGE\_FAMILY | 0.05 |  |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_PENALTY\_PRE\_EXISTING\_ANTAGONISM | 0.005 | how much any existing antagonism impacts future antagonism gains |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_PERCENT\_ABOVE\_GP\_SCORE\_FOR\_DONT\_CARE | 1.5 | if we're at least 2.5x as powerful as them, we don't care so much about what they do |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_GP\_SCORE\_MULTIPLIER\_MAX | 0.25 | max amount of extra antagonism for being close in gp score |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_GP\_SCORE\_MULTIPLIER\_MIN | -0.25 | min amount of extra antagonism for being close in gp score |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_PEACE\_SUBJECT\_REDUCTION | -0.5 | AE reduction if it is taken for a subject |
| ANTAGONISM\_ADDITIONAL\_MODIFIER\_SUBJECT\_OF\_AGGRESSOR | -0.8 |  |
| ``` these get applied to the antagonism a country feels towards another as a base value ``` | | |
| ANTAGONISM\_STATIC\_SAME\_CULTURE | -2 |  |
| ANTAGONISM\_STATIC\_SAME\_CULTURE\_GROUP | 0 |  |
| ANTAGONISM\_STATIC\_DIFFERENT\_CULTURE\_GROUP | 4 |  |
| ANTAGONISM\_STATIC\_SAME\_RELIGION | -2 |  |
| ANTAGONISM\_STATIC\_SAME\_RELIGION\_GROUP | 0 |  |
| ANTAGONISM\_STATIC\_DIFFERENT\_RELIGION | 10 |  |
| ANTAGONISM\_STATIC\_SAME\_GOVERNMENT\_TYPE | -1 |  |
| ANTAGONISM\_STATIC\_DIFFERENT\_GOVERNMENT\_TYPE | 1 |  |
| ANTAGONISM\_STATIC\_DIFFERING\_SOCIETAL\_VALUES | 25 | multiplied by how different they are |
| ANTAGONISM\_STATIC\_SAME\_DIALECT | -2 |  |
| ANTAGONISM\_STATIC\_SAME\_LANGUAGE | -1 |  |
| ANTAGONISM\_STATIC\_SAME\_LANGUAGE\_FAMILY | 0 |  |
| ANTAGONISM\_STATIC\_FOREIGN\_LANGUAGE\_FAMILY | 2 |  |
| ANTAGONISM\_FOR\_COALITION\_WARNING | 40 |  |
| ANTAGONISM\_FOR\_COALITION | 50 |  |
| PEACE\_AUTO\_ENFORCE\_BASE\_DAYS | 365 |  |
| PEACE\_AUTO\_ENFORCE\_RANK\_DAY | 180 |  |
| MIN\_WARSCORE\_TO\_DEMAND | 10 |  |
| PEACE\_SEPERATE\_BLOCK\_MONTHS | 12 |  |
| PEACE\_COST\_EFFICIENCY\_FOR\_REVOLT\_WAR | 5 | Applied against a revolt war opponent |
| PEACE\_COST\_EFFICIENCY\_UNOCCUPIED\_FORT | -0.33 |  |
| PEACE\_COST\_EFFICIENCY\_FOR\_SAME\_CULTURE | 0.1 | Applied if dominant culture in location is the same as taker's primary culture |
| PEACE\_COST\_EFFICIENCY\_FOR\_SAME\_RELIGION | 0.1 | Applied if dominant religion in location is the same as taker's religion |
| PEACE\_COST\_EFFICIENCY\_FOR\_POWER\_PROJECTION\_DIFFERENCE | 0.001 | modifies the cost of taking a location through power projection difference |
| PEACE\_COST\_EFFICIENCY\_FOR\_NON\_TARGET | -0.5 |  |
| PEACE\_COST\_EFFICIENCY\_VS\_RIVAL | 0.33 |  |
| PEACE\_LOAN\_SIZE\_MULTIPLIER\_FOR\_MAX\_WARSCORE\_GOLD | 5 | how many times the country's loan size can be taken for the max war score amount |
| PEACE\_MAX\_WARSCORE\_FOR\_GOLD | 25 | most war score that can be used to take gold |
| PEACE\_GOLD\_AI\_DESIRE | 0.1 | Per war score used |
| INFLATION\_FROM\_PEACE\_GOLD | 0.0002 | inflation per month of income taken in peace (also applied to location sales) |
| PEACE\_MAX\_NOBLES\_SACRIFICED\_PERCENT | 0.25 |  |
| PEACE\_MAX\_WARSCORE\_FOR\_SACRIFICE | 25 | most war score that can be used to sacrifice nobles |
| PEACE\_NOBLES\_SACRIFICED\_PER\_DOOM\_POINT | 0.01 | pop size is 1/1000 per actual person |
| PEACE\_SACRIFICE\_AI\_DESIRE | 2 |  |
| INTERVENE\_OPINION\_THRESHOLD | 100 |  |
| EXECUTION\_RELATION\_MODIFIER | -200 |  |
| BASE\_CHARACTER\_SPY\_CHANCE | 0.5 |  |
| BASE\_SPY\_DISCOVERY\_CHANCE\_PER\_YEAR | 0.25 |  |
| MIN\_SPY\_NETWORK\_SIZE\_FOR\_DISCOVERY | 25 |  |
| SPY\_DISCOVERY\_COOLDOWN\_MONTHS | 12 |  |
| OPINION\_MIN | -200 |  |
| OPINION\_MAX | 200 |  |
| TRUST\_MIN | 0 |  |
| TRUST\_MAX | 100 |  |
| ANTAGONISM\_MIN | 0 |  |
| ANTAGONISM\_BIAS\_MIN | -100 |  |
| ANTAGONISM\_MAX | 1000 |  |
| FAVORS\_MAX | 100 |  |
| TRAVEL\_DAYS | 30 |  |
| MAX\_ANNEX\_SIZE | 2 |  |
| MAX\_TRIBUTE\_TREASURY\_DEFICIT | -100 |  |
| DEFAULT\_ANNEX\_MIN\_RELATION | 190 |  |
| DEFAULT\_INTERNATIONAL\_ORGANIZATION\_ANNEX\_MIN\_RELATION | 150 |  |
| DEFAULT\_ANNEX\_MIN\_YEARS | 10 |  |
| MONTHS\_BEFORE\_TOTAL\_OCCUPATION | 60 | Before this many months have passed in the war, you cannot gain 100% warscore by just occupying the warleader |
| WAR\_DEC\_LEVY\_RECRUIT\_SPEED\_FOR\_MONTHS | 6 |  |
| DEFAULT\_WARGOAL\_TICKINGWARSCORE\_BONUS | 2 | Amount of warscore per month since attacker/defender started getting the bonus for completing war goal |
| WARGOAL\_MAX\_TICKING\_WAR\_SCORE | 25 |  |
| WARGOAL\_MAX\_BONUS | 50 |  |
| DEFAULT\_WARGOAL\_BATTLESCORE\_BONUS | 3 | Battle score bonus from winning battles |
| SUPERIORITY\_WARGOAL\_WARSCORE\_THRESHOLD | 10 | Needed battle score for getting ticking war score for war goal superiority |
| WARSCORE\_MAX\_FROM\_BATTLES | 50 | maximum amount to get from a battles . |
| BATTLE\_RESULT\_SCALE | 25 |  |
| BATTLE\_RESULT\_CAP | 25 |  |
| TRUCE\_YEARS | 5 |  |
| SCALED\_TRUCE\_YEARS | 10 |  |
| REVANCHISM\_MONTHLY\_DECAY | 0.833 |  |
| CASUS\_BELLI\_MONTHS | 120 |  |
| ANTAGONISM\_IMPACT\_ON\_OPINION | -4 |  |
| ANTAGONISM\_NEIGHBOR\_MODIFIER\_IMPACT\_ON\_OPINION | -0.33 |  |
| ANTAGONISM\_OUT\_OF\_RANGE\_MODIFIER\_IMPACT\_ON\_OPINION | -0.25 |  |
| ANTAGONISM\_DEPENDENCY\_MODIFIER\_IMPACT\_ON\_OPINION | -0.9 |  |
| ANTAGONISM\_UNION\_MODIFIER\_IMPACT\_ON\_OPINION | -0.9 |  |
| ANTAGONISM\_SAME\_SIDE\_IN\_WAR\_MODIFIER\_IMPACT\_ON\_OPINION | -0.8 |  |
| ANTAGONISM\_GETTING\_DEFENSIVE\_SUPPORT\_MODIFIER\_IMPACT\_ON\_OPINION | -0.75 |  |
| ANTAGONISM\_ROYAL\_MARRIAGE\_MODIFIER\_IMPACT\_ON\_OPINION | -0.2 |  |
| ANTAGONISM\_MUTUAL\_IO\_MODIFIER\_IMPACT\_ON\_OPINION | -0.2 |  |
| PEACE\_GOLD\_MIN\_ECONOMY | 20 |  |
| PEACE\_GOLD\_COST\_PER\_MONTHLY\_INCOME | 1 |  |
| PEACE\_GOLD\_MAX\_YEARLY\_INCOMES | 2 |  |
| PEACE\_GOLD\_STEP | 1 |  |
| PEACE\_RELEASE\_NATION\_FACTOR | -0.05 |  |
| PEACE\_CANCEL\_SUBJECT\_FACTOR | -0.2 |  |
| PEACE\_TRANSFER\_SUBJECT\_FACTOR | -0.1 |  |
| PEACE\_BECOME\_SUBJECT\_FACTOR | -0.1 |  |
| PEACE\_JUNIOR\_PARTNER | 60 |  |
| PEACE\_NON\_UNION\_ANTAGONISM\_FACTOR | 0.33 |  |
| PEACE\_GRANT\_INDEPENDENCE | 60 |  |
| OPINION\_GOOD\_RELATIONS | 50 | Threshold for good relations -1 stab hit. |
| OPINION\_GREAT\_RELATIONS | 100 | Threshold for great relations -2 stab hit. |
| OPINION\_NO\_WAR | 150 | Threshold for AI, being unable to declare war because one's own opinion of enemy is too high. |
| LOYALTY\_FROM\_OPINION | 0.15 | how much subject loyalty we get from opinion of overlord |
| LOYALTY\_FROM\_TRUST | 0.1 | how much subject loyalty we get from trust of overlord |
| IMPROVE\_RELATION\_SUBJECT\_FACTOR | 2 | Subjects have a maximum this times higher. |
| CULTURE\_WAR\_IMPACT | 10 |  |
| CULTURE\_WAR\_IMPACT\_ON\_SPY\_NETWORK | 0.5 |  |
| SPY\_NETWORK\_MIN\_MODIFIER | 0.1 |  |
| FAVORS\_DECAY | 0 |  |
| CURRY\_FAVORS | 0.5 |  |
| CURRY\_FAVORS\_RELATION\_REQUIRED | 10 |  |
| CURRY\_FAVORS\_MAX\_FAVORS | 25 |  |
| FAVORS\_REJECTED\_TRUST\_LOSS | 0.25 | Proportion of favors used |
| FAVORS\_REJECTED\_DIP\_REP\_LOSS | 0.005 | Propotion of favors used times actor's trust in recipient |
| FAVORS\_REJECTED\_DIP\_REP\_MONTHS | 24 | Duration per point of diplo rep |
| SPY\_NETWORK\_DECAY | -1 |  |
| SPY\_NETWORK\_SIEGE\_EFFECT | 0.2 |  |
| SPY\_NETWORK\_AE\_EFFECT | -0.1 |  |
| MONTHLY\_SPYNETWORK | 1 |  |
| TRUST\_EQUILIBRIUM | 50 |  |
| TRUST\_MONTHLY\_DECAY | -0.5 |  |
| TRUST\_MONTHLY\_RECOVERY | 0.05 |  |
| TRUST\_MONTHLY\_RECOVERY\_FROM\_DIPLOMATIC\_REPUTATION | 0.005 |  |
| TRUST\_CHANGE\_DECLARE\_WAR | -20 |  |
| TRUST\_CHANGE\_BREAK\_TRUCE\_DEFENDER | -30 |  |
| TRUST\_CHANGE\_BREAK\_TRUCE\_IN\_RANGE | -5 |  |
| TRUST\_CHANGE\_CALL\_TO\_ARMS\_REJECTED | -25 |  |
| IMMEDIATE\_TRUST\_FACTOR\_FROM\_PROFESS\_TRUST | 0.5 |  |
| PROFESS\_TRUST\_COOLDOWN\_MONTHS | 24 |  |
| MARITIME\_EXIT\_WEIGHT | 20 |  |
| MARITIME\_PATH\_WEIGHT | 50 |  |
| MARITIME\_ARRIVAL\_WEIGHT | 20 |  |
| MARITIME\_MARITIME\_MAX | 20 |  |
| MARITIME\_PATH\_MAX | 500 |  |
| LAND\_PATH\_AREA\_COST | 20 |  |
| TRUST\_BROKEN\_TRUCE | 10 |  |
| INFILTRATE\_ADMINISTRATION\_DURATION | 24 |  |
| GREAT\_POWER\_POINTS\_THRESHOLD | 40 | GP points needed to be a Great Power |
| REGIONAL\_POWER\_POINTS\_THRESHOLD | 20 | GP points needed to be a Regional Power |
| GREAT\_POWER\_AREA\_WEALTH\_DIVISOR | 5 | median\_tax\_base / this = unit for area point scaling (median area = 5 pts) |
| HEGEMONY\_LOST\_MONTHS | 120 |  |
| HEGEMONY\_GRACE\_PERIOD | 12 | 1 year of grace period when someone is contesting you in the hegemony |
| HEGEMONY\_ACTIVE\_UNTIL\_REPLACED | true | if set to no, the hegemony will immediately lose this status once the grace period is over instead of having to wait for a competing country to replace them |
| HEGEMONY\_MONTHLY\_PROGRESS | 1 |  |
| ROYAL\_MARRIAGE\_BASE | 2 |  |
| ROYAL\_MARRIAGE\_PRESTIGE\_DIFF\_FACTOR | 0.01 |  |
| ROYAL\_MARRIAGE\_RANK\_PRESTIGE\_DIFF\_FACTOR | 0.25 |  |
| ROYAL\_MARRIAGE\_SUBSEQUENT\_SPOUSE\_PRESTIGE\_MULTIPLIER | 0.5 | each subsequent spouse gets a x% prestige gain hit over the previous in a royal marriage |
| ROYAL\_MARRIAGE\_RULER\_IMPORTANCE\_MULTIPLIER | 2 |  |
| ROYAL\_MARRIAGE\_NTH\_IN\_LINE\_IMPORTANCE\_MULTIPLIER | 0.2 | each step away.. |
| PRESTIGE\_FACTOR\_FROM\_TAKING\_ON\_DEBT | 0.2 |  |
| GIFT\_FAVORS | 5 |  |
| LIBERTY\_DESIRE\_MONTHLY\_DECAY | -0.5 |  |
| LIBERTY\_DESIRE\_FROM\_FORCED\_IN\_WAR | 50 |  |
| PEACE\_TREATY\_FOOD\_ACCESS | 0 |  |
| PEACE\_TREATY\_MILITARY\_ACCESS | 0 |  |
| PEACE\_TREATY\_FLEET\_BASING | 0 |  |
| PEACE\_TREATY\_ANTI\_PIRACY | 10 |  |
| PEACE\_TREATY\_WAR\_REPARATIONS | 10 |  |
| WAR\_REPARATIONS\_FACTOR | 0.1 |  |
| WAR\_REPARATIONS\_YEARS | 10 |  |
| PEACE\_TREATY\_ANNUL\_ALL\_TREATIES | 10 |  |
| ANNUL\_DURATION\_MONTHS | 120 |  |
| PEACE\_TREATY\_PROVINCE\_BONUS | 1.5 |  |
| PEACE\_TREATY\_AREA\_BONUS | 2 |  |
| PEACE\_TREATY\_ANNEX\_REVOLTER\_MAX\_COST | 70 |  |
| PEACE\_TREATY\_REVOLTER\_SURVIVES\_MAX\_COST | 70 |  |
| PEACE\_TREATY\_FORCE\_MIGRATE\_COST | 10 |  |
| PEACE\_TREATY\_FORCE\_MIGRATE\_AE | 0 |  |
| PEACE\_TREATY\_FORCE\_MIGRATE\_SIZE | 0.25 |  |
| PEACE\_TREATY\_FORCE\_MIGRATE\_MONTHS | 120 |  |
| PEACE\_TREATY\_RETURN\_CORE\_ANTAGONISM\_PERCENT\_REDUCTION | 0.75 |  |
| PEACE\_MAX\_MONTHS\_AT\_WAR\_BEFORE\_START\_DATE | 12 |  |
| WAR\_ENTHUSIASM\_BASE | 0.5 |  |
| WAR\_ENTHUSIASM\_ATTACKING\_SIEGE | 0.25 |  |
| WAR\_ENTHUSIASM\_DEFENDING\_SIEGE | -0.5 |  |
| WAR\_ENTHUSIASM\_CALL\_FOR\_PEACE | -0.01 |  |
| WAR\_ENTHUSIASM\_WAR\_EXHAUSTION | -0.02 |  |
| WAR\_ENTHUSIASM\_UNIT\_BALANCE | 0.5 |  |
| WAR\_ENTHUSIASM\_REBEL\_THREAT | -0.2 |  |
| WAR\_ENTHUSIASM\_ONGOING\_BATTLES | 10 |  |
| WAR\_ENTHUSIASM\_CAPITAL | 0.05 |  |
| WAR\_ENTHUSIASM\_WAR\_GOAL | 0.05 |  |
| WAR\_ENTHUSIASM\_INDEPENDENCE | 0.05 |  |
| WAR\_ENTHUSIASM\_MEN\_LOSSES | -2.5 |  |
| WAR\_ENTHUSIASM\_SHIP\_LOSSES | -4 |  |
| WAR\_ENTHUSIASM\_TIME\_MONTHS | 24 | Months of additional AI stubbornness in a war |
| WAR\_ENTHUSIASM\_TIME\_EARLY\_FACTOR | 0.0075 | During months of stubbornness the effect of time passed is multiplied by this |
| WAR\_ENTHUSIASM\_TIME\_LATE\_FACTOR | 0.01 | After months of stubbornness the effect of time passed is multiplied by this (only applied to positive war enthusiasm) |
| WAR\_ENTHUSIASM\_WAR\_DIRECTION\_FACTOR | 0.005 | AI willingness to peace based on who's making gains in the war |
| WAR\_ENTHUSIASM\_WAR\_DIRECTION\_WINNING\_MULT | 5 | Multiplies AI emphasis on war direction if it's the one making gains |
| WAR\_ENTHUSIASM\_MILITARY\_STRENGTH\_FACTOR | 0.1 | AI unwillingness to peace based on manpower & forcelimits |
| WAR\_ENTHUSIASM\_SEPERATE\_PEACE | -0.1 |  |
| WAR\_ENTHUSIASM\_COALITION\_FACTOR | 0.3 | AI unwillingness to peace based on being in a coalition war |
| WAR\_ENTHUSIASM\_ALLY\_MULT | 0.5 |  |
| WAR\_ENTHUSIASM\_DESPERATION | -0.75 |  |
| WAR\_ENTHUSIASM\_ALLY\_BASE\_RELUCTANCE\_MULT | 1.5 |  |
| WAR\_ENTHUSIASM\_ALLY\_WAR\_EXHAUSTION\_MULT | 1 |  |
| WAR\_ENTHUSIASM\_ALLY\_TIME\_MULT | 1 |  |
| WAR\_ENTHUSIASM\_ALLY\_WAR\_DIRECTION\_MULT | 0 |  |
| WAR\_ENTHUSIASM\_ALLY\_FORCE\_BALANCE\_MULT | 0 |  |
| WAR\_ENTHUSIASM\_ALLY\_WARGOAL\_MULT | 0 |  |
| WAR\_ENTHUSIASM\_ALLY\_CAPITAL\_MULT | 1 |  |
| WAR\_ENTHUSIASM\_ALLY\_DESPERATION\_MULT | 1 |  |
| WAR\_ENTHUSIASM\_ALLY\_REBELS\_MULT | 1 |  |
| WAR\_ENTHUSIASM\_ALLY\_MILITARY\_STRENGTH\_MULT | 2 |  |
| WAR\_ENFORCE\_DEMANDS\_MAX\_WARSCORE\_FRACTION | 0.5 | How much warscore is needed to enforce demands in general |
| WAR\_ENFORCE\_DEMANDS\_WARSCORE\_COST\_NEEDED | 2 | How many times more warscore do we need to have than the cost of an offer to enforce demands, |
| RANGE\_MULTIPLIER\_FOR\_RIVALRY | 0.5 | Countries needs to be in this range to be valid |
| SETUP\_NUM\_RELATIONS\_OVER\_LIMIT\_ERROR | 0.5 | If setup country has this % of diplomatic relations over the limit, throw an error |
| LIBERATE\_SLAVES\_BASE\_COST | 5 |  |
| LIBERATE\_SLAVES\_MAX\_COST | 50 | Cap raised from 25 to 50; with the per-treaty pop cap (LIBERATE\_SLAVES\_MAX\_POP\_TRANSFER\_FRACTION) this stays affordable across scales while no longer letting a single 25-warscore treaty repatriate an entire enslaved population. |
| LIBERATE\_SLAVES\_POPULATION\_DIVISOR | 10000 |  |
| LIBERATE\_SLAVES\_MAX\_POP\_TRANSFER\_FRACTION | 0.1 | Maximum fraction of the Taker's current total population that a single Liberate Slaves peace treaty may transfer. Closes CAESAR-67681 (Vijayanagar vs. Delhi pop-dump exploit). |
| ASK\_FOR\_MONEY\_ALERT\_ADVANCE\_MONTHS | 60 | How many months in advance to notify that action will be available. Negative number disables the alert entirely |
| POSITIVE\_OPINION\_FROM\_ENFORCED\_PEACE\_WARSCORE | -10 | If the country protected with enforced peace had lower warscore than this, actor will get positive opinion from their side |
| ``` Intel fog thresholds — spy network level required to reveal each data tier ``` | | |
| INTEL\_THRESHOLD\_RULER\_STATS | 5 |  |
| INTEL\_THRESHOLD\_LEGITIMACY | 5 |  |
| INTEL\_THRESHOLD\_WAR\_EXHAUSTION | 5 |  |
| INTEL\_THRESHOLD\_COUNTRY\_MODIFIERS | 5 |  |
| INTEL\_THRESHOLD\_ESTATES\_POWER | 5 |  |
| INTEL\_THRESHOLD\_AI\_PERSONALITY | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_POP\_BREAKDOWN | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_SATISFACTION | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_LITERACY | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_EMPLOYMENT | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_INTEGRATION | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_MODIFIERS | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_DISEASE | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_MIGRATION | 5 |  |
| INTEL\_THRESHOLD\_LOCATION\_ENFRANCHISEMENT | 5 |  |
| INTEL\_THRESHOLD\_INCOME | 15 |  |
| INTEL\_THRESHOLD\_TAX\_BASE | 15 |  |
| INTEL\_THRESHOLD\_MANPOWER | 15 |  |
| INTEL\_THRESHOLD\_SAILORS | 15 |  |
| INTEL\_THRESHOLD\_STABILITY | 15 |  |
| INTEL\_THRESHOLD\_LOCATION\_TAX\_BASE | 15 |  |
| INTEL\_THRESHOLD\_LOCATION\_RGO\_WORKERS | 15 |  |
| INTEL\_THRESHOLD\_LOCATION\_RAW\_MATERIALS | 15 |  |
| INTEL\_THRESHOLD\_LOCATION\_FOOD\_OUTPUT | 15 |  |
| INTEL\_THRESHOLD\_LOCATION\_DEVELOPMENT | 15 |  |
| INTEL\_THRESHOLD\_LOCATION\_PROSPERITY | 15 |  |
| INTEL\_THRESHOLD\_LOCATION\_TRADE\_VOLUMES | 15 |  |
| INTEL\_THRESHOLD\_ARMY\_SIZE | 25 |  |
| INTEL\_THRESHOLD\_LEVY\_STRENGTH | 25 |  |
| INTEL\_THRESHOLD\_NAVY\_STRENGTH | 25 |  |
| INTEL\_THRESHOLD\_NAVY\_LEVY\_STRENGTH | 25 |  |
| INTEL\_THRESHOLD\_FORT\_COUNT | 25 |  |
| INTEL\_THRESHOLD\_TOTAL\_POPULATION | 25 |  |
| INTEL\_THRESHOLD\_ARMY\_TRADITION | 25 |  |
| INTEL\_THRESHOLD\_NAVY\_TRADITION | 25 |  |
| INTEL\_THRESHOLD\_COMBAT\_MODIFIERS | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_GARRISON | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_FORT\_LEVEL | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_SUPPLY\_LIMIT | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_LEVIES | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_CONSTRUCTIONS | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_AVAILABLE\_SLOTS | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_ATTRITION | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_WAR\_WORTH | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_OWNERSHIP | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_MOVEMENT\_RESISTANCE | 25 |  |
| INTEL\_THRESHOLD\_LOCATION\_FOOD\_DECAY | 25 |  |

### Disease

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MAX\_DISEASE\_PERCENTAGE | 1 |  |
| PANDEMIC\_LOCATIONS | 1000 |  |
| SEVERE\_LOCATIONS | 500 |  |
| MODERATE\_LOCATIONS | 200 |  |
| STAGNATION\_LENGTH\_DAYS | 1000 |  |
| PANDEMIC\_MIN\_DEATHS | 50000 | 50M |
| SEVERE\_MIN\_DEATHS | 1000 | 1M |
| MODERATE\_MIN\_DEATHS | 50 | 50k |
| MAX\_ACCEPTABLE\_PERCENTAGE\_DIFFERENCE\_TO\_AMALGAMATE\_POPS | 0.05 |  |

### Dynasty

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| NAME\_TEMPLATE\_KEYS | { SOMEONE\_OF\_SOMEWHERE, SOMEONE\_FROM\_SOMEWHERE, SOMEONE\_THE\_SOMETHING\_OF\_SOMEWHERE\_\_TYPE, SOMEONE\_THE\_SOMEDESC\_SOMETHING\_\_ADJ\_TYPE, SOMEONE\_THE\_SOMELOCALITY\_SOMETHING\_\_TYPE, SOMEONE\_THE\_SOMENATIONALITY\_SOMETHING\_\_TYPE } |  |
| NAME\_ADJECTIVE\_KEYS | { mighty, courageous, learned, expert } |  |
| NAME\_NOUN\_KEYS | { scholar, executioner, warrior, knight } |  |
| LIVING\_SIZE\_THRESHOLD\_FOR\_MARRY | 9 |  |
| LIVING\_SIZE\_THRESHOLD\_FOR\_MARRY\_IMPORTANT | 21 |  |
| CALC\_DYNASTY\_HEAD\_SCORE\_MALE | 25 | Ignore this if country has Gender Equality |
| CALC\_DYNASTY\_HEAD\_SCORE\_RULER | 10000 | We also add the Great Power Score of all the countries the character rules |
| CALC\_DYNASTY\_HEAD\_SCORE\_HEIR | 1000 | Only if not also a ruler |
| CALC\_DYNASTY\_HEAD\_SCORE\_ESTATE | 100 | if the character's estate type has 'priority\_for\_dynasty\_head = yes' |
| CALC\_DYNASTY\_HEAD\_SCORE\_SUBJECT | 0.1 | If is subject |
| DYNASTIC\_POWER\_ONLY\_DYNASTY\_SEAT | 0.05 | multiplier to the dynasty power contribution from a country which has only the dynasty seat |

### Economy

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ECONOMICAL\_BASE\_FROM\_TAX\_BASE | 0.5 |  |
| ECONOMICAL\_BASE\_FROM\_POP | 0.015 |  |
| ECONOMICAL\_BASE\_FROM\_TRADE\_VALUE | 0.2 |  |
| ECONOMICAL\_BASE\_FROM\_TRADE\_PROFIT | 0.2 |  |
| ECONOMICAL\_BASE\_INTEREST | 0.25 |  |
| ECONOMICAL\_BASE\_FROM\_FOREIGN\_BUILDINGS | 1 |  |
| ECONOMICAL\_BASE\_FROM\_SUBJECT | 0.05 |  |
| ECONOMICAL\_BASE\_SCALE\_FROM\_EACH\_INSTITUTION | 0.066 |  |
| ECONOMICAL\_BASE\_ALL\_HAS\_TRADE | false | if no, only building based countries, if yes, all countries |
| ECONOMICAL\_BASE\_GROWTH\_SHORT\_TERM\_YEARS | 5 | years back for short-term eco growth rate |
| ECONOMICAL\_BASE\_GROWTH\_LONG\_TERM\_YEARS | 50 | years back for long-term eco growth rate |
| PRICE\_SCALE\_FROM\_ECO\_BASE | 0.1 |  |
| MINTING\_GOODS\_LEVEL | 0.01 |  |
| GOODS\_RGO\_BASE\_COST | 0.5 |  |
| GOODS\_RGO\_PRICE\_SCALE | 0.25 |  |
| COURT\_SPENDING\_FRACTON | 0.1 |  |
| DIPLOMATIC\_SPENDING\_FRACTION | 0.1 |  |
| PRIVATEER\_STEAL\_MONEY\_FACTOR | 0.01 |  |
| PRIVATEER\_OPINION\_INCOME\_FLOOR | 5 | Min monthly income (ducats) used as anchor when scaling the place-privateers opinion hit; prevents tiny/bleeding countries from blowing up the divisor. |
| PRIVATEER\_OPINION\_FULL\_IMPACT\_FRACTION | 0.1 | Fraction of victim's monthly income stolen by a single placement that yields the full opinion\_placed\_privateers bias value. Smaller plunder scales linearly down to zero. |
| ESTATE\_LOAN\_SIZE | 0.5 |  |
| MIN\_ESTATE\_LOAN | 2 |  |
| ESTATE\_LOAN\_DURATION\_IN\_MONTHS | 60 | 5 years minimum |
| ESTATE\_LOAN\_MIN\_INTEREST | 0.01 |  |
| BOND\_SIZE | 2 |  |
| MIN\_BOND\_SIZE | 10 |  |
| BURGHER\_GRANT\_MAX\_FRACTION | 0.5 | transfer\_gold\_from\_estate caps the requested transfer at this fraction of the source estate's gold pool, so the action can never empty the estate's treasury in one click. Used by Request Emergency Loan. |
| BURGHER\_GRANT\_MIN\_TRANSFER | 5 | transfer\_gold\_from\_estate refuses to pay out if the capped amount falls below this floor — avoids trivial grants showing up as actionable in the UI. |
| OVER\_FORT\_LIMIT\_MULTIPLIER | 1 |  |
| OVER\_FORT\_LIMIT\_ERROR\_LOG | 1 | If setup country is this far above its fort level, throw an error |
| ARTIST\_SALARY\_BASE\_FACTOR | 0.025 |  |
| UPGRADE\_PRICE\_MODIFIER | -0.25 |  |
| CHANCE\_FOR\_SUBUNIT\_LOSS\_AT\_BANKRUPTCY | 25 |  |
| CHANCE\_FOR\_BUILDING\_REDUCTION\_AT\_BANKRUPTCY | 10 |  |
| BANKRUPTCY\_STAB\_LOSS | -50 |  |
| BANKRUPTCY\_INFLATION\_CHANGE\_PERCENT | -0.25 |  |
| BANKRUPTCY\_DURATION\_IN\_MONTHS | 60 |  |
| CREDITWORTHINESS\_INTEREST\_PER\_UNIT | 0.1 | Max interest delta at max deviation from neutral (0.5); scales linearly |
| CREDITWORTHINESS\_BANKRUPTCY\_DRAIN | 0.5 | Drain applied to effective creditworthiness on bankruptcy (0-1 scale) |
| CREDITWORTHINESS\_BANKRUPTCY\_YEARLY\_RECOVERY | 0.005 | Units of drain recovered per year (0-1 scale, ~0.5 over 100 years) |
| CREDITWORTHINESS\_REPAY\_BONUS | 0.02 | Bonus per loan repaid on time (0-1 scale) |
| CREDITWORTHINESS\_EXTENSION\_PENALTY | 0.03 | Penalty per loan auto-extended (borrower couldn't repay) |
| CREDITWORTHINESS\_WAR\_CREDITOR\_PENALTY | 0.15 | Penalty for declaring war on a country you owe money to |
| CREDITWORTHINESS\_MONTHLY\_PULL\_RATE | 0.1 | Fraction of the gap to target closed each month |
| BANKRUPTCY\_CONTROL\_CHANGE\_PERCENT | -0.33 |  |
| SUPPLY\_AND\_DEMAND\_STABILITY\_OFFSET\_CONSTANT | 1 | added to supply and demand when calculating market price, higher value means lower price volatility |
| UNPROFITABLE\_BUILDING\_WORKERS\_LAID\_OFF\_PERCENTAGE | 10 | percentage of workers that an unprofitable, unsubsidised building will lay off per month |
| PROFITABLE\_BUILDING\_WORKERS\_REHIRED\_PERCENTAGE | 10 | percentage of workers that a profitable, unsubsidised building look to rehire per month if they're not at full employment percentage |
| LOAN\_MIN\_INTEREST | 0.01 |  |
| LOAN\_MAX\_INTEREST | 0.25 |  |
| LOAN\_MIN\_DURATION | 12 |  |
| LOAN\_MAX\_DURATION | 360 |  |
| LOAN\_MIN\_AMOUNT | 10 |  |
| PRODUCTION\_EFFIENCY\_BONUS\_PER\_LEVEL | 0.01 |  |
| ESTABLISHMENT\_SYSTEM\_ENABLED | false | Master switch for the building establishment ramp system. When no, buildings open at 100% throughput, no PE bonus, no Crowded Establishment penalty, no AI per-location cap. |
| ESTABLISHMENT\_THROUGHPUT\_THRESHOLD | 0.5 | establishment fraction [0-1] below which throughput is reduced; above it PE bonus applies |
| STARTUP\_MAX\_PE\_BONUS | 0.3 | PE bonus rate per unit of establishment fraction above threshold; max PE = (1 - threshold) \* this |
| STARTUP\_DECAY\_RATE | 1 | establishment progress lost per month when building is closed |
| ESTABLISHMENT\_UPGRADE\_TRANSFER\_FRACTION | 0.5 | fraction [0-1] of the obsoleted building's establishment inherited by the new building when an upgrade path creates it |
| ESTABLISHMENT\_PROFIT\_CAP\_PER\_LEVEL | 3 | gold/month/level at which a building's profit grants the maximum establishment-speed bonus |
| ESTABLISHMENT\_MAX\_PROFIT\_BONUS | 1 | maximum extra establishment-speed multiplier from full profit (1.0 means up to 2x speed) |
| PATROL\_THE\_SEAS\_THRESHOLD | 90 | patrol until this maritime (0-100) |
| REFUND\_FACTOR | 0.8 |  |
| INFLATION\_MINTING\_GOLD\_DEMANDS\_FACTOR | 1 |  |
| INFLATION\_RGO\_IMPACT\_FACTOR | 0.01 |  |
| INFLATION\_RGO\_CAP | 0.5 |  |
| INFLATION\_RGO\_INCOME\_FACTOR | 2 |  |
| INFLATION\_MINTING\_IMPACT\_FACTOR | 0.005 |  |
| INFLATION\_MINTING\_TAX\_FACTOR | 0.25 |  |
| STABILITY\_INVEST\_FACTOR | 0.5 |  |
| STABILIY\_EXPENSE\_FACTOR | 0.1 |  |
| PRESTIGE\_INVEST\_FACTOR | 0.1 |  |
| GOV\_POWER\_INVEST\_FACTOR | 2 |  |
| POP\_MOVEMENT\_UPSTREAM\_MODIFIER | 0.2 | moving upstream is still better than over land |
| POP\_MOVEMENT\_DOWNSTREAM\_MODIFIER | 0.3 | moving downstream is easy peasy |
| POP\_MOVEMENT\_RIVER\_CROSSING\_MODIFIER | -0.2 | crossing a river :\ |
| POP\_MOVEMENT\_SEA\_CROSSING\_MODIFIER | -0.5 | way more hassle |
| ESTATE\_BUILD\_MAX\_CONTROL\_THRESHOLD | 0.75 |  |
| DESTROY\_ESTATE\_BUILD\_MIN\_CONTROL\_THRESHOLD | 0.75 |  |
| ESTATE\_MAX\_PRICE\_MULTIPLIER | 4 |  |
| SETUP\_PRINT\_OBSOLETE\_BUILDINGS | false |  |
| BALANCE\_CACHE\_IN\_MONTHS | 12 |  |
| MOTHBALL\_MAINTENANCE\_FACTOR | 0.5 |  |
| PRISONERS\_MAINTENANCE\_FACTOR | 0.3 |  |
| SOUND\_TOLL\_FACTOR | 0.1 |  |
| TRADE\_BURGHER\_PROFIT\_SCALE | 0.1 |  |
| TRADE\_IMPACT\_ON\_SUPPLY\_AND\_DEMAND | true |  |
| DEFAULT\_CURRENCY\_STABILITY | 30 |  |
| DEFAULT\_CURRENCY\_GOVERNMENT\_POWER | 95 |  |
| DEFAULT\_CURRENCY\_PRESTIGE | 20 |  |
| DEFAULT\_CURRENCY\_PURITY | 60 |  |
| DEFAULT\_CURRENCY\_RIGHTEOUSNESS | 90 |  |
| GROWTH\_FROM\_FOOD\_MULTIPLIER\_MAX | 10 | Maximum scaling of the growth from food |
| TRADE\_PATH\_UPSTREAM\_COST\_MULTIPLIER | -0.2 | moving upstream is still better than over land |
| TRADE\_PATH\_DOWNSTREAM\_COST\_MULTIPLIER | -0.5 | moving downstream is easy peasy |
| TRADE\_PATH\_RIVER\_CROSSING\_COST\_MULTIPLIER | 0.3 | crossing a river :\ |
| TRADE\_SEA\_MULTIPLIER | 0.3 | moving through sea is cheaper |
| TRADE\_SEA\_MARITIME\_IMPACT | -0.5 |  |
| TRADE\_PORT\_COST | 5 | fixed cost of loading/unloading boats |
| LOCATION\_DEPOPULATION\_ALERT\_MONTHS | 60 |  |
| TRADE\_PATH\_TRAVEL\_COST\_MULT | 10 |  |
| LOW\_PURITY\_THRESHOLD | 25 |  |

### Estate

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| PARLIAMENT\_MONTHS\_NOT\_CALLED\_THRESHOLD | 120 |  |
| UPKEEP\_PER\_BUILDING | -1 |  |
| MIN\_PEASANT\_ENFRANCHISMENT | 0.1 |  |
| MAX\_PEASANT\_ENFRANCHISMENT | 1 |  |
| LOW\_POWER\_THRESHOLD | 0.25 |  |
| LOW\_SATISFACTION\_THRESHOLD | 0.5 |  |
| COMPARATIVE\_WEALTH\_POWER\_FACTOR | 0.01 |  |
| COMPARATIVE\_WEALTH\_POWER\_CAP | 1 |  |
| POWER\_TO\_SATISFACTION\_PENALTY | -0.5 |  |
| ESTATE\_CULTURE\_ACCEPTED\_SATISFACTION | -0.05 |  |
| ESTATE\_CULTURE\_TOLERATED\_SATISFACTION | -0.1 |  |
| ESTATE\_CULTURE\_DISCRIMINATED\_SATISFACTION | -0.2 |  |
| ESTATE\_RELIGION\_TOLERANCE\_SCALE | 0.0025 |  |
| ESTATE\_CULTURE\_ACCEPTED\_POWER | -0.05 |  |
| ESTATE\_CULTURE\_TOLERATED\_POWER | -0.1 |  |
| ESTATE\_CULTURE\_DISCRIMINATED\_POWER | -0.2 |  |
| ESTATE\_DISCRIMINATED\_CULTURE\_POWER\_ALERT\_THRESHOLD | 0.1 |  |
| ESTATE\_TOLERATED\_CULTURE\_POWER\_ALERT\_THRESHOLD | 0.2 |  |
| ESTATE\_DISCRIMINATED\_CULTURE\_POWER\_ERROR\_THRESHOLD | 0.3 |  |
| BUILDING\_DESTRUCTION\_IMPACT | -0.2 |  |
| POP\_DEMAND\_DEFICIT\_SCALE | 0.5 | How aggressively pop demand contracts when the estate's income falls short of its expense. At wealth-impact = 0 (no income), demand is multiplied by (1 - POP\_DEMAND\_DEFICIT\_SCALE). |
| ESTATE\_CULTURE\_RELIGION\_CHANGE\_COOLDOWN\_MONTHS | 60 | reduce flipflopping |
| ESTATE\_DOMINANCE\_CULTURE\_PRIMARY\_WEIGHT | 1.2 |  |
| ESTATE\_DOMINANCE\_CULTURE\_ACCEPTED\_WEIGHT | 1 |  |
| ESTATE\_DOMINANCE\_CULTURE\_TOLERATED\_WEIGHT | 0.5 |  |
| ESTATE\_DOMINANCE\_CULTURE\_DISCRIMINATED\_WEIGHT | 0.25 |  |
| ESTATE\_DOMINANCE\_RELIGION\_TOLERANCE\_SCALE | 1 |  |
| ESTATE\_DOMINANCE\_RELIGION\_MIN\_WEIGHT | 0.1 |  |
| ESTATE\_DOMINANCE\_OVERRIDE\_THRESHOLD | 1.1 |  |

### FogOfWar

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` #Jomini defines these are used when generating the FoW alpha mask ``` | | |
| TEXTURE\_WIDTH | 4096 | noise texture will be baked into this one so the size should be at least as big as the noise texture for best result |
| TEXTURE\_HEIGHT | 2048 |  |
| KERNEL\_SCALE | 4 |  |
| SAMPLE\_COUNT | 8 |  |
| NOISE\_TEXTURE | gfx/map/surround\_map/fow\_texture.dds |  |
| ``` these are used when applying FoW to terrain and meshes etc ``` | | |
| ALPHA\_MIN | 0.5 |  |
| PATTERN\_SPEED | { -0.005, 0 } |  |
| PATTERN\_STRENGTH | 0.1 |  |
| PATTERN\_TILING | 50 |  |
| FADE\_OUT\_ZOOM\_STEP | 8 |  |
| FADE\_OUT\_SPEED | 2 |  |
| ``` Game defines ``` | | |
| BASE\_ALPHA | 0 | Increase this if you hate FoW. |
| FADE\_SPEED | 1 |  |
| REALM\_ALPHA | 1 |  |
| REALM\_NEIGHBOR\_ALPHA | 0.5 |  |
| UNIT\_ALPHA | 1 |  |
| UNIT\_NEIGHBOR\_ALPHA | 0.5 |  |
| FIXED\_ALPHA\_IN\_IMPASSABLE | false |  |
| IMPASSABLE\_ALPHA | 0.5 |  |
| COLOR\_1 | { 0.5, 0.1, 0, 0.7 } | HSVa - Color that is used on the "bright" spots |
| COLOR\_2 | { 0.5, 0.1, 0, 0.9 } | HSVa - Color that is used on the "dark" spots |

### Game

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| START\_DATE | 1337.4.1 |  |
| END\_DATE | 1836.12.31 |  |
| HOUR\_TICK | 2 |  |
| MORNING\_OFFSET | 8 |  |
| GAME\_SPEED\_TICKS | { 1, 0.5, 0.25, 0.1, 0.05, 0.02, 0 } | how many seconds should an hour take in every game speed |
| GAME\_SPEED\_SCALES | { 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2 } | Factors to scale speed |
| PAUSED\_SPEED\_SCALE | 0.15 |  |
| EVENT\_MP\_TIMEOUT\_MONTHS | 3 |  |
| GAME\_SPEED\_FOR\_MULTI\_PLAYERS\_WARS | 3 |  |
| LOSE\_OWNERSHIP\_ON\_EMPTY\_LOCATION | false |  |

### GameCityLocators

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| FLAT\_MAX\_SLOPE | 0.25 | how much slope a location should have before being considered a mountain |
| HEIGHT\_BADNESS | 50 |  |
| SLOPE\_BADNESS | 100 |  |
| CLOSE\_TO\_RIVER\_BADNESS | -200 |  |
| IN\_RIVER\_BADNESS | 10 |  |
| WATER\_MASS\_BADNESS | -300 |  |
| SEA\_BADNESS | -400 |  |
| CENTER\_DISTANCE\_BADNESS | 1 |  |
| DEBUG\_TEXT\_HEIGHT | 10 |  |
| TEST\_EXTENSION | 2 |  |
| RIVER\_DELTA\_BADNESS | -400 |  |
| OUT\_OF\_BOUNDS\_BADNESS | 50 |  |

### GameIcons

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| FLAG\_TEXT\_ICON\_FONT\_SIZE | 16 |  |
| FLAG\_TEXT\_ICON\_SIZE | { 21, 14 } |  |
| FLAG\_TEXT\_ICON\_OFFSET | { 0, 1 } |  |
| GAME\_CONCEPT\_TEXT\_ICON\_FONT\_SIZE | 16 |  |
| GAME\_CONCEPT\_TEXT\_ICON\_SIZE | { 18, 18 } |  |
| GAME\_CONCEPT\_TEXT\_ICON\_OFFSET | { 0, 3 } |  |
| ESTATE\_TYPE\_TEXT\_ICON\_FONT\_SIZE | 16 |  |
| ESTATE\_TYPE\_TEXT\_ICON\_SIZE | { 17, 17 } |  |
| ESTATE\_TYPE\_TEXT\_ICON\_OFFSET | { 0, 1 } |  |
| ICON\_PATH | gfx/interface/icons |  |
| ICON\_SMALL\_POSTFIX | \_small |  |
| ICON\_BIG\_POSTFIX | \_big |  |
| ICON\_FLAT\_POSTFIX | \_flat |  |
| ICON\_LEFT\_POSTFIX | \_left |  |
| ICON\_RIGHT\_POSTFIX | \_right |  |
| ICON\_BACKGROUND\_POSTFIX | \_background |  |
| COMBAT\_IMMINENT\_ICON\_PATH | gfx/interface/icons/combat\_imminent |  |
| UNIT\_STATUS\_ICON\_PATH | gfx/interface/icons/unit\_status |  |
| UNIT\_ABILITY\_ICON\_PATH | gfx/interface/icons/unit\_ability |  |
| UNIT\_CATEGORY\_ICON\_PATH | gfx/interface/icons/unit\_category |  |
| UNIT\_BATTLE\_CATEGORY\_ICON\_PATH | gfx/interface/icons/unit\_battle\_category |  |
| UNIT\_TYPE\_ICON\_PATH | gfx/interface/icons/unit\_type |  |
| TOPOGRAPHY\_TYPE\_ICON\_PATH | gfx/interface/topography |  |
| VEGETATION\_TYPE\_ICON\_PATH | gfx/interface/vegetation |  |
| CLIMATE\_ICON\_PATH | gfx/interface/icons/climate |  |
| COUNTRY\_RANK\_ICON\_PATH | gfx/interface/icons/country\_ranks |  |
| ROAD\_ICON\_PATH | gfx/interface/icons/roads |  |
| SOCIETAL\_VALUE\_ICON\_PATH | gfx/interface/icons/societal\_values |  |
| LOCATION\_RANK\_ICON\_PATH | gfx/interface/mapitems |  |
| TRADE\_GOODS\_ICON\_PATH | gfx/interface/icons/trade\_goods |  |
| GOODS\_ICON\_PREFIX | icon\_goods\_ |  |
| PARLIAMENT\_TYPES\_ICON\_PATH | gfx/interface/icons/parliament\_types |  |
| CABINET\_ACTION\_ICON\_PATH | gfx/interface/icons/cabinet\_actions |  |
| GENERIC\_ACTION\_ICON\_PATH | gfx/interface/icons/generic\_actions |  |
| EMPLOYMENT\_SYSTEM\_ICON\_PATH | gfx/interface/icons/employment\_systems |  |
| CHARACTER\_INTERACTION\_ICON\_PATH | gfx/interface/icons/character\_interactions |  |
| COUNTRY\_INTERACTION\_ICON\_PATH | gfx/interface/icons/country\_interactions |  |
| BUILDINGS\_ICON\_PATH | gfx/interface/icons/buildings |  |
| POP\_ICON\_PATH | gfx/interface/icons/pops |  |
| HOLY\_SITE\_TYPE\_ICON\_PATH | gfx/interface/icons/holy\_site\_types |  |
| HOLY\_SITE\_ICON\_PATH | gfx/interface/illustrations/holy\_sites/ |  |
| RELIGIOUS\_FACTION\_ICON\_PATH | gfx/interface/icons/religious\_factions |  |
| GOD\_ICON\_PATH | gfx/interface/icons/gods |  |
| OMEN\_ICON\_PATH | gfx/interface/icons/omens |  |
| AVATAR\_ICON\_PATH | gfx/interface/icons/avatars |  |
| DISEASE\_ICON\_PATH | gfx/interface/icons/disease |  |
| MOVEMENT\_ICON\_PATH | gfx/interface/icons/movement |  |
| RELIGIOUS\_FOCUS\_ICON\_PATH | gfx/interface/icons/religious\_focuses |  |
| RELIGIOUS\_ASPECT\_ICON\_PATH | gfx/interface/icons/religious\_aspects |  |
| ESTATE\_ICON\_PATH | gfx/interface/icons/estates |  |
| AGE\_ICON\_PATH | gfx/interface/icons/age |  |
| EDUCATION\_ICON\_PATH | gfx/interface/icons/education |  |
| INSTITUTIONS\_ICON\_PATH | gfx/interface/icons/institutions |  |
| ESTATE\_PRIVILEGE\_ICON\_PATH | gfx/interface/icons/privileges |  |
| HEIR\_SELECTION\_ICON\_PATH | gfx/interface/icons/heir\_selection |  |
| CASUS\_BELLI\_ICON\_PATH | gfx/interface/icons/casus\_belli |  |
| WARGOAL\_ICON\_PATH | gfx/interface/icons/war\_goals |  |
| SUBJECT\_TYPES\_ICON\_PATH | gfx/interface/icons/subject\_types |  |
| ARTIST\_ICON\_PATH | gfx/interface/icons/artist |  |
| WORK\_OF\_ART\_ICON\_PATH | gfx/interface/icons/work\_of\_art |  |
| HEGEMONY\_BORDER\_PATH | gfx/interface/hegemony |  |
| HEGEMONY\_ICON\_PATH | gfx/interface/icons/hegemony |  |
| DISASTER\_ICON\_PATH | gfx/interface/icons/disasters |  |
| AI\_PERSONALITY\_ICON\_PATH | gfx/interface/icons/ai\_personalities |  |
| AI\_DISPOSITION\_ICON\_PATH | gfx/interface/icons/ai\_dispositions |  |
| TOWN\_RIGHTS\_ICON\_PATH | gfx/interface/icons/town\_rights |  |
| SITUATION\_ICON\_PATH | gfx/interface/icons/situations |  |
| RELIGIOUS\_SCHOOL\_ICON\_PATH | gfx/interface/icons/religious\_schools |  |
| INTERNATIONAL\_ORGANIZATION\_PAYMENT\_ICON\_PATH | gfx/interface/icons/flat\_icons/balance |  |
| BUREAUCRACY\_ICON\_PATH | gfx/interface/icons/bureaucracy |  |
| ADVANCE\_ICON\_PATH | gfx/interface/advance |  |
| CHECK\_ADVANCE\_ICONS\_ERRORS | 0 |  |
| CHIVALRIC\_ORDER\_ICON\_PATH | gfx/interface/icons/chivalric\_orders |  |
| LAW\_ICON\_PATH | gfx/interface/icons/laws |  |
| LAW\_CATEGORY\_ICON\_PATH | gfx/interface/icons/laws/categories |  |
| LAW\_CATEGORY\_COLOR\_PATH | gfx/interface/icons/laws/categories/colors |  |
| POLICY\_ICON\_PATH | gfx/interface/icons/policies |  |
| SORT\_BUTTON\_ICON\_PATH | gfx/interface/icons/sort |  |
| CONTROL\_GROUP\_ICON\_PATH | gfx/interface/icons/control\_groups |  |
| RECRUIT\_METHOD\_ICON\_PATH | gfx/interface/icons/unit\_recruit |  |
| UNIT\_FORMATION\_PREFERENCE\_ICON\_PATH | gfx/interface/icons/unit\_formation\_preference |  |
| INTERNATIONAL\_ORGANIZATION\_TYPE\_ICON\_PATH | gfx/interface/icons/international\_organizations |  |
| INTERNATIONAL\_ORGANIZATION\_TYPE\_ILLUSTRATION\_PATH | gfx/interface/illustrations/international\_organization\_types |  |
| INTERNATIONAL\_ORGANIZATION\_SPECIAL\_STATUS\_ICON\_PATH | gfx/interface/icons/international\_organizations/special\_statuses |  |
| GRAPHICAL\_CULTURES\_ICON\_PATH | gfx/interface/graphical\_cultures |  |
| GRAPHICAL\_CULTURES\_POPS\_PATH | pops |  |
| PRICE\_DIFFERENCE\_ICON\_PATH | gfx/interface/icons/prices |  |
| DIPLOMATIC\_ACTIONS\_ICON\_PATH | gfx/interface/icons/diplomatic\_actions/ |  |
| DIPLOMATIC\_STATUS\_ICON\_PATH | gfx/interface/icons/diplomatic\_status/ |  |
| TREATY\_TYPE\_ICON\_PATH | gfx/interface/icons/treaty\_type/ |  |
| RELIGION\_ICON\_PATH | gfx/interface/icons/religion/ |  |
| WORK\_OF\_ART\_QUALITY\_ICON\_PATH | gfx/interface/icons/work\_of\_art/art\_quality\_badges/ |  |
| GAME\_CONCEPT\_ICON\_PATH | gfx/interface/icons/ |  |
| MISSION\_TASKS\_ICON\_PATH | gfx/interface/advance |  |
| MISSION\_ICON\_PATH | gfx/interface/icons/missions/ |  |
| MAP\_MODES\_ICON\_PATH | gfx/interface/icons/map\_modes/ |  |
| EXCLUSIVE\_ACTION\_GROUPS\_ICON\_PATH | gfx/interface/icons/situations/exclusive\_groups |  |
| TROOP\_SUFFICIENCY\_IMPOSSIBLE\_COLOR | { 0, 1, 0.7 } | Red |
| TROOP\_SUFFICIENCY\_BARELY\_POSSIBLE\_COLOR | { 0.12, 1, 0.7 } | Yellow |
| TROOP\_SUFFICIENCY\_TRIVIAL\_COLOR | { 0.33, 1, 0.7 } | Green |

### GameIllustrations

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| SOCIETAL\_VALUE\_ILLUSTRATION\_PATH | gfx/interface/illustrations/societal\_values |  |
| UNIT\_TYPE\_ILLUSTRATION\_PATH | gfx/interface/illustrations/units |  |
| UNIT\_TYPE\_ILLUSTRATION\_MASK\_PATH | gfx/interface/illustrations/units/masks |  |
| GOVERNMENT\_REFORMS\_ILLUSTRATION\_PATH | gfx/interface/icons/government\_reforms/illustrations |  |
| TRADE\_GOODS\_ILLUSTRATION\_PATH | gfx/interface/icons/trade\_goods/illustrations |  |
| SITUATIONS\_ILLUSTRATION\_PATH | gfx/interface/illustrations/situation |  |
| WORK\_OF\_ART\_ILLUSTRATION\_PATH | gfx/interface/illustrations/work\_of\_art |  |
| MISSION\_ILLUSTRATION\_PATH | gfx/interface/illustrations/missions |  |
| DISASTER\_ILLUSTRATION\_PATH | gfx/interface/illustrations/disaster |  |
| ILLUSTATION\_AUDIO\_TAGS\_BLACKLIST | { gfx, interface, illustrations, event, frontobjects, burghers, nobles, clergy, peasants } |  |

### GameLocators

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MIN\_RIVER\_SEPARATION\_DISTANCE | 1 |  |
| IGNORE\_OVER\_BADNESS | 3000 |  |
| AVOID\_CITY\_RADIUS | 3 |  |
| AVOID\_COMBAT\_LAND\_RADIUS | 2.5 |  |
| AVOID\_COMBAT\_SEA\_RADIUS | 15 |  |
| AVOID\_DOCK\_SEA\_PLACING\_RADIUS | 15 |  |
| SEA\_ZONE\_RECT\_SCALE | 3 |  |
| OUT\_OF\_BOUNDS\_BADNESS | 5000 |  |
| NEAR\_OUT\_OF\_BOUND\_BADNESS | 2500 |  |
| AVOID\_POS\_BADNESS | 1000 |  |
| DISTANCE\_TO\_CENTER\_BADNESS | 50 |  |
| LATITUDE\_BIAS\_UNIT\_STACK | -1 |  |
| LATITUDE\_BIAS\_COMBAT | 5 |  |
| UNIT\_EXTENT\_MIN | { -4, -2 } |  |
| UNIT\_EXTENT\_MAX | { 4, 2 } |  |
| COMBAT\_EXTENT\_MIN | { -6, -4 } |  |
| COMBAT\_EXTENT\_MAX | { 6, 4 } |  |
| SLOPE\_BADNESS | 1500 |  |
| SEA\_HEIGHT\_BADNESS | 1000 |  |

### Graphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ARROW\_MOVEMENT\_SPEED | 2 |  |
| DRAG\_SELECTION\_THRESHOLD | 10 | if selecting less than this it will count as a click instead of dragselect |
| NO\_LOCATION\_HIGHLIGHT\_ZOOM\_STEP | 5 | where to not show location highlight |
| SECONDARY\_COLOR\_BORDER\_COLOR | { 0, 0, 0 } |  |
| SECONDARY\_COLOR\_BORDER\_WIDTH | 0.15 |  |
| SECONDARY\_COLOR\_BORDER\_STRENGHT | 2 |  |
| SECONDARY\_STRIPE\_SMOOTH\_MIN | 0.55 | diagonal stripe smoothstep window for secondary country colour (cos threshold where transition begins) |
| SECONDARY\_STRIPE\_SMOOTH\_MAX | 0.85 | cos threshold where the stripe is fully solid; higher = thinner stripe |
| FLAT\_MAP\_HEIGHT | 3.92 |  |
| FLAT\_MAP\_FADE\_SPEED | 2 | How fast to fade to/from flat map state |
| FLAT\_MAP\_ZOOM\_STEP | 12 | At which zoom step to fade to flat map |
| FLAT\_MAP\_ZOOM\_STEP\_FORCE | 15 | At this zoomsteep we will force flatmap with no transition |
| FLAT\_MAP\_NOISE\_SIZE | 512 | Size of the noise applied to the flatmap lerp (must be power of 2 to avoid wrapping problems) |
| FLAT\_MAP\_LERP\_HEIGHT0 | 0 | Relative height where flatmap will be blended 100% |
| FLAT\_MAP\_LERP\_HEIGHT1 | 0.5 | Relative height where flatmap will be blended 0%. e.g when zooming in mountains will "grow" upwards. When they reach FLAT\_MAP\_LERP\_HEIGHT1 they will no longer show any flat map textures |
| FLAT\_MAP\_FADE\_EDGE\_WIDTH | 0.4 |  |
| FLAT\_MAP\_FADE\_EDGE\_DARKNESS | 8 |  |
| FLAT\_MAP\_FADE\_EDGE\_NOISE\_SIZE | 2.5 |  |
| FLAT\_MAP\_SDF\_NOISE\_SCALE | 0.5 | Size of the noise that you can see on the coast lines and where the flatmap meets the 3d-map |
| FLAT\_MAP\_SDF\_NOISE\_STRENGTH | 0.0025 |  |
| FLAT\_MAP\_SDF\_OFFSET | 0 | Adds a manual offset to the coast line distance field. Tweaking this will move the coastline inwards or outwards |
| FLAT\_MAP\_DETAIL\_TILES | 20 | number tiles of the detail texture across the map. Higher value = more tiles = smaller details |
| FLAT\_MAP\_DETAIL\_COAST\_TILES | 300 |  |
| FLAT\_MAP\_DETAIL\_REMAP | { 0, 1, 0.27, 0.48 } | Remaps the red and green channels from x-y to z-w. This is to prevent compression artifacts by allowing a wider range of values in the texture |
| FLAT\_MAP\_COLOR\_WATER\_BLUE\_HSV | { 0.58, 0.5, 0.46 } | Base color of water |
| FLAT\_MAP\_COLOR\_COAST\_BLUE\_HSV | { 0.58, 0.5, 0.95 } | Base color of the gradient that goes from the coastline into the water |
| FLAT\_MAP\_COLOR\_DETAIL\_BLUE\_HSV | { 0.58, 0.5, 1 } | Color of the detail texture that's applied on top of the base color ^ |
| FLAT\_MAP\_COLOR\_WATER\_BROWN\_HSV | { 0.056, 0.7, 1 } | Base color of water |
| FLAT\_MAP\_COLOR\_COAST\_BROWN\_HSV | { 0.056, 0.7, 0 } | Base color of the gradient that goes from the coastline into the water |
| FLAT\_MAP\_COLOR\_DETAIL\_BROWN\_HSV | { 0.056, 0.7, 0.1 } | Color of the detail texture that's applied on top of the base color ^ |
| FLAT\_MAP\_COLOR\_LAND\_HSV | { 0.069, 0.7, 1 } | Base color of land |
| FLAT\_MAP\_COLOR\_DETAIL\_STRENGTH | 1 | How much the blue channel in flatmap\_detail.dds affects the country colors |
| FLAT\_MAP\_COLOR\_DETAIL\_MID\_POINT | 0.5 | the color detail mask (blue channel in flatmap\_detail.dds) subtracts from the color value when below the mid point and adds when above |
| FLAT\_MAP\_MATERIAL\_TILE\_SIZE | 60 | Tuned to give ~2:1 pixel/texel ratio in max zoom on 4k monitor |
| FLAT\_MAP\_MATERIAL\_COLOR\_STRENGTH | 0.75 | Like the COLOR\_DETAIL values |
| FLAT\_MAP\_MATERIAL\_COLOR\_MID\_POINT | 0 |  |
| FLAT\_MAP\_BORDER\_CLOSEUP\_POINT | 271 |  |
| FLAT\_MAP\_BORDER\_FARAWAY\_POINT | 766 |  |
| FLAT\_MAP\_BORDER\_EDGE\_CLOSEUP | 0.021 |  |
| ``` Use console command "shader_debug FLAT_MAP_UNTILE_DEBUG" to visualize the different regions ``` | | |
| FLAT\_MAP\_UNTILING\_NOISE\_SCALE | 0.125 | Controls the size of the noise used when un-tiling the material textures (must be a power of 1/2 to avoid seams on world wrapping) |
| FLAT\_MAP\_UNTILING\_HEIGHTMAP\_SCALE | 0.1 | How much influence the material alpha channel has on the untiling blend |
| FLAT\_MAP\_UNTILING\_FADE\_RANGE | 0.01 | Lower values = sharper blend |
| FLAT\_MAP\_UNTILING\_NUM\_REGIONS | 3 |  |
| ``` Material textures in the flatmap uses a heightmap blending method. Basically the alpha-channel in the material texture represents a heightmap That heightmap is compared to a base-heightmap that's generated in the shader using the different channels in flatmap.dds Material textures are only visible where they are "higher" than the base height map Start and Stop values below represent at which value in the distance fields the generated heightmap is Low and High respectively. ``` | | |
| FLAT\_MAP\_HEIGHTMAP\_LAND\_START | 0.6 | Land uses a signed distance field. 0.0 = Water, 0.5 = coast line, 1.0 = land |
| FLAT\_MAP\_HEIGHTMAP\_LAND\_STOP | 0.5 |  |
| FLAT\_MAP\_HEIGHTMAP\_SPLINES\_START | 0.4 | Splines (rivers and roads) use an unsigned distance field. 0.0 on the spline, 1.0 far away from the spline |
| FLAT\_MAP\_HEIGHTMAP\_SPLINES\_STOP | 0.05 |  |
| FLAT\_MAP\_HEIGHTMAP\_REGION\_START | 0.5 |  |
| FLAT\_MAP\_HEIGHTMAP\_REGION\_STOP | 0.05 | Regions (an area that use the same material texture) use an unsigned distance field. 0.0 is right in between two regions, 1.0 is towards the middle of a region |
| FLAT\_MAP\_HEIGHTMAP\_BLEND\_RANGE | 0.1 | controls the sharpness of the material textures fading in. Lower value = sharper blend |
| ``` Grass scattering adds light to grass materials to simulate scattering between strands of grass ``` | | |
| GRASS\_SCATTER\_NORMAL\_SMOOTHING | 0.5 | Higher values makes the grass srands point more upwards. Smoothes the lighting over hills |
| GRASS\_SCATTER\_ROUGHNESS\_STRENGTH | 0.03 | The roughness of the strands relative to the material's roughness |
| GRASS\_SCATTER\_STRENGTH | 0.5 | Controls how much light to add through this effect |
| SPECULAR\_BACK\_LIGHT\_DIFFUSE | { 0.06, 0.3, 1 } | There's a special kind of backlight in the terrain shader. The light is always positioned for maximum specular reflection for surface normal of (0, 1, 0) |
| SPECULAR\_BACK\_LIGHT\_INTENSITY\_MIN | 0 | The light's intensity varies depending on the surface roughness. This is the intensity value when roughness is equal to SPECULAR\_BACK\_LIGHT\_ROUGHNESS\_MIN |
| SPECULAR\_BACK\_LIGHT\_INTENSITY\_MAX | 2.5 | The light's intesity value when the surface roughness is equal to SPECULAR\_BACK\_LIGHT\_ROUGHNESS\_MAX |
| SPECULAR\_BACK\_LIGHT\_ROUGHNESS\_MIN | 0.35 |  |
| SPECULAR\_BACK\_LIGHT\_ROUGHNESS\_MAX | 0.5 |  |
| SURROUND\_MAP\_INNER\_RECT | { 1312, 1808, 7700, 3600 } | x-start, y-start, x-end, y-end |
| SURROUND\_MAP\_OUTER\_RECT | { -16384, -10000, 32768, 20000 } | x-start, y-start, x-end, y-end |
| SURROUND\_MAP\_TILE\_FACTOR | { 4, 2 } |  |
| SURROUND\_MAP\_CLOUDHEIGHT | 20 |  |
| SURROUND\_MAP\_MINCLOUDALPHA | 0.15 |  |
| SURROUND\_MAP\_MAXCLOUDALPHA | 0.8 |  |
| SURROUND\_MAP\_PARALLAXSTRENGTH | 150 |  |
| SURROUND\_MAP\_PARALLAXFADEFACTOR | 1000 |  |
| SURROUND\_MAP\_BASECLOUDTILEFACTOR | { 40, 20 } | Large shapes scale |
| SURROUND\_MAP\_BASECLOUDSCROLLING | { 0.005, 0.0025 } | Large shapes direction |
| SURROUND\_MAP\_BASECLOUDSTRENGTH | 20 | Large shapes normals strength |
| SURROUND\_MAP\_CLOUD1TILEFACTOR | { 8, 8 } | Mid scale |
| SURROUND\_MAP\_CLOUD1SCROLLING | { 0.0025, -0.0025 } | Mid direction |
| SURROUND\_MAP\_CLOUD1STRENGTH | 8 | Mid strength |
| SURROUND\_MAP\_CLOUD2TILEFACTOR | { 16, 16 } |  |
| SURROUND\_MAP\_CLOUD2SCROLLING | { -0.0015, 0.0015 } |  |
| SURROUND\_MAP\_CLOUD2STRENGTH | 4 |  |
| SURROUND\_MAP\_LOWCLOUDCOLOR | { 0.6, 0.16, 0.5 } |  |
| SURROUND\_MAP\_HIGHCLOUDCOLOR | { 0.6, 0.16, 0.9 } |  |
| SURROUND\_MAP\_SHADOWCOLOR | { 0.66, 0.3, 0.35 } |  |
| UNIMPORTANT\_ELEMENT\_ALPHA | 0.5 | Used by TransparentIfTrue and variants |
| DYNAMIC\_GAME\_OBJECT\_END\_STATE | end |  |
| SIEGE\_IMAGE\_LEVELS | { 1, 3, 5 } | At which siege progress levels does the image change? |
| TERRAIN\_TINT\_TEXTURE\_LAYERS | 4 |  |
| MAP\_OBJECT\_OCCLUSION\_LAYERS | { vegetation\_low, vegetation\_medium, vegetation\_high } | which map object layers should be occluded by things like cities and roads. Will only hide mesh-type map objects (i.e units, cities, entities, vfx etc won't be hidden) |
| DEVASTATION\_MATERIAL\_NAME | DYNAMIC-Devastation\_Mud\_01 | Devastation texture Material name from materials.settings |
| DEFAULT\_IO\_BACKGROUND\_PATH | gfx/interface/component\_overlay/army\_header\_90x60.dds |  |
| DISABLE\_RIVERS\_ZOOM\_LEVEL | 10 |  |
| RIVERS\_CLEARING\_ZONE\_THICKNESS | 1.5 | The thickness of the clearing zone around river's splines, |
| DISABLE\_SHADOWS\_ZOOM\_LEVEL | 6 |  |
| TRADE\_WAGONS\_OPACITY\_START\_STEP\_LAND | 5 |  |
| TRADE\_WAGONS\_OPACITY\_START\_STEP\_WATER | 8 |  |

### GraphicsTest

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| IGNORE\_KEY\_REGEX | default\_audio\_listener|default\_mesh|default\_particle|default\_skeletal\_mesh |  |

### GUI

From /Europa Universalis V/game/loading\_screen/common/defines/00\_defines.txt

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| VALUE\_LIMIT\_SHOW\_K | 100000 | army values greater that this will be shown as 50K |
| RENAME\_MAX\_LENGTH | 40 | How long can names and such be when renaming things (E.G., characters, titles, dynasties) |
| MAX\_BREAKDOWN\_ENTRIES | 10 | Used to limit the number of entries in some breakdowns (E.G., tax from vassals) |
| CONFIRM\_MOUSE\_HOLD\_TIME | 0.5 | how long you have to hold the mouse button down to get an action |
| SIDEMENU\_VERTICAL\_OFFSET | 10 |  |
| SIDEMENU\_TOP\_MARGIN | 180 |  |
| SIDEMENU\_BOTTOM\_MARGIN | 110 |  |
| SIDEMENU\_SCROLLAREA\_HEIGHT\_OFFSET | 50 |  |
| VERY\_LOW\_FOOD\_ALERT\_THRESHOLD | 0.25 |  |
| LOW\_FOOD\_ALERT\_THRESHOLD | 0.6 |  |
| RGO\_QUEUE\_CTRL\_CLICK | 5 |  |
| BUILDINGS\_QUEUE\_CTRL\_CLICK | 5 |  |
| ARMIES\_QUEUE\_CTRL\_CLICK | 5 |  |
| UNIT\_TEMPLATES\_LOCATON\_STEPS\_CONSTRUCTION | 20 |  |
| CANCEL\_CONSTRUCTION\_QUEUE\_CTRL\_CLICK | 5 | Armies and buildings |
| REDUCE\_RGO\_QUEUE\_CTRL\_CLICK | 5 |  |
| DESTROY\_BUILDINGS\_QUEUE\_CTRL\_CLICK | 5 |  |
| TAKE\_LOANS\_CTRL\_CLICK | 5 |  |
| ROADS\_QUEUE\_CTRL\_CLICK | 5 |  |
| SHOWN\_ROAD\_UPGRADES\_COUNT | 10 |  |
| SHOW\_SCROLLBAR\_EVENT\_OPTIONS\_NUMBER | 5 |  |
| TUTORIAL\_STEP\_INSTRUCTION\_BUTTON\_ID | next |  |
| HINT\_CAROUSEL\_TIME | 10 | Time for each hint displayed. |
| PURGE\_COA\_SEARCH\_COUNT | 100 | How many COA entries we will search through in a frame for purging |
| DARK\_COLOR\_THRESHOLD | 0.6 |  |
| SIGNIFICANT\_AMOUNT\_FOR\_NEGATIVE\_INCOME | -0.01 |  |
| GOVERNMENT\_REFORM\_SOCIETAL\_VALUE\_REQUIREMENT\_FORECAST\_IN\_MONTHS | 12 |  |
| GOVERNMENT\_REFORM\_SOCIETAL\_VALUE\_REQUIREMENT\_FORECAST\_CUTOFF\_IN\_MONTHS | 24 |  |

### Gui

From /Europa Universalis V/game/loading\_screen/common/defines/graphic/00\_graphics.txt

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| TOOLTIP\_TINT\_RGBA | { 1, 1, 1, 1, 0.8, 0.8, 0.8, 1, 0.6, 0.6, 0.6, 1, 0.1, 0.1, 0.1, 0.2 } | Tooltip stack tint RGBA colors starting with the top tooltip |
| ALERT\_NO\_GOODS\_TRADE\_MAX | 0.01 |  |
| ALERT\_HIGH\_INFLATION\_MIN | 0.25 | Show an alert if inflation is more than this amount |
| ANTAGONISM\_TOOLTIP\_MAX\_COUNTRIES\_ENTRIES | 15 |  |
| ANTAGONISM\_TOOLTIP\_MAX\_CAUSES\_ENTRIES | 10 |  |
| LANGUAGE\_FLAGS | { lfENG={ pattern="pattern\_solid.dds" color1=blue color2=white color3=red colored\_emblem={ color1=blue color2=white color3=red texture="ce\_british\_union\_jack.dds" } }, lfBRA={ pattern="pattern\_solid.dds" color1=green color2=yellow color3=blue colored\_emblem={ color1=yellow color2=yellow texture="ce\_rhombus.dds" instance={ scale={ 0.800000 0.800000 } } } colored\_emblem={ color1=blue color2=green color3=white texture="ce\_celestial\_sphere\_brazil.dds" instance={ scale={ 0.660000 0.660000 } } } }, lfFRA={ pattern="pattern\_solid.dds" color1=blue\_dark color2=white color3=rgb { 127 25 28 } colored\_emblem={ color1=blue\_dark color2=white color3=rgb { 127 25 28 } texture="ce\_tricolor\_vertical.dds" } }, lfGER={ pattern="pattern\_solid.dds" color1=black color2=red color3=yellow colored\_emblem={ color1=black color2=red color3=yellow texture="ce\_tricolor\_horizontal.dds" } }, lfPOL={ pattern="pattern\_solid.dds" color1=white color2=red\_mid colored\_emblem={ color1=white color2=red\_mid texture="ce\_per\_fess.dds" } }, lfRUS={ pattern="pattern\_solid.dds" color1=white color2=blue color3=red\_secondary colored\_emblem={ color1=white color2=blue color3=red\_secondary texture="ce\_tricolor\_horizontal.dds" } }, lfSPA={ pattern="pattern\_solid.dds" color1=yellow color2=red colored\_emblem={ color1=red color2=red texture="ce\_solid.dds" instance={ position={ 0.500000 0.100000 } scale={ 1.000000 0.200000 } } instance={ position={ 0.500000 0.900000 } scale={ 1.000000 0.200000 } } } textured\_emblem={ texture="te\_coa\_spain\_modern.dds" instance={ position={ 0.330000 0.495000 } scale={ 0.600000 0.600000 } } } }, lfJAP={ pattern="pattern\_solid.dds" color1=white color2=red colored\_emblem={ color1=red color2=red texture="ce\_frame\_circle.dds" instance={ scale={ 0.600000 0.600000 } } } }, lfCHN={ pattern="pattern\_solid.dds" color1=red\_mid color2=yellow\_light colored\_emblem={ color1=yellow\_light color2=yellow\_light texture="ce\_china\_modern\_stars.dds" } }, lfKOR={ pattern="pattern\_solid.dds" color1=white color2=blue color3=red\_secondary color4=black colored\_emblem={ color1=red\_secondary color2=blue color3=black texture="ce\_korea\_modern\_taeguk.dds" } }, lfTUR={ pattern="pattern\_solid.dds" color1=red\_mid color2=white colored\_emblem={ color1=white color2=white texture="ce\_turkey\_modern\_crescent\_star.dds" } } } | Use "coa" console command e.g. to attain these; For flags visible on initial language screen, Also add a prefix like "lf" to the tag names so they don't overlap the game tags. Sorry about that implementation detail leakage.: English, Brazilian, French, German, Polish, Russian, Spanish, Japanese, Chinese, Korean, Turkish |
| CONSTRUCTION\_PROGRESS\_COLOR\_STALLED | { 0.5, 0.5, 0.5, 1 } |  |
| CONSTRUCTION\_PROGRESS\_COLOR\_USUAL | { 0.01, 0.6, 0.9, 1 } |  |

### ImperialCircle

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| FORMATION\_PERIOD\_MONTHS | 24 | How long HRE members have to join a circle before formation locks |
| CANDIDATE\_AREA\_HRE\_LOCATION\_PERCENT | 0.5 | Minimum fraction of an area's locations that must be HRE-owned for a circle to form there |
| MIN\_VOTING\_POWER\_THRESHOLD | 10 | Raw voting-power cutoff for merge cascade: circles below this absolute power get absorbed into the smallest adjacent circle during formation |
| MAX\_VOTING\_POWER\_CAP | 0.35 | No single circle may exceed this share of total HRE voting power |
| CIRCLE\_DORMANCY\_THRESHOLD | 2 | A circle with fewer than this many active members is dormant |

### InternationalOrganization

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MONTHS\_TO\_DISBAND\_FROM\_BIAS | 3 | how many months to let a bias imbalance build up before disbanding the IO |
| PARLIAMENT\_REQUEST\_ISSUE\_SUPPORT\_NEEDED | 0.5 |  |
| PARLIAMENT\_ISSUE\_THRESHOLD | 0.5 |  |
| PARLIAMENT\_DURATION\_DAYS | 365 |  |
| PARLIAMENT\_AVAILABLE\_AGENDAS | 5 |  |

### JominiEars

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| RANGE\_MIN | 10 |  |
| RANGE\_MAX | 500 |  |
| JOMINI\_CAMERA\_PROBE\_RANGES | { { ZOOM\_STEP\_FROM, 25, ZOOM\_STEP\_TO, 200, PROBE\_STEP\_FROM, 0, PROBE\_STEP\_TO, 100 }, { ZOOM\_STEP\_FROM, 201, ZOOM\_STEP\_TO, 8000, PROBE\_STEP\_FROM, 201, PROBE\_STEP\_TO, 500 } } |  |
| PROBE\_DISTANCE\_DEFAULT\_SCALE\_FACTOR | 0.01 |  |

### JominiGraphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| BLOOM\_ITERATIONS | 6 |  |
| NULL\_ENTITY | test\_object\_entity |  |
| NULL\_MESH | test\_object\_mesh |  |

### JominiIcons

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ICON\_DEFAULT\_NAME | \_default |  |
| ICON\_INVALID\_NAME | \_invalid |  |
| MODIFIER\_TEXT\_ICON\_SIZE | { 32, 32 } |  |
| MODIFIER\_TEXT\_ICON\_OFFSET | { 0, 10 } |  |
| MODIFIER\_TEXT\_ICON\_FONT\_SIZE | 18 |  |
| SHARED\_ICON\_DEFAULT\_PATH | gfx/interface/icons/\_default.dds |  |

### JominiMap

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| WORLD\_EXTENTS\_X | 16384 |  |
| WORLD\_EXTENTS\_Y | 32 |  |
| WORLD\_EXTENTS\_Z | 8192 |  |
| WATERLEVEL | 2.669 |  |

### JominiMapGraphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MAP\_OBJECT\_CELL\_COUNT | 200 |  |
| MAP\_OBJECT\_FADE\_SPEED | 3 |  |
| COUNTRY\_NAMES\_TEST\_LINES\_SPACING | 50 |  |
| COUNTRY\_NAMES\_SCALE | 0.8 |  |
| COUNTRY\_NAMES\_SCALE\_CAP\_WIDTH | 0.9 |  |
| COUNTRY\_NAMES\_SCALE\_CAP\_HEIGHT | 0.6 |  |
| COUNTRY\_NAMES\_NUM\_LINE\_TESTS | 3 |  |
| COUNTRY\_NAMES\_MAX\_STRETCH\_FACTOR | 1.6 |  |
| COUNTRY\_NAMES\_LOD\_FACTOR | 0.06 | Names get blurrier as the texel/pixel ratio increases. Blur amount will be lod factor \* texel/pixel ratio |
| COUNTRY\_NAMES\_THICKNESS\_BIAS | 0 | More bias = thicker map names. Can be used to solve artifacts caused by thin areas |
| COUNTRY\_NAMES\_STRIDE\_SIZE | 1 |  |
| COUNTRY\_NAMES\_MAX\_COSINE | -0.9 |  |

### LateralView

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| IMPORT\_EXPORT\_ZOOM\_LEVEL | 14 |  |
| RECRUIT\_LOCATION\_ZOOM\_LEVEL | 3 |  |
| MAX\_INT\_ORG\_IN\_UI | 16 |  |
| MAX\_GP\_SUBJECT\_IN\_UI | 9 |  |
| MAX\_RELATION\_ITEMS\_IN\_UI | 8 |  |
| MAX\_REFORM\_ITEMS\_IN\_UI | 11 |  |
| MAX\_ESTATE\_PRIVILIGE\_ITEMS\_IN\_UI | 10 |  |
| MIN\_AUTOCOMPLETE\_TEXT\_LENGTH | 3 |  |
| FILTERED\_SEARCH\_BOX\_INPUT\_DEALY | 300 | milliseconds |

### Location

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MAX\_NUM\_LOCATIONS\_FOR\_INTEGRATE\_SLOWDOWN | 5 |  |
| RGO\_BASE\_TIME | 180 |  |
| RGO\_LOAD\_TIME\_FRACTION | 0.33 | 33% of cap, if pop can afford it. |
| RGO\_LOAD\_TIME\_MAX\_PEASANT\_PERCENTAGE | 0.1 | max % of peasants |
| LOAD\_TIME\_VILLAGE\_MAX\_SIZE\_FRACTION | 0.2 |  |
| LOAD\_TIME\_TOWN\_SCALE\_SETUP | 0 |  |
| LOOT\_MONTHS | 12 |  |
| ``` additional efficiency for supply limit. BaseSupplyLimit() * (1.0 + efficiency) THESE ARE MUTUALLy EXCLUSIVE ``` | | |
| SUPPLY\_LIMIT\_OWNER | 0.25 | Should be highest of these defines or AI will be confused. |
| SUPPLY\_LIMIT\_ACCESS | 0.1 |  |
| SUPPLY\_LIMIT\_ALLY | 0.1 |  |
| SUPPLY\_LIMIT\_CONTROLLER | 0.1 |  |
| MIN\_FRONTAGE\_AFTER\_TERRAIN | 2 |  |
| DOOM\_FROM\_LOOTING\_PER\_DEVELOPMENT | -0.01 |  |
| HORDE\_UNITY\_FROM\_LOOTING\_PER\_DEVELOPMENT | 0.01 |  |
| PROSPERITY\_MIN | -1 |  |
| PROSPERITY\_MAX | 1 |  |
| FORT\_GARRISON\_UPKEEP | 2 |  |
| SUBSISTENCE\_AGRICULTURE | 0.8 |  |
| CAPITAL\_FLIP\_SPEED | 0.04 |  |
| FORT\_FLIP\_SPEED | 0.033 |  |
| FLIP\_REVERT\_SPEED | 0.033 |  |
| SECONDARY\_CULTURE\_THRESHOLD\_PERCENT | 0.9 | How small should the Primary Culture be before we show a Secondary Culture in the Culture mapmode |
| SECONDARY\_RELIGION\_THRESHOLD\_PERCENT | 0.9 | How small should the Primary Religion be before we show a Secondary Religion in the Religon mapmode |
| OVERSEAS\_DISTANCE | 150 | Provinces beyond this distance to capital are distant overseas |
| FREEZE\_OVER\_CHANCE | 0.2 | chance of freezing over on entering at least a second week of severe winter |
| THAW\_CHANCE | 0.4 | chance of thawing on entering at least a second week after leaving a severe winter |
| CONQUERED\_LOCATION\_INTEGRATION\_REBELLION\_HIT | -10 | Location loses that much integration immediately when a rebellion happens |
| CONQUERED\_LOCATION\_INTEGRATION\_DECAY | -0.1 | Location loses that much integration monthly if it's not owned by the country who conquered it |
| CONQUERED\_OCCUPIED\_LOCATION\_INTEGRATION\_DECAY | -0.025 | Location loses that much integration monthly if it's not owned by the country who conquered it but it's occupied by it |
| LONG\_TIME\_TO\_FILL\_EMPLOYEES\_FROM\_PROMOTES | 18 | number of months it would take to fill a building with employees from promotes before we get an alert |
| NORMAL\_LOCATION\_SIZE | 25 | roughly the median. this size equals 100% effect of location size on institution spread. higher than this and it takes longer, lower than this and it goes quicker |
| MIN\_LOCATION\_PIXELS | 100 | minimum number of pixels before throwing an error |
| MIN\_LOCATION\_CHUNK\_PIXELS | 0 | Print an error if there's a location with a disconnected chunk of X or less pixels |
| MIN\_LOCATION\_CHUNK\_PIXELS\_IMPASSABLE | 0 | Print an error if there's an impassable location with a disconnected chunk of X of less pixels |
| MAX\_LOCATION\_NEIGHBOR\_SIZE | 3 | warning color on Size mapmode if a location has a neighbor more than this many times bigger than itself |
| ROAD\_PROPAGATION\_FACTOR | 0.25 | Build roads next to existing roads |
| EXPECTED\_MINIMUM\_SETUP\_POPULATION | 0 | Total population minimum expected at setup |
| MONTHLY\_CONTROL\_DECAY | 0.01 |  |

### LocationMapObjects

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| EXIT\_STATE\_NAME | ExitState |  |
| EXIT\_VARIABLE\_NAME | Exit |  |

### MapColors

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` Colors are HSV with the Hue expressed as degree value / 360 ``` | | |
| DEBUG\_COLOR | { 0.83, 1, 1 } |  |
| DEFAULT\_COLOR | { 0, 0, 0.7 } |  |
| WATER\_MAP\_COLOR | { 0.58, 0.35, 0.45 } |  |
| OCEAN\_MAP\_COLOR | { 0.58, 0.35, 0.35 } |  |
| WATER\_MAP\_ALPHA | 0 |  |
| WATER\_COLOR\_LESS\_ALPHA | 0.95 | Where we want to soften color on water (naval range). |
| WATER\_STRIPE\_LESS\_ALPHA | 0.2 | Where we want to soften stripes on water (naval range). |
| IMPASSABLE\_LAND\_MAP\_COLOR | { 0.17, 0.05, 0 } |  |
| IMPASSABLE\_LAND\_MAP\_ALPHA | 0 |  |
| SELECTABLE\_LAND\_MAP\_COLOR | { 0.17, 0.05, 0 } |  |
| SELECTABLE\_LAND\_MAP\_ALPHA | 0 |  |
| ``` Build ``` | | |
| QUEUED\_MAP\_COLOR | { 0.55, 0.7, 1 } |  |
| CANBUILD\_MAP\_COLOR | { 0.33, 0.8, 0.4 } |  |
| CANBUILD\_SUBJECT\_MAP\_COLOR | { 0.33, 0.8, 0.2 } |  |
| CANUPGRADEBUILDING\_MAP\_COLOR | { 0.63, 0.53, 0.25 } |  |
| CANTBUILD\_MAP\_COLOR | { 0, 0.8, 0.7 } |  |
| FULLYBUILD\_MAP\_COLOR | { 0.63, 0.8, 0.8 } |  |
| PROVINCE\_HIGHLIGHT\_COLOR | { 0, 0, 1, 1 } |  |
| TRANSPARENT\_COLOR | { 0, 0, 0, 0 } |  |
| CITY\_HIGHLIGHT\_COLOR | { 0, 0, 1, 1 } |  |
| COUNTRY\_HIGHLIGHT\_COLOR | { 0, 0, 1, 0.4 } | would be merged with the country color using the alpha |
| GENERAL\_HIGHLIGHT\_ALPHA | 0.075 | For the GUI-script triggered highlighting, this overrides the alpha completely, even for PROVINCE/CITY\_HIGHLIGHT\_COLOR |
| WASTELAND\_HIGHLIGHT\_ALPHA | 0.15 | Used for wastelands when highlighting a country |
| INACCESSIBLE\_HIGHLIGHT\_COLOR | { 0, 1, 0.7, 1 } |  |
| LOW\_SUPPLY\_HIGHLIGHT\_COLOR | { 0.18, 1, 0.7, 1 } |  |
| REACTIVE\_MARKET\_COLOR\_ALPHA | 0.5 |  |
| COLOR\_TOO\_SIMILAR\_THRESHOLD | 0.04 | The threshold in interaction target view below which a color being too similar to COLOR\_TOO\_SIMILAR\_COLOR gets some special recoloring. |
| COLOR\_TOO\_SIMILAR\_COLOR | { 0.08, 0.403, 0.545 } | Set to the texture of the map. |
| MAP\_COLOR\_NULL | { 0.55, 0.43, 0.07 } | blue black |
| MAP\_COLOR\_MIN | { 0, 0.85, 0.015 } | black |
| MAP\_COLOR\_LOW | { 0, 0.85, 0.34 } | red |
| MAP\_COLOR\_MID | { 0.13, 0.95, 0.75 } | yellow |
| MAP\_COLOR\_HIGH | { 0.31, 0.9, 0.6 } | green |
| MAP\_COLOR\_MAX | { 0.31, 1, 1 } | light-green |
| MAP\_COLOR\_TOP | { 0.49, 1, 1 } | light blue |
| MAP\_ANTAGONISM\_ORANGE | { 0.08, 0.85, 0.9 } | light orange (antagonism coalition threshold pivot) |
| MAP\_COLOR\_PROXIMITY\_BUILDING | { 0, 0, 1 } | white |
| ``` Current Weather map mode (clear / weak…strong interpolation) ``` | | |
| WEATHER\_MAP\_CLEAR\_COLOR | { 0.31, 0.55, 0.55 } |  |
| WEATHER\_MAP\_WEAK\_COLOR | { 0.13, 0.95, 0.88 } |  |
| WEATHER\_MAP\_POWERFUL\_COLOR | { 0, 0.95, 0.95 } |  |
| MAP\_COLOR\_POSITIVE\_MIN | { 0.31, 0.3, 0.3 } | dark-green |
| MAP\_COLOR\_NEUTRAL\_MIN | { 0.13, 0.3, 0.3 } | dark-yellow |
| MAP\_COLOR\_NEGATIVE\_MIN | { 0, 0.3, 0.3 } | dark-red |
| GOODS\_PRICE\_DIFFERENCE\_COPPER | { 0.05, 0.8, 0.9 } |  |
| GOODS\_PRICE\_DIFFERENCE\_SILVER | { 0, 0, 0.9 } |  |
| GOODS\_PRICE\_DIFFERENCE\_GOLD | { 0.1, 1, 1 } |  |
| ``` AI Disposition mapmode colors (HSV) ``` | | |
| MAP\_AI\_DISP\_ALARMED | { 0.091, 0.786, 0.953 } |  |
| MAP\_AI\_DISP\_WARY | { 0.147, 0.47, 0.902 } |  |
| MAP\_AI\_DISP\_PLANNING\_WAR | { 0.009, 0.812, 1 } |  |
| MAP\_AI\_DISP\_COVETS | { 0.765, 0.435, 0.659 } |  |
| MAP\_AI\_DISP\_DOMINEERING | { 0.51, 1, 0.667 } |  |
| MAP\_AI\_DISP\_RIVALS | { 0.03, 1, 0.7 } |  |
| MAP\_AI\_DISP\_NEUTRAL | { 0, 0, 0.812 } |  |
| MAP\_AI\_DISP\_SELF | { 0.118, 0.882, 0.294 } |  |
| MAP\_AI\_DISP\_FRIENDLY | { 1, 0.843, 0 } |  |
| MAP\_COLOR\_SATURATION\_RANGE | { 0, 1 } |  |
| MAP\_COLOR\_VALUE\_RANGE | { 0, 1 } | { 0.38 1.0 } |
| ``` Deuteranopia/Protanopia palette - matches GUI color_red (blue-violet) / color_green (lime-yellow) Value (brightness) ramps linearly ``` | | |
| MAP\_COLOR\_LOW\_CB\_RG | { 0.67, 0.7, 0.5 } | dark blue-violet |
| MAP\_COLOR\_MID\_CB\_RG | { 0.42, 0.6, 0.63 } | olive-green midpoint |
| MAP\_COLOR\_HIGH\_CB\_RG | { 0.2, 0.9, 0.75 } | bright lime-yellow |
| MAP\_COLOR\_MAX\_CB\_RG | { 0.2, 1, 0.88 } | very bright lime |
| MAP\_COLOR\_TOP\_CB\_RG | { 0.17, 0.9, 1 } | max bright lime |
| ``` Tritanopia palette - red/green axis (tritanopes retain L/M discrimination; avoids orange-cyan confusion axis) Value (brightness) ramps linearly: ``` | | |
| MAP\_COLOR\_LOW\_CB\_TRI | { 0, 0.85, 0.5 } | dark red |
| MAP\_COLOR\_MID\_CB\_TRI | { 0.12, 0.65, 0.63 } | yellow-green |
| MAP\_COLOR\_HIGH\_CB\_TRI | { 0.33, 0.8, 0.75 } | bright green |
| MAP\_COLOR\_MAX\_CB\_TRI | { 0.33, 0.88, 0.88 } | very bright green |
| MAP\_COLOR\_TOP\_CB\_TRI | { 0.33, 0.9, 1 } | max bright pale green |
| SELL\_LOCATION\_UNAVAILABLE\_COLOR | { 0.95, 0.13, 0.75 } |  |
| SELL\_LOCATION\_AVAILABLE\_COLOR | { 0.13, 0.95, 0.75 } |  |
| SELL\_LOCATION\_SELECTED\_COLOR | { 0.31, 1, 1 } |  |
| RECRUIT\_AVAILABLE\_COLOR | { 0.13, 0.95, 0.75 } |  |
| RECRUIT\_SELECTED\_COLOR | { 0.31, 1, 1 } |  |
| BUILD\_BUILDINGS\_AVAILABLE\_COLOR | { 0.13, 0.95, 0.75 } |  |
| BUILD\_BUILDINGS\_SELECTED\_COLOR | { 0.31, 1, 1 } |  |
| BUILD\_RGO\_AVAILABLE\_COLOR | { 0.13, 0.95, 0.75 } |  |
| BUILD\_RGO\_SELECTED\_COLOR | { 0.31, 1, 1 } |  |
| RIVERS\_RIVER\_COLOR | { 0.54, 0.8, 1 } |  |
| RIVERS\_SEA\_COLOR | { 0.66, 0.4, 0.1 } |  |
| RIVERS\_LAND\_COLOR | { 0.35, 0.92, 0.27 } |  |
| SELECTED\_GOODS\_COLOR\_OUR\_RGO | { 0.333, 0.8, 0.6 } |  |
| SELECTED\_GOODS\_COLOR\_OUR\_PRODUCED | { 0.8, 0.333, 0.6 } |  |
| SELECTED\_GOODS\_COLOR\_TRADEABLE | { 0.05, 0.8, 0.6 } |  |
| SELECTED\_GOODS\_COLOR\_OTHER | { 0.12, 1, 0.7 } |  |
| POPULATION\_VALUE\_MIDPOINT | 0.3 |  |
| POPULATION\_VALUE\_INHABITED\_OFFSET | 0.05 |  |
| POPULATION\_STARVING\_COLOR\_STRIPE | { 0, 0.8, 0.95 } |  |
| MAP\_BIAS\_NON\_NEUTRAL\_OFFSET | 0.15 |  |
| MAP\_DEVASTATION\_PROSPERITY\_NON\_NEUTRAL\_OFFSET | 0.15 |  |
| OFFER\_PEACE\_PLAYER\_COLOR | { 0.333, 0.848, 0.66 } |  |
| OFFER\_PEACE\_DEMANDED\_COLOR | { 0.333, 1, 1 } |  |
| OFFER\_PEACE\_DEMANDED\_ALLIED\_COLOR | { 0.333, 1, 0.4 } |  |
| OFFER\_PEACE\_AVAILABLE\_COLOR | { 0, 0.9, 0.8 } |  |
| OFFER\_PEACE\_UNAVAILABLE\_COLOR | { 0, 0.5, 0.3 } |  |
| OFFER\_PEACE\_BECOME\_SUBJECT\_COLOR | { 0.333, 0.8, 0.7 } |  |
| OFFER\_PEACE\_CANCEL\_SUBJECT\_COLOR | { 0, 0, 1 } |  |
| OFFER\_PEACE\_FORM\_UNION\_COLOR | { 0.666, 0.8, 0.7 } |  |
| OFFER\_PEACE\_RELEASE\_NATION\_COLOR | { 0.833, 0.8, 0.7 } |  |
| OFFER\_PEACE\_ANNUL\_TREATIES\_COLOR | { 0, 0, 0 } |  |
| CREATE\_MILITARY\_OBJECTIVE\_SELECTED | { 0.11, 0.9, 1 } |  |
| CREATE\_MILITARY\_OBJECTIVE\_AVAILABLE | { 0.05, 0.6, 0.67 } |  |
| CREATE\_MILITARY\_OBJECTIVE\_SECONDARY\_HIGHLIGHT | { 0.11, 0.9, 0.5 } |  |
| SETUP\_TRADE\_ORIGIN\_COLOR | { 0.617, 0.75, 0.85 } |  |
| TACTICAL\_0\_COLOR | { 0, 0.638, 0.34 } | red |
| TACTICAL\_1\_COLOR | { 0.13, 0.713, 0.75 } | yellow |
| TACTICAL\_2\_COLOR | { 0.31, 0.675, 0.6 } | green |
| TACTICAL\_3\_COLOR | { 0.31, 0.75, 1 } | light-green |
| NAVAL\_RANGE\_CUTOFF\_FACTOR | 1.25 | Remove ugly black stripes on water from this factor times max range |
| NO\_WINTER\_COLOR | { 0, 0, 0 } |  |
| NO\_WINTER\_ALPHA | 1 |  |
| MILD\_WINTER\_COLOR | { 0.61, 0.8, 0.8 } |  |
| NORMAL\_WINTER\_COLOR | { 0.56, 0.61, 1 } |  |
| SEVERE\_WINTER\_COLOR | { 0, 0, 1 } |  |
| VOLCANO\_COLOR | { 0, 1, 0.7 } |  |
| EARTHQUAKE\_COLOR | { 0.05, 1, 1 } |  |
| LOCATION\_RANK\_UPGRADE\_COLOR | { 0.2, 0.9, 0.99 } |  |
| LOCATION\_RANK\_UPGRADE\_BLEND | 0.02 |  |
| DIPLOMACY\_OWNED\_PROVINCE\_COLOR | { 0.333, 0.848, 0.66 } |  |
| DIPLOMACY\_WAR\_ALLIES\_COLOR | { 0.333, 0.855, 0.344 } |  |
| DIPLOMACY\_DEPENDENCY\_COLOR | { 0.333, 0.748, 0.86 } |  |
| DIPLOMACY\_OVERLORD\_COLOR | { 0.444, 0.4, 0.5 } |  |
| DIPLOMACY\_SUBJECT\_COLOR | { 0.375, 0.8, 0.9 } |  |
| DIPLOMACY\_INDIRECT\_OVERLORD\_COLOR | { 0.444, 0.4, 0.25 } |  |
| DIPLOMACY\_INDIRECT\_SUBJECT\_COLOR | { 0.375, 0.8, 0.5 } |  |
| DIPLOMACY\_ALLIANCE\_COLOR | { 0.592, 0.962, 0.91 } |  |
| DIPLOMACY\_WAR\_COLOR | { 0.99, 1, 0.4 } |  |
| DIPLOMACY\_TRUCE\_COLOR | { 0.05, 0.8, 0.6 } |  |
| DIPLOMACY\_DEFENSIVE\_LEAGUE\_COLOR | { 0.5, 0.81, 0.9 } |  |
| DIPLOMACY\_GUARANTEE\_COLOR | { 0.813, 0.889, 0.9 } |  |
| DIPLOMACY\_OUT\_OF\_RANGE\_COLOR | { 0, 0, 0.3 } |  |
| DIPLOMACY\_MIL\_ACCESS\_COLOR | { 0.34, 0.34, 0.6 } |  |
| DIPLOMACY\_FOOD\_ACCESS\_COLOR | { 0.34, 0.34, 0.7 } |  |
| DIPLOMACY\_FLEET\_BASING\_COLOR | { 0.34, 0.34, 0.65 } |  |
| DIPLOMACY\_CLAIM\_SECOND\_COLOR | { 0.135, 0.7, 1 } |  |
| DIPLOMACY\_UNION\_COLOR | { 0.413, 0.921, 0.76 } |  |
| DIPLOMACY\_ROYAL\_MARRIAGE\_COLOR | { 0.7, 0.921, 0.86 } |  |
| DIPLOMACY\_RIVAL\_COLOR | { 0.03, 1, 0.7 } |  |
| DIPLOMACY\_RIVAL\_OVERLORD\_COLOR | { 0.03, 1, 0.5 } |  |
| DIPLOMACY\_RIVAL\_SUBJECT\_COLOR | { 0.03, 0.7, 0.7 } |  |
| DIPLOMACY\_ENEMY\_COLOR | { 0.1, 1, 0.7 } |  |
| DIPLOMACY\_ENEMY\_OVERLORD\_COLOR | { 0.1, 1, 0.5 } |  |
| DIPLOMACY\_ENEMY\_SUBJECT\_COLOR | { 0.1, 0.7, 0.7 } |  |
| DIPLOMACY\_MUTUAL\_COLOR | { 0.06, 1, 0.7 } |  |
| DIPLOMACY\_MUTUAL\_OVERLORD\_COLOR | { 0.06, 1, 0.5 } |  |
| DIPLOMACY\_MUTUAL\_SUBJECT\_COLOR | { 0.06, 0.7, 0.7 } |  |
| DISEASE\_BUBONIC\_PLAGUE\_MIN | { 0.113, 0.221, 0.26 } |  |
| DISEASE\_BUBONIC\_PLAGUE\_MAX | { 0.413, 0.921, 0.76 } |  |
| DISEASE\_MAPMODE\_TIER\_LOW\_MAX | 0.3 |  |
| DISEASE\_MAPMODE\_TIER\_MID\_MAX | 0.6 |  |
| DISEASE\_MAPMODE\_TIER\_SYNTHETIC\_LOW | 0.12 |  |
| DISEASE\_MAPMODE\_TIER\_SYNTHETIC\_MID | 0.42 |  |
| DISEASE\_MAPMODE\_TIER\_SYNTHETIC\_HIGH | 0.88 |  |
| DISEASE\_MAPMODE\_MIN\_PRESENCE\_TO\_PAINT | 0.001 |  |
| DISEASE\_MAPMODE\_MIN\_PRESENCE\_FOR\_STRIPE | 0.02 |  |
| DISEASE\_MAPMODE\_MIN\_ENDEMIC\_RATE\_TO\_PAINT | 0.07 |  |
| INTERNATIONAL\_ORGANIZATION\_LEADER\_COLOR | { 0.14, 0.81, 1 } | 0.592 0.962 0.91 |
| INTERNATIONAL\_ORGANIZATION\_MEMBER\_COLOR | { 0.4, 0.61, 0.7 } |  |
| INTERNATIONAL\_ORGANIZATION\_TARGET\_COLOR | { 0, 0, 0.15 } |  |
| INTERNATIONAL\_ORGANIZATION\_TARGET\_VIEW\_LEADER\_COLOR | { 0.9, 0.1, 0.1 } |  |
| INTERNATIONAL\_ORGANIZATION\_TARGET\_VIEW\_MEMBER\_COLOR | { 1, 0, 0 } |  |
| INTERNATIONAL\_ORGANIZATION\_OWNED\_LAND\_COLOR | { 0.34, 0.34, 0.6 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER1\_COLOR | { 0.5, 0.81, 0.9 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER2\_COLOR | { 0.58, 0.55, 0.55 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER3\_COLOR | { 0.3, 0.81, 0.9 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER4\_COLOR | { 0.95, 0.4, 0.9 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER5\_COLOR | { 0.75, 0.35, 0.85 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER6\_COLOR | { 0.6, 0.9, 0.85 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER7\_COLOR | { 0, 0, 0.7 } |  |
| INTERNATIONAL\_ORGANIZATION\_TIER8\_COLOR | { 0.032, 0.565, 0.902 } |  |
| CATHOLIC\_CHURCH\_CURIA\_COLOR | { 0.5, 0.81, 0.9 } |  |
| HRE\_EMPEROR\_COLOR | { 0.14, 0.81, 1 } |  |
| HRE\_ELECTOR\_COLOR | { 0.5, 0.81, 0.9 } | Tier 1 |
| HRE\_ELECTOR\_ARCHBISHOP\_COLOR | { 0.58, 0.55, 0.55 } | Tier 2 |
| HRE\_FREE\_CITY\_COLOR | { 0.3, 0.81, 0.9 } | Tier 3 |
| HRE\_PRIMAS\_GERMANIAE\_COLOR | { 0.95, 0.4, 0.9 } | Tier 4 |
| HRE\_LEGATUS\_NATUS\_COLOR | { 0.75, 0.35, 0.85 } | Tier 5 |
| HRE\_IMPERIAL\_PRELATE\_COLOR | { 0.6, 0.9, 0.85 } | Tier 6 (old) 0.6667 1 1 |
| HRE\_IMPERIAL\_PRINCE\_COLOR | { 0, 0, 0.7 } | Tier 7 |
| HRE\_IMPERIAL\_PEASANT\_REPUBLIC\_COLOR | { 0.032, 0.565, 0.902 } | Tier 8 |
| REBELLION\_WILL\_OCCUR\_IN\_LOCATION\_COLOR | { 0.9, 0.81, 0.9 } |  |
| REBELLION\_HAS\_SOME\_SUPPORT\_IN\_LOCATION\_COLOR | { 0.3, 0.81, 0.3 } |  |
| COLONIAL\_OWNED\_COLOR | { 0.333, 0.848, 0.66 } |  |
| COLONIAL\_BUILDING\_COLOR | { 0.5, 0.81, 0.9 } |  |
| COLONIAL\_CHARTER\_COLOR | { 0.592, 0.962, 0.91 } |  |
| COLONIAL\_CLAIM | { 0, 1, 1 } |  |
| COLONIAL\_RANGE | { 0.13, 0.95, 0.75 } | yellow |
| FORT\_COLOR\_HOSTILE | { 0, 1, 1 } |  |
| FORT\_COLOR\_NEUTRAL | { 0.167, 1, 1 } |  |
| FORT\_COLOR\_FRIENDLY | { 0.333, 1, 1 } |  |
| AI\_DESIRE\_POSITIVE | { 0, 1, 1 } |  |
| AI\_DESIRE\_NEUTRAL | { 0.167, 0.5, 1 } |  |
| AI\_DESIRE\_NEGATIVE | { 0.333, 1, 1 } |  |
| AI\_DESIRE\_SELF | { 0.5, 1, 1 } |  |
| REGION\_HUE\_STRENGTH\_ON\_AREA | 0 |  |
| REGION\_SATURATION\_STRENGTH\_ON\_AREA | 0.5 |  |
| REGION\_VALUE\_STRENGTH\_ON\_AREA | 0.5 |  |
| PROVINCE\_HUE\_STRENGTH\_ON\_LOCATION | 0.95 |  |
| PROVINCE\_SATURATION\_STRENGTH\_ON\_LOCATION | 0.25 |  |
| PROVINCE\_VALUE\_STRENGTH\_ON\_LOCATION | 0.25 |  |
| AREA\_HUE\_STRENGTH\_ON\_PROVINCE | 0.8 |  |
| AREA\_SATURATION\_STRENGTH\_ON\_PROVINCE | 0 |  |
| AREA\_VALUE\_STRENGTH\_ON\_PROVINCE | 0 |  |
| OWNER\_COLOR\_STRENGTH\_ON\_MARKET | 0.7 |  |
| OVERLORD\_HUE\_STRENGTH\_ON\_SUBJECT | 0.8 |  |
| OVERLORD\_SATURATION\_STRENGTH\_ON\_SUBJECT | 0.4 |  |
| OVERLORD\_VALUE\_STRENGTH\_ON\_SUBJECT | 0.4 |  |
| SUBJECT\_MAP\_COLOR\_LIGHTEN | 0.1 |  |
| SUBJECT\_MAP\_COLOR\_SATURATE | -0.1 |  |
| REVOLTER\_COLOR | { 0, 0, 0 } |  |
| COUNTRY\_HUE\_STRENGTH\_ON\_REVOLTER | 1 |  |
| COUNTRY\_SATURATION\_STRENGTH\_ON\_REVOLTER | 1 |  |
| COUNTRY\_VALUE\_STRENGTH\_ON\_REVOLTER | 0.35 |  |
| LANGUAGE\_DIALECT\_HUE\_VARIATION | 0.02 |  |
| LANGUAGE\_DIALECT\_SAT\_VARIATION | 0 |  |
| LANGUAGE\_DIALECT\_VAL\_VARIATION | 0.15 |  |
| BUILD\_ROAD\_IN\_PROGRESS | { 0.6, 1, 1 } | blue |
| BUILD\_ROAD\_CONSTRUCTION\_BLOCKED | { 0, 1, 0.7 } | bright red |
| BUILD\_ROAD\_HAS\_TOP\_LEVEL\_ROAD | { 0.167, 0.5, 1 } | bright yellow |
| BUILD\_ROAD\_HAS\_OUTDATED\_LEVEL\_ROAD | { 0.82, 0.65, 1 } | light purple |
| BUILD\_ROAD\_CAN\_BUILD\_ROAD | { 0.31, 0.9, 0.6 } | green |
| BUILD\_ROAD\_MARKED\_FOR\_CONSTRUCTION | { 0.5, 0.9, 0.9 } | light blue |
| BUILD\_ROAD\_NOT\_ENOUGH\_GOLD | { 0.11, 0.9, 0.9 } | orange |
| POPULATION\_MAPMODE\_MIN | 1 |  |
| POPULATION\_MAPMODE\_LOG\_FACTOR | 1 |  |
| TAX\_BASE\_MAPMODE\_LOG\_FACTOR | 0.5 |  |

### MapEditor

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` Jomini defines these are used to calculate the mask size ``` | | |
| MASK\_SCALE | 1 |  |
| THUMBNAIL\_SIZE\_REDUCTION | 16 |  |

### MapGraphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| CLIMATE\_MAP\_TEXTURE\_SIZE | { 1024, 512 } |  |
| WINTER\_MAP\_TEXTURE\_SIZE | { 1024, 512 } |  |
| WINTER\_MAP\_FADE\_SPEED | 0.1 | (winterness/second) |
| WINTER\_ALPHA\_NONE | 0 |  |
| WINTER\_ALPHA\_MILD | 0.35 |  |
| WINTER\_ALPHA\_NORMAL | 0.55 |  |
| WINTER\_ALPHA\_SEVERE | 1 |  |
| WINTER\_ALPHA\_WATER\_NONE | 0 |  |
| WINTER\_ALPHA\_WATER\_MILD | 0.45 |  |
| WINTER\_ALPHA\_WATER\_NORMAL | 0.6 |  |
| WINTER\_ALPHA\_WATER\_SEVERE | 0.8 |  |
| WINTER\_ALPHA\_WATER\_FROZEN | 1 |  |
| WINTER\_TERRAIN\_MATERIAL\_SNOW | Snow | hard code in winter.fxh |
| WINTER\_TERRAIN\_MATERIAL\_ICE | Ice | Which material in gfx/map/terrain/materials.settings to use for ice |
| PORT\_SHIP\_LOCATOR | ship\_locator |  |
| FORT\_SIEGE\_LOCATOR | siege\_locator |  |

### MapLines

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| POP\_MOVEMENT\_IN | line\_pop\_movement |  |
| POP\_MOVEMENT\_OUT | line\_pop\_movement\_red |  |
| TRADE\_ROUTE\_IMPORT | line\_trade\_blue |  |
| TRADE\_ROUTE\_EXPORT | line\_trade\_orange |  |
| PATH\_TO\_MARKET | line\_trade\_green | TODO: create a new one. Could be bidirectional. |
| SEA\_CURRENT | line\_trade\_yellow | TODO: create a new one. A short arrow |
| RIVER\_DIRECTION | line\_trade\_yellow |  |
| UNIT\_LOGISTICS | line\_trade\_green | TODO: create a new one. unit supply looking |
| ROAD\_BUILDER | line\_road\_builder |  |
| ROAD\_BUILDER\_CONSTRUCTION | line\_road\_construction |  |
| PROXIMITY\_FROZEN | line\_pop\_movement\_red |  |
| PROXIMITY\_LAKE | line\_trade\_blue |  |
| PROXIMITY\_LAND | line\_pop\_movement\_red |  |
| PROXIMITY\_MARITIME | line\_trade\_blue |  |
| PROXIMITY\_PORT | line\_trade\_yellow |  |
| PROXIMITY\_RIVER | line\_river\_direction |  |
| PROXIMITY\_ROAD\_1 | line\_gravel\_road |  |
| PROXIMITY\_ROAD\_2 | line\_paved\_road |  |
| PROXIMITY\_ROAD\_3 | line\_modern\_road |  |
| PROXIMITY\_ROAD\_4 | line\_rails\_road |  |

### MapMarker

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| FADE\_IN\_SPEED | 5 |  |
| FADE\_OUT\_SPEED | 5 |  |
| MAP\_MARKER\_FULL\_UPDATE\_FREQUENCY | 1 |  |
| ``` Only visible in the "province" zoom level ``` | | |
| ZOOM\_STEP\_RANGE\_FORT | { 0, 10 } |  |
| ZOOM\_STEP\_RANGE\_CITY | { 0, 10 } |  |
| ZOOM\_STEP\_CITY\_DETAILS | 6 |  |
| ZOOM\_STEP\_RANGE\_CITY\_CAPITAL | { 0, 100 } |  |
| ZOOM\_STEP\_RANGE\_MARKET | { 0, 100 } |  |
| ZOOM\_STEP\_RANGE\_TOLL | { 0, 100 } |  |
| ZOOM\_STEP\_RANGE\_STATE\_CAPITAL | { 0, 5 } |  |
| ``` Visible in the "province" and "state" zoom levels ``` | | |
| ZOOM\_STEP\_RANGE\_CONSTRUCTION | { 0, 7 } |  |
| ZOOM\_STEP\_RANGE\_OCCUPATION | { 0, 10 } |  |
| ZOOM\_STEP\_RANGE\_PARLIAMENT | { 0, 10 } |  |
| ZOOM\_STEP\_RANGE\_HOLY\_SITE | { 0, 20 } |  |
| ZOOM\_STEP\_RANGE\_CABINET\_ACTION | { 0, 10 } |  |
| ZOOM\_STEP\_RANGE\_DIPLOMATIC\_ACTION | { 0, 10 } |  |
| ZOOM\_STEP\_RANGE\_BLOCKED\_VISION | { 0, 7 } |  |
| ZOOM\_STEP\_RANGE\_WINTER\_BLOCKED | { 0, 7 } |  |
| ``` Visible in the "state" zoom level ``` | | |
| ZOOM\_STEP\_RANGE\_COUNTRY\_CAPITAL | { 8, 10 } |  |
| ``` Visible in anything "state" and lower ``` | | |
| ZOOM\_STEP\_RANGE\_PORT | { -1, 5 } |  |
| ZOOM\_STEP\_RANGE\_RAW\_GOODS\_ICON | { -1, 10 } |  |
| ZOOM\_STEP\_RANGE\_DYNASTY\_ICON | { -1, 10 } |  |
| ZOOM\_STEP\_RANGE\_UNIT | { -1, 10 } |  |
| ZOOM\_STEP\_RANGE\_COMBAT | { -1, 10 } |  |
| ZOOM\_STEP\_RANGE\_IMPORT\_EXPORT\_WIDGET | { -1, 17 } |  |
| ZOOM\_STEP\_RANGE\_BUILD\_BUILDING\_WIDGET | { -1, 10 } |  |
| ZOOM\_STEP\_RANGE\_SMALL\_UNIT | { 11, 17 } |  |
| ZOOM\_STEP\_RANGE\_SMALL\_COMBAT | { 11, 17 } |  |
| MAP\_MARKER\_SETTLEMENT\_SIZE | { 10, 10 } |  |
| MAP\_MARKER\_TOWN\_SIZE | { 13, 13 } |  |
| MAP\_MARKER\_CITY\_SIZE | { 18, 18 } |  |
| MAP\_MARKER\_SETTLEMENT\_POSITION | { 18, -2 } |  |
| MAP\_MARKER\_TOWN\_POSITION | { 22, -1 } |  |
| MAP\_MARKER\_CITY\_POSITION | { 30, 4 } |  |
| ARMY\_BANNER\_STACK\_OFFSET | 29 |  |
| ARMY\_BANNER\_MERGE\_NUM | 1 | More than X army banners will be merged into the last banner as a group which you can click on to cycle through |
| ANIMATED\_TEXT\_COMBAT\_LOSS\_OFFSET | 36 |  |
| MULTIPLE\_PROVINCE\_ICONS\_OFFSET | 60 |  |
| ``` Determines which zoom level different city icons appear Some of these are cumulative ``` | | |
| CITY\_MARKER\_WEIGHT\_BASE | 0 | Offset everything by this amount |
| CITY\_MARKER\_WEIGHT\_BASE\_PLAYER | 2 | Offset everything by this amount |
| CITY\_MARKER\_WEIGHT\_LABEL\_MULTIPLIER | 0.33 | Text labels only appear once the camera gets a little closer |
| CITY\_MARKER\_WEIGHT\_ICON\_MULTIPLIER | 1 | Icons appear at the normal point |
| CITY\_MARKER\_WEIGHT\_FORT\_LEVEL | 0 | How much the fort level influences city icons |
| CITY\_MARKER\_WEIGHT\_FORT\_LEVEL\_AT\_WAR | 5 | How much the fort level influences city icons while at war |
| CITY\_MARKER\_WEIGHT\_LOCATION\_RANK | 2 | How much location rank (town, city etc) influences. Tied to frame\_tier |
| CITY\_MARKER\_WEIGHT\_PROVINCE\_CAPITAL | 2 | How much a location being the province capital influences |
| CITY\_MARKER\_WEIGHT\_PROVINCE\_CAPITAL\_AT\_WAR | 6 | How much a location being the province capital influences while at war |
| CITY\_MARKER\_WEIGHT\_AREA\_CAPITAL | 4 | How much a location being the most populated in an area influences |
| CITY\_MARKER\_WEIGHT\_COUNTRY\_CAPITAL\_PLAYER | 20 | How much being the player's country capital influences |
| CITY\_MARKER\_WEIGHT\_COUNTRY\_CAPITAL\_ALLY | 5 | How much being an ally/overlord/vassals's country capital influences |
| CITY\_MARKER\_WEIGHT\_COUNTRY\_CAPITAL\_ENEMY | 5 | How much being an enemy in a war country capital influences |
| CITY\_MARKER\_WEIGHT\_COUNTRY\_CAPITAL | 2 | How much being some other country capital influences |
| CITY\_MARKER\_WEIGHT\_COUNTRY\_CAPITAL\_GREAT\_POWER | 5 | How much being capital of a Great Power influences |
| CITY\_MARKER\_WEIGHT\_COUNTRY\_CAPITAL\_COUNTRY\_RANK | 1 | How much country rank influences |
| CITY\_MARKER\_WEIGHT\_MARKET\_CENTER | 2 | How much being a Market Center influences |
| CITY\_MARKER\_WEIGHT\_PLAYER\_HAS\_FOREIGN\_BUILDINGS | 1 | How much owning a building in a non-owned location influences |
| CITY\_MARKER\_WEIGHT\_CEILING\_FOR\_NOT\_PLAYER\_CAPITAL | 19 | At what zoom level do we kill everything but your capital |
| CITY\_MARKER\_RANK\_ZOOM\_THRESHOLD | 7 |  |

### MapModeSelector

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MAPMODES\_SLOTS\_COUNT | 14 |  |
| MAPMODES\_SLOTS\_COLLECTION\_NAME\_PREFIX | map\_modes\_slot |  |

### MapName

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| NAME\_DRAW\_DISTANCE | 4000 | Remove province names beyond this distance |
| NAME\_FONT\_NAME | { MapFont, MapFontNumbers, MapFontConsole } | Font used for drawing the map names |
| NAME\_FONT\_SIZE | 60 | Font size used for drawing the map names |
| FADE\_RATE | 3 | How fast names fade in/out |
| MAX\_OPACITY | 0.85 |  |
| MIN\_OPACITY | 0 | minimum opacity. Names hidden by draw distance will still fade to 0 |
| SMALL\_NAMES\_ZOOM\_STEP | 2 |  |
| MEDIUM\_NAMES\_ZOOM\_STEP | 8 |  |
| LARGE\_NAMES\_ZOOM\_STEP | 11 |  |
| MAX\_PROVINCE\_NAME\_ZOOM\_STEP | 17 |  |
| PROVINCE\_UNDER\_MOUSE\_OPACITY | 1 |  |
| PROVINCE\_UNDER\_MOUSE\_NEIGHBOR\_OPACITY | 0.75 |  |
| MAX\_SLOPE\_DIFFERENCE\_TO\_MEAN | { 0.5, 0.35 } |  |
| MAX\_SPLIT\_OF\_PROBLEMATIC\_NAMES | 2 |  |
| MARGIN\_OF\_PROBLEMATIC\_NAMES | 15 |  |
| MIN\_SPLIT\_SIZE | 0.2 |  |
| NAMES\_SETTING\_OVERIDE\_MEDIUM\_BLOB\_MAX\_SIZE | 3 |  |
| NAMES\_SETTING\_OVERIDE\_SMALL\_BLOB\_MAX\_SIZE | 10 |  |
| NAMES\_TEST\_LINES\_SPACING\_SMALL | 3 |  |
| NAMES\_TEST\_LINES\_SPACING\_MEDIUM | 10 |  |

### Market

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MONTHLY\_PRICE\_CHANGE | 0.05 | as fraction of (target - price) |
| MARITIME\_PRESENCE\_POWER\_ON\_POP\_SCALE | 100 | divides on this. |
| BURGHER\_TRADE\_IMPACT\_ON\_SUPPLY\_SCALE | 0.1 |  |
| TRADE\_IMPACT\_ON\_SUPPLY\_SCALE | 0.75 |  |
| BURGHER\_TRADE\_IMPACT\_ON\_DEMAND\_SCALE | 0.25 |  |
| TRADE\_IMPACT\_ON\_DEMAND\_SCALE | 0.75 |  |
| MIN\_PRICE\_IMPACT | -0.33 |  |
| MAX\_PRICE\_IMPACT | 3 |  |
| DEMAND\_ELASTICITY\_COEFFICIENT | 0.4 | demand drops 40% per 100% above default price; replaced per-tier when pop needs tiers (1.5) lands |
| DEMAND\_ELASTICITY\_FLOOR | 0.35 | minimum demand as fraction of base, regardless of price |
| FOOD\_CAPACITY\_FACTOR | 1 |  |
| FOOD\_PRICE | 0.05 |  |
| FOOD\_PRICE\_IMPACT\_ON\_PRICES | 0.25 |  |
| FOOD\_PROPORTION\_TO\_PRESERVE\_IN\_MARKET\_IF\_POSSIBLE | 0.25 |  |
| FOOD\_PROVINCE\_LOCAL\_RESERVE\_RATIO | 0.75 | provinces share food above this fraction of their capacity with the market |
| FOOD\_PASS2\_MAX\_MONTHS\_OF\_DEFICIT | 3 | cap for pass 2 food allocation: max monthly natural deficit multiples a province can absorb per tick |
| MARKET\_BASE\_ACCESS | 1 | 100% |
| ``` multiplicative ``` | | |
| MARKET\_BASE\_DISTANCE\_FACTOR | 0.005 | Access lost per pixel of distance |
| MARKET\_OPEN\_SEA\_DISTANCE\_FACTOR | 1.5 | not good at open sea. |
| MARKET\_SEA\_DISTANCE\_FACTOR | 0.75 | Markets propagate better over sea |
| MARKET\_SEA\_TO\_LAND\_DISTANCE\_FACTOR | 0.5 |  |
| MARKET\_DOWNSTREAM\_FACTOR | 0.5 | downstream is great! |
| MARKET\_UPSTREAM\_FACTOR | 0.9 | better upstream than not.. |
| ``` Withering markets: a market with <= MARKET_WITHERING_LOCATION_THRESHOLD locations that has been at or below the threshold for MARKET_WITHERING_GRACE_MONTHS months AND is outclassed for at least MARKET_WITHERING_OUTCLASSED_FRACTION of its locations gets flagged as withering. AI gets a destroy bias and a player-facing event fires on the on_market_withering_started on_action. ``` | | |
| MARKET\_WITHERING\_LOCATION\_THRESHOLD | 5 |  |
| MARKET\_WITHERING\_GRACE\_MONTHS | 24 |  |
| MARKET\_WITHERING\_OUTCLASSED\_FRACTION | 0.5 |  |
| ``` additive ``` | | |
| MARKET\_NO\_PORT\_EXTRA\_DISTANCE | 0.1 | Absolute access penalty for going between land and sea without port |
| MARKET\_PORT\_EXTRA\_DISTANCE | 0.02 | Access penalty for going between land and sea with port, scaled with 1-harbor suitability |
| MARKET\_ASSIGNMENT\_PERFORMANCE\_FACTOR | 0.5 | Lowering this number reduces performance cost of market assignments, but might cause market assignment to ignore protectionism for locations far away from any market |
| LOCATION\_NUMS\_DIVISOR\_FOR\_DESTRUCTION\_PRICE | 40 |  |
| MARKET\_CREATION\_MONTHS | 3 |  |
| MARKET\_TRADE\_CHANGE\_PER\_CLICK | 1 |  |
| MARKET\_CONSTRUCTION\_NEEDS\_BLOCK\_FACTOR | 2 |  |
| ``` these don't stack ``` | | |
| COUNTRY\_COMMON\_LANGUAGE\_MARKET\_ATTRACTION | 0.05 |  |
| COUNTRY\_COMMON\_LANGUAGE\_GROUP\_MARKET\_ATTRACTION | 0.01 |  |
| ``` these don't stack ``` | | |
| LOCATION\_DOMINANT\_LANGUAGE\_MARKET\_ATTRACTION | 0.05 |  |
| LOCATION\_DOMINANT\_LANGUAGE\_GROUP\_MARKET\_ATTRACTION | 0.01 |  |
| ``` these don't stack, gets smallest geographical unit ``` | | |
| LOCATION\_SAME\_PROVINCE\_MARKET\_ATTRACTION | 0.2 |  |
| LOCATION\_SAME\_AREA\_MARKET\_ATTRACTION | 0.1 |  |
| LOCATION\_SAME\_REGION\_MARKET\_ATTRACTION | 0 |  |
| LOCATION\_SAME\_SUBCONTINENT\_MARKET\_ATTRACTION | 0 |  |
| LOCATION\_SAME\_CONTINENT\_MARKET\_ATTRACTION | 0 |  |
| MARKET\_LANGUAGE\_POWER\_ATTRACTION | 0.1 |  |
| MARKET\_FOOD\_STOCKPILE\_TRESHOLD\_MONTHS | 24 |  |
| MARKET\_MIN\_STOCKPILE\_TO\_ALLOW\_EXTRA\_TRADE | 0.5 | At this stockpile percentage, it will start adding supply from stockpile |
| MARKET\_STOCKPILE\_FULL\_EXTRA\_TRADE\_THRESHOLD | 0.75 | The supply from stockpile increases linearly, maxing out at this value |
| MARKET\_STOCKPILE\_PERCENTAGE\_FOR\_EXTRA\_TRADE | 0.05 | When supply reaches MARKET\_STOCKPILE\_FULL\_EXTRA\_TRADE\_THRESHOLD, it will add maximum of this value. |
| STOCKPILE\_TRADE\_IMPACT\_ON\_SUPPLY\_SCALE | 0 | How much of the stockpile bleed (the extra-trade supply produced when stockpile > MARKET\_MIN\_STOCKPILE\_TO\_ALLOW\_EXTRA\_TRADE) counts toward price-formation supply. 0 = stockpile fill never suppresses price; only feeds trade routing. |
| MARKET\_WASTED\_MANUAL\_TRADE\_CAPACITY\_TRESHOLD | 0.1 |  |

### Mercenary

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MERCENARY\_MOBILIZATION\_TIME\_BASE | 2 |  |
| MERCENARY\_GATHERING\_TIME\_BASE | 14 |  |
| MERCENARY\_RECRUITMENT\_DISTANCE\_FACTOR | 0.025 |  |
| MERCENARY\_MAX\_DURATION\_IN\_MONTHS | 120 |  |
| MERCENARY\_DEFAULT\_DURATION\_IN\_MONTHS | 24 |  |
| MERCENARY\_CONTRACT\_ALERT\_MONTHS | 3 |  |
| MERCENARY\_MANPOWER\_REPLENISH\_TIME\_DAYS | 3600 | how many days for population to fully drift into an area's mercenary pool (was 7200 / 240 months, far too slow to recover or to see pops moving once availability is paid for out of population) |
| MERCENARY\_ARMY\_UNIT\_MAX\_SIZE | 150 |  |
| MERCENARY\_NAVY\_UNIT\_MAX\_SIZE | 25 |  |
| MERCENARY\_POOL\_AVAILABILITY\_SCALE\_ARMY | 0.1 | multiplier on how much of a location's population can become recruitable land mercenaries; lower means fewer available |
| MERCENARY\_POOL\_AVAILABILITY\_SCALE\_NAVY | 0.5 | same, for naval mercenaries; kept separate because a ship is not a 1000-man regiment, so the land cut would over-shrink the (already small) naval burgher draw |
| MERCENARY\_PRISONER\_MONTHLY\_MAINTENANCE\_MULTIPLIER | 0.25 |  |
| MERCENARY\_PRISONER\_MAX\_MORALE | 0.6 |  |
| LENT\_UNIT\_VIRTUAL\_CONTRACT\_MONTHS | 9999 | large enough that IsContractExpired() never fires; war-gated recall handles expiry |
| MERCENARY\_SUBUNITS\_AVAILABLE\_PER\_ADM\_POINT | 0.25 | leaders with better adm can lead bigger armies |
| MERCENARY\_LEADER\_BASE\_PRICE | 50 |  |
| MERCENARY\_LEADER\_ABILITY\_WEIGHT | 50 | multiplied by an exponential number in range 0..8 based on char ability (so better ones are a lot more expensive than worse ones, less difference between lower ability characters) |
| MERCENARY\_LEADER\_CULTURE\_OPINION\_MULTIPLIER | -0.07 | same or friendly culture leaders will work for less for you |
| MERCENARY\_LEADER\_RELIGION\_OPINION\_MULTIPLIER | -0.07 | same or friendly religion leaders will work for less for you |
| MERCENARY\_LEADER\_DISTANCE\_MULTIPLIER | 0.0005 | Mileage allowance, paid by employer. Must be nice. |
| MERCENARY\_ATTRITION\_LEVEL\_TO\_THINK\_ABOUT\_ABANDONING\_CONTRACT | 3 |  |
| MERCENARY\_DAYS\_THAT\_EMERGENCY\_RATIONS\_LAST | 365 |  |

### Messages

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MESSAGES\_CATEGORY\_ICON\_PATH | gfx/interface/icons/messages/categories |  |
| BG\_MESSAGES\_CATEGORY\_ICON\_PATH | gfx/interface/icons/messages/background |  |

### Outliner

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ICON\_PATH | gfx/interface/icons/outliner |  |
| CATEGORY\_ICON\_PATH | gfx/interface/icons/outliner/categories |  |
| BG\_CATEGORY\_ICON\_PATH | gfx/interface/icons/outliner/background |  |
| BG\_SUBCATEGORY\_ICON\_PATH | gfx/interface/icons/outliner/background |  |

### Pop

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MIN\_REBEL\_POP\_SIZE\_THRESHOLD | 5 | rebels need to have at least these amount of pop support to be a real revolt. (in thousand) |
| PRODUCED\_IN\_MARKET\_DEMAND | 0.1 |  |
| STARVING\_ON\_FOOD\_DEMAND | 1.5 |  |
| NEGATIVE\_FOOD\_ON\_FOOD\_DEMAND | 0.5 |  |
| DEVELOPMENT\_SCALE\_ON\_DEMAND | 0.05 |  |
| POP\_NEEDS\_INCOME\_SCALE | 1.33 |  |
| DISPLAY\_SIZE | 1000 |  |
| GARRISON\_MANPOWER\_LOSS\_IMPACT | 0.5 |  |
| ARMY\_MANPOWER\_LOSS\_IMPACT | 1 |  |
| NAVY\_SAILOR\_LOSS\_IMPACT | 1 |  |
| ARMY\_LEVY\_SIZE\_IMPACT\_SUPPORT | 1 |  |
| NAVY\_LEVY\_SIZE\_IMPACT\_SUPPORT | 1 |  |
| BASE\_SATISFACTION | 0.2 |  |
| ESTATE\_SATISFACTION\_OFFSET | 0.5 |  |
| ESTATE\_SATISFACTION\_SCALE | 2 |  |
| SCALE\_ESTATE\_NON\_ACCEPTED | 0.5 |  |
| GOODS\_PRICE\_SATISFACTION\_SCALE | -0.05 |  |
| LACK\_OF\_GOODS\_SATISFACTION\_SCALE | -0.5 |  |
| ESTATE\_LOSING\_MONEY\_SCALE\_ON\_GOODS\_PRICE | 2 |  |
| CULTURE\_OPINION\_SATISFACTION | 0.05 |  |
| RELIGION\_OPINION\_SATISFACTION | 0.05 |  |
| DIFFERENT\_RELIGION\_BASE\_SATISFACTION | -0.05 |  |
| TOLERANCE\_ON\_SATISFACTION\_SCALE | 0.05 |  |
| PRIMARY\_CULTURE\_SATISFACTION | 0.25 |  |
| ACCEPTED\_CULTURE\_SATISFACTION | 0.1 |  |
| TOLERATED\_CULTURE\_SATISFACTION | 0.05 |  |
| MIN\_SIZE\_TO\_BLOCK\_PROMOTION | 0.5 |  |
| POP\_JOB\_SURPLUS\_SCALE\_CAP | 5 |  |
| REBEL\_JOIN\_MIN\_THRESHOLD | 0.05 | less satisfaction than this and they'll 100% start a rebellion (usually higher, pop\_join\_rebel\_threshold is 0.2 by default) |
| REBEL\_LEAVE\_MIN\_THRESHOLD | 0.1 | at a minimum, more satisfaction than this and they'll stop rebelling (it'll usually be higher, pop\_leave\_rebels\_threshold is 0.35 by default) |
| REBEL\_DANGER\_THRESHOLD | 0.95 |  |
| POP\_MINORITY\_SIMILAR\_THRESHOLD | 4 | if more or equal of this of pops of type in location, join either same culture or religion |
| POP\_MINORITY\_JUST\_MERGE\_THRESHOLD | 8 | if more or equal of this of pops of type in location, join largest |
| YEARLY\_POP\_SATISFACTION\_FROM\_EVENTS\_DECAY | 0.01 | percentage, will display as value \* 100 |

### Portrait

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| GENE\_DATABASE\_VERSION | 2 | If the version saved in a file does not match this number, the portrait DNAs will get regenerated. Increase this number when making gene database changed that would break old portraits. |
| GRACEFUL\_AGING\_START | 25 | After this age, added life expectancy will make a character look younger than they are; the effect grows the further past this point one goes |
| GRACEFUL\_AGING\_END | 70 | This is the apparent age at which life expectancy stops slowing down visual aging (each year onwards ages you visually 1 year) |
| MAX\_AGE | 100 | At this age portraits will use the special age gene at full strength |
| DEFAULT\_ANIMATION | idle | Default portrait animation, used as a fallback in places where portrait animations can be specified |
| WEIGHT\_UPDATE\_YEAR\_INTERVAL | 3 | Years in between portrait updating their current weight towards their target weight |
| WEIGHT\_UPDATE\_LERP\_SCALAR | 0.35 | Scalar for the liner interoplation of the weight update to trend current weight towards target weight |
| DEFAULT\_BASE\_WEIGHT\_MIN | -35 | Min for starting random base weight inclusive |
| DEFAULT\_BASE\_WEIGHT\_MAX | 35 | Max for starting random base weight inclusive |
| IGNORED\_WEIGHT\_DEVIATION\_FOR\_DEAD\_WITHOUT\_DNA | 10 | Characters that die at between -10 and 10 weight, and have no DNA generated, will get their weight set to 0 to save storage in the save game |
| MAX\_PORTRAIT\_GENERATION\_DEPTH | 8 | When generating someone's portrait, generate up to this many generations of missing portraits |

### Religion

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| RELIGIOUS\_FOCUS\_COST | 100 |  |
| PERIPHORA\_DAYS\_PER\_LOCATION | 30 |  |
| RELIGIOUS\_FIGURE\_CHANCE\_OF\_MOVING | 0.01 |  |
| CORE\_THRESHOLD | 0.5 |  |
| OMEN\_LENGTH\_MONTHS | 120 |  |

### Rivers

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| FADE\_IN\_DISTANCE | 10 |  |
| FADE\_OUT\_DISTANCE | 2 |  |
| NUM\_WIDTH\_PIXEL\_VALUES | 13 | how many pixels in the river bitmap that are allocated for different river widths |
| WIDTH\_MIN | 1 | how wide the rivers are when using the lowest width in the bitmap |
| WIDTH\_MAX | 2.2 | how wide the rivers are when using the highest width in the bitmap |
| UV\_SCALE | 1 |  |
| FADE\_IN\_INVISIBLE\_DISTANCE\_THRESHOLD | 0.5 | The factor by which FADE\_IN\_DISTANCE is multiplied is the boundary starting from the river source, where the river is visually invisible. |

### Roads

From /Europa Universalis V/game/loading\_screen/common/defines/jomini/roads.txt

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` From loading_screen/defines/graphic/00_graphics.txt ``` | | |
| ROADS\_DISSAPEAR\_ZOOM\_LEVEL | 8 |  |
| ROADS\_DISSAPEAR\_FARAWAY\_ZOOM\_LEVEL | 13 |  |
| From `loading_screen/defines/jomini/roads.txt` | | |
| ``` No instant reload	 Sulla defines ``` | | |
| BRIDGE\_MESHES | { bridge\_small\_test\_mesh } |  |
| DIFFUSE\_TEXTURE | gfx/models/buildings/bridge\_test/bridge\_test\_phong\_diffuse.dds |  |
| NORMAL\_TEXTURE | gfx/models/buildings/bridge\_test/bridge\_test\_phong\_normal.dds |  |
| MATERIAL\_TEXTURE | gfx/models/buildings/bridge\_test/bridge\_test\_phong\_properties.dds |  |
| ``` Caesar defines ``` | | |
| MAP\_OBJECT\_OCCLUSION\_WIDTH | 2 |  |

### SeaCurrents

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ANIMATION\_SPEED | 0.3 |  |
| MIN\_CAMERA\_LEVEL | 800 |  |
| DISSAPEAR\_ALPHA\_START | 3000 |  |
| MAX\_CAMERA\_LEVEL | 3600 |  |
| MAX\_ALPHA | 0.4 |  |
| UV\_SCALE | 0.033 |  |
| UV\_SCALE\_3D | 0.12 |  |
| ANIMATION\_SPEED\_3D | 0.25 |  |
| WAVES\_SEPARATION\_3D | 3.8 |  |
| WAVES\_SPAWN\_CHANCE\_3D | 1 |  |
| WAVES\_UV\_SCALE\_DISTORTION\_3D | { 0.6, 0.5 } |  |
| DISAPPEARANCE\_DEBUG\_3D | 0 |  |
| DISAPPEARANCE\_UV\_SCALE\_3D | { 0.05, 0.2 } |  |
| DISAPPEARENCE\_TRHESSHOLD\_3D | 1 |  |
| DISAPPEARENCE\_TRHESSHOLD\_CORRECTION\_3D | 0.25 |  |
| DISAPPEARENCE\_STATE\_SWITCH\_SPEED\_3D | 1.5 |  |

### SiegeEffect

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| NEGATIVE\_PARTICLES\_NUM | 5 |  |
| NEGATIVE\_PARTICLES\_SPAWN\_RADIUS | 10 |  |
| NEGATIVE\_PARTICLES\_SPAWN\_HEIGHT | 0 |  |
| NEGATIVE\_PARTICLES\_SCHEMATIC\_NAME | siege\_effect\_schematic\_negative |  |
| POSITIVE\_PARTICLES\_NUM | 5 |  |
| POSITIVE\_PARTICLES\_SPAWN\_RADIUS | 5 |  |
| POSITIVE\_PARTICLES\_SPAWN\_HEIGHT | 0 |  |
| POSITIVE\_PARTICLES\_SCHEMATIC\_NAME | siege\_effect\_schematic\_positive |  |
| ASSAULT\_PARTICLES\_SPAWN\_DELAY | 3 |  |
| ASSAULT\_PARTICLES\_SPAWN\_RADIUS | 2 |  |
| ASSAULT\_PARTICLES\_SPAWN\_HEIGHT | 1 |  |
| ASSAULT\_PARTICLES\_SCHEMATIC\_NAME | siege\_effect\_schematic\_assault |  |
| PARTICLE\_MAX\_ZOOM\_LEVEL | 6 |  |

### Spreadable

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ESTIMATED\_TRAVELLERS\_TO\_NEIGHBOURING\_LOCATIONS | 0.06 |  |
| ESTIMATED\_PEOPLE\_PER\_UNIT\_MERCHANT\_CAPACITY | 0.012 |  |
| ESTIMATED\_TRAVELLERS\_TO\_CAPITAL | 0.06 |  |
| ESTIMATED\_TRAVELLERS\_TO\_MARKET\_CENTRE | 0.06 |  |
| ESTIMATED\_MIXING\_WITH\_UNITS | 0.06 |  |
| ESTIMATED\_MIXING\_WITHIN\_UNITS | 0.35 |  |

### TerraIncognita

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| SHADER\_PATH | gfx/FX/terra\_incognita.shader |  |
| HEIGHT | 5 |  |
| TEXTURE\_SCALE | { 20, 10 } |  |
| NUM\_EXTRA\_SAMPLES | 8 |  |
| EXTRA\_SAMPLES\_DISTANCE | 8 |  |

### Text

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| DURATION\_SHOW\_YEARS\_THRESHOLD | 24 | Duration will show as years if it's at least this many months |
| DURATION\_SHOW\_MONTHS\_THRESHOLD | 60 | Duration will show as months if it's at least this many days |
| INDENTATION\_PER\_DEPTH | 2 |  |
| EFFECT\_BASE\_INDENTATION | 0 |  |
| TRIGGER\_BASE\_INDENTATION | 0 |  |
| HINTS\_MAX\_IMPORTANT\_MODIFIER\_CANDIDATES | 5 | When hints try to list important modifiers, how many will they show at most? |
| CHARACTER\_NAME\_LENGTH | -1 | debugging tool, set above 0 to test name length |
| FORMAT\_CHARACTER\_NAMES | -1 | debugging tool, -1 = default behaviour, 0 = always no, 1 = always yes |

### TextSettings

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| DEFAULT\_ALIGNMENT | 2 | Center |
| DEFAULT\_FONT | StandardGameFont |  |
| DEFAULT\_FONT\_SIZE | 60 |  |
| DEFAULT\_LOD\_FACTOR | 0.015 | Names get blurrier as the texel/pixel ratio increases. Blur amount will be lod factor \* texel/pixel ratio |
| DEFAULT\_TEXT\_COLOR | { 0.16, 1, 0.9, 1 } | Yellow |
| DEFAULT\_OUTLINE\_WIDTH | 0.2 |  |
| DEFAULT\_OUTLINE\_COLOR | { 0, 0, 0, 1 } | Black |
| DEFAULT\_HEIGHT\_SIZE | 2 |  |
| DEFAULT\_BOUNDING\_BOX\_EXTRA\_SIZE | { 0, 0, 20 } | Add extra height to account for animation |
| DEFAULT\_ANIMATION\_FUNCTION | ShowGrowAndDisappearAnimation |  |
| DEFAULT\_TEXT\_DURATION | 1 |  |
| UNITLOSS\_ALIGNMENT | 2 | Center |
| UNITLOSS\_FONT | StandardGameFont |  |
| UNITLOSS\_FONT\_SIZE | 60 |  |
| UNITLOSS\_LOD\_FACTOR | 0.015 | Names get blurrier as the texel/pixel ratio increases. Blur amount will be lod factor \* texel/pixel ratio |
| UNITLOSS\_TEXT\_COLOR | { 0, 1, 1, 1 } | Red |
| UNITLOSS\_OUTLINE\_WIDTH | 0.2 |  |
| UNITLOSS\_OUTLINE\_COLOR | { 0, 0, 0, 1 } | Black |
| UNITLOSS\_HEIGHT\_SIZE | 1 |  |
| UNITLOSS\_BOUNDING\_BOX\_EXTRA\_SIZE | { 0, 0, 20 } | Add extra height to account for animation |
| UNITLOSS\_ANIMATION\_FUNCTION | ShowGrowAndDisappearAnimation |  |
| UNITLOSS\_TEXT\_DURATION | 2 |  |
| UNITLOSS\_ENEMY\_ALIGNMENT | 2 | Center |
| UNITLOSS\_ENEMY\_FONT | StandardGameFont |  |
| UNITLOSS\_ENEMY\_FONT\_SIZE | 60 |  |
| UNITLOSS\_ENEMY\_LOD\_FACTOR | 0.015 | Names get blurrier as the texel/pixel ratio increases. Blur amount will be lod factor \* texel/pixel ratio |
| UNITLOSS\_ENEMY\_TEXT\_COLOR | { 0.33, 1, 1, 1 } | Green |
| UNITLOSS\_ENEMY\_OUTLINE\_WIDTH | 0.2 |  |
| UNITLOSS\_ENEMY\_OUTLINE\_COLOR | { 0, 0, 0, 1 } | Black |
| UNITLOSS\_ENEMY\_HEIGHT\_SIZE | 1 |  |
| UNITLOSS\_ENEMY\_BOUNDING\_BOX\_EXTRA\_SIZE | { 0, 0, 20 } | Add extra height to account for animation |
| UNITLOSS\_ENEMY\_ANIMATION\_FUNCTION | ShowGrowAndDisappearAnimation |  |
| UNITLOSS\_ENEMY\_TEXT\_DURATION | 2 |  |
| SIEGE\_MESSAGE\_ALIGNMENT | 2 | Center |
| SIEGE\_MESSAGE\_FONT | StandardGameFont |  |
| SIEGE\_MESSAGE\_FONT\_SIZE | 60 |  |
| SIEGE\_MESSAGE\_LOD\_FACTOR | 0.015 | Names get blurrier as the texel/pixel ratio increases. Blur amount will be lod factor \* texel/pixel ratio |
| SIEGE\_MESSAGE\_TEXT\_COLOR | { 0.16, 1, 0.9, 1 } | Yellow |
| SIEGE\_MESSAGE\_OUTLINE\_WIDTH | 0.2 |  |
| SIEGE\_MESSAGE\_OUTLINE\_COLOR | { 0, 0, 0, 1 } | Black |
| SIEGE\_MESSAGE\_HEIGHT\_SIZE | 2 |  |
| SIEGE\_MESSAGE\_BOUNDING\_BOX\_EXTRA\_SIZE | { 0, 0, 20 } | Add extra height to account for animation |
| SIEGE\_MESSAGE\_ANIMATION\_FUNCTION | ShowGrowAndDisappearAnimation |  |
| SIEGE\_MESSAGE\_TEXT\_DURATION | 1 |  |
| LOOT\_MESSAGE\_ALIGNMENT | 2 | Center |
| LOOT\_MESSAGE\_FONT | StandardGameFont |  |
| LOOT\_MESSAGE\_FONT\_SIZE | 60 |  |
| LOOT\_MESSAGE\_LOD\_FACTOR | 0.015 | Names get blurrier as the texel/pixel ratio increases. Blur amount will be lod factor \* texel/pixel ratio |
| LOOT\_MESSAGE\_TEXT\_COLOR | { 0.16, 1, 0.8, 1 } | Yellow |
| LOOT\_MESSAGE\_OUTLINE\_WIDTH | 0.2 |  |
| LOOT\_MESSAGE\_OUTLINE\_COLOR | { 0, 0, 0, 1 } | Black |
| LOOT\_MESSAGE\_HEIGHT\_SIZE | 1.8 |  |
| LOOT\_MESSAGE\_BOUNDING\_BOX\_EXTRA\_SIZE | { 0, 0, 20 } | Add extra height to account for animation |
| LOOT\_MESSAGE\_ANIMATION\_FUNCTION | ShowGrowAndDisappearAnimation |  |
| LOOT\_MESSAGE\_TEXT\_DURATION | 1 |  |

### Tooltip

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| OPEN\_DELAYED\_TIME | 0 |  |
| CLOSE\_TIME | 0.2 |  |
| TENDENCY\_BUFFER | 15 |  |
| MIDDLE\_MOUSE\_LOCK\_TIME | 0.25 |  |
| ``` The following two values control if the tooltip position is updated due to mouse movement. If the current mouse position is at least DISTANCE pixels away from the earlier mouse position from DURATION seconds in the past, then the tooltip position will be updated. ``` | | |
| MOUSE\_MOVE\_DISTANCE\_TO\_UPDATE\_TOOLTIP\_POSITION | 10 |  |
| MOUSE\_MOVE\_DURATION\_TO\_UPDATE\_TOOLTIP\_POSITION | 0.2 |  |
| TOOLTIP\_TINT\_RGBA | { 1, 1, 1, 1, 0.8, 0.8, 0.8, 1, 0.6, 0.6, 0.6, 1, 0.1, 0.1, 0.1, 0.2 } | Tooltip stack tint RGBA colors starting with the top tooltip |

### TradeGraphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| WAGON\_SCALE | 0.125 |  |
| SHIP\_SCALE | 0.5 |  |
| SHIP\_FLATMAP\_Y\_OFFSET | 2 |  |
| DEFAULT\_WAGON\_SPEED | 0.4 |  |
| WAGONS\_BY\_MARKET | 15 |  |
| MINIMUM\_TRADEROUTE\_LENGHT | 1000 |  |
| WAGONS\_TO\_TRADECENTERS | 14 |  |
| MINIMUM\_PRODUCTIONROUTE\_LENGHT | 300 |  |
| TRADE\_SPLINEPOINT\_SEPARATION | 2 |  |
| MAX\_PROVINCES\_TO\_LOOK\_FOR\_PRODUCTION\_BY\_FRAME | 25 |  |
| TIME\_TO\_FADE\_ON\_DESTRUCTION | 5 |  |
| MAX\_COLONY\_CHARTER\_WAGONS | 100 |  |
| MINIMUM\_SPAWN\_TIME\_BETWEEN\_COLONY\_WAGONS\_OF\_THE\_SAME\_COUNTRY | 20 |  |
| MINIMUM\_SPAWN\_TIME\_BETWEEN\_COLONY\_WAGONS\_GLOBAL | 0.1 |  |
| COLONY\_WAGON\_ROUTE\_DUPLICATION\_PENALTY | 0.5 |  |
| MAX\_EXPLORATION\_WAGONS | 100 |  |
| MINIMUM\_SPAWN\_TIME\_BETWEEN\_EXPLORATION\_WAGONS\_GLOBAL | 0.1 |  |
| MINIMUM\_SPAWN\_TIME\_BETWEEN\_EXPLORATION\_WAGONS\_OF\_THE\_SAME\_EXPLORATION | 20 |  |
| TRADE\_PARTICLES\_ZOOM\_OUT\_STEP | 6 |  |

### TreeTweaks

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| SSS\_RADII | { 0.85, 1, 0.5, 0.3 } | This controls how "far" the light scatters inside the object. rgb, multiplied by alpha |
| SSS\_COLOR | { 1, 1, 1, 0.6 } | Multiplied to the final SSS result. rgb, multiplied by alpha |
| SSS\_BLEND\_TO\_NORMALIZED\_ALBEDO | 0 | At 0 SSS will use the texture as is, at 1 it will use the normalized albedo. 1 is bright and flat |
| TRANSLUCENCY\_COLOR | { 1, 1, 1, 0.125 } |  |
| TRANSLUCENCY\_COSINE\_BEGIN | -0.5 | cosines at which the translucency effect starts and stops. -1 is when the camera and light point in the same direction, 1 is the opposite |
| TRANSLUCENCY\_COSINE\_END | 4 |  |
| BACKLIGHT\_INTENSITY | 1 | How much to use the backlight - allthough spec is disabled for trees this will still contribute to some scattering |
| TERRAIN\_NORMAL\_BLEND | 0.5 |  |
| TERRAIN\_NORMAL\_STRENGTH | 1 |  |
| TERRAIN\_NORMAL\_BIAS\_TOWARDS\_SUN | 0.1 | Bends the normals towards the sun, for a brighter look when the sun is behind the viewer |
| SOFT\_SHADOW\_SIZE | 7.5 |  |
| SOFT\_SHADOW\_SAMPLES | 4 |  |
| WIND\_EFFECT\_NORMAL\_MAP | gfx/models/debug/wind\_effect/wind\_debug\_normal7.dds | Which texture to use for the wind effect |
| WIND\_EFFECT\_NORMAL\_MAP\_TILING | 32 | Size of one tile / one repeat of the normal map |
| WIND\_EFFECT\_DIRECTION | { 1, 0.5 } | Direction of the wind |
| WIND\_EFFECT\_INTENSITY | 0.2 | How much the vertices are moved. Should be 0-1 |
| WIND\_EFFECT\_SPEED | 1.5 | How fast the texture moves |
| WIND\_EFFECT\_SPREAD | 2 | How much noise to add to the position of the wind sample - helps break up recognizable patterns from the texture, but also makes the texture a bit pointless |
| WIND\_EFFECT\_NORMAL\_STRENGTH | -1 | How much wind will affect the normals for lighting. Both positive and negative values work. Positive makes normal point in the wind direction, negative makes it point against the wind |

### Trees

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| FADE\_FAR | 1 |  |
| FADE\_NEAR | 0 |  |
| QUAD\_SIZE | 100 |  |

### Unit

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| EMBARK\_DISEMBARK\_MULTIPLIER | 0.2 | to make disembark/embark from coast slower. |
| SIZE\_IMPACT\_ON\_MOVEMENT\_SCALE | -0.02 |  |
| SIZE\_IMPACT\_ON\_MOVEMENT\_CAP | -0.5 |  |
| BASE\_REGIMENT\_PRICE\_SCALE | 0.1 | 100 men is a base (divided) |
| BASE\_SCALE\_SHIP\_DOUBLE\_PER\_AGE | 1 | as regiments double in size each age.. 0 to disable. |
| EXPERIENCE\_GAIN\_FROM\_MISSIONS | 1 |  |
| UPGRADE\_COST\_SCALE | 0.1 |  |
| REGIMENT\_SIZE | 1000 |  |
| ATTRITION\_ON\_FOOD\_CONSUMPTION\_IMPACT | 2 |  |
| MAX\_FOOD\_CONSUMPTION\_PENALTY | 3 | cap on the over-supply-limit food consumption penalty (consumption never exceeds base \* (1 + this)). 0 = uncapped. |
| MONTHS\_OF\_FOOD\_FOR\_DETACHED\_SUPPORT | 6 |  |
| ATTRITION\_LACK\_OF\_FOOD | 5 |  |
| LEVY\_MAINTENANCE\_FACTOR | 0.01 |  |
| MOTHBALL\_PERCENT | 0.1 |  |
| LAND\_MORALE | 3 |  |
| NAVAL\_MORALE | 3 |  |
| ARMY\_MOVEMENT\_SPEED | 0.13 |  |
| NAVY\_MOVEMENT\_SPEED | 0.5 |  |
| ARMY\_MOVEMENT\_SPEED\_INTO\_UNKNOWN\_TERRITORY\_MODIFIER | 1 |  |
| MOVEMENT\_LOCKED | 0.5 |  |
| LOW\_MORALE\_THRESHOLD | 0.5 |  |
| SHIP\_UPGRADE\_STARTING\_STRENGTH | 0.01 |  |
| MONTHLY\_REINFORCE | 0.25 |  |
| MONTHLY\_REPAIR | 0.1 |  |
| LOCKED\_MORALE\_CAP | 0.5 |  |
| LAND\_MERC\_COMPANY\_RANDOM\_NAME\_COUNT | 20 |  |
| NAVAL\_MERC\_COMPANY\_RANDOM\_NAME\_COUNT | 4 |  |
| LEADER\_ASSIGN\_MIN\_DAYS | 7 |  |
| LEADER\_ASSIGN\_DISTANCE\_FACTOR | 0.07 |  |
| NAVAL\_ATTRITION\_CHANCE | 0.1 |  |
| NAVAL\_ATTRITION\_MIN\_AT\_PORT | 0.05 |  |
| DAYS\_UNTIL\_CAN\_BE\_RANSOMED\_AGAIN | 60 |  |
| ATTRITION\_DAYS\_AT\_SEA | 0.02 |  |
| OUTSIDE\_OF\_NAVAL\_RANGE\_ATTRITION | 0.5 |  |
| FROZEN\_ATTRITION | 0.5 |  |
| FALLING\_THROUGH\_ICE\_MIN\_PROPORTION\_TO\_ESCAPE | 0.5 |  |
| DEPOSIT\_FOOD\_FRACTION | 0.25 |  |
| SUPPLY\_DEPOT\_FOOD\_FRACTION | 0.5 |  |
| PATHFIND\_NON\_COASTAL\_PENALTY\_FACTOR | 10 | How less likely is the pathfinding to select locations that aren't coastal when finding a path for navies, 0 = same as coastal |
| DISEMBARK\_COST\_MULTIPLIER | 0.5 | seazones are larger etc, and disembark is not from middle of seazone.. |
| LOCATION\_SCALE\_ON\_MOVEMENT\_COST | 1.33 |  |
| PERCENTAGE\_OF\_REGIMENTS\_WITH\_NICKNAME | 0.5 | What fraction of regiments spawn with a nickname (e.g. 1st 'Sitges' Regiment instead of just 1st Regiment) |
| PATHFIND\_FROZEN\_PENALTY\_FACTOR | 20 | How less likely is the pathfinding to select locations that are frozen when finding a path for armies, 0 = same as not frozen |

### UnitGraphics

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| UNIT\_ICON\_SHORT\_VARIANT\_AT\_ZOOM\_STEP | 9 |  |
| UNIT\_MAP\_MARKER\_MAP\_PIXELS\_SOUTH | 2 | The unit map marker (-- of troops, etc.) will be positioned as if it was this many pixels on the map south of where the unit is standing |
| ``` Defines for number of soldiers visible per army This visualization may or may not still work when you read this: https://www.desmos.com/calculator/qrvgaseadc ``` | | |
| ARMY\_VISIBLE\_SOLDIERS\_REFERENCE | 15 | Amounts of soldiers for a "normally" sized army |
| ARMY\_TOTAL\_STRENGTH\_REFERENCE | 10 | "Normal" size of army (in thousands of men) |
| NAVY\_VISIBLE\_SHIPS\_REFERENCE | 4 | Amounts of ships for a "normally" sized navy |
| NAVY\_TOTAL\_STRENGTH\_REFERENCE | 10 | "Normal" size of navy (in "strength") |
| UNIT\_VISIBLE\_SOLDIERS\_AGE\_FACTOR | 1.4 | "Normal" size of army multiplied by this each age |
| UNIT\_VISIBLE\_SOLDIERS\_NORMALIZATION | 1.8 | Normalization exponent. 1 corresponds to proportional relationship. |
| UNIT\_VISIBLE\_SOLDIERS\_MAX | 30 | This max will only be reached for ridiculously big armies |
| ``` Patterns should have same number as elements as UNIT_VISIBLE_SOLDIERS_MAX 23 21 20 22 24 18 16 15 17 19 13 11 10 12 14 08 04 03 05 09 06 01 00 02 07 ``` | | |
| UNIT\_PATTERN\_HIGH\_UNIFORMITY | { 0 0, -1 0, 1 0, 0 1, -1 1, 1 1, -2 0, 2 0, -2 1, 2 1, 0 2, -1 2, 1 2, -2 2, 2 2, 0 3, -1 3, 1 3, -2 3, 2 3, 0 4, -1 4, 1 4, -2 4, 2 4, 0 5, -1 5, 1 5, -2 5, 2 5 } | puts the unit in rows remove comment if you modify the formation |
| UNIT\_PATTERN\_LOW\_UNIFORMITY | { 0 0, -1 0.14, 1 0.14, 0 1, -1.1 1.14, 1.1 1.14, -2 0.6, 2 0.6, -2.3 1.4, 2.3 1.4, 0 2, -1.14 2.2, 1.14 2.2, -2.3 2.5, 2.3 2.5, 0 3, -1.14 3.2, 1.14 3.2, -2.3 3.3, 2.3 3.3, 0 4, -1.14 4.2, 1.14 4.2, -2.3 4.3, 2.3 4.3, 0 5, -1.14 5.2, 1.14 5.2, -2.3 5.3, 2.3 5.3 } | puts the units in a circle remove comment if you modify the formation |
| FORMATION\_PREFERENCE\_BY\_TAG\_REAR | { army\_auxiliary, army\_artillery, UnitWeapon\_bow, UnitWeapon\_arquebus, UnitWeapon\_matchlock, UnitWeapon\_pistol, UnitWeapon\_dualpistol, UnitWeapon\_crossbow, UnitWeapon\_musket, UnitWeapon\_rifle, UnitWeapon\_handgonne } |  |
| FORMATION\_PREFERENCE\_BY\_TAG\_FRONT | { UnitWeapon\_sword, UnitWeapon\_saber, UnitWeapon\_axe\_two\_handed, UnitWeapon\_axe, UnitWeapon\_polearm, UnitWeapon\_wooden\_club, UnitWeapon\_mace, UnitWeapon\_knife, UnitWeapon\_spear, UnitWeapon\_spear\_two\_handed } |  |
| ``` Units will be positioned in a random circle around the pattern possition based on uniformity ``` | | |
| UNIT\_PATTERN\_LOW\_UNIFORMITY\_RANDOM\_POSITIONING | 0.11 |  |
| UNIT\_PATTERN\_HIGH\_UNIFORMITY\_RANDOM\_POSITIONING | 0 |  |
| RANDOM\_FORMATION\_ROTATION\_MIN | 15 | in degrees |
| RANDOM\_FORMATION\_ROTATION\_MAX | 25 |  |
| RANDOM\_ARMY\_UNIT\_ROTATION\_VARIATION\_LOW\_UNIFORMITY | 50 |  |
| RANDOM\_ARMY\_UNIT\_ROTATION\_VARIATION\_HIGH\_UNIFORMITY | 0 |  |
| RANDOM\_NAVY\_UNIT\_ROTATION\_VARIATION\_LOW\_UNIFORMITY | 20 |  |
| RANDOM\_NAVY\_UNIT\_ROTATION\_VARIATION\_HIGH\_UNIFORMITY | 10 |  |
| ARMY\_SCHEMATIC | army\_schematic |  |
| NAVY\_SCHEMATIC |  |  |
| ``` Uniformity is calculated like this: Base + Levy/Rebel/Merc bonus + Discipline * factor + Experience * factor + Army/Navy Tradition * factor. The end result is clamped to 0% - 100% ``` | | |
| UNIFORMITY\_BASE | 0.25 |  |
| UNIFORMITY\_LEVY\_BONUS | -0.5 |  |
| ``` TODO CAESAR-10402 RICARDO  Ensure rebel uniformity  is correct ``` | | |
| UNIFORMITY\_MERC\_BONUS | 0.25 |  |
| UNIFORMITY\_DISCIPLINE\_FACTOR | 1 |  |
| UNIFORMITY\_EXPERIENCE\_FACTOR | 1 |  |
| UNIFORMITY\_TRADITION\_FACTOR | 1 |  |
| UNIFORMITY\_EXPONENT | 0.5 | After clamping the uniformity value is raised to the power of exponent ( uniformity = uniformity ^ exponent ) to create a non-linear scale. |
| ARMY\_FORMATION\_SCALE | 1.3 |  |
| ARMY\_ENTITY\_SCALE | 0.2 |  |
| ARMY\_LOADED\_SCALE | 0.3 |  |
| ARMY\_RANDOM\_UNIT\_MIN\_Y\_SCALE\_VARIATION | 0.9 | Randomizes the scale in the Y Direction of the army units use with ARMY\_RANDOM\_UNIT\_SCALE\_VARIATION to variate the height of the units |
| ARMY\_RANDOM\_UNIT\_MIN\_SCALE\_VARIATION | 0.9 | randomizes the scale of each subunit |
| ARMY\_MOVEMENT\_SPACING | 1.5 |  |
| ARMY\_MOVEMENT\_ASPECT | 1 |  |
| NAVY\_FORMATION\_SCALE | 3.5 |  |
| NAVY\_ENTITY\_SCALE | 0.8 |  |
| NAVY\_DOCKED\_SCALE | 0.3 |  |
| NAVY\_MOVEMENT\_SPACING | 4 |  |
| NAVY\_MOVEMENT\_ASPECT | 0.5 |  |
| COMBAT\_SPACING | 2 |  |
| MOVEMENT\_ANIMATION\_SPEED\_FACTOR | 0.085 |  |
| SINGLE\_UNIT\_ENTITY\_SCALE | 3 |  |
| COUNTRY\_COLOR\_SHIP\_PRIMARY\_REPLACEMENT\_OPACITY | 1 |  |
| COUNTRY\_COLOR\_SHIP\_SECONDARY\_REPLACEMENT\_OPACITY | 1 |  |
| COUNTRY\_COLOR\_SHIP\_TERCIARY\_REPLACEMENT\_OPACITY | 0.25 |  |
| UNIT\_ZOOM\_OUT\_STEP | 12 |  |
| UNIT\_PARTICLES\_ZOOM\_OUT\_STEP | 6 |  |
| UNIT\_VIEWER\_SELECTED\_GIZMO\_SCHEMATIC | selection\_marker\_gizmo |  |
| UNIT\_SELECTION\_MARKER\_SCHEMATIC | unitgfx\_selection\_marker |  |
| ``` 4 values: UnitSizeMin, MarkerSizeMin, UnitSizeMax, MarkerSizeMax. The game will remap the units size from the range UnitSizeMin to UnitSizeMax to the range MarkerSizeMin to MarkerSizeMax and use the result as the marker size. For example, if the unit size is 0.5 and the unit size range is 0.0 to 1.0 and the marker size range is 1.0 to 2.0, the marker size will be 1.5. ``` | | |
| UNIT\_SELECTION\_MARKER\_TARGET\_SIZE\_THRESHOLDS | { 1, 0.5, 5, 4.5 } |  |
| UNIT\_SELECTION\_ANIMATION\_DURATION | 0.5 |  |
| ``` Animation is using a cubic curve These values are: Value at start of animation, at 1/3 of the animation, at 2/3 of the animation and at the end of the animation Only the first and last values are guaranteed to be used exactly as they are, the middle two values act as control points for the curve but will likely never be reached entirely ``` | | |
| SELECTION\_MARKER\_SCALE\_VALUES | { 6, 4, 0.25, 1 } |  |
| SELECTION\_MARKER\_OPACITY\_VALUES | { 0, 0, 0.95, 1 } |  |
| SELECTION\_MARKER\_UV\_ROTATION\_SPEED | 90 | degrees / second |
| ``` The 'schwing' effect that appears on the units when they are selected ``` | | |
| SELECTION\_SCHWING\_COLOR | { 0.8, 0.6, 0.2, 1.5 } |  |
| SELECTION\_SCHWING\_THICKNESS | 2.5 |  |
| SELECTION\_SCHWING\_OPACITY\_VALUES | { 0, 0.01, 0.05, 1 } | cubic curve like the selection marker |
| SELECTION\_SCHWING\_HEIGHT | 4 | how high in worldspace the schwing effect goes |
| SELECTION\_SCHWING\_TIME\_START | 0 | times are relative to the total animation time |
| SELECTION\_SCHWING\_TIME\_END | 1 |  |
| ``` battle lateral view ``` | | |
| BATTLE\_TILE\_MORALE\_ALPHA\_THRESHOLD | 0.25 | At what Morale percentage do units start fading away? (at this point they are fully visible) |
| BATTLE\_TILE\_MORALE\_ALPHA\_MINIMUM | 0.5 | What is the lowest transparency they can get to (when at 0% morale) |
| FLATMAP\_COMBAT\_TEXT\_SEPARATION | 3 |  |
| INSTANT\_MOVEMENT\_SPEED\_LIMIT | 6 | from whitch speed the movement of the unit graphics will be instant |
| UNIT\_CHANGE\_MESSAGE\_HOLDDUP\_TIME | 0.5 |  |

### VisibleLocationsGfx

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MAX\_VISIBLE\_ZOOM\_LEVEL | 13 |  |
| PLAGE\_SCHEMATIC\_NAME | plague\_particle |  |
| GLACIER\_SCHEMATIC\_NAMES | { glacier\_schematic, glacier\_schematic\_medium, glacier\_schematic\_small } |  |
| SANDSTORM\_SCHEMATIC\_NAME | sandstorm\_schematic |  |
| SANDSTORM\_MAX\_ZOOM\_STEP | 6 |  |
| DENSITY\_OF\_GLACIERS\_MILD | 0 |  |
| DENSITY\_OF\_GLACIERS\_NORMAL | 0.0005 |  |
| DENSITY\_OF\_GLACIERS\_SEVERE | 0.001 |  |
| NUMBER\_OF\_GLACIER\_RETRIES | 5 |  |
| GLACIER\_ALLOWED\_CLIMATES | { arctic } |  |

### War

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| MAX\_WAR\_SCORE | 100 |  |
| OCCUPATION\_VALUE\_SCALE | 2 | at 1.0 you need 100% of the occupied land to get 100% warscore, higher requires less.. |
| PARTICIPATION\_SCORE\_BLOCKADE | 0.001 | Per development & ship, once each month |
| PARTICIPATION\_SCORE\_BATTLE | 0.03 | Per regiment or ship engaged in battle |
| PARTICIPATION\_SCORE\_SIEGE | 0.01 | Per regiment engaged in sieges that are able to progress |
| PARTICIPATION\_SCORE\_OVERSEAS\_MULT | 0.25 | How much less participation do you get if fighting overseas from war leader? |
| PARTICIPATION\_SCORE\_MERC\_MULT | 0.5 | How much less participation do you get from mercs? |
| PARTICIPATION\_SCORE\_UNFORTIFIED\_MULT | 0.1 | How much less participation do you get from besieging unfortified provinces? |
| ATTACKER\_WAR\_COST\_POWER\_PROJECTION\_SCALE | 0.01 | Declare war cost multiplier = 1 - ( Power projection difference between attacker and defender x this ) |
| PARTICIPATION\_SCORE\_TO\_FAVOURS\_MULTIPLIER\_BLOCKADE | 1 | these will tick up your favours to whoever you're helping as the war goes on |
| PARTICIPATION\_SCORE\_TO\_FAVOURS\_MULTIPLIER\_COMBAT | 1 | these will tick up your favours to whoever you're helping as the war goes on |
| PARTICIPATION\_SCORE\_TO\_FAVOURS\_MULTIPLIER\_SIEGE | 1 | these will tick up your favours to whoever you're helping as the war goes on |
| PARTICIPATION\_SCORE\_TO\_FAVOURS\_MULTIPLIER\_JOINING\_WAR | 20 | one-off favours boost |
| WAR\_WORTH\_BASE | 2 |  |
| WAR\_WORTH\_TAX\_BASE\_SCALE | 0.2 |  |
| WAR\_WORTH\_BUILDING\_SCALE | 0.025 |  |
| WAR\_WORTH\_BUILDING\_CAP | 10 |  |
| WAR\_WORTH\_POPULATION\_SCALE | 0.02 |  |
| WAR\_WORTH\_POPULATION\_CAP | 4 |  |
| WAR\_WORTH\_COUNTRY\_CAPITAL | 5 |  |
| WAR\_WORTH\_PROVINCE\_CAPITAL | 1 |  |
| WAR\_WORTH\_PORT | 1 |  |
| WAR\_WORTH\_FORT\_BASE | 0.5 |  |
| WAR\_WORTH\_FORT\_LEVEL\_SCALE | 0.25 |  |
| WAR\_WORTH\_DEVELOPMENT\_SCALE | 0.05 | scaled to (this location's development - average development of taker) |
| WAR\_WORTH\_DEVELOPMENT\_MIN | -1 |  |
| WAR\_WORTH\_DEVELOPMENT\_MAX | 5 |  |
| FAVOR\_GAIN\_WARSCORE\_FACTOR | 20 | Favors gained for giving land is scaled relative to this actual warscore cost (so more favors for bigger chunks of land) |
| FAVOR\_GAIN\_FOR\_LAND | 10 | Favors gained for giving land (scales with how much they actually got relative to participation) |
| TRUST\_PENALTY\_FOR\_NO\_LAND | 20 | Trust penalty for not being given as much land as they expected in peace deal (scales with how much they actually got relative to participation) |
| BROKE\_LAND\_PROMISE\_YEARS | 30 |  |
| BROKE\_LAND\_PROMISE\_IN\_RANGE\_TRUST\_CHANGE | -5 |  |
| DECLINE\_CANNOT\_REJOIN\_WAR\_MONTHS | 6 |  |
| OPINION\_PENALTY\_FOR\_NO\_LAND | 1 |  |
| PENALTY\_FOR\_NO\_LAND\_NOT\_PROMISED\_MULT | 0.5 |  |
| MINIMUM\_CONTRIBUTION\_NOT\_PROMISED\_LAND | 0.2 |  |
| MINIMUM\_CONTRIBUTION\_PROMISED\_LAND | 0 |  |
| EXPECTED\_GAINS\_PROMISED\_LAND | 0.75 |  |
| EXPECTED\_GAINS\_NOT\_PROMISED\_LAND | 0.5 |  |
| YEARS\_SINCE\_LAST\_WAR\_ACTION\_BEFORE\_WHITE\_PEACE | 3 |  |
| YEARS\_BEFORE\_WHITE\_PEACE\_ALERT\_ADVANCE | 1 |  |
| DURATION\_BEFORE\_PURGING\_WARS\_IN\_DAYS | 365 |  |
| PEACE\_REVOKE\_CORE\_MULT | 0.25 |  |
| PEACE\_REMOVE\_PROVINCE\_FROM\_INTERNATIONAL\_ORGANIZATION | 0.25 |  |
| PEACE\_RETURN\_CORE\_MULT | 0.5 |  |
| BUILDING\_DESTROY\_GOLD\_VALUE | 0.1 | percent of building cost |
| BUILDING\_DESTROY\_CHANCE | 50 | chance of 100 |

### Water

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| DRAW\_REFRACTIONS\_CUTOFF | 1 |  |

### Weather

From /Europa Universalis V/game/loading\_screen/common/defines/00\_defines.txt and /Europa Universalis V/game/loading\_screen/common/defines/graphic/00\_graphics.txt

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| ``` From loading_screen/defines/00_defines.txt ``` | | |
| FRONT\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY | 125 | every FRONT\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY pixels moved, the strength of the weather front changes by weather\_front\_strength\_change\_percent on locations underneath the front |
| CYCLONE\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY | 125 | every CYCLONE\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY pixels moved, the strength of the cyclone changes by weather\_cyclone\_strength\_change\_percent on locations underneath the cyclone |
| TORNADO\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY | 125 | every TORNADO\_DEGRADATION\_DISTANCE\_FOR\_TOPOGRAPHY pixels moved, the strength of the tornado changes by weather\_tornado\_strength\_change\_percent on locations underneath the tornado |
| FRONT\_DEGRADATION\_PER\_PIXEL\_OF\_LATITUDE | 0 | every pixel of latitude moved away from the equator, strength will go down by FRONT\_DEGRADATION\_PER\_PIXEL\_OF\_LATITUDE |
| CYCLONE\_DEGRADATION\_PER\_PIXEL\_OF\_LATITUDE | 0 | every pixel of latitude moved away from the equator, strength will go down by FRONT\_DEGRADATION\_PER\_PIXEL\_OF\_LATITUDE |
| TORNADO\_DEGRADATION\_PER\_PIXEL\_OF\_LATITUDE | 0 | every pixel of latitude moved away from the equator, strength will go down by FRONT\_DEGRADATION\_PER\_PIXEL\_OF\_LATITUDE |
| PIXEL\_COUNT\_FOR\_AVERAGE\_LOCATION | 1600 |  |
| PERCENT\_DIFFERENCE\_BETWEEN\_GOOD\_AND\_BAD\_SIDE\_OF\_CYCLONE | 50 |  |
| ``` From loading_screen/defines/graphic/00_graphics.txt ``` | | |
| SCHEMATIC\_NAME | weather\_graphics |  |
| MIN\_CAMERA\_ZOOM | 0 |  |
| MAX\_CAMERA\_ZOOM | 1500 |  |
| CYCLONE\_WIDTH\_TO\_SCALE\_PROPORTION | 0.003 |  |
| CYCLONE\_Y\_OFFSET | 70 |  |
| TORNADO\_SCALE | 1.5 |  |
| TORNADO\_Y\_OFFSET | 0 |  |
| RAIN\_SLIGHT\_PARTICLE | environment/rain\_slight |  |
| RAIN\_MODERATE\_PARTICLE | environment/rain\_moderate |  |
| RAIN\_HEAVY\_PARTICLE | environment/rain\_heavy |  |
| SNOW\_SLIGHT\_PARTICLE | weather/snow\_slight |  |
| SNOW\_MODERATE\_PARTICLE | weather/snow\_moderate |  |
| SNOW\_HEAVY\_PARTICLE | weather/snow\_heavy |  |
| CYCLONE\_PARTICLE | environment/cyclone |  |
| TORNADO\_PARTICLE | environment/tornado |  |

### WorkOfArt

| Define | Default Value | Dev Comment |
| --- | --- | --- |
| NAME\_ADJECTIVES | { beautiful, bountiful, able, clear, great, large, true, glorious, fine, revered, splendid, astonishing, breathtaking, amazing, urban, greater, scarlet, crimson, anthracite, emerald, petty, pathetic, ugly, grotesque, terrible, horrendous, eldritch, strange, unnatural, terrific, grand, aesthetic, captivating, innovative, expressive, harmonious, majestic, intriguing, evocative, timeless, radiant, vibrant, masterful, enchanting, whimsical, inspiring, disjointed, uninspired, mediocre, confusing, repetitive, dull, cluttered, stale, derivative, trivial, lifeless, incoherent, banal, unimaginative, amateurish } |  |
| NAME\_NOUNS | { love, glory, god, time, man, world, way, life, eye, mother, father, lady, lord, country, storm, wave, sea, view, monolith, titan, summer, moon, sun, prince, princess, grace, forest, meadow, lake, castle, rock, friend, bird, swan, rabbit, cow, eagle, bear, tree, rock, sandcastle } |  |
| NAME\_SAINTS | { name\_george, name\_michael, name\_peter, name\_john, name\_james, name\_mark, name\_lucas, name\_matthew, name\_gabriel, name\_simeon, name\_gregory } |  |
| QUALITY\_FACTOR\_MIN | 0.3 |  |
| QUALITY\_FACTOR\_MAX | 1.7 |  |
| AGE\_GOLD\_CAP | 3 |  |
| AGE\_CULTURE\_CAP | 2.5 |  |
| BASE\_TRADITION\_SCALAR | 5 |  |
| BASE\_INFLUENCE\_SCALAR | 5 |  |

## References

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | Defines • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

|  |  |
| --- | --- |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |

|  |  |
| --- | --- |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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