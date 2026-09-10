<!-- source: https://eu5.paradoxwikis.com/Mission_modding revid: 19496 fetched: 2026-09-09 -->
# Mission modding
**Mission modding** covers the creation and modification of missions in Europa Universalis V. Missions are task trees that guide countries through specific objectives with rewards.
Missions are stored in /Europa Universalis V/game/in\_game/common/missions/ as `.txt` files containing one or more mission definitions.
## Mission structure
A mission pack defines visibility conditions, tasks, and rewards:
```
mission_pack_name = {
    icon = mission_icon_name
    repeatable = yes                    # Whether mission can be done again
    player_playstyle = administrative   # Categorization for player preferences
    visible = {
        # Conditions for mission to appear
        game_has_missions_enabled = yes
        has_enabled_mission_trigger = { type = mission_pack_name }
    }
    enabled = {
        # Conditions for mission to be available
        exists = capital.market
    }
    chance = 3600    # AI weight to pick this mission
    select_trigger = {
        # Optional selection UI for mission targets
        looking_for_a = market
        target_flag = mission_target_market
        name = "mission_select_market"
    }
    on_start = {
        # Effects when mission is started
    }
    on_completion = {
        # Effects when all tasks complete
    }
    on_abort = {
        # Cleanup when mission is abandoned
    }
    # Mission tasks defined below
    mission_task_name = {
        icon = task_icon
        requires = { previous_task }
        enabled = { trigger }
        duration = 365              # Days to complete (0 = instant)
        on_completion = { effect }
    }
}
```
## Mission task structure
Tasks are the individual objectives within a mission:
```
task_name = {
    icon = icon_name
    requires = { prerequisite_task_1 prerequisite_task_2 }
    visible = { trigger }           # When task appears in tree
    enabled = { trigger }           # Conditions to complete task
    bypass = { trigger }            # Conditions to skip task
    duration = 365                  # Days required (0 = instant completion)
    final = yes                     # If yes, completing this ends mission
    highlight = { trigger }         # Highlight locations on map
    modifier_while_progressing = {
        # Modifiers applied during duration countdown
    }
    on_start = { effect }
    on_completion = { effect }
    on_persistent_completion = { effect }   # Also runs for select_trigger
    on_monthly = { effect }
    select_trigger = {
        # Optional: choose target when completing
        looking_for_a = location
        target_flag = target_location
    }
}
```
## Key attributes
| Attribute | Description |
| `icon` | Icon identifier for mission/task display |
| `repeatable` | Whether mission can be undertaken multiple times |
| `player_playstyle` | Category: `administrative`, `diplomatic`, `military` |
| `chance` | AI selection weight |
| `requires` | List of prerequisite tasks that must complete first |
| `duration` | Days to complete task (0 for instant) |
| `final` | If true, completing this task completes the mission |
| `bypass` | Conditions that allow skipping this task |
## Select trigger options
Used to let players choose targets:
```
select_trigger = {
    looking_for_a = location|market|goods|character
    source = actor
    target_flag = scope_name
    name = "localization_key"
    none_available_msg_key = "no_options_key"
    column = {
        data = name|population|development
    }
    visible = { trigger }
    enabled = { trigger }
}
```
## Playstyle categories
* `administrative` - Economy and development focused
* `diplomatic` - Relations and expansion focused
* `military` - War and conquest focused
## Example
```
my_custom_mission = {
    icon = my_mission_icon
    repeatable = no
    player_playstyle = military
    visible = {
        game_has_missions_enabled = yes
        tag = ENG
    }
    enabled = {
        army_size >= 10
    }
    chance = 1000
    on_completion = {
        add_prestige = 10
    }
    task_build_army = {
        icon = military_icon
        requires = { }
        enabled = {
            army_size >= 20
        }
        duration = 0
        on_completion = {
            add_military_power = 50
        }
    }
    task_win_battle = {
        icon = battle_icon
        requires = { task_build_army }
        enabled = {
            has_won_battle = yes
        }
        duration = 0
        final = yes
        on_completion = {
            add_country_modifier = {
                modifier = victorious_army
                years = 10
            }
        }
    }
}
```
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • Missions • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • [Pops](/Pop_modding "Pop modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
