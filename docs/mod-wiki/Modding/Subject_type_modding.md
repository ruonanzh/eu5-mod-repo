<!-- source: https://eu5.paradoxwikis.com/Subject_type_modding revid: 34687 fetched: 2026-09-09 -->
# Subject type modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Subject type modding** covers the creation and modification of subject relationships in Europa Universalis V. Subject types define how overlords and subjects interact.

Subject types are stored in /Europa Universalis V/game/in\_game/common/subject\_types/ as individual `.txt` files.

## Subject type structure

A subject type defines the relationship between overlord and subject:

```
subject_type_name = {
    subject_pays = subject_pays_vassal  # Payment script value
    color = subject_vassal              # Color for UI
    level = 2                           # Hierarchy level

    # Visibility triggers
    visible_through_diplomacy = { trigger }
    visible_through_treaty = { trigger }
    creation_visible = { trigger }

    # War participation
    join_offensive_wars_always = { trigger }
    join_offensive_wars_can_call = { trigger }
    join_defensive_wars_always = { trigger }

    # Diplomatic costs
    diplomatic_capacity_cost_scale = 1.0

    # Military balance
    strength_vs_overlord = -0.5

    # Annexation settings
    annexation_speed = 1
    annexation_min_years_before = 10
    annexation_min_opinion = 150
    annexation_stall_opinion = 125
    overlord_can_cancel = yes

    # Overlord abilities
    can_overlord_build_roads = yes
    can_overlord_build_buildings = yes
    can_overlord_build_rgos = yes

    # Subject restrictions
    has_limited_diplomacy = yes
    has_overlords_ruler = no
    can_change_rank = no
    can_change_heir_selection = yes
    food_access = yes

    # Opinion requirements
    minimum_opinion_for_offer = 150

    # Great power mechanics
    great_power_score_transfer = 0.25

    # Institution spread
    institution_spread_to_overlord = monthly_institution_spread_mild
    institution_spread_to_subject = monthly_institution_spread_mild

    # Modifiers
    overlord_modifier = {
        monthly_prestige = 0.01
    }
    subject_modifier = {
        country_cabinet_efficiency = 0.05
    }

    # Effects
    on_enable = { effect }
    on_disable = { effect }

    # War declaration
    allow_declaring_wars = { trigger }

    # AI decision making
    diplo_chance_accept_subject = { factors }
    diplo_chance_accept_overlord = { factors }
    ai_wants_to_be_overlord = { factors }
}
```

## Key attributes

| Attribute | Description |
| --- | --- |
| `subject_pays` | Script value for subject payments |
| `color` | UI color identifier |
| `level` | Subject hierarchy level (1-5) |
| `diplomatic_capacity_cost_scale` | Diplomatic capacity cost multiplier |
| `strength_vs_overlord` | Military strength modifier against overlord |
| `annexation_speed` | Rate of integration |
| `annexation_min_years_before` | Years before annexation possible |
| `annexation_min_opinion` | Opinion required to annex |
| `great_power_score_transfer` | GP score transferred to overlord |
| `has_limited_diplomacy` | If yes, subject has diplomatic restrictions |
| `has_overlords_ruler` | If yes, shares overlord's ruler |

## War participation

```
join_offensive_wars_always = {
    NOT = { scope:actor ?= { is_subject_of = scope:recipient } }
}
join_offensive_wars_can_call = {
    scope:actor ?= { is_subject_of = scope:recipient }
}
join_defensive_wars_always = {
    always = yes
}
```

## Diplomatic acceptance

Factors affecting AI acceptance:

```
diplo_chance_accept_subject = {
    base = -90
    current_strength = 0.2
    border_distance = -0.3
    negative_opinion = -5
    positive_opinion = 0.25
    rank_difference = -5
    royal_ties = 1
    different_religion = -20
    same_common_language = 5
    different_government_type = -25
    competing_power = -200
    tax_base = -0.25
}
```

## Modifiers

### overlord\_modifier

Applied to the overlord:

```
overlord_modifier = {
    monthly_prestige = 0.01
    diplomatic_reputation = 0.5
}
```

### subject\_modifier

Applied to the subject:

```
subject_modifier = {
    country_cabinet_efficiency = 0.05
    army_maintenance_cost = -0.1
}
```

## Base game subject types

* `vassal` - Standard vassal relationship
* `tributary` - Pays tribute but maintains independence
* `colonial_nation` - Overseas colonial territory
* `march` - Military buffer state
* `fiefdom` - Personal land holding
* `samanta` - Indian feudal vassal
* `secessionists` - rebellion that wants to join overlord

## Example

```
my_custom_subject = {
    subject_pays = subject_pays_custom
    color = subject_custom
    level = 2

    visible_through_diplomacy = {
        country_rank_level >= scope:target.country_rank_level
    }

    join_offensive_wars_can_call = {
        scope:actor ?= { is_subject_of = scope:recipient }
    }
    join_defensive_wars_always = {
        always = yes
    }

    diplomatic_capacity_cost_scale = 0.5
    strength_vs_overlord = -0.25

    annexation_speed = 0.5
    annexation_min_years_before = 20
    annexation_min_opinion = 200

    can_overlord_build_buildings = yes
    has_limited_diplomacy = no
    food_access = yes

    great_power_score_transfer = 0.1

    overlord_modifier = {
        monthly_prestige = 0.02
        diplomatic_capacity = 1
    }

    subject_modifier = {
        army_maintenance_cost = -0.15
        research_speed_modifier = 0.1
    }

    diplo_chance_accept_subject = {
        base = -50
        positive_opinion = 0.5
        same_religion = 20
        royal_ties = 10
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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • Subject types  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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