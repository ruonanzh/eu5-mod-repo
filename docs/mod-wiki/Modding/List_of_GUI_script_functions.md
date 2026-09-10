<!-- source: https://eu5.paradoxwikis.com/List_of_GUI_script_functions revid: 32998 fetched: 2026-09-09 -->
# List of GUI script functions

*Main article: [GUI script](/GUI_script "GUI script")*

This page lists all of the GUI script functions, as the list is too large to directly include on the GUI script main page.

To update any of these tables, use [Module:GUI script/Functions/Updates](/Module%3AGUI_script/Functions/Updates "Module:GUI script/Functions/Updates") (for global functions) or the per-section updates modules (e.g. [Module:GUI script/Functions/A-D/Updates](/Module%3AGUI_script/Functions/A-D/Updates "Module:GUI script/Functions/A-D/Updates")).

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

### Lists of all scoped functions

List of all A-D GUI functions/a-d

| Type | Functions/A- | Arguments | Output | Description |
| --- | --- | --- | --- | --- |
| AISettingsMenu | AccessSelf |  | AISettingsMenu |  |
| AISettingsMenu | Close |  | void |  |
| AISettingsMenu | GetItems |  | unknown |  |
| AISettingsMenu | Reset |  | void |  |
| AISettingsMenu | Save |  | void |  |
| AISettingsMenu | Self |  | AISettingsMenu |  |
| AISettingsMenu | UpdateFilter |  | void |  |
| AISettingsMenuItem | AccessSelf |  | AISettingsMenuItem |  |
| AISettingsMenuItem | GetText |  | CString |  |
| AISettingsMenuItem | GetTooltip |  | CString |  |
| AISettingsMenuItem | GetValue |  | bool |  |
| AISettingsMenuItem | Self |  | AISettingsMenuItem |  |
| AISettingsMenuItem | SetValue | 1. unknown | void |  |
| AccountInventory | AccessSelf |  | AccountInventory |  |
| AccountInventory | HasItem | 1. unknown | bool |  |
| AccountInventory | HasRetrievedInventory |  | bool |  |
| AccountInventory | Self |  | AccountInventory |  |
| Achievement | AccessSelf |  | Achievement |  |
| Achievement | IsUnlocked |  | bool |  |
| Achievement | Self |  | Achievement |  |
| AchievementPopup | AccessJustUnlockedAchievements |  | unknown |  |
| AchievementPopup | AccessSelf |  | AchievementPopup |  |
| AchievementPopup | Self |  | AchievementPopup |  |
| AchievementPopup | ShowWindow |  | void |  |
| AchievementWindow | AccessGroups |  | unknown |  |
| AchievementWindow | AccessSelf |  | AchievementWindow |  |
| AchievementWindow | HasGameStarted |  | bool |  |
| AchievementWindow | Hide |  | void |  |
| AchievementWindow | Self |  | AchievementWindow |  |
| AchievementWindow | ShouldShowAll |  | bool |  |
| AchievementWindow | ShouldShowLocked |  | bool |  |
| AchievementWindow | ShouldShowPossible |  | bool |  |
| AchievementWindow | ShouldShowUnlocked |  | bool |  |
| AchievementWindow | Show |  | void |  |
| AchievementWindow | ShowAll |  | void |  |
| AchievementWindow | ShowLocked |  | void |  |
| AchievementWindow | ShowPossible |  | void |  |
| AchievementWindow | ShowUnlocked |  | void |  |
| ActionGroup | AccessSelf |  | ActionGroup |  |
| ActionGroup | GetActions |  | unknown |  |
| ActionGroup | GetGroupIcon |  | unknown |  |
| ActionGroup | GetGroupKey |  | CString |  |
| ActionGroup | GetName |  | CString |  |
| ActionGroup | Self |  | ActionGroup |  |
| ActiveClip | AccessSelf |  | ActiveClip |  |
| ActiveClip | CanStepBackwardsOneFrame |  | bool |  |
| ActiveClip | CanStepForwardOneFrame |  | bool |  |
| ActiveClip | ConditionalEventsKeyframes |  | unknown |  |
| ActiveClip | CurrentTime |  | float |  |
| ActiveClip | FrameCount |  | int32 |  |
| ActiveClip | HasActiveAnimation |  | bool |  |
| ActiveClip | HasAnimation |  | bool |  |
| ActiveClip | IsInfinite |  | bool |  |
| ActiveClip | KeyframeLanes |  | unknown |  |
| ActiveClip | Length |  | float |  |
| ActiveClip | Name |  | CString |  |
| ActiveClip | NeedleText |  | CString |  |
| ActiveClip | Self |  | ActiveClip |  |
| ActiveClipEventsKeyframe | AccessSelf |  | ActiveClipEventsKeyframe |  |
| ActiveClipEventsKeyframe | EventCountText |  | CString |  |
| ActiveClipEventsKeyframe | Self |  | ActiveClipEventsKeyframe |  |
| ActiveClipEventsKeyframe | Time |  | float |  |
| ActiveClipEventsKeyframe | Tooltip |  | CString |  |
| ActiveHegemon | AccessSelf |  | ActiveHegemon |  |
| ActiveHegemon | GetActiveHegemonInfo |  | CString |  |
| ActiveHegemon | GetAnotherAge |  | CString |  |
| ActiveHegemon | GetBaseInfo |  | CString |  |
| ActiveHegemon | GetConditions |  | CString |  |
| ActiveHegemon | GetCurrent |  | unknown |  |
| ActiveHegemon | GetGreatPowerStatistic |  | CString |  |
| ActiveHegemon | GetHegemony |  | unknown |  |
| ActiveHegemon | IsActive |  | bool |  |
| ActiveHegemon | NeedsAnotherAge |  | bool |  |
| ActiveHegemon | Self |  | ActiveHegemon |  |
| ActiveHegemonItem | AccessSelf |  | ActiveHegemonItem |  |
| ActiveHegemonItem | GetHegemon |  | unknown |  |
| ActiveHegemonItem | Self |  | ActiveHegemonItem |  |
| ActiveInstitution | AccessSelf |  | ActiveInstitution |  |
| ActiveInstitution | GetBirthPlace |  | unknown |  |
| ActiveInstitution | GetInstitution |  | unknown |  |
| ActiveInstitution | IsActive |  | bool |  |
| ActiveInstitution | Self |  | ActiveInstitution |  |
| ActiveParliamentAgenda | AccessSelf |  | ActiveParliamentAgenda |  |
| ActiveParliamentAgenda | GetAgenda |  | unknown |  |
| ActiveParliamentAgenda | GetConditionsWithCountryContext | 1. unknown | CString |  |
| ActiveParliamentAgenda | GetConditionsWithIOContext | 1. unknown | CString |  |
| ActiveParliamentAgenda | GetDescription |  | CString |  |
| ActiveParliamentAgenda | GetEffect |  | CString |  |
| ActiveParliamentAgenda | GetEffectWithCountryConext | 1. unknown | CString |  |
| ActiveParliamentAgenda | GetEffectWithIOConext | 1. unknown | CString |  |
| ActiveParliamentAgenda | GetName |  | CString |  |
| ActiveParliamentAgenda | GetNameWithNoTooltip |  | CString |  |
| ActiveParliamentAgenda | GetSpecialStatus |  | unknown |  |
| ActiveParliamentAgenda | GetSupport | 1. unknown | CFixedPoint |  |
| ActiveParliamentAgenda | GetSupportInfo | 1. unknown | CString |  |
| ActiveParliamentAgenda | Self |  | ActiveParliamentAgenda |  |
| ActiveParliamentAgendaWrap | AccessSelf |  | ActiveParliamentAgendaWrap |  |
| ActiveParliamentAgendaWrap | GetDescription |  | CString |  |
| ActiveParliamentAgendaWrap | GetEffect |  | CString |  |
| ActiveParliamentAgendaWrap | GetEstateType |  | unknown |  |
| ActiveParliamentAgendaWrap | GetNameWithNoTooltip |  | CString |  |
| ActiveParliamentAgendaWrap | GetSpecialStatus |  | unknown |  |
| ActiveParliamentAgendaWrap | IsOrganizationAgenda |  | bool |  |
| ActiveParliamentAgendaWrap | Self |  | ActiveParliamentAgendaWrap |  |
| ActiveProductionMethod | AccessSelf |  | ActiveProductionMethod |  |
| ActiveProductionMethod | GetActiveInputScale |  | CFixedPoint |  |
| ActiveProductionMethod | GetInputGoodsAccess |  | CFixedPoint |  |
| ActiveProductionMethod | GetMethod |  | unknown |  |
| ActiveProductionMethod | GetOutputLevel |  | CFixedPoint |  |
| ActiveProductionMethod | Self |  | ActiveProductionMethod |  |
| ActiveResolution | AccessSelf |  | ActiveResolution |  |
| ActiveResolution | GetAbstentions |  | CFixedPoint |  |
| ActiveResolution | GetAbstentionsNeededVotesPercentage |  | CFixedPoint |  |
| ActiveResolution | GetAbstentionsPercentage |  | CFixedPoint |  |
| ActiveResolution | GetAbstentionsTotalVotesPercentage |  | CFixedPoint |  |
| ActiveResolution | GetDesc |  | CString |  |
| ActiveResolution | GetName |  | CString |  |
| ActiveResolution | GetParams |  | unknown |  |
| ActiveResolution | GetPotentialVoteImpact | 1. unknown | CFixedPoint |  |
| ActiveResolution | GetPotentialVoteImpactNeededVotesPercentageRef | 1. unknown | CFixedPoint |  |
| ActiveResolution | GetPotentialVoteImpactPercentage | 1. unknown | CFixedPoint |  |
| ActiveResolution | GetPotentialVoteImpactTotalVotesPercentageRef | 1. unknown | CFixedPoint |  |
| ActiveResolution | GetProposer |  | unknown |  |
| ActiveResolution | GetResolution |  | unknown |  |
| ActiveResolution | GetTarget | 1. unknown | unknown |  |
| ActiveResolution | GetTitle |  | CString |  |
| ActiveResolution | GetTotalVotesAvailable |  | CFixedPoint |  |
| ActiveResolution | GetTotalVotesNeeded |  | CFixedPoint |  |
| ActiveResolution | GetVotesFor | 1. unknown | CFixedPoint |  |
| ActiveResolution | GetVotesForPercentage | 1. unknown | CFixedPoint |  |
| ActiveResolution | MakeScope |  | Scope | Jomini Script System |
| ActiveResolution | Self |  | ActiveResolution |  |
| ActiveResolution | VoteWillFail | 1. unknown | bool |  |
| ActiveResolutionContainer | AccessSelf |  | ActiveResolutionContainer |  |
| ActiveResolutionContainer | GetActiveResolution | 1. unknown | unknown |  |
| ActiveResolutionContainer | GetActiveResolutionFromKey | 1. unknown | unknown |  |
| ActiveResolutionContainer | HasActiveResolution | 1. unknown | bool |  |
| ActiveResolutionContainer | HasActiveResolutionFromKey | 1. unknown | bool |  |
| ActiveResolutionContainer | ResolutionIsActive | 1. unknown | bool |  |
| ActiveResolutionContainer | Self |  | ActiveResolutionContainer |  |
| ActiveSituation | AccessSelf |  | ActiveSituation |  |
| ActiveSituation | GetActiveResolution | 1. unknown | unknown |  |
| ActiveSituation | GetActiveResolutionFromKey | 1. unknown | unknown |  |
| ActiveSituation | GetDesc |  | CString |  |
| ActiveSituation | GetEndDate |  | CString |  |
| ActiveSituation | GetIcon |  | unknown |  |
| ActiveSituation | GetInfo |  | CString |  |
| ActiveSituation | GetMonthly |  | CString |  |
| ActiveSituation | GetName |  | CString |  |
| ActiveSituation | GetNameWithNoTooltip |  | CString |  |
| ActiveSituation | GetSituation |  | unknown |  |
| ActiveSituation | GetStartDate |  | CString |  |
| ActiveSituation | GetTextWithScope | 1. unknown | CString |  |
| ActiveSituation | HasActiveResolution | 1. unknown | bool |  |
| ActiveSituation | HasActiveResolutionFromKey | 1. unknown | bool |  |
| ActiveSituation | HasEnded |  | bool |  |
| ActiveSituation | ResolutionIsActive | 1. unknown | bool |  |
| ActiveSituation | Self |  | ActiveSituation |  |
| AddFriendWindow | AccessSelf |  | AddFriendWindow |  |
| AddFriendWindow | Hide |  | void |  |
| AddFriendWindow | Self |  | AddFriendWindow |  |
| AddFriendWindow | ShouldBeShown |  | bool |  |
| AddFriendWindow | Show |  | void |  |
| AddUpdateGraphNodeWindow | AccessSelf |  | AddUpdateGraphNodeWindow |  |
| AddUpdateGraphNodeWindow | GetReadComponentsString |  | CString |  |
| AddUpdateGraphNodeWindow | GetWriteComponentsString |  | CString |  |
| AddUpdateGraphNodeWindow | Self |  | AddUpdateGraphNodeWindow |  |
| AdjacencyDistanceWrap | AccessSelf |  | AdjacencyDistanceWrap |  |
| AdjacencyDistanceWrap | GetName |  | CString |  |
| AdjacencyDistanceWrap | GetTooltip |  | CString |  |
| AdjacencyDistanceWrap | Self |  | AdjacencyDistanceWrap |  |
| AdjacencyMarketAccessWrap | AccessSelf |  | AdjacencyMarketAccessWrap |  |
| AdjacencyMarketAccessWrap | GetName |  | CString |  |
| AdjacencyMarketAccessWrap | GetTooltip |  | CString |  |
| AdjacencyMarketAccessWrap | Self |  | AdjacencyMarketAccessWrap |  |
| Advance | AccessSelf |  | Advance |  |
| Advance | GetAge |  | unknown |  |
| Advance | GetChildren |  | unknown |  |
| Advance | GetDebugText |  | CString |  |
| Advance | GetDefinition |  | unknown |  |
| Advance | GetName |  | CString |  |
| Advance | GetNameWithNoTooltip |  | CString |  |
| Advance | GetResearchCost |  | int32 |  |
| Advance | GetResearchCostForInfo |  | CString |  |
| Advance | GetTooltip |  | CString |  |
| Advance | IsResearchedByPlayer |  | bool |  |
| Advance | IsRoot |  | bool |  |
| Advance | Self |  | Advance |  |
| AdvanceDefinition | AccessSelf |  | AdvanceDefinition |  |
| AdvanceDefinition | GetAge |  | unknown |  |
| AdvanceDefinition | GetConditions |  | CString |  |
| AdvanceDefinition | GetDebugText |  | CString |  |
| AdvanceDefinition | GetDesc |  | CString |  |
| AdvanceDefinition | GetEffects |  | CString |  |
| AdvanceDefinition | GetEffectsNoTooltip |  | CString |  |
| AdvanceDefinition | GetFirstSubunitUnlock |  | unknown |  |
| AdvanceDefinition | GetModifier |  | unknown |  |
| AdvanceDefinition | GetName |  | CString |  |
| AdvanceDefinition | GetNameWithNoTooltip |  | CString |  |
| AdvanceDefinition | GetRequirementInfo |  | CString |  |
| AdvanceDefinition | GetTooltip |  | CString |  |
| AdvanceDefinition | HasAbilityUnlocks |  | bool |  |
| AdvanceDefinition | HasArmyUnlocks |  | bool |  |
| AdvanceDefinition | HasBuildingUnlocks |  | bool |  |
| AdvanceDefinition | HasCabinetActionUnlocks |  | bool |  |
| AdvanceDefinition | HasCasusBelliUnlocks |  | bool |  |
| AdvanceDefinition | HasCountryInteractionUnlocks |  | bool |  |
| AdvanceDefinition | HasDiplomaticUnlocks |  | bool |  |
| AdvanceDefinition | HasEstatePrivilegeUnlocks |  | bool |  |
| AdvanceDefinition | HasGovernmentReformUnlocks |  | bool |  |
| AdvanceDefinition | HasHeirSelectionUnlocks |  | bool |  |
| AdvanceDefinition | HasInteractionUnlocks |  | bool |  |
| AdvanceDefinition | HasLawUnlocks |  | bool |  |
| AdvanceDefinition | HasLevyUnlocks |  | bool |  |
| AdvanceDefinition | HasNavyUnlocks |  | bool |  |
| AdvanceDefinition | HasPolicyUnlocks |  | bool |  |
| AdvanceDefinition | HasProductionMethodUnlocks |  | bool |  |
| AdvanceDefinition | HasRelationTypeUnlocks |  | bool |  |
| AdvanceDefinition | HasSubjectTypeUnlocks |  | bool |  |
| AdvanceDefinition | HasSubunitUnlocks |  | bool |  |
| AdvanceDefinition | HasUnlocks |  | bool |  |
| AdvanceDefinition | MakeScope |  | Scope | Jomini Script System |
| AdvanceDefinition | Self |  | AdvanceDefinition |  |
| AdvanceEffectItem | AccessSelf |  | AdvanceEffectItem |  |
| AdvanceEffectItem | GetDescEffect |  | CString |  |
| AdvanceEffectItem | GetIcon |  | CString |  |
| AdvanceEffectItem | GetTitleEffect |  | CString |  |
| AdvanceEffectItem | Self |  | AdvanceEffectItem |  |
| AdvanceItem | AccessSelf |  | AdvanceItem |  |
| AdvanceItem | AddToResearchQueue |  | void |  |
| AdvanceItem | CanAddToResearchQueue |  | bool |  |
| AdvanceItem | CanOpenTree |  | bool |  |
| AdvanceItem | CanRemoveFromResearchQueue |  | bool |  |
| AdvanceItem | GetAddToResearchQueueConditions |  | CString |  |
| AdvanceItem | GetAddToResearchQueueCost |  | CString |  |
| AdvanceItem | GetAdvance |  | unknown |  |
| AdvanceItem | GetAdvanceEffectItemsNoTooltip |  | unknown |  |
| AdvanceItem | GetChoiceIcon |  | unknown |  |
| AdvanceItem | GetEffects |  | CString |  |
| AdvanceItem | GetEffectsNoTooltip |  | CString |  |
| AdvanceItem | GetKey |  | CString |  |
| AdvanceItem | GetName |  | CString |  |
| AdvanceItem | GetRemoveFromResearchQueueConditions |  | CString |  |
| AdvanceItem | GetRemoveFromResearchQueueCost |  | CString |  |
| AdvanceItem | GetResearchQueueSlot |  | CString |  |
| AdvanceItem | GetUnlockInformation |  | CString |  |
| AdvanceItem | IsAbilityUnlock |  | bool |  |
| AdvanceItem | IsBuildingUnlock |  | bool |  |
| AdvanceItem | IsCasusBelliUnlock |  | bool |  |
| AdvanceItem | IsChoiceUnlock |  | bool |  |
| AdvanceItem | IsCountryInteractionUnlock |  | bool |  |
| AdvanceItem | IsCountryTypeUnlock |  | bool |  |
| AdvanceItem | IsCountryUnlock |  | bool |  |
| AdvanceItem | IsCurrentResearch |  | bool |  |
| AdvanceItem | IsDiplomaticUnlock |  | bool |  |
| AdvanceItem | IsGovernmentReformUnlock |  | bool |  |
| AdvanceItem | IsGovernmentUnlock |  | bool |  |
| AdvanceItem | IsHeirSelectionUnlock |  | bool |  |
| AdvanceItem | IsHighlightedBySearch |  | bool |  |
| AdvanceItem | IsInResearchQueue |  | bool |  |
| AdvanceItem | IsInteractionUnlock |  | bool |  |
| AdvanceItem | IsLawUnlock |  | bool |  |
| AdvanceItem | IsOwned |  | bool |  |
| AdvanceItem | IsPolicyUnlock |  | bool |  |
| AdvanceItem | IsRelationTypeUnlock |  | bool |  |
| AdvanceItem | IsReligionUnlock |  | bool |  |
| AdvanceItem | IsSpecialUnlock |  | bool |  |
| AdvanceItem | IsSubjectTypeUnlock |  | bool |  |
| AdvanceItem | IsSubunitUnlock |  | bool |  |
| AdvanceItem | IsUnlockedAdvance |  | bool |  |
| AdvanceItem | RemoveFromResearchQueue |  | void |  |
| AdvanceItem | Self |  | AdvanceItem |  |
| AdvanceLineItem | AccessSelf |  | AdvanceLineItem |  |
| AdvanceLineItem | GetColor |  | CVector4f |  |
| AdvanceLineItem | GetFrom |  | CVector2f |  |
| AdvanceLineItem | GetLineFrom |  | CVector2f |  |
| AdvanceLineItem | GetLineTo |  | CVector2f |  |
| AdvanceLineItem | GetMask |  | unknown |  |
| AdvanceLineItem | GetPoints |  | unknown |  |
| AdvanceLineItem | GetPointsInContainer |  | unknown |  |
| AdvanceLineItem | GetPosition |  | CVector2f |  |
| AdvanceLineItem | GetSize |  | CVector2f |  |
| AdvanceLineItem | GetTo |  | CVector2f |  |
| AdvanceLineItem | IsFromNodeVirtual |  | bool |  |
| AdvanceLineItem | IsToNodeVirtual |  | bool |  |
| AdvanceLineItem | Self |  | AdvanceLineItem |  |
| AdvanceNode | AccessSelf |  | AdvanceNode |  |
| AdvanceNode | GetKey |  | CString |  |
| AdvanceNode | GetPosition |  | CVector2f |  |
| AdvanceNode | Self |  | AdvanceNode |  |
| AdvanceNode | ShowSimplifiedVersion | 1. unknown | bool |  |
| AdvancesLateralView | AccessSelf |  | AdvancesLateralView |  |
| AdvancesLateralView | EmbraceInstitution | 1. unknown | void |  |
| AdvancesLateralView | GetAdvancesSortSearch |  | unknown |  |
| AdvancesLateralView | GetAgeAdvances |  | CString |  |
| AdvancesLateralView | GetAgeIllustration |  | unknown |  |
| AdvancesLateralView | GetAgeInstitutionItems | 1. unknown | unknown |  |
| AdvancesLateralView | GetAgeTooltip | 1. unknown | CString |  |
| AdvancesLateralView | GetAges |  | unknown |  |
| AdvancesLateralView | GetAllAdvances |  | unknown |  |
| AdvancesLateralView | GetAverageLiteracyTT |  | CString |  |
| AdvancesLateralView | GetInstitutionItems |  | unknown |  |
| AdvancesLateralView | GetInstitutionTooltip | 1. unknown | CString |  |
| AdvancesLateralView | GetNewReforms |  | CString |  |
| AdvancesLateralView | GetNewReformsTooltip |  | CString |  |
| AdvancesLateralView | GetPlayer |  | unknown |  |
| AdvancesLateralView | GetPriceMarket |  | CString |  |
| AdvancesLateralView | GetPriceMarketTooltip |  | CString |  |
| AdvancesLateralView | GetProgress | 1. unknown | float |  |
| AdvancesLateralView | GetResearchQueueSize |  | int32 |  |
| AdvancesLateralView | GetResearchSpeedTooltip |  | CString |  |
| AdvancesLateralView | IsAgeSelected | 1. unknown | bool |  |
| AdvancesLateralView | IsLeftPanel |  | bool |  |
| AdvancesLateralView | IsRightPanel |  | bool |  |
| AdvancesLateralView | SelectAge | 1. unknown | void |  |
| AdvancesLateralView | Self |  | AdvancesLateralView |  |
| Age | AccessSelf |  | Age |  |
| Age | GetDesc |  | CString |  |
| Age | GetIcon |  | CString |  |
| Age | GetIndex |  | int32 |  |
| Age | GetInstitutions |  | CString |  |
| Age | GetModifierImpact |  | CString |  |
| Age | GetName |  | CString |  |
| Age | GetNameWithNoTooltip |  | CString |  |
| Age | GetPriceImpact |  | CString |  |
| Age | GetReforms |  | CString |  |
| Age | GetResearchTreeStatus |  | CString |  |
| Age | GetShortName |  | CString |  |
| Age | GetTooltip |  | CString |  |
| Age | HasModifierImpact |  | bool |  |
| Age | HegemonsAllowed |  | bool |  |
| Age | MakeScope |  | Scope | Jomini Script System |
| Age | Self |  | Age |  |
| AgeAdvancesWrap | AccessSelf |  | AgeAdvancesWrap |  |
| AgeAdvancesWrap | GetAdvances |  | unknown |  |
| AgeAdvancesWrap | GetAge |  | unknown |  |
| AgeAdvancesWrap | IsValid |  | bool |  |
| AgeAdvancesWrap | Self |  | AgeAdvancesWrap |  |
| AgendaView | AccessSelf |  | AgendaView |  |
| AgendaView | AreMissionsEnabled |  | bool |  |
| AgendaView | Close |  | void |  |
| AgendaView | GetAlertItems |  | unknown |  |
| AgendaView | GetHints |  | unknown |  |
| AgendaView | HasMissionActive |  | bool |  |
| AgendaView | Self |  | AgendaView |  |
| AgendaView | ShowHistoricalContext |  | bool |  |
| AiCurrencyClassGlue | AccessSelf |  | AiCurrencyClassGlue |  |
| AiCurrencyClassGlue | GetAiCurrencies |  | unknown |  |
| AiCurrencyClassGlue | GetCurrentAiCurrency |  | unknown |  |
| AiCurrencyClassGlue | GetName |  | CString |  |
| AiCurrencyClassGlue | GetSelectedCurrency |  | CVector2i |  |
| AiCurrencyClassGlue | HasAiCurrency |  | bool |  |
| AiCurrencyClassGlue | IsAiCurrencyViewOpen | 1. unknown | bool |  |
| AiCurrencyClassGlue | OpenAiCurrencyView | 1. unknown | void |  |
| AiCurrencyClassGlue | SelectCurrency |  | void |  |
| AiCurrencyClassGlue | Self |  | AiCurrencyClassGlue |  |
| AiCurrencyGlue | AccessSelf |  | AiCurrencyGlue |  |
| AiCurrencyGlue | GetCurrentAmount |  | CFixedPoint |  |
| AiCurrencyGlue | GetName |  | CString |  |
| AiCurrencyGlue | GetPlotPoints |  | unknown |  |
| AiCurrencyGlue | GetPlotPointsForCurrentValue |  | unknown |  |
| AiCurrencyGlue | GetPlotRect |  | CPdxFloatRect |  |
| AiCurrencyGlue | GetScaleMaxX |  | CFixedPoint |  |
| AiCurrencyGlue | GetScaleMaxY |  | CFixedPoint |  |
| AiCurrencyGlue | GetScaleMinX |  | CFixedPoint |  |
| AiCurrencyGlue | GetScaleMinY |  | CFixedPoint |  |
| AiCurrencyGlue | GetTooltip | 1. unknown | CString |  |
| AiCurrencyGlue | OnMaxXChanged | 1. unknown | void |  |
| AiCurrencyGlue | OnMaxYChanged | 1. unknown | void |  |
| AiCurrencyGlue | OnMinXChanged | 1. unknown | void |  |
| AiCurrencyGlue | OnMinYChanged | 1. unknown | void |  |
| AiCurrencyGlue | Self |  | AiCurrencyGlue |  |
| AiCurrencyViewer | AccessSelf |  | AiCurrencyViewer |  |
| AiCurrencyViewer | GetAiCurrencyClasses |  | unknown |  |
| AiCurrencyViewer | GetCurrentAiCurrencyClass |  | unknown |  |
| AiCurrencyViewer | GetPossibleTargets |  | unknown |  |
| AiCurrencyViewer | GetSelectedTargetObjectIndex |  | CVector2i |  |
| AiCurrencyViewer | HasAiCurrencyClass |  | bool |  |
| AiCurrencyViewer | IsAiCurrencyClassViewOpen | 1. unknown | bool |  |
| AiCurrencyViewer | OpenAiCurrencyClassView | 1. unknown | void |  |
| AiCurrencyViewer | SelectTargetObject |  | void |  |
| AiCurrencyViewer | Self |  | AiCurrencyViewer |  |
| AiDiplomaticObjective | AccessSelf |  | AiDiplomaticObjective |  |
| AiDiplomaticObjective | GetCountry |  | CString |  |
| AiDiplomaticObjective | GetDebugInfo |  | CString |  |
| AiDiplomaticObjective | GetObjectiveType |  | CString |  |
| AiDiplomaticObjective | GetTarget |  | CString |  |
| AiDiplomaticObjective | Self |  | AiDiplomaticObjective |  |
| AiDiplomaticObjective | ShowCountry |  | void |  |
| AiDiplomaticObjectiveGroup | AccessSelf |  | AiDiplomaticObjectiveGroup |  |
| AiDiplomaticObjectiveGroup | GetAiObjectives |  | unknown |  |
| AiDiplomaticObjectiveGroup | IsImportant |  | bool |  |
| AiDiplomaticObjectiveGroup | Self |  | AiDiplomaticObjectiveGroup |  |
| AiDiplomaticObjectiveGroup | SetAsImportant |  | void |  |
| AiDiplomaticObjectivesViewer | AccessSelf |  | AiDiplomaticObjectivesViewer |  |
| AiDiplomaticObjectivesViewer | GetCountries |  | unknown |  |
| AiDiplomaticObjectivesViewer | GetNumberOfObjectives |  | CString |  |
| AiDiplomaticObjectivesViewer | GetObjectiveGroups |  | unknown |  |
| AiDiplomaticObjectivesViewer | GetObjectiveTypes |  | unknown |  |
| AiDiplomaticObjectivesViewer | GetObjectivesOfType |  | unknown |  |
| AiDiplomaticObjectivesViewer | GetSelectedCountryIndex |  | CVector2i |  |
| AiDiplomaticObjectivesViewer | GetSelectedObjectiveTypeIndex |  | CVector2i |  |
| AiDiplomaticObjectivesViewer | IsAiDiplomaticObjectiveTabOpen | 1. unknown | bool |  |
| AiDiplomaticObjectivesViewer | OpenTab | 1. unknown | void |  |
| AiDiplomaticObjectivesViewer | SelectCountry |  | void |  |
| AiDiplomaticObjectivesViewer | SelectCurrentTag |  | void |  |
| AiDiplomaticObjectivesViewer | SelectObjectiveType |  | void |  |
| AiDiplomaticObjectivesViewer | Self |  | AiDiplomaticObjectivesViewer |  |
| AiLogistics | AccessSelf |  | AiLogistics |  |
| AiLogistics | GetUnitTransportTargets |  | unknown |  |
| AiLogistics | Self |  | AiLogistics |  |
| AiTarget | AccessSelf |  | AiTarget |  |
| AiTarget | GetCountry |  | CString |  |
| AiTarget | GetTargetType |  | CString |  |
| AiTarget | Self |  | AiTarget |  |
| AiTarget | ShowCountry |  | void |  |
| AiTargetType | AccessSelf |  | AiTargetType |  |
| AiTargetType | GetName |  | CString |  |
| AiTargetType | Self |  | AiTargetType |  |
| AiTargetsViewer | AccessSelf |  | AiTargetsViewer |  |
| AiTargetsViewer | GetCountries |  | unknown |  |
| AiTargetsViewer | GetNumberOfTargets |  | CString |  |
| AiTargetsViewer | GetSelectedCountryIndex |  | CVector2i |  |
| AiTargetsViewer | GetSelectedTargetTypeIndex |  | CVector2i |  |
| AiTargetsViewer | GetTargetTypes |  | unknown |  |
| AiTargetsViewer | GetTargets |  | unknown |  |
| AiTargetsViewer | GetTargetsOfType |  | unknown |  |
| AiTargetsViewer | IsAiTargetTabOpen | 1. unknown | bool |  |
| AiTargetsViewer | OpenTab | 1. unknown | void |  |
| AiTargetsViewer | SelectCountry |  | void |  |
| AiTargetsViewer | SelectCurrentTag |  | void |  |
| AiTargetsViewer | SelectTargetType |  | void |  |
| AiTargetsViewer | Self |  | AiTargetsViewer |  |
| AiTransportTarget | AccessSelf |  | AiTransportTarget |  |
| AiTransportTarget | GetTargetLocation |  | unknown |  |
| AiTransportTarget | GetUnitBags |  | unknown |  |
| AiTransportTarget | IsComplete |  | bool |  |
| AiTransportTarget | IsDirty |  | bool |  |
| AiTransportTarget | Self |  | AiTransportTarget |  |
| AiUtilityWrap | AccessSelf |  | AiUtilityWrap |  |
| AiUtilityWrap | GetName |  | CString |  |
| AiUtilityWrap | GetTooltip |  | CString |  |
| AiUtilityWrap | Self |  | AiUtilityWrap |  |
| AlertActiveIOResolution | AccessSelf |  | AlertActiveIOResolution |  |
| AlertActiveIOResolution | Next |  | void |  |
| AlertActiveIOResolution | Self |  | AlertActiveIOResolution |  |
| AlertAnnexingDisloyalSubject | AccessSelf |  | AlertAnnexingDisloyalSubject |  |
| AlertAnnexingDisloyalSubject | Next |  | void |  |
| AlertAnnexingDisloyalSubject | Self |  | AlertAnnexingDisloyalSubject |  |
| AlertArmiesOnIce | AccessSelf |  | AlertArmiesOnIce |  |
| AlertArmiesOnIce | Next |  | void |  |
| AlertArmiesOnIce | Self |  | AlertArmiesOnIce |  |
| AlertArmyWithLowFood | AccessSelf |  | AlertArmyWithLowFood |  |
| AlertArmyWithLowFood | Next |  | void |  |
| AlertArmyWithLowFood | Self |  | AlertArmyWithLowFood |  |
| AlertArmyWithVeryLowFood | AccessSelf |  | AlertArmyWithVeryLowFood |  |
| AlertArmyWithVeryLowFood | Next |  | void |  |
| AlertArmyWithVeryLowFood | Self |  | AlertArmyWithVeryLowFood |  |
| AlertArmyWithoutLeader | AccessSelf |  | AlertArmyWithoutLeader |  |
| AlertArmyWithoutLeader | Next |  | void |  |
| AlertArmyWithoutLeader | Self |  | AlertArmyWithoutLeader |  |
| AlertAvailableTradeCapacity | AccessSelf |  | AlertAvailableTradeCapacity |  |
| AlertAvailableTradeCapacity | Next |  | void |  |
| AlertAvailableTradeCapacity | Self |  | AlertAvailableTradeCapacity |  |
| AlertBlockadedPorts | AccessSelf |  | AlertBlockadedPorts |  |
| AlertBlockadedPorts | Next |  | void |  |
| AlertBlockadedPorts | Self |  | AlertBlockadedPorts |  |
| AlertBuildingsMissingInput | AccessSelf |  | AlertBuildingsMissingInput |  |
| AlertBuildingsMissingInput | Next |  | void |  |
| AlertBuildingsMissingInput | Self |  | AlertBuildingsMissingInput |  |
| AlertCanBeTargetOfIO | AccessSelf |  | AlertCanBeTargetOfIO |  |
| AlertCanBeTargetOfIO | GetAntagonismCountries |  | unknown |  |
| AlertCanBeTargetOfIO | GetExtraMembersDesc |  | CString |  |
| AlertCanBeTargetOfIO | GetIcon |  | unknown |  |
| AlertCanBeTargetOfIO | GetKey |  | CString |  |
| AlertCanBeTargetOfIO | HasNext |  | bool |  |
| AlertCanBeTargetOfIO | IsACoalitionAlert |  | bool |  |
| AlertCanBeTargetOfIO | Next |  | void |  |
| AlertCanBeTargetOfIO | Self |  | AlertCanBeTargetOfIO |  |
| AlertCanBeTargetOfIO | ShouldShowExtraMembers |  | bool |  |
| AlertCanBeTargetOfIO | ShouldShowRequirements |  | bool |  |
| AlertCanInterveneInRivalWar | AccessSelf |  | AlertCanInterveneInRivalWar |  |
| AlertCanInterveneInRivalWar | Next |  | void |  |
| AlertCanInterveneInRivalWar | Self |  | AlertCanInterveneInRivalWar |  |
| AlertCanJoinTargettedIO | AccessSelf |  | AlertCanJoinTargettedIO |  |
| AlertCanJoinTargettedIO | GetTargettedIO |  | unknown |  |
| AlertCanJoinTargettedIO | Self |  | AlertCanJoinTargettedIO |  |
| AlertClanCanBecomeLanded | AccessSelf |  | AlertClanCanBecomeLanded |  |
| AlertClanCanBecomeLanded | Next |  | void |  |
| AlertClanCanBecomeLanded | Self |  | AlertClanCanBecomeLanded |  |
| AlertConstructionMissingInput | AccessSelf |  | AlertConstructionMissingInput |  |
| AlertConstructionMissingInput | Next |  | void |  |
| AlertConstructionMissingInput | Self |  | AlertConstructionMissingInput |  |
| AlertDangerousRelations | AccessSelf |  | AlertDangerousRelations |  |
| AlertDangerousRelations | Next |  | void |  |
| AlertDangerousRelations | Self |  | AlertDangerousRelations |  |
| AlertDepopulatingLocations | AccessSelf |  | AlertDepopulatingLocations |  |
| AlertDepopulatingLocations | Next |  | void |  |
| AlertDepopulatingLocations | Self |  | AlertDepopulatingLocations |  |
| AlertExiledUnits | AccessSelf |  | AlertExiledUnits |  |
| AlertExiledUnits | Next |  | void |  |
| AlertExiledUnits | Self |  | AlertExiledUnits |  |
| AlertFormableCountry | AccessSelf |  | AlertFormableCountry |  |
| AlertFormableCountry | GetFormableCountry |  | unknown |  |
| AlertFormableCountry | Self |  | AlertFormableCountry |  |
| AlertHasLowFoodStockpileMarket | AccessSelf |  | AlertHasLowFoodStockpileMarket |  |
| AlertHasLowFoodStockpileMarket | Next |  | void |  |
| AlertHasLowFoodStockpileMarket | Self |  | AlertHasLowFoodStockpileMarket |  |
| AlertHasNoSuppliesTrade | AccessSelf |  | AlertHasNoSuppliesTrade |  |
| AlertHasNoSuppliesTrade | Next |  | void |  |
| AlertHasNoSuppliesTrade | Self |  | AlertHasNoSuppliesTrade |  |
| AlertHasNotEnoughGoodsForAnyShipRepairs | AccessSelf |  | AlertHasNotEnoughGoodsForAnyShipRepairs |  |
| AlertHasNotEnoughGoodsForAnyShipRepairs | GetLackingGoodsForRepairs |  | unknown |  |
| AlertHasNotEnoughGoodsForAnyShipRepairs | Next |  | void |  |
| AlertHasNotEnoughGoodsForAnyShipRepairs | Self |  | AlertHasNotEnoughGoodsForAnyShipRepairs |  |
| AlertHasNotEnoughGoodsForShipRepairs | AccessSelf |  | AlertHasNotEnoughGoodsForShipRepairs |  |
| AlertHasNotEnoughGoodsForShipRepairs | GetLackingGoodsForRepairs |  | unknown |  |
| AlertHasNotEnoughGoodsForShipRepairs | Next |  | void |  |
| AlertHasNotEnoughGoodsForShipRepairs | Self |  | AlertHasNotEnoughGoodsForShipRepairs |  |
| AlertHasRaisedArmyLeviesInPeace | AccessSelf |  | AlertHasRaisedArmyLeviesInPeace |  |
| AlertHasRaisedArmyLeviesInPeace | Next |  | void |  |
| AlertHasRaisedArmyLeviesInPeace | Self |  | AlertHasRaisedArmyLeviesInPeace |  |
| AlertHasRaisedNavyLeviesInPeace | AccessSelf |  | AlertHasRaisedNavyLeviesInPeace |  |
| AlertHasRaisedNavyLeviesInPeace | Next |  | void |  |
| AlertHasRaisedNavyLeviesInPeace | Self |  | AlertHasRaisedNavyLeviesInPeace |  |
| AlertHasReligiousFocusAvailable | AccessSelf |  | AlertHasReligiousFocusAvailable |  |
| AlertHasReligiousFocusAvailable | Self |  | AlertHasReligiousFocusAvailable |  |
| AlertHasUneducatedChild | AccessSelf |  | AlertHasUneducatedChild |  |
| AlertHasUneducatedChild | Next |  | void |  |
| AlertHasUneducatedChild | Self |  | AlertHasUneducatedChild |  |
| AlertHasUnmarriedChildren | AccessSelf |  | AlertHasUnmarriedChildren |  |
| AlertHasUnmarriedChildren | Next |  | void |  |
| AlertHasUnmarriedChildren | Self |  | AlertHasUnmarriedChildren |  |
| AlertHasUnprofitableBuildings | AccessSelf |  | AlertHasUnprofitableBuildings |  |
| AlertHasUnprofitableBuildings | GetUnprofitableBuildings |  | unknown |  |
| AlertHasUnprofitableBuildings | Self |  | AlertHasUnprofitableBuildings |  |
| AlertHasUnraisedLeviesInWar | AccessSelf |  | AlertHasUnraisedLeviesInWar |  |
| AlertHasUnraisedLeviesInWar | Next |  | void |  |
| AlertHasUnraisedLeviesInWar | Self |  | AlertHasUnraisedLeviesInWar |  |
| AlertHasWeatherSystem | AccessSelf |  | AlertHasWeatherSystem |  |
| AlertHasWeatherSystem | Next |  | void |  |
| AlertHasWeatherSystem | Self |  | AlertHasWeatherSystem |  |
| AlertIOBreaking | AccessSelf |  | AlertIOBreaking |  |
| AlertIOBreaking | Next |  | void |  |
| AlertIOBreaking | Self |  | AlertIOBreaking |  |
| AlertIsAtFortLimit | AccessSelf |  | AlertIsAtFortLimit |  |
| AlertIsAtFortLimit | Next |  | void |  |
| AlertIsAtFortLimit | Self |  | AlertIsAtFortLimit |  |
| AlertItem | AccessSelf |  | AlertItem |  |
| AlertItem | GetHintText |  | CString |  |
| AlertItem | GetHintTitle |  | CString |  |
| AlertItem | GetTooltip |  | CString |  |
| AlertItem | Hide |  | void |  |
| AlertItem | IsNew |  | bool |  |
| AlertItem | IsShown |  | bool |  |
| AlertItem | Self |  | AlertItem |  |
| AlertItem | SetAsOld |  | void |  |
| AlertItem | Show |  | void |  |
| AlertItem | ShowHint |  | bool |  |
| AlertLackPopPromotion | AccessSelf |  | AlertLackPopPromotion |  |
| AlertLackPopPromotion | Next |  | void |  |
| AlertLackPopPromotion | Self |  | AlertLackPopPromotion |  |
| AlertLackPopRGO | AccessSelf |  | AlertLackPopRGO |  |
| AlertLackPopRGO | Next |  | void |  |
| AlertLackPopRGO | Self |  | AlertLackPopRGO |  |
| AlertManager | AccessSelf |  | AlertManager |  |
| AlertManager | GetHeir |  | unknown |  |
| AlertManager | GetPlayer |  | unknown |  |
| AlertManager | GetRuler |  | unknown |  |
| AlertManager | OpenMarriageFinder | 1. unknown | void |  |
| AlertManager | Self |  | AlertManager |  |
| AlertManager | ShowEconomyWindow |  | void |  |
| AlertManager | ShowHeir |  | void |  |
| AlertManager | ShowRuler |  | void |  |
| AlertMemberLeavingUnion | AccessSelf |  | AlertMemberLeavingUnion |  |
| AlertMemberLeavingUnion | GetUnion |  | unknown |  |
| AlertMemberLeavingUnion | Self |  | AlertMemberLeavingUnion |  |
| AlertMissingExplorer | AccessSelf |  | AlertMissingExplorer |  |
| AlertMissingExplorer | Self |  | AlertMissingExplorer |  |
| AlertNaviesStuckInIce | AccessSelf |  | AlertNaviesStuckInIce |  |
| AlertNaviesStuckInIce | Next |  | void |  |
| AlertNaviesStuckInIce | Self |  | AlertNaviesStuckInIce |  |
| AlertNavyAttrition | AccessSelf |  | AlertNavyAttrition |  |
| AlertNavyAttrition | Next |  | void |  |
| AlertNavyAttrition | Self |  | AlertNavyAttrition |  |
| AlertNoParliamentDebate | AccessSelf |  | AlertNoParliamentDebate |  |
| AlertNoParliamentDebate | Next |  | void |  |
| AlertNoParliamentDebate | Self |  | AlertNoParliamentDebate |  |
| AlertOutsideOfNavalRange | AccessSelf |  | AlertOutsideOfNavalRange |  |
| AlertOutsideOfNavalRange | Next |  | void |  |
| AlertOutsideOfNavalRange | Self |  | AlertOutsideOfNavalRange |  |
| AlertPopNeeds | AccessSelf |  | AlertPopNeeds |  |
| AlertPopNeeds | Next |  | void |  |
| AlertPopNeeds | Self |  | AlertPopNeeds |  |
| AlertPossibleLaw | AccessSelf |  | AlertPossibleLaw |  |
| AlertPossibleLaw | Next |  | void |  |
| AlertPossibleLaw | Self |  | AlertPossibleLaw |  |
| AlertRelationAboutToBeBroken | AccessSelf |  | AlertRelationAboutToBeBroken |  |
| AlertRelationAboutToBeBroken | Next |  | void |  |
| AlertRelationAboutToBeBroken | Self |  | AlertRelationAboutToBeBroken |  |
| AlertRiskStarvingProvinces | AccessSelf |  | AlertRiskStarvingProvinces |  |
| AlertRiskStarvingProvinces | Next |  | void |  |
| AlertRiskStarvingProvinces | Self |  | AlertRiskStarvingProvinces |  |
| AlertStarvingProvinces | AccessSelf |  | AlertStarvingProvinces |  |
| AlertStarvingProvinces | Next |  | void |  |
| AlertStarvingProvinces | Self |  | AlertStarvingProvinces |  |
| AlertTruceEnding | AccessSelf |  | AlertTruceEnding |  |
| AlertTruceEnding | Next |  | void |  |
| AlertTruceEnding | Self |  | AlertTruceEnding |  |
| AlertUnintegratedProvinces | AccessSelf |  | AlertUnintegratedProvinces |  |
| AlertUnintegratedProvinces | EnableHighlight | 1. unknown | void |  |
| AlertUnintegratedProvinces | Self |  | AlertUnintegratedProvinces |  |
| AlertUnprofitableTrade | AccessSelf |  | AlertUnprofitableTrade |  |
| AlertUnprofitableTrade | Next |  | void |  |
| AlertUnprofitableTrade | Self |  | AlertUnprofitableTrade |  |
| AlertUnusedCB | AccessSelf |  | AlertUnusedCB |  |
| AlertUnusedCB | Next |  | void |  |
| AlertUnusedCB | Self |  | AlertUnusedCB |  |
| AnchorItem | AccessSelf |  | AnchorItem |  |
| AnchorItem | GetAnchorIndexAsString |  | CString |  |
| AnchorItem | GetDisplayString |  | CString |  |
| AnchorItem | GetIndexValidator |  | unknown |  |
| AnchorItem | GetTooltip |  | CString |  |
| AnchorItem | IsExpanded |  | bool |  |
| AnchorItem | IsLocked |  | bool |  |
| AnchorItem | Self |  | AnchorItem |  |
| AnchorItem | SetAnchorIndexCallback |  | void |  |
| AnchorItem | ToggleExpanded |  | void |  |
| AnchorItem | ToggleLock |  | void |  |
| AnimationClip | AccessSelf |  | AnimationClip |  |
| AnimationClip | IsValid |  | bool |  |
| AnimationClip | Name |  | CString |  |
| AnimationClip | Self |  | AnimationClip |  |
| AnimationClip | Tooltip |  | CString |  |
| AnimationClipReferenceGui | AccessSelf |  | AnimationClipReferenceGui |  |
| AnimationClipReferenceGui | Self |  | AnimationClipReferenceGui |  |
| AnimationClipsEditor | AccessSelf |  | AnimationClipsEditor |  |
| AnimationClipsEditor | AccessUndoer |  | unknown |  |
| AnimationClipsEditor | CreateClip |  | void |  |
| AnimationClipsEditor | IsClipSelected |  | bool |  |
| AnimationClipsEditor | IsLinkedToAnimationEditor |  | bool |  |
| AnimationClipsEditor | OpenSkeletonList | 1. unknown | void |  |
| AnimationClipsEditor | RemoveClip | 1. unknown | void |  |
| AnimationClipsEditor | RenameClip | 1. unknown | void |  |
| AnimationClipsEditor | SelectedSkeleton |  | CUTF8String |  |
| AnimationClipsEditor | Self |  | AnimationClipsEditor |  |
| AnimationComplexClipReferenceGui | AccessSelf |  | AnimationComplexClipReferenceGui |  |
| AnimationComplexClipReferenceGui | ChildrenClipReferenceGuis |  | unknown |  |
| AnimationComplexClipReferenceGui | ClipRefTypeToAdd |  | CString |  |
| AnimationComplexClipReferenceGui | OpenClipRefTypeSerchList |  | void |  |
| AnimationComplexClipReferenceGui | Self |  | AnimationComplexClipReferenceGui |  |
| AnimationEditor | AccessAnimationStateSearch |  | unknown |  |
| AnimationEditor | AccessSelf |  | AnimationEditor |  |
| AnimationEditor | AccessUndoer |  | unknown |  |
| AnimationEditor | AccessVariablesPanel |  | unknown |  |
| AnimationEditor | CanShowContentTab |  | bool |  |
| AnimationEditor | CancelDrag |  | void |  |
| AnimationEditor | ClearSelection |  | void |  |
| AnimationEditor | DeleteSelection |  | void |  |
| AnimationEditor | Fit |  | void |  |
| AnimationEditor | HasErrors |  | bool |  |
| AnimationEditor | InvertSelection |  | void |  |
| AnimationEditor | IsDraggingConnection |  | bool |  |
| AnimationEditor | IsSaveButtonEnabled |  | bool |  |
| AnimationEditor | Load |  | void |  |
| AnimationEditor | New |  | void |  |
| AnimationEditor | NumSelected |  | int32 |  |
| AnimationEditor | OnSelected |  | void |  |
| AnimationEditor | OnSettingsButtonClick |  | void |  |
| AnimationEditor | OpenClipEditor |  | void |  |
| AnimationEditor | RenameSelected |  | void |  |
| AnimationEditor | RenameStateDialog | 1. unknown | void |  |
| AnimationEditor | Save |  | void |  |
| AnimationEditor | SaveAs |  | void |  |
| AnimationEditor | SelectAll |  | void |  |
| AnimationEditor | Self |  | AnimationEditor |  |
| AnimationEditor | SetSelected | 1. unknown 2. unknown 3. unknown | void |  |
| AnimationEditor | SetZoom | 1. unknown | void |  |
| AnimationEditor | ShouldShowAnimationStateSearch |  | bool |  |
| AnimationEditor | ShouldShowVariablesGui |  | bool |  |
| AnimationEditor | ShowAnimationStateSearch |  | void |  |
| AnimationEditor | StartingStateDebugTooltip |  | CString |  |
| AnimationEditor | StartingStateDisplayName |  | unknown |  |
| AnimationEditor | ToggleVariablesGuiVisibility |  | void |  |
| AnimationEditor | Zoom |  | float |  |
| AnimationEditorCondition | AccessSelf |  | AnimationEditorCondition |  |
| AnimationEditorCondition | HasError |  | bool |  |
| AnimationEditorCondition | Id |  | int32 |  |
| AnimationEditorCondition | Message |  | CString |  |
| AnimationEditorCondition | Self |  | AnimationEditorCondition |  |
| AnimationEditorConnectionTab | AccessLhsSearchList | 1. unknown 2. unknown | unknown |  |
| AnimationEditorConnectionTab | AccessOperatorSearchList | 1. unknown 2. unknown | unknown |  |
| AnimationEditorConnectionTab | AccessSelf |  | AnimationEditorConnectionTab |  |
| AnimationEditorConnectionTab | AddCondition | 1. unknown | void |  |
| AnimationEditorConnectionTab | AddLane | 1. unknown | void |  |
| AnimationEditorConnectionTab | AllSourceStateRandomLanes |  | unknown |  |
| AnimationEditorConnectionTab | CanAddRandomLane |  | bool |  |
| AnimationEditorConnectionTab | ConnectionName |  | CString |  |
| AnimationEditorConnectionTab | GetRhsString | 1. unknown 2. unknown | CString |  |
| AnimationEditorConnectionTab | GetTriggerIntervalInterpretation | 1. unknown | CString |  |
| AnimationEditorConnectionTab | GetTriggerIntervalLengthInfo | 1. unknown | CString |  |
| AnimationEditorConnectionTab | IsAllRandomLanesViewerVisible |  | bool |  |
| AnimationEditorConnectionTab | IsRandomConnection |  | bool |  |
| AnimationEditorConnectionTab | IsRemoveLaneButtonEnabled |  | bool |  |
| AnimationEditorConnectionTab | OnRhsStringEdited | 1. unknown 2. unknown | void |  |
| AnimationEditorConnectionTab | RemoveCondition | 1. unknown 2. unknown | void |  |
| AnimationEditorConnectionTab | RemoveLane | 1. unknown | void |  |
| AnimationEditorConnectionTab | Self |  | AnimationEditorConnectionTab |  |
| AnimationEditorConnectionTab | SetLaneName | 1. unknown 2. unknown | void |  |
| AnimationEditorConnectionTab | SetUpConditionsDataModel | 1. unknown 2. unknown | void |  |
| AnimationEditorConnectionTab | SetUpLaneProperties | 1. unknown 2. unknown | void |  |
| AnimationEditorConnectionTab | ToggleAllRandomLanesViewerVisible |  | void |  |
| AnimationEditorLane | AccessSelf |  | AnimationEditorLane |  |
| AnimationEditorLane | GetRandomClipName |  | CString |  |
| AnimationEditorLane | GetRandomGroupName |  | CString |  |
| AnimationEditorLane | Id |  | int32 |  |
| AnimationEditorLane | IsRandomLane |  | bool |  |
| AnimationEditorLane | Name |  | CString |  |
| AnimationEditorLane | Self |  | AnimationEditorLane |  |
| AnimationEditorMessageTab | AccessSelf |  | AnimationEditorMessageTab |  |
| AnimationEditorMessageTab | Message |  | CString |  |
| AnimationEditorMessageTab | Self |  | AnimationEditorMessageTab |  |
| AnimationEditorState | AccessSelf |  | AnimationEditorState |  |
| AnimationEditorState | DebugTooltip |  | CString |  |
| AnimationEditorState | Id |  | int32 |  |
| AnimationEditorState | Name |  | CString |  |
| AnimationEditorState | Self |  | AnimationEditorState |  |
| AnimationEditorStateTab | AccessSelf |  | AnimationEditorStateTab |  |
| AnimationEditorStateTab | AddComplexClipReference | 1. unknown | void |  |
| AnimationEditorStateTab | AddRandomClipReference | 1. unknown | void |  |
| AnimationEditorStateTab | ClipReferenceComplexGuis | 1. unknown | unknown |  |
| AnimationEditorStateTab | ClipReferenceGuis |  | unknown |  |
| AnimationEditorStateTab | ClipReferenceRandomGuis | 1. unknown | unknown |  |
| AnimationEditorStateTab | ClipReferenceSimpleGuis | 1. unknown | unknown |  |
| AnimationEditorStateTab | HasClipReferenceWidgets |  | bool |  |
| AnimationEditorStateTab | IsClipReferenceGuiComplex | 1. unknown | bool |  |
| AnimationEditorStateTab | IsClipReferenceGuiRandom | 1. unknown | bool |  |
| AnimationEditorStateTab | IsClipReferenceGuiSimple | 1. unknown | bool |  |
| AnimationEditorStateTab | IsClipReferenceTypeComplex |  | bool |  |
| AnimationEditorStateTab | IsClipReferenceTypeRandom |  | bool |  |
| AnimationEditorStateTab | IsClipReferenceTypeSupported |  | bool |  |
| AnimationEditorStateTab | IsRandomClipReferenceRemovable | 1. unknown | bool |  |
| AnimationEditorStateTab | IsSimpleClipReferenceRemovable | 1. unknown 2. unknown | bool |  |
| AnimationEditorStateTab | IsStateViewable |  | bool |  |
| AnimationEditorStateTab | RemoveComplexClipReference | 1. unknown 2. unknown | void |  |
| AnimationEditorStateTab | RemoveRandomClipReference | 1. unknown 2. unknown | void |  |
| AnimationEditorStateTab | Self |  | AnimationEditorStateTab |  |
| AnimationEditorTabHelper | AccessSelf |  | AnimationEditorTabHelper |  |
| AnimationEditorTabHelper | Self |  | AnimationEditorTabHelper |  |
| AnimationEditorTabHelper | TabLabel |  | unknown |  |
| AnimationEditorVariable | AccessSelf |  | AnimationEditorVariable |  |
| AnimationEditorVariable | ErrorMessage |  | CString |  |
| AnimationEditorVariable | HasErrorMessage |  | bool |  |
| AnimationEditorVariable | Id |  | int32 |  |
| AnimationEditorVariable | Name |  | CString |  |
| AnimationEditorVariable | Self |  | AnimationEditorVariable |  |
| AnimationEditorVariable | TypeName |  | CString |  |
| AnimationEditorVariablesPanel | AccessSelf |  | AnimationEditorVariablesPanel |  |
| AnimationEditorVariablesPanel | AddLocalVariable |  | void |  |
| AnimationEditorVariablesPanel | GlobalVariables |  | unknown |  |
| AnimationEditorVariablesPanel | IsGlobalVariablesExpanded |  | bool |  |
| AnimationEditorVariablesPanel | IsLocalVariablesExpanded |  | bool |  |
| AnimationEditorVariablesPanel | LocalVariables |  | unknown |  |
| AnimationEditorVariablesPanel | OpenAddGlobalVariableSearchList | 1. unknown | void |  |
| AnimationEditorVariablesPanel | OpenLocalVariableTypeSelectionList | 1. unknown 2. unknown | void |  |
| AnimationEditorVariablesPanel | RemoveVariable | 1. unknown | void |  |
| AnimationEditorVariablesPanel | Self |  | AnimationEditorVariablesPanel |  |
| AnimationEditorVariablesPanel | SetVariableName | 1. unknown 2. unknown | void |  |
| AnimationEditorVariablesPanel | ToggleGlobalVariablesExpanded |  | void |  |
| AnimationEditorVariablesPanel | ToggleLocalVariablesExpanded |  | void |  |
| AnimationEditorViewer | AccessSelf |  | AnimationEditorViewer |  |
| AnimationEditorViewer | ActiveClips |  | unknown |  |
| AnimationEditorViewer | CanStepBackwardsOneFrame | 1. unknown | bool |  |
| AnimationEditorViewer | CanStepForwardOneFrame | 1. unknown | bool |  |
| AnimationEditorViewer | FitCamera |  | void |  |
| AnimationEditorViewer | GetSingleActiveClip |  | unknown | Returns first entry from the [AnimationEditorViewer.ActiveClips] only if there is exactly one entry. |
| AnimationEditorViewer | HasActiveClips |  | bool |  |
| AnimationEditorViewer | HasEntity |  | bool |  |
| AnimationEditorViewer | IsEventEditingEnabled |  | bool |  |
| AnimationEditorViewer | IsEventsKeyframeDraggable | 1. unknown | bool |  |
| AnimationEditorViewer | IsMachinePlaying |  | bool |  |
| AnimationEditorViewer | IsViewerExpanded |  | bool |  |
| AnimationEditorViewer | OnKeyframeMoved | 1. unknown 2. unknown | void |  |
| AnimationEditorViewer | OnKeyframePressed | 1. unknown | void |  |
| AnimationEditorViewer | OnKeyframeReleased | 1. unknown 2. unknown 3. unknown | void |  |
| AnimationEditorViewer | OnScrubChange | 1. unknown | void |  |
| AnimationEditorViewer | OnScrubEnd |  | void |  |
| AnimationEditorViewer | OnScrubStart | 1. unknown | void |  |
| AnimationEditorViewer | OpenKeyframeContextMenu | 1. unknown 2. unknown | void |  |
| AnimationEditorViewer | OpenSchematicList | 1. unknown | void |  |
| AnimationEditorViewer | OpenTimelineContextMenu | 1. unknown 2. unknown | void |  |
| AnimationEditorViewer | RefreshEntity |  | void |  |
| AnimationEditorViewer | SelectedSchematic |  | CUTF8String |  |
| AnimationEditorViewer | Self |  | AnimationEditorViewer |  |
| AnimationEditorViewer | StepBackwardsOneFrame | 1. unknown | void |  |
| AnimationEditorViewer | StepForwardOneFrame | 1. unknown | void |  |
| AnimationEditorViewer | TogglePausePlay |  | void |  |
| AnimationEditorViewer | ToggleViewerExpanded |  | void |  |
| AnimationRandomClipReferenceGui | AccessSelf |  | AnimationRandomClipReferenceGui |  |
| AnimationRandomClipReferenceGui | ChildrenClipReferenceGuis |  | unknown |  |
| AnimationRandomClipReferenceGui | IsRandomClipReferenceNameEmpty |  | bool |  |
| AnimationRandomClipReferenceGui | RandomClipReferenceName |  | CString |  |
| AnimationRandomClipReferenceGui | Self |  | AnimationRandomClipReferenceGui |  |
| AnimationRandomClipReferenceGui | SetRandomClipReferenceName |  | void |  |
| AnimationSimpleClipReferenceGui | AccessSelf |  | AnimationSimpleClipReferenceGui |  |
| AnimationSimpleClipReferenceGui | Errors |  | CString |  |
| AnimationSimpleClipReferenceGui | HasErrors |  | bool |  |
| AnimationSimpleClipReferenceGui | Name |  | CString |  |
| AnimationSimpleClipReferenceGui | OpenSearchList |  | void |  |
| AnimationSimpleClipReferenceGui | Self |  | AnimationSimpleClipReferenceGui |  |
| AnimationSimpleClipReferenceGui | SetWeight |  | void |  |
| AnimationSimpleClipReferenceGui | Weight |  | float |  |
| AnimationState | AccessSelf |  | AnimationState |  |
| AnimationState | AnimationLength |  | float |  |
| AnimationState | AnimationName |  | unknown |  |
| AnimationState | CurrentTime |  | float |  |
| AnimationState | Self |  | AnimationState |  |
| AnimationStateButton | AccessSelf |  | AnimationStateButton |  |
| AnimationStateButton | IsChecked |  | bool |  |
| AnimationStateButton | Name |  | CString |  |
| AnimationStateButton | OnClick | 1. unknown | void |  |
| AnimationStateButton | Self |  | AnimationStateButton |  |
| AnnexationAlert | AccessSelf |  | AnnexationAlert |  |
| AnnexationAlert | DeclareWarOnOverlord |  | void |  |
| AnnexationAlert | GetProgress |  | float |  |
| AnnexationAlert | GetTooltip |  | CString |  |
| AnnexationAlert | Hide |  | void |  |
| AnnexationAlert | IsNew |  | bool |  |
| AnnexationAlert | Self |  | AnnexationAlert |  |
| AnnexationAlert | SetAsOld |  | void |  |
| AnnexationCostWrapper | AccessSelf |  | AnnexationCostWrapper |  |
| AnnexationCostWrapper | GetTitle |  | CString |  |
| AnnexationCostWrapper | GetTooltip |  | CString |  |
| AnnexationCostWrapper | Self |  | AnnexationCostWrapper |  |
| AnnexationMarker | AccessSelf |  | AnnexationMarker |  |
| AnnexationMarker | GetCountry |  | unknown |  |
| AnnexationMarker | GetLocation |  | unknown |  |
| AnnexationMarker | GetProgress |  | float |  |
| AnnexationMarker | GetTooltip |  | CString |  |
| AnnexationMarker | OnClick |  | void |  |
| AnnexationMarker | OnRightClick |  | void |  |
| AnnexationMarker | Self |  | AnnexationMarker |  |
| AntagonismBombSpec | AccessSelf |  | AntagonismBombSpec |  |
| AntagonismBombSpec | GetBaseValue |  | CFixedPoint |  |
| AntagonismBombSpec | GetBaseValueString |  | CString |  |
| AntagonismBombSpec | GetName |  | CString |  |
| AntagonismBombSpec | Self |  | AntagonismBombSpec |  |
| AntagonismBombSpecWrap | AccessSelf |  | AntagonismBombSpecWrap |  |
| AntagonismBombSpecWrap | GetAntagoniser |  | unknown |  |
| AntagonismBombSpecWrap | GetBaseValue |  | CFixedPoint |  |
| AntagonismBombSpecWrap | GetBreakdown |  | CString |  |
| AntagonismBombSpecWrap | GetBreakdownPerBomb |  | CString |  |
| AntagonismBombSpecWrap | GetDesc |  | CString |  |
| AntagonismBombSpecWrap | GivesAntagonism |  | bool |  |
| AntagonismBombSpecWrap | Self |  | AntagonismBombSpecWrap |  |
| AntagonismBombsSpec | AccessSelf |  | AntagonismBombsSpec |  |
| AntagonismBombsSpec | GetBaseValue |  | CFixedPoint |  |
| AntagonismBombsSpec | GetBaseValueString | 1. unknown | CString |  |
| AntagonismBombsSpec | Self |  | AntagonismBombsSpec |  |
| AntagonismTwoCountriesWrap | AccessSelf |  | AntagonismTwoCountriesWrap |  |
| AntagonismTwoCountriesWrap | GetThem |  | unknown |  |
| AntagonismTwoCountriesWrap | GetThemRef |  | unknown |  |
| AntagonismTwoCountriesWrap | GetUs |  | unknown |  |
| AntagonismTwoCountriesWrap | GetUsRef |  | unknown |  |
| AntagonismTwoCountriesWrap | Self |  | AntagonismTwoCountriesWrap |  |
| AntagonismWrapper | AccessSelf |  | AntagonismWrapper |  |
| AntagonismWrapper | GetCountry |  | Country |  |
| AntagonismWrapper | GetGained |  | CFixedPoint |  |
| AntagonismWrapper | GetGainedBreakdown |  | CString |  |
| AntagonismWrapper | GetNewTotal |  | CFixedPoint |  |
| AntagonismWrapper | Self |  | AntagonismWrapper |  |
| Application | AccessSelf |  | Application |  |
| Application | Quit |  | void |  |
| Application | Self |  | Application |  |
| ArchetypeEditor | AccessSelf |  | ArchetypeEditor |  |
| ArchetypeEditor | HasArchetype |  | bool |  |
| ArchetypeEditor | ResetAll |  | void |  |
| ArchetypeEditor | Self |  | ArchetypeEditor |  |
| Area | AccessSelf |  | Area |  |
| Area | CanExplore | 1. unknown | bool |  |
| Area | FindFirstNonIntegrated | 1. unknown | unknown |  |
| Area | GetAverageConstructionPercentage | 1. unknown | CFixedPoint |  |
| Area | GetAverageControlFor | 1. unknown | CFixedPoint |  |
| Area | GetAverageControlInfoFor | 1. unknown | CString |  |
| Area | GetAverageIntegration | 1. unknown | CFixedPoint |  |
| Area | GetAverageIntegrationInfo | 1. unknown | CString |  |
| Area | GetAverageMaritime | 1. unknown | CFixedPoint |  |
| Area | GetCapital |  | unknown |  |
| Area | GetConstructionInfo | 1. unknown | CString |  |
| Area | GetExplorationTime | 1. unknown | CFixedPoint |  |
| Area | GetExplorationTimeInfo | 1. unknown | CString |  |
| Area | GetLogInfo |  | CString |  |
| Area | GetMaritimeInfo | 1. unknown | CString |  |
| Area | GetMembersInfo |  | CString |  |
| Area | GetMonthlyCost | 1. unknown | CFixedPoint |  |
| Area | GetMonthlyCostInfo | 1. unknown | CString |  |
| Area | GetName |  | CString |  |
| Area | GetNameWithHighlightOnly |  | CString |  |
| Area | GetNameWithNoTooltip |  | CString |  |
| Area | GetNumLocations |  | int32 |  |
| Area | GetPopulation | 1. unknown | CString |  |
| Area | GetPrimaryCulturePercentage | 1. unknown | CFixedPoint |  |
| Area | GetPrimaryCulturePercentageInfo | 1. unknown | CString |  |
| Area | GetRegion |  | unknown |  |
| Area | GetTag |  | CString |  |
| Area | GetTotalPopulation |  | CString |  |
| Area | GetTotalPopulationInfo |  | CString |  |
| Area | GetUITooltip |  | CString |  |
| Area | HasCoastalSea |  | bool |  |
| Area | IsNaval |  | bool |  |
| Area | IsSea |  | bool |  |
| Area | MakeScope |  | Scope | Jomini Script System |
| Area | Self |  | Area |  |
| ArmyBuilderLateralView | AccessSelf |  | ArmyBuilderLateralView |  |
| ArmyBuilderLateralView | ChooseMercenaryLeader |  | void |  |
| ArmyBuilderLateralView | GetArmyTypes |  | unknown |  |
| ArmyBuilderLateralView | GetLocation |  | unknown |  |
| ArmyBuilderLateralView | GetMercenaries |  | unknown |  |
| ArmyBuilderLateralView | GetMethods |  | unknown |  |
| ArmyBuilderLateralView | GetNumHiresInProgress |  | int32 |  |
| ArmyBuilderLateralView | GetNumRecruitmentInProgress |  | int32 |  |
| ArmyBuilderLateralView | GetPlayer |  | unknown |  |
| ArmyBuilderLateralView | GetPreferredMethod |  | unknown |  |
| ArmyBuilderLateralView | GetUnitToMergeWith |  | unknown |  |
| ArmyBuilderLateralView | GetUnitTypeString |  | CString |  |
| ArmyBuilderLateralView | GetViewTitle |  | CString |  |
| ArmyBuilderLateralView | HasFilteredLocation |  | bool |  |
| ArmyBuilderLateralView | IsLeftPanel |  | bool |  |
| ArmyBuilderLateralView | IsMethodChecked | 1. unknown | bool |  |
| ArmyBuilderLateralView | IsNavy |  | bool |  |
| ArmyBuilderLateralView | IsRightPanel |  | bool |  |
| ArmyBuilderLateralView | SelectMethod | 1. unknown | void |  |
| ArmyBuilderLateralView | Self |  | ArmyBuilderLateralView |  |
| ArmyBuilderLateralView | SetArmy |  | void |  |
| ArmyBuilderLateralView | SetNavy |  | void |  |
| ArmyConstructionMarker | AccessSelf |  | ArmyConstructionMarker |  |
| ArmyConstructionMarker | GetConstruction |  | unknown |  |
| ArmyConstructionMarker | Self |  | ArmyConstructionMarker |  |
| ArmyLevyPopBreakdownWrapper | AccessSelf |  | ArmyLevyPopBreakdownWrapper |  |
| ArmyLevyPopBreakdownWrapper | GetBreakdown |  | CString |  |
| ArmyLevyPopBreakdownWrapper | GetTitle |  | CString |  |
| ArmyLevyPopBreakdownWrapper | Self |  | ArmyLevyPopBreakdownWrapper |  |
| ArmyStrength | AccessSelf |  | ArmyStrength |  |
| ArmyStrength | GetCombatPowerIgnoreMorale |  | CString |  |
| ArmyStrength | GetCombatPowerIncludeMorale |  | CString |  |
| ArmyStrength | GetFoodStorage |  | CString |  |
| ArmyStrength | GetNumArmies |  | CString |  |
| ArmyStrength | GetRawStrength |  | CString |  |
| ArmyStrength | GetTransportCost |  | CString |  |
| ArmyStrength | Self |  | ArmyStrength |  |
| Artist | AccessSelf |  | Artist |  |
| Artist | GetName |  | CString |  |
| Artist | GetNameWithNoTooltip |  | CString |  |
| Artist | GetTooltip |  | CString |  |
| Artist | MakeScope |  | Scope | Jomini Script System |
| Artist | Self |  | Artist |  |
| ArtsItem | AccessSelf |  | ArtsItem |  |
| ArtsItem | GetArt |  | unknown |  |
| ArtsItem | Self |  | ArtsItem |  |
| ArtsView | AccessSelf |  | ArtsView |  |
| ArtsView | GetArts |  | unknown |  |
| ArtsView | GetArtsItemsSortSearch |  | unknown |  |
| ArtsView | GetPlayer |  | unknown |  |
| ArtsView | IsLeftPanel |  | bool |  |
| ArtsView | IsRightPanel |  | bool |  |
| ArtsView | Self |  | ArtsView |  |
| AskRepayLoanMessagePopup | AccessSelf |  | AskRepayLoanMessagePopup |  |
| AskRepayLoanMessagePopup | GetFirstCountry |  | unknown |  |
| AskRepayLoanMessagePopup | GetSecondCountry |  | unknown |  |
| AskRepayLoanMessagePopup | IsEstatesLoan |  | bool |  |
| AskRepayLoanMessagePopup | Self |  | AskRepayLoanMessagePopup |  |
| AssembleEntityWindow | AccessSelf |  | AssembleEntityWindow |  |
| AssembleEntityWindow | GetName |  | CString |  |
| AssembleEntityWindow | Self |  | AssembleEntityWindow |  |
| AssembleEntityWindow | SetName | 1. unknown | void |  |
| AttachmentPropertySearchList | AccessSelf |  | AttachmentPropertySearchList |  |
| AttachmentPropertySearchList | GetSelectedText |  | CUTF8String |  |
| AttachmentPropertySearchList | GetSelectedValueColor |  | CVector4f |  |
| AttachmentPropertySearchList | OpenFile |  | void |  |
| AttachmentPropertySearchList | OpenSearchList |  | void |  |
| AttachmentPropertySearchList | Self |  | AttachmentPropertySearchList |  |
| Attribute | AccessSelf |  | Attribute |  |
| Attribute | GetName |  | CString |  |
| Attribute | GetValue |  | float |  |
| Attribute | OnValueChanged |  | void |  |
| Attribute | Self |  | Attribute |  |
| AttributeColumnData | AccessSelf |  | AttributeColumnData |  |
| AttributeColumnData | GetAttributeName |  | CString |  |
| AttributeColumnData | GetAttributeNameKey |  | CString |  |
| AttributeColumnData | GetAttributeToken |  | int32 |  |
| AttributeColumnData | GetSize | 1. unknown | CVector2f |  |
| AttributeColumnData | Self |  | AttributeColumnData |  |
| AudioCultureType | AccessSelf |  | AudioCultureType |  |
| AudioCultureType | GetName |  | CString |  |
| AudioCultureType | Self |  | AudioCultureType |  |
| AutocompleteEntry | AccessSelf |  | AutocompleteEntry |  |
| AutocompleteEntry | GetFilter |  | unknown |  |
| AutocompleteEntry | GetName |  | CString |  |
| AutocompleteEntry | GetTooltip |  | CString |  |
| AutocompleteEntry | IsCustomFilter |  | bool |  |
| AutocompleteEntry | IsFilterEnabled |  | bool |  |
| AutocompleteEntry | Self |  | AutocompleteEntry |  |
| AutocompleteEntry | ToggleFilter |  | bool |  |
| AutomatedMultiSystemItem | AccessSelf |  | AutomatedMultiSystemItem |  |
| AutomatedMultiSystemItem | GetHash |  | CString |  |
| AutomatedMultiSystemItem | IsAutomatedByPlayStyle |  | bool |  |
| AutomatedMultiSystemItem | IsEnabled |  | bool |  |
| AutomatedMultiSystemItem | Self |  | AutomatedMultiSystemItem |  |
| AutomatedMultiSystemItem | Toggle |  | void |  |
| AutomatedSystemsItem | AccessSelf |  | AutomatedSystemsItem |  |
| AutomatedSystemsItem | GetActionTooltipName |  | CString |  |
| AutomatedSystemsItem | GetClickAction |  | CString |  |
| AutomatedSystemsItem | GetDescription |  | CString |  |
| AutomatedSystemsItem | GetGoldSlider |  | CFixedPoint |  |
| AutomatedSystemsItem | GetGoldSliderScaled |  | CFixedPoint |  |
| AutomatedSystemsItem | GetKey |  | CString |  |
| AutomatedSystemsItem | GetName |  | CString |  |
| AutomatedSystemsItem | IsAllowingSpecialCurrencySpend |  | bool |  |
| AutomatedSystemsItem | IsAutomatedByPlayStyle |  | bool |  |
| AutomatedSystemsItem | IsEnabled |  | bool |  |
| AutomatedSystemsItem | IsName | 1. unknown | bool |  |
| AutomatedSystemsItem | OnChangedGoldSlider |  | void |  |
| AutomatedSystemsItem | PostGoldSlider |  | void |  |
| AutomatedSystemsItem | Self |  | AutomatedSystemsItem |  |
| AutomatedSystemsItem | Toggle |  | void |  |
| AutomatedSystemsItem | ToggleAllowingSpecialCurrencySpend |  | void |  |
| AutomationLateralView | AccessSelf |  | AutomationLateralView |  |
| AutomationLateralView | GetPlayStyle | 1. unknown | unknown |  |
| AutomationLateralView | GetPlayStyles |  | unknown |  |
| AutomationLateralView | GetPlayer |  | unknown |  |
| AutomationLateralView | IsLeftPanel |  | bool |  |
| AutomationLateralView | IsRightPanel |  | bool |  |
| AutomationLateralView | Self |  | AutomationLateralView |  |
| AvailabilityEntry | AccessSelf |  | AvailabilityEntry |  |
| AvailabilityEntry | GetAvailabilityString |  | CUTF8String |  |
| AvailabilityEntry | Self |  | AvailabilityEntry |  |
| AvailableMercenaryTypes | AccessSelf |  | AvailableMercenaryTypes |  |
| AvailableMercenaryTypes | GetCategory |  | unknown |  |
| AvailableMercenaryTypes | GetSubunits |  | unknown |  |
| AvailableMercenaryTypes | GetUnitsAmount |  | int32 |  |
| AvailableMercenaryTypes | Self |  | AvailableMercenaryTypes |  |
| Avatar | AccessSelf |  | Avatar |  |
| Avatar | GetActiveEffects |  | CString |  |
| Avatar | GetDesc |  | CString |  |
| Avatar | GetEffects |  | CString |  |
| Avatar | GetName |  | CString |  |
| Avatar | GetNameWithNoTooltip |  | CString |  |
| Avatar | GetTooltip |  | CString |  |
| Avatar | MakeScope |  | Scope | Jomini Script System |
| Avatar | Self |  | Avatar |  |
| BattleParticipant | AccessSelf |  | BattleParticipant |  |
| BattleParticipant | GetCountry |  | unknown |  |
| BattleParticipant | GetExperience |  | CFixedPoint |  |
| BattleParticipant | GetPrestige |  | CFixedPoint |  |
| BattleParticipant | GetTradition |  | CFixedPoint |  |
| BattleParticipant | GetWarExhaustion |  | CFixedPoint |  |
| BattleParticipant | Self |  | BattleParticipant |  |
| BattleResult | AccessSelf |  | BattleResult |  |
| BattleResult | GetAttacker |  | unknown |  |
| BattleResult | GetDefender |  | unknown |  |
| BattleResult | GetLoser |  | unknown |  |
| BattleResult | GetName |  | CString |  |
| BattleResult | GetWinner |  | unknown |  |
| BattleResult | IsLand |  | bool |  |
| BattleResult | Self |  | BattleResult |  |
| BattleResult | WasAttackerWin |  | bool |  |
| BattleResultMessage | AccessSelf |  | BattleResultMessage |  |
| BattleResultMessage | GetAttacker |  | unknown |  |
| BattleResultMessage | GetBattleResult |  | unknown |  |
| BattleResultMessage | GetDefender |  | unknown |  |
| BattleResultMessage | GetDescription |  | CString |  |
| BattleResultMessage | GetPlayerWarScoreMessage |  | CString |  |
| BattleResultMessage | IsPlayerAttacker |  | bool |  |
| BattleResultMessage | IsPlayerDefender |  | bool |  |
| BattleResultMessage | IsPlayerLoser |  | bool |  |
| BattleResultMessage | IsPlayerWinner |  | bool |  |
| BattleResultMessage | Self |  | BattleResultMessage |  |
| BattleResultMessageParticipant | AccessSelf |  | BattleResultMessageParticipant |  |
| BattleResultMessageParticipant | GetSide |  | unknown |  |
| BattleResultMessageParticipant | GetStats |  | unknown |  |
| BattleResultMessageParticipant | OnClick |  | void |  |
| BattleResultMessageParticipant | Self |  | BattleResultMessageParticipant |  |
| BattleResultMessageSide | AccessSelf |  | BattleResultMessageSide |  |
| BattleResultMessageSide | GetActiveParticipant |  | unknown |  |
| BattleResultMessageSide | GetBattleSide |  | unknown |  |
| BattleResultMessageSide | GetMessagePopup |  | unknown |  |
| BattleResultMessageSide | GetParticipants |  | unknown |  |
| BattleResultMessageSide | GetUnitStats |  | unknown |  |
| BattleResultMessageSide | Self |  | BattleResultMessageSide |  |
| BattleSide | AccessSelf |  | BattleSide |  |
| BattleSide | GetCommander |  | unknown |  |
| BattleSide | GetLoss | 1. unknown | CFixedPoint |  |
| BattleSide | GetLosses |  | CString |  |
| BattleSide | GetMainParticipant |  | unknown |  |
| BattleSide | GetNavalLosses |  | CString |  |
| BattleSide | GetParticipators |  | unknown |  |
| BattleSide | GetShipLoss | 1. unknown | CFixedPoint |  |
| BattleSide | GetSize | 1. unknown | CFixedPoint |  |
| BattleSide | GetTotalImprisoned |  | CFixedPoint |  |
| BattleSide | GetTotalRemaining |  | CFixedPoint |  |
| BattleSide | GetTotalSize |  | CFixedPoint |  |
| BattleSide | Self |  | BattleSide |  |
| BattleUnitStats | AccessSelf |  | BattleUnitStats |  |
| BattleUnitStats | GetCategory |  | unknown |  |
| BattleUnitStats | GetLosses |  | CString |  |
| BattleUnitStats | GetRemaining |  | CFixedPoint |  |
| BattleUnitStats | GetSize |  | CFixedPoint |  |
| BattleUnitStats | GetVisualRemaining |  | CString |  |
| BattleUnitStats | GetVisualSize |  | CString |  |
| BattleUnitStats | Self |  | BattleUnitStats |  |
| BattleView | AccessSelf |  | BattleView |  |
| BattleView | GetCombat |  | unknown |  |
| BattleView | GetPlayer |  | unknown |  |
| BattleView | IsLeftPanel |  | bool |  |
| BattleView | IsRightPanel |  | bool |  |
| BattleView | Self |  | BattleView |  |
| BiasType | AccessSelf |  | BiasType |  |
| BiasType | GetNameWithNoTooltip |  | unknown |  |
| BiasType | GetValue |  | CFixedPoint |  |
| BiasType | Self |  | BiasType |  |
| BlockList | AccessSelf |  | BlockList |  |
| BlockList | GetBlocks |  | unknown |  |
| BlockList | GetTitle |  | CString |  |
| BlockList | HasTitle |  | bool |  |
| BlockList | Self |  | BlockList |  |
| BlockListBlock | AccessSelf |  | BlockListBlock |  |
| BlockListBlock | GetAccumCount |  | int32 |  |
| BlockListBlock | GetPairRows |  | unknown |  |
| BlockListBlock | GetSingleRows |  | unknown |  |
| BlockListBlock | IsPair |  | bool |  |
| BlockListBlock | IsSingle |  | bool |  |
| BlockListBlock | Self |  | BlockListBlock |  |
| BlockedVisionMarker | AccessSelf |  | BlockedVisionMarker |  |
| BlockedVisionMarker | GetLocation |  | unknown |  |
| BlockedVisionMarker | GetTooltip |  | CString |  |
| BlockedVisionMarker | Self |  | BlockedVisionMarker |  |
| BlurThreshold | AccessSelf |  | BlurThreshold |  |
| BlurThreshold | GetValue |  | float |  |
| BlurThreshold | Self |  | BlurThreshold |  |
| BlurThreshold | SetValue |  | void |  |
| BlurThreshold | SetValueStr |  | void |  |
| BrushBool | AccessSelf |  | BrushBool |  |
| BrushBool | Get |  | bool |  |
| BrushBool | Self |  | BrushBool |  |
| BrushBool | Set |  | void |  |
| BrushBool | Toggle |  | void |  |
| BrushFloat | AccessSelf |  | BrushFloat |  |
| BrushFloat | DecreaseBySmallStep |  | void |  |
| BrushFloat | DecreaseByStep |  | void |  |
| BrushFloat | IncreaseBySmallStep |  | void |  |
| BrushFloat | IncreaseByStep |  | void |  |
| BrushFloat | Max |  | float |  |
| BrushFloat | Min |  | float |  |
| BrushFloat | ScaledValue | 1. unknown | float |  |
| BrushFloat | Self |  | BrushFloat |  |
| BrushFloat | SetMax |  | void |  |
| BrushFloat | SetMin |  | void |  |
| BrushFloat | SetScaledValue | 1. unknown | void |  |
| BrushFloat | SetStepSize |  | void |  |
| BrushFloat | SetValue |  | void |  |
| BrushFloat | SetValueArg | 1. unknown | void |  |
| BrushFloat | SetValueFromWidget | 1. unknown | void |  |
| BrushFloat | SmallStepSize |  | float |  |
| BrushFloat | StepSize |  | float |  |
| BrushFloat | Value |  | float |  |
| BrushSettings | AccessSelf |  | BrushSettings |  |
| BrushSettings | Amount |  | unknown |  |
| BrushSettings | Diameter |  | float |  |
| BrushSettings | Hardness |  | unknown |  |
| BrushSettings | PixelSnap |  | unknown |  |
| BrushSettings | Radius |  | unknown |  |
| BrushSettings | Self |  | BrushSettings |  |
| BrushSettings | SetAmount |  | void |  |
| BrushSettings | SetDiameter |  | void |  |
| BrushSettings | SetHardness |  | void |  |
| BrushSettingsDropdown | AccessSelf |  | BrushSettingsDropdown |  |
| BrushSettingsDropdown | GetBrushDiameter |  | float |  |
| BrushSettingsDropdown | Self |  | BrushSettingsDropdown |  |
| BrushSettingsDropdown | Settings |  | unknown |  |
| BrushSettingsDropdown | Thumbnail |  | unknown |  |
| BrushSettingsDropdown | Toggle |  | void |  |
| BrushSettingsGlobal | AccessSelf |  | BrushSettingsGlobal |  |
| BrushSettingsGlobal | GetDisplayAmountNames |  | unknown |  |
| BrushSettingsGlobal | IsDisplayAmountActive | 1. unknown | bool |  |
| BrushSettingsGlobal | Self |  | BrushSettingsGlobal |  |
| BrushSettingsGlobal | SetIsDisplayAmountFromString | 1. unknown | void |  |
| BuildInLocationLateralView | AccessSelf |  | BuildInLocationLateralView |  |
| BuildInLocationLateralView | BuildBestFromRankingItemsCtrl |  | void |  |
| BuildInLocationLateralView | BuildBestFromRankingItemsDefault |  | void |  |
| BuildInLocationLateralView | BuildBestFromRankingItemsShift |  | void |  |
| BuildInLocationLateralView | CancelAllLastBuildLocations |  | void |  |
| BuildInLocationLateralView | ChangeShowInvalidBuildingLocations |  | void |  |
| BuildInLocationLateralView | FilterByMarket | 1. unknown | void |  |
| BuildInLocationLateralView | GetBestBuildLocationItem |  | unknown |  |
| BuildInLocationLateralView | GetBuildRankingItems |  | unknown |  |
| BuildInLocationLateralView | GetBuildingType |  | unknown |  |
| BuildInLocationLateralView | GetEstate |  | unknown |  |
| BuildInLocationLateralView | GetItems |  | unknown |  |
| BuildInLocationLateralView | GetItemsSortSearch |  | unknown |  |
| BuildInLocationLateralView | GetLastBuildLocationItem |  | unknown |  |
| BuildInLocationLateralView | GetLocationToBuildWithNoBuildingYet |  | unknown |  |
| BuildInLocationLateralView | GetLocationsToBuildAlreadyWithBuilding |  | unknown |  |
| BuildInLocationLateralView | GetNumberOfProductionMethodsToShow |  | int32 |  |
| BuildInLocationLateralView | GetPlayer |  | unknown |  |
| BuildInLocationLateralView | GetPossibleProductionMethodItems |  | unknown |  |
| BuildInLocationLateralView | GetSelectedLocation |  | unknown |  |
| BuildInLocationLateralView | GetSelectedMarket |  | unknown |  |
| BuildInLocationLateralView | GetTotalBuildingsUI |  | CString |  |
| BuildInLocationLateralView | HasBestBuildLocationItem |  | bool |  |
| BuildInLocationLateralView | HasBuildedOrConstructions |  | bool |  |
| BuildInLocationLateralView | HasBuildings |  | bool |  |
| BuildInLocationLateralView | HasEstate |  | bool |  |
| BuildInLocationLateralView | HasLastBuildLocationItem |  | bool |  |
| BuildInLocationLateralView | HasMissingGoods | 1. unknown | bool |  |
| BuildInLocationLateralView | IsBuildLocationSelectMarketOpened | 1. unknown | bool |  |
| BuildInLocationLateralView | IsLeftPanel |  | bool |  |
| BuildInLocationLateralView | IsLocationFilterEnabled |  | bool |  |
| BuildInLocationLateralView | IsLocationHightlighted | 1. unknown | bool |  |
| BuildInLocationLateralView | IsMarketFilterEnabled |  | bool |  |
| BuildInLocationLateralView | IsMissingInputGoods | 1. unknown 2. unknown | bool |  |
| BuildInLocationLateralView | IsProductionMethodActive | 1. unknown | bool |  |
| BuildInLocationLateralView | IsRightPanel |  | bool |  |
| BuildInLocationLateralView | IsUsingGoods | 1. unknown 2. unknown | bool |  |
| BuildInLocationLateralView | RemoveMarketFilter |  | void |  |
| BuildInLocationLateralView | Self |  | BuildInLocationLateralView |  |
| BuildInLocationLateralView | ShouldShowInvalidBuildingLocations |  | bool |  |
| BuildInLocationLateralView | ShowAllBuildingsProdMethods | 1. unknown | void |  |
| BuildInLocationLateralView | ShowProfit |  | bool |  |
| BuildInLocationLateralView | SubsidizeAllBuildings |  | void |  |
| BuildInLocationLateralView | ToggleBuildLocationSelectMarket | 1. unknown | void |  |
| BuildInLocationLateralView | ToggleCloseAllBuildings |  | void |  |
| BuildLocationSelectMarket | AccessSelf |  | BuildLocationSelectMarket |  |
| BuildLocationSelectMarket | OnClose |  | void |  |
| BuildLocationSelectMarket | Parent |  | unknown |  |
| BuildLocationSelectMarket | Self |  | BuildLocationSelectMarket |  |
| Building | AccessSelf |  | Building |  |
| Building | CalcEmploymentPercent |  | CFixedPoint |  |
| Building | CalcSubsidizeCost |  | CFixedPoint |  |
| Building | CanPlayerUpgrade |  | bool |  |
| Building | GetBuildingProductionEfficiency | 1. unknown | CFixedPoint |  |
| Building | GetBuildingProductionEfficiencyInfo | 1. unknown | CString |  |
| Building | GetCountryModifiers |  | CString |  |
| Building | GetEffectiveOutput | 1. unknown | CFixedPoint |  |
| Building | GetEffectiveOutputInfo | 1. unknown | CString |  |
| Building | GetEmployed |  | CFixedPoint |  |
| Building | GetEmploymentPercentForPiechart |  | float |  |
| Building | GetEmploymentSize |  | CString |  |
| Building | GetExpense |  | CFixedPoint |  |
| Building | GetExpenseLabel |  | CString |  |
| Building | GetFlavorName |  | CString |  |
| Building | GetHostileInfo |  | CString |  |
| Building | GetIncome |  | CFixedPoint |  |
| Building | GetIncomeBreakdown |  | CString |  |
| Building | GetIncomeLabel |  | CString |  |
| Building | GetInputGoodsAccess |  | CFixedPoint |  |
| Building | GetInputGoodsInformation |  | CString |  |
| Building | GetLaidOffPercentForPiechart |  | float |  |
| Building | GetLevel |  | CFixedPoint |  |
| Building | GetLevelInfo |  | CString |  |
| Building | GetLevelScaledWithMarketAccess |  | CFixedPoint |  |
| Building | GetLevelsUnderConstruction |  | int32 |  |
| Building | GetLocation |  | unknown |  |
| Building | GetLocationModifiers |  | CString |  |
| Building | GetMarketInfo |  | CString |  |
| Building | GetMaxLevel |  | CFixedPoint |  |
| Building | GetMaxWorkersRequired |  | CString |  |
| Building | GetName |  | CString |  |
| Building | GetNameWithNoTooltip |  | CString |  |
| Building | GetNetProfitValue |  | CFixedPoint |  |
| Building | GetNetProfitValuePerLevel |  | CFixedPoint |  |
| Building | GetOwner |  | unknown |  |
| Building | GetPossibleProfit |  | CFixedPoint |  |
| Building | GetProductionMethods |  | unknown |  |
| Building | GetProfit |  | CFixedPoint |  |
| Building | GetProfitLabel |  | CString |  |
| Building | GetSubsidizeInfo |  | CString |  |
| Building | GetType |  | unknown |  |
| Building | GetUITooltip |  | CString |  |
| Building | GetUnderConstructionForPlayer |  | unknown |  |
| Building | GetUpkeep |  | CFixedPoint |  |
| Building | GetUpkeepInfo |  | CString |  |
| Building | GetVacantPercentForPiechart |  | float |  |
| Building | GetWorkerEfficiency |  | CFixedPoint |  |
| Building | GetWorkerRequirementInfo |  | CString |  |
| Building | GetWorkersRequired |  | CString |  |
| Building | HasCountryModifiers |  | bool |  |
| Building | HasLocationModifiers |  | bool |  |
| Building | HasMissingGoods |  | bool |  |
| Building | IsFullyStaffed |  | bool |  |
| Building | IsMissingGood | 1. unknown | bool |  |
| Building | IsOpen |  | bool |  |
| Building | IsProducing |  | bool |  |
| Building | IsSubsidized |  | bool |  |
| Building | IsUnderConstruction |  | bool |  |
| Building | IsUsingGood | 1. unknown | bool |  |
| Building | MakeScope |  | Scope | Jomini Script System |
| Building | Self |  | Building |  |
| Building | ShowHostileInfo |  | bool |  |
| BuildingCandidate | AccessSelf |  | BuildingCandidate |  |
| BuildingCandidate | GetActiveInputs |  | unknown |  |
| BuildingCandidate | GetActiveOutputs |  | unknown |  |
| BuildingCandidate | GetBuilding |  | unknown |  |
| BuildingCandidate | GetBuildingCandidateUIAction |  | unknown |  |
| BuildingCandidate | GetLocationPopTypes |  | unknown |  |
| BuildingCandidate | GetMaxLevel |  | int32 |  |
| BuildingCandidate | GetMissingGoods |  | unknown |  |
| BuildingCandidate | GetProductionMethodTooltip |  | CString |  |
| BuildingCandidate | GetProductionMethods |  | unknown |  |
| BuildingCandidate | IsForeign |  | bool |  |
| BuildingCandidate | IsSelected |  | bool |  |
| BuildingCandidate | Self |  | BuildingCandidate |  |
| BuildingCandidate | ShowBuilding |  | void |  |
| BuildingCategory | AccessSelf |  | BuildingCategory |  |
| BuildingCategory | GetBuildings |  | CString |  |
| BuildingCategory | GetName |  | CString |  |
| BuildingCategory | GetNameWithNoTooltip |  | CString |  |
| BuildingCategory | GetUITooltip |  | CString |  |
| BuildingCategory | IsEstateCategory |  | bool |  |
| BuildingCategory | Self |  | BuildingCategory |  |
| BuildingConstructionMarker | AccessSelf |  | BuildingConstructionMarker |  |
| BuildingConstructionMarker | GetConstruction |  | unknown |  |
| BuildingConstructionMarker | Self |  | BuildingConstructionMarker |  |
| BuildingItem | AccessSelf |  | BuildingItem |  |
| BuildingItem | AreBuildingsUnderConstruction |  | bool |  |
| BuildingItem | CanBuildAnyBuilding |  | bool |  |
| BuildingItem | CanCreateBuilding |  | bool |  |
| BuildingItem | CanCreateBuildingTT |  | CString |  |
| BuildingItem | CanDequeue |  | bool |  |
| BuildingItem | CanDequeueDesc |  | CString |  |
| BuildingItem | CanDestroy |  | bool |  |
| BuildingItem | CanDestroyDesc |  | CString |  |
| BuildingItem | CreateBuilding |  | void |  |
| BuildingItem | Dequeue |  | void |  |
| BuildingItem | Destroy |  | void |  |
| BuildingItem | GetActiveInputs |  | unknown |  |
| BuildingItem | GetActiveOutputs |  | unknown |  |
| BuildingItem | GetBuilding |  | unknown |  |
| BuildingItem | GetBuildingBreakdown |  | CString |  |
| BuildingItem | GetBuildingCandidates |  | unknown |  |
| BuildingItem | GetBuildingItemUIAction |  | unknown |  |
| BuildingItem | GetBuildingType |  | unknown |  |
| BuildingItem | GetBuildings |  | unknown |  |
| BuildingItem | GetBuildingsFunc |  | unknown |  |
| BuildingItem | GetBuildingsInputGoodsInformation |  | CString |  |
| BuildingItem | GetButtonIcon |  | unknown |  |
| BuildingItem | GetCardBuildingItemUIAction |  | unknown |  |
| BuildingItem | GetCost |  | CString |  |
| BuildingItem | GetEstate |  | unknown |  |
| BuildingItem | GetFirstBuilding |  | unknown |  |
| BuildingItem | GetLocationFilter |  | unknown |  |
| BuildingItem | GetLocationsToBuild |  | unknown |  |
| BuildingItem | GetMaxProfit |  | CFixedPoint |  |
| BuildingItem | GetMinProfit |  | CFixedPoint |  |
| BuildingItem | GetMissingGoods |  | unknown |  |
| BuildingItem | GetNoCandidateUIAction |  | unknown |  |
| BuildingItem | GetPossibleProfit |  | CFixedPoint |  |
| BuildingItem | GetPossibleProfitInfo |  | CString |  |
| BuildingItem | GetProductionMethods |  | unknown |  |
| BuildingItem | GetProfitBreakdown |  | CString |  |
| BuildingItem | GetProfitBreakdownMaxPossible |  | CString |  |
| BuildingItem | GetProfitBreakdownMin |  | CString |  |
| BuildingItem | GetProfitPerLevel |  | CFixedPoint |  |
| BuildingItem | GetTotalLevel |  | CFixedPoint |  |
| BuildingItem | GetTotalLevelsUnderConstruction |  | CFixedPoint |  |
| BuildingItem | GetTotalProfit |  | CFixedPoint |  |
| BuildingItem | HasBuildings |  | bool |  |
| BuildingItem | HasBuildingsLackingInput |  | bool |  |
| BuildingItem | HasEstate |  | bool |  |
| BuildingItem | HasMinProfit |  | bool |  |
| BuildingItem | HasPossibleBuildings |  | bool |  |
| BuildingItem | IsExpanded |  | bool |  |
| BuildingItem | OnMouseEnter | 1. unknown | void |  |
| BuildingItem | SelectLocationToBuild |  | void |  |
| BuildingItem | Self |  | BuildingItem |  |
| BuildingItem | ShowBuildings |  | void |  |
| BuildingItem | ShowCloseAll |  | bool |  |
| BuildingItem | ShowCreateBuilding |  | bool |  |
| BuildingItem | Toggle |  | void |  |
| BuildingPromoteTimeWrapper | AccessSelf |  | BuildingPromoteTimeWrapper |  |
| BuildingPromoteTimeWrapper | GetBreakdown |  | CString |  |
| BuildingPromoteTimeWrapper | GetLocation |  | unknown |  |
| BuildingPromoteTimeWrapper | GetPopModifier |  | CString |  |
| BuildingPromoteTimeWrapper | GetPromotionDesc |  | CString |  |
| BuildingPromoteTimeWrapper | GetTitle |  | CString |  |
| BuildingPromoteTimeWrapper | Self |  | BuildingPromoteTimeWrapper |  |
| BuildingSpyNetworkMarker | AccessSelf |  | BuildingSpyNetworkMarker |  |
| BuildingSpyNetworkMarker | GetCountry |  | unknown |  |
| BuildingSpyNetworkMarker | GetLocation |  | unknown |  |
| BuildingSpyNetworkMarker | GetProgress |  | float |  |
| BuildingSpyNetworkMarker | GetRightClickConditions |  | CString |  |
| BuildingSpyNetworkMarker | GetTooltip |  | CString |  |
| BuildingSpyNetworkMarker | IsRightClickEnabled |  | bool |  |
| BuildingSpyNetworkMarker | OnClick |  | void |  |
| BuildingSpyNetworkMarker | OnRightClick |  | void |  |
| BuildingSpyNetworkMarker | Self |  | BuildingSpyNetworkMarker |  |
| BuildingType | AccessSelf |  | BuildingType |  |
| BuildingType | BuildOnlyInCapital |  | bool |  |
| BuildingType | CanBuild |  | bool |  |
| BuildingType | CanBuildInLocationRank | 1. unknown | bool |  |
| BuildingType | GetAge |  | unknown |  |
| BuildingType | GetBuildCostAndTime |  | CString |  |
| BuildingType | GetBuildTime |  | int32 |  |
| BuildingType | GetBuildUIInfo |  | CString |  |
| BuildingType | GetCategory |  | unknown |  |
| BuildingType | GetConstructionDemand |  | unknown |  |
| BuildingType | GetEligibleEstate |  | unknown |  |
| BuildingType | GetEmploymentSize |  | CString |  |
| BuildingType | GetEncyclopediaEntryDesc |  | CString |  |
| BuildingType | GetFlavorText |  | CString |  |
| BuildingType | GetForeignCreateSize |  | CFixedPoint |  |
| BuildingType | GetForeignRequirments |  | CString |  |
| BuildingType | GetMakesObsoleteChain |  | unknown |  |
| BuildingType | GetMaxLevelInformation | 1. unknown | CString |  |
| BuildingType | GetModifierInfo |  | CString |  |
| BuildingType | GetName |  | CString |  |
| BuildingType | GetNameWithNoTooltip |  | unknown |  |
| BuildingType | GetNextReplaced | 1. unknown | unknown |  |
| BuildingType | GetObsoleteBuildingInLocation | 1. unknown 2. unknown | unknown |  |
| BuildingType | GetObsoleteInfo |  | CString |  |
| BuildingType | GetOneLineInfo |  | CString |  |
| BuildingType | GetPopType |  | unknown |  |
| BuildingType | GetPossibleProductionMethods |  | unknown |  |
| BuildingType | GetPossibleUpkeep |  | CFixedPoint |  |
| BuildingType | GetPotentiallyProducedGoods |  | unknown |  |
| BuildingType | GetProductionMethodsLabel |  | CString |  |
| BuildingType | GetRemoveIfInformation |  | CString |  |
| BuildingType | GetReplacedBy |  | unknown |  |
| BuildingType | GetReplacedByChain |  | unknown |  |
| BuildingType | GetSpecialRequirements |  | CString |  |
| BuildingType | GetUITooltip |  | CString |  |
| BuildingType | GetUnlocks |  | unknown |  |
| BuildingType | HasConstructionGoodsDemand |  | bool |  |
| BuildingType | HasRemoveIf |  | bool |  |
| BuildingType | HasSpecialRequirements |  | bool |  |
| BuildingType | HasUpgradeChain |  | bool |  |
| BuildingType | HasUpkeep |  | bool |  |
| BuildingType | IsForeign |  | bool |  |
| BuildingType | IsMultipleLevels |  | bool |  |
| BuildingType | IsObsoleteBuildingInLocation | 1. unknown 2. unknown | bool |  |
| BuildingType | IsProducing |  | bool |  |
| BuildingType | IsUpgradeable |  | bool |  |
| BuildingType | LiftFogOfWar |  | bool |  |
| BuildingType | MakeScope |  | Scope | Jomini Script System |
| BuildingType | NeedsAdvance |  | bool |  |
| BuildingType | OnlyEstatesCanBuild |  | bool |  |
| BuildingType | Self |  | BuildingType |  |
| BuildingView | AccessSelf |  | BuildingView |  |
| BuildingView | GetBuildAllUIAction |  | unknown |  |
| BuildingView | GetBuildUIAction |  | unknown |  |
| BuildingView | GetBuilding |  | unknown |  |
| BuildingView | GetBuildings |  | unknown |  |
| BuildingView | GetBuildingsFunc |  | unknown |  |
| BuildingView | GetEmployedTooltip |  | CString |  |
| BuildingView | GetEmploymentPercent |  | CFixedPoint |  |
| BuildingView | GetEmploymentSize |  | CString |  |
| BuildingView | GetGoods |  | unknown |  |
| BuildingView | GetHeaderData |  | CString |  |
| BuildingView | GetHeaderDataTooltip |  | CString |  |
| BuildingView | GetMaxLevel |  | int32 |  |
| BuildingView | GetMaxWorkersRequired |  | CString |  |
| BuildingView | GetPlayer |  | unknown |  |
| BuildingView | GetProductionMethods |  | unknown |  |
| BuildingView | GetProfitText |  | CString |  |
| BuildingView | GetTitle |  | CString |  |
| BuildingView | GetTotalProfit |  | CFixedPoint |  |
| BuildingView | GetWorkersRequired |  | CString |  |
| BuildingView | HasMultipleMarkets |  | bool |  |
| BuildingView | IsLeftPanel |  | bool |  |
| BuildingView | IsMultiselection |  | bool |  |
| BuildingView | IsRightPanel |  | bool |  |
| BuildingView | Self |  | BuildingView |  |
| CDPopEditor | AccessSelf |  | CDPopEditor |  |
| CDPopEditor | Apply |  | void |  |
| CDPopEditor | ApplySelectedLocationToTemplate |  | void |  |
| CDPopEditor | ApplyTemplateToSelectedLocation |  | void |  |
| CDPopEditor | ApplyTotalPopulation |  | void |  |
| CDPopEditor | GetCultures |  | unknown |  |
| CDPopEditor | GetLastError |  | CString |  |
| CDPopEditor | GetReligions |  | unknown |  |
| CDPopEditor | GetSelectedLocationText |  | CString |  |
| CDPopEditor | GetSelectedPops |  | unknown |  |
| CDPopEditor | GetTemplate |  | unknown |  |
| CDPopEditor | HasError |  | bool |  |
| CDPopEditor | IsDirty |  | bool |  |
| CDPopEditor | IsSelected | 1. unknown | bool |  |
| CDPopEditor | PickCultureFrom | 1. unknown | void |  |
| CDPopEditor | PickReligionFrom | 1. unknown | void |  |
| CDPopEditor | Reset |  | void |  |
| CDPopEditor | ResetTemplate |  | void |  |
| CDPopEditor | ResetToOriginal |  | void |  |
| CDPopEditor | Save |  | void |  |
| CDPopEditor | SelectPop | 1. unknown | void |  |
| CDPopEditor | Self |  | CDPopEditor |  |
| CEconomy | AccessSelf |  | CEconomy |  |
| CEconomy | GetCountry |  | unknown |  |
| CEconomy | GetExpenseSettingBreakdown | 1. unknown | CString |  |
| CEconomy | GetExpenseSettingChange | 1. unknown | CFixedPoint |  |
| CEconomy | GetExpenseSettingInvestmentExpense | 1. unknown | CFixedPoint |  |
| CEconomy | GetExpenseSettingInvestmentExpenseInfo | 1. unknown | CFixedPoint |  |
| CEconomy | GetExpenseSettingInvestmentTooltip | 1. unknown | CString |  |
| CEconomy | GetExpenseSettingModifier | 1. unknown | CString |  |
| CEconomy | GetMaintenancePercentage | 1. unknown | CFixedPoint |  |
| CEconomy | GetMarkets |  | unknown |  |
| CEconomy | GetMaxExpenseSettingExpenseNoFormat | 1. unknown | CFixedPoint |  |
| CEconomy | GetMaxStabilityExpenseNoFormat |  | CFixedPoint |  |
| CEconomy | GetNumberOfLoans |  | int32 |  |
| CEconomy | GetRemainingLoanCapacity |  | CFixedPoint |  |
| CEconomy | GetStabilityChange |  | CFixedPoint |  |
| CEconomy | GetStabilityInvestmentExpense |  | CFixedPoint |  |
| CEconomy | GetStabilityInvestmentExpenseInfo |  | CString |  |
| CEconomy | GetStabilityInvestmentTooltip |  | CString |  |
| CEconomy | GetStabilityInvestmentValue |  | CFixedPoint |  |
| CEconomy | GetTaxRate | 1. unknown | CFixedPoint |  |
| CEconomy | GetTotalDebt |  | CFixedPoint |  |
| CEconomy | GetTradeBalance |  | CFixedPoint |  |
| CEconomy | IsDuringBankruptcy |  | bool |  |
| CEconomy | Self |  | CEconomy |  |
| CEnumValueAnimation | AccessSelf |  | CEnumValueAnimation |  |
| CEnumValueAnimation | AnimationEditorTooltip |  | CString |  |
| CEnumValueAnimation | IsPlaying |  | bool |  |
| CEnumValueAnimation | OpenAnimationEditor |  | void |  |
| CEnumValueAnimation | Pause |  | void |  |
| CEnumValueAnimation | Play |  | void |  |
| CEnumValueAnimation | Rollback |  | void |  |
| CEnumValueAnimation | Self |  | CEnumValueAnimation |  |
| CFixedPoint | AccessSelf |  | CFixedPoint |  |
| CFixedPoint | GetFixedPoint |  | unknown |  |
| CFixedPoint | Self |  | CFixedPoint |  |
| CMapToolTip | AccessSelf |  | CMapToolTip |  |
| CMapToolTip | Self |  | CMapToolTip |  |
| CPdxEnumValue | AccessSelf |  | CPdxEnumValue |  |
| CPdxEnumValue | AreBundleValuesMixed |  | bool | Only intended to be used with EnumValuesBundles. Indicates whether the bundle contains multiple different values or not |
| CPdxEnumValue | GetDropdownEntries |  | unknown |  |
| CPdxEnumValue | GetDropdownValueIndex |  | CVector2i |  |
| CPdxEnumValue | GetValueString |  | CString |  |
| CPdxEnumValue | Self |  | CPdxEnumValue |  |
| CPdxEnumValue | SetDropdownValueIndex |  | void |  |
| CPdxFloatRect | AccessSelf |  | CPdxFloatRect |  |
| CPdxFloatRect | GetRect |  | unknown |  |
| CPdxFloatRect | Self |  | CPdxFloatRect |  |
| CPdxInputBindingSetting | AccessSelf |  | CPdxInputBindingSetting |  |
| CPdxInputBindingSetting | Self |  | CPdxInputBindingSetting |  |
| CPdxIntRect | AccessSelf |  | CPdxIntRect |  |
| CPdxIntRect | GetRect |  | unknown |  |
| CPdxIntRect | Self |  | CPdxIntRect |  |
| CSceneEditorPreviewPropertiesPanel | AccessSelf |  | CSceneEditorPreviewPropertiesPanel |  |
| CSceneEditorPreviewPropertiesPanel | GetPreviewPropertiesPanelLayoutPolicy |  | unknown |  |
| CSceneEditorPreviewPropertiesPanel | IsPreviewPropertiesPanelVisible |  | bool |  |
| CSceneEditorPreviewPropertiesPanel | Self |  | CSceneEditorPreviewPropertiesPanel |  |
| CSceneEditorPreviewPropertiesPanel | ToggleIsPreviewPropertiesPanelVisible |  | void |  |
| CString | AccessSelf |  | CString |  |
| CString | GetString |  | unknown |  |
| CString | Self |  | CString |  |
| CTest | AccessSelf |  | CTest |  |
| CTest | GetName |  | CString |  |
| CTest | Self |  | CTest |  |
| CUTF8String | AccessSelf |  | CUTF8String |  |
| CUTF8String | GetString |  | unknown |  |
| CUTF8String | Self |  | CUTF8String |  |
| CVector2f | AccessSelf |  | CVector2f |  |
| CVector2f | GetVector |  | unknown |  |
| CVector2f | Self |  | CVector2f |  |
| CVector2i | AccessSelf |  | CVector2i |  |
| CVector2i | GetVector |  | unknown |  |
| CVector2i | Self |  | CVector2i |  |
| CVector3f | AccessSelf |  | CVector3f |  |
| CVector3f | GetVector |  | unknown |  |
| CVector3f | Self |  | CVector3f |  |
| CVector3i | AccessSelf |  | CVector3i |  |
| CVector3i | GetVector |  | unknown |  |
| CVector3i | Self |  | CVector3i |  |
| CVector4f | AccessSelf |  | CVector4f |  |
| CVector4f | GetVector |  | unknown |  |
| CVector4f | Self |  | CVector4f |  |
| CVector4i | AccessSelf |  | CVector4i |  |
| CVector4i | GetVector |  | unknown |  |
| CVector4i | Self |  | CVector4i |  |
| Cabinet | AccessSelf |  | Cabinet |  |
| Cabinet | ArePossibleCabinetCharactersAvailable |  | bool |  |
| Cabinet | AssigningCabinetMemberToSlot |  | void |  |
| Cabinet | CharacterIsSet |  | bool |  |
| Cabinet | GenerateSceneDesc |  | unknown |  |
| Cabinet | GetAIDebugTooltip |  | CString |  |
| Cabinet | GetAction |  | unknown |  |
| Cabinet | GetActionEffectTextOnActivated |  | CString |  |
| Cabinet | GetActionEffectTextOnDeactivated |  | CString |  |
| Cabinet | GetActionEffectTextOnFullyActivated |  | CString |  |
| Cabinet | GetActionNumProgress |  | CFixedPoint |  |
| Cabinet | GetActionProgress |  | CString |  |
| Cabinet | GetActionProgressLongWordier |  | CString |  |
| Cabinet | GetActionProgressTooltipSections |  | unknown |  |
| Cabinet | GetActionProgressWordier |  | CString |  |
| Cabinet | GetCharacter |  | unknown |  |
| Cabinet | GetDaysUntilFullyImplemented |  | CString |  |
| Cabinet | GetDescriptionForAssigningCabinetMemberToSlot |  | CString |  |
| Cabinet | GetDescriptionForReplacingCabinetMemberToSlot |  | CString |  |
| Cabinet | GetEffectiveSkill |  | CFixedPoint |  |
| Cabinet | GetEffectiveSkillImpactInfo |  | CString |  |
| Cabinet | GetEffectiveSkillOnlyEffect |  | CString |  |
| Cabinet | GetEffectiveSkillTooltip |  | CString |  |
| Cabinet | GetIndex |  | int32 |  |
| Cabinet | GetMaxSocietalValueReachable |  | CFixedPoint |  |
| Cabinet | GetName |  | CString |  |
| Cabinet | GetNameWithNoTooltip |  | CString |  |
| Cabinet | GetPossibleCandidateInfo |  | CString |  |
| Cabinet | GetPriceForAssigningCabinetMemberToSlot |  | CString |  |
| Cabinet | GetSocietalValue |  | unknown |  |
| Cabinet | GetSocietalValueChange |  | CString |  |
| Cabinet | GetSocietalValueCurrentNumber |  | float |  |
| Cabinet | GetSocietalValueMonthlyProgress |  | CFixedPoint |  |
| Cabinet | GetSocietalValueName |  | CString |  |
| Cabinet | GetSocietalValueTotal |  | CFixedPoint |  |
| Cabinet | GetSocietalValueTotalInertia |  | CFixedPoint |  |
| Cabinet | GetTooltip |  | CString |  |
| Cabinet | HasPossibleCandidates |  | bool |  |
| Cabinet | HasReachedMaxSocietalValue |  | bool |  |
| Cabinet | IsActive |  | bool |  |
| Cabinet | IsCharacterSet |  | bool |  |
| Cabinet | IsEffectiveSkillType | 1. unknown | bool |  |
| Cabinet | IsLocked |  | bool |  |
| Cabinet | IsSocietalValueSelected | 1. unknown | bool |  |
| Cabinet | MakeScope |  | Scope | Jomini Script System |
| Cabinet | Self |  | Cabinet |  |
| CabinetAction | AccessSelf |  | CabinetAction |  |
| CabinetAction | GetAbilityName |  | CString |  |
| CabinetAction | GetAllowedTooltip | 1. unknown | CString |  |
| CabinetAction | GetDesc |  | CString |  |
| CabinetAction | GetEffects |  | CString |  |
| CabinetAction | GetEffectsOnActivated |  | CString |  |
| CabinetAction | GetEffectsOnDeactivated |  | CString |  |
| CabinetAction | GetEffectsOnFullyActivated |  | CString |  |
| CabinetAction | GetExtraTooltip |  | CString |  |
| CabinetAction | GetModifiers |  | CString |  |
| CabinetAction | GetName |  | CString |  |
| CabinetAction | GetNameWithNoTooltip |  | CString |  |
| CabinetAction | GetPotentialTooltip | 1. unknown | CString |  |
| CabinetAction | GetSocietalValueChangeTooltip |  | CString |  |
| CabinetAction | GetTooltip |  | CString |  |
| CabinetAction | HasEffectsOnActivated |  | bool |  |
| CabinetAction | HasEffectsOnDeactivated |  | bool |  |
| CabinetAction | HasEffectsOnFullyActivated |  | bool |  |
| CabinetAction | HasSocietalValues |  | bool |  |
| CabinetAction | IsAbilityType | 1. unknown | bool |  |
| CabinetAction | IsRebelCrackdown |  | bool |  |
| CabinetAction | Self |  | CabinetAction |  |
| CabinetActionMarker | AccessSelf |  | CabinetActionMarker |  |
| CabinetActionMarker | GetCabinet |  | unknown |  |
| CabinetActionMarker | GetProgress |  | float |  |
| CabinetActionMarker | GetProvince |  | unknown |  |
| CabinetActionMarker | GetTooltip |  | CString |  |
| CabinetActionMarker | Self |  | CabinetActionMarker |  |
| CabinetActionProgressTooltipSection | AccessSelf |  | CabinetActionProgressTooltipSection |  |
| CabinetActionProgressTooltipSection | GetString |  | CString |  |
| CabinetActionProgressTooltipSection | Self |  | CabinetActionProgressTooltipSection |  |
| CabinetCardModifier | AccessSelf |  | CabinetCardModifier |  |
| CabinetCardModifier | GetEntries |  | unknown |  |
| CabinetCardModifier | GetNumEntries |  | int32 |  |
| CabinetCardModifier | Self |  | CabinetCardModifier |  |
| CabinetCardModifierEntry | AccessSelf |  | CabinetCardModifierEntry |  |
| CabinetCardModifierEntry | GetKey |  | CString |  |
| CabinetCardModifierEntry | GetValue |  | CString |  |
| CabinetCardModifierEntry | Self |  | CabinetCardModifierEntry |  |
| CabinetItem | AccessSelf |  | CabinetItem |  |
| CabinetItem | ChangeCabinetActionTarget |  | void |  |
| CabinetItem | GetAdvisorUIAction |  | unknown |  |
| CabinetItem | GetCabinet |  | unknown |  |
| CabinetItem | GetNoAdvisorUIAction |  | unknown |  |
| CabinetItem | IsChangeCabinetActionTargetEnabled |  | bool |  |
| CabinetItem | IsChangeCabinetActionTargetVisible |  | bool |  |
| CabinetItem | SelectCabinetAction |  | void |  |
| CabinetItem | Self |  | CabinetItem |  |
| CabinetItem | ToggleLockedStatus |  | void |  |
| CallAllyAlert | AccessSelf |  | CallAllyAlert |  |
| CallAllyAlert | GetCountry |  | unknown |  |
| CallAllyAlert | GetTooltip |  | CString |  |
| CallAllyAlert | GetUIAction |  | unknown |  |
| CallAllyAlert | Hide |  | void |  |
| CallAllyAlert | IsNew |  | bool |  |
| CallAllyAlert | Self |  | CallAllyAlert |  |
| CallAllyAlert | SetAsOld |  | void |  |
| Cardinal | AccessSelf |  | Cardinal |  |
| Cardinal | GetLocation |  | unknown |  |
| Cardinal | GetName |  | CString |  |
| Cardinal | GetNameWithNoTooltip |  | CString |  |
| Cardinal | GetOwner |  | unknown |  |
| Cardinal | GetReligion |  | unknown |  |
| Cardinal | GetUITooltip |  | CString |  |
| Cardinal | MakeScope |  | Scope | Jomini Script System |
| Cardinal | Self |  | Cardinal |  |
| CasusBelli | AccessSelf |  | CasusBelli |  |
| CasusBelli | GetDescription |  | CString |  |
| CasusBelli | GetName |  | CString |  |
| CasusBelli | GetNameWithNoTooltip |  | CString |  |
| CasusBelli | GetTooltip |  | CString |  |
| CasusBelli | GetWarGoalType |  | unknown |  |
| CasusBelli | HasWarGoalType |  | bool |  |
| CasusBelli | MakeScope |  | Scope | Jomini Script System |
| CasusBelli | Self |  | CasusBelli |  |
| CategoryBuildingTypesItem | AccessSelf |  | CategoryBuildingTypesItem |  |
| CategoryBuildingTypesItem | GetBuildingItems |  | unknown |  |
| CategoryBuildingTypesItem | GetBuildingTypesAmount |  | int32 |  |
| CategoryBuildingTypesItem | GetCategory |  | unknown |  |
| CategoryBuildingTypesItem | GetName |  | CString |  |
| CategoryBuildingTypesItem | IsEstateCategory |  | bool |  |
| CategoryBuildingTypesItem | IsExpanded |  | bool |  |
| CategoryBuildingTypesItem | Self |  | CategoryBuildingTypesItem |  |
| CategoryBuildingTypesItem | Toggle |  | void |  |
| CategoryTradesItem | AccessSelf |  | CategoryTradesItem |  |
| CategoryTradesItem | GetIcon |  | unknown |  |
| CategoryTradesItem | GetName |  | CString |  |
| CategoryTradesItem | GetPossibleTrades |  | unknown |  |
| CategoryTradesItem | GetTradesAmount |  | int32 |  |
| CategoryTradesItem | IsCurrentTrades |  | bool |  |
| CategoryTradesItem | IsExpanded |  | bool |  |
| CategoryTradesItem | Self |  | CategoryTradesItem |  |
| CategoryTradesItem | Toggle |  | void |  |
| CharMessage | AccessSelf |  | CharMessage |  |
| CharMessage | GetCharacter |  | unknown |  |
| CharMessage | Self |  | CharMessage |  |
| Character | AccessSelf |  | Character |  |
| Character | CalcMercenaryLeaderHireCost |  | CString |  |
| Character | CanGiveUnitBonus |  | bool |  |
| Character | CanSelectUnit |  | bool |  |
| Character | Custom | 1. unknown | CString |  |
| Character | GenerateSceneDesc |  | unknown |  |
| Character | GetAbility | 1. unknown | int32 |  |
| Character | GetAbilityInfo | 1. unknown | CString |  |
| Character | GetAbilityTooltip |  | CString |  |
| Character | GetAbilityTooltipAsAdmiral |  | CString |  |
| Character | GetAbilityTooltipAsArtist |  | CString |  |
| Character | GetAbilityTooltipAsExplorer |  | CString |  |
| Character | GetAbilityTooltipAsGeneral |  | CString |  |
| Character | GetAbilityTooltipAsNoRole |  | CString |  |
| Character | GetAbilityTooltipAsRuler |  | CString |  |
| Character | GetActiveRegenciesTooltip |  | CString |  |
| Character | GetActiveRulerTermsTooltip |  | CString |  |
| Character | GetAdmiralAbilityInfo | 1. unknown | CString |  |
| Character | GetAdultNicknameWithNoTooltip |  | CString |  |
| Character | GetAge |  | int32 |  |
| Character | GetAgeInYears |  | int32 |  |
| Character | GetAgeInfo |  | CString |  |
| Character | GetAgeOnDeathInfo |  | CString |  |
| Character | GetAgeOnDeathOrBirthDate |  | CString |  |
| Character | GetAllTitles |  | unknown |  |
| Character | GetAnimatedPortrait | 1. unknown 2. unknown 3. unknown 4. unknown | unknown |  |
| Character | GetArtInProgress |  | unknown |  |
| Character | GetArtProgress |  | CFixedPoint |  |
| Character | GetArtProgressForUI |  | float |  |
| Character | GetArtProgressInfo |  | CString |  |
| Character | GetArtistAbilityInfo |  | CString |  |
| Character | GetArtistSkill |  | CFixedPoint |  |
| Character | GetArtistType |  | unknown |  |
| Character | GetAuntUncle |  | CString |  |
| Character | GetAvailableMercenarySubUnitsForLeader |  | unknown |  |
| Character | GetBirthDate |  | CString |  |
| Character | GetBirthLocation |  | unknown |  |
| Character | GetCachedPortrait | 1. unknown 2. unknown 3. unknown 4. unknown | unknown |  |
| Character | GetCanonizationDate | 1. unknown | CString |  |
| Character | GetCharacterPrefixWithNoTooltip |  | CString |  |
| Character | GetCharacterRegnalNumWithNoTooltip |  | CString |  |
| Character | GetCharacterSuffixWithNoTooltip |  | CString |  |
| Character | GetChildren |  | unknown |  |
| Character | GetCombatModifierDescription | 1. unknown 2. unknown | CString |  |
| Character | GetCombatModifierNoFormat | 1. unknown 2. unknown | CFixedPoint |  |
| Character | GetCommanderTooltip |  | CString |  |
| Character | GetCourtCountry |  | unknown |  |
| Character | GetCulture |  | unknown |  |
| Character | GetDaughterSon |  | CString |  |
| Character | GetDeadSince |  | CString |  |
| Character | GetDeathAndAgeInfo |  | CString |  |
| Character | GetDeathInfo |  | CString |  |
| Character | GetDeathReason |  | CString |  |
| Character | GetDebugTooltip |  | CString |  |
| Character | GetDetailedInformation |  | CString |  |
| Character | GetDynasty |  | unknown |  |
| Character | GetDynastyHeadTooltip |  | CString |  |
| Character | GetEducation |  | unknown |  |
| Character | GetEducationAbilityInfo |  | CString |  |
| Character | GetEstateType |  | unknown |  |
| Character | GetExploration |  | unknown |  |
| Character | GetExplorerAbilityInfo | 1. unknown | CString |  |
| Character | GetFather |  | unknown |  |
| Character | GetFertility |  | CFixedPoint |  |
| Character | GetFirstNameForEditbox |  | CString |  |
| Character | GetFirstNameKey |  | CString |  |
| Character | GetFirstNameWithNoTooltip |  | CString |  |
| Character | GetFullDeathInfo |  | CString |  |
| Character | GetGeneralAbilityInfo | 1. unknown | CString |  |
| Character | GetHeShe |  | CString |  |
| Character | GetHeSheFormal |  | CString |  |
| Character | GetHeirInfo |  | CString |  |
| Character | GetHerHim |  | CString |  |
| Character | GetHerHis |  | CString |  |
| Character | GetHersHis |  | CString |  |
| Character | GetHerselfHimself |  | CString |  |
| Character | GetHimHer |  | CString |  |
| Character | GetHimHerFormal |  | CString |  |
| Character | GetHisHer |  | CString |  |
| Character | GetHisHerFormal |  | CString |  |
| Character | GetHisHers |  | CString |  |
| Character | GetHisHersFormal |  | CString |  |
| Character | GetID |  | int32 |  |
| Character | GetIsWas |  | CString |  |
| Character | GetKey |  | CString |  |
| Character | GetLastName |  | CString |  |
| Character | GetLastNameWithNoTooltip |  | CString |  |
| Character | GetLeaderFrame |  | int32 |  |
| Character | GetLifeExpectancy |  | CString |  |
| Character | GetLifeExpectancyDesc |  | CString |  |
| Character | GetLocation |  | unknown |  |
| Character | GetMaxHiringSubunitsForLeader |  | int32 |  |
| Character | GetMercenaryAvailableTotalSubunitsCount |  | CFixedPoint |  |
| Character | GetMercenaryTotalSubunitUITooltip |  | CString |  |
| Character | GetModifierValue | 1. unknown | CString |  |
| Character | GetMother |  | unknown |  |
| Character | GetMotherFather |  | CString |  |
| Character | GetName |  | CString |  |
| Character | GetNameToFit | 1. unknown 2. unknown | CString |  |
| Character | GetNameToFitWithNoTooltip | 1. unknown 2. unknown | CString |  |
| Character | GetNameToFitWithoutThisDynasty | 1. unknown 2. unknown 3. unknown | CString |  |
| Character | GetNameWithNoTooltip |  | CString |  |
| Character | GetNickname |  | CString |  |
| Character | GetNicknameWithNoTooltip |  | CString |  |
| Character | GetNieceNephew |  | CString |  |
| Character | GetOralAddress |  | CString |  |
| Character | GetOralAddressPossessive |  | CString |  |
| Character | GetPortrait | 1. unknown 2. unknown 3. unknown 4. unknown | unknown |  |
| Character | GetPortraitBg |  | unknown |  |
| Character | GetPortraitFrameFrame |  | int32 |  |
| Character | GetPositionInLineForTheThrone |  | int32 |  |
| Character | GetQuickDescription |  | CString |  |
| Character | GetRebel |  | unknown |  |
| Character | GetRelationToCountryInfo |  | CString |  |
| Character | GetRelationToRulerInfo |  | CString |  |
| Character | GetRelationTooltip |  | CString |  |
| Character | GetReligion |  | unknown |  |
| Character | GetReligiousFigureType |  | unknown |  |
| Character | GetReligiousSchool |  | unknown |  |
| Character | GetRoleMask |  | unknown |  |
| Character | GetRoleName |  | CString |  |
| Character | GetRulerAbilityInfo | 1. unknown | CString |  |
| Character | GetRulerTermsTooltip |  | CString |  |
| Character | GetScriptKeyName |  | CString |  |
| Character | GetSheHe |  | CString |  |
| Character | GetShortName |  | CString |  |
| Character | GetShortNameWithNoTooltip |  | CString |  |
| Character | GetSisterBrother |  | CString |  |
| Character | GetSpouse |  | unknown |  |
| Character | GetSpouses |  | unknown |  |
| Character | GetSpousesAmount |  | int32 |  |
| Character | GetTimedModifierOwner |  | unknown |  |
| Character | GetTimedModifiers |  | unknown |  |
| Character | GetTotalAbility |  | CString |  |
| Character | GetTraits |  | unknown |  |
| Character | GetUITooltip |  | CString |  |
| Character | GetUnitLeadingName |  | CString |  |
| Character | GetUnitPointer |  | unknown |  |
| Character | GetUnitTooltip |  | CString |  |
| Character | GetWhenGivingUnitBonus |  | CString |  |
| Character | GetWifeHusband |  | CString |  |
| Character | GetWomanMan |  | CString |  |
| Character | GetWomenMen |  | CString |  |
| Character | GetWorksOfArt |  | unknown |  |
| Character | GetWorksOfArtTooltip |  | CString |  |
| Character | HasArmy |  | bool |  |
| Character | HasArtInProgress |  | bool |  |
| Character | HasCourtCountry |  | bool |  |
| Character | HasDynasty |  | bool |  |
| Character | HasEducation |  | bool |  |
| Character | HasEducationAbilityInfo |  | bool |  |
| Character | HasExploration |  | bool |  |
| Character | HasNavy |  | bool |  |
| Character | HasNickName |  | bool |  |
| Character | HasRebel |  | bool |  |
| Character | HasRole |  | bool |  |
| Character | HasUnit |  | bool |  |
| Character | IsAdult |  | bool |  |
| Character | IsAlive |  | bool |  |
| Character | IsArtist |  | bool |  |
| Character | IsConsort |  | bool |  |
| Character | IsDynastyHead |  | bool |  |
| Character | IsFemale |  | bool |  |
| Character | IsFounderOfDynasty |  | bool |  |
| Character | IsHeadOfCabinet |  | bool |  |
| Character | IsHeir |  | bool |  |
| Character | IsImmortal |  | bool |  |
| Character | IsNameOrderDefault |  | bool |  |
| Character | IsNameOrderNumberPrefix |  | bool |  |
| Character | IsNameOrderPrefixNumber |  | bool |  |
| Character | IsPregnant |  | bool |  |
| Character | IsRuler |  | bool |  |
| Character | IsUnitLeaderSelected | 1. unknown | bool |  |
| Character | IsValid |  | bool |  |
| Character | MakeScope |  | Scope | Jomini Script System |
| Character | Self |  | Character |  |
| Character | WasRuler |  | bool |  |
| CharacterActionItem | AccessSelf |  | CharacterActionItem |  |
| CharacterActionItem | GetEffectsInfo |  | CString |  |
| CharacterActionItem | GetIcon |  | unknown |  |
| CharacterActionItem | GetKey |  | CString |  |
| CharacterActionItem | GetTitle |  | CString |  |
| CharacterActionItem | GetUIAction |  | unknown |  |
| CharacterActionItem | HasEffectsInfo |  | bool |  |
| CharacterActionItem | IsCharacterEducation |  | bool |  |
| CharacterActionItem | Self |  | CharacterActionItem |  |
| CharacterInteraction | AccessSelf |  | CharacterInteraction |  |
| CharacterInteraction | CanPerformForCountry | 1. unknown 2. unknown | bool |  |
| CharacterInteraction | CanShowForCountry | 1. unknown 2. unknown | bool |  |
| CharacterInteraction | GetCanPerformForCountryTooltip | 1. unknown 2. unknown | CString |  |
| CharacterInteraction | GetKey |  | CString |  |
| CharacterInteraction | GetName |  | CString |  |
| CharacterInteraction | GetNameWithNoTooltip |  | CString |  |
| CharacterInteraction | GetTooltip |  | CString |  |
| CharacterInteraction | MakeScope |  | Scope | Jomini Script System |
| CharacterInteraction | Self |  | CharacterInteraction |  |
| CharacterInteractionItem | AccessSelf |  | CharacterInteractionItem |  |
| CharacterInteractionItem | GetInteraction |  | unknown |  |
| CharacterInteractionItem | Self |  | CharacterInteractionItem |  |
| CharacterItem | AccessSelf |  | CharacterItem |  |
| CharacterItem | Self |  | CharacterItem |  |
| CharacterLateralview | AccessSelf |  | CharacterLateralview |  |
| CharacterLateralview | CanOpenMarriageFinder |  | bool |  |
| CharacterLateralview | GenerateSceneDesc |  | unknown |  |
| CharacterLateralview | GetActions |  | unknown |  |
| CharacterLateralview | GetCharacter |  | unknown |  |
| CharacterLateralview | GetMarriageFinderInfo |  | CString |  |
| CharacterLateralview | GetNextRulerTraits |  | unknown |  |
| CharacterLateralview | GetPlayer |  | unknown |  |
| CharacterLateralview | GetTraits |  | unknown |  |
| CharacterLateralview | IsLeftPanel |  | bool |  |
| CharacterLateralview | IsRightPanel |  | bool |  |
| CharacterLateralview | MarriageFinder |  | void |  |
| CharacterLateralview | Self |  | CharacterLateralview |  |
| CharacterModifierWrap | AccessSelf |  | CharacterModifierWrap |  |
| CharacterModifierWrap | GetIcon |  | unknown |  |
| CharacterModifierWrap | GetName |  | CString |  |
| CharacterModifierWrap | GetTooltip |  | CString |  |
| CharacterModifierWrap | Self |  | CharacterModifierWrap |  |
| CharacterRoleMask | AccessSelf |  | CharacterRoleMask |  |
| CharacterRoleMask | GetFirstRoleIndex |  | int32 |  |
| CharacterRoleMask | GetFirstRoleName |  | CString |  |
| CharacterRoleMask | GetRoleIcon | 1. unknown | unknown |  |
| CharacterRoleMask | GetRoleName | 1. unknown | CString |  |
| CharacterRoleMask | GetRolesCount |  | int32 |  |
| CharacterRoleMask | GetRolesName |  | CString |  |
| CharacterRoleMask | HasAnyRole |  | bool |  |
| CharacterRoleMask | HasRole | 1. unknown | bool |  |
| CharacterRoleMask | Self |  | CharacterRoleMask |  |
| CharacterRulerData | AccessSelf |  | CharacterRulerData |  |
| CharacterRulerData | GetNumRulers |  | int32 |  |
| CharacterRulerData | Self |  | CharacterRulerData |  |
| Chat | AccessChatMessages |  | unknown |  |
| Chat | AccessSelf |  | Chat |  |
| Chat | GetReceiver |  | unknown |  |
| Chat | GetReceiverName |  | CUTF8String |  |
| Chat | GetUnreadMessageCount |  | int32 |  |
| Chat | HasUnreadMessages |  | bool |  |
| Chat | IsRoomChat |  | bool |  |
| Chat | Self |  | Chat |  |
| ChatMessage | AccessSelf |  | ChatMessage |  |
| ChatMessage | GetMessage |  | CUTF8String |  |
| ChatMessage | GetName |  | CUTF8String |  |
| ChatMessage | Self |  | ChatMessage |  |
| ChatNotificationMessage | AccessSelf |  | ChatNotificationMessage |  |
| ChatNotificationMessage | ChatMessage |  | unknown |  |
| ChatNotificationMessage | Kill |  | void |  |
| ChatNotificationMessage | Self |  | ChatNotificationMessage |  |
| ChatNotificationMessage | StartChat |  | void |  |
| ChatTab | AccessSelf |  | ChatTab |  |
| ChatTab | Activate |  | void |  |
| ChatTab | Close |  | void |  |
| ChatTab | GetChat |  | unknown |  |
| ChatTab | GetChatTitle |  | CUTF8String |  |
| ChatTab | IsActive |  | bool |  |
| ChatTab | Self |  | ChatTab |  |
| ChatWindow | AccessChatTabs |  | unknown |  |
| ChatWindow | AccessSelf |  | ChatWindow |  |
| ChatWindow | CanSendMessage |  | bool |  |
| ChatWindow | Hide |  | void |  |
| ChatWindow | Self |  | ChatWindow |  |
| ChatWindow | SendMessage |  | void |  |
| ChatWindow | ShouldBeShown |  | bool |  |
| ChatWindow | Show |  | void |  |
| ChildAssembleEntityWindow | AccessSelf |  | ChildAssembleEntityWindow |  |
| ChildAssembleEntityWindow | GetName |  | CString |  |
| ChildAssembleEntityWindow | Self |  | ChildAssembleEntityWindow |  |
| ChildAssembleEntityWindow | SetName | 1. unknown | void |  |
| ChildEducation | AccessSelf |  | ChildEducation |  |
| ChildEducation | GetDescription |  | CString |  |
| ChildEducation | GetEffect |  | CString |  |
| ChildEducation | GetIconsEffect |  | CString |  |
| ChildEducation | GetImpactForTheCountry |  | CString |  |
| ChildEducation | GetName |  | CString |  |
| ChildEducation | GetNameWithNoTooltip |  | CString |  |
| ChildEducation | GetTooltip |  | CString |  |
| ChildEducation | MakeScope |  | Scope | Jomini Script System |
| ChildEducation | Self |  | ChildEducation |  |
| ChildEducationCandidate | AccessSelf |  | ChildEducationCandidate |  |
| ChildEducationCandidate | CanSelect |  | bool |  |
| ChildEducationCandidate | GetChildEducation |  | unknown |  |
| ChildEducationCandidate | GetWhy |  | CString |  |
| ChildEducationCandidate | IsAlreadySelected |  | bool |  |
| ChildEducationCandidate | Select |  | void |  |
| ChildEducationCandidate | Self |  | ChildEducationCandidate |  |
| ChildGenerator | AccessSelf |  | ChildGenerator |  |
| ChildGenerator | GetGenerationItems |  | unknown |  |
| ChildGenerator | GetRandomChildrenRatio |  | float |  |
| ChildGenerator | OnRandomizedRatioChanged |  | void |  |
| ChildGenerator | Regenerate |  | void |  |
| ChildGenerator | Self |  | ChildGenerator |  |
| ChildItem | AccessSelf |  | ChildItem |  |
| ChildItem | CopyDnaToClipboard |  | void |  |
| ChildItem | GetDna |  | CString |  |
| ChildItem | GetDnaForTexture | 1. unknown | CString |  |
| ChildItem | IsRandomized |  | bool |  |
| ChildItem | PasteDna |  | void |  |
| ChildItem | Self |  | ChildItem |  |
| CityGraphicsWrap | AccessSelf |  | CityGraphicsWrap |  |
| CityGraphicsWrap | CurrentIndex |  | int32 |  |
| CityGraphicsWrap | GetSelectedBuilding |  | unknown |  |
| CityGraphicsWrap | GetSelectedGood |  | unknown |  |
| CityGraphicsWrap | GetSelectedHolySite |  | unknown |  |
| CityGraphicsWrap | GetSelectedLocation |  | unknown |  |
| CityGraphicsWrap | GetSelectedPop |  | unknown |  |
| CityGraphicsWrap | GetSelectedWorkOfArt |  | unknown |  |
| CityGraphicsWrap | GetTotalItems |  | int32 |  |
| CityGraphicsWrap | GoNext |  | void |  |
| CityGraphicsWrap | GoPrev |  | void |  |
| CityGraphicsWrap | HasNext |  | bool |  |
| CityGraphicsWrap | HasPrev |  | bool |  |
| CityGraphicsWrap | IsSelectedBuilding |  | bool |  |
| CityGraphicsWrap | IsSelectedGood |  | bool |  |
| CityGraphicsWrap | IsSelectedHolySite |  | bool |  |
| CityGraphicsWrap | IsSelectedPop |  | bool |  |
| CityGraphicsWrap | IsSelectedRGO |  | bool |  |
| CityGraphicsWrap | IsSelectedWorkOfArt |  | bool |  |
| CityGraphicsWrap | Self |  | CityGraphicsWrap |  |
| CityMarker | AccessSelf |  | CityMarker |  |
| CityMarker | GetCapitalTexture |  | unknown |  |
| CityMarker | GetCapitalTooltip |  | CString |  |
| CityMarker | GetLabelWeight |  | int32 |  |
| CityMarker | GetLocation |  | unknown |  |
| CityMarker | GetMarkerWeight |  | int32 |  |
| CityMarker | GetRankPosition |  | CVector2f |  |
| CityMarker | GetRankSize |  | CVector2f |  |
| CityMarker | GetRankVisible |  | bool |  |
| CityMarker | GetTooltip |  | CString |  |
| CityMarker | HasWarFort |  | bool |  |
| CityMarker | IsAlly |  | bool |  |
| CityMarker | IsCapital |  | bool |  |
| CityMarker | IsCapitalVisible |  | bool |  |
| CityMarker | IsWar |  | bool |  |
| CityMarker | OnClick |  | void |  |
| CityMarker | Self |  | CityMarker |  |
| CityMarker | ShouldBeShownAsCapital |  | bool |  |
| CityMarker | ShouldBeShownAsCity |  | bool |  |
| CityMarker | ShouldBeShownAsSettlement |  | bool |  |
| CityMarker | ShouldShowOccupationFlag |  | bool |  |
| CityMarker | ShowDetails |  | bool |  |
| CityMarker | ShowDetailsOrHasWarFort |  | bool |  |
| Climate | AccessSelf |  | Climate |  |
| Climate | GetDesc |  | CString |  |
| Climate | GetIcon |  | CString |  |
| Climate | GetName |  | CString |  |
| Climate | GetNameNoUnderline |  | CString |  |
| Climate | GetNameWithNoTooltip |  | CString |  |
| Climate | GetTooltip |  | CString |  |
| Climate | MakeScope |  | Scope | Jomini Script System |
| Climate | Self |  | Climate |  |
| CloseSettingsDialogWindow | AccessSelf |  | CloseSettingsDialogWindow |  |
| CloseSettingsDialogWindow | OnCancel |  | void |  |
| CloseSettingsDialogWindow | OnDiscard |  | void |  |
| CloseSettingsDialogWindow | OnSave |  | void |  |
| CloseSettingsDialogWindow | Self |  | CloseSettingsDialogWindow |  |
| CoatOfArms | AccessSelf |  | CoatOfArms |  |
| CoatOfArms | GetColor | 1. unknown | CVector4f |  |
| CoatOfArms | GetFrame | 1. unknown 2. unknown | int32 |  |
| CoatOfArms | GetSlot | 1. unknown 2. unknown | CVector4f |  |
| CoatOfArms | GetTexture | 1. unknown 2. unknown | unknown |  |
| CoatOfArms | Self |  | CoatOfArms |  |
| CoatOfArmsWrapper | AccessSelf |  | CoatOfArmsWrapper |  |
| CoatOfArmsWrapper | GetColor | 1. unknown | CVector4f |  |
| CoatOfArmsWrapper | GetFrame | 1. unknown 2. unknown | int32 |  |
| CoatOfArmsWrapper | GetFrameSizeOrFallback | 1. unknown 2. unknown 3. unknown | CVector2i |  |
| CoatOfArmsWrapper | GetSlot | 1. unknown 2. unknown | CVector4f |  |
| CoatOfArmsWrapper | GetTexture | 1. unknown 2. unknown | unknown |  |
| CoatOfArmsWrapper | Self |  | CoatOfArmsWrapper |  |
| ColonialCharter | AccessSelf |  | ColonialCharter |  |
| ColonialCharter | GetDestination |  | unknown |  |
| ColonialCharter | GetMonthlyMaintenance |  | CFixedPoint |  |
| ColonialCharter | GetMonthlyMaintenanceInfo |  | CString |  |
| ColonialCharter | GetMonthlyMigration |  | CString |  |
| ColonialCharter | GetMonthlyMigrationInfo |  | CString |  |
| ColonialCharter | GetName |  | CString |  |
| ColonialCharter | GetNameWithNoTooltip |  | CString |  |
| ColonialCharter | GetOrigin |  | unknown |  |
| ColonialCharter | GetOriginInformation |  | CString |  |
| ColonialCharter | GetOriginName |  | CString |  |
| ColonialCharter | GetOwner |  | unknown |  |
| ColonialCharter | GetProgress |  | float |  |
| ColonialCharter | GetProgressInformation |  | CString |  |
| ColonialCharter | GetProvinceDefinition |  | unknown |  |
| ColonialCharter | GetUITooltip |  | CString |  |
| ColonialCharter | MakeScope |  | Scope | Jomini Script System |
| ColonialCharter | Self |  | ColonialCharter |  |
| ColonialCharterItem | AccessSelf |  | ColonialCharterItem |  |
| ColonialCharterItem | GetColonialCharter |  | unknown |  |
| ColonialCharterItem | GetInformation |  | CString |  |
| ColonialCharterItem | GetMaintenanceCost |  | CFixedPoint |  |
| ColonialCharterItem | GetMonthlyCostInfo |  | CString |  |
| ColonialCharterItem | GetNumLocations |  | int32 |  |
| ColonialCharterItem | GetProgress |  | float |  |
| ColonialCharterItem | GetProgressInformation |  | CString |  |
| ColonialCharterItem | GetProvinceDefinition |  | unknown |  |
| ColonialCharterItem | GetRangeInfo |  | CString |  |
| ColonialCharterItem | IsOngoing |  | bool |  |
| ColonialCharterItem | IsPlayer |  | bool |  |
| ColonialCharterItem | IsWithinColonialRange |  | bool |  |
| ColonialCharterItem | Self |  | ColonialCharterItem |  |
| ColonyCategoryGlue | AccessSelf |  | ColonyCategoryGlue |  |
| ColonyCategoryGlue | GetColonyItems |  | unknown |  |
| ColonyCategoryGlue | Self |  | ColonyCategoryGlue |  |
| ColonyCharterMarker | AccessSelf |  | ColonyCharterMarker |  |
| ColonyCharterMarker | ClearHighlightedCharter |  | void |  |
| ColonyCharterMarker | GetLocation |  | unknown |  |
| ColonyCharterMarker | GetProgress |  | float |  |
| ColonyCharterMarker | GetTooltip |  | CString |  |
| ColonyCharterMarker | HighlightCharter |  | void |  |
| ColonyCharterMarker | Self |  | ColonyCharterMarker |  |
| ColorPaletteNodeWindow | AccessSelf |  | ColorPaletteNodeWindow |  |
| ColorPaletteNodeWindow | CanShowPicker |  | bool |  |
| ColorPaletteNodeWindow | CurrentColor |  | CVector4f |  |
| ColorPaletteNodeWindow | CurrentPosition |  | CVector2i |  |
| ColorPaletteNodeWindow | HasPalette |  | bool |  |
| ColorPaletteNodeWindow | OnColorChanged |  | void |  |
| ColorPaletteNodeWindow | OnColorChangedFinish |  | void |  |
| ColorPaletteNodeWindow | OpenPickerWindow |  | void |  |
| ColorPaletteNodeWindow | PaletteName |  | CString |  |
| ColorPaletteNodeWindow | Self |  | ColorPaletteNodeWindow |  |
| ColorPicker | AccessSelf |  | ColorPicker |  |
| ColorPicker | GetColor |  | CVector4f |  |
| ColorPicker | GetColorSpace |  | unknown |  |
| ColorPicker | Self |  | ColorPicker |  |
| Combat | AccessSelf |  | Combat |  |
| Combat | GenerateBattlefieldTopographySceneDesc |  | unknown |  |
| Combat | GenerateBattlefieldVegetationSceneDesc |  | unknown |  |
| Combat | GenerateBattlefieldWaterSceneDesc |  | unknown |  |
| Combat | GetAttacker |  | unknown |  |
| Combat | GetDefender |  | unknown |  |
| Combat | GetHourlyMoraleInfo |  | CString |  |
| Combat | GetLocation |  | unknown |  |
| Combat | GetName |  | CString |  |
| Combat | GetNameWithNoTooltip |  | CString |  |
| Combat | GetPhaseName |  | CString |  |
| Combat | GetPhaseTooltip |  | CString |  |
| Combat | GetWar |  | unknown |  |
| Combat | IsActive |  | bool |  |
| Combat | IsCrossing |  | bool |  |
| Combat | IsInBombardPhase |  | bool |  |
| Combat | IsNavalCombat |  | bool |  |
| Combat | IsRiverCrossing |  | bool |  |
| Combat | IsSeaLanding |  | bool |  |
| Combat | IsStraitCrossing |  | bool |  |
| Combat | IsValid |  | bool |  |
| Combat | MakeScope |  | Scope | Jomini Script System |
| Combat | Self |  | Combat |  |
| CombatImminentMarker | AccessSelf |  | CombatImminentMarker |  |
| CombatImminentMarker | GetIconTexture |  | unknown |  |
| CombatImminentMarker | GetLocation |  | unknown |  |
| CombatImminentMarker | GetTooltip |  | CString |  |
| CombatImminentMarker | GetTooltipHeader |  | CString |  |
| CombatImminentMarker | GetTooltipOurSideAdvantages |  | CString |  |
| CombatImminentMarker | GetTooltipOurSideArmy |  | CString |  |
| CombatImminentMarker | GetTooltipOutcome |  | CString |  |
| CombatImminentMarker | GetTooltipTheirSideAdvantages |  | CString |  |
| CombatImminentMarker | GetTooltipTheirSideArmy |  | CString |  |
| CombatImminentMarker | Self |  | CombatImminentMarker |  |
| CombatMarker | AccessSelf |  | CombatMarker |  |
| CombatMarker | GetAttackerFrame |  | int32 |  |
| CombatMarker | GetCombat |  | unknown |  |
| CombatMarker | GetDefenderFrame |  | int32 |  |
| CombatMarker | GetLocation |  | unknown |  |
| CombatMarker | OnClick |  | void |  |
| CombatMarker | Self |  | CombatMarker |  |
| CombatMarker | ShouldBeShownFullWidth |  | bool |  |
| CombatMarker | ShouldBeShownShortWidth |  | bool |  |
| CombatMarker | ShouldBeShownSmallSize |  | bool |  |
| CombatMarker | ShouldBeShownVerySmallSize |  | bool |  |
| CombatModifier | AccessSelf |  | CombatModifier |  |
| CombatModifier | GetFrame |  | int32 |  |
| CombatModifier | GetIcon |  | unknown |  |
| CombatModifier | GetKey |  | CString |  |
| CombatModifier | GetName |  | CString |  |
| CombatModifier | GetTooltip |  | CString |  |
| CombatModifier | GetValue |  | int32 |  |
| CombatModifier | Self |  | CombatModifier |  |
| CombatSide | AccessSelf |  | CombatSide |  |
| CombatSide | CanEngageInOtherFlank | 1. unknown 2. unknown | bool |  |
| CombatSide | CanEngageUnits | 1. unknown | bool |  |
| CombatSide | GetAttackingFlankInfo | 1. unknown 2. unknown | CString |  |
| CombatSide | GetAverageMorale |  | CFixedPoint |  |
| CombatSide | GetBattleSide |  | unknown |  |
| CombatSide | GetCaptured |  | unknown |  |
| CombatSide | GetCenter |  | unknown |  |
| CombatSide | GetCombat |  | unknown |  |
| CombatSide | GetCombatModifiers |  | unknown |  |
| CombatSide | GetCommander |  | unknown |  |
| CombatSide | GetCountry |  | unknown |  |
| CombatSide | GetDiceWithModifiers |  | int32 |  |
| CombatSide | GetDiceWithModifiersTooltip |  | CString |  |
| CombatSide | GetEngagedUnitsStrength |  | CString |  |
| CombatSide | GetEngagedUnitsStrengthShort |  | CString |  |
| CombatSide | GetFlankFrame | 1. unknown 2. unknown | int32 |  |
| CombatSide | GetFlankFrameMirrored | 1. unknown 2. unknown | int32 |  |
| CombatSide | GetLeaderFrame |  | int32 |  |
| CombatSide | GetLeadingUnit |  | unknown |  |
| CombatSide | GetLeft |  | unknown |  |
| CombatSide | GetMaxMorale |  | CFixedPoint |  |
| CombatSide | GetMoraleLabel |  | CString |  |
| CombatSide | GetMoralePercent |  | float |  |
| CombatSide | GetMoraleTooltip |  | CString |  |
| CombatSide | GetParticipatingCountries |  | unknown |  |
| CombatSide | GetPossibleFrontage |  | CFixedPoint |  |
| CombatSide | GetPossibleFrontageInfo |  | CString |  |
| CombatSide | GetReserves |  | unknown |  |
| CombatSide | GetRetreated |  | unknown |  |
| CombatSide | GetRight |  | unknown |  |
| CombatSide | GetSubUnitCounts |  | unknown |  |
| CombatSide | GetSunkShips |  | int32 |  |
| CombatSide | GetUnits |  | unknown |  |
| CombatSide | GetVisualStrength |  | CString |  |
| CombatSide | GetVisualStrengthTooltip |  | CString |  |
| CombatSide | HasCommander |  | bool |  |
| CombatSide | HasDiscipline |  | bool |  |
| CombatSide | IsAttacker |  | bool |  |
| CombatSide | IsDiceModified |  | bool |  |
| CombatSide | IsNaval |  | bool |  |
| CombatSide | IsPlayerInCombat |  | bool |  |
| CombatSide | MakeScope |  | Scope | Jomini Script System |
| CombatSide | Self |  | CombatSide |  |
| CombatSideWrap | AccessSelf |  | CombatSideWrap |  |
| CombatSideWrap | GetCombatSide |  | unknown |  |
| CombatSideWrap | Self |  | CombatSideWrap |  |
| CombatSubUnitArray | AccessSelf |  | CombatSubUnitArray |  |
| CombatSubUnitArray | GetBoxId |  | CString |  |
| CombatSubUnitArray | GetBoxName |  | CString |  |
| CombatSubUnitArray | GetBoxNameWithConceptLink |  | CString |  |
| CombatSubUnitArray | GetCanBombard |  | unknown |  |
| CombatSubUnitArray | GetCombatSide |  | unknown |  |
| CombatSubUnitArray | GetCurrentMorale |  | CFixedPoint |  |
| CombatSubUnitArray | GetEngaged |  | unknown |  |
| CombatSubUnitArray | GetEngagedFrontage |  | CFixedPoint |  |
| CombatSubUnitArray | GetEngagedSize |  | int32 |  |
| CombatSubUnitArray | GetEngagedStrength |  | CString |  |
| CombatSubUnitArray | GetEngagedUnits |  | CString |  |
| CombatSubUnitArray | GetFlankIcon |  | unknown |  |
| CombatSubUnitArray | GetMaxStrength |  | CString |  |
| CombatSubUnitArray | GetMoralePercentage |  | float |  |
| CombatSubUnitArray | GetMoraleTooltip |  | CString |  |
| CombatSubUnitArray | GetMoraleUnits |  | CString |  |
| CombatSubUnitArray | GetNonEngaged |  | unknown |  |
| CombatSubUnitArray | GetNonEngagedFrontage |  | CFixedPoint |  |
| CombatSubUnitArray | GetNonEngagedSize |  | int32 |  |
| CombatSubUnitArray | GetNonEngagedStrength |  | CString |  |
| CombatSubUnitArray | GetNonEngagedUnits |  | CString |  |
| CombatSubUnitArray | GetSize |  | int32 |  |
| CombatSubUnitArray | GetStrength |  | CString |  |
| CombatSubUnitArray | GetSubUnits |  | unknown |  |
| CombatSubUnitArray | GetTotalMorale |  | CFixedPoint |  |
| CombatSubUnitArray | HasEngaged |  | bool |  |
| CombatSubUnitArray | Self |  | CombatSubUnitArray |  |
| ConditionLine | AccessSelf |  | ConditionLine |  |
| ConditionLine | GetText |  | CString |  |
| ConditionLine | HasCollapsed |  | bool |  |
| ConditionLine | HasFailed |  | bool |  |
| ConditionLine | HasPassed |  | bool |  |
| ConditionLine | IsNeutral |  | bool |  |
| ConditionLine | Self |  | ConditionLine |  |
| ConditionList | AccessSelf |  | ConditionList |  |
| ConditionList | GetCollapsedText |  | CString |  |
| ConditionList | GetLines |  | unknown |  |
| ConditionList | GetOutput |  | CString |  |
| ConditionList | GetTitle |  | CString |  |
| ConditionList | HasCollapsedText |  | bool |  |
| ConditionList | HasItems |  | bool |  |
| ConditionList | HasTitle |  | bool |  |
| ConditionList | IsEmpty |  | bool |  |
| ConditionList | Self |  | ConditionList |  |
| CondottieriItem | AccessSelf |  | CondottieriItem |  |
| CondottieriItem | GetBecomeMercText |  | CString |  |
| CondottieriItem | GetCostModifier |  | CFixedPoint |  |
| CondottieriItem | GetCostModifierStep |  | CFixedPoint |  |
| CondottieriItem | GetDuration |  | CFixedPoint |  |
| CondottieriItem | GetDurationStep |  | CFixedPoint |  |
| CondottieriItem | GetHirePrice |  | CString |  |
| CondottieriItem | GetHirePriceTooltip |  | CString |  |
| CondottieriItem | GetMaxCostModifier |  | CFixedPoint |  |
| CondottieriItem | GetMaxDuration |  | CFixedPoint |  |
| CondottieriItem | GetMaxMaintenanceCost |  | CFixedPoint |  |
| CondottieriItem | GetMinCostModifier |  | CFixedPoint |  |
| CondottieriItem | GetMinMaintenanceCost |  | CFixedPoint |  |
| CondottieriItem | GetMonthlyCostTooltip |  | CString |  |
| CondottieriItem | GetMonthlyMaintenanceCost |  | CFixedPoint |  |
| CondottieriItem | GetTotalPrice |  | CFixedPoint |  |
| CondottieriItem | GetUIHeaderAction |  | unknown |  |
| CondottieriItem | GetUnit |  | unknown |  |
| CondottieriItem | GetUpkeepPrice |  | CFixedPoint |  |
| CondottieriItem | IsBeingEdited |  | bool |  |
| CondottieriItem | IsEnabled |  | bool |  |
| CondottieriItem | IsVisible |  | bool |  |
| CondottieriItem | OnAccept |  | void |  |
| CondottieriItem | OnCostModifierChanged |  | void |  |
| CondottieriItem | OnDurationChanged |  | void |  |
| CondottieriItem | OnUnitNameEdited | 1. unknown | void |  |
| CondottieriItem | RenameUnit | 1. unknown | void |  |
| CondottieriItem | Self |  | CondottieriItem |  |
| CondottieriItem | StopEditing |  | void |  |
| ConfirmDiplomaticAction | AccessSelf |  | ConfirmDiplomaticAction |  |
| ConfirmDiplomaticAction | GetAcceptTooltip |  | CString |  |
| ConfirmDiplomaticAction | GetAcceptanceFrame |  | int32 |  |
| ConfirmDiplomaticAction | RequiresAcceptance |  | bool |  |
| ConfirmDiplomaticAction | Self |  | ConfirmDiplomaticAction |  |
| ConfirmDiplomaticAction | WillAccept |  | bool |  |
| ConfirmInsultAction | AccessSelf |  | ConfirmInsultAction |  |
| ConfirmInsultAction | GetCandidates |  | unknown |  |
| ConfirmInsultAction | GetIntroText |  | CString |  |
| ConfirmInsultAction | GetSelectedView |  | CVector2i |  |
| ConfirmInsultAction | SelectView |  | void |  |
| ConfirmInsultAction | Self |  | ConfirmInsultAction |  |
| ConfirmOfferLoanAction | AccessSelf |  | ConfirmOfferLoanAction |  |
| ConfirmOfferLoanAction | CanSend |  | bool |  |
| ConfirmOfferLoanAction | GetAmount |  | float |  |
| ConfirmOfferLoanAction | GetCandidates |  | unknown |  |
| ConfirmOfferLoanAction | GetDurationMonths |  | int32 |  |
| ConfirmOfferLoanAction | GetInterest |  | float |  |
| ConfirmOfferLoanAction | GetIntroText |  | CString |  |
| ConfirmOfferLoanAction | GetMaxAmount |  | float |  |
| ConfirmOfferLoanAction | GetMaxDurationMonths |  | int32 |  |
| ConfirmOfferLoanAction | GetMaxInterest |  | float |  |
| ConfirmOfferLoanAction | GetMinAmount |  | float |  |
| ConfirmOfferLoanAction | GetMinDurationMonths |  | int32 |  |
| ConfirmOfferLoanAction | GetMinInterest |  | float |  |
| ConfirmOfferLoanAction | GetSelectedView |  | CVector2i |  |
| ConfirmOfferLoanAction | SelectView |  | void |  |
| ConfirmOfferLoanAction | Self |  | ConfirmOfferLoanAction |  |
| ConfirmOfferLoanAction | SetAmount |  | void |  |
| ConfirmOfferLoanAction | SetDurationMonths |  | void |  |
| ConfirmOfferLoanAction | SetInterest |  | void |  |
| ConfirmWindow | AccessSelf |  | ConfirmWindow |  |
| ConfirmWindow | Cancel |  | void |  |
| ConfirmWindow | Confirm |  | void |  |
| ConfirmWindow | GetText |  | CString |  |
| ConfirmWindow | Self |  | ConfirmWindow |  |
| ConquistadorConstructionMarker | AccessSelf |  | ConquistadorConstructionMarker |  |
| ConquistadorConstructionMarker | GetConstruction |  | unknown |  |
| ConquistadorConstructionMarker | Self |  | ConquistadorConstructionMarker |  |
| ConsoleMenuItem | AccessSelf |  | ConsoleMenuItem |  |
| ConsoleMenuItem | GetHelp |  | CString |  |
| ConsoleMenuItem | GetName |  | CString |  |
| ConsoleMenuItem | IsCurrentGroup |  | bool |  |
| ConsoleMenuItem | Select |  | void |  |
| ConsoleMenuItem | Self |  | ConsoleMenuItem |  |
| ConsoleWindow | AccessSelf |  | ConsoleWindow |  |
| ConsoleWindow | IsMenuShown |  | bool |  |
| ConsoleWindow | Self |  | ConsoleWindow |  |
| ConsoleWindow | ToggleMenu |  | void |  |
| ConstructScoreItem | AccessSelf |  | ConstructScoreItem |  |
| ConstructScoreItem | GetCostValue |  | CFixedPoint |  |
| ConstructScoreItem | GetEmployability |  | CFixedPoint |  |
| ConstructScoreItem | GetEmployabilityStr |  | CString |  |
| ConstructScoreItem | GetLocation |  | unknown |  |
| ConstructScoreItem | GetNetProfitValue |  | CFixedPoint |  |
| ConstructScoreItem | GetProfitValue |  | CFixedPoint |  |
| ConstructScoreItem | Self |  | ConstructScoreItem |  |
| ConstructScoreRanking | AccessSelf |  | ConstructScoreRanking |  |
| ConstructScoreRanking | GetBuildingType |  | unknown |  |
| ConstructScoreRanking | GetConstructScoreFirstItem |  | unknown |  |
| ConstructScoreRanking | GetConstructScoreItems |  | unknown |  |
| ConstructScoreRanking | GetCost | 1. unknown | CString |  |
| ConstructScoreRanking | GetGoods |  | unknown |  |
| ConstructScoreRanking | GetInvalidFirstItem |  | unknown |  |
| ConstructScoreRanking | GetLastConstruction |  | unknown |  |
| ConstructScoreRanking | GetLastConstructionLocation |  | unknown |  |
| ConstructScoreRanking | GetLastConstructions |  | unknown |  |
| ConstructScoreRanking | HasBuildingType |  | bool |  |
| ConstructScoreRanking | HasConstructionToDequeue |  | bool |  |
| ConstructScoreRanking | HasGoods |  | bool |  |
| ConstructScoreRanking | HasGoodsAndAreValid |  | bool |  |
| ConstructScoreRanking | HasInvalidItems |  | bool |  |
| ConstructScoreRanking | HasProfit |  | bool |  |
| ConstructScoreRanking | HasScoreItems |  | bool |  |
| ConstructScoreRanking | IsValid |  | bool |  |
| ConstructScoreRanking | Self |  | ConstructScoreRanking |  |
| Construction | AccessSelf |  | Construction |  |
| Construction | CountAllInLocation |  | int32 |  |
| Construction | CountMyKindInLocation |  | int32 |  |
| Construction | GetBuilding |  | unknown |  |
| Construction | GetCountry |  | unknown |  |
| Construction | GetDurationInDays |  | int32 |  |
| Construction | GetEstateType |  | unknown |  |
| Construction | GetExplorationArea |  | unknown |  |
| Construction | GetFinishedDateIncludingQueue |  | CString |  |
| Construction | GetFinishedInfo |  | CString |  |
| Construction | GetGoodsDemand |  | unknown |  |
| Construction | GetInverseProgress |  | float |  |
| Construction | GetLocation |  | unknown |  |
| Construction | GetLocationRank |  | unknown |  |
| Construction | GetMissingGoodsInfo |  | CString |  |
| Construction | GetName |  | CString |  |
| Construction | GetNameWithNoTooltip |  | CString |  |
| Construction | GetProgress |  | float |  |
| Construction | GetProgressColor |  | CVector4f |  |
| Construction | GetProvince |  | unknown |  |
| Construction | GetShortMilitaryNameWithNoTooltip |  | CString |  |
| Construction | GetStalledReason |  | CString |  |
| Construction | GetStrength |  | CString |  |
| Construction | GetSubUnitDefinition |  | unknown |  |
| Construction | GetTooltip | 1. unknown | CString |  |
| Construction | GetUnitName |  | CString |  |
| Construction | GetUnitNameWithNoTooltip |  | CString |  |
| Construction | HasGoodsDemand |  | bool |  |
| Construction | IsArmy |  | bool |  |
| Construction | IsBuilding |  | bool |  |
| Construction | IsBuiltByEstate |  | bool |  |
| Construction | IsCapital |  | bool |  |
| Construction | IsConquistador |  | bool |  |
| Construction | IsExploration |  | bool |  |
| Construction | IsLevy |  | bool |  |
| Construction | IsLocationRank |  | bool |  |
| Construction | IsMarket |  | bool |  |
| Construction | IsMilitary |  | bool |  |
| Construction | IsNavy |  | bool |  |
| Construction | IsRGO |  | bool |  |
| Construction | IsRoad |  | bool |  |
| Construction | IsStalled |  | bool |  |
| Construction | LackedInput |  | bool |  |
| Construction | Self |  | Construction |  |
| ConstructionItem | AccessSelf |  | ConstructionItem |  |
| ConstructionItem | CanRecruit |  | bool |  |
| ConstructionItem | CanRecruitTT |  | CString |  |
| ConstructionItem | GetActionTitle |  | CString |  |
| ConstructionItem | GetConstruction |  | unknown |  |
| ConstructionItem | GetLeftClickConditions |  | CString |  |
| ConstructionItem | GetLeftClickCost |  | CString |  |
| ConstructionItem | GetLeftClickDescription |  | CString |  |
| ConstructionItem | GetLeftClickTitle |  | CString |  |
| ConstructionItem | GetNumInQueue |  | int32 |  |
| ConstructionItem | GetPos |  | int32 |  |
| ConstructionItem | GetRightClickConditions |  | CString |  |
| ConstructionItem | GetRightClickCost |  | CString |  |
| ConstructionItem | GetRightClickDescription |  | CString |  |
| ConstructionItem | GetRightClickTitle |  | CString |  |
| ConstructionItem | IsLeftClickEnabled |  | bool |  |
| ConstructionItem | IsLeftClickVisible |  | bool |  |
| ConstructionItem | IsRightClickEnabled |  | bool |  |
| ConstructionItem | IsRightClickVisible |  | bool |  |
| ConstructionItem | OnLeftClick |  | void |  |
| ConstructionItem | OnRightClick |  | void |  |
| ConstructionItem | Recruit |  | void |  |
| ConstructionItem | Self |  | ConstructionItem |  |
| Container | AccessSelf |  | Container |  |
| Container | Self |  | Container |  |
| Context | AccessSelf |  | Context |  |
| Context | Clear | 1. unknown | void |  |
| Context | ClearIf | 1. unknown 2. unknown | void |  |
| Context | Exists | 1. unknown | bool |  |
| Context | Get | 1. unknown | CString |  |
| Context | HasValue | 1. unknown 2. unknown | bool |  |
| Context | NotExistOrHasValue | 1. unknown 2. unknown | bool |  |
| Context | Self |  | Context |  |
| Context | Set | 1. unknown 2. unknown | void |  |
| Context | SetOrToggle | 1. unknown 2. unknown | void |  |
| Context | Toggle | 1. unknown | bool |  |
| ContextMenu | AccessSelf |  | ContextMenu |  |
| ContextMenu | IsSectionOpened | 1. unknown | bool |  |
| ContextMenu | OpenSection | 1. unknown | void |  |
| ContextMenu | Self |  | ContextMenu |  |
| ContextMenuItem | AccessSelf |  | ContextMenuItem |  |
| ContextMenuItem | Enabled |  | bool |  |
| ContextMenuItem | GetIcon |  | unknown |  |
| ContextMenuItem | GetLabel |  | CString |  |
| ContextMenuItem | Self |  | ContextMenuItem |  |
| Continent | AccessSelf |  | Continent |  |
| Continent | GetLogInfo |  | CString |  |
| Continent | GetMembersInfo |  | CString |  |
| Continent | GetName |  | CString |  |
| Continent | GetNameWithLandHighlightOnly |  | CString |  |
| Continent | GetNameWithNoTooltip |  | CString |  |
| Continent | GetNumSubContinents |  | int32 |  |
| Continent | GetTag |  | CString |  |
| Continent | GetTotalPopulation |  | CString |  |
| Continent | GetTotalPopulationInfo |  | CString |  |
| Continent | GetUITooltip |  | CString |  |
| Continent | MakeScope |  | Scope | Jomini Script System |
| Continent | Self |  | Continent |  |
| ControlGroupsView | AccessGroups |  | unknown |  |
| ControlGroupsView | AccessSelf |  | ControlGroupsView |  |
| ControlGroupsView | AreGroupsVisible | 1. unknown | bool |  |
| ControlGroupsView | Self |  | ControlGroupsView |  |
| CountriesListView | AccessSelf |  | CountriesListView |  |
| CountriesListView | GetCountriesListView |  | unknown |  |
| CountriesListView | GetCountriesSortSearch |  | unknown |  |
| CountriesListView | GetPlayer |  | unknown |  |
| CountriesListView | IsLeftPanel |  | bool |  |
| CountriesListView | IsRightPanel |  | bool |  |
| CountriesListView | Self |  | CountriesListView |  |
| CountriesListViewItem | AccessSelf |  | CountriesListViewItem |  |
| CountriesListViewItem | GetCountry |  | unknown |  |
| CountriesListViewItem | Self |  | CountriesListViewItem |  |
| Country | AccessSelf |  | Country |  |
| Country | AutoRaiseArmyLeviesAtWar |  | bool |  |
| Country | AutoRaiseMaintenanceAtWar | 1. unknown | bool |  |
| Country | AutoRaiseNavyLeviesAtWar |  | bool |  |
| Country | CanColonize |  | bool |  |
| Country | CanEmbraceInstitution | 1. unknown | bool |  |
| Country | CanExtendRegency |  | bool |  |
| Country | CanTakeLand |  | bool |  |
| Country | CountryIsHeir | 1. unknown | bool |  |
| Country | CountryIsInLineOfSuccessionNotHeir | 1. unknown | bool |  |
| Country | Custom | 1. unknown | CString |  |
| Country | Exists |  | bool |  |
| Country | GenerateSceneDesc | 1. unknown | unknown |  |
| Country | GetAcceptedCulturesInfo |  | CString |  |
| Country | GetActiveDisasters |  | unknown |  |
| Country | GetActiveEmploymentSystemInfo |  | CString |  |
| Country | GetActiveGods |  | unknown |  |
| Country | GetActiveRebels |  | unknown |  |
| Country | GetAdjective |  | CString |  |
| Country | GetAdjectiveWithFlag |  | CString |  |
| Country | GetAdjectiveWithFlagWithNoTooltip |  | CString |  |
| Country | GetAdjectiveWithNoTooltip |  | CString |  |
| Country | GetAgePreferenceInfo |  | CString |  |
| Country | GetAiUtility | 1. unknown 2. unknown | CString |  |
| Country | GetAltAdjective | 1. unknown | CString |  |
| Country | GetAltAdjectiveWithFlag | 1. unknown | CString |  |
| Country | GetAltAdjectiveWithFlagWithNoTooltip | 1. unknown | CString |  |
| Country | GetAltAdjectiveWithNoTooltip | 1. unknown | CString |  |
| Country | GetAltLongName | 1. unknown | CString |  |
| Country | GetAltLongNameWithFlag | 1. unknown | CString |  |
| Country | GetAltLongNameWithFlagWithNoTooltip | 1. unknown | CString |  |
| Country | GetAltName | 1. unknown | CString |  |
| Country | GetAltNameWithFlag | 1. unknown | CString |  |
| Country | GetAltNameWithFlagWithNoTooltip | 1. unknown | CString |  |
| Country | GetAltNameWithNoTooltip | 1. unknown | CString |  |
| Country | GetArmyBreakdown |  | CString |  |
| Country | GetArmyLevyPower |  | CString |  |
| Country | GetArmyLevyPowerInfo |  | CString |  |
| Country | GetArmyLevyPowerTooltip |  | CString |  |
| Country | GetArmyLevyPowerValue |  | CFixedPoint |  |
| Country | GetArmySize |  | CString |  |
| Country | GetArtTooltip |  | CString |  |
| Country | GetAverageArmyExperience |  | CFixedPoint |  |
| Country | GetAverageArmyExperienceInfo |  | CString |  |
| Country | GetAverageLiteracy |  | CFixedPoint |  |
| Country | GetAverageNavyExperience |  | CFixedPoint |  |
| Country | GetAverageNavyExperienceInfo |  | CString |  |
| Country | GetBankruptcyEndDate |  | CString |  |
| Country | GetBankruptcyProgress |  | float |  |
| Country | GetBestArmyUnits |  | CString |  |
| Country | GetBestNavyUnits |  | CString |  |
| Country | GetBlockadedPercent |  | CFixedPoint |  |
| Country | GetBlockadedPortsInfo |  | CString |  |
| Country | GetCapital |  | unknown |  |
| Country | GetCapitalOrParliament |  | unknown |  |
| Country | GetCardinals |  | unknown |  |
| Country | GetCharacterArtistsAmount |  | int32 |  |
| Country | GetColonialCharters |  | unknown |  |
| Country | GetCommonDialect |  | unknown |  |
| Country | GetCommonLanguage |  | unknown |  |
| Country | GetCountry |  | unknown |  |
| Country | GetCountryDescriptionCategoryDesc |  | CString |  |
| Country | GetCountryDescriptionCategoryName |  | CString |  |
| Country | GetCountryReleaseInfo |  | CString |  |
| Country | GetCountryTypeDesc |  | CString |  |
| Country | GetCountryTypeName |  | CString |  |
| Country | GetCountryTypeNameWithNoTooltip |  | CString |  |
| Country | GetCountryTypeString |  | CString |  |
| Country | GetCourtDialect |  | unknown |  |
| Country | GetCourtLanguage |  | unknown |  |
| Country | GetCrownpower |  | CFixedPoint |  |
| Country | GetCulturalCapacity |  | CFixedPoint |  |
| Country | GetCulturalUnity |  | CFixedPoint |  |
| Country | GetCulture |  | unknown |  |
| Country | GetCulturePercentage | 1. unknown | CFixedPoint |  |
| Country | GetCulturePercentageInfo | 1. unknown | CString |  |
| Country | GetCultureStatus | 1. unknown | CString |  |
| Country | GetCurrencyBalance | 1. unknown | CFixedPoint |  |
| Country | GetCurrencyMaxValue | 1. unknown | CFixedPoint |  |
| Country | GetCurrencyMinValue | 1. unknown | CFixedPoint |  |
| Country | GetCurrencyPosition | 1. unknown | float |  |
| Country | GetCurrencyTooltipDescription | 1. unknown | CString |  |
| Country | GetCurrencyTooltipHint | 1. unknown | CString |  |
| Country | GetCurrencyTooltipTitle | 1. unknown | CString |  |
| Country | GetCurrencyTooltipValueDescription | 1. unknown | CString |  |
| Country | GetCurrencyValue | 1. unknown | CString |  |
| Country | GetCurrentCivilWar |  | unknown |  |
| Country | GetCurrentFortsAmount |  | CFixedPoint |  |
| Country | GetCurrentFortsAmountInfo |  | CString |  |
| Country | GetCurrentRegencyInfo |  | CString |  |
| Country | GetCurrentRegencyName |  | CString |  |
| Country | GetCurrentReligiousFocus |  | unknown |  |
| Country | GetCurrentResearch |  | unknown |  |
| Country | GetDebugTag |  | unknown |  |
| Country | GetDebugText |  | CString |  |
| Country | GetDefaultLandMorale |  | CFixedPoint |  |
| Country | GetDefaultLandMoraleTooltip |  | CString |  |
| Country | GetDefaultNavalMorale |  | CFixedPoint |  |
| Country | GetDefaultNavalMoraleTooltip |  | CString |  |
| Country | GetDescriptionFor | 1. unknown | CString |  |
| Country | GetDifficultyLevelDesc |  | CString |  |
| Country | GetDifficultyLevelName |  | CString |  |
| Country | GetDiplomacy |  | unknown |  |
| Country | GetDiplomaticCurrency | 1. unknown | CString |  |
| Country | GetDiplomaticCurrencyDesc | 1. unknown | CString |  |
| Country | GetDominantLanguage |  | Language |  |
| Country | GetDoubleDescriptionFor | 1. unknown 2. unknown | CString |  |
| Country | GetDoubleModifierValue | 1. unknown 2. unknown | CString |  |
| Country | GetDoubleModifierValueCapped | 1. unknown 2. unknown | CString |  |
| Country | GetDoubleModifierValueNoFormat | 1. unknown 2. unknown | CString |  |
| Country | GetDoubleModifierValueNoFormatNoSign | 1. unknown 2. unknown | CString |  |
| Country | GetDoubleModifierValueNoFormatTruncated | 1. unknown 2. unknown | CString |  |
| Country | GetDynamicQuickDiplomaticActions |  | unknown |  |
| Country | GetDynasties |  | unknown |  |
| Country | GetEconomicalBase |  | CFixedPoint |  |
| Country | GetEconomicalBaseWithLabel |  | CString |  |
| Country | GetEconomy |  | unknown |  |
| Country | GetEffectiveDistanceFromCapital | 1. unknown | CFixedPoint |  |
| Country | GetEligibleForRoyalMarriage | 1. unknown | unknown |  |
| Country | GetEmploymentSystem |  | unknown |  |
| Country | GetEndDataDate |  | int32 |  |
| Country | GetEstateLoanSize |  | CFixedPoint |  |
| Country | GetEstimatedMonthlyIncome |  | CFixedPoint |  |
| Country | GetEstimatedMonthlyIncomeAccountedForTradeBalance |  | CFixedPoint |  |
| Country | GetEstimatedMonthlyIncomeTradeAndTax |  | CFixedPoint |  |
| Country | GetExpectedArmySize |  | CFixedPoint |  |
| Country | GetExpectedNavySize |  | CFixedPoint |  |
| Country | GetExplorations |  | unknown |  |
| Country | GetExtendRegencyInfo |  | CString |  |
| Country | GetFixedPointCurrencyValue | 1. unknown | CFixedPoint |  |
| Country | GetFlag |  | CString |  |
| Country | GetFlagIcon |  | CString |  |
| Country | GetFlagIconWithNoTooltip |  | CString |  |
| Country | GetFlavorPrefix |  | CString |  |
| Country | GetFlavorRank |  | CString |  |
| Country | GetFortLimit |  | CFixedPoint |  |
| Country | GetFortsLimitInfo |  | CString |  |
| Country | GetGovernment |  | unknown |  |
| Country | GetGovernmentPowerConcept |  | CString |  |
| Country | GetGreatPowerBonusInfo |  | CString |  |
| Country | GetGreatPowerRank |  | int32 |  |
| Country | GetGreatPowerScore |  | CFixedPoint |  |
| Country | GetGreatPowerScoreInfo |  | CString |  |
| Country | GetHegemons |  | unknown |  |
| Country | GetHighestProgressRebel |  | unknown |  |
| Country | GetHistoricalMaxPopulation |  | CString |  |
| Country | GetHistoricalMaxTaxBase |  | CFixedPoint |  |
| Country | GetHistoricalMinPopulation |  | CString |  |
| Country | GetHistoricalMinTaxBase |  | CFixedPoint |  |
| Country | GetHistoricalPopulation |  | unknown |  |
| Country | GetHistoricalTaxBase |  | unknown |  |
| Country | GetHistoryDesc |  | CString |  |
| Country | GetHolySites |  | unknown |  |
| Country | GetId |  | int32 |  |
| Country | GetImplementedAvatars |  | unknown |  |
| Country | GetIncomeTooltip |  | CString |  |
| Country | GetIncomeValue |  | CFixedPoint |  |
| Country | GetInstitutionActiveCount |  | CFixedPoint |  |
| Country | GetInstitutionEmbracedCount |  | CFixedPoint |  |
| Country | GetInstitutionInfo |  | CString |  |
| Country | GetInstitutionMissingMinimumPercent | 1. unknown | float |  |
| Country | GetInstitutionSpreadValue | 1. unknown | float |  |
| Country | GetInternationalOrganizations |  | unknown |  |
| Country | GetInvitedReligiousFigures |  | unknown |  |
| Country | GetIsHumanCountryTooltip |  | CString |  |
| Country | GetLastMonthsPopulationChange |  | CFixedPoint |  |
| Country | GetLastMonthsPopulationText |  | CString |  |
| Country | GetLiturgicalDialect |  | unknown |  |
| Country | GetLiturgicalLanguage |  | unknown |  |
| Country | GetLiturgicalLanguageInfo |  | CString |  |
| Country | GetLiturgicalLanguagePower |  | CString |  |
| Country | GetLivingCharacters |  | unknown |  |
| Country | GetLongName |  | CString |  |
| Country | GetLongNameWithFlag |  | CString |  |
| Country | GetLongNameWithFlagWithNoTooltip |  | CString |  |
| Country | GetLongNameWithNoTooltip |  | CString |  |
| Country | GetLosingGreatPowerScoreInfo |  | CString |  |
| Country | GetMapColor |  | CVector4f |  |
| Country | GetMapName |  | CString |  |
| Country | GetMaxCurrencyNeedGui | 1. unknown | CString |  |
| Country | GetMaxManpowerTT |  | CString |  |
| Country | GetMaxManpowerValue |  | CString |  |
| Country | GetMaxSailorValue |  | CString |  |
| Country | GetMaxSailorsTT |  | CString |  |
| Country | GetMilitaryStance |  | unknown |  |
| Country | GetMilitaryStrength |  | CFixedPoint |  |
| Country | GetMilitaryStrengthForRelativePower |  | CFixedPoint |  |
| Country | GetMissionProgress |  | unknown |  |
| Country | GetModifier | 1. unknown | CFixedPoint |  |
| Country | GetModifierCappedValue | 1. unknown | CString |  |
| Country | GetModifierCappedValueWithNoTooltip | 1. unknown | CString |  |
| Country | GetModifierRawValue | 1. unknown | CFixedPoint |  |
| Country | GetModifierValue | 1. unknown | CString |  |
| Country | GetModifierValueInverse | 1. unknown | CString |  |
| Country | GetModifierValueNoFormat | 1. unknown | CString |  |
| Country | GetModifierValueNoSign | 1. unknown | CString |  |
| Country | GetModifierValueWithNoTooltipNoSign | 1. unknown | CString |  |
| Country | GetMonthlyCurrencyChangeBreakdown | 1. unknown | CString |  |
| Country | GetName |  | CString |  |
| Country | GetNameAbbreviation |  | CString |  |
| Country | GetNameAbbreviationWithNoTooltip |  | CString |  |
| Country | GetNameWithFlag |  | CString |  |
| Country | GetNameWithFlagWithNoTooltip |  | CString |  |
| Country | GetNameWithNoTooltip |  | CString |  |
| Country | GetNavalDistance | 1. unknown | CFixedPoint |  |
| Country | GetNavalDistanceToTooltip | 1. unknown | CString |  |
| Country | GetNavalRange |  | CFixedPoint |  |
| Country | GetNavyBreakdown |  | CString |  |
| Country | GetNavyLevyPower |  | CString |  |
| Country | GetNavyLevyPowerInfo |  | CString |  |
| Country | GetNavyLevyPowerTooltip |  | CString |  |
| Country | GetNavyLevyPowerValue |  | CFixedPoint |  |
| Country | GetNavySize |  | CString |  |
| Country | GetNavySizeTooltip |  | CString |  |
| Country | GetNavySizeValue |  | CString |  |
| Country | GetNavyStrength |  | CFixedPoint |  |
| Country | GetNumHolySites |  | int32 |  |
| Country | GetNumWorksOfArt |  | int32 |  |
| Country | GetNumberOfAvatars |  | int32 |  |
| Country | GetNumberOfCharacters |  | int32 |  |
| Country | GetNumberOfGods |  | int32 |  |
| Country | GetOwnedLocationCount |  | int32 |  |
| Country | GetOwnedLocationsInfo |  | CString |  |
| Country | GetOwnedSubUnits |  | unknown |  |
| Country | GetPercentSpeakersOfLiturgicalLanguage |  | CFixedPoint |  |
| Country | GetPlayerDiplomacyInfo |  | CString |  |
| Country | GetPlayerQuickDiplomaticActions |  | unknown |  |
| Country | GetPopulationChart |  | unknown |  |
| Country | GetPossibleBuildingSubjectRegionsAmount |  | int32 |  |
| Country | GetPossibleReleasableCountriessAmount |  | int32 |  |
| Country | GetPossibleTotalSubjectsAmount |  | int32 |  |
| Country | GetPotentialArmyLevyPowerTooltip |  | CString |  |
| Country | GetPotentialArmyLevyPowerValue |  | CFixedPoint |  |
| Country | GetPotentialDisasters |  | unknown |  |
| Country | GetPotentialNavyLevyPowerTooltip |  | CString |  |
| Country | GetPotentialNavyLevyPowerValue |  | CFixedPoint |  |
| Country | GetPowerProjection |  | CFixedPoint |  |
| Country | GetPowerProjectionInfo |  | CString |  |
| Country | GetPrimaryCulturePercentage |  | CFixedPoint |  |
| Country | GetPrimaryCulturePercentageInfo |  | CString |  |
| Country | GetPrimaryReligionPercentage |  | CFixedPoint |  |
| Country | GetPrimaryReligionPercentageInfo |  | CString |  |
| Country | GetPrivateers |  | unknown |  |
| Country | GetProvinces |  | unknown |  |
| Country | GetQuickDiplomaticActions |  | unknown |  |
| Country | GetRank |  | unknown |  |
| Country | GetRawArmyLevyPower |  | CFixedPoint |  |
| Country | GetRawNavyLevyPower |  | CFixedPoint |  |
| Country | GetRegularArmySize |  | CString |  |
| Country | GetRegularArmySizeTooltip |  | CString |  |
| Country | GetRelativeEstatePower | 1. unknown | CFixedPoint |  |
| Country | GetRelativeMilitaryStrength | 1. unknown | CFixedPoint |  |
| Country | GetReligion |  | unknown |  |
| Country | GetReligionPercentage | 1. unknown | CFixedPoint |  |
| Country | GetReligionPercentageInfo | 1. unknown | CString |  |
| Country | GetReligiousAspects |  | unknown |  |
| Country | GetReligiousSchool |  | unknown |  |
| Country | GetReligiousUnity |  | CFixedPoint |  |
| Country | GetSaints |  | unknown |  |
| Country | GetScore |  | unknown |  |
| Country | GetShortCurrencyValue | 1. unknown | CString |  |
| Country | GetSocietalValueDirectionTooltip | 1. unknown | CString |  |
| Country | GetSocietalValuePositionTooltip | 1. unknown | CString |  |
| Country | GetStartDataDate |  | int32 |  |
| Country | GetStarvingProvinces |  | CString |  |
| Country | GetStarvingProvincesAmount |  | int32 |  |
| Country | GetSubjectTypeLabel |  | CString |  |
| Country | GetTag |  | CString |  |
| Country | GetTagAndName |  | CString |  |
| Country | GetTakeLoanInfo |  | CString |  |
| Country | GetTaxBaseInfo |  | CString |  |
| Country | GetTaxBaseWithTooltip |  | CString |  |
| Country | GetTimedModifierOwner |  | unknown |  |
| Country | GetTimedModifiers |  | unknown |  |
| Country | GetTooltip |  | CString |  |
| Country | GetTooltipLeftRight |  | CString |  |
| Country | GetTooltipRows |  | CString |  |
| Country | GetTotalCoastalPopulation |  | CFixedPoint |  |
| Country | GetTotalColonialCharters |  | CFixedPoint |  |
| Country | GetTotalCultureCapacityUsed |  | CFixedPoint |  |
| Country | GetTotalPopulation |  | CString |  |
| Country | GetTotalPopulationNoLink |  | CString |  |
| Country | GetTotalPrimaryCulturePoliticalPower |  | CFixedPoint |  |
| Country | GetTotalProperCultureNobles |  | CFixedPoint |  |
| Country | GetTotalShips |  | int32 |  |
| Country | GetTotalStateReligionClergy |  | CFixedPoint |  |
| Country | GetTotalStrength |  | CString |  |
| Country | GetTotalTaxBase |  | CString |  |
| Country | GetTotalWarScore |  | CFixedPoint |  |
| Country | GetTownsAndCities |  | CString |  |
| Country | GetTradeByGoodForCountryInfo | 1. unknown | CString |  |
| Country | GetTradeRangeTooltip | 1. unknown | CString |  |
| Country | GetTruceToolTip | 1. unknown | CString |  |
| Country | GetUnits |  | unknown |  |
| Country | GetWarLosses |  | unknown |  |
| Country | GetWinterAffectedLocations |  | CString |  |
| Country | GetWinterAffectedLocationsAmount |  | int32 |  |
| Country | HasActiveRebels |  | bool |  |
| Country | HasAnyActiveEmploymentSystem |  | bool |  |
| Country | HasAnyAgePreferenceInfo |  | bool |  |
| Country | HasArmy |  | bool |  |
| Country | HasCardinals |  | bool |  |
| Country | HasColonialCharters |  | bool |  |
| Country | HasCountryDescriptionCategory |  | bool |  |
| Country | HasDifficultyLevel |  | bool |  |
| Country | HasEmbracedInstitution | 1. unknown | bool |  |
| Country | HasEnoughHistoricalPopulation |  | bool |  |
| Country | HasHarmony |  | bool |  |
| Country | HasHint | 1. unknown | bool |  |
| Country | HasHumanController |  | bool |  |
| Country | HasInvitedReligiousFigures |  | bool |  |
| Country | HasModifier | 1. unknown | bool |  |
| Country | HasModifierValue | 1. unknown | bool |  |
| Country | HasNavy |  | bool |  |
| Country | HasParticipatedInIOParliament | 1. unknown | bool |  |
| Country | HasPossibleResearch |  | bool |  |
| Country | HasRighteousness |  | bool |  |
| Country | HasSelfControl |  | bool |  |
| Country | HasSpecialStatus | 1. unknown 2. unknown | bool |  |
| Country | HasTooManyCultures |  | bool |  |
| Country | HasUnits |  | bool |  |
| Country | HasVariable | 1. unknown | bool |  |
| Country | IsAllied |  | bool |  |
| Country | IsAutoExtendMercenaries |  | bool |  |
| Country | IsBeingAnnexed |  | bool |  |
| Country | IsCourtDialectSelected | 1. unknown | bool |  |
| Country | IsCurrencyEnabled | 1. unknown | bool |  |
| Country | IsCurrencyValueEqualOrLessThanZero | 1. unknown | bool |  |
| Country | IsDominantCountryOfPrimaryCulture |  | bool |  |
| Country | IsEnemy | 1. unknown | bool |  |
| Country | IsGreatPower |  | bool |  |
| Country | IsHegemon |  | bool |  |
| Country | IsInCivilWar |  | bool |  |
| Country | IsLocalPlayer |  | bool |  |
| Country | IsLosingGreatPowerStatus |  | bool |  |
| Country | IsMemberOfInternationalOrganization | 1. unknown | bool |  |
| Country | IsMovingCapital |  | bool |  |
| Country | IsNeutral |  | bool |  |
| Country | IsPlayer |  | bool |  |
| Country | IsReal |  | bool |  |
| Country | IsRevolutionary |  | bool |  |
| Country | IsRevolutionaryTarget |  | bool |  |
| Country | IsValid |  | bool |  |
| Country | KnownToPlayerForUI |  | bool |  |
| Country | KnowsAboutInstitution | 1. unknown | bool |  |
| Country | MakeScope |  | Scope | Jomini Script System |
| Country | Self |  | Country |  |
| CountryCountryModifierWrap | AccessSelf |  | CountryCountryModifierWrap |  |
| CountryCountryModifierWrap | GetIcon |  | unknown |  |
| CountryCountryModifierWrap | GetMinCapDescription |  | CString |  |
| CountryCountryModifierWrap | GetName |  | CString |  |
| CountryCountryModifierWrap | GetTooltip |  | CString |  |
| CountryCountryModifierWrap | GetValue |  | CFixedPoint |  |
| CountryCountryModifierWrap | GetValueForUI |  | CString |  |
| CountryCountryModifierWrap | HasMinCap |  | bool |  |
| CountryCountryModifierWrap | Self |  | CountryCountryModifierWrap |  |
| CountryCultureLateralView | AccessSelf |  | CountryCultureLateralView |  |
| CountryCultureLateralView | GenerateSceneDesc |  | unknown |  |
| CountryCultureLateralView | GetCultureSortSearch |  | unknown |  |
| CountryCultureLateralView | GetImportantCultures |  | unknown |  |
| CountryCultureLateralView | GetNumNonAcceptedCultures |  | int32 |  |
| CountryCultureLateralView | GetPlayer |  | unknown |  |
| CountryCultureLateralView | GetPopsPiechartWidget |  | unknown |  |
| CountryCultureLateralView | GetWorkOfArtItems |  | unknown |  |
| CountryCultureLateralView | GetWorkOfArtSortSearch |  | unknown |  |
| CountryCultureLateralView | IsLeftPanel |  | bool |  |
| CountryCultureLateralView | IsRightPanel |  | bool |  |
| CountryCultureLateralView | Self |  | CountryCultureLateralView |  |
| CountryCultureLateralViewWorkOfArtItem | AccessSelf |  | CountryCultureLateralViewWorkOfArtItem |  |
| CountryCultureLateralViewWorkOfArtItem | Self |  | CountryCultureLateralViewWorkOfArtItem |  |
| CountryDiplomaticItem | AccessSelf |  | CountryDiplomaticItem |  |
| CountryDiplomaticItem | GetCountry |  | unknown |  |
| CountryDiplomaticItem | GetCurrency | 1. unknown | CString |  |
| CountryDiplomaticItem | GetCurrencyDesc | 1. unknown | CString |  |
| CountryDiplomaticItem | GetName |  | CString |  |
| CountryDiplomaticItem | GetTooltip |  | CString |  |
| CountryDiplomaticItem | GetValue |  | CFixedPoint |  |
| CountryDiplomaticItem | Self |  | CountryDiplomaticItem |  |
| CountryEntry | AccessSelf |  | CountryEntry |  |
| CountryEntry | GetCountry |  | CUTF8String |  |
| CountryEntry | Self |  | CountryEntry |  |
| CountryInteraction | AccessSelf |  | CountryInteraction |  |
| CountryInteraction | GetName |  | CString |  |
| CountryInteraction | GetNameWithNoTooltip |  | CString |  |
| CountryInteraction | GetTooltip | 1. unknown 2. unknown | CString |  |
| CountryInteraction | MakeScope |  | Scope | Jomini Script System |
| CountryInteraction | Self |  | CountryInteraction |  |
| CountryListFromLocation | AccessSelf |  | CountryListFromLocation |  |
| CountryListFromLocation | GetList |  | unknown |  |
| CountryListFromLocation | Self |  | CountryListFromLocation |  |
| CountryListOverview | AccessSelf |  | CountryListOverview |  |
| CountryListOverview | GetCountries |  | unknown |  |
| CountryListOverview | Self |  | CountryListOverview |  |
| CountryMessage | AccessSelf |  | CountryMessage |  |
| CountryMessage | GetFirstCountry |  | unknown |  |
| CountryMessage | GetSecondCountry |  | unknown |  |
| CountryMessage | IsEstatesLoan |  | bool |  |
| CountryMessage | Self |  | CountryMessage |  |
| CountryModifierWrap | AccessSelf |  | CountryModifierWrap |  |
| CountryModifierWrap | GetIcon |  | unknown |  |
| CountryModifierWrap | GetName |  | CString |  |
| CountryModifierWrap | GetRows |  | unknown |  |
| CountryModifierWrap | GetTooltip |  | CString |  |
| CountryModifierWrap | GetValue |  | CFixedPoint |  |
| CountryModifierWrap | GetValueForUI |  | CString |  |
| CountryModifierWrap | Self |  | CountryModifierWrap |  |
| CountryNeeds | AccessMarketNeeds |  | unknown |  |
| CountryNeeds | AccessSelf |  | CountryNeeds |  |
| CountryNeeds | GetMarketBuildingsMissingGoodsCount |  | int32 |  |
| CountryNeeds | GetMarketGovernmentMissingGoodsCount |  | int32 |  |
| CountryNeeds | GetMarketNeeds |  | unknown |  |
| CountryNeeds | GetMarketPopsMissingGoodsCount |  | int32 |  |
| CountryNeeds | GetMarketRebelPopsMissingGoodsCount |  | int32 |  |
| CountryNeeds | Self |  | CountryNeeds |  |
| CountryPeopleLateralView | AccessSelf |  | CountryPeopleLateralView |  |
| CountryPeopleLateralView | GenerateSceneDesc |  | unknown |  |
| CountryPeopleLateralView | GetArtists |  | int32 |  |
| CountryPeopleLateralView | GetAverageLiteracyTT |  | CString |  |
| CountryPeopleLateralView | GetCharacters |  | unknown |  |
| CountryPeopleLateralView | GetCharactersSortSearch |  | unknown |  |
| CountryPeopleLateralView | GetDynasties |  | unknown |  |
| CountryPeopleLateralView | GetDynastiesSortSearch |  | unknown |  |
| CountryPeopleLateralView | GetPlayer |  | unknown |  |
| CountryPeopleLateralView | GetPops |  | unknown |  |
| CountryPeopleLateralView | GetPopsPiechartWidget |  | unknown |  |
| CountryPeopleLateralView | GetPopsSortSearch |  | unknown |  |
| CountryPeopleLateralView | GetRebels |  | unknown |  |
| CountryPeopleLateralView | GetRebelsSortSearch |  | unknown |  |
| CountryPeopleLateralView | IsLeftPanel |  | bool |  |
| CountryPeopleLateralView | IsRightPanel |  | bool |  |
| CountryPeopleLateralView | Self |  | CountryPeopleLateralView |  |
| CountryPopulationChart | AccessSelf |  | CountryPopulationChart |  |
| CountryPopulationChart | GetCountry |  | unknown |  |
| CountryPopulationChart | GetCultures |  | unknown |  |
| CountryPopulationChart | GetPopTypes |  | unknown |  |
| CountryPopulationChart | GetPopsPiechartWidget |  | unknown |  |
| CountryPopulationChart | GetReligions |  | unknown |  |
| CountryPopulationChart | Self |  | CountryPopulationChart |  |
| CountryRank | AccessSelf |  | CountryRank |  |
| CountryRank | GetConditions |  | CString |  |
| CountryRank | GetDescription |  | CString |  |
| CountryRank | GetEffects |  | CString |  |
| CountryRank | GetEffectsTitle |  | CString |  |
| CountryRank | GetIcon |  | CString |  |
| CountryRank | GetLevel |  | CString |  |
| CountryRank | GetLevelNumber |  | int32 |  |
| CountryRank | GetName |  | CString |  |
| CountryRank | GetNameWithNoTooltip |  | CString |  |
| CountryRank | GetRankTooltip |  | CString |  |
| CountryRank | GetTooltip |  | CString |  |
| CountryRank | MakeScope |  | Scope | Jomini Script System |
| CountryRank | Self |  | CountryRank |  |
| CountryRankCandidate | AccessSelf |  | CountryRankCandidate |  |
| CountryRankCandidate | CanChangeRank |  | bool |  |
| CountryRankCandidate | ChangeRank |  | void |  |
| CountryRankCandidate | GetCanChangeRankCost |  | CString |  |
| CountryRankCandidate | GetCanChangeRankDesc |  | CString |  |
| CountryRankCandidate | GetChangeRankName |  | CString |  |
| CountryRankCandidate | GetCountryRank |  | unknown |  |
| CountryRankCandidate | GetTooltip |  | CString |  |
| CountryRankCandidate | IsCurrentRank |  | bool |  |
| CountryRankCandidate | IsLowerLevel |  | bool |  |
| CountryRankCandidate | Self |  | CountryRankCandidate |  |
| CountryReligionLateralView | AccessSelf |  | CountryReligionLateralView |  |
| CountryReligionLateralView | GenerateSceneDesc |  | unknown |  |
| CountryReligionLateralView | GetActiveAvatars |  | unknown |  |
| CountryReligionLateralView | GetActiveGods |  | unknown |  |
| CountryReligionLateralView | GetCanonizeAction |  | unknown |  |
| CountryReligionLateralView | GetCurrentReligiousFocus |  | unknown |  |
| CountryReligionLateralView | GetHolySites |  | unknown |  |
| CountryReligionLateralView | GetHolySitesSortSearch |  | unknown |  |
| CountryReligionLateralView | GetImportantReligions |  | unknown |  |
| CountryReligionLateralView | GetPlayer |  | unknown |  |
| CountryReligionLateralView | GetReligion |  | unknown |  |
| CountryReligionLateralView | GetReligionPercentages |  | unknown |  |
| CountryReligionLateralView | GetReligionSortSearch |  | unknown |  |
| CountryReligionLateralView | GetReligiousActions |  | unknown |  |
| CountryReligionLateralView | GetReligiousAspects |  | unknown |  |
| CountryReligionLateralView | GetReligiousAspectsCount |  | int32 |  |
| CountryReligionLateralView | GetReligiousFigures |  | unknown |  |
| CountryReligionLateralView | GetReligiousFocuses |  | unknown |  |
| CountryReligionLateralView | GetReligiousOrganizations |  | unknown |  |
| CountryReligionLateralView | GetReligiousUnityInfo |  | CString |  |
| CountryReligionLateralView | HasCanonizeAction |  | bool |  |
| CountryReligionLateralView | HasCurrentReligiousFocus |  | bool |  |
| CountryReligionLateralView | HasInternationalOrganization |  | bool |  |
| CountryReligionLateralView | HasReligiousActions |  | bool |  |
| CountryReligionLateralView | HasSpecificCurrentReligiousFocus | 1. unknown | bool |  |
| CountryReligionLateralView | IsLeftPanel |  | bool |  |
| CountryReligionLateralView | IsRightPanel |  | bool |  |
| CountryReligionLateralView | Self |  | CountryReligionLateralView |  |
| CountryRulerData | AccessSelf |  | CountryRulerData |  |
| CountryRulerData | Self |  | CountryRulerData |  |
| CreateAccount | AccessSelf |  | CreateAccount |  |
| CreateAccount | CanCreateAccount |  | bool |  |
| CreateAccount | CreateAccount |  | void |  |
| CreateAccount | GetCountries |  | unknown |  |
| CreateAccount | GetDays |  | unknown |  |
| CreateAccount | GetEmail |  | CUTF8String |  |
| CreateAccount | GetErrorMessage |  | CUTF8String |  |
| CreateAccount | GetMonths |  | unknown |  |
| CreateAccount | GetOptedIntoMarketingChecked |  | bool |  |
| CreateAccount | GetPassword |  | CUTF8String |  |
| CreateAccount | GetSelectedCountryIndex |  | CVector2i |  |
| CreateAccount | GetSelectedDayIndex |  | CVector2i |  |
| CreateAccount | GetSelectedMonthIndex |  | CVector2i |  |
| CreateAccount | GetSelectedYearIndex |  | CVector2i |  |
| CreateAccount | GetYears |  | unknown |  |
| CreateAccount | Hide |  | void |  |
| CreateAccount | IsCreatingAccount |  | bool |  |
| CreateAccount | OnCountryChanged |  | void |  |
| CreateAccount | OnDayChanged |  | void |  |
| CreateAccount | OnMonthChanged |  | void |  |
| CreateAccount | OnOptedIntoMarketingToggled |  | void |  |
| CreateAccount | OnYearChanged |  | void |  |
| CreateAccount | Self |  | CreateAccount |  |
| CreateAccount | SetEmail |  | void |  |
| CreateAccount | SetPassword |  | void |  |
| CreateAccount | Show |  | void |  |
| CreateCasusBelliMarker | AccessSelf |  | CreateCasusBelliMarker |  |
| CreateCasusBelliMarker | GetCountry |  | unknown |  |
| CreateCasusBelliMarker | GetLocation |  | unknown |  |
| CreateCasusBelliMarker | GetProgress |  | float |  |
| CreateCasusBelliMarker | GetRightClickConditions |  | CString |  |
| CreateCasusBelliMarker | GetTooltip |  | CString |  |
| CreateCasusBelliMarker | IsRightClickEnabled |  | bool |  |
| CreateCasusBelliMarker | OnClick |  | void |  |
| CreateCasusBelliMarker | OnRightClick |  | void |  |
| CreateCasusBelliMarker | Self |  | CreateCasusBelliMarker |  |
| CreateSocialProfileWindow | AccessSelf |  | CreateSocialProfileWindow |  |
| CreateSocialProfileWindow | Create |  | void |  |
| CreateSocialProfileWindow | GetErrorMessage |  | CString |  |
| CreateSocialProfileWindow | GetName |  | CString |  |
| CreateSocialProfileWindow | Hide |  | void |  |
| CreateSocialProfileWindow | IsCreatingProfile |  | bool |  |
| CreateSocialProfileWindow | IsValidName |  | bool |  |
| CreateSocialProfileWindow | Self |  | CreateSocialProfileWindow |  |
| CreateSocialProfileWindow | SetName |  | void |  |
| CreateSocialProfileWindow | ShouldBeShown |  | bool |  |
| CreateSocialProfileWindow | Show |  | void |  |
| CreateSubjectsLateralView | AccessSelf |  | CreateSubjectsLateralView |  |
| CreateSubjectsLateralView | GetPlayer |  | unknown |  |
| CreateSubjectsLateralView | GetTitle |  | CString |  |
| CreateSubjectsLateralView | IsLeftPanel |  | bool |  |
| CreateSubjectsLateralView | IsRightPanel |  | bool |  |
| CreateSubjectsLateralView | Self |  | CreateSubjectsLateralView |  |
| CreditsWindow | AccessSelf |  | CreditsWindow |  |
| CreditsWindow | GetCredits |  | CUTF8String |  |
| CreditsWindow | HasReachedEnd |  | bool |  |
| CreditsWindow | IsFastest |  | bool |  |
| CreditsWindow | IsPaused |  | bool |  |
| CreditsWindow | IsSlowest |  | bool |  |
| CreditsWindow | OnClose |  | void |  |
| CreditsWindow | OnFaster |  | void |  |
| CreditsWindow | OnSlower |  | void |  |
| CreditsWindow | OnTogglePause |  | void |  |
| CreditsWindow | Self |  | CreditsWindow |  |
| Culture | AccessSelf |  | Culture |  |
| Culture | Custom | 1. unknown | CString |  |
| Culture | GetCultureGroups |  | unknown |  |
| Culture | GetCultureGroupsCulturesString |  | CString |  |
| Culture | GetCultureGroupsString |  | CString |  |
| Culture | GetCultureGroupsTooltip |  | CString |  |
| Culture | GetCultureGroupsWithTooltips |  | CString |  |
| Culture | GetDebugEthnicities |  | CString |  |
| Culture | GetDebugGraphicalCultures |  | CString |  |
| Culture | GetDebugText |  | CString |  |
| Culture | GetInfluence |  | CFixedPoint |  |
| Culture | GetInfluenceChange |  | CFixedPoint |  |
| Culture | GetInfluenceTooltip |  | CString |  |
| Culture | GetName |  | CString |  |
| Culture | GetNameWithNoTooltip |  | CString |  |
| Culture | GetOpinion | 1. unknown | unknown |  |
| Culture | GetOpinionInfo | 1. unknown | CString |  |
| Culture | GetOthersOpinions |  | unknown |  |
| Culture | GetOurOpinions |  | unknown |  |
| Culture | GetPopsForCountry | 1. unknown | CString |  |
| Culture | GetTooltip |  | CString |  |
| Culture | GetTotalPopulation |  | CString |  |
| Culture | GetTradition |  | CFixedPoint |  |
| Culture | GetTraditionChange |  | CFixedPoint |  |
| Culture | GetTraditionTooltip |  | CString |  |
| Culture | HasDominantCountry |  | bool |  |
| Culture | MakeScope |  | Scope | Jomini Script System |
| Culture | Self |  | Culture |  |
| CultureDefinition | AccessSelf |  | CultureDefinition |  |
| CultureDefinition | GetName |  | CString |  |
| CultureDefinition | Self |  | CultureDefinition |  |
| CultureGroup | AccessSelf |  | CultureGroup |  |
| CultureGroup | GetDesc |  | CString |  |
| CultureGroup | GetEffects |  | CString |  |
| CultureGroup | GetIsMerged |  | bool |  |
| CultureGroup | GetMergedCultureTooltip |  | CString |  |
| CultureGroup | GetName |  | CString |  |
| CultureGroup | GetNameWithNoTooltip |  | CString |  |
| CultureGroup | GetTooltip |  | CString |  |
| CultureGroup | HasEffects |  | bool |  |
| CultureGroup | MakeScope |  | Scope | Jomini Script System |
| CultureGroup | Self |  | CultureGroup |  |
| CultureItem | AccessSelf |  | CultureItem |  |
| CultureItem | GetCulture |  | unknown |  |
| CultureItem | Self |  | CultureItem |  |
| CulturesLedger | AccessSelf |  | CulturesLedger |  |
| CulturesLedger | GetCultureItemsSortSearch |  | unknown |  |
| CulturesLedger | GetCultures |  | unknown |  |
| CulturesLedger | GetPlayer |  | unknown |  |
| CulturesLedger | IsLeftPanel |  | bool |  |
| CulturesLedger | IsRightPanel |  | bool |  |
| CulturesLedger | Self |  | CulturesLedger |  |
| CurrencyPriceWrap | AccessSelf |  | CurrencyPriceWrap |  |
| CurrencyPriceWrap | GetCost |  | CString |  |
| CurrencyPriceWrap | GetIcon |  | unknown |  |
| CurrencyPriceWrap | GetPrices |  | unknown |  |
| CurrencyPriceWrap | HasPrices |  | bool |  |
| CurrencyPriceWrap | Self |  | CurrencyPriceWrap |  |
| CurrentNeedsItem | AccessSelf |  | CurrentNeedsItem |  |
| CurrentNeedsItem | GetGoods |  | unknown |  |
| CurrentNeedsItem | GetMarket |  | unknown |  |
| CurrentNeedsItem | GetNeeds |  | CFixedPoint |  |
| CurrentNeedsItem | GetNeedsInformation |  | CString |  |
| CurrentNeedsItem | Self |  | CurrentNeedsItem |  |
| CurrentReligiousFocus | AccessSelf |  | CurrentReligiousFocus |  |
| CurrentReligiousFocus | GetETA |  | CString |  |
| CurrentReligiousFocus | GetETATT |  | CString |  |
| CurrentReligiousFocus | GetProgress |  | CFixedPoint |  |
| CurrentReligiousFocus | GetProgressInfo |  | CString |  |
| CurrentReligiousFocus | GetReligiousFocus |  | unknown |  |
| CurrentReligiousFocus | IsActive |  | bool |  |
| CurrentReligiousFocus | Self |  | CurrentReligiousFocus |  |
| CurrentResearch | AccessSelf |  | CurrentResearch |  |
| CurrentResearch | GetAdvance |  | unknown |  |
| CurrentResearch | GetDebugInfo |  | CString |  |
| CurrentResearch | GetETA |  | CString |  |
| CurrentResearch | GetProgress |  | float |  |
| CurrentResearch | GetProgressInfo |  | CString |  |
| CurrentResearch | GetResearchCost |  | CString |  |
| CurrentResearch | GetStoredProgress |  | CFixedPoint |  |
| CurrentResearch | IsActive |  | bool |  |
| CurrentResearch | Self |  | CurrentResearch |  |
| CurryingFavorsMarker | AccessSelf |  | CurryingFavorsMarker |  |
| CurryingFavorsMarker | GetCountry |  | unknown |  |
| CurryingFavorsMarker | GetLocation |  | unknown |  |
| CurryingFavorsMarker | GetProgress |  | float |  |
| CurryingFavorsMarker | GetRightClickConditions |  | CString |  |
| CurryingFavorsMarker | GetTooltip |  | CString |  |
| CurryingFavorsMarker | IsRightClickEnabled |  | bool |  |
| CurryingFavorsMarker | OnClick |  | void |  |
| CurryingFavorsMarker | OnRightClick |  | void |  |
| CurryingFavorsMarker | Self |  | CurryingFavorsMarker |  |
| CurveEditor | AccessSelf |  | CurveEditor |  |
| CurveEditor | Configure |  | void |  |
| CurveEditor | Delete |  | void |  |
| CurveEditor | Self |  | CurveEditor |  |
| CurvePoint | AccessSelf |  | CurvePoint |  |
| CurvePoint | Position |  | CVector2f |  |
| CurvePoint | Self |  | CurvePoint |  |
| DatabaseModifier | AccessSelf |  | DatabaseModifier |  |
| DatabaseModifier | GetIcon |  | unknown |  |
| DatabaseModifier | GetName |  | CString |  |
| DatabaseModifier | GetToolTip |  | CString |  |
| DatabaseModifier | Self |  | DatabaseModifier |  |
| DatatypesExplorer | AccessSelf |  | DatatypesExplorer |  |
| DatatypesExplorer | DumpDataTypes |  | bool | Performs the "dump\_data\_types" console command. |
| DatatypesExplorer | IsEnableFilterFunctions |  | bool |  |
| DatatypesExplorer | IsEnableFilterMacros |  | bool |  |
| DatatypesExplorer | IsEnableFilterOrphanTypes |  | bool |  |
| DatatypesExplorer | IsEnableFilterPromotes |  | bool |  |
| DatatypesExplorer | IsEnableFilterTypes |  | bool |  |
| DatatypesExplorer | Self |  | DatatypesExplorer |  |
| DatatypesExplorer | SetDataTypeFilter |  | void |  |
| DatatypesExplorer | SetNameFilter |  | void |  |
| DatatypesExplorer | ToggleFilterFunctions |  | void |  |
| DatatypesExplorer | ToggleFilterMacros |  | void |  |
| DatatypesExplorer | ToggleFilterOrphanTypes |  | void |  |
| DatatypesExplorer | ToggleFilterPromotes |  | void |  |
| DatatypesExplorer | ToggleFilterTypes |  | void |  |
| Date | AccessSelf |  | Date |  |
| Date | Self |  | Date |  |
| DebugUnitSpawner | AccessSelf |  | DebugUnitSpawner |  |
| DebugUnitSpawner | ErrorExists |  | bool |  |
| DebugUnitSpawner | GetErrorText |  | CString |  |
| DebugUnitSpawner | PickSelectedLocation |  | void |  |
| DebugUnitSpawner | Self |  | DebugUnitSpawner |  |
| DebugUnitSpawner | Spawn |  | void |  |
| DecalsEditor | AccessSelf |  | DecalsEditor |  |
| DecalsEditor | Bake |  | void |  |
| DecalsEditor | CanBake |  | bool |  |
| DecalsEditor | CanBakeReason |  | CString |  |
| DecalsEditor | CanChangeBakeToUserDir |  | bool |  |
| DecalsEditor | CanChangeBakeToUserDirReason |  | CString |  |
| DecalsEditor | CanSetBakedView | 1. unknown | bool |  |
| DecalsEditor | CanSetBakedViewReason | 1. unknown | CString |  |
| DecalsEditor | CloneSelectedInstances |  | void |  |
| DecalsEditor | DeleteSelectedInstances |  | void |  |
| DecalsEditor | GetBakingChecksumCurrent |  | CString |  |
| DecalsEditor | GetBakingChecksumInOutput |  | CString |  |
| DecalsEditor | GetBakingProgressInPercent |  | float |  |
| DecalsEditor | GetInvalidDecalSetsCount |  | int32 |  |
| DecalsEditor | IsAllSelectedInstancesDisabled |  | bool |  |
| DecalsEditor | IsAllSelectedInstancesHidden |  | bool |  |
| DecalsEditor | IsAllSelectedInstancesLocked |  | bool |  |
| DecalsEditor | IsAnyDecalSetSelected |  | bool |  |
| DecalsEditor | IsAnyInstanceSelected |  | bool |  |
| DecalsEditor | IsBakeOnSave |  | bool |  |
| DecalsEditor | IsBakeToUserDir |  | bool |  |
| DecalsEditor | IsBakedView |  | bool |  |
| DecalsEditor | IsBakingInProgress |  | bool |  |
| DecalsEditor | IsCreateNewInstanceMode |  | bool |  |
| DecalsEditor | IsFreeTransformMode |  | bool |  |
| DecalsEditor | IsGroundLevelMode |  | bool |  |
| DecalsEditor | IsLazyApplyToBackend |  | bool |  |
| DecalsEditor | IsModeSelected |  | bool |  |
| DecalsEditor | IsMoveMode |  | bool |  |
| DecalsEditor | IsRequireBaking |  | bool |  |
| DecalsEditor | IsRotateMode |  | bool |  |
| DecalsEditor | IsScaleMode |  | bool |  |
| DecalsEditor | IsSelectionMode |  | bool |  |
| DecalsEditor | IsSettingsDockableOpen |  | bool |  |
| DecalsEditor | IsSingleDecalSetSelected |  | bool |  |
| DecalsEditor | IsSingleSelectedDecalSetErrorFree |  | bool |  |
| DecalsEditor | IsStrengthMode |  | bool |  |
| DecalsEditor | ProcessSelectedDecalSetsMaterials |  | void |  |
| DecalsEditor | ReloadAllDecalSets |  | void |  |
| DecalsEditor | Self |  | DecalsEditor |  |
| DecalsEditor | SetBakeToUserDir | 1. unknown | void |  |
| DecalsEditor | SetBakedView | 1. unknown | void |  |
| DecalsEditor | SetCreateNewInstanceMode |  | void |  |
| DecalsEditor | SetFreeTransformMode |  | void |  |
| DecalsEditor | SetGroundLevelMode |  | void |  |
| DecalsEditor | SetMoveMode |  | void |  |
| DecalsEditor | SetRotateMode |  | void |  |
| DecalsEditor | SetScaleMode |  | void |  |
| DecalsEditor | SetSelectionMode |  | void |  |
| DecalsEditor | SetStrengthMode |  | void |  |
| DecalsEditor | ToggleBakeOnSave |  | void |  |
| DecalsEditor | ToggleBakeToUserDir |  | void |  |
| DecalsEditor | ToggleLazyApplyToBackend |  | void |  |
| DecalsEditor | ToggleSelectedInstancesDisabledStatus |  | void |  |
| DecalsEditor | ToggleSelectedInstancesHiddenStatus |  | void |  |
| DecalsEditor | ToggleSelectedInstancesLock |  | void |  |
| DecalsEditor | ToggleSettingsDockable |  | void |  |
| DecalsEditorDecalInstance | AccessSelf |  | DecalsEditorDecalInstance |  |
| DecalsEditorDecalInstance | GetDecalSetName |  | CString |  |
| DecalsEditorDecalInstance | GetDepthPriority |  | float |  |
| DecalsEditorDecalInstance | GetName |  | CString |  |
| DecalsEditorDecalInstance | IsDirty |  | bool |  |
| DecalsEditorDecalInstance | IsDisabled |  | bool |  |
| DecalsEditorDecalInstance | IsHidden |  | bool |  |
| DecalsEditorDecalInstance | IsLocked |  | bool |  |
| DecalsEditorDecalInstance | IsSelected |  | bool |  |
| DecalsEditorDecalInstance | Self |  | DecalsEditorDecalInstance |  |
| DecalsEditorDecalInstance | ToggleHiddenStatus |  | void |  |
| DecalsEditorDecalInstance | ToggleLock |  | void |  |
| DecalsEditorDecalInstancesList | AccessFilter |  | unknown |  |
| DecalsEditorDecalInstancesList | AccessInstances |  | unknown |  |
| DecalsEditorDecalInstancesList | AccessSelf |  | DecalsEditorDecalInstancesList |  |
| DecalsEditorDecalInstancesList | GetInstances |  | unknown |  |
| DecalsEditorDecalInstancesList | MoveSelectedInstances | 1. unknown | void |  |
| DecalsEditorDecalInstancesList | Select | 1. unknown | void |  |
| DecalsEditorDecalInstancesList | Self |  | DecalsEditorDecalInstancesList |  |
| DecalsEditorDecalSet | AccessSelf |  | DecalsEditorDecalSet |  |
| DecalsEditorDecalSet | GetName |  | CString |  |
| DecalsEditorDecalSet | GetNumberOfInstances |  | int32 |  |
| DecalsEditorDecalSet | GetThumbnail |  | unknown |  |
| DecalsEditorDecalSet | IsDecalSetContainErrors |  | bool |  |
| DecalsEditorDecalSet | IsSelected |  | bool |  |
| DecalsEditorDecalSet | Self |  | DecalsEditorDecalSet |  |
| DecalsEditorDecalSetProperties | AccessSelf |  | DecalsEditorDecalSetProperties |  |
| DecalsEditorDecalSetProperties | ContainsAnyMasks |  | bool |  |
| DecalsEditorDecalSetProperties | GetHeightmapFile |  | CString |  |
| DecalsEditorDecalSetProperties | GetMaskFiles |  | unknown |  |
| DecalsEditorDecalSetProperties | GetMaterialBitmaskFile |  | CString |  |
| DecalsEditorDecalSetProperties | GetPath |  | CString |  |
| DecalsEditorDecalSetProperties | HasHeightmapFile |  | bool |  |
| DecalsEditorDecalSetProperties | HasMaterialBitmaskFile |  | bool |  |
| DecalsEditorDecalSetProperties | IsActivePreset | 1. unknown | bool |  |
| DecalsEditorDecalSetProperties | Self |  | DecalsEditorDecalSetProperties |  |
| DecalsEditorDecalSetProperties | ToggleActivePreset | 1. unknown | void |  |
| DecalsEditorDecalSetsList | AccessFilter |  | unknown |  |
| DecalsEditorDecalSetsList | AccessListFiltered |  | unknown |  |
| DecalsEditorDecalSetsList | AccessSelf |  | DecalsEditorDecalSetsList |  |
| DecalsEditorDecalSetsList | GetListFiltered |  | unknown |  |
| DecalsEditorDecalSetsList | Select | 1. unknown | void |  |
| DecalsEditorDecalSetsList | Self |  | DecalsEditorDecalSetsList |  |
| DecalsEditorSearchFilter | AccessSelf |  | DecalsEditorSearchFilter |  |
| DecalsEditorSearchFilter | GetText |  | CUTF8String |  |
| DecalsEditorSearchFilter | IsTextEmpty |  | bool |  |
| DecalsEditorSearchFilter | Self |  | DecalsEditorSearchFilter |  |
| DecalsEditorSearchFilter | SetText |  | void |  |
| DecalsEditorSettings | AccessLayers |  | unknown |  |
| DecalsEditorSettings | AccessSelf |  | DecalsEditorSettings |  |
| DecalsEditorSettings | GetLayers |  | unknown |  |
| DecalsEditorSettings | Self |  | DecalsEditorSettings |  |
| DecalsEditorSettingsLayer | AccessSelf |  | DecalsEditorSettingsLayer |  |
| DecalsEditorSettingsLayer | CanChangeResolution |  | bool |  |
| DecalsEditorSettingsLayer | GetCanChangeResolutionReason |  | CString |  |
| DecalsEditorSettingsLayer | GetName |  | CString |  |
| DecalsEditorSettingsLayer | GetResolutionHeight |  | int32 |  |
| DecalsEditorSettingsLayer | GetResolutionWidth |  | int32 |  |
| DecalsEditorSettingsLayer | IsAffectingTransforms |  | bool |  |
| DecalsEditorSettingsLayer | IsDecalsSizeMaintained |  | bool |  |
| DecalsEditorSettingsLayer | IsResolutionAspectLocked |  | bool |  |
| DecalsEditorSettingsLayer | ResetTerrainSettings |  | void |  |
| DecalsEditorSettingsLayer | ResizeTerrain |  | void |  |
| DecalsEditorSettingsLayer | Self |  | DecalsEditorSettingsLayer |  |
| DecalsEditorSettingsLayer | SetResolutionHeight |  | void |  |
| DecalsEditorSettingsLayer | SetResolutionWidth |  | void |  |
| DecalsEditorSettingsLayer | ToggleMaintainDecalsSize |  | void |  |
| DecalsEditorSettingsLayer | ToggleResolutionAspectLock |  | void |  |
| DecalsEditorViewport | AccessSelf |  | DecalsEditorViewport |  |
| DecalsEditorViewport | OnMouseEnter |  | void |  |
| DecalsEditorViewport | OnMouseLeave |  | void |  |
| DecalsEditorViewport | Self |  | DecalsEditorViewport |  |
| DeclareWarAlly | AccessSelf |  | DeclareWarAlly |  |
| DeclareWarAlly | AreWillingToJoin |  | bool |  |
| DeclareWarAlly | GetAreWillingToJoinTooltip |  | CString |  |
| DeclareWarAlly | GetCountry |  | unknown |  |
| DeclareWarAlly | GetLandStrength |  | CString |  |
| DeclareWarAlly | GetNavalStrength |  | CString |  |
| DeclareWarAlly | GetPromiseLandTooltip |  | CString |  |
| DeclareWarAlly | GetSubjectAllies |  | unknown |  |
| DeclareWarAlly | GetTruceProgress |  | float |  |
| DeclareWarAlly | HasSubjectAllies |  | bool |  |
| DeclareWarAlly | HasTruceWithPlayer |  | bool |  |
| DeclareWarAlly | IsCallAllyAutoJoin |  | bool |  |
| DeclareWarAlly | IsCallAllyChecked |  | bool |  |
| DeclareWarAlly | IsCallAllyCheckedOrAutoJoined |  | bool |  |
| DeclareWarAlly | IsCallAllyEnabled |  | bool |  |
| DeclareWarAlly | IsCallAllyVisible |  | bool |  |
| DeclareWarAlly | IsExpanded |  | bool |  |
| DeclareWarAlly | IsOriginalLeader |  | bool |  |
| DeclareWarAlly | IsPromiseLandChecked |  | bool |  |
| DeclareWarAlly | IsPromiseLandEnabled |  | bool |  |
| DeclareWarAlly | IsPromiseLandVisible |  | bool |  |
| DeclareWarAlly | IsSubject |  | bool |  |
| DeclareWarAlly | OnCallAllyClick |  | void |  |
| DeclareWarAlly | OnPromiseLandClick |  | void |  |
| DeclareWarAlly | Self |  | DeclareWarAlly |  |
| DeclareWarAlly | ToggleExpanded |  | void |  |
| DeclareWarAlly | WillJoinBecauseOfLandPromised |  | bool |  |
| DeclareWarAlly | WillJoinIfCalled |  | bool |  |
| DeclareWarLateralView | AccessSelf |  | DeclareWarLateralView |  |
| DeclareWarLateralView | CanCreateCasusBelli |  | bool |  |
| DeclareWarLateralView | CreateCasusBelli |  | void |  |
| DeclareWarLateralView | CreateCasusBelliTT |  | CString |  |
| DeclareWarLateralView | GenerateSceneDesc |  | unknown |  |
| DeclareWarLateralView | GetBaseAntagonismCost |  | CFixedPoint |  |
| DeclareWarLateralView | GetCasusBellis |  | unknown |  |
| DeclareWarLateralView | GetDesc |  | CString |  |
| DeclareWarLateralView | GetEnemyAllies |  | unknown |  |
| DeclareWarLateralView | GetLandComparisonTooltip |  | CString |  |
| DeclareWarLateralView | GetMaxAntagonism |  | CString |  |
| DeclareWarLateralView | GetMinAntagonism |  | CString |  |
| DeclareWarLateralView | GetNavalComparisonTooltip |  | CString |  |
| DeclareWarLateralView | GetPercentageLandCombatStrength |  | CFixedPoint |  |
| DeclareWarLateralView | GetPercentageNavalCombatStrength |  | CFixedPoint |  |
| DeclareWarLateralView | GetPlayer |  | unknown |  |
| DeclareWarLateralView | GetPlayerAllies |  | unknown |  |
| DeclareWarLateralView | GetSelectedCasusBelli |  | CString |  |
| DeclareWarLateralView | GetSelectedWarGoal |  | unknown |  |
| DeclareWarLateralView | GetSelectedWarGoalName |  | CString |  |
| DeclareWarLateralView | GetStabilityCost |  | CFixedPoint |  |
| DeclareWarLateralView | GetTitle |  | CString |  |
| DeclareWarLateralView | GetWarExhaustionCost |  | CFixedPoint |  |
| DeclareWarLateralView | HasEnemySubjects |  | bool |  |
| DeclareWarLateralView | HasPlayerSubjects |  | bool |  |
| DeclareWarLateralView | IsAntagonismCalculationDone |  | bool |  |
| DeclareWarLateralView | IsAnyCasusBelliSelected |  | bool |  |
| DeclareWarLateralView | IsLeftPanel |  | bool |  |
| DeclareWarLateralView | IsRightPanel |  | bool |  |
| DeclareWarLateralView | Self |  | DeclareWarLateralView |  |
| DeclareWarLateralView | ShowSelectCasusBelli |  | void |  |
| DeclareWarSelectCasusBelli | AccessSelf |  | DeclareWarSelectCasusBelli |  |
| DeclareWarSelectCasusBelli | GetInfo |  | CString |  |
| DeclareWarSelectCasusBelli | GetName |  | CString |  |
| DeclareWarSelectCasusBelli | GetNameWithNoTooltip |  | CString |  |
| DeclareWarSelectCasusBelli | GetWarGoals |  | unknown |  |
| DeclareWarSelectCasusBelli | IsToggled |  | bool |  |
| DeclareWarSelectCasusBelli | Self |  | DeclareWarSelectCasusBelli |  |
| DeclareWarSelectCasusBelli | Toggle |  | void |  |
| DeclareWarSelectWarGoal | AccessSelf |  | DeclareWarSelectWarGoal |  |
| DeclareWarSelectWarGoal | GetCasusBelliName |  | CString |  |
| DeclareWarSelectWarGoal | GetInfo |  | CString |  |
| DeclareWarSelectWarGoal | GetName |  | CString |  |
| DeclareWarSelectWarGoal | IsAllowed |  | bool |  |
| DeclareWarSelectWarGoal | IsSelected |  | bool |  |
| DeclareWarSelectWarGoal | OnClick |  | void |  |
| DeclareWarSelectWarGoal | Self |  | DeclareWarSelectWarGoal |  |
| DefineProxyNodeWindow | AccessSelf |  | DefineProxyNodeWindow |  |
| DefineProxyNodeWindow | GetName |  | CUTF8String |  |
| DefineProxyNodeWindow | Self |  | DefineProxyNodeWindow |  |
| DefineProxyNodeWindow | SetName | 1. unknown | void |  |
| DemandCategory | AccessSelf |  | DemandCategory |  |
| DemandCategory | GetName |  | CString |  |
| DemandCategory | Self |  | DemandCategory |  |
| DemandCategoryWrap | AccessSelf |  | DemandCategoryWrap |  |
| DemandCategoryWrap | GetGoods |  | unknown |  |
| DemandCategoryWrap | GetName |  | CString |  |
| DemandCategoryWrap | GetTooltip |  | CString |  |
| DemandCategoryWrap | Self |  | DemandCategoryWrap |  |
| DemandsOnMarketWrap | AccessSelf |  | DemandsOnMarketWrap |  |
| DemandsOnMarketWrap | GetGoods |  | unknown |  |
| DemandsOnMarketWrap | GetMarket |  | unknown |  |
| DemandsOnMarketWrap | GetName |  | CString |  |
| DemandsOnMarketWrap | Self |  | DemandsOnMarketWrap |  |
| DesertConnectionMarker | AccessSelf |  | DesertConnectionMarker |  |
| DesertConnectionMarker | ClearHighlightedConnections |  | void |  |
| DesertConnectionMarker | GetConnectedLocationNames |  | CString |  |
| DesertConnectionMarker | GetLocation |  | unknown |  |
| DesertConnectionMarker | GetTooltip |  | CString |  |
| DesertConnectionMarker | HighlightConnections |  | void |  |
| DesertConnectionMarker | Self |  | DesertConnectionMarker |  |
| Dialect | AccessSelf |  | Dialect |  |
| Dialect | GetCommonDialectsInfo |  | CString |  |
| Dialect | GetCourtDialectsInfo |  | CString |  |
| Dialect | GetLiturgicalDialectsInfo |  | CString |  |
| Dialect | GetName |  | CString |  |
| Dialect | GetNameWithLanguage |  | CString |  |
| Dialect | GetNameWithLanguageWithNoTooltip |  | CString |  |
| Dialect | GetNameWithNoTooltip |  | CString |  |
| Dialect | GetPower |  | CFixedPoint |  |
| Dialect | GetTooltip |  | CString |  |
| Dialect | Self |  | Dialect |  |
| DialogConfig | AccessSelf |  | DialogConfig |  |
| DialogConfig | GetAcceptText |  | CString |  |
| DialogConfig | GetDeclineText |  | CString |  |
| DialogConfig | GetDescription |  | CString |  |
| DialogConfig | GetTitle |  | CString |  |
| DialogConfig | OnAccept |  | void |  |
| DialogConfig | OnDecline |  | void |  |
| DialogConfig | Self |  | DialogConfig |  |
| DiploAlert | AccessSelf |  | DiploAlert |  |
| DiploAlert | GetCountry |  | unknown |  |
| DiploAlert | GetFlagTexture | 1. unknown 2. unknown | unknown |  |
| DiploAlert | GetFlagTextureFrame | 1. unknown 2. unknown | int32 |  |
| DiploAlert | GetIconTexture |  | unknown |  |
| DiploAlert | GetTooltip |  | CString |  |
| DiploAlert | OnClick |  | void |  |
| DiploAlert | OnRightClick |  | void |  |
| DiploAlert | Self |  | DiploAlert |  |
| Diplomacy | AccessSelf |  | Diplomacy |  |
| Diplomacy | GetActiveCasusBelliTargets |  | unknown |  |
| Diplomacy | GetActiveCasusBelliTargetsAmount |  | CFixedPoint |  |
| Diplomacy | GetActiveRelationsInfo |  | CString |  |
| Diplomacy | GetActiveRelationsList |  | CString |  |
| Diplomacy | GetAllCountriesTimedAntagonismDescription |  | CString |  |
| Diplomacy | GetAntagonismDescription | 1. unknown | CString |  |
| Diplomacy | GetAntagonismTowards | 1. unknown | CFixedPoint |  |
| Diplomacy | GetBeingAnnexedCostInfo |  | CString |  |
| Diplomacy | GetBeingAnnexedDate |  | CString |  |
| Diplomacy | GetBeingAnnexedInfo |  | CString |  |
| Diplomacy | GetBeingAnnexedProgress |  | float |  |
| Diplomacy | GetCanPerhapsCallDefensively |  | unknown |  |
| Diplomacy | GetCanPerhapsCallOffensively |  | unknown |  |
| Diplomacy | GetCountriesWithCoalitionGradeAntagonismTowardsUs |  | unknown |  |
| Diplomacy | GetCountriesWithNearCoalitionGradeAntagonismTowardsUs |  | unknown |  |
| Diplomacy | GetCountry |  | unknown |  |
| Diplomacy | GetCurrentAtWarWith |  | unknown |  |
| Diplomacy | GetCurrentWars |  | unknown |  |
| Diplomacy | GetDiplomaticActionsInfo |  | CString |  |
| Diplomacy | GetDiplomaticRange |  | int32 |  |
| Diplomacy | GetDiplomaticRelationsWithCountryAmount | 1. unknown | int32 |  |
| Diplomacy | GetDiplomaticRelationsWithCountryInfo | 1. unknown | CString |  |
| Diplomacy | GetEnemies |  | unknown |  |
| Diplomacy | GetGettingAccessFrom |  | unknown |  |
| Diplomacy | GetGettingWarReparations |  | unknown |  |
| Diplomacy | GetGivingWarReparations |  | unknown |  |
| Diplomacy | GetHighestPrioritySpecialStatus | 1. unknown | unknown |  |
| Diplomacy | GetInternationalOrganizations |  | unknown |  |
| Diplomacy | GetLibertyDesire |  | CFixedPoint |  |
| Diplomacy | GetLoyaltyDescription |  | CString |  |
| Diplomacy | GetMarriageUnion |  | unknown |  |
| Diplomacy | GetMaxCapacity |  | CFixedPoint |  |
| Diplomacy | GetMaxNumOfDiplomats |  | CFixedPoint |  |
| Diplomacy | GetNumOfDiplomats |  | CFixedPoint |  |
| Diplomacy | GetNumberOfCountriesWithAntagonismTowardsUs |  | int32 |  |
| Diplomacy | GetNumberOfCountriesWithTimedAntagonismTowardsUs |  | int32 |  |
| Diplomacy | GetNumberOfSubjectsOrBelow |  | int32 |  |
| Diplomacy | GetOpinionDescription | 1. unknown | CString |  |
| Diplomacy | GetOpinionOf | 1. unknown | CFixedPoint |  |
| Diplomacy | GetOverlord |  | unknown |  |
| Diplomacy | GetRelation | 1. unknown | unknown |  |
| Diplomacy | GetRivals |  | unknown |  |
| Diplomacy | GetRoyalMarriages |  | unknown |  |
| Diplomacy | GetSubjectLoyalty |  | CFixedPoint |  |
| Diplomacy | GetSubjectLoyaltyInfo |  | CString |  |
| Diplomacy | GetSubjectPays |  | CFixedPoint |  |
| Diplomacy | GetSubjectType |  | unknown |  |
| Diplomacy | GetSubjects |  | unknown |  |
| Diplomacy | GetTopOverlord |  | unknown |  |
| Diplomacy | GetTopOverlordOrThis |  | unknown |  |
| Diplomacy | GetTrustDescription | 1. unknown | CString |  |
| Diplomacy | GetTrustTowards | 1. unknown | CFixedPoint |  |
| Diplomacy | GetUnion |  | unknown |  |
| Diplomacy | GetUsedDiplomaticCapacity |  | CFixedPoint |  |
| Diplomacy | GetWarFriends |  | unknown |  |
| Diplomacy | HasDiplomats |  | bool |  |
| Diplomacy | HasSubjects |  | bool |  |
| Diplomacy | InOffensiveWar |  | bool |  |
| Diplomacy | IsAtWar |  | bool |  |
| Diplomacy | IsBeingAnnexedStalled |  | bool |  |
| Diplomacy | IsColonialOverlord |  | bool |  |
| Diplomacy | IsDisloyalSubject |  | bool |  |
| Diplomacy | IsOverCapacityLimit |  | bool |  |
| Diplomacy | IsRival | 1. unknown | bool |  |
| Diplomacy | IsSubject |  | bool |  |
| Diplomacy | IsSubjectOf | 1. unknown | bool |  |
| Diplomacy | Self |  | Diplomacy |  |
| DiplomacyDialog | AccessSelf |  | DiplomacyDialog |  |
| DiplomacyDialog | GetActionName | 1. unknown | CString |  |
| DiplomacyDialog | GetCountry |  | unknown |  |
| DiplomacyDialog | GetDescription |  | CString |  |
| DiplomacyDialog | GetIconTexture |  | unknown |  |
| DiplomacyDialog | GetOptionEnabled | 1. unknown | bool |  |
| DiplomacyDialog | GetTitle |  | CString |  |
| DiplomacyDialog | GetToolTip | 1. unknown | CString |  |
| DiplomacyDialog | OnAction | 1. unknown | void |  |
| DiplomacyDialog | OnClose |  | void |  |
| DiplomacyDialog | Self |  | DiplomacyDialog |  |
| DiplomacyDialog | ShowAction | 1. unknown | bool |  |
| DiplomacyLateralView | AccessSelf |  | DiplomacyLateralView |  |
| DiplomacyLateralView | GenerateSceneDesc |  | unknown |  |
| DiplomacyLateralView | GetActiveHegemons |  | unknown |  |
| DiplomacyLateralView | GetAnnexingAmount |  | int32 |  |
| DiplomacyLateralView | GetCasusBelliCreationAmount |  | int32 |  |
| DiplomacyLateralView | GetCountries |  | unknown |  |
| DiplomacyLateralView | GetCountriesSortSearch |  | unknown |  |
| DiplomacyLateralView | GetCurryingFavorsAmount |  | int32 |  |
| DiplomacyLateralView | GetDiplomaticRange |  | int32 |  |
| DiplomacyLateralView | GetDiplomaticRangeTooltip |  | CString |  |
| DiplomacyLateralView | GetDiplomaticRelations |  | unknown |  |
| DiplomacyLateralView | GetDiplomaticRelationsSortSearch |  | unknown |  |
| DiplomacyLateralView | GetGreatPowerPos |  | int32 |  |
| DiplomacyLateralView | GetGreatPowers |  | unknown |  |
| DiplomacyLateralView | GetImprovingOpinionAmount |  | int32 |  |
| DiplomacyLateralView | GetKnownGreatPowers |  | unknown |  |
| DiplomacyLateralView | GetOngoingRelationCountries |  | unknown |  |
| DiplomacyLateralView | GetOrgsItems |  | unknown |  |
| DiplomacyLateralView | GetOrgsSortSearch |  | unknown |  |
| DiplomacyLateralView | GetPlayer |  | unknown |  |
| DiplomacyLateralView | GetPlayerDiplomaticRelationsForCountry | 1. unknown | unknown |  |
| DiplomacyLateralView | GetPlayerDiplomaticRelationsForCountryTooltip | 1. unknown | CString |  |
| DiplomacyLateralView | GetQuickDiplomaticActions |  | unknown |  |
| DiplomacyLateralView | GetSpyNetworkCreationAmount |  | int32 |  |
| DiplomacyLateralView | GetSubjectsCount |  | int32 |  |
| DiplomacyLateralView | GetWars |  | unknown |  |
| DiplomacyLateralView | HasOngoingRelations |  | bool |  |
| DiplomacyLateralView | HasSubjects |  | bool |  |
| DiplomacyLateralView | IsLeftPanel |  | bool |  |
| DiplomacyLateralView | IsRightPanel |  | bool |  |
| DiplomacyLateralView | Self |  | DiplomacyLateralView |  |
| DiplomacyMacrobuilderLateralView | AccessSelf |  | DiplomacyMacrobuilderLateralView |  |
| DiplomacyMacrobuilderLateralView | GetAnnexingAmount |  | int32 |  |
| DiplomacyMacrobuilderLateralView | GetCasusBelliCreationAmount |  | int32 |  |
| DiplomacyMacrobuilderLateralView | GetCategoryItems |  | unknown |  |
| DiplomacyMacrobuilderLateralView | GetCurryingFavorsAmount |  | int32 |  |
| DiplomacyMacrobuilderLateralView | GetDefaultCategory |  | unknown |  |
| DiplomacyMacrobuilderLateralView | GetDiploCategoriesSortSearch |  | unknown |  |
| DiplomacyMacrobuilderLateralView | GetDiplomaticPendingProgress |  | float |  |
| DiplomacyMacrobuilderLateralView | GetDiplomaticPendingText |  | CString |  |
| DiplomacyMacrobuilderLateralView | GetDiplomaticPendingTooltip |  | CString |  |
| DiplomacyMacrobuilderLateralView | GetImprovingOpinionAmount |  | int32 |  |
| DiplomacyMacrobuilderLateralView | GetOngoingRelationCountries |  | unknown |  |
| DiplomacyMacrobuilderLateralView | GetPlayer |  | unknown |  |
| DiplomacyMacrobuilderLateralView | GetSelectedCountry |  | unknown |  |
| DiplomacyMacrobuilderLateralView | GetSpyNetworkCreationAmount |  | int32 |  |
| DiplomacyMacrobuilderLateralView | HasDiplomaticPending |  | bool |  |
| DiplomacyMacrobuilderLateralView | HasFilteredCountryTemporaryRelations |  | bool |  |
| DiplomacyMacrobuilderLateralView | HasOngoingRelations |  | bool |  |
| DiplomacyMacrobuilderLateralView | IsBuildingList |  | bool |  |
| DiplomacyMacrobuilderLateralView | IsCountryFilterEnabled |  | bool |  |
| DiplomacyMacrobuilderLateralView | IsDiplomacyMacrobuilderSelectCountryOpened | 1. unknown | bool |  |
| DiplomacyMacrobuilderLateralView | IsLeftPanel |  | bool |  |
| DiplomacyMacrobuilderLateralView | IsRightPanel |  | bool |  |
| DiplomacyMacrobuilderLateralView | RemoveCountryFilter |  | void |  |
| DiplomacyMacrobuilderLateralView | Self |  | DiplomacyMacrobuilderLateralView |  |
| DiplomacyMacrobuilderLateralView | ToggleDiplomacyMacrobuilderSelectCountry | 1. unknown | void |  |
| DiplomacyMacrobuilderSelectCountry | AccessSelf |  | DiplomacyMacrobuilderSelectCountry |  |
| DiplomacyMacrobuilderSelectCountry | OnClose |  | void |  |
| DiplomacyMacrobuilderSelectCountry | Parent |  | unknown |  |
| DiplomacyMacrobuilderSelectCountry | Self |  | DiplomacyMacrobuilderSelectCountry |  |
| DiplomacyStatus | AccessSelf |  | DiplomacyStatus |  |
| DiplomacyStatus | GetTruceExpirationDate |  | CString |  |
| DiplomacyStatus | GetTruceProgress |  | float |  |
| DiplomacyStatus | GetWar |  | unknown |  |
| DiplomacyStatus | HasTruce |  | bool |  |
| DiplomacyStatus | HasWar |  | bool |  |
| DiplomacyStatus | Self |  | DiplomacyStatus |  |
| DiplomaticActionCategory | AccessSelf |  | DiplomaticActionCategory |  |
| DiplomaticActionCategory | GetActions |  | unknown |  |
| DiplomaticActionCategory | GetName |  | CString |  |
| DiplomaticActionCategory | GetNameKey |  | CString |  |
| DiplomaticActionCategory | GetNumActions |  | int32 |  |
| DiplomaticActionCategory | HasActions |  | bool |  |
| DiplomaticActionCategory | IsExpanded |  | bool |  |
| DiplomaticActionCategory | OnClick |  | void |  |
| DiplomaticActionCategory | Self |  | DiplomaticActionCategory |  |
| DiplomaticActionItem | AccessSelf |  | DiplomaticActionItem |  |
| DiplomaticActionItem | GetAcceptanceFrame |  | int32 |  |
| DiplomaticActionItem | GetAcceptanceTooltip |  | CString |  |
| DiplomaticActionItem | GetAffectedDiplomaticCurrency |  | CString |  |
| DiplomaticActionItem | GetDiplomaticCurrency |  | CString |  |
| DiplomaticActionItem | GetDiplomaticCurrencyInfo |  | CString |  |
| DiplomaticActionItem | GetEffect |  | CString |  |
| DiplomaticActionItem | GetFlavor |  | CString |  |
| DiplomaticActionItem | GetIcons |  | unknown |  |
| DiplomaticActionItem | GetPrice |  | CString |  |
| DiplomaticActionItem | GetPriceInfo |  | CString |  |
| DiplomaticActionItem | GetRecipient |  | unknown |  |
| DiplomaticActionItem | GetTag |  | CString |  |
| DiplomaticActionItem | GetTexture |  | unknown |  |
| DiplomaticActionItem | GetTitle |  | CString |  |
| DiplomaticActionItem | GetTooltip |  | CString |  |
| DiplomaticActionItem | GetTotalMacrobuilderActions |  | int32 |  |
| DiplomaticActionItem | HasAffectedDiplomaticCurrency |  | bool |  |
| DiplomaticActionItem | HasAnyInnerPossible |  | bool |  |
| DiplomaticActionItem | HasDiplomaticCurrency |  | bool |  |
| DiplomaticActionItem | HasInnerRequirements |  | bool |  |
| DiplomaticActionItem | HasPrice |  | bool |  |
| DiplomaticActionItem | HasTarget |  | bool |  |
| DiplomaticActionItem | IsEnabled |  | bool |  |
| DiplomaticActionItem | IsType | 1. unknown | bool |  |
| DiplomaticActionItem | OnClick |  | void |  |
| DiplomaticActionItem | RequireAcceptance |  | bool |  |
| DiplomaticActionItem | Self |  | DiplomaticActionItem |  |
| DiplomaticActionItem | ShowExtraInfo |  | bool |  |
| DiplomaticActionItem | WillAccept |  | CString |  |
| DiplomaticObjectiveTypeGlue | AccessSelf |  | DiplomaticObjectiveTypeGlue |  |
| DiplomaticObjectiveTypeGlue | GetName |  | CString |  |
| DiplomaticObjectiveTypeGlue | Self |  | DiplomaticObjectiveTypeGlue |  |
| Disaster | AccessSelf |  | Disaster |  |
| Disaster | GetDebugText |  | CString |  |
| Disaster | GetIcon |  | unknown |  |
| Disaster | GetMonthly |  | CString |  |
| Disaster | GetName |  | CString |  |
| Disaster | GetNameWithNoTooltip |  | CString |  |
| Disaster | GetOwner |  | unknown |  |
| Disaster | GetStartDate |  | CString |  |
| Disaster | GetTooltip |  | CString |  |
| Disaster | GetType |  | unknown |  |
| Disaster | IsActive |  | bool |  |
| Disaster | Self |  | Disaster |  |
| DisasterType | AccessSelf |  | DisasterType |  |
| DisasterType | GetDesc |  | CString |  |
| DisasterType | GetEndConditions |  | CString |  |
| DisasterType | GetHintTag |  | CString |  |
| DisasterType | GetIcon |  | unknown |  |
| DisasterType | GetName |  | CString |  |
| DisasterType | GetNameWithNoTooltip |  | CString |  |
| DisasterType | GetStartConditions |  | CString |  |
| DisasterType | GetTooltip |  | CString |  |
| DisasterType | HasHint |  | bool |  |
| DisasterType | MakeScope |  | Scope | Jomini Script System |
| DisasterType | Self |  | DisasterType |  |
| DisasterView | AccessSelf |  | DisasterView |  |
| DisasterView | GetActions |  | unknown |  |
| DisasterView | GetDisaster |  | unknown |  |
| DisasterView | GetPlayer |  | unknown |  |
| DisasterView | GetTooltipInformation | 1. unknown | CString |  |
| DisasterView | IsDisaster | 1. unknown | bool |  |
| DisasterView | IsLeftPanel |  | bool |  |
| DisasterView | IsRightPanel |  | bool |  |
| DisasterView | Self |  | DisasterView |  |
| Disease | AccessSelf |  | Disease |  |
| Disease | GetDeaths |  | CString |  |
| Disease | GetDeathsInCountry | 1. unknown | CString |  |
| Disease | GetDeathsInCountryTooltip | 1. unknown | CString |  |
| Disease | GetDeathsTooltip |  | CString |  |
| Disease | GetDesc |  | CString |  |
| Disease | GetLocationsAffectedForCountryTooltip | 1. unknown | CString |  |
| Disease | GetName |  | CString |  |
| Disease | GetNameWithNoTooltip |  | CString |  |
| Disease | GetNumLocationsAffectedForCountry | 1. unknown | int32 |  |
| Disease | GetNumLocationsForSituationView | 1. unknown | int32 |  |
| Disease | GetOrigin |  | unknown |  |
| Disease | GetTooltip |  | CString |  |
| Disease | HasEffects |  | bool |  |
| Disease | IsEnvironmental |  | bool |  |
| Disease | MakeScope |  | Scope | Jomini Script System |
| Disease | Self |  | Disease |  |
| DiseaseOutbreak | AccessSelf |  | DiseaseOutbreak |  |
| DiseaseOutbreak | GetDeaths |  | CString |  |
| DiseaseOutbreak | GetDeathsInCountry | 1. unknown | CString |  |
| DiseaseOutbreak | GetDeathsInCountryTooltip | 1. unknown | CString |  |
| DiseaseOutbreak | GetDeathsTooltip |  | CString |  |
| DiseaseOutbreak | GetDisease |  | unknown |  |
| DiseaseOutbreak | GetLocationsAffectedForCountryTooltip | 1. unknown | CString |  |
| DiseaseOutbreak | GetName |  | CString |  |
| DiseaseOutbreak | GetNameWithNoTooltip |  | CString |  |
| DiseaseOutbreak | GetNumLocationsAffectedForCountry | 1. unknown | int32 |  |
| DiseaseOutbreak | GetOrigin |  | unknown |  |
| DiseaseOutbreak | GetTooltip |  | CString |  |
| DiseaseOutbreak | GetTotalDeathsInfo | 1. unknown | CString |  |
| DiseaseOutbreak | MakeScope |  | Scope | Jomini Script System |
| DiseaseOutbreak | Self |  | DiseaseOutbreak |  |
| DiseasesLateralView | AccessSelf |  | DiseasesLateralView |  |
| DiseasesLateralView | GetAmountAffectingDiseases |  | int32 |  |
| DiseasesLateralView | GetPlayer |  | unknown |  |
| DiseasesLateralView | GetPossibleDiseases |  | unknown |  |
| DiseasesLateralView | GetTotalDeaths |  | CFixedPoint |  |
| DiseasesLateralView | GetTotalDeathsInfo |  | CString |  |
| DiseasesLateralView | GetTotalDeathsLabel |  | CString |  |
| DiseasesLateralView | IsLeftPanel |  | bool |  |
| DiseasesLateralView | IsRightPanel |  | bool |  |
| DiseasesLateralView | Self |  | DiseasesLateralView |  |
| DiseasesLateralView | SetSelectedDisease | 1. unknown | void |  |
| DlcEntry | AccessSelf |  | DlcEntry |  |
| DlcEntry | CanToggleEnabled |  | bool |  |
| DlcEntry | DisplayImage |  | unknown |  |
| DlcEntry | Filename |  | CString |  |
| DlcEntry | GetToggleEnabledTooltip |  | CString |  |
| DlcEntry | Id |  | CString |  |
| DlcEntry | IsEnabled |  | bool |  |
| DlcEntry | IsVerified |  | bool |  |
| DlcEntry | LocalizedName |  | CString |  |
| DlcEntry | Self |  | DlcEntry |  |
| DlcEntry | ToggleEnabled |  | void |  |
| DockableLayout | AccessSelf |  | DockableLayout |  |
| DockableLayout | GetName |  | CString |  |
| DockableLayout | Self |  | DockableLayout |  |
| DockableLayoutManager | AccessActiveLayout |  | unknown |  |
| DockableLayoutManager | AccessLayoutSearchList |  | unknown |  |
| DockableLayoutManager | AccessLayouts |  | unknown |  |
| DockableLayoutManager | AccessSelectedLayout |  | unknown |  |
| DockableLayoutManager | AccessSelf |  | DockableLayoutManager |  |
| DockableLayoutManager | DeleteUserLayout |  | void |  |
| DockableLayoutManager | SaveAsNewUserLayout |  | void |  |
| DockableLayoutManager | SaveUserLayout |  | void |  |
| DockableLayoutManager | Self |  | DockableLayoutManager |  |
| DockableLayoutManager | SwitchToSelectedLayout |  | void |  |
| DockableWindow | AccessSelf |  | DockableWindow |  |
| DockableWindow | Close |  | void |  |
| DockableWindow | IsHidden |  | bool |  |
| DockableWindow | IsMoving |  | bool |  |
| DockableWindow | Position |  | CVector2f |  |
| DockableWindow | ResizeHandleSize |  | CVector2f |  |
| DockableWindow | Self |  | DockableWindow |  |
| DockableWindow | Size |  | CVector2f |  |
| DockableWindow | Title |  | CString |  |
| DockableWindow | WidgetPosition |  | CVector2f |  |
| DockableWindow | WidgetSize |  | CVector2f |  |
| DrawCmdsList | AccessSelf |  | DrawCmdsList |  |
| DrawCmdsList | GetAttachmentInfo |  | CString |  |
| DrawCmdsList | GetDrawNumber |  | CString |  |
| DrawCmdsList | GetFormat |  | CString |  |
| DrawCmdsList | GetResolution |  | CString |  |
| DrawCmdsList | GetSize |  | uint64 |  |
| DrawCmdsList | GetTextureName |  | unknown |  |
| DrawCmdsList | GetZoneName |  | CString |  |
| DrawCmdsList | IsCaptured |  | bool |  |
| DrawCmdsList | Self |  | DrawCmdsList |  |
| DrawCmdsViewer | AccessSelf |  | DrawCmdsViewer |  |
| DrawCmdsViewer | CaptureFrame |  | void |  |
| DrawCmdsViewer | ClearCapture |  | void |  |
| DrawCmdsViewer | DecrementCapturedDrawCount |  | void |  |
| DrawCmdsViewer | DecrementCapturedDrawNumberOffset |  | void |  |
| DrawCmdsViewer | GetCapturedDrawCount |  | uint32 |  |
| DrawCmdsViewer | GetCapturedDrawNumberOffset |  | uint32 |  |
| DrawCmdsViewer | GetCapturedFrameNumber |  | uint32 |  |
| DrawCmdsViewer | GetDrawCommandData |  | unknown |  |
| DrawCmdsViewer | IncrementCapturedDrawCount |  | void |  |
| DrawCmdsViewer | IncrementCapturedDrawNumberOffset |  | void |  |
| DrawCmdsViewer | Self |  | DrawCmdsViewer |  |
| DrawCmdsViewer | SetDrawCount |  | void |  |
| DrawCmdsViewer | SetDrawOffset |  | void |  |
| DummyTechTreeContextItem | AccessSelf |  | DummyTechTreeContextItem |  |
| DummyTechTreeContextItem | Self |  | DummyTechTreeContextItem |  |
| DynastiesLedger | AccessSelf |  | DynastiesLedger |  |
| DynastiesLedger | GetDynasties |  | unknown |  |
| DynastiesLedger | GetDynastyItemsSortSearch |  | unknown |  |
| DynastiesLedger | GetPlayer |  | unknown |  |
| DynastiesLedger | IsLeftPanel |  | bool |  |
| DynastiesLedger | IsRightPanel |  | bool |  |
| DynastiesLedger | Self |  | DynastiesLedger |  |
| Dynasty | AccessSelf |  | Dynasty |  |
| Dynasty | GetAllRulerCountriesThroughHistory |  | unknown |  |
| Dynasty | GetAllRulersThroughHistory |  | unknown |  |
| Dynasty | GetCountries |  | unknown |  |
| Dynasty | GetDebugText |  | CString |  |
| Dynasty | GetDynasticPower | 1. unknown | CFixedPoint |  |
| Dynasty | GetDynastyFounder |  | unknown |  |
| Dynasty | GetDynastyHead |  | unknown |  |
| Dynasty | GetHome |  | unknown |  |
| Dynasty | GetLivingCharacters |  | unknown |  |
| Dynasty | GetLivingMembersInfo |  | CString |  |
| Dynasty | GetMembers |  | unknown |  |
| Dynasty | GetMembersInCountry | 1. unknown | CString |  |
| Dynasty | GetMembersOutsideCountry | 1. unknown | CString |  |
| Dynasty | GetName |  | CString |  |
| Dynasty | GetNameWithNoTooltip |  | CString |  |
| Dynasty | GetNumInCountry | 1. unknown | int32 |  |
| Dynasty | GetNumOfCountries |  | int32 |  |
| Dynasty | GetNumOfCurrentRulers |  | CFixedPoint |  |
| Dynasty | GetNumOfLivingCharacters |  | int32 |  |
| Dynasty | GetNumOfUnionCountries |  | int32 |  |
| Dynasty | GetNumOfUnions |  | int32 |  |
| Dynasty | GetNumOutsideCountry | 1. unknown | int32 |  |
| Dynasty | GetRulerHistoryInfo |  | CString |  |
| Dynasty | GetTooltip |  | CString |  |
| Dynasty | GetTotalDynasticPower |  | CFixedPoint |  |
| Dynasty | HasDynastyFounder |  | bool |  |
| Dynasty | HasDynastyHead |  | bool |  |
| Dynasty | MakeScope |  | Scope | Jomini Script System |
| Dynasty | Self |  | Dynasty |  |
| DynastyItem | AccessSelf |  | DynastyItem |  |
| DynastyItem | GetDynasty |  | unknown |  |
| DynastyItem | Self |  | DynastyItem |  |
| DynastyLineItem | AccessSelf |  | DynastyLineItem |  |
| DynastyLineItem | GetFrom |  | CVector2f |  |
| DynastyLineItem | GetLineFrom |  | CVector2f |  |
| DynastyLineItem | GetLineTo |  | CVector2f |  |
| DynastyLineItem | GetPoints |  | unknown |  |
| DynastyLineItem | GetPointsInContainer |  | unknown |  |
| DynastyLineItem | GetPosition |  | CVector2f |  |
| DynastyLineItem | GetSize |  | CVector2f |  |
| DynastyLineItem | GetTo |  | CVector2f |  |
| DynastyLineItem | IsFromNodeVirtual |  | bool |  |
| DynastyLineItem | IsToNodeVirtual |  | bool |  |
| DynastyLineItem | IsVisible |  | bool |  |
| DynastyLineItem | Self |  | DynastyLineItem |  |
| DynastyMarker | AccessSelf |  | DynastyMarker |  |
| DynastyMarker | GetDynasty |  | unknown |  |
| DynastyMarker | GetLocation |  | unknown |  |
| DynastyMarker | IsLowborn |  | bool |  |
| DynastyMarker | IsRegency |  | bool |  |
| DynastyMarker | Self |  | DynastyMarker |  |
| DynastyMarker | ShouldBeShown |  | bool |  |
| DynastyNodeItem | AccessSelf |  | DynastyNodeItem |  |
| DynastyNodeItem | AreChildrenVisible |  | bool |  |
| DynastyNodeItem | GetKey |  | CString |  |
| DynastyNodeItem | GetNameToFit |  | CString |  |
| DynastyNodeItem | GetPosition |  | CVector2f |  |
| DynastyNodeItem | GetTraits |  | unknown |  |
| DynastyNodeItem | IsFounder |  | bool |  |
| DynastyNodeItem | IsFromOtherDynasty |  | bool |  |
| DynastyNodeItem | IsRuler |  | bool |  |
| DynastyNodeItem | IsVisible |  | bool |  |
| DynastyNodeItem | Self |  | DynastyNodeItem |  |
| DynastyNodeItem | ShouldPortraitBeRendered |  | bool |  |
| DynastyNodeItem | ShowSimplifiedVersion |  | bool |  |
| DynastyNodeItem | ToggleChildrenVisibility |  | void |  |
| DynastyTreeView | AccessSelf |  | DynastyTreeView |  |
| DynastyTreeView | GetAutocompleteFromKey | 1. unknown | unknown |  |
| DynastyTreeView | GetCurrentRulersTooltip |  | CString |  |
| DynastyTreeView | GetDynasty |  | unknown |  |
| DynastyTreeView | GetLineItems |  | unknown |  |
| DynastyTreeView | GetNodeItems |  | unknown |  |
| DynastyTreeView | GetPlayer |  | unknown |  |
| DynastyTreeView | GetSearchBar |  | unknown |  |
| DynastyTreeView | GetTitle |  | CString |  |
| DynastyTreeView | IsLeftPanel |  | bool |  |
| DynastyTreeView | IsRightPanel |  | bool |  |
| DynastyTreeView | IsZoomedOut |  | bool |  |
| DynastyTreeView | PanToCharacter | 1. unknown | void |  |
| DynastyTreeView | Self |  | DynastyTreeView |  |
| DynastyTreeView | SetupDataContexts | 1. unknown | CString |  |
| bool | AccessSelf |  | bool |  |
| bool | Self |  | bool |  |
| double | AccessSelf |  | double |  |
| double | Self |  | double |  |

List of all E-L GUI functions/e-l

| Type | Functions/E- | Arguments | Output | Description |
| --- | --- | --- | --- | --- |
| EconomicSupportWindow | AccessSelf |  | EconomicSupportWindow |  |
| EconomicSupportWindow | GetDesc |  | CString |  |
| EconomicSupportWindow | GetMax |  | float |  |
| EconomicSupportWindow | GetPrice |  | float |  |
| EconomicSupportWindow | GetStep |  | float |  |
| EconomicSupportWindow | GetTitle |  | CString |  |
| EconomicSupportWindow | OnAccept |  | void |  |
| EconomicSupportWindow | OnDecline |  | void |  |
| EconomicSupportWindow | OnPriceChanged |  | void |  |
| EconomicSupportWindow | OnPriceChangedByEditbox | 1. unknown | void |  |
| EconomicSupportWindow | Self |  | EconomicSupportWindow |  |
| EconomyItem | AccessSelf |  | EconomyItem |  |
| EconomyItem | GetFloatChange |  | float |  |
| EconomyItem | GetIcon |  | unknown |  |
| EconomyItem | GetImpact |  | CString |  |
| EconomyItem | GetImpactTooltip |  | CString |  |
| EconomyItem | GetImpactValue |  | CFixedPoint |  |
| EconomyItem | GetMax |  | float |  |
| EconomyItem | GetMin |  | float |  |
| EconomyItem | GetName |  | CString |  |
| EconomyItem | GetTooltip |  | CString |  |
| EconomyItem | GetValue |  | CFixedPoint |  |
| EconomyItem | GetVolume |  | CFixedPoint |  |
| EconomyItem | HasImpact |  | bool |  |
| EconomyItem | IsBaseItem |  | bool |  |
| EconomyItem | IsCoinMintingItem |  | bool |  |
| EconomyItem | IsMaintenanceSetting |  | bool |  |
| EconomyItem | IsStabilityInvestmentSetting |  | bool |  |
| EconomyItem | IsTaxRateSetting |  | bool |  |
| EconomyItem | Self |  | EconomyItem |  |
| EconomyView | AccessSelf |  | EconomyView |  |
| EconomyView | CanDoStabilityInvestment |  | bool |  |
| EconomyView | CanRepayAllLoans |  | bool |  |
| EconomyView | CanRepayAllPossibleLoans |  | bool |  |
| EconomyView | GetAllExpense |  | CFixedPoint |  |
| EconomyView | GetAllExpenseInfo |  | CString |  |
| EconomyView | GetAllIncome |  | CFixedPoint |  |
| EconomyView | GetAllIncomeInfo |  | CString |  |
| EconomyView | GetBalanceEndData |  | CString |  |
| EconomyView | GetBalanceStartData |  | CString |  |
| EconomyView | GetBasePlotPoints |  | unknown |  |
| EconomyView | GetCoinMinting |  | CFixedPoint |  |
| EconomyView | GetCoinMintingIncome |  | CFixedPoint |  |
| EconomyView | GetDefaultCoinMinting |  | float |  |
| EconomyView | GetDefaultStabilityInvestment |  | float |  |
| EconomyView | GetEstimatedBalance |  | CFixedPoint |  |
| EconomyView | GetEstimatedBalanceInfo |  | CString |  |
| EconomyView | GetExpense | 1. unknown | CFixedPoint |  |
| EconomyView | GetExpenseInfo | 1. unknown | CString |  |
| EconomyView | GetHasLoansInfo |  | CString |  |
| EconomyView | GetHistoricalMaxBalance |  | CFixedPoint |  |
| EconomyView | GetHistoricalMaxBalanceTooltip |  | CString |  |
| EconomyView | GetHistoricalMinBalance |  | CFixedPoint |  |
| EconomyView | GetHistoricalMinBalanceTooltip |  | CString |  |
| EconomyView | GetIncome | 1. unknown | CFixedPoint |  |
| EconomyView | GetIncomeFromMintingInfo |  | CString |  |
| EconomyView | GetIncomeInfo | 1. unknown | CString |  |
| EconomyView | GetInflationChange |  | CFixedPoint |  |
| EconomyView | GetInflationFromMintingInfo |  | CString |  |
| EconomyView | GetInflationGoodDemand |  | CString |  |
| EconomyView | GetMaintenanceSetting | 1. unknown | unknown |  |
| EconomyView | GetMaintenanceSettings |  | unknown |  |
| EconomyView | GetMaxStabilityExpenseNoFormat |  | CFixedPoint |  |
| EconomyView | GetNextLoanSize |  | CFixedPoint |  |
| EconomyView | GetNoTaxInfo |  | CString |  |
| EconomyView | GetPlayer |  | unknown |  |
| EconomyView | GetPlotPoint | 1. unknown | CVector2f |  |
| EconomyView | GetRecentBalance |  | CVector2f, list of (?) |  |
| EconomyView | GetRepayAllLoansDesc |  | CString |  |
| EconomyView | GetRepayAllPossibleLoansDesc |  | CString |  |
| EconomyView | GetStabilityChange |  | CFixedPoint |  |
| EconomyView | GetStabilityInvestment |  | CFixedPoint |  |
| EconomyView | GetStabilityInvestmentExpense |  | CFixedPoint |  |
| EconomyView | GetStabilityInvestmentExpenseInfo |  | CString |  |
| EconomyView | GetStabilityInvestmentTooltip |  | CString |  |
| EconomyView | GetStabilitySliderValue |  | CFixedPoint |  |
| EconomyView | GetTakeLoanInfo |  | CString |  |
| EconomyView | GetTaxRateSettings |  | unknown |  |
| EconomyView | GetTotalLoanDebt |  | CFixedPoint |  |
| EconomyView | GoToLoans |  | void |  |
| EconomyView | HasLoans |  | bool |  |
| EconomyView | HasPlotPoint | 1. unknown | bool |  |
| EconomyView | HasTaxes |  | bool |  |
| EconomyView | IsCoinMintingDecEnabled |  | bool |  |
| EconomyView | IsCoinMintingIncEnabled |  | bool |  |
| EconomyView | IsLeftPanel |  | bool |  |
| EconomyView | IsRightPanel |  | bool |  |
| EconomyView | IsStabilityDecEnabled |  | bool |  |
| EconomyView | IsStabilityIncEnabled |  | bool |  |
| EconomyView | IsTradeProfitable |  | bool |  |
| EconomyView | OnChangedCoinMinting |  | void |  |
| EconomyView | OnChangedStabilityInvestment |  | void |  |
| EconomyView | Post |  | void |  |
| EconomyView | RepayAllLoans |  | void |  |
| EconomyView | RepayAllPossibleLoans |  | void |  |
| EconomyView | Self |  | EconomyView |  |
| EconomyView | ToggleUnusedMaintenanceSettings |  | void |  |
| EconomyView | UnusedMaintenanceSettingsVisible |  | bool |  |
| EcsSceneViewer | AccessSelf |  | EcsSceneViewer |  |
| EcsSceneViewer | Is2DScene |  | bool |  |
| EcsSceneViewer | IsUltraWide |  | bool |  |
| EcsSceneViewer | Self |  | EcsSceneViewer |  |
| EcsSceneViewerDockable | AccessSelf |  | EcsSceneViewerDockable |  |
| EcsSceneViewerDockable | FitCameraToEntity |  | void |  |
| EcsSceneViewerDockable | GenerateSceneDesc |  | unknown |  |
| EcsSceneViewerDockable | GetAllScenes |  | unknown |  |
| EcsSceneViewerDockable | GetSceneDropdownIndex |  | CVector2i |  |
| EcsSceneViewerDockable | GetSelectedScene |  | CString |  |
| EcsSceneViewerDockable | IsEditboxEmpty |  | bool |  |
| EcsSceneViewerDockable | LoadScene |  | void |  |
| EcsSceneViewerDockable | OnSceneDropdownChanged |  | void |  |
| EcsSceneViewerDockable | Self |  | EcsSceneViewerDockable |  |
| EcsSceneViewerDockable | SwitchCameraProjection |  | void |  |
| EcsSceneViewerDockable | SwitchEnableInput |  | void |  |
| EcsSceneViewerDockable | ToggleGrid |  | void |  |
| EcsSceneViewerDockable | ToggleWireframe |  | void |  |
| EcsSceneViewerDockable | UpdateText | 1. unknown | void |  |
| EditorSettingCategory | AccessSelf |  | EditorSettingCategory |  |
| EditorSettingCategory | GetName |  | CString |  |
| EditorSettingCategory | Self |  | EditorSettingCategory |  |
| EditorSettingsPage | AccessCategories |  | unknown |  |
| EditorSettingsPage | AccessSelf |  | EditorSettingsPage |  |
| EditorSettingsPage | GetName |  | CString |  |
| EditorSettingsPage | IsSelected |  | bool |  |
| EditorSettingsPage | OnClick |  | void |  |
| EditorSettingsPage | Self |  | EditorSettingsPage |  |
| EditorSettingsWindow | AccessActivePage |  | unknown |  |
| EditorSettingsWindow | AccessPages |  | unknown |  |
| EditorSettingsWindow | AccessSelf |  | EditorSettingsWindow |  |
| EditorSettingsWindow | AllowApply |  | bool |  |
| EditorSettingsWindow | AppliedOnRestart |  | bool |  |
| EditorSettingsWindow | Close |  | void |  |
| EditorSettingsWindow | GetWindowName |  | CString |  |
| EditorSettingsWindow | HasChanged |  | bool |  |
| EditorSettingsWindow | Hide |  | void |  |
| EditorSettingsWindow | OnApply |  | void |  |
| EditorSettingsWindow | RequireRestart |  | bool |  |
| EditorSettingsWindow | Restore |  | void |  |
| EditorSettingsWindow | Save |  | void |  |
| EditorSettingsWindow | SaveAndClose |  | void |  |
| EditorSettingsWindow | Self |  | EditorSettingsWindow |  |
| EditorSettingsWindow | Show |  | void |  |
| EffectNodeWindow | AccessSelf |  | EffectNodeWindow |  |
| EffectNodeWindow | GetSelectedFileName |  | CString |  |
| EffectNodeWindow | OpenFileDialog |  | void |  |
| EffectNodeWindow | Self |  | EffectNodeWindow |  |
| EmitterNodeWindow | AccessSelf |  | EmitterNodeWindow |  |
| EmitterNodeWindow | AddUserData | 1. unknown | void |  |
| EmitterNodeWindow | GetNodeTitleColor |  | CVector4f |  |
| EmitterNodeWindow | IsAnotherWindowIsolated |  | bool |  |
| EmitterNodeWindow | IsIsolated |  | bool |  |
| EmitterNodeWindow | IsVisuallyEnabled |  | bool |  |
| EmitterNodeWindow | Self |  | EmitterNodeWindow |  |
| EmitterNodeWindow | ToggleSetEmitterIsolatedExclusive |  | void |  |
| EmitterNodeWindow | ToggleSetEmitterIsolatedIncremental |  | void |  |
| EmitterNodeWindow | ToggleSetVisuallyEnabled |  | void |  |
| EmploymentSystem | AccessSelf |  | EmploymentSystem |  |
| EmploymentSystem | GetDesc |  | CString |  |
| EmploymentSystem | GetEffect |  | CString |  |
| EmploymentSystem | GetName |  | CString |  |
| EmploymentSystem | GetNameWithNoTooltip |  | CString |  |
| EmploymentSystem | GetTooltip |  | CString |  |
| EmploymentSystem | MakeScope |  | Scope | Jomini Script System |
| EmploymentSystem | Self |  | EmploymentSystem |  |
| Encyclopedia | AccessCurrentPage |  | unknown |  |
| Encyclopedia | AccessPages |  | unknown |  |
| Encyclopedia | AccessSelf |  | Encyclopedia |  |
| Encyclopedia | CanFilterFromHistoryBack |  | bool |  |
| Encyclopedia | CanFilterFromHistoryForward |  | bool |  |
| Encyclopedia | FilterFromHistoryBack |  | void |  |
| Encyclopedia | FilterFromHistoryForward |  | void |  |
| Encyclopedia | GetAllPage |  | unknown |  |
| Encyclopedia | GetCurrentPage |  | unknown |  |
| Encyclopedia | GetPages |  | unknown |  |
| Encyclopedia | GetViewedEntries |  | unknown |  |
| Encyclopedia | Hide |  | void |  |
| Encyclopedia | IsShown |  | bool |  |
| Encyclopedia | Self |  | Encyclopedia |  |
| Encyclopedia | SetCurrentPage | 1. unknown | void |  |
| Encyclopedia | ViewAllEntries |  | void |  |
| EncyclopediaEntry | AccessSelf |  | EncyclopediaEntry |  |
| EncyclopediaEntry | GetBody |  | CString |  |
| EncyclopediaEntry | GetFrame |  | int32 |  |
| EncyclopediaEntry | GetFrameSize |  | CVector2i |  |
| EncyclopediaEntry | GetImage |  | unknown |  |
| EncyclopediaEntry | GetTitle |  | CString |  |
| EncyclopediaEntry | HasImage |  | bool |  |
| EncyclopediaEntry | Self |  | EncyclopediaEntry |  |
| EncyclopediaEntryView | AccessSelf |  | EncyclopediaEntryView |  |
| EncyclopediaEntryView | Get |  | unknown |  |
| EncyclopediaEntryView | Self |  | EncyclopediaEntryView |  |
| EncyclopediaLateralView | AccessSelf |  | EncyclopediaLateralView |  |
| EncyclopediaLateralView | GetPlayer |  | unknown |  |
| EncyclopediaLateralView | IsLeftPanel |  | bool |  |
| EncyclopediaLateralView | IsRightPanel |  | bool |  |
| EncyclopediaLateralView | Self |  | EncyclopediaLateralView |  |
| EncyclopediaPage | AccessSelf |  | EncyclopediaPage |  |
| EncyclopediaPage | FilterFromText |  | void |  |
| EncyclopediaPage | GetTitle |  | CString |  |
| EncyclopediaPage | ResetFilter |  | void |  |
| EncyclopediaPage | SearchFromEnteredText |  | void |  |
| EncyclopediaPage | Self |  | EncyclopediaPage |  |
| EndGameView | AccessSelf |  | EndGameView |  |
| EndGameView | CanContinuePastEndDate |  | bool |  |
| EndGameView | GetHistoricalScoreItems |  | unknown |  |
| EndGameView | GetText |  | CString |  |
| EndGameView | LostGame |  | bool |  |
| EndGameView | OnContinue |  | void |  |
| EndGameView | OnObserve |  | void |  |
| EndGameView | OnQuit |  | void |  |
| EndGameView | Self |  | EndGameView |  |
| EndGameView | WonGame |  | bool |  |
| EndPrepConfirm | AccessSelf |  | EndPrepConfirm |  |
| EndPrepConfirm | Cancel |  | void |  |
| EndPrepConfirm | Confirm |  | void |  |
| EndPrepConfirm | Self |  | EndPrepConfirm |  |
| EntityDesigner | AccessSelf |  | EntityDesigner |  |
| EntityDesigner | AccessUndoer |  | unknown |  |
| EntityDesigner | AnimationStatesButtons |  | unknown |  |
| EntityDesigner | FitCamera |  | void |  |
| EntityDesigner | GetCameraPosX |  | float |  |
| EntityDesigner | GetCameraPosY |  | float |  |
| EntityDesigner | GetCameraPosZ |  | float |  |
| EntityDesigner | HasEntity |  | bool |  |
| EntityDesigner | IsAnimationStatesListVisible |  | bool |  |
| EntityDesigner | IsCameraInfoVisible |  | bool |  |
| EntityDesigner | IsGridVisible |  | bool |  |
| EntityDesigner | IsTabSelected | 1. unknown | bool |  |
| EntityDesigner | IsTabSelectedStr | 1. unknown | bool |  |
| EntityDesigner | OnAnimationStatesButtonViewClicked |  | void |  |
| EntityDesigner | OnEditorSettingsClick |  | void |  |
| EntityDesigner | OnHardcodedTabSelect |  | void |  |
| EntityDesigner | OpenSchematicEditor |  | void |  |
| EntityDesigner | SelectTab | 1. unknown | void |  |
| EntityDesigner | Self |  | EntityDesigner |  |
| EntityDesigner | ToggleBoundsVisible |  | void |  |
| EntityDesigner | ToggleGridVisible |  | void |  |
| EntityDesigner | ToggleSkeletonVisible |  | void |  |
| EntityDesignerPlayer | AccessSelf |  | EntityDesignerPlayer |  |
| EntityDesignerPlayer | AnimationStates |  | unknown |  |
| EntityDesignerPlayer | GetVerticalPolicy |  | unknown |  |
| EntityDesignerPlayer | HasAnimation |  | bool |  |
| EntityDesignerPlayer | IsExpanded |  | bool |  |
| EntityDesignerPlayer | IsLooping |  | bool |  |
| EntityDesignerPlayer | IsPlaying |  | bool |  |
| EntityDesignerPlayer | IsScrubbing |  | bool |  |
| EntityDesignerPlayer | OnScrubChange |  | void |  |
| EntityDesignerPlayer | OnScrubEnd |  | void |  |
| EntityDesignerPlayer | OnScrubStart | 1. unknown | void |  |
| EntityDesignerPlayer | Self |  | EntityDesignerPlayer |  |
| EntityDesignerPlayer | SetAnimationScalingText | 1. unknown | void |  |
| EntityDesignerPlayer | ToggleExpanded |  | void |  |
| EntityDesignerPlayer | ToggleLooping |  | void |  |
| EntityDesignerPlayer | TogglePausePlay |  | void |  |
| EntityDesignerProperties | AccessSelf |  | EntityDesignerProperties |  |
| EntityDesignerProperties | ClearSelection |  | void |  |
| EntityDesignerProperties | IsBloomEvPropertiesVisible |  | bool |  |
| EntityDesignerProperties | IsCubemapEvPropertiesVisible |  | bool |  |
| EntityDesignerProperties | IsEnvSelected |  | bool |  |
| EntityDesignerProperties | IsFogEvPropertiesVisible |  | bool |  |
| EntityDesignerProperties | IsLightEnvPropertiesVisible |  | bool |  |
| EntityDesignerProperties | IsMeshSelected |  | bool |  |
| EntityDesignerProperties | SelectEnvWindow |  | void |  |
| EntityDesignerProperties | SelectMeshWindow |  | void |  |
| EntityDesignerProperties | Self |  | EntityDesignerProperties |  |
| EntityDesignerProperties | ToggleIsBloomEvPropertiesVisible |  | void |  |
| EntityDesignerProperties | ToggleIsCubemapEvPropertiesVisible |  | void |  |
| EntityDesignerProperties | ToggleIsFogEvPropertiesVisible |  | void |  |
| EntityDesignerProperties | ToggleIsLightEnvPropertiesVisible |  | void |  |
| EntityDesignerTab | AccessSelf |  | EntityDesignerTab |  |
| EntityDesignerTab | GetTabId |  | int32 |  |
| EntityDesignerTab | Self |  | EntityDesignerTab |  |
| EntityEditor | AccessSelf |  | EntityEditor |  |
| EntityEditor | AddAudioLayer |  | void |  |
| EntityEditor | AddEntityRemovalLayer |  | void |  |
| EntityEditor | AddEntitySpawnLayer |  | void |  |
| EntityEditor | AddKeyframeOnMouseToHoveredLane |  | void |  |
| EntityEditor | AddKeyframeOnNeedleToHoveredLane |  | void |  |
| EntityEditor | AddVfxLayer |  | void |  |
| EntityEditor | CanInteract |  | bool |  |
| EntityEditor | CurrentAnimationMax |  | float |  |
| EntityEditor | DeleteKeyframe | 1. unknown | void |  |
| EntityEditor | Entity |  | unknown |  |
| EntityEditor | FitCamera |  | void |  |
| EntityEditor | GetLastAutoSaveDuration |  | double |  |
| EntityEditor | GetLastAutoSaveTimestamp |  | unknown |  |
| EntityEditor | HasEntities |  | bool |  |
| EntityEditor | HasEntity |  | bool |  |
| EntityEditor | HasLastSaveTimestamp |  | bool |  |
| EntityEditor | IsAutoSaving |  | bool |  |
| EntityEditor | IsGridVisible |  | bool |  |
| EntityEditor | IsLoading |  | bool |  |
| EntityEditor | IsScrubbing |  | bool |  |
| EntityEditor | IsWorldMuted |  | bool |  |
| EntityEditor | MovePlayerWithKeyframe |  | bool |  |
| EntityEditor | OnAddLayerClick |  | void |  |
| EntityEditor | OnKeyframeClick | 1. unknown 2. unknown | void |  |
| EntityEditor | OnKeyframeMove | 1. unknown 2. unknown | void |  |
| EntityEditor | OnKeyframePressed | 1. unknown 2. unknown | void |  |
| EntityEditor | OnKeyframeReleased | 1. unknown 2. unknown | void |  |
| EntityEditor | OnKeyframeRightClick | 1. unknown | void |  |
| EntityEditor | OnLayerRightClick | 1. unknown | void |  |
| EntityEditor | OnScrubEnd |  | void |  |
| EntityEditor | OnScrubStart |  | void |  |
| EntityEditor | OpenEventEditor | 1. unknown | void |  |
| EntityEditor | SaveChanges |  | void |  |
| EntityEditor | ScrubPlayer |  | void |  |
| EntityEditor | Self |  | EntityEditor |  |
| EntityEditor | SetClickedLane | 1. unknown | void |  |
| EntityEditor | SetMovePlayerWithKeyframe | 1. unknown | void |  |
| EntityEditor | ToggleGridVisible |  | void |  |
| EntityEditor | ToggleMovePlayerWithKeyframe |  | void |  |
| EntityEditor | ToggleMuteWorld |  | void |  |
| EntityEditorAudioEventHandler | AccessSelf |  | EntityEditorAudioEventHandler |  |
| EntityEditorAudioEventHandler | AddSoundParamter | 1. unknown | void |  |
| EntityEditorAudioEventHandler | RemoveLastSoundParameter | 1. unknown | void |  |
| EntityEditorAudioEventHandler | Self |  | EntityEditorAudioEventHandler |  |
| EntityEditorEventLayer | AccessSelf |  | EntityEditorEventLayer |  |
| EntityEditorEventLayer | AddStartEventKeyframe | 1. unknown | void |  |
| EntityEditorEventLayer | HasKeyframes |  | bool |  |
| EntityEditorEventLayer | IsExpanded |  | bool |  |
| EntityEditorEventLayer | IsHovered |  | bool |  |
| EntityEditorEventLayer | Keyframes |  | unknown |  |
| EntityEditorEventLayer | Self |  | EntityEditorEventLayer |  |
| EntityEditorEventLayer | SetHovered | 1. unknown | void |  |
| EntityEditorEventLayer | Title |  | unknown |  |
| EntityEditorEventLayer | ToggleExpanded |  | void |  |
| EntityEditorKeyframe | AccessSelf |  | EntityEditorKeyframe |  |
| EntityEditorKeyframe | HasEvent |  | bool |  |
| EntityEditorKeyframe | IsHovered |  | bool |  |
| EntityEditorKeyframe | IsSelected |  | bool |  |
| EntityEditorKeyframe | IsStartEvent |  | bool |  |
| EntityEditorKeyframe | KeyframeColor |  | CVector4f |  |
| EntityEditorKeyframe | Label |  | CString |  |
| EntityEditorKeyframe | Self |  | EntityEditorKeyframe |  |
| EntityEditorKeyframe | SetHovered | 1. unknown | void |  |
| EntityEditorKeyframe | SetSelected | 1. unknown | void |  |
| EntityEditorKeyframe | TimePoint |  | float |  |
| EntityEditorTimelineState | AccessSelf |  | EntityEditorTimelineState |  |
| EntityEditorTimelineState | AnimationLength |  | float |  |
| EntityEditorTimelineState | KeyframeLayers |  | unknown |  |
| EntityEditorTimelineState | Name |  | unknown |  |
| EntityEditorTimelineState | Self |  | EntityEditorTimelineState |  |
| EntityViewerProperties | AccessSelf |  | EntityViewerProperties |  |
| EntityViewerProperties | ClearSelection |  | void |  |
| EntityViewerProperties | IsBloomEvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsCubemapEvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsEnvSelected |  | bool |  |
| EntityViewerProperties | IsFogEvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsLightEnvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsMeshSelected |  | bool |  |
| EntityViewerProperties | SelectEnvWindow |  | void |  |
| EntityViewerProperties | SelectMeshWindow |  | void |  |
| EntityViewerProperties | Self |  | EntityViewerProperties |  |
| EntityViewerProperties | ToggleIsBloomEvPropertiesVisible |  | void |  |
| EntityViewerProperties | ToggleIsCubemapEvPropertiesVisible |  | void |  |
| EntityViewerProperties | ToggleIsFogEvPropertiesVisible |  | void |  |
| EntityViewerProperties | ToggleIsLightEnvPropertiesVisible |  | void |  |
| EnumSettingEntry | AccessSelf |  | EnumSettingEntry |  |
| EnumSettingEntry | AccessSetting |  | unknown |  |
| EnumSettingEntry | GetEnumString |  | CString |  |
| EnumSettingEntry | GetGUIName |  | CUTF8String |  |
| EnumSettingEntry | GetRecommendedText |  | CString |  |
| EnumSettingEntry | GetTooltip |  | CUTF8String |  |
| EnumSettingEntry | HasValueChanged |  | bool |  |
| EnumSettingEntry | IsSelected |  | bool |  |
| EnumSettingEntry | Self |  | EnumSettingEntry |  |
| Estate | AccessSelf |  | Estate |  |
| Estate | CanCollectTaxes |  | bool |  |
| Estate | CanRaiseLevy |  | bool |  |
| Estate | ExistsForCountry |  | bool |  |
| Estate | GetBalance |  | CFixedPoint |  |
| Estate | GetCollectTaxesInfo |  | CString |  |
| Estate | GetCountry |  | unknown |  |
| Estate | GetCurrentBuildInformation |  | CString |  |
| Estate | GetEstatePowerInfo |  | CString |  |
| Estate | GetEstatePowerInfoBreakdown |  | CString |  |
| Estate | GetExpensesInfo |  | CString |  |
| Estate | GetFoodIncome |  | CFixedPoint |  |
| Estate | GetGold |  | CFixedPoint |  |
| Estate | GetLastMonthIncomeCount |  | uint32 |  |
| Estate | GetLastMonthsExpense |  | CFixedPoint |  |
| Estate | GetLastMonthsIncomeAfterTax |  | CFixedPoint |  |
| Estate | GetLastMonthsIncomeAfterTaxWithTooltip |  | CString |  |
| Estate | GetLastMonthsIncomeBeforeTax |  | CFixedPoint |  |
| Estate | GetLastMonthsTax |  | CFixedPoint |  |
| Estate | GetLeastLikedCountries |  | CString |  |
| Estate | GetLeastLikedCountriesFull |  | CString |  |
| Estate | GetLongName |  | CString |  |
| Estate | GetLongNameWithIcon |  | CString |  |
| Estate | GetLongNameWithIconWithNoTooltip |  | CString |  |
| Estate | GetLongNameWithNoTooltip |  | CString |  |
| Estate | GetMaxTax |  | CString |  |
| Estate | GetMaxTaxValue |  | CFixedPoint |  |
| Estate | GetMinTax |  | CString |  |
| Estate | GetMinTaxValue |  | CFixedPoint |  |
| Estate | GetMonthlySatisfactionChange |  | CFixedPoint |  |
| Estate | GetMonthlySatisfactionChangeInfo |  | CString |  |
| Estate | GetMostLikedCountries |  | CString |  |
| Estate | GetMostLikedCountriesFull |  | CString |  |
| Estate | GetName |  | CString |  |
| Estate | GetNameWithNoIcon |  | CString |  |
| Estate | GetNameWithNoTooltip |  | CString |  |
| Estate | GetNameWithType |  | CString |  |
| Estate | GetPopulationInfo |  | CString |  |
| Estate | GetPowerImpactInfo |  | CString |  |
| Estate | GetPowerImpactTitle |  | CString |  |
| Estate | GetRaiseLevyInfo |  | CString |  |
| Estate | GetRebel |  | unknown |  |
| Estate | GetRelativePower |  | CFixedPoint |  |
| Estate | GetRelativePowerDesc |  | CString |  |
| Estate | GetRelativePowerInfo |  | CString |  |
| Estate | GetRelativePowerModifierEffects |  | CString |  |
| Estate | GetRelativePowerWithTooltip |  | CString |  |
| Estate | GetSatisfaction |  | CFixedPoint |  |
| Estate | GetSatisfactionImpact |  | CString |  |
| Estate | GetSatisfactionTooltip |  | CString |  |
| Estate | GetSatisfactionWithTooltip |  | CString |  |
| Estate | GetTargetSatisfactionInfo |  | CString |  |
| Estate | GetTargetSatisfactionTooltipWrapper |  | CString |  |
| Estate | GetTaxBaseInfo |  | CString |  |
| Estate | GetTaxableIncome |  | CFixedPoint |  |
| Estate | GetTotalPopulation |  | CString |  |
| Estate | GetTotalPopulationNoFormat |  | CFixedPoint |  |
| Estate | GetTradeIncome |  | CFixedPoint |  |
| Estate | GetType |  | unknown |  |
| Estate | GetUITooltip |  | CString |  |
| Estate | HasMonthlySatisfactionChange |  | bool |  |
| Estate | HasRebel |  | bool |  |
| Estate | IsNextBuildSetUp |  | bool |  |
| Estate | MakeScope |  | Scope | Jomini Script System |
| Estate | Self |  | Estate |  |
| EstateOpinionWrap | AccessSelf |  | EstateOpinionWrap |  |
| EstateOpinionWrap | GetCountry |  | unknown |  |
| EstateOpinionWrap | GetEffect |  | CString |  |
| EstateOpinionWrap | GetEstate |  | unknown |  |
| EstateOpinionWrap | GetEstateType |  | unknown |  |
| EstateOpinionWrap | GetTarget |  | unknown |  |
| EstateOpinionWrap | GetTitle |  | CString |  |
| EstateOpinionWrap | Self |  | EstateOpinionWrap |  |
| EstatePrivilege | AccessSelf |  | EstatePrivilege |  |
| EstatePrivilege | GetDesc |  | CString |  |
| EstatePrivilege | GetEffectText |  | CString |  |
| EstatePrivilege | GetEffectsOnActivated |  | CString |  |
| EstatePrivilege | GetEffectsOnDeactivated |  | CString |  |
| EstatePrivilege | GetEffectsOnFullyActivated |  | CString |  |
| EstatePrivilege | GetEstateName |  | CString |  |
| EstatePrivilege | GetLoyaltyEffectsOnGrant |  | CString |  |
| EstatePrivilege | GetName |  | CString |  |
| EstatePrivilege | GetNameWithNoTooltip |  | CString |  |
| EstatePrivilege | GetPower |  | CFixedPoint |  |
| EstatePrivilege | GetPrunedEffect |  | CString |  |
| EstatePrivilege | GetPrunedModifiers |  | CString |  |
| EstatePrivilege | GetRevokeDescription |  | CString |  |
| EstatePrivilege | GetSatisfaction |  | CFixedPoint |  |
| EstatePrivilege | GetScaledPower |  | CFixedPoint |  |
| EstatePrivilege | GetScaledSatisfaction |  | CFixedPoint |  |
| EstatePrivilege | GetSearchableModifiers |  | CString |  |
| EstatePrivilege | GetTooltip |  | CString |  |
| EstatePrivilege | GetType |  | unknown |  |
| EstatePrivilege | HasEffectsOnActivated |  | bool |  |
| EstatePrivilege | HasEffectsOnDeactivated |  | bool |  |
| EstatePrivilege | HasEffectsOnFullyActivated |  | bool |  |
| EstatePrivilege | HasPotential |  | bool |  |
| EstatePrivilege | Self |  | EstatePrivilege |  |
| EstateType | AccessSelf |  | EstateType |  |
| EstateType | GetFlavorText |  | CString |  |
| EstateType | GetMapColor |  | CVector4f |  |
| EstateType | GetName |  | CString |  |
| EstateType | GetNameWithNoIcon |  | CString |  |
| EstateType | GetNameWithNoTooltip |  | CString |  |
| EstateType | GetPopPower |  | CFixedPoint |  |
| EstateType | GetTaxSplit |  | CFixedPoint |  |
| EstateType | GetTooltip |  | CString |  |
| EstateType | IsAlwaysLoyal |  | bool |  |
| EstateType | MakeScope |  | Scope | Jomini Script System |
| EstateType | Self |  | EstateType |  |
| EstatesItem | AccessSelf |  | EstatesItem |  |
| EstatesItem | AddNewPrivilege |  | void |  |
| EstatesItem | GetEstate |  | unknown |  |
| EstatesItem | GetPrivileges |  | unknown |  |
| EstatesItem | GetRelativePower |  | CFixedPoint |  |
| EstatesItem | GetSatisfaction |  | CString |  |
| EstatesItem | Self |  | EstatesItem |  |
| Ethnicity | AccessSelf |  | Ethnicity |  |
| Ethnicity | GetName |  | CString |  |
| Ethnicity | IsVisible |  | bool |  |
| Ethnicity | MakeScope |  | Scope | Jomini Script System |
| Ethnicity | Self |  | Ethnicity |  |
| EthnicityItem | AccessSelf |  | EthnicityItem |  |
| EthnicityItem | GetName |  | CString |  |
| EthnicityItem | Self |  | EthnicityItem |  |
| EventInfo | AccessSelf |  | EventInfo |  |
| EventInfo | GetAsWhoInfo |  | CString |  |
| EventInfo | GetDate |  | CString |  |
| EventInfo | GetName |  | CString |  |
| EventInfo | Self |  | EventInfo |  |
| EventLayerForEntityEditor | AccessSelf |  | EventLayerForEntityEditor |  |
| EventLayerForEntityEditor | HasKeyframes |  | bool |  |
| EventLayerForEntityEditor | IsHovered |  | bool |  |
| EventLayerForEntityEditor | Keyframes |  | unknown |  |
| EventLayerForEntityEditor | Self |  | EventLayerForEntityEditor |  |
| EventLayerForEntityEditor | SetHovered | 1. unknown | void |  |
| EventOption | AccessSelf |  | EventOption |  |
| EventOption | GetEffectDescription |  | CString |  |
| EventOption | GetText |  | CString |  |
| EventOption | GetTooltip |  | CString |  |
| EventOption | HasTrigger |  | bool |  |
| EventOption | IsEvil |  | bool |  |
| EventOption | IsHighReward |  | bool |  |
| EventOption | IsHighRisk |  | bool |  |
| EventOption | IsHistorical |  | bool |  |
| EventOption | IsMoral |  | bool |  |
| EventOption | IsTooltipEmpty |  | bool |  |
| EventOption | KeyEndWith | 1. unknown | bool |  |
| EventOption | Reasons |  | unknown |  |
| EventOption | Select |  | void |  |
| EventOption | Self |  | EventOption |  |
| EventTargetSetupContext | AccessSelf |  | EventTargetSetupContext |  |
| EventTargetSetupContext | Self |  | EventTargetSetupContext |  |
| EventWindow | AccessOptionItemWithKey | 1. unknown | unknown |  |
| EventWindow | AccessSelf |  | EventWindow |  |
| EventWindow | GenerateSceneDesc |  | unknown |  |
| EventWindow | GetDebugInfo |  | CString |  |
| EventWindow | GetDescription |  | CString |  |
| EventWindow | GetEventCategoryIcon |  | unknown |  |
| EventWindow | GetFirstCharacter |  | unknown |  |
| EventWindow | GetHistoricalInfo |  | CString |  |
| EventWindow | GetOptions |  | unknown |  |
| EventWindow | GetSecondCharacter |  | unknown |  |
| EventWindow | GetTimeout |  | CString |  |
| EventWindow | GetTitle |  | CString |  |
| EventWindow | GetUniqueImage |  | unknown |  |
| EventWindow | HasEventCategoryIcon |  | bool |  |
| EventWindow | HasIllustrationTags |  | bool |  |
| EventWindow | HasUniqueImage |  | bool |  |
| EventWindow | IsDynamicHistoricalEvent |  | bool |  |
| EventWindow | IsOptionClicked |  | bool |  |
| EventWindow | IsSingleOptionEvent |  | bool |  |
| EventWindow | Self |  | EventWindow |  |
| EventWindow | ShouldShowScrollBar |  | bool |  |
| ExpandRawGoodsLateralView | AccessSelf |  | ExpandRawGoodsLateralView |  |
| ExpandRawGoodsLateralView | CancelAllLastExpandingLocations |  | void |  |
| ExpandRawGoodsLateralView | ExpandBestFromRankingItemsCtrl |  | void |  |
| ExpandRawGoodsLateralView | ExpandBestFromRankingItemsDefault |  | void |  |
| ExpandRawGoodsLateralView | ExpandBestFromRankingItemsShift |  | void |  |
| ExpandRawGoodsLateralView | FilterByMarket | 1. unknown | void |  |
| ExpandRawGoodsLateralView | GetBestExpandingLocationItem |  | unknown |  |
| ExpandRawGoodsLateralView | GetExpandRankingItems |  | unknown |  |
| ExpandRawGoodsLateralView | GetLastExpandingLocationItem |  | unknown |  |
| ExpandRawGoodsLateralView | GetPlayer |  | unknown |  |
| ExpandRawGoodsLateralView | GetRawGoodLocationItems |  | unknown |  |
| ExpandRawGoodsLateralView | GetRawGoodLocationsSortSearch |  | unknown |  |
| ExpandRawGoodsLateralView | GetSelectedLocation |  | unknown |  |
| ExpandRawGoodsLateralView | GetSelectedMarket |  | unknown |  |
| ExpandRawGoodsLateralView | HasBestExpandingLocationItem |  | bool |  |
| ExpandRawGoodsLateralView | HasLastExpandingLocationItem |  | bool |  |
| ExpandRawGoodsLateralView | IsExpandRawGoodsSelectMarketOpened | 1. unknown | bool |  |
| ExpandRawGoodsLateralView | IsLeftPanel |  | bool |  |
| ExpandRawGoodsLateralView | IsLocationFilterEnabled |  | bool |  |
| ExpandRawGoodsLateralView | IsLocationHightlighted | 1. unknown | bool |  |
| ExpandRawGoodsLateralView | IsMarketFilterEnabled |  | bool |  |
| ExpandRawGoodsLateralView | IsRightPanel |  | bool |  |
| ExpandRawGoodsLateralView | RemoveMarketFilter |  | void |  |
| ExpandRawGoodsLateralView | Self |  | ExpandRawGoodsLateralView |  |
| ExpandRawGoodsLateralView | ToggleExpandRawGoodsSelectMarket | 1. unknown | void |  |
| ExpandRawGoodsSelectMarket | AccessSelf |  | ExpandRawGoodsSelectMarket |  |
| ExpandRawGoodsSelectMarket | OnClose |  | void |  |
| ExpandRawGoodsSelectMarket | Parent |  | unknown |  |
| ExpandRawGoodsSelectMarket | Self |  | ExpandRawGoodsSelectMarket |  |
| ExpansionLateralView | AccessSelf |  | ExpansionLateralView |  |
| ExpansionLateralView | CanRecruit |  | bool |  |
| ExpansionLateralView | GetColonyCategories |  | unknown |  |
| ExpansionLateralView | GetExplorationCategories |  | unknown |  |
| ExpansionLateralView | GetKnownWorldPercentage |  | float |  |
| ExpansionLateralView | GetNumberOfCurrentConquistadors |  | int32 |  |
| ExpansionLateralView | GetNumberOfOngoingColonies |  | int32 |  |
| ExpansionLateralView | GetNumberOfOngoingConquistadors |  | int32 |  |
| ExpansionLateralView | GetPlayer |  | unknown |  |
| ExpansionLateralView | GetProvinces |  | unknown |  |
| ExpansionLateralView | GetRecruitCost |  | CString |  |
| ExpansionLateralView | GetRecruitInfo |  | CString |  |
| ExpansionLateralView | IsLeftPanel |  | bool |  |
| ExpansionLateralView | IsRightPanel |  | bool |  |
| ExpansionLateralView | Recruit |  | void |  |
| ExpansionLateralView | Self |  | ExpansionLateralView |  |
| Exploration | AccessSelf |  | Exploration |  |
| Exploration | GetArea |  | unknown |  |
| Exploration | GetCharacter |  | unknown |  |
| Exploration | GetCurrentProgress |  | CFixedPoint |  |
| Exploration | GetEstimatedFinishDateInfo |  | CString |  |
| Exploration | GetEstimatedFinishDateString |  | CString |  |
| Exploration | GetEstimatedTimeLeft |  | CString |  |
| Exploration | GetExplorationTime |  | CFixedPoint |  |
| Exploration | GetLocation |  | unknown |  |
| Exploration | GetMonthlyCost |  | CFixedPoint |  |
| Exploration | GetMonthlyCostInfo |  | CString |  |
| Exploration | GetMonthlyProgress |  | CFixedPoint |  |
| Exploration | GetMonthlyProgressInfo |  | CString |  |
| Exploration | GetName |  | CString |  |
| Exploration | GetNameWithNoTooltip |  | CString |  |
| Exploration | GetOwner |  | unknown |  |
| Exploration | GetProgressInfo |  | CString |  |
| Exploration | GetProgressNeededInfo |  | CString |  |
| Exploration | GetProgressPercent |  | float |  |
| Exploration | GetUITooltip |  | CString |  |
| Exploration | HasCharacter |  | bool |  |
| Exploration | MakeScope |  | Scope | Jomini Script System |
| Exploration | Self |  | Exploration |  |
| ExplorationCategoryGlue | AccessSelf |  | ExplorationCategoryGlue |  |
| ExplorationCategoryGlue | GetExplorationItems |  | unknown |  |
| ExplorationCategoryGlue | Self |  | ExplorationCategoryGlue |  |
| ExportTool | AccessSelf |  | ExportTool |  |
| ExportTool | CanExport |  | bool |  |
| ExportTool | Cancel |  | void |  |
| ExportTool | CurrentProgress |  | float |  |
| ExportTool | CurrentProgressDesc |  | CString |  |
| ExportTool | Export |  | void |  |
| ExportTool | GetMaskEffect |  | unknown |  |
| ExportTool | GetNotes |  | CString |  |
| ExportTool | GetSelectedMaskIndex |  | CVector2i |  |
| ExportTool | GetTexture |  | unknown |  |
| ExportTool | HasMasks |  | bool |  |
| ExportTool | IsExporting |  | bool |  |
| ExportTool | MaxProgress |  | float |  |
| ExportTool | Self |  | ExportTool |  |
| ExportTool | SetExportNotes |  | void |  |
| ExportTool | SetSelectedMaskIndex |  | void |  |
| ExtraTooltipInfo | AccessSelf |  | ExtraTooltipInfo |  |
| ExtraTooltipInfo | CloseContextMenu |  | void |  |
| ExtraTooltipInfo | GetSectionIndex | 1. unknown | unknown |  |
| ExtraTooltipInfo | GetTintColor |  | CVector4f |  |
| ExtraTooltipInfo | GetTooltiped |  | unknown |  |
| ExtraTooltipInfo | GetUIAction |  | unknown |  |
| ExtraTooltipInfo | HasSections |  | bool |  |
| ExtraTooltipInfo | HasUIAction |  | bool |  |
| ExtraTooltipInfo | IsDelayedInfoShowing |  | bool |  |
| ExtraTooltipInfo | Self |  | ExtraTooltipInfo |  |
| ExtraTooltipInfo | TooltipIsReady |  | bool |  |
| FilterablePropertyList | AccessSelf |  | FilterablePropertyList |  |
| FilterablePropertyList | ClearSearchText |  | void |  |
| FilterablePropertyList | Filter |  | void |  |
| FilterablePropertyList | GetPropertiesLabel |  | CString |  |
| FilterablePropertyList | GetSearchText |  | CString |  |
| FilterablePropertyList | Search |  | void |  |
| FilterablePropertyList | Self |  | FilterablePropertyList |  |
| FilteredSortedList | AccessSelf |  | FilteredSortedList |  |
| FilteredSortedList | GetLastKeyHovered |  | CString |  |
| FilteredSortedList | GetSearchBar |  | unknown |  |
| FilteredSortedList | GetSortKeyButton | 1. unknown | unknown |  |
| FilteredSortedList | GetSortKeys |  | unknown |  |
| FilteredSortedList | IsKeyHovered | 1. unknown | bool |  |
| FilteredSortedList | IsKeyHoveredByWidgetName | 1. unknown | bool |  |
| FilteredSortedList | IsSortedByWidgetName | 1. unknown | bool |  |
| FilteredSortedList | Self |  | FilteredSortedList |  |
| FilteredSortedList | ToggleAll |  | void |  |
| FilteredSortedList | ToggleAllEnabled |  | bool |  |
| FilteredSortedList | WithFilterTags | 1. unknown | unknown |  |
| FindLocationItem | AccessSelf |  | FindLocationItem |  |
| FindLocationItem | AddHighlight |  | void |  |
| FindLocationItem | GetText |  | CString |  |
| FindLocationItem | OnClick |  | void |  |
| FindLocationItem | Self |  | FindLocationItem |  |
| FindLocationView | AccessSelf |  | FindLocationView |  |
| FindLocationView | GetExactMatchesFrame |  | int32 |  |
| FindLocationView | GetLocations |  | unknown |  |
| FindLocationView | GoToFirstLocation |  | void |  |
| FindLocationView | OnClose |  | void |  |
| FindLocationView | OnExactMatchesClick |  | void |  |
| FindLocationView | OnFindTextChanged |  | void |  |
| FindLocationView | Self |  | FindLocationView |  |
| FoodLocationItem | AccessSelf |  | FoodLocationItem |  |
| FoodLocationItem | CanProduceFoodBuildings |  | bool |  |
| FoodLocationItem | CanReduceRGO |  | bool |  |
| FoodLocationItem | CanUpgradeRGO |  | bool |  |
| FoodLocationItem | GetBuildingsUIAction |  | unknown |  |
| FoodLocationItem | GetGoods |  | unknown |  |
| FoodLocationItem | GetLocation |  | unknown |  |
| FoodLocationItem | GetReduceRGOTooltip |  | CString |  |
| FoodLocationItem | GetUpgradeRGOBuildCostAndTime |  | CString |  |
| FoodLocationItem | GetUpgradeRGOBuildTimeBreakdown |  | CString |  |
| FoodLocationItem | GetUpgradeRGOConstructionDemand |  | unknown |  |
| FoodLocationItem | GetUpgradeRGOName |  | CString |  |
| FoodLocationItem | GetUpgradeRGOTooltip |  | CString |  |
| FoodLocationItem | HasFoodGoods |  | bool |  |
| FoodLocationItem | HasUpgradeRGOConstructionDemand |  | bool |  |
| FoodLocationItem | ReduceRGO |  | void |  |
| FoodLocationItem | Self |  | FoodLocationItem |  |
| FoodLocationItem | ShowReduceRGO |  | bool |  |
| FoodLocationItem | ShowUpgradeRGO |  | bool |  |
| FoodLocationItem | UpgradeRGO |  | void |  |
| FoodOwner | AccessSelf |  | FoodOwner |  |
| FoodOwner | GetCurrentFood |  | CFixedPoint |  |
| FoodOwner | Self |  | FoodOwner |  |
| FoodProductionLateralView | AccessSelf |  | FoodProductionLateralView |  |
| FoodProductionLateralView | FilterByMarket | 1. unknown | void |  |
| FoodProductionLateralView | GetFoodChange |  | CFixedPoint |  |
| FoodProductionLateralView | GetFoodChangeTooltip |  | CString |  |
| FoodProductionLateralView | GetFoodProductionList |  | unknown |  |
| FoodProductionLateralView | GetFoodProductionListSortSearch |  | unknown |  |
| FoodProductionLateralView | GetPlayer |  | unknown |  |
| FoodProductionLateralView | GetSelectedMarket |  | unknown |  |
| FoodProductionLateralView | GetSelectedProvince |  | unknown |  |
| FoodProductionLateralView | IsFoodProductionSelectMarketOpened | 1. unknown | bool |  |
| FoodProductionLateralView | IsLeftPanel |  | bool |  |
| FoodProductionLateralView | IsMarketFilterEnabled |  | bool |  |
| FoodProductionLateralView | IsProvinceFilterEnabled |  | bool |  |
| FoodProductionLateralView | IsRightPanel |  | bool |  |
| FoodProductionLateralView | RemoveMarketFilter |  | void |  |
| FoodProductionLateralView | Self |  | FoodProductionLateralView |  |
| FoodProductionLateralView | ToggleFoodProductionSelectMarket | 1. unknown | void |  |
| FoodProductionListItem | AccessLocationItem |  | unknown |  |
| FoodProductionListItem | AccessProvinceItem |  | unknown |  |
| FoodProductionListItem | AccessSelf |  | FoodProductionListItem |  |
| FoodProductionListItem | IsLocationItem |  | bool |  |
| FoodProductionListItem | IsProvinceItem |  | bool |  |
| FoodProductionListItem | Self |  | FoodProductionListItem |  |
| FoodProductionSelectMarket | AccessSelf |  | FoodProductionSelectMarket |  |
| FoodProductionSelectMarket | OnClose |  | void |  |
| FoodProductionSelectMarket | Parent |  | unknown |  |
| FoodProductionSelectMarket | Self |  | FoodProductionSelectMarket |  |
| FoodProvinceItem | AccessSelf |  | FoodProvinceItem |  |
| FoodProvinceItem | GetProvince |  | unknown |  |
| FoodProvinceItem | IsExpanded |  | bool |  |
| FoodProvinceItem | Self |  | FoodProvinceItem |  |
| FoodProvinceItem | Toggle |  | void |  |
| ForeignBuildingLocationItem | AccessSelf |  | ForeignBuildingLocationItem |  |
| ForeignBuildingLocationItem | CanDestroyBuilding | 1. unknown | bool |  |
| ForeignBuildingLocationItem | CanDestroyBuildingDesc | 1. unknown | CString |  |
| ForeignBuildingLocationItem | DestroyBuilding | 1. unknown | void |  |
| ForeignBuildingLocationItem | GetBuildings |  | unknown |  |
| ForeignBuildingLocationItem | GetLocation |  | unknown |  |
| ForeignBuildingLocationItem | IsExpanded |  | bool |  |
| ForeignBuildingLocationItem | Self |  | ForeignBuildingLocationItem |  |
| ForeignBuildingLocationItem | Toggle |  | void |  |
| ForeignCountrySelectCountry | AccessSelf |  | ForeignCountrySelectCountry |  |
| ForeignCountrySelectCountry | OnClose |  | void |  |
| ForeignCountrySelectCountry | Parent |  | unknown |  |
| ForeignCountrySelectCountry | Self |  | ForeignCountrySelectCountry |  |
| ForeignCountryView | AccessSelf |  | ForeignCountryView |  |
| ForeignCountryView | GetCategoryItems |  | unknown |  |
| ForeignCountryView | GetCharacters |  | unknown |  |
| ForeignCountryView | GetCharactersSortSearch |  | unknown |  |
| ForeignCountryView | GetColonialCharters |  | unknown |  |
| ForeignCountryView | GetCountry |  | unknown |  |
| ForeignCountryView | GetCountryPointer |  | unknown |  |
| ForeignCountryView | GetDefaultCategory |  | unknown |  |
| ForeignCountryView | GetDiploCategoriesSortSearch |  | unknown |  |
| ForeignCountryView | GetDiplomaticAction | 1. unknown | unknown |  |
| ForeignCountryView | GetDiplomaticRange |  | int32 |  |
| ForeignCountryView | GetDiplomaticRangeTooltip |  | CString |  |
| ForeignCountryView | GetDiplomaticRelations |  | unknown |  |
| ForeignCountryView | GetDiplomaticRelationsSortSearch |  | unknown |  |
| ForeignCountryView | GetEstates |  | unknown |  |
| ForeignCountryView | GetGreatPowerIcon |  | unknown |  |
| ForeignCountryView | GetHeirSelection |  | unknown |  |
| ForeignCountryView | GetInternationalOrganizations |  | unknown |  |
| ForeignCountryView | GetLandComparisonTooltip |  | CString |  |
| ForeignCountryView | GetLaws |  | unknown |  |
| ForeignCountryView | GetNavalComparisonTooltip |  | CString |  |
| ForeignCountryView | GetPercentageLandCombatStrength |  | CFixedPoint |  |
| ForeignCountryView | GetPercentageNavalCombatStrength |  | CFixedPoint |  |
| ForeignCountryView | GetPlayer |  | unknown |  |
| ForeignCountryView | GetQuickDiplomaticActions |  | unknown |  |
| ForeignCountryView | GetRank |  | int32 |  |
| ForeignCountryView | GetReforms |  | unknown |  |
| ForeignCountryView | GetReformsCount |  | CFixedPoint |  |
| ForeignCountryView | GetRelativePowerDescription |  | CString |  |
| ForeignCountryView | GetRelativePowerTooltipGlue |  | unknown |  |
| ForeignCountryView | GetRulerTermEntries |  | unknown |  |
| ForeignCountryView | GetTopSocietalValues |  | unknown |  |
| ForeignCountryView | GetTraits |  | unknown |  |
| ForeignCountryView | GetWarUIAction |  | unknown |  |
| ForeignCountryView | GetWars |  | unknown |  |
| ForeignCountryView | HasRulingHistory |  | bool |  |
| ForeignCountryView | IsBuildingList |  | bool |  |
| ForeignCountryView | IsForeignCountrySelectCountryOpened | 1. unknown | bool |  |
| ForeignCountryView | IsGreatPower |  | bool |  |
| ForeignCountryView | IsLeftPanel |  | bool |  |
| ForeignCountryView | IsRelativePowerOver | 1. unknown | bool |  |
| ForeignCountryView | IsRelativePowerUnder | 1. unknown | bool |  |
| ForeignCountryView | IsRightPanel |  | bool |  |
| ForeignCountryView | Self |  | ForeignCountryView |  |
| ForeignCountryView | ToggleForeignCountrySelectCountry | 1. unknown | void |  |
| FormNewCountry | AccessSelf |  | FormNewCountry |  |
| FormNewCountry | GetCandidates |  | unknown |  |
| FormNewCountry | GetRankCandidates |  | unknown |  |
| FormNewCountry | Self |  | FormNewCountry |  |
| FormableCountry | AccessSelf |  | FormableCountry |  |
| FormableCountry | GetBaseRequirements |  | CString |  |
| FormableCountry | GetDebugText |  | CString |  |
| FormableCountry | GetDescription |  | CString |  |
| FormableCountry | GetEffects |  | CString |  |
| FormableCountry | GetFlagTag |  | CString |  |
| FormableCountry | GetFlavorText |  | CString |  |
| FormableCountry | GetLocationRequirementsTooltip |  | CString |  |
| FormableCountry | GetName |  | CString |  |
| FormableCountry | GetNameWithNoTooltip |  | CString |  |
| FormableCountry | GetPossibleAdvances |  | CString |  |
| FormableCountry | GetRank |  | CString |  |
| FormableCountry | GetRankNum |  | CFixedPoint |  |
| FormableCountry | GetRankRomanNumeral |  | CString |  |
| FormableCountry | GetRankShort |  | CString |  |
| FormableCountry | GetRequiredLocations |  | unknown |  |
| FormableCountry | GetRequirements |  | CString |  |
| FormableCountry | GetTag |  | CString |  |
| FormableCountry | GetTooltip |  | CString |  |
| FormableCountry | HasPossibleAdvances |  | bool |  |
| FormableCountry | MakeScope |  | Scope | Jomini Script System |
| FormableCountry | Self |  | FormableCountry |  |
| FormattedTooltipWrap | AccessSelf |  | FormattedTooltipWrap |  |
| FormattedTooltipWrap | BuildRows | 1. unknown | void |  |
| FormattedTooltipWrap | BuildRowsWithTitle | 1. unknown | void |  |
| FormattedTooltipWrap | GetDesc |  | CString |  |
| FormattedTooltipWrap | GetEstate |  | unknown |  |
| FormattedTooltipWrap | GetListTitle |  | CString |  |
| FormattedTooltipWrap | GetName |  | CString |  |
| FormattedTooltipWrap | GetRows |  | unknown |  |
| FormattedTooltipWrap | HasListTitle |  | bool |  |
| FormattedTooltipWrap | Self |  | FormattedTooltipWrap |  |
| FortFlipRestoreMarker | AccessSelf |  | FortFlipRestoreMarker |  |
| FortFlipRestoreMarker | GetLocation |  | unknown |  |
| FortFlipRestoreMarker | GetProgress |  | float |  |
| FortFlipRestoreMarker | GetTooltip |  | CString |  |
| FortFlipRestoreMarker | Self |  | FortFlipRestoreMarker |  |
| FortMarker | AccessSelf |  | FortMarker |  |
| FortMarker | GetFrame |  | int32 |  |
| FortMarker | GetLocation |  | unknown |  |
| FortMarker | GetSiege |  | unknown |  |
| FortMarker | GetSiegeTooltip |  | CString |  |
| FortMarker | GetTooltip |  | CString |  |
| FortMarker | HasSiege |  | bool |  |
| FortMarker | IsOccupied |  | bool |  |
| FortMarker | OnClick |  | void |  |
| FortMarker | Self |  | FortMarker |  |
| Friend | AccessSelf |  | Friend |  |
| Friend | GetAvailabilityString |  | CUTF8String |  |
| Friend | GetName |  | CUTF8String |  |
| Friend | GetNameWithColor |  | CUTF8String |  |
| Friend | GetUnreadMessageCount |  | int32 |  |
| Friend | HasUnreadMessages |  | bool |  |
| Friend | RemoveWithConfirmation |  | void |  |
| Friend | Self |  | Friend |  |
| Friend | StartChat |  | void |  |
| FriendListWindow | AccessSelf |  | FriendListWindow |  |
| FriendListWindow | Hide |  | void |  |
| FriendListWindow | Self |  | FriendListWindow |  |
| FriendListWindow | ShouldBeShown |  | bool |  |
| FriendListWindow | Show |  | void |  |
| FriendListWindow | ShowAddFriendWindow |  | void |  |
| FriendRequest | Accept |  | void |  |
| FriendRequest | AccessSelf |  | FriendRequest |  |
| FriendRequest | GetName |  | CUTF8String |  |
| FriendRequest | Reject |  | void |  |
| FriendRequest | Self |  | FriendRequest |  |
| FriendSearchResult | AccessSelf |  | FriendSearchResult |  |
| FriendSearchResult | AddFriend |  | void |  |
| FriendSearchResult | GetName |  | CUTF8String |  |
| FriendSearchResult | Self |  | FriendSearchResult |  |
| Friends | AccessAvailabilityEntries |  | unknown |  |
| Friends | AccessFriendRequests |  | unknown |  |
| Friends | AccessFriendSearchResults |  | unknown |  |
| Friends | AccessFriends |  | unknown |  |
| Friends | AccessOutgoingFriendRequests |  | unknown |  |
| Friends | AccessSelf |  | Friends |  |
| Friends | CalcNumberOfOnlineFriends |  | int32 |  |
| Friends | GetAvailabilityStringForLocalAccount |  | CUTF8String |  |
| Friends | GetLocalProfileName |  | CUTF8String |  |
| Friends | GetSearchString |  | CUTF8String |  |
| Friends | GetSelectedAvailabilityEntryIndex |  | CVector2i |  |
| Friends | HasIngoingFriendRequests |  | bool |  |
| Friends | HasOutgoingFriendRequests |  | bool |  |
| Friends | Search |  | void |  |
| Friends | Self |  | Friends |  |
| Friends | SetSearchString |  | void |  |
| Friends | SetSelectedAvailabilityEntryIndex |  | void |  |
| Friends | UpdateFriends |  | void |  |
| FrontEndCreditsView | AccessSelf |  | FrontEndCreditsView |  |
| FrontEndCreditsView | OnBack |  | void |  |
| FrontEndCreditsView | Self |  | FrontEndCreditsView |  |
| FrontEndLoadView | AccessSelf |  | FrontEndLoadView |  |
| FrontEndLoadView | IsMultiplayer |  | bool |  |
| FrontEndLoadView | OnBack |  | void |  |
| FrontEndLoadView | Self |  | FrontEndLoadView |  |
| FrontEndLoadView | SetInitSettings | 1. unknown 2. unknown | void |  |
| FrontEndMainView | AccessMarketingContainer |  | unknown |  |
| FrontEndMainView | AccessSelf |  | FrontEndMainView |  |
| FrontEndMainView | CanSelectLanguageNow |  | bool |  |
| FrontEndMainView | CanShowMarketing |  | bool |  |
| FrontEndMainView | CanStartIndexingSaves |  | bool |  |
| FrontEndMainView | CanStartIndexingSavesDesc |  | CString |  |
| FrontEndMainView | DoesLatestPlaythroughSaveExist |  | bool |  |
| FrontEndMainView | GetLanguageChoices |  | unknown |  |
| FrontEndMainView | GetLatestPlaythroughTooltip |  | CString |  |
| FrontEndMainView | GetMultiplayerDesc |  | CString |  |
| FrontEndMainView | GetUnviewedLegalDocumentsDesc |  | CString |  |
| FrontEndMainView | HasLatestPlaythrough |  | bool |  |
| FrontEndMainView | HasSelectedLanguageAndWaitingForReload |  | bool |  |
| FrontEndMainView | HasUnviewedLegalDocuments |  | bool |  |
| FrontEndMainView | HideAllViews |  | void |  |
| FrontEndMainView | HideNewGameWelcome |  | void |  |
| FrontEndMainView | IsFirstTimePlaying |  | bool |  |
| FrontEndMainView | IsModsOpen |  | bool |  |
| FrontEndMainView | IsNewGameWelcomeShowing |  | bool |  |
| FrontEndMainView | IsPlayerProficiency | 1. unknown | bool |  |
| FrontEndMainView | IsShowingInitialLanguageSelection |  | bool |  |
| FrontEndMainView | OnContinue |  | void |  |
| FrontEndMainView | OnCredits |  | void |  |
| FrontEndMainView | OnHost |  | void |  |
| FrontEndMainView | OnHostLoad |  | void |  |
| FrontEndMainView | OnJoinGame |  | void |  |
| FrontEndMainView | OnLoad |  | void |  |
| FrontEndMainView | OnQuit |  | void |  |
| FrontEndMainView | OnSettings |  | void |  |
| FrontEndMainView | OnSinglePlayer |  | void |  |
| FrontEndMainView | OpenAchievements |  | void |  |
| FrontEndMainView | PromptNewGame |  | void |  |
| FrontEndMainView | SelectLanguage | 1. unknown | void |  |
| FrontEndMainView | Self |  | FrontEndMainView |  |
| FrontEndMainView | ShowNewGameWelcome |  | void |  |
| FrontEndMainView | StartNewGame |  | void |  |
| FrontEndMainView | ToggleOpenMods |  | void |  |
| FrontEndMultiplayerView | AccessSelf |  | FrontEndMultiplayerView |  |
| FrontEndMultiplayerView | OnBack |  | void |  |
| FrontEndMultiplayerView | OnHost |  | void |  |
| FrontEndMultiplayerView | OnLoad |  | void |  |
| FrontEndMultiplayerView | OnNewGame |  | void |  |
| FrontEndMultiplayerView | Self |  | FrontEndMultiplayerView |  |
| FrontEndSinglePlayerView | AccessSelf |  | FrontEndSinglePlayerView |  |
| FrontEndSinglePlayerView | HasSelectedScenario |  | bool |  |
| FrontEndSinglePlayerView | IsProficiencySelected | 1. unknown | bool |  |
| FrontEndSinglePlayerView | IsScenarioSelected | 1. unknown | bool |  |
| FrontEndSinglePlayerView | OnBack |  | void |  |
| FrontEndSinglePlayerView | SelectProficiency | 1. unknown | void |  |
| FrontEndSinglePlayerView | SelectScenario | 1. unknown | void |  |
| FrontEndSinglePlayerView | Self |  | FrontEndSinglePlayerView |  |
| FrontEndSinglePlayerView | StartGame | 1. unknown | void |  |
| FrontEndSinglePlayerView | ToCountrySelect |  | void |  |
| FrontEndView | AccessMarketingContainer |  | unknown |  |
| FrontEndView | AccessSelf |  | FrontEndView |  |
| FrontEndView | Self |  | FrontEndView |  |
| GUIAchievement | AccessLockedTexture |  | unknown |  |
| GUIAchievement | AccessSelf |  | GUIAchievement |  |
| GUIAchievement | AccessTexture |  | unknown |  |
| GUIAchievement | GetAchievement |  | unknown |  |
| GUIAchievement | GetDescription |  | CUTF8String |  |
| GUIAchievement | GetHappenedDescription |  | CUTF8String |  |
| GUIAchievement | GetName |  | CUTF8String |  |
| GUIAchievement | IsPossible |  | bool |  |
| GUIAchievement | OnClick |  | void |  |
| GUIAchievement | Remove |  | void |  |
| GUIAchievement | Self |  | GUIAchievement |  |
| GameConceptTooltip | AccessSelf |  | GameConceptTooltip |  |
| GameConceptTooltip | GetDescription |  | CString |  |
| GameConceptTooltip | GetFamilyLink |  | CString |  |
| GameConceptTooltip | GetFrame |  | int32 |  |
| GameConceptTooltip | GetFrameSize |  | CVector2i |  |
| GameConceptTooltip | GetIcon |  | unknown |  |
| GameConceptTooltip | GetName |  | CString |  |
| GameConceptTooltip | GetOriginalAliasName |  | CString |  |
| GameConceptTooltip | GetParentText |  | CString |  |
| GameConceptTooltip | GetTexture |  | unknown |  |
| GameConceptTooltip | HasFamily |  | bool |  |
| GameConceptTooltip | HasIcon |  | bool |  |
| GameConceptTooltip | Self |  | GameConceptTooltip |  |
| GameDLC | AccessSelf |  | GameDLC |  |
| GameDLC | GetActivateDesc |  | CString |  |
| GameDLC | GetDesc |  | CString |  |
| GameDLC | GetIcon |  | unknown |  |
| GameDLC | GetName |  | CString |  |
| GameDLC | GetTooltip |  | CString |  |
| GameDLC | GetTooltipBackground |  | unknown |  |
| GameDLC | GetTooltipDesc |  | CString |  |
| GameDLC | IsActivated |  | bool |  |
| GameDLC | IsInstalled |  | bool |  |
| GameDLC | IsOwned |  | bool |  |
| GameDLC | OnClick |  | void |  |
| GameDLC | OpenURL |  | void |  |
| GameDLC | Self |  | GameDLC |  |
| GameDLC | ToggleModsGui |  | void |  |
| GameEncyclopedia | AccessSelf |  | GameEncyclopedia |  |
| GameEncyclopedia | GetCurrentMaxSubpageNumber |  | int32 |  |
| GameEncyclopedia | GetCurrentSubPageViewedEntries |  | unknown |  |
| GameEncyclopedia | GetCurrentSubpageNumber |  | int32 |  |
| GameEncyclopedia | GoToEditBoxSubPage |  | void |  |
| GameEncyclopedia | GoToNextSubPage |  | void |  |
| GameEncyclopedia | GoToPreviousSubPage |  | void |  |
| GameEncyclopedia | Self |  | GameEncyclopedia |  |
| GameEncyclopedia | SetCurrentPage | 1. unknown | void |  |
| GameLobby | AccessSelf |  | GameLobby |  |
| GameLobby | CanJoin |  | bool |  |
| GameLobby | CanJoinTT |  | CString |  |
| GameLobby | CanOpenMultiplayer |  | bool |  |
| GameLobby | CanOpenMultiplayerTT |  | CString |  |
| GameLobby | CanStart |  | bool |  |
| GameLobby | CanStartTT |  | CString |  |
| GameLobby | CanToggleObserve |  | bool |  |
| GameLobby | CanUnSelect |  | bool |  |
| GameLobby | GetDiplomaticRelations |  | unknown |  |
| GameLobby | GetDiplomaticRelationsSortSearch |  | unknown |  |
| GameLobby | GetLeaderOfInternationalOrganizations |  | unknown |  |
| GameLobby | GetMemberOfInternationalOrganizations |  | unknown |  |
| GameLobby | GetPassword |  | CString |  |
| GameLobby | GetPlayersReadyCount |  | int32 |  |
| GameLobby | GetSelectedCountry |  | unknown |  |
| GameLobby | GetUniqueContentCategories |  | unknown |  |
| GameLobby | GetUniqueContentCategoriesSortSearch |  | unknown |  |
| GameLobby | GetUniqueContentDescription |  | unknown |  |
| GameLobby | GetWaitForOpenToMultiplayer |  | bool |  |
| GameLobby | IsAutoAccept |  | bool |  |
| GameLobby | IsCountryTabContent |  | bool |  |
| GameLobby | IsCountryTabDescription |  | bool |  |
| GameLobby | IsCountryTabOverview |  | bool |  |
| GameLobby | IsInvite |  | bool |  |
| GameLobby | IsStarting |  | bool |  |
| GameLobby | OpenMultiplayer |  | void |  |
| GameLobby | Ready |  | void |  |
| GameLobby | Self |  | GameLobby |  |
| GameLobby | SetCountryTabContent |  | void |  |
| GameLobby | SetCountryTabDescription |  | void |  |
| GameLobby | SetCountryTabOverview |  | void |  |
| GameLobby | SetNameNoServer |  | void |  |
| GameLobby | SetPassword |  | void |  |
| GameLobby | SetPasswordNoServer |  | void |  |
| GameLobby | SetRandomPlayableObserverCharacter |  | void |  |
| GameLobby | StartGame |  | void |  |
| GameLobby | ToggleAutoAccept |  | void |  |
| GameLobby | ToggleObserve |  | void |  |
| GameLobby | ToggleObserveTT |  | CString |  |
| GameLobby | ToggleVisibility |  | void |  |
| GameLobby | Vars |  | unknown |  |
| GameMpSetup | AccessSelf |  | GameMpSetup |  |
| GameMpSetup | CanLoad |  | bool |  |
| GameMpSetup | GetLoadTooltip |  | CString |  |
| GameMpSetup | OnBack |  | void |  |
| GameMpSetup | OnLoad |  | void |  |
| GameMpSetup | OnStart |  | void |  |
| GameMpSetup | Self |  | GameMpSetup |  |
| GameResignConfirmationWindow | AccessSelf |  | GameResignConfirmationWindow |  |
| GameResignConfirmationWindow | Self |  | GameResignConfirmationWindow |  |
| GameResignConfirmationWindow | ToggleShouldSaveAndRemember |  | void |  |
| GameRule | AccessSelf |  | GameRule |  |
| GameRule | GetName |  | CString |  |
| GameRule | GetSettings |  | unknown |  |
| GameRule | Self |  | GameRule |  |
| GameRuleSetting | AccessSelf |  | GameRuleSetting |  |
| GameRuleSetting | GetDescription |  | CString |  |
| GameRuleSetting | GetKey |  | CString |  |
| GameRuleSetting | GetName |  | CString |  |
| GameRuleSetting | HasFlag | 1. unknown | bool |  |
| GameRuleSetting | Self |  | GameRuleSetting |  |
| GameSaveNameWindow | AccessSelf |  | GameSaveNameWindow |  |
| GameSaveNameWindow | CheckAndSave |  | void |  |
| GameSaveNameWindow | GetDefaultPlaythroughSaveName |  | CUTF8String |  |
| GameSaveNameWindow | IsIronmanSave |  | bool |  |
| GameSaveNameWindow | IsSaveOk |  | bool |  |
| GameSaveNameWindow | Self |  | GameSaveNameWindow |  |
| GeneCategory | AccessSelf |  | GeneCategory |  |
| GeneCategory | GetName |  | CString |  |
| GeneCategory | IsType | 1. unknown | bool |  |
| GeneCategory | Self |  | GeneCategory |  |
| GeneItem | AccessSelf |  | GeneItem |  |
| GeneItem | GetName |  | CString |  |
| GeneItem | Self |  | GeneItem |  |
| GeneTemplate | AccessSelf |  | GeneTemplate |  |
| GeneTemplate | GetName |  | CString |  |
| GeneTemplate | Self |  | GeneTemplate |  |
| GenerationItem | AccessSelf |  | GenerationItem |  |
| GenerationItem | GetChildPortraitItems |  | unknown |  |
| GenerationItem | Self |  | GenerationItem |  |
| GenericAction | AccessSelf |  | GenericAction |  |
| GenericAction | GetBasicTooltip |  | CString |  |
| GenericAction | GetIcon |  | unknown |  |
| GenericAction | GetKey |  | CString |  |
| GenericAction | GetLeftClickAndHoldKey |  | CString |  |
| GenericAction | GetLeftClickKey |  | CString |  |
| GenericAction | GetName |  | CString |  |
| GenericAction | GetNameWithNoTooltip |  | CString |  |
| GenericAction | HasIcon |  | bool |  |
| GenericAction | IsEnabled | 1. unknown 2. unknown | bool |  |
| GenericAction | IsEnabledForCountry | 1. unknown | bool |  |
| GenericAction | IsVisible | 1. unknown 2. unknown | bool |  |
| GenericAction | IsVisibleForCountry | 1. unknown | bool |  |
| GenericAction | MakeScope |  | Scope | Jomini Script System |
| GenericAction | Self |  | GenericAction |  |
| GeographyGlue | AccessSelf |  | GeographyGlue |  |
| GeographyGlue | GetIndentation |  | CString |  |
| GeographyGlue | GetNameWithNoTooltip |  | CString |  |
| GeographyGlue | IsOpen |  | bool |  |
| GeographyGlue | IsPartiallySelected |  | bool |  |
| GeographyGlue | IsSelected |  | bool |  |
| GeographyGlue | Self |  | GeographyGlue |  |
| GeographyGlue | ToggleAll |  | void |  |
| GeographyGlue | ToggleAllOpen |  | void |  |
| GeographyGlue | ToggleOpen |  | void |  |
| GeographyGlue | ToggleSelection |  | void |  |
| GfxSkin | AccessSelf |  | GfxSkin |  |
| GfxSkin | GetFolders |  | unknown |  |
| GfxSkin | GetName |  | CString |  |
| GfxSkin | GetPath |  | CString |  |
| GfxSkin | GetTextures |  | unknown |  |
| GfxSkin | Self |  | GfxSkin |  |
| God | AccessSelf |  | God |  |
| God | GetActiveEffects |  | CString |  |
| God | GetDesc |  | CString |  |
| God | GetEffects |  | CString |  |
| God | GetFavouringGodKey |  | CString |  |
| God | GetIconEffects |  | CString |  |
| God | GetName |  | CString |  |
| God | GetNameWithNoTooltip |  | CString |  |
| God | GetTooltip |  | CString |  |
| God | MakeScope |  | Scope | Jomini Script System |
| God | Self |  | God |  |
| GodWithReligionWrap | AccessSelf |  | GodWithReligionWrap |  |
| GodWithReligionWrap | GetGod |  | unknown |  |
| GodWithReligionWrap | GetName |  | CString |  |
| GodWithReligionWrap | GetReligion |  | unknown |  |
| GodWithReligionWrap | GetTooltip |  | CString |  |
| GodWithReligionWrap | Self |  | GodWithReligionWrap |  |
| GoodItem | AccessSelf |  | GoodItem |  |
| GoodItem | AreAllPossibleRGOAtMaxLvl |  | bool |  |
| GoodItem | ArePopsMissingGoods |  | bool |  |
| GoodItem | AreRebelPopsMissingGoods |  | bool |  |
| GoodItem | CanBuildBuildings |  | bool |  |
| GoodItem | CanExpandRGO |  | bool |  |
| GoodItem | CanExportToSelectedMarket |  | bool |  |
| GoodItem | CanImportFromSelectedMarket |  | bool |  |
| GoodItem | GetBuildingsMissingGoods |  | CString |  |
| GoodItem | GetConstructionsMissingGoods |  | CString |  |
| GoodItem | GetGoods |  | unknown |  |
| GoodItem | GetMaxBuildingProfit |  | CFixedPoint |  |
| GoodItem | GetMaxRGOProfit |  | CFixedPoint |  |
| GoodItem | GetPopsMissingGoods |  | CString |  |
| GoodItem | IsBuildingMissingGood |  | bool |  |
| GoodItem | IsGovernmentMissingGood |  | bool |  |
| GoodItem | Self |  | GoodItem |  |
| Goods | AccessSelf |  | Goods |  |
| Goods | GenerateDescForCountry | 1. unknown 2. unknown 3. unknown | CString |  |
| Goods | GetBaseProduction |  | CFixedPoint |  |
| Goods | GetCategoryName |  | CString |  |
| Goods | GetDefaultMarketPrice |  | CFixedPoint |  |
| Goods | GetDemands |  | unknown |  |
| Goods | GetDemandsForBuildings |  | CString |  |
| Goods | GetDemandsInfo |  | CString |  |
| Goods | GetFlavorText |  | CString |  |
| Goods | GetFoodOutput |  | CFixedPoint |  |
| Goods | GetGameConceptFromCategory |  | CString |  |
| Goods | GetIcon |  | CString |  |
| Goods | GetIconNoKey |  | CString |  |
| Goods | GetKey |  | CString |  |
| Goods | GetMarketInfo | 1. unknown | CString |  |
| Goods | GetName |  | CString |  |
| Goods | GetNameNoUnderline |  | CString |  |
| Goods | GetNameWithNoTooltip |  | unknown |  |
| Goods | GetNumDemands |  | int32 |  |
| Goods | GetNumSources |  | int32 |  |
| Goods | GetPresentInContinent | 1. unknown | CString |  |
| Goods | GetPresentOutsideContinent | 1. unknown | CString |  |
| Goods | GetPriceDifferenceIconName | 1. unknown | CString |  |
| Goods | GetRGOName |  | CString |  |
| Goods | GetRawMaterialMethodInfo |  | CString |  |
| Goods | GetSources |  | CString |  |
| Goods | GetTooltip |  | CString |  |
| Goods | GetTransportWeight |  | CFixedPoint |  |
| Goods | GetUpgradeRGOName |  | CString |  |
| Goods | HasBaseProduction |  | bool |  |
| Goods | HasDemands |  | bool |  |
| Goods | IsFood |  | bool |  |
| Goods | IsRawMaterial |  | bool |  |
| Goods | MakeScope |  | Scope | Jomini Script System |
| Goods | Self |  | Goods |  |
| GoodsDemand | AccessSelf |  | GoodsDemand |  |
| GoodsDemand | GetCategory |  | unknown |  |
| GoodsDemand | GetDesc |  | CString |  |
| GoodsDemand | GetEntries |  | unknown |  |
| GoodsDemand | GetInfo |  | CString |  |
| GoodsDemand | GetInfoForUI |  | CString |  |
| GoodsDemand | GetMarketDemandsIntro | 1. unknown | CString |  |
| GoodsDemand | GetName |  | CString |  |
| GoodsDemand | GetNameForTooltip |  | CString |  |
| GoodsDemand | GetNameWithNoTooltip |  | CString |  |
| GoodsDemand | MakeScope |  | Scope | Jomini Script System |
| GoodsDemand | Self |  | GoodsDemand |  |
| GoodsDemandEntry | AccessSelf |  | GoodsDemandEntry |  |
| GoodsDemandEntry | GetGoods |  | unknown |  |
| GoodsDemandEntry | GetMarketCost | 1. unknown | CFixedPoint |  |
| GoodsDemandEntry | GetPriceImpactInfo | 1. unknown | CString |  |
| GoodsDemandEntry | GetValue |  | CFixedPoint |  |
| GoodsDemandEntry | Self |  | GoodsDemandEntry |  |
| GoodsDetailsLateralView | AccessSelf |  | GoodsDetailsLateralView |  |
| GoodsDetailsLateralView | DoesPopTypeNeed | 1. unknown | bool |  |
| GoodsDetailsLateralView | GetCurrentNeeds |  | CFixedPoint |  |
| GoodsDetailsLateralView | GetCurrentNeedsInfo |  | CString |  |
| GoodsDetailsLateralView | GetGoods |  | unknown |  |
| GoodsDetailsLateralView | GetGoodsInMarkets |  | unknown |  |
| GoodsDetailsLateralView | GetHighestMarketPriceInfo |  | CString |  |
| GoodsDetailsLateralView | GetIsInReactiveMode |  | bool |  |
| GoodsDetailsLateralView | GetLowestMarketPriceInfo |  | CString |  |
| GoodsDetailsLateralView | GetPlayer |  | unknown |  |
| GoodsDetailsLateralView | GetPopsNeedingInfo | 1. unknown | CString |  |
| GoodsDetailsLateralView | GetSources |  | unknown |  |
| GoodsDetailsLateralView | IsAnyPopNeed |  | bool |  |
| GoodsDetailsLateralView | IsLeftPanel |  | bool |  |
| GoodsDetailsLateralView | IsRightPanel |  | bool |  |
| GoodsDetailsLateralView | Self |  | GoodsDetailsLateralView |  |
| GoodsDetailsLateralView | ToggleReactiveMode |  | void |  |
| GoodsInMarket | AccessSelf |  | GoodsInMarket |  |
| GoodsInMarket | GetGoods |  | unknown |  |
| GoodsInMarket | GetGoodsMarketEntry |  | unknown |  |
| GoodsInMarket | GetMarket |  | unknown |  |
| GoodsInMarket | Self |  | GoodsInMarket |  |
| GoodsItem | AccessSelf |  | GoodsItem |  |
| GoodsItem | GetBiggestMarket |  | unknown |  |
| GoodsItem | GetDemandInfo |  | CString |  |
| GoodsItem | GetGoods |  | unknown |  |
| GoodsItem | GetOurProduced |  | CFixedPoint |  |
| GoodsItem | GetOurProducedInfo |  | CString |  |
| GoodsItem | GetProducedInfo |  | CString |  |
| GoodsItem | GetSupplyInfo |  | CString |  |
| GoodsItem | GetTotalDemand |  | CFixedPoint |  |
| GoodsItem | GetTotalProduced |  | CFixedPoint |  |
| GoodsItem | GetTotalSupply |  | CFixedPoint |  |
| GoodsItem | HasMarket |  | bool |  |
| GoodsItem | Self |  | GoodsItem |  |
| GoodsMarketEntry | AccessSelf |  | GoodsMarketEntry |  |
| GoodsMarketEntry | GetActualDemand |  | CFixedPoint |  |
| GoodsMarketEntry | GetActualSupply |  | CFixedPoint |  |
| GoodsMarketEntry | GetBasePricePlotPoints |  | unknown |  |
| GoodsMarketEntry | GetDemand |  | CFixedPoint |  |
| GoodsMarketEntry | GetDemandForPriceCalculations |  | CFixedPoint |  |
| GoodsMarketEntry | GetEndDataDate |  | CString |  |
| GoodsMarketEntry | GetGoods |  | unknown |  |
| GoodsMarketEntry | GetHistoryTrend |  | unknown |  |
| GoodsMarketEntry | GetMarket |  | unknown |  |
| GoodsMarketEntry | GetMaxPrice |  | float |  |
| GoodsMarketEntry | GetMinPrice |  | float |  |
| GoodsMarketEntry | GetPrice |  | CFixedPoint |  |
| GoodsMarketEntry | GetPriceDifference |  | CFixedPoint |  |
| GoodsMarketEntry | GetPriceDifferenceTT |  | CString |  |
| GoodsMarketEntry | GetPriceHistory |  | unknown |  |
| GoodsMarketEntry | GetStartDataDate |  | CString |  |
| GoodsMarketEntry | GetStockpile |  | CFixedPoint |  |
| GoodsMarketEntry | GetStockpilePercentage |  | float |  |
| GoodsMarketEntry | GetSupply |  | CFixedPoint |  |
| GoodsMarketEntry | GetSupplyForPriceCalculations |  | CFixedPoint |  |
| GoodsMarketEntry | IsVisible |  | bool |  |
| GoodsMarketEntry | Self |  | GoodsMarketEntry |  |
| GoodsMessage | AccessSelf |  | GoodsMessage |  |
| GoodsMessage | GetGoods |  | unknown |  |
| GoodsMessage | Self |  | GoodsMessage |  |
| GoodsOnMarketPopWrap | AccessSelf |  | GoodsOnMarketPopWrap |  |
| GoodsOnMarketPopWrap | GetName |  | CString |  |
| GoodsOnMarketPopWrap | GetTooltip |  | CString |  |
| GoodsOnMarketPopWrap | Self |  | GoodsOnMarketPopWrap |  |
| GoodsOnMarketWrap | AccessSelf |  | GoodsOnMarketWrap |  |
| GoodsOnMarketWrap | GetMarket |  | unknown |  |
| GoodsOnMarketWrap | GetName |  | CString |  |
| GoodsOnMarketWrap | GetTooltip |  | CString |  |
| GoodsOnMarketWrap | Self |  | GoodsOnMarketWrap |  |
| GoodsPriceOnMarketWrap | AccessSelf |  | GoodsPriceOnMarketWrap |  |
| GoodsPriceOnMarketWrap | GetGoods |  | unknown |  |
| GoodsPriceOnMarketWrap | GetGoodsMarketEntry |  | unknown |  |
| GoodsPriceOnMarketWrap | GetMarket |  | unknown |  |
| GoodsPriceOnMarketWrap | GetName |  | CString |  |
| GoodsPriceOnMarketWrap | GetTooltip |  | CString |  |
| GoodsPriceOnMarketWrap | Self |  | GoodsPriceOnMarketWrap |  |
| GoodsProductionLateralView | AccessSelf |  | GoodsProductionLateralView |  |
| GoodsProductionLateralView | FilterByMarket | 1. unknown | void |  |
| GoodsProductionLateralView | GetPlayer |  | unknown |  |
| GoodsProductionLateralView | GetRawGoodsItems |  | unknown |  |
| GoodsProductionLateralView | GetRawGoodsSortSearch |  | unknown |  |
| GoodsProductionLateralView | GetSelectedMarket |  | unknown |  |
| GoodsProductionLateralView | IsGoodsProductionSelectMarketOpened | 1. unknown | bool |  |
| GoodsProductionLateralView | IsLeftPanel |  | bool |  |
| GoodsProductionLateralView | IsLocationHightlighted | 1. unknown | bool |  |
| GoodsProductionLateralView | IsMarketFilterEnabled |  | bool |  |
| GoodsProductionLateralView | IsRightPanel |  | bool |  |
| GoodsProductionLateralView | RemoveMarketFilter |  | void |  |
| GoodsProductionLateralView | Self |  | GoodsProductionLateralView |  |
| GoodsProductionLateralView | ToggleGoodsProductionSelectMarket | 1. unknown | void |  |
| GoodsProductionSelectMarket | AccessSelf |  | GoodsProductionSelectMarket |  |
| GoodsProductionSelectMarket | OnClose |  | void |  |
| GoodsProductionSelectMarket | Parent |  | unknown |  |
| GoodsProductionSelectMarket | Self |  | GoodsProductionSelectMarket |  |
| GoodsSellPriceWrap | AccessSelf |  | GoodsSellPriceWrap |  |
| GoodsSellPriceWrap | GetGoods |  | unknown |  |
| GoodsSellPriceWrap | GetName |  | CString |  |
| GoodsSellPriceWrap | GetTooltip |  | CString |  |
| GoodsSellPriceWrap | Self |  | GoodsSellPriceWrap |  |
| GoodsSourceItem | AccessSelf |  | GoodsSourceItem |  |
| GoodsSourceItem | GetGoods |  | unknown |  |
| GoodsSourceItem | GetLocation |  | unknown |  |
| GoodsSourceItem | GetOutput |  | CFixedPoint |  |
| GoodsSourceItem | GetOutputInfo |  | CString |  |
| GoodsSourceItem | Self |  | GoodsSourceItem |  |
| GoodsView | AccessSelf |  | GoodsView |  |
| GoodsView | GetGoods |  | unknown |  |
| GoodsView | GetGoodsItemsSortSearch |  | unknown |  |
| GoodsView | GetPlayer |  | unknown |  |
| GoodsView | IsLeftPanel |  | bool |  |
| GoodsView | IsRightPanel |  | bool |  |
| GoodsView | Self |  | GoodsView |  |
| GovReformOutlinerEntry | AccessSelf |  | GovReformOutlinerEntry |  |
| GovReformOutlinerEntry | GetName |  | CString |  |
| GovReformOutlinerEntry | GetReformItem |  | unknown |  |
| GovReformOutlinerEntry | GetReformProgress |  | float |  |
| GovReformOutlinerEntry | Self |  | GovReformOutlinerEntry |  |
| Government | AccessSelf |  | Government |  |
| Government | CalcBestRepresentativeForPlaystyle | 1. unknown | unknown |  |
| Government | CareAboutProducingHeirs |  | bool |  |
| Government | GetActiveRegent |  | unknown |  |
| Government | GetActiveRegentTitle |  | CString |  |
| Government | GetAdjective |  | CString |  |
| Government | GetBestHeirCandidateFor | 1. unknown | unknown |  |
| Government | GetCabinet |  | unknown |  |
| Government | GetCabinetActionImplementationDate | 1. unknown | CString |  |
| Government | GetCabinetActionImplementationProgress | 1. unknown | CFixedPoint |  |
| Government | GetCabinetMemberTitle |  | CString |  |
| Government | GetCabinetTitle |  | CString |  |
| Government | GetConsort |  | unknown |  |
| Government | GetConsortCount |  | int32 |  |
| Government | GetConsortTitle |  | CString |  |
| Government | GetCourtTitle |  | CString |  |
| Government | GetCourtierTitle | 1. unknown | CString |  |
| Government | GetDynasticPower | 1. unknown | CFixedPoint |  |
| Government | GetEstate | 1. unknown | unknown |  |
| Government | GetEstateFromKey | 1. unknown | unknown |  |
| Government | GetEstateName | 1. unknown | CString |  |
| Government | GetEstateNameWithNoTooltip | 1. unknown | CString |  |
| Government | GetEstates |  | unknown |  |
| Government | GetFullRulerName |  | CString |  |
| Government | GetFutureRulerTitle |  | CString |  |
| Government | GetGovernmentType |  | unknown |  |
| Government | GetHeir |  | unknown |  |
| Government | GetHeirCandidatesCountFor | 1. unknown | int32 |  |
| Government | GetHeirCandidatesFor | 1. unknown | unknown |  |
| Government | GetHeirSelection |  | unknown |  |
| Government | GetHeirTitle |  | CString |  |
| Government | GetImplementedGovernmentReforms |  | unknown |  |
| Government | GetImplementedPolicyForLaw | 1. unknown | unknown |  |
| Government | GetImplementedTooltipForLaw | 1. unknown | CString |  |
| Government | GetLawEnabledInfo | 1. unknown | CString |  |
| Government | GetLowOfficialTitle |  | CString |  |
| Government | GetNumPrivileges | 1. unknown | int32 |  |
| Government | GetParliament |  | unknown |  |
| Government | GetPoliciesCount |  | int32 |  |
| Government | GetPolicyForLaw | 1. unknown | unknown |  |
| Government | GetPolicyProgressForLaw | 1. unknown | CFixedPoint |  |
| Government | GetPreviousRuler |  | unknown |  |
| Government | GetRegencyDuration |  | CString |  |
| Government | GetRegencyEndDate |  | CString |  |
| Government | GetRegencyEndDateInfo |  | CString |  |
| Government | GetRegencyInfo |  | CString |  |
| Government | GetRegencyProgress |  | float |  |
| Government | GetRegencyType |  | unknown |  |
| Government | GetRuler |  | unknown |  |
| Government | GetRulerOrHeirIfRegent |  | unknown |  |
| Government | GetRulerOrRegent |  | unknown |  |
| Government | GetRulerRegentHeirInfo |  | CString |  |
| Government | GetRulerTitle |  | CString |  |
| Government | GetSocietalValue | 1. unknown | CFixedPoint |  |
| Government | GetSocietalValueCount |  | CFixedPoint |  |
| Government | GetSocietalValueDescription |  | CString |  |
| Government | GetTotalDynasticPower |  | CFixedPoint |  |
| Government | GetTotalNumPrivileges |  | int32 |  |
| Government | HasActiveRegent |  | bool |  |
| Government | HasConsort |  | bool |  |
| Government | HasHeir |  | bool |  |
| Government | HasPolicyForLaw | 1. unknown | bool |  |
| Government | HasRuler |  | bool |  |
| Government | HasRulerOrRegent |  | bool |  |
| Government | InElection |  | bool |  |
| Government | IsCabinetActionSelected | 1. unknown 2. unknown | bool |  |
| Government | IsCabinetCharacterSelected | 1. unknown 2. unknown | bool |  |
| Government | IsCurrentlyPolicySelected | 1. unknown 2. unknown | bool |  |
| Government | IsHeirSelection | 1. unknown | bool |  |
| Government | IsLawEnabled | 1. unknown | bool |  |
| Government | IsRegency |  | bool |  |
| Government | IsRegencyExtended |  | bool |  |
| Government | Self |  | Government |  |
| Government | ShouldDisplayProgressForLaw | 1. unknown | bool |  |
| GovernmentReform | AccessSelf |  | GovernmentReform |  |
| GovernmentReform | GetAge |  | unknown |  |
| GovernmentReform | GetDebugText |  | CString |  |
| GovernmentReform | GetEffectText |  | CString |  |
| GovernmentReform | GetFlavorText |  | CString |  |
| GovernmentReform | GetGovernmentType |  | unknown |  |
| GovernmentReform | GetModifiersText |  | CString |  |
| GovernmentReform | GetName |  | CString |  |
| GovernmentReform | GetNameWithNoTooltip |  | CString |  |
| GovernmentReform | GetSocietalValueRequirement |  | unknown |  |
| GovernmentReform | GetSocietalValueRequirementInfo |  | CString |  |
| GovernmentReform | GetTimeToImplementText |  | CString |  |
| GovernmentReform | GetTooltip |  | CString |  |
| GovernmentReform | HasEffectText |  | bool |  |
| GovernmentReform | HasFlavorText |  | bool |  |
| GovernmentReform | HasModifiersText |  | bool |  |
| GovernmentReform | HasPotential |  | bool |  |
| GovernmentReform | HasTooltip |  | bool |  |
| GovernmentReform | IsMajor |  | bool |  |
| GovernmentReform | IsUnique |  | bool |  |
| GovernmentReform | RequiresSocietalValues |  | bool |  |
| GovernmentReform | Self |  | GovernmentReform |  |
| GovernmentReformItem | AccessSelf |  | GovernmentReformItem |  |
| GovernmentReformItem | GetReform |  | unknown |  |
| GovernmentReformItem | GetUIAction |  | unknown |  |
| GovernmentReformItem | Self |  | GovernmentReformItem |  |
| GovernmentReformsLateralView | AccessSelf |  | GovernmentReformsLateralView |  |
| GovernmentReformsLateralView | GetAllReforms |  | unknown |  |
| GovernmentReformsLateralView | GetPlayer |  | unknown |  |
| GovernmentReformsLateralView | GetReformsSortSearch |  | unknown |  |
| GovernmentReformsLateralView | IsLeftPanel |  | bool |  |
| GovernmentReformsLateralView | IsRightPanel |  | bool |  |
| GovernmentReformsLateralView | Self |  | GovernmentReformsLateralView |  |
| GovernmentType | AccessSelf |  | GovernmentType |  |
| GovernmentType | GetAdvancesPerAge |  | unknown |  |
| GovernmentType | GetBreakdownList |  | CString |  |
| GovernmentType | GetEstatePrivileges |  | unknown |  |
| GovernmentType | GetHeirSelections |  | unknown |  |
| GovernmentType | GetLaws |  | unknown |  |
| GovernmentType | GetName |  | CString |  |
| GovernmentType | GetNameKey |  | CString |  |
| GovernmentType | GetNameWithNoTooltip |  | CString |  |
| GovernmentType | GetPowerConcept |  | CString |  |
| GovernmentType | GetPowerDesc |  | CString |  |
| GovernmentType | GetPowerKey |  | CString |  |
| GovernmentType | GetTooltip |  | CString |  |
| GovernmentType | MakeScope |  | Scope | Jomini Script System |
| GovernmentType | Self |  | GovernmentType |  |
| GovernmentView | AccessSelf |  | GovernmentView |  |
| GovernmentView | CanCancelMoveCapital |  | bool |  |
| GovernmentView | CanCancelMoveCapitalTT |  | CString |  |
| GovernmentView | CanMoveCapital |  | bool |  |
| GovernmentView | CanMoveCapitalConditions |  | CString |  |
| GovernmentView | CanMoveCapitalDesc |  | CString |  |
| GovernmentView | CancelMoveCapital |  | void |  |
| GovernmentView | GetAgendas |  | unknown |  |
| GovernmentView | GetAmountOfPossibleHeirs |  | int32 |  |
| GovernmentView | GetCabinets |  | unknown |  |
| GovernmentView | GetEstates |  | unknown |  |
| GovernmentView | GetHeirSelection |  | unknown |  |
| GovernmentView | GetImplementedReforms |  | int32 |  |
| GovernmentView | GetLanguageImpact |  | CString |  |
| GovernmentView | GetLawCategories |  | unknown |  |
| GovernmentView | GetLawCategoriesSortSearch |  | unknown |  |
| GovernmentView | GetLawEnabledInfo | 1. unknown | CString |  |
| GovernmentView | GetModifiers |  | unknown |  |
| GovernmentView | GetModifiersSortSearch |  | unknown |  |
| GovernmentView | GetMoveCapitalCost |  | CString |  |
| GovernmentView | GetNextRulerInfo |  | CString |  |
| GovernmentView | GetParliamentActions |  | unknown |  |
| GovernmentView | GetPlayer |  | unknown |  |
| GovernmentView | GetPossibleReformsAmount |  | int32 |  |
| GovernmentView | GetReforms |  | unknown |  |
| GovernmentView | GetSocietalValues |  | unknown |  |
| GovernmentView | GetSortedEstates |  | unknown |  |
| GovernmentView | GetTraits |  | unknown |  |
| GovernmentView | HasNewCountriesOrNewRanks |  | bool |  |
| GovernmentView | IsEstatesSortedBy | 1. unknown | bool |  |
| GovernmentView | IsEstatesSortedInDescending | 1. unknown | bool |  |
| GovernmentView | IsLawEnabled | 1. unknown | bool |  |
| GovernmentView | IsLeftPanel |  | bool |  |
| GovernmentView | IsLowerTabCabinet |  | bool |  |
| GovernmentView | IsLowerTabEstates |  | bool |  |
| GovernmentView | IsLowerTabParliament |  | bool |  |
| GovernmentView | IsLowerTabPolitics |  | bool |  |
| GovernmentView | IsLowerTabSociety |  | bool |  |
| GovernmentView | IsRightPanel |  | bool |  |
| GovernmentView | MoveCapital |  | void |  |
| GovernmentView | Self |  | GovernmentView |  |
| GovernmentView | SetLowerTabToCabinet |  | void |  |
| GovernmentView | SetLowerTabToEstates |  | void |  |
| GovernmentView | SetLowerTabToParliament |  | void |  |
| GovernmentView | SetLowerTabToPolitics |  | void |  |
| GovernmentView | SetLowerTabToSociety |  | void |  |
| GovernmentView | SortEstates | 1. unknown | void |  |
| Graph | AccessSelf |  | Graph |  |
| Graph | Errors |  | unknown |  |
| Graph | HasErrors |  | bool |  |
| Graph | Self |  | Graph |  |
| GraphInterfaceNodeWindow | AccessSelf |  | GraphInterfaceNodeWindow |  |
| GraphInterfaceNodeWindow | AddPin | 1. unknown | void |  |
| GraphInterfaceNodeWindow | Self |  | GraphInterfaceNodeWindow |  |
| GraphPanel | AccessAnimationEditorSearch |  | unknown |  |
| GraphPanel | AccessMetadataWindow |  | unknown |  |
| GraphPanel | AccessSelf |  | GraphPanel |  |
| GraphPanel | ClearSelection |  | void |  |
| GraphPanel | CompoundNodeUpdated | 1. unknown | void |  |
| GraphPanel | Copy |  | void |  |
| GraphPanel | CreateInfoBoxNode |  | int32 |  |
| GraphPanel | CreateNodeByName | 1. unknown | int32 |  |
| GraphPanel | Cut |  | void |  |
| GraphPanel | Delete |  | void |  |
| GraphPanel | Fit |  | void |  |
| GraphPanel | GetMetadataWindow |  | unknown |  |
| GraphPanel | GetNodeLineMaskTexture | 1. unknown | unknown |  |
| GraphPanel | GetNodeLineTexture | 1. unknown | unknown |  |
| GraphPanel | GetViewportHotkeysDescription |  | CString |  |
| GraphPanel | HasExportButton |  | bool |  |
| GraphPanel | HasImportButton |  | bool |  |
| GraphPanel | HasPreviewer |  | bool |  |
| GraphPanel | HasRenamingCapability |  | bool |  |
| GraphPanel | InvertSelection |  | void |  |
| GraphPanel | IsButtonEnabled | 1. unknown | bool |  |
| GraphPanel | IsNodeEditorSearchVisible |  | bool |  |
| GraphPanel | IsPasteable |  | bool |  |
| GraphPanel | IsSaveable |  | bool |  |
| GraphPanel | IsViewportHoteysDescriptionShown |  | bool |  |
| GraphPanel | LayoutNodes |  | void |  |
| GraphPanel | Load |  | void |  |
| GraphPanel | New |  | void |  |
| GraphPanel | OnEditorPreferencesClicked |  | void |  |
| GraphPanel | OnExportButton |  | void |  |
| GraphPanel | OnImportButton |  | void |  |
| GraphPanel | OpenPreviewer |  | void |  |
| GraphPanel | Paste |  | void |  |
| GraphPanel | PasteConnectedToExisting |  | void |  |
| GraphPanel | Properties |  | void |  |
| GraphPanel | RenameGraph |  | void |  |
| GraphPanel | Save |  | void |  |
| GraphPanel | SaveAs |  | void |  |
| GraphPanel | SelectAllNodes |  | void |  |
| GraphPanel | SelectionToCompoundNode |  | void |  |
| GraphPanel | SelectionToGroupNode |  | void |  |
| GraphPanel | Self |  | GraphPanel |  |
| GraphPanel | SetZoom | 1. unknown | void |  |
| GraphPanel | ShatterSelectedGroup |  | void |  |
| GraphPanel | ShowNodeEditorSearch |  | void |  |
| GraphPanel | ShowNodeSearch |  | void |  |
| GraphicalCultureType | AccessSelf |  | GraphicalCultureType |  |
| GraphicalCultureType | GetName |  | CString |  |
| GraphicalCultureType | Self |  | GraphicalCultureType |  |
| GreatPowerItem | AccessSelf |  | GreatPowerItem |  |
| GreatPowerItem | GetCountry |  | unknown |  |
| GreatPowerItem | GetCountryOverUILimit |  | int32 |  |
| GreatPowerItem | GetCountryUILimit |  | int32 |  |
| GreatPowerItem | GetExtraSubjects |  | CString |  |
| GreatPowerItem | GetIcon |  | unknown |  |
| GreatPowerItem | GetScore |  | int32 |  |
| GreatPowerItem | HasScore |  | bool |  |
| GreatPowerItem | Self |  | GreatPowerItem |  |
| Group | AccessSelf |  | Group |  |
| Group | AccessVisibleAchievements |  | unknown |  |
| Group | CalcNumberOfUnlockedVisibleAchievements |  | int32 |  |
| Group | GetName |  | CUTF8String |  |
| Group | GetNumberOfVisibleAchievements |  | int32 |  |
| Group | IsCollapsed |  | bool |  |
| Group | Self |  | Group |  |
| Group | ToggleCollapsed |  | void |  |
| GroupItem | AccessSelf |  | GroupItem |  |
| GroupItem | GetButtonAction |  | unknown |  |
| GroupItem | GetCharacter |  | unknown |  |
| GroupItem | GetCountry |  | unknown |  |
| GroupItem | GetDesc |  | CString |  |
| GroupItem | GetIndex |  | int32 |  |
| GroupItem | GetInternationalOrganization |  | unknown |  |
| GroupItem | GetLeftTooltip |  | CString |  |
| GroupItem | GetRightTooltip |  | CString |  |
| GroupItem | GetTexture |  | unknown |  |
| GroupItem | GetTitle |  | CString |  |
| GroupItem | IsCharacter |  | bool |  |
| GroupItem | IsCountry |  | bool |  |
| GroupItem | IsInternationalOrganization |  | bool |  |
| GroupItem | IsLocation |  | bool |  |
| GroupItem | IsVisible |  | bool |  |
| GroupItem | OnLeftClick |  | void |  |
| GroupItem | OnRightClick |  | void |  |
| GroupItem | Self |  | GroupItem |  |
| GuiAnimationCurveEditor | AccessSelf |  | GuiAnimationCurveEditor |  |
| GuiAnimationCurveEditor | GetGraphLines |  | unknown |  |
| GuiAnimationCurveEditor | IsAnyEditorOpen |  | bool |  |
| GuiAnimationCurveEditor | Self |  | GuiAnimationCurveEditor |  |
| GuiAnimationCurveEditorControlPoint | AccessSelf |  | GuiAnimationCurveEditorControlPoint |  |
| GuiAnimationCurveEditorControlPoint | GetCoords |  | CVector2f |  |
| GuiAnimationCurveEditorControlPoint | IsSelected | 1. unknown | bool |  |
| GuiAnimationCurveEditorControlPoint | IsUnderMousePointer |  | bool |  |
| GuiAnimationCurveEditorControlPoint | Self |  | GuiAnimationCurveEditorControlPoint |  |
| GuiAnimationCurveEditorLine | AccessSelf |  | GuiAnimationCurveEditorLine |  |
| GuiAnimationCurveEditorLine | GetColor |  | CVector4f |  |
| GuiAnimationCurveEditorLine | GetControlPoints |  | unknown |  |
| GuiAnimationCurveEditorLine | GetLineVertices |  | unknown |  |
| GuiAnimationCurveEditorLine | Self |  | GuiAnimationCurveEditorLine |  |
| GuiAnimationCurveEditorViewport | AccessSelf |  | GuiAnimationCurveEditorViewport |  |
| GuiAnimationCurveEditorViewport | GetNeedlePosition | 1. unknown 2. unknown 3. unknown | CVector2f |  |
| GuiAnimationCurveEditorViewport | Self |  | GuiAnimationCurveEditorViewport |  |
| GuiAnimationEditor | AccessAnimSets |  | unknown |  |
| GuiAnimationEditor | AccessAnimations |  | unknown |  |
| GuiAnimationEditor | AccessAvailableTracks |  | unknown |  |
| GuiAnimationEditor | AccessSelf |  | GuiAnimationEditor |  |
| GuiAnimationEditor | AccessUniversalTracks |  | unknown |  |
| GuiAnimationEditor | AddKeyframesAtCurrentTime |  | void |  |
| GuiAnimationEditor | CanChangeSelectedAnimSetParent |  | bool |  |
| GuiAnimationEditor | CanCreateNewAnimation |  | bool |  |
| GuiAnimationEditor | CanDeleteSelectedAnimSet |  | bool |  |
| GuiAnimationEditor | CanDeleteSelectedAnimations |  | bool |  |
| GuiAnimationEditor | CanRenameSelectedAnimSet |  | bool |  |
| GuiAnimationEditor | CanRenameSelectedAnimation |  | bool |  |
| GuiAnimationEditor | ChangeSelectedAnimSetParent |  | void |  |
| GuiAnimationEditor | CreateNewAnimSet |  | void |  |
| GuiAnimationEditor | CreateNewAnimation |  | void |  |
| GuiAnimationEditor | DeleteSelectedAnimSet |  | void |  |
| GuiAnimationEditor | DeleteSelectedAnimations |  | void |  |
| GuiAnimationEditor | DeleteSelectedKeyframes |  | void |  |
| GuiAnimationEditor | GetAnimSets |  | unknown |  |
| GuiAnimationEditor | GetAnimations |  | unknown |  |
| GuiAnimationEditor | GetAvailableTracks |  | unknown |  |
| GuiAnimationEditor | GetUniversalTracks |  | unknown |  |
| GuiAnimationEditor | IsAnyCurveEditorOpen |  | bool |  |
| GuiAnimationEditor | IsKeyframeSelectionValidForCurvePreset |  | bool |  |
| GuiAnimationEditor | OnSave |  | void |  |
| GuiAnimationEditor | OnSaveAs |  | void |  |
| GuiAnimationEditor | RenameSelectedAnimSet |  | void |  |
| GuiAnimationEditor | RenameSelectedAnimation |  | void |  |
| GuiAnimationEditor | Self |  | GuiAnimationEditor |  |
| GuiAnimationEditorAnimSetEntry | AccessSelf |  | GuiAnimationEditorAnimSetEntry |  |
| GuiAnimationEditorAnimSetEntry | GetDisplayName |  | CString |  |
| GuiAnimationEditorAnimSetEntry | IsSelected |  | bool |  |
| GuiAnimationEditorAnimSetEntry | Self |  | GuiAnimationEditorAnimSetEntry |  |
| GuiAnimationEditorAnimSetEntry | ToggleSelected |  | void |  |
| GuiAnimationEditorAnimationEntry | AccessSelf |  | GuiAnimationEditorAnimationEntry |  |
| GuiAnimationEditorAnimationEntry | GetDisplayName |  | CString |  |
| GuiAnimationEditorAnimationEntry | GetTooltipMessage |  | CString |  |
| GuiAnimationEditorAnimationEntry | IsAnimationInherited |  | bool |  |
| GuiAnimationEditorAnimationEntry | IsSelected |  | bool |  |
| GuiAnimationEditorAnimationEntry | OverrideInheritedAnimation |  | void |  |
| GuiAnimationEditorAnimationEntry | Self |  | GuiAnimationEditorAnimationEntry |  |
| GuiAnimationEditorAnimationEntry | ToggleSelected |  | void |  |
| GuiAnimationEditorAvailableTrack | AccessSelf |  | GuiAnimationEditorAvailableTrack |  |
| GuiAnimationEditorAvailableTrack | AddTrack |  | void |  |
| GuiAnimationEditorAvailableTrack | GetDescription |  | unknown |  |
| GuiAnimationEditorAvailableTrack | GetDisplayName |  | unknown |  |
| GuiAnimationEditorAvailableTrack | GetExcludedDisplayName |  | unknown |  |
| GuiAnimationEditorAvailableTrack | IsExcluded |  | bool |  |
| GuiAnimationEditorAvailableTrack | Self |  | GuiAnimationEditorAvailableTrack |  |
| GuiAnimationEditorKeyframe | AccessSelf |  | GuiAnimationEditorKeyframe |  |
| GuiAnimationEditorKeyframe | GetPosition |  | CVector2f |  |
| GuiAnimationEditorKeyframe | GetTimeInSeconds |  | float |  |
| GuiAnimationEditorKeyframe | IsDataFlowButton |  | bool |  |
| GuiAnimationEditorKeyframe | IsDataFlowToWidget |  | bool |  |
| GuiAnimationEditorKeyframe | IsDragged |  | bool |  |
| GuiAnimationEditorKeyframe | IsSelected |  | bool |  |
| GuiAnimationEditorKeyframe | IsUnderMousePointer |  | bool |  |
| GuiAnimationEditorKeyframe | IsValid |  | bool |  |
| GuiAnimationEditorKeyframe | Self |  | GuiAnimationEditorKeyframe |  |
| GuiAnimationEditorKeyframe | ToggleDataFlow |  | void |  |
| GuiAnimationEditorMetadataCtx | AccessSelf |  | GuiAnimationEditorMetadataCtx |  |
| GuiAnimationEditorMetadataCtx | DeselectAllKeyframes |  | void |  |
| GuiAnimationEditorMetadataCtx | HasSelectedAnyKeyframes |  | bool |  |
| GuiAnimationEditorMetadataCtx | IsAnimationsTabCollapsed |  | bool |  |
| GuiAnimationEditorMetadataCtx | IsKeyframeSnapping |  | bool |  |
| GuiAnimationEditorMetadataCtx | SelectAllKeyframes |  | void |  |
| GuiAnimationEditorMetadataCtx | Self |  | GuiAnimationEditorMetadataCtx |  |
| GuiAnimationEditorMetadataCtx | ToggleAnimationsTabCollapsed |  | void |  |
| GuiAnimationEditorMetadataCtx | ToggleKeyframeSnapping |  | void |  |
| GuiAnimationEditorPlayer | AccessSelf |  | GuiAnimationEditorPlayer |  |
| GuiAnimationEditorPlayer | CanPlay |  | bool |  |
| GuiAnimationEditorPlayer | GetCurrentSpeedMultiplierOptionIndex |  | CVector2i |  |
| GuiAnimationEditorPlayer | GetCurrentTime |  | float |  |
| GuiAnimationEditorPlayer | GetMaxDuration |  | float |  |
| GuiAnimationEditorPlayer | GetSpeedMultiplier |  | float |  |
| GuiAnimationEditorPlayer | GetSpeedMultiplierOptions |  | unknown |  |
| GuiAnimationEditorPlayer | IsDraggingTime |  | bool |  |
| GuiAnimationEditorPlayer | IsLoopEnabled |  | bool |  |
| GuiAnimationEditorPlayer | IsPlaying |  | bool |  |
| GuiAnimationEditorPlayer | Self |  | GuiAnimationEditorPlayer |  |
| GuiAnimationEditorPlayer | SetCurrentTime | 1. unknown | void |  |
| GuiAnimationEditorPlayer | SetIsPlaying | 1. unknown | void |  |
| GuiAnimationEditorPlayer | SetLoopEnabled | 1. unknown | void |  |
| GuiAnimationEditorPlayer | SetSpeedMultiplier | 1. unknown | void |  |
| GuiAnimationEditorPlayer | SetSpeedMultiplierOptionIndex |  | void |  |
| GuiAnimationEditorPlayer | ShouldMoveNeedleWithKeyframe |  | bool |  |
| GuiAnimationEditorPlayer | StepBackwards |  | void |  |
| GuiAnimationEditorPlayer | StepForward |  | void |  |
| GuiAnimationEditorPlayer | ToggleIsPlaying |  | void |  |
| GuiAnimationEditorPlayer | ToggleLoopEnabled |  | void |  |
| GuiAnimationEditorPlayer | ToggleMoveNeedleWithKeyframe |  | void |  |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | AccessSelf |  | GuiAnimationEditorPlayerSpeedMultiplierEntry |  |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | GetDisplayName |  | CString |  |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | GetMultiplier |  | float |  |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | Self |  | GuiAnimationEditorPlayerSpeedMultiplierEntry |  |
| GuiAnimationEditorRuler | AccessRulerResolutionEntries |  | unknown |  |
| GuiAnimationEditorRuler | AccessSelf |  | GuiAnimationEditorRuler |  |
| GuiAnimationEditorRuler | GetRulerResolutionEntries |  | unknown |  |
| GuiAnimationEditorRuler | Self |  | GuiAnimationEditorRuler |  |
| GuiAnimationEditorRulerResolutionEntry | AccessSelf |  | GuiAnimationEditorRulerResolutionEntry |  |
| GuiAnimationEditorRulerResolutionEntry | GetDisplayValue |  | CString |  |
| GuiAnimationEditorRulerResolutionEntry | GetPosition |  | CVector2f |  |
| GuiAnimationEditorRulerResolutionEntry | IsSubdivision |  | bool |  |
| GuiAnimationEditorRulerResolutionEntry | Self |  | GuiAnimationEditorRulerResolutionEntry |  |
| GuiAnimationEditorUniversalTrack | AccessKeyframes |  | unknown |  |
| GuiAnimationEditorUniversalTrack | AccessSelf |  | GuiAnimationEditorUniversalTrack |  |
| GuiAnimationEditorUniversalTrack | AddKeyframeAtMousePointer |  | void |  |
| GuiAnimationEditorUniversalTrack | CleanAssignedWidgets |  | void |  |
| GuiAnimationEditorUniversalTrack | GetAssignedWidgetsCount |  | int32 |  |
| GuiAnimationEditorUniversalTrack | GetDisplayName |  | CString |  |
| GuiAnimationEditorUniversalTrack | GetDuration |  | float |  |
| GuiAnimationEditorUniversalTrack | GetIndentationDepth |  | int32 |  |
| GuiAnimationEditorUniversalTrack | GetKeyframes |  | unknown |  |
| GuiAnimationEditorUniversalTrack | GetTimelineViewRightCornerPosition |  | CVector2f |  |
| GuiAnimationEditorUniversalTrack | GetTimelineViewSize |  | CVector2f |  |
| GuiAnimationEditorUniversalTrack | HasDataToAnimate |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsCollapsable |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsCollapsed |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsInWidgetAssignmentMode |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsRemovable |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTimeAtKeyframe |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTimeWithinAnimation |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTrackTypeAnimation |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTrackTypeProperty |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsUnderMousePointer |  | bool |  |
| GuiAnimationEditorUniversalTrack | NextKeyframe |  | void |  |
| GuiAnimationEditorUniversalTrack | OpenTrackSelection |  | void |  |
| GuiAnimationEditorUniversalTrack | PreviousKeyframe |  | void |  |
| GuiAnimationEditorUniversalTrack | Remove |  | void |  |
| GuiAnimationEditorUniversalTrack | Self |  | GuiAnimationEditorUniversalTrack |  |
| GuiAnimationEditorUniversalTrack | ToggleCollapsed |  | void |  |
| GuiAnimationEditorUniversalTrack | ToggleKeyframe |  | void |  |
| GuiAnimationEditorUniversalTrack | ToggleWidgetAssignmentMode |  | void |  |
| GuiAnimationEditorViewportBase | AccessSelf |  | GuiAnimationEditorViewportBase |  |
| GuiAnimationEditorViewportBase | GetNeedlePosition | 1. unknown 2. unknown 3. unknown | CVector2f |  |
| GuiAnimationEditorViewportBase | Self |  | GuiAnimationEditorViewportBase |  |
| GuiAnimationEditorViewportUserInput | AccessSelf |  | GuiAnimationEditorViewportUserInput |  |
| GuiAnimationEditorViewportUserInput | GetSelectionDragRectPosition | 1. unknown | CVector2f |  |
| GuiAnimationEditorViewportUserInput | GetSelectionDragRectSize |  | CVector2f |  |
| GuiAnimationEditorViewportUserInput | IsDraggingSelectionRect |  | bool |  |
| GuiAnimationEditorViewportUserInput | Self |  | GuiAnimationEditorViewportUserInput |  |
| GuiAnimationTimelineViewport | AccessSelf |  | GuiAnimationTimelineViewport |  |
| GuiAnimationTimelineViewport | BeginDragDuration | 1. unknown | void |  |
| GuiAnimationTimelineViewport | CanBeginDragDuration |  | bool |  |
| GuiAnimationTimelineViewport | GetNeedlePosition | 1. unknown 2. unknown 3. unknown | CVector2f |  |
| GuiAnimationTimelineViewport | Self |  | GuiAnimationTimelineViewport |  |
| GuiContext | AccessSelf |  | GuiContext |  |
| GuiContext | GetScreenResolution |  | CVector2f |  |
| GuiContext | Self |  | GuiContext |  |
| GuiCurrentDrag | AccessSelf |  | GuiCurrentDrag |  |
| GuiCurrentDrag | CurrentPosition |  | CVector2f |  |
| GuiCurrentDrag | Self |  | GuiCurrentDrag |  |
| GuiCurrentDrag | StartPosition |  | CVector2f |  |
| GuiDataProfiler | AccessSelf |  | GuiDataProfiler |  |
| GuiDataProfiler | BeginRecording |  | void |  |
| GuiDataProfiler | CanBeginRecording |  | bool |  |
| GuiDataProfiler | GetCurrentDurationTypeDescription |  | CString |  |
| GuiDataProfiler | GetCurrentFrame |  | uint32 |  |
| GuiDataProfiler | GetDurationTypeIndex |  | CVector2i |  |
| GuiDataProfiler | GetDurationTypeNames |  | unknown |  |
| GuiDataProfiler | GetDurationValueTypeIndex |  | CVector2i |  |
| GuiDataProfiler | GetDurationValueTypeNames |  | unknown |  |
| GuiDataProfiler | GetNodeDuration | 1. unknown | CString |  |
| GuiDataProfiler | GetNodeTree |  | unknown |  |
| GuiDataProfiler | GetNumFramesToCapture |  | uint32 |  |
| GuiDataProfiler | GetSortingMethodIndex |  | CVector2i |  |
| GuiDataProfiler | GetSortingMethodNames |  | unknown |  |
| GuiDataProfiler | GetTotalCapturedWidgets |  | uint32 |  |
| GuiDataProfiler | GetViewTypeIndex |  | CVector2i |  |
| GuiDataProfiler | GetViewTypeNames |  | unknown |  |
| GuiDataProfiler | IsCallsListView |  | bool |  |
| GuiDataProfiler | IsLocationColumnShown |  | bool |  |
| GuiDataProfiler | IsNodeExpanded | 1. unknown | bool |  |
| GuiDataProfiler | IsRecording |  | bool |  |
| GuiDataProfiler | NextFrame | 1. unknown | void |  |
| GuiDataProfiler | Self |  | GuiDataProfiler |  |
| GuiDataProfiler | SetCurrentFrame |  | void |  |
| GuiDataProfiler | SetDurationTypeIndex |  | void |  |
| GuiDataProfiler | SetDurationValueTypeIndex |  | void |  |
| GuiDataProfiler | SetNumFramesToCapture |  | void |  |
| GuiDataProfiler | SetSortingMethodIndex |  | void |  |
| GuiDataProfiler | SetViewTypeIndex |  | void |  |
| GuiDataProfiler | ToggleLocationColumnShown |  | void |  |
| GuiDataProfiler | ToggleNodeExpanded | 1. unknown | void |  |
| GuiDataProfilerEntryNode | AccessSelf |  | GuiDataProfilerEntryNode |  |
| GuiDataProfilerEntryNode | CanOpenFileLocation |  | bool |  |
| GuiDataProfilerEntryNode | GetBranchDepth | 1. unknown 2. unknown | CVector2f |  |
| GuiDataProfilerEntryNode | GetLocation |  | CString |  |
| GuiDataProfilerEntryNode | GetName |  | unknown |  |
| GuiDataProfilerEntryNode | GetNumCalls |  | uint32 |  |
| GuiDataProfilerEntryNode | HasChildren |  | bool |  |
| GuiDataProfilerEntryNode | OpenFileLocation |  | void |  |
| GuiDataProfilerEntryNode | Self |  | GuiDataProfilerEntryNode |  |
| GuiEditorTooltip | AccessSelf |  | GuiEditorTooltip |  |
| GuiEditorTooltip | GetDescription |  | CString |  |
| GuiEditorTooltip | GetTitle |  | CString |  |
| GuiEditorTooltip | HasDescription |  | bool |  |
| GuiEditorTooltip | HasTitle |  | bool |  |
| GuiEditorTooltip | IsVisible |  | bool |  |
| GuiEditorTooltip | Self |  | GuiEditorTooltip |  |
| GuiGameRule | AccessSelf |  | GuiGameRule |  |
| GuiGameRule | GetRule |  | unknown |  |
| GuiGameRule | GetSetting |  | unknown |  |
| GuiGameRule | Next |  | void |  |
| GuiGameRule | Prev |  | void |  |
| GuiGameRule | Self |  | GuiGameRule |  |
| GuiGameRulePreset | AccessSelf |  | GuiGameRulePreset |  |
| GuiGameRulePreset | GetName |  | CString |  |
| GuiGameRulePreset | GetSettingForRule | 1. unknown | unknown |  |
| GuiGameRulePreset | HasRuleWithFlag | 1. unknown | bool |  |
| GuiGameRulePreset | IsIronmanEnabled |  | bool |  |
| GuiGameRulePreset | Self |  | GuiGameRulePreset |  |
| GuiTableRow | AccessSelf |  | GuiTableRow |  |
| GuiTableRow | GetIndex |  | int32 |  |
| GuiTableRow | Self |  | GuiTableRow |  |
| Hegemony | AccessSelf |  | Hegemony |  |
| Hegemony | GetBaseInfo |  | CString |  |
| Hegemony | GetDesc |  | CString |  |
| Hegemony | GetName |  | CString |  |
| Hegemony | GetNameWithNoTooltip |  | CString |  |
| Hegemony | MakeScope |  | Scope | Jomini Script System |
| Hegemony | Self |  | Hegemony |  |
| HeirSelection | AccessSelf |  | HeirSelection |  |
| HeirSelection | GetBestCandidateDesc |  | CString |  |
| HeirSelection | GetDesc |  | CString |  |
| HeirSelection | GetEffect |  | CString |  |
| HeirSelection | GetKey |  | CString |  |
| HeirSelection | GetMaxPossibleCandidates |  | int32 |  |
| HeirSelection | GetName |  | CString |  |
| HeirSelection | GetNameWithNoTooltip |  | CString |  |
| HeirSelection | GetProperties |  | CString |  |
| HeirSelection | GetTooltip |  | CString |  |
| HeirSelection | IsLocked | 1. unknown | bool |  |
| HeirSelection | MakeScope |  | Scope | Jomini Script System |
| HeirSelection | Self |  | HeirSelection |  |
| HeirSelection | ShouldShowCandidates |  | bool |  |
| HeirSelection | TraverseFamilyTree |  | bool |  |
| HeirSelection | UseElection |  | bool |  |
| HeirSelectionCandidate | AccessSelf |  | HeirSelectionCandidate |  |
| HeirSelectionCandidate | GetBestHeirCandidate |  | unknown |  |
| HeirSelectionCandidate | GetHeirCandidates |  | unknown |  |
| HeirSelectionCandidate | GetHeirCandidatesCount |  | int32 |  |
| HeirSelectionCandidate | GetHeirSelection |  | unknown |  |
| HeirSelectionCandidate | GetSelectAction |  | unknown |  |
| HeirSelectionCandidate | GetTitle |  | CString |  |
| HeirSelectionCandidate | IsActive |  | bool |  |
| HeirSelectionCandidate | Self |  | HeirSelectionCandidate |  |
| HeirSelectionValue | AccessSelf |  | HeirSelectionValue |  |
| HeirSelectionValue | GetDescription |  | CString |  |
| HeirSelectionValue | GetHeir |  | unknown |  |
| HeirSelectionValue | GetValue |  | CFixedPoint |  |
| HeirSelectionValue | IsValid |  | bool |  |
| HeirSelectionValue | Self |  | HeirSelectionValue |  |
| HintsLateralView | AccessSelf |  | HintsLateralView |  |
| HintsLateralView | GetHints |  | unknown |  |
| HintsLateralView | GetPlayer |  | unknown |  |
| HintsLateralView | IsAdmHintsOn |  | bool |  |
| HintsLateralView | IsDiploHintsOn |  | bool |  |
| HintsLateralView | IsLeftPanel |  | bool |  |
| HintsLateralView | IsMilHintsOn |  | bool |  |
| HintsLateralView | IsRightPanel |  | bool |  |
| HintsLateralView | Self |  | HintsLateralView |  |
| HintsLateralView | SetSelectedHintKey | 1. unknown | void |  |
| HintsLateralView | ToggleAdm |  | void |  |
| HintsLateralView | ToggleDiplo |  | void |  |
| HintsLateralView | ToggleMil |  | void |  |
| HistoricalScore | AccessSelf |  | HistoricalScore |  |
| HistoricalScore | GetDesc |  | CString |  |
| HistoricalScore | GetName |  | CString |  |
| HistoricalScore | GetScore |  | CFixedPoint |  |
| HistoricalScore | Self |  | HistoricalScore |  |
| HistoricalScoreItem | AccessSelf |  | HistoricalScoreItem |  |
| HistoricalScoreItem | GetHistoricalScore |  | unknown |  |
| HistoricalScoreItem | Self |  | HistoricalScoreItem |  |
| HistoryViewer | AccessSelf |  | HistoryViewer |  |
| HistoryViewer | GetEntryName | 1. unknown | CString |  |
| HistoryViewer | IsEntryAhead | 1. unknown | bool |  |
| HistoryViewer | IsEntryCurrent | 1. unknown | bool |  |
| HistoryViewer | IsEntryExecutable | 1. unknown | bool |  |
| HistoryViewer | Self |  | HistoryViewer |  |
| HistoryViewer | SetEntryCurrent | 1. unknown | void |  |
| HolySite | AccessSelf |  | HolySite |  |
| HolySite | GetColor |  | CVector4f |  |
| HolySite | GetCountryModifierInfo |  | CString |  |
| HolySite | GetDesc |  | CString |  |
| HolySite | GetIllustration |  | unknown |  |
| HolySite | GetImportance |  | int32 |  |
| HolySite | GetLocationModifierInfo |  | CString |  |
| HolySite | GetName |  | CString |  |
| HolySite | GetNameWithNoTooltip |  | CString |  |
| HolySite | GetReligionModifierInfo |  | CString |  |
| HolySite | GetReligions |  | unknown |  |
| HolySite | GetTooltip |  | CString |  |
| HolySite | HasCountryModifiers |  | bool |  |
| HolySite | HasDesc |  | bool |  |
| HolySite | HasLocationModifiers |  | bool |  |
| HolySite | HasReligionModifiers |  | bool |  |
| HolySite | MakeScope |  | Scope | Jomini Script System |
| HolySite | Self |  | HolySite |  |
| HolySiteDefinition | AccessSelf |  | HolySiteDefinition |  |
| HolySiteDefinition | GetDesc |  | CString |  |
| HolySiteDefinition | GetName |  | CString |  |
| HolySiteDefinition | GetNameWithNoTooltip |  | CString |  |
| HolySiteDefinition | MakeScope |  | Scope | Jomini Script System |
| HolySiteDefinition | Self |  | HolySiteDefinition |  |
| HolySiteGlue | AccessSelf |  | HolySiteGlue |  |
| HolySiteGlue | GetHolySite |  | unknown |  |
| HolySiteGlue | GetName |  | CString |  |
| HolySiteGlue | Self |  | HolySiteGlue |  |
| HolySiteType | AccessSelf |  | HolySiteType |  |
| HolySiteType | GetIcon |  | unknown |  |
| HolySiteType | GetName |  | CString |  |
| HolySiteType | GetNameWithNoTooltip |  | CString |  |
| HolySiteType | GetTooltip |  | CString |  |
| HolySiteType | MakeScope |  | Scope | Jomini Script System |
| HolySiteType | Self |  | HolySiteType |  |
| IconWrap | AccessSelf |  | IconWrap |  |
| IconWrap | GetTexture |  | unknown |  |
| IconWrap | GetTooltip |  | CString |  |
| IconWrap | Self |  | IconWrap |  |
| ImageLookupNode | AccessSelf |  | ImageLookupNode |  |
| ImageLookupNode | Self |  | ImageLookupNode |  |
| Implementable | AccessSelf |  | Implementable |  |
| Implementable | HasPotential |  | bool |  |
| Implementable | Self |  | Implementable |  |
| ImplementedCabinetAction | AccessSelf |  | ImplementedCabinetAction |  |
| ImplementedCabinetAction | GetAction |  | unknown |  |
| ImplementedCabinetAction | GetTooltip |  | CString |  |
| ImplementedCabinetAction | Self |  | ImplementedCabinetAction |  |
| ImplementedEstatePrivilege | AccessSelf |  | ImplementedEstatePrivilege |  |
| ImplementedEstatePrivilege | GetEstatePrivilege |  | unknown |  |
| ImplementedEstatePrivilege | GetTooltip |  | CString |  |
| ImplementedEstatePrivilege | Self |  | ImplementedEstatePrivilege |  |
| ImplementedGovernmentReform | AccessSelf |  | ImplementedGovernmentReform |  |
| ImplementedGovernmentReform | GetReform |  | unknown |  |
| ImplementedGovernmentReform | GetTooltip |  | CString |  |
| ImplementedGovernmentReform | Self |  | ImplementedGovernmentReform |  |
| ImplementedPolicy | AccessSelf |  | ImplementedPolicy |  |
| ImplementedPolicy | GetModifierText |  | CString |  |
| ImplementedPolicy | GetName |  | CString |  |
| ImplementedPolicy | GetNameWithNoTooltip |  | CString |  |
| ImplementedPolicy | GetPolicy |  | unknown |  |
| ImplementedPolicy | GetTooltip |  | CString |  |
| ImplementedPolicy | IsFullyImplemented |  | bool |  |
| ImplementedPolicy | Self |  | ImplementedPolicy |  |
| ImportExportLateralView | AccessSelf |  | ImportExportLateralView |  |
| ImportExportLateralView | GetBestDealProfit |  | CFixedPoint |  |
| ImportExportLateralView | GetGoods |  | unknown |  |
| ImportExportLateralView | GetItems |  | unknown |  |
| ImportExportLateralView | GetPlayer |  | unknown |  |
| ImportExportLateralView | IsExport |  | bool |  |
| ImportExportLateralView | IsLeftPanel |  | bool |  |
| ImportExportLateralView | IsRightPanel |  | bool |  |
| ImportExportLateralView | Self |  | ImportExportLateralView |  |
| ImportExportMarker | AccessSelf |  | ImportExportMarker |  |
| ImportExportMarker | GetLocation |  | unknown |  |
| ImportExportMarker | GetPossibleItem |  | unknown |  |
| ImportExportMarker | Self |  | ImportExportMarker |  |
| ImportTool | AccessSelf |  | ImportTool |  |
| ImportTool | AreAllSelected |  | bool |  |
| ImportTool | Cancel |  | void |  |
| ImportTool | GetExportMaskTexture |  | unknown |  |
| ImportTool | GetExportNotes |  | CString |  |
| ImportTool | GetMaskEffect |  | unknown |  |
| ImportTool | HasExportNotes |  | bool |  |
| ImportTool | Import |  | void |  |
| ImportTool | IsImporting |  | bool |  |
| ImportTool | IsSelectedIndeterminable |  | bool |  |
| ImportTool | IsZipLoaded |  | bool |  |
| ImportTool | Self |  | ImportTool |  |
| ImportTool | SetMaskAsReferenceOverlay |  | void |  |
| ImportTool | ToggleAllSelected |  | void |  |
| Importable | AccessSelf |  | Importable |  |
| Importable | GetName |  | CString |  |
| Importable | IsSelected |  | bool |  |
| Importable | Self |  | Importable |  |
| Importable | SetSelected | 1. unknown | void |  |
| ImportableGroup | AccessSelf |  | ImportableGroup |  |
| ImportableGroup | AreAllSelected |  | bool |  |
| ImportableGroup | GetImportableCount |  | int32 |  |
| ImportableGroup | GetImportables |  | unknown |  |
| ImportableGroup | GetTitle |  | CString |  |
| ImportableGroup | HasDiffTool |  | bool |  |
| ImportableGroup | IsCollapsed |  | bool |  |
| ImportableGroup | IsSelectedIndeterminable |  | bool |  |
| ImportableGroup | LaunchDiffTool |  | void |  |
| ImportableGroup | Self |  | ImportableGroup |  |
| ImportableGroup | ToggleAllSelected |  | void |  |
| ImportableGroup | ToggleCollapsed |  | void |  |
| ImportantCultureItem | AccessSelf |  | ImportantCultureItem |  |
| ImportantCultureItem | GetAcceptedCultureDescription |  | CString |  |
| ImportantCultureItem | GetColor |  | CVector4f |  |
| ImportantCultureItem | GetOurOpinion |  | CString |  |
| ImportantCultureItem | GetOurOpinionIcon |  | CString |  |
| ImportantCultureItem | GetOurOpinionTooltip |  | CString |  |
| ImportantCultureItem | GetPercentSize |  | CFixedPoint |  |
| ImportantCultureItem | GetPercentSizeTooltip |  | CString |  |
| ImportantCultureItem | GetPopSize |  | CString |  |
| ImportantCultureItem | GetTheirOpinion |  | CString |  |
| ImportantCultureItem | GetTheirOpinionIcon |  | CString |  |
| ImportantCultureItem | GetTheirOpinionTooltip |  | CString |  |
| ImportantCultureItem | IsAccepted |  | bool |  |
| ImportantCultureItem | IsForeign |  | bool |  |
| ImportantCultureItem | IsNonTolerated |  | bool |  |
| ImportantCultureItem | IsPrimary |  | bool |  |
| ImportantCultureItem | IsTolerated |  | bool |  |
| ImportantCultureItem | Self |  | ImportantCultureItem |  |
| ImportantCultureItem | ShouldDisplayForeign |  | bool |  |
| ImportantReligionItem | AccessSelf |  | ImportantReligionItem |  |
| ImportantReligionItem | GetColor |  | CVector4f |  |
| ImportantReligionItem | GetOurOpinion |  | CString |  |
| ImportantReligionItem | GetOurOpinionIcon |  | CString |  |
| ImportantReligionItem | GetOurOpinionTooltip |  | CString |  |
| ImportantReligionItem | GetPercentSize |  | CFixedPoint |  |
| ImportantReligionItem | GetPercentSizeTooltip |  | CString |  |
| ImportantReligionItem | GetPopSize |  | CString |  |
| ImportantReligionItem | GetStatusInt |  | int32 |  |
| ImportantReligionItem | GetTheirOpinion |  | CString |  |
| ImportantReligionItem | GetTheirOpinionIcon |  | CString |  |
| ImportantReligionItem | GetTheirOpinionTooltip |  | CString |  |
| ImportantReligionItem | IsHeathen |  | bool |  |
| ImportantReligionItem | IsHeretic |  | bool |  |
| ImportantReligionItem | IsPercentSizeAlmostZero |  | bool |  |
| ImportantReligionItem | IsTrueFaith |  | bool |  |
| ImportantReligionItem | Self |  | ImportantReligionItem |  |
| ImproveOpinionMarker | AccessSelf |  | ImproveOpinionMarker |  |
| ImproveOpinionMarker | GetCountry |  | unknown |  |
| ImproveOpinionMarker | GetLocation |  | unknown |  |
| ImproveOpinionMarker | GetProgress |  | float |  |
| ImproveOpinionMarker | GetRightClickConditions |  | CString |  |
| ImproveOpinionMarker | GetTooltip |  | CString |  |
| ImproveOpinionMarker | IsRightClickEnabled |  | bool |  |
| ImproveOpinionMarker | OnClick |  | void |  |
| ImproveOpinionMarker | OnRightClick |  | void |  |
| ImproveOpinionMarker | Self |  | ImproveOpinionMarker |  |
| InGameMissionTaskItem | AccessSelf |  | InGameMissionTaskItem |  |
| InGameMissionTaskItem | GetConditions |  | CString |  |
| InGameMissionTaskItem | GetDuration |  | CString |  |
| InGameMissionTaskItem | GetName |  | CString |  |
| InGameMissionTaskItem | GetProgress |  | float |  |
| InGameMissionTaskItem | GetRewards |  | CString |  |
| InGameMissionTaskItem | GetStartEffect |  | CString |  |
| InGameMissionTaskItem | GetTask |  | unknown |  |
| InGameMissionTaskItem | GetTooltip |  | CString |  |
| InGameMissionTaskItem | IsEnabled |  | bool |  |
| InGameMissionTaskItem | IsInProgress |  | bool |  |
| InGameMissionTaskItem | IsInstant |  | bool |  |
| InGameMissionTaskItem | IsPossible |  | bool |  |
| InGameMissionTaskItem | OpenTreeTask |  | void |  |
| InGameMissionTaskItem | Self |  | InGameMissionTaskItem |  |
| InGameMissionTaskItem | StartTask |  | void |  |
| InGameTopbar | AccessAlertManager |  | unknown |  |
| InGameTopbar | AccessControlGroups |  | unknown |  |
| InGameTopbar | AccessSelf |  | InGameTopbar |  |
| InGameTopbar | GetCurrentAdvanceUIAction |  | unknown |  |
| InGameTopbar | GetEstates |  | unknown |  |
| InGameTopbar | GetPlayer |  | unknown |  |
| InGameTopbar | GetPlayerCurrencyChange | 1. unknown | CFixedPoint |  |
| InGameTopbar | GetPlayerCurrencyChangeFormatted | 1. unknown | CString |  |
| InGameTopbar | GetPowerIcon |  | unknown |  |
| InGameTopbar | GetSituations |  | unknown |  |
| InGameTopbar | HasMissions |  | bool |  |
| InGameTopbar | OnFlagAnimationEnds |  | void |  |
| InGameTopbar | Self |  | InGameTopbar |  |
| InfoboxNodeWindow | AccessSelf |  | InfoboxNodeWindow |  |
| InfoboxNodeWindow | GetTitleScale |  | float |  |
| InfoboxNodeWindow | Self |  | InfoboxNodeWindow |  |
| InputActionBinding | AccessSelf |  | InputActionBinding |  |
| InputActionBinding | Self |  | InputActionBinding |  |
| InspectorPanel | AccessSelf |  | InspectorPanel |  |
| InspectorPanel | GetAnchorItems |  | unknown |  |
| InspectorPanel | GetSearchFilter |  | CString |  |
| InspectorPanel | Self |  | InspectorPanel |  |
| InspectorPanel | SetSearchFilter |  | void |  |
| Institution | AccessSelf |  | Institution |  |
| Institution | GetAge |  | unknown |  |
| Institution | GetCurrentSpreadInPlayer |  | CString |  |
| Institution | GetFlavorText |  | CString |  |
| Institution | GetGlobalSpawnCandidatesInformation |  | CString |  |
| Institution | GetName |  | CString |  |
| Institution | GetNameWithNoTooltip |  | CString |  |
| Institution | GetOrigin |  | unknown |  |
| Institution | GetOtherSpawn |  | CString |  |
| Institution | GetPossibility |  | CString |  |
| Institution | GetSpawnReasons |  | CString |  |
| Institution | GetTooltip |  | CString |  |
| Institution | HasBirthPlace |  | bool |  |
| Institution | HasOtherSpawn |  | bool |  |
| Institution | HasSpawned |  | bool |  |
| Institution | IsValidForCurrentAge |  | bool |  |
| Institution | MakeScope |  | Scope | Jomini Script System |
| Institution | Self |  | Institution |  |
| InstitutionEditor | AccessSelf |  | InstitutionEditor |  |
| InstitutionEditor | GetCurrent |  | CString |  |
| InstitutionEditor | GetEntries |  | unknown |  |
| InstitutionEditor | Self |  | InstitutionEditor |  |
| InstitutionEntry | AccessSelf |  | InstitutionEntry |  |
| InstitutionEntry | GetName |  | CString |  |
| InstitutionEntry | OnClick |  | void |  |
| InstitutionEntry | Self |  | InstitutionEntry |  |
| InstitutionItem | AccessSelf |  | InstitutionItem |  |
| InstitutionItem | GetUIAction |  | unknown |  |
| InstitutionItem | Self |  | InstitutionItem |  |
| InstitutionMessage | AccessSelf |  | InstitutionMessage |  |
| InstitutionMessage | GetInstitution |  | unknown |  |
| InstitutionMessage | Self |  | InstitutionMessage |  |
| Insult | AccessSelf |  | Insult |  |
| Insult | BuildTextFor | 1. unknown 2. unknown | CString |  |
| Insult | Self |  | Insult |  |
| InsultCandidate | AccessSelf |  | InsultCandidate |  |
| InsultCandidate | GetText |  | CString |  |
| InsultCandidate | Self |  | InsultCandidate |  |
| InteractionTarget | AccessSelf |  | InteractionTarget |  |
| InteractionTarget | AccessUnit |  | unknown |  |
| InteractionTarget | GetActiveResolution |  | unknown |  |
| InteractionTarget | GetAdvanceType |  | unknown |  |
| InteractionTarget | GetAge |  | unknown |  |
| InteractionTarget | GetArea |  | unknown |  |
| InteractionTarget | GetArtist |  | unknown |  |
| InteractionTarget | GetAvatar |  | unknown |  |
| InteractionTarget | GetBoolean |  | bool |  |
| InteractionTarget | GetBuilding |  | unknown |  |
| InteractionTarget | GetBuildingType |  | unknown |  |
| InteractionTarget | GetCabinet |  | unknown |  |
| InteractionTarget | GetCabinetAction |  | unknown |  |
| InteractionTarget | GetCardinal |  | unknown |  |
| InteractionTarget | GetCasusBelli |  | unknown |  |
| InteractionTarget | GetCharacter |  | unknown |  |
| InteractionTarget | GetCharacterInteraction |  | unknown |  |
| InteractionTarget | GetChildEducation |  | unknown |  |
| InteractionTarget | GetClimate |  | unknown |  |
| InteractionTarget | GetColonialCharter |  | unknown |  |
| InteractionTarget | GetCombat |  | unknown |  |
| InteractionTarget | GetCombatSide |  | unknown |  |
| InteractionTarget | GetContinent |  | unknown |  |
| InteractionTarget | GetCountry |  | unknown |  |
| InteractionTarget | GetCountryInteraction |  | unknown |  |
| InteractionTarget | GetCountryRank |  | unknown |  |
| InteractionTarget | GetCulture |  | unknown |  |
| InteractionTarget | GetCultureGroup |  | unknown |  |
| InteractionTarget | GetDialect |  | unknown |  |
| InteractionTarget | GetDisaster |  | unknown |  |
| InteractionTarget | GetDisasterType |  | unknown |  |
| InteractionTarget | GetDisease |  | unknown |  |
| InteractionTarget | GetDiseaseOutbreak |  | unknown |  |
| InteractionTarget | GetDynasty |  | unknown |  |
| InteractionTarget | GetEmploymentSystem |  | unknown |  |
| InteractionTarget | GetEstate |  | unknown |  |
| InteractionTarget | GetEstatePrivilege |  | unknown |  |
| InteractionTarget | GetEstateType |  | unknown |  |
| InteractionTarget | GetEthnicity |  | unknown |  |
| InteractionTarget | GetExploration |  | unknown |  |
| InteractionTarget | GetFormableCountry |  | unknown |  |
| InteractionTarget | GetGameConceptName |  | CString |  |
| InteractionTarget | GetGameConceptTexture |  | unknown |  |
| InteractionTarget | GetGenericAction |  | unknown |  |
| InteractionTarget | GetGod |  | unknown |  |
| InteractionTarget | GetGoods |  | unknown |  |
| InteractionTarget | GetGoodsDemand |  | unknown |  |
| InteractionTarget | GetGovernmentReform |  | unknown |  |
| InteractionTarget | GetGovernmentType |  | unknown |  |
| InteractionTarget | GetGraphicalCultureType |  | unknown |  |
| InteractionTarget | GetHegemony |  | unknown |  |
| InteractionTarget | GetHeirSelection |  | unknown |  |
| InteractionTarget | GetHolySite |  | unknown |  |
| InteractionTarget | GetHolySiteDefinition |  | unknown |  |
| InteractionTarget | GetHolySiteType |  | unknown |  |
| InteractionTarget | GetInstitution |  | unknown |  |
| InteractionTarget | GetInternationalOrganization |  | unknown |  |
| InteractionTarget | GetInternationalOrganizationType |  | unknown |  |
| InteractionTarget | GetLandOwnershipRule |  | unknown |  |
| InteractionTarget | GetLanguage |  | unknown |  |
| InteractionTarget | GetLaw |  | unknown |  |
| InteractionTarget | GetLevySetup |  | unknown |  |
| InteractionTarget | GetLoan |  | unknown |  |
| InteractionTarget | GetLocation |  | unknown |  |
| InteractionTarget | GetLocationRank |  | unknown |  |
| InteractionTarget | GetLongName |  | CString |  |
| InteractionTarget | GetLongNameWithNoTooltip |  | CString |  |
| InteractionTarget | GetMarket |  | unknown |  |
| InteractionTarget | GetMercenary |  | unknown |  |
| InteractionTarget | GetMissionDefinition |  | unknown |  |
| InteractionTarget | GetMissionTaskDefinition |  | unknown |  |
| InteractionTarget | GetName |  | CString |  |
| InteractionTarget | GetNameWithNoTooltip |  | CString |  |
| InteractionTarget | GetParliamentAgenda |  | unknown |  |
| InteractionTarget | GetParliamentIssue |  | unknown |  |
| InteractionTarget | GetParliamentType |  | unknown |  |
| InteractionTarget | GetPayment |  | unknown |  |
| InteractionTarget | GetPolicy |  | unknown |  |
| InteractionTarget | GetPop |  | unknown |  |
| InteractionTarget | GetPopType |  | unknown |  |
| InteractionTarget | GetPrice |  | unknown |  |
| InteractionTarget | GetPrivateer |  | unknown |  |
| InteractionTarget | GetProductionMethod |  | unknown |  |
| InteractionTarget | GetProvince |  | unknown |  |
| InteractionTarget | GetProvinceDefinition |  | unknown |  |
| InteractionTarget | GetRebel |  | unknown |  |
| InteractionTarget | GetRecruitmentMethod |  | unknown |  |
| InteractionTarget | GetRegencyType |  | unknown |  |
| InteractionTarget | GetRegion |  | unknown |  |
| InteractionTarget | GetRelationType |  | unknown |  |
| InteractionTarget | GetReligion |  | unknown |  |
| InteractionTarget | GetReligionGroup |  | unknown |  |
| InteractionTarget | GetReligiousAspect |  | unknown |  |
| InteractionTarget | GetReligiousFaction |  | unknown |  |
| InteractionTarget | GetReligiousFigure |  | unknown |  |
| InteractionTarget | GetReligiousFocus |  | unknown |  |
| InteractionTarget | GetReligiousSchool |  | unknown |  |
| InteractionTarget | GetResolution |  | unknown |  |
| InteractionTarget | GetRoadType |  | unknown |  |
| InteractionTarget | GetScopeObjectReference |  | unknown |  |
| InteractionTarget | GetScriptableHintDefinition |  | unknown |  |
| InteractionTarget | GetScriptedPeaceTreatyType |  | unknown |  |
| InteractionTarget | GetSiege |  | unknown |  |
| InteractionTarget | GetSituation |  | unknown |  |
| InteractionTarget | GetSocietalValue |  | unknown |  |
| InteractionTarget | GetSpecialStatus |  | unknown |  |
| InteractionTarget | GetSubContinent |  | unknown |  |
| InteractionTarget | GetSubUnit |  | unknown |  |
| InteractionTarget | GetSubUnitCategory |  | unknown |  |
| InteractionTarget | GetSubjectMilitaryStance |  | unknown |  |
| InteractionTarget | GetSubjectType |  | unknown |  |
| InteractionTarget | GetTopography |  | unknown |  |
| InteractionTarget | GetTrade |  | unknown |  |
| InteractionTarget | GetTrait |  | unknown |  |
| InteractionTarget | GetUnit |  | unknown |  |
| InteractionTarget | GetUnitAbility |  | unknown |  |
| InteractionTarget | GetUnitType |  | unknown |  |
| InteractionTarget | GetValue |  | CFixedPoint |  |
| InteractionTarget | GetVegetation |  | unknown |  |
| InteractionTarget | GetWar |  | unknown |  |
| InteractionTarget | GetWeatherSystem |  | unknown |  |
| InteractionTarget | GetWorkOfArt |  | unknown |  |
| InteractionTarget | GetWorkOfArtType |  | unknown |  |
| InteractionTarget | HasGameConcept |  | bool |  |
| InteractionTarget | HasGameConceptTexture |  | bool |  |
| InteractionTarget | IsActiveResolution |  | bool |  |
| InteractionTarget | IsAdvanceType |  | bool |  |
| InteractionTarget | IsAge |  | bool |  |
| InteractionTarget | IsArea |  | bool |  |
| InteractionTarget | IsArtist |  | bool |  |
| InteractionTarget | IsAvatar |  | bool |  |
| InteractionTarget | IsBoolean |  | bool |  |
| InteractionTarget | IsBuilding |  | bool |  |
| InteractionTarget | IsBuildingType |  | bool |  |
| InteractionTarget | IsCabinetAction |  | bool |  |
| InteractionTarget | IsCardinal |  | bool |  |
| InteractionTarget | IsCasusBelli |  | bool |  |
| InteractionTarget | IsCharacter |  | bool |  |
| InteractionTarget | IsCharacterInteraction |  | bool |  |
| InteractionTarget | IsChildEducation |  | bool |  |
| InteractionTarget | IsClimate |  | bool |  |
| InteractionTarget | IsColonialCharter |  | bool |  |
| InteractionTarget | IsCombat |  | bool |  |
| InteractionTarget | IsCombatSide |  | bool |  |
| InteractionTarget | IsContinent |  | bool |  |
| InteractionTarget | IsCountry |  | bool |  |
| InteractionTarget | IsCountryInteraction |  | bool |  |
| InteractionTarget | IsCountryRank |  | bool |  |
| InteractionTarget | IsCulture |  | bool |  |
| InteractionTarget | IsCultureGroup |  | bool |  |
| InteractionTarget | IsDisaster |  | bool |  |
| InteractionTarget | IsDisasterType |  | bool |  |
| InteractionTarget | IsDisease |  | bool |  |
| InteractionTarget | IsDiseaseOutbreak |  | bool |  |
| InteractionTarget | IsDynasty |  | bool |  |
| InteractionTarget | IsEmploymentSystem |  | bool |  |
| InteractionTarget | IsEstate |  | bool |  |
| InteractionTarget | IsEstatePrivilege |  | bool |  |
| InteractionTarget | IsEstateType |  | bool |  |
| InteractionTarget | IsEthnicity |  | bool |  |
| InteractionTarget | IsExploration |  | bool |  |
| InteractionTarget | IsFormableCountry |  | bool |  |
| InteractionTarget | IsGenericAction |  | bool |  |
| InteractionTarget | IsGod |  | bool |  |
| InteractionTarget | IsGoods |  | bool |  |
| InteractionTarget | IsGoodsDemand |  | bool |  |
| InteractionTarget | IsGovernmentReform |  | bool |  |
| InteractionTarget | IsGovernmentType |  | bool |  |
| InteractionTarget | IsGraphicalCultureType |  | bool |  |
| InteractionTarget | IsHegemony |  | bool |  |
| InteractionTarget | IsHeirSelection |  | bool |  |
| InteractionTarget | IsHolySite |  | bool |  |
| InteractionTarget | IsHolySiteDefinition |  | bool |  |
| InteractionTarget | IsHolySiteType |  | bool |  |
| InteractionTarget | IsInstitution |  | bool |  |
| InteractionTarget | IsInternationalOrganization |  | bool |  |
| InteractionTarget | IsInternationalOrganizationType |  | bool |  |
| InteractionTarget | IsLandOwnershipRule |  | bool |  |
| InteractionTarget | IsLanguage |  | bool |  |
| InteractionTarget | IsLaw |  | bool |  |
| InteractionTarget | IsLevySetup |  | bool |  |
| InteractionTarget | IsLoan |  | bool |  |
| InteractionTarget | IsLocation |  | bool |  |
| InteractionTarget | IsLocationRank |  | bool |  |
| InteractionTarget | IsMarket |  | bool |  |
| InteractionTarget | IsMercenary |  | bool |  |
| InteractionTarget | IsMissionDefinition |  | bool |  |
| InteractionTarget | IsMissionTaskDefinition |  | bool |  |
| InteractionTarget | IsParliamentAgenda |  | bool |  |
| InteractionTarget | IsParliamentIssue |  | bool |  |
| InteractionTarget | IsParliamentType |  | bool |  |
| InteractionTarget | IsPayment |  | bool |  |
| InteractionTarget | IsPolicy |  | bool |  |
| InteractionTarget | IsPop |  | bool |  |
| InteractionTarget | IsPopType |  | bool |  |
| InteractionTarget | IsPrice |  | bool |  |
| InteractionTarget | IsPrivateer |  | bool |  |
| InteractionTarget | IsProductionMethod |  | bool |  |
| InteractionTarget | IsProvince |  | bool |  |
| InteractionTarget | IsProvinceDefinition |  | bool |  |
| InteractionTarget | IsRebel |  | bool |  |
| InteractionTarget | IsRecruitmentMethod |  | bool |  |
| InteractionTarget | IsRegencyType |  | bool |  |
| InteractionTarget | IsRegion |  | bool |  |
| InteractionTarget | IsRelationType |  | bool |  |
| InteractionTarget | IsReligion |  | bool |  |
| InteractionTarget | IsReligionGroup |  | bool |  |
| InteractionTarget | IsReligiousAspect |  | bool |  |
| InteractionTarget | IsReligiousFaction |  | bool |  |
| InteractionTarget | IsReligiousFigure |  | bool |  |
| InteractionTarget | IsReligiousFocus |  | bool |  |
| InteractionTarget | IsReligiousSchool |  | bool |  |
| InteractionTarget | IsResolution |  | bool |  |
| InteractionTarget | IsRoadType |  | bool |  |
| InteractionTarget | IsScriptableHintDefinition |  | bool |  |
| InteractionTarget | IsScriptedPeaceTreatyType |  | bool |  |
| InteractionTarget | IsSet |  | bool |  |
| InteractionTarget | IsSiege |  | bool |  |
| InteractionTarget | IsSituation |  | bool |  |
| InteractionTarget | IsSocietalValue |  | bool |  |
| InteractionTarget | IsSpecialStatus |  | bool |  |
| InteractionTarget | IsSubContinent |  | bool |  |
| InteractionTarget | IsSubUnit |  | bool |  |
| InteractionTarget | IsSubUnitCategory |  | bool |  |
| InteractionTarget | IsSubjectMilitaryStance |  | bool |  |
| InteractionTarget | IsSubjectType |  | bool |  |
| InteractionTarget | IsTopography |  | bool |  |
| InteractionTarget | IsTrade |  | bool |  |
| InteractionTarget | IsTrait |  | bool |  |
| InteractionTarget | IsUnit |  | bool |  |
| InteractionTarget | IsUnitAbility |  | bool |  |
| InteractionTarget | IsUnitType |  | bool |  |
| InteractionTarget | IsValid |  | bool |  |
| InteractionTarget | IsValue |  | bool |  |
| InteractionTarget | IsVegetation |  | bool |  |
| InteractionTarget | IsWar |  | bool |  |
| InteractionTarget | IsWeatherSystem |  | bool |  |
| InteractionTarget | IsWorkOfArt |  | bool |  |
| InteractionTarget | IsWorkOfArtType |  | bool |  |
| InteractionTarget | Self |  | InteractionTarget |  |
| InternationalOrganization | AccessSelf |  | InternationalOrganization |  |
| InternationalOrganization | CanOwnLocations |  | bool |  |
| InternationalOrganization | Custom | 1. unknown | CString |  |
| InternationalOrganization | Exists |  | bool |  |
| InternationalOrganization | GetActiveResolution | 1. unknown | unknown |  |
| InternationalOrganization | GetActiveResolutionFromKey | 1. unknown | unknown |  |
| InternationalOrganization | GetAllMembersEffects |  | CString |  |
| InternationalOrganization | GetAverageSpecialStatusPower | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetCanParticipateInParliament |  | CString |  |
| InternationalOrganization | GetCombinedPrioritySpecialStatusPower | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetCombinedSpecialStatusPower |  | CFixedPoint |  |
| InternationalOrganization | GetCombinedUniqueSpecialStatusPower |  | CFixedPoint |  |
| InternationalOrganization | GetCountriesWithSpecialStatus | 1. unknown | unknown |  |
| InternationalOrganization | GetCountriesWithSpecialStatusFromKey | 1. unknown | unknown |  |
| InternationalOrganization | GetCountryOrderedByGreatPowerScore | 1. unknown | unknown |  |
| InternationalOrganization | GetCountryWithHighestGreatPower |  | unknown |  |
| InternationalOrganization | GetCountryWithHighestGreatPowerScoreWithSpecialStatus | 1. unknown | unknown |  |
| InternationalOrganization | GetCreationDate |  | CString |  |
| InternationalOrganization | GetCurrencyMaxValue | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetCurrencyMinValue | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetCurrencyValue | 1. unknown | CString |  |
| InternationalOrganization | GetElectors |  | unknown |  |
| InternationalOrganization | GetExtraCountries | 1. unknown | CString |  |
| InternationalOrganization | GetFixedPointCurrencyValue | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetFleetBasingRights |  | CString |  |
| InternationalOrganization | GetHasMilitaryAccess |  | CString |  |
| InternationalOrganization | GetHighestPrioritySpecialStatusPower | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetID |  | int32 |  |
| InternationalOrganization | GetIcon |  | unknown |  |
| InternationalOrganization | GetIllustration |  | unknown |  |
| InternationalOrganization | GetImplementedPolicies |  | CString |  |
| InternationalOrganization | GetImplementedPolicyForLaw | 1. unknown | unknown |  |
| InternationalOrganization | GetImplementedTooltipForLaw | 1. unknown | CString |  |
| InternationalOrganization | GetInternationalOrganizationEffects |  | CString |  |
| InternationalOrganization | GetJoinWarsText |  | CString |  |
| InternationalOrganization | GetKey |  | CString |  |
| InternationalOrganization | GetLaws |  | unknown |  |
| InternationalOrganization | GetLeaderChangeMethodTooltip |  | CString |  |
| InternationalOrganization | GetLeaderChangeProgress |  | CFixedPoint |  |
| InternationalOrganization | GetLeaderChangeTotalDays |  | CFixedPoint |  |
| InternationalOrganization | GetLeaderCount |  | int32 |  |
| InternationalOrganization | GetLeaderCountry |  | unknown |  |
| InternationalOrganization | GetLeaderEffects |  | CString |  |
| InternationalOrganization | GetLeaderName |  | CString |  |
| InternationalOrganization | GetLeaderScopeObjectAtIndex | 1. unknown | unknown |  |
| InternationalOrganization | GetLeaderSpecialStatusPower |  | CFixedPoint |  |
| InternationalOrganization | GetLeaderSpecialStatusPowerFraction |  | CFixedPoint |  |
| InternationalOrganization | GetLeaderTitle |  | CString |  |
| InternationalOrganization | GetLeaders |  | unknown |  |
| InternationalOrganization | GetLeadershipCriteria |  | CString |  |
| InternationalOrganization | GetLeadershipElectionResolution |  | unknown |  |
| InternationalOrganization | GetLimitedDiplomacy |  | CString |  |
| InternationalOrganization | GetMemberAnnexation |  | CString |  |
| InternationalOrganization | GetMembers |  | unknown |  |
| InternationalOrganization | GetMembersAmount |  | CFixedPoint |  |
| InternationalOrganization | GetModifierValue | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetModifierValueString | 1. unknown | CString |  |
| InternationalOrganization | GetMonthlyEffectText |  | CString |  |
| InternationalOrganization | GetName |  | CString |  |
| InternationalOrganization | GetNameWithFallbackTooltip |  | CString |  |
| InternationalOrganization | GetNameWithNoTooltip |  | CString |  |
| InternationalOrganization | GetNewLeadersString |  | CString |  |
| InternationalOrganization | GetOnAddedLocation | 1. unknown | CString |  |
| InternationalOrganization | GetOnRemovedLocation | 1. unknown | CString |  |
| InternationalOrganization | GetOtherEffects |  | CString |  |
| InternationalOrganization | GetOtherMembersEffects |  | CString |  |
| InternationalOrganization | GetOwnedLocationsSize |  | int32 |  |
| InternationalOrganization | GetParliament |  | unknown |  |
| InternationalOrganization | GetPayments |  | unknown |  |
| InternationalOrganization | GetPolicies |  | unknown |  |
| InternationalOrganization | GetPolicyForLaw | 1. unknown | unknown |  |
| InternationalOrganization | GetPolicyProgressForLaw | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetReligion |  | unknown |  |
| InternationalOrganization | GetShortCurrencyValue | 1. unknown | CString |  |
| InternationalOrganization | GetSpecialStatus | 1. unknown | unknown |  |
| InternationalOrganization | GetSpecialStatusPowerFraction | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetSpecialStatuses |  | unknown |  |
| InternationalOrganization | GetTarget |  | unknown |  |
| InternationalOrganization | GetTimedModifierOwner |  | unknown |  |
| InternationalOrganization | GetTimedModifiers |  | unknown |  |
| InternationalOrganization | GetTooltip |  | CString |  |
| InternationalOrganization | GetTotalPopulation |  | CFixedPoint |  |
| InternationalOrganization | GetTotalSpecialStatusPower | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetType |  | unknown |  |
| InternationalOrganization | GetUniqueSpecialStatusPowerFraction | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetVariable | 1. unknown | CFixedPoint |  |
| InternationalOrganization | GetVariableIcon | 1. unknown | unknown |  |
| InternationalOrganization | GetVariableText | 1. unknown | CString |  |
| InternationalOrganization | HasActiveResolution | 1. unknown | bool |  |
| InternationalOrganization | HasActiveResolutionFromKey | 1. unknown | bool |  |
| InternationalOrganization | HasElectors |  | bool |  |
| InternationalOrganization | HasLawFromKey | 1. unknown | bool |  |
| InternationalOrganization | HasLaws |  | bool |  |
| InternationalOrganization | HasLeaderChangeMethod |  | bool |  |
| InternationalOrganization | HasLeaderCountry |  | bool |  |
| InternationalOrganization | HasLeadershipElectionResolution |  | bool |  |
| InternationalOrganization | HasMembers |  | bool |  |
| InternationalOrganization | HasMonthlyEffect |  | bool |  |
| InternationalOrganization | HasParliament |  | bool |  |
| InternationalOrganization | HasPolicyForLaw | 1. unknown | bool |  |
| InternationalOrganization | HasPolicyFromKey | 1. unknown | bool |  |
| InternationalOrganization | HasReligion |  | bool |  |
| InternationalOrganization | HasSpecialStatus | 1. unknown | bool |  |
| InternationalOrganization | HasValidLeaderCountry |  | bool |  |
| InternationalOrganization | HasVariable | 1. unknown | bool |  |
| InternationalOrganization | IsCountryMember | 1. unknown | bool |  |
| InternationalOrganization | IsCurrencyEnabled | 1. unknown | bool |  |
| InternationalOrganization | IsCurrencyValueEqualOrLessThanZero | 1. unknown | bool |  |
| InternationalOrganization | IsIOLeaderCountry | 1. unknown | bool |  |
| InternationalOrganization | IsLeaderCountryInPlace |  | bool |  |
| InternationalOrganization | IsLocationOwned | 1. unknown | bool |  |
| InternationalOrganization | IsTextValueVariable | 1. unknown | bool |  |
| InternationalOrganization | IsVote |  | bool |  |
| InternationalOrganization | MakeScope |  | Scope | Jomini Script System |
| InternationalOrganization | ResolutionIsActive | 1. unknown | bool |  |
| InternationalOrganization | Self |  | InternationalOrganization |  |
| InternationalOrganization | ShouldDisplayProgressForLaw | 1. unknown | bool |  |
| InternationalOrganization | UsesLeader |  | bool |  |
| InternationalOrganizationLawAlert | AccessSelf |  | InternationalOrganizationLawAlert |  |
| InternationalOrganizationLawAlert | GetIconTexture |  | unknown |  |
| InternationalOrganizationLawAlert | GetLawName |  | CString |  |
| InternationalOrganizationLawAlert | GetTooltip |  | CString |  |
| InternationalOrganizationLawAlert | GoToInternationalOrganizationLaws |  | void |  |
| InternationalOrganizationLawAlert | Hide |  | void |  |
| InternationalOrganizationLawAlert | IsNew |  | bool |  |
| InternationalOrganizationLawAlert | Self |  | InternationalOrganizationLawAlert |  |
| InternationalOrganizationLawAlert | SetAsOld |  | void |  |
| InternationalOrganizationLawCategory | AccessSelf |  | InternationalOrganizationLawCategory |  |
| InternationalOrganizationLawCategory | GetBgCategoryColor |  | unknown |  |
| InternationalOrganizationLawCategory | GetCategoryIcon |  | unknown |  |
| InternationalOrganizationLawCategory | GetLaws |  | unknown |  |
| InternationalOrganizationLawCategory | GetName |  | CString |  |
| InternationalOrganizationLawCategory | IsExpanded |  | bool |  |
| InternationalOrganizationLawCategory | Self |  | InternationalOrganizationLawCategory |  |
| InternationalOrganizationLawCategory | Toggle |  | void |  |
| InternationalOrganizationMessagePopup | AccessSelf |  | InternationalOrganizationMessagePopup |  |
| InternationalOrganizationMessagePopup | GetCountry |  | unknown |  |
| InternationalOrganizationMessagePopup | GetInternationalOrganization |  | unknown |  |
| InternationalOrganizationMessagePopup | Self |  | InternationalOrganizationMessagePopup |  |
| InternationalOrganizationModifierWrap | AccessSelf |  | InternationalOrganizationModifierWrap |  |
| InternationalOrganizationModifierWrap | GetIcon |  | unknown |  |
| InternationalOrganizationModifierWrap | GetName |  | CString |  |
| InternationalOrganizationModifierWrap | GetTooltip |  | CString |  |
| InternationalOrganizationModifierWrap | Self |  | InternationalOrganizationModifierWrap |  |
| InternationalOrganizationType | AccessSelf |  | InternationalOrganizationType |  |
| InternationalOrganizationType | GetBackgroundTexture |  | unknown |  |
| InternationalOrganizationType | GetIcon |  | unknown |  |
| InternationalOrganizationType | GetLandOwnershipRule |  | unknown |  |
| InternationalOrganizationType | GetName |  | CString |  |
| InternationalOrganizationType | GetNameKey |  | CString |  |
| InternationalOrganizationType | GetNameWithNoTooltip |  | CString |  |
| InternationalOrganizationType | GetTooltip |  | CString |  |
| InternationalOrganizationType | GetVariables |  | unknown |  |
| InternationalOrganizationType | HasDeclareWarOnTargetCasusBelli |  | bool |  |
| InternationalOrganizationType | HasTarget |  | bool |  |
| InternationalOrganizationType | MakeScope |  | Scope | Jomini Script System |
| InternationalOrganizationType | Self |  | InternationalOrganizationType |  |
| InternationalOrganizationType | ShowStrengthComparisonWithTarget |  | bool |  |
| InternationalOrganizationTypeVariable | AccessSelf |  | InternationalOrganizationTypeVariable |  |
| InternationalOrganizationTypeVariable | GetDesc |  | CString |  |
| InternationalOrganizationTypeVariable | GetMax |  | CFixedPoint |  |
| InternationalOrganizationTypeVariable | GetMin |  | CFixedPoint |  |
| InternationalOrganizationTypeVariable | GetMonthlyChangeBreakdown | 1. unknown | CString |  |
| InternationalOrganizationTypeVariable | GetMonthlyChangeFiltered | 1. unknown 2. unknown | CFixedPoint |  |
| InternationalOrganizationTypeVariable | GetMonthlyChangeString | 1. unknown | CString |  |
| InternationalOrganizationTypeVariable | GetMonthlyChangeValue | 1. unknown | CFixedPoint |  |
| InternationalOrganizationTypeVariable | GetName |  | CString |  |
| InternationalOrganizationTypeVariable | GetTag |  | CString |  |
| InternationalOrganizationTypeVariable | GetTitle | 1. unknown | CString |  |
| InternationalOrganizationTypeVariable | GetTooltip | 1. unknown | CString |  |
| InternationalOrganizationTypeVariable | IsHidden |  | bool |  |
| InternationalOrganizationTypeVariable | IsMonthlyChangeHidden |  | bool |  |
| InternationalOrganizationTypeVariable | Self |  | InternationalOrganizationTypeVariable |  |
| InternationalOrganizationTypeView | AccessSelf |  | InternationalOrganizationTypeView |  |
| InternationalOrganizationTypeView | GetInternationalOrganizationType |  | unknown |  |
| InternationalOrganizationTypeView | GetOrganizations |  | unknown |  |
| InternationalOrganizationTypeView | GetPlayer |  | unknown |  |
| InternationalOrganizationTypeView | IsLeftPanel |  | bool |  |
| InternationalOrganizationTypeView | IsRightPanel |  | bool |  |
| InternationalOrganizationTypeView | Self |  | InternationalOrganizationTypeView |  |
| InternationalOrganizationsView | AccessSelf |  | InternationalOrganizationsView |  |
| InternationalOrganizationsView | CanDeclareWar |  | bool |  |
| InternationalOrganizationsView | CanDeclareWarTT |  | CString |  |
| InternationalOrganizationsView | DeclareWar |  | void |  |
| InternationalOrganizationsView | GetActions |  | unknown |  |
| InternationalOrganizationsView | GetAgendas |  | unknown |  |
| InternationalOrganizationsView | GetCandidateCount |  | CFixedPoint |  |
| InternationalOrganizationsView | GetCandidates |  | unknown |  |
| InternationalOrganizationsView | GetFavoriteForVoter | 1. unknown | unknown |  |
| InternationalOrganizationsView | GetHolySites |  | unknown |  |
| InternationalOrganizationsView | GetHolySitesSortSearch |  | unknown |  |
| InternationalOrganizationsView | GetIOLandLevies |  | CString |  |
| InternationalOrganizationsView | GetIOLandLeviesInConstruction |  | CString |  |
| InternationalOrganizationsView | GetIOLandStrength |  | CString |  |
| InternationalOrganizationsView | GetIOLandStrengthTooltip |  | CString |  |
| InternationalOrganizationsView | GetIONavalLevies |  | CFixedPoint |  |
| InternationalOrganizationsView | GetIONavalLeviesInConstruction |  | CFixedPoint |  |
| InternationalOrganizationsView | GetIONavalStrength |  | CFixedPoint |  |
| InternationalOrganizationsView | GetIONavalStrengthTooltip |  | CString |  |
| InternationalOrganizationsView | GetIllustration |  | unknown |  |
| InternationalOrganizationsView | GetInternationalOrganization |  | unknown |  |
| InternationalOrganizationsView | GetLandComparisonTooltip |  | CString |  |
| InternationalOrganizationsView | GetLawCategories |  | unknown |  |
| InternationalOrganizationsView | GetLawCategoriesSortSearch |  | unknown |  |
| InternationalOrganizationsView | GetLawCount |  | CFixedPoint |  |
| InternationalOrganizationsView | GetLeadershipCriteria |  | CString |  |
| InternationalOrganizationsView | GetMax |  | float |  |
| InternationalOrganizationsView | GetMemberItems |  | unknown |  |
| InternationalOrganizationsView | GetMembersSortSearch |  | unknown |  |
| InternationalOrganizationsView | GetMin |  | float |  |
| InternationalOrganizationsView | GetNavalComparisonTooltip |  | CString |  |
| InternationalOrganizationsView | GetParliamentActions |  | unknown |  |
| InternationalOrganizationsView | GetPercentageLandCombatStrength |  | CFixedPoint |  |
| InternationalOrganizationsView | GetPercentageNavalCombatStrength |  | CFixedPoint |  |
| InternationalOrganizationsView | GetPlayer |  | unknown |  |
| InternationalOrganizationsView | GetPrice |  | float |  |
| InternationalOrganizationsView | GetReligiousFactions |  | unknown |  |
| InternationalOrganizationsView | GetResolutionCount |  | CFixedPoint |  |
| InternationalOrganizationsView | GetResolutions |  | unknown |  |
| InternationalOrganizationsView | GetSaints |  | unknown |  |
| InternationalOrganizationsView | GetSaintsSortSearch |  | unknown |  |
| InternationalOrganizationsView | GetSecondVoterReasonString | 1. unknown | CString |  |
| InternationalOrganizationsView | GetSpecialMemberItems |  | unknown |  |
| InternationalOrganizationsView | GetSpecialMembersSortSearch |  | unknown |  |
| InternationalOrganizationsView | GetSpecialStatusCountry | 1. unknown | unknown |  |
| InternationalOrganizationsView | GetStep |  | float |  |
| InternationalOrganizationsView | GetTargetLandLevies |  | CString |  |
| InternationalOrganizationsView | GetTargetLandLeviesInConstruction |  | CString |  |
| InternationalOrganizationsView | GetTargetLandStrength |  | CString |  |
| InternationalOrganizationsView | GetTargetLandStrengthTooltip |  | CString |  |
| InternationalOrganizationsView | GetTargetNavalLevies |  | CFixedPoint |  |
| InternationalOrganizationsView | GetTargetNavalLeviesInConstruction |  | CFixedPoint |  |
| InternationalOrganizationsView | GetTargetNavalStrength |  | CFixedPoint |  |
| InternationalOrganizationsView | GetTargetNavalStrengthTooltip |  | CString |  |
| InternationalOrganizationsView | GetTopVoterReasonString | 1. unknown | CString |  |
| InternationalOrganizationsView | GetTotalVotes |  | CFixedPoint |  |
| InternationalOrganizationsView | GetVoteFinalizationCriteria |  | CString |  |
| InternationalOrganizationsView | GetVoterReasonValue | 1. unknown | CFixedPoint |  |
| InternationalOrganizationsView | GetVoterReasonValuePlayer | 1. unknown | CFixedPoint |  |
| InternationalOrganizationsView | HasActions |  | bool |  |
| InternationalOrganizationsView | HasCandidates |  | bool |  |
| InternationalOrganizationsView | HasLaws |  | bool |  |
| InternationalOrganizationsView | HasOverview |  | bool |  |
| InternationalOrganizationsView | HasParliamentActions |  | bool |  |
| InternationalOrganizationsView | HasParliamentAgendas |  | bool |  |
| InternationalOrganizationsView | HasResolutions |  | bool |  |
| InternationalOrganizationsView | HasSpecialStatusCountry | 1. unknown | bool |  |
| InternationalOrganizationsView | IsLeftPanel |  | bool |  |
| InternationalOrganizationsView | IsRightPanel |  | bool |  |
| InternationalOrganizationsView | IsVotingForPlayer | 1. unknown | bool |  |
| InternationalOrganizationsView | OnContributionAccept |  | void |  |
| InternationalOrganizationsView | OnPriceChanged |  | void |  |
| InternationalOrganizationsView | PlayerCanBeVotedFor | 1. unknown | bool |  |
| InternationalOrganizationsView | Self |  | InternationalOrganizationsView |  |
| InternationalOrganizationsView | ShouldShowRulingHistory |  | bool |  |
| JominiGUISetting | AccessSelf |  | JominiGUISetting |  |
| JominiGUISetting | GetDesc |  | CString |  |
| JominiGUISetting | GetRelationDisabledReason |  | CString |  |
| JominiGUISetting | HasChanged |  | bool |  |
| JominiGUISetting | HasChangedSinceStartup |  | bool |  |
| JominiGUISetting | IsModificationEnabled |  | bool |  |
| JominiGUISetting | Self |  | JominiGUISetting |  |
| JominiGUISetting | ShouldShow |  | bool |  |
| JominiGameRules | AccessSelf |  | JominiGameRules |  |
| JominiGameRules | ApplySettings |  | void |  |
| JominiGameRules | CanGetAchievements |  | bool |  |
| JominiGameRules | DeletePresetAtIndex | 1. unknown | void |  |
| JominiGameRules | DeletePresetWithName | 1. unknown | void |  |
| JominiGameRules | GetInvalidPresetNameTooltip |  | CString |  |
| JominiGameRules | GetIronmanAvailableDesc |  | CString |  |
| JominiGameRules | GetIronmanToolTip |  | CString |  |
| JominiGameRules | GetPresetSaveName |  | CString |  |
| JominiGameRules | GetRulePresets |  | unknown |  |
| JominiGameRules | GetSelectedPreset |  | unknown |  |
| JominiGameRules | GetSelectedPresetIndex |  | int32 |  |
| JominiGameRules | GetSettings |  | unknown |  |
| JominiGameRules | HasPresetWithName | 1. unknown | bool |  |
| JominiGameRules | HasRuleWithFlag | 1. unknown | bool |  |
| JominiGameRules | HasSetting | 1. unknown | bool |  |
| JominiGameRules | HasValidPresetSelected |  | bool |  |
| JominiGameRules | Hide |  | void |  |
| JominiGameRules | HidePresetWindow |  | void |  |
| JominiGameRules | IsIronman |  | bool |  |
| JominiGameRules | IsIronmanAvailable |  | bool |  |
| JominiGameRules | IsPresetWindowShown |  | bool |  |
| JominiGameRules | IsValidPresetName |  | bool |  |
| JominiGameRules | OnPresetSaveNameChange | 1. unknown | void |  |
| JominiGameRules | OnPresetSaveNameEdit |  | void |  |
| JominiGameRules | OnSelectPreset |  | void |  |
| JominiGameRules | ResetAllToDefaults |  | void |  |
| JominiGameRules | SavePreset |  | void |  |
| JominiGameRules | Self |  | JominiGameRules |  |
| JominiGameRules | SetIronman | 1. unknown | void |  |
| JominiGameRules | SetPresetSaveName |  | void |  |
| JominiGameRules | ShowPresetWindow |  | void |  |
| JominiGameRules | ToggleIronmanStatus |  | void |  |
| JominiGameRules | WouldBeIronman |  | bool |  |
| JominiLoadWindow | AccessSelf |  | JominiLoadWindow |  |
| JominiLoadWindow | Cancel |  | void |  |
| JominiLoadWindow | HasLatestPlaythrough |  | bool |  |
| JominiLoadWindow | OnContinue |  | void |  |
| JominiLoadWindow | OnLoad |  | void |  |
| JominiLoadWindow | Self |  | JominiLoadWindow |  |
| JominiLoadWindow | UpdateFilter |  | void |  |
| JominiNotification | AccessSelf |  | JominiNotification |  |
| JominiNotification | GetAcceptButtonText |  | CString |  |
| JominiNotification | GetDate |  | unknown |  |
| JominiNotification | GetDateOrTimestamp |  | CString |  |
| JominiNotification | GetDeclineButtonText |  | CString |  |
| JominiNotification | GetText |  | CString |  |
| JominiNotification | GetTimestamp |  | CString |  |
| JominiNotification | GetTitle |  | CString |  |
| JominiNotification | HasDate |  | bool |  |
| JominiNotification | HasOnAccept |  | bool |  |
| JominiNotification | HasOnDecline |  | bool |  |
| JominiNotification | OnAccept |  | void |  |
| JominiNotification | OnDecline |  | void |  |
| JominiNotification | OnNotificationClick |  | void |  |
| JominiNotification | Self |  | JominiNotification |  |
| JominiNotificationOverlay | AccessSelf |  | JominiNotificationOverlay |  |
| JominiNotificationOverlay | GetAlertCount |  | int32 |  |
| JominiNotificationOverlay | GetAlerts |  | unknown |  |
| JominiNotificationOverlay | GetNotificationCategoryCount | 1. unknown | int32 |  |
| JominiNotificationOverlay | GetNotificationCount |  | int32 |  |
| JominiNotificationOverlay | GetNotifications |  | unknown |  |
| JominiNotificationOverlay | HideSidebar |  | void |  |
| JominiNotificationOverlay | Self |  | JominiNotificationOverlay |  |
| JominiNotificationOverlay | ShowSidebar |  | void |  |
| JominiNotificationOverlay | ToggleSidebar |  | void |  |
| JominiPasswordPopup | AccessSelf |  | JominiPasswordPopup |  |
| JominiPasswordPopup | OnDecline |  | void |  |
| JominiPasswordPopup | OnSubmit |  | void |  |
| JominiPasswordPopup | Self |  | JominiPasswordPopup |  |
| JominiServer | AccessSelf |  | JominiServer |  |
| JominiServer | GetHasPassword |  | bool |  |
| JominiServer | GetMaxPlayers |  | int32 |  |
| JominiServer | GetName |  | CString |  |
| JominiServer | GetNumPlayers |  | int32 |  |
| JominiServer | GetStatus |  | CString |  |
| JominiServer | GetVersion |  | CString |  |
| JominiServer | IsSameVersion |  | bool |  |
| JominiServer | Join |  | void |  |
| JominiServer | Self |  | JominiServer |  |
| JominiServerBrowserGui | AccessSelf |  | JominiServerBrowserGui |  |
| JominiServerBrowserGui | AccessServers |  | unknown |  |
| JominiServerBrowserGui | GetServers |  | unknown |  |
| JominiServerBrowserGui | IsCrossPlatformFilterSet |  | bool |  |
| JominiServerBrowserGui | IsEmptyFilterSet |  | bool |  |
| JominiServerBrowserGui | IsFullFilterSet |  | bool |  |
| JominiServerBrowserGui | IsHasPasswordFilterSet |  | bool |  |
| JominiServerBrowserGui | IsRefreshing |  | bool |  |
| JominiServerBrowserGui | IsSameModsFilterSet |  | bool |  |
| JominiServerBrowserGui | IsSameVersionFilterSet |  | bool |  |
| JominiServerBrowserGui | IsSortAscending |  | bool |  |
| JominiServerBrowserGui | IsSortedBy | 1. unknown | bool |  |
| JominiServerBrowserGui | JoinServerWithId |  | void |  |
| JominiServerBrowserGui | JoinServerWithTextWidget | 1. unknown | void |  |
| JominiServerBrowserGui | OnFilterTextEdit |  | void |  |
| JominiServerBrowserGui | RefreshServers |  | void |  |
| JominiServerBrowserGui | Self |  | JominiServerBrowserGui |  |
| JominiServerBrowserGui | SetFilterText |  | void |  |
| JominiServerBrowserGui | SetServerId |  | void |  |
| JominiServerBrowserGui | Sort | 1. unknown | void |  |
| JominiServerBrowserGui | ToggleCrossPlatformFilter |  | void |  |
| JominiServerBrowserGui | ToggleEmptyFilter |  | void |  |
| JominiServerBrowserGui | ToggleFullFilter |  | void |  |
| JominiServerBrowserGui | ToggleHasPasswordFilter |  | void |  |
| JominiServerBrowserGui | ToggleSameModsFilter |  | void |  |
| JominiServerBrowserGui | ToggleSameVersionFilter |  | void |  |
| JominiSettingsWindow | AccessActivePage |  | unknown |  |
| JominiSettingsWindow | AccessPages |  | unknown |  |
| JominiSettingsWindow | AccessSelf |  | JominiSettingsWindow |  |
| JominiSettingsWindow | AllowApply |  | bool |  |
| JominiSettingsWindow | AppliedOnApply |  | bool |  |
| JominiSettingsWindow | AppliedOnRestart |  | bool |  |
| JominiSettingsWindow | Close |  | void |  |
| JominiSettingsWindow | GetInputActionName | 1. unknown | CString |  |
| JominiSettingsWindow | GetInputBindingText |  | CString |  |
| JominiSettingsWindow | GetKeyCodeName | 1. unknown 2. unknown | CString |  |
| JominiSettingsWindow | GetUserBindingFileName |  | CString |  |
| JominiSettingsWindow | GetWarningText |  | CString |  |
| JominiSettingsWindow | HasChanged |  | bool |  |
| JominiSettingsWindow | HasUserBindingFileName |  | bool |  |
| JominiSettingsWindow | Hide |  | void |  |
| JominiSettingsWindow | IsConfirmButtonEnabled |  | bool |  |
| JominiSettingsWindow | IsCurrentActivePageId | 1. unknown | bool |  |
| JominiSettingsWindow | IsInputPopUpEnabled |  | bool |  |
| JominiSettingsWindow | OnApply |  | void |  |
| JominiSettingsWindow | OnClickCancel |  | void |  |
| JominiSettingsWindow | OnClickClear |  | void |  |
| JominiSettingsWindow | OnClickConfirm |  | void |  |
| JominiSettingsWindow | OnClickLoadDefaultProfile |  | void |  |
| JominiSettingsWindow | OnClickLoadProfile |  | void |  |
| JominiSettingsWindow | OnClickSaveProfile |  | void |  |
| JominiSettingsWindow | OnEditProfileFileName |  | void |  |
| JominiSettingsWindow | RequireRestart |  | bool |  |
| JominiSettingsWindow | Restore |  | void |  |
| JominiSettingsWindow | Save |  | void |  |
| JominiSettingsWindow | SaveAndClose |  | void |  |
| JominiSettingsWindow | Self |  | JominiSettingsWindow |  |
| JominiSettingsWindow | ShouldShowWarningText |  | bool |  |
| JominiSettingsWindow | Show |  | void |  |
| JominiSettingsWindow | ShowInputPopUp | 1. unknown 2. unknown 3. unknown | void |  |
| KeyframeEditor | AccessSelf |  | KeyframeEditor |  |
| KeyframeEditor | OnLaneClick | 1. unknown | void |  |
| KeyframeEditor | Self |  | KeyframeEditor |  |
| KeyframeEventEditor | AccessSelf |  | KeyframeEventEditor |  |
| KeyframeEventEditor | EventDescription |  | unknown |  |
| KeyframeEventEditor | HasEvent |  | bool |  |
| KeyframeEventEditor | HasKeyframe |  | bool |  |
| KeyframeEventEditor | IsAudioHandler |  | bool |  |
| KeyframeEventEditor | IsVfxHandler |  | bool |  |
| KeyframeEventEditor | KeyframeEditorId |  | unknown |  |
| KeyframeEventEditor | KeyframeId |  | CString |  |
| KeyframeEventEditor | Self |  | KeyframeEventEditor |  |
| KeyframeWidget | AccessSelf |  | KeyframeWidget |  |
| KeyframeWidget | GetValue |  | float |  |
| KeyframeWidget | Self |  | KeyframeWidget |  |
| LackingGoodsForRepairEntry | AccessSelf |  | LackingGoodsForRepairEntry |  |
| LackingGoodsForRepairEntry | GetLackingGoodsForRepairAmount |  | int32 |  |
| LackingGoodsForRepairEntry | GetLackingGoodsForRepairInfo |  | CString |  |
| LackingGoodsForRepairEntry | GetMarket |  | unknown |  |
| LackingGoodsForRepairEntry | Self |  | LackingGoodsForRepairEntry |  |
| LandOwnershipRule | AccessSelf |  | LandOwnershipRule |  |
| LandOwnershipRule | GetName |  | CString |  |
| LandOwnershipRule | GetNameWithNoTooltip |  | CString |  |
| LandOwnershipRule | GetTooltip |  | CString |  |
| LandOwnershipRule | MakeScope |  | Scope | Jomini Script System |
| LandOwnershipRule | Self |  | LandOwnershipRule |  |
| Language | AccessSelf |  | Language |  |
| Language | GetCommonLanguagesInfo |  | CString |  |
| Language | GetCourtLanguagesInfo |  | CString |  |
| Language | GetCourtLanguagesList |  | CString |  |
| Language | GetCultureDefinitionsInfo |  | CString |  |
| Language | GetCulturesInfo |  | CString |  |
| Language | GetDebugText |  | CString |  |
| Language | GetDetailedPowerInfo |  | CString |  |
| Language | GetDialectsInfo |  | CString |  |
| Language | GetFamily |  | unknown |  |
| Language | GetFamilyInfo |  | CString |  |
| Language | GetFlavorText |  | CString |  |
| Language | GetLiturgicalLanguagesInfo |  | CString |  |
| Language | GetMarketsInfo |  | CString |  |
| Language | GetName |  | CString |  |
| Language | GetNameWithNoTooltip |  | CString |  |
| Language | GetNameWithPowerWithNoTooltip |  | CString |  |
| Language | GetPower |  | CFixedPoint |  |
| Language | GetPowerInfo |  | CString |  |
| Language | GetReligionDefinitionsInfo |  | CString |  |
| Language | GetReligionsInfo |  | CString |  |
| Language | GetTooltip |  | CString |  |
| Language | MakeScope |  | Scope | Jomini Script System |
| Language | Self |  | Language |  |
| LanguageFamily | AccessSelf |  | LanguageFamily |  |
| LanguageFamily | GetDesc |  | CString |  |
| LanguageFamily | GetLanguagesList |  | CString |  |
| LanguageFamily | GetName |  | CString |  |
| LanguageFamily | GetNameWithNoTooltip |  | CString |  |
| LanguageFamily | GetTooltip |  | CString |  |
| LanguageFamily | HasDesc |  | bool |  |
| LanguageFamily | MakeScope |  | Scope | Jomini Script System |
| LanguageFamily | Self |  | LanguageFamily |  |
| LateralView | AccessSelf |  | LateralView |  |
| LateralView | CanGoBack |  | bool |  |
| LateralView | CanGoForward |  | bool |  |
| LateralView | CanHistoryEntryBeClicked | 1. unknown | bool |  |
| LateralView | ClearFilters |  | bool |  |
| LateralView | Close |  | bool |  |
| LateralView | GetHistoryEntries |  | unknown |  |
| LateralView | GetHistoryEntryName | 1. unknown | CString |  |
| LateralView | GoBack |  | bool |  |
| LateralView | GoForward |  | bool |  |
| LateralView | IsHistoryEntryCurrent | 1. unknown | bool |  |
| LateralView | IsLateralViewHistoryGroup | 1. unknown 2. unknown | bool |  |
| LateralView | IsLeftPanel |  | bool |  |
| LateralView | IsNewUnitViewOpened | 1. unknown | bool |  |
| LateralView | IsRightPanel |  | bool |  |
| LateralView | IsSelectHeirSelectionMenuOpened | 1. unknown | bool |  |
| LateralView | IsSelectHolySiteOpened | 1. unknown | bool |  |
| LateralView | IsSelectLateralViewHistoryOpened | 1. unknown | bool |  |
| LateralView | IsSelectSearchFilterOpened | 1. unknown | bool |  |
| LateralView | IsShown |  | bool |  |
| LateralView | OnClickHistoryEntry | 1. unknown | void |  |
| LateralView | Self |  | LateralView |  |
| LateralView | ToggleNewUnitView | 1. unknown | void |  |
| LateralView | ToggleSelectHeirSelectionMenu | 1. unknown | void |  |
| LateralView | ToggleSelectHolySiteMenu | 1. unknown | void |  |
| LateralView | ToggleSelectLateralViewHistory | 1. unknown | void |  |
| LateralView | ToggleSelectSearchFilter | 1. unknown 2. unknown | void |  |
| LateralView | Vars |  | unknown |  |
| LateralViewHistoryEntry | AccessSelf |  | LateralViewHistoryEntry |  |
| LateralViewHistoryEntry | Self |  | LateralViewHistoryEntry |  |
| LateralViewManager | AccessSelf |  | LateralViewManager |  |
| LateralViewManager | CanGoBack | 1. unknown | bool |  |
| LateralViewManager | CanGoForward | 1. unknown | bool |  |
| LateralViewManager | Close | 1. unknown | bool |  |
| LateralViewManager | GoBack | 1. unknown | bool |  |
| LateralViewManager | GoBackLast |  | bool |  |
| LateralViewManager | GoForward | 1. unknown | bool |  |
| LateralViewManager | GoForwardLast |  | bool |  |
| LateralViewManager | IsGroupOpen | 1. unknown | bool |  |
| LateralViewManager | IsViewOpen | 1. unknown | bool |  |
| LateralViewManager | Open | 1. unknown | bool |  |
| LateralViewManager | OpenGroup | 1. unknown | bool |  |
| LateralViewManager | OpenWithParams | 1. unknown 2. unknown | bool |  |
| LateralViewManager | Self |  | LateralViewManager |  |
| LateralViewManager | Toggle | 1. unknown | bool |  |
| LateralViewManager | ToggleGroup | 1. unknown | bool |  |
| Law | AccessSelf |  | Law |  |
| Law | GetBgCategoryColor |  | unknown |  |
| Law | GetCategory |  | CString |  |
| Law | GetCategoryName |  | CString |  |
| Law | GetDebugText |  | CString |  |
| Law | GetDesc |  | CString |  |
| Law | GetName |  | CString |  |
| Law | GetNameWithContext | 1. unknown | CString |  |
| Law | GetNameWithNoTooltip |  | CString |  |
| Law | GetPolicies |  | unknown |  |
| Law | GetTooltip |  | CString |  |
| Law | GetTooltipWithCountryContext | 1. unknown | CString |  |
| Law | GetTooltipWithIOContext | 1. unknown | CString |  |
| Law | IsUnique |  | bool |  |
| Law | MakeScope |  | Scope | Jomini Script System |
| Law | RequiresVoteForInternationalOrganization |  | bool |  |
| Law | Self |  | Law |  |
| LawCategory | AccessSelf |  | LawCategory |  |
| LawCategory | GetBgCategoryColor |  | unknown |  |
| LawCategory | GetCategoryIcon |  | unknown |  |
| LawCategory | GetLaws |  | unknown |  |
| LawCategory | GetName |  | CString |  |
| LawCategory | IsExpanded |  | bool |  |
| LawCategory | Self |  | LawCategory |  |
| LawCategory | Toggle |  | void |  |
| LawWithContextWrap | AccessSelf |  | LawWithContextWrap |  |
| LawWithContextWrap | GetInternationalOrganization |  | unknown |  |
| LawWithContextWrap | GetLaw |  | unknown |  |
| LawWithContextWrap | GetTooltip |  | CString |  |
| LawWithContextWrap | Self |  | LawWithContextWrap |  |
| Layer | AccessSelf |  | Layer |  |
| Layer | Self |  | Layer |  |
| LayerTreeItem | AccessSelf |  | LayerTreeItem |  |
| LayerTreeItem | GetInstanceCount |  | int32 |  |
| LayerTreeItem | GetLayer |  | CString |  |
| LayerTreeItem | IsExpanded |  | bool |  |
| LayerTreeItem | IsGenerated |  | bool |  |
| LayerTreeItem | IsHidden |  | bool |  |
| LayerTreeItem | IsLayer |  | bool |  |
| LayerTreeItem | IsLocked |  | bool |  |
| LayerTreeItem | IsSelected |  | bool |  |
| LayerTreeItem | SelectItem |  | void |  |
| LayerTreeItem | Self |  | LayerTreeItem |  |
| LayerTreeItem | ToggleExclusiveLayerHidden |  | void |  |
| LayerTreeItem | ToggleExclusiveLock |  | void |  |
| LayerTreeItem | ToggleLayerHidden |  | void |  |
| LayerTreeItem | ToggleLock |  | void |  |
| LeaderCandidate | AccessSelf |  | LeaderCandidate |  |
| LeaderCandidate | GetCandidate |  | unknown |  |
| LeaderCandidate | GetVotedCountries |  | CString |  |
| LeaderCandidate | GetVoters |  | unknown |  |
| LeaderCandidate | GetVotesAmount |  | CFixedPoint |  |
| LeaderCandidate | Self |  | LeaderCandidate |  |
| LegalDocsViewer | AccessSelf |  | LegalDocsViewer |  |
| LegalDocsViewer | Agree |  | void |  |
| LegalDocsViewer | GetDocumentText |  | CUTF8String |  |
| LegalDocsViewer | Hide |  | void |  |
| LegalDocsViewer | Self |  | LegalDocsViewer |  |
| LegalDocsViewer | Show |  | void |  |
| LevySetup | AccessSelf |  | LevySetup |  |
| LevySetup | GetAmountOfMen |  | CFixedPoint |  |
| LevySetup | GetDescription |  | CString |  |
| LevySetup | GetName |  | CString |  |
| LevySetup | GetNameWithNoTooltip |  | CString |  |
| LevySetup | GetTooltip |  | CString |  |
| LevySetup | GetUnit |  | unknown |  |
| LevySetup | MakeScope |  | Scope | Jomini Script System |
| LevySetup | Self |  | LevySetup |  |
| Loan | AccessSelf |  | Loan |  |
| Loan | GetAmount |  | CFixedPoint |  |
| Loan | GetBorrower |  | unknown |  |
| Loan | GetDebt |  | CFixedPoint |  |
| Loan | GetInterest |  | CFixedPoint |  |
| Loan | GetLender |  | unknown |  |
| Loan | GetMonthlyCost |  | CFixedPoint |  |
| Loan | GetMonthsLeft |  | int32 |  |
| Loan | GetName |  | CString |  |
| Loan | GetNameAsBorrower |  | CString |  |
| Loan | GetNameAsLender |  | CString |  |
| Loan | GetNameWithNoTooltip |  | CString |  |
| Loan | GetRemainingInterest |  | CFixedPoint |  |
| Loan | GetShortNameAsBorrower |  | CString |  |
| Loan | GetShortNameAsLender |  | CString |  |
| Loan | GetUITooltip |  | CString |  |
| Loan | IsEstatesLoan |  | bool |  |
| Loan | MakeScope |  | Scope | Jomini Script System |
| Loan | Self |  | Loan |  |
| LoanDurationCandidate | AccessSelf |  | LoanDurationCandidate |  |
| LoanDurationCandidate | GetText |  | CString |  |
| LoanDurationCandidate | Self |  | LoanDurationCandidate |  |
| LoanEntry | AccessSelf |  | LoanEntry |  |
| LoanEntry | GetLoan |  | unknown |  |
| LoanEntry | GetRepayLoanUIAction |  | unknown |  |
| LoanEntry | Self |  | LoanEntry |  |
| LobbyPlayer | AccessSelf |  | LobbyPlayer |  |
| LobbyPlayer | CanRemovePlayer |  | bool |  |
| LobbyPlayer | GetID |  | int32 |  |
| LobbyPlayer | GetLoadingString |  | CString |  |
| LobbyPlayer | GetName |  | CString |  |
| LobbyPlayer | GetTransferProgress |  | float |  |
| LobbyPlayer | HasPlayable |  | bool |  |
| LobbyPlayer | IsDoneReplayingCommands |  | bool |  |
| LobbyPlayer | IsHost |  | bool |  |
| LobbyPlayer | IsHotjoining |  | bool |  |
| LobbyPlayer | IsLocalPlayer |  | bool |  |
| LobbyPlayer | IsObserver |  | bool |  |
| LobbyPlayer | IsReady |  | bool |  |
| LobbyPlayer | RemovePlayer |  | void |  |
| LobbyPlayer | Self |  | LobbyPlayer |  |
| LobbyPlayer | ShowReadyStatus |  | bool |  |
| LobbyView | AccessSelectedPlayable |  | unknown |  |
| LobbyView | AccessSelf |  | LobbyView |  |
| LobbyView | CanControlSelected |  | bool |  |
| LobbyView | CanGoBack |  | bool |  |
| LobbyView | CanReady |  | bool |  |
| LobbyView | CanStart |  | bool |  |
| LobbyView | ClearPreSelected |  | void |  |
| LobbyView | ClearSelection |  | void |  |
| LobbyView | ControlSelected |  | void |  |
| LobbyView | CopyServerID |  | void |  |
| LobbyView | GetControlToolTip |  | CString |  |
| LobbyView | GetEnabledDLCs |  | unknown |  |
| LobbyView | GetEnabledMods |  | unknown |  |
| LobbyView | GetGoBackToolTip |  | CString |  |
| LobbyView | GetOpenMultiplayerToolTip |  | CString |  |
| LobbyView | GetOtherPlayersCount |  | int32 |  |
| LobbyView | GetReadyToolTip |  | CString |  |
| LobbyView | GetSelectText |  | CString |  |
| LobbyView | GoBack |  | void |  |
| LobbyView | HasEnabledDLCs |  | bool |  |
| LobbyView | HasEnabledMods |  | bool |  |
| LobbyView | HasGameConfigurationWindow |  | bool |  |
| LobbyView | HasSelectedPlayable |  | bool |  |
| LobbyView | HasServerInfo |  | bool |  |
| LobbyView | IsAutoAccept |  | bool |  |
| LobbyView | IsInvite |  | bool |  |
| LobbyView | IsObserver |  | bool |  |
| LobbyView | IsPublicCrossplay |  | bool |  |
| LobbyView | IsPublicNoCrossplay |  | bool |  |
| LobbyView | IsReady |  | bool |  |
| LobbyView | OnNameEdit |  | void |  |
| LobbyView | OnPasswordEdit |  | void |  |
| LobbyView | OpenGameConfigurationWindow |  | void |  |
| LobbyView | OpenMultiplayer |  | void |  |
| LobbyView | Players |  | unknown |  |
| LobbyView | Ready |  | void |  |
| LobbyView | Self |  | LobbyView |  |
| LobbyView | SetInvite |  | void |  |
| LobbyView | SetName |  | void |  |
| LobbyView | SetPassword |  | void |  |
| LobbyView | SetPublicCrossplay |  | void |  |
| LobbyView | SetPublicNoCrossplay |  | void |  |
| LobbyView | SetShowPlayerList | 1. unknown | void |  |
| LobbyView | ShouldShowEnabledDLCs |  | bool |  |
| LobbyView | ShouldShowEnabledMods |  | bool |  |
| LobbyView | ShowHosting |  | bool |  |
| LobbyView | ShowModifyServer |  | bool |  |
| LobbyView | ShowPlayerList |  | bool |  |
| LobbyView | Start |  | void |  |
| LobbyView | StartToolTip |  | CString |  |
| LobbyView | ToggleAutoAccept |  | void |  |
| LobbyView | ToggleObserve |  | void |  |
| LobbyView | ToggleShowEnabledDLCs |  | void |  |
| LobbyView | ToggleShowEnabledMods |  | void |  |
| LobbyView | ToggleVisibility |  | void |  |
| LobbyView | UnReady |  | void |  |
| LocalMod | AccessSelf |  | LocalMod |  |
| LocalMod | Description |  | CString |  |
| LocalMod | DisplayImage |  | unknown |  |
| LocalMod | DisplayName |  | CString |  |
| LocalMod | GetFilesAffectingChecksum |  | CString |  |
| LocalMod | Id |  | int32 |  |
| LocalMod | IsAffectingChecksum |  | bool |  |
| LocalMod | IsChecksumCompatibilityCalculated |  | bool |  |
| LocalMod | IsExternal |  | bool |  |
| LocalMod | IsPdxMod |  | bool |  |
| LocalMod | Name |  | CString |  |
| LocalMod | OpenInFolder |  | void |  |
| LocalMod | Path |  | CString |  |
| LocalMod | Self |  | LocalMod |  |
| LocalMod | Version |  | CString |  |
| Location | AccessSelf |  | Location |  |
| Location | CalcGoodsOutput | 1. unknown | CFixedPoint |  |
| Location | CanBuildArmy |  | bool |  |
| Location | CanBuildArmyForCountry | 1. unknown | bool |  |
| Location | CanBuildSailors |  | bool |  |
| Location | CanBuildSailorsForCountry | 1. unknown | bool |  |
| Location | CanDowngradeRank |  | bool |  |
| Location | CanHavePeriphora |  | bool |  |
| Location | CanIncreaseMaxRGOWorkers |  | bool |  |
| Location | CanIncreaseMaxRGOWorkersInfo |  | CString |  |
| Location | CanInstitutionSpread | 1. unknown | bool |  |
| Location | CanReduceRGO |  | bool |  |
| Location | CanTransferOccupation |  | bool |  |
| Location | CanUpgradeRGO |  | bool |  |
| Location | CanUpgradeRank |  | bool |  |
| Location | Custom | 1. unknown | CString |  |
| Location | GenerateSceneDesc |  | unknown |  |
| Location | GetActualGarrison |  | CFixedPoint |  |
| Location | GetAdjective |  | CString |  |
| Location | GetAppliedAttrition | 1. unknown | CFixedPoint |  |
| Location | GetAppliedAttritionPercentage |  | CFixedPoint |  |
| Location | GetArea |  | unknown |  |
| Location | GetArmyConstructions |  | unknown |  |
| Location | GetArmyLevyLabel |  | CString |  |
| Location | GetArtEffect |  | CString |  |
| Location | GetAssimilate |  | CString |  |
| Location | GetAssimilateInfo |  | CString |  |
| Location | GetAttackerPenalty |  | int32 |  |
| Location | GetAttritionDescription |  | CString |  |
| Location | GetAttritionTooltip |  | CString |  |
| Location | GetAvailableRGOWorkersForUI |  | CString |  |
| Location | GetAverageLiteracy |  | CFixedPoint |  |
| Location | GetAverageSatisfaction |  | CFixedPoint |  |
| Location | GetAverageSatisfactionImpact |  | CString |  |
| Location | GetAverageSatisfactionInfo |  | CString |  |
| Location | GetBestFortBuilding |  | unknown |  |
| Location | GetBlockadeForceInfo |  | CString |  |
| Location | GetBlockadeImpact |  | CString |  |
| Location | GetBlockadeProgress |  | CFixedPoint |  |
| Location | GetBuildingLevelInfo |  | CString |  |
| Location | GetBuildingLevelsPercentage |  | float |  |
| Location | GetCapacityPercentage |  | float |  |
| Location | GetCivilConstructions |  | unknown |  |
| Location | GetCivilConstructionsNeededPops | 1. unknown | CString |  |
| Location | GetCivilConstructionsNeededPopsValue | 1. unknown | CFixedPoint |  |
| Location | GetClimate |  | unknown |  |
| Location | GetClosestPort |  | unknown |  |
| Location | GetColonialClaimsInfo |  | CString |  |
| Location | GetColonialRangeInfo |  | CString |  |
| Location | GetCombat |  | unknown |  |
| Location | GetContinent |  | unknown |  |
| Location | GetControl |  | CFixedPoint |  |
| Location | GetControlEffect |  | CString |  |
| Location | GetControlInfo |  | CString |  |
| Location | GetController |  | unknown |  |
| Location | GetConvert |  | CString |  |
| Location | GetConvertInfo |  | CString |  |
| Location | GetCores |  | unknown |  |
| Location | GetCoresList |  | CString |  |
| Location | GetCurrentDirection |  | CString |  |
| Location | GetCurrentIntegrationInfo |  | CString |  |
| Location | GetCurrentIntegrationInfoForCountry | 1. unknown | CString |  |
| Location | GetCurrentIntegrationModifierName |  | CString |  |
| Location | GetCurrentProgressInfo | 1. unknown | CString |  |
| Location | GetDebugText |  | CString |  |
| Location | GetDemote |  | CString |  |
| Location | GetDemoteInfo |  | CString |  |
| Location | GetDescriptionFor | 1. unknown | CString |  |
| Location | GetDescriptionValueAndPercentWithCountryFor | 1. unknown 2. unknown 3. unknown | CString |  |
| Location | GetDescriptionWithCountryFor | 1. unknown 2. unknown | CString |  |
| Location | GetDevastationEffect |  | CString |  |
| Location | GetDevelopment |  | CFixedPoint |  |
| Location | GetDevelopmentEffect |  | CString |  |
| Location | GetDevelopmentInfo |  | CString |  |
| Location | GetDiseaseInfectionPercentage | 1. unknown | CFixedPoint |  |
| Location | GetDiseaseInfo | 1. unknown | CString |  |
| Location | GetDiseaseResistance | 1. unknown | CFixedPoint |  |
| Location | GetDistanceToTargetArea | 1. unknown | CFixedPoint |  |
| Location | GetDominantCulture |  | unknown |  |
| Location | GetDominantDialect |  | unknown |  |
| Location | GetDominantLanguage |  | unknown |  |
| Location | GetDominantReligion |  | unknown |  |
| Location | GetDowngradeRankConditions |  | CString |  |
| Location | GetDowngradeRankDescription |  | CString |  |
| Location | GetDowngradeRankEffects |  | CString |  |
| Location | GetDowngradeRankPrice |  | CString |  |
| Location | GetEffectiveRGOWorkers |  | CFixedPoint |  |
| Location | GetEffectiveUnEmployed | 1. unknown | CString |  |
| Location | GetEffectiveUnEmployedValue | 1. unknown | CFixedPoint |  |
| Location | GetEmploymentInfo | 1. unknown | CString |  |
| Location | GetEstateTaxBase | 1. unknown | CFixedPoint |  |
| Location | GetExpectedUnEmployed | 1. unknown | CString |  |
| Location | GetExpectedUnEmployedValue | 1. unknown | CFixedPoint |  |
| Location | GetExports |  | unknown |  |
| Location | GetExportsAmount |  | CFixedPoint |  |
| Location | GetExportsInfo |  | CString |  |
| Location | GetFlagAndName |  | CString |  |
| Location | GetFlavorText |  | CString |  |
| Location | GetFoodConsumption | 1. unknown | CFixedPoint |  |
| Location | GetFoodConsumptionInfo | 1. unknown | CString |  |
| Location | GetFoodSources |  | CString |  |
| Location | GetFoodsOutput |  | CFixedPoint |  |
| Location | GetFoodsOutputModifiers |  | CFixedPoint |  |
| Location | GetFoodsOutputModifiersTooltip |  | CString |  |
| Location | GetFoodsOutputWithLabel |  | CString |  |
| Location | GetFortInfo |  | CString |  |
| Location | GetFortLevel |  | int32 |  |
| Location | GetFortLevelTooltip |  | CString |  |
| Location | GetFortificationTooltip |  | CString |  |
| Location | GetGarrison |  | CString |  |
| Location | GetGarrisonPercentage |  | CFixedPoint |  |
| Location | GetGarrisonTooltip |  | CString |  |
| Location | GetGeopoliticConstructions |  | unknown |  |
| Location | GetGrowthTooltip | 1. unknown | CString |  |
| Location | GetHarborCapacityImpactInfo |  | CString |  |
| Location | GetHolySites |  | unknown |  |
| Location | GetHolySitesExtensiveTooltip |  | CString |  |
| Location | GetHolySitesTooltip |  | CString |  |
| Location | GetId |  | int32 |  |
| Location | GetImports |  | unknown |  |
| Location | GetImportsAmount |  | CFixedPoint |  |
| Location | GetImportsInfo |  | CString |  |
| Location | GetInstitutionInfo | 1. unknown | CString |  |
| Location | GetInstitutionProgress | 1. unknown | CFixedPoint |  |
| Location | GetIntegration |  | CString |  |
| Location | GetIntegrationETA |  | CString |  |
| Location | GetIntegrationETAWithExtraProvinceIntegrationSpeed | 1. unknown | CString |  |
| Location | GetIntegrationFinishedInfo |  | CString |  |
| Location | GetIntegrationHeader |  | CString |  |
| Location | GetIntegrationInfo |  | CString |  |
| Location | GetIntegrationLevel |  | unknown |  |
| Location | GetIntegrationLevelForCountry | 1. unknown | unknown |  |
| Location | GetIntegrationProgress |  | CFixedPoint |  |
| Location | GetIntegrationProgressFloat |  | float |  |
| Location | GetIntegrationSpeed |  | CFixedPoint |  |
| Location | GetIntegrationSpeedTooltip |  | CString |  |
| Location | GetInternationalOrganizations |  | unknown |  |
| Location | GetKey |  | CString |  |
| Location | GetLeviesInfo |  | CString |  |
| Location | GetListOfCountries |  | unknown |  |
| Location | GetLiteracyInfo |  | CString |  |
| Location | GetLocalDefensive |  | CFixedPoint |  |
| Location | GetLocalDefensiveInfo |  | CString |  |
| Location | GetLocalMigrationAttraction |  | CString |  |
| Location | GetLocalMigrationAttractionInfo |  | CString |  |
| Location | GetLocation |  | unknown |  |
| Location | GetLocationSize |  | CFixedPoint |  |
| Location | GetManageRGOTooltip |  | CString |  |
| Location | GetMapmodeSpecificTooltip |  | CString |  |
| Location | GetMaritime |  | unknown |  |
| Location | GetMaritimePresencesInfo |  | CString |  |
| Location | GetMarket |  | unknown |  |
| Location | GetMarketAccess |  | CFixedPoint |  |
| Location | GetMarketAccessBreakdown |  | CString |  |
| Location | GetMarketAccessWithTooltip |  | CString |  |
| Location | GetMarketAttractionInfo |  | CString |  |
| Location | GetMaxControl |  | CString |  |
| Location | GetMaxControlInfo |  | CString |  |
| Location | GetMaxGarrison |  | CString |  |
| Location | GetMaxRGOWorkers |  | CFixedPoint |  |
| Location | GetMaxRGOWorkersForUI |  | CString |  |
| Location | GetMaxRGOWorkersLevel |  | CFixedPoint |  |
| Location | GetMaxRGOWorkersPercentage |  | CFixedPoint |  |
| Location | GetMaxRGOWorkersPercentageOfMax |  | float |  |
| Location | GetMaxRGOWorkersUnderConstruction |  | int32 |  |
| Location | GetMaximumMaxRGOWorkers |  | CString |  |
| Location | GetMaximumMaxRGOWorkersInfoForUI |  | CString |  |
| Location | GetMaximumMaxRGOWorkersValueForUI |  | CFixedPoint |  |
| Location | GetMaximumMaxRGOWorkersWithInfo |  | CString |  |
| Location | GetMenNeededForSiege |  | CString |  |
| Location | GetMigrationChange |  | CString |  |
| Location | GetMigrationInfo |  | CString |  |
| Location | GetMigrationInformation |  | CString |  |
| Location | GetModifierValue | 1. unknown | CString |  |
| Location | GetModifierValueAndPercentWithCountry | 1. unknown 2. unknown 3. unknown | CString |  |
| Location | GetModifierValueAndPercentWithCountryPercent | 1. unknown 2. unknown 3. unknown | CString |  |
| Location | GetModifierValueFixed | 1. unknown | CFixedPoint |  |
| Location | GetModifierValueWithCountry | 1. unknown 2. unknown | CString |  |
| Location | GetModifierValueWithCountryCapped | 1. unknown 2. unknown | CString |  |
| Location | GetModifierValueWithCountryNoFormat | 1. unknown 2. unknown | CString |  |
| Location | GetModifierValueWithCountryPercentAndLocalPercentNoFormat | 1. unknown 2. unknown 3. unknown | CString |  |
| Location | GetModifierValueWithTwoLocalAndTwoCountry | 1. unknown 2. unknown 3. unknown 4. unknown | CString |  |
| Location | GetModifierValueWithTwoLocalForUI | 1. unknown 2. unknown | CString |  |
| Location | GetModifierValueWithTwoPercentRoundedForUI | 1. unknown 2. unknown 3. unknown | CString |  |
| Location | GetMonthlyControl |  | CString |  |
| Location | GetMonthlyControlInfo |  | CString |  |
| Location | GetName |  | CString |  |
| Location | GetNameWithNoFormatLink |  | CString |  |
| Location | GetNameWithNoTooltip |  | CString |  |
| Location | GetNaturalHarborImpactInfo |  | CString |  |
| Location | GetNavyConstructions |  | unknown |  |
| Location | GetNavyLevyLabel |  | CString |  |
| Location | GetNumBuildingLevels |  | int32 |  |
| Location | GetNumBuildingLevelsOfBuildingTypeString | 1. unknown 2. unknown | CString |  |
| Location | GetNumBuildingLevelsWithEmployment |  | CFixedPoint |  |
| Location | GetNumForeignBuildings |  | int32 |  |
| Location | GetNumRoads |  | int32 |  |
| Location | GetNumWorksOfArt |  | int32 |  |
| Location | GetNumZocNeighbours |  | int32 |  |
| Location | GetNumZocNeighbusInfo |  | CString |  |
| Location | GetNumofInstitutionsEmbraced |  | int32 |  |
| Location | GetNumofInstitutionsKnown |  | int32 |  |
| Location | GetOwner |  | unknown |  |
| Location | GetOwnerForMap |  | unknown |  |
| Location | GetPopCap | 1. unknown | CString |  |
| Location | GetPopCapTooltip | 1. unknown | CString |  |
| Location | GetPopGrowth |  | CFixedPoint |  |
| Location | GetPopGrowthInfo |  | CString |  |
| Location | GetPopSatisfaction | 1. unknown | CFixedPoint |  |
| Location | GetPopTypeBreakDown | 1. unknown | CString |  |
| Location | GetPopulation |  | unknown |  |
| Location | GetPopulationCapacity |  | CString |  |
| Location | GetPopulationCapacityInfo |  | CString |  |
| Location | GetPopulationCapacityLabel |  | CString |  |
| Location | GetPopulationChangeLabel |  | CString |  |
| Location | GetPopulationChart |  | unknown |  |
| Location | GetPortSeaZone |  | unknown |  |
| Location | GetPresentArt |  | CString |  |
| Location | GetPresentPopTypes |  | unknown |  |
| Location | GetPromote |  | CString |  |
| Location | GetPromoteInfo |  | CString |  |
| Location | GetPromotePopFactors |  | CString |  |
| Location | GetPromoteValue |  | CFixedPoint |  |
| Location | GetProsperity |  | CFixedPoint |  |
| Location | GetProsperityChange |  | CFixedPoint |  |
| Location | GetProsperityChangeInfo |  | CString |  |
| Location | GetProsperityEffect |  | CString |  |
| Location | GetProsperityForPieChart |  | CFixedPoint |  |
| Location | GetProsperityOrDevastationConcept |  | CString |  |
| Location | GetProsperityOrDevastationCurrentValue |  | CFixedPoint |  |
| Location | GetProsperityOrDevastationName |  | CString |  |
| Location | GetProvince |  | unknown |  |
| Location | GetProvinceDefinition |  | unknown |  |
| Location | GetProximityEffect |  | CString |  |
| Location | GetProximityInfo |  | CString |  |
| Location | GetProximityToOwnerCapital |  | CFixedPoint |  |
| Location | GetQuickRebelLocationList |  | unknown |  |
| Location | GetRGOCost |  | CString |  |
| Location | GetRGOName |  | CString |  |
| Location | GetRGOProfitPerLevel |  | CFixedPoint |  |
| Location | GetRGOWorkers |  | CString |  |
| Location | GetRank |  | unknown |  |
| Location | GetRankAndName |  | CString |  |
| Location | GetRankIcon |  | unknown |  |
| Location | GetRawMaterial |  | unknown |  |
| Location | GetRawMaterialOutputInformation |  | CString |  |
| Location | GetRawMaterialsOutput |  | CFixedPoint |  |
| Location | GetRawMaterialsOutputBreakdown |  | CString |  |
| Location | GetRawMaterialsPrice |  | CFixedPoint |  |
| Location | GetReduceRGOTooltip |  | CString |  |
| Location | GetRegion |  | unknown |  |
| Location | GetReligiousUnity |  | CFixedPoint |  |
| Location | GetRoadsInfo |  | CString |  |
| Location | GetRomanFortLevel |  | CString |  |
| Location | GetRoundedModifierValue | 1. unknown | int32 |  |
| Location | GetSiege |  | unknown |  |
| Location | GetSoundTollController |  | unknown |  |
| Location | GetSoundTollInfo |  | CString |  |
| Location | GetSpecificBaseModifier |  | unknown |  |
| Location | GetSubContinent |  | unknown |  |
| Location | GetSupplyDepot |  | unknown |  |
| Location | GetSupplyLimit |  | CFixedPoint |  |
| Location | GetSupplyLimitInfo |  | CString |  |
| Location | GetSupplyLimitLabel |  | CString |  |
| Location | GetTag |  | CString |  |
| Location | GetTaxBaseInformation |  | CString |  |
| Location | GetTaxBaseLabel |  | CString |  |
| Location | GetTimedModifierOwner |  | unknown |  |
| Location | GetTimedModifiers |  | unknown |  |
| Location | GetTooManyBuildingInfo |  | CString |  |
| Location | GetTooltipBreakdownProperties |  | CString |  |
| Location | GetTopography |  | unknown |  |
| Location | GetTotalFoodConsumption |  | CFixedPoint |  |
| Location | GetTotalIncome |  | CFixedPoint |  |
| Location | GetTotalLiteracy |  | CFixedPoint |  |
| Location | GetTotalOwnerPopulation |  | CString |  |
| Location | GetTotalPopList |  | CString |  |
| Location | GetTotalPopTypeSize | 1. unknown | CString |  |
| Location | GetTotalPopTypeSizeValue | 1. unknown | CFixedPoint |  |
| Location | GetTotalPopulation |  | CString |  |
| Location | GetTotalPopulationNum |  | CFixedPoint |  |
| Location | GetTotalPopulationWithBreakDown |  | CString |  |
| Location | GetTotalPossibleTaxBase |  | CFixedPoint |  |
| Location | GetTotalTaxBase |  | CFixedPoint |  |
| Location | GetTransferOccupationTooltip |  | CString |  |
| Location | GetUITooltip |  | CString |  |
| Location | GetUnEmployedPercentage | 1. unknown | CFixedPoint |  |
| Location | GetUnEmployedPercentageWithConstruction | 1. unknown | CFixedPoint |  |
| Location | GetUnemployedPopulationForBuildingType | 1. unknown | CFixedPoint |  |
| Location | GetUnemployedPopulationForBuildingTypeString | 1. unknown | CString |  |
| Location | GetUnitsSelectedTooltipForLocation |  | CString |  |
| Location | GetUpgradeRGOBuildCostAndTime |  | CString |  |
| Location | GetUpgradeRGOConstructionDemand |  | unknown |  |
| Location | GetUpgradeRGOTooltip |  | CString |  |
| Location | GetUpgradeRankConditions |  | CString |  |
| Location | GetUpgradeRankDescription |  | CString |  |
| Location | GetUpgradeRankEffects |  | CString |  |
| Location | GetUpgradeRankName |  | CString |  |
| Location | GetUpgradeRankPrice |  | CString |  |
| Location | GetUpgradeRankPriceBreakdown |  | CString |  |
| Location | GetUsedSupply |  | CFixedPoint |  |
| Location | GetVegetation |  | unknown |  |
| Location | GetVictoryCardInfo |  | CString |  |
| Location | GetWarWorth |  | CFixedPoint |  |
| Location | GetWarWorthTooltip |  | CString |  |
| Location | GetWinterDetails |  | CString |  |
| Location | GetWinterInfo |  | CString |  |
| Location | GetWinterLevel |  | CString |  |
| Location | GetWinterName |  | CString |  |
| Location | GetWinterPower |  | int32 |  |
| Location | GetWorksOfArt |  | unknown |  |
| Location | GetWorksOfArtStarRating |  | int32 |  |
| Location | HasAnyDiseaseResistance |  | bool |  |
| Location | HasAnyFort |  | bool |  |
| Location | HasAnyRoad |  | bool |  |
| Location | HasCityStatus |  | bool |  |
| Location | HasColonialClaimsInfo |  | bool |  |
| Location | HasCombat |  | bool |  |
| Location | HasConstructions |  | bool |  |
| Location | HasDiseaseResistance | 1. unknown | bool |  |
| Location | HasEarthquakes |  | bool |  |
| Location | HasExports |  | bool |  |
| Location | HasFlavorText |  | bool |  |
| Location | HasFort |  | bool |  |
| Location | HasFortBuilding |  | bool |  |
| Location | HasFortTooltip |  | bool |  |
| Location | HasHolySites |  | bool |  |
| Location | HasImports |  | bool |  |
| Location | HasInstitution | 1. unknown | bool |  |
| Location | HasMapmodeSpecificTooltip |  | bool |  |
| Location | HasMaritime |  | bool |  |
| Location | HasMarket |  | bool |  |
| Location | HasOwner |  | bool |  |
| Location | HasPopType | 1. unknown | bool |  |
| Location | HasPort |  | bool |  |
| Location | HasRaisedLevies |  | bool |  |
| Location | HasRawMaterial |  | bool |  |
| Location | HasRiver |  | bool |  |
| Location | HasSiege |  | bool |  |
| Location | HasSoundToll |  | bool |  |
| Location | HasSpecificBaseModifier |  | bool |  |
| Location | HasStalledConstruction |  | bool |  |
| Location | HasSupplyDepot |  | bool |  |
| Location | HasTooManyBuildingLevel |  | bool |  |
| Location | HasUpgradeRGOConstructionDemand |  | bool |  |
| Location | HasVictoryCard |  | bool |  |
| Location | HasVolcano |  | bool |  |
| Location | HasWinter |  | bool |  |
| Location | IsBlockadedByEnemies |  | bool |  |
| Location | IsBlockadedByIce |  | bool |  |
| Location | IsCapital |  | bool |  |
| Location | IsCoastal |  | bool |  |
| Location | IsCorridor |  | bool |  |
| Location | IsCurrentlyBeingIntegrated |  | bool |  |
| Location | IsFrozen |  | bool |  |
| Location | IsHiddenByFoW |  | bool |  |
| Location | IsImpassable |  | bool |  |
| Location | IsIntegrated |  | bool |  |
| Location | IsLand |  | bool |  |
| Location | IsMarketCenter |  | bool |  |
| Location | IsMaxRGOWorkersUnderConstruction |  | bool |  |
| Location | IsOccupied |  | bool |  |
| Location | IsOverPopulationCapacity |  | bool |  |
| Location | IsPlayerLocation |  | bool |  |
| Location | IsPossibleToOwn |  | bool |  |
| Location | IsProvinceCapital |  | bool |  |
| Location | IsSoundTollLand |  | bool |  |
| Location | IsValid |  | bool |  |
| Location | IsVisibleToPlayer |  | bool |  |
| Location | MakeScope |  | Scope | Jomini Script System |
| Location | ReduceRGO |  | void |  |
| Location | Self |  | Location |  |
| Location | ShowMarketForMapModeTooltip |  | bool |  |
| Location | ShowSpecificsForSeazoneMapModeTooltip |  | bool |  |
| Location | UpgradeRGO |  | void |  |
| LocationBuildingItem | AccessSelf |  | LocationBuildingItem |  |
| LocationBuildingItem | CanDequeue |  | bool |  |
| LocationBuildingItem | CanDequeueDesc |  | CString |  |
| LocationBuildingItem | CanDestroy |  | bool |  |
| LocationBuildingItem | CanDestroyDesc |  | CString |  |
| LocationBuildingItem | CanExpandBuilding |  | bool |  |
| LocationBuildingItem | Dequeue |  | void |  |
| LocationBuildingItem | Destroy |  | void |  |
| LocationBuildingItem | ExpandBuilding |  | void |  |
| LocationBuildingItem | GetBuilding |  | unknown |  |
| LocationBuildingItem | GetConstruction |  | unknown |  |
| LocationBuildingItem | GetCost |  | CString |  |
| LocationBuildingItem | GetExpandBuildingInfo |  | CString |  |
| LocationBuildingItem | GetLevel |  | CFixedPoint |  |
| LocationBuildingItem | GetMissingGoods |  | unknown |  |
| LocationBuildingItem | GetRoadType |  | unknown |  |
| LocationBuildingItem | IsBuilding |  | bool |  |
| LocationBuildingItem | IsBuildingForPopType | 1. unknown | bool |  |
| LocationBuildingItem | IsBuildingUnderConstruction |  | bool |  |
| LocationBuildingItem | IsCapital |  | bool |  |
| LocationBuildingItem | IsConstruction |  | bool |  |
| LocationBuildingItem | IsFort |  | bool |  |
| LocationBuildingItem | IsLackingInput |  | bool |  |
| LocationBuildingItem | IsPlayerBuilding |  | bool |  |
| LocationBuildingItem | IsRGO |  | bool |  |
| LocationBuildingItem | IsRoad |  | bool |  |
| LocationBuildingItem | IsSettlementRank |  | bool |  |
| LocationBuildingItem | OpenBuildingView |  | void |  |
| LocationBuildingItem | Self |  | LocationBuildingItem |  |
| LocationBuildingsWindow | AccessSelf |  | LocationBuildingsWindow |  |
| LocationBuildingsWindow | Close |  | void |  |
| LocationBuildingsWindow | GenerateSceneDesc |  | unknown |  |
| LocationBuildingsWindow | Self |  | LocationBuildingsWindow |  |
| LocationCountryDoubleModifierWrap | AccessSelf |  | LocationCountryDoubleModifierWrap |  |
| LocationCountryDoubleModifierWrap | GetIcon |  | unknown |  |
| LocationCountryDoubleModifierWrap | GetName |  | CString |  |
| LocationCountryDoubleModifierWrap | GetTooltip |  | CString |  |
| LocationCountryDoubleModifierWrap | Self |  | LocationCountryDoubleModifierWrap |  |
| LocationCountryModifierWrap | AccessSelf |  | LocationCountryModifierWrap |  |
| LocationCountryModifierWrap | GetIcon |  | unknown |  |
| LocationCountryModifierWrap | GetName |  | CString |  |
| LocationCountryModifierWrap | GetTooltip |  | CString |  |
| LocationCountryModifierWrap | Self |  | LocationCountryModifierWrap |  |
| LocationDoubleModifierWrap | AccessSelf |  | LocationDoubleModifierWrap |  |
| LocationDoubleModifierWrap | GetIcon |  | unknown |  |
| LocationDoubleModifierWrap | GetName |  | CString |  |
| LocationDoubleModifierWrap | GetRows |  | unknown |  |
| LocationDoubleModifierWrap | GetTooltip |  | CString |  |
| LocationDoubleModifierWrap | Self |  | LocationDoubleModifierWrap |  |
| LocationItem | AccessSelf |  | LocationItem |  |
| LocationItem | GetLocation |  | unknown |  |
| LocationItem | GetName |  | CString |  |
| LocationItem | IsOthersLocation |  | bool |  |
| LocationItem | IsPlayerLocation |  | bool |  |
| LocationItem | Self |  | LocationItem |  |
| LocationMigrationWrap | AccessSelf |  | LocationMigrationWrap |  |
| LocationMigrationWrap | GetName |  | CString |  |
| LocationMigrationWrap | GetTooltip |  | CString |  |
| LocationMigrationWrap | Self |  | LocationMigrationWrap |  |
| LocationModifierWrap | AccessSelf |  | LocationModifierWrap |  |
| LocationModifierWrap | GetIcon |  | unknown |  |
| LocationModifierWrap | GetName |  | CString |  |
| LocationModifierWrap | GetRows |  | unknown |  |
| LocationModifierWrap | GetTooltip |  | CString |  |
| LocationModifierWrap | Self |  | LocationModifierWrap |  |
| LocationPercentCountryModifierWrap | AccessSelf |  | LocationPercentCountryModifierWrap |  |
| LocationPercentCountryModifierWrap | GetIcon |  | unknown |  |
| LocationPercentCountryModifierWrap | GetName |  | CString |  |
| LocationPercentCountryModifierWrap | GetTooltip |  | CString |  |
| LocationPercentCountryModifierWrap | Self |  | LocationPercentCountryModifierWrap |  |
| LocationPopItem | AccessSelf |  | LocationPopItem |  |
| LocationPopItem | GetCap |  | CString |  |
| LocationPopItem | GetCapTooltip |  | CString |  |
| LocationPopItem | GetCapacityPercentage |  | float |  |
| LocationPopItem | GetColor |  | CVector4f |  |
| LocationPopItem | GetEffectiveUnEmployed |  | CString |  |
| LocationPopItem | GetEffectiveUnEmployedValue |  | CFixedPoint |  |
| LocationPopItem | GetGrowth |  | CString |  |
| LocationPopItem | GetGrowthForUI |  | CString |  |
| LocationPopItem | GetLackingPops |  | CString |  |
| LocationPopItem | GetLackingPopsPercentage |  | CFixedPoint |  |
| LocationPopItem | GetLiteracy |  | CFixedPoint |  |
| LocationPopItem | GetLiteracyInfo |  | CString |  |
| LocationPopItem | GetLocation |  | unknown |  |
| LocationPopItem | GetPoliticalPower |  | CFixedPoint |  |
| LocationPopItem | GetPoliticalPowerInfo |  | CString |  |
| LocationPopItem | GetSize |  | CFixedPoint |  |
| LocationPopItem | GetTotalSize |  | CString |  |
| LocationPopItem | GetType |  | unknown |  |
| LocationPopItem | GetUnEmployed |  | CString |  |
| LocationPopItem | HasLackingPops |  | bool |  |
| LocationPopItem | HasPop |  | bool |  |
| LocationPopItem | IsAllowed |  | bool |  |
| LocationPopItem | Self |  | LocationPopItem |  |
| LocationPopPieChartTooltipWidget | AccessSelf |  | LocationPopPieChartTooltipWidget |  |
| LocationPopPieChartTooltipWidget | GetLocation |  | unknown |  |
| LocationPopPieChartTooltipWidget | GetTooltipFooter |  | CString |  |
| LocationPopPieChartTooltipWidget | GetTooltipText |  | CString |  |
| LocationPopPieChartTooltipWidget | Self |  | LocationPopPieChartTooltipWidget |  |
| LocationPopulationChart | AccessSelf |  | LocationPopulationChart |  |
| LocationPopulationChart | GetCultures |  | unknown |  |
| LocationPopulationChart | GetPopTypes |  | unknown |  |
| LocationPopulationChart | GetPopsPiechartWidget |  | unknown |  |
| LocationPopulationChart | GetReligions |  | unknown |  |
| LocationPopulationChart | Self |  | LocationPopulationChart |  |
| LocationRank | AccessSelf |  | LocationRank |  |
| LocationRank | FrameTier |  | int32 |  |
| LocationRank | GetDescription |  | CString |  |
| LocationRank | GetFrameTier |  | int32 |  |
| LocationRank | GetIcon |  | CString |  |
| LocationRank | GetName |  | CString |  |
| LocationRank | GetNameWithNoTooltip |  | CString |  |
| LocationRank | GetRankTooltip |  | CString |  |
| LocationRank | GetTooltip |  | CString |  |
| LocationRank | IsCity |  | bool |  |
| LocationRank | IsMaxRank |  | bool |  |
| LocationRank | MakeScope |  | Scope | Jomini Script System |
| LocationRank | Self |  | LocationRank |  |
| LocationReference | AccessSelf |  | LocationReference |  |
| LocationReference | GetLocation |  | unknown |  |
| LocationReference | Self |  | LocationReference |  |
| LocationToBuildItem | AccessSelf |  | LocationToBuildItem |  |
| LocationToBuildItem | CanCreateBuilding |  | bool |  |
| LocationToBuildItem | CanCreateBuildingTT |  | CString |  |
| LocationToBuildItem | CanDequeue |  | bool |  |
| LocationToBuildItem | CanDequeueDesc |  | CString |  |
| LocationToBuildItem | CanDestroy |  | bool |  |
| LocationToBuildItem | CanDestroyDesc |  | CString |  |
| LocationToBuildItem | CreateBuilding |  | void |  |
| LocationToBuildItem | CreateBuildingCtrl |  | void |  |
| LocationToBuildItem | CreateBuildingDefault |  | void |  |
| LocationToBuildItem | CreateBuildingShift |  | void |  |
| LocationToBuildItem | Dequeue |  | void |  |
| LocationToBuildItem | Destroy |  | void |  |
| LocationToBuildItem | GetActiveInputs |  | unknown |  |
| LocationToBuildItem | GetActiveOutputs |  | unknown |  |
| LocationToBuildItem | GetBuilding |  | unknown |  |
| LocationToBuildItem | GetBuildingType |  | unknown |  |
| LocationToBuildItem | GetCost |  | CString |  |
| LocationToBuildItem | GetCostDescription |  | CString |  |
| LocationToBuildItem | GetCostTitle |  | CString |  |
| LocationToBuildItem | GetDequeueUIAction |  | unknown |  |
| LocationToBuildItem | GetLocation |  | unknown |  |
| LocationToBuildItem | GetMaxLevel |  | CFixedPoint |  |
| LocationToBuildItem | GetNetProfitPerLevel |  | CFixedPoint |  |
| LocationToBuildItem | GetNetProfitValue |  | CFixedPoint |  |
| LocationToBuildItem | GetProductionMethods |  | unknown |  |
| LocationToBuildItem | GetProfitInfo |  | CString |  |
| LocationToBuildItem | GetProfitInfoShort |  | CString |  |
| LocationToBuildItem | GetProfitValue |  | CFixedPoint |  |
| LocationToBuildItem | HasBuilding |  | bool |  |
| LocationToBuildItem | HasMissingGoods | 1. unknown | bool |  |
| LocationToBuildItem | IsForeignBuilding |  | bool |  |
| LocationToBuildItem | IsValid |  | bool |  |
| LocationToBuildItem | OnClickProductionMethod | 1. unknown | void |  |
| LocationToBuildItem | Self |  | LocationToBuildItem |  |
| LocationToBuildItem | ShouldShowProductionMethods |  | bool |  |
| LocationToBuildItem | ShowProfit |  | bool |  |
| LocationToRecruitItem | AccessSelf |  | LocationToRecruitItem |  |
| LocationToRecruitItem | CanCancel |  | bool |  |
| LocationToRecruitItem | CanCancelTT |  | CString |  |
| LocationToRecruitItem | CanRecruit |  | bool |  |
| LocationToRecruitItem | CanRecruitTT |  | CString |  |
| LocationToRecruitItem | Cancel |  | void |  |
| LocationToRecruitItem | GetConstruction |  | unknown |  |
| LocationToRecruitItem | GetGoldCost |  | CString |  |
| LocationToRecruitItem | GetLocation |  | unknown |  |
| LocationToRecruitItem | GetManpowerCost |  | CString |  |
| LocationToRecruitItem | GetMaxStrength |  | CString |  |
| LocationToRecruitItem | GetMercenary |  | unknown |  |
| LocationToRecruitItem | GetNumConstructionsInQueue |  | int32 |  |
| LocationToRecruitItem | GetRecruitCost |  | CString |  |
| LocationToRecruitItem | GetSailorsCost |  | CString |  |
| LocationToRecruitItem | GetUnitType |  | unknown |  |
| LocationToRecruitItem | HasConstruction |  | bool |  |
| LocationToRecruitItem | NumConstructions |  | int32 |  |
| LocationToRecruitItem | Recruit |  | void |  |
| LocationToRecruitItem | Self |  | LocationToRecruitItem |  |
| LocationView | AccessSelf |  | LocationView |  |
| LocationView | BuildRoadToCapital |  | void |  |
| LocationView | CanBuildArmy |  | bool |  |
| LocationView | CanBuildArmyTT |  | CString |  |
| LocationView | CanBuildNavy |  | bool |  |
| LocationView | CanBuildNavyTT |  | CString |  |
| LocationView | CanBuildRoadToCapitalConditions |  | CString |  |
| LocationView | CanReduceRGO |  | bool |  |
| LocationView | CanUpgrade |  | bool |  |
| LocationView | CanUpgradeRGO |  | bool |  |
| LocationView | EnableHighlight | 1. unknown | void |  |
| LocationView | EnableZocNeighboursHighlight | 1. unknown | void |  |
| LocationView | GenerateSceneDesc |  | unknown |  |
| LocationView | GetAppliedAttrition |  | CFixedPoint |  |
| LocationView | GetBuildingBasedOwners |  | unknown |  |
| LocationView | GetBuildingsInfo |  | CString |  |
| LocationView | GetColonialCharter |  | unknown |  |
| LocationView | GetColonialCharters |  | unknown |  |
| LocationView | GetDiseasePercentage |  | CFixedPoint |  |
| LocationView | GetDiseaseTooltip |  | CString |  |
| LocationView | GetFortTooltip |  | CString |  |
| LocationView | GetHigherPresenceDisease |  | unknown |  |
| LocationView | GetInProgressArmyConstructions |  | unknown |  |
| LocationView | GetInProgressNavyConstructions |  | unknown |  |
| LocationView | GetLocation |  | unknown |  |
| LocationView | GetLocationBuildings | 1. unknown | unknown |  |
| LocationView | GetMovingCapitalProgress |  | float |  |
| LocationView | GetNumColonialCharters |  | int32 |  |
| LocationView | GetNumPopBuildings |  | int32 |  |
| LocationView | GetNumPopTypeBuildings | 1. unknown | int32 |  |
| LocationView | GetNumPopTypeForeignBuildings | 1. unknown | int32 |  |
| LocationView | GetNumPopTypeOwnedBuildings | 1. unknown | int32 |  |
| LocationView | GetNumPopTypeWithBuildings |  | int32 |  |
| LocationView | GetNumPopTypeWithPresence |  | int32 |  |
| LocationView | GetNumRoadAlreadyBuilt |  | int32 |  |
| LocationView | GetNumRoadCandidates |  | int32 |  |
| LocationView | GetNumTotalArmyStaticButtons |  | int32 |  |
| LocationView | GetNumTotalNavyStaticButtons |  | int32 |  |
| LocationView | GetNumZocNeighbours |  | int32 |  |
| LocationView | GetOwnerInformation | 1. unknown | CString |  |
| LocationView | GetOwnerTypeInformation | 1. unknown | CString |  |
| LocationView | GetOwners |  | unknown |  |
| LocationView | GetPlayer |  | unknown |  |
| LocationView | GetPopBasedOwners |  | unknown |  |
| LocationView | GetPopTypeBuildingsInfo | 1. unknown | CString |  |
| LocationView | GetPopTypeItem | 1. unknown | unknown |  |
| LocationView | GetPopTypes |  | unknown |  |
| LocationView | GetPops |  | unknown |  |
| LocationView | GetProsperityTooltip |  | CString |  |
| LocationView | GetProvinceCultures |  | unknown |  |
| LocationView | GetProvinceMenuTooltip |  | CString |  |
| LocationView | GetProvincePolitics |  | unknown |  |
| LocationView | GetProvincePopTypes |  | unknown |  |
| LocationView | GetProvinceReligions |  | unknown |  |
| LocationView | GetRGOCost |  | CString |  |
| LocationView | GetRaiseArmyLeviesTooltip |  | CString |  |
| LocationView | GetRaiseNavyLeviesTooltip |  | CString |  |
| LocationView | GetRaisingArmyLeviesTT |  | CString |  |
| LocationView | GetRaisingNavyLeviesTT |  | CString |  |
| LocationView | GetRankUIAction |  | unknown |  |
| LocationView | GetRebelsTooltip |  | CString |  |
| LocationView | GetReduceRGOTooltip |  | CString |  |
| LocationView | GetRenameUIClickAction |  | unknown |  |
| LocationView | GetSortedBuildings |  | unknown |  |
| LocationView | GetStatus |  | CString |  |
| LocationView | GetUpgradeRGOBuildCostAndTime |  | CString |  |
| LocationView | GetUpgradeRGOBuildTimeBreakdown |  | CString |  |
| LocationView | GetUpgradeRGOConstructionDemand |  | unknown |  |
| LocationView | GetUpgradeRGOName |  | CString |  |
| LocationView | GetUpgradeRGOTooltip |  | CString |  |
| LocationView | GetZocNeighbours |  | unknown |  |
| LocationView | HasBuildingBasedOwners |  | bool |  |
| LocationView | HasForeignCountry |  | bool |  |
| LocationView | HasPopBasedOwners |  | bool |  |
| LocationView | HasPopTypeItem | 1. unknown | bool |  |
| LocationView | HasRebels |  | bool |  |
| LocationView | HasUpgradeRGOConstructionDemand |  | bool |  |
| LocationView | IsBuildRoadToCapitalEnabled |  | bool |  |
| LocationView | IsFlankVisible | 1. unknown 2. unknown | bool |  |
| LocationView | IsLeftPanel |  | bool |  |
| LocationView | IsLocationViewSelectProvinceOpened | 1. unknown | bool |  |
| LocationView | IsMovingCapital |  | bool |  |
| LocationView | IsPlayer |  | bool |  |
| LocationView | IsPopTypeExpanded | 1. unknown | bool |  |
| LocationView | IsRaisingArmyLevies |  | bool |  |
| LocationView | IsRaisingNavyLevies |  | bool |  |
| LocationView | IsRightPanel |  | bool |  |
| LocationView | IsShowFortsEnabled |  | bool |  |
| LocationView | IsVisibleToPlayer |  | bool |  |
| LocationView | OnMouseEnterAttackerBox | 1. unknown | void |  |
| LocationView | OnMouseEnterBuildRoadButton |  | void |  |
| LocationView | OnMouseEnterDefenderBox | 1. unknown | void |  |
| LocationView | OnMouseLeaveAttackerBox |  | void |  |
| LocationView | OnMouseLeaveBuildRoadButton |  | void |  |
| LocationView | OnMouseLeaveDefenderBox |  | void |  |
| LocationView | OpenCabinet |  | void |  |
| LocationView | PerformRename |  | void |  |
| LocationView | ReduceRGO |  | void |  |
| LocationView | RenameLocation |  | void |  |
| LocationView | Self |  | LocationView |  |
| LocationView | ShowColonialCharterListWidget |  | bool |  |
| LocationView | ShowCreateMarket |  | bool |  |
| LocationView | ShowCurrentColonyWidget |  | bool |  |
| LocationView | ShowDisease |  | bool |  |
| LocationView | ShowExistingMarketUIActions |  | bool |  |
| LocationView | ShowForts |  | void |  |
| LocationView | ShowManpowerWidget |  | bool |  |
| LocationView | ShowPossibleColonyWidget |  | bool |  |
| LocationView | ShowReduceRGO |  | bool |  |
| LocationView | ShowSailorWidget |  | bool |  |
| LocationView | ShowUpgradeRGO |  | bool |  |
| LocationView | ShowUpgradeRank |  | bool |  |
| LocationView | ToggleLocationViewSelectProvince | 1. unknown | void |  |
| LocationView | TogglePopType | 1. unknown | void |  |
| LocationView | UpgradeRGO |  | void |  |
| LocationViewSelectProvince | AccessSelf |  | LocationViewSelectProvince |  |
| LocationViewSelectProvince | OnClose |  | void |  |
| LocationViewSelectProvince | Parent |  | unknown |  |
| LocationViewSelectProvince | Self |  | LocationViewSelectProvince |  |
| LocationsListView | AccessSelf |  | LocationsListView |  |
| LocationsListView | GetLocationsListSortSearch |  | unknown |  |
| LocationsListView | GetLocationsListView |  | unknown |  |
| LocationsListView | GetPlayer |  | unknown |  |
| LocationsListView | IsLeftPanel |  | bool |  |
| LocationsListView | IsRightPanel |  | bool |  |
| LocationsListView | Self |  | LocationsListView |  |
| LocationsListViewItem | AccessSelf |  | LocationsListViewItem |  |
| LocationsListViewItem | GetLocation |  | unknown |  |
| LocationsListViewItem | Self |  | LocationsListViewItem |  |
| LockableInfo | AccessSelf |  | LockableInfo |  |
| LockableInfo | GetTintColor |  | CVector4f |  |
| LockableInfo | GetUnlockingProgress |  | float |  |
| LockableInfo | IsUnlocked |  | bool |  |
| LockableInfo | Self |  | LockableInfo |  |
| LogEntry | AccessSelf |  | LogEntry |  |
| LogEntry | GetColor |  | CVector4f |  |
| LogEntry | GetText |  | CString |  |
| LogEntry | GetTime |  | CString |  |
| LogEntry | Self |  | LogEntry |  |
| LogViewer | AccessCategories |  | unknown |  |
| LogViewer | AccessSelf |  | LogViewer |  |
| LogViewer | AccessTypes |  | unknown |  |
| LogViewer | DecreaseLogInfoExpandSize |  | void |  |
| LogViewer | FlushLog |  | void |  |
| LogViewer | GetFilteredNum |  | int32 |  |
| LogViewer | GetLastLogEntry |  | unknown |  |
| LogViewer | GetLogInfoExpandSize |  | int32 |  |
| LogViewer | GetLogInfoExpandSizeVector | 1. unknown | CVector2f |  |
| LogViewer | GetSelectedLogEntry |  | unknown |  |
| LogViewer | GetTextFilter |  | CUTF8String |  |
| LogViewer | HasEntries |  | bool |  |
| LogViewer | IncreaseLogInfoExpandSize |  | void |  |
| LogViewer | IsAnyEntrySelected |  | bool |  |
| LogViewer | OpenLinkedLogViewer |  | void |  |
| LogViewer | OpenLinkedLogViewerFilteredByType | 1. unknown | void |  |
| LogViewer | ResetFilters |  | void |  |
| LogViewer | ResetTextFilter |  | void |  |
| LogViewer | Self |  | LogViewer |  |
| LogViewer | SetTextFilter |  | void |  |
| LogViewer | ToggleHidden |  | void |  |
| LogViewerCategory | AccessSelf |  | LogViewerCategory |  |
| LogViewerCategory | GetFilteredCount |  | int32 |  |
| LogViewerCategory | GetIcon |  | unknown |  |
| LogViewerCategory | GetIsFiltered |  | bool |  |
| LogViewerCategory | GetName |  | CString |  |
| LogViewerCategory | Self |  | LogViewerCategory |  |
| LogViewerCategory | SetIsFiltered | 1. unknown | void |  |
| LogViewerEntry | AccessSelf |  | LogViewerEntry |  |
| LogViewerEntry | ContainsScriptFile |  | bool |  |
| LogViewerEntry | GetFileLineNo |  | int32 |  |
| LogViewerEntry | GetFilename |  | unknown |  |
| LogViewerEntry | GetFilepath |  | CString |  |
| LogViewerEntry | GetIcon |  | unknown |  |
| LogViewerEntry | GetMessage |  | CString |  |
| LogViewerEntry | GetTimestampLong |  | CString |  |
| LogViewerEntry | GetTimestampShort |  | CString |  |
| LogViewerEntry | IsSelected |  | bool |  |
| LogViewerEntry | OpenInCodeEditor |  | void |  |
| LogViewerEntry | OpenInEditor |  | void |  |
| LogViewerEntry | OpenInExternalLogViewer |  | void |  |
| LogViewerEntry | OpenInScriptEditor |  | void |  |
| LogViewerEntry | Self |  | LogViewerEntry |  |
| LogViewerEntry | SetSelected | 1. unknown | void |  |
| LogViewerType | AccessSelf |  | LogViewerType |  |
| LogViewerType | GetFilteredCount |  | int32 |  |
| LogViewerType | GetIcon |  | unknown |  |
| LogViewerType | GetId |  | int32 |  |
| LogViewerType | GetIsFiltered |  | bool |  |
| LogViewerType | GetName |  | CString |  |
| LogViewerType | Self |  | LogViewerType |  |
| LogViewerType | SetIsFiltered | 1. unknown | void |  |
| LoginView | AccessSelf |  | LoginView |  |
| LoginView | GetEmail |  | CUTF8String |  |
| LoginView | GetErrorMessage |  | CUTF8String |  |
| LoginView | GetLoginString |  | CUTF8String |  |
| LoginView | GetPassword |  | CUTF8String |  |
| LoginView | Hide |  | void |  |
| LoginView | IsChangingUserName |  | bool |  |
| LoginView | IsConnectingAccount |  | bool |  |
| LoginView | IsEmailSent |  | bool |  |
| LoginView | IsEmptyUserNamePrompt |  | bool |  |
| LoginView | IsLoggedIn |  | bool |  |
| LoginView | IsLogin |  | bool |  |
| LoginView | IsRestoringPassword |  | bool |  |
| LoginView | IsSuccessfulSetName |  | bool |  |
| LoginView | IsValidLoginInfo |  | bool |  |
| LoginView | Login |  | void |  |
| LoginView | Logout |  | void |  |
| LoginView | OnUserNameChange |  | void |  |
| LoginView | ResetPassword |  | void |  |
| LoginView | Self |  | LoginView |  |
| LoginView | SetEmail |  | void |  |
| LoginView | SetPassword |  | void |  |
| LoginView | SetState | 1. unknown | void |  |
| LoginView | SetUserName |  | void |  |
| LoginView | Show |  | void |  |
| LoginView | ToggleConnected |  | void |  |
| float | AccessSelf |  | float |  |
| float | Self |  | float |  |
| int16 | AccessSelf |  | int16 |  |
| int16 | GetInt |  | unknown |  |
| int16 | Self |  | int16 |  |
| int32 | AccessSelf |  | int32 |  |
| int32 | GetInt |  | unknown |  |
| int32 | Self |  | int32 |  |
| int64 | AccessSelf |  | int64 |  |
| int64 | GetInt |  | unknown |  |
| int64 | Self |  | int64 |  |
| int8 | AccessSelf |  | int8 |  |
| int8 | GetInt |  | unknown |  |
| int8 | Self |  | int8 |  |

List of all M-Re GUI functions/m-re

| Type | Functions/M-R | Arguments | Output | Description |
| --- | --- | --- | --- | --- |
| MPChatMessage | AccessSelf |  | MPChatMessage |  |
| MPChatMessage | GetMessage |  | CString |  |
| MPChatMessage | IsWhisper |  | bool |  |
| MPChatMessage | Self |  | MPChatMessage |  |
| MPConfig | AccessSelf |  | MPConfig |  |
| MPConfig | GetOfflinePlayerToolTip |  | CString |  |
| MPConfig | GetPrivateToolTip |  | CString |  |
| MPConfig | GetPublicToolTip |  | CString |  |
| MPConfig | IsCrossplayChecked |  | bool |  |
| MPConfig | IsHotjoinAutoAccept |  | bool |  |
| MPConfig | IsOffline |  | bool |  |
| MPConfig | IsPrivate |  | bool |  |
| MPConfig | IsPublic |  | bool |  |
| MPConfig | Self |  | MPConfig |  |
| MPConfig | SetOffline |  | void |  |
| MPConfig | SetPrivate |  | void |  |
| MPConfig | SetPublic |  | void |  |
| MPConfig | ToggleCrossplay |  | void |  |
| MPConfig | ToggleHotjoinAutoAccept |  | void |  |
| MaintenanceSetting | AccessSelf |  | MaintenanceSetting |  |
| MaintenanceSetting | GetDefault |  | float |  |
| MaintenanceSetting | GetExpense |  | CFixedPoint |  |
| MaintenanceSetting | GetExpenseBenefit |  | CString |  |
| MaintenanceSetting | GetExpenseBenefitTooltip |  | CString |  |
| MaintenanceSetting | GetExpenseBreakdown |  | CString |  |
| MaintenanceSetting | GetExpenseNoFormat |  | CFixedPoint |  |
| MaintenanceSetting | GetIcon |  | unknown |  |
| MaintenanceSetting | GetImpactTooltip |  | CString |  |
| MaintenanceSetting | GetMax |  | float |  |
| MaintenanceSetting | GetMaxExpense |  | CFixedPoint |  |
| MaintenanceSetting | GetMaxExpenseNoFormat |  | CFixedPoint |  |
| MaintenanceSetting | GetMin |  | float |  |
| MaintenanceSetting | GetModifier |  | CString |  |
| MaintenanceSetting | GetModifierDesc |  | CString |  |
| MaintenanceSetting | GetName |  | CString |  |
| MaintenanceSetting | GetNameWithNoTooltip |  | CString |  |
| MaintenanceSetting | GetSettingOwner |  | unknown |  |
| MaintenanceSetting | GetSliderValue |  | CFixedPoint |  |
| MaintenanceSetting | HasModifier |  | bool |  |
| MaintenanceSetting | HasModifierWithTitle |  | bool |  |
| MaintenanceSetting | IsArmy |  | bool |  |
| MaintenanceSetting | IsDecEnabled |  | bool |  |
| MaintenanceSetting | IsDiplomatic |  | bool |  |
| MaintenanceSetting | IsEnabled |  | bool |  |
| MaintenanceSetting | IsFort |  | bool |  |
| MaintenanceSetting | IsIO |  | bool |  |
| MaintenanceSetting | IsIncEnabled |  | bool |  |
| MaintenanceSetting | IsNavy |  | bool |  |
| MaintenanceSetting | IsVisible |  | bool |  |
| MaintenanceSetting | OnChanged |  | void |  |
| MaintenanceSetting | Post |  | void |  |
| MaintenanceSetting | Self |  | MaintenanceSetting |  |
| MaintenanceSetting | ShowBreakdown |  | bool |  |
| MaintenanceSetting | ShowModifier |  | bool |  |
| MaintenanceSetting | ShowModifierWithTitle |  | bool |  |
| MaintenanceSetting | ShowSlider |  | bool |  |
| ManageSubjectsLateralView | AccessSelf |  | ManageSubjectsLateralView |  |
| ManageSubjectsLateralView | GetPlayer |  | unknown |  |
| ManageSubjectsLateralView | GetSubjectRelations |  | unknown |  |
| ManageSubjectsLateralView | GetSubjectRelationsSortSearch |  | unknown |  |
| ManageSubjectsLateralView | GetTitle |  | CString |  |
| ManageSubjectsLateralView | IsLeftPanel |  | bool |  |
| ManageSubjectsLateralView | IsRightPanel |  | bool |  |
| ManageSubjectsLateralView | IsSubjectType | 1. unknown | bool |  |
| ManageSubjectsLateralView | Self |  | ManageSubjectsLateralView |  |
| MapColorLedger | AccessSelf |  | MapColorLedger |  |
| MapColorLedger | GetColor |  | CVector4f |  |
| MapColorLedger | GetName |  | CString |  |
| MapColorLedger | Self |  | MapColorLedger |  |
| MapContentEditorMode | AccessSelf |  | MapContentEditorMode |  |
| MapContentEditorMode | IsSelected |  | bool |  |
| MapContentEditorMode | Self |  | MapContentEditorMode |  |
| MapContentEditorOptions | AccessSelf |  | MapContentEditorOptions |  |
| MapContentEditorOptions | ApplyChanges |  | void |  |
| MapContentEditorOptions | CanApplyChanges |  | bool |  |
| MapContentEditorOptions | CanErase |  | bool |  |
| MapContentEditorOptions | CanMakeGroupingOperation |  | bool |  |
| MapContentEditorOptions | CurrentLayerHasChanges |  | bool |  |
| MapContentEditorOptions | DiscardChanges |  | void |  |
| MapContentEditorOptions | GetAddToGroupModeDescription |  | CString |  |
| MapContentEditorOptions | GetApplyButtonDescription |  | CString |  |
| MapContentEditorOptions | GetEraserDescription |  | CString |  |
| MapContentEditorOptions | GetMapContentSelectionModeDescription |  | CString |  |
| MapContentEditorOptions | GetPaintModeDescription |  | CString |  |
| MapContentEditorOptions | GetRemoveFromGroupModeDescription |  | CString |  |
| MapContentEditorOptions | IsAddToGroupMode |  | bool |  |
| MapContentEditorOptions | IsAddToGroupModeAllowed |  | bool |  |
| MapContentEditorOptions | IsAutoEntrySelectOnPaint |  | bool |  |
| MapContentEditorOptions | IsCurrentLayerPixelBased |  | bool |  |
| MapContentEditorOptions | IsEraserMode |  | bool |  |
| MapContentEditorOptions | IsEraserModeAllowed |  | bool |  |
| MapContentEditorOptions | IsMapContentSelectionMode |  | bool |  |
| MapContentEditorOptions | IsMapContentSelectionModeAllowed |  | bool |  |
| MapContentEditorOptions | IsPaintMode |  | bool |  |
| MapContentEditorOptions | IsPaintModeAllowed |  | bool |  |
| MapContentEditorOptions | IsPaintingAllowed |  | bool |  |
| MapContentEditorOptions | IsRemoveFromGroupMode |  | bool |  |
| MapContentEditorOptions | IsRemoveFromGroupModeAllowed |  | bool |  |
| MapContentEditorOptions | Self |  | MapContentEditorOptions |  |
| MapContentEditorOptions | SetAddToGroupMode |  | void |  |
| MapContentEditorOptions | SetEraserMode |  | void |  |
| MapContentEditorOptions | SetMapContentSelectionMode | 1. unknown | void |  |
| MapContentEditorOptions | SetPaintMode |  | void |  |
| MapContentEditorOptions | SetRemoveFromGroupMode |  | void |  |
| MapContentEditorOptions | ToggleAutoEntrySelectOnPaint |  | void |  |
| MapContentEditorViewport | AccessSelf |  | MapContentEditorViewport |  |
| MapContentEditorViewport | CancelPropertyPainting |  | void |  |
| MapContentEditorViewport | GetPropertyPaintingModeDesc |  | CString |  |
| MapContentEditorViewport | IsInPropertyPaintingMode |  | bool |  |
| MapContentEditorViewport | Self |  | MapContentEditorViewport |  |
| MapContentEntryDesc | AccessSelf |  | MapContentEntryDesc |  |
| MapContentEntryDesc | ContainsErrors |  | bool |  |
| MapContentEntryDesc | GetErrorMessage |  | CString |  |
| MapContentEntryDesc | GetName |  | CString |  |
| MapContentEntryDesc | GetUniqueId |  | int32 |  |
| MapContentEntryDesc | IsDone |  | bool |  |
| MapContentEntryDesc | IsSelected |  | bool |  |
| MapContentEntryDesc | Self |  | MapContentEntryDesc |  |
| MapContentLayerDesc | AccessSelf |  | MapContentLayerDesc |  |
| MapContentLayerDesc | GetName |  | CString |  |
| MapContentLayerDesc | Self |  | MapContentLayerDesc |  |
| MapContentPanel | AccessSelf |  | MapContentPanel |  |
| MapContentPanel | CanCreateNewEntry |  | bool |  |
| MapContentPanel | CanDeleteAnySelectedEntry |  | bool |  |
| MapContentPanel | CanRenameSelectedEntry |  | bool |  |
| MapContentPanel | CreateNewEntry |  | void |  |
| MapContentPanel | DeleteSelectedEntries |  | void |  |
| MapContentPanel | GetCreateNewEntryTooltip |  | CString |  |
| MapContentPanel | GetDeleteSelectedEntriesTooltip |  | CString |  |
| MapContentPanel | GetRenameSelectedEntryTooltip |  | CString |  |
| MapContentPanel | RenameSelectedEntry |  | void |  |
| MapContentPanel | Self |  | MapContentPanel |  |
| MapContentPropertyGroup | AccessSelf |  | MapContentPropertyGroup |  |
| MapContentPropertyGroup | GetName |  | CString |  |
| MapContentPropertyGroup | IsExpanded |  | bool |  |
| MapContentPropertyGroup | Self |  | MapContentPropertyGroup |  |
| MapContentPropertyGroup | ToggleExpanded |  | void |  |
| MapContentPropertyGroupsGui | AccessSelf |  | MapContentPropertyGroupsGui |  |
| MapContentPropertyGroupsGui | CanActivatePropertyPaintingMode |  | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForBool | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForCColor | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForCString | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForColor | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForEnum | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForFloat | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForInt | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForString | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForUint | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForVec2f | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForVec2i | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForVec3f | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForVec3i | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForVec4i | 1. unknown | bool |  |
| MapContentPropertyGroupsGui | Self |  | MapContentPropertyGroupsGui |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeBool | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeCColor | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeCString | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeColor | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeEnum | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeFloat | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeInt | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeString | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeUint | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeVec2f | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeVec2i | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeVec3f | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeVec3i | 1. unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeVec4i | 1. unknown | void |  |
| MapContentSelector | AccessSelf |  | MapContentSelector |  |
| MapContentSelector | GetErrorsCount |  | int32 |  |
| MapContentSelector | GetSelectedCount |  | int32 |  |
| MapContentSelector | IsAllSelectedDone |  | bool |  |
| MapContentSelector | IsAllSelectedHasErrors |  | bool |  |
| MapContentSelector | IsShowProgress |  | bool |  |
| MapContentSelector | Self |  | MapContentSelector |  |
| MapContentSelector | SetSelectedDone | 1. unknown | void |  |
| MapContentSelector | SetShowProgress | 1. unknown | void |  |
| MapContentSelectorGui | AccessSelf |  | MapContentSelectorGui |  |
| MapContentSelectorGui | ClearEntriesFilter |  | void |  |
| MapContentSelectorGui | GetCurrentLayerIndex |  | CVector2i |  |
| MapContentSelectorGui | GetEntriesFilter |  | CString |  |
| MapContentSelectorGui | GetEntriesWithErrorsCount |  | int32 |  |
| MapContentSelectorGui | GetSelectedEntriesCount |  | int32 |  |
| MapContentSelectorGui | IsAllSelectedDone |  | bool |  |
| MapContentSelectorGui | IsAllSelectedError |  | bool |  |
| MapContentSelectorGui | IsFilterErrors |  | bool |  |
| MapContentSelectorGui | IsShowProgress |  | bool |  |
| MapContentSelectorGui | OnEntryDoubleClicked | 1. unknown | void |  |
| MapContentSelectorGui | OnEntrySelected | 1. unknown | void |  |
| MapContentSelectorGui | Self |  | MapContentSelectorGui |  |
| MapContentSelectorGui | SetCurrentLayerIndex |  | void |  |
| MapContentSelectorGui | SetEntriesFilter |  | void |  |
| MapContentSelectorGui | SetFilterErrors | 1. unknown | void |  |
| MapContentSelectorGui | SetSelectedDone | 1. unknown | void |  |
| MapContentSelectorGui | SetShowProgress | 1. unknown | void |  |
| MapEditor | AccessSelf |  | MapEditor |  |
| MapEditor | AccessUndoHistoryViewerClient |  | unknown |  |
| MapEditor | Exit |  | void |  |
| MapEditor | ExportTool |  | void |  |
| MapEditor | GetReferenceOverlayVisibility |  | bool |  |
| MapEditor | GetUndoHistoryViewerClient |  | unknown |  |
| MapEditor | ImportTool |  | void |  |
| MapEditor | IsAutoSaving |  | bool |  |
| MapEditor | IsEnabled |  | bool |  |
| MapEditor | IsSavable |  | bool |  |
| MapEditor | Save |  | void |  |
| MapEditor | SaveAll |  | void |  |
| MapEditor | SaveAs |  | void |  |
| MapEditor | Self |  | MapEditor |  |
| MapEditor | SetReferenceOverlayVisibility | 1. unknown | void |  |
| MapEditorGui | AccessLogViewer |  | unknown | Access Central Log Viewer |
| MapEditorGui | AccessSelf |  | MapEditorGui |  |
| MapEditorGui | GetReferenceOverlayOpacity |  | float |  |
| MapEditorGui | IsRebuildingSplines |  | bool |  |
| MapEditorGui | RebuildSplines |  | void |  |
| MapEditorGui | Self |  | MapEditorGui |  |
| MapEditorGui | SetReferenceOverlayOpacity |  | void |  |
| MapEditorGui | ShowSettingsWindow |  | void |  |
| MapEditorGui | ToggleBordersSettingsOptions |  | void |  |
| MapEditorGui | ToggleReferenceOverlayOptions |  | void |  |
| MapEditorLayerBorder | AccessSelf |  | MapEditorLayerBorder |  |
| MapEditorLayerBorder | GetLayerIndex |  | int32 |  |
| MapEditorLayerBorder | IsForceShown |  | bool |  |
| MapEditorLayerBorder | Self |  | MapEditorLayerBorder |  |
| MapEditorLayerBorder | SetForceShown | 1. unknown | void |  |
| MapEditorLayerBorderDockable | AccessSelf |  | MapEditorLayerBorderDockable |  |
| MapEditorLayerBorderDockable | GetLayerName | 1. unknown | CString |  |
| MapEditorLayerBorderDockable | Self |  | MapEditorLayerBorderDockable |  |
| MapMarkerSettingItem | AccessSelf |  | MapMarkerSettingItem |  |
| MapMarkerSettingItem | GetEntryCount |  | int32 |  |
| MapMarkerSettingItem | GetName |  | CString |  |
| MapMarkerSettingItem | IsClosed |  | bool |  |
| MapMarkerSettingItem | IsOpened |  | bool |  |
| MapMarkerSettingItem | IsPinned |  | bool |  |
| MapMarkerSettingItem | Self |  | MapMarkerSettingItem |  |
| MapMarkerSettingItem | Toggle |  | void |  |
| MapMarkerSettingItem | TogglePin |  | void |  |
| MapMode | AccessSelf |  | MapMode |  |
| MapMode | GetIcon |  | unknown |  |
| MapMode | GetInputAction |  | CString |  |
| MapMode | GetKey |  | CString |  |
| MapMode | GetMapModeCategory |  | CString |  |
| MapMode | GetMapModeGroup |  | int32 |  |
| MapMode | GetName |  | CString |  |
| MapMode | GetTooltip |  | CString |  |
| MapMode | IsActive |  | bool |  |
| MapMode | IsMapModePinnedByDefault |  | bool |  |
| MapMode | IsSet |  | bool |  |
| MapMode | Self |  | MapMode |  |
| MapMode | SetMapMode |  | void |  |
| MapObjectMask | AccessSelf |  | MapObjectMask |  |
| MapObjectMask | GetGeneratorCount |  | int32 |  |
| MapObjectMask | GetGeneratorNames |  | CString |  |
| MapObjectMask | GetName |  | CString |  |
| MapObjectMask | GetTextValidator |  | unknown |  |
| MapObjectMask | GetThumbnail |  | unknown |  |
| MapObjectMask | IsModified |  | bool |  |
| MapObjectMask | IsSelected |  | bool |  |
| MapObjectMask | Self |  | MapObjectMask |  |
| MapObjectMask | SetModified |  | void |  |
| MapObjectMask | SetName |  | void |  |
| MapObjectMask | SetSelected |  | void |  |
| MapObjectPainter | AccessSelf |  | MapObjectPainter |  |
| MapObjectPainter | GetTextValidator |  | unknown |  |
| MapObjectPainter | MarkAllMasksModified |  | void |  |
| MapObjectPainter | MaskList |  | unknown |  |
| MapObjectPainter | Self |  | MapObjectPainter |  |
| MapObjectPainterMode | AccessSelf |  | MapObjectPainterMode |  |
| MapObjectPainterMode | IsSelected |  | bool |  |
| MapObjectPainterMode | Self |  | MapObjectPainterMode |  |
| MapObjectPainterOptions | AccessBlurThresholdCtx |  | unknown |  |
| MapObjectPainterOptions | AccessSelf |  | MapObjectPainterOptions |  |
| MapObjectPainterOptions | GetPaintValue |  | float |  |
| MapObjectPainterOptions | IsCurrentBlendMode | 1. unknown | bool |  |
| MapObjectPainterOptions | Self |  | MapObjectPainterOptions |  |
| MapObjectPainterOptions | SetBlendMode | 1. unknown | void |  |
| MapObjectPainterOptions | SetPaintValue |  | void |  |
| MapObjectPainterOptions | SetPaintValueStr |  | void |  |
| MapObjectTool | AccessSelf |  | MapObjectTool |  |
| MapObjectTool | IsCreateTool |  | bool |  |
| MapObjectTool | IsMovingObjects |  | bool |  |
| MapObjectTool | IsRotatingObjects |  | bool |  |
| MapObjectTool | IsScalingObjects |  | bool |  |
| MapObjectTool | IsSelectionModeMapContent |  | bool |  |
| MapObjectTool | IsSelectionModeObjects |  | bool |  |
| MapObjectTool | RotateRandom |  | void |  |
| MapObjectTool | Self |  | MapObjectTool |  |
| MapObjectTool | SetCreateTool |  | void |  |
| MapObjectTool | SetMovingObjects |  | void |  |
| MapObjectTool | SetRotatingObjects |  | void |  |
| MapObjectTool | SetScalingObjects |  | void |  |
| MapObjectTool | SetSelectionModeMapContent |  | void |  |
| MapObjectTool | SetSelectionModeObjects |  | void |  |
| Maritime | AccessSelf |  | Maritime |  |
| Maritime | GetHostilePrivateersTooltip | 1. unknown | CString |  |
| Maritime | GetLocation |  | unknown |  |
| Maritime | GetMaritimePresences |  | unknown |  |
| Maritime | GetPrivateers |  | unknown |  |
| Maritime | HasHostilePrivateers | 1. unknown | bool |  |
| Maritime | Self |  | Maritime |  |
| MaritimeInLocationWrap | AccessSelf |  | MaritimeInLocationWrap |  |
| MaritimeInLocationWrap | GetCountry |  | unknown |  |
| MaritimeInLocationWrap | GetLocation |  | unknown |  |
| MaritimeInLocationWrap | GetPresence |  | unknown |  |
| MaritimeInLocationWrap | Self |  | MaritimeInLocationWrap |  |
| MaritimeItem | AccessSelf |  | MaritimeItem |  |
| MaritimeItem | GetHostilePrivateersTooltip |  | CString |  |
| MaritimeItem | GetSeaZone |  | unknown |  |
| MaritimeItem | HasHostilePrivateers |  | bool |  |
| MaritimeItem | Self |  | MaritimeItem |  |
| MaritimeLateralView | AccessSelf |  | MaritimeLateralView |  |
| MaritimeLateralView | GetPlayer |  | unknown |  |
| MaritimeLateralView | GetPrivateers |  | unknown |  |
| MaritimeLateralView | GetSeazones |  | unknown |  |
| MaritimeLateralView | IsLeftPanel |  | bool |  |
| MaritimeLateralView | IsRightPanel |  | bool |  |
| MaritimeLateralView | Self |  | MaritimeLateralView |  |
| MaritimePresence | AccessSelf |  | MaritimePresence |  |
| MaritimePresence | GetChange |  | CFixedPoint |  |
| MaritimePresence | GetChangeInfo |  | CString |  |
| MaritimePresence | GetCountry |  | unknown |  |
| MaritimePresence | GetMaritimeMerchantPower |  | CFixedPoint |  |
| MaritimePresence | GetMaritimeMerchantPowerInfo |  | CString |  |
| MaritimePresence | GetOwner |  | unknown |  |
| MaritimePresence | GetPower |  | CFixedPoint |  |
| MaritimePresence | Self |  | MaritimePresence |  |
| Market | AccessSelf |  | Market |  |
| Market | CanExport | 1. unknown 2. unknown | bool |  |
| Market | CanImport | 1. unknown 2. unknown | bool |  |
| Market | GetActualAutomatedTradeCapacity | 1. unknown | CFixedPoint |  |
| Market | GetAllTrades |  | unknown |  |
| Market | GetAutomatedTradeCapacity | 1. unknown | CFixedPoint |  |
| Market | GetAvailableManualTradeCapacity | 1. unknown | CFixedPoint |  |
| Market | GetAverageMigrationAttraction |  | CFixedPoint |  |
| Market | GetBurgherFoodExports |  | CFixedPoint |  |
| Market | GetBurgherFoodImports |  | CFixedPoint |  |
| Market | GetCenterLocation |  | unknown |  |
| Market | GetCountryPopulation | 1. unknown | CFixedPoint |  |
| Market | GetDebugText |  | CString |  |
| Market | GetDemand | 1. unknown | CFixedPoint |  |
| Market | GetDemandInfo | 1. unknown | CString |  |
| Market | GetDemandLabel | 1. unknown | CString |  |
| Market | GetExportInfo | 1. unknown 2. unknown | CString |  |
| Market | GetExports |  | unknown |  |
| Market | GetFood |  | CFixedPoint |  |
| Market | GetFoodExportsInfo |  | CString |  |
| Market | GetFoodImportsInfo |  | CString |  |
| Market | GetFoodPrice |  | CFixedPoint |  |
| Market | GetFoodPriceStepInfo |  | CString |  |
| Market | GetFoodProductionInfo |  | CString |  |
| Market | GetFoodStockpile |  | CFixedPoint |  |
| Market | GetFoodStockpilePercent |  | CFixedPoint |  |
| Market | GetGoods |  | unknown |  |
| Market | GetGoodsWithHighestSupplyAndValue |  | unknown |  |
| Market | GetHighestDemandGoods |  | unknown |  |
| Market | GetImportInfo | 1. unknown 2. unknown | CString |  |
| Market | GetImports |  | unknown |  |
| Market | GetLanguage |  | unknown |  |
| Market | GetManualOrUsedLockedTradeCapacity | 1. unknown | CFixedPoint |  |
| Market | GetManualTradeCapacity | 1. unknown | CFixedPoint |  |
| Market | GetMarketEntry | 1. unknown | unknown |  |
| Market | GetMaxFoodStockpile |  | CFixedPoint |  |
| Market | GetMerchantAvailableCapacity | 1. unknown | CFixedPoint |  |
| Market | GetMerchantCapacity | 1. unknown | CString |  |
| Market | GetMerchantCapacityEfficiency | 1. unknown | CFixedPoint |  |
| Market | GetMerchantCapacityInfo | 1. unknown | CString |  |
| Market | GetMerchantCapacityLong | 1. unknown | CString |  |
| Market | GetMerchantPower | 1. unknown | CFixedPoint |  |
| Market | GetMerchantPowerInfo | 1. unknown | CString |  |
| Market | GetMerchantPowerWithLabel | 1. unknown | CString |  |
| Market | GetMerchantRanking | 1. unknown | int32 |  |
| Market | GetMerchantTotalCapacity | 1. unknown | CFixedPoint |  |
| Market | GetMerchantTotalCapacityInMarket |  | CFixedPoint |  |
| Market | GetMerchantUsedCapacity | 1. unknown | CFixedPoint |  |
| Market | GetMerchants |  | unknown |  |
| Market | GetMonthlyFood |  | CFixedPoint |  |
| Market | GetMonthlyFoodBalance |  | CFixedPoint |  |
| Market | GetMonthlyFoodWithLabel |  | CString |  |
| Market | GetName |  | CString |  |
| Market | GetNameWithNoTooltip |  | CString |  |
| Market | GetNumExports | 1. unknown | int32 |  |
| Market | GetNumImports | 1. unknown | int32 |  |
| Market | GetOwner |  | unknown |  |
| Market | GetPrice | 1. unknown | CFixedPoint |  |
| Market | GetPriceDirection | 1. unknown | int32 |  |
| Market | GetPriceInfo | 1. unknown | CString |  |
| Market | GetPriceWithChange | 1. unknown | CString |  |
| Market | GetProduced | 1. unknown | CFixedPoint |  |
| Market | GetProducedInfo | 1. unknown | CString |  |
| Market | GetShortName |  | CString |  |
| Market | GetShortNameWithNoTooltip |  | CString |  |
| Market | GetStarvingProvinces |  | unknown |  |
| Market | GetStockpile | 1. unknown | CFixedPoint |  |
| Market | GetSupply | 1. unknown | CFixedPoint |  |
| Market | GetSupplyInfo | 1. unknown | CString |  |
| Market | GetSupplyLabel | 1. unknown | CString |  |
| Market | GetSurplus | 1. unknown | CFixedPoint |  |
| Market | GetSurplusGoods |  | unknown |  |
| Market | GetSurplusInformation | 1. unknown | CString |  |
| Market | GetSurplusLabel | 1. unknown | CString |  |
| Market | GetSurplusLabelWithBreakdown | 1. unknown | CString |  |
| Market | GetTemporaryDemands |  | unknown |  |
| Market | GetTemporaryDemandsInfo |  | CString |  |
| Market | GetTooltip |  | CString |  |
| Market | GetTotalMerchantCapacity | 1. unknown | CFixedPoint |  |
| Market | GetTotalValueTraded |  | CFixedPoint |  |
| Market | HasFoodsExport |  | bool |  |
| Market | HasFoodsImport |  | bool |  |
| Market | HasStarvingProvinces |  | bool |  |
| Market | IsAutomatedTradeCapacityDecEnabled | 1. unknown | bool |  |
| Market | IsAutomatedTradeCapacityIncEnabled | 1. unknown | bool |  |
| Market | MakeScope |  | Scope | Jomini Script System |
| Market | Self |  | Market |  |
| Market | WillRunOutOfFoodStochpile |  | bool |  |
| MarketAccessWrap | AccessSelf |  | MarketAccessWrap |  |
| MarketAccessWrap | GetLocation |  | unknown |  |
| MarketAccessWrap | GetMarket |  | unknown |  |
| MarketAccessWrap | GetTooltip |  | CString |  |
| MarketAccessWrap | GetValue |  | CFixedPoint |  |
| MarketAccessWrap | Self |  | MarketAccessWrap |  |
| MarketCountryNeeds | AccessMarket |  | unknown |  |
| MarketCountryNeeds | AccessSelf |  | MarketCountryNeeds |  |
| MarketCountryNeeds | GetBuildingsMissingGoodsInfo |  | CString |  |
| MarketCountryNeeds | GetGovernmentMissingGoodsAmount |  | int32 |  |
| MarketCountryNeeds | GetGovernmentMissingGoodsInfo |  | CString |  |
| MarketCountryNeeds | GetMarket |  | unknown |  |
| MarketCountryNeeds | GetPopsMissingGoodsAmount |  | int32 |  |
| MarketCountryNeeds | GetPopsMissingGoodsInfo |  | CString |  |
| MarketCountryNeeds | HasBuildingsMissingGoods |  | bool |  |
| MarketCountryNeeds | HasGovernmentMissingGoods |  | bool |  |
| MarketCountryNeeds | HasPopsMissingGoods |  | bool |  |
| MarketCountryNeeds | HasRebelPopsMissingGoods |  | bool |  |
| MarketCountryNeeds | IsValid |  | bool |  |
| MarketCountryNeeds | Self |  | MarketCountryNeeds |  |
| MarketMarker | AccessSelf |  | MarketMarker |  |
| MarketMarker | GetLocation |  | unknown |  |
| MarketMarker | GetTooltip |  | CString |  |
| MarketMarker | Self |  | MarketMarker |  |
| MarketViewSelectMarket | AccessSelf |  | MarketViewSelectMarket |  |
| MarketViewSelectMarket | OnClose |  | void |  |
| MarketViewSelectMarket | Parent |  | unknown |  |
| MarketViewSelectMarket | Self |  | MarketViewSelectMarket |  |
| MarketingContainer | AccessSelf |  | MarketingContainer |  |
| MarketingContainer | AccessSlotByName | 1. unknown | unknown |  |
| MarketingContainer | GetSlotByName | 1. unknown | unknown |  |
| MarketingContainer | RequestData |  | void |  |
| MarketingContainer | Self |  | MarketingContainer |  |
| MarketingSlot | AccessSelf |  | MarketingSlot |  |
| MarketingSlot | ClearStartAnimating |  | void |  |
| MarketingSlot | ClearStopAnimating |  | void |  |
| MarketingSlot | ClickActiveCard |  | void |  |
| MarketingSlot | CycleActiveContentCard |  | void |  |
| MarketingSlot | GetCarouselDelay |  | float |  |
| MarketingSlot | GetNextTexture |  | unknown |  |
| MarketingSlot | GetTexture |  | unknown |  |
| MarketingSlot | Self |  | MarketingSlot |  |
| MarketingSlot | StartAnimating |  | bool |  |
| MarketingSlot | StopAnimating |  | bool |  |
| MarketsView | AccessSelf |  | MarketsView |  |
| MarketsView | GetMarkets |  | unknown |  |
| MarketsView | GetMarketsItemsSortSearch |  | unknown |  |
| MarketsView | GetPlayer |  | unknown |  |
| MarketsView | IsLeftPanel |  | bool |  |
| MarketsView | IsRightPanel |  | bool |  |
| MarketsView | Self |  | MarketsView |  |
| MaskEntry | AccessSelf |  | MaskEntry |  |
| MaskEntry | GetKey |  | CString |  |
| MaskEntry | Self |  | MaskEntry |  |
| MaskManagerEntry | AccessSelf |  | MaskManagerEntry |  |
| MaskManagerEntry | GetKey |  | CString |  |
| MaskManagerEntry | IsLocked |  | bool |  |
| MaskManagerEntry | IsSelected |  | bool |  |
| MaskManagerEntry | Self |  | MaskManagerEntry |  |
| MaskManagerEntry | SetLocked | 1. unknown | void |  |
| MaskManagerEntry | SetSelected | 1. unknown | void |  |
| MaskPainterManager | AccessSelf |  | MaskPainterManager |  |
| MaskPainterManager | CanModify |  | bool |  |
| MaskPainterManager | ClearFilter |  | void |  |
| MaskPainterManager | GetFilter |  | CString |  |
| MaskPainterManager | GetSelectedMaskDesc |  | CString |  |
| MaskPainterManager | IsAnyMaskSelected |  | bool |  |
| MaskPainterManager | IsSelectedMaskTypeDeveloper |  | bool |  |
| MaskPainterManager | IsSelectedMaskTypeLocal |  | bool |  |
| MaskPainterManager | OnClear |  | void |  |
| MaskPainterManager | OnClone |  | void |  |
| MaskPainterManager | OnDelete |  | void |  |
| MaskPainterManager | OnNew |  | void |  |
| MaskPainterManager | OnRename |  | void |  |
| MaskPainterManager | Self |  | MaskPainterManager |  |
| MaskPainterManager | SetFilter |  | void |  |
| MaskPainterManager | SetSelectedMaskDesc |  | void |  |
| MaskPainterManager | ToggleMaskTypeDeveloper |  | void |  |
| MaskPainterManager | ToggleMaskTypeLocal |  | void |  |
| MaskPainterMapContentPanel | AccessSelf |  | MaskPainterMapContentPanel |  |
| MaskPainterMapContentPanel | Self |  | MaskPainterMapContentPanel |  |
| MaskPainterMode | AccessSelf |  | MaskPainterMode |  |
| MaskPainterMode | IsSelected |  | bool |  |
| MaskPainterMode | Self |  | MaskPainterMode |  |
| MaskPainterTool | AccessSelf |  | MaskPainterTool |  |
| MaskPainterTool | IsEraserMode |  | bool |  |
| MaskPainterTool | IsMapContentSelectionMode |  | bool |  |
| MaskPainterTool | IsPaintMode |  | bool |  |
| MaskPainterTool | Self |  | MaskPainterTool |  |
| MaskPainterTool | SetEraserMode |  | void |  |
| MaskPainterTool | SetMapContentSelectionMode | 1. unknown | void |  |
| MaskPainterTool | SetPaintMode |  | void |  |
| MaskPainterViewport | AccessSelf |  | MaskPainterViewport |  |
| MaskPainterViewport | Self |  | MaskPainterViewport |  |
| MaterialNodeWindow | AccessSelf |  | MaterialNodeWindow |  |
| MaterialNodeWindow | Self |  | MaterialNodeWindow |  |
| MemberTypeItem | AccessSelf |  | MemberTypeItem |  |
| MemberTypeItem | CanBeInvited |  | bool |  |
| MemberTypeItem | GetCountries |  | unknown |  |
| MemberTypeItem | GetIcon |  | unknown |  |
| MemberTypeItem | GetMembersAmount |  | CFixedPoint |  |
| MemberTypeItem | GetName |  | CString |  |
| MemberTypeItem | GetSpecialStatus |  | unknown |  |
| MemberTypeItem | IsAllMembers |  | bool |  |
| MemberTypeItem | Self |  | MemberTypeItem |  |
| Mercenary | AccessSelf |  | Mercenary |  |
| Mercenary | AllowExtend |  | bool |  |
| Mercenary | GetContractLengthInMonths |  | int32 |  |
| Mercenary | GetContractTooltip |  | CString |  |
| Mercenary | GetCustomer |  | unknown |  |
| Mercenary | GetHireCost | 1. unknown | CString |  |
| Mercenary | GetHiredTimeLeft |  | float |  |
| Mercenary | GetHomeLocation |  | unknown |  |
| Mercenary | GetLeader |  | unknown |  |
| Mercenary | GetMonthlyCostMultiplier |  | CFixedPoint |  |
| Mercenary | GetMonthlyMaintenanceCost | 1. unknown | CFixedPoint |  |
| Mercenary | GetMonthsLeftOnContract |  | int32 |  |
| Mercenary | GetName |  | CString |  |
| Mercenary | GetNameWithNoTooltip |  | CString |  |
| Mercenary | GetOwner |  | unknown |  |
| Mercenary | GetPercentLeftOnContract |  | float |  |
| Mercenary | GetSubUnitCounts |  | unknown |  |
| Mercenary | GetSubUnits |  | unknown |  |
| Mercenary | GetTimedModifierOwner |  | unknown |  |
| Mercenary | GetTimedModifiers |  | unknown |  |
| Mercenary | GetTransportCapacity |  | CString |  |
| Mercenary | GetUITooltip |  | CString |  |
| Mercenary | GetVisualStrength |  | CString |  |
| Mercenary | HasLeader |  | bool |  |
| Mercenary | IsAvailable |  | bool |  |
| Mercenary | IsEmployed |  | bool |  |
| Mercenary | IsShip |  | bool |  |
| Mercenary | MakeScope |  | Scope | Jomini Script System |
| Mercenary | Self |  | Mercenary |  |
| MercenaryItem | AccessSelf |  | MercenaryItem |  |
| MercenaryItem | GetCustomerTooltip |  | CString |  |
| MercenaryItem | GetLeftClickAndConfirmConditions |  | CString |  |
| MercenaryItem | GetLeftClickAndConfirmCost |  | CString |  |
| MercenaryItem | GetLeftClickAndConfirmDescription |  | CString |  |
| MercenaryItem | GetLeftClickAndConfirmTitle |  | CString |  |
| MercenaryItem | GetLeftClickConditions |  | CString |  |
| MercenaryItem | GetLeftClickCost |  | CString |  |
| MercenaryItem | GetLeftClickDescription |  | CString |  |
| MercenaryItem | GetLeftClickTitle |  | CString |  |
| MercenaryItem | GetMercenary |  | unknown |  |
| MercenaryItem | GetOwnerTooltip |  | CString |  |
| MercenaryItem | GetRightClickAndConfirmConditions |  | CString |  |
| MercenaryItem | GetRightClickAndConfirmCost |  | CString |  |
| MercenaryItem | GetRightClickAndConfirmDescription |  | CString |  |
| MercenaryItem | GetRightClickAndConfirmTitle |  | CString |  |
| MercenaryItem | IsLeftClickAndConfirmEnabled |  | bool |  |
| MercenaryItem | IsLeftClickAndConfirmVisible |  | bool |  |
| MercenaryItem | IsLeftClickEnabled |  | bool |  |
| MercenaryItem | IsLeftClickVisible |  | bool |  |
| MercenaryItem | IsRightClickAndConfirmEnabled |  | bool |  |
| MercenaryItem | IsRightClickAndConfirmVisible |  | bool |  |
| MercenaryItem | OnLeftClick |  | void |  |
| MercenaryItem | OnLeftClickAndConfirm |  | void |  |
| MercenaryItem | OnRightClickAndConfirm |  | void |  |
| MercenaryItem | Self |  | MercenaryItem |  |
| MercenaryModifierWrap | AccessSelf |  | MercenaryModifierWrap |  |
| MercenaryModifierWrap | GetIcon |  | unknown |  |
| MercenaryModifierWrap | GetName |  | CString |  |
| MercenaryModifierWrap | GetTooltip |  | CString |  |
| MercenaryModifierWrap | Self |  | MercenaryModifierWrap |  |
| MercenaryTypeItem | AccessSelf |  | MercenaryTypeItem |  |
| MercenaryTypeItem | GetMercenary |  | unknown |  |
| MercenaryTypeItem | GetUIAction |  | unknown |  |
| MercenaryTypeItem | Self |  | MercenaryTypeItem |  |
| Merchant | AccessSelf |  | Merchant |  |
| Merchant | GetCapacity |  | CString |  |
| Merchant | GetCapacityInfo |  | CString |  |
| Merchant | GetCapacityLong |  | CString |  |
| Merchant | GetCapacityWithLabel |  | CString |  |
| Merchant | GetCountry |  | unknown |  |
| Merchant | GetMarket |  | unknown |  |
| Merchant | GetPower |  | CFixedPoint |  |
| Merchant | GetPowerInfo |  | CString |  |
| Merchant | GetPowerWithLabel |  | CString |  |
| Merchant | GetTotalCapacity |  | CFixedPoint |  |
| Merchant | GetTotalTradeProfit |  | CFixedPoint |  |
| Merchant | GetUsedCapacity |  | CFixedPoint |  |
| Merchant | Self |  | Merchant |  |
| MerchantCapacityInMarketWrap | AccessSelf |  | MerchantCapacityInMarketWrap |  |
| MerchantCapacityInMarketWrap | GetCountry |  | unknown |  |
| MerchantCapacityInMarketWrap | GetMarket |  | unknown |  |
| MerchantCapacityInMarketWrap | GetName |  | CString |  |
| MerchantCapacityInMarketWrap | GetTooltip |  | CString |  |
| MerchantCapacityInMarketWrap | Self |  | MerchantCapacityInMarketWrap |  |
| MerchantPowerInMarketWrap | AccessSelf |  | MerchantPowerInMarketWrap |  |
| MerchantPowerInMarketWrap | GetCountry |  | unknown |  |
| MerchantPowerInMarketWrap | GetMarket |  | unknown |  |
| MerchantPowerInMarketWrap | GetName |  | CString |  |
| MerchantPowerInMarketWrap | GetTooltip |  | CString |  |
| MerchantPowerInMarketWrap | Self |  | MerchantPowerInMarketWrap |  |
| MeshImporter | AccessMaterialImportSettings |  | unknown |  |
| MeshImporter | AccessSelf |  | MeshImporter |  |
| MeshImporter | AccessUndoer |  | unknown |  |
| MeshImporter | EditShaderSets |  | void |  |
| MeshImporter | GetInputFileName |  | CString |  |
| MeshImporter | GetLogEntryCountCritical |  | int32 |  |
| MeshImporter | GetLogEntryCountError |  | int32 |  |
| MeshImporter | GetLogEntryCountInfo |  | int32 |  |
| MeshImporter | GetLogEntryCountWarning |  | int32 |  |
| MeshImporter | GetSettingsFileName |  | CString |  |
| MeshImporter | ImportCurrentlySelected |  | void |  |
| MeshImporter | IsAutoSaveOnImport |  | bool |  |
| MeshImporter | IsBrowserViewOpen |  | bool |  |
| MeshImporter | IsLogViewOpen |  | bool |  |
| MeshImporter | IsMeshLodded |  | bool |  |
| MeshImporter | IsSettingsDifferentThanDiskFile |  | bool |  |
| MeshImporter | IsSettingsDiskFileExist |  | bool |  |
| MeshImporter | SaveSettings |  | void |  |
| MeshImporter | Self |  | MeshImporter |  |
| MeshImporter | ToggleAutoSaveOnImport |  | void |  |
| MeshImporter | ToggleBrowserView |  | void |  |
| MeshImporter | ToggleLogView |  | void |  |
| MeshImporterBrowser | AccessSelf |  | MeshImporterBrowser |  |
| MeshImporterBrowser | ClearQueue |  | void |  |
| MeshImporterBrowser | DeselectAllFiles |  | void |  |
| MeshImporterBrowser | GetAllFiles |  | unknown |  |
| MeshImporterBrowser | GetQueuedFiles |  | unknown |  |
| MeshImporterBrowser | ImportAllInQueue |  | void |  |
| MeshImporterBrowser | ReloadAllFiles |  | void |  |
| MeshImporterBrowser | SelectAllFiles |  | void |  |
| MeshImporterBrowser | Self |  | MeshImporterBrowser |  |
| MeshImporterBrowserEntry | AccessSelf |  | MeshImporterBrowserEntry |  |
| MeshImporterBrowserEntry | GetFileDescription |  | CString |  |
| MeshImporterBrowserEntry | GetFileName |  | unknown |  |
| MeshImporterBrowserEntry | GetFullPath |  | unknown |  |
| MeshImporterBrowserEntry | IsInQueue |  | bool |  |
| MeshImporterBrowserEntry | IsSelected |  | bool |  |
| MeshImporterBrowserEntry | IsSettingsDifferentThanDiskFile |  | bool |  |
| MeshImporterBrowserEntry | IsSettingsDiskFileExist |  | bool |  |
| MeshImporterBrowserEntry | Self |  | MeshImporterBrowserEntry |  |
| MeshImporterBrowserEntry | ToggleQueue |  | void |  |
| MeshImporterBrowserEntry | ToggleSelect |  | void |  |
| MeshImporterMaterialEntry | AccessSelf |  | MeshImporterMaterialEntry |  |
| MeshImporterMaterialEntry | GetDetailsDescription |  | CString |  |
| MeshImporterMaterialEntry | GetMaterialIndex |  | int32 |  |
| MeshImporterMaterialEntry | GetName |  | CString |  |
| MeshImporterMaterialEntry | GetNumberGeometriesUsingMaterial |  | int32 |  |
| MeshImporterMaterialEntry | InjectPropertyList | 1. unknown 2. unknown | void |  |
| MeshImporterMaterialEntry | IsCollision |  | bool |  |
| MeshImporterMaterialEntry | Self |  | MeshImporterMaterialEntry |  |
| MeshImporterMaterialEntry | ToggleCollision |  | void |  |
| MeshImporterMaterials | AccessMaterialEntries |  | unknown |  |
| MeshImporterMaterials | AccessSelf |  | MeshImporterMaterials |  |
| MeshImporterMaterials | GetMaterialEntries |  | unknown |  |
| MeshImporterMaterials | Self |  | MeshImporterMaterials |  |
| MessageLog | AccessSelf |  | MessageLog |  |
| MessageLog | Collapse |  | void |  |
| MessageLog | Expand |  | void |  |
| MessageLog | GetMessages |  | unknown |  |
| MessageLog | GetTooltip |  | CString |  |
| MessageLog | IsExpanded |  | bool |  |
| MessageLog | OnClose |  | void |  |
| MessageLog | Self |  | MessageLog |  |
| MessageLog | Toggle |  | void |  |
| MessageMenuItem | AccessSelf |  | MessageMenuItem |  |
| MessageMenuItem | GetBgCategoryIcon |  | unknown |  |
| MessageMenuItem | GetCategoryIcon |  | unknown |  |
| MessageMenuItem | GetCategoryName |  | CString |  |
| MessageMenuItem | GetLog |  | bool |  |
| MessageMenuItem | GetPause |  | bool |  |
| MessageMenuItem | GetPopup |  | bool |  |
| MessageMenuItem | GetShowOnMap |  | bool |  |
| MessageMenuItem | GetText |  | CString |  |
| MessageMenuItem | Self |  | MessageMenuItem |  |
| MessageMenuItem | SetLog | 1. unknown | void |  |
| MessageMenuItem | SetPause | 1. unknown | void |  |
| MessageMenuItem | SetPopup | 1. unknown | void |  |
| MessageMenuItem | SetShowOnMap | 1. unknown | void |  |
| MessagePopup | AccessSelf |  | MessagePopup |  |
| MessagePopup | CanGoTo |  | bool |  |
| MessagePopup | GetAgreeText |  | CString |  |
| MessagePopup | GetDeclineText |  | CString |  |
| MessagePopup | GetDescription |  | CString |  |
| MessagePopup | GetEffect |  | CString |  |
| MessagePopup | GetFlavor |  | CString |  |
| MessagePopup | GetSubtitle |  | CString |  |
| MessagePopup | GetTitle |  | CString |  |
| MessagePopup | HasDescription |  | bool |  |
| MessagePopup | HasEffect |  | bool |  |
| MessagePopup | HasFlavor |  | bool |  |
| MessagePopup | HasSubtitle |  | bool |  |
| MessagePopup | HasTitle |  | bool |  |
| MessagePopup | OnAccept |  | void |  |
| MessagePopup | OnDecline |  | void |  |
| MessagePopup | OnGoTo |  | void |  |
| MessagePopup | OpenMessagePopup |  | void |  |
| MessagePopup | Self |  | MessagePopup |  |
| MessageSettingItem | AccessSelf |  | MessageSettingItem |  |
| MessageSettingItem | GetText |  | CString |  |
| MessageSettingItem | IsChecked |  | bool |  |
| MessageSettingItem | OnCheck | 1. unknown | void |  |
| MessageSettingItem | Self |  | MessageSettingItem |  |
| MessageSettings | AccessSelf |  | MessageSettings |  |
| MessageSettings | Close |  | void |  |
| MessageSettings | GetItems |  | unknown |  |
| MessageSettings | GetTitle |  | CString |  |
| MessageSettings | Save |  | void |  |
| MessageSettings | Self |  | MessageSettings |  |
| MessageSettingsMenu | AccessSelf |  | MessageSettingsMenu |  |
| MessageSettingsMenu | Close |  | void |  |
| MessageSettingsMenu | GetBgCategoryIcon | 1. unknown | unknown |  |
| MessageSettingsMenu | GetDiplomacyItems |  | unknown |  |
| MessageSettingsMenu | GetEconomyItems |  | unknown |  |
| MessageSettingsMenu | GetGeopoliticsItems |  | unknown |  |
| MessageSettingsMenu | GetGovernmentItems |  | unknown |  |
| MessageSettingsMenu | GetItems |  | unknown |  |
| MessageSettingsMenu | GetMilitaryItems |  | unknown |  |
| MessageSettingsMenu | GetSocietyItems |  | unknown |  |
| MessageSettingsMenu | GetWarsItems |  | unknown |  |
| MessageSettingsMenu | IsCategoryDiplomacyOpen |  | bool |  |
| MessageSettingsMenu | IsCategoryEconomyOpen |  | bool |  |
| MessageSettingsMenu | IsCategoryGeopoliticsOpen |  | bool |  |
| MessageSettingsMenu | IsCategoryGovernmentOpen |  | bool |  |
| MessageSettingsMenu | IsCategoryMilitaryOpen |  | bool |  |
| MessageSettingsMenu | IsCategorySocietyOpen |  | bool |  |
| MessageSettingsMenu | IsCategoryWarsOpen |  | bool |  |
| MessageSettingsMenu | OnClickCategory | 1. unknown | void |  |
| MessageSettingsMenu | Reset |  | void |  |
| MessageSettingsMenu | Save |  | void |  |
| MessageSettingsMenu | Self |  | MessageSettingsMenu |  |
| MessageSettingsMenu | UpdateFilter |  | void |  |
| MetadataWindow | AccessSelf |  | MetadataWindow |  |
| MetadataWindow | Close |  | void |  |
| MetadataWindow | GetTitle |  | CString |  |
| MetadataWindow | IsOpen |  | bool |  |
| MetadataWindow | IsSelectedAnyNode |  | bool |  |
| MetadataWindow | Open |  | void |  |
| MetadataWindow | Self |  | MetadataWindow |  |
| MetadataWindow | Toggle |  | void |  |
| Migration | AccessSelf |  | Migration |  |
| Migration | GetAmount |  | CFixedPoint |  |
| Migration | GetCulture |  | unknown |  |
| Migration | GetFrom |  | unknown |  |
| Migration | GetFromLocation |  | unknown |  |
| Migration | GetMonths |  | int32 |  |
| Migration | GetName |  | CString |  |
| Migration | GetNameWithNoTooltip |  | CString |  |
| Migration | GetPopSize |  | CString |  |
| Migration | GetPopType |  | unknown |  |
| Migration | GetReligion |  | unknown |  |
| Migration | GetTo |  | unknown |  |
| Migration | GetToLocation |  | unknown |  |
| Migration | GetUITooltip |  | CString |  |
| Migration | Self |  | Migration |  |
| MilitaryObjective | AccessSelf |  | MilitaryObjective |  |
| MilitaryObjective | GetAction |  | CString |  |
| MilitaryObjective | GetDebugString |  | CString |  |
| MilitaryObjective | GetInfo |  | CString |  |
| MilitaryObjective | GetName |  | CString |  |
| MilitaryObjective | GetSpecialOptions |  | unknown |  |
| MilitaryObjective | GetTooltip |  | CString |  |
| MilitaryObjective | GetType |  | unknown |  |
| MilitaryObjective | GetTypeKey |  | CString |  |
| MilitaryObjective | GivesExperience |  | bool |  |
| MilitaryObjective | IsInitialized | 1. unknown | bool |  |
| MilitaryObjective | Self |  | MilitaryObjective |  |
| MilitaryObjective | UsesArmies |  | bool |  |
| MilitaryObjective | UsesMapSelection |  | bool |  |
| MilitaryObjective | UsesNavies |  | bool |  |
| MilitaryObjective | UsesSpecialOptions |  | bool |  |
| MilitaryObjectiveGroupView | AccessSelf |  | MilitaryObjectiveGroupView |  |
| MilitaryObjectiveGroupView | CanSave |  | bool |  |
| MilitaryObjectiveGroupView | CurrentObjectIsValid |  | bool |  |
| MilitaryObjectiveGroupView | GetArmies |  | unknown |  |
| MilitaryObjectiveGroupView | GetCanSaveInfo |  | CString |  |
| MilitaryObjectiveGroupView | GetChangedUnits |  | unknown |  |
| MilitaryObjectiveGroupView | GetCommitAction |  | unknown |  |
| MilitaryObjectiveGroupView | GetGeography |  | unknown |  |
| MilitaryObjectiveGroupView | GetNavies |  | unknown |  |
| MilitaryObjectiveGroupView | GetSelectionTitle |  | CString |  |
| MilitaryObjectiveGroupView | GetSpecialOptions |  | unknown |  |
| MilitaryObjectiveGroupView | GetTargetPlaces |  | unknown |  |
| MilitaryObjectiveGroupView | GetTopLeftText |  | CString |  |
| MilitaryObjectiveGroupView | GetTopLeftTitle |  | CString |  |
| MilitaryObjectiveGroupView | GetTopRightText |  | CString |  |
| MilitaryObjectiveGroupView | GetTopRightTitle |  | CString |  |
| MilitaryObjectiveGroupView | HasChanged |  | bool |  |
| MilitaryObjectiveGroupView | HasTargetPlaces |  | bool |  |
| MilitaryObjectiveGroupView | IsAreaHighlighted | 1. unknown | bool |  |
| MilitaryObjectiveGroupView | IsGeographyEmpty |  | bool |  |
| MilitaryObjectiveGroupView | IsLocationHighlighted | 1. unknown | bool |  |
| MilitaryObjectiveGroupView | IsProvinceDefinitionHighlighted | 1. unknown | bool |  |
| MilitaryObjectiveGroupView | IsProvinceHighlighted | 1. unknown | bool |  |
| MilitaryObjectiveGroupView | IsRegionHighlighted | 1. unknown | bool |  |
| MilitaryObjectiveGroupView | SaveChanges |  | void |  |
| MilitaryObjectiveGroupView | Self |  | MilitaryObjectiveGroupView |  |
| MilitaryObjectiveGroupsView | AccessSelf |  | MilitaryObjectiveGroupsView |  |
| MilitaryObjectiveGroupsView | AddFilterUnitsToGroup | 1. unknown | void |  |
| MilitaryObjectiveGroupsView | AddUnitToGroup | 1. unknown 2. unknown | void |  |
| MilitaryObjectiveGroupsView | CanAddNew | 1. unknown | bool |  |
| MilitaryObjectiveGroupsView | DeleteTacticalObjectiveGroup | 1. unknown | void |  |
| MilitaryObjectiveGroupsView | GetChangedUnits |  | unknown |  |
| MilitaryObjectiveGroupsView | GetDefendHomeTerritoryUIAction |  | unknown |  |
| MilitaryObjectiveGroupsView | GetDefendingHomeTerritoryButtonLabel |  | CString |  |
| MilitaryObjectiveGroupsView | GetDefendingHomeTerritoryTooltip |  | CString |  |
| MilitaryObjectiveGroupsView | GetFilterUnits |  | unknown |  |
| MilitaryObjectiveGroupsView | GetObjectiveTypes |  | unknown |  |
| MilitaryObjectiveGroupsView | GetPlayer |  | unknown |  |
| MilitaryObjectiveGroupsView | GetRepatriateTroopsUIAction |  | unknown |  |
| MilitaryObjectiveGroupsView | GetRepatriatingButtonLabel |  | CString |  |
| MilitaryObjectiveGroupsView | GetRepatriatingTooltip |  | CString |  |
| MilitaryObjectiveGroupsView | GroupContainsAllFilterUnits | 1. unknown | bool |  |
| MilitaryObjectiveGroupsView | HasUnitFilter |  | bool |  |
| MilitaryObjectiveGroupsView | IsLeftPanel |  | bool |  |
| MilitaryObjectiveGroupsView | IsRightPanel |  | bool |  |
| MilitaryObjectiveGroupsView | RemoveFilterUnitsFromGroup | 1. unknown | void |  |
| MilitaryObjectiveGroupsView | RemoveUnitFromGroup | 1. unknown 2. unknown | void |  |
| MilitaryObjectiveGroupsView | SelectObjectiveGroup | 1. unknown | void |  |
| MilitaryObjectiveGroupsView | Self |  | MilitaryObjectiveGroupsView |  |
| MissingGoods | AccessSelf |  | MissingGoods |  |
| MissingGoods | GetEntries |  | unknown |  |
| MissingGoods | Self |  | MissingGoods |  |
| MissingGoodsOnMarketImpactWrap | AccessSelf |  | MissingGoodsOnMarketImpactWrap |  |
| MissingGoodsOnMarketImpactWrap | GetName |  | CString |  |
| MissingGoodsOnMarketImpactWrap | GetTooltip |  | CString |  |
| MissingGoodsOnMarketImpactWrap | Self |  | MissingGoodsOnMarketImpactWrap |  |
| MissionAlert | AccessSelf |  | MissionAlert |  |
| MissionAlert | GetConditions |  | CString |  |
| MissionAlert | GetDuration |  | CString |  |
| MissionAlert | GetMissionStartDescription |  | CString |  |
| MissionAlert | GetName |  | CString |  |
| MissionAlert | GetProgress |  | float |  |
| MissionAlert | GetRewards |  | CString |  |
| MissionAlert | GetStartEffect |  | CString |  |
| MissionAlert | GetTask |  | unknown |  |
| MissionAlert | GetTooltip |  | CString |  |
| MissionAlert | Hide |  | void |  |
| MissionAlert | IsEnabled |  | bool |  |
| MissionAlert | IsInProgress |  | bool |  |
| MissionAlert | IsInstant |  | bool |  |
| MissionAlert | IsMissionStartEnabled |  | bool |  |
| MissionAlert | OnMissionStartClick |  | void |  |
| MissionAlert | Self |  | MissionAlert |  |
| MissionDefinition | AccessSelf |  | MissionDefinition |  |
| MissionDefinition | GetButtonDetails |  | CString |  |
| MissionDefinition | GetCompletionCriteriaDescription |  | CString |  |
| MissionDefinition | GetDesc |  | CString |  |
| MissionDefinition | GetDescription |  | CString |  |
| MissionDefinition | GetFinalTaskRewardsDescription |  | CString |  |
| MissionDefinition | GetName |  | CString |  |
| MissionDefinition | GetNameWithNoTooltip |  | CString |  |
| MissionDefinition | GetProgress | 1. unknown | CFixedPoint |  |
| MissionDefinition | GetRewardsDescription |  | CString |  |
| MissionDefinition | GetTitle |  | CString |  |
| MissionDefinition | IsFromPlayStyle | 1. unknown | bool |  |
| MissionDefinition | IsInProgress |  | bool |  |
| MissionDefinition | MakeScope |  | Scope | Jomini Script System |
| MissionDefinition | Self |  | MissionDefinition |  |
| MissionItem | AccessSelf |  | MissionItem |  |
| MissionItem | GetAbortTooltip |  | CString |  |
| MissionItem | GetButtonDetails |  | CString |  |
| MissionItem | GetCompleteTooltip |  | CString |  |
| MissionItem | GetCompletionCriteriaDescription |  | CString |  |
| MissionItem | GetDescription |  | CString |  |
| MissionItem | GetFinalTaskRewardsDescription |  | CString |  |
| MissionItem | GetImage |  | unknown |  |
| MissionItem | GetImageTooltip |  | CString |  |
| MissionItem | GetMission |  | unknown |  |
| MissionItem | GetProgress |  | float |  |
| MissionItem | GetProgressTooltip |  | CString |  |
| MissionItem | GetRewardsDescription |  | CString |  |
| MissionItem | GetStartMissionTooltip |  | CString |  |
| MissionItem | GetStartTooltip |  | CString |  |
| MissionItem | GetTitle |  | CString |  |
| MissionItem | IsCompleteAllowed |  | bool |  |
| MissionItem | IsCompleted |  | bool |  |
| MissionItem | IsInProgress |  | bool |  |
| MissionItem | IsPlayerPlayStyle | 1. unknown | bool |  |
| MissionItem | IsStartAllowed |  | bool |  |
| MissionItem | OnComplete |  | void |  |
| MissionItem | Self |  | MissionItem |  |
| MissionItem | StartMission |  | void |  |
| MissionItem | StartMissionNeedsConfirmation |  | bool |  |
| MissionLateralView | AccessSelf |  | MissionLateralView |  |
| MissionLateralView | GetActiveMission |  | unknown |  |
| MissionLateralView | GetAvailableMissions |  | unknown |  |
| MissionLateralView | GetMissionTaskItems |  | unknown |  |
| MissionLateralView | GetPlayer |  | unknown |  |
| MissionLateralView | HasActiveMission |  | bool |  |
| MissionLateralView | HasAvailableMission |  | bool |  |
| MissionLateralView | IsLeftPanel |  | bool |  |
| MissionLateralView | IsRightPanel |  | bool |  |
| MissionLateralView | Self |  | MissionLateralView |  |
| MissionLineItem | AccessSelf |  | MissionLineItem |  |
| MissionLineItem | GetFrom |  | CVector2f |  |
| MissionLineItem | GetLineFrom |  | CVector2f |  |
| MissionLineItem | GetLineTo |  | CVector2f |  |
| MissionLineItem | GetPoints |  | unknown |  |
| MissionLineItem | GetPointsInContainer |  | unknown |  |
| MissionLineItem | GetPosition |  | CVector2f |  |
| MissionLineItem | GetSize |  | CVector2f |  |
| MissionLineItem | GetTo |  | CVector2f |  |
| MissionLineItem | IsCompleted |  | bool |  |
| MissionLineItem | IsFromNodeVirtual |  | bool |  |
| MissionLineItem | IsToNodeVirtual |  | bool |  |
| MissionLineItem | Self |  | MissionLineItem |  |
| MissionMessage | AccessSelf |  | MissionMessage |  |
| MissionMessage | GetMission |  | unknown |  |
| MissionMessage | Self |  | MissionMessage |  |
| MissionProgress | AccessSelf |  | MissionProgress |  |
| MissionProgress | GetActiveMission |  | unknown |  |
| MissionProgress | GetCurrentMissionTask |  | unknown |  |
| MissionProgress | GetUIInfo |  | CString |  |
| MissionProgress | HasActiveMission |  | bool |  |
| MissionProgress | IsMissionCompleted | 1. unknown | bool |  |
| MissionProgress | IsMissionTaskCompleted | 1. unknown | bool |  |
| MissionProgress | Self |  | MissionProgress |  |
| MissionTaskDefinition | AccessSelf |  | MissionTaskDefinition |  |
| MissionTaskDefinition | GetDesc |  | CString |  |
| MissionTaskDefinition | GetMission |  | unknown |  |
| MissionTaskDefinition | GetName |  | CString |  |
| MissionTaskDefinition | GetNameWithNoTooltip |  | CString |  |
| MissionTaskDefinition | GetTip |  | CString |  |
| MissionTaskDefinition | HasTip |  | bool |  |
| MissionTaskDefinition | IsFinal |  | bool |  |
| MissionTaskDefinition | MakeScope |  | Scope | Jomini Script System |
| MissionTaskDefinition | Self |  | MissionTaskDefinition |  |
| MissionTaskItem | AccessSelf |  | MissionTaskItem |  |
| MissionTaskItem | AreDependenciesCompleted |  | bool |  |
| MissionTaskItem | GetConditions |  | CString |  |
| MissionTaskItem | GetDebugText |  | CString |  |
| MissionTaskItem | GetDuration |  | CString |  |
| MissionTaskItem | GetKey |  | CString |  |
| MissionTaskItem | GetMutuallyExclusiveTooltip |  | CString |  |
| MissionTaskItem | GetPosition |  | CVector2f |  |
| MissionTaskItem | GetProgress |  | float |  |
| MissionTaskItem | GetProgressTooltip |  | CString |  |
| MissionTaskItem | GetRewards |  | CString |  |
| MissionTaskItem | GetStartEffect |  | CString |  |
| MissionTaskItem | GetTask |  | unknown |  |
| MissionTaskItem | GetText |  | CString |  |
| MissionTaskItem | GetTooltip |  | CString |  |
| MissionTaskItem | HasDependencies |  | bool |  |
| MissionTaskItem | IsBypassed |  | bool |  |
| MissionTaskItem | IsCompleted |  | bool |  |
| MissionTaskItem | IsFinal |  | bool |  |
| MissionTaskItem | IsInProgress |  | bool |  |
| MissionTaskItem | IsInstant |  | bool |  |
| MissionTaskItem | IsMutuallyExclusive |  | bool |  |
| MissionTaskItem | IsPossible |  | bool |  |
| MissionTaskItem | IsPreventedBy |  | bool |  |
| MissionTaskItem | IsPreventedByHighlightedTask |  | bool |  |
| MissionTaskItem | OnClick |  | void |  |
| MissionTaskItem | OnMouseEnter | 1. unknown | void |  |
| MissionTaskItem | OnMouseLeave | 1. unknown | void |  |
| MissionTaskItem | Self |  | MissionTaskItem |  |
| MissionTaskMessage | AccessSelf |  | MissionTaskMessage |  |
| MissionTaskMessage | GetMissionTask |  | unknown |  |
| MissionTaskMessage | Self |  | MissionTaskMessage |  |
| MissionTasksLateralView | AccessSelf |  | MissionTasksLateralView |  |
| MissionTasksLateralView | GetLineItems |  | unknown |  |
| MissionTasksLateralView | GetMissionItem |  | unknown |  |
| MissionTasksLateralView | GetPlayer |  | unknown |  |
| MissionTasksLateralView | GetTaskItems |  | unknown |  |
| MissionTasksLateralView | IsLeftPanel |  | bool |  |
| MissionTasksLateralView | IsMissionVisible |  | bool |  |
| MissionTasksLateralView | IsRightPanel |  | bool |  |
| MissionTasksLateralView | Self |  | MissionTasksLateralView |  |
| MissionTasksLateralView | SetupDataContexts | 1. unknown | CString |  |
| ModToolItem | AccessSelf |  | ModToolItem |  |
| ModToolItem | Description |  | unknown |  |
| ModToolItem | ImagePath |  | unknown |  |
| ModToolItem | IsInstalled |  | unknown |  |
| ModToolItem | IsUploaded |  | unknown |  |
| ModToolItem | Name |  | unknown |  |
| ModToolItem | Path |  | unknown |  |
| ModToolItem | Self |  | ModToolItem |  |
| ModToolsGui | AccessSelf |  | ModToolsGui |  |
| ModToolsGui | ChangeFolder |  | void |  |
| ModToolsGui | Close |  | void |  |
| ModToolsGui | CloseUploadingDialog |  | void |  |
| ModToolsGui | CreateStubMod |  | void |  |
| ModToolsGui | CurrentDataModel |  | unknown |  |
| ModToolsGui | Delete |  | void |  |
| ModToolsGui | GetAppVersion |  | unknown |  |
| ModToolsGui | GetDropdownValueIndex |  | CVector2i |  |
| ModToolsGui | GetRelativePathPrefix |  | CUTF8String |  |
| ModToolsGui | HasAbsolutePath |  | bool |  |
| ModToolsGui | HasLatestOperationResult |  | bool |  |
| ModToolsGui | HasPathToMod |  | bool |  |
| ModToolsGui | HasPathToValidModFolder |  | bool |  |
| ModToolsGui | HasRequiredFieldsFilledIn |  | bool |  |
| ModToolsGui | IsItemBeingUploaded |  | bool |  |
| ModToolsGui | IsModBackendReady |  | bool |  |
| ModToolsGui | IsModDescVerified |  | bool |  |
| ModToolsGui | IsModNameVerified |  | bool |  |
| ModToolsGui | IsModPathVerified |  | bool |  |
| ModToolsGui | IsUploadingDialogOpen |  | bool |  |
| ModToolsGui | LatestOperationResult |  | CString |  |
| ModToolsGui | ModDescVerificationText |  | unknown |  |
| ModToolsGui | ModNameVerificationText |  | unknown |  |
| ModToolsGui | ModPathVerificationText |  | unknown |  |
| ModToolsGui | OnNewModDesc |  | void |  |
| ModToolsGui | OnNewModName |  | void |  |
| ModToolsGui | OnNewModPath |  | void |  |
| ModToolsGui | OpenCommunityHub |  | void |  |
| ModToolsGui | OpenCurrentItemFolder |  | void |  |
| ModToolsGui | OpenPage |  | void |  |
| ModToolsGui | OpenUploadingDialog |  | void |  |
| ModToolsGui | QueriedItems |  | unknown |  |
| ModToolsGui | RecalculateRequiredFieldsFilledIn |  | void |  |
| ModToolsGui | Refresh |  | void |  |
| ModToolsGui | SelectTab | 1. unknown | void |  |
| ModToolsGui | SelectedDesc |  | unknown |  |
| ModToolsGui | SelectedImagePath |  | unknown |  |
| ModToolsGui | SelectedIsInstalled |  | bool |  |
| ModToolsGui | SelectedIsInstalledString |  | unknown |  |
| ModToolsGui | SelectedIsSubscribed |  | bool |  |
| ModToolsGui | SelectedIsUploaded |  | unknown |  |
| ModToolsGui | SelectedName |  | unknown |  |
| ModToolsGui | SelectedPath |  | unknown |  |
| ModToolsGui | Self |  | ModToolsGui |  |
| ModToolsGui | SetDropdownValueIndex |  | void |  |
| ModToolsGui | Subscribe |  | void |  |
| ModToolsGui | Tags |  | unknown |  |
| ModToolsGui | Unsubscribe |  | void |  |
| ModToolsGui | Update |  | void |  |
| ModToolsGui | UploadFromFolder |  | void |  |
| ModToolsGui | UploadNewMod |  | void |  |
| ModToolsGui | UserItems |  | unknown |  |
| ModToolsGui | VerifyModDesc |  | void |  |
| ModToolsGui | VerifyModName |  | void |  |
| ModToolsGui | VerifyModPath |  | void |  |
| ModifierDebugData | AccessSelf |  | ModifierDebugData |  |
| ModifierDebugData | GetModifiers |  | CString |  |
| ModifierDebugData | Self |  | ModifierDebugData |  |
| ModifierDebugInspectorPlugin | AccessSelf |  | ModifierDebugInspectorPlugin |  |
| ModifierDebugInspectorPlugin | Self |  | ModifierDebugInspectorPlugin |  |
| ModifierItem | AccessSelf |  | ModifierItem |  |
| ModifierItem | GetName |  | CString |  |
| ModifierItem | GetValue |  | CString |  |
| ModifierItem | Self |  | ModifierItem |  |
| ModifierSourceWrap | AccessSelf |  | ModifierSourceWrap |  |
| ModifierSourceWrap | GetBreakdown |  | CString |  |
| ModifierSourceWrap | GetModifierType |  | unknown |  |
| ModifierSourceWrap | GetScalingBreakdown |  | CString |  |
| ModifierSourceWrap | Self |  | ModifierSourceWrap |  |
| ModifierType | AccessSelf |  | ModifierType |  |
| ModifierType | GetDesc |  | CString |  |
| ModifierType | GetFlavorDesc |  | CString |  |
| ModifierType | GetIcon |  | unknown |  |
| ModifierType | GetName |  | CString |  |
| ModifierType | GetNameWithNoTooltip |  | CString |  |
| ModifierType | Self |  | ModifierType |  |
| ModsGui | AccessSelf |  | ModsGui |  |
| ModsGui | ApplyChanges |  | bool | Saves the current changes to disk. |
| ModsGui | ApplyText |  | CString |  |
| ModsGui | ApplyTooltip |  | CString |  |
| ModsGui | AreAllDLCsToggled |  | bool |  |
| ModsGui | AreAllModsToggled |  | bool |  |
| ModsGui | BrowseModsTooltip |  | CString |  |
| ModsGui | CanApply |  | bool |  |
| ModsGui | CanBrowseMods |  | bool |  |
| ModsGui | CanCreatePlayset | 1. unknown | bool |  |
| ModsGui | ClearActivePlayset |  | void |  |
| ModsGui | ClearSearchString |  | void |  |
| ModsGui | ClearSelectedPlayset |  | void |  |
| ModsGui | Close |  | void |  |
| ModsGui | CreateMod | 1. unknown | void | Create a new empty mod in the user mod directory. |
| ModsGui | CreatePlayset | 1. unknown | void |  |
| ModsGui | CreatePlaysetTooltip | 1. unknown | CString |  |
| ModsGui | DeletePlayset | 1. unknown | bool |  |
| ModsGui | DownloadAndApplyChanges |  | void | Syncs pending data and saves the current changes to disk. |
| ModsGui | ErrorString |  | CString |  |
| ModsGui | FilteredLocalMods |  | unknown |  |
| ModsGui | FilteredNonDownloadedMods |  | unknown |  |
| ModsGui | GetActivePlaysetDropdownIndex |  | CVector2i | Gets array index for the active playset. |
| ModsGui | GetActivePlaysetName |  | CString | Gets array index for the active playset. |
| ModsGui | HasError |  | bool |  |
| ModsGui | HasExternalInterface |  | bool | Returns true if the mods backend has an external interface (e.g. steam overlay). |
| ModsGui | HasGeneralError |  | bool |  |
| ModsGui | HasModError |  | bool |  |
| ModsGui | HasPlaysetError |  | bool |  |
| ModsGui | InteractionsAllowed |  | bool |  |
| ModsGui | IsOpen |  | bool |  |
| ModsGui | IsPlaysetActive | 1. unknown | bool |  |
| ModsGui | IsPlaysetApplied | 1. unknown | bool |  |
| ModsGui | IsRefreshModsAffectingChecksumAvailable |  | bool |  |
| ModsGui | IsSearchingMods |  | bool |  |
| ModsGui | IsValid |  | bool |  |
| ModsGui | LocalMods |  | unknown |  |
| ModsGui | LocalizedError |  | CString |  |
| ModsGui | ModWithError |  | int32 |  |
| ModsGui | ModifiablePlaysets |  | unknown |  |
| ModsGui | NonDownloadedMods |  | unknown |  |
| ModsGui | OpenExternalInterface |  | void | Open the external interface for mods (e.g. steam overlay). |
| ModsGui | PlaysetWithError |  | int32 |  |
| ModsGui | Playsets |  | unknown |  |
| ModsGui | Progress |  | float |  |
| ModsGui | RefreshModsAffectingChecksum |  | void |  |
| ModsGui | ResyncLocalMods |  | void | Full Resync of mods present on disk. All local changes made since the last call to ApplyChanges are lost. |
| ModsGui | SavePlayset |  | void | Saves the current changed data in the playsets to disk. |
| ModsGui | SearchString |  | CUTF8String |  |
| ModsGui | SelectedPlaysetId |  | int32 |  |
| ModsGui | Self |  | ModsGui |  |
| ModsGui | SetActivePlaysetId | 1. unknown | void |  |
| ModsGui | SetSearchString |  | void |  |
| ModsGui | SetSelectedPlaysetId | 1. unknown | void |  |
| ModsGui | StartSearchingForMods |  | void |  |
| ModsGui | StartSearchingModsWithText |  | void |  |
| ModsGui | ToggleAllDLCs |  | void |  |
| ModsGui | ToggleAllMods |  | void |  |
| ModsGui | UpdateModOnBackend | 1. unknown | bool |  |
| ModsGui | UploadModToBackend | 1. unknown | bool |  |
| ModsPlayset | AccessSelf |  | ModsPlayset |  |
| ModsPlayset | AddMod | 1. unknown | void |  |
| ModsPlayset | CanRemove |  | bool |  |
| ModsPlayset | ContainsMod | 1. unknown | bool |  |
| ModsPlayset | DlcCount |  | int32 |  |
| ModsPlayset | Dlcs |  | unknown |  |
| ModsPlayset | GetActiveDlcCount |  | int32 |  |
| ModsPlayset | GetDLCIssuesDesc |  | CString |  |
| ModsPlayset | GetModsAffectingChecksum |  | CString |  |
| ModsPlayset | GetModsCount |  | int32 |  |
| ModsPlayset | HasDLCIssues |  | bool |  |
| ModsPlayset | HasMod | 1. unknown | bool |  |
| ModsPlayset | Id |  | int32 |  |
| ModsPlayset | IsAffectingChecksum |  | bool |  |
| ModsPlayset | IsAutomaticallySorted |  | bool |  |
| ModsPlayset | IsChecksumCompatibilityCalculated |  | bool |  |
| ModsPlayset | IsEditable |  | bool |  |
| ModsPlayset | ModifiableMods |  | unknown |  |
| ModsPlayset | Mods |  | unknown |  |
| ModsPlayset | Name |  | CString |  |
| ModsPlayset | RemoveMod | 1. unknown | void |  |
| ModsPlayset | Rename |  | bool |  |
| ModsPlayset | ReorderDependencies |  | void |  |
| ModsPlayset | Self |  | ModsPlayset |  |
| ModsPlayset | ToggleIsAutomaticallySorted |  | void |  |
| ModsPlaysetEntry | AccessSelf |  | ModsPlaysetEntry |  |
| ModsPlaysetEntry | DependenciesString |  | CString |  |
| ModsPlaysetEntry | Description |  | CString |  |
| ModsPlaysetEntry | GetDependencyList |  | unknown |  |
| ModsPlaysetEntry | GetDisplayImage |  | unknown |  |
| ModsPlaysetEntry | GetFilesAffectingChecksum |  | CString |  |
| ModsPlaysetEntry | GetLoadOrder |  | uint32 |  |
| ModsPlaysetEntry | Id |  | int32 |  |
| ModsPlaysetEntry | IsAffectingChecksum |  | bool |  |
| ModsPlaysetEntry | IsChecksumCompatibilityCalculated |  | bool |  |
| ModsPlaysetEntry | MoveLoadOrderDown |  | void |  |
| ModsPlaysetEntry | MoveLoadOrderUp |  | void |  |
| ModsPlaysetEntry | Name |  | CString |  |
| ModsPlaysetEntry | OpenInFolder |  | void |  |
| ModsPlaysetEntry | Self |  | ModsPlaysetEntry |  |
| ModsPlaysetEntry | SetLoadOrder | 1. unknown | void |  |
| ModsPlaysetEntry | SetLoadOrderFromText |  | void |  |
| ModsPlaysetEntry | Version |  | CString |  |
| MoveTool | AccessSelf |  | MoveTool |  |
| MoveTool | Self |  | MoveTool |  |
| MultiNonoptionalInputNodeWindow | AccessSelf |  | MultiNonoptionalInputNodeWindow |  |
| MultiNonoptionalInputNodeWindow | AddPin |  | void |  |
| MultiNonoptionalInputNodeWindow | CanAddPin |  | bool |  |
| MultiNonoptionalInputNodeWindow | CanRemovePin |  | bool |  |
| MultiNonoptionalInputNodeWindow | GetNumberOfPins |  | int32 |  |
| MultiNonoptionalInputNodeWindow | RemovePin |  | void |  |
| MultiNonoptionalInputNodeWindow | Self |  | MultiNonoptionalInputNodeWindow |  |
| MultiNonoptionalInputNodeWindow | SetNumberOfPins |  | void |  |
| MultiUnitSelectUnit | AccessSelf |  | MultiUnitSelectUnit |  |
| MultiUnitSelectUnit | OnClose |  | void |  |
| MultiUnitSelectUnit | Parent |  | unknown |  |
| MultiUnitSelectUnit | Self |  | MultiUnitSelectUnit |  |
| MultiUnitWindow | AccessFilteredUnitItems |  | unknown |  |
| MultiUnitWindow | AccessSelf |  | MultiUnitWindow |  |
| MultiUnitWindow | AccessUnitItems |  | unknown |  |
| MultiUnitWindow | BuildMergeTooltip |  | CString |  |
| MultiUnitWindow | BuildReorgTooltip |  | CString |  |
| MultiUnitWindow | BuildSelectObjectiveTooltip |  | CString |  |
| MultiUnitWindow | CanMerge |  | bool |  |
| MultiUnitWindow | CanReorg |  | bool |  |
| MultiUnitWindow | CanSelectObjective |  | bool |  |
| MultiUnitWindow | GetAllActionItems |  | unknown |  |
| MultiUnitWindow | GetFilteredUnitItems |  | unknown |  |
| MultiUnitWindow | GetFirstUnit |  | unknown |  |
| MultiUnitWindow | GetInfo |  | CString |  |
| MultiUnitWindow | GetPlayer |  | unknown |  |
| MultiUnitWindow | GetTags |  | CString |  |
| MultiUnitWindow | GetTotalUnitStrength |  | CString |  |
| MultiUnitWindow | GetTotalUnitStrengthTooltip |  | CString |  |
| MultiUnitWindow | GetUnitItems |  | unknown |  |
| MultiUnitWindow | GetUnitsSortSearch |  | unknown |  |
| MultiUnitWindow | IsArmy |  | bool |  |
| MultiUnitWindow | IsLeftPanel |  | bool |  |
| MultiUnitWindow | IsMultiUnitSelectUnitOpened | 1. unknown | bool |  |
| MultiUnitWindow | IsRightPanel |  | bool |  |
| MultiUnitWindow | OnMerge |  | void |  |
| MultiUnitWindow | OnReorg |  | void |  |
| MultiUnitWindow | OnSelectObjective |  | void |  |
| MultiUnitWindow | Self |  | MultiUnitWindow |  |
| MultiUnitWindow | ToggleMultiUnitSelectUnit | 1. unknown | void |  |
| MultiplayerChat | AccessSelf |  | MultiplayerChat |  |
| MultiplayerChat | ClearText | 1. unknown | void |  |
| MultiplayerChat | GetChatMessages |  | unknown |  |
| MultiplayerChat | GetChatPosition |  | CVector2f |  |
| MultiplayerChat | GetPinTooltip |  | CString |  |
| MultiplayerChat | GetPlayers |  | unknown |  |
| MultiplayerChat | GetTooltip |  | CString |  |
| MultiplayerChat | IsChatPinned |  | bool |  |
| MultiplayerChat | IsShowingPlayerList |  | bool |  |
| MultiplayerChat | IsTextEmpty |  | bool |  |
| MultiplayerChat | OnClose |  | void |  |
| MultiplayerChat | OnReturnPressed | 1. unknown | void |  |
| MultiplayerChat | OnTextEdited | 1. unknown | void |  |
| MultiplayerChat | PinMPChat |  | void |  |
| MultiplayerChat | Self |  | MultiplayerChat |  |
| MultiplayerChat | TogglePlayerList |  | void |  |
| MultiplayerSetupWindow | AccessSelf |  | MultiplayerSetupWindow |  |
| MultiplayerSetupWindow | CanHost |  | bool |  |
| MultiplayerSetupWindow | Cancel |  | void |  |
| MultiplayerSetupWindow | GetDefaultServerName |  | CUTF8String |  |
| MultiplayerSetupWindow | GetDefaultServerPassword |  | CUTF8String |  |
| MultiplayerSetupWindow | Host |  | void |  |
| MultiplayerSetupWindow | HostToolTip |  | CString |  |
| MultiplayerSetupWindow | Self |  | MultiplayerSetupWindow |  |
| MultiplayerSetupWindow | ShouldShowMPConfig |  | bool |  |
| MusicPlayer | AccessCategories |  | unknown |  |
| MusicPlayer | AccessSelf |  | MusicPlayer |  |
| MusicPlayer | AccessTracksFromSelectedCategory |  | unknown |  |
| MusicPlayer | GetCategoryEnabledText | 1. unknown | CString |  |
| MusicPlayer | GetCategoryName | 1. unknown | CString |  |
| MusicPlayer | GetCategoryNameLocKey | 1. unknown | CString |  |
| MusicPlayer | GetMusicDensity |  | float |  |
| MusicPlayer | GetMusicDensityString |  | CString |  |
| MusicPlayer | GetPlaybackStatusFrameIndex |  | int32 |  |
| MusicPlayer | GetPlayingTrackElapsedTime |  | CString |  |
| MusicPlayer | GetPlayingTrackName |  | CString |  |
| MusicPlayer | GetSelectedCategory |  | unknown |  |
| MusicPlayer | GetTrackEnabledText | 1. unknown | CString |  |
| MusicPlayer | GetTrackName | 1. unknown | CString |  |
| MusicPlayer | GetTrackTextColor | 1. unknown | CVector4f |  |
| MusicPlayer | GetVolume |  | float |  |
| MusicPlayer | GetVolumeString |  | CString |  |
| MusicPlayer | HasSelectedCategory |  | bool |  |
| MusicPlayer | IsPlaying |  | bool |  |
| MusicPlayer | IsSelectedCategory | 1. unknown | bool |  |
| MusicPlayer | OnNextTrack |  | void |  |
| MusicPlayer | OnSelectAndPlayTrack | 1. unknown | void |  |
| MusicPlayer | OnSelectCategory | 1. unknown | void |  |
| MusicPlayer | OnSelectTrack | 1. unknown | void |  |
| MusicPlayer | OnToggleCategoryEnabled | 1. unknown | void |  |
| MusicPlayer | OnTogglePlayPause |  | void |  |
| MusicPlayer | OnToggleTrackEnabled | 1. unknown | void |  |
| MusicPlayer | Self |  | MusicPlayer |  |
| MusicPlayer | SetMusicDensity |  | void |  |
| MusicPlayer | SetVolume |  | void |  |
| MusicPlayerCategory | AccessSelf |  | MusicPlayerCategory |  |
| MusicPlayerCategory | GetName |  | CString |  |
| MusicPlayerCategory | GetNameLocKey |  | CString |  |
| MusicPlayerCategory | GetTexture |  | unknown |  |
| MusicPlayerCategory | GetTracks |  | unknown |  |
| MusicPlayerCategory | HasTexture |  | bool |  |
| MusicPlayerCategory | IsEnabled |  | bool |  |
| MusicPlayerCategory | IsPlaying |  | bool |  |
| MusicPlayerCategory | Self |  | MusicPlayerCategory |  |
| MusicTrack | AccessSelf |  | MusicTrack |  |
| MusicTrack | GetCategory |  | unknown |  |
| MusicTrack | GetName |  | CString |  |
| MusicTrack | IsEnabled |  | bool |  |
| MusicTrack | IsPlaying |  | bool |  |
| MusicTrack | Self |  | MusicTrack |  |
| NavyConstructionMarker | AccessSelf |  | NavyConstructionMarker |  |
| NavyConstructionMarker | GetConstruction |  | unknown |  |
| NavyConstructionMarker | Self |  | NavyConstructionMarker |  |
| NavyStrength | AccessSelf |  | NavyStrength |  |
| NavyStrength | GetCombatPower |  | CString |  |
| NavyStrength | GetTransportCapacity |  | CString |  |
| NavyStrength | Self |  | NavyStrength |  |
| NewBornMessage | AccessSelf |  | NewBornMessage |  |
| NewBornMessage | GetCharacter |  | unknown |  |
| NewBornMessage | GiveRandomName |  | void |  |
| NewBornMessage | Self |  | NewBornMessage |  |
| NewCountryCandidate | AccessSelf |  | NewCountryCandidate |  |
| NewCountryCandidate | CanFormCountry |  | bool |  |
| NewCountryCandidate | EnableHighlight | 1. unknown | void |  |
| NewCountryCandidate | FormCountry |  | void |  |
| NewCountryCandidate | GetCanFormCountryConditions |  | CString |  |
| NewCountryCandidate | GetCanFormCountryCost |  | CString |  |
| NewCountryCandidate | GetFormCountryDesc |  | CString |  |
| NewCountryCandidate | GetFormableCountry |  | unknown |  |
| NewCountryCandidate | GetLocationProgress |  | CString |  |
| NewCountryCandidate | Self |  | NewCountryCandidate |  |
| Node | AccessSelf |  | Node |  |
| Node | ContextColor |  | CVector4f |  |
| Node | Description |  | CString |  |
| Node | ErrorColor |  | CVector4f |  |
| Node | ErrorTooltip |  | CString |  |
| Node | GetBackgroundColor |  | CVector4f |  |
| Node | GetId |  | int32 |  |
| Node | GetSelectedColor |  | CVector4f |  |
| Node | HasDescription |  | bool |  |
| Node | HasError |  | bool |  |
| Node | IsSelected |  | bool |  |
| Node | Name |  | CString |  |
| Node | Self |  | Node |  |
| Node | TextColor |  | CVector4f |  |
| Node | Texture |  | unknown |  |
| Node | Tooltip |  | CString |  |
| NodeEditorSearch | AccessSelf |  | NodeEditorSearch |  |
| NodeEditorSearch | ClearSearchText |  | void |  |
| NodeEditorSearch | CurrentResultIndex |  | int32 |  |
| NodeEditorSearch | GetSearchText |  | CUTF8String |  |
| NodeEditorSearch | GoToNextResult |  | void |  |
| NodeEditorSearch | GoToPreviousResult |  | void |  |
| NodeEditorSearch | HasOccurrences |  | bool |  |
| NodeEditorSearch | Hide |  | void |  |
| NodeEditorSearch | IsVisible |  | bool |  |
| NodeEditorSearch | NumOccurrences |  | int32 |  |
| NodeEditorSearch | Search |  | void |  |
| NodeEditorSearch | Self |  | NodeEditorSearch |  |
| NodeError | AccessSelf |  | NodeError |  |
| NodeError | GoTo |  | void |  |
| NodeError | Message |  | CString |  |
| NodeError | Node |  | int32 |  |
| NodeError | Self |  | NodeError |  |
| NodeLine | AccessSelf |  | NodeLine |  |
| NodeLine | Color |  | CVector4f |  |
| NodeLine | From |  | CVector2f |  |
| NodeLine | GetAnimationSpeed |  | CVector2f |  |
| NodeLine | GetOwnerNodeId |  | int32 |  |
| NodeLine | Highlighted |  | bool |  |
| NodeLine | IsDisabled |  | bool |  |
| NodeLine | Self |  | NodeLine |  |
| NodeLine | SetHighlightedDirectly | 1. unknown | void |  |
| NodeLine | SetSelected | 1. unknown | void |  |
| NodeLine | To |  | CVector2f |  |
| NodeLine | Tooltip |  | unknown |  |
| NodeLine | Width |  | float |  |
| NodePin | AccessSelf |  | NodePin |  |
| NodePin | Color |  | CVector4f |  |
| NodePin | DrawAsConnected |  | bool |  |
| NodePin | Highlight |  | bool |  |
| NodePin | IsInlinedNodeConnected |  | bool |  |
| NodePin | IsNodePinDisplayNameEmpty |  | bool |  |
| NodePin | Name |  | CString |  |
| NodePin | Self |  | NodePin |  |
| NodePin | Tooltip |  | CString |  |
| NodePin | TypeColor |  | CVector4f |  |
| NodeWindow | AccessSelf |  | NodeWindow |  |
| NodeWindow | Close |  | void |  |
| NodeWindow | DescriptionDialog |  | void |  |
| NodeWindow | NameDialog |  | void |  |
| NodeWindow | Self |  | NodeWindow |  |
| NodeWindow | SetDescription |  | void |  |
| NonDownloadedMod | AccessSelf |  | NonDownloadedMod |  |
| NonDownloadedMod | Description |  | CString |  |
| NonDownloadedMod | DisplayImage |  | unknown |  |
| NonDownloadedMod | DisplayName |  | CString |  |
| NonDownloadedMod | Id |  | int32 |  |
| NonDownloadedMod | Name |  | CString |  |
| NonDownloadedMod | Self |  | NonDownloadedMod |  |
| NonDownloadedMod | Version |  | CString |  |
| NonRegisteredDockable | AccessSelf |  | NonRegisteredDockable |  |
| NonRegisteredDockable | GetID |  | CString |  |
| NonRegisteredDockable | Self |  | NonRegisteredDockable |  |
| NotificationDummyContext | AccessSelf |  | NotificationDummyContext |  |
| NotificationDummyContext | Self |  | NotificationDummyContext |  |
| Nudger | AccessSelf |  | Nudger |  |
| Nudger | CreateNewBlankMapObjectType |  | void |  |
| Nudger | DeleteSelected |  | void |  |
| Nudger | Deselect |  | void |  |
| Nudger | FocusCameraOnSelection |  | void |  |
| Nudger | IsAnyMapObjectExpanded |  | bool |  |
| Nudger | IsAnyMapObjectHidden |  | bool |  |
| Nudger | IsAnyMapObjectLocked |  | bool |  |
| Nudger | IsAnyObjectEntrySelected |  | bool |  |
| Nudger | IsAnyObjectSelected |  | bool |  |
| Nudger | IsAnySelectedMapObjectDynamicType |  | bool |  |
| Nudger | IsMultiSpawnEnabled |  | bool |  |
| Nudger | OnMapObjectSelected | 1. unknown | void |  |
| Nudger | SelectAll |  | void |  |
| Nudger | Self |  | Nudger |  |
| Nudger | SetAllMapObjectsExpanded | 1. unknown | void |  |
| Nudger | SetAllMapObjectsHidden | 1. unknown | void |  |
| Nudger | SetAllMapObjectsLocked | 1. unknown | void |  |
| Nudger | SetMapObjectHidden | 1. unknown 2. unknown | void |  |
| Nudger | SetMapObjectLocked | 1. unknown 2. unknown | void |  |
| Nudger | SetMapObjectLockedExclusive | 1. unknown 2. unknown | void |  |
| Nudger | SetMultiSpawnEnabled | 1. unknown | void |  |
| Nudger | ToggleInstancesClampToWaterLevel |  | void |  |
| Nudger | ToggleInstancesRenderUnderwater |  | void |  |
| NudgerLayerEntryMapObjectDesc | AccessSelf |  | NudgerLayerEntryMapObjectDesc |  |
| NudgerLayerEntryMapObjectDesc | GetName |  | CString |  |
| NudgerLayerEntryMapObjectDesc | IsAutoNudgingError |  | bool |  |
| NudgerLayerEntryMapObjectDesc | IsLocked |  | bool |  |
| NudgerLayerEntryMapObjectDesc | IsSelected |  | bool |  |
| NudgerLayerEntryMapObjectDesc | Select |  | void |  |
| NudgerLayerEntryMapObjectDesc | Self |  | NudgerLayerEntryMapObjectDesc |  |
| NudgerLayerEntryMapObjectDesc | SetLocked | 1. unknown | void |  |
| NudgerMapContentGui | AccessSelf |  | NudgerMapContentGui |  |
| NudgerMapContentGui | AutoNudgeSelection |  | void |  |
| NudgerMapContentGui | GetAutoNudgingReadyProgress |  | float |  |
| NudgerMapContentGui | IsAutoNudgePreviewEnabled |  | bool |  |
| NudgerMapContentGui | IsAutoNudgingReady |  | bool |  |
| NudgerMapContentGui | IsAutoNudgingSettingsOpen |  | bool |  |
| NudgerMapContentGui | IsAutoNudgingSupported |  | bool |  |
| NudgerMapContentGui | Self |  | NudgerMapContentGui |  |
| NudgerMapContentGui | SetAutoNudgePreviewEnabled | 1. unknown | void |  |
| NudgerMapContentGui | SetAutoNudgingSettingsOpen | 1. unknown | void |  |
| NudgerMapObjectPropertyListDockable | AccessSelf |  | NudgerMapObjectPropertyListDockable |  |
| NudgerMapObjectPropertyListDockable | Delete |  | void |  |
| NudgerMapObjectPropertyListDockable | HasEntry |  | bool |  |
| NudgerMapObjectPropertyListDockable | IsGeneratedType |  | bool |  |
| NudgerMapObjectPropertyListDockable | Self |  | NudgerMapObjectPropertyListDockable |  |
| NudgerMode | AccessSelf |  | NudgerMode |  |
| NudgerMode | IsSelected |  | bool |  |
| NudgerMode | Self |  | NudgerMode |  |
| ObjectBrowser | AccessSelf |  | ObjectBrowser |  |
| ObjectBrowser | CopyAsCSV |  | void |  |
| ObjectBrowser | CreateNewPreset |  | void |  |
| ObjectBrowser | DeleteSelectedPreset |  | void |  |
| ObjectBrowser | ForceUpdate |  | void |  |
| ObjectBrowser | GetFilterString |  | CUTF8String |  |
| ObjectBrowser | GetNumObjectsFiltered |  | int32 |  |
| ObjectBrowser | GetNumObjectsTotal |  | int32 |  |
| ObjectBrowser | GetPresets |  | unknown |  |
| ObjectBrowser | GetProviders |  | unknown |  |
| ObjectBrowser | GetSelectedProvider |  | CVector2i |  |
| ObjectBrowser | GetSelectedView |  | CVector2i |  |
| ObjectBrowser | GetViews |  | unknown |  |
| ObjectBrowser | HasConfig |  | bool |  |
| ObjectBrowser | IsObjectSelected | 1. unknown | bool |  |
| ObjectBrowser | IsOutputFlattened |  | bool |  |
| ObjectBrowser | IsWaitingForProvider |  | bool |  |
| ObjectBrowser | RenameSelectedPreset |  | void |  |
| ObjectBrowser | RequestUpdate |  | void |  |
| ObjectBrowser | SaveCurrentChanges |  | void |  |
| ObjectBrowser | SaveDefaults |  | void |  |
| ObjectBrowser | SelectProvider |  | void |  |
| ObjectBrowser | SelectView |  | void |  |
| ObjectBrowser | Self |  | ObjectBrowser |  |
| ObjectBrowser | SetFilterString |  | void |  |
| ObjectBrowser | SetObjectSelected | 1. unknown | void |  |
| ObjectBrowser | SetSelectedPreset | 1. unknown | void |  |
| ObjectBrowser | ToggleObjectSelected | 1. unknown | void |  |
| ObjectBrowser | ToggleOutputFlattened |  | void |  |
| ObjectBrowserView | AccessSelf |  | ObjectBrowserView |  |
| ObjectBrowserView | Name |  | CUTF8String |  |
| ObjectBrowserView | Self |  | ObjectBrowserView |  |
| ObjectInspector | AccessPluginEntries |  | unknown |  |
| ObjectInspector | AccessSelf |  | ObjectInspector |  |
| ObjectInspector | GetObjectName |  | CUTF8String |  |
| ObjectInspector | GetTypeName |  | CUTF8String |  |
| ObjectInspector | Self |  | ObjectInspector |  |
| ObjectInspectorDockable | AccessSelf |  | ObjectInspectorDockable |  |
| ObjectInspectorDockable | Detach |  | void |  |
| ObjectInspectorDockable | IsAttached |  | bool |  |
| ObjectInspectorDockable | Self |  | ObjectInspectorDockable |  |
| ObjectInspectorPlugin | AccessSelf |  | ObjectInspectorPlugin |  |
| ObjectInspectorPlugin | GetErrorMessage |  | CUTF8String |  |
| ObjectInspectorPlugin | GetTitle |  | CUTF8String |  |
| ObjectInspectorPlugin | HasError |  | bool |  |
| ObjectInspectorPlugin | Self |  | ObjectInspectorPlugin |  |
| ObjectPreset | AccessSelf |  | ObjectPreset |  |
| ObjectPreset | IsSelected |  | bool |  |
| ObjectPreset | PresetName |  | CUTF8String |  |
| ObjectPreset | Self |  | ObjectPreset |  |
| ObjectProvider | AccessSelf |  | ObjectProvider |  |
| ObjectProvider | Name |  | CUTF8String |  |
| ObjectProvider | RequestUpdate |  | void |  |
| ObjectProvider | Self |  | ObjectProvider |  |
| OneBuildingInMarketUpkeepWrap | AccessSelf |  | OneBuildingInMarketUpkeepWrap |  |
| OneBuildingInMarketUpkeepWrap | GetName |  | CString |  |
| OneBuildingInMarketUpkeepWrap | GetTooltip |  | CString |  |
| OneBuildingInMarketUpkeepWrap | Self |  | OneBuildingInMarketUpkeepWrap |  |
| OngoingRelationCountry | AccessSelf |  | OngoingRelationCountry |  |
| OngoingRelationCountry | GetAnnexationProgress |  | float |  |
| OngoingRelationCountry | GetAnnexationTooltip |  | CString |  |
| OngoingRelationCountry | GetBuildingSpyNetworkProgress |  | float |  |
| OngoingRelationCountry | GetBuildingSpyNetworkTooltip |  | CString |  |
| OngoingRelationCountry | GetCasusBelliCreationProgress |  | float |  |
| OngoingRelationCountry | GetCasusBelliCreationTooltip |  | CString |  |
| OngoingRelationCountry | GetCountry |  | unknown |  |
| OngoingRelationCountry | GetCurryFavorsProgress |  | float |  |
| OngoingRelationCountry | GetCurryFavorsTooltip |  | CString |  |
| OngoingRelationCountry | GetOpinionImprovementDebugTooltip |  | CString |  |
| OngoingRelationCountry | GetOpinionImprovementProgress |  | float |  |
| OngoingRelationCountry | GetOpinionImprovementTooltip |  | CString |  |
| OngoingRelationCountry | IsAnnexing |  | bool |  |
| OngoingRelationCountry | IsBuildingSpyNetwork |  | bool |  |
| OngoingRelationCountry | IsCreatingCasusBelli |  | bool |  |
| OngoingRelationCountry | IsCurryingFavors |  | bool |  |
| OngoingRelationCountry | IsImprovingOpinion |  | bool |  |
| OngoingRelationCountry | Self |  | OngoingRelationCountry |  |
| OngoingRelationCountryList | AccessSelf |  | OngoingRelationCountryList |  |
| OngoingRelationCountryList | GetConcept |  | CString |  |
| OngoingRelationCountryList | GetCountries |  | unknown |  |
| OngoingRelationCountryList | GetCountryCount |  | int32 |  |
| OngoingRelationCountryList | GetDiplomaticStatusName |  | CString |  |
| OngoingRelationCountryList | GetProgressForCountry | 1. unknown | float |  |
| OngoingRelationCountryList | GetTexture |  | unknown |  |
| OngoingRelationCountryList | GetTooltipForCountry | 1. unknown | CString |  |
| OngoingRelationCountryList | IsLockedForCountry | 1. unknown | bool |  |
| OngoingRelationCountryList | Self |  | OngoingRelationCountryList |  |
| OngoingRelationCountryList | ToggleLockedStatusForCountry | 1. unknown | void |  |
| OosData | AccessSelf |  | OosData |  |
| OosData | GetFolder |  | CString |  |
| OosData | GetPlayerId |  | int32 |  |
| OosData | GetPlayerName |  | CString |  |
| OosData | GetType |  | CString |  |
| OosData | IsLocalPlayer |  | bool |  |
| OosData | IsObserver |  | bool |  |
| OosData | Self |  | OosData |  |
| OosWindow | AccessSelf |  | OosWindow |  |
| OosWindow | Close |  | void |  |
| OosWindow | Continue |  | void |  |
| OosWindow | GetOosData |  | unknown |  |
| OosWindow | GoToMenu |  | void |  |
| OosWindow | IsLocalOos |  | bool |  |
| OosWindow | IsMultiplayerHost |  | bool |  |
| OosWindow | Resync |  | void |  |
| OosWindow | Self |  | OosWindow |  |
| OrgItem | AccessSelf |  | OrgItem |  |
| OrgItem | GetExtraCountries |  | CString |  |
| OrgItem | GetMembers |  | unknown |  |
| OrgItem | GetMembersText |  | CString |  |
| OrgItem | GetName |  | CString |  |
| OrgItem | GetOrg |  | unknown |  |
| OrgItem | GetOrgUILimit |  | int32 |  |
| OrgItem | GetOverflowCountriesForUI |  | int32 |  |
| OrgItem | GetTooltip |  | CString |  |
| OrgItem | Self |  | OrgItem |  |
| OutbreakItem | AccessSelf |  | OutbreakItem |  |
| OutbreakItem | GetAffectedCountries |  | int32 |  |
| OutbreakItem | GetAffectedCountriesTooltip |  | CString |  |
| OutbreakItem | GetAffectedCountryLocations |  | int32 |  |
| OutbreakItem | GetAffectedCountryLocationsInfo |  | CString |  |
| OutbreakItem | GetDiseaseOutbreak |  | unknown |  |
| OutbreakItem | GetName |  | CString |  |
| OutbreakItem | GetPlayerDeathUnitsInfo |  | CString |  |
| OutbreakItem | GetPlayerDeathsInfo |  | CString |  |
| OutbreakItem | GetStartDate |  | CString |  |
| OutbreakItem | GetWorldDeathsInfo |  | CString |  |
| OutbreakItem | Self |  | OutbreakItem |  |
| OutgoingFriendRequest | AccessSelf |  | OutgoingFriendRequest |  |
| OutgoingFriendRequest | GetName |  | CUTF8String |  |
| OutgoingFriendRequest | Remove |  | void |  |
| OutgoingFriendRequest | Self |  | OutgoingFriendRequest |  |
| Outliner | AccessSelf |  | Outliner |  |
| Outliner | GetCategoryHandlers | 1. unknown | unknown |  |
| Outliner | GetMapMarkerSettings | 1. unknown | unknown |  |
| Outliner | IsAnyOccludingPanelOpened |  | bool |  |
| Outliner | IsExpanded |  | bool |  |
| Outliner | IsMouseOver |  | bool |  |
| Outliner | IsPinned |  | bool |  |
| Outliner | IsSettingsShowing |  | bool |  |
| Outliner | MakeDefault |  | void |  |
| Outliner | MouseLeave | 1. unknown | void |  |
| Outliner | MouseOver | 1. unknown 2. unknown | void |  |
| Outliner | OnHideSettings |  | void |  |
| Outliner | OnHoverCategory | 1. unknown | void |  |
| Outliner | OnLeaveCategory |  | void |  |
| Outliner | OnShowSettings |  | void |  |
| Outliner | Self |  | Outliner |  |
| Outliner | SetPinned | 1. unknown | void |  |
| Outliner | Toggle |  | void |  |
| Outliner | TogglePinned |  | void |  |
| Outliner | ToggleSettings |  | void |  |
| OutlinerAgendaEntry | AccessSelf |  | OutlinerAgendaEntry |  |
| OutlinerAgendaEntry | AreMissionsEnabled |  | bool |  |
| OutlinerAgendaEntry | HasMissionActive |  | bool |  |
| OutlinerAgendaEntry | IsClosed |  | bool |  |
| OutlinerAgendaEntry | IsOpened |  | bool |  |
| OutlinerAgendaEntry | IsPinned |  | bool |  |
| OutlinerAgendaEntry | Self |  | OutlinerAgendaEntry |  |
| OutlinerAgendaEntry | Toggle |  | void |  |
| OutlinerAgendaEntry | TogglePin |  | void |  |
| OutlinerCabinetEntry | AccessSelf |  | OutlinerCabinetEntry |  |
| OutlinerCabinetEntry | GetActionProgressScope |  | unknown |  |
| OutlinerCabinetEntry | GetSocietalValueMonthlyProgress |  | CFixedPoint |  |
| OutlinerCabinetEntry | Self |  | OutlinerCabinetEntry |  |
| OutlinerCategoryEntry | AccessSelf |  | OutlinerCategoryEntry |  |
| OutlinerCategoryEntry | GetEntryCount |  | int32 |  |
| OutlinerCategoryEntry | GetName |  | CString |  |
| OutlinerCategoryEntry | IsClosed |  | bool |  |
| OutlinerCategoryEntry | IsOpened |  | bool |  |
| OutlinerCategoryEntry | IsPinned |  | bool |  |
| OutlinerCategoryEntry | Self |  | OutlinerCategoryEntry |  |
| OutlinerCategoryEntry | Toggle |  | void |  |
| OutlinerCategoryEntry | TogglePin |  | void |  |
| OutlinerCategoryHandler | AccessSelf |  | OutlinerCategoryHandler |  |
| OutlinerCategoryHandler | GetEntryCount |  | int32 |  |
| OutlinerCategoryHandler | GetName |  | CString |  |
| OutlinerCategoryHandler | IsClosed |  | bool |  |
| OutlinerCategoryHandler | IsOpened |  | bool |  |
| OutlinerCategoryHandler | IsPinned |  | bool |  |
| OutlinerCategoryHandler | Self |  | OutlinerCategoryHandler |  |
| OutlinerCategoryHandler | Toggle |  | void |  |
| OutlinerCategoryHandler | TogglePin |  | void |  |
| OutlinerDiplomacyEntry | AccessSelf |  | OutlinerDiplomacyEntry |  |
| OutlinerDiplomacyEntry | CanRightClick |  | bool |  |
| OutlinerDiplomacyEntry | CanRightClickConditions |  | CString |  |
| OutlinerDiplomacyEntry | GetIcon |  | unknown |  |
| OutlinerDiplomacyEntry | GetModifier |  | CFixedPoint |  |
| OutlinerDiplomacyEntry | GetProgress |  | float |  |
| OutlinerDiplomacyEntry | GetStatus |  | CString |  |
| OutlinerDiplomacyEntry | GetTargetCountry |  | unknown |  |
| OutlinerDiplomacyEntry | GetTemporaryRelationCountry |  | unknown |  |
| OutlinerDiplomacyEntry | GetText |  | CString |  |
| OutlinerDiplomacyEntry | GetTooltip |  | CString |  |
| OutlinerDiplomacyEntry | GetTotalNumber |  | CFixedPoint |  |
| OutlinerDiplomacyEntry | OnClick |  | void |  |
| OutlinerDiplomacyEntry | OnRightClick |  | void |  |
| OutlinerDiplomacyEntry | Self |  | OutlinerDiplomacyEntry |  |
| OutlinerEntry | AccessSelf |  | OutlinerEntry |  |
| OutlinerEntry | IsHighlighted |  | bool |  |
| OutlinerEntry | IsVisible |  | bool |  |
| OutlinerEntry | Self |  | OutlinerEntry |  |
| OutlinerPlayerEntry | AccessSelf |  | OutlinerPlayerEntry |  |
| OutlinerPlayerEntry | GetCountry |  | unknown |  |
| OutlinerPlayerEntry | GetIcon |  | unknown |  |
| OutlinerPlayerEntry | GetName |  | CString |  |
| OutlinerPlayerEntry | GetUser |  | CString |  |
| OutlinerPlayerEntry | IsObserver |  | bool |  |
| OutlinerPlayerEntry | Self |  | OutlinerPlayerEntry |  |
| OutlinerSettings | AccessSelf |  | OutlinerSettings |  |
| OutlinerSettings | GetOutliner |  | unknown |  |
| OutlinerSettings | OnClose |  | void |  |
| OutlinerSettings | Self |  | OutlinerSettings |  |
| OutlinerWarEntry | AccessSelf |  | OutlinerWarEntry |  |
| OutlinerWarEntry | GetEntryCount |  | int32 |  |
| OutlinerWarEntry | IsClosed |  | bool |  |
| OutlinerWarEntry | IsOpened |  | bool |  |
| OutlinerWarEntry | Self |  | OutlinerWarEntry |  |
| OutlinerWarEntry | Toggle |  | void |  |
| OutputEntry | AccessSelf |  | OutputEntry |  |
| OutputEntry | GetInputTextures |  | unknown |  |
| OutputEntry | GetPath |  | CString |  |
| OutputEntry | IsSelected |  | bool |  |
| OutputEntry | IsValid |  | bool |  |
| OutputEntry | Self |  | OutputEntry |  |
| OutputEntry | ToggleIsSelected |  | void |  |
| OverrideEntry | AccessSelf |  | OverrideEntry |  |
| OverrideEntry | GetModifiedColor |  | CVector4f |  |
| OverrideEntry | GetName |  | CString |  |
| OverrideEntry | IsOpen |  | bool |  |
| OverrideEntry | Self |  | OverrideEntry |  |
| OverrideEntry | Toggle |  | void |  |
| Parliament | AccessSelf |  | Parliament |  |
| Parliament | GetAddedParliamentIssueSupport |  | CFixedPoint |  |
| Parliament | GetAgendaTooltip |  | CString |  |
| Parliament | GetBaseParliamentIssueSupport |  | CFixedPoint |  |
| Parliament | GetCountryParliamentAgenda | 1. unknown | unknown |  |
| Parliament | GetCurrentDebate |  | unknown |  |
| Parliament | GetFailedEffect |  | CString |  |
| Parliament | GetHasVotedForParliamentIssue | 1. unknown | CString |  |
| Parliament | GetLastParliamentCalledDate |  | CString |  |
| Parliament | GetName |  | CString |  |
| Parliament | GetNonVotedCountries |  | unknown |  |
| Parliament | GetOppositionCountries |  | unknown |  |
| Parliament | GetOrganizationParliamentAgenda | 1. unknown | unknown |  |
| Parliament | GetParliamentDurationProgress |  | CFixedPoint |  |
| Parliament | GetParliamentIssueRequestSupportNeeded |  | CFixedPoint |  |
| Parliament | GetParliamentIssueSupport |  | CFixedPoint |  |
| Parliament | GetParliamentLocation |  | unknown |  |
| Parliament | GetParliamentType |  | unknown |  |
| Parliament | GetPassedEffect |  | CString |  |
| Parliament | GetRemainingParliamentDuration |  | int32 |  |
| Parliament | GetStartEffect |  | CString |  |
| Parliament | GetVotedCountries |  | unknown |  |
| Parliament | HasFailedEffect |  | bool |  |
| Parliament | HasOngoingParliamentDebate |  | bool |  |
| Parliament | HasParticipatedInParliament | 1. unknown | bool |  |
| Parliament | HasPassedEffect |  | bool |  |
| Parliament | HasStartEffect |  | bool |  |
| Parliament | HasVotedAgainstIssue | 1. unknown | bool |  |
| Parliament | HasVotedForIssue | 1. unknown | bool |  |
| Parliament | IsCurrentParliamentType | 1. unknown | bool |  |
| Parliament | IsParliamentActive |  | bool |  |
| Parliament | Self |  | Parliament |  |
| Parliament | WillParliamentIssuePass |  | bool |  |
| ParliamentAgenda | AccessSelf |  | ParliamentAgenda |  |
| ParliamentAgenda | GetBribed |  | CString |  |
| ParliamentAgenda | GetBribedWithContext | 1. unknown | CString |  |
| ParliamentAgenda | GetBribedWithEstateContext | 1. unknown | CString |  |
| ParliamentAgenda | GetConditions |  | CString |  |
| ParliamentAgenda | GetDescription |  | CString |  |
| ParliamentAgenda | GetEffect |  | CString |  |
| ParliamentAgenda | GetEffectWithContext | 1. unknown | CString |  |
| ParliamentAgenda | GetEffectWithEstateContext | 1. unknown | CString |  |
| ParliamentAgenda | GetName |  | CString |  |
| ParliamentAgenda | GetNameWithNoTooltip |  | CString |  |
| ParliamentAgenda | GetTooltip |  | CString |  |
| ParliamentAgenda | MakeScope |  | Scope | Jomini Script System |
| ParliamentAgenda | Self |  | ParliamentAgenda |  |
| ParliamentAgendaGlue | AccessSelf |  | ParliamentAgendaGlue |  |
| ParliamentAgendaGlue | GetParliamentAgenda |  | unknown |  |
| ParliamentAgendaGlue | GetUIAction |  | unknown |  |
| ParliamentAgendaGlue | IsAllowedForCountry | 1. unknown | bool |  |
| ParliamentAgendaGlue | Self |  | ParliamentAgendaGlue |  |
| ParliamentAgendaItem | AccessSelf |  | ParliamentAgendaItem |  |
| ParliamentAgendaItem | GetAgenda |  | unknown |  |
| ParliamentAgendaItem | GetImpact |  | CString |  |
| ParliamentAgendaItem | GetName |  | CString |  |
| ParliamentAgendaItem | GetSatisfaction |  | CString |  |
| ParliamentAgendaItem | GetSupport |  | CFixedPoint |  |
| ParliamentAgendaItem | GetSupportInfo |  | CString |  |
| ParliamentAgendaItem | GetType |  | unknown |  |
| ParliamentAgendaItem | GetUIAction |  | unknown |  |
| ParliamentAgendaItem | Self |  | ParliamentAgendaItem |  |
| ParliamentInSession | AccessSelf |  | ParliamentInSession |  |
| ParliamentInSession | GetParliament |  | unknown |  |
| ParliamentInSession | GetTexture |  | unknown |  |
| ParliamentInSession | Self |  | ParliamentInSession |  |
| ParliamentIssue | AccessSelf |  | ParliamentIssue |  |
| ParliamentIssue | GetCurrentSupport |  | CString |  |
| ParliamentIssue | GetDebateInfo |  | CString |  |
| ParliamentIssue | GetDescription |  | CString |  |
| ParliamentIssue | GetEstateType |  | unknown |  |
| ParliamentIssue | GetFailInfo |  | CString |  |
| ParliamentIssue | GetFailedEffect |  | CString |  |
| ParliamentIssue | GetModifierEffect |  | CString |  |
| ParliamentIssue | GetModifierEffectCondensed |  | CString |  |
| ParliamentIssue | GetName |  | CString |  |
| ParliamentIssue | GetNameWithNoTooltip |  | CString |  |
| ParliamentIssue | GetPassedEffect |  | CString |  |
| ParliamentIssue | GetPassedInfo |  | CString |  |
| ParliamentIssue | GetSpecialStatus |  | unknown |  |
| ParliamentIssue | GetStartInfo |  | CString |  |
| ParliamentIssue | GetSupportIncreaseForPlayer |  | CFixedPoint |  |
| ParliamentIssue | GetSupportIncreaseForPlayerInfo |  | CString |  |
| ParliamentIssue | GetSupportIncreaseForSpecialStatusInfo |  | CString |  |
| ParliamentIssue | GetTooltip |  | CString |  |
| ParliamentIssue | HasDebateInfo |  | bool |  |
| ParliamentIssue | HasFailInfo |  | bool |  |
| ParliamentIssue | HasPassedInfo |  | bool |  |
| ParliamentIssue | HasStartInfo |  | bool |  |
| ParliamentIssue | IsInternationalOrganizationIssue |  | bool |  |
| ParliamentIssue | MakeScope |  | Scope | Jomini Script System |
| ParliamentIssue | Self |  | ParliamentIssue |  |
| ParliamentIssueWithContextWrap | AccessSelf |  | ParliamentIssueWithContextWrap |  |
| ParliamentIssueWithContextWrap | GetParliamentIssue |  | unknown |  |
| ParliamentIssueWithContextWrap | GetTooltip |  | CString |  |
| ParliamentIssueWithContextWrap | Self |  | ParliamentIssueWithContextWrap |  |
| ParliamentMarker | AccessSelf |  | ParliamentMarker |  |
| ParliamentMarker | GetGovernment |  | unknown |  |
| ParliamentMarker | IsPlayerParliament |  | bool |  |
| ParliamentMarker | Self |  | ParliamentMarker |  |
| ParliamentType | AccessSelf |  | ParliamentType |  |
| ParliamentType | GetConditions |  | CString |  |
| ParliamentType | GetDescription |  | CString |  |
| ParliamentType | GetEffects |  | CString |  |
| ParliamentType | GetName |  | CString |  |
| ParliamentType | GetNameWithNoTooltip |  | CString |  |
| ParliamentType | MakeScope |  | Scope | Jomini Script System |
| ParliamentType | Self |  | ParliamentType |  |
| ParticleUserData | AccessSelf |  | ParticleUserData |  |
| ParticleUserData | Id |  | CString |  |
| ParticleUserData | IsSelected |  | bool |  |
| ParticleUserData | Label |  | CString |  |
| ParticleUserData | Remove |  | void |  |
| ParticleUserData | Self |  | ParticleUserData |  |
| ParticleUserData | ToggleSelected |  | void |  |
| ParticleUserData | TypeName |  | unknown |  |
| ParticleUserData | TypeSize |  | int32 |  |
| PauseMenu | AccessSelf |  | PauseMenu |  |
| PauseMenu | CanOpenLobby |  | bool |  |
| PauseMenu | CloseAllViews |  | void |  |
| PauseMenu | GetOpenLobbyTooltip |  | CString |  |
| PauseMenu | IsAchievementsAvailable |  | bool |  |
| PauseMenu | IsLobbyOpen |  | bool |  |
| PauseMenu | IsMainWindowEnabled |  | bool |  |
| PauseMenu | LoadIngame |  | void |  |
| PauseMenu | LoadIngameTooltip |  | CString |  |
| PauseMenu | OnToggleLoginWindow |  | void |  |
| PauseMenu | OpenAchievements |  | void |  |
| PauseMenu | OpenAiSettings |  | void |  |
| PauseMenu | OpenLobby |  | void |  |
| PauseMenu | OpenMessageSettings | 1. unknown | void |  |
| PauseMenu | OpenReportIssue |  | void |  |
| PauseMenu | OpenSettings |  | void |  |
| PauseMenu | Quit |  | void |  |
| PauseMenu | Resume |  | void |  |
| PauseMenu | Save |  | void |  |
| PauseMenu | SaveTooltip |  | CString |  |
| PauseMenu | Self |  | PauseMenu |  |
| PauseMenu | SetInitSettings | 1. unknown 2. unknown | void |  |
| Payment | AccessSelf |  | Payment |  |
| Payment | GetCountryPayeeNum | 1. unknown | CString |  |
| Payment | GetCountryPayerNum | 1. unknown | CString |  |
| Payment | GetDesc |  | CString |  |
| Payment | GetFirstPayerName | 1. unknown | CString |  |
| Payment | GetFirstPayerPrice | 1. unknown | CString |  |
| Payment | GetIcon |  | unknown |  |
| Payment | GetName |  | CString |  |
| Payment | GetNameWithContext | 1. unknown | CString |  |
| Payment | GetNameWithNoTooltip |  | CString |  |
| Payment | GetPayeeName | 1. unknown | CString |  |
| Payment | GetPayeePrice | 1. unknown | CString |  |
| Payment | GetTooltip |  | CString |  |
| Payment | MakeScope |  | Scope | Jomini Script System |
| Payment | Self |  | Payment |  |
| PaymentWithContextWrap | AccessSelf |  | PaymentWithContextWrap |  |
| PaymentWithContextWrap | GetInternationalOrganization |  | unknown |  |
| PaymentWithContextWrap | GetMorePayees |  | int32 |  |
| PaymentWithContextWrap | GetMorePayers |  | int32 |  |
| PaymentWithContextWrap | GetPayeePrice | 1. unknown | CString |  |
| PaymentWithContextWrap | GetPayeeProportions |  | unknown |  |
| PaymentWithContextWrap | GetPayerPrice | 1. unknown | CString |  |
| PaymentWithContextWrap | GetPayerProportions |  | unknown |  |
| PaymentWithContextWrap | GetPayment |  | unknown |  |
| PaymentWithContextWrap | GetTotalPayeeProportion |  | CFixedPoint |  |
| PaymentWithContextWrap | GetTotalPayerProportion |  | CFixedPoint |  |
| PaymentWithContextWrap | HasMorePayees |  | bool |  |
| PaymentWithContextWrap | HasMorePayers |  | bool |  |
| PaymentWithContextWrap | Self |  | PaymentWithContextWrap |  |
| PdxAccount | AccessSelf |  | PdxAccount |  |
| PdxAccount | GetLastLinkError |  | unknown |  |
| PdxAccount | GetLastLinkErrorLocalized |  | CString |  |
| PdxAccount | GetThirdPartyProviderLocalizationKey |  | CString |  |
| PdxAccount | GetThirdPartyProviderLocalizedName |  | CString |  |
| PdxAccount | IsLinkingPossible |  | bool |  |
| PdxAccount | IsLoggedIn |  | bool |  |
| PdxAccount | Self |  | PdxAccount |  |
| PdxCoreSetting | AccessSelf |  | PdxCoreSetting |  |
| PdxCoreSetting | RequireApply |  | bool |  |
| PdxCoreSetting | RequireRestart |  | bool |  |
| PdxCoreSetting | Self |  | PdxCoreSetting |  |
| PdxEnumSetting | AccessSelf |  | PdxEnumSetting |  |
| PdxEnumSetting | HasValueChanged | 1. unknown | bool |  |
| PdxEnumSetting | Self |  | PdxEnumSetting |  |
| PdxGuiFoldOut | AccessSelf |  | PdxGuiFoldOut |  |
| PdxGuiFoldOut | Fold |  | void |  |
| PdxGuiFoldOut | IsFolded |  | bool |  |
| PdxGuiFoldOut | IsUnfolded |  | bool |  |
| PdxGuiFoldOut | Self |  | PdxGuiFoldOut |  |
| PdxGuiFoldOut | SetFoldState |  | void |  |
| PdxGuiFoldOut | Toggle |  | void |  |
| PdxGuiFoldOut | Unfold |  | void |  |
| PdxGuiGfxVideoControl | AccessSelf |  | PdxGuiGfxVideoControl |  |
| PdxGuiGfxVideoControl | IsLooping |  | bool |  |
| PdxGuiGfxVideoControl | IsPlaybackComplete |  | bool |  |
| PdxGuiGfxVideoControl | IsPlaying |  | bool |  |
| PdxGuiGfxVideoControl | Restart |  | void |  |
| PdxGuiGfxVideoControl | Self |  | PdxGuiGfxVideoControl |  |
| PdxGuiGfxVideoControl | SetLooping | 1. unknown | void |  |
| PdxGuiGfxVideoControl | Start |  | void |  |
| PdxGuiGfxVideoControl | Stop |  | void |  |
| PdxGuiTableRow | AccessSelf |  | PdxGuiTableRow |  |
| PdxGuiTableRow | GetIndex |  | int32 |  |
| PdxGuiTableRow | Self |  | PdxGuiTableRow |  |
| PdxGuiTreeTable | AccessSelf |  | PdxGuiTreeTable |  |
| PdxGuiTreeTable | CanExpand | 1. unknown | bool |  |
| PdxGuiTreeTable | Expand | 1. unknown | void |  |
| PdxGuiTreeTable | GetDepth | 1. unknown | int32 |  |
| PdxGuiTreeTable | GetIndent | 1. unknown 2. unknown | CVector2f |  |
| PdxGuiTreeTable | GetNumChildren | 1. unknown | int32 |  |
| PdxGuiTreeTable | IsExpanded | 1. unknown | bool |  |
| PdxGuiTreeTable | Self |  | PdxGuiTreeTable |  |
| PdxGuiTreeTable | ToggleExpand | 1. unknown | void |  |
| PdxGuiTreeTable | Unexpand | 1. unknown | void |  |
| PdxGuiWidget | AccessParent |  | unknown |  |
| PdxGuiWidget | AccessSelf |  | PdxGuiWidget |  |
| PdxGuiWidget | CloseContextMenu |  | void |  |
| PdxGuiWidget | CountVisibleChildren |  | int32 |  |
| PdxGuiWidget | DisableValueUpdate |  | void | Map Editor Internal usage |
| PdxGuiWidget | EnableValueUpdate |  | void | Map Editor Internal usage |
| PdxGuiWidget | FindChild | 1. unknown | unknown |  |
| PdxGuiWidget | FindParent | 1. unknown | unknown |  |
| PdxGuiWidget | GetAlpha |  | float |  |
| PdxGuiWidget | GetCenterX |  | float |  |
| PdxGuiWidget | GetCenterY |  | float |  |
| PdxGuiWidget | GetChildrenCount |  | int32 |  |
| PdxGuiWidget | GetIndexInDataModel |  | int32 |  |
| PdxGuiWidget | GetIndexInParent |  | int32 |  |
| PdxGuiWidget | GetName |  | CString |  |
| PdxGuiWidget | GetOutlinerEntryDebug |  | CString |  |
| PdxGuiWidget | GetRawShortcut |  | CUTF8String |  |
| PdxGuiWidget | GetShortcut |  | CUTF8String |  |
| PdxGuiWidget | GetSizeX |  | float |  |
| PdxGuiWidget | GetSizeY |  | float |  |
| PdxGuiWidget | GetTooltipLockProgress |  | float |  |
| PdxGuiWidget | GetTooltipMetaGameConcept |  | CString |  |
| PdxGuiWidget | GetTooltipMetaTexture |  | unknown |  |
| PdxGuiWidget | GetTooltipMetaTitle |  | CString |  |
| PdxGuiWidget | HasListFromTextContext |  | bool |  |
| PdxGuiWidget | HasTooltipMeta |  | bool |  |
| PdxGuiWidget | HasTooltipMetaGameConcept |  | bool |  |
| PdxGuiWidget | HasTooltipMetaTitle |  | bool |  |
| PdxGuiWidget | HasUIAction |  | bool |  |
| PdxGuiWidget | Hide |  | void |  |
| PdxGuiWidget | InterruptAnimation | 1. unknown | void |  |
| PdxGuiWidget | InterruptThenTriggerAnimation | 1. unknown 2. unknown | void |  |
| PdxGuiWidget | IsIndexInParentLast |  | bool |  |
| PdxGuiWidget | IsKeyHoveredByWidgetName |  | bool |  |
| PdxGuiWidget | IsMouseOver |  | bool |  |
| PdxGuiWidget | IsNestedTooltip |  | bool |  |
| PdxGuiWidget | IsTextContextEmpty |  | bool |  |
| PdxGuiWidget | IsTooltipLocked |  | bool |  |
| PdxGuiWidget | IsVisible |  | bool |  |
| PdxGuiWidget | NamePathContains | 1. unknown | bool |  |
| PdxGuiWidget | Parent |  | unknown |  |
| PdxGuiWidget | PopMapModeOverride |  | void |  |
| PdxGuiWidget | PushMapModeOverride | 1. unknown | void |  |
| PdxGuiWidget | Self |  | PdxGuiWidget |  |
| PdxGuiWidget | SetAlertSmoothPositioning | 1. unknown | void |  |
| PdxGuiWidget | SetBattleSubUnitHover | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightArea | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightBuilding | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightCabinetActionTarget | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightCharacter | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightCountry | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightCulture | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightCultureGroup | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightDialect | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightDisease | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightDiseaseOutbreak | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightDynasty | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightFort | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightGoods | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightInstitution | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightInternationalOrganization | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightLanguage | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightLanguageFamily | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightLocation | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightLocationList | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightLocationSet | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightLocations | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightLocationsRef | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightMarket | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightMercenary | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightOwnGoods | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightPrivateer | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightProvince | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightProvinceDefinition | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightRebel | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightRegion | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightReligion | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightReligionGroup | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightTrade | 1. unknown | void |  |
| PdxGuiWidget | SetHighlightWar | 1. unknown | void |  |
| PdxGuiWidget | SetVisible | 1. unknown | void |  |
| PdxGuiWidget | Show |  | void |  |
| PdxGuiWidget | StackBottom |  | void |  |
| PdxGuiWidget | StackTop |  | void |  |
| PdxGuiWidget | ToggleContextMenu |  | void |  |
| PdxGuiWidget | TriggerAnimation | 1. unknown | void |  |
| PdxSetting | AccessSelf |  | PdxSetting |  |
| PdxSetting | AccessSetting |  | unknown |  |
| PdxSetting | ChangesNotSaved |  | bool |  |
| PdxSetting | GetSetting |  | unknown |  |
| PdxSetting | GetTitle |  | CUTF8String |  |
| PdxSetting | GetTooltip |  | CUTF8String |  |
| PdxSetting | Self |  | PdxSetting |  |
| PdxSettingsWindow | AccessSelf |  | PdxSettingsWindow |  |
| PdxSettingsWindow | AllowApply |  | bool |  |
| PdxSettingsWindow | AllowRestore |  | bool |  |
| PdxSettingsWindow | AppliedOnRestart |  | bool |  |
| PdxSettingsWindow | HasChanged |  | bool |  |
| PdxSettingsWindow | OnApply |  | void |  |
| PdxSettingsWindow | OnCancel |  | void |  |
| PdxSettingsWindow | OnRestore |  | void |  |
| PdxSettingsWindow | OnSave |  | void |  |
| PdxSettingsWindow | Self |  | PdxSettingsWindow |  |
| PdxSettingsWindowCategory | AccessSelf |  | PdxSettingsWindowCategory |  |
| PdxSettingsWindowCategory | GetName |  | CString |  |
| PdxSettingsWindowCategory | Self |  | PdxSettingsWindowCategory |  |
| PdxValueSetting | AccessSelf |  | PdxValueSetting |  |
| PdxValueSetting | GetFormattedPendingValue | 1. unknown | CString |  |
| PdxValueSetting | GetPendingValue | 1. unknown | float |  |
| PdxValueSetting | HasValueChanged | 1. unknown | bool |  |
| PdxValueSetting | Self |  | PdxValueSetting |  |
| PeaceOfferCategory | AccessSelf |  | PeaceOfferCategory |  |
| PeaceOfferCategory | CountryHasTreaties | 1. unknown | bool |  |
| PeaceOfferCategory | Expand |  | void |  |
| PeaceOfferCategory | GetName |  | CString |  |
| PeaceOfferCategory | GetTreaties |  | unknown |  |
| PeaceOfferCategory | HasPossibleTreaties |  | bool |  |
| PeaceOfferCategory | HasSelectedTreaties |  | bool |  |
| PeaceOfferCategory | IsExpanded |  | bool |  |
| PeaceOfferCategory | IsSeizeLand |  | bool |  |
| PeaceOfferCategory | OnClick |  | void |  |
| PeaceOfferCategory | Self |  | PeaceOfferCategory |  |
| PeaceOfferCategory | ToggleAllExpand |  | void |  |
| PeaceOfferLateralView | AccessSelf |  | PeaceOfferLateralView |  |
| PeaceOfferLateralView | AnnexAllLocations |  | void |  |
| PeaceOfferLateralView | CanAnnexAllLocations |  | bool |  |
| PeaceOfferLateralView | CanChangeOffer |  | bool |  |
| PeaceOfferLateralView | CanResetPeaceOffer |  | bool |  |
| PeaceOfferLateralView | CountryHasCategories | 1. unknown | bool |  |
| PeaceOfferLateralView | GetAcceptanceFrame |  | int32 |  |
| PeaceOfferLateralView | GetAcceptanceTooltip |  | CString |  |
| PeaceOfferLateralView | GetAllTreaties |  | unknown |  |
| PeaceOfferLateralView | GetAmountWarScoreCountries |  | int32 |  |
| PeaceOfferLateralView | GetBalance |  | CFixedPoint |  |
| PeaceOfferLateralView | GetBaseAntagonism |  | CString |  |
| PeaceOfferLateralView | GetCanSendOffer |  | CString |  |
| PeaceOfferLateralView | GetCategories |  | unknown |  |
| PeaceOfferLateralView | GetCategoriesSortSearch |  | unknown |  |
| PeaceOfferLateralView | GetCountriesWithTreaties |  | unknown |  |
| PeaceOfferLateralView | GetEnemyParticipants |  | unknown |  |
| PeaceOfferLateralView | GetFriendlyParticipants |  | unknown |  |
| PeaceOfferLateralView | GetMaxAntagonism |  | CString |  |
| PeaceOfferLateralView | GetMinAntagonism |  | CString |  |
| PeaceOfferLateralView | GetPeaceOfferNegativeReasons |  | CFixedPoint |  |
| PeaceOfferLateralView | GetPeaceOfferPositiveReasons |  | CFixedPoint |  |
| PeaceOfferLateralView | GetPlayer |  | unknown |  |
| PeaceOfferLateralView | GetTitle |  | CString |  |
| PeaceOfferLateralView | GetTotalPeaceOfferCost |  | CFixedPoint |  |
| PeaceOfferLateralView | GetTotalPeaceOfferReasons |  | CFixedPoint |  |
| PeaceOfferLateralView | GetTotalPeaceOfferReasonsBreakdown |  | CString |  |
| PeaceOfferLateralView | GetTotalWarScoreCost |  | int32 |  |
| PeaceOfferLateralView | GetWarScore |  | CFixedPoint |  |
| PeaceOfferLateralView | GetWarScoreBreakdown |  | CString |  |
| PeaceOfferLateralView | GetWarScoreTreatiesForCategory | 1. unknown | unknown |  |
| PeaceOfferLateralView | HasAnnexTreaty |  | bool |  |
| PeaceOfferLateralView | HasLocationFriendlyCores | 1. unknown | bool |  |
| PeaceOfferLateralView | HasNegativeCountryWarnings | 1. unknown | bool |  |
| PeaceOfferLateralView | HasPositiveCountryWarnings | 1. unknown | bool |  |
| PeaceOfferLateralView | HasSacrificeTreaty |  | bool |  |
| PeaceOfferLateralView | Hide |  | void |  |
| PeaceOfferLateralView | IsAntagonismCalculationDone |  | bool |  |
| PeaceOfferLateralView | IsAreaHighlighted | 1. unknown | bool |  |
| PeaceOfferLateralView | IsCountryWarSubject | 1. unknown | bool |  |
| PeaceOfferLateralView | IsDemanding |  | bool |  |
| PeaceOfferLateralView | IsLeftPanel |  | bool |  |
| PeaceOfferLateralView | IsLocationHighlighted | 1. unknown | bool |  |
| PeaceOfferLateralView | IsProvinceDefinitionHighlighted | 1. unknown | bool |  |
| PeaceOfferLateralView | IsProvinceHighlighted | 1. unknown | bool |  |
| PeaceOfferLateralView | IsRegionHighlighted | 1. unknown | bool |  |
| PeaceOfferLateralView | IsRightPanel |  | bool |  |
| PeaceOfferLateralView | IsSelectParticipantOpened | 1. unknown | bool |  |
| PeaceOfferLateralView | IsWarLeader | 1. unknown | bool |  |
| PeaceOfferLateralView | OnAcceptCountryTooltipWarnings | 1. unknown | CString |  |
| PeaceOfferLateralView | OnAcceptEnabled |  | bool |  |
| PeaceOfferLateralView | OnAcceptFinal |  | void |  |
| PeaceOfferLateralView | OnAcceptTooltip |  | CString |  |
| PeaceOfferLateralView | OnAcceptTooltipConsequences |  | CString |  |
| PeaceOfferLateralView | OnAcceptTooltipTitle |  | CString |  |
| PeaceOfferLateralView | OnAcceptTooltipWarnings |  | CString |  |
| PeaceOfferLateralView | OnDemand |  | void |  |
| PeaceOfferLateralView | OnOffer |  | void |  |
| PeaceOfferLateralView | OnResetPeaceOffer |  | void |  |
| PeaceOfferLateralView | OnSuggestPeaceOffer |  | void |  |
| PeaceOfferLateralView | Self |  | PeaceOfferLateralView |  |
| PeaceOfferLateralView | ToggleSelectParticipant | 1. unknown | void |  |
| PeaceOfferLateralView | WillBeGameOver |  | bool |  |
| PeaceOfferLateralView | WillInheritWars |  | bool |  |
| PeaceOfferLateralViewParticipant | AccessSelf |  | PeaceOfferLateralViewParticipant |  |
| PeaceOfferLateralViewParticipant | GetCountry |  | unknown |  |
| PeaceOfferLateralViewParticipant | GetSelectTooltip |  | CString |  |
| PeaceOfferLateralViewParticipant | IsSelected |  | bool |  |
| PeaceOfferLateralViewParticipant | IsWarLeader |  | bool |  |
| PeaceOfferLateralViewParticipant | Self |  | PeaceOfferLateralViewParticipant |  |
| PeaceOfferLateralViewParticipant | Toggle |  | void |  |
| PeaceOfferWarScoreTreatyGlue | AccessSelf |  | PeaceOfferWarScoreTreatyGlue |  |
| PeaceOfferWarScoreTreatyGlue | GetBaseAntagonismCaused |  | CFixedPoint |  |
| PeaceOfferWarScoreTreatyGlue | GetDecWarScoreTooltip |  | CString |  |
| PeaceOfferWarScoreTreatyGlue | GetIcon |  | unknown |  |
| PeaceOfferWarScoreTreatyGlue | GetIncWarScoreTooltip |  | CString |  |
| PeaceOfferWarScoreTreatyGlue | GetInflationFromTreaty |  | CString |  |
| PeaceOfferWarScoreTreatyGlue | GetTitle |  | CString |  |
| PeaceOfferWarScoreTreatyGlue | GetTooltip |  | CString |  |
| PeaceOfferWarScoreTreatyGlue | GetValue |  | CString |  |
| PeaceOfferWarScoreTreatyGlue | GetWarScore |  | CString |  |
| PeaceOfferWarScoreTreatyGlue | IsDecWarScoreEnabled |  | bool |  |
| PeaceOfferWarScoreTreatyGlue | IsIncWarScoreEnabled |  | bool |  |
| PeaceOfferWarScoreTreatyGlue | IsVisible |  | bool |  |
| PeaceOfferWarScoreTreatyGlue | IsWarScoreTreaty |  | bool |  |
| PeaceOfferWarScoreTreatyGlue | OnDecLeftClick |  | void |  |
| PeaceOfferWarScoreTreatyGlue | OnDecRightClick |  | void |  |
| PeaceOfferWarScoreTreatyGlue | OnIncLeftClick |  | void |  |
| PeaceOfferWarScoreTreatyGlue | OnIncRightClick |  | void |  |
| PeaceOfferWarScoreTreatyGlue | OnRightClick | 1. unknown | void |  |
| PeaceOfferWarScoreTreatyGlue | Self |  | PeaceOfferWarScoreTreatyGlue |  |
| PeaceTreaty | AccessSelf |  | PeaceTreaty |  |
| PeaceTreaty | GetAiDesire |  | CFixedPoint |  |
| PeaceTreaty | GetBaseAntagonismCaused |  | CFixedPoint |  |
| PeaceTreaty | GetBaseAntagonismCausedInfo |  | CString |  |
| PeaceTreaty | GetDebugAiDesireInfo |  | CString |  |
| PeaceTreaty | GetInfo |  | CString |  |
| PeaceTreaty | GetInnerCategory |  | unknown |  |
| PeaceTreaty | GetLocation |  | unknown |  |
| PeaceTreaty | GetName |  | CString |  |
| PeaceTreaty | GetShortName |  | CString |  |
| PeaceTreaty | GetWarScoreCost |  | CFixedPoint |  |
| PeaceTreaty | GetWarScoreCostInfo |  | CString |  |
| PeaceTreaty | HasInnerCategory |  | bool |  |
| PeaceTreaty | HasLocation |  | bool |  |
| PeaceTreaty | HasRelevantCountryToShowForUI |  | bool |  |
| PeaceTreaty | IsCountryRelevant | 1. unknown | bool |  |
| PeaceTreaty | IsEnabled |  | bool |  |
| PeaceTreaty | IsHalfOfMostDesired |  | bool |  |
| PeaceTreaty | IsHighlighted |  | bool |  |
| PeaceTreaty | IsMostDesired |  | bool |  |
| PeaceTreaty | IsPartiallySelected |  | bool |  |
| PeaceTreaty | IsSelected |  | bool |  |
| PeaceTreaty | NotShownInPossibleTreaties |  | bool |  |
| PeaceTreaty | OnClick |  | void |  |
| PeaceTreaty | OnHover | 1. unknown | void |  |
| PeaceTreaty | Self |  | PeaceTreaty |  |
| PeaceTreaty | ShouldShowDesire |  | bool |  |
| PeaceTreaty | WillInheritWars |  | bool |  |
| PeopleDynastyItem | AccessSelf |  | PeopleDynastyItem |  |
| PeopleDynastyItem | Self |  | PeopleDynastyItem |  |
| PeoplePopItem | AccessSelf |  | PeoplePopItem |  |
| PeoplePopItem | GetEmploymentInfo |  | CString |  |
| PeoplePopItem | GetLiteracy |  | CFixedPoint |  |
| PeoplePopItem | GetLiteracyInfo |  | CString |  |
| PeoplePopItem | GetUnEmployed |  | CString |  |
| PeoplePopItem | GetUnEmployedPercentage |  | CFixedPoint |  |
| PeoplePopItem | Self |  | PeoplePopItem |  |
| PeopleRebelItem | AccessSelf |  | PeopleRebelItem |  |
| PeopleRebelItem | Self |  | PeopleRebelItem |  |
| PerformActionParams | AccessSelf |  | PerformActionParams |  |
| PerformActionParams | Self |  | PerformActionParams |  |
| Periphora | AccessSelf |  | Periphora |  |
| Periphora | GetName |  | CString |  |
| Periphora | GetTooltip |  | CString |  |
| Periphora | Self |  | Periphora |  |
| PinCollection | AccessSelf |  | PinCollection |  |
| PinCollection | IsPinned | 1. unknown | bool |  |
| PinCollection | IsPinnedDefaultNo | 1. unknown | bool |  |
| PinCollection | IsPinnedWithDefaultValue | 1. unknown 2. unknown | bool |  |
| PinCollection | Pin | 1. unknown | void |  |
| PinCollection | Self |  | PinCollection |  |
| PinCollection | Toggle | 1. unknown | void |  |
| PinCollection | ToggleDefaultNo | 1. unknown | void |  |
| PinCollection | ToggleWithDefaultValue | 1. unknown 2. unknown | void |  |
| PinCollection | Unpin | 1. unknown | void |  |
| PinningManager | AccessSelf |  | PinningManager |  |
| PinningManager | Self |  | PinningManager |  |
| PlayStyleItem | AccessSelf |  | PlayStyleItem |  |
| PlayStyleItem | GetPlayStyle |  | unknown |  |
| PlayStyleItem | IsPlayStyleEnabled |  | bool |  |
| PlayStyleItem | IsValid |  | bool |  |
| PlayStyleItem | Self |  | PlayStyleItem |  |
| PlayStyleItem | ShowPlayStyleMission |  | void |  |
| PlayStyleItem | StartWalkthrough |  | void |  |
| Playable | AccessSelf |  | Playable |  |
| Playable | GetJominiPlayableCountryRef |  | unknown |  |
| Playable | Self |  | Playable |  |
| PlayerConstruction | AccessSelf |  | PlayerConstruction |  |
| PlayerConstruction | Self |  | PlayerConstruction |  |
| PlayerEntryForChat | AccessSelf |  | PlayerEntryForChat |  |
| PlayerEntryForChat | GetCountry |  | unknown |  |
| PlayerEntryForChat | GetName |  | CString |  |
| PlayerEntryForChat | OnClick |  | void |  |
| PlayerEntryForChat | Self |  | PlayerEntryForChat |  |
| PlayerJoinRequest | Accept |  | void |  |
| PlayerJoinRequest | AccessSelf |  | PlayerJoinRequest |  |
| PlayerJoinRequest | GetPlayerName |  | CString |  |
| PlayerJoinRequest | IsChecked |  | bool |  |
| PlayerJoinRequest | Reject |  | void |  |
| PlayerJoinRequest | Self |  | PlayerJoinRequest |  |
| PlayerJoinRequest | Toggle |  | void |  |
| PlayerModifiersLateralView | AccessSelf |  | PlayerModifiersLateralView |  |
| PlayerModifiersLateralView | GetModifiers |  | unknown |  |
| PlayerModifiersLateralView | GetModifiersSortSearch |  | unknown |  |
| PlayerModifiersLateralView | GetPlayer |  | unknown |  |
| PlayerModifiersLateralView | IsLeftPanel |  | bool |  |
| PlayerModifiersLateralView | IsRightPanel |  | bool |  |
| PlayerModifiersLateralView | Self |  | PlayerModifiersLateralView |  |
| PlayerPlayStyleItem | AccessSelf |  | PlayerPlayStyleItem |  |
| PlayerPlayStyleItem | AreAllSystemsEnabled |  | bool |  |
| PlayerPlayStyleItem | GetAutomatedSystems |  | unknown |  |
| PlayerPlayStyleItem | GetDescription |  | CString |  |
| PlayerPlayStyleItem | GetKey |  | CString |  |
| PlayerPlayStyleItem | GetName |  | CString |  |
| PlayerPlayStyleItem | GetShortName |  | CString |  |
| PlayerPlayStyleItem | IsEnabled |  | bool |  |
| PlayerPlayStyleItem | IsName | 1. unknown | bool |  |
| PlayerPlayStyleItem | Self |  | PlayerPlayStyleItem |  |
| PlayerPlayStyleItem | Toggle |  | void |  |
| PlayerPlayStyleItem | ToggleAllSystems |  | void |  |
| PlayerProficiency | AccessSelf |  | PlayerProficiency |  |
| PlayerProficiency | GetDesc |  | CString |  |
| PlayerProficiency | GetKey |  | CString |  |
| PlayerProficiency | GetName |  | CString |  |
| PlayerProficiency | Self |  | PlayerProficiency |  |
| PlaystyleHint | AccessSelf |  | PlaystyleHint |  |
| PlaystyleHint | GetAdvice |  | CString |  |
| PlaystyleHint | Self |  | PlaystyleHint |  |
| PlaythroughItem | AccessSelf |  | PlaythroughItem |  |
| PlaythroughItem | Delete |  | void |  |
| PlaythroughItem | GetDate |  | CUTF8String |  |
| PlaythroughItem | GetDifferentVersionDesc |  | CString |  |
| PlaythroughItem | GetFlag |  | CString |  |
| PlaythroughItem | GetFullPath |  | CUTF8String |  |
| PlaythroughItem | GetIssuesDesc |  | CString |  |
| PlaythroughItem | GetItems |  | unknown |  |
| PlaythroughItem | GetMissingDLCString |  | CString |  |
| PlaythroughItem | GetMissingModsString |  | CString |  |
| PlaythroughItem | GetNumberOfSaves |  | int32 |  |
| PlaythroughItem | GetPlayerName |  | CUTF8String |  |
| PlaythroughItem | GetPlaythroughLabel |  | CString |  |
| PlaythroughItem | GetPlaythroughPlayerCountryName |  | CString |  |
| PlaythroughItem | GetRealDate |  | CUTF8String |  |
| PlaythroughItem | GetSaveLabel |  | CUTF8String |  |
| PlaythroughItem | GetVersionName |  | CUTF8String |  |
| PlaythroughItem | HasConfirmation |  | bool |  |
| PlaythroughItem | HasIssues |  | bool |  |
| PlaythroughItem | HasMissingDLC |  | bool |  |
| PlaythroughItem | HasMissingMods |  | bool |  |
| PlaythroughItem | IsCloudSave |  | bool |  |
| PlaythroughItem | IsDifferentVersion |  | bool |  |
| PlaythroughItem | IsEnabled |  | bool |  |
| PlaythroughItem | IsIncompatible |  | bool |  |
| PlaythroughItem | IsIronman |  | bool |  |
| PlaythroughItem | IsMultiplayer |  | bool |  |
| PlaythroughItem | IsSelected |  | bool |  |
| PlaythroughItem | LoadLatest |  | void |  |
| PlaythroughItem | ReplayLatest |  | void |  |
| PlaythroughItem | Select |  | void |  |
| PlaythroughItem | Self |  | PlaythroughItem |  |
| PlotLine | AccessSelf |  | PlotLine |  |
| PlotLine | GetInterpolatedIndexNearMouse |  | float |  |
| PlotLine | GetInterpolatedValueNearMouse |  | CVector2f |  |
| PlotLine | GetPlotRect |  | CPdxFloatRect |  |
| PlotLine | GetSnappedIndexNearMouse |  | int32 |  |
| PlotLine | GetSnappedValueNearMouse |  | CVector2f |  |
| PlotLine | HasPositionNearMouse |  | bool |  |
| PlotLine | Self |  | PlotLine |  |
| Policy | AccessSelf |  | Policy |  |
| Policy | GetDesc |  | CString |  |
| Policy | GetEffectOnlyText |  | CString |  |
| Policy | GetEffectText |  | CString |  |
| Policy | GetEffectTextWithContext | 1. unknown | CString |  |
| Policy | GetEffectTextWithContextShort | 1. unknown | CString |  |
| Policy | GetImplementableTooltip |  | CString |  |
| Policy | GetLaw |  | unknown |  |
| Policy | GetModifierText |  | CString |  |
| Policy | GetModifierTextFor | 1. unknown | CString |  |
| Policy | GetName |  | CString |  |
| Policy | GetNameWithContext | 1. unknown | CString |  |
| Policy | GetNameWithNoTooltip |  | CString |  |
| Policy | GetOnPayPriceDesc | 1. unknown | CString |  |
| Policy | GetPolicyPartOfDescription |  | CString |  |
| Policy | GetPotentialTriggerDesc |  | CString |  |
| Policy | GetRuleChanges |  | CString |  |
| Policy | GetTooltip |  | CString |  |
| Policy | GetTooltipWithContext | 1. unknown | CString |  |
| Policy | HasPotential |  | bool |  |
| Policy | IsUnique |  | bool |  |
| Policy | MakeScope |  | Scope | Jomini Script System |
| Policy | MeetsPotential |  | bool |  |
| Policy | Self |  | Policy |  |
| PolicyWithContextWrap | AccessSelf |  | PolicyWithContextWrap |  |
| PolicyWithContextWrap | GetInternationalOrganization |  | unknown |  |
| PolicyWithContextWrap | GetPolicy |  | unknown |  |
| PolicyWithContextWrap | GetTooltip |  | CString |  |
| PolicyWithContextWrap | Self |  | PolicyWithContextWrap |  |
| Pop | AccessSelf |  | Pop |  |
| Pop | CalcCharacterChance | 1. unknown | CFixedPoint |  |
| Pop | GetCulture |  | unknown |  |
| Pop | GetDebugText |  | CString |  |
| Pop | GetEstate |  | unknown |  |
| Pop | GetEstateType |  | unknown |  |
| Pop | GetGoodsAccess |  | CFixedPoint |  |
| Pop | GetGoodsInformation |  | CString |  |
| Pop | GetLeviesInformation |  | CString |  |
| Pop | GetLiteracy |  | CFixedPoint |  |
| Pop | GetLiteracyChangeInfo |  | CString |  |
| Pop | GetLiteracyInfo |  | CString |  |
| Pop | GetLiteracyLabel |  | CString |  |
| Pop | GetLocalLiteracyImpactInfo |  | CString |  |
| Pop | GetMaxLiteracyInfo |  | CString |  |
| Pop | GetMissingGoodsInfo |  | CString |  |
| Pop | GetName |  | CString |  |
| Pop | GetNameWithNoTooltip |  | CString |  |
| Pop | GetNeedsScaling |  | CString |  |
| Pop | GetOwner |  | unknown |  |
| Pop | GetOwnerOrLocationOwner |  | unknown |  |
| Pop | GetRebel |  | unknown |  |
| Pop | GetReligion |  | unknown |  |
| Pop | GetSatisfaction |  | CFixedPoint |  |
| Pop | GetSatisfactionInfo |  | CString |  |
| Pop | GetSatisfactionLabel |  | CString |  |
| Pop | GetSize |  | CString |  |
| Pop | GetType |  | unknown |  |
| Pop | GetUncappedSatisfaction |  | CFixedPoint |  |
| Pop | HasAnyLevy |  | bool |  |
| Pop | HasEstate |  | bool |  |
| Pop | HasLevies | 1. unknown | bool |  |
| Pop | HasOwner |  | bool |  |
| Pop | HasOwnerOrLocationOwner |  | bool |  |
| Pop | HasRebel |  | bool |  |
| Pop | IsRebelLocationGoingToRevolt |  | bool |  |
| Pop | MakeScope |  | Scope | Jomini Script System |
| Pop | Self |  | Pop |  |
| PopCultureItem | AccessSelf |  | PopCultureItem |  |
| PopCultureItem | GetAbsoluteSize |  | CString |  |
| PopCultureItem | GetColor |  | CVector4f |  |
| PopCultureItem | GetCulture |  | unknown |  |
| PopCultureItem | GetName |  | CString |  |
| PopCultureItem | GetPercentage |  | float |  |
| PopCultureItem | Self |  | PopCultureItem |  |
| PopEditor | AccessSelf |  | PopEditor |  |
| PopEditor | GetCultureName |  | CString |  |
| PopEditor | GetEntries |  | unknown |  |
| PopEditor | GetPopName |  | CString |  |
| PopEditor | GetReligionName |  | CString |  |
| PopEditor | Reset |  | void |  |
| PopEditor | Self |  | PopEditor |  |
| PopEditor | ShowCulture |  | void |  |
| PopEditor | ShowPop |  | void |  |
| PopEditor | ShowReligion |  | void |  |
| PopEntry | AccessSelf |  | PopEntry |  |
| PopEntry | GetCulture |  | unknown |  |
| PopEntry | GetPercentage |  | CFixedPoint |  |
| PopEntry | GetReligion |  | unknown |  |
| PopEntry | GetSize |  | CFixedPoint |  |
| PopEntry | Remove |  | void |  |
| PopEntry | RetrieveSize | 1. unknown | void |  |
| PopEntry | SelectCulture | 1. unknown | void |  |
| PopEntry | SelectReligion | 1. unknown | void |  |
| PopEntry | Self |  | PopEntry |  |
| PopPoliticsItem | AccessSelf |  | PopPoliticsItem |  |
| PopPoliticsItem | GetColor |  | CVector4f |  |
| PopPoliticsItem | GetLocation |  | unknown |  |
| PopPoliticsItem | GetName |  | CString |  |
| PopPoliticsItem | GetPercentage |  | float |  |
| PopPoliticsItem | GetPopulation |  | CString |  |
| PopPoliticsItem | GetTooltip |  | CString |  |
| PopPoliticsItem | HasLocation |  | bool |  |
| PopPoliticsItem | Self |  | PopPoliticsItem |  |
| PopReligionItem | AccessSelf |  | PopReligionItem |  |
| PopReligionItem | GetAbsoluteSize |  | CString |  |
| PopReligionItem | GetColor |  | CVector4f |  |
| PopReligionItem | GetName |  | CString |  |
| PopReligionItem | GetPercentage |  | float |  |
| PopReligionItem | GetReligion |  | unknown |  |
| PopReligionItem | Self |  | PopReligionItem |  |
| PopSetupEntry | AccessSelf |  | PopSetupEntry |  |
| PopSetupEntry | GetName |  | CString |  |
| PopSetupEntry | OnClick |  | void |  |
| PopSetupEntry | Self |  | PopSetupEntry |  |
| PopTaxItem | AccessSelf |  | PopTaxItem |  |
| PopTaxItem | GetColor |  | CVector4f |  |
| PopTaxItem | GetLocation |  | unknown |  |
| PopTaxItem | GetName |  | CString |  |
| PopTaxItem | GetPercentage |  | float |  |
| PopTaxItem | GetPopulation |  | CString |  |
| PopTaxItem | GetTooltip |  | CString |  |
| PopTaxItem | HasLocation |  | bool |  |
| PopTaxItem | Self |  | PopTaxItem |  |
| PopType | AccessSelf |  | PopType |  |
| PopType | GetColor |  | CVector4f |  |
| PopType | GetDesc |  | CString |  |
| PopType | GetIcon |  | CString |  |
| PopType | GetKey |  | CString |  |
| PopType | GetMapColor |  | unknown |  |
| PopType | GetName |  | CString |  |
| PopType | GetNameWithNoTooltip |  | unknown |  |
| PopType | GetUITooltip |  | CString |  |
| PopType | HasCap |  | bool |  |
| PopType | IsBurgher |  | bool |  |
| PopType | IsClergy |  | bool |  |
| PopType | IsNoble |  | bool |  |
| PopType | IsPeasant |  | bool |  |
| PopType | IsSlaves |  | bool |  |
| PopType | IsTribesmen |  | bool |  |
| PopType | MakeScope |  | Scope | Jomini Script System |
| PopType | Self |  | PopType |  |
| PopTypeEntry | AccessSelf |  | PopTypeEntry |  |
| PopTypeEntry | AddNew |  | void |  |
| PopTypeEntry | GetPercentage |  | CFixedPoint |  |
| PopTypeEntry | GetPopEntries |  | unknown |  |
| PopTypeEntry | GetPopType |  | unknown |  |
| PopTypeEntry | GetPopulation |  | CFixedPoint |  |
| PopTypeEntry | IsToggled |  | bool |  |
| PopTypeEntry | RetrievePopulation | 1. unknown | void |  |
| PopTypeEntry | Self |  | PopTypeEntry |  |
| PopTypeEntry | Toggle |  | void |  |
| PopTypeItem | AccessSelf |  | PopTypeItem |  |
| PopTypeItem | GetAbsoluteSize |  | CString |  |
| PopTypeItem | GetColor |  | CVector4f |  |
| PopTypeItem | GetName |  | CString |  |
| PopTypeItem | GetPercentage |  | float |  |
| PopTypeItem | Self |  | PopTypeItem |  |
| PopsCountryItem | AccessSelf |  | PopsCountryItem |  |
| PopsCountryItem | GetCountry |  | unknown |  |
| PopsCountryItem | GetProvinces |  | unknown |  |
| PopsCountryItem | IsToggled |  | bool |  |
| PopsCountryItem | OnClick |  | void |  |
| PopsCountryItem | Self |  | PopsCountryItem |  |
| PopsCountryItem | Toggle |  | void |  |
| PopsLocationItem | AccessSelf |  | PopsLocationItem |  |
| PopsLocationItem | GetLocation |  | unknown |  |
| PopsLocationItem | OnClick |  | void |  |
| PopsLocationItem | Self |  | PopsLocationItem |  |
| PopsOverview | AccessSelf |  | PopsOverview |  |
| PopsOverview | GetCountries |  | unknown |  |
| PopsOverview | GetCultures |  | unknown |  |
| PopsOverview | GetPlayer |  | unknown |  |
| PopsOverview | GetPopTypes |  | unknown |  |
| PopsOverview | GetPops |  | unknown |  |
| PopsOverview | GetPopsSortSearch |  | unknown |  |
| PopsOverview | GetReligions |  | unknown |  |
| PopsOverview | GetTitle |  | CString |  |
| PopsOverview | IsLeftPanel |  | bool |  |
| PopsOverview | IsRightPanel |  | bool |  |
| PopsOverview | Self |  | PopsOverview |  |
| PopsPiechartWidget | AccessSelf |  | PopsPiechartWidget |  |
| PopsPiechartWidget | GetBottom5Locations |  | CString |  |
| PopsPiechartWidget | GetCultures |  | unknown |  |
| PopsPiechartWidget | GetLocationsByGrowth |  | unknown |  |
| PopsPiechartWidget | GetPolitics |  | unknown |  |
| PopsPiechartWidget | GetPopTypes |  | unknown |  |
| PopsPiechartWidget | GetReligions |  | unknown |  |
| PopsPiechartWidget | GetTax |  | unknown |  |
| PopsPiechartWidget | GetTop5Locations |  | CString |  |
| PopsPiechartWidget | Self |  | PopsPiechartWidget |  |
| PopsProvinceItem | AccessSelf |  | PopsProvinceItem |  |
| PopsProvinceItem | GetLocations |  | unknown |  |
| PopsProvinceItem | GetProvince |  | unknown |  |
| PopsProvinceItem | IsToggled |  | bool |  |
| PopsProvinceItem | OnClick |  | void |  |
| PopsProvinceItem | Self |  | PopsProvinceItem |  |
| PopsProvinceItem | Toggle |  | void |  |
| Population | AccessSelf |  | Population |  |
| Population | GetCount | 1. unknown | CString |  |
| Population | GetGrowthFromKey | 1. unknown | CString |  |
| Population | GetMigrationChange |  | CString |  |
| Population | Self |  | Population |  |
| PopulationConfiguration | AccessSelf |  | PopulationConfiguration |  |
| PopulationConfiguration | CanEditPopulation |  | bool |  |
| PopulationConfiguration | GetPopTypes |  | unknown |  |
| PopulationConfiguration | GetPopulation |  | CFixedPoint |  |
| PopulationConfiguration | RetrievePopulation | 1. unknown | void |  |
| PopulationConfiguration | Self |  | PopulationConfiguration |  |
| PortEditor | AccessSelf |  | PortEditor |  |
| PortEditor | GetInfo |  | CString |  |
| PortEditor | GetSelectedLocationText |  | CString |  |
| PortEditor | HasLand |  | bool |  |
| PortEditor | HasPort |  | bool |  |
| PortEditor | Self |  | PortEditor |  |
| PortMarker | AccessSelf |  | PortMarker |  |
| PortMarker | CanMoveNavyHere |  | bool |  |
| PortMarker | GetBackgroundFrame |  | int32 |  |
| PortMarker | GetLabel |  | CString |  |
| PortMarker | GetLocation |  | unknown |  |
| PortMarker | GetShipsInfo |  | CString |  |
| PortMarker | GetTooltip |  | CString |  |
| PortMarker | HasVisibleShips |  | bool |  |
| PortMarker | MoveNavyHere |  | void |  |
| PortMarker | OnClick |  | void |  |
| PortMarker | Self |  | PortMarker |  |
| PortMarker | ShouldBeHighlighted |  | bool |  |
| PortMarker | ShouldBeShown |  | bool |  |
| Portrait3dView | AccessSelf |  | Portrait3dView |  |
| Portrait3dView | GetAnimationTooltip |  | CString |  |
| Portrait3dView | GetPortraitContext |  | unknown |  |
| Portrait3dView | GetPortraitEntity | 1. unknown | unknown |  |
| Portrait3dView | SaveScreenshot |  | void |  |
| Portrait3dView | Self |  | Portrait3dView |  |
| PortraitDataContext | AccessSelf |  | PortraitDataContext |  |
| PortraitDataContext | GetName |  | CString |  |
| PortraitDataContext | Self |  | PortraitDataContext |  |
| PortraitEditorAnimationItem | AccessSelf |  | PortraitEditorAnimationItem |  |
| PortraitEditorAnimationItem | GetName |  | CString |  |
| PortraitEditorAnimationItem | Self |  | PortraitEditorAnimationItem |  |
| PortraitEditorWindow | AccessSelf |  | PortraitEditorWindow |  |
| PortraitEditorWindow | CanOptimize |  | bool |  |
| PortraitEditorWindow | GetAge |  | int32 |  |
| PortraitEditorWindow | GetAgePercent |  | float |  |
| PortraitEditorWindow | GetAnimationItems |  | unknown |  |
| PortraitEditorWindow | GetAnimationTooltip | 1. unknown | CString |  |
| PortraitEditorWindow | GetCameraName |  | CString |  |
| PortraitEditorWindow | GetCurrentAnimationFileDesc |  | CString |  |
| PortraitEditorWindow | GetCurrentCameraFileDesc |  | CString |  |
| PortraitEditorWindow | GetCurrentEnvironmentFileDesc |  | CString |  |
| PortraitEditorWindow | GetCurrentEthnicityFileDesc |  | CString |  |
| PortraitEditorWindow | GetCurrentGeneAccessoryString |  | CString |  |
| PortraitEditorWindow | GetCurrentGeneFileDesc |  | CString |  |
| PortraitEditorWindow | GetDNA |  | CString |  |
| PortraitEditorWindow | GetEnvironmentName |  | CString |  |
| PortraitEditorWindow | GetPortraitTexture | 1. unknown | unknown |  |
| PortraitEditorWindow | GetSelectedAnimationIndex |  | CVector2i |  |
| PortraitEditorWindow | GetSelectedGeneTemplateColorX |  | float |  |
| PortraitEditorWindow | GetSelectedGeneTemplateColorY |  | float |  |
| PortraitEditorWindow | GetSelectedGeneTemplateStrength |  | float |  |
| PortraitEditorWindow | GetSliderMaxValue |  | float |  |
| PortraitEditorWindow | GetSliderMinValue |  | float |  |
| PortraitEditorWindow | HasAnySliders |  | bool |  |
| PortraitEditorWindow | HasPoses |  | bool |  |
| PortraitEditorWindow | HasSubGenes |  | bool |  |
| PortraitEditorWindow | IsCurrentContentTab | 1. unknown | bool |  |
| PortraitEditorWindow | IsSelectedAccessoryGene |  | bool |  |
| PortraitEditorWindow | IsSelectedColorGene |  | bool |  |
| PortraitEditorWindow | IsSelectedMorphGene |  | bool |  |
| PortraitEditorWindow | IsSliderMode | 1. unknown | bool |  |
| PortraitEditorWindow | IsSliderPortraitType | 1. unknown | bool |  |
| PortraitEditorWindow | OnAgeChanged |  | void |  |
| PortraitEditorWindow | OnChangeAnimationItemLeft |  | void |  |
| PortraitEditorWindow | OnChangeAnimationItemRight |  | void |  |
| PortraitEditorWindow | OnChangeEthnicityLeft |  | void |  |
| PortraitEditorWindow | OnChangeEthnicityRight |  | void |  |
| PortraitEditorWindow | OnChangeGeneLeft |  | void |  |
| PortraitEditorWindow | OnChangeGeneRight |  | void |  |
| PortraitEditorWindow | OnChangePoseItemLeft |  | void |  |
| PortraitEditorWindow | OnChangePoseItemRight |  | void |  |
| PortraitEditorWindow | OnChangeSubGeneItemLeft |  | void |  |
| PortraitEditorWindow | OnChangeSubGeneItemRight |  | void |  |
| PortraitEditorWindow | OnCopyDNA |  | void |  |
| PortraitEditorWindow | OnCopyPersistentPortraitInfo | 1. unknown | void |  |
| PortraitEditorWindow | OnGenerateFromEthnicity |  | void |  |
| PortraitEditorWindow | OnGenerateFromEthnicityExcept |  | void |  |
| PortraitEditorWindow | OnNextCamera |  | void |  |
| PortraitEditorWindow | OnNextEnvironment |  | void |  |
| PortraitEditorWindow | OnPasteDNA |  | void |  |
| PortraitEditorWindow | OnPastePersistentPortraitInfo |  | void |  |
| PortraitEditorWindow | OnPreviousCamera |  | void |  |
| PortraitEditorWindow | OnPreviousEnvironment |  | void |  |
| PortraitEditorWindow | OnRandomizePortraitId |  | void |  |
| PortraitEditorWindow | OnReloadAssets |  | void |  |
| PortraitEditorWindow | OnReloadColorPalettes |  | void |  |
| PortraitEditorWindow | OnReloadDecals |  | void |  |
| PortraitEditorWindow | OnResetDNA |  | void |  |
| PortraitEditorWindow | OnRestartPortrait |  | void |  |
| PortraitEditorWindow | OnRunTextureOptimization |  | void |  |
| PortraitEditorWindow | Open3dView | 1. unknown | void |  |
| PortraitEditorWindow | OpenCurrentAnimationFile |  | void |  |
| PortraitEditorWindow | OpenCurrentCameraFile |  | void |  |
| PortraitEditorWindow | OpenCurrentEnvironmentFile |  | void |  |
| PortraitEditorWindow | OpenCurrentEthnicityFile |  | void |  |
| PortraitEditorWindow | OpenCurrentGeneFile |  | void |  |
| PortraitEditorWindow | ResetSliders |  | void |  |
| PortraitEditorWindow | Self |  | PortraitEditorWindow |  |
| PortraitEditorWindow | SetContentTab | 1. unknown | void |  |
| PortraitEditorWindow | SetSelectedAnimation |  | void |  |
| PortraitEditorWindow | SetSliderMode | 1. unknown | void |  |
| PortraitEditorWindow | SetSliderPortraitType | 1. unknown | void |  |
| PortraitTooltip | AccessSelf |  | PortraitTooltip |  |
| PortraitTooltip | Self |  | PortraitTooltip |  |
| PossibleDisease | AccessSelf |  | PossibleDisease |  |
| PossibleDisease | GetAffectedCountries |  | int32 |  |
| PossibleDisease | GetAffectedCountryLocations |  | int32 |  |
| PossibleDisease | GetAffectedCountryLocationsInfo |  | CString |  |
| PossibleDisease | GetCountryNumOutbreaks |  | int32 |  |
| PossibleDisease | GetDisease |  | unknown |  |
| PossibleDisease | GetName |  | CString |  |
| PossibleDisease | GetNumOutbreaks |  | int32 |  |
| PossibleDisease | GetOutbreakItems |  | unknown |  |
| PossibleDisease | GetPlayerDeathUnitsInfo |  | CString |  |
| PossibleDisease | GetPlayerDeathsInfo |  | CString |  |
| PossibleDisease | GetWorldDeathsInfo |  | CString |  |
| PossibleDisease | IsCountryAffected |  | bool |  |
| PossibleDisease | IsEnvironmental |  | bool |  |
| PossibleDisease | IsExpanded |  | bool |  |
| PossibleDisease | Self |  | PossibleDisease |  |
| PossibleDisease | Toggle |  | void |  |
| PossibleExplorationItem | AccessSelf |  | PossibleExplorationItem |  |
| PossibleExplorationItem | GetExplorationTimeInfo |  | CString |  |
| PossibleExplorationItem | GetExplorationTimeMonths |  | CFixedPoint |  |
| PossibleExplorationItem | GetMonthlyCost |  | CFixedPoint |  |
| PossibleExplorationItem | GetMonthlyCostInfo |  | CString |  |
| PossibleExplorationItem | HasCharacter |  | bool |  |
| PossibleExplorationItem | HasExploration |  | bool |  |
| PossibleExplorationItem | HasLiveExploration |  | bool |  |
| PossibleExplorationItem | IsStalled |  | bool |  |
| PossibleExplorationItem | OnMouseEnter | 1. unknown | void |  |
| PossibleExplorationItem | OnMouseLeave | 1. unknown | void |  |
| PossibleExplorationItem | Self |  | PossibleExplorationItem |  |
| PossibleItem | AccessSelf |  | PossibleItem |  |
| PossibleItem | CanDecrease |  | bool |  |
| PossibleItem | CanDecreaseTT |  | CString |  |
| PossibleItem | CanIncrease |  | bool |  |
| PossibleItem | CanIncreaseTT |  | CString |  |
| PossibleItem | CanStart |  | bool |  |
| PossibleItem | CanStartInfo |  | CString |  |
| PossibleItem | DecreaseTrade | 1. unknown | void |  |
| PossibleItem | EnableHighlight | 1. unknown | void |  |
| PossibleItem | GetDefault |  | float |  |
| PossibleItem | GetDesiredMerchantCapacity |  | CFixedPoint |  |
| PossibleItem | GetExistingTrade |  | unknown |  |
| PossibleItem | GetGoods |  | unknown |  |
| PossibleItem | GetMarket |  | unknown |  |
| PossibleItem | GetMaxMerchantCapacity |  | float |  |
| PossibleItem | GetMovingGoods |  | CFixedPoint |  |
| PossibleItem | GetPossibleSurplus |  | CFixedPoint |  |
| PossibleItem | GetPossibleSurplusInfo |  | CString |  |
| PossibleItem | GetProfit |  | CFixedPoint |  |
| PossibleItem | GetProfitTT |  | CString |  |
| PossibleItem | GetStartInfo |  | CString |  |
| PossibleItem | GetStep |  | float |  |
| PossibleItem | GetTransportCost |  | CFixedPoint |  |
| PossibleItem | IncreaseTrade | 1. unknown | void |  |
| PossibleItem | IsExistingTrade |  | bool |  |
| PossibleItem | IsExport |  | bool |  |
| PossibleItem | IsTradeInRange |  | bool |  |
| PossibleItem | IsTradeInRangeInfo |  | CString |  |
| PossibleItem | OnChanged |  | void |  |
| PossibleItem | Self |  | PossibleItem |  |
| PossibleItem | Start |  | void |  |
| PossibleLeaderItem | AccessSelf |  | PossibleLeaderItem |  |
| PossibleLeaderItem | GetCharacter |  | unknown |  |
| PossibleLeaderItem | GetMercenaryTypes |  | unknown |  |
| PossibleLeaderItem | Self |  | PossibleLeaderItem |  |
| PossiblePrivateerItem | AccessSelf |  | PossiblePrivateerItem |  |
| PossiblePrivateerItem | GetArea |  | unknown |  |
| PossiblePrivateerItem | GetHostilePrivateersTooltip |  | CString |  |
| PossiblePrivateerItem | GetPower |  | CFixedPoint |  |
| PossiblePrivateerItem | GetPowerChange |  | CFixedPoint |  |
| PossiblePrivateerItem | GetPowerInfo |  | CString |  |
| PossiblePrivateerItem | HasHostilePrivateers |  | bool |  |
| PossiblePrivateerItem | HasPrivateer |  | bool |  |
| PossiblePrivateerItem | Self |  | PossiblePrivateerItem |  |
| PossibleProductionMethods | AccessSelf |  | PossibleProductionMethods |  |
| PossibleProductionMethods | GetMethods |  | unknown |  |
| PossibleProductionMethods | GetName |  | CString |  |
| PossibleProductionMethods | Self |  | PossibleProductionMethods |  |
| PossibleProductionMethodsItem | AccessSelf |  | PossibleProductionMethodsItem |  |
| PossibleProductionMethodsItem | GetActiveInputs |  | unknown |  |
| PossibleProductionMethodsItem | GetActiveOutputs |  | unknown |  |
| PossibleProductionMethodsItem | GetPossibleProductionMethod |  | unknown |  |
| PossibleProductionMethodsItem | GetSlot |  | int32 |  |
| PossibleProductionMethodsItem | Self |  | PossibleProductionMethodsItem |  |
| PossibleRebel | AccessSelf |  | PossibleRebel |  |
| PossibleRebel | GetInfo |  | CString |  |
| PossibleRebel | GetName |  | CString |  |
| PossibleRebel | IsSelected |  | bool |  |
| PossibleRebel | OnClick |  | void |  |
| PossibleRebel | Self |  | PossibleRebel |  |
| PossibleSubUnitDefinition | AccessSelf |  | PossibleSubUnitDefinition |  |
| PossibleSubUnitDefinition | CanDec |  | bool |  |
| PossibleSubUnitDefinition | CanInc |  | bool |  |
| PossibleSubUnitDefinition | GetAvailableLimit |  | float |  |
| PossibleSubUnitDefinition | GetCanDecTooltip |  | CString |  |
| PossibleSubUnitDefinition | GetCanIncTooltip |  | CString |  |
| PossibleSubUnitDefinition | GetCulture |  | unknown |  |
| PossibleSubUnitDefinition | GetMax |  | float |  |
| PossibleSubUnitDefinition | GetPlayer |  | unknown |  |
| PossibleSubUnitDefinition | GetSelection |  | float |  |
| PossibleSubUnitDefinition | GetStep |  | float |  |
| PossibleSubUnitDefinition | GetSubUnitDefinition |  | unknown |  |
| PossibleSubUnitDefinition | GetSubUnitName |  | CString |  |
| PossibleSubUnitDefinition | OnChanged |  | void |  |
| PossibleSubUnitDefinition | Self |  | PossibleSubUnitDefinition |  |
| PossibleTrade | AccessSelf |  | PossibleTrade |  |
| PossibleTrade | CanDoTrade |  | bool |  |
| PossibleTrade | CanDoTradeTooltip |  | CString |  |
| PossibleTrade | DecreaseDesiredGoodsMoved |  | void |  |
| PossibleTrade | DecreaseDesiredGoodsMovedSlower |  | void |  |
| PossibleTrade | DecreaseDesiredMerchantCapacity |  | void |  |
| PossibleTrade | DecreaseDesiredMerchantCapacitySlower |  | void |  |
| PossibleTrade | DecreaseToMinMerchantCapacity |  | void |  |
| PossibleTrade | DoTrade |  | void |  |
| PossibleTrade | GetBuyCost |  | CFixedPoint |  |
| PossibleTrade | GetDesiredGoodsMoved |  | CFixedPoint |  |
| PossibleTrade | GetDesiredMerchantCapacity |  | CFixedPoint |  |
| PossibleTrade | GetDoTradeText |  | CString |  |
| PossibleTrade | GetDoTradeTooltip |  | CString |  |
| PossibleTrade | GetExistingTrade |  | unknown |  |
| PossibleTrade | GetFromMarket |  | unknown |  |
| PossibleTrade | GetFromMarketInfo |  | CString |  |
| PossibleTrade | GetGoods |  | unknown |  |
| PossibleTrade | GetMaintenance |  | CFixedPoint |  |
| PossibleTrade | GetMaintenanceInfo |  | CString |  |
| PossibleTrade | GetMarketNames |  | CString |  |
| PossibleTrade | GetMaxMerchantCapacity |  | CFixedPoint |  |
| PossibleTrade | GetMaxPossibleMarketSurplus |  | CFixedPoint |  |
| PossibleTrade | GetMerchantCapacityProfit |  | CFixedPoint |  |
| PossibleTrade | GetMerchantMarket |  | unknown |  |
| PossibleTrade | GetName |  | CString |  |
| PossibleTrade | GetPossibleTradeCapacityInfo |  | CString |  |
| PossibleTrade | GetProfit |  | CFixedPoint |  |
| PossibleTrade | GetProfitTooltip |  | CString |  |
| PossibleTrade | GetSellPrice |  | CFixedPoint |  |
| PossibleTrade | GetToMarket |  | unknown |  |
| PossibleTrade | GetToMarketInfo |  | CString |  |
| PossibleTrade | GetUIActions |  | unknown |  |
| PossibleTrade | IncreaseDesiredGoodsMoved |  | void |  |
| PossibleTrade | IncreaseDesiredGoodsMovedSlower |  | void |  |
| PossibleTrade | IncreaseDesiredMerchantCapacity |  | void |  |
| PossibleTrade | IncreaseDesiredMerchantCapacitySlower |  | void |  |
| PossibleTrade | IncreaseToMaxMerchantCapacity |  | void |  |
| PossibleTrade | IsExistingTrade |  | bool |  |
| PossibleTrade | PotentialBuyInfo |  | CString |  |
| PossibleTrade | PotentialSellInfo |  | CString |  |
| PossibleTrade | Self |  | PossibleTrade |  |
| PossibleTradesSelectMarket | AccessSelf |  | PossibleTradesSelectMarket |  |
| PossibleTradesSelectMarket | OnClose |  | void |  |
| PossibleTradesSelectMarket | Parent |  | unknown |  |
| PossibleTradesSelectMarket | Self |  | PossibleTradesSelectMarket |  |
| PreviewMaskTexture | AccessSelf |  | PreviewMaskTexture |  |
| PreviewMaskTexture | GetOpacity |  | float |  |
| PreviewMaskTexture | Self |  | PreviewMaskTexture |  |
| PreviewMaskTexture | SetOpacity |  | void |  |
| PreviewMaskTexture | SetOpacityStr |  | void |  |
| Price | AccessSelf |  | Price |  |
| Price | GetNameWithNoTooltip |  | CString |  |
| Price | GetPriceText | 1. unknown | CString |  |
| Price | MakeScope |  | Scope | Jomini Script System |
| Price | Self |  | Price |  |
| PriceTooltipWrap | AccessSelf |  | PriceTooltipWrap |  |
| PriceTooltipWrap | GetName |  | CString |  |
| PriceTooltipWrap | GetTooltip |  | CString |  |
| PriceTooltipWrap | Self |  | PriceTooltipWrap |  |
| Privateer | AccessSelf |  | Privateer |  |
| Privateer | GetArea |  | unknown |  |
| Privateer | GetChangeInfo |  | CString |  |
| Privateer | GetChangeInfoTitle |  | CString |  |
| Privateer | GetInfo |  | CString |  |
| Privateer | GetName |  | CString |  |
| Privateer | GetNameWithNoTooltip |  | CString |  |
| Privateer | GetOwner |  | unknown |  |
| Privateer | GetPower |  | CFixedPoint |  |
| Privateer | GetPowerChange |  | CFixedPoint |  |
| Privateer | MakeScope |  | Scope | Jomini Script System |
| Privateer | Self |  | Privateer |  |
| PrivilegeItem | AccessSelf |  | PrivilegeItem |  |
| PrivilegeItem | CanGrant |  | bool |  |
| PrivilegeItem | CanRevoke |  | bool |  |
| PrivilegeItem | GetGrantTooltip |  | CString |  |
| PrivilegeItem | GetPercentageImplemented |  | CFixedPoint |  |
| PrivilegeItem | GetPrivilege |  | unknown |  |
| PrivilegeItem | GetRevokeTooltip |  | CString |  |
| PrivilegeItem | GetUIAction |  | unknown |  |
| PrivilegeItem | HasPrivilege |  | bool |  |
| PrivilegeItem | Self |  | PrivilegeItem |  |
| ProducedOnMarketWrap | AccessSelf |  | ProducedOnMarketWrap |  |
| ProducedOnMarketWrap | GetGoods |  | unknown |  |
| ProducedOnMarketWrap | GetMarket |  | unknown |  |
| ProducedOnMarketWrap | GetName |  | CString |  |
| ProducedOnMarketWrap | Self |  | ProducedOnMarketWrap |  |
| ProductionMethod | AccessSelf |  | ProductionMethod |  |
| ProductionMethod | GetAvailableInCountryInfo | 1. unknown 2. unknown | CString |  |
| ProductionMethod | GetAvailableInfo | 1. unknown | CString |  |
| ProductionMethod | GetCountryProfit | 1. unknown 2. unknown | CFixedPoint |  |
| ProductionMethod | GetCountryProfitInfo | 1. unknown 2. unknown | CString |  |
| ProductionMethod | GetDebugProfitInfo | 1. unknown | CString |  |
| ProductionMethod | GetEffect |  | CString |  |
| ProductionMethod | GetFlavorText |  | CString |  |
| ProductionMethod | GetGoodsDemand |  | unknown |  |
| ProductionMethod | GetInputScale | 1. unknown | CFixedPoint |  |
| ProductionMethod | GetName |  | CString |  |
| ProductionMethod | GetNameWithNoTooltip |  | CString |  |
| ProductionMethod | GetOutput |  | CFixedPoint |  |
| ProductionMethod | GetProduced |  | unknown |  |
| ProductionMethod | GetProfit | 1. unknown | CFixedPoint |  |
| ProductionMethod | GetProfitInfo | 1. unknown | CString |  |
| ProductionMethod | GetSellPrice | 1. unknown | CFixedPoint |  |
| ProductionMethod | GetTooltip |  | CString |  |
| ProductionMethod | HasFlavorText |  | bool |  |
| ProductionMethod | IsAvailable | 1. unknown | bool |  |
| ProductionMethod | IsAvailableInCountry | 1. unknown 2. unknown | bool |  |
| ProductionMethod | IsInput | 1. unknown | bool |  |
| ProductionMethod | IsOutput | 1. unknown | bool |  |
| ProductionMethod | IsProducing |  | bool |  |
| ProductionMethod | IsVisibleForCountry | 1. unknown | bool |  |
| ProductionMethod | MakeScope |  | Scope | Jomini Script System |
| ProductionMethod | Self |  | ProductionMethod |  |
| ProductionMethodItem | AccessSelf |  | ProductionMethodItem |  |
| ProductionMethodItem | GetAllProductionMethods |  | unknown |  |
| ProductionMethodItem | GetAvailableInfo |  | CString |  |
| ProductionMethodItem | GetProductionMethod |  | unknown |  |
| ProductionMethodItem | GetProfit |  | CFixedPoint |  |
| ProductionMethodItem | GetProfitInfo |  | CString |  |
| ProductionMethodItem | HasProductionMethod |  | bool |  |
| ProductionMethodItem | IsAvailable |  | bool |  |
| ProductionMethodItem | OnClick |  | void |  |
| ProductionMethodItem | Self |  | ProductionMethodItem |  |
| ProductionSelectMarket | AccessSelf |  | ProductionSelectMarket |  |
| ProductionSelectMarket | OnClose |  | void |  |
| ProductionSelectMarket | Parent |  | unknown |  |
| ProductionSelectMarket | Self |  | ProductionSelectMarket |  |
| ProductionView | AccessSelf |  | ProductionView |  |
| ProductionView | FilterByMarket | 1. unknown | void |  |
| ProductionView | GetBestBuildLocation |  | unknown |  |
| ProductionView | GetBuildRankingItems |  | unknown |  |
| ProductionView | GetBuildingItems |  | unknown |  |
| ProductionView | GetBuildingTypeCategories |  | unknown |  |
| ProductionView | GetBuildingsSortSearch |  | unknown |  |
| ProductionView | GetEstateBuildingLocations |  | unknown |  |
| ProductionView | GetEstateBuildingsSortSearch |  | unknown |  |
| ProductionView | GetForeignBuildingLocations |  | unknown |  |
| ProductionView | GetForeignBuildingsSortSearch |  | unknown |  |
| ProductionView | GetPlayer |  | unknown |  |
| ProductionView | GetSelectedLocation |  | unknown |  |
| ProductionView | GetSelectedMarket |  | unknown |  |
| ProductionView | GetTitle |  | CString |  |
| ProductionView | GetTotalBuildingsUI |  | CString |  |
| ProductionView | HasBestBuildLocation |  | bool |  |
| ProductionView | IsLeftPanel |  | bool |  |
| ProductionView | IsLocationFilterEnabled |  | bool |  |
| ProductionView | IsMarketFilterEnabled |  | bool |  |
| ProductionView | IsProductionSelectMarketOpened | 1. unknown | bool |  |
| ProductionView | IsRightPanel |  | bool |  |
| ProductionView | RebuildBuildRankingItems | 1. unknown | void |  |
| ProductionView | RemoveMarketFilter |  | void |  |
| ProductionView | Self |  | ProductionView |  |
| ProductionView | ToggleProductionSelectMarket | 1. unknown | void |  |
| PropertyListCategory | AccessSelf |  | PropertyListCategory |  |
| PropertyListCategory | GetMargin |  | int32 |  |
| PropertyListCategory | GetName |  | CString |  |
| PropertyListCategory | IsEmpty |  | bool |  |
| PropertyListCategory | IsExpanded |  | bool |  |
| PropertyListCategory | IsRoot |  | bool |  |
| PropertyListCategory | Self |  | PropertyListCategory |  |
| PropertyListCategory | ToggleExpanded |  | void |  |
| PropertyListCategory | ToggleTreeExpanded |  | void |  |
| Province | AccessSelf |  | Province |  |
| Province | CanGetToFoodMarket |  | bool |  |
| Province | CanGetToFoodMarketInfo |  | CString |  |
| Province | FindFirstNonIntegrated |  | unknown |  |
| Province | GetArea |  | unknown |  |
| Province | GetArmyLevyPercentage |  | CFixedPoint |  |
| Province | GetAverageControl |  | CFixedPoint |  |
| Province | GetAverageControlInfo |  | CString |  |
| Province | GetAverageDevelopment |  | CFixedPoint |  |
| Province | GetAverageDevelopmentInfo |  | CString |  |
| Province | GetAverageIntegration |  | CFixedPoint |  |
| Province | GetAverageIntegrationInfo |  | CString |  |
| Province | GetAverageProsperity |  | CFixedPoint |  |
| Province | GetAverageProsperityInfo |  | CString |  |
| Province | GetAverageSatisfaction |  | CFixedPoint |  |
| Province | GetAverageSatisfactionInfo |  | CString |  |
| Province | GetCapital |  | unknown |  |
| Province | GetContinent |  | unknown |  |
| Province | GetCountry |  | unknown |  |
| Province | GetCulturalInfo |  | CString |  |
| Province | GetCulturalUnity |  | CFixedPoint |  |
| Province | GetCulturePercentage | 1. unknown | CFixedPoint |  |
| Province | GetCulturePercentageInfo | 1. unknown | CString |  |
| Province | GetDebugText |  | CString |  |
| Province | GetDefinition |  | unknown |  |
| Province | GetFood |  | CFixedPoint |  |
| Province | GetFoodCapacity |  | CFixedPoint |  |
| Province | GetFoodCapacityPercent |  | CFixedPoint |  |
| Province | GetFoodCapacityTooltip |  | CString |  |
| Province | GetFoodFrame |  | int32 |  |
| Province | GetFoodFromMarket |  | CFixedPoint |  |
| Province | GetFoodFromMarketForUI |  | CString |  |
| Province | GetFoodModifierEffect |  | CString |  |
| Province | GetFoodTooltip |  | CString |  |
| Province | GetFoodUsedByUnits |  | CFixedPoint |  |
| Province | GetInstitutionDetails |  | CString |  |
| Province | GetInstitutionProgress |  | CString |  |
| Province | GetInstitutionSummary |  | CString |  |
| Province | GetIntegrationETA |  | CString |  |
| Province | GetIntegrationModifiers |  | CFixedPoint |  |
| Province | GetIntegrationModifiersBreakdown |  | CString |  |
| Province | GetLargestRebelProgress |  | CFixedPoint |  |
| Province | GetLeviesInfo |  | CString |  |
| Province | GetLocations |  | unknown |  |
| Province | GetMigrationChange |  | CString |  |
| Province | GetMigrationInfo |  | CString |  |
| Province | GetModifierValue | 1. unknown | CString |  |
| Province | GetMonthlyFood |  | CFixedPoint |  |
| Province | GetMonthlyFoodChange |  | CFixedPoint |  |
| Province | GetMonthlyFoodIncludingMarket |  | CFixedPoint |  |
| Province | GetMonthlyFoodWithLabel |  | CString |  |
| Province | GetName |  | CString |  |
| Province | GetNameWithHighlightOnly |  | CString |  |
| Province | GetNameWithNoTooltip |  | CString |  |
| Province | GetNavyLevyPercentage |  | CFixedPoint |  |
| Province | GetNumIntegrationLocations |  | int32 |  |
| Province | GetNumIntegrationLocationsBreakdown |  | CString |  |
| Province | GetOurPrimaryCulturePercentageInfo | 1. unknown | CString |  |
| Province | GetPopTypeInfo | 1. unknown | CString |  |
| Province | GetPopTypePercentage | 1. unknown | CFixedPoint |  |
| Province | GetPopTypeSize | 1. unknown | CString |  |
| Province | GetPrimaryCulturePercentage |  | CFixedPoint |  |
| Province | GetPrimaryCulturePercentageInfo |  | CString |  |
| Province | GetPrimaryReligionPercentage |  | CFixedPoint |  |
| Province | GetPrimaryReligionPercentageInfo |  | CString |  |
| Province | GetProvince |  | unknown |  |
| Province | GetProvinceLocationModifier | 1. unknown | CFixedPoint |  |
| Province | GetRegion |  | unknown |  |
| Province | GetReligionInfo |  | CString |  |
| Province | GetReligionPercentage | 1. unknown | CFixedPoint |  |
| Province | GetReligionPercentageInfo | 1. unknown | CString |  |
| Province | GetReligiousUnity |  | CFixedPoint |  |
| Province | GetTimedModifierOwner |  | unknown |  |
| Province | GetTimedModifiers |  | unknown |  |
| Province | GetTotalArmyLevySize |  | CString |  |
| Province | GetTotalArmyLevySizeInfo |  | CString |  |
| Province | GetTotalNavyLevySize |  | CString |  |
| Province | GetTotalNavyLevySizeInfo |  | CString |  |
| Province | GetTotalPopulation |  | CString |  |
| Province | GetTotalPopulationInfo |  | CString |  |
| Province | GetTotalTaxBase |  | CFixedPoint |  |
| Province | GetTotalTaxBaseInfo |  | CString |  |
| Province | GetUITooltip |  | CString |  |
| Province | IsCapitalState |  | bool |  |
| Province | IsRiskOfStarving |  | bool |  |
| Province | IsStarving |  | bool |  |
| Province | MakeScope |  | Scope | Jomini Script System |
| Province | Self |  | Province |  |
| ProvinceDefinition | AccessSelf |  | ProvinceDefinition |  |
| ProvinceDefinition | GetArea |  | unknown |  |
| ProvinceDefinition | GetLocations |  | unknown |  |
| ProvinceDefinition | GetLogInfo |  | CString |  |
| ProvinceDefinition | GetMembersInfo |  | CString |  |
| ProvinceDefinition | GetName |  | CString |  |
| ProvinceDefinition | GetNameWithNoTooltip |  | CString |  |
| ProvinceDefinition | GetNumLocations |  | int32 |  |
| ProvinceDefinition | GetTag |  | CString |  |
| ProvinceDefinition | GetTotalPopulation |  | CString |  |
| ProvinceDefinition | GetTotalPopulationInfo |  | CString |  |
| ProvinceDefinition | GetUITooltip |  | CString |  |
| ProvinceDefinition | MakeScope |  | Scope | Jomini Script System |
| ProvinceDefinition | Self |  | ProvinceDefinition |  |
| ProvinceModifierWrap | AccessSelf |  | ProvinceModifierWrap |  |
| ProvinceModifierWrap | GetIcon |  | unknown |  |
| ProvinceModifierWrap | GetName |  | CString |  |
| ProvinceModifierWrap | GetTooltip |  | CString |  |
| ProvinceModifierWrap | Self |  | ProvinceModifierWrap |  |
| QuickCabinetCardModifier | AccessSelf |  | QuickCabinetCardModifier |  |
| QuickCabinetCardModifier | GetCabinetCardModifier |  | unknown |  |
| QuickCabinetCardModifier | Self |  | QuickCabinetCardModifier |  |
| QuickCharacterActions | AccessSelf |  | QuickCharacterActions |  |
| QuickCharacterActions | GetActions |  | unknown |  |
| QuickCharacterActions | Self |  | QuickCharacterActions |  |
| QuickCultureCountryList | AccessSelf |  | QuickCultureCountryList |  |
| QuickCultureCountryList | GetCountries |  | unknown |  |
| QuickCultureCountryList | Self |  | QuickCultureCountryList |  |
| QuickDiplomaticActions | AccessSelf |  | QuickDiplomaticActions |  |
| QuickDiplomaticActions | GetDynamicActionsIcon |  | unknown |  |
| QuickDiplomaticActions | GetDynamicActionsTitle |  | CString |  |
| QuickDiplomaticActions | GetDynamicList |  | unknown |  |
| QuickDiplomaticActions | GetList |  | unknown |  |
| QuickDiplomaticActions | HasSpecificAction | 1. unknown | bool |  |
| QuickDiplomaticActions | Self |  | QuickDiplomaticActions |  |
| QuickMarketTrades | AccessSelf |  | QuickMarketTrades |  |
| QuickMarketTrades | GetTrades |  | unknown |  |
| QuickMarketTrades | Self |  | QuickMarketTrades |  |
| QuickMissionList | AccessSelf |  | QuickMissionList |  |
| QuickMissionList | ArePlaystyleMissionsCompletedWithItem | 1. unknown | bool |  |
| QuickMissionList | ArePlaystyleMissionsCompletedWithKey | 1. unknown | bool |  |
| QuickMissionList | CanUnlockPlayStyle |  | bool |  |
| QuickMissionList | GetMissions |  | unknown |  |
| QuickMissionList | GetPlaystyleCompletedMissionsCountWithItem | 1. unknown | int32 |  |
| QuickMissionList | GetPlaystyleCompletedMissionsCountWithKey | 1. unknown | int32 |  |
| QuickMissionList | GetPlaystyleMissionsCountWithItem | 1. unknown | int32 |  |
| QuickMissionList | GetPlaystyleMissionsCountWithKey | 1. unknown | int32 |  |
| QuickMissionList | Self |  | QuickMissionList |  |
| QuickMissionList | UnlockPlayStyleWithItem | 1. unknown | void |  |
| QuickMissionList | UnlockPlayStyleWithKey | 1. unknown | void |  |
| QuickRebelLocationList | AccessSelf |  | QuickRebelLocationList |  |
| QuickRebelLocationList | GetRebels |  | unknown |  |
| QuickRebelLocationList | GetTooltipForRebel | 1. unknown | CString |  |
| QuickRebelLocationList | Self |  | QuickRebelLocationList |  |
| QuickReligionCountryList | AccessSelf |  | QuickReligionCountryList |  |
| QuickReligionCountryList | GetCountries |  | unknown |  |
| QuickReligionCountryList | Self |  | QuickReligionCountryList |  |
| QuickTemporaryCountryRelations | AccessSelf |  | QuickTemporaryCountryRelations |  |
| QuickTemporaryCountryRelations | GetTemporaryRelation | 1. unknown | unknown |  |
| QuickTemporaryCountryRelations | HasTemporaryRelation | 1. unknown | bool |  |
| QuickTemporaryCountryRelations | Self |  | QuickTemporaryCountryRelations |  |
| QuickUnitActions | AccessList |  | unknown |  |
| QuickUnitActions | AccessSelf |  | QuickUnitActions |  |
| QuickUnitActions | GetBalanceAction |  | unknown |  |
| QuickUnitActions | GetList |  | unknown |  |
| QuickUnitActions | Self |  | QuickUnitActions |  |
| QuickVisibleCountries | AccessSelf |  | QuickVisibleCountries |  |
| QuickVisibleCountries | GetVisibleCountries |  | unknown |  |
| QuickVisibleCountries | Self |  | QuickVisibleCountries |  |
| QuickVisibleMarkets | AccessSelf |  | QuickVisibleMarkets |  |
| QuickVisibleMarkets | GetVisibleMarkets |  | unknown |  |
| QuickVisibleMarkets | Self |  | QuickVisibleMarkets |  |
| RandomizableValueFloat | AccessSelf |  | RandomizableValueFloat |  |
| RandomizableValueFloat | GetValue |  | float |  |
| RandomizableValueFloat | Randomize |  | void |  |
| RandomizableValueFloat | Self |  | RandomizableValueFloat |  |
| RandomizableValueFloat | SetValue |  | void |  |
| RandomizableValueInt | AccessSelf |  | RandomizableValueInt |  |
| RandomizableValueInt | GetValue |  | int32 |  |
| RandomizableValueInt | Randomize |  | void |  |
| RandomizableValueInt | Self |  | RandomizableValueInt |  |
| RandomizableValueInt | SetValue |  | void |  |
| RawGoodLocationItem | AccessSelf |  | RawGoodLocationItem |  |
| RawGoodLocationItem | CanReduceRGO |  | bool |  |
| RawGoodLocationItem | CanUpgradeRGO |  | bool |  |
| RawGoodLocationItem | GetDescription |  | CString |  |
| RawGoodLocationItem | GetEfficiency |  | CFixedPoint |  |
| RawGoodLocationItem | GetEfficiencyInfo |  | CString |  |
| RawGoodLocationItem | GetProfit |  | CFixedPoint |  |
| RawGoodLocationItem | GetProfitInfo |  | CString |  |
| RawGoodLocationItem | GetReduceRGOTooltip |  | CString |  |
| RawGoodLocationItem | GetUpgradeRGOTooltip |  | CString |  |
| RawGoodLocationItem | IsValid |  | bool |  |
| RawGoodLocationItem | ReduceRGO |  | void |  |
| RawGoodLocationItem | ReduceRGOCtrl |  | void |  |
| RawGoodLocationItem | ReduceRGODefault |  | void |  |
| RawGoodLocationItem | ReduceRGOShift |  | void |  |
| RawGoodLocationItem | Self |  | RawGoodLocationItem |  |
| RawGoodLocationItem | ShowReduceRGO |  | bool |  |
| RawGoodLocationItem | UpgradeRGO |  | void |  |
| RawGoodsMarker | AccessSelf |  | RawGoodsMarker |  |
| RawGoodsMarker | GetLocation |  | unknown |  |
| RawGoodsMarker | Self |  | RawGoodsMarker |  |
| RawGoodsMarker | ShouldBeShown |  | bool |  |
| ReasonItem | AccessSelf |  | ReasonItem |  |
| ReasonItem | Self |  | ReasonItem |  |
| Rebel | AccessSelf |  | Rebel |  |
| Rebel | GenerateSceneDesc | 1. unknown | unknown |  |
| Rebel | GetCategoryDesc |  | CString |  |
| Rebel | GetCategoryName |  | CString |  |
| Rebel | GetCategoryNameConcept |  | CString |  |
| Rebel | GetCharacters |  | unknown |  |
| Rebel | GetCrackingProgress |  | CFixedPoint |  |
| Rebel | GetDebugTooltip |  | CString |  |
| Rebel | GetID |  | int32 |  |
| Rebel | GetLastMonthsProgress |  | CFixedPoint |  |
| Rebel | GetLocationsCount |  | int32 |  |
| Rebel | GetLocationsCountGroup |  | int32 |  |
| Rebel | GetLocationsInfo |  | CString |  |
| Rebel | GetLocationsInfoGroup |  | CString |  |
| Rebel | GetMonthlyChange |  | CFixedPoint |  |
| Rebel | GetMonthlyInfo |  | CString |  |
| Rebel | GetMostPowerfulSupporter |  | unknown |  |
| Rebel | GetName |  | CString |  |
| Rebel | GetNameWithGroupTooltip |  | CString |  |
| Rebel | GetNameWithNoTooltip |  | CString |  |
| Rebel | GetOwner |  | unknown |  |
| Rebel | GetPops |  | unknown |  |
| Rebel | GetPopulationSupportInfo |  | CString |  |
| Rebel | GetPopulationSupportInfoGroup |  | CString |  |
| Rebel | GetPopulationSupportTotal |  | CString |  |
| Rebel | GetPopulationSupportTotalGroup |  | CString |  |
| Rebel | GetPretender |  | unknown |  |
| Rebel | GetPretenderInfo |  | CString |  |
| Rebel | GetProgress |  | CFixedPoint |  |
| Rebel | GetProgressTT |  | CString |  |
| Rebel | GetProgresssPercentForPiechart |  | float |  |
| Rebel | GetRebelSupporingCountryNames |  | CString |  |
| Rebel | GetSize |  | CFixedPoint |  |
| Rebel | GetSourcesInfo |  | CString |  |
| Rebel | GetSupportersCount |  | int32 |  |
| Rebel | GetSupportersInfo |  | CString |  |
| Rebel | GetTextIcon |  | CString |  |
| Rebel | GetUITooltip |  | CString |  |
| Rebel | HasPretenderInfo |  | bool |  |
| Rebel | HasSupportersInfo |  | bool |  |
| Rebel | MakeScope |  | Scope | Jomini Script System |
| Rebel | Self |  | Rebel |  |
| Rebel | WantsCivilWar |  | bool |  |
| RebelDetailsLateralView | AccessSelf |  | RebelDetailsLateralView |  |
| RebelDetailsLateralView | GetLocations |  | unknown |  |
| RebelDetailsLateralView | GetPlayer |  | unknown |  |
| RebelDetailsLateralView | GetPops |  | unknown |  |
| RebelDetailsLateralView | GetRebel |  | unknown |  |
| RebelDetailsLateralView | IsLeftPanel |  | bool |  |
| RebelDetailsLateralView | IsRightPanel |  | bool |  |
| RebelDetailsLateralView | Self |  | RebelDetailsLateralView |  |
| RecruitInLocationLateralView | AccessSelf |  | RecruitInLocationLateralView |  |
| RecruitInLocationLateralView | CanDisbandAllLevies |  | bool |  |
| RecruitInLocationLateralView | CanDisbandAllLeviesInfo |  | CString |  |
| RecruitInLocationLateralView | CanRaiseAllLevies |  | bool |  |
| RecruitInLocationLateralView | CanRaiseAllLeviesInfo |  | CString |  |
| RecruitInLocationLateralView | CanRecruit | 1. unknown | bool |  |
| RecruitInLocationLateralView | CanRecruitTT | 1. unknown | CString |  |
| RecruitInLocationLateralView | DisbandAllLevies |  | void |  |
| RecruitInLocationLateralView | GetItem | 1. unknown | unknown |  |
| RecruitInLocationLateralView | GetItems |  | unknown |  |
| RecruitInLocationLateralView | GetLeviesInProgress |  | CFixedPoint |  |
| RecruitInLocationLateralView | GetLeviesStrength |  | CFixedPoint |  |
| RecruitInLocationLateralView | GetMercenary |  | unknown |  |
| RecruitInLocationLateralView | GetMethods |  | unknown |  |
| RecruitInLocationLateralView | GetNumRecruitmentInProgress |  | int32 |  |
| RecruitInLocationLateralView | GetPlayer |  | unknown |  |
| RecruitInLocationLateralView | GetPreferredMethod |  | unknown |  |
| RecruitInLocationLateralView | GetRecruitEmptyInfo |  | CString |  |
| RecruitInLocationLateralView | GetRecruitEmptyItems |  | unknown |  |
| RecruitInLocationLateralView | GetRecruitSortSearch |  | unknown |  |
| RecruitInLocationLateralView | GetUnitType |  | unknown |  |
| RecruitInLocationLateralView | IsArmy |  | bool |  |
| RecruitInLocationLateralView | IsLeftPanel |  | bool |  |
| RecruitInLocationLateralView | IsLevy |  | bool |  |
| RecruitInLocationLateralView | IsLocationHightlighted | 1. unknown | bool |  |
| RecruitInLocationLateralView | IsMercenary |  | bool |  |
| RecruitInLocationLateralView | IsMethodChecked | 1. unknown | bool |  |
| RecruitInLocationLateralView | IsNavy |  | bool |  |
| RecruitInLocationLateralView | IsRightPanel |  | bool |  |
| RecruitInLocationLateralView | RaiseAllLevies |  | void |  |
| RecruitInLocationLateralView | SelectLocationToBuild | 1. unknown | void |  |
| RecruitInLocationLateralView | SelectMethod | 1. unknown | void |  |
| RecruitInLocationLateralView | Self |  | RecruitInLocationLateralView |  |
| RecruitScoreRanking | AccessSelf |  | RecruitScoreRanking |  |
| RecruitScoreRanking | GetInvalidItems |  | unknown |  |
| RecruitScoreRanking | GetLastRecruitmentLocation |  | unknown |  |
| RecruitScoreRanking | GetRecruitScoreItems |  | unknown |  |
| RecruitScoreRanking | GetUnitType |  | unknown |  |
| RecruitScoreRanking | HasRecruitmentToDequeue |  | bool |  |
| RecruitScoreRanking | IsValid |  | bool |  |
| RecruitScoreRanking | Self |  | RecruitScoreRanking |  |
| RecruitmentMethod | AccessSelf |  | RecruitmentMethod |  |
| RecruitmentMethod | GetDesc |  | CString |  |
| RecruitmentMethod | GetName |  | CString |  |
| RecruitmentMethod | GetNameWithNoTooltip |  | CString |  |
| RecruitmentMethod | GetTooltip |  | CString |  |
| RecruitmentMethod | MakeScope |  | Scope | Jomini Script System |
| RecruitmentMethod | Self |  | RecruitmentMethod |  |
| ReformItem | AccessSelf |  | ReformItem |  |
| ReformItem | GetPercentageImplemented |  | CFixedPoint |  |
| ReformItem | GetReform |  | unknown |  |
| ReformItem | GetUIAction |  | unknown |  |
| ReformItem | IsImplemented |  | bool |  |
| ReformItem | IsMajor |  | bool |  |
| ReformItem | IsUnique |  | bool |  |
| ReformItem | IsValid |  | bool |  |
| ReformItem | Self |  | ReformItem |  |
| RegencyType | AccessSelf |  | RegencyType |  |
| RegencyType | GetDescription |  | CString |  |
| RegencyType | GetName |  | CString |  |
| RegencyType | GetNameWithNoTooltip |  | CString |  |
| RegencyType | GetTooltip |  | CString |  |
| RegencyType | MakeScope |  | Scope | Jomini Script System |
| RegencyType | Self |  | RegencyType |  |
| Region | AccessSelf |  | Region |  |
| Region | GetDebugText |  | CString |  |
| Region | GetMembersInfo |  | CString |  |
| Region | GetName |  | CString |  |
| Region | GetNameWithLandHighlightOnly |  | CString |  |
| Region | GetNameWithNoTooltip |  | CString |  |
| Region | GetNumAreas |  | int32 |  |
| Region | GetSubContinent |  | unknown |  |
| Region | GetTag |  | CString |  |
| Region | GetTooltipAreaList |  | CString |  |
| Region | GetTooltipDesc |  | CString |  |
| Region | GetTotalPopulation |  | CString |  |
| Region | GetTotalPopulationInfo |  | CString |  |
| Region | GetUITooltip |  | CString |  |
| Region | MakeScope |  | Scope | Jomini Script System |
| Region | Self |  | Region |  |
| RelationDescItem | AccessFlagIcon |  | unknown |  |
| RelationDescItem | AccessSelf |  | RelationDescItem |  |
| RelationDescItem | GetCountry |  | unknown |  |
| RelationDescItem | GetFlagFrame |  | int32 |  |
| RelationDescItem | GetProgress |  | float |  |
| RelationDescItem | GetRelationDescItemUIAction |  | unknown |  |
| RelationDescItem | GetToolTip |  | CString |  |
| RelationDescItem | HasProgress |  | bool |  |
| RelationDescItem | IsRelationType | 1. unknown | bool |  |
| RelationDescItem | OnClick |  | void |  |
| RelationDescItem | Self |  | RelationDescItem |  |
| RelationTypeItem | AccessIcon |  | unknown |  |
| RelationTypeItem | AccessSelf |  | RelationTypeItem |  |
| RelationTypeItem | GetActionTitle |  | CString |  |
| RelationTypeItem | GetCategoryKey |  | CString |  |
| RelationTypeItem | GetCountry |  | unknown |  |
| RelationTypeItem | GetExtraInfo |  | CString |  |
| RelationTypeItem | GetHeaderInfo |  | CString |  |
| RelationTypeItem | GetInternationalOrganization |  | unknown |  |
| RelationTypeItem | GetName |  | CString |  |
| RelationTypeItem | GetRelations |  | unknown |  |
| RelationTypeItem | GetToolTip |  | CString |  |
| RelationTypeItem | HasUIAction |  | bool |  |
| RelationTypeItem | IsInternationalOrganization |  | bool |  |
| RelationTypeItem | IsRelationType | 1. unknown | bool |  |
| RelationTypeItem | OnClick |  | void |  |
| RelationTypeItem | OnClickAndConfirm |  | void |  |
| RelationTypeItem | OnClickAndConfirmEnabled |  | bool |  |
| RelationTypeItem | OnClickAndConfirmTitle |  | CString |  |
| RelationTypeItem | OnClickAndConfirmTooltip |  | CString |  |
| RelationTypeItem | OnClickAndConfirmVisible |  | bool |  |
| RelationTypeItem | OnClickEnabled |  | bool |  |
| RelationTypeItem | OnClickRemove |  | void |  |
| RelationTypeItem | OnClickRemoveEnabled |  | bool |  |
| RelationTypeItem | OnClickRemoveTitle |  | CString |  |
| RelationTypeItem | OnClickRemoveTooltip |  | CString |  |
| RelationTypeItem | OnClickRemoveVisible |  | bool |  |
| RelationTypeItem | OnClickTitle |  | CString |  |
| RelationTypeItem | OnClickTooltip |  | CString |  |
| RelationTypeItem | OnClickVisible |  | bool |  |
| RelationTypeItem | Self |  | RelationTypeItem |  |
| RelationTypeItem | ShowExtraInfo |  | bool |  |
| RelationTypeItem | ShowHeaderInfo |  | bool |  |
| RelativePowerTooltipGlue | AccessSelf |  | RelativePowerTooltipGlue |  |
| RelativePowerTooltipGlue | GetCountry |  | unknown |  |
| RelativePowerTooltipGlue | GetPlayer |  | unknown |  |
| RelativePowerTooltipGlue | Self |  | RelativePowerTooltipGlue |  |
| Religion | AccessSelf |  | Religion |  |
| Religion | GetAdjective |  | CString |  |
| Religion | GetAdjectiveWithNoTooltip |  | CString |  |
| Religion | GetCardinalCountries |  | unknown |  |
| Religion | GetCardinals |  | unknown |  |
| Religion | GetCountries |  | unknown |  |
| Religion | GetCountriesInfo |  | CString |  |
| Religion | GetCountriesListTitle |  | CString |  |
| Religion | GetEffect |  | CString |  |
| Religion | GetFlavorText |  | CString |  |
| Religion | GetGodName |  | CString |  |
| Religion | GetGods |  | unknown |  |
| Religion | GetIcon |  | CString |  |
| Religion | GetMaxReligiousAspects |  | int32 |  |
| Religion | GetModifierValue | 1. unknown | CString |  |
| Religion | GetName |  | CString |  |
| Religion | GetNameNoUnderline |  | CString |  |
| Religion | GetNameWithNoTooltip |  | CString |  |
| Religion | GetNumCountries |  | int32 |  |
| Religion | GetNumGods |  | int32 |  |
| Religion | GetNumHolySites |  | int32 |  |
| Religion | GetOpinion | 1. unknown | unknown |  |
| Religion | GetOpinionInfo | 1. unknown | CString |  |
| Religion | GetOthersOpinions |  | unknown |  |
| Religion | GetOurOpinions |  | unknown |  |
| Religion | GetPopsForCountry | 1. unknown | CString |  |
| Religion | GetReformDesire |  | CFixedPoint |  |
| Religion | GetReformDesireInfo |  | CString |  |
| Religion | GetReligiousInfluenceKey |  | CString |  |
| Religion | GetReligiousInfluenceLink |  | CString |  |
| Religion | GetReligiousInfluenceName |  | CString |  |
| Religion | GetSaints |  | unknown |  |
| Religion | GetSinName |  | CString |  |
| Religion | GetSinPrefixName |  | CString |  |
| Religion | GetTimedModifierOwner |  | unknown |  |
| Religion | GetTimedModifiers |  | unknown |  |
| Religion | GetTooltip |  | CString |  |
| Religion | GetTotalPopulation |  | CString |  |
| Religion | GetVariable | 1. unknown | CFixedPoint |  |
| Religion | HasAutocephalousPatriarchates |  | bool |  |
| Religion | HasAvatars |  | bool |  |
| Religion | HasCanonization |  | bool |  |
| Religion | HasCardinals |  | bool |  |
| Religion | HasDoom |  | bool |  |
| Religion | HasGods |  | bool |  |
| Religion | HasHolySites |  | bool |  |
| Religion | HasHonor |  | bool |  |
| Religion | HasImportantCountry |  | bool |  |
| Religion | HasKarma |  | bool |  |
| Religion | HasLanguage |  | bool |  |
| Religion | HasPatriarchs |  | bool |  |
| Religion | HasPurity |  | bool |  |
| Religion | HasReligiousAspects |  | bool |  |
| Religion | HasReligiousFactions |  | bool |  |
| Religion | HasReligiousFocuses |  | bool |  |
| Religion | HasReligiousHead |  | bool |  |
| Religion | HasReligiousInfluence |  | bool |  |
| Religion | HasReligiousSchool |  | bool |  |
| Religion | HasRitePower |  | bool |  |
| Religion | HasSects |  | bool |  |
| Religion | HasYanantin |  | bool |  |
| Religion | IsEnabled |  | bool |  |
| Religion | MakeScope |  | Scope | Jomini Script System |
| Religion | NeedsReforms |  | bool |  |
| Religion | Self |  | Religion |  |
| ReligionDefinition | AccessSelf |  | ReligionDefinition |  |
| ReligionDefinition | GetName |  | CString |  |
| ReligionDefinition | Self |  | ReligionDefinition |  |
| ReligionGroup | AccessSelf |  | ReligionGroup |  |
| ReligionGroup | GetActiveReligions |  | CString |  |
| ReligionGroup | GetAdjective |  | CString |  |
| ReligionGroup | GetAdjectiveWithNoTooltip |  | CString |  |
| ReligionGroup | GetDesc |  | CString |  |
| ReligionGroup | GetInactiveReligions |  | CString |  |
| ReligionGroup | GetName |  | CString |  |
| ReligionGroup | GetNameWithNoTooltip |  | CString |  |
| ReligionGroup | GetReligions |  | CString |  |
| ReligionGroup | GetTooltip |  | CString |  |
| ReligionGroup | MakeScope |  | Scope | Jomini Script System |
| ReligionGroup | Self |  | ReligionGroup |  |
| ReligionItem | AccessSelf |  | ReligionItem |  |
| ReligionItem | GetPopulation |  | CFixedPoint |  |
| ReligionItem | GetReligion |  | unknown |  |
| ReligionItem | Self |  | ReligionItem |  |
| ReligionMessage | AccessSelf |  | ReligionMessage |  |
| ReligionMessage | GetReligion |  | unknown |  |
| ReligionMessage | Self |  | ReligionMessage |  |
| ReligionModifierWrap | AccessSelf |  | ReligionModifierWrap |  |
| ReligionModifierWrap | GetIcon |  | unknown |  |
| ReligionModifierWrap | GetName |  | CString |  |
| ReligionModifierWrap | GetTooltip |  | CString |  |
| ReligionModifierWrap | Self |  | ReligionModifierWrap |  |
| ReligionsLedger | AccessSelf |  | ReligionsLedger |  |
| ReligionsLedger | GetPlayer |  | unknown |  |
| ReligionsLedger | GetReligions |  | unknown |  |
| ReligionsLedger | GetReligionsSortSearch |  | unknown |  |
| ReligionsLedger | IsLeftPanel |  | bool |  |
| ReligionsLedger | IsRightPanel |  | bool |  |
| ReligionsLedger | Self |  | ReligionsLedger |  |
| ReligiousAspect | AccessSelf |  | ReligiousAspect |  |
| ReligiousAspect | GetDescription |  | CString |  |
| ReligiousAspect | GetEffect |  | CString |  |
| ReligiousAspect | GetName |  | CString |  |
| ReligiousAspect | GetNameWithNoTooltip |  | CString |  |
| ReligiousAspect | GetTooltip |  | CString |  |
| ReligiousAspect | MakeScope |  | Scope | Jomini Script System |
| ReligiousAspect | Self |  | ReligiousAspect |  |
| ReligiousAspectGlue | AccessSelf |  | ReligiousAspectGlue |  |
| ReligiousAspectGlue | GetReligiousAspect |  | unknown |  |
| ReligiousAspectGlue | IsValid |  | bool |  |
| ReligiousAspectGlue | Self |  | ReligiousAspectGlue |  |
| ReligiousFaction | AccessSelf |  | ReligiousFaction |  |
| ReligiousFaction | GetActions |  | unknown |  |
| ReligiousFaction | GetDescription |  | CString |  |
| ReligiousFaction | GetName |  | CString |  |
| ReligiousFaction | GetNameWithNoTooltip |  | CString |  |
| ReligiousFaction | GetTooltip |  | CString |  |
| ReligiousFaction | MakeScope |  | Scope | Jomini Script System |
| ReligiousFaction | Self |  | ReligiousFaction |  |
| ReligiousFactionActionGlue | AccessSelf |  | ReligiousFactionActionGlue |  |
| ReligiousFactionActionGlue | GetRequiredHonor |  | int32 |  |
| ReligiousFactionActionGlue | GetUIAction |  | unknown |  |
| ReligiousFactionActionGlue | Self |  | ReligiousFactionActionGlue |  |
| ReligiousFactionGlue | AccessSelf |  | ReligiousFactionGlue |  |
| ReligiousFactionGlue | GetActions |  | unknown |  |
| ReligiousFactionGlue | GetActionsAmount |  | CFixedPoint |  |
| ReligiousFactionGlue | GetActionsVisibleAmount |  | CFixedPoint |  |
| ReligiousFactionGlue | GetFaction |  | unknown |  |
| ReligiousFactionGlue | IsEnabled |  | bool |  |
| ReligiousFactionGlue | IsExpanded |  | bool |  |
| ReligiousFactionGlue | Self |  | ReligiousFactionGlue |  |
| ReligiousFactionGlue | ToggleExpanded |  | void |  |
| ReligiousFigure | AccessSelf |  | ReligiousFigure |  |
| ReligiousFigure | GetName |  | CString |  |
| ReligiousFigure | GetNameWithNoTooltip |  | CString |  |
| ReligiousFigure | GetTooltip |  | CString |  |
| ReligiousFigure | MakeScope |  | Scope | Jomini Script System |
| ReligiousFigure | Self |  | ReligiousFigure |  |
| ReligiousFigureGlue | AccessSelf |  | ReligiousFigureGlue |  |
| ReligiousFigureGlue | GetCharacter |  | unknown |  |
| ReligiousFigureGlue | GetUIAction |  | unknown |  |
| ReligiousFigureGlue | IsInvited |  | bool |  |
| ReligiousFigureGlue | Self |  | ReligiousFigureGlue |  |
| ReligiousFocus | AccessSelf |  | ReligiousFocus |  |
| ReligiousFocus | GetDescription |  | CString |  |
| ReligiousFocus | GetEffectsDesc | 1. unknown | CString |  |
| ReligiousFocus | GetName |  | CString |  |
| ReligiousFocus | GetNameWithNoTooltip |  | CString |  |
| ReligiousFocus | GetProgressDesc |  | CString |  |
| ReligiousFocus | GetTooltip |  | CString |  |
| ReligiousFocus | MakeScope |  | Scope | Jomini Script System |
| ReligiousFocus | Self |  | ReligiousFocus |  |
| ReligiousFocusGlue | AccessSelf |  | ReligiousFocusGlue |  |
| ReligiousFocusGlue | GetProgressBarTooltip |  | CString |  |
| ReligiousFocusGlue | GetProgressPercent |  | CFixedPoint |  |
| ReligiousFocusGlue | GetReligiousFocus |  | unknown |  |
| ReligiousFocusGlue | GetResearchQueueSlot |  | CString |  |
| ReligiousFocusGlue | GetResearchQueueSlotTooltip |  | CString |  |
| ReligiousFocusGlue | GetUIAction |  | unknown |  |
| ReligiousFocusGlue | IsCompleted |  | bool |  |
| ReligiousFocusGlue | IsCurrentlyResearching |  | bool |  |
| ReligiousFocusGlue | IsInResearchQueue |  | bool |  |
| ReligiousFocusGlue | Self |  | ReligiousFocusGlue |  |
| ReligiousSchool | AccessSelf |  | ReligiousSchool |  |
| ReligiousSchool | GetDescription |  | CString |  |
| ReligiousSchool | GetEffect |  | CString |  |
| ReligiousSchool | GetIcon |  | unknown |  |
| ReligiousSchool | GetName |  | CString |  |
| ReligiousSchool | GetNameWithNoTooltip |  | CString |  |
| ReligiousSchool | GetRelations |  | CString |  |
| ReligiousSchool | GetTooltip |  | CString |  |
| ReligiousSchool | MakeScope |  | Scope | Jomini Script System |
| ReligiousSchool | Self |  | ReligiousSchool |  |
| RemoveFriendConfirmWindow | AccessSelf |  | RemoveFriendConfirmWindow |  |
| RemoveFriendConfirmWindow | ConfirmRemove |  | void |  |
| RemoveFriendConfirmWindow | Hide |  | void |  |
| RemoveFriendConfirmWindow | Self |  | RemoveFriendConfirmWindow |  |
| RemoveFriendConfirmWindow | ShouldBeShown |  | bool |  |
| RemoveFriendConfirmWindow | Show |  | void |  |
| RenameDialog | AccessSelf |  | RenameDialog |  |
| RenameDialog | GetCountry |  | unknown |  |
| RenameDialog | GiveRandomName |  | void |  |
| RenameDialog | Self |  | RenameDialog |  |
| ReorgWindow | AccessSelf |  | ReorgWindow |  |
| ReorgWindow | GetLeft |  | unknown |  |
| ReorgWindow | GetLeftList |  | unknown |  |
| ReorgWindow | GetLeftTypeList |  | unknown |  |
| ReorgWindow | GetRight |  | unknown |  |
| ReorgWindow | GetRightList |  | unknown |  |
| ReorgWindow | GetRightTypeList |  | unknown |  |
| ReorgWindow | OnClose |  | void |  |
| ReorgWindow | Self |  | ReorgWindow |  |
| ReportIssueItem | AccessSelf |  | ReportIssueItem |  |
| ReportIssueItem | GetName |  | CString |  |
| ReportIssueItem | IsSelected |  | bool |  |
| ReportIssueItem | Self |  | ReportIssueItem |  |
| ReportIssueItem | Toggle |  | void |  |
| ReportIssueWindow | AccessSelf |  | ReportIssueWindow |  |
| ReportIssueWindow | CanSendReport |  | bool |  |
| ReportIssueWindow | Confirm |  | void |  |
| ReportIssueWindow | GenerateReportFiles |  | void |  |
| ReportIssueWindow | GetAttachmentList |  | unknown |  |
| ReportIssueWindow | GetConfirmTooltip |  | CString |  |
| ReportIssueWindow | GetFileGenerateTooltip |  | CString |  |
| ReportIssueWindow | GetItemSortSearch |  | unknown |  |
| ReportIssueWindow | Hide |  | void |  |
| ReportIssueWindow | IsFileGenerationAvailable |  | bool |  |
| ReportIssueWindow | OnDescriptionTextChanged |  | void |  |
| ReportIssueWindow | OnStepsTextChanged |  | void |  |
| ReportIssueWindow | OnTitleTextChanged |  | void |  |
| ReportIssueWindow | Self |  | ReportIssueWindow |  |
| RequirementLine | AccessSelf |  | RequirementLine |  |
| RequirementLine | GetIndent |  | int32 |  |
| RequirementLine | GetIndexDist |  | int32 |  |
| RequirementLine | GetIndexDistSize | 1. unknown 2. unknown 3. unknown 4. unknown | CVector2f |  |
| RequirementLine | GetText |  | CString |  |
| RequirementLine | HasFailed |  | bool |  |
| RequirementLine | HasPassed |  | bool |  |
| RequirementLine | IsBlocker |  | bool |  |
| RequirementLine | IsInactive |  | bool |  |
| RequirementLine | IsSkipped |  | bool |  |
| RequirementLine | IsUndefined |  | bool |  |
| RequirementLine | Self |  | RequirementLine |  |
| RequirementLineAux | AccessSelf |  | RequirementLineAux |  |
| RequirementLineAux | GetAuxParentArrowSize | 1. unknown 2. unknown | CVector2f |  |
| RequirementLineAux | Self |  | RequirementLineAux |  |
| RequirementsList | AccessSelf |  | RequirementsList |  |
| RequirementsList | GetLines |  | unknown |  |
| RequirementsList | GetTitle |  | CString |  |
| RequirementsList | Self |  | RequirementsList |  |
| ResearchMessage | AccessSelf |  | ResearchMessage |  |
| ResearchMessage | GetAdvancePointer |  | unknown |  |
| ResearchMessage | Self |  | ResearchMessage |  |
| ResignConfirmationWindow | AccessSelf |  | ResignConfirmationWindow |  |
| ResignConfirmationWindow | Cancel |  | void |  |
| ResignConfirmationWindow | GetText |  | CString |  |
| ResignConfirmationWindow | OnDesktop |  | void |  |
| ResignConfirmationWindow | OnMenu |  | void |  |
| ResignConfirmationWindow | Self |  | ResignConfirmationWindow |  |
| ResignConfirmationWindow | ShouldSave |  | bool |  |
| ResignConfirmationWindow | ShouldShowCheckbox |  | bool |  |
| ResignConfirmationWindow | ToggleShouldSave |  | void |  |
| Resolution | AccessSelf |  | Resolution |  |
| Resolution | GetBasicTooltip |  | CString |  |
| Resolution | GetKey |  | CString |  |
| Resolution | GetName |  | CString |  |
| Resolution | GetNameWithNoTooltip |  | CString |  |
| Resolution | GetSuccessEffect |  | CString |  |
| Resolution | MakeScope |  | Scope | Jomini Script System |
| Resolution | Self |  | Resolution |  |
| ResolutionGlue | AccessSelf |  | ResolutionGlue |  |
| ResolutionGlue | CanVote |  | bool |  |
| ResolutionGlue | EnactResolutionIsActive |  | bool |  |
| ResolutionGlue | GetButtonText |  | CString |  |
| ResolutionGlue | GetCountryVoteBreakdown | 1. unknown | CString |  |
| ResolutionGlue | GetCountryVoteBreakdownForCountry | 1. unknown | CString |  |
| ResolutionGlue | GetCountryVoteDesc | 1. unknown | CString |  |
| ResolutionGlue | GetCountryVoteDescForCountry | 1. unknown | CString |  |
| ResolutionGlue | GetDebugText |  | CString |  |
| ResolutionGlue | GetDesc |  | CString |  |
| ResolutionGlue | GetEnactNoVoteTarget |  | unknown |  |
| ResolutionGlue | GetEnactResolution |  | unknown |  |
| ResolutionGlue | GetEnactYesVoteTarget |  | unknown |  |
| ResolutionGlue | GetFirstPossibleVoteNum |  | CFixedPoint |  |
| ResolutionGlue | GetHighestVote |  | unknown |  |
| ResolutionGlue | GetNotVoted |  | unknown |  |
| ResolutionGlue | GetOwner |  | unknown |  |
| ResolutionGlue | GetPossibleVotes |  | unknown |  |
| ResolutionGlue | GetProgressToDeadline |  | CFixedPoint |  |
| ResolutionGlue | GetProposer |  | unknown |  |
| ResolutionGlue | GetRepealResolution |  | unknown |  |
| ResolutionGlue | GetSecondPossibleVoteNum |  | CFixedPoint |  |
| ResolutionGlue | GetSpecificParams |  | unknown |  |
| ResolutionGlue | GetTarget | 1. unknown | unknown |  |
| ResolutionGlue | GetTargetCountry |  | unknown |  |
| ResolutionGlue | GetTitle |  | CString |  |
| ResolutionGlue | GetVoteDesc |  | CString |  |
| ResolutionGlue | GetVoteNum | 1. unknown | CFixedPoint |  |
| ResolutionGlue | GetVoteNumWithBreakdown | 1. unknown | CString |  |
| ResolutionGlue | GetVoteTitle |  | CString |  |
| ResolutionGlue | GetVoteToEnactAction |  | unknown |  |
| ResolutionGlue | GetVoteToRepealAction |  | unknown |  |
| ResolutionGlue | GetVotes | 1. unknown | CFixedPoint |  |
| ResolutionGlue | HasCountryVoted | 1. unknown | bool |  |
| ResolutionGlue | HasHighestVote |  | bool |  |
| ResolutionGlue | IsProposer | 1. unknown | bool |  |
| ResolutionGlue | IsProposerForCountry | 1. unknown | bool |  |
| ResolutionGlue | RepealResolutionIsActive |  | bool |  |
| ResolutionGlue | Self |  | ResolutionGlue |  |

List of all Ri-W GUI functions/ri-w

| Type | Functions/Ri- | Arguments | Output | Description |
| --- | --- | --- | --- | --- |
| RiverDirectionWrap | AccessSelf |  | RiverDirectionWrap |  |
| RiverDirectionWrap | GetName |  | CString |  |
| RiverDirectionWrap | GetTooltip |  | CString |  |
| RiverDirectionWrap | Self |  | RiverDirectionWrap |  |
| RoadBuilder | AccessSelf |  | RoadBuilder |  |
| RoadBuilder | CanUpgradeCandidates |  | bool |  |
| RoadBuilder | GetConditionsForLocation | 1. unknown | CString |  |
| RoadBuilder | GetLocation |  | unknown |  |
| RoadBuilder | GetPlayer |  | unknown |  |
| RoadBuilder | GetRoadCostCalculations |  | unknown |  |
| RoadBuilder | GetRoadDestinationsItems |  | unknown |  |
| RoadBuilder | GetRoadDestinationsSearch |  | unknown |  |
| RoadBuilder | GetRoadTypes |  | unknown |  |
| RoadBuilder | GetSelectedRoadTypeName |  | CString |  |
| RoadBuilder | GetShouldShowUpgradeButton |  | bool |  |
| RoadBuilder | GetTooltipForLocation | 1. unknown | CString |  |
| RoadBuilder | GetUpgradeCost | 1. unknown | CString |  |
| RoadBuilder | GetUpgradeTooltip |  | CString |  |
| RoadBuilder | HasUpgradeCandidates |  | bool |  |
| RoadBuilder | IsLeftPanel |  | bool |  |
| RoadBuilder | IsRightPanel |  | bool |  |
| RoadBuilder | SelectRoadType | 1. unknown | void |  |
| RoadBuilder | Self |  | RoadBuilder |  |
| RoadBuilder | UpgradeRoadCandidatesToSelectedType | 1. unknown | void |  |
| RoadCostCalculation | AccessSelf |  | RoadCostCalculation |  |
| RoadCostCalculation | GetActionName |  | CString |  |
| RoadCostCalculation | GetDescription |  | CString |  |
| RoadCostCalculation | GetIsSelected |  | bool |  |
| RoadCostCalculation | GetName |  | CString |  |
| RoadCostCalculation | OnClick |  | void |  |
| RoadCostCalculation | Self |  | RoadCostCalculation |  |
| RoadDestinationItem | AccessSelf |  | RoadDestinationItem |  |
| RoadDestinationItem | BuildRoad |  | void |  |
| RoadDestinationItem | CanBuildRoad |  | bool |  |
| RoadDestinationItem | EnableHighlight | 1. unknown | void |  |
| RoadDestinationItem | GetCanBuildRoadInfo |  | CString |  |
| RoadDestinationItem | GetCost |  | CFixedPoint |  |
| RoadDestinationItem | GetCostString |  | CString |  |
| RoadDestinationItem | GetDistance |  | int32 |  |
| RoadDestinationItem | GetLocation |  | unknown |  |
| RoadDestinationItem | GetRoadType |  | unknown |  |
| RoadDestinationItem | GetTitle |  | CString |  |
| RoadDestinationItem | OnMouseHierarchyEnter |  | void |  |
| RoadDestinationItem | OnMouseHierarchyLeave |  | void |  |
| RoadDestinationItem | Self |  | RoadDestinationItem |  |
| RoadEditor | AccessSelf |  | RoadEditor |  |
| RoadEditor | GetCurrent |  | CString |  |
| RoadEditor | GetEntries |  | unknown |  |
| RoadEditor | GetFromLocation |  | CString |  |
| RoadEditor | Self |  | RoadEditor |  |
| RoadType | AccessSelf |  | RoadType |  |
| RoadType | GetDesc |  | CString |  |
| RoadType | GetIcon |  | CString |  |
| RoadType | GetMaintenanceString |  | CString |  |
| RoadType | GetName |  | CString |  |
| RoadType | GetNameWithNoTooltip |  | CString |  |
| RoadType | GetTooltip |  | CString |  |
| RoadType | MakeScope |  | Scope | Jomini Script System |
| RoadType | Self |  | RoadType |  |
| RoadTypeEntry | AccessSelf |  | RoadTypeEntry |  |
| RoadTypeEntry | GetName |  | CString |  |
| RoadTypeEntry | OnClick |  | void |  |
| RoadTypeEntry | Self |  | RoadTypeEntry |  |
| RoadTypeItem | AccessSelf |  | RoadTypeItem |  |
| RoadTypeItem | GetIsSelected |  | bool |  |
| RoadTypeItem | GetRoadType |  | unknown |  |
| RoadTypeItem | IsEnabled |  | bool |  |
| RoadTypeItem | Self |  | RoadTypeItem |  |
| RowList | AccessSelf |  | RowList |  |
| RowList | GetRows |  | unknown |  |
| RowList | GetTitle |  | CString |  |
| RowList | HasTitle |  | bool |  |
| RowList | Self |  | RowList |  |
| RulerTerm | AccessSelf |  | RulerTerm |  |
| RulerTerm | GetEnd |  | CString |  |
| RulerTerm | GetNameAndTitleInfo |  | CString |  |
| RulerTerm | GetNameInfo |  | CString |  |
| RulerTerm | GetStart |  | CString |  |
| RulerTerm | GetTitleInfoForCharacter | 1. unknown | CString |  |
| RulerTerm | GetTitleInfoForCountry | 1. unknown | CString |  |
| RulerTerm | GetTitleInfoWithNoDateForCharacter | 1. unknown | CString |  |
| RulerTerm | IsActive |  | bool |  |
| RulerTerm | RuledIsCountry |  | bool |  |
| RulerTerm | RuledIsInternationalOrganization |  | bool |  |
| RulerTerm | RulerIsCharacter |  | bool |  |
| RulerTerm | RulerIsCountry |  | bool |  |
| RulerTerm | RulerIsReal |  | bool |  |
| RulerTerm | Self |  | RulerTerm |  |
| RulerTermEntry | AccessSelf |  | RulerTermEntry |  |
| RulerTermEntry | Self |  | RulerTermEntry |  |
| RulerTraitEntry | AccessSelf |  | RulerTraitEntry |  |
| RulerTraitEntry | GetCharacter |  | unknown |  |
| RulerTraitEntry | GetProgressInfo |  | CString |  |
| RulerTraitEntry | GetProgressToNextTrait |  | float |  |
| RulerTraitEntry | GetTrait |  | unknown |  |
| RulerTraitEntry | HasTrait |  | bool |  |
| RulerTraitEntry | Self |  | RulerTraitEntry |  |
| RulingHistoryView | AccessSelf |  | RulingHistoryView |  |
| RulingHistoryView | GetPlayer |  | unknown |  |
| RulingHistoryView | GetRulerTermEntries |  | unknown |  |
| RulingHistoryView | GetTitle |  | CString |  |
| RulingHistoryView | HasCharacterRulers |  | bool |  |
| RulingHistoryView | HasCountryRulers |  | bool |  |
| RulingHistoryView | IsLeftPanel |  | bool |  |
| RulingHistoryView | IsRightPanel |  | bool |  |
| RulingHistoryView | Self |  | RulingHistoryView |  |
| SaintGlue | AccessSelf |  | SaintGlue |  |
| SaintGlue | GetSaint |  | unknown |  |
| SaintGlue | Self |  | SaintGlue |  |
| Savable | AbsoluteLocationText |  | CString |  |
| Savable | AccessSelf |  | Savable |  |
| Savable | AllowsFileDialog |  | bool |  |
| Savable | Error |  | CString |  |
| Savable | Filename |  | CString |  |
| Savable | FolderSelect |  | void |  |
| Savable | HasError |  | bool |  |
| Savable | HasWarning |  | bool |  |
| Savable | IsDeletable |  | bool |  |
| Savable | IsFilenameModifiable |  | bool |  |
| Savable | IsRevertible |  | bool |  |
| Savable | IsSelected |  | bool |  |
| Savable | Location |  | CString |  |
| Savable | LocationTooltip |  | CString |  |
| Savable | RevertLocation |  | void |  |
| Savable | Self |  | Savable |  |
| Savable | SetFilename |  | void |  |
| Savable | SetLocation | 1. unknown | void |  |
| Savable | SetSelected | 1. unknown | void |  |
| Savable | Warning |  | CString |  |
| SavableGroup | AccessSelf |  | SavableGroup |  |
| SavableGroup | HasError |  | bool |  |
| SavableGroup | HasWarning |  | bool |  |
| SavableGroup | IsExpanded |  | bool |  |
| SavableGroup | IsRevertible |  | bool |  |
| SavableGroup | IsSelected |  | bool |  |
| SavableGroup | IsSelectedIndeterminable |  | bool |  |
| SavableGroup | Location |  | CString |  |
| SavableGroup | RevertLocation |  | void |  |
| SavableGroup | Savables |  | unknown |  |
| SavableGroup | Self |  | SavableGroup |  |
| SavableGroup | SetLocation | 1. unknown | void |  |
| SavableGroup | SetSelected | 1. unknown | void |  |
| SavableGroup | Title |  | CString |  |
| SavableGroup | ToggleExpanded |  | void |  |
| SaveDialog | AccessSelf |  | SaveDialog |  |
| SaveDialog | FindGroupLocation | 1. unknown 2. unknown | void |  |
| SaveDialog | FindLocation | 1. unknown 2. unknown | void |  |
| SaveDialog | Groups |  | unknown |  |
| SaveDialog | IsSelected |  | bool |  |
| SaveDialog | IsSelectedIndeterminable |  | bool |  |
| SaveDialog | SavableCount |  | int32 |  |
| SaveDialog | Self |  | SaveDialog |  |
| SaveDialog | SetSelected | 1. unknown | void |  |
| SaveGame | AccessSelf |  | SaveGame |  |
| SaveGame | GetLastModified |  | CString |  |
| SaveGame | GetName |  | CString |  |
| SaveGame | Self |  | SaveGame |  |
| SaveGameAnalysisView | AccessSelf |  | SaveGameAnalysisView |  |
| SaveGameAnalysisView | GetNote | 1. unknown | CUTF8String |  |
| SaveGameAnalysisView | GetProgress |  | float |  |
| SaveGameAnalysisView | GetSaveGame |  | unknown |  |
| SaveGameAnalysisView | GetShowHidden |  | bool |  |
| SaveGameAnalysisView | IsActive |  | bool |  |
| SaveGameAnalysisView | IsEmpty |  | bool |  |
| SaveGameAnalysisView | IsReading |  | bool |  |
| SaveGameAnalysisView | Self |  | SaveGameAnalysisView |  |
| SaveGameAnalysisView | Sort | 1. unknown | void |  |
| SaveGameAnalysisView | ToggleShowHidden |  | void |  |
| SaveGameAnalyzer | AccessSelf |  | SaveGameAnalyzer |  |
| SaveGameAnalyzer | CancelLoad |  | void |  |
| SaveGameAnalyzer | CloseNotes |  | void |  |
| SaveGameAnalyzer | EditNotes | 1. unknown | void |  |
| SaveGameAnalyzer | ListSaves |  | void |  |
| SaveGameAnalyzer | LoadSelected |  | void |  |
| SaveGameAnalyzer | Self |  | SaveGameAnalyzer |  |
| SaveGameBlockData | AccessSelf |  | SaveGameBlockData |  |
| SaveGameBlockData | GetCharCount |  | int32 |  |
| SaveGameBlockData | GetInstanceCount |  | int32 |  |
| SaveGameBlockData | GetOtherPaths |  | CString |  |
| SaveGameBlockData | GetOtherPathsCount |  | int32 |  |
| SaveGameBlockData | GetParentPercentage |  | float |  |
| SaveGameBlockData | GetPath |  | CString |  |
| SaveGameBlockData | GetPercentage |  | float |  |
| SaveGameBlockData | GetTitle |  | CString |  |
| SaveGameBlockData | GetTokenName |  | CString |  |
| SaveGameBlockData | GetWhitespaceCount |  | int32 |  |
| SaveGameBlockData | GetWhitespaceRatio |  | float |  |
| SaveGameBlockData | Self |  | SaveGameBlockData |  |
| SaveGameConfigView | AccessSelf |  | SaveGameConfigView |  |
| SaveGameConfigView | GetTokenName |  | CString |  |
| SaveGameConfigView | IsActive |  | bool |  |
| SaveGameConfigView | IsDirty |  | bool |  |
| SaveGameConfigView | Save |  | void |  |
| SaveGameConfigView | Self |  | SaveGameConfigView |  |
| SaveGameItem | AccessSelf |  | SaveGameItem |  |
| SaveGameItem | Delete |  | void |  |
| SaveGameItem | GetDate |  | CUTF8String |  |
| SaveGameItem | GetDifferentVersionDesc |  | CString |  |
| SaveGameItem | GetFlag |  | CString |  |
| SaveGameItem | GetFullPath |  | CUTF8String |  |
| SaveGameItem | GetIssuesDesc |  | CString |  |
| SaveGameItem | GetMissingDLCString |  | CString |  |
| SaveGameItem | GetMissingModsString |  | CString |  |
| SaveGameItem | GetPlayerName |  | CUTF8String |  |
| SaveGameItem | GetRealDate |  | CUTF8String |  |
| SaveGameItem | GetSaveLabel |  | CUTF8String |  |
| SaveGameItem | GetVersionName |  | CUTF8String |  |
| SaveGameItem | HasConfirmation |  | bool |  |
| SaveGameItem | HasIssues |  | bool |  |
| SaveGameItem | HasMissingDLC |  | bool |  |
| SaveGameItem | HasMissingMods |  | bool |  |
| SaveGameItem | IsCloudSave |  | bool |  |
| SaveGameItem | IsDifferentVersion |  | bool |  |
| SaveGameItem | IsEnabled |  | bool |  |
| SaveGameItem | IsIncompatible |  | bool |  |
| SaveGameItem | IsIronman |  | bool |  |
| SaveGameItem | IsMultiplayer |  | bool |  |
| SaveGameItem | Replay |  | void |  |
| SaveGameItem | Select |  | void |  |
| SaveGameItem | Self |  | SaveGameItem |  |
| SaveGameListView | AccessSaves |  | unknown |  |
| SaveGameListView | AccessSelf |  | SaveGameListView |  |
| SaveGameListView | HasSelection |  | bool |  |
| SaveGameListView | IsActive |  | bool |  |
| SaveGameListView | IsReading |  | bool |  |
| SaveGameListView | IsSelected | 1. unknown | bool |  |
| SaveGameListView | Self |  | SaveGameListView |  |
| SaveGameListView | SetSelected | 1. unknown | void |  |
| SaveGameListView | Sort | 1. unknown | void |  |
| SaveListWindow | AccessSelf |  | SaveListWindow |  |
| SaveListWindow | Delete | 1. unknown | void |  |
| SaveListWindow | GetPlaythroughs |  | unknown |  |
| SaveListWindow | IsPendingToReadSaveFiles |  | bool |  |
| SaveListWindow | IsWindowEnabled |  | bool |  |
| SaveListWindow | OnDelete | 1. unknown | void |  |
| SaveListWindow | Self |  | SaveListWindow |  |
| SaveNameWindow | AccessSaves |  | unknown |  |
| SaveNameWindow | AccessSelf |  | SaveNameWindow |  |
| SaveNameWindow | CanToggleCloudSaves |  | bool |  |
| SaveNameWindow | Cancel |  | void |  |
| SaveNameWindow | CloudSaveTooltip |  | CString |  |
| SaveNameWindow | GetCloudSaveFrame |  | int32 |  |
| SaveNameWindow | GetDefaultSaveName |  | CUTF8String |  |
| SaveNameWindow | GetSaveErrors |  | CString |  |
| SaveNameWindow | IsCloudSaveSelected |  | bool |  |
| SaveNameWindow | IsSaveNameOk |  | bool |  |
| SaveNameWindow | IsSaveOk |  | bool |  |
| SaveNameWindow | OnCloudSaveClick |  | void |  |
| SaveNameWindow | Save |  | void |  |
| SaveNameWindow | Self |  | SaveNameWindow |  |
| ScaledStaticModifierWrap | AccessSelf |  | ScaledStaticModifierWrap |  |
| ScaledStaticModifierWrap | GetEffect |  | CString |  |
| ScaledStaticModifierWrap | GetIcon |  | unknown |  |
| ScaledStaticModifierWrap | GetModifier |  | unknown |  |
| ScaledStaticModifierWrap | Self |  | ScaledStaticModifierWrap |  |
| Scenario | AccessSelf |  | Scenario |  |
| Scenario | GetCountryTag |  | CString |  |
| Scenario | GetCountryTagLong |  | CString |  |
| Scenario | GetDesc |  | CString |  |
| Scenario | GetDifficultyLevelName |  | CString |  |
| Scenario | GetFlag |  | CString |  |
| Scenario | GetKey |  | CString |  |
| Scenario | GetName |  | CString |  |
| Scenario | GetPlayStyleDesc |  | CString |  |
| Scenario | GetPlayStyleName |  | CString |  |
| Scenario | IsPlayStyleKey | 1. unknown | bool |  |
| Scenario | Self |  | Scenario |  |
| SceneData | AccessSelf |  | SceneData |  |
| SceneData | GetKey |  | CString |  |
| SceneData | Self |  | SceneData |  |
| SceneEditor | AccessSelf |  | SceneEditor |  |
| SceneEditor | AccessUndoer |  | unknown |  |
| SceneEditor | AddLocator |  | void |  |
| SceneEditor | AddMesh | 1. unknown | void |  |
| SceneEditor | AddParticle | 1. unknown | void |  |
| SceneEditor | AddScenePreset |  | void |  |
| SceneEditor | AddSchematic | 1. unknown | void |  |
| SceneEditor | AddSubscene | 1. unknown | void |  |
| SceneEditor | CloneSelectedEntities |  | void |  |
| SceneEditor | CreateNewScene | 1. unknown | void |  |
| SceneEditor | EnableEnvironmentsPropertiesWindow |  | void |  |
| SceneEditor | EnableHierarchyWindow |  | void |  |
| SceneEditor | EnableScenePresetsWindow |  | void |  |
| SceneEditor | FitCamera |  | void |  |
| SceneEditor | GetComponentEditorLayoutPolicy |  | unknown |  |
| SceneEditor | GetEditorId |  | CString |  |
| SceneEditor | GetPresetNamesForEntity | 1. unknown | CString |  |
| SceneEditor | IsComponentEditorExpanded |  | bool |  |
| SceneEditor | IsEnabled | 1. unknown | bool |  |
| SceneEditor | IsEnvironmentPropertiesWindowVisible |  | bool |  |
| SceneEditor | IsGridEnabled |  | bool |  |
| SceneEditor | IsHierarchyWindowVisible |  | bool |  |
| SceneEditor | IsPresetContainsEnvironment | 1. unknown | bool |  |
| SceneEditor | IsSaveable |  | bool |  |
| SceneEditor | IsScenePresetsWindowVisible |  | bool |  |
| SceneEditor | IsSubscene |  | bool |  |
| SceneEditor | LoadScene | 1. unknown | void |  |
| SceneEditor | OnAddEnvironmentToPreset | 1. unknown | void |  |
| SceneEditor | OnAlignSelectedObjectsWithViewportClick |  | void |  |
| SceneEditor | OnAlignViewportWithSelectedObjectClick |  | void |  |
| SceneEditor | OnRemoveEnvironmentFromPreset | 1. unknown | void |  |
| SceneEditor | OnSettingsClick |  | void |  |
| SceneEditor | RemoveEntityFromScenePreset | 1. unknown 2. unknown | void |  |
| SceneEditor | RemoveScenePreset | 1. unknown | void |  |
| SceneEditor | RemoveSelectedEntities |  | void |  |
| SceneEditor | RenameScenePreset | 1. unknown | void |  |
| SceneEditor | Save |  | void |  |
| SceneEditor | SaveAs |  | void |  |
| SceneEditor | ScenePresets |  | unknown |  |
| SceneEditor | Self |  | SceneEditor |  |
| SceneEditor | ToggleComponentEditorExpanded |  | void |  |
| SceneEditor | ToggleEnabled | 1. unknown | void |  |
| SceneEditor | ToggleGridEnabled |  | void |  |
| SceneEditor | ToggleScenePresetEnabled | 1. unknown | void |  |
| SceneEditorEnvironmentProperties | AccessSelf |  | SceneEditorEnvironmentProperties |  |
| SceneEditorEnvironmentProperties | IsBloomPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | IsCubeMapPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | IsFogPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | IsKeyLightPropertiesExapnded |  | bool |  |
| SceneEditorEnvironmentProperties | IsPostEffectsPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | IsSsaoPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | IsToneMappingPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | Self |  | SceneEditorEnvironmentProperties |  |
| SceneEditorEnvironmentProperties | ToggleIsBloomPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | ToggleIsCubeMapPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | ToggleIsFogPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | ToggleIsKeyLightPropertiesExapnded |  | bool |  |
| SceneEditorEnvironmentProperties | ToggleIsPostEffectsPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | ToggleIsSsaoPropertiesExpanded |  | bool |  |
| SceneEditorEnvironmentProperties | ToggleIsToneMappingPropertiesExpanded |  | bool |  |
| SceneEditorHierarchyEntry | AccessSelf |  | SceneEditorHierarchyEntry |  |
| SceneEditorHierarchyEntry | GetDebugTooltip |  | CString |  |
| SceneEditorHierarchyEntry | GetMargin |  | int32 |  |
| SceneEditorHierarchyEntry | HasChildren |  | bool |  |
| SceneEditorHierarchyEntry | Id |  | unknown |  |
| SceneEditorHierarchyEntry | IsBottomDropTargetEntered |  | bool |  |
| SceneEditorHierarchyEntry | IsDropTargetIndicatorVisible |  | bool |  |
| SceneEditorHierarchyEntry | IsHovered |  | bool |  |
| SceneEditorHierarchyEntry | IsNameBeingEdited |  | bool |  |
| SceneEditorHierarchyEntry | Name |  | CString |  |
| SceneEditorHierarchyEntry | OnBottomDropTargetEnter |  | void |  |
| SceneEditorHierarchyEntry | OnCenterDropTargetEnter |  | void |  |
| SceneEditorHierarchyEntry | Self |  | SceneEditorHierarchyEntry |  |
| SceneEditorHierarchyEntry | SetHovered | 1. unknown | void |  |
| SceneEditorHierarchyEntry | SetIsDropTargetIndicatorVisible | 1. unknown | void |  |
| SceneEditorHierarchyEntry | ShouldShowChildren |  | bool |  |
| SceneEntityComponentsEditor | AccessSelf |  | SceneEntityComponentsEditor |  |
| SceneEntityComponentsEditor | HasComponents |  | bool |  |
| SceneEntityComponentsEditor | Self |  | SceneEntityComponentsEditor |  |
| SceneHierarchy | AccessSelf |  | SceneHierarchy |  |
| SceneHierarchy | CanCloneHierarchies |  | bool |  |
| SceneHierarchy | CloneSelectedHierarchies |  | void |  |
| SceneHierarchy | Entities |  | unknown |  |
| SceneHierarchy | GetEntryValidator |  | unknown |  |
| SceneHierarchy | GroupSelectedEntities |  | void |  |
| SceneHierarchy | OnEntityRightClick | 1. unknown | void |  |
| SceneHierarchy | OnEntryDroppedAtBottomOf | 1. unknown | void |  |
| SceneHierarchy | OnEntryDroppedAtCenterOf | 1. unknown | void |  |
| SceneHierarchy | OnFinishedEntityRename | 1. unknown | void |  |
| SceneHierarchy | Self |  | SceneHierarchy |  |
| SceneHierarchy | SetParentOfSelectionTo | 1. unknown | void |  |
| SceneHierarchy | SetParentOfSelectionToNone |  | void |  |
| SceneHierarchy | StartEntityRename | 1. unknown | void |  |
| SceneHierarchy | ToggleEntityShowChildren | 1. unknown | void |  |
| ScenePreset | AccessSelf |  | ScenePreset |  |
| ScenePreset | Entities |  | unknown |  |
| ScenePreset | IsEnable |  | bool |  |
| ScenePreset | IsNameBeingEdited |  | bool |  |
| ScenePreset | IsShowEntities |  | bool |  |
| ScenePreset | Name |  | CString |  |
| ScenePreset | Self |  | ScenePreset |  |
| ScenePreset | ToggleNameBeingEdited |  | bool |  |
| ScenePreset | ToggleShowEntities |  | void |  |
| ScenePresetEntity | AccessSelf |  | ScenePresetEntity |  |
| ScenePresetEntity | GetPresetHierarchyDepth |  | uint32 |  |
| ScenePresetEntity | Id |  | unknown |  |
| ScenePresetEntity | Name |  | CString |  |
| ScenePresetEntity | Self |  | ScenePresetEntity |  |
| SceneProfiler | AccessSelf |  | SceneProfiler |  |
| SceneProfiler | CurrentLOD |  | int32 |  |
| SceneProfiler | FPS |  | float |  |
| SceneProfiler | IsFPSVisible |  | bool |  |
| SceneProfiler | IsLODVisible |  | bool |  |
| SceneProfiler | IsNumJointsVisible |  | bool |  |
| SceneProfiler | IsNumMeshLocatorsVisible |  | bool |  |
| SceneProfiler | IsNumSceneLocatorsVisible |  | bool |  |
| SceneProfiler | IsNumTrianglesVisible |  | bool |  |
| SceneProfiler | IsProfileSelectedEntities |  | bool |  |
| SceneProfiler | IsProfilerEnabled |  | bool |  |
| SceneProfiler | IsTextureMemoryVisible |  | bool |  |
| SceneProfiler | NumJoints |  | int32 |  |
| SceneProfiler | NumMeshLocators |  | int32 |  |
| SceneProfiler | NumSceneLocators |  | int32 |  |
| SceneProfiler | NumTriangles |  | int32 |  |
| SceneProfiler | Self |  | SceneProfiler |  |
| SceneProfiler | TextureMemory |  | CString |  |
| SceneSelection | AccessSelf |  | SceneSelection |  |
| SceneSelection | ChangeSelectionIfNotSelected | 1. unknown | void |  |
| SceneSelection | HasSelection |  | bool |  |
| SceneSelection | IsClickable | 1. unknown | bool |  |
| SceneSelection | IsSelected | 1. unknown | bool |  |
| SceneSelection | Select | 1. unknown 2. unknown | void |  |
| SceneSelection | Self |  | SceneSelection |  |
| SceneTransform | AccessSelf |  | SceneTransform |  |
| SceneTransform | CycleTranslationMode |  | void |  |
| SceneTransform | GetTranslationModeDesc |  | CString |  |
| SceneTransform | IsCurrentGizmoSpaceLocal |  | bool |  |
| SceneTransform | IsModeSelected | 1. unknown | bool |  |
| SceneTransform | OpenTransformSettings |  | void |  |
| SceneTransform | Self |  | SceneTransform |  |
| SceneTransform | SetMode | 1. unknown | void |  |
| SceneTransform | ToggleGizmoSpace |  | void |  |
| Scope | AccessSelf |  | Scope |  |
| Scope | ActiveResolution |  | unknown | Jomini Script System |
| Scope | AdvanceType |  | unknown | Jomini Script System |
| Scope | Age |  | unknown | Jomini Script System |
| Scope | Area |  | unknown | Jomini Script System |
| Scope | Artist |  | unknown | Jomini Script System |
| Scope | Avatar |  | unknown | Jomini Script System |
| Scope | Building |  | unknown | Jomini Script System |
| Scope | BuildingType |  | unknown | Jomini Script System |
| Scope | Cabinet |  | unknown | Jomini Script System |
| Scope | Cardinal |  | unknown | Jomini Script System |
| Scope | CasusBelli |  | unknown | Jomini Script System |
| Scope | Character |  | unknown | Jomini Script System |
| Scope | CharacterInteraction |  | unknown | Jomini Script System |
| Scope | ChildEducation |  | unknown | Jomini Script System |
| Scope | Climate |  | unknown | Jomini Script System |
| Scope | ColonialCharter |  | unknown | Jomini Script System |
| Scope | Combat |  | unknown | Jomini Script System |
| Scope | CombatSide |  | unknown | Jomini Script System |
| Scope | Continent |  | unknown | Jomini Script System |
| Scope | Country |  | unknown | Jomini Script System |
| Scope | CountryInteraction |  | unknown | Jomini Script System |
| Scope | CountryRank |  | unknown | Jomini Script System |
| Scope | Culture |  | unknown | Jomini Script System |
| Scope | CultureGroup |  | unknown | Jomini Script System |
| Scope | DisasterType |  | unknown | Jomini Script System |
| Scope | Disease |  | unknown | Jomini Script System |
| Scope | DiseaseOutbreak |  | unknown | Jomini Script System |
| Scope | Dynasty |  | unknown | Jomini Script System |
| Scope | EmploymentSystem |  | unknown | Jomini Script System |
| Scope | Estate |  | unknown | Jomini Script System |
| Scope | EstateType |  | unknown | Jomini Script System |
| Scope | Ethnicity |  | unknown | Jomini Script System |
| Scope | Exploration |  | unknown | Jomini Script System |
| Scope | Faction |  | unknown | Jomini Script System |
| Scope | FormableCountry |  | unknown | Jomini Script System |
| Scope | GenericAction |  | unknown | Jomini Script System |
| Scope | GetFlagName |  | CString |  |
| Scope | GetList | 1. unknown | unknown |  |
| Scope | GetScriptValueDesc | 1. unknown | CString |  |
| Scope | GetValue |  | CFixedPoint |  |
| Scope | GetValueWithDefault | 1. unknown | CFixedPoint |  |
| Scope | God |  | unknown | Jomini Script System |
| Scope | Goods |  | unknown | Jomini Script System |
| Scope | GoodsDemand |  | unknown | Jomini Script System |
| Scope | GovernmentType |  | unknown | Jomini Script System |
| Scope | Hegemony |  | unknown | Jomini Script System |
| Scope | HeirSelection |  | unknown | Jomini Script System |
| Scope | HolySite |  | unknown | Jomini Script System |
| Scope | HolySiteDefinition |  | unknown | Jomini Script System |
| Scope | HolySiteType |  | unknown | Jomini Script System |
| Scope | Institution |  | unknown | Jomini Script System |
| Scope | InternationalOrganization |  | unknown | Jomini Script System |
| Scope | InternationalOrganizationType |  | unknown | Jomini Script System |
| Scope | IsSet |  | bool |  |
| Scope | LandOwnershipRule |  | unknown | Jomini Script System |
| Scope | Language |  | unknown | Jomini Script System |
| Scope | LanguageFamily |  | unknown | Jomini Script System |
| Scope | Law |  | unknown | Jomini Script System |
| Scope | LevySetup |  | unknown | Jomini Script System |
| Scope | Loan |  | unknown | Jomini Script System |
| Scope | Location |  | unknown | Jomini Script System |
| Scope | LocationRank |  | unknown | Jomini Script System |
| Scope | Market |  | unknown | Jomini Script System |
| Scope | Mercenary |  | unknown | Jomini Script System |
| Scope | MissionDefinition |  | unknown | Jomini Script System |
| Scope | MissionTaskDefinition |  | unknown | Jomini Script System |
| Scope | ParliamenType |  | unknown | Jomini Script System |
| Scope | ParliamentAgenda |  | unknown | Jomini Script System |
| Scope | ParliamentIssue |  | unknown | Jomini Script System |
| Scope | Payment |  | unknown | Jomini Script System |
| Scope | Policy |  | unknown | Jomini Script System |
| Scope | Pop |  | unknown | Jomini Script System |
| Scope | PopType |  | unknown | Jomini Script System |
| Scope | Price |  | unknown | Jomini Script System |
| Scope | Privateer |  | unknown | Jomini Script System |
| Scope | ProductionMethod |  | unknown | Jomini Script System |
| Scope | Province |  | unknown | Jomini Script System |
| Scope | ProvinceDefinition |  | unknown | Jomini Script System |
| Scope | Rebel |  | unknown | Jomini Script System |
| Scope | RecruitmentMethod |  | unknown | Jomini Script System |
| Scope | RegencyType |  | unknown | Jomini Script System |
| Scope | Region |  | unknown | Jomini Script System |
| Scope | RelationType |  | unknown | Jomini Script System |
| Scope | Religion |  | unknown | Jomini Script System |
| Scope | ReligionGroup |  | unknown | Jomini Script System |
| Scope | ReligiousAspect |  | unknown | Jomini Script System |
| Scope | ReligiousFigure |  | unknown | Jomini Script System |
| Scope | ReligiousFocus |  | unknown | Jomini Script System |
| Scope | ReligiousSchool |  | unknown | Jomini Script System |
| Scope | Resolution |  | unknown | Jomini Script System |
| Scope | RoadType |  | unknown | Jomini Script System |
| Scope | ScriptValue | 1. unknown | CFixedPoint |  |
| Scope | ScriptableHintDefinition |  | unknown | Jomini Script System |
| Scope | ScriptedPeaceTreatyType |  | unknown | Jomini Script System |
| Scope | Self |  | Scope |  |
| Scope | Siege |  | unknown | Jomini Script System |
| Scope | Situation |  | unknown | Jomini Script System |
| Scope | SocietalValue |  | unknown | Jomini Script System |
| Scope | SpecialStatus |  | unknown | Jomini Script System |
| Scope | SubContinent |  | unknown | Jomini Script System |
| Scope | SubUnit |  | unknown | Jomini Script System |
| Scope | SubUnitCategory |  | unknown | Jomini Script System |
| Scope | SubjectMilitaryStance |  | unknown | Jomini Script System |
| Scope | SubjectType |  | unknown | Jomini Script System |
| Scope | Topography |  | unknown | Jomini Script System |
| Scope | Trade |  | unknown | Jomini Script System |
| Scope | Trait |  | unknown | Jomini Script System |
| Scope | Unit |  | unknown | Jomini Script System |
| Scope | UnitAbility |  | unknown | Jomini Script System |
| Scope | UnitType |  | unknown | Jomini Script System |
| Scope | VarRemaining | 1. unknown | int32 |  |
| Scope | Vegetation |  | unknown | Jomini Script System |
| Scope | War |  | unknown | Jomini Script System |
| Scope | WeatherSystem |  | unknown | Jomini Script System |
| Scope | WorkOfArt |  | unknown | Jomini Script System |
| Scope | WorkOfArtType |  | unknown | Jomini Script System |
| ScopeDebugData | AccessSelf |  | ScopeDebugData |  |
| ScopeDebugData | GetDebugInformation |  | CString |  |
| ScopeDebugData | GetRawID |  | CString |  |
| ScopeDebugData | GetTypeData |  | CString |  |
| ScopeDebugData | GetTypeID |  | CString |  |
| ScopeDebugData | GetTypeName |  | CString |  |
| ScopeDebugData | IsValid |  | bool |  |
| ScopeDebugData | Self |  | ScopeDebugData |  |
| ScopeDebugData | SupportsVariables |  | bool |  |
| ScopeDebugInspectorPlugin | AccessSelf |  | ScopeDebugInspectorPlugin |  |
| ScopeDebugInspectorPlugin | Self |  | ScopeDebugInspectorPlugin |  |
| ScopeObjectEditor | AccessSelf |  | ScopeObjectEditor |  |
| ScopeObjectEditor | AsBool |  | bool |  |
| ScopeObjectEditor | AsString |  | CString |  |
| ScopeObjectEditor | GetID |  | uint64 |  |
| ScopeObjectEditor | GetSelectedType |  | CVector2i |  |
| ScopeObjectEditor | GetTypeData |  | CString |  |
| ScopeObjectEditor | GetValue |  | CString |  |
| ScopeObjectEditor | GetVariableTypes |  | unknown |  |
| ScopeObjectEditor | IsBool |  | bool |  |
| ScopeObjectEditor | IsColor |  | bool |  |
| ScopeObjectEditor | IsDate |  | bool |  |
| ScopeObjectEditor | IsFlag |  | bool |  |
| ScopeObjectEditor | IsNumber |  | bool |  |
| ScopeObjectEditor | IsReference |  | bool |  |
| ScopeObjectEditor | Self |  | ScopeObjectEditor |  |
| ScopeObjectEditor | SetFromString |  | void |  |
| ScopeObjectEditor | SetIDFromString |  | void |  |
| ScopeObjectEditor | SetSelectedType |  | void |  |
| ScopeObjectEditor | SetTypeDataFromString |  | void |  |
| ScopeObjectEditor | ToggleBool |  | void |  |
| ScopeObjectProvider | AccessSelf |  | ScopeObjectProvider |  |
| ScopeObjectProvider | GetError |  | CString |  |
| ScopeObjectProvider | GetFilteredResultCount |  | int32 |  |
| ScopeObjectProvider | GetTotalResultCount |  | int32 |  |
| ScopeObjectProvider | GetTriggerString |  | CString |  |
| ScopeObjectProvider | HasError |  | bool |  |
| ScopeObjectProvider | Self |  | ScopeObjectProvider |  |
| ScopeObjectProvider | SetTriggerString |  | void |  |
| ScopeObjectProvider | UpdateFilter |  | void |  |
| ScopeObjectType | AccessSelf |  | ScopeObjectType |  |
| ScopeObjectType | GetName |  | CString |  |
| ScopeObjectType | Self |  | ScopeObjectType |  |
| ScopedEditorSettingsCategory | AccessSelf |  | ScopedEditorSettingsCategory |  |
| ScopedEditorSettingsCategory | Self |  | ScopedEditorSettingsCategory |  |
| Score | AccessSelf |  | Score |  |
| Score | GetAbilityScore | 1. unknown | CFixedPoint |  |
| Score | GetAbilityScoreInfo | 1. unknown | CString |  |
| Score | GetAccumulatedScore |  | CFixedPoint |  |
| Score | GetAccumulatedScoreInfo | 1. unknown | CString |  |
| Score | GetCurrentRank |  | CString |  |
| Score | GetScore |  | CFixedPoint |  |
| Score | GetScoreDescriptionForUI |  | CString |  |
| Score | GetScoreInfoForUI |  | CString |  |
| Score | Self |  | Score |  |
| ScoreView | AccessSelf |  | ScoreView |  |
| ScoreView | GetPlayer |  | unknown |  |
| ScoreView | GetScoreSortSearch |  | unknown |  |
| ScoreView | GetScoreView |  | unknown |  |
| ScoreView | IsLeftPanel |  | bool |  |
| ScoreView | IsRightPanel |  | bool |  |
| ScoreView | Self |  | ScoreView |  |
| ScoreViewItem | AccessSelf |  | ScoreViewItem |  |
| ScoreViewItem | GetCountry |  | unknown |  |
| ScoreViewItem | Self |  | ScoreViewItem |  |
| ScriptProfilerEntry | AccessSelf |  | ScriptProfilerEntry |  |
| ScriptProfilerEntry | GetAverageTimeExclusive |  | double |  |
| ScriptProfilerEntry | GetAverageTimeInclusive |  | double |  |
| ScriptProfilerEntry | GetBottleneckTime |  | double |  |
| ScriptProfilerEntry | GetCallCount |  | uint64 |  |
| ScriptProfilerEntry | GetFile |  | unknown |  |
| ScriptProfilerEntry | GetFileAndLine |  | CString |  |
| ScriptProfilerEntry | GetFileName |  | unknown |  |
| ScriptProfilerEntry | GetFileNameAndLine |  | CString |  |
| ScriptProfilerEntry | GetFormattedBottleneckTiming |  | CString |  |
| ScriptProfilerEntry | GetFormattedTiming |  | CString |  |
| ScriptProfilerEntry | GetLine |  | int32 |  |
| ScriptProfilerEntry | GetMaxTimeInclusive |  | double |  |
| ScriptProfilerEntry | GetMinTimeInclusive |  | double |  |
| ScriptProfilerEntry | GetPerFrameTimeExclusive |  | double |  |
| ScriptProfilerEntry | GetPerFrameTimeInclusive |  | double |  |
| ScriptProfilerEntry | GetPerTickTimeExclusive |  | double |  |
| ScriptProfilerEntry | GetPerTickTimeInclusive |  | double |  |
| ScriptProfilerEntry | GetShortDescription |  | CString |  |
| ScriptProfilerEntry | GetTiming |  | double |  |
| ScriptProfilerEntry | GetTotalTimeExclusive |  | double |  |
| ScriptProfilerEntry | GetTotalTimeInclusive |  | double |  |
| ScriptProfilerEntry | GetType |  | CString |  |
| ScriptProfilerEntry | GetVariant |  | CString |  |
| ScriptProfilerEntry | HasFileLocation |  | bool |  |
| ScriptProfilerEntry | HasSamples |  | bool |  |
| ScriptProfilerEntry | OpenInCodeEditor |  | void |  |
| ScriptProfilerEntry | OpenInScriptEditor |  | void |  |
| ScriptProfilerEntry | Select |  | void |  |
| ScriptProfilerEntry | SelectFile |  | void |  |
| ScriptProfilerEntry | Self |  | ScriptProfilerEntry |  |
| ScriptProfilerFileLine | AccessSelf |  | ScriptProfilerFileLine |  |
| ScriptProfilerFileLine | GetAverageTimeExclusive |  | double |  |
| ScriptProfilerFileLine | GetAverageTimeInclusive |  | double |  |
| ScriptProfilerFileLine | GetBottleneckTime |  | double |  |
| ScriptProfilerFileLine | GetCallCount |  | uint64 |  |
| ScriptProfilerFileLine | GetFormattedBottleneckTiming |  | CString |  |
| ScriptProfilerFileLine | GetFormattedTiming |  | CString |  |
| ScriptProfilerFileLine | GetLine |  | int32 |  |
| ScriptProfilerFileLine | GetMaxTimeInclusive |  | double |  |
| ScriptProfilerFileLine | GetMinTimeInclusive |  | double |  |
| ScriptProfilerFileLine | GetPerFrameTimeExclusive |  | double |  |
| ScriptProfilerFileLine | GetPerFrameTimeInclusive |  | double |  |
| ScriptProfilerFileLine | GetPerTickTimeExclusive |  | double |  |
| ScriptProfilerFileLine | GetPerTickTimeInclusive |  | double |  |
| ScriptProfilerFileLine | GetText |  | unknown |  |
| ScriptProfilerFileLine | GetTiming |  | double |  |
| ScriptProfilerFileLine | GetTooltip |  | CString |  |
| ScriptProfilerFileLine | GetTotalTimeExclusive |  | double |  |
| ScriptProfilerFileLine | GetTotalTimeInclusive |  | double |  |
| ScriptProfilerFileLine | HasSamples |  | bool |  |
| ScriptProfilerFileLine | OpenInCodeEditor |  | void |  |
| ScriptProfilerFileLine | OpenInScriptEditor |  | void |  |
| ScriptProfilerFileLine | Select |  | void |  |
| ScriptProfilerFileLine | Self |  | ScriptProfilerFileLine |  |
| ScriptProfilerGui | AccessSelf |  | ScriptProfilerGui |  |
| ScriptProfilerGui | GetCaptureTime |  | double |  |
| ScriptProfilerGui | GetCapturedFrames |  | uint64 |  |
| ScriptProfilerGui | GetCapturedSamples |  | int32 |  |
| ScriptProfilerGui | GetCapturedTicks |  | uint64 |  |
| ScriptProfilerGui | GetCurrentEntry |  | unknown |  |
| ScriptProfilerGui | GetCurrentEntryChildren |  | unknown |  |
| ScriptProfilerGui | GetCurrentEntryParents |  | unknown |  |
| ScriptProfilerGui | GetFileLines |  | unknown |  |
| ScriptProfilerGui | GetFileSearchList |  | unknown |  |
| ScriptProfilerGui | GetModeSearchList |  | unknown |  |
| ScriptProfilerGui | GetNextFile |  | unknown |  |
| ScriptProfilerGui | GetPreviousFile |  | unknown |  |
| ScriptProfilerGui | HasNextFile |  | bool |  |
| ScriptProfilerGui | HasPreviousFile |  | bool |  |
| ScriptProfilerGui | IsCapturing |  | bool |  |
| ScriptProfilerGui | OpenFileInCodeEditor |  | void |  |
| ScriptProfilerGui | OpenFileInScriptEditor |  | void |  |
| ScriptProfilerGui | OpenNextFile |  | void |  |
| ScriptProfilerGui | OpenPreviousFile |  | void |  |
| ScriptProfilerGui | ResetCaptureData |  | void |  |
| ScriptProfilerGui | RestartCapture |  | void |  |
| ScriptProfilerGui | SelectEdge |  | void |  |
| ScriptProfilerGui | SelectRoot |  | void |  |
| ScriptProfilerGui | Self |  | ScriptProfilerGui |  |
| ScriptProfilerGui | StartCapture |  | void |  |
| ScriptProfilerGui | StopCapture |  | void |  |
| ScriptRunnerInspector | AccessSelf |  | ScriptRunnerInspector |  |
| ScriptRunnerInspector | GetEffect |  | CString |  |
| ScriptRunnerInspector | GetTrigger |  | CString |  |
| ScriptRunnerInspector | ParseEffect |  | void |  |
| ScriptRunnerInspector | RunEffect |  | void |  |
| ScriptRunnerInspector | RunTrigger |  | void |  |
| ScriptRunnerInspector | Self |  | ScriptRunnerInspector |  |
| ScriptRunnerInspector | SetEffect |  | void |  |
| ScriptRunnerInspector | SetTrigger |  | void |  |
| ScriptRunnerInspector | ShouldModifyEventTargets |  | bool |  |
| ScriptRunnerInspector | ToggleModifyEventTargets |  | void |  |
| ScriptRunnerResult | AccessSelf |  | ScriptRunnerResult |  |
| ScriptRunnerResult | GetResult |  | CString |  |
| ScriptRunnerResult | GetTooltip |  | CString |  |
| ScriptRunnerResult | HasResult |  | bool |  |
| ScriptRunnerResult | IsMissingTooltip |  | bool |  |
| ScriptRunnerResult | IsOutputVisible |  | bool |  |
| ScriptRunnerResult | IsValid |  | bool |  |
| ScriptRunnerResult | Self |  | ScriptRunnerResult |  |
| ScriptRunnerResult | ToggleOutputVisible |  | void |  |
| ScriptableHintDefinition | AccessSelf |  | ScriptableHintDefinition |  |
| ScriptableHintDefinition | GetItemKey |  | CString |  |
| ScriptableHintDefinition | GetName |  | CString |  |
| ScriptableHintDefinition | GetNameWithNoTooltip |  | CString |  |
| ScriptableHintDefinition | IsHighPriority | 1. unknown | bool |  |
| ScriptableHintDefinition | IsHighPriorityForPlayer |  | bool |  |
| ScriptableHintDefinition | IsVisibleForPlayer |  | bool |  |
| ScriptableHintDefinition | MakeScope |  | Scope | Jomini Script System |
| ScriptableHintDefinition | Self |  | ScriptableHintDefinition |  |
| ScriptedGui | AccessSelf |  | ScriptedGui |  |
| ScriptedGui | BuildTooltip | 1. unknown | CString |  |
| ScriptedGui | Execute | 1. unknown | void |  |
| ScriptedGui | ExecuteTooltip | 1. unknown | CString |  |
| ScriptedGui | IsShown | 1. unknown | bool |  |
| ScriptedGui | IsShownTooltip | 1. unknown | CString |  |
| ScriptedGui | IsValid | 1. unknown | bool |  |
| ScriptedGui | IsValidTooltip | 1. unknown | CString |  |
| ScriptedGui | Self |  | ScriptedGui |  |
| ScriptedHintItem | AccessSelf |  | ScriptedHintItem |  |
| ScriptedHintItem | GetHint |  | unknown |  |
| ScriptedHintItem | GetHintKey |  | CString |  |
| ScriptedHintItem | GetHintText |  | CString |  |
| ScriptedHintItem | GetPriorityTooltip |  | CString |  |
| ScriptedHintItem | IsHighPriority |  | bool |  |
| ScriptedHintItem | Self |  | ScriptedHintItem |  |
| ScriptedHintItem | ShouldShow |  | bool |  |
| ScriptedPeaceTreatyType | AccessSelf |  | ScriptedPeaceTreatyType |  |
| ScriptedPeaceTreatyType | GetDesc |  | CString |  |
| ScriptedPeaceTreatyType | GetEffect |  | CString |  |
| ScriptedPeaceTreatyType | GetName |  | CString |  |
| ScriptedPeaceTreatyType | GetNameWithNoTooltip |  | CString |  |
| ScriptedPeaceTreatyType | GetTooltip |  | CString |  |
| ScriptedPeaceTreatyType | MakeScope |  | Scope | Jomini Script System |
| ScriptedPeaceTreatyType | Self |  | ScriptedPeaceTreatyType |  |
| ScriptedRelationType | AccessSelf |  | ScriptedRelationType |  |
| ScriptedRelationType | GetDesc |  | CString |  |
| ScriptedRelationType | GetName |  | CString |  |
| ScriptedRelationType | GetNameWithContext | 1. unknown 2. unknown | CString |  |
| ScriptedRelationType | GetNameWithNoTooltip |  | CString |  |
| ScriptedRelationType | GetTooltip | 1. unknown | CString |  |
| ScriptedRelationType | MakeScope |  | Scope | Jomini Script System |
| ScriptedRelationType | Self |  | ScriptedRelationType |  |
| ScriptedRelationTypeWithContextWrap | AccessSelf |  | ScriptedRelationTypeWithContextWrap |  |
| ScriptedRelationTypeWithContextWrap | GetFirstCountry |  | unknown |  |
| ScriptedRelationTypeWithContextWrap | GetScriptedRelationType |  | unknown |  |
| ScriptedRelationTypeWithContextWrap | GetSecondCountry |  | unknown |  |
| ScriptedRelationTypeWithContextWrap | GetTooltip |  | CString |  |
| ScriptedRelationTypeWithContextWrap | Self |  | ScriptedRelationTypeWithContextWrap |  |
| SeaCurrentWrap | AccessSelf |  | SeaCurrentWrap |  |
| SeaCurrentWrap | GetName |  | CString |  |
| SeaCurrentWrap | GetTooltip |  | CString |  |
| SeaCurrentWrap | Self |  | SeaCurrentWrap |  |
| SeaZoneView | AccessSelf |  | SeaZoneView |  |
| SeaZoneView | GenerateSceneDesc |  | unknown |  |
| SeaZoneView | GetLocation |  | unknown |  |
| SeaZoneView | GetPlayer |  | unknown |  |
| SeaZoneView | IsCorridor |  | bool |  |
| SeaZoneView | IsFlankVisible | 1. unknown 2. unknown | bool |  |
| SeaZoneView | IsLeftPanel |  | bool |  |
| SeaZoneView | IsRightPanel |  | bool |  |
| SeaZoneView | OnMouseEnterAttackerBox | 1. unknown | void |  |
| SeaZoneView | OnMouseEnterDefenderBox | 1. unknown | void |  |
| SeaZoneView | OnMouseLeaveAttackerBox |  | void |  |
| SeaZoneView | OnMouseLeaveDefenderBox |  | void |  |
| SeaZoneView | Self |  | SeaZoneView |  |
| SearchBar | AccessSelf |  | SearchBar |  |
| SearchBar | ClearEnabledSearchFilters |  | void |  |
| SearchBar | ClearModifiedRangeValues |  | void |  |
| SearchBar | ClearTextFilter | 1. unknown | void |  |
| SearchBar | DisableFilter | 1. unknown | void |  |
| SearchBar | ForceFocus | 1. unknown | void |  |
| SearchBar | GetAutocompleteEntries |  | unknown |  |
| SearchBar | GetCustomEnabledFilters |  | unknown |  |
| SearchBar | GetEnabledFilters |  | unknown |  |
| SearchBar | GetSearchFilterCategories |  | unknown |  |
| SearchBar | GetTextSearchFilters |  | unknown |  |
| SearchBar | HasAnyRangedFilter |  | bool |  |
| SearchBar | HasEnabledSearchFilters |  | bool |  |
| SearchBar | HasModifiedRangeValues |  | bool |  |
| SearchBar | HasSearchFilterCategories |  | bool |  |
| SearchBar | HasTextSearchFilters |  | bool |  |
| SearchBar | IsTextFilterEmpty |  | bool |  |
| SearchBar | OnEditingFinished | 1. unknown 2. unknown | void |  |
| SearchBar | OnEditingFinishedWithChanges | 1. unknown 2. unknown | void |  |
| SearchBar | OnEditingStart | 1. unknown 2. unknown | void |  |
| SearchBar | OnEscapePressed | 1. unknown 2. unknown | void |  |
| SearchBar | OnFocusOut | 1. unknown 2. unknown | void |  |
| SearchBar | OnReturnPressed | 1. unknown 2. unknown | void |  |
| SearchBar | OnTextEdited | 1. unknown 2. unknown | void |  |
| SearchBar | ResetFiltersToDefault |  | void |  |
| SearchBar | Self |  | SearchBar |  |
| SearchFilter | AccessSelf |  | SearchFilter |  |
| SearchFilter | GetName |  | CString |  |
| SearchFilter | GetTooltip |  | CString |  |
| SearchFilter | HasRange |  | bool |  |
| SearchFilter | IsCustomFilter |  | bool |  |
| SearchFilter | IsExclusive |  | bool |  |
| SearchFilter | Self |  | SearchFilter |  |
| SearchFilterCategory | AccessRangeValues | 1. unknown | unknown |  |
| SearchFilterCategory | AccessSelf |  | SearchFilterCategory |  |
| SearchFilterCategory | ClearEnabledFilters |  | void |  |
| SearchFilterCategory | DisableFilter | 1. unknown | void |  |
| SearchFilterCategory | EnableFilter | 1. unknown | void |  |
| SearchFilterCategory | GetEnabledFilters |  | unknown |  |
| SearchFilterCategory | GetFilters |  | unknown |  |
| SearchFilterCategory | GetGroups |  | unknown |  |
| SearchFilterCategory | GetName |  | CString |  |
| SearchFilterCategory | HasEnabledFilters |  | bool |  |
| SearchFilterCategory | HasGroups |  | bool |  |
| SearchFilterCategory | HasName |  | bool |  |
| SearchFilterCategory | HasOnlyExclusiveGroups |  | bool |  |
| SearchFilterCategory | IsCategoryVisible |  | bool |  |
| SearchFilterCategory | IsExpanded |  | bool |  |
| SearchFilterCategory | IsFilterEnabled | 1. unknown | bool |  |
| SearchFilterCategory | IsFilterFromGroupEnabled | 1. unknown | bool |  |
| SearchFilterCategory | Self |  | SearchFilterCategory |  |
| SearchFilterCategory | SetRangeMaxValue | 1. unknown | void |  |
| SearchFilterCategory | SetRangeMinValue | 1. unknown | void |  |
| SearchFilterCategory | Toggle |  | void |  |
| SearchFilterCategory | ToggleFilter | 1. unknown | bool |  |
| SearchFilterGroup | AccessSelf |  | SearchFilterGroup |  |
| SearchFilterGroup | GetFilters |  | unknown |  |
| SearchFilterGroup | GetGroupId |  | int8 |  |
| SearchFilterGroup | GetName |  | CString |  |
| SearchFilterGroup | HasName |  | bool |  |
| SearchFilterGroup | IsExpanded |  | bool |  |
| SearchFilterGroup | IsGroupExclusive |  | bool |  |
| SearchFilterGroup | Self |  | SearchFilterGroup |  |
| SearchFilterGroup | Toggle |  | void |  |
| SearchFilterRange | AccessSelf |  | SearchFilterRange |  |
| SearchFilterRange | GetMax |  | float |  |
| SearchFilterRange | GetMin |  | float |  |
| SearchFilterRange | GetStep |  | float |  |
| SearchFilterRange | Self |  | SearchFilterRange |  |
| SearchFilterRangeValues | AccessSelf |  | SearchFilterRangeValues |  |
| SearchFilterRangeValues | GetMaxSliderValue |  | float |  |
| SearchFilterRangeValues | GetMaxValue |  | CString |  |
| SearchFilterRangeValues | GetMinSliderValue |  | float |  |
| SearchFilterRangeValues | GetMinValue |  | CString |  |
| SearchFilterRangeValues | Self |  | SearchFilterRangeValues |  |
| SearchListNodeWindow | AccessSelf |  | SearchListNodeWindow |  |
| SearchListNodeWindow | CanEditEntry |  | bool |  |
| SearchListNodeWindow | GetEntryTooltip |  | CString |  |
| SearchListNodeWindow | IsEntryEditingSupported |  | bool |  |
| SearchListNodeWindow | OnEntryEditClick |  | void |  |
| SearchListNodeWindow | Self |  | SearchListNodeWindow |  |
| SectionIndex | AccessSelf |  | SectionIndex |  |
| SectionIndex | GetIndex |  | uint16 |  |
| SectionIndex | Self |  | SectionIndex |  |
| SelectCasusBelli | AccessSelf |  | SelectCasusBelli |  |
| SelectCasusBelli | GetCasusBelli |  | unknown |  |
| SelectCasusBelli | GetCreationProgress |  | CFixedPoint |  |
| SelectCasusBelli | GetName |  | CString |  |
| SelectCasusBelli | GetTooltip |  | CString |  |
| SelectCasusBelli | GetWarGoal |  | unknown |  |
| SelectCasusBelli | IsCreating |  | bool |  |
| SelectCasusBelli | IsEnabled |  | bool |  |
| SelectCasusBelli | IsExisting |  | bool |  |
| SelectCasusBelli | IsNoCB |  | bool |  |
| SelectCasusBelli | OnClick |  | void |  |
| SelectCasusBelli | Self |  | SelectCasusBelli |  |
| SelectCharacterInteraction | AccessSelf |  | SelectCharacterInteraction |  |
| SelectCharacterInteraction | CanOpenMarriageFinder |  | bool |  |
| SelectCharacterInteraction | GetCharacter |  | unknown |  |
| SelectCharacterInteraction | GetInteractions |  | unknown |  |
| SelectCharacterInteraction | GetMarriageFinderInfo |  | CString |  |
| SelectCharacterInteraction | MarriageFinder |  | void |  |
| SelectCharacterInteraction | Self |  | SelectCharacterInteraction |  |
| SelectChildEducation | AccessSelf |  | SelectChildEducation |  |
| SelectChildEducation | GetCandidates |  | unknown |  |
| SelectChildEducation | GetPlayer |  | unknown |  |
| SelectChildEducation | IsLeftPanel |  | bool |  |
| SelectChildEducation | IsRightPanel |  | bool |  |
| SelectChildEducation | Self |  | SelectChildEducation |  |
| SelectCountryDiplomacyLateralView | AccessSelf |  | SelectCountryDiplomacyLateralView |  |
| SelectCountryDiplomacyLateralView | GetActionName |  | CString |  |
| SelectCountryDiplomacyLateralView | GetCountriesSortSearch |  | unknown |  |
| SelectCountryDiplomacyLateralView | GetCountryItems |  | unknown |  |
| SelectCountryDiplomacyLateralView | GetNumEnabledWillAccept |  | int32 |  |
| SelectCountryDiplomacyLateralView | GetPlayer |  | unknown |  |
| SelectCountryDiplomacyLateralView | HasInnerRequirements |  | bool |  |
| SelectCountryDiplomacyLateralView | IsLeftPanel |  | bool |  |
| SelectCountryDiplomacyLateralView | IsRightPanel |  | bool |  |
| SelectCountryDiplomacyLateralView | RequireAcceptance |  | bool |  |
| SelectCountryDiplomacyLateralView | Self |  | SelectCountryDiplomacyLateralView |  |
| SelectCreateCasusBelliWindow | AccessSelf |  | SelectCreateCasusBelliWindow |  |
| SelectCreateCasusBelliWindow | GetExisting |  | unknown |  |
| SelectCreateCasusBelliWindow | GetExistingAmount |  | int32 |  |
| SelectCreateCasusBelliWindow | GetPlayer |  | unknown |  |
| SelectCreateCasusBelliWindow | GetPossible |  | unknown |  |
| SelectCreateCasusBelliWindow | IsLeftPanel |  | bool |  |
| SelectCreateCasusBelliWindow | IsRightPanel |  | bool |  |
| SelectCreateCasusBelliWindow | Self |  | SelectCreateCasusBelliWindow |  |
| SelectHeirSelection | AccessSelf |  | SelectHeirSelection |  |
| SelectHeirSelection | GetCandidates |  | unknown |  |
| SelectHeirSelection | GetCurrentCandidate |  | unknown |  |
| SelectHeirSelection | OnClose |  | void |  |
| SelectHeirSelection | Self |  | SelectHeirSelection |  |
| SelectHolySite | AccessSelf |  | SelectHolySite |  |
| SelectHolySite | OnClick | 1. unknown | void |  |
| SelectHolySite | OnClose |  | void |  |
| SelectHolySite | Self |  | SelectHolySite |  |
| SelectInteractionTargetGlue | AccessSelf |  | SelectInteractionTargetGlue |  |
| SelectInteractionTargetGlue | CanDecreaseValue |  | bool |  |
| SelectInteractionTargetGlue | CanIncreaseValue |  | bool |  |
| SelectInteractionTargetGlue | DecreaseValue |  | void |  |
| SelectInteractionTargetGlue | GetAcceptance |  | CString |  |
| SelectInteractionTargetGlue | GetConditions |  | CString |  |
| SelectInteractionTargetGlue | GetDecreaseValueInfo |  | CString |  |
| SelectInteractionTargetGlue | GetDefault |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetDescription |  | CString |  |
| SelectInteractionTargetGlue | GetEffects |  | CString |  |
| SelectInteractionTargetGlue | GetIncreaseValueInfo |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickAndConfirmConditions |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickAndConfirmCost |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickAndConfirmCostValue |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetLeftClickAndConfirmDescription |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickAndConfirmEffects |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickAndConfirmTitle |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickConditions |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickCost |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickCostValue |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetLeftClickDescription |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickEffects |  | CString |  |
| SelectInteractionTargetGlue | GetLeftClickTitle |  | CString |  |
| SelectInteractionTargetGlue | GetMaxValue |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetMinValue |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetObject |  | unknown |  |
| SelectInteractionTargetGlue | GetParent |  | unknown |  |
| SelectInteractionTargetGlue | GetRightClickAndConfirmConditions |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickAndConfirmCost |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickAndConfirmCostValue |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetRightClickAndConfirmDescription |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickAndConfirmEffects |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickAndConfirmTitle |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickConditions |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickCost |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickCostValue |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetRightClickDescription |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickEffects |  | CString |  |
| SelectInteractionTargetGlue | GetRightClickTitle |  | CString |  |
| SelectInteractionTargetGlue | GetStep |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetTitle |  | CString |  |
| SelectInteractionTargetGlue | GetValue |  | CFixedPoint |  |
| SelectInteractionTargetGlue | GetValueConditions |  | CString |  |
| SelectInteractionTargetGlue | GetValueDescription |  | CString |  |
| SelectInteractionTargetGlue | GetValueEffects |  | CString |  |
| SelectInteractionTargetGlue | IncreaseValue |  | void |  |
| SelectInteractionTargetGlue | IsDown |  | bool |  |
| SelectInteractionTargetGlue | IsEnabled |  | bool |  |
| SelectInteractionTargetGlue | IsHovered |  | bool |  |
| SelectInteractionTargetGlue | IsLeftClickAndConfirmEnabled |  | bool |  |
| SelectInteractionTargetGlue | IsLeftClickAndConfirmVisible |  | bool |  |
| SelectInteractionTargetGlue | IsLeftClickEnabled |  | bool |  |
| SelectInteractionTargetGlue | IsLeftClickVisible |  | bool |  |
| SelectInteractionTargetGlue | IsRightClickAndConfirmEnabled |  | bool |  |
| SelectInteractionTargetGlue | IsRightClickAndConfirmVisible |  | bool |  |
| SelectInteractionTargetGlue | IsRightClickEnabled |  | bool |  |
| SelectInteractionTargetGlue | IsRightClickVisible |  | bool |  |
| SelectInteractionTargetGlue | IsSelected |  | bool |  |
| SelectInteractionTargetGlue | IsValueEnabled |  | bool |  |
| SelectInteractionTargetGlue | IsValueVisible |  | bool |  |
| SelectInteractionTargetGlue | IsVisible |  | bool |  |
| SelectInteractionTargetGlue | OnClickValue |  | void |  |
| SelectInteractionTargetGlue | OnLeftClick |  | void |  |
| SelectInteractionTargetGlue | OnLeftClickAndConfirm |  | void |  |
| SelectInteractionTargetGlue | OnMouseDown |  | void |  |
| SelectInteractionTargetGlue | OnMouseEnter | 1. unknown 2. unknown | void |  |
| SelectInteractionTargetGlue | OnMouseLeave | 1. unknown | void |  |
| SelectInteractionTargetGlue | OnMouseUp |  | void |  |
| SelectInteractionTargetGlue | OnRightClick |  | void |  |
| SelectInteractionTargetGlue | OnRightClickAndConfirm |  | void |  |
| SelectInteractionTargetGlue | OnValueChanged |  | void |  |
| SelectInteractionTargetGlue | Self |  | SelectInteractionTargetGlue |  |
| SelectInteractionTargetView | AccessSelf |  | SelectInteractionTargetView |  |
| SelectInteractionTargetView | CanDecreaseCurrentValue |  | bool |  |
| SelectInteractionTargetView | CanDecreaseValue | 1. unknown | bool |  |
| SelectInteractionTargetView | CanIncreaseCurrentValue |  | bool |  |
| SelectInteractionTargetView | CanIncreaseValue | 1. unknown | bool |  |
| SelectInteractionTargetView | CanTargetBeCompleted |  | bool |  |
| SelectInteractionTargetView | Confirm |  | void |  |
| SelectInteractionTargetView | DecreaseCurrentValue |  | void |  |
| SelectInteractionTargetView | DecreaseValue | 1. unknown | void |  |
| SelectInteractionTargetView | ExtraBoolFunc |  | bool |  |
| SelectInteractionTargetView | GetColumns |  | unknown |  |
| SelectInteractionTargetView | GetCurrentParams |  | unknown |  |
| SelectInteractionTargetView | GetCurrentValue |  | CFixedPoint |  |
| SelectInteractionTargetView | GetCurrentValueAcceptance |  | CString |  |
| SelectInteractionTargetView | GetCurrentValueDescription |  | CString |  |
| SelectInteractionTargetView | GetCurrentValueInteractionTarget |  | InteractionTarget |  |
| SelectInteractionTargetView | GetCurrentValueUIAction |  | unknown |  |
| SelectInteractionTargetView | GetDecreaseCurrentValueInfo |  | CString |  |
| SelectInteractionTargetView | GetDecreaseValueInfo | 1. unknown | CString |  |
| SelectInteractionTargetView | GetDefault | 1. unknown | CFixedPoint |  |
| SelectInteractionTargetView | GetIncreaseCurrentValueInfo |  | CString |  |
| SelectInteractionTargetView | GetIncreaseValueInfo | 1. unknown | CString |  |
| SelectInteractionTargetView | GetMaxValue | 1. unknown | CFixedPoint |  |
| SelectInteractionTargetView | GetMinValue | 1. unknown | CFixedPoint |  |
| SelectInteractionTargetView | GetNoneAvailableText |  | CString |  |
| SelectInteractionTargetView | GetNoneAvailableTextOnlyHeader |  | CString |  |
| SelectInteractionTargetView | GetPlayer |  | unknown |  |
| SelectInteractionTargetView | GetStep | 1. unknown | CFixedPoint |  |
| SelectInteractionTargetView | GetTargetObjects |  | unknown |  |
| SelectInteractionTargetView | GetTitle |  | CString |  |
| SelectInteractionTargetView | GetTopLeftDesc |  | CString |  |
| SelectInteractionTargetView | GetTopLeftTexture |  | unknown |  |
| SelectInteractionTargetView | GetTopLeftTitle |  | CString |  |
| SelectInteractionTargetView | GetTopRightDesc |  | CString |  |
| SelectInteractionTargetView | GetTopRightTexture |  | unknown |  |
| SelectInteractionTargetView | GetTopRightTitle |  | CString |  |
| SelectInteractionTargetView | GetValue | 1. unknown | CFixedPoint |  |
| SelectInteractionTargetView | GetValueConditions | 1. unknown | CString |  |
| SelectInteractionTargetView | GetValueDescription | 1. unknown | CString |  |
| SelectInteractionTargetView | GetValueEffects | 1. unknown | CString |  |
| SelectInteractionTargetView | GetValueGlue | 1. unknown | unknown |  |
| SelectInteractionTargetView | HasSelectTarget |  | bool |  |
| SelectInteractionTargetView | IncreaseCurrentValue |  | void |  |
| SelectInteractionTargetView | IncreaseValue | 1. unknown | void |  |
| SelectInteractionTargetView | IsAdvanceType |  | bool |  |
| SelectInteractionTargetView | IsArea |  | bool |  |
| SelectInteractionTargetView | IsArtistType |  | bool |  |
| SelectInteractionTargetView | IsBoolean |  | bool |  |
| SelectInteractionTargetView | IsBuilding |  | bool |  |
| SelectInteractionTargetView | IsCabinet |  | bool |  |
| SelectInteractionTargetView | IsCabinetAction |  | bool |  |
| SelectInteractionTargetView | IsCasusBelli |  | bool |  |
| SelectInteractionTargetView | IsCharacter |  | bool |  |
| SelectInteractionTargetView | IsCharacterInteraction |  | bool |  |
| SelectInteractionTargetView | IsChildEducation |  | bool |  |
| SelectInteractionTargetView | IsColonialCharter |  | bool |  |
| SelectInteractionTargetView | IsCombat |  | bool |  |
| SelectInteractionTargetView | IsCombatSide |  | bool |  |
| SelectInteractionTargetView | IsContinent |  | bool |  |
| SelectInteractionTargetView | IsCountry |  | bool |  |
| SelectInteractionTargetView | IsCountryInteraction |  | bool |  |
| SelectInteractionTargetView | IsCulture |  | bool |  |
| SelectInteractionTargetView | IsCultureGroup |  | bool |  |
| SelectInteractionTargetView | IsCurrentValueEnabled |  | bool |  |
| SelectInteractionTargetView | IsCurrentValueVisible |  | bool |  |
| SelectInteractionTargetView | IsDate |  | bool |  |
| SelectInteractionTargetView | IsDisasterType |  | bool |  |
| SelectInteractionTargetView | IsDynasty |  | bool |  |
| SelectInteractionTargetView | IsEstatePrivilege |  | bool |  |
| SelectInteractionTargetView | IsEstateType |  | bool |  |
| SelectInteractionTargetView | IsExploration |  | bool |  |
| SelectInteractionTargetView | IsFinalTarget | 1. unknown | bool |  |
| SelectInteractionTargetView | IsGenericAction |  | bool |  |
| SelectInteractionTargetView | IsGoods |  | bool |  |
| SelectInteractionTargetView | IsGovernmentReform |  | bool |  |
| SelectInteractionTargetView | IsGovernmentType |  | bool |  |
| SelectInteractionTargetView | IsHolySite |  | bool |  |
| SelectInteractionTargetView | IsInstitution |  | bool |  |
| SelectInteractionTargetView | IsInternationalOrganization |  | bool |  |
| SelectInteractionTargetView | IsLandOwnershipRule |  | bool |  |
| SelectInteractionTargetView | IsLanguage |  | bool |  |
| SelectInteractionTargetView | IsLaw |  | bool |  |
| SelectInteractionTargetView | IsLeftMultiline |  | bool |  |
| SelectInteractionTargetView | IsLeftPanel |  | bool |  |
| SelectInteractionTargetView | IsLevySetup |  | bool |  |
| SelectInteractionTargetView | IsLoan |  | bool |  |
| SelectInteractionTargetView | IsLocation |  | bool |  |
| SelectInteractionTargetView | IsMarket |  | bool |  |
| SelectInteractionTargetView | IsMercenary |  | bool |  |
| SelectInteractionTargetView | IsMission |  | bool |  |
| SelectInteractionTargetView | IsMissionTask |  | bool |  |
| SelectInteractionTargetView | IsParliamentAgenda |  | bool |  |
| SelectInteractionTargetView | IsPayment |  | bool |  |
| SelectInteractionTargetView | IsPeaceTreaty |  | bool |  |
| SelectInteractionTargetView | IsPolicy |  | bool |  |
| SelectInteractionTargetView | IsPop |  | bool |  |
| SelectInteractionTargetView | IsPrivateer |  | bool |  |
| SelectInteractionTargetView | IsProvince |  | bool |  |
| SelectInteractionTargetView | IsProvinceDefinition |  | bool |  |
| SelectInteractionTargetView | IsRebel |  | bool |  |
| SelectInteractionTargetView | IsRecruitmentmethod |  | bool |  |
| SelectInteractionTargetView | IsRegencyType |  | bool |  |
| SelectInteractionTargetView | IsRegion |  | bool |  |
| SelectInteractionTargetView | IsRelationType |  | bool |  |
| SelectInteractionTargetView | IsReligion |  | bool |  |
| SelectInteractionTargetView | IsReligionGroup |  | bool |  |
| SelectInteractionTargetView | IsReligiousAspect |  | bool |  |
| SelectInteractionTargetView | IsReligiousSchool |  | bool |  |
| SelectInteractionTargetView | IsRightMultiline |  | bool |  |
| SelectInteractionTargetView | IsRightPanel |  | bool |  |
| SelectInteractionTargetView | IsSiege |  | bool |  |
| SelectInteractionTargetView | IsSocietalValue |  | bool |  |
| SelectInteractionTargetView | IsSpecialStatus |  | bool |  |
| SelectInteractionTargetView | IsSubContinent |  | bool |  |
| SelectInteractionTargetView | IsSubUnit |  | bool |  |
| SelectInteractionTargetView | IsTopVisible |  | bool |  |
| SelectInteractionTargetView | IsTrade |  | bool |  |
| SelectInteractionTargetView | IsUnit |  | bool |  |
| SelectInteractionTargetView | IsUnitAbility |  | bool |  |
| SelectInteractionTargetView | IsUnitCategory |  | bool |  |
| SelectInteractionTargetView | IsUnitType |  | bool |  |
| SelectInteractionTargetView | IsValue |  | bool |  |
| SelectInteractionTargetView | IsValueEnabled | 1. unknown | bool |  |
| SelectInteractionTargetView | IsValueVisible | 1. unknown | bool |  |
| SelectInteractionTargetView | IsWar |  | bool |  |
| SelectInteractionTargetView | IsWorkOfArtDefiniton |  | bool |  |
| SelectInteractionTargetView | OnClickCurrentValue |  | void |  |
| SelectInteractionTargetView | OnClickValue | 1. unknown | void |  |
| SelectInteractionTargetView | OnValueChanged | 1. unknown | void |  |
| SelectInteractionTargetView | Self |  | SelectInteractionTargetView |  |
| SelectInterveneWindow | AccessSelf |  | SelectInterveneWindow |  |
| SelectInterveneWindow | GetWars |  | unknown |  |
| SelectInterveneWindow | OnClose |  | void |  |
| SelectInterveneWindow | Self |  | SelectInterveneWindow |  |
| SelectLateralViewHistory | AccessSelf |  | SelectLateralViewHistory |  |
| SelectLateralViewHistory | OnClose |  | void |  |
| SelectLateralViewHistory | Self |  | SelectLateralViewHistory |  |
| SelectLoanLateralView | AccessSelf |  | SelectLoanLateralView |  |
| SelectLoanLateralView | GetDeclareBankruptcyUIAction |  | unknown |  |
| SelectLoanLateralView | GetLoansGiven |  | unknown |  |
| SelectLoanLateralView | GetLoansGivenSortSearch |  | unknown |  |
| SelectLoanLateralView | GetLoansTaken |  | unknown |  |
| SelectLoanLateralView | GetLoansTakenSortSearch |  | unknown |  |
| SelectLoanLateralView | GetPlayer |  | unknown |  |
| SelectLoanLateralView | GetRepayAllLoansUIAction |  | unknown |  |
| SelectLoanLateralView | GetRepayAllPossibleLoansUIAction |  | unknown |  |
| SelectLoanLateralView | IsLeftPanel |  | bool |  |
| SelectLoanLateralView | IsRightPanel |  | bool |  |
| SelectLoanLateralView | Self |  | SelectLoanLateralView |  |
| SelectMissionLateralView | AccessSelf |  | SelectMissionLateralView |  |
| SelectMissionLateralView | GetActiveMission |  | unknown |  |
| SelectMissionLateralView | GetAvailableMissions |  | unknown |  |
| SelectMissionLateralView | GetAvailableMissionsSortSearch |  | unknown |  |
| SelectMissionLateralView | GetPlayer |  | unknown |  |
| SelectMissionLateralView | HasActiveMission |  | bool |  |
| SelectMissionLateralView | HasAvailableMission |  | bool |  |
| SelectMissionLateralView | IsLeftPanel |  | bool |  |
| SelectMissionLateralView | IsPlayStyleChecked | 1. unknown | bool |  |
| SelectMissionLateralView | IsPlayStyleEnabled | 1. unknown | bool |  |
| SelectMissionLateralView | IsPlayStyleItemEnabled | 1. unknown | bool |  |
| SelectMissionLateralView | IsPlayStyleItemItemEnabled | 1. unknown | bool |  |
| SelectMissionLateralView | IsRightPanel |  | bool |  |
| SelectMissionLateralView | SelectPlayStyle | 1. unknown | void |  |
| SelectMissionLateralView | SelectPlayStyleItem | 1. unknown | void |  |
| SelectMissionLateralView | Self |  | SelectMissionLateralView |  |
| SelectParticipant | AccessSelf |  | SelectParticipant |  |
| SelectParticipant | OnClose |  | void |  |
| SelectParticipant | Parent |  | unknown |  |
| SelectParticipant | Self |  | SelectParticipant |  |
| SelectParticleUserDataDialog | AccessSelf |  | SelectParticleUserDataDialog |  |
| SelectParticleUserDataDialog | DataModel |  | unknown |  |
| SelectParticleUserDataDialog | Self |  | SelectParticleUserDataDialog |  |
| SelectSearchFilter | AccessSearchBar |  | unknown |  |
| SelectSearchFilter | AccessSelf |  | SelectSearchFilter |  |
| SelectSearchFilter | OnClose |  | void |  |
| SelectSearchFilter | Self |  | SelectSearchFilter |  |
| SelectSocietalValue | AccessSelf |  | SelectSocietalValue |  |
| SelectSocietalValue | GetCabinet |  | unknown |  |
| SelectSocietalValue | GetCandidates |  | unknown |  |
| SelectSocietalValue | OnClose |  | void |  |
| SelectSocietalValue | Self |  | SelectSocietalValue |  |
| SelectSubjectTypeLateralView | AccessSelf |  | SelectSubjectTypeLateralView |  |
| SelectSubjectTypeLateralView | ChangeCountry |  | void |  |
| SelectSubjectTypeLateralView | GetName |  | CString |  |
| SelectSubjectTypeLateralView | GetPlayer |  | unknown |  |
| SelectSubjectTypeLateralView | GetSubjectTypeItem |  | unknown |  |
| SelectSubjectTypeLateralView | GetSubjectTypesSortSearch |  | unknown |  |
| SelectSubjectTypeLateralView | IsChangingCountry |  | bool |  |
| SelectSubjectTypeLateralView | IsLeftPanel |  | bool |  |
| SelectSubjectTypeLateralView | IsReleasing |  | bool |  |
| SelectSubjectTypeLateralView | IsRightPanel |  | bool |  |
| SelectSubjectTypeLateralView | Self |  | SelectSubjectTypeLateralView |  |
| SelectTool | AccessSelf |  | SelectTool |  |
| SelectTool | IsHideSelection |  | bool |  |
| SelectTool | Self |  | SelectTool |  |
| SelectTool | SetHideSelection | 1. unknown | void |  |
| SelectWar | AccessSelf |  | SelectWar |  |
| SelectWar | GetName |  | CString |  |
| SelectWar | GetTooltip |  | CString |  |
| SelectWar | OnClick |  | void |  |
| SelectWar | Self |  | SelectWar |  |
| SelectedMarketLateralView | AccessSelf |  | SelectedMarketLateralView |  |
| SelectedMarketLateralView | CanExpandRGO | 1. unknown | bool |  |
| SelectedMarketLateralView | GetBannedExports |  | unknown |  |
| SelectedMarketLateralView | GetBannedExportsInfo |  | CString |  |
| SelectedMarketLateralView | GetBannedImports |  | unknown |  |
| SelectedMarketLateralView | GetBannedImportsInfo |  | CString |  |
| SelectedMarketLateralView | GetBottomFoodProvinces | 1. unknown | unknown |  |
| SelectedMarketLateralView | GetFoodSources |  | unknown |  |
| SelectedMarketLateralView | GetGoodsMarketEntries |  | unknown |  |
| SelectedMarketLateralView | GetGoodsTexture |  | unknown |  |
| SelectedMarketLateralView | GetMarket |  | unknown |  |
| SelectedMarketLateralView | GetMerchants |  | unknown |  |
| SelectedMarketLateralView | GetPlayer |  | unknown |  |
| SelectedMarketLateralView | GetSortedFoodProvinces |  | unknown |  |
| SelectedMarketLateralView | GetTopFoodProvinces | 1. unknown | unknown |  |
| SelectedMarketLateralView | GetTradeMarketEntries |  | unknown |  |
| SelectedMarketLateralView | IsLeftPanel |  | bool |  |
| SelectedMarketLateralView | IsMarketViewSelectMarketOpened | 1. unknown | bool |  |
| SelectedMarketLateralView | IsRightPanel |  | bool |  |
| SelectedMarketLateralView | Self |  | SelectedMarketLateralView |  |
| SelectedMarketLateralView | ToggleMarketViewSelectMarket | 1. unknown | void |  |
| SendGiftWindow | AccessSelf |  | SendGiftWindow |  |
| SendGiftWindow | GetConditions |  | CString |  |
| SendGiftWindow | GetCurrent |  | float |  |
| SendGiftWindow | GetDesc |  | CString |  |
| SendGiftWindow | GetMax |  | float |  |
| SendGiftWindow | GetMin |  | float |  |
| SendGiftWindow | GetPrice |  | CString |  |
| SendGiftWindow | GetStep |  | float |  |
| SendGiftWindow | GetTitle |  | CString |  |
| SendGiftWindow | IsEnabled |  | bool |  |
| SendGiftWindow | OnAccept |  | void |  |
| SendGiftWindow | OnDecline |  | void |  |
| SendGiftWindow | OnPriceChanged |  | void |  |
| SendGiftWindow | Self |  | SendGiftWindow |  |
| ServerInformation | AccessSelf |  | ServerInformation |  |
| ServerInformation | GetMPMode |  | CString |  |
| ServerInformation | GetServerID |  | CUTF8String |  |
| ServerInformation | GetServerName |  | CUTF8String |  |
| ServerInformation | HasServerID |  | bool |  |
| ServerInformation | HasServerName |  | bool |  |
| ServerInformation | IsInvite |  | bool |  |
| ServerInformation | IsPublic |  | bool |  |
| ServerInformation | IsSingleplayer |  | bool |  |
| ServerInformation | Self |  | ServerInformation |  |
| SettingCategory | AccessSelf |  | SettingCategory |  |
| SettingCategory | AccessSettingsOrder |  | unknown |  |
| SettingCategory | GetName |  | CUTF8String |  |
| SettingCategory | GetSettingsOrder |  | unknown |  |
| SettingCategory | HasSettingsWidgets |  | bool |  |
| SettingCategory | Self |  | SettingCategory |  |
| SettingsPage | AccessCategories |  | unknown |  |
| SettingsPage | AccessSelf |  | SettingsPage |  |
| SettingsPage | GetName |  | CUTF8String |  |
| SettingsPage | IsSelected |  | bool |  |
| SettingsPage | OnClick |  | void |  |
| SettingsPage | Self |  | SettingsPage |  |
| SetupCondottieriView | AccessSelf |  | SetupCondottieriView |  |
| SetupCondottieriView | GetCondottieriItemsSortSearch |  | unknown |  |
| SetupCondottieriView | GetCondottieriUnits |  | unknown |  |
| SetupCondottieriView | GetPlayer |  | unknown |  |
| SetupCondottieriView | IsLeftPanel |  | bool |  |
| SetupCondottieriView | IsRightPanel |  | bool |  |
| SetupCondottieriView | Self |  | SetupCondottieriView |  |
| SetupEditor | AccessSelf |  | SetupEditor |  |
| SetupEditor | GetCurrent |  | CString |  |
| SetupEditor | GetEntries |  | unknown |  |
| SetupEditor | GetSearch |  | unknown |  |
| SetupEditor | Save |  | void |  |
| SetupEditor | Self |  | SetupEditor |  |
| SetupEntry | AccessSelf |  | SetupEntry |  |
| SetupEntry | GetName |  | CString |  |
| SetupEntry | OnClick |  | void |  |
| SetupEntry | Self |  | SetupEntry |  |
| SetupMercenaryRequirementsView | AccessSelf |  | SetupMercenaryRequirementsView |  |
| SetupMercenaryRequirementsView | CanAccept |  | bool |  |
| SetupMercenaryRequirementsView | GetAmountLeadersAfterSelected |  | int32 |  |
| SetupMercenaryRequirementsView | GetAmountLeadersBeforeSelected |  | int32 |  |
| SetupMercenaryRequirementsView | GetCanAcceptTooltip |  | CString |  |
| SetupMercenaryRequirementsView | GetDuration |  | float |  |
| SetupMercenaryRequirementsView | GetDurationStep |  | float |  |
| SetupMercenaryRequirementsView | GetHirePrice |  | CFixedPoint |  |
| SetupMercenaryRequirementsView | GetHirePriceTooltip |  | CString |  |
| SetupMercenaryRequirementsView | GetMaxDuration |  | float |  |
| SetupMercenaryRequirementsView | GetMonthlyCost |  | CFixedPoint |  |
| SetupMercenaryRequirementsView | GetMonthlyCostTooltip |  | CString |  |
| SetupMercenaryRequirementsView | GetPossibleLeaders |  | unknown |  |
| SetupMercenaryRequirementsView | GetPossibleSubUnitDefinitions |  | unknown |  |
| SetupMercenaryRequirementsView | GetRequestingAmount |  | int32 |  |
| SetupMercenaryRequirementsView | GetSelectedLeader |  | unknown |  |
| SetupMercenaryRequirementsView | HasSelectedLeader |  | bool |  |
| SetupMercenaryRequirementsView | IsSelectedLeader | 1. unknown | bool |  |
| SetupMercenaryRequirementsView | OnAccept |  | void |  |
| SetupMercenaryRequirementsView | OnDurationChanged |  | void |  |
| SetupMercenaryRequirementsView | Self |  | SetupMercenaryRequirementsView |  |
| SetupMercenaryRequirementsView | ToggleLeader | 1. unknown | void |  |
| Siege | AccessSelf |  | Siege |  |
| Siege | GetArtilleryImpact |  | int32 |  |
| Siege | GetArtilleryImpactInfo |  | CString |  |
| Siege | GetAssaultOddsInfo |  | CString |  |
| Siege | GetBesieger |  | unknown |  |
| Siege | GetBesiegerStrengthTooltip |  | CString |  |
| Siege | GetBesiegerVisualStrength |  | CString |  |
| Siege | GetBlockadeImpact |  | int32 |  |
| Siege | GetCommander |  | unknown |  |
| Siege | GetCommanderTooltip |  | CString |  |
| Siege | GetDefenderMoralePercent |  | CFixedPoint |  |
| Siege | GetDefensiveness |  | CString |  |
| Siege | GetDefensivenessTooltip |  | CString |  |
| Siege | GetFallChance |  | int32 |  |
| Siege | GetFallChanceBreakDown |  | CString |  |
| Siege | GetFallChanceTitle |  | CString |  |
| Siege | GetFallChanceTooltip |  | CString |  |
| Siege | GetFortLevelImpact |  | int32 |  |
| Siege | GetLastSiegeDiceRoll |  | int32 |  |
| Siege | GetLocation |  | unknown |  |
| Siege | GetMoralePercent |  | float |  |
| Siege | GetMoraleTooltip |  | CString |  |
| Siege | GetName |  | CString |  |
| Siege | GetNameWithNoTooltip |  | CString |  |
| Siege | GetNumOfBreach |  | int32 |  |
| Siege | GetOccupationDaysLeft |  | CString |  |
| Siege | GetOccupationDaysLeftShort |  | CString |  |
| Siege | GetOccupationProgress |  | float |  |
| Siege | GetOccupationProgressTooltip |  | CString |  |
| Siege | GetPhaseSize |  | int32 |  |
| Siege | GetPhaseSizeInfo |  | CString |  |
| Siege | GetSiegeDefender |  | unknown |  |
| Siege | GetSiegeFortDefenseDifference |  | int32 |  |
| Siege | GetSiegeFortDefenseDifferenceInfo |  | CString |  |
| Siege | GetSiegeMemory |  | int32 |  |
| Siege | GetSiegeModifierValue |  | int32 |  |
| Siege | GetSiegePhaseProgress |  | float |  |
| Siege | GetSiegePhaseProgressText |  | CString |  |
| Siege | GetSiegePhaseProgressTooltip |  | CString |  |
| Siege | GetSiegeTotalTimeText |  | CString |  |
| Siege | GetSubUnitCounts |  | unknown |  |
| Siege | GetTotalDays |  | int32 |  |
| Siege | GetUnits |  | unknown |  |
| Siege | HasAssault |  | bool |  |
| Siege | HasBreach |  | bool |  |
| Siege | IsSiege |  | bool |  |
| Siege | IsTooFewMen |  | bool |  |
| Siege | MakeScope |  | Scope | Jomini Script System |
| Siege | Self |  | Siege |  |
| SiegeRollModifierWrap | AccessSelf |  | SiegeRollModifierWrap |  |
| SiegeRollModifierWrap | GetRows |  | unknown |  |
| SiegeRollModifierWrap | Self |  | SiegeRollModifierWrap |  |
| SiegeRollModifierWrapItem | AccessSelf |  | SiegeRollModifierWrapItem |  |
| SiegeRollModifierWrapItem | GetIcon |  | unknown |  |
| SiegeRollModifierWrapItem | GetModifierDesc |  | CString |  |
| SiegeRollModifierWrapItem | GetModifierName |  | CString |  |
| SiegeRollModifierWrapItem | GetModifierValue |  | int32 |  |
| SiegeRollModifierWrapItem | Self |  | SiegeRollModifierWrapItem |  |
| SimpleCustomTagTooltipWrapper | AccessSelf |  | SimpleCustomTagTooltipWrapper |  |
| SimpleCustomTagTooltipWrapper | GetBody |  | CString |  |
| SimpleCustomTagTooltipWrapper | GetConcept |  | CString |  |
| SimpleCustomTagTooltipWrapper | GetFlavor |  | CString |  |
| SimpleCustomTagTooltipWrapper | GetIcon |  | unknown |  |
| SimpleCustomTagTooltipWrapper | GetList |  | CString |  |
| SimpleCustomTagTooltipWrapper | GetTitle |  | CString |  |
| SimpleCustomTagTooltipWrapper | HasIcon |  | bool |  |
| SimpleCustomTagTooltipWrapper | Self |  | SimpleCustomTagTooltipWrapper |  |
| SingleUnitSelectUnit | AccessSelf |  | SingleUnitSelectUnit |  |
| SingleUnitSelectUnit | OnClose |  | void |  |
| SingleUnitSelectUnit | Parent |  | unknown |  |
| SingleUnitSelectUnit | Self |  | SingleUnitSelectUnit |  |
| SingleUnitWindow | AccessSelectedUnit |  | unknown |  |
| SingleUnitWindow | AccessSelf |  | SingleUnitWindow |  |
| SingleUnitWindow | AddSubunitToNewUnit | 1. unknown | void |  |
| SingleUnitWindow | CanAddNewObjective | 1. unknown | bool |  |
| SingleUnitWindow | CanAddToCreatingUnit | 1. unknown | bool |  |
| SingleUnitWindow | CanChangeUnitBox | 1. unknown 2. unknown | bool |  |
| SingleUnitWindow | CanRenameUnit |  | bool |  |
| SingleUnitWindow | CanReplaceLeader |  | bool |  |
| SingleUnitWindow | CategoryActionsAmount | 1. unknown | int32 |  |
| SingleUnitWindow | ChangeAllUnitsOfTypeBox | 1. unknown 2. unknown | void |  |
| SingleUnitWindow | ChangeUnitBox | 1. unknown 2. unknown | void |  |
| SingleUnitWindow | GenerateSceneDesc |  | unknown |  |
| SingleUnitWindow | GetAllActionItems |  | unknown |  |
| SingleUnitWindow | GetBalanceAction |  | unknown |  |
| SingleUnitWindow | GetCommanderTooltip |  | CString |  |
| SingleUnitWindow | GetCreateUnitAction |  | unknown |  |
| SingleUnitWindow | GetDetachAction | 1. unknown | unknown |  |
| SingleUnitWindow | GetEmbarkAction |  | unknown |  |
| SingleUnitWindow | GetEmbarkedArmiesTooltip |  | CString |  |
| SingleUnitWindow | GetMaintenanceCost |  | CFixedPoint |  |
| SingleUnitWindow | GetMaintenanceCostTooltip |  | CString |  |
| SingleUnitWindow | GetMercenaries |  | unknown |  |
| SingleUnitWindow | GetMercenariesAction |  | unknown |  |
| SingleUnitWindow | GetObjectiveAction |  | unknown |  |
| SingleUnitWindow | GetObjectiveTypes |  | unknown |  |
| SingleUnitWindow | GetPlayer |  | unknown |  |
| SingleUnitWindow | GetReinforcementRate |  | CString |  |
| SingleUnitWindow | GetReinforcementRateTooltip |  | CString |  |
| SingleUnitWindow | GetReplaceLeaderInfo |  | CString |  |
| SingleUnitWindow | GetRetreatTooltip |  | CString |  |
| SingleUnitWindow | GetSelectedUnit |  | unknown |  |
| SingleUnitWindow | GetSelectedUnitTexture |  | unknown |  |
| SingleUnitWindow | GetSubUnits |  | unknown |  |
| SingleUnitWindow | GetSubUnitsSortSearch |  | unknown |  |
| SingleUnitWindow | GetUIAction |  | unknown |  |
| SingleUnitWindow | GetUnitNameIconFrame |  | int32 |  |
| SingleUnitWindow | GetUnitNameIconTooltip |  | CString |  |
| SingleUnitWindow | HasCustomUnitName |  | bool |  |
| SingleUnitWindow | HideCreateNewUnit |  | void |  |
| SingleUnitWindow | IsAddToCreatingUnitVisible |  | bool |  |
| SingleUnitWindow | IsDetailsOpened | 1. unknown | bool |  |
| SingleUnitWindow | IsFlankVisible | 1. unknown 2. unknown | bool |  |
| SingleUnitWindow | IsLeftPanel |  | bool |  |
| SingleUnitWindow | IsRightPanel |  | bool |  |
| SingleUnitWindow | IsSingleUnitSelectUnitOpened | 1. unknown | bool |  |
| SingleUnitWindow | OnCommanderClick |  | void |  |
| SingleUnitWindow | OnMouseEnterAttackerBox | 1. unknown | void |  |
| SingleUnitWindow | OnMouseEnterDefenderBox | 1. unknown | void |  |
| SingleUnitWindow | OnMouseLeaveAttackerBox |  | void |  |
| SingleUnitWindow | OnMouseLeaveDefenderBox |  | void |  |
| SingleUnitWindow | OnUnitNameEdited |  | void |  |
| SingleUnitWindow | RenameUnit |  | void |  |
| SingleUnitWindow | Self |  | SingleUnitWindow |  |
| SingleUnitWindow | ToggleDetails | 1. unknown | void |  |
| SingleUnitWindow | ToggleSingleUnitSelectUnit | 1. unknown | void |  |
| Situation | AccessSelf |  | Situation |  |
| Situation | GetEndConditions |  | CString |  |
| Situation | GetHintTag |  | CString |  |
| Situation | GetIcon |  | unknown |  |
| Situation | GetKey |  | CString |  |
| Situation | GetName |  | CString |  |
| Situation | GetNameWithNoTooltip |  | CString |  |
| Situation | GetTooltip |  | CString |  |
| Situation | HasHint |  | bool |  |
| Situation | MakeScope |  | Scope | Jomini Script System |
| Situation | Self |  | Situation |  |
| SituationMessagePopup | AccessSelf |  | SituationMessagePopup |  |
| SituationMessagePopup | GetCountry |  | unknown |  |
| SituationMessagePopup | GetSituation |  | unknown |  |
| SituationMessagePopup | Self |  | SituationMessagePopup |  |
| SituationView | AccessSelf |  | SituationView |  |
| SituationView | GetAbstentionTarget |  | unknown |  |
| SituationView | GetActionGroups |  | unknown |  |
| SituationView | GetActiveResolution |  | unknown |  |
| SituationView | GetActiveSituation |  | unknown |  |
| SituationView | GetInternationalOrganization |  | unknown |  |
| SituationView | GetInternationalOrganizationForLaws |  | unknown |  |
| SituationView | GetLawCategories |  | unknown |  |
| SituationView | GetLawCategoriesSortSearch |  | unknown |  |
| SituationView | GetNotVotedYet |  | unknown |  |
| SituationView | GetPlayer |  | unknown |  |
| SituationView | GetTooltipInformation | 1. unknown | CString |  |
| SituationView | GetVoteTargetLeft |  | unknown |  |
| SituationView | GetVoteTargetRight |  | unknown |  |
| SituationView | GetVoteTargets |  | unknown |  |
| SituationView | HasAbstentionTarget |  | bool |  |
| SituationView | HasActiveResolution |  | bool |  |
| SituationView | HasLaws |  | bool |  |
| SituationView | HasNotVotedYet |  | bool |  |
| SituationView | IsLeftPanel |  | bool |  |
| SituationView | IsRightPanel |  | bool |  |
| SituationView | IsSituation | 1. unknown | bool |  |
| SituationView | Self |  | SituationView |  |
| SkinEditor | AccessSelf |  | SkinEditor |  |
| SkinEditor | Self |  | SkinEditor |  |
| Social | AccessSelf |  | Social |  |
| Social | GetTotalUnreadChatMessages |  | int32 |  |
| Social | Self |  | Social |  |
| SocialNotificationWindow | AccessChatMessages |  | unknown |  |
| SocialNotificationWindow | AccessSelf |  | SocialNotificationWindow |  |
| SocialNotificationWindow | GetNotificationsLayoutAnchor |  | unknown |  |
| SocialNotificationWindow | Hide |  | void |  |
| SocialNotificationWindow | Self |  | SocialNotificationWindow |  |
| SocialNotificationWindow | ShouldBeShown |  | bool |  |
| SocialNotificationWindow | Show |  | void |  |
| SocialUI | AccessSelf |  | SocialUI |  |
| SocialUI | Hide |  | void |  |
| SocialUI | IsAllowedToBeShown |  | bool |  |
| SocialUI | Self |  | SocialUI |  |
| SocialUI | Show |  | void |  |
| SocialUI | ToggleShow |  | void |  |
| SocialUI | WantsToBeShown |  | bool |  |
| SocialWidget | AccessSelf |  | SocialWidget |  |
| SocialWidget | Self |  | SocialWidget |  |
| SocietalValue | AccessSelf |  | SocietalValue |  |
| SocietalValue | GetDesc |  | CString |  |
| SocietalValue | GetLeftIcon |  | unknown |  |
| SocietalValue | GetLeftIllustration |  | unknown |  |
| SocietalValue | GetLeftLabel |  | CString |  |
| SocietalValue | GetLeftLabelWithNoTooltip |  | CString |  |
| SocietalValue | GetLeftTooltip |  | CString |  |
| SocietalValue | GetName |  | CString |  |
| SocietalValue | GetNameWithNoTooltip |  | CString |  |
| SocietalValue | GetPlayerSocietalIcon |  | unknown |  |
| SocietalValue | GetPlayerSocietalValueIllustration |  | unknown |  |
| SocietalValue | GetRightIcon |  | unknown |  |
| SocietalValue | GetRightIllustration |  | unknown |  |
| SocietalValue | GetRightLabel |  | CString |  |
| SocietalValue | GetRightLabelWithNoTooltip |  | CString |  |
| SocietalValue | GetRightTooltip |  | CString |  |
| SocietalValue | GetTooltip |  | CString |  |
| SocietalValue | MakeScope |  | Scope | Jomini Script System |
| SocietalValue | Self |  | SocietalValue |  |
| SocietalValueCandidate | AccessSelf |  | SocietalValueCandidate |  |
| SocietalValueCandidate | GetSocietalValue |  | unknown |  |
| SocietalValueCandidate | SelectLeftCandidate |  | void |  |
| SocietalValueCandidate | SelectRightCandidate |  | void |  |
| SocietalValueCandidate | Self |  | SocietalValueCandidate |  |
| SocietalValueInCountryWrap | AccessSelf |  | SocietalValueInCountryWrap |  |
| SocietalValueInCountryWrap | GetSocietalValues |  | unknown |  |
| SocietalValueInCountryWrap | Self |  | SocietalValueInCountryWrap |  |
| SocietalValueItem | AccessSelf |  | SocietalValueItem |  |
| SocietalValueItem | CanMoveForward |  | bool |  |
| SocietalValueItem | GetCountry |  | unknown |  |
| SocietalValueItem | GetDirection |  | float |  |
| SocietalValueItem | GetDirectionInfo |  | CString |  |
| SocietalValueItem | GetEncouragedDirection |  | float |  |
| SocietalValueItem | GetLeftHint |  | CString |  |
| SocietalValueItem | GetLeftUIAction |  | unknown |  |
| SocietalValueItem | GetPosition |  | float |  |
| SocietalValueItem | GetPositionInfo |  | CString |  |
| SocietalValueItem | GetRightHint |  | CString |  |
| SocietalValueItem | GetRightUIAction |  | unknown |  |
| SocietalValueItem | GetType |  | unknown |  |
| SocietalValueItem | IsLeft |  | bool |  |
| SocietalValueItem | IsMovingLeft |  | bool |  |
| SocietalValueItem | IsMovingRight |  | bool |  |
| SocietalValueItem | Self |  | SocietalValueItem |  |
| SocietalValueItem | ShowLeftHint |  | bool |  |
| SocietalValueItem | ShowRightHint |  | bool |  |
| SocietalValueRequirement | AccessSelf |  | SocietalValueRequirement |  |
| SocietalValueRequirement | GetSocietalValue |  | unknown |  |
| SocietalValueRequirement | IsLeft |  | bool |  |
| SocietalValueRequirement | Self |  | SocietalValueRequirement |  |
| SocietalValuesLateralView | AccessSelf |  | SocietalValuesLateralView |  |
| SocietalValuesLateralView | GetPlayer |  | unknown |  |
| SocietalValuesLateralView | GetSocietalValues |  | unknown |  |
| SocietalValuesLateralView | IsLeftPanel |  | bool |  |
| SocietalValuesLateralView | IsRightPanel |  | bool |  |
| SocietalValuesLateralView | Self |  | SocietalValuesLateralView |  |
| SortKey | AccessSelf |  | SortKey |  |
| SortKey | GetIcon |  | unknown |  |
| SortKey | GetSize |  | CVector2f |  |
| SortKey | GetSortKey |  | CString |  |
| SortKey | GetTooltip |  | CString |  |
| SortKey | IsSortedBy |  | bool |  |
| SortKey | IsSortedInDescending |  | bool |  |
| SortKey | OnMouseHierarchyEnter |  | void |  |
| SortKey | OnMouseHierarchyLeave |  | void |  |
| SortKey | Self |  | SortKey |  |
| SortKey | Sort |  | void |  |
| SpecialOptionGlue | AccessSelf |  | SpecialOptionGlue |  |
| SpecialOptionGlue | GetOption |  | CString |  |
| SpecialOptionGlue | IsSelected |  | bool |  |
| SpecialOptionGlue | Self |  | SpecialOptionGlue |  |
| SpecialOptionGlue | Toggle |  | void |  |
| SpecialStatus | AccessSelf |  | SpecialStatus |  |
| SpecialStatus | GetDesc |  | CString |  |
| SpecialStatus | GetEffects |  | CString |  |
| SpecialStatus | GetKey |  | CString |  |
| SpecialStatus | GetName |  | CString |  |
| SpecialStatus | GetNamePlural |  | CString |  |
| SpecialStatus | GetNamePluralWithNoTooltip |  | CString |  |
| SpecialStatus | GetNameWithNoTooltip |  | CString |  |
| SpecialStatus | MakeScope |  | Scope | Jomini Script System |
| SpecialStatus | Self |  | SpecialStatus |  |
| SpecificGoodsOnMarketWrap | AccessSelf |  | SpecificGoodsOnMarketWrap |  |
| SpecificGoodsOnMarketWrap | GetGoods |  | unknown |  |
| SpecificGoodsOnMarketWrap | GetMarket |  | unknown |  |
| SpecificGoodsOnMarketWrap | Self |  | SpecificGoodsOnMarketWrap |  |
| SplineAdjustmentTool | AccessSelf |  | SplineAdjustmentTool |  |
| SplineAdjustmentTool | AddAnchorsToAdjacentSelectedPairs |  | void |  |
| SplineAdjustmentTool | CanAddAnchorsInSelection |  | bool |  |
| SplineAdjustmentTool | CanDeleteSelection |  | bool |  |
| SplineAdjustmentTool | DeleteSelected |  | void |  |
| SplineAdjustmentTool | HasMapContent |  | bool |  |
| SplineAdjustmentTool | HasMergeNotes |  | bool |  |
| SplineAdjustmentTool | IsAnchorCreationSelected |  | bool |  |
| SplineAdjustmentTool | IsAnchorSelectionSelected |  | bool |  |
| SplineAdjustmentTool | IsMapContentSelectionSelected |  | bool |  |
| SplineAdjustmentTool | IsNavMeshVisible |  | bool |  |
| SplineAdjustmentTool | IsShowingAllMergeNotes |  | bool |  |
| SplineAdjustmentTool | IsShowingConflictsMergeNotes |  | bool |  |
| SplineAdjustmentTool | SelectAnchorCreation |  | void |  |
| SplineAdjustmentTool | SelectAnchorSelection |  | void |  |
| SplineAdjustmentTool | SelectMapContentSelection |  | void |  |
| SplineAdjustmentTool | Self |  | SplineAdjustmentTool |  |
| SplineAdjustmentTool | ToggleNavMeshVisibility |  | void |  |
| SplineAdjustmentTool | ToggleShowingAllMergeNotes |  | void |  |
| SplineAdjustmentTool | ToggleShowingConflictsMergeNotes |  | void |  |
| SplineAdjustmentToolMode | AccessSelf |  | SplineAdjustmentToolMode |  |
| SplineAdjustmentToolMode | IsSelected |  | bool |  |
| SplineAdjustmentToolMode | Self |  | SplineAdjustmentToolMode |  |
| SplineEntryUi | AccessSelf |  | SplineEntryUi |  |
| SplineEntryUi | BelongsToCollection |  | bool |  |
| SplineEntryUi | GetDisplayName |  | CString |  |
| SplineEntryUi | GetIconFrame |  | int32 |  |
| SplineEntryUi | GetIdAsString |  | CString |  |
| SplineEntryUi | HasValidIconFrame |  | bool |  |
| SplineEntryUi | IsCollection |  | bool |  |
| SplineEntryUi | IsExpanded |  | bool |  |
| SplineEntryUi | IsGameSpline |  | bool |  |
| SplineEntryUi | IsHidden |  | bool |  |
| SplineEntryUi | IsLocked |  | bool |  |
| SplineEntryUi | IsParentLocked |  | bool |  |
| SplineEntryUi | IsSelected |  | bool |  |
| SplineEntryUi | Self |  | SplineEntryUi |  |
| SplineEntryUi | ToggleExpanded |  | void |  |
| SplineEntryUi | ToggleHidden |  | void |  |
| SplineEntryUi | ToggleLock |  | void |  |
| SplineRiverInteractionMode | AccessSelf |  | SplineRiverInteractionMode |  |
| SplineRiverInteractionMode | IsSelected |  | bool |  |
| SplineRiverInteractionMode | Self |  | SplineRiverInteractionMode |  |
| SplineRiverTool | AccessSelf |  | SplineRiverTool |  |
| SplineRiverTool | ModifyWidth | 1. unknown | void |  |
| SplineRiverTool | Self |  | SplineRiverTool |  |
| SplineStripTool | AccessSelf |  | SplineStripTool |  |
| SplineStripTool | CanDeleteSelection |  | bool |  |
| SplineStripTool | CheckAllStripsForErrors |  | void |  |
| SplineStripTool | DeleteSelected |  | void |  |
| SplineStripTool | FocusCameraOnSelection |  | void |  |
| SplineStripTool | FocusCameraOnStripError |  | void |  |
| SplineStripTool | GetStripErrorCount |  | int32 |  |
| SplineStripTool | HasMapContent |  | bool |  |
| SplineStripTool | HasMergeNotes |  | bool |  |
| SplineStripTool | HasSelectedStrips |  | bool |  |
| SplineStripTool | IsAnchorCreationSelected |  | bool |  |
| SplineStripTool | IsAnchorSelectionSelected |  | bool |  |
| SplineStripTool | IsMapContentSelectionSelected |  | bool |  |
| SplineStripTool | IsNavMeshVisible |  | bool |  |
| SplineStripTool | IsShowingAllMergeNotes |  | bool |  |
| SplineStripTool | IsShowingConflictsMergeNotes |  | bool |  |
| SplineStripTool | IsStripCreationSelected |  | bool |  |
| SplineStripTool | IsStripSelectionSelected |  | bool |  |
| SplineStripTool | SelectAnchorCreation |  | void |  |
| SplineStripTool | SelectAnchorSelection |  | void |  |
| SplineStripTool | SelectMapContentSelection |  | void |  |
| SplineStripTool | SelectStripCreation |  | void |  |
| SplineStripTool | SelectStripSelection |  | void |  |
| SplineStripTool | Self |  | SplineStripTool |  |
| SplineStripTool | ToggleNavMeshVisibility |  | void |  |
| SplineStripTool | ToggleShowingAllMergeNotes |  | void |  |
| SplineStripTool | ToggleShowingConflictsMergeNotes |  | void |  |
| SplineStripToolMode | AccessSelf |  | SplineStripToolMode |  |
| SplineStripToolMode | IsSelected |  | bool |  |
| SplineStripToolMode | Self |  | SplineStripToolMode |  |
| SplineToolsMapContentPanel | AccessSelf |  | SplineToolsMapContentPanel |  |
| SplineToolsMapContentPanel | AutoPlaceHubAnchors |  | void |  |
| SplineToolsMapContentPanel | HasMapContent |  | bool |  |
| SplineToolsMapContentPanel | Self |  | SplineToolsMapContentPanel |  |
| SplineTypeCreateSelectionDropdown | AccessSelf |  | SplineTypeCreateSelectionDropdown |  |
| SplineTypeCreateSelectionDropdown | IsSplineTypeSelected | 1. unknown | bool |  |
| SplineTypeCreateSelectionDropdown | SelectSplineType | 1. unknown | void |  |
| SplineTypeCreateSelectionDropdown | Self |  | SplineTypeCreateSelectionDropdown |  |
| SplineTypeCreateSelectionDropdown | SplineTypes |  | unknown |  |
| SplineTypeCreateSelectionDropdown | Toggle |  | void |  |
| SplineTypeItem | AccessSelf |  | SplineTypeItem |  |
| SplineTypeItem | GetId |  | uint8 |  |
| SplineTypeItem | GetName |  | CString |  |
| SplineTypeItem | Self |  | SplineTypeItem |  |
| SplineTypeSwitchSelectionDropdown | AccessSelf |  | SplineTypeSwitchSelectionDropdown |  |
| SplineTypeSwitchSelectionDropdown | ChangeSelectedStripsType | 1. unknown | void |  |
| SplineTypeSwitchSelectionDropdown | IsSplineTypeSelected | 1. unknown | bool |  |
| SplineTypeSwitchSelectionDropdown | Self |  | SplineTypeSwitchSelectionDropdown |  |
| SplineTypeSwitchSelectionDropdown | SplineTypes |  | unknown |  |
| SplineTypeSwitchSelectionDropdown | Toggle |  | void |  |
| SplineVisibilityDropdown | AccessSelf |  | SplineVisibilityDropdown |  |
| SplineVisibilityDropdown | IsVisibilityModeAll |  | bool |  |
| SplineVisibilityDropdown | IsVisibilityModeFirst |  | bool |  |
| SplineVisibilityDropdown | IsVisibilityModeLast |  | bool |  |
| SplineVisibilityDropdown | Self |  | SplineVisibilityDropdown |  |
| SplineVisibilityDropdown | SetVisibilityModeToAll |  | void |  |
| SplineVisibilityDropdown | SetVisibilityModeToFirst |  | void |  |
| SplineVisibilityDropdown | SetVisibilityModeToLast |  | void |  |
| SplineVisibilityDropdown | Toggle |  | void |  |
| StatImpactItem | AccessSelf |  | StatImpactItem |  |
| StatImpactItem | GetIcon |  | unknown |  |
| StatImpactItem | GetImpact |  | CFixedPoint |  |
| StatImpactItem | GetTooltip |  | CString |  |
| StatImpactItem | Self |  | StatImpactItem |  |
| StateConnection | AccessSelf |  | StateConnection |  |
| StateConnection | ButtonPos |  | CVector2f |  |
| StateConnection | DebugTooltip |  | CString |  |
| StateConnection | From |  | CVector2f |  |
| StateConnection | Id |  | int32 |  |
| StateConnection | IsRandom |  | bool |  |
| StateConnection | IsSelected |  | bool |  |
| StateConnection | IsUnconnected |  | bool |  |
| StateConnection | Self |  | StateConnection |  |
| StateConnection | To |  | CVector2f |  |
| StaticAutoModifier | AccessSelf |  | StaticAutoModifier |  |
| StaticAutoModifier | GetDesc |  | CString |  |
| StaticAutoModifier | GetName |  | CString |  |
| StaticAutoModifier | GetNameWithTooltip |  | CString |  |
| StaticAutoModifier | Self |  | StaticAutoModifier |  |
| StaticModifier | AccessSelf |  | StaticModifier |  |
| StaticModifier | GetDesc |  | CString |  |
| StaticModifier | GetFlavorDesc |  | CString |  |
| StaticModifier | GetIcon |  | unknown |  |
| StaticModifier | GetModifier |  | unknown |  |
| StaticModifier | GetModifiersSize |  | CFixedPoint |  |
| StaticModifier | GetName |  | CString |  |
| StaticModifier | GetNameWithTooltip |  | CString |  |
| StaticModifier | HasFlavorText |  | bool |  |
| StaticModifier | Self |  | StaticModifier |  |
| StatusWidget | AccessSelf |  | StatusWidget |  |
| StatusWidget | ConnectAccount |  | void |  |
| StatusWidget | DisconnectAccount |  | void |  |
| StatusWidget | Hide | 1. unknown | void |  |
| StatusWidget | IsAccountConnected |  | bool |  |
| StatusWidget | IsBusy |  | bool |  |
| StatusWidget | Logout |  | void |  |
| StatusWidget | Self |  | StatusWidget |  |
| StatusWidget | Show | 1. unknown | void |  |
| StatusWidget | SupportsConnectAccount |  | bool |  |
| StatusWidget | ToggleCreateAccountWindow |  | void |  |
| StatusWidget | ToggleCreateProfileWindow |  | void |  |
| StatusWidget | ToggleLoginWindow |  | void |  |
| StrategicMilitaryObjective | AccessSelf |  | StrategicMilitaryObjective |  |
| StrategicMilitaryObjective | GetAction |  | CString |  |
| StrategicMilitaryObjective | GetDebugString |  | CString |  |
| StrategicMilitaryObjective | GetInfo |  | CString |  |
| StrategicMilitaryObjective | GetName |  | CString |  |
| StrategicMilitaryObjective | GetPriority |  | CFixedPoint |  |
| StrategicMilitaryObjective | GetSideObjectives |  | unknown |  |
| StrategicMilitaryObjective | GetType |  | unknown |  |
| StrategicMilitaryObjective | HasSideObjectives |  | bool |  |
| StrategicMilitaryObjective | IsInitialized | 1. unknown | bool |  |
| StrategicMilitaryObjective | Self |  | StrategicMilitaryObjective |  |
| StrategicMilitaryObjectiveGlue | AccessSelf |  | StrategicMilitaryObjectiveGlue |  |
| StrategicMilitaryObjectiveGlue | CanAddSideObjective |  | bool |  |
| StrategicMilitaryObjectiveGlue | CanDelete |  | bool |  |
| StrategicMilitaryObjectiveGlue | GetCanAddSideObjectiveInfo |  | CString |  |
| StrategicMilitaryObjectiveGlue | GetCanDeleteInfo |  | CString |  |
| StrategicMilitaryObjectiveGlue | GetIndent |  | int32 |  |
| StrategicMilitaryObjectiveGlue | IsSelected |  | bool |  |
| StrategicMilitaryObjectiveGlue | Self |  | StrategicMilitaryObjectiveGlue |  |
| StrategicMilitaryObjectiveGroup | AccessSelf |  | StrategicMilitaryObjectiveGroup |  |
| StrategicMilitaryObjectiveGroup | GetID |  | int32 |  |
| StrategicMilitaryObjectiveGroup | Self |  | StrategicMilitaryObjectiveGroup |  |
| StrategicObjectiveGroupGlue | AccessSelf |  | StrategicObjectiveGroupGlue |  |
| StrategicObjectiveGroupGlue | GetObjectives |  | unknown |  |
| StrategicObjectiveGroupGlue | Self |  | StrategicObjectiveGroupGlue |  |
| StringPair | AccessSelf |  | StringPair |  |
| StringPair | GetLeft |  | CString |  |
| StringPair | GetRight |  | CString |  |
| StringPair | Self |  | StringPair |  |
| StringPairList | AccessSelf |  | StringPairList |  |
| StringPairList | GetFooter |  | unknown |  |
| StringPairList | GetRows |  | unknown |  |
| StringPairList | GetTitle |  | CString |  |
| StringPairList | HasFooter |  | bool |  |
| StringPairList | HasTitle |  | bool |  |
| StringPairList | Self |  | StringPairList |  |
| SubContinent | AccessSelf |  | SubContinent |  |
| SubContinent | GetContinent |  | unknown |  |
| SubContinent | GetLogInfo |  | CString |  |
| SubContinent | GetMembersInfo |  | CString |  |
| SubContinent | GetName |  | CString |  |
| SubContinent | GetNameWithLandHighlightOnly |  | CString |  |
| SubContinent | GetNameWithNoTooltip |  | CString |  |
| SubContinent | GetNumRegions |  | int32 |  |
| SubContinent | GetTag |  | CString |  |
| SubContinent | GetTotalPopulation |  | CString |  |
| SubContinent | GetTotalPopulationInfo |  | CString |  |
| SubContinent | GetUITooltip |  | CString |  |
| SubContinent | MakeScope |  | Scope | Jomini Script System |
| SubContinent | Self |  | SubContinent |  |
| SubUnit | AccessSelf |  | SubUnit |  |
| SubUnit | CanAssault |  | bool |  |
| SubUnit | CanFight |  | bool |  |
| SubUnit | GetArtilleryBonus |  | CFixedPoint |  |
| SubUnit | GetCombatOverview |  | CString |  |
| SubUnit | GetController |  | unknown |  |
| SubUnit | GetCurrentBox |  | CString |  |
| SubUnit | GetCurrentBoxName |  | CString |  |
| SubUnit | GetCurrentBoxNameInCombat |  | CString |  |
| SubUnit | GetCurrentStrengthPercentage |  | CFixedPoint |  |
| SubUnit | GetDebugText |  | CString |  |
| SubUnit | GetDefinition |  | unknown |  |
| SubUnit | GetDescription |  | CString |  |
| SubUnit | GetExperience |  | CFixedPoint |  |
| SubUnit | GetExperienceChange |  | CString |  |
| SubUnit | GetExperienceImpact |  | CString |  |
| SubUnit | GetExperienceTitle |  | CString |  |
| SubUnit | GetGoodsAccessFactor |  | CFixedPoint |  |
| SubUnit | GetHome |  | unknown |  |
| SubUnit | GetMaxStrength |  | CString |  |
| SubUnit | GetMercenary |  | unknown |  |
| SubUnit | GetMissingGoodsInfo |  | CString |  |
| SubUnit | GetMissingStrength |  | CFixedPoint |  |
| SubUnit | GetMorale |  | CFixedPoint |  |
| SubUnit | GetMoraleAlphaForUI |  | CFixedPoint |  |
| SubUnit | GetMoraleInfo |  | CString |  |
| SubUnit | GetMoraleLabel |  | CString |  |
| SubUnit | GetMoralePercent |  | CFixedPoint |  |
| SubUnit | GetName |  | CString |  |
| SubUnit | GetNameWithNoTooltip |  | CString |  |
| SubUnit | GetNumber |  | uint32 |  |
| SubUnit | GetOwner |  | unknown |  |
| SubUnit | GetSourceTooltip |  | CString |  |
| SubUnit | GetStat | 1. unknown | CString |  |
| SubUnit | GetStatTooltip | 1. unknown | CString |  |
| SubUnit | GetStrength |  | CString |  |
| SubUnit | GetStrengthDescription |  | CString |  |
| SubUnit | GetSubunitFlankIcon |  | unknown |  |
| SubUnit | GetTypeDescription |  | CString |  |
| SubUnit | GetTypeIcon |  | CString |  |
| SubUnit | GetTypeName |  | CString |  |
| SubUnit | GetUITooltip |  | CString |  |
| SubUnit | GetUnit |  | unknown |  |
| SubUnit | HasValidTarget |  | bool |  |
| SubUnit | IsEngaged |  | bool |  |
| SubUnit | IsLevy |  | bool |  |
| SubUnit | IsMercenary |  | bool |  |
| SubUnit | IsPrisoner |  | bool |  |
| SubUnit | IsRegiment |  | bool |  |
| SubUnit | IsRegular |  | bool |  |
| SubUnit | IsShip |  | bool |  |
| SubUnit | IsValid |  | bool |  |
| SubUnit | MakeScope |  | Scope | Jomini Script System |
| SubUnit | Self |  | SubUnit |  |
| SubUnitArray | AccessSelf |  | SubUnitArray |  |
| SubUnitArray | CanQuickMoveToBox | 1. unknown | bool |  |
| SubUnitArray | GetBoxLabel |  | CString |  |
| SubUnitArray | GetBoxName |  | CString |  |
| SubUnitArray | GetExperience |  | CFixedPoint |  |
| SubUnitArray | GetExperienceTooltip |  | CString |  |
| SubUnitArray | GetFlankIcon |  | unknown |  |
| SubUnitArray | GetFrontageUsage |  | CString |  |
| SubUnitArray | GetMoralePercent |  | CFixedPoint |  |
| SubUnitArray | GetMoraleTooltip |  | CString |  |
| SubUnitArray | GetSize |  | int32 |  |
| SubUnitArray | GetStrength |  | CString |  |
| SubUnitArray | GetStrengthPercent |  | CFixedPoint |  |
| SubUnitArray | GetStrengthTooltip |  | CString |  |
| SubUnitArray | GetSubUnits |  | unknown |  |
| SubUnitArray | GetTooltip |  | CString |  |
| SubUnitArray | GetTotalFrontage |  | CFixedPoint |  |
| SubUnitArray | GetUnit |  | unknown |  |
| SubUnitArray | GetUsedFrontagePercentage |  | float |  |
| SubUnitArray | IsCaptured |  | bool |  |
| SubUnitArray | IsCenter |  | bool |  |
| SubUnitArray | IsLeft |  | bool |  |
| SubUnitArray | IsReserves |  | bool |  |
| SubUnitArray | IsRight |  | bool |  |
| SubUnitArray | IsShip |  | bool |  |
| SubUnitArray | MoveToBoxQuick | 1. unknown | void |  |
| SubUnitArray | Self |  | SubUnitArray |  |
| SubUnitArray | ShowInTooltip |  | bool |  |
| SubUnitCategory | AccessSelf |  | SubUnitCategory |  |
| SubUnitCategory | GetCategoryTooltip | 1. unknown | CString |  |
| SubUnitCategory | GetCombatAbility | 1. unknown | CFixedPoint |  |
| SubUnitCategory | GetCombatAbilityInfo | 1. unknown | CString |  |
| SubUnitCategory | GetCombatAbilityLabel |  | CString |  |
| SubUnitCategory | GetConstructionDemand |  | unknown |  |
| SubUnitCategory | GetCount | 1. unknown | int32 |  |
| SubUnitCategory | GetFlavorText |  | CString |  |
| SubUnitCategory | GetIcon |  | CString |  |
| SubUnitCategory | GetMaintenanceDemand |  | unknown |  |
| SubUnitCategory | GetName |  | CString |  |
| SubUnitCategory | GetNameWithNoTooltip |  | CString |  |
| SubUnitCategory | GetPowerDescription |  | CString |  |
| SubUnitCategory | GetStat | 1. unknown | CString |  |
| SubUnitCategory | GetStatTooltip | 1. unknown | CString |  |
| SubUnitCategory | GetTotalStrength | 1. unknown | CString |  |
| SubUnitCategory | GetUITooltip |  | CString |  |
| SubUnitCategory | HasCategory | 1. unknown | bool |  |
| SubUnitCategory | HasCombatAbility | 1. unknown | bool |  |
| SubUnitCategory | IsArmy |  | bool |  |
| SubUnitCategory | MakeScope |  | Scope | Jomini Script System |
| SubUnitCategory | Self |  | SubUnitCategory |  |
| SubUnitCombatCounts | AccessSelf |  | SubUnitCombatCounts |  |
| SubUnitCombatCounts | GetAmountTooltip |  | CString |  |
| SubUnitCombatCounts | GetCategory |  | unknown |  |
| SubUnitCombatCounts | GetCount |  | int32 |  |
| SubUnitCombatCounts | GetName |  | CString |  |
| SubUnitCombatCounts | GetTooltip |  | CString |  |
| SubUnitCombatCounts | GetTotal |  | CString |  |
| SubUnitCombatCounts | GetTotalTooltip |  | CString |  |
| SubUnitCombatCounts | IsCorrectForCombat |  | bool |  |
| SubUnitCombatCounts | IsRegiment |  | bool |  |
| SubUnitCombatCounts | Self |  | SubUnitCombatCounts |  |
| SubUnitCount | AccessSelf |  | SubUnitCount |  |
| SubUnitCount | GetCount |  | int32 |  |
| SubUnitCount | GetSubUnitDefinition |  | unknown |  |
| SubUnitCount | Self |  | SubUnitCount |  |
| SubUnitCounts | AccessSelf |  | SubUnitCounts |  |
| SubUnitCounts | CanAssault |  | bool |  |
| SubUnitCounts | GetAmountTooltip |  | CString |  |
| SubUnitCounts | GetCategory |  | unknown |  |
| SubUnitCounts | GetCount |  | int32 |  |
| SubUnitCounts | GetLevyCount |  | int32 |  |
| SubUnitCounts | GetMercenaryCount |  | int32 |  |
| SubUnitCounts | GetName |  | CString |  |
| SubUnitCounts | GetRegularCount |  | int32 |  |
| SubUnitCounts | GetTooltip |  | CString |  |
| SubUnitCounts | GetTotal |  | CString |  |
| SubUnitCounts | GetTotalLong |  | CString |  |
| SubUnitCounts | GetTotalTooltip |  | CString |  |
| SubUnitCounts | IsRegiment |  | bool |  |
| SubUnitCounts | Self |  | SubUnitCounts |  |
| SubUnitPrice | AccessSelf |  | SubUnitPrice |  |
| SubUnitPrice | Self |  | SubUnitPrice |  |
| SubUnitType | AccessSelf |  | SubUnitType |  |
| SubUnitType | GetAccumulatedStats |  | CString |  |
| SubUnitType | GetAge |  | unknown |  |
| SubUnitType | GetCategory |  | unknown |  |
| SubUnitType | GetCombatImpact |  | CString |  |
| SubUnitType | GetConstructionDemand |  | unknown |  |
| SubUnitType | GetConstructionUITooltip |  | CString |  |
| SubUnitType | GetCrewSize | 1. unknown | CString |  |
| SubUnitType | GetCurrencyUpkeep |  | CString |  |
| SubUnitType | GetDebugText |  | CString |  |
| SubUnitType | GetFlavorText |  | CString |  |
| SubUnitType | GetImpacts |  | CString |  |
| SubUnitType | GetLimitTooltip |  | CString |  |
| SubUnitType | GetMaintenanceDemand |  | unknown |  |
| SubUnitType | GetMaxStrength | 1. unknown | CString |  |
| SubUnitType | GetMercenaryUITooltip | 1. unknown | CString |  |
| SubUnitType | GetModifierImpact |  | CString |  |
| SubUnitType | GetName |  | CString |  |
| SubUnitType | GetNameWithNoTooltip |  | CString |  |
| SubUnitType | GetPowerDescription |  | CString |  |
| SubUnitType | GetPowerDescriptionBase |  | CString |  |
| SubUnitType | GetPowerDescriptionCombat |  | CString |  |
| SubUnitType | GetStat | 1. unknown | CString |  |
| SubUnitType | GetStatTooltip | 1. unknown | CString |  |
| SubUnitType | GetType |  | int32 |  |
| SubUnitType | GetUITooltip |  | CString |  |
| SubUnitType | GetUnlocks |  | unknown |  |
| SubUnitType | HasCombatImpact |  | bool |  |
| SubUnitType | HasModifierImpact |  | bool |  |
| SubUnitType | HasStat | 1. unknown | bool |  |
| SubUnitType | IsForLevy |  | bool |  |
| SubUnitType | IsRegiment |  | bool |  |
| SubUnitType | IsShip |  | bool |  |
| SubUnitType | MakeScope |  | Scope | Jomini Script System |
| SubUnitType | NeedsAdvance |  | bool |  |
| SubUnitType | Self |  | SubUnitType |  |
| SubjectCategoryItem | AccessSelf |  | SubjectCategoryItem |  |
| SubjectCategoryItem | ContainsProvinceOrLocationItems |  | bool |  |
| SubjectCategoryItem | GetName |  | CString |  |
| SubjectCategoryItem | GetNumSubjects |  | int32 |  |
| SubjectCategoryItem | GetSubjects |  | unknown |  |
| SubjectCategoryItem | GetTooltip |  | CString |  |
| SubjectCategoryItem | HasCountries |  | bool |  |
| SubjectCategoryItem | HasSubjects |  | bool |  |
| SubjectCategoryItem | IsExpanded |  | bool |  |
| SubjectCategoryItem | OnClick |  | void |  |
| SubjectCategoryItem | Self |  | SubjectCategoryItem |  |
| SubjectItem | AccessSelf |  | SubjectItem |  |
| SubjectItem | GetCountry |  | unknown |  |
| SubjectItem | GetEnabled |  | bool |  |
| SubjectItem | GetLoyalty |  | CFixedPoint |  |
| SubjectItem | GetLoyaltyTooltip |  | CString |  |
| SubjectItem | GetOurOpinion |  | CFixedPoint |  |
| SubjectItem | GetOurOpinionTooltip |  | CString |  |
| SubjectItem | GetProvince |  | unknown |  |
| SubjectItem | GetRegion |  | unknown |  |
| SubjectItem | GetSubjectTaxation |  | CString |  |
| SubjectItem | GetSubjectTaxationAmount |  | CFixedPoint |  |
| SubjectItem | GetSubjectTaxationTooltip |  | CString |  |
| SubjectItem | GetTheirOpinion |  | CFixedPoint |  |
| SubjectItem | GetTheirOpinionTooltip |  | CString |  |
| SubjectItem | GetTooltip |  | CString |  |
| SubjectItem | HighlightOnMap | 1. unknown | void |  |
| SubjectItem | IsCountry |  | bool |  |
| SubjectItem | IsCountryAndDoesNotExist |  | bool |  |
| SubjectItem | IsCountryAndExists |  | bool |  |
| SubjectItem | IsProvince |  | bool |  |
| SubjectItem | IsRegion |  | bool |  |
| SubjectItem | OnClick |  | void |  |
| SubjectItem | Self |  | SubjectItem |  |
| SubjectMilitaryStance | AccessSelf |  | SubjectMilitaryStance |  |
| SubjectMilitaryStance | GetDesc |  | CString |  |
| SubjectMilitaryStance | GetDescAll |  | CString |  |
| SubjectMilitaryStance | GetName |  | CString |  |
| SubjectMilitaryStance | GetNameWithNoTooltip |  | CString |  |
| SubjectMilitaryStance | GetTextIcon |  | CString |  |
| SubjectMilitaryStance | MakeScope |  | Scope | Jomini Script System |
| SubjectMilitaryStance | Self |  | SubjectMilitaryStance |  |
| SubjectType | AccessSelf |  | SubjectType |  |
| SubjectType | GetAnnexationRules | 1. unknown 2. unknown | CString |  |
| SubjectType | GetAnnexationRulesForType |  | CString |  |
| SubjectType | GetBuildingRules | 1. unknown 2. unknown | CString |  |
| SubjectType | GetBuildingRulesForType |  | CString |  |
| SubjectType | GetColor |  | CVector4f |  |
| SubjectType | GetDiplomaticRules | 1. unknown 2. unknown | CString |  |
| SubjectType | GetDiplomaticRulesForType |  | CString |  |
| SubjectType | GetFlavor |  | CString |  |
| SubjectType | GetLevel |  | int32 |  |
| SubjectType | GetMapColor |  | unknown |  |
| SubjectType | GetMonthly | 1. unknown 2. unknown | CString |  |
| SubjectType | GetMonthlyForType |  | CString |  |
| SubjectType | GetName |  | CString |  |
| SubjectType | GetNameKey |  | CString |  |
| SubjectType | GetNameWithNoTooltip |  | CString |  |
| SubjectType | GetOverlordBenefits | 1. unknown 2. unknown | CString |  |
| SubjectType | GetOverlordBenefitsForType |  | CString |  |
| SubjectType | GetStatusRules | 1. unknown 2. unknown | CString |  |
| SubjectType | GetStatusRulesForType |  | CString |  |
| SubjectType | GetSubjectBenefits | 1. unknown 2. unknown | CString |  |
| SubjectType | GetSubjectBenefitsForType |  | CString |  |
| SubjectType | GetSubjectPays |  | unknown |  |
| SubjectType | HasAnnexationRules |  | bool |  |
| SubjectType | HasBuildingRules |  | bool |  |
| SubjectType | HasDiplomaticRules |  | bool |  |
| SubjectType | HasMonthly |  | bool |  |
| SubjectType | HasOverlordBenefits |  | bool |  |
| SubjectType | HasStatusRules |  | bool |  |
| SubjectType | HasSubjectBenefits |  | bool |  |
| SubjectType | MakeScope |  | Scope | Jomini Script System |
| SubjectType | Self |  | SubjectType |  |
| SubjectTypeItem | AccessSelf |  | SubjectTypeItem |  |
| SubjectTypeItem | CanSelect |  | bool |  |
| SubjectTypeItem | GetIcon |  | unknown |  |
| SubjectTypeItem | GetInfo |  | CString |  |
| SubjectTypeItem | GetName |  | CString |  |
| SubjectTypeItem | GetNameWithNoTooltip |  | CString |  |
| SubjectTypeItem | GetSubjectType |  | unknown |  |
| SubjectTypeItem | GetWhy |  | CString |  |
| SubjectTypeItem | IsAlreadySubjectType |  | bool |  |
| SubjectTypeItem | Select |  | void |  |
| SubjectTypeItem | Self |  | SubjectTypeItem |  |
| SupplyDepot | AccessSelf |  | SupplyDepot |  |
| SupplyDepot | GetCapacity |  | CString |  |
| SupplyDepot | GetFood |  | unknown |  |
| SupplyDepot | GetLocation |  | unknown |  |
| SupplyDepot | GetName |  | CString |  |
| SupplyDepot | GetNameWithNoTooltip |  | CString |  |
| SupplyDepot | GetOwner |  | unknown |  |
| SupplyDepot | GetTooltip |  | CString |  |
| SupplyDepot | Self |  | SupplyDepot |  |
| SupplyDepotMarker | AccessSelf |  | SupplyDepotMarker |  |
| SupplyDepotMarker | GetLocation |  | unknown |  |
| SupplyDepotMarker | GetProgress |  | float |  |
| SupplyDepotMarker | Self |  | SupplyDepotMarker |  |
| SupplyOnMarketWrap | AccessSelf |  | SupplyOnMarketWrap |  |
| SupplyOnMarketWrap | GetGoods |  | unknown |  |
| SupplyOnMarketWrap | GetMarket |  | unknown |  |
| SupplyOnMarketWrap | GetName |  | CString |  |
| SupplyOnMarketWrap | Self |  | SupplyOnMarketWrap |  |
| SupportRebelLateralView | AccessSelf |  | SupportRebelLateralView |  |
| SupportRebelLateralView | GetDesc |  | CString |  |
| SupportRebelLateralView | GetPlayer |  | unknown |  |
| SupportRebelLateralView | GetTargets |  | unknown |  |
| SupportRebelLateralView | GetTitle |  | CString |  |
| SupportRebelLateralView | HasSelectedRebel |  | bool |  |
| SupportRebelLateralView | IsLeftPanel |  | bool |  |
| SupportRebelLateralView | IsRightPanel |  | bool |  |
| SupportRebelLateralView | OnAccept |  | void |  |
| SupportRebelLateralView | OnDecline |  | void |  |
| SupportRebelLateralView | Self |  | SupportRebelLateralView |  |
| TableColumn | AccessSelf |  | TableColumn |  |
| TableColumn | GetHorizontalLayoutPolicy |  | unknown |  |
| TableColumn | GetRows |  | unknown |  |
| TableColumn | GetTextAlignment |  | uint32 |  |
| TableColumn | GetTitle |  | CString |  |
| TableColumn | IsTextLeft |  | bool |  |
| TableColumn | IsTextRight |  | bool |  |
| TableColumn | Self |  | TableColumn |  |
| TableColumnList | AccessSelf |  | TableColumnList |  |
| TableColumnList | GetColumns |  | unknown |  |
| TableColumnList | GetTitle |  | CString |  |
| TableColumnList | HasTitle |  | bool |  |
| TableColumnList | HasTitleRow |  | bool |  |
| TableColumnList | Self |  | TableColumnList |  |
| TacticalMilitaryObjectiveGroup | AccessArmies |  | unknown |  |
| TacticalMilitaryObjectiveGroup | AccessNavies |  | unknown |  |
| TacticalMilitaryObjectiveGroup | AccessSelf |  | TacticalMilitaryObjectiveGroup |  |
| TacticalMilitaryObjectiveGroup | ClearHighlight | 1. unknown | void |  |
| TacticalMilitaryObjectiveGroup | ContainsUnit | 1. unknown | bool |  |
| TacticalMilitaryObjectiveGroup | GetArmies |  | unknown |  |
| TacticalMilitaryObjectiveGroup | GetCommanders |  | unknown |  |
| TacticalMilitaryObjectiveGroup | GetID |  | int32 |  |
| TacticalMilitaryObjectiveGroup | GetLocation |  | CString |  |
| TacticalMilitaryObjectiveGroup | GetLocationTooltip |  | CString |  |
| TacticalMilitaryObjectiveGroup | GetNavies |  | unknown |  |
| TacticalMilitaryObjectiveGroup | GetPriority |  | CFixedPoint |  |
| TacticalMilitaryObjectiveGroup | GetTroopSufficiencyColor |  | CVector4f |  |
| TacticalMilitaryObjectiveGroup | GetTroopSufficiencyTooltip |  | CString |  |
| TacticalMilitaryObjectiveGroup | GetUnitCount |  | CString |  |
| TacticalMilitaryObjectiveGroup | IsCompleted |  | bool |  |
| TacticalMilitaryObjectiveGroup | Self |  | TacticalMilitaryObjectiveGroup |  |
| TacticalMilitaryObjectiveGroup | SetHighlight | 1. unknown | void |  |
| TacticalMilitaryObjectiveGroup | UsesTroopSufficiency |  | bool |  |
| TacticalMilitaryObjectiveTypeGlue | AccessSelf |  | TacticalMilitaryObjectiveTypeGlue |  |
| TacticalMilitaryObjectiveTypeGlue | AddNew |  | void |  |
| TacticalMilitaryObjectiveTypeGlue | CanAdd |  | bool |  |
| TacticalMilitaryObjectiveTypeGlue | CanAddDesc |  | CString |  |
| TacticalMilitaryObjectiveTypeGlue | CanBeExpanded |  | bool |  |
| TacticalMilitaryObjectiveTypeGlue | GetAddNewTooltip |  | CString |  |
| TacticalMilitaryObjectiveTypeGlue | GetInfo |  | CString |  |
| TacticalMilitaryObjectiveTypeGlue | GetObjectiveGroups |  | unknown |  |
| TacticalMilitaryObjectiveTypeGlue | GetType |  | unknown |  |
| TacticalMilitaryObjectiveTypeGlue | GetTypeIcon |  | unknown |  |
| TacticalMilitaryObjectiveTypeGlue | GetTypeName |  | CString |  |
| TacticalMilitaryObjectiveTypeGlue | IsExpanded |  | bool |  |
| TacticalMilitaryObjectiveTypeGlue | Self |  | TacticalMilitaryObjectiveTypeGlue |  |
| TacticalMilitaryObjectiveTypeGlue | Toggle |  | void |  |
| TacticalMilitaryObjectiveTypeGlue | UsesMapSelection |  | bool |  |
| TacticalMilitaryObjectiveTypeGlue | UsesSpecialOptions |  | bool |  |
| TacticalObjectiveGroupGlue | AccessSelf |  | TacticalObjectiveGroupGlue |  |
| TacticalObjectiveGroupGlue | GetArmyRecruitmentDesired |  | unknown |  |
| TacticalObjectiveGroupGlue | GetArmyRecruitmentNeeded |  | unknown |  |
| TacticalObjectiveGroupGlue | GetNavyRecruitmentDesired |  | unknown |  |
| TacticalObjectiveGroupGlue | GetNavyRecruitmentNeeded |  | unknown |  |
| TacticalObjectiveGroupGlue | GetObjectiveGroup |  | unknown |  |
| TacticalObjectiveGroupGlue | GetTotalUnitsArmyStrength |  | unknown |  |
| TacticalObjectiveGroupGlue | GetTotalUnitsNavyStrength |  | unknown |  |
| TacticalObjectiveGroupGlue | Self |  | TacticalObjectiveGroupGlue |  |
| TagInfo | AccessSelf |  | TagInfo |  |
| TagInfo | IsSelected |  | bool |  |
| TagInfo | Self |  | TagInfo |  |
| TagInfo | Tag |  | CString |  |
| TagInfo | ToggleSelected |  | void |  |
| TargettedActionParameters | AccessSelf |  | TargettedActionParameters |  |
| TargettedActionParameters | GetActor |  | unknown |  |
| TargettedActionParameters | GetFirstObjectOfType | 1. unknown | unknown |  |
| TargettedActionParameters | GetProposer |  | unknown |  |
| TargettedActionParameters | GetRecipient |  | unknown |  |
| TargettedActionParameters | GetTargetObjectFromFlag | 1. unknown | unknown |  |
| TargettedActionParameters | Self |  | TargettedActionParameters |  |
| TaxRateSetting | AccessSelf |  | TaxRateSetting |  |
| TaxRateSetting | GetAutoTaxRateTooltip |  | CString |  |
| TaxRateSetting | GetDefault |  | float |  |
| TaxRateSetting | GetEstate |  | unknown |  |
| TaxRateSetting | GetImpact |  | CString |  |
| TaxRateSetting | GetImpactTooltip |  | CString |  |
| TaxRateSetting | GetImpactValue |  | CFixedPoint |  |
| TaxRateSetting | GetIncome |  | CFixedPoint |  |
| TaxRateSetting | GetIncomeBreakdown |  | CString |  |
| TaxRateSetting | GetMax |  | float |  |
| TaxRateSetting | GetMin |  | float |  |
| TaxRateSetting | GetName |  | CString |  |
| TaxRateSetting | GetTaxSettingsTooltip |  | CString |  |
| TaxRateSetting | HasImpact |  | bool |  |
| TaxRateSetting | IsTaxRateSettingDecEnabled |  | bool |  |
| TaxRateSetting | IsTaxRateSettingIncEnabled |  | bool |  |
| TaxRateSetting | IsTaxRateSliderEnabled |  | bool |  |
| TaxRateSetting | IsUsingAutoTaxRate |  | bool |  |
| TaxRateSetting | OnTaxChanged |  | void |  |
| TaxRateSetting | Post |  | void |  |
| TaxRateSetting | Self |  | TaxRateSetting |  |
| TaxRateSetting | ShouldShow |  | bool |  |
| TaxRateSetting | ToggleAutoTaxRate |  | void |  |
| TechTreeItem | AccessSelf |  | TechTreeItem |  |
| TechTreeItem | GetItems |  | unknown |  |
| TechTreeItem | GetLineItems |  | unknown |  |
| TechTreeItem | Self |  | TechTreeItem |  |
| TechTreeItem | SetupDataContexts | 1. unknown | unknown |  |
| TechTreeOneAge | AccessSelf |  | TechTreeOneAge |  |
| TechTreeOneAge | GetTechTreeItems |  | unknown |  |
| TechTreeOneAge | IsSelectedAge |  | bool |  |
| TechTreeOneAge | Self |  | TechTreeOneAge |  |
| TechnologyLateralView | AccessSelf |  | TechnologyLateralView |  |
| TechnologyLateralView | EmbraceInstitution | 1. unknown | void |  |
| TechnologyLateralView | GetAgeTooltip | 1. unknown | CString |  |
| TechnologyLateralView | GetAges |  | unknown |  |
| TechnologyLateralView | GetAutocompleteFromKey | 1. unknown | unknown |  |
| TechnologyLateralView | GetAverageLiteracyInfo |  | CString |  |
| TechnologyLateralView | GetInstitutionItems |  | unknown |  |
| TechnologyLateralView | GetInstitutionTooltip | 1. unknown | CString |  |
| TechnologyLateralView | GetNewReforms |  | CString |  |
| TechnologyLateralView | GetNewReformsTooltip |  | CString |  |
| TechnologyLateralView | GetPlayer |  | unknown |  |
| TechnologyLateralView | GetPriceMarket |  | CString |  |
| TechnologyLateralView | GetPriceMarketTooltip |  | CString |  |
| TechnologyLateralView | GetProgress | 1. unknown | float |  |
| TechnologyLateralView | GetResearchSpeedTooltip |  | CString |  |
| TechnologyLateralView | GetSearchBar |  | unknown |  |
| TechnologyLateralView | GetSelectedAgeTechTree |  | unknown |  |
| TechnologyLateralView | IsAgeSelected | 1. unknown | bool |  |
| TechnologyLateralView | IsLeftPanel |  | bool |  |
| TechnologyLateralView | IsRightPanel |  | bool |  |
| TechnologyLateralView | PanToAdvance |  | void |  |
| TechnologyLateralView | SelectAge | 1. unknown | void |  |
| TechnologyLateralView | Self |  | TechnologyLateralView |  |
| TemporaryDemand | AccessSelf |  | TemporaryDemand |  |
| TemporaryDemand | GetDemand |  | unknown |  |
| TemporaryDemand | GetExpiryDate |  | CString |  |
| TemporaryDemand | GetMonthsLeft |  | int32 |  |
| TemporaryDemand | GetName |  | CString |  |
| TemporaryDemand | Self |  | TemporaryDemand |  |
| TerrainImpactItem | AccessSelf |  | TerrainImpactItem |  |
| TerrainImpactItem | GetIcon |  | unknown |  |
| TerrainImpactItem | GetImpact |  | CFixedPoint |  |
| TerrainImpactItem | GetTooltip |  | CString |  |
| TerrainImpactItem | Self |  | TerrainImpactItem |  |
| TerrainToolButton | AccessSelf |  | TerrainToolButton |  |
| TerrainToolButton | IsSelected |  | bool |  |
| TerrainToolButton | Self |  | TerrainToolButton |  |
| TextSearchFilter | AccessSelf |  | TextSearchFilter |  |
| TextSearchFilter | IsFilterEnabled |  | bool |  |
| TextSearchFilter | SelectFilter |  | void |  |
| TextSearchFilter | Self |  | TextSearchFilter |  |
| TextSearchFilter | ToggleFilter |  | void |  |
| TextureEntry | AccessSelf |  | TextureEntry |  |
| TextureEntry | GetName |  | CString |  |
| TextureEntry | GetResolution |  | CString |  |
| TextureEntry | GetTexture |  | unknown |  |
| TextureEntry | IsAvailable |  | bool |  |
| TextureEntry | OpenTextureViewer |  | void |  |
| TextureEntry | Self |  | TextureEntry |  |
| TextureImporter | AccessOutputEntries |  | unknown |  |
| TextureImporter | AccessSelf |  | TextureImporter |  |
| TextureImporter | AddCustomResolution |  | void |  |
| TextureImporter | Cancel |  | void |  |
| TextureImporter | GetLastConversion |  | CString |  |
| TextureImporter | GetTextures |  | unknown |  |
| TextureImporter | HasLastConversion |  | bool |  |
| TextureImporter | Import |  | void |  |
| TextureImporter | IsCustomResolution |  | bool |  |
| TextureImporter | IsImporting |  | bool |  |
| TextureImporter | Refresh |  | void |  |
| TextureImporter | RemoveCustomResolution |  | void |  |
| TextureImporter | Self |  | TextureImporter |  |
| TextureImporter | SetOutputScale | 1. unknown | void |  |
| TextureImporter | SetResolution | 1. unknown | void |  |
| TextureList | AccessSelf |  | TextureList |  |
| TextureList | GetAutoUpdate |  | bool |  |
| TextureList | GetCurrentDirectory |  | CString |  |
| TextureList | GetDirectories |  | unknown |  |
| TextureList | GetFilterString |  | CUTF8String |  |
| TextureList | GetTextures |  | unknown |  |
| TextureList | GetTotalSize |  | uint64 |  |
| TextureList | GetTotalTextureCount |  | int32 |  |
| TextureList | GoToParentDirectory |  | void |  |
| TextureList | IsFlatView |  | bool |  |
| TextureList | Self |  | TextureList |  |
| TextureList | SetAutoUpdate | 1. unknown | void |  |
| TextureList | SetFilterString |  | void |  |
| TextureList | SetFlatView | 1. unknown | void |  |
| TextureList | SortByFormat |  | void |  |
| TextureList | SortByMipMaps |  | void |  |
| TextureList | SortByName |  | void |  |
| TextureList | SortByRefCount |  | void |  |
| TextureList | SortByResolution |  | void |  |
| TextureList | SortBySize |  | void |  |
| TextureList | UpdateTextureList |  | void |  |
| TextureListDirectory | AccessSelf |  | TextureListDirectory |  |
| TextureListDirectory | GetMipMaps |  | int32 |  |
| TextureListDirectory | GetName |  | unknown |  |
| TextureListDirectory | GetRefcount |  | int32 |  |
| TextureListDirectory | GetSize |  | uint64 |  |
| TextureListDirectory | GetSubDirectoryCount |  | int32 |  |
| TextureListDirectory | GetTextureCount |  | int32 |  |
| TextureListDirectory | Self |  | TextureListDirectory |  |
| TextureListTexture | AccessSelf |  | TextureListTexture |  |
| TextureListTexture | GetFormat |  | CString |  |
| TextureListTexture | GetMipMaps |  | int32 |  |
| TextureListTexture | GetName |  | unknown |  |
| TextureListTexture | GetRefcount |  | int32 |  |
| TextureListTexture | GetResolution |  | CString |  |
| TextureListTexture | GetSize |  | uint64 |  |
| TextureListTexture | Self |  | TextureListTexture |  |
| TextureNodeWindow | AccessSelf |  | TextureNodeWindow |  |
| TextureNodeWindow | FileSelect |  | void |  |
| TextureNodeWindow | Filename |  | CString |  |
| TextureNodeWindow | Self |  | TextureNodeWindow |  |
| TextureNodeWindow | Texture |  | unknown |  |
| TextureViewer | AccessSelf |  | TextureViewer |  |
| TextureViewer | Fit |  | void |  |
| TextureViewer | GetAlpha |  | bool |  |
| TextureViewer | GetAutoFit |  | bool |  |
| TextureViewer | GetBlue |  | bool |  |
| TextureViewer | GetConstantBuffers |  | unknown |  |
| TextureViewer | GetEffect |  | unknown |  |
| TextureViewer | GetFlipV |  | bool |  |
| TextureViewer | GetGreen |  | bool |  |
| TextureViewer | GetPointSampling |  | bool |  |
| TextureViewer | GetRed |  | bool |  |
| TextureViewer | GetTexture |  | unknown |  |
| TextureViewer | GetTextureSize |  | CVector2f |  |
| TextureViewer | GetTextureString |  | CString |  |
| TextureViewer | GetTextureZoom |  | CString |  |
| TextureViewer | GetToGamma |  | bool |  |
| TextureViewer | OriginalSize |  | void |  |
| TextureViewer | Self |  | TextureViewer |  |
| TextureViewer | SetAlpha | 1. unknown | void |  |
| TextureViewer | SetAutoFit | 1. unknown | void |  |
| TextureViewer | SetBlue | 1. unknown | void |  |
| TextureViewer | SetFlipV | 1. unknown | void |  |
| TextureViewer | SetGreen | 1. unknown | void |  |
| TextureViewer | SetPointSampling | 1. unknown | void |  |
| TextureViewer | SetRed | 1. unknown | void |  |
| TextureViewer | SetToGamma | 1. unknown | void |  |
| TextureViewer | ShowFileList |  | void |  |
| ThreatenTarget | AccessSelf |  | ThreatenTarget |  |
| ThreatenTarget | GetAcceptanceFrame |  | int32 |  |
| ThreatenTarget | GetAcceptanceTooltip |  | CString |  |
| ThreatenTarget | GetDescription |  | CString |  |
| ThreatenTarget | GetName |  | CString |  |
| ThreatenTarget | IsEnabled |  | bool |  |
| ThreatenTarget | OnClick |  | void |  |
| ThreatenTarget | Self |  | ThreatenTarget |  |
| ThreatenWarView | AccessSelf |  | ThreatenWarView |  |
| ThreatenWarView | GetAcceptanceFrame |  | int32 |  |
| ThreatenWarView | GetAcceptanceTooltip |  | CString |  |
| ThreatenWarView | GetDesc |  | CString |  |
| ThreatenWarView | GetEffect |  | CString |  |
| ThreatenWarView | GetTargets |  | unknown |  |
| ThreatenWarView | GetTitle |  | CString |  |
| ThreatenWarView | HasSelectedLocation |  | bool |  |
| ThreatenWarView | OnAccept |  | void |  |
| ThreatenWarView | OnDecline |  | void |  |
| ThreatenWarView | Self |  | ThreatenWarView |  |
| TickTaskData | AccessSelf |  | TickTaskData |  |
| TickTaskData | GetAverageTime |  | int32 |  |
| TickTaskData | GetExecutionPriority |  | CString |  |
| TickTaskData | GetExecutionPriorityFrame |  | int32 |  |
| TickTaskData | GetExecutionRate |  | CString |  |
| TickTaskData | GetExecutionRateFrame |  | int32 |  |
| TickTaskData | GetHighestLockTime |  | int32 |  |
| TickTaskData | GetIndex |  | int32 |  |
| TickTaskData | GetName |  | CString |  |
| TickTaskData | GetTimesExecuted |  | int32 |  |
| TickTaskData | GetTotalTime |  | int32 |  |
| TickTaskData | IsPersisted |  | bool |  |
| TickTaskData | OpenDetails |  | void |  |
| TickTaskData | Self |  | TickTaskData |  |
| TickTaskDebuggerView | AccessSelf |  | TickTaskDebuggerView |  |
| TickTaskDebuggerView | GetGraphItems |  | unknown |  |
| TickTaskDebuggerView | GetGraphLines |  | unknown |  |
| TickTaskDebuggerView | Self |  | TickTaskDebuggerView |  |
| TickTaskDetailsView | AccessSelf |  | TickTaskDetailsView |  |
| TickTaskDetailsView | GetTickTask |  | unknown |  |
| TickTaskDetailsView | Self |  | TickTaskDetailsView |  |
| TickTaskGraphItem | AccessSelf |  | TickTaskGraphItem |  |
| TickTaskGraphItem | AccessTickTask |  | unknown |  |
| TickTaskGraphItem | GetKey |  | CString |  |
| TickTaskGraphItem | GetPosition |  | CVector2f |  |
| TickTaskGraphItem | GetTickTask |  | unknown |  |
| TickTaskGraphItem | GetTooltip |  | CString |  |
| TickTaskGraphItem | Self |  | TickTaskGraphItem |  |
| TickTaskGraphLine | AccessSelf |  | TickTaskGraphLine |  |
| TickTaskGraphLine | GetFrom |  | CVector2f |  |
| TickTaskGraphLine | GetLineFrom |  | CVector2f |  |
| TickTaskGraphLine | GetLineTo |  | CVector2f |  |
| TickTaskGraphLine | GetPoints |  | unknown |  |
| TickTaskGraphLine | GetPointsInContainer |  | unknown |  |
| TickTaskGraphLine | GetPosition |  | CVector2f |  |
| TickTaskGraphLine | GetSize |  | CVector2f |  |
| TickTaskGraphLine | GetTo |  | CVector2f |  |
| TickTaskGraphLine | IsFromNodeVirtual |  | bool |  |
| TickTaskGraphLine | IsToNodeVirtual |  | bool |  |
| TickTaskGraphLine | Self |  | TickTaskGraphLine |  |
| TickTaskListView | AccessSelf |  | TickTaskListView |  |
| TickTaskListView | GetTickTasks |  | unknown |  |
| TickTaskListView | Self |  | TickTaskListView |  |
| TickTaskListView | Sort | 1. unknown | void |  |
| TimedModifier | AccessSelf |  | TimedModifier |  |
| TimedModifier | GetDesc |  | CString |  |
| TimedModifier | GetDuration |  | CString |  |
| TimedModifier | GetInverseProgress |  | CFixedPoint |  |
| TimedModifier | GetModifier |  | unknown |  |
| TimedModifier | GetModifierEffect |  | CString |  |
| TimedModifier | GetProgress |  | CFixedPoint |  |
| TimedModifier | GetTooltip |  | CString |  |
| TimedModifier | Self |  | TimedModifier |  |
| TimedModifierOwner | AccessSelf |  | TimedModifierOwner |  |
| TimedModifierOwner | GetDisplayedCategoryKey |  | CString |  |
| TimedModifierOwner | GetDisplayedCategoryTexture |  | unknown |  |
| TimedModifierOwner | GetDisplayedConceptLink |  | CString |  |
| TimedModifierOwner | GetModifiers |  | unknown |  |
| TimedModifierOwner | GetSize |  | int32 |  |
| TimedModifierOwner | IsEmpty |  | bool |  |
| TimedModifierOwner | Self |  | TimedModifierOwner |  |
| TimelineKeyframe | AccessSelf |  | TimelineKeyframe |  |
| TimelineKeyframe | IsHovered |  | bool |  |
| TimelineKeyframe | IsSelected |  | bool |  |
| TimelineKeyframe | KeyframeColor |  | CVector4f |  |
| TimelineKeyframe | Label |  | CString |  |
| TimelineKeyframe | Self |  | TimelineKeyframe |  |
| TimelineKeyframe | SetHovered | 1. unknown | void |  |
| TimelineKeyframe | SetSelected | 1. unknown | void |  |
| TimelineKeyframe | TimePoint |  | float |  |
| TitleDescTooltip | AccessSelf |  | TitleDescTooltip |  |
| TitleDescTooltip | GetDesc |  | CString |  |
| TitleDescTooltip | GetTitle |  | CString |  |
| TitleDescTooltip | Self |  | TitleDescTooltip |  |
| TollMarker | AccessSelf |  | TollMarker |  |
| TollMarker | GetLocation |  | unknown |  |
| TollMarker | Self |  | TollMarker |  |
| ToolDialog | AccessSelf |  | ToolDialog |  |
| ToolDialog | Buttons |  | unknown |  |
| ToolDialog | Cancel |  | void |  |
| ToolDialog | Close |  | void |  |
| ToolDialog | Confirm |  | void |  |
| ToolDialog | Self |  | ToolDialog |  |
| ToolDialog | Title |  | CString |  |
| ToolDialogButton | AccessSelf |  | ToolDialogButton |  |
| ToolDialogButton | OnClick |  | bool |  |
| ToolDialogButton | Self |  | ToolDialogButton |  |
| ToolDialogButton | Text |  | CString |  |
| ToolMessageDialog | AccessSelf |  | ToolMessageDialog |  |
| ToolMessageDialog | IsError |  | bool |  |
| ToolMessageDialog | IsInfo |  | bool |  |
| ToolMessageDialog | IsWarning |  | bool |  |
| ToolMessageDialog | Message |  | CString |  |
| ToolMessageDialog | Self |  | ToolMessageDialog |  |
| ToolProgressDialog | AccessSelf |  | ToolProgressDialog |  |
| ToolProgressDialog | GetProgress |  | float |  |
| ToolProgressDialog | Self |  | ToolProgressDialog |  |
| ToolProperty | AccessActions |  | unknown |  |
| ToolProperty | AccessSelf |  | ToolProperty |  |
| ToolProperty | GetActions |  | unknown |  |
| ToolProperty | GetColor |  | CVector4f |  |
| ToolProperty | GetLabel |  | CString |  |
| ToolProperty | GetTooltip |  | CString |  |
| ToolProperty | GetTooltipWithLabel |  | CString |  |
| ToolProperty | HasCheckbox |  | bool |  |
| ToolProperty | HasDefaultValue |  | bool |  |
| ToolProperty | IsActive |  | bool |  |
| ToolProperty | IsSelected |  | bool |  |
| ToolProperty | IsValueDefault |  | bool |  |
| ToolProperty | IsVisible |  | bool |  |
| ToolProperty | Self |  | ToolProperty |  |
| ToolProperty | SetSelected | 1. unknown | void |  |
| ToolProperty | SetValueToDefault |  | void |  |
| ToolProperty2SearchList | AccessSelf |  | ToolProperty2SearchList |  |
| ToolProperty2SearchList | AreSelectButtonsVisible |  | bool |  |
| ToolProperty2SearchList | GetSelectedLabel |  | CUTF8String |  |
| ToolProperty2SearchList | GetSelectedValueColor |  | CVector4f |  |
| ToolProperty2SearchList | HasNext |  | bool |  |
| ToolProperty2SearchList | HasPrev |  | bool |  |
| ToolProperty2SearchList | NextEntryTooltip |  | CUTF8String |  |
| ToolProperty2SearchList | OpenSearchList |  | void |  |
| ToolProperty2SearchList | PrevEntryTooltip |  | CUTF8String |  |
| ToolProperty2SearchList | SelectNext |  | void |  |
| ToolProperty2SearchList | SelectPrev |  | void |  |
| ToolProperty2SearchList | Self |  | ToolProperty2SearchList |  |
| ToolPropertyAction | AccessSelf |  | ToolPropertyAction |  |
| ToolPropertyAction | Execute |  | void |  |
| ToolPropertyAction | GetIcon |  | unknown |  |
| ToolPropertyAction | GetTooltip |  | CString |  |
| ToolPropertyAction | IsAvailable |  | bool |  |
| ToolPropertyAction | IsButton |  | bool |  |
| ToolPropertyAction | IsVisible |  | bool |  |
| ToolPropertyAction | Self |  | ToolPropertyAction |  |
| ToolPropertyBool | AccessSelf |  | ToolPropertyBool |  |
| ToolPropertyBool | IsEnabled |  | bool |  |
| ToolPropertyBool | Self |  | ToolPropertyBool |  |
| ToolPropertyBool | SetEnabled | 1. unknown | void |  |
| ToolPropertyCColor | AccessSelf |  | ToolPropertyCColor |  |
| ToolPropertyCColor | GetCColor |  | CVector4f |  |
| ToolPropertyCColor | Self |  | ToolPropertyCColor |  |
| ToolPropertyCColor | SetCColor |  | void |  |
| ToolPropertyCString | AccessSelf |  | ToolPropertyCString |  |
| ToolPropertyCString | GetString |  | CString |  |
| ToolPropertyCString | Self |  | ToolPropertyCString |  |
| ToolPropertyCString | SetString |  | void |  |
| ToolPropertyColor | AccessSelf |  | ToolPropertyColor |  |
| ToolPropertyColor | GetColor |  | CVector4f |  |
| ToolPropertyColor | Self |  | ToolPropertyColor |  |
| ToolPropertyColor | SetColor |  | void |  |
| ToolPropertyCurve | AccessSelf |  | ToolPropertyCurve |  |
| ToolPropertyCurve | GetPreviewTexture | 1. unknown 2. unknown 3. unknown 4. unknown | unknown |  |
| ToolPropertyCurve | HasCurveEditor |  | bool |  |
| ToolPropertyCurve | OpenCurveEditor |  | void |  |
| ToolPropertyCurve | ResetCurve |  | void |  |
| ToolPropertyCurve | Self |  | ToolPropertyCurve |  |
| ToolPropertyCurve | SetCurve | 1. unknown | void |  |
| ToolPropertyCurve | ToggleCurveEditor |  | void |  |
| ToolPropertyFloat | AccessSelf |  | ToolPropertyFloat |  |
| ToolPropertyFloat | GetFloat |  | float |  |
| ToolPropertyFloat | GetValueColor |  | CVector4f |  |
| ToolPropertyFloat | Self |  | ToolPropertyFloat |  |
| ToolPropertyFloat | SetFloat |  | void |  |
| ToolPropertyInt | AccessSelf |  | ToolPropertyInt |  |
| ToolPropertyInt | GetInt |  | int32 |  |
| ToolPropertyInt | GetValueColor |  | CVector4f |  |
| ToolPropertyInt | Self |  | ToolPropertyInt |  |
| ToolPropertyInt | SetInt |  | void |  |
| ToolPropertyInt16 | AccessSelf |  | ToolPropertyInt16 |  |
| ToolPropertyInt16 | GetInt16 |  | int16 |  |
| ToolPropertyInt16 | GetValueColor |  | CVector4f |  |
| ToolPropertyInt16 | Self |  | ToolPropertyInt16 |  |
| ToolPropertyInt16 | SetInt16 |  | void |  |
| ToolPropertyInt8 | AccessSelf |  | ToolPropertyInt8 |  |
| ToolPropertyInt8 | GetInt8 |  | int8 |  |
| ToolPropertyInt8 | GetValueColor |  | CVector4f |  |
| ToolPropertyInt8 | Self |  | ToolPropertyInt8 |  |
| ToolPropertyInt8 | SetInt8 |  | void |  |
| ToolPropertyList | AccessSelf |  | ToolPropertyList |  |
| ToolPropertyList | GetColor |  | CVector4f |  |
| ToolPropertyList | GetLabel |  | CString |  |
| ToolPropertyList | IsExpanded |  | bool |  |
| ToolPropertyList | Self |  | ToolPropertyList |  |
| ToolPropertyList | SetExpanded | 1. unknown | void |  |
| ToolPropertySearchList | AccessSelf |  | ToolPropertySearchList |  |
| ToolPropertySearchList | GetSelectedText |  | CUTF8String |  |
| ToolPropertySearchList | GetSelectedValueColor |  | CVector4f |  |
| ToolPropertySearchList | OpenSearchList |  | void |  |
| ToolPropertySearchList | Self |  | ToolPropertySearchList |  |
| ToolPropertyString | AccessSelf |  | ToolPropertyString |  |
| ToolPropertyString | GetString |  | CUTF8String |  |
| ToolPropertyString | Self |  | ToolPropertyString |  |
| ToolPropertyString | SetString |  | void |  |
| ToolPropertyUint | AccessSelf |  | ToolPropertyUint |  |
| ToolPropertyUint | GetUint |  | uint32 |  |
| ToolPropertyUint | GetValueColor |  | CVector4f |  |
| ToolPropertyUint | Self |  | ToolPropertyUint |  |
| ToolPropertyUint | SetUint |  | void |  |
| ToolPropertyUint16 | AccessSelf |  | ToolPropertyUint16 |  |
| ToolPropertyUint16 | GetUint16 |  | uint16 |  |
| ToolPropertyUint16 | GetValueColor |  | CVector4f |  |
| ToolPropertyUint16 | Self |  | ToolPropertyUint16 |  |
| ToolPropertyUint16 | SetUint16 |  | void |  |
| ToolPropertyUint8 | AccessSelf |  | ToolPropertyUint8 |  |
| ToolPropertyUint8 | GetUint8 |  | uint8 |  |
| ToolPropertyUint8 | GetValueColor |  | CVector4f |  |
| ToolPropertyUint8 | Self |  | ToolPropertyUint8 |  |
| ToolPropertyUint8 | SetUint8 |  | void |  |
| ToolPropertyUndoableSearchList | AccessSelf |  | ToolPropertyUndoableSearchList |  |
| ToolPropertyUndoableSearchList | AreSelectButtonsVisible |  | bool |  |
| ToolPropertyUndoableSearchList | GetSelectedText |  | CUTF8String |  |
| ToolPropertyUndoableSearchList | GetSelectedValueColor |  | CVector4f |  |
| ToolPropertyUndoableSearchList | HasNext |  | bool |  |
| ToolPropertyUndoableSearchList | HasPrev |  | bool |  |
| ToolPropertyUndoableSearchList | NextEntryTooltip |  | CString |  |
| ToolPropertyUndoableSearchList | OpenSearchList |  | void |  |
| ToolPropertyUndoableSearchList | PrevEntryTooltip |  | CString |  |
| ToolPropertyUndoableSearchList | SelectNext |  | void |  |
| ToolPropertyUndoableSearchList | SelectPrev |  | void |  |
| ToolPropertyUndoableSearchList | Self |  | ToolPropertyUndoableSearchList |  |
| ToolPropertyVec1fPercent | AccessSelf |  | ToolPropertyVec1fPercent |  |
| ToolPropertyVec1fPercent | GetValueColor |  | CVector4f |  |
| ToolPropertyVec1fPercent | GetX |  | CString |  |
| ToolPropertyVec1fPercent | Self |  | ToolPropertyVec1fPercent |  |
| ToolPropertyVec1fPercent | SetX |  | void |  |
| ToolPropertyVec2f | AccessSelf |  | ToolPropertyVec2f |  |
| ToolPropertyVec2f | GetValueColor |  | CVector4f |  |
| ToolPropertyVec2f | GetX |  | CString |  |
| ToolPropertyVec2f | GetY |  | CString |  |
| ToolPropertyVec2f | Self |  | ToolPropertyVec2f |  |
| ToolPropertyVec2f | SetX |  | void |  |
| ToolPropertyVec2f | SetY |  | void |  |
| ToolPropertyVec2fPercent | AccessSelf |  | ToolPropertyVec2fPercent |  |
| ToolPropertyVec2fPercent | GetValueColor |  | CVector4f |  |
| ToolPropertyVec2fPercent | GetX |  | CString |  |
| ToolPropertyVec2fPercent | GetY |  | CString |  |
| ToolPropertyVec2fPercent | Self |  | ToolPropertyVec2fPercent |  |
| ToolPropertyVec2fPercent | SetX |  | void |  |
| ToolPropertyVec2fPercent | SetY |  | void |  |
| ToolPropertyVec2i | AccessSelf |  | ToolPropertyVec2i |  |
| ToolPropertyVec2i | GetValueColor |  | CVector4f |  |
| ToolPropertyVec2i | GetX |  | CString |  |
| ToolPropertyVec2i | GetY |  | CString |  |
| ToolPropertyVec2i | Self |  | ToolPropertyVec2i |  |
| ToolPropertyVec2i | SetX |  | void |  |
| ToolPropertyVec2i | SetY |  | void |  |
| ToolPropertyVec3f | AccessSelf |  | ToolPropertyVec3f |  |
| ToolPropertyVec3f | GetValue |  | CVector3f |  |
| ToolPropertyVec3f | GetValueColor |  | CVector4f |  |
| ToolPropertyVec3f | GetX |  | CString |  |
| ToolPropertyVec3f | GetY |  | CString |  |
| ToolPropertyVec3f | GetZ |  | CString |  |
| ToolPropertyVec3f | Self |  | ToolPropertyVec3f |  |
| ToolPropertyVec3f | SetValueFromColor |  | void |  |
| ToolPropertyVec3f | SetX |  | void |  |
| ToolPropertyVec3f | SetY |  | void |  |
| ToolPropertyVec3f | SetZ |  | void |  |
| ToolPropertyVec3i | AccessSelf |  | ToolPropertyVec3i |  |
| ToolPropertyVec3i | GetValue |  | CVector3i |  |
| ToolPropertyVec3i | GetValueColor |  | CVector4f |  |
| ToolPropertyVec3i | GetX |  | CString |  |
| ToolPropertyVec3i | GetY |  | CString |  |
| ToolPropertyVec3i | GetZ |  | CString |  |
| ToolPropertyVec3i | Self |  | ToolPropertyVec3i |  |
| ToolPropertyVec3i | SetValueFromColor |  | void |  |
| ToolPropertyVec3i | SetX |  | void |  |
| ToolPropertyVec3i | SetY |  | void |  |
| ToolPropertyVec3i | SetZ |  | void |  |
| ToolPropertyVec4i | AccessSelf |  | ToolPropertyVec4i |  |
| ToolPropertyVec4i | GetValue |  | CVector4i |  |
| ToolPropertyVec4i | GetValueColor |  | CVector4f |  |
| ToolPropertyVec4i | GetW |  | CString |  |
| ToolPropertyVec4i | GetX |  | CString |  |
| ToolPropertyVec4i | GetY |  | CString |  |
| ToolPropertyVec4i | GetZ |  | CString |  |
| ToolPropertyVec4i | Self |  | ToolPropertyVec4i |  |
| ToolPropertyVec4i | SetValueFromColor |  | void |  |
| ToolPropertyVec4i | SetW |  | void |  |
| ToolPropertyVec4i | SetX |  | void |  |
| ToolPropertyVec4i | SetY |  | void |  |
| ToolPropertyVec4i | SetZ |  | void |  |
| ToolsPropertyDraggableValueFloat | AccessSelf |  | ToolsPropertyDraggableValueFloat |  |
| ToolsPropertyDraggableValueFloat | GetValidator |  | unknown |  |
| ToolsPropertyDraggableValueFloat | GetValue |  | float |  |
| ToolsPropertyDraggableValueFloat | OnMouseDragFinished |  | void |  |
| ToolsPropertyDraggableValueFloat | OnMouseDragStarted |  | void |  |
| ToolsPropertyDraggableValueFloat | Self |  | ToolsPropertyDraggableValueFloat |  |
| ToolsPropertyDraggableValueFloat | SetValueFromText |  | void |  |
| ToolsPropertyDraggableValueFloat | UpdateValue |  | void |  |
| ToolsPropertyDraggableValueInt | AccessSelf |  | ToolsPropertyDraggableValueInt |  |
| ToolsPropertyDraggableValueInt | GetValidator |  | unknown |  |
| ToolsPropertyDraggableValueInt | GetValue |  | int32 |  |
| ToolsPropertyDraggableValueInt | OnMouseDragFinished |  | void |  |
| ToolsPropertyDraggableValueInt | OnMouseDragStarted |  | void |  |
| ToolsPropertyDraggableValueInt | Self |  | ToolsPropertyDraggableValueInt |  |
| ToolsPropertyDraggableValueInt | SetValueFromText |  | void |  |
| ToolsPropertyDraggableValueInt | UpdateValue |  | void |  |
| ToolsPropertyDraggableValueVector2f | AccessSelf |  | ToolsPropertyDraggableValueVector2f |  |
| ToolsPropertyDraggableValueVector2f | GetValidatorX |  | unknown |  |
| ToolsPropertyDraggableValueVector2f | GetValidatorY |  | unknown |  |
| ToolsPropertyDraggableValueVector2f | GetX |  | CString |  |
| ToolsPropertyDraggableValueVector2f | GetY |  | CString |  |
| ToolsPropertyDraggableValueVector2f | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector2f | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector2f | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector2f | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector2f | Self |  | ToolsPropertyDraggableValueVector2f |  |
| ToolsPropertyDraggableValueVector2f | SetX |  | void |  |
| ToolsPropertyDraggableValueVector2f | SetY |  | void |  |
| ToolsPropertyDraggableValueVector2f | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector2f | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector2i | AccessSelf |  | ToolsPropertyDraggableValueVector2i |  |
| ToolsPropertyDraggableValueVector2i | GetValidatorX |  | unknown |  |
| ToolsPropertyDraggableValueVector2i | GetValidatorY |  | unknown |  |
| ToolsPropertyDraggableValueVector2i | GetX |  | CString |  |
| ToolsPropertyDraggableValueVector2i | GetY |  | CString |  |
| ToolsPropertyDraggableValueVector2i | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector2i | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector2i | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector2i | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector2i | Self |  | ToolsPropertyDraggableValueVector2i |  |
| ToolsPropertyDraggableValueVector2i | SetX |  | void |  |
| ToolsPropertyDraggableValueVector2i | SetY |  | void |  |
| ToolsPropertyDraggableValueVector2i | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector2i | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector3f | AccessSelf |  | ToolsPropertyDraggableValueVector3f |  |
| ToolsPropertyDraggableValueVector3f | GetValidatorX |  | unknown |  |
| ToolsPropertyDraggableValueVector3f | GetValidatorY |  | unknown |  |
| ToolsPropertyDraggableValueVector3f | GetValidatorZ |  | unknown |  |
| ToolsPropertyDraggableValueVector3f | GetX |  | CString |  |
| ToolsPropertyDraggableValueVector3f | GetY |  | CString |  |
| ToolsPropertyDraggableValueVector3f | GetZ |  | CString |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragFinishedZ |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragStartedZ |  | void |  |
| ToolsPropertyDraggableValueVector3f | Self |  | ToolsPropertyDraggableValueVector3f |  |
| ToolsPropertyDraggableValueVector3f | SetX |  | void |  |
| ToolsPropertyDraggableValueVector3f | SetY |  | void |  |
| ToolsPropertyDraggableValueVector3f | SetZ |  | void |  |
| ToolsPropertyDraggableValueVector3f | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector3f | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector3f | UpdateValueZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | AccessSelf |  | ToolsPropertyDraggableValueVector3i |  |
| ToolsPropertyDraggableValueVector3i | GetValidatorX |  | unknown |  |
| ToolsPropertyDraggableValueVector3i | GetValidatorY |  | unknown |  |
| ToolsPropertyDraggableValueVector3i | GetValidatorZ |  | unknown |  |
| ToolsPropertyDraggableValueVector3i | GetX |  | CString |  |
| ToolsPropertyDraggableValueVector3i | GetY |  | CString |  |
| ToolsPropertyDraggableValueVector3i | GetZ |  | CString |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragFinishedZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragStartedZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | Self |  | ToolsPropertyDraggableValueVector3i |  |
| ToolsPropertyDraggableValueVector3i | SetX |  | void |  |
| ToolsPropertyDraggableValueVector3i | SetY |  | void |  |
| ToolsPropertyDraggableValueVector3i | SetZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector3i | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector3i | UpdateValueZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | AccessSelf |  | ToolsPropertyDraggableValueVector4i |  |
| ToolsPropertyDraggableValueVector4i | GetValidatorW |  | unknown |  |
| ToolsPropertyDraggableValueVector4i | GetValidatorX |  | unknown |  |
| ToolsPropertyDraggableValueVector4i | GetValidatorY |  | unknown |  |
| ToolsPropertyDraggableValueVector4i | GetValidatorZ |  | unknown |  |
| ToolsPropertyDraggableValueVector4i | GetW |  | CString |  |
| ToolsPropertyDraggableValueVector4i | GetX |  | CString |  |
| ToolsPropertyDraggableValueVector4i | GetY |  | CString |  |
| ToolsPropertyDraggableValueVector4i | GetZ |  | CString |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedW |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedW |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | Self |  | ToolsPropertyDraggableValueVector4i |  |
| ToolsPropertyDraggableValueVector4i | SetW |  | void |  |
| ToolsPropertyDraggableValueVector4i | SetX |  | void |  |
| ToolsPropertyDraggableValueVector4i | SetY |  | void |  |
| ToolsPropertyDraggableValueVector4i | SetZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueW |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueZ |  | void |  |
| ToolsPropertyPath | AccessSelf |  | ToolsPropertyPath |  |
| ToolsPropertyPath | GetPathFontColor |  | CVector4f |  |
| ToolsPropertyPath | GetPathValue |  | CString |  |
| ToolsPropertyPath | GetTooltipText |  | CString |  |
| ToolsPropertyPath | OpenFileDialog |  | void |  |
| ToolsPropertyPath | Self |  | ToolsPropertyPath |  |
| ToolsPropertyPath | SetPathFromText |  | void |  |
| ToolsPropertyRangedValueFloat | AccessSelf |  | ToolsPropertyRangedValueFloat |  |
| ToolsPropertyRangedValueFloat | GetMax |  | float |  |
| ToolsPropertyRangedValueFloat | GetMin |  | float |  |
| ToolsPropertyRangedValueFloat | GetStep |  | float |  |
| ToolsPropertyRangedValueFloat | GetValue |  | float |  |
| ToolsPropertyRangedValueFloat | GetWheelStep |  | float |  |
| ToolsPropertyRangedValueFloat | OnSetValueEnd | 1. unknown | void |  |
| ToolsPropertyRangedValueFloat | OnSetValueStart | 1. unknown | void |  |
| ToolsPropertyRangedValueFloat | Self |  | ToolsPropertyRangedValueFloat |  |
| ToolsPropertyRangedValueFloat | SetValue |  | void |  |
| ToolsPropertyRangedValueFloat | SetValueFromText | 1. unknown | void |  |
| ToolsPropertyRangedValueInt | AccessSelf |  | ToolsPropertyRangedValueInt |  |
| ToolsPropertyRangedValueInt | GetMax |  | int32 |  |
| ToolsPropertyRangedValueInt | GetMin |  | int32 |  |
| ToolsPropertyRangedValueInt | GetStep |  | int32 |  |
| ToolsPropertyRangedValueInt | GetValue |  | int32 |  |
| ToolsPropertyRangedValueInt | GetWheelStep |  | int32 |  |
| ToolsPropertyRangedValueInt | OnSetValueEnd | 1. unknown | void |  |
| ToolsPropertyRangedValueInt | OnSetValueStart | 1. unknown | void |  |
| ToolsPropertyRangedValueInt | Self |  | ToolsPropertyRangedValueInt |  |
| ToolsPropertyRangedValueInt | SetValue |  | void |  |
| ToolsPropertyRangedValueInt | SetValueFromText | 1. unknown | void |  |
| ToolsPropertyTextureStringValue | AccessSelf |  | ToolsPropertyTextureStringValue |  |
| ToolsPropertyTextureStringValue | GetTexture |  | unknown |  |
| ToolsPropertyTextureStringValue | GetTexturePath |  | CString |  |
| ToolsPropertyTextureStringValue | SelectTexture |  | void |  |
| ToolsPropertyTextureStringValue | Self |  | ToolsPropertyTextureStringValue |  |
| ToolsPropertyTextureStringValue | SetValueFromText |  | void |  |
| ToolsPropertyTextureValue | AccessSelf |  | ToolsPropertyTextureValue |  |
| ToolsPropertyTextureValue | GetTexture |  | unknown |  |
| ToolsPropertyTextureValue | GetTexturePath |  | CString |  |
| ToolsPropertyTextureValue | SelectTexture |  | void |  |
| ToolsPropertyTextureValue | Self |  | ToolsPropertyTextureValue |  |
| ToolsPropertyTextureValue | SetValueFromText |  | void |  |
| ToolsPropertyValueList | AccessSelf |  | ToolsPropertyValueList |  |
| ToolsPropertyValueList | AddItem |  | void |  |
| ToolsPropertyValueList | RemoveItem | 1. unknown | void |  |
| ToolsPropertyValueList | Self |  | ToolsPropertyValueList |  |
| ToolsPropertyValueListEntry | AccessSelf |  | ToolsPropertyValueListEntry |  |
| ToolsPropertyValueListEntry | GetIndex |  | int32 |  |
| ToolsPropertyValueListEntry | GetLabel |  | CString |  |
| ToolsPropertyValueListEntry | HasLabel |  | bool |  |
| ToolsPropertyValueListEntry | IsItemVisible |  | bool |  |
| ToolsPropertyValueListEntry | Self |  | ToolsPropertyValueListEntry |  |
| ToolsPropertyVfsMountPath | AccessSelf |  | ToolsPropertyVfsMountPath |  |
| ToolsPropertyVfsMountPath | CloseBrowser |  | void |  |
| ToolsPropertyVfsMountPath | GetFullPath |  | CString |  |
| ToolsPropertyVfsMountPath | GetFullPathFromMountTag | 1. unknown | CString |  |
| ToolsPropertyVfsMountPath | GetMountTagIndex |  | CVector2i |  |
| ToolsPropertyVfsMountPath | GetPathFontColor |  | CVector4f |  |
| ToolsPropertyVfsMountPath | GetTags |  | unknown |  |
| ToolsPropertyVfsMountPath | GetVfsMountPathAsString |  | CString |  |
| ToolsPropertyVfsMountPath | GetVfsPath |  | CString |  |
| ToolsPropertyVfsMountPath | IsBrowserOpen |  | bool |  |
| ToolsPropertyVfsMountPath | IsDisplayModeFullPath |  | bool |  |
| ToolsPropertyVfsMountPath | OpenBrowser |  | void |  |
| ToolsPropertyVfsMountPath | Self |  | ToolsPropertyVfsMountPath |  |
| ToolsPropertyVfsMountPath | SetMountTagIndex |  | void |  |
| ToolsPropertyVfsMountPath | SetVfsPathFromText |  | void |  |
| ToolsPropertyVfsMountPath | ToggleBrowser |  | void |  |
| ToolsPropertyVfsMountPath | ToggleDisplayMode |  | void |  |
| ToolsSearch | AccessSelf |  | ToolsSearch |  |
| ToolsSearch | Results |  | unknown |  |
| ToolsSearch | Search |  | void |  |
| ToolsSearch | Self |  | ToolsSearch |  |
| ToolsSearchResult | AccessSelf |  | ToolsSearchResult |  |
| ToolsSearchResult | Callback |  | void |  |
| ToolsSearchResult | Description |  | CUTF8String |  |
| ToolsSearchResult | DoesTooltipMatch |  | bool |  |
| ToolsSearchResult | Self |  | ToolsSearchResult |  |
| ToolsSearchResult | SortScore |  | int32 |  |
| ToolsSearchResult | Text |  | CUTF8String |  |
| ToolsSearchResult | Tooltip |  | CUTF8String |  |
| ToolsUndoableValueBundleBool | AccessSelf |  | ToolsUndoableValueBundleBool |  |
| ToolsUndoableValueBundleBool | Self |  | ToolsUndoableValueBundleBool |  |
| ToolsUndoableValueBundleBool | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleCColor | AccessSelf |  | ToolsUndoableValueBundleCColor |  |
| ToolsUndoableValueBundleCColor | Self |  | ToolsUndoableValueBundleCColor |  |
| ToolsUndoableValueBundleCColor | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleCString | AccessSelf |  | ToolsUndoableValueBundleCString |  |
| ToolsUndoableValueBundleCString | GetTextboxDisplayValue |  | CString |  |
| ToolsUndoableValueBundleCString | Self |  | ToolsUndoableValueBundleCString |  |
| ToolsUndoableValueBundleCString | SetIsFocused | 1. unknown | void |  |
| ToolsUndoableValueBundleCString | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleCString | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleColor | AccessSelf |  | ToolsUndoableValueBundleColor |  |
| ToolsUndoableValueBundleColor | Self |  | ToolsUndoableValueBundleColor |  |
| ToolsUndoableValueBundleColor | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleFloat | AccessSelf |  | ToolsUndoableValueBundleFloat |  |
| ToolsUndoableValueBundleFloat | GetTextboxDisplayValue |  | CString |  |
| ToolsUndoableValueBundleFloat | Self |  | ToolsUndoableValueBundleFloat |  |
| ToolsUndoableValueBundleFloat | SetIsFocused | 1. unknown | void |  |
| ToolsUndoableValueBundleFloat | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleFloat | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleInt | AccessSelf |  | ToolsUndoableValueBundleInt |  |
| ToolsUndoableValueBundleInt | GetTextboxDisplayValue |  | CString |  |
| ToolsUndoableValueBundleInt | Self |  | ToolsUndoableValueBundleInt |  |
| ToolsUndoableValueBundleInt | SetIsFocused | 1. unknown | void |  |
| ToolsUndoableValueBundleInt | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleInt | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleString | AccessSelf |  | ToolsUndoableValueBundleString |  |
| ToolsUndoableValueBundleString | GetTextboxDisplayValue |  | CString |  |
| ToolsUndoableValueBundleString | Self |  | ToolsUndoableValueBundleString |  |
| ToolsUndoableValueBundleString | SetIsFocused | 1. unknown | void |  |
| ToolsUndoableValueBundleString | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleString | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleUint | AccessSelf |  | ToolsUndoableValueBundleUint |  |
| ToolsUndoableValueBundleUint | GetTextboxDisplayValue |  | CString |  |
| ToolsUndoableValueBundleUint | Self |  | ToolsUndoableValueBundleUint |  |
| ToolsUndoableValueBundleUint | SetIsFocused | 1. unknown | void |  |
| ToolsUndoableValueBundleUint | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleUint | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleUint16 | AccessSelf |  | ToolsUndoableValueBundleUint16 |  |
| ToolsUndoableValueBundleUint16 | GetTextboxDisplayValue |  | CString |  |
| ToolsUndoableValueBundleUint16 | Self |  | ToolsUndoableValueBundleUint16 |  |
| ToolsUndoableValueBundleUint16 | SetIsFocused | 1. unknown | void |  |
| ToolsUndoableValueBundleUint16 | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleUint16 | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleVec2f | AccessSelf |  | ToolsUndoableValueBundleVec2f |  |
| ToolsUndoableValueBundleVec2f | GetTextboxDisplayValue | 1. unknown | CString |  |
| ToolsUndoableValueBundleVec2f | Self |  | ToolsUndoableValueBundleVec2f |  |
| ToolsUndoableValueBundleVec2f | SetIsFocused | 1. unknown 2. unknown | void |  |
| ToolsUndoableValueBundleVec2f | SetValue | 1. unknown | void |  |
| ToolsUndoableValueBundleVec2f | SetValueOnFocusOut | 1. unknown | void |  |
| ToolsUndoableValueBundleVec2f | ShouldDisplayMixedValuesOverlay | 1. unknown | bool |  |
| ToolsUndoableValueBundleVec2i | AccessSelf |  | ToolsUndoableValueBundleVec2i |  |
| ToolsUndoableValueBundleVec2i | GetTextboxDisplayValue | 1. unknown | CString |  |
| ToolsUndoableValueBundleVec2i | Self |  | ToolsUndoableValueBundleVec2i |  |
| ToolsUndoableValueBundleVec2i | SetIsFocused | 1. unknown 2. unknown | void |  |
| ToolsUndoableValueBundleVec2i | SetValue | 1. unknown | void |  |
| ToolsUndoableValueBundleVec2i | SetValueOnFocusOut | 1. unknown | void |  |
| ToolsUndoableValueBundleVec2i | ShouldDisplayMixedValuesOverlay | 1. unknown | bool |  |
| ToolsUndoableValueBundleVec3f | AccessSelf |  | ToolsUndoableValueBundleVec3f |  |
| ToolsUndoableValueBundleVec3f | GetTextboxDisplayValue | 1. unknown | CString |  |
| ToolsUndoableValueBundleVec3f | GetValue |  | CVector3f |  |
| ToolsUndoableValueBundleVec3f | Self |  | ToolsUndoableValueBundleVec3f |  |
| ToolsUndoableValueBundleVec3f | SetIsFocused | 1. unknown 2. unknown | void |  |
| ToolsUndoableValueBundleVec3f | SetValue | 1. unknown | void |  |
| ToolsUndoableValueBundleVec3f | SetValueFromColor |  | void |  |
| ToolsUndoableValueBundleVec3f | SetValueOnFocusOut | 1. unknown | void |  |
| ToolsUndoableValueBundleVec3f | ShouldDisplayMixedValuesOverlay | 1. unknown | bool |  |
| ToolsUndoableValueBundleVec3i | AccessSelf |  | ToolsUndoableValueBundleVec3i |  |
| ToolsUndoableValueBundleVec3i | GetTextboxDisplayValue | 1. unknown | CString |  |
| ToolsUndoableValueBundleVec3i | Self |  | ToolsUndoableValueBundleVec3i |  |
| ToolsUndoableValueBundleVec3i | SetIsFocused | 1. unknown 2. unknown | void |  |
| ToolsUndoableValueBundleVec3i | SetValue | 1. unknown | void |  |
| ToolsUndoableValueBundleVec3i | SetValueOnFocusOut | 1. unknown | void |  |
| ToolsUndoableValueBundleVec3i | ShouldDisplayMixedValuesOverlay | 1. unknown | bool |  |
| ToolsUndoableValueBundleVec4i | AccessSelf |  | ToolsUndoableValueBundleVec4i |  |
| ToolsUndoableValueBundleVec4i | GetTextboxDisplayValue | 1. unknown | CString |  |
| ToolsUndoableValueBundleVec4i | Self |  | ToolsUndoableValueBundleVec4i |  |
| ToolsUndoableValueBundleVec4i | SetIsFocused | 1. unknown 2. unknown | void |  |
| ToolsUndoableValueBundleVec4i | SetValue | 1. unknown | void |  |
| ToolsUndoableValueBundleVec4i | SetValueOnFocusOut | 1. unknown | void |  |
| ToolsUndoableValueBundleVec4i | ShouldDisplayMixedValuesOverlay | 1. unknown | bool |  |
| TooltipInfo | AccessSelf |  | TooltipInfo |  |
| TooltipInfo | GetInvTintColorAlpha |  | float |  |
| TooltipInfo | GetTintColor |  | CVector4f |  |
| TooltipInfo | GetTintColorAlpha |  | float |  |
| TooltipInfo | Self |  | TooltipInfo |  |
| TooltipString | AccessSelf |  | TooltipString |  |
| TooltipString | GetString |  | CString |  |
| TooltipString | Self |  | TooltipString |  |
| TopScope | AccessSelf |  | TopScope |  |
| TopScope | End |  | TopScope |  |
| TopScope | GetFlagName | 1. unknown | CString |  |
| TopScope | GetLocalVariable | 1. unknown | unknown |  |
| TopScope | GetRootScope |  | unknown |  |
| TopScope | GetScriptValueDesc | 1. unknown | CString |  |
| TopScope | GetValue | 1. unknown | CFixedPoint |  |
| TopScope | ScriptValue | 1. unknown | CFixedPoint |  |
| TopScope | Self |  | TopScope |  |
| TopScope | sActiveResolution | 1. unknown | unknown |  |
| TopScope | sAdvanceType | 1. unknown | unknown |  |
| TopScope | sAge | 1. unknown | unknown |  |
| TopScope | sArea | 1. unknown | unknown |  |
| TopScope | sArtist | 1. unknown | unknown |  |
| TopScope | sAudioCulture | 1. unknown | unknown |  |
| TopScope | sAvatar | 1. unknown | unknown |  |
| TopScope | sBuildingType | 1. unknown | unknown |  |
| TopScope | sCabinet | 1. unknown | unknown |  |
| TopScope | sCabinetAction | 1. unknown | unknown |  |
| TopScope | sCardinal | 1. unknown | unknown |  |
| TopScope | sCasusBelli | 1. unknown | unknown |  |
| TopScope | sCharacter | 1. unknown | unknown |  |
| TopScope | sCharacterInteraction | 1. unknown | unknown |  |
| TopScope | sChildEducation | 1. unknown | unknown |  |
| TopScope | sClimate | 1. unknown | unknown |  |
| TopScope | sColonialCharter | 1. unknown | unknown |  |
| TopScope | sCombat | 1. unknown | unknown |  |
| TopScope | sCombatSide | 1. unknown | unknown |  |
| TopScope | sContinent | 1. unknown | unknown |  |
| TopScope | sCountry | 1. unknown | unknown |  |
| TopScope | sCountryInteraction | 1. unknown | unknown |  |
| TopScope | sCountryRank | 1. unknown | unknown |  |
| TopScope | sCulture | 1. unknown | unknown |  |
| TopScope | sDialect | 1. unknown | unknown |  |
| TopScope | sDisaster | 1. unknown | unknown |  |
| TopScope | sDisasterType | 1. unknown | unknown |  |
| TopScope | sDisease | 1. unknown | unknown |  |
| TopScope | sDiseaseOutbreak | 1. unknown | unknown |  |
| TopScope | sDynasty | 1. unknown | unknown |  |
| TopScope | sEmploymentSystem | 1. unknown | unknown |  |
| TopScope | sEstate | 1. unknown | unknown |  |
| TopScope | sEstatePrivilege | 1. unknown | unknown |  |
| TopScope | sEstateType | 1. unknown | unknown |  |
| TopScope | sEthnicity | 1. unknown | unknown |  |
| TopScope | sExploration | 1. unknown | unknown |  |
| TopScope | sFormableCountry | 1. unknown | unknown |  |
| TopScope | sGenericAction | 1. unknown | unknown |  |
| TopScope | sGod | 1. unknown | unknown |  |
| TopScope | sGoods | 1. unknown | unknown |  |
| TopScope | sGoodsDemand | 1. unknown | unknown |  |
| TopScope | sGovernmentReform | 1. unknown | unknown |  |
| TopScope | sGovernmentType | 1. unknown | unknown |  |
| TopScope | sGraphicalCulture | 1. unknown | unknown |  |
| TopScope | sHegemony | 1. unknown | unknown |  |
| TopScope | sHeirSelection | 1. unknown | unknown |  |
| TopScope | sHolySite | 1. unknown | unknown |  |
| TopScope | sHolySiteDefinition | 1. unknown | unknown |  |
| TopScope | sHolySiteType | 1. unknown | unknown |  |
| TopScope | sInstitution | 1. unknown | unknown |  |
| TopScope | sInternationalOrganization | 1. unknown | unknown |  |
| TopScope | sInternationalOrganizationType | 1. unknown | unknown |  |
| TopScope | sLandOwnershipRule | 1. unknown | unknown |  |
| TopScope | sLanguage | 1. unknown | unknown |  |
| TopScope | sLanguageFamily | 1. unknown | unknown |  |
| TopScope | sLaw | 1. unknown | unknown |  |
| TopScope | sLevySetup | 1. unknown | unknown |  |
| TopScope | sLoan | 1. unknown | unknown |  |
| TopScope | sLocation | 1. unknown | unknown |  |
| TopScope | sLocationRank | 1. unknown | unknown |  |
| TopScope | sMarket | 1. unknown | unknown |  |
| TopScope | sMercenary | 1. unknown | unknown |  |
| TopScope | sMissionDefinition | 1. unknown | unknown |  |
| TopScope | sMissionTaskDefinition | 1. unknown | unknown |  |
| TopScope | sParliamentAgenda | 1. unknown | unknown |  |
| TopScope | sParliamentIssue | 1. unknown | unknown |  |
| TopScope | sParliamentType | 1. unknown | unknown |  |
| TopScope | sPayment | 1. unknown | unknown |  |
| TopScope | sPolicy | 1. unknown | unknown |  |
| TopScope | sPop | 1. unknown | unknown |  |
| TopScope | sPopType | 1. unknown | unknown |  |
| TopScope | sPrice | 1. unknown | unknown |  |
| TopScope | sPrivateer | 1. unknown | unknown |  |
| TopScope | sProductionMethod | 1. unknown | unknown |  |
| TopScope | sProvince | 1. unknown | unknown |  |
| TopScope | sProvinceDefinition | 1. unknown | unknown |  |
| TopScope | sRebel | 1. unknown | unknown |  |
| TopScope | sRecruitmentMethod | 1. unknown | unknown |  |
| TopScope | sRegencyType | 1. unknown | unknown |  |
| TopScope | sRegion | 1. unknown | unknown |  |
| TopScope | sRelationType | 1. unknown | unknown |  |
| TopScope | sReligion | 1. unknown | unknown |  |
| TopScope | sReligionGroup | 1. unknown | unknown |  |
| TopScope | sReligiousAspect | 1. unknown | unknown |  |
| TopScope | sReligiousFaction | 1. unknown | unknown |  |
| TopScope | sReligiousFigure | 1. unknown | unknown |  |
| TopScope | sReligiousFocus | 1. unknown | unknown |  |
| TopScope | sReligiousSchool | 1. unknown | unknown |  |
| TopScope | sResolution | 1. unknown | unknown |  |
| TopScope | sRoadType | 1. unknown | unknown |  |
| TopScope | sScriptableHintDefinition | 1. unknown | unknown |  |
| TopScope | sScriptedPeaceTreatyType | 1. unknown | unknown |  |
| TopScope | sSiege | 1. unknown | unknown |  |
| TopScope | sSituation | 1. unknown | unknown |  |
| TopScope | sSocietalValue | 1. unknown | unknown |  |
| TopScope | sSpecialStatus | 1. unknown | unknown |  |
| TopScope | sSubContinent | 1. unknown | unknown |  |
| TopScope | sSubUnit | 1. unknown | unknown |  |
| TopScope | sSubUnitCategory | 1. unknown | unknown |  |
| TopScope | sSubjectMilitaryStance | 1. unknown | unknown |  |
| TopScope | sSubjectType | 1. unknown | unknown |  |
| TopScope | sTopography | 1. unknown | unknown |  |
| TopScope | sTrade | 1. unknown | unknown |  |
| TopScope | sTrait | 1. unknown | unknown |  |
| TopScope | sUnit | 1. unknown | unknown |  |
| TopScope | sUnitAbility | 1. unknown | unknown |  |
| TopScope | sUnitType | 1. unknown | unknown |  |
| TopScope | sVegetation | 1. unknown | unknown |  |
| TopScope | sWar | 1. unknown | unknown |  |
| TopScope | sWeatherSystem | 1. unknown | unknown |  |
| TopScope | sWorkOfArt | 1. unknown | unknown |  |
| TopScope | sWorkOfArtType | 1. unknown | unknown |  |
| Topography | AccessSelf |  | Topography |  |
| Topography | GetDesc |  | CString |  |
| Topography | GetIcon |  | CString |  |
| Topography | GetName |  | CString |  |
| Topography | GetNameNoUnderline |  | CString |  |
| Topography | GetNameWithNoTooltip |  | CString |  |
| Topography | GetTooltip |  | CString |  |
| Topography | IsDeepOcean |  | bool |  |
| Topography | IsLake |  | bool |  |
| Topography | MakeScope |  | Scope | Jomini Script System |
| Topography | Self |  | Topography |  |
| Trade | AccessSelf |  | Trade |  |
| Trade | GetAssignedMerchantCapacity |  | CFixedPoint |  |
| Trade | GetAssignedMerchantValueInfo |  | CString |  |
| Trade | GetBuy |  | CFixedPoint |  |
| Trade | GetBuyInfo |  | CString |  |
| Trade | GetCapacityMarket |  | unknown |  |
| Trade | GetDesiredGoodsToShip |  | CFixedPoint |  |
| Trade | GetEfficiency |  | CFixedPoint |  |
| Trade | GetFromMarket |  | unknown |  |
| Trade | GetFromPort |  | unknown |  |
| Trade | GetGoods |  | unknown |  |
| Trade | GetMaintenance |  | CFixedPoint |  |
| Trade | GetMaintenanceInfo |  | CString |  |
| Trade | GetMarketNames |  | CString |  |
| Trade | GetMovedWithLabel |  | CString |  |
| Trade | GetName |  | CString |  |
| Trade | GetNameWithNoTooltip |  | CString |  |
| Trade | GetOldUITooltip |  | CString |  |
| Trade | GetOwner |  | unknown |  |
| Trade | GetProfit |  | CFixedPoint |  |
| Trade | GetProfitPerMerchantCapacity |  | CFixedPoint |  |
| Trade | GetProfitTooltip |  | CString |  |
| Trade | GetQuantityOfGoodsActuallyMoved |  | CFixedPoint |  |
| Trade | GetQuantityOfGoodsActuallyMovedOrDesired |  | CFixedPoint |  |
| Trade | GetSell |  | CFixedPoint |  |
| Trade | GetSellInfo |  | CString |  |
| Trade | GetSoundToll |  | unknown |  |
| Trade | GetSoundTollFee |  | CFixedPoint |  |
| Trade | GetToMarket |  | unknown |  |
| Trade | GetToPort |  | unknown |  |
| Trade | GetTradeLockedTooltip |  | CString |  |
| Trade | HasSoundToll |  | bool |  |
| Trade | HasTradeHappened |  | bool |  |
| Trade | IsExport |  | bool |  |
| Trade | IsLocked |  | bool |  |
| Trade | IsValid |  | bool |  |
| Trade | MakeScope |  | Scope | Jomini Script System |
| Trade | Self |  | Trade |  |
| Trade | ToggleLock |  | void |  |
| TradeDetailsLateralView | AccessSelf |  | TradeDetailsLateralView |  |
| TradeDetailsLateralView | GetPlayer |  | unknown |  |
| TradeDetailsLateralView | GetTrade |  | unknown |  |
| TradeDetailsLateralView | GetUIAction |  | unknown |  |
| TradeDetailsLateralView | IsLeftPanel |  | bool |  |
| TradeDetailsLateralView | IsRightPanel |  | bool |  |
| TradeDetailsLateralView | Self |  | TradeDetailsLateralView |  |
| TradeOverview | AccessSelf |  | TradeOverview |  |
| TradeOverview | FilterByMarket | 1. unknown | void |  |
| TradeOverview | GenerateSceneDesc |  | unknown |  |
| TradeOverview | GetCurrentNeeds |  | unknown |  |
| TradeOverview | GetCurrentNeedsSortSearch |  | unknown |  |
| TradeOverview | GetNonZeroMerchantsMarketsAmount |  | int32 |  |
| TradeOverview | GetNonZeroMerchantsMarketsTooltip |  | CString |  |
| TradeOverview | GetPlayer |  | unknown |  |
| TradeOverview | GetSelectedMarket |  | unknown |  |
| TradeOverview | GetTradeCategories |  | unknown |  |
| TradeOverview | GetVisibleMarkets |  | unknown |  |
| TradeOverview | IsLeftPanel |  | bool |  |
| TradeOverview | IsLowerTabMarkets |  | bool |  |
| TradeOverview | IsLowerTabNeeds |  | bool |  |
| TradeOverview | IsLowerTabTrades |  | bool |  |
| TradeOverview | IsMarketFilterEnabled |  | bool |  |
| TradeOverview | IsPossibleTradesSelectMarketOpened | 1. unknown | bool |  |
| TradeOverview | IsRightPanel |  | bool |  |
| TradeOverview | RemoveMarketFilter |  | void |  |
| TradeOverview | Self |  | TradeOverview |  |
| TradeOverview | SetLowerTabToMarkets |  | void |  |
| TradeOverview | SetLowerTabToNeeds |  | void |  |
| TradeOverview | SetLowerTabToTrades |  | void |  |
| TradeOverview | TogglePossibleTradesSelectMarket | 1. unknown | void |  |
| TradePathItem | AccessSelf |  | TradePathItem |  |
| TradePathItem | GetAdjacencyCost |  | CFixedPoint |  |
| TradePathItem | GetLocation |  | unknown |  |
| TradePathItem | HasPreviousLocation |  | bool |  |
| TradePathItem | Self |  | TradePathItem |  |
| TradesWrap | AccessSelf |  | TradesWrap |  |
| TradesWrap | CanShow |  | bool |  |
| TradesWrap | CurrentIndex |  | int32 |  |
| TradesWrap | GetSelectedTrade |  | unknown |  |
| TradesWrap | GetTrades |  | unknown |  |
| TradesWrap | GoNext |  | void |  |
| TradesWrap | GoPrev |  | void |  |
| TradesWrap | HasNext |  | bool |  |
| TradesWrap | HasPrev |  | bool |  |
| TradesWrap | Self |  | TradesWrap |  |
| Trait | AccessSelf |  | Trait |  |
| Trait | GetCategoryTag |  | CString |  |
| Trait | GetDesc |  | CString |  |
| Trait | GetFlavor |  | unknown |  |
| Trait | GetName |  | CString |  |
| Trait | GetNameWithNoTooltip |  | CString |  |
| Trait | GetTooltip |  | CString |  |
| Trait | IsGeneralTrait |  | bool |  |
| Trait | MakeScope |  | Scope | Jomini Script System |
| Trait | Self |  | Trait |  |
| TraitCategory | AccessSelf |  | TraitCategory |  |
| TraitCategory | GetColor |  | CVector4f |  |
| TraitCategory | GetDesc |  | CString |  |
| TraitCategory | GetName |  | CString |  |
| TraitCategory | Self |  | TraitCategory |  |
| TransactionProportion | AccessSelf |  | TransactionProportion |  |
| TransactionProportion | GetEntity |  | unknown |  |
| TransactionProportion | GetProportion |  | CFixedPoint |  |
| TransactionProportion | GetProportionPercentage | 1. unknown | CFixedPoint |  |
| TransactionProportion | Self |  | TransactionProportion |  |
| TransferUnit | AccessSelf |  | TransferUnit |  |
| TransferUnit | CanTransfer |  | bool |  |
| TransferUnit | GetDragDrop |  | CString |  |
| TransferUnit | GetSubUnit |  | unknown |  |
| TransferUnit | GetTarget |  | unknown |  |
| TransferUnit | GetTransferInfo |  | CString |  |
| TransferUnit | Self |  | TransferUnit |  |
| TransferUnit | Transfer |  | void |  |
| TransferUnitType | AccessSelf |  | TransferUnitType |  |
| TransferUnitType | GetAmount |  | int32 |  |
| TransferUnitType | GetAmountTooltip |  | CString |  |
| TransferUnitType | GetCountsCache |  | unknown |  |
| TransferUnitType | GetHalfTransfered |  | void |  |
| TransferUnitType | GetIcon |  | unknown |  |
| TransferUnitType | GetTarget |  | unknown |  |
| TransferUnitType | GetTransferAllText |  | CString |  |
| TransferUnitType | GetTransferHalfText |  | CString |  |
| TransferUnitType | GetTransfered |  | void |  |
| TransferUnitType | GetTransferedAllText |  | CString |  |
| TransferUnitType | GetTransferedHalfText |  | CString |  |
| TransferUnitType | GetType |  | int32 |  |
| TransferUnitType | GetTypeDescription |  | CString |  |
| TransferUnitType | HasCountsCache |  | bool |  |
| TransferUnitType | IsEnabled |  | bool |  |
| TransferUnitType | IsGetTransferedEnabled |  | bool |  |
| TransferUnitType | IsVisible |  | bool |  |
| TransferUnitType | Self |  | TransferUnitType |  |
| TransferUnitType | Transfer |  | void |  |
| TransferUnitType | TransferHalf |  | void |  |
| Tutorial | AccessSelf |  | Tutorial |  |
| Tutorial | CanReplayVoiceover |  | bool |  |
| Tutorial | GetReplayVoiceoverTooltip |  | CString |  |
| Tutorial | GetStepHeaderInfo |  | CString |  |
| Tutorial | GetStepInstructions |  | CString |  |
| Tutorial | GetStepKey |  | CString |  |
| Tutorial | GetStepName |  | CString |  |
| Tutorial | GetStepText |  | CString |  |
| Tutorial | GetTransitionText | 1. unknown | CString |  |
| Tutorial | GetTransitionTooltip | 1. unknown | CString |  |
| Tutorial | GetVar | 1. unknown | CString |  |
| Tutorial | HasStepInstructions |  | bool |  |
| Tutorial | HasTransition | 1. unknown | bool |  |
| Tutorial | HasVar | 1. unknown | bool |  |
| Tutorial | HasVarValue | 1. unknown 2. unknown | bool |  |
| Tutorial | IsTransitionEnabled | 1. unknown | bool |  |
| Tutorial | OnClickTransition | 1. unknown | void |  |
| Tutorial | ReplayVoiceover |  | void |  |
| Tutorial | Self |  | Tutorial |  |
| Tutorial | ShouldBeVisible |  | bool |  |
| Tutorial | VarNotExistOrHasValue | 1. unknown 2. unknown | bool |  |
| TutorialWindow | AccessSelf |  | TutorialWindow |  |
| TutorialWindow | Close |  | void |  |
| TutorialWindow | Self |  | TutorialWindow |  |
| Tweakable | AccessSelf |  | Tweakable |  |
| Tweakable | GetBool |  | bool |  |
| Tweakable | GetColor |  | CVector4f |  |
| Tweakable | GetDescription |  | CString |  |
| Tweakable | GetEnumValueIndex |  | CVector2i |  |
| Tweakable | GetEnumValues |  | unknown |  |
| Tweakable | GetGuiName |  | CString |  |
| Tweakable | GetTweakableId |  | CString |  |
| Tweakable | GetValue |  | CString |  |
| Tweakable | OnValueEdited |  | void |  |
| Tweakable | Self |  | Tweakable |  |
| Tweakable | SetEnumValueIndex |  | void |  |
| TweakableCategory | AccessSelf |  | TweakableCategory |  |
| TweakableCategory | GetMargin |  | int32 |  |
| TweakableCategory | GetName |  | CString |  |
| TweakableCategory | IsExpanded |  | bool |  |
| TweakableCategory | Self |  | TweakableCategory |  |
| TweakableCategory | ToggleExpanded |  | void |  |
| TweakableCategory | ToggleTreeExpanded |  | void |  |
| TweakableUiEntry | AccessSelf |  | TweakableUiEntry |  |
| TweakableUiEntry | GetFriendlyName |  | CString |  |
| TweakableUiEntry | GetMargin |  | int32 |  |
| TweakableUiEntry | Self |  | TweakableUiEntry |  |
| TweakablesSnapshot | AccessSelf |  | TweakablesSnapshot |  |
| TweakablesSnapshot | Name |  | CString |  |
| TweakablesSnapshot | Self |  | TweakablesSnapshot |  |
| Tweaker | AccessSelf |  | Tweaker |  |
| Tweaker | CanResetTweakable | 1. unknown | bool |  |
| Tweaker | ClearSearchString |  | void |  |
| Tweaker | GetSearchString |  | CString |  |
| Tweaker | GetSelectedCategory |  | CString |  |
| Tweaker | GetTweakableOriginalValue | 1. unknown | CString |  |
| Tweaker | GetTweakableValueColor | 1. unknown | CVector4f |  |
| Tweaker | OnOptionsPressed |  | void |  |
| Tweaker | OriginalSnapshotValid |  | bool |  |
| Tweaker | RebuildTree |  | void |  |
| Tweaker | RemoveSnapshot | 1. unknown | void |  |
| Tweaker | RemoveSnapshotEnabled | 1. unknown | bool |  |
| Tweaker | RenameSnapshot | 1. unknown | void |  |
| Tweaker | ResetTweakable | 1. unknown | void |  |
| Tweaker | RootCategories |  | unknown |  |
| Tweaker | SelectedSnapshot |  | CString |  |
| Tweaker | Self |  | Tweaker |  |
| Tweaker | SetSearchString |  | void |  |
| Tweaker | SnapshotVisible | 1. unknown | bool |  |
| Tweaker | TakeNewSnapshot |  | void |  |
| Tweaker | ToggleSelectedCategory | 1. unknown | void |  |
| Tweaker | ToggleSelectedSnapshot | 1. unknown | void |  |
| Tweaker | UpdateSnapshot | 1. unknown | void |  |
| Tweaker | UpdateSnapshotEnabled | 1. unknown | bool |  |
| Type | AccessSelf |  | Type |  |
| Type | Delete |  | void |  |
| Type | GetAssetName |  | CString |  |
| Type | GetEntityIndex |  | CVector2i |  |
| Type | GetInstanceCount |  | int32 |  |
| Type | GetKey |  | CString |  |
| Type | GetLayer |  | CString |  |
| Type | GetLayerIndex |  | CVector2i |  |
| Type | GetMeshIndex |  | CVector2i |  |
| Type | GetTypeIndex |  | CVector2i |  |
| Type | IsHidden |  | bool |  |
| Type | IsLocked |  | bool |  |
| Type | IsSelected |  | bool |  |
| Type | Rename |  | unknown |  |
| Type | Self |  | Type |  |
| Type | SetClampToWaterLevel | 1. unknown | void |  |
| Type | SetEntityFromIndex |  | void |  |
| Type | SetLayerFromIndex |  | void |  |
| Type | SetMeshFromIndex |  | void |  |
| Type | SetRenderUnderwater | 1. unknown | void |  |
| Type | SetSchematicFromIndex |  | void |  |
| Type | SetTypeFromIndex |  | void |  |
| Type | ShouldClampToWaterLevel |  | bool |  |
| Type | ShouldRenderUnderwater |  | bool |  |
| UIAction | AccessSelf |  | UIAction |  |
| UIAction | GetAcceptance |  | CString |  |
| UIAction | GetConditions |  | CString |  |
| UIAction | GetDescription |  | CString |  |
| UIAction | GetEffects |  | CString |  |
| UIAction | GetLeftClickAndConfirmCost |  | CString |  |
| UIAction | GetLeftClickAndConfirmName |  | CString |  |
| UIAction | GetLeftClickAndConfirmTooltip |  | CString |  |
| UIAction | GetLeftClickCost |  | CString |  |
| UIAction | GetLeftClickName |  | CString |  |
| UIAction | GetLeftClickTooltip |  | CString |  |
| UIAction | GetLeftMouseDownPercentage |  | float |  |
| UIAction | GetLeftMouseDownPercentageLeft |  | float |  |
| UIAction | GetMiddleClickAndConfirmCost |  | CString |  |
| UIAction | GetMiddleClickAndConfirmName |  | CString |  |
| UIAction | GetMiddleClickAndConfirmTooltip |  | CString |  |
| UIAction | GetMiddleClickCost |  | CString |  |
| UIAction | GetMiddleClickName |  | CString |  |
| UIAction | GetMiddleClickTooltip |  | CString |  |
| UIAction | GetMiddleMouseDownPercentage |  | float |  |
| UIAction | GetMiddleMouseDownPercentageLeft |  | float |  |
| UIAction | GetRightClickAndConfirmCost |  | CString |  |
| UIAction | GetRightClickAndConfirmName |  | CString |  |
| UIAction | GetRightClickAndConfirmTooltip |  | CString |  |
| UIAction | GetRightClickCost |  | CString |  |
| UIAction | GetRightClickName |  | CString |  |
| UIAction | GetRightClickTooltip |  | CString |  |
| UIAction | GetRightMouseDownPercentage |  | float |  |
| UIAction | GetRightMouseDownPercentageLeft |  | float |  |
| UIAction | GetTitle |  | CString |  |
| UIAction | HasAnyClickModifierAvailable |  | bool |  |
| UIAction | HasClickModifierAvailable | 1. unknown | bool |  |
| UIAction | IsClickModifierEnabled | 1. unknown | bool |  |
| UIAction | IsEnabled |  | bool |  |
| UIAction | IsLeftClickAndConfirmEnabled |  | bool |  |
| UIAction | IsLeftClickAndConfirmVisible |  | bool |  |
| UIAction | IsLeftClickEnabled |  | bool |  |
| UIAction | IsLeftClickModifierEnabled | 1. unknown | bool |  |
| UIAction | IsLeftClickVisible |  | bool |  |
| UIAction | IsMiddleClickAndConfirmEnabled |  | bool |  |
| UIAction | IsMiddleClickAndConfirmVisible |  | bool |  |
| UIAction | IsMiddleClickEnabled |  | bool |  |
| UIAction | IsMiddleClickVisible |  | bool |  |
| UIAction | IsRightClickAndConfirmEnabled |  | bool |  |
| UIAction | IsRightClickAndConfirmVisible |  | bool |  |
| UIAction | IsRightClickEnabled |  | bool |  |
| UIAction | IsRightClickModifierEnabled | 1. unknown | bool |  |
| UIAction | IsRightClickVisible |  | bool |  |
| UIAction | IsVisible |  | bool |  |
| UIAction | OnLeftClick |  | void |  |
| UIAction | OnLeftMouseDown |  | void |  |
| UIAction | OnLeftMouseUp |  | void |  |
| UIAction | OnMiddleClick |  | void |  |
| UIAction | OnMiddleMouseDown |  | void |  |
| UIAction | OnMiddleMouseUp |  | void |  |
| UIAction | OnRightClick |  | void |  |
| UIAction | OnRightMouseDown |  | void |  |
| UIAction | OnRightMouseUp |  | void |  |
| UIAction | Self |  | UIAction |  |
| UIActionProvider | AccessSelf |  | UIActionProvider |  |
| UIActionProvider | GetAcceptance |  | CString |  |
| UIActionProvider | GetConditions |  | CString |  |
| UIActionProvider | GetConfirmation |  | CString |  |
| UIActionProvider | GetDescription |  | CString |  |
| UIActionProvider | GetEffects |  | CString |  |
| UIActionProvider | GetLeftClickAcceptance |  | CString |  |
| UIActionProvider | GetLeftClickAndConfirmAcceptance |  | CString |  |
| UIActionProvider | GetLeftClickAndConfirmConditions |  | CString |  |
| UIActionProvider | GetLeftClickAndConfirmCost |  | CString |  |
| UIActionProvider | GetLeftClickAndConfirmDescription |  | CString |  |
| UIActionProvider | GetLeftClickAndConfirmEffects |  | CString |  |
| UIActionProvider | GetLeftClickAndConfirmTitle |  | CString |  |
| UIActionProvider | GetLeftClickConditions |  | CString |  |
| UIActionProvider | GetLeftClickCost |  | CString |  |
| UIActionProvider | GetLeftClickDescription |  | CString |  |
| UIActionProvider | GetLeftClickEffects |  | CString |  |
| UIActionProvider | GetLeftClickTitle |  | CString |  |
| UIActionProvider | GetRightClickAcceptance |  | CString |  |
| UIActionProvider | GetRightClickAndConfirmAcceptance |  | CString |  |
| UIActionProvider | GetRightClickAndConfirmConditions |  | CString |  |
| UIActionProvider | GetRightClickAndConfirmCost |  | CString |  |
| UIActionProvider | GetRightClickAndConfirmDescription |  | CString |  |
| UIActionProvider | GetRightClickAndConfirmEffects |  | CString |  |
| UIActionProvider | GetRightClickAndConfirmTitle |  | CString |  |
| UIActionProvider | GetRightClickConditions |  | CString |  |
| UIActionProvider | GetRightClickCost |  | CString |  |
| UIActionProvider | GetRightClickDescription |  | CString |  |
| UIActionProvider | GetRightClickEffects |  | CString |  |
| UIActionProvider | GetRightClickTitle |  | CString |  |
| UIActionProvider | GetTitle |  | CString |  |
| UIActionProvider | IsEnabled |  | bool |  |
| UIActionProvider | IsLeftClickAndConfirmEnabled |  | bool |  |
| UIActionProvider | IsLeftClickAndConfirmVisible |  | bool |  |
| UIActionProvider | IsLeftClickEnabled |  | bool |  |
| UIActionProvider | IsLeftClickVisible |  | bool |  |
| UIActionProvider | IsRightClickAndConfirmEnabled |  | bool |  |
| UIActionProvider | IsRightClickAndConfirmVisible |  | bool |  |
| UIActionProvider | IsRightClickEnabled |  | bool |  |
| UIActionProvider | IsRightClickVisible |  | bool |  |
| UIActionProvider | IsVisible |  | bool |  |
| UIActionProvider | OnLeftClick |  | void |  |
| UIActionProvider | OnLeftClickAndConfirm |  | void |  |
| UIActionProvider | OnRightClick |  | void |  |
| UIActionProvider | OnRightClickAndConfirm |  | void |  |
| UIActionProvider | Self |  | UIActionProvider |  |
| UIClickAction | AccessSelf |  | UIClickAction |  |
| UIClickAction | GetConditions |  | CString |  |
| UIClickAction | GetCost |  | CString |  |
| UIClickAction | GetDescription |  | CString |  |
| UIClickAction | GetEffects |  | CString |  |
| UIClickAction | GetName |  | CString |  |
| UIClickAction | IsEnabled |  | bool |  |
| UIClickAction | IsVisible |  | bool |  |
| UIClickAction | Self |  | UIClickAction |  |
| UIMessage | AccessSelf |  | UIMessage |  |
| UIMessage | GetBattleResult |  | unknown |  |
| UIMessage | GetBgCategoryIcon |  | unknown |  |
| UIMessage | GetCategoryIcon |  | unknown |  |
| UIMessage | GetCharacter |  | unknown |  |
| UIMessage | GetCombat |  | unknown |  |
| UIMessage | GetContentIcon |  | unknown |  |
| UIMessage | GetFirstTag |  | unknown |  |
| UIMessage | GetGoods |  | unknown |  |
| UIMessage | GetInstitution |  | unknown |  |
| UIMessage | GetInternationalOrganization |  | unknown |  |
| UIMessage | GetLocations |  | unknown |  |
| UIMessage | GetLog |  | CString |  |
| UIMessage | GetLogDate |  | CString |  |
| UIMessage | GetMessage |  | unknown |  |
| UIMessage | GetMissionDefinition |  | unknown |  |
| UIMessage | GetMissionTaskDefinition |  | unknown |  |
| UIMessage | GetReligion |  | unknown |  |
| UIMessage | GetSecondaryTag |  | unknown |  |
| UIMessage | GetSiege |  | unknown |  |
| UIMessage | GetSituation |  | unknown |  |
| UIMessage | GetTooltip |  | CString |  |
| UIMessage | GetUnit |  | unknown |  |
| UIMessage | HasBattleResult |  | bool |  |
| UIMessage | HasCharacter |  | bool |  |
| UIMessage | HasCombat |  | bool |  |
| UIMessage | HasContentIcon |  | bool |  |
| UIMessage | HasFirstTag |  | bool |  |
| UIMessage | HasGoods |  | bool |  |
| UIMessage | HasInstitution |  | bool |  |
| UIMessage | HasInternationalOrganization |  | bool |  |
| UIMessage | HasLocation |  | bool |  |
| UIMessage | HasMission |  | bool |  |
| UIMessage | HasMissionTask |  | bool |  |
| UIMessage | HasReligion |  | bool |  |
| UIMessage | HasSecondaryTag |  | bool |  |
| UIMessage | HasSiege |  | bool |  |
| UIMessage | HasSituation |  | bool |  |
| UIMessage | HasUnit |  | bool |  |
| UIMessage | Self |  | UIMessage |  |
| UIVariables | AccessSelf |  | UIVariables |  |
| UIVariables | Clear | 1. unknown | void |  |
| UIVariables | ClearAll |  | void |  |
| UIVariables | ClearIf | 1. unknown 2. unknown | void |  |
| UIVariables | Exists | 1. unknown | bool |  |
| UIVariables | Get | 1. unknown | CString |  |
| UIVariables | GetPinTooltip |  | CString |  |
| UIVariables | HasValue | 1. unknown 2. unknown | bool |  |
| UIVariables | IsVisible |  | bool |  |
| UIVariables | NotExistOrHasValue | 1. unknown 2. unknown | bool |  |
| UIVariables | Self |  | UIVariables |  |
| UIVariables | Set | 1. unknown 2. unknown | void |  |
| UIVariables | SetIsVisible |  | void |  |
| UIVariables | SetOrToggle | 1. unknown 2. unknown | void |  |
| UIVariables | Toggle | 1. unknown | bool |  |
| UVSelector | AccessSelf |  | UVSelector |  |
| UVSelector | GetSelectorPosition | 1. unknown | CVector2f |  |
| UVSelector | GetTextureName |  | unknown |  |
| UVSelector | OnClick | 1. unknown | void |  |
| UVSelector | Self |  | UVSelector |  |
| UndoHistoryViewerClient | AccessSelf |  | UndoHistoryViewerClient |  |
| UndoHistoryViewerClient | Self |  | UndoHistoryViewerClient |  |
| UndoHistoryViewerClient | Toggle |  | void |  |
| UndoStack | AccessSelf |  | UndoStack |  |
| UndoStack | Clear |  | void |  |
| UndoStack | IsClearable |  | bool |  |
| UndoStack | IsRedoable |  | bool |  |
| UndoStack | IsUndoable |  | bool |  |
| UndoStack | Redo |  | void |  |
| UndoStack | Self |  | UndoStack |  |
| UndoStack | Undo |  | void |  |
| UneditableString | AccessSelf |  | UneditableString |  |
| UneditableString | Self |  | UneditableString |  |
| UniqueContentCategory | AccessSelf |  | UniqueContentCategory |  |
| UniqueContentCategory | GetIcon |  | unknown |  |
| UniqueContentCategory | GetName |  | CString |  |
| UniqueContentCategory | GetUniqueContentItems |  | unknown |  |
| UniqueContentCategory | Self |  | UniqueContentCategory |  |
| UniqueContentDescription | AccessSelf |  | UniqueContentDescription |  |
| UniqueContentDescription | GetAmountUniqueContentCountryType |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentCulture |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentCultureAndCultureGroup |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentCultureGroup |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentFlavor |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentGovernmentType |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentReligion |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentReligionAndReligionGroup |  | int32 |  |
| UniqueContentDescription | GetAmountUniqueContentReligionGroup |  | int32 |  |
| UniqueContentDescription | GetEventsAmountUniqueContent |  | int32 |  |
| UniqueContentDescription | GetEventsUniqueContentDesc |  | CString |  |
| UniqueContentDescription | GetTotalAmountUniqueContent |  | int32 |  |
| UniqueContentDescription | GetTotalUniqueContentDesc |  | CString |  |
| UniqueContentDescription | GetUniqueContentCountryTypeItems |  | unknown |  |
| UniqueContentDescription | GetUniqueContentCountryTypeLobbyDesc |  | CString |  |
| UniqueContentDescription | GetUniqueContentCultureGroupItems |  | unknown |  |
| UniqueContentDescription | GetUniqueContentCultureGroupLobbyDesc |  | CString |  |
| UniqueContentDescription | GetUniqueContentCultureItems |  | unknown |  |
| UniqueContentDescription | GetUniqueContentCultureLobbyDesc |  | CString |  |
| UniqueContentDescription | GetUniqueContentFlavorLobbyDesc |  | CString |  |
| UniqueContentDescription | GetUniqueContentGovernmentTypeItems |  | unknown |  |
| UniqueContentDescription | GetUniqueContentGovernmentTypeLobbyDesc |  | CString |  |
| UniqueContentDescription | GetUniqueContentReligionGroupItems |  | unknown |  |
| UniqueContentDescription | GetUniqueContentReligionGroupLobbyDesc |  | CString |  |
| UniqueContentDescription | GetUniqueContentReligionItems |  | unknown |  |
| UniqueContentDescription | GetUniqueContentReligionLobbyDesc |  | CString |  |
| UniqueContentDescription | Self |  | UniqueContentDescription |  |
| UniqueContentItem | AccessSelf |  | UniqueContentItem |  |
| UniqueContentItem | GetAdvanceDefinition |  | unknown |  |
| UniqueContentItem | GetAge |  | unknown |  |
| UniqueContentItem | GetBuildingType |  | unknown |  |
| UniqueContentItem | GetCabinetAction |  | unknown |  |
| UniqueContentItem | GetCountryInteraction |  | unknown |  |
| UniqueContentItem | GetEstatePrivilege |  | unknown |  |
| UniqueContentItem | GetGovernmentReform |  | unknown |  |
| UniqueContentItem | GetLaw |  | unknown |  |
| UniqueContentItem | GetLevySetup |  | unknown |  |
| UniqueContentItem | GetLink |  | CString |  |
| UniqueContentItem | GetName |  | CString |  |
| UniqueContentItem | GetSubUnitDef |  | unknown |  |
| UniqueContentItem | HasAge |  | bool |  |
| UniqueContentItem | IsAdvanceDefinition |  | bool |  |
| UniqueContentItem | IsBuildingType |  | bool |  |
| UniqueContentItem | IsCabinetAction |  | bool |  |
| UniqueContentItem | IsCountryInteraction |  | bool |  |
| UniqueContentItem | IsEstatePrivilege |  | bool |  |
| UniqueContentItem | IsGovernmentReform |  | bool |  |
| UniqueContentItem | IsLaw |  | bool |  |
| UniqueContentItem | IsLevySetup |  | bool |  |
| UniqueContentItem | IsSubUnitDef |  | bool |  |
| UniqueContentItem | Self |  | UniqueContentItem |  |
| UniqueStatItem | AccessSelf |  | UniqueStatItem |  |
| UniqueStatItem | GetDesc |  | CString |  |
| UniqueStatItem | GetFirst |  | CString |  |
| UniqueStatItem | GetIcon |  | unknown |  |
| UniqueStatItem | GetImpact |  | CString |  |
| UniqueStatItem | GetName |  | CString |  |
| UniqueStatItem | Self |  | UniqueStatItem |  |
| Unit | AccessSelf |  | Unit |  |
| Unit | CanDisembark |  | bool |  |
| Unit | CanEmbark |  | bool |  |
| Unit | CanGetFoodFromLocation |  | bool |  |
| Unit | CanRemoveCommander |  | bool |  |
| Unit | CanRemoveCommanderDescription |  | CString |  |
| Unit | CanReplaceLeader |  | bool |  |
| Unit | CanReplaceLeaderInfo |  | CString |  |
| Unit | CanSelectCommander |  | bool |  |
| Unit | CanSelectCommanderDescription |  | CString |  |
| Unit | CanShowCommander |  | bool |  |
| Unit | CanShowCommanderDescription |  | CString |  |
| Unit | Custom | 1. unknown | CString |  |
| Unit | Disembark |  | void |  |
| Unit | GetAccumulatedUnitStat | 1. unknown | CString |  |
| Unit | GetAccumulatedUnitStatInfo | 1. unknown | CString |  |
| Unit | GetActivity |  | unknown |  |
| Unit | GetArtilleryBonus |  | CFixedPoint |  |
| Unit | GetArtilleryBonusTooltip |  | CString |  |
| Unit | GetAttrition |  | CFixedPoint |  |
| Unit | GetAttritionMoraleCost |  | CFixedPoint |  |
| Unit | GetAttritionMoraleCostInfo |  | CString |  |
| Unit | GetAttritionTooltip |  | CString |  |
| Unit | GetAvailableTransportCapacity |  | CString |  |
| Unit | GetBlockadedInfo |  | CString |  |
| Unit | GetBox | 1. unknown | unknown |  |
| Unit | GetCanDisembarkTooltip |  | CString |  |
| Unit | GetCanEmbarkTooltip |  | CString |  |
| Unit | GetCategoryTag |  | CString |  |
| Unit | GetCombat |  | unknown |  |
| Unit | GetCommander |  | unknown |  |
| Unit | GetCountry |  | unknown |  |
| Unit | GetDailyFoodBalance |  | CFixedPoint |  |
| Unit | GetDetailsInfo |  | CString |  |
| Unit | GetDiseasePresence | 1. unknown | CFixedPoint |  |
| Unit | GetDiseaseResistance | 1. unknown | CFixedPoint |  |
| Unit | GetDiseaseTooltip |  | CString |  |
| Unit | GetEmbarkedArmiesAmount |  | int32 |  |
| Unit | GetEmbarkedUnits |  | unknown |  |
| Unit | GetExileTooltip |  | CString |  |
| Unit | GetExperience |  | float |  |
| Unit | GetExperienceTooltip |  | CString |  |
| Unit | GetFirstUnitOnBoard |  | unknown |  |
| Unit | GetFoodConsumption |  | CFixedPoint |  |
| Unit | GetFoodConsumptionInfo |  | CString |  |
| Unit | GetFoodPercentage |  | float |  |
| Unit | GetFoodSourceInfo |  | CString |  |
| Unit | GetFoodSourceInfoLabel |  | CString |  |
| Unit | GetFoodSupply |  | CFixedPoint |  |
| Unit | GetFoodSupplyInformation |  | CString |  |
| Unit | GetFoodSupplyMonthsInfo |  | CString |  |
| Unit | GetFoodSupplyTitle |  | CString |  |
| Unit | GetIsVisibleToAiTooltip |  | CString |  |
| Unit | GetLastDaysFoodIncome |  | CFixedPoint |  |
| Unit | GetLoadedOn |  | unknown |  |
| Unit | GetLocalFoodAccessInfo |  | CString |  |
| Unit | GetLocation |  | unknown |  |
| Unit | GetMaxFrontage |  | CFixedPoint |  |
| Unit | GetMaxFrontageLabel |  | CString |  |
| Unit | GetMaxMorale |  | CFixedPoint |  |
| Unit | GetMaxMoraleFloat |  | float |  |
| Unit | GetMaxMoraleInfo |  | CString |  |
| Unit | GetMaxSupplyDistanceCost |  | CFixedPoint |  |
| Unit | GetMaxSupplyDistanceCostInfo |  | CString |  |
| Unit | GetMaxTransportCapacity |  | CString |  |
| Unit | GetMaximumFoodStorage |  | CFixedPoint |  |
| Unit | GetMonthsOfFood |  | int32 |  |
| Unit | GetMorale |  | CFixedPoint |  |
| Unit | GetMoraleFloat |  | float |  |
| Unit | GetMoralePercent |  | CFixedPoint |  |
| Unit | GetMoraleRecovery |  | CFixedPoint |  |
| Unit | GetMoraleRecoveryInfo |  | CString |  |
| Unit | GetMoraleRecoveryPercent |  | CFixedPoint |  |
| Unit | GetMoraleTooltip |  | CString |  |
| Unit | GetMovementExtraInfo |  | CString |  |
| Unit | GetMovementInfo |  | CString |  |
| Unit | GetMovementMoraleCost |  | CFixedPoint |  |
| Unit | GetMovementMoraleCostInfo |  | CString |  |
| Unit | GetName |  | CString |  |
| Unit | GetNameWithNoTooltip |  | CString |  |
| Unit | GetNavalRepairSpeedInfo |  | CString |  |
| Unit | GetNumMercenaries |  | int32 |  |
| Unit | GetNumSubUnits |  | int32 |  |
| Unit | GetNumSubunitsWithDiseasePresence | 1. unknown | int32 |  |
| Unit | GetNumSubunitsWithDiseaseResistance | 1. unknown | int32 |  |
| Unit | GetObjectiveGroup |  | unknown |  |
| Unit | GetOptimalFrontageUsageInfo |  | CString |  |
| Unit | GetPrisonerStrength |  | CFixedPoint |  |
| Unit | GetQuickUnitActions |  | unknown |  |
| Unit | GetRegimentsInfo |  | CString |  |
| Unit | GetReinforceSpeedInfo |  | CString |  |
| Unit | GetReinforcementRateTooltip |  | CString |  |
| Unit | GetSiege |  | unknown |  |
| Unit | GetSizeImpactOnMovementSpeed | 1. unknown | CFixedPoint |  |
| Unit | GetSizeImpactOnMovementSpeedInfo |  | CString |  |
| Unit | GetStatus |  | CString |  |
| Unit | GetStatusTexture |  | unknown |  |
| Unit | GetStrengthTooltip |  | CString |  |
| Unit | GetSubUnitCounts |  | unknown |  |
| Unit | GetSubUnits |  | unknown |  |
| Unit | GetSupplyDetails |  | CString |  |
| Unit | GetSupplyDistanceCost |  | CFixedPoint |  |
| Unit | GetSupplyInfo |  | CString |  |
| Unit | GetSupplySource |  | unknown |  |
| Unit | GetSupplyWeightTooltip |  | CString |  |
| Unit | GetTimedModifierOwner |  | unknown |  |
| Unit | GetTimedModifiers |  | unknown |  |
| Unit | GetTooltip |  | CString |  |
| Unit | GetTotalAttritionWeight |  | CFixedPoint |  |
| Unit | GetTransportCost |  | CString |  |
| Unit | GetTransportTooltip |  | CString |  |
| Unit | GetUITooltip |  | CString |  |
| Unit | GetUnit |  | unknown |  |
| Unit | GetUnitReinforceDetails |  | CString |  |
| Unit | GetUnitTableTooltip |  | CString |  |
| Unit | GetUsedTransportCapacity |  | CString |  |
| Unit | GetUsedTransportCapacityPercentage |  | float |  |
| Unit | GetUsedTransportCapacityValue |  | int32 |  |
| Unit | GetVisualStrength |  | CString |  |
| Unit | GetVisualStrengthShort |  | CString |  |
| Unit | GetVisualSubunit |  | unknown |  |
| Unit | HasDiseaseResistance |  | bool |  |
| Unit | HasLeader |  | bool |  |
| Unit | HasMaximumMaintenance |  | bool |  |
| Unit | HasOnlyPrisoners |  | bool |  |
| Unit | HasPlayerEditedName |  | bool |  |
| Unit | HasPrisoners |  | bool |  |
| Unit | HasSpecificDisease | 1. unknown | bool |  |
| Unit | HasSpecificDiseaseResistance | 1. unknown | bool |  |
| Unit | HasSupplySource |  | bool |  |
| Unit | HaveLocalFoodAccess |  | bool |  |
| Unit | InCombat |  | bool |  |
| Unit | InSiege |  | bool |  |
| Unit | IsArmy |  | bool |  |
| Unit | IsAutomated |  | bool |  |
| Unit | IsBlockading |  | bool |  |
| Unit | IsEmpty |  | bool |  |
| Unit | IsExiled |  | bool |  |
| Unit | IsGainingExperience |  | bool |  |
| Unit | IsGainingFood |  | bool |  |
| Unit | IsInTransport |  | bool |  |
| Unit | IsLargeEnoughForMovementSpeedImpact |  | bool |  |
| Unit | IsMoraleDecreasingDueToAttrition |  | bool |  |
| Unit | IsMoraleDecreasingDueToMovement |  | bool |  |
| Unit | IsMoraleRecoverying |  | bool |  |
| Unit | IsMovementLocked |  | bool |  |
| Unit | IsMoving |  | bool |  |
| Unit | IsNamed |  | bool |  |
| Unit | IsNavy |  | bool |  |
| Unit | IsNavyGatherOrDistribute |  | bool |  |
| Unit | IsOnlyLevy |  | bool |  |
| Unit | IsRetreating |  | bool |  |
| Unit | IsStuckInIce |  | bool |  |
| Unit | IsValid |  | bool |  |
| Unit | IsVisibleToAi |  | bool |  |
| Unit | MakeScope |  | Scope | Jomini Script System |
| Unit | RemoveCommander |  | void |  |
| Unit | SelectCommander |  | void |  |
| Unit | Self |  | Unit |  |
| Unit | ShowCommander |  | void |  |
| Unit | ShowReinforceDetails |  | bool |  |
| UnitAbility | AccessSelf |  | UnitAbility |  |
| UnitAbility | GetHistoricalFlavorText |  | CString |  |
| UnitAbility | GetName |  | CString |  |
| UnitAbility | GetNameWithNoTooltip |  | CString |  |
| UnitAbility | GetTooltip |  | CString |  |
| UnitAbility | MakeScope |  | Scope | Jomini Script System |
| UnitAbility | Self |  | UnitAbility |  |
| UnitActionItem | AccessSelf |  | UnitActionItem |  |
| UnitActionItem | CanHoldLeftClick |  | bool |  |
| UnitActionItem | CanHoldRightClick |  | bool |  |
| UnitActionItem | CanSingleLeftClick |  | bool |  |
| UnitActionItem | CanSingleRightClick |  | bool |  |
| UnitActionItem | GetAbility |  | unknown |  |
| UnitActionItem | GetFlavorText |  | CString |  |
| UnitActionItem | GetInfo |  | CString |  |
| UnitActionItem | GetKey |  | CString |  |
| UnitActionItem | GetLeftClickDescription |  | CString |  |
| UnitActionItem | GetName |  | CString |  |
| UnitActionItem | GetNotTexture |  | unknown |  |
| UnitActionItem | GetPriority |  | int32 |  |
| UnitActionItem | GetRightClickDescription |  | CString |  |
| UnitActionItem | GetSecondaryName |  | CString |  |
| UnitActionItem | GetShiftLeftName |  | CString |  |
| UnitActionItem | GetShortcut |  | CString |  |
| UnitActionItem | GetTexture |  | unknown |  |
| UnitActionItem | GetTitle |  | CString |  |
| UnitActionItem | GetTooltip |  | CString |  |
| UnitActionItem | HasHoldLeftAction |  | bool |  |
| UnitActionItem | HasHoldRightAction |  | bool |  |
| UnitActionItem | HasShiftLeftClick |  | bool |  |
| UnitActionItem | HasSingleLeftAction |  | bool |  |
| UnitActionItem | HasSingleRightAction |  | bool |  |
| UnitActionItem | HasSpecialTooltipInfo |  | bool |  |
| UnitActionItem | HoldLeftClick |  | void |  |
| UnitActionItem | HoldRightClick |  | void |  |
| UnitActionItem | IsActive |  | bool |  |
| UnitActionItem | IsCategory | 1. unknown | bool |  |
| UnitActionItem | IsEnabled |  | bool |  |
| UnitActionItem | IsPinnedByDefault |  | bool |  |
| UnitActionItem | IsToggleAction |  | bool |  |
| UnitActionItem | Self |  | UnitActionItem |  |
| UnitActionItem | SingleLeftClick |  | void |  |
| UnitActionItem | SingleRightClick |  | void |  |
| UnitActivity | AccessSelf |  | UnitActivity |  |
| UnitActivity | GetActivityDesc |  | CString |  |
| UnitActivity | Self |  | UnitActivity |  |
| UnitDetailsView | AccessSelf |  | UnitDetailsView |  |
| UnitDetailsView | GetUnit |  | unknown |  |
| UnitDetailsView | OnClose |  | void |  |
| UnitDetailsView | Self |  | UnitDetailsView |  |
| UnitGlue | AccessSelf |  | UnitGlue |  |
| UnitGlue | GetSelectAction |  | unknown |  |
| UnitGlue | IsSelected |  | bool |  |
| UnitGlue | Self |  | UnitGlue |  |
| UnitItem | AccessSelf |  | UnitItem |  |
| UnitItem | AccessUnit |  | unknown |  |
| UnitItem | GetUICommanderAction |  | unknown |  |
| UnitItem | GetUIHeaderAction |  | unknown |  |
| UnitItem | GetUnit |  | unknown |  |
| UnitItem | IsBeingEdited |  | bool |  |
| UnitItem | OnUnitNameEdited | 1. unknown | void |  |
| UnitItem | RenameUnit | 1. unknown | void |  |
| UnitItem | Self |  | UnitItem |  |
| UnitItem | StopEditing |  | void |  |
| UnitMarker | AccessSelf |  | UnitMarker |  |
| UnitMarker | GetArmyCombatStrength |  | CFixedPoint |  |
| UnitMarker | GetCompassAngle |  | float |  |
| UnitMarker | GetLabel |  | CString |  |
| UnitMarker | GetLeadingUnit |  | unknown |  |
| UnitMarker | GetSiege |  | unknown |  |
| UnitMarker | GetSubUnitCounts |  | unknown |  |
| UnitMarker | GetUnits |  | unknown |  |
| UnitMarker | HasSiege |  | bool |  |
| UnitMarker | IsSingleUnit |  | bool |  |
| UnitMarker | Self |  | UnitMarker |  |
| UnitMarker | ShouldBeShownFullWidth |  | bool |  |
| UnitMarker | ShouldBeShownShortWidth |  | bool |  |
| UnitMarker | ShouldBeShownSmallSize |  | bool |  |
| UnitMarker | ShouldBeShownVerySmallSize |  | bool |  |
| UnitMarker | ShowUnitGfx |  | bool |  |
| UnitMarkerItem | AccessSelf |  | UnitMarkerItem |  |
| UnitMarkerItem | GetActiveAbilityIcon |  | unknown |  |
| UnitMarkerItem | GetActiveAbilityTooltip |  | CString |  |
| UnitMarkerItem | GetActivityTooltip |  | CString |  |
| UnitMarkerItem | GetAllUnits |  | unknown |  |
| UnitMarkerItem | GetAttritionHistoryTooltip |  | CString |  |
| UnitMarkerItem | GetAttritionTooltip |  | CString |  |
| UnitMarkerItem | GetAverageMoralePercent |  | float |  |
| UnitMarkerItem | GetBackgroundFrame |  | int32 |  |
| UnitMarkerItem | GetBlockadedPercent |  | CFixedPoint |  |
| UnitMarkerItem | GetContextMenuTitle |  | CString |  |
| UnitMarkerItem | GetCountry |  | unknown |  |
| UnitMarkerItem | GetFlagTexture | 1. unknown 2. unknown | unknown |  |
| UnitMarkerItem | GetFlagTextureFrame | 1. unknown 2. unknown | int32 |  |
| UnitMarkerItem | GetHiddenTooltip |  | CString |  |
| UnitMarkerItem | GetLabel |  | CString |  |
| UnitMarkerItem | GetLeaderFrame |  | int32 |  |
| UnitMarkerItem | GetLosingFoodTT |  | CString |  |
| UnitMarkerItem | GetMilitaryObjectiveGroup |  | unknown |  |
| UnitMarkerItem | GetQuickUnitActions |  | unknown |  |
| UnitMarkerItem | GetRegainingFoodTT |  | CString |  |
| UnitMarkerItem | GetStuckInIceTooltip |  | CString |  |
| UnitMarkerItem | GetTooltip |  | CString |  |
| UnitMarkerItem | GetTotalUnits |  | int32 |  |
| UnitMarkerItem | GetTransportedTroops |  | CString |  |
| UnitMarkerItem | GetUnit |  | unknown |  |
| UnitMarkerItem | HasAttritionHistory |  | bool |  |
| UnitMarkerItem | HasDisease |  | bool |  |
| UnitMarkerItem | HasLeaderFrame |  | bool |  |
| UnitMarkerItem | HasVisibleObjectiveGroup |  | bool |  |
| UnitMarkerItem | IsClickable |  | bool |  |
| UnitMarkerItem | IsExiled |  | bool |  |
| UnitMarkerItem | IsHiddenFromLand |  | bool |  |
| UnitMarkerItem | IsHiddenFromLandAndSea |  | bool |  |
| UnitMarkerItem | IsHiddenFromLandOnly |  | bool |  |
| UnitMarkerItem | IsHiddenFromSea |  | bool |  |
| UnitMarkerItem | IsHiddenFromSeaOnly |  | bool |  |
| UnitMarkerItem | IsHighlighted |  | bool |  |
| UnitMarkerItem | IsLargeEnoughForMovementSpeedImpact |  | bool |  |
| UnitMarkerItem | IsLosingFood |  | bool |  |
| UnitMarkerItem | IsLosingSoldiers |  | bool |  |
| UnitMarkerItem | IsMovementLocked |  | bool |  |
| UnitMarkerItem | IsPlayer |  | bool |  |
| UnitMarkerItem | IsRegainingFood |  | bool |  |
| UnitMarkerItem | IsRetreating |  | bool |  |
| UnitMarkerItem | IsSelected |  | bool |  |
| UnitMarkerItem | IsSelectedOrHighlighted |  | bool |  |
| UnitMarkerItem | IsSieging |  | bool |  |
| UnitMarkerItem | IsTransporting |  | bool |  |
| UnitMarkerItem | OnClick |  | void |  |
| UnitMarkerItem | OnFlagClick |  | void |  |
| UnitMarkerItem | OnLeaderClick |  | void |  |
| UnitMarkerItem | OnRightClick |  | void |  |
| UnitMarkerItem | OnSelectLoadedUnits |  | void |  |
| UnitMarkerItem | RightClickToChase |  | bool |  |
| UnitMarkerItem | RightClickToJoin |  | bool |  |
| UnitMarkerItem | Self |  | UnitMarkerItem |  |
| UnitMarkerItem | ShouldBeHighlighted |  | bool |  |
| UnitMarkerItem | ShouldShowCompass |  | bool |  |
| UnitMarkerItem | ShowActiveAbility |  | bool |  |
| UnitMarkerItem | ShowFoodStack |  | bool |  |
| UnitMarkerItem | ShowTotalUnits |  | bool |  |
| UnitOverview | AccessSelf |  | UnitOverview |  |
| UnitOverview | CanBuild | 1. unknown | bool |  |
| UnitOverview | CanBuildInfo | 1. unknown | CString |  |
| UnitOverview | CanDisbandAllLevies | 1. unknown | bool |  |
| UnitOverview | CanDisbandUnitDescriptionFromUnit | 1. unknown | CString |  |
| UnitOverview | CanDisbandUnitFromUnit | 1. unknown | bool |  |
| UnitOverview | CanHireMerc | 1. unknown | bool |  |
| UnitOverview | CanHireMercInfo | 1. unknown | CString |  |
| UnitOverview | CanRaiseAllLevies | 1. unknown | bool |  |
| UnitOverview | ChooseArmyMercenaryLeader |  | void |  |
| UnitOverview | ChooseNavyMercenaryLeader |  | void |  |
| UnitOverview | ConstructLeviesEnabled | 1. unknown | bool |  |
| UnitOverview | ConstructLeviesInfo | 1. unknown | CString |  |
| UnitOverview | ConstructLeviesVisible |  | bool |  |
| UnitOverview | DisbandAllLevies | 1. unknown | void |  |
| UnitOverview | DisbandAllLeviesInfo | 1. unknown | CString |  |
| UnitOverview | DisbandUnitFromUnit | 1. unknown | void |  |
| UnitOverview | GetArmyCategories |  | unknown |  |
| UnitOverview | GetArmyLeviesInProgress |  | CFixedPoint |  |
| UnitOverview | GetArmyLeviesStrength |  | CFixedPoint |  |
| UnitOverview | GetArmyMercenariesInProgress |  | CFixedPoint |  |
| UnitOverview | GetArmyMercenariesStrength |  | CFixedPoint |  |
| UnitOverview | GetArmyRegularsInProgress |  | CFixedPoint |  |
| UnitOverview | GetArmyRegularsStrength |  | CFixedPoint |  |
| UnitOverview | GetArmyTradition |  | CFixedPoint |  |
| UnitOverview | GetArmyUnits |  | unknown |  |
| UnitOverview | GetArmyUnitsSortSearch |  | unknown |  |
| UnitOverview | GetAverageArmyMoralePercentage |  | CFixedPoint |  |
| UnitOverview | GetAverageNavyMoralePercentage |  | CFixedPoint |  |
| UnitOverview | GetInProgressArmyLevies |  | unknown |  |
| UnitOverview | GetInProgressArmyMercenaries |  | unknown |  |
| UnitOverview | GetInProgressArmyRegulars |  | unknown |  |
| UnitOverview | GetInProgressNavyLevies |  | unknown |  |
| UnitOverview | GetInProgressNavyMercenaries |  | unknown |  |
| UnitOverview | GetInProgressNavyRegulars |  | unknown |  |
| UnitOverview | GetNavyCategories |  | unknown |  |
| UnitOverview | GetNavyLeviesInProgress |  | CFixedPoint |  |
| UnitOverview | GetNavyLeviesStrength |  | CFixedPoint |  |
| UnitOverview | GetNavyMercenariesInProgress |  | CFixedPoint |  |
| UnitOverview | GetNavyMercenariesStrength |  | CFixedPoint |  |
| UnitOverview | GetNavyRegularsInProgress |  | CFixedPoint |  |
| UnitOverview | GetNavyRegularsStrength |  | CFixedPoint |  |
| UnitOverview | GetNavyTradition |  | CFixedPoint |  |
| UnitOverview | GetNavyUnits |  | unknown |  |
| UnitOverview | GetNavyUnitsSortSearch |  | unknown |  |
| UnitOverview | GetNumPotentialArmyMercenaries |  | int32 |  |
| UnitOverview | GetNumPotentialNavyMercenaries |  | int32 |  |
| UnitOverview | GetOrCalcVisualArmySubunit |  | unknown |  |
| UnitOverview | GetOrCalcVisualArmySubunitDefinition |  | unknown |  |
| UnitOverview | GetOrCalcVisualNavySubunit |  | unknown |  |
| UnitOverview | GetOrCalcVisualNavySubunitDefinition |  | unknown |  |
| UnitOverview | GetPlayer |  | unknown |  |
| UnitOverview | GetRecruitArmyUIAction |  | unknown |  |
| UnitOverview | GetRecruitNavyUIAction |  | unknown |  |
| UnitOverview | GetSelectObjectiveArmyAction |  | unknown |  |
| UnitOverview | GetSelectObjectiveNavyAction |  | unknown |  |
| UnitOverview | GetSubunitDefinitionArmyIllustration |  | unknown |  |
| UnitOverview | GetSubunitDefinitionArmyIllustrationMask |  | unknown |  |
| UnitOverview | GetSubunitDefinitionNavyIllustration |  | unknown |  |
| UnitOverview | GetSubunitDefinitionNavyIllustrationMask |  | unknown |  |
| UnitOverview | IsLeftPanel |  | bool |  |
| UnitOverview | IsRightPanel |  | bool |  |
| UnitOverview | RaiseAllLevies | 1. unknown | void |  |
| UnitOverview | RaiseAllLeviesAmountInfo | 1. unknown | CString |  |
| UnitOverview | RaiseAllLeviesEffectsInfo | 1. unknown | CString |  |
| UnitOverview | RaiseAllLeviesInfo | 1. unknown | CString |  |
| UnitOverview | Self |  | UnitOverview |  |
| UnitOverview | SetUnitEditingNameFromUnit | 1. unknown | void |  |
| UnitPriceWrap | AccessSelf |  | UnitPriceWrap |  |
| UnitPriceWrap | GetName |  | CString |  |
| UnitPriceWrap | GetTooltip |  | CString |  |
| UnitPriceWrap | Self |  | UnitPriceWrap |  |
| UnitSuppliesWrap | AccessSelf |  | UnitSuppliesWrap |  |
| UnitSuppliesWrap | CanShow |  | bool |  |
| UnitSuppliesWrap | CurrentIndex |  | int32 |  |
| UnitSuppliesWrap | GetSelectedUnit |  | unknown |  |
| UnitSuppliesWrap | GetUnitSupplies |  | unknown |  |
| UnitSuppliesWrap | GoNext |  | void |  |
| UnitSuppliesWrap | GoPrev |  | void |  |
| UnitSuppliesWrap | HasNext |  | bool |  |
| UnitSuppliesWrap | HasPrev |  | bool |  |
| UnitSuppliesWrap | Self |  | UnitSuppliesWrap |  |
| UnitTransportStateBag | AccessSelf |  | UnitTransportStateBag |  |
| UnitTransportStateBag | GetArmies |  | unknown |  |
| UnitTransportStateBag | GetArmyDisembarkLocation |  | unknown |  |
| UnitTransportStateBag | GetArmyEmbarkLocation |  | unknown |  |
| UnitTransportStateBag | GetNavies |  | unknown |  |
| UnitTransportStateBag | GetShipDisembarkLocation |  | unknown |  |
| UnitTransportStateBag | GetShipEmbarkLocation |  | unknown |  |
| UnitTransportStateBag | IsComplete | 1. unknown | bool |  |
| UnitTransportStateBag | IsDirty |  | bool |  |
| UnitTransportStateBag | Self |  | UnitTransportStateBag |  |
| UnitTypeItem | AccessSelf |  | UnitTypeItem |  |
| UnitTypeItem | CanAffordGoldCost |  | bool |  |
| UnitTypeItem | CanAffordManpowerCost |  | bool |  |
| UnitTypeItem | CanAffordSailorsCost |  | bool |  |
| UnitTypeItem | CanCancelFiltered |  | bool |  |
| UnitTypeItem | CanCancelFilteredTT |  | CString |  |
| UnitTypeItem | CanRecruit |  | bool |  |
| UnitTypeItem | CanRecruitFiltered |  | bool |  |
| UnitTypeItem | CanRecruitFilteredTT |  | CString |  |
| UnitTypeItem | CanRecruitTT |  | CString |  |
| UnitTypeItem | CancelFiltered |  | void |  |
| UnitTypeItem | EnableUIClick |  | bool |  |
| UnitTypeItem | GetConditions |  | CString |  |
| UnitTypeItem | GetConstructions |  | unknown |  |
| UnitTypeItem | GetGoldCost |  | CString |  |
| UnitTypeItem | GetLeftClickAndConfirmConditions |  | CString |  |
| UnitTypeItem | GetLeftClickAndConfirmCost |  | CString |  |
| UnitTypeItem | GetLeftClickAndConfirmDescription |  | CString |  |
| UnitTypeItem | GetLeftClickAndConfirmTitle |  | CString |  |
| UnitTypeItem | GetLeftClickConditions |  | CString |  |
| UnitTypeItem | GetLeftClickCost |  | CString |  |
| UnitTypeItem | GetLeftClickDescription |  | CString |  |
| UnitTypeItem | GetLeftClickTitle |  | CString |  |
| UnitTypeItem | GetManpowerCost |  | CString |  |
| UnitTypeItem | GetMaxStrength |  | CString |  |
| UnitTypeItem | GetName |  | CString |  |
| UnitTypeItem | GetNumExisting |  | int32 |  |
| UnitTypeItem | GetNumInProgress |  | int32 |  |
| UnitTypeItem | GetNumPossible |  | int32 |  |
| UnitTypeItem | GetRightClickAndConfirmConditions |  | CString |  |
| UnitTypeItem | GetRightClickAndConfirmCost |  | CString |  |
| UnitTypeItem | GetRightClickAndConfirmDescription |  | CString |  |
| UnitTypeItem | GetRightClickAndConfirmTitle |  | CString |  |
| UnitTypeItem | GetSailorsCost |  | CString |  |
| UnitTypeItem | GetUniqueStats |  | unknown |  |
| UnitTypeItem | GetUnitType |  | unknown |  |
| UnitTypeItem | HasConstructionsInProgress |  | bool |  |
| UnitTypeItem | IsExpanded |  | bool |  |
| UnitTypeItem | IsLeftClickAndConfirmEnabled |  | bool |  |
| UnitTypeItem | IsLeftClickAndConfirmVisible |  | bool |  |
| UnitTypeItem | IsLeftClickEnabled |  | bool |  |
| UnitTypeItem | IsLeftClickVisible |  | bool |  |
| UnitTypeItem | IsLevy |  | bool |  |
| UnitTypeItem | IsRightClickAndConfirmEnabled |  | bool |  |
| UnitTypeItem | IsRightClickAndConfirmVisible |  | bool |  |
| UnitTypeItem | OnLeftClick |  | void |  |
| UnitTypeItem | OnLeftClickAndConfirm |  | void |  |
| UnitTypeItem | OnRightClickAndConfirm |  | void |  |
| UnitTypeItem | RaiseAllLevies |  | void |  |
| UnitTypeItem | Recruit |  | void |  |
| UnitTypeItem | RecruitFiltered |  | void |  |
| UnitTypeItem | RecruitFilteredVisible |  | bool |  |
| UnitTypeItem | Self |  | UnitTypeItem |  |
| UnitTypeItem | Toggle |  | void |  |
| UnitTypeLateralView | AccessSelf |  | UnitTypeLateralView |  |
| UnitTypeLateralView | GetCombatImpacts | 1. unknown | unknown |  |
| UnitTypeLateralView | GetPlayer |  | unknown |  |
| UnitTypeLateralView | GetSelectedUnitTexture |  | unknown |  |
| UnitTypeLateralView | GetTerrainImpacts |  | unknown |  |
| UnitTypeLateralView | GetUnitType |  | unknown |  |
| UnitTypeLateralView | IsLeftPanel |  | bool |  |
| UnitTypeLateralView | IsRightPanel |  | bool |  |
| UnitTypeLateralView | Self |  | UnitTypeLateralView |  |
| UnitViewer | AccessAttachmentsOverrides |  | unknown |  |
| UnitViewer | AccessSelf |  | UnitViewer |  |
| UnitViewer | ErrorExist |  | bool |  |
| UnitViewer | GetErrorText |  | unknown |  |
| UnitViewer | GetPossibilitiesNum |  | int32 |  |
| UnitViewer | IsBloomEnvPropertiesVisible |  | bool |  |
| UnitViewer | IsCubemapEnvPropertiesVisible |  | bool |  |
| UnitViewer | IsFogEnvPropertiesVisible |  | bool |  |
| UnitViewer | IsLightEnvPropertiesVisible |  | bool |  |
| UnitViewer | OpenSchematicEditor |  | void |  |
| UnitViewer | PickAttachmentOverrides |  | void |  |
| UnitViewer | ResetAttachmentOverrides |  | void |  |
| UnitViewer | Self |  | UnitViewer |  |
| UnitViewer | SpawnDebugUnit |  | void |  |
| UnitViewer | ToggleIsBloomEnvPropertiesVisible |  | void |  |
| UnitViewer | ToggleIsCubemapEnvPropertiesVisible |  | void |  |
| UnitViewer | ToggleIsFogEnvPropertiesVisible |  | void |  |
| UnitViewer | ToggleIsLightEnvPropertiesVisible |  | void |  |
| UnitsWrap | AccessSelf |  | UnitsWrap |  |
| UnitsWrap | CanShow |  | bool |  |
| UnitsWrap | CurrentIndex |  | int32 |  |
| UnitsWrap | GetSelectedUnit |  | unknown |  |
| UnitsWrap | GetTooltipTitle |  | CString |  |
| UnitsWrap | GetUnits |  | unknown |  |
| UnitsWrap | GoNext |  | void |  |
| UnitsWrap | GoPrev |  | void |  |
| UnitsWrap | HasNext |  | bool |  |
| UnitsWrap | HasPrev |  | bool |  |
| UnitsWrap | Self |  | UnitsWrap |  |
| UniversalSplineEditorEdgeProperties | AccessSelf |  | UniversalSplineEditorEdgeProperties |  |
| UniversalSplineEditorEdgeProperties | AreAllSelectedEdgeSplinesLocked |  | bool |  |
| UniversalSplineEditorEdgeProperties | GetNumberOfAffectedEdges |  | int32 |  |
| UniversalSplineEditorEdgeProperties | Self |  | UniversalSplineEditorEdgeProperties |  |
| UniversalSplineEditorMode | AccessSelf |  | UniversalSplineEditorMode |  |
| UniversalSplineEditorMode | CanFrameCameraToSelection |  | bool |  |
| UniversalSplineEditorMode | CreateNewCollection |  | void |  |
| UniversalSplineEditorMode | CreateNewSpline |  | void |  |
| UniversalSplineEditorMode | DeleteSelectedObjects |  | void |  |
| UniversalSplineEditorMode | FrameCameraToSelection |  | void |  |
| UniversalSplineEditorMode | GetCurrentSelectionMode |  | int32 |  |
| UniversalSplineEditorMode | GetCurrentToolType |  | CString |  |
| UniversalSplineEditorMode | GetNumSelectedObjects |  | int32 |  |
| UniversalSplineEditorMode | IsAnySelectedObjectHidden |  | bool |  |
| UniversalSplineEditorMode | IsAnySelectedObjectLocked |  | bool |  |
| UniversalSplineEditorMode | IsModeSelected |  | bool |  |
| UniversalSplineEditorMode | RenameSelectedObjects |  | void |  |
| UniversalSplineEditorMode | Self |  | UniversalSplineEditorMode |  |
| UniversalSplineEditorMode | SetCurrentSelectionMode | 1. unknown | void |  |
| UniversalSplineEditorMode | SetCurrentToolType | 1. unknown | void |  |
| UniversalSplineEditorMode | SetSelectedObjectsHidden | 1. unknown | void |  |
| UniversalSplineEditorMode | SetSelectedObjectsLocked | 1. unknown | void |  |
| UniversalSplineEditorOutliner | AccessEntriesDatamodel |  | unknown |  |
| UniversalSplineEditorOutliner | AccessSelf |  | UniversalSplineEditorOutliner |  |
| UniversalSplineEditorOutliner | OnSplineEntryUiClick | 1. unknown | void |  |
| UniversalSplineEditorOutliner | Self |  | UniversalSplineEditorOutliner |  |
| UniversalSplineEditorPointsProperties | AccessSelf |  | UniversalSplineEditorPointsProperties |  |
| UniversalSplineEditorPointsProperties | AreAllSelectedPointSplinesLocked |  | bool |  |
| UniversalSplineEditorPointsProperties | GetNumberOfAffectedPoints |  | int32 |  |
| UniversalSplineEditorPointsProperties | Self |  | UniversalSplineEditorPointsProperties |  |
| UniversalSplineEditorProperties | AccessSelf |  | UniversalSplineEditorProperties |  |
| UniversalSplineEditorProperties | AreAllSelectedSplinesLocked |  | bool |  |
| UniversalSplineEditorProperties | GetFirstAffectedSplineName |  | CString |  |
| UniversalSplineEditorProperties | GetNumAffectedSplines |  | int32 |  |
| UniversalSplineEditorProperties | IsGameSplinePropertiesVisible |  | bool |  |
| UniversalSplineEditorProperties | Self |  | UniversalSplineEditorProperties |  |
| UniversalSplineEditorStructure | AccessPrimitivesDatamodel |  | unknown |  |
| UniversalSplineEditorStructure | AccessSelf |  | UniversalSplineEditorStructure |  |
| UniversalSplineEditorStructure | CanInsertNewPoint |  | bool |  |
| UniversalSplineEditorStructure | CanRemoveSelectedPrimitives |  | bool |  |
| UniversalSplineEditorStructure | GetAffectedSplineDisplayName |  | CString |  |
| UniversalSplineEditorStructure | GetPointIndex | 1. unknown | uint32 |  |
| UniversalSplineEditorStructure | GetPrimitiveIdHash | 1. unknown | CString |  |
| UniversalSplineEditorStructure | GetPrimitiveSpriteIndex | 1. unknown | int32 |  |
| UniversalSplineEditorStructure | InsertNewPoint |  | void |  |
| UniversalSplineEditorStructure | IsAffectedSplineLocked |  | bool |  |
| UniversalSplineEditorStructure | IsAffectedSplineValid |  | bool |  |
| UniversalSplineEditorStructure | IsPrimitivePoint | 1. unknown | bool |  |
| UniversalSplineEditorStructure | IsPrimitiveSelected | 1. unknown | bool |  |
| UniversalSplineEditorStructure | OnPrimitiveEntryUiClick | 1. unknown | void |  |
| UniversalSplineEditorStructure | RemoveSelectedPrimitives |  | void |  |
| UniversalSplineEditorStructure | Self |  | UniversalSplineEditorStructure |  |
| UniversalSplineEditorTopbarPanel | AccessSelf |  | UniversalSplineEditorTopbarPanel |  |
| UniversalSplineEditorTopbarPanel | Self |  | UniversalSplineEditorTopbarPanel |  |
| UniversalSplineEditorViewport | AccessSelf |  | UniversalSplineEditorViewport |  |
| UniversalSplineEditorViewport | OnMouseEnter |  | void |  |
| UniversalSplineEditorViewport | OnMouseLeave |  | void |  |
| UniversalSplineEditorViewport | Self |  | UniversalSplineEditorViewport |  |
| UnprofitableBuildingsEntry | AccessSelf |  | UnprofitableBuildingsEntry |  |
| UnprofitableBuildingsEntry | GetMarket |  | unknown |  |
| UnprofitableBuildingsEntry | GetUnprofitableBuildingsAmount |  | int32 |  |
| UnprofitableBuildingsEntry | GetUnprofitableBuildingsInfo |  | CString |  |
| UnprofitableBuildingsEntry | Self |  | UnprofitableBuildingsEntry |  |
| UserDataNode | AccessSelf |  | UserDataNode |  |
| UserDataNode | Configure |  | void |  |
| UserDataNode | Id |  | CString |  |
| UserDataNode | Label |  | CString |  |
| UserDataNode | Self |  | UserDataNode |  |
| UserDataNode | TypeName |  | unknown |  |
| VariableEntry | AccessSelf |  | VariableEntry |  |
| VariableEntry | Delete |  | void |  |
| VariableEntry | GetName |  | CString |  |
| VariableEntry | Self |  | VariableEntry |  |
| VariableEntry | SetName |  | void |  |
| VariableInfo | AccessSelf |  | VariableInfo |  |
| VariableInfo | GetExpirationDate |  | CString |  |
| VariableInfo | GetName |  | CString |  |
| VariableInfo | GetValue |  | CString |  |
| VariableInfo | HasExpirationDate |  | bool |  |
| VariableInfo | Self |  | VariableInfo |  |
| VariableInspectorEntry | AccessSelf |  | VariableInspectorEntry |  |
| VariableInspectorEntry | Delete |  | void |  |
| VariableInspectorEntry | Self |  | VariableInspectorEntry |  |
| VariableInspectorPlugin | AccessSelf |  | VariableInspectorPlugin |  |
| VariableInspectorPlugin | AccessVariables |  | unknown |  |
| VariableInspectorPlugin | AddVariable |  | void |  |
| VariableInspectorPlugin | GetNumVariables |  | int32 |  |
| VariableInspectorPlugin | Self |  | VariableInspectorPlugin |  |
| VariableInspectorVariable | AccessSelf |  | VariableInspectorVariable |  |
| VariableInspectorVariable | GetName |  | CString |  |
| VariableInspectorVariable | GetRemainingTicks |  | int32 |  |
| VariableInspectorVariable | Self |  | VariableInspectorVariable |  |
| VariableInspectorVariable | SetName |  | void |  |
| VariableInspectorVariable | SetRemainingTicks |  | void |  |
| VariableList | AccessEntries |  | unknown |  |
| VariableList | AccessSelf |  | VariableList |  |
| VariableList | Delete |  | void |  |
| VariableList | GetName |  | CString |  |
| VariableList | GetSize |  | int32 |  |
| VariableList | Self |  | VariableList |  |
| VariableListEntry | AccessSelf |  | VariableListEntry |  |
| VariableListEntry | Delete |  | void |  |
| VariableListEntry | GetTicksRemaining |  | int32 |  |
| VariableListEntry | Self |  | VariableListEntry |  |
| VariableListEntry | SetTicksRemaining |  | void |  |
| VariableListInspectorPlugin | AccessSelf |  | VariableListInspectorPlugin |  |
| VariableListInspectorPlugin | Self |  | VariableListInspectorPlugin |  |
| VariableListStore | AccessSelf |  | VariableListStore |  |
| VariableListStore | AccessVariableLists |  | unknown |  |
| VariableListStore | AddNewEntry |  | void |  |
| VariableListStore | GetNewVariableListName |  | CString |  |
| VariableListStore | GetNumVariableLists |  | int32 |  |
| VariableListStore | GetVariableTicksRemaining |  | int32 |  |
| VariableListStore | Self |  | VariableListStore |  |
| VariableListStore | SetNewVariableListName |  | void |  |
| VariableListStore | SetVariableTicksRemaining |  | void |  |
| VariableStore | AccessSelf |  | VariableStore |  |
| VariableStore | AccessVariables |  | unknown |  |
| VariableStore | AddNewEntry |  | void |  |
| VariableStore | GetNewVariableName |  | CString |  |
| VariableStore | GetNumVariables |  | int32 |  |
| VariableStore | Self |  | VariableStore |  |
| VariableStore | SetNewVariableName |  | void |  |
| VariableSystem | AccessSelf |  | VariableSystem |  |
| VariableSystem | Clear | 1. unknown | void |  |
| VariableSystem | ClearIf | 1. unknown 2. unknown | void |  |
| VariableSystem | ClearMultiple | 1. unknown 2. unknown | void |  |
| VariableSystem | Exists | 1. unknown | bool |  |
| VariableSystem | Get | 1. unknown | CString |  |
| VariableSystem | HasValue | 1. unknown 2. unknown | bool |  |
| VariableSystem | Self |  | VariableSystem |  |
| VariableSystem | Set | 1. unknown 2. unknown | void |  |
| VariableSystem | SetIf | 1. unknown 2. unknown 3. unknown | void |  |
| VariableSystem | SetOrToggle | 1. unknown 2. unknown | void |  |
| VariableSystem | Toggle | 1. unknown | bool |  |
| Vegetation | AccessSelf |  | Vegetation |  |
| Vegetation | GetDesc |  | CString |  |
| Vegetation | GetIcon |  | CString |  |
| Vegetation | GetName |  | CString |  |
| Vegetation | GetNameNoUnderline |  | CString |  |
| Vegetation | GetNameWithNoTooltip |  | CString |  |
| Vegetation | GetTooltip |  | CString |  |
| Vegetation | MakeScope |  | Scope | Jomini Script System |
| Vegetation | Self |  | Vegetation |  |
| VfsMountPathBrowser | AccessSelf |  | VfsMountPathBrowser |  |
| VfsMountPathBrowser | GetFilter |  | CString |  |
| VfsMountPathBrowser | GetNodeTree |  | unknown |  |
| VfsMountPathBrowser | GetNumSelectedNodes |  | int32 |  |
| VfsMountPathBrowser | HasDirectFilterMatch | 1. unknown | bool |  |
| VfsMountPathBrowser | IsNodeExpanded | 1. unknown | bool |  |
| VfsMountPathBrowser | IsNodeSelected | 1. unknown | bool |  |
| VfsMountPathBrowser | IsRefreshingDirectories |  | bool |  |
| VfsMountPathBrowser | OnCancel |  | void |  |
| VfsMountPathBrowser | OnFilterEdit |  | void |  |
| VfsMountPathBrowser | OnSelect |  | void |  |
| VfsMountPathBrowser | RefreshAllDirectories |  | void |  |
| VfsMountPathBrowser | Self |  | VfsMountPathBrowser |  |
| VfsMountPathBrowser | ToggleNodeExpanded | 1. unknown | void |  |
| VfsMountPathBrowser | ToggleNodeSelected | 1. unknown | void |  |
| VfsMountPathBrowserEntryNode | AccessSelf |  | VfsMountPathBrowserEntryNode |  |
| VfsMountPathBrowserEntryNode | GetBranchDepth | 1. unknown 2. unknown | CVector2f |  |
| VfsMountPathBrowserEntryNode | GetFullPath |  | unknown |  |
| VfsMountPathBrowserEntryNode | GetName |  | unknown |  |
| VfsMountPathBrowserEntryNode | HasChildren |  | bool |  |
| VfsMountPathBrowserEntryNode | Self |  | VfsMountPathBrowserEntryNode |  |
| ViewerEntity | AccessSelf |  | ViewerEntity |  |
| ViewerEntity | CurrentFrame |  | int32 |  |
| ViewerEntity | CurrentTime |  | double |  |
| ViewerEntity | EntityLods |  | unknown |  |
| ViewerEntity | HasStates |  | bool |  |
| ViewerEntity | HasUnsavedChanges |  | bool |  |
| ViewerEntity | IsLooping |  | bool |  |
| ViewerEntity | IsPlaying |  | bool |  |
| ViewerEntity | Name |  | unknown |  |
| ViewerEntity | NumJoints |  | int32 |  |
| ViewerEntity | PauseAnimation |  | void |  |
| ViewerEntity | RollForward |  | void |  |
| ViewerEntity | Rollback |  | void |  |
| ViewerEntity | Scale |  | float |  |
| ViewerEntity | Self |  | ViewerEntity |  |
| ViewerEntity | SetCurrentFrameText | 1. unknown | void |  |
| ViewerEntity | SetCurrentTimeText | 1. unknown | void |  |
| ViewerEntity | State |  | unknown |  |
| ViewerEntity | StepBackwards |  | void |  |
| ViewerEntity | StepForward |  | void |  |
| ViewerEntity | ToggleLooping |  | void |  |
| ViewerEntity | TogglePausePlay |  | void |  |
| ViewerEntityLodInfo | AccessSelf |  | ViewerEntityLodInfo |  |
| ViewerEntityLodInfo | Lod |  | int32 |  |
| ViewerEntityLodInfo | NumTriangles |  | int32 |  |
| ViewerEntityLodInfo | NumVertices |  | int32 |  |
| ViewerEntityLodInfo | Self |  | ViewerEntityLodInfo |  |
| ViewerEntityState | AccessSelf |  | ViewerEntityState |  |
| ViewerEntityState | AnimationLength |  | float |  |
| ViewerEntityState | HasAnimation |  | bool |  |
| ViewerEntityState | KeyframeLayers |  | unknown |  |
| ViewerEntityState | Name |  | unknown |  |
| ViewerEntityState | NumFrames |  | int32 |  |
| ViewerEntityState | Self |  | ViewerEntityState |  |
| VoteGlue | AccessSelf |  | VoteGlue |  |
| VoteGlue | GetNumVotes |  | int32 |  |
| VoteGlue | GetTotalNumVotes |  | CFixedPoint |  |
| VoteGlue | GetVoteObject |  | unknown |  |
| VoteGlue | GetVotes |  | unknown |  |
| VoteGlue | Self |  | VoteGlue |  |
| VoteTargetGlue | AccessSelf |  | VoteTargetGlue |  |
| VoteTargetGlue | GetVotePercentage |  | CFixedPoint |  |
| VoteTargetGlue | GetVoteTarget |  | unknown |  |
| VoteTargetGlue | GetVoterCount |  | int32 |  |
| VoteTargetGlue | GetVoters |  | unknown |  |
| VoteTargetGlue | GetVotersDataModel |  | unknown |  |
| VoteTargetGlue | GetVotesCount |  | CFixedPoint |  |
| VoteTargetGlue | Self |  | VoteTargetGlue |  |
| VoterGlue | AccessSelf |  | VoterGlue |  |
| VoterGlue | GetReason |  | CString |  |
| VoterGlue | GetVoter |  | unknown |  |
| VoterGlue | GetVotes |  | CFixedPoint |  |
| VoterGlue | Self |  | VoterGlue |  |
| War | AccessSelf |  | War |  |
| War | GetAllParticipants |  | unknown |  |
| War | GetAttackerCount |  | int32 |  |
| War | GetAttackerLosses |  | unknown |  |
| War | GetAttackerNames |  | CString |  |
| War | GetAttackerNamesWithoutLeader |  | CString |  |
| War | GetConquestInfo |  | CString |  |
| War | GetDefenderCount |  | int32 |  |
| War | GetDefenderLosses |  | unknown |  |
| War | GetDefenderNames |  | CString |  |
| War | GetDefenderNamesWithoutLeader |  | CString |  |
| War | GetExtraAttackers |  | int32 |  |
| War | GetExtraDefenders |  | int32 |  |
| War | GetLossesFor | 1. unknown | unknown |  |
| War | GetName |  | CString |  |
| War | GetNameWithNoTooltip |  | CString |  |
| War | GetOriginalDefendersList |  | CString |  |
| War | GetStartDate |  | CString |  |
| War | GetTooltip |  | CString |  |
| War | GetWarDescription |  | CString |  |
| War | GetWarGoalBonus |  | CFixedPoint |  |
| War | GetWarGoalController |  | unknown |  |
| War | GetWarGoalProgress |  | float |  |
| War | GetWarScore |  | CFixedPoint |  |
| War | GetWarScoreBreakdown |  | CString |  |
| War | GetWarScoreOfCountry | 1. unknown | CFixedPoint |  |
| War | GetWhitePeaceInfo |  | CString |  |
| War | HasTickingWarScore |  | bool |  |
| War | HasWarGoal |  | bool |  |
| War | HasWarGoalController |  | bool |  |
| War | IsCivilWar |  | bool |  |
| War | IsConquestWar |  | bool |  |
| War | IsPlayerInWar |  | bool |  |
| War | IsTickingForAutoConquest |  | bool |  |
| War | IsTickingForAutoWhitePeace |  | bool |  |
| War | MakeScope |  | Scope | Jomini Script System |
| War | Self |  | War |  |
| WarGlue | AccessSelf |  | WarGlue |  |
| WarGlue | GetAttackers |  | WarSideGlue |  |
| WarGlue | GetDefenders |  | WarSideGlue |  |
| WarGlue | GetName |  | CString |  |
| WarGlue | IsShowingAttackers |  | bool |  |
| WarGlue | Self |  | WarGlue |  |
| WarGlue | ShowAttackers |  | void |  |
| WarGlue | ShowDefenders |  | void |  |
| WarGoal | AccessSelf |  | WarGoal |  |
| WarGoal | GetEffects |  | CString |  |
| WarGoal | GetFlavor |  | CString |  |
| WarGoal | GetName |  | CString |  |
| WarGoal | GetNameWithNoTooltip |  | CString |  |
| WarGoal | GetWarGoalType |  | unknown |  |
| WarGoal | HasCasusBelli |  | bool |  |
| WarGoal | HasWar |  | bool |  |
| WarGoal | Self |  | WarGoal |  |
| WarGoalType | AccessSelf |  | WarGoalType |  |
| WarGoalType | GetDesc |  | CString |  |
| WarGoalType | GetName |  | CString |  |
| WarGoalType | Self |  | WarGoalType |  |
| WarImpactWrap | AccessSelf |  | WarImpactWrap |  |
| WarImpactWrap | GetBaseAntagonismValueString |  | CString |  |
| WarImpactWrap | GetCurrencyCosts |  | unknown |  |
| WarImpactWrap | HasAntagonism |  | bool |  |
| WarImpactWrap | Self |  | WarImpactWrap |  |
| WarItem | AccessSelf |  | WarItem |  |
| WarItem | GetScore |  | CFixedPoint |  |
| WarItem | GetWar |  | unknown |  |
| WarItem | Self |  | WarItem |  |
| WarLateralView | AccessSelf |  | WarLateralView |  |
| WarLateralView | AreAlliesLandlocked |  | bool |  |
| WarLateralView | AreEnemiesLandlocked |  | bool |  |
| WarLateralView | CanAnnexRevolter |  | bool |  |
| WarLateralView | CanAnnexRevolterDesc |  | CString |  |
| WarLateralView | CanAnnexRevolterInfo |  | CString |  |
| WarLateralView | CanGrantIndependence |  | bool |  |
| WarLateralView | CanGrantIndependenceDesc |  | CString |  |
| WarLateralView | CanGrantIndependenceInfo |  | CString |  |
| WarLateralView | GetBattlesLost |  | unknown |  |
| WarLateralView | GetBattlesOnGoing |  | unknown |  |
| WarLateralView | GetBattlesWon |  | unknown |  |
| WarLateralView | GetEnemyLandArmy |  | CString |  |
| WarLateralView | GetEnemyLandArmyDesc |  | CString |  |
| WarLateralView | GetEnemyLandLosses |  | CString |  |
| WarLateralView | GetEnemyLandLossesDesc |  | CString |  |
| WarLateralView | GetEnemyLeader |  | unknown |  |
| WarLateralView | GetEnemyNavalArmy |  | CString |  |
| WarLateralView | GetEnemyNavalArmyDesc |  | CString |  |
| WarLateralView | GetEnemyNavalLosses |  | CString |  |
| WarLateralView | GetEnemyNavalLossesDesc |  | CString |  |
| WarLateralView | GetEnemyParticipants |  | unknown |  |
| WarLateralView | GetEnemyParticipantsSorted |  | unknown |  |
| WarLateralView | GetEnforceAttackerPeace |  | unknown |  |
| WarLateralView | GetEnforceDefenderPeace |  | unknown |  |
| WarLateralView | GetFriendlyLandArmy |  | CString |  |
| WarLateralView | GetFriendlyLandArmyDesc |  | CString |  |
| WarLateralView | GetFriendlyLandLosses |  | CString |  |
| WarLateralView | GetFriendlyLandLossesDesc |  | CString |  |
| WarLateralView | GetFriendlyLeader |  | unknown |  |
| WarLateralView | GetFriendlyNavalArmy |  | CString |  |
| WarLateralView | GetFriendlyNavalArmyDesc |  | CString |  |
| WarLateralView | GetFriendlyNavalLosses |  | CString |  |
| WarLateralView | GetFriendlyNavalLossesDesc |  | CString |  |
| WarLateralView | GetFriendlyParticipants |  | unknown |  |
| WarLateralView | GetFriendlyParticipantsSorted |  | unknown |  |
| WarLateralView | GetInterveneInAttackerWar |  | unknown |  |
| WarLateralView | GetInterveneInDefenderWar |  | unknown |  |
| WarLateralView | GetLandBattlesLostInfo |  | CString |  |
| WarLateralView | GetLandBattlesWonInfo |  | CString |  |
| WarLateralView | GetNavalBattlesLostInfo |  | CString |  |
| WarLateralView | GetNavalBattlesWonInfo |  | CString |  |
| WarLateralView | GetNumberLandBattlesLost |  | int32 |  |
| WarLateralView | GetNumberLandBattlesWon |  | int32 |  |
| WarLateralView | GetNumberNavalBattlesLost |  | int32 |  |
| WarLateralView | GetNumberNavalBattlesWon |  | int32 |  |
| WarLateralView | GetPlayer |  | unknown |  |
| WarLateralView | GetWarScore |  | CFixedPoint |  |
| WarLateralView | GetWarScoreForPie |  | CFixedPoint |  |
| WarLateralView | GetWarScoreTooltip |  | CString |  |
| WarLateralView | IsAnnexRevolterVisible |  | bool |  |
| WarLateralView | IsEnemyOrOverlordValidForPeace | 1. unknown | bool |  |
| WarLateralView | IsEnemyOrOverlordValidForPeaceTooltip | 1. unknown | CString |  |
| WarLateralView | IsEnemyValidForPeace | 1. unknown | bool |  |
| WarLateralView | IsGrantIndependenceVisible |  | bool |  |
| WarLateralView | IsIndependenceWar |  | bool |  |
| WarLateralView | IsLeaderOrLeaderSubject | 1. unknown | bool |  |
| WarLateralView | IsLeftPanel |  | bool |  |
| WarLateralView | IsPlayerAttacker |  | bool |  |
| WarLateralView | IsPlayerInWar |  | bool |  |
| WarLateralView | IsRevoltWar |  | bool |  |
| WarLateralView | IsRightPanel |  | bool |  |
| WarLateralView | OpenPeaceOfferCountry | 1. unknown | void |  |
| WarLateralView | Self |  | WarLateralView |  |
| WarLateralView | SendAnnexRevolter |  | void |  |
| WarLateralView | SendGrantIndependenceRevolter |  | void |  |
| WarLateralView | ShowPeaceDemandLateralView |  | void |  |
| WarLateralView | ShowPeaceOfferLateralView |  | void |  |
| WarLateralView | ShowPeaceOfferLateralViewForCountry | 1. unknown | void |  |
| WarLateralView | TogglePeaceViewEnabled |  | bool |  |
| WarLateralView | TogglePeaceViewTooltip |  | CString |  |
| WarLateralViewBattle | AccessSelf |  | WarLateralViewBattle |  |
| WarLateralViewBattle | GetBattleResult |  | unknown |  |
| WarLateralViewBattle | GetCombat |  | unknown |  |
| WarLateralViewBattle | GetScore |  | CFixedPoint |  |
| WarLateralViewBattle | GetTooltip | 1. unknown | CString |  |
| WarLateralViewBattle | OnClick |  | void |  |
| WarLateralViewBattle | Self |  | WarLateralViewBattle |  |
| WarLateralViewParticipant | AccessSelf |  | WarLateralViewParticipant |  |
| WarLateralViewParticipant | GetCountry |  | unknown |  |
| WarLateralViewParticipant | GetPlayerWarScore |  | CFixedPoint |  |
| WarLateralViewParticipant | GetWarEnthusiasm |  | CFixedPoint |  |
| WarLateralViewParticipant | GetWarEnthusiasmInfo |  | CString |  |
| WarLateralViewParticipant | GetWarParticipation |  | CFixedPoint |  |
| WarLateralViewParticipant | IsSelected |  | bool |  |
| WarLateralViewParticipant | Self |  | WarLateralViewParticipant |  |
| WarLateralViewParticipant | Toggle |  | void |  |
| WarLosses | AccessSelf |  | WarLosses |  |
| WarLosses | GetInfo |  | CString |  |
| WarLosses | GetLosses | 1. unknown 2. unknown | int32 |  |
| WarLosses | GetLossesOfUnitType | 1. unknown | int32 |  |
| WarLosses | GetMenLostBecauseOf | 1. unknown | int32 |  |
| WarLosses | GetShipsLostBecauseOf | 1. unknown | int32 |  |
| WarLosses | GetTotalLost |  | int32 |  |
| WarLosses | GetTotalMenLost |  | int32 |  |
| WarLosses | GetTotalShipsLost |  | int32 |  |
| WarLosses | Self |  | WarLosses |  |
| WarMessage | AccessSelf |  | WarMessage |  |
| WarMessage | GetFirstCountry |  | unknown |  |
| WarMessage | GetSecondCountry |  | unknown |  |
| WarMessage | Self |  | WarMessage |  |
| WarParticipant | AccessSelf |  | WarParticipant |  |
| WarParticipant | GetCountry |  | unknown |  |
| WarParticipant | Self |  | WarParticipant |  |
| WarParticipantGlue | AccessSelf |  | WarParticipantGlue |  |
| WarParticipantGlue | GetCountry |  | unknown |  |
| WarParticipantGlue | GetStrategicObjectiveGroups |  | unknown |  |
| WarParticipantGlue | GetTacticalObjectiveGroups |  | unknown |  |
| WarParticipantGlue | GetWar |  | unknown |  |
| WarParticipantGlue | Self |  | WarParticipantGlue |  |
| WarSideGlue | AccessSelf |  | WarSideGlue |  |
| WarSideGlue | GetParticipants |  | unknown |  |
| WarSideGlue | GetSelectedParticipant |  | WarParticipantGlue |  |
| WarSideGlue | GetSelectedParticipantIndex |  | CVector2i |  |
| WarSideGlue | GetWar |  | War |  |
| WarSideGlue | SelectParticipant |  | void |  |
| WarSideGlue | Self |  | WarSideGlue |  |
| WarViewer | AccessSelf |  | WarViewer |  |
| WarViewer | GetCurrentWar |  | unknown |  |
| WarViewer | GetWars |  | unknown |  |
| WarViewer | HasWar |  | bool |  |
| WarViewer | IsWarViewOpen | 1. unknown | bool |  |
| WarViewer | OpenWarView | 1. unknown | void |  |
| WarViewer | Self |  | WarViewer |  |
| WarViewer | SetFilter | 1. unknown | void |  |
| WarsLedger | AccessSelf |  | WarsLedger |  |
| WarsLedger | GetPlayer |  | unknown |  |
| WarsLedger | GetWars |  | unknown |  |
| WarsLedger | GetWarsSortSearch |  | unknown |  |
| WarsLedger | IsLeftPanel |  | bool |  |
| WarsLedger | IsRightPanel |  | bool |  |
| WarsLedger | Self |  | WarsLedger |  |
| WarsOverviewWar | AccessSelf |  | WarsOverviewWar |  |
| WarsOverviewWar | GetMainEnemy |  | unknown |  |
| WarsOverviewWar | GetWar |  | unknown |  |
| WarsOverviewWar | GetWarScore |  | CFixedPoint |  |
| WarsOverviewWar | OnClick |  | void |  |
| WarsOverviewWar | Self |  | WarsOverviewWar |  |
| WatchWindow | AccessSelf |  | WatchWindow |  |
| WatchWindow | Close |  | void |  |
| WatchWindow | GetEventItems |  | unknown |  |
| WatchWindow | GetFlagItems |  | unknown |  |
| WatchWindow | GetObjectName |  | CString |  |
| WatchWindow | GetVariableItems |  | unknown |  |
| WatchWindow | Self |  | WatchWindow |  |
| WatchWindow | ToggleChangeOnPause |  | void |  |
| WatchWindow | WillPauseOnChange |  | bool |  |
| WeatherSystem | AccessSelf |  | WeatherSystem |  |
| WeatherSystem | GetLocationInfo | 1. unknown | CString |  |
| WeatherSystem | GetName |  | CString |  |
| WeatherSystem | GetNameWithNoTooltip |  | CString |  |
| WeatherSystem | GetTooltip |  | CString |  |
| WeatherSystem | MakeScope |  | Scope | Jomini Script System |
| WeatherSystem | Self |  | WeatherSystem |  |
| WillJoinCountryList | AccessSelf |  | WillJoinCountryList |  |
| WillJoinCountryList | GetJoinDefensive |  | unknown |  |
| WillJoinCountryList | Self |  | WillJoinCountryList |  |
| WorkOfArt | AccessSelf |  | WorkOfArt |  |
| WorkOfArt | GetCreationDate |  | CString |  |
| WorkOfArt | GetCreationDateTooltip |  | CString |  |
| WorkOfArt | GetCreator |  | unknown |  |
| WorkOfArt | GetCreatorName |  | CString |  |
| WorkOfArt | GetDefinition |  | unknown |  |
| WorkOfArt | GetDestructionDate |  | CString |  |
| WorkOfArt | GetFlavor |  | CString |  |
| WorkOfArt | GetLocation |  | unknown |  |
| WorkOfArt | GetModifierInfo |  | CString |  |
| WorkOfArt | GetName |  | CString |  |
| WorkOfArt | GetNameWithNoTooltip |  | CString |  |
| WorkOfArt | GetOrigin |  | unknown |  |
| WorkOfArt | GetOwner |  | unknown |  |
| WorkOfArt | GetQuality |  | CFixedPoint |  |
| WorkOfArt | GetQualityName |  | CString |  |
| WorkOfArt | GetQualityTooltip |  | CString |  |
| WorkOfArt | GetUITooltip |  | CString |  |
| WorkOfArt | HasFlavor |  | bool |  |
| WorkOfArt | HasKnownCreator |  | bool |  |
| WorkOfArt | HasModifier |  | bool |  |
| WorkOfArt | IsDestroyed |  | bool |  |
| WorkOfArt | MakeScope |  | Scope | Jomini Script System |
| WorkOfArt | Self |  | WorkOfArt |  |
| WorkOfArtType | AccessSelf |  | WorkOfArtType |  |
| WorkOfArtType | GetDesc |  | CString |  |
| WorkOfArtType | GetName |  | CString |  |
| WorkOfArtType | GetNameWithNoTooltip |  | CString |  |
| WorkOfArtType | GetTooltip |  | CString |  |
| WorkOfArtType | HasModifier |  | bool |  |
| WorkOfArtType | MakeScope |  | Scope | Jomini Script System |
| WorkOfArtType | Self |  | WorkOfArtType |  |
| uint16 | AccessSelf |  | uint16 |  |
| uint16 | GetUint |  | unknown |  |
| uint16 | Self |  | uint16 |  |
| uint32 | AccessSelf |  | uint32 |  |
| uint32 | GetUint |  | unknown |  |
| uint32 | Self |  | uint32 |  |
| uint64 | AccessSelf |  | uint64 |  |
| uint64 | GetUint |  | unknown |  |
| uint64 | Self |  | uint64 |  |
| uint8 | AccessSelf |  | uint8 |  |
| uint8 | GetUint |  | unknown |  |
| uint8 | Self |  | uint8 |  |
| void | AccessSelf |  | void |  |
| void | Self |  | void |  |