<!-- source: https://eu5.paradoxwikis.com/Modifier_types revid: 36019 fetched: 2026-09-09 -->
# Modifier types
This article has been verified for the current [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") (1.3) of the game.
*See also: [Modifier modding](/Modifier_modding "Modifier modding")*
**Modifier types** are game script which modify various game statistics or allow or block certain actions. A *static modifier* may include multiple modifier types. Modifier types are also used in many other game objects, such as [laws](/Law_modding "Law modding"), [institutions](/Institution_modding "Institution modding"), and [advances](/Advance_modding "Advance modding"), among others.
## Behavior of modifier types
Modifier types can hold a numerical or boolean value. Identical numerical modifier types affecting the same scope sum together to provide the final effect. Boolean modifier types can return only `yes` or `no`.
There are three categories of modifier types: hardcoded, object-based, and script-only.
* Hardcoded modifier types are defined based on game code and are only minimally moddable.
* Object-based modifier types are defined based on a mix game code and game objects, and new modifier types can be defined for new game objects.
* Script-only modifier types are defined entirely by script and do not have a direct effect on gameplay.
Modifier types have a default value of `0` for numerical types and `no` for Boolean types.
### Modifier blocks
A **modifier block** is an script element that accepts modifier types. A common example is a [static modifier](/Modifier_modding#Static_modifiers "Modifier modding") defined in common/static\_modifiers. Some static modifiers are defined in code and are [hardcoded](/Modifier_modding#Hardcoded_static_modifiers "Modifier modding"), but most are "event" modifiers, applied with the [effect](/Effect "Effect") [add\_<type>\_modifier](/Modifier_modding#Applying_and_removing_modifiers_during_the_game "Modifier modding").
A static modifier generally looks like this:
```
lack_of_agreement = {
	game_data = {
		category = country
	}
	court_spending_cost = -0.05
	bank_interest = 0.03
}
```
This includes a game data block and a number of modifier types. A static modifier does not need a modifier type, in which case it is mainly cosmetic or indicative of some other mechanic.
Other examples of modifier blocks include [laws](/Law_modding "Law modding"), [advances](/Advance_modding "Advance modding") and [estate privileges](/Estate_modding#estate_privileges "Estate modding"). In most cases, the modifier block is explicitly labeled with the term `modifier` or a similar variation.
### Modifier type values in script
The [event target](/Event_target "Event target") `modifier` returns the summed value of the given modifier type. This value can be used in [script values](/Script_value "Script value") as well as [triggers](/Trigger "Trigger") and [effects](/Effect "Effect") that accept script values. For example, a trigger can check if a country has more or less than a certain value of a given modifier type, or an effect can scale its impact by a given modifier type. Boolean modifiers return `yes` or `no` which can be used in direct comparisons or for certain triggers.
## Defining modifier types
All modifier types are defined in common/modifier\_type\_definitions. New files in common/modifier\_type\_definitions must be named fully in lowercase. If uppercase symbols are used in the file name the engine will not properly read the contents of the file. Each modifier type is scripted as its own block and may contain a number of parameters:
| Parameter | Description |
| decimals | Defines how many decimals are used in displaying the modifier type's value Unmodified Europa Universalis 5 only uses 0, 1, and 2 |
| color | Defines how the value is colored: neutral, good, or bad `neutral` is always black; `good` uses green for positive, red for negative; `bad` is the opposite. |
| percent | If set to `yes`, displays value as a percentage This multiplies the displayed value by 100 |
| boolean | If set to `yes`, defines the modifier as Boolean instead of numerical |
| prefix | Determines which localization key should be prefixed when displaying the values for entries of this type |
| suffix | Determines which localization key should be suffixed when displaying the values for entries of this type |
| game\_data | Used for internal handling, described in `modifier_types.md` as:  ``` # the value to the AI of having this modifier, multiplied by the value to determine the chance the AI will go after static modifiers of this type; only implemented for certain modifier types ai_value = 0 # the alternate modifier definition this type should be treated as in bespoke regions of code. Not generically applicable, used for applying the same effect in contextually appropriate situations translate = battle_offense_add # the modifier typesets this type belongs to, used in code to perform bespoke operations (such as updating cultural community acceptance deltas when a country enacts a law with a modifier entry of this type) type_set = { cultural_acceptance } ``` |
Hardcoded and object-based modifier types must use the exact script name or pattern expected, while script-only modifier types can use any script name.
### Localization
Each modifier type generates two [localization](/Localization "Localization") keys, `MODIFIER_TYPE_NAME_<key>` and `MODIFIER_TYPE_DESC_<key>`
## Object-based modifiers
Object-based modifiers can be extended for mods that add new types for each object category. Unmodified Europa Universalis 5 contains many, but not all possible modifier types for the game's objects.
| Category | Description | Definition folder |
| $Bureaucracy$ | Bureaucracies | common/bureaucracies |
| $Estate$ | Estates | common/estates |
| $Goods$ | Goods | common/goods |
| $Movement$ | Movements | common/movements |
| $PopType$ | Pop type | common/pop\_types |
| $Price$ | Price | common/prices |
| $SocietalValue$ | Societal values | common/societal\_values |
| $Spreadable$ | Diseases and movements | common/diseases |
| $Topography$ | Topography | common/topography |
| $UnitCategory$ | Unit categories | common/unit\_categories |
List of modifier types
| Modifier type | Description | Category | Type |
| $Bureaucracy$\_impact\_modifier | Multiplies impact of $Bureaucracy$ |  | multiplicative |
| $Estate$\_agenda\_impact | Multiplies agenda impact of $Estate$ | estate |  |
| $Estate$\_allowed\_in\_cabinet | $Estate$ characters can be in cabinet | estate |  |
| $Estate$\_allowed\_leading\_military | $Estate$ characters can lead armies or navies | estate |  |
| $Estate$\_allowed\_to\_build\_rgo | $Estate$ can build RGOs | estate |  |
| $Estate$\_allowed\_to\_build\_roads | $Estate$ can build roads | estate |  |
| $Estate$\_blocked\_from\_cabinet | $Estate$ characters *cannot* be in cabinet | estate |  |
| $Estate$\_blocked\_from\_leading\_military | $Estate$ characters *cannot* lead armies or navies | estate |  |
| $Estate$\_blocked\_from\_parliament | $Estate$ is *not* in parliament | estate |  |
| $Estate$\_can\_participate\_in\_parliament | $Estate$ is in parliament | estate |  |
| $Estate$\_cannot\_marry | $Estate$ characters *cannot* marry | estate |  |
| $Estate$\_levy\_size | Multiplies size of levies for $Estate$ | estate |  |
| $Estate$\_max\_tax | Adds max tax amount for $Estate$ | estate |  |
| $Estate$\_min\_tax | Adds min tax amount for $Estate$ | estate |  |
| $Estate$\_power\_from\_cabinet | Multiplies $Estate$ power from having a character in cabinet | estate |  |
| $Estate$\_satisfaction\_decay | Adds $Estate$ satisfaction decay | estate |  |
| $Estate$\_satisfaction\_recovery | Adds $Estate$ satisfaction recovery | estate |  |
| $Estate$\_target\_satisfaction | Multiplies $Estate$ satisfaction target | estate |  |
| $Goods$\_impacts\_inflation | Adds inflation impact to $Good$ |  |  |
| $Goods$\_used\_for\_minting | $Good$ can be used for minting |  |  |
| $Price$\_cost\_modifier | Modifies $Price$ |  | multiplicative |
| $Topography$\_proximity\_impact | Adds proximity impact to $Topography$ |  |  |
| army\_$UnitCategory$\_power | Adds to combat power of $UnitCategory$ | army |  |
| ban\_exports\_of\_$Goods$ | *Cannot* export $Goods$ |  |  |
| ban\_imports\_of\_$Goods$ | *Cannot* import $Goods$ |  |  |
| base\_$Estate$\_power\_modifier | Multiplies base power of $Estate$ |  | multiplicative |
| can\_extract\_$Goods$ | Can extract $Good$ |  |  |
| global\_$Estate$\_power | Multiplies power of $Estate$ in country |  |  |
| global\_$Goods$\_output\_modifier | Multiplies output of $Goods$ in country |  | multiplicative |
| global\_$Goods$\_pop\_demand | Multiplies pop demand of $Goods$ in country |  |  |
| global\_$Movement$\_growth\_modifier | Adds growth of $Movement$ on $Movement$ |  | multiplicative |
| global\_$Movement$\_resistance\_modifier | Adds resistance to $Movement$ on $Movement$ |  | multiplicative |
| global\_$PopType$\_assimilation\_blocked | Cannot assimilate $PopType$ in country |  |  |
| global\_$PopType$\_city\_desired\_pop | Adds number of $PopType$ wanted for urban locations in country |  |  |
| global\_$PopType$\_city\_desired\_pop\_scaled | Adds number of $PopType$ wanted per 1K population for urban locations in country |  | scaled |
| global\_$PopType$\_conversion\_blocked | Cannot convert $PopType$ in country |  |  |
| global\_$PopType$\_desired\_pop | Adds number of $PopType$ wanted for all locations in country |  |  |
| global\_$PopType$\_desired\_pop\_scaled | Adds number of $PopType$ wanted per 1K population for all locations in country |  | scaled |
| global\_$PopType$\_food\_consumption | Multiplies food consumption by $PopType$ in country |  |  |
| global\_$PopType$\_max\_literacy | Adds max literacy for $PopType$ in country |  |  |
| global\_$PopType$\_migration\_allowed | Allows $PopType$ in country to migrate |  |  |
| global\_$PopType$\_pop\_growth | Adds growth for $PopType$ in country |  |  |
| global\_$PopType$\_rural\_desired\_pop | Adds number of $PopType$ wanted for rural locations in country |  |  |
| global\_$PopType$\_rural\_desired\_pop\_scaled | Adds number of $PopType$ wanted per 1K population for rural locations in country |  | scaled |
| local\_$Estate$\_power | Multiplies power of $Estate$ in location |  |  |
| local\_$Estate$\_unrest | Adds unrest to $Estate$ in location |  |  |
| local\_$Goods$\_output\_modifier | Multiplies output of $Goods$ in location |  | multiplicative |
| local\_$PopType$\_assimilation\_blocked | Cannot assimilate $PopType$ in location |  |  |
| local\_$PopType$\_conversion\_blocked | Cannot convert $PopType$ in location |  |  |
| local\_$PopType$\_desired\_pop | Adds number of $PopType$ wanted in location |  |  |
| local\_$PopType$\_desired\_pop\_scaled | Adds number of $PopType$ wanted per 1K population in location |  | scaled |
| local\_$PopType$\_food\_consumption | Multiplies food consumption by $PopType$ in location |  |  |
| local\_$PopType$\_max\_literacy | Adds max literacy for $PopType$ in location |  |  |
| local\_$PopType$\_migration\_allowed | Allows $PopType$ in location to migrate |  |  |
| local\_$PopType$\_pop\_growth | Adds growth for $PopType$ in location |  |  |
| local\_$Spreadable$\_growth\_modifier | Adds growth of $Spreadable$ in location |  | multiplicative |
| local\_$Spreadable$\_impact\_modifier | Adds impact of $Spreadable$ in location |  | multiplicative |
| local\_$Spreadable$\_resistance\_modifier | Adds resistance to $Spreadable$ in location |  | multiplicative |
| monthly\_$Estate$\_rebel\_growth | Adds to growth of $Estate$ rebels |  |  |
| monthly\_towards\_$SocietalValue$ | Adds monthly movement towards $SocietalValue$ |  |  |
| national\_$Spreadable$\_growth\_modifier | Adds growth of $Spreadable$ in country |  | multiplicative |
| national\_$Spreadable$\_resistance\_modifier | Adds resistance to $Spreadable$ in country |  | multiplicative |
| navy\_$UnitCategory$\_power | Adds to combat power of $UnitCategory$ | navy |  |
## Script-only modifier types
Script-only modifier types do not have a direct effect on the gamestate. Instead, they act as "hooks" for other scripting. For example, the modifier type `baptize_ruler_from_kirishitan_cost_modifier` has no effect by itself, but instead it is used in the calculation of the [scripted action's price](/Action_modding#Price "Action modding"). Script-only modifier types can also be used with scripted values, as for example `hanseatic_shipwright_guild_max_level` which is used in a script value to determine the maximum allowed level of the Hanseatic Shipwright Guild building.
The value of any modifier type can be returned with the scope link `modifier`. For example, `modifier:allowed_to_become_shogun` which returns yes or no depending on the value of the modifier type. Numerical modifiers are summed when returned with `modifier` so that separate sources add together, just as with hardcoded and object-based modifier types.
Finally, some script-only modifier types act only as indicators while the actual effect is implemented in another way.
## List of all defined modifier types
This table contains all modifier types defined in Europa Universalis 5 for easy searching. It does not include potential modifier types which are not defined
List of modifier types
| Modifier type | Localization | Category | Type | Format | Notes |
| a\_clan\_retainer\_cavalry\_build\_cost\_modifier | Clan Retainer Cavalry Build Cost | country | multiplicative | percent, bad |  |
| a\_clan\_retainer\_cavalry\_maintenance\_cost\_modifier | Clan Retainer Cavalry Maintenance Cost | country | multiplicative | percent, bad |  |
| a\_clan\_retainer\_cavalry\_reinforce\_cost\_modifier | Clan Retainer Cavalry Repair Cost | country | multiplicative | percent, bad |  |
| a\_clan\_retainers\_build\_cost\_modifier | Clan Retainers Build Cost | country | multiplicative | percent, bad |  |
| a\_clan\_retainers\_maintenance\_cost\_modifier | Clan Retainers Maintenance Cost | country | multiplicative | percent, bad |  |
| a\_clan\_retainers\_reinforce\_cost\_modifier | Clan Retainers Repair Cost | country | multiplicative | percent, bad |  |
| abandon\_colonial\_charter\_cost\_modifier | Abandon Colonial Charter Cost | country | multiplicative | percent, bad |  |
| abandon\_piracy\_cost\_modifier | Abandon Piracy | country | multiplicative | percent, good |  |
| abdicate\_price\_cost\_modifier | Abdicate Cost Modifier | country | multiplicative | percent, bad |  |
| absentee\_agenda\_impact | Agenda Impact for Absentee | internationalorganization |  | percent, good |  |
| absentee\_can\_participate\_in\_parliament | Absentee in Parliament | internationalorganization | boolean | good |  |
| absorb\_institutions\_cost\_modifier | Absorb Institutions | country | multiplicative | percent, good |  |
| accept\_subjugation\_reasons | Accept Subjugation Reasons | country |  | good |  |
| accepted\_culture\_maintenance\_cost\_modifier | Accepted Culture Maintenance Cost | country | multiplicative | percent, bad |  |
| activate\_avatar\_cost\_modifier | Activate Avatar Cost | country | multiplicative | percent, bad |  |
| add\_accepted\_culture\_cost\_modifier | Add Accepted Culture Cost | country | multiplicative | percent, bad |  |
| add\_location\_to\_international\_organization\_cost\_modifier | Add Location to International Organization Cost | country | multiplicative | percent, bad |  |
| add\_religious\_aspect\_christian\_cost\_modifier | Cost of Adding Religious Aspect | country | multiplicative | percent, bad |  |
| add\_religious\_aspect\_hellenism\_cost\_modifier | Cost of Adding Religious Aspect | country | multiplicative | percent, bad |  |
| add\_religious\_aspect\_inti\_cost\_modifier | Cost of Choosing Worshipping a God | country | multiplicative | percent, bad |  |
| add\_tolerated\_culture\_cost\_modifier | Add Tolerated Culture Cost | country | multiplicative | percent, bad |  |
| adm | Administrative Ability | character |  | good |  |
| admiralty\_board\_bureaucracy\_impact\_modifier | Admiralty Board Impact | country | multiplicative | percent, good |  |
| aggressiveness\_modifier | Aggressiveness | country | multiplicative | percent, bad |  |
| ai\_amount\_of\_parallel\_charters | AI Maximum Parallel Colonial Charters | country |  | good |  |
| ai\_conquer\_desire\_religion\_mult | AI Conquer Desire Religious Antagonism | country |  | percent, good |  |
| ai\_force\_annexation\_modifier | AI Force Annexation Modifier | country | multiplicative | good |  |
| ai\_government\_power\_target\_modifier | AI Government Power Target | country | multiplicative | good |  |
| ai\_months\_between\_wars | Months Between Wars | country |  | good |  |
| ai\_opinion\_bias | AI Opinion Bias | country |  | good |  |
| ai\_require\_cb\_for\_war | AI Require Casus Belli | country | boolean | good |  |
| ai\_stability\_target\_modifier | AI Stability Target | country | multiplicative | good |  |
| aid\_colonial\_war\_cost\_modifier | Aid Colonial War Efforts Cost Modifier | country | multiplicative | percent, bad |  |
| allelengyon\_bureaucracy\_impact\_modifier | Allelengyon Impact | country | multiplicative | percent, good |  |
| alliance\_weight | Alliance Weight | country |  | bad |  |
| allow\_apprenticeships\_education | Allows Individual Apprenticeships | country | boolean | good |  |
| allow\_assembly\_parliament | Allow Assembly Parliament | country | boolean | good |  |
| allow\_autocratic\_parliament | Allow Autocratic Parliament | country | boolean | good |  |
| allow\_bureaucracy | Allow Bureaucracy | country | boolean | good |  |
| allow\_cabinet\_assimilate\_area | Assimilate Area | country | boolean | good |  |
| allow\_cabinet\_diplomatic\_corps | Diplomatic Corps | country | boolean | good |  |
| allow\_cabinet\_naval\_focus | Maritime Support | country | boolean | good |  |
| allow\_cabinet\_reduced\_paperwork | Reduced Paperwork | country | boolean | good |  |
| allow\_cabinet\_soldiers\_as\_workforce | Soldiers as Workforce | country | boolean | good |  |
| allow\_clerical\_archives | Allows Clerical Archives | country | boolean | good |  |
| allow\_conquistadors | Can Recruit Conquistadors | country | boolean | good |  |
| allow\_constitutional\_parliament | Allow Constitutional Parliament | country | boolean | good |  |
| allow\_council\_parliament | Allow Council Parliament | country | boolean | good |  |
| allow\_diplomacy\_force\_change\_court\_language | Force Change Court Language | country | boolean | good |  |
| allow\_diplomacy\_force\_divert\_trade | Force Divert Trade | country | boolean | good |  |
| allow\_diplomacy\_force\_embargo | Force Embargo | country | boolean | good |  |
| allow\_diplomacy\_influence\_nation | Influence Country | country | boolean | good |  |
| allow\_diplomacy\_violate\_sovereignty | Violate Sovereignty | country | boolean | good |  |
| allow\_dun\_fort | Allows Clan Seat | country | boolean | good |  |
| allow\_estate\_parliament | Allow Estate Parliament | country, *estate* | boolean | good |  |
| allow\_extensive\_conscription\_cabinet\_action | Allows Extensive Conscription | country | boolean | good |  |
| allow\_female\_cabinet | Allow Females in Cabinet | country | boolean | good |  |
| allow\_female\_leader | Allow Females to Command | country | boolean | good |  |
| allow\_guild\_hall | Allows Guild Hall | country | boolean | good |  |
| allow\_guilds\_of\_florence\_law | Allows Primacy of Florentine Guilds | country | boolean | good |  |
| allow\_harmony | Enable Harmony | country | boolean | good |  |
| allow\_kulm\_town\_rights | Allows Kulm Rights | country | boolean | good |  |
| allow\_landfriede | Can Enforce Landfriede | country | boolean | good |  |
| allow\_local\_noble\_delegation | Allows Local Noble Delegation | country | boolean | good |  |
| allow\_magdeburg\_rights\_town\_rights | Allows Magdeburg Rights | country | boolean | good |  |
| allow\_male\_cabinet | Allow Males in Cabinet | country | boolean | good |  |
| allow\_male\_leader | Allow Males to Command | country | boolean | good |  |
| allow\_member\_call\_parliament | Allow Members to Call Parliament | internationalorganization | boolean | neutral |  |
| allow\_military\_order\_units | Allows Military Order Units | country | boolean | good |  |
| allow\_mysticism\_vs\_jurisprudence | Allow Mysticism vs Jurisprudence | country | boolean | good |  |
| allow\_native\_subjugation\_cb | Native Subjugation Casus Belli | country | boolean | good |  |
| allow\_nobility\_fortifications | Allows Nobility Fortifications | country | boolean | good |  |
| allow\_noble\_villa | Allows Noble Villa | country | boolean | good |  |
| allow\_nobles\_recruitment\_center | Allows Nobles Recruitment Center | country | boolean | good |  |
| allow\_novi\_fori\_town\_rights | Allows Novi Fori Rights | country | boolean | good |  |
| allow\_nuremberg\_rights\_town\_rights | Allows Nuremberg Rights | country | boolean | good |  |
| allow\_open\_sea\_exploration | Allows Open Sea Exploration | country | boolean | good |  |
| allow\_overrule\_imperial\_diet | Can Overrule the Imperial Diet | internationalorganization | boolean | good |  |
| allow\_paik\_levies | Allow Paik Levies | country | boolean | good |  |
| allow\_peasants\_hunting\_grounds | Allows Peasants Hunting Grounds | country | boolean | good |  |
| allow\_peasants\_training\_grounds | Allows Peasants Training Grounds | country | boolean | good |  |
| allow\_privateers\_slave\_raid | Privateers Will Raid for Slaves | country | boolean | good |  |
| allow\_rgo\_slave\_demand | Slaves working with Raw Materials | country | boolean | good |  |
| allow\_righteousness | Enable Righteousness | country | boolean | good |  |
| allow\_roman\_movement | Allow Latin Revival Movement | country | boolean | good |  |
| allow\_safe\_refuge\_cost\_modifier | Cost of Allow Safe Refuge Action | country | multiplicative | percent, bad |  |
| allow\_self\_control | Enable Self Control | country | boolean | good |  |
| allow\_self\_vote | Allow Self Voting | internationalorganization | boolean | good |  |
| allow\_slave\_conversion | Allow Conversion of Slaves | country | boolean | good |  |
| allow\_smartism\_gods | Enable Smartism Gods | country | boolean | good |  |
| allow\_subjects | Can Get Subjects | country | boolean | good |  |
| allow\_thema\_headquarters | Allows Théma Headquarters | country | boolean | good |  |
| allow\_theocratic\_education | Allows Devout Education | country | boolean | good |  |
| allow\_tributary\_subject | Allow Tributary Subjects | country | boolean | good |  |
| allow\_tribute\_in\_silver | May Demand Silver Tribute | country | boolean | good |  |
| allow\_ville\_franche\_town\_rights | Allows Ville Franche Rights | country | boolean | good |  |
| allow\_warrior\_monks\_training\_grounds | Allows Warrior Monks Training Grounds | country | boolean | good |  |
| allowed\_alliance | Can Sign Alliance | country | boolean | good |  |
| allowed\_enforce\_peace | Can Enforce Peace | country | boolean | good |  |
| allowed\_guarantee | Can Guarantee | country | boolean | good |  |
| allowed\_intervene\_in\_war | Can Intervene in War | country | boolean | good |  |
| allowed\_support\_rebels | Can Support Rebels | country | boolean | good |  |
| allowed\_threaten\_war | Can Threaten War | country | boolean | good |  |
| allowed\_to\_become\_shogun | Allowed to Become Shōgun | character | boolean | good |  |
| allows\_hanseatic\_federation\_buildings | Allows Hanseatic Federation Buildings | country | boolean | good |  |
| alum\_impacts\_inflation | Alum Impacts Inflation | country |  | percent, good |  |
| alum\_used\_for\_minting | Alum Used for Coins | country | boolean | good |  |
| always\_allow\_army\_levies | Army Levies Always Allowed | country | boolean | good |  |
| always\_allow\_levies | All Levies Always Allowed | country | boolean | good |  |
| always\_allow\_navy\_levies | Navy Levies Always Allowed | country | boolean | good |  |
| amber\_impacts\_inflation | Amber Impacts Inflation | country |  | percent, good |  |
| amber\_used\_for\_minting | Amber Used for Coins | country | boolean | good |  |
| amount\_looted\_modifier | Amount Looted | unit | multiplicative | percent, good |  |
| annexation\_speed\_base | Speed of Annexation | country |  | good |  |
| annexation\_speed\_modifier | Speed of Annexation | country | multiplicative | percent, good |  |
| antagonism\_breaking\_truce\_giving\_modifier | Antagonism Given from Breaking Truce Modifier | country | multiplicative | percent, neutral |  |
| antagonism\_culture\_influence | Antagonism Culture Influence | country |  | percent, neutral |  |
| antagonism\_declared\_war\_no\_cb\_giving\_modifier | Antagonism Given from Declaring War without Casus Belli Modifier | country | multiplicative | percent, neutral |  |
| antagonism\_development\_impact | Antagonism from Development | country |  | percent, bad |  |
| antagonism\_government\_type\_influence | Antagonism Government Type Influence | country |  | percent, neutral |  |
| antagonism\_language\_influence | Antagonism Language Influence | country |  | percent, neutral |  |
| antagonism\_monthly\_change\_modifier | Antagonism Decay | country | multiplicative | neutral |  |
| antagonism\_peace\_treaty\_demands\_giving\_modifier | Antagonism Given from Peace Treaty Demands | country | multiplicative | percent, neutral |  |
| antagonism\_received\_modifier | Antagonism Received | country | multiplicative | percent, bad |  |
| antagonism\_religion\_influence | Antagonism Religion Influence | country |  | percent, neutral |  |
| antagonism\_revolution\_influence | Antagonism Revolution Influence | country |  | percent, neutral |  |
| antagonism\_societal\_value\_influence | Antagonism Societal Value Influence | country |  | percent, neutral |  |
| antagonism\_taking\_land\_giving\_modifier | Antagonism Given from Taking Land Modifier | country | multiplicative | percent, neutral |  |
| anti\_piracy\_warfare\_modifier | Anti-Piracy Warfare Modifier | unit | multiplicative | percent, good |  |
| any\_pop\_can\_be\_slave | Unrestricted Slavery | country | boolean | good |  |
| appease\_nobles\_estate\_from\_shogun\_court\_cost\_modifier | Cost of Appease the Elites Action | country, *estate* | multiplicative | percent, bad |  |
| appoint\_as\_heir\_price\_cost\_modifier | Appoint as Heir Cost Modifier | country | multiplicative | percent, bad |  |
| aqueduct\_system\_max\_level | Aqueduct System Max Level | country | additive | good |  |
| archbishop\_elector\_agenda\_impact | Agenda Impact for Archbishop-Elector | internationalorganization |  | percent, good |  |
| archbishop\_elector\_can\_participate\_in\_parliament | Archbishop-Elector in Parliament | internationalorganization | boolean | good |  |
| army\_artillery\_build\_cost\_modifier | Artillery Build Cost | country, *army* | multiplicative | percent, bad |  |
| army\_artillery\_maintenance\_cost\_modifier | Artillery Maintenance Cost | country, *army* | multiplicative | percent, bad |  |
| army\_artillery\_power | Artillery Power | unit, *army* |  | percent, good |  |
| army\_artillery\_reinforce\_cost\_modifier | Artillery Reinforcement Cost | country, *army* | multiplicative | percent, bad |  |
| army\_auxiliary\_build\_cost\_modifier | Auxiliary Build Cost | country, *army* | multiplicative | percent, bad |  |
| army\_auxiliary\_maintenance\_cost\_modifier | Auxiliary Maintenance Cost | country, *army* | multiplicative | percent, bad |  |
| army\_auxiliary\_power | Auxiliary Power | unit, *army* |  | percent, good |  |
| army\_auxiliary\_reinforce\_cost\_modifier | Auxiliary Reinforcement Cost | country, *army* | multiplicative | percent, bad |  |
| army\_disembark\_speed | Army Disembark Speed | unit, *army* |  | percent, good |  |
| army\_food\_gathering | Army Food Gathering | unit, *army* |  | good |  |
| army\_food\_gathering\_modifier | Army Food Gathering Modifier | unit, *army* | multiplicative | percent, good |  |
| army\_heavy\_cavalry\_build\_cost\_modifier | Heavy Cavalry Build Cost | country, *army* | multiplicative | percent, bad |  |
| army\_heavy\_cavalry\_maintenance\_cost\_modifier | Heavy Cavalry Maintenance Cost | country, *army* | multiplicative | percent, bad |  |
| army\_heavy\_cavalry\_power | Heavy Cavalry Power | unit, *army* |  | percent, good |  |
| army\_heavy\_cavalry\_reinforce\_cost\_modifier | Heavy Cavalry Reinforcement Cost | country, *army* | multiplicative | percent, bad |  |
| army\_heavy\_infantry\_build\_cost\_modifier | Heavy Infantry Build Cost | country, *army* | multiplicative | percent, bad |  |
| army\_heavy\_infantry\_maintenance\_cost\_modifier | Heavy Infantry Maintenance Cost | country, *army* | multiplicative | percent, bad |  |
| army\_heavy\_infantry\_power | Heavy Infantry Power | unit, *army* |  | percent, good |  |
| army\_heavy\_infantry\_reinforce\_cost\_modifier | Heavy Infantry Reinforcement Cost | country, *army* | multiplicative | percent, bad |  |
| army\_initiative | Army Initiative | unit, *army* |  | percent, good |  |
| army\_light\_cavalry\_build\_cost\_modifier | Light Cavalry Build Cost | country, *army* | multiplicative | percent, bad |  |
| army\_light\_cavalry\_maintenance\_cost\_modifier | Light Cavalry Maintenance Cost | country, *army* | multiplicative | percent, bad |  |
| army\_light\_cavalry\_power | Light Cavalry Power | unit, *army* |  | percent, good |  |
| army\_light\_cavalry\_reinforce\_cost\_modifier | Light Cavalry Reinforcement Cost | country, *army* | multiplicative | percent, bad |  |
| army\_light\_infantry\_build\_cost\_modifier | Light Infantry Build Cost | country, *army* | multiplicative | percent, bad |  |
| army\_light\_infantry\_maintenance\_cost\_modifier | Light Infantry Maintenance Cost | country, *army* | multiplicative | percent, bad |  |
| army\_light\_infantry\_power | Light Infantry Power | unit, *army* |  | percent, good |  |
| army\_light\_infantry\_reinforce\_cost\_modifier | Light Infantry Reinforcement Cost | country, *army* | multiplicative | percent, bad |  |
| army\_logistics\_distance | Logistics Distance | unit, *army* |  | good |  |
| army\_logistics\_distance\_modifier | Logistics Distance | unit, *army* | multiplicative | percent, good |  |
| army\_losses\_in\_war\_cost\_modifier | Cost of Army Losses in Battle | country, *army* | multiplicative | percent, bad |  |
| army\_maintenance\_efficiency | Army Maintenance Efficiency | unit, *army* |  | percent, good |  |
| army\_movement\_speed | Army Movement Speed | unit, *army* |  | percent, good |  |
| army\_reinforce\_efficiency | Army Reinforcement Efficiency | unit, *army* |  | percent, good |  |
| army\_tradition\_decay | Army Tradition Decay | country, *army* |  | percent, bad |  |
| army\_tradition\_from\_battle | Army Tradition from Battles | country, *army* |  | percent, good |  |
| army\_weight\_modifier | Army Weight | unit, *army* | multiplicative | percent, bad |  |
| art\_creation\_speed | Creation Speed of Art | character |  | percent, good |  |
| artillery\_bonus\_vs\_fort | Artillery Bonus vs Fort | country |  | good |  |
| artist\_impact | Direct Impact of Art | character |  | percent, good |  |
| artist\_monthly\_start\_chance | Artist Monthly Start Chance | character |  | percent, good |  |
| artist\_salary\_modifier | Artist Salary | country | multiplicative | percent, bad |  |
| artist\_salary\_modifier\_on\_character | Salary as Artist | character |  | percent, bad |  |
| artist\_skill\_level\_gain | Artist Skill Development | character |  | raw percent, good |  |
| assault\_ability | Assault Ability | unit |  | percent, good |  |
| assign\_despot\_price\_cost\_modifier | Assign as Despótēs Price Cost Modifier | country | multiplicative | percent, bad |  |
| atoll\_proximity\_impact | Atoll Proximity Impact | country |  | percent, bad |  |
| audit\_bureau\_bureaucracy\_impact\_modifier | Audit Bureau Impact | country | multiplicative | percent, good |  |
| auto\_conquer\_at\_war | Auto Conquer when at War | country | boolean | good |  |
| auto\_conquer\_different\_religion\_at\_war | Auto Conquer Religious Enemies | country | boolean | good |  |
| auto\_slave\_raid | Raid Enemies for Slaves | country | boolean | good |  |
| auto\_slave\_raid\_different\_religion | Raid Religious Enemies for Slaves | country | boolean | good |  |
| available\_organization\_parliament\_agendas | Available Organization Parliament Agendas | internationalorganization |  | good |  |
| ban\_conversion\_of\_adipatis\_price\_cost\_modifier | Ban Conversion of Adipatis Cost | country | multiplicative | percent, bad |  |
| ban\_exports\_of\_alum | Ban Exports of Alum | country | boolean | good |  |
| ban\_exports\_of\_amber | Ban Exports of Amber | country | boolean | good |  |
| ban\_exports\_of\_beer | Ban Exports of Beer | country | boolean | good |  |
| ban\_exports\_of\_beeswax | Ban Exports of Beeswax | country | boolean | good |  |
| ban\_exports\_of\_books | Ban Exports of Books | country | boolean | good |  |
| ban\_exports\_of\_cannons | Ban Exports of Cannon | country | boolean | good |  |
| ban\_exports\_of\_chili | Ban Exports of Chili | country | boolean | good |  |
| ban\_exports\_of\_clay | Ban Exports of Clay | country | boolean | good |  |
| ban\_exports\_of\_cloth | Ban Exports of Cloth | country | boolean | good |  |
| ban\_exports\_of\_cloves | Ban Exports of Cloves | country | boolean | good |  |
| ban\_exports\_of\_coal | Ban Exports of Coal | country | boolean | good |  |
| ban\_exports\_of\_cocoa | Ban Exports of Cocoa | country | boolean | good |  |
| ban\_exports\_of\_coffee | Ban Exports of Coffee | country | boolean | good |  |
| ban\_exports\_of\_copper | Ban Exports of Copper | country | boolean | good |  |
| ban\_exports\_of\_cotton | Ban Exports of Cotton | country | boolean | good |  |
| ban\_exports\_of\_dyes | Ban Exports of Dyes | country | boolean | good |  |
| ban\_exports\_of\_elephants | Ban Exports of Elephants | country | boolean | good |  |
| ban\_exports\_of\_fiber\_crops | Ban Exports of Fiber Crops | country | boolean | good |  |
| ban\_exports\_of\_fine\_cloth | Ban Exports of Fine Cloth | country | boolean | good |  |
| ban\_exports\_of\_firearms | Ban Exports of Firearms | country | boolean | good |  |
| ban\_exports\_of\_fish | Ban Exports of Fish | country | boolean | good |  |
| ban\_exports\_of\_fruit | Ban Exports of Fruit | country | boolean | good |  |
| ban\_exports\_of\_fur | Ban Exports of Fur | country | boolean | good |  |
| ban\_exports\_of\_furniture | Ban Exports of Furniture | country | boolean | good |  |
| ban\_exports\_of\_gems | Ban Exports of Gems | country | boolean | good |  |
| ban\_exports\_of\_glass | Ban Exports of Glass | country | boolean | good |  |
| ban\_exports\_of\_goods\_gold | Ban Exports of Gold | country | boolean | good |  |
| ban\_exports\_of\_horses | Ban Exports of Horses | country | boolean | good |  |
| ban\_exports\_of\_incense | Ban Exports of Incense | country | boolean | good |  |
| ban\_exports\_of\_iron | Ban Exports of Iron | country | boolean | good |  |
| ban\_exports\_of\_ivory | Ban Exports of Ivory | country | boolean | good |  |
| ban\_exports\_of\_jewelry | Ban Exports of Jewelry | country | boolean | good |  |
| ban\_exports\_of\_lacquerware | Ban Exports of Lacquerware | country | boolean | good |  |
| ban\_exports\_of\_lead | Ban Exports of Lead | country | boolean | good |  |
| ban\_exports\_of\_leather | Ban Exports of Leather | country | boolean | good |  |
| ban\_exports\_of\_legumes | Ban Exports of Legumes | country | boolean | good |  |
| ban\_exports\_of\_liquor | Ban Exports of Liquor | country | boolean | good |  |
| ban\_exports\_of\_livestock | Ban Exports of Livestock | country | boolean | good |  |
| ban\_exports\_of\_lumber | Ban Exports of Lumber | country | boolean | good |  |
| ban\_exports\_of\_maize | Ban Exports of Maize | country | boolean | good |  |
| ban\_exports\_of\_marble | Ban Exports of Marble | country | boolean | good |  |
| ban\_exports\_of\_masonry | Ban Exports of Masonry | country | boolean | good |  |
| ban\_exports\_of\_medicaments | Ban Exports of Medicaments | country | boolean | good |  |
| ban\_exports\_of\_mercury | Ban Exports of Mercury | country | boolean | good |  |
| ban\_exports\_of\_millet | Ban Exports of Sturdy Grains | country | boolean | good |  |
| ban\_exports\_of\_naval\_supplies | Ban Exports of Naval Supplies | country | boolean | good |  |
| ban\_exports\_of\_olives | Ban Exports of Olives | country | boolean | good |  |
| ban\_exports\_of\_paper | Ban Exports of Paper | country | boolean | good |  |
| ban\_exports\_of\_pearls | Ban Exports of Pearls | country | boolean | good |  |
| ban\_exports\_of\_pepper | Ban Exports of Pepper | country | boolean | good |  |
| ban\_exports\_of\_porcelain | Ban Exports of Porcelain | country | boolean | good |  |
| ban\_exports\_of\_potato | Ban Exports of Potatoes | country | boolean | good |  |
| ban\_exports\_of\_pottery | Ban Exports of Pottery | country | boolean | good |  |
| ban\_exports\_of\_rice | Ban Exports of Rice | country | boolean | good |  |
| ban\_exports\_of\_saffron | Ban Exports of Saffron | country | boolean | good |  |
| ban\_exports\_of\_salt | Ban Exports of Salt | country | boolean | good |  |
| ban\_exports\_of\_saltpeter | Ban Exports of Saltpeter | country | boolean | good |  |
| ban\_exports\_of\_sand | Ban Exports of Sand | country | boolean | good |  |
| ban\_exports\_of\_silk | Ban Exports of Silk | country | boolean | good |  |
| ban\_exports\_of\_silver | Ban Exports of Silver | country | boolean | good |  |
| ban\_exports\_of\_slaves\_goods | Ban Exports of Slaves | country | boolean | good |  |
| ban\_exports\_of\_steel | Ban Exports of Steel | country | boolean | good |  |
| ban\_exports\_of\_stone | Ban Exports of Stone | country | boolean | good |  |
| ban\_exports\_of\_sugar | Ban Exports of Sugar | country | boolean | good |  |
| ban\_exports\_of\_tar | Ban Exports of Tar | country | boolean | good |  |
| ban\_exports\_of\_tea | Ban Exports of Tea | country | boolean | good |  |
| ban\_exports\_of\_tin | Ban Exports of Tin | country | boolean | good |  |
| ban\_exports\_of\_tobacco | Ban Exports of Tobacco | country | boolean | good |  |
| ban\_exports\_of\_tools | Ban Exports of Tools | country | boolean | good |  |
| ban\_exports\_of\_weaponry | Ban Exports of Weaponry | country | boolean | good |  |
| ban\_exports\_of\_wheat | Ban Exports of Wheat | country | boolean | good |  |
| ban\_exports\_of\_wild\_game | Ban Exports of Wild Game | country | boolean | good |  |
| ban\_exports\_of\_wine | Ban Exports of Wine | country | boolean | good |  |
| ban\_exports\_of\_wool | Ban Exports of Wool | country | boolean | good |  |
| ban\_imports\_of\_alum | Ban Imports of Alum | country | boolean | good |  |
| ban\_imports\_of\_amber | Ban Imports of Amber | country | boolean | good |  |
| ban\_imports\_of\_beer | Ban Imports of Beer | country | boolean | good |  |
| ban\_imports\_of\_beeswax | Ban Imports of Beeswax | country | boolean | good |  |
| ban\_imports\_of\_books | Ban Imports of Books | country | boolean | good |  |
| ban\_imports\_of\_cannons | Ban Imports of Cannon | country | boolean | good |  |
| ban\_imports\_of\_chili | Ban Imports of Chili | country | boolean | good |  |
| ban\_imports\_of\_clay | Ban Imports of Clay | country | boolean | good |  |
| ban\_imports\_of\_cloth | Ban Imports of Cloth | country | boolean | good |  |
| ban\_imports\_of\_cloves | Ban Imports of Cloves | country | boolean | good |  |
| ban\_imports\_of\_coal | Ban Imports of Coal | country | boolean | good |  |
| ban\_imports\_of\_cocoa | Ban Imports of Cocoa | country | boolean | good |  |
| ban\_imports\_of\_coffee | Ban Imports of Coffee | country | boolean | good |  |
| ban\_imports\_of\_copper | Ban Imports of Copper | country | boolean | good |  |
| ban\_imports\_of\_cotton | Ban Imports of Cotton | country | boolean | good |  |
| ban\_imports\_of\_dyes | Ban Imports of Dyes | country | boolean | good |  |
| ban\_imports\_of\_elephants | Ban Imports of Elephants | country | boolean | good |  |
| ban\_imports\_of\_fiber\_crops | Ban Imports of Fiber Crops | country | boolean | good |  |
| ban\_imports\_of\_fine\_cloth | Ban Imports of Fine Cloth | country | boolean | good |  |
| ban\_imports\_of\_firearms | Ban Imports of Firearms | country | boolean | good |  |
| ban\_imports\_of\_fish | Ban Imports of Fish | country | boolean | good |  |
| ban\_imports\_of\_fruit | Ban Imports of Fruit | country | boolean | good |  |
| ban\_imports\_of\_fur | Ban Imports of Fur | country | boolean | good |  |
| ban\_imports\_of\_furniture | Ban Imports of Furniture | country | boolean | good |  |
| ban\_imports\_of\_gems | Ban Imports of Gems | country | boolean | good |  |
| ban\_imports\_of\_glass | Ban Imports of Glass | country | boolean | good |  |
| ban\_imports\_of\_goods\_gold | Ban Imports of Gold | country | boolean | good |  |
| ban\_imports\_of\_horses | Ban Imports of Horses | country | boolean | good |  |
| ban\_imports\_of\_incense | Ban Imports of Incense | country | boolean | good |  |
| ban\_imports\_of\_iron | Ban Imports of Iron | country | boolean | good |  |
| ban\_imports\_of\_ivory | Ban Imports of Ivory | country | boolean | good |  |
| ban\_imports\_of\_jewelry | Ban Imports of Jewelry | country | boolean | good |  |
| ban\_imports\_of\_lacquerware | Ban Imports of Lacquerware | country | boolean | good |  |
| ban\_imports\_of\_lead | Ban Imports of Lead | country | boolean | good |  |
| ban\_imports\_of\_leather | Ban Imports of Leather | country | boolean | good |  |
| ban\_imports\_of\_legumes | Ban Imports of Legumes | country | boolean | good |  |
| ban\_imports\_of\_liquor | Ban Imports of Liquor | country | boolean | good |  |
| ban\_imports\_of\_livestock | Ban Imports of Livestock | country | boolean | good |  |
| ban\_imports\_of\_lumber | Ban Imports of Lumber | country | boolean | good |  |
| ban\_imports\_of\_maize | Ban Imports of Maize | country | boolean | good |  |
| ban\_imports\_of\_marble | Ban Imports of Marble | country | boolean | good |  |
| ban\_imports\_of\_masonry | Ban Imports of Masonry | country | boolean | good |  |
| ban\_imports\_of\_medicaments | Ban Imports of Medicaments | country | boolean | good |  |
| ban\_imports\_of\_mercury | Ban Imports of Mercury | country | boolean | good |  |
| ban\_imports\_of\_millet | Ban Imports of Sturdy Grains | country | boolean | good |  |
| ban\_imports\_of\_naval\_supplies | Ban Imports of Naval Supplies | country | boolean | good |  |
| ban\_imports\_of\_olives | Ban Imports of Olives | country | boolean | good |  |
| ban\_imports\_of\_paper | Ban Imports of Paper | country | boolean | good |  |
| ban\_imports\_of\_pearls | Ban Imports of Pearls | country | boolean | good |  |
| ban\_imports\_of\_pepper | Ban Imports of Pepper | country | boolean | good |  |
| ban\_imports\_of\_porcelain | Ban Imports of Porcelain | country | boolean | good |  |
| ban\_imports\_of\_potato | Ban Imports of Potatoes | country | boolean | good |  |
| ban\_imports\_of\_pottery | Ban Imports of Pottery | country | boolean | good |  |
| ban\_imports\_of\_rice | Ban Imports of Rice | country | boolean | good |  |
| ban\_imports\_of\_saffron | Ban Imports of Saffron | country | boolean | good |  |
| ban\_imports\_of\_salt | Ban Imports of Salt | country | boolean | good |  |
| ban\_imports\_of\_saltpeter | Ban Imports of Saltpeter | country | boolean | good |  |
| ban\_imports\_of\_sand | Ban Imports of Sand | country | boolean | good |  |
| ban\_imports\_of\_silk | Ban Imports of Silk | country | boolean | good |  |
| ban\_imports\_of\_silver | Ban Imports of Silver | country | boolean | good |  |
| ban\_imports\_of\_slaves\_goods | Ban Imports of Slaves | country | boolean | good |  |
| ban\_imports\_of\_steel | Ban Imports of Steel | country | boolean | good |  |
| ban\_imports\_of\_stone | Ban Imports of Stone | country | boolean | good |  |
| ban\_imports\_of\_sugar | Ban Imports of Sugar | country | boolean | good |  |
| ban\_imports\_of\_tar | Ban Imports of Tar | country | boolean | good |  |
| ban\_imports\_of\_tea | Ban Imports of Tea | country | boolean | good |  |
| ban\_imports\_of\_tin | Ban Imports of Tin | country | boolean | good |  |
| ban\_imports\_of\_tobacco | Ban Imports of Tobacco | country | boolean | good |  |
| ban\_imports\_of\_tools | Ban Imports of Tools | country | boolean | good |  |
| ban\_imports\_of\_weaponry | Ban Imports of Weaponry | country | boolean | good |  |
| ban\_imports\_of\_wheat | Ban Imports of Wheat | country | boolean | good |  |
| ban\_imports\_of\_wild\_game | Ban Imports of Wild Game | country | boolean | good |  |
| ban\_imports\_of\_wine | Ban Imports of Wine | country | boolean | good |  |
| ban\_imports\_of\_wool | Ban Imports of Wool | country | boolean | good |  |
| bank\_interest | Bank Interest | country |  | percent, bad |  |
| baptize\_ruler\_from\_kirishitan\_cost\_modifier | Cost of Baptize Ruler Action | country | multiplicative | percent, bad |  |
| base\_burghers\_estate\_power\_modifier | Base Burghers Power | country, *estate* | multiplicative | percent, bad |  |
| base\_clergy\_estate\_power\_modifier | Base Clergy Power | country, *estate* | multiplicative | percent, bad |  |
| base\_cossacks\_estate\_power\_modifier | Cossacks Base Power | country, *estate* | multiplicative | percent, bad |  |
| base\_crown\_estate\_power\_modifier | Base Crown Power | country, *estate* | multiplicative | percent, good |  |
| base\_dhimmi\_estate\_power\_modifier | Base Ḏimmī Power | country, *estate* | multiplicative | percent, bad |  |
| base\_nobles\_estate\_power\_modifier | Base Nobles Power | country, *estate* | multiplicative | percent, bad |  |
| base\_peasants\_estate\_power\_modifier | Base Peasants Power | country, *estate* | multiplicative | percent, bad |  |
| base\_tribes\_estate\_power\_modifier | Tribes Base Power | country, *estate* | multiplicative | percent, bad |  |
| become\_shogun\_from\_imperial\_court\_cost\_modifier | Cost of Becoming Shogun from the Imperial Court | country | multiplicative | percent, good |  |
| beer\_impacts\_inflation | Beer Impacts Inflation | country |  | percent, good |  |
| beer\_used\_for\_minting | Beer Used for Coins | country | boolean | good |  |
| beeswax\_impacts\_inflation | Beeswax Impacts Inflation | country |  | percent, good |  |
| beeswax\_used\_for\_minting | Beeswax Used for Coins | country | boolean | good |  |
| bias\_for\_administrative\_policies | Bias for Administrative Policies | country |  | good |  |
| bias\_for\_balanced\_policies | Bias for Balanced Policies | country |  | good |  |
| bias\_for\_capitalist\_policies | Bias for Capitalist Policies | country |  | good |  |
| bias\_for\_colonialist\_policies | Bias for Colonialist Policies | country |  | good |  |
| bias\_for\_diplomat\_policies | Bias for Diplomat Policies | country |  | good |  |
| bias\_for\_isolationist\_policies | Bias for Isolationist Policies | country |  | good |  |
| bias\_for\_militarist\_policies | Bias for Militarist Policies | country |  | good |  |
| bias\_for\_patron\_of\_arts\_policies | Bias for Patron of Arts Policies | country |  | good |  |
| bias\_for\_scholar\_policies | Bias for Scholar Policies | country |  | good |  |
| bias\_for\_spiritualist\_policies | Bias for Spiritualist Policies | country |  | good |  |
| bias\_for\_tolerant\_policies | Bias for Tolerant Policies | country |  | good |  |
| bishopric\_agenda\_impact | Agenda Impact for Bishopric | internationalorganization |  | percent, good |  |
| bishopric\_can\_participate\_in\_parliament | Bishopric in Parliament | internationalorganization | boolean | good |  |
| blame\_the\_minorities\_cost\_modifier | Find the Culprits Cost | country | multiplicative | percent, bad |  |
| blind\_character\_price\_cost\_modifier | Blind Price Cost Modifier | country | multiplicative | percent, bad |  |
| block\_female\_cabinet | Block Females from Cabinet | country | boolean | bad |  |
| block\_female\_leader | Block Females from Command | country | boolean | bad |  |
| block\_forums\_of\_thought | Blocks Open Institutions | country | boolean | bad |  |
| block\_from\_change\_to\_duchy\_rank | Cannot Become a Duchy | country | boolean | bad |  |
| block\_from\_change\_to\_empire\_rank | Cannot Become an Empire | country | boolean | bad |  |
| block\_from\_change\_to\_empire\_rank\_catholic | Papal Ban on Empires | country | boolean | bad |  |
| block\_from\_change\_to\_kingdom\_rank | Cannot Become a Kingdom | country | boolean | bad |  |
| block\_from\_crown\_estate | Blocked from Crown | character | boolean | good |  |
| block\_male\_cabinet | Block Males from Cabinet | country | boolean | bad |  |
| block\_male\_leader | Block Males from Command | country | boolean | bad |  |
| block\_marrying\_lowborn | Blocked from Marriage with Lowborn | character | boolean | bad |  |
| block\_tribal\_promotion | Block Tribesmen Promotion | country | boolean | good |  |
| blockade\_efficiency | Blockade Efficiency | unit |  | percent, good |  |
| blockade\_force\_required | Blockade Force Required | location |  | good |  |
| blocked\_from\_being\_leader | Can Not Lead Armies or Navies | character | boolean | bad |  |
| blocked\_from\_being\_ruler | Blocked from Rulership | character | boolean | bad |  |
| blocked\_from\_cabinet | Blocked from Cabinet | character | boolean | bad |  |
| blocked\_from\_changing\_heir\_selection | Blocked from Changing Heir Selection | country | boolean | bad |  |
| blocked\_from\_character\_interactions | Blocked from Interactions | character | boolean | bad |  |
| blocked\_from\_conversion | Blocked from Conversion | country | boolean | bad |  |
| blocked\_from\_creating\_subjects | Blocked from Creating Subjects | country | boolean | bad |  |
| blocked\_from\_declaring\_war | Blocked from Declaring War | country | boolean | bad |  |
| blocked\_from\_forming\_countries | Blocked from Forming Countries | country | boolean | bad |  |
| blocked\_from\_marriage | Blocked from Marriage | character | boolean | bad |  |
| blocked\_from\_peace | Blocked From Peace | country | boolean | good |  |
| blocked\_from\_ruling\_the\_hre | Banned from Ruling the Empire | character | boolean | bad |  |
| blocks\_country\_formation | Blocks Country Formation | country | boolean | neutral |  |
| blocks\_privateer\_raids | Blocks Privateer Raids | location | boolean | good |  |
| blocks\_vision\_from\_land | Blocks Vision from Land | location | boolean | good |  |
| blocks\_vision\_from\_sea | Blocks Vision from Sea | location | boolean | good |  |
| board\_of\_revenue\_bureaucracy\_impact\_modifier | Board of Revenue Impact | country | multiplicative | percent, good |  |
| bond\_interest | Bond Interest | country |  | percent, bad |  |
| bond\_size\_modifier | Government Bond Size Modifier | country | multiplicative | percent, good |  |
| books\_impacts\_inflation | Books Impacts Inflation | country |  | percent, good |  |
| books\_used\_for\_minting | Books Used for Coins | country | boolean | good |  |
| bribe\_units\_cost\_modifier | Bribe Units Cost | country | multiplicative | percent, bad |  |
| bribe\_voter\_for\_policy\_cost\_modifier | Cost of Bribing Voters in International Organizations | country | multiplicative | percent, bad |  |
| build\_gravel\_road\_cost\_modifier | Build Gravel Road Cost | country | multiplicative | percent, bad |  |
| build\_hippodrome\_price\_cost\_modifier | Hippodrome Construction Cost Modifier | country | multiplicative | percent, bad |  |
| build\_modern\_road\_cost\_modifier | Build Modern Road Cost | country | multiplicative | percent, bad |  |
| build\_paved\_road\_cost\_modifier | Build Paved Road Cost | country | multiplicative | percent, bad |  |
| build\_railroad\_cost\_modifier | Build Railroad Cost | country | multiplicative | percent, bad |  |
| building\_enslavement\_power | Monthly Enslavement | location |  | good |  |
| building\_missionary\_effort | Monthly Religious Conversion | location |  | good |  |
| building\_missionary\_effort\_modifier | Monthly Religious Conversion from Buildings | country | multiplicative | percent, good |  |
| building\_missionary\_effort\_scaled | Monthly Religious Conversion % | location | scaled | percent, good |  |
| building\_owner\_maritime\_presence | Maritime Presence to Owner | location |  | good |  |
| building\_owner\_overlord\_maritime\_presence | Maritime Presence for the Overlord | location |  | good |  |
| building\_upkeep\_efficiency | Building Upkeep Efficiency | country |  | percent, good |  |
| building\_upkeep\_multiplier | Building Upkeep Multiplier | country |  | percent, bad |  |
| burghers\_estate\_agenda\_impact | Agenda Impact for Burghers | country, *estate* |  | percent, good |  |
| burghers\_estate\_allowed\_in\_cabinet | Burghers Allowed in Cabinet | country, *estate* | boolean | good |  |
| burghers\_estate\_allowed\_leading\_military | Burghers Allowed to Command | country, *estate* | boolean | good |  |
| burghers\_estate\_allowed\_to\_build\_rgo | Burghers Allowed to Expand R.G.O. | country, *estate* | boolean | good |  |
| burghers\_estate\_allowed\_to\_build\_roads | Burghers Allowed to Build Roads | country, *estate* | boolean | good |  |
| burghers\_estate\_blocked\_from\_cabinet | Burghers Blocked from Cabinet | country, *estate* | boolean | bad |  |
| burghers\_estate\_blocked\_from\_leading\_military | Burghers Blocked from Command | country, *estate* | boolean | bad |  |
| burghers\_estate\_blocked\_from\_parliament | No Burghers in Parliament | country, *estate* | boolean | good |  |
| burghers\_estate\_can\_participate\_in\_parliament | Burghers in Parliament | country, *estate* | boolean | good |  |
| burghers\_estate\_cannot\_marry | Burghers Cannot Marry | country, *estate* | boolean | bad |  |
| burghers\_estate\_levy\_size | Burghers Levy Size | country, *estate* |  | percent, good |  |
| burghers\_estate\_max\_tax | Maximum Tax for Burgher Estate | country, *estate* |  | percent, good |  |
| burghers\_estate\_min\_tax | Minimum Tax for Burgher Estate | country, *estate* |  | percent, good |  |
| burghers\_estate\_power\_from\_cabinet | Burghers Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| burghers\_estate\_satisfaction\_decay | Burgher Estate Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| burghers\_estate\_satisfaction\_recovery | Burgher Estate Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| burghers\_estate\_target\_satisfaction | Burgher Estate Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| buy\_fleet\_basing\_rights\_cost\_modifier | Buy Fleet Basing Rights Cost | country | multiplicative | percent, bad |  |
| buy\_military\_access\_cost\_modifier | Buy Military Access Cost | country | multiplicative | percent, bad |  |
| byz\_born\_in\_the\_purple | Born in the Purple | character | boolean | good |  |
| cabinet\_trait\_impact\_modifier | Cabinet Trait Impact | character | multiplicative | percent, good |  |
| call\_jihad\_cost\_modifier | Cost of Call Jihād Religious Action | country | multiplicative | percent, bad |  |
| calvinist\_preachers\_building\_cost\_modifier | Calvinist Preachers Building Cost | country | multiplicative | percent, bad |  |
| can\_assign\_governors | Can Assign Governorship | country | boolean | good |  |
| can\_assume\_fort\_command | Allow Assume Fort Command | country | boolean | good |  |
| can\_assume\_fort\_command\_character | Can Assume Fort Command | character | boolean | good |  |
| can\_banish\_characters | Can Banish Characters | country | boolean | good |  |
| can\_be\_member\_of\_a\_high\_kingship | Can Be Member of a High Kingship | country | boolean | good |  |
| can\_be\_target\_of\_anti\_piracy\_cb | Can be Target of Anti-Piracy War Casus Belli | country | boolean | bad |  |
| can\_build\_cities | Can Build Cities | country | boolean | good |  |
| can\_build\_kurmina\_headquarter | Can Build Kurmina Headquarter | country | boolean | good |  |
| can\_build\_mamluk\_barracks | Can Build Mamlūk Barracks | country | boolean | good |  |
| can\_build\_ships\_in\_this\_location | Can Build Ships Here | location | boolean | good |  |
| can\_call\_organization\_parliament | Can Call Organization Parliament | internationalorganization | boolean | good |  |
| can\_call\_rural\_parliaments | Rural Parliaments | country | boolean | good |  |
| can\_colonize | Can Colonize | country | boolean | good |  |
| can\_convert\_galleys\_to\_light | Can Convert Galley to Light Ships | country | boolean | good |  |
| can\_create\_anti\_piracy\_cb | Can Create Anti-Piracy War Casus Belli | country | boolean | good |  |
| can\_create\_red\_turban\_rebellions\_cb | Has Red Turban Rebellions Casus Belli | country | boolean | good |  |
| can\_execute\_characters | Can Execute Characters | country | boolean | good |  |
| can\_extract\_alum | Can Mine Alum | country | boolean | good |  |
| can\_extract\_amber | Can Gather Amber | country | boolean | good |  |
| can\_extract\_beer | Can Extract Beer | country | boolean | good |  |
| can\_extract\_beeswax | Can Extract Beeswax | country | boolean | good |  |
| can\_extract\_books | Can Extract Books | country | boolean | good |  |
| can\_extract\_cannons | Can Extract Cannons | country | boolean | good |  |
| can\_extract\_chili | Can Gather Chili | country | boolean | good |  |
| can\_extract\_clay | Can Extract Clay | country | boolean | good |  |
| can\_extract\_cloth | Can Extract Cloth | country | boolean | good |  |
| can\_extract\_cloves | Can Gather Cloves | country | boolean | good |  |
| can\_extract\_coal | Can Mine Coal | country | boolean | good |  |
| can\_extract\_cocoa | Can Farm Cocoa | country | boolean | good |  |
| can\_extract\_coffee | Can Farm Coffee | country | boolean | good |  |
| can\_extract\_copper | Can Mine Copper | country | boolean | good |  |
| can\_extract\_cotton | Can Farm Cotton | country | boolean | good |  |
| can\_extract\_dyes | Can Gather Dyes | country | boolean | good |  |
| can\_extract\_elephants | Can Capture Elephants | country | boolean | good |  |
| can\_extract\_fiber\_crops | Can Farm Fiber Crops | country | boolean | good |  |
| can\_extract\_fine\_cloth | Can Extract Fine Cloth | country | boolean | good |  |
| can\_extract\_firearms | Can Extract Firearms | country | boolean | good |  |
| can\_extract\_fish | Can Farm Fish | country | boolean | good |  |
| can\_extract\_fruit | Can Farm Fruit | country | boolean | good |  |
| can\_extract\_fur | Can Hunt for Fur | country | boolean | good |  |
| can\_extract\_furniture | Can Extract Furniture | country | boolean | good |  |
| can\_extract\_gems | Can Mine Gems | country | boolean | good |  |
| can\_extract\_glass | Can Extract Glass | country | boolean | good |  |
| can\_extract\_goods\_gold | Can Mine Gold | country | boolean | good |  |
| can\_extract\_horses | Can Raise Horses | country | boolean | good |  |
| can\_extract\_incense | Can Gather Incense | country | boolean | good |  |
| can\_extract\_iron | Can Mine Iron | country | boolean | good |  |
| can\_extract\_ivory | Can Hunt for Ivory | country | boolean | good |  |
| can\_extract\_jewelry | Can Extract Jewelry | country | boolean | good |  |
| can\_extract\_lacquerware | Can Extract Lacquerware | country | boolean | good |  |
| can\_extract\_lead | Can Mine Lead | country | boolean | good |  |
| can\_extract\_leather | Can Extract Leather | country | boolean | good |  |
| can\_extract\_legumes | Can Farm Legumes | country | boolean | good |  |
| can\_extract\_liquor | Can Extract Liquor | country | boolean | good |  |
| can\_extract\_livestock | Can Maintain Livestock | country | boolean | good |  |
| can\_extract\_lumber | Can Cut Lumber | country | boolean | good |  |
| can\_extract\_maize | Can Farm Maize | country | boolean | good |  |
| can\_extract\_marble | Can Mine Marble | country | boolean | good |  |
| can\_extract\_masonry | Can Extract Masonry | country | boolean | good |  |
| can\_extract\_medicaments | Can Gather Medicaments | country | boolean | good |  |
| can\_extract\_mercury | Can Mine Mercury | country | boolean | good |  |
| can\_extract\_millet | Can Extract Millet | country | boolean | good |  |
| can\_extract\_naval\_supplies | Can Extract Naval Supplies | country | boolean | good |  |
| can\_extract\_olives | Can Farm Olives | country | boolean | good |  |
| can\_extract\_paper | Can Extract Paper | country | boolean | good |  |
| can\_extract\_pearls | Can Gather Pearls | country | boolean | good |  |
| can\_extract\_pepper | Can Gather Pepper | country | boolean | good |  |
| can\_extract\_porcelain | Can Extract Porcelain | country | boolean | good |  |
| can\_extract\_potato | Can Farm Potato | country | boolean | good |  |
| can\_extract\_pottery | Can Extract Pottery | country | boolean | good |  |
| can\_extract\_rice | Can Farm Rice | country | boolean | good |  |
| can\_extract\_saffron | Can Gather Saffron | country | boolean | good |  |
| can\_extract\_salt | Can Gather Salt | country | boolean | good |  |
| can\_extract\_saltpeter | Can Mine Saltpeter | country | boolean | good |  |
| can\_extract\_sand | Can Gather Sand | country | boolean | good |  |
| can\_extract\_silk | Can Farm Silk | country | boolean | good |  |
| can\_extract\_silver | Can Mine Silver | country | boolean | good |  |
| can\_extract\_slaves\_goods | Can Capture Slaves | country | boolean | good |  |
| can\_extract\_steel | Can Extract Steel | country | boolean | good |  |
| can\_extract\_stone | Can Mine Stone | country | boolean | good |  |
| can\_extract\_sugar | Can Farm Sugar | country | boolean | good |  |
| can\_extract\_tar | Can Extract Tar | country | boolean | good |  |
| can\_extract\_tea | Can Gather Tea | country | boolean | good |  |
| can\_extract\_tin | Can Mine Tin | country | boolean | good |  |
| can\_extract\_tobacco | Can Farm Tobacco | country | boolean | good |  |
| can\_extract\_tools | Can Extract Tools | country | boolean | good |  |
| can\_extract\_weaponry | Can Extract Weaponry | country | boolean | good |  |
| can\_extract\_wheat | Can Farm Wheat | country | boolean | good |  |
| can\_extract\_wild\_game | Can Hunt for Wild Game | country | boolean | good |  |
| can\_extract\_wine | Can Farm Wine | country | boolean | good |  |
| can\_extract\_wool | Can Farm Wool | country | boolean | good |  |
| can\_grant\_town\_rights | Can Grant Urban Rights | country | boolean | good |  |
| can\_have\_monasteries | Monasteries Allowed | country | boolean | good |  |
| can\_hire\_privateers | Can Hire Privateers | country | boolean | good |  |
| can\_host\_olympiads | Can Host Olympiads | country | boolean | good |  |
| can\_ignore\_papal\_bulls | Can Ignore Papal Bulls | country | boolean | good |  |
| can\_invite\_settlers | Can Invite Settlers | country | boolean | good |  |
| can\_marry\_only\_overlord\_dynasty\_characters | Can Only Marry Overlord Dynasty Members | country | boolean | bad |  |
| can\_promote\_mamluks | Can Promote Mamālīk | country | boolean | good |  |
| can\_reassign\_cleric | Can Reassign Cleric | country | boolean | good |  |
| can\_recruit\_explorer | Can Recruit Explorers | country | boolean | good |  |
| can\_recruit\_regiment\_in\_this\_location | Can Recruit Regiments Here | location | boolean | good |  |
| can\_revoke\_electorship | Can Revoke Electorship | country | boolean | good |  |
| can\_sell\_bonds | Can Issue Government Bonds | country | boolean | good |  |
| can\_send\_royal\_inspectors | Can Send Secret Royal Inspectors | country | boolean | good |  |
| can\_use\_aclla\_distribution | Can use Aclla Marriage | country | boolean | good |  |
| can\_use\_council\_of\_three\_lands\_modifier | Allows Council of Three Lands | country | boolean | good |  |
| can\_use\_nustas\_marriages | Can use Ñusta Marriage | country | boolean | good |  |
| cannons\_impacts\_inflation | Cannons Impacts Inflation | country |  | percent, good |  |
| cannons\_used\_for\_minting | Cannons Used for Coins | country | boolean | good |  |
| cannot\_be\_removed\_from\_from\_cabinet | Cannot be Removed from Cabinet | character | boolean | neutral |  |
| cannot\_be\_subjugated | Cannot be Subjugated | country | boolean | good |  |
| cannot\_declare\_no\_cb\_wars | Cannot Declare Wars without Casus Belli | country | boolean | bad |  |
| cannot\_declare\_no\_cb\_wars\_on\_members | Forbidden Unjustified Wars Against Other Members | internationalorganization | boolean | neutral |  |
| cannot\_declare\_no\_cb\_wars\_on\_religion\_head | Cannot Declare Wars on Religious Head without Casus Belli | country | boolean | bad |  |
| cannot\_move\_capital | Cannot Move Capital | country | boolean | neutral |  |
| cannot\_upgrade\_location | Cannot Upgrade Location | location | boolean | bad |  |
| canonize\_cost\_modifier | Canonize Cost | country | multiplicative | percent, bad |  |
| cap\_maximum\_population\_growth\_at\_zero | No Possible Population Growth | location | boolean | bad |  |
| capital\_movement\_cost\_modifier | Move Capital Cost | country | multiplicative | percent, bad |  |
| capital\_possible\_town\_rights | Possible Urban Rights in Capital | country |  | good |  |
| cardinal\_price\_cost\_modifier | Cardinal Price | country | multiplicative | percent, bad |  |
| care\_about\_producing\_heirs | Royal Marriages | country | boolean | good |  |
| carefulness\_modifier | Carefulness | country | multiplicative | percent, good |  |
| castrate\_character\_price\_cost\_modifier | Castrate Price Cost Modifier | country | multiplicative | percent, bad |  |
| casus\_belli\_creation\_speed | Casus Belli Creation Speed | country |  | raw percent, good |  |
| casus\_belli\_creation\_speed\_modifier | Casus Belli Creation Speed | country | multiplicative | percent, good |  |
| catholic\_country\_interaction\_cost\_modifier | Catholic Diplomatic Interaction Cost Modifier | country | multiplicative | percent, bad |  |
| celestial\_governor\_agenda\_impact | Agenda Impact for Celestial Governor | internationalorganization |  | percent, good |  |
| celestial\_governor\_can\_participate\_in\_parliament | Celestial Governor in Parliament | internationalorganization | boolean | good |  |
| central\_secretariat\_bureaucracy\_impact\_modifier | Central Secretariat Impact | country | multiplicative | percent, good |  |
| challenge\_league\_leadership\_price\_cost\_modifier | Challenge for League Leadership Cost | country | multiplicative | percent, bad |  |
| chancery\_cap\_level | Chancery Max Level | country |  | good |  |
| change\_court\_language\_cost\_modifier | Change Court Language Cost | country | multiplicative | percent, bad |  |
| change\_curia\_vote\_cost\_modifier | Change Curia Vote Cost | country | multiplicative | percent, bad |  |
| change\_employment\_system\_cost\_modifier | Choose Employment System Cost | country | multiplicative | percent, bad |  |
| change\_government\_type\_price\_cost\_modifier | Change Government Type Price Modifier | country | multiplicative | percent, bad |  |
| change\_heir\_selection\_cost\_modifier | Change Heir Selection Cost | country | multiplicative | percent, bad |  |
| change\_liturgical\_language\_cost\_modifier | Change Liturgical Language Cost | country | multiplicative | percent, bad |  |
| change\_main\_school\_cost\_modifier | Cost of Change Main School Religious Action | country | multiplicative | percent, bad |  |
| change\_organization\_parliament\_type\_cost\_modifier | Cost of Changing Organization Parliament Type | country | multiplicative | percent, bad |  |
| change\_parliament\_type\_cost\_modifier | Cost of Changing Parliament Type | country | multiplicative | percent, bad |  |
| change\_policy\_cost\_modifier | Change Policy Cost | country | multiplicative | percent, bad |  |
| change\_primary\_culture\_cost\_modifier | Change Primary Culture Cost | country | multiplicative | percent, bad |  |
| change\_religious\_aspect\_hellenism\_cost\_modifier | Cost of Changing Religious Aspect | country | multiplicative | percent, bad |  |
| change\_religious\_aspect\_inti\_cost\_modifier | Cost of Choosing Worshipping a God | country | multiplicative | percent, bad |  |
| character\_adm\_child\_education | Administrative Ability Increase During Education | character |  | good |  |
| character\_blocked\_from\_high\_kingship | Blocked from High Kingship | character | boolean | bad |  |
| character\_cabinet\_efficiency | Efficiency in Cabinet | character |  | percent, good |  |
| character\_child\_education | Ability Increase During Education | character |  | good |  |
| character\_dip\_child\_education | Diplomatic Ability Increase During Education | character |  | good |  |
| character\_fertility | Fertility | character |  | raw percent, good |  |
| character\_life\_expectancy | Character Life Expectancy | character |  | good |  |
| character\_mil\_child\_education | Military Ability Increase During Education | character |  | good |  |
| character\_on\_task\_modifier | On a Task | country | boolean | neutral |  |
| character\_overthrew\_high\_king | High Kingship Leader Vote Weight | character | boolean | good |  |
| chili\_impacts\_inflation | Chili Impacts Inflation | country |  | percent, good |  |
| chili\_used\_for\_minting | Chili Used for Coins | country | boolean | good |  |
| christian\_tenet\_price\_cost\_modifier | Christian Tenet Cost | country | multiplicative | percent, bad |  |
| city\_upgrade\_cost\_modifier | City Rights Cost | country | multiplicative | percent, bad |  |
| claim\_shugo\_office\_cost\_modifier | Claim Shugo Office Cost | country | multiplicative | percent, bad |  |
| clay\_impacts\_inflation | Clay Impacts Inflation | country |  | percent, good |  |
| clay\_used\_for\_minting | Clay Used for Coins | country | boolean | good |  |
| cleansing\_ritual\_purity\_cost\_modifier | Cost of Cleansing Ritual Religious Action | country | multiplicative | percent, bad |  |
| cleansing\_ritual\_yanantin\_cost\_modifier | Cost of Celebrate a Ritual Religious Action | country | multiplicative | percent, bad |  |
| clergy\_estate\_agenda\_impact | Agenda Impact for Clergy | country, *estate* |  | percent, good |  |
| clergy\_estate\_allowed\_in\_cabinet | Clergy Allowed in Cabinet | country, *estate* | boolean | good |  |
| clergy\_estate\_allowed\_leading\_military | Clergy Allowed to Command | country, *estate* | boolean | good |  |
| clergy\_estate\_allowed\_to\_build\_rgo | Clergy Allowed to Expand R.G.O. | country, *estate* | boolean | good |  |
| clergy\_estate\_allowed\_to\_build\_roads | Clergy Allowed to Build Roads | country, *estate* | boolean | good |  |
| clergy\_estate\_blocked\_from\_cabinet | Clergy Blocked from Cabinet | country, *estate* | boolean | bad |  |
| clergy\_estate\_blocked\_from\_leading\_military | Clergy Blocked from Command | country, *estate* | boolean | bad |  |
| clergy\_estate\_blocked\_from\_parliament | No Clergy in Parliament | country, *estate* | boolean | good |  |
| clergy\_estate\_can\_participate\_in\_parliament | Clergy in Parliament | country, *estate* | boolean | good |  |
| clergy\_estate\_cannot\_marry | Clergy Cannot Marry | country, *estate* | boolean | bad |  |
| clergy\_estate\_levy\_size | Clergy Levy Size | country, *estate* |  | percent, good |  |
| clergy\_estate\_max\_tax | Maximum Tax for Clergy Estate | country, *estate* |  | percent, good |  |
| clergy\_estate\_min\_tax | Minimum Tax for Clergy Estate | country, *estate* |  | percent, good |  |
| clergy\_estate\_power\_from\_cabinet | Clergy Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| clergy\_estate\_satisfaction\_decay | Clergy Estate Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| clergy\_estate\_satisfaction\_recovery | Clergy Estate Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| clergy\_estate\_target\_satisfaction | Clergy Estate Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| close\_the\_borders\_cost\_modifier | Isolate the Country Cost | country | multiplicative | percent, bad |  |
| cloth\_impacts\_inflation | Cloth Impacts Inflation | country |  | percent, good |  |
| cloth\_used\_for\_minting | Cloth Used for Coins | country | boolean | good |  |
| cloves\_impacts\_inflation | Cloves Impacts Inflation | country |  | percent, good |  |
| cloves\_used\_for\_minting | Cloves Used for Coins | country | boolean | good |  |
| coal\_impacts\_inflation | Coal Impacts Inflation | country |  | percent, good |  |
| coal\_used\_for\_minting | Coal Used for Coins | country | boolean | good |  |
| coalition\_strength\_tolerance | Coalition Strength Tolerance | country |  | good |  |
| coastal\_ocean\_proximity\_impact | Coastal ocean Proximity Impact | country |  | percent, bad |  |
| cocoa\_impacts\_inflation | Cocoa Impacts Inflation | country |  | percent, good |  |
| cocoa\_used\_for\_minting | Cocoa Used for Coins | country | boolean | good |  |
| coffee\_impacts\_inflation | Coffee Impacts Inflation | country |  | percent, good |  |
| coffee\_used\_for\_minting | Coffee Used for Coins | country | boolean | good |  |
| colonial\_maintenance\_efficiency | Colonial Maintenance Efficiency | country |  | percent, good |  |
| colonial\_migration\_size | Monthly Colonial Migration | country |  | good |  |
| colonial\_migration\_size\_modifier | Monthly Colonial Migration | country | multiplicative | percent, good |  |
| colonial\_office\_bureaucracy\_impact\_modifier | Colonial Office Impact | country | multiplicative | percent, good |  |
| colonial\_range | Colonial Range | country |  | good |  |
| colonial\_range\_modifier | Colonial Range | country | multiplicative | percent, good |  |
| combat\_speed\_modifier | Combat Speed | unit | multiplicative | percent, good |  |
| combined\_arms\_max\_threshold | Combined Arms Threshold | unit |  | percent, good |  |
| combined\_arms\_min\_percent\_for\_bonus | Combined Arms Requirement | unit |  | percent, bad |  |
| combined\_bonus\_per\_type | Combined Arms Bonus | unit |  | percent, good |  |
| commander\_combat\_bonus | Commander Combat Bonus | unit |  | good |  |
| commissariat\_bureaucracy\_impact\_modifier | Commissariat Impact | country | multiplicative | percent, good |  |
| commission\_art\_price\_cost\_modifier | Commission Art Cost Modifier | country | multiplicative | percent, bad |  |
| commission\_religious\_images\_cost\_modifier | Commission Religious Images Cost | country | multiplicative | bad |  |
| complacent\_decline\_actions\_price\_cost\_modifier | Complacent Decline Actions Cost | country | multiplicative | percent, good |  |
| compose\_strategikon\_price\_cost\_modifier | Compose Stratēgikòn Price Cost Modifier | country | multiplicative | percent, bad |  |
| conduct\_keju\_examination\_cost\_modifier | Conduct Kējǔ Examination Cost | country | multiplicative | percent, bad |  |
| construction\_center\_max\_level | Construction Center Max Level | country | additive | good |  |
| constructions\_stalled | Constructions Stalled | location | boolean | good |  |
| contact\_patriarch\_of\_constantinople\_cost\_modifier | Contact Patriarch of Constantinople Cost Modifier | country | multiplicative | percent, bad |  |
| control\_importance\_modifier | Control Importance Modifier | country | multiplicative | good |  |
| control\_the\_bhres\_price\_cost\_modifier | Control the Bhres Cost | country | multiplicative | percent, bad |  |
| control\_the\_food\_market\_cost\_modifier | Control the Food Market Cost | country | multiplicative | percent, bad |  |
| convert\_religion\_cost\_modifier | Convert Religion Cost | country | multiplicative | percent, bad |  |
| copper\_impacts\_inflation | Copper Impacts Inflation | country |  | percent, good |  |
| copper\_used\_for\_minting | Copper Used for Coins | country | boolean | good |  |
| correct\_box\_chance | Correct Section Chance | unit |  | percent, good |  |
| corrupt\_officials\_monthly\_cost\_cost\_modifier | Corrupt Officials Monthly Cost Modifier | country | multiplicative | percent, bad |  |
| cossacks\_estate\_agenda\_impact | Agenda Impact for Cossacks | country, *estate* |  | percent, good |  |
| cossacks\_estate\_allowed\_in\_cabinet | Cossacks Allowed in Cabinet | country, *estate* | boolean | good |  |
| cossacks\_estate\_allowed\_leading\_military | Cossacks Allowed to Command | country, *estate* | boolean | neutral |  |
| cossacks\_estate\_allowed\_to\_build\_rgo | Cossacks Allowed to Expand R.G.O. | country, *estate* | boolean | good |  |
| cossacks\_estate\_allowed\_to\_build\_roads | Cossacks Allowed to Build Roads | country, *estate* | boolean | good |  |
| cossacks\_estate\_blocked\_from\_cabinet | Cossacks Blocked from Cabinet | country, *estate* | boolean | bad |  |
| cossacks\_estate\_blocked\_from\_leading\_military | Cossacks Blocked from Command | country, *estate* | boolean | bad |  |
| cossacks\_estate\_blocked\_from\_parliament | No Cossacks in Parliament | country, *estate* | boolean | good |  |
| cossacks\_estate\_can\_participate\_in\_parliament | Cossacks in Parliament | country, *estate* | boolean | good |  |
| cossacks\_estate\_cannot\_marry | Cossacks Cannot Marry | country, *estate* | boolean | bad |  |
| cossacks\_estate\_levy\_size | Cossacks Levy Size | country, *estate* |  | percent, good |  |
| cossacks\_estate\_max\_tax | Maximum Tax for Cossacks | country, *estate* |  | percent, good |  |
| cossacks\_estate\_min\_tax | Minimum Tax for Cossacks | country, *estate* |  | percent, good |  |
| cossacks\_estate\_power\_from\_cabinet | Cossacks Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| cossacks\_estate\_satisfaction\_decay | Cossacks Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| cossacks\_estate\_satisfaction\_recovery | Cossacks Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| cossacks\_estate\_target\_satisfaction | Cossacks Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| cotton\_impacts\_inflation | Cotton Impacts Inflation | country |  | percent, good |  |
| cotton\_used\_for\_minting | Cotton Used for Coins | country | boolean | good |  |
| counter\_espionage | Counterespionage | country |  | percent, good |  |
| country\_allow\_canonization | Allow Canonization | country | boolean | good |  |
| country\_bans\_saffron\_shirts | Banned Saffron Shirts | country | boolean | good |  |
| country\_cabinet\_efficiency | Efficiency of Our Cabinet | country |  | percent, good |  |
| country\_can\_use\_lordship\_of\_ireland\_cb | Can Use Lordship of Ireland Casus Belli | country | boolean | good |  |
| country\_celtic\_marriage\_banned | Celtic Marriage Banned | country | boolean | bad |  |
| country\_child\_education | Education of Heirs | country |  | percent, good |  |
| country\_marriage\_banned | Marriage Banned | country | boolean | bad |  |
| coup\_attempt\_disaster\_actions\_price\_cost\_modifier | Coup Attempt Disaster Actions Cost | country | multiplicative | percent, bad |  |
| court\_eunuchs\_bureaucracy\_impact\_modifier | Court Eunuchs Impact | country | multiplicative | percent, good |  |
| court\_language\_is\_common\_language\_importance\_modifier | Prefers Court Language to be Common Language | country | multiplicative | good |  |
| court\_language\_is\_liturgical\_language\_importance\_modifier | Prefers Court Language to be Liturgical Language | country | multiplicative | good |  |
| court\_language\_is\_market\_language\_importance\_modifier | Prefers Court Language to be Market Language | country | multiplicative | good |  |
| court\_spending\_efficiency | Court Spending Efficiency | country |  | percent, good |  |
| crackdown\_their\_strongholds\_cost\_modifier | Cost of Crackdown Ikkō-ikki Strongholds Action | country | multiplicative | percent, bad |  |
| create\_autocephalous\_patriarchate\_cost\_modifier | Create Autocephalous Patriarchate Cost | country | multiplicative | percent, bad |  |
| create\_colonial\_charter\_cost\_modifier | Create Colonial Charter Cost | country | multiplicative | percent, bad |  |
| create\_italian\_league\_price\_cost\_modifier | Create an Italian League Cost | country | multiplicative | percent, bad |  |
| create\_market\_cost\_modifier | Create Market Cost | country | multiplicative | percent, bad |  |
| create\_supply\_depot\_cost\_modifier | Create Supply Depot Cost | country | multiplicative | percent, bad |  |
| creditworthiness\_bonus | Creditworthiness Bonus | country |  | percent, good |  |
| crown\_estate\_agenda\_impact | UNUSED DONT USE | country, *estate* |  | percent, good |  |
| crown\_estate\_allowed\_in\_cabinet | Crown Allowed in Cabinet | country, *estate* | boolean | good |  |
| crown\_estate\_allowed\_leading\_military | Crown Allowed to Command | country, *estate* | boolean | neutral |  |
| crown\_estate\_allowed\_to\_build\_rgo | UNUSED DONT USE | country, *estate* | boolean | good |  |
| crown\_estate\_allowed\_to\_build\_roads | UNUSED DONT USE | country, *estate* | boolean | good |  |
| crown\_estate\_blocked\_from\_cabinet | Crown Blocked from Cabinet | country, *estate* | boolean | bad |  |
| crown\_estate\_blocked\_from\_leading\_military | Crown Blocked from Command | country, *estate* | boolean | bad |  |
| crown\_estate\_blocked\_from\_parliament | UNUSED DONT USE | country, *estate* | boolean | good |  |
| crown\_estate\_can\_participate\_in\_parliament | UNUSED DONT USE | country, *estate* | boolean | good |  |
| crown\_estate\_cannot\_marry | Crown Cannot Marry | country, *estate* | boolean | bad |  |
| crown\_estate\_levy\_size | Crown Levy Size | country, *estate* |  | percent, good |  |
| crown\_estate\_max\_tax | Maximum Tax for Crown Power | country, *estate* |  | percent, good |  |
| crown\_estate\_min\_tax | Minimum Tax for Crown Power | country, *estate* |  | percent, good |  |
| crown\_estate\_power\_from\_cabinet | Crown Power from Cabinet Position | country, *estate* |  | percent, good |  |
| crown\_estate\_satisfaction\_decay | Crown Power Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| crown\_estate\_satisfaction\_recovery | Crown Power Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| crown\_estate\_target\_satisfaction | Crown Power Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| crown\_power\_from\_population | Crown Power from Population | country |  | percent, good |  |
| cultural\_influence | Cultural Influence | country |  | good |  |
| cultural\_influence\_modifier | Cultural Influence % | country | multiplicative | percent, good |  |
| cultural\_tradition | Cultural Tradition | country |  | good |  |
| cultural\_tradition\_modifier | Cultural Tradition % | country | multiplicative | percent, good |  |
| cultures\_capacity | Cultures Capacity | country |  | good |  |
| cultures\_capacity\_modifier | Cultures Capacity | country | multiplicative | percent, good |  |
| curia\_actions\_blocked | Curia Actions Blocked | religion | boolean | good |  |
| curia\_agenda\_impact | Agenda Impact for Curia | internationalorganization |  | percent, good |  |
| curia\_can\_participate\_in\_parliament | Curia in Parliament | internationalorganization | boolean | good |  |
| damage\_done\_versus\_heathens\_modifier | Damage Done versus Heathens in Battle | unit | multiplicative | percent, good |  |
| damage\_done\_versus\_heretics\_modifier | Damage Done versus Heretics in Battle | unit | multiplicative | percent, good |  |
| deactivate\_avatar\_cost\_modifier | Deactivate Avatar Cost | country | multiplicative | percent, bad |  |
| declare\_independence\_war\_cost\_modifier | Declare Independence War Cost Modifier | country | multiplicative | percent, bad |  |
| declaring\_war\_cost\_modifier | Declaring War Cost | country | multiplicative | percent, bad |  |
| deep\_ocean\_proximity\_impact | Deep ocean Proximity Impact | country |  | percent, bad |  |
| defence\_importance\_modifier | Defense Importance Modifier | country | multiplicative | good |  |
| demand\_church\_tax\_price\_cost\_modifier | Cost of Demanding Apostolic Tax | country | multiplicative | percent, bad |  |
| demand\_extra\_payment\_from\_shogun\_court\_cost\_modifier | Cost of Demand Extra Payment Action | country | multiplicative | percent, bad |  |
| deselect\_expensive\_child\_education\_cost\_modifier | Stopping Expensive Education | country | multiplicative | percent, bad |  |
| deselect\_orthodox\_education\_cost\_modifier | Stopping Patriarch Education | country | multiplicative | percent, bad |  |
| destroy\_market\_cost\_modifier | Destroy Market Cost | country | multiplicative | percent, bad |  |
| dhimmi\_estate\_agenda\_impact | Agenda Impact for Dhimmi | country, *estate* |  | percent, good |  |
| dhimmi\_estate\_allowed\_in\_cabinet | Dhimmi Allowed in Cabinet | country, *estate* | boolean | good |  |
| dhimmi\_estate\_allowed\_leading\_military | Dhimmi Allowed to Command | country, *estate* | boolean | good |  |
| dhimmi\_estate\_allowed\_to\_build\_rgo | Dhimmi Allowed to Expand R.G.O. | country, *estate* | boolean | good |  |
| dhimmi\_estate\_allowed\_to\_build\_roads | Dhimmi Allowed to Build Roads | country, *estate* | boolean | good |  |
| dhimmi\_estate\_blocked\_from\_cabinet | Dhimmi Blocked from Cabinet | country, *estate* | boolean | bad |  |
| dhimmi\_estate\_blocked\_from\_leading\_military | Dhimmi Blocked from Command | country, *estate* | boolean | bad |  |
| dhimmi\_estate\_blocked\_from\_parliament | No Dhimmi in Parliament | country, *estate* | boolean | good |  |
| dhimmi\_estate\_can\_participate\_in\_parliament | Dhimmi in Parliament | country, *estate* | boolean | good |  |
| dhimmi\_estate\_cannot\_marry | Ḏimmī Cannot Marry | country, *estate* | boolean | bad |  |
| dhimmi\_estate\_levy\_size | Ḏimmī Levy Size | country, *estate* |  | percent, good |  |
| dhimmi\_estate\_max\_tax | Maximum Tax for Ḏimmī Estate | country, *estate* |  | percent, good |  |
| dhimmi\_estate\_min\_tax | Minimum Tax for Ḏimmī Estate | country, *estate* |  | percent, good |  |
| dhimmi\_estate\_power\_from\_cabinet | Dhimmi Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| dhimmi\_estate\_satisfaction\_decay | Ḏimmī Estate Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| dhimmi\_estate\_satisfaction\_recovery | Ḏimmī Estate Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| dhimmi\_estate\_target\_satisfaction | Ḏimmī Estate Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| dip | Diplomatic Ability | character |  | good |  |
| diplomacy\_importance\_modifier | Diplomacy Importance Modifier | country | multiplicative | good |  |
| diplomatic\_annexation\_efficiency | Diplomatic Annexation Efficiency | country |  | percent, good |  |
| diplomatic\_capacity | Diplomatic Capacity | country |  | good |  |
| diplomatic\_capacity\_modifier | Diplomatic Capacity | country | multiplicative | percent, good |  |
| diplomatic\_range | Diplomatic Range | country |  | good |  |
| diplomatic\_range\_modifier | Diplomatic Range | country | multiplicative | percent, good |  |
| diplomatic\_reputation | Diplomatic Reputation | country |  | good |  |
| diplomatic\_spending\_cost | Expected Diplomatic Spending | country |  | percent, bad |  |
| diplomatic\_upkeep\_efficiency | Diplomatic Upkeep Efficiency | country |  | percent, good |  |
| direct\_excommunication\_allowed | Direct Excommunication Allowed | internationalorganization | boolean | neutral |  |
| disallow\_diplomatic\_subjugation | Disallow Diplomatic Subjugation | country | boolean | good |  |
| disallow\_migration\_beyond\_borders | Disallow Foreign Migration | country | boolean | good |  |
| disallow\_military\_subjugation | Disallow Military Subjugation | country | boolean | good |  |
| disallows\_female\_rulers | Disallows Female Rulers | country | boolean | neutral |  |
| discard\_worldly\_possessions\_cost\_modifier | Discard Worldly Possessions Cost | country | multiplicative | percent, bad |  |
| discipline | Discipline | unit |  | percent, good |  |
| disfavor\_sect\_cost\_modifier | Disfavor Sect Cost | country | multiplicative | bad |  |
| dismiss\_privateer\_cost\_modifier | Cost of Dismissing Privateers | country | multiplicative | percent, bad |  |
| dismiss\_religious\_figure\_cost\_modifier | Dismiss Religious Figure Cost | country | multiplicative | percent, bad |  |
| dune\_wasteland\_proximity\_impact | Dune Wasteland Proximity Impact | country |  | percent, bad |  |
| dyes\_impacts\_inflation | Dyes Impacts Inflation | country |  | percent, good |  |
| dyes\_used\_for\_minting | Dyes Used for Coins | country | boolean | good |  |
| dynastic\_acquisition\_preference\_modifier | Dynastic Acquisition Preference | country | multiplicative | good |  |
| election\_term\_in\_months | Months between Elections | country |  | neutral |  |
| elector\_agenda\_impact | Agenda Impact for Prince-Elector | internationalorganization |  | percent, good |  |
| elector\_can\_participate\_in\_parliament | Prince-Elector in Parliament | internationalorganization | boolean | good |  |
| elephants\_impacts\_inflation | Elephants Impacts Inflation | country |  | percent, good |  |
| elephants\_used\_for\_minting | Elephants Used for Coins | country | boolean | good |  |
| embrace\_institution\_cost\_modifier | Embrace Institution Cost | country | multiplicative | percent, bad |  |
| emperor\_agenda\_impact | Agenda Impact for Emperor | internationalorganization |  | percent, good |  |
| emperor\_can\_participate\_in\_parliament | Emperor in Parliament | internationalorganization | boolean | good |  |
| empty\_unit\_maintenance\_cost\_modifier | (unused) | country | multiplicative | percent, bad |  |
| enable\_annexation\_of\_members | Enable Annexation of Members | internationalorganization | boolean | neutral |  |
| enable\_black\_market\_buildings | Allow Black Market Buildings | country | boolean | good |  |
| enable\_doom | Doom | country | boolean | bad |  |
| enable\_pest\_house | Can Build Pest House | country | boolean | good |  |
| enable\_pronoia\_subject | Allow Prónoia Subjects | country | boolean | good |  |
| enable\_taxation | Allows Tax | country | boolean | good |  |
| enabled\_negotiate\_succession\_law | Enabled Negotiate Succession Law | internationalorganization | boolean | good |  |
| enabled\_union\_enforcement\_actions | Enabled Union Enforcement Actions | internationalorganization | boolean | good |  |
| enables\_german\_migration | Enables German Migration Events | country | boolean | good |  |
| enemy\_army\_losses\_in\_war\_cost\_modifier | Cost of Enemy Army Losses in Battle | country | multiplicative | percent, bad |  |
| enforced\_internal\_peace | Enforced Internal Peace | internationalorganization | boolean | neutral |  |
| ennoble\_price\_cost\_modifier | Ennoble Cost Modifier | country | multiplicative | percent, bad |  |
| enslave\_tribals | Enslave Tribesmen | country | boolean | good |  |
| establish\_goods\_act\_cost\_modifier | Establish Goods Act Cost Modifier | country | multiplicative | percent, bad |  |
| establish\_italian\_administration\_center\_price\_cost\_modifier | Establish Italian Administration Center Cost | country | multiplicative | percent, bad |  |
| establish\_treaty\_with\_kirishitan\_cost\_modifier | Cost of Establish Kirishitan Treaty Action | country | multiplicative | percent, bad |  |
| estate\_building\_destruction\_satisfaction\_impact | Estate Satisfaction from Destroying Estate Buildings | country, *estate* |  | percent, good |  |
| estate\_enrichment | Estate Enrichment | country, *estate* |  | percent, bad |  |
| estate\_power\_from\_cabinet | Estate Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| estate\_power\_from\_command | Estate Power from Commanding Unit | country, *estate* |  | percent, bad |  |
| estate\_satisfaction\_from\_building | Estate Satisfaction from New Buildings | country, *estate* |  | percent, good |  |
| eunuch\_power | Eunuch Power Modifier | country |  | percent, neutral |  |
| examine\_our\_fortifications\_price\_cost\_modifier | Examine Fortifications Cost Modifier | country | multiplicative | percent, bad |  |
| excluded\_from\_imperial\_protection | Excluded from Imperial Protection | country | boolean | bad |  |
| excluded\_from\_paying\_imperial\_contribution | Excluded from the Imperial Contribution | country | boolean | good |  |
| excluded\_from\_paying\_tithe | Excluded from the Tithe | country | boolean | good |  |
| excommunication\_disabled | Excommunication Disabled | internationalorganization | boolean | neutral |  |
| excommunication\_price\_cost\_modifier | Excommunication Cost Modifier | country | multiplicative | percent, bad |  |
| exempt\_from\_tribute\_cost\_modifier | Exempt from Tribute Cost | country | multiplicative | percent, bad |  |
| expand\_aqueduct\_system\_cost\_modifier | Expand Aqueduct Systems Cost | country | multiplicative | percent, bad |  |
| expand\_rgo\_farming\_cost\_modifier | Expand Farming Cost | country | multiplicative | percent, bad |  |
| expand\_rgo\_forestry\_cost\_modifier | Expand Forestry Cost | country | multiplicative | percent, bad |  |
| expand\_rgo\_gathering\_cost\_modifier | Expand Gathering Cost | country | multiplicative | percent, bad |  |
| expand\_rgo\_hunting\_cost\_modifier | Expand Hunting Cost | country | multiplicative | percent, bad |  |
| expand\_rgo\_mining\_cost\_modifier | Expand Mining Cost | country | multiplicative | percent, bad |  |
| expected\_army\_size | Expected Army Size | country |  | good |  |
| expected\_army\_size\_modifier | Expected Army Size | country | multiplicative | percent, good |  |
| expected\_navy\_size | Expected Navy Size | country |  | good |  |
| expected\_navy\_size\_modifier | Expected Navy Size | country | multiplicative | percent, good |  |
| expected\_warscore\_modifier | Expected Warscore Modifier | country | multiplicative | good |  |
| expel\_tribals | Expel Tribesmen | country | boolean | good |  |
| expensive\_estate\_building\_cost\_modifier | Expensive Estate Building Cost | country, *estate* | multiplicative | percent, bad |  |
| experience\_decay | Monthly Experience Decay | unit |  | percent, bad |  |
| exploration\_maintenance\_efficiency | Exploration Cost Efficiency | country |  | percent, good |  |
| exploration\_mission\_speed | Exploration Monthly Progress | country |  | good |  |
| exploration\_mission\_speed\_modifier | Exploration Monthly Progress | country | multiplicative | percent, good |  |
| exploration\_preparation\_time\_modifier | Exploration Preparation Time Modifier | country | multiplicative | percent, bad |  |
| export\_efficiency | Export Efficiency | country |  | percent, good |  |
| export\_impact\_on\_demand | Export Impact on Demand | country |  | percent, good |  |
| extend\_regency\_cost\_modifier | Cost of Extending Regencies | country | multiplicative | percent, bad |  |
| fate\_of\_phoenix\_actions\_price\_cost\_modifier | Fate of the Phoenix Actions Cost Modifier | country | multiplicative | percent, bad |  |
| favor\_buddhist\_schools\_from\_religious\_sects\_cost\_modifier | Cost of Favor Buddhism Schools Action | country | multiplicative | percent, bad |  |
| favor\_god\_cost\_modifier | Favor a God Cost | country | multiplicative | percent, bad |  |
| favor\_kami\_worship\_from\_religious\_sects\_cost\_modifier | Cost of Favor Kami Worship Action | country | multiplicative | percent, bad |  |
| favoring\_buddhism | Allows Sects | country | boolean | good |  |
| female\_spouses | Maximum Amount of Female Spouses | country |  | good |  |
| fiber\_crops\_impacts\_inflation | Fiber crops Impacts Inflation | country |  | percent, good |  |
| fiber\_crops\_used\_for\_minting | Fiber crops Used for Coins | country | boolean | good |  |
| fine\_cloth\_impacts\_inflation | Fine cloth Impacts Inflation | country |  | percent, good |  |
| fine\_cloth\_used\_for\_minting | Fine cloth Used for Coins | country | boolean | good |  |
| firearms\_impacts\_inflation | Firearms Impacts Inflation | country |  | percent, good |  |
| firearms\_used\_for\_minting | Firearms Used for Coins | country | boolean | good |  |
| fish\_impacts\_inflation | Fish Impacts Inflation | country |  | percent, good |  |
| fish\_used\_for\_minting | Fish Used for Coins | country | boolean | good |  |
| flatland\_proximity\_impact | Flatland Proximity Impact | country |  | percent, bad |  |
| flatland\_wasteland\_proximity\_impact | Flatland Wasteland Proximity Impact | country |  | percent, bad |  |
| food\_consumption\_modifier | Unit Food Consumption | unit | multiplicative | percent, bad |  |
| food\_purchase\_efficiency | Food Purchase Efficiency | country |  | percent, good |  |
| forbid\_marrying\_lowborn | Forbid Marriage with Lowborn | country | boolean | bad |  |
| forbid\_multiple\_policies\_vote | Forbid Multiple Policies Vote | internationalorganization | boolean | neutral |  |
| force\_allow\_as\_leader | Can Always be a Military Leader | character | boolean | good |  |
| force\_army\_maintenance | Army Maintenance Minimum 100% | unit | boolean | bad |  |
| force\_convert\_created\_subjects | Force Convert Subjects on Creation | country | boolean | good |  |
| foreign\_export\_from\_market\_efficiency | Foreign Export Efficiency from Market | country |  | percent, good |  |
| foreign\_ministry\_bureaucracy\_impact\_modifier | Foreign Ministry Impact | country | multiplicative | percent, good |  |
| fort\_assumed\_efficiency\_character | Assume Fort Command Efficiency | character |  | percent, good |  |
| fort\_level | Fort Level | location |  | good |  |
| fort\_limit | Fort Limit | country |  | good |  |
| fort\_limit\_modifier | Fort Limit | country | multiplicative | percent, good |  |
| fort\_maintenance\_efficiency | Fortification Maintenance Efficiency | country |  | percent, good |  |
| fortify\_key\_location\_price\_cost\_modifier | Fortify Key Location Cost | country | multiplicative | percent, bad |  |
| frankokratia\_vassal\_state\_may\_declare\_war | Allowed Wars within Frankokratia. | country | boolean | good |  |
| free\_building\_cost\_modifier | Free Building Cost | country | multiplicative | percent, bad |  |
| free\_building\_levels | Supported Building Levels | location |  | good |  |
| free\_capacity\_attracts\_pops | Available Land is Attractive | location | boolean | good |  |
| free\_city\_agenda\_impact | Agenda Impact for Free Imperial City | internationalorganization |  | percent, good |  |
| free\_city\_can\_participate\_in\_parliament | Free Imperial City in Parliament | internationalorganization | boolean | good |  |
| french\_subject\_prevented\_from\_call\_to\_war | Disallowed from Call Subject to War | country | boolean | good |  |
| friendly\_disembark\_time\_modifier | Friendly Disembark Time Modifier | location | multiplicative | percent, bad |  |
| friendly\_movement\_cost | Friendly Movement Cost | location |  | percent, bad |  |
| fruit\_impacts\_inflation | Fruit Impacts Inflation | country |  | percent, good |  |
| fruit\_used\_for\_minting | Fruit Used for Coins | country | boolean | good |  |
| fur\_impacts\_inflation | Fur Impacts Inflation | country |  | percent, good |  |
| fur\_used\_for\_minting | Fur Used for Coins | country | boolean | good |  |
| furniture\_impacts\_inflation | Furniture Impacts Inflation | country |  | percent, good |  |
| furniture\_used\_for\_minting | Furniture Used for Coins | country | boolean | good |  |
| gag\_support\_guelphs | Guelph Support | country | boolean | neutral |  |
| gems\_impacts\_inflation | Gems Impacts Inflation | country |  | percent, good |  |
| gems\_used\_for\_minting | Gems Used for Coins | country | boolean | good |  |
| gender\_equality | Gender Equality | country | boolean | good |  |
| german\_migration\_attraction\_modifier | German Migration Attraction Modifier | country | multiplicative | percent, good |  |
| get\_claim\_from\_imperial\_court\_cost\_modifier | Cost of Getting a Claim from the Imperial Court | country | multiplicative | percent, bad |  |
| get\_marriage\_from\_imperial\_court\_cost\_modifier | Cost of Getting Marriage from the Imperial Court | country | multiplicative | percent, bad |  |
| ghibelline\_imperial\_protection | Imperial Sanction | country | boolean | good |  |
| give\_colony\_rebellion\_support\_cost\_modifier | Give Colony Rebellion Support Cost Modifier | country | multiplicative | percent, bad |  |
| give\_colony\_representation\_cost\_modifier | Grant Representation to Colonial Subject Cost Modifier | country | multiplicative | percent, bad |  |
| gives\_cardinal | Grants Cardinal | location | boolean | neutral |  |
| glass\_impacts\_inflation | Glass Impacts Inflation | country |  | percent, good |  |
| glass\_used\_for\_minting | Glass Used for Coins | country | boolean | good |  |
| global\_alum\_output\_modifier | Alum Output | country | multiplicative | percent, good |  |
| global\_alum\_pop\_demand | National Alum Demand | country |  | percent, good |  |
| global\_amber\_output\_modifier | Amber Output | country | multiplicative | percent, good |  |
| global\_amber\_pop\_demand | National Amber Demand | country |  | percent, good |  |
| global\_army\_levy\_size\_modifier | Army Levy Size | country | multiplicative | percent, good |  |
| global\_beer\_output\_modifier | Beer Output | country | multiplicative | percent, good |  |
| global\_beer\_pop\_demand | National Beer Demand | country |  | percent, good |  |
| global\_beeswax\_output\_modifier | Beeswax Output | country | multiplicative | percent, good |  |
| global\_beeswax\_pop\_demand | National Beeswax Demand | country |  | percent, good |  |
| global\_books\_output\_modifier | Books Output | country | multiplicative | percent, good |  |
| global\_books\_pop\_demand | National Books Demand | country |  | percent, good |  |
| global\_build\_buildings\_efficiency | Buildings Construction Efficiency | country |  | percent, good |  |
| global\_building\_establishment\_speed | Building Establishment Speed | country |  | percent, good |  |
| global\_bureaucracy\_entrenchment\_speed\_modifier | Bureaucracy Entrenchment Speed Modifier | country | multiplicative | percent, bad |  |
| global\_bureaucracy\_implementation\_efficiency | Bureaucracy Implementation Efficiency | country |  | percent, good |  |
| global\_bureaucracy\_maintenance\_efficiency | Bureaucracy Maintenance Efficiency | country |  | percent, good |  |
| global\_bureaucracy\_removal\_efficiency | Bureaucracy Removal Efficiency | country |  | percent, good |  |
| global\_burghers\_assimilation\_blocked | Assimilation of Burghers Blocked | country | boolean | bad |  |
| global\_burghers\_city\_desired\_pop | Possible Burghers in Towns and Cities | country |  | good |  |
| global\_burghers\_city\_desired\_pop\_scaled | Possible Burghers in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_burghers\_conversion\_blocked | Conversion of Burghers Blocked | country | boolean | bad |  |
| global\_burghers\_desired\_pop | Possible Burghers | country |  | good |  |
| global\_burghers\_desired\_pop\_scaled | Possible Burghers for each 1,000 population | country | scaled | percent, good |  |
| global\_burghers\_estate\_power | Burghers Power | country, *estate* |  | percent, bad |  |
| global\_burghers\_food\_consumption | Burghers Food Consumption | country |  | percent, bad |  |
| global\_burghers\_max\_literacy | Max Literacy for Burghers | country |  | raw percent, good |  |
| global\_burghers\_migration\_allowed | Allows Burghers to Migrate | country | boolean | good |  |
| global\_burghers\_pop\_growth | Burghers Growth | country |  | percent, good |  |
| global\_burghers\_rural\_desired\_pop | Possible Burghers in Rural Locations | country |  | good |  |
| global\_burghers\_rural\_desired\_pop\_scaled | Possible Burghers in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_cannons\_output\_modifier | Cannon Output | country | multiplicative | percent, good |  |
| global\_cannons\_pop\_demand | National Cannon Demand | country |  | percent, good |  |
| global\_chili\_output\_modifier | Chili Output | country | multiplicative | percent, good |  |
| global\_chili\_pop\_demand | National Chili Demand | country |  | percent, good |  |
| global\_clay\_output\_modifier | Clay Output | country | multiplicative | percent, good |  |
| global\_clay\_pop\_demand | National Clay Demand | country |  | percent, good |  |
| global\_clergy\_assimilation\_blocked | Assimilation of Clerics Blocked | country | boolean | bad |  |
| global\_clergy\_city\_desired\_pop | Possible Clerics in Towns and Cities | country |  | good |  |
| global\_clergy\_city\_desired\_pop\_scaled | Possible Clerics in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_clergy\_conversion\_blocked | Conversion of Clerics Blocked | country | boolean | bad |  |
| global\_clergy\_desired\_pop | Possible Clerics | country |  | good |  |
| global\_clergy\_desired\_pop\_scaled | Possible Clerics for each 1,000 population | country | scaled | percent, good |  |
| global\_clergy\_estate\_power | Clergy Power | country, *estate* |  | percent, bad |  |
| global\_clergy\_food\_consumption | Clergy Food Consumption | country |  | percent, bad |  |
| global\_clergy\_max\_literacy | Max Literacy for Clergy | country |  | raw percent, good |  |
| global\_clergy\_migration\_allowed | Allows Clerics to Migrate | country | boolean | good |  |
| global\_clergy\_pop\_growth | Clerics Growth | country |  | percent, good |  |
| global\_clergy\_rural\_desired\_pop | Possible Clerics in Rural Locations | country |  | good |  |
| global\_clergy\_rural\_desired\_pop\_scaled | Possible Clerics in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_cloth\_output\_modifier | Cloth Output | country | multiplicative | percent, good |  |
| global\_cloth\_pop\_demand | National Cloth Demand | country |  | percent, good |  |
| global\_cloves\_output\_modifier | Cloves Output | country | multiplicative | percent, good |  |
| global\_cloves\_pop\_demand | National Cloves Demand | country |  | percent, good |  |
| global\_coal\_output\_modifier | Coal Output | country | multiplicative | percent, good |  |
| global\_coal\_pop\_demand | National Coal Demand | country |  | percent, good |  |
| global\_cocoa\_output\_modifier | Cocoa Output | country | multiplicative | percent, good |  |
| global\_cocoa\_pop\_demand | National Cocoa Demand | country |  | percent, good |  |
| global\_coffee\_output\_modifier | Coffee Output | country | multiplicative | percent, good |  |
| global\_coffee\_pop\_demand | National Coffee Demand | country |  | percent, good |  |
| global\_construction\_speed | Construction Speed | country |  | percent, good |  |
| global\_copper\_output\_modifier | Copper Output | country | multiplicative | percent, good |  |
| global\_copper\_pop\_demand | National Copper Demand | country |  | percent, good |  |
| global\_cossacks\_estate\_power | Cossacks Power | country, *estate* |  | percent, bad |  |
| global\_cotton\_output\_modifier | Cotton Output | country | multiplicative | percent, good |  |
| global\_cotton\_pop\_demand | National Cotton Demand | country |  | percent, good |  |
| global\_crown\_estate\_power | Crown Power | country, *estate* |  | percent, good |  |
| global\_defensive | Fort Defense | country |  | percent, good |  |
| global\_devastation\_recovery | Prosperity Recovery | country |  | percent, good |  |
| global\_dhimmi\_estate\_power | Ḏimmī Power | country, *estate* |  | percent, bad |  |
| global\_disease\_resistance | Disease Resistance | country |  | percent, good |  |
| global\_distance\_from\_capital\_speed\_propagation | Proximity Efficiency | country |  | percent, good |  |
| global\_dyes\_output\_modifier | Dyes Output | country | multiplicative | percent, good |  |
| global\_dyes\_pop\_demand | National Dyes Demand | country |  | percent, good |  |
| global\_elephants\_output\_modifier | Elephants Output | country | multiplicative | percent, good |  |
| global\_elephants\_pop\_demand | National Elephants Demand | country |  | percent, good |  |
| global\_estate\_max\_tax | Maximum Tax | country, *estate* |  | percent, good |  |
| global\_estate\_min\_tax | Minimum Tax | country, *estate* |  | percent, good |  |
| global\_estate\_power | Estates Power | country, *estate* |  | percent, bad |  |
| global\_estate\_satisfaction\_decay | Estates Satisfaction Decay | country, *estate* |  | percent, bad |  |
| global\_estate\_satisfaction\_from\_legitimacy | Estates Satisfaction Equilibrium from Legitimacy | country, *estate* |  | percent, good |  |
| global\_estate\_satisfaction\_recovery | Estates Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| global\_estate\_target\_satisfaction | Estates Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| global\_fiber\_crops\_output\_modifier | Fiber Crops Output | country | multiplicative | percent, good |  |
| global\_fiber\_crops\_pop\_demand | National Fiber Crops Demand | country |  | percent, good |  |
| global\_fine\_cloth\_output\_modifier | Fine Cloth Output | country | multiplicative | percent, good |  |
| global\_fine\_cloth\_pop\_demand | National Fine Cloth Demand | country |  | percent, good |  |
| global\_firearms\_output\_modifier | Firearms Output | country | multiplicative | percent, good |  |
| global\_firearms\_pop\_demand | National Firearms Demand | country |  | percent, good |  |
| global\_fish\_output\_modifier | Fish Output | country | multiplicative | percent, good |  |
| global\_fish\_pop\_demand | National Fish Demand | country |  | percent, good |  |
| global\_food\_capacity | Food Capacity | country |  | good |  |
| global\_food\_capacity\_modifier | Food Capacity | country | multiplicative | percent, good |  |
| global\_food\_decay | Food Decay | country |  | percent, bad |  |
| global\_foreign\_build\_buildings\_efficiency | Foreign Buildings Construction Efficiency | country |  | percent, good |  |
| global\_fort\_build\_buildings\_efficiency | Fort Construction Efficiency | country |  | percent, good |  |
| global\_fruit\_output\_modifier | Fruit Output | country | multiplicative | percent, good |  |
| global\_fruit\_pop\_demand | National Fruit Demand | country |  | percent, good |  |
| global\_fur\_output\_modifier | Fur Output | country | multiplicative | percent, good |  |
| global\_fur\_pop\_demand | National Fur Demand | country |  | percent, good |  |
| global\_furniture\_output\_modifier | Furniture Output | country | multiplicative | percent, good |  |
| global\_furniture\_pop\_demand | National Furniture Demand | country |  | percent, good |  |
| global\_garrison\_growth | Garrison Growth | country |  | percent, good |  |
| global\_garrison\_size\_modifier | Garrison Size | country | multiplicative | percent, good |  |
| global\_gems\_output\_modifier | Gems Output | country | multiplicative | percent, good |  |
| global\_gems\_pop\_demand | National Gems Demand | country |  | percent, good |  |
| global\_glass\_output\_modifier | Glass Output | country | multiplicative | percent, good |  |
| global\_glass\_pop\_demand | National Glass Demand | country |  | percent, good |  |
| global\_goods\_gold\_output\_modifier | Gold Output | country | multiplicative | percent, good |  |
| global\_goods\_gold\_pop\_demand | National Gold Demand | country |  | percent, good |  |
| global\_heathen\_pop\_conversion\_speed\_modifier | Heathen Pop Conversion Speed % | country | multiplicative | percent, good |  |
| global\_hellenism\_religion\_movement\_growth\_modifier | National Platonic Revival Movement Growth Modifier | movement | multiplicative | percent, good |  |
| global\_hellenism\_religion\_movement\_resistance\_modifier | National Platonic Revival Movement Resistance Modifier | movement | multiplicative | percent, good |  |
| global\_heretic\_pop\_conversion\_speed\_modifier | Heretic Pop Conversion Speed % | country | multiplicative | percent, good |  |
| global\_horses\_output\_modifier | Horses Output | country | multiplicative | percent, good |  |
| global\_horses\_pop\_demand | National Horses Demand | country |  | percent, good |  |
| global\_hostile\_attrition | Hostile Attrition | country |  | raw percent, bad |  |
| global\_incense\_output\_modifier | Incense Output | country | multiplicative | percent, good |  |
| global\_incense\_pop\_demand | National Incense Demand | country |  | percent, good |  |
| global\_institution\_growth\_modifier | Institution Growth | country | multiplicative | percent, good |  |
| global\_integration\_speed\_modifier | Speed of Integration | country | multiplicative | percent, good |  |
| global\_iron\_output\_modifier | Iron Output | country | multiplicative | percent, good |  |
| global\_iron\_pop\_demand | National Iron Demand | country |  | percent, good |  |
| global\_ivory\_output\_modifier | Ivory Output | country | multiplicative | percent, good |  |
| global\_ivory\_pop\_demand | National Ivory Demand | country |  | percent, good |  |
| global\_jewelry\_output\_modifier | Jewelry Output | country | multiplicative | percent, good |  |
| global\_jewelry\_pop\_demand | National Jewelry Demand | country |  | percent, good |  |
| global\_laborers\_assimilation\_blocked | Assimilation of Laborers Blocked | country | boolean | bad |  |
| global\_laborers\_city\_desired\_pop | Possible Laborers in Towns and Cities | country |  | good |  |
| global\_laborers\_city\_desired\_pop\_scaled | Possible Laborers in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_laborers\_conversion\_blocked | Conversion of Laborers Blocked | country | boolean | bad |  |
| global\_laborers\_desired\_pop | Possible Laborers | country |  | good |  |
| global\_laborers\_desired\_pop\_scaled | Possible Laborers for each 1,000 population | country | scaled | percent, good |  |
| global\_laborers\_food\_consumption | Laborers Food Consumption | country |  | percent, bad |  |
| global\_laborers\_max\_literacy | Max Literacy for Laborers | country |  | raw percent, good |  |
| global\_laborers\_migration\_allowed | Allows Laborers to Migrate | country | boolean | good |  |
| global\_laborers\_pop\_growth | Laborers Growth | country |  | percent, good |  |
| global\_laborers\_rural\_desired\_pop | Possible Laborers in Rural Locations | country |  | good |  |
| global\_laborers\_rural\_desired\_pop\_scaled | Possible Laborers in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_lacquerware\_output\_modifier | Lacquerware Output | country | multiplicative | percent, good |  |
| global\_lacquerware\_pop\_demand | National Lacquerware Demand | country |  | percent, good |  |
| global\_lead\_output\_modifier | Lead Output | country | multiplicative | percent, good |  |
| global\_lead\_pop\_demand | National Lead Demand | country |  | percent, good |  |
| global\_leather\_output\_modifier | Leather Output | country | multiplicative | percent, good |  |
| global\_leather\_pop\_demand | National Leather Demand | country |  | percent, good |  |
| global\_legumes\_output\_modifier | Legumes Output | country | multiplicative | percent, good |  |
| global\_legumes\_pop\_demand | National Legumes Demand | country |  | percent, good |  |
| global\_levy\_recruitment\_speed\_modifier | Levy Recruitment Speed | country | multiplicative | percent, good |  |
| global\_levy\_size\_modifier | Levy Size | country | multiplicative | percent, good |  |
| global\_life\_expectancy | Character Life Expectancy | country |  | good |  |
| global\_liquor\_output\_modifier | Liquor Output | country | multiplicative | percent, good |  |
| global\_liquor\_pop\_demand | National Liquor Demand | country |  | percent, good |  |
| global\_livestock\_output\_modifier | Livestock Output | country | multiplicative | percent, good |  |
| global\_livestock\_pop\_demand | National Livestock Demand | country |  | percent, good |  |
| global\_lumber\_output\_modifier | Lumber Output | country | multiplicative | percent, good |  |
| global\_lumber\_pop\_demand | National Lumber Demand | country |  | percent, good |  |
| global\_maize\_output\_modifier | Maize Output | country | multiplicative | percent, good |  |
| global\_maize\_pop\_demand | National Maize Demand | country |  | percent, good |  |
| global\_manpower\_modifier | Manpower | country | multiplicative | percent, good |  |
| global\_marble\_output\_modifier | Marble Output | country | multiplicative | percent, good |  |
| global\_marble\_pop\_demand | National Marble Demand | country |  | percent, good |  |
| global\_maritime\_presence\_decay | Maritime Presence Decay | country |  | percent, bad |  |
| global\_maritime\_presence\_modifier | Maritime Presence % | unit | multiplicative | percent, good |  |
| global\_masonry\_output\_modifier | Masonry Output | country | multiplicative | percent, good |  |
| global\_masonry\_pop\_demand | National Masonry Demand | country |  | percent, good |  |
| global\_max\_bureaucracy\_slots | Max Bureaucracy Slots | country |  | good |  |
| global\_max\_control | Max Control | country |  | percent, good |  |
| global\_max\_literacy | Max Literacy | country |  | raw percent, good |  |
| global\_max\_rgo\_size\_modifier | Maximum RGO Size | country | multiplicative | percent, good |  |
| global\_max\_rgo\_size\_modifier\_in\_non\_rural | Maximum RGO Size in Towns & Cities | country |  | percent, good |  |
| global\_max\_rgo\_size\_modifier\_in\_rural | Maximum RGO Size in Rural | country |  | percent, good |  |
| global\_max\_rural\_control | Max Rural Control | country |  | percent, good |  |
| global\_max\_urban\_control | Max Urban Control | country |  | percent, good |  |
| global\_may\_build\_nahuatl\_units | May Build Eagle and Jaguar Warriors | country | boolean | good |  |
| global\_may\_build\_paik\_units | May Build Paik Units | country | boolean | good |  |
| global\_medicaments\_output\_modifier | Medicaments Output | country | multiplicative | percent, good |  |
| global\_medicaments\_pop\_demand | National Medicaments Demand | country |  | percent, good |  |
| global\_mercenaries\_modifier | Mercenary Size | country | multiplicative | percent, neutral |  |
| global\_merchant\_capacity\_modifier | Trade Capacity | country | multiplicative | percent, good |  |
| global\_merchant\_power | Trade Advantage | country |  | percent, good |  |
| global\_mercury\_output\_modifier | Mercury Output | country | multiplicative | percent, good |  |
| global\_mercury\_pop\_demand | National Mercury Demand | country |  | percent, good |  |
| global\_migration\_attraction | Migration Attraction | country |  | good |  |
| global\_migration\_speed | Pop Migration Speed | country |  | good |  |
| global\_migration\_speed\_modifier | Pop Migration Speed | country | multiplicative | percent, good |  |
| global\_millet\_output\_modifier | Sturdy Grains Output | country | multiplicative | percent, good |  |
| global\_millet\_pop\_demand | National Sturdy Grains Demand | country |  | percent, good |  |
| global\_mills\_build\_buildings\_efficiency | Mills Construction Efficiency | country |  | percent, good |  |
| global\_monthly\_art\_start\_chance | Artist Monthly Start Chance | country |  | percent, good |  |
| global\_monthly\_control | Monthly Control | country |  | percent, good |  |
| global\_monthly\_control\_decline | Monthly Control Decline | country |  | percent, bad |  |
| global\_monthly\_development | Monthly Development | country |  | good |  |
| global\_monthly\_food\_modifier | Food Production % | country | multiplicative | percent, good |  |
| global\_monthly\_literacy | Monthly Literacy | country |  | raw percent, good |  |
| global\_monthly\_prosperity | Monthly Prosperity | country |  | percent, good |  |
| global\_monthly\_rural\_control | Monthly Rural Control | country |  | percent, good |  |
| global\_monthly\_urban\_control | Monthly Urban Control | country |  | percent, good |  |
| global\_naval\_supplies\_output\_modifier | Naval Supplies Output | country | multiplicative | percent, good |  |
| global\_naval\_supplies\_pop\_demand | National Naval Supplies Demand | country |  | percent, good |  |
| global\_navy\_levy\_size\_modifier | Navy Levy Size | country | multiplicative | percent, good |  |
| global\_nobles\_assimilation\_blocked | Assimilation of Nobles Blocked | country | boolean | bad |  |
| global\_nobles\_city\_desired\_pop | Possible Nobles in Towns and Cities | country |  | good |  |
| global\_nobles\_city\_desired\_pop\_scaled | Possible Nobles in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_nobles\_conversion\_blocked | Conversion of Nobles Blocked | country | boolean | bad |  |
| global\_nobles\_desired\_pop | Possible Nobles | country |  | good |  |
| global\_nobles\_desired\_pop\_scaled | Possible Nobles for each 1,000 population | country | scaled | percent, good |  |
| global\_nobles\_estate\_power | Nobles Power | country, *estate* |  | percent, bad |  |
| global\_nobles\_food\_consumption | Nobles Food Consumption | country |  | percent, bad |  |
| global\_nobles\_max\_literacy | Max Literacy for Nobles | country |  | raw percent, good |  |
| global\_nobles\_migration\_allowed | Allows Nobles to Migrate | country | boolean | good |  |
| global\_nobles\_pop\_growth | Nobles Growth | country |  | percent, good |  |
| global\_nobles\_rural\_desired\_pop | Possible Nobles in Rural Locations | country |  | good |  |
| global\_nobles\_rural\_desired\_pop\_scaled | Possible Nobles in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_non\_rural\_monthly\_development | Monthly Development in Urban Locations | country |  | good |  |
| global\_non\_rural\_monthly\_prosperity | Monthly Prosperity in Urban Locations | country |  | percent, good |  |
| global\_olives\_output\_modifier | Olives Output | country | multiplicative | percent, good |  |
| global\_olives\_pop\_demand | National Olives Demand | country |  | percent, good |  |
| global\_paper\_output\_modifier | Paper Output | country | multiplicative | percent, good |  |
| global\_paper\_pop\_demand | National Paper Demand | country |  | percent, good |  |
| global\_pearls\_output\_modifier | Pearls Output | country | multiplicative | percent, good |  |
| global\_pearls\_pop\_demand | National Pearls Demand | country |  | percent, good |  |
| global\_peasant\_enfranchisment | Peasant Enfranchisement | country |  | percent, good |  |
| global\_peasants\_assimilation\_blocked | Assimilation of Peasants Blocked | country | boolean | bad |  |
| global\_peasants\_city\_desired\_pop | Possible Peasants in Towns and Cities | country |  | good |  |
| global\_peasants\_city\_desired\_pop\_scaled | Possible Peasants in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_peasants\_conversion\_blocked | Conversion of Peasants Blocked | country | boolean | bad |  |
| global\_peasants\_desired\_pop | Possible Peasants | country |  | good |  |
| global\_peasants\_desired\_pop\_scaled | Possible Peasants for each 1,000 population | country | scaled | percent, good |  |
| global\_peasants\_estate\_power | Peasants Power | country, *estate* |  | percent, bad |  |
| global\_peasants\_food\_consumption | Peasants Food Consumption | country |  | percent, bad |  |
| global\_peasants\_max\_literacy | Max Literacy for Peasants | country |  | raw percent, good |  |
| global\_peasants\_migration\_allowed | Allows Peasants to Migrate | country | boolean | good |  |
| global\_peasants\_pop\_growth | Peasants Growth | country |  | percent, good |  |
| global\_peasants\_rural\_desired\_pop | Possible Peasants in Rural Locations | country |  | good |  |
| global\_peasants\_rural\_desired\_pop\_scaled | Possible Peasants in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_pepper\_output\_modifier | Pepper Output | country | multiplicative | percent, good |  |
| global\_pepper\_pop\_demand | National Pepper Demand | country |  | percent, good |  |
| global\_pirate\_spawn\_chance | Chance for Pirates | country |  | raw percent, bad |  |
| global\_pop\_assimilation\_speed | Pop Assimilation Speed | country |  | good |  |
| global\_pop\_assimilation\_speed\_modifier | Pop Assimilation Speed | country | multiplicative | percent, good |  |
| global\_pop\_conversion\_speed | Pop Conversion Speed | country |  | good |  |
| global\_pop\_conversion\_speed\_modifier | Pop Conversion Speed % | country | multiplicative | percent, good |  |
| global\_pop\_demand | Pop Goods Demand | country |  | percent, good |  |
| global\_pop\_demotion\_speed | Pop Demotion Speed | country |  | bad |  |
| global\_pop\_demotion\_speed\_modifier | Pop Demotion Speed | country | multiplicative | percent, bad |  |
| global\_pop\_food\_consumption | Pop Food Consumption | country |  | percent, bad |  |
| global\_pop\_promotion\_speed | Pop Promotion Speed | country |  | good |  |
| global\_pop\_promotion\_speed\_modifier | Pop Promotion Speed % | country | multiplicative | percent, good |  |
| global\_population\_capacity\_modifier | Population Capacity % | country | multiplicative | percent, good |  |
| global\_population\_growth | Population Growth | country |  | percent, good |  |
| global\_porcelain\_output\_modifier | Porcelain Output | country | multiplicative | percent, good |  |
| global\_porcelain\_pop\_demand | National Porcelain Demand | country |  | percent, good |  |
| global\_port\_build\_buildings\_efficiency | Port Construction Efficiency | country |  | percent, good |  |
| global\_potato\_output\_modifier | Potatoes Output | country | multiplicative | percent, good |  |
| global\_potato\_pop\_demand | National Potatoes Demand | country |  | percent, good |  |
| global\_pottery\_output\_modifier | Pottery Output | country | multiplicative | percent, good |  |
| global\_pottery\_pop\_demand | National Pottery Demand | country |  | percent, good |  |
| global\_production\_efficiency | Production Efficiency | country |  | percent, good |  |
| global\_prosperity\_decay | Prosperity Decay | country |  | percent, bad |  |
| global\_raw\_material\_output | Raw Materials Output | country |  | percent, good |  |
| global\_rgo\_build\_time | Expanding Raw Materials Time | country |  | percent, bad |  |
| global\_rice\_output\_modifier | Rice Output | country | multiplicative | percent, good |  |
| global\_rice\_pop\_demand | National Rice Demand | country |  | percent, good |  |
| global\_road\_building\_time | Road Building Time | country |  | percent, bad |  |
| global\_roman\_culture\_movement\_growth\_modifier | National Latin Revival Movement Growth Modifier | movement | multiplicative | percent, good |  |
| global\_roman\_culture\_movement\_resistance\_modifier | National Latin Revival Movement Resistance Modifier | movement | multiplicative | percent, good |  |
| global\_rural\_build\_buildings\_efficiency | Rural Buildings Construction Efficiency | country |  | percent, good |  |
| global\_saffron\_output\_modifier | Saffron Output | country | multiplicative | percent, good |  |
| global\_saffron\_pop\_demand | National Saffron Demand | country |  | percent, good |  |
| global\_sailors\_modifier | Sailors | country | multiplicative | percent, good |  |
| global\_salt\_output\_modifier | Salt Output | country | multiplicative | percent, good |  |
| global\_salt\_pop\_demand | National Salt Demand | country |  | percent, good |  |
| global\_saltpeter\_output\_modifier | Saltpeter Output | country | multiplicative | percent, good |  |
| global\_saltpeter\_pop\_demand | National Saltpeter Demand | country |  | percent, good |  |
| global\_sand\_output\_modifier | Sand Output | country | multiplicative | percent, good |  |
| global\_sand\_pop\_demand | National Sand Demand | country |  | percent, good |  |
| global\_separatism | Separatism | country |  | percent, bad |  |
| global\_silk\_output\_modifier | Silk Output | country | multiplicative | percent, good |  |
| global\_silk\_pop\_demand | National Silk Demand | country |  | percent, good |  |
| global\_silver\_output\_modifier | Silver Output | country | multiplicative | percent, good |  |
| global\_silver\_pop\_demand | National Silver Demand | country |  | percent, good |  |
| global\_slave\_pop\_satisfaction | Satisfaction of Slaves | country |  | percent, good |  |
| global\_slaves\_assimilation\_blocked | Assimilation of Slaves Blocked | country | boolean | bad |  |
| global\_slaves\_city\_desired\_pop | Possible Slaves in Towns and Cities | country |  | good |  |
| global\_slaves\_city\_desired\_pop\_scaled | Possible Slaves in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_slaves\_conversion\_blocked | Conversion of Slaves Blocked | country | boolean | bad |  |
| global\_slaves\_desired\_pop | Possible Slaves | country |  | good |  |
| global\_slaves\_desired\_pop\_scaled | Possible Slaves for each 1,000 population | country | scaled | percent, good |  |
| global\_slaves\_food\_consumption | Slaves Food Consumption | country |  | percent, bad |  |
| global\_slaves\_goods\_output\_modifier | Slaves Output | country | multiplicative | percent, good |  |
| global\_slaves\_goods\_pop\_demand | National Slaves Demand | country |  | percent, good |  |
| global\_slaves\_max\_literacy | Max Literacy for Slaves | country |  | raw percent, good |  |
| global\_slaves\_migration\_allowed | Allows Slaves to Migrate | country | boolean | good |  |
| global\_slaves\_pop\_growth | Slaves Growth | country |  | percent, good |  |
| global\_slaves\_rural\_desired\_pop | Possible Slaves in Rural Locations | country |  | good |  |
| global\_slaves\_rural\_desired\_pop\_scaled | Possible Slaves in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_soldiers\_assimilation\_blocked | Assimilation of Soldiers Blocked | country | boolean | bad |  |
| global\_soldiers\_city\_desired\_pop | Possible Soldiers in Towns and Cities | country |  | good |  |
| global\_soldiers\_city\_desired\_pop\_scaled | Possible Soldiers in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_soldiers\_conversion\_blocked | Conversion of Soldiers Blocked | country | boolean | bad |  |
| global\_soldiers\_desired\_pop | Possible Soldiers | country |  | good |  |
| global\_soldiers\_desired\_pop\_scaled | Possible Soldiers for each 1,000 population | country | scaled | percent, good |  |
| global\_soldiers\_food\_consumption | Soldiers Food Consumption | country |  | percent, bad |  |
| global\_soldiers\_max\_literacy | Max Literacy for Soldiers | country |  | raw percent, good |  |
| global\_soldiers\_migration\_allowed | Allows Soldiers to Migrate | country | boolean | good |  |
| global\_soldiers\_pop\_growth | Soldiers Growth | country |  | percent, good |  |
| global\_soldiers\_rural\_desired\_pop | Possible Soldiers in Rural Locations | country |  | good |  |
| global\_soldiers\_rural\_desired\_pop\_scaled | Possible Soldiers in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_steel\_output\_modifier | Steel Output | country | multiplicative | percent, good |  |
| global\_steel\_pop\_demand | National Steel Demand | country |  | percent, good |  |
| global\_stone\_output\_modifier | Stone Output | country | multiplicative | percent, good |  |
| global\_stone\_pop\_demand | National Stone Demand | country |  | percent, good |  |
| global\_sugar\_output\_modifier | Sugar Output | country | multiplicative | percent, good |  |
| global\_sugar\_pop\_demand | National Sugar Demand | country |  | percent, good |  |
| global\_supply\_limit\_modifier | Supply Limit | country | multiplicative | percent, good |  |
| global\_tar\_output\_modifier | Tar Output | country | multiplicative | percent, good |  |
| global\_tar\_pop\_demand | National Tar Demand | country |  | percent, good |  |
| global\_tea\_output\_modifier | Tea Output | country | multiplicative | percent, good |  |
| global\_tea\_pop\_demand | National Tea Demand | country |  | percent, good |  |
| global\_tin\_output\_modifier | Tin Output | country | multiplicative | percent, good |  |
| global\_tin\_pop\_demand | National Tin Demand | country |  | percent, good |  |
| global\_tobacco\_output\_modifier | Tobacco Output | country | multiplicative | percent, good |  |
| global\_tobacco\_pop\_demand | National Tobacco Demand | country |  | percent, good |  |
| global\_tools\_output\_modifier | Tools Output | country | multiplicative | percent, good |  |
| global\_tools\_pop\_demand | National Tools Demand | country |  | percent, good |  |
| global\_trade\_center\_power | Market Attraction | country |  | percent, good |  |
| global\_trade\_protection\_factor | Market Protection | country |  | percent, good |  |
| global\_trade\_through\_owned\_territory\_efficiency | Trade Efficiency over Owned Land | country |  | percent, good |  |
| global\_trades\_per\_burgher | Burghers Trade Capacity | country |  | percent, good |  |
| global\_tribal\_promotion | Tribesmen to Peasants | country |  | percent, good |  |
| global\_tribes\_estate\_power | Tribes Power | country, *estate* |  | percent, bad |  |
| global\_tribesmen\_assimilation\_blocked | Assimilation of Tribesmen Blocked | country | boolean | bad |  |
| global\_tribesmen\_city\_desired\_pop | Possible Tribesmen in Towns and Cities | country |  | good |  |
| global\_tribesmen\_city\_desired\_pop\_scaled | Possible Tribesmen in Towns and Cities for each 1,000 population | country | scaled | percent, good |  |
| global\_tribesmen\_conversion\_blocked | Conversion of Tribesmen Blocked | country | boolean | bad |  |
| global\_tribesmen\_desired\_pop | Possible Tribesmen | country |  | good |  |
| global\_tribesmen\_desired\_pop\_scaled | Possible Tribesmen for each 1,000 population | country | scaled | percent, good |  |
| global\_tribesmen\_food\_consumption | Tribesmen Food Consumption | country |  | percent, bad |  |
| global\_tribesmen\_max\_literacy | Max Literacy for Tribesmen | country |  | raw percent, good |  |
| global\_tribesmen\_migration\_allowed | Allows Tribesmen to Migrate | country | boolean | good |  |
| global\_tribesmen\_pop\_growth | Tribesmen Growth | country |  | percent, good |  |
| global\_tribesmen\_rural\_desired\_pop | Possible Tribesmen in Rural Locations | country |  | good |  |
| global\_tribesmen\_rural\_desired\_pop\_scaled | Possible Tribesmen in Rural Locations for each 1,000 population | country | scaled | percent, good |  |
| global\_upper\_class\_capacity\_modifier | Upper-Class Population Capacity | country | multiplicative | percent, good |  |
| global\_urban\_build\_buildings\_efficiency | Urban Buildings Construction Efficiency | country |  | percent, good |  |
| global\_war\_score\_efficiency | War Score Efficiency | country |  | percent, good |  |
| global\_weaponry\_output\_modifier | Weaponry Output | country | multiplicative | percent, good |  |
| global\_weaponry\_pop\_demand | National Weaponry Demand | country |  | percent, good |  |
| global\_wheat\_output\_modifier | Wheat Output | country | multiplicative | percent, good |  |
| global\_wheat\_pop\_demand | National Wheat Demand | country |  | percent, good |  |
| global\_wild\_game\_output\_modifier | Wild Game Output | country | multiplicative | percent, good |  |
| global\_wild\_game\_pop\_demand | National Wild Game Demand | country |  | percent, good |  |
| global\_wine\_output\_modifier | Wine Output | country | multiplicative | percent, good |  |
| global\_wine\_pop\_demand | National Wine Demand | country |  | percent, good |  |
| global\_wool\_output\_modifier | Wool Output | country | multiplicative | percent, good |  |
| global\_wool\_pop\_demand | National Wool Demand | country |  | percent, good |  |
| gold\_importance\_modifier | Gold Importance Modifier | country | multiplicative | good |  |
| gold\_to\_building\_owner | Gold to Owner | location |  | good |  |
| gold\_to\_building\_owner\_overlord | Gold to Building Overlord | location |  | good |  |
| goods\_gold\_impacts\_inflation | Gold Impacts Inflation | country |  | percent, bad |  |
| goods\_gold\_used\_for\_minting | Gold Used for Coins | country | boolean | good |  |
| government\_reform\_slots | Possible Government Reforms | country |  | good |  |
| government\_size | Cabinet Seats | country |  | good |  |
| grand\_secretariat\_bureaucracy\_impact\_modifier | Grand Secretariat Impact | country | multiplicative | percent, good |  |
| grant\_a\_triumph\_cost\_modifier | Grant a Triumph | country | multiplicative | percent, bad |  |
| grant\_cabinet\_right\_price\_cost\_modifier | Grant Cabinet Right Cost Modifier | country | multiplicative | percent, bad |  |
| grant\_privilege\_cost\_modifier | Grant Privilege Cost | country | multiplicative | percent, bad |  |
| grant\_shugo\_office\_cost\_modifier | Grant Shugo Office Cost | country | multiplicative | percent, bad |  |
| grant\_town\_rights\_cost\_modifier | Cost of Granting Urban Rights | country | multiplicative | percent, bad |  |
| greek\_festivals\_cost\_modifier | Revitalize an Ancient Greek Festival | country | multiplicative | percent, bad |  |
| growth\_is\_primary\_culture | Only Primary & Accepted Pops can Grow | location | boolean | good |  |
| hanseatic\_member\_cost\_cost\_modifier | Hanseatic Membership Fees | country | multiplicative | percent, bad |  |
| hanseatic\_shipwright\_guild\_max\_level | Hanseatic Shipwright Guild Max Level | country | additive | good |  |
| harbor\_suitability | Harbor Capacity | location |  | good |  |
| harmony\_stability | Harmony Stability | country | boolean | good |  |
| has\_a\_parliamentary\_system | Has a Parliamentary System | country | boolean | good |  |
| has\_appanages\_subjects | Has Appanages | country | boolean | good |  |
| has\_ashta\_pradham\_council\_policies | Can Enact Ashta Pradham Policy | country | boolean | good |  |
| has\_codified\_laws | Can Codify Laws | country | boolean | good |  |
| has\_complacency\_effects | Complacency Impacts | country | boolean | bad |  |
| has\_cultural\_maintenance | Can Invest in Culture | country | boolean | good |  |
| has\_international\_parliament | Has International Parliament | internationalorganization | boolean | good |  |
| has\_panaqas | Has Panaqas | country | boolean | bad |  |
| has\_parliament\_seat | Parliament Seat | location | boolean | good |  |
| has\_road\_building | Road-building | country | boolean | good |  |
| has\_stability\_investment | Can Invest in Stability | country | boolean | good |  |
| has\_taluqdar\_tax\_collection | Has Taluqdar Tax Collection | country | boolean | good |  |
| head\_of\_cabinet\_promotion\_cost\_modifier | Head of the Cabinet Promotion Cost Modifier | country | multiplicative | percent, bad |  |
| heir\_of\_any\_religion | Heir of Any Religion | country | boolean | neutral |  |
| heir\_of\_same\_religion | Heir of Same Religion | country | boolean | neutral |  |
| heir\_of\_same\_religion\_group | Heir of Same Religion Group | country | boolean | neutral |  |
| hide\_from\_black\_death\_cost\_modifier | Hide from Black Death Cost | country | multiplicative | percent, bad |  |
| high\_king\_agenda\_impact | Agenda Impact for High King | internationalorganization |  | percent, good |  |
| high\_king\_can\_participate\_in\_parliament | High King in Parliament | internationalorganization | boolean | good |  |
| high\_kingship\_overthrow\_cost\_modifier | Overthrow High King Cost | country | multiplicative | percent, bad |  |
| high\_kingship\_reclaim\_land\_cost\_modifier | Reclaim High Kingship Land Cost | country | multiplicative | percent, bad |  |
| high\_kingship\_subjugate\_member\_cost\_modifier | Subjugate High Kingship Member Cost | country | multiplicative | percent, bad |  |
| high\_lakes\_proximity\_impact | High lakes Proximity Impact | country |  | percent, bad |  |
| hills\_proximity\_impact | Hills Proximity Impact | country |  | percent, bad |  |
| hills\_wasteland\_proximity\_impact | Hills Wasteland Proximity Impact | country |  | percent, bad |  |
| hire\_advisor\_cost\_modifier | Hire Advisor Cost | country | multiplicative | percent, bad |  |
| hire\_artist\_cost\_modifier | Hire Artist Cost | country | multiplicative | percent, bad |  |
| hire\_for\_cabinet\_efficiency | Hire to Cabinet Efficiency | character |  | percent, good |  |
| hire\_mercenary\_leader\_cost\_modifier | Hire Mercenary Leader Cost | country | multiplicative | percent, bad |  |
| hire\_mercenary\_premium\_cost\_modifier | Hire Mercenary Premium Cost | country | multiplicative | percent, bad |  |
| hire\_prisoners\_cost\_modifier | Hire Prisoners Cost | country | multiplicative | percent, bad |  |
| hire\_privateer\_cost\_modifier | Cost of Hiring Privateers | country | multiplicative | percent, bad |  |
| hold\_public\_kirishitan\_mass\_cost\_modifier | Cost of Hold Public Kirishitan Mass Action | country | multiplicative | percent, bad |  |
| honorary\_titles\_bureaucracy\_impact\_modifier | Honorary Titles Impact | country | multiplicative | percent, good |  |
| honoring\_alliance\_call\_cost\_modifier | Honoring Alliance Call Cost | country | multiplicative | percent, bad |  |
| horde\_unity\_hit\_at\_ruler\_death | Horde Unity Change on Ruler Death | country |  | good |  |
| horses\_impacts\_inflation | Horses Impacts Inflation | country |  | percent, good |  |
| horses\_used\_for\_minting | Horses Used for Coins | country | boolean | good |  |
| host\_olympiad\_cost\_modifier | Host Olympiad Cost Modifier | country | multiplicative | percent, bad |  |
| hostile\_diplomatic\_annexation\_efficiency | Hostile Diplomatic Annexation Efficiency | country |  | percent, good |  |
| hostile\_disembark\_time\_modifier | Hostile Disembark Time Modifier | location | multiplicative | percent, good |  |
| hostile\_fleet\_attrition | Hostile Naval Attrition | location |  | raw percent, bad |  |
| hostile\_food\_multiplier | Total Food Multiplier | location |  | raw percent, good |  |
| hostile\_movement\_cost | Hostile Movement Cost | location |  | percent, bad |  |
| hre\_allow\_female\_emperors | Allow Empresses | internationalorganization | boolean | good |  |
| hre\_army\_building\_cost\_modifier | Imperial Army Building Cost Modifier | country | multiplicative | percent, bad |  |
| hre\_emperor\_comfort\_policies\_counter | Emperor-Comfort Policies | internationalorganization |  | neutral |  |
| hre\_enable\_leave\_hre\_peace\_treaty | Enable Leave the Holy Roman Empire Peace | internationalorganization | boolean | good |  |
| hre\_imperial\_armory\_level | Imperial Army Building Available Level | internationalorganization |  | good |  |
| hre\_max\_archbishop\_elector | Max Archbishop-Elector | internationalorganization |  | neutral |  |
| hre\_max\_elector | Max Prince-Elector | internationalorganization |  | neutral |  |
| hussite\_wars\_actions\_price\_cost\_modifier | Hussite Wars Situation Actions Cost Modifier | country | multiplicative | percent, bad |  |
| hyw\_main\_actions\_price\_cost\_modifier | Hundred Years' War Main Actions Cost | country | multiplicative | percent, bad |  |
| ignore\_doom | Ignores Doom | country | boolean | good |  |
| ignore\_gender\_block\_cabinet | Ignore Gender Limitation for Cabinet | character | boolean | good |  |
| ignore\_gender\_block\_leader | Ignore Gender Limitation for Military Command | character | boolean | good |  |
| ignore\_same\_religion\_colonial\_claim | Ignore Religious Colonial Claims | country | boolean | good |  |
| ignore\_zone\_of\_control | Ignore Zone of Control | country | boolean | good |  |
| ilkhan\_claimant\_agenda\_impact | Agenda Impact for Claimant to the Īlkhānān | internationalorganization |  | percent, good |  |
| ilkhan\_claimant\_can\_participate\_in\_parliament | Claimant to the Īlkhānān in Parliament | internationalorganization | boolean | good |  |
| imperial\_army\_contribution\_price\_cost\_modifier | Imperial Army Contribution Cost Modifier | country | multiplicative | percent, neutral |  |
| imperial\_authority\_modifier | Imperial Authority Modifier | all | multiplicative | percent, good |  |
| imperial\_ban\_allowed | Enable Imperial Ban | internationalorganization | boolean | good |  |
| imperial\_censorate\_bureaucracy\_impact\_modifier | Imperial Censorate Impact | country | multiplicative | percent, good |  |
| imperial\_contribution\_price\_cost\_modifier | Imperial Contribution Cost Modifier | country | multiplicative | percent, neutral |  |
| imperial\_peasant\_republic\_agenda\_impact | Agenda Impact for Imperial Peasant Republic | internationalorganization |  | percent, good |  |
| imperial\_peasant\_republic\_can\_participate\_in\_parliament | Imperial Peasant Republic in Parliament | internationalorganization | boolean | good |  |
| imperial\_prelate\_agenda\_impact | Agenda Impact for Imperial Prelate | internationalorganization |  | percent, good |  |
| imperial\_prelate\_can\_participate\_in\_parliament | Imperial Prelate in Parliament | internationalorganization | boolean | good |  |
| imperial\_prince\_agenda\_impact | Agenda Impact for Imperial Prince | internationalorganization |  | percent, good |  |
| imperial\_prince\_can\_participate\_in\_parliament | Imperial Prince in Parliament | internationalorganization | boolean | good |  |
| imperial\_senate\_bureaucracy\_impact\_modifier | Imperial Senate Impact | country | multiplicative | percent, good |  |
| imperial\_treasury\_contribution\_price\_cost\_modifier | Imperial Treasury Contribution Cost Modifier | country | multiplicative | percent, neutral |  |
| implement\_bureaucracy\_price\_cost\_modifier | Implement Bureaucracy Price Modifier | country | multiplicative | percent, bad |  |
| import\_efficiency | Import Efficiency | country |  | percent, good |  |
| improve\_our\_cultural\_view\_price\_cost\_modifier | Improve our Cultural opinion Cost Modifier | country | multiplicative | percent, bad |  |
| improve\_relation\_impact | Improve Relations | country |  | percent, good |  |
| incense\_impacts\_inflation | Incense Impacts Inflation | country |  | percent, good |  |
| incense\_used\_for\_minting | Incense Used for Coins | country | boolean | good |  |
| increase\_clergy\_satisfaction\_from\_religious\_sects\_cost\_modifier | Cost of Appease the Temples Action | country | multiplicative | percent, bad |  |
| increase\_levies\_from\_shogun\_court\_cost\_modifier | Cost of Increase Levies Action | country | multiplicative | percent, bad |  |
| increase\_literacy\_from\_religious\_sects\_cost\_modifier | Cost of Increase Literacy Action | country | multiplicative | percent, bad |  |
| increase\_peasant\_satisfaction\_from\_ikko\_ikki\_cost\_modifier | Cost of Appease the Commoners Action | country | multiplicative | percent, bad |  |
| increase\_tax\_income\_from\_shogun\_court\_cost\_modifier | Cost of Increase Tax Income Action | country | multiplicative | percent, bad |  |
| indulge\_in\_bloodbath\_cost\_modifier | Indulge in Bloodbath Cost | country | multiplicative | percent, bad |  |
| indulge\_in\_feasts\_cost\_modifier | Indulge in Feasts Cost | country | multiplicative | percent, bad |  |
| inland\_sea\_proximity\_impact | Inland sea Proximity Impact | country |  | percent, bad |  |
| institution\_growth | Institution Growth | country |  | good |  |
| institution\_importance\_modifier | Institution Importance Modifier | country | multiplicative | good |  |
| intervene\_in\_italian\_campaign\_price\_cost\_modifier | Intervene in War Cost | country | multiplicative | percent, bad |  |
| inti\_ceremonial\_festivals\_cost\_modifier | Cost of Host a Ceremony Religious Action | country | multiplicative | percent, bad |  |
| invade\_neighbor\_beylik\_price\_cost\_modifier | Invade Neighbor Beylik Cost Modifier | country | multiplicative | percent, bad |  |
| invite\_artist\_cost\_modifier | Invite Artist Cost | country | multiplicative | percent, bad |  |
| invite\_foreign\_cleric\_cost\_modifier | Invite Foreign Cleric Cost | country | multiplicative | percent, bad |  |
| invite\_patriarch\_delegation\_cost\_modifier | Invite Patriarch Delegation Cost | country | multiplicative | percent, bad |  |
| invite\_religious\_figure\_different\_school\_cost\_modifier | Invite Religious Figure from New School Cost | country | multiplicative | percent, bad |  |
| invite\_religious\_figure\_same\_school\_cost\_modifier | Invite Religious Figure from Same School Cost | country | multiplicative | percent, bad |  |
| iron\_impacts\_inflation | Iron Impacts Inflation | country |  | percent, good |  |
| iron\_used\_for\_minting | Iron Used for Coins | country | boolean | good |  |
| irrigant\_cap\_level | Irrigation Max Level | country |  | good |  |
| is\_appointed\_as\_heir | Is Appointed as Heir | character | boolean | good |  |
| is\_battles\_preordained | Everything is Preordained | country | boolean | good |  |
| is\_excluded\_from\_electorship | Excluded from Electorship | country | boolean | bad |  |
| is\_head\_of\_cabinet | Is Head of the Cabinet | character | boolean | good |  |
| is\_hre\_elector | Is Elector | country | boolean | good |  |
| is\_immortal | Is Immortal | character | boolean | good |  |
| is\_pope | Is the Pope | country | boolean | good |  |
| is\_praefecta | Is Praefecta | character | boolean | good |  |
| is\_senior\_partner | Is Senior Partner | country | boolean | good |  |
| isolate\_cities\_black\_death\_cost\_modifier | Isolating the Cities Cost | country | multiplicative | percent, bad |  |
| italian\_league\_sponsor\_agenda\_impact | Agenda Impact for League Sponsor | internationalorganization |  | percent, good |  |
| italian\_league\_sponsor\_can\_participate\_in\_parliament | League Sponsor in Parliament | internationalorganization | boolean | good |  |
| italian\_league\_sponsor\_gold\_price\_cost\_modifier | League Gold Patronage Cost | country | multiplicative | percent, bad |  |
| italian\_league\_sponsor\_manpower\_price\_cost\_modifier | League Manpower Patronage Cost | country | multiplicative | percent, bad |  |
| ivory\_impacts\_inflation | Ivory Impacts Inflation | country |  | percent, good |  |
| ivory\_used\_for\_minting | Ivory Used for Coins | country | boolean | good |  |
| iw\_send\_aid\_price\_cost\_modifier | Send Aid Cost | country | multiplicative | percent, bad |  |
| japanese\_emperor\_agenda\_impact | Agenda Impact for Tennō | internationalorganization |  | percent, good |  |
| japanese\_emperor\_can\_participate\_in\_parliament | Tennō in Parliament | internationalorganization | boolean | good |  |
| jewelry\_impacts\_inflation | Jewelry Impacts Inflation | country |  | percent, good |  |
| jewelry\_used\_for\_minting | Jewelry Used for Coins | country | boolean | good |  |
| join\_autocephalous\_patriarchate\_cost\_modifier | Join Autocephalous Patriarchate Cost | country | multiplicative | percent, bad |  |
| join\_branch\_cost\_modifier | Join Branch Cost | country | multiplicative | percent, bad |  |
| join\_italian\_wars\_price\_cost\_modifier | Join a League Cost | country | multiplicative | percent, bad |  |
| join\_sect\_cost\_modifier | Join Sect Cost | country | multiplicative | bad |  |
| junior\_partner\_agenda\_impact | Agenda Impact for Junior Partner | internationalorganization |  | percent, good |  |
| junior\_partner\_can\_participate\_in\_parliament | Junior Partner in Parliament | internationalorganization | boolean | good |  |
| jurchen\_confederation\_law\_price\_cost\_modifier | Jurchen Confederation Law Cost | country | multiplicative | percent, bad |  |
| keep\_kami\_and\_buddha\_balanced\_from\_religious\_sects\_cost\_modifier | Cost of Balance Kami and Buddha Action | country | multiplicative | percent, bad |  |
| kephalai\_bureaucracy\_impact\_modifier | Kephalai Impact | country | multiplicative | percent, good |  |
| lack\_of\_control\_impact\_on\_warscore | Control Impact on Warscore | country |  | percent, good |  |
| lacquerware\_impacts\_inflation | Lacquerware Impacts Inflation | country |  | percent, good |  |
| lacquerware\_used\_for\_minting | Lacquerware Used for Coins | country | boolean | good |  |
| lakes\_proximity\_impact | Lakes Proximity Impact | country |  | percent, bad |  |
| land\_cost\_going\_downstream | Proximity Cost of going downstream along a River | country |  | bad |  |
| land\_cost\_going\_upstream | Proximity Cost of going upstream along a River | country |  | bad |  |
| land\_cost\_on\_distance\_from\_capital | Land Proximity Cost without infrastructure | country |  | bad |  |
| land\_cost\_on\_distance\_from\_capital\_speed\_propagation | Proximity Efficiency through Land | country |  | percent, good |  |
| land\_cost\_on\_frozen\_water | Proximity Cost on Frozen Water | country |  | bad |  |
| land\_morale | Army Morale | unit |  | good |  |
| land\_morale\_attrition\_cost | Army Morale Attrition Cost | unit |  | percent, bad |  |
| land\_morale\_modifier | Army Morale | unit | multiplicative | percent, good |  |
| land\_morale\_movement\_cost | Army Morale Movement Cost | unit |  | percent, bad |  |
| land\_morale\_recovery | Army Morale Recovery Speed | unit |  | percent, good |  |
| land\_unit\_attrition | Army Attrition | unit |  | percent, bad |  |
| landfriede\_cooldown | Landfriede Time Delay | country |  | bad |  |
| landfriede\_flat\_cost | Landfriede Cost | country |  | bad |  |
| language\_change\_threshold\_modifier | Language Change Threshold Modifier | country | multiplicative | good |  |
| lat\_access\_to\_latin\_reintegration\_cabinet | Reintegrate Province Cabinet Action | country | boolean | good |  |
| lat\_access\_to\_reconquest\_cb | Can Create Latin Reconquest Casus Belli | country | boolean | good |  |
| lead\_impacts\_inflation | Lead Impacts Inflation | country |  | percent, good |  |
| lead\_used\_for\_minting | Lead Used for Coins | country | boolean | good |  |
| learn\_from\_foreigners\_cost\_modifier | Learn from Foreigners | country | multiplicative | percent, good |  |
| leather\_impacts\_inflation | Leather Impacts Inflation | country |  | percent, good |  |
| leather\_used\_for\_minting | Leather Used for Coins | country | boolean | good |  |
| leave\_sect\_cost\_modifier | Leave Sect Cost | country | multiplicative | bad |  |
| legatus\_natus\_agenda\_impact | Agenda Impact for Legatus Natus | internationalorganization |  | percent, good |  |
| legatus\_natus\_can\_participate\_in\_parliament | Legatus Natus in Parliament | internationalorganization | boolean | good |  |
| legislative\_efficiency | Legislative Efficiency | country |  | percent, good |  |
| legumes\_impacts\_inflation | Legumes Impacts Inflation | country |  | percent, good |  |
| legumes\_used\_for\_minting | Legumes Used for Coins | country | boolean | good |  |
| levy\_combat\_efficiency\_modifier | Levy Combat Efficiency | unit | multiplicative | percent, good |  |
| levy\_maintenance\_modifier | Levy Maintenance | country | multiplicative | percent, bad |  |
| levy\_recovery\_modifier | Levy Recovery | unit | multiplicative | percent, good |  |
| lia\_actions\_price\_cost\_modifier | Little Ice Age Situation Actions Cost | country | multiplicative | percent, bad |  |
| lieutenant\_agenda\_impact | Agenda Impact for Lieutenant | internationalorganization |  | percent, good |  |
| lieutenant\_can\_participate\_in\_parliament | Lieutenant in Parliament | internationalorganization | boolean | good |  |
| limit\_movement\_of\_kirishitan\_cost\_modifier | Cost of Limit Kirishitan Movement Action | country | multiplicative | percent, bad |  |
| liquor\_impacts\_inflation | Liquor Impacts Inflation | country |  | percent, good |  |
| liquor\_used\_for\_minting | Liquor Used for Coins | country | boolean | good |  |
| livestock\_impacts\_inflation | Livestock Impacts Inflation | country |  | percent, good |  |
| livestock\_used\_for\_minting | Livestock Used for Coins | country | boolean | good |  |
| loan\_icon\_price\_cost\_modifier | Loan Icon Price Cost Modifier | country | multiplicative | percent, bad |  |
| local\_alum\_output\_modifier | Local Alum Output | location | multiplicative | percent, good |  |
| local\_amber\_output\_modifier | Local Amber Output | location | multiplicative | percent, good |  |
| local\_army\_attrition | Army Attrition | location |  | raw percent, bad |  |
| local\_army\_levy\_size\_modifier | Army Levy Size | location | multiplicative | percent, good |  |
| local\_beer\_output\_modifier | Local Beer Output | location | multiplicative | percent, good |  |
| local\_beeswax\_output\_modifier | Beeswax Output | location | multiplicative | percent, good |  |
| local\_books\_output\_modifier | Local Books Output | location | multiplicative | percent, good |  |
| local\_bubonic\_plague\_growth\_modifier | Bubonic Plague Growth | location | multiplicative | percent, good |  |
| local\_bubonic\_plague\_impact\_modifier | Bubonic Plague Impact | location | multiplicative | percent, bad |  |
| local\_bubonic\_plague\_resistance\_modifier | Bubonic Plague Resistance | location | multiplicative | percent, good |  |
| local\_build\_buildings\_efficiency | Buildings Construction Efficiency | location |  | percent, good |  |
| local\_build\_new\_buildings\_efficiency | New Buildings Construction Efficiency | location |  | percent, good |  |
| local\_building\_establishment\_reduction | Building Establishment Reduction | location |  | bad |  |
| local\_building\_establishment\_speed | Building Establishment Speed | location |  | percent, good |  |
| local\_burghers\_assimilation\_blocked | Assimilation of Burghers Blocked | location | boolean | bad |  |
| local\_burghers\_conversion\_blocked | Conversion of Burghers Blocked | location | boolean | bad |  |
| local\_burghers\_desired\_pop | Possible Burghers | location |  | good |  |
| local\_burghers\_desired\_pop\_scaled | Possible Burghers for each 1,000 population | location | scaled | percent, good |  |
| local\_burghers\_estate\_power | Local Burghers Power | location, *estate* |  | percent, bad |  |
| local\_burghers\_estate\_unrest | Burghers Unrest | location, *estate* |  | percent, bad |  |
| local\_burghers\_food\_consumption | Local Burghers Food Consumption | location |  | percent, bad |  |
| local\_burghers\_max\_literacy | Local Max Literacy for Burghers | location |  | raw percent, good |  |
| local\_burghers\_migration\_allowed | Allows Burghers to Migrate | location | boolean | good |  |
| local\_burghers\_pop\_growth | Burghers Growth | location |  | percent, good |  |
| local\_calvinism\_movement\_growth\_modifier | Calvinism Growth Modifier | location | multiplicative | percent, good |  |
| local\_calvinism\_movement\_resistance\_modifier | Calvinism Resistance Modifier | location | multiplicative | percent, good |  |
| local\_cannons\_output\_modifier | Local Cannon Output | location | multiplicative | percent, good |  |
| local\_chili\_output\_modifier | Chili Output | location | multiplicative | percent, good |  |
| local\_clay\_output\_modifier | Local Clay Output | location | multiplicative | percent, good |  |
| local\_clergy\_assimilation\_blocked | Assimilation of Clerics Blocked | location | boolean | bad |  |
| local\_clergy\_conversion\_blocked | Conversion of Clerics Blocked | location | boolean | bad |  |
| local\_clergy\_desired\_pop | Possible Clerics | location |  | good |  |
| local\_clergy\_desired\_pop\_scaled | Possible Clerics for each 1,000 population | location | scaled | percent, good |  |
| local\_clergy\_estate\_power | Local Clergy Power | location, *estate* |  | percent, bad |  |
| local\_clergy\_estate\_unrest | Clergy Unrest | location, *estate* |  | percent, bad |  |
| local\_clergy\_food\_consumption | Local Clergy Food Consumption | location |  | percent, bad |  |
| local\_clergy\_max\_literacy | Local Max Literacy for Clergy | location |  | raw percent, good |  |
| local\_clergy\_migration\_allowed | Allows Clerics to Migrate | location | boolean | good |  |
| local\_clergy\_pop\_growth | Clerics Growth | location |  | percent, good |  |
| local\_cloth\_guild\_building\_levels | Cloth Guild Building Levels | location |  | good |  |
| local\_cloth\_output\_modifier | Local Cloth Output | location | multiplicative | percent, good |  |
| local\_cloves\_output\_modifier | Cloves Output | location | multiplicative | percent, good |  |
| local\_coal\_output\_modifier | Local Coal Output | location | multiplicative | percent, good |  |
| local\_cocoa\_output\_modifier | Local Cocoa Output | location | multiplicative | percent, good |  |
| local\_coffee\_output\_modifier | Local Coffee Output | location | multiplicative | percent, good |  |
| local\_construction\_speed | Construction Speed | location |  | percent, good |  |
| local\_copper\_output\_modifier | Local Copper Output | location | multiplicative | percent, good |  |
| local\_cossacks\_estate\_power | Cossacks Power | location, *estate* |  | percent, bad |  |
| local\_cossacks\_estate\_unrest | Cossacks Unrest | location, *estate* |  | percent, bad |  |
| local\_cotton\_output\_modifier | Local Cotton Output | location | multiplicative | percent, good |  |
| local\_crown\_estate\_power | Local Crown Power | location, *estate* |  | percent, good |  |
| local\_crown\_estate\_unrest | Crown Unrest | location, *estate* |  | percent, bad |  |
| local\_cultural\_influence | Local Cultural Influence | location |  | good |  |
| local\_cultural\_tradition | Cultural Tradition | location |  | good |  |
| local\_defensive | Fort Defense | location |  | percent, good |  |
| local\_devastation\_recovery | Prosperity Recovery | location |  | percent, good |  |
| local\_dhimmi\_estate\_power | Local Ḏimmī Power | location, *estate* |  | percent, bad |  |
| local\_dhimmi\_estate\_unrest | Dhimmi Unrest | location, *estate* |  | percent, bad |  |
| local\_disease\_resistance | Disease Resistance | location |  | percent, good |  |
| local\_distance\_from\_capital\_speed\_propagation | Local Proximity Efficiency | location |  | percent, good |  |
| local\_dyes\_output\_modifier | Local Dyes Output | location | multiplicative | percent, good |  |
| local\_elephants\_output\_modifier | Local Elephants Output | location | multiplicative | percent, good |  |
| local\_fiber\_crops\_output\_modifier | Local Fiber Crops Output | location | multiplicative | percent, good |  |
| local\_fine\_cloth\_guild\_building\_levels | Fine Cloth Guild Building Levels | location |  | good |  |
| local\_fine\_cloth\_output\_modifier | Local Fine Cloth Output | location | multiplicative | percent, good |  |
| local\_firearms\_output\_modifier | Local Firearms Output | location | multiplicative | percent, good |  |
| local\_fish\_output\_modifier | Local Fish Output | location | multiplicative | percent, good |  |
| local\_food\_capacity | Local Food Capacity | location |  | good |  |
| local\_food\_capacity\_modifier | Local Food Capacity | location | multiplicative | percent, good |  |
| local\_food\_decay | Food Decay | location |  | percent, bad |  |
| local\_food\_decay\_modifier | Food Decay | location | multiplicative | percent, bad |  |
| local\_forced\_attrition | Unavoidable Attrition | location |  | bad |  |
| local\_fort\_maintenance\_efficiency | Fortification Maintenance Efficiency | location |  | percent, good |  |
| local\_frontage\_allowed | Possible Frontage | location |  | good |  |
| local\_fruit\_output\_modifier | Local Fruit Output | location | multiplicative | percent, good |  |
| local\_fur\_output\_modifier | Local Fur Output | location | multiplicative | percent, good |  |
| local\_furniture\_output\_modifier | Furniture Output | location | multiplicative | percent, good |  |
| local\_garrison\_growth | Garrison Growth | location |  | percent, good |  |
| local\_garrison\_size | Garrison Size | location |  | good |  |
| local\_gems\_output\_modifier | Local Gems Output | location | multiplicative | percent, good |  |
| local\_glass\_output\_modifier | Local Glass Output | location | multiplicative | percent, good |  |
| local\_goods\_gold\_output\_modifier | Local Gold Output | location | multiplicative | percent, good |  |
| local\_great\_pestilence\_growth\_modifier | Great Pestilence Growth | location | multiplicative | percent, good |  |
| local\_great\_pestilence\_impact\_modifier | Great Pestilence Impact | location | multiplicative | percent, bad |  |
| local\_great\_pestilence\_resistance\_modifier | Great Pestilence Resistance | location | multiplicative | percent, good |  |
| local\_heathen\_pop\_conversion\_speed\_modifier | Local Heathen Pop Conversion Speed % | location | multiplicative | percent, good |  |
| local\_hellenism\_religion\_movement\_growth\_modifier | Local Platonic Revival Movement Growth Modifier | location | multiplicative | percent, good |  |
| local\_hellenism\_religion\_movement\_impact\_modifier | Platonic Revival Impact Modifier | location | multiplicative | percent, good |  |
| local\_hellenism\_religion\_movement\_resistance\_modifier | Local Platonic Revival Movement Resistance Modifier | location | multiplicative | percent, good |  |
| local\_heretic\_pop\_conversion\_speed\_modifier | Local Heretic Pop Conversion Speed % | location | multiplicative | percent, good |  |
| local\_horses\_output\_modifier | Local Horses Output | location | multiplicative | percent, good |  |
| local\_hostile\_attrition | Hostile Attrition | location |  | raw percent, bad |  |
| local\_incense\_output\_modifier | Local Incense Output | location | multiplicative | percent, good |  |
| local\_influenza\_growth\_modifier | Influenza Growth | location | multiplicative | percent, good |  |
| local\_influenza\_impact\_modifier | Influenza Impact | location | multiplicative | percent, bad |  |
| local\_influenza\_resistance\_modifier | Influenza Resistance | location | multiplicative | percent, good |  |
| local\_institution\_growth\_modifier | Institution Growth | location | multiplicative | percent, good |  |
| local\_integration\_speed | Speed of Integration | location |  | good |  |
| local\_integration\_speed\_modifier | Speed of Integration | location | multiplicative | percent, good |  |
| local\_iron\_output\_modifier | Local Iron Output | location | multiplicative | percent, good |  |
| local\_ivory\_output\_modifier | Local Ivory Output | location | multiplicative | percent, good |  |
| local\_jewelry\_guild\_building\_levels | Jewelry Guild Building Levels | location |  | good |  |
| local\_jewelry\_output\_modifier | Local Jewelry Output | location | multiplicative | percent, good |  |
| local\_laborers\_assimilation\_blocked | Assimilation of Laborers Blocked | location | boolean | bad |  |
| local\_laborers\_conversion\_blocked | Conversion of Laborers Blocked | location | boolean | bad |  |
| local\_laborers\_desired\_pop | Possible Laborers | location |  | good |  |
| local\_laborers\_desired\_pop\_scaled | Possible Laborers for each 1,000 population | location | scaled | percent, good |  |
| local\_laborers\_food\_consumption | Laborers Food Consumption | location |  | percent, bad |  |
| local\_laborers\_max\_literacy | Local Max Literacy for Laborers | location |  | raw percent, good |  |
| local\_laborers\_migration\_allowed | Allows Laborers to Migrate | location | boolean | good |  |
| local\_laborers\_pop\_growth | Laborers Growth | location |  | percent, good |  |
| local\_lacquerware\_output\_modifier | Local Lacquerware Output | location | multiplicative | percent, good |  |
| local\_lead\_output\_modifier | Local Lead Output | location | multiplicative | percent, good |  |
| local\_leather\_output\_modifier | Local Leather Output | location | multiplicative | percent, good |  |
| local\_legumes\_output\_modifier | Local Legumes Output | location | multiplicative | percent, good |  |
| local\_levy\_recruitment\_speed\_modifier | Levy Recruitment Speed | location | multiplicative | percent, good |  |
| local\_levy\_size\_modifier | Levy Size | location | multiplicative | percent, good |  |
| local\_life\_expectancy | Character Life Expectancy | location |  | good |  |
| local\_liquor\_output\_modifier | Local Liquor Output | location | multiplicative | percent, good |  |
| local\_livestock\_output\_modifier | Local Livestock Output | location | multiplicative | percent, good |  |
| local\_lumber\_output\_modifier | Local Lumber Output | location | multiplicative | percent, good |  |
| local\_lutheranism\_movement\_growth\_modifier | Lutheranism Growth Modifier | location | multiplicative | percent, good |  |
| local\_lutheranism\_movement\_resistance\_modifier | Lutheranism Resistance Modifier | location | multiplicative | percent, good |  |
| local\_maize\_output\_modifier | Local Maize Output | location | multiplicative | percent, good |  |
| local\_malaria\_growth\_modifier | Malaria Growth | location | multiplicative | percent, good |  |
| local\_malaria\_impact\_modifier | Malaria Impact | location | multiplicative | percent, bad |  |
| local\_malaria\_resistance\_modifier | Malaria Resistance | location | multiplicative | percent, good |  |
| local\_manpower | Monthly Manpower | location |  | good |  |
| local\_manpower\_modifier | Monthly Manpower | location | multiplicative | percent, good |  |
| local\_marble\_output\_modifier | Marble Output | location | multiplicative | percent, good |  |
| local\_maritime\_presence | Local Maritime Presence | location |  | good |  |
| local\_market\_access | Market Access | location |  | percent, good |  |
| local\_marketplace\_building\_levels | Marketplace Building Levels | location |  | good |  |
| local\_masonry\_output\_modifier | Masonry Output | location | multiplicative | percent, good |  |
| local\_max\_control | Max Control | location |  | percent, good |  |
| local\_max\_literacy | Local Max Literacy | location |  | raw percent, good |  |
| local\_max\_rgo\_size | Maximum RGO Size | location |  | good |  |
| local\_max\_rgo\_size\_modifier | Maximum RGO Size | location | multiplicative | percent, good |  |
| local\_max\_rural\_control | Max Rural Control | location |  | percent, good |  |
| local\_max\_urban\_control | Max Urban Control | location |  | percent, good |  |
| local\_may\_build\_nahuatl\_units | May Build Eagle and Jaguar Warriors | location | boolean | good |  |
| local\_may\_build\_north\_american\_units | May Build North American Warriors | location | boolean | good |  |
| local\_measles\_growth\_modifier | Measles Growth | location | multiplicative | percent, good |  |
| local\_measles\_impact\_modifier | Measles Impact | location | multiplicative | percent, bad |  |
| local\_measles\_resistance\_modifier | Measles Resistance | location | multiplicative | percent, good |  |
| local\_medicaments\_output\_modifier | Local Medicaments Output | location | multiplicative | percent, good |  |
| local\_mercenaries\_modifier | Mercenary Size | location | multiplicative | percent, neutral |  |
| local\_merchant\_capacity | Trade Capacity | location |  | good |  |
| local\_merchant\_capacity\_modifier | Trade Capacity | location | multiplicative | percent, good |  |
| local\_merchant\_power | Trade Advantage | location |  | good |  |
| local\_mercury\_output\_modifier | Mercury Output | location | multiplicative | percent, good |  |
| local\_migration\_attraction | Migration Attraction | location |  | good |  |
| local\_migration\_speed | Pop Migration Speed | location |  | good |  |
| local\_migration\_speed\_modifier | Pop Migration Speed | location | multiplicative | percent, good |  |
| local\_millet\_output\_modifier | Local Sturdy Grains Output | location | multiplicative | percent, good |  |
| local\_mills\_build\_buildings\_efficiency | Local Mills Construction Efficiency | location |  | percent, good |  |
| local\_monthly\_control | Monthly Control | location |  | percent, good |  |
| local\_monthly\_control\_decline | Monthly Control Decline | location |  | percent, bad |  |
| local\_monthly\_development | Local Monthly Development | location |  | good |  |
| local\_monthly\_development\_modifier | Local Monthly Development Growth | location | multiplicative | percent, good |  |
| local\_monthly\_food | Local Food Production | location |  | good |  |
| local\_monthly\_food\_modifier | Local Food Production % | location | multiplicative | percent, good |  |
| local\_monthly\_literacy | Local Monthly Literacy | location |  | raw percent, good |  |
| local\_monthly\_prosperity | Local Monthly Prosperity | location |  | percent, good |  |
| local\_monthly\_rural\_control | Monthly Rural Control | location |  | percent, good |  |
| local\_monthly\_urban\_control | Monthly Urban Control | location |  | percent, good |  |
| local\_naval\_supplies\_output\_modifier | Local Naval Supplies Output | location | multiplicative | percent, good |  |
| local\_navy\_attrition | Naval Attrition | location |  | bad |  |
| local\_navy\_levy\_size\_modifier | Navy Levy Size | location | multiplicative | percent, good |  |
| local\_nobles\_assimilation\_blocked | Assimilation of Nobles Blocked | location | boolean | bad |  |
| local\_nobles\_conversion\_blocked | Conversion of Nobles Blocked | location | boolean | bad |  |
| local\_nobles\_desired\_pop | Possible Nobles | location |  | good |  |
| local\_nobles\_desired\_pop\_scaled | Possible Nobles for each 1,000 population | location | scaled | percent, good |  |
| local\_nobles\_estate\_power | Local Nobles Power | location, *estate* |  | percent, bad |  |
| local\_nobles\_estate\_unrest | Nobility Unrest | location, *estate* |  | percent, bad |  |
| local\_nobles\_food\_consumption | Local Nobles Food Consumption | location |  | percent, bad |  |
| local\_nobles\_max\_literacy | Local Max Literacy for Nobles | location |  | raw percent, good |  |
| local\_nobles\_migration\_allowed | Allows Nobles to Migrate | location | boolean | good |  |
| local\_nobles\_pop\_growth | Nobles Growth | location |  | percent, good |  |
| local\_olives\_output\_modifier | Local Olives Output | location | multiplicative | percent, good |  |
| local\_paper\_output\_modifier | Local Paper Output | location | multiplicative | percent, good |  |
| local\_pearls\_output\_modifier | Local Pearls Output | location | multiplicative | percent, good |  |
| local\_peasant\_enfranchisment | Peasant Enfranchisement | location |  | percent, good |  |
| local\_peasants\_assimilation\_blocked | Assimilation of Peasants Blocked | location | boolean | bad |  |
| local\_peasants\_conversion\_blocked | Conversion of Peasants Blocked | location | boolean | bad |  |
| local\_peasants\_desired\_pop | Possible Peasants | location |  | good |  |
| local\_peasants\_desired\_pop\_scaled | Possible Peasants for each 1,000 population | location | scaled | percent, good |  |
| local\_peasants\_estate\_power | Local Peasants Power | location, *estate* |  | percent, bad |  |
| local\_peasants\_estate\_unrest | Commoners Unrest | location, *estate* |  | percent, bad |  |
| local\_peasants\_food\_consumption | Local Peasants Food Consumption | location |  | percent, bad |  |
| local\_peasants\_max\_literacy | Local Max Literacy for Peasants | location |  | raw percent, good |  |
| local\_peasants\_migration\_allowed | Allows Peasants to Migrate | location | boolean | good |  |
| local\_peasants\_pop\_growth | Peasants Growth | location |  | percent, good |  |
| local\_pepper\_output\_modifier | Pepper Output | location | multiplicative | percent, good |  |
| local\_pirate\_spawn\_chance | Chance for Pirates | location |  | raw percent, bad |  |
| local\_pop\_assimilation\_speed | Pop Assimilation Speed | location |  | good |  |
| local\_pop\_assimilation\_speed\_modifier | Pop Assimilation Speed | location | multiplicative | percent, good |  |
| local\_pop\_conversion\_speed | Local Pop Conversion Speed | location |  | good |  |
| local\_pop\_conversion\_speed\_modifier | Local Pop Conversion Speed % | location | multiplicative | percent, good |  |
| local\_pop\_demand | Local Pop Goods Demand | location |  | percent, good |  |
| local\_pop\_demotion\_speed | Pop Demotion Speed | location |  | bad |  |
| local\_pop\_demotion\_speed\_modifier | Pop Demotion Speed | location | multiplicative | percent, bad |  |
| local\_pop\_food\_consumption | Local Pop Food Consumption | location |  | percent, bad |  |
| local\_pop\_join\_rebel\_threshold | Pop Join Rebels Threshold | location |  | percent, bad |  |
| local\_pop\_leave\_rebels\_threshold | Pop Leave Rebels Threshold | location |  | percent, bad |  |
| local\_pop\_promotion\_speed | Local Pop Promotion Speed | location |  | good |  |
| local\_pop\_promotion\_speed\_modifier | Local Pop Promotion Speed % | location | multiplicative | percent, good |  |
| local\_pop\_promotion\_speed\_scaled | Local Pop Promotion Speed % | location | scaled | good |  |
| local\_population\_capacity | Local Population Capacity | location |  | good |  |
| local\_population\_capacity\_modifier | Local Population Capacity % | location | multiplicative | percent, good |  |
| local\_population\_growth | Population Growth | location |  | percent, good |  |
| local\_porcelain\_output\_modifier | Local Porcelain Output | location | multiplicative | percent, good |  |
| local\_port\_build\_buildings\_efficiency | Port Construction Efficiency | location |  | percent, good |  |
| local\_port\_cost\_distance\_impact | Proximity Impact through Port | location |  | percent, bad |  |
| local\_possible\_town\_rights | Possible Urban Rights | location |  | good |  |
| local\_potato\_output\_modifier | Local Potatoes Output | location | multiplicative | percent, good |  |
| local\_pottery\_output\_modifier | Pottery Output | location | multiplicative | percent, good |  |
| local\_production\_efficiency | Production Efficiency | location |  | percent, good |  |
| local\_prosperity\_decay | Prosperity Decay | location |  | percent, bad |  |
| local\_proximity\_source | Local Proximity Source | location |  | good |  |
| local\_raw\_material\_output | Raw Materials Output | location |  | percent, good |  |
| local\_repair\_speed | Navy Repair Speed | location |  | percent, good |  |
| local\_rgo\_build\_time | Expanding Raw Materials Time | location |  | percent, bad |  |
| local\_rice\_output\_modifier | Local Rice Output | location | multiplicative | percent, good |  |
| local\_road\_building\_time | Road Building Time | location |  | percent, bad |  |
| local\_roman\_culture\_movement\_growth\_modifier | Local Latin Revival Movement Growth Modifier | location | multiplicative | percent, good |  |
| local\_roman\_culture\_movement\_resistance\_modifier | Local Latin Revival Movement Resistance Modifier | location | multiplicative | percent, good |  |
| local\_saffron\_output\_modifier | Saffron Output | location | multiplicative | percent, good |  |
| local\_sailors | Monthly Sailors | location |  | good |  |
| local\_sailors\_modifier | Monthly Sailors | location | multiplicative | percent, good |  |
| local\_salt\_output\_modifier | Local Salt Output | location | multiplicative | percent, good |  |
| local\_saltpeter\_output\_modifier | Local Saltpeter Output | location | multiplicative | percent, good |  |
| local\_sand\_output\_modifier | Local Sand Output | location | multiplicative | percent, good |  |
| local\_separatism | Separatism | location |  | percent, bad |  |
| local\_ship\_build\_speed | Local Ship-building Speed | location |  | percent, good |  |
| local\_silk\_output\_modifier | Local Silk Output | location | multiplicative | percent, good |  |
| local\_silver\_output\_modifier | Local Silver Output | location | multiplicative | percent, good |  |
| local\_slave\_pop\_satisfaction | Satisfaction of Slaves | location |  | percent, good |  |
| local\_slaves\_assimilation\_blocked | Assimilation of Slaves Blocked | location | boolean | bad |  |
| local\_slaves\_conversion\_blocked | Conversion of Slaves Blocked | location | boolean | bad |  |
| local\_slaves\_desired\_pop | Possible Slaves | location |  | good |  |
| local\_slaves\_desired\_pop\_scaled | Possible Slaves for each 1,000 population | location | scaled | percent, good |  |
| local\_slaves\_food\_consumption | Local Slaves Food Consumption | location |  | percent, bad |  |
| local\_slaves\_goods\_output\_modifier | Local Slaves Output | location | multiplicative | percent, good |  |
| local\_slaves\_max\_literacy | Local Max Literacy for Slaves | location |  | raw percent, good |  |
| local\_slaves\_migration\_allowed | Allows Slaves to Migrate | location | boolean | good |  |
| local\_slaves\_pop\_growth | Slaves Growth | location |  | percent, good |  |
| local\_smallpox\_growth\_modifier | Smallpox Growth | location | multiplicative | percent, good |  |
| local\_smallpox\_impact\_modifier | Smallpox Impact | location | multiplicative | percent, bad |  |
| local\_smallpox\_resistance\_modifier | Smallpox Resistance | location | multiplicative | percent, good |  |
| local\_soldiers\_assimilation\_blocked | Assimilation of Soldiers Blocked | location | boolean | bad |  |
| local\_soldiers\_conversion\_blocked | Conversion of Soldiers Blocked | location | boolean | bad |  |
| local\_soldiers\_desired\_pop | Possible Soldiers | location |  | good |  |
| local\_soldiers\_desired\_pop\_scaled | Possible Soldiers for each 1,000 population | location | scaled | percent, good |  |
| local\_soldiers\_food\_consumption | Soldiers Food Consumption | location |  | percent, bad |  |
| local\_soldiers\_max\_literacy | Local Max Literacy for Soldiers | location |  | raw percent, good |  |
| local\_soldiers\_migration\_allowed | Allows Soldiers to Migrate | location | boolean | good |  |
| local\_soldiers\_pop\_growth | Soldiers Growth | location |  | percent, good |  |
| local\_steel\_output\_modifier | Local Steel Output | location | multiplicative | percent, good |  |
| local\_stone\_output\_modifier | Local Stone Output | location | multiplicative | percent, good |  |
| local\_sugar\_output\_modifier | Local Sugar Output | location | multiplicative | percent, good |  |
| local\_supply\_limit\_modifier | Supply Limit | location | multiplicative | percent, good |  |
| local\_tar\_output\_modifier | Local Tar Output | location | multiplicative | percent, good |  |
| local\_tea\_output\_modifier | Local Tea Output | location | multiplicative | percent, good |  |
| local\_tin\_output\_modifier | Local Tin Output | location | multiplicative | percent, good |  |
| local\_tobacco\_output\_modifier | Local Tobacco Output | location | multiplicative | percent, good |  |
| local\_tools\_output\_modifier | Local Tools Output | location | multiplicative | percent, good |  |
| local\_trade\_center\_power | Market Attraction | location |  | percent, good |  |
| local\_trade\_embark\_disembark\_efficiency | Trade Embark/Disembark Efficiency | location |  | percent, good |  |
| local\_trade\_protection\_factor | Local Market Protection | location |  | percent, good |  |
| local\_trades\_per\_burgher | Burghers Trade Capacity | location |  | percent, good |  |
| local\_tribal\_promotion | Tribesmen to Peasants | location |  | percent, good |  |
| local\_tribes\_estate\_power | Tribes Power | location, *estate* |  | percent, bad |  |
| local\_tribes\_estate\_unrest | Tribes Unrest | location, *estate* |  | percent, bad |  |
| local\_tribesmen\_assimilation\_blocked | Assimilation of Tribesmen Blocked | location | boolean | bad |  |
| local\_tribesmen\_conversion\_blocked | Conversion of Tribesmen Blocked | location | boolean | bad |  |
| local\_tribesmen\_desired\_pop | Possible Tribesmen | location |  | good |  |
| local\_tribesmen\_desired\_pop\_scaled | Possible Tribesmen for each 1,000 population | location | scaled | percent, good |  |
| local\_tribesmen\_food\_consumption | Tribesmen Food Consumption | location |  | percent, bad |  |
| local\_tribesmen\_max\_literacy | Local Max Literacy for Tribesmen | location |  | raw percent, good |  |
| local\_tribesmen\_migration\_allowed | Allows Tribesmen to Migrate | location | boolean | good |  |
| local\_tribesmen\_pop\_growth | Tribesmen Growth | location |  | percent, good |  |
| local\_typhus\_growth\_modifier | Typhus Growth | location | multiplicative | percent, good |  |
| local\_typhus\_impact\_modifier | Typhus Impact | location | multiplicative | percent, bad |  |
| local\_typhus\_resistance\_modifier | Typhus Resistance | location | multiplicative | percent, good |  |
| local\_unrest | Unrest | location |  | percent, bad |  |
| local\_upper\_class\_capacity\_modifier | Upper-Class Population Capacity | location | multiplicative | percent, good |  |
| local\_war\_score\_efficiency | War Score Efficiency | location |  | percent, good |  |
| local\_weaponry\_output\_modifier | Local Weaponry Output | location | multiplicative | percent, good |  |
| local\_wheat\_output\_modifier | Local Wheat Output | location | multiplicative | percent, good |  |
| local\_wild\_game\_output\_modifier | Local Wild Game Output | location | multiplicative | percent, good |  |
| local\_wine\_output\_modifier | Local Wine Output | location | multiplicative | percent, good |  |
| local\_wool\_output\_modifier | Local Wool Output | location | multiplicative | percent, good |  |
| lord\_of\_ireland\_agenda\_impact | Agenda Impact for Lord of Ireland | internationalorganization |  | percent, good |  |
| lord\_of\_ireland\_can\_participate\_in\_parliament | Lord of Ireland in Parliament | internationalorganization | boolean | good |  |
| lordship\_of\_ireland\_casus\_belli\_cost\_modifier | Acquire Casus Belli Cost | country | multiplicative | percent, bad |  |
| lordship\_of\_ireland\_form\_kingdom\_cost\_modifier | Claim the Kingdom Cost | country | multiplicative | percent, bad |  |
| lordship\_of\_ireland\_invite\_planters\_cost\_modifier | Request Planters Cost | country | multiplicative | percent, bad |  |
| losses\_to\_disease\_cost\_modifier | Cost of Losses to Disease | country | multiplicative | percent, bad |  |
| loyalist\_agenda\_impact | Agenda Impact for Loyalist | internationalorganization |  | percent, good |  |
| loyalist\_can\_participate\_in\_parliament | Loyalist in Parliament | internationalorganization | boolean | good |  |
| loyalty\_to\_overlord | Loyalty to Overlord | country |  | good |  |
| lumber\_impacts\_inflation | Lumber Impacts Inflation | country |  | percent, good |  |
| lumber\_used\_for\_minting | Lumber Used for Coins | country | boolean | good |  |
| lutheran\_preachers\_building\_cost\_modifier | Lutheran Preachers Building Cost | country | multiplicative | percent, bad |  |
| magister\_militum\_bureaucracy\_impact\_modifier | Strategarchia Impact | country | multiplicative | percent, good |  |
| maintain\_bureaucracy\_price\_cost\_modifier | Maintain Bureaucracy Price Modifier | country | multiplicative | percent, bad |  |
| maize\_impacts\_inflation | Maize Impacts Inflation | country |  | percent, good |  |
| maize\_used\_for\_minting | Maize Used for Coins | country | boolean | good |  |
| make\_tribals\_peasants | Promote Tribesmen | country | boolean | good |  |
| male\_spouses | Maximum Amount of Male Spouses | country |  | good |  |
| manpower\_importance\_modifier | Manpower Importance Modifier | country | multiplicative | good |  |
| manpower\_to\_building\_owner | Manpower to Owner | location |  | good |  |
| marble\_impacts\_inflation | Marble Impacts Inflation | country |  | percent, good |  |
| marble\_used\_for\_minting | Marble Used for Coins | country | boolean | good |  |
| market\_building\_levels | Trade Building Levels | country |  | percent, good |  |
| marriage\_desirability | Marriage Desirability | character |  | good |  |
| masonry\_impacts\_inflation | Masonry Impacts Inflation | country |  | percent, good |  |
| masonry\_used\_for\_minting | Masonry Used for Coins | country | boolean | good |  |
| max\_attrition | Maximum Attrition | location |  | bad |  |
| max\_bonds | Maximum Government Bonds | country |  | good |  |
| max\_bonds\_modifier | Maximum Government Bonds Modifier | country | multiplicative | percent, good |  |
| max\_constructions\_at\_same\_time | Constructions Capacity | location |  | good |  |
| max\_diplomats | Maximum Diplomats | country |  | good |  |
| max\_manpower | Max Manpower | country |  | good |  |
| max\_regiments\_trained\_at\_same\_time | Regiment Training Capacity | location |  | good |  |
| max\_sailors | Max Sailors | country |  | good |  |
| max\_ships\_built\_at\_same\_time | Ship-building Capacity | location |  | good |  |
| max\_siege\_memory | Max Siege Progress | location |  | good |  |
| max\_war\_exhaustion | Maximum War Exhaustion | country |  | good |  |
| maximum\_religious\_influence | Maximum Religious Influence | country |  | good |  |
| maximum\_stockpile\_capacity | Maximum Stockpile Capacity | location |  | good |  |
| may\_build\_sofa\_units | May Build Sofa units | location | boolean | good |  |
| may\_convert\_vassals\_to\_celestial\_governors | May Convert to Celestial Governors | country | boolean | good |  |
| may\_explore | Allows Exploration Missions | country | boolean | good |  |
| may\_hire\_eunuch\_advisors | May Hire Eunuch Courtiers | country | boolean | good |  |
| may\_not\_take\_land\_in\_peace\_treaties | Disallows Taking Land in Peace Treaties | country | boolean | bad |  |
| mayan\_ceremonial\_festivals\_cost\_modifier | Cost of Host a Ceremony Religious Action | country | multiplicative | percent, bad |  |
| medicaments\_impacts\_inflation | Medicaments Impacts Inflation | country |  | percent, good |  |
| medicaments\_used\_for\_minting | Medicaments Used for Coins | country | boolean | good |  |
| megalopolis\_upgrade\_cost\_modifier | Founding Megalopolis Cost | country | multiplicative | percent, bad |  |
| member\_agenda\_impact | Agenda Impact for Members | internationalorganization |  | percent, good |  |
| member\_can\_participate\_in\_parliament | Member in Parliament | internationalorganization | boolean | good |  |
| mend\_schism\_price\_cost\_modifier | Mend the Schism Price Cost Modifier | country | multiplicative | percent, bad |  |
| mercenary\_maintenance\_efficiency | Mercenary Maintenance Efficiency | country |  | percent, good |  |
| mercenary\_range | Mercenary Range | country |  | good |  |
| mercenary\_range\_modifier | Mercenary Range Modifier | country | multiplicative | percent, good |  |
| mercenary\_units\_preference\_modifier | Mercenary Units Preference Modifier | country | multiplicative | good |  |
| merchant\_capacity\_from\_building | Trade Capacity to Owner | location |  | good |  |
| merchant\_guild\_chapel\_price\_cost\_modifier | Merchant Guild Chapel Price Cost Modifier | country | multiplicative | percent, bad |  |
| merchant\_maintenance\_efficiency | Merchant Maintenance Efficiency | country |  | percent, good |  |
| merchant\_power\_from\_building | Trade Advantage to Owner | location |  | good |  |
| merchant\_power\_from\_maritime | Maritime Trade Advantage | country |  | good |  |
| merchant\_power\_from\_maritime\_modifier | Trade Maritime Advantage | country | multiplicative | percent, good |  |
| mercury\_impacts\_inflation | Mercury Impacts Inflation | country |  | percent, good |  |
| mercury\_patio\_max\_level | Mercury Patio Max Level | country | additive | good |  |
| mercury\_used\_for\_minting | Mercury Used for Coins | country | boolean | good |  |
| merge\_colonies\_price\_cost\_modifier | Merge Colonies Cost Modifier | country | multiplicative | percent, bad |  |
| mesa\_wasteland\_proximity\_impact | Mesa Wasteland Proximity Impact | country |  | percent, bad |  |
| miaphysite\_monastery\_building\_cost\_modifier | Miaphysite Monastery Building Cost | country | multiplicative | percent, bad |  |
| middle\_kingdom\_tribute\_price\_cost\_modifier | Middle Kingdom Tribute Cost Modifier | country | multiplicative | percent, bad |  |
| migrate\_pop\_based\_country\_cost\_modifier | Migrate Cost | country | multiplicative | percent, bad |  |
| migrate\_to\_new\_waters\_cost\_modifier | Migrate to New Waters | country | multiplicative | percent, good |  |
| mil | Military Ability | character |  | good |  |
| military\_order\_agenda\_impact | Agenda Impact for Military Order | internationalorganization |  | percent, good |  |
| military\_order\_can\_participate\_in\_parliament | Military Order in Parliament | internationalorganization | boolean | good |  |
| military\_tactics | Military Tactics | unit |  | good |  |
| millet\_impacts\_inflation | Sturdy Grains Impacts Inflation | country |  | percent, good |  |
| millet\_used\_for\_minting | Millet Used for Coins | country | boolean | good |  |
| minimum\_fort\_level | Minimum Fort Level | location |  | good |  |
| minting\_income\_factor | Income from Minting | country |  | percent, good |  |
| minting\_inflation\_threshold | Minting Threshold | country |  | percent, good |  |
| monthly\_army\_tradition | Monthly Army Tradition | country |  | good |  |
| monthly\_burghers\_estate\_rebel\_growth | Monthly Burghers Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_celestial\_authority | Monthly Celestial Authority Change | all |  | good |  |
| monthly\_clergy\_estate\_rebel\_growth | Monthly Clergy Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_complacency | Monthly Complacency | country |  | bad |  |
| monthly\_cossacks\_estate\_rebel\_growth | Monthly Cossacks Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_creditworthiness\_change | Monthly Creditworthiness | country |  | percent, good |  |
| monthly\_crown\_estate\_rebel\_growth | Monthly Crown Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_devotion | Monthly Devotion | country |  | good |  |
| monthly\_dhimmi\_estate\_rebel\_growth | Monthly Dhimmi Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_diplomats | Monthly Diplomats | country |  | good |  |
| monthly\_doom | Monthly Doom | country |  | bad |  |
| monthly\_experience\_gain | Monthly Experience Gain | unit |  | percent, good |  |
| monthly\_gold\_expense | Monthly Gold | country |  | bad |  |
| monthly\_gold\_income | Monthly Gold | country |  | good |  |
| monthly\_harmony | Monthly Harmony | country |  | good |  |
| monthly\_honor | Monthly Honor | country |  | good |  |
| monthly\_horde\_unity | Monthly Horde Unity | country |  | good |  |
| monthly\_imperial\_authority | Monthly Imperial Authority | all |  | good |  |
| monthly\_inflation | Monthly Inflation | country |  | percent, bad |  |
| monthly\_karma | Monthly Karma | country |  | neutral |  |
| monthly\_karma\_decay | Monthly Karma Decay | country |  | neutral |  |
| monthly\_legitimacy | Monthly Legitimacy | country |  | good |  |
| monthly\_loan\_capacity\_investment | Loan Capacity Investment | country |  | good |  |
| monthly\_nahualt\_reform\_progress | Monthly Nahuatl Reform Progress | country |  | good |  |
| monthly\_nationalist\_rebel\_growth | Monthly Nationalist Rebel Growth | country |  | percent, bad |  |
| monthly\_navy\_tradition | Monthly Navy Tradition | country |  | good |  |
| monthly\_nobles\_estate\_rebel\_growth | Monthly Nobility Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_papal\_authority | Monthly Papal Authority | all |  | good |  |
| monthly\_peasants\_estate\_rebel\_growth | Monthly Commoners Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_prestige | Monthly Prestige | country |  | good |  |
| monthly\_pretender\_rebel\_growth | Monthly Pretender Rebel Growth | country |  | percent, bad |  |
| monthly\_purity | Monthly Purity | country |  | neutral |  |
| monthly\_rebel\_growth | Monthly Rebel Growth | country |  | percent, bad |  |
| monthly\_reform\_desire | Monthly Reform Desire | religion |  | percent, bad |  |
| monthly\_religious\_influence | Monthly Religious Influence | country |  | good |  |
| monthly\_religious\_rebel\_growth | Monthly Religious Rebel Growth | country |  | percent, bad |  |
| monthly\_republican\_tradition | Monthly Republican Tradition | country |  | good |  |
| monthly\_righteousness | Monthly Righteousness | country |  | good |  |
| monthly\_rite\_power | Monthly Rite Power | country |  | good |  |
| monthly\_self\_control | Monthly Self Control | country |  | good |  |
| monthly\_slave\_rebel\_growth | Monthly Slave Rebel Growth | country |  | percent, bad |  |
| monthly\_towards\_absolutism | Monthly Progress to Absolutism | country |  | neutral |  |
| monthly\_towards\_aristocracy | Monthly Progress to Aristocracy | country |  | neutral |  |
| monthly\_towards\_belligerent | Monthly Progress to Belligerent | country |  | neutral |  |
| monthly\_towards\_capital\_economy | Monthly Progress to Capital Economy | country |  | neutral |  |
| monthly\_towards\_centralization | Monthly Progress to Centralization | country |  | neutral |  |
| monthly\_towards\_communalism | Monthly Progress to Communalism | country |  | neutral |  |
| monthly\_towards\_conciliatory | Monthly Progress to Conciliatory | country |  | neutral |  |
| monthly\_towards\_decentralization | Monthly Progress to Decentralization | country |  | neutral |  |
| monthly\_towards\_defensive | Monthly Progress to Defensive | country |  | neutral |  |
| monthly\_towards\_free\_subjects | Monthly Progress to Free Subjects | country |  | neutral |  |
| monthly\_towards\_free\_trade | Monthly Progress to Free Trade | country |  | neutral |  |
| monthly\_towards\_hellenization | Monthly Progress to Rōmanismós | country |  | neutral |  |
| monthly\_towards\_humanist | Monthly Progress to Humanist | country |  | neutral |  |
| monthly\_towards\_individualism | Monthly Progress to Individualism | country |  | neutral |  |
| monthly\_towards\_innovative | Monthly Progress to Innovative | country |  | neutral |  |
| monthly\_towards\_inward | Monthly Progress to Inward | country |  | neutral |  |
| monthly\_towards\_jurisprudence | Monthly Progress to Jurisprudence | country |  | neutral |  |
| monthly\_towards\_land | Monthly Progress to Land | country |  | neutral |  |
| monthly\_towards\_latinization | Monthly Progress to Latinitas | country |  | neutral |  |
| monthly\_towards\_liberalism | Monthly Progress to Liberalism | country |  | neutral |  |
| monthly\_towards\_mercantilism | Monthly Progress to Mercantilism | country |  | neutral |  |
| monthly\_towards\_mysticism | Monthly Progress to Mysticism | country |  | neutral |  |
| monthly\_towards\_naval | Monthly Progress to Naval | country |  | neutral |  |
| monthly\_towards\_offensive | Monthly Progress to Offensive | country |  | neutral |  |
| monthly\_towards\_outward | Monthly Progress to Outward | country |  | neutral |  |
| monthly\_towards\_plutocracy | Monthly Progress to Plutocracy | country |  | neutral |  |
| monthly\_towards\_quality | Monthly Progress to Quality | country |  | neutral |  |
| monthly\_towards\_quantity | Monthly Progress to Quantity | country |  | neutral |  |
| monthly\_towards\_serfdom | Monthly Progress to Serfdom | country |  | neutral |  |
| monthly\_towards\_sinicized | Monthly Progress to Sinicized | country |  | neutral |  |
| monthly\_towards\_spiritualist | Monthly Progress to Spiritualist | country |  | neutral |  |
| monthly\_towards\_traditional\_economy | Monthly Progress to Traditional Economy | country |  | neutral |  |
| monthly\_towards\_traditionalist | Monthly Progress to Traditionalist | country |  | neutral |  |
| monthly\_towards\_unsinicized | Monthly Progress to Unsinicized | country |  | neutral |  |
| monthly\_tribal\_cohesion | Monthly Tribal Cohesion | country |  | good |  |
| monthly\_tribes\_estate\_rebel\_growth | Monthly Tribes Rebel Growth | country, *estate* |  | percent, bad |  |
| monthly\_war\_exhaustion | Monthly War Exhaustion | country |  | bad |  |
| monthly\_yanantin | Monthly Yanantin | country |  | bad |  |
| morale\_recovery\_in\_friendly | Morale Recovery in Friendly Territory | unit |  | percent, good |  |
| mountain\_wasteland\_proximity\_impact | Mountain Wasteland Proximity Impact | country |  | percent, bad |  |
| mountains\_proximity\_impact | Mountains Proximity Impact | country |  | percent, bad |  |
| move\_good\_to\_new\_location\_cost\_modifier | Move Good to New Location | country | multiplicative | percent, good |  |
| move\_to\_assist\_on\_adjacent\_combat | Move to Assist on Adjacent Battle | unit | boolean | good |  |
| movement\_cost | Movement Cost | location |  | percent, bad |  |
| movement\_speed\_if\_no\_road | Movement Speed without Road | unit |  | percent, good |  |
| movement\_speed\_when\_attached\_to\_another\_unit | Movement Time when Attached to Another Unit | unit |  | percent, bad |  |
| n\_panokseon\_build\_cost\_modifier | Panokseon Build Cost | country | multiplicative | percent, bad |  |
| n\_panokseon\_maintenance\_cost\_modifier | Panokseon Maintenance Cost | country | multiplicative | percent, bad |  |
| n\_panokseon\_reinforce\_cost\_modifier | Panokseon Repair Cost | country | multiplicative | percent, bad |  |
| nahuatl\_religious\_actions\_price\_cost\_modifier | Nahua Religious Actions Cost Modifier | country | multiplicative | percent, bad |  |
| nanbokuchou\_change\_sides\_cost\_modifier | Change Side to Support Cost | country | multiplicative | percent, bad |  |
| nanbokuchou\_declare\_neutrality\_cost\_modifier | Declare Neutrality Cost | country | multiplicative | percent, bad |  |
| narrows\_proximity\_impact | Narrows Proximity Impact | country |  | percent, bad |  |
| national\_bubonic\_plague\_growth\_modifier | Bubonic Plague Growth | country | multiplicative | percent, good |  |
| national\_bubonic\_plague\_resistance\_modifier | Bubonic Plague Resistance | country | multiplicative | percent, good |  |
| national\_calvinism\_movement\_growth\_modifier | Calvinism Growth Modifier | country | multiplicative | percent, good |  |
| national\_calvinism\_movement\_resistance\_modifier | Calvinism Resistance Modifier | country | multiplicative | percent, good |  |
| national\_church\_power\_cost\_modifier | Costs of Church Power Actions | country | multiplicative | percent, bad |  |
| national\_great\_pestilence\_growth\_modifier | Great Pestilence Growth | country | multiplicative | percent, good |  |
| national\_great\_pestilence\_resistance\_modifier | Great Pestilence Resistance | country | multiplicative | percent, good |  |
| national\_hellenism\_religion\_movement\_growth\_modifier | Country Platonic Revival Movement Growth Modifier | country | multiplicative | percent, good |  |
| national\_hellenism\_religion\_movement\_resistance\_modifier | Country Platonic Revival Movement Resistance Modifier | country | multiplicative | percent, good |  |
| national\_influenza\_growth\_modifier | Influenza Growth | country | multiplicative | percent, good |  |
| national\_influenza\_resistance\_modifier | Influenza Resistance | country | multiplicative | percent, good |  |
| national\_lutheranism\_movement\_growth\_modifier | Lutheranism Growth Modifier | country | multiplicative | percent, good |  |
| national\_lutheranism\_movement\_resistance\_modifier | Lutheranism Resistance Modifier | country | multiplicative | percent, good |  |
| national\_malaria\_growth\_modifier | Malaria Growth | country | multiplicative | percent, good |  |
| national\_malaria\_resistance\_modifier | Malaria Resistance | country | multiplicative | percent, good |  |
| national\_measles\_growth\_modifier | Measles Growth | country | multiplicative | percent, good |  |
| national\_measles\_resistance\_modifier | Measles Resistance | country | multiplicative | percent, good |  |
| national\_roman\_culture\_movement\_growth\_modifier | Country Latin Revival Movement Growth Modifier | country | multiplicative | percent, good |  |
| national\_roman\_culture\_movement\_resistance\_modifier | Country Latin Revival Movement Resistance Modifier | country | multiplicative | percent, good |  |
| national\_smallpox\_growth\_modifier | Smallpox Growth | country | multiplicative | percent, good |  |
| national\_smallpox\_resistance\_modifier | Smallpox Resistance | country | multiplicative | percent, good |  |
| national\_typhus\_growth\_modifier | Typhus Growth | country | multiplicative | percent, good |  |
| national\_typhus\_resistance\_modifier | Typhus Resistance | country | multiplicative | percent, good |  |
| natural\_harbor\_suitability | Natural Harbor Suitability | location |  | percent, good |  |
| naval\_damage\_done | Naval Damage Done | unit |  | percent, good |  |
| naval\_damage\_taken | Naval Damage Taken | unit |  | percent, bad |  |
| naval\_morale | Navy Morale | unit |  | good |  |
| naval\_morale\_attrition\_cost | Naval Morale Attrition Cost | unit |  | percent, bad |  |
| naval\_morale\_modifier | Navy Morale | unit | multiplicative | percent, good |  |
| naval\_morale\_movement\_cost | Naval Morale Movement Cost | unit |  | percent, bad |  |
| naval\_morale\_recovery | Navy Morale Recovery Speed | unit |  | percent, good |  |
| naval\_range | Naval Range | country |  | good |  |
| naval\_range\_modifier | Naval Range | country | multiplicative | percent, good |  |
| naval\_supplies\_impacts\_inflation | Naval supplies Impacts Inflation | country |  | percent, good |  |
| naval\_supplies\_used\_for\_minting | Naval supplies Used for Coins | country | boolean | good |  |
| naval\_unit\_attrition | Navy Attrition | unit |  | percent, bad |  |
| navy\_galley\_build\_cost\_modifier | Galley Build Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_galley\_maintenance\_cost\_modifier | Galley Maintenance Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_galley\_power | Galley Power | unit, *navy* |  | percent, good |  |
| navy\_galley\_reinforce\_cost\_modifier | Galley Repair Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_heavy\_ship\_build\_cost\_modifier | Heavy Ship Build Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_heavy\_ship\_maintenance\_cost\_modifier | Heavy Ship Maintenance Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_heavy\_ship\_power | Heavy Ship Power | unit, *navy* |  | percent, good |  |
| navy\_heavy\_ship\_reinforce\_cost\_modifier | Heavy Ship Repair Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_initiative | Navy Initiative | unit, *navy* |  | percent, good |  |
| navy\_light\_ship\_build\_cost\_modifier | Light Ship Build Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_light\_ship\_maintenance\_cost\_modifier | Light Ship Maintenance Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_light\_ship\_power | Light Ship Power | unit, *navy* |  | percent, good |  |
| navy\_light\_ship\_reinforce\_cost\_modifier | Light Ship Repair Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_maintenance\_efficiency | Navy Maintenance Efficiency | unit, *navy* |  | percent, good |  |
| navy\_movement\_speed | Navy Movement Speed | unit, *navy* |  | percent, good |  |
| navy\_repair\_efficiency | Navy Repair Efficiency | unit, *navy* |  | percent, good |  |
| navy\_tradition\_decay | Navy Tradition Decay | country, *navy* |  | percent, bad |  |
| navy\_tradition\_from\_battle | Navy Tradition from Battles | country, *navy* |  | percent, good |  |
| navy\_transport\_build\_cost\_modifier | Transport Build Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_transport\_maintenance\_cost\_modifier | Transport Maintenance Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_transport\_power | Transport Power | unit, *navy* |  | percent, good |  |
| navy\_transport\_reinforce\_cost\_modifier | Transport Repair Cost | country, *navy* | multiplicative | percent, bad |  |
| navy\_weight\_modifier | Navy Weight | unit, *navy* | multiplicative | percent, bad |  |
| negotiate\_rebels\_buy\_off\_price\_cost\_modifier | Buy off rebels | country | multiplicative | percent, good |  |
| no\_beards | No Beards | country | boolean | good |  |
| no\_contact\_with\_outsiders\_cost\_modifier | No Contact with Outsiders Cost | country | multiplicative | percent, bad |  |
| no\_lowborn\_leaders | Block Lowborn Commanders | country | boolean | bad |  |
| nobles\_estate\_agenda\_impact | Agenda Impact for Nobility | country, *estate* |  | percent, good |  |
| nobles\_estate\_allowed\_in\_cabinet | Nobility Allowed in Cabinet | country, *estate* | boolean | good |  |
| nobles\_estate\_allowed\_leading\_military | Nobility Allowed to Command | country, *estate* | boolean | good |  |
| nobles\_estate\_allowed\_to\_build\_rgo | Nobility Allowed to Expand R.G.O. | country, *estate* | boolean | good |  |
| nobles\_estate\_allowed\_to\_build\_roads | Nobility Allowed to Build Roads | country, *estate* | boolean | good |  |
| nobles\_estate\_blocked\_from\_cabinet | Nobility Blocked from Cabinet | country, *estate* | boolean | bad |  |
| nobles\_estate\_blocked\_from\_leading\_military | Nobility Blocked from Command | country, *estate* | boolean | bad |  |
| nobles\_estate\_blocked\_from\_parliament | No Nobility in Parliament | country, *estate* | boolean | good |  |
| nobles\_estate\_can\_participate\_in\_parliament | Nobility in Parliament | country, *estate* | boolean | good |  |
| nobles\_estate\_cannot\_marry | Nobles Cannot Marry | country, *estate* | boolean | bad |  |
| nobles\_estate\_levy\_size | Nobles Levy Size | country, *estate* |  | percent, good |  |
| nobles\_estate\_max\_tax | Maximum Tax for Noble Estate | country, *estate* |  | percent, good |  |
| nobles\_estate\_min\_tax | Minimum Tax for Noble Estate | country, *estate* |  | percent, good |  |
| nobles\_estate\_power\_from\_cabinet | Nobility Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| nobles\_estate\_satisfaction\_decay | Noble Estate Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| nobles\_estate\_satisfaction\_recovery | Noble Estate Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| nobles\_estate\_target\_satisfaction | Noble Estate Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| nomos\_empsychos\_bureaucracy\_impact\_modifier | Nómos Émpsychos Impact | country | multiplicative | percent, good |  |
| non\_rural\_migration\_attraction | Towns and Cities Migration Attraction | country |  | good |  |
| num\_bailiffs | Number of Bailiffs | country |  | good |  |
| num\_italian\_administrations | Number of Italian Administration Centers | country |  | good |  |
| num\_local\_governors | Number of Local Governors | country |  | good |  |
| num\_naval\_governors | Number of Naval Governors | country |  | good |  |
| num\_of\_banner\_cavalry | Number of Banner Cavalry | country |  | good |  |
| num\_of\_cataphracts\_modifier | Number of Cataphracts Modifier | country | multiplicative | percent, good |  |
| num\_of\_legionaries\_modifier | Number of Legionaries Modifier | country | multiplicative | percent, good |  |
| num\_of\_varangian\_units | Number of Varangian Units | country |  | good |  |
| num\_possible\_artists | Possible Number of Artists | country |  | good |  |
| num\_possible\_rivals | Possible Rivals | country |  | good |  |
| number\_of\_allowed\_avatars | Avatars Allowed | country |  | good |  |
| number\_of\_allowed\_religious\_figures | Religious Figures Allowed | country |  | good |  |
| number\_of\_satellite\_trade\_buildings | Number of Satellite Trade Building | country |  | good |  |
| occupation\_time | Occupation Time | location |  | percent, good |  |
| ocean\_proximity\_impact | Ocean Proximity Impact | country |  | percent, bad |  |
| ocean\_wasteland\_proximity\_impact | Ocean Wasteland Proximity Impact | country |  | percent, bad |  |
| offer\_diplomatic\_protection\_price\_cost\_modifier | Offer Diplomatic Protection Cost Modifier | country | multiplicative | percent, bad |  |
| olives\_impacts\_inflation | Olives Impacts Inflation | country |  | percent, good |  |
| olives\_used\_for\_minting | Olives Used for Coins | country | boolean | good |  |
| omen\_strength\_modifier | Omen Strength | country | multiplicative | percent, good |  |
| omen\_time\_modifier | Omen Length | country | multiplicative | percent, good |  |
| omens\_offered | Omens Offered | country |  | good |  |
| ordnance\_board\_bureaucracy\_impact\_modifier | Board of Ordnance Impact | country | multiplicative | percent, good |  |
| organization\_parliament\_duration\_modifier | Organization Parliament Duration | internationalorganization | multiplicative | percent, neutral |  |
| organize\_spiritual\_retreat\_cost\_modifier | Organize a Spiritual Retreat Cost | country | multiplicative | bad |  |
| orthodox\_monastery\_building\_cost\_modifier | Orthodox Monastery Building Cost | country | multiplicative | percent, bad |  |
| orthodox\_synod\_cost\_modifier | Orthodox Synod Cost | country | multiplicative | percent, bad |  |
| overlord\_blocked\_from\_building\_buildings | Overlord Blocked from Building Buildings | country | boolean | neutral |  |
| overlord\_blocked\_from\_building\_rgos | Overlord Blocked from Building RGO | country | boolean | neutral |  |
| overlord\_blocked\_from\_building\_roads | Overlord Blocked from Building Roads | country | boolean | neutral |  |
| overlord\_blocked\_from\_building\_ships | Overlord Blocked from Building Ships | country | boolean | neutral |  |
| overlord\_blocked\_from\_recruiting\_regiments | Overlord Blocked from Recruiting Regiments | country | boolean | neutral |  |
| own\_coast\_naval\_combat\_bonus | Combat Outside Own Coasts | unit |  | percent, good |  |
| owner\_gets\_vision\_when\_occupied | Owner gets Vision when Occupied | location | boolean | good |  |
| p\_building\_age\_1\_traditions\_cost\_modifier | Traditions Buildings | country | multiplicative | percent, bad |  |
| p\_building\_age\_2\_renaissance\_cost\_modifier | Renaissance Buildings | country | multiplicative | percent, bad |  |
| p\_building\_age\_3\_discovery\_cost\_modifier | Discovery Buildings | country | multiplicative | percent, bad |  |
| p\_building\_age\_4\_reformation\_cost\_modifier | Reformation Buildings | country | multiplicative | percent, bad |  |
| p\_building\_age\_5\_absolutism\_cost\_modifier | Absolutism Buildings | country | multiplicative | percent, bad |  |
| p\_building\_age\_6\_revolutions\_cost\_modifier | Revolutions Buildings | country | multiplicative | percent, bad |  |
| p\_expensive\_building\_age\_1\_traditions\_cost\_modifier | Expensive Traditions Buildings | country | multiplicative | percent, bad |  |
| p\_expensive\_building\_age\_2\_renaissance\_cost\_modifier | Expensive Renaissance Buildings | country | multiplicative | percent, bad |  |
| p\_expensive\_building\_age\_3\_discovery\_cost\_modifier | Expensive Discovery Buildings | country | multiplicative | percent, bad |  |
| p\_expensive\_building\_age\_4\_reformation\_cost\_modifier | Expensive Reformation Buildings | country | multiplicative | percent, bad |  |
| p\_expensive\_building\_age\_5\_absolutism\_cost\_modifier | Expensive Absolutism Buildings | country | multiplicative | percent, bad |  |
| p\_expensive\_building\_age\_6\_revolutions\_cost\_modifier | Expensive Revolutions Buildings | country | multiplicative | percent, bad |  |
| papacy\_blocked | Papacy Blocked | religion | boolean | bad |  |
| papal\_authority\_modifier | Papal Authority Modifier | all | multiplicative | percent, good |  |
| papal\_relations | Papal Relations | country |  | good |  |
| paper\_impacts\_inflation | Paper Impacts Inflation | country |  | percent, good |  |
| paper\_used\_for\_minting | Paper Used for Coins | country | boolean | good |  |
| pardon\_price\_cost\_modifier | Pardon Cost Modifier | country | multiplicative | percent, bad |  |
| parliament\_abolished | Parliament Abolished | country | boolean | good |  |
| parliament\_base\_support | Parliament Base Support | country |  | percent, good |  |
| parliament\_duration\_modifier | Parliament Duration | country | multiplicative | percent, neutral |  |
| parliament\_request\_issue\_support\_needed | Parliament Request Issue Support Needed | country |  | percent, bad |  |
| payment\_to\_overlord\_modifier | Payment to Overlord | country | multiplicative | percent, bad |  |
| peace\_offer\_fairness | Peace Offer Fairness | country |  | good |  |
| peace\_offer\_negotiation\_power | Peace Offer Negotiation Power | country |  | good |  |
| pearls\_impacts\_inflation | Pearls Impacts Inflation | country |  | percent, good |  |
| pearls\_used\_for\_minting | Pearls Used for Coins | country | boolean | good |  |
| peasants\_estate\_agenda\_impact | Agenda Impact for Commoners | country, *estate* |  | percent, good |  |
| peasants\_estate\_allowed\_in\_cabinet | Commoners Allowed in Cabinet | country, *estate* | boolean | good |  |
| peasants\_estate\_allowed\_leading\_military | Commoners Allowed to Command | country, *estate* | boolean | good |  |
| peasants\_estate\_allowed\_to\_build\_rgo | Commoners Allowed to Expand R.G.O. | country, *estate* | boolean | good |  |
| peasants\_estate\_allowed\_to\_build\_roads | Commoners Allowed to Build Roads | country, *estate* | boolean | good |  |
| peasants\_estate\_blocked\_from\_cabinet | Commoners Blocked from Cabinet | country, *estate* | boolean | bad |  |
| peasants\_estate\_blocked\_from\_leading\_military | Commoners Blocked from Command | country, *estate* | boolean | bad |  |
| peasants\_estate\_blocked\_from\_parliament | No Commoners in Parliament | country, *estate* | boolean | good |  |
| peasants\_estate\_can\_participate\_in\_parliament | Commoners in Parliament | country, *estate* | boolean | good |  |
| peasants\_estate\_cannot\_marry | Peasants Cannot Marry | country, *estate* | boolean | bad |  |
| peasants\_estate\_levy\_size | Peasants Levy Size | country, *estate* |  | percent, good |  |
| peasants\_estate\_max\_tax | Maximum Tax for Peasants Estate | country, *estate* |  | percent, good |  |
| peasants\_estate\_min\_tax | Minimum Tax for Peasants Estate | country, *estate* |  | percent, good |  |
| peasants\_estate\_power\_from\_cabinet | Commoners Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| peasants\_estate\_satisfaction\_decay | Peasant Estate Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| peasants\_estate\_satisfaction\_recovery | Peasant Estate Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| peasants\_estate\_target\_satisfaction | Peasant Estate Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| peasants\_war\_actions\_price\_cost\_modifier | Peasants' War Main Actions Price Cost Modifier | country | multiplicative | percent, bad |  |
| pepper\_impacts\_inflation | Pepper Impacts Inflation | country |  | percent, good |  |
| pepper\_used\_for\_minting | Pepper Used for Coins | country | boolean | good |  |
| perform\_tantric\_ritual\_cost\_modifier | Perform a Tantric Ritual Cost | country | multiplicative | bad |  |
| perform\_yoga\_cost\_modifier | Perform Yoga Cost | country | multiplicative | percent, bad |  |
| periphora\_cost\_modifier | Periphora Cost | country | multiplicative | percent, bad |  |
| permanent\_parliament\_location | Permanent Parliament | country | boolean | good |  |
| pilgrimage\_action\_cost\_modifier | Cost of Pilgrimage Religious Action | country | multiplicative | percent, bad |  |
| plan\_italian\_campaign\_wars\_price\_cost\_modifier | Campaign in Italy Cost | country | multiplicative | percent, bad |  |
| plateau\_proximity\_impact | Plateau Proximity Impact | country |  | percent, bad |  |
| plateau\_wasteland\_proximity\_impact | Plateau Wasteland Proximity Impact | country |  | percent, bad |  |
| policy\_vote\_cost\_modifier | Policy Proposal Cost | country | multiplicative | percent, bad |  |
| policy\_vote\_delay | Policy Vote Delay | internationalorganization |  | neutral |  |
| policy\_vote\_required\_vote\_ratio | Required Policy Vote Ratio | internationalorganization |  | percent, neutral |  |
| pop\_countries\_opinions | Society of Pops Opinions | country |  | good |  |
| pop\_join\_rebel\_threshold | Pop Join Rebels Threshold | country |  | percent, bad |  |
| pop\_leave\_rebels\_threshold | Pop Leave Rebels Threshold | country |  | percent, bad |  |
| porcelain\_impacts\_inflation | Porcelain Impacts Inflation | country |  | percent, good |  |
| porcelain\_used\_for\_minting | Porcelain Used for Coins | country | boolean | good |  |
| port\_cost\_distance\_from\_capital | Proximity Cost through Port | country |  | bad |  |
| possible\_frontage\_modifier | Possible Frontage | unit | multiplicative | percent, good |  |
| potato\_impacts\_inflation | Potato Impacts Inflation | country |  | percent, good |  |
| potato\_used\_for\_minting | Potato Used for Coins | country | boolean | good |  |
| pottery\_impacts\_inflation | Pottery Impacts Inflation | country |  | percent, good |  |
| pottery\_used\_for\_minting | Pottery Used for Coins | country | boolean | good |  |
| power\_projection | Power Projection | country |  | good |  |
| prestige\_decay | Prestige Decay | country |  | percent, bad |  |
| prestige\_from\_land\_battle | Prestige from Land Battles | country |  | percent, good |  |
| prestige\_from\_naval\_battle | Prestige from Naval Battles | country |  | percent, good |  |
| prevented\_from\_being\_heir | Prevented from Being Heir | character | boolean | neutral |  |
| prevented\_from\_changing\_court\_language\_by\_overlord | Prevented from Changing Court Language | country | boolean | good |  |
| primas\_germaniae\_agenda\_impact | Agenda Impact for Primas Germaniae | internationalorganization |  | percent, good |  |
| primas\_germaniae\_can\_participate\_in\_parliament | Primas Germaniae in Parliament | internationalorganization | boolean | good |  |
| privateer\_durability | Privateer Durability | country |  | percent, good |  |
| privateer\_maintenance\_cost\_modifier | Privateer Maintenance | country | multiplicative | percent, bad |  |
| privy\_council\_bureaucracy\_impact\_modifier | Privy Council Impact | country | multiplicative | percent, good |  |
| proclaim\_decree\_cost\_modifier | Proclaim Decree Cost | country | multiplicative | percent, bad |  |
| procure\_remedies\_cost\_modifier | Procure Remedies Cost | country | multiplicative | percent, bad |  |
| profess\_trust\_price\_cost\_modifier | Profess Trust Cost | country | multiplicative | percent, bad |  |
| promote\_institution\_chance | Institution Promotion | location |  | good |  |
| promote\_sect\_cost\_modifier | Promote Sect Cost | country | multiplicative | bad |  |
| propagating\_zone\_of\_control | Allows Zone of Control | location | boolean | good |  |
| propose\_curia\_action\_cost\_modifier | Propose Curia Action Cost | country | multiplicative | percent, bad |  |
| province\_integration\_speed | Speed of Integration | province |  | good |  |
| provoke\_rebels\_price\_cost\_modifier | Provoke Rebels Main Actions Price Cost Modifier | country | multiplicative | percent, bad |  |
| rank\_duchy\_upgrade\_cost\_modifier | Upgrade to Duchy Cost | country | multiplicative | percent, bad |  |
| rank\_empire\_upgrade\_cost\_modifier | Upgrade to Empire Cost | country | multiplicative | percent, bad |  |
| rank\_kingdom\_upgrade\_cost\_modifier | Upgrade to Kingdom Cost | country | multiplicative | percent, bad |  |
| ransom\_units\_cost\_modifier | Ransom Units Cost | country | multiplicative | percent, bad |  |
| raw\_material\_in\_province\_impact | Local Access to Raw Materials | country |  | percent, good |  |
| reach\_compromise\_with\_huguenots\_price\_cost\_modifier | Compromise with the Huguenots Cost | country | multiplicative | percent, bad |  |
| reasons\_to\_elect | Reasons to Elect | country |  | good |  |
| reasons\_to\_vote | Reasons to Vote | country |  | good |  |
| rebel\_monthly\_progress | Rebel Monthly Progress | rebel |  | percent, bad |  |
| recruit\_conquistador\_cost\_modifier | Conquistador Cost | country | multiplicative | percent, bad |  |
| recruit\_explorer\_cost\_modifier | Recruiting Explorers | country | multiplicative | percent, bad |  |
| reduce\_rebels\_from\_ikko\_ikki\_cost\_modifier | Cost of Reduce Religious Rebel Progress Action | country | multiplicative | percent, bad |  |
| reestablish\_hellenism\_price\_cost\_modifier | Reestablish Hellenism Price Cost Modifier | country | multiplicative | percent, bad |  |
| regiment\_recruit\_speed | Recruitment Speed | country |  | percent, good |  |
| regiment\_reinforcement\_speed | Reinforcement Speed | unit |  | percent, good |  |
| reject\_subjugation\_reasons | Reject Subjugation Reasons | country |  | neutral |  |
| religious\_icon\_power\_modifier | Religious Icon Power Modifier | country | multiplicative | percent, good |  |
| religious\_offering\_cost\_modifier | Cost of Religious Offering Religious Action | country | multiplicative | percent, bad |  |
| religious\_turmoil\_actions\_price\_cost\_modifier | Religious Turmoil Main Actions Price Cost Modifier | country | multiplicative | percent, bad |  |
| religious\_unity\_importance\_modifier | Religious Unity Importance Modifier | country | multiplicative | good |  |
| relocate\_ecumenical\_patriarchate\_cost\_modifier | Relocate Ecumenical Patriarchate Cost | country | multiplicative | percent, bad |  |
| relocate\_market\_cost\_modifier | Relocate Market Cost | country | multiplicative | percent, bad |  |
| remove\_accepted\_culture\_cost\_modifier | Remove Accepted Culture Cost | country | multiplicative | percent, bad |  |
| remove\_bureaucracy\_price\_cost\_modifier | Remove Bureaucracy Price Modifier | country | multiplicative | percent, bad |  |
| remove\_government\_reform\_cost\_modifier | Remove Government Reform Cost | country | multiplicative | percent, bad |  |
| remove\_location\_from\_international\_organization\_cost\_modifier | Remove Location from International Organization Cost | country | multiplicative | percent, bad |  |
| remove\_lutheran\_preacher\_cost\_modifier | Remove Lutheran Preacher Cost | country | multiplicative | percent, bad |  |
| remove\_panaqa\_early\_cost\_modifier | Remove Panaqa Early | country | multiplicative | percent, bad |  |
| remove\_religious\_aspect\_christian\_cost\_modifier | Cost of Removing Religious Aspect | country | multiplicative | percent, bad |  |
| remove\_religious\_aspect\_hellenism\_cost\_modifier | Cost of Removing Religious Aspect | country | multiplicative | percent, bad |  |
| remove\_religious\_aspect\_inti\_cost\_modifier | Cost of Ceasing Worshipping a God | country | multiplicative | percent, bad |  |
| remove\_tolerated\_culture\_cost\_modifier | Remove Tolerated Culture Cost | country | multiplicative | percent, bad |  |
| replace\_cabinet\_member\_cost\_modifier | Replace Cabinet Member Cost | country | multiplicative | percent, bad |  |
| replace\_rival\_cost\_modifier | Replace Rival Cost | country | multiplicative | percent, bad |  |
| request\_aid\_price\_cost\_modifier | Request Aid Cost Modifier | country | multiplicative | percent, bad |  |
| request\_divorce\_price\_cost\_modifier | Divorce Request Cost Modifier | country | multiplicative | percent, bad |  |
| request\_work\_of\_art\_purchase\_cost\_modifier | Purchase Work of Art Cost Modifier | country | multiplicative | percent, bad |  |
| reroll\_avatar\_cost\_modifier | Change Avatar Cost | country | multiplicative | percent, bad |  |
| research\_speed | Monthly Research Progress | country |  | good |  |
| research\_speed\_modifier | Monthly Research Progress % | country | multiplicative | percent, good |  |
| reshape\_bureaucracy\_cost\_modifier | Reshape our Bureaucracy Cost | country | multiplicative | percent, bad |  |
| restore\_rome\_primacy\_price\_cost\_modifier | Restore Rome Primacy Price Cost Modifier | country | multiplicative | percent, bad |  |
| restrict\_peranakan\_trading\_rights\_price\_cost\_modifier | Restrict Peranakan Trading Rights Cost | country | multiplicative | percent, bad |  |
| retreat\_delay | Retreat Delay | country |  | bad |  |
| revoke\_privilege\_cost\_modifier | Revoke Privilege Cost | country | multiplicative | percent, bad |  |
| revoke\_privileges\_importance\_modifier | Revoke Privileges Importance Modifier | country | multiplicative | good |  |
| revoke\_privileges\_stability\_tolerance | Revoke Privileges Stability Tolerance | country |  | good |  |
| revoke\_shugo\_office\_cost\_modifier | Revoke Shugo Office Cost | country | multiplicative | percent, bad |  |
| revoke\_town\_rights\_cost\_modifier | Cost of Revoking Urban Rights | country | multiplicative | percent, bad |  |
| revolution\_actions\_price\_cost\_modifier | People's Uprising Main Actions Cost | country | multiplicative | percent, bad |  |
| rice\_impacts\_inflation | Rice Impacts Inflation | country |  | percent, good |  |
| rice\_used\_for\_minting | Rice Used for Coins | country | boolean | good |  |
| rise\_of\_the\_szlachta\_actions\_price\_cost\_modifier | Rise of the Szlachta Main Actions Price Cost modifier | country | multiplicative | percent, bad |  |
| ritualistic\_court\_bureaucracy\_impact\_modifier | Ritualistic Court Impact | country | multiplicative | percent, good |  |
| road\_building\_blocked | Road-building Blocked | location | boolean | bad |  |
| road\_cost\_on\_distance\_from\_capital | Proximity Cost through Roads | country |  | bad |  |
| roman\_festivals\_cost\_modifier | Organize a Roman Festival | country | multiplicative | percent, bad |  |
| romanitas\_bureaucracy\_impact\_modifier | Romanitas Impact | country | multiplicative | percent, good |  |
| rot\_reform\_into\_monarchy\_price\_cost\_modifier | Reform into a Monarchy Cost | country | multiplicative | percent, bad |  |
| rot\_select\_core\_region\_price\_cost\_modifier | Select Core Region Cost | country | multiplicative | percent, bad |  |
| rto\_create\_uc\_bey\_cost\_modifier | Create Uç Bey Cost Modifier | country | multiplicative | percent, bad |  |
| rto\_press\_claims\_price\_cost\_modifier | Press Claims Cost Modifier | country | multiplicative | percent, bad |  |
| rtr\_appease\_the\_court\_price\_cost\_modifier | Appease the Court Cost | country | multiplicative | percent, bad |  |
| rtr\_demand\_annexation\_price\_cost\_modifier | Demand Annexation Cost | country | multiplicative | percent, bad |  |
| rtr\_grant\_titles\_price\_cost\_modifier | Grant Titles Cost | country | multiplicative | percent, bad |  |
| rtr\_negotiate\_with\_rebels\_price\_cost\_modifier | Negotiate with Rebels Cost | country | multiplicative | percent, bad |  |
| rtr\_rein\_in\_area\_price\_cost\_modifier | Rein in Area Cost | country | multiplicative | percent, bad |  |
| ruler\_must\_be\_commander\_during\_war | Ruler must be Commander of the Biggest Military Force | country | boolean | bad |  |
| ruler\_name\_in\_court\_language | Ruler Name Uses Court Language | country | boolean | good |  |
| rural\_disease\_resistance | Rural Disease Resistance | country |  | percent, good |  |
| rural\_migration\_attraction | Rural Migration Attraction | country |  | good |  |
| rural\_settlement\_downgrade\_cost\_modifier | Downgrading to Rural Settlement Cost | country | multiplicative | percent, bad |  |
| rural\_settlement\_upgrade\_cost\_modifier | NOT USED | country | multiplicative | percent, bad |  |
| sacrifice\_noble\_blood\_cost\_modifier | Cost of Sacrifice Noble Blood Religious Action | country | multiplicative | percent, bad |  |
| saffron\_impacts\_inflation | Saffron Impacts Inflation | country |  | percent, good |  |
| saffron\_used\_for\_minting | Saffron Used for Coins | country | boolean | good |  |
| sailors\_to\_building\_owner | Sailors to Owner | location |  | good |  |
| salt\_impacts\_inflation | Salt Impacts Inflation | country |  | percent, good |  |
| salt\_pans\_proximity\_impact | Salt pans Proximity Impact | country |  | percent, bad |  |
| salt\_used\_for\_minting | Salt Used for Coins | country | boolean | good |  |
| saltpeter\_impacts\_inflation | Saltpeter Impacts Inflation | country |  | percent, good |  |
| saltpeter\_used\_for\_minting | Saltpeter Used for Coins | country | boolean | good |  |
| sand\_impacts\_inflation | Sand Impacts Inflation | country |  | percent, good |  |
| sand\_used\_for\_minting | Sand Used for Coins | country | boolean | good |  |
| scaled\_gold\_to\_building\_owner | Taxbase to Owner | location |  | percent, good |  |
| scaled\_gold\_to\_building\_owner\_overlord | Taxbase to Building Overlord | location |  | percent, good |  |
| scaled\_lost\_war\_cost\_modifier | Impact of Losing a War | country | multiplicative | percent, good |  |
| sea\_cost\_on\_distance\_from\_capital | Proximity Cost without Maritime Presence | country |  | bad |  |
| sea\_cost\_on\_distance\_from\_capital\_when\_maritime | Proximity Cost with Maritime Presence | country |  | bad |  |
| seek\_alliance\_with\_overlord\_rival\_cost\_modifier | Seek Support of Overlord's Rival Cost Modifier | country | multiplicative | percent, bad |  |
| seek\_relations\_with\_the\_byzantines\_price\_cost\_modifier | Seek Relations with the Byzantines Cost Modifier | country | multiplicative | percent, bad |  |
| segregate\_the\_infected\_cost\_modifier | Segregate the Infected Cost | country | multiplicative | percent, bad |  |
| select\_expensive\_child\_education\_cost\_modifier | Selecting Expensive Education | country | multiplicative | percent, bad |  |
| select\_omen\_god\_cost\_modifier | Select Omen God Cost | country | multiplicative | percent, bad |  |
| select\_orthodox\_education\_cost\_modifier | Selecting Patriarch Education | country | multiplicative | percent, bad |  |
| sell\_icon\_cost\_modifier | Cost of Sell Icon Action | country | multiplicative | percent, bad |  |
| sell\_work\_of\_art\_cost\_modifier | Sell Work of Art Cost Modifier | country | multiplicative | percent, bad |  |
| selling\_efficiency | Selling Efficiency | country |  | percent, good |  |
| send\_diplomat\_cost\_modifier | Send Diplomat | country | multiplicative | percent, good |  |
| send\_gift\_cost\_modifier | Send Gift Cost | country | multiplicative | percent, bad |  |
| sengoku\_ask\_for\_hostage\_cost\_modifier | Ask for Hostage Cost | country | multiplicative | percent, bad |  |
| sengoku\_attempt\_imperial\_restoration\_cost\_modifier | Attempt Imperial Restoration Cost | country | multiplicative | percent, bad |  |
| sengoku\_force\_end\_war\_cost\_modifier | Force End War Cost | country | multiplicative | percent, bad |  |
| sengoku\_increment\_recruitment\_cost\_modifier | Increment Recruitment Cost | country | multiplicative | percent, bad |  |
| sengoku\_limit\_clans\_autonomy\_cost\_modifier | Limit Clan's Autonomy Cost | country | multiplicative | percent, bad |  |
| sengoku\_offer\_hostage\_cost\_modifier | Offer Hostage Cost | country | multiplicative | percent, bad |  |
| sengoku\_proclaim\_clan\_independence\_cost\_modifier | Proclaim Clan Independence Cost | country | multiplicative | percent, bad |  |
| sengoku\_prove\_heritage\_cost\_modifier | Prove Heritage Cost | country | multiplicative | percent, bad |  |
| sengoku\_revoke\_clans\_land\_cost\_modifier | Revoke Land Cost | country | multiplicative | percent, bad |  |
| sengoku\_summon\_to\_court\_cost\_modifier | Summon to Court Cost | country | multiplicative | percent, bad |  |
| senior\_partner\_agenda\_impact | Agenda Impact for Senior Partner | internationalorganization |  | percent, good |  |
| senior\_partner\_can\_participate\_in\_parliament | Senior Partner in Parliament | internationalorganization | boolean | good |  |
| set\_cabine\_action\_cost\_modifier | Set Cabinet Action Cost | country | multiplicative | percent, bad |  |
| set\_cabinet\_member\_cost\_modifier | Set Cabinet Member Cost | country | multiplicative | percent, bad |  |
| set\_policy\_cost\_modifier | Set Policy Cost | country | multiplicative | percent, bad |  |
| set\_province\_capital\_cost\_modifier | Set Province Capital Cost | country | multiplicative | percent, bad |  |
| settle\_country\_cost\_modifier | Settle Cost | country | multiplicative | percent, bad |  |
| shameless\_privateering\_modifier | Shameless Privateering | country | boolean | neutral |  |
| shared\_border\_impact | Opinion Impact from Shared Borders | country |  | percent, bad |  |
| sheikh\_ul\_islam\_modifier | Šayḵ al-Islām | character | multiplicative | good |  |
| ship\_build\_speed | Ship-building Speed | country |  | percent, good |  |
| ship\_capture\_chance | Ship Capture Chance | country |  | percent, good |  |
| ship\_repair\_at\_sea | Ship Repair Speed at Sea | unit |  | percent, good |  |
| ship\_repair\_at\_sea\_to\_max\_strength | Maximum Ship Strength to Repair at Sea | unit |  | percent, good |  |
| shugo\_daimyo\_agenda\_impact | Agenda Impact for Shugo Daimyō | internationalorganization |  | percent, good |  |
| shugo\_daimyo\_can\_participate\_in\_parliament | Shugo Daimyō in Parliament | internationalorganization | boolean | good |  |
| siege\_ability | Siege Ability | unit |  | percent, good |  |
| silk\_impacts\_inflation | Silk Impacts Inflation | country |  | percent, good |  |
| silk\_used\_for\_minting | Silk Used for Coins | country | boolean | good |  |
| silver\_impacts\_inflation | Silver Impacts Inflation | country |  | percent, bad |  |
| silver\_used\_for\_minting | Silver Used for Coins | country | boolean | good |  |
| six\_boards\_bureaucracy\_impact\_modifier | Six Boards Impact | country | multiplicative | percent, good |  |
| sixty\_books\_of\_the\_basilika\_bureaucracy\_impact\_modifier | Books of the Basiliká Impact | country | multiplicative | percent, good |  |
| skill\_of\_new\_artists | Skill of New Artists | country |  | percent, good |  |
| slave\_market\_max\_level | Slave Market Max Level | country | additive | good |  |
| slave\_raid\_efficiency | Slave Raid Efficiency | country |  | percent, good |  |
| slavery\_blocked | Slavery Blocked | country | boolean | good |  |
| slaves\_goods\_impacts\_inflation | Slaves goods Impacts Inflation | country |  | percent, good |  |
| slaves\_goods\_used\_for\_minting | Slaves goods Used for Coins | country | boolean | good |  |
| small\_estate\_building\_cost\_modifier | Small Estate Building Cost | country, *estate* | multiplicative | percent, bad |  |
| societal\_value\_importance\_modifier | Societal Value Importance Modifier | country | multiplicative | good |  |
| sow\_discontent\_monthly\_cost\_cost\_modifier | Sow Discontent Monthly Cost Modifier | country | multiplicative | percent, bad |  |
| sponsor\_sin\_forgiveness\_cost\_modifier | Sponsor Mass Forgiveness Cost | country | multiplicative | percent, bad |  |
| sponsor\_the\_reformation\_cost\_modifier | Sponsor the Reformation Action Cost | country | multiplicative | percent, good |  |
| sponsor\_troop\_feast\_cost\_modifier | Sponsor a Feast for the Troops | country | multiplicative | percent, bad |  |
| spy\_network\_construction | Spy Network Construction | country |  | percent, good |  |
| stability\_cost\_efficiency | Stability Investment Efficiency | country |  | percent, good |  |
| stability\_decay | Stability Decay | country |  | percent, bad |  |
| stability\_importance\_modifier | Stability Importance Modifier | country | multiplicative | good |  |
| stability\_investment | Stability Investment | country |  | good |  |
| start\_exploration\_land\_cost\_modifier | Land Exploration Mission Cost | country | multiplicative | percent, bad |  |
| start\_exploration\_sea\_cost\_modifier | Sea Exploration Mission Cost | country | multiplicative | percent, bad |  |
| steel\_impacts\_inflation | Steel Impacts Inflation | country |  | percent, good |  |
| steel\_used\_for\_minting | Steel Used for Coins | country | boolean | good |  |
| stone\_impacts\_inflation | Stone Impacts Inflation | country |  | percent, good |  |
| stone\_used\_for\_minting | Stone Used for Coins | country | boolean | good |  |
| stop\_blame\_the\_minorities\_cost\_modifier | Stop Finding the Culprits Cost | country | multiplicative | percent, bad |  |
| stop\_disfavoring\_sect\_cost\_modifier | Stop Disfavoring Sect Cost | country | multiplicative | bad |  |
| stop\_procure\_remedies\_cost\_modifier | Stop to Procure Remedies Cost | country | multiplicative | percent, bad |  |
| stop\_promoting\_sect\_cost\_modifier | Stop Promoting Sect Cost | country | multiplicative | bad |  |
| stop\_sponsor\_sin\_forgiveness\_cost\_modifier | Stop Sponsor Mass Forgiveness Cost | country | multiplicative | percent, bad |  |
| strengthen\_ministry\_cost\_modifier | Strengthen Ministry Cost | country | multiplicative | percent, bad |  |
| strict\_quarantines\_cost\_modifier | Expel the Sick Cost | country | multiplicative | percent, bad |  |
| subject\_income\_modifier | Subject Income | country | multiplicative | percent, good |  |
| subject\_loyalty | Loyalty of Subjects | country |  | good |  |
| subject\_not\_obligated\_to\_join\_war | Can avoid to Join Overlord's Wars | country | boolean | bad |  |
| subject\_opinions | Subject Opinions | country |  | good |  |
| subject\_pays\_colonial\_cost\_modifier | Income from Colonial Subjects | country | multiplicative | percent, good |  |
| subject\_pays\_maha\_samanta\_cost\_modifier | Income from Mahā-Sāmanta Subjects | country | multiplicative | percent, good |  |
| subject\_pays\_march\_cost\_modifier | Income from March Subjects | country | multiplicative | percent, good |  |
| subject\_pays\_pradhana\_maha\_samanta\_cost\_modifier | Income from Pradhāna-Mahā-Sāmanta Subjects | country | multiplicative | percent, good |  |
| subject\_pays\_pronoia\_cost\_modifier | Income from Prónoia Subjects | country | multiplicative | percent, good |  |
| subject\_pays\_samanta\_cost\_modifier | Income from Sāmanta Subjects | country | multiplicative | percent, good |  |
| subject\_pays\_trade\_company\_cost\_modifier | Trade Company Pays Owner | country | multiplicative | percent, good |  |
| subject\_pays\_tributary\_cost\_modifier | Income from Tributary Subjects | country | multiplicative | percent, good |  |
| subject\_pays\_vassal\_cost\_modifier | Income from Vassal Subjects | country | multiplicative | percent, good |  |
| subjugation\_preference\_modifier | Subjugation Preference | country | multiplicative | good |  |
| succession\_crisis\_price\_cost\_modifier | Succession Crisis Actions Price Cost Modifier | country | multiplicative | percent, bad |  |
| sugar\_impacts\_inflation | Sugar Impacts Inflation | country |  | percent, good |  |
| sugar\_used\_for\_minting | Sugar Used for Coins | country | boolean | good |  |
| supply\_depot\_capacity | Supply Depot Capacity | country |  | good |  |
| supply\_limit | Supply Limit | location |  | good |  |
| take\_on\_debt\_cost\_modifier | Take On Debt Cost Modifier | country | multiplicative | percent, bad |  |
| tar\_impacts\_inflation | Tar Impacts Inflation | country |  | percent, good |  |
| tar\_used\_for\_minting | Tar Used for Coins | country | boolean | good |  |
| target\_of\_military\_sponsorships | May be Target of Military Sponsorships | country | boolean | good |  |
| tatar\_overlord\_agenda\_impact | Agenda Impact for Tatar-Overlord | internationalorganization |  | percent, good |  |
| tatar\_overlord\_can\_participate\_in\_parliament | Tatar-Overlord in Parliament | internationalorganization | boolean | good |  |
| tatar\_tax\_collector\_agenda\_impact | Tatar Tax Collector Agenda impact | internationalorganization |  | percent, good |  |
| tatar\_tax\_collector\_can\_participate\_in\_parliament | Grand Prince of Vladimir in Parliament | internationalorganization | boolean | good |  |
| tatar\_yoke\_contribution\_price\_cost\_modifier | Weather the Western Schism | country | multiplicative | percent, bad |  |
| tatar\_yoke\_leader\_payments\_price\_cost\_modifier | Yoke Payments | country | multiplicative | percent, bad |  |
| tax\_income\_efficiency | Tax Efficiency | country |  | percent, good |  |
| tea\_impacts\_inflation | Tea Impacts Inflation | country |  | percent, good |  |
| tea\_used\_for\_minting | Tea Used for Coins | country | boolean | good |  |
| themata\_bureaucracy\_impact\_modifier | Thémata Impact | country | multiplicative | percent, good |  |
| third\_rome\_cost\_modifier | Third Rome Cost | country | multiplicative | percent, bad |  |
| tin\_impacts\_inflation | Tin Impacts Inflation | country |  | percent, good |  |
| tin\_used\_for\_minting | Tin Used for Coins | country | boolean | good |  |
| tithe\_cost\_modifier | Tithe Cost Modifier | country | multiplicative | percent, bad |  |
| tithe\_price\_cost\_modifier | Tithe Cost Modifier | country | multiplicative | percent, bad |  |
| tobacco\_impacts\_inflation | Tobacco Impacts Inflation | country |  | percent, good |  |
| tobacco\_used\_for\_minting | Tobacco Used for Coins | country | boolean | good |  |
| tolerance\_heathen | Tolerance of Heathen Beliefs | country |  | good |  |
| tolerance\_heretic | Tolerance of Heretical Beliefs | country |  | good |  |
| tolerance\_own | Tolerance of the True Faith | country |  | good |  |
| tolerated\_culture\_maintenance\_cost\_modifier | Tolerated Culture Maintenance Cost | country | multiplicative | percent, bad |  |
| tools\_impacts\_inflation | Tools Impacts Inflation | country |  | percent, good |  |
| tools\_used\_for\_minting | Tools Used for Coins | country | boolean | good |  |
| tordesillas\_claim\_area\_price\_cost\_modifier | Claim Area | country | multiplicative | percent, good |  |
| tordesillas\_claim\_conflicting\_area\_price\_cost\_modifier | Claim Conflicting Area | country | multiplicative | percent, good |  |
| tordesillas\_demand\_transfer\_colony\_cost\_modifier | Demand the Transfer of a Claimed Province | country | multiplicative | percent, good |  |
| tordesillas\_move\_the\_line\_cost\_modifier | Shifting the Line | country | multiplicative | percent, good |  |
| tordesillas\_push\_to\_settle\_treaty\_cost\_modifier | Push to Settle Treaty | country | multiplicative | percent, good |  |
| tordesillas\_revoke\_claim\_cost\_modifier | Revoke a Claim | country | multiplicative | percent, good |  |
| tordesillas\_swap\_claim\_cost\_modifier | Exchange Claims | country | multiplicative | percent, good |  |
| tordesillas\_swap\_sides\_cost\_modifier | Exchange Sides | country | multiplicative | percent, good |  |
| tordesillas\_upheld\_treaty\_relevance\_cost\_modifier | Upheld the Treaty Relevance | country | multiplicative | percent, good |  |
| total\_loan\_capacity\_modifier | Total Loan Capacity | country | multiplicative | percent, good |  |
| total\_population\_capacity\_modifier | Population Capacity | location | multiplicative | percent, good |  |
| town\_upgrade\_cost\_modifier | Founding Town Cost | country | multiplicative | percent, bad |  |
| trade\_commission\_bureaucracy\_impact\_modifier | Trade Commission Impact | country | multiplicative | percent, good |  |
| trade\_company\_headquarters\_level | Max Level of Trade Company Headquarters | country |  | good |  |
| trade\_importance\_modifier | Trade Importance Modifier | country | multiplicative | good |  |
| trade\_income | Trade Income | country |  | percent, good |  |
| trade\_isolation | Foreigners Banned from Imports and Exports | country | boolean | good |  |
| trade\_land\_efficiency | Trade Land Efficiency | country |  | percent, good |  |
| trade\_range | Trade Range | country |  | good |  |
| trade\_range\_modifier | Trade Range | country | multiplicative | percent, good |  |
| trade\_sea\_efficiency | Trade Sea Efficiency | country |  | percent, good |  |
| train\_admiral\_ability | Increased Admiral Ability | country |  | good |  |
| train\_admiral\_cost\_modifier | Train Admiral Cost | country | multiplicative | percent, bad |  |
| train\_general\_ability | Increased General Ability | country |  | good |  |
| train\_general\_cost\_modifier | Train General Cost | country | multiplicative | percent, bad |  |
| transfer\_subject\_price\_cost\_modifier | Transfer Subject Cost Modifier | country | multiplicative | percent, bad |  |
| treasure\_voyage\_cargo\_size\_modifier | Treasure Voyage Cargo Size Modifier | country | multiplicative | percent, good |  |
| tribes\_estate\_agenda\_impact | Agenda Impact for Tribes | country, *estate* |  | percent, good |  |
| tribes\_estate\_allowed\_in\_cabinet | Tribes Allowed in Cabinet | country, *estate* | boolean | good |  |
| tribes\_estate\_allowed\_leading\_military | Tribes Allowed to Command | country, *estate* | boolean | neutral |  |
| tribes\_estate\_allowed\_to\_build\_rgo | Tribes Allowed to Expand R.G.O. | country, *estate* | boolean | good |  |
| tribes\_estate\_allowed\_to\_build\_roads | Tribes Allowed to Build Roads | country, *estate* | boolean | good |  |
| tribes\_estate\_blocked\_from\_cabinet | Tribes Blocked from Cabinet | country, *estate* | boolean | bad |  |
| tribes\_estate\_blocked\_from\_leading\_military | Tribes Blocked from Command | country, *estate* | boolean | bad |  |
| tribes\_estate\_blocked\_from\_parliament | No Tribes in Parliament | country, *estate* | boolean | good |  |
| tribes\_estate\_can\_participate\_in\_parliament | Tribes in Parliament | country, *estate* | boolean | good |  |
| tribes\_estate\_cannot\_marry | Tribes Cannot Marry | country, *estate* | boolean | bad |  |
| tribes\_estate\_levy\_size | Tribes Levy Size | country, *estate* |  | percent, good |  |
| tribes\_estate\_max\_tax | Maximum Tax for Tribes | country, *estate* |  | percent, good |  |
| tribes\_estate\_min\_tax | Minimum Tax for Tribes | country, *estate* |  | percent, good |  |
| tribes\_estate\_power\_from\_cabinet | Tribes Power from Cabinet Position | country, *estate* |  | percent, bad |  |
| tribes\_estate\_satisfaction\_decay | Tribes Satisfaction Decay | country, *estate* |  | percent, neutral |  |
| tribes\_estate\_satisfaction\_recovery | Tribes Satisfaction Recovery | country, *estate* |  | percent, neutral |  |
| tribes\_estate\_target\_satisfaction | Tribes Satisfaction Equilibrium | country, *estate* |  | percent, good |  |
| tribute\_payment\_received\_modifier | Middle Kingdom Tribute Received Modifier | country | multiplicative | percent, good |  |
| trust\_decay | Trust Decay Modifier | country |  | bad |  |
| trust\_recovery | Trust Recovery Modifier | country |  | good |  |
| twilight\_of\_the\_tsardom\_disaster\_actions\_price\_cost\_modifier | Twilight of the Tsardom Disaster Actions Cost | country | multiplicative | percent, bad |  |
| uc\_bey\_pays\_cost\_modifier | Income from Uç Beys | country | multiplicative | percent, good |  |
| unemployed\_slave\_promotion | Unemployed Slave Promotion | country |  | percent, good |  |
| unintegrated\_land\_expansion\_penalty\_modifier | Unintegrated Land Expansion Penalty | country | multiplicative | percent, good |  |
| union\_allowed\_enforce\_peace | Allow Enforce Union Peace in Union | internationalorganization | boolean | good |  |
| union\_blocked\_from\_declaring\_war | Blocked from Declaring War outside of Union | country | boolean | bad |  |
| union\_contribution\_price\_cost\_modifier | Union Contribution Cost Modifier | country | multiplicative | percent, bad |  |
| union\_integration\_level | Union Integration Level | internationalorganization |  | good |  |
| union\_unlock\_rein\_in\_junior\_diplomacy | Unlock Rein in Junior Diplomacy | internationalorganization | boolean | good |  |
| union\_weight | Union Weight | country |  | bad |  |
| university\_construction\_blocked | Cannot Construct Universities | country | boolean | bad |  |
| unlock\_align\_societal\_values\_member | Unlock Align Societal Values | internationalorganization | boolean | good |  |
| unlock\_contribute\_to\_organization\_treasury | Unlock Contribute to Organization Treasury | internationalorganization | boolean | good |  |
| unlock\_force\_convert\_member | Unlock Force Convert Member | internationalorganization | boolean | good |  |
| unlock\_hire\_artist\_from\_member | Unlock Hire Artist | internationalorganization | boolean | good |  |
| unlock\_hire\_cabinet\_character\_from\_member | Unlock Hire Cabinet Member | internationalorganization | boolean | good |  |
| unlock\_hire\_military\_leader\_from\_member | Unlock Hire Military Leader | internationalorganization | boolean | good |  |
| unlock\_improve\_relations\_member | Unlock Improve Relations | internationalorganization | boolean | good |  |
| unlock\_invest\_in\_members\_administration | Unlock Invest in Member's Administration | internationalorganization | boolean | good |  |
| unlock\_invest\_in\_members\_economy | Unlock Invest in Member's Economy | internationalorganization | boolean | good |  |
| unlock\_invest\_in\_members\_military | Unlock Invest in Member's Military | internationalorganization | boolean | good |  |
| unlock\_prikazi\_reform\_cabinet\_actions | Unlock Prikazi Cabinet Actions | country | boolean | good |  |
| unlock\_withdraw\_from\_organization\_treasury | Unlock Withdraw from Organization Treasury | internationalorganization | boolean | good |  |
| uses\_parliament\_for\_law\_votes | Uses Parliament for Law Changes | internationalorganization | boolean | good |  |
| violate\_treaty\_of\_tordesillas\_cost\_modifier | Violate the Treaty | country | multiplicative | percent, good |  |
| war\_breaking\_truce\_cost\_modifier | War Breaking Truce Cost | country | multiplicative | percent, bad |  |
| war\_breaking\_truce\_with\_guarantor\_cost\_modifier | War breaking Truce with Guarantor Cost | country | multiplicative | percent, bad |  |
| war\_council\_bureaucracy\_impact\_modifier | War Council Impact | country | multiplicative | percent, good |  |
| war\_declaration\_stab\_hit\_tolerance | War Declaration Stability Hit Tolerance | country |  | good |  |
| war\_declaration\_war\_exhaustion\_tolerance | War Declaration War-Exhaustion Tolerance | country |  | good |  |
| war\_good\_relations\_cost\_modifier | War when Good Relations Cost | country | multiplicative | percent, bad |  |
| war\_great\_relations\_cost\_modifier | War when Great Relations Cost | country | multiplicative | percent, bad |  |
| war\_no\_cb\_cost\_modifier | War with No Casus Belli Cost | country | multiplicative | percent, bad |  |
| war\_on\_different\_religion\_cost\_modifier | War on Different Religion Penalty | country | multiplicative | percent, bad |  |
| war\_on\_same\_religion\_cb\_cost\_modifier | War on Same Religion Penalty | country | multiplicative | percent, bad |  |
| war\_on\_same\_religion\_no\_cb\_cost\_modifier | Unjustified War on Same Religion Penalty | country | multiplicative | percent, bad |  |
| war\_on\_subject\_cost\_modifier | War on Subject Penalty | country | multiplicative | percent, bad |  |
| war\_score\_vs\_other\_religion\_efficiency | War Score vs other Religion Efficiency | country |  | percent, good |  |
| war\_when\_military\_acces\_cost\_modifier | War when Military Access Cost | country | multiplicative | percent, bad |  |
| weaponry\_impacts\_inflation | Weaponry Impacts Inflation | country |  | percent, good |  |
| weaponry\_used\_for\_minting | Weaponry Used for Coins | country | boolean | good |  |
| western\_schism\_gold\_actions\_price\_cost\_modifier | Weather the Western Schism | country | multiplicative | percent, bad |  |
| western\_schism\_ri\_actions\_price\_cost\_modifier | Influence the Western Schism | country | multiplicative | percent, bad |  |
| wetlands\_proximity\_impact | Wetlands Proximity Impact | country |  | percent, bad |  |
| wetlands\_wasteland\_proximity\_impact | Wetlands Wasteland Proximity Impact | country |  | percent, bad |  |
| wheat\_impacts\_inflation | Wheat Impacts Inflation | country |  | percent, good |  |
| wheat\_used\_for\_minting | Wheat Used for Coins | country | boolean | good |  |
| wild\_game\_impacts\_inflation | Wild game Impacts Inflation | country |  | percent, good |  |
| wild\_game\_used\_for\_minting | Wild game Used for Coins | country | boolean | good |  |
| win\_war\_chance\_lower\_limit | Win War Chance Lower Limit | country |  | percent, good |  |
| win\_war\_chance\_threshold | Win War Chance Threshold | country |  | percent, good |  |
| wine\_impacts\_inflation | Wine Impacts Inflation | country |  | percent, good |  |
| wine\_used\_for\_minting | Wine Used for Coins | country | boolean | good |  |
| wool\_impacts\_inflation | Wool Impacts Inflation | country |  | percent, good |  |
| wool\_used\_for\_minting | Wool Used for Coins | country | boolean | good |  |
| work\_of\_art\_quality\_modifier | Quality of Art | character | multiplicative | percent, good |  |
| work\_of\_art\_sell\_value\_modifier | Work of Art Sale Value | country | multiplicative | percent, good |  |
| wotr\_action\_price\_cost\_modifier | War of the Roses Main Actions Price Cost Modifier | country | multiplicative | percent, bad |  |
| wrong\_culture\_levy\_size | Non-Culture Levy Size | country |  | percent, good |  |
| years\_to\_annex\_members | Years to Annex Members | internationalorganization |  | neutral |  |
## References
---
* To update notes of defined modifier types, see [Module:Modifier type/List/Updates](/Module%3AModifier_type/List/Updates "Module:Modifier type/List/Updates")
* To update the potential modifier types, see [Module:Modifier type/Potential](/Module%3AModifier_type/Potential "Module:Modifier type/Potential")
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • Modifier types • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
