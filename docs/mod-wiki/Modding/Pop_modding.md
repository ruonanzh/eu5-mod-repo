<!-- source: https://eu5.paradoxwikis.com/Pop_modding revid: 19490 fetched: 2026-09-09 -->
# Pop modding
**Pops modding** covers the creation and modification of population types in Europa Universalis V. Pops represent different social classes and occupations in society.
Pop types are stored in /Europa Universalis V/game/in\_game/common/pop\_types/ as `.txt` files.
## Pop type structure
A pop type definition specifies behavior, estate assignment, and modifiers:
```
pop_type_name = {
    color = pop_color                   # Color for UI display
    editor = 0.05                       # Editor spawn weight
    assimilation_conversion_factor = 0.05   # Speed of cultural/religious change
    pop_food_consumption = 20.0         # Food consumed per pop
    city_graphics = 1.0                 # Contribution to city appearance
    # Estate assignments (conditions for which estate)
    dhimmi_estate = { is_dhimmi = yes }
    tribes_estate = { is_gaelic_clans = yes }
    nobles_estate = {}
    promotion_factor = 0.1              # Speed of promotion to other types
    migration_factor = 0.5              # Willingness to migrate
    upper = yes                         # Is upper class
    has_cap = yes                       # Has population cap
    grow = yes                          # Can grow naturally
    counts_towards_market_language = yes    # Affects market language
    # Promotion paths
    promote_to = burghers
    promote_to = clergy
    promote_to = nobles
    # Literacy effects
    literacy_impact = {
        local_cultural_tradition = 0.2
        local_monthly_control = 0.01
    }
    # Pop percentage effects
    pop_percentage_impact = {
        local_distance_from_capital_cost_modifier = 0.5
    }
}
```
## Key attributes
| Attribute | Description |
| `color` | Color identifier for UI display |
| `editor` | Weight for spawning in map editor |
| `assimilation_conversion_factor` | Speed of cultural/religious conversion |
| `pop_food_consumption` | Food consumed per pop unit |
| `city_graphics` | Contribution to city visual appearance |
| `promotion_factor` | Rate at which pops promote |
| `migration_factor` | Willingness to migrate |
| `upper` | If yes, considered upper class |
| `has_cap` | If yes, has a maximum population |
| `grow` | If yes, can grow naturally |
| `tribal_rules` | If yes, uses special tribal promotion |
| `promote_to` | Pop types this can promote to |
| `counts_towards_market_language` | Affects market language determination |
## Estate assignments
Pops can belong to different estates based on conditions:
```
# Default assignment (empty condition)
nobles_estate = {}
# Conditional assignment
dhimmi_estate = { is_dhimmi = yes }
tribes_estate = { is_gaelic_clans = yes }
cossacks_estate = { is_cossacks = yes }
```
## Impact modifiers
### literacy\_impact
Modifiers scaled by literacy level:
```
literacy_impact = {
    local_cultural_tradition = 0.2
    local_monthly_control = 0.01
    local_production_efficiency = medium_production_efficiency_bonus
}
```
### pop\_percentage\_impact
Modifiers scaled by pop percentage:
```
pop_percentage_impact = {
    local_distance_from_capital_cost_modifier = 0.5
    local_unrest = 0.2
}
```
## Base game pop types
### Upper Class
* `nobles` - Aristocracy, military leadership
* `clergy` - Religious figures, scholars
* `burghers` - Merchants, urban middle class
### Working Class
* `laborers` - Urban workers, craftsmen
* `soldiers` - Military personnel
* `peasants` - Rural farmers (base pop type, promotes to others)
### Special
* `tribesmen` - Tribal peoples (can promote to peasants)
* `slaves` - Enslaved population
## Promotion chains
```
tribesmen -> peasants -> laborers/soldiers/burghers/clergy/nobles
```
## Example
```
my_custom_pop = {
    color = custom_pop_color
    editor = 0.2
    assimilation_conversion_factor = 0.2
    pop_food_consumption = 2.0
    city_graphics = 0.5
    # Belongs to burghers estate
    burghers_estate = {}
    promotion_factor = 0.3
    migration_factor = 0.2
    upper = no
    has_cap = yes
    grow = no
    promote_to = burghers
    literacy_impact = {
        local_production_efficiency = 0.1
        local_monthly_development_modifier = 0.05
    }
}
```
## References
[Modding](/Modding "Modding")[Return to top](#top)
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |
| Scripted types | [Advances](/Advance_modding "Advance modding") • [Art](/Art_modding "Art modding") • [Buildings](/Building_modding "Building modding") • [Bureaucracies](/index.php?title=Bureaucracy_modding&action=edit&redlink=1 "Bureaucracy modding (page does not exist)") • [Casus belli](/War_modding "War modding") • [Characters](/Character_modding "Character modding") • [Concepts](/Concept_modding "Concept modding") • [Countries](/Country_modding "Country modding") • [Culture](/Culture_modding "Culture modding") • [Diplomacy](/index.php?title=Diplomacy_modding&action=edit&redlink=1 "Diplomacy modding (page does not exist)") • [Diseases](/Disease_modding "Disease modding") • [Estates](/Estate_modding "Estate modding") • [Goods](/Goods_modding "Goods modding") • [Institutions](/Institution_modding "Institution modding") • [International organizations](/International_organization_modding "International organization modding") • [Laws](/Law_modding "Law modding") • [Movements](/index.php?title=Movement_modding&action=edit&redlink=1 "Movement modding (page does not exist)") • [Peace treaties](/War_modding "War modding") • Pops • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding")  • [Traits](/Trait_modding "Trait modding") • [Units](/Unit_modding "Unit modding") • [Wargoals](/War_modding "War modding") |
| Map | [Map](/Map_modding "Map modding") • [Map modes](/index.php?title=Map_mode_modding&action=edit&redlink=1 "Map mode modding (page does not exist)") • [Terrain](/Terrain_modding "Terrain modding") |
| Graphics | [3D Models](/index.php?title=Model_modding&action=edit&redlink=1 "Model modding (page does not exist)") • [Interface](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") • [Graphical assets](/index.php?title=Graphical_asset_modding&action=edit&redlink=1 "Graphical asset modding (page does not exist)") • [Fonts](/index.php?title=Font_modding&action=edit&redlink=1 "Font modding (page does not exist)") • [Flags](/Flag_modding "Flag modding") |
| Audio | [Music](/index.php?title=Music_modding&action=edit&redlink=1 "Music modding (page does not exist)") • [Sound](/index.php?title=Sound_modding&action=edit&redlink=1 "Sound modding (page does not exist)") |
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |
