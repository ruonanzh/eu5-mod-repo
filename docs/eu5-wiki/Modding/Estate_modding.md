<!-- source: https://eu5.paradoxwikis.com/Estate_modding revid: 19485 fetched: 2026-09-09 -->
# Estate modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Estates modding** covers the creation and modification of estates in Europa Universalis V. Estates represent the major power groups within a country: Crown, Nobles, Clergy, Burghers, Peasants, and others.

Estates are stored in /Europa Universalis V/game/in\_game/common/estates/ as `.txt` files.

## Estate structure

An estate definition specifies power calculations, modifiers, and opinion factors:

```
estate_name = {
    color = estate_color                    # Color identifier for UI

    power_per_pop = 25                      # Power gained per pop
    tax_per_pop = 150                       # Tax income per pop

    rival = -0.01                           # Rivalry factor with other estates
    alliance = 0.01                         # Alliance factor with other estates

    revolt_court_language = court_language  # Language used in revolts

    # Character spawning rules
    characters_have_dynasty = always        # always, sometimes, never
    can_spawn_random_characters = yes
    can_generate_mercenary_leaders = yes
    use_diminutive = no

    bank = yes                              # Can loan money

    # Ruler estate specific
    ruler = yes
    priority_for_dynasty_head = yes

    # Satisfaction modifiers (multiplied by satisfaction - threshold)
    satisfaction = {
        counter_espionage = 0.2
        monthly_prestige = 0.2
    }

    # High power modifiers (when power > threshold)
    high_power = {
        nobles_estate_max_tax = -0.5
        levy_combat_efficiency_modifier = 1.0
    }

    # Low power modifiers (when power < threshold)
    low_power = {
        nobles_estate_max_tax = 0.5
    }

    # Power-based modifiers (scaled by power)
    power = {
        parliament_base_support = 0.5
        trade_income = 1.0
    }

    # Opinion calculations for diplomacy
    opinion = {
        add = {
            desc = "ESTATE_OPINION_BASE"
            value = "opinion(scope:target)"
            multiply = 0.05
        }
    }
}
```

## Key attributes

| Attribute | Description |
| --- | --- |
| `color` | Color identifier for UI display |
| `power_per_pop` | Estate power gained per pop of this type |
| `tax_per_pop` | Tax income generated per pop |
| `rival` | Natural rivalry with other estates (negative = rivalry) |
| `alliance` | Natural alliance with other estates |
| `revolt_court_language` | Language rebels use: `court_language`, `common_language`, `liturgical_language` |
| `characters_have_dynasty` | `always`, `sometimes`, `never` |
| `can_generate_mercenary_leaders` | Whether estate can provide mercenary leaders |
| `bank` | Whether estate can provide loans |
| `ruler` | If true, this is the ruling estate (crown) |
| `use_diminutive` | Use diminutive names for characters |

## Modifier blocks

### satisfaction

Modifiers scaled by `(satisfaction - LOW_SATISFACTION_THRESHOLD)`

### high\_power

Modifiers applied when `(relative_power - LOW_POWER_THRESHOLD) > 0`

### low\_power

Modifiers applied when `(relative_power - LOW_POWER_THRESHOLD) < 0`

### power

Static modifiers scaled by estate power

## Opinion block

Calculates diplomatic opinion from this estate toward other countries:

```
opinion = {
    add = {
        desc = "DESCRIPTION_KEY"
        value = some_value
        multiply = 0.05
    }

    if = {
        limit = { condition }
        add = {
            desc = "CONDITIONAL_OPINION"
            value = 10
        }
    }
}
```

## Base game estates

* `crown_estate` - The ruling power
* `nobles_estate` - Aristocracy
* `clergy_estate` - Religious leaders
* `burghers_estate` - Merchant class
* `peasants_estate` - Common farmers
* `dhimmi_estate` - Protected religious minorities
* `tribes_estate` - Tribal peoples
* `cossacks_estate` - Cossack communities

## Example

```
my_custom_estate = {
    color = custom_estate_color
    power_per_pop = 5
    tax_per_pop = 50
    rival = -0.01
    alliance = 0.01

    revolt_court_language = common_language
    characters_have_dynasty = sometimes
    can_generate_mercenary_leaders = yes

    satisfaction = {
        global_unrest = -0.5
        research_speed_modifier = 0.1
    }

    high_power = {
        global_monthly_development_modifier = 0.1
        monthly_towards_innovative = societal_value_significant_monthly_move
    }

    low_power = {
        global_monthly_development_modifier = -0.1
    }

    opinion = {
        add = {
            desc = "ESTATE_OPINION_BASE"
            value = "opinion(scope:target)"
            multiply = 0.05
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
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |

|  |  |
| --- | --- |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • Estates • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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