<!-- source: https://eu5.paradoxwikis.com/International_organization_modding revid: 31107 fetched: 2026-09-09 -->
# International organization modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**International organization modding** covers the creation and modification of international organizations in Europa Universalis V. These include organizations like the Holy Roman Empire, coalitions, crusades, and defensive leagues.

International organizations are stored in /Europa Universalis V/game/in\_game/common/international\_organizations/ as individual `.txt` files.

## Organization structure

An international organization definition is complex and includes membership, leadership, and governance:

```
organization_name = {
    has_target = no                     # Whether org targets a country
    unique = yes                        # Only one instance can exist
    expel_members_who_are_targets_of_other_members = no

    show_leave_message = no
    use_laws_as_join_reason = no

    # Leadership configuration
    has_leader_country = yes
    leader_title_key = "LEADER_TITLE"
    use_regnal_number = yes
    leader_type = character             # character or country
    leader_change_trigger_type = rulerchange
    leader_change_method = vote
    disband_if_no_leader = no

    # Parliament configuration
    has_parliament = yes
    parliament_type = assembly_type
    resolution_widget = parliament
    has_dynastic_power = yes

    # War mechanics
    only_leader_country_joins_defensive_wars = yes
    gives_military_access_to_all_when_at_war = yes

    join_defensive_wars_always = { trigger }
    join_defensive_wars_auto_call = { trigger }
    can_declare_war = { trigger }

    # Membership modifiers
    modifier = {
        block_from_change_to_kingdom_rank = yes
    }
    leader_modifier = {
        diplomatic_capacity = 1
    }
    international_organization_modifier = {
        max_elector = 4
    }

    # Membership triggers
    create_visible_trigger = { trigger }
    invite_visible_trigger = { trigger }
    can_lead_trigger = { trigger }
    can_join_trigger = { trigger }
    can_leave_trigger = { trigger }
    auto_leave_trigger = { trigger }
    auto_disband_trigger = { trigger }
    can_vote_in_parliament = { trigger }

    # Effects
    on_joined = { effect }
    on_left = { effect }
    monthly_effect = { effect }

    # Variables
    variables = {
        variable_name = {
            format = "FORMAT_KEY"
            min = 0
            max = 100
            monthly_change = { script_value }
        }
    }

    # Special statuses
    special_statuses_implemented = {
        status_1
        status_2
    }

    # AI decision making
    ai_desire_to_join = { script_value }
    ai_desire_to_allow_new_member = { script_value }
    ai_issue_voting_bias = { script_value }

    # Land ownership rules
    land_ownership_rule = rule_name
    antagonism_modifier_for_taking_land_from_fellow_member = 0.75
    no_cb_price_modifier_for_fellow_member = 0.75
}
```

## Key attributes

| Attribute | Description |
| --- | --- |
| `has_target` | Whether organization targets specific countries |
| `unique` | If true, only one instance can exist |
| `has_leader_country` | Whether organization has a leading country |
| `leader_type` | `character` or `country` |
| `leader_change_method` | How leader changes: `vote`, `hereditary` |
| `has_parliament` | Whether organization has voting parliament |
| `parliament_type` | Type of parliament assembly |
| `has_dynastic_power` | Whether dynasties have power in organization |

## Modifier blocks

### modifier

Applied to all member countries:

```
modifier = {
    block_from_change_to_kingdom_rank = yes
    reject_subjugation_reasons = 25
}
```

### leader\_modifier

Applied only to the leading country:

```
leader_modifier = {
    diplomatic_capacity = 1
    great_power_score_exempt_from_forfeit = 250
}
```

### international\_organization\_modifier

Applied to the organization itself:

```
international_organization_modifier = {
    hre_max_elector = 4
    hre_max_archbishop_elector = 3
}
```

## Variables

Organizations can track custom variables with monthly changes:

```
variables = {
    imperial_authority = {
        format = "IMPERIAL_AUTHORITY_DISPLAY"
        change_format = "VARIABLE_CHANGE_FORMAT"
        min = 0
        max = 100
        monthly_change = {
            add = {
                desc = "INTERNAL_PEACE"
                if = {
                    limit = { international_organization_has_internal_peace = no }
                    value = 0
                }
                else = {
                    value = 0.05
                }
            }
        }
    }
}
```

## Special statuses

Define special positions within the organization:

```
special_statuses_implemented = {
    emperor
    elector
    archbishop_elector
    free_city
}
```

## Parliament

For an IO parliament to be functional, at least one issue should be applicable. Otherwise the parliament will try to call upon country-specific parliament issues, printing many errors in the log.

## Base game organizations

* `hre` - Holy Roman Empire
* `catholic_church` - Catholic Church
* `coalition` - Anti-aggressor coalitions
* `crusade` - Religious crusades
* `defensive_league` - Defensive alliances
* `independence_movement` - Independence wars

## Example

```
my_custom_league = {
    has_target = no
    unique = no

    has_leader_country = yes
    leader_title_key = "LEAGUE_LEADER"
    leader_type = country
    leader_change_method = vote
    disband_if_no_leader = yes

    modifier = {
        defensive_war_morale = 0.1
    }

    leader_modifier = {
        diplomatic_reputation = 1
    }

    can_join_trigger = {
        is_neighbor_of_international_organization = scope:recipient
    }

    can_leave_trigger = {
        NOT = { is_leader_of_international_organization = scope:recipient }
    }

    on_joined = {
        add_prestige = 5
    }

    ai_desire_to_join = {
        add = {
            desc = "THREATENED"
            if = {
                limit = { any_neighbor_country = { is_threat_to = root } }
                value = 50
            }
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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • International organizations • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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