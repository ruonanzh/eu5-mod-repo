<!-- source: https://eu5.paradoxwikis.com/Trigger revid: 34854 fetched: 2026-09-09 -->
# Trigger

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.1.

*See also: [Effect](/Effect "Effect"), [Scope link](/Scope_link "Scope link")*

**Triggers** are conditions that read the current game state – such as the ideology of a character, the ownership of a state, and much else – and determine whether an event can occur, an action is available, or if an [effect](/Effect "Effect") can be done, among more.

Triggers come in two basic types, *inline* and *block*. Inline triggers take a simple target, such as a [scope link](/Scope_link "Scope link"), [script value](/Script_value "Script value"), or defined game object key. Block triggers are more complex and often take multiple targets, such as a scope link *and* a script value.

All triggers require a certain [scope](/Scope "Scope"). Some triggers can be used in any scope (noted as "none" in the following tables), others only function when in the correct scope. Some triggers change the current scope.

The tables below are generated from the script documentation (*script\_docs* [console command](/Console_commands "Console commands")).

## Comparison triggers

Comparisons are a common type of trigger, comparing two numerical values or game objects. Many triggers in the tables below are a comparison trigger (indicated with target `value`), but comparisons can also be made directly between values or objects using [script values](/Script_value "Script value"), [variables](/Variable "Variable"), and [scope links](/Scope_link "Scope link").

Comparisons use one of the comparison operators:

| Operator | Meaning | Inverted meaning | Use |
| --- | --- | --- | --- |
| `<` | (Strict) less than | Greater than or equals | Left side is strictly less than right side |
| `<=` | Less than or equals | (Strict) greater than | Left side is less than or equal to right side |
| `=` | (Strict) equals | Not equals | Left side is exactly equal to the right side (usable with non-numerical values) |
| `!=` | Not equals | (Strict) equals | Left side is not equal to the right side (usable with non-numerical values) |
| `>` | (Strict) greater than | Less than or equals | Left side if strictly greater than the right side |
| `>=` | Greater than or equals | (Strict) less than | Left side is greater than or equal to the right side. |

If a comparison is used inside a negative block (e.g. `NOT = { }`), it uses its inverted meaning.

Note that `=` is also used as the operator for non-comparison triggers, as well as effects and blocks. In these cases, the `=` represents an assignment or simple syntactic requirement rather than a comparison.

### Scope links as triggers

*Main article: [Scope link](/Scope_link "Scope link")*

Scope links can be used as either the left or right side of a comparison trigger. For example, `army_size > c:FRA.army_size` returns true if the army size of the current scope is larger than the army size of France. For scope links that return a scope, only equality can be checked, while scope links that return a value can be used with inequality comparisons, too.

List of value scope links

| Scope link | Description | From scope |
| --- | --- | --- |
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

## Iterator triggers

Iterators examine all relevant scopes and output one or more. By default, iterators examine only one of the relevant scopes, but can be forced to examine more with the `count` or `percent` parameters

List of triggers

| Trigger | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| any\_accepted\_culture | Iterate through all accepted cultures in a country | ``` any_accepted_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_active\_disaster | Iterate through all active disasters for a country | ``` any_active_disaster = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | disaster |
| any\_active\_estate | Iterate through all active estates (non-crown) | ``` any_active_estate = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | estate\_type |
| any\_active\_resolution | Iterate through all currently active resolutions in an international organization or situation | ``` any_active_resolution = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization, situation | active\_resolution |
| any\_adjacent\_ports\_to\_area | Iterate through all adjacent ports of an seazone area | ``` any_adjacent_ports_to_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | location |
| any\_advance\_definition | Iterate through all advance definitions | ``` any_advance_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | advance\_type |
| any\_allowed\_estate\_in\_heir\_selection | Iterate through all allowed estates a HeirSelection has | ``` any_allowed_estate_in_heir_selection = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | heir\_selection | estate\_type |
| any\_ancestor | Iterate through all ancestors (parents, grandparents etc) of a character | ``` any_ancestor = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_area | Iterate through all existing areas | ``` any_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | area |
| any\_area\_in\_region | Iterate through all areas in a region | ``` any_area_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | area |
| any\_area\_in\_scripted\_geography | Iterate through all areas in a scripted geography | ``` any_area_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | area |
| any\_area\_with\_core | Iterate through all areas with cored locations in a country | ``` any_area_with_core = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | area |
| any\_area\_with\_owned\_province | Iterate through all areas with owned provinces in a country | ``` any_area_with_owned_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | area |
| any\_army | Iterate through all armies in a country | ``` any_army = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | unit |
| any\_artist | Iterate through all artists in a country | ``` any_artist = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_attacker | Iterate through all attackers of a war | ``` any_attacker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |
| any\_avatar\_for\_god | Iterate through all Avatars of a God | ``` any_avatar_for_god = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | god | avatar |
| any\_besieging\_units | Iterate through all units participating in a siege | ``` any_besieging_units = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | siege | unit |
| any\_border\_location | Iterate through all owned location in a country which border locations not owned by the current country scope. | ``` any_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_buildable\_building\_type | Iterate through all the building types a country can build | ``` any_buildable_building_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | building\_type |
| any\_building\_type | Iterate through all the building types | ``` any_building_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | building\_type |
| any\_buildings\_in\_location | Iterate through all buildings in a location | ``` any_buildings_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | building |
| any\_cabinet | Iterate through all actions in a country's cabinet | ``` any_cabinet = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | cabinet |
| any\_cabinet\_action | Iterate through all actions in a country's cabinet actions | ``` any_cabinet_action = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | cabinet\_action |
| any\_cabinet\_character | Iterate through all characters in a country that is in the cabinet | ``` any_cabinet_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_cardinal\_in\_country | Iterate through all Cardinals in a country | ``` any_cardinal_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | cardinal |
| any\_cardinal\_in\_religion | Iterate through all Cardinals in a Religion | ``` any_cardinal_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | cardinal |
| any\_casus\_belli\_on\_us | Iterate through all countries have a casus belli on us | ``` any_casus_belli_on_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_casus\_belli\_target | Iterate through all countries we have a casus belli on | ``` any_casus_belli_target = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_center | Iterate through all subunits on the center of a combat-side | ``` any_center = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_character | Iterate through all characters in a country | ``` any_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_character\_in\_dynasty | Iterate through all living characters in a Dynasty | ``` any_character_in_dynasty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | dynasty | character |
| any\_character\_supporting\_rebel | Iterate through all characters supporting a rebel | ``` any_character_supporting_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | rebels | character |
| any\_child | Iterate through all children of a character | ``` any_child = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_close\_relative | Iterate through all close relatives of a character | ``` any_close_relative = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_coast\_border\_location | Iterate through all bordering, or across one seazone of a location | ``` any_coast_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_colonial\_charter | Iterate through all colonial charters in a country | ``` any_colonial_charter = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | colonial\_charter |
| any\_colonial\_claim\_province\_definition | Iterate through all province definitions with colonial claims from the scope country. | ``` any_colonial_claim_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | province\_definition |
| any\_colonial\_country | Iterate through all colonial countries in the world | ``` any_colonial_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_colonial\_overlord | Iterate through all colonial overlord countries in the world | ``` any_colonial_overlord = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_colonial\_top\_overlord | Iterate through all countries in the world that have a colonial country among their subjects or their subjects subjects and so on | ``` any_colonial_top_overlord = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_connected\_location | Iterate through all locations in the same country as the scope location that are connected by land or strait | ``` any_connected_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_construction\_material\_for\_building\_type | Iterate through all goods required to construct a building type | ``` any_construction_material_for_building_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | building\_type | goods |
| any\_continent | Iterate through all existing continents | ``` any_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | continent |
| any\_continent\_in\_scripted\_geography | Iterate through all continents in a scripted geography | ``` any_continent_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | continent |
| any\_controlled\_location | Iterate through all controlled location in a country | ``` any_controlled_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_core\_in\_location | Iterate through all cores in a location | ``` any_core_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | country |
| any\_core\_location | Iterate through all core locations in a country | ``` any_core_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_country | Iterate through all existing countries | ``` any_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_annexing\_us | Iterate through all countries which are currently annexing the current country scope. | ``` any_country_annexing_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_at\_war\_with | Iterate through all countries at war with | ``` any_country_at_war_with = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_in\_culture | Iterate through all countries with this primary culture | ``` any_country_in_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture | country |
| any\_country\_in\_culture\_group | Iterate through all countries in a culture group. | ``` any_country_in_culture_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture\_group | country |
| any\_country\_in\_diplomatic\_range | Iterate through all countries in diplomatic range | ``` any_country_in_diplomatic_range = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_in\_dynasty | Iterate through all countries in a Dynasty | ``` any_country_in_dynasty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | dynasty | country |
| any\_country\_in\_hierarchy | Iterate through every country in the entire overlord/subject hierarchy, from the independent top overlord to the deepest subjects | ``` any_country_in_hierarchy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_in\_religion | Iterate through all countries in a religion | ``` any_country_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | country |
| any\_country\_in\_religion\_group | Iterate through all countries in a religion group. | ``` any_country_in_religion_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | group | country |
| any\_country\_in\_religious\_school | Iterate through all countries within a school | ``` any_country_in_religious_school = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religious\_school | country |
| any\_country\_lent\_to | Iterate through all countries a country has lent to | ``` any_country_lent_to = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_of\_country\_type | Iterate through all countries of the specified type. | ``` any_country_of_country_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_sub\_unit | Iterate through all subunits in all units in a country | ``` any_country_sub_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | sub\_unit |
| any\_country\_supporting\_rebel | Iterate through all countries supporting a rebel | ``` any_country_supporting_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | rebels | country |
| any\_country\_that\_can\_be\_called\_defensively | Iterate through all countries that may be called into a defensive war. | ``` any_country_that_can_be_called_defensively = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_that\_can\_be\_called\_offensively | Iterate through all countries that may be called into an offensive war. | ``` any_country_that_can_be_called_offensively = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_together\_in\_war\_with | Iterate through all countries which are an ally in any of the country scope's wars | ``` any_country_together_in_war_with = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_we\_are\_annexing | Iterate through all countries which are currently annexed by the current country scope. | ``` any_country_we_are_annexing = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_with\_capital\_in\_geography | Iterate through all countries which have their capital in the specified geography | ``` any_country_with_capital_in_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area, continent, location, province\_definition, region, scripted\_geography, sub\_continent | country |
| any\_country\_with\_cardinals | Iterate through all countries with cardinals in a religion | ``` any_country_with_cardinals = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | country |
| any\_country\_with\_coalition\_grade\_antagonism\_against\_us | Iterate through all countries who have coalition grade antagonism against us | ``` any_country_with_coalition_grade_antagonism_against_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_with\_relation\_that\_can\_be\_annulled | Iterate through all countries which have an annullable relation with the scope country. | ``` any_country_with_relation_that_can_be_annulled = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_with\_special\_status\_of\_type | Iterate through all countries in the international organization which have the specified special status | ``` any_country_with_special_status_of_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_country\_with\_succession\_law | Iterate through all countries with a cached succession law (set cached = yes in the heir\_selection to use this) | ``` any_country_with_succession_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_culture | Iterate through all cultures | ``` any_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | culture |
| any\_culture\_group | Iterate through all culture groups the culture is in. | ``` any_culture_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture | culture\_group |
| any\_culture\_in\_culture\_group | Iterate through all cultures in a culture group. | ``` any_culture_in_culture_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture\_group | culture |
| any\_current\_avatars | Iterate through all Avatars a country has | ``` any_current_avatars = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | avatar |
| any\_current\_gods | Iterate through all Gods a country worships | ``` any_current_gods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | god |
| any\_current\_law | Iterate through all laws of a country. | ``` any_current_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | law |
| any\_current\_law\_in\_international\_organization | Iterate through all laws that are codified in the international organization | ``` any_current_law_in_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | law |
| any\_current\_policy | Iterate through all policies that are codified in the country | ``` any_current_policy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | policy |
| any\_current\_policy\_in\_international\_organization | Iterate through all policies that are codified in the international organization | ``` any_current_policy_in_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | policy |
| any\_current\_reforms | Iterate through all Government Reforms a country has | ``` any_current_reforms = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | government\_reform |
| any\_current\_war | Iterate through all wars of a country | ``` any_current_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | war |
| any\_defender | Iterate through all defenders of a war | ``` any_defender = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |
| any\_descendant | Iterate through all descendants (children, grandchildren etc) of a character | ``` any_descendant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_disloyal\_subject | Iterate through all loyal subject countries | ``` any_disloyal_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_dynasty | Iterate through all dynasties in a country | ``` any_dynasty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | dynasty |
| any\_east\_of\_province\_definition | Iterate through all province-definitions east of a province-definition | ``` any_east_of_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province\_definition |
| any\_election\_candidates | Iterate through all election candidates of a country with elections! | ``` any_election_candidates = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_enemy | Iterate through all Enemy countries | ``` any_enemy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_enemy\_war\_leader | Iterate through all countries which are leading a war against the scope | ``` any_enemy_war_leader = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_estate | Iterate through all estates in a country | ``` any_estate = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | estate |
| any\_estate\_privilege | Iterate through all current estate privileges of a Country | ``` any_estate_privilege = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | estate\_privilege |
| any\_estate\_type\_preferring | Iterate through all estate types that a prefer a policy | ``` any_estate_type_preferring = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | policy | estate\_type |
| any\_exploration\_from\_country | Iterate through all Explorations a country has | ``` any_exploration_from_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | exploration |
| any\_export | Iterate through all exports in a market | ``` any_export = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | trade |
| any\_export\_from\_location | Iterate through all exports from location | ``` any_export_from_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_foreign\_building\_countries\_in\_location | Iterate through all foreign building countries in a location | ``` any_foreign_building_countries_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | country |
| any\_foreign\_buildings\_in\_location | Iterate through all foreign buildings in a location | ``` any_foreign_buildings_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | building |
| any\_fort\_in\_country | Iterate through all Forts in a country | ``` any_fort_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_friendly\_coast\_border\_location | Iterate through all friendly bordering, or across one seazone of a location | ``` any_friendly_coast_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_friendly\_country | Iterate through all countries with relations marked as friendly | ``` any_friendly_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_friendly\_or\_high\_opinion\_country | Iterate through all countries with relations marked as friendly or that we have a high opinion of set in defines | ``` any_friendly_or_high_opinion_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_friendly\_to\_friendly\_country | Iterate through all friends of our friends | ``` any_friendly_to_friendly_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_friendly\_to\_hostile\_country | Iterate through all friends of our enemies | ``` any_friendly_to_hostile_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_god\_in\_religion | Iterate through all Gods in a Religion | ``` any_god_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | god |
| any\_good\_in\_demand | Iterate through all goods in a goods demand | ``` any_good_in_demand = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | demand | goods |
| any\_goods | Iterate through all types of goods | ``` any_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| any\_graphical\_culture\_in\_culture | Iterate through all graphical culture in a culture | ``` any_graphical_culture_in_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture | graphical\_culture |
| any\_great\_power | Iterate through all great powers | ``` any_great_power = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_heathen\_location | Iterate through all heathen locations in a country | ``` any_heathen_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_heretic\_location | Iterate through all Heretic locations in a country | ``` any_heretic_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_hired\_mercenary | Iterate through mercenaries a country has hired | ``` any_hired_mercenary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | mercenary |
| any\_historical\_enemy | Iterate through all historical Enemy countries | ``` any_historical_enemy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_historical\_rival | Iterate through all historical rival countries | ``` any_historical_rival = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_holy\_site\_in\_country | Iterate through all Holy Sites in a country | ``` any_holy_site_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | holy\_site |
| any\_holy\_site\_in\_religion | Iterate through all Holy Sites in a Religion | ``` any_holy_site_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | holy\_site |
| any\_hostile\_country | Iterate through all countries with relations marked as hostile | ``` any_hostile_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_hostile\_or\_low\_opinion\_country | Iterate through all countries with relations marked as hostile or that we have a low opinion of set in defines | ``` any_hostile_or_low_opinion_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_hostile\_to\_friendly\_country | Iterate through all enemies of our friends | ``` any_hostile_to_friendly_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_hostile\_to\_hostile\_country | Iterate through all enemies of our enemies | ``` any_hostile_to_hostile_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_import | Iterate through all imports in a market | ``` any_import = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | trade |
| any\_import\_from\_location | Iterate through all Imports from location | ``` any_import_from_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_in\_global\_list | Iterate through all items in global list. | ``` any_in_global_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_local\_list | Iterate through all items in local list. | ``` any_in_local_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_institutions\_embraced | Iterate through all institutions a country has embraced | ``` any_institutions_embraced = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | institution |
| any\_international\_organization | Iterate through all international organizations | ``` any_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | international\_organization |
| any\_international\_organization\_elector | Iterate through all countries with an elector special status in the international organization | ``` any_international_organization_elector = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_enemy | Iterate through all countries that are enemies of the international organization | ``` any_international_organization_enemy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_member | Iterate through all countries that are members of the international organization | ``` any_international_organization_member = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_owned\_location | Iterate through all locations that are owned by the international organization | ``` any_international_organization_owned_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | location |
| any\_international\_organization\_owner | Iterate through all international organizations which own the location scope | ``` any_international_organization_owner = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | international\_organization |
| any\_international\_organization\_parliament\_opposers | Iterate through all countries that have voted AGAINST the parliament issue in the in the parliament of the international organization and support the current debate | ``` any_international_organization_parliament_opposers = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_parliament\_supporter | Iterate through all countries that have voted FOR the parliament issue in the parliament of the international organization and support the current debate | ``` any_international_organization_parliament_supporter = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organizations\_member\_of | Iterate through all international organizations a country is a member of | ``` any_international_organizations_member_of = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | international\_organization |
| any\_international\_organizations\_target\_of | Iterate through all international organizations a country is a target of | ``` any_international_organizations_target_of = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | international\_organization |
| any\_invited\_religious\_figure | Iterate through all invited religious figures in a Country | ``` any_invited_religious_figure = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` any_key_in_global_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` any_key_in_local_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` any_key_in_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_known\_country | Iterate through all known countries | ``` any_known_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_known\_institution | Iterate through all institutions a country knows of | ``` any_known_institution = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | institution |
| any\_left\_flank | Iterate through all subunits on the left-flank of a combat-side | ``` any_left_flank = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_lent\_loan | Iterate through all loans that a country lent | ``` any_lent_loan = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | loan |
| any\_loan | Iterate through all loans in a country | ``` any_loan = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | loan |
| any\_loan\_lent\_to\_country | Iterate through all loans a country has lent to the supplied borrower country | ``` any_loan_lent_to_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | loan |
| any\_location\_in\_area | Iterate through all Locations in a area | ``` any_location_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | location |
| any\_location\_in\_continent | Iterate through all Locations in a continent | ``` any_location_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | continent | location |
| any\_location\_in\_market | Iterate through all locations in a market | ``` any_location_in_market = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | location |
| any\_location\_in\_province | Iterate through all Locations in a province | ``` any_location_in_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province | location |
| any\_location\_in\_province\_definition | Iterate through all Locations in a province definition | ``` any_location_in_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | location |
| any\_location\_in\_region | Iterate through all Locations in a region | ``` any_location_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | location |
| any\_location\_in\_scripted\_geography | Iterate through all Locations in a scripted geography | ``` any_location_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | location |
| any\_location\_in\_sub\_continent | Iterate through all Locations in a sub-continent | ``` any_location_in_sub_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | sub\_continent | location |
| any\_location\_in\_the\_world | Iterate through all location | ``` any_location_in_the_world = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | location |
| any\_loyal\_subject | Iterate through all loyal subject countries | ``` any_loyal_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_maritime\_area | Iterate through all maritime areas for a country | ``` any_maritime_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | area |
| any\_market\_center\_in\_country | Iterate through all markets in a country which market centers are owned by the country | ``` any_market_center_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | market |
| any\_market\_in\_world | Iterate through all markets in the world | ``` any_market_in_world = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | market |
| any\_market\_present\_in\_country | Iterate through all markets in a country | ``` any_market_present_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | market |
| any\_market\_with\_merchants | Iterate through all markets a country has active merchants | ``` any_market_with_merchants = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | market |
| any\_mercenary | Iterate through all mercenaries in the world | ``` any_mercenary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | mercenary |
| any\_mercenary\_sub\_unit | Iterate through all subunits in a Mercenary | ``` any_mercenary_sub_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | mercenary | sub\_unit |
| any\_merchant\_in\_market | Iterate through all merchants in a market | ``` any_merchant_in_market = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | country |
| any\_navy | Iterate through all navies in a country | ``` any_navy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | unit |
| any\_neighbor\_area | Iterate through all neighboring areas in a area | ``` any_neighbor_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | area |
| any\_neighbor\_country | Iterate through all neighbour countries | ``` any_neighbor_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_neighbor\_location | Iterate through all neighbors of a location | ``` any_neighbor_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_neighbor\_province\_definition | Iterate through all neighboring ProvinceDefinitions in a ProvinceDefinition | ``` any_neighbor_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province\_definition |
| any\_new\_world\_goods | Iterate through all new-world goods | ``` any_new_world_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| any\_nomad\_countries\_in\_location | Iterate through all nomad pop countries in a location | ``` any_nomad_countries_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | country |
| any\_non\_state\_religion\_location | Iterate through all NonStateReligion locations in a country | ``` any_non_state_religion_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_old\_world\_goods | Iterate through all old-world goods | ``` any_old_world_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| any\_other\_core\_country | Iterate through all other countries which have a core on the current country | ``` any_other_core_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_other\_country | Iterate through all other countries | ``` any_other_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_other\_great\_power | Iterate through all other great powers | ``` any_other_great_power = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_other\_religion\_in\_same\_group | Iterate through all other religions that has the same group as Religion | ``` any_other_religion_in_same_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | religion |
| any\_other\_revolutionary | Iterate through all other revolutionary countries | ``` any_other_revolutionary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_overlord\_or\_above | Iterate through your overlord, your overlord's overlord, and so on | ``` any_overlord_or_above = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_ownable\_location | Iterate through all ownable location | ``` any_ownable_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | location |
| any\_ownable\_location\_in\_area | Iterate through all ownable Locations in an area | ``` any_ownable_location_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | location |
| any\_ownable\_location\_in\_continent | Iterate through all ownable Locations in a continent | ``` any_ownable_location_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | continent | location |
| any\_ownable\_location\_in\_province\_definition | Iterate through all ownable Locations in a province definition | ``` any_ownable_location_in_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | location |
| any\_ownable\_location\_in\_region | Iterate through all ownable Locations in a region | ``` any_ownable_location_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | location |
| any\_ownable\_location\_in\_scripted\_geography | Iterate through all ownable Locations in a scripted geography | ``` any_ownable_location_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | location |
| any\_ownable\_location\_in\_sub\_continent | Iterate through all ownable Locations in a sub continent | ``` any_ownable_location_in_sub_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | sub\_continent | location |
| any\_owned\_building | Iterate through all the owned buildings in a country | ``` any_owned_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | building |
| any\_owned\_foreign\_building | Iterate through all the owned foreign buildings in a country | ``` any_owned_foreign_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | building |
| any\_owned\_foreign\_building\_location | Iterate through all the location of owned foreign buildings in a country | ``` any_owned_foreign_building_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owned\_foreign\_building\_region | Iterate through all the regions of owned foreign buildings in a country | ``` any_owned_foreign_building_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | region |
| any\_owned\_location | Iterate through all owned location in a country | ``` any_owned_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owned\_nomad\_pop | Iterate through all owned nomad pops in a country | ``` any_owned_nomad_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | pop |
| any\_owned\_non\_rural\_location | Iterate through all owned non-rural locations in a country | ``` any_owned_non_rural_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owned\_rural\_location | Iterate through all owned rural locations in a country | ``` any_owned_rural_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owner\_in\_region | Iterate through all the countries that own locations in a region | ``` any_owner_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | country |
| any\_parent | Iterate through parents (order: father, mother) of a character. | ``` any_parent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_participating\_countries | Iterate through all Countrys participating in 1 side of a combat | ``` any_participating_countries = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | country |
| any\_participating\_units | Iterate through all units participating in 1 side of a combat | ``` any_participating_units = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | unit |
| any\_past\_liturgical\_dialect | Iterate through all liturgical dialects a country has had before | ``` any_past_liturgical_dialect = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_policy\_in\_law | Iterate through all policies that are part of the law scope | ``` any_policy_in_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | law | policy |
| any\_political\_border\_location | Iterate through all owned location in a country which border another country. | ``` any_political_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_pop | Iterate through all pops in a location or country | ``` any_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, location | pop |
| any\_pops\_supporting\_rebel | Iterate through all pops supporting a rebel | ``` any_pops_supporting_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | rebels | pop |
| any\_port\_in\_country | Iterate through all Ports in a country | ``` any_port_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_possible\_disaster | Iterate through all possible disasters for a country | ``` any_possible_disaster = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | disaster |
| any\_possible\_parliament\_issue | Iterate through all possible parliament issues in a country's or an international organization's parliament | ``` any_possible_parliament_issue = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, international\_organization | parliament\_issue |
| any\_possible\_policy | Iterate through all possible policies of a Country that is not currently implemeted | ``` any_possible_policy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | policy |
| any\_possible\_privilege | Iterate through all possible & allowed estate privileges of a Country that is not currently implemeted | ``` any_possible_privilege = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | estate | estate\_privilege |
| any\_possible\_recruit\_location | Iterate through all possible recruit locations in a country | ``` any_possible_recruit_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_present\_country | Iterate through all countries in the specified geography | ``` any_present_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area, continent, location, province\_definition, region, scripted\_geography, sub\_continent | country |
| any\_present\_culture\_in\_country | Iterate through all cultures present in the country. | ``` any_present_culture_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_present\_culture\_in\_location | Iterate through all cultures present in the location. | ``` any_present_culture_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | culture |
| any\_present\_overlord | Iterate through all countries which have a subject in the specified geography | ``` any_present_overlord = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area, continent, location, province\_definition, region, scripted\_geography, sub\_continent | country |
| any\_present\_religion\_in\_country | Iterate through all religions present in the country. | ``` any_present_religion_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | religion |
| any\_present\_religion\_in\_location | Iterate through all religions present in the location. | ``` any_present_religion_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | religion |
| any\_primary\_or\_accepted\_culture | Iterate through primary culture and all accepted cultures in a country. Primary is ordered first. | ``` any_primary_or_accepted_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_primary\_or\_accepted\_or\_tolerated\_culture | Iterate through primary culture and all accepted and all tolerated cultures in a country. Primary is ordered first. | ``` any_primary_or_accepted_or_tolerated_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_privateer | Iterate through all privateers in the world | ``` any_privateer = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | privateer |
| any\_privateer\_from\_country | Iterate through all privateers a country has | ``` any_privateer_from_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | privateer |
| any\_privateer\_in\_area | Iterate through all privateers in a area | ``` any_privateer_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | privateer |
| any\_production\_method | Iterate through all types of production methods. | ``` any_production_method = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | production\_method |
| any\_production\_method\_of\_building | Iterate through all available production methods of the building. | ``` any_production_method_of_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | building | production\_method |
| any\_province | Iterate through all provinces in a country | ``` any_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | province |
| any\_province\_definition | Iterate through all existing province\_definition | ``` any_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | province\_definition |
| any\_province\_definition\_in\_area | Iterate through all province-definitions in an area | ``` any_province_definition_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | province\_definition |
| any\_province\_definition\_in\_scripted\_geography | Iterate through all province-definitions in a scripted geography | ``` any_province_definition_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | province\_definition |
| any\_province\_in\_area | Iterate through all provinces in an area | ``` any_province_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | province |
| any\_province\_in\_province\_definition | Iterate through all provinces in a province-definition | ``` any_province_in_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province |
| any\_rebel | Iterate through all Rebels in a country | ``` any_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | rebels |
| any\_region | Iterate through all existing regions | ``` any_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | region |
| any\_region\_in\_continent | Iterate through all regions in a sub-continent | ``` any_region_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | sub\_continent | region |
| any\_region\_in\_scripted\_geography | Iterate through all regions in a scripted geography | ``` any_region_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | region |
| any\_related\_country | Iterate through all related countries | ``` any_related_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_religion | Iterate through all religions | ``` any_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | religion |
| any\_religion\_for\_god | Iterate through all Religions of a God | ``` any_religion_for_god = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | god | religion |
| any\_religion\_in\_religion\_group | Iterate through all religions in a religion group. | ``` any_religion_in_religion_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | group | religion |
| any\_religion\_international\_organization | Iterate through all international organisations of a religion | ``` any_religion_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | international\_organization |
| any\_religious\_aspect | Iterate through all religious aspects of a Country | ``` any_religious_aspect = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | religious\_aspect |
| any\_religious\_focus | Iterate through all completed religious focuses of a Country | ``` any_religious_focus = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | religious\_focus |
| any\_religious\_school\_in\_religion | Iterate through all Religious Schools in a Religion | ``` any_religious_school_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | religious\_school |
| any\_rented\_out\_mercenary | Iterate through mercenaries a country has rented out to the market | ``` any_rented_out_mercenary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | mercenary |
| any\_required\_goods | Iterate through all goods required by the scope production method. | ``` any_required_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | production\_method | goods |
| any\_reserves | Iterate through all subunits on the reserve of a combat-side | ``` any_reserves = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_retreated | Iterate through all subunits on the retreated of a combat-side | ``` any_retreated = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_revolutionary | Iterate through all revolutionary states | ``` any_revolutionary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_right\_flank | Iterate through all subunits on the right-flank of a combat-side | ``` any_right_flank = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_rival | Iterate through all rival countries | ``` any_rival = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_road\_type | Iterate through all the road types | ``` any_road_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | road\_type |
| any\_royal\_marriage | Iterate through all royal married countries | ``` any_royal_marriage = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_ruler | Iterate through all characters that have ever been rulers in a country, including the dead | ``` any_ruler = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_ruling\_countries | Iterate through countries a character rulers | ``` any_ruling_countries = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | country |
| any\_sound\_toll\_in\_country | Iterate through all Sound Tolls in a country | ``` any_sound_toll_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_spouse | Iterate through all spouses of a character | ``` any_spouse = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_spy\_network\_built\_in\_us | Iterate through all countries building spy networks | ``` any_spy_network_built_in_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_sub\_continent | Iterate through all existing sub\_continents | ``` any_sub_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | sub\_continent |
| any\_sub\_continent\_in\_continent | Iterate through all sub-continents in a continent | ``` any_sub_continent_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | continent | sub\_continent |
| any\_sub\_continent\_in\_scripted\_geography | Iterate through all sub-continents in a scripted geography | ``` any_sub_continent_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | sub\_continent |
| any\_sub\_unit | Iterate through all subunits in a unit | ``` any_sub_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | unit | sub\_unit |
| any\_subject | Iterate through all subject countries | ``` any_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_subject\_or\_below | Iterate through all subject countries and their subject countries, and so on | ``` any_subject_or_below = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_tolerated\_culture | Iterate through all Tolerated cultures in a country | ``` any_tolerated_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_trade | Iterate through all trades in a Country | ``` any_trade = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | trade |
| any\_union\_partner | Iterate through all countries which are in a personal union with the current country scope. | ``` any_union_partner = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_unit | Iterate through all units in a country | ``` any_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | unit |
| any\_unit\_in\_location | Iterate through all units in a location | ``` any_unit_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | unit |
| any\_valid\_religion\_for\_aspect | Iterate through all religion that an aspect can be for | ``` any_valid_religion_for_aspect = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religious\_aspect | religion |
| any\_voter | Iterate through all voters in an active resolution | ``` any_voter = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | active\_resolution | country |
| any\_war | Iterate through all wars going on globally | ``` any_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | war |
| any\_war\_participant | Iterate through all participants of a war | ``` any_war_participant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |
| any\_weather\_system\_in\_location | Iterate through all weather systems in a location | ``` any_weather_system_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | weather\_system |
| any\_west\_of\_province\_definition | Iterate through all province-definitions west of a province-definition | ``` any_west_of_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province\_definition |
| any\_work\_of\_art | Iterate through all WorkOfArts in the world | ``` any_work_of_art = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | work\_of\_art |
| any\_work\_of\_art\_by\_creator | Iterate through all work\_of\_art by a particular artist | ``` any_work_of_art_by_creator = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | work\_of\_art |
| any\_work\_of\_art\_in\_country | Iterate through all work\_of\_art in a country | ``` any_work_of_art_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | work\_of\_art |
| any\_work\_of\_art\_in\_location | Iterate through all work\_of\_art in a location | ``` any_work_of_art_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | work\_of\_art |

## Flow triggers

Flow triggers control how other triggers are used. This includes conditionals and loops as well as tooltips. They can always be used in any scope

List of triggers

| Trigger | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| all\_false | true if all children are false (equivalent to NOR) |  | none |  |
| and | all inside trigger must be true |  | none |  |
| any\_false | true if any child is false (equivalent to NAND) |  | none |  |
| any\_food\_goods | Iterate through all food-goods | ``` any_food_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| calc\_true\_if | Returns true if the specified number of sub-triggers return true | ``` calc_true_if = {  amount = 2  <trigger>  <trigger>  <trigger> } ``` | none |  |
| custom\_description | Wraps triggers that get a custom description instead of the auto-generated one | ``` custom_description = { 	text = <trigger_localization_key> 	subject = <optional subject scope> #defaults to current scope 	object = <optional object scope> 	value = <optional script value> 	... triggers ... } ``` | none |  |
| custom\_tooltip | Replaces the tooltips for the enclosed triggers with a custom text | ``` custom_tooltip = { 	text = <text> 	subject = <scope> (optional) 	<trigger> } ``` | none |  |
| nand | a negated AND trigger |  | none |  |
| nor | a negated OR trigger |  | none |  |
| not | negates content of trigger |  | none |  |
| or | at least one entry inside trigger must be true |  | none |  |
| switch | Switch on a trigger for the evaluation of another trigger with an optional fallback trigger. | ``` switch = { 	trigger = simple_assign_trigger 	case_1 = { <triggers> } 	case_2 = { <triggers> } 	case_n = { <triggers> } 	fallback = { <triggers> } } ``` | none |  |
| trigger\_else | Evaluates the display\_triggers if the triggers of preceding 'trigger\_if' or 'trigger\_else\_if' is not met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else = {  <display_triggers> } ``` | none |  |
| trigger\_else\_if | Evaluates the enclosed display\_triggers if the triggers of the preceding `trigger\_if` or `trigger\_else\_if` is not met and its own trigger of the limit is met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| trigger\_if | Evaluates the display\_triggers if the triggers of the limit are met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| weighted\_calc\_true\_if | Returns true if the sum of weights of fulfilled sub-triggers amount to the specified sum | ``` weighted_calc_true_if = {  amount = 10  5 = { <trigger> }  15 = { <trigger> }  7 = { <trigger> } } ``` | none |  |

## Variable triggers

Variable triggers check a [variable](/Variable "Variable"). They can always be used in any scope, but may require a certain scope to read the correct variable.

List of triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| any\_in\_global\_list | Iterate through all items in global list. | ``` any_in_global_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` |  |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` |  |
| any\_in\_local\_list | Iterate through all items in local list. | ``` any_in_local_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` |  |
| any\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` any_key_in_global_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` |  |
| any\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` any_key_in_local_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` |  |
| any\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` any_key_in_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` |  |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable_name  value >= <script_value> } ``` |  |
| global\_variable\_map\_size | Checks the size of a global variable map | ``` global_variable_map_size = {  name = <variable_name  value >= <script_value> } ``` |  |
| has\_global\_variable | Checks whether the specified global variable is set | ``` has_global_variable = name ``` |  |
| has\_global\_variable\_list | Checks whether the specified global variable list is set | ``` has_global_variable_list = name ``` |  |
| has\_global\_variable\_map | Checks whether the specified global variable map is set | ``` has_global_variable_map = name ``` |  |
| has\_local\_variable | Checks whether the specified local variable is set | ``` has_local_variable = name ``` |  |
| has\_local\_variable\_list | Checks whether the specified local variable list is set | ``` has_local_variable_list = name ``` |  |
| has\_local\_variable\_map | Checks whether the specified local variable map is set | ``` has_local_variable_map = name ``` |  |
| has\_variable | Checks whether the current scope has the specified variable set | ``` has_variable = name ``` |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` |  |
| has\_variable\_map | Checks whether the current scope has the specified variable map set | ``` has_variable_map = name ``` |  |
| is\_key\_in\_global\_variable\_map | Checks if a target is a key in a global variable map | ``` is_key_in_global_variable_map = {  name = <global_variable_map>  target = <key to check> } ``` |  |
| is\_key\_in\_local\_variable\_map | Checks if a target is a key in a local variable map | ``` is_key_in_local_variable_map = {  name = <local_variable_map>  target = <key to check> } ``` |  |
| is\_key\_in\_variable\_map | Checks if a target is a key in a variable map | ``` is_key_in_variable_map = {  name = <variable_map>  target = <key to check> } ``` |  |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable_name>  target = <event_target> } ``` |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable_name>  target = <event_target> } ``` |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable_name>  target = <event_target> } ``` |  |
| is\_value\_in\_global\_variable\_map | Checks if a target is a value in a global variable map | ``` is_value_in_global_variable_map = {  name = <global_variable_map>  target = <value to check> } ``` |  |
| is\_value\_in\_local\_variable\_map | Checks if a target is a value in a local variable map | ``` is_value_in_local_variable_map = {  name = <local_variable_map>  target = <value to check> } ``` |  |
| is\_value\_in\_variable\_map | Checks if a target is a value in a variable map | ``` is_value_in_variable_map = {  name = <variable_map>  target = <value to check> } ``` |  |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` |  |
| local\_variable\_map\_size | Checks the size of a local variable map | ``` local_variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` |  |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` |  |
| variable\_map\_size | Checks the size of a variable map | ``` variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` |  |

## Triggers by scope

The following tables list triggers by their required scope. Some triggers are repeated as they can be used in multiple scopes. All `any_` triggers are listed under [Iterator triggers](#Iterator_triggers).

### None/any scope

List of none triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| add\_to\_temporary\_list | Saves a temporary target for use during the trigger execution | ``` This is used to build lists in triggers. If used within an any-trigger, placement within the trigger is quite important. The game will iterate through every instance of the any-trigger  until it finds a single instance that fulfills the requirements, and then it will stop. In order to add every instance of a scope that fulfills certain conditions,  use "count = all" while also placing this "effect" at the very end of the any-trigger  (so that every condition is evaluated for every iteration). ``` |  |
| ai\_issue\_voting\_bias | gets the AI evaluation score for voting bias from the international organization |  | value |
| ai\_will\_do | gets the AI evaluation score of the supplied generic action ofr the supplied country |  | value |
| always | checks if the assigned yes/no value is true | ``` always = yes # always succeeds always = no  # always fails always = scope:a_boolean_value # evaluated at runtime ``` | boolean |
| assert\_if | Conditionally cause an assert during run time | ``` assert_if = {  limit = { <trigger> }  text = <string> } ``` |  |
| assert\_read | Conditionally cause an assert during read time | ``` assert_read = yes/<string> ``` |  |
| can\_add\_relation | Can the country have the specified scripted relation with another country. | ``` can_add_relation = {  first = <country>  second = <country>  type = <relation type> } ``` |  |
| can\_start\_tutorial\_lesson | Can the specified tutorial lesson be started? | ``` can_start_tutorial_lesson = reactive_advice_succession ``` |  |
| country\_exists | Does the country exist? |  | country |
| current\_age | Checks if it is a certain age! |  |  |
| current\_date | Compare the current ingame date. |  | date |
| current\_month | Compare the current ingame month (1..12) |  | value |
| current\_tooltip\_depth | What is the number of tooltips open right now? |  | value |
| current\_year | Compare the current ingame year |  | value |
| debug\_log | Log whether the parent trigger succeeded or failed |  |  |
| debug\_log\_details | Log whether the parent trigger succeeded or failed. Log which children succeeded or failed |  |  |
| debug\_only | Checks if the game is in debug mode or not. |  | boolean |
| disease\_is\_active | Checks if a disease is active in the world. |  | disease |
| disease\_outbreak\_is\_active | Checks if a disease outbreak is active in the world. |  | disease\_outbreak |
| dynasty\_exists | does a tag exist |  |  |
| exists | Checks whether the specified scope target exists (check for not being the null object) | ``` exists = from.owner.var:cool_var.mother ``` |  |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable_name  value >= <script_value> } ``` |  |
| global\_variable\_map\_size | Checks the size of a global variable map | ``` global_variable_map_size = {  name = <variable_name  value >= <script_value> } ``` |  |
| has\_dlc | Does the host have this DLC |  |  |
| has\_fired\_unique\_event | Checks if the game has already fired the unique event |  |  |
| has\_game\_rule | Is the given game rule setting enabled? | ``` has_game_rule = faster_conversion ``` |  |
| has\_global\_variable | Checks whether the specified global variable is set | ``` has_global_variable = name ``` |  |
| has\_global\_variable\_list | Checks whether the specified global variable list is set | ``` has_global_variable_list = name ``` |  |
| has\_global\_variable\_map | Checks whether the specified global variable map is set | ``` has_global_variable_map = name ``` |  |
| has\_local\_dlc | Does the host have this DLC |  |  |
| has\_local\_variable | Checks whether the specified local variable is set | ``` has_local_variable = name ``` |  |
| has\_local\_variable\_list | Checks whether the specified local variable list is set | ``` has_local_variable_list = name ``` |  |
| has\_local\_variable\_map | Checks whether the specified local variable map is set | ``` has_local_variable_map = name ``` |  |
| has\_multiple\_players | Does the game have at least two players currently connected? |  | boolean |
| has\_newsletter\_subscription | Has the player subscribed to the newsletter? |  | boolean |
| has\_variable | Checks whether the current scope has the specified variable set | ``` has_variable = name ``` |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` |  |
| has\_variable\_map | Checks whether the current scope has the specified variable map set | ``` has_variable_map = name ``` |  |
| hidden\_trigger | Enclosed triggers are not shown in tooltips | ``` hidden_trigger = { <more triggers> } ``` |  |
| international\_organization\_can\_add\_land | Can we add a location to the scope international organization? |  | international\_organization |
| international\_organization\_can\_remove\_land | Can we remove a location from the scope international organization? |  | international\_organization |
| ironman | Checks if the game is running in ironman. |  | boolean |
| is\_alert\_shown | Is the alert with the specified name shown? |  |  |
| is\_alert\_triggered | Is the alert with the specified name triggered? |  |  |
| is\_camera\_in\_zoom\_level | Is camera in a specified zoom level? SMALL / MEDIUM / LARGE |  |  |
| is\_gamestate\_tutorial\_active | Is the gamestate tutorial active? See save\_progress\_in\_gamestate in tutorial\_lesson\_chains documentation. |  | boolean |
| is\_in\_list | Checks if a target in in a list |  |  |
| is\_key\_in\_global\_variable\_map | Checks if a target is a key in a global variable map | ``` is_key_in_global_variable_map = {  name = <global_variable_map>  target = <key to check> } ``` |  |
| is\_key\_in\_local\_variable\_map | Checks if a target is a key in a local variable map | ``` is_key_in_local_variable_map = {  name = <local_variable_map>  target = <key to check> } ``` |  |
| is\_key\_in\_variable\_map | Checks if a target is a key in a variable map | ``` is_key_in_variable_map = {  name = <variable_map>  target = <key to check> } ``` |  |
| is\_map\_mode\_active | Is map mode active? |  |  |
| is\_multiplayer\_session | Is the current game session multiplayer? |  | boolean |
| is\_set | Checks whether the specified scope target has been set (includes being the null object) | ``` is_set = from.owner.var:cool_var.mother ``` |  |
| is\_situation\_active | Checks if the target situation is currently active |  | situation |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable_name>  target = <event_target> } ``` |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable_name>  target = <event_target> } ``` |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable_name>  target = <event_target> } ``` |  |
| is\_tooltip\_with\_name\_open | Is the tooltip with the specified name open? |  |  |
| is\_tutorial\_active | Is the tutorial active? |  | boolean |
| is\_tutorial\_lesson\_active | Is this the current tutorial lesson? | ``` is_tutorial_lesson_active = reactive_advice_succession ``` |  |
| is\_tutorial\_lesson\_chain\_completed | Has the tutorial lesson chain with the specified key been finished? |  |  |
| is\_tutorial\_lesson\_completed | has the tutorial lesson with the specified name been finished? |  |  |
| is\_tutorial\_lesson\_step\_completed | Has the tutorial lesson step been finished? | ``` is_tutorial_lesson_step_completed = lesson_key:step_key ``` |  |
| is\_value\_in\_global\_variable\_map | Checks if a target is a value in a global variable map | ``` is_value_in_global_variable_map = {  name = <global_variable_map>  target = <value to check> } ``` |  |
| is\_value\_in\_local\_variable\_map | Checks if a target is a value in a local variable map | ``` is_value_in_local_variable_map = {  name = <local_variable_map>  target = <value to check> } ``` |  |
| is\_value\_in\_variable\_map | Checks if a target is a value in a variable map | ``` is_value_in_variable_map = {  name = <variable_map>  target = <value to check> } ``` |  |
| is\_widgetid\_open | Is the widget with the specified `widgetid` open (visible and not animating)? The fastest and safest way to check. (replaces old `is\_widget\_open` functionality, which operated on names.) |  |  |
| list\_size | Checks the size of a list | ``` list_size = {  name = <list_name>  value >= <script_value> } ``` | value |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` |  |
| local\_variable\_map\_size | Checks the size of a local variable map | ``` local_variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` |  |
| random\_integer | Uniformly random integer between 0 and 2^31-1. It will be the same if evaluated on the same scope and day. |  | value |
| release\_only | Checks if the game is in release mode or not. |  | boolean |
| save\_temporary\_scope\_as | Saves a temporary target for use during the trigger execution |  |  |
| save\_temporary\_scope\_value\_as | Saves a numerical or bool value as an arbitrarily-named temporary target to be referenced later in the same effect | ``` save_temporary_scope_value_as = {  name = <string>  value = x } ``` |  |
| scope\_type | Checks the type of the scope object |  |  |
| tag\_exists | Does the country tag exist; does NOT accept scopes | ``` tag_exists = FRA ``` | tag |
| time\_of\_year | Check if the current date is within the bounds | ``` time_of_year = {     min = 11.1 # default: beginning of year     max = 2.29 # default: end of year } Dates are formatted as "<month>.<day>" or just "<month>". The check includes the min and max dates. min can be larger than max, in this case we wrap around to the next year (i.e., February is between October and March). ``` |  |
| unique\_international\_organization\_type\_exists | Does an international organization of this type exist? |  | international\_organization\_type |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` |  |
| variable\_map\_size | Checks the size of a variable map | ``` variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` |  |
| world\_art\_quality | Checks the total art quality in the world |  | value |
| world\_culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the world | ``` world_culture_group_percentage = {  culture_group = <culture_group>  value <operator> <script_value> } ``` | value |
| world\_culture\_group\_population | Gets the absolute number of the population that follow a particular culture group in the world | ``` world_culture_group_population = {  culture_group = <culture_group>  value <operator> <script_value> } ``` | value |
| world\_culture\_percentage | Gets the percentage of the population that follow a particular culture in the world | ``` world_culture_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| world\_culture\_population | Gets the absolute number of the population that follow a particular culture in the world | ``` world_culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| world\_religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the world | ``` world_religion_group_percentage = {  religion_group = <religion_group>  value <operator> <script_value> } ``` | value |
| world\_religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the world | ``` world_religion_group_population = {  religion_group = <religion_group>  value <operator> <script_value> } ``` | value |
| world\_religion\_percentage | Gets the percentage of the population that follow a particular religion in the world | ``` world_religion_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | value |
| world\_religion\_population | Gets the absolute number of the population that follow a particular religion in the world | ``` world_religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | value |

### Building scope

List of building triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| building\_can\_be\_destroyed\_by | Check if the target country scope is capable of destroying the current building scope |  | country |
| building\_can\_be\_upgraded\_by | Checks if a building can be upgraded by the target country |  | country |
| building\_category | Checks if a building is linked to a certain category |  |  |
| building\_employed\_amount | What's the current effective amount of employed workers? |  | value |
| building\_employment\_size\_amount | What's the max workers amount? |  | value |
| building\_goods\_input | Check how much goods the scope building requires. |  | value |
| building\_index | Checks building index (order in which it was built) |  | value |
| building\_level | Check the level of this Building? |  | value |
| building\_levels\_under\_construction | Check the level of this Building? |  | value |
| building\_max\_level | Gets the max level for a building |  | value |
| building\_pop\_type | Checks if a building is linked to a certain pop type |  |  |
| building\_potential\_profit | Checks how much profit the building could make if at full worker capacity |  | value |
| building\_produced\_goods | Checks if a building produces a certain good |  | goods |
| building\_profit | Checks building profit |  | value |
| has\_tag | Check if that object has the specified tag. |  |  |
| is\_at\_max\_level | Checks if a building is working at full capacity |  | boolean |
| is\_building\_owned\_by | Checks if a building is owned by a country |  | country |
| is\_full\_capacity | Checks if a building is working at full capacity |  | boolean |
| is\_lacking\_goods | Checks if a building is lacking goods |  | boolean |
| is\_max\_level | Checks if a building is at maximum level |  | boolean |
| is\_not\_profitable | Checks if a building is not profitable or not has prfot at all |  | boolean |
| is\_opened | Checks if a building is opened |  | boolean |
| is\_profitable | Checks if a building is profitable |  | boolean |
| is\_special\_building | Checks if a building is special |  | boolean |
| is\_subsidized | Checks if a building is subsidized |  | boolean |

### Character scope

List of character triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| add\_static\_modifier\_utility | Checks the AI utility of adding a static modifier to the scoped object | ``` add_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | value |
| adm | The adm ability of the character |  | value |
| age\_in\_days | How old is a character??? |  | value |
| age\_in\_years | How old is a character??? |  | value |
| art\_progress | The amount of progress an artist has made on a work of art |  | value |
| artist\_skill | The artist skill of the character |  | value |
| artist\_type | Checks if a character is a specific type of artist |  |  |
| birth\_age | What Age was the character born in? E.g. age\_1\_traditions |  | age |
| can\_serve\_in\_cabinet\_of | Checks if the character can serve in the cabinet of the target country |  | country |
| character\_modifier\_strength | Does the scoped character have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` character_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "character_modifier_strength(<modifier key>)" ``` |  |
| character\_nickname | Check if the character has the same name key as their nickname |  |  |
| days\_as\_rebel | Check how many days the character has been a rebel. |  | value |
| days\_of\_service\_as\_admiral | Check how many days the character has served as an admiral. |  | value |
| days\_of\_service\_as\_general | Check how many days the character has served as a general. |  | value |
| days\_of\_service\_in\_cabinet | Check how many days the character has served in a cabinet. |  | value |
| dip | The dip ability of the character |  | value |
| education | Checks if a character has a specific education |  |  |
| fertility | The fertility of the character |  | value |
| gfx\_culture\_applicable | Checks if a culture gfx applies to the scope object |  |  |
| has\_art\_in\_progress | Checks if an artist is currently working on something |  | boolean |
| has\_available\_marriage\_slot | Has the character got a slot available for another marriage? (i.e. are they unmarried for non-polygamous people, or have they got less than the max number of spouses for polygamous people) |  | boolean |
| has\_cabinet\_action | is doing something in the cabinet |  | boolean |
| has\_character\_modifier | Does the scoped character have a given modifier | ``` has_character_modifier = name ``` |  |
| has\_child\_education | Does the scoped child have a given education | ``` has_child_education = education ``` |  |
| has\_child\_education\_selected | Does the scoped child have any given education | ``` has_child_education_selected = yes ``` | boolean |
| has\_dynasty | character is in a Dynasty |  | boolean |
| has\_estate | Checks if a character is of a specific Estate |  | estate\_type |
| has\_exploration | character/country is currently exploring |  | boolean |
| has\_exploration\_construction | character is currently preparing to explore |  | boolean |
| has\_nickname | Check if the character has any nick name set |  | boolean |
| has\_trait | Checks if a character has a specified trait |  |  |
| has\_trait\_category | Checks if any of the character's traits belongs to the specified category. |  |  |
| has\_unit | character is assigned to a unit |  | boolean |
| heir\_position | Character's position in line for its country's throne |  | value |
| heir\_score | Get the hypothetical heir score of the character for the target country, even if the character in question could not be an heir. |  | value |
| heir\_score\_home | Get the hypothetical heir score of the character in the country they currently reside in. |  | value |
| in\_cabinet | character is in cabinet |  | boolean |
| is\_admiral | character is an admiral |  | boolean |
| is\_admiral\_of | Character is admiral of the target country. |  | country |
| is\_adolescent | character is Adolescent |  | boolean |
| is\_adult | character is Adult |  | boolean |
| is\_alive | character is alive |  | boolean |
| is\_artist | character is Artist |  | boolean |
| is\_artist\_of | Character is artist of the target country. |  | country |
| is\_child | character is Child |  | boolean |
| is\_child\_of | Is the character a child of the target character? |  | character |
| is\_close\_relative | Is the character a close relative (Child, Parent, Sibling/Half-sibling, Nephew/Niece, Aunt/Uncle, Grandparent or Grandchild) of the target character? |  | character |
| is\_consort | character is Consort |  | boolean |
| is\_consort\_of | Character is consort of the target country. |  | country |
| is\_courtier | Character is a courtier and has no roles assigned |  | boolean |
| is\_dynastic\_descendant\_of | Is the character a dynastic descendant of the target dynasty? |  | dynasty |
| is\_dynasty\_head | character is DynastyHead |  | boolean |
| is\_eligible\_heir | Checks if the character can be an eligible heir for the specified country |  | country |
| is\_eligible\_heir\_baseline | Checks if the character can be an eligible heir for the specified country without checking the heir selection law |  | country |
| is\_eligible\_military\_leader | Checks if the character can be an eligible military leader for the specified country |  | country |
| is\_explorer | character is an explorer |  | boolean |
| is\_explorer\_of | Character is explorer of the target country. |  | country |
| is\_female | character is Female |  | boolean |
| is\_general | character is a general |  | boolean |
| is\_general\_of | Character is general of the target country. |  | country |
| is\_heir | character is Heir |  | boolean |
| is\_heir\_of | Character is heir of the target country. |  | country |
| is\_immortal | character is immortal |  | boolean |
| is\_infant | character is Infant |  | boolean |
| is\_loyal | character is loyal to their ruler |  | boolean |
| is\_married | character is Married |  | boolean |
| is\_matrilineal\_descendant\_of | Is the character a dynastic descendant of the target dynasty via a matrilineal line?? |  | dynasty |
| is\_mercenary\_leader | character is a mercenary leader |  | boolean |
| is\_mercenary\_of | Character is mercenary of the target country. |  | country |
| is\_parent\_of | Is the character a parent of the target character? |  | character |
| is\_patrilineal\_descendant\_of | Is the character a dynastic descendant of the target dynasty via a patrilineal line?? |  | dynasty |
| is\_pregnant | character is Pregnant |  | boolean |
| is\_regent | character is Regent |  | boolean |
| is\_regent\_of | Character is regent of the target country. |  | country |
| is\_religious\_figure | character is religious figure |  | boolean |
| is\_ruler | character is Ruler |  | boolean |
| is\_ruler\_of | Character is ruler of the target country. |  | country |
| is\_saint | Checks if a character is a saint in any religion |  | boolean |
| is\_saint\_of | Checks if a character is a saint in the specific religion |  | religion |
| is\_same\_gender | Is the character same gender as target character? |  | character |
| is\_sibling\_of | Is the character a sibling of the target character? |  | character |
| is\_spouse\_of | Is the character a spouse of the target character? |  | character |
| is\_valid\_for\_exploration | character is valid for an exploration |  | boolean |
| mil | The mil ability of the character |  | value |
| modifier\_utility | Checks the AI utility of a modifier |  | value |
| modifier\_utility\_include\_locations | Checks the AI utility of a modifier with location checks |  | value |
| num\_of\_children | The number of children of the character |  | value |
| num\_of\_spouses | The number of spouses of the character |  | value |
| num\_of\_traits | The number of traits the character has |  | value |
| num\_of\_traits\_of\_category | The number of traits of a specified category the character has. | ``` num_of_trait_by_category(<trait_category>)  or num_of_trait_by_category = {  type = <trait_category>  value <comparator> <integer> } ``` | value |
| religious\_figure\_type | Checks if a character is a specific type of religious figure |  |  |
| remove\_static\_modifier\_utility | Checks the AI utility of removing a static modifier from the scoped object | ``` remove_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | value |
| ruled\_country\_on\_or\_after | Checks if the character ruled the country on or after a given date? |  |  |
| total\_abilities | The total ability of the character |  | value |
| valid\_estate\_for\_heir\_selection | Checks if the character's estate is allowed for the target heir selection |  | heir\_selection |
| yearly\_salary | The yearly salary of the character |  | value |
| years\_as\_rebel | Check how many years the character has been a rebel. |  | value |
| years\_of\_service\_as\_admiral | Check how many years the character has served as an admiral. |  | value |
| years\_of\_service\_as\_general | Check how many years the character has served as a general. |  | value |
| years\_of\_service\_in\_cabinet | Check how many years the character has served in a cabinet. |  | value |

### Country scope

List of country triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| active\_religious\_focus | Checks if a country is researching a certain religious focus |  |  |
| add\_estate\_satisfaction\_utility | Utility of adding however much estate satisfaction to the country | ``` add_estate_satisfaction_utility(<estate>|<amount>)  or add_estate_satisfaction_utility = {  type = <estate type>  amount = <amount>  value <operator><threshold> } ``` | value |
| add\_static\_modifier\_utility | Checks the AI utility of adding a static modifier to the scoped object | ``` add_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | value |
| advance\_no\_longer\_activated | Checks if a country has researched a certain advance but it's not useable at the moment because of conditions |  |  |
| age\_preference | checks a countries age preference for current age |  |  |
| ai\_unlock\_unit\_score | Returns the score for AI to unlock a unit |  | value |
| allows\_female\_rulers | country allows female rulers |  | boolean |
| allows\_male\_rulers | country allows male rulers |  | boolean |
| annexation\_cost | How much does the target country cost for the current country to annex? | ``` annexation_cost = {  target = <target country>  value = <script_value> }  or annexation_cost(<target country>) ``` | value |
| antagonism | is the country's antagonism towards the target greater or equal than the value? | ``` antagonism = {  target = X  value <operator> Y  or  value = { min max } } ``` | value |
| army\_maintenance | What is the xx position (0-1) the country has? |  | value |
| army\_size | Checks if a country has a certain army size |  | value |
| army\_size\_percentage | Checks if a country has a certain percentage of regiments compared to expected size |  | value |
| army\_tradition | How much army tradition does the country/IO have? |  | value |
| army\_tradition\_percentage | How high the percentage of the current army tradition compared to the maximum does the country/IO have? |  | value |
| at\_war | country is at war |  | boolean |
| average\_control\_in\_home\_region | Checks the average control in the home region |  | value |
| average\_country\_literacy | Checks if a country has a certain average\_literacy |  | value |
| average\_estate\_satisfaction | How high is the average estate satisfaction in the country? The crown estate gets ignored here. |  | value |
| border\_distance\_to | gets distance between borders of two nations or a location and a nation. | ``` border_distance_to = {  country = x  value [operator] y }  or border_distance_to(country) ``` | value |
| building\_type\_is\_obsolete | Checks if the specified building type is obsolete for the scope country. |  | building\_type |
| can\_build\_building | Checks if the location/country can build the specified building. Location only checks local requirements, country checks the country scope requirements. |  | building\_type |
| can\_build\_unit\_type | Checks if the country can build the specified unit type. |  | unit\_type |
| can\_build\_units\_of\_category | Checks if the country can build units of the specified category. |  | sub\_unit\_category |
| can\_create\_casus\_belli\_of\_type\_on | Can the country see and create a cb of the supplied type on the target? | ``` can_create_casus_belli_of_type_on = {  type = <cb type key>  target = <country> } ``` |  |
| can\_declare\_no\_cb\_war\_on | Can the country declare a war without any casus belli on the target country? |  | country |
| can\_declare\_war\_on | Check if the current country could declare war on the target country |  | country |
| can\_do\_generic\_action | Is the country capable of doing the specified generic action right now? | ``` can_do_generic_action = {  generic_action = <generic action>  <parameters> } ``` |  |
| can\_find\_trade\_route | can the country find a trade route from market a to market b? | ``` can_find_trade_route = {  from = <market>  to = <market> } ``` |  |
| can\_form | Checks if the country can form the specified formable country. |  | formable\_country |
| can\_join\_defensive\_war\_with | Can the country join in a defensive war with the scope country? |  | country |
| can\_join\_international\_organization | Can we join the supplied international organization? |  | international\_organization |
| can\_join\_offensive\_war\_with | Can the country join in an offensive war with the scope country? |  | country |
| can\_lead\_international\_organization | Can the country lead the specified international organization? |  | international\_organization |
| can\_leave\_international\_organization | Can we leave the supplied international organization? |  | international\_organization |
| can\_make\_subject\_of | Can the country in scope become a subject of the target country ? Same checks as the peace treaty become-subject. | ``` can_make_subject_of = {  target = <country>  type = <subject_type>  [ignore_war_limitation = yes]  #use to ignore allowed_subjugation of the war } ``` |  |
| can\_pay\_price | Can the country pay the specified price? |  | price |
| can\_raise\_army\_levies | Checks if the country can raise army levies |  | boolean |
| can\_raise\_levies | Checks if the country can raise any kind of levies |  | boolean |
| can\_raise\_navy\_levies | Checks if the country can raise navy levies |  | boolean |
| can\_research\_advance | Checks if a country can research but has not yet researched a specific advance. |  |  |
| can\_rival | Could the current country scope rival the target country ignoring slots and range? |  | country |
| can\_see\_religious\_aspect | Checks if the input religious aspect is visible for the country in scope. |  | religious\_aspect |
| can\_see\_situation | Checks if the 'visible' trigger of the target situation is fulfilled for the country scope. |  | situation |
| can\_share\_maps\_with | Country can share maps with the supplied country? |  | country |
| can\_use\_agenda\_bribe | Checks if estate type is allowed in parliament |  |  |
| can\_vote\_in\_parliament | Can the countrs scope vote in the target international organization? |  | international\_organization |
| cancel\_exploration\_utility | Utility of an cancelling and exploration to the country | ``` cancel_exploration_utility(<area>)  or exploration_utility = {  area = <area>  value <operator><threshold> } ``` | value |
| cb\_creation\_progress\_against | Checks the progress of the casus belli creation against the target country in percentage. | ``` cb_creation_progress_against = {  target = <country scope>  value = <script_value> }  or cb_creation_progress_against(<country scope>) ``` | value |
| climate\_count | Returns the amount of owned locations with the specified climate. | ``` climate_count = {  type = <climate scope>  value <operator> <value> } or "climtae_count(<climate scope>)" ``` |  |
| climate\_percent | Returns the percentage of owned locations with the specified climate. | ``` climate_percent = {  type = <climate scope>  value <operator> <value> } or "climate_percent(<climate scope>)" ``` |  |
| colonial\_charter\_progress | Progress of a colonial charter | ``` colonial_charter_progress(<province definition>)  or colonial_charter_progress = {  province_definition = <province definition>  value <operator><threshold> } ``` | value |
| colonial\_charter\_utility | Utility of a colonial charter | ``` colonial_charter_utility(<province definition>|<source province>)  or colonial_charter_utility = {  province_definition = <province definition>  source = <source province>  value <operator><threshold> } ``` | value |
| colonial\_maintenance | What is the xx position (0-1) the country has? |  | value |
| colonial\_range | The colonial range of the country |  | value |
| complacency | How much complacency does the country/IO have? |  | value |
| complacency\_percentage | How high the percentage of the current complacency compared to the maximum does the country/IO have? |  | value |
| conquer\_desire | Gets how much the AI wants to conquer the supplied country | ``` conquer_desire(<target>)  or conquer_desire = {  target = <country link>  value <operator> <amount> } ``` | value |
| conquistador\_utility | Utility of a conquistador | ``` conquistador_utility(<area>)  or conquistador_utility = {  area = <area>  value <operator><threshold> } ``` | value |
| controls | Does the country control a specific location? |  | location |
| country\_art\_quality | Checks the total art quality in a Country |  | value |
| country\_can\_join\_international\_organization | Can we add a country to the supplied international organization? |  | international\_organization |
| country\_combined\_special\_status\_power | Get the political power of the country within the target international organization with all of its special statuses combined. | ``` country_combined_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or country_combined_special_status_power(<IO>) ``` | value |
| country\_combined\_special\_status\_power\_fraction | Get the political power fraction of the country within the target international organization with all of its special statuses combined. | ``` country_combined_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or country_combined_special_status_power(<IO>) ``` | value |
| country\_economical\_base | Checks the total economical base of a country |  | value |
| country\_estate\_loan\_size | Checks the size of a loan given by the estates to a country |  | value |
| country\_has\_disease | Checks the presence of a disease in a country. | ``` country_has_disease = <disease> ``` | disease |
| country\_has\_disease\_outbreak | Checks the presence of a disease outbreak in a country. | ``` country_has_disease_outbreak = <disease> ``` | disease\_outbreak |
| country\_has\_estate | Checks if the country has the specific Estate |  | estate\_type |
| country\_highest\_rated\_special\_status\_power | Get the political power of the country within the target international organization of its highest prioritized special status. | ``` highest_rated_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or highest_rated_special_status_power(<IO>) ``` | value |
| country\_interaction\_acceptance | How high is the target country's AI value of accepting the country interaction done by the current country scope? Always return 0 if the target is a player | ``` country_interaction_acceptance = {  type = <country interaction>  target = <country>  value = <script_value> }  or country_interaction_acceptance(<country interaction>|<country>) ``` | value |
| country\_loan\_capacity | Checks how much more money a country can borrow |  | value |
| country\_modifier\_strength | Does the scoped country have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` country_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "country_modifier_strength(<modifier key>)" ``` |  |
| country\_rank\_level | level of the country rank of a country |  | value |
| country\_rank\_level\_on\_date | level of the country rank of a country on a particular date |  | value |
| country\_strength | Strength of a country, including their troop numbers as well as tax base and manpower |  | value |
| country\_tax\_base | Checks the total tax base of a country |  | value |
| country\_total\_army\_levy\_size | Gets the total number of army levies available to the country |  | value |
| country\_total\_navy\_levy\_size | Gets the total number of navy levies available to the country |  | value |
| country\_type | Checks what type a country is (location, pop, building, army, navy) |  |  |
| court\_maintenance | What is the xx position (0-1) the country has? |  | value |
| create\_market\_utility | Utility of creating a market | ``` create_market_utility(<location>)  or create_market_utility = {  location = <location>  value <operator><threshold> } ``` | value |
| cultural\_maintenance | What is the xx position (0-1) the country has? |  | value |
| cultural\_unity | Checks the fraction of the population sharing the country's primary culture |  | value |
| culture\_group\_percentage\_in\_country | The percentage of a specific culture group in the current country |  | value |
| culture\_group\_population\_in\_country | The number of pops of a specific culture group in the current country |  | value |
| culture\_percentage\_in\_country | The percentage of a specific culture in the current country |  | value |
| culture\_population\_in\_country | The number of pops of a specific culture in the current country |  | value |
| currency\_percentage\_towards\_limit | Gets currency progress towards specified limit |  | value |
| currency\_utility | Utility of an amount of currency to the country | ``` currency_utility(<currency>|<amount>)  or currency_utility = {  currency = <currency>  amount = <amount> } ``` | value |
| current\_mission\_task | Checks if the country has the specified mission task in progress. |  | mission\_task |
| current\_ruler\_term\_years | Checks the current ruler term length in years. |  | value |
| defensive\_alliance\_strength | Strength of a defensive alliance, including the nation with all countries giving defensive support and those that can be called in for defensive wars |  | value |
| dependency\_length\_days | returns the number of days a country has been in a dependency (overlord/subject) relationship with the target country. | ``` dependency_length_days = {  target = <country>  value <comparator> <script_value> } ``` | value |
| destroy\_market\_utility | Utility of destroying a market | ``` destroy_market_utility(<location>)  or destroy_market_utility = {  location = <location>  value <operator><threshold> } ``` | value |
| devotion | How much devotion does the country/IO have? |  | value |
| devotion\_percentage | How high the percentage of the current devotion compared to the maximum does the country/IO have? |  | value |
| diplomatic\_capacity\_of\_new\_relation | Diplomatic capacity that will be used if the country obtains this diplomatic relation |  | value |
| diplomatic\_capacity\_without\_maintenance | Diplomatic capacity that country would have without paying anything for maintenance |  | value |
| diplomatic\_maintenance | What is the xx position (0-1) the country has? |  | value |
| diplomatic\_range | Is the target country within diplomatic range? |  | value |
| discount\_needed\_for\_law\_change | Checks how much more discount % is needed for Ai to change a law |  | value |
| disease\_country\_deaths | Checks the number of deaths from a disease in a country. | ``` disease_country_deaths(<disease>) disease_country_deaths = {  target = <disease>  value <comparator> <real> } ``` | value |
| disease\_outbreak\_country\_deaths | Checks the number of deaths from an outbreak in a country. | ``` disease_outbreak_country_deaths(<disease_outbreak>) disease_outbreak_country_deaths = {  disease_outbreak = <disease_outbreak>  value <comparator> <real> } ``` | value |
| does\_estate\_want\_other\_policy | Checks if a country has at least one law for which the input estate want another policy |  |  |
| doom | How much doom does the country/IO have? |  | value |
| doom\_percentage | How high the percentage of the current doom compared to the maximum does the country/IO have? |  | value |
| dynastic\_power | Returns the dynastic power of the scope dynasty or country. For countries, check ruler dynasty or heir dynasty if in regency. | ``` dynastic_power = {  international_organization = <IO>  value <operator> <script_value> }  or dynastic_power(<IO>) ``` | value |
| employment\_system\_desire | returns how much the country wants the target employment system. | ``` employment_system_desire = {  target = <employment system>  value <comparator> <script_value> } ``` | value |
| estate\_loan\_interest | Checks the interest of a loan |  | value |
| estate\_max\_tax | the current max-tax of an estate in a country | ``` estate_max_tax(<estate_type link>)  or estate_max_tax = {  estate_type = <estate_type link>  value <operator> <amount> } ``` | value |
| estate\_opinion | the current opinion that an estate in a country has of another country | ``` estate_opinion(<estate_type link>|<country>)  or estate_opinion = {  estate_type = <estate_type link>  target = country  value <operator> <amount> } ``` | value |
| estate\_satisfaction | the current satisfaction of an estate in a country | ``` estate_satisfaction(<estate_type link>)  or estate_satisfaction = {  estate_type = <estate_type link>  value <operator> <amount> } ``` | value |
| estate\_type\_allowed\_in\_cabinet | Checks if estate type is allowed in cabinet |  |  |
| estate\_type\_allowed\_in\_command | Checks if estate type is allowed in command of a unit |  |  |
| estate\_type\_allowed\_in\_parliament | Checks if estate type is allowed in parliament |  |  |
| expected\_army\_size | Checks if a country has a certain expected army size |  | value |
| expected\_navy\_size | Checks if a country expects to have a certain amount of ships |  | value |
| exploration\_maintenance | What is the xx position (0-1) the country has? |  | value |
| exploration\_utility | Utility of an exploration to the country | ``` exploration_utility(<area>|<character>)  or exploration_utility = {  area = <area>  character = <character>  value <operator><threshold> } ``` | value |
| favors | How much favors does the country have in the target? | ``` favors = {  target = X  value <operator> Y  or  value = { min max } } ``` | value |
| favors\_needed\_to\_annul\_relations\_with | Gets the number of favours needed to annul relations with the target country diplomatically | ``` "favors_needed_to_annul_relations_with(<target>)" or favors_needed_to_annul_relations_with = {  target = <country link>  value <operator> <amount> } ``` | value |
| food\_maintenance | What is the xx position (0-1) the country has? |  | value |
| fort\_maintenance | What is the xx position (0-1) the country has? |  | value |
| get\_antagonism | how much of an antagonism type does the country have towards another country? |  | value |
| get\_opinion | how much of an opinion type does the country have towards another country? |  | value |
| get\_trust | how much of a trust type does the country have towards another country? |  | value |
| gfx\_culture\_applicable | Checks if a culture gfx applies to the scope object |  |  |
| gives\_fleet\_basing\_rights\_to | Does the scope country give fleet basing rights to the specified country? |  | country |
| gives\_food\_access\_to | Does the scope country give food access to the specified country? |  | country |
| gives\_isolation\_exemption\_to | Does the scope country give a trade isolation exemption to specified country? |  | country |
| gives\_military\_access\_to | Does the scope country give military access to the specified country? |  | country |
| giving\_scripted\_relation | Checks for giving scripted relation. | ``` giving_scripted_relation = {  target = country  type = <scripted type> } ``` |  |
| giving\_scripted\_relation\_of\_type | Checks if that scripted relation is given by the country scope to any other country. |  | relation\_type |
| gold | How much gold does the country/IO have? |  | value |
| gold\_percentage | How high the percentage of the current gold compared to the maximum does the country/IO have? |  | value |
| government\_power | How much government power does the country/IO have? |  | value |
| government\_power\_percentage | How high the percentage of the current government power compared to the maximum does the country/IO have? |  | value |
| great\_power\_ranking | Country's position in the list of great powers |  | value |
| great\_power\_score | Checks if a country has a certain Great Power Score |  | value |
| had\_disaster\_for\_years | Check if the country scope had the specified disaster type for a specific amount of years. | ``` had_disaster_for_years = {  disaster_type = <disaster type>  years = <years> }  or had_disaster_for_years(<disaster type>) ``` | value |
| harmony | How much harmony does the country/IO have? |  | value |
| harmony\_percentage | How high the percentage of the current harmony compared to the maximum does the country/IO have? |  | value |
| has\_accepted\_culture | Check if a country has a culture as an accepted culture |  | culture |
| has\_advance | Checks if a country has a certain advance |  |  |
| has\_advance\_available | Checks if a country has a certain advance available to research. Returns true if the advance has been researched already. |  |  |
| has\_advance\_for\_employment\_system | Does the country have the necessary advance to be able to adopt the supplied employment system? |  | employment\_system |
| has\_advance\_for\_succession\_law | Does the country have the necessary advance to be able to adopt the supplied succession law? |  | heir\_selection |
| has\_antagonism | does the country have an antagonism type towards another country? |  |  |
| has\_any\_active\_disaster | country has at least an active disaster |  | boolean |
| has\_any\_mission\_active | Checks if the country has the specified mission as its currently active mission. |  | boolean |
| has\_any\_possible\_disaster | Country has at least one possible disaster about to strike |  | boolean |
| has\_avatar | checks if a country has a particular avatar |  | avatar |
| has\_been\_influenced\_by\_parliament\_agenda | Checks if the country scope has already been influenced by an accepted parliament agenda in the target international organization's parliament. |  | international\_organization |
| has\_blocked\_treaties | Is the country blocked from doing treaties with country? |  | country |
| has\_casus\_belli\_of\_type\_on | Does the country have a cb of the supplied type on the target? | ``` has_casus_belli_of_type_on = {  type = <cb type key>  target = <country> } ``` |  |
| has\_casus\_belli\_on | Does the country have a cb on the target? |  | country |
| has\_claim\_on\_province | Does the country have a casus belli targetting the specified province? |  | province |
| has\_colonial\_charter\_in | Does the country have a colonial charter in the target province\_definition? |  | province\_definition |
| has\_colonial\_charters | Does the country have colonial charters? |  | boolean |
| has\_colonial\_claim | country has a claim on a province definition? | ``` has_colonial_claim = <province definition> ``` | province\_definition |
| has\_completed\_religious\_focus | Checks if a country has completed a certain religious focus |  |  |
| has\_consort | country has a Consort |  | boolean |
| has\_cooldown | Does a country have a particular cooldown active |  |  |
| has\_core | Does the country has a core of a specific location? |  | location |
| has\_countries\_with\_antagonism | Country has antagonism towards them from other countries |  | boolean |
| has\_countries\_with\_coalition\_grade\_antagonism | Country has antagonism towards them from other countries to the point where they could form a coalition against them |  | boolean |
| has\_countries\_with\_near\_coalition\_grade\_antagonism | Country has antagonism towards them from other countries to the point where they are thinking of forming a coalition against them |  | boolean |
| has\_countries\_with\_timed\_antagonism | Country has temporary antagonism towards them from other countries |  | boolean |
| has\_country\_modifier | Does the scoped country have a given modifier | ``` has_country_modifier = name ``` |  |
| has\_diplomacy\_with | Does the country have a certain type of diplomatic relation with another. | ``` has_diplomacy_with = {  country = <country>  type = <type> } ``` |  |
| has\_discovered | Has the country discovered a specific location? |  | location |
| has\_discovered\_area | Has the country fully discovered the area? |  | area |
| has\_doom | country has doom mechanics |  | boolean |
| has\_embraced\_institution | Checks if a country has embraced an institution |  | institution |
| has\_employment\_system | Does the country has the supplied employment system? |  | employment\_system |
| has\_estate\_privilege | Checks if a country has a certain estate privilege |  | estate\_privilege |
| has\_exploration | character/country is currently exploring |  | boolean |
| has\_gifted\_gold\_to | Has the country an active gold gift cooldown with the target country? |  | country |
| has\_heir | country has a Heir |  | boolean |
| has\_highest\_rated\_special\_status\_in\_international\_organization\_of\_type | Does the country have the specified special status as its highest ranking? |  |  |
| has\_historical\_rival | Does the scope country have the specified country as an historical rival? |  | country |
| has\_historical\_rivals | Does the scope country have historical rivals? |  | boolean |
| has\_insulted | Has the country an active insult cooldown with the target country? |  | country |
| has\_invited\_religious\_figure | country has invited religious figures to work with them |  | boolean |
| has\_law | Checks if a country has a certain law enabled | ``` has_law = <law_key> ``` | law |
| has\_limited\_diplomacy | Check if the country has limited diplomacy |  | boolean |
| has\_markets | country has market centers |  | boolean |
| has\_mission\_task | Checks if the country has the specified mission task visible in its current mission. |  | mission\_task |
| has\_mutual\_scripted\_relation | Checks for a mutual scripted relation. | ``` has_mutual_scripted_relation = {  target = country  type = <scripted type> } ``` |  |
| has\_mutual\_scripted\_relation\_of\_type | Checks if that scripted relation exists between the country scope and any other country. |  | relation\_type |
| has\_ongoing\_parliament\_debate | Country / international organization has an active parliament debate |  | boolean |
| has\_opinion | does the country have an opinion type towards another country? |  |  |
| has\_or\_had\_tag | Is the scoped country the specific historical tag or was ever it; does NOT accept scopes | ``` has_or_had_tag = GER ``` | tag |
| has\_origin\_in\_new\_world | Check if a goods has origin in the new world |  | boolean |
| has\_origin\_in\_old\_world | Check if a goods has origin in the old world |  | boolean |
| has\_parliament | Checks if the country / international organization has a parliament |  | boolean |
| has\_participated\_in\_parliament | Checks if the country scope has already participated in the target international organization's parliament. |  | international\_organization |
| has\_policy | Checks if a country has a certain policy for a then policy's law |  |  |
| has\_ports | country has ports? |  | boolean |
| has\_positive\_opinion | Does the country have a positive opinion? |  | country |
| has\_possible\_nomad\_targets | Does the country have any possible nearby places to migrate to? |  | province\_definition |
| has\_potential\_royal\_marriage | Could the country do a royal marriage with the specified country? |  | country |
| has\_presence\_in | country has a presence in the geography supplied? |  |  |
| has\_primary\_or\_accepted\_culture | Check if a country has a culture as a primary or an accepted culture |  | culture |
| has\_primary\_or\_accepted\_or\_tolerated\_culture | Check if a country has a culture as a primary or an accepted or a tolerated culture |  | culture |
| has\_raised\_army\_levies | Check if the country has raised army levies |  | boolean |
| has\_raised\_levies | Check if the country has raised levies |  | boolean |
| has\_raised\_navy\_levies | Check if the country has raised navy levies |  | boolean |
| has\_reform | Checks if a country has a specific reform |  | government\_reform |
| has\_regent | country has a regent |  | boolean |
| has\_regular\_elections | does the country have regular elections |  | boolean |
| has\_religious\_aspect | Checks if a country has a certain religious aspect |  | religious\_aspect |
| has\_royal\_marriage\_with | Does the country have a royal marriage with specified country? |  | country |
| has\_ruler | country has a ruler |  | boolean |
| has\_scripted\_relation | Checks if that scripted relation exists between these two countries. | ``` has_scripted_relation = {  target = country  type = <scripted type> } ``` |  |
| has\_scripted\_relation\_of\_type | Checks if that scripted relation exists for the country scope with any other country. |  | relation\_type |
| has\_societal\_value | Checks if the country has a specific societal value |  | societal\_value\_type |
| has\_sound\_tolls | country has sound tolls |  | boolean |
| has\_special\_status\_in\_international\_organization | Does the country have a special status in the supplied international organization? |  |  |
| has\_target\_casus\_belli\_on\_us | Does the target have a cb on the country? |  | country |
| has\_tolerated\_culture | Check if a country has a culture as an Tolerated culture |  | culture |
| has\_trade\_treaty\_with | Does the country have a trade agreement with a specified country? |  | country |
| has\_truce\_with | Is the country at truce with a specified country? |  | country |
| has\_trust | does the country have a trust type towards another country? |  |  |
| has\_unlocked\_any\_unit\_of\_category | Has the country unlocked any unit of the specified category? |  |  |
| has\_voted\_for\_issue\_in\_parliament | Checks if the country scope has voted for the issue in the target international organization's parliament. Returns false if they have voted against it or have not voted at all. |  | international\_organization |
| heathen\_population\_fraction | Checks the fraction of the population having a different religious group than the country |  | value |
| heir\_score\_country | Get the hypothetical heir score of the target character for the current country, even if the character in question could not be an heir. |  | value |
| heretic\_population\_fraction | Checks the fraction of the population having a different religion in the same group as the country |  | value |
| higher\_temporary\_taxes\_needed | Checks how much more max tax a country wants |  | value |
| honor | How much honor does the country/IO have? |  | value |
| honor\_percentage | How high the percentage of the current honor compared to the maximum does the country/IO have? |  | value |
| horde\_unity | How much horde\_unity does the country/IO have? |  | value |
| horde\_unity\_percentage | How high the percentage of the current horde\_unity compared to the maximum does the country/IO have? |  | value |
| in\_civil\_war | country is in civil war |  | boolean |
| in\_marriage\_union\_with | Is the country in a marriage union with specified country? |  | country |
| in\_union\_with | Is the country in a union with specified country? |  | country |
| in\_war\_of\_casus\_belli | Is the country in any war with the specified casus belli? |  | casus\_belli |
| inflation | How much inflation does the country/IO have? |  | value |
| inflation\_percentage | How high the percentage of the current inflation compared to the maximum does the country/IO have? |  | value |
| is\_a\_threat\_for\_us | Is the country views the target country as a threat? |  | country |
| is\_active\_parliament | country has an active parliament called |  | boolean |
| is\_ai | country is run by AI |  | boolean |
| is\_annexing | Is the country annexing the specified country? |  | country |
| is\_annexing\_any\_country | Is the country annexing any other country? |  | boolean |
| is\_at\_war\_with | Is the country at war with a specified country? |  | country |
| is\_auto\_raise\_taxrate\_for\_all\_estates | Check if all estates have auto raise taxrates? |  | boolean |
| is\_being\_annexed | Is the country being annexed by any other country? |  | boolean |
| is\_being\_annexed\_by | Is the country getting annexed by the specified country? |  | country |
| is\_colonial\_overlord | Country is an overlord of a colonial subject |  | boolean |
| is\_colonial\_subject | Country is a type of colonial subject |  | boolean |
| is\_colonial\_top\_overlord | Country is the top overlord of a colonial subject |  | boolean |
| is\_creating\_cb\_against | Checks if the current country scope is creating a casus belli against the target country. |  | country |
| is\_creating\_cb\_of\_type | Checks if the current country scope is creating a casus belli of the specified type against the target country. | ``` is_creating_cb_of_type = {  target = <country scope>  type = <casus belli type> } ``` |  |
| is\_discovered\_by | Is the scope location/country discovered by the target country? |  | country |
| is\_disloyal\_subject | Is the country a disloyal subject? |  | boolean |
| is\_dominant\_country\_of | Check if a country is the dominant country of a culture |  | culture |
| is\_during\_bankruptcy | country is having a bankruptcy |  | boolean |
| is\_elector\_in\_international\_organization | Checks if the country is an elector in the target international organization. |  | international\_organization |
| is\_embargoed\_by | Is the country embargoed by the specified country? |  | country |
| is\_embargoing | Is the country embargoing the specified country? |  | country |
| is\_enemy\_of | Is the country a enemy of a specified country? |  | country |
| is\_enemy\_of\_international\_organization | Is the country an enemy of the supplied international organization? |  | international\_organization |
| is\_fighting\_war\_together\_with | Is the country fighting a war together with a specified country? |  | country |
| is\_friendly\_with | Is the country friendly with specified country? |  | country |
| is\_great\_power | country is a great power |  | boolean |
| is\_hegemon | country is a Hegemon |  | boolean |
| is\_hegemon\_type | Is the country a Hegemon of the specified type? |  | hegemony |
| is\_historical\_rival\_of | Is the country an historical rival of a specified country? |  | country |
| is\_hostile\_with | Is the country hostile of specified country? |  | country |
| is\_human | country is controlled by a human |  | boolean |
| is\_in\_any\_same\_international\_organization | Is the country in any same international organization as the target country? |  | country |
| is\_in\_losing\_war | Country is currently in a war with less than 0 war score. |  | boolean |
| is\_in\_same\_international\_organization | Is the country in the same international organization as the target country? | ``` is_in_same_international_organization = {  international_organization = <IO scope>  target = <country> } ``` |  |
| is\_integrating | Is the country integrating any of its owned locations in province? |  | province\_definition |
| is\_known\_by\_country | Checks if the country is known by the specified country |  | country |
| is\_leader\_of\_international\_organization | Is the country the Leader of the specified international organization? |  | international\_organization |
| is\_member\_of\_international\_organization | Is the country in the supplied international organization? |  | international\_organization |
| is\_member\_of\_international\_organization\_of\_type | Is the country in an international organization of the specified type? | ``` is_member_of_international_organization_of_type = {  type = x  target = <country> } ``` |  |
| is\_neighbor\_of | Is the country or location a Neighbor to the specified country? |  | country |
| is\_neighbor\_of\_international\_organization | Is the country or location a neighbor to the specified international organization? |  | international\_organization |
| is\_overlord | country is an overlord |  | boolean |
| is\_player\_playstyle | Player has only one playstyle and is equal to MILITARY, ADMINISTRATIVE or DIPLOMATIC |  |  |
| is\_real\_country | Checks if a country is a real country as opposed to rebels, mercenaries, pirates |  | boolean |
| is\_rebel\_country | Checks if a country is a rebel country created from a civil war |  | boolean |
| is\_regency\_extended | country has an extended regency? |  | boolean |
| is\_religious\_aspect\_enabled | Checks if the input religious aspect is enabled for the country in scope. Meaning if the allow trigger in religious aspect DB object returns true. | ``` c:ARA = {  is_religious_aspect_enabled = religious_aspect:gomarism } ``` | religious\_aspect |
| is\_revolution\_target | Check if the country is the target of the revolution |  | boolean |
| is\_revolutionary | Check if the country is revolutionary |  | boolean |
| is\_rival\_of | Is the country a rival of a specified country? |  | country |
| is\_subject | country is a subject |  | boolean |
| is\_subject\_of | Is the country a subject to the specified country? |  | country |
| is\_subject\_or\_below\_of | Is the country a subject of (or subject of a subject of) the specified country? |  | country |
| is\_subject\_type | Is the country a subject of the specified type? |  |  |
| is\_target\_of\_international\_organization\_of\_type | Is the country a target of an international organization of the specified type? |  |  |
| is\_threat\_to | Current country scope is a threat and have a casus belli to the target country |  | country |
| is\_valid\_colonial\_charter | is this colonial charter valid, or blocked by a recognised claim? |  | province\_definition |
| is\_war\_leader\_of | Checks if the current country scope is a war leader of the target war |  | war |
| join\_organization\_ai\_desire | Returns the AI desire to join the specified target international organization. | ``` join_organization_ai_desire = {  international_organization = <IO scope>  value = <script_value> }  or join_organization_ai_desire(<IO scope>) ``` | value |
| karma | How much karma does the country/IO have? |  | value |
| karma\_percentage | How high the percentage of the current karma compared to the maximum does the country/IO have? |  | value |
| knows\_about\_institution | Checks if a country has knows about an institution |  | institution |
| knows\_country | Checks if the country knows of the specified country |  | country |
| language\_percentage\_in\_country | The percentage of speakers of a specific language in the current country |  | value |
| legitimacy | How much legitimacy does the country/IO have? |  | value |
| legitimacy\_percentage | How high the percentage of the current legitimacy compared to the maximum does the country/IO have? |  | value |
| liberty\_desire | Checks the amount of liberty desire a country has |  | value |
| location\_progress\_for\_formable | Checks the progress of the country scope to form the specified formable in percentage. | ``` location_progress_for_formable = {  formable_country = <formable scope>  value = <script_value> }  or location_progress_for_formable(<formable scope>) ``` | value |
| long\_term\_trigger\_currency\_utility | Checks the AI utility of adding an amount of a certain trigger every month to the scoped object | ``` long_term_trigger_currency_utility = {  trigger = <trigger>  size = <size>  target = <optional target>  value >= <script_value> } ``` | value |
| lowest\_war\_score | Checks the lowest war score of ongoing wars |  | value |
| manpower | How much Manpower does the country/IO have? |  | value |
| manpower\_percentage | Checks the percentage of manpower a country has compared to its maximum |  | value |
| max\_manpower | Checks if a country has a certain Max manpower |  | value |
| max\_sailors | Checks if a country has a certain Max Sailors |  | value |
| military\_strength | Checks the total military strength (max manpower, army size, levy power) of a country |  | value |
| military\_tech\_level | Checks if a country has a certain level of military tech |  | value |
| mission\_completed | Checks if the country has completed the mission. |  | mission |
| mission\_task\_bypassed | Checks if the country has bypassed the mission task. |  | mission\_task |
| mission\_task\_completed | Checks if the country has completed the mission task. |  | mission\_task |
| modifier\_utility | Checks the AI utility of a modifier |  | value |
| modifier\_utility\_include\_locations | Checks the AI utility of a modifier with location checks |  | value |
| monthly\_balance | Checks the monthly balance of a country |  | value |
| monthly\_income\_total | Checks if a country has a certain income |  | value |
| monthly\_income\_trade\_and\_tax | Checks if a country has a certain trade and tax income |  | value |
| monthly\_manpower | Checks if a country has a certain monthly manpower |  | value |
| monthly\_sailors | Checks if a country has a certain monthly Sailors |  | value |
| monthly\_trade\_income | Checks if a country has a certain income from trade |  | value |
| months\_since\_last\_parliament\_called | Checks how many months its been since the country / international organization last called a parliament |  | value |
| months\_since\_peace | Checks how many months its been since a country was at peace |  | value |
| months\_since\_war | Checks how many months its been since a country was at War |  | value |
| naval\_range | The naval range of the country |  | value |
| navy\_maintenance | What is the xx position (0-1) the country has? |  | value |
| navy\_size | Checks if a country has a certain amount of ships |  | value |
| navy\_size\_percentage | Checks if a country has a certain percentage of ships compared to expected size |  | value |
| navy\_tradition | How much navy tradition does the country/IO have? |  | value |
| navy\_tradition\_percentage | How high the percentage of the current navy tradition compared to the maximum does the country/IO have? |  | value |
| needs\_opinion\_with | Determines if a country needs X more relations with another nation. | ``` needs_opinion_with = {  target = <country>  value <comparator> <script_value> } ``` | value |
| num\_adult\_capable\_characters | Checks if a country has a certain amount of adult characters who can do cabinet or military stuff |  | value |
| num\_artists | Checks if a country has a certain amount of artists |  | value |
| num\_avatars | Checks if a country has a certain amount of avatars |  | value |
| num\_cardinals | Checks if a country has a certain amount of Cardinals |  | value |
| num\_characters | Checks if a country has a certain amount of living characters |  | value |
| num\_colonial\_charters | Checks if a country has a certain amount of colonial charters |  | value |
| num\_embraced\_institutions | Checks if a country has a certain number of institutions embraced |  | value |
| num\_explorations | Checks if a country has a certain amount of Explorations |  | value |
| num\_forts | Checks if a country has a certain amount of forts |  | value |
| num\_known\_institutions | Checks if a country knows a certain number of institutions |  | value |
| num\_loans | Checks if a country has a certain amount of loans |  | value |
| num\_locations | Checks if a country has a certain amount of owned locations |  | value |
| num\_locations\_owned\_or\_owned\_by\_subjects | Checks if a country or its direct subjects has a certain amount of owned locations |  | value |
| num\_locations\_owned\_or\_owned\_by\_subjects\_or\_below | Checks if a country, its subjects or its subjects' subjects has a certain amount of owned locations |  | value |
| num\_of\_active\_parliament\_agendas | Check how many parliament agendas are currently available to the country or international organization. |  | value |
| num\_of\_advances\_researched | Checks how many advances a country currently has researched. |  | value |
| num\_of\_diplomats | Checks if a country has an amount of diplomats |  | value |
| num\_of\_locations\_owned\_by\_io | Checks if a country has an amount of locations owned by certain IO |  | value |
| num\_of\_markets\_with\_merchants | Checks if a country has merchants in the specified amount of markets. |  | value |
| num\_of\_non\_rural | Checks if a country has an amount of towns and cities |  | value |
| num\_of\_non\_rural\_ports | Checks if a country has an amount of non-rural ports |  | value |
| num\_of\_ports | Checks if a country has an amount of ports |  | value |
| num\_of\_religious\_aspects | Gets the total amount of church aspects in the country |  | value |
| num\_of\_trades | Checks if a country has an amount of trades active |  | value |
| num\_open\_reform\_slots | Checks if a country has a certain amount of open government reform slots |  | value |
| num\_possible\_privileges | Checks if the scope country or estate has a certain amount of privileges |  | value |
| num\_possible\_rivals | Checks if a country has a certain amount of possible rivals |  | value |
| num\_privileges | Checks if the scope country or estate has a certain amount of privileges |  | value |
| num\_provinces | Checks if a country has a certain amount of provinces |  | value |
| num\_rebels | Checks if a country has a certain amount of Rebels |  | value |
| num\_reforms | Checks if a country has a certain amount of government reforms |  | value |
| num\_regiments | Checks if a country has a certain amount of regiments |  | value |
| num\_relations\_above\_limit | Amount above relations limit |  | value |
| num\_rivals | Checks if a country has a certain amount of rivals |  | value |
| num\_subjects | Checks the total number of subjects of a country |  | value |
| num\_works\_of\_art | Checks if a country has a certain number of works of art |  | value |
| offensive\_alliance\_strength | Strength of an offensive alliance, including the nation with all countries giving offensive support and those that can be called in for offensive wars |  | value |
| offer\_relation\_acceptance | How high is the target country's AI value of accepting the scripted relation offered by the current country scope? | ``` offer_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "offer_relation_acceptance(<scripted relation type>|<country>)" ``` | value |
| opinion | is the country's opinion of the target greater or equal than the value? | ``` opinion = {  target = X  value <operator> Y  or  value = { min max } } ``` | value |
| opinion\_difference\_between | Get the opinion of the current country scope against the first target country and subtract it with the opinion the current scope has of the second country. | ``` opinion_difference_between = {  first = <country>  second = <country>  value = <script_value> }  or opinion_difference_between(<country>|<country>) ``` | value |
| own\_entire\_area | Does the country own all locations in area? |  | area |
| own\_entire\_province | Does the country own all locations in province? |  | province\_definition |
| owns | Does the country own a specific location? |  | location |
| owns\_any\_foreign\_buildings\_in | Does the country own any foreign buildings in the target country? |  | country |
| owns\_most\_foreign\_buildings\_in\_location | Does the country own the majority of the foreign buildings in the target location? |  | location |
| owns\_or\_has\_subject\_in | country has a presence in the geography supplied? |  |  |
| owns\_or\_non\_sovereign\_subject\_owns | Does the country or any of its direct non-sovereign subjects own a specific location? |  | location |
| parliament\_issue\_chance | The chance an issue will be selected |  | value |
| parliament\_issue\_support | The current support in parliament for an issue |  | value |
| parliament\_issue\_will\_pass | Check if the parliament issue of the country / international in debate will pass |  | boolean |
| parliament\_type\_is\_enabled\_in | Is a parliament type enabled in the scope country? |  | parliament\_type |
| parliament\_type\_is\_locked\_in | Is a parliament type locked in the scope country? |  | parliament\_type |
| parliament\_type\_utility | Utility of a parliament type that can subtract the utility of current parliament modifiers | ``` parliament_type_utility(<type>|<bool>)  or parliament_type_utility = {  parliament_type = <type>  subtract_current = <bool>  value <operator><threshold> } ``` | value |
| parliament\_type\_visible\_in | Can we see a parliament type in the scope country? |  | parliament\_type |
| payment\_contribution | Gets how much the country has to pay for the specified IO and payment type. | ``` payment_contribution = {  international_organization = <>  payment = <> } ``` | value |
| payment\_maintenance | gets the payment maintenance level for a country in an international organization. | ``` payment_maintenance = {  international_organization = <>  payment = <> } ``` | value |
| peace\_treaty\_antagonism | Get how much antagonism the specified peace treaty type would cause for the current country scope against the target country. | ``` peace_treaty_antagonism = {  peace_treaty = <scripted peace treaty scope>  loser = <losing country scope>  [target = <thing>]  value <comparator> <real> } or "peace_treaty_antagonism(<peace treaty scope>|<loser>|<thing>)" ``` |  |
| peace\_treaty\_war\_score\_cost | Get how much war score the specified peace treaty type would cost for the current country scope against the target country. | ``` peace_treaty_war_score_cost = {  peace_treaty = <scripted peace treaty scope>  loser = <losing country scope>  [target = <thing>]  value <comparator> <real> } or "peace_treaty_war_score_cost(<peace treaty scope>|<loser>|<thing>)" ``` |  |
| player\_proficiency | Is player proficiency equal to NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  |  |
| player\_proficiency\_greater | Is player proficiency greater than NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  |  |
| player\_proficiency\_greater\_eq | Is player proficiency greater or equal to NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  |  |
| player\_proficiency\_less | Is player proficiency less than NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  |  |
| player\_proficiency\_less\_eq | Is player proficiency less or equal to NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  |  |
| pop\_type\_percentage\_in\_country | The percentage of the specific pop type in the current country |  | value |
| pop\_type\_population\_in\_country | The number of the specific pop type in the current country |  | value |
| possible\_military\_leaders | Checks if a country has a certain amount of possible military leaders |  | value |
| power\_projection | Checks if a country has a power projection |  | value |
| prestige | How much prestige does the country/IO have? |  | value |
| prestige\_percentage | How high the percentage of the current prestige compared to the maximum does the country/IO have? |  | value |
| prev\_antagonism\_towards\_this | Gets the previous scope country's antagonism towards the current scope country |  | value |
| prev\_opinion\_of\_this | Gets the previous scope country's opinion of the current scope country |  | value |
| prev\_trust\_of\_this | Gets the previous scope country's trust of the current scope country |  | value |
| proper\_culture\_nobles | Checks the proportion of your population that is primary or accepted culture nobles |  | value |
| purity | How much purity does the country/IO have? |  | value |
| purity\_percentage | How high the percentage of the current purity compared to the maximum does the country/IO have? |  | value |
| receives\_fleet\_basing\_rights\_from | Does the scope country receive fleet basing rights from the specified country? |  | country |
| receives\_food\_access\_from | Does the scope country receive food access from the specified country? |  | country |
| receives\_isolation\_exemption\_from | Does the scope country receive a trade isolation exemption from the specified country? |  | country |
| receives\_military\_access\_from | Does the scope country receive military access from the specified country? |  | country |
| receiving\_scripted\_relation | Checks for receiving scripted relation. | ``` receiving_scripted_relation = {  target = country  type = <scripted type> } ``` |  |
| receiving\_scripted\_relation\_of\_type | Checks if that scripted relation is received by the country scope from any other country. |  | relation\_type |
| regular\_army\_size | Checks if a country has a certain army size of regulars (maximum strength) |  | value |
| regular\_navy\_size | Checks if a country has a certain navy size of regular ships |  | value |
| relative\_defensive\_alliance\_strength | Gets the relative strength of the scope country including defensive alliances to the supplied one | ``` relative_defensive_alliance_strength(<target>) <operator> <script_value> OR relative_defensive_alliance_strength = {  target = <country scope>  value <operator> <script_value> } ``` | value |
| relative\_military\_strength | calculates the relative military strength of the scope country to the target. | ``` relative_military_strength = {  target = <country scope>  value <operator> <script_value>  or  value = { min max } } ``` | value |
| relative\_strength | Gets the relative strength of the scope country to the supplied one | ``` relative_strength(<target>)  or relative_strength = {  target = <country link>  value <operator> <amount> } ``` | value |
| relevant\_countries | Do we have any diplomatic action with the target country? |  | country |
| religion\_group\_percentage\_in\_country | The percentage of a specific religion group in the current country |  | value |
| religion\_percentage\_in\_country | The percentage of a specific religion in the current country |  | value |
| religion\_population\_in\_country | The number of pops with a specific religion in the current country |  | value |
| religious\_influence | How much religious influence does the country/IO have? |  | value |
| religious\_influence\_percentage | How high the percentage of the current religious influence compared to the maximum does the country/IO have? |  | value |
| religious\_unity | Checks the fraction of the population sharing the country's religion |  | value |
| relocate\_market\_utility | Utility of relocating a market | ``` relocate_market_utility(<location>,<location>)  or relocate_market_utility = {  location = <location>  new_location = <location>  value <operator><threshold> } ``` | value |
| remaining\_parliament\_days | Checks how many days are left in the parliament of the country / international organization before it concludes. Returns -1 when there is no parliament active. |  | value |
| remove\_static\_modifier\_utility | Checks the AI utility of removing a static modifier from the scoped object | ``` remove_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | value |
| republican\_tradition | How much republican\_tradition does the country/IO have? |  | value |
| republican\_tradition\_percentage | How high the percentage of the current republican\_tradition compared to the maximum does the country/IO have? |  | value |
| request\_relation\_acceptance | How high is the target country's AI value of accepting the scripted relation requested by the current country scope? | ``` request_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "request_relation_acceptance(<scripted relation type>|<country>)" ``` |  |
| research\_progress | Checks the progress of the current research in the country |  | value |
| resolution\_opinion | Gets the current scope country's opinion of a resolution. | ``` resolution_opinion(<IO>|<resolution>|<vote>) <operator> <script_value> OR resolution_opinion = {  international_organization = <international organization>  resolution = <resolution>  vote = <vote scope>  value <operator> <script_value> } ``` | value |
| reverse\_country\_interaction\_acceptance | How high is the current country's AI value of accepting the country interaction done by the specified country scope? Always return 0 if the scope is a player | ``` reverse_country_interaction_acceptance = {  type = <country interaction>  target = <country>  value = <script_value> }  or reverse_country_interaction_acceptance(<country interaction>|<country>) ``` | value |
| reverse\_offer\_relation\_acceptance | How high is the current country's AI value of accepting the scripted relation offered by the specified country scope? | ``` reverse_offer_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "reverse_offer_relation_acceptance(<scripted relation type>|<country>)" ``` |  |
| reverse\_request\_relation\_acceptance | How high is the current country's AI value of accepting the scripted relation requested by the specified country scope? | ``` reverse_request_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "reverse_request_relation_acceptance(<scripted relation type>|<country>)" ``` |  |
| righteousness | How much righteousness does the country/IO have? |  | value |
| righteousness\_percentage | How high the percentage of the current righteousness compared to the maximum does the country/IO have? |  | value |
| rite\_power | How much rite power does the country/IO have? |  | value |
| rite\_power\_percentage | How high the percentage of the current rite power compared to the maximum does the country/IO have? |  | value |
| ruler\_reign | Checks if the ruler of a country has ruled for x years |  | value |
| ruler\_reign\_in\_days | Checks if the ruler or regent of a country has ruled for x days |  | value |
| ruler\_term\_start\_date | Gets the start date of the current ruler term |  | date |
| sailors | How much Sailors does the country/IO have? |  | value |
| sailors\_percentage | Checks the percentage of Sailors a country has compared to its maximum |  | value |
| self\_control | How much self control does the country/IO have? |  | value |
| self\_control\_percentage | How high the percentage of the current self control compared to the maximum does the country/IO have? |  | value |
| short\_term\_trigger\_currency\_utility | Checks the AI utility of adding an amount of a certain trigger to the scoped object | ``` short_term_trigger_currency_utility = {  trigger = <trigger>  size = <size>  target = <optional target>  value >= <script_value> } ``` | value |
| slider\_minting\_value | How much minting is going on (0..1) |  | value |
| societal\_value\_progress | Gets progress towards societal value |  | value |
| spy\_network | How much spy-network does the country have in the target? | ``` spy_network = {  target = X  value <operator> Y  or  value = { min max } } ``` | value |
| stability | How much Stability does the country/IO have? |  | value |
| stability\_percentage | How high the percentage of the current Stability compared to the maximum does the country/IO have? |  | value |
| state\_religion\_clergy | Checks the proportion of your population that is true faith clergy |  | value |
| subject\_loyalty | Checks a country's subject loyalty |  | value |
| subjects\_relative\_power | Compares to relative power of all subjects combined |  | value |
| supports\_rebel | Checks if a country supports the target rebel |  | rebels |
| tag | Is the scoped country the specific country tag; does NOT accept scopes | ``` tag = ENG ``` | tag |
| this\_antagonism\_towards\_prev | Gets the current scope country's antagonism towards the previous scope country |  | value |
| this\_opinion\_of\_prev | Gets the current scope country's opinion of the previous scope country |  | value |
| this\_trust\_of\_prev | Gets the current scope country's trust of the previous scope country |  | value |
| threat\_level\_to | Return the threat level the scope country has towards the target country scope. | ``` threat_level_to = {  country = <country scope>  value = <script_value> }  or threat_level_to(<country scope>) ``` | value |
| topography\_count | Returns the amount of owned locations with the specified topography. | ``` topography_count = {  type = <topography scope>  value <operator> <value> } or "topography_count(<topography scope>)" ``` |  |
| topography\_percent | Returns the percentage of owned locations with the specified topography. | ``` topography_percent = {  type = <topography scope>  value <operator> <value> } or "topography_percent(<topography scope>)" ``` |  |
| total\_accepted\_culture\_population | Checks if a country has an acceputed or primary culture population size of the specified value |  | value |
| total\_control\_scaled\_population | Checks if a country has value that is population \* local\_control its in |  | value |
| total\_debt | Checks how much a country has in total debt |  | value |
| total\_development | Gets the total amount of development in the country |  | value |
| total\_dynastic\_power | Check the total amount of dynastic power the scoped dynasty or country has. In case of country, the dynasty of the ruler or of the heir in case of regency is taken. |  | value |
| total\_effective\_goods\_production\_buildings | Returns the number of effective building levels which produce the specified good. | ``` total_effective_goods_production_buildings = {  goods = <goods>  value <comparator> <script_value> } ``` | value |
| total\_foreign\_buildings\_levels | Checks the total number of foreign buildings of a country |  | value |
| total\_heathen\_population | Checks if a country has a heathen population size of the specified value |  | value |
| total\_heretic\_population | Checks if a country has a heretic population size of the specified value |  | value |
| total\_merchant\_capacity | Checks if a country has a certain total merchant capacity |  | value |
| total\_not\_tolerated\_culture\_population | Checks if a country has an intolerated culture population size of the specified value |  | value |
| total\_population | Checks if a country has a certain population |  | value |
| total\_population\_in\_international\_organization | Checks if the country has the defined amount of pops in the target IO. | ``` total_population_in_international_organization = {  international_organization = <IO>  value <operator> <script_value> }  or total_population_in_international_organization(<IO>) ``` | value |
| total\_population\_in\_international\_organization\_percentage | Checks if the country has the defined amount of pops in the target IO. | ``` total_population_in_international_organization_percentage = {  international_organization = <IO>  value <operator> <script_value> }  or total_population_in_international_organization_percentage(<IO>) ``` | value |
| total\_primary\_culture\_population | Checks if a country has a primary culture population size of the specified value |  | value |
| total\_tolerated\_culture\_population | Checks if a country has a tolerated culture population size of the specified value |  | value |
| total\_true\_faith\_population | Checks if a country has a true faith population size of the specified value |  | value |
| tribal\_cohesion | How much tribal\_cohesion does the country/IO have? |  | value |
| tribal\_cohesion\_percentage | How high the percentage of the current tribal\_cohesion compared to the maximum does the country/IO have? |  | value |
| trust | is the country's trust towards the target greater or equal than the value? | ``` trust = {  target = X  value <operator> Y  or  value = { min max } } ``` | value |
| union\_length\_days | returns the number of days a country has been in a union with the target country. | ``` union_length_days = {  target = <country>  value <comparator> <script_value> } ``` | value |
| upkeep\_maintenance | What is the xx position (0-1) the country has? |  | value |
| used\_cultures\_capacity | Checks if a country has a certain cost of cultures accepted & tolerated |  | value |
| used\_diplomatic\_capacity | Diplomatic capacity used by the country |  | value |
| used\_fort\_limit | How much Fort Limit is currently being used? |  | value |
| used\_fort\_limit\_percentage | What percentage of our Fort Limit is currently being used? |  | value |
| uses\_government\_power | Checks if a country has a certain government\_power (e.g. 'legitimacy') |  |  |
| vegetation\_count | Returns the amount of owned locations with the specified vegetation. | ``` vegetation_count = {  type = <vegetation scope>  value <operator> <value> } or "vegetation_count(<vegetation scope>)" ``` |  |
| vegetation\_percent | Returns the percentage of owned locations with the specified vegetation. | ``` vegetation_percent = {  type = <vegetation scope>  value <operator> <value> } or "vegetation_percent(<vegetation scope>)" ``` |  |
| vote\_impact\_in\_resolution | Check how much vote impact the current country scope would make when voting in the target resolution of the target IO. | ``` vote_impact_in_resolution = {  international_organization = <IO>  resolution = <resolution>  value <operator> <real> }  or vote_impact_in_resolution(<IO>|<resolution>) ``` | value |
| vote\_percentage\_impact\_in\_resolution | Check how much vote percentage impact the current country scope would make when voting in the target resolution of the target IO. | ``` vote_percentage_impact_in_resolution = {  international_organization = <IO>  resolution = <resolution>  value <operator> <real> }  or vote_percentage_impact_in_resolution(<IO>|<resolution>) ``` | value |
| wants\_casus\_belli\_with | Does country want a casus belli with another nation? Only for Ai |  | country |
| wants\_military\_access\_in | country wants military access in this other country? |  | country |
| wants\_opinion\_with | Does country want more opinion with another nation? Only for Ai |  | country |
| wants\_to\_give\_away\_any\_province | Country wants to give any province to a subject? |  | boolean |
| wants\_to\_subjugate | country wants to subjugate another country? |  | country |
| war\_enthusiasm | The war enthusiasm of the current country scope in the target war. | ``` war_enthusiasm = {  war = <war scope>  value = <script_value> }  or war_enthusiasm(<war scope>) ``` | value |
| war\_exhaustion | How much WarExhaustion does the country/IO have? |  | value |
| war\_exhaustion\_percentage | How high the percentage of the current WarExhaustion compared to the maximum does the country/IO have? |  | value |
| war\_score\_in\_war | Check how much war score the current country has in the target war. | ``` war_score_in_war = {  war = <war>  value <operator> <real> }  or "war_score_in_war(<war>)" ``` | value |
| war\_score\_in\_war\_whole\_side | Check how much war score the war side of the current country has in the target war. | ``` war_score_in_war_whole_side = {  war = <war>  value <operator> <real> }  or "war_score_in_war_whole_side(<war>)" ``` | value |
| war\_score\_versus | Gets the war score of the scope country against the supplied one | ``` war_score_versus(<target>)  or war_score_versus = {  target = <country link>  value <operator> <amount> } ``` | value |
| within\_diplomatic\_range | Is the target country within diplomatic range? |  | country |
| yanantin | How much yanantin does the country/IO have? |  | value |
| yanantin\_percentage | How high the percentage of the current yanantin compared to the maximum does the country/IO have? |  | value |
| yearly\_gold | How much gold does the country get per year? |  | value |
| yearly\_manpower | How many Manpower does the country get per year? |  | value |
| yearly\_sailors | How many Sailors does the country get per year? |  | value |
| years\_in\_international\_organization | Checks if the country has been in the current international organization scope for x years. | ``` years_in_international_organization = {  country = <country scope>  value = <years> }  or years_in_international_organization(country) ``` | value |

### Culture scope

List of culture triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| cultural\_influence | How much influence does the culture have? |  | value |
| cultural\_tradition | How much tradition does the culture have? |  | value |
| cultural\_view | does the culture have the specified opinion of the target? | ``` cultural_view = {  target = <target culture>  value <operator> <script_value> } ``` |  |
| culture\_opinion\_impact | Opinion impact of a particular culture on another | ``` culture_opinion_impact(<culture link>)  or culture_percentage = {  culture = <culture link>  value <operator> <amount> } ``` | value |
| gfx\_culture\_applicable | Checks if a culture gfx applies to the scope object |  |  |
| has\_any\_culture\_group | If a culture belongs to any culture group. |  | boolean |
| has\_culture\_group | If a culture belongs to a specific culture group. |  | culture\_group |
| has\_culture\_with\_tag | Checks if a culture has the specified tags |  |  |
| has\_graphical\_culture | Check if a culture has a graphical culture |  |  |
| has\_shared\_culture\_group | If a culture belongs to a specific culture group. |  | culture |
| is\_accepted\_in | If a culture is accepted in the target country? |  | country |
| is\_merged\_culture\_group | If a culture has been merged from a culture group. |  | boolean |
| is\_merged\_culture\_group\_of | If a culture has been merged from this specific culture group. |  | culture\_group |
| is\_primary\_in | If a culture is a primary culture in the target country? |  | country |
| is\_primary\_or\_accepted\_in | If a culture is a primary culture or accepted in the target country? |  | country |
| is\_tolerated\_in | If a culture is tolerated in the target country? |  | country |
| reverse\_cultural\_view | does the target have the specified opinion of the culture? | ``` reverse_cultural_view = {  target = <target culture>  value <operator> <script_value> } ``` |  |

### Goods scope

List of goods triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| food\_value | Check the food value of the goods scope. |  | value |
| goods\_category | tests the goods category - raw\_material or produced |  |  |
| goods\_method | tests the goods method - mining/farming/hunting/gathering |  |  |
| has\_tag | Check if that object has the specified tag. |  |  |
| is\_demanded\_in\_market | Check if the goods scope is demanded in the target market. |  | market |
| is\_demanded\_in\_market\_by\_buildings | Check if the goods scope is demanded in the target market by buildings. |  | market |
| is\_demanded\_in\_market\_by\_burgher\_trades | Check if the goods scope is demanded in the target market by burgher trades. |  | market |
| is\_demanded\_in\_market\_by\_constructions | Check if the goods scope is demanded in the target market by constructions. |  | market |
| is\_demanded\_in\_market\_by\_pops | Check if the goods scope is demanded in the target market by pops. |  | market |
| is\_demanded\_in\_market\_by\_roads | Check if the goods scope is demanded in the target market by roads. |  | market |
| is\_demanded\_in\_market\_by\_trades | Check if the goods scope is demanded in the target market by trades. |  | market |
| is\_demanded\_in\_market\_by\_units | Check if the goods scope is demanded in the target market by units. |  | market |
| is\_food | Check if a goods is food |  | boolean |
| is\_in\_surplus\_in\_market | Gets the possible trade surplus of the scope goods in the target market. |  | value |
| is\_produced\_by\_production\_method | Returns true if the trade good is produced by the specified production method. |  | production\_method |
| is\_used\_by\_production\_method | Returns true if the trade good is used by the specified production method. |  | production\_method |
| price\_in\_market | Gets the price of the scoped goods in the supplied market | ``` price_in_market = {  market = <market_name>  value >= <script_value> } ``` | value |
| raw\_material\_occurrence | Check how many locations world wide produce this raw material |  | value |

### Institution scope

List of institution triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| has\_spawned | Has the institution spawned anywhere? |  | boolean |
| is\_embraced\_for | Is the institution embraced by the target country? |  | country |

### International organization scope

List of international organization triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| army\_tradition | How much army tradition does the country/IO have? |  | value |
| army\_tradition\_percentage | How high the percentage of the current army tradition compared to the maximum does the country/IO have? |  | value |
| average\_special\_status\_power | Get the average political power of the target special status. | ``` average_special_status_power = {  type = <special status>  value <operator> <float> }  or average_special_status_power(<special status>) ``` | value |
| can\_annex\_members | Can a country annex members in the scope international organization? |  | country |
| can\_initiate\_policy\_votes | Can a country initiate votes in the scope international organization? |  | country |
| combined\_special\_status\_power | Get the combined special status power of ALL special statuses in the international organization |  | value |
| combined\_unique\_special\_status\_power | Get the combined special status power of all countries with their highest ranking special status in the international organization |  | value |
| complacency | How much complacency does the country/IO have? |  | value |
| complacency\_percentage | How high the percentage of the current complacency compared to the maximum does the country/IO have? |  | value |
| country\_has\_been\_member\_for\_years | Checks if the country has been in the current international organization scope for x years. | ``` country_has_been_member_for_years = {  country = <country scope>  value = <years> }  or country_has_been_member_for_years(country) ``` | value |
| country\_has\_special\_status | Does the country have a special status in this international organization? |  |  |
| currency\_percentage\_towards\_limit | Gets currency progress towards specified limit |  | value |
| devotion | How much devotion does the country/IO have? |  | value |
| devotion\_percentage | How high the percentage of the current devotion compared to the maximum does the country/IO have? |  | value |
| doom | How much doom does the country/IO have? |  | value |
| doom\_percentage | How high the percentage of the current doom compared to the maximum does the country/IO have? |  | value |
| gold | How much gold does the country/IO have? |  | value |
| gold\_percentage | How high the percentage of the current gold compared to the maximum does the country/IO have? |  | value |
| government\_power | How much government power does the country/IO have? |  | value |
| government\_power\_percentage | How high the percentage of the current government power compared to the maximum does the country/IO have? |  | value |
| harmony | How much harmony does the country/IO have? |  | value |
| harmony\_percentage | How high the percentage of the current harmony compared to the maximum does the country/IO have? |  | value |
| has\_active\_resolution | Does the scope international organization/situation have any active resolutions? |  | boolean |
| has\_cached\_or\_cast\_vote\_for | Has the supplied country voted or has a cached vote from previous month on the supplied resolution for a specific target in the scope international organization/situation? |  |  |
| has\_cooldown | Does a country have a particular cooldown active |  |  |
| has\_elections | Checks if an international organization has electors |  | boolean |
| has\_enabled\_currency | Checks what currency has been enabled for the international organization (manpower, sailors, gold) |  |  |
| has\_international\_organization\_modifier | Does the scoped international organization have a given modifier | ``` has_international_organization_modifier = name ``` |  |
| has\_land\_ownership\_rule | Checks if the international organization has a landownership rule set |  | boolean |
| has\_location | Is the supplied location owned by the scope international organization? |  | location |
| has\_member | Checks if an international organization has a certain member |  | country |
| has\_ongoing\_parliament\_debate | Country / international organization has an active parliament debate |  | boolean |
| has\_parliament | Checks if the country / international organization has a parliament |  | boolean |
| has\_special\_status\_available | Checks if an international organization has a particular special status available |  | special\_status |
| has\_voted | Has the supplied country voted on the supplied resolution in the scope international organization/situation? |  |  |
| has\_voted\_for | Has the supplied country voted on the supplied resolution for a specific target in the scope international organization/situation? |  |  |
| honor | How much honor does the country/IO have? |  | value |
| honor\_percentage | How high the percentage of the current honor compared to the maximum does the country/IO have? |  | value |
| horde\_unity | How much horde\_unity does the country/IO have? |  | value |
| horde\_unity\_percentage | How high the percentage of the current horde\_unity compared to the maximum does the country/IO have? |  | value |
| inflation | How much inflation does the country/IO have? |  | value |
| inflation\_percentage | How high the percentage of the current inflation compared to the maximum does the country/IO have? |  | value |
| international\_organization\_can\_own\_land | Can the international organization own land? |  | boolean |
| international\_organization\_has\_internal\_peace | Checks if no member country is in a direct war with another member country |  | boolean |
| international\_organization\_has\_law | Has the scope international organization enacted a policy for the supplied law? |  | law |
| international\_organization\_has\_laws | Has the scope international organization enacted a policy for the supplied law? |  | boolean |
| international\_organization\_has\_leader | Does the international organization have a leader country? |  | boolean |
| international\_organization\_has\_policy | Has the scope international organization enacted the supplied policy? |  | policy |
| international\_organization\_leader\_count | Checks how many leaders (defined as 'leaders' in the IO type) are currently present in the current international organization |  | value |
| international\_organization\_leader\_reign | Checks if the ruler of an international organization has ruled for x years |  | value |
| international\_organization\_leader\_reign\_in\_days | Checks if the ruler of an international organization has ruled for x days |  | value |
| international\_organization\_lifetime | Checks if the international organization has existed for x years |  | value |
| international\_organization\_lifetime\_in\_days | Checks if the international organization has existed for x days |  | value |
| international\_organization\_locations\_owned\_percentage | The percentage of the locations of an international organization owned by a country |  | value |
| international\_organization\_modifier\_strength | Does the scoped international\_organization have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` international_organization_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "international_organization_modifier_strength(<modifier key>)" ``` |  |
| international\_organization\_num\_locations | Checks if an international organization has a certain amount of owned locations |  | value |
| international\_organization\_population | Checks if an international organization has a certain population based on the locations it owns |  | value |
| io\_within\_diplomatic\_range | Is the target international organization within diplomatic range? |  | country |
| is\_active\_parliament | country has an active parliament called |  | boolean |
| is\_international\_organization\_annullable | Is the international organization able to be annulled by treaty? |  | boolean |
| is\_international\_organization\_unique | Is the international organization unique? |  | boolean |
| is\_relevant | Checks if an international organization is relevant to the supplied country |  | country |
| karma | How much karma does the country/IO have? |  | value |
| karma\_percentage | How high the percentage of the current karma compared to the maximum does the country/IO have? |  | value |
| law\_enabled\_to\_international\_organization | Can we select a policy for a law in the scope international organization? |  | law |
| law\_is\_locked\_in\_international\_organization | Is a law locked in the scope international organization? |  | law |
| law\_visible\_to\_international\_organization | Can we see a policy for a law in the scope international organization? |  | law |
| leader\_change\_method | Check if the international organization has the specified leader changed method (rotation/vote/lottery/none) |  |  |
| leader\_change\_trigger\_type | Check if the international organization has the specified leader changed trigger type (rulerchang/timed/none) |  |  |
| leader\_special\_status\_power | Get the special status power of all special statuses with the 'leader' trait |  | value |
| leader\_special\_status\_power\_fraction | Get the fraction of the special status power of all special statuses with the 'leader' trait |  | value |
| leader\_type | Check if the international organization has the specified leader type (character/country/none) |  |  |
| legitimacy | How much legitimacy does the country/IO have? |  | value |
| legitimacy\_percentage | How high the percentage of the current legitimacy compared to the maximum does the country/IO have? |  | value |
| location\_can\_be\_added\_to\_international\_organization | Can we add a location to the scope international organization? |  | location |
| location\_can\_be\_removed\_from\_international\_organization | Can we remove a location from the scope international organization? |  | location |
| manpower | How much Manpower does the country/IO have? |  | value |
| max\_countries\_with\_special\_status | gets the max number of countries with a specific special status in an international organization |  | value |
| modifier\_utility | Checks the AI utility of a modifier |  | value |
| modifier\_utility\_include\_locations | Checks the AI utility of a modifier with location checks |  | value |
| months\_between\_leader\_changes | Checks if a country has a specific reform |  | value |
| months\_since\_last\_parliament\_called | Checks how many months its been since the country / international organization last called a parliament |  | value |
| navy\_tradition | How much navy tradition does the country/IO have? |  | value |
| navy\_tradition\_percentage | How high the percentage of the current navy tradition compared to the maximum does the country/IO have? |  | value |
| num\_countries\_with\_special\_status | gets the number of countries with a particular special status in an international organization |  | value |
| num\_of\_active\_parliament\_agendas | Check how many parliament agendas are currently available to the country or international organization. |  | value |
| num\_of\_electors | Checks how many electors the international organization has |  | value |
| organization\_strength\_relative\_to\_country | Gets the relative strength of the scope organization to the supplied country | ``` organization_strength_relative_to_country(<target>|<bool exclude_target>)  or organization_strength_relative_to_country = {  target = <country link>  value <operator> <amount>  exclude_target = <bool> } ``` | value |
| parliament\_issue\_chance | The chance an issue will be selected |  | value |
| parliament\_issue\_support | The current support in parliament for an issue |  | value |
| parliament\_issue\_will\_pass | Check if the parliament issue of the country / international in debate will pass |  | boolean |
| parliament\_type\_enabled\_in\_international\_organization | Is a parliament type enabled in the scope international organization? |  | parliament\_type |
| parliament\_type\_is\_locked\_in\_international\_organization | Is a parliament type locked in the scope international organization? |  | parliament\_type |
| parliament\_type\_visible\_in\_international\_organization | Can we see a parliament type in the scope international organization? |  | parliament\_type |
| policy\_enabled\_to\_international\_organization | Can we enact a policy in the scope international organization? |  | policy |
| policy\_is\_locked\_in\_international\_organization | Is a policy locked in the scope international organization? |  | policy |
| policy\_visible\_to\_international\_organization | Can we see a policy in the scope international organization? |  | policy |
| prestige | How much prestige does the country/IO have? |  | value |
| prestige\_percentage | How high the percentage of the current prestige compared to the maximum does the country/IO have? |  | value |
| purity | How much purity does the country/IO have? |  | value |
| purity\_percentage | How high the percentage of the current purity compared to the maximum does the country/IO have? |  | value |
| religious\_influence | How much religious influence does the country/IO have? |  | value |
| religious\_influence\_percentage | How high the percentage of the current religious influence compared to the maximum does the country/IO have? |  | value |
| remaining\_parliament\_days | Checks how many days are left in the parliament of the country / international organization before it concludes. Returns -1 when there is no parliament active. |  | value |
| republican\_tradition | How much republican\_tradition does the country/IO have? |  | value |
| republican\_tradition\_percentage | How high the percentage of the current republican\_tradition compared to the maximum does the country/IO have? |  | value |
| resolution\_is\_active | Is the resolution currently being debated in the scope international organization/situation? |  | resolution |
| righteousness | How much righteousness does the country/IO have? |  | value |
| righteousness\_percentage | How high the percentage of the current righteousness compared to the maximum does the country/IO have? |  | value |
| rite\_power | How much rite power does the country/IO have? |  | value |
| rite\_power\_percentage | How high the percentage of the current rite power compared to the maximum does the country/IO have? |  | value |
| sailors | How much Sailors does the country/IO have? |  | value |
| self\_control | How much self control does the country/IO have? |  | value |
| self\_control\_percentage | How high the percentage of the current self control compared to the maximum does the country/IO have? |  | value |
| special\_status\_can\_be\_bestowed | Can the supplied special status be bestowed on the supplied country in the scope international organization? |  |  |
| special\_status\_power | Get the political power of the specified country in an organization with that specified special status. | ``` special_status_power = {  country = <country>  type = <special status>  value <operator> <float> }  or special_status_power(<country>|<special status>) ``` | value |
| special\_status\_power\_fraction | Get the political power fraction of the specified country in an organization with that specified special status. | ``` special_status_power_fraction = {  country = <country>  type = <special status>  value <operator> <float> }  or special_status_power(<country>|<special status>) ``` | value |
| stability | How much Stability does the country/IO have? |  | value |
| stability\_percentage | How high the percentage of the current Stability compared to the maximum does the country/IO have? |  | value |
| total\_enemies | counts the number of enemies of an international organization |  | value |
| total\_locations\_owned | counts the number of locations owned by an international organization |  | value |
| total\_members | counts the number of members in an international organization |  | value |
| total\_payment\_contribution | Gets the sum all member countries have to pay for the specified IO and payment type. | ``` total_payment_contribution = {  payment = <> } ``` | value |
| total\_special\_status\_power | Get the political power of all countries in an organization with that specified special status. | ``` total_special_status_power = {  type = <special status>  value <operator> <float> }  or total_special_status_power(<special status>) ``` | value |
| total\_special\_status\_power\_fraction | Get the percentage political power of the target special status compared to the total amount of political power of all special statuses combined. | ``` special_status_power_fraction = {  type = <special status>  value <operator> <float> }  or special_status_power_fraction(<special status>) ``` | value |
| total\_unique\_special\_status\_power | Get the political power of all countries in an organization with that specified special status. | ``` total_special_status_power = {  type = <special status>  value <operator> <float> }  or total_special_status_power(<special status>) ``` | value |
| tribal\_cohesion | How much tribal\_cohesion does the country/IO have? |  | value |
| tribal\_cohesion\_percentage | How high the percentage of the current tribal\_cohesion compared to the maximum does the country/IO have? |  | value |
| vote\_is\_locked | Is a country's vote locked in the scope international organization/situation? |  |  |
| votes\_for\_resolution | Checks the number of votes for a particular outcome of a resolution. | ``` votes_for_resolution(<resolution_key>|<thing>)  or votes_for_resolution = {  resolution = <resolution_key>  outcome = <thing>  value <comparator> <real> } ``` | value |
| war\_exhaustion | How much WarExhaustion does the country/IO have? |  | value |
| war\_exhaustion\_percentage | How high the percentage of the current WarExhaustion compared to the maximum does the country/IO have? |  | value |
| yanantin | How much yanantin does the country/IO have? |  | value |
| yanantin\_percentage | How high the percentage of the current yanantin compared to the maximum does the country/IO have? |  | value |

### Area scope

List of area triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| adjacent\_to\_owned\_by | is the area/location adjacent to an area with a country's presence in it? |  | country |
| adjacent\_to\_owned\_or\_owned\_by\_subject | is the area/location adjacent to an area with a country's or one of its subjects' presence in it? |  | country |
| area\_average\_control | Checks the average\_control of an area |  | value |
| area\_average\_integration | Checks the average\_integration of an area |  | value |
| area\_exploration\_progress | gets the exploration progress (0..1) for a country in the scope area |  | value |
| culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population_percentage = {  culture_group = <culture group>  value <operator> <script_value> } ``` | value |
| culture\_group\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population = {  culture_group = <culture group>  value <operator> <script_value> } ``` | value |
| culture\_percentage | Gets the percentage of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| culture\_percentage\_in\_area | gets the percentage of the population that follow a particular culture in the area | ``` culture_percentage_in_area = {  country = <country>  culture = <culture>  value <operator> <script_value> } ``` | value |
| culture\_population | Gets the absolute number of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| exploration\_expected\_cost | gets the exploration expected cost for a country in the scope area |  | value |
| exploration\_needed\_time | gets the exploration needed time (months) for a country in the scope area |  | value |
| has\_accessible\_coastline | Does the area have a coastline with a port or not? |  | boolean |
| has\_assigned\_explorer | does the country have an assigned explorer in this area? |  | country |
| has\_extended\_winter | does the area have extended winter or not? |  | boolean |
| has\_privateers\_from | Does the location has privateers of the target country? |  | country |
| is\_area\_coastal\_sea | is the area coastal sea or not? |  | boolean |
| is\_area\_fully\_discovered | is the area fully discovered or not? |  | country |
| is\_area\_passable | is the area passable or not? |  | boolean |
| is\_area\_sea | is the area sea or not? |  | boolean |
| is\_being\_explored | is the area being explored by a country? |  | country |
| is\_in\_scripted\_geography | Checks if the scope is part of the scripted geography on RHS scope | ``` is_in_scripted_geography = <scripted geography scope> ``` | scripted\_geography |
| location\_counter | Checks if the province/province\_defintion/area/region / subcontinent/continent/scripted\_geography has this amount of location |  | value |
| num\_province\_definitions\_in\_area | Checks if an area has a certain amount of province definitions |  | value |
| owned\_by\_or\_its\_subjects | Checks if the geographic scope is completely owned by the target country or its subjects. |  | country |
| population | Checks if the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography has a certain population |  | value |
| population\_in\_area | gets the amount of population in an area |  | value |
| privateer\_utility | How useful is a privateer here? |  | value |
| raw\_material\_amount | Check how many locations in the province\_defintion/area / region/subcontinent/continent produce the specified raw material. | ``` raw_material_amount = {  goods = <goods scope>  value = <script_value> }  or raw_material_amount(<goods scope>) ``` | value |
| religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population_percentage = {  religion_group = <religion group>  value <operator> <script_value> } ``` | value |
| religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population = {  religion_group = <religion group>  value <operator> <script_value> } ``` | value |
| religion\_percentage | Gets the percentage of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | value |
| religion\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | value |
| within\_colonial\_range\_of | Is the location within Colonial range of the target country? |  | country |
| within\_naval\_range\_of | Is the location within naval range of the target country? |  | country |

### Province scope

List of province triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population_percentage = {  culture_group = <culture group>  value <operator> <script_value> } ``` | value |
| culture\_group\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population = {  culture_group = <culture group>  value <operator> <script_value> } ``` | value |
| culture\_percentage | Gets the percentage of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| culture\_population | Gets the absolute number of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| does\_owner\_want\_to\_give\_away | Check if a province's owner wants to give it away to a subject |  | boolean |
| has\_possible\_institution\_spawn | Check if a province has an institution that can be promoted to spawn |  | boolean |
| has\_privateers\_from | Does the location has privateers of the target country? |  | country |
| has\_province\_modifier | Does the scoped province have a given modifier | ``` has_province_modifier = name ``` |  |
| is\_overseas\_for\_owner | Check if a location or province is overseas for owber |  | boolean |
| is\_starving | Check if a province is starving |  | boolean |
| location\_counter | Checks if the province/province\_defintion/area/region / subcontinent/continent/scripted\_geography has this amount of location |  | value |
| lowest\_prosperity | Find the location in a province with the lowest prosperity |  | value |
| modifier\_utility | Checks the AI utility of a modifier |  | value |
| modifier\_utility\_include\_locations | Checks the AI utility of a modifier with location checks |  | value |
| population | Checks if the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography has a certain population |  | value |
| province\_army\_levy\_size | Total army levies that can be had from a province |  | value |
| province\_average\_control | Checks the average\_control of a province |  | value |
| province\_average\_development | Checks the average\_development of a province |  | value |
| province\_average\_integration | Checks the average\_integration of a province |  | value |
| province\_cultural\_unity | Checks the cultural\_unity of a province |  | value |
| province\_food | Checks the food of a province |  | value |
| province\_food\_percentage | Checks the food percentage of capacity in a province |  | value |
| province\_max\_food | Checks the maximum amount of food the province can have |  | value |
| province\_modifier\_strength | Does the scoped province have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` province_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "province_modifier_strength(<modifier key>)" ``` |  |
| province\_monthly\_food\_production | Checks how much food the province produces per month |  | value |
| province\_navy\_levy\_size | Total navy levies that can be had from a province |  | value |
| province\_population | Checks if a Province has a certain population |  | value |
| province\_possible\_institutions | Checks the number of institutions that can be promoted in a province |  | value |
| province\_prosperity | Checks if a Province has a certain level of average prosperity |  | value |
| province\_rebel\_progress | Checks if a Province has a certain rebel progress |  | value |
| province\_religious\_unity | Checks the religious\_unity of a province |  | value |
| province\_satisfaction | Checks if a Province has a certain level of average satisfaction |  | value |
| province\_tax\_base | Checks if a Province has a certain total tax base |  | value |
| religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population_percentage = {  religion_group = <religion group>  value <operator> <script_value> } ``` | value |
| religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population = {  religion_group = <religion group>  value <operator> <script_value> } ``` | value |
| religion\_percentage | Gets the percentage of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | value |
| religion\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | value |
| within\_colonial\_range\_of | Is the location within Colonial range of the target country? |  | country |
| within\_naval\_range\_of | Is the location within naval range of the target country? |  | country |

### Location scope

List of location triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| add\_static\_modifier\_utility | Checks the AI utility of adding a static modifier to the scoped object | ``` add_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | value |
| adjacent\_to\_owned\_by | is the area/location adjacent to an area with a country's presence in it? |  | country |
| adjacent\_to\_owned\_or\_owned\_by\_subject | is the area/location adjacent to an area with a country's or one of its subjects' presence in it? |  | country |
| average\_location\_literacy | Checks if a location has a certain average literacy |  | value |
| average\_satisfaction | Checks if a location has a certain average satisfaction of its pops |  | value |
| border\_distance\_to | gets distance between borders of two nations or a location and a nation. | ``` border_distance_to = {  country = x  value [operator] y }  or border_distance_to(country) ``` | value |
| building\_efficiency | does the location have the specific efficiency of a building |  | value |
| building\_type\_max\_level | Gets the max level for a building type in a location. | ``` building_type_max_level = {  building_type = <building type scope>  [owner = <country scope>]  value <operator> <compare value> } ``` | value |
| can\_become\_rank | Check if a location can become the supplied location rank |  | location\_rank |
| can\_build\_building | Checks if the location/country can build the specified building. Location only checks local requirements, country checks the country scope requirements. |  | building\_type |
| climate | Checks if a location is of a specific climate |  |  |
| culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population_percentage = {  culture_group = <culture group>  value <operator> <script_value> } ``` | value |
| culture\_group\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population = {  culture_group = <culture group>  value <operator> <script_value> } ``` | value |
| culture\_percentage | Gets the percentage of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| culture\_population | Gets the absolute number of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | value |
| development | Checks if a location has a certain Development |  | value |
| disease\_affects\_pops\_here | Checks if a disease is affecting some migrated pops here. |  | disease |
| disease\_has\_outbreak\_here | Checks if a disease has an outbreak in a location or subunit. |  | disease |
| disease\_has\_stagnated | Checks if a disease has stagnated in a location or subunit. |  | disease |
| disease\_outbreak\_presence | Checks the presence of a disease in a location or subunit. | ``` disease_outbreak_presence(<disease_outbreak>)  or disease_outbreak_presence = {  disease_outbreak = <disease_outbreak>  value <comparator> <real> } ``` | value |
| disease\_presence | Checks the presence of a disease in a location or subunit. | ``` disease_presence(<disease>)  or disease_presence = {  disease = <disease>  value <comparator> <real> } ``` | value |
| disease\_resistance | Checks the resistance to a disease in a location or subunit. | ``` disease_resistance(<disease>)  or disease_resistance = {  target = <disease>  value <comparator> <real> } ``` | value |
| distance\_to | gets distance between locations |  | value |
| distance\_to\_area | gets distance between a location and an area |  | value |
| distance\_to\_squared | gets distance squared as the crow flies between locations (much quicker than distance\_to, useful if you're just comparing) |  | value |
| employment\_percentage | Checks if a location has a certain unemployement percentage |  | value |
| food\_consumption | Amount of consumed food |  | value |
| food\_production | Amount of food production |  | value |
| garrison\_percentage | Checks the garrison percentage of the location in scope |  | value |
| garrison\_strength | Checks the garrison strength of the location in scope |  | value |
| gfx\_culture\_applicable | Checks if a culture gfx applies to the scope object |  |  |
| goods\_output | Check how much goods the scope location produces. |  | value |
| has\_any\_convertable\_pops | Check if a location has any pops that can be converted to state religion |  | boolean |
| has\_any\_disease\_present | Checks if the location or subunit is affected by ANY disease active. |  | boolean |
| has\_building | Checks if a location has a specific building |  | building\_type |
| has\_building\_with\_at\_least\_one\_level | Checks if a location has a specific building and it has at least one level |  |  |
| has\_building\_with\_graphical\_tag | Checks if a location has a building with the specified graphical tags |  |  |
| has\_building\_with\_graphical\_tag\_and\_at\_least\_one\_level | Checks if a location has a building with the specified graphical tags and at least one level |  |  |
| has\_combat | Check if a location has a combat |  | boolean |
| has\_earthquakes | Check if a location has a Earthquakes |  | boolean |
| has\_exports | Check if a location has a Exports |  | boolean |
| has\_fort | Check if a location has any fort |  | boolean |
| has\_imports | Check if a location has a imports |  | boolean |
| has\_institution | Checks if a country has an institution |  | institution |
| has\_latest\_road\_to | Check if a location has the latest available road to the target location. Latest is determined by the owner of the location and what buildable road type has the highest level. |  | location |
| has\_location\_modifier | Does the scoped province have a given modifier | ``` has_location_modifier = name ``` |  |
| has\_market\_construction | Is the location building a market? |  | boolean |
| has\_owned\_buildings | Has the target country got some buildings here? |  | country |
| has\_owner | Check if a location has a Owner |  | boolean |
| has\_privateers\_from | Does the location has privateers of the target country? |  | country |
| has\_river | Check if a location has a river |  | boolean |
| has\_road\_constructions | Check whether location has road constructions |  | boolean |
| has\_road\_of\_type\_to | Check if a location has a road to the target location of the specified type. | ``` has_road_of_type_to = {  target = <target location>  type = <road type> } ``` |  |
| has\_road\_to | Check if a location has a road to the target location |  | location |
| has\_siege | Check if a location has a siege |  | boolean |
| has\_volcano | Check if a location has a volcano |  | boolean |
| hemisphere | Check if a location is either in the northern or southern hemisphere. | ``` hemisphere = northern/southern ``` |  |
| in\_zone\_of\_control | Check if a location is in the zone of control of a friendly fort |  | boolean |
| integration\_level | Checks the integration level of a location |  |  |
| integration\_progress | Checks the integration progress of a location |  | value |
| intrinsic\_disease\_resistance | Checks the intrinsic disease resistance in a location (e.g. from buildings) |  | value |
| is\_adjacent\_to\_lake | Check if a location is a adjacent to a lake |  | boolean |
| is\_border | Check if a location borders another country |  | boolean |
| is\_burgher\_positive\_deficit | Checks if a building location does not have negative burgher deficit |  | boolean |
| is\_capital | Check if a location is a capital |  | boolean |
| is\_city | Check if a location is a city |  | boolean |
| is\_coastal | Check if a location is coastal |  | boolean |
| is\_connected\_to | Check if a location is connected by land/strait to another location in the same country |  | location |
| is\_core\_of | Is the location a core of the target country? |  | country |
| is\_currently\_being\_integrated | Check if a location is currently being integrated |  | boolean |
| is\_discovered\_by | Is the scope location/country discovered by the target country? |  | country |
| is\_east\_of | Check if a location is east of another location |  | location |
| is\_full\_expanded\_rgo | Check if a location has its RGO fully expanded |  | boolean |
| is\_in\_scripted\_geography | Checks if the scope is part of the scripted geography on RHS scope | ``` is_in_scripted_geography = <scripted geography scope> ``` | scripted\_geography |
| is\_labourer\_positive\_deficit | Checks if a building location does not have negative labourer deficit |  | boolean |
| is\_land | Check if a location is land |  | boolean |
| is\_location\_holy\_site\_for | Is the location a holy site for the target religion? |  | religion |
| is\_looted | Check if a location is looted |  | boolean |
| is\_market\_center | Check if a location is a market center |  | boolean |
| is\_mining\_rgo | Check if a location has a mining\_rgo |  | boolean |
| is\_neighbor\_of | Is the country or location a Neighbor to the specified country? |  | country |
| is\_neighbor\_of\_international\_organization | Is the country or location a neighbor to the specified international organization? |  | international\_organization |
| is\_neighbor\_of\_location | Check if a location is neighbour to another |  | location |
| is\_neighbor\_of\_location\_or\_across\_one\_seazone | Check if a location is neighbour to another or just across a single seazone |  | location |
| is\_overseas\_for\_owner | Check if a location or province is overseas for owber |  | boolean |
| is\_ownable | Check if a location is ownable, i.e. not sea, lake or an impassable |  | boolean |
| is\_owned\_by\_any\_international\_organization | Check if a location is owned by any international organization |  | boolean |
| is\_owned\_by\_international\_organization | Check if a location is owned by an international organization |  | international\_organization |
| is\_owned\_or\_owned\_by\_subjects\_of | Check if the location is owned by the target country or its subjects |  | country |
| is\_owned\_or\_owned\_by\_subjects\_or\_below\_of | Check if the location is owned by the target country or its subjects or the subjects' subject |  | country |
| is\_passable | Check if a location is passable |  | boolean |
| is\_port | Check if a location has a port |  | boolean |
| is\_produced\_in\_location\_market | Checks if a specific goods in produced in the location market |  | goods |
| is\_province\_capital | Check if a location is the province capital |  | boolean |
| is\_required\_for\_formable | Check if the location scope is required by the formable |  | formable\_country |
| is\_unified\_culture | Check if a location has culture unified with the owner |  | boolean |
| local\_control | Checks if a location has a certain control |  | value |
| local\_cultural\_unity | Checks the percentage the dominant-culture has in a location |  | value |
| local\_estate\_power | Checks the raw local estate power in location |  | value |
| local\_political\_power\_fraction | Checks the fraction this location has of the total political power of a country |  | value |
| local\_relative\_estate\_power | Checks the relative local estate power in location |  | value |
| local\_religious\_unity | Checks the percentage the dominant-religion has in a location |  | value |
| location\_art\_quality | Checks the total art quality in a location |  | value |
| location\_building\_level | Checks if a location has a building type at a certain level (with optional owner) |  | value |
| location\_key | Checks if a location is the specific one (from named\_location) |  |  |
| location\_maritime\_merchant\_power | gets the maritime merchant power for a country in the scope location |  | value |
| location\_maritime\_presence\_power | gets the maritime presence power for a country in the scope location. | ``` location_maritime_presence_power = {  country = <country scope>  value <operator> <number> } ``` | value |
| location\_max\_population | Checks if a location has a certain pixel count |  | value |
| location\_max\_winter\_level | Checks the maximum winter level of a location |  |  |
| location\_modifier\_strength | Does the scoped location have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` location_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "location_modifier_strength(<modifier key>)" ``` |  |
| location\_net\_building\_profit | Checks the net profit from buildings in a location |  | value |
| location\_num\_holy\_sites | Number of holy sites in the location |  | value |
| location\_num\_works\_of\_art | Checks if a location has a certain number of works of art |  | value |
| location\_peace\_cost | gets the peace cost for the location according to giver and taker countries | ``` usage in trigger: location_peace_cost = { 	giver = <country> 	taker = <country> 	value <operand> <threshold>  #ex: value < 10 } usage in scripted value: location_peace_cost(<giver>|<taker>) ``` | value |
| location\_population\_percentage | Checks if a location has a certain percentage of population capacity |  | value |
| location\_privateer\_power | gets the maritime privateeer power for a country in the scope location |  | value |
| location\_size | Checks if a location has a certain pixel count |  | value |
| location\_tax\_base | Checks the tax-base of a location |  | value |
| location\_unemployed\_population\_for\_building\_type | Checks if a location has a certain unemployed population for the supplied building type (with optional owner) |  | value |
| location\_within\_range | Checks if a location has a certain population within range |  | country |
| location\_works\_of\_art\_star\_rating | Checks if a country has a certain amount of work of arts |  | value |
| market\_access | Checks if a location has certain market access |  | value |
| max\_control | Checks the max control in a location |  | value |
| max\_garrison\_strength | Checks the max garrison strength of the location in scope |  | value |
| max\_rgo\_workers | Checks if a location has a certain max number of RGO workers |  | value |
| migration\_attraction | Checks if a location has a certain migration\_attraction |  | value |
| modifier\_utility | Checks the AI utility of a modifier |  | value |
| modifier\_utility\_include\_locations | Checks the AI utility of a modifier with location checks |  | value |
| monthly\_conversion | Checks if a location has an potential conversion of X per month |  | value |
| num\_army\_constructions | Check how many army\_constructions a location has |  | value |
| num\_buildings | Checks if a location has a certain amount of buildings |  | value |
| num\_civil\_constructions | Check how many civil\_constructions a location has |  | value |
| num\_foreign\_buildings | Checks if a location has a certain amount of foreign buildings |  | value |
| num\_navy\_constructions | Check how many navy\_constructions a location has |  | value |
| num\_owned\_foreign\_buildings\_in\_location | The number of foreign buildings in a location owned by a count |  | value |
| num\_roads | Check how many roads a location has |  | value |
| peasant\_enfranchisment | Checks the level of peasant enfranchisement in a location |  | value |
| population | Checks if the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography has a certain population |  | value |
| population\_with\_traits | Checks if the location has x amount of population with specific pop traits. | ``` population_with_traits = {  limit = { <pop triggers> }  OR  scripted_trigger = <scripted trigger key>  value = <script_value> }  or population_with_traits(<scripted trigger key>) ``` | pop |
| prosperity | Checks if a location has a certain prosperity |  | value |
| proximity | Checks the proximity to owner capital in a location |  | value |
| rank\_index | Checks if a location has a Location Rank of a certain index |  | value |
| raw\_material\_output | Check how much raw material the scope location produces. |  | value |
| relative\_raw\_material\_price | Checks the price of a location's raw material in its market as a percentage of the base price of that material |  | value |
| religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population_percentage = {  religion_group = <religion group>  value <operator> <script_value> } ``` | value |
| religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population = {  religion_group = <religion group>  value <operator> <script_value> } ``` | value |
| religion\_percentage | Gets the percentage of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | value |
| religion\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | value |
| remove\_static\_modifier\_utility | Checks the AI utility of removing a static modifier from the scoped object | ``` remove_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | value |
| rgo\_workers | Checks if a location has a certain number of RGO workers |  | value |
| topography | Checks if a location is of a specific Topography type |  |  |
| total\_building\_levels | Checks if a location has a certain total amount of building levels |  | value |
| vegetation | Checks if a location is of a specific Vegetation type |  |  |
| winter\_level | winter level check |  |  |
| winter\_power |  |  | value |
| within\_colonial\_range\_of | Is the location within Colonial range of the target country? |  | country |
| within\_naval\_range\_of | Is the location within naval range of the target country? |  | country |

### Market scope

List of market triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| available\_merchant\_capacity | gets the market available merchant capacity for a country in the scope market |  | value |
| demands\_goods | Check if the market scope has a demand for the target goods. |  | goods |
| demands\_goods\_by\_pops | Check if the market has any pop demand for the target goods. |  | goods |
| food\_price | Checks how much the food in the current market costs |  | value |
| goods\_demand\_in\_market | Checks how much demand exists of a good in the market. | ``` goods_demand_in_market = {  goods = <goods>  value = <script_value> }  or goods_demand_in_market(<goods>) ``` | value |
| goods\_supply\_in\_market | Checks how much supply exists of a good in the market. | ``` goods_supply_in_market = {  goods = <goods>  value = <script_value> }  or goods_supply_in_market(<goods>) ``` | value |
| has\_merchant | checks if the market has a merchant of the specific country. |  | country |
| has\_merchant\_power | does the market have a merchant power for? | ``` has_merchant_power = {  country = country  key = key } ``` |  |
| has\_new\_world\_goods\_in\_market | Checks if a market has a supply of any new-world goods |  | boolean |
| has\_temporary\_demand | Checks if a market has a certain temporary demand |  | demand |
| has\_temporary\_demands | Checks if a market has a certain temporary demand |  | boolean |
| in\_trade\_range\_of | Is the market within trading range of a merchant the target country? |  | country |
| is\_export\_banned | Checks if export of specific goods is banned in this market |  | goods |
| is\_import\_banned | Checks if import of specific goods is banned in this market |  | goods |
| is\_produced\_in\_market | Checks if a specific goods in produced in this market |  | goods |
| is\_projected\_to\_run\_out\_of\_food\_stockpile | Checks if a market is projected to run out of food |  | boolean |
| is\_traded\_in\_market | Checks if a specific goods in traded in this market |  | goods |
| market\_food | Checks how much food is in the market stockpile |  | value |
| market\_food\_deficit | Checks how much food is missing in the market |  | value |
| market\_food\_percentage | Checks how much food is in the market stockpile percentage wise |  | value |
| market\_food\_traded | Checks how much food is traded in the market |  | value |
| market\_max\_food | Checks how much food can be stockpiled in the market |  | value |
| market\_monthly\_food\_balance | Checks what the food balance is in the market |  | value |
| market\_population | Checks how many pops are in the market |  | value |
| market\_possible\_goods\_trade\_surplus | gets the possible trade surplus for the goods in the scope market |  | value |
| merchant\_capacity | gets the market merchant capacity for a country in the scope market |  | value |
| merchant\_power\_in\_market | gets the market merchant power for a country in the scope market |  | value |
| raw\_material\_amount | Check how many locations in the province\_defintion/area / region/subcontinent/continent produce the specified raw material. | ``` raw_material_amount = {  goods = <goods scope>  value = <script_value> }  or raw_material_amount(<goods scope>) ``` | value |
| total\_goods\_traded | Check the total amount of goods that went through this market last month |  | value |
| total\_goods\_value\_traded | Check the total value of goods that went through this market last month |  | value |
| total\_merchant\_power | Check the level of this Building? |  | value |
| used\_merchant\_capacity | gets the market used merchant capacity for a country in the scope market |  | value |

### Pop scope

List of pop triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| gfx\_culture\_applicable | Checks if a culture gfx applies to the scope object |  |  |
| has\_rebel | Check if a pop has allegiance to a rebel |  | boolean |
| is\_linked\_to\_foreign\_building | Check if a pop is linked to a foreign building |  | boolean |
| is\_upper\_class | Check if a pop is upper class or not |  | boolean |
| pop\_character\_chance | How likely are characters to spawn from this pop? |  | value |
| pop\_knows\_about\_goods | Checks if a pop knows about a goods enough to demand it |  | goods |
| pop\_literacy | How literate is this pop? |  | value |
| pop\_satisfaction | How satisfied is this pop? |  | value |
| pop\_size | How big is this pop? |  | value |

### War scope

List of war triggers

| Trigger | Description | Example | Targets |
| --- | --- | --- | --- |
| can\_join\_as\_attacker | Can the target country join the war in scope as attacker ? |  | country |
| can\_join\_as\_defender | Can the target country join the war in scope as defender ? |  | country |
| has\_casus\_belli | Checks if that war has a CB specified at all |  | boolean |
| is\_a\_defender | Is the target country a defender in the war? |  | country |
| is\_an\_attacker | Is the target country an attacker in the war? |  | country |
| is\_civil\_war\_for | Is the current war a civil war for the target country? |  | country |
| is\_in\_war | Is the target country in the war? |  | country |
| is\_no\_cb\_war | Checks if that war was started without any casus belli ('no cb') |  | boolean |
| is\_on\_opposite\_sides | Check if the two countries are in opposing sides. | ``` is_on_opposite_sides = {  country = <country>  target = <target> } ``` |  |
| is\_on\_same\_side | Check if the two countries are on the same side. | ``` is_on_same_side = {  country = <country>  target = <target> } ``` |  |
| join\_war\_reason | Checks the reason for a country joining a war. |  |  |
| war\_goal\_type | Check if the war goal type of the war is the specified type. |  |  |
| war\_length | Checks how many months the current war has been going. |  | value |
| war\_length\_in\_years | Checks how many years the current war has been going. |  | value |
| war\_score\_of\_country | Check how much war score the target country has in the current war. | ``` war_score_of_country = {  country = <country>  value <operator> <real> }  or war_score_of_country(<country>) ``` | value |
| war\_score\_of\_country\_side | Check how much war score the war side of the target country has in the current war. | ``` war_score_of_country_side = {  country = <country>  value <operator> <real> }  or war_score_of_country_side(<country>) ``` | value |
| war\_stalling\_length | Checks how many months with no action have passed in the current war. |  | value |
| war\_stalling\_length\_in\_years | Checks how many years with no action have passed in the current war. |  | value |

## All triggers

Use this table to search for all triggers.

List of all triggers

| Trigger | Description | Example | Scopes | Targets |
| --- | --- | --- | --- | --- |
| active\_religious\_focus | Checks if a country is researching a certain religious focus |  | country |  |
| add\_estate\_satisfaction\_utility | Utility of adding however much estate satisfaction to the country | ``` add_estate_satisfaction_utility(<estate>|<amount>)  or add_estate_satisfaction_utility = {  type = <estate type>  amount = <amount>  value <operator><threshold> } ``` | country | value |
| add\_static\_modifier\_utility | Checks the AI utility of adding a static modifier to the scoped object | ``` add_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | character, country, location | value |
| add\_to\_temporary\_list | Saves a temporary target for use during the trigger execution | ``` This is used to build lists in triggers. If used within an any-trigger, placement within the trigger is quite important. The game will iterate through every instance of the any-trigger  until it finds a single instance that fulfills the requirements, and then it will stop. In order to add every instance of a scope that fulfills certain conditions,  use "count = all" while also placing this "effect" at the very end of the any-trigger  (so that every condition is evaluated for every iteration). ``` | none |  |
| adjacent\_to\_owned\_by | is the area/location adjacent to an area with a country's presence in it? |  | area, location | country |
| adjacent\_to\_owned\_or\_owned\_by\_subject | is the area/location adjacent to an area with a country's or one of its subjects' presence in it? |  | area, location | country |
| adm | The adm ability of the character |  | character | value |
| advance\_no\_longer\_activated | Checks if a country has researched a certain advance but it's not useable at the moment because of conditions |  | country |  |
| age\_in\_days | How old is a character??? |  | character | value |
| age\_in\_years | How old is a character??? |  | character | value |
| age\_preference | checks a countries age preference for current age |  | country |  |
| agenda\_for\_estate\_type | Check if the parliament agenda can be available for the specified estate type |  | parliament\_agenda | estate\_type |
| agenda\_for\_special\_status | Check if the parliament agenda can be available for the specified special status |  | parliament\_agenda | estate\_type |
| ai\_issue\_voting\_bias | gets the AI evaluation score for voting bias from the international organization |  | none | value |
| ai\_parliament\_issue\_resolution\_vote\_bias | gets the AI evaluation score for resolution voting bias from the parliament issue |  | parliament\_issue | value |
| ai\_policy\_reason\_to\_join | Gets the AI evaluation score for joining an IO due to its policies | ``` ai_policy_reason_to_join = {  actor = <country scope>  international_organization = <international organization scope>  value = <script_value> }  OR ai_policy_reason_to_join(<country scope>|<international organization scope>) = <script_value> ``` | policy | value |
| ai\_policy\_resolution\_keep\_bias | Gets the AI evaluation score for keeping the policy in a vote | ``` ai_policy_resolution_keep_bias = {  actor = <country scope>  international_organization = <international organization scope>  value = <script_value> }  OR ai_policy_resolution_keep_bias(<country scope>|<international organization scope>) = <script_value> ``` | policy | value |
| ai\_policy\_resolution\_propose\_bias | gets the AI evaluation score for proposing the policy in a vote |  | policy | value |
| ai\_policy\_resolution\_vote\_bias | gets the AI evaluation score for resolution voting bias from the policy |  | policy | value |
| ai\_unlock\_unit\_score | Returns the score for AI to unlock a unit |  | country | value |
| ai\_wants\_convert | religion is one AI wants |  | religion | boolean |
| ai\_will\_do | gets the AI evaluation score of the supplied generic action ofr the supplied country |  | none | value |
| all\_false | true if all children are false (equivalent to NOR) |  | none |  |
| allows\_female\_rulers | country allows female rulers |  | country | boolean |
| allows\_male\_rulers | country allows male rulers |  | country | boolean |
| always | checks if the assigned yes/no value is true | ``` always = yes # always succeeds always = no  # always fails always = scope:a_boolean_value # evaluated at runtime ``` | none | boolean |
| always\_loyal | if estate type is crown |  | estate\_type | boolean |
| and | all inside trigger must be true |  | none |  |
| annexation\_cost | How much does the target country cost for the current country to annex? | ``` annexation_cost = {  target = <target country>  value = <script_value> }  or annexation_cost(<target country>) ``` | country | value |
| antagonism | is the country's antagonism towards the target greater or equal than the value? | ``` antagonism = {  target = X  value <operator> Y  or  value = { min max } } ``` | country | value |
| any\_accepted\_culture | Iterate through all accepted cultures in a country | ``` any_accepted_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_active\_disaster | Iterate through all active disasters for a country | ``` any_active_disaster = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | disaster |
| any\_active\_estate | Iterate through all active estates (non-crown) | ``` any_active_estate = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | estate\_type |
| any\_active\_resolution | Iterate through all currently active resolutions in an international organization or situation | ``` any_active_resolution = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization, situation | active\_resolution |
| any\_adjacent\_ports\_to\_area | Iterate through all adjacent ports of an seazone area | ``` any_adjacent_ports_to_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | location |
| any\_advance\_definition | Iterate through all advance definitions | ``` any_advance_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | advance\_type |
| any\_allowed\_estate\_in\_heir\_selection | Iterate through all allowed estates a HeirSelection has | ``` any_allowed_estate_in_heir_selection = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | heir\_selection | estate\_type |
| any\_ancestor | Iterate through all ancestors (parents, grandparents etc) of a character | ``` any_ancestor = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_area | Iterate through all existing areas | ``` any_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | area |
| any\_area\_in\_region | Iterate through all areas in a region | ``` any_area_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | area |
| any\_area\_in\_scripted\_geography | Iterate through all areas in a scripted geography | ``` any_area_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | area |
| any\_area\_with\_core | Iterate through all areas with cored locations in a country | ``` any_area_with_core = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | area |
| any\_area\_with\_owned\_province | Iterate through all areas with owned provinces in a country | ``` any_area_with_owned_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | area |
| any\_army | Iterate through all armies in a country | ``` any_army = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | unit |
| any\_artist | Iterate through all artists in a country | ``` any_artist = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_attacker | Iterate through all attackers of a war | ``` any_attacker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |
| any\_avatar\_for\_god | Iterate through all Avatars of a God | ``` any_avatar_for_god = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | god | avatar |
| any\_besieging\_units | Iterate through all units participating in a siege | ``` any_besieging_units = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | siege | unit |
| any\_border\_location | Iterate through all owned location in a country which border locations not owned by the current country scope. | ``` any_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_buildable\_building\_type | Iterate through all the building types a country can build | ``` any_buildable_building_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | building\_type |
| any\_building\_type | Iterate through all the building types | ``` any_building_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | building\_type |
| any\_buildings\_in\_location | Iterate through all buildings in a location | ``` any_buildings_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | building |
| any\_cabinet | Iterate through all actions in a country's cabinet | ``` any_cabinet = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | cabinet |
| any\_cabinet\_action | Iterate through all actions in a country's cabinet actions | ``` any_cabinet_action = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | cabinet\_action |
| any\_cabinet\_character | Iterate through all characters in a country that is in the cabinet | ``` any_cabinet_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_cardinal\_in\_country | Iterate through all Cardinals in a country | ``` any_cardinal_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | cardinal |
| any\_cardinal\_in\_religion | Iterate through all Cardinals in a Religion | ``` any_cardinal_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | cardinal |
| any\_casus\_belli\_on\_us | Iterate through all countries have a casus belli on us | ``` any_casus_belli_on_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_casus\_belli\_target | Iterate through all countries we have a casus belli on | ``` any_casus_belli_target = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_center | Iterate through all subunits on the center of a combat-side | ``` any_center = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_character | Iterate through all characters in a country | ``` any_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_character\_in\_dynasty | Iterate through all living characters in a Dynasty | ``` any_character_in_dynasty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | dynasty | character |
| any\_character\_supporting\_rebel | Iterate through all characters supporting a rebel | ``` any_character_supporting_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | rebels | character |
| any\_child | Iterate through all children of a character | ``` any_child = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_close\_relative | Iterate through all close relatives of a character | ``` any_close_relative = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_coast\_border\_location | Iterate through all bordering, or across one seazone of a location | ``` any_coast_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_colonial\_charter | Iterate through all colonial charters in a country | ``` any_colonial_charter = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | colonial\_charter |
| any\_colonial\_claim\_province\_definition | Iterate through all province definitions with colonial claims from the scope country. | ``` any_colonial_claim_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | province\_definition |
| any\_colonial\_country | Iterate through all colonial countries in the world | ``` any_colonial_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_colonial\_overlord | Iterate through all colonial overlord countries in the world | ``` any_colonial_overlord = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_colonial\_top\_overlord | Iterate through all countries in the world that have a colonial country among their subjects or their subjects subjects and so on | ``` any_colonial_top_overlord = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_connected\_location | Iterate through all locations in the same country as the scope location that are connected by land or strait | ``` any_connected_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_construction\_material\_for\_building\_type | Iterate through all goods required to construct a building type | ``` any_construction_material_for_building_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | building\_type | goods |
| any\_continent | Iterate through all existing continents | ``` any_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | continent |
| any\_continent\_in\_scripted\_geography | Iterate through all continents in a scripted geography | ``` any_continent_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | continent |
| any\_controlled\_location | Iterate through all controlled location in a country | ``` any_controlled_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_core\_in\_location | Iterate through all cores in a location | ``` any_core_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | country |
| any\_core\_location | Iterate through all core locations in a country | ``` any_core_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_country | Iterate through all existing countries | ``` any_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_annexing\_us | Iterate through all countries which are currently annexing the current country scope. | ``` any_country_annexing_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_at\_war\_with | Iterate through all countries at war with | ``` any_country_at_war_with = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_in\_culture | Iterate through all countries with this primary culture | ``` any_country_in_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture | country |
| any\_country\_in\_culture\_group | Iterate through all countries in a culture group. | ``` any_country_in_culture_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture\_group | country |
| any\_country\_in\_diplomatic\_range | Iterate through all countries in diplomatic range | ``` any_country_in_diplomatic_range = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_in\_dynasty | Iterate through all countries in a Dynasty | ``` any_country_in_dynasty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | dynasty | country |
| any\_country\_in\_hierarchy | Iterate through every country in the entire overlord/subject hierarchy, from the independent top overlord to the deepest subjects | ``` any_country_in_hierarchy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_in\_religion | Iterate through all countries in a religion | ``` any_country_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | country |
| any\_country\_in\_religion\_group | Iterate through all countries in a religion group. | ``` any_country_in_religion_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | group | country |
| any\_country\_in\_religious\_school | Iterate through all countries within a school | ``` any_country_in_religious_school = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religious\_school | country |
| any\_country\_lent\_to | Iterate through all countries a country has lent to | ``` any_country_lent_to = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_of\_country\_type | Iterate through all countries of the specified type. | ``` any_country_of_country_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_sub\_unit | Iterate through all subunits in all units in a country | ``` any_country_sub_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | sub\_unit |
| any\_country\_supporting\_rebel | Iterate through all countries supporting a rebel | ``` any_country_supporting_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | rebels | country |
| any\_country\_that\_can\_be\_called\_defensively | Iterate through all countries that may be called into a defensive war. | ``` any_country_that_can_be_called_defensively = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_that\_can\_be\_called\_offensively | Iterate through all countries that may be called into an offensive war. | ``` any_country_that_can_be_called_offensively = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_together\_in\_war\_with | Iterate through all countries which are an ally in any of the country scope's wars | ``` any_country_together_in_war_with = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_we\_are\_annexing | Iterate through all countries which are currently annexed by the current country scope. | ``` any_country_we_are_annexing = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_with\_capital\_in\_geography | Iterate through all countries which have their capital in the specified geography | ``` any_country_with_capital_in_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area, continent, location, province\_definition, region, scripted\_geography, sub\_continent | country |
| any\_country\_with\_cardinals | Iterate through all countries with cardinals in a religion | ``` any_country_with_cardinals = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | country |
| any\_country\_with\_coalition\_grade\_antagonism\_against\_us | Iterate through all countries who have coalition grade antagonism against us | ``` any_country_with_coalition_grade_antagonism_against_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_with\_relation\_that\_can\_be\_annulled | Iterate through all countries which have an annullable relation with the scope country. | ``` any_country_with_relation_that_can_be_annulled = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_country\_with\_special\_status\_of\_type | Iterate through all countries in the international organization which have the specified special status | ``` any_country_with_special_status_of_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_country\_with\_succession\_law | Iterate through all countries with a cached succession law (set cached = yes in the heir\_selection to use this) | ``` any_country_with_succession_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_culture | Iterate through all cultures | ``` any_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | culture |
| any\_culture\_group | Iterate through all culture groups the culture is in. | ``` any_culture_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture | culture\_group |
| any\_culture\_in\_culture\_group | Iterate through all cultures in a culture group. | ``` any_culture_in_culture_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture\_group | culture |
| any\_current\_avatars | Iterate through all Avatars a country has | ``` any_current_avatars = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | avatar |
| any\_current\_gods | Iterate through all Gods a country worships | ``` any_current_gods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | god |
| any\_current\_law | Iterate through all laws of a country. | ``` any_current_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | law |
| any\_current\_law\_in\_international\_organization | Iterate through all laws that are codified in the international organization | ``` any_current_law_in_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | law |
| any\_current\_policy | Iterate through all policies that are codified in the country | ``` any_current_policy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | policy |
| any\_current\_policy\_in\_international\_organization | Iterate through all policies that are codified in the international organization | ``` any_current_policy_in_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | policy |
| any\_current\_reforms | Iterate through all Government Reforms a country has | ``` any_current_reforms = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | government\_reform |
| any\_current\_war | Iterate through all wars of a country | ``` any_current_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | war |
| any\_defender | Iterate through all defenders of a war | ``` any_defender = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |
| any\_descendant | Iterate through all descendants (children, grandchildren etc) of a character | ``` any_descendant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_disloyal\_subject | Iterate through all loyal subject countries | ``` any_disloyal_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_dynasty | Iterate through all dynasties in a country | ``` any_dynasty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | dynasty |
| any\_east\_of\_province\_definition | Iterate through all province-definitions east of a province-definition | ``` any_east_of_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province\_definition |
| any\_election\_candidates | Iterate through all election candidates of a country with elections! | ``` any_election_candidates = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_enemy | Iterate through all Enemy countries | ``` any_enemy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_enemy\_war\_leader | Iterate through all countries which are leading a war against the scope | ``` any_enemy_war_leader = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_estate | Iterate through all estates in a country | ``` any_estate = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | estate |
| any\_estate\_privilege | Iterate through all current estate privileges of a Country | ``` any_estate_privilege = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | estate\_privilege |
| any\_estate\_type\_preferring | Iterate through all estate types that a prefer a policy | ``` any_estate_type_preferring = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | policy | estate\_type |
| any\_exploration\_from\_country | Iterate through all Explorations a country has | ``` any_exploration_from_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | exploration |
| any\_export | Iterate through all exports in a market | ``` any_export = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | trade |
| any\_export\_from\_location | Iterate through all exports from location | ``` any_export_from_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_false | true if any child is false (equivalent to NAND) |  | none |  |
| any\_food\_goods | Iterate through all food-goods | ``` any_food_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| any\_foreign\_building\_countries\_in\_location | Iterate through all foreign building countries in a location | ``` any_foreign_building_countries_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | country |
| any\_foreign\_buildings\_in\_location | Iterate through all foreign buildings in a location | ``` any_foreign_buildings_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | building |
| any\_fort\_in\_country | Iterate through all Forts in a country | ``` any_fort_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_friendly\_coast\_border\_location | Iterate through all friendly bordering, or across one seazone of a location | ``` any_friendly_coast_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_friendly\_country | Iterate through all countries with relations marked as friendly | ``` any_friendly_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_friendly\_or\_high\_opinion\_country | Iterate through all countries with relations marked as friendly or that we have a high opinion of set in defines | ``` any_friendly_or_high_opinion_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_friendly\_to\_friendly\_country | Iterate through all friends of our friends | ``` any_friendly_to_friendly_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_friendly\_to\_hostile\_country | Iterate through all friends of our enemies | ``` any_friendly_to_hostile_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_god\_in\_religion | Iterate through all Gods in a Religion | ``` any_god_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | god |
| any\_good\_in\_demand | Iterate through all goods in a goods demand | ``` any_good_in_demand = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | demand | goods |
| any\_goods | Iterate through all types of goods | ``` any_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| any\_graphical\_culture\_in\_culture | Iterate through all graphical culture in a culture | ``` any_graphical_culture_in_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture | graphical\_culture |
| any\_great\_power | Iterate through all great powers | ``` any_great_power = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_heathen\_location | Iterate through all heathen locations in a country | ``` any_heathen_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_heretic\_location | Iterate through all Heretic locations in a country | ``` any_heretic_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_hired\_mercenary | Iterate through mercenaries a country has hired | ``` any_hired_mercenary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | mercenary |
| any\_historical\_enemy | Iterate through all historical Enemy countries | ``` any_historical_enemy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_historical\_rival | Iterate through all historical rival countries | ``` any_historical_rival = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_holy\_site\_in\_country | Iterate through all Holy Sites in a country | ``` any_holy_site_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | holy\_site |
| any\_holy\_site\_in\_religion | Iterate through all Holy Sites in a Religion | ``` any_holy_site_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | holy\_site |
| any\_hostile\_country | Iterate through all countries with relations marked as hostile | ``` any_hostile_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_hostile\_or\_low\_opinion\_country | Iterate through all countries with relations marked as hostile or that we have a low opinion of set in defines | ``` any_hostile_or_low_opinion_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_hostile\_to\_friendly\_country | Iterate through all enemies of our friends | ``` any_hostile_to_friendly_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_hostile\_to\_hostile\_country | Iterate through all enemies of our enemies | ``` any_hostile_to_hostile_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_import | Iterate through all imports in a market | ``` any_import = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | trade |
| any\_import\_from\_location | Iterate through all Imports from location | ``` any_import_from_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_in\_global\_list | Iterate through all items in global list. | ``` any_in_global_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_local\_list | Iterate through all items in local list. | ``` any_in_local_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_institutions\_embraced | Iterate through all institutions a country has embraced | ``` any_institutions_embraced = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | institution |
| any\_international\_organization | Iterate through all international organizations | ``` any_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | international\_organization |
| any\_international\_organization\_elector | Iterate through all countries with an elector special status in the international organization | ``` any_international_organization_elector = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_enemy | Iterate through all countries that are enemies of the international organization | ``` any_international_organization_enemy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_member | Iterate through all countries that are members of the international organization | ``` any_international_organization_member = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_owned\_location | Iterate through all locations that are owned by the international organization | ``` any_international_organization_owned_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | location |
| any\_international\_organization\_owner | Iterate through all international organizations which own the location scope | ``` any_international_organization_owner = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | international\_organization |
| any\_international\_organization\_parliament\_opposers | Iterate through all countries that have voted AGAINST the parliament issue in the in the parliament of the international organization and support the current debate | ``` any_international_organization_parliament_opposers = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organization\_parliament\_supporter | Iterate through all countries that have voted FOR the parliament issue in the parliament of the international organization and support the current debate | ``` any_international_organization_parliament_supporter = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | international\_organization | country |
| any\_international\_organizations\_member\_of | Iterate through all international organizations a country is a member of | ``` any_international_organizations_member_of = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | international\_organization |
| any\_international\_organizations\_target\_of | Iterate through all international organizations a country is a target of | ``` any_international_organizations_target_of = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | international\_organization |
| any\_invited\_religious\_figure | Iterate through all invited religious figures in a Country | ``` any_invited_religious_figure = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_key\_in\_global\_variable\_map | Iterate through all items in global variable map. | ``` any_key_in_global_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_local\_variable\_map | Iterate through all items in local variable map. | ``` any_key_in_local_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_key\_in\_variable\_map | Iterate through all items in variable map. | ``` any_key_in_variable_map = {  variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } ``` | none |  |
| any\_known\_country | Iterate through all known countries | ``` any_known_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_known\_institution | Iterate through all institutions a country knows of | ``` any_known_institution = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | institution |
| any\_left\_flank | Iterate through all subunits on the left-flank of a combat-side | ``` any_left_flank = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_lent\_loan | Iterate through all loans that a country lent | ``` any_lent_loan = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | loan |
| any\_loan | Iterate through all loans in a country | ``` any_loan = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | loan |
| any\_loan\_lent\_to\_country | Iterate through all loans a country has lent to the supplied borrower country | ``` any_loan_lent_to_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | loan |
| any\_location\_in\_area | Iterate through all Locations in a area | ``` any_location_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | location |
| any\_location\_in\_continent | Iterate through all Locations in a continent | ``` any_location_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | continent | location |
| any\_location\_in\_market | Iterate through all locations in a market | ``` any_location_in_market = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | location |
| any\_location\_in\_province | Iterate through all Locations in a province | ``` any_location_in_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province | location |
| any\_location\_in\_province\_definition | Iterate through all Locations in a province definition | ``` any_location_in_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | location |
| any\_location\_in\_region | Iterate through all Locations in a region | ``` any_location_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | location |
| any\_location\_in\_scripted\_geography | Iterate through all Locations in a scripted geography | ``` any_location_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | location |
| any\_location\_in\_sub\_continent | Iterate through all Locations in a sub-continent | ``` any_location_in_sub_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | sub\_continent | location |
| any\_location\_in\_the\_world | Iterate through all location | ``` any_location_in_the_world = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | location |
| any\_loyal\_subject | Iterate through all loyal subject countries | ``` any_loyal_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_maritime\_area | Iterate through all maritime areas for a country | ``` any_maritime_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | area |
| any\_market\_center\_in\_country | Iterate through all markets in a country which market centers are owned by the country | ``` any_market_center_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | market |
| any\_market\_in\_world | Iterate through all markets in the world | ``` any_market_in_world = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | market |
| any\_market\_present\_in\_country | Iterate through all markets in a country | ``` any_market_present_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | market |
| any\_market\_with\_merchants | Iterate through all markets a country has active merchants | ``` any_market_with_merchants = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | market |
| any\_mercenary | Iterate through all mercenaries in the world | ``` any_mercenary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | mercenary |
| any\_mercenary\_sub\_unit | Iterate through all subunits in a Mercenary | ``` any_mercenary_sub_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | mercenary | sub\_unit |
| any\_merchant\_in\_market | Iterate through all merchants in a market | ``` any_merchant_in_market = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | country |
| any\_navy | Iterate through all navies in a country | ``` any_navy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | unit |
| any\_neighbor\_area | Iterate through all neighboring areas in a area | ``` any_neighbor_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | area |
| any\_neighbor\_country | Iterate through all neighbour countries | ``` any_neighbor_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_neighbor\_location | Iterate through all neighbors of a location | ``` any_neighbor_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | location |
| any\_neighbor\_province\_definition | Iterate through all neighboring ProvinceDefinitions in a ProvinceDefinition | ``` any_neighbor_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province\_definition |
| any\_new\_world\_goods | Iterate through all new-world goods | ``` any_new_world_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| any\_nomad\_countries\_in\_location | Iterate through all nomad pop countries in a location | ``` any_nomad_countries_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | country |
| any\_non\_state\_religion\_location | Iterate through all NonStateReligion locations in a country | ``` any_non_state_religion_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_old\_world\_goods | Iterate through all old-world goods | ``` any_old_world_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | goods |
| any\_other\_core\_country | Iterate through all other countries which have a core on the current country | ``` any_other_core_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_other\_country | Iterate through all other countries | ``` any_other_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_other\_great\_power | Iterate through all other great powers | ``` any_other_great_power = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_other\_religion\_in\_same\_group | Iterate through all other religions that has the same group as Religion | ``` any_other_religion_in_same_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | religion |
| any\_other\_revolutionary | Iterate through all other revolutionary countries | ``` any_other_revolutionary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_overlord\_or\_above | Iterate through your overlord, your overlord's overlord, and so on | ``` any_overlord_or_above = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_ownable\_location | Iterate through all ownable location | ``` any_ownable_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | location |
| any\_ownable\_location\_in\_area | Iterate through all ownable Locations in an area | ``` any_ownable_location_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | location |
| any\_ownable\_location\_in\_continent | Iterate through all ownable Locations in a continent | ``` any_ownable_location_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | continent | location |
| any\_ownable\_location\_in\_province\_definition | Iterate through all ownable Locations in a province definition | ``` any_ownable_location_in_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | location |
| any\_ownable\_location\_in\_region | Iterate through all ownable Locations in a region | ``` any_ownable_location_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | location |
| any\_ownable\_location\_in\_scripted\_geography | Iterate through all ownable Locations in a scripted geography | ``` any_ownable_location_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | location |
| any\_ownable\_location\_in\_sub\_continent | Iterate through all ownable Locations in a sub continent | ``` any_ownable_location_in_sub_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | sub\_continent | location |
| any\_owned\_building | Iterate through all the owned buildings in a country | ``` any_owned_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | building |
| any\_owned\_foreign\_building | Iterate through all the owned foreign buildings in a country | ``` any_owned_foreign_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | building |
| any\_owned\_foreign\_building\_location | Iterate through all the location of owned foreign buildings in a country | ``` any_owned_foreign_building_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owned\_foreign\_building\_region | Iterate through all the regions of owned foreign buildings in a country | ``` any_owned_foreign_building_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | region |
| any\_owned\_location | Iterate through all owned location in a country | ``` any_owned_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owned\_nomad\_pop | Iterate through all owned nomad pops in a country | ``` any_owned_nomad_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | pop |
| any\_owned\_non\_rural\_location | Iterate through all owned non-rural locations in a country | ``` any_owned_non_rural_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owned\_rural\_location | Iterate through all owned rural locations in a country | ``` any_owned_rural_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_owner\_in\_region | Iterate through all the countries that own locations in a region | ``` any_owner_in_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | region | country |
| any\_parent | Iterate through parents (order: father, mother) of a character. | ``` any_parent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_participating\_countries | Iterate through all Countrys participating in 1 side of a combat | ``` any_participating_countries = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | country |
| any\_participating\_units | Iterate through all units participating in 1 side of a combat | ``` any_participating_units = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | unit |
| any\_past\_liturgical\_dialect | Iterate through all liturgical dialects a country has had before | ``` any_past_liturgical_dialect = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_policy\_in\_law | Iterate through all policies that are part of the law scope | ``` any_policy_in_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | law | policy |
| any\_political\_border\_location | Iterate through all owned location in a country which border another country. | ``` any_political_border_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_pop | Iterate through all pops in a location or country | ``` any_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, location | pop |
| any\_pops\_supporting\_rebel | Iterate through all pops supporting a rebel | ``` any_pops_supporting_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | rebels | pop |
| any\_port\_in\_country | Iterate through all Ports in a country | ``` any_port_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_possible\_disaster | Iterate through all possible disasters for a country | ``` any_possible_disaster = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | disaster |
| any\_possible\_parliament\_issue | Iterate through all possible parliament issues in a country's or an international organization's parliament | ``` any_possible_parliament_issue = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, international\_organization | parliament\_issue |
| any\_possible\_policy | Iterate through all possible policies of a Country that is not currently implemeted | ``` any_possible_policy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | policy |
| any\_possible\_privilege | Iterate through all possible & allowed estate privileges of a Country that is not currently implemeted | ``` any_possible_privilege = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | estate | estate\_privilege |
| any\_possible\_recruit\_location | Iterate through all possible recruit locations in a country | ``` any_possible_recruit_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_present\_country | Iterate through all countries in the specified geography | ``` any_present_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area, continent, location, province\_definition, region, scripted\_geography, sub\_continent | country |
| any\_present\_culture\_in\_country | Iterate through all cultures present in the country. | ``` any_present_culture_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_present\_culture\_in\_location | Iterate through all cultures present in the location. | ``` any_present_culture_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | culture |
| any\_present\_overlord | Iterate through all countries which have a subject in the specified geography | ``` any_present_overlord = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area, continent, location, province\_definition, region, scripted\_geography, sub\_continent | country |
| any\_present\_religion\_in\_country | Iterate through all religions present in the country. | ``` any_present_religion_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | religion |
| any\_present\_religion\_in\_location | Iterate through all religions present in the location. | ``` any_present_religion_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | religion |
| any\_primary\_or\_accepted\_culture | Iterate through primary culture and all accepted cultures in a country. Primary is ordered first. | ``` any_primary_or_accepted_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_primary\_or\_accepted\_or\_tolerated\_culture | Iterate through primary culture and all accepted and all tolerated cultures in a country. Primary is ordered first. | ``` any_primary_or_accepted_or_tolerated_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_privateer | Iterate through all privateers in the world | ``` any_privateer = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | privateer |
| any\_privateer\_from\_country | Iterate through all privateers a country has | ``` any_privateer_from_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | privateer |
| any\_privateer\_in\_area | Iterate through all privateers in a area | ``` any_privateer_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | privateer |
| any\_production\_method | Iterate through all types of production methods. | ``` any_production_method = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | production\_method |
| any\_production\_method\_of\_building | Iterate through all available production methods of the building. | ``` any_production_method_of_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | building | production\_method |
| any\_province | Iterate through all provinces in a country | ``` any_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | province |
| any\_province\_definition | Iterate through all existing province\_definition | ``` any_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | province\_definition |
| any\_province\_definition\_in\_area | Iterate through all province-definitions in an area | ``` any_province_definition_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | province\_definition |
| any\_province\_definition\_in\_scripted\_geography | Iterate through all province-definitions in a scripted geography | ``` any_province_definition_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | province\_definition |
| any\_province\_in\_area | Iterate through all provinces in an area | ``` any_province_in_area = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | area | province |
| any\_province\_in\_province\_definition | Iterate through all provinces in a province-definition | ``` any_province_in_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province |
| any\_rebel | Iterate through all Rebels in a country | ``` any_rebel = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | rebels |
| any\_region | Iterate through all existing regions | ``` any_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | region |
| any\_region\_in\_continent | Iterate through all regions in a sub-continent | ``` any_region_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | sub\_continent | region |
| any\_region\_in\_scripted\_geography | Iterate through all regions in a scripted geography | ``` any_region_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | region |
| any\_related\_country | Iterate through all related countries | ``` any_related_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_religion | Iterate through all religions | ``` any_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | religion |
| any\_religion\_for\_god | Iterate through all Religions of a God | ``` any_religion_for_god = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | god | religion |
| any\_religion\_in\_religion\_group | Iterate through all religions in a religion group. | ``` any_religion_in_religion_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | group | religion |
| any\_religion\_international\_organization | Iterate through all international organisations of a religion | ``` any_religion_international_organization = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | international\_organization |
| any\_religious\_aspect | Iterate through all religious aspects of a Country | ``` any_religious_aspect = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | religious\_aspect |
| any\_religious\_focus | Iterate through all completed religious focuses of a Country | ``` any_religious_focus = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | religious\_focus |
| any\_religious\_school\_in\_religion | Iterate through all Religious Schools in a Religion | ``` any_religious_school_in_religion = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religion | religious\_school |
| any\_rented\_out\_mercenary | Iterate through mercenaries a country has rented out to the market | ``` any_rented_out_mercenary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | mercenary |
| any\_required\_goods | Iterate through all goods required by the scope production method. | ``` any_required_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | production\_method | goods |
| any\_reserves | Iterate through all subunits on the reserve of a combat-side | ``` any_reserves = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_retreated | Iterate through all subunits on the retreated of a combat-side | ``` any_retreated = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_revolutionary | Iterate through all revolutionary states | ``` any_revolutionary = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_right\_flank | Iterate through all subunits on the right-flank of a combat-side | ``` any_right_flank = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | combat\_side | sub\_unit |
| any\_rival | Iterate through all rival countries | ``` any_rival = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_road\_type | Iterate through all the road types | ``` any_road_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | road\_type |
| any\_royal\_marriage | Iterate through all royal married countries | ``` any_royal_marriage = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_ruler | Iterate through all characters that have ever been rulers in a country, including the dead | ``` any_ruler = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | character |
| any\_ruling\_countries | Iterate through countries a character rulers | ``` any_ruling_countries = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | country |
| any\_sound\_toll\_in\_country | Iterate through all Sound Tolls in a country | ``` any_sound_toll_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | location |
| any\_spouse | Iterate through all spouses of a character | ``` any_spouse = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character |
| any\_spy\_network\_built\_in\_us | Iterate through all countries building spy networks | ``` any_spy_network_built_in_us = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_sub\_continent | Iterate through all existing sub\_continents | ``` any_sub_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | sub\_continent |
| any\_sub\_continent\_in\_continent | Iterate through all sub-continents in a continent | ``` any_sub_continent_in_continent = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | continent | sub\_continent |
| any\_sub\_continent\_in\_scripted\_geography | Iterate through all sub-continents in a scripted geography | ``` any_sub_continent_in_scripted_geography = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | scripted\_geography | sub\_continent |
| any\_sub\_unit | Iterate through all subunits in a unit | ``` any_sub_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | unit | sub\_unit |
| any\_subject | Iterate through all subject countries | ``` any_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_subject\_or\_below | Iterate through all subject countries and their subject countries, and so on | ``` any_subject_or_below = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_tolerated\_culture | Iterate through all Tolerated cultures in a country | ``` any_tolerated_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_trade | Iterate through all trades in a Country | ``` any_trade = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | trade |
| any\_union\_partner | Iterate through all countries which are in a personal union with the current country scope. | ``` any_union_partner = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_unit | Iterate through all units in a country | ``` any_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | unit |
| any\_unit\_in\_location | Iterate through all units in a location | ``` any_unit_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | unit |
| any\_valid\_religion\_for\_aspect | Iterate through all religion that an aspect can be for | ``` any_valid_religion_for_aspect = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | religious\_aspect | religion |
| any\_voter | Iterate through all voters in an active resolution | ``` any_voter = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | active\_resolution | country |
| any\_war | Iterate through all wars going on globally | ``` any_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | war |
| any\_war\_participant | Iterate through all participants of a war | ``` any_war_participant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |
| any\_weather\_system\_in\_location | Iterate through all weather systems in a location | ``` any_weather_system_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | weather\_system |
| any\_west\_of\_province\_definition | Iterate through all province-definitions west of a province-definition | ``` any_west_of_province_definition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province\_definition | province\_definition |
| any\_work\_of\_art | Iterate through all WorkOfArts in the world | ``` any_work_of_art = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | work\_of\_art |
| any\_work\_of\_art\_by\_creator | Iterate through all work\_of\_art by a particular artist | ``` any_work_of_art_by_creator = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | work\_of\_art |
| any\_work\_of\_art\_in\_country | Iterate through all work\_of\_art in a country | ``` any_work_of_art_in_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | work\_of\_art |
| any\_work\_of\_art\_in\_location | Iterate through all work\_of\_art in a location | ``` any_work_of_art_in_location = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | location | work\_of\_art |
| area\_average\_control | Checks the average\_control of an area |  | area | value |
| area\_average\_integration | Checks the average\_integration of an area |  | area | value |
| area\_exploration\_progress | gets the exploration progress (0..1) for a country in the scope area |  | area | value |
| army\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| army\_size | Checks if a country has a certain army size |  | country | value |
| army\_size\_percentage | Checks if a country has a certain percentage of regiments compared to expected size |  | country | value |
| army\_tradition | How much army tradition does the country/IO have? |  | country, international\_organization | value |
| army\_tradition\_percentage | How high the percentage of the current army tradition compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| art\_progress | The amount of progress an artist has made on a work of art |  | character | value |
| art\_quality | Checks the quality of the artwork |  | work\_of\_art | value |
| artist\_skill | The artist skill of the character |  | character | value |
| artist\_type | Checks if a character is a specific type of artist |  | character |  |
| assert\_if | Conditionally cause an assert during run time | ``` assert_if = {  limit = { <trigger> }  text = <string> } ``` | none |  |
| assert\_read | Conditionally cause an assert during read time | ``` assert_read = yes/<string> ``` | none |  |
| at\_war | country is at war |  | country | boolean |
| available\_merchant\_capacity | gets the market available merchant capacity for a country in the scope market |  | market | value |
| average\_control\_in\_home\_region | Checks the average control in the home region |  | country | value |
| average\_country\_literacy | Checks if a country has a certain average\_literacy |  | country | value |
| average\_estate\_satisfaction | How high is the average estate satisfaction in the country? The crown estate gets ignored here. |  | country | value |
| average\_location\_literacy | Checks if a location has a certain average literacy |  | location | value |
| average\_satisfaction | Checks if a location has a certain average satisfaction of its pops |  | location | value |
| average\_special\_status\_power | Get the average political power of the target special status. | ``` average_special_status_power = {  type = <special status>  value <operator> <float> }  or average_special_status_power(<special status>) ``` | international\_organization | value |
| besieger\_strength | Check the total strength of the besiegers for the siege in scope |  | siege | value |
| birth\_age | What Age was the character born in? E.g. age\_1\_traditions |  | character | age |
| blocks\_full\_annexation | Checks if the peace treaty blocks full annexation. |  | peace\_treaty | boolean |
| border\_distance\_to | gets distance between borders of two nations or a location and a nation. | ``` border_distance_to = {  country = x  value [operator] y }  or border_distance_to(country) ``` | country, location | value |
| building\_can\_be\_destroyed\_by | Check if the target country scope is capable of destroying the current building scope |  | building | country |
| building\_can\_be\_upgraded\_by | Checks if a building can be upgraded by the target country |  | building | country |
| building\_category | Checks if a building is linked to a certain category |  | building |  |
| building\_efficiency | does the location have the specific efficiency of a building |  | location | value |
| building\_employed\_amount | What's the current effective amount of employed workers? |  | building | value |
| building\_employment\_size\_amount | What's the max workers amount? |  | building | value |
| building\_goods\_input | Check how much goods the scope building requires. |  | building | value |
| building\_index | Checks building index (order in which it was built) |  | building | value |
| building\_level | Check the level of this Building? |  | building | value |
| building\_levels\_under\_construction | Check the level of this Building? |  | building | value |
| building\_manpower\_produced | Checks how much manpower the building type produces |  | building\_type | value |
| building\_max\_level | Gets the max level for a building |  | building | value |
| building\_pop\_type | Checks if a building is linked to a certain pop type |  | building |  |
| building\_potential\_profit | Checks how much profit the building could make if at full worker capacity |  | building | value |
| building\_produced\_goods | Checks if a building produces a certain good |  | building | goods |
| building\_profit | Checks building profit |  | building | value |
| building\_sailors\_produced | Checks how many sailors the building type produces |  | building\_type | value |
| building\_type\_is\_obsolete | Checks if the specified building type is obsolete for the scope country. |  | country | building\_type |
| building\_type\_max\_level | Gets the max level for a building type in a location. | ``` building_type_max_level = {  building_type = <building type scope>  [owner = <country scope>]  value <operator> <compare value> } ``` | location | value |
| cabinet\_action\_type | Checks the type of cabinet action (ADM/DIP/MIL) |  | cabinet\_action |  |
| calc\_true\_if | Returns true if the specified number of sub-triggers return true | ``` calc_true_if = {  amount = 2  <trigger>  <trigger>  <trigger> } ``` | none |  |
| can\_add\_relation | Can the country have the specified scripted relation with another country. | ``` can_add_relation = {  first = <country>  second = <country>  type = <relation type> } ``` | none |  |
| can\_annex\_members | Can a country annex members in the scope international organization? |  | international\_organization | country |
| can\_be\_bribe | Check if the parliament agenda can also serve as a bribe |  | parliament\_agenda | boolean |
| can\_be\_force\_broken\_in\_peace\_treaty | Check if a subject type can be force broken in a peace treaty |  | subject\_type | boolean |
| can\_become\_rank | Check if a location can become the supplied location rank |  | location | location\_rank |
| can\_build\_building | Checks if the location/country can build the specified building. Location only checks local requirements, country checks the country scope requirements. |  | country, location | building\_type |
| can\_build\_unit\_type | Checks if the country can build the specified unit type. |  | country | unit\_type |
| can\_build\_units\_of\_category | Checks if the country can build units of the specified category. |  | country | sub\_unit\_category |
| can\_create\_casus\_belli\_of\_type\_on | Can the country see and create a cb of the supplied type on the target? | ``` can_create_casus_belli_of_type_on = {  type = <cb type key>  target = <country> } ``` | country |  |
| can\_declare\_no\_cb\_war\_on | Can the country declare a war without any casus belli on the target country? |  | country | country |
| can\_declare\_war\_on | Check if the current country could declare war on the target country |  | country | country |
| can\_do\_generic\_action | Is the country capable of doing the specified generic action right now? | ``` can_do_generic_action = {  generic_action = <generic action>  <parameters> } ``` | country |  |
| can\_execute\_prisoners | can the prisoners in this unit be executed |  | unit | boolean |
| can\_find\_trade\_route | can the country find a trade route from market a to market b? | ``` can_find_trade_route = {  from = <market>  to = <market> } ``` | country |  |
| can\_form | Checks if the country can form the specified formable country. |  | country | formable\_country |
| can\_hire\_prisoners\_as\_mercenaries | can we hire the prisoners in this unit as mercenaries |  | unit | boolean |
| can\_initiate\_policy\_votes | Can a country initiate votes in the scope international organization? |  | international\_organization | country |
| can\_join\_as\_attacker | Can the target country join the war in scope as attacker ? |  | war | country |
| can\_join\_as\_defender | Can the target country join the war in scope as defender ? |  | war | country |
| can\_join\_defensive\_war\_with | Can the country join in a defensive war with the scope country? |  | country | country |
| can\_join\_international\_organization | Can we join the supplied international organization? |  | country | international\_organization |
| can\_join\_offensive\_war\_with | Can the country join in an offensive war with the scope country? |  | country | country |
| can\_lead\_international\_organization | Can the country lead the specified international organization? |  | country | international\_organization |
| can\_leave\_international\_organization | Can we leave the supplied international organization? |  | country | international\_organization |
| can\_make\_subject\_of | Can the country in scope become a subject of the target country ? Same checks as the peace treaty become-subject. | ``` can_make_subject_of = {  target = <country>  type = <subject_type>  [ignore_war_limitation = yes]  #use to ignore allowed_subjugation of the war } ``` | country |  |
| can\_pay\_price | Can the country pay the specified price? |  | country | price |
| can\_raise\_army\_levies | Checks if the country can raise army levies |  | country | boolean |
| can\_raise\_levies | Checks if the country can raise any kind of levies |  | country | boolean |
| can\_raise\_navy\_levies | Checks if the country can raise navy levies |  | country | boolean |
| can\_ransom\_prisoners | can the prisoners in this unit be ransomed |  | unit | boolean |
| can\_research\_advance | Checks if a country can research but has not yet researched a specific advance. |  | country |  |
| can\_rival | Could the current country scope rival the target country ignoring slots and range? |  | country | country |
| can\_see\_religious\_aspect | Checks if the input religious aspect is visible for the country in scope. |  | country | religious\_aspect |
| can\_see\_situation | Checks if the 'visible' trigger of the target situation is fulfilled for the country scope. |  | country | situation |
| can\_sell\_prisoners\_into\_slavery | can the prisoners in this unit be sold as slaves |  | unit | boolean |
| can\_serve\_in\_cabinet\_of | Checks if the character can serve in the cabinet of the target country |  | character | country |
| can\_share\_maps\_with | Country can share maps with the supplied country? |  | country | country |
| can\_start\_tutorial\_lesson | Can the specified tutorial lesson be started? | ``` can_start_tutorial_lesson = reactive_advice_succession ``` | none |  |
| can\_upgrade\_subunit | returns trus if the subunit can be upgraded |  | unit | boolean |
| can\_upgrade\_unit | returns trus if the unit can be upgraded |  | unit | boolean |
| can\_use\_agenda\_bribe | Checks if estate type is allowed in parliament |  | country |  |
| can\_vote\_in\_parliament | Can the countrs scope vote in the target international organization? |  | country | international\_organization |
| cancel\_exploration\_utility | Utility of an cancelling and exploration to the country | ``` cancel_exploration_utility(<area>)  or exploration_utility = {  area = <area>  value <operator><threshold> } ``` | country | value |
| care\_about\_producing\_heirs | Check if a government type cares about heirs |  | government | boolean |
| cb\_creation\_progress\_against | Checks the progress of the casus belli creation against the target country in percentage. | ``` cb_creation_progress_against = {  target = <country scope>  value = <script_value> }  or cb_creation_progress_against(<country scope>) ``` | country | value |
| character\_modifier\_strength | Does the scoped character have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` character_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "character_modifier_strength(<modifier key>)" ``` | character |  |
| character\_nickname | Check if the character has the same name key as their nickname |  | character |  |
| climate | Checks if a location is of a specific climate |  | location |  |
| climate\_count | Returns the amount of owned locations with the specified climate. | ``` climate_count = {  type = <climate scope>  value <operator> <value> } or "climtae_count(<climate scope>)" ``` | country |  |
| climate\_percent | Returns the percentage of owned locations with the specified climate. | ``` climate_percent = {  type = <climate scope>  value <operator> <value> } or "climate_percent(<climate scope>)" ``` | country |  |
| colonial\_charter\_progress | Progress of a colonial charter | ``` colonial_charter_progress(<province definition>)  or colonial_charter_progress = {  province_definition = <province definition>  value <operator><threshold> } ``` | country | value |
| colonial\_charter\_utility | Utility of a colonial charter | ``` colonial_charter_utility(<province definition>|<source province>)  or colonial_charter_utility = {  province_definition = <province definition>  source = <source province>  value <operator><threshold> } ``` | country | value |
| colonial\_charter\_value | value of the colonial charter |  | colonial\_charter | value |
| colonial\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| colonial\_range | The colonial range of the country |  | country | value |
| combat\_side\_strength | Checks the strength of the combat side in scope |  | combat\_side | value |
| combined\_special\_status\_power | Get the combined special status power of ALL special statuses in the international organization |  | international\_organization | value |
| combined\_unique\_special\_status\_power | Get the combined special status power of all countries with their highest ranking special status in the international organization |  | international\_organization | value |
| compare\_value | Compare the current value. |  | value | value |
| complacency | How much complacency does the country/IO have? |  | country, international\_organization | value |
| complacency\_percentage | How high the percentage of the current complacency compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| conquer\_desire | Gets how much the AI wants to conquer the supplied country | ``` conquer_desire(<target>)  or conquer_desire = {  target = <country link>  value <operator> <amount> } ``` | country | value |
| conquistador\_utility | Utility of a conquistador | ``` conquistador_utility(<area>)  or conquistador_utility = {  area = <area>  value <operator><threshold> } ``` | country | value |
| controls | Does the country control a specific location? |  | country | location |
| country\_art\_quality | Checks the total art quality in a Country |  | country | value |
| country\_can\_join\_international\_organization | Can we add a country to the supplied international organization? |  | country | international\_organization |
| country\_combined\_special\_status\_power | Get the political power of the country within the target international organization with all of its special statuses combined. | ``` country_combined_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or country_combined_special_status_power(<IO>) ``` | country | value |
| country\_combined\_special\_status\_power\_fraction | Get the political power fraction of the country within the target international organization with all of its special statuses combined. | ``` country_combined_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or country_combined_special_status_power(<IO>) ``` | country | value |
| country\_economical\_base | Checks the total economical base of a country |  | country | value |
| country\_estate\_loan\_size | Checks the size of a loan given by the estates to a country |  | country | value |
| country\_exists | Does the country exist? |  | none | country |
| country\_has\_been\_member\_for\_years | Checks if the country has been in the current international organization scope for x years. | ``` country_has_been_member_for_years = {  country = <country scope>  value = <years> }  or country_has_been_member_for_years(country) ``` | international\_organization | value |
| country\_has\_disease | Checks the presence of a disease in a country. | ``` country_has_disease = <disease> ``` | country | disease |
| country\_has\_disease\_outbreak | Checks the presence of a disease outbreak in a country. | ``` country_has_disease_outbreak = <disease> ``` | country | disease\_outbreak |
| country\_has\_estate | Checks if the country has the specific Estate |  | country | estate\_type |
| country\_has\_special\_status | Does the country have a special status in this international organization? |  | international\_organization |  |
| country\_highest\_rated\_special\_status\_power | Get the political power of the country within the target international organization of its highest prioritized special status. | ``` highest_rated_special_status_power = {  international_organization = <IO>  value <operator> <float> }  or highest_rated_special_status_power(<IO>) ``` | country | value |
| country\_interaction\_acceptance | How high is the target country's AI value of accepting the country interaction done by the current country scope? Always return 0 if the target is a player | ``` country_interaction_acceptance = {  type = <country interaction>  target = <country>  value = <script_value> }  or country_interaction_acceptance(<country interaction>|<country>) ``` | country | value |
| country\_loan\_capacity | Checks how much more money a country can borrow |  | country | value |
| country\_modifier\_strength | Does the scoped country have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` country_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "country_modifier_strength(<modifier key>)" ``` | country |  |
| country\_rank\_level | level of the country rank of a country |  | country | value |
| country\_rank\_level\_on\_date | level of the country rank of a country on a particular date |  | country | value |
| country\_strength | Strength of a country, including their troop numbers as well as tax base and manpower |  | country | value |
| country\_tax\_base | Checks the total tax base of a country |  | country | value |
| country\_total\_army\_levy\_size | Gets the total number of army levies available to the country |  | country | value |
| country\_total\_navy\_levy\_size | Gets the total number of navy levies available to the country |  | country | value |
| country\_type | Checks what type a country is (location, pop, building, army, navy) |  | country |  |
| court\_language\_utility | Utility of a court language accorting to Ai |  | dialect, language | value |
| court\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| create\_market\_utility | Utility of creating a market | ``` create_market_utility(<location>)  or create_market_utility = {  location = <location>  value <operator><threshold> } ``` | country | value |
| cultural\_influence | How much influence does the culture have? |  | culture | value |
| cultural\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| cultural\_tradition | How much tradition does the culture have? |  | culture | value |
| cultural\_unity | Checks the fraction of the population sharing the country's primary culture |  | country | value |
| cultural\_view | does the culture have the specified opinion of the target? | ``` cultural_view = {  target = <target culture>  value <operator> <script_value> } ``` | culture |  |
| culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population_percentage = {  culture_group = <culture group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| culture\_group\_percentage\_in\_country | The percentage of a specific culture group in the current country |  | country | value |
| culture\_group\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_group_population = {  culture_group = <culture group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| culture\_group\_population\_in\_country | The number of pops of a specific culture group in the current country |  | country | value |
| culture\_opinion\_impact | Opinion impact of a particular culture on another | ``` culture_opinion_impact(<culture link>)  or culture_percentage = {  culture = <culture link>  value <operator> <amount> } ``` | culture | value |
| culture\_percentage | Gets the percentage of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| culture\_percentage\_in\_area | gets the percentage of the population that follow a particular culture in the area | ``` culture_percentage_in_area = {  country = <country>  culture = <culture>  value <operator> <script_value> } ``` | area | value |
| culture\_percentage\_in\_country | The percentage of a specific culture in the current country |  | country | value |
| culture\_population | Gets the absolute number of the population that follow a particular culture in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| culture\_population\_in\_country | The number of pops of a specific culture in the current country |  | country | value |
| currency\_percentage\_towards\_limit | Gets currency progress towards specified limit |  | country, international\_organization | value |
| currency\_utility | Utility of an amount of currency to the country | ``` currency_utility(<currency>|<amount>)  or currency_utility = {  currency = <currency>  amount = <amount> } ``` | country | value |
| current\_age | Checks if it is a certain age! |  | none |  |
| current\_date | Compare the current ingame date. |  | none | date |
| current\_mission\_task | Checks if the country has the specified mission task in progress. |  | country | mission\_task |
| current\_month | Compare the current ingame month (1..12) |  | none | value |
| current\_ruler\_term\_years | Checks the current ruler term length in years. |  | country | value |
| current\_tooltip\_depth | What is the number of tooltips open right now? |  | none | value |
| current\_year | Compare the current ingame year |  | none | value |
| custom\_description | Wraps triggers that get a custom description instead of the auto-generated one | ``` custom_description = { 	text = <trigger_localization_key> 	subject = <optional subject scope> #defaults to current scope 	object = <optional object scope> 	value = <optional script value> 	... triggers ... } ``` | none |  |
| custom\_tooltip | Replaces the tooltips for the enclosed triggers with a custom text | ``` custom_tooltip = { 	text = <text> 	subject = <scope> (optional) 	<trigger> } ``` | none |  |
| days\_as\_rebel | Check how many days the character has been a rebel. |  | character | value |
| days\_of\_service\_as\_admiral | Check how many days the character has served as an admiral. |  | character | value |
| days\_of\_service\_as\_general | Check how many days the character has served as a general. |  | character | value |
| days\_of\_service\_in\_cabinet | Check how many days the character has served in a cabinet. |  | character | value |
| days\_since\_disaster\_end | Checks if x days have passed since the end of the disaster. Returns -1 if the disaster has never ended. |  | disaster | value |
| days\_since\_disaster\_start | Checks if x days have passed since the start of the disaster. Returns -1 if the disaster has never started. |  | disaster | value |
| days\_since\_situation\_end | Checks if x days have passed since the end of the situation. Returns -1 if the situation has never ended. |  | situation | value |
| days\_since\_situation\_start | Checks if x days have passed since the start of the situation. Returns -1 if the situation has never started. |  | situation | value |
| debug\_log | Log whether the parent trigger succeeded or failed |  | none |  |
| debug\_log\_details | Log whether the parent trigger succeeded or failed. Log which children succeeded or failed |  | none |  |
| debug\_only | Checks if the game is in debug mode or not. |  | none | boolean |
| defensive\_alliance\_strength | Strength of a defensive alliance, including the nation with all countries giving defensive support and those that can be called in for defensive wars |  | country | value |
| definition\_is\_for\_levy | subunit definition is for levies |  | sub\_unit | boolean |
| demands\_goods | Check if the market scope has a demand for the target goods. |  | market | goods |
| demands\_goods\_by\_pops | Check if the market has any pop demand for the target goods. |  | market | goods |
| dependency\_length\_days | returns the number of days a country has been in a dependency (overlord/subject) relationship with the target country. | ``` dependency_length_days = {  target = <country>  value <comparator> <script_value> } ``` | country | value |
| destroy\_market\_utility | Utility of destroying a market | ``` destroy_market_utility(<location>)  or destroy_market_utility = {  location = <location>  value <operator><threshold> } ``` | country | value |
| development | Checks if a location has a certain Development |  | location | value |
| devotion | How much devotion does the country/IO have? |  | country, international\_organization | value |
| devotion\_percentage | How high the percentage of the current devotion compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| dip | The dip ability of the character |  | character | value |
| diplomatic\_capacity\_of\_new\_relation | Diplomatic capacity that will be used if the country obtains this diplomatic relation |  | country | value |
| diplomatic\_capacity\_without\_maintenance | Diplomatic capacity that country would have without paying anything for maintenance |  | country | value |
| diplomatic\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| diplomatic\_range | Is the target country within diplomatic range? |  | country | value |
| disaster\_has\_ended | Check if a Disaster has ended |  | disaster | boolean |
| disaster\_is\_active | Check if a Disaster is active |  | disaster | boolean |
| discount\_needed\_for\_law\_change | Checks how much more discount % is needed for Ai to change a law |  | country | value |
| disease\_affects\_pops\_here | Checks if a disease is affecting some migrated pops here. |  | location | disease |
| disease\_country\_deaths | Checks the number of deaths from a disease in a country. | ``` disease_country_deaths(<disease>) disease_country_deaths = {  target = <disease>  value <comparator> <real> } ``` | country | value |
| disease\_has\_outbreak\_here | Checks if a disease has an outbreak in a location or subunit. |  | location, sub\_unit | disease |
| disease\_has\_stagnated | Checks if a disease has stagnated in a location or subunit. |  | location, sub\_unit | disease |
| disease\_is\_active | Checks if a disease is active in the world. |  | none | disease |
| disease\_outbreak\_country\_deaths | Checks the number of deaths from an outbreak in a country. | ``` disease_outbreak_country_deaths(<disease_outbreak>) disease_outbreak_country_deaths = {  disease_outbreak = <disease_outbreak>  value <comparator> <real> } ``` | country | value |
| disease\_outbreak\_is\_active | Checks if a disease outbreak is active in the world. |  | none | disease\_outbreak |
| disease\_outbreak\_presence | Checks the presence of a disease in a location or subunit. | ``` disease_outbreak_presence(<disease_outbreak>)  or disease_outbreak_presence = {  disease_outbreak = <disease_outbreak>  value <comparator> <real> } ``` | location, sub\_unit | value |
| disease\_outbreak\_total\_deaths | How many people have been killed by this disease outbreak? |  | disease\_outbreak | value |
| disease\_presence | Checks the presence of a disease in a location or subunit. | ``` disease_presence(<disease>)  or disease_presence = {  disease = <disease>  value <comparator> <real> } ``` | location, sub\_unit | value |
| disease\_resistance | Checks the resistance to a disease in a location or subunit. | ``` disease_resistance(<disease>)  or disease_resistance = {  target = <disease>  value <comparator> <real> } ``` | location, sub\_unit | value |
| disease\_total\_deaths | How many people have been killed by this disease? |  | disease | value |
| distance\_to | gets distance between locations |  | location | value |
| distance\_to\_area | gets distance between a location and an area |  | location | value |
| distance\_to\_squared | gets distance squared as the crow flies between locations (much quicker than distance\_to, useful if you're just comparing) |  | location | value |
| does\_estate\_want\_other\_policy | Checks if a country has at least one law for which the input estate want another policy |  | country |  |
| does\_owner\_want\_to\_give\_away | Check if a province's owner wants to give it away to a subject |  | province | boolean |
| doom | How much doom does the country/IO have? |  | country, international\_organization | value |
| doom\_percentage | How high the percentage of the current doom compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| dynastic\_power | Returns the dynastic power of the scope dynasty or country. For countries, check ruler dynasty or heir dynasty if in regency. | ``` dynastic_power = {  international_organization = <IO>  value <operator> <script_value> }  or dynastic_power(<IO>) ``` | country, dynasty | value |
| dynasty\_exists | does a tag exist |  | none |  |
| dynasty\_modifier\_strength | Does the scoped dynasty have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` dynasty_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "dynasty_modifier_strength(<modifier key>)" ``` | dynasty |  |
| dynasty\_name | if a dynasty a special name-key |  | dynasty |  |
| education | Checks if a character has a specific education |  | character |  |
| effective\_skill | Check the skill level of this cabinet |  | cabinet | value |
| eligible\_for\_cabinet | Is this estate type eligible for the cabinet in the target country? | ``` eligible_for_cabinet = {  target = <target country> } ``` | estate\_type |  |
| employment\_percentage | Checks if a location has a certain unemployement percentage |  | location | value |
| employment\_size | Returns the employment size of a building type per building level |  | building\_type | value |
| employment\_system\_desire | returns how much the country wants the target employment system. | ``` employment_system_desire = {  target = <employment system>  value <comparator> <script_value> } ``` | country | value |
| estate\_gold | The gold of an estate |  | estate | value |
| estate\_loan\_interest | Checks the interest of a loan |  | country | value |
| estate\_max\_tax | the current max-tax of an estate in a country | ``` estate_max_tax(<estate_type link>)  or estate_max_tax = {  estate_type = <estate_type link>  value <operator> <amount> } ``` | country | value |
| estate\_opinion | the current opinion that an estate in a country has of another country | ``` estate_opinion(<estate_type link>|<country>)  or estate_opinion = {  estate_type = <estate_type link>  target = country  value <operator> <amount> } ``` | country | value |
| estate\_satisfaction | the current satisfaction of an estate in a country | ``` estate_satisfaction(<estate_type link>)  or estate_satisfaction = {  estate_type = <estate_type link>  value <operator> <amount> } ``` | country | value |
| estate\_tax | The current tax the estate has to pay |  | estate | value |
| estate\_tax\_rate | The current percentage of tax the estate has to pay. Returns 1 if the estate gets fully taxed even if the max possible tax is below 100% |  | estate | value |
| estate\_taxable\_income | The taxable income of an estate |  | estate | value |
| estate\_type\_allowed\_in\_cabinet | Checks if estate type is allowed in cabinet |  | country |  |
| estate\_type\_allowed\_in\_command | Checks if estate type is allowed in command of a unit |  | country |  |
| estate\_type\_allowed\_in\_parliament | Checks if estate type is allowed in parliament |  | country |  |
| exists | Checks whether the specified scope target exists (check for not being the null object) | ``` exists = from.owner.var:cool_var.mother ``` | none |  |
| expected\_army\_size | Checks if a country has a certain expected army size |  | country | value |
| expected\_navy\_size | Checks if a country expects to have a certain amount of ships |  | country | value |
| experience\_percentage | How many percent experience does this unit have??? |  | unit | value |
| exploration\_expected\_cost | gets the exploration expected cost for a country in the scope area |  | area | value |
| exploration\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| exploration\_monthly\_cost | what is the monthly cost of an exploration? |  | exploration | value |
| exploration\_monthly\_progress | what is the monthly progress of an exploration? |  | exploration | value |
| exploration\_needed\_time | gets the exploration needed time (months) for a country in the scope area |  | area | value |
| exploration\_progress | what is the progress of an exploration? |  | exploration | value |
| exploration\_time | what is the total needed progress of an exploration? |  | exploration | value |
| exploration\_utility | Utility of an exploration to the country | ``` exploration_utility(<area>|<character>)  or exploration_utility = {  area = <area>  character = <character>  value <operator><threshold> } ``` | country | value |
| favors | How much favors does the country have in the target? | ``` favors = {  target = X  value <operator> Y  or  value = { min max } } ``` | country | value |
| favors\_needed\_to\_annul\_relations\_with | Gets the number of favours needed to annul relations with the target country diplomatically | ``` "favors_needed_to_annul_relations_with(<target>)" or favors_needed_to_annul_relations_with = {  target = <country link>  value <operator> <amount> } ``` | country | value |
| fertility | The fertility of the character |  | character | value |
| food\_consumption | Amount of consumed food |  | location | value |
| food\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| food\_percentage | How many percent of food does this unit have??? |  | unit | value |
| food\_price | Checks how much the food in the current market costs |  | market | value |
| food\_production | Amount of food production |  | location | value |
| food\_value | Check the food value of the goods scope. |  | goods | value |
| forbids\_sovereign\_diplomacy | Check if a subject type restricts diplomacy |  | subject\_type | boolean |
| fort\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| garrison\_percentage | Checks the garrison percentage of the location in scope |  | location | value |
| garrison\_strength | Checks the garrison strength of the location in scope |  | location | value |
| get\_antagonism | how much of an antagonism type does the country have towards another country? |  | country | value |
| get\_opinion | how much of an opinion type does the country have towards another country? |  | country | value |
| get\_trust | how much of a trust type does the country have towards another country? |  | country | value |
| gfx\_culture\_applicable | Checks if a culture gfx applies to the scope object |  | character, country, culture, dynasty, graphical\_culture, location, pop, religion |  |
| gives\_fleet\_basing\_rights | Check if a subject type gives fleet basing rights |  | subject\_type | boolean |
| gives\_fleet\_basing\_rights\_to | Does the scope country give fleet basing rights to the specified country? |  | country | country |
| gives\_food\_access | Check if a subject type gives food access |  | subject\_type | boolean |
| gives\_food\_access\_to | Does the scope country give food access to the specified country? |  | country | country |
| gives\_isolation\_exemption\_to | Does the scope country give a trade isolation exemption to specified country? |  | country | country |
| gives\_military\_access\_to | Does the scope country give military access to the specified country? |  | country | country |
| giving\_scripted\_relation | Checks for giving scripted relation. | ``` giving_scripted_relation = {  target = country  type = <scripted type> } ``` | country |  |
| giving\_scripted\_relation\_of\_type | Checks if that scripted relation is given by the country scope to any other country. |  | country | relation\_type |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable_name  value >= <script_value> } ``` | none |  |
| global\_variable\_map\_size | Checks the size of a global variable map | ``` global_variable_map_size = {  name = <variable_name  value >= <script_value> } ``` | none |  |
| gold | How much gold does the country/IO have? |  | country, international\_organization | value |
| gold\_percentage | How high the percentage of the current gold compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| goods | Checks which good is in this trade |  | trade | goods |
| goods\_category | tests the goods category - raw\_material or produced |  | goods |  |
| goods\_demand\_in\_market | Checks how much demand exists of a good in the market. | ``` goods_demand_in_market = {  goods = <goods>  value = <script_value> }  or goods_demand_in_market(<goods>) ``` | market | value |
| goods\_method | tests the goods method - mining/farming/hunting/gathering |  | goods |  |
| goods\_output | Check how much goods the scope location produces. |  | location | value |
| goods\_supply\_in\_market | Checks how much supply exists of a good in the market. | ``` goods_supply_in_market = {  goods = <goods>  value = <script_value> }  or goods_supply_in_market(<goods>) ``` | market | value |
| government\_power | How much government power does the country/IO have? |  | country, international\_organization | value |
| government\_power\_percentage | How high the percentage of the current government power compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| great\_power\_ranking | Country's position in the list of great powers |  | country | value |
| great\_power\_score | Checks if a country has a certain Great Power Score |  | country | value |
| had\_disaster\_for\_years | Check if the country scope had the specified disaster type for a specific amount of years. | ``` had_disaster_for_years = {  disaster_type = <disaster type>  years = <years> }  or had_disaster_for_years(<disaster type>) ``` | country | value |
| harmony | How much harmony does the country/IO have? |  | country, international\_organization | value |
| harmony\_percentage | How high the percentage of the current harmony compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| has\_accepted\_culture | Check if a country has a culture as an accepted culture |  | country | culture |
| has\_accessible\_coastline | Does the area have a coastline with a port or not? |  | area | boolean |
| has\_active\_resolution | Does the scope international organization/situation have any active resolutions? |  | international\_organization, situation | boolean |
| has\_advance | Checks if a country has a certain advance |  | country |  |
| has\_advance\_available | Checks if a country has a certain advance available to research. Returns true if the advance has been researched already. |  | country |  |
| has\_advance\_for\_employment\_system | Does the country have the necessary advance to be able to adopt the supplied employment system? |  | country | employment\_system |
| has\_advance\_for\_succession\_law | Does the country have the necessary advance to be able to adopt the supplied succession law? |  | country | heir\_selection |
| has\_antagonism | does the country have an antagonism type towards another country? |  | country |  |
| has\_any\_active\_disaster | country has at least an active disaster |  | country | boolean |
| has\_any\_convertable\_pops | Check if a location has any pops that can be converted to state religion |  | location | boolean |
| has\_any\_culture\_group | If a culture belongs to any culture group. |  | culture | boolean |
| has\_any\_disease\_present | Checks if the location or subunit is affected by ANY disease active. |  | location, sub\_unit | boolean |
| has\_any\_mission\_active | Checks if the country has the specified mission as its currently active mission. |  | country | boolean |
| has\_any\_possible\_disaster | Country has at least one possible disaster about to strike |  | country | boolean |
| has\_art\_in\_progress | Checks if an artist is currently working on something |  | character | boolean |
| has\_assigned\_explorer | does the country have an assigned explorer in this area? |  | area | country |
| has\_autocephalous\_patriarchates | religion has autocephalous patriarchates |  | religion | boolean |
| has\_available\_marriage\_slot | Has the character got a slot available for another marriage? (i.e. are they unmarried for non-polygamous people, or have they got less than the max number of spouses for polygamous people) |  | character | boolean |
| has\_avatar | checks if a country has a particular avatar |  | country | avatar |
| has\_been\_formed | Checks if the formable has been formed already |  | formable\_country | boolean |
| has\_been\_influenced\_by\_parliament\_agenda | Checks if the country scope has already been influenced by an accepted parliament agenda in the target international organization's parliament. |  | country | international\_organization |
| has\_blocked\_treaties | Is the country blocked from doing treaties with country? |  | country | country |
| has\_breach | siege has breach |  | siege | boolean |
| has\_building | Checks if a location has a specific building |  | location | building\_type |
| has\_building\_with\_at\_least\_one\_level | Checks if a location has a specific building and it has at least one level |  | location |  |
| has\_building\_with\_graphical\_tag | Checks if a location has a building with the specified graphical tags |  | location |  |
| has\_building\_with\_graphical\_tag\_and\_at\_least\_one\_level | Checks if a location has a building with the specified graphical tags and at least one level |  | location |  |
| has\_cabinet\_action | is doing something in the cabinet |  | cabinet, character | boolean |
| has\_cached\_or\_cast\_vote\_for | Has the supplied country voted or has a cached vote from previous month on the supplied resolution for a specific target in the scope international organization/situation? |  | international\_organization, situation |  |
| has\_canonization | religion has canonization |  | religion | boolean |
| has\_cardinals | religion has Cardinals |  | religion | boolean |
| has\_casus\_belli | Checks if that war has a CB specified at all |  | war | boolean |
| has\_casus\_belli\_of\_type\_on | Does the country have a cb of the supplied type on the target? | ``` has_casus_belli_of_type_on = {  type = <cb type key>  target = <country> } ``` | country |  |
| has\_casus\_belli\_on | Does the country have a cb on the target? |  | country | country |
| has\_character\_modifier | Does the scoped character have a given modifier | ``` has_character_modifier = name ``` | character |  |
| has\_child\_education | Does the scoped child have a given education | ``` has_child_education = education ``` | character |  |
| has\_child\_education\_selected | Does the scoped child have any given education | ``` has_child_education_selected = yes ``` | character | boolean |
| has\_claim\_on\_province | Does the country have a casus belli targetting the specified province? |  | country | province |
| has\_colonial\_charter | does the province definition have a colonial charter belonging to the specified country |  | province\_definition | country |
| has\_colonial\_charter\_in | Does the country have a colonial charter in the target province\_definition? |  | country | province\_definition |
| has\_colonial\_charters | Does the country have colonial charters? |  | country | boolean |
| has\_colonial\_claim | country has a claim on a province definition? | ``` has_colonial_claim = <province definition> ``` | country | province\_definition |
| has\_combat | Check if a location has a combat |  | location | boolean |
| has\_commander | unit has a commander |  | unit | boolean |
| has\_completed\_religious\_focus | Checks if a country has completed a certain religious focus |  | country |  |
| has\_consort | country has a Consort |  | country | boolean |
| has\_cooldown | Does a country have a particular cooldown active |  | country, international\_organization |  |
| has\_core | Does the country has a core of a specific location? |  | country | location |
| has\_countries\_with\_antagonism | Country has antagonism towards them from other countries |  | country | boolean |
| has\_countries\_with\_coalition\_grade\_antagonism | Country has antagonism towards them from other countries to the point where they could form a coalition against them |  | country | boolean |
| has\_countries\_with\_near\_coalition\_grade\_antagonism | Country has antagonism towards them from other countries to the point where they are thinking of forming a coalition against them |  | country | boolean |
| has\_countries\_with\_timed\_antagonism | Country has temporary antagonism towards them from other countries |  | country | boolean |
| has\_country\_modifier | Does the scoped country have a given modifier | ``` has_country_modifier = name ``` | country |  |
| has\_culture\_group | If a culture belongs to a specific culture group. |  | culture | culture\_group |
| has\_culture\_with\_tag | Checks if a culture has the specified tags |  | culture |  |
| has\_customer | Check if a mercenary has a customer |  | mercenary | boolean |
| has\_diplomacy\_with | Does the country have a certain type of diplomatic relation with another. | ``` has_diplomacy_with = {  country = <country>  type = <type> } ``` | country |  |
| has\_discovered | Has the country discovered a specific location? |  | country | location |
| has\_discovered\_area | Has the country fully discovered the area? |  | country | area |
| has\_dlc | Does the host have this DLC |  | none |  |
| has\_doom | country has doom mechanics |  | country | boolean |
| has\_dynasty | character is in a Dynasty |  | character | boolean |
| has\_earthquakes | Check if a location has a Earthquakes |  | location | boolean |
| has\_elections | Checks if an international organization has electors |  | international\_organization | boolean |
| has\_embraced\_institution | Checks if a country has embraced an institution |  | country | institution |
| has\_employment\_system | Does the country has the supplied employment system? |  | country | employment\_system |
| has\_enabled\_currency | Checks what currency has been enabled for the international organization (manpower, sailors, gold) |  | international\_organization |  |
| has\_estate | Checks if a character is of a specific Estate |  | character | estate\_type |
| has\_estate\_privilege | Checks if a country has a certain estate privilege |  | country | estate\_privilege |
| has\_exploration | character/country is currently exploring |  | character, country | boolean |
| has\_exploration\_construction | character is currently preparing to explore |  | character | boolean |
| has\_exports | Check if a location has a Exports |  | location | boolean |
| has\_extended\_winter | does the area have extended winter or not? |  | area | boolean |
| has\_fired\_unique\_event | Checks if the game has already fired the unique event |  | none |  |
| has\_fixed\_liturgical\_language | religion has a set liturgical language |  | religion | boolean |
| has\_fort | Check if a location has any fort |  | location | boolean |
| has\_game\_rule | Is the given game rule setting enabled? | ``` has_game_rule = faster_conversion ``` | none |  |
| has\_gifted\_gold\_to | Has the country an active gold gift cooldown with the target country? |  | country | country |
| has\_global\_variable | Checks whether the specified global variable is set | ``` has_global_variable = name ``` | none |  |
| has\_global\_variable\_list | Checks whether the specified global variable list is set | ``` has_global_variable_list = name ``` | none |  |
| has\_global\_variable\_map | Checks whether the specified global variable map is set | ``` has_global_variable_map = name ``` | none |  |
| has\_graphical\_culture | Check if a culture has a graphical culture |  | culture |  |
| has\_graphical\_religion | Check if a religion has a graphical culture |  | religion |  |
| has\_heir | country has a Heir |  | country | boolean |
| has\_highest\_rated\_special\_status\_in\_international\_organization\_of\_type | Does the country have the specified special status as its highest ranking? |  | country |  |
| has\_historical\_rival | Does the scope country have the specified country as an historical rival? |  | country | country |
| has\_historical\_rivals | Does the scope country have historical rivals? |  | country | boolean |
| has\_holy\_sites | religion has holy sites |  | religion | boolean |
| has\_honor | religion has honor |  | religion | boolean |
| has\_imports | Check if a location has a imports |  | location | boolean |
| has\_institution | Checks if a country has an institution |  | location | institution |
| has\_insulted | Has the country an active insult cooldown with the target country? |  | country | country |
| has\_international\_organization\_modifier | Does the scoped international organization have a given modifier | ``` has_international_organization_modifier = name ``` | international\_organization |  |
| has\_invited\_religious\_figure | country has invited religious figures to work with them |  | country | boolean |
| has\_karma | religion has karma |  | religion | boolean |
| has\_land\_ownership\_rule | Checks if the international organization has a landownership rule set |  | international\_organization | boolean |
| has\_latest\_road\_to | Check if a location has the latest available road to the target location. Latest is determined by the owner of the location and what buildable road type has the highest level. |  | location | location |
| has\_law | Checks if a country has a certain law enabled | ``` has_law = <law_key> ``` | country | law |
| has\_leader | Does the exploration have a leader? |  | exploration | boolean |
| has\_levies | unit has levies |  | unit | boolean |
| has\_limited\_diplomacy | Check if the country has limited diplomacy |  | country | boolean |
| has\_loc\_key | Checks if certain key is assigned to a loan |  | loan |  |
| has\_local\_dlc | Does the host have this DLC |  | none |  |
| has\_local\_variable | Checks whether the specified local variable is set | ``` has_local_variable = name ``` | none |  |
| has\_local\_variable\_list | Checks whether the specified local variable list is set | ``` has_local_variable_list = name ``` | none |  |
| has\_local\_variable\_map | Checks whether the specified local variable map is set | ``` has_local_variable_map = name ``` | none |  |
| has\_location | Is the supplied location owned by the scope international organization? |  | international\_organization | location |
| has\_location\_modifier | Does the scoped province have a given modifier | ``` has_location_modifier = name ``` | location |  |
| has\_market\_construction | Is the location building a market? |  | location | boolean |
| has\_markets | country has market centers |  | country | boolean |
| has\_member | Checks if an international organization has a certain member |  | international\_organization | country |
| has\_mercenaries | unit has mercenaries |  | unit | boolean |
| has\_mercenary\_modifier | Does the scoped mercenary have a given modifier | ``` has_mercenary_modifier = name ``` | mercenary |  |
| has\_merchant | checks if the market has a merchant of the specific country. |  | market | country |
| has\_merchant\_power | does the market have a merchant power for? | ``` has_merchant_power = {  country = country  key = key } ``` | market |  |
| has\_migration | Check if a province definition has a migration going on |  | province\_definition | boolean |
| has\_mission\_task | Checks if the country has the specified mission task visible in its current mission. |  | country | mission\_task |
| has\_multiple\_players | Does the game have at least two players currently connected? |  | none | boolean |
| has\_mutual\_scripted\_relation | Checks for a mutual scripted relation. | ``` has_mutual_scripted_relation = {  target = country  type = <scripted type> } ``` | country |  |
| has\_mutual\_scripted\_relation\_of\_type | Checks if that scripted relation exists between the country scope and any other country. |  | country | relation\_type |
| has\_new\_world\_goods\_in\_market | Checks if a market has a supply of any new-world goods |  | market | boolean |
| has\_newsletter\_subscription | Has the player subscribed to the newsletter? |  | none | boolean |
| has\_nickname | Check if the character has any nick name set |  | character | boolean |
| has\_ongoing\_parliament\_debate | Country / international organization has an active parliament debate |  | country, international\_organization | boolean |
| has\_opinion | does the country have an opinion type towards another country? |  | country |  |
| has\_or\_had\_tag | Is the scoped country the specific historical tag or was ever it; does NOT accept scopes | ``` has_or_had_tag = GER ``` | country | tag |
| has\_origin\_in\_new\_world | Check if a goods has origin in the new world |  | country | boolean |
| has\_origin\_in\_old\_world | Check if a goods has origin in the old world |  | country | boolean |
| has\_overlords\_ruler | Check if a subject type has to have its overlord's ruler |  | subject\_type | boolean |
| has\_owned\_buildings | Has the target country got some buildings here? |  | location | country |
| has\_owner | Check if a location has a Owner |  | location | boolean |
| has\_parliament | Checks if the country / international organization has a parliament |  | country, international\_organization | boolean |
| has\_participated\_in\_parliament | Checks if the country scope has already participated in the target international organization's parliament. |  | country | international\_organization |
| has\_passable\_land | Check if a province definition has passable land |  | province\_definition | boolean |
| has\_patriarchs | religion has Patriarchs |  | religion | boolean |
| has\_periphora | Check if art is on a periphora or not |  | work\_of\_art | boolean |
| has\_policy | Checks if a country has a certain policy for a then policy's law |  | country |  |
| has\_ports | country has ports? |  | country | boolean |
| has\_positive\_opinion | Does the country have a positive opinion? |  | country | country |
| has\_possible\_institution\_spawn | Check if a province has an institution that can be promoted to spawn |  | province | boolean |
| has\_possible\_nomad\_targets | Does the country have any possible nearby places to migrate to? |  | country | province\_definition |
| has\_potential\_royal\_marriage | Could the country do a royal marriage with the specified country? |  | country | country |
| has\_presence\_in | country has a presence in the geography supplied? |  | country |  |
| has\_primary\_or\_accepted\_culture | Check if a country has a culture as a primary or an accepted culture |  | country | culture |
| has\_primary\_or\_accepted\_or\_tolerated\_culture | Check if a country has a culture as a primary or an accepted or a tolerated culture |  | country | culture |
| has\_prisoners | returns trus if the unit contains prisoners |  | unit | boolean |
| has\_privateers\_from | Does the location has privateers of the target country? |  | area, location, province | country |
| has\_province\_modifier | Does the scoped province have a given modifier | ``` has_province_modifier = name ``` | province |  |
| has\_purity | religion has purity |  | religion | boolean |
| has\_raised\_army\_levies | Check if the country has raised army levies |  | country | boolean |
| has\_raised\_levies | Check if the country has raised levies |  | country | boolean |
| has\_raised\_navy\_levies | Check if the country has raised navy levies |  | country | boolean |
| has\_rebel | Check if a pop has allegiance to a rebel |  | pop | boolean |
| has\_reform | Checks if a country has a specific reform |  | country | government\_reform |
| has\_regent | country has a regent |  | country | boolean |
| has\_regular\_elections | does the country have regular elections |  | country | boolean |
| has\_regulars | unit has regulars |  | unit | boolean |
| has\_religion\_modifier | Does the scoped religion have a given modifier | ``` has_religion_modifier = name ``` | religion |  |
| has\_religious\_aspect | Checks if a country has a certain religious aspect |  | country | religious\_aspect |
| has\_religious\_factions | religion has religious factions |  | religion | boolean |
| has\_religious\_focuses | religion has religious focuses |  | religion | boolean |
| has\_religious\_head | religion has ReligiousHead |  | religion | boolean |
| has\_religious\_influence | religion has ReligiousInfluence |  | religion | boolean |
| has\_religious\_schools | religion has religious schools |  | religion | boolean |
| has\_river | Check if a location has a river |  | location | boolean |
| has\_road\_constructions | Check whether location has road constructions |  | location | boolean |
| has\_road\_of\_type\_to | Check if a location has a road to the target location of the specified type. | ``` has_road_of_type_to = {  target = <target location>  type = <road type> } ``` | location |  |
| has\_road\_to | Check if a location has a road to the target location |  | location | location |
| has\_road\_to\_capital | Check if a location has a road to capital |  | boolean | location |
| has\_royal\_marriage\_with | Does the country have a royal marriage with specified country? |  | country | country |
| has\_ruler | country has a ruler |  | country | boolean |
| has\_scripted\_relation | Checks if that scripted relation exists between these two countries. | ``` has_scripted_relation = {  target = country  type = <scripted type> } ``` | country |  |
| has\_scripted\_relation\_of\_type | Checks if that scripted relation exists for the country scope with any other country. |  | country | relation\_type |
| has\_sects | religion has sects |  | religion | boolean |
| has\_shared\_culture\_group | If a culture belongs to a specific culture group. |  | culture | culture |
| has\_siege | Check if a location has a siege |  | location | boolean |
| has\_societal\_value | Checks if the country has a specific societal value |  | country | societal\_value\_type |
| has\_sound\_tolls | country has sound tolls |  | country | boolean |
| has\_spawned | Has the institution spawned anywhere? |  | institution | boolean |
| has\_special\_status\_available | Checks if an international organization has a particular special status available |  | international\_organization | special\_status |
| has\_special\_status\_in\_international\_organization | Does the country have a special status in the supplied international organization? |  | country |  |
| has\_support\_from | Checks if a rebel has support froma certain pop type |  | rebels | pop\_type |
| has\_tag | Check if that object has the specified tag. |  | building, building\_type, casus\_belli, goods, heir\_selection, law, peace\_treaty, policy, religion |  |
| has\_target\_casus\_belli\_on\_us | Does the target have a cb on the country? |  | country | country |
| has\_temporary\_demand | Checks if a market has a certain temporary demand |  | market | demand |
| has\_temporary\_demands | Checks if a market has a certain temporary demand |  | market | boolean |
| has\_tolerated\_culture | Check if a country has a culture as an Tolerated culture |  | country | culture |
| has\_trade\_treaty\_with | Does the country have a trade agreement with a specified country? |  | country | country |
| has\_trait | Checks if a character has a specified trait |  | character |  |
| has\_trait\_category | Checks if any of the character's traits belongs to the specified category. |  | character |  |
| has\_truce\_with | Is the country at truce with a specified country? |  | country | country |
| has\_trust | does the country have a trust type towards another country? |  | country |  |
| has\_unit | character is assigned to a unit |  | character | boolean |
| has\_unit\_modifier | Does the scoped unit have a given modifier | ``` has_unit_modifier = name ``` | unit |  |
| has\_unlocked\_any\_unit\_of\_category | Has the country unlocked any unit of the specified category? |  | country |  |
| has\_variable | Checks whether the current scope has the specified variable set | ``` has_variable = name ``` | none |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` | none |  |
| has\_variable\_map | Checks whether the current scope has the specified variable map set | ``` has_variable_map = name ``` | none |  |
| has\_volcano | Check if a location has a volcano |  | location | boolean |
| has\_voted | Has the supplied country voted on the supplied resolution in the scope international organization/situation? |  | international\_organization, situation |  |
| has\_voted\_for | Has the supplied country voted on the supplied resolution for a specific target in the scope international organization/situation? |  | international\_organization, situation |  |
| has\_voted\_for\_issue\_in\_parliament | Checks if the country scope has voted for the issue in the target international organization's parliament. Returns false if they have voted against it or have not voted at all. |  | country | international\_organization |
| has\_yanantin | religion has yanantin |  | religion | boolean |
| heathen\_population\_fraction | Checks the fraction of the population having a different religious group than the country |  | country | value |
| heir\_candidates\_count | Checks amount of heirs in heir selection for country |  | heir\_selection | value |
| heir\_position | Character's position in line for its country's throne |  | character | value |
| heir\_score | Get the hypothetical heir score of the character for the target country, even if the character in question could not be an heir. |  | character | value |
| heir\_score\_country | Get the hypothetical heir score of the target character for the current country, even if the character in question could not be an heir. |  | country | value |
| heir\_score\_home | Get the hypothetical heir score of the character in the country they currently reside in. |  | character | value |
| hemisphere | Check if a location is either in the northern or southern hemisphere. | ``` hemisphere = northern/southern ``` | location |  |
| heretic\_population\_fraction | Checks the fraction of the population having a different religion in the same group as the country |  | country | value |
| hidden\_trigger | Enclosed triggers are not shown in tooltips | ``` hidden_trigger = { <more triggers> } ``` | none |  |
| higher\_temporary\_taxes\_needed | Checks how much more max tax a country wants |  | country | value |
| hire\_price | how much would it cost to hire this unit as a merc. | ``` hire_price(<cost multiplier>|<duration in months>) ``` | unit | value |
| honor | How much honor does the country/IO have? |  | country, international\_organization | value |
| honor\_percentage | How high the percentage of the current honor compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| horde\_unity | How much horde\_unity does the country/IO have? |  | country, international\_organization | value |
| horde\_unity\_percentage | How high the percentage of the current horde\_unity compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| implementation\_progress\_percentage | Checks if the current government reform/avatar/estate privilege /god/policy/law/cabinet action scope has been implemented in percentage. |  | avatar, cabinet\_action, estate\_privilege, god, government\_reform, law, policy | value |
| in\_assault | siege is in assault |  | siege | boolean |
| in\_cabinet | character is in cabinet |  | character | boolean |
| in\_civil\_war | country is in civil war |  | country | boolean |
| in\_combat | unit is in combat |  | unit | boolean |
| in\_marriage\_union\_with | Is the country in a marriage union with specified country? |  | country | country |
| in\_retreat | unit is in Retreat |  | unit | boolean |
| in\_siege | unit is in Siege |  | unit | boolean |
| in\_trade\_range\_of | Is the market within trading range of a merchant the target country? |  | market | country |
| in\_union\_with | Is the country in a union with specified country? |  | country | country |
| in\_war\_of\_casus\_belli | Is the country in any war with the specified casus belli? |  | country | casus\_belli |
| in\_zone\_of\_control | Check if a location is in the zone of control of a friendly fort |  | location | boolean |
| inflation | How much inflation does the country/IO have? |  | country, international\_organization | value |
| inflation\_percentage | How high the percentage of the current inflation compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| integration\_level | Checks the integration level of a location |  | location |  |
| integration\_progress | Checks the integration progress of a location |  | location | value |
| international\_organization\_can\_add\_land | Can we add a location to the scope international organization? |  | none | international\_organization |
| international\_organization\_can\_own\_land | Can the international organization own land? |  | international\_organization | boolean |
| international\_organization\_can\_remove\_land | Can we remove a location from the scope international organization? |  | none | international\_organization |
| international\_organization\_has\_internal\_peace | Checks if no member country is in a direct war with another member country |  | international\_organization | boolean |
| international\_organization\_has\_law | Has the scope international organization enacted a policy for the supplied law? |  | international\_organization | law |
| international\_organization\_has\_laws | Has the scope international organization enacted a policy for the supplied law? |  | international\_organization | boolean |
| international\_organization\_has\_leader | Does the international organization have a leader country? |  | international\_organization | boolean |
| international\_organization\_has\_policy | Has the scope international organization enacted the supplied policy? |  | international\_organization | policy |
| international\_organization\_leader\_count | Checks how many leaders (defined as 'leaders' in the IO type) are currently present in the current international organization |  | international\_organization | value |
| international\_organization\_leader\_reign | Checks if the ruler of an international organization has ruled for x years |  | international\_organization | value |
| international\_organization\_leader\_reign\_in\_days | Checks if the ruler of an international organization has ruled for x days |  | international\_organization | value |
| international\_organization\_lifetime | Checks if the international organization has existed for x years |  | international\_organization | value |
| international\_organization\_lifetime\_in\_days | Checks if the international organization has existed for x days |  | international\_organization | value |
| international\_organization\_locations\_owned\_percentage | The percentage of the locations of an international organization owned by a country |  | international\_organization | value |
| international\_organization\_modifier\_strength | Does the scoped international\_organization have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` international_organization_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "international_organization_modifier_strength(<modifier key>)" ``` | international\_organization |  |
| international\_organization\_num\_locations | Checks if an international organization has a certain amount of owned locations |  | international\_organization | value |
| international\_organization\_population | Checks if an international organization has a certain population based on the locations it owns |  | international\_organization | value |
| intrinsic\_disease\_resistance | Checks the intrinsic disease resistance in a location (e.g. from buildings) |  | location | value |
| io\_within\_diplomatic\_range | Is the target international organization within diplomatic range? |  | international\_organization | country |
| ironman | Checks if the game is running in ironman. |  | none | boolean |
| is\_a\_defender | Is the target country a defender in the war? |  | war | country |
| is\_a\_threat\_for\_us | Is the country views the target country as a threat? |  | country | country |
| is\_accepted\_in | If a culture is accepted in the target country? |  | culture | country |
| is\_active\_parliament | country has an active parliament called |  | country, international\_organization | boolean |
| is\_adjacent\_to\_lake | Check if a location is a adjacent to a lake |  | location | boolean |
| is\_admiral | character is an admiral |  | character | boolean |
| is\_admiral\_of | Character is admiral of the target country. |  | character | country |
| is\_adolescent | character is Adolescent |  | character | boolean |
| is\_adult | character is Adult |  | character | boolean |
| is\_ai | country is run by AI |  | country | boolean |
| is\_alert\_shown | Is the alert with the specified name shown? |  | none |  |
| is\_alert\_triggered | Is the alert with the specified name triggered? |  | none |  |
| is\_alive | character is alive |  | character | boolean |
| is\_allowed\_for | Returns true if the current database object is allowed (but not necessarily visible) for the target country. |  | artist\_type, avatar, building\_type, cabinet\_action, estate\_privilege, formable\_country, god, government\_reform, heir\_selection, law, levy\_setup, mission, mission\_task, parliament\_agenda, parliament\_issue, parliament\_type, policy, production\_method, regency\_type, religious\_aspect, road\_type, unit\_ability, unit\_type | country |
| is\_allowed\_for\_international\_organization | Returns true if the current database object is available to the target international organization. |  | law, parliament\_agenda, parliament\_issue, parliament\_type, policy | international\_organization |
| is\_already\_merged | If a culture\_group is already merged. |  | culture\_group | boolean |
| is\_an\_attacker | Is the target country an attacker in the war? |  | war | country |
| is\_annexing | Is the country annexing the specified country? |  | country | country |
| is\_annexing\_any\_country | Is the country annexing any other country? |  | country | boolean |
| is\_area\_coastal\_sea | is the area coastal sea or not? |  | area | boolean |
| is\_area\_fully\_discovered | is the area fully discovered or not? |  | area | country |
| is\_area\_passable | is the area passable or not? |  | area | boolean |
| is\_area\_sea | is the area sea or not? |  | area | boolean |
| is\_army | unit is Army |  | unit | boolean |
| is\_art\_destroyed | Check if art is destroyed or not |  | work\_of\_art | boolean |
| is\_artist | character is Artist |  | character | boolean |
| is\_artist\_of | Character is artist of the target country. |  | character | country |
| is\_at\_max\_level | Checks if a building is working at full capacity |  | building | boolean |
| is\_at\_war\_with | Is the country at war with a specified country? |  | country | country |
| is\_auto\_raise\_taxrate\_for\_all\_estates | Check if all estates have auto raise taxrates? |  | country | boolean |
| is\_available\_for | Returns true if the current database object is available to the target country. |  | artist\_type, avatar, building\_type, cabinet\_action, estate\_privilege, formable\_country, god, government\_reform, heir\_selection, law, levy\_setup, mission, mission\_task, parliament\_agenda, parliament\_issue, parliament\_type, policy, production\_method, regency\_type, religious\_aspect, road\_type, unit\_ability, unit\_type | country |
| is\_available\_for\_international\_organization | Returns true if the current database object is available to the target international organization. |  | law, parliament\_agenda, parliament\_issue, parliament\_type, policy | international\_organization |
| is\_being\_annexed | Is the country being annexed by any other country? |  | country | boolean |
| is\_being\_annexed\_by | Is the country getting annexed by the specified country? |  | country | country |
| is\_being\_explored | is the area being explored by a country? |  | area | country |
| is\_bombard\_phase | Check if a combat is currently in the bombard phase |  | combat | boolean |
| is\_border | Check if a location borders another country |  | location | boolean |
| is\_building\_owned\_by | Checks if a building is owned by a country |  | building | country |
| is\_burgher\_positive\_deficit | Checks if a building location does not have negative burgher deficit |  | location | boolean |
| is\_camera\_in\_zoom\_level | Is camera in a specified zoom level? SMALL / MEDIUM / LARGE |  | none |  |
| is\_capital | Check if a location is a capital |  | location | boolean |
| is\_carrying\_troops | unit is carrying troops |  | unit | boolean |
| is\_child | character is Child |  | character | boolean |
| is\_child\_of | Is the character a child of the target character? |  | character | character |
| is\_city | Check if a location is a city |  | location | boolean |
| is\_civil\_war\_for | Is the current war a civil war for the target country? |  | war | country |
| is\_close\_relative | Is the character a close relative (Child, Parent, Sibling/Half-sibling, Nephew/Niece, Aunt/Uncle, Grandparent or Grandchild) of the target character? |  | character | character |
| is\_coastal | Check if a location is coastal |  | location | boolean |
| is\_colonial\_overlord | Country is an overlord of a colonial subject |  | country | boolean |
| is\_colonial\_subject | Country is a type of colonial subject |  | country | boolean |
| is\_colonial\_top\_overlord | Country is the top overlord of a colonial subject |  | country | boolean |
| is\_connected\_to | Check if a location is connected by land/strait to another location in the same country |  | location | location |
| is\_consort | character is Consort |  | character | boolean |
| is\_consort\_of | Character is consort of the target country. |  | character | country |
| is\_core\_of | Is the location a core of the target country? |  | location | country |
| is\_courtier | Character is a courtier and has no roles assigned |  | character | boolean |
| is\_creating\_cb\_against | Checks if the current country scope is creating a casus belli against the target country. |  | country | country |
| is\_creating\_cb\_of\_type | Checks if the current country scope is creating a casus belli of the specified type against the target country. | ``` is_creating_cb_of_type = {  target = <country scope>  type = <casus belli type> } ``` | country |  |
| is\_crossing | Check if a combat has any crossing (river, strait, sea landing |  | combat | boolean |
| is\_currently\_being\_integrated | Check if a location is currently being integrated |  | location | boolean |
| is\_cut\_down\_in\_size\_cb | is it a cut down in size CB |  | casus\_belli | boolean |
| is\_demanded\_in\_market | Check if the goods scope is demanded in the target market. |  | goods | market |
| is\_demanded\_in\_market\_by\_buildings | Check if the goods scope is demanded in the target market by buildings. |  | goods | market |
| is\_demanded\_in\_market\_by\_burgher\_trades | Check if the goods scope is demanded in the target market by burgher trades. |  | goods | market |
| is\_demanded\_in\_market\_by\_constructions | Check if the goods scope is demanded in the target market by constructions. |  | goods | market |
| is\_demanded\_in\_market\_by\_pops | Check if the goods scope is demanded in the target market by pops. |  | goods | market |
| is\_demanded\_in\_market\_by\_roads | Check if the goods scope is demanded in the target market by roads. |  | goods | market |
| is\_demanded\_in\_market\_by\_trades | Check if the goods scope is demanded in the target market by trades. |  | goods | market |
| is\_demanded\_in\_market\_by\_units | Check if the goods scope is demanded in the target market by units. |  | goods | market |
| is\_discovered\_by | Is the scope location/country discovered by the target country? |  | country, location | country |
| is\_disloyal\_subject | Is the country a disloyal subject? |  | country | boolean |
| is\_dominant\_country\_of | Check if a country is the dominant country of a culture |  | country | culture |
| is\_during\_bankruptcy | country is having a bankruptcy |  | country | boolean |
| is\_dynastic\_descendant\_of | Is the character a dynastic descendant of the target dynasty? |  | character | dynasty |
| is\_dynasty\_head | character is DynastyHead |  | character | boolean |
| is\_east\_of | Check if a location is east of another location |  | location | location |
| is\_elector\_in\_international\_organization | Checks if the country is an elector in the target international organization. |  | country | international\_organization |
| is\_eligible\_heir | Checks if the character can be an eligible heir for the specified country |  | character | country |
| is\_eligible\_heir\_baseline | Checks if the character can be an eligible heir for the specified country without checking the heir selection law |  | character | country |
| is\_eligible\_military\_leader | Checks if the character can be an eligible military leader for the specified country |  | character | country |
| is\_embargoed\_by | Is the country embargoed by the specified country? |  | country | country |
| is\_embargoing | Is the country embargoing the specified country? |  | country | country |
| is\_embraced\_for | Is the institution embraced by the target country? |  | institution | country |
| is\_enemy\_of | Is the country a enemy of a specified country? |  | country | country |
| is\_enemy\_of\_international\_organization | Is the country an enemy of the supplied international organization? |  | country | international\_organization |
| is\_exiled | unit is Exiled |  | unit | boolean |
| is\_explorer | character is an explorer |  | character | boolean |
| is\_explorer\_of | Character is explorer of the target country. |  | character | country |
| is\_export | Check if a trade is an export |  | trade | boolean |
| is\_export\_banned | Checks if export of specific goods is banned in this market |  | market | goods |
| is\_female | character is Female |  | character | boolean |
| is\_fighting\_war\_together\_with | Is the country fighting a war together with a specified country? |  | country | country |
| is\_food | Check if a goods is food |  | goods | boolean |
| is\_foreign | Checks if a building can be built in foreign locations (not owned) |  | building\_type | boolean |
| is\_friendly\_with | Is the country friendly with specified country? |  | country | country |
| is\_full\_capacity | Checks if a building is working at full capacity |  | building | boolean |
| is\_full\_expanded\_rgo | Check if a location has its RGO fully expanded |  | location | boolean |
| is\_fully\_implemented\_in | Checks if the current government reform/avatar/estate privilege / god/policy/law/cabinet action scope has been fully implemented in the specified country |  | avatar, cabinet\_action, estate\_privilege, god, government\_reform, law, policy | country |
| is\_gamestate\_tutorial\_active | Is the gamestate tutorial active? See save\_progress\_in\_gamestate in tutorial\_lesson\_chains documentation. |  | none | boolean |
| is\_general | character is a general |  | character | boolean |
| is\_general\_of | Character is general of the target country. |  | character | country |
| is\_great\_power | country is a great power |  | country | boolean |
| is\_hegemon | country is a Hegemon |  | country | boolean |
| is\_hegemon\_type | Is the country a Hegemon of the specified type? |  | country | hegemony |
| is\_heir | character is Heir |  | character | boolean |
| is\_heir\_of | Character is heir of the target country. |  | character | country |
| is\_historical\_rival\_of | Is the country an historical rival of a specified country? |  | country | country |
| is\_holy\_site\_for | Is the holy site relevant to the target religion? |  | holy\_site | religion |
| is\_hostile\_with | Is the country hostile of specified country? |  | country | country |
| is\_human | country is controlled by a human |  | country | boolean |
| is\_immortal | character is immortal |  | character | boolean |
| is\_implementable\_in | Checks if the current government reform/avatar/estate privilege / god/policy/law/cabinet action scope can be implemented in the specified country. Does not check if it has already been implemented or not though. |  | avatar, cabinet\_action, estate\_privilege, god, government\_reform, law, policy | country |
| is\_import\_banned | Checks if import of specific goods is banned in this market |  | market | goods |
| is\_in\_any\_same\_international\_organization | Is the country in any same international organization as the target country? |  | country | country |
| is\_in\_list | Checks if a target in in a list |  | none |  |
| is\_in\_losing\_war | Country is currently in a war with less than 0 war score. |  | country | boolean |
| is\_in\_same\_international\_organization | Is the country in the same international organization as the target country? | ``` is_in_same_international_organization = {  international_organization = <IO scope>  target = <country> } ``` | country |  |
| is\_in\_scripted\_geography | Checks if the scope is part of the scripted geography on RHS scope | ``` is_in_scripted_geography = <scripted geography scope> ``` | area, continent, location, province\_definition, region, sub\_continent | scripted\_geography |
| is\_in\_surplus\_in\_market | Gets the possible trade surplus of the scope goods in the target market. |  | goods | value |
| is\_in\_war | Is the target country in the war? |  | war | country |
| is\_infant | character is Infant |  | character | boolean |
| is\_integrating | Is the country integrating any of its owned locations in province? |  | country | province\_definition |
| is\_international\_organization\_annullable | Is the international organization able to be annulled by treaty? |  | international\_organization | boolean |
| is\_international\_organization\_unique | Is the international organization unique? |  | international\_organization | boolean |
| is\_key\_in\_global\_variable\_map | Checks if a target is a key in a global variable map | ``` is_key_in_global_variable_map = {  name = <global_variable_map>  target = <key to check> } ``` | none |  |
| is\_key\_in\_local\_variable\_map | Checks if a target is a key in a local variable map | ``` is_key_in_local_variable_map = {  name = <local_variable_map>  target = <key to check> } ``` | none |  |
| is\_key\_in\_variable\_map | Checks if a target is a key in a variable map | ``` is_key_in_variable_map = {  name = <variable_map>  target = <key to check> } ``` | none |  |
| is\_known\_by\_country | Checks if the country is known by the specified country |  | country | country |
| is\_labourer\_positive\_deficit | Checks if a building location does not have negative labourer deficit |  | location | boolean |
| is\_lacking\_goods | Checks if a building is lacking goods |  | building | boolean |
| is\_land | Check if a location is land |  | location | boolean |
| is\_latest\_road\_type\_for | Check if a road type is the latest one for a country |  | road\_type | country |
| is\_leader\_of\_international\_organization | Is the country the Leader of the specified international organization? |  | country | international\_organization |
| is\_levy | subunit is levy |  | sub\_unit | boolean |
| is\_linked\_to\_foreign\_building | Check if a pop is linked to a foreign building |  | pop | boolean |
| is\_location\_holy\_site\_for | Is the location a holy site for the target religion? |  | location | religion |
| is\_locked | Check if a trade is locked |  | trade | boolean |
| is\_locked\_for | Returns true if the current database object is locked for the target country. |  | government\_reform, heir\_selection, law, parliament\_type, policy | country |
| is\_locked\_for\_international\_organization | Returns true if the current database object is locked for the target international organization. |  | law, parliament\_type, policy | international\_organization |
| is\_looted | Check if a location is looted |  | location | boolean |
| is\_loyal | character is loyal to their ruler |  | character | boolean |
| is\_major\_reform | Checks if the government reform is major |  | government\_reform | boolean |
| is\_map\_mode\_active | Is map mode active? |  | none |  |
| is\_market\_center | Check if a location is a market center |  | location | boolean |
| is\_married | character is Married |  | character | boolean |
| is\_matrilineal\_descendant\_of | Is the character a dynastic descendant of the target dynasty via a matrilineal line?? |  | character | dynasty |
| is\_max\_level | Checks if a building is at maximum level |  | building | boolean |
| is\_member\_of\_international\_organization | Is the country in the supplied international organization? |  | country | international\_organization |
| is\_member\_of\_international\_organization\_of\_type | Is the country in an international organization of the specified type? | ``` is_member_of_international_organization_of_type = {  type = x  target = <country> } ``` | country |  |
| is\_mercenary | subunit is Mercenary |  | sub\_unit | boolean |
| is\_mercenary\_hired\_by | Check if a mercenary is hired by a specific country |  | mercenary | country |
| is\_mercenary\_leader | character is a mercenary leader |  | character | boolean |
| is\_mercenary\_of | Character is mercenary of the target country. |  | character | country |
| is\_mercenary\_owned\_by | Check if a mercenary is owned by a specific country |  | mercenary | country |
| is\_merged\_culture\_group | If a culture has been merged from a culture group. |  | culture | boolean |
| is\_merged\_culture\_group\_of | If a culture has been merged from this specific culture group. |  | culture | culture\_group |
| is\_mining\_rgo | Check if a location has a mining\_rgo |  | location | boolean |
| is\_movement\_locked | unit is movement locked |  | unit | boolean |
| is\_moving | unit is moving |  | unit | boolean |
| is\_multiplayer\_session | Is the current game session multiplayer? |  | none | boolean |
| is\_naval\_combat | Check if a combat is between navies on the sea |  | combat | boolean |
| is\_navy | unit is Navy |  | unit | boolean |
| is\_neighbor\_of | Is the country or location a Neighbor to the specified country? |  | country, location | country |
| is\_neighbor\_of\_international\_organization | Is the country or location a neighbor to the specified international organization? |  | country, location | international\_organization |
| is\_neighbor\_of\_location | Check if a location is neighbour to another |  | location | location |
| is\_neighbor\_of\_location\_or\_across\_one\_seazone | Check if a location is neighbour to another or just across a single seazone |  | location | location |
| is\_neighbor\_of\_province\_definition | Check if a province definition is neighbour to another |  | province\_definition | province\_definition |
| is\_no\_cb | is it no CB |  | casus\_belli | boolean |
| is\_no\_cb\_war | Checks if that war was started without any casus belli ('no cb') |  | war | boolean |
| is\_not\_profitable | Checks if a building is not profitable or not has prfot at all |  | building | boolean |
| is\_on\_opposite\_sides | Check if the two countries are in opposing sides. | ``` is_on_opposite_sides = {  country = <country>  target = <target> } ``` | war |  |
| is\_on\_same\_side | Check if the two countries are on the same side. | ``` is_on_same_side = {  country = <country>  target = <target> } ``` | war |  |
| is\_opened | Checks if a building is opened |  | building | boolean |
| is\_overlord | country is an overlord |  | country | boolean |
| is\_overseas\_for\_owner | Check if a location or province is overseas for owber |  | location, province | boolean |
| is\_ownable | Check if a location is ownable, i.e. not sea, lake or an impassable |  | location | boolean |
| is\_owned\_by\_any\_international\_organization | Check if a location is owned by any international organization |  | location | boolean |
| is\_owned\_by\_country | Returns true if the rebel is owned by the target country |  | rebels | country |
| is\_owned\_by\_international\_organization | Check if a location is owned by an international organization |  | location | international\_organization |
| is\_owned\_or\_owned\_by\_subjects\_of | Check if the location is owned by the target country or its subjects |  | location | country |
| is\_owned\_or\_owned\_by\_subjects\_or\_below\_of | Check if the location is owned by the target country or its subjects or the subjects' subject |  | location | country |
| is\_parent\_of | Is the character a parent of the target character? |  | character | character |
| is\_passable | Check if a location is passable |  | location | boolean |
| is\_patrilineal\_descendant\_of | Is the character a dynastic descendant of the target dynasty via a patrilineal line?? |  | character | dynasty |
| is\_player\_playstyle | Player has only one playstyle and is equal to MILITARY, ADMINISTRATIVE or DIPLOMATIC |  | country |  |
| is\_port | Check if a location has a port |  | location | boolean |
| is\_pregnant | character is Pregnant |  | character | boolean |
| is\_primary\_in | If a culture is a primary culture in the target country? |  | culture | country |
| is\_primary\_or\_accepted\_in | If a culture is a primary culture or accepted in the target country? |  | culture | country |
| is\_produced\_by\_production\_method | Returns true if the trade good is produced by the specified production method. |  | goods | production\_method |
| is\_produced\_in\_location\_market | Checks if a specific goods in produced in the location market |  | location | goods |
| is\_produced\_in\_market | Checks if a specific goods in produced in this market |  | market | goods |
| is\_profitable | Checks if a building is profitable |  | building | boolean |
| is\_projected\_to\_run\_out\_of\_food\_stockpile | Checks if a market is projected to run out of food |  | market | boolean |
| is\_province\_capital | Check if a location is the province capital |  | location | boolean |
| is\_real\_country | Checks if a country is a real country as opposed to rebels, mercenaries, pirates |  | country | boolean |
| is\_rebel\_country | Checks if a country is a rebel country created from a civil war |  | country | boolean |
| is\_regency\_extended | country has an extended regency? |  | country | boolean |
| is\_regent | character is Regent |  | character | boolean |
| is\_regent\_of | Character is regent of the target country. |  | character | country |
| is\_regiment | unit is regiment |  | sub\_unit | boolean |
| is\_relevant | Checks if an international organization is relevant to the supplied country |  | international\_organization | country |
| is\_religion\_enabled | is the religion enabled or not |  | religion | boolean |
| is\_religious\_aspect\_enabled | Checks if the input religious aspect is enabled for the country in scope. Meaning if the allow trigger in religious aspect DB object returns true. | ``` c:ARA = {  is_religious_aspect_enabled = religious_aspect:gomarism } ``` | country | religious\_aspect |
| is\_religious\_figure | character is religious figure |  | character | boolean |
| is\_required\_for\_formable | Check if the location scope is required by the formable |  | location | formable\_country |
| is\_revolution\_target | Check if the country is the target of the revolution |  | country | boolean |
| is\_revolutionary | Check if the country is revolutionary |  | country | boolean |
| is\_rival\_of | Is the country a rival of a specified country? |  | country | country |
| is\_river\_crossing | Check if a combat has a river crossing |  | combat | boolean |
| is\_ruler | character is Ruler |  | character | boolean |
| is\_ruler\_of | Character is ruler of the target country. |  | character | country |
| is\_saint | Checks if a character is a saint in any religion |  | character | boolean |
| is\_saint\_of | Checks if a character is a saint in the specific religion |  | character | religion |
| is\_same\_gender | Is the character same gender as target character? |  | character | character |
| is\_sea\_landing | Check if a combat has an amphibious landing |  | combat | boolean |
| is\_selectable\_issue\_for | Check if the parliament issue scope is selectable by country in the target international organization. | ``` is_selectable_issue_for = {  actor = <country scope>  international_organization = <IO scope> } ``` | parliament\_issue |  |
| is\_set | Checks whether the specified scope target has been set (includes being the null object) | ``` is_set = from.owner.var:cool_var.mother ``` | none |  |
| is\_ship | subunit is Ship |  | sub\_unit | boolean |
| is\_sibling\_of | Is the character a sibling of the target character? |  | character | character |
| is\_situation\_active | Checks if the target situation is currently active |  | none | situation |
| is\_special\_building | Checks if a building is special |  | building | boolean |
| is\_spouse\_of | Is the character a spouse of the target character? |  | character | character |
| is\_starving | Check if a province is starving |  | province | boolean |
| is\_strait\_crossing | Check if a combat has a strait crossing |  | combat | boolean |
| is\_subject | country is a subject |  | country | boolean |
| is\_subject\_of | Is the country a subject to the specified country? |  | country | country |
| is\_subject\_or\_below\_of | Is the country a subject of (or subject of a subject of) the specified country? |  | country | country |
| is\_subject\_type | Is the country a subject of the specified type? |  | country |  |
| is\_subject\_type\_annullable | Check if a subject type can be annulled by a peace treaty |  | subject\_type | boolean |
| is\_subsidized | Checks if a building is subsidized |  | building | boolean |
| is\_supported\_by\_character | Returns true if the rebel is supported by the target character |  | rebels | character |
| is\_supported\_by\_country | Returns true if the rebel is supported by the target country |  | rebels | country |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable_name>  target = <event_target> } ``` | none |  |
| is\_target\_of\_international\_organization\_of\_type | Is the country a target of an international organization of the specified type? |  | country |  |
| is\_threat\_to | Current country scope is a threat and have a casus belli to the target country |  | country | country |
| is\_tolerated\_in | If a culture is tolerated in the target country? |  | culture | country |
| is\_tooltip\_with\_name\_open | Is the tooltip with the specified name open? |  | none |  |
| is\_trade\_cb | is it a trade CB |  | casus\_belli | boolean |
| is\_traded\_in\_market | Checks if a specific goods in traded in this market |  | market | goods |
| is\_tutorial\_active | Is the tutorial active? |  | none | boolean |
| is\_tutorial\_lesson\_active | Is this the current tutorial lesson? | ``` is_tutorial_lesson_active = reactive_advice_succession ``` | none |  |
| is\_tutorial\_lesson\_chain\_completed | Has the tutorial lesson chain with the specified key been finished? |  | none |  |
| is\_tutorial\_lesson\_completed | has the tutorial lesson with the specified name been finished? |  | none |  |
| is\_tutorial\_lesson\_step\_completed | Has the tutorial lesson step been finished? | ``` is_tutorial_lesson_step_completed = lesson_key:step_key ``` | none |  |
| is\_unified\_culture | Check if a location has culture unified with the owner |  | location | boolean |
| is\_unique\_reform | Checks if the government reform is unique |  | government\_reform | boolean |
| is\_unit\_locked | Check if a Unit is locked |  | unit | boolean |
| is\_upgradeable | Checks if a building is upgradeable |  | building\_type | boolean |
| is\_upgraded\_level | Checks if a building could have been upgraded |  | building\_type | boolean |
| is\_upper\_class | Check if a pop is upper class or not |  | pop | boolean |
| is\_used\_by\_production\_method | Returns true if the trade good is used by the specified production method. |  | goods | production\_method |
| is\_valid\_colonial\_charter | is this colonial charter valid, or blocked by a recognised claim? |  | country | province\_definition |
| is\_valid\_for\_exploration | character is valid for an exploration |  | character | boolean |
| is\_value\_in\_global\_variable\_map | Checks if a target is a value in a global variable map | ``` is_value_in_global_variable_map = {  name = <global_variable_map>  target = <value to check> } ``` | none |  |
| is\_value\_in\_local\_variable\_map | Checks if a target is a value in a local variable map | ``` is_value_in_local_variable_map = {  name = <local_variable_map>  target = <value to check> } ``` | none |  |
| is\_value\_in\_variable\_map | Checks if a target is a value in a variable map | ``` is_value_in_variable_map = {  name = <variable_map>  target = <value to check> } ``` | none |  |
| is\_visible\_for | Returns true if the current database object is visible (but not necessarily allowed) to the target country. |  | artist\_type, avatar, building\_type, cabinet\_action, estate\_privilege, formable\_country, god, government\_reform, heir\_selection, law, levy\_setup, mission, mission\_task, parliament\_agenda, parliament\_issue, parliament\_type, policy, production\_method, regency\_type, religious\_aspect, road\_type, unit\_ability, unit\_type | country |
| is\_visible\_for\_international\_organization | Returns true if the current database object is available to the target international organization. |  | law, parliament\_agenda, parliament\_issue, parliament\_type, policy | international\_organization |
| is\_war\_leader\_of | Checks if the current country scope is a war leader of the target war |  | country | war |
| is\_widgetid\_open | Is the widget with the specified `widgetid` open (visible and not animating)? The fastest and safest way to check. (replaces old `is\_widget\_open` functionality, which operated on names.) |  | none |  |
| join\_organization\_ai\_desire | Returns the AI desire to join the specified target international organization. | ``` join_organization_ai_desire = {  international_organization = <IO scope>  value = <script_value> }  or join_organization_ai_desire(<IO scope>) ``` | country | value |
| join\_war\_reason | Checks the reason for a country joining a war. |  | war |  |
| karma | How much karma does the country/IO have? |  | country, international\_organization | value |
| karma\_percentage | How high the percentage of the current karma compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| knows\_about\_institution | Checks if a country has knows about an institution |  | country | institution |
| knows\_country | Checks if the country knows of the specified country |  | country | country |
| language\_percentage\_in\_country | The percentage of speakers of a specific language in the current country |  | country | value |
| language\_power | How much power does the language has (percent of best)? |  | dialect, language | value |
| law\_enabled\_to\_international\_organization | Can we select a policy for a law in the scope international organization? |  | international\_organization | law |
| law\_is\_locked\_in\_international\_organization | Is a law locked in the scope international organization? |  | international\_organization | law |
| law\_visible\_to\_international\_organization | Can we see a policy for a law in the scope international organization? |  | international\_organization | law |
| leader\_change\_method | Check if the international organization has the specified leader changed method (rotation/vote/lottery/none) |  | international\_organization |  |
| leader\_change\_trigger\_type | Check if the international organization has the specified leader changed trigger type (rulerchang/timed/none) |  | international\_organization |  |
| leader\_special\_status\_power | Get the special status power of all special statuses with the 'leader' trait |  | international\_organization | value |
| leader\_special\_status\_power\_fraction | Get the fraction of the special status power of all special statuses with the 'leader' trait |  | international\_organization | value |
| leader\_type | Check if the international organization has the specified leader type (character/country/none) |  | international\_organization |  |
| legitimacy | How much legitimacy does the country/IO have? |  | country, international\_organization | value |
| legitimacy\_percentage | How high the percentage of the current legitimacy compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| liberty\_desire | Checks the amount of liberty desire a country has |  | country | value |
| list\_size | Checks the size of a list | ``` list_size = {  name = <list_name>  value >= <script_value> } ``` | none | value |
| liturgical\_language\_utility | Utility of a liturgical language accorting to Ai |  | dialect, language | value |
| loan\_amount | Checks the amount of a loan |  | loan | value |
| loan\_interest | Checks the interest of a loan |  | loan | value |
| local\_control | Checks if a location has a certain control |  | location | value |
| local\_cultural\_unity | Checks the percentage the dominant-culture has in a location |  | location | value |
| local\_estate\_power | Checks the raw local estate power in location |  | location | value |
| local\_political\_power\_fraction | Checks the fraction this location has of the total political power of a country |  | location | value |
| local\_relative\_estate\_power | Checks the relative local estate power in location |  | location | value |
| local\_religious\_unity | Checks the percentage the dominant-religion has in a location |  | location | value |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| local\_variable\_map\_size | Checks the size of a local variable map | ``` local_variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| location\_art\_quality | Checks the total art quality in a location |  | location | value |
| location\_building\_level | Checks if a location has a building type at a certain level (with optional owner) |  | location | value |
| location\_can\_be\_added\_to\_international\_organization | Can we add a location to the scope international organization? |  | international\_organization | location |
| location\_can\_be\_removed\_from\_international\_organization | Can we remove a location from the scope international organization? |  | international\_organization | location |
| location\_counter | Checks if the province/province\_defintion/area/region / subcontinent/continent/scripted\_geography has this amount of location |  | area, continent, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| location\_key | Checks if a location is the specific one (from named\_location) |  | location |  |
| location\_maritime\_merchant\_power | gets the maritime merchant power for a country in the scope location |  | location | value |
| location\_maritime\_presence\_power | gets the maritime presence power for a country in the scope location. | ``` location_maritime_presence_power = {  country = <country scope>  value <operator> <number> } ``` | location | value |
| location\_max\_population | Checks if a location has a certain pixel count |  | location | value |
| location\_max\_winter\_level | Checks the maximum winter level of a location |  | location |  |
| location\_modifier\_strength | Does the scoped location have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` location_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "location_modifier_strength(<modifier key>)" ``` | location |  |
| location\_net\_building\_profit | Checks the net profit from buildings in a location |  | location | value |
| location\_num\_holy\_sites | Number of holy sites in the location |  | location | value |
| location\_num\_works\_of\_art | Checks if a location has a certain number of works of art |  | location | value |
| location\_peace\_cost | gets the peace cost for the location according to giver and taker countries | ``` usage in trigger: location_peace_cost = { 	giver = <country> 	taker = <country> 	value <operand> <threshold>  #ex: value < 10 } usage in scripted value: location_peace_cost(<giver>|<taker>) ``` | location | value |
| location\_population\_percentage | Checks if a location has a certain percentage of population capacity |  | location | value |
| location\_privateer\_power | gets the maritime privateeer power for a country in the scope location |  | location | value |
| location\_progress\_for\_formable | Checks the progress of the country scope to form the specified formable in percentage. | ``` location_progress_for_formable = {  formable_country = <formable scope>  value = <script_value> }  or location_progress_for_formable(<formable scope>) ``` | country | value |
| location\_size | Checks if a location has a certain pixel count |  | location | value |
| location\_tax\_base | Checks the tax-base of a location |  | location | value |
| location\_unemployed\_population\_for\_building\_type | Checks if a location has a certain unemployed population for the supplied building type (with optional owner) |  | location | value |
| location\_within\_range | Checks if a location has a certain population within range |  | location | country |
| location\_works\_of\_art\_star\_rating | Checks if a country has a certain amount of work of arts |  | location | value |
| long\_term\_trigger\_currency\_utility | Checks the AI utility of adding an amount of a certain trigger every month to the scoped object | ``` long_term_trigger_currency_utility = {  trigger = <trigger>  size = <size>  target = <optional target>  value >= <script_value> } ``` | country | value |
| lowest\_prosperity | Find the location in a province with the lowest prosperity |  | province | value |
| lowest\_war\_score | Checks the lowest war score of ongoing wars |  | country | value |
| manpower | How much Manpower does the country/IO have? |  | country, international\_organization | value |
| manpower\_percentage | Checks the percentage of manpower a country has compared to its maximum |  | country | value |
| market\_access | Checks if a location has certain market access |  | location | value |
| market\_food | Checks how much food is in the market stockpile |  | market | value |
| market\_food\_deficit | Checks how much food is missing in the market |  | market | value |
| market\_food\_percentage | Checks how much food is in the market stockpile percentage wise |  | market | value |
| market\_food\_traded | Checks how much food is traded in the market |  | market | value |
| market\_max\_food | Checks how much food can be stockpiled in the market |  | market | value |
| market\_monthly\_food\_balance | Checks what the food balance is in the market |  | market | value |
| market\_population | Checks how many pops are in the market |  | market | value |
| market\_possible\_goods\_trade\_surplus | gets the possible trade surplus for the goods in the scope market |  | market | value |
| max\_control | Checks the max control in a location |  | location | value |
| max\_countries\_with\_special\_status | gets the max number of countries with a specific special status in an international organization |  | international\_organization | value |
| max\_garrison\_strength | Checks the max garrison strength of the location in scope |  | location | value |
| max\_manpower | Checks if a country has a certain Max manpower |  | country | value |
| max\_possible\_candidates | Maximum number of candidates for the heir selection.i.e. the number of choices the player will have when an election occurs | ``` max_possible_candidates <operator> <amount> ``` | heir\_selection | value |
| max\_religious\_aspects | Checks the amount of church aspects the religion has |  | religion | value |
| max\_rgo\_workers | Checks if a location has a certain max number of RGO workers |  | location | value |
| max\_sailors | Checks if a country has a certain Max Sailors |  | country | value |
| max\_sects | number of sects available per country from the scope religion |  | religion | value |
| mercenary\_has\_owner | Check if a mercenary has an owner |  | mercenary | boolean |
| mercenary\_modifier\_strength | Does the scoped mercenary have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` mercenary_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "mercenary_modifier_strength(<modifier key>)" ``` | mercenary |  |
| merchant\_capacity | gets the market merchant capacity for a country in the scope market |  | market | value |
| merchant\_power\_in\_market | gets the market merchant power for a country in the scope market |  | market | value |
| migration\_attraction | Checks if a location has a certain migration\_attraction |  | location | value |
| mil | The mil ability of the character |  | character | value |
| military\_strength | Checks the total military strength (max manpower, army size, levy power) of a country |  | country | value |
| military\_tech\_level | Checks if a country has a certain level of military tech |  | country | value |
| mission\_completed | Checks if the country has completed the mission. |  | country | mission |
| mission\_task\_bypassed | Checks if the country has bypassed the mission task. |  | country | mission\_task |
| mission\_task\_completed | Checks if the country has completed the mission task. |  | country | mission\_task |
| modifier\_utility | Checks the AI utility of a modifier |  | avatar, character, country, god, government\_reform, international\_organization, location, policy, province, religion, religious\_aspect, religious\_school, unit | value |
| modifier\_utility\_include\_locations | Checks the AI utility of a modifier with location checks |  | avatar, character, country, god, government\_reform, international\_organization, location, policy, province, religion, religious\_aspect, religious\_school, unit | value |
| monthly\_balance | Checks the monthly balance of a country |  | country | value |
| monthly\_conversion | Checks if a location has an potential conversion of X per month |  | location | value |
| monthly\_cost | Checks the monthly cost of a mercenary |  | mercenary | value |
| monthly\_income\_total | Checks if a country has a certain income |  | country | value |
| monthly\_income\_trade\_and\_tax | Checks if a country has a certain trade and tax income |  | country | value |
| monthly\_manpower | Checks if a country has a certain monthly manpower |  | country | value |
| monthly\_sailors | Checks if a country has a certain monthly Sailors |  | country | value |
| monthly\_trade\_income | Checks if a country has a certain income from trade |  | country | value |
| months\_between\_leader\_changes | Checks if a country has a specific reform |  | international\_organization | value |
| months\_left | Checks the months left of loan |  | loan | value |
| months\_since\_last\_parliament\_called | Checks how many months its been since the country / international organization last called a parliament |  | country, international\_organization | value |
| months\_since\_peace | Checks how many months its been since a country was at peace |  | country | value |
| months\_since\_war | Checks how many months its been since a country was at War |  | country | value |
| morale\_percentage | How many percent morale does this unit have??? |  | unit | value |
| nand | a negated AND trigger |  | none |  |
| naval\_range | The naval range of the country |  | country | value |
| navy\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| navy\_size | Checks if a country has a certain amount of ships |  | country | value |
| navy\_size\_percentage | Checks if a country has a certain percentage of ships compared to expected size |  | country | value |
| navy\_tradition | How much navy tradition does the country/IO have? |  | country, international\_organization | value |
| navy\_tradition\_percentage | How high the percentage of the current navy tradition compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| need\_reforms | religion needs reforms |  | religion | boolean |
| needs\_opinion\_with | Determines if a country needs X more relations with another nation. | ``` needs_opinion_with = {  target = <country>  value <comparator> <script_value> } ``` | country | value |
| nor | a negated OR trigger |  | none |  |
| not | negates content of trigger |  | none |  |
| num\_adult\_capable\_characters | Checks if a country has a certain amount of adult characters who can do cabinet or military stuff |  | country | value |
| num\_affected\_locations | How many locations are affected? |  | disease\_outbreak | value |
| num\_army\_constructions | Check how many army\_constructions a location has |  | location | value |
| num\_artists | Checks if a country has a certain amount of artists |  | country | value |
| num\_avatars | Checks if a country has a certain amount of avatars |  | country | value |
| num\_buildings | Checks if a location has a certain amount of buildings |  | location | value |
| num\_cardinals | Checks if a country has a certain amount of Cardinals |  | country | value |
| num\_characters | Checks if a country has a certain amount of living characters |  | country | value |
| num\_civil\_constructions | Check how many civil\_constructions a location has |  | location | value |
| num\_colonial\_charters | Checks if a country has a certain amount of colonial charters |  | country | value |
| num\_countries\_in\_religion | number of countries in the religion |  | religion | value |
| num\_countries\_with\_special\_status | gets the number of countries with a particular special status in an international organization |  | international\_organization | value |
| num\_embraced\_institutions | Checks if a country has a certain number of institutions embraced |  | country | value |
| num\_explorations | Checks if a country has a certain amount of Explorations |  | country | value |
| num\_foreign\_buildings | Checks if a location has a certain amount of foreign buildings |  | location | value |
| num\_forts | Checks if a country has a certain amount of forts |  | country | value |
| num\_known\_institutions | Checks if a country knows a certain number of institutions |  | country | value |
| num\_loans | Checks if a country has a certain amount of loans |  | country | value |
| num\_locations | Checks if a country has a certain amount of owned locations |  | country | value |
| num\_locations\_owned\_or\_owned\_by\_subjects | Checks if a country or its direct subjects has a certain amount of owned locations |  | country | value |
| num\_locations\_owned\_or\_owned\_by\_subjects\_or\_below | Checks if a country, its subjects or its subjects' subjects has a certain amount of owned locations |  | country | value |
| num\_navy\_constructions | Check how many navy\_constructions a location has |  | location | value |
| num\_of\_active\_parliament\_agendas | Check how many parliament agendas are currently available to the country or international organization. |  | country, international\_organization | value |
| num\_of\_advances\_researched | Checks how many advances a country currently has researched. |  | country | value |
| num\_of\_children | The number of children of the character |  | character | value |
| num\_of\_diplomats | Checks if a country has an amount of diplomats |  | country | value |
| num\_of\_electors | Checks how many electors the international organization has |  | international\_organization | value |
| num\_of\_locations\_owned\_by\_io | Checks if a country has an amount of locations owned by certain IO |  | country | value |
| num\_of\_markets\_with\_merchants | Checks if a country has merchants in the specified amount of markets. |  | country | value |
| num\_of\_non\_rural | Checks if a country has an amount of towns and cities |  | country | value |
| num\_of\_non\_rural\_ports | Checks if a country has an amount of non-rural ports |  | country | value |
| num\_of\_ports | Checks if a country has an amount of ports |  | country | value |
| num\_of\_rebel\_characters | Get the amount of characters which support the rebel |  | rebels | value |
| num\_of\_rebel\_supporters | Get the amount of countries which support the rebel |  | rebels | value |
| num\_of\_religious\_aspects | Gets the total amount of church aspects in the country |  | country | value |
| num\_of\_spouses | The number of spouses of the character |  | character | value |
| num\_of\_trades | Checks if a country has an amount of trades active |  | country | value |
| num\_of\_traits | The number of traits the character has |  | character | value |
| num\_of\_traits\_of\_category | The number of traits of a specified category the character has. | ``` num_of_trait_by_category(<trait_category>)  or num_of_trait_by_category = {  type = <trait_category>  value <comparator> <integer> } ``` | character | value |
| num\_open\_reform\_slots | Checks if a country has a certain amount of open government reform slots |  | country | value |
| num\_owned\_foreign\_buildings\_in\_location | The number of foreign buildings in a location owned by a count |  | location | value |
| num\_possible\_privileges | Checks if the scope country or estate has a certain amount of privileges |  | country, estate | value |
| num\_possible\_rivals | Checks if a country has a certain amount of possible rivals |  | country | value |
| num\_privileges | Checks if the scope country or estate has a certain amount of privileges |  | country, estate | value |
| num\_province\_definitions\_in\_area | Checks if an area has a certain amount of province definitions |  | area | value |
| num\_provinces | Checks if a country has a certain amount of provinces |  | country | value |
| num\_rebels | Checks if a country has a certain amount of Rebels |  | country | value |
| num\_reforms | Checks if a country has a certain amount of government reforms |  | country | value |
| num\_regiments | Checks if a country has a certain amount of regiments |  | country | value |
| num\_relations\_above\_limit | Amount above relations limit |  | country | value |
| num\_rivals | Checks if a country has a certain amount of rivals |  | country | value |
| num\_roads | Check how many roads a location has |  | location | value |
| num\_subjects | Checks the total number of subjects of a country |  | country | value |
| num\_subunits | How many sub units does this unit have? |  | unit | value |
| num\_union\_countries | Return the number of countries under any union ruled by the scoped dynasty |  | dynasty | value |
| num\_unions | Return the number of unions ruled by the scoped dynasty |  | dynasty | value |
| num\_works\_of\_art | Checks if a country has a certain number of works of art |  | country | value |
| offensive\_alliance\_strength | Strength of an offensive alliance, including the nation with all countries giving offensive support and those that can be called in for offensive wars |  | country | value |
| offer\_relation\_acceptance | How high is the target country's AI value of accepting the scripted relation offered by the current country scope? | ``` offer_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "offer_relation_acceptance(<scripted relation type>|<country>)" ``` | country | value |
| only\_allowed\_overlord\_court\_language | Check if a subject type only allows use of the overlord's court language |  | subject\_type | boolean |
| only\_allowed\_overlord\_primary\_culture | Check if a subject type only allows use of the overlord's primary culture |  | subject\_type | boolean |
| only\_allowed\_overlord\_primary\_or\_kindred\_culture | Check if a subject type only allows use of the overlord's primary or kindred culture |  | subject\_type | boolean |
| opinion | is the country's opinion of the target greater or equal than the value? | ``` opinion = {  target = X  value <operator> Y  or  value = { min max } } ``` | country | value |
| opinion\_difference\_between | Get the opinion of the current country scope against the first target country and subtract it with the opinion the current scope has of the second country. | ``` opinion_difference_between = {  first = <country>  second = <country>  value = <script_value> }  or opinion_difference_between(<country>|<country>) ``` | country | value |
| or | at least one entry inside trigger must be true |  | none |  |
| organization\_strength\_relative\_to\_country | Gets the relative strength of the scope organization to the supplied country | ``` organization_strength_relative_to_country(<target>|<bool exclude_target>)  or organization_strength_relative_to_country = {  target = <country link>  value <operator> <amount>  exclude_target = <bool> } ``` | international\_organization | value |
| overlord\_can\_build\_markets | Check if a subject type allows the overlord to build markets |  | subject\_type | boolean |
| overlord\_can\_destroy\_markets | Check if a subject type allows the overlord to destroy markets |  | subject\_type | boolean |
| overlord\_can\_enforce\_peace\_on\_subject | Check if a subject type allows an overlord to enforce peace on a subject |  | subject\_type | boolean |
| own\_entire\_area | Does the country own all locations in area? |  | country | area |
| own\_entire\_province | Does the country own all locations in province? |  | country | province\_definition |
| owned\_by\_or\_its\_subjects | Checks if the geographic scope is completely owned by the target country or its subjects. |  | area, continent, province\_definition, region, sub\_continent | country |
| owns | Does the country own a specific location? |  | country | location |
| owns\_any\_foreign\_buildings\_in | Does the country own any foreign buildings in the target country? |  | country | country |
| owns\_most\_foreign\_buildings\_in\_location | Does the country own the majority of the foreign buildings in the target location? |  | country | location |
| owns\_or\_has\_subject\_in | country has a presence in the geography supplied? |  | country |  |
| owns\_or\_non\_sovereign\_subject\_owns | Does the country or any of its direct non-sovereign subjects own a specific location? |  | country | location |
| parliament\_issue\_chance | The chance an issue will be selected |  | country, international\_organization | value |
| parliament\_issue\_support | The current support in parliament for an issue |  | country, international\_organization | value |
| parliament\_issue\_will\_pass | Check if the parliament issue of the country / international in debate will pass |  | country, international\_organization | boolean |
| parliament\_type\_enabled\_in\_international\_organization | Is a parliament type enabled in the scope international organization? |  | international\_organization | parliament\_type |
| parliament\_type\_is\_enabled\_in | Is a parliament type enabled in the scope country? |  | country | parliament\_type |
| parliament\_type\_is\_locked\_in | Is a parliament type locked in the scope country? |  | country | parliament\_type |
| parliament\_type\_is\_locked\_in\_international\_organization | Is a parliament type locked in the scope international organization? |  | international\_organization | parliament\_type |
| parliament\_type\_utility | Utility of a parliament type that can subtract the utility of current parliament modifiers | ``` parliament_type_utility(<type>|<bool>)  or parliament_type_utility = {  parliament_type = <type>  subtract_current = <bool>  value <operator><threshold> } ``` | country | value |
| parliament\_type\_visible\_in | Can we see a parliament type in the scope country? |  | country | parliament\_type |
| parliament\_type\_visible\_in\_international\_organization | Can we see a parliament type in the scope international organization? |  | international\_organization | parliament\_type |
| payment\_contribution | Gets how much the country has to pay for the specified IO and payment type. | ``` payment_contribution = {  international_organization = <>  payment = <> } ``` | country | value |
| payment\_maintenance | gets the payment maintenance level for a country in an international organization. | ``` payment_maintenance = {  international_organization = <>  payment = <> } ``` | country | value |
| peace\_treaty\_antagonism | Get how much antagonism the specified peace treaty type would cause for the current country scope against the target country. | ``` peace_treaty_antagonism = {  peace_treaty = <scripted peace treaty scope>  loser = <losing country scope>  [target = <thing>]  value <comparator> <real> } or "peace_treaty_antagonism(<peace treaty scope>|<loser>|<thing>)" ``` | country |  |
| peace\_treaty\_war\_score\_cost | Get how much war score the specified peace treaty type would cost for the current country scope against the target country. | ``` peace_treaty_war_score_cost = {  peace_treaty = <scripted peace treaty scope>  loser = <losing country scope>  [target = <thing>]  value <comparator> <real> } or "peace_treaty_war_score_cost(<peace treaty scope>|<loser>|<thing>)" ``` | country |  |
| peasant\_enfranchisment | Checks the level of peasant enfranchisement in a location |  | location | value |
| player\_proficiency | Is player proficiency equal to NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  | country |  |
| player\_proficiency\_greater | Is player proficiency greater than NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  | country |  |
| player\_proficiency\_greater\_eq | Is player proficiency greater or equal to NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  | country |  |
| player\_proficiency\_less | Is player proficiency less than NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  | country |  |
| player\_proficiency\_less\_eq | Is player proficiency less or equal to NOVICE, EXPERIENCED, ADVANCED or EXPERT? |  | country |  |
| policy\_enabled\_to\_international\_organization | Can we enact a policy in the scope international organization? |  | international\_organization | policy |
| policy\_has\_ai\_join\_reason | Check if the policy has an ai join reason to begin with |  | policy | boolean |
| policy\_has\_ai\_keep\_value | Check if the policy has an ai keep value to begin with |  | policy | boolean |
| policy\_has\_ai\_propose\_value | Check if the policy has an ai proposal value to begin with |  | policy | boolean |
| policy\_has\_ai\_vote\_value | Check if the policy has an ai vote value to begin with |  | policy | boolean |
| policy\_is\_locked\_in\_international\_organization | Is a policy locked in the scope international organization? |  | international\_organization | policy |
| policy\_level | Check the defined level of the policy |  | policy | value |
| policy\_visible\_to\_international\_organization | Can we see a policy in the scope international organization? |  | international\_organization | policy |
| pop\_character\_chance | How likely are characters to spawn from this pop? |  | pop | value |
| pop\_knows\_about\_goods | Checks if a pop knows about a goods enough to demand it |  | pop | goods |
| pop\_literacy | How literate is this pop? |  | pop | value |
| pop\_satisfaction | How satisfied is this pop? |  | pop | value |
| pop\_size | How big is this pop? |  | pop | value |
| pop\_type\_percentage\_in\_country | The percentage of the specific pop type in the current country |  | country | value |
| pop\_type\_population\_in\_country | The number of the specific pop type in the current country |  | country | value |
| population | Checks if the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography has a certain population |  | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| population\_in\_area | gets the amount of population in an area |  | area | value |
| population\_with\_traits | Checks if the location has x amount of population with specific pop traits. | ``` population_with_traits = {  limit = { <pop triggers> }  OR  scripted_trigger = <scripted trigger key>  value = <script_value> }  or population_with_traits(<scripted trigger key>) ``` | location | pop |
| possible\_military\_leaders | Checks if a country has a certain amount of possible military leaders |  | country | value |
| power | The power of an estate |  | estate | value |
| power\_projection | Checks if a country has a power projection |  | country | value |
| prestige | How much prestige does the country/IO have? |  | country, international\_organization | value |
| prestige\_percentage | How high the percentage of the current prestige compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| prev\_antagonism\_towards\_this | Gets the previous scope country's antagonism towards the current scope country |  | country | value |
| prev\_opinion\_of\_this | Gets the previous scope country's opinion of the current scope country |  | country | value |
| prev\_trust\_of\_this | Gets the previous scope country's trust of the current scope country |  | country | value |
| price\_in\_market | Gets the price of the scoped goods in the supplied market | ``` price_in_market = {  market = <market_name>  value >= <script_value> } ``` | goods | value |
| prisoner\_strength | gets the total strength of the prisoners in the unit |  | unit | value |
| privateer\_power | How much power does a privateer has? |  | privateer | value |
| privateer\_utility | How useful is a privateer here? |  | area | value |
| production\_method\_profit | Checks production method profit |  | production\_method | value |
| proper\_culture\_nobles | Checks the proportion of your population that is primary or accepted culture nobles |  | country | value |
| prosperity | Checks if a location has a certain prosperity |  | location | value |
| province\_army\_levy\_size | Total army levies that can be had from a province |  | province | value |
| province\_average\_control | Checks the average\_control of a province |  | province | value |
| province\_average\_development | Checks the average\_development of a province |  | province | value |
| province\_average\_integration | Checks the average\_integration of a province |  | province | value |
| province\_cabinet\_action | Checks if a cabinet action role affects a province |  | cabinet\_action | boolean |
| province\_cultural\_unity | Checks the cultural\_unity of a province |  | province | value |
| province\_food | Checks the food of a province |  | province | value |
| province\_food\_percentage | Checks the food percentage of capacity in a province |  | province | value |
| province\_max\_food | Checks the maximum amount of food the province can have |  | province | value |
| province\_modifier\_strength | Does the scoped province have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` province_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "province_modifier_strength(<modifier key>)" ``` | province |  |
| province\_monthly\_food\_production | Checks how much food the province produces per month |  | province | value |
| province\_navy\_levy\_size | Total navy levies that can be had from a province |  | province | value |
| province\_population | Checks if a Province has a certain population |  | province | value |
| province\_possible\_institutions | Checks the number of institutions that can be promoted in a province |  | province | value |
| province\_prosperity | Checks if a Province has a certain level of average prosperity |  | province | value |
| province\_rebel\_progress | Checks if a Province has a certain rebel progress |  | province | value |
| province\_religious\_unity | Checks the religious\_unity of a province |  | province | value |
| province\_satisfaction | Checks if a Province has a certain level of average satisfaction |  | province | value |
| province\_tax\_base | Checks if a Province has a certain total tax base |  | province | value |
| proximity | Checks the proximity to owner capital in a location |  | location | value |
| purity | How much purity does the country/IO have? |  | country, international\_organization | value |
| purity\_percentage | How high the percentage of the current purity compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| random\_integer | Uniformly random integer between 0 and 2^31-1. It will be the same if evaluated on the same scope and day. |  | none | value |
| rank\_index | Checks if a location has a Location Rank of a certain index |  | location | value |
| raw\_material\_amount | Check how many locations in the province\_defintion/area / region/subcontinent/continent produce the specified raw material. | ``` raw_material_amount = {  goods = <goods scope>  value = <script_value> }  or raw_material_amount(<goods scope>) ``` | area, continent, market, province\_definition, region, sub\_continent | value |
| raw\_material\_occurrence | Check how many locations world wide produce this raw material |  | goods | value |
| raw\_material\_output | Check how much raw material the scope location produces. |  | location | value |
| rebel\_category | Checks if a rebel is of a certain category |  | rebels |  |
| rebel\_estate\_type | Checks if the rebel is from the specified estate type |  | rebels | estate\_type |
| rebel\_last\_months\_progress | Check last month's progress of a rebel |  | rebels | value |
| rebel\_locations | Get the total amount of locations supporting the rebel |  | rebels | value |
| rebel\_modifier\_strength | Does the scoped rebel have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` rebel_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "rebel_modifier_strength(<modifier key>)" ``` | rebels |  |
| rebel\_name\_key | if a rebel has a specific name key |  | rebels |  |
| rebel\_progress | Check the progress of a rebel |  | rebels | value |
| rebel\_size | Get the total amount of population supporting the rebel |  | rebels | value |
| receives\_fleet\_basing\_rights\_from | Does the scope country receive fleet basing rights from the specified country? |  | country | country |
| receives\_food\_access\_from | Does the scope country receive food access from the specified country? |  | country | country |
| receives\_isolation\_exemption\_from | Does the scope country receive a trade isolation exemption from the specified country? |  | country | country |
| receives\_military\_access\_from | Does the scope country receive military access from the specified country? |  | country | country |
| receiving\_scripted\_relation | Checks for receiving scripted relation. | ``` receiving_scripted_relation = {  target = country  type = <scripted type> } ``` | country |  |
| receiving\_scripted\_relation\_of\_type | Checks if that scripted relation is received by the country scope from any other country. |  | country | relation\_type |
| reform\_desire | Checks the reform desire of the religion |  | religion | value |
| regular\_army\_size | Checks if a country has a certain army size of regulars (maximum strength) |  | country | value |
| regular\_navy\_size | Checks if a country has a certain navy size of regular ships |  | country | value |
| relative\_defensive\_alliance\_strength | Gets the relative strength of the scope country including defensive alliances to the supplied one | ``` relative_defensive_alliance_strength(<target>) <operator> <script_value> OR relative_defensive_alliance_strength = {  target = <country scope>  value <operator> <script_value> } ``` | country | value |
| relative\_military\_strength | calculates the relative military strength of the scope country to the target. | ``` relative_military_strength = {  target = <country scope>  value <operator> <script_value>  or  value = { min max } } ``` | country | value |
| relative\_raw\_material\_price | Checks the price of a location's raw material in its market as a percentage of the base price of that material |  | location | value |
| relative\_strength | Gets the relative strength of the scope country to the supplied one | ``` relative_strength(<target>)  or relative_strength = {  target = <country link>  value <operator> <amount> } ``` | country | value |
| release\_only | Checks if the game is in release mode or not. |  | none | boolean |
| relevant\_countries | Do we have any diplomatic action with the target country? |  | country | country |
| religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population_percentage = {  religion_group = <religion group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| religion\_group\_percentage\_in\_country | The percentage of a specific religion group in the current country |  | country | value |
| religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_group_population = {  religion_group = <religion group>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| religion\_modifier\_strength | Does the scoped religion have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` religion_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "religion_modifier_strength(<modifier key>)" ``` | religion |  |
| religion\_percentage | Gets the percentage of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| religion\_percentage\_in\_country | The percentage of a specific religion in the current country |  | country | value |
| religion\_population | Gets the absolute number of the population that follow a particular religion in the location/province/province\_defintion/area / region/subcontinent/continent/scripted\_geography | ``` religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | area, continent, location, province, province\_definition, region, scripted\_geography, sub\_continent | value |
| religion\_population\_in\_country | The number of pops with a specific religion in the current country |  | country | value |
| religious\_figure\_type | Checks if a character is a specific type of religious figure |  | character |  |
| religious\_influence | How much religious influence does the country/IO have? |  | country, international\_organization | value |
| religious\_influence\_percentage | How high the percentage of the current religious influence compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| religious\_unity | Checks the fraction of the population sharing the country's religion |  | country | value |
| religious\_view | does the Religion have the specified opinion of the target? |  | religion |  |
| relocate\_market\_utility | Utility of relocating a market | ``` relocate_market_utility(<location>,<location>)  or relocate_market_utility = {  location = <location>  new_location = <location>  value <operator><threshold> } ``` | country | value |
| remaining\_debt | Checks the remaining debt of a loan |  | loan | value |
| remaining\_parliament\_days | Checks how many days are left in the parliament of the country / international organization before it concludes. Returns -1 when there is no parliament active. |  | country, international\_organization | value |
| remove\_static\_modifier\_utility | Checks the AI utility of removing a static modifier from the scoped object | ``` remove_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | character, country, location | value |
| republican\_tradition | How much republican\_tradition does the country/IO have? |  | country, international\_organization | value |
| republican\_tradition\_percentage | How high the percentage of the current republican\_tradition compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| request\_relation\_acceptance | How high is the target country's AI value of accepting the scripted relation requested by the current country scope? | ``` request_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "request_relation_acceptance(<scripted relation type>|<country>)" ``` | country |  |
| requires\_goods | Returns true if the production method requires the specified trade good. |  | production\_method | goods |
| requires\_vote | Does the law require a vote? |  | law | boolean |
| research\_progress | Checks the progress of the current research in the country |  | country | value |
| resolution\_is\_active | Is the resolution currently being debated in the scope international organization/situation? |  | international\_organization, situation | resolution |
| resolution\_opinion | Gets the current scope country's opinion of a resolution. | ``` resolution_opinion(<IO>|<resolution>|<vote>) <operator> <script_value> OR resolution_opinion = {  international_organization = <international organization>  resolution = <resolution>  vote = <vote scope>  value <operator> <script_value> } ``` | country | value |
| reverse\_country\_interaction\_acceptance | How high is the current country's AI value of accepting the country interaction done by the specified country scope? Always return 0 if the scope is a player | ``` reverse_country_interaction_acceptance = {  type = <country interaction>  target = <country>  value = <script_value> }  or reverse_country_interaction_acceptance(<country interaction>|<country>) ``` | country | value |
| reverse\_cultural\_view | does the target have the specified opinion of the culture? | ``` reverse_cultural_view = {  target = <target culture>  value <operator> <script_value> } ``` | culture |  |
| reverse\_offer\_relation\_acceptance | How high is the current country's AI value of accepting the scripted relation offered by the specified country scope? | ``` reverse_offer_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "reverse_offer_relation_acceptance(<scripted relation type>|<country>)" ``` | country |  |
| reverse\_religious\_view | does the target have the specified opinion of the Religion? |  | religion |  |
| reverse\_religious\_view\_impact | Reverse opinion impact of a particular religion on another | ``` "reverse_religious_view_impact(<religion link>)" or reverse_religious_view_impact = {  religion = <religion link>  value <operator> <amount> } ``` | religion |  |
| reverse\_request\_relation\_acceptance | How high is the current country's AI value of accepting the scripted relation requested by the specified country scope? | ``` reverse_request_relation_acceptance = {  type = <scripted relation type>  target = <country>  value <operator> <value> } or "reverse_request_relation_acceptance(<scripted relation type>|<country>)" ``` | country |  |
| reverse\_school\_opinion | does the target have the specified opinion of the school? |  | religious\_school |  |
| rgo\_workers | Checks if a location has a certain number of RGO workers |  | location | value |
| righteousness | How much righteousness does the country/IO have? |  | country, international\_organization | value |
| righteousness\_percentage | How high the percentage of the current righteousness compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| rite\_power | How much rite power does the country/IO have? |  | country, international\_organization | value |
| rite\_power\_percentage | How high the percentage of the current rite power compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| ruled\_country\_on\_or\_after | Checks if the character ruled the country on or after a given date? |  | character |  |
| ruler\_reign | Checks if the ruler of a country has ruled for x years |  | country | value |
| ruler\_reign\_in\_days | Checks if the ruler or regent of a country has ruled for x days |  | country | value |
| ruler\_term\_start\_date | Gets the start date of the current ruler term |  | country | date |
| sailors | How much Sailors does the country/IO have? |  | country, international\_organization | value |
| sailors\_percentage | Checks the percentage of Sailors a country has compared to its maximum |  | country | value |
| satisfaction | The satisfaction of an estate |  | estate | value |
| save\_temporary\_scope\_as | Saves a temporary target for use during the trigger execution |  | none |  |
| save\_temporary\_scope\_value\_as | Saves a numerical or bool value as an arbitrarily-named temporary target to be referenced later in the same effect | ``` save_temporary_scope_value_as = {  name = <string>  value = x } ``` | none |  |
| school\_opinion | does the school have the specified opinion of the target? |  | religious\_school |  |
| scope\_type | Checks the type of the scope object |  | none |  |
| self\_control | How much self control does the country/IO have? |  | country, international\_organization | value |
| self\_control\_percentage | How high the percentage of the current self control compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| short\_term\_trigger\_currency\_utility | Checks the AI utility of adding an amount of a certain trigger to the scoped object | ``` short_term_trigger_currency_utility = {  trigger = <trigger>  size = <size>  target = <optional target>  value >= <script_value> } ``` | country | value |
| situation\_has\_ended | Check if a situation has ended |  | situation | boolean |
| situation\_is\_active | Check if a situation is active |  | situation | boolean |
| slider\_minting\_value | How much minting is going on (0..1) |  | country | value |
| societal\_value\_cabinet\_action | Checks if a cabinet action role has a societal value |  | cabinet\_action | boolean |
| societal\_value\_progress | Gets progress towards societal value |  | country | value |
| special\_status\_can\_be\_bestowed | Can the supplied special status be bestowed on the supplied country in the scope international organization? |  | international\_organization |  |
| special\_status\_power | Get the political power of the specified country in an organization with that specified special status. | ``` special_status_power = {  country = <country>  type = <special status>  value <operator> <float> }  or special_status_power(<country>|<special status>) ``` | international\_organization | value |
| special\_status\_power\_fraction | Get the political power fraction of the specified country in an organization with that specified special status. | ``` special_status_power_fraction = {  country = <country>  type = <special status>  value <operator> <float> }  or special_status_power(<country>|<special status>) ``` | international\_organization | value |
| spy\_network | How much spy-network does the country have in the target? | ``` spy_network = {  target = X  value <operator> Y  or  value = { min max } } ``` | country | value |
| stability | How much Stability does the country/IO have? |  | country, international\_organization | value |
| stability\_percentage | How high the percentage of the current Stability compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| state\_religion\_clergy | Checks the proportion of your population that is true faith clergy |  | country | value |
| strength\_percentage | How many percent strength does this unit have??? |  | unit | value |
| sub\_unit\_type | Checks if a sub\_unit is of a specific type |  | sub\_unit | unit\_type |
| subject\_can\_be\_annexed | Check if a subject type allows an overlord to annex the subject |  | subject\_type | boolean |
| subject\_can\_be\_created\_by | Check if a subject type can be created by the supplied country |  | subject\_type |  |
| subject\_level | Get the level of the subject type. |  | subject\_type | value |
| subject\_loyalty | Checks a country's subject loyalty |  | country | value |
| subject\_type\_annullment\_favours\_required | returns the favours needed to annul this relation diplomatically |  | subject\_type | value |
| subjects\_relative\_power | Compares to relative power of all subjects combined |  | country | value |
| subunit\_morale | How many morale does this subunit have??? |  | sub\_unit | value |
| subunit\_morale\_percentage | How many percent morale does this subunit have??? |  | sub\_unit | value |
| subunit\_number | What is the regimental number for this subnunit |  | sub\_unit | value |
| subunit\_strength | How many strength does this subunit have??? |  | sub\_unit | value |
| subunit\_strength\_percentage | How many percent strength does this subunit have??? |  | sub\_unit | value |
| supports\_rebel | Checks if a country supports the target rebel |  | country | rebels |
| switch | Switch on a trigger for the evaluation of another trigger with an optional fallback trigger. | ``` switch = { 	trigger = simple_assign_trigger 	case_1 = { <triggers> } 	case_2 = { <triggers> } 	case_n = { <triggers> } 	fallback = { <triggers> } } ``` | none |  |
| tag | Is the scoped country the specific country tag; does NOT accept scopes | ``` tag = ENG ``` | country | tag |
| tag\_exists | Does the country tag exist; does NOT accept scopes | ``` tag_exists = FRA ``` | none | tag |
| target\_satisfaction | The target satisfaction of an estate |  | estate | value |
| this\_antagonism\_towards\_prev | Gets the current scope country's antagonism towards the previous scope country |  | country | value |
| this\_opinion\_of\_prev | Gets the current scope country's opinion of the previous scope country |  | country | value |
| this\_trust\_of\_prev | Gets the current scope country's trust of the previous scope country |  | country | value |
| threat\_level\_to | Return the threat level the scope country has towards the target country scope. | ``` threat_level_to = {  country = <country scope>  value = <script_value> }  or threat_level_to(<country scope>) ``` | country | value |
| time\_of\_year | Check if the current date is within the bounds | ``` time_of_year = {     min = 11.1 # default: beginning of year     max = 2.29 # default: end of year } Dates are formatted as "<month>.<day>" or just "<month>". The check includes the min and max dates. min can be larger than max, in this case we wrap around to the next year (i.e., February is between October and March). ``` | none |  |
| tithe | Checks the tithe percentage of the religion |  | religion | value |
| topography | Checks if a location is of a specific Topography type |  | location |  |
| topography\_count | Returns the amount of owned locations with the specified topography. | ``` topography_count = {  type = <topography scope>  value <operator> <value> } or "topography_count(<topography scope>)" ``` | country |  |
| topography\_percent | Returns the percentage of owned locations with the specified topography. | ``` topography_percent = {  type = <topography scope>  value <operator> <value> } or "topography_percent(<topography scope>)" ``` | country |  |
| total\_abilities | The total ability of the character |  | character | value |
| total\_accepted\_culture\_population | Checks if a country has an acceputed or primary culture population size of the specified value |  | country | value |
| total\_building\_levels | Checks if a location has a certain total amount of building levels |  | location | value |
| total\_cardinals | Checks the total amount of cardinals of the religion |  | religion | value |
| total\_control\_scaled\_population | Checks if a country has value that is population \* local\_control its in |  | country | value |
| total\_debt | Checks how much a country has in total debt |  | country | value |
| total\_development | Gets the total amount of development in the country |  | country | value |
| total\_dynastic\_power | Check the total amount of dynastic power the scoped dynasty or country has. In case of country, the dynasty of the ruler or of the heir in case of regency is taken. |  | country, dynasty | value |
| total\_effective\_goods\_production\_buildings | Returns the number of effective building levels which produce the specified good. | ``` total_effective_goods_production_buildings = {  goods = <goods>  value <comparator> <script_value> } ``` | country | value |
| total\_enemies | counts the number of enemies of an international organization |  | international\_organization | value |
| total\_foreign\_buildings\_levels | Checks the total number of foreign buildings of a country |  | country | value |
| total\_goods\_traded | Check the total amount of goods that went through this market last month |  | market | value |
| total\_goods\_value\_traded | Check the total value of goods that went through this market last month |  | market | value |
| total\_heathen\_population | Checks if a country has a heathen population size of the specified value |  | country | value |
| total\_heretic\_population | Checks if a country has a heretic population size of the specified value |  | country | value |
| total\_locations\_owned | counts the number of locations owned by an international organization |  | international\_organization | value |
| total\_members | counts the number of members in an international organization |  | international\_organization | value |
| total\_merchant\_capacity | Checks if a country has a certain total merchant capacity |  | country | value |
| total\_merchant\_power | Check the level of this Building? |  | market | value |
| total\_not\_tolerated\_culture\_population | Checks if a country has an intolerated culture population size of the specified value |  | country | value |
| total\_payment\_contribution | Gets the sum all member countries have to pay for the specified IO and payment type. | ``` total_payment_contribution = {  payment = <> } ``` | international\_organization | value |
| total\_population | Checks if a country has a certain population |  | country | value |
| total\_population\_in\_international\_organization | Checks if the country has the defined amount of pops in the target IO. | ``` total_population_in_international_organization = {  international_organization = <IO>  value <operator> <script_value> }  or total_population_in_international_organization(<IO>) ``` | country | value |
| total\_population\_in\_international\_organization\_percentage | Checks if the country has the defined amount of pops in the target IO. | ``` total_population_in_international_organization_percentage = {  international_organization = <IO>  value <operator> <script_value> }  or total_population_in_international_organization_percentage(<IO>) ``` | country | value |
| total\_primary\_culture\_population | Checks if a country has a primary culture population size of the specified value |  | country | value |
| total\_special\_status\_power | Get the political power of all countries in an organization with that specified special status. | ``` total_special_status_power = {  type = <special status>  value <operator> <float> }  or total_special_status_power(<special status>) ``` | international\_organization | value |
| total\_special\_status\_power\_fraction | Get the percentage political power of the target special status compared to the total amount of political power of all special statuses combined. | ``` special_status_power_fraction = {  type = <special status>  value <operator> <float> }  or special_status_power_fraction(<special status>) ``` | international\_organization | value |
| total\_tolerated\_culture\_population | Checks if a country has a tolerated culture population size of the specified value |  | country | value |
| total\_true\_faith\_population | Checks if a country has a true faith population size of the specified value |  | country | value |
| total\_unique\_special\_status\_power | Get the political power of all countries in an organization with that specified special status. | ``` total_special_status_power = {  type = <special status>  value <operator> <float> }  or total_special_status_power(<special status>) ``` | international\_organization | value |
| trade\_buy | What is the current price for the buy of a trade? |  | trade | value |
| trade\_capacity\_usage\_percent | How much of the assigned capacity is being used? |  | trade | value |
| trade\_profit | What is the current profit of a trade? |  | trade | value |
| trade\_sell | What is the current price for the sell of a trade? |  | trade | value |
| trade\_volume | How big volume was traded by this trade? |  | trade | value |
| tribal\_cohesion | How much tribal\_cohesion does the country/IO have? |  | country, international\_organization | value |
| tribal\_cohesion\_percentage | How high the percentage of the current tribal\_cohesion compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| trigger\_else | Evaluates the display\_triggers if the triggers of preceding 'trigger\_if' or 'trigger\_else\_if' is not met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else = {  <display_triggers> } ``` | none |  |
| trigger\_else\_if | Evaluates the enclosed display\_triggers if the triggers of the preceding `trigger\_if` or `trigger\_else\_if` is not met and its own trigger of the limit is met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| trigger\_if | Evaluates the display\_triggers if the triggers of the limit are met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| trust | is the country's trust towards the target greater or equal than the value? | ``` trust = {  target = X  value <operator> Y  or  value = { min max } } ``` | country | value |
| union\_length\_days | returns the number of days a country has been in a union with the target country. | ``` union_length_days = {  target = <country>  value <comparator> <script_value> } ``` | country | value |
| unique\_international\_organization\_type\_exists | Does an international organization of this type exist? |  | none | international\_organization\_type |
| unit\_modifier\_strength | Does the scoped unit have a given modifier with the compared strength. Default modifiers without any scale changes have a strength value of 1 | ``` unit_modifier_strength = {  modifier = <modifier>  value <comparator> <script math> }   or "unit_modifier_strength(<modifier key>)" ``` | unit |  |
| unit\_strength | Check the strength of the unit in scope |  | unit | value |
| upkeep\_maintenance | What is the xx position (0-1) the country has? |  | country | value |
| used\_cultures\_capacity | Checks if a country has a certain cost of cultures accepted & tolerated |  | country | value |
| used\_diplomatic\_capacity | Diplomatic capacity used by the country |  | country | value |
| used\_fort\_limit | How much Fort Limit is currently being used? |  | country | value |
| used\_fort\_limit\_percentage | What percentage of our Fort Limit is currently being used? |  | country | value |
| used\_merchant\_capacity | gets the market used merchant capacity for a country in the scope market |  | market | value |
| uses\_elections | Does this succession law use elections? |  | heir\_selection | boolean |
| uses\_government\_power | Checks if a country has a certain government\_power (e.g. 'legitimacy') |  | country |  |
| valid\_estate\_for\_heir\_selection | Checks if the character's estate is allowed for the target heir selection |  | character | heir\_selection |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| variable\_map\_size | Checks the size of a variable map | ``` variable_map_size = {  name = <variable_name>  value >= <script_value> } ``` | none |  |
| vegetation | Checks if a location is of a specific Vegetation type |  | location |  |
| vegetation\_count | Returns the amount of owned locations with the specified vegetation. | ``` vegetation_count = {  type = <vegetation scope>  value <operator> <value> } or "vegetation_count(<vegetation scope>)" ``` | country |  |
| vegetation\_percent | Returns the percentage of owned locations with the specified vegetation. | ``` vegetation_percent = {  type = <vegetation scope>  value <operator> <value> } or "vegetation_percent(<vegetation scope>)" ``` | country |  |
| vote\_impact\_in\_resolution | Check how much vote impact the current country scope would make when voting in the target resolution of the target IO. | ``` vote_impact_in_resolution = {  international_organization = <IO>  resolution = <resolution>  value <operator> <real> }  or vote_impact_in_resolution(<IO>|<resolution>) ``` | country | value |
| vote\_is\_locked | Is a country's vote locked in the scope international organization/situation? |  | international\_organization, situation |  |
| vote\_percentage\_impact\_in\_resolution | Check how much vote percentage impact the current country scope would make when voting in the target resolution of the target IO. | ``` vote_percentage_impact_in_resolution = {  international_organization = <IO>  resolution = <resolution>  value <operator> <real> }  or vote_percentage_impact_in_resolution(<IO>|<resolution>) ``` | country | value |
| vote\_type | Checks the type of the vote in a resolution |  | resolution |  |
| votes\_for\_resolution | Checks the number of votes for a particular outcome of a resolution. | ``` votes_for_resolution(<resolution_key>|<thing>)  or votes_for_resolution = {  resolution = <resolution_key>  outcome = <thing>  value <comparator> <real> } ``` | international\_organization, situation | value |
| wants\_casus\_belli\_with | Does country want a casus belli with another nation? Only for Ai |  | country | country |
| wants\_military\_access\_in | country wants military access in this other country? |  | country | country |
| wants\_opinion\_with | Does country want more opinion with another nation? Only for Ai |  | country | country |
| wants\_to\_give\_away\_any\_province | Country wants to give any province to a subject? |  | country | boolean |
| wants\_to\_subjugate | country wants to subjugate another country? |  | country | country |
| war\_enthusiasm | The war enthusiasm of the current country scope in the target war. | ``` war_enthusiasm = {  war = <war scope>  value = <script_value> }  or war_enthusiasm(<war scope>) ``` | country | value |
| war\_exhaustion | How much WarExhaustion does the country/IO have? |  | country, international\_organization | value |
| war\_exhaustion\_percentage | How high the percentage of the current WarExhaustion compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| war\_goal\_type | Check if the war goal type of the war is the specified type. |  | war |  |
| war\_length | Checks how many months the current war has been going. |  | war | value |
| war\_length\_in\_years | Checks how many years the current war has been going. |  | war | value |
| war\_score\_in\_war | Check how much war score the current country has in the target war. | ``` war_score_in_war = {  war = <war>  value <operator> <real> }  or "war_score_in_war(<war>)" ``` | country | value |
| war\_score\_in\_war\_whole\_side | Check how much war score the war side of the current country has in the target war. | ``` war_score_in_war_whole_side = {  war = <war>  value <operator> <real> }  or "war_score_in_war_whole_side(<war>)" ``` | country | value |
| war\_score\_of\_country | Check how much war score the target country has in the current war. | ``` war_score_of_country = {  country = <country>  value <operator> <real> }  or war_score_of_country(<country>) ``` | war | value |
| war\_score\_of\_country\_side | Check how much war score the war side of the target country has in the current war. | ``` war_score_of_country_side = {  country = <country>  value <operator> <real> }  or war_score_of_country_side(<country>) ``` | war | value |
| war\_score\_versus | Gets the war score of the scope country against the supplied one | ``` war_score_versus(<target>)  or war_score_versus = {  target = <country link>  value <operator> <amount> } ``` | country | value |
| war\_stalling\_length | Checks how many months with no action have passed in the current war. |  | war | value |
| war\_stalling\_length\_in\_years | Checks how many years with no action have passed in the current war. |  | war | value |
| weighted\_calc\_true\_if | Returns true if the sum of weights of fulfilled sub-triggers amount to the specified sum | ``` weighted_calc_true_if = {  amount = 10  5 = { <trigger> }  15 = { <trigger> }  7 = { <trigger> } } ``` | none |  |
| winter\_level | winter level check |  | location |  |
| winter\_power |  |  | location | value |
| within\_colonial\_range\_of | Is the location within Colonial range of the target country? |  | area, location, province | country |
| within\_diplomatic\_range | Is the target country within diplomatic range? |  | country | country |
| within\_naval\_range\_of | Is the location within naval range of the target country? |  | area, location, province | country |
| world\_art\_quality | Checks the total art quality in the world |  | none | value |
| world\_culture\_group\_percentage | Gets the percentage of the population that follow a particular culture group in the world | ``` world_culture_group_percentage = {  culture_group = <culture_group>  value <operator> <script_value> } ``` | none | value |
| world\_culture\_group\_population | Gets the absolute number of the population that follow a particular culture group in the world | ``` world_culture_group_population = {  culture_group = <culture_group>  value <operator> <script_value> } ``` | none | value |
| world\_culture\_percentage | Gets the percentage of the population that follow a particular culture in the world | ``` world_culture_percentage = {  culture = <culture>  value <operator> <script_value> } ``` | none | value |
| world\_culture\_population | Gets the absolute number of the population that follow a particular culture in the world | ``` world_culture_population = {  culture = <culture>  value <operator> <script_value> } ``` | none | value |
| world\_religion\_group\_percentage | Gets the percentage of the population that follow a particular religion group in the world | ``` world_religion_group_percentage = {  religion_group = <religion_group>  value <operator> <script_value> } ``` | none | value |
| world\_religion\_group\_population | Gets the absolute number of the population that follow a particular religion group in the world | ``` world_religion_group_population = {  religion_group = <religion_group>  value <operator> <script_value> } ``` | none | value |
| world\_religion\_percentage | Gets the percentage of the population that follow a particular religion in the world | ``` world_religion_percentage = {  religion = <religion>  value <operator> <script_value> } ``` | none | value |
| world\_religion\_population | Gets the absolute number of the population that follow a particular religion in the world | ``` world_religion_population = {  religion = <religion>  value <operator> <script_value> } ``` | none | value |
| yanantin | How much yanantin does the country/IO have? |  | country, international\_organization | value |
| yanantin\_percentage | How high the percentage of the current yanantin compared to the maximum does the country/IO have? |  | country, international\_organization | value |
| yearly\_gold | How much gold does the country get per year? |  | country | value |
| yearly\_manpower | How many Manpower does the country get per year? |  | country | value |
| yearly\_sailors | How many Sailors does the country get per year? |  | country | value |
| yearly\_salary | The yearly salary of the character |  | character | value |
| years\_active | Checks how long a religion has been enabled |  | religion | value |
| years\_as\_rebel | Check how many years the character has been a rebel. |  | character | value |
| years\_in\_international\_organization | Checks if the country has been in the current international organization scope for x years. | ``` years_in_international_organization = {  country = <country scope>  value = <years> }  or years_in_international_organization(country) ``` | country | value |
| years\_of\_service\_as\_admiral | Check how many years the character has served as an admiral. |  | character | value |
| years\_of\_service\_as\_general | Check how many years the character has served as a general. |  | character | value |
| years\_of\_service\_in\_cabinet | Check how many years the character has served in a cabinet. |  | character | value |
| years\_since\_disaster\_end | Checks if x years have passed since the end of the disaster. Returns -1 if the disaster has never ended. |  | disaster | value |
| years\_since\_disaster\_start | Checks if x years have passed since the start of the disaster. Returns -1 if the disaster has never started. |  | disaster | value |
| years\_since\_situation\_end | Checks if x years have passed since the end of the situation. Returns -1 if the situation has never ended. |  | situation | value |
| years\_since\_situation\_start | Checks if x years have passed since the start of the situation. Returns -1 if the situation has never started. |  | situation | value |

## References

---

* To update these tables, see [Module:Script docs/Triggers/Updates](/Module%3AScript_docs/Triggers/Updates "Module:Script docs/Triggers/Updates")

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • Triggers  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

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