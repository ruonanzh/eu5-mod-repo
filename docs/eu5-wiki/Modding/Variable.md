<!-- source: https://eu5.paradoxwikis.com/Variable revid: 34696 fetched: 2026-09-09 -->
# Variable

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Variables** are special [scope links](/Scope_link "Scope link") that can hold values or scopes. Variables are set, removed, and modified by [effects](/Effect "Effect"). They can be checked with [triggers](/Trigger "Trigger") and also used as [scopes](/Scope "Scope").

## Variable types

There are three types of variables: "regular", global, and local.

| Variable type | Scoped | Persistent | Event target |
| --- | --- | --- | --- |
| "regular" | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | `var:` |
| global | ![No](/thumb.php?f=No.png&width=24 "No") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | `global_var:` |
| local | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | `local_var:` |

### Variable usage

Once a variable has been set, its value can be used in many effects and triggers. Any script where a [scope](/Scope "Scope") or [script value](/Script_value "Script value") can be used can generally accept a variable as well.

Variables can hold a numerical or boolean value, a game object as a scope, or a localization key. When saving a scope, variables can be used to set scope to that object as well.

Regular variables are saved to a game object and can only be referenced from that object's scope. Global and local variables are saved to no scope and can be referenced anywhere.

Local variables are temporary and are automatically removed at the end of the effect or event chain that created them. Regular and global variables are persistent and are not removed unless specifically scripted to.

### Variable values

The typical way to assign a value to a variable is to use the `set_variable` effect.

```
set_variable = {
  name = my_variable
  value = 1
}
```

Instead of a literal, the set of values mentioned above can also be used (booleans, scopes, script values, and other variables). Accessing the value of a variable, for comparisons or as a literal, can be done using `var:my_variable`.

In addition to static or script values, variables can also get their value from triggers that return a value. For example, to store the number of advances a country has in a variable, one can use

```
set_variable = {
  name = my_variable
  value = num_of_advances_researched
}
```

All triggers that can be used this way are listed below:

List of value triggers

