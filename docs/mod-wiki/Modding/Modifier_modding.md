<!-- source: https://eu5.paradoxwikis.com/Modifier_modding revid: 30376 fetched: 2026-09-09 -->
# Modifier modding
**Modifier modding** involves techniques that allow for application of [modifier types](/Modifier_types "Modifier types") to countries and other entities. These modifiers then help to define what the nation can do and with what efficiency.
Modifiers is ubiquitous and many game objects can hold modifier types; this article focuses on two types of modifier blocks – static modifiers and auto modifiers.
## Static modifiers
Static modifiers are the backbone mechanism for adding dynamic modifiers during gameplay. They are easily added and removed via [effects](/Effect "Effect") and provide utility in terms of AI and UI support.
### Technical details
Static modifiers are located in `common/static_modifiers`, usually in the `main_menu` [top folder](/Mod_structure#Top_folders "Mod structure").
For example:
common/static\_modifiers/example\_file.txt
### Making modifiers
A basic static modifier is comprised of a set of modifiers and the values assigned to them:
```
my_modifier = {
	country_cabinet_efficiency = 0.1
	auto_conquer_at_war = yes
}
```
The values on the right side should match what the [modifier type](/Modifier_types "Modifier types") on the left expects, a number or a boolean. The value can also be a static [scripted value](/Scripted_value "Scripted value"); that is, it must evaluate to a number or boolean directly – it cannot be dynamically calculated. For example:
```
my_modifier = {
	modifier_type_1 = test_value_1   # 0.2 underneath
	modifier_type_2 = test_value_2   # will NOT work, a dynamic value is underneath.
}
```
With the following script value definitions:
```
test_value_1 = 0.2  		# will work
test_value_2 = { 		# will NOT work - no calculations on the fly
	value = 0.1
	multiply = war_exhaustion
}
```
Besides modifier types, a static modifier also accepts a `game_data` field.
### Game data
Game data contains two fields; the required `category` and the optional `decaying`.
`category` is used to determine the scope of the modifier. If it is set to `country`, then the modifier is applied on countries using `add_country_modifier`.
Here are the following available categories:
* `character`
* `country`
* `international_organization`
* `location`
* `mercenary`
* `province`
* `rebel`
* `religion`
* `unit`
`decaying` is an optional attribute which, when set to `yes`, reduces the effects of the modifiers based on remaining time in a linear fashion.
If a modifier is 50% towards its expiration, it has 50% of the strength.
Example:
```
test_modifier = {
	game_data = {
		decaying = yes
		category = country
	}
	...
}
```
### Applying and removing modifiers during the game
Modifiers can be applied during the course of the game by using `add_<type>_modifier = { }` effects, which all follow the same general syntax:
```
add_<type>_modifier = {
	mode = add_and_replace
	modifier = <key>
	years = 25
	# and others... See Add modifier parameters
}
```
Modifiers can be removed using `remove_<type>_modifier` effects, for instance [remove\_country\_modifier](/Effect#remove_country_modifier "Effect").
Here is the full list of modifier effects:
List of add modifier effects
| Effect | Description | Example | Scopes | Targets |
| add\_character\_modifier | add a modifier to a character | ``` add_character_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | character |  |
| add\_country\_modifier | add a modifier to a country | ``` add_country_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | country |  |
| add\_international\_organization\_modifier | add a modifier to an international organization | ``` add_international_organization_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | international\_organization |  |
| add\_location\_modifier | add a modifier to a location | ``` add_location_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | location |  |
| add\_mercenary\_modifier | add a modifier to a mercenary | ``` add_mercenary_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | mercenary |  |
| add\_movement\_modifier | add a modifier to a movement | ``` add_movement_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | movement |  |
| add\_province\_modifier | add a modifier to a unit | ``` add_province_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | province |  |
| add\_rebel\_modifier | add a modifier to a rebel | ``` add_rebel_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | rebels |  |
| add\_religion\_modifier | add a modifier to a unit | ``` add_religion_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | religion |  |
| add\_unit\_modifier | add a modifier to a unit | ``` add_unit_modifier = {  modifier = <static_modifier_name>  days/months/years=<script_value/int> #negative values are permanent duration  (mode = add/extend/replace/add_and_extend/set_to_largest/set_to_largest_and_extend)  (size = <script_value/int>) # multiplies the effect of the modifier  (desc = <localization_key>) # desc replaces the description of how long the modifier lasts  (recalculate_immediately = yes) #forces game to update effects immediately } ``` | unit |  |
| change\_character\_modifier\_size | Change the strength of a modifier applied to the scope character | ``` change_character_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | character |  |
| change\_country\_modifier\_size | Change the strength of a modifier applied to the scope country | ``` change_country_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | country |  |
| change\_dynasty\_modifier\_size | Change the strength of a modifier applied to the scope dynasty | ``` change_dynasty_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | dynasty |  |
| change\_international\_organization\_modifier\_size | Change the strength of a modifier applied to the scope international organization | ``` change_international_organization_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | international\_organization |  |
| change\_location\_modifier\_size | Change the strength of a modifier applied to the scope location | ``` change_location_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | location |  |
| change\_mercenary\_modifier\_size | Change the strength of a modifier applied to the scope mercenary | ``` change_mercenary_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | mercenary |  |
| change\_province\_modifier\_size | Change the strength of a modifier applied to the scope province | ``` change_province_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | province |  |
| change\_rebel\_modifier\_size | Change the strength of a modifier applied to the scope rebel | ``` change_rebel_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | rebels |  |
| change\_religion\_modifier\_size | Change the strength of a modifier applied to the scope religion | ``` change_religion_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | religion |  |
| change\_unit\_modifier\_size | Change the strength of a modifier applied to the scope unit | ``` change_unit_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | unit |  |
List of remove modifier effects
| Effect | Description | Example | Scopes | Targets |
| change\_character\_modifier\_size | Change the strength of a modifier applied to the scope character | ``` change_character_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | character |  |
| change\_country\_modifier\_size | Change the strength of a modifier applied to the scope country | ``` change_country_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | country |  |
| change\_dynasty\_modifier\_size | Change the strength of a modifier applied to the scope dynasty | ``` change_dynasty_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | dynasty |  |
| change\_international\_organization\_modifier\_size | Change the strength of a modifier applied to the scope international organization | ``` change_international_organization_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | international\_organization |  |
| change\_location\_modifier\_size | Change the strength of a modifier applied to the scope location | ``` change_location_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | location |  |
| change\_mercenary\_modifier\_size | Change the strength of a modifier applied to the scope mercenary | ``` change_mercenary_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | mercenary |  |
| change\_province\_modifier\_size | Change the strength of a modifier applied to the scope province | ``` change_province_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | province |  |
| change\_rebel\_modifier\_size | Change the strength of a modifier applied to the scope rebel | ``` change_rebel_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | rebels |  |
| change\_religion\_modifier\_size | Change the strength of a modifier applied to the scope religion | ``` change_religion_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | religion |  |
| change\_unit\_modifier\_size | Change the strength of a modifier applied to the scope unit | ``` change_unit_modifier_size = {  modifier = <modifier>  value = <script math>  [recalculate_immediately = yes] } ``` | unit |  |
| remove\_character\_modifier | Remove a modifier from a character | ``` remove_character_modifier = name ``` | character |  |
| remove\_country\_modifier | Remove a modifier from a country | ``` remove_country_modifier = name ``` | country |  |
| remove\_international\_organization\_modifier | Remove a modifier from an international organization | ``` remove_international_organization_modifier = name ``` | international\_organization |  |
| remove\_location\_modifier | Remove a modifier from a location | ``` remove_location_modifier = name ``` | location |  |
| remove\_mercenary\_modifier | Remove a modifier from a mercenary | ``` remove_mercenary_modifier = name ``` | mercenary |  |
| remove\_movement\_modifier | Remove a modifier from a movement | ``` remove_movement_modifier = name ``` | movement |  |
| remove\_province\_modifier | Remove a modifier from a province | ``` remove_province_modifier = name ``` | province |  |
| remove\_rebel\_modifier | Remove a modifier from a rebel | ``` remove_rebel_modifier = name ``` | rebels |  |
| remove\_religion\_modifier | Remove a modifier from a religion | ``` remove_religion_modifier = name ``` | religion |  |
| remove\_unit\_modifier | Remove a modifier from a unit | ``` remove_unit_modifier = name ``` | unit |  |
#### Add modifier parameters
The most important aspect of any modifier addition is the `modifier` which determines which modifier gets added. Modifier addition also needs to have a duration set by either `years`, `months`, `weeks` or `days`, which all accept scripted values evaluated based on the current scope and saved scopes.
If the duration evaluates to -1, the modifier will be permanent.
The `mode` is an important part of defining how the modifier addition will function, and accepts the following:
| Mode type | Behavior |
| **replace** | Removes the modifier and reapplies it for the whole duration provided. |
| **add** | Duration will not be changed and the modifiers will be added onto existing modifier. |
| **extend** | Duration of an existing modifier will be extended by the provided duration. |
| **add\_and\_extend** | Stacks the modifiers together and extends the length by the duration. |
| **set\_to\_largest** | If the modifier strength (`size`) is stronger than the current modifier applied, set it to new size. |
| **set\_to\_largest\_and\_extend** | If the modifier strength (`size`) is stronger than the current modifier applied, set it to new size. Additionally, extend the duration. |
The default is `extend`.
The strength of the modifier added can also be dynamically calculated using the `size` parameter, which accepts a script value, calculated similarly to how the duration value is calculated.
If one wishes to override the text that is shown in the modifier addition text, one may use `desc` to set a [localizable description](/Localization "Localization"):
```
add_country_modifier = {
	modifier = $estate$_head_of_cabinet_influence
	days = -1
	mode = add_and_extend
	desc = head_of_cabinet_influence_desc
}
```
This results in text like "We gain <modifier> for <head\_of\_cabinet\_influence\_desc>"
Lastly, `recalculate_immediately = yes` can be used to force the game to recalculate all modifiers after the effect. This will make the game recognize new changes immediately.
### Applying modifiers in startup
*Main article: [Setup modding#Timed modifiers](/Setup_modding#Timed_modifiers "Setup modding")*
Static modifiers can also be applied to various game objects during startup using `timed_modifiers`.
### Localisation
*Main article: [Localization](/Localization "Localization")*
To localize a static modifier, `STATIC_MODIFIER_NAME_<key>` must be localized. `STATIC_MODIFIER_DESC_<key>` is also supported to represent the description, but can be left empty (set as "").
Defined modifiers can be retrieved for [localization and GUI](/GUI_script "GUI script") using `ShowModifier( 'modifier_name' )` and `ShowModifierWithNoTooltip( 'modifier_name' )`.
### Triggers
There are two types of triggers related to modifiers: one that allows for checking their presence, for instance [has\_country\_modifier](/Trigger#has_country_modifier "Trigger") and its equivalents for other types.
The other, [add\_static\_modifier\_utility](/Trigger#add_static_modifier_utility "Trigger") is a complex trigger that returns a numerical value representing the AI's perceived value of the adding the static modifier provided. It accepts `country`, `character` and `character` scopes:
```
value = "add_static_modifier_utility(joined_order_of_the_band)"
```
Additionally, a second numerical argument can be provided to indicate the size parameter of the modifier to be evaluated:
```
value = "add_static_modifier_utility(joined_order_of_the_band|0.5)"
```
[remove\_static\_modifier\_utility](/Trigger#remove_static_modifier_utility "Trigger") is opposite version of the above, utilizing the same syntax but calculating the value of removing the static modifier instead.
List of modifier triggers
| Trigger | Description | Example | Scopes | Targets |
| add\_static\_modifier\_utility | Checks the AI utility of adding a static modifier to the scoped object | ``` add_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | character, country, location | value |
| has\_character\_modifier | Does the scoped character have a given modifier | ``` has_character_modifier = name ``` | character |  |
| has\_country\_modifier | Does the scoped country have a given modifier | ``` has_country_modifier = name ``` | country |  |
| has\_international\_organization\_modifier | Does the scoped international organization have a given modifier | ``` has_international_organization_modifier = name ``` | international\_organization |  |
| has\_location\_modifier | Does the scoped province have a given modifier | ``` has_location_modifier = name ``` | location |  |
| has\_mercenary\_modifier | Does the scoped mercenary have a given modifier | ``` has_mercenary_modifier = name ``` | mercenary |  |
| has\_province\_modifier | Does the scoped province have a given modifier | ``` has_province_modifier = name ``` | province |  |
| has\_religion\_modifier | Does the scoped religion have a given modifier | ``` has_religion_modifier = name ``` | religion |  |
| has\_unit\_modifier | Does the scoped unit have a given modifier | ``` has_unit_modifier = name ``` | unit |  |
| remove\_static\_modifier\_utility | Checks the AI utility of removing a static modifier from the scoped object | ``` remove_static_modifier_utility = {  modifier = <modifier_name>  value >= <script_value> } ``` | character, country, location | value |
### Hardcoded static modifiers
Many static modifiers double as an hook into internal game modifiers and can therefore be used to modify hardcoded systems. Those modifiers are used by the code of the game and should not be removed:
| Static Modifier Name | Modifier Category |
| is\_exiled | unit |
| army\_leaderless | unit |
| navy\_leaderless | unit |
| in\_combat | unit |
| in\_siege | unit |
| is\_blockading | unit |
| is\_army\_levy | unit |
| is\_army\_mercenary | unit |
| is\_army\_regular | unit |
| is\_navy\_levy | unit |
| is\_navy\_mercenary | unit |
| is\_navy\_regular | unit |
| religious\_unity | country |
| country\_coastal\_population | country |
| army\_experience | country |
| navy\_experience | country |
| average\_literacy | country |
| army\_maintenance\_mod | country |
| army\_maintenance\_reverse\_mod | country |
| navy\_maintenance\_mod | country |
| navy\_maintenance\_reverse\_mod | country |
| fort\_maintenance\_reverse\_mod | country |
| fort\_maintenance\_mod | country |
| colonial\_maintenance\_mod | country |
| exploration\_maintenance\_mod | country |
| diplomatic\_maintenance\_mod | country |
| recovery\_motivation | country |
| call\_for\_peace | country |
| unsupported\_cultures | country |
| annexing\_countries | country |
| spy\_networks | country |
| is\_bankrupt | country |
| is\_subject | country |
| is\_great\_power | country |
| num\_hegemonies | country |
| num\_embraced\_institutions | country |
| power\_relative\_to\_overlord | country |
| country\_art | country |
| num\_of\_market\_centers\_in\_country | country |
| percent\_liturgical\_speakers\_in\_country | country |
| liturgical\_language\_power | country |
| powerful\_court\_language | country |
| court\_language\_is\_common | country |
| court\_language\_is\_market\_language | country |
| other\_court\_language | country |
| liturgical\_language\_is\_court | country |
| invited\_religious\_figures | country |
| non\_accepted\_religious\_figures | country |
| num\_cardinals | country |
| total\_cardinals\_in\_religion | country |
| saints\_from\_country | country |
| relation\_improvements | country |
| current\_army\_size | country |
| current\_navy\_size | country |
| refused\_favors | country |
| professed\_trust | country |
| war\_declared\_on\_us | country |
| total\_occupied | country |
| total\_blockaded | country |
| trade\_vs\_tax | country |
| wealth | country |
| parliament\_in\_session | country |
| parliament\_not\_called | country |
| parliament\_in\_capital | country |
| parliament\_outside\_capital | country |
| unsupported\_diplomatic\_capacity | country |
| average\_development | country |
| average\_control | country |
| religious\_tolerance | country |
| religious\_intolerance | country |
| dynasty\_seat | location |
| location\_base\_values | location |
| is\_occupied | location |
| devastation | location |
| prosperity | location |
| development | location |
| rgo\_level | location |
| control | location |
| control\_50 | location |
| inverse\_control | location |
| location\_size\_impact | location |
| location\_closeness\_to\_equator\_impact | location |
| has\_ongoing\_colonial\_charter\_migration | location |
| movement\_cost | location |
| capital | location |
| province\_capital | location |
| is\_port | location |
| has\_road | location |
| is\_blockaded\_by\_enemies | location |
| is\_blockaded\_by\_ice | location |
| proximity\_to\_capital | location |
| overpopulation | location |
| river\_flowing\_through | location |
| river\_flowing\_through\_coast | location |
| coastal | location |
| total\_population | location |
| looted | location |
| under\_siege | location |
| location\_art | location |
| expensive\_food\_in\_location | location |
| cheap\_food\_in\_location | location |
| raw\_material\_relative\_price | location |
| harbor | location |
| surplus\_jobs | location |
| location\_imports | location |
| location\_exports | location |
| location\_template\_natural\_harbor\_suitability\_location | location |
| location\_template\_natural\_harbor\_suitability | location |
| location\_template\_natural\_harbor\_suitability\_poor | location |
| location\_template\_natural\_harbor\_suitability\_good | location |
| average\_satisfaction\_inverted | location |
| average\_satisfaction | location |
| present\_troops | location |
| hostile\_troops | location |
| provincial\_troops | location |
| market\_center | location |
| building\_levels | location |
| unsupported\_building\_levels | location |
| raised\_levies | location |
| available\_free\_land | location |
| abundant\_free\_land | location |
| parliament\_location | location |
| possible\_promotion\_percentage | location |
| tribals\_expelled | location |
| heavy\_rain\_in\_location | location |
| snow\_storm\_in\_location | location |
| storm\_surge\_in\_location | location |
| high\_winds\_in\_location | location |
| sandstorm\_in\_location | location |
| tornado\_in\_location | location |
| character\_base\_values | character |
| is\_explorer | character |
| head\_of\_the\_cabinet\_modifier | character |
| positive\_province\_food\_growth | province |
| province\_starving | province |
| province\_base | province |
| integration\_none | location |
| integration\_conquered | location |
| integration\_colonized | location |
| integration\_integrated | location |
| integration\_core | location |
| winter\_none | location |
| winter\_mild | location |
| winter\_normal | location |
| winter\_severe | location |
| general\_adm | character |
| general\_dip | character |
| general\_mil | character |
| ruler\_adm | character |
| ruler\_dip | character |
| ruler\_mil | character |
| admiral\_adm | character |
| admiral\_dip | character |
| admiral\_mil | character |
| explorer\_adm | character |
| explorer\_dip | character |
| explorer\_mil | character |
| difficulty\_player\_very\_easy | country |
| difficulty\_player\_easy | country |
| difficulty\_player\_normal | country |
| difficulty\_player\_hard | country |
| difficulty\_player\_very\_hard | country |
| difficulty\_ai\_very\_easy | country |
| difficulty\_ai\_easy | country |
| difficulty\_ai\_normal | country |
| difficulty\_ai\_hard | country |
| difficulty\_ai\_very\_hard | country |
## Auto modifiers
Auto modifiers are automatically applied to countries or international organizations when certain criteria are met and can be scaled at will. They need not be explicitly added to every country, as they are automatically applied if possible.
Because of this, they need to be used sparingly as they can have serious performance consequences if misused.
### Technical details
Auto modifiers are located in `common/auto_modifiers`, usually in the `in_game` [top folder](/Mod_structure#Top_folders "Mod structure").
### Auto modifier example
Here is an example of an auto modifier:
```
war_exhaustion_impact = {
	scales_with = war_exhaustion
	land_morale_modifier = -0.02
	naval_morale_modifier = -0.02
	global_production_efficiency = scaled_production_efficiency_penalty
	trade_efficiency = scaled_trade_efficiency_penalty
	global_population_growth = -0.0003
}
```
### Auto modifier category and scope
By default, all auto modifiers are country modifiers based on country scope. The modifier category and scope type can be adjusted using `category` and `type` respectively:
```
auto_modifier_example = {
	type = international_organization
	category = international_organization
	...
}
```
Currently, the only other supported type is `international_organization`.
### Additional parameters
`requires_real = no` is used to apply the country auto modifier on "non-real" countries like the Pirate, Rebel or Mercenary tags.
`hide_effects = yes` can be used to make this modifier hidden.
### Triggers and scaling
To check whether an auto\_modifier should appear, use `potential_trigger` and `limit`. Both conditions must evaluate to true for the auto\_modifier to apply; it will be removed when either becomes false.
Based on empirical testing, the auto\_modifier `limit` field only supports basic inequality checks (<, >, <=, >=) and is likely more efficient for evaluating these conditions. Some examples of what do not work within the limit field are `=`, `AND`, `OR`, and `NOT`. Thus, `limit = { legitimacy >= 50 }` will work correctly, while `limit = { NOT = { legitimacy > 50 } }` will not, with the result always defaulting to true. The `potential_trigger` does not have this limitation and can accept all standard triggers and comparisons.
The strength of the auto modifier is calculated dynamically using `scales_with` script value.
### Localisation and datacontext
Auto modifiers can be localized similarly to static modifiers under the following strings:
* `AUTO_MODIFIER_NAME_<key>` for the title
* `AUTO_MODIFIER_DESC_<key>` for the desc
Auto modifiers can also be used in datacontext with the following:
* `StaticAutoModifier` Type
* `ShowAutoModifierEffect( 'auto_modifier' )` Function
* `ShowAutoModifierEffectForCountry( 'auto_modifier' )` Function
* `ShowAutoModifierEffectForLocation( 'auto_modifier' )` Function
## New modifier types
*Main article: [Modifier types](/Modifier_types "Modifier types")*
Unlike in Europa Universalis IV modding, new modifier types can be added in `common/modifier_type_definitions`. They are best placed in the `main_menu` [top folder](/Mod_structure#Top_folders "Mod structure").
Their values can then be used in multiple ways, but are most commonly referenced using `modifier:` [datalink](/Event_target "Event target").
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • Modifiers • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
