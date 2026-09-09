<!-- source: https://eu5.paradoxwikis.com/Flag_modding revid: 36730 fetched: 2026-09-09 -->
# Flag modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

Country flags in Europa Universalis V are selected by [triggers](/Triggers "Triggers") from scripted *coats of arms* which are made up of one or more graphical elements.

## Flag definition

Country flag selection is scripted in main\_menu/common/flag\_definitions/. Each country with one or more defined flags should have its TAG listed as a block with a `flag_definition` block for each possible flag. The following example is taken from /Europa Universalis V/game/main\_menu/common/flag\_definitions/00\_flag\_definitions.txt.

```
# FLAG_DEFINITION_LIST = {		# countries search for a list with the same name as their tag, the DEFAULT list is always included, if no flag definition is applicable for a country then its tag is used a COA_KEY
# 	includes = ANOTHER_LIST		# includes another list in this list, can be repeated
#
# 	flag_definition = {			# the flag definitions that make up this list, can be repeated
# 		coa = [list] COA_KEY	# main flag, optional list keyword denotes a coa template
# 		allow_overlord_canton = yes				# default no
# 		coa_with_overlord_canton = <[list] coa>	# flag where a canton can be placed, optional list keyword same as above, defaults to coa
# 		overlord_canton_offset = { x y }		# canton placement offset, default { 0 0 }
# 		overlord_canton_scale = { x y }			# canton placement scale, default { 0.5 0.5 }
# 		subject_canton = [list] COA_KEY	# canton applied to subjects by this country, optional list keyword same as above
#
# 		priority = value		# valid flag definition with the highest priority applies
# 		trigger = {}			# a trigger that determines if this flag definition is valid, see below for scope
#       allow_revolutionary_indicator = no      # Default = yes. If yes, a temporary revolutionary indicator will appear while the country is revolutionary
#       revolutionary_canton = [list] COA_KEY   # Optional. Default = default_revolutionary_canton. Defines which flag should be used as canton while this country is revolutionary
# 	}
# }
# revolutionary is not in use for the moment.
```

The following is an example from the vanilla file with added commentary.

```
ENG = { # England
	flag_definition = {
		coa = ENG								#Default flag when this definition is valid
		subject_canton = ENG					#This COA is added to the canton of this country's subjects, it does not need to match the main flag, defaults to no canton if not defined
		allow_overlord_canton = yes				#Can another country's canton be added to this flag
		coa_with_overlord_canton = ENG_subject	#Alternate COA for adding the overlords canton, e.g. to move central emblems to one side, defaults to main flag
		priority = 1							#Highest, i.e. greatest value priority definition which passes its triggers is used
	}
	flag_definition = {
		coa = ENG_nordic
		subject_canton = ENG
		allow_overlord_canton = yes
		priority = 2
		trigger = {
			coa_def_christian_trigger = yes
			coa_def_nordic_trigger = yes
		}
	}
	etc
}
```

If a country doesn't have a scripted flag definition list, it searches for a coat of arms with its tag as the key term, and failing that the game generates a flag from scripted random elements. Defining a coat of arms as `TAG_REVOLT` makes rebellions from that tag use that coat of arms automatically.

### Trigger scope rules

Flag definition triggers have three possible states and a number of saved scopes available.

|  | Saved scope value for: | | |
| --- | --- | --- | --- |
| Scope term | Existing country | Releasing a country | Forming a country |
| root | Definition | Definition | Definition |
| target | Country | N/A | N/A |
| initiator | N/A | Player | Player |
| actor | Country | Player | Player |
| overlord | Country's direct overlord, if any | Player | Player's direct overlord, if any |

## Coat of arms

*You can find most in-game flags on this wiki at [List of flags](/List_of_flags "List of flags"); that page does not include countries with only one defined flag.*

Coats of arms (CoA) are the actual flags, which are referenced in the flag definition files. A CoA is scripted a named block with a list of graphical elements, namely *patterns*, *colored emblems*, *textured emblems*, and *subs*. The CoAs are defined in /main\_menu/common/coat\_of\_arms/coat\_of\_arms/. These elements typically have an inherent dimension of 384 × 256 pixels, though some are 256×256. Except for subs, which are references to other CoAs, these are image files which can be found in /main\_menu/gfx/coat\_of\_arms/colored\_emblems, /main\_menu/gfx/coat\_of\_arms/patterns and /main\_menu/gfx/coat\_of\_arms/textured\_emblems.

As an example, the definition on the left generates the flag on the right.

