<!-- source: https://eu5.paradoxwikis.com/Console_commands revid: 35513 fetched: 2026-09-09 -->
# Console commands

This article has been verified for the current [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") (1.3) of the game.

Europa Universalis V offers a debug mode **(disabled by default)** that allows the inputting of console commands. This page lists the codes that may be input into the Console Window, a special debugging window that may be accessed in non-ironman games while in debug mode by pressing Shift+2, ALT+2+1, Shift+3, `§`, `~`, `^`, `°`, `²`, or `` ` `` (key varies based upon keyboard layout). For QWERTY keyboards, the key is `` ` ``. Otherwise, Alt + C or Shift + Alt + C may work if the prior combinations did not. Press the up or down arrow keys to traverse through previously executed commands. Press `⇆Tab` after entering the beginning of a command to autocomplete it or display which commands contain the entered sequence. Many codes can be turned off by repeating the command, but sometimes reloading the save or exiting the game is necessary.

## Debug mode

Debug mode is a set of game tools that allows the modification of game behavior outside normal means. It includes:

* Console Window (accepts console commands)
* Debug Menus (including the GUI Editor, Script explorer and others)
* [Debug Info](#Debug_info)
* Ctrl + clicking on a country on the map takes control of the country
* Ctrl + alt + clicking on a state on the map takes the state
* File watcher that automatically reloads changed files (including mods) into memory

### Enabling debug mode

Debug mode can be enabled before launching the game and/or toggled in the game using mods. It can be disabled from the console, but can't be re-enabled after it's closed (unless with mods).

How to enable it:

#### Steam

On Steam:

1. Right-click the game, open Properties
2. Add `-debug_mode` to the Launch Options at the bottom
3. Start the game

#### Windows

Without Steam, on Windows:

1. Go to your Europa Universalis V directory, "binaries" folder
2. Right-click eu5.exe and create a shortcut
3. Right-click the shortcut, open Properties
4. In the Target field, add `-debug_mode` at the end (so it looks like this `"...\eu5.exe" -debug_mode`)
5. Launch the game using the shortcut

### Disabling debug mode

To activate achievements again, disable all active mods and remove -debug\_mode from launch options. After launching the game, make sure you have the [correct checksum](/Patches "Patches"). It can be found in the right corner in the Main Menu.

### Debug info

When debug mode is activated, some tooltips (especially on the map) will show debug info, which is normally hidden during normal gameplay.

## List

| Command | Aliases | Parameters | Effect |
| --- | --- | --- | --- |
| oos\_prompt |  | [<local/dummy>] | * Shows the oos\_prompt window |
| oos\_dump |  |  | * Dumps OOS info |
| print\_randomlog |  |  | * Prints the current randomlog |
| force\_oos |  |  | * Force a desync, modifies the random count |
| force\_resync |  |  | * Host will force a resync in an MP game |
| event |  | [eventid] [target] | * Trigger an event |
| test\_event\_trigger |  | [eventid] [target] | * Test the triggers for an event |
| achievement |  | [achievement] | * Tests an achievement |
| Manpower |  |  | * adds currency (Manpower) |
| Sailors |  |  | * adds currency (Sailors) |
| cash |  |  | * adds currency (cash) |
| Stability |  |  | * adds currency (Stability) |
| WarExhaustion |  |  | * adds currency (WarExhaustion) |
| Inflation |  |  | * adds currency (Inflation) |
| Prestige |  |  | * adds currency (Prestige) |
| ArmyTradition |  |  | * adds currency (ArmyTradition) |
| NavyTradition |  |  | * adds currency (NavyTradition) |
| GovernmentPower |  |  | * adds currency (GovernmentPower) |
| Karma |  |  | * adds currency (Karma) |
| ReligiousInfluence |  |  | * adds currency (ReligiousInfluence) |
| Purity |  |  | * adds currency (Purity) |
| Honor |  |  | * adds currency (Honor) |
| Doom |  |  | * adds currency (Doom) |
| RitePower |  |  | * adds currency (RitePower) |
| Yanantin |  |  | * adds currency (Yanantin) |
| Righteousness |  |  | * adds currency (Righteousness) |
| Harmony |  |  | * adds currency (Harmony) |
| SelfControl |  |  | * adds currency (SelfControl) |
| Complacency |  |  | * adds currency (Complacency) |
| YesMan |  |  | * toggles the cheat mode YesMan |
| NoMan |  |  | * toggles the cheat mode NoMan |
| WatchWindows |  |  | * toggles the cheat mode WatchWindows |
| LoadingScreen |  |  | * toggles the cheat mode LoadingScreen |
| InstantMove |  |  | * toggles the cheat mode InstantMove |
| InstantSiege |  |  | * toggles the cheat mode InstantSiege |
| NoRandom |  |  | * toggles the cheat mode NoRandom |
| FastDiplo |  |  | * toggles the cheat mode FastDiplo |
| DelayDiploReply |  |  | * toggles the cheat mode DelayDiploReply |
| InstantWar |  |  | * toggles the cheat mode InstantWar |
| InstantConstruction |  |  | * toggles the cheat mode InstantConstruction |
| InstantConquistadors |  |  | * toggles the cheat mode InstantConquistadors |
| InstantCasusBelli |  |  | * toggles the cheat mode InstantCasusBelli |
| InstantExploration |  |  | * toggles the cheat mode InstantExploration |
| InstantMission |  |  | * toggles the cheat mode InstantMission |
| InstantImplementation |  |  | * toggles the cheat mode InstantImplementation |
| FastRebels |  |  | * toggles the cheat mode FastRebels |
| ByPassRequirements |  |  | * toggles the cheat mode ByPassRequirements |
| RemoveFogOfWar |  |  | * toggles the cheat mode RemoveFogOfWar |
| no\_peace\_deals |  |  | * toggles the cheat mode no\_peace\_deals |
| recalc\_cached\_data |  |  | * Recalculates the cached data in the gamestate which is not persisted in the savegame |
| update\_pop\_cache |  |  | * Recalculates the cached data related to pops in the player country |
| form\_union |  | [<junior partner>] | * Form a union with another country |
| change\_government | changeGov | [<Government Type>] | * Change government of your country |
| parliament\_issue |  | [<parliament\_issue>] | * Change parliament issue in your country |
| end\_parliament\_issue |  |  | * Ends a parliament issue in your country with success |
| enact\_hre\_policy |  | [<policy\_key>] | * Force the HRE to enact the given policy. Finalises an active policy\_vote if one is running, otherwise starts and resolves one in a single step. |
| ignore\_paused\_time | ignore\_pause | [<Bool Type>] | * Make the time smoother to ignore that the game is paused so animation can run even when the game is paused. |
| discover | ti | [<location key> / all] | * Discover one or all locations |
| discover\_area | da | [<area key> / all] | * Discover one or all areas |
| override\_scale\_time | overr\_scale, | [<Bool Type> <Float Type>] | * Override the scale for gfx time based on game speed |
| debug\_animation\_time |  |  | * Ignores pause and overrides scale time setting it to 1.0. |
| change\_devastation | chg\_deva | [<location> <amount>] | * Changes devastation, quantity is expected to be between 0.0 a 1.0f |
| tick\_population |  | [<location>] | * Montly tick for population in a location |
| weather |  | [<location> <front/cyclone/tornado>] | * Creates a new weather in target location |
| change\_control | chg\_ctrl | [<location> <amount>] | * Changes Control, quantity is expected to be between 0.0 a 1.0f |
| change\_winter | chg\_winter | [<location> <amount>] | * Changes winter level, level is expected to be between 0 to 3 |
| reload\_terrain2\_materials |  |  | * Reload terrain2 textures |
| print\_selected\_illustration\_info | prt\_ill\_info | [eventidverbose] | * Prints debug info about selecting a illustration |
| print\_selected\_images\_info | prt\_img\_info | [eventid] [verbose] | * Prints debug info about image selection in the illustration of an event |
| trigger\_flag\_animation |  |  |  |
| MapObjects.CheckLocators |  | [[optional] numbers of pixels to search for other location] | * Checks what locators are inside the province that should contain them |
| PrintLocationBiome |  | [[optional] location id to print biome for] | * Prints the biome of the hovered (or entered as argument) location |
| famine |  |  | * Completely wipes food stockpiles in markets and provinces |
| destroy\_market\_stockpiles |  |  | * Destroys all goods stockpiles in all markets |
| build\_everything | be | [<location> <id> / <country> <tag> / <region> <id> / all] | * Build everything possible in a location / country or region |
| list\_dhe\_for |  |  | * Lists what DHEs were fired for a tag |
| Cities.PrintUsedSchematics |  |  | * Prints a list of all of the schematics used in city mesh lists |
| MapObjects.DebugDefaultLocatorTransforms |  |  | * Generates debug lines for game object locator default placement |
| reload\_pin\_collections |  |  | * Reload Pin Collections |
| spawn\_in\_every\_location |  |  | * Spawn an schematic of the desired type in every location. It can be limmited in fov, fow or player |
| event\_probabilities |  | [<on\_action key> [lean]] | * dump in error log of breakdown of events (triggers, probabilities...) for the on\_action in input.   use 'lean' option for a simpler breakdown. limited to the following on\_action: monthly\_country\_pulse yearly\_country\_pulse biyearly\_country\_pulse four\_yearly\_country\_pulse |
| Map.SavePNGScaled |  | [<map mode>] [<file name>] [<yes/no> Should render flat (optional)] | * Save a png of the map with a specific color mode with a selected size |
| inspect\_player\_country |  |  | * Opens the inspector with the player country |
| copy\_mouse\_pos |  |  | * Copies the mouse position into the clipboard |
| set\_ruler |  | [<country\_tag>] [<character\_id>] | * Sets a character as the new ruler of a country. Usage: set\_ruler <country\_tag> <character\_id> |
| recalc\_connectivity |  | [tag] | * Recalculate subject territory connectivity for a country by tag |
| fake\_whisper |  | [message...](/index.php?title=Message...&action=edit&redlink=1 "Message... (page does not exist)") | * Simulates an incoming DM for testing the whisper notification toast |
| unit\_viewer |  |  | * Unit Viewer Dockable |
| unit\_age |  | [<age>] | * Forces a Debug age for all units on screen |
| start\_location\_gfx\_test |  | [<Frames per Location>] | * Starts gfx location tests |
| stop\_location\_gfx\_test |  |  | * Ends gfx location tests |
| ecs\_scene\_viewer\_dockable |  |  | * Ecs Scene Viewer Dockable |
| portrait\_editor | pe |  | * Open the portrait editor |
| Portrait.ClearCache |  |  | * Clears the portrait cache. Forces all portraits to refresh |
| mesh\_importer\_browser |  |  | * Mesh Importer Browser |
| mesh\_importer |  |  | * Mesh Importer |
| ecs\_dependency\_editor |  |  | * ECS Dependency Graph Editor |
| init\_flow\_editor |  |  | * Init Flow Dependency Editor |
| update\_flow\_editor |  |  | * Update Flow Dependency Editor |
| Adjacencies.Rebuild |  |  | * Rebuild all adjacencies |
| spawnline |  | [<line name>] [<start position 'x,y,z'> (no spaces)] [<end position x,y,z> (no spaces)] | * Spawns specified line between 2 positions |
| clearlines |  |  | * Clear lines |
| spawn\_schematic |  | [schematic name] | * Runs entity schematic with the specified parameters |
| clear\_spawned\_schematics |  |  | * Removes all debug entities (spawned via spawn\_schematic) |
| Ecs.RunRenderingBenchmark |  | [Schematic name] [Number of instances] [Duration (s)] | * Executes the ecs rendering benchmark |
| spawnentity |  | [<entity name>] [<state> (optional)] | * Spawns specified entity at cursor position |
| spawnentity\_at |  | [<entity name>] [x] [y] [<state> (optional)] | * Spawns specified entity at xy-position |
| list\_entity\_nodes |  | [{entity name}] | * Shows a list with the names of the nodes of the specified entity |
| list\_entity\_submeshes |  | [{entity name}] | * Shows a list with the names of the submeshes of the specified entity |
| clearspawnedentities |  |  | * Clears entities spawned with spawnentity command |
| MapObjects.GenerateGameLocators |  | [<type>] [<filename> (optional)] | * Generates locators for the game's map objects |
| MapObjects.Debug |  |  | * Prints out map object debug information |
| Camera.Debug |  |  | * Prints out camera debug information |
| Camera.Save |  |  | * Save camera position |
| Camera.Load |  |  | * Load camera position |
| Camera.SetTransform |  | [X] [Y] [Z] [Zoom] [Pitch] [Yaw] | * Sets camera transform |
| Map.SavePNG |  | [<map mode>] [<file name>] [<yes/no> Should render flat (optional)] | * Save a png of the map with a specific color mode |
| SplineNetwork.AppendAssets |  |  |  |
| SplineNetwork.ClearAssets |  |  |  |
| terrain2.reload |  | [data source ('empty' or 'dataset')] | * Reloads the terrain or terrain related assets |
| save\_game\_analyzer |  |  | * Open the save game analyzer |
| entity\_designer |  |  | * Opens the Entity Designer Previewer |
| entity\_designer\_node\_editor |  | [Name of the schematic to open] | * Opens the Entity Designer Node Editor |
| update\_graph\_nodeeditor |  |  | * Update Graph Editor |
| animation\_editor |  |  | * Opens the Animation Editor |
| scene\_editor |  |  | * Opens the Scene Editor |
| entity\_editor |  |  | * Entity Editor Dockable |
| gui\_animation\_curve\_editor |  |  | * GUI Animation Curve Editor Dockable |
| gui\_animation\_editor |  |  | * GUI Animation Editor Dockable |
| tweak |  |  | * Spawns a tweaker GUI |
| dump\_tweakables |  |  | * Dumps all available tweakables to the specified file in the user folder. |
| gui\_data\_profiler |  |  | * Gui Data Profiler |
| log\_viewer |  |  | * Log Viewer Dockable |
| log\_status |  |  | * Log Status Dockable |
| Script.Profiling.Gui |  |  | * Show script profiler gui |
| script\_docs | script\_documentation |  | * Prints script documentation |
| Script.Profiling.Start |  |  | * Starts capturing script profiling data |
| Script.Profiling.Stop |  |  | * Stop capturing script profiling data |
| Script.Profiling.Restart |  |  | * Stop and then restart capturing script profiling data |
| Script.Profiling.Dump |  |  | * Dump roots of current script profiling data |
| Script.Profiling.DumpAll |  |  | * Dump all current script profiling data |
| Session.GetEnabledDLCs |  |  | * Gets the enabled DLCs for this session |
| shader\_debug |  |  |  |
| dump\_ref\_lookup\_memory\_report |  |  |  |
| particleeditor |  |  | * Particle Editor |
| shader\_editor |  |  | * Shader Editor Dockable |
| compound\_nodeeditor |  |  | * Compound Node Editor |
| data\_types\_explorer |  |  | * Opens the data types explorer dockable |
| drawcmdsviewer |  |  | * Draw Cmds Viewer |
| tools.skins |  |  | * Skin Editor |
| screenshot |  |  | * Take screenshot |
| settings |  |  | * Spawns a settings GUI with an optional argument for an initially selected category |
| textureviewer |  |  | * Texture Viewer |
| texturelist |  |  | * Texture List |
| RandomLog |  |  | * Toggles random logging |
| measure\_frame\_time |  | ["start" or "stop" measuring] | * Measures avg/min/max frame time and prints the result to debug.log once stopped |
| io\_stats | iostats |  | * Toggles IO Stats |
| io\_stats.Reset | iostats.reset |  | * Resets IO Stats |
| net\_stats | netstats |  | * Toggles Net Stats |
| net\_stats.Reset | netstats.reset |  | * Resets Net Stats |
| memory\_stats | memstats |  | * Toggles Memory Stats |
| memory\_stats.Reset | memstats.reset |  | * Resets Memory Stats |
| 3dstats |  |  | * Toggles 3D Stats |
| 3dstats.EnableGfxZoneStats |  |  | * Toggles 3D Gfx Zone Stats |
| 3dstats.EnableTextureStats |  |  | * Toggles Texture Stats |
| 3dstats.EnableDescriptorStats |  |  | * Toggles Descriptor Stats |
| MipLevelDebugTool |  |  | * Toggles MipLevelDebugTool |
| Graphics.CapFramerate |  |  |  |
| GUI.AnimationTimeline.LogStats |  |  | * Dump stats of the GUI Animation Timeline system to the debug log. |
| audio.list\_events |  |  | * List audio events |
| audio.play\_event |  | [Audio event] | * Play audio event |
| audio.cpu\_info |  |  | * Shows current cpu usage |
| audio.set\_rtpc |  | [RTPC name] [RTPC value] | * Set Wwise RTPC |
| audio.set\_state |  | [State name] [State value] | * Set Wwise State |
| audio.set\_switch |  | [Switch name] [Switch value] | * Set Wwise Switch |
| SDL.EventLogging |  |  |  |
| Localization.ToggleSkipDataSystemInLocOutput |  |  | * Don't run the data system at all in loc |
| Localization.ToggleIncludeKeyInLocOutput |  |  | * Includes the loc key in localization output |
| Localization.ToggleOnlyKeyInLocOutput |  |  | * Shows only the loc key in localization output |
| rendertype |  |  | * Reports what render backend is used |
| Debug.TextureMode |  | [Name of debug mode] | * Enables a texture mode for debugging |
| vsync |  |  | * Toggle main swapchains vsync |
| swapchain.buffers |  |  | * Query/Set swapchain buffers |
| gfx.reloadtexture |  |  | * Reload textures |
| FullSettings |  | [Optional file where the full settings will be saved] | * Generates a settings with all the options, even unmodified ones |
| Threading.TaskThreadCount |  | [The number of task threads] | * Set or get the number of task threads |
| log |  | [Various, see below] | * log list: Print a list of all log categories and sinks   - log [on/off/level]: Turn all logs on/off or set global level - log "[Format Pattern]" Set global format pattern - log "[Category]" [on/off/level]: Turn all logs on/off or set level for Category - log "[Category]" "[Format Pattern]" Set format pattern for Category |
| Log.ClearErrorLog |  |  | * Clears out error.log and resets the error count |
| Log.ClearAll |  |  | * Clears all logs |
| log\_ticktask\_performance |  |  | * Start outputing ticktask performance data to profiling.log |
| ai\_currency\_misses |  |  | * Prints the missed ai currency modifiers to log file |
| TickTask.Graph |  |  | * Open a graph view of the tick tasks |
| TickTask.List |  |  | * Open a graph view of the tick tasks |
| CrashReporter.SimulateCrash |  |  | * Simulates a crash (resulting in the game exiting). |
| CrashReporter.DeleteCrashData |  |  | * Delete local crash dumps older than X days. |
| minidump |  | [file path] | * Creates a minidump |
| gfx.skin |  |  | * select active gfx skin |
| Dockables.Create |  | [Dockable name] | * Create dockable |
| Dockables.CreateUserLayout |  | [Dockable layout name] | * Create a new user layout copy of current layout, with new name. |
| Dockables.SaveUserLayout |  | [Dockable layout name] | * Save current layout to disk as user layout, optionally under a new name. |
| Dockables.DeleteUserLayout |  | [Dockable layout name] | * Delete layout as user layout |
| Dockables.ShowLayout |  | [Dockable layout name] | * Show an existing (user) layout, hide current layout |
| Dockables.HideLayout |  |  | * Hide any shown dockable layout |
| Dockables.ShowManager |  |  | * Show dockable layout manager |
| map\_editor |  |  | * Toggle map editor |
| AudioPersistentObjectManager.PostAudioEvent |  |  | * Runs an audio even on a "persistent" audio object |
| Debug.Achievements.ToggleDebug |  | [<value>] | * Puts the achievements system in debug mode |
| Debug.Achievements.ListAll |  | [<value>] | * Puts the achievements system in debug mode |
| Debug.Achievements.ResetAll |  |  | * Locks all achievements again |
| switchlanguage |  | [language name] | * Reload localization files and switch language |
| reload |  | [file name] | * Reloads assets |
| time |  |  | * What time is it? |
| crash |  |  | * Cause the application to crash |
| vram\_end |  |  | * Cause the application to experience an out of vram |
| debug\_mode |  |  | * Toggles debug mode |
| release\_mode |  |  | * Toggles release mode |
| GUI.CreateWidget | gui\_test,test\_gui | [File name] [Widget name] | * Create dummy widget. With 0 arguments the file name will be gui/test\_gui.gui, and the widget name will be test\_window |
| GUI.CreateDockable |  | [File name] [Widget name] [Dockable id. If doesn't exist, it will be registered] | * Create dummy dockable widget. With 0 arguments the file name will be gui/test\_gui.gui, and the widget name will be test\_window |
| GUI.ClearWidgets |  |  | * Clear dummy widget |
| pseudoLoc |  |  | * Enable/Disable Pseudo Localization on Text Widgets |
| dump\_data\_types | DumpDataTypes |  | * dumps the registered data types |
| explorer |  |  | * Shows an object explorer window |
| explorer\_reset |  |  | * Resets the object explorer position and defaults |
| helplog |  |  | * Print out all console commands to game.log file. |
| help |  | [command name] | * Print out all console commands or a specific command description. |
| version |  |  | * Prints the version to the console and the game log. |
| endgame | gameover |  | * Forces the endgame screen to appear. |
| tick\_day |  | [number of days] | * Ticks any number of days |
| load |  | [file name] | * Load gamestate from savegame on disk |
| test\_save |  |  | * Check save and load persistence |
| save |  | [file name] | * Saves current gamestate to disk |
| save\_replay |  | [file name] | * Saves current recorded replay to disk |
| start\_recording |  |  | * Snapshot current gamestate and start recording commands |
| stop\_recording |  | [file name] | * Stop recording and write the .replay file |
| play\_recording |  | [file name] | * Load a .replay file and play back its recorded commands |
| observe | ob |  | * start observing the game |
| watch | ww |  | * Enables watch windows |
| error |  |  | * Show errors in log |
| clear\_pools |  |  | * Clear UI pools |
| clear\_map |  |  | * Clear map (just for debugging) |
| gamelog |  |  | * Show game log |
| action\_timer |  |  | * Dump times to process each action type |
| t |  | [<CountryNamePrefix>] | * Change player to specific country name (only unique prefix needed) |
| tag |  | [<CountryTag>] | * Change player to specific tag |
| ai |  | [<CountryTag>] | * Create/disable AI for tag |
| braindeadai |  | [<CountryTag>] | * Enable/disable brain dead AI for tag |
| only\_ai | ai\_only | [<CountryTag>] | * Disable all AI for all countries except one, enable it for that one |
| only\_ai\_continent | ai\_only\_continent | [<Continent>] | * Disable all AI for all countries except countries on specified continent, enable it for those |
| clear\_ai\_objectives |  | [<CountryTag>] | * Clears AI military and diplomatic objectives for tag |
| subject\_stance |  | [<CountryTag>, <Stance>] | * Set subject stance for tag |
| ai\_recalc\_strategy |  |  | * Recalculate AI strategy for all countries |
| ai\_tactical\_dryrun |  | ['hourly'/'daily', <CountryTag>] | * Run tactical AI without executing |
| ai\_tactical\_print |  | ['hourly'/'daily', <CountryTag>] | * Run tactical AI and print results |
| ai\_tactical\_execute |  | ['hourly'/'daily', <CountryTag>] | * Run tactical AI for single country |
| ai\_daily\_dryrun |  | [<CountryTag>] | * Run AI daily tick without executing |
| ai\_daily\_print |  | [<CountryTag>] | * Run AI daily tick and print results |
| ai\_daily\_execute |  | [<CountryTag>] | * Run AI daily tick |
| ai\_monthly\_dryrun |  | [<CountryTag>] | * Run AI monthly tick without executing |
| ai\_monthly\_execute |  | [<CountryTag>] | * Run AI monthly tick |
| ai\_monthly\_print |  | [<CountryTag>] | * Run AI monthly tick and print results |
| ai\_recalc\_peace\_deals |  |  | * Recalculate AI peace deals |
| enable\_all\_commands |  | [<location\_id>] | * Be the QA you always dreamed to be |
| DebugCurrency |  | [<CountryTag>] [<CurrencyType>] | * output the currency income and outgoings to the log |
| recalc\_trade\_path\_cache |  |  | * Recalculate all trade path caches |
| ai\_currency |  | [<currency>, <amount>, <location/rebel>] | * Evaluate additional currency for AI |
| ai\_monthly\_currency |  | [<currency>, <amount>, <location/rebel>] | * Evaluate additional monthly currency for AI |
| mapmode |  | [<MapMode>] | * Give select unit to target country |
| give\_units |  | [<CountryTag>] | * Give select unit to target country |
| kill\_all\_units |  | [<CountryTag>] | * kill all units in target country |
| kill\_unit |  | [<UnitID>] | * kill the unit with this ID, kills selected unit when no id is supplied |
| resupply\_all\_units |  | [<CountryTag>] | * max food for all units in target country |
| recalc\_supply\_all\_units |  | [<CountryTag>] | * recalculate supply paths for all units in target country |
| damage\_all\_units |  | [<CountryTag>] | * damage all units in target country |
| nibble\_all\_units |  | [<CountryTag>] | * damage a random amount of strength to all units in target country |
| world\_levies |  |  | * raise all levies in the world |
| debug\_estate\_logic |  |  | * runs some estate logic for debug |
| start\_annex |  | [<country-tag>] | * starts an annexation of the given country |
| lose\_to |  | [<country-tag>] | * makes the player lose to the target country |
| cb | add\_casus\_belli,casus\_belli | [<country-tag> <casus\_belli>] | * add a cb on target country |
| lend |  | [<CountryTag> <amount> <interest> <months>] | * lend money to target country |
| spy | spies | [<CountryTag> <amount>] | * adds spies to your network in a target country |
| favor | favors | [<CountryTag> <amount>] | * adds favors in a target country |
| trust |  | [<CountryTag> <amount>] | * adds trust in a target country |
| trust\_equilibrium | trust\_eq | [<CountryTag> <amount>] | * adds trust equilibrium in a target country |
| rebel\_progress |  | [<id> <progress>] | * Adds rebel\_progress to a rebel |
| all\_rebels |  | [<progress>] | * Adds rebel\_progress to all active rebels in player country |
| set\_societal\_value |  | [<societal\_value> <position>] | * Sets the societal value |
| add\_subunit |  | [<subunit\_def>] | * Adds a subunit |
| estate\_satisfaction |  | [<estate\_type> <progress>] | * Adds satisfaction to an estate |
| estate\_gold |  | [<estate\_type> <gold>] | * Adds gold to an estate |
| disease | spawn\_disease | [<disease>] | * Spawns a Disease |
| movement | spawn\_movement | [<movement> <location>] | * Spawns a Movement |
| building | add\_building | [<building\_type> <location>] | * Adds a building to a location |
| add\_random\_trait |  | [<id>] | * Adds a ruler trait to a character |
| add\_trait |  | [<trait>] | * Adds a specific trait to the ruler |
| set\_adm |  | [<id> <ability>] | * Sets adm ability for a character |
| set\_dip |  | [<id> <ability>] | * Sets dip ability for a character |
| set\_mil |  | [<id> <ability>] | * Sets mil ability for a character |
| bankrupt |  | [<CountryTag>] | * Bankrupts a nation |
| remove\_bankruptcy |  | [<CountryTag>] | * Removes the bankruptcy modifier from a nation |
| opinion |  | [<CountryTag> <amount>] | * Adds Opinion for target country versus player |
| convert\_character |  | [<religion> <id>] | * changes religion of a character |
| kill\_character |  | [<id>] | * Kills a character |
| replace\_court |  | [<CountryTag>] | * Replace Court |
| impregnate |  | [<id>] | * Impregnate a character |
| give\_birth |  | [<id>] | * force a pregnant to give birth |
| impregnate\_and\_give\_birth |  | [<id>] | * Impregnate a character and then force them to give birth |
| kill |  | [<id>] | * Kills a character |
| suicide |  | [<id>] | * Kills a character, defaults to yourself |
| update\_employment |  | [<location>] | * updated employment for a loction |
| update\_integration |  | [<location>] | * updated integration for a loction |
| colonize |  | [<location>] | * creates a colony for target locations' province |
| colonize\_and\_finish |  | [<location>] | * creates a colony for target locations' province and then finishes the colonial charter immediately |
| finish\_colony |  | [<location>] | * finishes a colony for target locations' colonial charter |
| finish\_all\_colonies |  |  | * finishes a colony for target locations' colonial charter |
| move\_random\_pop |  | [<source location> <destination location>] | * moves a random pop from source to destination |
| population |  | [<location>] | * changes a location's population |
| finish\_constructions |  | [<location>] | * finish all constructions in a location |
| change\_garrison |  | [<location>] | * changes a location's garrison |
| freeze |  | [<location>] | * freezes a sea location |
| thaw |  | [<location>] | * thaws a sea location |
| recalc\_loc |  | [<location>] | * recalcs modifiers in a location |
| pirate |  | [<area>] | * adds a pirate to the area |
| imperial\_authority |  | [<amount>] | * adds a imperial\_authority to the hre |
| annex |  | [<CountryTag>] | * Player annexes a tag |
| remove\_truce |  | [<CountryTag>] | * Removes the truce between player and a tag |
| add\_truce |  | [<CountryTag>] | * Adds a truce between player and a tag |
| reset\_agendas |  |  | * Resets agendas in parliament |
| war\_on\_player |  | [<CountryTag>] | * A declaring country optionally followed by the victim (defaults to player) |
| declarewar |  | [<CountryTag>] | * A victim country optionally followed by attacker (defaults to player) |
| revolt |  | [<rebel\_id>] | * A revolt starts in target country |
| religion |  | [<religion>] | * changes religion |
| culture |  | [<culture>] | * changes culture |
| cultural\_tradition |  | [<culture> <value>] | * changes cultural Tradition |
| cultural\_influence |  | [<culture> <value>] | * changes cultural Influence |
| location\_language\_loc |  | [<language/dialect> <region/area>] | * outputs missing location locs to the error log by language or dialect |
| dialect\_override |  | [<language/dialect>] | * overrides all dynasties, characters, locations display names with this dialect |
| convert |  | [<location>] | * changes religion of all pops in location to state religion |
| convert\_province |  | [<province\_definition>] | * changes religion of all pops in a province to state religion |
| win\_siege |  | [<location>] | * forces a siege to be won in the target location |
| add\_siege\_progress | add\_siege\_accumulation,add\_siege\_memory | [<location> <progress>] | * adds siege progress to an ongoing siege |
| economy |  |  | * resets the pop demands and processes the markets |
| reset\_pop\_demand |  |  | * resets the pop demands for the player |
| set\_flag |  | [<flag\_definition>] | * overrides this country's flag |
| coa |  | [<country>] | * dumps the country's COA representation to error log |
| coa\_export |  | [<string>] | * dumps COAs that start with this string to your documents. If the argument is 'random' it will generate 100 random COA based on the current player country. If you leave the string empty it will output all CoA in the game! |
| no\_owner\_pops |  |  | * dumps to the error log any locations that have no pops of the location's owner |
| buildings\_over\_limit |  |  | * dumps to the error log any buildings that have a level set that is above the maximum |
| slavery |  |  | * ticks the slavery process |
| raid |  | [<location\_id>] | * raids slaves from the target location |
| join\_war |  | [<warid> <countrytag>] | * joins the war with given id on given countries side |
| building\_queue\_stats |  | [<countrytag>] | * Shows queue of buildings in AI memory |
| run\_select\_expand\_objectives |  | [<countrytag>] | * Runs the select expand objectives for the country |
| building\_queue\_buildings |  | [<countrytag>] | * Shows which buildings are on the building queue |
| building\_queue\_top |  | [<countrytag>] | * Shows the top 5 candidates in a building queue in AI memory |
| building\_queue\_clear |  | [<countrytag>] | * Clears all candidates in a building queue in AI memory |
| recalc\_conquer\_desire |  |  | * Clears all candidates in a building queue in AI memory |
| number\_of\_buildings |  | [<countrytag>] | * Shows building numbers |
| make\_subject |  | [<subject\_type> <countrytag>] | * makes subject out of a country |
| change\_country\_type |  | [<country\_type>] | * changes the country type |
| change\_location\_rank |  | [<location> <location\_rank>] | * changes the rank of a location |
| occupy\_location |  | [<location\_tag>] | * occupies a location |
| occupy\_floodfill |  | [<location\_tag>] | * occupies a location |
| occupy\_country |  | [<countrytag>] | * occupies a country |
| occupy\_province |  | [<province>] | * occupies a province, only locations belonging to nations at war with the player |
| occupy\_area |  | [<area>] | * occupies an area, only locations belonging to nations at war with the player |
| occupy\_region |  | [<region>] | * occupies a region, only locations belonging to nations at war with the player |
| occupy\_war\_enemies |  |  | * occupies every war enemy |
| conquer |  | [<location\_tag>] | * conquers an location |
| conquer\_country |  | [<countrytag>] | * conquers a country |
| conquer\_province |  | [<province\_definition>] | * conquers a province definition |
| conquer\_area |  | [<area>] | * conquers an area |
| conquer\_region |  | [<region>] | * conquers a region |
| change\_dynastic\_name |  | [<countrytag>] | * Changes dynastic name of a country |
| remove\_location\_from\_all\_ios |  | [<location\_id>] | * removes location from ios |
| age | change\_age | [<age\_tag>] | * changes the age |
| birth\_age |  | [<age\_tag>] | * changes the birth age of all characters (used for testing late game portaits). No arguments will revert to default behaviour |
| situation | activate\_situation | [<situation>] | * activate situation |
| monthly\_situation |  | [<situation>] | * ticks a month for a situation |
| disaster | activate\_disaster | [<disaster>] | * activate disaster |
| change\_date | change\_date | [<year>] | * changes the date |
| add\_institution\_progress | institution | [<institution\_tag> <location\_tag> <amount>] | * adds institution progress |
| spawn\_institution |  | [<institution\_tag> <location\_tag>] | * spawns an institution at a location if not already spawned |
| dynasties\_report |  |  | * writes out the dynasty per country |
| formable\_report |  |  | * writes out the formables without advances |
| content\_report | cr |  | * writes out the amount of unique content per tag |
| seazone\_report |  |  | * checks if any seazone has any errors |
| building\_report | br |  | * reports the base upkeep cost for all buildings |
| area\_report |  |  | * checks if any areas has any problems |
| mapmode\_report |  |  | * checks if any mapmode is missing a tooltip |
| icon\_report |  |  | * checks if any icon database is missing a tooltip |
| bad\_goods |  |  | * checks if any locations has bad raw materials |
| overpopulation | op |  | * writes out the locations with overpopulation |
| societal\_values\_report | svr |  | * checks if all societal values have enough impact it |
| river\_validation\_report | rvr |  | * checks if the river bitmap is valid |
| process\_areas |  |  | * processes area distances |
| country\_report |  |  | * writes out data about countries |
| write\_popdata | popdata |  | * writes out pop information |
| print\_location\_list | location\_list |  | * Writes data about locations in a csv format |
| export\_goods\_supply\_demand | goods\_supply\_demand |  | * Exports a tab-separated file with goods key, total supply, and total demand |
| export\_bloc\_strengths | bloc\_strengths |  | * Exports a TSV of all countries sorted by economical base, and all alliance pairs with their economical bases |
| export\_market\_capacity | market\_capacity |  | * Exports a tab-separated file with market name, trade capacity, burgher trade capacity, oversupply, undersupply, and total imbalance |
| analyse\_market | analyze\_market | id>] | * Exports a TSV of (a) local deficit goods and where to source them, (b) every producing PM of every building in the market sorted by current profit ascending with output/input local surplus columns, and (c) a per-building-type roll-up (count, levels, open/closed/subsidized counts, totals, avg profit per level). Profit matches the in-game building tooltip (CBuilding::GetProfit). Arg: location key or numeric ID |
| export\_goods\_by\_market | goods\_by\_market | [<goods\_key>] | * Exports a TSV of per-market production, trade imports, supply, demand, and surplus for a given good, sorted by production descending. Arg: goods key |
| printmap |  | [<mapmode>] [<filename>] [<yes/no> Should render flat (optional)] | * Writes out the current worldmap to file |
| setup\_editor |  |  | * Toggles the setup editor. |
| pop\_editor |  |  | * Toggles the pop editor. |
| cd\_pop\_editor |  |  | * Toggles the CD pop editor. |
| war\_viewer |  |  | * Toggles the War Viewer. |
| ai\_currency\_viewer |  |  | * Toggles the Ai Currency Viewer. |
| ai\_diplomatic\_objectives\_viewer |  |  | * Toggles the Ai Diplomatic Objectives Viewer. |
| ai\_targets\_viewer |  |  | * Toggles the Ai Targets Viewer. |
| port\_editor |  |  | * Toggles the port editor. |
| institution\_editor |  |  | * Toggles the institution editor. |
| road\_editor |  |  | * Toggles the road editor. |
| players |  |  | * Lists all players on server |
| kick |  | [<Player name>] | * Kicks a player with the given name |
| new\_culture |  | [<name>] | * Makes a new culture for the player with the given name |
| merge\_culture\_group |  | [<name>] | * Merges a culture group |
| update\_characters |  |  | * update character counts for player |
| create\_character |  | [<male/female>] [lowborn/random/new] | * Create a Character |
| artist |  | [<artist\_type>] | * Create an artist |
| workofart |  | [<work\_of\_art\_type> [<location> [<quality>]]]] | * Create a work of art |
| policy | add\_policy | [<policy>] | * changes a policy |
| border\_distance |  | [<CountryTag>] | * gets border distance between current and given country |
| diplomats |  | [<amount>] | * Gain diplomatic actions |
| liberty\_desire |  | [<amount>] | * Add liberty desire |
| stockpile |  | [<market location key> <goods key> [<amount>]] | * Stockpile goods |
| do\_burgher\_trade |  | [<market location key>] | * do the burgher trade calculation for a market |
| reform\_desire |  | [<amount>] | * players religion gets reform desire |
| add\_core |  | [<amount>] | * Add a core location |
| maritime\_presence |  | [<amount>] | * Add maritime presence to seazone |
| add\_research | addresearch | [<amount>] | * Gain Research Progress |
| list\_bankruptcies |  |  | * Shows a list of all bankrupt countries |
| list\_high\_debt\_countries |  |  | * Shows a list of all high debt countries |
| show\_diplomacy\_stats |  |  | * Shows the diplomacy stats |
| run\_economy\_stats |  |  | * Runs the economy stats gathering |
| show\_economy\_stats |  |  | * Shows the economy stats |
| show\_saving\_mode |  | [<CountryTag>] | * Shows the saving mode a country has |
| calc\_threat\_level |  | [<CountryTag> <CountryTag>] | * Shows the threat level second nation poses to first nation 0-1 |
| codetest |  |  | * Command for easy code testing |
| research\_all |  |  | * Researched all advances in all trees |
| finish\_current\_religious\_focus |  |  | * Completed progress on current religious focus |
| integrate\_all |  |  | * Integrates all provinces |
| antagonism |  | [[<location>] <value>] | * Gives antagonism centred on nations capital or location parameter if supplied |
| finalise\_resolution |  | [<ResolutionID>] | * Finalizes a resolution in an IO |
| create\_pu |  | [<CountryTag>] | * Creates a personal union with another country |
| research |  | [<advance>] | * researches a specific advance |
| embrace\_all |  |  | * Embraces all active institutions |
| event\_counts |  |  | * Print event debug counts |
| trigger\_animations |  |  | * Trigger a named set of animations |
| effect |  | [{effect script}] | * execute effect |
| run |  | [{effect file}] | * execute effect file in /run |
| trigger |  | [{trigger script}] | * test trigger script |
| clear | clr |  | * Clear console. |
| Camera.Goto | goto | [<location>] | * Moves the camera to a location |
| copy\_dna |  | [<id>] | * Copy/shows adn of a character |

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
| Other | [AI](/index.php?title=AI_modding&action=edit&redlink=1 "AI modding (page does not exist)") • Console commands • [Checksum](/index.php?title=Checksum&action=edit&redlink=1 "Checksum (page does not exist)") • [Mods](/Mod "Mod") • [Mod compatibility](/Mod_compatibility "Mod compatibility") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/index.php?title=Mod_troubleshooting&action=edit&redlink=1 "Mod troubleshooting (page does not exist)") |

|  |  |
| --- | --- |
| Guides | [Interface modding guide](/Interface_modding_guide "Interface modding guide") • [Mod translation](/index.php?title=Mod_translation&action=edit&redlink=1 "Mod translation (page does not exist)") • [Save-game editing](/Save-game_editing "Save-game editing") • [Settlement position modding guide](/Settlement_position_modding_guide "Settlement position modding guide") |

|  |  |
| --- | --- |
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |