<!-- source: https://eu5.paradoxwikis.com/Scope_link revid: 34419 fetched: 2026-09-09 -->
# Scope link
*This page discusses the game script element often called "event targets". For pop-up narrative content events, see [Event modding](/Event_modding "Event modding"); for lists and details of events that exist in Europa Universalis V, see [Events](/Events "Events").*
**Scope links** – often called *event targets* or colloquially just *scopes* – are object, [scope](/Scope "Scope"), or value references used in Europa Universalis V's game script. Most scope links can be used as target of an [effect](/Effect "Effect") or [trigger](/Trigger "Trigger") when it refers to an appropriate scope, object, or value. Similarly, scope links can be used as scopes or the left side of a value comparison.
Scope links that represent scopes can generally be used in dot chains as for example: `p:xF98DA3.state.owner.capital` which looks at the given province, then chains to that province's state, that state's owning country, and finally to that country's capital state.
## Data scope links
These scope links require additional input, such as a scripted type or specified scope. This generally takes the form of `event_target:data`; some use the format `event_target(data)`, this type must be enclosed in quotation marks, including any dot scoped elements, e.g. `"scope:power_bloc.power_bloc_leader.market.market_number_goods_shortages_with(scope:with_country)"`.
List of scope links
| Scope link | Description | From scope | To scope |
| active\_outbreak | gets the active outbreak for a disease in a location or subunit - usage active\_outbreak(<disease>) | location, sub\_unit | disease\_outbreak |
| active\_resolution | gets the active resolution of the type specified in the scope international organization or situation - usage active\_resolution(<resolution>) | international\_organization, situation | active\_resolution |
| advance\_type | Unknown, add something in code registration | none | advance\_type |
| age | Unknown, add something in code registration | none | age |
| ai\_personality | Unknown, add something in code registration | country, none | ai\_personality |
| area | Unknown, add something in code registration | exploration, location, none, privateer, province, province\_definition | area |
| area\_exploration | Links to an exploration in the scope area for the suppled country. Usage: area\_exploration:<country> or area\_exploration(<country>) | area | exploration |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | none | value |
| artist\_type | Unknown, add something in code registration | none | artist\_type |
| avatar | Unknown, add something in code registration | holy\_site, none | avatar |
| bias\_value | Unknown, add something in code registration | none | value |
| building | Unknown, add something in code registration | location | building |
| building\_type | Unknown, add something in code registration | building, none | building\_type |
| bureaucracy\_type | Unknown, add something in code registration | bureaucracy, none | bureaucracy\_type |
| c | Scope to the specified country TAG | none | country |
| cabinet\_action | The cabinet action a character is performing | cabinet, character, none | cabinet\_action |
| cast\_vote\_in\_active\_resolution | gets the cast vote in a resolution, returns nothing if the vote isn't explicit - usage cast\_vote\_in\_resolution(<country>) | active\_resolution | vote |
| casus\_belli | Unknown, add something in code registration | none, war | casus\_belli |
| character | Unknown, add something in code registration | none | character |
| character\_interaction | Unknown, add something in code registration | none | character\_interaction |
| child\_education | Unknown, add something in code registration | none | child\_education |
| climate | Unknown, add something in code registration | none | climate |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | none | value |
| continent | Unknown, add something in code registration | area, location, none, province, province\_definition, region, sub\_continent | continent |
| country\_government\_reform\_fully\_implemented\_date | Unknown, add something in code registration | country | date |
| country\_government\_reform\_implementation\_date | Unknown, add something in code registration | country | date |
| country\_interaction | Unknown, add something in code registration | none | country\_interaction |
| country\_rank | Unknown, add something in code registration | country, none | country\_rank |
| country\_rank\_on\_date | Unknown, add something in code registration | country | country\_rank |
| culture | Unknown, add something in code registration | character, country, dynasty, mercenary, none, pop, rebels, sub\_unit | culture |
| culture\_group | Unknown, add something in code registration | none | culture\_group |
| default\_price | The default price for a goods | none | value |
| define | Reference the value of a numeric or color define: define:Namespace|Name | none | color, date, value |
| demand | Unknown, add something in code registration | none | demand |
| dialect | Unknown, add something in code registration | character, culture, dynasty, market, none, pop, religion | dialect |
| disaster\_type | Unknown, add something in code registration | disaster, none | disaster\_type |
| disease | Unknown, add something in code registration | disease\_outbreak, none | disease |
| dynasty | Unknown, add something in code registration | character, none | dynasty |
| employment\_system | Unknown, add something in code registration | none | employment\_system |
| estate | Links to a particular estate. Usage: estate:<estate\_type\_link> or estate(<estate\_type\_link>) | country | estate |
| estate\_power | The power of an estate | country | value |
| estate\_privilege | Unknown, add something in code registration | none | estate\_privilege |
| estate\_satisfaction | The satisfaction of an estate | country | value |
| estate\_target\_satisfaction | The target satisfaction of an estate | country | value |
| estate\_tax\_base | The base tax of an estate | country, estate | value |
| estate\_tax\_percentage | The tax percentage levied on an estate | country | value |
| estate\_type | Unknown, add something in code registration | building, character, estate, estate\_privilege, none, parliament\_issue, pop, rebels | estate\_type |
| ethnicity | Unknown, add something in code registration | character, none | ethnicity |
| flag | Flag literals eg: flag:the\_boss | none | flag |
| formable\_country | Unknown, add something in code registration | none | formable\_country |
| generic\_action | Unknown, add something in code registration | none | generic\_action |
| gfx\_culture | The graphical culture from a culture scope | culture, none | graphical\_culture |
| global\_var | Reference a previous set global variable via its name eg: global\_var:important\_thing | none | varies |
| global\_variable\_map | Reference a previous set variable via its name eg: "global\_variable\_map(average\_relation\_map|c:FRA)" | none | varies |
| god | Unknown, add something in code registration | avatar, holy\_site, none, omen | god |
| goods | Unknown, add something in code registration | none | goods |
| government\_reform | Unknown, add something in code registration | none | government\_reform |
| government\_type | Unknown, add something in code registration | country, none | government |
| hegemony | Unknown, add something in code registration | none | hegemony |
| heir\_selection | Unknown, add something in code registration | none | heir\_selection |
| holy\_site\_definition | Unknown, add something in code registration | none | holy\_site\_definition |
| holy\_site\_type | Unknown, add something in code registration | none | holy\_site\_type |
| implementation\_price | Unknown, add something in code registration | bureaucracy, bureaucracy\_type | price |
| institution | Unknown, add something in code registration | none | institution |
| institution\_progress | The progress towards an institution of a location | location | value |
| interaction\_target | Unknown, add something in code registration | cabinet | varies |
| international\_organization | Unknown, add something in code registration | none | international\_organization |
| international\_organization\_type | Unknown, add something in code registration | international\_organization, none | international\_organization\_type |
| known\_in\_country | The amount of goods known to a speficic Country | country | value |
| land\_ownership\_rule | Unknown, add something in code registration | international\_organization, none | land\_ownership\_rule |
| language | Unknown, add something in code registration | character, country, culture, dialect, dynasty, market, none, religion, sub\_unit | language |
| language\_family | Unknown, add something in code registration | language, none | language\_family |
| law | Unknown, add something in code registration | none, policy | law |
| law\_policy | gets the policy chosen for a particular law in the scope international organization or country - usage law\_policy(<law>) | country, international\_organization | policy |
| leader\_at\_index | Scopes to the leader characters of the IO which are defined in leader = {}. In case of countries instead, their ruler, heir or regent (in that order) gets returned instead. Usage: leader\_at\_index(<int> | international\_organization | character |
| levy\_setup | Unknown, add something in code registration | none | levy\_setup |
| local\_var | Reference a previous set local variable via its name eg: local\_var:person\_of\_interest | none | varies |
| local\_variable\_map | Reference a previous set variable via its name eg: "local\_variable\_map(rewards\_for\_country|c:FRA)" | none | varies |
| location | Unknown, add something in code registration | building, cardinal, character, combat, exploration, holy\_site, market, none, pop, siege, town\_rights, work\_of\_art | location |
| location\_rank | Unknown, add something in code registration | location, none | location\_rank |
| market\_price | The price a goods has in a market | market | value |
| mission | Unknown, add something in code registration | none | mission |
| mission\_task | Unknown, add something in code registration | none | mission\_task |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object | character, country, dynasty, international\_organization, location, province, religion, unit | boolean, value |
| movement\_definition | Unknown, add something in code registration | none | movement\_definition |
| num\_estate\_privileges | The amount of privileges an estate has | country | value |
| num\_location\_rank | Count the amount of owned locations of a specific rank | country | value |
| num\_pop\_type | The amount of pops of a specific type at location | location | value |
| num\_pop\_type\_in\_country | The amount of pops of a specific type in a country | country | value |
| num\_pop\_type\_in\_province | The amount of pops of a specific type at Province | province | value |
| num\_possible\_estate\_privileges | The amount of possible privileges an estate can get | country | value |
| omen | Unknown, add something in code registration | none | omen |
| parliament\_agenda | Unknown, add something in code registration | none | parliament\_agenda |
| parliament\_issue | Unknown, add something in code registration | country, international\_organization, none | parliament\_issue |
| parliament\_type | Unknown, add something in code registration | country, international\_organization, none | parliament\_type |
| payment | Unknown, add something in code registration | none | payment |
| peace\_treaty | Unknown, add something in code registration | none | peace\_treaty |
| percentage\_pop\_type\_in\_country | The percentage of pops of a specific type in a country | country | value |
| percentage\_pop\_type\_in\_location | The percentage of pops of a specific type in a location | location | value |
| policy | Unknown, add something in code registration | none | policy |
| pop\_type | Unknown, add something in code registration | none, pop | pop\_type |
| price | Unknown, add something in code registration | none, policy | price |
| produced\_in\_country | The amount of goods produced in a specific Country | country | value |
| produced\_in\_market | The amount of goods produced in a speficic market | market | value |
| produced\_in\_world | The amount of goods produced in the world | none | value |
| production\_method | Unknown, add something in code registration | none | production\_method |
| province | Unknown, add something in code registration | country, location | province |
| province\_definition | Unknown, add something in code registration | colonial\_charter, location, none, province | province\_definition |
| recruitment\_method | Unknown, add something in code registration | none | recruitment\_method |
| regency\_type | Unknown, add something in code registration | country, none | regency\_type |
| region | Unknown, add something in code registration | area, location, none, province, province\_definition | region |
| relation\_type | Unknown, add something in code registration | none | relation\_type |
| religion | Unknown, add something in code registration | character, country, dynasty, mercenary, none, pop, rebels, sub\_unit | religion |
| religion\_group | Unknown, add something in code registration | none | group |
| religious\_aspect | Unknown, add something in code registration | none | religious\_aspect |
| religious\_faction | Unknown, add something in code registration | none | religious\_faction |
| religious\_figure | Unknown, add something in code registration | none | religious\_figure |
| religious\_focus | Unknown, add something in code registration | none | religious\_focus |
| religious\_school | Unknown, add something in code registration | character, country, none | religious\_school |
| removal\_price | Unknown, add something in code registration | bureaucracy, bureaucracy\_type | price |
| resolution | Unknown, add something in code registration | active\_resolution, none | resolution |
| resolution\_target | Links to the named parameter (from the select\_triggers) in the scope active resolution | active\_resolution | varies |
| resolution\_vote | gets vote that a country is voting for on a particular resolution in an international organization - usage resolution\_vote(<country>|<international organization>|<resolution>) | none | vote |
| road\_type | Unknown, add something in code registration | none | road\_type |
| rule\_end\_date | Unknown, add something in code registration | character | date |
| scope | Reference a previously saved scope via its name eg: scope:target | none | varies |
| scriptable\_hint\_definition | Unknown, add something in code registration | none | scriptable\_hint\_definition |
| scripted\_geography | Unknown, add something in code registration | none | scripted\_geography |
| situation | Unknown, add something in code registration | none | situation |
| societal\_value | The value of a societal value of a country | country | value |
| societal\_value\_type | Unknown, add something in code registration | none | societal\_value\_type |
| special\_status | Unknown, add something in code registration | none, parliament\_issue | special\_status |
| stockpile\_in\_market | The amount of goods stockpiled in a specific market | market | value |
| sub\_continent | Unknown, add something in code registration | area, location, none, province, province\_definition, region | sub\_continent |
| sub\_unit\_category | Unknown, add something in code registration | none, sub\_unit | sub\_unit\_category |
| sub\_unit\_count | Checks the amount of a subunit-type inside a unit (in regiments) | unit | value |
| sub\_unit\_fraction | Checks the fraction of a subunit-type inside a unit (in regiments) | unit | value |
| sub\_unit\_strength | Checks the strength of a subunit-type inside a unit (in regiments) | unit | value |
| subject\_military\_stance | Unknown, add something in code registration | none | military\_stance |
| subject\_type | Unknown, add something in code registration | country, none | subject\_type |
| target\_price | The target price a goods has in a market | market | value |
| topography | Unknown, add something in code registration | none | topography |
| total\_building\_levels\_including\_construction | The amount of total building levels including construction in a speficic Country | country | value |
| total\_effective\_building\_levels | The amount of total effective building levels in a speficic Country | country | value |
| total\_sub\_unit\_category\_in\_unit | Checks the total strength of a subunit-category for a unit | unit | value |
| total\_sub\_unit\_count | Checks the amount of a subunit-category that a country has (in regiments/ships) | country | value |
| total\_sub\_unit\_strength | Checks the total strength of a subunit-category for a unit | country | value |
| total\_sub\_unit\_type\_count | Checks the amount of a subunit-type that a country has (in regiments/ships) | country | value |
| total\_sub\_unit\_type\_strength | Checks the total strength of a subunit-type for a country | unit | value |
| town\_rights\_type | Unknown, add something in code registration | none, town\_rights | town\_rights\_type |
| traded\_in\_market | The amount of goods traded in a specific market | market | value |
| trait | Unknown, add something in code registration | none | trait |
| unit\_ability | Unknown, add something in code registration | none | unit\_ability |
| unit\_formation\_preference | Unknown, add something in code registration | none | unit\_formation\_preference |
| unit\_type | Unknown, add something in code registration | none | unit\_type |
| var | Reference a previous set variable via its name eg: var:mortal\_enemy | none | varies |
| variable\_map | Reference a variable set under a specified scope in a named container on this scope: "variable\_map(our\_relations\_with|c:FRA)" | none | varies |
| vegetation | Unknown, add something in code registration | none | vegetation |
| vote\_in\_active\_resolution | gets the active resolution of the type specified in the scope active resolution - usage vote\_in\_active\_resolution(<country>) | active\_resolution | vote |
| war\_with\_country | Gets the current war of the country scope against the specified target country - usage war\_with\_country(<country>) | country | war |
| work\_of\_art | Unknown, add something in code registration | none | work\_of\_art |
| work\_of\_art\_type | Unknown, add something in code registration | none, work\_of\_art | work\_of\_art\_type |
## Value scope links
These scope links return a numerical or boolean value. This allows them to be used in comparisons or script values.
List of value scope links
| Scope link | Description | From scope |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | none |
| bias\_value | Unknown, add something in code registration | none |
| building\_base\_cost\_in\_gold | The Building base price in gold | building\_type |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | none |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | none |
| default\_price | The default price for a goods | none |
| define | Reference the value of a numeric or color define: define:Namespace|Name | none |
| estate\_power | The power of an estate | country |
| estate\_satisfaction | The satisfaction of an estate | country |
| estate\_target\_satisfaction | The target satisfaction of an estate | country |
| estate\_tax\_base | The base tax of an estate | country, estate |
| estate\_tax\_percentage | The tax percentage levied on an estate | country |
| institution\_progress | The progress towards an institution of a location | location |
| known\_in\_country | The amount of goods known to a speficic Country | country |
| market\_price | The price a goods has in a market | market |
| max\_great\_powers | Unknown, add something in code registration | none |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object | character, country, dynasty, international\_organization, location, province, religion, unit |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | none |
| num\_estate\_privileges | The amount of privileges an estate has | country |
| num\_location\_rank | Count the amount of owned locations of a specific rank | country |
| num\_pop\_type | The amount of pops of a specific type at location | location |
| num\_pop\_type\_in\_country | The amount of pops of a specific type in a country | country |
| num\_pop\_type\_in\_province | The amount of pops of a specific type at Province | province |
| num\_possible\_estate\_privileges | The amount of possible privileges an estate can get | country |
| percentage\_pop\_type\_in\_country | The percentage of pops of a specific type in a country | country |
| percentage\_pop\_type\_in\_location | The percentage of pops of a specific type in a location | location |
| produced\_in\_country | The amount of goods produced in a specific Country | country |
| produced\_in\_market | The amount of goods produced in a speficic market | market |
| produced\_in\_world | The amount of goods produced in the world | none |
| societal\_value | The value of a societal value of a country | country |
| stockpile\_in\_market | The amount of goods stockpiled in a specific market | market |
| sub\_unit\_count | Checks the amount of a subunit-type inside a unit (in regiments) | unit |
| sub\_unit\_fraction | Checks the fraction of a subunit-type inside a unit (in regiments) | unit |
| sub\_unit\_strength | Checks the strength of a subunit-type inside a unit (in regiments) | unit |
| target\_price | The target price a goods has in a market | market |
| total\_building\_levels\_including\_construction | The amount of total building levels including construction in a speficic Country | country |
| total\_effective\_building\_levels | The amount of total effective building levels in a speficic Country | country |
| total\_sub\_unit\_category\_in\_unit | Checks the total strength of a subunit-category for a unit | unit |
| total\_sub\_unit\_count | Checks the amount of a subunit-category that a country has (in regiments/ships) | country |
| total\_sub\_unit\_strength | Checks the total strength of a subunit-category for a unit | country |
| total\_sub\_unit\_type\_count | Checks the amount of a subunit-type that a country has (in regiments/ships) | country |
| total\_sub\_unit\_type\_strength | Checks the total strength of a subunit-type for a country | unit |
| traded\_in\_market | The amount of goods traded in a specific market | market |
| value | A numeric literal value eg: 1, 5.2, -6 | none |
## Wild card scope links
These scope links refer to a type of scope link, rather than a specifically named scope link. For example, the scope link `compare_value` refers to any simple, inline [trigger](/Trigger "Trigger") which checks a numerical value such as `free_arable_land`. Similarly, `named_script_value` refers to the calculated script value by its name.
List of wild card scope links
| Scope link | Description | To scope |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | value |
| compare\_date | A comparison trigger that will return its date in the context it is used eg: root.gold | date |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | value |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | color, value |
## Scope links by scope
The following tables list scope links by their required scope. Some scope links are repeated as they can be used in multiple scopes. Scope links that can be used in any scope are indicated with `none`.
### None scope/scopeless
List of none scope links
| Scope link | Description | To scope |
| advance\_type | Unknown, add something in code registration | advance\_type |
| age | Unknown, add something in code registration | age |
| ai\_personality | Unknown, add something in code registration | ai\_personality |
| area | Unknown, add something in code registration | area |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | value |
| artist\_type | Unknown, add something in code registration | artist\_type |
| avatar | Unknown, add something in code registration | avatar |
| bias\_value | Unknown, add something in code registration | value |
| building\_type | Unknown, add something in code registration | building\_type |
| bureaucracy\_type | Unknown, add something in code registration | bureaucracy\_type |
| c | Scope to the specified country TAG | country |
| cabinet\_action | The cabinet action a character is performing | cabinet\_action |
| casus\_belli | Unknown, add something in code registration | casus\_belli |
| character | Unknown, add something in code registration | character |
| character\_interaction | Unknown, add something in code registration | character\_interaction |
| child\_education | Unknown, add something in code registration | child\_education |
| climate | Unknown, add something in code registration | climate |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | value |
| compare\_date | A comparison trigger that will return its date in the context it is used eg: root.gold | date |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | value |
| continent | Unknown, add something in code registration | continent |
| country\_interaction | Unknown, add something in code registration | country\_interaction |
| country\_rank | Unknown, add something in code registration | country\_rank |
| culture | Unknown, add something in code registration | culture |
| culture\_group | Unknown, add something in code registration | culture\_group |
| default\_price | The default price for a goods | value |
| define | Reference the value of a numeric or color define: define:Namespace|Name | color, date, value |
| demand | Unknown, add something in code registration | demand |
| dialect | Unknown, add something in code registration | dialect |
| disaster\_type | Unknown, add something in code registration | disaster\_type |
| disease | Unknown, add something in code registration | disease |
| dynasty | Unknown, add something in code registration | dynasty |
| employment\_system | Unknown, add something in code registration | employment\_system |
| estate\_privilege | Unknown, add something in code registration | estate\_privilege |
| estate\_type | Unknown, add something in code registration | estate\_type |
| ethnicity | Unknown, add something in code registration | ethnicity |
| flag | Flag literals eg: flag:the\_boss | flag |
| formable\_country | Unknown, add something in code registration | formable\_country |
| generic\_action | Unknown, add something in code registration | generic\_action |
| gfx\_culture | The graphical culture from a culture scope | graphical\_culture |
| global\_var | Reference a previous set global variable via its name eg: global\_var:important\_thing | varies |
| global\_variable\_map | Reference a previous set variable via its name eg: "global\_variable\_map(average\_relation\_map|c:FRA)" | varies |
| god | Unknown, add something in code registration | god |
| goods | Unknown, add something in code registration | goods |
| government\_reform | Unknown, add something in code registration | government\_reform |
| government\_type | Unknown, add something in code registration | government |
| hegemony | Unknown, add something in code registration | hegemony |
| heir\_selection | Unknown, add something in code registration | heir\_selection |
| holy\_site\_definition | Unknown, add something in code registration | holy\_site\_definition |
| holy\_site\_type | Unknown, add something in code registration | holy\_site\_type |
| institution | Unknown, add something in code registration | institution |
| international\_organization | Unknown, add something in code registration | international\_organization |
| international\_organization\_type | Unknown, add something in code registration | international\_organization\_type |
| land\_ownership\_rule | Unknown, add something in code registration | land\_ownership\_rule |
| language | Unknown, add something in code registration | language |
| language\_family | Unknown, add something in code registration | language\_family |
| law | Unknown, add something in code registration | law |
| levy\_setup | Unknown, add something in code registration | levy\_setup |
| local\_var | Reference a previous set local variable via its name eg: local\_var:person\_of\_interest | varies |
| local\_variable\_map | Reference a previous set variable via its name eg: "local\_variable\_map(rewards\_for\_country|c:FRA)" | varies |
| location | Unknown, add something in code registration | location |
| location\_rank | Unknown, add something in code registration | location\_rank |
| max\_great\_powers | Unknown, add something in code registration | value |
| mission | Unknown, add something in code registration | mission |
| mission\_task | Unknown, add something in code registration | mission\_task |
| movement\_definition | Unknown, add something in code registration | movement\_definition |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | color, value |
| no | Boolean literal for false values | boolean |
| omen | Unknown, add something in code registration | omen |
| parliament\_agenda | Unknown, add something in code registration | parliament\_agenda |
| parliament\_issue | Unknown, add something in code registration | parliament\_issue |
| parliament\_type | Unknown, add something in code registration | parliament\_type |
| payment | Unknown, add something in code registration | payment |
| peace\_treaty | Unknown, add something in code registration | peace\_treaty |
| policy | Unknown, add something in code registration | policy |
| pop\_type | Unknown, add something in code registration | pop\_type |
| prev | The previous scope | varies |
| price | Unknown, add something in code registration | price |
| produced\_in\_world | The amount of goods produced in the world | value |
| production\_method | Unknown, add something in code registration | production\_method |
| province\_definition | Unknown, add something in code registration | province\_definition |
| recruitment\_method | Unknown, add something in code registration | recruitment\_method |
| regency\_type | Unknown, add something in code registration | regency\_type |
| region | Unknown, add something in code registration | region |
| relation\_type | Unknown, add something in code registration | relation\_type |
| religion | Unknown, add something in code registration | religion |
| religion\_group | Unknown, add something in code registration | group |
| religious\_aspect | Unknown, add something in code registration | religious\_aspect |
| religious\_faction | Unknown, add something in code registration | religious\_faction |
| religious\_figure | Unknown, add something in code registration | religious\_figure |
| religious\_focus | Unknown, add something in code registration | religious\_focus |
| religious\_school | Unknown, add something in code registration | religious\_school |
| resolution | Unknown, add something in code registration | resolution |
| resolution\_vote | gets vote that a country is voting for on a particular resolution in an international organization - usage resolution\_vote(<country>|<international organization>|<resolution>) | vote |
| revolutionary\_target | Unknown, add something in code registration | country |
| road\_type | Unknown, add something in code registration | road\_type |
| root | The head of the current top scope eg: reciever of an event, taker of a decision | varies |
| scope | Reference a previously saved scope via its name eg: scope:target | varies |
| scriptable\_hint\_definition | Unknown, add something in code registration | scriptable\_hint\_definition |
| scripted\_geography | Unknown, add something in code registration | scripted\_geography |
| situation | Unknown, add something in code registration | situation |
| societal\_value\_type | Unknown, add something in code registration | societal\_value\_type |
| special\_status | Unknown, add something in code registration | special\_status |
| sub\_continent | Unknown, add something in code registration | sub\_continent |
| sub\_unit\_category | Unknown, add something in code registration | sub\_unit\_category |
| subject\_military\_stance | Unknown, add something in code registration | military\_stance |
| subject\_type | Unknown, add something in code registration | subject\_type |
| this | The current scope | varies |
| topography | Unknown, add something in code registration | topography |
| town\_rights\_type | Unknown, add something in code registration | town\_rights\_type |
| trait | Unknown, add something in code registration | trait |
| unit\_ability | Unknown, add something in code registration | unit\_ability |
| unit\_formation\_preference | Unknown, add something in code registration | unit\_formation\_preference |
| unit\_type | Unknown, add something in code registration | unit\_type |
| value | A numeric literal value eg: 1, 5.2, -6 | value |
| var | Reference a previous set variable via its name eg: var:mortal\_enemy | varies |
| variable\_map | Reference a variable set under a specified scope in a named container on this scope: "variable\_map(our\_relations\_with|c:FRA)" | varies |
| vegetation | Unknown, add something in code registration | vegetation |
| work\_of\_art | Unknown, add something in code registration | work\_of\_art |
| work\_of\_art\_type | Unknown, add something in code registration | work\_of\_art\_type |
| yes | Boolean literal for true values | boolean |
### Building scope
List of building scope links
| Scope link | Description | To scope |
| building\_type | Unknown, add something in code registration | building\_type |
| estate\_type | Unknown, add something in code registration | estate\_type |
| linked\_pop | Unknown, add something in code registration | pop |
| location | Unknown, add something in code registration | location |
| owner | Unknown, add something in code registration | country |
### Character scope
List of character scope links
| Scope link | Description | To scope |
| birth\_location | Unknown, add something in code registration | location |
| cabinet\_action | The cabinet action a character is performing | cabinet\_action |
| culture | Unknown, add something in code registration | culture |
| dialect | Unknown, add something in code registration | dialect |
| dynasty | Unknown, add something in code registration | dynasty |
| employer | Employer of the character | country |
| estate\_type | Unknown, add something in code registration | estate\_type |
| ethnicity | Unknown, add something in code registration | ethnicity |
| exploration | Unknown, add something in code registration | exploration |
| father | Unknown, add something in code registration | character |
| first\_spouse | Unknown, add something in code registration | character |
| language | Unknown, add something in code registration | language |
| location | Unknown, add something in code registration | location |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object | boolean, value |
| mother | Unknown, add something in code registration | character |
| owner | Unknown, add something in code registration | country |
| rebel | Unknown, add something in code registration | rebels |
| religion | Unknown, add something in code registration | religion |
| religious\_school | Unknown, add something in code registration | religious\_school |
| rule\_end\_date | Unknown, add something in code registration | date |
| unit | Unknown, add something in code registration | unit |
### Country scope
List of country scope links
| Scope link | Description | To scope |
| active\_mission | Unknown, add something in code registration | mission |
| ai\_personality | Unknown, add something in code registration | ai\_personality |
| autocephalous\_patriarchate | Unknown, add something in code registration | international\_organization |
| capital | Unknown, add something in code registration | location |
| civil\_war | Unknown, add something in code registration | war |
| civil\_war\_opponent | Unknown, add something in code registration | country |
| consort | Unknown, add something in code registration | character |
| country\_color | Unknown, add something in code registration | color |
| country\_government\_reform\_fully\_implemented\_date | Unknown, add something in code registration | date |
| country\_government\_reform\_implementation\_date | Unknown, add something in code registration | date |
| country\_rank | Unknown, add something in code registration | country\_rank |
| country\_rank\_on\_date | Unknown, add something in code registration | country\_rank |
| country\_stance | Unknown, add something in code registration | military\_stance |
| court\_dialect | Unknown, add something in code registration | dialect |
| court\_language | Unknown, add something in code registration | language |
| culture | Unknown, add something in code registration | culture |
| current\_mission\_task | Unknown, add something in code registration | mission\_task |
| dominant\_culture | Unknown, add something in code registration | culture |
| dominant\_dialect | Unknown, add something in code registration | dialect |
| dominant\_language | Unknown, add something in code registration | language |
| dominant\_religion | Unknown, add something in code registration | religion |
| dominant\_upper\_class\_culture | Unknown, add something in code registration | culture |
| estate | Links to a particular estate. Usage: estate:<estate\_type\_link> or estate(<estate\_type\_link>) | estate |
| estate\_power | The power of an estate | value |
| estate\_satisfaction | The satisfaction of an estate | value |
| estate\_target\_satisfaction | The target satisfaction of an estate | value |
| estate\_tax\_base | The base tax of an estate | value |
| estate\_tax\_percentage | The tax percentage levied on an estate | value |
| government\_type | Unknown, add something in code registration | government |
| heir | Unknown, add something in code registration | character |
| known\_in\_country | The amount of goods known to a speficic Country | value |
| language | Unknown, add something in code registration | language |
| largest\_army | The largest army controlled by the country | unit |
| largest\_navy | The largest navy controlled by the country | unit |
| last\_valid\_ruler | Unknown, add something in code registration | character |
| law\_policy | gets the policy chosen for a particular law in the scope international organization or country - usage law\_policy(<law>) | policy |
| liturgical\_dialect | Unknown, add something in code registration | dialect |
| liturgical\_language | Unknown, add something in code registration | language |
| low\_control\_best\_tax\_base | get the best low control tax base | province |
| marriage\_union | Unknown, add something in code registration | international\_organization |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object | boolean, value |
| num\_estate\_privileges | The amount of privileges an estate has | value |
| num\_location\_rank | Count the amount of owned locations of a specific rank | value |
| num\_pop\_type\_in\_country | The amount of pops of a specific type in a country | value |
| num\_possible\_estate\_privileges | The amount of possible privileges an estate can get | value |
| original\_capital | Unknown, add something in code registration | location |
| overlord | Unknown, add something in code registration | country |
| parliament\_issue | Unknown, add something in code registration | parliament\_issue |
| parliament\_seat | Unknown, add something in code registration | location |
| parliament\_type | Unknown, add something in code registration | parliament\_type |
| percentage\_pop\_type\_in\_country | The percentage of pops of a specific type in a country | value |
| previous\_ruler | Unknown, add something in code registration | character |
| produced\_in\_country | The amount of goods produced in a specific Country | value |
| province | Unknown, add something in code registration | province |
| regency\_type | Unknown, add something in code registration | regency\_type |
| regent | Unknown, add something in code registration | character |
| religion | Unknown, add something in code registration | religion |
| religious\_school | Unknown, add something in code registration | religious\_school |
| ruler | Unknown, add something in code registration | character |
| ruler\_or\_heir\_if\_regent | Unknown, add something in code registration | character |
| ruler\_or\_regent | Unknown, add something in code registration | character |
| societal\_value | The value of a societal value of a country | value |
| subject\_type | Unknown, add something in code registration | subject\_type |
| succession\_law | Unknown, add something in code registration | heir\_selection |
| top\_overlord | Unknown, add something in code registration | country |
| top\_overlord\_or\_this | Unknown, add something in code registration | country |
| total\_building\_levels\_including\_construction | The amount of total building levels including construction in a speficic Country | value |
| total\_effective\_building\_levels | The amount of total effective building levels in a speficic Country | value |
| total\_sub\_unit\_count | Checks the amount of a subunit-category that a country has (in regiments/ships) | value |
| total\_sub\_unit\_strength | Checks the total strength of a subunit-category for a unit | value |
| total\_sub\_unit\_type\_count | Checks the amount of a subunit-type that a country has (in regiments/ships) | value |
| union | Unknown, add something in code registration | international\_organization |
| war\_with\_country | Gets the current war of the country scope against the specified target country - usage war\_with\_country(<country>) | war |
### Location scope
List of location scope links
| Scope link | Description | To scope |
| active\_outbreak | gets the active outbreak for a disease in a location or subunit - usage active\_outbreak(<disease>) | disease\_outbreak |
| area | Unknown, add something in code registration | area |
| building | Unknown, add something in code registration | building |
| cardinal | Unknown, add something in code registration | cardinal |
| combat | Unknown, add something in code registration | combat |
| continent | Unknown, add something in code registration | continent |
| controller | Unknown, add something in code registration | country |
| dominant\_culture | Unknown, add something in code registration | culture |
| dominant\_dialect | Unknown, add something in code registration | dialect |
| dominant\_language | Unknown, add something in code registration | language |
| dominant\_religion | Unknown, add something in code registration | religion |
| institution\_progress | The progress towards an institution of a location | value |
| last\_dynasty\_in\_location | Unknown, add something in code registration | dynasty |
| location\_rank | Unknown, add something in code registration | location\_rank |
| market | Unknown, add something in code registration | market |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object | boolean, value |
| num\_pop\_type | The amount of pops of a specific type at location | value |
| owner | Unknown, add something in code registration | country |
| percentage\_pop\_type\_in\_location | The percentage of pops of a specific type in a location | value |
| previous\_owner | Unknown, add something in code registration | country |
| province | Unknown, add something in code registration | province |
| province\_definition | Unknown, add something in code registration | province\_definition |
| raw\_material | Unknown, add something in code registration | goods |
| raw\_material\_location | Unknown, add something in code registration | goods |
| region | Unknown, add something in code registration | region |
| sea\_zone | Unknown, add something in code registration | location |
| second\_best\_market | Unknown, add something in code registration | market |
| secondary\_culture | Unknown, add something in code registration | culture |
| secondary\_otherwise\_primary\_culture | Unknown, add something in code registration | culture |
| siege | Unknown, add something in code registration | siege |
| sub\_continent | Unknown, add something in code registration | sub\_continent |
| top\_owner | Unknown, add something in code registration | country |
### Market scope
List of market scope links
| Scope link | Description | To scope |
| dialect | Unknown, add something in code registration | dialect |
| language | Unknown, add something in code registration | language |
| location | Unknown, add something in code registration | location |
| market\_price | The price a goods has in a market | value |
| most\_powerful\_merchant | Unknown, add something in code registration | country |
| owner | Unknown, add something in code registration | country |
| produced\_in\_market | The amount of goods produced in a speficic market | value |
| stockpile\_in\_market | The amount of goods stockpiled in a specific market | value |
| target\_price | The target price a goods has in a market | value |
| traded\_in\_market | The amount of goods traded in a specific market | value |
### Pop scope
List of pop scope links
| Scope link | Description | To scope |
| culture | Unknown, add something in code registration | culture |
| dialect | Unknown, add something in code registration | dialect |
| estate\_type | Unknown, add something in code registration | estate\_type |
| location | Unknown, add something in code registration | location |
| owner | Unknown, add something in code registration | country |
| pop\_type | Unknown, add something in code registration | pop\_type |
| rebel | Unknown, add something in code registration | rebels |
| religion | Unknown, add something in code registration | religion |
### War scope
List of war scope links
| Scope link | Description | To scope |
| attacker\_leader | Unknown, add something in code registration | country |
| casus\_belli | Unknown, add something in code registration | casus\_belli |
| defender\_leader | Unknown, add something in code registration | country |
| original\_attacker\_leader | Unknown, add something in code registration | country |
| original\_defender\_leader | Returns the country which was the original defender. In cases where the war is started against a subject country, defender\_leader would return the overlord while original\_defender\_leader would return the subject country. Returns the current defender war leader as fallback. | country |
| war\_goal\_province | Links to the war goal of the war. If no war goal is set or is unrelated to locations (such as superiority) the link returns the capital of the defender war leader | province |
## All scope links
List of scope links
| Scope link | Description | From scope | To scope |
| active\_mission | Unknown, add something in code registration | country | mission |
| active\_outbreak | gets the active outbreak for a disease in a location or subunit - usage active\_outbreak(<disease>) | location, sub\_unit | disease\_outbreak |
| active\_resolution | gets the active resolution of the type specified in the scope international organization or situation - usage active\_resolution(<resolution>) | international\_organization, situation | active\_resolution |
| advance\_age | Unknown, add something in code registration | advance\_type | age |
| advance\_type | Unknown, add something in code registration | none | advance\_type |
| age | Unknown, add something in code registration | none | age |
| ai\_personality | Unknown, add something in code registration | country, none | ai\_personality |
| area | Unknown, add something in code registration | exploration, location, none, privateer, province, province\_definition | area |
| area\_exploration | Links to an exploration in the scope area for the suppled country. Usage: area\_exploration:<country> or area\_exploration(<country>) | area | exploration |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | none | value |
| artist\_type | Unknown, add something in code registration | none | artist\_type |
| attacker\_leader | Unknown, add something in code registration | war | country |
| autocephalous\_patriarchate | Unknown, add something in code registration | country | international\_organization |
| avatar | Unknown, add something in code registration | holy\_site, none | avatar |
| bias\_value | Unknown, add something in code registration | none | value |
| birth\_location | Unknown, add something in code registration | character | location |
| borrower | Unknown, add something in code registration | loan | country |
| building | Unknown, add something in code registration | location | building |
| building\_base\_cost\_in\_gold | The Building base price in gold | building\_type | value |
| building\_type | Unknown, add something in code registration | building, none | building\_type |
| bureaucracy\_type | Unknown, add something in code registration | bureaucracy, none | bureaucracy\_type |
| c | Scope to the specified country TAG | none | country |
| cabinet\_action | The cabinet action a character is performing | cabinet, character, none | cabinet\_action |
| cabinet\_member | Unknown, add something in code registration | cabinet | character |
| capacity\_market | Unknown, add something in code registration | trade | market |
| capital | Unknown, add something in code registration | area, country, dynasty, province | location |
| cardinal | Unknown, add something in code registration | location | cardinal |
| cast\_vote\_in\_active\_resolution | gets the cast vote in a resolution, returns nothing if the vote isn't explicit - usage cast\_vote\_in\_resolution(<country>) | active\_resolution | vote |
| casus\_belli | Unknown, add something in code registration | none, war | casus\_belli |
| character | Unknown, add something in code registration | none | character |
| character\_interaction | Unknown, add something in code registration | none | character\_interaction |
| child\_education | Unknown, add something in code registration | none | child\_education |
| civil\_war | Unknown, add something in code registration | country | war |
| civil\_war\_opponent | Unknown, add something in code registration | country | country |
| climate | Unknown, add something in code registration | none | climate |
| combat | Unknown, add something in code registration | combat\_side, location, unit | combat |
| combat\_attacker | Unknown, add something in code registration | combat | combat\_side |
| combat\_defender | Unknown, add something in code registration | combat | combat\_side |
| commander | Unknown, add something in code registration | combat\_side | country |
| commanding\_country | Unknown, add something in code registration | combat\_side | country |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | none | value |
| compare\_date | A comparison trigger that will return its date in the context it is used eg: root.gold | none | date |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | none | value |
| consort | Unknown, add something in code registration | country | character |
| continent | Unknown, add something in code registration | area, location, none, province, province\_definition, region, sub\_continent | continent |
| controller | Unknown, add something in code registration | location, sub\_unit | country |
| country\_color | Unknown, add something in code registration | country | color |
| country\_government\_reform\_fully\_implemented\_date | Unknown, add something in code registration | country | date |
| country\_government\_reform\_implementation\_date | Unknown, add something in code registration | country | date |
| country\_interaction | Unknown, add something in code registration | none | country\_interaction |
| country\_rank | Unknown, add something in code registration | country, none | country\_rank |
| country\_rank\_on\_date | Unknown, add something in code registration | country | country\_rank |
| country\_stance | Unknown, add something in code registration | country | military\_stance |
| court\_dialect | Unknown, add something in code registration | country | dialect |
| court\_language | Unknown, add something in code registration | country | language |
| creator | Unknown, add something in code registration | work\_of\_art | character |
| culture | Unknown, add something in code registration | character, country, dynasty, mercenary, none, pop, rebels, sub\_unit | culture |
| culture\_group | Unknown, add something in code registration | none | culture\_group |
| current\_mission\_task | Unknown, add something in code registration | country | mission\_task |
| customer | Unknown, add something in code registration | mercenary | country |
| default\_price | The default price for a goods | none | value |
| defender\_leader | Unknown, add something in code registration | war | country |
| define | Reference the value of a numeric or color define: define:Namespace|Name | none | color, date, value |
| demand | Unknown, add something in code registration | none | demand |
| dialect | Unknown, add something in code registration | character, culture, dynasty, market, none, pop, religion | dialect |
| disaster\_type | Unknown, add something in code registration | disaster, none | disaster\_type |
| disease | Unknown, add something in code registration | disease\_outbreak, none | disease |
| dominant\_country | Unknown, add something in code registration | culture | country |
| dominant\_culture | Unknown, add something in code registration | country, location, province | culture |
| dominant\_dialect | Unknown, add something in code registration | country, location | dialect |
| dominant\_language | Unknown, add something in code registration | country, location | language |
| dominant\_religion | Unknown, add something in code registration | country, location, province | religion |
| dominant\_upper\_class\_culture | Unknown, add something in code registration | country | culture |
| dynasty | Unknown, add something in code registration | character, none | dynasty |
| dynasty\_head | Unknown, add something in code registration | dynasty | character |
| dynasty\_home | Unknown, add something in code registration | dynasty | location |
| employer | Employer of the character | character | country |
| employment\_system | Unknown, add something in code registration | none | employment\_system |
| enemy\_side | Unknown, add something in code registration | combat\_side | combat\_side |
| estate | Links to a particular estate. Usage: estate:<estate\_type\_link> or estate(<estate\_type\_link>) | country | estate |
| estate\_power | The power of an estate | country | value |
| estate\_privilege | Unknown, add something in code registration | none | estate\_privilege |
| estate\_satisfaction | The satisfaction of an estate | country | value |
| estate\_target\_satisfaction | The target satisfaction of an estate | country | value |
| estate\_tax\_base | The base tax of an estate | country, estate | value |
| estate\_tax\_percentage | The tax percentage levied on an estate | country | value |
| estate\_type | Unknown, add something in code registration | building, character, estate, estate\_privilege, none, parliament\_issue, pop, rebels | estate\_type |
| ethnicity | Unknown, add something in code registration | character, none | ethnicity |
| exploration | Unknown, add something in code registration | character | exploration |
| father | Unknown, add something in code registration | character | character |
| first\_spouse | Unknown, add something in code registration | character | character |
| flag | Flag literals eg: flag:the\_boss | none | flag |
| formable\_country | Unknown, add something in code registration | none | formable\_country |
| from\_market | Unknown, add something in code registration | trade | market |
| generic\_action | Unknown, add something in code registration | none | generic\_action |
| gfx\_culture | The graphical culture from a culture scope | culture, none | graphical\_culture |
| global\_var | Reference a previous set global variable via its name eg: global\_var:important\_thing | none | varies |
| global\_variable\_map | Reference a previous set variable via its name eg: "global\_variable\_map(average\_relation\_map|c:FRA)" | none | varies |
| god | Unknown, add something in code registration | avatar, holy\_site, none, omen | god |
| goods | Unknown, add something in code registration | none | goods |
| government\_reform | Unknown, add something in code registration | none | government\_reform |
| government\_type | Unknown, add something in code registration | country, none | government |
| group | Unknown, add something in code registration | religion | group |
| hegemony | Unknown, add something in code registration | none | hegemony |
| heir | Unknown, add something in code registration | country | character |
| heir\_selection | Unknown, add something in code registration | none | heir\_selection |
| holy\_site | Unknown, add something in code registration | avatar, god | holy\_site |
| holy\_site\_definition | Unknown, add something in code registration | none | holy\_site\_definition |
| holy\_site\_type | Unknown, add something in code registration | none | holy\_site\_type |
| implementation\_price | Unknown, add something in code registration | bureaucracy, bureaucracy\_type | price |
| institution | Unknown, add something in code registration | none | institution |
| institution\_progress | The progress towards an institution of a location | location | value |
| interaction\_target | Unknown, add something in code registration | cabinet | varies |
| international\_organization | Unknown, add something in code registration | none | international\_organization |
| international\_organization\_target | Unknown, add something in code registration | international\_organization | country |
| international\_organization\_type | Unknown, add something in code registration | international\_organization, none | international\_organization\_type |
| known\_in\_country | The amount of goods known to a speficic Country | country | value |
| land\_ownership\_rule | Unknown, add something in code registration | international\_organization, none | land\_ownership\_rule |
| language | Unknown, add something in code registration | character, country, culture, dialect, dynasty, market, none, religion, sub\_unit | language |
| language\_family | Unknown, add something in code registration | language, none | language\_family |
| largest\_army | The largest army controlled by the country | country | unit |
| largest\_navy | The largest navy controlled by the country | country | unit |
| last\_dynasty\_in\_location | Unknown, add something in code registration | location | dynasty |
| last\_leader\_country | Unknown, add something in code registration | international\_organization | country |
| last\_valid\_ruler | Unknown, add something in code registration | country | character |
| law | Unknown, add something in code registration | none, policy | law |
| law\_policy | gets the policy chosen for a particular law in the scope international organization or country - usage law\_policy(<law>) | country, international\_organization | policy |
| leader | Unknown, add something in code registration | exploration, unit | character |
| leader\_at\_index | Scopes to the leader characters of the IO which are defined in leader = {}. In case of countries instead, their ruler, heir or regent (in that order) gets returned instead. Usage: leader\_at\_index(<int> | international\_organization | character |
| leader\_country | Unknown, add something in code registration | international\_organization | country |
| leadership\_election\_resolution | Unknown, add something in code registration | international\_organization | resolution |
| leading\_unit | Unknown, add something in code registration | combat\_side | unit |
| levy\_setup | Unknown, add something in code registration | none | levy\_setup |
| linked\_pop | Unknown, add something in code registration | building | pop |
| liturgical\_dialect | Unknown, add something in code registration | country | dialect |
| liturgical\_language | Unknown, add something in code registration | country | language |
| local\_var | Reference a previous set local variable via its name eg: local\_var:person\_of\_interest | none | varies |
| local\_variable\_map | Reference a previous set variable via its name eg: "local\_variable\_map(rewards\_for\_country|c:FRA)" | none | varies |
| location | Unknown, add something in code registration | building, cardinal, character, combat, exploration, holy\_site, market, none, pop, siege, town\_rights, work\_of\_art | location |
| location\_rank | Unknown, add something in code registration | location, none | location\_rank |
| low\_control\_best\_tax\_base | get the best low control tax base | country | province |
| market | Unknown, add something in code registration | location | market |
| market\_price | The price a goods has in a market | market | value |
| marriage\_union | Unknown, add something in code registration | country | international\_organization |
| max\_great\_powers | Unknown, add something in code registration | none | value |
| mercenary\_home | Unknown, add something in code registration | mercenary | location |
| mission | Unknown, add something in code registration | none | mission |
| mission\_task | Unknown, add something in code registration | none | mission\_task |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object | character, country, dynasty, international\_organization, location, province, religion, unit | boolean, value |
| most\_powerful\_merchant | Unknown, add something in code registration | market | country |
| mother | Unknown, add something in code registration | character | character |
| movement\_definition | Unknown, add something in code registration | none | movement\_definition |
| movement\_type | Unknown, add something in code registration | movement | movement\_definition |
| name\_culture | Unknown, add something in code registration | sub\_unit | culture |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | none | color, value |
| no | Boolean literal for false values | none | boolean |
| num\_estate\_privileges | The amount of privileges an estate has | country | value |
| num\_location\_rank | Count the amount of owned locations of a specific rank | country | value |
| num\_pop\_type | The amount of pops of a specific type at location | location | value |
| num\_pop\_type\_in\_country | The amount of pops of a specific type in a country | country | value |
| num\_pop\_type\_in\_province | The amount of pops of a specific type at Province | province | value |
| num\_possible\_estate\_privileges | The amount of possible privileges an estate can get | country | value |
| omen | Unknown, add something in code registration | none | omen |
| origin | Unknown, add something in code registration | disease, disease\_outbreak, institution, work\_of\_art | location |
| original\_attacker\_leader | Unknown, add something in code registration | war | country |
| original\_capital | Unknown, add something in code registration | country | location |
| original\_defender\_leader | Returns the country which was the original defender. In cases where the war is started against a subject country, defender\_leader would return the overlord while original\_defender\_leader would return the subject country. Returns the current defender war leader as fallback. | war | country |
| original\_outbreak | Unknown, add something in code registration | disease | disease\_outbreak |
| overlord | Unknown, add something in code registration | country | country |
| owner | Unknown, add something in code registration | building, cabinet, cardinal, character, colonial\_charter, disaster, estate, exploration, loan, location, market, mercenary, pop, privateer, province, rebels, sub\_unit, trade, unit, work\_of\_art | country |
| owning\_unit | Unknown, add something in code registration | sub\_unit | unit |
| parliament\_agenda | Unknown, add something in code registration | none | parliament\_agenda |
| parliament\_issue | Unknown, add something in code registration | country, international\_organization, none | parliament\_issue |
| parliament\_seat | Unknown, add something in code registration | country, international\_organization | location |
| parliament\_type | Unknown, add something in code registration | country, international\_organization, none | parliament\_type |
| payment | Unknown, add something in code registration | none | payment |
| peace\_treaty | Unknown, add something in code registration | none | peace\_treaty |
| percentage\_pop\_type\_in\_country | The percentage of pops of a specific type in a country | country | value |
| percentage\_pop\_type\_in\_location | The percentage of pops of a specific type in a location | location | value |
| policy | Unknown, add something in code registration | none | policy |
| pop\_type | Unknown, add something in code registration | none, pop | pop\_type |
| prev | The previous scope | none | varies |
| previous\_owner | Unknown, add something in code registration | location | country |
| previous\_ruler | Unknown, add something in code registration | country | character |
| price | Unknown, add something in code registration | none, policy | price |
| produced\_goods | Unknown, add something in code registration | production\_method | goods |
| produced\_in\_country | The amount of goods produced in a specific Country | country | value |
| produced\_in\_market | The amount of goods produced in a speficic market | market | value |
| produced\_in\_world | The amount of goods produced in the world | none | value |
| production\_method | Unknown, add something in code registration | none | production\_method |
| province | Unknown, add something in code registration | country, location | province |
| province\_capital | Unknown, add something in code registration | province | location |
| province\_definition | Unknown, add something in code registration | colonial\_charter, location, none, province | province\_definition |
| raw\_material | Unknown, add something in code registration | location | goods |
| raw\_material\_location | Unknown, add something in code registration | location | goods |
| rebel | Unknown, add something in code registration | character, pop | rebels |
| recruitment\_method | Unknown, add something in code registration | none | recruitment\_method |
| regency\_type | Unknown, add something in code registration | country, none | regency\_type |
| regent | Unknown, add something in code registration | country | character |
| region | Unknown, add something in code registration | area, location, none, province, province\_definition | region |
| relation\_type | Unknown, add something in code registration | none | relation\_type |
| religion | Unknown, add something in code registration | character, country, dynasty, mercenary, none, pop, rebels, sub\_unit | religion |
| religion\_group | Unknown, add something in code registration | none | group |
| religious\_aspect | Unknown, add something in code registration | none | religious\_aspect |
| religious\_faction | Unknown, add something in code registration | none | religious\_faction |
| religious\_figure | Unknown, add something in code registration | none | religious\_figure |
| religious\_focus | Unknown, add something in code registration | none | religious\_focus |
| religious\_head | Unknown, add something in code registration | religion | country |
| religious\_school | Unknown, add something in code registration | character, country, none | religious\_school |
| removal\_price | Unknown, add something in code registration | bureaucracy, bureaucracy\_type | price |
| resolution | Unknown, add something in code registration | active\_resolution, none | resolution |
| resolution\_proposer | Unknown, add something in code registration | active\_resolution | country |
| resolution\_target | Links to the named parameter (from the select\_triggers) in the scope active resolution | active\_resolution | varies |
| resolution\_vote | gets vote that a country is voting for on a particular resolution in an international organization - usage resolution\_vote(<country>|<international organization>|<resolution>) | none | vote |
| revolutionary\_target | Unknown, add something in code registration | none | country |
| road\_type | Unknown, add something in code registration | none | road\_type |
| root | The head of the current top scope eg: reciever of an event, taker of a decision | none | varies |
| rule\_end\_date | Unknown, add something in code registration | character | date |
| ruler | Unknown, add something in code registration | country | character |
| ruler\_or\_heir\_if\_regent | Unknown, add something in code registration | country | character |
| ruler\_or\_regent | Unknown, add something in code registration | country | character |
| scope | Reference a previously saved scope via its name eg: scope:target | none | varies |
| scriptable\_hint\_definition | Unknown, add something in code registration | none | scriptable\_hint\_definition |
| scripted\_geography | Unknown, add something in code registration | none | scripted\_geography |
| sea\_zone | Unknown, add something in code registration | location | location |
| second\_best\_market | Unknown, add something in code registration | location | market |
| secondary\_culture | Unknown, add something in code registration | location | culture |
| secondary\_otherwise\_primary\_culture | Unknown, add something in code registration | location | culture |
| siege | Unknown, add something in code registration | location, unit | siege |
| siege\_defender | the siege defender country | siege | country |
| siege\_main\_attacker | the siege main attacker country | siege | country |
| situation | Unknown, add something in code registration | none | situation |
| societal\_value | The value of a societal value of a country | country | value |
| societal\_value\_type | Unknown, add something in code registration | none | societal\_value\_type |
| special\_status | Unknown, add something in code registration | none, parliament\_issue | special\_status |
| stockpile\_in\_market | The amount of goods stockpiled in a specific market | market | value |
| sub\_continent | Unknown, add something in code registration | area, location, none, province, province\_definition, region | sub\_continent |
| sub\_unit\_category | Unknown, add something in code registration | none, sub\_unit | sub\_unit\_category |
| sub\_unit\_count | Checks the amount of a subunit-type inside a unit (in regiments) | unit | value |
| sub\_unit\_fraction | Checks the fraction of a subunit-type inside a unit (in regiments) | unit | value |
| sub\_unit\_strength | Checks the strength of a subunit-type inside a unit (in regiments) | unit | value |
| subject\_military\_stance | Unknown, add something in code registration | none | military\_stance |
| subject\_type | Unknown, add something in code registration | country, none | subject\_type |
| subunit\_home | Unknown, add something in code registration | sub\_unit | location |
| succession\_law | Unknown, add something in code registration | country | heir\_selection |
| target\_price | The target price a goods has in a market | market | value |
| this | The current scope | none | varies |
| to\_market | Unknown, add something in code registration | trade | market |
| top\_overlord | Unknown, add something in code registration | country | country |
| top\_overlord\_or\_this | Unknown, add something in code registration | country | country |
| top\_owner | Unknown, add something in code registration | location | country |
| topography | Unknown, add something in code registration | none | topography |
| total\_building\_levels\_including\_construction | The amount of total building levels including construction in a speficic Country | country | value |
| total\_effective\_building\_levels | The amount of total effective building levels in a speficic Country | country | value |
| total\_sub\_unit\_category\_in\_unit | Checks the total strength of a subunit-category for a unit | unit | value |
| total\_sub\_unit\_count | Checks the amount of a subunit-category that a country has (in regiments/ships) | country | value |
| total\_sub\_unit\_strength | Checks the total strength of a subunit-category for a unit | country | value |
| total\_sub\_unit\_type\_count | Checks the amount of a subunit-type that a country has (in regiments/ships) | country | value |
| total\_sub\_unit\_type\_strength | Checks the total strength of a subunit-type for a country | unit | value |
| town\_rights\_type | Unknown, add something in code registration | none, town\_rights | town\_rights\_type |
| traded\_goods | Unknown, add something in code registration | trade | goods |
| traded\_in\_market | The amount of goods traded in a specific market | market | value |
| trait | Unknown, add something in code registration | none | trait |
| union | Unknown, add something in code registration | country | international\_organization |
| unit | Unknown, add something in code registration | character | unit |
| unit\_ability | Unknown, add something in code registration | none | unit\_ability |
| unit\_destination | Unknown, add something in code registration | unit | location |
| unit\_formation\_preference | Unknown, add something in code registration | none | unit\_formation\_preference |
| unit\_location | Unknown, add something in code registration | unit | location |
| unit\_next\_location | Unknown, add something in code registration | unit | location |
| unit\_type | Unknown, add something in code registration | none | unit\_type |
| upgrade\_demand | Unknown, add something in code registration | production\_method | demand |
| value | A numeric literal value eg: 1, 5.2, -6 | none | value |
| var | Reference a previous set variable via its name eg: var:mortal\_enemy | none | varies |
| variable\_map | Reference a variable set under a specified scope in a named container on this scope: "variable\_map(our\_relations\_with|c:FRA)" | none | varies |
| vegetation | Unknown, add something in code registration | none | vegetation |
| vote\_in\_active\_resolution | gets the active resolution of the type specified in the scope active resolution - usage vote\_in\_active\_resolution(<country>) | active\_resolution | vote |
| war\_goal\_province | Links to the war goal of the war. If no war goal is set or is unrelated to locations (such as superiority) the link returns the capital of the defender war leader | war | province |
| war\_with\_country | Gets the current war of the country scope against the specified target country - usage war\_with\_country(<country>) | country | war |
| work\_of\_art | Unknown, add something in code registration | none | work\_of\_art |
| work\_of\_art\_type | Unknown, add something in code registration | none, work\_of\_art | work\_of\_art\_type |
| yes | Boolean literal for true values | none | boolean |
## References
---
* To update these tables, see [Module:Script docs/Scope links/Updates](/Module%3AScript_docs/Scope_links/Updates "Module:Script docs/Scope links/Updates")
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • Scope links • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
