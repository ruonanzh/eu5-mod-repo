<!-- source: https://eu5.paradoxwikis.com/Combat revid: 34735 fetched: 2026-09-09 -->
# Combat

Please help with verifying or updating older sections of this article.
At least some were last verified for [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") 1.0.

[![](/thumb.php?f=UI_battle.png&width=330)](/File%3AUI_battle.png)

A battle

Each battle has an attacking side and a defending side. If the [location](/Location "Location") does not have a fort, the first unit present before a battle will be the defender. If the location has a fort, the fort's controller will always be the defender.

An army or navy that runs out of morale, loses a battle without all soldiers being killed, or is manually ordered by is country to retreat, will not fight another battle or receive new orders until it has reached its retreat destination.

Winning a battle gives a prestige bonus to the victor, and in wars between countries it also gives warscore.

## Terrain

### Base terrain modifiers

The attacking and in the case of frontage; defending armies can be affected by both topography and vegetation during battle. This can be in the form of penalties to dice rolls, frontage as well as some units having their own unique penalties and/or buffs in certain terrain types. For example, a mountainous woods province would give the attacker a -3 to their dice rolls (-2 from mountains, -1 from woods) and give both sides -6 possible frontage (-4 from mountains, -2 from woods).

Rivers and straits also provide dice roll penalties to the attacking army, so long as they cross over or into a location with a river or cross into a location through a strait. Rivers provide a penalty of −1[[1]](#cite_note-1), and straits a penalty of −2[[2]](#cite_note-2).

### Unit specific modifiers

Unit types can sometimes get benefits or penalties from fighting in certain topography and vegetation types.

This modifier is represented as a percentile increase to your damage, such as +50% for galleys in narrows or -10% for cavalry in wetlands, mountains or jungles.

Unique units can have their own unique modifiers in terrain. For example, the Irish Hobelars (A cavalry unit) gets +50% damage in woods and hills and +25% damage in forests.

## Combat

### Phases

Combat is made up of multiple phases, which last 5 hours each. During each phase, both sides will roll a 6 sided die, which determines how much damage each side will deal until the next phase.

In land battles, if either army has an Artillery regiment, combat will begin with the Bombard Phase. This Phase lasts 5 hours and each hour Artillery regiments have a chance, equal to their bombardment efficiency, to deal damage to an enemy regiment on the same section. Afterwards, the combat phases will proceed as normal.

For regiments, the amount of damage they deal is calculated as [![Combat power.png](/thumb.php?f=Combat_power.png&width=24)](/Combat_Power "Combat Power") Combat Power multiplied by Strength. For ships, the amount of damage they deal depends on [![Cannons.png](/thumb.php?f=Cannons.png&width=24)](/Cannons "Cannons") Cannons and the amount of damage they receive depends on [![Hull size.png](/thumb.php?f=Hull_size.png&width=24)](/Hull_Size "Hull Size") Hull Size.

### Sections and Engagement

Combat has four sections, center, left flank, right flank, and reserves. Each unit is assigned to one of the sections from the army screen. Units start the combat disengaged, incapable of dealing damage. Each hour, units that are placed in the center, left flank or right flank sections have a chance to become engaged, choose an enemy target to attack, and start dealing damage to it. The chance for a unit to become engaged depends on its [![Initiative.png](/thumb.php?f=Initiative.png&width=24)](/Initiative "Initiative") Initiative and is 0.1 + (Initiative\*0.02)+(Hours\*0.01). Hours reset after reaching a maximum of 5 hours to go back to 1 and revolve again. The maximum number of units that can be engaged at once in each section depends on the location's [![Possible frontage.png](/thumb.php?f=Local_frontage_allowed_positive.png&width=24)](/Possible_Frontage "Possible Frontage") Possible Frontage and each unit's [![Frontage.png](/thumb.php?f=Frontage.png&width=24)](/Frontage "Frontage") Frontage.

Units from reserve have a chance each hour to move to any of the flanks which depends on [![Combat speed.png](/thumb.php?f=Combat_speed.png&width=24)](/Combat_Speed "Combat Speed") Combat Speed. The chance to engage is 0.05\*[![Combat speed.png](/thumb.php?f=Combat_speed.png&width=24)](/Combat_Speed "Combat Speed") Combat Speed\*Combat speed modifier. The most common combat speed modifiers are from general ability and from defensive values.

Units that join combat late by moving from an adjacent province are assigned either to the reserve or to their assigned section, with the chance of joining their section being the [![Correct section chance.png](/thumb.php?f=Correct_box_chance.png&width=24)](/Correct_Section_Chance "Correct Section Chance") Correct Section Chance

### Target selection

|  |  |
| --- | --- |
| ![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png) | Please help improve this article or section by [**expanding it**](https://eu5.paradoxwikis.com/index.php?title=Combat&action=edit) with: the rules deciding which unit will target which. |

When a unit engages in combat, they choose a target to attack, and will keep attacking it until either of the units is eliminated. Units will choose one of the engaged units in the opposite section to attack, seemingly at random. However, if there are no opposing engaged units, a unit may target a disengaged unit. It will continue to attack it even if there are valid engaged targets to attack later. A disengaged unit will take additional damage (see below). If the enemy army or navy does not have units in the same section, the nearest adjacent section will be targeted and the attacking unit may deal additional damage depending on its [![Flanking ability.png](/thumb.php?f=Flanking_ability.png&width=24)](/Flanking_Ability "Flanking Ability") Flanking Ability.

### Overrun

|  |  |
| --- | --- |
| ![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png) | Please help improve this article or section by [**expanding it**](https://eu5.paradoxwikis.com/index.php?title=Combat&action=edit) with: the stackwipe rules. |

## Damage

### Army Damage Calculation

Base strength damage, measured in number of men killed in the opposing regiment, is **Failed to parse (SVG (MathML can be enabled via browser plugin): Invalid response ("Math extension cannot connect to Restbase.") from server "https://en.wikipedia.org/api/rest\_v1/":): {\displaystyle dice\\_impact = 10 + (dice\\_roll - 1 + terrain\\_dice + crossing\\_dice) \times 2}**

Base [![Land morale.png](/thumb.php?f=Land_morale.png&width=24)](/File%3ALand_morale.png) morale damage is 1/200 of that, or

d
i
c
e
\_
i
m
p
a
c
t
=
0.05
+
(
d
i
c
e
\_
r
o
l
l
−
1
+
t
e
r
r
a
i
n
\_
d
i
c
e
+
c
r
o
s
s
i
n
g
\_
d
i
c
e
)
×
0.01
{\displaystyle dice\\_impact=0.05+(dice\\_roll-1+terrain\\_dice+crossing\\_dice)\times 0.01}
![{\displaystyle dice\_impact=0.05+(dice\_roll-1+terrain\_dice+crossing\_dice)\times 0.01}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/6ba95af9e062d2a75f63242e5032b8f4e3a008de)

In addition to damage from units, every regiment that is in combat, included not engaged units and reserves, takes 0.01 morale damage per hour.

Most of the calculation of strength and morale damage is the same, but there are a few modifiers that apply differently. Each of the modifiers listed here is applied multiplicatively on top of the others.

#### Damage Modifiers

The following modifiers are applied to both morale and strength damage based on the stats of the attacking regiment

* [![Combat power.png](/thumb.php?f=Combat_power.png&width=24)](/Combat_Power "Combat Power") Combat Power
* [![Infantry power.png](/thumb.php?f=Army_infantry_power.png&width=24)](/Infantry_Power "Infantry Power") Infantry Power,[![Cavalry power.png](/thumb.php?f=Army_cavalry_power.png&width=24)](/Cavalry_Power "Cavalry Power") Cavalry Power, or [![Artillery power.png](/thumb.php?f=Army_artillery_power.png&width=24)](/Artillery_Power "Artillery Power") Artillery Power
* [![Discipline.png](/thumb.php?f=Discipline.png&width=24)](/Discipline "Discipline") Discipline
* When attacking a flank other than the opposing one, [![Flanking ability.png](/thumb.php?f=Flanking_ability.png&width=24)](/Flanking_Ability "Flanking Ability") Flanking Ability. 200% flanking ability is a 2x modifier, while 100% means no flanking bonus.
* When attacking [![Regulars.png](/thumb.php?f=Regulars.png&width=24)](/Regulars "Regulars") Regulars with Levies, [![Levy combat efficiency.png](/thumb.php?f=Levy_combat_efficiency.png&width=24)](/Levy_Combat_Efficiency "Levy Combat Efficiency") Levy Combat Efficiency. Levy combat efficiency has a base of 0.5 which gets multiplied by your levy combat efficiency.
* Terrain and vegetation modifiers. For example, most cavalry units face a 10% penalty in mountains, jungle, or wetlands.

The following defensive modifiers are based on the stats of the defender

* Damage is divided by [![Military tactics.png](/thumb.php?f=Military_tactics.png&width=24)](/Military_Tactics "Military Tactics") Military Tactics. Tactics of 2 would therefore be a 50% damage reduction
* Damage is reduced by Army Experience, divided by 2. At 100% experience, this is a 50% damage reduction.
* Damage Taken modifier of the unit type. This is currently 0.75 for cavalry for 1.26 for artillery.
* [![Secure flanks.png](/thumb.php?f=Secure_flanks.png&width=24)](/Secure_Flanks "Secure Flanks") Secure Flanks, multiplied by the number of adjacent flanks that are not empty. For infantry, this amounts to 10% damage reduction in the center and 5% on the flanks.

#### Strength damage modifiers

Offensive Modifiers:

* Regiment Strength: 1 for naval units, or

  m
  e
  n
  \_
  i
  n
  \_
  r
  e
  g
  i
  m
  e
  n
  t
  1000
  {\displaystyle {\frac {men\\_in\\_regiment}{1000}}}
  ![{\displaystyle {\frac {men\_in\_regiment}{1000}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/cc82655adea364879348b565a4392d57ce76fd7f) for army units.
* Strength damage done modifier
* 1.1 if attacking a non-engaged regiment. This may happen during the bombard phase, or if there are no engaged units for the unit to target.

Defensive modifiers:

* Strength damage taken modifier

#### Morale damage

Offensive Modifiers:

* Proportion of maximum regiment strength (unlike strength damage, this is proportion rather than absolute numbers)
* Morale damage done modifier
* 1.2 if attacking a non-engaged regiment. This may happen during the bombard phase, or if there are no engaged units for the unit to target.

Defensive modifiers:

* Morale damage taken modifier

### Navy Damage Calculation

Navy damage is split into both Strength Damage and Morale Damage.

Base strength damage, measured in percentage points, is

d
i
c
e
\_
i
m
p
a
c
t
=
0.25
+
(
d
i
c
e
\_
r
o
l
l
−
1
+
t
e
r
r
a
i
n
\_
d
i
c
e
)
×
0.05
{\displaystyle dice\\_impact=0.25+(dice\\_roll-1+terrain\\_dice)\times 0.05}
![{\displaystyle dice\_impact=0.25+(dice\_roll-1+terrain\_dice)\times 0.05}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/d396de01c26d8d02fb2ec4d37cf869220be26691)

Base morale damage is

d
i
c
e
\_
i
m
p
a
c
t
=
0.01
+
(
d
i
c
e
\_
r
o
l
l
−
1
+
t
e
r
r
a
i
n
\_
d
i
c
e
)
×
0.002
{\displaystyle dice\\_impact=0.01+(dice\\_roll-1+terrain\\_dice)\times 0.002}
![{\displaystyle dice\_impact=0.01+(dice\_roll-1+terrain\_dice)\times 0.002}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/49c2d3a1e5122959f4838600e9417a9f8c05e38c)

Navies attacking into Narrows locations should get a -1 on dice rolls but in version 1.0.10 this modifier does not currently apply.

#### Damage Modifiers

Naval damage is modified by the number of [![Cannons.png](/thumb.php?f=Cannons.png&width=24)](/Cannons "Cannons") Cannons vs [![Hull size.png](/thumb.php?f=Hull_size.png&width=24)](/Hull_Size "Hull Size") Hull Size. It calculates this by comparing the percentage increase required for the defending ship's hull value to meet the cannon value of the attacker. For example, a 9 cannon galley firing at a 6 hull light ship would have a +50% cannons vs hull size modifier because you need to increase 6 by 50% to get to 9. This can be represented as ((AttackerCannons - DefenderHull) / DefenderHull) to get the decimal value of the percentage.

The following modifiers are applied to both morale and strength damage based on the attacking regiment

* Current strength. A ship at 50% strength will have a -50% modifier applied to all it's outgoing damage
* [![Galley power.png](/thumb.php?f=Navy_galley_power.png&width=24)](/Galley_Power "Galley Power") Galley Power,[![Heavy ship power.png](/thumb.php?f=Navy_heavy_ship_power.png&width=24)](/Heavy_Ship_Power "Heavy Ship Power") Heavy Ship Power, [![Light ship power.png](/thumb.php?f=Navy_light_ship_power.png&width=24)](/Light_Ship_Power "Light Ship Power") Light Ship Power, or [![Transport power.png](/thumb.php?f=Navy_transport_power.png&width=24)](/Transport_Power "Transport Power") Transport Power
* [![Naval damage done.png](/thumb.php?f=Naval_damage_done.png&width=24)](/Naval_Damage_Done "Naval Damage Done") Naval Damage Done. Up to 20% gained from Admiral Military ability and other sources from advances such as 10% from boarding parties.
* When attacking a flank other than the opposing one, [![Flanking ability.png](/thumb.php?f=Flanking_ability.png&width=24)](/Flanking_Ability "Flanking Ability") Flanking Ability is applied. Light ships get +20% when flanking.
* Terrain and vegetation modifiers. Galleys suffer a -100% damage dealt penalty in Deep Ocean, -50% in Ocean, while getting +25% in Inland Sea and +50% in Narrows
* If a ship is attacking another ship that is not engaged, the attacking ship deals +10% Strength damage, and +20% morale damage to that ship.

The following defensive modifiers are based on the stats of the defender

* Ship Experience, divided by 2. At 100% experience, this is a 50% damage reduction.
* [![Naval damage taken.png](/thumb.php?f=Naval_damage_taken.png&width=24)](/Naval_Damage_Taken "Naval Damage Taken") Naval Damage Taken which is a flat damage reduction based on the value.

#### Strength damage formula with modifiers

Below is a formula for all these damage modifiers alongside one another for strength damage. Any percentile values such as 50% are represented as a decimal such as 0.5 for the sake of the formula. This is purely for strength damage, not morale damage as they have different formulas.

Some values, such as NavalDamageTaken are negative values by default. For example, Norway's starting -5% for Naval Damage Taken will be represented as -0.05 here.

(
0.25
+
(
D
i
c
e
R
o
l
l
−
1
+
t
e
r
r
a
i
n
\_
d
i
c
e
)
×
0.05
)
×
(
1
+
N
a
v
a
l
D
a
m
a
g
e
)
×

(

1
+

AttackerCannons
−

DefenderHull
Defender Hull
)
×
(
1
+
(
S
h
i
p
S
t
r
e
n
g
t
h
−
100
)
÷
100
)
×
(
1
−
(
E
x
p
÷
2
)
)
×
(
1
+
S
h
i
p
C
o
m
b
a
t
A
b
i
l
i
t
y
)
{\displaystyle (0.25+(DiceRoll-1+terrain\\_dice)\times 0.05)\times (1+NavalDamage)\times \left(1+{\tfrac {{\text{AttackerCannons}}-{\text{DefenderHull}}}{\text{Defender Hull}}}\right)\times (1+(ShipStrength-100)\div 100)\times (1-(Exp\div 2))\times (1+ShipCombatAbility)}
![{\displaystyle (0.25+(DiceRoll-1+terrain\_dice)\times 0.05)\times (1+NavalDamage)\times \left(1+{\tfrac {{\text{AttackerCannons}}-{\text{DefenderHull}}}{\text{Defender Hull}}}\right)\times (1+(ShipStrength-100)\div 100)\times (1-(Exp\div 2))\times (1+ShipCombatAbility)}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/7da55bee91010f50a342b91f18956754a20e9e84)

×
(
1
+
F
l
a
n
k
i
n
g
A
b
i
l
i
t
y
)
×
(
1
+
T
o
p
o
g
r
a
p
h
y
M
o
d
i
f
i
e
r
)
×
(
1
+
N
o
t
E
n
g
a
g
e
d
M
o
d
i
f
i
e
r
)
×
(
1
+
N
a
v
a
l
D
a
m
a
g
e
T
a
k
e
n
)
{\displaystyle \times (1+FlankingAbility)\times (1+TopographyModifier)\times (1+NotEngagedModifier)\times (1+NavalDamageTaken)}
![{\displaystyle \times (1+FlankingAbility)\times (1+TopographyModifier)\times (1+NotEngagedModifier)\times (1+NavalDamageTaken)}](https://en.wikipedia.org/api/rest_v1/media/math/render/svg/0cfab0ef3a80b93eb14a6c9fc94c6ad038675ce1)

All modifiers, both negative and positive are multiplicative to one another in this formula, making all of them equally as important to consider for any aspiring admiral.

## Unit stats

Units have the following stats:

* [![Initiative.png](/thumb.php?f=Initiative.png&width=24)](/File%3AInitiative.png) Initiative is the chance that a unit will engage during the combat phase if placed in the center, left flank or right flank.
* [![Frontage.png](/thumb.php?f=Frontage.png&width=24)](/File%3AFrontage.png) Frontage determines how many units can fight at the same time. It is also affected by the topography or vegetation of a location.
* [![Food storage.png](/thumb.php?f=Food_storage.png&width=24)](/File%3AFood_storage.png) Food storage is the amount of food that a unit can carry. It is reduced by 50% if the unit retreats.
* [![Movement speed.png](/thumb.php?f=Movement_speed.png&width=24)](/File%3AMovement_speed.png) Movement speed determines how fast a unit moves across the map.
* [![Combat speed.png](/thumb.php?f=Combat_speed.png&width=24)](/File%3ACombat_speed.png) Combat speed determines how fast the unit moves from reserves to another section during battle. For ships, it also impacts how quickly a damaged ship can leave the current section to retreat.
* [![Flanking ability.png](/thumb.php?f=Flanking_ability.png&width=24)](/File%3AFlanking_ability.png) Flanking ability is how much damage the unit can inflict on units in a different section.
* [![Attrition.png](/thumb.php?f=Attrition.png&width=24)](/File%3AAttrition.png) Attrition loss is how much damage attrition does each month.

Regiments have the following additional stats:

* [![Combat power.png](/thumb.php?f=Combat_power.png&width=24)](/File%3ACombat_power.png) Combat power is the direct damage dealing attribute of a regiment. It is multiplied with the manpower of the regiment to determine how much damage the regiment does.
* [![Max strength.png](/thumb.php?f=Max_strength.png&width=24)](/File%3AMax_strength.png) Maximum strength increases how many more men the regiment has, thus increasing its manpower cost. A regiment with a higher amount of manpower but with the same frontage is more effective in combat.
* [![Army weight modifier.png](/thumb.php?f=Army_weight_modifier.png&width=24)](/File%3AArmy_weight_modifier.png) Unit weight is compared against the army location's supply limit to determine whether the regiment will suffer attrition.
* [![Food consumption modifier.png](/thumb.php?f=Food_consumption_modifier.png&width=24)](/File%3AFood_consumption_modifier.png) Food consumption is the amount of food that a regiment will consume each month.
* [![Secure flanks.png](/thumb.php?f=Secure_flanks.png&width=24)](/File%3ASecure_flanks.png) Secure flanks provides a defensive bonus when there are friendly troops in a neighboring section. The bonus is doubled if both flanks are secure.
* Experience reducing the damage taken by 0.5% per point up to 50% at max experience.

Ships have the following additional stats:

* [![Cannons.png](/thumb.php?f=Cannons.png&width=24)](/File%3ACannons.png) Cannons determine how much damage the ship does.
* [![Hull size.png](/thumb.php?f=Hull_size.png&width=24)](/File%3AHull_size.png) Hull size reduces the damage the ship takes.
* [![Crew size.png](/thumb.php?f=Crew_size.png&width=24)](/File%3ACrew_size.png) Crew size determines how many sailors are requires for the ship to be operational.
* [![Transport capacity.png](/thumb.php?f=Transport_capacity.png&width=24)](/File%3ATransport_capacity.png) Transport capacity is how many regiments can embark on the ship.
* [![Anti piracy impact.png](/thumb.php?f=Anti_piracy_impact.png&width=24)](/File%3AAnti_piracy_impact.png) Anti-piracy impact is the effect the ship will have on privateers in their area.
* [![Blockade capacity.png](/thumb.php?f=Blockade_capacity.png&width=24)](/File%3ABlockade_capacity.png) Blockade capacity determines how effective the ship is at blockading.

Base Unit Stats

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | category | buildable | max\_strength | combat\_power | impact |  |  | combat |  |  | bombard\_efficiency | artillery\_barrage |
|  |  |  |  |  | jungle | wetlands | mountains | jungle | wetlands | mountains | |  |
| a\_age\_1\_traditions\_infantry | army\_infantry | no | 0.1 | 1 |  |  |  |  |  |  |  |  |
| a\_age\_2\_renaissance\_infantry | army\_infantry | no | 0.2 | 1 |  |  |  |  |  |  |  |  |
| a\_age\_3\_discovery\_infantry | army\_infantry | no | 0.4 | 1 |  |  |  |  |  |  |  |  |
| a\_age\_4\_reformation\_infantry | army\_infantry | no | 0.8 | 1.5 |  |  |  |  |  |  |  |  |
| a\_age\_5\_absolutism\_infantry | army\_infantry | no | 1.6 | 2.25 |  |  |  |  |  |  |  |  |
| a\_age\_6\_revolutions\_infantry | army\_infantry | no | 3.2 | 3 |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |
| a\_age\_1\_traditions\_cavalry | army\_cavalry | no | 0.05 | 4 | 0.1 | 0.1 | 0.1 | -0.1 | -0.1 | -0.1 |  |  |
| a\_age\_2\_renaissance\_cavalry | army\_cavalry | no | 0.1 | 4 | 0.1 | 0.1 | 0.1 | -0.1 | -0.1 | -0.1 |  |  |
| a\_age\_3\_discovery\_cavalry | army\_cavalry | no | 0.2 | 4 | 0.1 | 0.1 | 0.1 | -0.1 | -0.1 | -0.1 |  |  |
| a\_age\_4\_reformation\_cavalry | army\_cavalry | no | 0.3 | 4 | 0.1 | 0.1 | 0.1 | -0.1 | -0.1 | -0.1 |  |  |
| a\_age\_5\_absolutism\_cavalry | army\_cavalry | no | 0.6 | 4 | 0.1 | 0.1 | 0.1 | -0.1 | -0.1 | -0.1 |  |  |
| a\_age\_6\_revolutions\_cavalry | army\_cavalry | no | 1.2 | 4 | 0.1 | 0.1 | 0.1 | -0.1 | -0.1 | -0.1 |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |
| a\_age\_1\_traditions\_auxiliary | army\_auxiliary | no | 0.05 | 0.25 |  |  |  |  |  |  |  |  |
| a\_age\_2\_renaissance\_auxiliary | army\_auxiliary | no | 0.1 | 0.25 |  |  |  |  |  |  |  |  |
| a\_age\_3\_discovery\_auxiliary | army\_auxiliary | no | 0.2 | 0.25 |  |  |  |  |  |  |  |  |
| a\_age\_4\_reformation\_auxiliary | army\_auxiliary | no | 0.3 | 0.25 |  |  |  |  |  |  |  |  |
| a\_age\_5\_absolutism\_auxiliary | army\_auxiliary | no | 0.6 | 0.25 |  |  |  |  |  |  |  |  |
| a\_age\_6\_revolutions\_auxiliary | army\_auxiliary | no | 1.2 | 0.25 |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |
| a\_age\_1\_traditions\_artillery | army\_artillery | no | 0.01 | 2 |  |  |  |  |  |  | 0.1 | 1 |
| a\_age\_2\_renaissance\_artillery | army\_artillery | no | 0.05 | 3 |  |  |  |  |  |  | 0.125 | 3 |
| a\_age\_3\_discovery\_artillery | army\_artillery | no | 0.1 | 4 |  |  |  |  |  |  | 0.15 | 4 |
| a\_age\_4\_reformation\_auxiliary | army\_artillery | no | 0.3 | 5 |  |  |  |  |  |  | 0.2 | 5 |
| a\_age\_5\_absolutism\_artillery | army\_artillery | no | 0.6 | 6 |  |  |  |  |  |  | 0.25 | 7 |
| a\_age\_6\_revolutions\_artillery | army\_artillery | no | 1.2 | 8 |  |  |  |  |  |  | 0.25 | 9 |

# impact = { <topography> / <vegetation> / <climate> }    # Modifies the damage the unit takes when fighting in certain terrain

# combat = { <topography> / <vegetation> / <climate> }    # Modifies the damage the unit deals when fighting in certain terrain

|  |
| --- |
|  |

Standard Units From Each Age

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | category | copy\_from | strength\_damage\_done | morale\_damage\_done | morale\_damage\_taken | combat\_speed | initiative | light | default | buildable | levy | food\_consumption\_per\_strength | build\_time\_modifier | mercenaries\_per\_location | | upgrades\_to | maintenance\_demand | construction\_demand | country\_potential |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | pop\_type | multiply |  |  |  |  |
| Tradition | a\_footmen | army\_infantry | a\_age\_1\_traditions\_infantry | -0.05 |  |  |  |  |  | yes |  |  |  |  | burghers | 0.1 | a\_men\_at\_arms | early\_heavy\_infantry\_maintenance | early\_heavy\_infantry\_construction | government\_type != government\_type:steppe\_horde |
| a\_archers | army\_infantry | a\_age\_1\_traditions\_infantry | -0.1 |  | 0.2 |  | 5 | yes | yes |  |  |  |  | burghers | 0.1 | a\_crossbowmen | archer\_infantry\_maintenance | archer\_infantry\_construction | government\_type != government\_type:steppe\_horde |
| a\_footmen\_levy | army\_infantry | a\_footmen |  |  |  |  |  |  |  | no | yes |  |  |  |  |  |  |  |  |
| a\_horsemen | army\_cavalry | a\_age\_1\_traditions\_cavalry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | nobles | 0.3 | a\_cavalrymen |  |  |  |
| a\_armored\_horsemen | army\_cavalry | a\_age\_1\_traditions\_cavalry |  |  |  |  |  |  |  |  |  |  |  | nobles | 0.3 | a\_heavy\_cavalrymen | heavy\_cavalry\_maintenance | heavy\_cavalry\_construction |  |
| a\_camp\_followers | army\_auxiliary | a\_age\_1\_traditions\_auxiliary |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.001 | a\_supply\_carts |  |  | exists = government\_type government\_type != government\_type:steppe\_horde |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Renaissance | a\_men\_at\_arms | army\_infantry | a\_age\_2\_renaissance\_infantry | -0.1 |  |  | 1 |  |  |  |  |  |  |  |  |  | a\_halberdiers | early\_heavy\_infantry\_maintenance |  |  |
| a\_crossbowmen | army\_infantry | a\_age\_2\_renaissance\_infantry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | burghers | 0.1 | a\_early\_arquebusiers |  | early\_heavy\_infantry\_construction |  |
| a\_handgonners | army\_infantry | a\_age\_2\_renaissance\_infantry |  | 0.1 |  | -0.5 | 5 |  |  |  |  | 0.25 | 0.25 | burghers | 0.1 | a\_early\_arquebusiers | infantry\_maintenance |  |  |
| a\_men\_at\_arms\_levy | army\_infantry | a\_age\_2\_renaissance\_infantry |  |  |  |  |  |  |  | no | yes |  |  | burghers | 0.1 |  |  | infantry\_construction |  |
| a\_cavalrymen | army\_cavalry | a\_age\_2\_renaissance\_cavalry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | nobles | 0.3 | a\_light\_lancers |  |  |  |
| a\_heavy\_cavalrymen | army\_cavalry | a\_age\_2\_renaissance\_cavalry |  |  |  |  |  |  |  |  |  |  |  | nobles | 0.3 | a\_lancers | heavy\_cavalry\_maintenance |  |  |
| a\_houfnice | army\_artillery | a\_age\_2\_renaissance\_artillery |  |  |  |  |  |  |  |  |  |  |  | burghers | 0.5 | a\_falconet |  | heavy\_cavalry\_construction |  |
| a\_supply\_carts | army\_auxiliary | a\_age\_2\_renaissance\_auxiliary |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 | a\_supply\_convoy |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Discovery | a\_halberdiers | army\_infantry | a\_age\_3\_discovery\_infantry |  |  |  |  |  |  |  |  |  |  |  | burghers | 0.1 | a\_halberdiers | early\_heavy\_infantry\_maintenance |  |  |
| a\_early\_arquebusiers | army\_infantry | a\_age\_3\_discovery\_infantry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | burghers | 0.1 | a\_arquebusiers |  | early\_heavy\_infantry\_construction |  |
| a\_matchlock\_levy | army\_infantry | a\_age\_3\_discovery\_infantry |  |  |  |  |  |  |  | no | yes |  |  | burghers | 0.1 |  |  |  |  |
| a\_light\_lancers | army\_cavalry | a\_age\_3\_discovery\_cavalry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | nobles | 0.3 | a\_pistoleers |  |  |  |
| a\_lancers | army\_cavalry | a\_age\_3\_discovery\_cavalry |  |  |  |  |  |  |  |  |  |  |  | nobles | 0.3 | a\_heavy\_lancers | heavy\_cavalry\_maintenance |  |  |
| a\_falconet | army\_artillery | a\_age\_3\_discovery\_artillery |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 | a\_chambered\_cannon |  | heavy\_cavalry\_construction |  |
| a\_supply\_convoy | army\_auxiliary | a\_age\_3\_discovery\_auxiliary |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 | a\_baggage\_train |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Reformation | a\_pikemen | army\_infantry | a\_age\_4\_reformation\_infantry |  |  |  |  |  |  |  |  |  |  |  | burghers | 0.1 | a\_musketeers | pikemen\_maintenance |  |  |
| a\_arquebusiers | army\_infantry | a\_age\_4\_reformation\_infantry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | burghers | 0.1 | a\_hunters |  | pikemen\_construction |  |
| a\_flintlock\_levy | army\_infantry | a\_age\_4\_reformation\_infantry |  |  |  |  |  | yes |  | no | yes |  |  |  |  |  |  |  |  |
| a\_pistoleers | army\_cavalry | a\_age\_4\_reformation\_cavalry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | nobles | 0.3 | a\_hussars |  |  |  |
| a\_heavy\_lancers | army\_cavalry | a\_age\_4\_reformation\_cavalry |  |  |  |  |  |  |  |  |  |  |  | nobles | 0.3 | a\_gallop\_cavalry | heavy\_cavalry\_maintenance |  |  |
| a\_chambered\_cannon | army\_artillery | a\_age\_4\_reformation\_artillery |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 | a\_royal\_mortar |  | heavy\_cavalry\_construction |  |
| a\_baggage\_train | army\_auxiliary | a\_age\_4\_reformation\_auxiliary |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 | a\_wagon\_train |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Absolutism | a\_musketeers | army\_infantry | a\_age\_5\_absolutism\_infantry |  |  |  |  |  |  |  |  |  |  |  | burghers | 0.1 | a\_fusiliers | heavy\_infantry\_maintenance |  |  |
| a\_hunters | army\_infantry | a\_age\_5\_absolutism\_infantry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | burghers | 0.1 | a\_sharpshooters |  | heavy\_infantry\_construction |  |
| a\_militiamen | army\_infantry | a\_age\_5\_absolutism\_infantry |  |  |  |  |  | yes |  | no | yes |  |  |  |  |  |  |  |  |
| a\_hussars | army\_cavalry | a\_age\_5\_absolutism\_cavalry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | nobles | 0.3 | a\_light\_dragoons | |  |  |
| a\_gallop\_cavalry | army\_cavalry | a\_age\_5\_absolutism\_cavalry |  |  |  |  |  |  |  |  |  |  |  | nobles | 0.3 | a\_cuirassiers | heavy\_cavalry\_maintenance |  |  |
| a\_royal\_mortar | army\_artillery | a\_age\_5\_absolutism\_artillery |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 | a\_flying\_battery | |  |  |
| a\_wagon\_train | army\_auxiliary | a\_age\_5\_absolutism\_auxiliary |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 | a\_logistics\_corps | |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Revolutions | a\_fusiliers | army\_infantry | a\_age\_6\_revolutions\_infantry |  |  |  |  |  |  |  |  |  |  |  | burghers | 0.1 |  | heavy\_infantry\_maintenance |  |  |
| a\_sharpshooters | army\_infantry | a\_age\_6\_revolutions\_infantry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | burghers | 0.1 |  |  | heavy\_infantry\_construction |  |
| a\_conscripts | army\_infantry | a\_age\_6\_revolutions\_infantry |  |  |  |  |  | yes |  | no | yes |  |  |  |  |  |  |  |  |
| a\_light\_dragoons | army\_cavalry | a\_age\_6\_revolutions\_cavalry | -0.1 |  | 0.2 |  | 5 | yes |  |  |  |  |  | nobles | 0.3 |  |  |  |  |
| a\_cuirassiers | army\_cavalry | a\_age\_6\_revolutions\_cavalry |  |  |  |  |  |  |  |  |  |  |  | nobles | 0.3 |  | heavy\_cavalry\_maintenance |  |  |
| a\_flying\_battery | army\_artillery | a\_age\_6\_revolutions\_artillery |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 |  |  |  |  |
| a\_logistics\_corps | army\_auxiliary | a\_age\_5\_absolutism\_auxiliary |  |  |  |  |  |  |  |  |  |  |  | peasants | 0.005 |  |  |  |  |

## Sieges

[![](/thumb.php?f=UI_siege.png&width=330)](/File%3AUI_siege.png)

A siege

When an army stops in an enemy location and said location is not protected by its own army, it will begin a siege. Each location has a Garrison number. When the garrison is killed or its morale is gone, the siege will be won by the attackers. If multiple allied armies are present in a siege, the country with the highest number of soldiers will always have the option to take control of the siege if not already.

For a siege to progress, there needs to be at least as many men besieging it as the number of men in the garrison. For a location without fortifications, there needs to be at least 100 men, who will occupy the location in 15 days, but this can be changed by various factors.

The attacker of a siege can always order an assault, which will add siege progress at a fast rate but also cause the army to lose soldiers. An assault cannot be cancelled once ordered. During a siege, up to 3 Breaches may occur, which will reduce the number of soldiers killed in the assault. Hovering over the button to order an assault will show an estimation of whether the assault will be successful or not.

Each siege will last multiple phases. A phase lasts 30 days, but the number can be increased or decreased by various factors. Each phase will roll a die with the value between 1 and 14. The result of each dice roll is decreased by 1 for each Fort Level of the besieged location, increased by 2 for every Breach, and can be increased if the attacker's army has artillery regiments. The maximum dice roll bonus from artillery is initially 5 but can be increased by various factors. If the location is coastal and not blockaded, it also reduces the dice roll by 1. Depending on the dice roll, the following will happen:

| Dice result | Effect | Besieger dice bonus |
| --- | --- | --- |
| 1 | Disease Outbreak |  |
| 2-4 | Status Quo |  |
| 5-11 | Supplies Shortage | 1 |
| 12-13 | Food Shortage | 2 |
| 14-15 | Water Shortage | 3 |
| 16-19 | Defenders Desert | 2 |
| 20 | Surrender | Victory |

Constructions are paused in locations which are under siege.

Artillery bonus appears to work as follows: each artillery regiment's artillery barrage stat is taken as its base stat multiplied by strength ratio, so a houfnice with a base barrage stat of 3.00 and 160 of its 200 max manpower will have a barrage stat of 2.40. Each of these barrage stats has the fort level subtracted from it, then all the barrage stats are added together, and the result divided by 3 is the dice roll bonus from artillery. So the hypothetical 160/200 manpower houfnice siegeing a level 2 fort would only contribute 0.133 to the dice roll bonus while a full-strength houfnice would contribute 0.333, and a houfnice at 133 or less manpower would contribute nothing at all.

## References

1. [↑](#cite_ref-1) `NDefines.NCombat.RIVER_CROSSING_DICE = −1` in [Defines](/Defines "Defines").
2. [↑](#cite_ref-2) `NDefines.NCombat.STRAIT_CROSSING_DICE = −2` in [Defines](/Defines "Defines").

[Return to top](#top)

Mechanics

|  |  |
| --- | --- |
| Realm | [Country](/Country "Country") • [Government](/Government "Government") • [Parliament](/Parliament "Parliament") • [Estate](/Estate "Estate") • [Reforms](/Reforms "Reforms") • [Laws](/Laws "Laws") • [Characters](/Characters "Characters") • [Chivalric order](/Chivalric_order "Chivalric order") • [Missions](/Missions "Missions") |

|  |  |
| --- | --- |
| Economy & Research | [Economy](/Economy "Economy") • [Goods](/Goods "Goods") • [R.G.O.](/R.G.O. "R.G.O.") • [Market](/Market "Market") • [Building](/Building "Building") • [Population](/Population "Population") • [Age](/Age "Age") |

|  |  |
| --- | --- |
| Diplomacy & Warfare | [Diplomacy](/Diplomacy "Diplomacy") • [Subjects](/Subjects "Subjects") • [International organization](/International_organization "International organization") • [Warfare](/Warfare "Warfare") • Combat • [Military](/Military "Military") |

|  |  |
| --- | --- |
| The world | [Location](/Location "Location") • [Culture](/Culture "Culture") • [Religion](/Religion "Religion") • [Language](/Language "Language") • [Exploration](/Exploration "Exploration") • [Situations](/Situations "Situations") • [Disasters](/Disasters "Disasters") • [Diseases](/Diseases "Diseases") |