|  |  |
| --- | --- |
| ``` …/game/main_menu/common/coat_of_arms/coat_of_arms/pre_scripted_countries.txt HUN_bohemia_per_pale = { # Sigismund's arms (per pale variant) 	pattern = "pattern_solid.dds" 	color1 = "red" 	color2 = "white" 	color3 = "yellow" 	color4 = "black"  	colored_emblem = { 		texture = "ce_barry_08.dds" 		color1 = color1 		color2 = color2 		instance = { position = { 0.5 0.5 } scale = { 1.0 1.0 } }	 	} 	colored_emblem = { 		texture = "ce_solid.dds" 		color1 = color1 		color2 = color1 		instance = { position = { 0.75 0.5 } scale = { 0.5 1.0 } }				 	}	 	colored_emblem = { 		texture = "ce_lion_queue_forchee_crowned_wide.dds" 		color1 = color2 		color2 = color3 		color3 = color3 		instance = { position = { 0.75 0.5 } scale = { 0.85 0.925 } }			 	}	 	colored_emblem = { 		texture = "ce_divider_per_pale.dds" 		color1 = color4 		color2 = color4		 	}		 } ``` | ![HUN_bohemia_per_pale](/thumb.php?f=Flag_HUN_bohemia_per_pale.png&width=330 "HUN_bohemia_per_pale") |

The color names are defined in /Europa Universalis V/game/main\_menu/common/named\_colors/, where they are defined as HSV, HSV360, or RGB, or RGB decimal values.

### Pattern

Each CoA starts with a pattern as its base. Patterns are found in /Europa Universalis V/game/main\_menu/gfx/coat\_of\_arms/patterns/. Each pattern image acts as a mask, with its red color being replaced by color1, and its yellow color – if present – by color2, and a few patterns have a third white color replaced by color3. In addition to setting the flag's base colors, the pattern can mask elements of a colored emblem, hiding the emblem where the pattern and emblem intersect.

Patterns are added to a CoA with `pattern = "pattern_name"` including the file extension in pattern\_name.

It is possible to assign named colors to `color<#>` which are not used by the pattern, these can be used in colored emblem elements. Similarly, it is possible to define two different `color<#>` to have the same named color.

Patterns always are the lowest layer of the coat of arms

### Emblem

Emblems are more detailed designs that are layered on top of patterns and each other. They are layered from first to last definition, as well as colored emblem to textured emblem, such that the earliest defined emblem is overlaid by the rest and only the finally defined emblem is fully visible if there is any overlap, while textured emblems will always be above colored emblems. There are two types of emblems: colored emblems and textured emblems.

Colored emblems are similar to patterns, with the emblem image acting as a mask for the defined colors. Colored emblems use the blue color channel for brightness. By default an area is defined as color1, adding green defines color 2 while adding red defines color 3. So an example for a color1 pixel's rgb values would be R0 G0 B128, while color2 would be R0 G255 B128 and color3 would be R255 G0 B128. In this case the blue value is roughly the middle of the spectrum, this results in the area in question being depicted as the exact color defined in flag script, while increasing the blue value makes it lighter and decreasing makes it darker, with a blue value of 0 corresponding to black and one of 255 corresponding to white.

Textured emblems are premade images, which are added to the CoA as is. These are useful for adding emblems to a flag which contain more than 3 different colors or do not need to allow for easy recoloring, such as elaborate seals or heraldry.

Emblems are added to a CoA by adding a block with the type of emblem, either colored\_emblem or textured\_emblem, then defining the emblem with `texture = "emblem_name"` including the file extension like with patterns. Colored emblems need a number of colors equal to amount used in the emblem image. Both types of emblems can be modified by including one or more `instance` blocks. Each instance block adds the emblem to the flag once and allows for manipulating its scale, position, and rotation.

Scale modifies the size of the emblem as a percentage, independently in the x and y axes; position moves the emblem so its center point is positioned relative to the top left of the flag, and rotation rotates the emblem clockwise by that number of degrees.

Emblems are layered in order, with the first defined emblem just above the pattern, the next above that, and so forth.

### Sub

Sub treats another CoA like a textured emblem, with the main difference being that the CoA is called with `parent = "CoA_Name"` and a CoA with a sub as part of its definition can't be used as a sub in another CoA (no nesting or recursion). Sub can still use instance, to duplicate and/or modify the incorporated CoA.

Subs are also layered in order, but they always go above any emblems, even if the sub is defined before the emblem.

### Overwriting coats of arms

*See also: [Mod files load order](/Mod_files_load_order "Mod files load order")*

