<!-- source: https://eu5.paradoxwikis.com/Law_modding revid: 19489 fetched: 2026-09-09 -->
# Law modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Laws modding** covers the creation and modification of laws in Europa Universalis V. Laws are policies that countries can adopt, providing various modifiers and affecting gameplay.

Laws are stored in /Europa Universalis V/game/in\_game/common/laws/ as `.txt` files organized by government type and category.

## Law structure

A law definition specifies categories, options, and modifiers:

```
law_group_name = {
    law_category = administrative       # Law category for UI
    law_gov_group = monarchy            # Government type restriction

    potential = {
        # Conditions for law group to appear
        government_type = government_type:monarchy
    }

    # Law options
    option_name = {
        unique = yes                    # Only one country can have this

        potential = {
            # When this option appears
            tag = XXX
        }

        allow = {
            # Conditions to select this option
            current_age = age_5_absolutism
        }

        country_modifier = {
            # Modifiers applied when selected
            monthly_legitimacy = 0.05
            stability_investment = small_stability_investment
        }

        estate_preferences = {
            # Which estates prefer this option
            clergy_estate
            nobles_estate
        }

        years = 2                       # Cooldown before changing
    }
}
```

## Key attributes

| Attribute | Description |
| --- | --- |
| `law_category` | Category: `administrative`, `military`, `economic` |
| `law_gov_group` | Government type: `monarchy`, `republic`, `theocracy`, `tribe` |
| `potential` | Trigger block for when law group appears |
| `unique` | If yes, only one country can select this option |
| `allow` | Conditions required to select the option |
| `country_modifier` | Modifiers applied when option is active |
| `estate_preferences` | Estates that favor this option |
| `years` | Cooldown years before law can be changed |

## Law categories

* `administrative` - Government and bureaucracy
* `military` - Military organization and levies
* `economic` - Trade and taxation
* `religious` - Religious policies
* `legal` - Legal systems

## Government groups

* `monarchy` - Monarchical governments
* `republic` - Republican governments
* `theocracy` - Religious governments
* `tribe` - Tribal governments

## Estate preferences

Estates that prefer certain law options:

```
estate_preferences = {
    crown_estate
    nobles_estate
    clergy_estate
    burghers_estate
    peasants_estate
}
```

## Base game law groups

### Monarchy Laws

* `feudal_de_jure_law` - Land inheritance (by tradition/by blood)
* `medieval_levy_law` - Military levy organization
* `royal_court_customs_law` - Court policy
* `legitimization_of_power_law` - Rulership philosophy
* `harem_law` - Harem policy (for applicable cultures)

### Military Laws

* `medieval_levy_law` - Levy recruitment policies

## Example

```
my_custom_law = {
    law_category = administrative
    law_gov_group = monarchy

    potential = {
        government_type = government_type:monarchy
    }

    traditional_approach = {
        country_modifier = {
            stability_cost = -0.1
            monthly_towards_traditionalist = societal_value_monthly_move
        }
        estate_preferences = {
            clergy_estate
            nobles_estate
        }
        years = 2
    }

    progressive_approach = {
        country_modifier = {
            research_speed_modifier = 0.1
            monthly_towards_innovative = societal_value_monthly_move
        }
        allow = {
            current_age = age_3_discovery
        }
        estate_preferences = {
            burghers_estate
        }
        years = 2
    }

    unique_country_approach = {
        unique = yes
        potential = {
            tag = ENG
        }
        country_modifier = {
            diplomatic_reputation = 1
            global_monthly_development_modifier = 0.05
        }
        estate_preferences = {
            crown_estate
        }
        years = 2
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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • Laws • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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