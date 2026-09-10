<!-- source: https://eu5.paradoxwikis.com/Institution_modding revid: 19487 fetched: 2026-09-09 -->
# Institution modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Institutions modding** covers the creation and modification of institutions in Europa Universalis V. Institutions represent major societal developments that spread across the world over time.

Institutions are stored in /Europa Universalis V/game/in\_game/common/institution/ as `.txt` files organized by age.

## Institution structure

An institution definition specifies spawn conditions and spread mechanics:

```
institution_name = {
    age = age_1_traditions              # Age when institution becomes available

    can_spawn = {
        # Conditions for institution to first appear
        continent = continent:europe
        has_owner = yes
        num_pop_type:nobles > 0.1
    }

    promote_chance = {
        # Factors affecting spawn probability
        add = {
            value = num_pop_type:nobles
            multiply = 10
        }
    }

    # Spread mechanics (hardcoded for optimization)
    spread_from_friendly_coast_border_location = {
        value = institution_base_spread_from_friendly_neighbor_with_early
        add = {
            value = num_pop_type:nobles
            multiply = 0.5
        }
    }
    spread_from_any_coast_border_location = institution_base_spread_from_neighbor_with_early
    spread_from_any_import = institution_trade_spread_value_early
    spread_scale_on_control_if_owner_embraced = 2
    spread_embraced_to_capital = institution_total_embraced_to_capital_early
    spread_to_market_member = institution_spread_to_market_member_early
}
```

## Key attributes

| Attribute | Description |
| --- | --- |
| `age` | Age when institution can spawn: `age_1_traditions` through `age_6_revolutions` |
| `can_spawn` | Trigger block - conditions for institution to first appear in a location |
| `promote_chance` | Script value - factors that increase spawn probability |

## Spread mechanics

| Attribute | Description |
| --- | --- |
| `spread_from_friendly_coast_border_location` | Spread from friendly neighboring coastal locations |
| `spread_from_any_coast_border_location` | Spread from any neighboring coastal location |
| `spread_from_any_import` | Spread through trade routes |
| `spread_scale_on_control_if_owner_embraced` | Multiplier when owner has embraced |
| `spread_embraced_to_capital` | Spread rate to capital when country embraces |
| `spread_to_market_member` | Spread rate to market members |

## Spread script values

Common script values for spread rates:

* `institution_base_spread_from_friendly_neighbor_with_early`
* `institution_base_spread_from_neighbor_with_early`
* `institution_trade_spread_value_early`
* `institution_total_embraced_to_capital_early`
* `institution_spread_to_market_member_early`

## Ages

* `age_1_traditions` - Age of Traditions (game start)
* `age_2_renaissance` - Renaissance
* `age_3_discovery` - Age of Discovery
* `age_4_reformation` - Reformation
* `age_5_absolutism` - Age of Absolutism
* `age_6_revolutions` - Age of Revolutions

## Base game institutions

### Age 1 (Traditions)

* `feudalism` - European feudal system
* `legalism` - Legal systems and bureaucracy
* `meritocracy` - Asian merit-based governance

## Example

```
my_custom_institution = {
    age = age_3_discovery

    can_spawn = {
        continent = continent:europe
        has_owner = yes
        owner ?= { root = capital }
        location_rank = location_rank:city
        development >= 20
    }

    promote_chance = {
        add = {
            value = development
            multiply = 0.5
        }
        add = {
            value = num_pop_type:burghers
            multiply = 10
        }
    }

    spread_from_friendly_coast_border_location = institution_base_spread_from_friendly_neighbor_with_early
    spread_from_any_coast_border_location = institution_base_spread_from_neighbor_with_early
    spread_from_any_import = institution_trade_spread_value_early
    spread_scale_on_control_if_owner_embraced = 2
    spread_embraced_to_capital = institution_total_embraced_to_capital_early
    spread_to_market_member = institution_spread_to_market_member_early
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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • Institutions • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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