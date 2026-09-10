<!-- source: https://eu5.paradoxwikis.com/Color revid: 22225 fetched: 2026-09-09 -->
# Color

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Colors** are script features that allow for representation of colors in ingame script.

## Color modes

Just like real computer graphics, the game has more than one way to represent a color. In order to do that, the game uses color modes before a color definition. Below is a set of examples that represent each one.

### RGB

The most common and basic representation of a color in Europa Universalis V is [RGB](http://en.wikipedia.org/wiki/RGB_color_model "wikipedia:RGB color model"), represented via `rgb`:

```
map_example = rgb { 255 0 255 }
```

The first value in such a sequence represents the value of red on a scale from 0 to 255 included. Analogically, the second represents green and the third represents blue.

RGB values can also be scaled down and represented on a basis of scale from 0 to 1 - if all numbers are <= 1 the game will assume the color is in this scale:

```
map_example = rgb { 0.5 0 0.5 }
```

This is equivalent to `map_example = rgb { 127 0 127 }`.

Moreover, when the color mode is ommitted, the color definition is also treated as RGB - it is however recommended to always use the explicit form for collaboration projects.

### HSV

The other commonly used model for color values is [HSV](http://en.wikipedia.org/wiki/HSL_and_HSV "wikipedia:HSL and HSV"), represented via `hsv`:

```
map_example = hsv { 0.66 0.33 0.38 }
```

The first value represents hue in scale of 0 to 1, the second is saturation from scale of 0 to 1 and third is value on scale of 0 to 1.

### HSV360

`hsv360` is an alternative way of representing a HSV value:

```
map_example = hsv360 { 355 70 90 }
```

The first integer represents hue on scale of 0 to 360, the second is saturation on scale of 0 to 100 and the third one is value on scale of 0 to 100.

### HEX

The last way to represent a color is to represent an RGBA value in hexadecimal using `hex`. This format requires the alpha value to be provided but for most intents and purposes it can be represented as `ff`.

The following are therefore, equivalent:

```
map_example = hex { ff7f00ff }
map_example = rgb { 255 127 0 255 }
```

### Alpha values

`rgb`, `hsv` and `hsv360` values were previously shown as three number combinations but all of them also have a fourth, optional value - alpha - the degree of how transparent the color is. If those formats omit the fourth number, the alpha is set to maximum, making the color fully opaque. There is no known use for non-opaque colors in Europa Universalis V at the moment.

```
map_example = rgb { 0.5 0 0.5 0.5 }
map_example = hsv { 0.66 0.33 0.38 0.5 }
map_example = hsv360 { 355 70 90 50 } # the alpha channel is on scale from 0 to 1
```

## Colors as scopes

Technically, colors are also scopes and can be saved in variables, with the main way being done via [country\_color](/Scope_links#country_color "Scope links")

```
set_variable = {
	name = example
	value = c:FRA.country_color
}
```

However, such calls do not recognize the color mode constructions ( rgb { } ), leading to severe syntax errors.

Moreover, few spots actually support color scopes, the notable being the value statements of [Scripted math with colors](#Scripted_math_with_colors).

## Named colors

Named colors

**Game folderThis is the folder where the files for this type are stored.:** `common/named_colors`

---

**Recommended top folderThis is the recommended top folder for the type folder:** `main_menu`

---

**File encodingThis is the required file encoding for this type:** `UTF-8 BOM`

---

**InjectableCan the `INJECT` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")
**ReplaceableCan the `REPLACE` database functions be used with this type?:** ![Unknown](https://central.paradoxwikis.com/images/thumb/d/dd/Unknown.png/24px-Unknown.png "Unknown")

Colors can be saved under certain keys in named colors folder. The keys of those named colors can then be inserted in the place of actual usage to allow for reuse.

All colors in `named_colors` need to be inserted inside `colors`.

Named colors only serve as color definitions. They cannot use scripted math logic for colors.

### Example

```
colors = {
	map_debug = rgb { 255 0 255 }
	map_arpitan = rgb { 235 196 231 }
	map_austrian = rgb { 220 220 220 }
	map_german = hsv360 { 180 10 50 }
	<...>
}
```

## Scripted math with colors

Some fields, mainly those utilizing colors for mapmodes, will allow the use of using scripted math for assigning colors:

```
map_color = {
	if = {
		limit = {
			owner ?= {
				OR = {
					overlord ?= { is_member_of_international_organization = international_organization:foreign_league_france }
					is_member_of_international_organization = international_organization:foreign_league_france
				}
			}
		}
		value = map_french_league_leader
	}
	# Iberian League
	else_if = {
		limit = {
			owner ?= {
				OR = {
					overlord ?= { is_member_of_international_organization = international_organization:foreign_league_iberia }
					is_member_of_international_organization = international_organization:foreign_league_iberia
				}
			}
		}
		value = map_iberian_league_leader
	}
}
```

Syntax wise, scripted color math is similar to [script value math](/Script_value "Script value"), except it does not allow for mathematical formulae. Here is a list of what is permitted, though:

| Name | Description |
| --- | --- |
| value | Sets the current value to the color on RHS |
| lerp | See [lerp](#Lerp) |
| if | See [Conditionals on Script value](/Script_value#Conditionals "Script value") |
| else\_if | See [Conditionals on Script value](/Script_value#Conditionals "Script value") |
| else | See [Conditionals on Script value](/Script_value#Conditionals "Script value") |
| save\_temporary\_scope\_as | See [Script value page](/Script_value#Script_value#Saved_scopes_and_values "Script value") |
| save\_temporary\_value\_as | See [Script value page](/Script_value#Script_value#Saved_scopes_and_values "Script value") |

### Lerp

Lerp is a special operator that can be used in place of `value` for scripted color math - it calculates a color between two set colors using a [Script value](/Script_value "Script value") in `factor`. Lerp has 3 different modes based on arguments provided, with some allowing for additional control using `mid_point`.

When lerp is inserted, it will set the color value to the result of the internal math.

#### Min color, max color

Min color and max color mode is the most common mode for lerp, it calculates a color between color in `min_color` and `max_color` based on 0-1 value from `factor` script value.

```
lerp = {
	min_color = define:NMapColors|MAP_COLOR_LOW
	max_color = define:NMapColors|MAP_COLOR_HIGH
	factor = {
		value = location_works_of_art_star_rating
		divide = 5
	}
}
```

#### Min color, middle color, max color

Min color, middle color and max color is a mode that works similarly to min color, max color but also utilizes a color to be used in the middle point - `mid_color`. The middle point is, by default, 0.5, but can be specified using `mid_point` script value.

```
lerp = {
	min_color = map_red
	mid_color = map_yellow
	max_color = map_green
	factor = {
		value = location_works_of_art_star_rating
		divide = 5
	}
}
```

An example with `mid_point`:

```
lerp = {
	min_color = map_red
	mid_color = map_yellow
	mid_point = 0.25 # 0 - 0.25 will be colors going from red to yellow and 0.25-1 will be yellow going to green. This also means that rate of change is going to be faster in the first quarter than in last 3 quarters.
	max_color = map_green
	factor = {
		value = location_works_of_art_star_rating
		divide = 5
	}
}
```

#### Min color, middle color, max color with valley points

By using `valley_start` and `valley_end` script values instead of `middle_point` we can define a range of values where the color will "sit" at the middle color point:

```
lerp = {
	min_color = map_red
	mid_color = map_yellow
	max_color = map_green
	valley_start = 0.25	# 0 - 0.25 will be red turning to yellow
	# 0.25 - 0.75 will be yellow
	valley_start = 0.75
	# 0.75 - 1.00 will be yellow turning to green
	factor = {
		value = location_works_of_art_star_rating
		divide = 5
	}
}
```

#### Min color, low color, middle color, high color, max color

This five color mode allows for transition through through 5 different colors.

```
lerp = {
	min_color = map_red
	# from 0 to 0.25: red to yellow transition
	low_color = map_yellow
	# from 0.25 to 0.5: yellow to green
	mid_color = map_green
	# from 0.5 to 0.75: green to blue
	high_color = map_blue
	# from 0.75 to 1.00: blue to red
	max_color = map_red
	factor = {
		value = location_works_of_art_star_rating
		divide = 5
	}
}
```

There's also a variation with `mid_point` script value available, which will change the logic in the following:

```
lerp = {
	mid_point = 0.4

	min_color = map_red
	# from 0 to 0.2: red to yellow transition
	low_color = map_yellow
	# from 0.2 to 0.4: yellow to green
	mid_color = map_green
	# from 0.4 to 0.7: green to blue
	high_color = map_blue
	# from 0.7 to 1.00: blue to red
	max_color = map_red
	factor = {
		value = location_works_of_art_star_rating
		divide = 5
	}
}
```

## References

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  Colors • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

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