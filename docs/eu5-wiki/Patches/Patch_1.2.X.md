<!-- source: https://eu5.paradoxwikis.com/Patch_1.2.X revid: 34453 fetched: 2026-09-09 -->
# Patch 1.2.X

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

**Patch 1.2.X** are all patches beginning with 1.2.

## 1.2

*Main article: [Patch 1.2](/Patch_1.2 "Patch 1.2")*

## 1.2.1

Patch 1.2.1 was released on 2026-05-08[[1]](#cite_note-1) with checksum *e429*.

### Other

* CTD fix related to AI specializing towns

### Military

* Reworked the unlock/allowance gates for Legionaries and Cataphract units, so there aren't any blind spots in which a Byzantine/Roman player can lose access to both of them at the same time, due to a combination of the tag and the "Latinitas vs Rōmanismós" Societal Value direction.

### Multiplayer

* Various OOS fixes
* Fixed a bug that prevented players from joining/hosting a game if one of the players owned Sacred Sites DLC and the other didn´t

### Bugfixes

* Fix FPS drop when opening a location screen, especially a location not owned by the player

## 1.2.2

Patch 1.2.2 was released on 2026-05-13[[2]](#cite_note-2) with checksum *fb04*.

### Gameplay

#### Government

* Fixed estates with fewer than 1 pop so they no longer receive any power.

#### Economy

* Changed the minimum threshold for AI attempting to trade for profit to 0.25 profit per TC (down from 0.5), which allows AI to be more aggressive when picking trades.

#### Society

* Changed characters to die of old age once they reach 100.

#### Diplomacy

* Fixed the laws enabling the Imperial Armory so they now properly require a preceding law that enables the treasury for the HRE.
* Prevented Junior Partners from being elected as HRE emperor.
* Fixed an issue where Imperial Armories were not properly transferred to the new Emperor and the conversion of the buildings was not updated in the UI.
* Prevented players from unconditionally surrendering in a civil war.

#### Other

* Gave Trebizond a reduced-requirements path to reform Byzantium, reflecting their Komnenian dynastic claim.
* Changed adding/changing/removing Hellenism religious aspects to cost religious influence (matching Lutheranism), instead of falling through to Inti's stability cost.

### Content

#### Setup

* Fixed a broken dynamic localization key in the Country History for Finnic countries so it now shows the German culture group correctly.
* Moved Padua from the Guelph to the Ghibelline IO at the start, due to the change in its starting ruler (as the country is now aligned with Verona).
* Reviewed and added more unique Town Rights in the setup to urban locations across Europe.
* Added a starting Orthodox Monastery to Kyiv, to round out the design revolving around the Kyiv Pechersk Lavra.

#### Situations

* Restricted the Balkan League so it can only appear if a Christian country whose capital is in the Balkans owns Constantinople and has at least 100 locations between itself and its subjects.

#### Disasters

* Changed the second option in the Fate of the Phoenix disaster event "Reformation of the Byzantine Army" to refund 5 Legitimacy.
* Tweaked the "Accept Catholic Delegation" action (accept\_catholic\_delegation) in the Fate of the Phoenix disaster so that it now also improves relations with the Papal States when the Pope has rivalled Byzantium, as the existing opinion loop had been skipping rivals.
* Fixed the "Fate of the Phoenix" disaster event "Nicaea Reclaimed!" (fate\_of\_the\_phoenix.3) incorrectly referring to the location of Izmit (Nicomedia) instead of the location of Iznik (Nicaea).
* Changed the Fate of the Phoenix starting event so it no longer incorrectly offers Renaissance eligibility as a reward, since the Renaissance always spawns before the disaster ends; it is now offered in the "Decline of the Palaiologos Renaissance" event.
* Fixed John Kantakouzenos never becoming the leader of the Byzantine Succession Crisis, and prevented the disaster from firing while Andronikos III was still alive.

#### International Organizations

* Fixed the Ilkhanate IO disbanding when all Borjigin claimants had claimed.
* Fixed an unlocalized popup title when accepting "Primas Germaniae" and "Legatus Natus" requests.
* Updated the papal authority game concept description to fit the new mechanics.

#### Events

* Fixed two Byzantine events that created alliances with subject nations which immediately broke.
* Fixed the Byzantine Kantakouzenos co-emperor event chain failing to trigger. "A Co-Emperor?" (flavor\_byz.60) now fires after Andronikos III dies rather than requiring him to be alive, which resolves the cascade block caused by his sickly trait killing him before the event could fire; also updated its description to reflect the post-death narrative. "Rise of John Kantakouzenos" (flavor\_byz.32) now triggers when Kantakouzenos is Head of Cabinet instead of gating on Legitimacy > 50, which could be drained below the threshold by unrelated events before the window closed.
* Fixed the "A Hand for Peace" Byzantine event chain (flavor\_byz.1200 to flavor\_byz.1203) triggering a marriage with the dead Theodora Kantakouzene when she had already died before the event fired.
* Fixed Venice going bankrupt after giving the Crown Jewels loan in the "In Dire Straits" event chain.
* Tweaked the tooltips for the "Byzantine Court Influence" custom tooltips (BYZ\_NO\_MORE\_COURT\_EVENTS and BYZ\_COURT\_EVENTS\_WILL\_CONTINUE) in the event "Reforming the Corpus Juris Civilis" (flavor\_byz.52) so they now explain that these events periodically push the country's Societal Values, which makes the tradeoff between the two options clearer to the player.
* Tweaked the events "New Sparta" (flavor\_byz.28) and "Hexamilion Wall" (flavor\_byz.38) so they no longer trigger when Byzantium controls more than half the Balkan region, as their flavor text references a Balkans decline that would not apply in that situation.
* Tweaked the events "Restoring Control in Anatolia" (flavor\_byz.36) and "Restoring Anatolia Region Cities" (flavor\_byz.57) so they can now trigger if the required locations are held by a Pronoia subject, instead of only directly.
* Added different options for the Byzantine Reconquest events of Athens, Nikomedia, Antioch, Jerusalem and Rome, depending on whether the religion of the country is Orthodox, Hellenic, or another one.
* Fixed a duplicate script key for Gemistos Plethon that had been making the event "The Beliefs of Gemistos Plethon" (flavor\_byz.1502) fail to trigger correctly. Also tweaked the localization of the first option of the event "Nomon Syngraphe" (flavor\_byz.40.a), which had been calling him a 'heretic' even if the player had converted to Hellenism.
* Changed the earliest year at which the Kronborg event of Denmark can fire to 1420.
* Fixed the Restoration of Constantinople modifier having a non-functional global effect.
* Fixed the "Lacking Jewels" modifier not disappearing when Byzantium recovered the Crown Jewels through peaceful territorial transfer.
* Prevented Constantinople from spawning the Renaissance through the event "Palaeologan Renaissance" if it has already spawned.
* Fixed scopes not being properly saved in the event chain "The Iberian Wedding", which had caused effects to not display properly in the tooltips.
* Fixed a localization issue in the event "Expanding the Hofburg" option.
* Fixed the "In Darkest Night" Hellenism event (hellenism\_religion.18) firing for Neoplatonist players by adding the missing Monism aspect exclusion, consistent with all other polytheistic Hellenism events.
* Fixed the BYZ crown jewels loan gold amount not being proportional to the crown power penalty.
* Fixed the Byzantine integration flavor events ("flavor\_byz.2", "flavor\_byz.4", "flavor\_byz.5", "flavor\_byz.6") being permanently missable when the player created a subject with the relevant provinces before the events fired, by replacing the trigger with another one that checks for ownership of either the country or its subject(s), and removing the "Is Integrating" requirement.
* Added a new event for Trebizond upon conquering Constantinople that unlocks more Bureaucracies for them.
* Fixed Byzantium receiving no notification about the Pawning of the Crown Jewels outcome.
* Fixed the BYZ crown jewels legitimacy debuff not clearing when an ally returned the jewels.
* Fixed an issue where Byzantium would lose access to their DHE when forming Rome.
* Fixed the revolt spawned by the Achaean event "Secession in Epirus" (flavor\_ach.7) displaying the placeholder name "orsini\_revolt" instead of "Orsini Revolt".
* Fixed broken character scopes override in event chain "A Hand for Peace".
* Fixed broken localization for the Orsini Revolt.
* Fixed the Byzantine event "A Roman Empire?" (flavor\_byz.33) firing regardless of culture and awarding cultural bonuses to the wrong culture; the event now only fires if Byzantium's primary culture is Greek or Latin, option A always targets Greek culture and accepts it if the country culture is Latin, while option B now branches its effects based on whether the primary culture is Latin or Greek.

#### Government

* Changed Nomos Empsychos (Bureaucracy) to grant -30% Crown Power as its negative modifier, and fixed a small issue with calculating Estate Satisfaction impact from Bureaucracy-related modifiers.
* Rebalanced the Prussian "Militarize Country" cabinet action discipline bonus from 0.01 to 0.05 in raw numbers. In practice, that means +5-9% discipline on average, and approximately +17.5% theoretical max.
* Fixed that upon the formation of the Roman Empire from Byzantium, one Bureaucracy Slot was lost, by adding a "Roma Caput Mundi" location modifier granting +1 bureaucracy slot while Rome is the capital.
* Fixed the tooltip description of the "Allowed Wars within Frankokratia" modifier from the "Partitio Terrarum Imperii Romaniae" government reform not mentioning the neighbor requirement for valid war targets.

#### Economy and Production

* Added a remove\_if condition to the Seljuk Mint building so it is automatically demolished when its owner is neither Turkish nor Turkoman culture.
* Fixed the "Imperial Breadbasket" unique town right being practically ungrantable to megalopolises by replacing the max-level granary requirement with a fixed threshold of level 5, since the granary max level scales with development and population and had been far too high for large megalopolises.

#### Society

* Improved the tooltip for the "Periphora" action (periphora\_desc) to clarify that the icon spends about a month in each location along the route, granting art quality bonuses while in transit, and directing players to the Works of Art map mode to track its progress.
* Fixed the Send Emissaries to Rome action description.
* Changed Byzantium so that if it adopts Latin culture, it falls back to existing Greek language location names if those locations do not yet have Latin language translations.
* Made Hellenism Greek/Roman aspect pairs that share a defining modifier (canonization, omen\_strength, omens\_offered) mutually exclusive, so the player cannot fill both slots with the same effect.
* Changed the modifier gained from "Synod on Local Administration" from the Orthodox Synod to grant only tolerance, and removed its separatism bonus.

#### Military

* Redesigned the unique units of the Byzantine Varangians to more closely resemble Cataphracts and Legionaries, with one upgradeable unit type per era. However, their numbers continue to increase additively, rather than multiplicatively. With this redesign, the Varangians no longer disappear after becoming upgradeable in the Age of Renaissance, and they interact much better with the content designed to increase their numbers, while also remaining useful across the different ages.
* Removed the initiative bonus from Byzantine cataphract unit types.

#### Advances

* Adjusted the Roman advance "All Roads Lead to Rome" Road Proximity Cost from -5 to -2, in line with the "Postal Service" advance, as it had been too much of an outlier.

#### Other

* Changed English Stannary Courts in Cornwall to no longer reduce max control, and instead increase local peasants estate power.
* Modified the scripted geography "Roman Borders", used by the unique CB "Restore Roman Borders", to more closely resemble the stable borders of the Roman Empire in the 2nd century AD. Changes included: removal of Scotland, addition of all missing territory on the Rhine and Danubian borders, and removal of Mesopotamia.
* Added a +1 Government Reform Slot modifier to the "Corpus Juris Civilis" administrative law policy to make it more competitive with the "Byzantine Law" policy.

### 2D Art

#### Icons

* Fixed the icon for the unique "Restore Roman Borders" CB not appearing correctly, which had been due to an incorrect asset naming.

### AI

#### Diplomacy

* Fixed an issue where AI could get stuck planning a war against someone who would call in a third party with whom the aggressor had a truce.

#### Economy

* Fixed an issue where AI wouldn't upgrade the Seljuk Mint unique building.
* Fixed an issue where AI didn't understand that the army maintenance modifier would also reduce the manpower cost.
* Added extra score for AI to research council hall buildings.
* Added AI score for the Logistic Distance modifier.
* Made AI much more proactive at expanding manpower buildings so they can continue expanding their army as their economy grows.

#### Military

* Fixed several issues that caused AI to not reassign their armies in sieges to attack nearby weak targets.
* Fixed an issue where AI didn't understand that they had vision in their occupied core territories.
* Fixed an issue where AI could get stuck not recruiting new armies when their existing armies were stuck in foreign territories.
* Fixed an issue where AI would sometimes not disband levies after a war was over.
* Fixed an issue where AI were sometimes not using all armies in a war because they were trying to recover manpower of regular subunits that were prisoners.
* Improved AI at assigning units to siege targets where they would have a valid supply line connection.
* Fixed an issue where AI armies would sometimes travel extremely long distances through enemy countries in order to embark on a ship after the Napoleonic warfare advance had been researched.
* Fixed an issue where AI armies would sometimes be pulled into objectives where two fleets were trying to merge with each other.
* Fixed an issue where AI transports would sometimes get stuck in objectives transporting units that had died.
* Fixed an issue where AI would sometimes hire far too many mercenaries.
* Fixed an issue where AI armies would sometimes move around trying to avoid a disease that they were immune to.

### Interface

#### Map Modes

* Changed the Market Access mapmode to use the red-yellow-green colour scheme used for number scales.

#### Panels

* Changed the Pentarchy panel to no longer require the\_pentarchy advance to be researched.

#### Outliner

* Added a time-left indicator for annexation in the outliner.
* Updated player cards in MP to also display the name of the player's country and their MP score rank.

### Miscellaneous

#### Other

* Exposed border variables for generation.

#### Bugfixes

* Localized the Buy/Sell location offer alert title, which previously displayed the raw BUYPROV\_ASK\_TITLE/SELLPROV\_ASK\_TITLE key.
* Updated the Militant Faithful event illustration to show clergy instead of peasants.
* Fixed Ragusa so it correctly appears for Italian language in Dubrovnik.
* Fixed a crash when parliaments were abolished.
* Fixed duplicate CBs being listed when you had multiple of the same type.
* Fixed a bug that allowed for advances to be researched out of order.
* Fixed not being able to separately sue for peace against a disloyal subject.
* Fixed a crash related to AI handling the focus siege objective.
* Fixed a crash that occurred when opening the log viewer after reloading the game.
* Fixed the God tooltip's omen list so it now shows the omen icon next to each Omen name.
* Fixed Omen modifiers so they now properly show the Omen icon instead of a fallback.
* Fixed a crash related to units' food capacity.
* Fixed a crash on unloading units from a mod or DLC.
* Reduced John Kantakouzenos' life expectancy bonus, as he had been living to be over 100.
* Kept the Byzantine Law when changing to Hellenism.

### Patch 1.2.2 Addendum

These patchnotes were missing from the original post and were published together with the 1.2.3 patchnotes on 2026-05-15[[3]](#cite_note-3) These are changes that have been on live since version 1.2.2.

#### Content

##### Events

* The Event "<country\_adjective> Exiles" (court\_flavor\_events.36) can no longer fire if the exiles origin country has under 18k population and if they only own locations with less than 12k population. This should prevent very aggressive depopulation of some locations where many small countries exist
* Adjusted the "A Powerful Despot" event chain (flavor\_byz\_ser.1-flavor\_byz\_ser.6), so Strumica will be immediately annexed if Serbia wins it.
* Removed Strumica from the setup and adjusted it to be a releasable country bound to the "A Powerful Despot" event chain (flavor\_byz\_ser.1-flavor\_byz\_ser.6).

##### Government

* Nerfed the Ritualistic Court bureaucracy by reducing annexation speed and cultural influence in the Positive Modifier
* Nerfed the Kephalai bureaucracy by increasing the estate enrichment and non-rural prosperity penalties in the Negative Modifier
* Nerfed the Imperial Senate bureaucracy by reducing parliament duration in the Constant Modifier and parliament base support in the Positive Modifier
* Buffed the Thémata bureaucracy by raising manpower and levy size and adding monthly army tradition to the Constant Modifier
* Buffed the Books of the Basiliká bureaucracy by adding a small monthly legitimacy bonus to the Constant Modifier
* Buffed the Romanitas bureaucracy: stronger integration speed and added monthly legitimacy in the Positive Modifier, added cultural influence to the Constant Modifier, and removed antagonism received from the Negative Modifier

##### Society

* Latin culture starts kindred opinion of Greek and vice versa

##### Achievements

* Fixed the achievements "Belisar's Legacy" and "There Can Be Only One" being locked only for Byzantium; now they will also be available if the player started as Byzantium, but later formed another country (such as Rome).

##### Bugfixes

* Fixed city\_illustration\_trigger causing error spam on some mods
* In the Grant Latin Merchant Privileges message it now properly shows Italian instead of $italian\_language$
* Fixed Romanian -escu patronymic suffixes to be suffixes instead of prefixes
* Fixed some cabinet actions not updating properly when assigning characters to them

## 1.2.3

Patch 1.2.3 was released on 2026-05-15[[4]](#cite_note-4) with checksum *6a4a*.

### Content

Diplomacy

* The Enforce Landfriede diplo action has now proper AI weighting and can now be declined. If declines, the Emperor joins against you in the war

Military

* Made a follow-up fix for the new Varangian units, as they don't show up at start, but in the proper ages they're unlocked.

## 1.2.4

Patch 1.2.4 was released on 2026-05-20[[5]](#cite_note-5) with checksum *e02d*.

### Gameplay

#### Government

* Rebalanced complacency drivers: halved passive gain from idle rival slots, and doubled the swing from average control.
* Fixed ruler title not updating after forming a country.

#### Society

* Increased pop growth modifiers from available land and cheap food.

#### Diplomacy

* Fixed an issue that caused white peaces in particular to have a 20-year truce.
* Changed truces to properly scale with the war score used to end the war, instead of the war score the war ended with.

#### Military

* Changed the combat overrun ratio to use each side's true nominal strength as the numerator, so a 0-morale army can no longer be auto-overrun by a much smaller opponent. Morale collapse still gates resistance, preserving the intended overrun mechanic at a genuine 10x size advantage.

#### Other

* Changed cores gained from script (events, etc.) or lost to other countries to remain for a period of 100 years, after which they disappear if the dominant culture of the location is not the same as the culture of the core's country.

### Content

#### Setup

* Added City Walls to Thessaloniki at the start of the game.
* Added missing (Orthodox) Cathedral buildings in the setup across Greece and the Balkans, mirroring the design for the rest of Europe.
* Reassigned the locations of Ikaria and Samos from Genoa to Byzantium at game start, and updated the "Reconquest of the Eastern Aegean" (flavor\_gen.16) and "The Genoese Have Taken Chios" (flavor\_gen.51) events to reflect the new starting ownership.
* Set the country rank of Patras to Duchy.

#### Disasters

* Rebalanced the new conditions of the "Reform Society" disaster to make it less tedious to achieve once again; the subject location contribution was changed from 0.75 to 0.25, and the monthly push towards centralization from 0.2 to 0.33. The approximate effect is that for a player with 24 direct locations and 120 subject locations, the target drops from 114 to 54, requiring annexing roughly half of subjects instead of almost all.

#### Events

* Fixed another instance that caused the Percy and Mortimer rebel armies not to spawn when choosing the historical option A of "The Tripartite Indenture" (flavor\_eng.95).
* Fixed the Byzantine event "A Brilliant Center of Learning" (flavor\_byz.13) granting an "Art School" or "Arts Academy" at Mystras when it is not the capital, which caused the building to be immediately removed. When Mystras is not the capital, option A now applies a permanent "Center of Learning" location modifier.
* Fixed Percy and Mortimer rebel armies not spawning reliably and with too few soldiers when choosing the historical option A of "The Tripartite Indenture" (flavor\_eng.95).
* Fixed the "Sack and Destruction of Venice" event (flavor\_byz.1) firing when Byzantium acquired Venice through peaceful diplomatic annexation (e.g. annexing a Venetian Pronoia subject). The event trigger now also requires that the new venice\_acquired\_peacefully\_variable, set in on\_diplomatic\_annex when a BYZ-tagged country diplomatically annexes a subject that owns Venice, is absent.
* Fixed the event "Controversial Texts from \[target\_location]" (town\_rights\_events.16) option B applying an unbounded satisfaction penalty, by adding a proper division by 100 to the formula.
* Fixed the Wallachian "Vlad the Impaler" event (flavor\_wal.1) not appearing in the Content list or Events window for Wallachia.
* Prevented castrated/eunuch rulers from triggering dynastic heir events that give bastard sons.
* Improved the text of "The Non-Possessor Movement" event (orthodox\_flavor.1).
* Fixed missing localization in Byzantium DHEs in the event viewer.

#### Government

* Fixed Great Britain and Spain formables not appearing in the lobby Content Viewer.
* Tweaked the formation of Rome as Byzantium so it also integrates the "Marittima" province (Rome, Terracina, Velletri) upon formation, avoiding some issues caused by moving the capital to the Rome location.
* Fixed the "Kephalai" bureaucracy being available from game start instead of requiring winning the "Fate of the Phoenix" disaster, matching the behaviour of the "Allelengyon" bureaucracy.
* Fixed the "Latin Empire" (LAT\_f) formable not appearing in the Age of Reformation, due to an inconsistent age requirement in the potential block.
* Added an exception to not Call In Overlord for the subjects of the Latin Empire when using the "Latin Reconquest" CB, so the overlord doesn't automatically get in and take over as the War Lead, potentially forcing a peace deal without the effects of the CB.
* Changed forming Byzantium or the Roman Empire to unlock the "Restore Roman Borders" casus belli, gated on the Fate of the Phoenix DLC.
* Fixed the "Empower the Eunuchs" government reform not granting may\_hire\_eunuch\_advisors, so the Middle Kingdom can now hire eunuch courtiers as intended after the "The Eunuchs of \[Country]" (flavor\_chi.44) event.

#### Economy and Production

* Fixed the broken Upper Bergregal hyperlink in the Bergordnung policy tooltip.
* Changed the "Scholai Privileges" urban right to require a university and 20 development instead of a low-literacy check.

#### Society

* Improved the "Grant a Triumph" Hellenic action reward from 10 to 20 Prestige, and added a tooltip showing the "Triumphant" trait modifiers also granted by the action in the effects section of the action tooltip.
* Made Hellenism religious aspect pairs that share a defining modifier (canonization, omen\_strength, omens\_offered) mutually exclusive, so the player cannot fill both slots with the same effect.
* Fixed the tooltip added to show the "Triumphant" trait modifier granted by the "Grant a Triumph" action not appearing correctly.
* Set Latin culture to start with kindred opinion of Greek, and vice versa.
* Fixed Shinto AI countries committing Seppuku excessively.
* Fixed the Loan Icon interaction being usable on icons already borrowed from another country.

#### Diplomacy

* Fixed the "Restore Roman Borders" CB showing on subjects when the overlord owned Roman land.
* Changed the Castrate and Blind interactions to exclude a character from being eligible as a pretender in a Succession Crisis; the two actions can also no longer be used against Heads of Cabinet.
* Changed the "Restore Roman Borders" casus belli to also consider subject neighbors as potential targets.

#### Military

* Removed the DLC lock for the new Age-2-to-Age-6 Varangian units, as their creation was intended as a fix to the base game Age 1 Varangian unit not working properly per its original design intention, and not as a "Fate of the Phoenix" DLC content addition.
* Changed Cataphract and Akritai location triggers to require the "Roman" culture group (greek\_group) instead of just the "Greek" culture (greek\_culture).
* Changed Cataphract advances and units to require the "Roman" culture group (greek\_group) instead of just the "Greek" culture (greek\_culture).
* Fixed the "Iberian Caravel" not being able to upgrade to the Square-Rigged Caravel, fixed the wrong costs of the latter, and increased some of its stats.

#### Other

* Rebalanced the Byzantine "Restoring the Varangians" event chain (flavor\_byz.1400-flavor\_byz.1403): 1. Moved the event window from 1450-1500 to 1380-1430 so it fires earlier. 2. Reduced the gold transfer from 0.5 to 0.25 yearly income to better match comparable events. 3. Accepting it now permanently grants +1 Varangian unit capacity via a new country modifier.

### Onboarding

#### Missions

* Changed the task "Found a Town" under "Infrastructure Efforts" to take into account the Megalopolis rank.

### 2D Art

#### Icons

* Fixed 9 Balkanic advances showing generic icons instead of their dedicated unique icons.
* Fixed 7 Frankokratia advances showing generic icons instead of their dedicated unique icons.

#### Flags

* Fixed the Ohmućević dynasty COA to match the Korenić-Neorić Armorial reference.

### AI

#### Economy

* Added AI score for the land morale modifier.

#### Military

* Fixed an issue where AI would never stop to recover morale if they didn't have food, regardless of whether their morale recovery would be positive.
* Increased AI army size targets, leading to fewer, larger stacks as opposed to many smaller stacks.
* Fixed an issue where large countries would often not be able to buy mercenaries due to problems with checking recruitment locations.
* Fixed an issue where AI navies could get stuck in a friendly transport objective.
* Fixed an issue where AI didn't factor in hired mercenaries when evaluating country strength for each side in ongoing wars.

### Interface

#### Tooltips

* Fixed the "move\_capital\_event\_effect" showing development changes as 0 when forming countries that move the capital.

#### Other

* Updated the hire mercenary effect tooltip to show contract length in months.
* Added a religion data mapmode shown when mousing over a religion in the UI, which more clearly shows the situation of a religion per location.
* Changed mousing over a Religion in the UI to display its Holy Sites on the map as icons.

### Bugfixes

* Changed the "Offered Omens" tile in the religion panel to show the country's actual cap on simultaneously offered omens (e.g. +3 as Hellenism) instead of the total number of omens defined across the religion's gods (e.g. 0/60).
* Fixed the War of the Roses disaster so it can no longer get stuck on empty rebels.
* Differentiated same-religion no-CB war cost from cross-religion.
* Capped 100% peace deal truce at 15 years.
* Fixed city\_illustration\_trigger causing error spam on some mods.
* Fixed the "Grant Latin Merchant Privileges" message so it now properly shows Italian instead of $italian\_language$.
* Fixed Romanian -escu patronymic suffixes to be suffixes instead of prefixes.
* Fixed a crash related to the host losing their country.
* Fixed an issue with fort defenses not calculating properly when loading a save.
* Fixed trade orders resetting Market Automation after the first Trades-tab open after load.
* Changed separatist rebels to rise up with 0 war exhaustion.
* Prevented players from assigning their Head of the Cabinet as the ruler in a newly released location- or building-based subject.
* Fixed a crash to desktop when a new, different country was elected Emperor while constructing an Imperial Armory.
* Fixed the add\_morale script effect so it now correctly accumulates onto existing subunit morale instead of overwriting it with the raw delta value.
* Fixed the colonial charter so it once again converts tribal pops (not non-tribal) when flipping a location, restoring native\_subjugation enslave\_tribals, native\_integration make\_tribals\_peasants, and expel\_tribals policies.
* Fixed a crash when a location with town rights was abandoned from an event.
* Fixed a crash related to updating a religious or cultural movement.

## 1.2.5

Patch 1.2.5 was released on 2026-05-27[[6]](#cite_note-6) with checksum *cf2f*.

### Translation

* Added missing localization for all languages

### Multiplayer

* Fixed various OOS issues

### Bugfixes

* Fixed Crash to desktop related to Renovatio Imperii (i.e. forming the HRE).

### Miscellaneous

* Optimized RAM usage for diplomacy

## References

1. [↑](#cite_ref-1) Forum: [Hotfix 1.2.1 Live now](https://forum.paradoxplaza.com/forum/index.php?threads/1921276 "forum:1921276"), 2026-05-08.
2. [↑](#cite_ref-2) Forum: [Patch 1.2.2 - out now](https://forum.paradoxplaza.com/forum/index.php?threads/1922472 "forum:1922472"), 2026-05-13.
3. [↑](#cite_ref-3) Forum: [Hotfix 1.2.3 Out Now + Progress Update](https://forum.paradoxplaza.com/forum/index.php?threads/1922961 "forum:1922961"), 2026-05-15.
4. [↑](#cite_ref-4) Forum: [Hotfix 1.2.3 Out Now + Progress Update](https://forum.paradoxplaza.com/forum/index.php?threads/1922961 "forum:1922961"), 2026-05-15.
5. [↑](#cite_ref-5) Forum: [Patch 1.2.4 Out Now](https://forum.paradoxplaza.com/forum/index.php?threads/1923830 "forum:1923830"), 2026-05-20.
6. [↑](#cite_ref-6) Forum: [Patch 1.2.5 Out Now](https://forum.paradoxplaza.com/forum/index.php?threads/1925149 "forum:1925149"), 2026-05-27.