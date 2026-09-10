<!-- source: https://eu5.paradoxwikis.com/International_organization_laws revid: 36893 fetched: 2026-09-09 -->
# International organization laws
This article has been verified for the current [version](/Europa_Universalis_5_Wiki%3AVersioning "Europa Universalis 5 Wiki:Versioning") (1.3) of the game.
Europa Universalis 5
[Laws](/Laws "Laws")
 [Succession](/Succession_laws "Succession laws")
 [Religious](/Religious_laws "Religious laws")
 [Military](/Military_laws "Military laws")
 [Administrative](/Administrative_laws "Administrative laws")
 [Socioeconomic](/Socioeconomic_laws "Socioeconomic laws")
 [Estate](/Estate_laws "Estate laws")
 International organization
|  | **This page is [automatically generated](/Europa_Universalis_5_Wiki%3AAutogeneration "Europa Universalis 5 Wiki:Autogeneration") from the game files. It should not be edited directly.**  Instead, please suggest changes or improvements on the **[talk page](/index.php?title=Talk:International_organization_laws&action=edit&redlink=1 "Talk:International organization laws (page does not exist)")**. |
## Autocephalous Patriarchate
### Administrative Laws
#### Liturgical Practices
Various worship practices centered around hymns, readings and rites.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Requires Vote
:   
| Policy | Time to implement | Price |
| **Byzantine Rites** By adhering to practices popularized by Byzantine priests, we can borrow some of the legitimacy of their faiths. | 1 years | *  **50** |
| **Local Rites** Emphasize our own local rites over others. | 1 years | *  **50** |
| **Catholicism-Influenced Rites** Introduce rites such as mass, sacraments and liturgy of the hours, in adjacency to the Catholicism practices. | 1 years | *  **50** |
#### Christological Debates
Debates on the aspect of Christ, our stance towards our brethren sects and our position on the nature of worship are the lifeblood of keeping our belief alive and vibrant!
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Requires Vote
:   
| Policy | Time to implement | Price |
| **Allow Christological Debates** Our patriarchate will integrate this aspect into its core beliefs, embraced by all our members. | 1 years | *  **50** |
| **Forbid Christological Debates** Our patriarchate will reject this aspect into its core beliefs, embraced by all our members. | 1 years | *  **50** |
#### Double Sabbath
The Sabbath has been the holy day reserved to God since the times of Moses. It may still be preserved as a day of rest, or it could be considered to be superseded by the Lord's Day on Sunday.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Requires Vote
:   
| Policy | Time to implement | Price |
| **Allow Double Sabbath** Both Sunday and Saturday are considered sacred. | 1 years | *  **50** |
| **Forbid Double Sabbath** The observance of the Sabbath is no longer necessary when celebrating the Lord's Day on Sunday. | 1 years | *  **50** |
#### Interpatriarchal Relations
Despite the different Patriarchs being autonomous in their decisions and not reporting to any higher authority, they are still part of the same faith. It is thus inevitable and even necessary to have some interaction and common discussions.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Requires Vote
:   
| Policy | Time to implement | Price |
| **Cooperation Between Patriarchs** The Patriarchs should work together for the greater benefit of the Church as a whole, even if each one of them retains the full authority of their Patriarchy. | 1 years | *  **50** |
| **Independent Acting Patriarchs** The Patriarchs have full authority over their own Patriarchies, and thus can decide independently the best course of action for them without the need of any discussion with the other Patriarchs. | 1 years | *  **50** |
#### Ruler and Patriarch Relations
The Patriarch works for the souls of the people and that sometimes puts him in interaction with the earthly authority. What role should the countries rulers take when interacting with the Patriarch is also a matter of the faith.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Requires Vote
:   
| Policy | Requirements | Time to implement | Price |
| **Caesaropapism** The earthly rulers are the main guardians and guarantors of the Church, and as such their decisions affect how the Patriarch operates. They are the representatives of God, to rule His kingdom here on Earth. | * leader\_country:   + Not:     - has\_policy: separated\_patriarchate\_policy | 1 years | *  **50** |
| **Independent Authorities** Render unto Caesar the things that are Caesar's, and unto God the things that are God's. |  | 1 years | *  **50** |
### Religious Laws
#### Nature
Known also as physis (*φύσις*), this tenet rests at the core of our beliefs. It stands for the undisputed fact that Jesus Christ is of a dual and harmonious nature. The coexistence of humanity and divinity is the basis of coexistence that we shall strive to live by.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Locked
* custom\_tooltip:
  + text: fundamental\_law\_tt
  + At least one of:
    - All of:
      * var:religion:  [Orthodoxy](/Religion#Orthodoxy "Religion")
      * international\_organization\_has\_policy: [Dual Nature](/Law#Nature "Law")
    - All of:
      * var:religion:  [Miaphysitism](/Religion#Miaphysitism "Religion")
      * international\_organization\_has\_policy: [Composite Nature](/Law#Nature "Law")
    - All of:
      * var:religion:  [Nestorianism](/Religion#Nestorianism "Religion")
      * international\_organization\_has\_policy: [Separate Nature](/Law#Nature "Law")
Requires Vote
:   
| Policy | Requirements | Time to implement | On Activate | Price |
| **Single Nature** There can only be one nature of Jesus. | * var:religion:   + Neither of:     - this:  [Orthodoxy](/Religion#Orthodoxy "Religion")     - this:  [Miaphysitism](/Religion#Miaphysitism "Religion")     - this:  [Nestorianism](/Religion#Nestorianism "Religion") | 1 years | * custom\_tooltip:   + text: change\_maintenance\_tt   + every\_international\_organization\_member:     - set\_variable: enable\_single\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_composite\_nature\_pm\_variable       * remove\_variable: enable\_composite\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_dual\_nature\_pm\_variable       * remove\_variable: enable\_dual\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_separate\_nature\_pm\_variable       * remove\_variable: enable\_separate\_nature\_pm\_variable | *  **50** |
| **Composite Nature** The two natures of Jesus are combined into a single one (*μια φύσις*). | * var:religion:  [Miaphysitism](/Religion#Miaphysitism "Religion") | 1 years | * custom\_tooltip:   + text: change\_maintenance\_tt   + every\_international\_organization\_member:     - set\_variable: enable\_composite\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_single\_nature\_pm\_variable       * remove\_variable: enable\_single\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_dual\_nature\_pm\_variable       * remove\_variable: enable\_dual\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_separate\_nature\_pm\_variable       * remove\_variable: enable\_separate\_nature\_pm\_variable | *  **50** |
| **Dual Nature** The aspect of Jesus contains a dual nature, both human and divine (*Δυοφυσιτισμός*). | * var:religion:  [Orthodoxy](/Religion#Orthodoxy "Religion") | 1 years | * custom\_tooltip:   + text: change\_maintenance\_tt   + every\_international\_organization\_member:     - set\_variable: enable\_dual\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_single\_nature\_pm\_variable       * remove\_variable: enable\_single\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_composite\_nature\_pm\_variable       * remove\_variable: enable\_composite\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_separate\_nature\_pm\_variable       * remove\_variable: enable\_separate\_nature\_pm\_variable | *  **50** |
| **Separate Nature** While hosting two natures, divinity and humanity, these two aspects of Jesus are completely separate. | * var:religion:  [Nestorianism](/Religion#Nestorianism "Religion") | 1 years | * custom\_tooltip:   + text: change\_maintenance\_tt   + every\_international\_organization\_member:     - set\_variable: enable\_separate\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_single\_nature\_pm\_variable       * remove\_variable: enable\_single\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_dual\_nature\_pm\_variable       * remove\_variable: enable\_dual\_nature\_pm\_variable     - if:       * limit:         + has\_variable: enable\_composite\_nature\_pm\_variable       * remove\_variable: enable\_composite\_nature\_pm\_variable | *  **50** |
#### Christology
The thelogical study around the nature of Christ, His identity and the union of his various natures is a delicate art. Many scholars classify Christ as fully divine, thus they subscribe to High Christology, while other adhere to the disciplines of Low Christology.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Locked
* custom\_tooltip:
  + text: fundamental\_law\_tt
  + At least one of:
    - All of:
      * var:religion:  [Orthodoxy](/Religion#Orthodoxy "Religion")
      * international\_organization\_has\_policy: [High Christology](/Law#Christology "Law")
    - All of:
      * var:religion:  [Miaphysitism](/Religion#Miaphysitism "Religion")
      * international\_organization\_has\_policy: [High Christology](/Law#Christology "Law")
    - All of:
      * var:religion:  [Nestorianism](/Religion#Nestorianism "Religion")
      * international\_organization\_has\_policy: [High Christology](/Law#Christology "Law")
Requires Vote
:   
| Policy | Time to implement | Price |
| **High Christology** Christ is unequivocally divine. | 1 years | *  **50** |
| **Low Christology** Christ is a mere human. | 1 years | *  **50** |
#### Essence
Known also as ousia (*ουσία*), this tenet represents the interpretation of the Divinity of God as being the same as the Divinity of Christ.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Locked
* custom\_tooltip:
  + text: fundamental\_law\_tt
  + At least one of:
    - All of:
      * var:religion:  [Orthodoxy](/Religion#Orthodoxy "Religion")
      * international\_organization\_has\_policy: [Accept the Tenet of Essence](/Law#Essence "Law")
    - All of:
      * var:religion:  [Miaphysitism](/Religion#Miaphysitism "Religion")
      * international\_organization\_has\_policy: [Accept the Tenet of Essence](/Law#Essence "Law")
    - All of:
      * var:religion:  [Nestorianism](/Religion#Nestorianism "Religion")
      * international\_organization\_has\_policy: [Accept the Tenet of Essence](/Law#Essence "Law")
Requires Vote
:   
| Policy | Time to implement | Price |
| **Accept the Tenet of Essence** Our patriarchate will integrate this aspect into its core beliefs, embraced by all our members. | 1 years | *  **50** |
| **Reject the Tenet of Essence** Our patriarchate will reject this aspect into its core beliefs, embraced by all our members. | 1 years | *  **50** |
#### Hypostasis
Deriving from the core concept of concrete reality (*υπόστασις*), this tenet delves into the essence and nature of Christ and God, and their divine essences taking a single or multiple manifestations.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Locked
* custom\_tooltip:
  + text: fundamental\_law\_tt
  + At least one of:
    - All of:
      * var:religion:  [Orthodoxy](/Religion#Orthodoxy "Religion")
      * international\_organization\_has\_policy: [Single Hypostasis](/Law#Hypostasis "Law")
    - All of:
      * var:religion:  [Miaphysitism](/Religion#Miaphysitism "Religion")
      * international\_organization\_has\_policy: [Single Hypostasis](/Law#Hypostasis "Law")
    - All of:
      * var:religion:  [Nestorianism](/Religion#Nestorianism "Religion")
      * international\_organization\_has\_policy: [Multiple Hypostases](/Law#Hypostasis "Law")
Requires Vote
:   
| Policy | Time to implement | Price |
| **Single Hypostasis** The nature of Christ and God is one but the same. | 1 years | *  **50** |
| **Multiple Hypostases** Christ and God are different manifestations of the divine essence. | 1 years | *  **50** |
#### Prosopon
Originally meaning Mask (*πρόσωπον*), this tenet centers on the Person of Christ, and whether He is a single individual or includes two different divine and human individuals.
Potential
* international\_organization\_type: international\_organization\_type:autocephalous\_patriarchate
Allow
* leader\_country:
  + can\_pay\_price: price:christian\_tenet\_price
Locked
* custom\_tooltip:
  + text: fundamental\_law\_tt
  + At least one of:
    - All of:
      * var:religion:  [Orthodoxy](/Religion#Orthodoxy "Religion")
      * international\_organization\_has\_policy: [Monoprosopic Concept](/Law#Prosopon "Law")
    - All of:
      * var:religion:  [Miaphysitism](/Religion#Miaphysitism "Religion")
      * international\_organization\_has\_policy: [Monoprosopic Concept](/Law#Prosopon "Law")
    - All of:
      * var:religion:  [Nestorianism](/Religion#Nestorianism "Religion")
      * international\_organization\_has\_policy: [Dyoprosopic Concept](/Law#Prosopon "Law")
Requires Vote
:   
| Policy | Time to implement | Price |
| **Monoprosopic Concept** Christ has only one person. | 1 years | *  **50** |
| **Dyoprosopic Concept** Christ has two persons, divine and human. | 1 years | *  **50** |
## Catholic Church
### Administrative Laws
#### Papal Authority
The official stance of the Catholic Church on the matter of papal authority.
Potential
* international\_organization\_type: international\_organization\_type:catholic\_church
Locked
* Not:
  + is\_situation\_active: situation:council\_of\_trent
* international\_organization\_has\_locked\_law:
  + law: cc\_papal\_authority
Requires Vote
:   
| Policy | Time to implement | International Organization Modifier |
| **Ultramontanism** The [GetInternationalOrganization('catholic\_church').GetLeaderTitle] has strong prerogatives and powers over the Catholic Church. The [GetInternationalOrganization('catholic\_church').GetLeaderTitle] is infallibale. | 1 years | *  Direct Excommunication Allowed: yes |
| **Gallicanism** Rejecting the total authority of the [GetInternationalOrganization('catholic\_church').GetLeaderTitle], Gallicanism places similar importance on the authority of the state. | 1 years |  |
| **Conciliarism** Conciliarism rejects the total authority of the [GetInternationalOrganization('catholic\_church').GetLeaderTitle] as a single person, placing it in the hand of an ecumenical council instead. | 1 years |  |
| **Invisible Church** The [GetInternationalOrganization('catholic\_church').GetLeaderTitle] is a mere representetive role in the faith, with the authority on questions of faith placed on the ruler of the individual country. | 1 years | *  Excommunication Disabled: yes |
### Estate Laws
#### The Marriage of Priests
The official stance of the Catholic Church towards the ability of its priests to marry.
Potential
* international\_organization\_type: international\_organization\_type:catholic\_church
Locked
* Not:
  + is\_situation\_active: situation:council\_of\_trent
* international\_organization\_has\_locked\_law:
  + law: cc\_marriage\_of\_priest
Requires Vote
:   
| Policy | Time to implement |
| **In Rito Romano** No Priest of the Catholic Church is allowed to marry. | 1 years |
| **Non in Solo Pane** Priests are allowed to marry, but they are not allowed to ascend to a position in the curia. | 1 years |
| **Qualis est Pastor** All priests are allowed to marry. | 1 years |
### Religious Laws
#### Veneration of Saints and Reliquaries
The official stance of the Catholic Church on the matter of veneration of saints and reliquaries.
Potential
* international\_organization\_type: international\_organization\_type:catholic\_church
Locked
* Not:
  + is\_situation\_active: situation:council\_of\_trent
* international\_organization\_has\_locked\_law:
  + law: cc\_veneration\_of\_saints\_and\_reliquaries
Requires Vote
:   
| Policy | Time to implement | On Deactivate | On Fully Activated |
| **Sunt in Regno Dei** The veneration of saints and reliquaries is an essential part of the Catholicism doctrine. | 1 years |  |  |
| **Licet ad Colenda** While an essential part of Catholicism doctrine, the veneration of saints and reliquaries is restricted to a smaller core of approved objects. | 1 years |  |  |
| **Ubi Moyses Ascendit** The veneration of saints and reliquaries is prohibited. | 1 years | * lock\_resolution\_effect:   + type: benedictus\_deus | * unlock\_resolution\_effect:   + type: benedictus\_deus |
#### Society of Jesus
The official relations of the Catholic Church towards the Order of the Jesuits.
Potential
* international\_organization\_type: international\_organization\_type:catholic\_church
Allow
* custom\_tooltip:
  + text: cc\_society\_of\_jesus\_tt
  + has\_variable: society\_of\_jesus\_founded
Locked
* Not:
  + is\_situation\_active: situation:council\_of\_trent
* international\_organization\_has\_locked\_law:
  + law: cc\_society\_of\_jesus
Requires Vote
:   
| Policy | Time to implement | On Activate |
| **Dominus Ac Redemptor Noster** The Society of Jesus is not supported by the Catholic Church. | 1 years | * international\_organization\_lock\_global\_law\_effect:   + type: society\_of\_jesus |
| **Regimini Militantis Ecclesiae** The Society of Jesus is the official representative of the [GetInternationalOrganization('catholic\_church').GetLeaderTitle] and is allowed to spread the faith with all its might. | 1 years | * international\_organization\_unlock\_global\_law\_effect:   + type: society\_of\_jesus |
#### Persecution of Witchcraft
The official stance of the Catholic Church on the existance of Witchcraft and other occult practices.
Potential
* international\_organization\_type: international\_organization\_type:catholic\_church
Allow
* custom\_tooltip:
  + text: cc\_witchcraft\_tt
  + has\_variable: witchcraft\_discussed
Locked
* Not:
  + is\_situation\_active: situation:council\_of\_trent
* international\_organization\_has\_locked\_law:
  + law: cc\_witchcraft
Requires Vote
:   
| Policy | Time to implement |
| **Sicut Malefici Aegyptii** Witchcraft is not acknowledged as real by the Catholic Church. | 1 years |
| **Summis Desiderantes** As the *Malleus Maleficarum* demands, we need to find and persecute all signs of witchcraft. | 1 years |
### Socioeconomic Laws
#### The Purchase of Indulgence
The official stance of the Catholic Church on the matter of Indulgences.
Potential
* international\_organization\_type: international\_organization\_type:catholic\_church
Locked
* Not:
  + is\_situation\_active: situation:council\_of\_trent
* international\_organization\_has\_locked\_law:
  + law: cc\_indulgences
Requires Vote
:   
| Policy | Time to implement | On Deactivate | On Fully Activated |
| **Cum Postquam** A follower of the Catholicism faith is able to reduce their time in purgatory with the performance of charity like giving alms or other donations to the instution of the Catholic Church. | 1 years |  |  |
| **Unigenitus Dei Filius** The sale of indulgences is wide-spread and highly commercialized. Followers are able to purchase indulgences directly from members of the Catholic Church, even going so far as purchasing forgiveness for sins not yet commited. | 1 years |  |  |
| **Etsi Dominici Gregis** The purchase of indulgences by any means, even the giving of alm, is prohibited. | 1 years | * lock\_resolution\_effect:   + type: benedictus\_deus | * unlock\_resolution\_effect:   + type: benedictus\_deus |
#### Simony
The official stance of the Catholic Church on the matter of simony.
Potential
* international\_organization\_type: international\_organization\_type:catholic\_church
Locked
* Not:
  + is\_situation\_active: situation:council\_of\_trent
* international\_organization\_has\_locked\_law:
  + law: cc\_simony
Requires Vote
:   
| Policy | Time to implement | On Deactivate | On Fully Activated |
| **Beatior Ist Largitas** The presence of Simony is not officially endorsed but tolerated by the Church. | 1 years |  |  |
| **Quae sunt Caesaris Deo** Simony is an accepted part of Catholicism doctrine. | 1 years |  |  |
| **Romanum Decet Pontificem** The practice of Simony is actively presecuted and punished by the Church. | 1 years | * lock\_resolution\_effect:   + type: inter\_gravissimas | * unlock\_resolution\_effect:   + type: inter\_gravissimas |
## Colonial Federation
### Centralization Laws
#### Unification of the Colonial Federation
With bonds forged in the fires of our struggle for independence, it is time to consider the unification of the loosly bound lands of our members.
Potential
* international\_organization\_type: international\_organization\_type:colonial\_federation
Allow
* Not:
  + any\_international\_organization\_member:
    - is\_subject\_type: colonial\_nation
| Policy | Requirements | On Activate |
| **Found a new Republic** The principles and methods of the Republic are essential to the freedom of our members and our subjects alike. | * international\_organization\_lifetime > 5 | * if:   + limit:      - custom\_description:       * text: has\_valid\_policy\_vote\_proposer\_text       * has\_variable: io\_law\_proposer       * exists: var:io\_law\_proposer       * var:io\_law\_proposer exists   + var:io\_law\_proposer:     - custom\_tooltip:       * text: colonial\_federation\_found\_republic\_specific\_tt       * set\_variable: colonial\_federation\_picked\_gov\_type\_republic       * trigger\_event\_silently: colonial\_federation\_events.1000 * else\_if:   + limit:     - international\_organization\_has\_leader: True   + leader\_country:     - custom\_tooltip:       * text: colonial\_federation\_found\_republic\_specific\_tt       * set\_variable: colonial\_federation\_picked\_gov\_type\_republic       * trigger\_event\_silently: colonial\_federation\_events.1000 * else:   + custom\_tooltip: colonial\_federation\_found\_republic\_tt   + hidden\_effect:     - if:       * limit:         + any\_international\_organization\_member:           - is\_ai: False       * ordered\_international\_organization\_member:         + limit:           - is\_ai: False         + order\_by: total\_population         + max: 1         + check\_range\_bounds: False         + set\_variable: colonial\_federation\_picked\_gov\_type\_republic         + trigger\_event\_silently: colonial\_federation\_events.1000     - else:       * ordered\_international\_organization\_member:         + order\_by: total\_population         + max: 1         + check\_range\_bounds: False         + set\_variable: colonial\_federation\_picked\_gov\_type\_republic         + trigger\_event\_silently: colonial\_federation\_events.1000 |
| **Found a new Monarchy** A newfound Monarchy, governing all our members justly, is the only path towards prosperity for. | * international\_organization\_lifetime > 10 * leader\_country:   + government\_power < 60 | * if:   + limit:      - custom\_description:       * text: has\_valid\_policy\_vote\_proposer\_text       * has\_variable: io\_law\_proposer       * exists: var:io\_law\_proposer       * var:io\_law\_proposer exists   + var:io\_law\_proposer:     - custom\_tooltip:       * text: colonial\_federation\_found\_monarchy\_specific\_tt       * set\_variable: colonial\_federation\_picked\_gov\_type\_monarchy       * trigger\_event\_silently: colonial\_federation\_events.1000 * else\_if:   + limit:     - international\_organization\_has\_leader: True   + leader\_country:     - custom\_tooltip:       * text: colonial\_federation\_found\_monarchy\_specific\_tt       * set\_variable: colonial\_federation\_picked\_gov\_type\_monarchy       * trigger\_event\_silently: colonial\_federation\_events.1000 * else:   + custom\_tooltip: colonial\_federation\_found\_monarchy\_tt |
| **Found a new Theocracy** Neither the free will of the Republican votes nor the authoritarian power of a Monarchy has led our Colonial Federation to independence, but the will of the divine. Only as a unified Theocracy can our people prosper in this world. | * international\_organization\_lifetime > 10 * At least one of:   + leader\_country:     - At least one of:       * religious\_unity > 0.9       * ruler\_or\_regent:         + has\_trait: zealot | * if:   + limit:      - custom\_description:       * text: has\_valid\_policy\_vote\_proposer\_text       * has\_variable: io\_law\_proposer       * exists: var:io\_law\_proposer       * var:io\_law\_proposer exists   + var:io\_law\_proposer:     - custom\_tooltip:       * text: colonial\_federation\_found\_theocracy\_specific\_tt       * set\_variable: colonial\_federation\_picked\_gov\_type\_theocracy       * trigger\_event\_silently: colonial\_federation\_events.1000 * else\_if:   + limit:     - international\_organization\_has\_leader: True   + leader\_country:     - custom\_tooltip:       * text: colonial\_federation\_found\_theocracy\_specific\_tt       * set\_variable: colonial\_federation\_picked\_gov\_type\_theocracy       * trigger\_event\_silently: colonial\_federation\_events.1000 * else:   + custom\_tooltip: colonial\_federation\_found\_theocracy\_tt |
## Hindu Branch
### Religious Laws
#### Tradition
The specific traditions and beliefs followed by this [Hindu Branch](/Hindu_Branch "Hindu Branch").
Potential
* international\_organization\_type: international\_organization\_type:hindu\_branch
Locked
* international\_organization\_has\_law:  [Tradition](/Law#Tradition "Law")
| Policy | Country Modifier |
| **Vaishnavism** Vaishnavism is the [Hindu Branch](/Hindu_Branch "Hindu Branch") centered around the worship of Viṣṇu and his ten [Avatars](/index.php?title=Avatars&action=edit&redlink=1 "Avatars (page does not exist)"). | *  **+3.00** Avatars Allowed |
| **Shaivism** Shaivism is the [Hindu Branch](/Hindu_Branch "Hindu Branch") revering Śiva as the supreme [God](/index.php?title=God&action=edit&redlink=1 "God (page does not exist)"). It is the [Hindu Branch](/Hindu_Branch "Hindu Branch") more focused on asceticism and yoga. | *  Enable Self Control: **yes** |
| **Shaktism** Shaktism is the [Hindu Branch](/Hindu_Branch "Hindu Branch") centered around the worship of the Mother Goddess, known as Devī or Śakti, represented and revered in her many different forms. | *  **+1.00** Avatars Allowed |
| **Smartism** Smartism is the [Hindu Branch](/Hindu_Branch "Hindu Branch") that does not consider any [God](/index.php?title=God&action=edit&redlink=1 "God (page does not exist)") to be above any other, and instead worships equally the five [Gods](/index.php?title=Gods&action=edit&redlink=1 "Gods (page does not exist)") Gaṇeśa, Śiva, Śakti, Viṣṇu, and Sūrya. | *  Enable Smartism Gods: **yes** |
## Holy Roman Empire
### Uncategorized
#### Golden Bull
The Golden Bull is the decree of the Holy Roman Empire which defines and creates the constitutional structure of the Empire, especially the Electoral College. Other laws and Imperial Reforms all build on the Golden Bull.
Potential
* international\_organization\_type: international\_organization\_type:hre
Allow
* has\_currency\_to\_vote\_for\_law:
  + value: imperial\_authority\_golden\_bull
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Golden Bull](/Law#Golden_Bull "Law")
  + hre\_has\_locked\_law:
    - law: golden\_bull
| Policy | Country Modifier | On Activate | International Organization Modifier |
| **Seal the Golden Bull** The Golden Bull is the decree of the Holy Roman Empire which defines and creates the constitutional structure of the Empire, especially the Electoral College. Other laws and Imperial Reforms all build on the Golden Bull. | *  **+0.02** Monthly Imperial Authority | * hre\_lock\_law:   + law: golden\_bull * hre\_setup\_hre\_variables: True * hre\_enable\_all\_imperial\_laws: True * hre\_on\_reform\_passed\_effect:   + amount: imperial\_authority\_golden\_bull * custom\_tooltip: hre\_golden\_bull\_formalizes\_electorate\_tt * custom\_tooltip: hre\_golden\_bull\_self\_voting\_regulated\_via\_electorate\_law | *  Enable Leave the Holy Roman Empire Peace: **yes** *  Forbidden Unjustified Wars Against Other Members: yes |
| **Uncodified Electoral Order** Without the Golden Bull, the Holy Roman Empire's electoral and constitutional arrangements remain a patchwork of custom, precedent, and shifting alliances. The absence of a formal decree leaves the [Electoral College](/Electoral_College "Electoral College") more susceptible to disputes, intrigue, and political maneuvering. |  |  | *  Allow Self Voting: **yes** |
#### Imperial Circles
The Imperial Circles divides the Holy Roman Empire into geographic administrative regions, each led by a designated [Circle Leader](/index.php?title=Circle_Leader&action=edit&redlink=1 "Circle Leader (page does not exist)").
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Imperial Circles](/Law#Imperial_Circles "Law")
  + At least one of:
    - circles\_are\_active: True
    - hre\_io\_is\_in\_formation\_period: True
| Policy | Requirements | Country Modifier | On Activate |
| **No Imperial Circles** The Holy Roman Empire has no formal geographic subdivisions. |  | *  **+0.02** Monthly Imperial Authority |  |
| **Imperial Circles Established** The Holy Roman Empire is divided into Imperial Circles, each governed by a designated [Circle Leader](/index.php?title=Circle_Leader&action=edit&redlink=1 "Circle Leader (page does not exist)") who coordinates their region's affairs. | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * has\_currency\_to\_vote\_for\_law:   + value: 50 |  | * hre\_start\_circle\_formation: True * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |
### Administrative Laws
#### Landfriede
The *Landfriede*, or 'land peace,' is a decree which dictates that disputes between members of the Holy Roman Empire must be settled in the Imperial Court rather than on the battlefield. This mandate helps us stay cohesive as an empire, rather than becoming weak through petty in-fighting.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
* has\_currency\_to\_vote\_for\_law:
  + value: 50
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | International Organization Modifier |
| **Absence of Landfriede** 'Might makes right' accurately describes the current practical politics of the Holy Roman Empire; disputes between our members will be resolved on the battlefield. | * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Landfriede](/Law#Landfriede "Law")   + policy: [Absence of Landfriede](/Law#Landfriede "Law") | *  **−2.50%** Stability Investment Efficiency | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |  |  |
| **Institute the Landfriede** The *Landfriede*, or 'land peace,' is a decree which dictates that disputes between members of the Holy Roman Empire must be settled in the Imperial Court rather than on the battlefield. This mandate helps us stay cohesive as an empire, rather than becoming weak through petty in-fighting. | * international\_organization\_has\_law:  [Landfriede](/Law#Landfriede "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Landfriede](/Law#Landfriede "Law")   + policy: [Institute the Landfriede](/Law#Landfriede "Law") |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |  |  |
| **Expand the Landfriede** The *Landfriede* gains additional influence and recognition amongst members of the Holy Roman Empire. | * international\_organization\_has\_law:  [Landfriede](/Law#Landfriede "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Landfriede](/Law#Landfriede "Law")   + policy: [Expand the Landfriede](/Law#Landfriede "Law") |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * custom\_tooltip:   + text: landfriede\_parliament\_issue\_rank\_2   + international\_organization\_unlock\_parliament\_issue\_effect:     - type: hre\_demand\_internal\_peace | * international\_organization\_lock\_parliament\_issue\_effect:   + type: hre\_demand\_internal\_peace |  |
| **Empower the Landfriede** The *Landfriede* is now a powerful institution. Members of the Holy Roman Empire greatly respect its authority. | * international\_organization\_has\_law:  [Landfriede](/Law#Landfriede "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Landfriede](/Law#Landfriede "Law")   + policy: [Empower the Landfriede](/Law#Landfriede "Law") |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * custom\_tooltip:   + text: landfriede\_parliament\_issue\_rank\_3   + international\_organization\_unlock\_parliament\_issue\_effect:     - type: hre\_demand\_internal\_peace | * international\_organization\_lock\_parliament\_issue\_effect:   + type: hre\_demand\_internal\_peace |  |
| **Ewiger Landfriede** The *Landfriede* is at its apex of influence and power within the Holy Roman Empire, and private warfdare between member states has been permanently outlawed. Any disputes that arise are subject to judgment in the Imperial Court. | * international\_organization\_has\_law:  [Landfriede](/Law#Landfriede "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Landfriede](/Law#Landfriede "Law")   + policy: [Ewiger Landfriede](/Law#Landfriede "Law") |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * custom\_tooltip:   + text: landfriede\_parliament\_issue\_rank\_4   + international\_organization\_unlock\_parliament\_issue\_effect:     - type: hre\_demand\_internal\_peace | * international\_organization\_lock\_parliament\_issue\_effect:   + type: hre\_demand\_internal\_peace | *  +1 Emperor-Comfort Policies |
| **Outlaw Internal Warfare** Restrict the capabilities of the members of the Holy Roman Empire and effectively outlaws warfare within the Empire. | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * international\_organization\_has\_law:  [Landfriede](/Law#Landfriede "Law") * hre\_num\_of\_emperor\_comfort\_policies\_active:   + value: 4 * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Landfriede](/Law#Landfriede "Law")   + policy: [Outlaw Internal Warfare](/Law#Landfriede "Law") |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * custom\_tooltip:   + text: landfriede\_parliament\_issue\_rank\_4   + international\_organization\_unlock\_parliament\_issue\_effect:     - type: hre\_demand\_internal\_peace | * international\_organization\_lock\_parliament\_issue\_effect:   + type: hre\_demand\_internal\_peace |  |
#### Imperial Diet
The Court Assembly is an ancient system, and therefore many of its stipulations and procedures are very outdated. It is time to rework it and establish a proper Imperial Diet that better protects the diverse interests of all members of the Holy Roman Empire.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
| Policy | Requirements | Country Modifier | On Activate |
| **Traditional Diet** Having never been formally codified, the system of the Court Assembly is in dire need of reform. | * always: False * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * international\_organization\_has\_law:  [Imperial Diet](/Law#Imperial_Diet "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Diet](/Law#Imperial_Diet "Law")   + policy: [Traditional Diet](/Law#Imperial_Diet "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |
| **Early Imperial Diet** The earliest form of Imperial Diet represents the traditional order of the Holy Roman Empire. Only the Prince-Elector, Archbishop-Elector, and Imperial Prince may participate, excluding Free Imperial City and lower ecclesiastical entities from the legislative process.   * Strong voting power for the Emperor, Prince-Elector, Archbishop-Elector, and Imperial Prince * Free Imperial City and Imperial Peasant Republic have no voting power * Minor ecclesiastical roles like Imperial Prelate, Primas Germaniae, and Legatus Natus have limited power | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * international\_organization\_has\_law:  [Imperial Diet](/Law#Imperial_Diet "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Diet](/Law#Imperial_Diet "Law")   + policy: [Early Imperial Diet](/Law#Imperial_Diet "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | *  **+0.01** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * set\_parliament\_type: parliament\_type:hre\_early\_imperial\_diet * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: mild\_prince\_friendly |
| **Bicameral Imperial Diet** The Bicameral Imperial Diet expands representation by granting voting rights to ecclesiastical dignitaries and princely rulers alike, forming two chambers within the Diet.   * Standard power for Emperor, Prince-Elector, Archbishop-Elector, and Imperial Prince * Imperial Prelate gain meaningful influence * Free Imperial City and Imperial Peasant Republic still lack representation | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * international\_organization\_has\_law:  [Imperial Diet](/Law#Imperial_Diet "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Diet](/Law#Imperial_Diet "Law")   + policy: [Bicameral Imperial Diet](/Law#Imperial_Diet "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | *  **+0.02** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * set\_parliament\_type: parliament\_type:hre\_bi\_camerial\_imperial\_diet * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: mild\_prince\_friendly |
| **Tricameral Imperial Diet** With the Tricameral Imperial Diet, Free Imperial City finally gain a decisive voice. The Imperial Diet now consists of three chambers — ecclesiastical, princely, and civic — reflecting a more inclusive balance of power.   * Balanced power among Emperor, Prince-Elector, Archbishop-Elector, Imperial Prince, Free Imperial City, and minor theocratic roles * Imperial Peasant Republic gain the highest influence here * Most inclusive form of the Diet | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * international\_organization\_has\_law:  [Imperial Diet](/Law#Imperial_Diet "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Diet](/Law#Imperial_Diet "Law")   + policy: [Tricameral Imperial Diet](/Law#Imperial_Diet "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | *  **+0.035** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * set\_parliament\_type: parliament\_type:hre\_tri\_camerial\_imperial\_diet * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: mild\_prince\_friendly * hre\_on\_reform\_level\_passed\_opinion\_effect\_free\_cities:   + strength: prince\_friendly |
#### Perpetual Diet
Previously, Imperial Diets convened irregularly in various cities across the Holy Roman Empire, requiring the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] and other representatives to travel each time. By establishing a permanent, continuously-sitting Diet, we shall create a standing assembly that operates on a system of constant deliberation, rather than sporadic meetings.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
* has\_currency\_to\_vote\_for\_law:
  + value: imperial\_authority\_standard\_law
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Perpetual Diet](/Law#Perpetual_Diet "Law")
  + hre\_has\_locked\_law:
    - law: perpetual\_diet\_law
| Policy | Requirements | On Activate | On Deactivate |
| **Traveling Diet** The [GetUniqueInternationalOrganization('hre').GetLeaderTitle] and other representatives will travel to different cities across the Holy Roman Empire, convening Diets where and when needed rather on a regular schedule or in a set location. | * always: False |  |  |
| **Perpetual Diet** Previously, Imperial Diets convened irregularly in various cities across the Holy Roman Empire, requiring the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] and other representatives to travel each time. By establishing a permanent, continuously-sitting Diet, we shall create a standing assembly that operates on a system of constant deliberation, rather than sporadic meetings. | * At least one of:   + international\_organization\_has\_policy: [Bicameral Imperial Diet](/Law#Imperial_Diet "Law")   + international\_organization\_has\_policy: [Tricameral Imperial Diet](/Law#Imperial_Diet "Law") | * hre\_on\_reform\_passed\_effect:   + amount: imperial\_authority\_standard\_law * international\_organization\_unlock\_parliament\_issue\_effect:   + type: hre\_establish\_perpetual\_diet * hre\_lock\_law:   + law: perpetual\_diet\_law | * international\_organization\_lock\_parliament\_issue\_effect:   + type: hre\_establish\_perpetual\_diet * every\_international\_organization\_owned\_location:   + remove\_variable: diet\_location |
### Centralization Laws
#### Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]
The Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] is a complicated topic. Members of the Holy Roman Empire and Prince-Elector alike have conflicting interests with those of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle], yet they recognize that a powerless [GetUniqueInternationalOrganization('hre').GetLeaderTitle] is in no position to protect the Empire.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | International Organization Modifier |
| **Holy Roman Figurehead** The [GetUniqueInternationalOrganization('hre').GetLeaderTitle] is no longer a monarch with power within the Holy Roman Empire. All laws and policies are now in the hands of the Imperial Diet and the Prince-Elector. | * international\_organization\_has\_law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]] * hre\_can\_select\_adjacent\_reform\_level:   + law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]]   + policy: [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Holy Roman Figurehead]] * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_very\_friendly\_law | *  **−0.10** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_very\_friendly\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: prince\_very\_friendly * international\_organization\_unlock\_parliament\_issue\_effect:   + type: hre\_force\_emperor\_to\_abdicate | * hre\_allow\_emperor\_reform\_proposals: True * international\_organization\_lock\_parliament\_issue\_effect:   + type: hre\_force\_emperor\_to\_abdicate |  |
| **Kaisertum** The power held by the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] is carefully balanced: strong enough to protect and reform the Holy Roman Empire, yet not so overwhelming as to threaten our Prince-Elector or member states. | * international\_organization\_has\_law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]] * hre\_can\_select\_adjacent\_reform\_level:   + law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]]   + policy: [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Kaisertum]] * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |  | *  Enable Imperial Ban: **yes** |
| **Improved Imperial Authority** The authority of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] is vastly expanded, allowing them to enforce policies in the Imperial Diet for the betterment of the Holy Roman Empire. | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * hre\_num\_of\_emperor\_comfort\_policies\_active:   + value: 2 * hre\_can\_select\_adjacent\_reform\_level:   + law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]]   + policy: [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Improved Imperial Authority]] * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_controversial\_law | *  **+0.50** Diplomatic Reputation *  **+0.02** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_controversial\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |  | *  Enable Imperial Ban: **yes** *  Can Overrule the Imperial Diet: **yes** |
| **Revoke Privilegia** The many liberties and privileges granted to the Imperial Princes are hereby abolished. The [GetUniqueInternationalOrganization('hre').GetLeaderTitle] shall centralize authority, turning the Holy Roman Empire into a unified entity under singular rule. | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * international\_organization\_has\_law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]] * hre\_num\_of\_emperor\_comfort\_policies\_active:   + value: 5 * hre\_can\_select\_adjacent\_reform\_level:   + law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]]   + policy: [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Revoke Privilegia]] * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law | *  **+0.10** Monthly Prestige *  **+0.10** Monthly Imperial Authority *  **+1.00** Diplomatic Reputation | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * leader\_country:   + trigger\_event\_non\_silently:     - id: hre.100 |  | *  Enable Imperial Ban: **yes** *  Can Overrule the Imperial Diet: **yes** |
| **Renovatio Imperii** Decentralization in the Holy Roman Empire is no more. The entire Empire shall be united into a single nation-state, which will shape the fate of the world itself! | * trigger\_if:   + limit:     - international\_organization:hre:       * has\_variable: hre\_emperor\_cannot\_change\_policies   + custom\_tooltip:     - text: hre\_allowed\_emperor\_reform\_proposals\_tt     - international\_organization:hre:       * Not:         + has\_variable: hre\_emperor\_cannot\_change\_policies * international\_organization\_has\_law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]] * hre\_num\_of\_emperor\_comfort\_policies\_active:   + value: 5 * hre\_can\_select\_adjacent\_reform\_level:   + law: [![Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/thumb.php?f=Power_of_the_emperor_law.png&width=32)](/Law#Power_of_the_[GetUniqueInternationalOrganization('hre').GetLeaderTitle] "Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]") [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]]]   + policy: [[Law#Power of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]|Renovatio Imperii]] * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_rebellious\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_rebellious\_law * leader\_country:   + trigger\_event\_non\_silently:     - id: hre.102 |  | *  Enforced Internal Peace: yes *  Enable Imperial Ban: **yes** *  Can Overrule the Imperial Diet: **yes** |
### Electorate Laws
#### Imperial Succession
The succession of the Holy Roman Empire is a delicate matter. The right of succession to the Imperial Throne is prescribed in the Imperial Laws.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Imperial Succession](/Law#Imperial_Succession "Law")
  + hre\_has\_locked\_law:
    - law: imperial\_succession\_law
| Policy | Requirements | On Activate | International Organization Modifier |
| **Agnatic Succession** The Imperial Crown of the Holy Roman Empire can only be worn by male rulers. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * custom\_tooltip:   + text: hre\_agnatic\_succession\_policy\_custom\_tooltip |  |
| **Pragmatic Sanction** The gender of our ruler is irrelevant. Female rulers may wear the Imperial Crown of the Holy Roman Empire as rightfully as their male counterparts. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law * leader\_country:   + heir:     - is\_female: True | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * custom\_tooltip:   + text: hre\_pragmatic\_sanction\_policy\_opinion\_impact   + every\_international\_organization\_member:     - limit:       * Not:         + this: root.leader\_country       * At least one of:         + succession\_law: heir\_selection:partition\_inheritance         + succession\_law: heir\_selection:salic\_law     - add\_opinion:       * target: root.leader\_country       * modifier: opinion\_hre\_passed\_opposed\_law | *  Allow Empresses: **yes** |
#### Imperial Voting
The Holy Roman Empire is built upon the principle of Imperial election. The nature of that election defines the balance of power in the Empire.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | International Organization Modifier | Leader Change Method |
| **Rotating Emperorship** To prevent any single ruler from consolidating power, the Empire enforces a rotation system that actively discourages re-election of incumbents. | * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Voting](/Law#Imperial_Voting "Law")   + policy: [Rotating Emperorship](/Law#Imperial_Voting "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_friendly\_law | *  **−200.00** Reasons to Elect *  **−0.025** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_friendly\_law |  | *  −1 Emperor-Comfort Policies |  |
| **Free Electorate** Electors are fully independent in choosing the next Emperor. Self-voting is permitted. | * international\_organization\_has\_law:  [Imperial Voting](/Law#Imperial_Voting "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Voting](/Law#Imperial_Voting "Law")   + policy: [Free Electorate](/Law#Imperial_Voting "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_friendly\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_friendly\_law |  | *  Allow Self Voting: **yes** |  |
| **Emperor Dynastic Preference** Electors favor candidates belonging to the Emperor's dynasty, consolidating dynastic power over the electoral system. | * international\_organization\_has\_law:  [Imperial Voting](/Law#Imperial_Voting "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Voting](/Law#Imperial_Voting "Law")   + policy: [Emperor Dynastic Preference](/Law#Imperial_Voting "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_uncontroversial\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_uncontroversial\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |  | *  Allow Self Voting: **yes** |  |
| **Emperor Successor Preference** The Emperor promotes the candidacy of their own successor. Imperial policy begins to favor dynastic continuity. | * international\_organization\_has\_law:  [Imperial Voting](/Law#Imperial_Voting "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Voting](/Law#Imperial_Voting "Law")   + policy: [Emperor Successor Preference](/Law#Imperial_Voting "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law | *  **+50.00** Reasons to Elect *  **+0.02** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: opposed |  |  |  |
| **Erbkaisertum** The elective monarchy is abolished. The Empire becomes a fully hereditary monarchy, solidifying dynastic rule at the cost of Imperial legitimacy. | * international\_organization\_has\_law:  [Imperial Voting](/Law#Imperial_Voting "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Voting](/Law#Imperial_Voting "Law")   + policy: [Erbkaisertum](/Law#Imperial_Voting "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law | *  **−0.05** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * hre\_lock\_law:   + law: electorate\_organization\_law * hre\_lock\_law:   + law: electorate\_religion\_law * hre\_lock\_law:   + law: imperial\_succession\_law * hre\_enact\_fixed\_succession: True * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: opposed | * hre\_unlock\_law:   + law: electorate\_organization\_law * hre\_unlock\_law:   + law: electorate\_religion\_law * hre\_unlock\_law:   + law: imperial\_succession\_law * hre\_repeal\_fixed\_succession:   + policy: emperor\_successor\_preference\_policy | *  Allow Self Voting: **yes** *  +1 Emperor-Comfort Policies | none |
#### Electorate Organization
The Prince-Elector are a group of powerful Nobility and Clergy who have the privilege to vote for their next [GetUniqueInternationalOrganization('hre').GetLeaderTitle].
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Electorate Organization](/Law#Electorate_Organization "Law")
  + hre\_has\_locked\_law:
    - law: electorate\_organization\_law
| Policy | Requirements | Country Modifier | On Activate | On Deactivate |
| **Elector Council** The Prince-Elector are at their peak of their power as they expand their ranks by three additional seats, and also add three additional Archbishop-Elector. Additionally, they gain the right to elect an Anti-King who can replace the current [GetUniqueInternationalOrganization('hre').GetLeaderTitle] in the Imperial Diet if left unchallenged. This gives the Electors the de facto power to force a re-election of the current [GetUniqueInternationalOrganization('hre').GetLeaderTitle]. | * international\_organization\_has\_law:  [Electorate Organization](/Law#Electorate_Organization "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Electorate Organization](/Law#Electorate_Organization "Law")   + policy: [Elector Council](/Law#Electorate_Organization "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_very\_friendly\_law | *  **−0.10** Monthly Imperial Authority *  Excluded from Electorship: **yes** | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_friendly\_law * hre\_clear\_emperor\_from\_electorship: True * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: prince\_very\_friendly * international\_organization\_unlock\_parliament\_issue\_effect:   + type: hre\_force\_emperor\_to\_abdicate | * international\_organization\_lock\_parliament\_issue\_effect:   + type: hre\_force\_emperor\_to\_abdicate |
| **Expanded Electors** The Prince-Elector expand their ranks by two additional seats, and also add two additional Archbishop-Elector. Only significant promises and pledges can earn the favor of an Prince-Elector. | * international\_organization\_has\_law:  [Electorate Organization](/Law#Electorate_Organization "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Electorate Organization](/Law#Electorate_Organization "Law")   + policy: [Expanded Electors](/Law#Electorate_Organization "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_friendly\_law | *  Excluded from Electorship: **yes** *  **−0.05** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_friendly\_law * hre\_clear\_emperor\_from\_electorship: True * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: prince\_friendly |  |
| **Electorate** The Prince-Elector expand their ranks by one additional Prince-Elector and one additional Archbishop-Elector. Additionally, earning an Prince-Elector's vote is reliant than ever on pledges and promises. | * international\_organization\_has\_law:  [Electorate Organization](/Law#Electorate_Organization "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Electorate Organization](/Law#Electorate_Organization "Law")   + policy: [Electorate](/Law#Electorate_Organization "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_uncontroversial\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_uncontroversial\_law |  |
| **Limited Electors** The number of Prince-Elector is limited to seven. Votes for Emperorship can be favored, though pledges and promises are a powerful and reliable tool to win an Prince-Elector's vote. | * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Electorate Organization](/Law#Electorate_Organization "Law")   + policy: [Limited Electors](/Law#Electorate_Organization "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_controversial\_law | *  Can Revoke Electorship: **yes** | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_controversial\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |  |
| **Integrated Electors** The Prince-Elector are curtailed, and one of their voting rights is transferred to the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]. | * international\_organization\_has\_law:  [Electorate Organization](/Law#Electorate_Organization "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Electorate Organization](/Law#Electorate_Organization "Law")   + policy: [Integrated Electors](/Law#Electorate_Organization "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law | *  Is Elector: **yes** *  Can Revoke Electorship: **yes** | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: opposed * custom\_tooltip:   + text: integrated\_electors\_policy\_tt   + if:     - limit:       * num\_countries\_with\_special\_status(special\_status:elector) ≥ max\_countries\_with\_special\_status(special\_status:elector)     - ordered\_country\_with\_special\_status\_of\_type:       * type: elector       * order\_by:         + value: country\_economical\_base         + multiply: -1       * check\_range\_bounds: False       * max: 1       * root:         + international\_organization\_remove\_special\_status:           - type: special\_status:elector           - country: prev       * if:         + limit:           - root:             * international\_organization\_has\_leader: True         + add\_opinion:           - target: root.leader\_country           - modifier: opinion\_rescinded\_electorship   + if:     - limit:       * num\_countries\_with\_special\_status(special\_status:archbishop\_elector) ≥ max\_countries\_with\_special\_status(special\_status:archbishop\_elector)     - ordered\_country\_with\_special\_status\_of\_type:       * type: archbishop\_elector       * order\_by:         + value: country\_economical\_base         + multiply: -1       * check\_range\_bounds: False       * max: 1       * root:         + international\_organization\_remove\_special\_status:           - type: special\_status:archbishop\_elector           - country: prev       * if:         + limit:           - root:             * international\_organization\_has\_leader: True         + add\_opinion:           - target: root.leader\_country           - modifier: opinion\_rescinded\_electorship |  |
#### Secularization of the Electorate
Traditionally the Electorate is split between the Prince-Elector and the Archbishop-Elector. In case political dynamics threaten the lands of the Archbishop-Elector, the empire might consider a full secularization of their positions.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Electorate Organization](/Law#Electorate_Organization "Law")
  + hre\_has\_locked\_law:
    - law: electorate\_organization\_law
| Policy | Requirements | Country Modifier | On Activate |
| **Traditional Electorate** The Electorate of the Holy Roman Empire remains split between Prince-Elector and Archbishop-Elector. | * international\_organization\_has\_law:  [Electorate Organization](/Law#Electorate_Organization "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Electorate Organization](/Law#Electorate_Organization "Law")   + policy: [Elector Council](/Law#Electorate_Organization "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_friendly\_law | *  **+0.005** Monthly Imperial Authority | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_friendly\_law |
| **Secularized Electorate** The previous positions of the Archbishop-Elector have been fully secularized. | * international\_organization\_has\_law:  [Electorate Organization](/Law#Electorate_Organization "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Electorate Organization](/Law#Electorate_Organization "Law")   + policy: [Expanded Electors](/Law#Electorate_Organization "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |
### Free City Laws
#### Free Cities
The Free Cities of the Holy Roman Empire are self-ruling cities with autonomy. They are usually where Imperial Diet meetings are held.
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | International Organization Modifier |
| **Free Cities Abolished** The Free Imperial Cities are no more. No town or city will be under the protection of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]. | * international\_organization\_has\_law:  [Free Cities](/Law#Free_Cities "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Free Cities](/Law#Free_Cities "Law")   + policy: [Free Cities Abolished](/Law#Free_Cities "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_very\_friendly\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_very\_friendly\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: prince\_very\_friendly * hre\_disable\_free\_cities: True | * hre\_enable\_free\_cities: True |  |
| **Unprotected Free Cities** Free Cities no longer enjoy the protection of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] when defending themselves from ambitious princes. | * international\_organization\_has\_law:  [Free Cities](/Law#Free_Cities "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Free Cities](/Law#Free_Cities "Law")   + policy: [Unprotected Free Cities](/Law#Free_Cities "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_friendly\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_friendly\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: prince\_friendly * hre\_disable\_free\_cities\_protection: True | * hre\_enable\_free\_cities\_protection: True |  |
| **Free Cities** Free Cities are protected by the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] and enjoy extensive autonomy over facilitating trade in their markets. | * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Free Cities](/Law#Free_Cities "Law")   + policy: [Free Cities](/Law#Free_Cities "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | *  **+20.00%** Trade Capacity | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |  |  |
| **Cities of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]** Free Cities autonomy is limited by the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]. Though still capable of performing diplomacy of their own, the cities are now one step closer to becoming part of the administration of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]. | * international\_organization\_has\_law:  [Free Cities](/Law#Free_Cities "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Free Cities](/Law#Free_Cities "Law")   + policy: [Cities of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]](/Law#Free_Cities "Law") * hre\_num\_of\_emperor\_comfort\_policies\_active:   + value: 1 * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_controversial\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_controversial\_law * hre\_enable\_free\_city\_subjects: True * if:   + limit:     - exists: leader\_country   + hidden\_effect:     - save\_temporary\_scope\_value\_as:       * name: average\_free\_city\_antagonism       * value: 0     - save\_temporary\_scope\_value\_as:       * name: antagonism\_bomb\_members       * value: 0     - every\_country\_with\_special\_status\_of\_type:       * type: free\_city       * root.leader\_country:         + save\_temporary\_scope\_value\_as:           - name: average\_free\_city\_antagonism           - value:             * value: scope:average\_free\_city\_antagonism             * add:               + value: bias\_value(antagonism\_broke\_subject\_union)               + multiply:                 - value: prev.country\_economical\_base                 - divide: 2000         + save\_temporary\_scope\_value\_as:           - name: antagonism\_bomb\_members           - value:             * value: scope:antagonism\_bomb\_members             * add: 1     - save\_temporary\_scope\_value\_as:       * name: average\_free\_city\_antagonism       * value:         + value: scope:average\_free\_city\_antagonism         + if:           - limit:             * scope:antagonism\_bomb\_members > 0           - divide: scope:antagonism\_bomb\_members   + if:     - limit:       * exists: scope:average\_free\_city\_antagonism     - custom\_tooltip: free\_city\_subjugation\_antagonism\_tt | * hre\_disable\_free\_city\_subjects: True |  |
| **Direct Imperial Cities** Free Cities are now under the direct administration of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]. With heavily limited autonomy, the city-states are de facto outposts within the Holy Roman Empire for the Imperial Crown. | * international\_organization\_has\_law:  [Free Cities](/Law#Free_Cities "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Free Cities](/Law#Free_Cities "Law")   + policy: [Direct Imperial Cities](/Law#Free_Cities "Law") * hre\_num\_of\_emperor\_comfort\_policies\_active:   + value: 2 * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * hre\_enable\_direct\_free\_city\_subjects: True * if:   + limit:     - exists: leader\_country   + hidden\_effect:     - save\_temporary\_scope\_value\_as:       * name: average\_free\_city\_antagonism       * value: 0     - save\_temporary\_scope\_value\_as:       * name: antagonism\_bomb\_members       * value: 0     - every\_country\_with\_special\_status\_of\_type:       * type: free\_city       * root.leader\_country:         + save\_temporary\_scope\_value\_as:           - name: average\_free\_city\_antagonism           - value:             * value: scope:average\_free\_city\_antagonism             * add:               + value: bias\_value(antagonism\_broke\_subject\_union)               + multiply:                 - value: prev.country\_economical\_base                 - divide: 2000         + save\_temporary\_scope\_value\_as:           - name: antagonism\_bomb\_members           - value:             * value: scope:antagonism\_bomb\_members             * add: 1     - save\_temporary\_scope\_value\_as:       * name: average\_free\_city\_antagonism       * value:         + value: scope:average\_free\_city\_antagonism         + if:           - limit:             * scope:antagonism\_bomb\_members > 0           - divide: scope:antagonism\_bomb\_members   + if:     - limit:       * exists: scope:average\_free\_city\_antagonism     - custom\_tooltip: free\_city\_subjugation\_antagonism\_tt | * hre\_disable\_direct\_free\_city\_subjects: True | *  +1 Emperor-Comfort Policies |
#### Free City Rights
Obtaining the status of a Free Imperial City is not easy. This exclusive title must be conferred by the [GetUniqueInternationalOrganization('hre').GetLeaderTitle].
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
* custom\_tooltip:
  + text: hre\_enabled\_free\_cities\_tt
  + Not:
    - has\_variable: hre\_disabled\_free\_cities
| Policy | Requirements | On Activate |
| **Only Germanic Free Cities** The Holy Roman Empire is first and foremost German, and the privilege of a Free Imperial City reflects this reality. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | * custom\_tooltip: german\_free\_cities\_only\_policy\_at |
| **Brethren-Cultured Free Cities** The Empire has a long history with the Netherlandish, Swiss, and Italian. This justifies allowing non-German states to receive the desired Free Imperial City status. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | * custom\_tooltip: german\_and\_german\_adjacent\_free\_cities\_policy\_at |
| **Indiscriminate Free City Rights** The status of a Free Imperial City is no longer tied to geography or culture. Every nation who wishes to may petition the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] for this title. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | * custom\_tooltip: empire\_wide\_free\_cities\_policy\_at |
### Military Laws
#### Imperial Register
The Imperial Register is a list that specifies the exact number of troops each estate must supply to the [GetUniqueInternationalOrganization('hre').GetLeaderTitle].
Potential
* international\_organization\_type: international\_organization\_type:hre
* custom\_tooltip:
  + text: hre\_has\_enabled\_all\_imperial\_laws\_tt
  + international\_organization:hre:
    - has\_variable: hre\_enabled\_all\_imperial\_laws
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
| Policy | Requirements | Country Modifier | On Activate | Manpower | International Organization Modifier |
| **No Military Contribution** None of the estates are obligated to provide the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] with additional troops. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_prince\_friendly\_law * international\_organization\_has\_law:  [Imperial Register](/Law#Imperial_Register "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Register](/Law#Imperial_Register "Law")   + policy: [No Military Contribution](/Law#Imperial_Register "Law") |  | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_prince\_friendly\_law |  |  |
| **Imperial Armory Implementation** The [GetUniqueInternationalOrganization('hre').GetLeaderTitle] gains the privilege to construct Imperial Armory (Abroad) within the lands of the Empire. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law * international\_organization\_has\_law:  [Imperial Register](/Law#Imperial_Register "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Register](/Law#Imperial_Register "Law")   + policy: [Imperial Armory Implementation](/Law#Imperial_Register "Law") * custom\_tooltip:   + text: has\_enabled\_hre\_treasury\_tt   + has\_enabled\_currency: gold | *  **+5** Max Manpower | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |  |  |
| **Expansion of the Armories** Every Imperial Armory (Abroad) shall gain extra resources in order to expand the amount of possible soldiers recruited for the Empire. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law * international\_organization\_has\_law:  [Imperial Register](/Law#Imperial_Register "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Register](/Law#Imperial_Register "Law")   + policy: [Expansion of the Armories](/Law#Imperial_Register "Law") * custom\_tooltip:   + text: has\_enabled\_hre\_treasury\_tt   + has\_enabled\_currency: gold | *  **+7.5** Max Manpower | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |  | *  **+1** Imperial Army Building Available Level |
| **Imperial Standing Army** With further expansion of available resources for the Imperial Armory (Abroad), the [Manpower](/Manpower "Manpower") from the Empire shall allow the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] to create a proper, standing army. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_controversial\_law * international\_organization\_has\_law:  [Imperial Register](/Law#Imperial_Register "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Register](/Law#Imperial_Register "Law")   + policy: [Imperial Standing Army](/Law#Imperial_Register "Law") * custom\_tooltip:   + text: has\_enabled\_hre\_treasury\_tt   + has\_enabled\_currency: gold | *  **+10** Max Manpower | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_controversial\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |  | *  **+2** Imperial Army Building Available Level |
| **Great Imperial Army** The final legislative level for Imperial Armory (Abroad). Once enacted, the potential of the army under the direct control of the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] will reach a never-before-seen height. | * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law * international\_organization\_has\_law:  [Imperial Register](/Law#Imperial_Register "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Register](/Law#Imperial_Register "Law")   + policy: [Great Imperial Army](/Law#Imperial_Register "Law") * custom\_tooltip:   + text: has\_enabled\_hre\_treasury\_tt   + has\_enabled\_currency: gold | *  **+0.2** Max Manpower | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: opposed |  | *  +1 Emperor-Comfort Policies *  **+3** Imperial Army Building Available Level |
### Religious Laws
#### Imperial Religion
The very foundations of the Holy Roman Empire are built on religious beliefs.
Potential
* international\_organization\_type: international\_organization\_type:hre
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Imperial Religion](/Law#Imperial_Religion "Law")
  + hre\_has\_locked\_law:
    - law: imperial\_religion
| Policy | Requirements | On Activate |
| **Imperial Religion - Catholicism** The virtues and values of traditional Catholicism dictate life within the Holy Roman Empire. | * international\_organization\_has\_law:  [Imperial Religion](/Law#Imperial_Religion "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_lock\_law:   + law: imperial\_religion * hre\_set\_imperial\_religion:   + type: religion   + value: catholic * hre\_bind\_voting\_to\_religion: True |
| **Imperial Religion - Lutheranism** The The Reformation has changed our views on religion forever, making way for Lutheranism to become the religion of the Empire. | * international\_organization\_has\_law:  [Imperial Religion](/Law#Imperial_Religion "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law  * religion:lutheran:   + is\_religion\_enabled: True | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_lock\_law:   + law: imperial\_religion * hre\_set\_imperial\_religion:   + type: religion   + value: lutheran * hre\_bind\_voting\_to\_religion: True |
| **Imperial Religion - Hussitism** The Western Schism has exposed the world to the Hussitism teachings which now dominate the Imperial life. | * international\_organization\_has\_law:  [Imperial Religion](/Law#Imperial_Religion "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law  * religion:hussite:   + is\_religion\_enabled: True | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_lock\_law:   + law: imperial\_religion * hre\_set\_imperial\_religion:   + type: religion   + value: hussite * hre\_bind\_voting\_to\_religion: True |
| **Imperial Religion - Calvinism** Our faith in Calvinism is strong, and should be a foundational part of the Empire from now on. It is therefore our sacred calling to follow Calvinism teachings. | * international\_organization\_has\_law:  [Imperial Religion](/Law#Imperial_Religion "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law  * religion:calvinist:   + is\_religion\_enabled: True | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_lock\_law:   + law: imperial\_religion * hre\_set\_imperial\_religion:   + type: religion   + value: calvinist * hre\_bind\_voting\_to\_religion: True |
| **Imperial Religion - Christianity** The finer matters of religion are no longer of such importance. All of Christianity shall be embraced as the religion of the Empire, no matter the sect. | * international\_organization\_has\_law:  [Imperial Religion](/Law#Imperial_Religion "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law  * At least one of:   + religion:lutheran:     - is\_religion\_enabled: True   + religion:hussite:     - is\_religion\_enabled: True   + religion:calvinist:     - is\_religion\_enabled: True | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_lock\_law:   + law: imperial\_religion * hre\_set\_imperial\_religion:   + type: religion\_group   + value: christian * international\_organization:hre:   + remove\_variable: hre\_imperial\_religion * hre\_bind\_voting\_to\_religion\_group: True |
#### Electorate Religious Law
Religion is a major pillar of the Holy Roman Empire for Emperors and Prince-Elector alike.
Potential
* international\_organization\_type: international\_organization\_type:hre
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
Locked
* custom\_description:
  + text: hre\_has\_locked\_law
  + subject:  [Electorate Religious Law](/Law#Electorate_Religious_Law "Law")
  + hre\_has\_locked\_law:
    - law: electorate\_religion\_law
| Policy | Requirements | On Activate |
| **Only Imperial Religion Group** Prince-Elector are free to adhere to whichever denominations of our state religion they prefer. This does not, however, condone heathenry, which will not be tolerated. | * international\_organization\_has\_law:  [Electorate Religious Law](/Law#Electorate_Religious_Law "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_lock\_law:   + law: electorate\_religion\_law * hre\_bind\_electorship\_to\_religion\_group: True |
| **Only Imperial Religion** Prince-Elector are required to follow the Imperial religion in order to maintain their status. | * international\_organization\_has\_law:  [Electorate Religious Law](/Law#Electorate_Religious_Law "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law * hre\_lock\_law:   + law: electorate\_religion\_law * hre\_bind\_electorship\_to\_religion: True |
### Socioeconomic Laws
#### Imperial Tax Law
The Holy Roman Empire requires gold to function like any other political entity. A series of tax laws can be applied to siphon gold from the members to ensure financial stability of the Empire.
Potential
* international\_organization\_type: international\_organization\_type:hre
Allow
* trigger\_if:
  + limit:
    - international\_organization:hre:
      * has\_variable: hre\_emperor\_cannot\_change\_policies
  + custom\_tooltip:
    - text: hre\_allowed\_emperor\_reform\_proposals\_tt
    - international\_organization:hre:
      * Not:
        + has\_variable: hre\_emperor\_cannot\_change\_policies
Locked
* hre\_has\_enabled\_all\_imperial\_laws: False
| Policy | Requirements | Country Modifier | On Activate | Gold | International Organization Modifier | Payments Implemented |
| **No Taxation** The empire is in no need of additional gold. Lifting the taxation burdens of its members allows the administration to focus on other tasks instead. | * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Tax Law](/Law#Imperial_Tax_Law "Law")   + policy: [No Taxation](/Law#Imperial_Tax_Law "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | *  **+5.00%** Efficiency of Our Cabinet | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |  |  |  |
| **Treasury Taxation** While the [GetUniqueInternationalOrganization('hre').GetLeaderTitle] can open their own coffers to solve many issues, a financial buffer in the form of a proper treasury would allow the current and future emperors to better finance internal affairs in the Holy Roman Empire. | * international\_organization\_has\_law:  [Imperial Tax Law](/Law#Imperial_Tax_Law "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Tax Law](/Law#Imperial_Tax_Law "Law")   + policy: [Treasury Taxation](/Law#Imperial_Tax_Law "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_standard\_law | *  **+0.05** Monthly Prestige | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_standard\_law |  | *  Unlock Contribute to Organization Treasury: **yes** | * imperial\_treasury\_contribution |
| **Direct Taxation** The Roman Month is not enough to cover the protection of the Holy Roman Empire. A new tax needs to be established which directly finances the [GetUniqueInternationalOrganization('hre').GetLeaderTitle]. | * international\_organization\_has\_law:  [Imperial Tax Law](/Law#Imperial_Tax_Law "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Tax Law](/Law#Imperial_Tax_Law "Law")   + policy: [Direct Taxation](/Law#Imperial_Tax_Law "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_controversial\_law | *  **+0.05** Monthly Prestige | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_controversial\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: controversial |  |  | * imperial\_contribution |
| **Imperial Taxation** Only the taxation of all our member states can sustain the financial challenges of the Holy Roman Empire. | * international\_organization\_has\_law:  [Imperial Tax Law](/Law#Imperial_Tax_Law "Law") * hre\_can\_select\_adjacent\_reform\_level:   + law:  [Imperial Tax Law](/Law#Imperial_Tax_Law "Law")   + policy: [Imperial Taxation](/Law#Imperial_Tax_Law "Law") * has\_currency\_to\_vote\_for\_law:   + value: imperial\_authority\_opposed\_law | *  **+0.10** Monthly Prestige | * hre\_on\_reform\_level\_passed\_effect:   + law\_imperial\_authority\_cost: imperial\_authority\_opposed\_law * hre\_on\_reform\_level\_passed\_opinion\_effect\_all\_members:   + strength: opposed |  | *  +1 Emperor-Comfort Policies *  Unlock Contribute to Organization Treasury: **yes** | * imperial\_contribution * imperial\_treasury\_contribution |
## Japanese Shogunate
### Administrative Laws
#### Clan Residence
There should be clear laws defining where the leaders of the different clans must reside, to properly keep the balance of power.
Potential
* international\_organization\_type: international\_organization\_type:japanese\_shogunate
Allow
* leader\_country:
  + at\_war: False
  + stability ≥ stability\_extreme\_bonus
* situation:nanbokuchou:
  + situation\_has\_ended: True
Requires Vote
:   
| Policy | Requirements | On Activate | On Pay Price |
| **Appointed Posts** The various clan leaders have specific posts appointed by the [GetUniqueInternationalOrganization('japanese\_shogunate').GetLeaderTitle], to whom they own their allegiance. This allows flexibility in how the country is administred. |  | * custom\_tooltip: enable\_grant\_shugo\_office\_tt * custom\_tooltip: enable\_revoke\_shugo\_office\_tt * custom\_tooltip: enable\_claim\_shugo\_office\_tt | * international\_organization:japanese\_shogunate.leader\_country:   + add\_stability: stability\_extreme\_penalty |
| **Established Domains** The clans have their own domains, to which they have hereditary rights. This will free the bureaucracy of the Japanese Shogunate and allow it to focus on more important tasks, but will also strengthen the power of the clans. |  | * custom\_tooltip: enable\_claim\_shugo\_office\_tt | * international\_organization:japanese\_shogunate.leader\_country:   + add\_stability: stability\_extreme\_penalty |
| **Sankin-kōtai** The Sankin-kōtai is a system where the vassals of the Japanese Shogunate alternate between the capital and their lands. When in the capital, they are naturally expected to display their wealth, and that financial burden should use up enough of their funds to prevent any mischief. | * Not:   + is\_situation\_active: situation:sengoku |  | * international\_organization:japanese\_shogunate.leader\_country:   + add\_stability: stability\_extreme\_penalty |
### Military Laws
#### Buke Shohatto
A series of edicts defining the proper behavior of the samurai. They are designed to inspire the samurai to improve themselves.
Potential
* international\_organization\_type: international\_organization\_type:japanese\_shogunate
* international\_organization\_has\_unlocked\_law\_trigger:
  + type: jap\_buke\_shohatto
Allow
* leader\_country:
  + at\_war: False
  + stability ≥ stability\_extreme\_bonus
Requires Vote
:   
| Policy | Country Modifier | On Pay Price |
| **Enforced Buke Shohatto** Our samurai have a clear model to follow for self-improvement, and they are obligated to abide by it. | *  +0.10 Monthly Progress to Quality *  +0.10 Monthly Progress to Aristocracy *  **+0.10** Monthly Army Tradition *  **−5.00%** Noble Estate Satisfaction Equilibrium | * international\_organization:japanese\_shogunate.leader\_country:   + add\_stability: stability\_extreme\_penalty |
| **Buke Shohatto Guidelines** The Buke Shohatto is considered a set of general guidelines rather than hard rules, and serves as a romantic ideal to emulate rather than a strict code to obey. | *  +0.10 Monthly Progress to Humanist *  +0.10 Monthly Progress to Decentralization *  **+10.00%** Cultural Tradition % *  **−5.00%** Peasant Estate Satisfaction Equilibrium | * international\_organization:japanese\_shogunate.leader\_country:   + add\_stability: stability\_extreme\_penalty |
### Socioeconomic Laws
#### Overseas Interaction
Japan has always had the luxury of being separated from other countries by the sea. This distance makes closing our borders to the outside world very easy.
Potential
* international\_organization\_type: international\_organization\_type:japanese\_shogunate
Allow
* leader\_country:
  + at\_war: False
  + stability ≥ stability\_extreme\_bonus
* situation:sengoku:
  + situation\_has\_ended: True
Requires Vote
:   
| Policy | Country Modifier | On Pay Price |
| **Sakoku** Free from outside influences, our territory is sure to improve its productivity and economic growth. | *  Foreigners Banned from Imports and Exports: **yes** *  **+40.00%** Stability Investment Efficiency *  +0.20 Monthly Progress to Inward | * international\_organization:japanese\_shogunate.leader\_country:   + add\_stability: stability\_extreme\_penalty |
| **Opened the Country** With our borders open to the world, both trade and new ideas can flow freely through through. | *  **−50.00%** Stability Investment Efficiency *  **+5.00%** Monthly Research Progress % | * international\_organization:japanese\_shogunate.leader\_country:   + add\_stability: stability\_extreme\_penalty |
## Jurchen Confederation
### Administrative Laws
#### Administration Law
This law defines the way our people will be administered.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **Tribal Administration** Administration will be handled at a tribal level, with each tribal leader making the decisions for their group. | *  +0.10 Monthly Progress to Unsinicized *  +0.10 Monthly Progress to Decentralization *  **+0.05** Monthly Tribal Cohesion *  **+2.50%** Estates Satisfaction Equilibrium | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty * custom\_tooltip:   + text: tribal\_administration\_policy\_tt   + every\_international\_organization\_member:     - change\_societal\_value:       * type: centralization\_vs\_decentralization       * value: societal\_value\_minor\_move\_to\_right | *  **10** *  **10** |
| **Sinicized Administration** Administration will be handled at a confederation level, with the leader directing our people. | *  +0.10 Monthly Progress to Centralization *  +0.10 Monthly Progress to Sinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty * custom\_tooltip:   + text: sinicized\_administration\_policy\_tt   + every\_international\_organization\_member:     - change\_societal\_value:       * type: centralization\_vs\_decentralization       * value: societal\_value\_minor\_move\_to\_left | *  **10** *  **10** |
#### Bureaucratic Law
This law lays out the legal framework employed by our bureaucracy.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **No Legal Framework** No legal framework will be set. | *  **−0.10** Monthly Tribal Cohesion *  **−10.00%** Expected Diplomatic Spending *  +0.10 Monthly Progress to Serfdom *  +0.10 Monthly Progress to Unsinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Basic Legal Framework** A basic framework will be set. | *  +0.05 Monthly Progress to Centralization *  **+5.00%** Proximity Efficiency | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Sinicized Legal Framework** A Chinese bureaucratic system will be set. | *  +0.10 Monthly Progress to Centralization *  +0.10 Monthly Progress to Sinicized *  +0.10 Monthly Progress to Free Subjects *  **+10.00%** Proximity Efficiency | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
#### Unification Law
States whether the tribes of the Confederation can either act independently, or be forced to submit to a central authority.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
* total\_members > 1
Requires Vote
:   
| Policy | Requirements | Time to implement | On Fully Activated | Price |
| **Bid for Unification** The time to unite our decentralized tribes under a central authority has come! By adopting a more sophisticated social framework, we can make a bid to unite all tribes under our Confederation. | * leader\_country:   +  [Centralization](/Societal_Value#Centralization "Societal Value") > 75   +  [Sinicized](/Societal_Value#Sinicized "Societal Value") > 75 | 5 years | * leader\_country:   + trigger\_event\_non\_silently: jurchen\_confederation\_events.17 * custom\_tooltip: will\_ask\_members\_to\_submit\_tt | *  **10** *  **10** |
| **Delegated Authority** Every local tribe of the confederation has its own authority, and can make decisions and operate independently. |  |  |  |  |
### Estate Laws
#### Court Etiquette Law
This law establishes which court etiquette rules will be applied.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **No Court Etiquette** No specific rules will be enforced at court. | *  **+20.00%** Court Spending Efficiency *  **+0.05** Monthly Tribal Cohesion *  +0.10 Monthly Progress to Unsinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Basic Court Etiquette** Basic rules will be enforced at court. | *  **+1.00** Diplomatic Reputation *  +0.05 Monthly Progress to Sinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Sinicized Court Etiquette** Rules inspired by the Chinese court will be enforced at ours. | *  +0.10 Monthly Progress to Sinicized *  **+10.00%** Middle Kingdom Tribute Received Modifier | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
### Socioeconomic Laws
#### Clan Taxation Law
This law defines the level of Taxation that will be applied to our people.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **No Tax Obligations** Our people will not be subject to taxation. | *  **−0.025%** Stability Decay *  +0.10 Monthly Progress to Unsinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Fair Tax Obligations** Our people will pay basic taxes. | *  **−0.01%** Stability Decay *  +0.05 Monthly Progress to Sinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Extensive Tax Obligations** Our people will pay normal taxes, plus additional taxes related to luxury articles. | *  **+3.00%** Tax Efficiency *  +0.10 Monthly Progress to Sinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
#### Formal Script Law
This law declares which script or writing system must be used to write official documentation.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Allow
* leader\_country:
  + tribal\_cohesion > 5
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **Mongolian Script** Mongolian script will be used. | *  +0.10 Monthly Progress to Traditionalist *  +0.10 Monthly Progress to Unsinicized *  **−5.00%** Pop Join Rebels Threshold | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty * custom\_tooltip:   + text: mongol\_script\_policy\_tt   + every\_international\_organization\_member:     - change\_societal\_value:       * type: traditionalist\_vs\_innovative       * value: societal\_value\_large\_move\_to\_left | *  **10** *  **10** |
| **Sinicized Writing** The Chinese system of writing will be used. | *  **+5.00%** Monthly Research Progress % *  +0.10 Monthly Progress to Sinicized *  +0.05 Monthly Progress to Centralization | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty * custom\_tooltip:   + text: sinicized\_script\_policy\_tt   + every\_international\_organization\_member:     - change\_societal\_value:       * type: centralization\_vs\_decentralization       * value: societal\_value\_move\_to\_left | *  **10** *  **10** |
#### Economic Law
This law defines the distribution of all crops grown in our settlements.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **Shared Crops** Settlements are encouraged to trade crops between them. | *  +0.10 Monthly Progress to Traditional Economy *  **+20.00%** Maximum RGO Size in Rural *  +0.10 Monthly Progress to Unsinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Decentralized Farming Villages** Settlements are meant to be self-sustaining. | *  +0.10 Monthly Progress to Traditional Economy *  +0.05 Monthly Progress to Sinicized *  **+10.00%** Max Rural Control | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Resource Extraction Bureaus** Distribution of crops between settlements will be carried out at the highest level. | *  **+0.20%** Monthly Prosperity in Urban Locations *  +0.10 Monthly Progress to Capital Economy *  +0.05 Monthly Progress to Centralization *  +0.10 Monthly Progress to Sinicized | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
#### Trade Relations Law
This law sets out constraints for trade partnerships.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **Restricted Clan Trade** Trade will be restricted to exchanges between clans. | *  **+10.00%** Market Protection *  +0.10 Monthly Progress to Unsinicized *  **+0.05** Monthly Tribal Cohesion | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Allow Foreign Exchanges** Trade will be free for our people. | *  +0.05 Monthly Progress to Sinicized *  **+10.00%** Maximum Tax for Burgher Estate | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Chinese Tribute** Trade with China will be allowed. | *  +0.10 Monthly Progress to Sinicized *  **+1.00%** Selling Efficiency *  **+500.00%** Trade Building Levels | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
#### Clan Diplomacy Law
This law describes how diplomacy will be handled by our people.
Potential
* international\_organization\_type: international\_organization\_type:jurchen\_confederation
Locked
* custom\_tooltip:
  + text: 5\_years\_cd
  + has\_cooldown: jurchen\_confederation\_law\_cooldown
Requires Vote
:   
| Policy | Country Modifier | Time to implement | On Activate | Price |
| **No Embassies** No embassies can be set anywhere. | *  +0.10 Monthly Progress to Unsinicized *  +0.10 Monthly Progress to Belligerent *  **+10.00%** Army Levy Size | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Clan Embassies** Clans will be allowed to carry out their own diplomatic actions. | *  +0.05 Monthly Progress to Sinicized *  **+20.00%** Diplomatic Capacity | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
| **Allow Chinese Embassies** Diplomatic actions will be carried out at the highest level, following Chinese rules. | *  +0.10 Monthly Progress to Sinicized *  +0.05 Monthly Progress to Centralization *  **−0.10** Monthly Tribal Cohesion | 5 years | * custom\_tooltip:   + text: jurchen\_confederation\_law\_cooldown\_tt   + add\_cooldown:     - type: jurchen\_confederation\_law\_cooldown     - years: 5 * leader\_country:   + if:     - limit:       * ruler\_or\_regent:         + has\_variable: difficult\_sinicization\_variable     - add\_tribal\_cohesion: tribal\_cohesion\_mild\_penalty     - add\_stability: stability\_mild\_penalty | *  **10** *  **10** |
## Lordship of Ireland
### Administrative Laws
#### Rule of Ireland
The shape of rule in Ireland can be as wild as the great Atlantic crashing against the craggy cliffs, or as steadfast as the bogs.
Potential
* international\_organization\_type: international\_organization\_type:lordship\_of\_ireland
Allow
* international\_organization:lordship\_of\_ireland.leader\_country:
  + religion:  [Catholicism](/Religion#Catholicism "Religion")
| Policy | Requirements | Country Modifier | On Activate |
| **Laudabiliter** Ireland was originally conquered by Anglo-Norman knights looking to seize some personal land and glory. However, the royal seat is impotent. |  | *  **−0.10** Monthly Religious Influence *  **−50.00%** Pop Assimilation Speed *  Can Use Lordship of Ireland Casus Belli: **yes** | * custom\_tooltip: lordship\_of\_ireland\_rule\_laudabiliter\_policy\_tt |
| **Statutes of Kilkenny** Ordinances enforcing continental customs in Ireland, through banning Celtic dress and intermarriage, to keep the settler community distinct and dominant. | * current\_age\_or\_later:   + age: age\_2\_renaissance * Not:   + scope:recipient:     - leader\_country:       * culture:         + has\_culture\_group: Celtic | *  Banned Saffron Shirts: **yes** *  **+50.00%** Pop Assimilation Speed *  Celtic Marriage Banned: **yes** |  |
| **Religious Ascendancy** We may enforce members of the Lordship to convert to our religion. | * current\_age\_or\_later:   + age: age\_4\_reformation | *  **−2.00** Tolerance of Heretical Beliefs *  **+2.00** Tolerance of the True Faith *  Banned Saffron Shirts: **yes** *  **+0.10** Pop Conversion Speed | * custom\_tooltip: lordship\_of\_ireland\_rule\_ascendancy\_policy\_tt |
## Middle Kingdom
### Administrative Laws
#### Provincial Governorship
The vastness of the Middle Kingdom is unparalleled. In order to effectively rule our massive holdings, we shall establish a system of provincial administrators.
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
Requires Vote
:   
| Policy | Requirements | On Activate | On Pay Price |
| **Curtailed Governors** Provincial governors only spread corruption and laziness. We must keep them on a short leash so that the authority of the central government is not diluted even in the most faraway regions. |  |  | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Established Provincial Governors** The position of provincial governor is prestigious, and very much in demand. Established governors with clearly assigned territory and administration duties will allow the cogs of our government to turn more smoothly. |  |  | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Zǒngdū** The territory of the Middle Kingdom is too vast for simple governors to handle. Let us establish the position of the Zǒngdū, a viceroy overseeing more than one province. They will be directing the provincial affairs as the [GetUniqueInternationalOrganization('middle\_kingdom').GetLeaderTitle]'s representative so that the less crucial matters do not have to be reported to the capital. |  |  | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **The Gǎitǔguīliú System** The native Chieftains in remote prefectures, also known as Tǔsī, are hereditary rulers of local minorities. These leaders might seem useful now and then due to their ties with the locals, but they have frequently proven to be a long-term risk to regional stability. By slowly replacing them with officials appointed by the central government, maintaining tranquillity on a regional level will become easier. |  | * international\_organization:middle\_kingdom:   + leader\_country:     - custom\_tooltip: unlock\_gaituguiliu\_tt | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000     - custom\_tooltip: unlock\_gaituguiliu\_tt |
| **Lǐfān Yuàn** To manage the numerous subjects and lesser states from outlying regions within and beyond the Imperial border, the Ministry of Rites is now deemed to be insufficient and inappropriate. We shall establish an office that focuses on dealing with them. | * international\_organization:middle\_kingdom:   + leader\_country:     - culture:       * has\_culture\_group: Jurchen |  | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
#### Tiānxià
The concepts of our territorial influence and expansion are guaranteed by our right to rule, which is granted by Heaven itself.
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
Requires Vote
:   
| Policy | On Activate | On Pay Price |
| **Expand the Tiānxià** The sovereignty of the Middle Kingdom and its right to rule shall remain undisputed so long as its divine duty is enforced. All those under Heaven are protected by the Dragon Throne, as various subjects bowing to it. | * international\_organization:middle\_kingdom:   + custom\_tooltip:     - text: chi\_have\_extra\_celestial\_governor\_tt | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Restrict the Tiānxià** Only the direct authority of the Middle Kingdom can be entrusted to rule all under Heaven. The Dragon Throne cannot belittle itself by delegating its authority to lesser countries. |  | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
### Military Laws
#### Jakūn Gūsa
Serving mainly as our military, the Eight Banners system also function as the basis of the organization of society in the Middle Kingdom. Their role should be clearly defined, so that they do not lose their focus.
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
* At least one of:
  + current\_age: age\_4\_reformation
  + current\_age: age\_5\_absolutism
  + current\_age: age\_6\_revolutions
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
  + culture:
    - has\_culture\_group: Jurchen
  + has\_advance: the\_eight\_banners
Requires Vote
:   
| Policy | On Pay Price |
| **Revise the Jakūn Gūsa** The Banner army has served us dutifully, delivering blows to our enemies and securing crucial victories. If we are to maintain their top form and discipline, we must reform and improve them, or they will be at risk of decadence. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Chinese Jakūn Gūsa** The Jakūn Gūsa served well when on the northern steppes, but as part of the Middle Kingdom they would need to be integrated into the Chinese system. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
### Socioeconomic Laws
#### Civil Registration
A system aimed at keeping track of all our subjects within our realm as a step towards improving the quality of life for all under our banner.
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
Requires Vote
:   
| Policy | On Pay Price |
| **Delegated Civil Registration** We will let our provincial governors control the registration process in their own provinces. This may result in a lack of efficiency, but they will feel their authority has been respected. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Centralized Civil Registration** The central government authority will take control of the registration process in order to improve efficiency, although the local governors will not like this appropriation of their duties. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
#### Tax Base System
Taxation is the basis of any country's economy. By establishing a proper taxation system throughout the Middle Kingdom, we can more effectively reap the wealth of our territories.
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
* current\_age: age\_4\_reformation
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + Has the  [Single Whip Law](/Government_reform#Single_Whip_Law "Government reform") Government Reform
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
* leader\_country.capital.market:
  + Not:
    - is\_import\_banned:  [Silver](/Goods#Silver "Goods")
Requires Vote
:   
| Policy | On Pay Price |
| **Rice-Based Tax** The traditional tax and currency standard for centuries, Rice, will continue to serve as the basis of our taxation system. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Single Whip Policy** By enacting the Single Whip Policy, we will establish Silver as the basis of our taxation system, enforcing that all financial obligations to the central government are paid in this precious metal. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
#### Cèfēng Tǐzhì
The tributary system has been present in the Middle Kingdom since its inception, as all nations around it dutifully recognize the authority of the [GetUniqueInternationalOrganization('middle\_kingdom').GetLeaderTitle].
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
Requires Vote
:   
| Policy | On Pay Price |
| **Free Cèfēng Tǐzhì** Countries will naturally recognize the superiority of the [GetUniqueInternationalOrganization('middle\_kingdom').GetLeaderTitle] and prostrate themselves before the Dragon Throne with their tribute, without the need for rules or regulations to that effect. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Codified Cèfēng Tǐzhì** A codified, hierarchical tributary system best serves the [GetUniqueInternationalOrganization('middle\_kingdom').GetLeaderTitle], as it makes it clear which states provide the greatest benefit to the Dragon Throne and therefore deserve commensurate rewards. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
#### Kējǔ Examination
The Imperial Examination system aims to identify the best and most educated candidates to serve in our bureaucracy. This will ensure that only the brightest minds in our nation are the ones turning the wheels of the administration, and thus that they turn smoothly.
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
Requires Vote
:   
| Policy | Requirements | On Activate | On Pay Price |
| **New Kējǔ Formats** This reform aims at refining the process behind the selection of candidates and potential bureaucrats during the Imperial Examination. Introducing new formats of tests and holding candidates to higher standards will certainly benefit our administration. |  | * international\_organization:middle\_kingdom:   + custom\_tooltip: new\_keju\_formats\_policy.tt | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Focus on Classics** The classical texts of Confucianism and Daoism have served as the basis of the Kējǔ Examination for centuries. Such historical traditions are not to be broken lightly. |  |  | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Direct Appointment** Being a learned individual does not necessarily mean that someone is apt for government work. Direct appointment of people suited for the task will be more efficient. |  | * custom\_tooltip: direct\_appointment.tt | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Introduce Martial Examination** The bureaucrats taking the Imperial exams shall not only be tested on their skills in statecraft, but on their archery and horsemanship as well. | * international\_organization\_has\_unlocked\_policy\_trigger:   + type: military\_examination |  | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
#### Outwards View
The Middle Kingdom has been expanding its power outwards since its inception, but external threats mean we require a certain degree of caution about who is able to enter its borders.
Potential
* international\_organization\_type: international\_organization\_type:middle\_kingdom
Allow
* has\_variable: celestial\_authority
* var:celestial\_authority > celestial\_authority\_very\_strong\_bonus
* leader\_country:
  + government\_power ≥ 25
* leader\_country:
  + gold:
    - GREATER\_THAN\_EQUAL:
      * value: this.monthly\_income\_trade\_and\_tax
      * multiply:
        + value: 6
        + add:
          - value: 1
          - multiply:
            * value: international\_organization:middle\_kingdom.total\_members
            * divide: 10
      * max: 100000
Requires Vote
:   
| Policy | On Pay Price |
| **Allow Trade** It is no mere coincidence that the Silk Road has been the source of much prosperity for the Middle Kingdom, for it is through trade and foreign exchange that a nation benefits. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
| **Hǎijìn** The seas and oceans bring trouble. Piracy, smuggling... sometimes even would-be usurpers hide themselves behind waves and tides. And yet, maritime trade also brings fortune and discovery. In order to let wealth and innovations flow freely into our great realm, we should establish Seaban regulations. | * change\_celestial\_authority:   + value: celestial\_authority\_very\_strong\_penalty * international\_organization:middle\_kingdom:   + leader\_country:     - add\_government\_power: government\_power\_ultimate\_penalty     - add\_gold:       * value: this.monthly\_income\_trade\_and\_tax       * multiply:         + value: -6         + add:           - value: -1           - multiply:             * value: international\_organization:middle\_kingdom.total\_members             * divide: 10       * min: -100000 |
## Multiple
### Military Laws
#### Mutual Defense
The policy outlining how members will defend each other in the event of war being declared.
Potential
* At least one of:
  + international\_organization\_type: international\_organization\_type:defensive\_league
  + international\_organization\_type: international\_organization\_type:jurchen\_confederation
  + international\_organization\_type: international\_organization\_type:tribal\_confederation
  + international\_organization\_type: international\_organization\_type:colonial\_federation
Allow
* always: True
| Policy | Requirements | Diplomatic Capacity Cost |
| **No Defense** Members will be not able to be called into defensive wars declared on other members. | * Not:   + international\_organization\_type: international\_organization\_type:defensive\_league |  |
| **Possible Defense** Members will be able to be called into defensive wars declared on other members, but do not have to accept. |  | possible\_defence\_upkeep\_cost |
| **Automatic Defense** Members will automatically be called into defensive wars declared on other members, but do not have to accept. |  | automatic\_defence\_upkeep\_cost |
| **Assured Defense** Members will automatically join in defensive wars declared on other members. |  | assured\_defence\_upkeep\_cost |
#### Mutual Offense
The policy outlining how members will support each other in the event of them declaring war against another country.
Potential
* At least one of:
  + international\_organization\_type: international\_organization\_type:foreign\_league\_balkan
  + international\_organization\_type: international\_organization\_type:foreign\_league\_france
  + international\_organization\_type: international\_organization\_type:foreign\_league\_hre
  + international\_organization\_type: international\_organization\_type:foreign\_league\_iberia
  + international\_organization\_type: international\_organization\_type:italian\_league\_1
  + international\_organization\_type: international\_organization\_type:italian\_league\_2
  + international\_organization\_type: international\_organization\_type:italian\_league\_3
  + international\_organization\_type: international\_organization\_type:jurchen\_confederation
  + international\_organization\_type: international\_organization\_type:tribal\_confederation
  + international\_organization\_type: international\_organization\_type:colonial\_federation
* trigger\_if:
  + limit:
    - At least one of:
      * international\_organization\_type: international\_organization\_type:foreign\_league\_balkan
      * international\_organization\_type: international\_organization\_type:foreign\_league\_france
      * international\_organization\_type: international\_organization\_type:foreign\_league\_hre
      * international\_organization\_type: international\_organization\_type:foreign\_league\_iberia
      * international\_organization\_type: international\_organization\_type:italian\_league\_1
      * international\_organization\_type: international\_organization\_type:italian\_league\_2
      * international\_organization\_type: international\_organization\_type:italian\_league\_3
  + situation:italian\_wars:
    - has\_variable: allow\_call\_members\_offensive\_wars\_variable
Allow
* trigger\_if:
  + limit:
    - At least one of:
      * international\_organization\_type: international\_organization\_type:foreign\_league\_balkan
      * international\_organization\_type: international\_organization\_type:foreign\_league\_france
      * international\_organization\_type: international\_organization\_type:foreign\_league\_hre
      * international\_organization\_type: international\_organization\_type:foreign\_league\_iberia
      * international\_organization\_type: international\_organization\_type:italian\_league\_1
      * international\_organization\_type: international\_organization\_type:italian\_league\_2
      * international\_organization\_type: international\_organization\_type:italian\_league\_3
  + situation:italian\_wars:
    - situation\_is\_active: True
    - custom\_tooltip:
      * text: iw\_the\_purge\_is\_in\_effect\_tt
      * has\_variable: allow\_call\_members\_offensive\_wars\_variable
* trigger\_else:
  + always: True
| Policy | Diplomatic Capacity Cost |
| **Assured Offense** Members will automatically join in offensive wars declared by other members. | assured\_offence\_upkeep\_cost |
| **Automatic Offense** Members will automatically be called into offensive wars declared by other members, but do not have to accept. | automatic\_offence\_upkeep\_cost |
| **Possible Offense** Members will be able to be called into offensive wars declared by other members, but do not have to accept. | possible\_offence\_upkeep\_cost |
| **No Offense** Members will be not able to be called into offensive wars declared by other members. |  |
## Sect
### Religious Laws
#### Main Philosophy
The main current of philosophy and teachings that form the core beliefs of a sect.
Potential
* international\_organization\_type: international\_organization\_type:sect
Locked
* always: True
| Policy |
| **Confucianism** Confucianism is a philosophy developed from the teachings of Confucius, or Kǒng Fūzǐ, emphasizing social harmony and the righteousness of government institutions. |
| **Daoism** Daoism is a philosophy emphasizing living in harmony with the *Dào*, the living force of the universe, and the concept of *Wúwéi*, or 'action with no-action'. |
| **Pure Land Buddhism** Pure Land Buddhism is one of the most followed schools of East Asian Buddhism, and is centered around the idea of achieving rebirth in a Buddha's Pure Land. The most common Pure Land is that of the Buddha Amitābha, and the most important teachings are the *Three Pure Land Sutras*. The principal form of practice is the mindfulness of the Buddha, via repeating the name of the Buddha as a form of recitation. |
| **Lotus School** The Lotus School, so named to honor the importance of the *Lotus Sutra*, is one of the earliest Buddhist schools developed in China. It emphasizes the doctrine of the *One Vehicle*, promoting an inclusive view and understanding of all Buddhist teachings. |
| **Dharma School** Called *Wéishí* or *Fǎxiàng* in China, and *Hossō* in Japan, the Dharma School tradition emerged from India and has had a profound influence on Eastern Buddhism. It focuses on idealism and the idea that reality is only consciousness, and emphasizes the practices of yoga and meditation. |
| **Flower Garland School** Taking its name from the *Flower Garland Sutra*, and called *Huáyán* in China, *Kegon* in Japan, and *Hwaeom* in Korea, Flower Garland School is one of the main Buddhist traditions developed in China. It emphasizes the doctrine of interpenetration, wherein all things exist in a state of mutual dependence and are simultaneously present within each other. |
| **Meditation School** The Meditation School was founded by Bodhidharma, according to tradition, and is called *Chán* in China, *Zen* in Japan, *Seon* in Korea and *Thiền* in Vietnam. Though meditation is a general practice in Buddhism, this school emphasizes its use as a means of achieving enlightenment, usually in a sitting position, but also while performing physical activities like martial arts. |
| **Mantra School** The Mantra School, called *Zhēnyán* in China and *Shingon* in Japan, focuses on the esoteric practices of Vajrayāna, especially those called the 'three mysteries': mudra, mantra, and mandala. Its practices have been very influential in the development of many other schools of Buddhism. |
| **Shugendō** Emerging as a syncretism of mixed practices from Buddhism, Shintō, and Onmyōdō, Shugendō aims for the achievement of supernatural powers via religious training in the mountains. Mountain worship and trekking are the main focuses of this sect, as well as other esoteric practices and rituals. |
| **Azhaliism** When Tantric Buddhist practices came into Yúnnán, they mixed with traditions of Chinese, Tibetan, and Burmese origin, creating a hybrdized faith. As such, Azhaliism has emerged as a relatively localized tradition, similar yet distinct from the other, bigger schools. |
| **Musok** Centered around the worship of deities and ancestral spirits, Musok beliefs have been present in Korea since before the introduction of Buddhism. Even after that, its beliefs, practices, and rituals continue to be an important part of the region's culture. |
| **Mūlasarvāstivāda** One of the earliest Buddhist schools in India, the traditions of Mūlasarvāstivāda have almost disappeared from most currents of Buddhism, only surviving in Tibetan Buddhism and in Indonesia. There, the first current to arrive was Hīnayāna, and the Mūlasarvāstivāda, together with Tantric Practices, became prominent during the Śrīvijaya Empire. |
| **Mahāvihāra** A center of Buddhist scholarship since the religion first arrived on the island, Sailan has developed its own tradition of Theravāda Buddhism. As such, it has been influential in the development and spread of Buddhism in other neighboring areas, especially since the start of the decline of Buddhism in mainland India. |
| **Burmese Buddhism** Although strongly influenced by the Mahāvihāra Buddhism of Sailan, other forms of Buddhism have spread around Burma. Eastern Buddhism and Theravāda traditions, as well as Hinduism and also some remnants of pre-Buddhism beliefs, have all blended together, giving rise to a particular flavor of Theravāda. While very similar to the one practiced in Sailan, this sect also incorporates many elements of Eastern Buddhism and other esoteric traditions. |
| **Lankavong** Many different forms of Buddhism have been present in the lands of Thai people for ages, from Chinese-influenced Eastern Buddhism to earlier Indian Buddhist traditions. Eventually, the Theravāda tradition from Sailan became the main school of thought, but influence from earlier traditions and even from Thai folk beliefs still remain. |
| **Khmer Buddhism** The first form of Buddhism that entered the Khmer area was Eastern Buddhism, with strong Tantric influence, which replaced the Hindu beliefs already present in the region. Over time, Theravāda replaced Eastern Buddhism, and a great shift was made towards monastic life. |
#### Tantric Practices
Vajrayāna, also called Tantric Buddhism or Esoteric Buddhism, is a form of Buddhism that incorporates many tantric, esoteric, and ritualistic practices. Its development has been strongly influenced by other religions, especially Hinduism.
Potential
* international\_organization\_type: international\_organization\_type:sect
* international\_organization\_has\_policy: [Tantric Practices](/Law#Tantric_Practices "Law")
Locked
* international\_organization\_has\_policy: [Tantric Practices](/Law#Tantric_Practices "Law")
| Policy |
| **Tantric Practices** Vajrayāna, also called Tantric Buddhism or Esoteric Buddhism, is a form of Buddhism that incorporates many tantric, esoteric, and ritualistic practices. Its development has been strongly influenced by other religions, especially Hinduism. |
| **No Tantric Practices** No Tantric Practices |
#### Sect School
The particular school of this sect, which may have some differences from mainstream of teachings.
Potential
* international\_organization\_type: international\_organization\_type:sect
* At least one of:
  + international\_organization\_has\_policy: [Nichiren](/Law#Sect_School "Law")
  + international\_organization\_has\_policy: [Nyingma School](/Law#Sect_School "Law")
  + international\_organization\_has\_policy: [Kadam School](/Law#Sect_School "Law")
  + international\_organization\_has\_policy: [Kagyu School](/Law#Sect_School "Law")
  + international\_organization\_has\_policy: [Sakya School](/Law#Sect_School "Law")
  + international\_organization\_has\_policy: [Jonang School](/Law#Sect_School "Law")
Locked
* always: True
| Policy |
| **Nichiren** Founded by the Buddhist monk Nichiren, most of its doctrine comes from the *Lotus Sutra*, but opposes any form of deviation from mainstream teachings, including esoteric practices and rituals. It dictates that one's actions and their consequences, not only meditation, affect the achievement of enlightenment. |
| **Jōdo Shinshū** A school of Pure Land Buddhism, it was founded by Shinran, a monk originally from the Tendai school. He became disillusioned and went to study the traditions of Pure Land Buddhism, eventually founding a new branch. Focusing on *Nenbutsu*, the recitation of the name of the Buddha, the expression *Namu Amida Butsu* has almost become synonymous with this school, used as a way of showing gratitude to the Buddha Amida. |
| **Nyingma School** The oldest school of Tibetan Buddhism, it contains unique teachings not seen in any other form of Buddhism. It considers *Dzogchen*, 'Great Perfection', the most direct path to enlightenment, prescribing this method above those advocated by other schools. However, it has been criticized by rival schools for lacking connection to later Indian tantric practices, as its texts derive from the first introduction of Buddhism into Tibet. |
| **Kadam School** Stressing compassion, study, and discipline, it attempts to create a comprehensive and systematic Mahāyāna Buddhist path to achieving enlightenment. It also has the objective of integrating laypeople into Buddhist daily life, while reserving tantric practices for advanced initiates. |
| **Kagyu School** The Kagyu School focuses on the *Mahāmudrā*, the 'Great Seal', which is the symbol of attaining knowledge or awareness of the intrinsic emptiness of reality. Although the school itself has diverged into multiple sub-schools, all with their own small differences of interpretation and practices, all recognize the Mahāmudrā. |
| **Sakya School** Originating in the Sakya Monastery, it focuses on *Lamdré*, a system of meditation with the maxim that the result of the practice is already intrinsically contained within the path. These teachings are contained in the tantra of *Hevajra*, and the school contains multiple tantric practices. |
| **Jonang School** The main practice of the Jonang School is the Kālacakra Tantra, and the school is a defender of the Shentong philosophy. In it, it holds that physical reality is empty of inherent existence, but in contrast ultimate reality — or Buddha-nature — is not. Buddha-nature is filled with its own innumerable awakened qualities. |
## Sikhism
### Administrative Laws
#### guru\_arjan Teachings
The teachings established by guru\_arjan.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_arjan
Locked
* At least one of:
  + international\_organization\_has\_policy: [Adi Granth](/Law#guru_arjan_Teachings "Law")
  + international\_organization\_has\_policy: [Holy Abode](/Law#guru_arjan_Teachings "Law")
  + international\_organization\_has\_policy: [Martyrdom](/Law#guru_arjan_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Adi Granth** A collection of hymns from past Gurū compiled by guru\_arjan that will serve as the basis for our holy scriptures. | *  **+10.00%** Institution Growth *  +0.025 Monthly Progress to Innovative |
| **Holy Abode** By enshrining the sacred scriptures inside the holy temples, we will turn them as the place of residence of Ik Onkar and a focus of pilgrimage for all Sikhism faithful. | *  **+10.00%** Cultural Influence % *  +0.025 Monthly Progress to Centralization |
| **Martyrdom** Our belief in Sikhism is strong, and we will not abandon it even under the threat of torture or even death. | *  **+5.00%** Army Morale *  +0.025 Monthly Progress to Defensive |
### Military Laws
#### guru\_hargobind Teachings
The teachings established by guru\_hargobind.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_hargobind
Locked
* At least one of:
  + international\_organization\_has\_policy: [Akal Takht](/Law#guru_hargobind_Teachings "Law")
  + international\_organization\_has\_policy: [Protection of the Poor](/Law#guru_hargobind_Teachings "Law")
  + international\_organization\_has\_policy: [Mīrī Pīrī](/Law#guru_hargobind_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Akal Takht** The 'Throne of the Timeless One' will serve as the unquestionable seat of power for our Gurū and Sikhism. | *  **+0.10** Monthly Devotion *  **+0.10** Monthly Legitimacy *  **+0.10** Monthly Republican Tradition *  +0.025 Monthly Progress to Aristocracy |
| **Protection of the Poor** The power of military should not be used to oppress and become a tyrant, but to protect the vulnerable from such tyrants. | *  **−0.025** Monthly War Exhaustion *  +0.025 Monthly Progress to Free Subjects |
| **Mīrī Pīrī** Only by combining temporal power and spiritual authority under the figure of the Gurū can Sikhism truly achieve its deserved glory. | *  **+2.50%** Discipline *  +0.025 Monthly Progress to Belligerent |
#### Khalsa
A warrior community tasked with the defense of Sikhism and its followers, its rules of conduct and initiation will set a standard for all the faithful.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_gobind\_singh
Requires Vote
:   
| Policy | Requirements | Country Modifier |
| **Guru Panth** The leadership of Sikhism would lay on the Khalsa as a whole, which would serve as its Gurū. |  | *  **+0.05** Monthly Army Tradition *  +0.025 Monthly Progress to Belligerent |
| **Khalsa Fauj** Only by organizing the military forces of the Khalsa into a mighty army will they will be able to serve their function as protectors of Sikhism. | * international\_organization\_has\_unlocked\_policy\_trigger:   + type: khalsa\_fauj | *  **−5.00%** Heavy Infantry Maintenance Cost *  +0.025 Monthly Progress to Quantity |
| **Amrit Sanskar** The members of the Khalsa are not just brutes thrown to fight, but refined individuals who uphold the rites of initiation and the rules of conduct and dress code placed upon them as members of the community. The prestige of the Khalsa is not on the might of its warriors but on the appeal of their purity. | * international\_organization\_has\_unlocked\_policy\_trigger:   + type: amrit\_sanskar | *  **+5.00%** Pop Conversion Speed % *  +0.025 Monthly Progress to Humanist |
### Religious Laws
#### guru\_nanak Teachings
The teachings established by guru\_nanak.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_nanak
Locked
* At least one of:
  + international\_organization\_has\_policy: [Vaṇḍ Chakō](/Law#guru_nanak_Teachings "Law")
  + international\_organization\_has\_policy: [Kirat Karō](/Law#guru_nanak_Teachings "Law")
  + international\_organization\_has\_policy: [Nām Japō](/Law#guru_nanak_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Vaṇḍ Chakō** Meaning 'share and consume', it is one of the pillars of guru\_nanak. It encourages the sharing of all that is available and the collective consume of it by the community. | *  **+10.00%** Estates Satisfaction Equilibrium *  +0.025 Monthly Progress to Communalism |
| **Kirat Karō** Meaning 'work honestly', it is one of the pillars of guru\_nanak. It means dedication and honestly to hard labor, as exercise of what Ik Onkar has given us. | *  **+5.00%** Production Efficiency |
| **Nām Japō** Meaning 'recite His name', it is one of the pillars of guru\_nanak. It means to meditate and contemplate the many names of Ik Onkar, to achieve connection with Him. | *  **+0.01** Stability Investment *  +0.025 Monthly Progress to Spiritualist |
#### guru\_angad Teachings
The teachings established by guru\_angad.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_angad
Locked
* At least one of:
  + international\_organization\_has\_policy: [Gurmukhī Script](/Law#guru_angad_Teachings "Law")
  + international\_organization\_has\_policy: [Langar Community](/Law#guru_angad_Teachings "Law")
  + international\_organization\_has\_policy: [Mall Akhāṛā](/Law#guru_angad_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Gurmukhī Script** A script developed and standardized by guru\_angad, it will become the primary scripture for Sikhism. | *  **+0.01%** Monthly Literacy *  +0.025 Monthly Progress to Innovative |
| **Langar Community** A communal kitchen attached to any temple, they will serve food freely to all people, regardless of their creed, status, or ethnicity. | *  **+10.00%** Food Production % *  +0.025 Monthly Progress to Communalism |
| **Mall Akhāṛā** Wrestling arenas for the people to practice will serve not only as a way to keep their bodies healthy, but also as an improvement of their martial prowess. | *  **+5.00%** Heavy Infantry Power *  +0.025 Monthly Progress to Land |
#### guru\_ram\_das Teachings
The teachings established by guru\_ram\_das.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_ram\_das
Locked
* At least one of:
  + international\_organization\_has\_policy: [Urbanization Projects](/Law#guru_ram_das_Teachings "Law")
  + international\_organization\_has\_policy: [Scripture Hymns](/Law#guru_ram_das_Teachings "Law")
  + international\_organization\_has\_policy: [Masand System](/Law#guru_ram_das_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Urbanization Projects** Through serious dedication and communal voluntary work, the holiest and most splendorous of Sikhism cities can be built. | *  **+0.0010** Monthly Development *  +0.025 Monthly Progress to Inward |
| **Scripture Hymns** The scripture is the holiest of books, and it has to be embellished by the appropriate hymns lauding its glory. | *  **+0.10** Monthly Prestige *  +0.025 Monthly Progress to Spiritualist |
| **Masand System** A system of missionaries and preachers, they will spread the Sikhism further away from the Gurū while serving as tax collectors at the same time. | *  **+5.00%** Pop Conversion Speed % *  +0.025 Monthly Progress to Outward |
#### guru\_gobind\_singh Teachings
The teachings established by guru\_gobind\_singh.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_gobind\_singh
Locked
* At least one of:
  + international\_organization\_has\_policy: [Sikhism Pluralism](/Law#guru_gobind_singh_Teachings "Law")
  + international\_organization\_has\_policy: [Dharamyudh](/Law#guru_gobind_singh_Teachings "Law")
  + international\_organization\_has\_policy: [Dasam Granth](/Law#guru_gobind_singh_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Sikhism Pluralism** While the Khalsa is intended to be the protector of Sikhism, not all the faithful are part of it. As such, it inherently proves there is pluralism inside the faith, and that is something that enriches us. | *  **+10.00%** Court Spending Efficiency *  +0.025 Monthly Progress to Plutocracy |
| **Dharamyudh** A 'war of righteousness' is any war that serves the purpose of defending Sikhism and its followers. War should be a last resort, but all must be ready to wage it to defend the faith and stop tyranny. | *  **−0.025** Monthly War Exhaustion *  +0.025 Monthly Progress to Spiritualist |
| **Dasam Granth** A collection of various texts of poetry composed by guru\_gobind\_singh, it is considered equal in status to the Adi Granth and it is enshrined next to it in the temples. | *  **+5.00%** Monthly Research Progress % *  +0.025 Monthly Progress to Innovative |
### Socioeconomic Laws
#### guru\_amar\_das Teachings
The teachings established by guru\_amar\_das.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_amar\_das
Locked
* At least one of:
  + international\_organization\_has\_policy: [Dasvandh Tax](/Law#guru_amar_das_Teachings "Law")
  + international\_organization\_has\_policy: [Ānada Kāraja](/Law#guru_amar_das_Teachings "Law")
  + international\_organization\_has\_policy: [Sangat Equality](/Law#guru_amar_das_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Dasvandh Tax** Meaning the 'tenth part', it is a system of revenue collection which establishes that a tenth of one's income should be donated in the name of the Gurū. | *  **+5.00%** Maximum Tax *  +0.025 Monthly Progress to Capital Economy |
| **Ānada Kāraja** Meaning 'act towards happiness', it is the wedding ceremony for Sikhism as defined by guru\_amar\_das. The hymns sung in it celebrate the union with the divine. | *  **+10.00%** Cultural Tradition % *  +0.025 Monthly Progress to Traditionalist |
| **Sangat Equality** Men an women are equal under Ik Onkar, and thus both are equally valid to be part of the Sangat monastic community, and even to lead it. | *  Gender Equality: **yes** *  +0.025 Monthly Progress to Humanist |
#### guru\_har\_rai Teachings
The teachings established by guru\_har\_rai.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_har\_rai
Locked
* At least one of:
  + international\_organization\_has\_policy: [Impartial Manji Heads](/Law#guru_har_rai_Teachings "Law")
  + international\_organization\_has\_policy: [Fragrance of a Flower](/Law#guru_har_rai_Teachings "Law")
  + international\_organization\_has\_policy: [Nature Guardian](/Law#guru_har_rai_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Impartial Manji Heads** The ones at the head of our many religious administrations should not show partiality towards any opinion, but serve dutifully the interests of Sikhism. | *  **−0.10%** Monthly Inflation *  +0.025 Monthly Progress to Decentralization |
| **Fragrance of a Flower** If one plucks a flower with one hand and gives it away with the other, both hands get the same fragrance. As such, no matter our different religious beliefs, we are all touched by the same divine spirit. | *  **+10.00%** Improve Relations *  +0.025 Monthly Progress to Conciliatory |
| **Nature Guardian** Our natural environment is not there to serve us, but for us to live in harmony with it. As such, we must protect it and provide for it as much as it provides for us. | *  **+0.50%** Prosperity Recovery *  +0.025 Monthly Progress to Communalism |
#### guru\_har\_krishan Teachings
The teachings established by guru\_har\_krishan.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_har\_krishan
Locked
* At least one of:
  + international\_organization\_has\_policy: [Treat the Sick](/Law#guru_har_krishan_Teachings "Law")
  + international\_organization\_has\_policy: [Unexpected Knowledge](/Law#guru_har_krishan_Teachings "Law")
  + international\_organization\_has\_policy: [Young Humility](/Law#guru_har_krishan_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Treat the Sick** Diseases and pestilence are the bane of humanity. We shall treat all sick people diligently, so that we can ensure a healthy society. | *  **+5%** Disease Resistance *  +0.025 Monthly Progress to Humanist |
| **Unexpected Knowledge** The spiritual powers of the Gurū are undeniable, as they have been said to have known truths and facts that they had no way of knowing through normal methods. At the same time, people apparently illiterate may be able to discuss theology with the most learned scholar. | *  **−10.00%** Embrace Institution Cost *  +0.025 Monthly Progress to Individualism |
| **Young Humility** No matter how much one has learned, there are always sources of knowledge outside of one's grasp, and people who have mastered them. Even the younger ones may harbor knowledge out of the understanding of the more senior minds. In this sense, all minds are like that of an infant. | *  **+5.00%** Max Literacy *  +0.025 Monthly Progress to Quality |
#### guru\_tegh\_bahadur Teachings
The teachings established by guru\_tegh\_bahadur.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: character:guru\_tegh\_bahadur
Locked
* At least one of:
  + international\_organization\_has\_policy: [Word of a Sikhism](/Law#guru_tegh_bahadur_Teachings "Law")
  + international\_organization\_has\_policy: [Gurū Travels](/Law#guru_tegh_bahadur_Teachings "Law")
  + international\_organization\_has\_policy: [Resist Persecution](/Law#guru_tegh_bahadur_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Word of a Sikhism** The solemn vow of a follower of Sikhism is to be understood as been made in the presence of Ik Onkar, and as such it should be unbreakable. | *  **+1.00** Diplomatic Reputation *  +0.025 Monthly Progress to Conciliatory |
| **Gurū Travels** If a Gurū stays only in one place, the message of Sikhism will not be able to spread. A Gurū must thus travel and have contact with foreign peoples and beliefs. | *  **+1.00** Tolerance of Heretical Beliefs *  +0.025 Monthly Progress to Outward |
| **Resist Persecution** Enemies of the true faith will always persecute the faithful, but our beliefs are strong and they will not be able to break us. | *  **+0.50%** Hostile Attrition *  +0.025 Monthly Progress to Defensive |
#### Guru Granth Sahib Teachings
The teachings established in the Guru Granth Sahib.
Potential
* international\_organization\_type: international\_organization\_type:sikhism
* exists: work\_of\_art:guru\_granth\_sahib
Locked
* At least one of:
  + international\_organization\_has\_policy: [Eternally Living Gurū](/Law#Guru_Granth_Sahib_Teachings "Law")
  + international\_organization\_has\_policy: [Divine Justice](/Law#Guru_Granth_Sahib_Teachings "Law")
  + international\_organization\_has\_policy: [Unchanging Writing](/Law#Guru_Granth_Sahib_Teachings "Law")
Requires Vote
:   
| Policy | Country Modifier |
| **Eternally Living Gurū** The Guru Granth Sahib is the final and sovereign eternal Gurū, which shall be the guiding light for all followers of Sikhism. | *  **+10.00%** Cultural Influence % *  +0.025 Monthly Progress to Outward |
| **Divine Justice** The teachings encoded in the Guru Granth Sahib guide our society to live in peace and harmony, based on Ik Onkar and His justice. | *  **+0.025%** Population Growth *  +0.025 Monthly Progress to Free Subjects |
| **Unchanging Writing** The Guru Granth Sahib was composed during the course of many years and by more than one Gurū, but it has now reached its definite and eternal form. Its writings shall no longer be altered in any way. | *  **+10.00%** Cultural Tradition % *  +0.025 Monthly Progress to Traditionalist |
## Swiss Confederation
### Administrative Laws
#### Internal Politics
While the Swiss Confederation is first and foremost a union for defensive purposes, it is clear that the internal affairs of the Confederation must be handled too.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
| Policy | On Activate |
| **Forbid Internal Wars** We cannot allow petty disputes to escalate into bloody conflicts. Every member of the Swiss Confederation shall state their issue with another member in front of the judges of the Confederation instead of on the battlefield. | * if:   + limit:     - Not:       * has\_variable: sc\_religious\_chaos     - Not:       * international\_organization\_has\_policy: [Enforce Religious Unity](/Law#Religious_Affairs "Law")   + custom\_tooltip: sc\_forbid\_internal\_wars\_tt * else:   + custom\_tooltip: sc\_forbid\_same\_religion\_internal\_wars\_tt |
| **Allow Internal Wars** Although generally not desirable, conflict is part of human nature, and it is through it that we get to grow stronger. |  |
#### Membership Regulation
The Swiss Confederation is an organization originally made by the Swiss people to defend themselves against the growing influence of the Habsburg in the local region. However, the rules who can join are never set in stone...
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
| Policy | On Activate |
| **Native Swiss Only** The confederation is a Swiss organization, and as such only those who are of its culture and geography are allowed to join. | * custom\_tooltip: sc\_swiss\_culture\_and\_geography\_tt |
| **Swiss Culture** The influence of the Swiss people is growing far beyond the historical area of the Swiss Confederation. Geographical limitations are no longer adequate, and as such the law needs reconsideration. | * custom\_tooltip: sc\_just\_swiss\_culture\_tt |
| **Relatives of the Swiss** The influence and power of the Swiss Confederation is projected not only by the Swiss people, but also those which we consider close relatives to our culture. | * custom\_tooltip: sc\_swiss\_or\_swiss\_relative\_tt |
### Centralization Laws
#### Swiss Unification
The Swiss lands have been splintered for far too long. If the people of the Alps wish to see prosperity and security, they have to unite under a single banner.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
Allow
* trigger\_if:
  + limit:
    - Not:
      * has\_global\_variable: sc\_unification\_movement\_event\_happened
  + custom\_tooltip:
    - text: sc\_unification\_movement\_event\_happened\_tt
    - has\_global\_variable: sc\_unification\_movement\_event\_happened
* international\_organization\_has\_policy: [Forbid Internal Wars](/Law#Internal_Politics "Law")
* trigger\_if:
  + limit:
    - Not:
      * At least one of:
        + international\_organization\_has\_policy: [Swiss Alliance](/Law#War_Politics "Law")
        + international\_organization\_has\_policy: [United War Efforts](/Law#War_Politics "Law")
  + At least one of:
    - international\_organization\_has\_policy: [Swiss Alliance](/Law#War_Politics "Law")
    - international\_organization\_has\_policy: [United War Efforts](/Law#War_Politics "Law")
* trigger\_if:
  + limit:
    - international\_organization\_has\_unlocked\_law\_trigger:
      * type: sc\_religious\_affairs
    - Neither of:
      * international\_organization\_has\_policy: [Mending the Schism](/Law#Religious_Affairs "Law")
      * All of:
        + international\_organization\_has\_policy: [Enforce Religious Unity](/Law#Religious_Affairs "Law")
        + At least one of:
          - any\_international\_organization\_member:
            * religion:  [Catholicism](/Religion#Catholicism "Religion")
            * count: all
          - any\_international\_organization\_member:
            * religion:  [Lutheranism](/Religion#Lutheranism "Religion")
            * count: all
          - any\_international\_organization\_member:
            * religion:  [Calvinism](/Religion#Calvinism "Religion")
            * count: all
  + At least one of:
    - international\_organization\_has\_policy: [Mending the Schism](/Law#Religious_Affairs "Law")
    - All of:
      * international\_organization\_has\_policy: [Enforce Religious Unity](/Law#Religious_Affairs "Law")
      * custom\_tooltip:
        + text: sc\_unification\_same\_religion\_tt
        + At least one of:
          - any\_international\_organization\_member:
            * religion:  [Catholicism](/Religion#Catholicism "Religion")
            * count: all
          - any\_international\_organization\_member:
            * religion:  [Lutheranism](/Religion#Lutheranism "Religion")
            * count: all
          - any\_international\_organization\_member:
            * religion:  [Calvinism](/Religion#Calvinism "Religion")
            * count: all
* trigger\_if:
  + limit:
    - exists: international\_organization:hre
    - international\_organization\_has\_unlocked\_law\_trigger:
      * type: sc\_relations\_with\_hre
    - Not:
      * international\_organization\_has\_law:  [Imperial Relations](/Law#Imperial_Relations "Law")
  + international\_organization\_has\_law:  [Imperial Relations](/Law#Imperial_Relations "Law")
| Policy | Requirements | On Activate |
| **Found the Swiss Republic** The principles and methods of the Swiss Confederation are well received as every Canton enjoys having their voices heard. Yet, the decentralized nature of the confederation will always endanger the safety and security of the Swiss people. It is time to unify the Confederation into a singular state while maintaining the Republic. | * trigger\_if:   + limit:     - international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law") | * hidden\_effect:   + remove\_global\_variable: sc\_unification\_movement\_event\_happened * if:   + limit:      - custom\_description:       * text: has\_valid\_policy\_vote\_proposer\_text       * has\_variable: io\_law\_proposer       * exists: var:io\_law\_proposer       * var:io\_law\_proposer exists   + var:io\_law\_proposer:     - custom\_tooltip:       * text: sc\_found\_swiss\_republic\_specific\_tt       * set\_variable: swi\_picked\_gov\_type\_republic       * trigger\_event\_silently: flavor\_swi.100 * else\_if:   + limit:     - international\_organization\_has\_leader: True   + leader\_country:     - custom\_tooltip:       * text: sc\_found\_swiss\_republic\_specific\_tt       * set\_variable: swi\_picked\_gov\_type\_republic       * trigger\_event\_silently: flavor\_swi.100 * else:   + custom\_tooltip: sc\_found\_swiss\_republic\_tt   + hidden\_effect:     - if:       * limit:         + any\_international\_organization\_member:           - is\_ai: False       * ordered\_international\_organization\_member:         + limit:           - is\_ai: False         + order\_by: total\_population         + max: 1         + check\_range\_bounds: False         + set\_variable: swi\_picked\_gov\_type\_republic         + trigger\_event\_silently: flavor\_swi.100     - else:       * ordered\_international\_organization\_member:         + order\_by: total\_population         + max: 1         + check\_range\_bounds: False         + set\_variable: swi\_picked\_gov\_type\_republic         + trigger\_event\_silently: flavor\_swi.100 |
| **Found the Swiss Monarchy** While it started as a republican union, the challenges the Swiss Confederation had to face have proven the superiority of a strong rule under a single Councillor. The future of the Swiss people can only be ensured under the authority of a proper Monarchy which shall replace the old Confederation. | * At least one of:   + international\_organization\_has\_leader: True   + custom\_description:     - text: has\_valid\_policy\_vote\_proposer\_text     - has\_variable: io\_law\_proposer     - exists: var:io\_law\_proposer     - var:io\_law\_proposer exists * trigger\_if:   + limit:     - Not:       * international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")   + international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law") * trigger\_else:   + international\_organization\_has\_policy: [Lifelong](/Law#Ruling_Period "Law")   + international\_organization\_has\_policy: [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|Absolute Power]] | * hidden\_effect:   + remove\_global\_variable: sc\_unification\_movement\_event\_happened * if:   + limit:      - custom\_description:       * text: has\_valid\_policy\_vote\_proposer\_text       * has\_variable: io\_law\_proposer       * exists: var:io\_law\_proposer       * var:io\_law\_proposer exists   + var:io\_law\_proposer:     - custom\_tooltip:       * text: sc\_found\_swiss\_monarchy\_specific\_tt       * set\_variable: swi\_picked\_gov\_type\_monarchy       * trigger\_event\_silently: flavor\_swi.100 * else\_if:   + limit:     - international\_organization\_has\_leader: True   + leader\_country:     - custom\_tooltip:       * text: sc\_found\_swiss\_monarchy\_specific\_tt       * set\_variable: swi\_picked\_gov\_type\_monarchy       * trigger\_event\_silently: flavor\_swi.100 * else:   + custom\_tooltip: sc\_found\_swiss\_monarchy\_tt |
| **Found the Swiss Theocracy** Neither the free will of the Republican votes nor the authoritarian power of a Monarchy has led the Swiss Confederation to the position it is now, but the will of the divine. Only as a unified Theocracy can the Swiss people prosper in this world. | * At least one of:   + international\_organization\_has\_leader: True   + custom\_description:     - text: has\_valid\_policy\_vote\_proposer\_text     - has\_variable: io\_law\_proposer     - exists: var:io\_law\_proposer     - var:io\_law\_proposer exists * trigger\_if:   + limit:     - Not:       * international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")   + international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law") * trigger\_else:   + international\_organization\_has\_policy: [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|Religious Power]] | * hidden\_effect:   + remove\_global\_variable: sc\_unification\_movement\_event\_happened * if:   + limit:      - custom\_description:       * text: has\_valid\_policy\_vote\_proposer\_text       * has\_variable: io\_law\_proposer       * exists: var:io\_law\_proposer       * var:io\_law\_proposer exists   + var:io\_law\_proposer:     - custom\_tooltip:       * text: sc\_found\_swiss\_theocracy\_specific\_tt       * set\_variable: swi\_picked\_gov\_type\_theocracy       * trigger\_event\_silently: flavor\_swi.100 * else\_if:   + limit:     - international\_organization\_has\_leader: True   + leader\_country:     - custom\_tooltip:       * text: sc\_found\_swiss\_theocracy\_specific\_tt       * set\_variable: swi\_picked\_gov\_type\_theocracy       * trigger\_event\_silently: flavor\_swi.100 * else:   + custom\_tooltip: sc\_found\_swiss\_theocracy\_tt |
### Election Laws
#### Policy Proposal Frequency
A law regulating the administration of law proposals within the Swiss Confederation.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
| Policy | International Organization Modifier |
| **Frequent Policy Proposals** Adjustment of laws and policies is a frequent act, and as such happens in Swiss Confederation on a base of every 4 years. | *  +4 Policy Vote Delay |
| **Moderate Policy Proposals** While a significant process, administrating the laws and policy proposals within the Swiss Confederation takes considerable effort, which allows law proposals only every 8 years. | *  +8 Policy Vote Delay |
#### Swiss Representative
Every kind of organization will require a spokesman - a representative - who shall be the face to the political entities inside and outside of the organization. The Swiss Confederation might pose an exception to this rule though...
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
| Policy | On Activate | On Deactivate | Leader Type |
| **Canton Representative** Some Cantons happen to be richer and more influential than others. As such, the Swiss Confederation shall be represented not by a man but by a city-state. | * hidden\_effect:   + if:     - limit:       * Not:         + international\_organization\_has\_law: [![[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power](/thumb.php?f=Sc_power_of_the_sovereign.png&width=32)](/Law#[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle]_Power "[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power") [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power]]     - add\_policy\_to\_international\_organization: [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|Representative Power]]   + if:     - limit:       * Not:         + international\_organization\_has\_law:  [Election Method](/Law#Election_Method "Law")     - add\_policy\_to\_international\_organization: [Lottery](/Law#Election_Method "Law")   + if:     - limit:       * Not:         + international\_organization\_has\_law:  [Ruling Period](/Law#Ruling_Period "Law")     - add\_policy\_to\_international\_organization: [Timed](/Law#Ruling_Period "Law")   + if:     - limit:       * All of:         + international\_organization\_has\_law:  [Ruling Period](/Law#Ruling_Period "Law")         + Not:           - international\_organization\_has\_law:  [Election Frequency](/Law#Election_Frequency "Law")     - add\_policy\_to\_international\_organization: [4-yearly Elections](/Law#Election_Frequency "Law")   + international\_organization\_chooses\_new\_leader: this | * hidden\_effect:   + remove\_law\_from\_international\_organization: [![[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power](/thumb.php?f=Sc_power_of_the_sovereign.png&width=32)](/Law#[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle]_Power "[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power") [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power]]   + remove\_law\_from\_international\_organization:  [Election Method](/Law#Election_Method "Law")   + remove\_law\_from\_international\_organization:  [Ruling Period](/Law#Ruling_Period "Law")   + remove\_law\_from\_international\_organization:  [Election Frequency](/Law#Election_Frequency "Law") | country |
| **Councillor Representative** The Cantons of the Swiss Confederation shall give up a bit of their influence to enact a single man to become the face of the Confederation. | * hidden\_effect:   + if:     - limit:       * Not:         + international\_organization\_has\_law: [![[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power](/thumb.php?f=Sc_power_of_the_sovereign.png&width=32)](/Law#[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle]_Power "[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power") [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power]]     - add\_policy\_to\_international\_organization: [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|Representative Power]]   + if:     - limit:       * Not:         + international\_organization\_has\_law:  [Election Method](/Law#Election_Method "Law")     - add\_policy\_to\_international\_organization: [Lottery](/Law#Election_Method "Law")   + if:     - limit:       * Not:         + international\_organization\_has\_law:  [Ruling Period](/Law#Ruling_Period "Law")     - add\_policy\_to\_international\_organization: [Timed](/Law#Ruling_Period "Law")   + if:     - limit:       * All of:         + international\_organization\_has\_law:  [Ruling Period](/Law#Ruling_Period "Law")         + Not:           - international\_organization\_has\_law:  [Election Frequency](/Law#Election_Frequency "Law")     - add\_policy\_to\_international\_organization: [4-yearly Elections](/Law#Election_Frequency "Law")   + international\_organization\_chooses\_new\_leader: this | * hidden\_effect:   + remove\_law\_from\_international\_organization: [![[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power](/thumb.php?f=Sc_power_of_the_sovereign.png&width=32)](/Law#[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle]_Power "[GetUniqueInternationalOrganization('swiss_confederation').GetLeaderTitle] Power") [[Law#[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power|[GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power]]   + remove\_law\_from\_international\_organization:  [Election Method](/Law#Election_Method "Law")   + remove\_law\_from\_international\_organization:  [Ruling Period](/Law#Ruling_Period "Law")   + remove\_law\_from\_international\_organization:  [Election Frequency](/Law#Election_Frequency "Law") | character |
#### Election Method
The process of electing the [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] of the Swiss Confederation is a delicate matter which requires an exact legislature to be handled properly.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
* international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")
| Policy | Leader Change Method | Leadership Election Resolution |
| **Direct Vote** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] is directly elected by the members of the Swiss Confederation. Every member has a singular vote, and every member shall be eligible to represent the Confederation. | vote | swiss\_election |
| **Lottery** Only the Lord can decide who shall represent the Swiss Confederation. The election process is handled via a secret lottery process with fate as the conclusive factor. | lottery |  |
| **Rotation** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] is decided by turns. Every member of the Swiss Confederation shall represent the confederation at least once before a former leader can take over the mantle once again. | rotation |  |
#### Ruling Period
The Confederation might have a [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] representing it. Yet, it must be determined if said [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] shall serve the union lifelong or until a certain time has passed.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
* international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")
| Policy | On Deactivate | Leader Change Trigger Type |
| **Timed** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] of the Swiss Confederation is only in charge for a set period of time. Afterwards, their term ends and a new [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] shall be elected. | * if:   + limit:     - international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")   + add\_policy\_to\_international\_organization: [Lifelong](/Law#Ruling_Period "Law") | timed |
| **Lifelong** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] of the Swiss Confederation serves for their entire life. Only upon their death or expulsion, an election shall be held. | * if:   + limit:     - international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")   + add\_policy\_to\_international\_organization: [Timed](/Law#Ruling_Period "Law")   + add\_policy\_to\_international\_organization: [4-yearly Elections](/Law#Election_Frequency "Law") | rulerchange |
#### Election Frequency
As the matters of the Ruling Period are cleared, a new topic arises which handles the frequency of the elections of a new [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle].
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
* international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")
* international\_organization\_has\_policy: [Timed](/Law#Ruling_Period "Law")
| Policy | Months Between Leader Changes |
| **Biyearly Elections** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] of the Swiss Confederation shall be chosen every 2 years. | 24 |
| **4-yearly Elections** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] of the Swiss Confederation shall be chosen every 4 years. | 48 |
| **8-yearly Elections** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] of the Swiss Confederation shall be chosen every 8 years. | 96 |
### Foreign Laws
#### Imperial Relations
The Swiss Confederation has been part of the Holy Roman Empire since its inception. However, the The Reformation left a bitter taste for many members of the Confederation...
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
* exists: international\_organization:hre
* international\_organization\_has\_unlocked\_law\_trigger:
  + type: sc\_relations\_with\_hre
Locked
* international\_organization\_has\_law:  [Imperial Relations](/Law#Imperial_Relations "Law")
| Policy | On Activate |
| **Remain in the Empire** While the Swiss Confederation is a capable network of alliance defending its members from foreign powers, it is ill-suited to withstand the military might of far greater states. Remaining in the Holy Roman Empire will provide the Swiss with more, much-needed support. | * custom\_tooltip: sc\_remain\_in\_the\_hre\_tt * custom\_tooltip:   + text: sc\_prestige\_malus\_tt   + every\_international\_organization\_member:     - limit:       * is\_member\_of\_international\_organization: international\_organization:hre     - add\_prestige: prestige\_extreme\_penalty |
| **Leave the Empire** Although external enemies are not uncommon, the biggest threats the Swiss Confederation faces come from within the Holy Roman Empire itself, which originally promised to defend its members. Staying within the Empire only jeopardizes our own survivability. | * custom\_tooltip: sc\_leave\_the\_hre\_tt * custom\_tooltip:   + text: sc\_every\_member\_leaves\_hre\_tt   + every\_international\_organization\_member:     - limit:       * is\_member\_of\_international\_organization: international\_organization:hre     - international\_organization:hre:       * remove\_country\_from\_international\_organization: prev     - every\_owned\_location:       * limit:         + is\_owned\_by\_international\_organization: international\_organization:hre       * remove\_from\_international\_organization: international\_organization:hre * if:   + limit:     - international\_organization:hre:       * international\_organization\_has\_leader: True   + international\_organization:hre:     - leader\_country:       * trigger\_event\_non\_silently: flavor\_swi.121 |
### Leadership Laws
#### [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] Power
The representative of the Confederation could request for more power and influence within the union in order to strengthen their position on the public stage.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
* international\_organization\_has\_law:  [Swiss Representative](/Law#Swiss_Representative "Law")
| Policy | Requirements |
| **Representative Power** The [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] has the right to request aid from the members of the Swiss Confederation which can range from financial to military support. |  |
| **Religious Power** The power of the [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] is limited with the exception in the matters of religious affairs of the Swiss Confederation. | * trigger\_if:   + limit:     - law\_visible\_to\_international\_organization:  [Religious Affairs](/Law#Religious_Affairs "Law")   + international\_organization\_has\_policy: [Mending the Schism](/Law#Religious_Affairs "Law") * international\_organization\_has\_policy: [Lifelong](/Law#Ruling_Period "Law") |
| **Absolute Power** The leading [GetUniqueInternationalOrganization('swiss\_confederation').GetLeaderTitle] rules over the Swiss Confederation as if it was a singular state. As such, they enjoy all the privileges and duties as if they were a monarch of the Confederation. | * trigger\_if:   + limit:     - law\_visible\_to\_international\_organization:  [Imperial Relations](/Law#Imperial_Relations "Law")   + international\_organization\_has\_law:  [Imperial Relations](/Law#Imperial_Relations "Law") * international\_organization\_has\_policy: [Lifelong](/Law#Ruling_Period "Law") |
### Military Laws
#### War Politics
The external threats of the Swiss Confederation are many. Unified terms of how the Swiss defend each other are needed if the Confederation is to survive the political anarchy around it.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
| Policy |
| **Defensive Pact** Members of the Swiss Confederation are only called to arms in a defensive war against external threats. |
| **Swiss Alliance** Members of the Swiss Confederation may call each other to their side in their own expansion attempts. In case of an external invasion, all members are called to arms to defend their fellow comrades of the Confederation. |
| **United War Efforts** The Swiss Confederation is similar to a singular political entity to all external states. Each war - be it offensive or defensive in nature - shall call the military of all the members of the Confederation. |
### Religious Laws
#### Religious Affairs
With the breakout of the The Reformation, the religious unity of the Confederation is a precarious situation. A solution must be found or else the conflict of faith threatens to tear the union apart.
Potential
* international\_organization\_type: international\_organization\_type:swiss\_confederation
* international\_organization\_has\_unlocked\_law\_trigger:
  + type: sc\_religious\_affairs
* custom\_tooltip:
  + text: reformation\_is\_enabled\_tt
  + At least one of:
    - has\_had\_situation:
      * situation: situation:reformation
    - religion:lutheran:
      * is\_religion\_enabled: True
    - religion:calvinist:
      * is\_religion\_enabled: True
| Policy | On Activate | On Deactivate |
| **Mending the Schism** The stability and safety of the Swiss Confederation is above the religious quarrels of the The Reformation. Every member shall withdraw hostile relations with members of a different faith. | * custom\_tooltip:   + text: sc\_clear\_religious\_chaos\_tt   + remove\_variable: sc\_religious\_chaos   + remove\_variable: sc\_blocked\_votes\_on\_non\_religious\_policies | * hidden\_effect:   + set\_variable: sc\_religious\_chaos |
| **Enforce Religious Unity** Religion plays a significant role in the lives of its members and as such the religious unity of the Swiss Confederation is of great priority. All cantons shall follow the same faith one way or another. | * custom\_tooltip:   + text: sc\_only\_defending\_same\_religion\_allies\_tt   + remove\_variable: sc\_religious\_chaos   + remove\_variable: sc\_blocked\_votes\_on\_non\_religious\_policies | * hidden\_effect:   + set\_variable: sc\_religious\_chaos |
## Union
### Centralization Laws
#### Codified Inheritance
In order to secure the stability of the Union, the inheritance laws of each member must be codified so that each state has the same line of succession.
Potential
* international\_organization\_type: international\_organization\_type:union
Allow
* international\_organization\_lifetime ≥ 10
* international\_organization\_has\_law:  [Union Foundation](/Law#Union_Foundation "Law")
Locked
* international\_organization\_has\_policy: [Unified Treasury](/Law#Economy_of_the_Union "Law")
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | International Organization Modifier |
| **Unified Succession Law** The succession of the Union is regulated by the laws of the Senior Partner. Each member is forced to adopt these laws if applicable. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") * trigger\_if:   + limit:     - has\_special\_status\_available: special\_status:senior\_partner   + any\_country\_with\_special\_status\_of\_type:     - type: senior\_partner     - government\_type: government\_type:monarchy * trigger\_else:   + has\_special\_status\_available: special\_status:senior\_partner * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") |  | * on\_union\_policy\_change\_effect: True * apply\_same\_inheritance\_policy\_effect: True * change\_union\_integration\_level:   + value: 1 | * change\_union\_integration\_level:   + value: -1 | *  **+1** Union Integration Level *  Enabled Negotiate Succession Law: **yes** |
| **Sovereign Succession Law** No member within the Union can determine the legal rights of succession of another member. Each member's policies regarding the throne is a matter of own sovereignty. |  | *  **+0.05** Monthly Legitimacy | * on\_union\_policy\_change\_effect: True |  |  |
#### Economy of the Union
One monarch might rule over multiple thrones, yet the members of the Union are very separated in their economy. This law shall bring all of them closer to each other.
Potential
* international\_organization\_type: international\_organization\_type:union
Allow
* international\_organization\_lifetime ≥ 20
* international\_organization\_has\_law:  [Codified Inheritance](/Law#Codified_Inheritance "Law")
Locked
* international\_organization\_has\_law:  [Economy of the Union](/Law#Economy_of_the_Union "Law")
* international\_organization\_has\_policy: [Unified External Diplomacy](/Law#Diplomatic_Liberties "Law")
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | Can Build Buildings In Members | Can Build Rgos In Members | Can Build Roads In Members | International Organization Modifier | Payments Implemented |
| **Unified Treasury** The different treasuries of the Union shall be unified into one single entity which fills the coffers of the monarch and allows them to spend the gold in the best interest of the Union. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") * trigger\_if:   + limit:     - has\_special\_status\_available: special\_status:senior\_partner   + any\_country\_with\_special\_status\_of\_type:     - type: senior\_partner     - government\_type: government\_type:monarchy * trigger\_else:   + has\_special\_status\_available: special\_status:senior\_partner * international\_organization\_has\_policy: [Unified Succession Law](/Law#Codified_Inheritance "Law") | *  **+5.00%** Efficiency of Our Cabinet | * on\_union\_policy\_change\_effect: True * change\_union\_integration\_level:   + value: 1 | * change\_union\_integration\_level:   + value: -1 |  |  |  | *  **+1** Union Integration Level | * union\_contribution |
| **Cooperative Investment** The treasuries of the members of the Union serve nobody exclusively. They are part of the royal commune, and shall be used to improve the infrastructure of every member. |  |  | * on\_union\_policy\_change\_effect: True |  |  |  |  |  |  |
#### Diplomatic Liberties
As the Union is led from a single throne, so comes the question of how the diplomacy of the Union shall be handled.
The matters of warfare, though, are nonetheless in the hands of the Estates of our union partners.
Potential
* international\_organization\_type: international\_organization\_type:union
Allow
* international\_organization\_lifetime ≥ 30
* international\_organization\_has\_law:  [Economy of the Union](/Law#Economy_of_the_Union "Law")
Locked
* international\_organization\_has\_law:  [Diplomatic Liberties](/Law#Diplomatic_Liberties "Law")
* international\_organization\_has\_policy: [Aligned Legislature](/Law#Legislature_of_the_Union "Law")
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | International Organization Modifier |
| **Unified External Diplomacy** The diplomatic affairs of the Union are centralized in the Senior Partner, while the other members are limited in their foreign diplomacy. The matters of warfare, however, are still in the hands of the Estates, even though now they are significantly more incentivized to take less risks in their endeavors. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") * trigger\_if:   + limit:     - has\_special\_status\_available: special\_status:senior\_partner   + any\_country\_with\_special\_status\_of\_type:     - type: senior\_partner     - government\_type: government\_type:monarchy * trigger\_else:   + has\_special\_status\_available: special\_status:senior\_partner * international\_organization\_has\_policy: [Unified Treasury](/Law#Economy_of_the_Union "Law") |  | * on\_union\_policy\_change\_effect: True * change\_union\_integration\_level:   + value: 1 | * change\_union\_integration\_level:   + value: -1 | *  **+1** Union Integration Level *  Allow Enforce Union Peace in Union: **yes** *  Unlock Rein in Junior Diplomacy: **yes** |
| **Organized Diplomats** The diplomats of the Union serve no singular banner, but the entirety of the Union. Each member has access to their abilities and can utilize them for their own foreign affairs. |  | *  **+10.00%** Diplomatic Capacity *  **+0.10** Monthly Diplomats *  **+1.00** Maximum Diplomats | * on\_union\_policy\_change\_effect: True |  |  |
#### Legislature of the Union
The adminstration of the Union requires a cohesive design. An approved, unitary system of a legislature is imperative to ensure the stability of the Union.
Potential
* international\_organization\_type: international\_organization\_type:union
Allow
* international\_organization\_lifetime ≥ 40
* international\_organization\_has\_law:  [Diplomatic Liberties](/Law#Diplomatic_Liberties "Law")
Locked
* international\_organization\_has\_law:  [Legislature of the Union](/Law#Legislature_of_the_Union "Law")
* international\_organization\_has\_law:  [Question of Unification](/Law#Question_of_Unification "Law")
* Not:
  + international\_organization\_has\_policy: [Federal Union](/Law#Question_of_Unification "Law")
| Policy | Requirements | Country Modifier | On Activate | On Deactivate | International Organization Modifier |
| **Aligned Legislature** In order to keep administrative cohesion and consistency within the Union, all laws and policies shall be aligned with the ones of the Senior Partner. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") * trigger\_if:   + limit:     - has\_special\_status\_available: special\_status:senior\_partner   + any\_country\_with\_special\_status\_of\_type:     - type: senior\_partner     - government\_type: government\_type:monarchy * trigger\_else:   + has\_special\_status\_available: special\_status:senior\_partner * international\_organization\_has\_policy: [Unified External Diplomacy](/Law#Diplomatic_Liberties "Law") | *  **+10.00%** Legislative Efficiency | * on\_union\_policy\_change\_effect: True * apply\_same\_laws\_policy\_effect: True * change\_union\_integration\_level:   + value: 1 | * change\_union\_integration\_level:   + value: -1 | *  **+1** Union Integration Level *  Enabled Union Enforcement Actions: **yes** |
| **Federal Legislature** Differences in customs and laws are no flaw but a primary aspect of the different members of the Union. As such, the design of policies is an untouchable responsibility of the member states instead of the ruler. |  | *  **+10.00%** Efficiency of Our Cabinet | * on\_union\_policy\_change\_effect: True |  |  |
#### Question of Unification
The Union is in its most variations nothing but a loose confederation of different states ruled from the same throne. However, the possibility of a unification under the banner of the Senior Partner is not out of question...
Potential
* international\_organization\_type: international\_organization\_type:union
Allow
* international\_organization\_lifetime ≥ 50
* international\_organization\_has\_law:  [Legislature of the Union](/Law#Legislature_of_the_Union "Law")
| Policy | Requirements | On Activate | On Deactivate | Allow Member Annexation | Annexation Speed | International Organization Modifier | Opinion Bonus | Trust Bonus |
| **Rapid Unification of Crowns** Further improvements in the different parts of the bureaucracy of the Senior Partner have led to an optimization of the annexation process of the Junior Partner. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") * trigger\_if:   + limit:     - has\_special\_status\_available: special\_status:senior\_partner   + any\_country\_with\_special\_status\_of\_type:     - type: senior\_partner     - government\_type: government\_type:monarchy * trigger\_else:   + has\_special\_status\_available: special\_status:senior\_partner * international\_organization\_has\_policy: [Aligned Legislature](/Law#Legislature_of_the_Union "Law") * At least one of:   + international\_organization\_has\_policy: [Rapid Unification of Crowns](/Law#Question_of_Unification "Law")   + international\_organization\_has\_policy: [Swift Unification of Crowns](/Law#Question_of_Unification "Law") | * on\_union\_policy\_change\_effect: True * change\_union\_integration\_level:   + value: 3 | * change\_union\_integration\_level:   + value: -3 |  | 2 |  |  |  |
| **Swift Unification of Crowns** The diplomatic and administrative bureaucracy within the Senior Partner has been improved greatly, allowing for a quicker integration of the member states. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") * trigger\_if:   + limit:     - has\_special\_status\_available: special\_status:senior\_partner   + any\_country\_with\_special\_status\_of\_type:     - type: senior\_partner     - government\_type: government\_type:monarchy * trigger\_else:   + has\_special\_status\_available: special\_status:senior\_partner * international\_organization\_has\_policy: [Aligned Legislature](/Law#Legislature_of_the_Union "Law") * At least one of:   + international\_organization\_has\_policy: [Rapid Unification of Crowns](/Law#Question_of_Unification "Law")   + international\_organization\_has\_policy: [Swift Unification of Crowns](/Law#Question_of_Unification "Law")   + international\_organization\_has\_policy: [Unification of Crowns](/Law#Question_of_Unification "Law") | * on\_union\_policy\_change\_effect: True * change\_union\_integration\_level:   + value: 2 | * change\_union\_integration\_level:   + value: -2 |  | 1.5 |  |  |  |
| **Unification of Crowns** The time has come to centralize the Union at last! Under the graceful watch of the Senior Partner, the member states have agreed to processes of diplomatic annexation. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 * international\_organization\_has\_policy: [Establish Seniority](/Law#Union_Foundation "Law") * trigger\_if:   + limit:     - has\_special\_status\_available: special\_status:senior\_partner   + any\_country\_with\_special\_status\_of\_type:     - type: senior\_partner     - government\_type: government\_type:monarchy * trigger\_else:   + has\_special\_status\_available: special\_status:senior\_partner * international\_organization\_has\_policy: [Aligned Legislature](/Law#Legislature_of_the_Union "Law") | * on\_union\_policy\_change\_effect: True * change\_union\_integration\_level:   + value: 1 | * change\_union\_integration\_level:   + value: -1 |  | 1 | *  Enable Annexation of Members: yes *  **+1** Union Integration Level |  |  |
| **Federal Union** The Union is first and foremost a defensive alliance. No member state is interested in unifying the thrones into a single political entity, and the sovereignty of the each individual state is protected. |  | * on\_union\_policy\_change\_effect: True |  |  |  |  | 25 | 5 |
### Federal Laws
#### Mutual Offense
Although first and foremost defensive in its nature, the military might of a Union can be called to support each other in military campaigns - if the state members agree to such obligation.
Potential
* international\_organization\_type: international\_organization\_type:union
Allow
* international\_organization\_lifetime ≥ 25
| Policy | Requirements | On Activate |
| **Assured Offense** The Union serves as an aggressive alliance. Enemies shall tremble as our soldiers move in unity against them. | * policy\_is\_voting\_target:   + policy: [Assured Offense](/Law#Mutual_Offense "Law") | * on\_union\_policy\_change\_effect: True |
| **Duty for Offense** The Union has a strong aggressive nature to it. Every member is appealed to follow their fellow members to the offensive war. | * policy\_is\_voting\_target:   + policy: [Duty for Offense](/Law#Mutual_Offense "Law") | * on\_union\_policy\_change\_effect: True |
| **Possible Offense** In order to survive, the Union must thrive through conquest and growth of their own power. Each member may be allowed to call in other members in times of war. | * policy\_is\_voting\_target:   + policy: [Possible Offense](/Law#Mutual_Offense "Law") | * on\_union\_policy\_change\_effect: True |
### Foundation Laws
#### Union Foundation
The law of the Union which determines its very nature and if it should follow a centralized or federal future - if it can stand the test of time.
Potential
* international\_organization\_type: international\_organization\_type:union
Allow
* international\_organization\_lifetime ≥ 5
Locked
* international\_organization\_has\_law:  [Union Foundation](/Law#Union_Foundation "Law")
* international\_organization\_has\_policy: [Unified Succession Law](/Law#Codified_Inheritance "Law")
| Policy | Requirements | Country Modifier | On Activate | Has Parliament |
| **Establish Seniority** The Union can only hold together from a single throne. Designating the senior partner of the Union shall also determine which throne shall represent the Union as a whole. | * custom\_description:   + text: is\_same\_ruler\_personal\_union\_text   + any\_international\_organization\_member:     - ruler:       * save\_temporary\_scope\_as: ruler\_character   + any\_international\_organization\_member:     - ruler: scope:ruler\_character     - count > 1 |  | * custom\_tooltip: union\_senior\_partner\_policy\_at * on\_union\_policy\_change\_effect: True * if:   + limit:     - Not:       * has\_variable: pre\_selected\_senior\_partner   + custom\_tooltip: union\_senior\_partner\_policy\_tt * else:   + custom\_tooltip: union\_senior\_partner\_policy\_specific\_tt * set\_parliament\_type: parliament\_type:union\_royal\_assembly * custom\_tooltip: union\_unlocks\_independence\_casus\_belli\_tt * custom\_tooltip: union\_unlocks\_war\_for\_seniority\_casus\_belli\_tt |  |
| **Maintain Federal Status** The sovereignty of each member of the Union is untouchable and unquestionable. Even if each throne is ruled by a single ruler, it is not the monarch's business to meddle in the affairs of the union members. |  | *  **+0.01** Stability Investment | * on\_union\_policy\_change\_effect: True |  |
## References
