<!-- source: https://eu5.paradoxwikis.com/On_action revid: 35534 fetched: 2026-09-09 -->
# On action

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

*This page is about the game effect hooks. For modding actions available in game, see [Action modding](/Action_modding "Action modding").*

**On actions** are effects called by specific circumstances. Common examples are pulses which happen on a regular period, such as monthly or yearly. Other examples include various game occurrences such as starting or ending a war, gaining a new ruler, or a character dying.

## On action structure

On actions have the following structure with several optional blocks. Most on actions have a specified root scope, some have additional scopes as well.

```
on_action_name = {
	trigger = {			# On_actions can have triggers. If an on_action fires and its trigger returns false, nothing happens
		trigger_conditions = yes
	}

	weight_multiplier = {	# Used to manipulate the weight of this on_action if it is a candidate in a random_on_action list (see below)
		base = 1
		modifier = {
			add = 1
			trigger_conditions = yes
		}
	}

	events = {		# Events listed in "events" brackets will always fire as long as their trigger evaluates to true
		event_id.1
		delay = { days = 365 }		# A delay will mean that all events listed after it will only be fired after the delay has passed. NOTE: For performance reasons, an event will only successfully fire if it is valid both when the on_action is executed AND once the delay is complete. All firing entries support delays, whether for events or on_actions.
		event_id.2
		delay = { months = { 6 12 } }	# Setting a new delay overrides a previous delay. Delays support random ranges
		event_id.3
	}

	random_events = {	# A single event will be picked to fire

		chance_to_happen = 25	# A percentage chance determining whether the events involved will be evaluated at all

		chance_of_no_event = { 	# An entry that can be formatted as a script value (and therefore have conditional entries). Separated from "chance_to_happen" for performance reasons. Will only be evaluated if chance_to_happen is true.
			value = 0
			if = {
				limit = { trigger_conditions = yes }
				add = 10
			}
		}

		# If sample_count is present(and not commented out like in this example), the game only evaluates this number of events.
		# They are chosen randomly(weight is taken into account). If the trigger for one of the evaluated events is fulfilled,
		# it is executed. Otherwise none of the events in the random_events happen.
		# A low sample_count increases performance,
		# but it can greatly reduce the chance that the pulse triggers one of the random_events
		# (especially if the weight of all events which can happen, is very low).
		#sample_count = 3

		100 = event_id.1 	# The number is the weight for picking a specific event. The weight is factored by the event's weight_multiplier entry. (If no weight_multiplier is defined for the event, it is 1)
		200 = event_id.2
		100 = 0		# Having a "0" entry means that there is a chance no event fires, even if there are other valid events. Good for making sure that rare events don't always fire just because every other possible event is invalid.
	}

	first_valid = {		# Pick the first event for which the trigger returns true
		event_id.1
		event_id.2
		fallback_event_without_trigger
	}

	on_actions = {	# An on_action can fire other on_actions, following the same rules as with events
		on_action_1
		on_action_2
		on_action_3
	}

	random_on_action = {	# Same as with events. On_actions are also factored by their weight_multipliers, which defaults to 1
		100 = on_action_1
		200 = on_action_2
		100 = 0
	}

	first_valid_on_action = {
		on_action_1
		on_action_2
	}

	effect = { 	# An on_action can run effects. It can access the same default or saved scopes as the script chain/code functionality it was fired from. Note that it happens concurrently to events triggered by the on_action, NOT before. Effects run here create a separate chain than events the on_action fires, so you can for example not manipulate values in the effect, and then reliably access those in an event that was fired at the same time. Scopes or local variables set in the effect here will not carry over to any event fired by the on_action.
		effects = yes
	}

	fallback = another_on_action 	# on_actions can define a fallback on_action. If no events/on_actions are run by the on_action, the fallback gets called instead. Avoid creating infinite fallback loops, or the game may be prevented from advancing time!
}
```

On action parameters

| Block | Description |
| --- | --- |
| trigger | [Triggers](/Trigger "Trigger") that determine if the on action can fire when called |
| events | List of [events](/Event_modding "Event modding") that are called when the on action fires |
| random\_events | A single valid event is called from the list, selected by weighted random |
| first\_valid | The first valid event is called from the list, determined by the triggers of the called events |
| on\_actions | List of on actions that are called when the on action fires |
| random\_on\_action | A single valid on action is called from the list, selected by weighted random |
| first\_valid\_on\_action | The first valid on action is called from the list, determined by the triggers of the called on\_actions |
| effect | [Effects](/Effect "Effect") that are fired with the on action |
| weight\_multiplier | A MTTH block that modifies the weight of the on action for use with a random\_on\_action block |
| fallback | A single on action that is called if no effects, events, or on actions are fired by this this on action |

Each block can have any number of `delay` blocks. Any events, on actions, or effects after the delay waits until the delay passes.

On actions can also be called with the effect `trigger_event` as such:

```
	trigger_event_(non_)silently = {
		on_action = on_action_name
		days/months/years = X  	# Optional, to delay the firing time
	}
```

### Modding on actions

On actions can easily modded by calling a new scripted on action from a hardcoded on action. Only a new `on_actions` block can be added to existing on actions. Adding other blocks to an existing on action causes errors.

For example, to add new effects to the monthly country pulse, use the following template:

```
monthly_country_pulse = {
	on_actions = {
    	new_on_action #the name should be unique, but does not need to follow any strict pattern
    }
}
new_on_action = {
	effect = {
		newly added effects
	}
}
```

This makes the base game on-action call the modded on-action whenever it fires.

Note: For compatibility with other mods, and as a general good practice, please add a somewhat unique prefix related to your on\_action to reduce the chance of two mods having the same one.

### Parallelisation

The events block called by an on\_action is parallelised. This means that when the game is evaluating the events block of the on\_action, it will do so for multiple scopes simultaneously, at least for as many as there are available threads with which to do so- the more of the scopes which are to be evaluated that can be simultaneously processed, the closer the time to evaluate all of the scopes will be to the time it takes to evaluate just one scope.

A single thread is still used to evaluate the events block for each scope.

#### Practical implications

It is potentially better from a performance standpoint, despite the overhead of constructing and calling a separate event, to use an event to apply effects to many scopes at the same time, rather than using the effects block of the same on\_action.

Additionally, scopes affected by the same event from the same on\_action block may be so affected in an arbitrary sequence- if it is desirable that one scope's event be evaluated or occur after another, the the earlier event shall need to be called by the later, or be called after the other in an ordered list effect. In either case the process calling the events will not benefit from parallelism.

## List of on actions

The given scope is `root` unless otherwise indicated

| Name | Given scope | Description | Other Notes |
| --- | --- | --- | --- |
| biyearly\_country\_pulse | country | Bi-yearly pulse is primarily for religious flavor events | once every two years |
| colonial\_charter\_monthly\_pulse | * root = country * scope:target = colonial\_charter |  |  |
| country\_pulse\_for\_high\_infamy | country |  |  |
| earthquake\_location\_pulse | location | checks one random location each month.. yay. |  |
| four\_yearly\_country\_pulse | country | once every four years |  |
| government\_flavor\_pulse | country |  |  |
| in\_battle | character | every tick while a character is the supreme commander of a battle. |  |
| in\_regency\_yearly\_pulse | country | yearly while has regency |  |
| monthly\_country\_pulse | country |  |  |
| on\_accepted\_call\_to\_arms | * scope:actor = caller * scope:recipient = callee * scope:war = war |  |  |
| on\_annex | * root = country doing the annexing * scope:target = country being annexed | fired before the annexation happens |  |
| on\_annexation\_cancel | * root = country doing the annexing * scope:target = country being annexed |  |  |
| on\_annexation\_start | * root = country doing the annexing * scope:target = country being annexed |  |  |
| on\_annexed | * root = country doing the annexing * scope:target = country being annexed | fired after the annexation has happened |  |
| on\_annexing\_subject\_monthly\_pulse | * root = overlord * scope:target = subject |  |  |
| on\_bankruptcy | country |  |  |
| on\_battle\_lost | * root = actor * scope:actor = winning "unit" * scope:target = losing "unit" * scope:killed\_land\_units -> Num soldiers killed in land battle * scope:killed\_navy\_units -> Num ships destroyed in navy battle * scope:lost\_land\_units -> Num soldiers lost in land battle * scope:lost\_navy\_units -> Num ships lost in navy battle * scope:war\_score -> Num war score the loser loses from battle | Scopes after target are float values |  |
| on\_battle\_lost\_character | character |  |  |
| on\_battle\_won | * root = actor * scope:actor = winning "unit" * scope:target = losing "unit" * scope:killed\_land\_units -> Num soldiers killed in land battle * scope:killed\_navy\_units -> Num ships destroyed in navy battle * scope:lost\_land\_units -> Num soldiers lost in land battle * scope:lost\_navy\_units -> Num ships lost in navy battle * scope:war\_score -> Num war score the loser loses from battle | Scopes after target are float values |  |
| on\_battle\_won\_character | character |  |  |
| on\_become\_revolution\_target | country |  |  |
| on\_becoming\_free | * root = country * scope:overlord = former overlord |  |  |
| on\_cabinet\_assigned | * root = country * scope:target = character who got assigned to the cabinet |  |  |
| on\_cabinet\_removed | * root = country * scope:target = character who got removed from the cabinet | Is called BEFORE on\_cabinet\_assigned if you replace a cabinet character with a new one | Is NOT fired when a character in the cabinet dies |
| on\_capital\_moved | * root = country * scope:old\_capital = old capital location * scope:new\_capital = new capital location |  |  |
| on\_character\_birth | * root = country * scope:character = newborn |  |  |
| on\_character\_created | character | only from create\_character effect |  |
| on\_character\_death | * root = country * scope:target = character who dies |  |  |
| on\_character\_divorce | * root = primary character who divorces * scope:target = secondary character who gets divorced |  |  |
| on\_character\_estate\_change | character |  |  |
| on\_character\_marriage | * root = primary character who marries * scope:target = secondary character who gets married | NOTE: if you get confused why the wrong character gets the effects applied, check in which scope marry\_character is used. |  |
| on\_character\_moved\_country | * root = character * scope:target = new country * scope:owner = old country |  |  |
| on\_civil\_war\_annex | * root = country doing the annexing * scope:target = country being annexed | fired before the annexation happens |  |
| on\_civil\_war\_annexed | * root = country doing the annexing * scope:target = country being annexed | fired after the annexation has happened |  |
| on\_civil\_war\_lost | * root and scope:winner = winner * scope:loser = loser |  |  |
| on\_civil\_war\_start | * root = original country which gets targeted by the civil war * scope:target = rebel country which declares the war * scope:war = the civil war * scope:rebel is the rebel |  |  |
| on\_civil\_war\_won | * root and scope:winner = winner * scope:loser = loser |  |  |
| on\_colonial\_charter\_failed | * root = country * scope:target = province\_definition * scope:attacker = the other country |  |  |
| on\_colonial\_charter\_finished | * root = country * scope:target = province |  |  |
| on\_command\_gained | * root = character * scope:unit = unit |  |  |
| on\_command\_lost | * root = character * scope:unit = unit |  |  |
| on\_country\_rank\_change | country |  |  |
| on\_dependency\_gained | * root = country * scope:overlord = new overlord |  |  |
| on\_diplomatic\_annex | * root = country doing the annexing * scope:target = country being annexed | fired before the annexation happens |  |
| on\_diplomatic\_annexed | * root = country doing the annexing * scope:target = country being annexed | fired after the annexation has happened |  |
| on\_election | country |  |  |
| on\_embrace\_revolution | country |  |  |
| on\_ending\_war | * root = country (after winning and losing, for both) * scope:winner = country * scope:loser = country * scope:war = war |  |  |
| on\_exploration\_monthly\_pulse | exploration |  |  |
| on\_exploration\_success | * root = country * scope:target = area * scope:actor = character |  |  |
| on\_gain\_great\_power\_status | country |  |  |
| on\_game\_start | none |  | This runs before country selection, thus triggers like `is_ai` will not work as no player country has been selected yet. You can add a delay like so: ``` on_game_start = {     on_actions = {         delay = { days =  1 }         your_on_action     } } ``` to run your action after the first-day tick, so that this runs after nation selection has already occurred. |
| on\_gift\_sent | * root & scope:actor = sender * scope:recipient = receiver * scope:target = amount of gold sent |  |  |
| on\_government\_type\_change | * root = country * scope:from = old type * scope:to = new type |  |  |
| on\_great\_battle\_lost | * root = actor * scope:actor = winning "unit" * scope:target = losing "unit" * scope:killed\_land\_units -> Num soldiers killed in land battle * scope:killed\_navy\_units -> Num ships destroyed in navy battle * scope:lost\_land\_units -> Num soldiers lost in land battle * scope:lost\_navy\_units -> Num ships lost in navy battle * scope:war\_score -> Num war score the loser loses from battle | Scopes after target are float values |  |
| on\_great\_battle\_won | * root = actor * scope:actor = winning "unit" * scope:target = losing "unit" * scope:killed\_land\_units -> Num soldiers killed in land battle * scope:killed\_navy\_units -> Num ships destroyed in navy battle * scope:lost\_land\_units -> Num soldiers lost in land battle * scope:lost\_navy\_units -> Num ships lost in navy battle * scope:war\_score -> Num war score the loser loses from battle | Scopes after target are float values |  |
| on\_heir\_selection\_changed | * root = country * scope:old\_heir\_selection * scope:heir\_selection |  |  |
| on\_institution\_embraced | * root = country * scope:target = institution |  |  |
| on\_insult | * root & scope:actor = sender * scope:recipient = receiver |  |  |
| on\_integrated\_in\_union\_removal | none |  |  |
| on\_international\_organization\_changed\_leader | * root = new\_ruler * scope:target = IO * scope:old\_ruler = previous leader |  |  |
| on\_international\_organization\_creation | * root = int org * scope:actor = creator * scope:target = target |  |  |
| on\_international\_organization\_disbanded | country | sent to each country that's a member of an IO when it's disbanded |  |
| on\_international\_organization\_disbanding | * root = int org * actor = instigator | sent just before an IO disbands |  |
| on\_international\_organization\_parliament\_agenda\_accepted | international\_organization |  |  |
| on\_international\_organization\_policy\_changed | international\_organization |  |  |
| on\_io\_parliament\_failed | * root = io * scope:target = parliament issue * scope:location = parliament seat location |  |  |
| on\_io\_parliament\_passed | * root = io * scope:target = parliament issue * scope:location = parliament seat location |  |  |
| on\_io\_parliament\_started | * root = io * scope:location = parliament seat location |  |  |
| on\_join\_war | country |  |  |
| on\_loan\_renewed | * root = country * scope:target = loan * scope:owner = lender | check with exists = scope:owner first before doing effects with it |  |
| on\_loan\_repaid | * root = country * scope:target = loan * scope:owner = lender | check with exists = scope:owner first before doing effects with it |  |
| on\_loan\_taken | * root = country * scope:target = loan * scope:owner = lender | check with exists = scope:owner first before doing effects with it |  |
| on\_location\_changed\_owner | * root= location * scope:loser = previous owner * scope:winner = new owner |  |  |
| on\_location\_changed\_rank | location |  |  |
| on\_location\_lost |  |  |  |
| on\_location\_occupied | * root = country * scope:target = location * scope:character = leading general character | When a location without fort changes controller after an occupation process |  |
| on\_lose\_great\_power\_status | country |  |  |
| on\_lose\_revolution | country |  |  |
| on\_lose\_revolution\_target | country |  |  |
| on\_losing\_war | * root = country * scope:winner = country * scope:loser = country * scope:war = war |  |  |
| on\_made\_saint | * root = country * scope:recipient = character |  |  |
| on\_marriage\_union\_formation | * root = union * scope:ruler = ruling character * consorts list = the list of all consort characters |  |  |
| on\_max\_doom\_reached | country |  |  |
| on\_military\_annex | * root = country doing the annexing * scope:target = country being annexed | fired before the annexation happens |  |
| on\_military\_annexed | * root = country doing the annexing * scope:target = country being annexed | fired after the annexation has happened |  |
| on\_mission\_abort | country |  |  |
| on\_mission\_completion | country |  |  |
| on\_mission\_start | country |  |  |
| on\_mission\_task\_bypass | country |  |  |
| on\_mission\_task\_completion | country |  |  |
| on\_mission\_task\_start | country |  |  |
| on\_nation\_changing | country |  |  |
| on\_new\_age | country | this is done for ALL active countries when a new nation is picked. |  |
| on\_new\_country\_formed | newly formed country |  |  |
| on\_new\_ruler | * root = country * scope:old\_ruler = character * scope:new\_ruler = character |  |  |
| on\_overrun\_imprisoned | * root = unit of prisoners * scope:winner = country that was victorious |  |  |
| on\_parliament\_failed | * root = country * scope:target = parliament issue * scope:location = parliament seat location |  |  |
| on\_parliament\_passed | * root = country * scope:target = parliament issue * scope:location = parliament seat location |  |  |
| on\_parliament\_started | * root = country * scope:location = parliament seat location |  |  |
| on\_policy\_changed | country |  |  |
| on\_pre\_ending\_war | * root = country * scope:winner = country * scope:loser = country * scope:war = war | after winning and losing, for both, but before peace terms were executed |  |
| on\_pre\_losing\_war | * root = country * scope:winner = country * scope:loser = country * scope:war = war |  |  |
| on\_pre\_winning\_war | * root = country * scope:winner = country * scope:loser = country * scope:war = war |  |  |
| on\_raw\_material\_changed | * root = location * scope:old\_goods = previous trade goods * scope:new\_goods = new trade goods |  |  |
| on\_reform\_change |  |  |  |
| on\_regency\_end |  |  |  |
| on\_regency\_start |  |  |  |
| on\_rejected\_call\_to\_arms | * scope:actor = caller * scope:recipient = callee * scope:war = war |  |  |
| on\_released\_country | * root = released country * scope:overlord = overlord |  |  |
| on\_religion\_changed | * root = country * scope:old\_religion = old religion |  |  |
| on\_royal\_marriage | * root & scope:actor = sender * scope:recipient = receiver * scope:target\_1 = character of scope:actor who gets married * scope:target\_2 = character of scope:recipient |  |  |
| on\_ruler\_death | * root = country * scope:old\_ruler is the one who died |  |  |
| on\_shatter\_country | country |  |  |
| on\_siege\_lost |  |  |  |
| on\_siege\_won | * root = country * scope:target = location * scope:character = leading general character | When a location with fort changes controller after a siege. |  |
| on\_storm\_reached\_location | * root = location * scope:weather\_system = weather system |  |  |
| on\_subject\_type\_changed | * root = subject * scope:overlord = overlord * scope:subject\_type = current subject type * scope:old\_subject\_type = subject type before the changed | Is triggered when a subject changes its subject type via diplomacy |  |
| on\_took\_location\_in\_peace\_treaty | * root = winner * scope:location = location * scope:winner = new owner * scope:loser = old owner |  |  |
| on\_union\_formation | * root = new union IO * scope:ruler = ruling character or heir * scope:first\_leader = the first union leader country from the merge * scope:second\_leader = the second union leader country from the merge | sent after the new union is setup |  |
| on\_union\_merging | * root = the union IO which is potentially part of the merge * scope:ruler = leader character of the union | sent right before unions are about to merge | NOTE: this on\_action is also called even if it is only a single Union. It would just be applied to that union then. Basically, gets called always when any union shenanigans are about to happen |
| on\_union\_split | * scope:first\_ruler = first character * scope:second\_ruler = second character |  |  |
| on\_war\_declared | * root = country * scope:actor = country who declares the war * scope:recipient = country who gets declared on * scope:war = war |  |  |
| on\_winning\_war | * root = country * scope:winner = country * scope:loser = country * scope:war = war |  |  |
| on\_work\_of\_art\_created | work of art |  |  |
| on\_work\_of\_art\_destroyed | work of art |  |  |
| on\_work\_of\_art\_looted | * root = work of art * scope:target = new location * scope:location = old location | Is NOT called by the move\_art effect |  |
| on\_work\_of\_art\_moved | * root = work of art * scope:target = new location * scope:location = old location | gets called by the move\_art effect |  |
| parliament\_monthly\_pulse | country | This is only active during an active parliament session |  |
| religion\_flavor\_pulse | country |  |  |
| volcano\_location\_pulse | location | checks every location in the default.map list of volcano locations monthly |  |
| weather\_monthly\_pulse | none |  |  |
| yearly\_country\_pulse | country |  |  |