Base game coats of arms can be overwritten by defining a new version of that coat of arms in a mod file with a name that comes after the base game file in ASCII sorting. For example, a definition `SWE` in a file named `zz_mod_coats_of_arms.txt` would overwrite the base game definition `SWE` which is in `pre_scripted_countries.txt`. This allows better integration of modded flags with base game flags as base game files do not need to be modified.

## Dynasty emblems

Dynasty shields are scripted in the same way as flag coats of arms. The primary difference being a tall width-to-height ratio (1:2) rather than the wide one that flags have (3:2). Base game examples can be found in /Europa Universalis V/game/main\_menu/common/coat\_of\_arms/coat\_of\_arms/pre\_scripted\_dynasties.txt

## Coat of arm templates

*See also: [Category:Generated flags](/Category%3AGenerated_flags "Category:Generated flags")*

Templates are a method of generating "randomized"[[1]](#cite_note-1) coats of arms. This is used to generate flags for many countries without any definite historical emblem or flag.

Templates are defined in a `template = { }` with each template given its own script name, such as `template_charge` or `template_centered_coa`[[2]](#cite_note-2). These templates generally use lists from /Europa Universalis V/game/main\_menu/common/coat\_of\_arms/template\_lists to randomly select colors, patterns, and emblems. The templates are themselves gather in lists in /Europa Universalis V/game/main\_menu/common/coat\_of\_arms/template\_lists/coa\_templates.txt for use in flag definitions.

Lists of coat of arm templates can be given script names to refer to in flag definitions. And a default list `all` is used as the default fallback if no valid flag definition can be found for a country.

## Script terms

The following table is a list of script terms used in defining coats of arms.

| Term | Function | Example | Used in | | | |
| --- | --- | --- | --- | --- | --- | --- |
| Base | CE | TE | Sub |
| pattern | Calls a pattern file | `pattern = "pattern_solid.tga"` | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") |
| color<#> | Defines a color for a pattern or colored emblem Refers to a named color, or previously defined color Can also define an arbitrary color, in hsv360 or rgb format[[3]](#cite_note-3) | `color1 = "red"` `color1 = color3` `color1 = hsv360{ 180 50 50 }` | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") |
| colored\_emblem | Begins a colored emblem block | `colored_emblem = { … }` | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") |
| textured\_emblem | Begins a textured emblem block | `textured_emblem = { … }` | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") |
| list | A modifier to `pattern`, `color`, or `texture` Refers to a weighted list of such elements rather than a specific one | `color1 = list "normal_colors"` `pattern = list "pattern_borders"` `texture = list "charge"` | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") |
| sub | Begins a sub block | `sub = { … }` | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") |
| texture | Calls an emblem file | `emblem = "ce_solid.dds"` | ![No](/thumb.php?f=No.png&width=24 "No") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![No](/thumb.php?f=No.png&width=24 "No") |
| parent | Calls a CoA definition | `parent = "sub_SWE_union_mark"` | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | ![No](/thumb.php?f=No.png&width=24 "No") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") |
| instance | Begins an instance block | `instance = { … }` | ![No](/thumb.php?f=No.png&width=24 "No") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") |
| mask | Selects which part of the pattern shows the emblem or sub | `mask = { 1 }` | ![No](/thumb.php?f=No.png&width=24 "No") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") | ![Yes](/thumb.php?f=Yes.png&width=24 "Yes") |

The following are terms used inside of an *instance* block. All values inside these terms can be replaced by [prescripted values](/Macro#@_values "Macro") with `@prescripted_value_name` or use mathematical expressions with `@[expression]`. The latter is especially useful for values such as 1/3 or 1/6 that are imprecise in fixed decimal. For example, 1/3 would be written as  `@[1/3]`.

| Term | Function | Example | Example explanation |
| --- | --- | --- | --- |
| scale | Scales the instance as a percentage of default size in x y format | `scale = { 0.5 0.25 }` | Scaled to half size horizontally and quarter size vertically |
| position | Moves the center of the instance as a percentage relative to the top left of the base in x y format | `position = { 0.25 0.75 }` | Centered one quarter from left and three quarters from top of base |
| rotation | Rotates the instance clockwise by that many degrees (counterclockwise for negative values) | `rotation = { 45 }` | Rotated 45 degrees clockwise |

## References

1. [↑](#cite_ref-1) A given combination seems to be stable for given conditions, namely a country's internal game ID; a tag with a generated flag keeps the same flag across games.
2. [↑](#cite_ref-2) Note that the "template" in these script names is likely just for human readability, not a strict requirement
3. [↑](#cite_ref-3) No base game examples of other color formats exist yet

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
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • Flags |

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