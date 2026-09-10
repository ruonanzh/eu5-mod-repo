<!-- source: https://eu5.paradoxwikis.com/Character_modding revid: 19483 fetched: 2026-09-09 -->
# Character modding
**Character modding** covers character interactions in Europa Universalis V. Character interactions are actions that can be performed on or by characters such as rulers, heirs, and nobles.
Character interactions are stored in /Europa Universalis V/game/in\_game/common/character\_interactions/ as individual `.txt` files.
## Character interaction structure
An interaction defines conditions, costs, and effects:
```
interaction_name = {
    message = yes                   # Show notification
    is_consort_action = no          # Whether this affects consorts
    on_own_nation = yes             # Can be used within own nation
    price = price:interaction_price # Script value for cost
    price_modifier = {
        # Dynamic price adjustments
        add = 1
        if = {
            limit = { scope:recipient ?= { age_in_years > 40 } }
            subtract = {
                desc = "CHAR_AGE_LABEL"
                value = age_in_years
                subtract = 40
                multiply = 0.02
            }
        }
    }
    potential = {
        # Conditions for interaction to appear
    }
    allow = {
        # Conditions to enable interaction
        scope:actor = {
            has_heir = yes
        }
    }
    select_trigger = {
        # Target selection UI
        looking_for_a = character
        source = actor
        target_flag = recipient
        name = "choose_character"
        column = {
            data = name
        }
        visible = { trigger }
        enabled = { trigger }
    }
    effect = {
        # What happens when interaction is used
        scope:actor = {
            set_new_ruler = heir
        }
    }
    ai_tick = daily
    ai_tick_frequency = 120         # How often AI checks this
    ai_will_do = {
        # AI decision weight
        add = {
            desc = "REASON"
            value = some_value
        }
    }
}
```
## Key attributes
| Attribute | Description |
| `message` | Whether to show a notification message |
| `is_consort_action` | If true, interaction involves consorts |
| `on_own_nation` | If true, can only target own nation's characters |
| `price` | Cost to perform the interaction (uses price definition) |
| `price_modifier` | Dynamic modifications to the price |
| `potential` | Triggers for when interaction appears |
| `allow` | Triggers for when interaction can be used |
| `effect` | Effects executed when interaction is performed |
| `ai_tick` | How often AI evaluates: `daily`, `monthly` |
| `ai_tick_frequency` | Days between AI evaluations |
| `ai_will_do` | AI decision weight calculation |
## Select trigger
Used to let players choose character targets:
```
select_trigger = {
    looking_for_a = character
    source = actor
    target_flag = recipient
    name = "localization_key"
    column = {
        data = name
    }
    visible = {
        scope:actor = {
            ruler ?= root
        }
    }
    enabled = {
        is_adult = yes
    }
}
```
## Common character scopes
* `scope:actor` - The country initiating the action
* `scope:recipient` - The character being acted upon
* `root` - The current character in iteration
## Example
```
grant_title = {
    message = yes
    on_own_nation = yes
    price = price:grant_title_price
    potential = {
        scope:actor = {
            government_type = government_type:monarchy
        }
    }
    allow = {
        scope:recipient = {
            is_adult = yes
            NOT = { has_title = yes }
        }
    }
    select_trigger = {
        looking_for_a = character
        source = actor
        target_flag = recipient
        name = "select_noble"
        column = {
            data = name
        }
        visible = {
            estate_type = estate_type:nobles_estate
        }
        enabled = {
            is_adult = yes
        }
    }
    effect = {
        scope:recipient = {
            add_character_modifier = {
                modifier = titled_noble
                years = -1
            }
        }
        scope:actor = {
            add_estate_satisfaction = {
                type = estate_type:nobles_estate
                value = 0.05
            }
        }
    }
    ai_tick = monthly
    ai_tick_frequency = 60
    ai_will_do = {
        add = 10
        multiply = {
            value = scope:recipient.total_abilities
            multiply = 0.01
        }
    }
}
```
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • Characters • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
