<!-- source: https://eu5.paradoxwikis.com/Community_Mod_Toolkit revid: 33265 fetched: 2026-09-09 -->
# Community Mod Toolkit

|  |  |  |
| --- | --- | --- |
| [Community Mod Framework](/Community_Mod_Framework "Community Mod Framework") | [Community Mod Menu](/Community_Mod_Menu "Community Mod Menu") | **Community Mod Toolkit** |

**[Modding tool](/Category%3AModding_tools "Category:Modding tools")**: Community Mod Toolkit

Community Mod Toolkit

[![CMT Logo.png](/images/b/b3/CMT_Logo.png)](/File%3ACMT_Logo.png)

---

**Type**

Mod Development Toolkit

---

**Author(s)**

Conner, Bahmut

---

**Status**

Released

---

**Github**

[Link](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit)

Community Mod Toolkit

[![CMT Logo.png](/images/b/b3/CMT_Logo.png)](/File%3ACMT_Logo.png)

---

**Type**

Mod Development Toolkit

---

**Author(s)**

Conner, Bahmut

---

**Status**

Released

---

**Github**

[Link](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit)

# Overview

The Community Mod Toolkit (CMT) is a companion to the [Community Mod Framework](/Community_Mod_Framework "Community Mod Framework") that provides a mod template, editor and Git configuration that automatically enforces EU5 formatting conventions, and a set of integrated tools for EU5 mod authors.

The tools share a common configuration (`tools/config.toml`) and project structure, so you can set up once and use any combination of them.

CMT is available on [GitHub](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit). For full documentation, see the [GitHub wiki](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit/wiki).

# Setup

From the root of your mod's Git repository:

```
curl.exe -sL https://raw.githubusercontent.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit/toolkit-release/tools/setup.py -o setup.py
python setup.py
```

This copies all toolkit files into your mod folder, installs Python dependencies, and adds the toolkit as a Git remote for easy updating. The script will not overwrite existing files.

To update the toolkit later:

```
git fetch cmt
git merge cmt/toolkit-release --no-edit
```

# Mod Template

The toolkit includes a complete mod template with starter files for metadata, thumbnails (including PSD source templates), localization, Steam Workshop page (BBCode), an example submod, and a GitHub README template.

See the [Mod Template](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit/wiki/Mod-Template) wiki page for details on each file.

# Editor and Git Configuration

The toolkit includes pre-configured `.editorconfig`, `.gitattributes`, `.gitignore`, and `.ignore` files that automatically enforce EU5 formatting conventions without any manual setup.

| File | What It Does |
| --- | --- |
| `.editorconfig` | Automatically sets UTF-8 BOM encoding on `.txt`, `.yml`, and `.gui` files, CRLF line endings, and correct indentation (tabs for script, 1-space for localization YAML). |
| `.gitattributes` | Normalizes line endings at the Git level so contributors on any OS get correct CRLF/LF handling. |
| `.gitignore` | Excludes IDE directories, `.env` (API keys), Python cache, and other files that shouldn't be committed. |
| `.ignore` | Search-ignore file for tools like [ripgrep](https://github.com/BurntSushi/ripgrep). Less aggressive than `.gitignore` so local files still appear in search results. |

EditorConfig is built into JetBrains IDEs (IntelliJ, Rider, etc.) and works out of the box. VS Code requires the [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension. See the [Editor and Git Configuration](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit/wiki/Editor-and-Git-Configuration) wiki page for full details.

# Upload Tool

`upload.py` builds a minimal release folder (stripping tooling, git files, and development artifacts) and uploads it to the Steam Workshop. It can also upload Workshop page titles and descriptions.

```
python tools/upload.py                     # upload using config defaults
python tools/upload.py --mod               # upload mod content only
python tools/upload.py --workshop-pages    # upload workshop pages only
python tools/upload.py --dev               # upload to dev Workshop item
python tools/upload.py --submods           # upload all submods
```

| Feature | Description |
| --- | --- |
| Dev/Release separation | Separate Workshop items, names, and thumbnails for development and release versions |
| Workshop pages | Upload translated titles and descriptions to Steam Workshop language pages |
| Submods | Upload independent sub-mods from `submods/` with their own metadata and Workshop items |
| Version gating | Optionally only upload when the `metadata.json` version has changed |
| Auto-creation | Set Workshop item ID to `0` to create a new item on first upload |
| Change notes | Versioned change notes from `assets/workshop/change-notes.bbcode`. Each entry starts with a `# v` or `[b]v...[/b]` header; the entry matching your `metadata.json` version is uploaded. `# v1.0:` headers (with colon) prepend `[b]v1.0:[/b]`; without a colon, only the body is uploaded. `[b]v1.0:[/b]` and `[b]v1.0[/b]` headers always prepend the version line as-is |

Steam must be running for uploads to work.

# Translation Tool

`translate.py` auto-translates localization files and Steam Workshop page titles/descriptions using DeepL or Gemini into all EU5-supported languages.

```
python tools/translate.py              # translate main mod
python tools/translate.py --submods    # translate main mod + all submods
```

Requires API keys in a `.env` file (copy from `.env-template`):

```
DEEPL_API_KEY=your_key_here
GEMINI_API_KEY=your_key_here
```

## Localization Tags

| Tag | Effect |
| --- | --- |
| `# NO-TRANSLATE` | Skip a single line |
| `# NO-TRANSLATE BELOW` | Skip this line and everything below until the end marker |
| `# NO-TRANSLATE END` | End a `NO-TRANSLATE BELOW` block |
| `# LOCK` | Prevent overwriting a translated output line |

EU5 markup tags (`[...]`, `$...$`, `@...!`, `#...#!`) are preserved automatically during translation.

## Caching

Only changed content is re-translated. Translation hashes are stored in `tools/dependencies/.translate_hashes.json`. Delete this file to force a full re-translation.

# CMM Visual Editor

A browser-based visual editor for creating [Community Mod Menu](/Community_Mod_Menu "Community Mod Menu") settings without writing code. It generates all necessary Paradox script and localization files automatically.

```
tools\cmm-visual-editor.bat
tools\cmm-visual-editor.bat --update      # force reinstall latest version
tools\cmm-visual-editor.bat --dev         # use dev branch
```

The launcher automatically installs Python and pipx if needed. See the [CMM page](/Community_Mod_Menu "Community Mod Menu") for full documentation on available setting types.

# Configuration

`tools/config.toml` is the shared configuration file for all tools. Key settings:

| Key | Default | Description |
| --- | --- | --- |
| `source_language` | `"english"` | Source language for translations |
| `localization_translator` | `"deepl"` | API for localization (`deepl` or `gemini-3-flash`) |
| `translate_workshop` | `true` | Auto-translate workshop title/description |
| `workshop_upload_item_id` | `0` | Workshop item ID (`0` creates a new item) |
| `upload_mod_by_default` | `true` | Upload mod files by default |
| `upload_workshop_pages_by_default` | `true` | Upload workshop pages by default |
| `upload_only_on_version_change` | `false` | Only upload when version changes |

See the [Configuration](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit/wiki/Configuration) wiki page for the full reference.

# Links

* [GitHub Repository](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit)
* [Full Documentation (GitHub Wiki)](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-toolkit/wiki)
* [Community Mod Framework (GitHub)](https://github.com/Europa-Universalis-5-Modding-Co-op/community-mod-framework)

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
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • [Console commands](/Console_commands "Console commands") • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |

|  |  |
| --- | --- |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |

|  |  |
| --- | --- |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • Community Mod Toolkit • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |