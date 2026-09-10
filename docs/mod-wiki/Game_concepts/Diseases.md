<!-- source: https://eu5.paradoxwikis.com/Diseases revid: 33494 fetched: 2026-09-09 -->
# Diseases

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

Diseases will infect both [population](/Population "Population") and [characters](/Characters "Characters") and vary in how lethal they are and how they spread. Their effects are reduced by disease resistance. The spread of diseases slows down as they expand further from their point of origin.

## Disease Spread

Diseases will randomly spawn in different places around the world and begin spreading from there.

Every spread interval (varies by disease), each infected person will attempt infect a number of people in the same location. Pops who have disease resistance, or pops who are already infected, will not be infected. Then, some of the people who were infected before (25% for most diseases) will have a chance to either die or become resistant to the disease, based on the mortality. Locations will also roll to determine if the disease will become stagnant in locally. For diseases that are not situations (bubonic plague and great pestilence), the chance to stagnate depends on the distance from the outbreak origin and increases with high disease resistance. When a disease becomes stagnant, its spread rate drops, often below replacement.

Diseases can spread to the following locations:

* Neighboring locations
* Market center
* From a market center to other market centers that are trading with it (scales with trade capacity. Equals the other rates of spread at 5 trade capacity)
* Owner's capital

Some diseases require a certain fraction of people to be infected before they can spread to neighboring provinces.

The following buildings will increase spread by at least 1.2 if at least one of them is present in the location:

* Market Village
* Marketplace
* Slave Market
* Entrepot
* Trading Hub
* Stock Exchange

## List of diseases

| Disease | Mortality | Character Mortality | Monthly spawn chance | People potentially infected per person per interval | Spread interval (days) | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| [![Influenza icon](/thumb.php?f=Influenza.png&width=64)](/File%3AInfluenza.png "Influenza icon") Influenza  Know by the common folk as the Flu, it is a widely spread sickness with usually mild symptoms like a runny nose or a fever in healthy individuals, but that might be extremely dangerous for those that are too young or too old or already weakened by injury or another malady. | 0.1% | 5% | 25% | * 1-2 outside continental and cold arid * 1.2-2.4 in continental and cold arid | 4-12 | * Can only appear in locations with normal or severe winter * Cannot happen in the continent of America unless the Great Pestilence happened |
| [![Malaria icon](/thumb.php?f=Malaria.png&width=64)](/File%3AMalaria.png "Malaria icon") Malaria  The ancient bane of humankind, Malaria, is an infectious disease transmitted from person to person by the bite of an infected mosquito. This illness produces chills, headaches, sweating, and a very intense fever that repeats every three to four days. | 85-95% | 10-50% | 0% | 0 | 10-15 | Does not spread from people but rather from the environment Rate of environmental spread in the Maghreb, Egypt, and Southern Africa regions is 20x lower |
| [![Measles icon](/thumb.php?f=Measles.png&width=64)](/File%3AMeasles.png "Measles icon") Measles  Measles, also known as morbili, rubeola, and red measles, is a plague that spreads extremely fast from person to person, causing fever, coughs, sneezes, and a great flat rash that eventually covers the entire body. It preys most eagerly on children, who are at great risk of death if they fall on its claws. | 0.1-0.2% | 5% | 10% | * 10-15 in rural settlements * 12-18 in towns * 18-20 in cities | 20-24 | Cannot happen in the continent of America unless the Great Pestilence happened |
| [![Smallpox icon](/thumb.php?f=Smallpox.png&width=64)](/File%3ASmallpox.png "Smallpox icon") Smallpox  Smallpox is a terrible disease that inflicts fever, vomiting and finally an enormous amount of liquid-filled blisters that cover the entire body of the unfortunate victim. The outbreaks of this plague are very deadly and those that survive are commonly blinded for life. | 5-30% | 4% | 10% | * 3-6 in rural settlements * 5-10 in towns * 10-15 in cities | 2-8 | * Can only appear in locations with cold arid, continental, mediterranean, oceanic or tropical climate * Cannot happen in the continent of America unless the Great Pestilence happened |
| [![Typhus icon](/thumb.php?f=Typhus.png&width=64)](/File%3ATyphus.png "Typhus icon") Typhus  This deathly sickness creates on those stricken by it a great deal of fever, a big red rash that might extend over the entire body, and a confusion of the mind that might get worse, to the point of full-on delirium. Those poor souls that reach that point would develop gangrenous lesions and invariably die. | 4-40% | 4% | 10% | * 0.5-0.9 if prosperity is positive * 2.5-4.5 if prosperity is negative | 24-36 | * Can only appear in locations with endemic typhus * Appears in locations that are under siege, if possible * Spreads more among lower social classes |
| [![Bubonic Plague icon](/thumb.php?f=Bubonic_plague.png&width=64)](/File%3ABubonic_plague.png "Bubonic Plague icon") Bubonic Plague  A great pestilence that sweeps through busy trade routes, sparing neither low nor high. Those infected suffer black swellings in the groin and armpits, terrible fever, and death. Some believe it is carried by the vermin that scurry in our streets and fields, spreading foul sickness from one poor soul to another." | 30-60% | 16% | See below | 1.1-1.3 in rural settlements or in harsh geographic conditions 1.3-1.6 in towns without harsh geographic conditions 1.5-1.9 in cities without harsh geographic conditions | 25 | See below |
| [![Great Pestilence icon](/thumb.php?f=Great_pestilence.png&width=64)](/File%3AGreat_pestilence.png "Great Pestilence icon") Great Pestilence | 75-90% | 4% | See below | * 0-3 in rural settlements * 2-5 in towns * 5-10 in cities | 4-16 | See below |

