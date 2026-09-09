<!-- source: https://eu5.paradoxwikis.com/Mod_compatibility revid: 35029 fetched: 2026-09-09 -->
# Mod compatibility

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.1.

|  |  |
| --- | --- |
| ![](https://central.paradoxwikis.com/images/f/f4/Ambox_content.png) | **This page requires [verification](/Europa_Universalis_5_Wiki%3AVerification "Europa Universalis 5 Wiki:Verification") with empirical tests. Please add appropriate references.** Please also correct or remove any incorrect information. |

This article details various compatibility mechanics, which allow multiple mods to work together more easily and also allow for easier maintenance of mods by not relying directly on base game files.

## Overview

These are the basic compatibility mechanics, which apply to most game files, with exceptions noted where necessary.

### File loading order

Europa Universalis 5 always loads files in a set order. This does not matter for the game's functionality, but it matters greatly for compatibility of mods.

All files are loaded in [ASCII order](https://en.wikipedia.org/wiki/ASCII#Printable_character_table), this means that a file titled `00_foo.txt` is loaded before a file titled `01_bar.txt`, and so on. It does not matter whether that file is from the base game or a mod. Files in subfolders are loaded after files in the parent folder, for example an event file at events/zz\_example.txt is loaded before an event file at events/example/00\_example.txt, even though the latter file comes earlier in ASCII order.

### File overwrites

A direct file overwrite occurs when a mod has a file with the same exact filename and path[[1]](#cite_note-1) as a file in the base game, DLC, or another mod. In this case, a mod's file takes precedence over base game or DLC file, and a file from a mod lower in the playlist takes precedence over one from higher in the playlist.

Whichever file has the highest precedence is used, as if the other files did not exist.

### Game object load order

Defined game objects – such as advances, buildings, or laws – are loaded in the order they are defined.

For example, the two law files `00_test_laws.txt` and `01_example_laws.txt`:

```
File: 00_test_laws.txt
  law_foo = {
     law_category = example_group
     <law definition>
  }
  law_bar = {
     law_category = example_group
     <law definition>
  }
-------------------------------
File: 01_example_laws.txt
  law_baz = {
     law_category = example_group
     <law definition>
  }
  law_test = {
     law_category = example_group
     <law definition>
  }
```

These are equivalent to a single file that has all four laws:

```
law_foo = {
   law_category = example_group
   <law definition>
}
law_bar = {
   law_category = example_group
   <law definition>
}
law_baz = {
   law_category = example_group
   <law definition>
}
law_test = {
   law_category = example_group
   <law definition>
}
```

Generally, there is little to no gameplay effect, but this does affect the visual ordering of the objects in relevant screens.

## Inject and replace

The `INJECT:` and `REPLACE:` keywords allow for modifying defined game objects without overwriting the original files. Most defined game objects require the use of these keywords or else require a direct file overwrite. The list of folders that use these keywords is listed below.

Keywords

| Keyword | Functionality |
| --- | --- |
| `INJECT:` | Appends the injected script at the end of an existing entry. Errors if the specified entry does not exist. |
| `REPLACE:` | Replaces an existing entry with a new one. Errors if the specified entry does not exist |
| `TRY_INJECT:` | Same as `INJECT:` but does not error if the specified entry does not exist |
| `TRY_REPLACE:` | Same as `REPLACE:` but does not error if the specified entry does not exist |
| `INJECT_OR_CREATE:` | Same as `INJECT:` but if the specified entry does not exist, it creates it |
| `REPLACE_OR_CREATE:` | Same as `REPLACE:` but if the specified entry does not exist, it creates it |

The `INJECT:` and `REPLACE:` keywords can only be used on top-level blocks in a file. For example, this works:

```
INJECT:building_example = {
    possible_production_methods = {
        foo
    }
    <etc.>
}
```

These do not:

```
building_example = {
    INJECT:possible_production_methods = {
        foo
    }
    <etc.>
}
--------------------------------------------
INJECT:building_example = {
   	INJECT:possible_production_methods = {
		foo
	}
    <etc.>
}
```

Importantly, this means that certain types are not easily injectable as it is not possible to inject into a sub-block.

### Behavior

The `REPLACE:` keywords overwrite the specified object as expected, replacing any previous definition with the new one. Note that this still occurs in the usual [loading order](#File_loading_order), so if multiple mods are trying to replace an object entry, the last one loaded "wins". Similarly, if the replace is defined too 'early' it cannot apply correctly.

`INJECT:` keywords append the specified script to the object without changing any previous definition. Certain types of script cannot be injected this way if that type of script is already defined. Namely, most trigger and effect blocks. For example, trying to inject an `is_visible` block into a law fails if that law already has a defined `is_visible` block; however, if the law does not have a defined `is_visible` block, injecting a new one works as expected. Note that `INJECT:` does not work for scripted effects and scripted triggers. Using `INJECT:` for either of these results in the original effect/trigger being overwritten as though it was `REPLACE:`

When injecting blocks that can be defined multiple times, `INJECT:` keywords append their content to the end of the object's definition. For example, given a base game strategy such as:

```
ai_strategy_default = {
    #... some code
    wargoal_scores = {
        a = {
            # some score calc
        }
        b = {
            # some score calc
        }
        c = {
            # some score calc
        }
    }
    #... some code
}
```

Injecting the following from a mod:

```
INJECT:ai_strategy_default = {
    wargoal_scores = {
        d = {
            # some score calc
        }
    }
}
```

Effectively results in the following:

```
ai_strategy_default = {
    #... some code
    wargoal_scores = {
        a = {
            # some score calc
        }
        b = {
            # some score calc
        }
        c = {
            # some score calc
        }
    }
    #... some code
    wargoal_scores = {
        d = {
            # some score calc
        }
    }
}
```

This can result in unexpected behavior if the injected blocks and the previously defined blocks try to refer to the same elements. If the injected block referred to `a` for example, it might overwrite the base game calculation or not be read.

### Processing order

Database entry keywords are processed first by operation type, then by filename. Operation priority therefore takes precedence over file loading order when multiple files edit the same object.

The operation order is:

`INJECT_OR_CREATE -> REPLACE_OR_CREATE -> TRY_INJECT -> TRY_REPLACE -> INJECT -> REPLACE`

Filename order only resolves conflicts between entries using the same operation type. For example, if two files both use `REPLACE:` on the same object, the one with later filename priority wins. However, if one file uses `REPLACE_OR_CREATE:` and another uses `REPLACE:`, the `REPLACE:` entry wins regardless of filename priority, because `REPLACE:` is processed later.

This is important when combining inject and replace operations. `TRY_INJECT:` and `INJECT:` are processed before `REPLACE:`, so an injected change can be overwritten by a later replace operation. Conversely, `REPLACE_OR_CREATE:` is processed before inject operations, so later injects can still apply to an object created or replaced by `REPLACE_OR_CREATE:`.

### List of folders

*Please add or remove folders from this list if you know of any undocumented differences*

Most folders in `<top_folder>/common/` use the `INJECT` and `REPLACE` keywords, with a few exceptions. A number of other folders outside of `<top_folder>/common/` also use them.

* `TBA`

Other folders **do not** support the `INJECT:` and `REPLACE:` keywords and can use only direct file overwrites or implicit replacement.

## Exceptions

There are a few exceptions to the rules defined above.

### GUI types

*See also: [Interface modding](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)")*

Relevant folder: game/[top\_folder]/gui/

GUI `type` and `template` definitions (NOT `types` containers) can be overwritten. When multiple definitions of the same `type` or `template` exist across mods, the **last one loaded** based on **mod load order** (playlist position) *wins* and is used. File names have no effect on which definition takes precedence.[[2]](#cite_note-2)

Otherwise, the rules defined above still apply. Example GUI `type` and `template`:

```
types gate_main_panel_types {
    type gate_main_panel = default_block_window {
        # Some gui stuff
    }
}

template test {
  # Some gui stuff
}
```

> **NOTE:** The `types` container in the example above does not need to be unique and has no overwriting logic at all.

### Events

*See also: [Event modding](/Event_modding "Event modding")*

Relevant folder: game/in\_game/events/

When multiple events share the same ID, the first one loaded *wins*. So an event loaded in a file that comes earlier in the [file loading order](#File_loading_order) is used.

Particularly relevant, sub-folders are always loaded *after* files in the main events folder, which can cause unexpected behavior if modding base game events.

### Defines

*See also: [Defines](/Defines "Defines")*

Relevant folder: game/loading\_screen/common/defines/

Defines use a unique replacement mechanic that allows for replacing any single defines without replacing the whole define category:

```
NSomeCategory = {
    A_SINGLE_DEFINE = X
}
```

This is allowed and changes only the specified defines in the category.

### On actions

*See also: [On actions](/On_actions "On actions")*

Relevant folder: game/in\_game/common/on\_actions/

On actions allow for appending more `on_actions`/`events` or `random_events`, but they don't allow for replacing the on actions's `trigger` and `effect` blocks without replacing the whole file.

This works:

```
# Base game on action
monthly_country_pulse = {
  on_actions = {
    some_custom_on_action
  }
}

# Modded on action
some_custom_on_action = {
  trigger = {
    # Trigger logic
  }
  effect = {
    # Effect logic
  }
}
```

This produces errors and overwrites any base game `effect`:

```
monthly_country_pulse = {
  effect = {
    # Effect logic
  }
}
```

### Localization

*See also: [Localization](/Localization "Localization")*

Relevant folder: game/main\_menu/localization/

Localization has a unique replacement mechanic using a special folder.

To overwrite single localization keys, they need to be defined in the [mod\_name]/[top\_folder]/localization/[language]/replace folder. Full file overwrites still work, and later loaded localization keys DO NOT overwrite the previously defined ones. But the replace folder *wins* over them.

## References

1. [↑](#cite_ref-1) Relative to the `game/` and `[mod_name]/` folders
2. [↑](#cite_ref-2) Determined by empirical testing done by [User:ARealConner](/User%3AARealConner "User:ARealConner").

   Testing details

   Tested by creating two mods — *GUI-Overwrite-Test-A* (containing in\_game/gui/aaa\_ingame\_menu.gui) and *GUI-Overwrite-Test-Z* (containing in\_game/gui/zzz\_ingame\_menu.gui) — each redefining the same GUI type with a visually distinct change. Regardless of file name, whichever mod was lower in the playlist (loaded last) determined the in-game result. Swapping mod order in the playlist swapped the result. Tested in EU5 v1.1. See [User talk:ARealConner](/User_talk%3AARealConner "User talk:ARealConner") for questions.

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  [GUI script](/GUI_script "GUI script") • [Localization](/Localization "Localization") |

|  |  |
| --- | --- |
| Scripted content | [Actions](/Action_modding "Action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Events](/Event_modding "Event modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Scripted gui](/Scripted_gui "Scripted gui") • [Setup](/Setup_modding "Setup modding") • [Situations](/Situation_modding "Situation modding") • [Customizable localization](/Localization#Customizable_Localization "Localization") |

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
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • Mod compatibility • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |

|  |  |
| --- | --- |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |

|  |  |
| --- | --- |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |