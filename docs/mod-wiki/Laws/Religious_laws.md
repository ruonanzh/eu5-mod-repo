<!-- source: https://eu5.paradoxwikis.com/Religious_laws revid: 36891 fetched: 2026-09-09 -->
# Religious laws
This article has been verified for the current [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") (1.3) of the game.
Europa Universalis 5
[Laws](/Laws "Laws")
 [Succession](/Succession_laws "Succession laws")
 Religious
 [Military](/Military_laws "Military laws")
 [Administrative](/Administrative_laws "Administrative laws")
 [Socioeconomic](/Socioeconomic_laws "Socioeconomic laws")
 [Estate](/Estate_laws "Estate laws")
 [International organization](/International_organization_laws "International organization laws")
|  | **This page is [automatically generated](/Europa_Universalis_5_Wiki%3AAutogeneration "Europa Universalis 5 Wiki:Autogeneration") from the game files. It should not be edited directly.**  Instead, please suggest changes or improvements on the **[talk page](/index.php?title=Talk:Religious_laws&action=edit&redlink=1 "Talk:Religious laws (page does not exist)")**. |
## List
### Iqṭā'
*Iqṭā'* is the Islam practice of 'tax farming': collecting land revenues from the Commoners as part of *Zakāh*, the giving of alms, which Islam states generally collect to form their base income.
Potential
* religion:
  + group: [Islam](/Religion_group#Islam "Religion group")
Requires one of the following religions
*  [Sunnism](/Religion#Sunnism "Religion")
*  [Ibadism](/Religion#Ibadism "Religion")
*  [Shiism](/Religion#Shiism "Religion")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Tax Farming** Effectively collecting property taxes is the backbone of our national economy. Despite what the Commoners might advocate for, this revenue is vital for funding various projects, endeavors, and campaigns. As such, the accumulation of revenue and the general administration thereof should be entrusted to methodical Iqṭā' holders. | * Neither of:   + Is or was  [Mughal](/Mughal "Mughal")   + culture:     - has\_culture\_group: Indian | *  **−5.00%** Estates Satisfaction Equilibrium *  **+3.00%** Tax Efficiency *  +0.10 Monthly Progress to Capital Economy | *  [Clergy](/Estate#Clergy "Estate") |
| **Jāgir Taxation** The *Jāgir* system grants land and the right to collect taxes to appointees of the state, known as *Jagirdars*. Over the decades since its inception, the system has evolved so that the ruling body retains administrative and military authority, while Jagirdars collect taxes and turn over a portion of that revenue to the treasury. | * At least one of:   + Is or was  [Mughal](/Mughal "Mughal")   + culture:     - has\_culture\_group: Indian | *  **−5.00%** Peasant Estate Satisfaction Equilibrium *  **+5.00%** Tax Efficiency *  +0.10 Monthly Progress to Capital Economy | *  [Nobility](/Estate#Nobility "Estate") |
| **Land Acquisition** Administrating the vast lands under our jurisdiction is no simple matter. Let us strive to bring the territories closer to our central authority by reasserting our possession of these lands, in spite of protests from the Commoners. |  | *  **−10.00%** Expanding Raw Materials Time *  **+10.00%** Maximum RGO Size *  +0.05 Monthly Progress to Centralization | *  [Crown](/Estate#Crown "Estate") |
| **Lenient Taxation** Our people, regardless of their origin and faith, have long suffered under the taxation of the local *Muqṭi'*. Let us give them a helping hand by reducing their tax burden. |  | *  **+2.50%** Estates Satisfaction Equilibrium *  **−5.00%** Tax Efficiency *  **+0.10%** Monthly Prosperity *  +0.10 Monthly Progress to Traditional Economy | *  [Commoners](/Estate#Commoners "Estate") |
### Inquisition Law
Originally established to combat the heresy of Catharism, the Inquisition has become the Catholicism Church's primary tool for investigating and prosecuting heresy. Via specialized ecclesiastical courts, trained inquisitors investigate potential heretics, extract confessions of religious or moral transgression, and impose punishments ranging from penance to execution, for violating Catholic mores.
Unlocked by
:    [Inquisition](/Age_of_Renaissance#Inquisition "Age of Renaissance")
Potential
* religion:  [Catholicism](/Religion#Catholicism "Religion")
Requires one of the following religions
*  [Catholicism](/Religion#Catholicism "Religion")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Papal Control** The mark of the Holy See carries unprecedented influence throughout the Catholicism world. By making the gravitas and authority of the [GetCountry('PAP').GetGovernment.GetRulerTitle] a driving force behind our state's religious policies, we will accelerate the conversion of the non-believers while maintaining general social order. |  |  | *  [Clergy](/Estate#Clergy "Estate") |
| **Local Courts** For too long, heretics in our realm have enjoyed the same protections and privileges as the faithful. It is time to establish local courts with the authority to prosecute those who refuse our faith, regardless of the consequences to social harmony. |  | *  **+20.00%** Pop Conversion Speed % *  **−1.00** Tolerance of Heretical Beliefs *  **−1.00** Tolerance of Heathen Beliefs *  **+15.00%** Lutheranism Resistance Modifier *  **+15.00%** Calvinism Resistance Modifier | *  [Commoners](/Estate#Commoners "Estate") |
| **State Inquisitors** The Inquisition is a matter for the state to oversee, not the [GetCountry('PAP').GetGovernment.GetRulerTitle] nor local authorities. State-selected Inquisitors hold the power to spy on all suspected enemies of the realm and subsequently to bring charges against them. | * Not:   + tag: PAP * At least one of:   + culture: [Venetian](/Culture#Venetian "Culture")   + culture:     - has\_culture\_group: Iberian |  | *  [Nobility](/Estate#Nobility "Estate") |
| **Council of Three Lands** A central body of Jewish Authority, this council is in charge of religious and judicial affairs with an aim of spreading religious tolerance and protect its people from persecution. | * religion\_percentage\_in\_country:   + religion:  [Judaism](/Religion#Judaism "Religion")   + value > 0  * has\_advance: council\_of\_three\_lands\_advance | *  **+1.00** Cultures Capacity *  **+1.00** Tolerance of Heathen Beliefs | *  [Commoners](/Estate#Commoners "Estate") |
| **Spanish Inquisition** Our chief weapon is surprise! Surprise and fear... Our two weapons are fear and surprise... and ruthless efficiency! | * At least one of:   + Is or was  [Castile](/Castile "Castile")   + Is or was  [Spain](/Spain "Spain")   + culture: [Castilian](/Culture#Castilian "Culture") * has\_unlocked\_policy\_trigger:   + type: spa\_inquisition\_policy | *  **+20.00%** Pop Conversion Speed % *  **+20.00%** Counterespionage *  **−2.00** Tolerance of Heathen Beliefs *  **−2.00** Tolerance of Heretical Beliefs *  **+15.00%** Lutheranism Resistance Modifier *  **+15.00%** Calvinism Resistance Modifier | *  [Clergy](/Estate#Clergy "Estate") |
### Society of Jesus
The Society of Jesus, commonly known as the Jesuits, is a religious order founded by Ignatius of Loyola as part of the Counter-Reformation. Jesuits are distinguished from other Catholic orders by their emphasis on education, scholarship, and performing missionary work.
Potential
* has\_unlocked\_global\_law\_trigger:
  + type: society\_of\_jesus
* religion:  [Catholicism](/Religion#Catholicism "Religion")
Requires one of the following religions
*  [Catholicism](/Religion#Catholicism "Religion")
Locked
* is\_locked\_mechanic:
  + mechanic: law
  + type: society\_of\_jesus
| Policy | Country Modifier | Estate Preferences | On Activate |
| **Jesuits Allowed** The Jesuits are a Catholicism religious order, mostly of Iberian origin, that developed along with the Counter-Reformation. Through missionary work and aggressive conversion, their valuable influence and abilities will allow us to accelerate the conversion of our heathen and heretic population at the cost of reduced tolerance. | *  **+5.00%** Pop Conversion Speed % *  **+0.10** Monthly Religious Influence *  **−1.00** Tolerance of Heretical Beliefs *  +0.10 Monthly Progress to Innovative *  **+25.00%** Lutheranism Resistance Modifier *  **+25.00%** Calvinism Resistance Modifier | *  [Clergy](/Estate#Clergy "Estate") | * unlock\_building\_effect:   + type: jesuit\_college |
| **Not Allowed** Despite being able to call upon religious orders to convert our heretic population, we shall instead tolerate all our subjects and treat them as true equals regardless of their beliefs. Jesuit meddling is not welcome in our realm. | *  **+1.00** Tolerance of Heretical Beliefs | *  [Commoners](/Estate#Commoners "Estate") |  |
### Role of the Patriarchate
The Patriarchate is a major pillar of our faith, and an institution with considerable influence over the state.
Potential
* At least one of:
  + religion:  [Orthodoxy](/Religion#Orthodoxy "Religion")
  + religion:  [Strigolnichestvo](/Religion#Strigolnichestvo "Religion")
  + religion:  [Miaphysitism](/Religion#Miaphysitism "Religion")
* Not:
  + has\_policy: separate\_clergy\_from\_state\_policy
Requires one of the following religions
*  [Orthodoxy](/Religion#Orthodoxy "Religion")
*  [Strigolnichestvo](/Religion#Strigolnichestvo "Religion")
*  [Miaphysitism](/Religion#Miaphysitism "Religion")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Separated Patriarchy** The state and the Patriarchy are two entirely separate entities which do not meddle in each other's affairs. |  | *  **+20.00%** Join Autocephalous Patriarchate Cost *  **+20.00%** Create Autocephalous Patriarchate Cost *  **+20.00%** Third Rome Cost *  **+50.00%** Maximum Tax for Clergy Estate | *  [Clergy](/Estate#Clergy "Estate") |
| **State Patriarchy** The Patriarchy assumes an influential position in the state and possesses authority over the religious matters of the country. |  | *  **+0.10** Monthly Religious Influence | *  [Nobility](/Estate#Nobility "Estate") |
| **Combined Patriarchy** The head of the state is also the head of the Patriarchy. Religious matters are handled as if they were typical government issues. |  | *  **+0.15** Monthly Religious Influence *  **−20.00%** Join Autocephalous Patriarchate Cost *  **−20.00%** Create Autocephalous Patriarchate Cost *  **−20.00%** Third Rome Cost *  **+50.00%** Clergy Power | *  [Crown](/Estate#Crown "Estate") |
| **The Most Holy Synod** While the Church has played a major role in the history of the state, it is becoming apparent that its position within our country needs to be rethought. By establishing the Most Holy Synod, the ruler keeps the influence of the Patriarchy in check. | * culture:   + has\_culture\_group: East Slavic * country\_rank\_level > 2 | *  **+0.20** Monthly Religious Influence *  **−33.00%** Third Rome Cost *  **−10.00%** Clergy Power | *  [Nobility](/Estate#Nobility "Estate") *  [Crown](/Estate#Crown "Estate") |
### Censorship
The ability to control which literary works can be distributed, and whether opinions counter to established dogma are allowed, is essential to religious cohesion and generally favored by the Clergy. However, these restrictions are frowned upon by free thinkers and creative professionals, and can have profound consequences for the availability of [Artists](/index.php?title=Artists&action=edit&redlink=1 "Artists (page does not exist)") and for any [Work of Art](/Work_of_Art "Work of Art") deemed heretical.
Locked
* At least one of:
  + All of:
    - has\_policy: de\_heretico\_comburendo
    - legitimacy < 100
    - estate\_power(estate\_type:clergy\_estate) ≥ 0.1
  + All of:
    - has\_policy: doktrinalnaya\_ohrana
    - has\_policy: oprichnik\_policy
| Policy | Requirements | Country Modifier | Estate Preferences |
| **No Censorship** Free-thinking ideals are both uncontroversial and encouraged. [Artists](/index.php?title=Artists&action=edit&redlink=1 "Artists (page does not exist)") are more likely to settle and remain in a [Country](/Country "Country") where they can freely express themselves, although there are inevitably zealots who oppose such liberty. |  | *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  **+1.00** Tolerance of Heretical Beliefs *  **+1.00** Tolerance of Heathen Beliefs *  **+10.00%** Cultural Influence % *  +0.05 Monthly Progress to Humanist *  +0.10 Monthly Progress to Innovative *  +0.05 Monthly Progress to Individualism *  +0.10 Monthly Progress to Liberalism | *  [Burghers](/Estate#Burghers "Estate") |
| **Limited Censorship** The Clergy has some tolerance for heretical and controversial thinking, but their patience must not be tried. [Artists](/index.php?title=Artists&action=edit&redlink=1 "Artists (page does not exist)") may leave or refrain from settling in a [Country](/Country "Country"), depending on how their work and peers are treated. |  | *  **+2.50%** Clergy Estate Satisfaction Equilibrium *  **−0.025%** Stability Decay | *  [Nobility](/Estate#Nobility "Estate") |
| **Strict Censorship** There is no tolerance for heretical thinking. The Clergy watches over everything, and will not hesitate to punish those who do not conform. [Artists](/index.php?title=Artists&action=edit&redlink=1 "Artists (page does not exist)") are less likely to settle or remain in a [Country](/Country "Country") unless they are adherents of the current religious doctrine. |  | *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  **+1.00** Tolerance of the True Faith *  **+0.25** Cultural Tradition *  **+25.00%** Clergy Power *  +0.10 Monthly Progress to Spiritualist *  +0.10 Monthly Progress to Absolutism | *  [Clergy](/Estate#Clergy "Estate") |
| ***De Heretico Comburendo*** Heresy is not tolerated in any aspect of society, and is punishable by burning at the stake. Religious services, writings, and opinions of a heretical nature will be purged. [Artists](/index.php?title=Artists&action=edit&redlink=1 "Artists (page does not exist)") are likely to avoid settling or remaining in our country, and religious minorities will see their property confiscated and be subject to persecution. | * culture: [English](/Culture#English "Culture")  * has\_unlocked\_policy\_trigger:   + type: de\_heretico\_comburendo | *  **+10.00%** Clergy Estate Satisfaction Equilibrium *  **+5.00%** Pop Conversion Speed % *  +0.10 Monthly Progress to Spiritualist *  **+50.00%** Clergy Power | *  [Clergy](/Estate#Clergy "Estate") |
| **Oprichniki Raids Permitted** The Church is not immune to the purges of the Oprichnina, and members of the Clergy, particularly those who were perceived as a threat, are targeted. Monasteries are regularly pillaged, and monks are subjected to violence. Strict censorship is extended to theological works, religious texts, and historical writings, and people who adhere to different forms of Christianity are viewed with suspicion. | * culture:   + has\_culture\_group: East Slavic  * has\_unlocked\_policy\_trigger:   + type: doktrinalnaya\_ohrana | *  **+0.20** Monthly Religious Influence *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  **−25.00%** Clergy Power *  **−3.00** Tolerance of Heretical Beliefs | *  [Crown](/Estate#Crown "Estate") |
| **Mandate of Ofen** The Mandate of Ofen will guide our approach to handling the spread of heresy in our country. It will not only dictate what we condemn as heretical, but will also mandate that every parish church must read it aloud to their congregations twice each year to reinforce its statutes among our people. | * religion:  [Catholicism](/Religion#Catholicism "Religion")  * has\_unlocked\_policy\_trigger:   + type: mandate\_of\_ofen | *  **+10.00%** Pop Conversion Speed % *  +0.10 Monthly Progress to Spiritualist *  **+20.00%** Clergy Power *  **−2.00** Tolerance of Heretical Beliefs | *  [Clergy](/Estate#Clergy "Estate") *  [Crown](/Estate#Crown "Estate") |
### Slave Conversion
Our slaves come from many different lands, and thus bring with them diverse beliefs. We may need to regulate those closely, lest we risk corrupting our own populace by permitting their exposure to deviant practices and rituals.
Potential
* Not:
  + has\_policy: slavery\_outlawed
* At least one of:
  + pop\_type\_population\_in\_country:
    - pop\_type: pop\_type:slaves
    - value > 0
  + has\_law: slave\_conversion
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Allow Slave Religion** Slaves have been already forced to abandon their homes and live a life of servitude under foreign masters. Let them at least keep their beliefs and rituals; it does not matter what they believe on the inside as long as they obey. |  | *  **+10.00%** Slaves Output *  **+1.00%** Max Literacy for Slaves *  **+2.00%** Slaves Food Consumption *  **+5.00%** Satisfaction of Slaves *  **−2.50%** Clergy Estate Satisfaction Equilibrium *  +0.10 Monthly Progress to Humanist | *  [Commoners](/Estate#Commoners "Estate") |
| **Force Slave Conversion** How can we expect slaves to obey and be loyal if they are not willing to embrace our own beliefs, and instead cling to their foolish superstitions? Only by forcing them to abandon their heathenry and accept the true faith wholeheartedly can we ensure their obedience. | * Not:   + has\_policy: heir\_any\_religion | *  Allow Conversion of Slaves: **yes** *  **+0.10%** Unemployed Slave Promotion *  **+0.05%** Monthly Slave Rebel Growth *  +0.10 Monthly Progress to Spiritualist | *  [Clergy](/Estate#Clergy "Estate") |
### Holy Mission
The guideline for our every action is the Holy Mission we have been granted from our divine ruler. The vision the higher power has foreseen for us shall come to fruition!
Potential
* government\_type: government\_type:theocracy
Only for
:    [Theocracy](/Government_type#Theocracy "Government type")
| Policy | Country Modifier | Estate Preferences |
| **Internal Mission** We must focus our energy on the holy missions that affect those within our borders: to protect the faithful, aid the less fortunate, and fulfill our spiritual duties. | *  **+1.00** Tolerance of the True Faith *  +0.10 Monthly Progress to Inward | *  [Commoners](/Estate#Commoners "Estate") |
| **External Mission** The spread of our holy faith must be our foremost mission. We cannot rest until we have defeated all enemies of our religion! | *  **+10.00%** War Score vs other Religion Efficiency *  +0.10 Monthly Progress to Outward | *  [Nobility](/Estate#Nobility "Estate") |
| **Balanced Mission** The affairs of our theocracy cannot be focused on only one aspect. It is in the best interests of both our state and our religion to invest equally in our internal and external missions. | *  **+0.10** Monthly Devotion | *  [Clergy](/Estate#Clergy "Estate") |
| **Commercial Mission** Although religion is the driving force of our ambitions, it is undeniable that our state depends on the might of the Ducat. Fortunately, religion and monetization go hand in hand. | *  **+10.00%** Trade Advantage *  +0.10 Monthly Progress to Free Trade | *  [Burghers](/Estate#Burghers "Estate") |
| **Mission of Protection** Our faith is at constant risk from heathens and heretics alike. The only ones who we can count on are other followers of our religion - our brothers and sisters in faith. It is our duty to protect them from the forces of evil. | *  +0.10 Monthly Progress to Defensive *  **+40.00%** Fortification Maintenance Efficiency | *  [Commoners](/Estate#Commoners "Estate") *  [Nobility](/Estate#Nobility "Estate") |
| **Mission to Civilize** Our mission is to seek out the misguided, primitive peoples across the world and teach them the proper way to live and believe, so that they too may join us in our divinity. | *  +0.10 Monthly Progress to Spiritualist *  **+25.00%** Monthly Colonial Migration | *  [Clergy](/Estate#Clergy "Estate") |
| **Mission on the High Seas** The seas are filled with heathens and villains, plundering the ships of our brethren in faith! At this rate, pilgrims will never be able to safely visit our holy sites if we do not undertake the divine mission to eliminate this piratical menace on the high seas. | *  +0.10 Monthly Progress to Naval *  **+10.00%** Navy Morale | *  [Burghers](/Estate#Burghers "Estate") |
### Nature of our Faith
Religion is the pillar of our entire society, and as such, the nature of our faith plays a role in all facets of our culture. No major decisions can be made without carefully considering the religious perspective of taking these actions.
Unlocked by
:    [Nature of our Faith](/Age_of_Reformation#Nature_of_our_Faith "Age of Reformation")
Potential
* government\_type: government\_type:theocracy
Only for
:    [Theocracy](/Government_type#Theocracy "Government type")
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Faith and Power** Combat and power are the only ways to move closer to the divine. The people of our state show their piety and devotion through victory on the battlefield. |  | *  **+1.00%** Army Morale Recovery Speed *  **+1.00%** Navy Morale Recovery Speed | *  [Nobility](/Estate#Nobility "Estate") |
| **Belief and Unity** Faith is the unifying power which keeps the state and the people together. The government exists for the sole purpose of ensuring that this unity remains unbroken. |  | *  **+1.00** Tolerance of Heretical Beliefs *  **+1.00** Tolerance of Heathen Beliefs | *  [Clergy](/Estate#Clergy "Estate") |
| **Church and State** The faith and the state are the two pillars that hold up the world. Our laws are holy, and they cannot be questioned. | * is\_country\_religion\_pagan: False | *  **+10.00%** Crown Power *  +0.05 Monthly Progress to Absolutism | *  [Crown](/Estate#Crown "Estate") |
| **God and Man** The only relationship that matters is that between lowly mortals and the immortal divine. Our state exists merely to remind people of the proper ways to devote themselves to their faith. | * is\_country\_religion\_pagan: False | *  **+20.00%** Pop Conversion Speed % | *  [Commoners](/Estate#Commoners "Estate") |
| **Organize Our Faith** We are a highly organized state oriented around a faith that is itself highly disorganized. By enacting an official hierarchy for our religion, we may convert more followers to the true faith. | * custom\_tooltip:   + text: is\_religion\_pagan\_tt   + religion:      - custom\_tooltip:       * text: is\_religion\_pagan\_tt       * At least one of:         + group: [African Folk Religions](/Religion_group#African_Folk_Religions "Religion group")         + group: [Argentinian Folk Religions](/Religion_group#Argentinian_Folk_Religions "Religion group")         + group: [Aridoamerican Folk Religions](/Religion_group#Aridoamerican_Folk_Religions "Religion group")         + group: [Asian Folk Religions](/Religion_group#Asian_Folk_Religions "Religion group")         + group: [Australian Folk Religions](/Religion_group#Australian_Folk_Religions "Religion group")         + group: [Brazilian Folk Religions](/Religion_group#Brazilian_Folk_Religions "Religion group")         + group: [Caribbean Folk Religions](/Religion_group#Caribbean_Folk_Religions "Religion group")         + group: [Central American Folk Religions](/Religion_group#Central_American_Folk_Religions "Religion group")         + group: [Tonal Religions](/Religion_group#Tonal_Religions "Religion group")         + group: [European Folk Religions](/Religion_group#European_Folk_Religions "Religion group")         + group: [Melanesian Folk Religions](/Religion_group#Melanesian_Folk_Religions "Religion group")         + group: [Micronesian Folk Religions](/Religion_group#Micronesian_Folk_Religions "Religion group")         + group: [North American Folk Religions](/Religion_group#North_American_Folk_Religions "Religion group")         + group: [Papuan Folk Religions](/Religion_group#Papuan_Folk_Religions "Religion group")         + group: [Permic Folk Religions](/Religion_group#Permic_Folk_Religions "Religion group")         + group: [Andean Folk Religions](/Religion_group#Andean_Folk_Religions "Religion group")         + group: [Polynesian Folk Religions](/Religion_group#Polynesian_Folk_Religions "Religion group")         + group: [South East Asian Folk Religions](/Religion_group#South_East_Asian_Folk_Religions "Religion group")         + group: [South American Folk Religions](/Religion_group#South_American_Folk_Religions "Religion group") | *  **+5.00%** Crown Power *  **+1.00** Tolerance of the True Faith | *  [Crown](/Estate#Crown "Estate") |
### Divine Cause
While monarchies and republics may be content to simply exist in the world, a Holy State requires a deeper, more spiritual calling. This Divine Cause shall guide our hand towards a glorious destiny.
Unlocked by
:    [Divine Cause](/Age_of_Traditions#Divine_Cause "Age of Traditions")
Potential
* government\_type: government\_type:theocracy
Only for
:    [Theocracy](/Government_type#Theocracy "Government type")
| Policy | Country Modifier | Estate Preferences |
| **Safeguard Holy Sites** It is our sacred duty to look after the holy sites under our control, and to protect any pilgrims within our lands. | *  +0.10 Monthly Progress to Communalism *  **+20.00%** Fort Defense | *  [Commoners](/Estate#Commoners "Estate") *  [Clergy](/Estate#Clergy "Estate") |
| **Combat Heresy** In the mission to spread the true faith, we must never waver in our conviction, and be ready to root out heresy wherever it springs up — by force, if need be. | *  +0.10 Monthly Progress to Belligerent *  **+10.00%** Army Morale | *  [Nobility](/Estate#Nobility "Estate") *  [Clergy](/Estate#Clergy "Estate") |
| **Expulsion of Heathens** As our state grows, we inevitably become exposed to wrongful teachings. We must not tolerate heathens or heretics within our city walls! Therefore, we shall allow these nonbelievers to dwell in our cities only if they convert to the true faith. | *  +0.10 Monthly Progress to Traditionalist *  **+20.00%** Pop Assimilation Speed | *  [Commoners](/Estate#Commoners "Estate") |
| **Pursuit of Knowledge** Our cause is not the defense of our religion, nor the forceful expansion of our faith. Instead, we focus on the very nature of being, exploring the relationship between the mortal and the divine realms. | *  **+5.00%** Max Literacy *  +0.10 Monthly Progress to Innovative | *  [Burghers](/Estate#Burghers "Estate") |
### Tribal Religious Values
The religious values of our tribe dictate not only how we live, but how we treat those who do not share our beliefs and traditions, both within and outside of our territory.
Unlocked by
:    [Tribal Religious Values](/Age_of_Renaissance#Tribal_Religious_Values "Age of Renaissance"),  [Tribal Religious Values](/Age_of_Traditions#Tribal_Religious_Values "Age of Traditions")
Potential
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
Allow
* At least one of:
  + government\_type: government\_type:tribe
  + government\_type: government\_type:steppe\_horde
| Policy | Country Modifier | Estate Preferences |
| **Religious Tribe** Our expansion has made us a more diverse and populous community than before. While clan loyalties can take us far, a strongly religious society can better withstand expansion in both time and space, and will give us the cohesion we need to continue growing effectively. | *  **+0.01** Pop Conversion Speed | *  [Clergy](/Estate#Clergy "Estate") |
| **Lip Service** Religion is undeniably an important aspect of any society. However, it should never threaten the safety and stability of the tribe. As such, we should take a more relaxed view on religion altogether, while still publicly paying respect to spiritual concerns. | *  **+20.00%** Stability Investment Efficiency | *  [Commoners](/Estate#Commoners "Estate") *  [Burghers](/Estate#Burghers "Estate") |
| **Complete Religious Autonomy** While religious practices help us maintain our legitimacy, we should not become mired in the principles of righteous rule and morality. Pragmatism will take us further and allow us to support a larger state than slavish spirituality can. | *  **+20.00%** Army Maintenance Efficiency | *  [Commoners](/Estate#Commoners "Estate") *  [Burghers](/Estate#Burghers "Estate") |
### Marriage Law
Marriage law refers to the legal framework that governs the institution of marriage within a particular jurisdiction.
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Monogamous Marriage** Monogamous marriage refers to a cultural or societal practice of union between two individuals, based on established customs, values, and norms. | * custom\_tooltip:   + text: not\_catholic\_theocracies   + At least one of:     - government\_type is not government\_type:theocracy     - religion is not  [Catholicism](/Religion#Catholicism "Religion") | *  **+1** Maximum Amount of Female Spouses *  **+1** Maximum Amount of Male Spouses | *  [Clergy](/Estate#Clergy "Estate") |
| **Nikāḥ** Nikāḥ in Islamic culture is the solemn and legally binding marriage contract between a man and a woman. | * religion.group: [Islam](/Religion_group#Islam "Religion group") | *  **+4** Maximum Amount of Female Spouses *  **+1** Maximum Amount of Male Spouses | *  [Clergy](/Estate#Clergy "Estate") |
| **Communal Living** The Adamite sect rejects the concept of traditional marriage, preferring to live within communal structures without a clear hierarchy. | * All of:   + religion:  [Hussitism](/Religion#Hussitism "Religion")   + has\_religious\_aspect: religious\_aspect:adamite\_services | *  **+10** Maximum Amount of Female Spouses *  **+10** Maximum Amount of Male Spouses | *  [Clergy](/Estate#Clergy "Estate") *  [Commoners](/Estate#Commoners "Estate") |
| **Polygyny** Marriage between a man and multiple women is seen as a sign of wealth and power within many communities. | * At least one of:    + custom\_tooltip:     - text: is\_religion\_pagan\_tt     - religion:        * custom\_tooltip:         + text: is\_religion\_pagan\_tt         + At least one of:           - group: [African Folk Religions](/Religion_group#African_Folk_Religions "Religion group")           - group: [Argentinian Folk Religions](/Religion_group#Argentinian_Folk_Religions "Religion group")           - group: [Aridoamerican Folk Religions](/Religion_group#Aridoamerican_Folk_Religions "Religion group")           - group: [Asian Folk Religions](/Religion_group#Asian_Folk_Religions "Religion group")           - group: [Australian Folk Religions](/Religion_group#Australian_Folk_Religions "Religion group")           - group: [Brazilian Folk Religions](/Religion_group#Brazilian_Folk_Religions "Religion group")           - group: [Caribbean Folk Religions](/Religion_group#Caribbean_Folk_Religions "Religion group")           - group: [Central American Folk Religions](/Religion_group#Central_American_Folk_Religions "Religion group")           - group: [Tonal Religions](/Religion_group#Tonal_Religions "Religion group")           - group: [European Folk Religions](/Religion_group#European_Folk_Religions "Religion group")           - group: [Melanesian Folk Religions](/Religion_group#Melanesian_Folk_Religions "Religion group")           - group: [Micronesian Folk Religions](/Religion_group#Micronesian_Folk_Religions "Religion group")           - group: [North American Folk Religions](/Religion_group#North_American_Folk_Religions "Religion group")           - group: [Papuan Folk Religions](/Religion_group#Papuan_Folk_Religions "Religion group")           - group: [Permic Folk Religions](/Religion_group#Permic_Folk_Religions "Religion group")           - group: [Andean Folk Religions](/Religion_group#Andean_Folk_Religions "Religion group")           - group: [Polynesian Folk Religions](/Religion_group#Polynesian_Folk_Religions "Religion group")           - group: [South East Asian Folk Religions](/Religion_group#South_East_Asian_Folk_Religions "Religion group")           - group: [South American Folk Religions](/Religion_group#South_American_Folk_Religions "Religion group")   + religion:  [Hinduism](/Religion#Hinduism "Religion")   + culture:     - has\_culture\_group: Indian | *  **+4** Maximum Amount of Female Spouses *  **+1** Maximum Amount of Male Spouses | *  [Clergy](/Estate#Clergy "Estate") |
| **Díshù System** The Díshù System allows the practice of entertaining concubines at court in order to secure heirs. | * At least one of:   + culture.language.language\_family: language\_family:chinese\_language\_family   + court\_language.language\_family: language\_family:chinese\_language\_family   + culture.language: [Korean](/Language#Korean "Language")   + court\_language: [Korean](/Language#Korean "Language")   + culture.language: [Vietnamese](/Language#Vietnamese "Language")   + court\_language: [Vietnamese](/Language#Vietnamese "Language")   + culture.language: [Japanese](/Language#Japanese "Language")   + court\_language: [Japanese](/Language#Japanese "Language") | *  **+4** Maximum Amount of Female Spouses *  **+1** Maximum Amount of Male Spouses | *  [Clergy](/Estate#Clergy "Estate") |
| **Celibacy** Celibacy refers to the state of abstaining from marriage and sexual relations. It is a choice often tied to religious or personal beliefs, emphasizing a life without a romantic or sexual partner. | * government\_type: government\_type:theocracy | *  0 Maximum Amount of Female Spouses *  0 Maximum Amount of Male Spouses *  **+2.50%** Clergy Estate Satisfaction Equilibrium *  Marriage Banned: **yes** | *  [Clergy](/Estate#Clergy "Estate") |
### Heir Religion
The ability to decide the religion of the [Heir](/Heir "Heir") holds significant importance in matters of succession and governance. It allows rulers and governments to maintain religious stability, ensuring that the beliefs and practices of the ruler align with those of the majority of their subjects. Ultimately, the power to determine the religion of the heir represents an important element in the fine balance of religious freedom, governance, and societal harmony.
Locked
* At least one of:
  + All of:
    - has\_policy: heir\_same\_religion
    - custom\_tooltip:
      * text: act\_of\_settlement\_tt
      * has\_variable: act\_of\_settlement
  + custom\_tooltip:
    - text: recently\_negotiated\_succession\_law\_locked\_tt
    - has\_country\_modifier: recently\_negotiated\_succession\_law
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Special Succession** The religion of the [Heir](/Heir "Heir") is not determined by the laws but by the [Succession Law](/Succession_Law "Succession Law") itself. | * succession\_law:   + has\_tag: empty\_heir\_religion\_law | *  **+10.00%** Legislative Efficiency |  |
| **Same Religion** Selecting the [Heir](/Heir "Heir") from the same religion as the prevailing one ensures that the beliefs and practices of the population and Crown are aligned. While this policy can contribute to religious cohesion, it may also limit opportunities for those of different faiths to assume leadership positions. | * succession\_law:   + Not:     - has\_tag: empty\_heir\_religion\_law * or:   + not:     - this exists   + not:     - exists: ruler\_or\_heir\_if\_regent   + ruler\_or\_heir\_if\_regent:     - religion: root.religion   + exists: union | *  Heir of Same Religion: yes *  **+0.10** Tolerance of the True Faith *  +0.20% Clergy Estate Satisfaction Recovery *  +0.10 Monthly Progress to Spiritualist | *  [Clergy](/Estate#Clergy "Estate") |
| **Same Religious Group** Selecting the [Heir](/Heir "Heir") from the same religious group is often desirable in order to maintain religious and cultural continuity and prevent potential religious conflicts. This policy can help safeguard the stability of the realm by minimizing religious divisions within the leadership, at the expense of individuals from faiths considered to be 'heathen' being able to assume leadership roles. | * succession\_law:   + Not:     - has\_tag: empty\_heir\_religion\_law * or:   + not:     - this exists   + not:     - exists: ruler\_or\_heir\_if\_regent   + ruler\_or\_heir\_if\_regent:     - religion.group: root.religion.group | *  Heir of Same Religion Group: yes *  **+0.25** Tolerance of Heretical Beliefs *  +0.10% Clergy Estate Satisfaction Recovery | *  [Nobility](/Estate#Nobility "Estate") |
| **Any Religion** Faith is personal, and does not reflect nor compromise an individual's ability to lead. The [Heir](/Heir "Heir") may worship any religion and still assume leadership roles. This policy carries a higher risk of religious conflicts within the leadership, while promoting religious freedom and general acceptance. | * succession\_law:   + Not:     - has\_tag: empty\_heir\_religion\_law | *  Heir of Any Religion: yes *  **+0.50** Tolerance of Heathen Beliefs *  +1.00% Clergy Estate Satisfaction Decay *  +0.10 Monthly Progress to Humanist | *  [Crown](/Estate#Crown "Estate") |
### Reformation Edicts
The Reformation is sweeping across Europe, and France is on the front lines of its outbreak. State policy towards these emerging zealots will be critical in making them our friends — or foes.
Potential
* has\_variable: enable\_fra\_tolerance\_edicts
* religion:  [Catholicism](/Religion#Catholicism "Religion")
* Not:
  + has\_variable: nantes\_revoked\_by\_sun\_king
Requires one of the following religions
*  [Catholicism](/Religion#Catholicism "Religion")
Locked
* custom\_tooltip: why\_law\_is\_locked\_fra\_religious\_laws
* is\_locked\_mechanic:
  + mechanic: law
  + type: fra\_reformation\_tolerance\_edicts
Unique
:   
| Policy | Requirements | Country Modifier | Estate Preferences |
| **Edict of Lutheranism Tolerance** Special privileges have been given to the Lutheranism population throughout France, preventing their persecution. However, the [GetCountry('FRA').GetGovernment.GetCourtTitle]'s policy is seen as heresy by the Catholicism Clergy. | * has\_unlocked\_policy\_trigger:   + type: protestant\_tolerance * Not:   + has\_unlocked\_policy\_trigger:     - type: edict\_of\_nantes | *  **−5.00%** Estates Satisfaction Equilibrium *  **−15.00%** Pop Conversion Speed % *  **−1.00** Tolerance of the True Faith *  **+1.00** Tolerance of Heretical Beliefs *  **−0.20** Monthly Religious Influence | *  [Commoners](/Estate#Commoners "Estate") |
| **Edict of Religious Tolerance** Special privileges have been given to the population throughout France who follow these new, reformed faiths, preventing their persecution. | * has\_unlocked\_policy\_trigger:   + type: reformist\_tolerance * Not:   + has\_unlocked\_policy\_trigger:     - type: edict\_of\_nantes | *  **−5.00%** Estates Satisfaction Equilibrium *  **−33.00%** Pop Conversion Speed % *  **−1.50** Tolerance of the True Faith *  **+1.00** Tolerance of Heretical Beliefs *  **−0.33** Monthly Religious Influence | *  [Commoners](/Estate#Commoners "Estate") |
| **Edict of Nantes** The Edict of Nantes grants considerable rights to the religious minorities throughout France, putting them on an equal footing with followers of the Catholicism faith. It also ends the decades-long persecution of our Huguenot citizens. | * has\_unlocked\_policy\_trigger:   + type: edict\_of\_nantes | *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  **+0.02** Stability Investment *  **+2.00** Tolerance of Heretical Beliefs | *  [Commoners](/Estate#Commoners "Estate") |
| **Edict of Fontainebleau** The court has deemed the rise of Protestantism a serious threat to the stability of France, and practice of the heretic faith is now considered high treason. | * Not:   + has\_unlocked\_policy\_trigger:     - type: edict\_of\_nantes | *  **+5.00%** Pop Conversion Speed % *  **+1.00** Tolerance of the True Faith *  **−1.00** Tolerance of Heretical Beliefs | *  [Clergy](/Estate#Clergy "Estate") |
| **Expanded Edict of Fontainebleau** The continued rise of Protestantism and other Reformation faiths has led the council to expand the previous Edict of Fontainebleau to target all heretical faiths. | * has\_unlocked\_policy\_trigger:   + type: expanded\_edict\_of\_fontainebleau * Not:   + has\_unlocked\_policy\_trigger:     - type: edict\_of\_nantes | *  **+12.50%** Pop Conversion Speed % *  **+1.50** Tolerance of the True Faith *  **−2.00** Tolerance of Heretical Beliefs | *  [Clergy](/Estate#Clergy "Estate") |
| **Edict of Châteaubriant** The rise of Protestantism in France has reached a crucial point, forcing the court to take extreme action. Under the Edict of Châteaubriant, followers of heretical beliefs are prevented from holding public offices, and conducting trade throughout France. | * has\_unlocked\_policy\_trigger:   + type: edict\_of\_chateaubriant * Not:   + has\_unlocked\_policy\_trigger:     - type: edict\_of\_nantes | *  **+2.50%** Estates Satisfaction Equilibrium *  **+17.50%** Pop Conversion Speed % *  **+1.00** Tolerance of the True Faith *  **−3.00** Tolerance of Heretical Beliefs *  **−10.00%** Stability Investment Efficiency | *  [Clergy](/Estate#Clergy "Estate") |
### Status of Jansenism
A doctrine following the teachings of Saint Augustine, *Jansenism* emphasizes predestination, the profound and lasting effects of original sin, and rigorous morality. It has increasingly come under threat with the rise of Absolutism in France, as well as having been officially condemned by the Roman Bull *Unigenitus*.
Potential
* has\_unlocked\_law\_trigger:
  + type: fra\_jansenism\_legality
* religion:  [Catholicism](/Religion#Catholicism "Religion")
Requires one of the following religions
*  [Catholicism](/Religion#Catholicism "Religion")
Unique
:   
| Policy | Requirements | Country Modifier | Estate Preferences |
| **No Formal Law** The legality of Jansenism currently exists in a state of limbo, with the *Unigenitus* decree unimplemented. Followers of Jansenism are treated equally to other religious sects. |  | *  **+2.50%** Estates Satisfaction Equilibrium *  **−0.50** Monthly Religious Influence *  **+10.00%** Parliament Base Support | *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") |
| **Unigenitus Decree** The Unigenitus Decree has been codified into law, outlawing any form of practice of Jansenism. Known followers of Jansenism are forced to pay the *Cinquantième* tax. | * has\_unlocked\_policy\_trigger:   + type: unigenitus\_codified | *  **−5.00%** Peasant Estate Satisfaction Equilibrium *  **+1.00** Monthly Religious Influence *  **+5.00%** Maximum Tax for Peasants Estate *  **+0.20%** Monthly Commoners Rebel Growth *  **−10.00%** Parliament Base Support | *  [Crown](/Estate#Crown "Estate") *  [Clergy](/Estate#Clergy "Estate") |
### Authority over the Clergy
Scottish contribution to the Curia have become a burden on the state's finances. Seeking to curtail Curia contributions, the state has taken direct jurisdiction over the clergymen.
Potential
* has\_unlocked\_law\_trigger:
  + type: sco\_authority\_over\_the\_clergy
* religion:  [Catholicism](/Religion#Catholicism "Religion")
Requires one of the following religions
*  [Catholicism](/Religion#Catholicism "Religion")
Unique
:   
| Policy | Country Modifier | Estate Preferences | Time to implement |
| **Government Jurisdiction** Roman and Curia influence have largely been curtailed in favor of the established government having direct jurisdiction of the religious institutions within Scotland. | *  **+10.00%** Crown Power *  **−1.00** Monthly Religious Influence *  **+0.20** Cultural Tradition *  **+10.00%** Court Spending Efficiency *  **−15.00%** Clergy Power *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  **+5.00%** Minimum Tax for Clergy Estate *  **−50** Papal Relations | *  [Crown](/Estate#Crown "Estate") *  [Nobility](/Estate#Nobility "Estate") | 1 years |
| **Limited Curia Access** While the government retains most influence over the religious institutions within Scotland, a special provision has been given to high ranking clergymen, allowing them to engage openly with the Curia. | *  **+5.00%** Crown Power *  **−0.33** Monthly Religious Influence *  **−10.00%** Clergy Power *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  **+30.00%** Stability Investment Efficiency *  **+2.50%** Minimum Tax for Clergy Estate *  **−20** Papal Relations | *  [Clergy](/Estate#Clergy "Estate") | 1 years |
### Orthodoxy Status within the Empire of Constantinople
In order to garner support for restoring the Empire of Constantinople, a compromise was reached with the Kingdom of Rome regarding strengthening Catholicism supremacy over the local Orthodoxy branch.
Potential
* has\_unlocked\_law\_trigger:
  + type: lat\_orthodox\_status\_with\_the\_empire
* All of:
  + Is or was  [Constantinople](/Constantinople "Constantinople")
  + religion:  [Catholicism](/Religion#Catholicism "Religion")
Requires one of the following religions
*  [Catholicism](/Religion#Catholicism "Religion")
Unique
:   
| Policy | Country Modifier | Estate Preferences | Time to implement |
| **Tolerance of the Orthodoxy Faith** Conversion policies from the Kingdom of Rome have largely been ignored in order to form a peaceful coexistence with the local Orthodoxy populace. | *  **+10.00%** Monthly Research Progress % *  **+2.00** Tolerance of Heretical Beliefs *  **+5.00%** Peasant Estate Satisfaction Equilibrium *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  +0.10 Monthly Progress to Humanist *  **−25** Papal Relations *  **−25.00%** Pop Conversion Speed % | *  [Burghers](/Estate#Burghers "Estate") *  [Commoners](/Estate#Commoners "Estate") | 1 years |
| **Limited Reconversion Efforts** Reconversion policies from the Kingdom of Rome towards the Orthodoxy are insituted in the legal code of the Empire of Constantinople, but are not enforced. | *  **+0.50** Tolerance of Heretical Beliefs *  **+10.00%** Clergy Power *  **+10.00%** Pop Conversion Speed % *  **−5.00%** Stability Investment Efficiency | *  [Crown](/Estate#Crown "Estate") *  [Nobility](/Estate#Nobility "Estate") | 1 years |
| **Sanctioned Reconversion Efforts** Reconversion policies towards the Orthodoxy populace are heavily enforced with the full backing of the Kingdom of Rome. | *  **−1.00** Tolerance of Heretical Beliefs *  **+0.10** Monthly Religious Influence *  **+25.00%** Clergy Power *  **+5.00%** Clergy Estate Satisfaction Equilibrium *  **+20.00%** Stability Investment Efficiency *  **−10.00%** Tithe Cost Modifier *  **+25** Papal Relations *  **+25.00%** Pop Conversion Speed % | *  [Clergy](/Estate#Clergy "Estate") | 1 years |
### The Witchcraft Act
If we are to live a life of piety and root out the corruption and evil among us, we must address the growing concerns of many around the existence of witches and the practice of the occult.
Potential
* has\_variable: witchcraft\_decision
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **Banned** The infernal practice of witchcraft, and consulting with witches, have become capital offenses. Any who transgress shall reap what they sow... | *  **−10.00%** Monthly Research Progress % | *  [Clergy](/Estate#Clergy "Estate") |
| **Ignored** The so-called practice of witchcraft is just superstition, or perhaps the effects of indigestion. Either way, the government has better things to spend its time on. | *  **−5.00%** Clergy Estate Satisfaction Equilibrium *  **−5.00%** Peasant Estate Satisfaction Equilibrium | *  [Commoners](/Estate#Commoners "Estate") |
### The Holy Office
The Holy Office has been requesting greater jurisdiction over religious life in the Most Serene Republic. We must now choose whether to comply with this request, or to defend the religious freedom of our subjects.
Potential
* has\_unlocked\_law\_trigger:
  + type: venetian\_papal\_relation\_law
* religion:  [Catholicism](/Religion#Catholicism "Religion")
Requires one of the following religions
*  [Catholicism](/Religion#Catholicism "Religion")
Unique
:   
| Policy | Country Modifier | Estate Preferences |
| **Venetian First, Christianity Second** In Venice, loyalty to the Republic is more important than what type of Christianity you are. | *  **+1.00** Tolerance of Heretical Beliefs *  **−0.20** Monthly Religious Influence | *  [Nobility](/Estate#Nobility "Estate") *  [Burghers](/Estate#Burghers "Estate") |
| **Christianity First!** Being a proper Christianity is the only thing that matters for a citizen of Venice. | *  **−1.00** Tolerance of Heretical Beliefs *  **+0.20** Monthly Religious Influence | *  [Clergy](/Estate#Clergy "Estate") |
### Monastic Reformation Movement
The Possessors and Non-Possessors have different views on the role of wealth within the Church and its impact on the spiritual life of clergy and followers.
Potential
* has\_variable: monastic\_reformation\_movement
Locked
* custom\_tooltip:
  + text: flavor\_mos.47.custom2
  + has\_variable: supported\_monastic\_reformation\_movement
Unique
:   
| Policy | Country Modifier | Estate Preferences | On Activate |
| **Non-Possessors** The Non-Possessors believe that the Church should distance itself from material wealth and follow a more monastic and contemplative lifestyle. A rejection of worldly possessions is important if one is to foster a closer relationship with God. The movement is heavily influenced by the teachings of Nil Sorsky. | *  **−20.00%** Estate Enrichment *  **−0.10** Monthly Religious Influence *  +0.05 Monthly Progress to Communalism | *  [Commoners](/Estate#Commoners "Estate") | * hidden\_effect:   + set\_variable:     - name: supported\_monastic\_reformation\_movement     - value: True     - years: 10 |
| **Possessors** The Possessors support Church's ownership of land and property, deeming it necessary for the Church to possess material wealth in order to fulfill its spiritual and social responsibilities. Examples of such commitments are charitable activities, maintaining religious institutions, develop infrastructure and provide education. | *  **+10.00%** Clergy Power *  +0.05 Monthly Progress to Free Subjects *  **+10.00%** Max Literacy for Peasants *  **+10.00%** Max Literacy for Soldiers *  **+10.00%** Max Literacy for Laborers | *  [Clergy](/Estate#Clergy "Estate") | * hidden\_effect:   + set\_variable:     - name: supported\_monastic\_reformation\_movement     - value: True     - years: 10 |
## References