### Bubonic Plague

The Bubonic Plague is one of the two most dangerous diseases in the game. Only one Bubonic Plague disease can exist at a time. When and where the first Bubonic Plague disease will appear depends on game rules and will always start the [Black Death situation](/Situations#Black_Death "Situations"). Subsequent diseases have a 5% chance to appear each month and cannot appear inside the continent of America. Bubonic Plague diseases will kill between 30% and 60% of infected population and will never die off until it has spread a significant distance from its point of origin. Characters have a 16% of dying with each tick, multiplied by disease presence in their location. This chance is halved if your court is in hiding.

Bubonic Plague diseases spread every 25 days. Once 30% of a location's population has been infected, the disease can spread to adjacent locations. Every infected will spread the disease to the following uninfected people each time the disease spreads:

* 1.1-1.3 if topography is Mountains or Wetlands, vegetation is Desert or Jungle, climate is Arctic or Tropical, or the location is a rural settlement. The disease is also 75% less likely to spread to these locations if they don't have a road.
* 1.3-1.6 if location is a town.
* 1.5-1.9 if the location is higher.

If at least 20% of the population in a location is infected with Bubonic Plague, the location will get the following penalties:

* [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) **−200%** Pop promotion speed
* [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) **+50%** Pop demotion speed
* [![Global monthly prosperity.png](/thumb.php?f=Global_monthly_prosperity.png&width=24)](/File%3AGlobal_monthly_prosperity.png) **−10%** Monthly prosperity
* [![Global monthly control.png](/thumb.php?f=Global_monthly_control.png&width=24)](/File%3AGlobal_monthly_control.png) **−0.2%** Monthly control
* [![Global monthly development.png](/thumb.php?f=Global_monthly_development.png&width=24)](/File%3AGlobal_monthly_development.png) **−0.01** Monthly development
* [![Global hostile attrition.png](/thumb.php?f=Global_hostile_attrition.png&width=24)](/File%3AGlobal_hostile_attrition.png) **+5** Nonavoidable attrition
* [![Max attrition.png](/thumb.php?f=Max_attrition.png&width=24)](/File%3AMax_attrition.png) **+10** Maximum attrition
* [![Migration attraction.png](/thumb.php?f=Migration_attraction.png&width=24)](/File%3AMigration_attraction.png) **−5** Migration attraction
* [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) **+0.01** Pop migration speed

If a country with [![Monarchy.png](/thumb.php?f=Monarchy.png&width=24)](/File%3AMonarchy.png) Monarchy government has the Bubonic Plague within borders there is also a 0.18% chance each month that its ruler will die.

### Great Pestilence

The Great Pestilence is one of the two most dangerous diseases in the game. The Great Pestilence will only appear after the Age of Discovery has been reached and only in locations in the continent of America that are owned or a subject of a country with the capital in the Old World. Once these conditions are met, the Great Pestilence has a 10% chance to appear each month. It can spawn multiple times until the situation is over

The Great Pestilence can spawn multiple times in locations owned by old world countries which don't have high disease resistance yet.

The spread of the great pestilence is significantly reduced in locations with mountains, desert, or jungle.

Forbidding contact with outsiders will greatly increase the chance of stagnation, by 50 percentage points per tick.

If at least 20% of the population in a location is infected with the Great Pestilence, the location will get the following penalties:

* [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) **−200%** Pop promotion speed
* [![Global pop promotion speed.png](/thumb.php?f=Global_pop_promotion_speed.png&width=24)](/File%3AGlobal_pop_promotion_speed.png) **+200%** Pop demotion speed
* [![Global monthly prosperity.png](/thumb.php?f=Global_monthly_prosperity.png&width=24)](/File%3AGlobal_monthly_prosperity.png) **−10%** Monthly prosperity
* [![Global monthly control.png](/thumb.php?f=Global_monthly_control.png&width=24)](/File%3AGlobal_monthly_control.png) **−0.5%** Monthly control
* [![Global monthly development.png](/thumb.php?f=Global_monthly_development.png&width=24)](/File%3AGlobal_monthly_development.png) **−0.02** Monthly development
* [![Global hostile attrition.png](/thumb.php?f=Global_hostile_attrition.png&width=24)](/File%3AGlobal_hostile_attrition.png) **+5** Nonavoidable attrition
* [![Max attrition.png](/thumb.php?f=Max_attrition.png&width=24)](/File%3AMax_attrition.png) **+10** Maximum attrition
* [![Global population growth.png](/thumb.php?f=Global_population_growth.png&width=24)](/File%3AGlobal_population_growth.png) **−10%** Population growth

The Great Pestilence cannot spread to the Old World. When the disease enters the borders of a country the country will receive the following effects:

* If the country's primary culture originates outside the continent of America the country will gain **−2.5** [![Stability.png](/thumb.php?f=Stability.png&width=24)](/Stability "Stability") Stability and **+2** Societal Values Chance towards Spiritualist.
* If the country's primary culture originates from the continent of America the country will gain **−20** [![Stability.png](/thumb.php?f=Stability.png&width=24)](/Stability "Stability") Stability and **+5** Societal Values Chance towards Spiritualist.

The Great Pestilence can only end once the Caribbean, Mexico, and Andes regions have all gotten infected by the disease.

When a Great Pestilence outbreak ends every country that has been infected will gain **+5** Societal Values Chance towards Spiritualist.

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
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • Diseases |