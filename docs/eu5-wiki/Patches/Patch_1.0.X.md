<!-- source: https://eu5.paradoxwikis.com/Patch_1.0.X revid: 29765 fetched: 2026-09-09 -->
# Patch 1.0.X

![Curly top.png](/thumb.php?f=Curly_top.png&width=288)

Europa Universalis 5

[Version history](/Patches "Patches")

[![DLC Fate of the Phoenix.png](/thumb.php?f=DLC_Fate_of_the_Phoenix.png&width=21)](/Fate_of_the_Phoenix "Fate of the Phoenix") Fate of the Phoenix

[1.3](/Patch_1.3 "Patch 1.3") • [1.3.11](/Patch_1.3.X#1.3.11 "Patch 1.3.X")

[1.2](/Patch_1.2 "Patch 1.2") • [1.2.1](/Patch_1.2.X#1.2.1 "Patch 1.2.X") • [1.2.2](/Patch_1.2.X#1.2.2 "Patch 1.2.X") • [1.2.3](/Patch_1.2.X#1.2.3 "Patch 1.2.X") • [1.2.4](/Patch_1.2.X#1.2.4 "Patch 1.2.X") • [1.2.5](/Patch_1.2.X#1.2.5 "Patch 1.2.X")

[![DLC Europa Universalis V.png](/thumb.php?f=DLC_Europa_Universalis_V.png&width=21)](/Europa_Universalis_V "Europa Universalis V") Base game

[1.1](/Patch_1.1 "Patch 1.1") • [1.1.10](/Patch_1.1.X#1.1.10 "Patch 1.1.X")

[1.0](/Patch_1.0 "Patch 1.0") • [1.0.2](/Patch_1.0.X#1.0.2 "Patch 1.0.X") • [1.0.3](/Patch_1.0.X#1.0.3 "Patch 1.0.X") • [1.0.4](/Patch_1.0.X#1.0.4 "Patch 1.0.X")
[1.0.5](/Patch_1.0.X#1.0.5 "Patch 1.0.X") • [1.0.6](/Patch_1.0.X#1.0.6 "Patch 1.0.X") • [1.0.7](/Patch_1.0.X#1.0.7 "Patch 1.0.X") • [1.0.8](/Patch_1.0.X#1.0.8 "Patch 1.0.X")
[1.0.9](/Patch_1.0.X#1.0.9 "Patch 1.0.X") • [1.0.10](/Patch_1.0.X#1.0.10 "Patch 1.0.X") • [1.0.11](/Patch_1.0.X#1.0.11 "Patch 1.0.X")

**Patch 1.0.X** are all patches beginning with 1.0.

## 1.0.0

1.0.0 was the release version, and as such had no changelog. Its checksum is *e7e4*. The game was released on 2025-11-04[[1]](#cite_note-1).

## 1.0.2

Patch 1.0.2 was released on 2025-11-06[[2]](#cite_note-2) with checksum *ae68*.

### Highlights

* Fixed more than 350 bugs (not counting Translation-related number of errors fixed, which you can find in its own section)
* Fixed the scope type for Achievement triggers, which was triggering several errors, along with many other minor fixes to them; also, activating the "Allow Ahistorical" game rule now doesn't block getting Achievements
* Fixed several CTDs
* Made several fixes to Personal Unions, especially to AI Union Law voting, making it less spammy
* Fixed an issue making the Timurid spawning player event to not work properly
* The 'Claim French Throne' peace treaty during the 'Hundred Years' War' situation no longer requires you to be senior in a PU already
* The events that convert Hussite pops for Bohemia during the 'Hussite Wars' situation are now converting much more aggressively and impactfully
* Japanese clans will now properly lose their clan's foreign buildings when being landed after the 'Sengoku Jidai' situation starts

### Gameplay

**Government:**

* Navy-based countries now shatter just like army-based ones when they lose all their units
* The ruler's administrative ability now reduces the proximity distance
* Conquistador Countries now always have a Crown Estate
* The 'Union of Crowns' succession now properly displays the ruler of the other country as your heir. Also, added additional scores for the male descendant of your ruler, as they should have priority over any foreign king
* Location cabinet actions now finish in the first month instead of waiting an extra one

**Economy:**

* Made the "Fruit Wineries" production method correctly use Fruit instead of Rice as input.
* Fixed Estates building roads across straits
* Fixed Estates losing all of their gold on monthly ticks if the loan capacity was below the max loan capacity
* Fixed a bug with automated trade capacity not being properly updated when the overall merchant capacity goes down

**Production:**

* Rebalanced the Bey Fortress Building Manpower

**Diplomacy:**

* Civil War countries can no longer be invited to Defensive Leagues
* Added a diplomatic action for Overlords to intervene in a Subject's war.
* If a Subject is in a War without their Overlord helping, they get reduced Subject Loyalty
* The time before Overlord can join the Subject's civil war has been reduced from 12 months to 6 months
* Subjects can choose not to call in their overlord into wars they start.
* Subject Type 'allow\_declaring\_wars' is now a trigger instead of a simple yes/no
* Fixed the 'Annul Treaties' treaty name, and it no longer cancels subjects
* Personal Union peace treaties are no longer usable on non-war leader participants
* The 'Support Heir' country interaction can now only target characters who actually have the target country's eligible heir religion
* Impact of Unions on Royal Marriage acceptance now scales with the power of the union members
* Fixed antagonism with distance
* Fixed an instance where the player is not informed that their ally broke the alliance between their countries
* Conquistadors now have a Diplo range before they conquer anywhere
* Marriage Unions now properly break when one of the couple dies
* Updated the leaving message for Marriage Unions to no longer give the "the country has joined a new Union" reason for leaving a Marriage Union

**Military:**

* Chase army objective created via right click on army now properly ignores enemy strength
* Fixing space issues in the War popup.
* Hostile troops have a further impact on prosperity.
* Declaring a war against a subject and having good relations with the subject and overlord no longer gives the good relations penalty twice

**Other:**

* The modifier utility from policies is now only a 1/5 as an important factor for voting for a policy for the AI
* The parliament of the Unions now maintains parliamentary support when it merges with another union
* Colonies now have a force flip threshold at 50k instead of 25k.
* Conquistadors should always be Catholic

### Content

**Setup:**

* The Earldom of Ulster is restored to being a Vassal of the Pale
* Changed back the raw material of the Jáchymov location to Lumber, so the Bohemian DHE "Silver Found in Jáchymov" makes sense once again.
* The starting Exploration Template for Serbia, Bulgaria, and others now correctly has the Libyan Sea Area discovered
* Moved dynasties from the 'Red Turban Rebellions' to be in the setup instead of being created during the situation, so that they can have properly scripted coats of arms
* Moved the city centers of Waren, Gdansk, and Malbork to their proper position
* Added a few Danish dynamic names
* Corrected the father of Nyinamwiru of Kitara

**Situations:**

* The End of the 'War of Religions' now makes the HRE choose a new leader country
* Clarified the tooltip for the vote progress for the 'Western Schism'
* Demand Member Removal will have a shorter truce timer to give the leaders more flexibility when declaring the 'War of Religions'
* The 'Claim French Throne' peace treaty during the 'Hundred Years' War' no longer requires you to be senior in a PU already
* Fixed an issue with the tooltip of the 'Sponsor Spiritual Protection' modifier's cost breakdown for the 'Great Pestilence' Situation
* Fixed an issue with the tooltip of the 'Paying for Clerical Services' modifier's cost breakdown for the 'Black Death' Situation
* Fixed an issue with the tooltip of the 'Procure Remedies' cost breakdown for the 'Black Death' Situation
* Fixed an issue that hid the "Repeal Segregate the Infected" action from the 'Great Pestilence' panel
* The 'Great Pestilence' number of deaths is now displayed correctly in its panel
* 'Embrace the Reformation' action now removes the character modifier for 'Placitum Regium'
* Fixed an issue with erroneous pop-up messages after performing actions in the 'Great Pestilence' situation
* Expanded the duration of the 'Great Pestilence Situation' so it only ends when the most important regions have been infected
* Hundred Years' War: The CB provided to England/France now allows taking land owned by subjects of either war leader, even outside the French region
* Using the "Assist Foreign Revolutionaries" Generic Action during the People's Uprising Situation is no longer visible for Non-Revolutionary countries
* Using the "Suppress Foreign Revolutionaries" Generic Action during the People's Uprising Situation is no longer visible for Revolutionary countries
* Using the "Suppress Foreign Revolutionaries" Generic Action during the People's Uprising Situation no longer targets civil war rebel countries
* The "Negotiate Member Removal" from the 'War of Religions' can no longer target the leaders of the other league in the situation
* Blocked the AI from 'Violating the Treaty of Tordesillas' if they are already unable to colonize
* Japanese clans will now properly lose their clan's foreign buildings when being landed after the 'Sengoku Jidai' situation starts
* The 'Hussite Wars' situation can now happen over an extended time period
* 'Western Schism' action 'Show Unity of Faith' is now slightly worse at converting people
* The 'Treaty of Tordesillas' action "Claim Conflicting Area" will no longer display broken requirements when no valid area exists
* Restored the "Situation Breakdown" texture in every situation panel
* Reordered the effects of introducing new goods in the Columbian Exchange situation in order to improve clarity
* 'Negotiate Member Removal' can no longer target the Emperor of the HRE
* The 'Claim French Throne Peace Treaty' in the 'Hundred Years' War' Situation now requires England to have a greater Great Power Score than France
* Reorganized the elements of the 'Columbian Exchange' Situation UI to fall in line with how other situations' elements are ordered
* The 'Italian Wars' situation action "Send Aid" now has a cooldown
* The 'Little Ice Age' situation 'Starving Provinces' hoverable icon, now correctly displays the list of starving provinces when hovered on
* The 'Little Ice Age' situation action "Enforce Rationing Policies" now has a correct tooltip in the "Select Market" screen
* Removed duplicate 'End Requirements' UI entry from the 'Golden Age of Piracy' Situation tab
* The 'Little Ice Age' situation now has a Hint shortcut button
* 'Grant Representation to Colonial Subject' can now only be used on subjects who have the appropriate policy to change
* Blocked Sea Areas from being claimed or swapped in the 'Treaty of Tordesillas' situation
* The action 'Raise Bey Fortress' in 'The Rise of the Turks' will now only be possible when you are not at war, have no loans, and are not in bankruptcy
* The action 'Raise Bey Fortress' in 'The Rise of the Turks' now has better instructions for the AI, and it will now better evaluate the proximity of the chosen location as well as its own treasury and income
* The 'Raise Bey Fortress' action from The Rise of the Turks now costs 100 gold instead of 400
* Added better calculations for the country-to-be-vassalized in the relevant event of the 'Rise of the Turks'
* The events that convert Hussite pops for Bohemia during the 'Hussite Wars' situation are now converting much more aggressively and impactfully
* Fixed the Hint button for the 'Rise of Timur' Situation

**Disasters:**

* Fixed an issue with the 'Decline of Empire' disaster event making your capital rebel

**International Organizations:**

* The AI will now only start votes on policies if they are not too happy with the current policy in the IO. This should eliminate instances of the IA flip-flopping between two policies
* The AI will now only try to push for a Seniority in the Union if any other member is a neighbor to them
* Senior Partner AI will no longer initialize policies which federalizes the union
* The rejection of a Policy Vote will no longer remove the enacted law if the law must have a policy
* Increased the Government Power cost of the Lordship of Ireland casus belli
* Fixed bug where the Lordship of Ireland's 'Bestow Lieutenant Status' was not selectable
* IOs such as the Autocephalous Patriarchate will no longer have their laws revoked by the AI for the sake of it
* Leaders of Autocephalous Patriarchates can't join other ones
* Subjects in the Lordship of Ireland can declare their own wars on non-members in the Ireland region
* The Country interaction "Assert Regency" is now the only way for the leader of the Lordship of Ireland IO to become the regent of rulerless members of that IO
* Simplified the script for the Policy Vote for IOs so that policy votes are no longer getting disturbed when the proposer country is no longer valid to propose the policy
* Added proper reasons for countries to join Autocephalous Patriarchates
* Fixed an issue where voting for an already ongoing policy vote would be impossible for a country that assumes seniority mid-vote
* Policy voting power can no longer be negative
* Demand unlawful territory can no longer be used in civil war countries
* Localized two missing Bias strings, "Princes Oppose to Policy" and "Emperor Wants this Policy".
* The "Unified Succession Law" policy for Unions will now also update the Heir Religion so all union members have the same policy. The Negotiate Inheritance Law diplomatic action is updated accordingly

**Events:**

* Nerfed the very high life expectancies of some French DHE characters.
* Fixed migration caused by the 'Plight of Cahokia' event resulting in extreme depopulation
* Added missing background to the Byzantine "Corpus Juris Civilis" event.
* Fixed an issue with the event 'Wave of Sinicization' (societal\_values.2301.a), which did not properly convert the culture of the selected pops
* Adjusted triggers of the 'Treaty of Hadiach' (flavor\_plc.14) event to make it more likely to fire
* The Events '[Country] Praises our Conviction' (western\_schism.11 and .12) now apply a 6-month cooldown to prevent them from repeatedly triggering
* The 'Robber Barons' modifier for Brandenburg is now more in line with other effects like it
* The "Failed Promises" event (societal\_values.404) will now give the Religious War casus belli instead of making you declare them immediately
* Nerfed the Fort Defense of the Lighthouse of Alexandria to 10% instead of 25%.
* Events for the Muscovite construction projects Kremlin and Uspensky Sobor are now less demanding on the market stockpiles
* Dubious Spending Practices event no longer applies the same effect twice to remove a character from the cabinet
* Election Events for republics no longer mention the Ruler Title of the previous ruler
* Event "The Two Sicilies Reunited!" (flavor\_nap.280) will also work correctly if the player has a Regency
* The event "The [Ruler] Embarrasses the [Court]" (random\_event.59) has now less impact on legitimacy and requires a worse diplomatic monarch to trigger
* The graduates of the Collegium Helveticum are now better
* The Papal Events around the Sistine Chapel now check that you are not in a bankruptcy and can cover at least part of the cost
* Replaced the interregnum requirement for the Wittelsbach House union events with any regency that is not a consort regency
* The "Rise of Timur" (flavor\_tim.8) will now automatically start the Rise of Timur situation, so there is no awkward situation of being able to conquer locations without having the autoflip from the Situation
* Fixed an issue making the Timurid spawning player event to not work properly

**Government:**

* Buffed the 'Iron Ring' reform
* 'Landholders' Policy will no longer display as empty if your country has no noble estate
* Fixed opposite country modifiers being true (estates being allowed/blocked from commanding)
* 'Strengthen Rights of Burghers' and 'Curtail Burghers' privileges descriptions now display the correct estate
* The 'Deal with the Robber Barons' cabinet action now has a primitive ai\_will\_do, so that AI Brandenburg will no longer be stuck in constant misery due to their robber barons
* Joining the Order of the Swan now grants monthly religious influence
* Moving the monthly check and fix for the 'Union of Crowns' succession, being valid to have or not to have a 4-yearly check for the sake of performance
* Character Interaction 'Prefection' is now enabled for both crown estate characters and nobles
* Leaders of mercenaries are no longer eligible to be rulers or regents
* Renamed Kanton to Canton
* A formed Switzerland Republic will now use the name Confederation

**Economy & Production:**

* Made the Portuguese Feitoria building a proper foreign building, and adjusted its modifiers

**Society:**

* The Islamic religious action 'Study Islamic Texts' will now require the player to have more than 50 Jurisprudence instead of less

**Diplomacy:**

* Subjects with Limited Diplomacy cannot declare a No CB war
* Colonial Nations can declare war against countries with capitals on their own continent
* Subjects with the Military Order reform can declare their own wars against neighbouring heathens
* Rebel countries can no longer ask for Free City Rights
* Adjusted AI weights for considering royal marriages due to union size
* 'Ask for Election Support' is no longer spammed by the AI. Additionally, the AI will only try to ask for election support when someone is already supporting them
* The Demand Unlawful territory no longer does nothing when it tries to target a cored province. Additionally, it now certainly only targets provinces in the HRE
* Requirements to upgrade to Duchy now point to the correct diplomatic action for HRE countries

**Geopolitics:**

* Added a new tooltip for Conquistador armies
* Removed the manpower from the Conquistador conquest event
* Conquistadores now start with some initial money

**Advances:**

* Fixed the 'Cothon' Carthaginian advance, so it now correctly reduces the Ship-building Speed by 20%.

**Achievements:**

* Activating the "Allow Ahistorical" game rule now doesn't block getting Achievements.
* Unlocked tooltips when hovering over Achievements
* Fixed the description of 'The Spice Must Flow'
* Corrected the 'Manchurian Candidate' achievement description to use the in-game terminology
* Fixed the 'Brothers in Arms' achievement to be more accurate with its conditions
* Added a missing requirement to "The Navigator" achievement for Portugal
* Rewrote the requirements for the "Lion of the North" Achievement
* The Achievement "Cold War" now requires 2 years of no conflicts instead of 3
* The Achievement "Break the Yoke" now correctly applies to starting members of the 'Tatar Yoke' International Organization
* The Achievement "Break the Yoke" is now available for Muscovy
* The Achievement "Crusader Kings" can also be obtained by winning a Jihad

**Other:**

* Removed a broken dynamic tooltip from the 'Peoples' Uprising' situation Hints
* Excommunication no longer blocks its own request to lift the action completely
* Declining vassalage through the 'Demand from The [Country]' (rise\_of\_the\_ottomans.102) event now imposes a 5-year cooldown, so the same country is not picked again for that duration
* HRE will choose a new leader if the Emperor changes the government type
* Being an Archbishop Elector blocks most government type conversions

### Onboarding

**Missions:**

* Made it so that completing the Manufactory or Trade Focuses hides the other path, as they are mutually exclusive

### Balance

**Government:**

* Cores now decay for countries who are no longer relevant after they cease to exist.

**Economy:**

* Prosperity decline from being occupied has been reduced from 5% to 1% per month.
* Impact from Bankruptcy now scales down over five years instead of being the same for five years
* Bankruptcy no longer impacts prosperity.
* Price increases for building above the support limit in a location now take the construction queue into account as well.

**Diplomacy:**

* You can now always call in an ally in a war, even beyond the first year.

**Military:**

* Fixed so that only progressing sieges and occupations can block levy recruitment, not a single unit.
* Fighting a war together now grants explicit food access.

**Advances:**

* Advances for Navarra are now more in-line with other countries.

**Other:**

* HRE Balancing of Military Contribution
* Nerfed some sources of Monthly Prosperity from Soyurghal Governor reforms, and 4 event modifiers.

### AI

**Government:**

* Optimization for increasing area control

**Diplomacy:**

* AI will no longer release tiny subjects
* AI is now better at releasing and/or giving away land with 0 proximity to vassals
* AI will no longer use the 'Invade Neighbor Beylik' action, which gives CBs on neighbors, with a truce
* AI can now annex multiple subjects at the same time as long as the opinion of ongoing annexations is maxed out and is not progressing slower than base speed
* AI Ottomans are now more likely to use the Invade Neighbor action to get casus belli
* AI will now prioritize attacking neighbors that they have CBs against, rather than making them subjects via diplomacy
* AI will no longer send alliance offers that it would break immediately after

**Economy:**

* Fixed AI and automation changing the economy slider every when at war and negative income
* Added AI modifier support for the harbor capacity modifier
* AI now specifically makes sure to evaluate building market center buildings in the actual market centers instead of testing in random cities
* Fixed an issue where AI could get stuck in their economy when trying to build buildings costing special currencies like religious influence that they could not afford
* Fixed an issue where AI tried to convert culture in locations where it wasn't possible

**Military:**

* AI will now avoid bad weather with its fleets
* Fixed an issue where AI wanted to repair levy ships
* Fixed an issue where AI armies could get stuck waiting to siege a castle that was defended by a stronger force
* Lowered the priorities of certain naval objectives so that transporting units for land objectives is done first
* Disloyal subjects will now continue to merge their small armies during war

### Interface

**Icons:**

* Updated icons in Settings
* Fixed the unlock unit advances not showing the unlocked unit in the advance icon
* Added icon for unknown artist
* Updated icons for types of artists
* Fixing the 'Military Stance' icon language
* The icons for "Execute Ruler" and "Humiliate" are no longer missing on the peace panel
* "Carpet siege" military objective and "siege" status no longer use the same icons
* Fixed icon in "Assimilate Area" modifier”
* Updated the gold hue of the icons in the settings menu to be less green and match the gold hue of the rest of the UI more.
* Removed the shadow of the African pop icons to follow the same look as the other pop icons.
* Reduced the shadow of one of the religion icons to match the shadows of the rest of the icons in the panel
* Fixed the missing icon for the 'Change subject military stance' action
* Fixed the icon for 'Monthly Sailors'

**Map modes:**

* Added map legend keys for the 'Hussite Wars' situation.
* Added "Province Capital" map markers so they are visible in higher zoom levels when the owner is at war with the player or when the player owns them
* Fixed map names for rebel countries

**Alerts:**

* Fixed the IO vote resolution alert
* Fixed the "Sue for Peace" alert icon and tooltip
* Standardized icon size in Situations
* Added an Alert to prompt Players to 'Improve Education' of the ruling Dynasty's children
* Fixed the IO Alert so it opens the correct tab
* Recommended Country Blue Alerts flag fix and minor typo.
* Fixed the negative opinion displayed as positive in the diplomacy declined message
* Fixed Situations ceasing to spam Resolutions after they are over

**Panels:**

* Fixed title for multiple selected armies and navies
* Fixed the unpause button being out of bounds
* Fixed ruler history entries when the rulers are countries
* Fixed the Ruling history for foreign countries not opening
* Added the possibility to add or remove all subunits of type/category to the newly created unit in the single unit panel
* Added Ctrl+Click functionality to move all subunits with the same unit type to another flank in a single unit panel formation
* Removed the possibility to move to reserves when using the current flank movement button in single unit panel formation
* Adapted Diplomacy scrollbar to its containers
* Added colored unit illustrations in the unit regiments view
* Adjustment on Battle Map Widget Flags position and layout
* Added the possibility to expand and collapse all items in some lists that need (production main lists / food locations list / laws list / trades list)
* Making Ruler header, CoA, and ruling History consistent between Government, Foreign Panel and Lobby selected Country
* Fixed many inconsistencies on Seazones and Corridors and the Salt Pan and High Lakes tooltips
* Fixed scroll and toggle issues for all disasters
* Remove overlapping widget from event window
* Added the lacking inputs tooltip in the building type icon in the buildings macrobuilder (same as its button)
* Fixed the behavior of the tick on war declaration (it now shows the tick if the country is joining)
* Added disabled art for non-Started Mission Families
* Improved the Catholic Church Resolution interaction
* Improved Walkthrough accessibility in Missions Panel
* Display integration progress in the province widget instead of a placeholder
* Fixed Mercenary buttons not updating the enable condition until hover
* Fixing icons, unlocking government reforms fit inside their containers
* Fixed unit actions shortcuts not working
* Fixed the amount of diplomatic relations before the extra number with the tooltip
* Fixed text out of bounds in World Map and MP-related texts (Open to Multiplayer panel, Selectable Countries panel, and Game Rules panel)
* Unified behavior for the open diplomacy foreign country panel. Now, clicking on a flag always opens the Diplomacy panel. Diplomatic actions panel will only be opened on specific go-to buttons and when the diplomatic actions macrobuilder is open.

**Outliner:**

* Fixed Multiplayer "Players" entry

**Tooltips:**

* Fixed Current Navy Strength tooltip
* Made the institution spawn chance number look hoverable
* Explained the meaning of location rank icons in their tooltips
* Fixed the display of Unique Advances for Other Countries in the Foreign Country Panel Advance's tooltip
* Added reasons of non-availability to the tooltip of the diplomatic action 'Use favors to call in to War'.
* Added Information in Tooltips about the effects of Imperial Authority on Voting Behavior and Contributions
* Fixed Economy Maintenance tooltip Min and Max
* Fixed location maximum buildings, saying it was about built levels instead of staffed buildings
* Invite religious figure static modifiers shown
* Added a subunit culture coloured illustration in the subunit icon
* Effects changing pops now show how big a percentage of the original pop is affected as well.
* Fixed broken localization in the average satisfaction tooltip
* Fixed the tooltip in the Buildings panel
* The International Organization Payments tooltip is now updated correctly every month.
* Added Army Strength, Navy Strength and PowerRank in Antagonism Alert
* Added missing game concept
* Fixed the Cultural Hegemons trigger showing wrong information
* Remove the artist skill entry from the character's tooltip if the character is not an artist
* Added missing localization for any\_overlord\_or\_above\_all trigger
* Added the Christianity religion group tooltip icon
* Fixing tooltips in the Automation Panel
* Subunit Definition tooltips now correctly show the unit icon in the header
* ShowSpecialStatusPluralName now displays the proper description for the special status
* The Heirs in line of succession now show in brackets how high their score is to be eligible
* Added better alignment for building and demand tooltips
* Added breakdown of the countries that can join a coalition on the antagonism tooltip
* You now see the size and a breakdown of the decay of maritime presence.

**Flags:**

* Flag textures fit better inside frames without overscan
* Standardized Miniflag templates in the script
* Reworked and expanded the setup for the early formable Italy flag variants

**Illustrations:**

* Corrected Sanchi stupa location and moved it from Sironj to Bhopal
* Fixed Stonehenge position so it´s not hidden by the town and city illustrations
* Fixed the Earthquake events having the wrong texture and missing on events 1000, 1001, and 1100
* Fortifications illustrations weren't always showing, so fixed their triggers and metadata
* Fixed some noise on Deccan's loading screen
* Added some animals to the Iroquois loading screen
* Made North German fortifications more visible
* Stopped showing commander/admiral/artist backgrounds behind rulers
* Fixed some issues with Societal Values illustrations
* Fixed the St Peter's Basilica illustration not showing
* Updated Characters for angry and happy clergy and happy peasants for the Syrian GFX illustrations
* Adjusted Disaster illustrations, reducing their file size, and making characters have better proportions on smoe
* Fixed several Disaster event illustrations, so now they match

**Other:**

* Fixed panels loc in Back queues
* Dynasties search list empty text
* Now, when toggling the production tab, if there is a foreign market selected, it will autoselect the default market. Also added right-click behavior to select the default market in the open market filters button
* Added a highlight on the map when hovering selectable CBs in the declare war screen.
* Fixed building icons in the location panel being 1 pixel off-center.
* Fixed automation options gameflows and layout
* Corrected behavior on the “Assign new explorer” button
* Added a Sort by Debt for diplomatic actions
* Added a new background for the penalties icon
* Added Sort-by for Maritime Presences to Sea Zone View
* Removed unnecessary spacing between the bullet points of the 'Diplomatic Limitation' game concept.
* Fixed the localization of Change Government Type Price Modifier.
* Using now more descriptive trigger for call\_parliament
* The Spy Network discovered message will no longer be shown for undiscovered countries.
* Fixed consistency between Ingame Main Menu and frontend Main Menu
* Panel header backgrounds adapted to be vertically tileable on graphical culture textures
* Fixed not being able to transfer the occupation of a subject in the location card
* Add paused by event checks to pausing/unpausing logic
* Fixed the Main Menu Carousel not appearing
* Finish date is updated correctly after being stalled
* Fixed old icons in Game Rules tooltips
* Fixed the tooltip for Propose Royal Marriage, mixing the names of the giver and the recipient
* Tweaked multiplayer chat start position
* Fixed Dynasties filters
* Fixing Mission tree cards layout and improving walkthrough accessibility via Agenda and Missions Panel
* Added foreign flag to foreign constructions in map markers
* Fixed combat modifier tooltips looking like concept tooltips
* Improved performance when opening the World Map menu in saves with very large countries
* Added shortcut to individual cards in select objective
* Fixed loading screen frame sides
* The Raise Levies button in the Military panel is now available at all times.
* Improved the concept for the Provincial capital to make clear it is automatically designated
* Renamed the foreign trades filter to external trades, since it doesn't refer to the owner of the trade, but the market origin
* Added observer and flag for observers in the Lobby
* Made the Max War Exhaustion modifier show as green, since reaching the cap forces you to capitulate, so having a higher ceiling is good
* Improved tooltips for war exhaustion to explain that reaching the max during war forces countries to capitulate
* PopType buttons in the macrobuilder now have the poptype color to help with the association
* Specific RGO Location modifiers like the Falun copper mines are now visible on the RGO mapmode
* Expanded the concept of supported building levels to explain that empty buildings don't count towards the limit
* Made the building cards in Buildings > Cards display more consistently in looks and size with their Location panel counterparts
* Adjusted the achievement Grand Coalition icon so the hands have better rendering
* The game doesn't remember that you were an observer when you leave a game
* Fixed to avoid having a dead country preselected in the lobby when opening it
* Fixed how the outliner for Conquistadors
* Alerts for Buildings and RGOs Missing employees have 2 different icons now
* Added a banner to show when a disconnection has started
* Fixed country preselection in lobby when loading a save and resyncing
* The horizontal banners in the battle panel are now green on the player's side
* Rephrased the automated maintenance buttons to better convey what they do
* Added better alignment for building and demand tooltip
* Fixed a bunch of typos in the tutorial
* Added default tab in diplomacy panel to be "diplomacy". If the panel is already open, it will not change the subtab when changing the targeted country. Also, alt-click on the default mapmode will open the diplomatic actions macrobuilder with that country

### Modding

**Script:**

* Added the on\_union\_merging on\_action, which is called just when any union is involved in any potential merge with any other union or when it is about to accept new members

### Translation

**Polish:**

* Fixed the GLH adjective
* Fixed 1281 bugs in total for Polish

**Spanish:**

* Fixed 162 bugs in total for Spanish
* Fixed the order of variables in country names
* Fixed the \_suffix member was
* Fixed the \_suffix member that was missing from several variables
* Fixed the wrong article for pop\_types
* Added the missing articles to a lot of titles and country ranks

**French:**

* 259 bugs fixed in total for French
* Fixed incorrect variable used or typo within variable
* Added a variable-generating placeholder, even though consistent with the source English
* Added #L ...#! tags so the full word is in the same colour, whenever we appended plain text to a variable, to comply with grammar
* Fixed article issues before variables
* Fixed wrong uses of estate-related variables (e.g., clergy vs clergy\_estate)

**Brazilian:**

* 124 bugs fixed in total for Brazilian

**Chinese:**

* 278 bugs fixed in total for Chinese

**Korean:**

* 85 bugs fixed in total for Korean

**Japanese:**

* Fixed 72 bugs in total for Japanese

**Turkish:**

* 418 bugs fixed in total for Turkish

**German:**

* 280 bugs fixed in total for German

**Russian:**

* Fixed 487 bugs in total for Russian

### Miscellaneous

**Bugfixes:**

* Fixed potential crash in the market view
* Fixed an issue where empty countries were still around in saves if they were original tags that lost a civil war.
* Removed all invalid usages of Cede Province Treaty Desire and made it based entirely on locations
* Fix some dead countries staying in memory
* You can no longer get achievements after the end date
* Fixed is\_subject\_of trigger being true if the overlord doesn't exist, making sinicized\_vs\_unsinicized Societal Value available to all countries
* Fixed incorrect loc for installed DLCs, checking ownership instead.
* Make sure to initialize the mods api cache when getting the activated or installed status.
* Fixed the first Red Turban war starting with 100% warscore due to locations not having their integration status updated while executing the add core effects
* Fixed text characters using the incorrect localization files for languages other than English
* Fixed a bug removing all votes from resolutions in the HRE if they weren't made by the resolution proposer
* Early out if we failed to load the savegame, and avoid doing recalculation of cached data and save repairs.
* Fixed an issue where the map was sometimes rendering incorrectly after changing settings.
* Siege penalties are now actually applied to the location.
* Fixed great powers above 8 not showing the proper banner and tooltip
* Fixed broken tooltips in the great power mapmode
* Fixed a few cases where families did not move with rulers to a new country.
* Fixed a few issues with civil wars and forming new countries, which could eventually cause countries to rise up with the same name

**Europedia:**

* Fixed multiple game concepts not have a valid texture

**Settings:**

* Fixed some button texts overflowing from the button in several languages.

**Other:**

* Implemented uninitialized member variables of CConstruction with TNullObject.
* Fixed some button texts overflowing from the button in several languages.

## 1.0.3

Patch 1.0.3 was released on 2025-11-10[[3]](#cite_note-3) with checksum *94d0*.

### Interface

**Panels:**

* Fixed Resolutions tab not showing correctly in International Organizations
* Fixed laws tab not showing
* Fixed issue with Parliament tab not showing translation

**Russian:**

* Adding support for custom localization fixing the function \_icon and \_with\_icon affecting the Russian tutorial.

**Settings:**

* Added a setting to prioritize max tick speed over FPS smoothness

**Bugfixes:**

* Fixed a crash related to failing to open files for generating checksum.
* Added more data to crash reports related to currently consumed VRAM, renderer, driver versions to help track hardware related crashes.
* Fixed a VRAM memory leak related to gui animations.
* Fixed a crash related to Camera.
* Fixed a crash related to CPUs missing AVX2 support for compressing textures.
* Fixed some issues related to language selection screen.
* Fixed a crash related to chase enemy unit objectives.
* Fixed a crash related to refunding construction costs to now non-existing countries.

## 1.0.4

Patch 1.0.4 was released on 2025-11-13[[4]](#cite_note-4) with checksum *f98c*.

### Bugfixes

* Fix crash related to AI evaluating chase objective
* Fixed an issue with making ironman savegames in French
* Fixed an MP crash related to persisting locations in commands
* Fix crash in combat tooltip
* Fix crash in alert about trade capacity
* Fix crash related to try to set locations from the save file
* Fixed desync related to generating names on the map.
* Fixed an issue related to celtic marriages not triggering properly
* Fix a crash related to purging countries from memory
* Fix crash related to effect set\_to\_limited\_random\_stat, also fixed the formula for the range of the random stat
* Fix crash related to effect transfer\_yearly\_gold
* Fixed a crash related to countries losing isolated land
* Fixed a crash related to trade graphics generating along invalid paths
* Fixed a crash related to colonial migrations
* Fixed a crash related to sorting interaction targets
* Fixed so that failing to initialize vulkan automatically tries to use DX12 instead
* Fixed a crash related to selectable items in government laws panel
* Fixed a crash related to invalid war goal types and casus bellis
* Added more information to crash dumps regarding VRAM
* Fixed a crash related to negative animation start times

## 1.0.5

Patch 1.0.5 was released on 2025-11-17[[5]](#cite_note-5) with checksum *cdab*.

### Highlights

* Fixed more than 620 bugs
* Fixed the issues with the Imperial 'Demand unlawful territory' action, and the HRE Emperor getting tons of random locations across the HRE
* Severely tuned down the AI demands of a new 'Mutual Defense Law' in Defensive Leagues and other IOs
* Situations: Several improvements for the 'Rise of the Turks', 'Hundred Years' War', 'Red Turban Rebellions', 'Italian Wars'
* Several fixes for the Middle Kingdom IO, and the Chinese Treasure Fleet feature
* Rebalanced the starting Food balance in the Andean region, making Qusqu and its neighbors more playable at game start
* Added Alerts for: Lack of Commanders (green in peace, yellow in war), Devastated Locations, Available Policies, a green one for Pops missing goods and other Alert toolip improvements

### Gameplay

**Government:**

* Low righteousness (Confucianism mechanic) should no longer be an unescapable deathtrap.
* Control will not drop again
* The cost to abdicate is now reduced by age.

**Economy:**

* Some things impacting the food consumption for peasants now also impact the laborers.
* Pops now demand 10% more goods if they're produced in the local market.
* You can now decide if you want to pay for food or not.
* Going bankrupt now reduces the inflation by 25% of the current value, just like in EU4.
* Repeated bankruptcies will not tank control
* Trade Maintenance is now 10 times as big as before.
* Fixed bug where new countries don't get a proper economy
* Portuguese feitoria buildings can be built again.
* Fixed a bug where the estates would never invest money into loan capacity for your country if the expenses were above a threshold.

**Society:**

* Pops will not demand some food goods if they're not locally produced.

**Diplomacy:**

* Fixed wrong countries getting trust from ceding unoccupied areas in peace treaties.
* Barred subjects from asking to lift excommunication to avoid spam
* The Grant Independence peace treaty now grants independence to ALL subjects who have joined the independence war against their overlord.
* Character Marriages will now only update Marriage Unions instead of all Unions, which could lead to weird union behaviors.
* International Organizations will now properly check the can\_bestow\_trigger when they automatically bestow a special status.
* Power Projection now impacts the great power score
* Military Order vassals can also declare war on Heretic religions that they have a Negative or Enemy view of, in addition to Heathens.
* The dynastic power in international organizations (such as the HRE) is now properly calculated after loading a save file instead of having to wait for a monthly tick to have this data cached in
* The total population of international organizations (such as the HRE) is now properly calculated after loading a save file instead of having to wait for a monthly tick to have this data cached in
* Subjects now count for the border requirement of selling and buying cities
* Added more reasons to accept Threaten War diplomatic action
* Fixed positive reasons to accept alliances when the actor has high antagonism. Added similar reasons to defensive leagues
* Historical tags will not be purged immediately anymore.
* Subjects can offer Military Sponsorship if they do not have limited diplomacy.
* The Livonian Order can receive Military Sponsorship
* Rounded up slightly, from +0.3 to +0.33, the Diplomatic Ability Increase During Education given by the Ambitious child trait, to put it in line with the other similar modifiers.
* The modifier "Blocked from Creating Subjects" now properly blocks you from forming any new subject countries of any kind.
* The "Form Personal Union" peace treaty from the Claim Throne casus belli is now always visible. Before this, the peace treaty was only visible when you occupied the enemy capital, which led many to believe that the peace treaty did not exist.
* The Claim Throne peace treaty is no longer blocked by religious groups. This is particularly relevant for Lithuanian's casus belli on Volhynia.
* Colonial nations are now blocked from making their own subjects.
* The emperor can no longer force a white peace in a civil war in the Holy Roman Empire.

**Military:**

* In a new game, countries already in a war will have their navy levies already raised.
* Characters have less impact on the correct section chance when reinforcing a battle.
* Only the first unit in a battle always ends up on the correct flank.
* Drilling now reduces the morale of the army
* You now have to stay a bit longer in a battle before being able to manually retreat.
* Ruler being a General moves towards Belligerent and Land (and bonus Prestige if at war)
* Ruler being an Admiral moves towards Belligerent and Naval (and bonus Prestige if at war)
* Heir being a General moves a small amount towards Belligerent and Land (and bonus Prestige if at war)
* Heir being an Admiral moves a small amount towards Belligerent and Naval (and bonus Prestige if at war)
* Added the damage reduction information on unit categories
* Increased damage is done by 50% when regiments have engaged and there are no opponents that can fight them.
* Transports now end up in the reserves when you balance a navy.
* The Bombard phase now lasts 10 hours instead of 5 hours, and scaled earlier cannons to have a bigger chance to fire.
* Reworked how the levy combat power works, and exposed the values in more interfaces.
* Privateers are now a fair bit harder to get rid of.
* Armies no longer have food access in neutral countries.

**Geopolitics:**

* The number of Colonial Charter events no longer increases by the number of charters you have.
* Colonial Nations can no longer be in adjacent sub-continents, ie, no more colonial nations in North Africa..
* International Organizations will now use a new trait of policies in script called "reasons\_to\_join" to evaluate the impact of said policy on joining an IO. It will no longer consider the values that were used to determine when the AI wants to vote for the policy in the first place.

**Other:**

* Exploration now spread to the adjacent subcontinents after another X years
* How quickly exploration spreads now depends on which age, as it goes faster with each age.
* Balanced difficulty levels are a bit to make the game more fun.

### Content

**Map:**

* Stockholm's Skärgård (the seazone next to Stockholm) is made from the Inland Sea into the Narrows.
* Corrected the duplicity of 'Kamius' provinces by renaming one of them to 'Donetsk', which is according to its script key.

**Setup:**

* Added Slave Conversion, Sharia Jurisprudence, and Harem Law policies to the Ottomans at the start
* Correctly placed the unique location modifier 'Kremnica Gold Mine' in the location of Kremnica, and a typo in its flavour description.
* Denmark is no longer in danger of a disaster at game start
* Corrected the regnal numbers for Württemberg
* Guenther von Schwarzburg-Blankenburg now rules over both Schwarzburg and Blankenburg
* Adjusted the base development for the Xinjiang region and the Tarim area
* Wroclaw is again the capital of the Duchy of Wroclaw
* Corrected the city center of Prague
* Added a Market to Hatunqulla to improve the food situation in the Andean region
* ‘New Cahokia Golden Age' modifier reward now also gives +6 monthly gold income.
* Removed many starting Towns and Cities from the Andes Region to improve the Food Setup of the Region
* Jalayirids and Hulaguids start now at war
* Added the new name Rappold to the High German and Middle German Dialects
* Added ruler to the Free City of Nuremberg
* Added some starting alliances to the Japanese Southern Court
* Corrected spelling of Mörs to Moers
* Made the Flanders court language French
* Made Suakin and its ruler Shia
* Removed the ruler of Makuria from ruling Harla
* Added more Tin RGOs to the American continent
* Countries with the Mongol exploration template can now see the northern coast of Vietnam.
* Removed the 'Only Nobility as Leaders' Noble privilege as an already granted privilege at the start for the Catholic Military Orders, so they can assign Clergymen as generals.
* Fixed the Description of the Worship Patron God Tooltip of some of the Mesoamerican Gods
* Gajah Mada (Majapahit) and Orhan Gazi (Ottomans) now have amplified "Healthy Character" bonuses to help them live up to their historical death dates with relative certainty.
* Earldoms of Moray, Galloway, and Orkney start with the 'expl\_northern\_europe' explored locations instead of 'expl\_western\_europe'
* Lordship of the Isles gets Galley Lords reform and State Piracy policy
* Marie de Chatillon is no longer Muslim
* Added the Liang country in Yunnan
* The Knights now start with the "Privateer Contracts" Estate Privilege set
* Rodos now starts with a Dock building
* In England Ruling history removed repeated kings
* Added the 'Military Orders' Clergy estate privilege to both Portugal and Aragon at the start.
* Edward Balliol now starts with the unique 'Heir of Empty Coat' modifier, granting some additional life expectancy and parliamentary support.
* Modified some Raw Goods and Advances of Savoy for a better Diplomatic starting position against its vassals

**Situations:**

* Completely refactored the AI weights for the Rise of the Turks' Situation actions.
* Reduced the cost of the "Press Claims" action in the Rise of the Turks Situation
* The Rise of the Turks action "Inspect Fortifications" now temporarily raises control a little
* Fixed an issue with AI not using "Declare Oboedientia"
* Fixed the End Requirements of the Great Pestilence so they appear on multiple lines.
* Optimized gamespeed slightly during Reformation
* The Italian Wars action "Plan Campaign in Italy" can now be utilized better by the AI.
* The Italian Wars action "Plan Campaign in Italy" has now reduced its cost
* The Italian Wars action "Plan Campaign in Italy" can now target more countries.
* Added information about the effects of the Little Ice at the top of its Situation panel
* Added missing message types for Great Pestilence Actions
* Lowered the Price for the "Raise Bey Fortress" action in the Rise of the Turks situation
* Lowered the Price for the "Create Uc Bey" action in the Rise of the Turks situation
* The Hundred Years' War CBs now correctly grant the "Superiority" War Goal instead of "Take Capital"
* Decreased the Total Votes required for the Western Schism to progress to 250 times the total number of Cardinals, from the previous 300
* The Red Turban Rebellion will not be able to spawn if Yuan is already in a civil war.
* Red Turban Rebelions loyalist events will no longer be able to trigger multiple times.
* The Rise of the Turks Situation action "Raise Bey Fortress" can now be used in cities owned by Vassal or Uc Bey subjects.
* The Western Schism will now end with the correct ending effects, helping the Pope relocate to Rome if they win.
* The Rise of the Turks situation, Uc Bey subjects are now location-based countries instead of army-based
* The Rise of the Turks situation action "Create Uc Bey" now turns existing vassals into Uc Beys instead of creating new ones from your locations.
* Fixed an issue where clans being landed during the Sengoku would steal the last location of another clan, causing them a Game Over.
* Fixed some wrong logic in the deletion of Japanese clan buildings when they get settled during the Sengoku
* The cooldown for the Join a League action in the Italian Wars is now 5 years.
* The Leagues of the Italian Wars no longer have Defense Laws, as they are meant to always defend their own members.
* Countries within the Italian Wars situation will make better choices when it comes to joining Leagues within the Situation.
* Fixed the error in the conditions for ending the Red Turban Rebellions
* You can no longer manually invite countries to the Leagues of the Italian Wars, instead, they will join and leave on their own via the Situation panel's Join League action based on weighted diplomatic factors.
* AI will now be more likely to make a better choice as to which League to join during the Italian Wars situation.
* Fixed an issue that did not pick Ahis as the country to be vassalized after the event "The Fall of Ahis" option b
* You can no longer manually invite countries to the Leagues of the Italian Wars; instead, they will join and leave on their own via the Situation panel's Join League action based on weighed diplomatic factors."
* The ending event for the Little Ice Age will no longer randomly fire via the monthly event pulse.
* The AI is now better at participating in the Hussite Wars
* Added a check so that pops moved via the "Invite Turkic Migration" are of your religion
* The Rise of the Turks event "The Fall of [Bey Fortress Location]" will no longer occur because of a Civil War occupation
* Fixed an issue that did not attribute gold correctly when an Appanage used the first option of the HYW action "Demand Autonomy from the Kingdom of France".
* Limited Red Turban Rebellions CBs to be applicable in the territory of China.
* Added a new Hint for non-HRE countries in the War of Religions Hint

**Disasters:**

* Added some missing event icons to some Disasters
* Ensured that both the York and Lancaster dynasties marry their suitable male members so the War of the Roses can start.
* Simplified the requirements for the War of the Roses disaster
* The "Decline of Empire" disaster now has adjusted and better requirements to trigger and finish.
* Corrected the dynamic descriptions of "End of The Hook and Cod Wars" (hook\_and\_cod\_wars.100) event, so now the winning Faction and Estate are correctly aligned for each of the 5 different possibilities.
* Fixed a trigger of the "Muscovite Succession War" disaster that was requesting 2500% Rebel Progress instead of the now correct 25%, blocking it from starting.

**International Organizations:**

* Fixed an issue that caused the Chinese treasure fleet to break when visiting a country that got annexed
* Fixed the wrong trigger in the Relocate Autocephalous Patriarchate action
* When an Autocephalous Patriarchate is destroyed, its members will now try to join other Patriarchates before creating their own
* Added a custom tooltip for the ‘Death of the HRE’ event
* ‘Power of the Emperor’ description no longer displays broken keys
* Colonial Federations will no longer join their overlord in any of their war shenanigans.
* Leading the High Kingship IO no longer grants double the monthly prestige
* Fixed Autocephalous Patriarchates being able to change their tenets without enough religious influence.
* Made it no longer possible to grant the Shugo Office to the Emperor
* Fixed an issue in which the leader of the Middle Kingdom was not able to become emperor
* Added an action for the leader of the Middle Kingdom to exempt countries from tribute, removing them from the IO
* Only the shogun will be able to invite countries to the Shogunate
* Refined the AI voting behavior on policies in IOs even further and fixed several bugs where it wouldn't properly consider the currently implemented policy to compare it with the proposed policy
* The Enforce Religious Unity Action can no longer be used on countries that are otherwise blocked from conversion.
* Turned the "Overrule the Imperial Diet" from a resolution to a generic action in the IO frame. It also now allows you to overrule the HRE parliament, even if you are not voting for a policy change.
* Added a Casus Belli for the Holy Roman Emperor against non-members who vassalized Members
* Upon Revoking the Privilegia, Countries that refused to swear fealty will now also leave the HRE
* Demand unlawful territory action now requires any core to exist to return the locations to
* Reined in the AI nonsensical urge to repeatedly ask for changes in the "mutual defense" law of international organizations.

**Events:**

* The Call to Defense for All event now properly targets the country you are at war with and not your own people.
* The event Ravages of War (conquest\_mission\_events.5) now occurs only once every 6 months
* Fixed a typo in the event "Popularization of Silk Fabrics."
* Corrected a dynamic localization error in the description of the Swedish event 'The Nyckelharpa'.
* Increased the spawning of pops of Cossack culture
* The Ottoman events that moved the capital to Edirne or Constantinople now maintain some of the Proximity in Bursa via a location modifier
* The Rebellion of Johan Offesson will now be more likely to trigger
* The Polish Event "The Pacta Conventa" now has more realistic requirements to trigger.
* The Polish Event "The Nieszawa Privileges" now happens only when the Crown Estate is weaker than the Nobility Estate
* The event ‘A Neighboring Tactical Genius’ (personality\_events.58) will not affect the same ruler.
* Yuan rebels will no longer be able to call themselves Northern Yuan
* ‘Thuringian Count Wars’ Events can no longer target countries; Meissen is already at war with
* The German Migrations should no longer depopulate single locations as aggressively.
* The Acquisition of Landsberg Event Chain will no longer force the player to be annexed.
* The Inheritance of Sachsen Wittenberg will now correctly switch the player to Meissen before forming Saxony.
* Disagreeing Advisor no longer allows you to kill heirs or members of the Crown Estate.
* The Vornedskab Event now also affects the serfdom vs free subjects societal value.
* The Red Turban Rebellion event "Feinting Influence in Korea" will now kick Yuan / Korea out of any common wars before if Korea chooses to rebel against Yuan.
* The Ottoman Event "The Great Mosque of Bursa" (flavor\_tur.39) now offers better options.
* The Event "<Province> Converts to Islam" (decline\_of\_majapahit.7), part of the Decline of Majapahit Events, no longer fires repeatedly for the same province.
* The Ottoman Event "Coins in our Own Name" Now grants the minting threshold and crown power.
* Improved the 'Pressuring the English Enclaves' modifier for Scotland from the 'English Border Enclaves' event
* ‘English Border Enclaves’ Event now pushes Scotland towards Offensive and Belligerent or Conciliatory, depending on event choice.
* Added additional tooltips to 'The Sunset of Cahokia' event for clarity on how to achieve the 'Plight of Cahokia' and 'A New Cahokia Golden Age' events
* The event that spawns Lollardy in England now takes into account low pop satisfaction, high development, and high literacy when choosing how many pops join the initial conversion.
* Event reformation.2 ("A Priest has Translated the Bible into $language$") will no longer choose Latin.
* Minor grammatical fixes for some Treaty of Tordesillas events
* Fixed the Ingerd (Ottesdotter) Rømer character from the "Gyldenløve" (flavor\_nor.2) event, making it a female, and correcting her surname.
* Fixed an issue in the "The Jealous Brother" (joint\_ruling.101) event, which would not update all subjects that use your ruler as their own ruler and unions with the jealous brother if you select the first option
* Great Pestilence Event Forever Lost (great\_pestilence.7) asks for slightly less money than before
* The Exodus of <target location> (reformation.13) option b now has less impact on the satisfaction of the clergy from -15 to -10
* Fixed issue in Danish event "The Assassination of Gerhard von Shauenburg" (flavor\_dan.19), in which affected locations were not able to gain control due to them already being at max.
* Adjusted the triggering date for the event "Treaty of Tagilde" (flavor\_eng\_diplomacy.1500), so it can now trigger from the start of the game.
* Rewards for destroying an Autocephalous Patriarchate will no longer stack
* Event Sublimis Deus correctly displays the Pope's name now
* The event "A Heretic Prince" (hre.902) now properly shows the name of the HRE Emperor.
* Blocking the Event "The Jealous Brother" from happening to Unions
* Fixed the color of a negative opinion to be consistently red
* Fixed an issue where the provinces in the events flavor\_ser.30 and 31 (The Dreams of Stefan Dusan IV / The Dawn of a New Empire) were mismatched
* The province claims granted via the Serbian event "The Dreams of Stefan Dusan IV" (flavor\_ser.30) now last for 20 years.
* Made Gajah Mada–related Majapahit events are more likely to trigger
* The Bohemian Event Congress of Visegrad (flavor\_boh.17) now grants a CB that lasts for 15 years instead of 6
* Kalil Candarli will spawn with Turkish culture
* Fixed the broken historical info of the Portuguese event "Ribeira das Naus" (flavor\_por.33).
* Fixed the description of the event "The City of World's Desire" using an incorrect 'Islam' dynamic key; it now uses the correct 'Muslim' one.
* Fixed an instance of exists = <TAG> that I came across in military\_order\_events.9
* The "Foreign Theologians Enliven Scholarship" Muslim Event now does not highlight the Capital in the option's text.
* The Family Act (republic\_factions.22) stability cost to change a policy now resembles those of the estates demanding policy changes (-12 Stability)
* The "Quest for the Baltic Grain" Dutch event now requires 25 Trade Advantage in Riga and Lubeck.
* The Muslim event "Īd al-Fiṭr" second option now moves towards Jurisprudence more than the third option.
* Added the proper disaster illustration to all the events of the disaster "War of the Aragonese Union".
* Corrected the event options order of the "The Union Reignites" (war\_of\_the\_aragonese\_union\_disaster.1) event, so now the historical option appears in the first place.
* Added an Earthquake event for Seville (earthquake\_events.93), mirroring the already existing "Sismo de Lisboa de 1356", as it affected both cities, and currently it was only impacting Lisbon.
* A New Cahokia Golden Age will now disable 'Plight of Cahokia' events from occurring.
* Fixed missing 'be' for flavor\_iro.66
* Skanderbeg will now spawn as a member of the Kastrioti Dynasty
* The event "Privilege Revoked" (hre.101) should now properly display the name of the HRE emperor, as the scope of it is now saved in the source event (hre.100)
* The Bible Translated (reformation.2) now translates the bible into the Common Language instead of the Court Language.
* Female Rulers are now allowed to adopt a child in the ‘A Child in the Reeds’ Event if they are not married.
* Event Closer Ties with the House of <target dynasty> can only marry characters who are otherwise not blocked from marriage.

**Government:**

* Regulated Naval Service policy increases the naval levy size instead of the burgher levy size.
* Powerful Italian Families now correctly mentions the two families again
* ‘Reach Out to Our Faith’ Parliament Issue can no longer target your own country.
* Rebalanced the 'Inquisition Law' policies 'Papal Control', adding unique modifiers for the Papal States, and 'State Inquisitors', adding Spy Network Construction to the generic modifiers, and reworking the Venetian unique modifiers. Also fixed a typo in the 'Papal Control' flavour description.
* The Estate Privilege "Ghazi Lords" now grants some drift towards Quality and less drift towards Decentralization.
* Fixed the missing description for the Dahomey formable
* Fixed an error in the description of the Hannover formable, now it should show the 'Lower Saxony' area correctly.
* Re-added incorrectly purged characters 'María de Molina' and 'Juan de Manuel de Villena', so now the Castilian Country History description reads correctly.
* Fixed Manchu having the Warring States Reform removed due to the Red Turban Rebellions having already finished.
* Tribal Land Rights and Allow Gatherings Privileges now offer more impactful values when granted
* Order Commandery can only be built if the Military Order is a duchy level or higher.
* The ruler of the Livonian Order is now called Landmeister instead of Hochmeister.
* Only monarchies are set to be called Lordships
* County rank Military Orders are called Bailiwick and headed by a Commander (German ones called Ballei and headed by a Landkomtur)
* Localized estate names for Military Orders - Chapter, Milites, Fratres
* Fixed a dynamic localization error in the flavor description of the 'Jesuits Allowed' policy, so it now correctly mentions the Catholic religion.
* When the Head of the Cabinet changes their estate allegiance will now update the country modifier accordingly. So, a former member of the Nobility who then joins the Crown will give you the Crown Power increasing buff instead of the Nobility Influence buff.
* Restored the original Country History for Austria, as it was overwritten by the Meissen one.
* Orkney starts with the Galley Lords' reform
* Galley Lords reform allows navy levies to be raised even when not at war.
* Galley Lords reform now gives a malus to Diplomatic Reputation
* Galley Lords extended to Norn culture
* Galley Lords reform now requires 25 Naval, 25 Belligerent Societal Values
* Galley Lords reform now gives a malus to Diplomatic Reputation
* Galley Lords' reform increases the navy levy size
* Many Government reforms changed from a current tag requirement to a has\_or\_had tag requirement.
* The Government Reform "Crusade of the Sea" reform that is available to the Knights at game start now grants reduced Galley-related bonuses but allows for Privateer Slave Raids.
* Fixed the Country History Description of Bohemia, so it now correctly shows the dynamic localization for the Slavic culture group.
* The "Grant Cabinet Rights" character interaction will no longer make the character untargetable by other character interactions.
* Recruitment Law - Increased Impact on Societal Values from Expanded Levies, A Noble Army, and Regulated Naval Services Policies
* Recruitment Law - Added Monthly towards Quality, Quantity, Individualism, and Outward to various Policies.
* Maritime Law - Added Monthly towards Forestry Ordinance, Monthly towards Serfdom to Mandatory Impressment, Monthly towards Naval to Navy Audits, Monthly towards Free Trade to Protect Trade Routes, and Monthly towards Capital Eco to Shipwright Regulation
* Native Policy Law - Added Monthly towards Free Trade to Trade, Monthly towards Serfdom to Subjugation, and Monthly towards Humanist for Integration
* Colonial Policy Law - Added Monthly toward Outward to Settled Colonies and Monthly toward Individualism to Trade Colonies
* Added Monthly toward Outward to Grant Colonial Authority policy for Rights of Burghers law
* Added Monthly Progress towards Traditionalist to Strengthen Rights of the Clergy Policy and towards Humanist to Curtail the Clergy
* China Formable will not be able to be formed until the Red Turban Rebellions situation has properly ended.
* The Figurehead Position Policy will no longer apply two different debuffs to Crown Power.
* Made the "Military Orders" Clergy privilege available for countries in the Iberian culture group, so both Portugal and Aragon can start with it granted.
* Shifted some power back to 'Direct Inheritance' and 'Distributed by the Ruler' unique policies for Scotland

**Economy and Production:**

* The Cinque Port's unique building increases the local navy levy size instead of the maximum number of ships built.
* Kurultai is now far cheaper to maintain.
* Rebalanced Japanese clan buildings' masonry demands and added an extra production method for it
* You can no longer build the Thema Headquarters in lands owned by your subjects.
* Pops will now only demand certain goods if their estate is rich, and some are limited by development thresholds.
* The Kremlin now employs 2000 soldiers instead of 5000
* The Great Temple of Tenochtitlan will no longer be removed soon after its construction.
* Fixed missing localization for Enderûn Academy production method
* Feitoria can now only be built on other continents

**Society:**

* Norn culture (Scandinavian) is now also part of the Scottish Culture Group
* Lollardy can spread to pops who use the English language instead of just English culture.
* Fixed the (hilarious) 'ERROR speaking people' in the flavour description of god Nyambe, now it correctly shows the Bantu language family instead.
* Fixed some changes on the reform desire, which was 10% of what was intended.
* The Catholic religious action "Request Aid" that is available only for Military Orders is now hidden from countries without that Government Reform.
* Gallowglass Sept building - reduced employed Soldiers from 250 to 100 and added 10 Nobles.
* The Catholic action "Request Aid" now offers modifiers that are better suited to Military Orders.
* The Catholic action "Request Aid," which is available to Military Orders, now has a smaller Devotion penalty for the Pope declining.
* The Catholic action "Request Aid," which is available to Military Orders, now has rebalanced weights for the Pope AI's response.
* Hindu avatars will now be able to be activated with a subject owning the holy site.
* Fixed Muslim holy sites, giving religious influence

**Diplomacy:**

* The "Bribe Voter" country interaction now allows you to throw all of your gold at a target to convince them to vote for what you want.
* Added acceptance reasons for accepting being a Hanseatic League Member
* The 'Demand Unlawful Territory' country interaction is now always visible for the Emperor.
* Giving out / Asking for Fondaco Rights now requires you to be in diplomatic range with the target country.
* The AI acceptance of 'Ask for Ducal Rights' and the 'Request County Privileges' now has a -100 base penalty instead of the previous -20
* The Request Kingdom Title action will now make you into a kingdom first, BEFORE you form the targeted formable. This way, the message will now properly display "We are now known as the Kingdom of <Country>" instead of the Duchy version of it.
* The Negotiate Succession Law country interaction is no longer blocked if the actor has an heir. Instead, it now properly checks if the target does not have an heir or an heir different from the actors.
* Push Back Colonizers Casus Belli is now only available if the target country has any Colonial Charters.
* Dominion Subject Type minimum years before annexation reduced from 100 to 50
* Diplomatic Action "Send Character to Prussian Crusade" cannot send characters blocked from being Generals.
* Diplomatic Action "Send Character to Prussian Crusade" can now also target the Livonian Order.
* Subjects can no longer be targeted for excommunications
* The "Request Funds" country interaction now has a year cooldown
* Bonus Relations with the Papal States from Military Sponsorship will now only be removed if the country has no other relation of the same type.
* The Excommunication Resolution now triggers a 20-year cooldown for the Catholic Church, which forbids any further excommunication attempts. Before this, the Excommunication resolution could be spammed by the AI. The Papal country's interaction to excommunicate anyone at will remains unaffected by this change.
* Fixed an issue where HRE actions would take the opinion of the actor of themselves into consideration, making them always accept the action. After such a long period of madness, the AI finally realized that they had been bamboozled

**Military:**

* Low-class levies like Feudal Levies or Conscripts no longer drawn from Burgher or Clergy pops, but can now be drawn from Laborers.
* Footmen and Men-at-Arms levies correctly rise from Soldier pops instead of Burghers.
* Welsh Lour Lances levy is raised from Laborers and Soldiers, leaving Peasants for Longbowmen.
* Fixed requirements for various Scottish levies to allow more variety.
* Regular Regiments will always display their regiment name in the language of their owner rather than in the language of their home location.
* Each age upgrade of Longbow units reduces the strength damage taken
* Only Peasants can form Longbow levies, not Laborers.
* Serbian Hussars are now an Age of Renaissance unit instead of the Age of Traditions.
* Added an Age 2 tier of Livonian Knights of the Order unique unit, so the fun can continue a bit longer.
* Fixed the Lour Lances levy unit, so it can also recruit from locations with Cornish as the dominant culture, and not only Welsh.
* Crusader Knights correctly upgrade to Late Crusader Knights
* Added an Age 2 Long Fada ship upgrade
* Buildable galley Long Fada given a lighter levy version called Birlinn, which is half the strength and cost.
* Age2 and Age3 Longbowmen levy size increased from 0.02 to 0.03 to match the Age1 Longbowmen.
* Scottish Longbowmen available to Balliol from the start
* Levy Combat Efficiency is now shown in the UI and is no longer always >100%
* The Wagenburg unit is now correctly labeled as Infantry and has better stats to reflect its historical importance.
* Adjusted the Persian "The Kızılbaş" and "Ṣafawiyya Order Hall" advances to be in the Age of Discovery instead of the Age of Reformation, so the "Kızılbaş Skirmisher" unit and the "Ṣafawiyya Order Hall" building can be built in the Age of Discovery.

**Advances:**

* Terraces advance for the Andean culture, which now also gives more food.

**Achievements:**

* Corrected ’Welfare State’ conditions to reflect the markets at setup
* ‘Brothers in Arms’ will now unlock correctly
* Fixed an issue with tag-related achievements
* The Achievement "What the Lord Giveth" now correctly states that you need to start with at least 8 privileges
* Fixed the ‘Hóngwǔ Dì’ achievement duplicate region trigger

**Other:**

* Serbo-Croatian patronyms now end in ovič/ovna
* Added South Slavic and Bulgarian name variant of Rurik: Rjurik
* Fixed a couple of flavour descriptions (the one for the 'Call Upon the Faithful' action, and the one for the Yazidism religion) that were using an incorrect dynamic localization key for 'Islam'.
* Corrected the Monthly Control Decline modifier to have a positive impact on the country in the Advances and Middle Kingdom laws

### Onboarding

**Walkthrough:**

* Fixed a typo in the tutorial

**Missions:**

* The mission task "Marketplace of <Location>" now correctly requests the latest iteration of the Marketplace building.
* The Mission "Control Around the Capital" will now require "more than <target value> Control" instead of "at least or more..."

**Hints:**

* Added a link to the maritime presence hint in both the Maritime tooltip and the Proximity and Control Hint

### 2D Art

**Icons:**

* Fixed wrong foreign building icons
* Fixed the culture concept using the wrong icon
* Replaced the Ducats icon with the Tax Base icon in a bunch of places, to make clear you are not getting that money directly
* Fixed icons for entries in the warscore breakdown
* Updated some alert icons to follow the same icon language we use in the rest of the game
* Updated the six\_ministries\_overseer\_law icon to look the same as the six\_ministries because it was using the wrong symbol in the icon
* Fixed the wrong icon for Zone of Control
* Added missing raid\_imperial\_family\_hodlings icon to gfx/interface/icons/unit\_ability
* Updated geo\_david\_the\_builder.dds for a more unique look, as it didn't match the style of the other advances.
* Fixed the wrong Diplomatic Capacity icon in the Actions panel
* The imminent combat map marker now displays over other map markers.
* Updated the texture of colonized.dds to be more up to date in terms of icon language and removed the gold overlay in its button.
* Updated righteousness modifier type icons to use the updated version of the righteousness icon
* Removed misplaced file in social class folder

**Illustrations:**

* Added dynastic coat of arms for many historical characters created in events
* Restored the appropriate illustration to several events in the Ambrosian Republic disaster

**Flags:**

* Fixed button coloring mistakes that the Army Infantry Age 6 masks and illustrations had
* Replaced events: Deccan clergy happy with the improved rendered characters
* Fixed noise on the Deccan loading screen and polished 3 disaster illustrations
* Event corruption\_event.9 image shows pops of the minority culture instead of your primary culture.

**Other:**

* Changed MP buttons for observer mode when hosting for clarity

### AI

**Diplomacy:**

* AI will no longer send marriage offers repeatedly if they were rejected before
* Fixed additional cases of Ottomans obtaining CBs against their own subjects or countries with which they have a truce via their Situation
* Ottomans will no longer release areas as subjects under any conditions while trying to reach the location count during the Rise of the Ottomans.
* Fixed an issue where AI would not improve opinion with subjects' ongoing annexation if they were still loyal but lacking opinion for annexation to progress
* Fixed an issue where AI would release ongoing colonial charters as subjects, resulting in fractured subject border gore
* AI subjects will no longer release land with 0 proximity as subjects, causing subject of subject chains.
* Fixed AI breaking alliances immediately after accepting due to diplomatic capacity costs

**Economy:**

* Further increased the AI's desire to unlock the Dock building
* AI will now increase diplomatic spending if it wants to annex a subject and is lacking diplomats.
* Fixed an issue where AI would not correctly close down buildings to avoid stagnating or doom-spiraling economies
* Added AI modifier score for local monthly maritime presence based on how much tax base is propagated via the port sea zone

**Military:**

* AI will now factor in country morale and discipline modifiers when doing high-level estimates about a country's military power.
* AI is now less willing to attack countries far away from their capital, or if they need to go through one of their subjects to reach them.
* AI is now a bit less scared of declaring war when they have a lot of antagonism.
* AI is now much faster at raising levies when a war breaks out
* Reduced AI willingness to attack countries very far away
* AI will now prioritize sieging areas more if they border
* Fixed an issue where AI would not correctly use mixed fleets of levy and regular transports due to mis-calculating their need for repairs
* Fixed an issue where player automated transport orders would not progress because the transports wanted to repair
* Fixed an issue where AI would not disband their levies after a war finished in the first few years of the game
* Fixed an issue where AI would raise army maintenance prematurely when preparing for wars, leading to long periods of useless military spending
* Fixed an issue where AI would sometimes sink their fleets by repeatedly going back and forth across the Atlantic when their colonial markets did not have supplies to repair fleets
* AI will no longer assign entire escort fleets to protect their transports during peacetime.
* AI will no longer proactively move armies to suppress rebels in colonial charters.
* AI will now add a small ratio of heavy warships to their transport fleets, such that they are not completely undefended when they are not escorted by a larger attack fleet.
* Fixed an issue where AI would not properly reassign fleets assigned to increase maritime presence when a region had maximum naval presence

### Interface

**Map Modes:**

* Recalculate man names when changing a map mode in the lobby
* The Livonian Order now correctly appears grey like their Overlord Teutonic Order, instead of pink when the Blend setting is on.
* Dynamic map labels, as in e.g. the Control map mode, now properly update when changing the selected country in the lobby.
* Enable switching map mode hotkeys in lobby view
* Unpin map modes on lobby confirm dialog disappears correctly
* The Tactical map mode now also shows location rank icons for country & province capitals, making it easier to discern what the most important forts are.

**Alerts:**

* Add a lack of commander green alert for peace time, show a yellow alert only during the war.
* Add Devastated Locations alert
* Added a pop-up when saving failed
* Fixed the Unraised Levies alert for building-based countries
* Add an alert when a new policy is available. Change Laws not Codified alert to yellow. Make icons for these two alerts consistent with the game concepts' ones.

**Panels:**

* Declare war now, show truces and proper tooltip text depending on the country having a truce with to opposite leader instead of just checking the player.
* Fixed Filter "Own Rebels Only" in Society, People, Rebels tab. It was showing no rebels, even when you had some in your country.
* Adding the main Port seazone data to coastal Locations and improving the Army and Navy card builders' layout
* Fixing layout in Exploration portraits and cards
* Fixing Zoom levels setup in the Advance Tree
* Casus belli buttons on the war declaration panel are now bigger
* Fixed issue in culture/religion selection lists, where sometimes it wouldn't let you click the button
* Added observer and flag for observers in the Lobby
* Fixed the Game rules panel not being closed when starting a game, double-clicking a country.
* Diseases panel outbreaks ui
* Harmonized situation and disaster panels
* Updating Primary, Accepted, Tolerated, Discriminated, and Foreign Culture icons in all panels and tooltips
* Fixing the RGO icon button in the Market Type panel
* Removed the unnecessary separation bar in the Crown Estate card
* Added subject loyalty to the banner
* Fixed Recruit to Army/Navy unit action not appearing when the unit only had mercenaries or levies.
* Fixed occasionally flickering ongoing diplomatic relations icons.
* HRE elector flag numbers out of bounds fix
* The plus and minus buttons for demand gold now correctly disable when not applicable
* Disaster panel one ruler ui update
* Country cards now use the same color pattern as locations: player is green; allies are blue; neutrals are brown; enemies are red; out of range is white.
* Added more space in Unit type names in the Army Builder so they don't squish quite so quickly
* Tweaked Ruler names' size in Country Select screen so it's made more consistent by reducing the maximum length that they generate at
* Unified tooltips for the net profit value of buildings in production and build in location panels. Now they all show correct numbers per level based on location control.
* Fixed text in the military tab, pushing the buttons to the side
* Not and Owned location filter on, depending on building type
* The owned locations filter is active as the default
* Aligned payment panel for international organizations
* Increased the font size of numbers in the location panel
* Made the poptype icons in the filter buttons a bit bigger
* Fixed the issue with the general portrait showing the regent during a regency
* Fixed Empty lists in diplomatic action targets showing explanation text out of bounds ( e.g., "no valid colonial charter available").
* Fixed: Changing a reform, going back, and removing all of them was preventing the player from choosing a new one.
* Alliances appear higher on the diplomacy panel
* It's no longer possible to hold a peace offer view open and send a peace deal to a country that has already left a war.
* Added the possibility to know the expected value of a possible unbuilt building without applying control in the calculation
* Fixed more texts that were overflowing their buttons in different languages (Navy recruit mercenary button and automation buttons)
* Updated Dialog confirmation loc to avoid confusion when selecting a double confirmation option
* Added age of Characters in both the Society People's Character list and the Foreign Panel Character cards list
* Fixed Province buttons not being clickable in Production -> Food
* Centered Category icons in the Peace Treaty panel
* Relevant Goods filter on as the default
* Aligned sort bys in the Markets tab of the Good panel
* Ensured that castles, factories, and religious buildings illustrations are always visible if the location has the corresponding building

**Outliner:**

* Improved the outliner entries for migration Cabinet Actions

**Tooltips:**

* Fixed the wrong title for the great power rank and added a tooltip
* IO next leader tooltip added info
* Fixing tooltips for the army's strength in the Declare War tooltips
* Fixing tooltips on Savefiles and DLC Panel
* Added explanation in the tooltip about bonus warscore having a cap
* Added explanation for not being able to get achievements after the endgame
* Fixed the tooltip icon when selecting an autocephalous patriarchate to join
* Fixed missing localization for the act\_of\_settlement variable tooltip
* Fixed the plus and minus signs in the maintenance tooltips
* Fixed the Game Concept for the Commission Art character interaction
* The tooltip for buildings that produce goods doesn't show the cost of maintenance anymore, since they don't have any.
* Created a concept for building maintenance and updated the icon
* Fixed the tooltip for changing a subject's policy
* Select the Interaction target cabinet action fix
* Add a missing linebreak in the war alert tooltip
* Great Power Score breakdown sorted by amount, Added GetSortedDescriptionFor.
* Include allow requirements in Building Type tooltips.
* Fix attrition tooltips in the Army panel
* Made sure topbar shortcuts for manpower and sailors don't open the macrobuilder in the estate building view
* Improved the concept for Proximity
* The explanation for Trade automation now mentions that every individual market is already automated by default.
* The Proximity tooltip for locations with 0 proximity now explains more clearly that you need to improve the proximity chain from your capital.
* Character names are more nicely formatted in the Heir Selection tooltip
* The title of the construction tooltip now mentions the item in construction.
* Added proper format to numbers in the tooltip for stored research
* Fixed icon and game concept for the Cardinals list in the Catholicism IO
* Fixed the tooltip for bribing estates within an IO as a country that is not the IO's senior partner or leader
* Fixed the color for the impact of cultural influence on rebel growth from nationalism
* Fixed the tooltip for Resolutions
* Added a tooltip to the location rank icons in the Province Tooltip
* Added migration and pop growth info to the relevant demography tooltips
* Added icons in the tooltips for religions and culture breakdowns in the society panel
* Added a unique button and tooltip to unique policies
* Fixed the scrollbar in diplomacy windows
* Added a scrollbar to the tooltip for area assimilation to prevent the tooltip from growing too large
* Added Player Coat of Arms to Diplomacy Map Mode Tooltip
* Remove tooltips from sea wastelands when the "No Seazones" Map Tooltips setting is set.
* Admiral's abilities tooltip is now displayed instead of general abilities when a character commands a navy.
* Now, alert tooltips with many entries don't show the "and X more" text. Instead, they show all entries inside a scroll area.
* Fixed non-clickable miniflags in main menus' savefile tooltips
* Fixed tooltip tables in the top bar's Estates tooltips
* Fixing tooltips in the Army and Navy builders
* Improved layout, loc, and fixed icons for all Subject tooltips and their related building blocks.
* Achievement with no available tooltip gives more explanation
* Added shortcuts to all situation hints from their alert
* The tooltip to transfer regiments now says "transfer all crossbowmen" instead of "transfer all of this type", so you don't need to remember what a type is
* Fixed the broken tooltip for breaking an alliance
* Added more information to Fabricate Casus Belli parliament action tooltip
* Fixed HREs UI so if you are not eligible for the role of the Emperor, the AI will now have a small -100000 next to your name as a reason not to vote for you.
* Adjust several Navy UI and Navy tooltips to reflect more accurately the total potential number of ships a country can raise
* Now you will see how recovered the levees are in the overview.
* Show the actual market balance in the Import/Export Window
* Fix the Goods stockpile progress bar showing the wrong progress
* Adjusted the tooltips of the defensive and offensive policies of International Organizations to make it clearer when these rules are applied
* The unit recruit macrobuilder now shows the failure reason in the tooltip when a particular unit type cannot be built/recruited due to the specifics of the location.

**Other:**

* Fixing the tooltip for the non-standing Army and Navy
* Pop names are now always shown with their religion rather than omitting it when it is the same as the state religion.
* Fixed the issue where the game doesn't remember you were an observer when you leave a game
* Scoped Area cabinet actions display modifiers
* Cabinet card modifiers get recalculated immediately, not monthly
* Integrate Lombard cabinet entry fixes
* Hints Panel filter not enabled at start
* Removed the extra frame in the dynastic tree and added an inner border instead
* Production list display toggle buttons were not clear enough, so made the blue background lighter so it's clearer when selected.
* Unit actions toggle buttons were not clear enough, so made the blue background lighter so it's clearer when selected.
* Tweaked a bit the achievements icons and view.
* Fix the style of the legal document reader
* Fix hover highlight in exploration areas sort-by
* Losses on the flatmap units will be displayed over the tooltip position instead of using the invisible 3d units, which leads to confusion.
* Foster New Culture cabinet action is not visible if you are the dominant country of your culture.
* The Dynasty tree COA was trimmed at its bottom, so I replaced it with a proper texture and widget.
* Maintenance Settings on the economy panel display modifiers
* Made the location rank icons on the map vary in size depending on their rank, so that cities look bigger than towns
* Small rework of army strength on Tooltips and Country Panel. Properly combine raised and unraised levies alongside breakdown detail.
* Fix army strength values in tooltips and the country panel.
* Fixed not showing the option to transfer a province occupation to myself
* Remove debug map modes from input bindings settings
* Add a filter for buildings that can be built in foreign locations
* Changed margins in society character cards
* Made the heir succession law header purple
* Added space between the cards in the geopolitics provinces view
* Fixed construction time left not refreshing in the tooltip when the first construction in the queue finishes.
* Display correct government reform numbers, fix
* Fixed broken string in message settings for liberating unfortified locations
* The background for the food numbers had different sizes, so it is now updated so they have a fixed size.
* Fixed tooltips closing when the "Not Seazones" setting was enabled, and behind the tooltip, there was a seazone.
* Achievement descriptions are scrollable now
* Fixed duplicated word in the casus belli popup
* Fix losing heir's custom character when succeeding throne
* Interface out-of-bounds fixes
* Fixed mapmode settings with duplicated entries
* Refusing to become the subject of another country will now display the correct message for the player.
* Fix players not being able to build roads in corridors
* Fix renaming locations the player doesn't own
* Fixed laws not being visible in observer mode

### 3D Art

**Unit Models:**

* Crusader Knight model upgraded from medium to heavy, and given a sword to look more knightly.
* Crusader Knights and Knights of the Order still wear medieval surcoats in Age 2
* Fixed coat of arms patterns for crusader units

**Portraits:**

* Characters from China or the Confucian culture group will always have a beard.
* Fixed a typo that accidentally made everyone clean-shaven against their will.
* Fixed the wrong shader in high nobility male neckwear, leading to the necklace changing color.
* Fixed European kings wearing a helmet instead of their crown.
* Fixed characters wearing a helmet and no armor.
* Fixed Ludwig V Wittelsbach wearing a commoner's hat regardless of his country's rank.
* Fixed non-Levantine muslim characters were all wearing commoners' outfits.
* Fixed Kings and Emperors wearing a gorget, but not the plate armor.
* Kings and Emperors are now allowed to wear their livery collar when carrying their plate armor.
* Fixed that ethnicities without pigments are old instead of trying to use their parents' definition.
* Added new historical characters visuals (pru\_immanuel\_kant, fra\_francois\_marie\_voltaire, gen\_andrea\_doria, ubv\_michael\_cesena, brapru\_von\_clausewitz, johann\_tilly, wor\_wallenstein\_script, eng\_isaac\_newton, pol\_nicholas\_copernicus, pap\_raphael, flo\_donatello\_script, yi\_sun\_sin, mei\_bach, jacob\_fugger, byz\_john\_kantakouzenos, cola\_di\_rienzo, ubv\_william\_ockham, eng\_john\_wycliffe, eng\_anne\_boleyn, christopher\_columbus, john\_calvin, wal\_vlad\_tepes, eng\_thomas\_cromwell, jan\_zizka\_script, guru\_nanak, pru\_immanuel\_kant, fra\_francois\_marie\_voltaire).
* Fixed clipping hairstyle in the skull cap helmet.
* Fixed clergy in Military Orders not wearing armor when leading armies, streamlined "portrait\_wear\_armor\_trigger" and "portrait\_wear\_helmet\_trigger".
* Fixed mismatched colors in high nobles' armor parts.
* Fixed an issue with hair clipping for the skull cap helmet model
* Fixed clipping issue with the gorget model mesh
* Fixed Anne Boleyn shaving her hair.
* Made a small change to jehan\_luxembourg character DNA
* Fixed skinning issue with female head mesh
* Fixed some clipping hairstyles that cover the ears with headwear.
* Fixed "male\_headwear\_german\_royal\_crown\_duke\_big" hiding hairstyles.
* Fixed historical characters showing their beard too early in life.
* Cleaned up blindfold setup, moved to additive\_headwear to avoid genes cluttering. Also moved 3D files to the appropriate location.
* Fixed the clipping issue with the German child's hat and shirt collar
* Fixed Japanese Shoguns wearing commoner hats.
* Crown hair clipping issue fixed

**Map:**

* Deleted Mountains on Sea and fixed flat peaks
* Wild Boar models for the Wild Game resource in South America
* Deleted Buffalo from South America
* Removed duplicated schematic names
* Fixed for lion and platypus on the map animals
* Fixed an animation and shader issue for the sand RGO model
* The Kronor building model and textures have been updated
* Made the cyclone VFX size 10x smaller
* Removed unnecessary building texture files
* Deleted DLC Script in base game

### Modding

**Script:**

* Can use [COUNTRY.GetDominantLanguage] to get the Dominant Language of a Country in the Loc script
* Can now scope from Pop to its Dialect
* Added the wants\_keep\_policy and reasons\_to\_join script value traits for policies

**Triggers:**

* Expanded the rebel\_category trigger to now work on the country scope, too. Rebel countries will this way now have a way to recall which rebel category they have been spawned from
* The 'international\_organization\_num\_locations' trigger now shows the current value of locations the IO owns
* The 'international\_organization\_population' trigger now shows the current value in the correct population format.
* Fixed a localization issue of the culture\_opinion\_impact, which prevented the target culture from being shown
* Added the ai\_policy\_resolution\_keep\_bias, ai\_policy\_reason\_to\_join, policy\_has\_ai\_vote\_value, policy\_has\_ai\_keep\_value and policy\_has\_ai\_join\_reason triggers for policies
* Updated the resolution\_opinion to properly work in an conventional writing style ( resolution\_opinion = { international\_organization = <international organization> resolution = <resolution> vote = <vote scope> value = <value> } ) and fixed the lack of tooltipping for it

**Modifiers:**

* Added always\_allow\_army\_levies and always\_allow\_navy\_levies, which let a country raise each levy type even when not at war.

**Effects:**

* Added the 'update\_leadership' effect for International Organizations to forcefully update the leadership panel. Quite useful for union shenanigans

**Other:**

* Added the on\_character\_estate\_change on\_action, which is triggered whenever a character changes their estate allegiance
* Added International Organizations as an object to inspect for the console explorer
* Mod tool: delete now doesn't reset the dropdown index.
* Solved issue with the open folder button when a mod was selected. Added more error info.

### Translation

**Polish:**

* A total of 173 bugs have been solved related to the Polish language
* Fixed typos, capitalization, and grammatical suffixes.
* Rewritten different sentences to make them sound more natural and corrected some incorrect tags.

**Spanish:**

* A total of 131 bugs have been solved related to the Spanish language
* Adjusted the naming for Republics, so it now uses "República" instead of "de la República" in the kingdom tier and long name.

**French:**

* A total of 50 bugs have been solved related to the French language

**Brazilian Portuguese:**

* A total of 131 bugs have been solved related to the Brazilian Portuguese language
* The game's texts are being revised to display the correct information to players and thus create a better gaming experience.
* Tags are being reorganized to display text correctly and avoid any errors that deviate from the language standards.

**Chinese:**

* A total of 93 bugs have been solved related to the Chinese language
* The map displays the bold version of the font for more clarity
* A lot of in-game text was replaced with Sans typefaces to be more readable on 1080p resolution.
* Typeface for numbers is now the same as English, so they all fit in the interface properly.

**Korean:**

* A total of 24 bugs have been solved related to the Korean language
* A lot of in-game text was replaced with Sans typefaces to be more readable on 1080p resolution.
* Typeface for numbers is now the same as English, so they all fit in the interface properly.
* The map displays the bold version of the font for more clarity

**Japanese:**

* A total of 27 bugs have been solved related to the Japanese language
* Fixed the gold title not showing in Japanese
* A lot of in-game text was replaced with Sans typefaces to be more readable on 1080p resolution.
* Typeface for numbers is now the same as English, so they all fit in the interface properly.
* The map displays the bold version of the font for more clarity

**Turkish:**

* A total of 89 bugs have been solved related to the Turkish language
* Fixed a few mistranslations in UI due to missing context, such as "Master" (volume), [Character.GetAgeInfo] causing unintended double translation.

**German:**

* A total of 279 bugs have been solved related to the German language
* Made numerous changes to adjectives because Germans like their „Deklinationen“
* Different Streamlining and adjustment of country names
* Checked inconsistencies in historical names
* Removed and adapted placeholders leading to nowhere

**Russian:**

* A total of 32 bugs have been solved related to the Russian language

**English:**

* Added Latvian (Kapteinis) and Lithuanian (Kapitonas) variants of the character title Captain

### Multiplayer

* Call to Arms for other players does not work
* Fixed CTD caused by deadlock when a player is disconnected while recalculating data.
* Fixed human allies being called into wars even if it was not selected in the Declare War view.

### Miscellaneous

* Fixed typo in Cultural Influence concept

**Settings:**

* Added a Toggle All to the Map Marker Settings window to make it possible to hide all map markers, e.g. screenshot purposes, with a single click.
* Language setting is not resetting itself
* Fixed weird indent on audio settings page.

**Other:**

* Fixed an issue with the localization of the "Location Dominant Religion" requirement
* Fixed typos in the credits and last-minute changes.
* Fixed a typo in the "<IO> Disbanded" Message
* Added a condition to the trigger of the 'Execute Character' action that disallows the Regent of the country to be executed.
* Fix the crash related to the colony missing goods in the market view
* Renaming units no longer risks inadvertently localizing their names.
* Added error codes and asserts to prevent/catch a crash in ST
* Make the startup smooth and responsive
* Locations will not starve for the first month after being colonized.
* Fixed a case where the UI allowed creation of a casus belli you had no access to.
* Celtic Marriage Ban no longer causes a pink debug mess in the Marry Noble tooltip.
* Three Czech character names that were previously falling back to the default now appear correctly
* Auto-transfer occupation to colonial nations is only valid when they are also in the war.
* Non-host players can change the game speed with the numpad
* Fixed many Serbo-Croatian custom names not appearing in the correct language
* Kerns and Caterans (Celtic levies) correctly made Age 1 units instead of Age 2
* A union formed from countries that were in unions that you had control groups on now remaps one control group to the new union.
* Fix road cost calculation when building in border locations. Fix roadbuilder coloring in locations with existing roads.
* The Province Capital Flag should now always be located at the province capital.
* Fixed an issue where married rulers would rotate between countries.
* Ticking Warscore is now twice as quick
* Fix trades not properly calculating trade advantage
* Stop purging scripted dynasties from memory

## 1.0.6

Patch 1.0.6 was released on 2025-11-18[[6]](#cite_note-6) with checksum *7ff6*.

### Gameplay

* Trade Expenses are now calculated correctly
* Restored Merchant Maintenance to 1.0.4 levels
* Food stockpiles now deplete properly when no maintenance for food.
* Antipiracy Warfare is now applied correctly

### Miscellaneous

* Fix crash related to bankrupcy
* Fix crash when clicking on alerts for Cassus Bellis and Lacking food
* Fix crash related to write coat of arms data into save file
* Fixed depopulation alert not showing correctly the needed information.
* Fixed a crash related to the dominant language
* Fixed Military Panel overview Stats overflowed due to brand new added Levy Combat Efficiency.

## 1.0.7

Patch 1.0.7 was released on 2025-11-20[[7]](#cite_note-7) with checksum *724a*.

### Gameplay

**Economy:**

* Further revisions of pop demands to balance estate economies.
* Increased the strength of navies anti piracy by a large amount.

**Military:**

* Rebalanced how good levies are with a decent progression through the ages.

### Content

**Military:**

* Added late game levies to nobles; late cavaliers, provincial cavalry, gendarmerie

### Miscellaneous

* Fixed a crash related to calculating the efficiency of cabinet actions
* Fixed a crash when calculating the impact of goods demand on a market

## 1.0.8

Patch 1.0.8 was released on 2025-12-02[[8]](#cite_note-8) with checksum *dce5*. It was originally released as an open beta[[9]](#cite_note-9).

### Highlight

* Added 8 new advances for the Aztec formable, and 6 new advances for the Two Sicilies formables (plus 1 more Tenochtitlan advance, and 2 more Sicilian and Neapolitan advances that can now be unlocked by their respective formables).
* Fixed more than 320 bugs
* Savegame Optimization
* New Combat Tooltip

### New Features

* Added 8 new advances for the Aztec formable
* Added 6 new advances for the Two Sicilies formable

### Gameplay

**Government:**

* Settle the Frontier will no longer empty low-pop provinces.
* Estate privileges are removed if the estate doesn't exist in the country
* Cabinet actions remove old geography modifiers properly after being reassigned
* Hire Advisor will no longer create Crown Estate advisors
* Fixed new rulers' attributes not applying to their country on ascending to the throne
* Centralization now reduces subject loyalty with up to 30
* Decentralization now increases subject loyalty with up to 30 (was 20).
* Remove the impact of maximum war exhaustion from centralization and decentralization.
* Maximum decentralization now recovers estate satisfaction by another 2%
* Rebalanced children's education to have a more balanced improvement
* Matrilineal non-exclusive succession law does take character abilities into account when choosing an heir now
* The ruler's diplomatic ability now also impacts subject loyalty.
* Scotland's 'authority over the clergy' law now disappears if Scotland converts from catholicism.

**Economy:**

* Each 20k pops instead of each 200k pops gives 1 extra free building level in a location.
* Implemented a system where prosperity decays down to 0 by default if no increases.
* Made a new formula for an economical base that has different scale values on tax, pop, and trade.
* Tweaked the sell location acceptance criteria
* Balanced pop growth values to compensate for lower prosperity levels
* Removed some demands for some goods for slaves & tribesmen, and made some thresholds for soldiers.
* Reduced the nobles' demand for lacquerware to 10% of what it was before.
* Added trade profit and subject tax levels to be part of the economic base calculations
* Further rebalancing of the the economical base and taking building based countries into account.

**Production:**

* Can no longer build or delete buildings in locations that are under siege
* Building automation no longer changes the employment system

**Society:**

* Random characters are more likely to be of primary and accepted cultures.
* Females above the age of 40 will no longer get pregnant.

**Diplomacy:**

* Fixed HRE election votes after long reigns of the previous leader accidentally pumped up the GP score weight
* Removed “Food access” diplomatic option if you're fighting in a war with the other country
* Can no longer sell a location when at war
* Fixed static antagonism related to societal values
* Subject actions get cancelled after the subject is cancelled
* Lacking rivals will no longer make you conciliatory, but instead make you lose prestige.
* Conciliatory no longer increases subject loyalty, but instead increases diplomatic reputation.
* Removed the base diplomatic reputation for belligerent vs conciliatory
* Conciliatory vs belligerent now impacts how much of an impact the shared border has.
* Reworked a bit how subject loyalty is impacted by relative power, and made keeping subjects loyal a bit more fun
* Taking back a location from a revolter is now -95%, not +95% cost.
* Added the border percentage opinion mechanic from EU4, which will create a bit more conflict
* Each vassal and fiefdom gives a small drift to decentralization.
* Civil wars now automatically end when a union between a tag and its civil war opponent is about to happen. The Civil War is always the one getting annexed in this context
* Raised levies for the subject no longer impact subject loyalty.
* Adjusted the colonial nations' loyalty values to take
* Reduced a lot of subject loyalty from advances
* If a country moves its capital, anyone who knew the old capital now discovers the new capital.
* Border feud CB works properly
* Enable the request of subject actions from the subject to the overlord
* Can't leave a coalition mid-war
* Fixed immediate full war score vs tiny nations with no cores
* Conquistadors will now become a normal location-based country when they become a colonial nation.
* Shared border is now reduced if same culture or share a culture group
* Power relative to overlord can now add a positive bonus to loyalty as well.
* Halfed the default shared border opinion impact, but increased the scale from being belligerent.

**Military:**

* Manually doing a shattered retreat is now a 10% loss to strength instead of 50%.
* Fixed being able to recruit to a boarded army from a location
* Fixed exiling armies in places you declare war on
* Levies now disband if the locations they come from are lost.
* Complete refactoring of several combat algorithms like damage dealing, initiative, and combat speed, and exposing themino to more helpful tooltips
* Patrol the seas objective works for the Hanseatic League
* Fixed an issue where military tactics had an impact on naval battles
* The cost of transporting levies now scales with the size of the levy, making them cost the same to transport as regulars.
* Reduced the Age penalty for levies in the Age of Revolutions to 10% instead of 20%.
* Removed the "takes less damage" from artillery and auxiliary regiments.
* Fixed prosperity decay bugs from looting and sieging

**Geopolitics:**

* Allowed inland exploration
* The fishing village applies a small bonus to harbor capacity
* Can now colonize Iwo

**Other:**

* Pops will no longer lose lots of literacy instantly if the max literacy is reduced.
* Changed the bonus modifier of the "Renaissance" to be a cultural influencer percentage instead of flat, as originally intended.
* Navies will no longer keep army-based nations without armies alive

### Content

**Map:**

* Added more lumber to Scotland (Badenoch, Cowal, Inverary, Ayr)
* Corrected the German dynamic name of 'Poznań', so now it's the correct one, 'Posen'.

**Setup:**

* Removed some Mamluk alliances with beyliks that were too weak
* Hendrik van Reginar is not the heir of Brabant
* Changed the Aragonese localization of the locations of Aragon into medieval Aragonese
* Made all setup and content instances of the German name 'Bernhard' to use its dynamic instance ('name\_bernard') instead.
* Removed a duplicate character instance of bishop Bernhard von Lippe, ruler of Paderborn.
* Corrected the death date of the Teutonic Order Hochmeister Werner von Orseln, so it's now aligned with the ruler term one.
* Added the correct 'Alès' location to the cores of Toulouse.

**Situations:**

* The Italian Wars Situation action "Plan Campaign in Italy" now requires the actor not to have any levies raised
* Fixed Western Schism getting loads of support for whoever had the most dip rep only
* Western Schism - The AI will now use the Declare Oboedientia Action more flexibly, depending on which candidate they like more
* Fixed an issue wherein the ‘Rise of the Turks' situation displayed incorrect end requirements when the strongest beylik is not the Ottomans
* Fixed missing localized reasons for war declaration in the Nanbokucho situation
* Added background illustrations to two Rise of the Turks-related events
* Italian leagues can now be created 2 years after one of them was dissolved via war
* Fixed an issue that indefinitely prevented new Italian leagues from being created in the Italian Wars after one of the leagues was forcefully dissolved
* Becoming the revolutionary target will no longer spawn units every month
* Blocked Nanbokucho CB from being created against countries supporting the same side
* Rewrote the visible = { } of the Rise of the Turks situation to account for the strongest beylik not being the Ottomans
* While in the map mode of the Rise of the Turks, subjects of the strongest beyliks will now have striped instead of solid colors
* Reshuffled the end requirements of the Rise of the Turks for better readability
* The Rise of the Turks ending now correctly displays the appropriate ending event based on its end requirements
* The rise of the Turks situation no longer takes into account subjects as contenders
* Fixed Sengoku missing a clan and showing a blank one

**Disasters:**

* Increased the % chance of the Castilian civil war disaster occurring and made sure the ruler during it cannot be Alfonso XI
* The event "Spread of Islam" during the "Death of Hayan Wuruk disaster now correctly spawns a Sufi lodge
* The disaster "Crisis of the <Chinese> Dynasty" now correctly resets its variables on completion
* Fixed an issue where a dead claimant would still be shown on the disaster UI instead of their successor
* The event "Death of a Claimant" (hook\_and\_cod\_wars.1200) option d now ends the disaster if both claimants are dead and buried
* The ‘Court and Country’ disaster starting event now grants 2 new country modifiers based on whether the player wants to eventually become Liberal or Absolutist
* The ‘Court and Country’ disaster now reduces estate satisfaction by -10%

**International Organizations:**

* Fixed Independence War Target
* Improved authorization for the expanding Shinto action
* Fixed the independence movement acceptance criteria
* Removed duplicate action for joining Autocephalous Patriarchates
* The AI will no longer constantly propose the "maintain federal status" policy for unions
* The estate satisfaction hit from votes in unions is now only applied if you actually vote. Refusing to make a choice will no longer punish you
* The “Lordship of Ireland” action "request planters" now correctly triggers migration
* Fixed an issue with a spammy “Lordship of Ireland” regency pop-up message
* Fixed an issue with the action message display after using invite planets in the Lordship of Ireland
* The protestant union and the catholic league will no longer be locked into a deadlock when either leader is in a union with another leader. Additionally, union members will now try to join the side that already contains one of their union partners
* The "unified external diplomacy" policy of unions now makes the AI less likely to declare wars as it adds -0.75 aggressiveness and +0.5 carefulness. Additionally, it now also gives -2+25% stability cost on no CBS wars and now also unlocks the "enforce peace" country interaction on junior partners
* Blocked the Shogun from being able to get claims from the Imperial Court

**Events:**

* The Pavia event "Expulsion of the <Dynasty>" (flavor\_pav.1) now requires Milan to have the same Government type as Pavia
* The French Event "The Jacquerie" will no longer fire while France is already in a civil war
* Margarete von Tirol will no longer immediately select a new husband upon divorcing her Bohemian spouse
* The English event "William Pitt the younger" (flavor\_eng.35) will no longer target William Pitt the Elder
* The Florentine event "Consolidation of Power" (flavor\_flo.49) will no longer fire while Florence already has a major reform
* The occurring child via the event "soirée" (dynastic.6) and "the consequences of our actions" (dynastic.6001) is now properly attributed the "bastard" modifier
* The father of the child born via the event "soirée" (dynastic.6) is no longer stuck in the shadow realm
* Event "soirée" (dynastic.6) now tries to pick an eligible character before creating one
* The Ottoman Dragoman feature now has proper tooltiping
* The Byzantine event for the Katholikon Mouseion now properly gives you research progress if you already have a library in Constantinople
* Annexing Rome as a catholic will now trigger an event to potentially return it to the Pope
* The Genoese event "Founding of the Merchant Republic" (flavor\_gen.1) will remove excess major government reforms before assigning "Merchant Republic"
* The event "The Gallipoli Earthquake" will now fire instantly instead of having a delay
* The Byzantine event "Gemistos Plethon" now activates the Hellenic religion
* The ‘Holy League’ Crusade should now correctly have Constantinople as its war goal
* The ‘Holy League’ Crusade ending events no longer fire on a separate peace
* Fixed the second Byzantine event, "A hand for peace", it can no longer attempt to marry a dead ruler to the Byzantine princess
* The Florentine event "Formation of the Medici bank" is now also available for Tuscany
* Many event texts that begin with a country name will capitalize that country name if it isn't already capitalized
* Corrected the historical info description of the event "A Clash of Culteranismo and Conceptismo" (flavor\_cas.94), so it now shows the correct one, instead of the one for "Ortographical Reform of de Herrera" (flavor\_cas.90).
* Fixed a missing dynamic loc in the event "The Hussite Wars" (hussite\_wars.10), now it will correctly use the 'commoners' estate name in the text.
* Correctly localized the first name of the character Zafar Muẓaffar, created by the event "The Governor of Gujarat" (flavor\_dlh.4).
* The radical reforms event (mercantilism\_events.6) can now only fire in and after the age of reformation
* Swapped the Commoners' estate satisfaction change for the abolition of feast days (anglican\_events.9) event to now
* The colony of <x> (colonial\_charter.100) event will no longer turn cores back into integrated
* Limited effects of the Bountiful Harvest event (random\_event.91) to locations owned by the country

**Government:**

* Fixed broken localization in the Latin Empire formable description
* Implementation of the peasant republic reform for Dithmarschen now removes any other major reform
* Romania is now a level 3 formable, enabling Transylvania and Moldavia to form it
* Made the following reforms free by assigning a +1 reform slot to each one: “Daedongbeob”, “Sadae policy”, and “Powerful viziers”
* The government reform "Sovet Gospod" of Novgorod is no longer a "major" reform
* The "Elective Succession" and "Dynastic Elective Succession" now have an additional warning line in their description, which informs the player that these succession laws can break unions.
* Fixed missing trigger localization for the Devshirme policy
* New LIV ‘Livonia’ formable created to reform the Livonian Order
* LVA ‘Livonia’ formable repurposed into a Baltic culture formable
* Made Moldavia a tier 1 formable, so it can later form Romania (which is tier 2); also reduced the number of required locations to be formed to 40, so it doesn't need to conquer any land from the Golden Horde to have it formed, just unify the Moldavian minors.
* Fixed an error in the description of the 'Tsardom' government reform, now it should show 'Russia' correctly.
* Enabled the Ancient French Taxation reform to be removable if France reaches > 50% centralization and the birth of the permanent taxation system event hasn't fired.
* The parliament issue sponsor a trade expedition will now construct a market village or a marketplace in the capital if no building like it exists already
* Change policy agenda can no longer target otherwise locked policies
* The Prikazi government reform now displays the cabinet actions that it unlocks
* Added failsafe to the 'Communal Living' marriage policy, so now it also requires being Hussite, on top of having the 'Adamite Services' aspect active.

**Economy and Production:**

* The House of Parliament Building now employs 200 Nobles instead of 2000
* Great Madrasas now also promote tribesmen like normal Madrasas
* Rebalanced, where the Japanese clans are allowed to build their buildings
* Improved description of Beeswax

**Society:**

* The Hellenic faith now correctly grants infantry combat ability instead of levy efficiency
* Changing religion will now always automatically remove any active excommunication against the country
* Baltic Germans added to the Baltic culture group
* Added 'invite foreign cleric' action. Christian countries can spend religious influence to spawn a new high-adm cleric with a foreign culture.

**Diplomacy:**

* “Hanseatic member” special subject now pays much less manpower and sailors to the Hansa (assuming they have the capacity to do so)
* The "dubious claims on province" and the "parliament-approved claims on province" casus belli are no longer available to be fabricated via the spy network
* The "Negotiate Succession Law" country interaction now informs the player when the succession law cannot be adopted by the recipient
* The military sponsorship relationship now has a diplomatic capacity maintenance cost of a guarantee
* The opinion penalty from not fulfilling a promise of land does not decay by 1 each year
* The "demand unlawful territory" diplomatic action will now automatically release a completely new tag instead of granting that land directly to the emperor
* The diplomatic action "enforce peace" can no longer target wars where the actor is in the war with them on the same side already. It also can not target wars where the subject is the leading defender in the war, which means they can no longer be saved from any invading country
* Capped the minimum value of excommunication opinion hits to -200
* Papal action “Excommunication” is no longer possible, while curia actions are otherwise blocked
* The "negotiate succession law" diplomatic action now changes the heir religion law to a policy that is actually compatible with your religion. In other words, if you are orthodox and your junior partner is catholic, you would force them to take the "same religion group" policy instead of the "same religion" policy one

**Military:**

* Fixed an issue with Renaissance Mamluks only having 50 men and tweaked their extra bonuses

**Advances:**

* Expanded the plausible areas of spawning of the Renaissance to all of Northern Italy
* Unlocked the "warrior societies" advance from Tenochtitlan for the Aztecs formable
* Unlocked 2 advances from Sicily and Naples for the Two Sicilies formable as well

**Other:**

* Corrected many instances of this\_opinion\_of\_prev wherever it was applied incorrectly for AI weights
* Fixed the Aztec tag not having a name
* Hungarian, Croatian, Czech, and Slovak regnal numbers appear as "ii." with the dot, as in German

### 2D art

**Icons:**

* Adjusted colors and values of some privileges to match the style of the other privileges

**Illustrations:**

* Polished 3 Disasters illustrations

**Flags:**

* Flags for Baltic formable

**Other:**

* Added icons for tws\_capable\_vicars,tws\_ensure\_loyal\_families, sun\_must\_rise, new\_fire\_ceremonies advances

### AI

**Government:**

* Fixed an issue where AI would incorrectly think that crown power would influence absolutism\_vs\_liberalism before the available age
* Ottomans will no longer switch their religion away from Sunnism when playing with historical AI
* Fixed an issue causing AI to incorrectly use culture assimilation cabinet action in locations with -100% assimilation speed
* Added AI score for research speed modifier
* Increased AI score to unlock deus vult advance to enable religious CBS

**Diplomacy:**

* Fixed additional issues where AI Ottomans would pay gold to get CBS against targets that had a stronger alliance than they
* Fixed issues where large cities would be too desirable for AI to take in peace deals, causing border gore
* Fixed an issue where AI applied scripted rules from war goals for taking things in peace deals, even when defending
* Fixed issues where AI would improve relations with nearby countries and then immediately cancel them
* AI Ottomans will now prefer to create a claim province CB against provinces that are not Constantinople, as it often causes them to lose the war against Byzantium
* AI Ottomans will no longer create cbs against countries they are planning to diplomatically subjugate via their special situation actions
* AI Ottomans will no longer create more claims when in debt or while below 0 stability via their special actions
* Greatly increased AI desire to attack a country if they already have a good CB available, compared to fabricating one from scratch

**Economy:**

* Fixed an issue where the player automation gold limit was being applied to AI countries
* Fixed an issue where AI would not want to build a building if the location had a maximum of 0 of the required pop type
* Added AI logic for minting threshold modifier
* Fixed an issue where AI was overvaluing roads due to not factoring in the tax rate from the propagated tax base

**Production:**

* Gold to save automation slider now works for RGOS, roads, and ranks too

**Military:**

* Fixed an issue where AI would use cbs even with a negative ai\_selection\_desire

### Interface

**Map Modes:**

* Added stripes to the non-endemic disease map mode to show where there are some individual pops infected
* Added a trade range map mode that allows selecting and showing trade range for specific markets (defaults to showing all markets within the player trade range).
* The tactical map mode now shows province capitals also for unfortified locations.

**Alerts:**

* Fixed naval levies number
* Add estate marriage checks to the unmarried children alert
* The alert for parliament now conveys both current support and time left at a glance
* Make the member leaving the union alert red

**Panels:**

* Renamed mapmode searcher to mapmode Legend and unified the Legend button with the Active Mapmode button
* Replaced a separation bar with a proper texture in the Society panel
* Fixed a bug in the War panel where the ticking warscore icon wasn't showing for the defender
* Religious actions now need a confirm click
* Fixed the Parliament pie chart appearing twice
* Fixed Diplomatic Range not working as intended in diplomatic selection panels.
* The IO panel now shows potential votes on tooltips for laws
* Fixed the war panel having mixed information between sides. Now everything is properly positioned on its attacker/defender side.
* Organized the order of diplomatic relations on panels
* Fixed selected options not having a visual distinction
* Multiunit actions now refresh constantly, so you can merge them as soon as two units are in the same location.
* Fixed an issue where two war goals were shown (one for the attacker and one for the defender) when there is only one wargoal per war. It’s now only displayed on the attacker’s side, since the decision is made by the attacker.
* Fix the parliament agenda’s actions, not updating the description text
* Filter out marriage candidates and countries not eligible due to the Celtic marriage ban from the marriage finder
* Estate tax sliders now update the game state immediately when moved, fixing a broken extrapolation of estate satisfaction equilibrium.
* Upgrade building button: added Ctrl and Shift functionalities to upgrade buildings.
* Upgrade building button: made not impossible to build more levels of the upgraded building type than the current levels of the obsolete building.
* Improved visual info of levels being upgraded in a building.
* Fixed diplomatic macrobuilder to create a casus belli to show a tick on every country on which you can start creating a casus belli.
* Fixed the truce's remaining time icon being covered by the truce icon.
* Additional coat of arms for historical characters and various starting dynasties
* Fix the inconsistency between the number of affected locations and their tooltips
* Fix the Government reforms cards' icons not being clickable when instituting a new reform
* Fixed the sort order of trade capacity in the economy -> markets -> countries panel, and made the player country always show at the top.
* Fixed a bug where the discipline icon was showing for naval battles
* Generals in battles now look properly greyed out if they still haven't arrived at the army
* The war widget in the current relation now shows the current warscore with a number instead of a pie chart
* Fixed the army strength amount displayed in the subject manager
* Fixed text format in the formables panel and ledger
* Corrected the order of columns in the ledger's dynasty tab
* Improved responsiveness and data shown in the estate's top bar and its tooltips
* Added a shortcut in the top left corner's country rank to go to known countries
* Added heir icon for children's heirs in character panel
* Added ages to rulers in government and foreign panels, and in education alert children entries.
* Fixed reorganize units not working. Now it will open the single unit panel of one of them and show the other one in the right menu.
* Improved readability and layout for research view
* Made so that ruler history shows recent rulers at the top by default
* Government reform cards are clickable again

**Outliner:**

* Correct progress for “Settle frontier” cabinet action
* Stalled constructions in the short outline version

**Tooltips:**

* Cleaned up some disease tooltips to be a bit more informative
* Fixed inconsistent usage of Artillery Barrage and artillery bonus concepts
* The tooltip for pinning things to the Outliner or to Context menus now says which is which
* Fixed typo in the Promotion game concept
* Navy strength tooltip fix
* Stalled buildings on production tooltip fix
* Fixed the breakdown for the max building amount tooltip
* Improve tooltip logic for language power when the language is #1 worldwide.
* Clarify attrition tooltips between location-specific attrition and external sources of attrition
* Fix attrition tooltips showing information it shouldn't
* Fix the IO policies tooltips containing blank spaces
* The tooltip for societal values includes tips to push it further for both sides (they used to show only for the dominant value)
* You can now hover the number of max buildings/RGO levels in the production tab to see the reasons for the max levels
* Construction tooltips display if construction is stalled
* Harmonized tooltip columns for improved readability in market tooltips
* Declaring bankruptcy now shows all effects.
* Improved the player sync tooltip over the date in multiplayer to be more readable and have a scrollbar if you have lots of players.
* Add information about the highest great power in the great power rank tooltip
* Added concepts for war attacker and defender, to separate them from battle attacker and defender
* Added subheaders and fixes to market tooltips.
* Fixed missing localization trigger in the “Grant Elector” status action
* Include more information on the possible consequences of removing locations from IOs, such as the emperor's opinion penalty.
* Tooltip for artists now explains that the max number only limits the amount you can manually hire, but you can have more through events
* Fixed the truce tooltip and circular widgets in the relations container
* Improved estates tooltips in the top bar
* Grouped estate gold together with income and expenses, and now shows a total balance.
* Fixed the antagonism tooltip to show all countries listed in a scroll list
* Fixes to tooltip showing missing goods when nothing was missing.
* The Retreat blocked tooltip now says the correct number of hours, not just 5.

**Other:**

* Fixed the in-game paused border shadow appearing when the menu was open and the back shortcut or control groups shortcut was pressed.
* Explain the cost of breaking a truce in a war pop up
* Updated the declare war prediction banner with a new layout and colors, and changed margins on the header sides art
* Fixed the diplomatic action to “Ask to join the IO“on its macrobuilder without a specific target
* Fixed the credits background dimensions for vertical resolutions
* Improve suggested trades by making the suggestions less prone to failing when activated
* Correct the ruler title on the country rank change
* Include rival removal cost in confirmation pop-up
* Call into war action in diplo macrobuilder now works
* Fixed loading screen game concepts, trying to show icons when not loaded yet.
* Added a relation about to be broken alert
* Fix the administration-infiltrated message showing the wrong country being infiltrated
* Button for imperial actions on the HRE panel for the Emperor
* Parliament title out of bounds fix
* Show the IO treasury on the subheader
* Marriage finder entry displays heir or line of succession icon
* Renamed 2 of the 3 modifiers that were currently named "institution growth" into "local institution growth" and "global institution growth."
* Add a new tooltip in the market view to show all profits made by trades grouped by goods for each country

### 3D art

**Portraits:**

* Added new historical characters visuals (eng\_hobbes, erasmus, mos\_ivan\_i\_danilovich\_kalita\_rurik).
* Added new historical characters visuals (fra\_rene\_descartes, mei\_johann\_wolfgang\_goethe, dan\_brahe).
* Added new historical characters visuals (ned\_michiel\_de\_ruyter, gbr\_adam\_smith, pap\_bernini\_script, boh\_jiri\_z\_podebrad, ara\_vincent\_ferrer).
* Added new historical characters visuals (fra\_jean\_jacques\_rousseau, spa\_ignatius\_of\_loyola, spa\_blas\_de\_lezo, spa\_velazquez\_script, hab\_ludwig\_van\_beethoven, por\_magellan).
* Fixed transparent characters when wearing Deccan's veil.
* Portrait long hair clipping issue fixed
* Added new historical characters visuals (jap\_kusunoki\_masashige, azt\_tlacaelel, azt\_tenoch, chi\_zheng\_he, maj\_hayam\_wuruk, swe\_birger\_jarl, corfitz\_ulfeldt\_script, fra\_robespierre, swe\_axel\_oxenstierna).

**Other:**

* Fixed the reformation units' colors

### Audio

**Sound:**

* Fix ambient sound playing army effects instead of navy ones in the unit overview panel

### Modding

**Script:**

* Added the on\_country\_rank\_change on\_action
* Fixed an issue which prevented the on\_rescinded\_effect effect from special\_status to have the scope: source available, which scopes to the special\_status itself
* any\_primary\_or\_accepted\_tolerated\_culture' and associated script lists renamed to 'any\_primary\_or\_accepted\_or\_tolerated\_culture'

**Triggers:**

* Added a trigger for 'province\_population'.
* Added the average\_estate\_satisfaction trigger
* Fixed faulty documentation for the years\_in\_international\_organization trigger
* Fixed an issue with is\_available\_for/is\_visible\_for/is\_allowed\_for, which made these triggers return false for any object that does not require an advance
* Add local\_estate\_power and local\_relative\_estate\_power triggers

### Multiplayer

* Fixed desynch caused by revolt wars not being persisted
* Fixed desynch caused by religion focus progress not being persisted if it was not active
* Fixed desynch caused by generating different names for new subunits

### Translation

**Polish:**

* A total of 24 bugs have been corrected related to the Polish language

**Spanish:**

* A total of 12 bugs have been corrected related to the Spanish language
* Fixed incorrect $mapmode variables.
* Fixed incorrect $rank\_kingdom\_horde\_ruler\_male$ variables
* Fixed incorrect Genghis Khan variables
* Fixed incorrect capitalization in $bengali$ variables
* Fixed grammar issue with $basque$ variables

**French:**

* A total of 409 bugs have been corrected related to the French language
* Fixed multiple incorrect variable issues
* Fixed incorrect translation bugs
* Fixed missing translation bugs
* Fixed wrong language bugs

**Brazilian Portuguese:**

* A total of 1243 bugs have been corrected related to the Brazilian Portuguese language
* Corrected capitalization of some terms in mission titles.
* Standardized capitalization of important terms in game texts.
* Corrected placeholders that were not displaying character names correctly.
* Retranslated some game texts that were incorrect.

**Chinese:**

* A total of 380 bugs have been corrected

**Korean:**

* A total of 194 bugs has been corrected related to the Korean language.
* Corrected incorrect transliterations to more accurate pronunciations.
* Modified some texts to better convey their meaning.
* Corrected the display of numerical values in texts.

**Japanese:**

* A total of 34 bugs has been corrected related to the Japanese language
* Changed the spelling of Chinese, Korean, and Vietnamese location/character names that had been in katakana into kanji in many cases.
* Fixed placeholders in instances where an incorrect or outdated placeholder was in use.
* Checked spelling/made consistent some historical terms.
* Fixed typos caused by kanji conversion errors in certain segments.

**Turkish:**

* A total of 64 bugs have been corrected related to the Turkish language
* A number of fixes in the source text were applied to the localized text.
* Certain strings, including culture name placeholders were corrected according to how culture names are displayed
* Improvements were made to the text based on the in-game context.
* A small number of linguistic issues were fixed

**German:**

* A total of 30 bugs have been corrected related to the German language
* checking of eliminated English contractions and their applicability in German
* streamlining of the form of address
* further standardization and streamlining of the general game vocabulary

**Russian:**

* A total of 195 bugs have been corrected related to the Russian language

### Miscellaneous

**Settings:**

* Exiting using Alt+F4 in Ironman will now save the game.
* Fixed Ironman not being autosaved monthly

**Other:**

* Binary savegame optimizations by avoiding writing unnecessary whitespaces.
* Enabling texture streaming for more icon types, which saves around 200mb vram.
* optimized recalculation of cache data by delaying the name generation

**Bugfixes:**

* Fixed the continue button in the main menu when the last save is on the cloud
* When saving to the cloud should always use the binary and zipped format
* Prevented units from moving if no one was looking at them, stopping
* Reviewed most event titles and options that were incorrectly showing hyperlinked texts
* Union event "Ruler Ignores Country" now uses proper pronouns in its text
* Fixed countries starting with zero diplomatic capacity used
* Fix road construction, building outdated roads over more modern ones
* Fixes some issues with levy cooldowns in provinces.
* Fixed so the take on debt message now works for non-player actions
* Removed some unused files
* Fix the western schism situation panel not updating at the end of the first council

## 1.0.9

Patch 1.0.9 was released on 2025-12-04[[10]](#cite_note-10) with checksum *6cba*.

### Bugfixes

* Fixed a CTD related to levy constructions
* Fixed a CTD related to military constructions
* Fixed an issue with players getting game over screen when playing non-settled countries and someone hotjoining.
* Fixed a CTD related to unit movements when unit view is not open

## 1.0.10

Patch 1.0.10 was released on 2025-12-17[[11]](#cite_note-11) with checksum *1cb4*. It was initially released as an open beta on 2025-12-04[[12]](#cite_note-12).

### Highlights

* Added several new advances for
* Kurdistan
* Manchu
* Sokoto
* Italy
* Malacca
* Malaya
* Added a new government reform for Sweden's Alsnö stadga
* The war of religions situation now has an action for non-members of the HRE to join the ongoing war of religions
* Rich countries should now field significantly larger armies in the mid and late game

### New Features

* Added 6 new advances for the Kurdistan formable country
* Added 6 new advances for the Manchu formable country
* Added a new government reform for Sweden's Alsnö stadga
* Added 6 new advances for the Sokoto formable country
* Added 7 new advances for the Italy formable country
* Added 6 new advances for the Malacca formable country
* Added 6 new advances for the Malaya formable country

### Gameplay

**Government:**

* The "ruler must be commander during war" now allows female rulers to be generals. Gender is no excuse to avoid dying for your nation, royal peasant!
* Cognatic primogeniture goes through dead children in the right order
* The Magna Carta now also gives some levy combat efficiency.
* Enforcing culture on a subject will cancel their attempts to assimilate into other cultures
* Fiefdoms and dominions can no longer pump up stats of their ruler through the parliament.
* Reduced the op byzantine conscription from insanity to "decent"
* Gaelic Clergy & Burghers are also part of the clans, just like the nobles now.

**Economy:**

* Further revisions of the population demands to balance estate economies.
* Increased the strength of navies' anti-piracy by a large amount.
* Both exporting and importing now spread institutions
* Nobles' recruitment center now gives 25 nobles, down from 250.
* Pop demands for weaponry for peasants are now checking the privilege again.
* Paved and later roads are now giving a bit better paths for market access, changed from 15% -25% to 20%-40%. The downstream river is still 50%.
* Market villages now add 10 burghers per level
* Market access uses the best of upstream river, downstream river, or road connection now, instead of a weird combination.
* Proximity bonuses from rivers now work through lakes
* Colonial charters will not benefit the original location if colonial maintenance is 0.
* A lot of trade-related buildings, like marketplaces and market villages, now improve local market access.
* Rebalanced a few stacking development benefits.
* Prosperity gains have been adjusted for better balance.
* Rough vegetation slows down road building much further.
* Fixed so lakes have maxed maritime presence always.
* Roads now make proximity costs ignore vegetation!
* Improved market range pathfinding to include different coastlines, for example, Alexandria can make trades with India
* Increased payment from colonial nations in the age of absolutism and the age of revolutions
* Bank Ledgers gets 25% of the inflation reduction it previously had, but the trade maintenance reduction is instead 4x as big.
* The province's Starvation status will now update
* Fixed war reparations income
* Adjusted some inflation reduction modifiers for better game balance
* Upstream proximity costs are now as good as downstream proximity costs.
* Fixed a bug where automated trade would not be maximizing its available Trade Capacity.

**Production:**

* Can no longer build worse forts in locations with better ones

**Society:**

* You now need to have researched the 'patron of the arts' to advance to commission art.
* Fiefdoms, dominions, and state banks can no longer change religion on their own.
* Religion and culture country lists get updated properly when releasing historical subjects
* Tweaked a lot of bonuses to population growth that could stack rather high.
* Limited the marriage rules to the ruling dynasty closely related to the ruler.
* Cultures that have 0 pops will no longer cost any cultural upkeep.
* Reworked a bit how non-ruling dynasties marry and when, and added support for dynasties to be tagged as more important for this.
* Randomly Generated Characters will now only be from primary, accepted, or tolerated cultures.
* Cossack Identity privilege now completely blocks tribal promotion.
* The maximum number of married males in a country, when considering Dynasty Marrying logic, now ignores close relatives to the current ruler.
* Non-Accepted cultures ' characters will no longer join the court of their annexer.

**Diplomacy:**

* Fixed the they do not desire anything more peace acceptance factor is not triggering when the peace offer was set to demanding.
* Fixed the current sieges peace acceptance impact being calculated differently when the peace offer was set to demanding and offering.
* Fixed the start annexation diplomatic action being visible on subjects that were already being annexed.
* Asking for money via favor is now capped at 4 times of requester's tax base
* Diplomats work properly once above the limit, allowing a monthly reduction but no further monthly increase
* Acceptance of marriage offers will now include the age of the consort before selecting the recipient country, fixing the issue of inconsistent acceptance of marriage offers in different target selection windows.
* Fixed various bugs with denied military access CB
* Isolating from allies now requires you to be allied
* Seizing territory from your subjects makes the locations conquered, and the amount of liberty desire scales with population, buildings, and development.
* Calling Ally uses the correct border distance calculation for AI acceptance
* Fixed a bug where the 'Intervene in War' action would fail and incorrectly consume a diplomat
* Can now cede locations through corridors
* No longer give out claim throne CBS for heirs under a regency
* Failure to give adequate land to an ally in a peace treaty will give a trust hit rather than a trust bonus
* Violating sovereignty is not instantly cancelled if you're already allowing them military access
* When subjects break free of their overlord, they (and their subjects) will also leave any wars they were called into by their overlord
* Fixed the case where junior partners don't get called into war properly
* Independence movements trump subject relations when declaring war, and subjects trump unions
* Increased the impact of opinion on subject loyalty by 50%.
* Allow choosing a leader for created subjects
* Fix incorrect Spynetwork calculation and tooltips
* Vassal can no longer invite Overlord to the independence movement against them after reloading the save file
* There is no longer any penalty for being a higher rank and taking land from lower-ranked countries.
* The estimated annexation date of union partners and subjects will no longer display the end date of the game if the opinion of the target country is too low to annex them. Many of the union annexations are actually much faster than the tooltip was implying...
* The Annexation action is now in the "Union Action" category if the actor and recipient are in a union. In every other instance, it continues to be a subject action
* Changed the rules for rivals so that it's their opinion of you that matters, ie, the one you can affect. So, if you improve your opinion of someone by over 100 points on a rival, they will stop being your rival, etc.

**Military:**

* Rebalanced how good levies are with a decent progression through the ages.
* Battles will now begin with a maximum frontage of 125% in each section. Any units exceeding this limit will be moved to reserves.
* Reduced frontage bonus from defensive societal values
* Fixed a bug where morale was not scaled by strength.
* Drilling now sets a forced 100% maintenance for that unit
* Transport costs now scale with how many men you have in the unit.
* Armies now take damage to morale from attrition, instead of gaining morale from it :)
* Garrison recovery ticks are on daily ticks, not on monthly, but slower.
* The threshold of recruiting a new group of levies is now 20% instead of 50% recovered.
* Increased Frontage for Heavy Ships from 1.25 to 1.5
* Increased Flanking Ability for Light Ships from 1.1 to 1.2
* Reduced Frontage from 0.75 to 0.5 for Galleys, while also increasing initiative from 1 to 2.
* Merc leaders are no longer part of the court
* Added a levy\_recovery\_modifier that is gained from many ways to get levies to recover faster.
* Expected Army Size has been tweaked to scale better over time.
* Military leaders don't get downtime if they're not actually moving location when assigned to new units or merged in the same location
* You now restore levies even if you explicitly try to delete the unit.
* Cavalry now takes 25% less damage, not 75% less damage.
* Increased impact from high peasant satisfaction on levy recovery from 20% to 50%.
* Increased levy recovery from revancism by 4x and increased from 10% to 33% in defensive wars.
* Levies now revover 20% faster when at peace.
* Naval combat now stackwipes as it did in 1.04

**Geopolitics:**

* War score calculated correctly for vassals
* Fixed a bug that would make maritime presence drop to 0 when annexing a country
* Colonial charters keep to their source location, with more restrictions on where you can specify as source (min 1k peasants in location)
* Colonial charters no longer need a source province (too restrictive) and instead just take pops from the capital region
* Fixed some disease outbreaks that were never-ending

**Advances:**

* Invalid advances have now been removed from the research queue and won't be researched

**Other:**

* Claim throne CB can now include the claimant, so you get to install specific people on the throne (i.e., people who do actually have a claim)
* Disease stats get transferred from the old country to the new when losing a revolt
* Added individual disease resistance modifiers, pumped up the initial malaria death rate
* Hiring Advisor now costs government power, generals' army tradition, admiral navy tradition, and artists costs prestige.

### Content

**Map:**

* Tweaked the dynamic localization in the Hungarian language of the location 'debrc' to 'debrecen mačvában' ('debrecen in mačvá'), so it doesn't get confused with the other 'debrecen' location.
* Removed all the lakes placed beside the sea, as it was breaking some calculations.
* Made the British and Irish natural harbor capacity more accurate

**Setup:**

* Forming Belgium also considers locations in the Brabant area
* Added the dyes guild to the Chinese town and city setup to improve lacquerware industry functionality.
* Removed the French guarantee of Scotland at the start, preventing them from being called into the Scottish civil war. England now starts with a mutual truce with Scotland and Balliol.
* Fixed the tooltip of the religious aspect to worship the mexica god Ixchel
* Added a truce on start between Portugal and Castile, 6 months before the real date, due to gameplay reasons.
* England now starts with the "primacy of the nobility," "shipwright contracts," and "common militias," estate privileges to give England a better chance during the Hundred Years' War
* London now starts with a dock
* Inês de Castro now correctly appears as a member of the 'Castro' dynasty.
* Adjusted the starting building setup of Athens and Thessaloníki, so they use the one for Greek cities instead of the current one for Greek towns.
* Reverted the raw material of Lohja to fur, so now the Swedish event "the iron mines of Ojamo" (flavor\_swe.44) makes sense once again.
* Knights Hospitaller began as a duchy rank
* Added Old St Paul's Cathedral as a building in setup.
* Fixed the birth date of Gongmin of Goryeo
* Fixed starting heir selection for Florence
* Corrected the Hungarian name of 'Debrc' from 'Debrecen Mačvában' to 'Végdebrecen', as per forum feedback.
* Added a "Good relations" starting modifier between Castile and Portugal, so they are less likely to go after each other at the start of the game, and also made it easier to trigger the 'Battle of Río Salado' event chain.

**Situations:**

* Embracing the reformation action in the reformation situation will no longer remove the current heir policy
* Cardinal seats are no longer destroyable during the Western Schism situation
* Removing locations from a league during the Italian Wars will no longer tank the league leader's opinion of you
* The Golden Age of Piracy action "Create a Subject Pirate Nation," now has requirements that make it easier to be used, and also reworked its AI reasoning
* The rise of the Turks' situation will no longer end if the primary contender, due to a civil war, temporarily drops below the 100 location threshold after the year 1400
* Removed an obsolete situation trigger for the rise of the Turks situation
* Improved display of the declaration of war for the regional supremacy action of the Red Turban rebellions
* Reworked the AI behind the action "request war entry" in the Hundred Years' War
* The event "France wins the Hundred Years' War" now takes into account France having a regent in the event's description
* The war between the leading countries now has less of an impact on choosing a religious league to join
* Fixed some issues with the legend keys in the Rise of the Turks situation map modes
* The war of religions situation now has an action for non-members of the HRE to join the ongoing war of religions
* The rise of the Turks' action "press claims" now informs the player that they can't have levies raised to use this action
* The event "pious call to arms" of the Hussite Wars will no longer occur for the subject countries
* Added localization to some unlocalized reasons to join a league during the Italian Wars
* Multiplying the willingness of the AI to use the Columbian Exchange actions
* English AI will now be more strategic and capable when it comes to "buying out" French subjects via the "influence French subject" action during the Hundred Years War
* Fixed an issue with displaying the wrong beylik in the opening event of the Rise of the Turks
* The HRE emperor will no longer be able to "enforce religious unity" on the Hussite countries during the Hussite Wars situation
* Fixed an issue with the post-1400 situation trigger of the rise of the Ottomans
* The Defection action during the Hundred Years' War is only available for subjects of either side on the European Continent
* Winning the Hundred Years' War now grants a strong modifier as a complementary reward
* Rebalanced some weights for the Defection action in the Hundred Years' War
* Bohemia will be more likely to convert to Hussitism
* Rewrote many calculations for the Hundred Years' War actions
* The AI is now better at using the actions of the Hundred Years' War
* The French AI will now make a more informed decision in the "The Influence of <Subject>" event (triggered via the "Demand Appanage Promotion" action
* The Hundred Years' War actions no longer cost ducats, they will now only cost 10 Legitimacy
* Removing the Anatolian Beylik reform can now only be done after the conclusion of the Rise of the Turks situation
* The Guelphs and Ghibellines situation now removes the "Force into our Faction" casus belli from all Guelphs and Ghibellines members when the IO disbands. Additionally, leaving the faction will also remove this casus belli from you, as you are no longer part of any faction to force an enemy into
* Added a negative opinion modifier towards annexable neighbors for Beyliks during the start of the Rise of the Turks
* Adjusted the territorial requirements to end the Hundred Years' War
* Newly appearing Beyliks are now properly counted as part of the Rise of the Turks Situation
* Subjects that use the "Defect" action during the Hundred Years' War will have their "Diplomatic Betrayal" Subject Loyalty malus removed, as that would be unfair to the new overlord
* Henceforth, only subjects with their capitals in France (region) or in the Flanders, Brabant, or Holland areas will be able to defect during the Hundred Years War via the "Defect" action
* The modifier "Appanage Betrayal" is now -10 Subject Loyalty instead of -100
* Slightly lowered the chance that an AI subject uses the "Betray our Allegiance" action during the Hundred Years' War situation
* Added the "Attempt Defection" action for subjects of England or France during the Hundred Years' War situation

**Disasters:**

* The hook and cod wars event "foreign interference" will no longer target rebel countries
* Fixed a wrong trigger possibility in the Castilian Civil War, which was using the 'ivrée' dynasty, instead of the 'Castile' one.
* The succession disasters (byzantine, castilian, and generic) no longer allow the creation of subjects and have rebalanced modifiers
* The effects of the opening event of the Ciompi revolt disaster are now more readable
* Teenagers and children will no longer rebel against their parents during the succession crisis disaster

**International Organizations:**

* You can now create the "dissolve the tatar yoke" casus belli if you are an empire
* PLC revoking empower orthodox nobility will no longer trigger daily pop-up spam for leaving autocephalous patriarchates
* The subjugate high kingship member CB now only targets members of that io type
* Improved the AI logic for proposing, voting for, and against polices in the HRE
* Polished the AI logic for proposing, voting for, and against policies in unions
* The HRE policies "treasury taxation" and "imperial taxation" now unlock the "contribute to organization treasury" action, which allows countries to just donate money to the IO at a one-year cooldown in exchange for an opinion bonus with the emperor / the electors (if done by the emperor)
* Added more refined logic to the AI's wishes to vote for and keep a policy in an IO. This should make the AI circle vote for the same two policies in an IO
* It is now possible to add new locations to the HRE if the location borders an HRE location across one seazone
* Kingdoms in the HRE now receive a much higher special status score than normal members
* The opinion penalty from removing locations from the HRE now has a yearly decay of 2 u,p from 1, and caps at -200 instead of being uncapped
* Being the Emperor of the HRE now grants you +1 Cabinet Slot, +2 Diplomats, +500 Diplomatic Range, +1 Culture Capacity, +0.1 Monthly Prestige, +1 Fort Limit, and +1 Possible Artists. These modifiers should bring the HRE Emperor more on the same level as other Empires
* The HRE Emperor now has the option to join the HRE if they are not already a member
* Reforming your government type will now only remove you as the Holy Roman Emperor if you form out of a monarchy into a different government type. In other words, a monarchy that reforms its government into a monarchy (again) will not lose its role as Emperor
* Added Regnal Numbers to the Holy Roman Empire, so future emperors will use the expected regnal numbers
* Marriage Unions now automatically disband if the royal marriage is broken due to the other country being annexed
* The policies "Unprotected Free Cities" and "Free Cities Abolished" will no longer grant Imperial Authority. Additionally, cleaned up the tooltip of "Direct Imperial Cities" and "Cities of the Emperor" to show the average antagonism gain across all Free Cities
* Fixed the display of the number of Celestial Governors in the Middle Kingdom
* Made the Emperor despise the very idea of even proposing the "Holy Roman Figurehead" policy (Emperor now has a malice of -10000 for both proposing and voting for it)

**Events:**

* Fixed the first name of Giacomo Bussolari, character created by the Pavese event "exoulsion of the beccaria" (flavor\_pav.1).
* Byzantium will now get a notification when the Genoese event "Reconquest of Chios" (flavor\_gen.16) happens.
* Replaced the ‘Claim Throne’ Casus Belli from the "Expulsion of the <dynasty>" (flavor\_pav.2) event with a ‘Subjugation’ CB
* The Neapolitan event ‘Sicily Accepts to Pay Homage’ (flavor\_nap.106) should not trigger now if they go to war.
* Fixed an issue for the event, ‘The <Emperors> Response’ (free\_cities.5), that would cost money instead of granting it
* Fixed an issue with ‘The Great Contract’ event (flavor\_eng.164) where two event options used the incorrect text
* Enabled many Florentine events and the "Florentine school" advance for Tuscany
* Added a third option to the event ‘The Fluitschip’ (flavor\_hol.9), so that the government reform ‘Dutch Shipbuilding Industry’ is unlocked by it, but automatically implemented.
* Lower Bavaria can no longer be directly subjugated by Upper Bavaria if it is a subject of another country already
* Scottish 'honoring the auld alliance' event can no longer fire when Scotland is at war or in a civil war. Also expanded the time window in which Scotland can receive the event by 20 years.
* The Ottoman event "demand Albanian hostages" now correctly targets an Albanian dynasty
* Fixed an issue with the event "the hand of Lithuania" whose option B incorrectly gave Lithuania a pu cb on Lithuania
* Fixed an issue where the Florentine event "consolidation of power" (flavor\_flo.49) did not clear the current major reform properly
* Fixed a typo in the first option of the language event "the ruler's speech."
* The event "common lineage" should no longer exile 1-year-olds
* Fixed some errors in the dynamic localization of the events ‘Independence from the Patriarchate’ (flavor\_eth.110) and ‘The Dawn of a New Empire’ (flavor\_ser.31).
* Added a historical option for the event ‘Gold found in Lece’ (flavor\_ser.120) so AI chooses getting gold as rgo
* The heart of Armenia event (miaphysite\_flavor.5) now properly targets the Yerevan location
* The fate of Luxembourg event (flavor\_boh.32) will no longer be able to offer dead characters as rulers
* The House of York will now be properly founded by the English event ‘The Founding of House York’ (flavor\_eng.45), as there was a bug preventing it.
* Make the Treaty of Vilnius event create Courland, the subject territories
* The Teutonic crusader fervor event will no longer target friendly pagans
* The Crusade of Smyrna will no longer fire on Christian targets
* Fixed the event ‘Saint George's Night Uprising’ (flavor\_dan\_teu.1), only starting with 1 location
* The event "a marriage proposal for <character>" (flavor\_mlo.37) will no longer offer dead characters as marriage candidates
* The event Jacobite uprising (flavor\_eng.29) now checks correctly for any province with a highlander culture over 50%
* The event Russia looks to the east (flavor\_rus.3) can no longer trigger without any available country to target with its effects
* The event the >ruler title> education (flavor\_sco.14) will no longer overwrite an already set expensive education child education
* Added AI weights to many generic events to help the AI make better choices
* Fixed wrong localization key in protestant\_tolerance policy from event "the edict of Fontainebleau" (flavor\_fra.330)
* The event "the return of Ibn Battuta" now correctly grants a dynamic institution to your capital instead of to a random location in Arabia, and always involves "professional armies."
* Hindu modifier withdrawn in contemplation from event "planning for the end" (hindu\_events.2400) changed to be -50% diplomatic relations
* Forming Ayutthaya will now properly get the correct ruler and dynasty
* Keeping a patriarchate in the event "autocephalous patriarchate seat falls" (autocephalous\_patriarchates.2) no longer has the potential to give a worse modifier
* The byzantine event "reforming the imperial army" now removes the theme of systemic government reform.
* The event "Kyiv-Mohyla Academy" can now fire for Ruthenia as well.
* The event disagreeing advisor (random\_event.93) can no longer target your heir
* Editing the "forever lost" event so it can only trigger for native american countries
* Editing the dynamic historical events of Naples so that the two Sicilies can also receive Neapolitan events that are appropriate
* Changed the "the kebra nagast" event option rewards so all the admin traits are obtainable on the first option
* The casus belli received by Morocco to conquer Tunisia now lasts longer than their truce
* Fixed an error in the text of the first option of the event "visit of the patriarch" (flavor\_plc.1001).
* The rise of the turks event "the integration of <province>" (rise\_of\_the\_ottomans.105) will no longer always reference the ottomans
* Milanese events that require you to pay at the start of the game will now only occur when the country is at peace with a positive treasury, to avoid frontloading costs too much
* The event "the guns of <rival>" (flavor\_tur.120) no longer targets deceased children
* The event "the first celali rebellion" (flavor\_tur.16) now correctly applies a tooltip on the character's name
* The Ottoman event "the phanariots" now has a correct historical option indication
* Family ties event (consort\_events.51) will now only fire when the two countries actually have ties
* Adjusted triggers of flavor\_plc.14 to make it more likely to fire
* The Joseon code can only be able to be unlocked by the Joseon dynasty
* The event ‘Soirée’ (dynastic.6) will no longer produce the same offspring from couples of the same sex.
* Rebalanced certain unique content for Byzantium, making their modifiers more appealing but at the same time not as strong as before
* The Ottoman event "cats of Constantinople" will now give disease resistance to the location
* The government reform "Malian tribute system" has been changed to be a non-major reform, and it does not give +1 possible government reforms
* The French event 'the edict of Fontainebleau' will no longer trigger if France is not catholic.
* The French event 'Rise of étienne marcel' has been improved, along with strengthening Marcel's influence among the burghers.
* Reduced antagonism gain from Cahokia's 'worsening food condition' event from +50 to +25.
* Cahokia's 'worsening food conditions' event now properly decreases demand for food if warbands are sent to raid nearby tribes. The first event option now also reduces demand for maize.
* The event "the knights hospitaller" (flavor\_kni.100) will no longer trigger for a country that was the knights
* Fixed an issue wherein the event "evolution of the commune of Venice" (flavor\_ven.1) allowed for multiple major reforms
* The event "the four articles of Prague" (flavor\_boh.36) now correctly displays the title
* The Byzantine event "Reforming the Imperial Army" now requires you to have 10k standing regiments to trigger
* Event A Royal Influence (consort\_events.61) will now properly refer to the correct religion
* The event "The Assassination of Gerhard von Schauenburg" (flavor\_dan.19) will only annex Schleswig if it is a subject of Denmark
* The event "Bid for Independence" (flavor\_ere.1) will now remove the Eretnids from all wars the Jalayrids are involved in, making it possible for them to declare their independence war against the Jalayrids
* The "Premature End of the Wars" (hook\_and\_cod\_wars.1203) event will always end the Hook and Cods Wars for good
* Henry Tudor now has a proper father
* Support Dissidents Abroad (random\_event.39) will no longer be able to target countries already in a civil war
* Pitt the Elder will no longer be able to marry an old lady
* Event Soirée (dynastic.6) will no longer be able to get old or dead characters pregnant
* Fixed options not being capitalized in event The Insane <Title> (flavor\_swe.47)
* Fixed wrong scope for localization in event A Traveling Preacher (western\_schism.15)
* Event "A Moment of Weakness" (sengoku.4) will no longer be able to give CBs against oneself
* Fixed gender of characters in Soirée event (dynastic.6)
* The event "A Heathen <Title>" (culture\_religion\_events.5) will no longer be able to target rulers ruling more than one country
* Event Liaising Advisor (court\_flavor\_events.1) can no longer target countries at war
* Fixed missing localization in the option of event The Acquisition of Landsberg (flavor\_mei.122)
* Fixed an error in the description of the event "Popularization of Silk Fabrics" (prices.24), it should now correctly read 'Middle East'.
* Event "The Insane King" (flavor\_swe.47) will no longer put dead characters on the throne
* Updated all events that give you merchant power in a market to use standardized values
* Fixed a bug for "Demands of a Professional Army" (institution\_events.51), which could, in rare cases, cause a complete break of the event description. Also added some gold for good measure
* The False Waldemar can no longer be targeted by character interactions
* Fixed wrong localization scope in event The Doctrine of Particular Judgment (catholic\_flavor.8)
* The event Fear and Loathing in <Capital> (dynastic.19) will only be able to trigger for male rulers
* Fixed the title of the event cultural\_event.4, so it now reads "Supporting the Florentine School".
* Replaced an incorrect (death) Edmund Mortimer with the correct one, script-wise, in 3 DHEs for England and Wales (flavor\_eng.91, flavor\_eng.95, flavor\_wls.15), so they can now work properly.

**Government:**

* The papal ban on empires will now accurately be lifted once the Holy Roman Empire is dismantled
* Added unique government names for the landgraviate and magraviate government reforms
* The "ruler is not a commander during a war" penalty from the ruler's general policy and other similar sources now checks if the ruler is not the leader of the largest army or navy.
* Adopting the Anatolian beylik government reform now makes you eligible to be a contender for the ‘Rise of the Turks’ situation.
* The reform "council of clan heads" for Kanem-Borno now gives better bonuses
* Blocked the joint ruling on government reform for fiefdoms
* Fixed an error in the flavour description of the 'Order of the Dragon' policy, it now should read correctly 'Christianity'.

"promote integration progress" (parliament issue) now picks a more suitable province, applies its effects across the entire province, and is more likely to occur depending on how many unintegrated provinces you have

* The Kanem-Bornu burgher privilege will no longer be shown until it's unlocked
* The Council of Ten, Venetian government reform, no longer takes a reform slot
* The merchant republic reform is no longer locked forever
* Fixed an error in the description of the 'gbara' policy; it should now read 'nobility' (or equivalent) correctly.
* The potential trigger for formable countries is now wider, they will generally be more visible in the selection list
* The Sokoto formable is now also formable by the Fulbe culture
* Ireland remains formable now in case both the high kingship and the lordship of Ireland are destroyed
* Byzantium can form the Roman Empire tag again
* The ‘Invite German Settlers’ privilege should no longer depopulate the original German locations, as it now can only trigger in locations with at least 2,000 pops.
* The reform "Signoria of Venice" is no longer a major reform
* Fixed instances of the "tag =" requirement wrongly having "c:" callsigns in several events and the Rome formable, which was preventing some content from triggering/working correctly.
* Malacca can now be properly formed via owning certain locations, as well as spawned via the Majapahit event "The Demise of Temasek"
* The "Only Nobility as Leaders" estate privilege no longer has duplicated modifiers active in it
* The Swedish unique 'Support New Farms in North or East' cabinet action can still be used if Sweden forms the Scandinavia tag.
* You are no longer blocked from favoring an heir when your already favored heir becomes your ruler
* Improved the tooltip of the Pikazi government reform
* The Venetian Noble privilege "Zontas" now requires the Crown Estate to have more power than the Noble Estate, instead of a set number
* Limited Shogunate reform to the leader of the Shogunate
* Corrected the implementation time of the 'Knights Companion' Policy of the 'Order of the Garter' Law, so it takes 2 years, instead of 20.
* The Government Reform "Shahbandariyya" is no longer available to everyone

**Economy and Production:**

* Yamashiro can now only be built in locations without any other clan present or in those with an allied clan
* Nerfed the proximity cost of the Seljuk mint unique building so it does not max out before it hits max level
* Changed Peel Towers modifier to devastation recovery

**Society:**

* The "deport heretics" religious actions can no longer deport people of your own religion.
* Rejection of a cardinal request will now accurately refund the invested religious influence
* South Slavic patronyms correctly change from 'ovič' to 'ović'
* The Rosenberg dynasty is now known as "z Rožmberka" in Czech instead of "z Rosenberg"
* Corrected the name 'Mandean' religion and culture, so it now correctly reads 'Mandaean'.

**Diplomacy:**

* The "propose ruler" diplomatic action now has proper ai\_will\_do and acceptance values. In other words, the AI will now properly use this action
* Bank subjects now give 10% of their total treasury instead of 50% via the siphon income country interaction
* Appanages can no longer spawn outside of the French region
* Appanage subjects are now annexed with the same speed as vassals, and the required opinion to start annexation is now 190 instead of 200
* Tweaked the estate opinions of other countries based on external factors
* Fixed missing localization for make tributary cb
* Fixed broken tooltip in bestow elector status action
* Fixed broken descriptions of peace treaties
* Members of the lordship of Ireland will no longer fall into a lordship regency unless the leader of the IO uses the similarly named country interaction on them
* The Claim Throne casus belli is no longer blocked from different religious groups
* The Fleet Basing Rights relationship is now available to building-based countries, even if they have no ports. This change is specifically made for the Hansa
* The Enforce Religion subject action is now always available to Military Orders against subjects that also have the Military Orders government reform
* Subjects created by theocracies will now always have the religion of their overlord on creation
* Added missing localization for the message of calling an Appanage to war "
* Colonial nations now give food access to their overlord
* Added missing localization for the message of calling an Appanage to war

**Military:**

* Balanced the Panokseon (Unique Korean Ship) build cost and maintenance to be roughly twice as expensive as a normal galleass
* The Baochuan ship is now buildable after being unlocked
* Mercenary captains from locations with the age 4 military institution "siege artillery" get the prefix "colonel"

**Advances:**

* Fixed the missing description of the 'porcelain kiln', which now appears correctly.
* Moved the muscovite seat of metropolitan bishop advance into the free tree of the age of renaissance, so it can more easily enable the metropolitan alexius event (flavor\_mos.14)
* The Venetian printing industry now gives a bonus to paper and books instead of diplomatic reputation.
* Added two late-game advances to give malaria resistance.
* Fixed the triggers for the 'Cattle Booleying' advance, an issue that was also blocking two Irish advances down the line, whose modifiers will now be available from the start.

**Achievements:**

* Fixed the Achievement "Hóngwǔ Dì", so it now uses 'has\_or\_had\_tag = MNG' instead of just 'tag = MNG', so it's not bricked when the tag becomes CHI.

**Other:**

* Ensured that cardinal seats can no longer be removed with random effects, preventing unintended consequences for the Western Schism situation
* The Hussite Wars event "Jan Želivský's Congregation" will not occur if Bohemia is neither Catholic nor Hussite
* The coronation of a new HRE emperor will now properly refer to the previous one
* Fixed events Sicily Accepts to Pay Homage (flavor\_nap.106) and Sicily Denounces the Treaty (flavor\_nap.107) broken localization when in a regency
* The "Hanseatic Merchant Federation" government reform now has the "Cannot Be Subjugated" modifier. That will make the country also break from being anyone's subject
* Generalized the use of has\_or\_had\_tag in a lot of unique country-specific flavours (policies, estate privileges, unique buildings, some country interactions, customizable localization, some missing government reforms, parliament issues and types, and a couple of missing units), so it can be kept when forming a new formable country.
* Fixed description of Antagonism Change Modifier
* Forming Germany now requires 66% of the land instead of 75%.

### Onboarding

**Missions:**

* The task "control around the capital" will no longer potentially require more than 100% control
* The mission pack "estate cooperation" will now only be available if the country has 3 or more estates, and will only be applicable to choose from the existing estates within your country
* Patch\_2DArt.png

**Other:**

* Updated render of ocean.dds and ocean\_bigger.dds to match more the style of our other location illustrations
* Updated narrowsea.dds to have more similar values to our other location illustrations
* Updated the size of the atoll.dds to match the size of the other location illustrations
* Updated render or struggle\_for\_royal\_power to match more the style of our other disaster illustrations
* Tweaked the mountain chain in the location panel to be more visible and slightly smaller. Also adjusted the height of the hills in the location panels to be higher and more visible

### AI

**Government:**

* Fixed an issue where AI didn't want to research an advance that unlocked a building when there was an upgrade available in the current age, even though they hadn't embraced that institution yet
* Fixed an issue where AI would not correctly hire new courtiers to fill their cabinet
* Added AI score for army levy size modifier
* AI score for Levy Combat efficiency modifier is now based on the AI score for Levies themselves
* AI score for levy size is no longer indirectly dependent on the size of the country
* AI cabinet crackdown, rebel action now only targets rebels with at least 30% progress

**Diplomacy:**

* Fixed an issue where AI would create bordergore due to refusing to take locations with 0 score, even when literally nothing else was available
* Fixed several instances of AI creating border gore in peace deals
* Fixed an issue where AI would sometimes not take locations in a peace deal due to not having a pre-calculated conquer desire
* Improved Peace deal AI so it would always punish the player for trying to create new bordergore
* AI is now much more likely to take bordering continuous land in peace deals
* Fixed an issue where AI was too quick to declare peace in wars that they were clearly winning, settling for a suboptimal peace deal
* AI is now more willing to declare war without a CB
* Fixed an issue where AI would sometimes wait a long time between selecting their war target and actually declaring war
* Reduced A.I.'s cooldown to declare new wars, given that their country is in a stable state
* AIi will no longer drag in their allies in wars that they are clearly favoured in
* Fixed an issue where AI would get stuck in a loop trying to attack a country they had military access to, but deciding against it due to high stability cost; now they will break the military access
* AI will now declare fewer wars if it already has a lot of unintegrated land
* AI will now improve relations with strong countries that they have no desire to attack, to reduce their antagonism
* Fixed an issue where AI was improving opinions with weak neighbors that they would often want to attack
* AI will no longer forcefully relocate markets in peace deals
* Fixed an issue where all AI would incorrectly use the warleaders' alliance strength and not their own when deciding how much antagonism they were willing to accept in a peace deal
* Fixed an issue where AI's reluctance to accept a peace deal that was resulting in border gore would only apply when the enemy war leader themself caused the border gore
* Fixed an issue where AI anti-border-gore logic when taking land in peace deals would only apply to the enemy war leader and not everyone in the peace deal
* Fixed an issue where AI would always peace out when they had occupied 100% of the enemy war leader instead of 100% of all enemies combined
* Fixed an issue where AI would incorrectly think all antagonism in peace treaties would be given to the war leader, leading to situations where they would take too few treaties
* Fixed an issue where AI Ottomans would sometimes refuse to take land in expansion wars because they already had too much unintegrated land
* AI will now use all its available warscore to give its allies more treaties if they can not give themselves anything further
* Fixed an issue where AI was sometimes forbidden to take land in a peace deal, even if they had part of that province already
* Portugal, Castile, and Aragon will no longer rival each other at the game's start.

**Economy:**

* Somewhat reduced AI priority to build forts
* Improved acceptance logic for taking over a colonial charter from debt.
* Banking Nations will now use the 'renegotiate loan' action.
* AI will no longer shut down granaries when trying to recover from economic doom spirals

**Military:**

* AI will now transfer occupation to the war leader if the occupied locations are neighboring the war leader but not the controller
* Fixed an issue where AI would not want to use a transport fleet that was slightly damaged, even when the intended transport distance was very short
* AI will now keep empty regulars when consolidating units to prevent costly rebuilds after war
* Rich countries will now field significantly larger armies in the mid and late game
* Strong AI armies will now only wait for an army to join them if it is of relevant strength, otherwise, they keep doing other objectives
* Fixed an issue where AI would pull units away from sieges to merge those armies during war
* The AI is now willing to allocate a greater portion of its budget to the military in later ages.
* AI is now more reluctant to reassign units to a different objective based on how long that unit has been part of a siege
* AI is now more responsive when it comes to assisting ongoing battles close to their armies
* Fixed an issue where AI armies could get stuck waiting to attack a target indefinitely due to mismatched strength checks regarding attached units

### Interface

**Map Modes:**

* Improved localization of legend keys for the reformation situation map mode.
* The peace treaty map mode no longer shows unit markers, so that they don't hide the map
* The reformation situation map colors and tooltips have been improved, in particular, stripes are used instead of color mixes for preachers.
* The War of Religions situation legend keys received a few corrections.
* A map mode has been created for religious schools.

**Alerts:**

* Fix the rebellious subjects alert, showing only subjects with zero subject loyalty
* The alerts for missing employees now advise you to wait before building new buildings, to help new players understand the situation
* Add a coalition icon in the coalition alert for those countries that are already in a coalition against the player.
* Add subjects' CBS to the unpressed casus belli alert. Mark the subjects' CBS with an icon in the select casus belli tab

**Panels:**

* Automation ui doesn't reset the building gold limit
* Fixed terrain modifiers showing "none" when there is no modifier affecting the rolled dice. Now it specifies it.
* Added a warning indicator for unprofitable buildings in the location panel's building cards
* Loc fixes and improvements in dialog confirm pop-ups and tooltips
* Added a shortcut to the diplomatic macrobuilder by right-clicking on the button to open the diplomacy panel
* Estate satisfaction on the top bar is now red if under 50
* Fixed the tooltip in the diplomacy relations panel, flickering countries when the game was unpaused.
* Fixed the army and navy construction empty slots overflowing their card in the location panel. Now they will show only the first 5 slots of both current constructions and empty slots, and then the tooltip will show the rest.
* Fixed call to arms not saying when an ally is in a union with one of the declared war enemies.
* Now you can delist all possible mercenaries in a unit, right-clicking on its button in the unit panel and the unit cards in the "make available for hire" list.
* The macrobuilder now shows production efficiency on the list of buildings, so you know which locations have the bonus from having the relevant RGO in the province
* The categories view of the buildings tab now includes the total income and maintenance cost of all buildings inside it, so you can know how much each category is contributing to your income and expenses. Also added tooltips with detailed breakdowns of how much each building is producing or costing
* The war name was not showing custom country names
* There are fewer none:s on estate privileges tooltips in the lobby screen unique content list.
* In the lobby, you can no longer access culture/religion/io from tooltips.
* The sort order for sub-units shown on the single unit panel now continually updates while the sort by strength column is selected.
* The map legend key ledger has been made less tall when there are few legend keys to show.
* Fixed road builder and RGO texts being out of bounds
* Fixed the Crown Estate title not being fully visible for certain languages
* Fixed character portrait not being clickable in heir selection
* Longer character names can fit into the select mercenary leader panel
* Fixed the holy sites and work of art filter crash
* Fixed the diplomacy subject list showing an incorrect number
* Fixed unit recruitment cost not displaying correctly
* Fixed misaligned combat bonus banner and improved readability
* Fixed spacing, margins, and readability for laws and policies
* Fix laws are not populated immediately after loading a save game
* Fix cultural influence and tradition monthly values in the culture view.
* Reworked a bit the declare war panel: Repositioned some call to arms, promise land, and call cobelligerent. Changed card color behavior for green when joining an ally, blue when not joining an ally, red when joining an enemy, and brown when not joining an enemy. Some minor layout fixes were also reworked.
* Increase the size of the Change Explorer button in the Territory panel
* Harmonized outliner pie charts and icons

**Outliner:**

* Made the outliner entry for exploration more consistent with the cabinet action entry
* You can now select all your armies at once by right-clicking the checkbox in the outliner entry, as in the military panel
* Added a pie chart to the outliner entry of the convert province cabinet action
* Allow changing explorers via the character's portrait in the outliner

**Tooltips:**

* Add the truce end date to the demand/offer peace tooltip
* Fixed empty tooltips for progress icons in the cabinet actions strengthen the government and stabilize the country.
* Added text icons for all unit statistics in their tooltips for better readability
* Tooltip for proximity cost through maritime presence is a bit more understandable now. Probably.
* Improved the tooltip for sound tolls to explain that their income scales with your control over the location
* Added a shortcut to the antagonism map mode in the tooltip for the impending coalition alert
* Added a scrollbar to the sound toll tooltip
* Added the amount of money actually taxed to the list of locations in the tooltip for the country tax base
* Improved concept for tax efficiency
* Fixed trade advantage showing twice as a filter for buildings.
* Building maintenance tooltip in balance shows the whole list of buildings
* Prisoner hire price shown correctly
* Rajput society's privilege now conveys a bit better that its effects scale with the relative size of some cultures in your country
* Fixed a bug where the tooltip for market food would tell you food balance is positive when it's not
* Fixed the food consumption unit modifier not having a description
* The concept for the combat phase now says the length of the bombard phase correctly by calling the appropriate definition
* Improved the names of modifiers from estate satisfaction and estate power
* Unit type tooltip now mentions that maintenance values are per 1,000 men
* Added a scrollbar to the estate power tooltip if it gets too big
* Added the sum of the maintenance cost of all buildings in a location to its tax base tooltip, so you can compare how much a location is giving and how much it costs
* Improve the tooltip format of the declare war comparison
* Improve the tooltip of the supply limit in the location. Now it will accurately display the effects of being over the limit.
* Fix and improve the readability of the tooltip in the location window for the supply limit. Now it will inform more clearly when all the units are fully replenished, there can be supply issues.
* Fix privateers' maintenance showing in manpower costs."
* Fix the missing icon in the integrate province cabinet action
* Fix the wrong fort maintenance breakdown cost tooltip in the location. It now correctly matches the actual maintenance as shown in the balance panel.
* Fixed tooltips getting wider and wider
* Subject type concept tooltip now lists the whole list of subject types
* Fix missing icons in manpower/sailors breakdowns
* Fixed the global\_monthly\_control\_decline modifier showing the wrong color
* The tooltip for the model unit types that claimed to be hidden is now properly hidden
* Fix modifiers for diplomatic income not showing when they are at 0.
* Add army costs by unit type in the army maintenance tooltip in the economy tab.
* Fix the succession law tooltip eating lines
* Show base gold cost maintenance for units in the generic unit tooltip
* Fixed an attrition tooltip where a number was x100 the size.
* Expose dynastic power math in the tooltip
* Fixed synchronization tooltip showing incorrect dates for the rest of the players
* The great power rank tooltip will now show the minimum great power score needed to achieve great power status
* The alert for union members leaving now mentions that you can address the situation by calling the union parliament
* The tooltip for the independence war goal now explains the conditions for victory a bit better, and mentions that a white peace returns to the status quo before the war
* Fix the building maintenance tooltip
* Add opinion penalty info when removing locations from IOs before the player executes the action.
* Removed the non-functional, misleading open indicator in the possible control groups alert tooltip
* The Ironman icon in the Ironman tooltip is now properly colored as disabled when unavailable
* The map tooltip and cursor now indicate for selected armies if they can't move to a location due to the zone of control of a fort.
* Fixed missing names of foreign buildings in the production view
* Fixed the tooltip for the breakdown entries of cultural influence
* The Royal Marriage tooltip will no longer tell you that the child you try to find a spouse for is already married
* Show which specific pop types can raise levies in the levy information tooltip.
* Combine proximity costs for Maritime into one value and add a breakdown tooltip to show more clearly between costs with Maritime presence and costs due to lack of maritime presence.
* Show previous siege status in Siege tooltip
* You can now see on the character tabs how many non-royal marriages there are, and how many capable characters and
* Integration breakdowns for Provinces now calculate correctly.

**Other:**

* Clicking on province definition/area/region/sub-continent/continent tags, in e.g., tooltips now pans and zooms (approximately) to the related geographical area.
* Made the flags bigger in the war panel to fill up the space
* Fixed sort by used diplomatic capacity in the country selection view using the number of diplomatic relations, not diplomatic capacity.
* Fixed displaying twice the saving in progress label when forced into the lobby
* Fixed the +X buildings addon tooltip in Location Buildings doesn't repeat buildings already shown in the panel itself
* Fixed redundant default key binding between tax base and raw materials
* Renamed call into war with promised land now reads call with promised lands into war, so it looks different from the normal call into war action when the text is cut
* Remove hidden map modes from input bindings settings
* The pop-up when you are disbanding armies now warns you about disbanding your regulars a bit better
* Show the Casus belli duration in the parliament's actions
* Add a produce food filter to the RGO builder
* Fix the cabinet action pie charts being empty at 100% progress
* Add update logic to keep cached finish dates up to date
* Do not close all popups when pressing the confirm keyboard binding
* Changed the order and content in the right and left click functionality in the single and multiplayer main menu
* Updated so the scrollbar sticks to the top of the list when new messages arrive in the message log
* Fix missing effect localization in the administration infiltrated by another country message
* Sort the missing employees alert by the number of missing employees
* Made the message multiplayer inaccessible, please sign in to Steam visible from the main menu, also, since it was not visible before
* Fixed parts of the interface not being hidden when forcing the lobby
* The character comes of age message should only consider the ruler's family, those who are eligible for royal marriages
* Multiple bugs fixed in the pause menu, including disabling the load button in Iron Man mode
* Made the country rank number fit better in the layout
* Add changing target cabinet action and target to cabinet map markers
* Added the location migration attraction to the selector list of the encourage migration cabinet action
* Explain the causes of being in diplomatic range or not
* Track captured units and improve ui of the battle summary
* Fix parliament will pass on exactly 50.00%
* Qol pass on promote urbanization cabinet action info block, map marker, and outliner entries
* Added a missing message for when a country rejects your request to become their subject
* Ongoing trades will now show a distinctive icon when the trade is being INEFFICIENT for whatever reason. Furthermore, the trade tooltip will convey in a clearer manner the reasons why the trade is inefficient, as well as provide a clear explanation of what trade inefficiency might be.
* Updated so the automation frame takes the full panel
* Rival Removed message is now shown when a rivalry towards you or someone else is forced to end.
* Various improvements to the Middle East & Mongol random generation, starting setup, and dynasties
* Fixed Gediminas switching to the Jagiellon flag variant when converting
* Fixed missing flags for the fall of Delhi situation, sultanates
* Add building information in the demands tooltip from the market. For each pm that is shown in the demand, the building that uses that pm is shown.
* Improvements & additions to random generation for German, Dutch, Italian & Polish dynasties
* Added headers and truce pie chart to coalition tooltip

### 3D Art

**Portraits:**

* Fix the issue with Valdemar of Denmark not having any hair at the start of the game

**Other:**

* Brazilian and Amazonian native cultures now use North American models instead of Mesoamerican ones.
* Fixed Aztec cavalry weapons and added backpacks
* Fixed all ships' firing VFX timings so they line up better with the animations

### Modding

**Script:**

* Added the "largest\_army" and "largest\_navy" event targets, which scope to the biggest army/navy. "big" here is determined by how big the max strength of the unit is, not by its current strength, as the latter can be quite volatile
* Added the "is\_indestructibe" trait for building types, which makes them indestructible by the player or by the destroy\_building effect. Also added the destroy\_building\_forcefully effect to circumvent this prohibition. remove\_if will still automatically remove the building, though.
* In formable countries, 'capital\_required' no longer defaults to 'yes`
* Added religious\_view\_impact trigger
* Added a catch-all trigger for checking income and peace status for countries
* Added an ai\_will\_select section for resolutions, which determines when the AI will propose the resolution. If left empty, the AI will instead fall back to ai\_will\_do
* Fixed a bug where the on\_accepted\_call\_to\_arms would give a boolean instead of the war itself for scope:war
* Added the on\_subject\_created on\_action, which only fires when a completely new country gets created. For already existing countries becoming subjects, the on\_action still is on\_dependency\_gained

**Triggers:**

* Added the "is\_leading\_largest\_army\_of" and "is\_leading\_largest\_navy\_of" character triggers
* The opinion, trust, and antagonism triggers will now always return 0 when the country scope and the target country are the same
* Added the building\_can\_be\_destroyed\_by trigger for buildings
* Added an is\_eligible\_for\_royal\_marriage trigger for character scope
* Added the has\_casus\_belli\_of\_type trigger
* Added the bias\_value trigger, which returns the value of the specified bias modifier. Useful for script value calculations
* Added the has\_rebel\_modifier and has\_dynasty\_modifier triggers

**Effects:**

* Added the remove\_all\_casus\_belli\_of\_type effect
* Fixed a bug that made the "is\_taking\_land" argument in the drop\_antagonism\_bomb have no effect whatsoever
* Added the add\_dynasty\_modifier and remove\_dynasty\_modifier effects
* The add\_merchant\_power effect now accepts scripted values as power input

**Other:**

* Map modes: custom secondary map colors have been decoupled from primary and can be added even when a color\_mode is used.
* Secondary\_map\_color for custom map modes now defaults to transparency (color keyed by max white). See e.g., tactical map mode for how to selectively color through an if trigger.
* Dynasties are now capable of having modifiers that apply to all members of the dynasty. They can also have country modifiers, which are only applied if any character of the dynasty is the ruler of a country
* Dynasties, Cultures, and Wars are now inspectable objects in the in-game explorer
* Added a new country effect that clears the current major reform of a country

### Translation

**All:**

* Fixed a problem that prevented the correct language from loading for the loading screen

### Multiplayer

* Fixed out-of-sync error caused by generating different ruler title keys when using different languages
* Fixed some players not being forced into the lobby after a new client joins, if the game rule is set.
* Fixed desynch related to fired events
* Fixed out-of-sync error related to units retreating from a combat.
* Fixed desynch caused by siege status not being persisted with the default value
* MP chat commands fix for names with special characters
* Fixed desynch and bug caused by adding unit duplicates to combat info and modifying internal values when removing multiple times
* Fixed desynch caused by generating different ruler titles when using different languages

### Miscellaneous

**Settings:**

* The autosave interval setting is blocked (tt showing a reason) rather than hidden in Ironman.
* Control group keys (default 0-9 and Ctrl) are now rebindable in input bindings settings.

**Other:**

* Changed so Iron Man games will be autosaved yearly on April 1st instead of monthly
* Fixed the has\_child\_education\_selected trigger not triggering on balanced education
* You can no longer destroy buildings in occupied locations.
* AI will no longer open/close foreign buildings in its lands.
* The commission art now checks if you have prestige before starting it.
* Fixed an issue that allowed the marriage finder for distant relatives of the ruler.
* Fixed an issue where rulers would move to a fiefdom if it had a higher great power score.
* Fixed loading a cloud save from the in-game menu
* Added scope checks for marry\_noble action, resulting in more clearer tooltip in case of failures and preventing error log spam
* Fixed replacing explorers not clearing the previous explorer.
* Barracks can now upgrade to conscription centers
* Fixed a rare crash related to changing graphics settings while the game is loading.
* Lost levies no longer become regulars, but are properly disbanded.
* Fixed the close to equator being always maximum south of the equator.
* Building-based countries now get their parliament in the capital instead of the void.
* Slaves can now be converted when using the law to force their conversion.
* Fix the crash in the recruit screen
* Fix the crash related to the frontage percentage in the unit view
* Fix the crash when not possible to write the loading screen history file
* Threaten War is now properly restricted to revolters in a civil war.
* Fixed the bug where blocked\_from\_forming\_countries was checked instead of blocked\_from\_creating\_subjects when attempting to create a subject.
* Fixed the battle result window for naval battles, showing the wrong number on overrun

## 1.0.11

Patch 1.0.11 was released on 2026-01-20[[13]](#cite_note-13) with checksum *6166*. It was originally released as an open beta[[14]](#cite_note-14).

### Gameplay

* Randomly created male characters that spawn to fill out a court now come with a wife and a daughter, except for clergy characters.

### AI

* Fixed an issue where AI was not taking into consideration the speed modifiers from culture war when calculating assimilation effects.

## References

1. [↑](#cite_ref-1) Forum: [Europa Universalis V is OUT NOW!](https://forum.paradoxplaza.com/forum/index.php?threads/1866687 "forum:1866687"), 2025-11-05
2. [↑](#cite_ref-2) Forum: [1.0.2 Patch Notes](https://forum.paradoxplaza.com/forum/index.php?threads/1868042 "forum:1868042"), 2025-11-06.
3. [↑](#cite_ref-3) Forum: [1.0.3 Patch Notes](https://forum.paradoxplaza.com/forum/index.php?threads/1870931 "forum:1870931"), 2025-11-10.
4. [↑](#cite_ref-4) Forum: [Hotfix 1.0.4](https://forum.paradoxplaza.com/forum/index.php?threads/1873102 "forum:1873102"), 2025-11-13.
5. [↑](#cite_ref-5) Forum: [1.0.5 Patch Notes](https://forum.paradoxplaza.com/forum/index.php?threads/1875570 "forum:1875570"), 2025-11-17.
6. [↑](#cite_ref-6) Forum: [Hotfix 1.0.6](https://forum.paradoxplaza.com/forum/index.php?threads/1876152 "forum:1876152"), 2025-11-18.
7. [↑](#cite_ref-7) Forum: [1.0.7 Patch Notes](https://forum.paradoxplaza.com/forum/index.php?threads/1877372 "forum:1877372"), 2025-11-20.
8. [↑](#cite_ref-8) Forum: [Patch 1.0.8 live now](https://forum.paradoxplaza.com/forum/index.php?threads/1884049 "forum:1884049"), 2025-12-02.
9. [↑](#cite_ref-9) Forum: [Open Beta - Patch Notes 1.0.8](https://forum.paradoxplaza.com/forum/index.php?threads/1879458 "forum:1879458"), 2025-11-20
10. [↑](#cite_ref-10) Forum: [Hotfix 1.0.9](https://forum.paradoxplaza.com/forum/index.php?threads/1884879 "forum:1884879"), 2025-12-04.
11. [↑](#cite_ref-11) Forum: [Patch 1.0.10 is live now + Tinto Talk #92](https://forum.paradoxplaza.com/forum/index.php?threads/1889614 "forum:1889614"), 2025-12-17.
12. [↑](#cite_ref-12) Forum: [Open beta 1.0.10 is live now](https://forum.paradoxplaza.com/forum/index.php?threads/1884934 "forum:1884934"), 2025-12-04
13. [↑](#cite_ref-13) Forum: [Hotfix 1.0.11 out now](https://forum.paradoxplaza.com/forum/index.php?threads/1895927 "forum:1895927"), 2026-01-20.
14. [↑](#cite_ref-14) Forum: [Open beta for 1.0.11 patch](https://forum.paradoxplaza.com/forum/index.php?threads/1895047 "forum:1895047"), 2026-01-13.