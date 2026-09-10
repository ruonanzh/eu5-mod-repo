<!-- source: https://eu5.paradoxwikis.com/Trait_modding revid: 19494 fetched: 2026-09-09 -->
# Trait modding

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

**Traits modding** covers the creation and modification of character traits in Europa Universalis V. Traits define personality and abilities of rulers, generals, admirals, and other characters.

Traits are stored in /Europa Universalis V/game/in\_game/common/traits/ as `.txt` files organized by character type.

## Trait structure

A trait definition specifies conditions, category, and modifiers:

```
trait_name = {
    allow = {
        # Conditions for trait to be available
        adm > 33
        NOT = { has_trait = conflicting_trait }
    }

    category = ruler                    # Character type
    flavor = personality                # Trait type

    modifier = {
        # Modifiers provided by trait
        global_estate_target_satisfaction = tiny_permanent_target_satisfaction
        monthly_towards_free_subjects = societal_value_minor_monthly_move
        peace_offer_fairness = 0.2
        stability_importance_modifier = 0.1
    }
}
```

## Key attributes

| Attribute | Description |
| --- | --- |
| `allow` | Trigger block for when trait can be assigned |
| `category` | Character type: `ruler`, `general`, `admiral`, `artist`, `child`, `religious_figure` |
| `flavor` | Trait flavor: `personality`, `education`, `interests`, `government_approach` |
| `modifier` | Modifiers applied when character has trait |

## Trait categories

* `ruler` - Rulers and heirs
* `general` - Army commanders
* `admiral` - Naval commanders
* `artist` - Court artists
* `child` - Children and heirs
* `religious_figure` - Religious characters

## Trait flavors

* `personality` - Character personality traits
* `education` - Traits from education/training
* `interests` - Character interests and hobbies
* `government_approach` - Governing style

## Allow block

Conditions for trait availability:

```
allow = {
    # Stat requirements
    adm > 33
    dip >= 50
    mil < 80

    # Incompatible traits
    NOT = { has_trait = cruel }
    NOT = { has_trait = zealot }

    # Context requirements
    owner ?= {
        government_type = government_type:monarchy
    }

    # Always available/unavailable
    always = yes
    always = no
}
```

## Common modifiers

### Government

```
country_cabinet_efficiency = 0.1
legislative_efficiency = 0.1
stability_cost = -0.1
court_spending_cost = -0.01
```

### Military

```
military_tactics = 0.05
discipline = 0.05
land_morale_modifier = 0.05
army_initiative = 0.2
```

### Diplomacy

```
diplomatic_reputation = 1
improve_relation_impact = 0.2
peace_offer_fairness = 0.1
peace_offer_negotiation_power = 0.25
```

### AI behavior

```
aggressiveness_modifier = 0.1
carefulness_modifier = 0.1
win_war_chance_threshold = -0.1
war_declaration_stab_hit_tolerance = 20
antagonism_tolerance = 10
bias_for_militarist_policies = 25
```

### Societal values

```
monthly_towards_innovative = societal_value_monthly_move
monthly_towards_traditionalist = societal_value_minor_monthly_move
monthly_towards_belligerent = societal_value_monthly_move
```

## Base game trait types

### Positive personality

`just`, `righteous`, `kind_hearted`, `calm`, `benevolent`, `tolerant`

### Negative personality

`cruel`, `malevolent`, `greedy`, `naive`, `craven`, `drunkard`

### Education

`tactical_genius`, `bold_fighter`, `intricate_web_weaver`, `charismatic_negotiator`, `silver_tongue`

### Government approach

`zealot`, `free_thinker`, `conqueror`, `expansionist`, `well_connected`

### Interests

`scholar`, `entrepreneur`, `lawgiver`, `martial_educator`, `architectural_visionary`

## Example

```
my_custom_trait = {
    allow = {
        adm >= 50
        NOT = { has_trait = incompatible_trait }
        owner ?= {
            government_type = government_type:republic
        }
    }

    category = ruler
    flavor = government_approach

    modifier = {
        research_speed_modifier = 0.15
        stability_cost = -0.15
        monthly_towards_innovative = societal_value_monthly_move
        global_estate_target_satisfaction = small_permanent_target_satisfaction
        institution_importance_modifier = 0.2
        bias_for_administrative_policies = 25
    }
}
```

## Special traits

Some traits have special effects:

```
unsuited_for_country_ruling = {
    allow = { always = no }    # Only given by events
    category = ruler
    modifier = {
        blocked_from_being_ruler = yes
    }
}

eunuch = {
    allow = { always = no }    # Only given by events
    category = ruler
    modifier = {
        character_life_expectancy = 10
        blocked_from_marriage = yes
        character_fertility = -1000
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
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • Traits • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |

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