<!-- source: https://eu5.paradoxwikis.com/Tribes revid: 36899 fetched: 2026-09-09 -->
# Tribes
Europa Universalis 5
[Estates](/Estates "Estates")
 [Nobility](/Nobility "Nobility")
 [Clergy](/Clergy "Clergy")
 [Burghers](/Burghers "Burghers")
 [Commoners](/Commoners "Commoners")
 Tribes
 [Dhimmi](/Dhimmi "Dhimmi")
 [Cossacks](/Cossacks "Cossacks")
Tribes is the [estate](/Estate "Estate") made up of pops with the  Tribesmen social class. Every pop produces 0.01 Power and 0.01 Tax.
In some Gaelic cultures, such as the "Highlanders" and "Norse-Gaelic", anyone other than slaves could join the tribal class.
For this to happen, you must have:
* Gaelic language
* Gaelic cultural group
* The owner must have the privilege of "Scottish clans"
## Estate modifiers
While estate power is below **25%**, the country will gain the following modifiers:
* Up to  +50% Maximum Tax for Tribes
While estate power is above **25%**, the country will gain the following modifiers:
* Up to  +10% Raw Materials Output
* Up to  −30% Maximum Tax for Tribes
* Up to  +0.33 Monthly Progress to Traditional Economy
Regardless of estate power, the country will gain the following effects depending on the estate satisfaction:
*  **−2.5%** to **+2.5%** Raw materials output
*  **−5%** to **+5%** Food production
## Opinion of other countries
The estate's opinion of other countries is affected by the following:
* **+10** towards countries with Tribe government
* **+5** if both countries have the same common language
* **−5** towards countries with a different culture group
* **−5** towards countries with a heretic religion
* **−10** towards countries with a heathen religion
* **−20** towards rivals
## Privilege
The Tribes estate can have the following estate privileges:
| Name | Requirements | Effects |
|  Allow Gatherings  Regular gatherings of our tribal communities are an excellent forum in which to discuss politics, exchange information, and negotiate the flow of business to many settlements across our realm. Therefore, we shall allow them. |  | *  **+5.00%** Tribes Satisfaction Equilibrium *  **+25.00%** Tribes Power *  +0.10 Monthly Progress to Communalism |
|  Allow Tribal Levies  Our tribal warriors are famed for their warfare experience. To employ these hard men within our armies will only serve to empower our forces and further secure our domain. |  | *  **+2.50%** Tribes Satisfaction Equilibrium *  **+30.00%** Tribes Levy Size *  **+33.00%** Tribes Power |
|  Autonomous United Scottish Heritage  For generations, the clans of the rural northern highlands have retained their Gaelic identity, while the clans of the lowlands have largely developed their own Scottish culture. Despite differing practices, the clans of the highlands and lowlands will nevertheless set aside their differences to fight foreign adversaries that threaten Scotland. | * culture:   + has\_culture\_group: Scottish * Not:   + has\_estate\_privilege:  [Statutes of Iona](/Estate_privilege#Statutes_of_Iona "Estate privilege") * has\_variable: preserved\_clan\_autonomy  * Not:   + has\_estate\_privilege:  [Statutes of Iona](/Estate_privilege#Statutes_of_Iona "Estate privilege")   **Can Revoke:**   * estate\_power(estate\_type:crown\_estate) > 0.33 | *  **−10.00%** Tribes Power *  **+0.05%** Monthly Control *  **+0.20** Monthly Army Tradition |
|  Creach  The cultivation and husbandry of Livestock we have procured through warfare and raiding is an excellent way to safeguard the prosperity of our tribal people. | * culture:   + has\_culture\_group: Scottish | *  **+2.50%** Tribes Satisfaction Equilibrium *  **+5.00%** Livestock Output *  **+25.00%** Tribes Power |
|  Expanded Registry  Despite our local tribal communities living a life largely detached from that of our mainstream society, we should nevertheless ensure that they are properly accounted for in our registry. |  | *  **+2.50%** Tribes Satisfaction Equilibrium *  **+10.00%** Tribesmen Growth *  **+50.00%** Tribes Power |
|  Fosterage  By fostering the next generation of tribal members in neighboring families, their unique knowledge will be passed down, and bonds of kinship and alliance between communities will be strengthened. | * culture:   + has\_culture\_group: Scottish | *  **+2.50%** Tribes Satisfaction Equilibrium *  **+2.00%** Monthly Research Progress % *  **+50.00%** Tribes Power |
|  Jaysh Armies  Organized by the local administration to perform garrison and auxiliary duties, these fighters were hired to suppress local revolts and ensure the constant flow of reinforcements into our army, while also suppressing rebellions in their home territories. |  | *  **+5.00%** Tribes Satisfaction Equilibrium *  **+5.00%** Reinforcement Speed *  +0.10 Monthly Progress to Quantity *  **+50.00%** Tribes Power |
|  Manrent  By engaging in contractual conscription work, many members of our tribal communities enter into the service of our most influential families. | * culture:   + has\_culture\_group: Scottish | *  **+5.00%** Tribes Satisfaction Equilibrium *  **+10.00%** Fort Defense *  **+50.00%** Tribes Power |
|  Pasture Access  By granting pasture access to our tribal communities, we can utilize their advanced knowledge about growing crops and raising Livestock. |  | *  **−2.50%** Expand Farming Cost *  **+20.00%** Tribes Power |
|  Protected Tribal Faith  Those who dwell in the wildest stretches of our land sometimes subscribe to different beliefs. As they are loyal subjects under our banner, we would do well to respect their religious differences. |  | *  **+5.00%** Tribes Satisfaction Equilibrium *  **−10.00%** Tribesmen to Peasants *  **+50.00%** Tribes Power |
|  Respected Tribal Traditions  The fascinating traditions followed by members of the tribal communities in our society should be respected, and supported by the state. |  | *  **+5.00%** Tribes Satisfaction Equilibrium *  **−10.00%** Cultural Influence % *  **+33.00%** Tribes Power |
|  Tribal Cabinet  Our tribal communities are an important cornerstone of our state. It is only right that we allow those willing to contribute to our administration to serve in high positions. |  | *  **+5.00%** Tribes Satisfaction Equilibrium *  **+50.00%** Tribes Power *  Tribes Allowed in Cabinet: **yes** *  +0.10 Monthly Progress to Decentralization |
|  Tribal Favor  The Jurchen elites are given primacy in state affairs, and are grateful for our refusal to adopt foreign customs. | * has\_unlocked\_estate\_privilege\_trigger:   + type: mch\_tribal\_favor |  |
|  Tribal Land Rights  Expanding and respecting the land rights of the many tribal communities in our realm is an excellent way to ensure their continued cooperation. |  | *  **+5.00%** Tribes Satisfaction Equilibrium *  **+25.00%** Tribes Power *  +0.10 Monthly Progress to Decentralization |
|  Tribal Strongholds  The many settled tribes across the Maghreb exert great influence over the locals. To appease them and recognize their authority will help us exert control over our domain with greater ease. | * capital:   + region: region:maghreb\_region * estate\_power(estate\_type:tribes\_estate) > 0 | *  **+5.00%** Max Rural Control *  **+50.00%** Tribes Power |
|  United Scottish Heritage  For generations, the clans of the rural northern highlands have retained their Gaelic identity, while the clans of the lowlands have largely developed their own Scottish culture. Despite differing practices, the clans of the highlands and lowlands will nevertheless set aside their differences to fight foreign adversaries that threaten Scotland. | * culture:   + has\_culture\_group: Scottish * Not:   + has\_estate\_privilege:  [Statutes of Iona](/Estate_privilege#Statutes_of_Iona "Estate privilege") * Not:   + has\_variable: preserved\_clan\_autonomy  * Not:   + has\_estate\_privilege:  [Statutes of Iona](/Estate_privilege#Statutes_of_Iona "Estate privilege")   **Can Revoke:**   * estate\_power(estate\_type:crown\_estate) > 0.33 | *  **+5.00%** Tribes Satisfaction Equilibrium *  **+25.00%** Tribes Power *  **−0.10%** Monthly Control *  **+0.0020** Monthly Development |
## References
