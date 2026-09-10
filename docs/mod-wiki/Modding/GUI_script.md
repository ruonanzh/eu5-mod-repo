<!-- source: https://eu5.paradoxwikis.com/GUI_script revid: 33010 fetched: 2026-09-09 -->
# GUI script

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

|  |  |
| --- | --- |
| ![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png) | Please help improve this article or section by [**expanding it**](https://eu5.paradoxwikis.com/index.php?title=GUI_script&action=edit) with: more tables. |

*See also: [Scripted gui](/Scripted_gui "Scripted gui")*

**GUI script** is the style of scripting used in the game's [GUI](/index.php?title=Interface_modding&action=edit&redlink=1 "Interface modding (page does not exist)") and [localization](/Localization "Localization"). This is different from the script used in most other game files, though there are some corresponding objects, such as countries and variables. Similar to game script's [scopes](/Scope "Scope"), GUI script uses data types; some of these correspond to game scopes while others are used only with GUI script.

GUI script is divded in two types: *Functions* and *Promotes*.

## Common features

All GUI script is written in "CamelCase"[[1]](#cite_note-1) – with a few exceptions, where each word in the function or promote is capitalized and no spaces are used. Each piece of GUI script is always enclosed in square brackets. Within the square brackets, the functions and promotes can be chained together with "dot chaining", for example `[State.GetJobseekersDesc]`. When moving from one data type to another, this is similar to dot chaining with [scopes](/Scope "Scope").

Some functions and promotes take arguments which are enclosed in parentheses immediately following the function or promote, for example `[GetPopTypeByName('peasants').GetName]`. If the argument is a game script object, it is typically enclosed in single quotes; if it is another data type, function, or promote, it is not. If the function or promote takes multiple arguments, they must be passed in order with each separated by a comma.

Some functions and promotes are "global", meaning they can be used without reference to a data type. All other data type functions and promotes require the correct data type to be in "scope".

## Lists of data types

These tables list all data types used in GUI scripting which have at least one function or promote.

List of data types for functions

| Type | Description |
| --- | --- |
| AISettingsMenu |  |
| AISettingsMenuItem |  |
| AccountInventory |  |
| Achievement | Jomini Achievement |
| AchievementPopup |  |
| AchievementWindow | Jomini Achievement Window |
| ActionGroup |  |
| ActiveClip |  |
| ActiveClipEventsKeyframe |  |
| ActiveHegemon |  |
| ActiveHegemonItem |  |
| ActiveInstitution |  |
| ActiveParliamentAgenda |  |
| ActiveParliamentAgendaWrap |  |
| ActiveProductionMethod |  |
| ActiveResolution |  |
| ActiveResolutionContainer | Base class for resolution containers |
| ActiveSituation |  |
| AddFriendWindow | Jomini Friends - Add Friends Window |
| AddUpdateGraphNodeWindow |  |
| AdjacencyDistanceWrap |  |
| AdjacencyMarketAccessWrap |  |
| Advance |  |
| AdvanceDefinition |  |
| AdvanceEffectItem |  |
| AdvanceItem |  |
| AdvanceLineItem |  |
| AdvanceNode |  |
| AdvancesLateralView |  |
| Age |  |
| AgeAdvancesWrap |  |
| AgendaView |  |
| AiCurrencyClassGlue |  |
| AiCurrencyGlue |  |
| AiCurrencyViewer |  |
| AiDiplomaticObjective |  |
| AiDiplomaticObjectiveGroup |  |
| AiDiplomaticObjectivesViewer |  |
| AiLogistics |  |
| AiTarget |  |
| AiTargetType |  |
| AiTargetsViewer |  |
| AiTransportTarget |  |
| AiUtilityWrap |  |
| AlertActiveIOResolution |  |
| AlertAnnexingDisloyalSubject |  |
| AlertArmiesOnIce |  |
| AlertArmyWithLowFood |  |
| AlertArmyWithVeryLowFood |  |
| AlertArmyWithoutLeader |  |
| AlertAvailableTradeCapacity |  |
| AlertBlockadedPorts |  |
| AlertBuildingsMissingInput |  |
| AlertCanBeTargetOfIO |  |
| AlertCanInterveneInRivalWar |  |
| AlertCanJoinTargettedIO |  |
| AlertClanCanBecomeLanded |  |
| AlertConstructionMissingInput |  |
| AlertDangerousRelations |  |
| AlertDepopulatingLocations |  |
| AlertExiledUnits |  |
| AlertFormableCountry |  |
| AlertHasLowFoodStockpileMarket |  |
| AlertHasNoSuppliesTrade |  |
| AlertHasNotEnoughGoodsForAnyShipRepairs |  |
| AlertHasNotEnoughGoodsForShipRepairs |  |
| AlertHasRaisedArmyLeviesInPeace |  |
| AlertHasRaisedNavyLeviesInPeace |  |
| AlertHasReligiousFocusAvailable |  |
| AlertHasUneducatedChild |  |
| AlertHasUnmarriedChildren |  |
| AlertHasUnprofitableBuildings |  |
| AlertHasUnraisedLeviesInWar |  |
| AlertHasWeatherSystem |  |
| AlertIOBreaking |  |
| AlertIsAtFortLimit |  |
| AlertItem |  |
| AlertLackPopPromotion |  |
| AlertLackPopRGO |  |
| AlertManager |  |
| AlertMemberLeavingUnion |  |
| AlertMissingExplorer |  |
| AlertNaviesStuckInIce |  |
| AlertNavyAttrition |  |
| AlertNoParliamentDebate |  |
| AlertOutsideOfNavalRange |  |
| AlertPopNeeds |  |
| AlertPossibleLaw |  |
| AlertRelationAboutToBeBroken |  |
| AlertRiskStarvingProvinces |  |
| AlertStarvingProvinces |  |
| AlertTruceEnding |  |
| AlertUnintegratedProvinces |  |
| AlertUnprofitableTrade |  |
| AlertUnusedCB |  |
| AnchorItem | Map Editor - Spline Network Tool - Anchor |
| AnimationClip | An animation clip used in animation state machines. |
| AnimationClipReferenceGui | A clip reference in the Animation State Editor |
| AnimationClipsEditor | Animation Clips Editor Window |
| AnimationComplexClipReferenceGui | A Complex clip reference in the Animation State Editor |
| AnimationEditor | Animation Editor Window |
| AnimationEditorCondition | A transition condition in the Animation Editor |
| AnimationEditorConnectionTab | Connection Tab in the Animation Editor |
| AnimationEditorLane | A connection lane in the Animation Editor |
| AnimationEditorMessageTab | Message Tab in teh Animation Editor |
| AnimationEditorState | A state in the Animation State Editor. |
| AnimationEditorStateTab | State Tab in the Animation Editor |
| AnimationEditorTabHelper |  |
| AnimationEditorVariable | A variable in the animation editor variables panel. |
| AnimationEditorVariablesPanel | Variables panel in the animation editor, providing datamodels and functions for displaying and editing state maching variables. |
| AnimationEditorViewer |  |
| AnimationRandomClipReferenceGui | A Random clip reference in the Animation State Editor |
| AnimationSimpleClipReferenceGui | A clip reference in the Animation State Editor |
| AnimationState |  |
| AnimationStateButton | Animation State Button to select active state. |
| AnnexationAlert |  |
| AnnexationCostWrapper |  |
| AnnexationMarker |  |
| AntagonismBombSpec |  |
| AntagonismBombSpecWrap |  |
| AntagonismBombsSpec |  |
| AntagonismTwoCountriesWrap |  |
| AntagonismWrapper |  |
| Application |  |
| ArchetypeEditor | Archetype Editor Tab |
| Area |  |
| ArmyBuilderLateralView |  |
| ArmyConstructionMarker |  |
| ArmyLevyPopBreakdownWrapper |  |
| ArmyStrength |  |
| Artist |  |
| ArtsItem |  |
| ArtsView |  |
| AskRepayLoanMessagePopup |  |
| AssembleEntityWindow | Entity Designer - Assemble Entity Window |
| AttachmentPropertySearchList |  |
| Attribute | Portrait Editor - Attribute |
| AttributeColumnData |  |
| AudioCultureType |  |
| AutocompleteEntry |  |
| AutomatedMultiSystemItem |  |
| AutomatedSystemsItem |  |
| AutomationLateralView |  |
| AvailabilityEntry | Jomini Friend List - Availibility Entry |
| AvailableMercenaryTypes |  |
| Avatar |  |
| BattleParticipant |  |
| BattleResult |  |
| BattleResultMessage |  |
| BattleResultMessageParticipant |  |
| BattleResultMessageSide |  |
| BattleSide |  |
| BattleUnitStats |  |
| BattleView |  |
| BiasType |  |
| BlockList |  |
| BlockListBlock |  |
| BlockedVisionMarker |  |
| BlurThreshold | Map Editor - Blur Threshold |
| BrushBool | Map Editor - Brush bool settings. |
| BrushFloat | Map Editor - Brush float settings. |
| BrushSettings | Map Editor - Brush settings. |
| BrushSettingsDropdown | Map Editor - Brush settings dropdown. |
| BrushSettingsGlobal | Map Editor - Global Brush settings. |
| BuildInLocationLateralView |  |
| BuildLocationSelectMarket |  |
| Building |  |
| BuildingCandidate |  |
| BuildingCategory |  |
| BuildingConstructionMarker |  |
| BuildingItem |  |
| BuildingPromoteTimeWrapper |  |
| BuildingSpyNetworkMarker |  |
| BuildingType |  |
| BuildingView |  |
| CDPopEditor |  |
| CEconomy |  |
| CEnumValueAnimation |  |
| CFixedPoint | Number stored with 6 digits of precision. |
| CMapToolTip |  |
| CPdxEnumValue |  |
| CPdxFloatRect | Rectangle within an 2D float space. |
| CPdxInputBindingSetting | Jomini Settings - Rebindable Input Binding Setting |
| CPdxIntRect | Rectangle within an 2D integer space. |
| CSceneEditorPreviewPropertiesPanel | Scene Editor Selected Entity Info |
| CString |  |
| CTest |  |
| CUTF8String |  |
| CVector2f | Type containing two float numbers. |
| CVector2i | Type containing two integer numbers. |
| CVector3f | Type containing three float numbers. |
| CVector3i | Type containing three integer numbers. |
| CVector4f | Type containing four float numbers. |
| CVector4i | Type containing four integer numbers. |
| Cabinet |  |
| CabinetAction |  |
| CabinetActionMarker |  |
| CabinetActionProgressTooltipSection |  |
| CabinetCardModifier |  |
| CabinetCardModifierEntry |  |
| CabinetItem |  |
| CallAllyAlert |  |
| Cardinal |  |
| CasusBelli |  |
| CategoryBuildingTypesItem |  |
| CategoryTradesItem |  |
| CharMessage |  |
| Character |  |
| CharacterActionItem |  |
| CharacterInteraction |  |
| CharacterInteractionItem |  |
| CharacterItem |  |
| CharacterLateralview |  |
| CharacterModifierWrap |  |
| CharacterRoleMask |  |
| CharacterRulerData |  |
| Chat | Jomini Chat - Chat |
| ChatMessage | Jomini Chat - Message |
| ChatNotificationMessage | Jomini Chat - Notification message |
| ChatTab | Jomini Chat - Tab |
| ChatWindow | Jomini Chat - Window |
| ChildAssembleEntityWindow | Entity Designer - Child Assemble Entity Window |
| ChildEducation |  |
| ChildEducationCandidate |  |
| ChildGenerator | Portrait Editor - Child Generator |
| ChildItem | Portrait Editor - Child Item |
| CityGraphicsWrap |  |
| CityMarker |  |
| Climate |  |
| CloseSettingsDialogWindow |  |
| CoatOfArms | Coat of Arms Sprite |
| CoatOfArmsWrapper | Coat of Arms Sprite Wrapper |
| ColonialCharter |  |
| ColonialCharterItem |  |
| ColonyCategoryGlue |  |
| ColonyCharterMarker |  |
| ColorPaletteNodeWindow |  |
| ColorPicker |  |
| Combat |  |
| CombatImminentMarker |  |
| CombatMarker |  |
| CombatModifier |  |
| CombatSide |  |
| CombatSideWrap |  |
| CombatSubUnitArray |  |
| ConditionLine |  |
| ConditionList |  |
| CondottieriItem |  |
| ConfirmDiplomaticAction |  |
| ConfirmInsultAction |  |
| ConfirmOfferLoanAction |  |
| ConfirmWindow |  |
| ConquistadorConstructionMarker |  |
| ConsoleMenuItem | Console Menu Item |
| ConsoleWindow | Console Window |
| ConstructScoreItem |  |
| ConstructScoreRanking |  |
| Construction |  |
| ConstructionItem |  |
| Container |  |
| Context |  |
| ContextMenu |  |
| ContextMenuItem | Tools Context Menu Item |
| Continent |  |
| ControlGroupsView |  |
| CountriesListView |  |
| CountriesListViewItem |  |
| Country |  |
| CountryCountryModifierWrap |  |
| CountryCultureLateralView |  |
| CountryCultureLateralViewWorkOfArtItem |  |
| CountryDiplomaticItem |  |
| CountryEntry | Country Entry |
| CountryInteraction |  |
| CountryListFromLocation |  |
| CountryListOverview |  |
| CountryMessage |  |
| CountryModifierWrap |  |
| CountryNeeds |  |
| CountryPeopleLateralView |  |
| CountryPopulationChart |  |
| CountryRank |  |
| CountryRankCandidate |  |
| CountryReligionLateralView |  |
| CountryRulerData |  |
| CreateAccount | Create Account View |
| CreateCasusBelliMarker |  |
| CreateSocialProfileWindow | Jomini Social Profile - Create window |
| CreateSubjectsLateralView |  |
| CreditsWindow | Jomini Credits Window |
| Culture |  |
| CultureDefinition |  |
| CultureGroup |  |
| CultureItem |  |
| CulturesLedger |  |
| CurrencyPriceWrap |  |
| CurrentNeedsItem |  |
| CurrentReligiousFocus |  |
| CurrentResearch |  |
| CurryingFavorsMarker |  |
| CurveEditor | Curve Editor |
| CurvePoint | Curve Editor - Curve Point |
| DatabaseModifier |  |
| DatatypesExplorer |  |
| Date | Jomini Historical Date |
| DebugUnitSpawner |  |
| DecalsEditor | Map Editor - Decals Editor Mode |
| DecalsEditorDecalInstance | Map Editor - Decal Instance |
| DecalsEditorDecalInstancesList | Map Editor - List of Decal Instances |
| DecalsEditorDecalSet | Map Editor - Decal Set |
| DecalsEditorDecalSetProperties | Map Editor - Decal Set Properties |
| DecalsEditorDecalSetsList | Map Editor - Decal Sets |
| DecalsEditorSearchFilter | Decals Editor Search filter |
| DecalsEditorSettings | Decals Editor - Settings |
| DecalsEditorSettingsLayer | Decals Editor - Settings Layer |
| DecalsEditorViewport | Map Editor - Decals Editor Viewport |
| DeclareWarAlly |  |
| DeclareWarLateralView |  |
| DeclareWarSelectCasusBelli |  |
| DeclareWarSelectWarGoal |  |
| DefineProxyNodeWindow | Define proxy node window |
| DemandCategory |  |
| DemandCategoryWrap |  |
| DemandsOnMarketWrap |  |
| DesertConnectionMarker |  |
| Dialect |  |
| DialogConfig |  |
| DiploAlert |  |
| Diplomacy |  |
| DiplomacyDialog |  |
| DiplomacyLateralView |  |
| DiplomacyMacrobuilderLateralView |  |
| DiplomacyMacrobuilderSelectCountry |  |
| DiplomacyStatus |  |
| DiplomaticActionCategory |  |
| DiplomaticActionItem |  |
| DiplomaticObjectiveTypeGlue |  |
| Disaster |  |
| DisasterType |  |
| DisasterView |  |
| Disease |  |
| DiseaseOutbreak |  |
| DiseasesLateralView |  |
| DlcEntry |  |
| DockableLayout | Dockable Layout Manager - Layout |
| DockableLayoutManager | Dockable Layout Manager Window |
| DockableWindow | Dockable Window |
| DrawCmdsList | Draw Commands List |
| DrawCmdsViewer | Draw Commands Viewer |
| DummyTechTreeContextItem |  |
| DynastiesLedger |  |
| Dynasty |  |
| DynastyItem |  |
| DynastyLineItem |  |
| DynastyMarker |  |
| DynastyNodeItem |  |
| DynastyTreeView |  |
| EconomicSupportWindow |  |
| EconomyItem |  |
| EconomyView |  |
| EcsSceneViewer |  |
| EcsSceneViewerDockable | EcsSceneViewerDockable |
| EditorSettingCategory | Editor Settings - Category |
| EditorSettingsPage | Editor Settings - Settings Page |
| EditorSettingsWindow | Editor Settings Window |
| EffectNodeWindow |  |
| EmitterNodeWindow |  |
| EmploymentSystem |  |
| Encyclopedia | Jomini Encyclopedia |
| EncyclopediaEntry | Jomini Encyclopedia - Entry |
| EncyclopediaEntryView | Jomini Encyclopedia - Entry View |
| EncyclopediaLateralView |  |
| EncyclopediaPage | Jomini Encyclopedia - Page |
| EndGameView |  |
| EndPrepConfirm | Jomini Multiplayer - End preparation confirm |
| EntityDesigner | Entity Designer Window |
| EntityDesignerPlayer |  |
| EntityDesignerProperties | Entity Designer - Properties |
| EntityDesignerTab | Entity Designer Tab Metadata |
| EntityEditor | Entity Editor |
| EntityEditorAudioEventHandler | Entity Editor - Audio Event Handler |
| EntityEditorEventLayer | Entity Editor - Entity Event Layer |
| EntityEditorKeyframe | Entity Editor - Entity Key Frame |
| EntityEditorTimelineState | Entity Editor - Timeline State |
| EntityViewerProperties | Entity Editor - Properties |
| EnumSettingEntry | Jomini Settings - Enum Setting |
| Estate |  |
| EstateOpinionWrap |  |
| EstatePrivilege |  |
| EstateType |  |
| EstatesItem |  |
| Ethnicity | Portrait System - Ethnicity |
| EthnicityItem | Portrait Editor - Ethnicity Item |
| EventInfo |  |
| EventLayerForEntityEditor | Entity Editor - Entity Event Layer Keyframe |
| EventOption |  |
| EventTargetSetupContext |  |
| EventWindow |  |
| ExpandRawGoodsLateralView |  |
| ExpandRawGoodsSelectMarket |  |
| ExpansionLateralView |  |
| Exploration |  |
| ExplorationCategoryGlue |  |
| ExportTool | Map Editor - Export Tool Dockable |
| ExtraTooltipInfo |  |
| FilterablePropertyList |  |
| FilteredSortedList |  |
| FindLocationItem |  |
| FindLocationView |  |
| FoodLocationItem |  |
| FoodOwner |  |
| FoodProductionLateralView |  |
| FoodProductionListItem |  |
| FoodProductionSelectMarket |  |
| FoodProvinceItem |  |
| ForeignBuildingLocationItem |  |
| ForeignCountrySelectCountry |  |
| ForeignCountryView |  |
| FormNewCountry |  |
| FormableCountry |  |
| FormattedTooltipWrap |  |
| FortFlipRestoreMarker |  |
| FortMarker |  |
| Friend | Jomini Friend List - Friend |
| FriendListWindow | Jomini Friend List - Friendlist window |
| FriendRequest | Jomini Friend List - FriendRequest |
| FriendSearchResult | Jomini Friends - Search Result |
| Friends | Jomini Friend List - Friends manager |
| FrontEndCreditsView | Jomini Frontend Credits View |
| FrontEndLoadView |  |
| FrontEndMainView |  |
| FrontEndMultiplayerView | Jomini Multiplayer - Frontendview |
| FrontEndSinglePlayerView |  |
| FrontEndView |  |
| GUIAchievement | Jomini Achievement GUI |
| GameConceptTooltip |  |
| GameDLC |  |
| GameEncyclopedia |  |
| GameLobby |  |
| GameMpSetup |  |
| GameResignConfirmationWindow |  |
| GameRule |  |
| GameRuleSetting |  |
| GameSaveNameWindow |  |
| GeneCategory | Portrait System - Gene Category |
| GeneItem | Portrait Editor - Gene Item |
| GeneTemplate | Portrait System - Gene Template |
| GenerationItem | Portrait Editor - Generation Item |
| GenericAction |  |
| GeographyGlue |  |
| GfxSkin | GFX Skin |
| God |  |
| GodWithReligionWrap |  |
| GoodItem |  |
| Goods |  |
| GoodsDemand |  |
| GoodsDemandEntry |  |
| GoodsDetailsLateralView |  |
| GoodsInMarket |  |
| GoodsItem |  |
| GoodsMarketEntry |  |
| GoodsMessage |  |
| GoodsOnMarketPopWrap |  |
| GoodsOnMarketWrap |  |
| GoodsPriceOnMarketWrap |  |
| GoodsProductionLateralView |  |
| GoodsProductionSelectMarket |  |
| GoodsSellPriceWrap |  |
| GoodsSourceItem |  |
| GoodsView |  |
| GovReformOutlinerEntry |  |
| Government |  |
| GovernmentReform |  |
| GovernmentReformItem |  |
| GovernmentReformsLateralView |  |
| GovernmentType |  |
| GovernmentView |  |
| Graph | Node Editor - Graph |
| GraphInterfaceNodeWindow |  |
| GraphPanel | Node Editor - Graph Panel |
| GraphicalCultureType |  |
| GreatPowerItem |  |
| Group | Jomini Achievement Window - Group |
| GroupItem |  |
| GuiAnimationCurveEditor | Dockable tool for editing gui animations as a curve graphs. |
| GuiAnimationCurveEditorControlPoint | A control point of a given curve editor line. |
| GuiAnimationCurveEditorLine | A single curve editor line instance. |
| GuiAnimationCurveEditorViewport | Gui Animation Curve Editor Viewport instance. |
| GuiAnimationEditor | Dockable tool for editing gui animations. |
| GuiAnimationEditorAnimSetEntry | Animation-set list entry in the Gui Animation Editor tool. |
| GuiAnimationEditorAnimationEntry | An entry representing an animation for a given anim-set in the Gui Animation Editor. |
| GuiAnimationEditorAvailableTrack | An entry representing a track that is available to add to the given animation in the Gui Animation Editor tool. |
| GuiAnimationEditorKeyframe | An entry representing a single keyframe on the track in the Gui Animation Editor. |
| GuiAnimationEditorMetadataCtx | Tool metadata context of Gui Animation Editor. |
| GuiAnimationEditorPlayer | Instance for managing the playback in Gui Animation Editor. |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | Playback Speed Multiplier Entry in Gui Animation Editor. |
| GuiAnimationEditorRuler | Viewport ruler in the Gui Animation Editor tool. |
| GuiAnimationEditorRulerResolutionEntry | An entry representing a ruler resolution step in the Gui Animation Editor tool. |
| GuiAnimationEditorUniversalTrack | An entry representing an animation for a given anim-set in the Gui Animation Editor. |
| GuiAnimationEditorViewportBase | Base class for the different types of viewports in the GUI Animation Editor dockables |
| GuiAnimationEditorViewportUserInput | Keeps track of the user input over viewports in the GUI Animation Editor dockables |
| GuiAnimationTimelineViewport | Gui Animation Editor Timeline Viewport instance. |
| GuiContext | GUI Context |
| GuiCurrentDrag | For use in drag\_widget, inside of draggable\_behavior. Contains data regarding current ongoing drag, such as mouse positions |
| GuiDataProfiler | Gui Data Profiler Window |
| GuiDataProfilerEntryNode | Gui Data Profiler tree entry node |
| GuiEditorTooltip | GUI Editor - Tooltip |
| GuiGameRule |  |
| GuiGameRulePreset |  |
| GuiTableRow | Generic Table - Row |
| Hegemony |  |
| HeirSelection |  |
| HeirSelectionCandidate |  |
| HeirSelectionValue |  |
| HintsLateralView |  |
| HistoricalScore |  |
| HistoricalScoreItem |  |
| HistoryViewer |  |
| HolySite |  |
| HolySiteDefinition |  |
| HolySiteGlue |  |
| HolySiteType |  |
| IconWrap |  |
| ImageLookupNode | Image Look up node window |
| Implementable | Base class for implementable game structures |
| ImplementedCabinetAction |  |
| ImplementedEstatePrivilege |  |
| ImplementedGovernmentReform |  |
| ImplementedPolicy |  |
| ImportExportLateralView |  |
| ImportExportMarker |  |
| ImportTool | Map Editor - Import Tool Window |
| Importable | Map Editor - Importable items within a ImportableGroup |
| ImportableGroup | Map Editor - Importable Group |
| ImportantCultureItem |  |
| ImportantReligionItem |  |
| ImproveOpinionMarker |  |
| InGameMissionTaskItem |  |
| InGameTopbar |  |
| InfoboxNodeWindow | Node Editor - Infobox Node Window |
| InputActionBinding | Input Context Manager - Input Action |
| InspectorPanel | Map Editor - Spline Network Tool - Anchor Inspector Panel |
| Institution |  |
| InstitutionEditor |  |
| InstitutionEntry |  |
| InstitutionItem |  |
| InstitutionMessage |  |
| Insult |  |
| InsultCandidate |  |
| InteractionTarget |  |
| InternationalOrganization |  |
| InternationalOrganizationLawAlert |  |
| InternationalOrganizationLawCategory |  |
| InternationalOrganizationMessagePopup |  |
| InternationalOrganizationModifierWrap |  |
| InternationalOrganizationType |  |
| InternationalOrganizationTypeVariable |  |
| InternationalOrganizationTypeView |  |
| InternationalOrganizationsView |  |
| JominiGUISetting | Jomini Setting |
| JominiGameRules |  |
| JominiLoadWindow |  |
| JominiNotification | Jomini Notification Item |
| JominiNotificationOverlay |  |
| JominiPasswordPopup | Jomini Multiplayer - Password Popup |
| JominiServer | Jomini Multiplayer - Server |
| JominiServerBrowserGui | Jomini Multiplayer - Server Browser |
| JominiSettingsWindow | Jomini Settings Window |
| KeyframeEditor | GUI Editor - Keyframe Editor |
| KeyframeEventEditor | Entity Editor - Event Editor |
| KeyframeWidget | GUI Editor - Keyframe |
| LackingGoodsForRepairEntry |  |
| LandOwnershipRule |  |
| Language |  |
| LanguageFamily |  |
| LateralView |  |
| LateralViewHistoryEntry |  |
| LateralViewManager |  |
| Law |  |
| LawCategory |  |
| LawWithContextWrap |  |
| Layer | Map Editor - Map Object Layer |
| LayerTreeItem | Map Editor - Map Object Layer Tree Item |
| LeaderCandidate |  |
| LegalDocsViewer | Legal Documents Viewer |
| LevySetup |  |
| Loan |  |
| LoanDurationCandidate |  |
| LoanEntry |  |
| LobbyPlayer | Jomini Multiplayer - Lobby Player |
| LobbyView | Multiplayer GUI - Lobby View |
| LocalMod | Mods Gui - Local Mod |
| Location |  |
| LocationBuildingItem |  |
| LocationBuildingsWindow |  |
| LocationCountryDoubleModifierWrap |  |
| LocationCountryModifierWrap |  |
| LocationDoubleModifierWrap |  |
| LocationItem |  |
| LocationMigrationWrap |  |
| LocationModifierWrap |  |
| LocationPercentCountryModifierWrap |  |
| LocationPopItem |  |
| LocationPopPieChartTooltipWidget |  |
| LocationPopulationChart |  |
| LocationRank |  |
| LocationReference |  |
| LocationToBuildItem |  |
| LocationToRecruitItem |  |
| LocationView |  |
| LocationViewSelectProvince |  |
| LocationsListView |  |
| LocationsListViewItem |  |
| LockableInfo |  |
| LogEntry | Texture Importer - Log Entry |
| LogViewer | Log Viewer Window |
| LogViewerCategory | Log Viewer - Log Category |
| LogViewerEntry | Log Viewer - Log Entry |
| LogViewerType | Log Viewer - Log Entry Type |
| LoginView | Login View |
| MPChatMessage |  |
| MPConfig | Jomini Multiplayer - Configuration |
| MaintenanceSetting |  |
| ManageSubjectsLateralView |  |
| MapColorLedger |  |
| MapContentEditorMode | Map Editor - Map Content Editor Mode |
| MapContentEditorOptions | Map Editor - Map Content Options Window |
| MapContentEditorViewport | Map Editor - Map Content Viewport |
| MapContentEntryDesc | Map Editor - Map Content Layer Entry |
| MapContentLayerDesc | Map Editor - Map Content Layer |
| MapContentPanel | Map Editor - Map Content Layer List |
| MapContentPropertyGroup | Map Editor - Map Content Property Group |
| MapContentPropertyGroupsGui |  |
| MapContentSelector | Map Editor - Map Content Selection |
| MapContentSelectorGui | Map Editor - Map Content Selection Interface |
| MapEditor | Map Editor - Main |
| MapEditorGui | Map Editor - Main GUI |
| MapEditorLayerBorder | Map Editor - Map Editor Layer Border |
| MapEditorLayerBorderDockable | Map Editor - Map Editor Layer Border Settings Window |
| MapMarkerSettingItem |  |
| MapMode |  |
| MapObjectMask | Map Editor - Map Object Mask |
| MapObjectPainter | Map Editor - Map Object Painter |
| MapObjectPainterMode | Map Editor - Map Object Painter Mode |
| MapObjectPainterOptions | Map Editor - Map Object Painter Options |
| MapObjectTool | Map Editor - Map Object Tool |
| Maritime |  |
| MaritimeInLocationWrap |  |
| MaritimeItem |  |
| MaritimeLateralView |  |
| MaritimePresence |  |
| Market |  |
| MarketAccessWrap |  |
| MarketCountryNeeds |  |
| MarketMarker |  |
| MarketViewSelectMarket |  |
| MarketingContainer |  |
| MarketingSlot |  |
| MarketsView |  |
| MaskEntry | Map Editor - Texture Mask |
| MaskManagerEntry | Map Editor - Mask Painter - Mask Entry |
| MaskPainterManager | Map Editor - Mask Painter Manager |
| MaskPainterMapContentPanel | Map Editor - Mask Painter Map Content Window |
| MaskPainterMode | Map Editor - Mask Painter mode |
| MaskPainterTool | Map Editor - Mask Painter Tool |
| MaskPainterViewport | Map Editor - Mask Painter Viewport |
| MaterialNodeWindow |  |
| MemberTypeItem |  |
| Mercenary |  |
| MercenaryItem |  |
| MercenaryModifierWrap |  |
| MercenaryTypeItem |  |
| Merchant |  |
| MerchantCapacityInMarketWrap |  |
| MerchantPowerInMarketWrap |  |
| MeshImporter | Mesh Importer Window |
| MeshImporterBrowser | Mesh Importer Browser Window |
| MeshImporterBrowserEntry | Mesh Importer Browser File Entry |
| MeshImporterMaterialEntry |  |
| MeshImporterMaterials |  |
| MessageLog |  |
| MessageMenuItem |  |
| MessagePopup |  |
| MessageSettingItem |  |
| MessageSettings |  |
| MessageSettingsMenu |  |
| MetadataWindow | Window to edit metadata of selected nodes. |
| Migration |  |
| MilitaryObjective |  |
| MilitaryObjectiveGroupView |  |
| MilitaryObjectiveGroupsView |  |
| MissingGoods |  |
| MissingGoodsOnMarketImpactWrap |  |
| MissionAlert |  |
| MissionDefinition |  |
| MissionItem |  |
| MissionLateralView |  |
| MissionLineItem |  |
| MissionMessage |  |
| MissionProgress |  |
| MissionTaskDefinition |  |
| MissionTaskItem |  |
| MissionTaskMessage |  |
| MissionTasksLateralView |  |
| ModToolItem |  |
| ModToolsGui |  |
| ModifierDebugData |  |
| ModifierDebugInspectorPlugin |  |
| ModifierItem |  |
| ModifierSourceWrap |  |
| ModifierType |  |
| ModsGui | Mods Gui Data Context |
| ModsPlayset |  |
| ModsPlaysetEntry |  |
| MoveTool | Map Editor - Map Object - Move Tool |
| MultiNonoptionalInputNodeWindow |  |
| MultiUnitSelectUnit |  |
| MultiUnitWindow |  |
| MultiplayerChat |  |
| MultiplayerSetupWindow | Jomini Multiplayer - Setup window |
| MusicPlayer |  |
| MusicPlayerCategory |  |
| MusicTrack |  |
| NavyConstructionMarker |  |
| NavyStrength |  |
| NewBornMessage |  |
| NewCountryCandidate |  |
| Node | Node Editor - Node |
| NodeEditorSearch |  |
| NodeError | Node Editor - Node Error |
| NodeLine | Node Editor - Node Line |
| NodePin | Node Editor - Node Pin |
| NodeWindow | Node Editor - Node Window |
| NonDownloadedMod | Mods Gui - Non-Downloaded Mod |
| NonRegisteredDockable | NonRegistered Dockable Window |
| NotificationDummyContext | Jomini Notification Dummy Context |
| Nudger | Map Editor - Map Object Manager (Nudger) |
| NudgerLayerEntryMapObjectDesc | Map Editor - Map Object - Map Content Entry |
| NudgerMapContentGui | Map Editor - Map Object - Map Content Window |
| NudgerMapObjectPropertyListDockable | Map Editor - Map Object |
| NudgerMode | Map Editor - Map Object Mode |
| ObjectBrowser | Object Explorer - Browser |
| ObjectBrowserView | Object Explorer - View |
| ObjectInspector | Object Explorer - Inspector |
| ObjectInspectorDockable | Object Explorer - Inspector Window |
| ObjectInspectorPlugin | Object Explorer - Inspector Plugin |
| ObjectPreset | Object Explorer - Preset |
| ObjectProvider | Object Explorer - Provider |
| OneBuildingInMarketUpkeepWrap |  |
| OngoingRelationCountry |  |
| OngoingRelationCountryList |  |
| OosData | Jomini Multiplayer - Out-of-sync data |
| OosWindow | Jomini Multiplayer - Out-of-sync window |
| OrgItem |  |
| OutbreakItem |  |
| OutgoingFriendRequest | Jomini Friend List - Outgoing friend request |
| Outliner |  |
| OutlinerAgendaEntry |  |
| OutlinerCabinetEntry |  |
| OutlinerCategoryEntry |  |
| OutlinerCategoryHandler |  |
| OutlinerDiplomacyEntry |  |
| OutlinerEntry |  |
| OutlinerPlayerEntry |  |
| OutlinerSettings |  |
| OutlinerWarEntry |  |
| OutputEntry | Texture Importer - Output Entry |
| OverrideEntry |  |
| Parliament |  |
| ParliamentAgenda |  |
| ParliamentAgendaGlue |  |
| ParliamentAgendaItem |  |
| ParliamentInSession |  |
| ParliamentIssue |  |
| ParliamentIssueWithContextWrap |  |
| ParliamentMarker |  |
| ParliamentType |  |
| ParticleUserData |  |
| PauseMenu |  |
| Payment |  |
| PaymentWithContextWrap |  |
| PdxAccount |  |
| PdxCoreSetting | Settings Window - Core Setting |
| PdxEnumSetting | Settings Window - Enum Setting |
| PdxGuiFoldOut | Foldable Item |
| PdxGuiGfxVideoControl |  |
| PdxGuiTableRow | Generic Tree Table - Row |
| PdxGuiTreeTable | Generic Tree-Table |
| PdxGuiWidget | GUI Widget |
| PdxSetting | Settings Window - Setting |
| PdxSettingsWindow | Settings Window |
| PdxSettingsWindowCategory | Settings Window - Category |
| PdxValueSetting | Settings Window - Value Setting |
| PeaceOfferCategory |  |
| PeaceOfferLateralView |  |
| PeaceOfferLateralViewParticipant |  |
| PeaceOfferWarScoreTreatyGlue |  |
| PeaceTreaty |  |
| PeopleDynastyItem |  |
| PeoplePopItem |  |
| PeopleRebelItem |  |
| PerformActionParams |  |
| Periphora |  |
| PinCollection |  |
| PinningManager |  |
| PlayStyleItem |  |
| Playable | Jomini Playable |
| PlayerConstruction |  |
| PlayerEntryForChat |  |
| PlayerJoinRequest | Jomini Multiplayer - Player Join Request |
| PlayerModifiersLateralView |  |
| PlayerPlayStyleItem |  |
| PlayerProficiency |  |
| PlaystyleHint |  |
| PlaythroughItem |  |
| PlotLine |  |
| Policy |  |
| PolicyWithContextWrap |  |
| Pop |  |
| PopCultureItem |  |
| PopEditor |  |
| PopEntry |  |
| PopPoliticsItem |  |
| PopReligionItem |  |
| PopSetupEntry |  |
| PopTaxItem |  |
| PopType |  |
| PopTypeEntry |  |
| PopTypeItem |  |
| PopsCountryItem |  |
| PopsLocationItem |  |
| PopsOverview |  |
| PopsPiechartWidget |  |
| PopsProvinceItem |  |
| Population |  |
| PopulationConfiguration |  |
| PortEditor |  |
| PortMarker |  |
| Portrait3dView | Portrait Editor - 3D view window |
| PortraitDataContext | Portrait Editor - Portrait Data |
| PortraitEditorAnimationItem | Portrait Editor - Animation Item |
| PortraitEditorWindow | Portrait Editor Window |
| PortraitTooltip | Portrait Tooltip |
| PossibleDisease |  |
| PossibleExplorationItem |  |
| PossibleItem |  |
| PossibleLeaderItem |  |
| PossiblePrivateerItem |  |
| PossibleProductionMethods |  |
| PossibleProductionMethodsItem |  |
| PossibleRebel |  |
| PossibleSubUnitDefinition |  |
| PossibleTrade |  |
| PossibleTradesSelectMarket |  |
| PreviewMaskTexture | Map Editor - Preview Mask |
| Price |  |
| PriceTooltipWrap |  |
| Privateer |  |
| PrivilegeItem |  |
| ProducedOnMarketWrap |  |
| ProductionMethod |  |
| ProductionMethodItem |  |
| ProductionSelectMarket |  |
| ProductionView |  |
| PropertyListCategory | A category in a property list |
| Province |  |
| ProvinceDefinition |  |
| ProvinceModifierWrap |  |
| QuickCabinetCardModifier |  |
| QuickCharacterActions |  |
| QuickCultureCountryList |  |
| QuickDiplomaticActions |  |
| QuickMarketTrades |  |
| QuickMissionList |  |
| QuickRebelLocationList |  |
| QuickReligionCountryList |  |
| QuickTemporaryCountryRelations |  |
| QuickUnitActions |  |
| QuickVisibleCountries |  |
| QuickVisibleMarkets |  |
| RandomizableValueFloat |  |
| RandomizableValueInt |  |
| RawGoodLocationItem |  |
| RawGoodsMarker |  |
| ReasonItem |  |
| Rebel |  |
| RebelDetailsLateralView |  |
| RecruitInLocationLateralView |  |
| RecruitScoreRanking |  |
| RecruitmentMethod |  |
| ReformItem |  |
| RegencyType |  |
| Region |  |
| RelationDescItem |  |
| RelationTypeItem |  |
| RelativePowerTooltipGlue |  |
| Religion |  |
| ReligionDefinition |  |
| ReligionGroup |  |
| ReligionItem |  |
| ReligionMessage |  |
| ReligionModifierWrap |  |
| ReligionsLedger |  |
| ReligiousAspect |  |
| ReligiousAspectGlue |  |
| ReligiousFaction |  |
| ReligiousFactionActionGlue |  |
| ReligiousFactionGlue |  |
| ReligiousFigure |  |
| ReligiousFigureGlue |  |
| ReligiousFocus |  |
| ReligiousFocusGlue |  |
| ReligiousSchool |  |
| RemoveFriendConfirmWindow | Jomini Friend List - Remove friend confirm window |
| RenameDialog |  |
| ReorgWindow |  |
| ReportIssueItem |  |
| ReportIssueWindow |  |
| RequirementLine |  |
| RequirementLineAux |  |
| RequirementsList |  |
| ResearchMessage |  |
| ResignConfirmationWindow |  |
| Resolution |  |
| ResolutionGlue |  |
| RiverDirectionWrap |  |
| RoadBuilder |  |
| RoadCostCalculation |  |
| RoadDestinationItem |  |
| RoadEditor |  |
| RoadType |  |
| RoadTypeEntry |  |
| RoadTypeItem |  |
| RowList |  |
| RulerTerm |  |
| RulerTermEntry |  |
| RulerTraitEntry |  |
| RulingHistoryView |  |
| SaintGlue |  |
| Savable | Save Dialog - Savable |
| SavableGroup | Save Dialog - Savable Group |
| SaveDialog | Save Dialog |
| SaveGame |  |
| SaveGameAnalysisView |  |
| SaveGameAnalyzer |  |
| SaveGameBlockData |  |
| SaveGameConfigView |  |
| SaveGameItem |  |
| SaveGameListView |  |
| SaveListWindow |  |
| SaveNameWindow |  |
| ScaledStaticModifierWrap |  |
| Scenario |  |
| SceneData |  |
| SceneEditor | Scene Editor Window |
| SceneEditorEnvironmentProperties | Scene Editor Environment Properties |
| SceneEditorHierarchyEntry | Entity Represented in the Scene Editor Hierarchy |
| SceneEntityComponentsEditor | Scene Editor Entity Component Editor |
| SceneHierarchy | Scene Editor Entity Hierarchy |
| ScenePreset | Scene Editor Preset |
| ScenePresetEntity | Scene Editor Preset Entity |
| SceneProfiler | Scene Editor Profiling |
| SceneSelection | Scene Editor Selection |
| SceneTransform |  |
| Scope |  |
| ScopeDebugData |  |
| ScopeDebugInspectorPlugin |  |
| ScopeObjectEditor |  |
| ScopeObjectProvider |  |
| ScopeObjectType |  |
| ScopedEditorSettingsCategory |  |
| Score |  |
| ScoreView |  |
| ScoreViewItem |  |
| ScriptProfilerEntry |  |
| ScriptProfilerFileLine |  |
| ScriptProfilerGui |  |
| ScriptRunnerInspector |  |
| ScriptRunnerResult |  |
| ScriptableHintDefinition |  |
| ScriptedGui |  |
| ScriptedHintItem |  |
| ScriptedPeaceTreatyType |  |
| ScriptedRelationType |  |
| ScriptedRelationTypeWithContextWrap |  |
| SeaCurrentWrap |  |
| SeaZoneView |  |
| SearchBar |  |
| SearchFilter |  |
| SearchFilterCategory |  |
| SearchFilterGroup |  |
| SearchFilterRange |  |
| SearchFilterRangeValues |  |
| SearchListNodeWindow |  |
| SectionIndex |  |
| SelectCasusBelli |  |
| SelectCharacterInteraction |  |
| SelectChildEducation |  |
| SelectCountryDiplomacyLateralView |  |
| SelectCreateCasusBelliWindow |  |
| SelectHeirSelection |  |
| SelectHolySite |  |
| SelectInteractionTargetGlue |  |
| SelectInteractionTargetView |  |
| SelectInterveneWindow |  |
| SelectLateralViewHistory |  |
| SelectLoanLateralView |  |
| SelectMissionLateralView |  |
| SelectParticipant |  |
| SelectParticleUserDataDialog |  |
| SelectSearchFilter |  |
| SelectSocietalValue |  |
| SelectSubjectTypeLateralView |  |
| SelectTool | Map Editor - Map Object - Select Tool |
| SelectWar |  |
| SelectedMarketLateralView |  |
| SendGiftWindow |  |
| ServerInformation |  |
| SettingCategory | Jomini Settings - Category |
| SettingsPage | Jomini Settings - Settings Page |
| SetupCondottieriView |  |
| SetupEditor |  |
| SetupEntry |  |
| SetupMercenaryRequirementsView |  |
| Siege |  |
| SiegeRollModifierWrap |  |
| SiegeRollModifierWrapItem |  |
| SimpleCustomTagTooltipWrapper |  |
| SingleUnitSelectUnit |  |
| SingleUnitWindow |  |
| Situation |  |
| SituationMessagePopup |  |
| SituationView |  |
| SkinEditor | GFX Skin Editor |
| Social | Jomini Social Manager |
| SocialNotificationWindow | Jomini Friend List - Notification window |
| SocialUI | Jomini Friend List - Social UI |
| SocialWidget | Jomini Social Widget |
| SocietalValue |  |
| SocietalValueCandidate |  |
| SocietalValueInCountryWrap |  |
| SocietalValueItem |  |
| SocietalValueRequirement |  |
| SocietalValuesLateralView |  |
| SortKey |  |
| SpecialOptionGlue |  |
| SpecialStatus |  |
| SpecificGoodsOnMarketWrap |  |
| SplineAdjustmentTool | Map Editor - Spline Network Adjustment Tool |
| SplineAdjustmentToolMode | Map Editor - Spline Network Adjustment Tool - Mode |
| SplineEntryUi | Map Editor - Universal Spline Entry UI |
| SplineRiverInteractionMode | Map Editor - Spline Ruler Interaction Mode |
| SplineRiverTool | Map Editor - Spline River Tool |
| SplineStripTool | Map Editor - Spline Strip Tool |
| SplineStripToolMode | Map Editor - Spline Strip Tool - Mode |
| SplineToolsMapContentPanel | Map Editor - Spline Strip Tool - Map Content Panel |
| SplineTypeCreateSelectionDropdown | Map Editor - Spline Strip Tool - Create Dropdown |
| SplineTypeItem | Map Editor - Spline Strip Tool - Spline Type |
| SplineTypeSwitchSelectionDropdown | Map Editor - Spline Strip Tool - Type switch dropdown |
| SplineVisibilityDropdown | Map Editor - Spline Visibility Dropdown |
| StatImpactItem |  |
| StateConnection | A connection in the Animation Edtior |
| StaticAutoModifier |  |
| StaticModifier |  |
| StatusWidget | Status Widget |
| StrategicMilitaryObjective |  |
| StrategicMilitaryObjectiveGlue |  |
| StrategicMilitaryObjectiveGroup |  |
| StrategicObjectiveGroupGlue |  |
| StringPair |  |
| StringPairList |  |
| SubContinent |  |
| SubUnit |  |
| SubUnitArray |  |
| SubUnitCategory |  |
| SubUnitCombatCounts |  |
| SubUnitCount |  |
| SubUnitCounts |  |
| SubUnitPrice |  |
| SubUnitType |  |
| SubjectCategoryItem |  |
| SubjectItem |  |
| SubjectMilitaryStance |  |
| SubjectType |  |
| SubjectTypeItem |  |
| SupplyDepot |  |
| SupplyDepotMarker |  |
| SupplyOnMarketWrap |  |
| SupportRebelLateralView |  |
| TableColumn |  |
| TableColumnList |  |
| TacticalMilitaryObjectiveGroup |  |
| TacticalMilitaryObjectiveTypeGlue |  |
| TacticalObjectiveGroupGlue |  |
| TagInfo |  |
| TargettedActionParameters |  |
| TaxRateSetting |  |
| TechTreeItem |  |
| TechTreeOneAge |  |
| TechnologyLateralView |  |
| TemporaryDemand |  |
| TerrainImpactItem |  |
| TerrainToolButton | Map Editor - Terrain Tool Button |
| TextSearchFilter |  |
| TextureEntry | Texture Importer - Texture Entry |
| TextureImporter | Texture Importer Window |
| TextureList | Texture List - In-memory texture list |
| TextureListDirectory | Texture Viewer - Directory |
| TextureListTexture | Texture Viewer - Texture |
| TextureNodeWindow | Node Editor - Texture Node Window |
| TextureViewer | Texture Viewer - In-memory texture viewer |
| ThreatenTarget |  |
| ThreatenWarView |  |
| TickTaskData |  |
| TickTaskDebuggerView |  |
| TickTaskDetailsView |  |
| TickTaskGraphItem |  |
| TickTaskGraphLine |  |
| TickTaskListView |  |
| TimedModifier |  |
| TimedModifierOwner |  |
| TimelineKeyframe | Timeline Widget - Keyframe |
| TitleDescTooltip |  |
| TollMarker |  |
| ToolDialog | Tool Dialog |
| ToolDialogButton | Tool Dialog - Button |
| ToolMessageDialog | Tool Message Dialog |
| ToolProgressDialog | Tool Progress Dialog |
| ToolProperty | Tool Property |
| ToolProperty2SearchList |  |
| ToolPropertyAction | Additional Action available on a given ToolProperty. |
| ToolPropertyBool |  |
| ToolPropertyCColor | Tool Property Color - CColor |
| ToolPropertyCString |  |
| ToolPropertyColor | Tool Property Color - Vector4f |
| ToolPropertyCurve |  |
| ToolPropertyFloat |  |
| ToolPropertyInt |  |
| ToolPropertyInt16 |  |
| ToolPropertyInt8 |  |
| ToolPropertyList | Tool Property List |
| ToolPropertySearchList |  |
| ToolPropertyString | Tool Property UTF8 String |
| ToolPropertyUint |  |
| ToolPropertyUint16 |  |
| ToolPropertyUint8 |  |
| ToolPropertyUndoableSearchList |  |
| ToolPropertyVec1fPercent |  |
| ToolPropertyVec2f |  |
| ToolPropertyVec2fPercent |  |
| ToolPropertyVec2i |  |
| ToolPropertyVec3f |  |
| ToolPropertyVec3i |  |
| ToolPropertyVec4i |  |
| ToolsPropertyDraggableValueFloat | Tools Property Draggable Float |
| ToolsPropertyDraggableValueInt | Tools Property Draggable Int |
| ToolsPropertyDraggableValueVector2f | Tools Property Draggable Vector2 Float |
| ToolsPropertyDraggableValueVector2i | Tools Property Draggable Vector2 Integer |
| ToolsPropertyDraggableValueVector3f | Tools Property Draggable Vector3 Float |
| ToolsPropertyDraggableValueVector3i | Tools Property Draggable Vector3 Integer |
| ToolsPropertyDraggableValueVector4i | Tools Property Draggable Vector4 Integer |
| ToolsPropertyPath | Tools Property Path |
| ToolsPropertyRangedValueFloat | Tools Property Ranged Float |
| ToolsPropertyRangedValueInt | Tools Property Ranged Int |
| ToolsPropertyTextureStringValue | Tools Property Texture Value |
| ToolsPropertyTextureValue | Tools Property Texture |
| ToolsPropertyValueList | Tools property representing a list of elements |
| ToolsPropertyValueListEntry | Single element in the datamodel provided by a ToolsPropertyValueList |
| ToolsPropertyVfsMountPath | Tools Property for Vfs-Mount-Path |
| ToolsSearch | Tools Search (OmniSearch) |
| ToolsSearchResult | Tools Search - Result |
| ToolsUndoableValueBundleBool |  |
| ToolsUndoableValueBundleCColor |  |
| ToolsUndoableValueBundleCString |  |
| ToolsUndoableValueBundleColor |  |
| ToolsUndoableValueBundleFloat |  |
| ToolsUndoableValueBundleInt |  |
| ToolsUndoableValueBundleString |  |
| ToolsUndoableValueBundleUint |  |
| ToolsUndoableValueBundleUint16 |  |
| ToolsUndoableValueBundleVec2f |  |
| ToolsUndoableValueBundleVec2i |  |
| ToolsUndoableValueBundleVec3f |  |
| ToolsUndoableValueBundleVec3i |  |
| ToolsUndoableValueBundleVec4i |  |
| TooltipInfo |  |
| TooltipString |  |
| TopScope |  |
| Topography |  |
| Trade |  |
| TradeDetailsLateralView |  |
| TradeOverview |  |
| TradePathItem |  |
| TradesWrap |  |
| Trait |  |
| TraitCategory |  |
| TransactionProportion |  |
| TransferUnit |  |
| TransferUnitType |  |
| Tutorial |  |
| TutorialWindow |  |
| Tweakable | Tweakable field in the Tweaker tool |
| TweakableCategory | A single Tweakable category in the Tweaker Tool |
| TweakableUiEntry | A single Tweakable Entry in the Tweaker Tool |
| TweakablesSnapshot | A snapshot of tweakable values represented in the Tweaker tool |
| Tweaker | Tweaker Tool Window |
| Type | Map Editor - Map Object Type |
| UIAction |  |
| UIActionProvider |  |
| UIClickAction |  |
| UIMessage |  |
| UIVariables |  |
| UVSelector |  |
| UndoHistoryViewerClient |  |
| UndoStack |  |
| UneditableString |  |
| UniqueContentCategory |  |
| UniqueContentDescription |  |
| UniqueContentItem |  |
| UniqueStatItem |  |
| Unit |  |
| UnitAbility |  |
| UnitActionItem |  |
| UnitActivity |  |
| UnitDetailsView |  |
| UnitGlue |  |
| UnitItem |  |
| UnitMarker |  |
| UnitMarkerItem |  |
| UnitOverview |  |
| UnitPriceWrap |  |
| UnitSuppliesWrap |  |
| UnitTransportStateBag |  |
| UnitTypeItem |  |
| UnitTypeLateralView |  |
| UnitViewer |  |
| UnitsWrap |  |
| UniversalSplineEditorEdgeProperties | Map Editor - Universal Spline Editor Selected Edges Properties |
| UniversalSplineEditorMode | Map Editor - Universal Spline Editor Mode |
| UniversalSplineEditorOutliner | Map Editor - Universal Spline Editor Outliner |
| UniversalSplineEditorPointsProperties | Map Editor - Universal Spline Editor Selected Points Properties |
| UniversalSplineEditorProperties | Map Editor - Universal Spline Editor Properties |
| UniversalSplineEditorStructure | Map Editor - Universal Spline Editor Structure of selected spline |
| UniversalSplineEditorTopbarPanel | Map Editor - Universal Spline Editor Topbar |
| UniversalSplineEditorViewport | Map Editor - Universal Spline Editor Viewport |
| UnprofitableBuildingsEntry |  |
| UserDataNode | Particle Editor - User Data Node |
| VariableEntry |  |
| VariableInfo |  |
| VariableInspectorEntry |  |
| VariableInspectorPlugin |  |
| VariableInspectorVariable |  |
| VariableList |  |
| VariableListEntry |  |
| VariableListInspectorPlugin |  |
| VariableListStore |  |
| VariableStore |  |
| VariableSystem |  |
| Vegetation |  |
| VfsMountPathBrowser | Gui Data Profiler Window |
| VfsMountPathBrowserEntryNode | Gui Data Profiler tree entry node |
| ViewerEntity | Entity Editor - Entity |
| ViewerEntityLodInfo | Entity Editor - Entity LodInfo |
| ViewerEntityState | Entity Editor - Entity State |
| VoteGlue |  |
| VoteTargetGlue |  |
| VoterGlue |  |
| War |  |
| WarGlue |  |
| WarGoal |  |
| WarGoalType |  |
| WarImpactWrap |  |
| WarItem |  |
| WarLateralView |  |
| WarLateralViewBattle |  |
| WarLateralViewParticipant |  |
| WarLosses |  |
| WarMessage |  |
| WarParticipant |  |
| WarParticipantGlue |  |
| WarSideGlue |  |
| WarViewer |  |
| WarsLedger |  |
| WarsOverviewWar |  |
| WatchWindow |  |
| WeatherSystem |  |
| WillJoinCountryList |  |
| WorkOfArt |  |
| WorkOfArtType |  |
| bool |  |
| double | Number stored with `double float` precision. |
| float | Number stored with `float` precision. |
| int16 |  |
| int32 |  |
| int64 |  |
| int8 |  |
| uint16 |  |
| uint32 |  |
| uint64 |  |
| uint8 |  |
| void | Unspecified type / empty type. |

List of data types for promotes

| Type | Description |
| --- | --- |
| ActiveClip |  |
| ActiveHegemon |  |
| ActiveHegemonItem |  |
| ActiveInstitution |  |
| ActiveParliamentAgenda |  |
| ActiveParliamentAgendaWrap |  |
| ActiveProductionMethod |  |
| ActiveResolution |  |
| ActiveResolutionContainer | Base class for resolution containers |
| ActiveSituation |  |
| Advance |  |
| AdvanceDefinition |  |
| AdvanceItem |  |
| AdvanceNode |  |
| AdvancesLateralView |  |
| Age |  |
| AgeAdvancesWrap |  |
| AgendaView |  |
| AiCurrencyClassGlue |  |
| AiCurrencyViewer |  |
| AiTransportTarget |  |
| AlertCanJoinTargettedIO |  |
| AlertFormableCountry |  |
| AlertManager |  |
| AlertMemberLeavingUnion |  |
| AnimationClip | An animation clip used in animation state machines. |
| AnimationClipsEditor | Animation Clips Editor Window |
| AnimationEditor | Animation Editor Window |
| AnimationEditorConnectionTab | Connection Tab in the Animation Editor |
| AnimationEditorState | A state in the Animation State Editor. |
| AnimationEditorStateTab | State Tab in the Animation Editor |
| AnimationEditorViewer |  |
| AnnexationMarker |  |
| AntagonismBombSpec |  |
| AntagonismBombSpecWrap |  |
| AntagonismTwoCountriesWrap |  |
| AntagonismWrapper |  |
| Area |  |
| ArmyBuilderLateralView |  |
| ArmyConstructionMarker |  |
| Artist |  |
| ArtsItem |  |
| ArtsView |  |
| AskRepayLoanMessagePopup |  |
| AutocompleteEntry |  |
| AutomationLateralView |  |
| AvailableMercenaryTypes |  |
| Avatar |  |
| BattleParticipant |  |
| BattleResult |  |
| BattleResultMessage |  |
| BattleResultMessageParticipant |  |
| BattleResultMessageSide |  |
| BattleSide |  |
| BattleUnitStats |  |
| BattleView |  |
| BlockedVisionMarker |  |
| BrushSettings | Map Editor - Brush settings. |
| BrushSettingsDropdown | Map Editor - Brush settings dropdown. |
| BuildInLocationLateralView |  |
| BuildLocationSelectMarket |  |
| Building |  |
| BuildingCandidate |  |
| BuildingConstructionMarker |  |
| BuildingItem |  |
| BuildingPromoteTimeWrapper |  |
| BuildingSpyNetworkMarker |  |
| BuildingType |  |
| BuildingView |  |
| CDPopEditor |  |
| CEconomy |  |
| CEnumValueAnimation |  |
| Cabinet |  |
| CabinetAction |  |
| CabinetActionMarker |  |
| CabinetItem |  |
| CallAllyAlert |  |
| Cardinal |  |
| CasusBelli |  |
| CategoryBuildingTypesItem |  |
| CharMessage |  |
| Character |  |
| CharacterActionItem |  |
| CharacterInteraction |  |
| CharacterInteractionItem |  |
| CharacterItem |  |
| CharacterLateralview |  |
| CharacterRulerData |  |
| Chat | Jomini Chat - Chat |
| ChatNotificationMessage | Jomini Chat - Notification message |
| ChatTab | Jomini Chat - Tab |
| ChildEducation |  |
| ChildEducationCandidate |  |
| CityGraphicsWrap |  |
| CityMarker |  |
| Climate |  |
| ColonialCharter |  |
| ColonialCharterItem |  |
| ColonyCharterMarker |  |
| Combat |  |
| CombatImminentMarker |  |
| CombatMarker |  |
| CombatSide |  |
| CombatSideWrap |  |
| CombatSubUnitArray |  |
| CondottieriItem |  |
| ConquistadorConstructionMarker |  |
| ConstructScoreItem |  |
| ConstructScoreRanking |  |
| Construction |  |
| ConstructionItem |  |
| Context |  |
| Continent |  |
| ControlGroupsView |  |
| CountriesListView |  |
| CountriesListViewItem |  |
| Country |  |
| CountryCultureLateralView |  |
| CountryCultureLateralViewWorkOfArtItem |  |
| CountryDiplomaticItem |  |
| CountryInteraction |  |
| CountryListOverview |  |
| CountryMessage |  |
| CountryPeopleLateralView |  |
| CountryPopulationChart |  |
| CountryRank |  |
| CountryRankCandidate |  |
| CountryReligionLateralView |  |
| CreateCasusBelliMarker |  |
| CreateSubjectsLateralView |  |
| Culture |  |
| CultureGroup |  |
| CultureItem |  |
| CulturesLedger |  |
| CurrencyPriceWrap |  |
| CurrentNeedsItem |  |
| CurrentReligiousFocus |  |
| CurrentResearch |  |
| CurryingFavorsMarker |  |
| DecalsEditor | Map Editor - Decals Editor Mode |
| DecalsEditorDecalInstance | Map Editor - Decal Instance |
| DecalsEditorDecalInstancesList | Map Editor - List of Decal Instances |
| DecalsEditorDecalSet | Map Editor - Decal Set |
| DecalsEditorDecalSetsList | Map Editor - Decal Sets |
| DeclareWarAlly |  |
| DeclareWarLateralView |  |
| DemandCategory |  |
| DemandCategoryWrap |  |
| DemandsOnMarketWrap |  |
| DesertConnectionMarker |  |
| Dialect |  |
| DiploAlert |  |
| Diplomacy |  |
| DiplomacyDialog |  |
| DiplomacyLateralView |  |
| DiplomacyMacrobuilderLateralView |  |
| DiplomacyMacrobuilderSelectCountry |  |
| DiplomacyStatus |  |
| DiplomaticActionItem |  |
| Disaster |  |
| DisasterType |  |
| DisasterView |  |
| Disease |  |
| DiseaseOutbreak |  |
| DiseasesLateralView |  |
| DockableLayout | Dockable Layout Manager - Layout |
| DockableLayoutManager | Dockable Layout Manager Window |
| DynastiesLedger |  |
| Dynasty |  |
| DynastyItem |  |
| DynastyMarker |  |
| DynastyNodeItem |  |
| DynastyTreeView |  |
| EconomyItem |  |
| EconomyView |  |
| EditorSettingsWindow | Editor Settings Window |
| EmploymentSystem |  |
| Encyclopedia | Jomini Encyclopedia |
| EncyclopediaEntry | Jomini Encyclopedia - Entry |
| EncyclopediaEntryView | Jomini Encyclopedia - Entry View |
| EncyclopediaLateralView |  |
| EntityDesigner | Entity Designer Window |
| EntityEditor | Entity Editor |
| Estate |  |
| EstateOpinionWrap |  |
| EstatePrivilege |  |
| EstateType |  |
| EstatesItem |  |
| Ethnicity | Portrait System - Ethnicity |
| EventTargetSetupContext |  |
| EventWindow |  |
| ExpandRawGoodsLateralView |  |
| ExpandRawGoodsSelectMarket |  |
| ExpansionLateralView |  |
| Exploration |  |
| ExtraTooltipInfo |  |
| FilteredSortedList |  |
| FoodLocationItem |  |
| FoodProductionLateralView |  |
| FoodProductionListItem |  |
| FoodProductionSelectMarket |  |
| FoodProvinceItem |  |
| ForeignBuildingLocationItem |  |
| ForeignCountrySelectCountry |  |
| ForeignCountryView |  |
| FormNewCountry |  |
| FormableCountry |  |
| FormattedTooltipWrap |  |
| FortFlipRestoreMarker |  |
| FortMarker |  |
| FrontEndMainView |  |
| FrontEndSinglePlayerView |  |
| FrontEndView |  |
| GUIAchievement | Jomini Achievement GUI |
| GameLobby |  |
| GenericAction |  |
| GeographyGlue |  |
| God |  |
| GodWithReligionWrap |  |
| GoodItem |  |
| Goods |  |
| GoodsDemand |  |
| GoodsDemandEntry |  |
| GoodsDetailsLateralView |  |
| GoodsInMarket |  |
| GoodsItem |  |
| GoodsMarketEntry |  |
| GoodsMessage |  |
| GoodsOnMarketWrap |  |
| GoodsPriceOnMarketWrap |  |
| GoodsProductionLateralView |  |
| GoodsProductionSelectMarket |  |
| GoodsSellPriceWrap |  |
| GoodsSourceItem |  |
| GoodsView |  |
| GovReformOutlinerEntry |  |
| Government |  |
| GovernmentReform |  |
| GovernmentReformItem |  |
| GovernmentReformsLateralView |  |
| GovernmentType |  |
| GovernmentView |  |
| Graph | Node Editor - Graph |
| GraphPanel | Node Editor - Graph Panel |
| GreatPowerItem |  |
| Group | Jomini Achievement Window - Group |
| GroupItem |  |
| GuiGameRule |  |
| GuiGameRulePreset |  |
| Hegemony |  |
| HeirSelection |  |
| HeirSelectionCandidate |  |
| HeirSelectionValue |  |
| HintsLateralView |  |
| HistoricalScore |  |
| HistoricalScoreItem |  |
| HolySite |  |
| HolySiteDefinition |  |
| HolySiteGlue |  |
| HolySiteType |  |
| ImplementedCabinetAction |  |
| ImplementedEstatePrivilege |  |
| ImplementedGovernmentReform |  |
| ImplementedPolicy |  |
| ImportExportLateralView |  |
| ImportExportMarker |  |
| ImportantCultureItem |  |
| ImportantReligionItem |  |
| ImproveOpinionMarker |  |
| InGameMissionTaskItem |  |
| InGameTopbar |  |
| Institution |  |
| InstitutionItem |  |
| InstitutionMessage |  |
| InteractionTarget |  |
| InternationalOrganization |  |
| InternationalOrganizationMessagePopup |  |
| InternationalOrganizationType |  |
| InternationalOrganizationTypeView |  |
| InternationalOrganizationsView |  |
| JominiGameRules |  |
| JominiLoadWindow |  |
| JominiNotification | Jomini Notification Item |
| JominiSettingsWindow | Jomini Settings Window |
| LackingGoodsForRepairEntry |  |
| LandOwnershipRule |  |
| Language |  |
| LanguageFamily |  |
| LateralView |  |
| Law |  |
| LawWithContextWrap |  |
| Layer | Map Editor - Map Object Layer |
| LayerTreeItem | Map Editor - Map Object Layer Tree Item |
| LeaderCandidate |  |
| LevySetup |  |
| Loan |  |
| LoanEntry |  |
| LobbyPlayer | Jomini Multiplayer - Lobby Player |
| LobbyView | Multiplayer GUI - Lobby View |
| Location |  |
| LocationBuildingItem |  |
| LocationItem |  |
| LocationPopItem |  |
| LocationPopPieChartTooltipWidget |  |
| LocationPopulationChart |  |
| LocationRank |  |
| LocationReference |  |
| LocationToBuildItem |  |
| LocationToRecruitItem |  |
| LocationView |  |
| LocationViewSelectProvince |  |
| LocationsListView |  |
| LocationsListViewItem |  |
| LogViewer | Log Viewer Window |
| MaintenanceSetting |  |
| ManageSubjectsLateralView |  |
| MapContentEditorViewport | Map Editor - Map Content Viewport |
| MapEditor | Map Editor - Main |
| MapEditorGui | Map Editor - Main GUI |
| MapObjectPainter | Map Editor - Map Object Painter |
| MapObjectPainterOptions | Map Editor - Map Object Painter Options |
| MapObjectTool | Map Editor - Map Object Tool |
| Maritime |  |
| MaritimeInLocationWrap |  |
| MaritimeItem |  |
| MaritimeLateralView |  |
| MaritimePresence |  |
| Market |  |
| MarketAccessWrap |  |
| MarketCountryNeeds |  |
| MarketMarker |  |
| MarketViewSelectMarket |  |
| MarketingContainer |  |
| MarketsView |  |
| MaskPainterViewport | Map Editor - Mask Painter Viewport |
| MemberTypeItem |  |
| Mercenary |  |
| MercenaryItem |  |
| MercenaryTypeItem |  |
| Merchant |  |
| MerchantCapacityInMarketWrap |  |
| MerchantPowerInMarketWrap |  |
| MeshImporter | Mesh Importer Window |
| MessagePopup |  |
| Migration |  |
| MilitaryObjective |  |
| MilitaryObjectiveGroupView |  |
| MilitaryObjectiveGroupsView |  |
| MissionAlert |  |
| MissionDefinition |  |
| MissionItem |  |
| MissionLateralView |  |
| MissionMessage |  |
| MissionProgress |  |
| MissionTaskDefinition |  |
| MissionTaskItem |  |
| MissionTaskMessage |  |
| MissionTasksLateralView |  |
| ModifierDebugInspectorPlugin |  |
| ModifierSourceWrap |  |
| ModsGui | Mods Gui Data Context |
| ModsPlayset |  |
| ModsPlaysetEntry |  |
| MultiUnitSelectUnit |  |
| MultiUnitWindow |  |
| MultiplayerSetupWindow | Jomini Multiplayer - Setup window |
| NavyConstructionMarker |  |
| NewBornMessage |  |
| NewCountryCandidate |  |
| OngoingRelationCountry |  |
| OosData | Jomini Multiplayer - Out-of-sync data |
| OrgItem |  |
| OutbreakItem |  |
| Outliner |  |
| OutlinerCabinetEntry |  |
| OutlinerDiplomacyEntry |  |
| OutlinerPlayerEntry |  |
| OutlinerSettings |  |
| Parliament |  |
| ParliamentAgenda |  |
| ParliamentAgendaGlue |  |
| ParliamentAgendaItem |  |
| ParliamentInSession |  |
| ParliamentIssue |  |
| ParliamentIssueWithContextWrap |  |
| ParliamentMarker |  |
| ParliamentType |  |
| Payment |  |
| PaymentWithContextWrap |  |
| PdxAccount |  |
| PdxGuiWidget | GUI Widget |
| PdxSetting | Settings Window - Setting |
| PeaceOfferLateralView |  |
| PeaceOfferLateralViewParticipant |  |
| PeaceTreaty |  |
| PeopleDynastyItem |  |
| PeoplePopItem |  |
| PeopleRebelItem |  |
| Periphora |  |
| PinningManager |  |
| Playable | Jomini Playable |
| PlayerEntryForChat |  |
| PlayerModifiersLateralView |  |
| Policy |  |
| PolicyWithContextWrap |  |
| Pop |  |
| PopCultureItem |  |
| PopEntry |  |
| PopPoliticsItem |  |
| PopReligionItem |  |
| PopTaxItem |  |
| PopType |  |
| PopTypeEntry |  |
| PopsCountryItem |  |
| PopsLocationItem |  |
| PopsOverview |  |
| PopsProvinceItem |  |
| PortMarker |  |
| PortraitEditorWindow | Portrait Editor Window |
| PossibleDisease |  |
| PossibleExplorationItem |  |
| PossibleItem |  |
| PossibleLeaderItem |  |
| PossiblePrivateerItem |  |
| PossibleSubUnitDefinition |  |
| PossibleTrade |  |
| PossibleTradesSelectMarket |  |
| Price |  |
| Privateer |  |
| PrivilegeItem |  |
| ProducedOnMarketWrap |  |
| ProductionMethod |  |
| ProductionMethodItem |  |
| ProductionSelectMarket |  |
| ProductionView |  |
| Province |  |
| ProvinceDefinition |  |
| QuickCabinetCardModifier |  |
| QuickDiplomaticActions |  |
| QuickTemporaryCountryRelations |  |
| QuickUnitActions |  |
| RawGoodLocationItem |  |
| RawGoodsMarker |  |
| Rebel |  |
| RebelDetailsLateralView |  |
| RecruitInLocationLateralView |  |
| RecruitScoreRanking |  |
| RecruitmentMethod |  |
| ReformItem |  |
| RegencyType |  |
| Region |  |
| RelationDescItem |  |
| RelationTypeItem |  |
| RelativePowerTooltipGlue |  |
| Religion |  |
| ReligionGroup |  |
| ReligionItem |  |
| ReligionMessage |  |
| ReligionsLedger |  |
| ReligiousAspect |  |
| ReligiousAspectGlue |  |
| ReligiousFaction |  |
| ReligiousFactionActionGlue |  |
| ReligiousFactionGlue |  |
| ReligiousFigure |  |
| ReligiousFigureGlue |  |
| ReligiousFocus |  |
| ReligiousFocusGlue |  |
| ReligiousSchool |  |
| RenameDialog |  |
| ReorgWindow |  |
| ReportIssueWindow |  |
| ResearchMessage |  |
| Resolution |  |
| ResolutionGlue |  |
| RoadBuilder |  |
| RoadDestinationItem |  |
| RoadType |  |
| RoadTypeItem |  |
| RulerTerm |  |
| RulerTermEntry |  |
| RulerTraitEntry |  |
| RulingHistoryView |  |
| SaintGlue |  |
| SaveGame |  |
| SaveGameAnalysisView |  |
| ScaledStaticModifierWrap |  |
| Scenario |  |
| SceneEditor | Scene Editor Window |
| Scope |  |
| ScopeDebugInspectorPlugin |  |
| ScopedEditorSettingsCategory |  |
| Score |  |
| ScoreView |  |
| ScoreViewItem |  |
| ScriptProfilerGui |  |
| ScriptRunnerInspector |  |
| ScriptableHintDefinition |  |
| ScriptedHintItem |  |
| ScriptedPeaceTreatyType |  |
| ScriptedRelationType |  |
| ScriptedRelationTypeWithContextWrap |  |
| SeaZoneView |  |
| SearchBar |  |
| SearchFilter |  |
| SearchFilterCategory |  |
| SelectCasusBelli |  |
| SelectCharacterInteraction |  |
| SelectChildEducation |  |
| SelectCountryDiplomacyLateralView |  |
| SelectCreateCasusBelliWindow |  |
| SelectHeirSelection |  |
| SelectInteractionTargetGlue |  |
| SelectInteractionTargetView |  |
| SelectLoanLateralView |  |
| SelectMissionLateralView |  |
| SelectParticipant |  |
| SelectSearchFilter |  |
| SelectSocietalValue |  |
| SelectSubjectTypeLateralView |  |
| SelectedMarketLateralView |  |
| SetupCondottieriView |  |
| SetupEditor |  |
| SetupMercenaryRequirementsView |  |
| Siege |  |
| SingleUnitSelectUnit |  |
| SingleUnitWindow |  |
| Situation |  |
| SituationMessagePopup |  |
| SituationView |  |
| SocietalValue |  |
| SocietalValueCandidate |  |
| SocietalValueItem |  |
| SocietalValueRequirement |  |
| SocietalValuesLateralView |  |
| SpecialStatus |  |
| SpecificGoodsOnMarketWrap |  |
| StaticModifier |  |
| StrategicMilitaryObjective |  |
| StrategicMilitaryObjectiveGlue |  |
| StrategicMilitaryObjectiveGroup |  |
| StrategicObjectiveGroupGlue |  |
| SubContinent |  |
| SubUnit |  |
| SubUnitArray |  |
| SubUnitCategory |  |
| SubUnitCombatCounts |  |
| SubUnitCount |  |
| SubUnitCounts |  |
| SubUnitType |  |
| SubjectItem |  |
| SubjectMilitaryStance |  |
| SubjectType |  |
| SubjectTypeItem |  |
| SupplyDepot |  |
| SupplyDepotMarker |  |
| SupplyOnMarketWrap |  |
| SupportRebelLateralView |  |
| TacticalMilitaryObjectiveGroup |  |
| TacticalObjectiveGroupGlue |  |
| TargettedActionParameters |  |
| TaxRateSetting |  |
| TechnologyLateralView |  |
| TemporaryDemand |  |
| TextSearchFilter |  |
| ThreatenTarget |  |
| TickTaskDetailsView |  |
| TickTaskGraphItem |  |
| TimedModifier |  |
| TollMarker |  |
| TopScope |  |
| Topography |  |
| Trade |  |
| TradeDetailsLateralView |  |
| TradeOverview |  |
| TradePathItem |  |
| TradesWrap |  |
| Trait |  |
| TransactionProportion |  |
| TransferUnit |  |
| TransferUnitType |  |
| UIMessage |  |
| UniqueContentItem |  |
| Unit |  |
| UnitAbility |  |
| UnitActionItem |  |
| UnitDetailsView |  |
| UnitGlue |  |
| UnitItem |  |
| UnitMarker |  |
| UnitMarkerItem |  |
| UnitOverview |  |
| UnitSuppliesWrap |  |
| UnitTransportStateBag |  |
| UnitTypeItem |  |
| UnitTypeLateralView |  |
| UnitsWrap |  |
| UnprofitableBuildingsEntry |  |
| VariableEntry |  |
| VariableInspectorEntry |  |
| VariableInspectorPlugin |  |
| VariableInspectorVariable |  |
| VariableList |  |
| VariableListEntry |  |
| VariableListInspectorPlugin |  |
| VariableListStore |  |
| VariableStore |  |
| Vegetation |  |
| VfsMountPathBrowser | Gui Data Profiler Window |
| ViewerEntity | Entity Editor - Entity |
| VoteGlue |  |
| VoteTargetGlue |  |
| VoterGlue |  |
| War |  |
| WarGlue |  |
| WarGoal |  |
| WarImpactWrap |  |
| WarItem |  |
| WarLateralView |  |
| WarLateralViewBattle |  |
| WarLateralViewParticipant |  |
| WarMessage |  |
| WarParticipant |  |
| WarParticipantGlue |  |
| WarSideGlue |  |
| WarViewer |  |
| WarsLedger |  |
| WarsOverviewWar |  |
| WeatherSystem |  |
| WorkOfArt |  |
| WorkOfArtType |  |

### Data type descriptions

Data Types

| Type | Description | Notes |
| --- | --- | --- |
| CFixedValue | 64 bit signed fixed point number with 5 decimal places | Max 92233720368547.75807, Min -92233720368547.75808 |

## Const vs nonconst

GUI script functions and promotes are categorized into two types: *const* and *nonconst*. These are generally identical in function, but one or the other may be required for certain uses.

Generally, functions and promotes starting with "Access" are used with and return a const type, while those starting with "Get" are used with and return a nonconst type.

## GUI functions

|  |  |
| --- | --- |
| ![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png) | Please help improve this article or section by [**expanding it**](https://eu5.paradoxwikis.com/index.php?title=GUI_script&action=edit) with: more tables. |

GUI functions typically retrieve certain information from the input type or transform it in some way.
Below are lists of functions available in certain scopes.

List of global functions

| Function | Arguments | Output | Description |
| --- | --- | --- | --- |
| Abs\_CFixedPoint | 1. unknown | CFixedPoint |  |
| Abs\_float | 1. unknown | float |  |
| Abs\_int32 | 1. unknown | int32 |  |
| Abs\_int64 | 1. unknown | int64 |  |
| AcceptJoinRequests |  | void |  |
| AccessActiveDLCs |  | unknown |  |
| AccessActiveMods |  | unknown |  |
| AccessMapEditorLayerBorders |  | unknown | Map Editor - Access all Layer borders |
| AccessModsGui |  | unknown | Access Mods GUI |
| AccessPlayerUnits |  | unknown |  |
| AddLocalizationIf | 1. unknown 2. unknown | CString |  |
| AddTextIf | 1. unknown 2. unknown | CString |  |
| Add\_CFixedPoint | 1. unknown 2. unknown | CFixedPoint |  |
| Add\_CVector2f | 1. unknown 2. unknown | CVector2f |  |
| Add\_float | 1. float 2. float | float |  |
| Add\_int32 | 1. unknown 2. unknown | int32 |  |
| Add\_int64 | 1. unknown 2. unknown | int64 |  |
| Add\_uint32 | 1. unknown 2. unknown | uint32 |  |
| Add\_uint64 | 1. unknown 2. unknown | uint64 |  |
| And | 1. unknown 2. unknown | bool | If both arguments are true |
| And3 | 1. unknown 2. unknown 3. unknown | bool | If all 3 arguments are true |
| And4 | 1. unknown 2. unknown 3. unknown 4. unknown | bool | If all 4 arguments are true |
| And5 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown | bool | If all 5 arguments are true |
| And6 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown | bool | If all 6 arguments are true |
| And7 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown 7. unknown | bool | If all 7 arguments are true |
| And8 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown 7. unknown 8. unknown | bool | If all 8 arguments are true |
| AndEvalAll | 1. unknown 2. unknown | bool | Evaluates all arguments and then checks if both arguments are true. Using 'And' is preferred. |
| ApplyMilitaryStanceToSubjects | 1. unknown | void |  |
| ApplySettingsAndIronman |  | void |  |
| AreBuildingsClosed | 1. unknown | bool |  |
| AreBuildingsSubsidized | 1. unknown | bool |  |
| AreGameRulesEnabled |  | bool |  |
| ArrParam | 1. unknown 2. unknown | CString |  |
| AssaultSiege | 1. unknown | void |  |
| AssumeControlSiege | 1. unknown | void |  |
| Audio\_PlayEvent | 1. unknown 2. unknown | void |  |
| AuxVars |  | unknown |  |
| BecomeSinglePlayer |  | void |  |
| BetweenInclusiveOfMax\_CFixedPoint | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMax\_float | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMax\_int32 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMax\_int64 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMax\_uint32 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMax\_uint64 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMin\_CFixedPoint | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMin\_float | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMin\_int32 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMin\_int64 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMin\_uint32 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusiveOfMin\_uint64 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusive\_CFixedPoint | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusive\_float | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusive\_int32 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusive\_int64 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusive\_uint32 | 1. unknown 2. unknown 3. unknown | bool |  |
| BetweenInclusive\_uint64 | 1. unknown 2. unknown 3. unknown | bool |  |
| Between\_CFixedPoint | 1. unknown 2. unknown 3. unknown | bool |  |
| Between\_float | 1. unknown 2. unknown 3. unknown | bool |  |
| Between\_int32 | 1. unknown 2. unknown 3. unknown | bool |  |
| Between\_int64 | 1. unknown 2. unknown 3. unknown | bool |  |
| Between\_uint32 | 1. unknown 2. unknown 3. unknown | bool |  |
| Between\_uint64 | 1. unknown 2. unknown 3. unknown | bool |  |
| BindFoldOutContext |  | void | Add a new PdxGuiFoldOut data context to a widget. |
| BoolTo1And2 | 1. unknown | int32 |  |
| BoolTo2And1 | 1. unknown | int32 |  |
| BribeMercenary | 1. unknown | void |  |
| BuildModeHasUnfilteredItem | 1. unknown | bool |  |
| BuildOrExpandBuildingDefault | 1. unknown 2. unknown | void |  |
| BuildingHasProductionMethodActive | 1. unknown 2. unknown 3. unknown | bool |  |
| CanAssaultSiege | 1. unknown | bool |  |
| CanAssumeControlSiege | 1. unknown | bool |  |
| CanBribeMercenary | 1. unknown | bool |  |
| CanBuildOrExpandBuilding | 1. unknown 2. unknown | bool |  |
| CanBuildOrExpandBuildingInfo | 1. unknown 2. unknown | CString |  |
| CanBuildRoads |  | bool |  |
| CanCancelConstruction | 1. unknown | bool |  |
| CanChangeChildEducation | 1. unknown | bool |  |
| CanChangeGameSpeed |  | bool |  |
| CanChangeMapMode |  | bool |  |
| CanChangeToProductionMethod | 1. unknown 2. unknown 3. unknown | bool |  |
| CanChangeToProductionMethodInfo | 1. unknown 2. unknown 3. unknown | CString |  |
| CanCloseBuilding | 1. unknown | bool |  |
| CanCreateMarketInLocation | 1. unknown | bool |  |
| CanCreateMarketInLocationTooltip | 1. unknown | CString |  |
| CanDecreaseDesiredMerchantCapacity | 1. unknown | bool |  |
| CanDelistMercenary | 1. unknown | bool |  |
| CanDestroyBuilding | 1. unknown | bool |  |
| CanDestroyMarketInLocation | 1. unknown | bool |  |
| CanDestroyMarketInLocationTooltip | 1. unknown | CString |  |
| CanDetachCategory | 1. unknown 2. unknown | bool |  |
| CanDetachLevies | 1. unknown | bool |  |
| CanDetachMercenaries | 1. unknown | bool |  |
| CanDetachRegulars | 1. unknown | bool |  |
| CanDismissMercenary | 1. unknown | bool |  |
| CanEditSettingsAfterHost |  | bool | Multiplayer - If you can edit settings after hosting (depends on MP platform) |
| CanExpandBuilding | 1. unknown | bool |  |
| CanExtendMercenary | 1. unknown | bool |  |
| CanGetAchievements |  | bool |  |
| CanGoodGetProduced | 1. unknown | bool |  |
| CanIncreaseDesiredMerchantCapacity | 1. unknown | bool |  |
| CanMoveUnitBox | 1. unknown 2. unknown | bool |  |
| CanOpenBuilding | 1. unknown | bool |  |
| CanPause |  | bool |  |
| CanPlayerDoGenericAction | 1. unknown | bool |  |
| CanPlayerRenameCountry | 1. unknown | bool |  |
| CanRaiseArmyLevies | 1. unknown | bool |  |
| CanRaiseNavyLevies | 1. unknown | bool |  |
| CanRaiseProvinceArmyLevies | 1. unknown | bool |  |
| CanRaiseProvinceNavyLevies | 1. unknown | bool |  |
| CanRemove | 1. unknown | bool |  |
| CanRetreatCombat | 1. unknown | bool |  |
| CanSelectInternationalOrganizationPolicyNextLaw | 1. unknown 2. unknown | bool |  |
| CanSelectInternationalOrganizationPolicyPrevLaw | 1. unknown 2. unknown | bool |  |
| CanSelectNextFocusMarket |  | bool |  |
| CanSelectNextMarket | 1. unknown | bool |  |
| CanSelectNextRelevantCountry | 1. unknown | bool |  |
| CanSelectNextRelevantLocation | 1. unknown | bool |  |
| CanSelectNextUnit | 1. unknown | bool |  |
| CanSelectPolicyNextLaw | 1. unknown | bool |  |
| CanSelectPolicyPrevLaw | 1. unknown | bool |  |
| CanSelectPrevFocusMarket |  | bool |  |
| CanSelectPrevMarket | 1. unknown | bool |  |
| CanSelectPrevRelevantCountry | 1. unknown | bool |  |
| CanSelectPrevRelevantLocation | 1. unknown | bool |  |
| CanSelectPrevUnit | 1. unknown | bool |  |
| CanShowConstructionCancellationDialog | 1. unknown | bool |  |
| CanShowConstructionType | 1. unknown | bool |  |
| CanShowPauseMenu |  | bool |  |
| CanSubsidizeBuilding | 1. unknown | bool |  |
| CanSubsidizeBuildings | 1. unknown | bool |  |
| CanTakeOverSiege | 1. unknown | bool |  |
| CanToggleAllowExtendMercenary | 1. unknown | bool |  |
| CanToggleBuilding | 1. unknown | bool |  |
| CanToggleBuildings | 1. unknown | bool |  |
| CanUnitViewerOpen |  | bool |  |
| CanUnpause |  | bool |  |
| CanUpgradeSubUnit | 1. unknown | bool |  |
| CanUpgradeSubUnitTooltip | 1. unknown | CString |  |
| CanUpgradeToBuilding | 1. unknown 2. unknown | bool |  |
| CanUpgradeToBuildingInfo | 1. unknown 2. unknown | CString |  |
| CanViewColonyScreen |  | bool |  |
| CancelAllMarketTrades | 1. unknown | void |  |
| CancelConstruction | 1. unknown | void |  |
| CancelJoinServer |  | void |  |
| CancelMilitaryObjectiveGlobally | 1. unknown | void |  |
| CancelTrade | 1. unknown | void |  |
| CancelUnitMilitaryObjective | 1. unknown | void |  |
| ChangeBuildingProductionMethod | 1. unknown 2. unknown 3. unknown | void |  |
| ChangeProductionMethod | 1. unknown 2. unknown | void |  |
| CharactersCanMarry | 1. unknown 2. unknown | bool |  |
| ClearHostError |  | void | Multiplayer - Clear host error |
| ClearLobbyTab |  | void |  |
| ClearMapModeSelectorVarsInSeconds | 1. unknown | void |  |
| ClearSelectedInstitution |  | void |  |
| CloseAllTooltips |  | void |  |
| CloseBuilding | 1. unknown | void |  |
| CloseSettingsWindow |  | void |  |
| ColorToVector3f | 1. unknown | CVector3f |  |
| ColorToVector3i | 1. unknown | CVector3i |  |
| ColorToVector4i | 1. unknown | CVector4i |  |
| CombatRetreat | 1. unknown | void |  |
| ConcatIfNeitherEmpty | 1. unknown 2. unknown | CString |  |
| ConcatParams | 1. unknown 2. unknown | CString |  |
| Concatenate | 1. unknown 2. unknown | CString |  |
| Concept | 1. unknown 2. unknown | CString |  |
| ContainsMultipleTypes | 1. unknown | bool |  |
| CopyServerID |  | void | Multiplayer - Copy Server ID of current session to clipboard |
| CountYes2 | 1. unknown 2. unknown | CString |  |
| CountYes3 | 1. unknown 2. unknown 3. unknown | CString |  |
| CountYes4 | 1. unknown 2. unknown 3. unknown 4. unknown | CString |  |
| CountYes5 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown | CString |  |
| CountYes6 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown | CString |  |
| CreateMarketInLocation | 1. unknown | void |  |
| CurrentAndMaxToProgressbarValueInt32 | 1. unknown 2. unknown | float | Get the progress (0.0-100.0) of CurrentArg to MaxArg. Value is clamped between 0 and 100. |
| Custom | 1. unknown | CString |  |
| DataModelFirst | 1. unknown 2. unknown | unknown |  |
| DataModelHasItems | 1. unknown | bool |  |
| DataModelLast | 1. unknown 2. unknown | unknown |  |
| DataModelRepeatedItem | 1. unknown | unknown | The data function used for mocking empty list items, requires int32 (number of items) as a parameter. Example: datamodel = [RepeatedItem( '(int32)4' )] |
| DataModelSkipFirst | 1. unknown 2. unknown | unknown |  |
| DataModelSkipLast | 1. unknown 2. unknown | unknown |  |
| DataModelSubSpan | 1. unknown 2. unknown 3. unknown | unknown |  |
| DeclinePassword |  | void |  |
| DecreaseAutomatedTradeCapacity | 1. unknown 2. unknown | void |  |
| DecreaseDesiredMerchantCapacity | 1. unknown | void |  |
| DelistMercenary | 1. unknown | void |  |
| DeselectUnit | 1. unknown | void |  |
| DestroyBuilding | 1. unknown | void |  |
| DestroyMarketInLocation | 1. unknown | void |  |
| DetachCategory | 1. unknown 2. unknown | void |  |
| DetachHalfCategory | 1. unknown 2. unknown | void |  |
| DetachLevies | 1. unknown | void |  |
| DetachMercenaries | 1. unknown | void |  |
| DetachRegulars | 1. unknown | void |  |
| DismissMercenary | 1. unknown | void |  |
| DisplayPopulationNumber | 1. unknown | CString |  |
| Divide\_CFixedPoint | 1. unknown 2. unknown | CFixedPoint |  |
| Divide\_CVector2f | 1. unknown 2. unknown | CVector2f |  |
| Divide\_float | 1. unknown 2. unknown | float |  |
| Divide\_int32 | 1. unknown 2. unknown | int32 |  |
| Divide\_int64 | 1. unknown 2. unknown | int64 |  |
| Divide\_uint32 | 1. unknown 2. unknown | uint32 |  |
| Divide\_uint64 | 1. unknown 2. unknown | uint64 |  |
| DoubleToFloat | 1. unknown | float |  |
| DowngradeLocationRank | 1. unknown | void |  |
| Embark | 1. unknown | void |  |
| EqualTo\_CFixedPoint | 1. unknown 2. unknown | bool |  |
| EqualTo\_CVector2f | 1. unknown 2. unknown | bool |  |
| EqualTo\_float | 1. unknown 2. unknown | bool |  |
| EqualTo\_int32 | 1. unknown 2. unknown | bool |  |
| EqualTo\_int64 | 1. unknown 2. unknown | bool |  |
| EqualTo\_string | 1. unknown 2. unknown | bool |  |
| EqualTo\_uint32 | 1. unknown 2. unknown | bool |  |
| EqualTo\_uint64 | 1. unknown 2. unknown | bool |  |
| ErrorTooltip |  | CString |  |
| EvaluateTrigger | 1. unknown 2. unknown | bool |  |
| ExecuteConsoleCommand | 1. unknown | void | Execute a single console command with a given command. |
| ExecuteConsoleCommands | 1. unknown | void | Execute a sequence of console commands split by ';'. And stops the sequence execution if a console command fails. |
| ExecuteConsoleCommandsForced | 1. unknown | void | Execute a sequence of console commands split by ';'. Keeps the sequence execution even if a console command fails. |
| ExpandBuilding | 1. unknown | void |  |
| ExpandBuildingCtrl | 1. unknown | void |  |
| ExpandBuildingDefault | 1. unknown | void |  |
| ExpandBuildingShift | 1. unknown | void |  |
| ExtendMercenary | 1. unknown | void |  |
| ExtendRegency | 1. unknown | void |  |
| FIRRecordedFramesCount |  | int32 |  |
| FixedPointToFloat | 1. unknown | float |  |
| FixedPointToFloatPercentageCapped | 1. unknown 2. unknown | float |  |
| FixedPointToInt | 1. unknown | int32 |  |
| FixedPointToProgressbarValue | 1. unknown | float | Convert to a progress percentage value (by multiplying with 100, unclamped). |
| GameCancelLoadingAndGoToFrontEnd |  | void |  |
| GameHasMultiplePlayers |  | bool |  |
| GameIsCloudStorageAvailable |  | bool |  |
| GameIsCloudStorageOperationInProgress |  | bool |  |
| GameIsConnectingMultiplayer |  | bool |  |
| GameIsIronman |  | bool |  |
| GameIsMultiplayer |  | bool |  |
| GateString | 1. unknown 2. unknown | CString |  |
| GetActiveInstitutions |  | unknown |  |
| GetActiveMapMode |  | unknown |  |
| GetActiveRebelsList |  | CString |  |
| GetAdvanceIcon | 1. unknown | unknown |  |
| GetAgeEndingDate | 1. unknown | CString |  |
| GetAgeIcon | 1. unknown | unknown |  |
| GetAlertOfTypeShowingCount | 1. unknown | uint32 |  |
| GetAllInternationalOrganizations |  | unknown |  |
| GetAllPossibleBuildingInfo | 1. unknown | CString |  |
| GetAllSubUnitCategories |  | unknown |  |
| GetArmySizeRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetArtistIcon | 1. unknown | unknown |  |
| GetAssumeControlSiegeTooltip | 1. unknown | CString |  |
| GetAudioEffect | 1. unknown | unknown |  |
| GetAutoModifier | 1. unknown | unknown |  |
| GetAutomatedSystemItem | 1. unknown | unknown |  |
| GetAutomatedSystemItem2 | 1. unknown 2. unknown | unknown |  |
| GetAutomatedSystemItem3 | 1. unknown 2. unknown 3. unknown | unknown |  |
| GetAutomatedSystemItem4 | 1. unknown 2. unknown 3. unknown 4. unknown | unknown |  |
| GetAutomatedSystemItem5 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown | unknown |  |
| GetAutomatedSystemItem6 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown | unknown |  |
| GetAutosaveName |  | CString |  |
| GetAvatarIcon | 1. unknown | unknown |  |
| GetBattleUnitIcon | 1. unknown | unknown |  |
| GetBoolean | 1. unknown | bool |  |
| GetBribeMercenaryTooltip | 1. unknown | CString |  |
| GetBuildOrExpandBuildingCost | 1. unknown 2. unknown | CFixedPoint |  |
| GetBuildOrExpandBuildingCostValue | 1. unknown 2. unknown | CString |  |
| GetBuildRevision |  | CString |  |
| GetBuildRevisionDescription |  | CString |  |
| GetBuildRevisionTime |  | CString |  |
| GetBuildingCategoryIcon | 1. unknown | unknown |  |
| GetBuildingIcon | 1. unknown | unknown |  |
| GetBuildingTypeProfitInLocation | 1. unknown 2. unknown | CFixedPoint |  |
| GetBuildingTypeProfitInLocationInfo | 1. unknown 2. unknown | CString |  |
| GetCabinetActionIcon | 1. unknown | unknown |  |
| GetCabinetActionTooltip | 1. unknown | CString |  |
| GetCanDecreaseGameSpeedString |  | CString |  |
| GetCanGoToFrontend |  | bool | Multiplayer GUI - Can we go back to the frontend? |
| GetCanGoToFrontendDesc |  | CString | Multiplayer GUI - Message if we can't go back to the frontend |
| GetCanIncreaseGameSpeedString |  | CString |  |
| GetCancelConstructionInfo | 1. unknown | CString |  |
| GetCardinalsTooltip | 1. unknown | CString |  |
| GetCasusBelliIcon | 1. unknown | unknown |  |
| GetChangeChildEducationInfo | 1. unknown | CString |  |
| GetCharacterInteractionIcon | 1. unknown | unknown |  |
| GetCharacterQuickActions | 1. unknown | unknown |  |
| GetClimateFrame | 1. unknown | unknown |  |
| GetClimateIcon | 1. unknown | unknown |  |
| GetCloseBuildingInfo | 1. unknown | CString |  |
| GetColorDLC | 1. unknown | CVector4f |  |
| GetCompleteVersionInfoString |  | CString |  |
| GetConceptTexture | 1. unknown | unknown |  |
| GetConstructionBuildingOwner | 1. unknown | CString |  |
| GetConstructionIcon | 1. unknown | unknown |  |
| GetCountries |  | unknown |  |
| GetCountryInteractionIcon | 1. unknown | unknown |  |
| GetCountryListWithFlags | 1. unknown 2. unknown | CString |  |
| GetCountryPopulation | 1. unknown | CFixedPoint |  |
| GetCountryPrimaryColor | 1. unknown | CVector4f |  |
| GetCountryRankIcon | 1. unknown | unknown |  |
| GetCountrySecondaryColor | 1. unknown | CVector4f |  |
| GetCountryTypeIcon | 1. unknown | unknown |  |
| GetCountryUnitPrimaryColor | 1. unknown 2. unknown | CVector4f |  |
| GetCountryUnitSecondaryColor | 1. unknown 2. unknown | CVector4f |  |
| GetCountryUnitTertiaryColor | 1. unknown 2. unknown | CVector4f |  |
| GetCulturesPenaltyInfo |  | CString |  |
| GetCuriaTooltip | 1. unknown | CString |  |
| GetCurrentAgeAdvancesList | 1. unknown | unknown |  |
| GetCurrentAgeAdvancesText | 1. unknown | CString |  |
| GetCurrentAgePercentage |  | float |  |
| GetCurrentGameSpeed |  | int32 |  |
| GetCurrentGameSpeedFrame |  | int32 |  |
| GetCurrentLoadingScreen |  | unknown |  |
| GetCurrentYear |  | CString |  |
| GetDataModelSize | 1. unknown | int32 |  |
| GetDateString |  | CString |  |
| GetDecreaseDesiredMerchantCapacityInfo | 1. unknown | CString |  |
| GetDefaultMapMode |  | unknown |  |
| GetDefaultServerName |  | CUTF8String |  |
| GetDefine | 1. unknown 2. unknown | unknown |  |
| GetDefineAtIndex | 1. unknown 2. unknown 3. unknown | unknown |  |
| GetDelistMercenaryTooltip | 1. unknown | CString |  |
| GetDestroyBuildingInfo | 1. unknown | CString |  |
| GetDestroyBuildingInfoOnlyWithCosts | 1. unknown | CString |  |
| GetDetachCategoryInfo | 1. unknown 2. unknown 3. unknown | CString |  |
| GetDetachCategoryInfoPossible | 1. unknown 2. unknown 3. unknown | CString |  |
| GetDetachLeviesInfo | 1. unknown | CString |  |
| GetDetachMercenariesInfo | 1. unknown | CString |  |
| GetDetachRegularsInfo | 1. unknown | CString |  |
| GetDiplomaticPendingWithCountryProgress | 1. unknown | float |  |
| GetDiplomaticPendingWithCountryText | 1. unknown | CString |  |
| GetDiplomaticPendingWithCountryTooltip | 1. unknown | CString |  |
| GetDisasterIllustration | 1. unknown | unknown |  |
| GetDiseaseIcon | 1. unknown | unknown |  |
| GetDiseases |  | unknown |  |
| GetDismissMercenaryTooltip | 1. unknown | CString |  |
| GetEducationIcon | 1. unknown | unknown |  |
| GetEmployedTypePercentage | 1. unknown 2. unknown | CFixedPoint |  |
| GetEnumIndex | 1. unknown | CVector2i | Settings - Get the dropdown index of an enum setting. |
| GetEstateFlatIcon | 1. unknown | unknown |  |
| GetEstateIcon | 1. unknown | unknown |  |
| GetEstateName | 1. unknown | CString |  |
| GetEstateNameWithNoTooltip | 1. unknown | CString |  |
| GetEstatePrivilegeIcon | 1. unknown | unknown |  |
| GetEstatePriviligesOverUILimit | 1. unknown | int32 |  |
| GetEstatePriviligesUILimit |  | int32 |  |
| GetEthnicities |  | unknown | Portrait System - Get all Ethnicities |
| GetEventMPTimeout |  | int32 |  |
| GetExpandBuildingInfo | 1. unknown | CString |  |
| GetExplorationPreparationTimeDays | 1. unknown 2. unknown 3. unknown | CString |  |
| GetExtendMercenaryTooltip | 1. unknown | CString |  |
| GetExtraBuildingClickInfo |  | CString |  |
| GetFixedPoint | 1. unknown | CFixedPoint |  |
| GetFortLimitBreakdown | 1. unknown | CString |  |
| GetFrontEndScene |  | unknown |  |
| GetGameDLCs |  | unknown |  |
| GetGameRuleIconTooltip | 1. unknown | CString |  |
| GetGameSpeedTooltip |  | CString |  |
| GetGameTimeDifferenceForDiffDays | 1. unknown | CString |  |
| GetGameTimeDurationDays | 1. unknown | CString |  |
| GetGameTimeDurationMonths | 1. unknown | CString |  |
| GetGameVersionDisplay |  | CString |  |
| GetGlobalList | 1. unknown | unknown |  |
| GetGlobalVariable | 1. unknown | unknown |  |
| GetGodIcon | 1. unknown | unknown |  |
| GetGoodPriceIcon | 1. unknown 2. unknown | unknown |  |
| GetGoodsIcon | 1. unknown | unknown |  |
| GetGoodsIllustration | 1. unknown | unknown |  |
| GetGovernmentReformIllustration | 1. unknown | unknown |  |
| GetGovernmentTypeIcon | 1. unknown | unknown |  |
| GetGraphicalCultureTexture | 1. unknown | unknown |  |
| GetGraphicalCultureTextureForCountry | 1. unknown 2. unknown | unknown |  |
| GetGraphicalCultureTextureForCountryPopType | 1. unknown 2. unknown | unknown |  |
| GetGraphicalCultureTextureForPop | 1. unknown | unknown |  |
| GetGraphicalCultureTextureForPopType | 1. unknown | unknown |  |
| GetGreatPowerIcon | 1. unknown | unknown |  |
| GetGuiPositionFromPercentCoordinates | 1. unknown 2. unknown 3. unknown | unknown |  |
| GetGuiWidgetIndexIgnoreInvisible | 1. unknown 2. unknown | int32 |  |
| GetHegemonyBorder | 1. unknown | unknown |  |
| GetHegemonyIcon | 1. unknown | unknown |  |
| GetHeirSelectionIcon | 1. unknown | unknown |  |
| GetHighlightAnim | 1. unknown | float |  |
| GetHighlightTint |  | CVector4f |  |
| GetHireMercenaryTooltip | 1. unknown | CString |  |
| GetHolySiteTypeIcon | 1. unknown | unknown |  |
| GetHostError |  | CUTF8String | Multiplayer - Get host error |
| GetIncomeRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetIncreaseDesiredMerchantCapacityInfo | 1. unknown | CString |  |
| GetInstitutionIcon | 1. unknown | unknown |  |
| GetInstitutionImage | 1. unknown | unknown |  |
| GetIntegrationLevelIcon | 1. unknown | unknown |  |
| GetIntegrationLevelIconPath | 1. unknown | CString |  |
| GetInternationalOrganizationViewName | 1. unknown | CString |  |
| GetInvParentScale | 1. unknown | float |  |
| GetInverseZoom |  | float |  |
| GetInverseZoom2 |  | CVector2f |  |
| GetIsChecked | 1. unknown | bool | Settings - If the bool setting is checked |
| GetLackingFromBuildingTypeString | 1. unknown 2. unknown | CString |  |
| GetLackingPopsFromBuildingType | 1. unknown 2. unknown | CString |  |
| GetLandCombatPowerTooltipUI | 1. unknown 2. unknown | CString |  |
| GetLandComparisonTooltipUI | 1. unknown 2. unknown | CString |  |
| GetLawBgCategoryColor | 1. unknown | unknown |  |
| GetLawCategoryIcon | 1. unknown | unknown |  |
| GetLawIcon | 1. unknown | unknown |  |
| GetLegitimacyIcon | 1. unknown | unknown |  |
| GetLevyPowerRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetLevyUnitIcon |  | unknown |  |
| GetListLandCombatPowerTooltipUI | 1. unknown 2. unknown 3. unknown | CString |  |
| GetListNavalCombatPowerTooltipUI | 1. unknown 2. unknown 3. unknown | CString |  |
| GetListOfAvailableBuildingsWithModifier | 1. unknown | CString |  |
| GetListOfGoodsUsingMethod | 1. unknown | CString |  |
| GetListOnlyLandCombatPowerTooltipUI | 1. unknown 2. unknown | CString |  |
| GetLoadingScreenConcept |  | CString |  |
| GetLoadingScreenConceptName |  | CString |  |
| GetLoadingScreenDeveloperText |  | CString |  |
| GetLoadingScreenLoadTip |  | CString |  |
| GetLoadingScreenProgress |  | float |  |
| GetLoadingScreenStatusText |  | CString |  |
| GetLocalizedDefine | 1. unknown 2. unknown | CString |  |
| GetLocalizedDefineAtIndex | 1. unknown 2. unknown 3. unknown | CString |  |
| GetLocationRankIcon | 1. unknown | unknown |  |
| GetLossCauseEnum | 1. unknown | unknown |  |
| GetMPChecksum |  | unknown |  |
| GetManpowerDisplay | 1. unknown | CString |  |
| GetMapColorLedger |  | unknown |  |
| GetMapColorLedgerByName | 1. unknown | unknown |  |
| GetMapMode | 1. unknown | unknown |  |
| GetMapModeGroupFromCategory | 1. unknown 2. unknown | unknown |  |
| GetMapModesFromCategory | 1. unknown | unknown |  |
| GetMarketRangeInfo | 1. unknown | CString |  |
| GetMaxAllowedReligiousFigures |  | CFixedPoint |  |
| GetMaxInDataTrend | 1. unknown | float |  |
| GetMaxManpowerRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetMaxSailorRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetMilitaryObjectiveIcon | 1. unknown | unknown |  |
| GetMilitaryStanceIcon | 1. unknown | unknown |  |
| GetMilitaryStances |  | unknown |  |
| GetMilitaryStrengthRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetMinInDataTrend | 1. unknown | float |  |
| GetMissionIllustration | 1. unknown | unknown |  |
| GetMissionTaskIcon | 1. unknown | unknown |  |
| GetModifier | 1. unknown | unknown |  |
| GetMonthlyMaintenanceInfoForCountry | 1. unknown 2. unknown 3. unknown | CString |  |
| GetMoveUnitBoxInfo | 1. unknown 2. unknown | CString |  |
| GetMultiplayerAccessibleString |  | CString |  |
| GetMultiplayerSyncInfo |  | CString |  |
| GetNavalCombatPowerTooltipUI | 1. unknown 2. unknown | CString |  |
| GetNavalComparisonTooltipUI | 1. unknown 2. unknown | CString |  |
| GetNavyLevyPowerRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetNavySizeRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetNavyStrengthRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetNeedInformation | 1. unknown 2. unknown | CString |  |
| GetNoLawsInfo |  | CString |  |
| GetNoRoadsInfo |  | CString |  |
| GetNonUniqueInternationalOrganizationTypes |  | unknown |  |
| GetNullStringPtr |  | unknown |  |
| GetNumberAbove\_int32 | 1. unknown 2. unknown | int32 |  |
| GetOpenBuildingInfo | 1. unknown | CString |  |
| GetOurOpinionPlayer | 1. unknown | CFixedPoint |  |
| GetOurOpinionPlayerTooltip | 1. unknown | CString |  |
| GetOutCompetedInfo | 1. unknown | CString |  |
| GetParliamentTypeIcon | 1. unknown | unknown |  |
| GetPauseTooltip |  | CString |  |
| GetPeaceOfferIcon | 1. unknown | unknown |  |
| GetPinnedMapModes | 1. unknown | unknown |  |
| GetPlayStyleItem | 1. unknown | unknown |  |
| GetPlayer |  | unknown |  |
| GetPlayerAITooltip | 1. unknown | CString |  |
| GetPlayerName | 1. unknown | CString |  |
| GetPlayerNameForStartAnim |  | CString |  |
| GetPlayerTargettedActionParams |  | TargettedActionParameters |  |
| GetPlayersCount |  | int32 | Multiplayer - No of players of current session |
| GetPolicyIcon | 1. unknown | unknown |  |
| GetPopIcon | 1. unknown | unknown |  |
| GetPopTypeByName | 1. unknown | unknown |  |
| GetPopTypeImpactInfo | 1. unknown | CString |  |
| GetPopTypes |  | unknown |  |
| GetPopulationFromBuilding | 1. unknown | CString |  |
| GetPopulationFromBuildingType | 1. unknown 2. unknown | CString |  |
| GetPopulationRatio | 1. unknown 2. unknown | CFixedPoint |  |
| GetPortraitTextureFromDna | 1. unknown 2. unknown | unknown |  |
| GetPossibleBuildingInfo | 1. unknown 2. unknown | CString |  |
| GetPossibleProductionMethodIndex | 1. unknown 2. unknown | int32 |  |
| GetPossibleRGOUpgradeInfo | 1. unknown 2. unknown | CString |  |
| GetPrimaryCultureSizePercentage | 1. unknown | CFixedPoint |  |
| GetProductionMethodIcon | 1. unknown | unknown |  |
| GetProductionMethods |  | unknown |  |
| GetQuickMissionList |  | unknown |  |
| GetRandomLogInfo |  | CString |  |
| GetRankComparisonForCountryInfo | 1. unknown | CString |  |
| GetRawTextTooltipTag | 1. unknown | CString |  |
| GetRebelIllustration | 1. unknown | unknown |  |
| GetRebelsIcon | 1. unknown | unknown |  |
| GetRecruitMethodIcon | 1. unknown | unknown |  |
| GetReformsUILimit |  | int32 |  |
| GetRelationOverUILimit | 1. unknown | int32 |  |
| GetRelationTypeIcon | 1. unknown | unknown |  |
| GetRelationsUILimit |  | int32 |  |
| GetRelativePowerDescriptionTooltip | 1. unknown 2. unknown | CString |  |
| GetRelativePowerPlayerDescription | 1. unknown | CString |  |
| GetReligionIcon | 1. unknown | unknown |  |
| GetReligions |  | unknown |  |
| GetReligiousAspectIcon | 1. unknown | unknown |  |
| GetReligiousFactionIcon | 1. unknown | unknown |  |
| GetReligiousFocusIcon | 1. unknown | unknown |  |
| GetReligiousOrganizationIcon | 1. unknown | unknown |  |
| GetResolutionX |  | float |  |
| GetResolutionY |  | float |  |
| GetResumeLabel |  | CString |  |
| GetResumeTooltip |  | CString |  |
| GetRetreatCombatTooltip | 1. unknown | CString |  |
| GetRoadCostCalculationIcon | 1. unknown | unknown |  |
| GetRoadCostTo | 1. unknown 2. unknown | CString |  |
| GetRoadCostToTooltip | 1. unknown 2. unknown | CFixedPoint |  |
| GetRoadDistanceTo | 1. unknown 2. unknown | int32 |  |
| GetRoadTypeIcon | 1. unknown | unknown |  |
| GetRuleToolTip | 1. unknown | CString |  |
| GetRulerTraitProgress |  | float |  |
| GetRulerTraitProgressInfo |  | CString |  |
| GetScreenCenterX |  | float |  |
| GetScreenCenterY |  | float |  |
| GetScriptedRelationType | 1. unknown | unknown |  |
| GetSelectedCountryOrByLocation |  | unknown |  |
| GetSelectedDiplomaticInformation | 1. unknown | CString |  |
| GetServer |  | CString |  |
| GetShortVersionInfoString |  | CString |  |
| GetSiegeAssaultTooltip | 1. unknown | CString |  |
| GetSituationIllustration | 1. unknown | unknown |  |
| GetSocietalValues |  | unknown |  |
| GetSpecialStatusIcon | 1. unknown | unknown |  |
| GetSpecialStatusIconFromKey | 1. unknown | unknown |  |
| GetStringSettingText | 1. unknown | CString | Settings - Get the string setting text |
| GetString\_CPdxFloatRect | 1. unknown | CString |  |
| GetString\_CPdxIntRect | 1. unknown | CString |  |
| GetString\_CVector2f | 1. unknown | CString |  |
| GetString\_CVector2i | 1. unknown | CString |  |
| GetString\_CVector3f | 1. unknown | CString |  |
| GetString\_CVector3i | 1. unknown | CString |  |
| GetString\_CVector4f | 1. unknown | CString |  |
| GetString\_CVector4i | 1. unknown | CString |  |
| GetSubCategory | 1. unknown | unknown |  |
| GetSubCategoryByIndex | 1. unknown | unknown |  |
| GetSubCategoryIndex | 1. unknown | int32 |  |
| GetSubDefinition | 1. unknown | unknown |  |
| GetSubDefinitionByIndex | 1. unknown | unknown |  |
| GetSubDefinitionIndex | 1. unknown | int32 |  |
| GetSubUnitCategoryFlatIcon | 1. unknown | unknown |  |
| GetSubUnitCategoryIcon | 1. unknown | unknown |  |
| GetSubUnitDefinitionIcon | 1. unknown | unknown |  |
| GetSubUnitDragDrop | 1. unknown | CString |  |
| GetSubjectTypeIcon | 1. unknown | unknown |  |
| GetSubsidizeBuildingInfo | 1. unknown | CString |  |
| GetSubsidizeBuildingsInfo | 1. unknown | CString |  |
| GetSubunitIllustration | 1. unknown | unknown |  |
| GetSubunitIllustrationMask | 1. unknown | unknown |  |
| GetSubunitTypeIllustration | 1. unknown 2. unknown | unknown |  |
| GetSubunitTypeIllustrationMask | 1. unknown 2. unknown | unknown |  |
| GetTakeOverSiegeTooltip | 1. unknown | CString |  |
| GetTextFromSelfOrAnyChildEditbox | 1. unknown | CString |  |
| GetTheirOpinionPlayer | 1. unknown | CFixedPoint |  |
| GetTheirOpinionPlayerTooltip | 1. unknown | CString |  |
| GetToggleBuildingInfo | 1. unknown | CString |  |
| GetToggleBuildingsInfo | 1. unknown | CString |  |
| GetToggleSuffix | 1. unknown | CString |  |
| GetTopographyIcon | 1. unknown | unknown |  |
| GetTopographyIconBig | 1. unknown | unknown |  |
| GetTotalArmyLevySize | 1. unknown | CString |  |
| GetTotalArmyLevySizeTooltip | 1. unknown | CString |  |
| GetTotalNavyLevySize | 1. unknown | CString |  |
| GetTotalNavyLevySizeTooltip | 1. unknown | CString |  |
| GetTotalProvinceArmyLevySize | 1. unknown | CString |  |
| GetTotalProvinceArmyLevySizeTooltip | 1. unknown | CString |  |
| GetTotalProvinceNavyLevySize | 1. unknown | CString |  |
| GetTotalProvinceNavyLevySizeTooltip | 1. unknown | CString |  |
| GetTraitBackground | 1. unknown | unknown |  |
| GetTraitIcon | 1. unknown | unknown |  |
| GetTraitTypeList | 1. unknown | unknown |  |
| GetUnEmployedFromBuildingType | 1. unknown 2. unknown | CString |  |
| GetUnEmployedPeasantsFromLocation | 1. unknown | CString |  |
| GetUnEmployedPeasantsFromLocationValue | 1. unknown | CFixedPoint |  |
| GetUniqueInternationalOrganizations |  | unknown |  |
| GetUnitAbilityIcon | 1. unknown | unknown |  |
| GetUnitIcon | 1. unknown | unknown |  |
| GetVarTimeRemaining | 1. unknown 2. unknown | int32 |  |
| GetVegetationIcon | 1. unknown | unknown |  |
| GetVegetationIconBig | 1. unknown | unknown |  |
| GetWarGoalIcon | 1. unknown | unknown |  |
| GetWeatherSystemsInLocation | 1. unknown | unknown |  |
| GetWillJoinCountryList | 1. unknown 2. unknown | unknown |  |
| GetWinterIcon | 1. unknown | unknown |  |
| GetWorkOfArtIcon | 1. unknown | unknown |  |
| GetWorkOfArtIllustration | 1. unknown | unknown |  |
| GetWorkOfArtQualityIcon | 1. unknown | unknown |  |
| GetZoom |  | float |  |
| GetZoom2 |  | CVector2f |  |
| GetZoomStep |  | int32 |  |
| GfxGetSkins |  | unknown | Get all skins |
| GfxSetActiveSkin | 1. unknown | void | Set the active GFX skin |
| GfxSkinIsActive | 1. unknown | bool | Test if skin is active |
| GoToCapital |  | void |  |
| GoToFrontend |  | void | Multiplayer GUI - Go back to the frontend |
| GreaterThanOrEqualTo\_CFixedPoint | 1. unknown 2. unknown | bool |  |
| GreaterThanOrEqualTo\_float | 1. unknown 2. unknown | bool |  |
| GreaterThanOrEqualTo\_int32 | 1. unknown 2. unknown | bool |  |
| GreaterThanOrEqualTo\_int64 | 1. unknown 2. unknown | bool |  |
| GreaterThanOrEqualTo\_uint32 | 1. unknown 2. unknown | bool |  |
| GreaterThanOrEqualTo\_uint64 | 1. unknown 2. unknown | bool |  |
| GreaterThan\_CFixedPoint | 1. unknown 2. unknown | bool |  |
| GreaterThan\_float | 1. unknown 2. unknown | bool |  |
| GreaterThan\_int32 | 1. unknown 2. unknown | bool |  |
| GreaterThan\_int64 | 1. unknown 2. unknown | bool |  |
| GreaterThan\_uint32 | 1. unknown 2. unknown | bool |  |
| GreaterThan\_uint64 | 1. unknown 2. unknown | bool |  |
| HasActiveDLC | 1. unknown | bool |  |
| HasActiveMod | 1. unknown | bool |  |
| HasAnyUnitsSelected |  | bool |  |
| HasBattleFiredAtHover | 1. unknown | bool |  |
| HasCountryFlagCoatOfArms | 1. unknown | bool |  |
| HasDiplomaticPendingWithCountry | 1. unknown | bool |  |
| HasDlc | 1. unknown | bool |  |
| HasErrors |  | bool |  |
| HasGameRuleFlag | 1. unknown | bool |  |
| HasGameStartedForTheFirstTime |  | bool |  |
| HasHostError |  | bool | Multiplayer - Does the host have an error |
| HasLackingPopsFromBuildingType | 1. unknown 2. unknown | bool |  |
| HasLanguage | 1. unknown | bool |  |
| HasLowFps |  | bool |  |
| HasMapColorLedger |  | bool |  |
| HasModsView |  | bool |  |
| HasPopTypeImpact | 1. unknown | bool |  |
| HasPossibleBuilding | 1. unknown 2. unknown | bool |  |
| HasPossibleRGOUpgrade | 1. unknown 2. unknown | bool |  |
| HasProductionMethodMissingGoods | 1. unknown 2. unknown | bool |  |
| HasRulerAllTraitsProgress |  | bool |  |
| HasWar | 1. unknown 2. unknown | bool |  |
| HideGameRules |  | void |  |
| HideModsView |  | void |  |
| ImageLookupNodeIsLoading |  | bool |  |
| ImageLookupNodeRefresh |  | void |  |
| ImagePathLookupNodeWindowRefresh |  | void |  |
| InDebugMode |  | bool | Is the game in Debug mode? |
| InReleaseMode |  | bool | Is the game in Release mode? |
| IncreaseAutomatedTradeCapacity | 1. unknown 2. unknown | void |  |
| IncreaseDesiredMerchantCapacity | 1. unknown | void |  |
| IntToFixedPoint | 1. unknown | float |  |
| IntToFloat | 1. unknown | float |  |
| IntToFrameIndex | 1. unknown | int32 | Adds 1 to "unknown". |
| IntToRomanNumeral | 1. unknown | CString |  |
| IntToUnsigned | 1. unknown | float |  |
| IsAIDebug |  | bool |  |
| IsActionConfirmAndHoldMode |  | bool |  |
| IsActionDialogMode |  | bool |  |
| IsAnyAlertOfTypeShowing | 1. unknown | bool |  |
| IsAtWarWithSiegeDefender | 1. unknown | bool |  |
| IsAutoSaving |  | bool |  |
| IsBuildDebug |  | bool |  |
| IsBuildingMissingInputGoods | 1. unknown 2. unknown | bool |  |
| IsBuildingUsingGoods | 1. unknown 2. unknown | bool |  |
| IsCabinetActionAllowed | 1. unknown | bool |  |
| IsCameraRestrictionsEnabled |  | bool | Map Editor - If camera restrictions are on |
| IsCharacterFaved | 1. unknown | bool |  |
| IsCountryFaved | 1. unknown | bool |  |
| IsCountryInDataModel | 1. unknown 2. unknown | bool |  |
| IsCurrentAge | 1. unknown | bool |  |
| IsCurrentIOLeader | 1. unknown | bool |  |
| IsDarkColor | 1. unknown | bool |  |
| IsDataModelEmpty | 1. unknown | bool |  |
| IsDefaultMapModeSet |  | bool |  |
| IsEven\_int32 | 1. unknown | bool |  |
| IsEven\_int64 | 1. unknown | bool |  |
| IsEven\_uint32 | 1. unknown | bool |  |
| IsEven\_uint64 | 1. unknown | bool |  |
| IsFaved | 1. unknown 2. unknown | bool |  |
| IsFocusMarketSelected |  | bool |  |
| IsFocusMarketValid |  | bool |  |
| IsFutureAge | 1. unknown | bool |  |
| IsFutureAgeFromName | 1. unknown | bool |  |
| IsGamePaused |  | bool |  |
| IsGamePausedByGame |  | bool |  |
| IsGamePausedByOtherPlayer |  | bool |  |
| IsGamePausedByPlayer |  | bool |  |
| IsGamePreloading |  | bool |  |
| IsGamePreloadingComplete |  | bool |  |
| IsGameSpeedEqualOrGreaterThan | 1. unknown | bool |  |
| IsGameViewOpen | 1. unknown | bool |  |
| IsGoodsFaved | 1. unknown | bool |  |
| IsHintPriority | 1. unknown | bool |  |
| IsHost |  | bool |  |
| IsIOFaved | 1. unknown | bool |  |
| IsInDiplomaticRange | 1. unknown | bool |  |
| IsInGame |  | bool |  |
| IsInSameWarAsSiegeOwner | 1. unknown | bool |  |
| IsInternationalOrganizationTypeViewOpen |  | bool |  |
| IsInternationalOrganizationTypeViewOpenForNamedInternationalOrganizationType | 1. unknown | bool |  |
| IsInternationalOrganizationViewOpen | 1. unknown | bool |  |
| IsInternationalOrganizationViewOpenForNamedInternationalOrganization | 1. unknown | bool |  |
| IsJoinServerByIdWithTextWidgetEmpty | 1. unknown | bool |  |
| IsLateralGroupHighlighted | 1. unknown | bool |  |
| IsLateralGroupOpened | 1. unknown | bool |  |
| IsLateralViewFullScreen |  | bool |  |
| IsLateralViewMenuFullScreen |  | bool |  |
| IsLateralViewOpened | 1. unknown | bool |  |
| IsLateralViewOpenedWithParams | 1. unknown 2. unknown | bool |  |
| IsLawsEnabled |  | bool |  |
| IsLiveBuild |  | bool |  |
| IsLobbyOpen |  | bool |  |
| IsLocalPlayer | 1. unknown | bool |  |
| IsLocalPlayerReplayingCommands |  | bool |  |
| IsLocationFaved | 1. unknown | bool |  |
| IsMapInit |  | bool |  |
| IsMarketAutomated | 1. unknown | bool |  |
| IsMarketFaved | 1. unknown | bool |  |
| IsMarketInRange | 1. unknown | bool |  |
| IsMessageLogShown |  | bool |  |
| IsMissionsEnabled |  | bool |  |
| IsMultiplayerAvailable |  | bool |  |
| IsMultiplayerChatShown |  | bool |  |
| IsObserving |  | bool |  |
| IsObservingWithoutSelectedCountry |  | bool |  |
| IsOdd\_int32 | 1. unknown | bool |  |
| IsOdd\_int64 | 1. unknown | bool |  |
| IsOdd\_uint32 | 1. unknown | bool |  |
| IsOdd\_uint64 | 1. unknown | bool |  |
| IsOutCompeted | 1. unknown | bool |  |
| IsOutlinerCategoryShown | 1. unknown | bool |  |
| IsOutlinerShown |  | bool |  |
| IsOwnHiredMercenary | 1. unknown | bool |  |
| IsOwnMercenary | 1. unknown | bool |  |
| IsPasswordEmpty |  | bool |  |
| IsPauseMenuShown |  | bool |  |
| IsPlayStyleEnabled | 1. unknown | bool |  |
| IsPlayer |  | bool |  |
| IsPlayerAIEnabled | 1. unknown | bool |  |
| IsPlayerAtWarWithOtherPlayer | 1. unknown | bool |  |
| IsPlayerCountry | 1. unknown | bool |  |
| IsPlayerEnemy | 1. unknown | bool |  |
| IsPlayerHotjoining |  | bool |  |
| IsPlayerObserver |  | bool |  |
| IsPlayerRival | 1. unknown | bool |  |
| IsPlayerSubject |  | bool |  |
| IsPlayerTooltip |  | CString |  |
| IsPlayerValid |  | bool |  |
| IsPlaythroughSkipped |  | bool |  |
| IsPreparationLobby |  | bool |  |
| IsRecalculatingCacheData |  | bool |  |
| IsRevolutionaryTargetActive |  | bool |  |
| IsSaveGame |  | bool |  |
| IsSaving |  | bool |  |
| IsScreenGrabWorking |  | bool |  |
| IsSeazoneFaved | 1. unknown | bool |  |
| IsSelfOrAnyChildAnEmptyEditbox | 1. unknown | bool |  |
| IsShowingDialog |  | bool |  |
| IsSpecificInternationalOrganizationTypeViewOpen | 1. unknown | bool |  |
| IsSystemAutomatedByPlayStyle | 1. unknown | bool |  |
| IsUnitSelected | 1. unknown | bool |  |
| IsWelcomeNewGameSkipped |  | bool |  |
| IsWritingDumps |  | bool |  |
| JoinJominiServer | 1. unknown | void |  |
| JoinServerByIdWithTextWidget | 1. unknown 2. unknown 3. unknown | void |  |
| JoinText | 1. unknown 2. unknown 3. unknown | CString |  |
| JominiAccessPlayerJoinRequests |  | unknown |  |
| JominiAreAchievementsAvailable |  | bool | Jomini Achievements - Are achievements available? |
| JominiGetAchievementsNotAvailableString |  | CString | Jomini Achievements - Get text why achievements are not available |
| JominiGetMultiplayerAccessibleString |  | CString |  |
| JominiHasPlayerJoinRequests |  | bool |  |
| JominiIsHostOrLocal |  | bool |  |
| JominiIsMultiplayerAccessible |  | bool |  |
| JominiMultiplayerIsCrossplayEnabled |  | bool |  |
| JominiMultiplayerIsCrossplayFilterAvailable |  | bool |  |
| JominiPlayer |  | unknown | Jomini Script Systen - Get generic current playable object |
| KickPlayerOOS |  | void |  |
| LastSelectInteractionTargetGlueWasTarget |  | bool |  |
| LessThanOrEqualTo\_CFixedPoint | 1. unknown 2. unknown | bool |  |
| LessThanOrEqualTo\_float | 1. unknown 2. unknown | bool |  |
| LessThanOrEqualTo\_int32 | 1. unknown 2. unknown | bool |  |
| LessThanOrEqualTo\_int64 | 1. unknown 2. unknown | bool |  |
| LessThanOrEqualTo\_uint32 | 1. unknown 2. unknown | bool |  |
| LessThanOrEqualTo\_uint64 | 1. unknown 2. unknown | bool |  |
| LessThan\_CFixedPoint | 1. unknown 2. unknown | bool |  |
| LessThan\_float | 1. unknown 2. unknown | bool |  |
| LessThan\_int32 | 1. unknown 2. unknown | bool |  |
| LessThan\_int64 | 1. unknown 2. unknown | bool |  |
| LessThan\_uint32 | 1. unknown 2. unknown | bool |  |
| LessThan\_uint64 | 1. unknown 2. unknown | bool |  |
| Link | 1. unknown 2. unknown 3. unknown | CString |  |
| LinkParam | 1. unknown 2. unknown | CString |  |
| LinkRaw | 1. unknown 2. unknown 3. unknown | CString |  |
| Localize | 1. unknown | CString |  |
| LocalizeInputAction | 1. unknown | CString |  |
| LocationWithInRange\_Format | 1. unknown 2. unknown | CString |  |
| MPChatNewMessage |  | bool |  |
| MakeItFail | 1. unknown | CString |  |
| MakeItFailIf | 1. unknown 2. unknown | CString |  |
| MakeItFailIfLoc | 1. unknown 2. unknown | CString |  |
| MakeItFailLoc | 1. unknown | CString |  |
| MakeScopeBool | 1. unknown | Scope |  |
| MakeScopeFlag | 1. unknown | Scope |  |
| MakeScopeValue | 1. unknown | Scope |  |
| MakeShortcutIcon | 1. unknown | CString |  |
| MakeShortcutIcons | 1. unknown 2. unknown | CString |  |
| MapMarkerFlagsVisible |  | bool |  |
| Max\_CFixedPoint | 1. unknown 2. unknown | CFixedPoint |  |
| Max\_CVector2f | 1. unknown 2. unknown | CVector2f |  |
| Max\_float | 1. unknown 2. unknown | float |  |
| Max\_int32 | 1. unknown 2. unknown | int32 |  |
| Max\_int64 | 1. unknown 2. unknown | int64 |  |
| Max\_uint32 | 1. unknown 2. unknown | uint32 |  |
| Max\_uint64 | 1. unknown 2. unknown | uint64 |  |
| Min\_CFixedPoint | 1. unknown 2. unknown | CFixedPoint |  |
| Min\_CVector2f | 1. unknown 2. unknown | CVector2f |  |
| Min\_float | 1. unknown 2. unknown | float |  |
| Min\_int32 | 1. unknown 2. unknown | int32 |  |
| Min\_int64 | 1. unknown 2. unknown | int64 |  |
| Min\_uint32 | 1. unknown 2. unknown | uint32 |  |
| Min\_uint64 | 1. unknown 2. unknown | uint64 |  |
| Modulo\_int32 | 1. unknown 2. unknown | int32 |  |
| Modulo\_int64 | 1. unknown 2. unknown | int64 |  |
| Modulo\_uint32 | 1. unknown 2. unknown | uint32 |  |
| Modulo\_uint64 | 1. unknown 2. unknown | uint64 |  |
| MoveUnitBox | 1. unknown 2. unknown | void |  |
| Multiply\_CFixedPoint | 1. unknown 2. unknown | CFixedPoint |  |
| Multiply\_CVector2f | 1. unknown 2. unknown | CVector2f |  |
| Multiply\_float | 1. unknown 2. unknown | float |  |
| Multiply\_int32 | 1. unknown 2. unknown | int32 |  |
| Multiply\_int64 | 1. unknown 2. unknown | int64 |  |
| Multiply\_uint32 | 1. unknown 2. unknown | uint32 |  |
| Multiply\_uint64 | 1. unknown 2. unknown | uint64 |  |
| NOP |  | void | No Operation (dummy callback function) |
| Nbsp |  | CString |  |
| Negate\_CFixedPoint | 1. unknown | CFixedPoint |  |
| Negate\_float | 1. unknown | float |  |
| Negate\_int32 | 1. unknown | int32 |  |
| Negate\_int64 | 1. unknown | int64 |  |
| Not | 1. unknown | bool | If the argument is not true |
| NotEqualTo\_CFixedPoint | 1. unknown 2. unknown | bool |  |
| NotEqualTo\_CVector2f | 1. unknown 2. unknown | bool |  |
| NotEqualTo\_float | 1. unknown 2. unknown | bool |  |
| NotEqualTo\_int32 | 1. unknown 2. unknown | bool |  |
| NotEqualTo\_int64 | 1. unknown 2. unknown | bool |  |
| NotEqualTo\_uint32 | 1. unknown 2. unknown | bool |  |
| NotEqualTo\_uint64 | 1. unknown 2. unknown | bool |  |
| NumberOfErrors |  | int32 |  |
| ObjectsEqual | 1. unknown 2. unknown | bool |  |
| OnChangedAutomatedTradeCapacity | 1. unknown | void |  |
| OnCreateAccount |  | void | Start the account creation flow |
| OnDecreaseGameSpeed |  | void |  |
| OnExpandOutlinerSettings | 1. unknown | void |  |
| OnFindLocation |  | void |  |
| OnIncreaseGameSpeed |  | void |  |
| OnPause |  | void |  |
| OnPauseMenu |  | void |  |
| OnSetGameSpeed | 1. unknown | void |  |
| OnToggleMusicPlayer |  | void |  |
| OnToggleOutliner |  | void |  |
| OnToggleOutlinerCategory | 1. unknown | void |  |
| OnlyContainsLevies | 1. unknown | bool |  |
| OnlyContainsLeviesTT | 1. unknown | CString |  |
| OnlyContainsMercenaries | 1. unknown | bool |  |
| OnlyContainsMercenariesTT | 1. unknown | CString |  |
| OnlyContainsRegulars | 1. unknown | bool |  |
| OnlyContainsRegularsTT | 1. unknown | CString |  |
| OnlyOnePossibleFocusMarket |  | bool |  |
| OpenAutomationLateralViewAndReveal | 1. unknown | void |  |
| OpenBuilding | 1. unknown | void |  |
| OpenBuildingView | 1. unknown | void |  |
| OpenDiploAction | 1. unknown | void |  |
| OpenDiplomacy | 1. unknown | void |  |
| OpenDiplomacyAndPan | 1. unknown | void |  |
| OpenEconomyView |  | void |  |
| OpenEnforceWarGoal |  | void |  |
| OpenErrorLog |  | void |  |
| OpenFileDirectory | 1. unknown | void |  |
| OpenGameRules |  | void |  |
| OpenGameView | 1. unknown | void |  |
| OpenInternationalOrganizationView | 1. unknown | void |  |
| OpenLateralGroup | 1. unknown | void |  |
| OpenLateralView | 1. unknown | void |  |
| OpenLateralViewWithArrayFilter | 1. unknown 2. unknown | void |  |
| OpenLateralViewWithArrayFilterAndParams | 1. unknown 2. unknown 3. unknown | void |  |
| OpenLateralViewWithFilter | 1. unknown 2. unknown | void |  |
| OpenLateralViewWithParams | 1. unknown 2. unknown | void |  |
| OpenMessageDialog | 1. unknown | void |  |
| OpenMessageSettings |  | void |  |
| OpenModsView |  | void |  |
| OpenRenameCountryDialog | 1. unknown | void |  |
| OpenSelectedAgeAndAdvanceTechnology | 1. unknown 2. unknown | void |  |
| OpenSelectedAgeTechnology | 1. unknown | void |  |
| OpenSpecificInternationalOrganizationTypeView | 1. unknown | void |  |
| Or | 1. unknown 2. unknown | bool | If either argument is true |
| Or3 | 1. unknown 2. unknown 3. unknown | bool | If any of 3 arguments are true |
| Or4 | 1. unknown 2. unknown 3. unknown 4. unknown | bool | If any of 4 arguments are true |
| Or5 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown | bool | If any of 5 arguments are true |
| Or6 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown | bool | If any of 6 arguments are true |
| Or7 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown 7. unknown | bool | If any of 7 arguments are true |
| Or8 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown 7. unknown 8. unknown | bool | If any of 8 arguments are true |
| OrEvalAll | 1. unknown 2. unknown | bool | Evaluates all arguments and then checks if either argument is true. Using 'Or' is preferred. |
| PanToCharacter | 1. unknown | void |  |
| PanToCountry | 1. unknown | void |  |
| PanToLocation | 1. unknown | void |  |
| PanToProvince | 1. unknown | void |  |
| PanToProvinceDefinition | 1. unknown | void |  |
| PdxClearEditBoxText | 1. unknown | void |  |
| PdxGetProfilerNames |  | unknown |  |
| PdxGetWidgetScreenSize | 1. unknown | CVector2f |  |
| PdxGuiDestroyWidget | 1. unknown | void | Destroy widget |
| PdxGuiEditboxGetText | 1. unknown | CUTF8String |  |
| PdxGuiInterruptAllAnimations | 1. unknown | void |  |
| PdxGuiInterruptThenTriggerAllAnimations | 1. unknown 2. unknown | void |  |
| PdxGuiTriggerAllAnimations | 1. unknown | void |  |
| PdxProfilerFilterNext |  | void |  |
| PdxProfilerFilterPrev |  | void |  |
| PdxProfilerFilterTimers |  | void |  |
| PdxProfilerGetCurrentFrame |  | int32 |  |
| PdxProfilerGetFrameTimeMs |  | float |  |
| PdxProfilerGetNsPerTick |  | float |  |
| PdxProfilerGuiGraphLinesEnabled |  | bool |  |
| PdxProfilerGuiToggleGraphLines |  | void |  |
| PdxProfilerGuiToggleStats |  | void |  |
| PdxProfilerGuiTrackCurrentFrame |  | void |  |
| PdxProfilerGuiWriteFrameCSV |  | void |  |
| PdxProfilerIsRecording |  | bool |  |
| PdxProfilerSelectThread |  | void |  |
| PdxProfilerSetFrame |  | void |  |
| PdxProfilerToggleRecording |  | void |  |
| PerformGenericAction | 1. unknown | void |  |
| PerformGenericAction1Param | 1. unknown 2. unknown | void |  |
| PlayAudioEffect | 1. unknown | void |  |
| PlayerCanRepayAnyLoan |  | bool |  |
| PlayerIsHost |  | bool | Multiplayer GUI - Is the current player the host? |
| RaiseArmyLevies | 1. unknown | void |  |
| RaiseNavyLevies | 1. unknown | void |  |
| RaiseProvinceArmyLevies | 1. unknown | void |  |
| RaiseProvinceNavyLevies | 1. unknown | void |  |
| RecruitModeHasRecruitItem | 1. unknown | bool |  |
| RefreshModsView |  | void |  |
| RemoveDirectoryPath | 1. unknown | CString |  |
| RemoveUIFocusMarket |  | void |  |
| ResetHighlightAndMapModeOverrides |  | void |  |
| ResetHighlightedTab |  | void |  |
| ScrollbarToProgressbarValue | 1. unknown 2. unknown 3. unknown | float |  |
| SelectAllPlayerUnits | 1. unknown | void |  |
| SelectCapital |  | void |  |
| SelectCountryDiplomacy\_HasDiplomaticActionItem | 1. unknown | bool |  |
| SelectDefaultFocusMarket |  | void |  |
| SelectEnumWithString | 1. unknown 2. unknown | void | Settings - Select enum by string input |
| SelectGameConcept | 1. unknown 2. unknown 3. unknown | CString |  |
| SelectInternationalOrganizationPolicyNextLaw | 1. unknown 2. unknown | void |  |
| SelectInternationalOrganizationPolicyPrevLaw | 1. unknown 2. unknown | void |  |
| SelectLocalization | 1. unknown 2. unknown 3. unknown | CString |  |
| SelectLocation | 1. unknown | void |  |
| SelectLocationToBuild | 1. unknown 2. unknown | void |  |
| SelectLocationToBuildDefault | 1. unknown | void |  |
| SelectLocationToBuildWithLocation | 1. unknown 2. unknown 3. unknown | void |  |
| SelectLocationToRecruit | 1. unknown 2. unknown | void |  |
| SelectLocationToRiseArmy |  | void |  |
| SelectLocationToRiseNavy |  | void |  |
| SelectNextFocusMarket |  | void |  |
| SelectNextMarket | 1. unknown | void |  |
| SelectNextRelevantCountry | 1. unknown | void |  |
| SelectNextRelevantLocation | 1. unknown | void |  |
| SelectNextUnit | 1. unknown | void |  |
| SelectPolicyNextLaw | 1. unknown | void |  |
| SelectPolicyPrevLaw | 1. unknown | void |  |
| SelectPrevFocusMarket |  | void |  |
| SelectPrevMarket | 1. unknown | void |  |
| SelectPrevRelevantCountry | 1. unknown | void |  |
| SelectPrevRelevantLocation | 1. unknown | void |  |
| SelectPrevUnit | 1. unknown | void |  |
| SelectUnit | 1. unknown | void |  |
| SelectUnitAndPan | 1. unknown | void |  |
| SelectUnitsOnBoard | 1. unknown | void |  |
| Select\_CFixedPoint | 1. unknown 2. unknown 3. unknown | CFixedPoint |  |
| Select\_CString | 1. unknown 2. unknown 3. unknown | CString |  |
| Select\_CVector2f | 1. unknown 2. unknown 3. unknown | CVector2f |  |
| Select\_CVector2i | 1. unknown 2. unknown 3. unknown | CVector2i |  |
| Select\_CVector3f | 1. unknown 2. unknown 3. unknown | CVector3f |  |
| Select\_CVector3i | 1. unknown 2. unknown 3. unknown | CVector3i |  |
| Select\_CVector4f | 1. unknown 2. unknown 3. unknown | CVector4f |  |
| Select\_CVector4i | 1. unknown 2. unknown 3. unknown | CVector4i |  |
| Select\_float | 1. unknown 2. unknown 3. unknown | float |  |
| Select\_int16 | 1. unknown 2. unknown 3. unknown | int16 |  |
| Select\_int32 | 1. unknown 2. unknown 3. unknown | int32 |  |
| Select\_int64 | 1. unknown 2. unknown 3. unknown | int64 |  |
| Select\_int8 | 1. unknown 2. unknown 3. unknown | int8 |  |
| Select\_uint16 | 1. unknown 2. unknown 3. unknown | uint16 |  |
| Select\_uint32 | 1. unknown 2. unknown 3. unknown | uint32 |  |
| Select\_uint64 | 1. unknown 2. unknown 3. unknown | uint64 |  |
| Select\_uint8 | 1. unknown 2. unknown 3. unknown | uint8 |  |
| SetAlertPriorityFromTextContext | 1. unknown | void |  |
| SetBlockListAndTrimFromTextContext | 1. unknown | void |  |
| SetBlockListFromTextContext | 1. unknown | void |  |
| SetBlockListWithTitleFromTextContext | 1. unknown | void |  |
| SetCStringFromTextContext | 1. unknown | void |  |
| SetCameraRestrictionsEnabled | 1. unknown | void | Map Editor - Set camera restrictions toggle |
| SetConditionListForceFailFromTextContext | 1. unknown | void |  |
| SetConditionListFromTextContext | 1. unknown | void |  |
| SetConditionListOnlyFailCollapseRequirementFromTextContext | 1. unknown | void |  |
| SetConditionListOnlyFailFromTextContext | 1. unknown | void |  |
| SetConditionListOnlyPassedAndNeutralFromTextContext | 1. unknown | void |  |
| SetConditionListOnlyPassedFromTextContext | 1. unknown | void |  |
| SetConditionListWithTitleForceFailFromTextContext | 1. unknown | void |  |
| SetConditionListWithTitleFromTextContext | 1. unknown | void |  |
| SetConditionListWithTitleOnlyFailFromTextContext | 1. unknown | void |  |
| SetConditionListWithTitleOnlyPassedAndNeutralFromTextContext | 1. unknown | void |  |
| SetConditionListWithTitleOnlyPassedFromTextContext | 1. unknown | void |  |
| SetDefaultMapMode |  | void |  |
| SetHighlightedTab | 1. unknown | void |  |
| SetLobbyCountry | 1. unknown | void |  |
| SetLobbyCountryTag | 1. unknown | void |  |
| SetMapMode | 1. unknown | void |  |
| SetRequirementsListFromTextContext | 1. unknown | void |  |
| SetRequirementsListFromTextContextWithTitle | 1. unknown | void |  |
| SetRowListFromTextContext | 1. unknown | void |  |
| SetRowListWithTitleFromTextContext | 1. unknown | void |  |
| SetSelectedInstitution | 1. unknown | void |  |
| SetStringPairListAndTrimFromTextContext | 1. unknown | void |  |
| SetStringPairListFromTextContext | 1. unknown | void |  |
| SetStringPairListWithTitleAndFooterFromTextContext | 1. unknown | void |  |
| SetStringPairListWithTitleFromTextContext | 1. unknown | void |  |
| SetTableColumnListFromTextContext | 1. unknown | void |  |
| SetTitleDescTooltipFromTextContext | 1. unknown | void |  |
| SetUIFocusMarket | 1. unknown | void |  |
| SetupExportWithNeedsLeft | 1. unknown 2. unknown 3. unknown | void |  |
| SetupExportWithNeedsRight | 1. unknown 2. unknown 3. unknown | void |  |
| SetupImportWithNeedsLeft | 1. unknown 2. unknown 3. unknown | void |  |
| SetupImportWithNeedsRight | 1. unknown 2. unknown 3. unknown | void |  |
| SetupSelectCommanderLeft | 1. unknown | void |  |
| SetupSelectCommanderRight | 1. unknown | void |  |
| ShouldFrontEndSceneBeVisible |  | bool |  |
| ShouldShowAnimationInfo |  | bool |  |
| ShouldShowRulingHistoryForInternationalOrganization | 1. unknown | bool |  |
| ShouldShowSegmentedControlForSetting | 1. unknown | bool | Settings - Should show segmented control or not? |
| ShowAdultAge |  | CString |  |
| ShowAdvanceName | 1. unknown | CString |  |
| ShowAdvanceNameWithNoTooltip | 1. unknown | CString |  |
| ShowAgeName | 1. unknown | CString |  |
| ShowAgeNameWithNoTooltip | 1. unknown | CString |  |
| ShowAreaName | 1. unknown | CString |  |
| ShowAreaNameWithNoTooltip | 1. unknown | CString |  |
| ShowArmyBuilderView |  | void |  |
| ShowArmyBuilderViewWithLocation | 1. unknown | void |  |
| ShowArtistTypeName | 1. unknown | CString |  |
| ShowArtistTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowAutoModifierEffect | 1. unknown | CString |  |
| ShowAutoModifierEffectForCountry | 1. unknown 2. unknown | CString |  |
| ShowAutoModifierEffectForLocation | 1. unknown 2. unknown | CString |  |
| ShowAvatarName | 1. unknown | CString |  |
| ShowAvatarNameWithNoTooltip | 1. unknown | CString |  |
| ShowBiasValue | 1. unknown | CFixedPoint |  |
| ShowBiasValueScoped | 1. unknown 2. unknown 3. unknown 4. unknown | CFixedPoint |  |
| ShowBribeMercenary | 1. unknown | bool |  |
| ShowBuilding | 1. unknown | void |  |
| ShowBuildingCardForLocation | 1. unknown 2. unknown | bool |  |
| ShowBuildingTypeName | 1. unknown | CString |  |
| ShowBuildingTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowCabinetActionName | 1. unknown | CString |  |
| ShowCabinetActionNameWithNoTooltip | 1. unknown | CString |  |
| ShowCabinetTypeDatabase | 1. unknown | CString |  |
| ShowCasusBelliName | 1. unknown | CString |  |
| ShowCasusBelliNameWithNoTooltip | 1. unknown | CString |  |
| ShowCharacter | 1. unknown | void |  |
| ShowCharacterInDynasty | 1. unknown | void |  |
| ShowCharacterInteractionName | 1. unknown | CString |  |
| ShowCharacterInteractionNameWithNoTooltip | 1. unknown | CString |  |
| ShowClimateName | 1. unknown | CString |  |
| ShowClimateNameWithNoTooltip | 1. unknown | CString |  |
| ShowCombat | 1. unknown | void |  |
| ShowCondottieriViewWithFilter | 1. unknown | void |  |
| ShowConsortSelection | 1. unknown | void |  |
| ShowConstructionCancellationDialog | 1. unknown 2. unknown | void |  |
| ShowConstructionType | 1. unknown | void |  |
| ShowContinentName | 1. unknown | CString |  |
| ShowContinentNameWithNoTooltip | 1. unknown | CString |  |
| ShowCountryInteractionName | 1. unknown | CString |  |
| ShowCountryInteractionNameWithNoTooltip | 1. unknown | CString |  |
| ShowCountryPeopleViewWithLocation | 1. unknown 2. unknown | void |  |
| ShowCountryPeopleViewWithPopFilter | 1. unknown 2. unknown | void |  |
| ShowCountryRankName | 1. unknown | CString |  |
| ShowCountryRankNameWithNoTooltip | 1. unknown | CString |  |
| ShowCulture | 1. unknown | void |  |
| ShowCultureGroupName | 1. unknown | CString |  |
| ShowCultureGroupNameWithNoTooltip | 1. unknown | CString |  |
| ShowCultureName | 1. unknown | CString |  |
| ShowCultureNameWithNoTooltip | 1. unknown | CString |  |
| ShowDatabase | 1. unknown | CString |  |
| ShowDatabaseWithIcon | 1. unknown | CString |  |
| ShowDelistMercenary | 1. unknown | bool |  |
| ShowDialectName | 1. unknown | CString |  |
| ShowDialectNameWithNoTooltip | 1. unknown | CString |  |
| ShowDiploMacrobuilderWithCountry | 1. unknown | void |  |
| ShowDiploMacrobuilderWithCountryAndFilter | 1. unknown 2. unknown 3. unknown | void |  |
| ShowDiploMacrobuilderWithFilter | 1. unknown 2. unknown | void |  |
| ShowDisaster | 1. unknown | void |  |
| ShowDisasterName | 1. unknown | CString |  |
| ShowDisasterNameWithNoTooltip | 1. unknown | CString |  |
| ShowDiseaseName | 1. unknown | CString |  |
| ShowDiseaseNameWithNoTooltip | 1. unknown | CString |  |
| ShowDismissMercenary | 1. unknown | bool |  |
| ShowDynasty | 1. unknown | void |  |
| ShowDynastyName | 1. unknown | CString |  |
| ShowDynastyNameWithNoTooltip | 1. unknown | CString |  |
| ShowEstatePrivilegeName | 1. unknown | CString |  |
| ShowEstatePrivilegeNameWithNoTooltip | 1. unknown | CString |  |
| ShowEstateTypeName | 1. unknown | CString |  |
| ShowExpandRawGoodLocationsViewWithGoods | 1. unknown 2. unknown | void |  |
| ShowExpandRawGoodLocationsViewWithMarketAndFilter | 1. unknown 2. unknown 3. unknown | void |  |
| ShowExpandRawGoodLocationsViewWithMarketAndGoods | 1. unknown 2. unknown 3. unknown | void |  |
| ShowExtendMercenary | 1. unknown | bool |  |
| ShowFoodProductionViewWithMarket | 1. unknown 2. unknown | void |  |
| ShowFoodProductionViewWithProvince | 1. unknown 2. unknown | void |  |
| ShowForeignCountry | 1. unknown | void |  |
| ShowFormableCountryName | 1. unknown | CString |  |
| ShowFormableCountryNameWithNoTooltip | 1. unknown | CString |  |
| ShowFortProductionInLocation | 1. unknown | void |  |
| ShowGenericActionName | 1. unknown | CString |  |
| ShowGenericActionNameWithNoTooltip | 1. unknown | CString |  |
| ShowGodName | 1. unknown | CString |  |
| ShowGodNameWithNoTooltip | 1. unknown | CString |  |
| ShowGoods | 1. unknown | void |  |
| ShowGoodsDemandName | 1. unknown | CString |  |
| ShowGoodsDemandNameWithNoTooltip | 1. unknown | CString |  |
| ShowGoodsName | 1. unknown | CString |  |
| ShowGoodsNameWithNoTooltip | 1. unknown | CString |  |
| ShowGoodsProductionViewWithMarketAndFilter | 1. unknown 2. unknown 3. unknown | void |  |
| ShowGoodsReactive | 1. unknown | void |  |
| ShowGovernmentReformName | 1. unknown | CString |  |
| ShowGovernmentReformNameWithNoTooltip | 1. unknown | CString |  |
| ShowGovernmentTypeName | 1. unknown | CString |  |
| ShowGovernmentTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowGreatPowersSortedBy | 1. unknown | CString |  |
| ShowHegemonyName | 1. unknown | CString |  |
| ShowHegemonyNameWithNoTooltip | 1. unknown | CString |  |
| ShowHeirSelectionName | 1. unknown | CString |  |
| ShowHeirSelectionNameWithNoTooltip | 1. unknown | CString |  |
| ShowHireMercenary | 1. unknown | bool |  |
| ShowHiringArmyMercenariesView |  | void |  |
| ShowHiringNavyMercenariesView |  | void |  |
| ShowHolySiteDefinitionName | 1. unknown | CString |  |
| ShowHolySiteDefinitionNameWithNoTooltip | 1. unknown | CString |  |
| ShowHolySiteTypeName | 1. unknown | CString |  |
| ShowHolySiteTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowInstitutionName | 1. unknown | CString |  |
| ShowInstitutionNameWithNoTooltip | 1. unknown | CString |  |
| ShowInternationalOrganizationTypeViewOpen | 1. unknown | bool |  |
| ShowInternationalOrganizationViewOpen | 1. unknown | bool |  |
| ShowJominiLegalDocuments |  | void |  |
| ShowLandOwnershipRuleName | 1. unknown | CString |  |
| ShowLandOwnershipRuleNameWithNoTooltip | 1. unknown | CString |  |
| ShowLanguageFamilyName | 1. unknown | CString |  |
| ShowLanguageFamilyNameWithNoTooltip | 1. unknown | CString |  |
| ShowLanguageName | 1. unknown | CString |  |
| ShowLanguageNameWithNoTooltip | 1. unknown | CString |  |
| ShowLawName | 1. unknown | CString |  |
| ShowLawNameWithNoTooltip | 1. unknown | CString |  |
| ShowLocation | 1. unknown | void |  |
| ShowLocationName | 1. unknown | CString |  |
| ShowLocationNameWithNoTooltip | 1. unknown | CString |  |
| ShowLocationRankName | 1. unknown | CString |  |
| ShowLocationRankNameWithNoTooltip | 1. unknown | CString |  |
| ShowManageSubjectType | 1. unknown | void |  |
| ShowManageSubjects |  | void |  |
| ShowManageSubjectsWithFilter | 1. unknown | void |  |
| ShowMarket | 1. unknown | void |  |
| ShowMaxAdolescentAge |  | CString |  |
| ShowMaxChildAge |  | CString |  |
| ShowMaxInfantAge |  | CString |  |
| ShowMessageSettings | 1. unknown | void |  |
| ShowMinAdolescentAge |  | CString |  |
| ShowMinChildAge |  | CString |  |
| ShowMission | 1. unknown | void |  |
| ShowMissionName | 1. unknown | CString |  |
| ShowMissionNameWithNoTooltip | 1. unknown | CString |  |
| ShowMissionTaskName | 1. unknown | CString |  |
| ShowMissionTaskNameWithNoTooltip | 1. unknown | CString |  |
| ShowModifier | 1. unknown | CString |  |
| ShowModifierEffect | 1. unknown | CString |  |
| ShowModifierTypeName | 1. unknown | CString |  |
| ShowModifierTypeNameWithBreakdown | 1. unknown 2. unknown | CString |  |
| ShowModifierTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowModifierWithNoTooltip | 1. unknown | CString |  |
| ShowMoveCapital | 1. unknown | bool |  |
| ShowNamedValue | 1. unknown | CFixedPoint |  |
| ShowNavyBuilderView |  | void |  |
| ShowNavyBuilderViewWithLocation | 1. unknown | void |  |
| ShowParliamentAgendaTypeName | 1. unknown | CString |  |
| ShowParliamentAgendaTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowParliamentIssueTypeName | 1. unknown | CString |  |
| ShowParliamentIssueTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowParliamentTypeName | 1. unknown | CString |  |
| ShowParliamentTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowParliamentTypes |  | CString |  |
| ShowPaymentName | 1. unknown | CString |  |
| ShowPaymentNameWithNoTooltip | 1. unknown | CString |  |
| ShowPeaceTreatyTypeName | 1. unknown | CString |  |
| ShowPeaceTreatyTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowPolicyName | 1. unknown | CString |  |
| ShowPolicyNameWithNoTooltip | 1. unknown | CString |  |
| ShowPopTypeName | 1. unknown | CString |  |
| ShowPopTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowPopsForLocation | 1. unknown | void |  |
| ShowPopsForProvince | 1. unknown | void |  |
| ShowProductionMethodName | 1. unknown | CString |  |
| ShowProductionMethodNameWithNoTooltip | 1. unknown | CString |  |
| ShowProductionViewWithFilter | 1. unknown 2. unknown | void |  |
| ShowProductionViewWithLocation | 1. unknown 2. unknown | void |  |
| ShowProductionViewWithMarketAndFilter | 1. unknown 2. unknown 3. unknown | void |  |
| ShowProvinceDefinition | 1. unknown | void |  |
| ShowProvinceDefinitionName | 1. unknown | CString |  |
| ShowProvinceDefinitionNameWithNoTooltip | 1. unknown | CString |  |
| ShowRaiseLevies | 1. unknown | bool |  |
| ShowRebel | 1. unknown | void |  |
| ShowRegionName | 1. unknown | CString |  |
| ShowRegionNameWithNoTooltip | 1. unknown | CString |  |
| ShowRelationTypeName | 1. unknown | CString |  |
| ShowReligionAdjective | 1. unknown | CString |  |
| ShowReligionAdjectiveWithNoTooltip | 1. unknown | CString |  |
| ShowReligionGroupAdjective | 1. unknown | CString |  |
| ShowReligionGroupAdjectiveWithNoTooltip | 1. unknown | CString |  |
| ShowReligionGroupName | 1. unknown | CString |  |
| ShowReligionGroupNameWithNoTooltip | 1. unknown | CString |  |
| ShowReligionName | 1. unknown | CString |  |
| ShowReligionNameWithNoTooltip | 1. unknown | CString |  |
| ShowReligiousAspectName | 1. unknown | CString |  |
| ShowReligiousAspectNameWithNoTooltip | 1. unknown | CString |  |
| ShowReligiousFigureName | 1. unknown | CString |  |
| ShowReligiousFigureNameWithNoTooltip | 1. unknown | CString |  |
| ShowReligiousFocusName | 1. unknown | CString |  |
| ShowReligiousFocusNameWithNoTooltip | 1. unknown | CString |  |
| ShowReligiousSchoolName | 1. unknown | CString |  |
| ShowReligiousSchoolNameWithNoTooltip | 1. unknown | CString |  |
| ShowResolutionName | 1. unknown | CString |  |
| ShowResolutionNameWithNoTooltip | 1. unknown | CString |  |
| ShowRoadTypeName | 1. unknown | CString |  |
| ShowRoadTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowRoadbuilder | 1. unknown | void |  |
| ShowRulingHistoryForCountry | 1. unknown | void |  |
| ShowRulingHistoryForInternationalOrganization | 1. unknown | void |  |
| ShowScriptedEffect | 1. unknown 2. unknown | CString |  |
| ShowScriptedEffectForScope | 1. unknown 2. unknown | CString |  |
| ShowSeaZone | 1. unknown | void |  |
| ShowSelectCabinetCharacter | 1. unknown 2. unknown | void |  |
| ShowSelectCabinetForContextMenu |  | void |  |
| ShowSelectCabinetToDevelopProvince | 1. unknown | void |  |
| ShowSelectCabinetToEncourageMigration | 1. unknown | void |  |
| ShowSelectCabinetToExpelPeople | 1. unknown | void |  |
| ShowSelectCabinetToIncreaseControl | 1. unknown | void |  |
| ShowSelectCabinetToRecoverEffort | 1. unknown | void |  |
| ShowSelectInternationalOrganizationPolicies | 1. unknown | void |  |
| ShowSelectPolicies | 1. unknown | void |  |
| ShowSelectRivals |  | void |  |
| ShowSelectSuccessionLaw |  | void |  |
| ShowShortAgeName | 1. unknown | CString |  |
| ShowShortAgeNameWithNoTooltip | 1. unknown | CString |  |
| ShowSimpleCustomTooltip | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown 7. unknown | CString | Creates a simple custom TagTooltip for the string in the first argument. Other arguments are the loc-key for the title, the icon filename within gfx/interface/icons/, and the loc-keys for concept, body, flavor and list. |
| ShowSimpleCustomTooltipLocalized | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown 7. unknown | CString | Like ShowSimpleCustomTooltip, except the string in the first argument gets localized. |
| ShowSituation | 1. unknown | void |  |
| ShowSituationName | 1. unknown | CString |  |
| ShowSituationNameWithNoTooltip | 1. unknown | CString |  |
| ShowSocietyDirectionName | 1. unknown | CString |  |
| ShowSocietyDirectionNameWithNoTooltip | 1. unknown | CString |  |
| ShowSpecialStatusName | 1. unknown | CString |  |
| ShowSpecialStatusNamePlural | 1. unknown | CString |  |
| ShowSpecialStatusNamePluralWithNoTooltip | 1. unknown | CString |  |
| ShowSpecialStatusNameWithNoTooltip | 1. unknown | CString |  |
| ShowSubContinentName | 1. unknown | CString |  |
| ShowSubContinentNameWithNoTooltip | 1. unknown | CString |  |
| ShowSubjectTypeName | 1. unknown | CString |  |
| ShowSubjectTypeNameWithNoTooltip | 1. unknown | CString |  |
| ShowTopographyName | 1. unknown | CString |  |
| ShowTopographyNameWithNoTooltip | 1. unknown | CString |  |
| ShowTradeDetails | 1. unknown | void |  |
| ShowTraitName | 1. unknown | CString |  |
| ShowTraitNameWithNoTooltip | 1. unknown | CString |  |
| ShowTransferOccupation | 1. unknown | void |  |
| ShowTransferProvinceOccupation | 1. unknown | void |  |
| ShowTriggerConditions | 1. unknown 2. unknown | CString |  |
| ShowTriggerConditionsForScope | 1. unknown 2. unknown | CString |  |
| ShowUnitAbilityName | 1. unknown | CString |  |
| ShowUnitAbilityNameWithNoTooltip | 1. unknown | CString |  |
| ShowUnitCategoryName | 1. unknown | CString |  |
| ShowUnitCategoryNameWithNoTooltip | 1. unknown | CString |  |
| ShowUnitCombat | 1. unknown 2. unknown | void |  |
| ShowUnitDefinitionName | 1. unknown | CString |  |
| ShowUnitDefinitionNameWithNoTooltip | 1. unknown | CString |  |
| ShowUnitMilitaryObjectiveGroups | 1. unknown | void |  |
| ShowUnitType | 1. unknown | void |  |
| ShowVegetationName | 1. unknown | CString |  |
| ShowVegetationNameWithNoTooltip | 1. unknown | CString |  |
| ShowWar | 1. unknown 2. unknown | void |  |
| ShowWarPeaceOffer | 1. unknown | void |  |
| ShowWorkOfArtName | 1. unknown | CString |  |
| ShowWorkOfArtNameWithNoTooltip | 1. unknown | CString |  |
| ShowWorkOfArtTypeName | 1. unknown | CString |  |
| ShowWorkOfArtTypeNameWithNoTooltip | 1. unknown | CString |  |
| SkipAgenda |  | bool |  |
| StartBasicTutorial |  | void |  |
| StartLobbyGame |  | void |  |
| StartsWith | 1. unknown 2. unknown | bool |  |
| StatusCanLogin |  | bool |  |
| StatusGetLoginStatus |  | CUTF8String |  |
| StatusGetUserEmailMasked |  | CUTF8String |  |
| StatusGetUserName |  | CUTF8String |  |
| StatusIsAccountConnected |  | bool |  |
| StatusIsLoggedIn |  | bool |  |
| StatusIsLoggingIn |  | bool |  |
| StatusIsOffline |  | bool |  |
| StatusIsSupportConnectedAccount |  | bool |  |
| StatusIsUserNameEmpty |  | bool |  |
| StopObservingCountry |  | void |  |
| StopTutorial |  | void |  |
| StringContains | 1. unknown 2. unknown | bool |  |
| StringIsEmpty | 1. unknown | bool |  |
| StringIsWhitespace | 1. unknown | bool |  |
| SubmitPassword |  | void |  |
| SubsidizeBuilding | 1. unknown | void |  |
| Subtract\_CFixedPoint | 1. unknown 2. unknown | CFixedPoint |  |
| Subtract\_CVector2f | 1. unknown 2. unknown | CVector2f |  |
| Subtract\_float | 1. unknown 2. unknown | float |  |
| Subtract\_int32 | 1. unknown 2. unknown | int32 |  |
| Subtract\_int64 | 1. unknown 2. unknown | int64 |  |
| Subtract\_uint32 | 1. unknown 2. unknown | uint32 |  |
| Subtract\_uint64 | 1. unknown 2. unknown | uint64 |  |
| TakeOverSiege | 1. unknown | void |  |
| TextureListFormatSize | 1. unknown | CString |  |
| TextureListFormatkB | 1. unknown | CString |  |
| ToString\_int16 | 1. unknown | CString |  |
| ToString\_int32 | 1. unknown | CString |  |
| ToString\_int64 | 1. unknown | CString |  |
| ToString\_int8 | 1. unknown | CString |  |
| ToString\_uint16 | 1. unknown | CString |  |
| ToString\_uint32 | 1. unknown | CString |  |
| ToString\_uint64 | 1. unknown | CString |  |
| ToString\_uint8 | 1. unknown | CString |  |
| ToggleAllowExtendMercenary | 1. unknown | void |  |
| ToggleAutoExtendMercenaries |  | void |  |
| ToggleAutoMaintenance | 1. unknown | void |  |
| ToggleAutoRaiseArmyLeviesAtWar |  | void |  |
| ToggleAutoRaiseNavyLeviesAtWar |  | void |  |
| ToggleBuilding | 1. unknown | void |  |
| ToggleBuildings | 1. unknown | void |  |
| ToggleCharacterFav | 1. unknown | void |  |
| ToggleCountryFav | 1. unknown | void |  |
| ToggleEncyclopedia |  | void |  |
| ToggleFav | 1. unknown 2. unknown | void |  |
| ToggleGameView | 1. unknown | void |  |
| ToggleGoodsFav | 1. unknown | void |  |
| ToggleIOFav | 1. unknown | void |  |
| ToggleJominiCreateAccount |  | void |  |
| ToggleJominiLoginAccount |  | void |  |
| ToggleLateralGroup | 1. unknown | void |  |
| ToggleLateralView | 1. unknown | void |  |
| ToggleLocationFav | 1. unknown | void |  |
| ToggleLogViewer |  | void |  |
| ToggleMarketAutomation | 1. unknown | void |  |
| ToggleMarketFav | 1. unknown | void |  |
| ToggleMessageLog |  | void |  |
| ToggleMultiplayerChat |  | void |  |
| ToggleOpenModTools |  | void |  |
| TogglePlayerAI | 1. unknown | void |  |
| ToggleSeazoneFav | 1. unknown | void |  |
| ToggleSelectUnit | 1. unknown | void |  |
| ToggleSkipAgenda |  | void |  |
| ToggleSkipPlaythrough |  | void |  |
| ToggleSkipWelcomeNewGame |  | void |  |
| ToggleSubsidizeBuildings | 1. unknown | void |  |
| ToggleTradeLock | 1. unknown | void |  |
| TransparentIfFalse | 1. unknown | float |  |
| TransparentIfTrue | 1. unknown | float |  |
| TransparentIfZero | 1. unknown | float |  |
| TransparentIfZero\_int32 | 1. unknown | float |  |
| TutorialGetVar | 1. unknown | CString |  |
| TutorialHasVar | 1. unknown | bool |  |
| TutorialHasVarValue | 1. unknown 2. unknown | bool |  |
| TutorialIsRunning |  | bool |  |
| TutorialIsStepKey | 1. unknown | bool |  |
| TutorialVarNotExistOrHasValue | 1. unknown 2. unknown | bool |  |
| Unfocus | 1. unknown | void | Unfocus widget |
| UnselectLobbyCountry |  | void |  |
| UpdateVisibilityIfThereIsAnyText | 1. unknown | void |  |
| UpgradeLocationRank | 1. unknown | void |  |
| UpgradeSubUnit | 1. unknown | void |  |
| UseDynamicParliamentName |  | bool |  |
| UsesTimerLocking |  | bool |  |
| V2SizeHeight | 1. unknown 2. unknown 3. unknown | CVector2f |  |
| V2SizeWidth | 1. unknown 2. unknown 3. unknown | CVector2f |  |
| Vector3fToColor | 1. unknown | CVector4f |  |
| Vector3iToColor | 1. unknown | CVector4f |  |
| Vector4iToColor | 1. unknown | CVector4f |  |
| VersionInfoOnClick |  | void |  |

### List of all data type functions

*Main article: [List of GUI script functions](/List_of_GUI_script_functions "List of GUI script functions")*

The list is on a separate page as it is too large to directly be included on this page. It includes all GUI functions in every scope including those above.

## GUI promotes

|  |  |
| --- | --- |
| ![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png) | Please help improve this article or section by [**expanding it**](https://eu5.paradoxwikis.com/index.php?title=GUI_script&action=edit) with: more tables. |

GUI promotes typically move the "scope" from one type to another.

List of global promotes

| Promote | Arguments | Output | Description |
| --- | --- | --- | --- |
| ACTIVE\_RESOLUTION |  | ActiveResolution |  |
| ACTIVE\_SITUATION |  | ActiveSituation |  |
| ADVANCE |  | Advance |  |
| ADVANCE\_DEFINITION |  | AdvanceDefinition |  |
| AGE |  | Age |  |
| AREA |  | Area |  |
| ARTIST |  | Artist |  |
| ATTACKER |  | Country |  |
| AVATAR |  | Avatar |  |
| AccessActiveDLC | 1. unknown | DlcEntry |  |
| AccessActiveMod | 1. unknown | ModsPlaysetEntry |  |
| AccessGameRules |  | JominiGameRules |  |
| AccessLobbyCountryList |  | CountryListOverview |  |
| AccessLogViewer |  | LogViewer | Access Central Log Viewer |
| AccessMessageLog |  | MessageLog |  |
| AccessModsGui |  | ModsGui | Access Mods GUI |
| AccessOutliner |  | Outliner |  |
| AccessPauseMenu |  | PauseMenu |  |
| AccessTutorial |  | Tutorial |  |
| Application |  | Application |  |
| AuxVars |  | Context |  |
| BATTLE\_RESULT |  | BattleResult |  |
| BATTLE\_SIDE |  | BattleSide |  |
| BUILDING |  | Building |  |
| BUILDING\_CATEGORY |  | BuildingCategory |  |
| BUILDING\_TYPE |  | BuildingType |  |
| BuildModeGetBuildingType |  | BuildingType |  |
| BuildModeGetConstructScoreRanking |  | ConstructScoreRanking |  |
| CABINET |  | Cabinet |  |
| CABINET\_ACTION |  | CabinetAction |  |
| CARDINAL |  | Cardinal |  |
| CASUS\_BELLI |  | CasusBelli |  |
| CHARACTER |  | Character |  |
| CHARACTER\_INTERACTION |  | CharacterInteraction |  |
| CHILD\_EDUCATION |  | ChildEducation |  |
| CLIMATE |  | Climate |  |
| COLONIAL\_CHARTER |  | ColonialCharter |  |
| COMBAT |  | Combat |  |
| COMBAT\_SIDE |  | CombatSide |  |
| CONSTRUCTION |  | Construction |  |
| CONTINENT |  | Continent |  |
| COUNTRY |  | Country |  |
| COUNTRY\_INTERACTION |  | CountryInteraction |  |
| COUNTRY\_RANK |  | CountryRank |  |
| CULTURE |  | Culture |  |
| CULTURE\_GROUP |  | CultureGroup |  |
| DATE |  | Date | Jomini Date |
| DATE\_MAX |  | Date | Jomini Date - Max |
| DATE\_MIN |  | Date | Jomini Date - Min |
| DEFENDER |  | Country |  |
| DIALECT |  | Dialect |  |
| DISASTER |  | Disaster |  |
| DISASTER\_TYPE |  | DisasterType |  |
| DISEASE |  | Disease |  |
| DISEASE\_OUTBREAK |  | DiseaseOutbreak |  |
| DYNASTY |  | Dynasty |  |
| EMPLOYMENT\_SYSTEM |  | EmploymentSystem |  |
| ESTATE |  | Estate |  |
| ESTATE\_PRIVILEGE |  | EstatePrivilege |  |
| ESTATE\_TYPE |  | EstateType |  |
| ETHNICITY |  | Ethnicity |  |
| EXPLORATION |  | Exploration |  |
| EmptyScope |  | TopScope |  |
| ExpandModeGetConstructScoreRanking |  | ConstructScoreRanking |  |
| FORMABLE\_COUNTRY |  | FormableCountry |  |
| GC | 1. unknown | GameConceptTooltip |  |
| GENERIC\_ACTION |  | GenericAction |  |
| GOD |  | God |  |
| GOODS |  | Goods |  |
| GOODS\_DEMAND |  | GoodsDemand |  |
| GOODS\_DEMAND\_ENTRY |  | GoodsDemandEntry |  |
| GOVERNMENT\_REFORM |  | GovernmentReform |  |
| GOVERNMENT\_TYPE |  | GovernmentType |  |
| GetActiveMapMode |  | MapMode |  |
| GetAutoModifier | 1. unknown | StaticAutoModifier |  |
| GetAutomatedSystemItem | 1. unknown | AutomatedSystemsItem |  |
| GetAutomatedSystemItem2 | 1. unknown 2. unknown | AutomatedMultiSystemItem |  |
| GetAutomatedSystemItem3 | 1. unknown 2. unknown 3. unknown | AutomatedMultiSystemItem |  |
| GetAutomatedSystemItem4 | 1. unknown 2. unknown 3. unknown 4. unknown | AutomatedMultiSystemItem |  |
| GetAutomatedSystemItem5 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown | AutomatedMultiSystemItem |  |
| GetAutomatedSystemItem6 | 1. unknown 2. unknown 3. unknown 4. unknown 5. unknown 6. unknown | AutomatedMultiSystemItem |  |
| GetCharacter | 1. unknown | Character |  |
| GetCharacterAction | 1. unknown | CharacterInteraction |  |
| GetCharacterQuickActions | 1. unknown | QuickCharacterActions |  |
| GetCountry | 1. unknown | Country |  |
| GetCountryCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| GetCountryFlagCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| GetCountryNeeds | 1. unknown | CountryNeeds |  |
| GetCultureByKey | 1. unknown | Culture |  |
| GetCultureGroupByKey | 1. unknown | CultureGroup |  |
| GetCurrentAge |  | Age |  |
| GetDefaultMapMode |  | MapMode |  |
| GetDisasterTypeByKey | 1. unknown | DisasterType |  |
| GetDisease | 1. unknown | Disease |  |
| GetDynasty | 1. unknown | Dynasty |  |
| GetDynastyCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| GetDynastyFlagCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| GetEconomyView |  | EconomyView |  |
| GetFirstUnitSelected |  | Unit |  |
| GetFormableCountry | 1. unknown | FormableCountry |  |
| GetFormableCountryCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| GetGameRules |  | JominiGameRules |  |
| GetGenericAction | 1. unknown | GenericAction |  |
| GetGlobalVariable | 1. unknown | Scope |  |
| GetHint | 1. unknown | ScriptableHintDefinition |  |
| GetHistoricalScoreCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| GetInstitutionByKey | 1. unknown | Institution |  |
| GetInternationalOrganization | 1. unknown | InternationalOrganization |  |
| GetInternationalOrganizationPayment | 1. unknown | Payment |  |
| GetInternationalOrganizationType | 1. unknown | InternationalOrganizationType |  |
| GetLanguageFlagCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| GetLastSelectInteractionTargetGlue |  | SelectInteractionTargetGlue |  |
| GetLaw | 1. unknown | Law |  |
| GetMapColorLedgerByName | 1. unknown | MapColorLedger |  |
| GetMapColorLedgerSearchBar |  | SearchBar |  |
| GetMapMode | 1. unknown | MapMode |  |
| GetMapModeSearchBar |  | SearchBar |  |
| GetMarketCountryNeeds | 1. unknown 2. unknown | MarketCountryNeeds |  |
| GetMessageLog |  | MessageLog |  |
| GetModifier | 1. unknown | StaticModifier |  |
| GetMultiplayerChat |  | MultiplayerChat |  |
| GetPlayStyleItem | 1. unknown | PlayStyleItem |  |
| GetPlayer |  | Country |  |
| GetPlayerInternationalOrganization | 1. unknown | InternationalOrganization |  |
| GetPlayerTargettedActionParamsPtr |  | TargettedActionParameters |  |
| GetPopTypeByName | 1. unknown | PopType |  |
| GetProficiency | 1. unknown | PlayerProficiency |  |
| GetProvince | 1. unknown | Location |  |
| GetQuickCabinetCardModifier | 1. unknown 2. unknown | QuickCabinetCardModifier |  |
| GetQuickMarketTrades | 1. unknown 2. unknown | QuickMarketTrades |  |
| GetQuickMissionList |  | QuickMissionList |  |
| GetQuickTemporaryCountryRelations | 1. unknown | QuickTemporaryCountryRelations |  |
| GetQuickVisibleCountries | 1. unknown | QuickVisibleCountries |  |
| GetQuickVisibleMarkets | 1. unknown | QuickVisibleMarkets |  |
| GetReligionByKey | 1. unknown | Religion |  |
| GetRequirementLineAux | 1. unknown 2. unknown 3. unknown | RequirementLineAux |  |
| GetResolution | 1. unknown | Resolution |  |
| GetScenario | 1. unknown | Scenario |  |
| GetScriptedGui | 1. unknown | ScriptedGui | Jomini Scripted GUI - Get scripted GUI by name |
| GetScriptedRelationType | 1. unknown | ScriptedRelationType |  |
| GetSelectedCountryOrByLocation |  | Country |  |
| GetServerInfo |  | ServerInformation | Multiplayer - Server Info of current session |
| GetSituationByKey | 1. unknown | Situation |  |
| GetSubUnitCategory | 1. unknown | SubUnitCategory |  |
| GetTutorial |  | Tutorial |  |
| GetUniqueInternationalOrganization | 1. unknown | InternationalOrganization |  |
| GetVariableSystem |  | VariableSystem | Access the global variable system |
| GetWar | 1. unknown 2. unknown | War |  |
| GetWillJoinCountryList | 1. unknown 2. unknown | WillJoinCountryList |  |
| GuiScope |  | TopScope | Jomini Scripted GUI - Get GUI top jomini scope |
| HEGEMONY |  | Hegemony |  |
| HEIR\_SELECTION |  | HeirSelection |  |
| HOLY\_SITE |  | HolySite |  |
| HOLY\_SITE\_DEFINITION |  | HolySiteDefinition |  |
| HOLY\_SITE\_TYPE |  | HolySiteType |  |
| INSTITUTION |  | Institution |  |
| INTERNATIONAL\_ORGANIZATION |  | InternationalOrganization |  |
| INTERNATIONAL\_ORGANIZATION\_TYPE |  | InternationalOrganizationType |  |
| JominiPlayer |  | Playable | Jomini Script Systen - Get generic current playable object |
| LAND\_OWNERSHIP\_RULE |  | LandOwnershipRule |  |
| LANGUAGE |  | Language |  |
| LANGUAGE\_FAMILY |  | LanguageFamily |  |
| LAW |  | Law |  |
| LEVY\_SETUP |  | LevySetup |  |
| LOAN |  | Loan |  |
| LOCATION |  | Location |  |
| LOCATION\_RANK |  | LocationRank |  |
| LeftView |  | LateralView |  |
| MARKET |  | Market |  |
| MERCENARY |  | Mercenary |  |
| MERCHANT |  | Merchant |  |
| MIGRATION |  | Migration |  |
| MISSION |  | MissionDefinition |  |
| MISSION\_TASK |  | MissionTaskDefinition |  |
| MapModeSelectorVars |  | UIVariables |  |
| PARLIAMENT\_AGENDA |  | ParliamentAgenda |  |
| PARLIAMENT\_ISSUE |  | ParliamentIssue |  |
| PARLIAMENT\_TYPE |  | ParliamentType |  |
| PAYMENT |  | Payment |  |
| PEACE\_TREATY |  | ScriptedPeaceTreatyType |  |
| POLICY |  | Policy |  |
| POP |  | Pop |  |
| POP\_TYPE |  | PopType |  |
| PREV |  | Scope | Script Scope |
| PRICE |  | Price |  |
| PRIVATEER |  | Privateer |  |
| PRODUCTION\_METHOD |  | ProductionMethod |  |
| PROVINCE |  | Province |  |
| PROVINCE\_DEFINITION |  | ProvinceDefinition |  |
| PdxAccount |  | PdxAccount |  |
| Pin | 1. unknown | PinCollection |  |
| PinManager |  | PinningManager |  |
| Player |  | Country |  |
| PlayerScope |  | TopScope |  |
| REBEL |  | Rebel |  |
| RECRUITMENT\_METHOD |  | RecruitmentMethod |  |
| REGENCY |  | RegencyType |  |
| REGENCY\_TYPE |  | RegencyType |  |
| REGION |  | Region |  |
| RELATION\_TYPE |  | ScriptedRelationType |  |
| RELIGION |  | Religion |  |
| RELIGION\_GROUP |  | ReligionGroup |  |
| RELIGIOUS\_ASPECT |  | ReligiousAspect |  |
| RELIGIOUS\_FACTION |  | ReligiousFaction |  |
| RELIGIOUS\_FIGURE |  | ReligiousFigure |  |
| RELIGIOUS\_FOCUS |  | ReligiousFocus |  |
| RELIGIOUS\_SCHOOL |  | ReligiousSchool |  |
| RESOLUTION |  | Resolution |  |
| ROAD\_TYPE |  | RoadType |  |
| ROOT |  | Scope | Script Scope |
| RecruitModeGetRecruitItem | 1. unknown | LocationToRecruitItem |  |
| RecruitModeGetRecruitScoreRanking |  | RecruitScoreRanking |  |
| RecruitModeGetView |  | RecruitInLocationLateralView |  |
| RevolutionaryTarget |  | Country |  |
| RightView |  | LateralView |  |
| SCOPE |  | TopScope | Script Scope |
| SCRIPTABLE\_HINT\_DEFINITION |  | ScriptableHintDefinition |  |
| SIEGE |  | Siege |  |
| SITUATION |  | Situation |  |
| SOCIETAL\_VALUE |  | SocietalValue |  |
| SPECIAL\_STATUS |  | SpecialStatus |  |
| SUBJECT\_MILITARY\_STANCE |  | SubjectMilitaryStance |  |
| SUBJECT\_TYPE |  | SubjectType |  |
| SUBUNIT |  | SubUnit |  |
| SUBUNITCATEGORY |  | SubUnitCategory |  |
| SUBUNITDEFINITION |  | SubUnitType |  |
| SUB\_CONTINENT |  | SubContinent |  |
| SUPPLY\_DEPOT |  | SupplyDepot |  |
| SelectCountryDiplomacy\_GetDiplomaticActionItem | 1. unknown | DiplomaticActionItem |  |
| StringToBlockList | 1. unknown | BlockList |  |
| StringToBlockListAndTrim | 1. unknown | BlockList |  |
| StringToBlockListWithTitle | 1. unknown | BlockList |  |
| StringToConditionList | 1. unknown | ConditionList |  |
| StringToConditionListForceFail | 1. unknown | ConditionList |  |
| StringToConditionListOnlyFail | 1. unknown | ConditionList |  |
| StringToConditionListOnlyFailAndNeutral | 1. unknown | ConditionList |  |
| StringToConditionListOnlyFailCollapseRequirement | 1. unknown | ConditionList |  |
| StringToConditionListOnlyPassed | 1. unknown | ConditionList |  |
| StringToConditionListOnlyPassedAndNeutral | 1. unknown | ConditionList |  |
| StringToConditionListOnlyPassedAndNeutralIfNot | 1. unknown 2. unknown | ConditionList |  |
| StringToConditionListWithTitle | 1. unknown | ConditionList |  |
| StringToConditionListWithTitleForceFail | 1. unknown | ConditionList |  |
| StringToConditionListWithTitleOnlyFail | 1. unknown | ConditionList |  |
| StringToConditionListWithTitleOnlyFailAndNeutral | 1. unknown | ConditionList |  |
| StringToConditionListWithTitleOnlyPassed | 1. unknown | ConditionList |  |
| StringToConditionListWithTitleOnlyPassedAndNeutral | 1. unknown | ConditionList |  |
| StringToRequirementsList | 1. unknown | RequirementsList |  |
| StringToRequirementsListWithTitle | 1. unknown | RequirementsList |  |
| StringToRowList | 1. unknown | RowList |  |
| StringToStringPairList | 1. unknown | StringPairList |  |
| StringToStringPairListWithTitle | 1. unknown | StringPairList |  |
| StringToStringPairListWithTitleAndFooter | 1. unknown | StringPairList |  |
| StringToTableColumnList | 1. unknown | TableColumnList |  |
| StringToTitleDescTooltip | 1. unknown | TitleDescTooltip |  |
| TARGET\_ACTIVE\_RESOLUTION |  | ActiveResolution |  |
| TARGET\_ADVANCE\_DEFINITION |  | AdvanceDefinition |  |
| TARGET\_AGE |  | Age |  |
| TARGET\_AREA |  | Area |  |
| TARGET\_ARTIST |  | Artist |  |
| TARGET\_AVATAR |  | Avatar |  |
| TARGET\_BUILDING |  | Building |  |
| TARGET\_BUILDING\_TYPE |  | BuildingType |  |
| TARGET\_CABINET |  | Cabinet |  |
| TARGET\_CABINET\_ACTION |  | CabinetAction |  |
| TARGET\_CARDINAL |  | Cardinal |  |
| TARGET\_CASUS\_BELLI |  | CasusBelli |  |
| TARGET\_CHARACTER |  | Character |  |
| TARGET\_CHARACTER\_INTERACTION |  | CharacterInteraction |  |
| TARGET\_CHILD\_EDUCATION |  | ChildEducation |  |
| TARGET\_CLIMATE |  | Climate |  |
| TARGET\_COLONIAL\_CHARTER |  | ColonialCharter |  |
| TARGET\_COMBAT |  | Combat |  |
| TARGET\_COMBAT\_SIDE |  | CombatSide |  |
| TARGET\_CONTINENT |  | Continent |  |
| TARGET\_COUNTRY |  | Country |  |
| TARGET\_COUNTRY\_INTERACTION |  | CountryInteraction |  |
| TARGET\_COUNTRY\_RANK |  | CountryRank |  |
| TARGET\_CULTURE |  | Culture |  |
| TARGET\_CULTURE\_GROUP |  | CultureGroup |  |
| TARGET\_DIALECT |  | Dialect |  |
| TARGET\_DISASTER |  | Disaster |  |
| TARGET\_DISASTER\_TYPE |  | DisasterType |  |
| TARGET\_DISEASE |  | Disease |  |
| TARGET\_DISEASE\_OUTBREAK |  | DiseaseOutbreak |  |
| TARGET\_DYNASTY |  | Dynasty |  |
| TARGET\_EMPLOYMENT\_SYSTEM |  | EmploymentSystem |  |
| TARGET\_ESTATE |  | Estate |  |
| TARGET\_ESTATE\_PRIVILEGE |  | EstatePrivilege |  |
| TARGET\_ESTATE\_TYPE |  | EstateType |  |
| TARGET\_ETHNICITY |  | Ethnicity |  |
| TARGET\_EXPLORATION |  | Exploration |  |
| TARGET\_FORMABLE\_COUNTRY |  | FormableCountry |  |
| TARGET\_GENERIC\_ACTION |  | GenericAction |  |
| TARGET\_GOD |  | God |  |
| TARGET\_GOODS |  | Goods |  |
| TARGET\_GOODS\_DEMAND |  | GoodsDemand |  |
| TARGET\_GOODS\_DEMAND\_ENTRY |  | GoodsDemandEntry |  |
| TARGET\_GOVERNMENT\_REFORM |  | GovernmentReform |  |
| TARGET\_GOVERNMENT\_TYPE |  | GovernmentType |  |
| TARGET\_HEGEMONY |  | Hegemony |  |
| TARGET\_HEIR\_SELECTION |  | HeirSelection |  |
| TARGET\_HOLY\_SITE |  | HolySite |  |
| TARGET\_HOLY\_SITE\_DEFINITION |  | HolySiteDefinition |  |
| TARGET\_HOLY\_SITE\_TYPE |  | HolySiteType |  |
| TARGET\_INSTITUTION |  | Institution |  |
| TARGET\_INTERNATIONAL\_ORGANIZATION |  | InternationalOrganization |  |
| TARGET\_INTERNATIONAL\_ORGANIZATION\_TYPE |  | InternationalOrganizationType |  |
| TARGET\_LAND\_OWNERSHIP\_RULE |  | LandOwnershipRule |  |
| TARGET\_LANGUAGE |  | Language |  |
| TARGET\_LANGUAGE\_FAMILY |  | LanguageFamily |  |
| TARGET\_LAW |  | Law |  |
| TARGET\_LEVY\_SETUP |  | LevySetup |  |
| TARGET\_LOAN |  | Loan |  |
| TARGET\_LOCATION |  | Location |  |
| TARGET\_LOCATION\_RANK |  | LocationRank |  |
| TARGET\_MARKET |  | Market |  |
| TARGET\_MERCENARY |  | Mercenary |  |
| TARGET\_MIGRATION |  | Migration |  |
| TARGET\_MISSION |  | MissionDefinition |  |
| TARGET\_MISSION\_TASK |  | MissionTaskDefinition |  |
| TARGET\_PARLIAMENT\_AGENDA |  | ParliamentAgenda |  |
| TARGET\_PARLIAMENT\_ISSUE |  | ParliamentIssue |  |
| TARGET\_PARLIAMENT\_TYPE |  | ParliamentType |  |
| TARGET\_PAYMENT |  | Payment |  |
| TARGET\_PEACE\_TREATY |  | ScriptedPeaceTreatyType |  |
| TARGET\_POLICY |  | Policy |  |
| TARGET\_POP |  | Pop |  |
| TARGET\_POP\_TYPE |  | PopType |  |
| TARGET\_PRICE |  | Price |  |
| TARGET\_PRIVATEER |  | Privateer |  |
| TARGET\_PRODUCTION\_METHOD |  | ProductionMethod |  |
| TARGET\_PROVINCE |  | Province |  |
| TARGET\_PROVINCE\_DEFINITION |  | ProvinceDefinition |  |
| TARGET\_REBEL |  | Rebel |  |
| TARGET\_RECRUITMENT\_METHOD |  | RecruitmentMethod |  |
| TARGET\_REGENCY\_TYPE |  | RegencyType |  |
| TARGET\_REGION |  | Region |  |
| TARGET\_RELATION\_TYPE |  | ScriptedRelationType |  |
| TARGET\_RELIGION |  | Religion |  |
| TARGET\_RELIGION\_GROUP |  | ReligionGroup |  |
| TARGET\_RELIGIOUS\_ASPECT |  | ReligiousAspect |  |
| TARGET\_RELIGIOUS\_FACTION |  | ReligiousFaction |  |
| TARGET\_RELIGIOUS\_FIGURE |  | ReligiousFigure |  |
| TARGET\_RELIGIOUS\_FOCUS |  | ReligiousFocus |  |
| TARGET\_RELIGIOUS\_SCHOOL |  | ReligiousSchool |  |
| TARGET\_RESOLUTION |  | Resolution |  |
| TARGET\_ROAD\_TYPE |  | RoadType |  |
| TARGET\_SCRIPTABLE\_HINT\_DEFINITION |  | ScriptableHintDefinition |  |
| TARGET\_SIEGE |  | Siege |  |
| TARGET\_SITUATION |  | Situation |  |
| TARGET\_SOCIETAL\_VALUE |  | SocietalValue |  |
| TARGET\_SPECIAL\_STATUS |  | SpecialStatus |  |
| TARGET\_SUBJECT\_MILITARY\_STANCE |  | SubjectMilitaryStance |  |
| TARGET\_SUBJECT\_TYPE |  | SubjectType |  |
| TARGET\_SUBUNIT |  | SubUnit |  |
| TARGET\_SUBUNITCATEGORY |  | SubUnitCategory |  |
| TARGET\_SUBUNITDEFINITION |  | SubUnitType |  |
| TARGET\_SUB\_CONTINENT |  | SubContinent |  |
| TARGET\_TOPOGRAPHY |  | Topography |  |
| TARGET\_TRADE |  | Trade |  |
| TARGET\_TRAIT |  | Trait |  |
| TARGET\_UNIT |  | Unit |  |
| TARGET\_UNIT\_ABILITY |  | UnitAbility |  |
| TARGET\_UNIT\_TYPE |  | SubUnitType |  |
| TARGET\_VEGETATION |  | Vegetation |  |
| TARGET\_WAR |  | War |  |
| TARGET\_WEATHER\_SYSTEM |  | WeatherSystem |  |
| TARGET\_WORK\_OF\_ART |  | WorkOfArt |  |
| TARGET\_WORK\_OF\_ART\_TYPE |  | WorkOfArtType |  |
| TEMPORARY\_DEMAND |  | TemporaryDemand |  |
| THIS |  | Scope | Script Scope |
| TOPOGRAPHY |  | Topography |  |
| TRADE |  | Trade |  |
| TRAIT |  | Trait |  |
| UNIT |  | Unit |  |
| UNIT\_ABILITY |  | UnitAbility |  |
| UNIT\_TYPE |  | SubUnitType |  |
| VEGETATION |  | Vegetation |  |
| WAR |  | War |  |
| WEATHER\_SYSTEM |  | WeatherSystem |  |
| WORK\_OF\_ART |  | WorkOfArt |  |
| WORK\_OF\_ART\_TYPE |  | WorkOfArtType |  |

### List of all GUI promotes

List of all promotes

| Type | Promote | Arguments | Output | Description |
| --- | --- | --- | --- | --- |
| ActiveClip | OnEnterEventsKeyframe |  | ActiveClipEventsKeyframe |  |
| ActiveClip | OnExitEventsKeyframe |  | ActiveClipEventsKeyframe |  |
| ActiveHegemon | GetCurrent |  | Country |  |
| ActiveHegemon | GetHegemony |  | Hegemony |  |
| ActiveHegemonItem | GetHegemon |  | ActiveHegemon |  |
| ActiveInstitution | GetBirthPlace |  | Location |  |
| ActiveInstitution | GetInstitution |  | Institution |  |
| ActiveParliamentAgenda | GetAgenda |  | ParliamentAgenda |  |
| ActiveParliamentAgenda | GetSpecialStatus |  | SpecialStatus |  |
| ActiveParliamentAgendaWrap | GetEstateType |  | EstateType |  |
| ActiveParliamentAgendaWrap | GetSpecialStatus |  | SpecialStatus |  |
| ActiveProductionMethod | GetMethod |  | ProductionMethod |  |
| ActiveResolution | GetParams |  | TargettedActionParameters |  |
| ActiveResolution | GetProposer |  | Country |  |
| ActiveResolution | GetResolution |  | Resolution |  |
| ActiveResolution | GetTarget | 1. unknown | InteractionTarget |  |
| ActiveResolution | MakeScope |  | Scope |  |
| ActiveResolutionContainer | GetActiveResolution | 1. unknown | ActiveResolution |  |
| ActiveResolutionContainer | GetActiveResolutionFromKey | 1. unknown | ActiveResolution |  |
| ActiveSituation | GetActiveResolution | 1. unknown | ActiveResolution |  |
| ActiveSituation | GetActiveResolutionFromKey | 1. unknown | ActiveResolution |  |
| ActiveSituation | GetSituation |  | Situation |  |
| Advance | GetAge |  | Age |  |
| Advance | GetDefinition |  | AdvanceDefinition |  |
| AdvanceDefinition | GetAge |  | Age |  |
| AdvanceDefinition | GetModifier |  | DatabaseModifier |  |
| AdvanceDefinition | MakeScope |  | Scope |  |
| AdvanceItem | GetAdvance |  | Advance |  |
| AdvanceNode | GetItem |  | AdvanceItem |  |
| AdvancesLateralView | GetAdvancesSortSearch |  | FilteredSortedList |  |
| AdvancesLateralView | GetPlayer |  | Country |  |
| AdvancesLateralView | Manager |  | LateralView |  |
| AdvancesLateralView | Vars |  | Context |  |
| Age | MakeScope |  | Scope |  |
| AgeAdvancesWrap | GetAge |  | Age |  |
| AgendaView | AccessUIVars |  | UIVariables |  |
| AiCurrencyClassGlue | GetCurrentAiCurrency |  | AiCurrencyGlue |  |
| AiCurrencyViewer | GetCurrentAiCurrencyClass |  | AiCurrencyClassGlue |  |
| AiTransportTarget | GetTargetLocation |  | Location |  |
| AlertCanJoinTargettedIO | GetTargettedIO |  | InternationalOrganization |  |
| AlertFormableCountry | GetFormableCountry |  | FormableCountry |  |
| AlertManager | GetPlayer |  | Country |  |
| AlertMemberLeavingUnion | GetUnion |  | InternationalOrganization |  |
| AnimationClipsEditor | AccessUndoer |  | UndoStack |  |
| AnimationEditor | AccessAnimationStateSearch |  | NodeEditorSearch |  |
| AnimationEditor | AccessUndoer |  | UndoStack |  |
| AnimationEditor | AccessVariablesPanel |  | AnimationEditorVariablesPanel |  |
| AnimationEditorConnectionTab | AccessLhsSearchList | 1. unknown 2. unknown | ToolPropertySearchList |  |
| AnimationEditorConnectionTab | AccessOperatorSearchList | 1. unknown 2. unknown | ToolPropertySearchList |  |
| AnimationEditorStateTab | ClipReferenceComplexGuis | 1. unknown | AnimationComplexClipReferenceGui |  |
| AnimationEditorStateTab | ClipReferenceRandomGuis | 1. unknown | AnimationRandomClipReferenceGui |  |
| AnimationEditorStateTab | ClipReferenceSimpleGuis | 1. unknown | AnimationSimpleClipReferenceGui |  |
| AnimationEditorViewer | GetSingleActiveClip |  | ActiveClip | Returns first entry from the [AnimationEditorViewer.ActiveClips] only if there is exactly one entry. |
| AnnexationMarker | GetCountry |  | Country |  |
| AnnexationMarker | GetLocation |  | Location |  |
| AntagonismBombSpecWrap | GetAntagoniser |  | Country |  |
| AntagonismTwoCountriesWrap | GetThem |  | Country |  |
| AntagonismTwoCountriesWrap | GetThemRef |  | Country |  |
| AntagonismTwoCountriesWrap | GetUs |  | Country |  |
| AntagonismTwoCountriesWrap | GetUsRef |  | Country |  |
| AntagonismWrapper | GetCountry |  | Country |  |
| Area | FindFirstNonIntegrated | 1. unknown | Location |  |
| Area | GetCapital |  | Location |  |
| Area | GetRegion |  | Region |  |
| Area | MakeScope |  | Scope |  |
| ArmyBuilderLateralView | GetArmyTypesSortSearch |  | FilteredSortedList |  |
| ArmyBuilderLateralView | GetLocation |  | Location |  |
| ArmyBuilderLateralView | GetMercenariesSortSearch |  | FilteredSortedList |  |
| ArmyBuilderLateralView | GetPlayer |  | Country |  |
| ArmyBuilderLateralView | GetPreferredMethod |  | RecruitmentMethod |  |
| ArmyBuilderLateralView | Manager |  | LateralView |  |
| ArmyBuilderLateralView | Vars |  | Context |  |
| ArmyConstructionMarker | GetConstruction |  | Construction |  |
| Artist | MakeScope |  | Scope |  |
| ArtsItem | GetArt |  | WorkOfArt |  |
| ArtsView | GetArtsItemsSortSearch |  | FilteredSortedList |  |
| ArtsView | GetPlayer |  | Country |  |
| ArtsView | Manager |  | LateralView |  |
| ArtsView | Vars |  | Context |  |
| AskRepayLoanMessagePopup | GetFirstCountry |  | Country |  |
| AskRepayLoanMessagePopup | GetSecondCountry |  | Country |  |
| AutocompleteEntry | GetFilter |  | SearchFilter |  |
| AutomationLateralView | GetPlayStyle | 1. unknown | PlayerPlayStyleItem |  |
| AutomationLateralView | GetPlayer |  | Country |  |
| AutomationLateralView | Manager |  | LateralView |  |
| AutomationLateralView | Vars |  | Context |  |
| AvailableMercenaryTypes | GetCategory |  | SubUnitCategory |  |
| Avatar | MakeScope |  | Scope |  |
| BattleParticipant | GetCountry |  | Country |  |
| BattleResult | GetAttacker |  | BattleSide |  |
| BattleResult | GetDefender |  | BattleSide |  |
| BattleResult | GetLoser |  | BattleSide |  |
| BattleResult | GetWinner |  | BattleSide |  |
| BattleResultMessage | GetAttacker |  | BattleResultMessageSide |  |
| BattleResultMessage | GetBattleResult |  | BattleResult |  |
| BattleResultMessage | GetDefender |  | BattleResultMessageSide |  |
| BattleResultMessageParticipant | GetSide |  | BattleResultMessageSide |  |
| BattleResultMessageParticipant | GetStats |  | BattleParticipant |  |
| BattleResultMessageSide | GetActiveParticipant |  | BattleResultMessageParticipant |  |
| BattleResultMessageSide | GetBattleSide |  | BattleSide |  |
| BattleResultMessageSide | GetMessagePopup |  | BattleResultMessage |  |
| BattleSide | GetCommander |  | Character |  |
| BattleSide | GetMainParticipant |  | Country |  |
| BattleUnitStats | GetCategory |  | SubUnitCategory |  |
| BattleView | GetCombat |  | Combat |  |
| BattleView | GetPlayer |  | Country |  |
| BattleView | Manager |  | LateralView |  |
| BattleView | Vars |  | Context |  |
| BlockedVisionMarker | GetLocation |  | Location |  |
| BrushSettings | Amount |  | BrushFloat |  |
| BrushSettings | Hardness |  | BrushFloat |  |
| BrushSettings | PixelSnap |  | BrushBool |  |
| BrushSettings | Radius |  | BrushFloat |  |
| BrushSettingsDropdown | Settings |  | BrushSettings |  |
| BuildInLocationLateralView | GetBestBuildLocationItem |  | LocationToBuildItem |  |
| BuildInLocationLateralView | GetBuildRankingItems |  | ConstructScoreRanking |  |
| BuildInLocationLateralView | GetBuildingType |  | BuildingType |  |
| BuildInLocationLateralView | GetEstate |  | Estate |  |
| BuildInLocationLateralView | GetItemsSortSearch |  | FilteredSortedList |  |
| BuildInLocationLateralView | GetLastBuildLocationItem |  | LocationToBuildItem |  |
| BuildInLocationLateralView | GetPlayer |  | Country |  |
| BuildInLocationLateralView | GetSelectedLocation |  | Location |  |
| BuildInLocationLateralView | GetSelectedMarket |  | Market |  |
| BuildInLocationLateralView | Manager |  | LateralView |  |
| BuildInLocationLateralView | Vars |  | Context |  |
| BuildLocationSelectMarket | Parent |  | BuildInLocationLateralView |  |
| Building | GetLocation |  | Location |  |
| Building | GetOwner |  | Country |  |
| Building | GetType |  | BuildingType |  |
| Building | GetUnderConstructionForPlayer |  | Construction |  |
| Building | MakeScope |  | Scope |  |
| BuildingCandidate | GetBuilding |  | Building |  |
| BuildingCandidate | GetBuildingCandidateUIAction |  | UIActionProvider |  |
| BuildingConstructionMarker | GetConstruction |  | Construction |  |
| BuildingItem | GetBuilding |  | Building |  |
| BuildingItem | GetBuildingItemUIAction |  | UIActionProvider |  |
| BuildingItem | GetBuildingType |  | BuildingType |  |
| BuildingItem | GetCardBuildingItemUIAction |  | UIActionProvider |  |
| BuildingItem | GetEstate |  | Estate |  |
| BuildingItem | GetFirstBuilding |  | Building |  |
| BuildingItem | GetNoCandidateUIAction |  | UIActionProvider |  |
| BuildingPromoteTimeWrapper | GetLocation |  | Location |  |
| BuildingSpyNetworkMarker | GetCountry |  | Country |  |
| BuildingSpyNetworkMarker | GetLocation |  | Location |  |
| BuildingType | GetAge |  | Age |  |
| BuildingType | GetCategory |  | BuildingCategory |  |
| BuildingType | GetConstructionDemand |  | GoodsDemand |  |
| BuildingType | GetEligibleEstate |  | EstateType |  |
| BuildingType | GetNextReplaced | 1. unknown | BuildingType |  |
| BuildingType | GetObsoleteBuildingInLocation | 1. unknown 2. unknown | Building |  |
| BuildingType | GetPopType |  | PopType |  |
| BuildingType | MakeScope |  | Scope |  |
| BuildingView | GetBuildAllUIAction |  | UIActionProvider |  |
| BuildingView | GetBuildUIAction |  | UIActionProvider |  |
| BuildingView | GetBuilding |  | Building |  |
| BuildingView | GetGoods |  | Goods |  |
| BuildingView | GetPlayer |  | Country |  |
| BuildingView | Manager |  | LateralView |  |
| BuildingView | Vars |  | Context |  |
| CDPopEditor | GetCulturesSortSearch |  | FilteredSortedList |  |
| CDPopEditor | GetReligionsSortSearch |  | FilteredSortedList |  |
| CDPopEditor | GetSelectedPops |  | PopulationConfiguration |  |
| CDPopEditor | GetTemplate |  | PopulationConfiguration |  |
| CEconomy | GetCountry |  | Country |  |
| CEnumValueAnimation | AccessEnum |  | CPdxEnumValue |  |
| Cabinet | GetAction |  | CabinetAction |  |
| Cabinet | GetCharacter |  | Character |  |
| Cabinet | GetSocietalValue |  | SocietalValue |  |
| Cabinet | MakeScope |  | Scope |  |
| CabinetActionMarker | GetCabinet |  | Cabinet |  |
| CabinetActionMarker | GetProvince |  | Province |  |
| CabinetItem | GetAdvisorUIAction |  | UIActionProvider |  |
| CabinetItem | GetCabinet |  | Cabinet |  |
| CabinetItem | GetNoAdvisorUIAction |  | UIActionProvider |  |
| CallAllyAlert | GetCountry |  | Country |  |
| CallAllyAlert | GetUIAction |  | UIActionProvider |  |
| Cardinal | GetLocation |  | Location |  |
| Cardinal | GetOwner |  | Country |  |
| Cardinal | GetReligion |  | Religion |  |
| Cardinal | MakeScope |  | Scope |  |
| CasusBelli | GetWarGoalType |  | WarGoalType |  |
| CasusBelli | MakeScope |  | Scope |  |
| CategoryBuildingTypesItem | GetCategory |  | BuildingCategory |  |
| CharMessage | GetCharacter |  | Character |  |
| Character | GetArtInProgress |  | WorkOfArtType |  |
| Character | GetArtistType |  | Artist |  |
| Character | GetBirthLocation |  | Location |  |
| Character | GetCourtCountry |  | Country |  |
| Character | GetCulture |  | Culture |  |
| Character | GetDynasty |  | Dynasty |  |
| Character | GetEducation |  | ChildEducation |  |
| Character | GetEstateType |  | EstateType |  |
| Character | GetExploration |  | Exploration |  |
| Character | GetFather |  | Character |  |
| Character | GetLocation |  | Location |  |
| Character | GetMother |  | Character |  |
| Character | GetRebel |  | Rebel |  |
| Character | GetReligion |  | Religion |  |
| Character | GetReligiousFigureType |  | ReligiousFigure |  |
| Character | GetReligiousSchool |  | ReligiousSchool |  |
| Character | GetRoleMask |  | CharacterRoleMask |  |
| Character | GetSpouse |  | Character |  |
| Character | GetTimedModifierOwner |  | TimedModifierOwner |  |
| Character | GetUnitPointer |  | Unit |  |
| Character | MakeScope |  | Scope |  |
| CharacterActionItem | GetUIAction |  | UIActionProvider |  |
| CharacterInteraction | MakeScope |  | Scope |  |
| CharacterInteractionItem | GetInteraction |  | CharacterInteraction |  |
| CharacterItem | GetCharacter |  | Character |  |
| CharacterLateralview | GetCharacter |  | Character |  |
| CharacterLateralview | GetPlayer |  | Country |  |
| CharacterLateralview | Manager |  | LateralView |  |
| CharacterLateralview | Vars |  | Context |  |
| CharacterRulerData | GetRuler | 1. unknown | Character |  |
| Chat | GetReceiver |  | Friend |  |
| ChatNotificationMessage | ChatMessage |  | ChatMessage |  |
| ChatTab | GetChat |  | Chat |  |
| ChildEducation | MakeScope |  | Scope |  |
| ChildEducationCandidate | GetChildEducation |  | ChildEducation |  |
| CityGraphicsWrap | GetSelectedBuilding |  | Building |  |
| CityGraphicsWrap | GetSelectedGood |  | Goods |  |
| CityGraphicsWrap | GetSelectedHolySite |  | HolySite |  |
| CityGraphicsWrap | GetSelectedLocation |  | Location |  |
| CityGraphicsWrap | GetSelectedPop |  | PopType |  |
| CityGraphicsWrap | GetSelectedWorkOfArt |  | WorkOfArt |  |
| CityMarker | GetLocation |  | Location |  |
| Climate | MakeScope |  | Scope |  |
| ColonialCharter | GetDestination |  | Location |  |
| ColonialCharter | GetOrigin |  | Location |  |
| ColonialCharter | GetOwner |  | Country |  |
| ColonialCharter | GetProvinceDefinition |  | ProvinceDefinition |  |
| ColonialCharter | MakeScope |  | Scope |  |
| ColonialCharterItem | GetColonialCharter |  | ColonialCharter |  |
| ColonialCharterItem | GetProvinceDefinition |  | ProvinceDefinition |  |
| ColonyCharterMarker | GetLocation |  | Location |  |
| Combat | GetAttacker |  | CombatSide |  |
| Combat | GetDefender |  | CombatSide |  |
| Combat | GetLocation |  | Location |  |
| Combat | GetWar |  | War |  |
| Combat | MakeScope |  | Scope |  |
| CombatImminentMarker | GetLocation |  | Location |  |
| CombatMarker | GetCombat |  | Combat |  |
| CombatMarker | GetLocation |  | Location |  |
| CombatSide | GetBattleSide |  | BattleSide |  |
| CombatSide | GetCaptured |  | CombatSubUnitArray |  |
| CombatSide | GetCenter |  | CombatSubUnitArray |  |
| CombatSide | GetCombat |  | Combat |  |
| CombatSide | GetCommander |  | Character |  |
| CombatSide | GetCountry |  | Country |  |
| CombatSide | GetLeadingUnit |  | Unit |  |
| CombatSide | GetLeft |  | CombatSubUnitArray |  |
| CombatSide | GetReserves |  | CombatSubUnitArray |  |
| CombatSide | GetRetreated |  | CombatSubUnitArray |  |
| CombatSide | GetRight |  | CombatSubUnitArray |  |
| CombatSide | MakeScope |  | Scope |  |
| CombatSideWrap | GetCombatSide |  | CombatSide |  |
| CombatSubUnitArray | GetCombatSide |  | CombatSide |  |
| CondottieriItem | GetUIHeaderAction |  | UIActionProvider |  |
| CondottieriItem | GetUnit |  | Unit |  |
| ConquistadorConstructionMarker | GetConstruction |  | Construction |  |
| ConstructScoreItem | GetLocation |  | Location |  |
| ConstructScoreRanking | GetBuildingType |  | BuildingType |  |
| ConstructScoreRanking | GetConstructScoreFirstItem |  | ConstructScoreItem |  |
| ConstructScoreRanking | GetGoods |  | Goods |  |
| ConstructScoreRanking | GetInvalidFirstItem |  | ConstructScoreItem |  |
| ConstructScoreRanking | GetLastConstruction |  | Construction |  |
| ConstructScoreRanking | GetLastConstructionLocation |  | Location |  |
| Construction | GetBuilding |  | Building |  |
| Construction | GetCountry |  | Country |  |
| Construction | GetEstateType |  | EstateType |  |
| Construction | GetExplorationArea |  | Area |  |
| Construction | GetGoodsDemand |  | GoodsDemand |  |
| Construction | GetLocation |  | Location |  |
| Construction | GetLocationRank |  | LocationRank |  |
| Construction | GetProvince |  | Province |  |
| Construction | GetSubUnitDefinition |  | SubUnitType |  |
| ConstructionItem | GetConstruction |  | Construction |  |
| Context | AccessUIVars |  | UIVariables |  |
| Continent | MakeScope |  | Scope |  |
| ControlGroupsView | AccessGroup | 1. unknown | GroupItem |  |
| CountriesListView | GetCountriesSortSearch |  | FilteredSortedList |  |
| CountriesListView | GetPlayer |  | Country |  |
| CountriesListView | Manager |  | LateralView |  |
| CountriesListView | Vars |  | Context |  |
| CountriesListViewItem | GetCountry |  | Country |  |
| Country | GetBiasConfig | 1. unknown | BiasType |  |
| Country | GetCapital |  | Location |  |
| Country | GetCapitalOrParliament |  | Location |  |
| Country | GetCapitalRegion |  | Region |  |
| Country | GetCommonDialect |  | Dialect |  |
| Country | GetCommonLanguage |  | Language |  |
| Country | GetCourtDialect |  | Dialect |  |
| Country | GetCourtLanguage |  | Language |  |
| Country | GetCulture |  | Culture |  |
| Country | GetCurrentCivilWar |  | Country |  |
| Country | GetCurrentReligiousFocus |  | CurrentReligiousFocus |  |
| Country | GetCurrentResearch |  | CurrentResearch |  |
| Country | GetDiplomacy |  | Diplomacy |  |
| Country | GetDominantLanguage |  | Language |  |
| Country | GetDynamicQuickDiplomaticActions |  | QuickDiplomaticActions |  |
| Country | GetEconomy |  | CEconomy |  |
| Country | GetEmploymentSystem |  | EmploymentSystem |  |
| Country | GetGovernment |  | Government |  |
| Country | GetHighestProgressRebel |  | Rebel |  |
| Country | GetLiturgicalDialect |  | Dialect |  |
| Country | GetLiturgicalLanguage |  | Language |  |
| Country | GetMilitaryStance |  | SubjectMilitaryStance |  |
| Country | GetMissionProgress |  | MissionProgress |  |
| Country | GetModifierTooltipContext | 1. unknown | CountryModifierWrap |  |
| Country | GetPlayerQuickDiplomaticActions |  | QuickDiplomaticActions |  |
| Country | GetPopulationChart |  | CountryPopulationChart |  |
| Country | GetQuickDiplomaticActions |  | QuickDiplomaticActions |  |
| Country | GetRank |  | CountryRank |  |
| Country | GetReligion |  | Religion |  |
| Country | GetReligiousSchool |  | ReligiousSchool |  |
| Country | GetScore |  | Score |  |
| Country | GetStaticModifier | 1. unknown | StaticModifier |  |
| Country | GetTimedModifierOwner |  | TimedModifierOwner |  |
| Country | GetWarLosses |  | WarLosses |  |
| Country | MakeScope |  | Scope |  |
| CountryCultureLateralView | GetCountry |  | Country |  |
| CountryCultureLateralView | GetCulture |  | Culture |  |
| CountryCultureLateralView | GetCultureSortSearch |  | FilteredSortedList |  |
| CountryCultureLateralView | GetPlayer |  | Country |  |
| CountryCultureLateralView | GetPopsPiechartWidget |  | PopsPiechartWidget |  |
| CountryCultureLateralView | GetWorkOfArtSortSearch |  | FilteredSortedList |  |
| CountryCultureLateralView | Manager |  | LateralView |  |
| CountryCultureLateralView | Vars |  | Context |  |
| CountryCultureLateralViewWorkOfArtItem | GetWorkOfArt |  | WorkOfArt |  |
| CountryDiplomaticItem | GetCountry |  | Country |  |
| CountryInteraction | MakeScope |  | Scope |  |
| CountryListOverview | GetCountriesSortSearch |  | FilteredSortedList |  |
| CountryMessage | GetFirstCountry |  | Country |  |
| CountryMessage | GetSecondCountry |  | Country |  |
| CountryPeopleLateralView | GetCharactersSortSearch |  | FilteredSortedList |  |
| CountryPeopleLateralView | GetDynastiesSortSearch |  | FilteredSortedList |  |
| CountryPeopleLateralView | GetPlayer |  | Country |  |
| CountryPeopleLateralView | GetPopsPiechartWidget |  | PopsPiechartWidget |  |
| CountryPeopleLateralView | GetPopsSortSearch |  | FilteredSortedList |  |
| CountryPeopleLateralView | GetRebelsSortSearch |  | FilteredSortedList |  |
| CountryPeopleLateralView | Manager |  | LateralView |  |
| CountryPeopleLateralView | Vars |  | Context |  |
| CountryPopulationChart | GetCountry |  | Country |  |
| CountryPopulationChart | GetPopsPiechartWidget |  | PopsPiechartWidget |  |
| CountryRank | MakeScope |  | Scope |  |
| CountryRankCandidate | GetCountryRank |  | CountryRank |  |
| CountryReligionLateralView | GetCanonizeAction |  | UIActionProvider |  |
| CountryReligionLateralView | GetCountry |  | Country |  |
| CountryReligionLateralView | GetCurrentReligiousFocus |  | ReligiousFocusGlue |  |
| CountryReligionLateralView | GetHolySitesSortSearch |  | FilteredSortedList |  |
| CountryReligionLateralView | GetPatriarchate |  | InternationalOrganization |  |
| CountryReligionLateralView | GetPlayer |  | Country |  |
| CountryReligionLateralView | GetReligion |  | Religion |  |
| CountryReligionLateralView | GetReligionSortSearch |  | FilteredSortedList |  |
| CountryReligionLateralView | Manager |  | LateralView |  |
| CountryReligionLateralView | Vars |  | Context |  |
| CreateCasusBelliMarker | GetCountry |  | Country |  |
| CreateCasusBelliMarker | GetLocation |  | Location |  |
| CreateSubjectsLateralView | GetPlayer |  | Country |  |
| CreateSubjectsLateralView | Manager |  | LateralView |  |
| CreateSubjectsLateralView | Vars |  | Context |  |
| Culture | GetCountriesList |  | QuickCultureCountryList |  |
| Culture | GetDialect |  | Dialect |  |
| Culture | GetDominantCountry |  | Country |  |
| Culture | GetLanguage |  | Language |  |
| Culture | MakeScope |  | Scope |  |
| CultureGroup | MakeScope |  | Scope |  |
| CultureItem | GetCulture |  | Culture |  |
| CulturesLedger | GetCultureItemsSortSearch |  | FilteredSortedList |  |
| CulturesLedger | GetPlayer |  | Country |  |
| CulturesLedger | Manager |  | LateralView |  |
| CulturesLedger | Vars |  | Context |  |
| CurrencyPriceWrap | GetCurrencyGameConceptType |  | GameConceptTooltip |  |
| CurrencyPriceWrap | GetPrice |  | PriceTooltipWrap |  |
| CurrentNeedsItem | GetGoods |  | Goods |  |
| CurrentNeedsItem | GetMarket |  | Market |  |
| CurrentReligiousFocus | GetReligiousFocus |  | ReligiousFocus |  |
| CurrentResearch | GetAdvance |  | Advance |  |
| CurryingFavorsMarker | GetCountry |  | Country |  |
| CurryingFavorsMarker | GetLocation |  | Location |  |
| DecalsEditorDecalInstancesList | AccessFilter |  | DecalsEditorSearchFilter |  |
| DecalsEditorDecalSetsList | AccessFilter |  | DecalsEditorSearchFilter |  |
| DeclareWarAlly | GetCountry |  | Country |  |
| DeclareWarLateralView | GetDeclareWarAction |  | UIActionProvider |  |
| DeclareWarLateralView | GetEnemyCountry |  | Country |  |
| DeclareWarLateralView | GetPlayer |  | Country |  |
| DeclareWarLateralView | GetPriceImpactFromWar |  | WarImpactWrap |  |
| DeclareWarLateralView | GetRecipient |  | Country |  |
| DeclareWarLateralView | GetSelectedWarGoal |  | WarGoal |  |
| DeclareWarLateralView | Manager |  | LateralView |  |
| DeclareWarLateralView | Vars |  | Context |  |
| DemandCategoryWrap | GetGoods |  | Goods |  |
| DemandsOnMarketWrap | GetGoods |  | Goods |  |
| DemandsOnMarketWrap | GetMarket |  | Market |  |
| DesertConnectionMarker | GetLocation |  | Location |  |
| Dialect | GetLanguage |  | Language |  |
| DiploAlert | GetCountry |  | Country |  |
| Diplomacy | GetCountry |  | Country |  |
| Diplomacy | GetHighestPrioritySpecialStatus | 1. unknown | SpecialStatus |  |
| Diplomacy | GetMarriageUnion |  | InternationalOrganization |  |
| Diplomacy | GetOverlord |  | Country |  |
| Diplomacy | GetRelation | 1. unknown | DiplomacyStatus |  |
| Diplomacy | GetSubjectType |  | SubjectType |  |
| Diplomacy | GetTopOverlord |  | Country |  |
| Diplomacy | GetTopOverlordOrThis |  | Country |  |
| Diplomacy | GetUnion |  | InternationalOrganization |  |
| DiplomacyDialog | GetCountry |  | Country |  |
| DiplomacyLateralView | GetCountriesSortSearch |  | FilteredSortedList |  |
| DiplomacyLateralView | GetDiplomaticRelationsSortSearch |  | FilteredSortedList |  |
| DiplomacyLateralView | GetOrgsSortSearch |  | FilteredSortedList |  |
| DiplomacyLateralView | GetPlayer |  | Country |  |
| DiplomacyLateralView | Manager |  | LateralView |  |
| DiplomacyLateralView | Vars |  | Context |  |
| DiplomacyMacrobuilderLateralView | GetDefaultCategory |  | DiplomaticActionCategory |  |
| DiplomacyMacrobuilderLateralView | GetDiploCategoriesSortSearch |  | FilteredSortedList |  |
| DiplomacyMacrobuilderLateralView | GetPlayer |  | Country |  |
| DiplomacyMacrobuilderLateralView | GetSelectedCountry |  | Country |  |
| DiplomacyMacrobuilderLateralView | Manager |  | LateralView |  |
| DiplomacyMacrobuilderLateralView | Vars |  | Context |  |
| DiplomacyMacrobuilderSelectCountry | Parent |  | DiplomacyMacrobuilderLateralView |  |
| DiplomacyStatus | GetWar |  | War |  |
| DiplomaticActionItem | GetRecipient |  | Country |  |
| Disaster | GetOwner |  | Country |  |
| Disaster | GetType |  | DisasterType |  |
| DisasterType | MakeScope |  | Scope |  |
| DisasterView | GetDisaster |  | Disaster |  |
| DisasterView | GetPlayer |  | Country |  |
| DisasterView | Manager |  | LateralView |  |
| DisasterView | Vars |  | Context |  |
| Disease | GetOrigin |  | Location |  |
| Disease | MakeScope |  | Scope |  |
| DiseaseOutbreak | GetDisease |  | Disease |  |
| DiseaseOutbreak | GetOrigin |  | Location |  |
| DiseaseOutbreak | MakeScope |  | Scope |  |
| DiseasesLateralView | GetPlayer |  | Country |  |
| DiseasesLateralView | GetPossibleDiseasesSortSearch |  | FilteredSortedList |  |
| DiseasesLateralView | Manager |  | LateralView |  |
| DiseasesLateralView | Vars |  | Context |  |
| DockableLayoutManager | AccessActiveLayout |  | DockableLayout |  |
| DockableLayoutManager | AccessLayoutSearchList |  | ToolPropertySearchList |  |
| DockableLayoutManager | AccessSelectedLayout |  | DockableLayout |  |
| DynastiesLedger | GetDynastyItemsSortSearch |  | FilteredSortedList |  |
| DynastiesLedger | GetPlayer |  | Country |  |
| DynastiesLedger | Manager |  | LateralView |  |
| DynastiesLedger | Vars |  | Context |  |
| Dynasty | GetDynastyFounder |  | Character |  |
| Dynasty | GetDynastyHead |  | Character |  |
| Dynasty | GetHome |  | Location |  |
| Dynasty | MakeScope |  | Scope |  |
| DynastyItem | GetDynasty |  | Dynasty |  |
| DynastyMarker | GetDynasty |  | Dynasty |  |
| DynastyMarker | GetLocation |  | Location |  |
| DynastyNodeItem | GetCharacter |  | Character |  |
| DynastyTreeView | GetAutocompleteFromKey | 1. unknown | Character |  |
| DynastyTreeView | GetDynasty |  | Dynasty |  |
| DynastyTreeView | GetPlayer |  | Country |  |
| DynastyTreeView | GetSearchBar |  | SearchBar |  |
| DynastyTreeView | Manager |  | LateralView |  |
| DynastyTreeView | Vars |  | Context |  |
| EconomyItem | GetMaintenanceSetting |  | MaintenanceSetting |  |
| EconomyItem | GetTaxRateSetting |  | TaxRateSetting |  |
| EconomyView | GetMaintenanceSetting | 1. unknown | MaintenanceSetting |  |
| EconomyView | GetPlayer |  | Country |  |
| EconomyView | Manager |  | LateralView |  |
| EconomyView | Vars |  | Context |  |
| EditorSettingsWindow | AccessActivePage |  | EditorSettingsPage |  |
| EmploymentSystem | MakeScope |  | Scope |  |
| Encyclopedia | AccessCurrentPage |  | EncyclopediaPage |  |
| Encyclopedia | GetAllPage |  | EncyclopediaPage |  |
| Encyclopedia | GetCurrentPage |  | EncyclopediaPage |  |
| EncyclopediaEntryView | Get |  | EncyclopediaEntry |  |
| EncyclopediaLateralView | GetPlayer |  | Country |  |
| EncyclopediaLateralView | Manager |  | LateralView |  |
| EncyclopediaLateralView | Vars |  | Context |  |
| EntityDesigner | AccessUndoer |  | UndoStack |  |
| EntityEditor | Entity |  | ViewerEntity |  |
| Estate | GetCountry |  | Country |  |
| Estate | GetRebel |  | Rebel |  |
| Estate | GetType |  | EstateType |  |
| Estate | MakeScope |  | Scope |  |
| EstateOpinionWrap | GetCountry |  | Country |  |
| EstateOpinionWrap | GetEstate |  | Estate |  |
| EstateOpinionWrap | GetEstateType |  | EstateType |  |
| EstateOpinionWrap | GetTarget |  | Country |  |
| EstatePrivilege | GetType |  | EstateType |  |
| EstateType | MakeScope |  | Scope |  |
| EstatesItem | GetEstate |  | Estate |  |
| Ethnicity | MakeScope |  | Scope |  |
| EventTargetSetupContext | AccessVariableLists |  | VariableListStore |  |
| EventTargetSetupContext | AccessVariables |  | VariableStore |  |
| EventWindow | AccessOptionItemWithKey | 1. unknown | EventOption |  |
| EventWindow | GetFirstCharacter |  | Character |  |
| EventWindow | GetLockableInfo |  | LockableInfo |  |
| EventWindow | GetSecondCharacter |  | Character |  |
| ExpandRawGoodsLateralView | GetBestExpandingLocationItem |  | RawGoodLocationItem |  |
| ExpandRawGoodsLateralView | GetExpandRankingItems |  | ConstructScoreRanking |  |
| ExpandRawGoodsLateralView | GetLastExpandingLocationItem |  | RawGoodLocationItem |  |
| ExpandRawGoodsLateralView | GetPlayer |  | Country |  |
| ExpandRawGoodsLateralView | GetRawGoodLocationsSortSearch |  | FilteredSortedList |  |
| ExpandRawGoodsLateralView | GetSelectedLocation |  | Location |  |
| ExpandRawGoodsLateralView | GetSelectedMarket |  | Market |  |
| ExpandRawGoodsLateralView | Manager |  | LateralView |  |
| ExpandRawGoodsLateralView | Vars |  | Context |  |
| ExpandRawGoodsSelectMarket | Parent |  | ExpandRawGoodsLateralView |  |
| ExpansionLateralView | GetColonialChartersSortSearch |  | FilteredSortedList |  |
| ExpansionLateralView | GetExplorationsSortSearch |  | FilteredSortedList |  |
| ExpansionLateralView | GetPlayer |  | Country |  |
| ExpansionLateralView | GetProvincesSortSearch |  | FilteredSortedList |  |
| ExpansionLateralView | Manager |  | LateralView |  |
| ExpansionLateralView | Vars |  | Context |  |
| Exploration | GetArea |  | Area |  |
| Exploration | GetCharacter |  | Character |  |
| Exploration | GetLocation |  | Location |  |
| Exploration | GetOwner |  | Country |  |
| Exploration | MakeScope |  | Scope |  |
| ExtraTooltipInfo | GetSectionIndex | 1. unknown | SectionIndex |  |
| ExtraTooltipInfo | GetTooltiped |  | PdxGuiWidget |  |
| ExtraTooltipInfo | GetUIAction |  | UIAction |  |
| FilteredSortedList | GetSearchBar |  | SearchBar |  |
| FilteredSortedList | GetSortKeyButton | 1. unknown | SortKey |  |
| FilteredSortedList | WithFilterTags | 1. unknown | FilteredSortedList |  |
| FoodLocationItem | GetBuildingsUIAction |  | UIActionProvider |  |
| FoodLocationItem | GetGoods |  | Goods |  |
| FoodLocationItem | GetLocation |  | Location |  |
| FoodLocationItem | GetUpgradeRGOConstructionDemand |  | GoodsDemand |  |
| FoodProductionLateralView | GetFoodProductionListSortSearch |  | FilteredSortedList |  |
| FoodProductionLateralView | GetPlayer |  | Country |  |
| FoodProductionLateralView | GetSelectedMarket |  | Market |  |
| FoodProductionLateralView | GetSelectedProvince |  | Province |  |
| FoodProductionLateralView | Manager |  | LateralView |  |
| FoodProductionLateralView | Vars |  | Context |  |
| FoodProductionListItem | AccessLocationItem |  | FoodLocationItem |  |
| FoodProductionListItem | AccessProvinceItem |  | FoodProvinceItem |  |
| FoodProductionSelectMarket | Parent |  | FoodProductionLateralView |  |
| FoodProvinceItem | GetProvince |  | Province |  |
| ForeignBuildingLocationItem | GetLocation |  | Location |  |
| ForeignCountrySelectCountry | Parent |  | ForeignCountryView |  |
| ForeignCountryView | GetCharactersSortSearch |  | FilteredSortedList |  |
| ForeignCountryView | GetCountry |  | Country |  |
| ForeignCountryView | GetCountryPointer |  | Country |  |
| ForeignCountryView | GetDefaultCategory |  | DiplomaticActionCategory |  |
| ForeignCountryView | GetDiploCategoriesSortSearch |  | FilteredSortedList |  |
| ForeignCountryView | GetDiplomaticAction | 1. unknown | DiplomaticActionItem |  |
| ForeignCountryView | GetDiplomaticRelationsSortSearch |  | FilteredSortedList |  |
| ForeignCountryView | GetHeirSelection |  | HeirSelectionCandidate |  |
| ForeignCountryView | GetPlayer |  | Country |  |
| ForeignCountryView | GetRelativePowerTooltipGlue |  | RelativePowerTooltipGlue |  |
| ForeignCountryView | GetRulerTermEntriesSortSearch |  | FilteredSortedList |  |
| ForeignCountryView | GetWarUIAction |  | UIActionProvider |  |
| ForeignCountryView | Manager |  | LateralView |  |
| ForeignCountryView | Vars |  | Context |  |
| FormNewCountry | GetCandidatesSortSearch |  | FilteredSortedList |  |
| FormNewCountry | GetNextRankCandidate |  | CountryRankCandidate |  |
| FormableCountry | GetOrCreateCoatOfArms | 1. unknown | CoatOfArmsWrapper |  |
| FormableCountry | MakeScope |  | Scope |  |
| FormattedTooltipWrap | GetEstate |  | Estate |  |
| FortFlipRestoreMarker | GetLocation |  | Location |  |
| FortMarker | GetLocation |  | Location |  |
| FortMarker | GetSiege |  | Siege |  |
| FrontEndMainView | AccessMarketingContainer |  | MarketingContainer |  |
| FrontEndMainView | GetLatestPlaythrough |  | PlaythroughItem |  |
| FrontEndSinglePlayerView | GetSelectedProficiency |  | PlayerProficiency |  |
| FrontEndSinglePlayerView | GetSelectedScenario |  | Scenario |  |
| FrontEndView | AccessMarketingContainer |  | MarketingContainer |  |
| GUIAchievement | GetAchievement |  | Achievement |  |
| GameLobby | GetDiplomaticRelationsSortSearch |  | FilteredSortedList |  |
| GameLobby | GetSelectedCountry |  | Country |  |
| GameLobby | GetUniqueContentCategoriesSortSearch |  | FilteredSortedList |  |
| GameLobby | GetUniqueContentDescription |  | UniqueContentDescription |  |
| GameLobby | Vars |  | Context |  |
| GenericAction | MakeScope |  | Scope |  |
| GeographyGlue | GetGeography |  | InteractionTarget |  |
| God | MakeScope |  | Scope |  |
| GodWithReligionWrap | GetGod |  | God |  |
| GodWithReligionWrap | GetReligion |  | Religion |  |
| GoodItem | GetGoods |  | Goods |  |
| Goods | MakeScope |  | Scope |  |
| GoodsDemand | GetCategory |  | DemandCategory |  |
| GoodsDemand | MakeScope |  | Scope |  |
| GoodsDemandEntry | GetGoods |  | Goods |  |
| GoodsDetailsLateralView | GetGoods |  | Goods |  |
| GoodsDetailsLateralView | GetGoodsInMarketsSortSearch |  | FilteredSortedList |  |
| GoodsDetailsLateralView | GetPlayer |  | Country |  |
| GoodsDetailsLateralView | GetSourcesSortSearch |  | FilteredSortedList |  |
| GoodsDetailsLateralView | Manager |  | LateralView |  |
| GoodsDetailsLateralView | Vars |  | Context |  |
| GoodsInMarket | GetGoods |  | Goods |  |
| GoodsInMarket | GetGoodsMarketEntry |  | GoodsMarketEntry |  |
| GoodsInMarket | GetMarket |  | Market |  |
| GoodsItem | GetBiggestMarket |  | Market |  |
| GoodsItem | GetGoods |  | Goods |  |
| GoodsMarketEntry | GetGoods |  | Goods |  |
| GoodsMarketEntry | GetMarket |  | Market |  |
| GoodsMessage | GetGoods |  | Goods |  |
| GoodsOnMarketWrap | GetMarket |  | Market |  |
| GoodsPriceOnMarketWrap | GetGoods |  | Goods |  |
| GoodsPriceOnMarketWrap | GetGoodsMarketEntry |  | GoodsMarketEntry |  |
| GoodsPriceOnMarketWrap | GetMarket |  | Market |  |
| GoodsProductionLateralView | GetPlayer |  | Country |  |
| GoodsProductionLateralView | GetRawGoodsSortSearch |  | FilteredSortedList |  |
| GoodsProductionLateralView | GetSelectedMarket |  | Market |  |
| GoodsProductionLateralView | Manager |  | LateralView |  |
| GoodsProductionLateralView | Vars |  | Context |  |
| GoodsProductionSelectMarket | Parent |  | GoodsProductionLateralView |  |
| GoodsSellPriceWrap | GetGoods |  | Goods |  |
| GoodsSourceItem | GetGoods |  | Goods |  |
| GoodsSourceItem | GetLocation |  | Location |  |
| GoodsView | GetGoodsItemsSortSearch |  | FilteredSortedList |  |
| GoodsView | GetPlayer |  | Country |  |
| GoodsView | Manager |  | LateralView |  |
| GoodsView | Vars |  | Context |  |
| GovReformOutlinerEntry | GetReformItem |  | ReformItem |  |
| Government | CalcBestRepresentativeForPlaystyle | 1. unknown | Character |  |
| Government | GetActiveRegent |  | Character |  |
| Government | GetBestHeirCandidateFor | 1. unknown | Character |  |
| Government | GetConsort |  | Character |  |
| Government | GetEstate | 1. unknown | Estate |  |
| Government | GetEstateFromKey | 1. EstateKey | Estate |  |
| Government | GetGovernmentType |  | GovernmentType |  |
| Government | GetHeir |  | Character |  |
| Government | GetHeirSelection |  | HeirSelection |  |
| Government | GetImplementedPolicyForLaw | 1. unknown | ImplementedPolicy |  |
| Government | GetParliament |  | Parliament |  |
| Government | GetPolicyForLaw | 1. unknown | Policy |  |
| Government | GetPreviousRuler |  | Character |  |
| Government | GetRegencyType |  | RegencyType |  |
| Government | GetRuler |  | Character |  |
| Government | GetRulerOrHeirIfRegent |  | Character |  |
| Government | GetRulerOrRegent |  | Character |  |
| GovernmentReform | GetAge |  | Age |  |
| GovernmentReform | GetGovernmentType |  | GovernmentType |  |
| GovernmentReformItem | GetReform |  | GovernmentReform |  |
| GovernmentReformItem | GetUIAction |  | UIActionProvider |  |
| GovernmentReformsLateralView | GetPlayer |  | Country |  |
| GovernmentReformsLateralView | GetReformsSortSearch |  | FilteredSortedList |  |
| GovernmentReformsLateralView | Manager |  | LateralView |  |
| GovernmentReformsLateralView | Vars |  | Context |  |
| GovernmentType | MakeScope |  | Scope |  |
| GovernmentView | GetCountry |  | Country |  |
| GovernmentView | GetHeirSelection |  | HeirSelectionCandidate |  |
| GovernmentView | GetLawCategoriesSortSearch |  | FilteredSortedList |  |
| GovernmentView | GetModifiersSortSearch |  | FilteredSortedList |  |
| GovernmentView | GetPlayer |  | Country |  |
| GovernmentView | Manager |  | LateralView |  |
| GovernmentView | Vars |  | Context |  |
| GraphPanel | AccessAnimationEditorSearch |  | NodeEditorSearch |  |
| GraphPanel | AccessMetadataWindow |  | MetadataWindow |  |
| GraphPanel | GetMetadataWindow |  | MetadataWindow |  |
| GreatPowerItem | GetCountry |  | Country |  |
| GroupItem | GetButtonAction |  | UIActionProvider |  |
| GroupItem | GetCharacter |  | Character |  |
| GroupItem | GetCountry |  | Country |  |
| GroupItem | GetInternationalOrganization |  | InternationalOrganization |  |
| GuiGameRule | GetRule |  | GameRule |  |
| GuiGameRule | GetSetting |  | GameRuleSetting |  |
| GuiGameRulePreset | GetSettingForRule | 1. unknown | GameRuleSetting |  |
| Hegemony | MakeScope |  | Scope |  |
| HeirSelection | MakeScope |  | Scope |  |
| HeirSelectionCandidate | GetBestHeirCandidate |  | HeirSelectionValue |  |
| HeirSelectionCandidate | GetHeirSelection |  | HeirSelection |  |
| HeirSelectionCandidate | GetSelectAction |  | UIActionProvider |  |
| HeirSelectionValue | GetHeir |  | Character |  |
| HintsLateralView | GetHintsSortSearch |  | FilteredSortedList |  |
| HintsLateralView | GetPlayer |  | Country |  |
| HintsLateralView | Manager |  | LateralView |  |
| HintsLateralView | Vars |  | Context |  |
| HistoricalScoreItem | GetHistoricalScore |  | HistoricalScore |  |
| HolySite | GetLocation |  | Location |  |
| HolySite | GetType |  | HolySiteType |  |
| HolySite | MakeScope |  | Scope |  |
| HolySiteDefinition | MakeScope |  | Scope |  |
| HolySiteGlue | GetHolySite |  | HolySite |  |
| HolySiteType | MakeScope |  | Scope |  |
| ImplementedCabinetAction | GetAction |  | CabinetAction |  |
| ImplementedEstatePrivilege | GetEstatePrivilege |  | EstatePrivilege |  |
| ImplementedGovernmentReform | GetReform |  | GovernmentReform |  |
| ImplementedPolicy | GetPolicy |  | Policy |  |
| ImportExportLateralView | GetBestDealMarket |  | Market |  |
| ImportExportLateralView | GetGoods |  | Goods |  |
| ImportExportLateralView | GetItemsSortSearch |  | FilteredSortedList |  |
| ImportExportLateralView | GetMarket |  | Market |  |
| ImportExportLateralView | GetPlayer |  | Country |  |
| ImportExportLateralView | Manager |  | LateralView |  |
| ImportExportLateralView | Vars |  | Context |  |
| ImportExportMarker | GetLocation |  | Location |  |
| ImportExportMarker | GetPossibleItem |  | PossibleItem |  |
| ImportantCultureItem | GetCulture |  | Culture |  |
| ImportantReligionItem | GetReligion |  | Religion |  |
| ImproveOpinionMarker | GetCountry |  | Country |  |
| ImproveOpinionMarker | GetLocation |  | Location |  |
| InGameMissionTaskItem | GetTask |  | MissionTaskDefinition |  |
| InGameTopbar | AccessAlertManager |  | AlertManager |  |
| InGameTopbar | AccessControlGroups |  | ControlGroupsView |  |
| InGameTopbar | GetCurrentAdvanceUIAction |  | UIActionProvider |  |
| InGameTopbar | GetPlayer |  | Country |  |
| Institution | GetAge |  | Age |  |
| Institution | GetOrigin |  | Location |  |
| Institution | MakeScope |  | Scope |  |
| InstitutionItem | GetInstitution |  | Institution |  |
| InstitutionItem | GetUIAction |  | UIActionProvider |  |
| InstitutionMessage | GetInstitution |  | Institution |  |
| InteractionTarget | AccessUnit |  | Unit |  |
| InteractionTarget | GetActiveResolution |  | ActiveResolution |  |
| InteractionTarget | GetAdvanceType |  | AdvanceDefinition |  |
| InteractionTarget | GetAge |  | Age |  |
| InteractionTarget | GetArea |  | Area |  |
| InteractionTarget | GetArtist |  | Artist |  |
| InteractionTarget | GetAvatar |  | Avatar |  |
| InteractionTarget | GetBuilding |  | Building |  |
| InteractionTarget | GetBuildingType |  | BuildingType |  |
| InteractionTarget | GetCabinet |  | Cabinet |  |
| InteractionTarget | GetCabinetAction |  | CabinetAction |  |
| InteractionTarget | GetCardinal |  | Cardinal |  |
| InteractionTarget | GetCasusBelli |  | CasusBelli |  |
| InteractionTarget | GetCharacter |  | Character |  |
| InteractionTarget | GetCharacterInteraction |  | CharacterInteraction |  |
| InteractionTarget | GetChildEducation |  | ChildEducation |  |
| InteractionTarget | GetClimate |  | Climate |  |
| InteractionTarget | GetColonialCharter |  | ColonialCharter |  |
| InteractionTarget | GetCombat |  | Combat |  |
| InteractionTarget | GetCombatSide |  | CombatSide |  |
| InteractionTarget | GetContinent |  | Continent |  |
| InteractionTarget | GetCountry |  | Country |  |
| InteractionTarget | GetCountryInteraction |  | CountryInteraction |  |
| InteractionTarget | GetCountryRank |  | CountryRank |  |
| InteractionTarget | GetCulture |  | Culture |  |
| InteractionTarget | GetCultureGroup |  | CultureGroup |  |
| InteractionTarget | GetDialect |  | Dialect |  |
| InteractionTarget | GetDisaster |  | Disaster |  |
| InteractionTarget | GetDisasterType |  | DisasterType |  |
| InteractionTarget | GetDisease |  | Disease |  |
| InteractionTarget | GetDiseaseOutbreak |  | DiseaseOutbreak |  |
| InteractionTarget | GetDynasty |  | Dynasty |  |
| InteractionTarget | GetEmploymentSystem |  | EmploymentSystem |  |
| InteractionTarget | GetEstate |  | Estate |  |
| InteractionTarget | GetEstatePrivilege |  | EstatePrivilege |  |
| InteractionTarget | GetEstateType |  | EstateType |  |
| InteractionTarget | GetEthnicity |  | Ethnicity |  |
| InteractionTarget | GetExploration |  | Exploration |  |
| InteractionTarget | GetFormableCountry |  | FormableCountry |  |
| InteractionTarget | GetGenericAction |  | GenericAction |  |
| InteractionTarget | GetGod |  | God |  |
| InteractionTarget | GetGoods |  | Goods |  |
| InteractionTarget | GetGoodsDemand |  | GoodsDemand |  |
| InteractionTarget | GetGovernmentReform |  | GovernmentReform |  |
| InteractionTarget | GetGovernmentType |  | GovernmentType |  |
| InteractionTarget | GetGraphicalCultureType |  | GraphicalCultureType |  |
| InteractionTarget | GetHegemony |  | Hegemony |  |
| InteractionTarget | GetHeirSelection |  | HeirSelection |  |
| InteractionTarget | GetHolySite |  | HolySite |  |
| InteractionTarget | GetHolySiteDefinition |  | HolySiteDefinition |  |
| InteractionTarget | GetHolySiteType |  | HolySiteType |  |
| InteractionTarget | GetInstitution |  | Institution |  |
| InteractionTarget | GetInternationalOrganization |  | InternationalOrganization |  |
| InteractionTarget | GetInternationalOrganizationType |  | InternationalOrganizationType |  |
| InteractionTarget | GetLandOwnershipRule |  | LandOwnershipRule |  |
| InteractionTarget | GetLanguage |  | Language |  |
| InteractionTarget | GetLaw |  | Law |  |
| InteractionTarget | GetLevySetup |  | LevySetup |  |
| InteractionTarget | GetLoan |  | Loan |  |
| InteractionTarget | GetLocation |  | Location |  |
| InteractionTarget | GetLocationRank |  | LocationRank |  |
| InteractionTarget | GetMarket |  | Market |  |
| InteractionTarget | GetMercenary |  | Mercenary |  |
| InteractionTarget | GetMissionDefinition |  | MissionDefinition |  |
| InteractionTarget | GetMissionTaskDefinition |  | MissionTaskDefinition |  |
| InteractionTarget | GetParliamentAgenda |  | ParliamentAgenda |  |
| InteractionTarget | GetParliamentIssue |  | ParliamentIssue |  |
| InteractionTarget | GetParliamentType |  | ParliamentType |  |
| InteractionTarget | GetPayment |  | Payment |  |
| InteractionTarget | GetPolicy |  | Policy |  |
| InteractionTarget | GetPop |  | Pop |  |
| InteractionTarget | GetPopType |  | PopType |  |
| InteractionTarget | GetPrice |  | Price |  |
| InteractionTarget | GetPrivateer |  | Privateer |  |
| InteractionTarget | GetProductionMethod |  | ProductionMethod |  |
| InteractionTarget | GetProvince |  | Province |  |
| InteractionTarget | GetProvinceDefinition |  | ProvinceDefinition |  |
| InteractionTarget | GetRebel |  | Rebel |  |
| InteractionTarget | GetRecruitmentMethod |  | RecruitmentMethod |  |
| InteractionTarget | GetRegencyType |  | RegencyType |  |
| InteractionTarget | GetRegion |  | Region |  |
| InteractionTarget | GetRelationType |  | ScriptedRelationType |  |
| InteractionTarget | GetReligion |  | Religion |  |
| InteractionTarget | GetReligionGroup |  | ReligionGroup |  |
| InteractionTarget | GetReligiousAspect |  | ReligiousAspect |  |
| InteractionTarget | GetReligiousFaction |  | ReligiousFaction |  |
| InteractionTarget | GetReligiousFigure |  | ReligiousFigure |  |
| InteractionTarget | GetReligiousFocus |  | ReligiousFocus |  |
| InteractionTarget | GetReligiousSchool |  | ReligiousSchool |  |
| InteractionTarget | GetResolution |  | Resolution |  |
| InteractionTarget | GetRoadType |  | RoadType |  |
| InteractionTarget | GetScopeObjectReference |  | Scope |  |
| InteractionTarget | GetScriptableHintDefinition |  | ScriptableHintDefinition |  |
| InteractionTarget | GetScriptedPeaceTreatyType |  | ScriptedPeaceTreatyType |  |
| InteractionTarget | GetSiege |  | Siege |  |
| InteractionTarget | GetSituation |  | Situation |  |
| InteractionTarget | GetSocietalValue |  | SocietalValue |  |
| InteractionTarget | GetSpecialStatus |  | SpecialStatus |  |
| InteractionTarget | GetSubContinent |  | SubContinent |  |
| InteractionTarget | GetSubUnit |  | SubUnit |  |
| InteractionTarget | GetSubUnitCategory |  | SubUnitCategory |  |
| InteractionTarget | GetSubjectMilitaryStance |  | SubjectMilitaryStance |  |
| InteractionTarget | GetSubjectType |  | SubjectType |  |
| InteractionTarget | GetTopography |  | Topography |  |
| InteractionTarget | GetTrade |  | Trade |  |
| InteractionTarget | GetTrait |  | Trait |  |
| InteractionTarget | GetUnit |  | Unit |  |
| InteractionTarget | GetUnitAbility |  | UnitAbility |  |
| InteractionTarget | GetUnitType |  | SubUnitType |  |
| InteractionTarget | GetVegetation |  | Vegetation |  |
| InteractionTarget | GetWar |  | War |  |
| InteractionTarget | GetWeatherSystem |  | WeatherSystem |  |
| InteractionTarget | GetWorkOfArt |  | WorkOfArt |  |
| InteractionTarget | GetWorkOfArtType |  | WorkOfArtType |  |
| InternationalOrganization | GetActiveResolution | 1. unknown | ActiveResolution |  |
| InternationalOrganization | GetActiveResolutionFromKey | 1. unknown | ActiveResolution |  |
| InternationalOrganization | GetCountryOrderedByGreatPowerScore | 1. unknown | Country |  |
| InternationalOrganization | GetCountryWithHighestGreatPower |  | Country |  |
| InternationalOrganization | GetCountryWithHighestGreatPowerScoreWithSpecialStatus | 1. unknown | Country |  |
| InternationalOrganization | GetImplementedPolicyForLaw | 1. unknown | ImplementedPolicy |  |
| InternationalOrganization | GetLeaderCountry |  | Country |  |
| InternationalOrganization | GetLeaderScopeObjectAtIndex | 1. unknown | Scope |  |
| InternationalOrganization | GetLeadershipElectionResolution |  | Resolution |  |
| InternationalOrganization | GetParliament |  | Parliament |  |
| InternationalOrganization | GetPolicyForLaw | 1. unknown | Policy |  |
| InternationalOrganization | GetReligion |  | Religion |  |
| InternationalOrganization | GetSeat |  | Location |  |
| InternationalOrganization | GetSpecialStatus | 1. unknown | SpecialStatus |  |
| InternationalOrganization | GetTarget |  | Country |  |
| InternationalOrganization | GetTimedModifierOwner |  | TimedModifierOwner |  |
| InternationalOrganization | GetType |  | InternationalOrganizationType |  |
| InternationalOrganization | GetVariableSpec | 1. unknown | InternationalOrganizationTypeVariable |  |
| InternationalOrganization | MakeScope |  | Scope |  |
| InternationalOrganizationMessagePopup | GetCountry |  | Country |  |
| InternationalOrganizationMessagePopup | GetInternationalOrganization |  | InternationalOrganization |  |
| InternationalOrganizationType | GetLandOwnershipRule |  | LandOwnershipRule |  |
| InternationalOrganizationType | MakeScope |  | Scope |  |
| InternationalOrganizationTypeView | GetInternationalOrganizationType |  | InternationalOrganizationType |  |
| InternationalOrganizationTypeView | GetPlayer |  | Country |  |
| InternationalOrganizationTypeView | Manager |  | LateralView |  |
| InternationalOrganizationTypeView | Vars |  | Context |  |
| InternationalOrganizationsView | GetFavoriteForVoter | 1. unknown | Country |  |
| InternationalOrganizationsView | GetHolySitesSortSearch |  | FilteredSortedList |  |
| InternationalOrganizationsView | GetInternationalOrganization |  | InternationalOrganization |  |
| InternationalOrganizationsView | GetLawCategoriesSortSearch |  | FilteredSortedList |  |
| InternationalOrganizationsView | GetMembersSortSearch |  | FilteredSortedList |  |
| InternationalOrganizationsView | GetPlayer |  | Country |  |
| InternationalOrganizationsView | GetSaintsSortSearch |  | FilteredSortedList |  |
| InternationalOrganizationsView | GetSpecialMembersSortSearch |  | FilteredSortedList |  |
| InternationalOrganizationsView | GetSpecialStatusCountry | 1. unknown | Country |  |
| InternationalOrganizationsView | Manager |  | LateralView |  |
| InternationalOrganizationsView | Vars |  | Context |  |
| JominiGameRules | AccessNamedGameRule | 1. unknown | GuiGameRule |  |
| JominiGameRules | GetSelectedPreset |  | GuiGameRulePreset |  |
| JominiLoadWindow | AccessLatestPlaythrough |  | PlaythroughItem |  |
| JominiNotification | GetDate |  | Date |  |
| JominiNotification | SetupDataContexts | 1. unknown | NotificationDummyContext |  |
| JominiSettingsWindow | AccessActivePage |  | SettingsPage |  |
| LackingGoodsForRepairEntry | GetMarket |  | Market |  |
| LandOwnershipRule | MakeScope |  | Scope |  |
| Language | GetFamily |  | LanguageFamily |  |
| Language | MakeScope |  | Scope |  |
| LanguageFamily | MakeScope |  | Scope |  |
| LateralView | Vars |  | Context |  |
| Law | MakeScope |  | Scope |  |
| LawWithContextWrap | GetInternationalOrganization |  | InternationalOrganization |  |
| LawWithContextWrap | GetLaw |  | Law |  |
| LayerTreeItem | GetEntry |  | Type |  |
| LeaderCandidate | GetCandidate |  | Country |  |
| LevySetup | GetUnit |  | SubUnitType |  |
| LevySetup | MakeScope |  | Scope |  |
| Loan | GetBorrower |  | Country |  |
| Loan | GetLender |  | Country |  |
| Loan | MakeScope |  | Scope |  |
| LoanEntry | GetLoan |  | Loan |  |
| LoanEntry | GetRepayLoanUIAction |  | UIActionProvider |  |
| LobbyPlayer | GetLobbyView |  | LobbyView |  |
| LobbyPlayer | GetPlayable |  | Playable |  |
| LobbyView | AccessLocalPlayer |  | LobbyPlayer |  |
| LobbyView | AccessSelectedPlayable |  | Playable |  |
| LobbyView | GetSelectedPlayable |  | Playable |  |
| LobbyView | GetServerInfo |  | ServerInformation |  |
| Location | GetArea |  | Area |  |
| Location | GetBestFortBuilding |  | Building |  |
| Location | GetClimate |  | Climate |  |
| Location | GetClosestPort |  | Location |  |
| Location | GetCombat |  | Combat |  |
| Location | GetContinent |  | Continent |  |
| Location | GetController |  | Country |  |
| Location | GetDiseaseOutbreak | 1. unknown | DiseaseOutbreak |  |
| Location | GetDominantCulture |  | Culture |  |
| Location | GetDominantDialect |  | Dialect |  |
| Location | GetDominantLanguage |  | Language |  |
| Location | GetDominantReligion |  | Religion |  |
| Location | GetListOfCountries |  | CountryListFromLocation |  |
| Location | GetLocation |  | Location |  |
| Location | GetMaritime |  | Maritime |  |
| Location | GetMarket |  | Market |  |
| Location | GetOwner |  | Country |  |
| Location | GetOwnerForMap |  | Country |  |
| Location | GetPopulation |  | Population |  |
| Location | GetPopulationChart |  | LocationPopulationChart |  |
| Location | GetPortSeaZone |  | Location |  |
| Location | GetProvince |  | Province |  |
| Location | GetProvinceDefinition |  | ProvinceDefinition |  |
| Location | GetQuickRebelLocationList |  | QuickRebelLocationList |  |
| Location | GetRank |  | LocationRank |  |
| Location | GetRawMaterial |  | Goods |  |
| Location | GetRegion |  | Region |  |
| Location | GetSiege |  | Siege |  |
| Location | GetSoundTollController |  | Location |  |
| Location | GetSpecificBaseModifier |  | StaticModifier |  |
| Location | GetSubContinent |  | SubContinent |  |
| Location | GetSupplyDepot |  | SupplyDepot |  |
| Location | GetTimedModifierOwner |  | TimedModifierOwner |  |
| Location | GetTopography |  | Topography |  |
| Location | GetUpgradeRGOConstructionDemand |  | GoodsDemand |  |
| Location | GetVegetation |  | Vegetation |  |
| Location | MakeScope |  | Scope |  |
| LocationBuildingItem | GetBuilding |  | Building |  |
| LocationBuildingItem | GetConstruction |  | Construction |  |
| LocationBuildingItem | GetRoadType |  | RoadType |  |
| LocationItem | GetLocation |  | Location |  |
| LocationPopItem | GetLocation |  | Location |  |
| LocationPopItem | GetType |  | PopType |  |
| LocationPopPieChartTooltipWidget | GetLocation |  | Location |  |
| LocationPopulationChart | GetPopsPiechartWidget |  | PopsPiechartWidget |  |
| LocationRank | MakeScope |  | Scope |  |
| LocationReference | GetLocation |  | Location |  |
| LocationToBuildItem | GetBuilding |  | Building |  |
| LocationToBuildItem | GetBuildingType |  | BuildingType |  |
| LocationToBuildItem | GetDequeueUIAction |  | UIActionProvider |  |
| LocationToBuildItem | GetLocation |  | Location |  |
| LocationToRecruitItem | GetConstruction |  | Construction |  |
| LocationToRecruitItem | GetLocation |  | Location |  |
| LocationToRecruitItem | GetMercenary |  | Mercenary |  |
| LocationToRecruitItem | GetUnitType |  | SubUnitType |  |
| LocationView | GetColonialCharter |  | ColonialCharterItem |  |
| LocationView | GetForeignCountry |  | Country |  |
| LocationView | GetHigherPresenceDisease |  | Disease |  |
| LocationView | GetLocation |  | Location |  |
| LocationView | GetPlayer |  | Country |  |
| LocationView | GetPopTypeItem | 1. unknown | LocationPopItem |  |
| LocationView | GetRaisingArmyLevies |  | Construction |  |
| LocationView | GetRaisingNavyLevies |  | Construction |  |
| LocationView | GetRankUIAction |  | UIActionProvider |  |
| LocationView | GetRenameUIClickAction |  | UIClickAction |  |
| LocationView | GetUpgradeRGOConstructionDemand |  | GoodsDemand |  |
| LocationView | Manager |  | LateralView |  |
| LocationView | Vars |  | Context |  |
| LocationViewSelectProvince | Parent |  | LocationView |  |
| LocationsListView | GetLocationsListSortSearch |  | FilteredSortedList |  |
| LocationsListView | GetPlayer |  | Country |  |
| LocationsListView | Manager |  | LateralView |  |
| LocationsListView | Vars |  | Context |  |
| LocationsListViewItem | GetLocation |  | Location |  |
| LogViewer | GetLastLogEntry |  | LogViewerEntry |  |
| LogViewer | GetSelectedLogEntry |  | LogViewerEntry |  |
| MaintenanceSetting | GetSettingOwner |  | Country |  |
| ManageSubjectsLateralView | GetPlayer |  | Country |  |
| ManageSubjectsLateralView | GetSubjectRelationsSortSearch |  | FilteredSortedList |  |
| ManageSubjectsLateralView | Manager |  | LateralView |  |
| ManageSubjectsLateralView | Vars |  | Context |  |
| MapContentEditorViewport | GetTooltip |  | GuiEditorTooltip |  |
| MapEditor | AccessUndoHistoryViewerClient |  | UndoHistoryViewerClient |  |
| MapEditor | GetUndoHistoryViewerClient |  | UndoHistoryViewerClient |  |
| MapEditorGui | AccessLogViewer |  | LogViewer | Access Central Log Viewer |
| MapObjectPainterOptions | AccessBlurThresholdCtx |  | BlurThreshold |  |
| MapObjectTool | GetTooltip |  | GuiEditorTooltip |  |
| MapObjectTool | MoveTool |  | MoveTool |  |
| MapObjectTool | SelectTool |  | SelectTool |  |
| Maritime | GetLocation |  | Location |  |
| MaritimeInLocationWrap | GetCountry |  | Country |  |
| MaritimeInLocationWrap | GetLocation |  | Location |  |
| MaritimeInLocationWrap | GetPresence |  | MaritimePresence |  |
| MaritimeItem | GetPresence |  | MaritimePresence |  |
| MaritimeItem | GetSeaZone |  | Location |  |
| MaritimeLateralView | GetPlayer |  | Country |  |
| MaritimeLateralView | GetPrivateersSortSearch |  | FilteredSortedList |  |
| MaritimeLateralView | GetSeazonesSortSearch |  | FilteredSortedList |  |
| MaritimeLateralView | Manager |  | LateralView |  |
| MaritimeLateralView | Vars |  | Context |  |
| MaritimePresence | GetCountry |  | Country |  |
| MaritimePresence | GetOwner |  | Maritime |  |
| Market | GetCenterLocation |  | Location |  |
| Market | GetGoodsWithHighestSupplyAndValue |  | Goods |  |
| Market | GetLanguage |  | Language |  |
| Market | GetMarketEntry | 1. unknown | GoodsMarketEntry |  |
| Market | GetOwner |  | Country |  |
| Market | MakeScope |  | Scope |  |
| MarketAccessWrap | GetLocation |  | Location |  |
| MarketAccessWrap | GetMarket |  | Market |  |
| MarketCountryNeeds | AccessMarket |  | Market |  |
| MarketCountryNeeds | GetMarket |  | Market |  |
| MarketMarker | GetLocation |  | Location |  |
| MarketViewSelectMarket | Parent |  | SelectedMarketLateralView |  |
| MarketingContainer | AccessSlotByName | 1. unknown | MarketingSlot |  |
| MarketingContainer | GetSlotByName | 1. unknown | MarketingSlot |  |
| MarketsView | GetMarketsItemsSortSearch |  | FilteredSortedList |  |
| MarketsView | GetPlayer |  | Country |  |
| MarketsView | Manager |  | LateralView |  |
| MarketsView | Vars |  | Context |  |
| MaskPainterViewport | GetTooltip |  | GuiEditorTooltip |  |
| MemberTypeItem | GetSpecialStatus |  | SpecialStatus |  |
| Mercenary | GetCustomer |  | Country |  |
| Mercenary | GetHomeLocation |  | Location |  |
| Mercenary | GetLeader |  | Character |  |
| Mercenary | GetOwner |  | Country |  |
| Mercenary | GetTimedModifierOwner |  | TimedModifierOwner |  |
| Mercenary | MakeScope |  | Scope |  |
| MercenaryItem | GetMercenary |  | Mercenary |  |
| MercenaryTypeItem | GetMercenary |  | Mercenary |  |
| MercenaryTypeItem | GetUIAction |  | UIActionProvider |  |
| Merchant | GetCountry |  | Country |  |
| Merchant | GetMarket |  | Market |  |
| MerchantCapacityInMarketWrap | GetCountry |  | Country |  |
| MerchantCapacityInMarketWrap | GetMarket |  | Market |  |
| MerchantPowerInMarketWrap | GetCountry |  | Country |  |
| MerchantPowerInMarketWrap | GetMarket |  | Market |  |
| MeshImporter | AccessMaterialImportSettings |  | MeshImporterMaterials |  |
| MeshImporter | AccessUndoer |  | UndoStack |  |
| MessagePopup | GetLockableInfo |  | LockableInfo |  |
| Migration | GetCulture |  | Culture |  |
| Migration | GetFrom |  | ProvinceDefinition |  |
| Migration | GetFromLocation |  | Location |  |
| Migration | GetPopType |  | PopType |  |
| Migration | GetReligion |  | Religion |  |
| Migration | GetTo |  | ProvinceDefinition |  |
| Migration | GetToLocation |  | Location |  |
| MilitaryObjectiveGroupView | AccessObjective |  | MilitaryObjective |  |
| MilitaryObjectiveGroupView | GetArmySortSearch |  | FilteredSortedList |  |
| MilitaryObjectiveGroupView | GetCommitAction |  | UIActionProvider |  |
| MilitaryObjectiveGroupView | GetGeographySortSearch |  | FilteredSortedList |  |
| MilitaryObjectiveGroupView | GetMilitaryObjectiveGroup |  | TacticalMilitaryObjectiveGroup |  |
| MilitaryObjectiveGroupView | GetNavySortSearch |  | FilteredSortedList |  |
| MilitaryObjectiveGroupView | GetObjective |  | MilitaryObjective |  |
| MilitaryObjectiveGroupView | GetSpecialOptionsSortSearch |  | FilteredSortedList |  |
| MilitaryObjectiveGroupsView | GetDefendHomeTerritoryUIAction |  | UIActionProvider |  |
| MilitaryObjectiveGroupsView | GetObjectiveTypesSortSearch |  | FilteredSortedList |  |
| MilitaryObjectiveGroupsView | GetPlayer |  | Country |  |
| MilitaryObjectiveGroupsView | GetRepatriateTroopsUIAction |  | UIActionProvider |  |
| MilitaryObjectiveGroupsView | Manager |  | LateralView |  |
| MilitaryObjectiveGroupsView | Vars |  | Context |  |
| MissionAlert | GetTask |  | MissionTaskDefinition |  |
| MissionDefinition | MakeScope |  | Scope |  |
| MissionItem | GetMission |  | MissionDefinition |  |
| MissionLateralView | GetActiveMission |  | MissionItem |  |
| MissionLateralView | GetPlayer |  | Country |  |
| MissionLateralView | Manager |  | LateralView |  |
| MissionLateralView | Vars |  | Context |  |
| MissionMessage | GetMission |  | MissionDefinition |  |
| MissionProgress | GetActiveMission |  | MissionDefinition |  |
| MissionProgress | GetCurrentMissionTask |  | MissionTaskDefinition |  |
| MissionTaskDefinition | GetMission |  | MissionDefinition |  |
| MissionTaskDefinition | MakeScope |  | Scope |  |
| MissionTaskItem | GetTask |  | MissionTaskDefinition |  |
| MissionTaskMessage | GetMissionTask |  | MissionTaskDefinition |  |
| MissionTasksLateralView | GetMissionItem |  | MissionItem |  |
| MissionTasksLateralView | GetPlayer |  | Country |  |
| MissionTasksLateralView | Manager |  | LateralView |  |
| MissionTasksLateralView | Vars |  | Context |  |
| ModifierDebugInspectorPlugin | GetScopeData |  | ModifierDebugData |  |
| ModifierSourceWrap | GetModifierType |  | ModifierType |  |
| ModsGui | ActivePlayset |  | ModsPlayset |  |
| ModsGui | GetPlayset | 1. unknown | ModsPlayset |  |
| ModsPlaysetEntry | Playset |  | ModsPlayset |  |
| MultiUnitSelectUnit | Parent |  | MultiUnitWindow |  |
| MultiUnitWindow | GetFirstUnit |  | Unit |  |
| MultiUnitWindow | GetPlayer |  | Country |  |
| MultiUnitWindow | GetUnitsSortSearch |  | FilteredSortedList |  |
| MultiUnitWindow | Manager |  | LateralView |  |
| MultiUnitWindow | Vars |  | Context |  |
| MultiplayerSetupWindow | AccessMPConfig |  | MPConfig |  |
| MultiplayerSetupWindow | GetMPConfig |  | MPConfig |  |
| NavyConstructionMarker | GetConstruction |  | Construction |  |
| NewBornMessage | GetCharacter |  | Character |  |
| NewCountryCandidate | GetFormableCountry |  | FormableCountry |  |
| OngoingRelationCountry | GetCountry |  | Country |  |
| OosData | GetPlayable |  | Playable |  |
| OrgItem | GetOrg |  | InternationalOrganization |  |
| OutbreakItem | GetDiseaseOutbreak |  | DiseaseOutbreak |  |
| OutlinerCabinetEntry | GetActionProgressScope |  | TopScope |  |
| OutlinerDiplomacyEntry | GetTargetCountry |  | Country |  |
| OutlinerDiplomacyEntry | GetTemporaryRelationCountry |  | OngoingRelationCountry |  |
| OutlinerPlayerEntry | GetCountry |  | Country |  |
| OutlinerSettings | GetOutliner |  | Outliner |  |
| Parliament | GetCountryParliamentAgenda | 1. unknown | ActiveParliamentAgenda |  |
| Parliament | GetCurrentDebate |  | ParliamentIssue |  |
| Parliament | GetOrganizationParliamentAgenda | 1. unknown | ActiveParliamentAgenda |  |
| Parliament | GetParliamentLocation |  | Location |  |
| Parliament | GetParliamentType |  | ParliamentType |  |
| ParliamentAgenda | MakeScope |  | Scope |  |
| ParliamentAgendaGlue | GetParliamentAgenda |  | ActiveParliamentAgenda |  |
| ParliamentAgendaGlue | GetUIAction |  | UIActionProvider |  |
| ParliamentAgendaItem | GetAgenda |  | ActiveParliamentAgenda |  |
| ParliamentAgendaItem | GetType |  | EstateType |  |
| ParliamentAgendaItem | GetUIAction |  | UIActionProvider |  |
| ParliamentInSession | GetParliament |  | Parliament |  |
| ParliamentIssue | GetEstateType |  | EstateType |  |
| ParliamentIssue | GetSpecialStatus |  | SpecialStatus |  |
| ParliamentIssue | MakeScope |  | Scope |  |
| ParliamentIssueWithContextWrap | GetParliamentIssue |  | ParliamentIssue |  |
| ParliamentMarker | GetGovernment |  | Government |  |
| ParliamentType | MakeScope |  | Scope |  |
| Payment | GetPrice |  | Price |  |
| Payment | MakeScope |  | Scope |  |
| PaymentWithContextWrap | GetInternationalOrganization |  | InternationalOrganization |  |
| PaymentWithContextWrap | GetPayment |  | Payment |  |
| PdxAccount | GetInventory |  | AccountInventory |  |
| PdxGuiWidget | AccessChild | 1. unknown | PdxGuiWidget |  |
| PdxGuiWidget | AccessParent |  | PdxGuiWidget |  |
| PdxGuiWidget | FindChild | 1. unknown | PdxGuiWidget |  |
| PdxGuiWidget | FindParent | 1. unknown | PdxGuiWidget |  |
| PdxGuiWidget | GfxVideoControl |  | PdxGuiGfxVideoControl |  |
| PdxSetting | GetSettingPromoted |  | PdxCoreSetting |  |
| PeaceOfferLateralView | GetAnnexTreaty |  | PeaceTreaty |  |
| PeaceOfferLateralView | GetCategoriesSortSearch |  | FilteredSortedList |  |
| PeaceOfferLateralView | GetGoldTreaty |  | PeaceOfferWarScoreTreatyGlue |  |
| PeaceOfferLateralView | GetPlayer |  | Country |  |
| PeaceOfferLateralView | GetSacrificeTreaty |  | PeaceOfferWarScoreTreatyGlue |  |
| PeaceOfferLateralView | GetSelectedParticipant |  | Country |  |
| PeaceOfferLateralView | GetWar |  | War |  |
| PeaceOfferLateralView | Manager |  | LateralView |  |
| PeaceOfferLateralView | Vars |  | Context |  |
| PeaceOfferLateralViewParticipant | GetCountry |  | Country |  |
| PeaceTreaty | GetInnerCategory |  | PeaceOfferCategory |  |
| PeaceTreaty | GetLocation |  | Location |  |
| PeaceTreaty | GetRelevantCountryToShowForUI |  | Country |  |
| PeopleDynastyItem | GetDynasty |  | Dynasty |  |
| PeoplePopItem | GetPop |  | Pop |  |
| PeopleRebelItem | GetRebel |  | Rebel |  |
| Periphora | GetCountry |  | Country |  |
| Periphora | GetDestination |  | Location |  |
| Periphora | GetIcon |  | WorkOfArt |  |
| Periphora | GetOrigin |  | Location |  |
| PinningManager | Collection | 1. unknown | PinCollection |  |
| Playable | GetCountry |  | Country |  |
| Playable | GetJominiPlayableCountryRef |  | Country |  |
| PlayerEntryForChat | GetCountry |  | Country |  |
| PlayerModifiersLateralView | GetModifiersSortSearch |  | FilteredSortedList |  |
| PlayerModifiersLateralView | GetPlayer |  | Country |  |
| PlayerModifiersLateralView | Manager |  | LateralView |  |
| PlayerModifiersLateralView | Vars |  | Context |  |
| Policy | GetLaw |  | Law |  |
| Policy | MakeScope |  | Scope |  |
| PolicyWithContextWrap | GetInternationalOrganization |  | InternationalOrganization |  |
| PolicyWithContextWrap | GetPolicy |  | Policy |  |
| Pop | GetCulture |  | Culture |  |
| Pop | GetEstate |  | Estate |  |
| Pop | GetEstateType |  | EstateType |  |
| Pop | GetLocation |  | Location |  |
| Pop | GetOwner |  | Country |  |
| Pop | GetOwnerOrLocationOwner |  | Country |  |
| Pop | GetRebel |  | Rebel |  |
| Pop | GetReligion |  | Religion |  |
| Pop | GetType |  | PopType |  |
| Pop | MakeScope |  | Scope |  |
| PopCultureItem | GetCulture |  | Culture |  |
| PopEntry | GetCulture |  | Culture |  |
| PopEntry | GetReligion |  | Religion |  |
| PopPoliticsItem | GetLocation |  | Location |  |
| PopReligionItem | GetReligion |  | Religion |  |
| PopTaxItem | GetLocation |  | Location |  |
| PopType | MakeScope |  | Scope |  |
| PopTypeEntry | GetPopType |  | PopType |  |
| PopsCountryItem | GetCountry |  | Country |  |
| PopsLocationItem | GetLocation |  | Location |  |
| PopsOverview | GetPlayer |  | Country |  |
| PopsOverview | GetPopsSortSearch |  | FilteredSortedList |  |
| PopsOverview | Manager |  | LateralView |  |
| PopsOverview | Vars |  | Context |  |
| PopsProvinceItem | GetProvince |  | Province |  |
| PortMarker | GetLocation |  | Location |  |
| PortraitEditorWindow | GetChildGenerator |  | ChildGenerator |  |
| PortraitEditorWindow | GetPortraitDataContext |  | PortraitDataContext |  |
| PortraitEditorWindow | GetSelectedEthnicityItem |  | EthnicityItem |  |
| PortraitEditorWindow | GetSelectedGeneItem |  | GeneItem |  |
| PossibleDisease | GetDisease |  | Disease |  |
| PossibleExplorationItem | GetArea |  | Area |  |
| PossibleExplorationItem | GetCharacter |  | Character |  |
| PossibleExplorationItem | GetExploration |  | Exploration |  |
| PossibleExplorationItem | GetExplorationConstruction |  | Construction |  |
| PossibleItem | GetExistingTrade |  | Trade |  |
| PossibleItem | GetFromMarket |  | Market |  |
| PossibleItem | GetGoods |  | Goods |  |
| PossibleItem | GetMarket |  | Market |  |
| PossibleItem | GetToMarket |  | Market |  |
| PossibleLeaderItem | GetCharacter |  | Character |  |
| PossiblePrivateerItem | GetArea |  | Area |  |
| PossibleSubUnitDefinition | GetSubUnitDefinition |  | SubUnitType |  |
| PossibleTrade | GetExistingTrade |  | Trade |  |
| PossibleTrade | GetFromMarket |  | Market |  |
| PossibleTrade | GetGoods |  | Goods |  |
| PossibleTrade | GetMerchantMarket |  | Market |  |
| PossibleTrade | GetToMarket |  | Market |  |
| PossibleTrade | GetUIActions |  | UIActionProvider |  |
| PossibleTradesSelectMarket | Parent |  | TradeOverview |  |
| Price | MakeScope |  | Scope |  |
| Privateer | GetArea |  | Area |  |
| Privateer | GetOwner |  | Country |  |
| Privateer | MakeScope |  | Scope |  |
| PrivilegeItem | GetPrivilege |  | EstatePrivilege |  |
| PrivilegeItem | GetUIAction |  | UIActionProvider |  |
| ProducedOnMarketWrap | GetGoods |  | Goods |  |
| ProducedOnMarketWrap | GetMarket |  | Market |  |
| ProductionMethod | GetGoodsDemand |  | GoodsDemand |  |
| ProductionMethod | GetProduced |  | Goods |  |
| ProductionMethod | MakeScope |  | Scope |  |
| ProductionMethodItem | GetProductionMethod |  | ProductionMethod |  |
| ProductionSelectMarket | Parent |  | ProductionView |  |
| ProductionView | GetBestBuildLocation |  | Location |  |
| ProductionView | GetBuildRankingItems |  | ConstructScoreRanking |  |
| ProductionView | GetBuildingsSortSearch |  | FilteredSortedList |  |
| ProductionView | GetEstateBuildingsSortSearch |  | FilteredSortedList |  |
| ProductionView | GetForeignBuildingsSortSearch |  | FilteredSortedList |  |
| ProductionView | GetPlayer |  | Country |  |
| ProductionView | GetSelectedLocation |  | Location |  |
| ProductionView | GetSelectedMarket |  | Market |  |
| ProductionView | Manager |  | LateralView |  |
| ProductionView | Vars |  | Context |  |
| Province | FindFirstNonIntegrated |  | Location |  |
| Province | GetArea |  | Area |  |
| Province | GetCapital |  | Location |  |
| Province | GetContinent |  | Continent |  |
| Province | GetCountry |  | Country |  |
| Province | GetDefinition |  | ProvinceDefinition |  |
| Province | GetProvince |  | Province |  |
| Province | GetRegion |  | Region |  |
| Province | GetTimedModifierOwner |  | TimedModifierOwner |  |
| Province | MakeScope |  | Scope |  |
| ProvinceDefinition | GetArea |  | Area |  |
| ProvinceDefinition | MakeScope |  | Scope |  |
| QuickCabinetCardModifier | GetCabinetCardModifier |  | CabinetCardModifier |  |
| QuickDiplomaticActions | GetSpecificAction | 1. unknown | DiplomaticActionItem |  |
| QuickTemporaryCountryRelations | GetTemporaryRelation | 1. unknown | OngoingRelationCountry |  |
| QuickUnitActions | GetBalanceAction |  | UnitActionItem |  |
| RawGoodLocationItem | GetLocation |  | Location |  |
| RawGoodsMarker | GetLocation |  | Location |  |
| Rebel | GetMostPowerfulSupporter |  | Country |  |
| Rebel | GetOwner |  | Country |  |
| Rebel | GetPretender |  | Character |  |
| Rebel | MakeScope |  | Scope |  |
| RebelDetailsLateralView | GetLocationsSortSearch |  | FilteredSortedList |  |
| RebelDetailsLateralView | GetPlayer |  | Country |  |
| RebelDetailsLateralView | GetPopsSortSearch |  | FilteredSortedList |  |
| RebelDetailsLateralView | GetRebel |  | Rebel |  |
| RebelDetailsLateralView | Manager |  | LateralView |  |
| RebelDetailsLateralView | Vars |  | Context |  |
| RecruitInLocationLateralView | GetItem | 1. unknown | LocationToRecruitItem |  |
| RecruitInLocationLateralView | GetMercenary |  | Mercenary |  |
| RecruitInLocationLateralView | GetPlayer |  | Country |  |
| RecruitInLocationLateralView | GetPreferredMethod |  | RecruitmentMethod |  |
| RecruitInLocationLateralView | GetRecruitSortSearch |  | FilteredSortedList |  |
| RecruitInLocationLateralView | GetUnitType |  | SubUnitType |  |
| RecruitInLocationLateralView | Manager |  | LateralView |  |
| RecruitInLocationLateralView | Vars |  | Context |  |
| RecruitScoreRanking | GetLastRecruitmentLocation |  | Location |  |
| RecruitScoreRanking | GetUnitType |  | SubUnitType |  |
| RecruitmentMethod | MakeScope |  | Scope |  |
| ReformItem | GetReform |  | GovernmentReform |  |
| ReformItem | GetUIAction |  | UIActionProvider |  |
| RegencyType | MakeScope |  | Scope |  |
| Region | GetSubContinent |  | SubContinent |  |
| Region | MakeScope |  | Scope |  |
| RelationDescItem | GetCountry |  | Country |  |
| RelationDescItem | GetRelationDescItemUIAction |  | UIActionProvider |  |
| RelationTypeItem | GetCountry |  | Country |  |
| RelationTypeItem | GetInternationalOrganization |  | InternationalOrganization |  |
| RelativePowerTooltipGlue | GetCountry |  | Country |  |
| RelativePowerTooltipGlue | GetPlayer |  | Country |  |
| Religion | GetCountriesList |  | QuickReligionCountryList |  |
| Religion | GetGroup |  | ReligionGroup |  |
| Religion | GetImportantCountry |  | Country |  |
| Religion | GetLanguage |  | Dialect |  |
| Religion | GetTimedModifierOwner |  | TimedModifierOwner |  |
| Religion | MakeScope |  | Scope |  |
| ReligionGroup | MakeScope |  | Scope |  |
| ReligionItem | GetReligion |  | Religion |  |
| ReligionMessage | GetReligion |  | Religion |  |
| ReligionsLedger | GetPlayer |  | Country |  |
| ReligionsLedger | GetReligionsSortSearch |  | FilteredSortedList |  |
| ReligionsLedger | Manager |  | LateralView |  |
| ReligionsLedger | Vars |  | Context |  |
| ReligiousAspect | MakeScope |  | Scope |  |
| ReligiousAspectGlue | GetReligiousAspect |  | ReligiousAspect |  |
| ReligiousFaction | MakeScope |  | Scope |  |
| ReligiousFactionActionGlue | GetUIAction |  | UIActionProvider |  |
| ReligiousFactionGlue | GetFaction |  | ReligiousFaction |  |
| ReligiousFigure | MakeScope |  | Scope |  |
| ReligiousFigureGlue | GetCharacter |  | Character |  |
| ReligiousFigureGlue | GetUIAction |  | UIActionProvider |  |
| ReligiousFocus | MakeScope |  | Scope |  |
| ReligiousFocusGlue | GetReligiousFocus |  | ReligiousFocus |  |
| ReligiousFocusGlue | GetUIAction |  | UIActionProvider |  |
| ReligiousSchool | MakeScope |  | Scope |  |
| RenameDialog | GetCountry |  | Country |  |
| ReorgWindow | GetLeft |  | Unit |  |
| ReorgWindow | GetRight |  | Unit |  |
| ReportIssueWindow | GetItemSortSearch |  | FilteredSortedList |  |
| ResearchMessage | GetAdvancePointer |  | Advance |  |
| Resolution | MakeScope |  | Scope |  |
| ResolutionGlue | GetEnactNoVoteTarget |  | InteractionTarget |  |
| ResolutionGlue | GetEnactResolution |  | Resolution |  |
| ResolutionGlue | GetEnactYesVoteTarget |  | InteractionTarget |  |
| ResolutionGlue | GetHighestVote |  | VoteGlue |  |
| ResolutionGlue | GetOwner |  | InternationalOrganization |  |
| ResolutionGlue | GetProposer |  | Country |  |
| ResolutionGlue | GetRepealResolution |  | Resolution |  |
| ResolutionGlue | GetSpecificParams |  | TargettedActionParameters |  |
| ResolutionGlue | GetTarget | 1. unknown | InteractionTarget |  |
| ResolutionGlue | GetTargetCountry |  | Country |  |
| ResolutionGlue | GetVoteToEnactAction |  | UIActionProvider |  |
| ResolutionGlue | GetVoteToRepealAction |  | UIActionProvider |  |
| RoadBuilder | GetLocation |  | Location |  |
| RoadBuilder | GetPlayer |  | Country |  |
| RoadBuilder | GetRoadDestinationsSearch |  | FilteredSortedList |  |
| RoadBuilder | Manager |  | LateralView |  |
| RoadBuilder | Vars |  | Context |  |
| RoadDestinationItem | GetLocation |  | Location |  |
| RoadDestinationItem | GetRoadType |  | RoadType |  |
| RoadType | MakeScope |  | Scope |  |
| RoadTypeItem | GetRoadType |  | RoadType |  |
| RulerTerm | GetCharacterRulerData |  | CharacterRulerData |  |
| RulerTerm | GetCountryRulerData |  | CountryRulerData |  |
| RulerTerm | GetRuledCountry |  | Country |  |
| RulerTerm | GetRuledInternationalOrganization |  | InternationalOrganization |  |
| RulerTermEntry | GetRulerTerm |  | RulerTerm |  |
| RulerTraitEntry | GetCharacter |  | Character |  |
| RulerTraitEntry | GetTrait |  | Trait |  |
| RulingHistoryView | GetPlayer |  | Country |  |
| RulingHistoryView | GetRulerTermEntriesSortSearch |  | FilteredSortedList |  |
| RulingHistoryView | Manager |  | LateralView |  |
| RulingHistoryView | Vars |  | Context |  |
| SaintGlue | GetSaint |  | Character |  |
| SaveGameAnalysisView | GetSaveGame |  | SaveGame |  |
| ScaledStaticModifierWrap | GetModifier |  | StaticModifier |  |
| Scenario | GetProficiency |  | PlayerProficiency |  |
| SceneEditor | AccessUndoer |  | UndoStack |  |
| Scope | ActiveResolution |  | ActiveResolution | Jomini Script System |
| Scope | AdvanceType |  | AdvanceDefinition | Jomini Script System |
| Scope | Age |  | Age | Jomini Script System |
| Scope | Area |  | Area | Jomini Script System |
| Scope | Artist |  | Artist | Jomini Script System |
| Scope | Avatar |  | Avatar | Jomini Script System |
| Scope | Building |  | Building | Jomini Script System |
| Scope | BuildingType |  | BuildingType | Jomini Script System |
| Scope | Cabinet |  | Cabinet | Jomini Script System |
| Scope | Cardinal |  | Cardinal | Jomini Script System |
| Scope | CasusBelli |  | CasusBelli | Jomini Script System |
| Scope | Character |  | Character | Jomini Script System |
| Scope | CharacterInteraction |  | CharacterInteraction | Jomini Script System |
| Scope | ChildEducation |  | ChildEducation | Jomini Script System |
| Scope | Climate |  | Climate | Jomini Script System |
| Scope | ColonialCharter |  | ColonialCharter | Jomini Script System |
| Scope | Combat |  | Combat | Jomini Script System |
| Scope | CombatSide |  | CombatSide | Jomini Script System |
| Scope | Continent |  | Continent | Jomini Script System |
| Scope | Country |  | Country | Jomini Script System |
| Scope | CountryInteraction |  | CountryInteraction | Jomini Script System |
| Scope | CountryRank |  | CountryRank | Jomini Script System |
| Scope | Culture |  | Culture | Jomini Script System |
| Scope | CultureGroup |  | CultureGroup | Jomini Script System |
| Scope | DisasterType |  | DisasterType | Jomini Script System |
| Scope | Disease |  | Disease | Jomini Script System |
| Scope | DiseaseOutbreak |  | DiseaseOutbreak | Jomini Script System |
| Scope | Dynasty |  | Dynasty | Jomini Script System |
| Scope | EmploymentSystem |  | EmploymentSystem | Jomini Script System |
| Scope | Estate |  | Estate | Jomini Script System |
| Scope | EstateType |  | EstateType | Jomini Script System |
| Scope | Ethnicity |  | Ethnicity | Jomini Script System |
| Scope | Exploration |  | Exploration | Jomini Script System |
| Scope | Faction |  | ReligiousFaction | Jomini Script System |
| Scope | FormableCountry |  | FormableCountry | Jomini Script System |
| Scope | GenericAction |  | GenericAction | Jomini Script System |
| Scope | GetActiveResolution |  | ActiveResolution |  |
| Scope | GetAdvanceType |  | AdvanceDefinition |  |
| Scope | GetAge |  | Age |  |
| Scope | GetArea |  | Area |  |
| Scope | GetArtist |  | Artist |  |
| Scope | GetAvatar |  | Avatar |  |
| Scope | GetBuilding |  | Building |  |
| Scope | GetBuildingType |  | BuildingType |  |
| Scope | GetCabinet |  | Cabinet |  |
| Scope | GetCabinetAction |  | CabinetAction |  |
| Scope | GetCardinal |  | Cardinal |  |
| Scope | GetCasusBelli |  | CasusBelli |  |
| Scope | GetCharacter |  | Character |  |
| Scope | GetCharacterInteraction |  | CharacterInteraction |  |
| Scope | GetChildEducation |  | ChildEducation |  |
| Scope | GetClimate |  | Climate |  |
| Scope | GetColonialCharter |  | ColonialCharter |  |
| Scope | GetCombat |  | Combat |  |
| Scope | GetCombatSide |  | CombatSide |  |
| Scope | GetContinent |  | Continent |  |
| Scope | GetCountry |  | Country |  |
| Scope | GetCountryInteraction |  | CountryInteraction |  |
| Scope | GetCountryRank |  | CountryRank |  |
| Scope | GetCulture |  | Culture |  |
| Scope | GetCultureGroup |  | CultureGroup |  |
| Scope | GetDialect |  | Dialect |  |
| Scope | GetDisaster |  | Disaster |  |
| Scope | GetDisasterType |  | DisasterType |  |
| Scope | GetDisease |  | Disease |  |
| Scope | GetDiseaseOutbreak |  | DiseaseOutbreak |  |
| Scope | GetDynasty |  | Dynasty |  |
| Scope | GetEmploymentSystem |  | EmploymentSystem |  |
| Scope | GetEstate |  | Estate |  |
| Scope | GetEstatePrivilege |  | EstatePrivilege |  |
| Scope | GetEstateType |  | EstateType |  |
| Scope | GetEthnicity |  | Ethnicity |  |
| Scope | GetExploration |  | Exploration |  |
| Scope | GetFormableCountry |  | FormableCountry |  |
| Scope | GetGenericAction |  | GenericAction |  |
| Scope | GetGod |  | God |  |
| Scope | GetGoods |  | Goods |  |
| Scope | GetGoodsDemand |  | Goods |  |
| Scope | GetGovernmentReform |  | GovernmentReform |  |
| Scope | GetGovernmentType |  | GovernmentType |  |
| Scope | GetHegemony |  | Hegemony |  |
| Scope | GetHeirSelection |  | HeirSelection |  |
| Scope | GetHolySite |  | HolySite |  |
| Scope | GetHolySiteDefinition |  | HolySiteDefinition |  |
| Scope | GetHolySiteType |  | HolySiteType |  |
| Scope | GetInternationalOrganization |  | InternationalOrganization |  |
| Scope | GetInternationalOrganizationType |  | InternationalOrganizationType |  |
| Scope | GetLandOwnershipRule |  | LandOwnershipRule |  |
| Scope | GetLanguage |  | Language |  |
| Scope | GetLaw |  | Law |  |
| Scope | GetLevySetup |  | LevySetup |  |
| Scope | GetLoan |  | Loan |  |
| Scope | GetLocation |  | Location |  |
| Scope | GetLocationRank |  | LocationRank |  |
| Scope | GetMarket |  | Market |  |
| Scope | GetMercenary |  | Mercenary |  |
| Scope | GetMissionDefinition |  | MissionDefinition |  |
| Scope | GetMissionTaskDefinition |  | MissionTaskDefinition |  |
| Scope | GetParliamentAgenda |  | ParliamentAgenda |  |
| Scope | GetParliamentIssue |  | ParliamentIssue |  |
| Scope | GetParliamentType |  | ParliamentType |  |
| Scope | GetPayment |  | Payment |  |
| Scope | GetPolicy |  | Policy |  |
| Scope | GetPop |  | Pop |  |
| Scope | GetPopType |  | PopType |  |
| Scope | GetPrice |  | Price |  |
| Scope | GetPrivateer |  | Privateer |  |
| Scope | GetProductionMethod |  | ProductionMethod |  |
| Scope | GetProvince |  | Province |  |
| Scope | GetProvinceDefinition |  | ProvinceDefinition |  |
| Scope | GetRebel |  | Rebel |  |
| Scope | GetRecruitmentMethod |  | RecruitmentMethod |  |
| Scope | GetRegencyType |  | RegencyType |  |
| Scope | GetRegion |  | Region |  |
| Scope | GetRelationType |  | ScriptedRelationType |  |
| Scope | GetReligion |  | Religion |  |
| Scope | GetReligionGroup |  | ReligionGroup |  |
| Scope | GetReligiousAspect |  | ReligiousAspect |  |
| Scope | GetReligiousFaction |  | ReligiousFaction |  |
| Scope | GetReligiousFigure |  | ReligiousFigure |  |
| Scope | GetReligiousFocus |  | ReligiousFocus |  |
| Scope | GetReligiousSchool |  | ReligiousSchool |  |
| Scope | GetResolution |  | Resolution |  |
| Scope | GetRoadType |  | RoadType |  |
| Scope | GetScriptableHintDefinition |  | ScriptableHintDefinition |  |
| Scope | GetScriptedPeaceTreatyType |  | ScriptedPeaceTreatyType |  |
| Scope | GetSiege |  | Siege |  |
| Scope | GetSituation |  | Situation |  |
| Scope | GetSocietalValue |  | SocietalValue |  |
| Scope | GetSpecialStatus |  | SpecialStatus |  |
| Scope | GetSubContinent |  | SubContinent |  |
| Scope | GetSubUnit |  | SubUnit |  |
| Scope | GetSubUnitCategory |  | SubUnitCategory |  |
| Scope | GetSubjectMilitaryStance |  | SubjectMilitaryStance |  |
| Scope | GetSubjectType |  | SubjectType |  |
| Scope | GetTopography |  | Topography |  |
| Scope | GetTrade |  | Trade |  |
| Scope | GetTrait |  | Trait |  |
| Scope | GetUnit |  | Unit |  |
| Scope | GetUnitAbility |  | UnitAbility |  |
| Scope | GetUnitType |  | SubUnitType |  |
| Scope | GetVariable | 1. unknown | Scope |  |
| Scope | GetVegetation |  | Vegetation |  |
| Scope | GetWar |  | War |  |
| Scope | GetWeatherSystem |  | WeatherSystem |  |
| Scope | GetWorkOfArt |  | WorkOfArt |  |
| Scope | GetWorkOfArtType |  | WorkOfArtType |  |
| Scope | God |  | God | Jomini Script System |
| Scope | Goods |  | Goods | Jomini Script System |
| Scope | GoodsDemand |  | GoodsDemand | Jomini Script System |
| Scope | GovernmentType |  | GovernmentType | Jomini Script System |
| Scope | Hegemony |  | Hegemony | Jomini Script System |
| Scope | HeirSelection |  | HeirSelection | Jomini Script System |
| Scope | HolySite |  | HolySite | Jomini Script System |
| Scope | HolySiteDefinition |  | HolySiteDefinition | Jomini Script System |
| Scope | HolySiteType |  | HolySiteType | Jomini Script System |
| Scope | Institution |  | Institution | Jomini Script System |
| Scope | InternationalOrganization |  | InternationalOrganization | Jomini Script System |
| Scope | InternationalOrganizationType |  | InternationalOrganizationType | Jomini Script System |
| Scope | LandOwnershipRule |  | LandOwnershipRule | Jomini Script System |
| Scope | Language |  | Language | Jomini Script System |
| Scope | LanguageFamily |  | LanguageFamily | Jomini Script System |
| Scope | Law |  | Law | Jomini Script System |
| Scope | LevySetup |  | LevySetup | Jomini Script System |
| Scope | Loan |  | Loan | Jomini Script System |
| Scope | Location |  | Location | Jomini Script System |
| Scope | LocationRank |  | LocationRank | Jomini Script System |
| Scope | Market |  | Market | Jomini Script System |
| Scope | Mercenary |  | Mercenary | Jomini Script System |
| Scope | MissionDefinition |  | MissionDefinition | Jomini Script System |
| Scope | MissionTaskDefinition |  | MissionTaskDefinition | Jomini Script System |
| Scope | ParliamenType |  | ParliamentType | Jomini Script System |
| Scope | ParliamentAgenda |  | ParliamentAgenda | Jomini Script System |
| Scope | ParliamentIssue |  | ParliamentIssue | Jomini Script System |
| Scope | Payment |  | Payment | Jomini Script System |
| Scope | Policy |  | Policy | Jomini Script System |
| Scope | Pop |  | Pop | Jomini Script System |
| Scope | PopType |  | PopType | Jomini Script System |
| Scope | Price |  | Price | Jomini Script System |
| Scope | Privateer |  | Privateer | Jomini Script System |
| Scope | ProductionMethod |  | ProductionMethod | Jomini Script System |
| Scope | Province |  | Province | Jomini Script System |
| Scope | ProvinceDefinition |  | ProvinceDefinition | Jomini Script System |
| Scope | Rebel |  | Rebel | Jomini Script System |
| Scope | RecruitmentMethod |  | RecruitmentMethod | Jomini Script System |
| Scope | RegencyType |  | RegencyType | Jomini Script System |
| Scope | Region |  | Region | Jomini Script System |
| Scope | RelationType |  | ScriptedRelationType | Jomini Script System |
| Scope | Religion |  | Religion | Jomini Script System |
| Scope | ReligionGroup |  | ReligionGroup | Jomini Script System |
| Scope | ReligiousAspect |  | ReligiousAspect | Jomini Script System |
| Scope | ReligiousFigure |  | ReligiousFigure | Jomini Script System |
| Scope | ReligiousFocus |  | ReligiousFocus | Jomini Script System |
| Scope | ReligiousSchool |  | ReligiousSchool | Jomini Script System |
| Scope | Resolution |  | Resolution | Jomini Script System |
| Scope | RoadType |  | RoadType | Jomini Script System |
| Scope | ScriptableHintDefinition |  | ScriptableHintDefinition | Jomini Script System |
| Scope | ScriptedPeaceTreatyType |  | ScriptedPeaceTreatyType | Jomini Script System |
| Scope | Siege |  | Siege | Jomini Script System |
| Scope | Situation |  | Situation | Jomini Script System |
| Scope | SocietalValue |  | SocietalValue | Jomini Script System |
| Scope | SpecialStatus |  | SpecialStatus | Jomini Script System |
| Scope | SubContinent |  | SubContinent | Jomini Script System |
| Scope | SubUnit |  | SubUnit | Jomini Script System |
| Scope | SubUnitCategory |  | SubUnitCategory | Jomini Script System |
| Scope | SubjectMilitaryStance |  | SubjectMilitaryStance | Jomini Script System |
| Scope | SubjectType |  | SubjectType | Jomini Script System |
| Scope | Topography |  | Topography | Jomini Script System |
| Scope | Trade |  | Trade | Jomini Script System |
| Scope | Trait |  | Trait | Jomini Script System |
| Scope | Unit |  | Unit | Jomini Script System |
| Scope | UnitAbility |  | UnitAbility | Jomini Script System |
| Scope | UnitType |  | SubUnitType | Jomini Script System |
| Scope | Var | 1. unknown | Scope |  |
| Scope | Vegetation |  | Vegetation | Jomini Script System |
| Scope | War |  | War | Jomini Script System |
| Scope | WeatherSystem |  | WeatherSystem | Jomini Script System |
| Scope | WorkOfArt |  | WorkOfArt | Jomini Script System |
| Scope | WorkOfArtType |  | WorkOfArtType | Jomini Script System |
| ScopeDebugInspectorPlugin | GetScopeData |  | ScopeDebugData |  |
| ScopedEditorSettingsCategory | AccessCategory |  | EditorSettingCategory |  |
| ScopedEditorSettingsCategory | GetCategory |  | EditorSettingCategory |  |
| ScoreView | GetPlayer |  | Country |  |
| ScoreView | GetScoreSortSearch |  | FilteredSortedList |  |
| ScoreView | Manager |  | LateralView |  |
| ScoreView | Vars |  | Context |  |
| ScoreViewItem | GetCountry |  | Country |  |
| ScriptProfilerGui | GetCurrentEntry |  | ScriptProfilerEntry |  |
| ScriptProfilerGui | GetFileSearchList |  | ToolPropertySearchList |  |
| ScriptProfilerGui | GetModeSearchList |  | ToolPropertySearchList |  |
| ScriptRunnerInspector | AccessEffectResult |  | ScriptRunnerResult |  |
| ScriptRunnerInspector | AccessEventTargets |  | EventTargetSetupContext |  |
| ScriptRunnerInspector | AccessTriggerResult |  | ScriptRunnerResult |  |
| ScriptableHintDefinition | GetPlaystyleHint | 1. unknown | PlaystyleHint |  |
| ScriptableHintDefinition | MakeScope |  | Scope |  |
| ScriptedHintItem | GetHint |  | ScriptableHintDefinition |  |
| ScriptedPeaceTreatyType | MakeScope |  | Scope |  |
| ScriptedRelationType | MakeScope |  | Scope |  |
| ScriptedRelationTypeWithContextWrap | GetFirstCountry |  | Country |  |
| ScriptedRelationTypeWithContextWrap | GetScriptedRelationType |  | ScriptedRelationType |  |
| ScriptedRelationTypeWithContextWrap | GetSecondCountry |  | Country |  |
| SeaZoneView | GetLocation |  | Location |  |
| SeaZoneView | GetPlayer |  | Country |  |
| SeaZoneView | Manager |  | LateralView |  |
| SeaZoneView | Vars |  | Context |  |
| SearchBar | Manager |  | LateralView |  |
| SearchFilter | GetRange |  | SearchFilterRange |  |
| SearchFilterCategory | AccessRangeValues | 1. unknown | SearchFilterRangeValues |  |
| SelectCasusBelli | GetCasusBelli |  | CasusBelli |  |
| SelectCasusBelli | GetPriceImpactFromWar |  | WarImpactWrap |  |
| SelectCasusBelli | GetWarGoal |  | WarGoal |  |
| SelectCharacterInteraction | GetCharacter |  | Character |  |
| SelectChildEducation | GetPlayer |  | Country |  |
| SelectChildEducation | Manager |  | LateralView |  |
| SelectChildEducation | Vars |  | Context |  |
| SelectCountryDiplomacyLateralView | GetCountriesSortSearch |  | FilteredSortedList |  |
| SelectCountryDiplomacyLateralView | GetPlayer |  | Country |  |
| SelectCountryDiplomacyLateralView | Manager |  | LateralView |  |
| SelectCountryDiplomacyLateralView | Vars |  | Context |  |
| SelectCreateCasusBelliWindow | GetExistingCBSortSearch |  | FilteredSortedList |  |
| SelectCreateCasusBelliWindow | GetPlayer |  | Country |  |
| SelectCreateCasusBelliWindow | GetPossibleCBSortSearch |  | FilteredSortedList |  |
| SelectCreateCasusBelliWindow | Manager |  | LateralView |  |
| SelectCreateCasusBelliWindow | Vars |  | Context |  |
| SelectHeirSelection | GetCurrentCandidate |  | HeirSelectionCandidate |  |
| SelectInteractionTargetGlue | GetObject |  | InteractionTarget |  |
| SelectInteractionTargetGlue | GetParent |  | SelectInteractionTargetView |  |
| SelectInteractionTargetView | GetCurrentParams |  | TargettedActionParameters |  |
| SelectInteractionTargetView | GetCurrentValueUIAction |  | UIActionProvider |  |
| SelectInteractionTargetView | GetPlayer |  | Country |  |
| SelectInteractionTargetView | GetTargetObjectSortSearch |  | FilteredSortedList |  |
| SelectInteractionTargetView | GetValueGlue | 1. unknown | SelectInteractionTargetGlue |  |
| SelectInteractionTargetView | Manager |  | LateralView |  |
| SelectInteractionTargetView | Vars |  | Context |  |
| SelectLoanLateralView | GetDeclareBankruptcyUIAction |  | UIActionProvider |  |
| SelectLoanLateralView | GetLoansGivenSortSearch |  | FilteredSortedList |  |
| SelectLoanLateralView | GetLoansTakenSortSearch |  | FilteredSortedList |  |
| SelectLoanLateralView | GetPlayer |  | Country |  |
| SelectLoanLateralView | GetRepayAllLoansUIAction |  | UIActionProvider |  |
| SelectLoanLateralView | GetRepayAllPossibleLoansUIAction |  | UIActionProvider |  |
| SelectLoanLateralView | Manager |  | LateralView |  |
| SelectLoanLateralView | Vars |  | Context |  |
| SelectMissionLateralView | GetActiveMission |  | MissionItem |  |
| SelectMissionLateralView | GetAvailableMissionsSortSearch |  | FilteredSortedList |  |
| SelectMissionLateralView | GetPlayer |  | Country |  |
| SelectMissionLateralView | Manager |  | LateralView |  |
| SelectMissionLateralView | Vars |  | Context |  |
| SelectParticipant | Parent |  | PeaceOfferLateralView |  |
| SelectSearchFilter | AccessSearchBar |  | SearchBar |  |
| SelectSocietalValue | GetCabinet |  | Cabinet |  |
| SelectSubjectTypeLateralView | GetPlayer |  | Country |  |
| SelectSubjectTypeLateralView | GetSubjectTypesSortSearch |  | FilteredSortedList |  |
| SelectSubjectTypeLateralView | Manager |  | LateralView |  |
| SelectSubjectTypeLateralView | Vars |  | Context |  |
| SelectedMarketLateralView | GetFoodSourcesSortSearch |  | FilteredSortedList |  |
| SelectedMarketLateralView | GetGoodsMarketEntriesSortSearch |  | FilteredSortedList |  |
| SelectedMarketLateralView | GetMarket |  | Market |  |
| SelectedMarketLateralView | GetMerchantsSortSearch |  | FilteredSortedList |  |
| SelectedMarketLateralView | GetPlayer |  | Country |  |
| SelectedMarketLateralView | GetTradeMarketEntriesSortSearch |  | FilteredSortedList |  |
| SelectedMarketLateralView | Manager |  | LateralView |  |
| SelectedMarketLateralView | Vars |  | Context |  |
| SetupCondottieriView | GetCondottieriItemsSortSearch |  | FilteredSortedList |  |
| SetupCondottieriView | GetPlayer |  | Country |  |
| SetupCondottieriView | Manager |  | LateralView |  |
| SetupCondottieriView | Vars |  | Context |  |
| SetupEditor | GetSearch |  | SearchBar |  |
| SetupMercenaryRequirementsView | GetPossibleLeadersSortSearch |  | FilteredSortedList |  |
| SetupMercenaryRequirementsView | GetSelectedLeader |  | PossibleLeaderItem |  |
| Siege | GetBesieger |  | Country |  |
| Siege | GetCommander |  | Character |  |
| Siege | GetLocation |  | Location |  |
| Siege | GetSiegeDefender |  | Country |  |
| Siege | GetWar |  | War |  |
| Siege | MakeScope |  | Scope |  |
| SingleUnitSelectUnit | Parent |  | SingleUnitWindow |  |
| SingleUnitWindow | AccessSelectedUnit |  | Unit |  |
| SingleUnitWindow | GetBalanceAction |  | UnitActionItem |  |
| SingleUnitWindow | GetCreateUnitAction |  | UnitActionItem |  |
| SingleUnitWindow | GetDetachAction | 1. unknown | UnitActionItem |  |
| SingleUnitWindow | GetEmbarkAction |  | UIActionProvider |  |
| SingleUnitWindow | GetMercenariesAction |  | UIActionProvider |  |
| SingleUnitWindow | GetObjectiveAction |  | UIActionProvider |  |
| SingleUnitWindow | GetPlayer |  | Country |  |
| SingleUnitWindow | GetSelectedUnit |  | Unit |  |
| SingleUnitWindow | GetSubUnitsSortSearch |  | FilteredSortedList |  |
| SingleUnitWindow | GetUIAction |  | UIActionProvider |  |
| SingleUnitWindow | Manager |  | LateralView |  |
| SingleUnitWindow | Vars |  | Context |  |
| Situation | MakeScope |  | Scope |  |
| SituationMessagePopup | GetCountry |  | Country |  |
| SituationMessagePopup | GetSituation |  | Situation |  |
| SituationView | GetAbstentionTarget |  | VoteTargetGlue |  |
| SituationView | GetActiveResolution |  | ActiveResolution |  |
| SituationView | GetActiveSituation |  | ActiveSituation |  |
| SituationView | GetInternationalOrganization |  | InternationalOrganization |  |
| SituationView | GetInternationalOrganizationForLaws |  | InternationalOrganization |  |
| SituationView | GetLawCategoriesSortSearch |  | FilteredSortedList |  |
| SituationView | GetPlayer |  | Country |  |
| SituationView | GetVoteTargetLeft |  | VoteTargetGlue |  |
| SituationView | GetVoteTargetRight |  | VoteTargetGlue |  |
| SituationView | Manager |  | LateralView |  |
| SituationView | Vars |  | Context |  |
| SocietalValue | MakeScope |  | Scope |  |
| SocietalValueCandidate | GetSocietalValue |  | SocietalValue |  |
| SocietalValueItem | GetCountry |  | Country |  |
| SocietalValueItem | GetLeftUIAction |  | UIActionProvider |  |
| SocietalValueItem | GetRightUIAction |  | UIActionProvider |  |
| SocietalValueItem | GetType |  | SocietalValue |  |
| SocietalValueRequirement | GetSocietalValue |  | SocietalValue |  |
| SocietalValuesLateralView | GetPlayer |  | Country |  |
| SocietalValuesLateralView | Manager |  | LateralView |  |
| SocietalValuesLateralView | Vars |  | Context |  |
| SpecialStatus | MakeScope |  | Scope |  |
| SpecificGoodsOnMarketWrap | GetGoods |  | Goods |  |
| SpecificGoodsOnMarketWrap | GetMarket |  | Market |  |
| StaticModifier | GetModifier |  | DatabaseModifier |  |
| StrategicMilitaryObjectiveGlue | GetGroup |  | StrategicMilitaryObjectiveGroup |  |
| StrategicMilitaryObjectiveGlue | GetObjective |  | StrategicMilitaryObjective |  |
| StrategicMilitaryObjectiveGroup | GetCountry |  | Country |  |
| StrategicMilitaryObjectiveGroup | GetObjective |  | StrategicMilitaryObjective |  |
| StrategicObjectiveGroupGlue | GetObjectiveGroup |  | StrategicMilitaryObjectiveGroup |  |
| SubContinent | GetContinent |  | Continent |  |
| SubContinent | MakeScope |  | Scope |  |
| SubUnit | GetController |  | Country |  |
| SubUnit | GetDefinition |  | SubUnitType |  |
| SubUnit | GetHome |  | Location |  |
| SubUnit | GetMercenary |  | Mercenary |  |
| SubUnit | GetOwner |  | Country |  |
| SubUnit | GetUnit |  | Unit |  |
| SubUnit | GetUnitBox |  | SubUnitArray |  |
| SubUnit | MakeScope |  | Scope |  |
| SubUnitArray | GetUnit |  | Unit |  |
| SubUnitCategory | GetConstructionDemand |  | GoodsDemand |  |
| SubUnitCategory | GetMaintenanceDemand |  | GoodsDemand |  |
| SubUnitCategory | MakeScope |  | Scope |  |
| SubUnitCombatCounts | GetCategory |  | SubUnitCategory |  |
| SubUnitCount | GetSubUnitDefinition |  | SubUnitType |  |
| SubUnitCounts | GetCategory |  | SubUnitCategory |  |
| SubUnitType | GetAge |  | Age |  |
| SubUnitType | GetCategory |  | SubUnitCategory |  |
| SubUnitType | GetConstructionDemand |  | GoodsDemand |  |
| SubUnitType | GetMaintenanceDemand |  | GoodsDemand |  |
| SubUnitType | MakeScope |  | Scope |  |
| SubjectItem | GetCountry |  | Country |  |
| SubjectItem | GetProvince |  | Province |  |
| SubjectItem | GetRegion |  | Region |  |
| SubjectMilitaryStance | MakeScope |  | Scope |  |
| SubjectType | GetSubjectPays |  | Price |  |
| SubjectType | MakeScope |  | Scope |  |
| SubjectTypeItem | GetSubjectType |  | SubjectType |  |
| SupplyDepot | GetFood |  | FoodOwner |  |
| SupplyDepot | GetLocation |  | Location |  |
| SupplyDepot | GetOwner |  | Country |  |
| SupplyDepotMarker | GetLocation |  | Location |  |
| SupplyOnMarketWrap | GetGoods |  | Goods |  |
| SupplyOnMarketWrap | GetMarket |  | Market |  |
| SupportRebelLateralView | GetPlayer |  | Country |  |
| SupportRebelLateralView | Manager |  | LateralView |  |
| SupportRebelLateralView | Vars |  | Context |  |
| TacticalMilitaryObjectiveGroup | GetCountry |  | Country |  |
| TacticalMilitaryObjectiveGroup | GetObjective |  | MilitaryObjective |  |
| TacticalObjectiveGroupGlue | GetArmyRecruitmentDesired |  | ArmyStrength |  |
| TacticalObjectiveGroupGlue | GetArmyRecruitmentNeeded |  | ArmyStrength |  |
| TacticalObjectiveGroupGlue | GetNavyRecruitmentDesired |  | NavyStrength |  |
| TacticalObjectiveGroupGlue | GetNavyRecruitmentNeeded |  | NavyStrength |  |
| TacticalObjectiveGroupGlue | GetObjectiveGroup |  | TacticalMilitaryObjectiveGroup |  |
| TacticalObjectiveGroupGlue | GetTotalUnitsArmyStrength |  | ArmyStrength |  |
| TacticalObjectiveGroupGlue | GetTotalUnitsNavyStrength |  | NavyStrength |  |
| TargettedActionParameters | GetActor |  | Country |  |
| TargettedActionParameters | GetFirstObjectOfType | 1. unknown | InteractionTarget |  |
| TargettedActionParameters | GetProposer |  | Country |  |
| TargettedActionParameters | GetRecipient |  | InteractionTarget |  |
| TargettedActionParameters | GetTargetObjectFromFlag | 1. unknown | InteractionTarget |  |
| TaxRateSetting | GetEstate |  | Estate |  |
| TechnologyLateralView | GetAutocompleteFromKey | 1. unknown | Advance |  |
| TechnologyLateralView | GetPlayer |  | Country |  |
| TechnologyLateralView | GetSearchBar |  | SearchBar |  |
| TechnologyLateralView | GetSelectedAgeTechTree |  | TechTreeOneAge |  |
| TechnologyLateralView | Manager |  | LateralView |  |
| TechnologyLateralView | Vars |  | Context |  |
| TemporaryDemand | GetDemand |  | GoodsDemand |  |
| TextSearchFilter | GetFilter |  | SearchFilter |  |
| ThreatenTarget | GetLocation |  | Location |  |
| TickTaskDetailsView | GetTickTask |  | TickTaskData |  |
| TickTaskGraphItem | AccessTickTask |  | TickTaskData |  |
| TickTaskGraphItem | GetTickTask |  | TickTaskData |  |
| TimedModifier | GetModifier |  | DatabaseModifier |  |
| TollMarker | GetLocation |  | Location |  |
| TopScope | AddList | 1. unknown 2. unknown | TopScope |  |
| TopScope | AddScope | 1. unknown 2. unknown | TopScope |  |
| TopScope | GetLocalVariable | 1. unknown | Scope |  |
| TopScope | GetRootScope |  | Scope |  |
| TopScope | SetRoot | 1. unknown | TopScope |  |
| TopScope | sActiveResolution | 1. unknown | ActiveResolution |  |
| TopScope | sAdvanceType | 1. unknown | AdvanceDefinition |  |
| TopScope | sAge | 1. unknown | Age |  |
| TopScope | sArea | 1. unknown | Area |  |
| TopScope | sArtist | 1. unknown | Artist |  |
| TopScope | sAudioCulture | 1. unknown | AudioCultureType |  |
| TopScope | sAvatar | 1. unknown | Avatar |  |
| TopScope | sBuildingType | 1. unknown | BuildingType |  |
| TopScope | sCabinet | 1. unknown | Cabinet |  |
| TopScope | sCabinetAction | 1. unknown | CabinetAction |  |
| TopScope | sCardinal | 1. unknown | Cardinal |  |
| TopScope | sCasusBelli | 1. unknown | CasusBelli |  |
| TopScope | sCharacter | 1. unknown | Character |  |
| TopScope | sCharacterInteraction | 1. unknown | CharacterInteraction |  |
| TopScope | sChildEducation | 1. unknown | ChildEducation |  |
| TopScope | sClimate | 1. unknown | Climate |  |
| TopScope | sColonialCharter | 1. unknown | ColonialCharter |  |
| TopScope | sCombat | 1. unknown | Combat |  |
| TopScope | sCombatSide | 1. unknown | CombatSide |  |
| TopScope | sContinent | 1. unknown | Continent |  |
| TopScope | sCountry | 1. unknown | Country |  |
| TopScope | sCountryInteraction | 1. unknown | CountryInteraction |  |
| TopScope | sCountryRank | 1. unknown | CountryRank |  |
| TopScope | sCulture | 1. unknown | Culture |  |
| TopScope | sDialect | 1. unknown | Dialect |  |
| TopScope | sDisaster | 1. unknown | Disaster |  |
| TopScope | sDisasterType | 1. unknown | DisasterType |  |
| TopScope | sDisease | 1. unknown | Disease |  |
| TopScope | sDiseaseOutbreak | 1. unknown | DiseaseOutbreak |  |
| TopScope | sDynasty | 1. unknown | Dynasty |  |
| TopScope | sEmploymentSystem | 1. unknown | EmploymentSystem |  |
| TopScope | sEstate | 1. unknown | Estate |  |
| TopScope | sEstatePrivilege | 1. unknown | EstatePrivilege |  |
| TopScope | sEstateType | 1. unknown | EstateType |  |
| TopScope | sEthnicity | 1. unknown | Ethnicity |  |
| TopScope | sExploration | 1. unknown | Exploration |  |
| TopScope | sFormableCountry | 1. unknown | FormableCountry |  |
| TopScope | sGenericAction | 1. unknown | GenericAction |  |
| TopScope | sGod | 1. unknown | God |  |
| TopScope | sGoods | 1. unknown | Goods |  |
| TopScope | sGoodsDemand | 1. unknown | GoodsDemand |  |
| TopScope | sGovernmentReform | 1. unknown | GovernmentReform |  |
| TopScope | sGovernmentType | 1. unknown | GovernmentType |  |
| TopScope | sGraphicalCulture | 1. unknown | GraphicalCultureType |  |
| TopScope | sHegemony | 1. unknown | Hegemony |  |
| TopScope | sHeirSelection | 1. unknown | HeirSelection |  |
| TopScope | sHolySite | 1. unknown | HolySite |  |
| TopScope | sHolySiteDefinition | 1. unknown | HolySiteDefinition |  |
| TopScope | sHolySiteType | 1. unknown | HolySiteType |  |
| TopScope | sInstitution | 1. unknown | Institution |  |
| TopScope | sInternationalOrganization | 1. unknown | InternationalOrganization |  |
| TopScope | sInternationalOrganizationType | 1. unknown | InternationalOrganizationType |  |
| TopScope | sLandOwnershipRule | 1. unknown | LandOwnershipRule |  |
| TopScope | sLanguage | 1. unknown | Language |  |
| TopScope | sLanguageFamily | 1. unknown | LanguageFamily |  |
| TopScope | sLaw | 1. unknown | Law |  |
| TopScope | sLevySetup | 1. unknown | LevySetup |  |
| TopScope | sLoan | 1. unknown | Loan |  |
| TopScope | sLocation | 1. unknown | Location |  |
| TopScope | sLocationRank | 1. unknown | LocationRank |  |
| TopScope | sMarket | 1. unknown | Market |  |
| TopScope | sMercenary | 1. unknown | Mercenary |  |
| TopScope | sMissionDefinition | 1. unknown | MissionDefinition |  |
| TopScope | sMissionTaskDefinition | 1. unknown | MissionTaskDefinition |  |
| TopScope | sParliamentAgenda | 1. unknown | ParliamentAgenda |  |
| TopScope | sParliamentIssue | 1. unknown | ParliamentIssue |  |
| TopScope | sParliamentType | 1. unknown | ParliamentType |  |
| TopScope | sPayment | 1. unknown | Payment |  |
| TopScope | sPolicy | 1. unknown | Policy |  |
| TopScope | sPop | 1. unknown | Pop |  |
| TopScope | sPopType | 1. unknown | PopType |  |
| TopScope | sPrice | 1. unknown | Price |  |
| TopScope | sPrivateer | 1. unknown | Privateer |  |
| TopScope | sProductionMethod | 1. unknown | ProductionMethod |  |
| TopScope | sProvince | 1. unknown | Province |  |
| TopScope | sProvinceDefinition | 1. unknown | ProvinceDefinition |  |
| TopScope | sRebel | 1. unknown | Rebel |  |
| TopScope | sRecruitmentMethod | 1. unknown | RecruitmentMethod |  |
| TopScope | sRegencyType | 1. unknown | RegencyType |  |
| TopScope | sRegion | 1. unknown | Region |  |
| TopScope | sRelationType | 1. unknown | ScriptedRelationType |  |
| TopScope | sReligion | 1. unknown | Religion |  |
| TopScope | sReligionGroup | 1. unknown | ReligionGroup |  |
| TopScope | sReligiousAspect | 1. unknown | ReligiousAspect |  |
| TopScope | sReligiousFaction | 1. unknown | ReligiousFaction |  |
| TopScope | sReligiousFigure | 1. unknown | ReligiousFigure |  |
| TopScope | sReligiousFocus | 1. unknown | ReligiousFocus |  |
| TopScope | sReligiousSchool | 1. unknown | ReligiousSchool |  |
| TopScope | sResolution | 1. unknown | Resolution |  |
| TopScope | sRoadType | 1. unknown | RoadType |  |
| TopScope | sScriptableHintDefinition | 1. unknown | ScriptableHintDefinition |  |
| TopScope | sScriptedPeaceTreatyType | 1. unknown | ScriptedPeaceTreatyType |  |
| TopScope | sSiege | 1. unknown | Siege |  |
| TopScope | sSituation | 1. unknown | Situation |  |
| TopScope | sSocietalValue | 1. unknown | SocietalValue |  |
| TopScope | sSpecialStatus | 1. unknown | SpecialStatus |  |
| TopScope | sSubContinent | 1. unknown | SubContinent |  |
| TopScope | sSubUnit | 1. unknown | SubUnit |  |
| TopScope | sSubUnitCategory | 1. unknown | SubUnitCategory |  |
| TopScope | sSubjectMilitaryStance | 1. unknown | SubjectMilitaryStance |  |
| TopScope | sSubjectType | 1. unknown | SubjectType |  |
| TopScope | sTopography | 1. unknown | Topography |  |
| TopScope | sTrade | 1. unknown | Trade |  |
| TopScope | sTrait | 1. unknown | Trait |  |
| TopScope | sUnit | 1. unknown | Unit |  |
| TopScope | sUnitAbility | 1. unknown | UnitAbility |  |
| TopScope | sUnitType | 1. unknown | SubUnitType |  |
| TopScope | sVegetation | 1. unknown | Vegetation |  |
| TopScope | sWar | 1. unknown | War |  |
| TopScope | sWeatherSystem | 1. unknown | WeatherSystem |  |
| TopScope | sWorkOfArt | 1. unknown | WorkOfArt |  |
| TopScope | sWorkOfArtType | 1. unknown | WorkOfArtType |  |
| Topography | MakeScope |  | Scope |  |
| Trade | GetCapacityMarket |  | Market |  |
| Trade | GetFromMarket |  | Market |  |
| Trade | GetFromPort |  | Location |  |
| Trade | GetGoods |  | Goods |  |
| Trade | GetOwner |  | Country |  |
| Trade | GetSoundToll |  | Location |  |
| Trade | GetToMarket |  | Market |  |
| Trade | GetToPort |  | Location |  |
| Trade | MakeScope |  | Scope |  |
| TradeDetailsLateralView | GetPlayer |  | Country |  |
| TradeDetailsLateralView | GetTrade |  | Trade |  |
| TradeDetailsLateralView | GetUIAction |  | UIActionProvider |  |
| TradeDetailsLateralView | Manager |  | LateralView |  |
| TradeDetailsLateralView | Vars |  | Context |  |
| TradeOverview | GetCurrentNeedsSortSearch |  | FilteredSortedList |  |
| TradeOverview | GetMarketsSortSearch |  | FilteredSortedList |  |
| TradeOverview | GetPlayer |  | Country |  |
| TradeOverview | GetSelectedMarket |  | Market |  |
| TradeOverview | GetTradeCategoriesSortSearch |  | FilteredSortedList |  |
| TradeOverview | Manager |  | LateralView |  |
| TradeOverview | Vars |  | Context |  |
| TradePathItem | GetLocation |  | Location |  |
| TradesWrap | GetSelectedTrade |  | Trade |  |
| Trait | GetFlavor |  | TraitCategory |  |
| Trait | MakeScope |  | Scope |  |
| TransactionProportion | GetEntity |  | InteractionTarget |  |
| TransferUnit | GetSubUnit |  | SubUnit |  |
| TransferUnit | GetTarget |  | Unit |  |
| TransferUnitType | GetCountsCache |  | SubUnitCounts |  |
| TransferUnitType | GetTarget |  | Unit |  |
| UIMessage | GetBattleResult |  | BattleResult |  |
| UIMessage | GetCharacter |  | Character |  |
| UIMessage | GetCombat |  | Combat |  |
| UIMessage | GetFirstTag |  | Country |  |
| UIMessage | GetGoods |  | Goods |  |
| UIMessage | GetInstitution |  | Institution |  |
| UIMessage | GetInternationalOrganization |  | InternationalOrganization |  |
| UIMessage | GetMissionDefinition |  | MissionDefinition |  |
| UIMessage | GetMissionTaskDefinition |  | MissionTaskDefinition |  |
| UIMessage | GetReligion |  | Religion |  |
| UIMessage | GetSecondaryTag |  | Country |  |
| UIMessage | GetSiege |  | Siege |  |
| UIMessage | GetSituation |  | Situation |  |
| UIMessage | GetUnit |  | Unit |  |
| UniqueContentItem | GetAdvanceDefinition |  | AdvanceDefinition |  |
| UniqueContentItem | GetAge |  | Age |  |
| UniqueContentItem | GetBuildingType |  | BuildingType |  |
| UniqueContentItem | GetCabinetAction |  | CabinetAction |  |
| UniqueContentItem | GetCountryInteraction |  | CountryInteraction |  |
| UniqueContentItem | GetEstatePrivilege |  | EstatePrivilege |  |
| UniqueContentItem | GetGovernmentReform |  | GovernmentReform |  |
| UniqueContentItem | GetLaw |  | Law |  |
| UniqueContentItem | GetLevySetup |  | LevySetup |  |
| UniqueContentItem | GetSubUnitDef |  | SubUnitType |  |
| Unit | GetActivity |  | UnitActivity |  |
| Unit | GetCombat |  | Combat |  |
| Unit | GetCommander |  | Character |  |
| Unit | GetCountry |  | Country |  |
| Unit | GetFirstUnitOnBoard |  | Unit |  |
| Unit | GetLoadedOn |  | Unit |  |
| Unit | GetLocation |  | Location |  |
| Unit | GetObjectiveGroup |  | TacticalMilitaryObjectiveGroup |  |
| Unit | GetQuickUnitActions |  | QuickUnitActions |  |
| Unit | GetSiege |  | Siege |  |
| Unit | GetSupplySource |  | Location |  |
| Unit | GetTimedModifierOwner |  | TimedModifierOwner |  |
| Unit | GetUnitBox | 1. unknown | SubUnitArray |  |
| Unit | GetVisualSubunit |  | SubUnit |  |
| Unit | MakeScope |  | Scope |  |
| UnitAbility | MakeScope |  | Scope |  |
| UnitActionItem | GetAbility |  | UnitAbility |  |
| UnitDetailsView | GetUnit |  | Unit |  |
| UnitGlue | AccessUnit |  | Unit |  |
| UnitGlue | GetSelectAction |  | UIActionProvider |  |
| UnitGlue | GetUnit |  | Unit |  |
| UnitItem | AccessUnit |  | Unit |  |
| UnitItem | GetUICommanderAction |  | UIActionProvider |  |
| UnitItem | GetUIHeaderAction |  | UIActionProvider |  |
| UnitItem | GetUnit |  | Unit |  |
| UnitMarker | GetLeadingUnit |  | Unit |  |
| UnitMarker | GetSiege |  | Siege |  |
| UnitMarkerItem | GetCountry |  | Country |  |
| UnitMarkerItem | GetMilitaryObjectiveGroup |  | TacticalMilitaryObjectiveGroup |  |
| UnitMarkerItem | GetQuickUnitActions |  | QuickUnitActions |  |
| UnitMarkerItem | GetUnit |  | Unit |  |
| UnitOverview | GetArmyUnitsSortSearch |  | FilteredSortedList |  |
| UnitOverview | GetNavyUnitsSortSearch |  | FilteredSortedList |  |
| UnitOverview | GetPlayer |  | Country |  |
| UnitOverview | GetRecruitArmyUIAction |  | UIActionProvider |  |
| UnitOverview | GetRecruitNavyUIAction |  | UIActionProvider |  |
| UnitOverview | GetSelectObjectiveArmyAction |  | UnitActionItem |  |
| UnitOverview | GetSelectObjectiveNavyAction |  | UnitActionItem |  |
| UnitOverview | Manager |  | LateralView |  |
| UnitOverview | Vars |  | Context |  |
| UnitSuppliesWrap | GetSelectedUnit |  | Unit |  |
| UnitTransportStateBag | GetArmyDisembarkLocation |  | Location |  |
| UnitTransportStateBag | GetArmyEmbarkLocation |  | Location |  |
| UnitTransportStateBag | GetShipDisembarkLocation |  | Location |  |
| UnitTransportStateBag | GetShipEmbarkLocation |  | Location |  |
| UnitTypeItem | GetUnitType |  | SubUnitType |  |
| UnitTypeLateralView | GetPlayer |  | Country |  |
| UnitTypeLateralView | GetUnitType |  | SubUnitType |  |
| UnitTypeLateralView | Manager |  | LateralView |  |
| UnitTypeLateralView | Vars |  | Context |  |
| UnitsWrap | GetSelectedUnit |  | Unit |  |
| UnprofitableBuildingsEntry | GetMarket |  | Market |  |
| VariableEntry | AccessScopeEditor |  | ScopeObjectEditor |  |
| VariableInspectorEntry | AccessVariable |  | VariableInspectorVariable |  |
| VariableInspectorPlugin | AccessSetupVariable |  | VariableInspectorVariable |  |
| VariableInspectorVariable | AccessScopeEditor |  | ScopeObjectEditor |  |
| VariableListEntry | AccessScopeEditor |  | ScopeObjectEditor |  |
| VariableListInspectorPlugin | AccessListStore |  | VariableListStore |  |
| VariableListStore | AccessNewEntryEditor |  | ScopeObjectEditor |  |
| VariableStore | AccessNewEntryEditor |  | ScopeObjectEditor |  |
| Vegetation | MakeScope |  | Scope |  |
| VfsMountPathBrowser | GetFirstSelectedNode |  | VfsMountPathBrowserEntryNode |  |
| ViewerEntity | State |  | ViewerEntityState |  |
| VoteGlue | GetVoteObject |  | InteractionTarget |  |
| VoteTargetGlue | GetVoteTarget |  | InteractionTarget |  |
| VoterGlue | GetVoter |  | Country |  |
| War | GetAttackerLosses |  | WarLosses |  |
| War | GetAttackerWarLeader |  | Country |  |
| War | GetDefenderLosses |  | WarLosses |  |
| War | GetDefenderWarLeader |  | Country |  |
| War | GetLossesFor | 1. unknown | WarLosses |  |
| War | GetOriginalAttacker |  | Country |  |
| War | GetWarGoal |  | WarGoal |  |
| War | GetWarGoalController |  | Country |  |
| War | MakeScope |  | Scope |  |
| WarGlue | GetAttackers |  | WarSideGlue |  |
| WarGlue | GetDefenders |  | WarSideGlue |  |
| WarGoal | GetCasusBelli |  | CasusBelli |  |
| WarGoal | GetWar |  | War |  |
| WarGoal | GetWarGoalType |  | WarGoalType |  |
| WarImpactWrap | GetAntagonism |  | AntagonismBombsSpec |  |
| WarItem | GetWar |  | War |  |
| WarLateralView | GetEnemyLeader |  | Country |  |
| WarLateralView | GetEnemyParticipantsSortSearch |  | FilteredSortedList |  |
| WarLateralView | GetEnforceAttackerPeace |  | DiplomaticActionItem |  |
| WarLateralView | GetEnforceDefenderPeace |  | DiplomaticActionItem |  |
| WarLateralView | GetFriendlyLeader |  | Country |  |
| WarLateralView | GetFriendlyParticipantsSortSearch |  | FilteredSortedList |  |
| WarLateralView | GetInterveneInAttackerWar |  | DiplomaticActionItem |  |
| WarLateralView | GetInterveneInDefenderWar |  | DiplomaticActionItem |  |
| WarLateralView | GetPlayer |  | Country |  |
| WarLateralView | GetWar |  | War |  |
| WarLateralView | Manager |  | LateralView |  |
| WarLateralView | Vars |  | Context |  |
| WarLateralViewBattle | GetBattleResult |  | BattleResult |  |
| WarLateralViewBattle | GetCombat |  | Combat |  |
| WarLateralViewParticipant | AccessWarLateralView |  | WarLateralView |  |
| WarLateralViewParticipant | GetCountry |  | Country |  |
| WarLateralViewParticipant | GetWarLateralView |  | WarLateralView |  |
| WarMessage | GetFirstCountry |  | Country |  |
| WarMessage | GetSecondCountry |  | Country |  |
| WarParticipant | GetCountry |  | Country |  |
| WarParticipantGlue | GetCountry |  | Country |  |
| WarParticipantGlue | GetWar |  | War |  |
| WarSideGlue | GetSelectedParticipant |  | WarParticipantGlue |  |
| WarSideGlue | GetWar |  | War |  |
| WarViewer | GetCurrentWar |  | WarGlue |  |
| WarsLedger | GetPlayer |  | Country |  |
| WarsLedger | GetWarsSortSearch |  | FilteredSortedList |  |
| WarsLedger | Manager |  | LateralView |  |
| WarsLedger | Vars |  | Context |  |
| WarsOverviewWar | GetMainEnemy |  | Country |  |
| WarsOverviewWar | GetWar |  | War |  |
| WeatherSystem | MakeScope |  | Scope |  |
| WorkOfArt | GetCreator |  | Character |  |
| WorkOfArt | GetDefinition |  | WorkOfArtType |  |
| WorkOfArt | GetLocation |  | Location |  |
| WorkOfArt | GetOrigin |  | Location |  |
| WorkOfArt | GetOwner |  | Country |  |
| WorkOfArt | MakeScope |  | Scope |  |
| WorkOfArtType | MakeScope |  | Scope |  |

## References

1. [↑](#cite_ref-1) More precisely, "UpperCamelCase" or "PascalCase"

---

* To update the tables, see [Module:GUI script/Functions/Updates](/Module%3AGUI_script/Functions/Updates "Module:GUI script/Functions/Updates") and [Module:GUI script/Promotes/Updates](/Module%3AGUI_script/Promotes/Updates "Module:GUI script/Promotes/Updates")

[Modding](/Modding "Modding")[Return to top](#top)

|  |  |
| --- | --- |
| Documentation | [Defines](/Defines "Defines") • [Effects](/Effect "Effect") • [Scopes](/Scope "Scope") • [Scope links](/Scope_link "Scope link") • [Triggers](/Trigger "Trigger")  [Colors](/Color "Color") • [Macros](/Macro "Macro") • [Mean time to happen](/Mean_time_to_happen "Mean time to happen") • [Modifier types](/Modifier_types "Modifier types") • [On actions](/On_actions "On actions") • [Script value](/Script_value "Script value") • [Variables](/Variable "Variable")  GUI script • [Localization](/Localization "Localization") |

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
| Tools | [Arcanum](/Arcanum "Arcanum") • [PDX DeepL](/PDX_DeepL "PDX DeepL") • [PDX Flag Builder](/PDX_Flag_Builder "PDX Flag Builder") • [PDX Workshop Manager](/PDX_Workshop_Manager "PDX Workshop Manager") • [Community Mod Toolkit](/Community_Mod_Toolkit "Community Mod Toolkit") • **[Add Your Tool to the Wiki](/Form%3AModding_tool "Form:Modding tool")** |