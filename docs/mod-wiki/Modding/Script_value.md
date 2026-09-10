<!-- source: https://eu5.paradoxwikis.com/Script_value revid: 29639 fetched: 2026-09-09 -->
# Script value
This article is [timeless](/Category%3ATimeless "Category:Timeless") and should be accurate for any version of the game.
*See also: [Macro](/Macro "Macro")*
**Script values** are mathematical calculations that allow creating dynamic values based on game values during gameplay. Script values generally are used to calculate numerical values, but can also be used for boolean values.
Script values can be used in most scripts that accept numeric values, namely [effects](/Effect "Effect"), [triggers](/Trigger "Trigger"), and [variables](/Variable "Variable"), as well as for many AI behavior calculations.
A script value is calculated every time it is used. This is generally useful; however, in cases where the value might be invoked frequently – such as in localization or a GUI, it is often better to save the value to a variable and display or use that, updating the variable only as needed.
Script values can be defined immediately in an effect or trigger, or they can be defined as an easily reusable named script value.
## Named values and inline values
Named values are defined in .txt files contained in common/script\_values/. Inline values are defined directly at their use with an effect, trigger, or other use. In most cases, named values and inline values are interchangeable.
Named script values use a unique script key, as for example:
```
example_script_value = {
    <script_value_calculations>
}
```
Inline script values are instead defined where a effect, trigger, or another script value expects a numerical or boolean value, for example:
```
add_gold = {
    <script_value_calculations>
}
```
Script values cannot use more than 5 decimal places. If more precision is required in a calculation, first multiply by some power of 10. The largest possible value (most positive) is 92233720368547.75807, while the smallest possible value (most negative) is -92233720368547.75808; exceeding these values can result in over/underflow.[[1]](#cite_note-1)
Be careful of value loops. A value should never depend on itself directly.
### Static values
The simplest script value is just a literal value. This is most useful to ensure a common value is the same for all uses. A static script value is simply a script name with a literal number value following, such as `construction_cost_medium = 400`.
## Formulae and operators
Most script values are a formula, made up of one or more operators. Below are the operators that can be used in script values. Most function in the usual mathematical sense for the given term. Operators are evaluated in linear order, left-to-right, top-to-bottom; there is no order of operations such as PEMDAS/BEDMAS. The right side of most operators can be any numerical value: a literal number, an [scope link](/Scope_link "Scope link") that returns a value, or even another script value. This allows for more complex formulas, and scope links allow using dynamic game values.
| Operator | Description |
| value | Sets script value to this (overwrites any previous value) |
| add | Adds this value to script value |
| subtract | Subtracts this value from the script value |
| multiply | Multiplies the script value by this value |
| divide | Divides the script value by this value |
| modulo | Gets the remainder after dividing the script value by this value |
| max | Sets the script value to this if the script value is larger (more positive) |
| min | Sets the script value to this if the script value is smaller (more negative) |
| round | Rounds script value to an integer; right side is boolean |
| ceiling | Rounds script value up to an integer (more positive); right side is boolean |
| floor | Rounds script value down to an integer (more negative); right side is boolean |
| round\_to | Rounds script value to nearest multiple of this value |
| fixed\_range | Sets script value to a random fixed-point value within range set by contained min and max; right side is a block |
| integer\_range | Sets script value to a random integer value within range set by contained min and max; right side is a block |
| pow | Raises the value to the specified exponent; accepts decimal and negative values; does not return exact value in most cases |
| abs | When set to yes, it will return the absolute value of the statement |
Formulas can also use conditional values with `if`, `else_if`, and `else`, which operate in their usual script manner.
### Examples
A basic formula just uses a number of operators to calculate a final value.
```
example_value = {
  #values start at null/0
  add = 5         #value is 5
  multiply = 4    #value is 20
  max = 10        #value is 10
  subtract = 3    #value is 7
  value = 13      #value is 13
}
```
It is also possible to use inline formulas for the value of an operator; this is equivalent to defining a separate named value and using it as the value for the operator.
```
first_example = {
  add = 6         #value is 6
  multiply = {
    value = 3
    divide = 2
  }               #same as multiply by 1.5, value is now 9
  max = 10        #value is 9
  subtract = 3    #value is 6
}
second_example = {
  add = 6                 #value is 6
  multiply = sub_value    #value is now 9
  max = 10                #value is 9
  subtract = 3            #value is 6
}
sub_value = {
  value = 3
  divide = 2
}
```
[Scope links](/Scope_link "Scope link") that return a value can also be used as the value of an operator. Keep in mind that many [triggers](/Trigger "Trigger") can be used as an scope link, as long as they compare a value.
```
half_treasury = {
  value = gold        #sets value to current gold count
  divide = 2          #divides it by two
}
```
## Script values and scope
Script values are typically calculated in the [scope](/Scope "Scope") where they are called. This matters greatly when using [scope links](/Scope_link "Scope link"), conditional values, and iterators, as most of those depend on certain scopes. For example, the effect `c:POL = { add_gold = half_treasury }` calculates its value from the scope of POL, while `c:FRA = { add_gold = half_treasury }` does so from the scope of France. Depending on the gamestate and formula of `half_treasury`, these could be very different values.
There are two ways of setting a specific scope for a script value:
1. When calling a script value, the script value can be scope stacked with scope links. For example, `c:FRA = { add_gold = c:POL.half_treasury }` gives the same value as `c:POL = { add_gold = half_treasury }`, because `half_treasury` is calculated in POL's scope both times.
2. When defining a formula, the values in the formula can be scoped with scope links or iterators. As `half_treasury` uses the value trigger `gold`, using `c:POL.gold` always uses the value from POL's scope, regardless of where `half_treasury` is called.
These methods can be mixed as well, so that some values may always refer to a defined scope while others refer to the current scope.
## Conditionals
Using the conditionals `if`, `else_if`, and `else` allows formulas to vary in controlled ways depending on gamestate. For example, the following formula results in different values depending on what prestige the country has:
```
example = {
	if = {
		limit = {
			prestige >= 67
		}
		value = 75
	}
	else_if = {
		limit = {
			prestige >= 33
		}
		value = 50
	}
	else = {
		value = 25
	}
}
```
## Iterators
[Iterators](/Iterators "Iterators"), or lists, can be used within formulas to run the same set of operators multiple times. Note that iterators typically change scope, so scope links may require scoping to get the desired value. A common use for iterators is a total sum from some object set, such as owned locations.
This example adds country tax base of every hre member:
```
grant_county_privileges_cost = {
	desc = "grant_county_privileges_cost"
	value = 25
	international_organization:hre ?= {
		every_international_organization_member = {
			add = country_tax_base
		}
		add = "total_payment_contribution(this|imperial_treasury_contribution)"
		if = {
			limit = { total_members > 0 }
			divide = total_members
		}
	}
}
```
While `every_` iterators are generally the most useful for formulas, `ordered_` can be used as well. `random_` is not allowed.
Be mindful of putting operators inside or outside the iterator's block. For example, to get the average infrastructure of owned locations, the division needs to be outside the location scope.
```
test_example = {
	every_owned_location = {
		add = tax_base
	}
	divide = num_locations
}
```
If the division happened inside the location scope, with a valid value, it would be run on each value, rather than the sum value.
## Localization
*Main article: [Localization](/Localization "Localization")*
Script values can be displayed in localization with the function `Scope.ScriptValue('named_script_value')`. See the [localization](/Localization "Localization") page for more information about how to use and format functions.
Moreover, other functions exist:
* Scope.ScriptValue( Arg0 )
* Scope.GetScriptValueDesc( Arg0 )
* TopScope.ScriptValue( Arg0 )
* TopScope.GetScriptValueDesc( Arg0 )
* ShowNamedValue( Arg0 )
In some uses, an operator can be given a description using `desc = loc_key`. The operator must use a block in order to do so. The description is then shown alongside the current value in game. This is commonly used in scripted progress bars for journal entries and for diplomatic acceptance.
## Saved scopes and values
Scopes and values can be saved using `save_temporary_scope_as` and `save_temporary_value_as`. This is effectively identical to the usual saved scope effects, but `save_temporary_value_as` is a unique term used only in script values, in contrast to `save_temporary_scope_value_as` used in effects and triggers. Saved scopes and values are retrieved using the scope link `scope:`.
`save_temporary_value_as` can save the current value of the calculation by using an inline key definition format.
```
test_example = {
	value = prestige
	save_temporary_value_as = previous_value
	# "Reset" the value
	value = 0
	every_owned_location = {
		limit = { province_definition = root.capital.province_definition }
		add = tax_base
	}
	save_temporary_value_as = current_value
	if = {
		limit = {
			scope:current_value > scope:previous_value
		}
		value = scope:current_value
	}
	else = {
		value = scope:previous_value
		multiply = scope:current_value
	}
}
```
This example can compare the value from previous point in script value calculation to one that is calculated later.
Temporary values can also be saved using a block format. This can be useful to set up a value used repeatedly in the script value.
```
test_example2 = {
	save_temporary_value_as = {
		name = reused_value
		value = {
			add = prestige
			multiply = capital.tax_base
		}
	}
}
```
Temporary values are cleared as soon the script value has finished executing and are not accessible from any other script.
## List of example script values
*Main article: [List of example script values](/index.php?title=List_of_example_script_values&action=edit&redlink=1 "List of example script values (page does not exist)")*
This page holds examples of script values that may be useful or interesting to use or learn from. Feel free to add your own.
## @ values
*Not to be confused with the [localization](/Localization "Localization") @ function for texticons*
An **@ value** (or at value) is a more limited version of a script value. An @ value can only be used within the same file and can only be defined in a pure mathematical formula or a literal string, without reference to gamestate. An @ value is thus always constant. @ values can be used in most files – including script values – and are used extensively in gui and graphics related files. Their main purpose is standardization and easy changing of related values.
An @ value can be defined as a simple number, a mathematical formula, a literal string, or another @ value, then whenever that @ value is used, the file replaces its value in place.
Example @ value definitions:
```
@pi = 3.1416
@third = @[1/3]
@width =  @[height*ratio]
@canton_scale_cross_x = @[ ( 333 / 768 ) + 0.001 ]
@this_is_you = "this_is_you.dds"
@default_window_file = "gui/notifications/jomini_message.gui"
@default_window_name = "jomini_message"
```
An @ formula is always wrapped in `@[ ]` and any @ values used within a formula do not use their @. @ formulas can use addition `+`, subtraction `-`, multiplication `*`, and division `/`. These formulas **do** follow PEMDAS/BEDMAS order of operations, and parentheses can be used to group additions and subtractions that should be performed before multiplications or divisions. Spaces can be used or not used freely to separate elements of a formula. Unary negation can be performed with `-` as well: `@[-1]` is equal to `@[0 - 1]`; `@[-1/2]` is equal to `@[1/-2]` is equal to `@[0 - (1/2)]`.
An @ formula can be use in place of a defined @ value as well; for example, `width = @[1/3]` gives the same result as `width = @third`, using the definition above.
When using an @ value outside a formula, it must be called with the @; for example, `max_width = @texture_importer_output_text_width`. In all other ways, it can be used anywhere a literal number or string could be used.
## References
1. [↑](#cite_ref-1) Script values are 64bit with 5 decimal places
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • Script value • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
