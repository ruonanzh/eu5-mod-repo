<!-- source: https://eu5.paradoxwikis.com/Socioeconomic_laws revid: 36892 fetched: 2026-09-09 -->
# Socioeconomic laws
This article has been verified for the current [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") (1.3) of the game.
Europa Universalis 5
[Laws](/Laws "Laws")
 [Succession](/Succession_laws "Succession laws")
 [Religious](/Religious_laws "Religious laws")
 [Military](/Military_laws "Military laws")
 [Administrative](/Administrative_laws "Administrative laws")
 Socioeconomic
 [Estate](/Estate_laws "Estate laws")
 [International organization](/International_organization_laws "International organization laws")
|  | **This page is [automatically generated](/Europa_Universalis_5_Wiki%3AAutogeneration "Europa Universalis 5 Wiki:Autogeneration") from the game files. It should not be edited directly.**  Instead, please suggest changes or improvements on the **[talk page](/index.php?title=Talk:Socioeconomic_laws&action=edit&redlink=1 "Talk:Socioeconomic laws (page does not exist)")**. |
## List
### Tribal Migration
Our people do not permanently occupy out lands. Instead, we travel freely, as fate and our people's needs dictate.
Unlocked by
:    [Tribal Migration](/Age_of_Reformation#Tribal_Migration "Age of Reformation")
Potential
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
* country\_type: pop
Allow
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
* country\_type: pop
| Policy | Requirements | Country Modifier | Estate Preferences | Time to implement | On Fully Activated |
| **Frequent Migration** No place can bind us forever, as our spirits are as free as the wind itself. We are entirely nomadic and do not claim any lands as our own. |  | *  **+10.00%** Army Movement Speed *  **−25.00%** Migrate Cost | *  [Nobility](/Estate#Nobility "Estate") |  |  |
| **Seasonal Travel** As the world changes throughout the year, so must we. Our people cycle through different known sites over the year, returning to the same spots each time. We are as birds, and migrate to find better food, shelter, and breeding opportunities when the seasons turn. |  | *  **−50.00%** Migrate Cost | *  [Burghers](/Estate#Burghers "Estate") |  |  |
| **Permanent Settlement** Sometimes, following the storm is not as important as finding shelter from it. The time has come for us to establish more permanent settlements that our people can live in all year, every year. | * capital:   + At least one of:     - owner: root     - has\_owner: False | *  **+0.10%** Stability Decay *  **+100.00%** Migrate Cost | *  [Clergy](/Estate#Clergy "Estate") | 5 years | * change\_country\_type: location |
### Tribal Cultural Identity
As time progresses, so does our understanding of our culture and identity. We no longer have to fear neighboring tribes; we have tamed the wilderness and have become its master. Now it is time to embrace who we are as a people.
Unlocked by
:    [Tribal Cultural Identity](/Age_of_Discovery#Tribal_Cultural_Identity "Age of Discovery"),  [Tribal Cultural Identity](/Age_of_Absolutism#Tribal_Cultural_Identity "Age of Absolutism")
Potential
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
Allow
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
| Policy | Country Modifier | Estate Preferences | Time to implement |
| **Dynastic Lineage** The lineage of our rulers has been divinely blessed. Their royal blood is what confirms them as worthy of leadership, and therefore we must trust their guidance if we wish to find glory and prosperity. | *  +0.10 Monthly Progress to Centralization *  **+10.00%** Crown Power | *  [Crown](/Estate#Crown "Estate") | 20 years |
| **Rule by the Public** To ensure a just government, those who hold power in it must be democratically elected. By choosing our leaders, we choose the fate of our nation. | *  +0.10 Monthly Progress to Communalism *  **−0.025%** Stability Decay | *  [Commoners](/Estate#Commoners "Estate") | 20 years |
| **State of Faith** Allowing mortals to make decisions the fate of our people should not be done without spiritual guidance. Our ruler must be the voice of the gods, and represent their divine judgment in all things. | *  +0.10 Monthly Progress to Traditionalist *  **+1.00** Tolerance of the True Faith | *  [Clergy](/Estate#Clergy "Estate") | 20 years |
| **Tribal Identity** Centralized and formalized states, far from being civilized, are inherently destructive to nature. We must find a different way, and follow the traditional path of balance between the natural and human realms, if we are to truly propser. | *  +0.10 Monthly Progress to Traditional Economy *  **+0.50** Monthly Tribal Cohesion | *  [Commoners](/Estate#Commoners "Estate") *  [Nobility](/Estate#Nobility "Estate") |  |
### Tribal Modernization
The time has come to discard our old ways and embrace a position in the larger world. No longer seen as a mere tribe, we shall officially become a country, one that represents and defends our people and the way we live.
Unlocked by
:    [Tribal Modernization](/Age_of_Reformation#Tribal_Modernization "Age of Reformation"),  [Tribal Modernization](/Age_of_Revolutions#Tribal_Modernization "Age of Revolutions")
Potential
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
Allow
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
* Not:
  + has\_policy: tribal\_identity\_policy
* country\_type: location
* gold ≥ 100
| Policy | Requirements | Country Modifier | Estate Preferences | Time to implement | On Fully Activated |
| **Modernize into a Monarchy** The lineage of our rulers has been divinely blessed. Their royal blood is what confirms them as worthy of leadership, and therefore we must trust their guidance if we wish to find glory and prosperity. | * has\_policy: dynastic\_lineage\_policy | *  +0.20 Monthly Progress to Aristocracy *  **−1.00** Monthly Tribal Cohesion | *  [Nobility](/Estate#Nobility "Estate") | 20 years | * add\_government\_power: government\_power\_extreme\_bonus * add\_gold: -100 * change\_government\_type: government\_type:monarchy |
| **Modernize into a Republic** To ensure a just government, those who hold power in it must be democratically elected. By choosing our leaders, we choose the fate of our nation. | * has\_policy: rule\_by\_the\_public\_policy | *  +0.20 Monthly Progress to Plutocracy *  **−1.00** Monthly Tribal Cohesion | *  [Burghers](/Estate#Burghers "Estate") | 20 years | * add\_government\_power: government\_power\_extreme\_bonus * add\_gold: -100 * change\_government\_type: government\_type:republic |
| **Modernize into a Theocracy** Allowing mortals to make decisions the fate of our people should not be done without spiritual guidance. Our ruler must be the voice of the gods, and represent their divine judgment in all things. | * has\_policy: state\_of\_faith\_policy | *  +0.20 Monthly Progress to Spiritualist *  **−1.00** Monthly Tribal Cohesion | *  [Clergy](/Estate#Clergy "Estate") | 20 years | * add\_government\_power: government\_power\_extreme\_bonus * add\_gold: -100 * change\_government\_type: government\_type:theocracy |
### Education of the Elites
The education of our elites is of vital importance. By providing our upper-class citizens with ample access to appropriate works of art, we will further our cultural goals, both at home and abroad, through the creation of legendary works and the amplification of our splendor!
Unlocked by
:    [University](/Age_of_Renaissance#University "Age of Renaissance")
Allow
* total\_effective\_building\_levels:university > 0
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Open Institutions** Education must be freely accessible to all those who seek it. We shall permit unrestrained access to the wisdom held within our institutions of learning, and throw the doors open wide to receive our people, that they may more readily develop the innovation and intellectual sophistication that will set us apart from other states. | * modifier:block\_forums\_of\_thought: False * At least one of:   + estate\_power(estate\_type:crown\_estate) ≥ 0.6   + estate\_power(estate\_type:clergy\_estate) ≤ 0.25 | *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  +0.025 Monthly Progress to Innovative *  **+20.00%** Institution Growth | *  [Commoners](/Estate#Commoners "Estate") *  [Burghers](/Estate#Burghers "Estate") |
| **Mixed Institutions** A balanced approach may be best if we are to keep our heads of faith and general populace satisfied while also providing valuable knowledge and access to education. Let us find a reasonable middle ground between the theological and secular schools of thought. |  | *  **+1** Possible Number of Artists *  +0.025 Monthly Progress to Innovative *  **+5.00%** Max Literacy for Burghers *  **+5.00%** Max Literacy for Nobles | *  [Burghers](/Estate#Burghers "Estate") |
| **Theological Institutions** The national identity of our people is inextricably tied to our faith and the headship of our clerical leaders. In order to better solidify the role of religion in our state, we should align our educational institutions with our religious ones, and instruct our people accordingly. | * Not:   + government\_type: government\_type:theocracy | *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  +0.025 Monthly Progress to Spiritualist *  **+10.00%** Max Literacy for Clergy | *  [Clergy](/Estate#Clergy "Estate") |
| **Education of the Missionaries** Heathens and heresy are the factors that most strenuously test our beliefs. They seduce otherwise pious people away from the true faith with poisonous thoughts, drawing them away from the light to be devoured by darkness. Our missionaries must be learned and have unshakeable belief if they are to counter this corrosive evil. | * government\_type: government\_type:theocracy | *  **+0.05** Pop Conversion Speed *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  +0.025 Monthly Progress to Spiritualist *  **+15.00%** Max Literacy for Clergy | *  [Clergy](/Estate#Clergy "Estate") |
| **Education of the Theocrat** The fate of our nation twists in the hands of the divine, who hold dominion over all mundane matters. But it is the sacred duty of our ruler to interpret signs from the heavens, and communicate them to our people, so that we remain always favored above all other nations. To avoid any dangerous misinterpretations, the state must focus its efforts on thoroughly educating future rulers. | * government\_type: government\_type:theocracy | *  **+10.00%** Crown Power | *  [Crown](/Estate#Crown "Estate") |
| **Education of the Court** Our ruler might represent the will of our government, but all humans are prone to human error. With the support of a highly educated court behind them, our ruler is less likely to commit a grave mistake in judgment. |  | *  **−15.00%** Replace Cabinet Member Cost *  **+5.00%** Max Literacy for Nobles *  **+5.00%** Efficiency of Our Cabinet *  +0.05 Monthly Progress to Aristocracy | *  [Nobility](/Estate#Nobility "Estate") |
| **Education of the People** Knowledge and education are two of the most enriching aspects in anyone's life, and therefore, the state must ensure our people have access to both. We are all born with free will and free thought, and it is the state's duty to preserve these natural rights, which are held by all our people. |  | *  **−5.00%** Noble Estate Satisfaction Equilibrium *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  **+5.00%** Max Literacy for Burghers *  **+5.00%** Max Literacy for Peasants *  **+5.00%** Max Literacy for Soldiers *  **+5.00%** Max Literacy for Laborers *  +0.10 Monthly Progress to Humanist *  +0.05 Monthly Progress to Innovative | *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") |
| **Confucian Academies** Private institutions combining the functions of a school with those of a religious shrine, these academies educate elite students in classical texts and Confucian philosophy while preparing them for civil service examinations. While officially an apparatus of the state, these institutions are given extensive authority and special privileges that set them apart from other government entities. | * any\_international\_organizations\_member\_of:   + international\_organization\_type: international\_organization\_type:sect   + international\_organization\_has\_policy: [Confucianism](/Law#Main_Philosophy "Law") | *  **+10.00%** Efficiency of Our Cabinet *  **+5.00%** Max Literacy for Nobles | *  [Clergy](/Estate#Clergy "Estate") *  [Nobility](/Estate#Nobility "Estate") |
| **Compulsory Education for Nobility** It is mandatory for our Nobility to undergo thorough schooling. With the goal of improving our government functions, every member of the elite classes shall be rigorously educated in the study of law, art, and Latin. | * culture: [Scots](/Culture#Scots "Culture") * has\_unlocked\_policy\_trigger:   + type: scottish\_noble\_education | *  **+15.00%** Max Literacy for Nobles *  **+10.00%** Legislative Efficiency *  **+10.00%** Skill of New Artists | *  [Nobility](/Estate#Nobility "Estate") |
### Education of the Masses
The education of our population is of vital importance. By providing our people with ample access to the appropriate materials, regardless of their place in the social hierarchy, we will create a more educated and artistically fluent population, and further our governmental goals both at home and abroad.
Potential
* estate\_power(estate\_type:peasants\_estate) > 0
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Uneducated Masses** What use are reading and writing to those whose sole purpose is to tend crops? The masses are best left to their fields and flocks, innocent of the many dangerous ideas hidden between book covers. |  | *  **+5.00%** Noble Estate Satisfaction Equilibrium *  +0.05 Monthly Progress to Serfdom *  +0.10 Monthly Progress to Traditionalist *  **+10.00%** Max Literacy for Nobles *  **+10.00%** Max Literacy for Clergy | *  [Nobility](/Estate#Nobility "Estate") |
| **Religious Teachings** The millennia-old, tried-and-true method of letting our religious institutions take responsibility for educating our people, while the state focuses on more important tasks. |  | *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  **+10.00%** Max Literacy for Nobles *  **+10.00%** Max Literacy for Clergy *  **+5.00%** Max Literacy for Burghers *  **+5.00%** Max Literacy for Laborers *  **+5.00%** Max Literacy for Soldiers *  **+5.00%** Max Literacy for Peasants *  +0.10 Monthly Progress to Spiritualist | *  [Clergy](/Estate#Clergy "Estate") |
| **Devout Education** A pious education, focusing on ensuring that students are well-versed in the workings of the divine. Theology can be more useful than mathematics, after all... albeit perhaps not in every situation. | * At least one of:   + government\_type: government\_type:theocracy   + modifier:allow\_theocratic\_education: True | *  **+10.00%** Clergy Estate Satisfaction Equilibrium *  +0.025 Monthly Progress to Spiritualist *  **+0.02** Monthly Religious Influence *  **+10.00%** Max Literacy for Nobles *  **+10.00%** Max Literacy for Clergy *  **+5.00%** Max Literacy for Burghers *  **+5.00%** Max Literacy for Peasants *  **+5.00%** Max Literacy for Soldiers *  **+5.00%** Max Literacy for Laborers *  +0.10 Monthly Progress to Traditionalist | *  [Clergy](/Estate#Clergy "Estate") |
| **Individual Apprenticeships** The sacred process by which a skilled mentor passes down a lifetime of knowledge to a protégé. While many of these mentorship-apprentice arrangements are formally arranged, eager learners can also be taught by their families, established elder members of society, or even their guild quartermasters. | * modifier:allow\_apprenticeships\_education: True | *  **+10.00%** Max Literacy for Nobles *  **+10.00%** Max Literacy for Clergy *  **+10.00%** Max Literacy for Burghers *  **+15.00%** Trade Advantage | *  [Burghers](/Estate#Burghers "Estate") |
| **Oral Tradition** Wisdom is passed down to younger generations through methods such as storytelling or the performing arts. Venerable members of a community tell and re-tell ancient tales and the lessons learned from them, which young listeners will memorize and repeat in the future. In this way, the history of our people will be preserved from generation to generation by those who lived it. | * At least one of:   + Not:     - has\_advance: written\_alphabet   + government\_type: government\_type:steppe\_horde   + government\_type: government\_type:tribe | *  +0.025 Monthly Progress to Spiritualist *  **+0.01** Monthly Tribal Cohesion *  **+0.15** Monthly Religious Influence *  +0.10 Monthly Progress to Communalism *  **+25.00%** Change Liturgical Language Cost | *  [Clergy](/Estate#Clergy "Estate") |
| **Presbyterian Education** Our Church will be responsible for educating the people of our nation. These efforts will be financially supported through tax revenue collected from upon the landowning elite. | * culture: [Scots](/Culture#Scots "Culture") * has\_unlocked\_policy\_trigger:   + type: scottish\_presbyterian\_education | *  **+10.00%** Maximum Tax for Noble Estate *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  **+5.00%** Max Literacy for Nobles *  **+5.00%** Max Literacy for Clergy *  **+5.00%** Max Literacy for Burghers *  **+5.00%** Max Literacy for Peasants *  **+5.00%** Max Literacy for Soldiers *  **+5.00%** Max Literacy for Laborers *  +0.10 Monthly Progress to Innovative | *  [Commoners](/Estate#Commoners "Estate") *  [Clergy](/Estate#Clergy "Estate") |
| **Personal Religious Education** Why centralize education in formal institutions when the printing-press has allowed every household to become its own school? We will let our people educate themselves, giving them the responsibility of deciding what knowledge they find worthy of acquiring. | * has\_advance: written\_alphabet * has\_advance: printing\_press\_advance * At least one of:   + has\_estate\_privilege:  [Sponsor Printing of Religious Texts](/Estate_privilege#Sponsor_Printing_of_Religious_Texts "Estate privilege")   + custom\_description:     - text: is\_protestant\_text     - religion:        * has\_tag: protestant | *  +0.025 Monthly Progress to Individualism *  **+5.00%** Max Literacy for Nobles *  **+5.00%** Max Literacy for Clergy *  **+5.00%** Max Literacy for Burghers *  **+5.00%** Max Literacy for Peasants *  **+5.00%** Max Literacy for Soldiers *  **+5.00%** Max Literacy for Laborers *  **+2.00%** Max Literacy for Slaves | *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") |
| **Epic Tradition** Young people learn best when the knowledge is presented in the form of gripping, memorable tales, and they are both captivating and easy to understand. Much can be learned from the fantastic stories of our ancestors, and we shall make sure our people understand these lessons well. | * has\_advance: written\_alphabet * All of:   + At least one of:     - All of:       * has\_advance: printing\_press\_advance       * At least one of:         + has\_estate\_privilege:  [Religious Literacy Rights](/Estate_privilege#Religious_Literacy_Rights "Estate privilege")         + has\_estate\_privilege:  [Embellish Great Works of Faith](/Estate_privilege#Embellish_Great_Works_of_Faith "Estate privilege")     - government\_type: government\_type:tribe     - government\_type: government\_type:steppe\_horde   + religion:     - has\_sects: True | *  **+15.00%** Skill of New Artists *  **−50.00%** Cost of Increase Literacy Action *  **+10.00%** Invite Artist Cost | *  [Burghers](/Estate#Burghers "Estate") |
| **Epic Tradition** Young people learn best when the knowledge is presented in the form of gripping, memorable tales, and they are both captivating and easy to understand. Much can be learned from the fantastic stories of our ancestors, and we shall make sure our people understand these lessons well. | * has\_advance: written\_alphabet * All of:   + At least one of:     - All of:       * has\_advance: printing\_press\_advance       * At least one of:         + has\_estate\_privilege:  [Religious Literacy Rights](/Estate_privilege#Religious_Literacy_Rights "Estate privilege")         + has\_estate\_privilege:  [Embellish Great Works of Faith](/Estate_privilege#Embellish_Great_Works_of_Faith "Estate privilege")     - government\_type: government\_type:tribe     - government\_type: government\_type:steppe\_horde   + religion:     - has\_sects: False | *  **+15.00%** Skill of New Artists *  **+10.00%** Invite Artist Cost | *  [Burghers](/Estate#Burghers "Estate") |
| **Secular Education** Houses of worship are the home of the divine, not the classroom. Let us keep secular and religious instruction separate, as the mundane and divine realms are. | * Not:   + government\_type: government\_type:theocracy * has\_embraced\_institution: institution:enlightenment | *  **−25.00%** Clergy Estate Satisfaction Equilibrium *  **+25.00%** Institution Growth *  **+10.00%** Max Literacy | *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") |
| **Vedic Education** An education method that teaches the masses about Hinduism without seperating anyone into castes. | * has\_unlocked\_policy\_trigger:   + type: vedic\_education * religion:  [Hinduism](/Religion#Hinduism "Religion") | *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  **−5.00%** Noble Estate Satisfaction Equilibrium *  **+5.00%** Max Literacy *  +0.05 Monthly Progress to Spiritualist |  |
### Slavery Laws
The influx of workers and cheap labor from external sources has long been a cornerstone of our economy, both at home and abroad. The matter of embracing or banning is a clear reflection of what place the lower strata, and slaves in particular, occupy in our society.
Unlocked by
:    [Slave Trade Act](/Age_of_Revolutions#Slave_Trade_Act "Age of Revolutions")
| Policy | Country Modifier | Estate Preferences |
| **Slave Trade Allowed** Slave trade and slavery are legally allowed throughout our nation. |  | *  [Burghers](/Estate#Burghers "Estate") |
| **Slave Trade Banned** Slave trade and slavery are henceforth prohibited throughout our nation. | *  Slavery Blocked: **yes** *  Ban Exports of Slaves: **yes** *  Ban Imports of Slaves: **yes** | *  [Clergy](/Estate#Clergy "Estate") *  [Commoners](/Estate#Commoners "Estate") |
### Colonial Policy
This establishes the policy that our country will follow for colonial affairs.
Unlocked by
:    [Colonial Policy](/Age_of_Discovery#Colonial_Policy "Age of Discovery")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Settled Colonies** We have adopted colonial policies that encourage founding settlements in newly discovered lands, where settlers from the heart of our nation can exploit any [Raw Goods](/Raw_Goods "Raw Goods") and continue to expand inland. |  | *  **+100.00%** Monthly Colonial Migration *  **+20.00%** Colonial Maintenance Efficiency *  +0.05 Monthly Progress to Outward | *  [Commoners](/Estate#Commoners "Estate") |
| **Trade Colonies** We have adopted colonial policies that encourage the foundation of trading posts and entrepôts in strategic locations, which are aimed at exchanging different goods and opening new [Markets](/index.php?title=Markets&action=edit&redlink=1 "Markets (page does not exist)") for the benefit of our economy. |  | *  **+50.00%** Foreign Buildings Construction Efficiency *  **+20.00%** Colonial Range *  +0.05 Monthly Progress to Individualism | *  [Burghers](/Estate#Burghers "Estate") |
| **Encomienda System** We will appoint a regional governor in our name who will be in charge of collecting tribute from the native population of the area. This organization allows us to establish colonies efficiently and with smaller costs than normal, although it is certainly not helping our relationships with the locals. | * culture: [Castilian](/Culture#Castilian "Culture") * has\_unlocked\_policy\_trigger:   + type: encomienda\_system\_policy | *  +0.20 Monthly Progress to Serfdom *  +0.20 Monthly Progress to Traditional Economy *  **−20.00%** Create Colonial Charter Cost | *  [Nobility](/Estate#Nobility "Estate") |
| **Sepúlveda** We have adopted colonial policies in alignment with Sepúlveda's reasoning that native peoples are naturally disposed to be slaves, and that slavery is also the best way for their Christianity overlords to convert them to the true faith. As a result, the landowners in our colonies face no retribution for the way they treat the local population and can ultimately extract greater profits from their labor. | * has\_unlocked\_policy\_trigger:   + type: valladolid\_sepulveda | *  **+20.00%** Pop Conversion Speed % *  **+50.00%** Monthly Colonial Migration | *  [Nobility](/Estate#Nobility "Estate") |
| **Las Casas** We have adopted colonial policies in alignment with Las Casas's reasoning that native peoples are not barbarians, and have free will. They should therefore convert to Christianity out of their own free will and cannot be enslaved without consequences. | * has\_unlocked\_policy\_trigger:   + type: valladolid\_las\_casas | *  **−20.00%** Pop Conversion Speed % *  **+25.00%** Monthly Colonial Migration *  **+1.00** Tolerance of Heathen Beliefs | *  [Clergy](/Estate#Clergy "Estate") |
| **Portuguese Captaincies** We have adopted colonial policies that stipulate officials who represent our empire will only earn a token salary — in exchange for a generous portion of our colonial profits. | * has\_advance: por\_the\_bandeirantes  * culture: [Portuguese](/Culture#Portuguese "Culture") | *  **+50.00%** Monthly Colonial Migration *  **−20.00%** Income from Colonial Subjects *  **+40.00%** Colonial Maintenance Efficiency *  +0.05 Monthly Progress to Aristocracy | *  [Nobility](/Estate#Nobility "Estate") *  [Burghers](/Estate#Burghers "Estate") |
| **Portuguese Governorate General** Our colonies will be governed by one central office, which all regional captaincies will report to. This secures our centralized control over our colonies. | * culture: [Portuguese](/Culture#Portuguese "Culture") * has\_unlocked\_policy\_trigger:   + type: portuguese\_governorate\_general | *  +0.05 Monthly Progress to Centralization *  **+50.00%** Income from Colonial Subjects *  **+50.00%** Monthly Colonial Migration | *  [Crown](/Estate#Crown "Estate") |
### Native Policy
This establishes the policy that our country will follow regarding the native people inhabiting our colonies.
Unlocked by
:    [Natives Policy](/Age_of_Discovery#Natives_Policy "Age of Discovery")
| Policy | Country Modifier | Estate Preferences |
| **Trade** Our colonial authorities will encourage trade with the native population to start a regular flow of profitable goods into our markets. | *  **+25.00** Society of Pops Opinions *  **+40.00%** Colonial Maintenance Efficiency *  +0.05 Monthly Progress to Free Trade | *  [Burghers](/Estate#Burghers "Estate") |
| **Subjugation** Our colonial authorities will attempt to subjugate the native population into a new, profitable source of labor for our country. | *  **−33.00** Society of Pops Opinions *  Native Subjugation Casus Belli: **yes** *  Enslave Tribesmen: **yes** *  +0.05 Monthly Progress to Serfdom | *  [Nobility](/Estate#Nobility "Estate") *  [Commoners](/Estate#Commoners "Estate") |
| **Integration** Our colonial authorities will try to integrate the native population with our own, to make them more self-sufficient and promote social stability. | *  **−20.00** Society of Pops Opinions *  **+50.00%** Monthly Religious Conversion from Buildings *  Promote Tribesmen: **yes** *  +0.05 Monthly Progress to Humanist | *  [Clergy](/Estate#Clergy "Estate") |
### Economic Policy
A nation's economic policy sets out specific economic objectives and means to achieve them, and makes decisions and creates regulations for taxation, spending, currency, trade, and more.
Unlocked by
:    [Economic Policy](/Age_of_Absolutism#Economic_Policy "Age of Absolutism")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Lockean Proviso** This proviso limits property appropriation by requiring that when someone claims unowned resources, there must equally valuable resources available for others. The government moderates this balance and ensures that private property acquisition does not deprive others of their equal opportunity to gain wealth. |  | *  **+5.00%** Raw Materials Output *  **+0.0020** Monthly Development |  |
| **War Economy** The economic security of the state is based on our ability to wage and win wars. Manufactories in our state should have no other purpose than fueling our military ambitions. | * modifier:ban\_exports\_of\_firearms: False * modifier:ban\_exports\_of\_cannons: False * modifier:ban\_exports\_of\_weaponry: False | *  **+10.00%** Firearms Output *  **+10.00%** Cannon Output *  **+10.00%** Weaponry Output *  **+10.00%** Army Maintenance Efficiency | *  [Crown](/Estate#Crown "Estate") |
| **Embrace the Economic Theory** Economics play a vital role within the apparatus of the state. The complex systems of trade, finance, and luxury must be handled by our intellectuals and scholars to best serve the needs of the government. |  | *  **−1.00%** Bank Interest *  **−0.05%** Monthly Inflation | *  [Burghers](/Estate#Burghers "Estate") |
| **Free Trade** Merchants from all over the world should be able to trade within our borders. Abandoning the narrowness of mercantilism, the state will now gain easier access to foreign goods — and ducats. |  | *  **+10.00%** Trade Advantage *  +0.10 Monthly Progress to Free Trade | *  [Burghers](/Estate#Burghers "Estate") |
| **Royal Charters** Royal charters are allowances granted by the Crown to individuals or trade companies that bestow them with unique rights and powers. These charters are an excellent way for us to support ventures — and exploit opportunities — abroad. |  | *  **+10.00%** Trade Maritime Advantage *  **+10.00%** Navy Maintenance Efficiency *  **+5.00%** Export Impact on Demand | *  [Nobility](/Estate#Nobility "Estate") |
| **Cameralism** To strengthen our economic position and attract immigrants, we will rely on a bureaucratic system, designed to administrate our efforts in great detail. These chambers will organize everything from the construction of new manufactories to the distribution of new settlers arriving in our territory. | * culture:   + has\_culture\_group: German * has\_advance: manufactories\_advance | *  +0.10 Monthly Progress to Land *  +0.10 Monthly Progress to Free Subjects *  **+15.00%** Legislative Efficiency *  **+10.00%** Pop Migration Speed | *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") |
| **Black Market Consortium** The pirates that run amok in the republic cannot be trusted to bathe themselves, let alone to govern a nation whose future hands on the edge of a cutlass. A Consortium formed of the most influential black market merchants shall be established as its true governors. Profit must come before liberty. | * Has the  [Pirate Brethren](/Government_reform#Pirate_Brethren "Government reform") Government Reform | *  Allow Black Market Buildings: **yes** *  **+2.50%** Import Efficiency | *  [Burghers](/Estate#Burghers "Estate") |
### Cultural Traditions
Ancient tradition is the foundation of many cultures and civilizations. While progress is what will drive us to greatness, our traditions will always serve us as the reminder of our origins, and as a source for the strength and unity of our people.
Unlocked by
:    [Cultural Traditions](/Age_of_Traditions#Cultural_Traditions "Age of Traditions")
| Policy | Requirements | Country Modifier | Estate Preferences | Time to implement |
| **Martial Society** Martial values have always been important in our society, but as we expand our borders, the need for militarization becomes ever more apparent. We must continue this trend, and build a strong nation with military might at its core. |  | *  **+0.05** Monthly Army Tradition *  +0.10 Monthly Progress to Belligerent | *  [Nobility](/Estate#Nobility "Estate") |  |
| **Civil Society** A strong nation requires more than military might — it needs a dynamic civil society where artisans, traders, clerics, and institutions of all kinds can flourish, creating prosperous communities that generate wealth, maintain social order, and contribute to the development of a sophisticated state. |  | *  **+2.50%** Maximum Tax for Peasants Estate *  +0.10 Monthly Progress to Conciliatory | *  [Burghers](/Estate#Burghers "Estate") |  |
| **Maritime Society** Our maritime traditions form the very fabric of our society. United in the thrill of taming the sea and venturing into foreign ports, our people have built a name for themselves as masters of naval affairs. | * At least one of:   + Is or was  [Hansa](/index.php?title=Hansa&action=edit&redlink=1 "Hansa (page does not exist)")   + All of:     - country\_type: building     - At least one of:       * Has the  [Hanseatic Merchant Federation](/Government_reform#Hanseatic_Merchant_Federation "Government reform") Government Reform       * Has the  [Diarchy Republic](/Government_reform#Diarchy_Republic "Government reform") Government Reform       * Has the  [Merchant Republic](/Government_reform#Merchant_Republic "Government reform") Government Reform       * Has the  [Signoria of Venice](/Government_reform#Signoria_of_Venice "Government reform") Government Reform       * Has the  [Council of Forty](/Government_reform#Council_of_Forty "Government reform") Government Reform | *  **−0.10%** Navy Tradition Decay *  +0.05 Monthly Progress to Naval | *  [Burghers](/Estate#Burghers "Estate") |  |
| **Prussian Virtues** The virtues of Pietism — diligence, sincerity, and a sense of duty above all — are the core values of our society. | * At least one of:   + Is or was  [Prussia](/Prussia "Prussia")   + Is or was  [Brandenburg](/Brandenburg "Brandenburg") * has\_unlocked\_policy\_trigger:   + type: pietism\_society | *  +0.10 Monthly Progress to Humanist *  **−0.025%** Stability Decay *  **+0.20%** Monthly Control | *  [Clergy](/Estate#Clergy "Estate") |  |
| **Sarmatism** Our society originated with the ancient Sarmatians. However, Sarmatism is not just a theory of origin, but a cultural and political phenomenon that promotes the ideals of Aristocracy and the Golden Liberty. | * has\_unlocked\_policy\_trigger:   + type: plc\_sarmatism |  | *  [Nobility](/Estate#Nobility "Estate") | 5 years |
### Foreign Cultural Law
As our state grows in size, so does the complexity of our social structures. Cultural unity within our state is no longer a given, and we now require policies to establish and maintain internal peace.
Unlocked by
:    [Foreign Cultural Law](/Age_of_Discovery#Foreign_Cultural_Law "Age of Discovery")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Allow Foreign Rituals** Culture is similar in many ways to religion, in that it dictates social values and traditions and is influenced by the environment in which it develops. Accepting foreigners in our population for who they are, and allowing them to live their lifestyles undisturbed, will ensure a peaceful coexistence. |  | *  **+1.00** Cultures Capacity *  **−25.00%** Accepted Culture Maintenance Cost | *  [Commoners](/Estate#Commoners "Estate") |
| **Integrate Foreign Traditions** Although foreign ideas can be alien to us, we should nevertheless stay abreast of interesting ideas and innovations in these foreign cultures, and adopt those that would serve us and our people. This will ease assimilation of foreigners into our society while increasing our own cultural influence. |  | *  **+10.00%** Pop Assimilation Speed *  **+5.00%** Cultural Influence % | *  [Burghers](/Estate#Burghers "Estate") |
| **Blood Tax of Foreigners** The cultural aspects of our minority population are of little concern to us. As long as they provide soldiers for our military efforts when required, these foreigners are free to practice their traditions. |  | *  **+5.00%** Maximum Tax for Peasants Estate *  **+25.00%** Non-Culture Levy Size *  **+25.00%** Accepted Culture Maintenance Cost | *  [Nobility](/Estate#Nobility "Estate") |
| **Agrarian Constitution** This legal framework seeks to maximize the economic exploitation and governance of territories we have conquered. The subjugated population is legally obliged to undergo reorganization, resulting in the establishment of rural settlements. This system is aimed at integrating the locals into our administration, converting them at a steady pace and expanding our influence. | *  [Teutons](/Teutons "Teutons") exists * this:  [Teutons](/Teutons "Teutons") | *  **+1.00%** Estates Satisfaction Equilibrium *  **+10.00%** Proximity Efficiency *  **+10.00%** Pop Assimilation Speed | *  [Nobility](/Estate#Nobility "Estate") |
| **Promote Chinese Traditions** Despite our aptitude towards culture and preserving our ways, there is much benefit for us should we choose to study the ways of our Chinese neighbors. | * At least one of:   + is\_subject\_of: ") [Yuán(CHI)](/Yu%C3%A1n%28CHI%29 "Yuán(CHI)")   + capital:     - sub\_continent: sub\_continent:east\_asia   + capital:     - sub\_continent: sub\_continent:south\_east\_asia * Neither of:   + tag: CHI   + culture:     - has\_culture\_group: Chinese | *  +0.10 Monthly Progress to Sinicized *  **−10.00%** Cultural Tradition % *  **−2.50%** Estates Satisfaction Equilibrium | *  [Crown](/Estate#Crown "Estate") |
| **Limit Chinese Traditions** As we strive to preserve and weave our traditions into the annals of history, we must stay vigilant lest we become just another satellite state to a greater power. | * At least one of:   + is\_subject\_of: ") [Yuán(CHI)](/Yu%C3%A1n%28CHI%29 "Yuán(CHI)")   + capital:     - sub\_continent: sub\_continent:east\_asia   + capital:     - sub\_continent: sub\_continent:south\_east\_asia * Not:   + culture:     - has\_culture\_group: Chinese * Not:   + tag: CHI | *  +0.10 Monthly Progress to Unsinicized *  **+5.00%** Cultural Influence % *  **+0.03** Monthly Legitimacy *  **+0.02** Monthly Republican Tradition *  **+0.03** Monthly Devotion *  **+0.03** Monthly Tribal Cohesion | *  [Nobility](/Estate#Nobility "Estate") |
### Coinage Law
This law determines the resources our country will use to mint its currency. The most common coins are made of gold, silver, and copper, with different mixtures of each material and also different monetary values. However, other exchange systems exist throughout the world that do not depend on this type of currency, but rather on other materials, such as livestock, cloth, shells, cacao, etc.
Unlocked by
:    [Taxation](/Age_of_Traditions#Taxation "Age of Traditions")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Gold and Silver Coins** The metals selected for the coinage of our currency are gold and silver, for two different sets of coins. |  | *  Gold Used for Coins: **yes** *  Silver Used for Coins: **yes** *  **+3.00%** Minting Threshold *  **+10.00%** Income from Minting | *  [Crown](/Estate#Crown "Estate") |
| **Gold Coins Only** We only use gold as the metal selected for the coinage of our currency. |  | *  Gold Used for Coins: **yes** *  **+10.00%** Gold Impacts Inflation *  **−100.00%** Silver Impacts Inflation *  **+1.00%** Minting Threshold *  **+10.00%** Income from Minting | *  [Crown](/Estate#Crown "Estate") |
| **Silver Coins Only** We only use silver as the metal selected for the coinage of our currency. |  | *  Silver Used for Coins: **yes** *  **+10.00%** Silver Impacts Inflation *  **−100.00%** Gold Impacts Inflation *  **+1.00%** Minting Threshold *  **+10.00%** Income from Minting | *  [Crown](/Estate#Crown "Estate") |
| **Swedish Copper Coins** The abundance of copper in Sweden, primarily from the Stora Kopparberget mine in Falun, has prompted the country to use it as the main metal for minting a new national currency, the *daler*. This is issued as a large money plate, called *plåtmynt*, which can weigh up to 20 kilograms. Some argue that this might not be very practical and that the volume of money in circulation could exceed copper reserves, but they seem narrow-minded. | **Unlocked by:**  *  [Swedish Copper Coins](/Age_of_Reformation#Swedish_Copper_Coins "Age of Reformation") | *  Copper Used for Coins: **yes** *  **+10.00%** Copper Impacts Inflation *  **−100.00%** Gold Impacts Inflation *  **−100.00%** Silver Impacts Inflation *  **−2.50%** Minting Threshold *  **+20.00%** Income from Minting | *  [Crown](/Estate#Crown "Estate") |
| **Rheinischer Münzverein** In the sprawling patchwork of our great empire, cooperation and collaboration between neighboring groups is vital to the health of our economy. We shall join the customs union of the Rhine and adopt their *gulden* coins to make business transactions less complicated for our merchants, and streamline our international diplomacy. | **Unlocked by:**  *  [Rheinischer Münzverein](/Age_of_Renaissance#Rheinischer_Münzverein "Age of Renaissance") | *  Gold Used for Coins: **yes** *  **+10.00%** Gold Impacts Inflation *  **−100.00%** Silver Impacts Inflation *  **+10.00%** Trade Capacity *  **+0.05** Monthly Diplomats | *  [Clergy](/Estate#Clergy "Estate") *  [Burghers](/Estate#Burghers "Estate") |
| **Wendischer Münzverein** A newly founded organization between cities with a strong Hanseatic presence, the Wendish Coinage Treaty will provide us with a strong basis to facilitate trade and commerce in our lands. | **Unlocked by:**  *  [Wendischer Münzverein](/Age_of_Traditions#Wendischer_Münzverein "Age of Traditions") | *  Gold Used for Coins: **yes** *  Silver Used for Coins: **yes** *  **+1.00%** Minting Threshold *  **−1.00%** Bank Interest | *  [Burghers](/Estate#Burghers "Estate") |
| **Bullion Coins** The metals selected for the coinage of our currency are silver and copper, using different mixtures. |  | *  Silver Used for Coins: **yes** *  Copper Used for Coins: **yes** *  **−100.00%** Gold Impacts Inflation *  **+2.00%** Minting Threshold *  **+10.00%** Income from Minting | *  [Crown](/Estate#Crown "Estate") |
| **Barter Exchange** Different goods and materials, such as livestock, cloth, shells, cacao, etc., may be used as a common currency for trade. | * capital.market:   + goods\_supply\_in\_market(goods:goods\_gold) ≤ 0   + goods\_supply\_in\_market(goods:silver) ≤ 0   + goods\_supply\_in\_market(goods:copper) ≤ 0 | *  **−100.00%** Gold Impacts Inflation *  **−100.00%** Silver Impacts Inflation *  **+1.00%** Minting Threshold *  **+1.00%** Income from Minting | *  [Crown](/Estate#Crown "Estate") |
| **Stavraton Coins** Derived from a mixture of pure silver and some copper, the Stavraton is meant to replace the defunct *hyperpyron* in an attempt to revive the economy and modernize exchange rates. | * has\_unlocked\_policy\_trigger:   + type: stavraton\_coin\_policy | *  Silver Used for Coins: **yes** *  Copper Used for Coins: **yes** *  **+3.00%** Minting Threshold *  **+10.00%** Income from Minting *  +0.10 Monthly Progress to Capital Economy | *  [Crown](/Estate#Crown "Estate") *  [Burghers](/Estate#Burghers "Estate") |
### Precious Metal Distribution
[ShowGoodsName('goods\_gold')
Potential
* At least one of:
  + produced\_in\_country:goods\_gold > 0
  + produced\_in\_country:silver > 0
  + has\_law: precious\_metal\_distribution\_law
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Export Ban** We will enforce strict prohibition on the export of our precious Gold and Silver reserves to foreign lands. This preserves our wealth for domestic use, shielding our treasures from the greedy eyes of other nations. While this measure may safeguard our riches, it comes at the cost of international trade opportunities. A solemn decision for those who prioritize the sanctity of our vaults over global commerce... | * Not:   + is\_subject\_type: colonial\_nation | *  Ban Exports of Gold: **yes** *  Ban Exports of Silver: **yes** *  **−5.00%** Gold Output *  **−5.00%** Silver Output *  **+33.00%** Income from Minting *  +0.025 Monthly Progress to Mercantilism *  **+5.00%** Export Impact on Demand | *  [Nobility](/Estate#Nobility "Estate") |
| **Regulated Export** The trade of our valuable Gold and Silver resources is managed with a watchful eye. This balanced approach limits the quantity of these precious metals that can be traded, ensuring that our wealth remains largely within our borders. By doing so, we strike a compromise between bolstering our economy and protecting our national riches. A prudent choice for rulers who seek both financial stability and regional influence. |  | *  **+1.00%** Selling Efficiency | *  [Crown](/Estate#Crown "Estate") |
| **Unlimited Export** We shall open the floodgates and allow unrestricted trade of our Gold and Silver reserves with foreign nations. With this bold step, we embrace the potential for unparalleled wealth accumulation through international commerce. However, this policy exposes our treasures to the risk of being dispersed across the world, making them vulnerable to the greed of rival powers. A daring option for rulers who seek to dominate the global market and reap the rewards of boundless riches. |  | *  **+10.00%** Trade Advantage *  **+5.00%** Gold Output *  **+5.00%** Silver Output *  **−33.00%** Income from Minting *  +0.025 Monthly Progress to Free Trade | *  [Burghers](/Estate#Burghers "Estate") |
### Press Laws
This determines how print media outlets in a country are run and regulated.
Unlocked by
:    [Newspapers](/Age_of_Absolutism#Newspapers "Age of Absolutism")
| Policy | Country Modifier | Estate Preferences |
| **State Press Only** Only the State has the right to print the news. All other forms of press are illegal. | *  **+20.00%** Crown Power *  +0.10 Monthly Progress to Serfdom *  +0.10 Monthly Progress to Absolutism | *  [Crown](/Estate#Crown "Estate") |
| **Censored Press** All printing must be approved by the state, which has the inalienable legal right to censor any material it opposes. | *  **+5.00%** Max Literacy *  +0.05 Monthly Progress to Absolutism | *  [Nobility](/Estate#Nobility "Estate") |
| **Free Press** Citizens can print whatever they like without interference or sanction. | *  **−10.00%** Crown Power *  **+10.00%** Max Literacy *  +0.10 Monthly Progress to Liberalism *  +0.10 Monthly Progress to Individualism *  +0.10 Monthly Progress to Free Subjects | *  [Burghers](/Estate#Burghers "Estate") |
### Mining Law
This law determines who owns the mining operations in our country.
Unlocked by
:    [Mining Law](/Age_of_Traditions#Mining_Law "Age of Traditions")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Bergordnung** Control over the mining privileges rests in the hand of the state, allowing for flexible and efficient mining operations. | * At least one of:   + culture:     - has\_culture\_group: German   + culture: [Slovene](/Culture#Slovene "Culture") | *  **−20.00%** Founding Town Cost | *  [Crown](/Estate#Crown "Estate") *  [Burghers](/Estate#Burghers "Estate") |
| **Direct Control of the Ruler** All rare minerals are directly owned by our ruler, giving them ultimate control over any extraction operations. | * culture: [Shona](/Culture#Shona "Culture") | *  **−20.00%** Expand Mining Cost *  **+5.00%** Gold Output | *  [Crown](/Estate#Crown "Estate") |
| **Nobility-Controlled Mining Operations** The Nobility controls all mining operations. |  | *  **−10.00%** Expanding Raw Materials Time *  +0.05 Monthly Progress to Traditional Economy *  +0.10 Monthly Progress to Aristocracy *  **+2.50%** Noble Estate Satisfaction Equilibrium | *  [Nobility](/Estate#Nobility "Estate") |
| **Burghers-Controlled Mining Operations** The Burghers control all mining operations. |  | *  **−10.00%** Expand Mining Cost *  +0.05 Monthly Progress to Capital Economy *  +0.10 Monthly Progress to Plutocracy *  **+2.50%** Burgher Estate Satisfaction Equilibrium | *  [Burghers](/Estate#Burghers "Estate") |
| **Commoner-Controlled Mining Operations** The Commoners controls all mining operations. |  | *  +0.10 Monthly Progress to Free Subjects *  **+2.50%** Peasant Estate Satisfaction Equilibrium | *  [Commoners](/Estate#Commoners "Estate") |
| **Novo Brdo Code** The *Novo Brdo* Code provides detailed guidelines on property rights, safety measures, and economic practices, significantly influencing the development and prosperity of our mining communities. | * Is or was  [Serbia](/Serbia "Serbia") * custom\_tooltip:   + text: has\_unlocked\_novo\_brdo\_tt   + has\_variable: novo\_brdo\_variable | *  **−20.00%** Expanding Raw Materials Time *  +0.10 Monthly Progress to Traditional Economy *  **−5.00%** Founding Town Cost | *  [Nobility](/Estate#Nobility "Estate") |
| **Royal Fifth** As per the monarch's ancient patrimonial rights, the Crown is entitled to the natural riches of the land. However, such an arrangement would be tyrannical, so this natural right has been reduced to a simple twenty percent tax on all precious metals produced in the country and its colonies. | * has\_unlocked\_policy\_trigger:   + type: royal\_fifth\_law | *  **+10.00%** Silver Output *  **+10.00%** Gold Output *  **+15.00%** Mercury Output *  **+25.00%** Income from Colonial Subjects | *  [Crown](/Estate#Crown "Estate") |
### Amazigh Familial Connections
The many tribes across our land hold certain authority over local affairs. Our stance towards them may define the course of our history.
Potential
* capital:
  + region: region:maghreb\_region
* estate\_power(estate\_type:tribes\_estate) > 0
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **Reliance on Local Tribes** Local chiefs and strongmen have great influence over their people. To appease them and win their cooperation would progress our own agenda. | *  **+100.00%** Tribes Power *  **+10.00%** Proximity Efficiency through Land | *  [Tribes](/Estate#Tribes "Estate") |
| **Cordial Relations** While we do not outright recognize their seniority in local matters, maintaining a healthy and respectful relationship between us and local tribes benefits us all. | *  **+2.50%** Tribes Satisfaction Equilibrium | *  [Crown](/Estate#Crown "Estate") |
| **Refuse Recognition** The tribal groups that our lands graciously host have sought to disrupt our authority for far too long. If we are to consolidate our grip on power, we must demonstrate our might and bring these unruly factions to heel. | *  **−25.00%** Tribes Satisfaction Equilibrium *  **+0.10** Monthly Legitimacy | *  [Nobility](/Estate#Nobility "Estate") |
### Border Controls
This Law determines if [Migration](/Migration "Migration") is allowed in or out of the country.
Unlocked by
:    [Mapmaking](/Age_of_Traditions#Mapmaking "Age of Traditions")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Open Borders** The borders of our country are open to anyone, and all may come and go freely. |  | *  +0.10 Monthly Progress to Liberalism | *  [Crown](/Estate#Crown "Estate") *  [Nobility](/Estate#Nobility "Estate") *  [Clergy](/Estate#Clergy "Estate") *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") *  [Tribes](/Estate#Tribes "Estate") |
| **Closed Borders** Nobody is permitted to leave or enter our country. | * Not:   + has\_estate\_privilege:  [Invite German Settlers](/Estate_privilege#Invite_German_Settlers "Estate privilege") | *  Disallow Foreign Migration: **yes** *  +0.05 Monthly Progress to Traditionalist | *  [Nobility](/Estate#Nobility "Estate") *  [Clergy](/Estate#Clergy "Estate") *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") *  [Tribes](/Estate#Tribes "Estate") |
### Language of Pleading
The customs of our social hierarchy and legal proceedings must be concisely and uniformly written down in the language we find most appropriate.
Potential
* has\_embraced\_institution: institution:legalism
* At least one of:
  + Not:
    - court\_language: culture.language
  + has\_unlocked\_policy\_trigger:
    - type: multi\_lingual\_court
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Court Language** By obfuscating everyday legal processes behind the prestigious language only used by the Crown, the rabble cannot so easily interfere in matters of state. |  | *  **+2.50%** Noble Estate Satisfaction Equilibrium *  **+10.00%** Cultural Influence % *  +0.10 Monthly Progress to Serfdom | *  [Nobility](/Estate#Nobility "Estate") |
| **Common Language** By clarifying everyday legal process into the common tongue, ordinary folk become less likely to run afoul of the law. |  | *  **+2.50%** Peasant Estate Satisfaction Equilibrium *  **+10.00%** Cultural Tradition % *  +0.10 Monthly Progress to Free Subjects | *  [Commoners](/Estate#Commoners "Estate") |
| **Multi-Lingual Court** By giving equal rights to all the languages of our realm, we ensure the support of the Commoners and the stability of the realm. | * has\_unlocked\_policy\_trigger:   + type: multi\_lingual\_court * At least one of:   + culture:     - is\_defined\_from\_culture: [Kannadiga](/Culture#Kannadiga "Culture")   + culture:     - is\_defined\_from\_culture: [Telugu](/Culture#Telugu "Culture")   + culture:     - is\_defined\_from\_culture: [Tamil](/Culture#Tamil "Culture") | *  **+3.00** Cultures Capacity *  **+0.10%** Monthly Control *  +0.05 Monthly Progress to Communalism | *  [Crown](/Estate#Crown "Estate") |
### Colonial Aspirations
Having overcome decades of turmoil, France has reached a point where it can finance overseas exploration. New policies will enable the court to pursue colonial ambitions with greater efficiency
Potential
* has\_variable: enable\_fra\_colonial\_ambitions
Unique
:   
| Policy | Requirements | Country Modifier | Estate Preferences |
| **New World Settlements** While previous attempts have been made to establish colonies in the New World, they proved ineffective. However, with renewed financial backing from the state, establishing settlements in the New World should now be less challenging and more rewarding. |  | *  **+50.00%** Monthly Colonial Migration *  **+16.00%** Colonial Maintenance Efficiency *  **−20.00%** Create Colonial Charter Cost *  +0.025 Monthly Progress to Mercantilism | *  [Burghers](/Estate#Burghers "Estate") |
| **Ambitions in the Far East** The Indian spice trade, while contested by other European powers, still remains a valuable market in which to establish a base of power. |  | *  **+40.00%** Foreign Buildings Construction Efficiency *  **+25.00%** Colonial Range *  **+5.00%** Trade Maritime Advantage *  **+2.50%** Selling Efficiency | *  [Burghers](/Estate#Burghers "Estate") |
| **French East India Company** Having grown more established in India and the Far East, the French East India Company has been opened to expand the current French influence in the region. Only time will tell if the company will prove profitable, however... | * has\_unlocked\_policy\_trigger:   + type: french\_east\_india\_company | *  **+5.00%** Selling Efficiency *  **+1.50** Tolerance of Heathen Beliefs *  **+40.00%** Foreign Buildings Construction Efficiency *  **+33.00%** Colonial Range *  **+10.00%** Trade Maritime Advantage | *  [Burghers](/Estate#Burghers "Estate") |
### Primacy of Florentine Guilds
The powerful mercantile institutes that make up our social fabric, the merchant guilds are an important proponent of our continued prosperity and affluence. Though all of them are important, it is undeniable that some are better at obtaining power and influence than others.
Potential
* modifier:allow\_guilds\_of\_florence\_law: True
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **Arti Minori** *Arti Minori* refers to the smaller trade associations that represent artisan crafters and other occupations of lesser scale and importance. These guilds focus on specialized skills such as saddlemaking, locksmithing, or carpentry, and they hold the lowest status within the merchant sphere. | *  **+10.00%** Maximum RGO Size in Towns & Cities *  +0.10 Monthly Progress to Free Subjects *  **+5.00%** Peasant Estate Satisfaction Equilibrium *  **−5.00%** Burgher Estate Satisfaction Equilibrium | *  [Commoners](/Estate#Commoners "Estate") |
| **Arti Mediane** *Arti Mediane* serve as intermediate guilds occupying a middle position between the *Arti Minori* and *Arti Maggiori*. These guilds represent trades and professions of moderate scale and influence, such as blacksmithing and shoemaking, and acted as a bridge between the smaller specialized crafts and the more dominant industries. | *  **+0.1** Possible Burghers in Towns and Cities *  **+10.00%** Buildings Construction Efficiency *  **−5.00%** Burgher Estate Satisfaction Equilibrium | *  [Burghers](/Estate#Burghers "Estate") |
| **Arti Maggiori** The *Arti Maggiori* are the largest and most influential merchant guilds. These guilds represent the major industries and trades that hold significant economic and political power, such as the textile industry or the banking and finance sector. | *  **+2.50%** Burgher Estate Satisfaction Equilibrium *  **+10.00%** Burghers Power *  **+5.00%** Production Efficiency | *  [Burghers](/Estate#Burghers "Estate") |
### Estudo Geral
The por\_estudo\_geral is a national University that aims to educate the citizens of our humble state. Its location and proximity to the capital is a crucial matter to us.
Potential
* has\_unlocked\_law\_trigger:
  + type: por\_estudo\_geral\_law
* At least one of:
  + owns: location:coimbra
  + owns: location:lisbon
Unique
:   
| Policy | Requirements | Country Modifier | On Activate | On Deactivate |
| **Estudo Geral in Lisbon** Establishing the Estudo Geral within the periphery of the court will allow us to centralize power and to exercise greater control over the University's operations. | * owns: location:lisbon | *  +0.05 Monthly Progress to Centralization | * if:   + limit:     - Not:       * location:lisbon:         + has\_building:  [University](/Building#University "Building")   + location:coimbra:     - destroy\_building: building(building\_type:university|root)   + location:lisbon:     - change\_building\_level\_in\_location:       * building:  [University](/Building#University "Building")       * value: 1 * location:lisbon:   + add\_location\_modifier:     - mode: add\_and\_extend     - modifier: por\_estudo\_geral     - years: -1 | * if:   + limit:     - location:lisbon:       * has\_location\_modifier: por\_estudo\_geral   + location:lisbon:     - remove\_location\_modifier: por\_estudo\_geral |
| **Estudo Geral in Coimbra** By situating the national University in the famously scholarly settlement of Coimbra, we will safeguard its independence and assure the estates of our educational goals. | * owns: location:coimbra | *  +0.05 Monthly Progress to Decentralization | * if:   + limit:     - Not:       * location:coimbra:         + has\_building:  [University](/Building#University "Building")   + location:lisbon:     - destroy\_building: building(building\_type:university|root)   + location:coimbra:     - change\_building\_level\_in\_location:       * building:  [University](/Building#University "Building")       * value: 1 * location:coimbra:   + add\_location\_modifier:     - mode: add\_and\_extend     - modifier: por\_estudo\_geral     - years: -1 | * if:   + limit:     - location:coimbra:       * has\_location\_modifier: por\_estudo\_geral   + location:coimbra:     - remove\_location\_modifier: por\_estudo\_geral |
### Amber Monopoly
Amber is amongst the most prized resources within our state. Its trade is of ample importance and must be regulated carefully.
Potential
* has\_unlocked\_law\_trigger:
  + type: teu\_amber\_monopoly\_law
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **State-Controlled Gathering** The state reserves itself the exclusive right to manage the Amber resource. The export of this valuable good is managed by government ministers, bolstering the authority of the ruling class. | *  **+1.00%** Selling Efficiency *  +0.05 Monthly Progress to Aristocracy | *  [Crown](/Estate#Crown "Estate") |
| **Amber in Burghers Hands** It is perhaps best that the Amber is controlled directly by those who trade in it. By eliminating piddling middlemen from the trade process, our overall renevue will greatly expand. | *  **+10.00%** Trade Capacity *  +0.05 Monthly Progress to Free Trade | *  [Burghers](/Estate#Burghers "Estate") |
| **Gathering by the Commoners** Amber should be controlled by the hands that collect it. The resource gathering shall be managed by the Commoners. | *  +0.05 Monthly Progress to Free Subjects *  **+25.00%** Amber Output | *  [Commoners](/Estate#Commoners "Estate") |
### Dominant Currency
A focus on different types of currencies is bound to shape our country in many diverse ways, not just economically, but socially as well.
Potential
* has\_unlocked\_law\_trigger:
  + type: kor\_currency
Unique
:   
| Policy | Requirements | Country Modifier | On Activate |
| **Barter Economy** The means of transaction might as well be conducted by barter. |  |  |  |
| **Metal Coinage** Our attempts to make use of metal currencies have been rather ineffective due to our lack of resources. Perhaps now we will be able to change the course. |  | *  **+1.00%** Minting Threshold |  |
| **Jeohwa** In order to stimulate the economy, let us found a new Paper currency, the Jeohwa. It will also allow us to pivot towards the Capital Economy. | * capital.market:   + stockpile\_in\_market(goods:paper) > 20 |  | * capital.market:   + add\_goods\_supply:     - amount: -20     - goods:  [Paper](/Goods#Paper "Goods") |
| **Chinese Currency** Instead of spending our efforts and resources on maintaining our own currency, we could rely on imported foreign coins of China. | * ") [Yuán(CHI)](/Yu%C3%A1n%28CHI%29 "Yuán(CHI)") exists | *  **+2.50%** Selling Efficiency |  |
### Scottish Colonial Affairs
With tales of riches from the new world, Scotland stands to reap the benefits should it establish a sizable colonial basis. Although an overambition may prove catastrophic for the state's economic stability.
Potential
* has\_unlocked\_law\_trigger:
  + type: sco\_colonial\_affairs\_law
Unique
:   
| Policy | Requirements | Country Modifier | Estate Preferences | Time to implement |
| **No Colonial Ventures** Colonial ventures and attempts to establish trade companies in the new world have been deemed too great a risk to the financial stability of Scotland. |  | *  **−50.00%** Monthly Colonial Migration *  **+0.02** Stability Investment *  **+0.0010** Monthly Development | *  [Crown](/Estate#Crown "Estate") | 1 years |
| **Limited Colonial Ventures** Colonial ventures have been deemed a worthwhile economic risk for the state, and have been officially sanctioned. |  | *  **+10.00%** Monthly Colonial Migration *  **+6.00%** Colonial Maintenance Efficiency *  **−5.00%** Create Colonial Charter Cost *  **+15.00%** Change Policy Cost *  **−5.00%** Tax Efficiency | *  [Crown](/Estate#Crown "Estate") | 1 years |
| **Experienced Colonial Administration** Through countless efforts by explorers and investors, Scotland has found its place in the sun amongst the colonial powers and reaps great benefits from its colonial possessions. | * any\_subject:   + is\_subject\_type: colonial\_nation   + count > 2 | *  **+30.00%** Colonial Maintenance Efficiency *  **−20.00%** Create Colonial Charter Cost | *  [Crown](/Estate#Crown "Estate") | 1 years |
### Enclosure Movement
The Enclosure Movement is the process by which formerly communal land is surrounded by walls or fences, and thus transformed into private property.
Potential
* has\_law: enclosure\_movement
Locked
* has\_policy: enclosure\_act
* estate\_power(estate\_type:peasants\_estate) ≤ 0.25
Unique
:   
| Policy | Requirements | Country Modifier | Estate Preferences | On Activate | On Deactivate |
| **Enclosure Allowed** By permitting enclosures, we allow communal lands used by local populations to be privately owned, and for exclusive use by the owner. |  | *  +0.10 Monthly Progress to Aristocracy *  **+2.50%** Noble Estate Satisfaction Equilibrium *  Allows Peasants to Migrate: **yes** *  **−0.20** Rural Migration Attraction *  **+0.20** Towns and Cities Migration Attraction | *  [Nobility](/Estate#Nobility "Estate") *  [Burghers](/Estate#Burghers "Estate") |  | * add\_estate\_satisfaction:   + type:  [Nobility](/Estate#Nobility "Estate")   + value: estate\_satisfaction\_severe\_penalty |
| **Enclosure Disallowed** Communal lands are protected from becoming Enclosures and cannot be privately owned. |  | *  **−5.00%** Noble Estate Satisfaction Equilibrium *  +0.10 Monthly Progress to Free Subjects | *  [Commoners](/Estate#Commoners "Estate") | * add\_estate\_satisfaction:   + type:  [Commoners](/Estate#Commoners "Estate")   + value: estate\_satisfaction\_severe\_penalty |  |
| **Enclosure Act** Communal lands are further enclosed or privatized in order to support the rise of commercial agriculture and the growth of industrialization. | * culture: [English](/Culture#English "Culture")  * has\_variable: enclosure\_act | *  **+20.00%** Food Production % *  +0.20 Monthly Progress to Aristocracy *  Allows Peasants to Migrate: **yes** *  **−0.40** Rural Migration Attraction *  **+0.40** Towns and Cities Migration Attraction | *  [Crown](/Estate#Crown "Estate") *  [Nobility](/Estate#Nobility "Estate") |  |  |
### Factory Working Conditions
The expansion of our manufacturing industry is accelerating industrialization and boosting production capacity. As factory workers become increasingly central to the economy, regulating their rights in order to prevent exploitation becomes vital.
Potential
* has\_variable: factory\_working\_conditions\_law
Unique
:   
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Decent Conditions** A maximum 12-hour workday is enforced, and regular inspections of factories are carried out. |  | *  +0.10 Monthly Progress to Free Subjects *  **+0.10** Towns and Cities Migration Attraction *  **+5** Character Life Expectancy | *  [Commoners](/Estate#Commoners "Estate") |
| **Fair Conditions** In addition to regulated working hours and factory inspections, additional protection is offered for child workers, limiting their work hours and mandating educational opportunities. | *  [Free Subjects](/Societal_Value#Free_Subjects "Societal Value") ≥ 0 | *  **−5.00%** Burgher Estate Satisfaction Equilibrium *  **−5.00%** Noble Estate Satisfaction Equilibrium *  **+10.00%** Max Literacy for Laborers *  **+10** Character Life Expectancy | *  [Commoners](/Estate#Commoners "Estate") |
| **Unregulated Conditions** Factory owners are free to run their businesses as they please. Accidents are a frequent issue, workers often experience exploitation, and workplace fatalities are all too common. |  | *  +0.10 Monthly Progress to Capital Economy *  **−5** Character Life Expectancy *  **−0.10** Towns and Cities Migration Attraction | *  [Burghers](/Estate#Burghers "Estate") |
### Trade Unions
During the early onset of industrialization, trade unions play a crucial role in shaping labor rights and working conditions. These unions negotiate with employers in order to secure better wages, shorter working hours, and safer conditions for their members through collective bargaining.
Potential
* has\_variable: trade\_unions\_law
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **Allowed** Workers may partake in collective bargaining and strikes, and protests can be carried out to disrupt production and pressure employers into meeting demands. | *  +0.10 Monthly Progress to Free Subjects *  **+25.00%** Peasants Power *  **+5** Character Life Expectancy | *  [Commoners](/Estate#Commoners "Estate") |
| **Prohibited** Workers are not allowed to join forces or attempt any collective action. Strikes are illegal. | *  +0.10 Monthly Progress to Capital Economy *  **+5.00%** Noble Estate Satisfaction Equilibrium *  **+5.00%** Burgher Estate Satisfaction Equilibrium *  +0.025 Monthly Progress to Absolutism | *  [Burghers](/Estate#Burghers "Estate") |
### Vestiarium
Establishing and upholding legal regulations for managing state assets is important for efficient resource allocation and controlled spending. It is necessary for administration and helps the ruling authorities make decisions related to a variety of priorities.
Potential
* has\_variable: vestiarium
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **Diplomatic Focus** Items are categorized according to their practical and symbolic significance, as their intended use is lavish state ceremonies to impress foreign dignitaries and diplomatic gifts. | *  **+1.00** Diplomatic Reputation *  **+10.00%** Improve Relations *  **−20.00%** Send Gift Cost | *  [Clergy](/Estate#Clergy "Estate") |
| **Administrative Focus** Items are managed according to their usefulness to governance and financial planning so that they can be efficiently used for building projects, and ensure that government expenditures are kept under control. | *  **+20.00%** Court Spending Efficiency *  **+0.50%** Monthly Control *  **+20.00%** Urban Buildings Construction Efficiency | *  [Nobility](/Estate#Nobility "Estate") |
### Tìfāyìfú
Tìfāyìfú shall be regarded as our cultural policy towards the Chinese. Amongst the chief requirements shall be for the Hàn to organize their hair in the Biànzi style.
Potential
* has\_unlocked\_law\_trigger:
  + type: mch\_queue\_hair
Unique
:   
| Policy | Country Modifier |
| **Enforce Biànzi** The Hàn Chinese shall be forced to shave the front of the heads, while their hair on the back shall be grown longer and braided to form the Manchu Biànzi. | *  **+5.00%** Noble Estate Satisfaction Equilibrium *  **+25.00%** Cultural Influence % *  **−10.00%** Non-Culture Levy Size |
| **Adoption of the Hànfú** The Manchu officials will adopt Hànfú, the Hàn Chinese clothing style, to be more in line with the dominant ethnicity of the state. | *  +0.10 Monthly Progress to Sinicized |
### Intellectual Movements
The ideological perspectives of the nineteenth century divides man to such extent that entire movements emerge, each stemming from the apparent discord among different philosophical, political, and cultural viewpoints.
Potential
* has\_variable: intellectual\_movements
Locked
* custom\_tooltip:
  + text: flavor\_rus.72.custom2
  + has\_variable: intellectual\_movements\_decision
* dominant\_culture:
  + has\_culture\_group: East Slavic
  + has\_culture\_group: Slavic
Unique
:   
| Policy | Country Modifier | Estate Preferences | On Activate |
| **Slavophiles** The Slavophiles stress the importance of Orthodoxy, Communalism, preservation of traditional values and critique of materialism, individualism and the superficial nature of Western culture. They favor a more isolated path to preserve a unique cultural and spiritual heritage. | *  **+1.00** Cultures Capacity *  **+25.00%** Speed of Integration *  +0.05 Monthly Progress to Traditional Economy *  **+5.00%** Clergy Estate Satisfaction Equilibrium | *  [Commoners](/Estate#Commoners "Estate") | * hidden\_effect:   + set\_variable:     - name: intellectual\_movements\_decision     - value: True     - years: 10 |
| **Westernizers** The Westernizers value closer ties with Europe and believe that all should align themselves with Western culture. The adoption of Western ideas, institutions, and technologies must take precedence to allow for rapid modernization, industrialization, and social reforms. Concepts such as cultural identity and religious unity hold little value. | *  **+10.00%** Monthly Research Progress % *  **+1.00** Tolerance of Heretical Beliefs *  **−25.00%** Cultural Influence % *  **−0.05** Pop Assimilation Speed | *  [Burghers](/Estate#Burghers "Estate") | * hidden\_effect:   + set\_variable:     - name: intellectual\_movements\_decision     - value: True     - years: 10 |
### Alcohol Restrictions
In order to balance out the religious duties of the servants of our faith, and the desires of our people, we must decide if the consumption alcohol is allowed or not.
Potential
* has\_unlocked\_law\_trigger:
  + type: ira\_alcohol\_ban
* religion:
  + group: [Islam](/Religion_group#Islam "Religion group")
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **Ban on Alcohol** By banning alcohol for any citizens in our realm, we can properly ensure the loyalty of the servants of our faith, even if it angers our populace. | *  Ban Exports of Beer: **yes** *  Ban Exports of Wine: **yes** *  Ban Exports of Liquor: **yes** *  Ban Imports of Beer: **yes** *  Ban Imports of Wine: **yes** *  Ban Imports of Liquor: **yes** *  **−10.00%** Ḏimmī Estate Satisfaction Equilibrium *  **+10.00%** Clergy Estate Satisfaction Equilibrium | *  [Clergy](/Estate#Clergy "Estate") |
| **No Restrictions on Alcohol** Instead of banning alcohol for our people, it would be instead preferable to keep it unrestricted for any of our citizens, ensuring the loyalty of the masses. | *  **+5.00%** Ḏimmī Estate Satisfaction Equilibrium | *  [Commoners](/Estate#Commoners "Estate") |
## References
