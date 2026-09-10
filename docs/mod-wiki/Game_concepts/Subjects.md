<!-- source: https://eu5.paradoxwikis.com/Subjects revid: 36728 fetched: 2026-09-09 -->
# Subjects
The Manage Subjects menu
A **subject** is a [country](/Country "Country") that is subordinate to another country, the *overlord*. A subject may in turn be the overlord of other countries, allowing long chains of subject-overlord relationships. Subjects typically have limitations on their [diplomacy](/Diplomacy "Diplomacy") in return for protection in a [war](/War "War").
Subjects may also suffer [subject taxation](/index.php?title=Subject_taxation&action=edit&redlink=1 "Subject taxation (page does not exist)") and have a certain percentage of their great power score extracted by their overlord. Additionally, a subject may not become a [great power](/Great_power "Great power"). The exact rules are dependent on the subject type. All subject types receive the following modifiers:
*  +10% Estates Satisfaction Equilibrium
*  −50% Pop Assimilation Speed
*  −50% Pop Conversion Speed %
*  −10% Pop Join Rebels Threshold
Countries can release provinces as “custom subjects”. Subjects created this way will use the province capital's dominant religion and culture as their primary.
Historical countries can also be released as subjects if any of their locations are owned, and they do not currently exist.
Overlords can begin the construction of buildings in locations owned by their subjects. The overlord will pay the  gold cost, but the construction materials must be supplied from the location's market. Overlords cannot cancel the construction of subject buildings, even if they started the construction.
## Loyalty
Every subject has a **loyalty** value towards their overlord, ranging from **0** to **100**. If it drops below **50** the subject no longer joins the overlord's wars and cannot be annexed. Loyalty depends on the relative power difference between the subject, the country strength of all subjects of the same type compared to the overlord multiplied with the subject type's *Strength Impact*, and also increases or decreases at a rate equal to 15% of the subject's opinion of the overlord.
Every subject also has a  Liberty Desire value, which ranges from **+100** or **−100** and decays monthly towards **0** but can be increased or decreased by events or subject interactions. Each point of Liberty Desire decreases Loyalty by one point.
Technologies that give loyalty:
| Technology | Modifier |
|  Late Feudal Relations | +5 |
|  Absolute Loyalty | +5 |
## Diplomatic annexation
An overlord can annex its subject if several conditions are met; namely, years the relationship has existed, the loyalty of the subject, and the subject's opinion of the overlord.
When an overlord annexes a subject that has additional subjects, the overlord inherits the additional subjects becoming their direct overlord.
All annexable subjects require at least 50 loyalty and a minimum positive opinion of their overlord to be annexed.
Once an overlord annexes a subject, it inherits any cores that subject held and inherits any additional subjects that subject held as well. The overlord still needs to accept the dominant culture of the cored lands to have them as fully integrated cored lands themselves once inherited.
Annexing a subject also results in an  Opinion modifier of **-50** (**+2** yearly) to other subjects and **-30** (**+1** yearly) to every neighbor of the annexed subject.
Different types of annexable subjects can have a different amount of years that must pass before they can be annexed, different opinion values required to start an annexation and opinion values to avoid an annexation stalling. Some vassals also take longer to annex than others and some get automatically inherited if they have no heir, as seen below.
|  Subject type |  Min years for annexation |  Min opinion required |  Stalled opinion |  Annexation speed |  Inherited on no heir |
|  **Appanage** | 15 | **+190** | **+175** | 1 |  |
|  **Conquistador** | 20 | **+150** | **+125** | 1 |  |
|  **Direct imperial free city** | 10 | **+150** | **+125** | 2 |  |
|  **Dominion** | 50 | **+150** | **+125** | 1 |  |
|  **Fiefdom** | 10 | **+150** | **+125** | 1 |  |
|  **Pronoia** | 20 | **+190** | **+175** | 0.5 |  |
|  **Maha samanta** | 10 | **+125** | **+100** | 2 |  |
|  **Vassal** | 10 | **+150** | **+125** | 1 |  |
|  **Uç Bey** | 10 | **+190** |  | 1 |  |
There are also key modifiers nations have access to that adjust the base values and therefore the time it takes to annex a vassal:
| Source of base cost | Annexation cost per |
| **Base cost** | 200 |
| **Rural** | 10 |
| **Town** | 13.33 |
| **City** | 20 |
| **Megalopolis** | 1000 |
Every location has a base annexation cost of 10, influenced by the location rank (such as town).
The formula for working out each location's annex cost is: 10 / (1 + local\_integration\_speed\_modifier) where local\_integration\_speed\_modifier is capped at -0.99.
Towns are therefore 10 / (1 + (-0.25)) = 13.33
Cities are 10 / (1 + (-0.5)) = 20
Megalopolis is 10 / (1 + (-0.99)) = 1000
| Source of flat annexation progress | Annexation progress |
| **Base increase for nations** | 0.5 |
| **Diplomatic spending** | 0 to 0.5 |
| Source of modifier | Percentile modifier | Is it a non-linear scaling modifier? |
| **Decentralization** | 0 to **+33%** |  |
| **Centralization** | 0 to **-33%** |  |
| **Subject loyalty** | 0 to **+20%** |  |
| **Dominant culture** | **+100%** |  |
| **Population vs Overlord** | **+100%** to **+?%** |  |
| **Cultural influence vs tradition** | **-50%** to **+50%** |  |
| **Annexing multiple vassals** | **-50%** per vassal over 1 |  |
You can find more information on each of the above modifiers and how they function below:
*  Diplomatic spending. At max this adds 0.5 on top of the 0.5 base value nations get, essentially doubling the base speed.
  + diplomatic\_maintenance\_mod is the nested modifier inside diplomatic\_maintenance\_mod that applies this.
