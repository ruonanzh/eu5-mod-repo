<!-- source: https://eu5.paradoxwikis.com/Scripted_gui revid: 36962 fetched: 2026-09-09 -->
# Scripted gui

This article has been verified for the current [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") (1.3) of the game.

*See also: [GUI script](/GUI_script "GUI script")*

**Scripted GUI** covers the creation of custom GUI elements that execute script effects in Europa Universalis V. Scripted GUIs allow modders to add interactive buttons and elements to the interface.

Scripted GUI definitions are stored in /Europa Universalis V/game/in\_game/common/scripted\_guis/ as `.txt` files. The actual GUI layout files are in /Europa Universalis V/game/<top\_folder>/gui/.

## Scripted GUI structure

A scripted GUI definition connects triggers and effects to GUI elements:

```
scripted_gui_key = {
    scope = country                     # Scope type for the SGUI

    is_shown = {
        # Trigger: when SGUI is visible
        trigger
    }

    is_valid = {
        # Trigger: when SGUI can be activated
        trigger
    }

    effect = {
        # Effect: what happens on activation
        effect
    }

    saved_scopes = { scopes }           # Scopes to save for use in triggers/effects

    notification_key = key              # Notification when activated

    confirm_title = { }                 # Confirmation window title
    confirm_text = { }                  # Confirmation window text

    ai_is_valid = {
        # Trigger: whether AI can use this
        trigger
    }

    ai_chance = {
        # MTTH value 1-100: AI activation chance
    }

    ai_frequency = {
        # Script value: months between AI evaluations
    }
}
```

## Key attributes

| Attribute | Description |
| --- | --- |
| `scope` | Scope type: `country`, `character`, `location`, etc. |
| `is_shown` | Trigger block - when element is visible |
| `is_valid` | Trigger block - when element can be clicked |
| `effect` | Effect block - what happens on click |
| `saved_scopes` | List of scope names to make available in triggers/effects |
| `notification_key` | Notification key when activated |
| `confirm_title` | Localization for confirmation dialog title |
| `confirm_text` | Localization for confirmation dialog text |
| `ai_is_valid` | Whether AI can use this SGUI |
| `ai_chance` | AI probability of using (1-100) |
| `ai_frequency` | Months between AI checks |

## Scope types

*See also: [Scope](/Scope "Scope"), [Scope link](/Scope_link "Scope link")*

* `country` - Country scope
* `character` - Character scope
* `location` - Province/location scope
* `war` - War scope
* `army` - Army scope
* `navy` - Navy scope
* `international_organization` - Organization scope

## Connecting to GUI

*See also: [Interface modding](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)")*

Scripted GUIs are referenced in GUI files using `scripted_gui`:

```
button = {
    using = default_button
    onclick = "[GetScriptedGui('my_scripted_gui').Execute(GuiScope.SetRoot(GetPlayer.MakeScope).End)]"
    visible = "[GetScriptedGui('my_scripted_gui').IsShown(GuiScope.SetRoot(GetPlayer.MakeScope).End)]"
    enabled = "[GetScriptedGui('my_scripted_gui').IsValid(GuiScope.SetRoot(GetPlayer.MakeScope).End)]"
}
```

List of ScriptedGui functions

| Function | Arguments | Output | Description |
| --- | --- | --- | --- |
| AccessSelf |  | ScriptedGui |  |
| BuildTooltip | 1. unknown | CString |  |
| Execute | 1. unknown | void |  |
| ExecuteTooltip | 1. unknown | CString |  |
| IsShown | 1. unknown | bool |  |
| IsShownTooltip | 1. unknown | CString |  |
| IsValid | 1. unknown | bool |  |
| IsValidTooltip | 1. unknown | CString |  |
| Self |  | ScriptedGui |  |

`GuiScope` returns a "TopScope" type which has its own set of [promotes and functions](/GUI_script "GUI script").

## Saved scopes

Define scopes to use across is\_shown, is\_valid, and effect:

```
my_scripted_gui = {
    scope = country
    saved_scopes = { target_country target_character }

    is_valid = {
        scope:target_country = { is_at_war = no }
    }

    effect = {
        scope:target_character = {
            add_trait = rewarded
        }
    }
}
```

These additional scopes are then passed from the GUI definition file with AddScope :

```
onclick = "[GetScriptedGui('my_scripted_gui').Execute(GuiScope.SetRoot(Country.MakeScope).AddScope('target_country', ...).AddScope('target_character', ...).End)]"
```

## AI usage

AI chance uses [mean time to happen](/Mean_time_to_happen "Mean time to happen") syntax.

```
my_ai_scripted_gui = {
    scope = country

    is_shown = { always = yes }
    is_valid = { gold >= 100 }

    effect = {
        add_gold = -100
        add_prestige = 10
    }

    ai_is_valid = {
        gold >= 500    # AI needs more gold than minimum
    }

    ai_chance = {
        base = 5

        modifier = {
            add = 60
            trigger = {
                OR = {
                    NOT = { has_variable = tge_research }
                    var:tge_research < 0.3
                }
                monthly_income_trade_and_tax > 5
            }
        }
    }

    ai_frequency = 6
}
```

## Example

```
my_custom_button = {
    scope = country

    is_shown = {
        has_variable = custom_feature_enabled
    }

    is_valid = {
        gold >= 50
        stability >= 0
        is_at_war = no
    }

    effect = {
        add_gold = -50
        add_stability = 0.5
        add_country_modifier = {
            modifier = custom_modifier
            years = 5
        }
    }

    saved_scopes = { }

    notification_key = custom_button_notification

    confirm_title = {
        first_valid = {
            triggered_desc = {
                desc = "CUSTOM_BUTTON_CONFIRM_TITLE"
            }
        }
    }

    confirm_text = {
        first_valid = {
            triggered_desc = {
                desc = "CUSTOM_BUTTON_CONFIRM_TEXT"
            }
        }
    }

    ai_is_valid = {
        gold >= 200
    }

    ai_chance = {
        base = 25
    }

    ai_frequency = 12
}
```

## GUI file integration

Create a matching GUI file in <mod>/<top\_folder>/gui/:

```
types MyCustomTypes {
    type my_custom_button_widget = widget {
        size = { 200 50 }

        button = {
            using = default_button
            size = { 100% 100% }

            text = "MY_BUTTON_TEXT"

            onclick = "[GetScriptedGui('my_scripted_gui').Execute(GuiScope.SetRoot(GetPlayer.MakeScope).End)]"
            visible = "[GetScriptedGui('my_scripted_gui').IsShown(GuiScope.SetRoot(GetPlayer.MakeScope).End)]"
            enabled = "[GetScriptedGui('my_scripted_gui').IsValid(GuiScope.SetRoot(GetPlayer.MakeScope).End)]"

            tooltip = "MY_BUTTON_TOOLTIP"
        }
    }
}
```

## Common patterns

### Toggle button

```
toggle_feature = {
    scope = country

    is_shown = { always = yes }

    is_valid = { always = yes }

    effect = {
        if = {
            limit = { has_variable = feature_enabled }
            remove_variable = feature_enabled
        }
        else = {
            set_variable = feature_enabled
        }
    }
}
```

### Cooldown button

```
cooldown_action = {
    scope = country

    is_shown = { always = yes }

    is_valid = {
        NOT = { has_variable = action_cooldown }
        gold >= 100
    }

    effect = {
        add_gold = -100
        set_variable = {
            name = action_cooldown
            years = 5
        }
    }
}
```

## References

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

|  |  |
| --- | --- |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • Scripted gui • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |

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