| Trigger | Description | Example | Scopes |
| --- | --- | --- | --- |
| add\_estate\_satisfaction\_utility | Utility of adding however much estate satisfaction to the country | ``` add_estate_satisfaction_utility(<estate>|<amount>)  or add_estate_satisfaction_utility = {  type = <estate type>  amount = <amount>  value <operator><threshold> } ``` | country |
| add\_static\_modifier\_utility | Checks the AI utility of adding a static modifier to the scoped object | ``` add_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | character, country, location |
| adm | The adm ability of the character |  | character |
| age\_in\_days | How old is a character??? |  | character |
| age\_in\_years | How old is a character??? |  | character |
| ai\_issue\_voting\_bias | gets the AI evaluation score for voting bias from the international organization |  | none |
| ai\_parliament\_issue\_resolution\_vote\_bias | gets the AI evaluation score for resolution voting bias from the parliament issue |  | parliament\_issue |
| ai\_policy\_reason\_to\_join | Gets the AI evaluation score for joining an IO due to its policies | ``` ai_policy_reason_to_join = {  actor = <country scope>  international_organization = <international organization scope>  value = <script_value> }  OR ai_policy_reason_to_join(<country scope>|<international organization scope>) = <script_value> ``` | policy |
| ai\_policy\_resolution\_keep\_bias | Gets the AI evaluation score for keeping the policy in a vote | ``` ai_policy_resolution_keep_bias = {  actor = <country scope>  international_organization = <international organization scope>  value = <script_value> }  OR ai_policy_resolution_keep_bias(<country scope>|<international organization scope>) = <script_value> ``` | policy |
| ai\_policy\_resolution\_propose\_bias | gets the AI evaluation score for proposing the policy in a vote |  | policy |
| ai\_policy\_resolution\_vote\_bias | gets the AI evaluation score for resolution voting bias from the policy |  | policy |
| ai\_unlock\_unit\_score | Returns the score for AI to unlock a unit |  | country |
| ai\_will\_do | gets the AI evaluation score of the supplied generic action ofr the supplied country |  | none |
| annexation\_cost | How much does the target country cost for the current country to annex? | ``` annexation_cost = {  target = <target country>  value = <script_value> }  or annexation_cost(<target country>) ``` | country |
| antagonism | is the country's antagonism towards the target greater or equal than the value? | ``` antagonism = {  target = X  value <operator> Y  or  value = { min max } } ``` | country |
| area\_average\_control | Checks the average\_control of an area |  | area |
| area\_average\_integration | Checks the average\_integration of an area |  | area |
| area\_exploration\_progress | gets the exploration progress (0..1) for a country in the scope area |  | area |
| army\_maintenance | What is the xx position (0-1) the country has? |  | country |
| army\_size | Checks if a country has a certain army size |  | country |
| army\_size\_percentage | Checks if a country has a certain percentage of regiments compared to expected size |  | country |
| army\_tradition | How much army tradition does the country/IO have? |  | country, international\_organization |
| army\_tradition\_percentage | How high the percentage of the current army tradition compared to the maximum does the country/IO have? |  | country, international\_organization |
| art\_progress | The amount of progress an artist has made on a work of art |  | character |
| art\_quality | Checks the quality of the artwork |  | work\_of\_art |
| artist\_skill | The artist skill of the character |  | character |
| available\_merchant\_capacity | gets the market available merchant capacity for a country in the scope market |  | market |
| average\_control\_in\_home\_region | Checks the average control in the home region |  | country |
| average\_country\_literacy | Checks if a country has a certain average\_literacy |  | country |
| average\_estate\_satisfaction | How high is the average estate satisfaction in the country? The crown estate gets ignored here. |  | country |
| average\_location\_literacy | Checks if a location has a certain average literacy |  | location |
| average\_satisfaction | Checks if a location has a certain average satisfaction of its pops |  | location |
| average\_special\_status\_power | Get the average political power of the target special status. | ``` average_special_status_power = {  type = <special status>  value <operator> <float> }  or average_special_status_power(<special status>) ``` | international\_organization |
| besieger\_strength | Check the total strength of the besiegers for the siege in scope |  | siege |
| border\_distance\_to | gets distance between borders of two nations or a location and a nation. | ``` border_distance_to = {  country = x  value [operator] y }  or border_distance_to(country) ``` | country, location |
| building\_efficiency | does the location have the specific efficiency of a building |  | location |
| building\_employed\_amount | What's the current effective amount of employed workers? |  | building |
| building\_employment\_size\_amount | What's the max workers amount? |  | building |
| building\_goods\_input | Check how much goods the scope building requires. |  | building |
| building\_index | Checks building index (order in which it was built) |  | building |
| building\_level | Check the level of this Building? |  | building |
| building\_levels\_under\_construction | Check the level of this Building? |  | building |
| building\_manpower\_produced | Checks how much manpower the building type produces |  | building\_type |
| building\_max\_level | Gets the max level for a building |  | building |
| building\_potential\_profit | Checks how much profit the building could make if at full worker capacity |  | building |
| building\_profit | Checks building profit |  | building |
| building\_sailors\_produced | Checks how many sailors the building type produces |  | building\_type |
| building\_type\_max\_level | Gets the max level for a building type in a location. | ``` building_type_max_level = {  building_type = <building type scope>  [owner = <country scope>]  value <operator> <compare value> } ``` | location |
| cancel\_exploration\_utility | Utility of an cancelling and exploration to the country | ``` cancel_exploration_utility(<area>)  or exploration_utility = {  area = <area>  value <operator><threshold> } ``` | country |
| cb\_creation\_progress\_against | Checks the progress of the casus belli creation against the target country in percentage. | ``` cb_creation_progress_against = {  target = <country scope>  value = <script_value> }  or cb_creation_progress_against(<country scope>) ``` | country |
| colonial\_charter\_progress | Progress of a colonial charter | ``` colonial_charter_progress(<province definition>)  or colonial_charter_progress = {  province_definition = <province definition>  value <operator><threshold> } ``` | country |
| colonial\_charter\_utility | Utility of a colonial charter | ``` colonial_charter_utility(<province definition>|<source province>)  or colonial_charter_utility = {  province_definition = <province definition>  source = <source province>  value <operator><threshold> } ``` | country |
| colonial\_charter\_value | value of the colonial charter |  | colonial\_charter |
| colonial\_maintenance | What is the xx position (0-1) the country has? |  | country |
| colonial\_range | The colonial range of the country |  | country |
| combat\_side\_strength | Checks the strength of the combat side in scope |  | combat\_side |
| combined\_special\_status\_power | Get the combined special status power of ALL special statuses in the international organization |  | international\_organization |
| combined\_unique\_special\_status\_power | Get the combined special status power of all countries with their highest ranking special status in the international organization |  | international\_organization |
| compare\_value | Compare the current value. |  | value |
| complacency | How much complacency does the country/IO have? |  | country, international\_organization |
| complacency\_percentage | How high the percentage of the current complacency compared to the maximum does the country/IO have? |  | country, international\_organization |
| conquer\_desire | Gets how much the AI wants to conquer the supplied country | ``` conquer_desire(<target>)  or conquer_desire = {  target = <country link>  value <operator> <amount> } ``` | country |
| conquistador\_utility | Utility of a conquistador | ``` conquistador_utility(<area>)  or conquistador_utility = {  area = <area>  value <operator><threshold> } ``` | country |
| country\_art\_quality | Checks the total art quality in a Country |  | country |
| country\_combined\_special\_status\_power | Get the political power of the country within the target international organization with all of its special statuses combined. | ``` country_combined_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or country_combined_special_status_power(<IO>) ``` | country |
| country\_combined\_special\_status\_power\_fraction | Get the political power fraction of the country within the target international organization with all of its special statuses combined. | ``` country_combined_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or country_combined_special_status_power(<IO>) ``` | country |
| country\_economical\_base | Checks the total economical base of a country |  | country |
| country\_estate\_loan\_size | Checks the size of a loan given by the estates to a country |  | country |
| country\_has\_been\_member\_for\_years | Checks if the country has been in the current international organization scope for x years. | ``` country_has_been_member_for_years = {  country = <country scope>  value = <years> }  or country_has_been_member_for_years(country) ``` | international\_organization |
| country\_highest\_rated\_special\_status\_power | Get the political power of the country within the target international organization of its highest prioritized special status. | ``` highest_rated_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or highest_rated_special_status_power(<IO>) ``` | country |
| country\_interaction\_acceptance | How high is the target country's AI value of accepting the country interaction done by the current country scope? Always return 0 if the target is a player | ``` country_interaction_acceptance = {  type = <country interaction>  target = <country>  value = <script_value> }  or country_interaction_acceptance(<country interaction>|<country>) ``` | country |
| country\_loan\_capacity | Checks how much more money a country can borrow |  | country |
| country\_rank\_level | level of the country rank of a country |  | country |
| country\_rank\_level\_on\_date | level of the country rank of a country on a particular date |  | country |
| country\_strength | Strength of a country, including their troop numbers as well as tax base and manpower |  | country |
| country\_tax\_base | Checks the total tax base of a country |  | country |
| country\_total\_army\_levy\_size | Gets the total number of army levies available to the country |  | country |
| country\_total\_navy\_levy\_size | Gets the total number of navy levies available to the country |  | country |
| court\_language\_utility | Utility of a court language accorting to Ai |  | dialect, language |
| court\_maintenance | What is the xx position (0-1) the country has? |  | country |
| create\_market\_utility | Utility of creating a market | ``` create_market_utility(<location>)  or create_market_utility = {  location = <location>  value <operator><threshold> } ``` | country |
| cultural\_influence | How much influence does the culture have? |  | culture |
| cultural\_maintenance | What is the xx position (0-1) the country has? |  | country |
| cultural\_tradition | How much tradition does the culture have? |  | culture |
| cultural\_unity | Checks the fraction of the population sharing the country's primary culture |  | country |
| culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population_percentage = {  culture_group = <culture group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| culture\_group\_percentage\_in\_country | The percentage of a specific culture group in the current country |  | country |
| culture\_group\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population = {  culture_group = <culture group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| culture\_group\_population\_in\_country | The number of pops of a specific culture group in the current country |  | country |
| culture\_opinion\_impact | Opinion impact of a particular culture on another | ``` culture_opinion_impact(<culture link>)  or culture_percentage = {  culture = <culture link>  value <operator> <amount> } ``` | culture |
| culture\_percentage | Gets the percentage of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| culture\_percentage\_in\_area | gets the percentage of the population that follow a particular culture in the area | ``` culture_percentage_in_area = {  country = <country>  culture = <culture>  value <operator> <script_value> } ``` | area |
| culture\_percentage\_in\_country | The percentage of a specific culture in the current country |  | country |
| culture\_population | Gets the absolute number of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| culture\_population\_in\_country | The number of pops of a specific culture in the current country |  | country |
| currency\_percentage\_towards\_limit | Gets currency progress towards specified limit |  | country, international\_organization |
| currency\_utility | Utility of an amount of currency to the country | ``` currency_utility(<currency>|<amount>)  or currency_utility = {  currency = <currency>  amount = <amount> } ``` | country |
| current\_month | Compare the current ingame month (1..12) |  | none |
| current\_ruler\_term\_years | Checks the current ruler term length in years. |  | country |
| current\_tooltip\_depth | What is the number of tooltips open right now? |  | none |
| current\_year | Compare the current ingame year |  | none |
| days\_as\_rebel | Check how many days the character has been a rebel. |  | character |
| days\_of\_service\_as\_admiral | Check how many days the character has served as an admiral. |  | character |
| days\_of\_service\_as\_general | Check how many days the character has served as a general. |  | character |
| days\_of\_service\_in\_cabinet | Check how many days the character has served in a cabinet. |  | character |
| days\_since\_disaster\_end | Checks if x days have passed since the end of the disaster. Returns -1 if the disaster has never ended. |  | disaster |
| days\_since\_disaster\_start | Checks if x days have passed since the start of the disaster. Returns -1 if the disaster has never started. |  | disaster |
| days\_since\_situation\_end | Checks if x days have passed since the end of the situation. Returns -1 if the situation has never ended. |  | situation |
| days\_since\_situation\_start | Checks if x days have passed since the start of the situation. Returns -1 if the situation has never started. |  | situation |
| defensive\_alliance\_strength | Strength of a defensive alliance, including the nation with all countries giving defensive support and those that can be called in for defensive wars |  | country |
| dependency\_length\_days | returns the number of days a country has been in a dependency (overlord/subject) relationship with the target country. | ``` dependency_length_days = {  target = <country>  value <comparator> <script_value> } ``` | country |
| destroy\_market\_utility | Utility of destroying a market | ``` destroy_market_utility(<location>)  or destroy_market_utility = {  location = <location>  value <operator><threshold> } ``` | country |
| development | Checks if a location has a certain Development |  | location |
| devotion | How much devotion does the country/IO have? |  | country, international\_organization |
| devotion\_percentage | How high the percentage of the current devotion compared to the maximum does the country/IO have? |  | country, international\_organization |
| dip | The dip ability of the character |  | character |
| diplomatic\_capacity\_of\_new\_relation | Diplomatic capacity that will be used if the country obtains this diplomatic relation |  | country |
| diplomatic\_capacity\_without\_maintenance | Diplomatic capacity that country would have without paying anything for maintenance |  | country |
| diplomatic\_maintenance | What is the xx position (0-1) the country has? |  | country |
| diplomatic\_range | Is the target country within diplomatic range? |  | country |
| discount\_needed\_for\_law\_change | Checks how much more discount % is needed for Ai to change a law |  | country |
| disease\_country\_deaths | Checks the number of deaths from a disease in a country. | ``` disease_country_deaths(<disease>) disease_country_deaths = {  target = <disease>  value <comparator> <real> } ``` | country |
| disease\_outbreak\_country\_deaths | Checks the number of deaths from an outbreak in a country. | ``` disease_outbreak_country_deaths(<disease_outbreak>) disease_outbreak_country_deaths = {  disease_outbreak = <disease_outbreak>  value <comparator> <real> } ``` | country |
| disease\_outbreak\_presence | Checks the presence of a disease in a location or subunit. | ``` disease_outbreak_presence(<disease_outbreak>)  or disease_outbreak_presence = {  disease_outbreak = <disease_outbreak>  value <comparator> <real> } ``` | location, sub\_unit |
| disease\_outbreak\_total\_deaths | How many people have been killed by this disease outbreak? |  | disease\_outbreak |
| disease\_presence | Checks the presence of a disease in a location or subunit. | ``` disease_presence(<disease>)  or disease_presence = {  disease = <disease>  value <comparator> <real> } ``` | location, sub\_unit |
| disease\_resistance | Checks the resistance to a disease in a location or subunit. | ``` disease_resistance(<disease>)  or disease_resistance = {  target = <disease>  value <comparator> <real> } ``` | location, sub\_unit |
| disease\_total\_deaths | How many people have been killed by this disease? |  | disease |
| distance\_to | gets distance between locations |  | location |
| distance\_to\_area | gets distance between a location and an area |  | location |
| distance\_to\_squared | gets distance squared as the crow flies between locations (much quicker than distance\_to, useful if you're just comparing) |  | location |
| doom | How much doom does the country/IO have? |  | country, international\_organization |
| doom\_percentage | How high the percentage of the current doom compared to the maximum does the country/IO have? |  | country, international\_organization |
| dynastic\_power | Returns the dynastic power of the scope dynasty or country. For countries, check ruler dynasty or heir dynasty if in regency. | ``` dynastic_power = {  international_organization = <IO>  value <operator> <script_value> }  or dynastic_power(<IO>) ``` | country, dynasty |
| effective\_skill | Check the skill level of this cabinet |  | cabinet |
| employment\_percentage | Checks if a location has a certain unemployement percentage |  | location |
| employment\_size | Returns the employment size of a building type per building level |  | building\_type |
| employment\_system\_desire | returns how much the country wants the target employment system. | ``` employment_system_desire = {  target = <employment system>  value <comparator> <script_value> } ``` | country |
| estate\_gold | The gold of an estate |  | estate |
| estate\_loan\_interest | Checks the interest of a loan |  | country |
| estate\_max\_tax | the current max-tax of an estate in a country | ``` estate_max_tax(<estate_type link>)  or estate_max_tax = {  estate_type = <estate_type link>  value <operator> <amount> } ``` | country |
| estate\_opinion | the current opinion that an estate in a country has of another country | ``` estate_opinion(<estate_type link>|<country>)  or estate_opinion = {  estate_type = <estate_type link>  target = country  value <operator> <amount> } ``` | country |
| estate\_satisfaction | the current satisfaction of an estate in a country | ``` estate_satisfaction(<estate_type link>)  or estate_satisfaction = {  estate_type = <estate_type link>  value <operator> <amount> } ``` | country |
| estate\_tax | The current tax the estate has to pay |  | estate |
| estate\_tax\_rate | The current percentage of tax the estate has to pay. Returns 1 if the estate gets fully taxed even if the max possible tax is below 100% |  | estate |
| estate\_taxable\_income | The taxable income of an estate |  | estate |
| expected\_army\_size | Checks if a country has a certain expected army size |  | country |
| expected\_navy\_size | Checks if a country expects to have a certain amount of ships |  | country |
| experience\_percentage | How many percent experience does this unit have??? |  | unit |
| exploration\_expected\_cost | gets the exploration expected cost for a country in the scope area |  | area |
| exploration\_maintenance | What is the xx position (0-1) the country has? |  | country |
| exploration\_monthly\_cost | what is the monthly cost of an exploration? |  | exploration |
| exploration\_monthly\_progress | what is the monthly progress of an exploration? |  | exploration |
| exploration\_needed\_time | gets the exploration needed time (months) for a country in the scope area |  | area |
| exploration\_progress | what is the progress of an exploration? |  | exploration |
| exploration\_time | what is the total needed progress of an exploration? |  | exploration |
| exploration\_utility | Utility of an exploration to the country | ``` exploration_utility(<area>|<character>)  or exploration_utility = {  area = <area>  character = <character>  value <operator><threshold> } ``` | country |
| favors | How much favors does the country have in the target? | ``` favors = {  target = X  value <operator> Y  or  value = { min max } } ``` | country |
| favors\_needed\_to\_annul\_relations\_with | Gets the number of favours needed to annul relations with the target country diplomatically | ``` "favors_needed_to_annul_relations_with(<target>)" or favors_needed_to_annul_relations_with = {  target = <country link>  value <operator> <amount> } ``` | country |
| fertility | The fertility of the character |  | character |
| food\_consumption | Amount of consumed food |  | location |
| food\_maintenance | What is the xx position (0-1) the country has? |  | country |
| food\_percentage | How many percent of food does this unit have??? |  | unit |
| food\_price | Checks how much the food in the current market costs |  | market |
| food\_production | Amount of food production |  | location |
| food\_value | Check the food value of the goods scope. |  | goods |
| fort\_maintenance | What is the xx position (0-1) the country has? |  | country |
| garrison\_percentage | Checks the garrison percentage of the location in scope |  | location |
| garrison\_strength | Checks the garrison strength of the location in scope |  | location |
| get\_antagonism | how much of an antagonism type does the country have towards another country? |  | country |
| get\_opinion | how much of an opinion type does the country have towards another country? |  | country |
| get\_trust | how much of a trust type does the country have towards another country? |  | country |
| gold | How much gold does the country/IO have? |  | country, international\_organization |
| gold\_percentage | How high the percentage of the current gold compared to the maximum does the country/IO have? |  | country, international\_organization |
| goods\_demand\_in\_market | Checks how much demand exists of a good in the market. | ``` goods_demand_in_market = {  goods = <goods>  value = <script_value> }  or goods_demand_in_market(<goods>) ``` | market |
| goods\_output | Check how much goods the scope location produces. |  | location |
| goods\_supply\_in\_market | Checks how much supply exists of a good in the market. | ``` goods_supply_in_market = {  goods = <goods>  value = <script_value> }  or goods_supply_in_market(<goods>) ``` | market |
| government\_power | How much government power does the country/IO have? |  | country, international\_organization |
| government\_power\_percentage | How high the percentage of the current government power compared to the maximum does the country/IO have? |  | country, international\_organization |
| great\_power\_ranking | Country's position in the list of great powers |  | country |
| great\_power\_score | Checks if a country has a certain Great Power Score |  | country |
| had\_disaster\_for\_years | Check if the country scope had the specified disaster type for a specific amount of years. | ``` had_disaster_for_years = {  disaster_type = <disaster type>  years = <years> }  or had_disaster_for_years(<disaster type>) ``` | country |
| harmony | How much harmony does the country/IO have? |  | country, international\_organization |
| harmony\_percentage | How high the percentage of the current harmony compared to the maximum does the country/IO have? |  | country, international\_organization |
| heathen\_population\_fraction | Checks the fraction of the population having a different religious group than the country |  | country |
| heir\_candidates\_count | Checks amount of heirs in heir selection for country |  | heir\_selection |
| heir\_position | Character's position in line for its country's throne |  | character |
| heir\_score | Get the hypothetical heir score of the character for the target country, even if the character in question could not be an heir. |  | character |
| heir\_score\_country | Get the hypothetical heir score of the target character for the current country, even if the character in question could not be an heir. |  | country |
| heir\_score\_home | Get the hypothetical heir score of the character in the country they currently reside in. |  | character |
| heretic\_population\_fraction | Checks the fraction of the population having a different religion in the same group as the country |  | country |
| higher\_temporary\_taxes\_needed | Checks how much more max tax a country wants |  | country |
| hire\_price | how much would it cost to hire this unit as a merc. | ``` hire_price(<cost multiplier>|<duration in months>) ``` | unit |
| honor | How much honor does the country/IO have? |  | country, international\_organization |
| honor\_percentage | How high the percentage of the current honor compared to the maximum does the country/IO have? |  | country, international\_organization |
| horde\_unity | How much horde\_unity does the country/IO have? |  | country, international\_organization |
| horde\_unity\_percentage | How high the percentage of the current horde\_unity compared to the maximum does the country/IO have? |  | country, international\_organization |
| implementation\_progress\_percentage | Checks if the current government reform/avatar/estate privilege /god/policy/law/cabinet action scope has been implemented in percentage. |  | avatar, cabinet\_action, estate\_privilege, god, government\_reform, law, policy |
| inflation | How much inflation does the country/IO have? |  | country, international\_organization |
| inflation\_percentage | How high the percentage of the current inflation compared to the maximum does the country/IO have? |  | country, international\_organization |
| integration\_progress | Checks the integration progress of a location |  | location |
| international\_organization\_leader\_count | Checks how many leaders (defined as 'leaders' in the IO type) are currently present in the current international organization |  | international\_organization |
| international\_organization\_leader\_reign | Checks if the ruler of an international organization has ruled for x years |  | international\_organization |
| international\_organization\_leader\_reign\_in\_days | Checks if the ruler of an international organization has ruled for x days |  | international\_organization |
| international\_organization\_lifetime | Checks if the international organization has existed for x years |  | international\_organization |
| international\_organization\_lifetime\_in\_days | Checks if the international organization has existed for x days |  | international\_organization |
| international\_organization\_locations\_owned\_percentage | The percentage of the locations of an international organization owned by a country |  | international\_organization |
| international\_organization\_num\_locations | Checks if an international organization has a certain amount of owned locations |  | international\_organization |
| international\_organization\_population | Checks if an international organization has a certain population based on the locations it owns |  | international\_organization |
| intrinsic\_disease\_resistance | Checks the intrinsic disease resistance in a location (e.g. from buildings) |  | location |
| is\_in\_surplus\_in\_market | Gets the possible trade surplus of the scope goods in the target market. |  | goods |
| join\_organization\_ai\_desire | Returns the AI desire to join the specified target international organization. | ``` join_organization_ai_desire = {  international_organization = <IO scope>  value = <script_value> }  or join_organization_ai_desire(<IO scope>) ``` | country |
| karma | How much karma does the country/IO have? |  | country, international\_organization |
| karma\_percentage | How high the percentage of the current karma compared to the maximum does the country/IO have? |  | country, international\_organization |
| language\_percentage\_in\_country | The percentage of speakers of a specific language in the current country |  | country |
| language\_power | How much power does the language has (percent of best)? |  | dialect, language |
| leader\_special\_status\_power | Get the special status power of all special statuses with the 'leader' trait |  | international\_organization |
| leader\_special\_status\_power\_fraction | Get the fraction of the special status power of all special statuses with the 'leader' trait |  | international\_organization |
| legitimacy | How much legitimacy does the country/IO have? |  | country, international\_organization |
| legitimacy\_percentage | How high the percentage of the current legitimacy compared to the maximum does the country/IO have? |  | country, international\_organization |
| liberty\_desire | Checks the amount of liberty desire a country has |  | country |
| list\_size | Checks the size of a list | ``` list_size = {  name = <list_name>  value >= <script_value> } ``` | none |
| liturgical\_language\_utility | Utility of a liturgical language accorting to Ai |  | dialect, language |
| loan\_amount | Checks the amount of a loan |  | loan |
| loan\_interest | Checks the interest of a loan |  | loan |
| local\_control | Checks if a location has a certain control |  | location |
| local\_cultural\_unity | Checks the percentage the dominant-culture has in a location |  | location |
| local\_estate\_power | Checks the raw local estate power in location |  | location |
| local\_political\_power\_fraction | Checks the fraction this location has of the total political power of a country |  | location |
| local\_relative\_estate\_power | Checks the relative local estate power in location |  | location |
| local\_religious\_unity | Checks the percentage the dominant-religion has in a location |  | location |
| location\_art\_quality | Checks the total art quality in a location |  | location |
| location\_building\_level | Checks if a location has a building type at a certain level (with optional owner) |  | location |
| location\_counter | Checks if the province/province\_defintion/area/region / subcontinent/continent/scripted\_geography has this amount of location |  | area, continent, province, province\_definition, region, scripted\_geography, sub\_continent |
| location\_maritime\_merchant\_power | gets the maritime merchant power for a country in the scope location |  | location |
| location\_maritime\_presence\_power | gets the maritime presence power for a country in the scope location. | ``` location_maritime_presence_power = {  country = <country scope>  value <operator> <number> } ``` | location |
| location\_max\_population | Checks if a location has a certain pixel count |  | location |
| location\_net\_building\_profit | Checks the net profit from buildings in a location |  | location |
| location\_num\_holy\_sites | Number of holy sites in the location |  | location |
| location\_num\_works\_of\_art | Checks if a location has a certain number of works of art |  | location |
| location\_peace\_cost | gets the peace cost for the location according to giver and taker countries | ``` usage in trigger: location_peace_cost = { 	giver = <country> 	taker = <country> 	value <operand> <threshold>  #ex: value < 10 } usage in scripted value: location_peace_cost(<giver>|<taker>) ``` | location |
| location\_population\_percentage | Checks if a location has a certain percentage of population capacity |  | location |
| location\_privateer\_power | gets the maritime privateeer power for a country in the scope location |  | location |
| location\_progress\_for\_formable | Checks the progress of the country scope to form the specified formable in percentage. | ``` location_progress_for_formable = {  formable_country = <formable scope>  value = <script_value> }  or location_progress_for_formable(<formable scope>) ``` | country |
| location\_size | Checks if a location has a certain pixel count |  | location |
| location\_tax\_base | Checks the tax-base of a location |  | location |
| location\_unemployed\_population\_for\_building\_type | Checks if a location has a certain unemployed population for the supplied building type (with optional owner) |  | location |
| location\_works\_of\_art\_star\_rating | Checks if a country has a certain amount of work of arts |  | location |
| long\_term\_trigger\_currency\_utility | Checks the AI utility of adding an amount of a certain trigger every month to the scoped object | ``` long_term_trigger_currency_utility = {  trigger = <trigger>  size = <size>  target = <optional target>  value >= <script_value> } ``` | country |
| lowest\_prosperity | Find the location in a province with the lowest prosperity |  | province |
| lowest\_war\_score | Checks the lowest war score of ongoing wars |  | country |
| manpower | How much Manpower does the country/IO have? |  | country, international\_organization |
| manpower\_percentage | Checks the percentage of manpower a country has compared to its maximum |  | country |
| market\_access | Checks if a location has certain market access |  | location |
| market\_food | Checks how much food is in the market stockpile |  | market |
| market\_food\_deficit | Checks how much food is missing in the market |  | market |
| market\_food\_percentage | Checks how much food is in the market stockpile percentage wise |  | market |
| market\_food\_traded | Checks how much food is traded in the market |  | market |
| market\_max\_food | Checks how much food can be stockpiled in the market |  | market |
| market\_monthly\_food\_balance | Checks what the food balance is in the market |  | market |
| market\_population | Checks how many pops are in the market |  | market |
| market\_possible\_goods\_trade\_surplus | gets the possible trade surplus for the goods in the scope market |  | market |
| max\_control | Checks the max control in a location |  | location |
| max\_countries\_with\_special\_status | gets the max number of countries with a specific special status in an international organization |  | international\_organization |
| max\_garrison\_strength | Checks the max garrison strength of the location in scope |  | location |
| max\_manpower | Checks if a country has a certain Max manpower |  | country |
| max\_possible\_candidates | Maximum number of candidates for the heir selection.i.e. the number of choices the player will have when an election occurs | ``` max_possible_candidates <operator> <amount> ``` | heir\_selection |
| max\_religious\_aspects | Checks the amount of church aspects the religion has |  | religion |
| max\_rgo\_workers | Checks if a location has a certain max number of RGO workers |  | location |
| max\_sailors | Checks if a country has a certain Max Sailors |  | country |
| max\_sects | number of sects available per country from the scope religion |  | religion |
| merchant\_capacity | gets the market merchant capacity for a country in the scope market |  | market |
| merchant\_power\_in\_market | gets the market merchant power for a country in the scope market |  | market |
| migration\_attraction | Checks if a location has a certain migration\_attraction |  | location |
| mil | The mil ability of the character |  | character |
| military\_strength | Checks the total military strength (max manpower, army size, levy power) of a country |  | country |
| military\_tech\_level | Checks if a country has a certain level of military tech |  | country |
| modifier\_utility | Checks the AI utility of a modifier |  | avatar, character, country, god, government\_reform, international\_organization, location, policy, province, religion, religious\_aspect, religious\_school, unit |
| modifier\_utility\_include\_locations | Checks the AI utility of a modifier with location checks |  | avatar, character, country, god, government\_reform, international\_organization, location, policy, province, religion, religious\_aspect, religious\_school, unit |
| monthly\_balance | Checks the monthly balance of a country |  | country |
| monthly\_conversion | Checks if a location has an potential conversion of X per month |  | location |
| monthly\_cost | Checks the monthly cost of a mercenary |  | mercenary |
| monthly\_income\_total | Checks if a country has a certain income |  | country |
| monthly\_income\_trade\_and\_tax | Checks if a country has a certain trade and tax income |  | country |
| monthly\_manpower | Checks if a country has a certain monthly manpower |  | country |
| monthly\_sailors | Checks if a country has a certain monthly Sailors |  | country |
| monthly\_trade\_income | Checks if a country has a certain income from trade |  | country |
| months\_between\_leader\_changes | Checks if a country has a specific reform |  | international\_organization |
| months\_left | Checks the months left of loan |  | loan |
| months\_since\_last\_parliament\_called | Checks how many months its been since the country / international organization last called a parliament |  | country, international\_organization |
| months\_since\_peace | Checks how many months its been since a country was at peace |  | country |
| months\_since\_war | Checks how many months its been since a country was at War |  | country |
| morale\_percentage | How many percent morale does this unit have??? |  | unit |
| naval\_range | The naval range of the country |  | country |
| navy\_maintenance | What is the xx position (0-1) the country has? |  | country |
| navy\_size | Checks if a country has a certain amount of ships |  | country |
| navy\_size\_percentage | Checks if a country has a certain percentage of ships compared to expected size |  | country |
| navy\_tradition | How much navy tradition does the country/IO have? |  | country, international\_organization |
| navy\_tradition\_percentage | How high the percentage of the current navy tradition compared to the maximum does the country/IO have? |  | country, international\_organization |
| needs\_opinion\_with | Determines if a country needs X more relations with another nation. | ``` needs_opinion_with = {  target = <country>  value <comparator> <script_value> } ``` | country |
| num\_adult\_capable\_characters | Checks if a country has a certain amount of adult characters who can do cabinet or military stuff |  | country |
| num\_affected\_locations | How many locations are affected? |  | disease\_outbreak |
| num\_army\_constructions | Check how many army\_constructions a location has |  | location |
| num\_artists | Checks if a country has a certain amount of artists |  | country |
| num\_avatars | Checks if a country has a certain amount of avatars |  | country |
| num\_buildings | Checks if a location has a certain amount of buildings |  | location |
| num\_cardinals | Checks if a country has a certain amount of Cardinals |  | country |
| num\_characters | Checks if a country has a certain amount of living characters |  | country |
| num\_civil\_constructions | Check how many civil\_constructions a location has |  | location |
| num\_colonial\_charters | Checks if a country has a certain amount of colonial charters |  | country |
| num\_countries\_in\_religion | number of countries in the religion |  | religion |
| num\_countries\_with\_special\_status | gets the number of countries with a particular special status in an international organization |  | international\_organization |
| num\_embraced\_institutions | Checks if a country has a certain number of institutions embraced |  | country |
| num\_explorations | Checks if a country has a certain amount of Explorations |  | country |
| num\_foreign\_buildings | Checks if a location has a certain amount of foreign buildings |  | location |
| num\_forts | Checks if a country has a certain amount of forts |  | country |
| num\_known\_institutions | Checks if a country knows a certain number of institutions |  | country |
| num\_loans | Checks if a country has a certain amount of loans |  | country |
| num\_locations | Checks if a country has a certain amount of owned locations |  | country |
| num\_locations\_owned\_or\_owned\_by\_subjects | Checks if a country or its direct subjects has a certain amount of owned locations |  | country |
| num\_locations\_owned\_or\_owned\_by\_subjects\_or\_below | Checks if a country, its subjects or its subjects' subjects has a certain amount of owned locations |  | country |
| num\_navy\_constructions | Check how many navy\_constructions a location has |  | location |
| num\_of\_active\_parliament\_agendas | Check how many parliament agendas are currently available to the country or international organization. |  | country, international\_organization |
| num\_of\_advances\_researched | Checks how many advances a country currently has researched. |  | country |
| num\_of\_children | The number of children of the character |  | character |
| num\_of\_diplomats | Checks if a country has an amount of diplomats |  | country |
| num\_of\_electors | Checks how many electors the international organization has |  | international\_organization |
| num\_of\_locations\_owned\_by\_io | Checks if a country has an amount of locations owned by certain IO |  | country |
| num\_of\_markets\_with\_merchants | Checks if a country has merchants in the specified amount of markets. |  | country |
| num\_of\_non\_rural | Checks if a country has an amount of towns and cities |  | country |
| num\_of\_non\_rural\_ports | Checks if a country has an amount of non-rural ports |  | country |
| num\_of\_ports | Checks if a country has an amount of ports |  | country |
| num\_of\_rebel\_characters | Get the amount of characters which support the rebel |  | rebels |
| num\_of\_rebel\_supporters | Get the amount of countries which support the rebel |  | rebels |
| num\_of\_religious\_aspects | Gets the total amount of church aspects in the country |  | country |
| num\_of\_spouses | The number of spouses of the character |  | character |
| num\_of\_trades | Checks if a country has an amount of trades active |  | country |
| num\_of\_traits | The number of traits the character has |  | character |
| num\_of\_traits\_of\_category | The number of traits of a specified category the character has. | ``` num_of_trait_by_category(<trait_category>)  or num_of_trait_by_category = {  type = <trait_category>  value <comparator> <integer> } ``` | character |
| num\_open\_reform\_slots | Checks if a country has a certain amount of open government reform slots |  | country |
| num\_owned\_foreign\_buildings\_in\_location | The number of foreign buildings in a location owned by a count |  | location |
| num\_possible\_privileges | Checks if the scope country or estate has a certain amount of privileges |  | country, estate |
| num\_possible\_rivals | Checks if a country has a certain amount of possible rivals |  | country |
| num\_privileges | Checks if the scope country or estate has a certain amount of privileges |  | country, estate |
| num\_province\_definitions\_in\_area | Checks if an area has a certain amount of province definitions |  | area |
| num\_provinces | Checks if a country has a certain amount of provinces |  | country |
| num\_rebels | Checks if a country has a certain amount of Rebels |  | country |
| num\_reforms | Checks if a country has a certain amount of government reforms |  | country |
| num\_regiments | Checks if a country has a certain amount of regiments |  | country |
| num\_relations\_above\_limit | Amount above relations limit |  | country |
| num\_rivals | Checks if a country has a certain amount of rivals |  | country |
| num\_roads | Check how many roads a location has |  | location |
| num\_subjects | Checks the total number of subjects of a country |  | country |
| num\_subunits | How many sub units does this unit have? |  | unit |
| num\_union\_countries | Return the number of countries under any union ruled by the scoped dynasty |  | dynasty |
| num\_unions | Return the number of unions ruled by the scoped dynasty |  | dynasty |
| num\_works\_of\_art | Checks if a country has a certain number of works of art |  | country |
| offensive\_alliance\_strength | Strength of an offensive alliance, including the nation with all countries giving offensive support and those that can be called in for offensive wars |  | country |
| offer\_relation\_acceptance | How high is the target country's AI value of accepting the scripted relation offered by the current country scope? | ``` offer_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "offer_relation_acceptance(<scripted relation type>|<country>)" ``` | country |
| opinion | is the country's opinion of the target greater or equal than the value? | ``` opinion = {  target = X  value <operator> Y  or  value = { min max } } ``` | country |
| opinion\_difference\_between | Get the opinion of the current country scope against the first target country and subtract it with the opinion the current scope has of the second country. | ``` opinion_difference_between = {  first = <country>  second = <country>  value = <script_value> }  or opinion_difference_between(<country>|<country>) ``` | country |
| organization\_strength\_relative\_to\_country | Gets the relative strength of the scope organization to the supplied country | ``` organization_strength_relative_to_country(<target>|<bool exclude_target>)  or organization_strength_relative_to_country = {  target = <country link>  value <operator> <amount>  exclude_target = <bool> } ``` | international\_organization |
| parliament\_issue\_chance | The chance an issue will be selected |  | country, international\_organization |
| parliament\_issue\_support | The current support in parliament for an issue |  | country, international\_organization |
| parliament\_type\_utility | Utility of a parliament type that can subtract the utility of current parliament modifiers | ``` parliament_type_utility(<type>|<bool>)  or parliament_type_utility = {  parliament_type = <type>  subtract_current = <bool>  value <operator><threshold> } ``` | country |
| payment\_contribution | Gets how much the country has to pay for the specified IO and payment type. | ``` payment_contribution = {  international_organization = <>  payment = <> } ``` | country |
| payment\_maintenance | gets the payment maintenance level for a country in an international organization. | ``` payment_maintenance = {  international_organization = <>  payment = <> } ``` | country |
| peasant\_enfranchisment | Checks the level of peasant enfranchisement in a location |  | location |
| policy\_level | Check the defined level of the policy |  | policy |
| pop\_character\_chance | How likely are characters to spawn from this pop? |  | pop |
| pop\_literacy | How literate is this pop? |  | pop |
| pop\_satisfaction | How satisfied is this pop? |  | pop |
| pop\_size | How big is this pop? |  | pop |
| pop\_type\_percentage\_in\_country | The percentage of the specific pop type in the current country |  | country |
| pop\_type\_population\_in\_country | The number of the specific pop type in the current country |  | country |
| population | Checks if the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography has a certain population |  | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| population\_in\_area | gets the amount of population in an area |  | area |
| possible\_military\_leaders | Checks if a country has a certain amount of possible military leaders |  | country |
| power | The power of an estate |  | estate |
| power\_projection | Checks if a country has a power projection |  | country |
| prestige | How much prestige does the country/IO have? |  | country, international\_organization |
| prestige\_percentage | How high the percentage of the current prestige compared to the maximum does the country/IO have? |  | country, international\_organization |
| prev\_antagonism\_towards\_this | Gets the previous scope country's antagonism towards the current scope country |  | country |
| prev\_opinion\_of\_this | Gets the previous scope country's opinion of the current scope country |  | country |
| prev\_trust\_of\_this | Gets the previous scope country's trust of the current scope country |  | country |
| price\_in\_market | Gets the price of the scoped goods in the supplied market | ``` price_in_market = {  market = <market_name>  value >= <script_value> } ``` | goods |
| prisoner\_strength | gets the total strength of the prisoners in the unit |  | unit |
| privateer\_power | How much power does a privateer has? |  | privateer |
| privateer\_utility | How useful is a privateer here? |  | area |
| production\_method\_profit | Checks production method profit |  | production\_method |
| proper\_culture\_nobles | Checks the proportion of your population that is primary or accepted culture nobles |  | country |
| prosperity | Checks if a location has a certain prosperity |  | location |
| province\_army\_levy\_size | Total army levies that can be had from a province |  | province |
| province\_average\_control | Checks the average\_control of a province |  | province |
| province\_average\_development | Checks the average\_development of a province |  | province |
| province\_average\_integration | Checks the average\_integration of a province |  | province |
| province\_cultural\_unity | Checks the cultural\_unity of a province |  | province |
| province\_food | Checks the food of a province |  | province |
| province\_food\_percentage | Checks the food percentage of capacity in a province |  | province |
| province\_max\_food | Checks the maximum amount of food the province can have |  | province |
| province\_monthly\_food\_production | Checks how much food the province produces per month |  | province |
| province\_navy\_levy\_size | Total navy levies that can be had from a province |  | province |
| province\_population | Checks if a Province has a certain population |  | province |
| province\_possible\_institutions | Checks the number of institutions that can be promoted in a province |  | province |
| province\_prosperity | Checks if a Province has a certain level of average prosperity |  | province |
| province\_rebel\_progress | Checks if a Province has a certain rebel progress |  | province |
| province\_religious\_unity | Checks the religious\_unity of a province |  | province |
| province\_satisfaction | Checks if a Province has a certain level of average satisfaction |  | province |
| province\_tax\_base | Checks if a Province has a certain total tax base |  | province |
| proximity | Checks the proximity to owner capital in a location |  | location |
| purity | How much purity does the country/IO have? |  | country, international\_organization |
| purity\_percentage | How high the percentage of the current purity compared to the maximum does the country/IO have? |  | country, international\_organization |
| random\_integer | Uniformly random integer between 0 and 2^31-1. It will be the same if evaluated on the same scope and day. |  | none |
| rank\_index | Checks if a location has a Location Rank of a certain index |  | location |
| raw\_material\_amount | Check how many locations in the province\_defintion/area / region/subcontinent/continent produce the specified raw material. | ``` raw_material_amount = {  goods = <goods scope>  value = <script_value> }  or raw_material_amount(<goods scope>) ``` | area, continent, market, province\_definition, region, sub\_continent |
| raw\_material\_occurrence | Check how many locations world wide produce this raw material |  | goods |
| raw\_material\_output | Check how much raw material the scope location produces. |  | location |
| rebel\_last\_months\_progress | Check last month's progress of a rebel |  | rebels |
| rebel\_locations | Get the total amount of locations supporting the rebel |  | rebels |
| rebel\_progress | Check the progress of a rebel |  | rebels |
| rebel\_size | Get the total amount of population supporting the rebel |  | rebels |
| reform\_desire | Checks the reform desire of the religion |  | religion |
| regular\_army\_size | Checks if a country has a certain army size of regulars (maximum strength) |  | country |
| regular\_navy\_size | Checks if a country has a certain navy size of regular ships |  | country |
| relative\_defensive\_alliance\_strength | Gets the relative strength of the scope country including defensive alliances to the supplied one | ``` relative_defensive_alliance_strength(<target>) <operator> <script_value> OR relative_defensive_alliance_strength = {  target = <country scope>  value <operator> <script_value> } ``` | country |
| relative\_military\_strength | calculates the relative military strength of the scope country to the target. | ``` relative_military_strength = {  target = <country scope>  value <operator> <script_value>  or  value = { min max } } ``` | country |
| relative\_raw\_material\_price | Checks the price of a location's raw material in its market as a percentage of the base price of that material |  | location |
| relative\_strength | Gets the relative strength of the scope country to the supplied one | ``` relative_strength(<target>)  or relative_strength = {  target = <country link>  value <operator> <amount> } ``` | country |
| religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population_percentage = {  religion_group = <religion group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| religion\_group\_percentage\_in\_country | The percentage of a specific religion group in the current country |  | country |
| religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population = {  religion_group = <religion group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| religion\_percentage | Gets the percentage of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| religion\_percentage\_in\_country | The percentage of a specific religion in the current country |  | country |
| religion\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent |
| religion\_population\_in\_country | The number of pops with a specific religion in the current country |  | country |
| religious\_influence | How much religious influence does the country/IO have? |  | country, international\_organization |
| religious\_influence\_percentage | How high the percentage of the current religious influence compared to the maximum does the country/IO have? |  | country, international\_organization |
| religious\_unity | Checks the fraction of the population sharing the country's religion |  | country |
| relocate\_market\_utility | Utility of relocating a market | ``` relocate_market_utility(<location>,<location>)  or relocate_market_utility = {  location = <location>  new_location = <location>  value <operator><threshold> } ``` | country |
| remaining\_debt | Checks the remaining debt of a loan |  | loan |
| remaining\_parliament\_days | Checks how many days are left in the parliament of the country / international organization before it concludes. Returns -1 when there is no parliament active. |  | country, international\_organization |
| remove\_static\_modifier\_utility | Checks the AI utility of removing a static modifier from the scoped object | ``` remove_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | character, country, location |
| republican\_tradition | How much republican\_tradition does the country/IO have? |  | country, international\_organization |
| republican\_tradition\_percentage | How high the percentage of the current republican\_tradition compared to the maximum does the country/IO have? |  | country, international\_organization |
| research\_progress | Checks the progress of the current research in the country |  | country |
| resolution\_opinion | Gets the current scope country's opinion of a resolution. | ``` resolution_opinion(<IO>|<resolution>|<vote>) <operator> <script_value> OR resolution_opinion = {  international_organization = <international organization>  resolution = <resolution>  vote = <vote scope>  value <operator> <script_value> } ``` | country |
| reverse\_country\_interaction\_acceptance | How high is the current country's AI value of accepting the country interaction done by the specified country scope? Always return 0 if the scope is a player | ``` reverse_country_interaction_acceptance = {  type = <country interaction>  target = <country>  value = <script_value> }  or reverse_country_interaction_acceptance(<country interaction>|<country>) ``` | country |
| rgo\_workers | Checks if a location has a certain number of RGO workers |  | location |
| righteousness | How much righteousness does the country/IO have? |  | country, international\_organization |
| righteousness\_percentage | How high the percentage of the current righteousness compared to the maximum does the country/IO have? |  | country, international\_organization |
| rite\_power | How much rite power does the country/IO have? |  | country, international\_organization |
| rite\_power\_percentage | How high the percentage of the current rite power compared to the maximum does the country/IO have? |  | country, international\_organization |
| ruler\_reign | Checks if the ruler of a country has ruled for x years |  | country |
| ruler\_reign\_in\_days | Checks if the ruler or regent of a country has ruled for x days |  | country |
| sailors | How much Sailors does the country/IO have? |  | country, international\_organization |
| sailors\_percentage | Checks the percentage of Sailors a country has compared to its maximum |  | country |
| satisfaction | The satisfaction of an estate |  | estate |
| self\_control | How much self control does the country/IO have? |  | country, international\_organization |
| self\_control\_percentage | How high the percentage of the current self control compared to the maximum does the country/IO have? |  | country, international\_organization |
| short\_term\_trigger\_currency\_utility | Checks the AI utility of adding an amount of a certain trigger to the scoped object | ``` short_term_trigger_currency_utility = {  trigger = <trigger>  size = <size>  target = <optional target>  value >= <script_value> } ``` | country |
| slider\_minting\_value | How much minting is going on (0..1) |  | country |
| societal\_value\_progress | Gets progress towards societal value |  | country |
| special\_status\_power | Get the political power of the specified country in an organization with that specified special status. | ``` special_status_power = {  country = <country>  type = <special status>  value <operator> <float> }  or special_status_power(<country>|<special status>) ``` | international\_organization |
| special\_status\_power\_fraction | Get the political power fraction of the specified country in an organization with that specified special status. | ``` special_status_power_fraction = {  country = <country>  type = <special status>  value <operator> <float> }  or special_status_power(<country>|<special status>) ``` | international\_organization |
| spy\_network | How much spy-network does the country have in the target? | ``` spy_network = {  target = X  value <operator> Y  or  value = { min max } } ``` | country |
| stability | How much Stability does the country/IO have? |  | country, international\_organization |
| stability\_percentage | How high the percentage of the current Stability compared to the maximum does the country/IO have? |  | country, international\_organization |
| state\_religion\_clergy | Checks the proportion of your population that is true faith clergy |  | country |
| strength\_percentage | How many percent strength does this unit have??? |  | unit |
| subject\_level | Get the level of the subject type. |  | subject\_type |
| subject\_loyalty | Checks a country's subject loyalty |  | country |
| subject\_type\_annullment\_favours\_required | returns the favours needed to annul this relation diplomatically |  | subject\_type |
| subjects\_relative\_power | Compares to relative power of all subjects combined |  | country |
| subunit\_morale | How many morale does this subunit have??? |  | sub\_unit |
| subunit\_morale\_percentage | How many percent morale does this subunit have??? |  | sub\_unit |
| subunit\_number | What is the regimental number for this subnunit |  | sub\_unit |
| subunit\_strength | How many strength does this subunit have??? |  | sub\_unit |
| subunit\_strength\_percentage | How many percent strength does this subunit have??? |  | sub\_unit |
| target\_satisfaction | The target satisfaction of an estate |  | estate |
| this\_antagonism\_towards\_prev | Gets the current scope country's antagonism towards the previous scope country |  | country |
| this\_opinion\_of\_prev | Gets the current scope country's opinion of the previous scope country |  | country |
| this\_trust\_of\_prev | Gets the current scope country's trust of the previous scope country |  | country |
| threat\_level\_to | Return the threat level the scope country has towards the target country scope. | ``` threat_level_to = {  country = <country scope>  value = <script_value> }  or threat_level_to(<country scope>) ``` | country |
| tithe | Checks the tithe percentage of the religion |  | religion |
| total\_abilities | The total ability of the character |  | character |
| total\_accepted\_culture\_population | Checks if a country has an acceputed or primary culture population size of the specified value |  | country |
| total\_building\_levels | Checks if a location has a certain total amount of building levels |  | location |
| total\_cardinals | Checks the total amount of cardinals of the religion |  | religion |
| total\_control\_scaled\_population | Checks if a country has value that is population \* local\_control its in |  | country |
| total\_debt | Checks how much a country has in total debt |  | country |
| total\_development | Gets the total amount of development in the country |  | country |
| total\_dynastic\_power | Check the total amount of dynastic power the scoped dynasty or country has. In case of country, the dynasty of the ruler or of the heir in case of regency is taken. |  | country, dynasty |
| total\_effective\_goods\_production\_buildings | Returns the number of effective building levels which produce the specified good. | ``` total_effective_goods_production_buildings = {  goods = <goods>  value <comparator> <script_value> } ``` | country |
| total\_enemies | counts the number of enemies of an international organization |  | international\_organization |
| total\_foreign\_buildings\_levels | Checks the total number of foreign buildings of a country |  | country |
| total\_goods\_traded | Check the total amount of goods that went through this market last month |  | market |
| total\_goods\_value\_traded | Check the total value of goods that went through this market last month |  | market |
| total\_heathen\_population | Checks if a country has a heathen population size of the specified value |  | country |
| total\_heretic\_population | Checks if a country has a heretic population size of the specified value |  | country |
| total\_locations\_owned | counts the number of locations owned by an international organization |  | international\_organization |
| total\_members | counts the number of members in an international organization |  | international\_organization |
| total\_merchant\_capacity | Checks if a country has a certain total merchant capacity |  | country |
| total\_merchant\_power | Check the level of this Building? |  | market |
| total\_not\_tolerated\_culture\_population | Checks if a country has an intolerated culture population size of the specified value |  | country |
| total\_payment\_contribution | Gets the sum all member countries have to pay for the specified IO and payment type. | ``` total_payment_contribution = {  payment = <> } ``` | international\_organization |
| total\_population | Checks if a country has a certain population |  | country |
| total\_population\_in\_international\_organization | Checks if the country has the defined amount of pops in the target IO. | ``` total_population_in_international_organization = {  international_organization = <IO>  value <operator> <script_value> }  or total_population_in_international_organization(<IO>) ``` | country |
| total\_population\_in\_international\_organization\_percentage | Checks if the country has the defined amount of pops in the target IO. | ``` total_population_in_international_organization_percentage = {  international_organization = <IO>  value <operator> <script_value> }  or total_population_in_international_organization_percentage(<IO>) ``` | country |
| total\_primary\_culture\_population | Checks if a country has a primary culture population size of the specified value |  | country |
| total\_special\_status\_power | Get the political power of all countries in an organization with that specified special status. | ``` total_special_status_power = {  type = <special status>  value <operator> <float> }  or total_special_status_power(<special status>) ``` | international\_organization |
| total\_special\_status\_power\_fraction | Get the percentage political power of the target special status compared to the total amount of political power of all special statuses combined. | ``` special_status_power_fraction = {  type = <special status>  value <operator> <float> }  or special_status_power_fraction(<special status>) ``` | international\_organization |
| total\_tolerated\_culture\_population | Checks if a country has a tolerated culture population size of the specified value |  | country |
| total\_true\_faith\_population | Checks if a country has a true faith population size of the specified value |  | country |
| total\_unique\_special\_status\_power | Get the political power of all countries in an organization with that specified special status. | ``` total_special_status_power = {  type = <special status>  value <operator> <float> }  or total_special_status_power(<special status>) ``` | international\_organization |
| trade\_buy | What is the current price for the buy of a trade? |  | trade |
| trade\_capacity\_usage\_percent | How much of the assigned capacity is being used? |  | trade |
| trade\_profit | What is the current profit of a trade? |  | trade |
| trade\_sell | What is the current price for the sell of a trade? |  | trade |
| trade\_volume | How big volume was traded by this trade? |  | trade |
| tribal\_cohesion | How much tribal\_cohesion does the country/IO have? |  | country, international\_organization |
| tribal\_cohesion\_percentage | How high the percentage of the current tribal\_cohesion compared to the maximum does the country/IO have? |  | country, international\_organization |
| trust | is the country's trust towards the target greater or equal than the value? | ``` trust = {  target = X  value <operator> Y  or  value = { min max } } ``` | country |
| union\_length\_days | returns the number of days a country has been in a union with the target country. | ``` union_length_days = {  target = <country>  value <comparator> <script_value> } ``` | country |
| unit\_strength | Check the strength of the unit in scope |  | unit |
| upkeep\_maintenance | What is the xx position (0-1) the country has? |  | country |
| used\_cultures\_capacity | Checks if a country has a certain cost of cultures accepted & tolerated |  | country |
| used\_diplomatic\_capacity | Diplomatic capacity used by the country |  | country |
| used\_fort\_limit | How much Fort Limit is currently being used? |  | country |
| used\_fort\_limit\_percentage | What percentage of our Fort Limit is currently being used? |  | country |
| used\_merchant\_capacity | gets the market used merchant capacity for a country in the scope market |  | market |
| vote\_impact\_in\_resolution | Check how much vote impact the current country scope would make when voting in the target resolution of the target IO. | ``` vote_impact_in_resolution = {  international_organization = <IO>  resolution = <resolution>  value <operator> <real> }  or vote_impact_in_resolution(<IO>|<resolution>) ``` | country |
| vote\_percentage\_impact\_in\_resolution | Check how much vote percentage impact the current country scope would make when voting in the target resolution of the target IO. | ``` vote_percentage_impact_in_resolution = {  international_organization = <IO>  resolution = <resolution>  value <operator> <real> }  or vote_percentage_impact_in_resolution(<IO>|<resolution>) ``` | country |
| votes\_for\_resolution | Checks the number of votes for a particular outcome of a resolution. | ``` votes_for_resolution(<resolution_key>|<thing>)  or votes_for_resolution = {  resolution = <resolution_key>  outcome = <thing>  value <comparator> <real> } ``` | international\_organization, situation |
| war\_enthusiasm | The war enthusiasm of the current country scope in the target war. | ``` war_enthusiasm = {  war = <war scope>  value = <script_value> }  or war_enthusiasm(<war scope>) ``` | country |
| war\_exhaustion | How much WarExhaustion does the country/IO have? |  | country, international\_organization |
| war\_exhaustion\_percentage | How high the percentage of the current WarExhaustion compared to the maximum does the country/IO have? |  | country, international\_organization |
| war\_length | Checks how many months the current war has been going. |  | war |
| war\_length\_in\_years | Checks how many years the current war has been going. |  | war |
| war\_score\_in\_war | Check how much war score the current country has in the target war. | ``` war_score_in_war = {  war = <war>  value <operator> <real> }  or "war_score_in_war(<war>)" ``` | country |
| war\_score\_in\_war\_whole\_side | Check how much war score the war side of the current country has in the target war. | ``` war_score_in_war_whole_side = {  war = <war>  value <operator> <real> }  or "war_score_in_war_whole_side(<war>)" ``` | country |
| war\_score\_of\_country | Check how much war score the target country has in the current war. | ``` war_score_of_country = {  country = <country>  value <operator> <real> }  or war_score_of_country(<country>) ``` | war |
| war\_score\_of\_country\_side | Check how much war score the war side of the target country has in the current war. | ``` war_score_of_country_side = {  country = <country>  value <operator> <real> }  or war_score_of_country_side(<country>) ``` | war |
| war\_score\_versus | Gets the war score of the scope country against the supplied one | ``` war_score_versus(<target>)  or war_score_versus = {  target = <country link>  value <operator> <amount> } ``` | country |
| war\_stalling\_length | Checks how many months with no action have passed in the current war. |  | war |
| war\_stalling\_length\_in\_years | Checks how many years with no action have passed in the current war. |  | war |
| winter\_power |  |  | location |
| world\_art\_quality | Checks the total art quality in the world |  | none |
| world\_culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the world | ``` world_culture_group_percentage = {  culture_group = <culture_group>  value <operator> <script_value> } ``` | none |
| world\_culture\_group\_population | Gets the absolute number of the population that follow a particular culture group in the world | ``` world_culture_group_population = {  culture_group = <culture_group>  value <operator> <script_value> } ``` | none |
| world\_culture\_percentage | Gets the percentage of the population that follow a particular culture in the world | ``` world_culture_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | none |
| world\_culture\_population | Gets the absolute number of the population that follow a particular culture in the world | ``` world_culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | none |
| world\_religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the world | ``` world_religion_group_percentage = {  religion_group = <religion_group>  value <operator> <script_value> } ``` | none |
| world\_religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the world | ``` world_religion_group_population = {  religion_group = <religion_group>  value <operator> <script_value> } ``` | none |
| world\_religion\_percentage | Gets the percentage of the population that follow a particular religion in the world | ``` world_religion_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | none |
| world\_religion\_population | Gets the absolute number of the population that follow a particular religion in the world | ``` world_religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | none |
| yanantin | How much yanantin does the country/IO have? |  | country, international\_organization |
| yanantin\_percentage | How high the percentage of the current yanantin compared to the maximum does the country/IO have? |  | country, international\_organization |
| yearly\_gold | How much gold does the country get per year? |  | country |
| yearly\_manpower | How many Manpower does the country get per year? |  | country |
| yearly\_sailors | How many Sailors does the country get per year? |  | country |
| yearly\_salary | The yearly salary of the character |  | character |
| years\_active | Checks how long a religion has been enabled |  | religion |
| years\_as\_rebel | Check how many years the character has been a rebel. |  | character |
| years\_in\_international\_organization | Checks if the country has been in the current international organization scope for x years. | ``` years_in_international_organization = {  country = <country scope>  value = <years> }  or years_in_international_organization(country) ``` | country |
| years\_of\_service\_as\_admiral | Check how many years the character has served as an admiral. |  | character |
| years\_of\_service\_as\_general | Check how many years the character has served as a general. |  | character |
| years\_of\_service\_in\_cabinet | Check how many years the character has served in a cabinet. |  | character |
| years\_since\_disaster\_end | Checks if x years have passed since the end of the disaster. Returns -1 if the disaster has never ended. |  | disaster |
| years\_since\_disaster\_start | Checks if x years have passed since the start of the disaster. Returns -1 if the disaster has never started. |  | disaster |
| years\_since\_situation\_end | Checks if x years have passed since the end of the situation. Returns -1 if the situation has never ended. |  | situation |
| years\_since\_situation\_start | Checks if x years have passed since the start of the situation. Returns -1 if the situation has never started. |  | situation |

### Flag and variables

Variables can hold [localization](/Localization "Localization") keys by setting the value with `flag:loc_key`. This is useful for [interface modding](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") and localization as the function `GetFlagName` returns the key's localized string.

The following script snippets illustrate how flag variables work. Given a localization key and string and variable set to that key.

```
 foo: "bar"
```

```
set_variable = {
  name = test
  value = flag:foo
}
```

The data function `[Var('test').GetFlagName]` returns the string "bar".

Variables can also be compared for equality against flags, so that `var:test = flag:foo` would return true in the above example.

The variable itself does not contain the localized string, just the key.

### Scopes with variables

*See also: [Scope](/Scope "Scope")*

Some game objects can hold variables and variable lists on them. Here is the list of such scopes:

* cabinet
* character
* colonial\_charter
* country
* culture
* disaster
* dynasty
* international\_organization
* location
* province
* rebel
* religion
* active\_situation
* unit
* war

Other scopes cannot hold variables, but they can be saved to a variable. [Variable maps](#Variable_map_properties) can work around this limitation by using the scope as a key.

## Lists

**Lists** are temporary collections of [scopes](/Scope "Scope") built during effect execution.

There are two variants, following the same pattern as `save_scope_as` and `save_temporary_scope_as`:

* `add_to_list` — the list persists for the entire top-level effect execution (i.e. across an event's `immediate` and `option` blocks).[[1]](#cite_note-dynastic-1)
* `add_to_temporary_list` — the list only persists within the current block and its children.[[2]](#cite_note-flavor-boh-2)

### List usage

Lists are built by adding scopes during effect execution and used by iterating over them.

```
# Build a list of neighboring countries at war
every_neighbor_country = {
	limit = { is_at_war = yes }
	add_to_list = warring_neighbors
}

# Later, iterate the list
every_in_list = {
	list = warring_neighbors
	# this = each neighboring country at war
}
```

### List effects

List of list effects

| Effect | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| add\_to\_list | Adds the current scope to an arbitrarily-named list (or creates the list if not already present) to be referenced later in the (unbroken) event chain | ``` add_to_list = <name_of_list> add_to_list = {  name = <name_of_list>  value = <script_value> } NOTE, if adding a permanent target to a temporary list, the whole list becomes permanent ``` | none |  |
| add\_to\_temporary\_list | Adds the current scope to an arbitrarily-named list (or creates the list if not already present) to be referenced later in the same effect | ``` add_to_temporary_list = <name_of_list> add_to_temporary_list = {  name = <name_of_list>  value = <script_value> } NOTE, if adding a temporary target to a permanent list, the list will stay permanent ``` | none |  |
| every\_in\_list | Iterate through all items in list. | ``` every_in_list = {  limit = { <triggers> }  list = name or variable = name  <effects> } ``` | none |  |
| ordered\_in\_list | Iterate through all items in list. | ``` ordered_in_list = {  list = name or variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| random\_in\_list | Iterate through all items in list. | ``` random_in_list = {  list = name or variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| remove\_from\_list | Removes the current scope from a named list | ``` remove_from_list = <string> ``` | none |  |

### List triggers

List of list triggers

| Trigger | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| add\_to\_temporary\_list | Saves a temporary target for use during the trigger execution | ``` This is used to build lists in triggers. If used within an any-trigger, placement within the trigger is quite important. The game will iterate through every instance of the any-trigger  until it finds a single instance that fulfills the requirements, and then it will stop. In order to add every instance of a scope that fulfills certain conditions,  use "count = all" while also placing this "effect" at the very end of the any-trigger  (so that every condition is evaluated for every iteration). ``` | none |  |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| is\_in\_list | Checks if a target in in a list |  | none |  |
| list\_size | Checks the size of a list | ``` list_size = {  name = <list_name>  value >= <script_value> } ``` | none | value |

## Variable lists

**Variable lists** are persistent, ordered collections of [scopes](/Scope "Scope") stored as named lists. Unlike temporary [lists](#Lists), variable lists persist across effect executions and can be modified.[[3]](#cite_note-treasure-expedition-3)[[4]](#cite_note-wokou-4)

### Variable list types

Variable lists follow the same three-type pattern as variables:

| Type | Scoped | Persistent | Effect prefix | Trigger prefix |
| --- | --- | --- | --- | --- |
| "regular" | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | `add_to_variable_list` | `is_target_in_variable_list` |
| global | ![No](/thumb.php?f=No.png&width=24 "No") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | `add_to_global_variable_list` | `is_target_in_global_variable_list` |
| local | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | `add_to_local_variable_list` | `is_target_in_local_variable_list` |

### Variable list usage

Unlike temporary [lists](#Lists), variable lists persist across effect executions. They are commonly used to track collections of scopes over time, such as which countries have joined a coalition or which provinces have been affected by a disaster.

```
# Track provinces affected by a plague
add_to_variable_list = {
	name = plague_provinces
	target = location:roma
}

# Check if a province is already tracked
is_target_in_variable_list = {
	name = plague_provinces
	target = location:roma     # returns yes if already in the list
}

# Iterate all tracked provinces
every_in_list = {
	variable = plague_provinces
	# this = each province
}
```

### Variable list iterators

Variable lists are iterated using the same iterator effects and triggers as temporary lists, but using the `variable` parameter instead of `list`. For global and local variable lists, the iterator name includes the scope prefix.

| Type | Effect iterators | Trigger iterator |
| --- | --- | --- |
| "regular" | `every_in_list`, `random_in_list`, `ordered_in_list` | `any_in_list` |
| global | `every_in_global_list`, `random_in_global_list`, `ordered_in_global_list` | `any_in_global_list` |
| local | `every_in_local_list`, `random_in_local_list`, `ordered_in_local_list` | `any_in_local_list` |

```
every_in_list = {
	variable = my_list
	# effects run on each item (this), i.e. add_prestige = 5
}
random_in_global_list = {
	variable = my_list
	limit = { ... }          # optional filter, i.e. limit = { is_alive = yes }
	# effects run on one random matching item, i.e. save_scope_as = my_scope
}
ordered_in_local_list = {
	variable = my_list
	position = 0             # specific index (0-based)
	# effects run on the item at that position, i.e. save_scope_as = my_scope
}
any_in_global_list = {       # trigger
	variable = my_list
	# triggers checked against each item, i.e. is_at_war = yes
}
```

### Variable list effects

List of variable list effects

| Effect | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| add\_to\_global\_variable\_list | Adds the event target to a global variable list for the given duration | ``` add_to_global_variable_list = {  name = <variable_name>  target = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_local\_variable\_list | Adds the event target to a local variable list for the given duration | ``` add_to_local_variable_list = {  name = <variable_name>  target = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_variable\_list | Adds the event target to a variable list for the given duration | ``` add_to_variable_list = {  name = <variable_name>  target = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| clear\_global\_variable\_list | Empties the list | ``` clear_global_variable_list = variable_name ``` | none |  |
| clear\_local\_variable\_list | Empties the list | ``` clear_local_variable_list = variable_name ``` | none |  |
| clear\_variable\_list | Empties the list | ``` clear_variable_list = variable_name ``` | none |  |
| every\_in\_global\_list | Iterate through all items in global list. | ``` every_in_global_list = {  limit = { <triggers> }  list = name or variable = name  <effects> } ``` | none |  |
| every\_in\_list | Iterate through all items in list. | ``` every_in_list = {  limit = { <triggers> }  list = name or variable = name  <effects> } ``` | none |  |
| every\_in\_local\_list | Iterate through all items in local list. | ``` every_in_local_list = {  limit = { <triggers> }  list = name or variable = name  <effects> } ``` | none |  |
| ordered\_in\_global\_list | Iterate through all items in global list. | ``` ordered_in_global_list = {  list = name or variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_in\_list | Iterate through all items in list. | ``` ordered_in_list = {  list = name or variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_in\_local\_list | Iterate through all items in local list. | ``` ordered_in_local_list = {  list = name or variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| random\_in\_global\_list | Iterate through all items in global list. | ``` random_in_global_list = {  list = name or variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_in\_list | Iterate through all items in list. | ``` random_in_list = {  list = name or variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_in\_local\_list | Iterate through all items in local list. | ``` random_in_local_list = {  list = name or variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| remove\_list\_global\_variable | Removes the target from a global variable list | ``` remove_list_global_variable = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| remove\_list\_local\_variable | Removes the target from a local variable list | ``` remove_list_local_variable = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| remove\_list\_variable | Removes the target from a variable list | ``` remove_list_variable = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| sort\_global\_variable\_list | Sorts a global\_variable list | ``` sort_global_variable_list = {  name = <variable_name>  order = <script_value> } ``` | none |  |
| sort\_local\_variable\_list | Sorts a local variable list | ``` sort_local_variable_list = {  name = <variable_name>  order = <script_value> } ``` | none |  |
| sort\_variable\_list | Sorts a variable list | ``` sort_variable_list = {  name = <variable_name>  order = <script_value> } ``` | none |  |

### Variable list triggers

List of variable list triggers

| Trigger | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| any\_in\_global\_list | Iterate through all items in global list. | ``` any_in_global_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_local\_list | Iterate through all items in local list. | ``` any_in_local_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable_name  value >= <script_value> } ``` | none |  |
| has\_global\_variable\_list | Checks whether the specified global variable list is set | ``` has_global_variable_list = name ``` | none |  |
| has\_local\_variable\_list | Checks whether the specified local variable list is set | ``` has_local_variable_list = name ``` | none |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` | none |  |
| is\_in\_list | Checks if a target in in a list |  | none |  |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |

### Variable list GUI usage

To show all the elements of a list in GUI, use datamodel and datacontext :

```
vbox = {
	layoutpolicy_horizontal = expanding
	ignoreinvisible = yes
	spacing = 4
	datamodel = "[Player.MakeScope.GetList('my_goods_list')]"

	item = {
		widget = {
			layoutpolicy_horizontal = expanding
			minimumsize = { 0 68 }

			hbox = {
				layoutpolicy_horizontal = expanding
				margin = { 8 6 }
				spacing = 10
				datacontext = "[Scope.GetGoods]"

				text_single = {
					raw_text = "[Goods.GetName]"
				}
			}
		}
	}
}
```

## Variable maps

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.1.

**Variable maps** are associative arrays that map relationships between two [scopes](/Scope "Scope"), where one scope (the key) links to another (the value). [[5]](#cite_note-tinto-talks-5)

### Variable map types

Variable maps follow the same three-type pattern as variables and variable lists:

| Type | Scoped | Persistent | Effect prefix | Scope link |
| --- | --- | --- | --- | --- |
| "regular" | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | `add_to_variable_map` | `"variable_map(name|key)"` |
| global | ![No](/thumb.php?f=No.png&width=24 "No") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | `add_to_global_variable_map` | `"global_variable_map(name|key)"` |
| local | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | `add_to_local_variable_map` | `"local_variable_map(name|key)"` |

### Variable map usage

To add an entry, use `add_to_variable_map` with a name, key, and value:

```
add_to_variable_map = {
	name = rival_map         # the map name, a string identifier
	key = c:FRA              # any scope (countries, locations, characters, etc.) or a number (1, 2, 3)
	value = c:ENG            # any scope or number — what the key maps to
}
```

To look up a value by its key, use the [variable map scope link](#Variable_map_scope_link):

```
# Scopes to the value associated with c:FRA in rival_map
"variable_map(rival_map|c:FRA)" = {
	# this = c:ENG (the stored value)
	add_prestige = -10
}
```

**Adding a key that already exists does not overwrite the existing entry.** The `add_to_variable_map` effect silently does nothing if the key is already present. To update an entry, the old key must be removed first, then re-added with the new value:

```
# This does NOT update — the existing c:ENG value is kept
add_to_variable_map = {
	name = rival_map
	key = c:FRA              # key already exists in the map
	value = c:SPA            # ignored — the existing value (c:ENG) remains
}

# Correct: remove the key first, then re-add with the new value
remove_from_variable_map = {
	name = rival_map
	key = c:FRA
}
add_to_variable_map = {
	name = rival_map
	key = c:FRA
	value = c:SPA            # now correctly set to c:SPA
}
```

### Variable map iterators

Variable maps can be iterated over their keys using `every_key_in_variable_map` and `ordered_key_in_variable_map` as [effects](/Effect "Effect"), and `any_key_in_variable_map` as a [trigger](/Trigger "Trigger"). Inside the iterator, `this` refers to the current key, and the corresponding value can be accessed using the variable map scope link with `this` as the key argument.

`ordered_key_in_variable_map` defaults to selecting only **one** key (the first by sort order). Use the `max` parameter to iterate over multiple keys.

| Type | Effect iterators | Trigger iterator |
| --- | --- | --- |
| "regular" | `every_key_in_variable_map`, `ordered_key_in_variable_map` | `any_key_in_variable_map` |
| global | `every_key_in_global_variable_map`, `ordered_key_in_global_variable_map` | `any_key_in_global_variable_map` |
| local | `every_key_in_local_variable_map`, `ordered_key_in_local_variable_map` | `any_key_in_local_variable_map` |

```
every_key_in_global_variable_map = {
	variable = my_map
	"global_variable_map(my_map|this)" = {
		# this = the value; prev = the key
	}
}

# ordered defaults to 1 key — use max to iterate more
ordered_key_in_global_variable_map = {
	variable = my_map
	order_by = total_development
	max = 10                 # iterate up to 10 keys; without this, only the first is selected
	"global_variable_map(my_map|this)" = {
		# this = the value; prev = the key
	}
}
```

### Variable map scope link

The value associated with a key in a variable map can be accessed using the `variable_map` scope link. The syntax takes the map name as the first argument and an event target expression for the key as the second argument, separated by `|`. Because of this special syntax, the entire expression must be enclosed in quotation marks.

```
# scopes to the value for the given key
"global_variable_map(my_map|c:ENG)" = {
	# effects run on the value scope, i.e. add_gold = 25
}

# retrieves a numerical value stored in the map i.e.
add_gold = {
	value = "variable_map(my_map|location:krakow)"
}
```

Because the expression is enclosed in quotation marks, scripted effect and scripted trigger arguments (`$arg$`) are not resolved inside it. To pass a dynamic key, save the argument to a local variable first:

```
# Does NOT work — $key$ is not resolved inside quotes
"global_variable_map(my_map|$key$)" = { ... }

# Workaround: save the argument to a local variable
set_local_variable = {
	name = temp_key
	value = $key$            # resolved outside quotes, saved as local_var:temp_key
}
"global_variable_map(my_map|local_var:temp_key)" = { ... }
```

This workaround only applies to the key (second argument). The map name (first argument) is a identifier, not a scope, so it cannot be parameterized through variables or arguments:

```
# Neither of these work
"global_variable_map($my_map$|c:ENG)" = { ... }
"global_variable_map(local_var:map_name|c:ENG)" = { ... }
```

### Variable map effects

List of variable map effects

| Effect | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| add\_to\_global\_variable\_map | Adds the event target to a global variable map for the given duration | ``` add_to_global_variable_map = {  name = <variable_name>  key = <event_target>  value = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_local\_variable\_map | Adds the event target to a local variable map for the given duration | ``` add_to_local_variable_map = {  name = <variable_name>  key = <event_target>  value = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_variable\_map | Adds the event target to a variable map for the given duration | ``` add_to_variable_map = {  name = <variable_name>  key = <event_target>  value = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| clear\_global\_variable\_map | Empties the map | ``` clear_global_variable_map = variable_name ``` | none |  |
| clear\_local\_variable\_map | Empties the map | ``` clear_local_variable_map = variable_name ``` | none |  |
| clear\_variable\_map | Empties the map | ``` clear_variable_map = variable_name ``` | none |  |
| every\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` every_key_in_global_variable_map = {  limit = { <triggers> }  variable = name  <effects> } ``` | none |  |
| every\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` every_key_in_local_variable_map = {  limit = { <triggers> }  variable = name  <effects> } ``` | none |  |
| every\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` every_key_in_variable_map = {  limit = { <triggers> }  variable = name  <effects> } ``` | none |  |
| ordered\_key\_in\_global\_variable\_map | Iterate through all keys in a global variable map. | ``` ordered_key_in_global_variable_map = {  variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_key\_in\_local\_variable\_map | Iterate through all keys in a local variable map. | ``` ordered_key_in_local_variable_map = {  variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_key\_in\_variable\_map | Iterate through all keys in a variable map. | ``` ordered_key_in_variable_map = {  variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| random\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` random_key_in_global_variable_map = {  variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` random_key_in_local_variable_map = {  variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` random_key_in_variable_map = {  variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| remove\_from\_global\_variable\_map | Removes the target key and its value from a global variable map | ``` remove_from_global_variable_map = {  name = X  key = Y } ``` | none |  |
| remove\_from\_local\_variable\_map | Removes the target key and its value from a local variable map | ``` remove_from_local_variable_map = {  name = X  key = Y } ``` | none |  |
| remove\_from\_variable\_map | Removes the target key and its value from a variable map | ``` remove_from_variable_map = {  name = X  key = Y } ``` | none |  |

### Variable map triggers

List of variable map triggers

| Trigger | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| any\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` any_key_in_global_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` any_key_in_local_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` any_key_in_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| global\_variable\_map\_size | Checks the size of a global variable map | ``` global_variable_map_size = {  name = <variable_name  value >= <script_value> } ``` | none |  |
| has\_global\_variable\_map | Checks whether the specified global variable map is set | ``` has_global_variable_map = name ``` | none |  |
| has\_local\_variable\_map | Checks whether the specified local variable map is set | ``` has_local_variable_map = name ``` | none |  |
| has\_variable\_map | Checks whether the current scope has the specified variable map set | ``` has_variable_map = name ``` | none |  |
| is\_key\_in\_global\_variable\_map | Checks if a target is a key in a global variable map | ``` is_key_in_global_variable_map = {  name = <global_variable_map>  target = <key to check> } ``` | none |  |
| is\_key\_in\_local\_variable\_map | Checks if a target is a key in a local variable map | ``` is_key_in_local_variable_map = {  name = <local_variable_map>  target = <key to check> } ``` | none |  |
| is\_key\_in\_variable\_map | Checks if a target is a key in a variable map | ``` is_key_in_variable_map = {  name = <variable_map>  target = <key to check> } ``` | none |  |
| is\_value\_in\_global\_variable\_map | Checks if a target is a value in a global variable map | ``` is_value_in_global_variable_map = {  name = <global_variable_map>  target = <value to check> } ``` | none |  |
| is\_value\_in\_local\_variable\_map | Checks if a target is a value in a local variable map | ``` is_value_in_local_variable_map = {  name = <local_variable_map>  target = <value to check> } ``` | none |  |
| is\_value\_in\_variable\_map | Checks if a target is a value in a variable map | ``` is_value_in_variable_map = {  name = <variable_map>  target = <value to check> } ``` | none |  |
| local\_variable\_map\_size | Checks the size of a local variable map | ``` local_variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| variable\_map\_size | Checks the size of a variable map | ``` variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |

### Variable map GUI functions

Variable maps can be accessed in [GUI](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") files using the following data functions:

| Function | Description |
| --- | --- |
| `Scope.GetMapKeys('<name>')` | Returns a datamodel of all keys in the map stored on a scope. |
| `GetGlobalMapKeys('<name>')` | Returns a datamodel of all keys in a global map. |
| `Scope.GetVariableFromVariableMap('<name>', Scope)` | Returns the value for a given key in the map. The second argument is the key, provided as a scope (use `.MakeScope` if needed). |
| `GetVariableFromGlobalVariableMap('<name>', Scope)` | Returns the value for a given key in a global map. |

### Variable map properties

Variable maps have several properties that distinguish them from other data structures:

* **Scope substitution:** Some scopes in the game do not accept variables to be stored on them. Global variable maps can work around this by using the scope as a key and storing associated data as the value.
* **Performance at scale:** Accessing a value by key and checking whether a key exists are relatively fast operations. These benefits become more significant as the data structure grows larger. For systems that operate on many scopes (e.g. a large proportion of countries, locations, or pops), variable maps may offer performance improvements over variable lists.
* **Unordered:** Variable maps are unordered. Regardless of insertion order, iterating through a map produces a fixed, internal order. Sorting is still possible using `ordered_key_in_variable_map`.
* **Any scope as key or value:** Besides game objects (countries, characters, locations, etc.), variable maps can use numerical values, boolean values, and other expressions the game considers scopes as both keys and values.
* **Usable as arrays:** Since integer values can be used as map keys, variable maps can serve as indexed arrays where the key is the position.

```
# Save the top 10 great powers indexed by rank
clear_global_variable_map = great_powers_by_score
set_local_variable = {
	name = increment
	value = 1
}
ordered_great_power = {
	order_by = great_power_score
	max = 10
	add_to_global_variable_map = {
		name = great_powers_by_score
		key = local_var:increment
		value = this
	}
	change_local_variable = {
		name = increment
		add = 1
	}
}

# Access the 3rd great power by score
"global_variable_map(great_powers_by_score|3)" = {
	add_prestige = 25
}
```

## Variable effects

*See also: [Effect](/Effect "Effect")*

List of effects

| Effect | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| add\_to\_global\_variable\_list | Adds the event target to a global variable list for the given duration | ``` add_to_global_variable_list = {  name = <variable_name>  target = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_global\_variable\_map | Adds the event target to a global variable map for the given duration | ``` add_to_global_variable_map = {  name = <variable_name>  key = <event_target>  value = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_local\_variable\_list | Adds the event target to a local variable list for the given duration | ``` add_to_local_variable_list = {  name = <variable_name>  target = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_local\_variable\_map | Adds the event target to a local variable map for the given duration | ``` add_to_local_variable_map = {  name = <variable_name>  key = <event_target>  value = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_variable\_list | Adds the event target to a variable list for the given duration | ``` add_to_variable_list = {  name = <variable_name>  target = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| add\_to\_variable\_map | Adds the event target to a variable map for the given duration | ``` add_to_variable_map = {  name = <variable_name>  key = <event_target>  value = <event_target>  days/weeks/months/years = <script_value> (optional) } ``` | none |  |
| change\_global\_variable | Changes the value or a numeric variable | ``` change_variable = {  name = <variable_name>  <operation> = <value> } Valid operations are add, subtract, multiply, divide, modulo, min and max ``` | none |  |
| change\_local\_variable | Changes the value or a numeric variable | ``` change_variable = {  name = <variable_name>  <operation> = <value> } Valid operations are add, subtract, multiply, divide, modulo, min and max ``` | none |  |
| change\_variable | Changes the value or a numeric variable | ``` change_variable = {  name = <variable_name>  <operation> = <value> } Valid operations are add, subtract, multiply, divide, modulo, min and max ``` | none |  |
| clamp\_global\_variable | Clamps a variable the specified max and min | ``` clamp_variable = {  name = <variable_name>  max = <script_value>  min = <script_value> } ``` | none |  |
| clamp\_local\_variable | Clamps a variable the specified max and min | ``` clamp_variable = {  name = <variable_name>  max = <script_value>  min = <script_value> } ``` | none |  |
| clamp\_variable | Clamps a variable the specified max and min | ``` clamp_variable = {  name = <variable_name>  max = <script_value>  min = <script_value> } ``` | none |  |
| clear\_global\_variable\_list | Empties the list | ``` clear_global_variable_list = variable_name ``` | none |  |
| clear\_global\_variable\_map | Empties the map | ``` clear_global_variable_map = variable_name ``` | none |  |
| clear\_local\_variable\_list | Empties the list | ``` clear_local_variable_list = variable_name ``` | none |  |
| clear\_local\_variable\_map | Empties the map | ``` clear_local_variable_map = variable_name ``` | none |  |
| clear\_saved\_scope | Clears a saved scope from the top scope | ``` save_scope_as = cool_scope -> clear_saved_scope = cool_scope ``` | none |  |
| clear\_variable\_list | Empties the list | ``` clear_variable_list = variable_name ``` | none |  |
| clear\_variable\_map | Empties the map | ``` clear_variable_map = variable_name ``` | none |  |
| every\_in\_global\_list | Iterate through all items in global list. | ``` every_in_global_list = {  limit = { <triggers> }  list = name or variable = name  <effects> } ``` | none |  |
| every\_in\_list | Iterate through all items in list. | ``` every_in_list = {  limit = { <triggers> }  list = name or variable = name  <effects> } ``` | none |  |
| every\_in\_local\_list | Iterate through all items in local list. | ``` every_in_local_list = {  limit = { <triggers> }  list = name or variable = name  <effects> } ``` | none |  |
| every\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` every_key_in_global_variable_map = {  limit = { <triggers> }  variable = name  <effects> } ``` | none |  |
| every\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` every_key_in_local_variable_map = {  limit = { <triggers> }  variable = name  <effects> } ``` | none |  |
| every\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` every_key_in_variable_map = {  limit = { <triggers> }  variable = name  <effects> } ``` | none |  |
| ordered\_in\_global\_list | Iterate through all items in global list. | ``` ordered_in_global_list = {  list = name or variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_in\_list | Iterate through all items in list. | ``` ordered_in_list = {  list = name or variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_in\_local\_list | Iterate through all items in local list. | ``` ordered_in_local_list = {  list = name or variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_key\_in\_global\_variable\_map | Iterate through all keys in a global variable map. | ``` ordered_key_in_global_variable_map = {  variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_key\_in\_local\_variable\_map | Iterate through all keys in a local variable map. | ``` ordered_key_in_local_variable_map = {  variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| ordered\_key\_in\_variable\_map | Iterate through all keys in a variable map. | ``` ordered_key_in_variable_map = {  variable = name  limit = { <triggers> }  order_by = script_value  position = int  min = int  max = script_value  check_range_bounds = no # If you don't want an error logged if the list is smaller than the min/max  <effects> } ``` | none |  |
| random\_in\_global\_list | Iterate through all items in global list. | ``` random_in_global_list = {  list = name or variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_in\_list | Iterate through all items in list. | ``` random_in_list = {  list = name or variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_in\_local\_list | Iterate through all items in local list. | ``` random_in_local_list = {  list = name or variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` random_key_in_global_variable_map = {  variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` random_key_in_local_variable_map = {  variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| random\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` random_key_in_variable_map = {  variable = name  limit = { <triggers> }  (optional) weight = { mtth }  <effects> } ``` | none |  |
| remove\_from\_global\_variable\_map | Removes the target key and its value from a global variable map | ``` remove_from_global_variable_map = {  name = X  key = Y } ``` | none |  |
| remove\_from\_local\_variable\_map | Removes the target key and its value from a local variable map | ``` remove_from_local_variable_map = {  name = X  key = Y } ``` | none |  |
| remove\_from\_variable\_map | Removes the target key and its value from a variable map | ``` remove_from_variable_map = {  name = X  key = Y } ``` | none |  |
| remove\_global\_variable | Removes a variable | ``` remove_variable = variable_name ``` | none |  |
| remove\_list\_global\_variable | Removes the target from a global variable list | ``` remove_list_global_variable = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| remove\_list\_local\_variable | Removes the target from a local variable list | ``` remove_list_local_variable = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| remove\_list\_variable | Removes the target from a variable list | ``` remove_list_variable = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| remove\_local\_variable | Removes a variable | ``` remove_variable = variable_name ``` | none |  |
| remove\_variable | Removes a variable | ``` remove_variable = variable_name ``` | none |  |
| round\_global\_variable | Rounds a variable to the nearest specified value | ``` round_variable = {  name = <variable_name>  nearest = <script_value> } ``` | none |  |
| round\_local\_variable | Rounds a variable to the nearest specified value | ``` round_variable = {  name = <variable_name>  nearest = <script_value> } ``` | none |  |
| round\_variable | Rounds a variable to the nearest specified value | ``` round_variable = {  name = <variable_name>  nearest = <script_value> } ``` | none |  |
| set\_global\_variable | Sets a variable | ``` set_variable = {  name = <variable_name>  value = <scope>/<value>/<flag:str>  days = <script_value> (optional) } This variable will be accessible with <type_>var:X. With type being in a scope object or in a top scope Can also be used as set_variable = X (equivalent to set_variable = { name = X value = yes }) ``` | none |  |
| set\_local\_variable | Sets a variable | ``` set_variable = {  name = <variable_name>  value = <scope>/<value>/<flag:str>  days = <script_value> (optional) } This variable will be accessible with <type_>var:X. With type being in a scope object or in a top scope Can also be used as set_variable = X (equivalent to set_variable = { name = X value = yes }) ``` | none |  |
| set\_variable | Sets a variable | ``` set_variable = {  name = <variable_name>  value = <scope>/<value>/<flag:str>  days = <script_value> (optional) } This variable will be accessible with <type_>var:X. With type being in a scope object or in a top scope Can also be used as set_variable = X (equivalent to set_variable = { name = X value = yes }) ``` | none |  |
| sort\_global\_variable\_list | Sorts a global\_variable list | ``` sort_global_variable_list = {  name = <variable_name>  order = <script_value> } ``` | none |  |
| sort\_local\_variable\_list | Sorts a local variable list | ``` sort_local_variable_list = {  name = <variable_name>  order = <script_value> } ``` | none |  |
| sort\_variable\_list | Sorts a variable list | ``` sort_variable_list = {  name = <variable_name>  order = <script_value> } ``` | none |  |

## Variable triggers

*See also: [Trigger](/Trigger "Trigger")*

List of triggers

| Trigger | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| any\_in\_global\_list | Iterate through all items in global list. | ``` any_in_global_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_local\_list | Iterate through all items in local list. | ``` any_in_local_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` any_key_in_global_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` any_key_in_local_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` any_key_in_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable_name  value >= <script_value> } ``` | none |  |
| global\_variable\_map\_size | Checks the size of a global variable map | ``` global_variable_map_size = {  name = <variable_name  value >= <script_value> } ``` | none |  |
| has\_global\_variable | Checks whether the specified global variable is set | ``` has_global_variable = name ``` | none |  |
| has\_global\_variable\_list | Checks whether the specified global variable list is set | ``` has_global_variable_list = name ``` | none |  |
| has\_global\_variable\_map | Checks whether the specified global variable map is set | ``` has_global_variable_map = name ``` | none |  |
| has\_local\_variable | Checks whether the specified local variable is set | ``` has_local_variable = name ``` | none |  |
| has\_local\_variable\_list | Checks whether the specified local variable list is set | ``` has_local_variable_list = name ``` | none |  |
| has\_local\_variable\_map | Checks whether the specified local variable map is set | ``` has_local_variable_map = name ``` | none |  |
| has\_variable | Checks whether the current scope has the specified variable set | ``` has_variable = name ``` | none |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` | none |  |
| has\_variable\_map | Checks whether the current scope has the specified variable map set | ``` has_variable_map = name ``` | none |  |
| is\_key\_in\_global\_variable\_map | Checks if a target is a key in a global variable map | ``` is_key_in_global_variable_map = {  name = <global_variable_map>  target = <key to check> } ``` | none |  |
| is\_key\_in\_local\_variable\_map | Checks if a target is a key in a local variable map | ``` is_key_in_local_variable_map = {  name = <local_variable_map>  target = <key to check> } ``` | none |  |
| is\_key\_in\_variable\_map | Checks if a target is a key in a variable map | ``` is_key_in_variable_map = {  name = <variable_map>  target = <key to check> } ``` | none |  |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_value\_in\_global\_variable\_map | Checks if a target is a value in a global variable map | ``` is_value_in_global_variable_map = {  name = <global_variable_map>  target = <value to check> } ``` | none |  |
| is\_value\_in\_local\_variable\_map | Checks if a target is a value in a local variable map | ``` is_value_in_local_variable_map = {  name = <local_variable_map>  target = <value to check> } ``` | none |  |
| is\_value\_in\_variable\_map | Checks if a target is a value in a variable map | ``` is_value_in_variable_map = {  name = <variable_map>  target = <value to check> } ``` | none |  |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| local\_variable\_map\_size | Checks the size of a local variable map | ``` local_variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| variable\_map\_size | Checks the size of a variable map | ``` variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |

## References

1. [↑](#cite_ref-dynastic_1-0) `game/in_game/events/character/dynastic.txt` (v1.1.10) — uses `add_to_list` in `immediate` and iterates in `option`, thus cross-block list persistence.
2. [↑](#cite_ref-flavor-boh_2-0) `game/in_game/events/DHE/flavor_BOH.txt` (v1.1.10) — uses `add_to_temporary_list` to build and consume a list within a single `option` block. This is the only game file use of it, so the difference is assumed to be the same as save\_scope\_as vs save\_temporary\_scope\_as
3. [↑](#cite_ref-treasure-expedition_3-0) `game/in_game/events/DHE/flavor_chi_treasure_expedition.txt` (v1.1.10) — extensive variable list usage.
4. [↑](#cite_ref-wokou_4-0) `game/in_game/events/wokou_events.txt` (v1.1.10) — global variable list usage.
5. [↑](#cite_ref-tinto-talks_5-0) [Tinto Talks Extra: Modding in 1.1 "Rossbach"](https://forum.paradoxplaza.com/forum/index.php?threads/1899358 "forum:1899358") — developer diary introducing variable maps.

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • Variables  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

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