### Base game scripted on actions

The following on actions are not called from game code, but instead by an effect or other on action.

| Name | Given scope | Description | Other Notes |
| --- | --- | --- | --- |
| chinese\_expedition\_event\_pulse | * root = Country * scope:expedition\_initiator = country |  | * Root is nation harboring the treasure voyage * Expedition initiator is the nation from which the expedition originates |
| chinese\_expedition\_movement\_events | country |  | Root is the Expedition Initiator |
| delhi\_four\_yearly\_pulse | country |  |  |
| four\_yearly\_country\_pulse\_25\_percent | country |  | This on\_action has a 25% chance of triggering on four year pulse |
| four\_yearly\_country\_pulse\_50\_percent | country |  | This on\_action has a 50% chance of triggering on four year pulse |
| france\_naples\_administration\_broken | none |  |  |
| on\_cabinet\_death |  |  |  |
| on\_country\_specific\_pulse | country |  |  |
| on\_disloyal\_independent\_appanage | none |  |  |
| on\_former\_independent\_appanage | none |  |  |
| on\_four\_yearly\_check\_for\_script | country |  |  |
| on\_fraticide\_underage\_succession\_waiting | none |  |  |
| on\_horde\_pretender\_death | none |  |  |
| on\_milanese\_library\_occupied | country |  |  |
| on\_new\_appanage | none |  |  |
| on\_papacy\_reform\_removed | none |  |  |
| on\_papal\_opinion\_added | none |  |  |
| on\_papal\_opinion\_removed | none |  |  |
| on\_prussian\_crusader\_death | none |  |  |
| on\_ruler\_death\_delhi\_tombs\_construction | country |  |  |
| on\_settle\_the\_frontier\_monthly\_pulse | country |  |  |
| on\_tamil\_rebel\_death | none |  |  |
| on\_timurid\_governor\_death | country |  |  |
| on\_timurid\_occupy\_location | none |  |  |
| on\_timurid\_occupy\_location\_horde | none |  |  |
| on\_timurid\_ruler\_death | none |  |  |
| on\_vassalized\_appanage | none |  |  |
| wor\_on\_wallenstein\_prison\_occupation | none |  |  |
| wor\_on\_wallenstein\_prison\_timeout | none |  |  |

## References

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

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