*  Decentralization at max reduces annexation speed by **−33%**
*  Centralization at max increases annexation speed by **+33%**
  + This means the difference between 100 centralization and 100 decentralization is an effective value of 66%.
*  Subject loyalty. Every 1% subject loyalty is equivalent to a **+0.2%** modifier to annexation speed, maxing out at **+20%**. Diplomatic spending also increases subject loyalty.
*  Dominant culture. If the nation's primary culture matches your own, you get a **+100%** speed modifier to your annexation speed. You can convert a nation's culture at the cost of a decaying **-100** loyalty modifier with a cooldown of 10 years (as of v1.2)
*  Population. If an overlord's vassal's population is at least only 10% of the overlord nation's population, the overlord shall get get the "is much smaller" modifier. This scales starting at **+100%** speed for 10% of the overlord's population and scales up based on how much smaller the subject's population is compared to the overlord.
  + Any vassal with a population over 10% of the overlord's population will receive no buff from this ANNEX\_TINY\_SUBJECT modifier, only if at or below it.
*  Cultural influence vs cultural tradition. This is a scaling value that compares the difference between the overlord's primary culture's influence and the subject's primary culture's tradition. It can scale up to **+50%** if the overlord has far more influence and down to **−50%** if the subject has far more tradition. For example, a cultural influence of 500 compared to a tradition of 550 (A difference of 50) makes a modifier of **−4.76%**
* Annexing multiple vassals: For every subject over 1 being annexed by an overlord, a **−0.5** multiplicative modifier is added. For example, 3 subjects being annexed at once would create a **−100%** modifier.
## Military stance
Each AI subject has a military stance, which decides what the AI will try to do during war and can be changed by the overlord at any time. They can be set individually for each subject or at once for every subject. There are five military stances:
*  Normal: Subject will take a balanced approach to military tactics.
*  Aggressive: Subject will try to start sieges and chase units in enemy territory.
*  Supportive: Subject will try to help overlord units.
*  Passive: Subject will try to do low-risk actions like blockading and defending friendly territory.
*  Defensive: Subject will try to stop enemies from doing anything in allied lands only.
## Subject types
|  | **This section is planned to be [automatically generated](/Europa_Universalis_5_Wiki%3AAutogeneration "Europa Universalis 5 Wiki:Autogeneration") and should not be edited directly.**  Instead, suggest changes on the **[talk page](/index.php?title=Talk:Subjects&action=edit&redlink=1 "Talk:Subjects (page does not exist)")**. |
Every subject has a subject type, which essentially outlines the rules that it must follow in regard to aspects like war and succession law. Subject Types also dictate the subject taxation and great power score that each subject must surrender to its overlord.
|  | Vassal | Fiefdom | March | Colonial nation | Dominion | Tributary | Appanage | HRE-Imp | HRE-DirImp | Trade company | State bank |
| **Requirements** | !samanta | Monarchy | x | x | ENG | Steppe/Tribe | FR\_feudal\_nobility | - | - | x | - |
| **gold** | 20% | 20% | 10% | 3% | 20% | 20% | 20% | - | - | 50% | 20% |
| **sailors** | 0% | 0% | 0% | 10% | - | 5% | 0% | - | - | - | 0% |
| **manpower** | 0% | 0% | 0% | 10% | - | 5% | 0% | - | - | - | 0% |
| **level** | 2 | 3 | 1 | 1 | 3 | - | 3 | 1 | 2 | 1 | 2 |
| **Joins offensive wars** | x | x | x | x | x | - | ? | - | x | - | - |
| **Joins defensive wars** | x | x | x | x | x | ? | ? | - | x | - | - |
| **has\_overlords\_ruler** | - | x | - | - | x | - | - | - | - | - | x |
| **annexation\_speed** | 1 | 1 | - | - | 1 | - | 2 | - | 2 | - | - |
| **annexation\_min\_years\_before** | 10 | 10 | - | - | 100 | - | 15 | - | 10 | - | - |
| **annexation\_min\_opinion** | 150 | 150 | - | - | 150 | - | 200 | - | 150 | - | - |
| **annexation\_stall\_opinion** | 125 | 125 | - | - | 125 | - | 175 | - | 125 | - | - |
| **diplomatic\_capacity\_cost\_scale** | 100% | 100% | 100% | 50% | 50% | 20% | 25% | 0% | 0% | 50% | 100% |
| **strength\_vs\_overlord** | -50% | -50% | -100% | -10% | -25% | -25% | -33% | -50% | -50% | -10% | -10% |
| **warscore\_cost** | - | 0.5 | - | - | 0.5 | - | - | - | - | - | - |
| **can\_overlord\_build (Road, Bld, RGO)** | RBR | RBR | RBR | - | - | - | RBR | Ships | Ships | - | - |
| **has\_limited\_diplomacy** | x | x | x | x | x | - | x | - | x | x | x |
| **can\_declare\_wars** | - | - | - | x | - | x | x | x | - | - | - |
| **food\_access** | x | x | - | - | x | - | x | x | x | - | x |
| **minimum\_opinion\_for\_offer** | 150 | 150 | 150 | 100 | 175 | 150 | 200 | - | - | 100 | - |
| **government** | - | - | - | republic | monarchy | - | monarchy | - | - | republic | - |
| **monthly\_institution\_spread** | 20% | 50% | 50% | 50% | 50% | 10% | 50% | 20% | 20% | 50% | 50% |
| ----- Overlord modifiers ----- |  |  |  |  |  |  |  |  |  |  |  |
| **monthly\_prestige** | 0.01 | 0.01 | - | - | 0.01 | 0.01 |  |  |  |  |  |
| **stability\_decay** |  |  |  |  |  |  | 0% |  |  |  |  |
| **monthly\_legitimacy** |  |  |  |  |  |  | 3% |  |  |  |  |
| **global\_crown\_estate\_power** |  |  |  |  |  |  | -1% |  |  |  |  |
| **bank\_interest** |  |  |  |  |  |  |  |  |  |  | -0.5% |
| ----- Subject modifiers ----- |  |  |  |  |  |  |  |  |  |  |  |
| **country\_cabinet\_efficiency** | 5% | 5% |  |  |  | 5% | 15% |  |  |  |  |
| **pop\_capacity** |  |  |  | 10% |  |  |  |  |  |  |  |
| **allow\_slaves** |  |  |  | x |  |  |  |  |  |  |  |
| **discipline** |  |  | 5% |  |  |  |  |  |  |  |  |
| **global\_defensive** |  |  | 10% |  |  |  |  |  |  |  |  |
| **fort\_maintenace\_cost** |  |  | -10% |  |  |  |  |  |  |  |  |
| **fort\_limit** |  |  | 1 |  |  |  |  |  |  |  |  |
| **legislative\_efficiency** |  |  |  |  | 10% |  |  |  |  |  |  |
| **monthly\_prestige** |  |  |  |  |  |  | 0.1 |  |  |  |  |
| **global\_manpower\_modifier** |  |  |  |  |  |  | 15% |  |  |  |  |
| **trade\_efficiency** |  |  |  |  |  |  |  |  |  | 1% |  |
| **diplomatic\_reputation** |  |  |  |  |  |  |  |  |  |  | 2 |
## References
[Return to top](#top)
Mechanics
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • Subjects • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • [Combat](/Combat "Combat") • [Military](/Military "Military") |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |
