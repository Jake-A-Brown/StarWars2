const PlanetData = [
    {
        name: 'Tatooine',
        description:`Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.`,
        planetImageLink: 'https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg',
      },
      {
        name: 'Alderaan',
        description:`If ever one needed an example of the irredeemable evil of the Empire, look no further than the shattered remains of Alderaan. A peaceful world of lush valleys and snow-capped mountains, Alderaan was once regarded for its natural beauty, its tranquility, and the sophistication of its arts and culture. Before the Imperial uprising, Alderaan was represented in the waning days of the Republic by such venerated politicians as Bail Organa. In fact, Alderaan was one of the earliest supporters of the Alliance to Restore the Republic, though its officials prudently kept all ties to the Rebellion secret. Despite such discretion, the Empire knew it to be a haven of rebel activity, making it a target of reprisal as soon as the Death Star was operational.`,
        planetImageLink: 'https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg',
      },
      {
          name:'Yavin IV',
        description:`One of a number of moons orbiting the gas giant Yavin in the galaxy’s Outer Rim, Yavin 4 is a steamy world covered in jungle and forest. It was the location of the principal rebel base early in the Galactic Civil War, and the site from which the Rebellion launched the attack that destroyed the first Death Star -- a confrontation known thereafter as the Battle of Yavin.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/yavin-4-bio-1_copy_16aecaaa.jpeg',
      },
      {
          name:'Hoth',
        description:`Hoth is the sixth planet in the remote system of the same name, and was the site of the Rebel Alliance's Echo Base. It is a world of snow and ice, surrounded by numerous moons, and home to deadly creatures like the wampa.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg',
      },
      {
          name:'Dagobah',
          description:`Home to Yoda during his final years, Dagobah was a swamp-covered planet strong with the Force -- a forgotten world where the wizened Jedi Master could escape the notice of Imperial forces. Characterized by its bog-like conditions and fetid wetlands, the murky and humid quagmire was undeveloped, with no signs of technology. Though it lacked civilization, the planet was teeming with life -- from its dense, jungle undergrowth to its diverse animal population. Home to a number of fairly common reptilian and amphibious creatures, Dagobah also boasted an indigenous population of much more massive -- and mysterious -- lifeforms. Surrounded by creatures generating the living Force, Yoda learned to connect with the deeper cosmic Force and waited for one who might bring about the return of the Jedi Order.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg',
      },
      {
          name:'Bespin',
          description:`Secluded from galactic turmoil by its location in a little-visited sector of space, Bespin is an astrophysical rarity. An immense gas giant surrounded by a number of moons, the planet contains a band of habitable atmosphere among its endless clouds. In this stratum of life, enterprising prospectors have established floating mining complexes devoted to extracting valuable gasses from deep within the planet. The most well known of these ventures is the opulent Cloud City, formerly under the administration of Lando Calrissian. During the tail end of the Galactic Civil War, the Empire garrisoned Bespin and took over Cloud City, though the outpost and the planet enjoyed freedom after the defeat of the Emperor at the Battle of Endor.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg',
      },
      {
          name:'Endor',
          description:`Secluded in a remote corner of the galaxy, the forest moon of Endor would easily have been overlooked by history were it not for the decisive battle that occurred there. The lush, forest home of the Ewok species is the gravesite of Darth Vader and the Empire itself. It was here that the Rebel Alliance won its most crucial victory over the Galactic Empire.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg',
      },
      {
          name:'Naboo',
          description:`An idyllic world close to the border of the Outer Rim Territories, Naboo is inhabited by peaceful humans known as the Naboo, and an indigenous species of intelligent amphibians called the Gungans. Naboo's surface consists of swampy lakes, rolling plains and green hills. Its population centers are beautiful -- Naboo's river cities are filled with classical architecture and greenery, while the underwater Gungan settlements are a beautiful display of exotic hydrostatic bubble technology.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg',
      },
      {
          name:'Coruscant',
          description:`Coruscant is the vibrant heart and capital of the galaxy during the age of the Empire, featuring a diverse mix of cultures and citizens spread over hundreds of levels. Once the home of the main Jedi Temple -- the central hub of Jedi training and learning for over a thousand generations and the repository of the Jedi Archives -- these traditions ended when the planet bore witness to Order 66.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/coruscant-main_4f0cf6a7.jpeg',
      },
      {
          name:'Kamino',
          description:`Once purged from the otherwise complete Jedi Archives was all evidence of the mysterious world of Kamino. A lonely world beyond the Outer Rim and just south of the Rishi Maze, few could have predicted that Kamino would become a key contributor to a massive shift in political power in the final days of the Republic. Kamino is a planet of endless oceans and storms. Few features mark its surface, save for massive stilt-mounted cities wherein reside the planet's natural inhabitants, the Kaminoans. From Tipoca City, the planet's prime minister rules. Lama Su and Kamino’s chief medical scientist Nala Se closely monitor the operations of Kamino's most prized export -- clones -- even after the Clone Wars reaches a conclusion.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg',
      },
      {
          name:'Geonosis',
          description:`A harsh rocky world less than a parsec away from Tatooine, Geonosis is a ringed planet beyond the borders of the Galactic Republic. Its uninviting surface is made up of harsh, rocky desert, and the creatures that evolved on Geonosis are well equipped to survive in the brutal environment. The most advanced lifeform are the Geonosians, sentient insectoids that inhabit towering spire-hives. The Geonosians maintain large factories for the production of droids and weapons for the Separatist cause in the Clone Wars. After the Clone Wars, the Empire chose Geonosis as the construction site of the first Death Star, restricting travel to the system and sterilizing the planet’s surface.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_geonosis_01_169_1d04e086.jpeg',
      },
      {
          name:'Utapau',
          description:`Ringed by numerous moons, the remote sanctuary of Utapau is a planet pitted with enormous sinkholes. Its windswept surface is dry and desert-like, but deep in the porous crust, at the bottom of the sinkholes are pools of life-giving water. Many of the sinkholes on one of the planet's small continents are lined with intricate cities that stretch deep into caves and crevices beneath the planet's surface, as well as mining operations that seek to uncover valuable minerals from the planet's depths.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_utapau_01_169_14a54eb1.jpeg?',
      },
      {
          name:'Mustafar',
          description:`A tiny, fiery planet in the Outer Rim, Mustafar maintains an erratic orbit between two gas giants. Mustafar is rich in unique and valuable minerals which have long been mined by the Tech Union. Its lava pits and rivers make this planet a dangerous habitat; its natives have burly, tough bodies that can withstand extreme heat. The planet became the backdrop for the fateful duel between Obi-Wan Kenobi and Anakin Skywalker. After the rise of the Empire, captured Jedi were brought to the volcanic world for interrogation and execution.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_mustafar_01_169_5b470758.jpeg',
      },
      {
          name:'Kashyyyk',
          description:`Kashyyyk is the Wookiee homeworld, covered in dense forest. While Wookiees build their homes in the planet's trees, they are not a primitive species, and Kashyyyk architecture incorporates sophisticated technology. One of the last battles of the Clone Wars was fought here under the leadership of Yoda, with Wookiees and clones battling the Separatist droid army -- until the Emperor issued Order 66, commanding the clones to slaughter all Jedi. Yoda survived, however, with the help of natives Chewbacca and Tarfful, who used a hidden shuttle to evacuate the Jedi Master from the planet. In the aftermath, the brave Jedi Padawan Gungi, a survivor of the Jedi slaughter, was returned to what remained of his homeworld with the help of Clone Force 99.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/kashyyyk-main_37a2e497.jpeg?region=237%2C0%2C1445%2C813',
      },
      {
          name:'Polis Massa',
          description:`An obscure planetoid deep in the Outer Rim, Polis Massa nonetheless occupied an important place in galactic history: The Skywalker twins were born there and given names by their mother Padmé Amidala before she died. And plans made in secret on Polis Massa would one day determine the fate of the galaxy.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_polismassa_01_169_21f04b76.jpeg',
      },
      {
          name:'Mygeeto',
          description:`A frigid Outer Rim planet marked by jagged crystalline landscapes, Mygeeto was the homeworld of the Lurmen and controlled by the InterGalactic Banking Clan. During the Outer Rim Sieges, Ki-Adi-Mundi and clone forces under Commander Bacara battled Separatist droids for control of Mygeeto. When Supreme Chancellor Palpatine issued Order 66, Bacara and his clones shot their Jedi General dead.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/mygeeto-main-image_91c503cc.jpeg',
      },
      {
          name:'Felucia',
          description:`Felucia is a world teeming with fungal life-forms and immense primitive plants. Much of the planet has a fetid, humid landscape overgrown by forests of bizarre wilderness. Many of the life-forms on Felucia are partially or completely translucent; they color the sunlight as the beams penetrate their skin. Others are opaque and imposing, like the enormous jungle rancors that roam the landscape. Beneath the hazy canopies of the enormous pitcher plants and leafy growths is a surreal color-drenched expanse. During the Clone Wars, the Jedi attempted to defend Felucia from those who would exploit the planet.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_felucia_01_169_2070e38e.jpeg',
      },
      {
          name:'Cato Neimoidia',
          description:`A weathly Neimoidian colony world, Cato Neimoidia's jewelled palaces and opulent bridge-cities were the pride and joy of Trade Federation barons, who sought constantly to one-up each other and dazzle guests with displays of ostentatious hospitality and luxury living.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_catoneimoidia_01_169_d2b9bb58.jpeg',
      },
      {
          name:'Saleucami',
          description:`A world of mixed terrain, from dank, swampy environments marked with strange bulbous plant-life, to arid deserts, Saleucami is an Outer Rim planet that remained untouched by the Clone Wars through most of the fighting. The settlers on Saleucami wished to avoid the destruction of warfare, and live out a simple existence at peace, only doing battle with the elements. Unfortunately, combat did come to Saleucami -- it was a major battle site during the Outer Rim Sieges of the Clone Wars -- and even after the end of the Clone Wars, the long arm of Imperial law sought to bring a new order to the once peaceful planet.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/saleucami-main_41b56ea0.jpeg',
      },
      {
          name:'Stewjon',
          description:'not much information about this planet',
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1wa744w_152d7fc7.jpeg',
      },
      {
          name:'Eriadu',
          description:`At the dawn of the Empire, the mountainous Outer Rim world of Eriadu is an Imperial stronghold due to the presence of a secure compound controlled by Grand Moff Tarkin. The elite, high-ranking official holds clandestine meetings there with top advisors tasked with controlled some of the Empire's most precious resources.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-story-gallery-the-summit-04_e0c438cb.jpeg',
      },
      {
          name:'Corellia',
          description:`An ancient world in the galactic Core, Corellia is known for its people’s wanderlust and its massive shipyards. Corellia played a key role in the expansion of galactic civilization, but that was thousands of years ago. It’s now a faded industrial planet exploited by the Empire to build TIE fighters and Star Destroyers, while its formidable dockyard facilities are retrofitted to destroy all evidence of the Separatist forces. Corellians not born with money or influence hope to escape their homeworld in search of a better life.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/corellia-main_621fbca8.jpeg',
      },
      {
          name:'Rodia',
          description:`Jungle planet that is home to the Rodian species. Its inhabitants live in domed cities.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_rodia_01_169_6f76b79d.jpeg',
      },
      {
          name:'Nal Hutta',
          description:`A ringed, marshy bog planet controlled by the Hutts, Nal Hutta has long been a haven for criminal activity, far from the prying eyes of galactic authorities. Its hot atmosphere is frequently streaked by greasy rain, creating a fetid sauna in which Hutts are most comfortable. Hutt cities are built on what little firm land there is, including the sprawling spaceport market of Bilbousa. A number of floating homes also dot the bayous -- visitors traverse the bogs on repulsorlift fanboats, risking the attention of dragonsnakes and other dangerous creatures.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_nalhutta_01_169_72d58d25.jpeg',
      },
      {
          name:'Dantooine',
          description:`The site of the first base for the Rebel Alliance, Dantooine is an Outer Rim world, filled with lush forests and green landscapes. The Alliance would later leave Dantooine for a new home in an effort to stay one step ahead of the Empire.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/dantooine_f1c04676.jpeg',
      },
      {
          name:'Bestine IV',
          description:`Bestine IV, or simply Bestine, is an aquacultural planet in the Inner Rim, along the Corellian Trade Spine. Nearly all of its surface is covered by a vast ocean, but there are many rugged islands spread across the planet.
          the planet is widely known for its ship repair and construction industry, which eventually caught on with the Galactic Empire, who constructed large naval shipyards.`,
          planetImageLink:'https://pm1.aminoapps.com/7350/1ccf216a94b0cce76dbe766fd34db105bf717d9fr4-620-310_00.jpg',
      },
      {
          name:'Ord Mantell',
          description:`In the waning days of the Republic, Ord Mantell housed a base of operations for the Black Sun crime syndicate. During the Clone Wars, it was the site of a battle between the Separatists and the Shadow Collective, of which Black Sun was a member. But after the Empire came to power, the inhabitants of the mountainous world fell on hard times, laying low and working jobs where no questions would be asked. It was still a wretched hive of scum and villainy when Rebel Alliance general and former smuggler Han Solo had a run-in with a bounty hunter on the planet some years later.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/ordo-mantell-main_0320929c.jpeg',
      },
      {
          name:'unknown',
          description:'their is no data for this planet',
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/image_9b8f9029.jpeg?',
      },
      {
          name:'Trandosha',
          description:`Trandosha is the homeworld of the Trandoshans, reptilian creatures that can rival the neighboring Wookiees. The Trandoshans love heat and sun, and most of them reside in the massive deserts that sprawl throughout the planet. Some, however, select the jungles and swamps that can also be found on the planet.
          The Trandoshans and Wookiees have a long rivalry that dates back to the beginning of time. The Wookiees had a technological edge on the Trandoshans, for they used complex mechanisms such as the bowcaster to conduct their hunts. However, Trandoshans could easily manipulate exterior forces and portrayed the Wookiees as evil, and managed to gain similar technology from outside systems.
          Affectionately called Dosha by the native Trandoshans themselves, Trandosha is a world rich with mineral deposits, which led to the Trandoshans signing several recent treaties allowing mining corporations to exploit the planetary resources.`,
          planetImageLink:'https://pm1.aminoapps.com/7615/6d27d12797de117cc626b2d0994ab5fd0000811cr1-2048-1431v2_uhq.jpg',
      },
      {
          name:'Socorro',
          description:`Socorro was a planet in the Socorro system of the Kibilini sector, located in the Outer Rim Territories region of the galaxy. It was situated on the Llanic Spice Run, a hyperlane that linked it to Llanic and the Bahalian system. Socorro was one of only two bodies in orbit around a red giant star and possessed no moons.`,
          planetImageLink:'https://i.imgur.com/MXJul2n.jpeg',
      },
      {
          name:'Mon Cala',
          description:`Also known as Mon Calamari or Dac, Mon Cala is a a beautiful aquatic world filled with lush coral reefs and kelp forests bathed by the light of twin suns. It is home to the Mon Calamari and Quarren people. The two cultures have long clashed over their differences, but under the rule of the 82nd King of Mon Cala, Yos Kolina, these disputes were kept civil and respectful. His sudden assassination and the arrival of Separatist forces during the Clone Wars tipped the scales to civil war, with the Quarren staging an uprising against the Mon Calamari, backed by Confederacy forces and Karkaradon leader, Riff Tamson. It was up to the Jedi and Republic envoys to help young Prince Lee-Char, heir to the Mon Cala throne, restore peace to the planet.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_moncala_01_169_b5bc76f1.jpeg',
      },
      {
          name:'Chandrila',
          description:`Is an agriworld located in the Chandrila system of the Core Worlds' Bormea sector. The planet had two continents and two moons—Chandra and Chandrakant—and lay on the Perlemian Trade Route. The world was relatively rural, though it had 1.2 billion residents and was home to several cities.`,
          planetImageLink:'https://db4sgowjqfwig.cloudfront.net/campaigns/108293/assets/892026/2E2F2807-4535-411C-892D-995249738FBF.jpeg?1534669334',
      },
      {
          name:'Sullust',
          description:`Sullust is a barren, obsidian world of lava streams and turquoise lakes. Native fauna such as ash angels foraged during the day and returned to nest at night, while rockrenders prowled the planet's underground.[10] Because the planet's atmosphere was highly toxic, native Sullustans lived in technologically advanced subterranean cities that were highly regarded for their beauty.[23] They commuted to work by lifts and shuttles that carried them to the factories on the planet's surface, alternating between day and night shifts.[6] The SoroSuub Corporation employed roughly half the population of Sullust[20] and the world was the center of the company's industrial empire, with famous factories manufacturing starships.[24]`,
          planetImageLink:'https://cdna.artstation.com/p/assets/images/images/009/725/438/smaller_square/charlie-ellis-planet.jpg?1520535477',
      },
      {
          name:'Toydaria',
          description:`Toydaria is a world of fog, swamp, and forest. It played a key stragic role in the Clone Wars, as the planet's king, Katuunko, chose to stay neutral in the ongoing conflict. After a visit from Jar Jar Binks and Bail Organa, however, the king swore allegiance to the Republic, and allowed Toydaria to be used as a halfway point for supply delivery to clones.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_toydaria_01_169_70b20e0e.jpeg',
      },
      {
          name:'Malastare',
          description:`Located in the galaxy's Mid Rim, Malastare was the homeworld of the irascible Dugs, who proved loyal but difficult members of the Galactic Republic. The planet's extensive fuel reserves made it vital to the Republic war machine, and it became a critical battlefield during the Clone Wars. As a result of a massive ground battle between the Republic and the Separatists, a monstrous creature known as the Zillo Beast was released in Malastare.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_malastare_01_169_59df245f.jpeg',
      },
      {
          name:'Dathomir',
          description:`A remote planet, Dathomir is drenched in blood-red light from its central star. The planet has continents overrun by twisted vegetation, with forests of bent trees burdened by large, cocoon-like fruit. Bordering dense swamplands is the massive stone fortresses of the Nightsisters, a witch clan. The Nightsisters kept to themselves, but had on occasion been known to offer their services to those who piqued their interests. Far from the Nightsisters lived the Nightbrothers -- a tattooed clan of Zabrak warriors were subservient to their female counterparts.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_dathomir_01_169_304c5db2.jpeg',
      },
      {
          name:'Ryloth',
          description:`Ryloth is the principal planet in the Ryloth system located in the Outer Rim near Tatooine. It is home to the Twi'leks, a humanoid species with two large, fleshy head-tails growing from their skulls. The Twi'leks call these prehensile appendages lekku and can communicate through subtle lekku gestures, although they also speak Twi'leki. During the Clone Wars, scheming Separatist warlords blockaded and invaded Ryloth, hoping to steal its riches. But after the war, dreams of a free Ryloth evaporated under the iron fist of Imperial occupation.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/ryloth-main_72a1cd8c.jpeg',
      },
      {
          name:'Aleen Minor',
          description:`Is a planet located in the galaxy's Inner Rim that was settled by the Aleena species several thousand years before the rise of the Galactic Empire during one of the species' expansionist periods. The people of Aleen later adopted a policy of self-imposed separation from the rest of the galaxy a few millennia before the Imperial Era. Consequently, most Aleena found on worlds away from Aleen proper, such as Coruscant or Tatooine, hailed from Aleen Minor rather than the Aleena's original homeworld.[1]`,
          planetImageLink:'https://64.media.tumblr.com/3db26d145c67e1c9ddb45ea6db956e91/217b9b800741308a-ec/s1280x1920/8f7a3b5a44c17d6e08e2d4afd571a367e83b900a.png',
      },
      {
          name:'Vulpter',
          description:`Vulpter was a planet located in the galaxy's Deep Core that was the homeworld of the Vulptereen podracer Dud Bolt. The KX-series security droid K-2SO was constructed on Vulpter.`,
          planetImageLink:'https://media.moddb.com/cache/images/mods/1/26/25589/thumb_620x2000/2021-09-22_22-25-49.gif',
      },
      {
          name:'Troiken',
          description:`Troiken was a planet located in the Outer Rim Territories region of the galaxy that was the homeworld of the Xexto species. Slingshots of various kinds were popular on the Xexto homeworld, since the aliens' extra sets of arms made those weapons especially convenient to use.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/c/ce/Troiken.jpg',
      },
      {
          name:'Tund',
          description:'Tund was a verdant terrestrial planet and potent Force nexus situated upon the north-eastern borders of the Open Sea in the Centrality sector. A remote colony world of the Sith species first settled around 27,700 BBY, Tund saw use as a prison for heretics and exiles prior to the collapse of the old Sith Empire, and subsequently came to serve as both the headquarters of the Sith-blooded Sorcerers of Tund and the adopted homeworld of the Toong species. The planet was destroyed in 5 BBY by a biological warhead released by the Croke Sorcerer of Tund Rokur Gepta.',
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/3/31/Tund_TEA.jpg',
      },
      {
          name:'Haruun Kal',
          description:`The only world in the Al'Har system, Haruun Kal appeared to be an oceanic world from space. However, this "ocean" was in fact a sea of toxic gases brought to the surface by volcanic activity, and broken by mountains and plateaus. Only the landmasses that reached into the atmosphere could support life, and thus it was high in these mountains and plateaus where native life evolved.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwarsofthecaribbean/images/6/6f/Jungle_Planet_Resource.jpg',
      },
      {
          name:'Cerea',
          description:`Cerea was a planet located in the Mid Rim region of the galaxy. The homeworld of the Cerean species, Cerea was notable for its inhabitants' harmonious relationship with nature. Technology and pollution were frowned upon by the conservative government, a major point in the planet's decision not to join the Galactic Republic. The Cerean population mainly lived in giant buildings that took up a minimum of space, allowing the remainder of the planet's area to be employed as farmland. Foreign immigrants and visitors were, with a few exceptions, only allowed in Cerea's Outsider Citadels, enormous buildings erected to let non-Cereans practice their technological ways. This ensured that the foreigners' technology did not contaminate Cerea's nature, but also led to a concentration of criminal elements within the Citadels.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/c/cc/Cerea-FDCR.png',
      },
      {
          name:'Glee Anselm',
          description:`Glee Anselm was an ocean planet located in the Jalor system of the galaxy's Mid Rim that was the homeworld of the Anselmi and Nautolan species. Star Tours, a tour company, offered vacation tours of Glee Anselm during the Clone Wars.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/0/0c/GleeAnselm.jpg',
      },
      {
          name:'Iridonia',
          description:`Iridonia was the homeworld of the Zabrak species. Due to the harsh living conditions, the Zabrak were a hardy species. They took to flight and then space travel as soon as they could develop the technology, and by the time the Duros encountered them, they had already colonized five systems. Notable Iridonians included Agen Kolar, Bao-Dur, Drell Kahmf, Sirak, and Maris Brood.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/c/c5/Iridonia.jpg',
      },
      {
          name:'Tholoth',
          description:`Tholoth was a arboreal planet located in the galaxy's Colonies region that was the homeworld of the Tholothian species.[1] Tholoth was also the homeworld of the Jedi Master Stass Allie, who fought and died during the Clone Wars.`,
          planetImageLink:'https://pm1.aminoapps.com/7538/e3426589aa8dc074fd1e4ca36a5e177613397885r4-640-320_00.jpg',
      },
      {
          name:'Iktotch',
          description:`The moon of the gas giant Iktotchon, Iktotch was the rocky moon upon which the hardy Iktotchi species evolved and developed society. The moon itself was considered inhospitable by galactic standards, due to the strong sand-and-gravel windstorms that buffeted the barren landscape. The Iktotchi developed a heightened Force-sensitivity to survive on the moon, with innate precognitive skills that allowed them to predict a storm's approach and avoid the damaging winds.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/f/f1/Iktotch_FDNP.png',
      },
      {
          name:'Quermia',
          description:`Quermia was a planet located in the Outer Rim Territories, in grid square S-5 on the Standard Galactic Grid. A terrestrial world, Quermia's surface featured green landmasses and expanses of ocean. It sat close to the end of the Perlemian Trade Route hyperlane, which extended north-east from the Core Worlds planet Coruscant and connected it to the astronomical object Makem Te. Quermia also lay at an intersection between the Perlemian Trade Oute and the Overic Griplink hyperspace route, which linked the world to the planet Mon Cala. A separate hyperspace route connected Quermia to the planet Toola. Quermia was located near the planet Troiken, homeworld of the Xexto species.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/2/29/Quermia_NEGAS.jpg',
      },
      {
          name:'Dorin',
          description:`Dorin was a dark and dusty planet in the Expansion Region. It was the homeworld of the Kel Dors, with an atmosphere of a unique gas and helium`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_plokoon_01_169_92e6679c.jpeg',
      },
      {
          name:'Champala',
          description:`Located on the Hydian Way between Nierport and Drearia, Champala is considered a water world, though it possess several small continents covered in jungles and rainforests, with the occasional high plateau. The tidal zones of Champala consist of long, thin strips of land.`,
          planetImageLink:'https://img.swcombine.com//galaxy/planets/custom/large/6166.gif',
      },
      {
          name:'Mirial',
          description:`Mirial was located in the Mirial system of the Outer Rim Territories, situated in grid square Q-4 of the Standard Galactic Grid. It was positioned on a hyperspace route connecting it to Listehol. A cold, dry, desert planet, Mirial's landscape was pink and green in hue.`,
          planetImageLink:'https://static.wikia.nocookie.net/swtor/images/e/e0/Mirial.jpg',
      },
      {
          name:'Serenno',
          description:`Located deep within the borders of Separatist space was Serenno, Count Dooku's home planet and site of his ancestral lands. When Dooku turned his back on the Jedi Order, he reclaimed his title, wealth and territory, moving his base of operations to a cliff-side palace with a commanding view of the lush forests of his homeworld. Heavily cordoned by Separatist warships, Serenno was kept insulated from the worst of the Clone Wars battles, giving it a deceptively tranquil air.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_serenno_01_169_0541fc55.jpeg',
      },
      {
          name:'Concord Dawn',
          description:`Concord Dawn was a system under Mandalorian control, led by the legendary warrior Fenn Rau and his group of Protectors. While Rau entered into an agreement with the Empire, he eventually granted the rebels safe passage through the Concord Dawn system.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/concord-dawn_4277a880.jpeg',
      },
      {
          name:'Zolan',
          description:`Zolan was a warm and arid planet located in the galaxy's Mid Rim, near the Corellian Run. At some point, during the development of Zolan's native Clawdite species, a spike in solar activity bathed the planet in radiation. The Clawdite's ability to modify their skin color and body shape, similar to the predatory monzu also native to the world, resulted from this spike in solar activity, and many of the other native species developed different ways to survive. However, many other species were unable to cope and went extinct.`,
          planetImageLink:'https://img.swcombine.com//galaxy/planets/custom/large/4506.gif',
      },
      {
          name:'Ojom',
          description:`Ojom was a frozen ocean planet located within the Deep Core and the homeworld of the Besalisk. Largely inhospitable, several space stations hung in orbit so as to accommodate other species less acclimated to the cold.`,
          planetImageLink:'https://static.wikia.nocookie.net/starwars/images/9/9f/Ojom.jpg',
      },
      {
          name:'Skako',
          description:`Any trip to Skako Minor is punctuated by the planet's inscrutable elements, with ships immediately rattled and jostled by the unforgiving atmospheric disturbances upon arrival. In the murky, gaseous atmosphere, blustering winds and occasional electrical storms are hidden among the blinding yellow-hued fog. But rising above this gas layer stands the city of Purkoll.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/skako-minor-main_10443887.jpeg',
      },
      {
          name:'Muunilinst',
          description:`Muunilinst (pronounced "MYOON-il-ist", with a silent "n" near the end in Galactic Basic), nicknamed Moneylend, was the temperate, mineral-rich Muun colony world and the headquarters of the InterGalactic Banking Clan, which maintained a sub-divison on-world. It was located on the Braxant Run. It was a member of the Confederacy of Independent Systems under Chairman San Hill`,
          planetImageLink:'https://i.pinimg.com/originals/dd/61/0c/dd610ccaed9f80ab89aec38d481d582b.jpg',
      },
      {
          name:'Shili',
          description:`Shili was a planet that was part of the galaxy's Expansion Region, specifically in the Shili system. It was the homeworld of the Togruta species. Shili had colorful grasslands, expansive pine tree forests, as well as hills and mountains. The native Togruta displayed distinctive skin patterns for camouflaging in the grasses.`,
          planetImageLink:'https://www.starwars-holonet.com/holonet/images/1/1a/12663/planete_shili_1.jpg',
      },
      {
          name:'Kalee',
          description:`Kalee was a planet located in Wild Space that was the homeworld of the Kaleesh species. Grievous, a male Kaleesh warlord, was from this world.`,
          planetImageLink:'https://pm1.aminoapps.com/6913/8c73929352997b0d180d62d6ba4b40cf920193dfr1-1024-584v2_00.jpg',
      },
      {
          name:'Umbara',
          description:`Umbara, known as the "Shadow World" due to the rays of its sun never completely reaching its surface, is perpetually dark. The native wildlife have adapted to survive in such gloom, making the planet perpetually dangerous. Umbara was once part of the Galactic Republic, represented in the Senate by Senator Mee Deechi. Later in the Clone Wars, the planet's loyalty wavered and the natives of Umbara allied themselves with the Separatists, bringing their extremely advanced technology to the Separatist Alliance.`,
          planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_umbara_01_169_beef68c7.jpeg',
      },
      {
        name:'Jakku',
        description:'A harsh desert world, Jakku is a lawless place that’s home to thieves, outlaws and refugees. During the final years of the Galactic Civil War, Jakku was the site of a secret Imperial research base and served as a jumping-off point for warships heading into the Unknown Regions. The Empire made a last stand above the frontier planet, leading to a pitched battle between rebel and Imperial fleets. Jakku’s sandy wastes are littered with old wrecks, picked over by desperate scavengers searching for parts that can be salvaged and sold.',
        planetImageLink:'https://lumiere-a.akamaihd.net/v1/images/mr0170_a69c0abe.jpeg',
      },
]

export default PlanetData;