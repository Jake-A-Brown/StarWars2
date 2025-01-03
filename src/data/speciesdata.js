const SpeciesData = [
    {
        name:'Human',
        description:`The Humans were a sentient species that belonged to the simians, a subgroup of the primate order of mammals. As such, they were similar to a number of other species variously designated as apes, including the sentient Ma'alkerrite ape-man. They were taxonomically referred to as Homo sapiens.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/naboo-bio-4_80d794d1.jpeg',
    },
    {
        name:'Droid',
        description:``,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/image_75457486.jpeg',
    },
    {
        name:'Wookiee',
        description:`Shaggy giants from an arboreal world, the tall and commanding Wookiee species is an impressive sight to even the most jaded spacer. Despite their fearsome and savage countenance, Wookiees are intelligent, sophisticated, loyal and trusting. Loyalty and bravery are near-sacred tenets in Wookiee society. When peaceful, Wookiees are tender and gentle. Their tempers, however, are short; when angered, Wookiees can fly into a berserker rage and will not stop until the object of their distemper is sufficiently destroyed.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/wookiees-main-b_fc850c5b.jpeg',
    },
    {
        name:'Rodian',
        description:`Rodians are a reptilian species with antennae, green and scaled skin, large round pupil-less eyes, and snouts from the planet Rodia.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/rodian-main_de29c78f.jpeg',
    },
    {
        name:'Hutt',
        description:`Hutts are large, slug-like creatures known to be gangsters. They control Tatooine and are involved in organized crime throughout the galaxy.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_hutt_01_169_5d0535d2.jpeg',
    },
    {
        name:`Yoda's species`,
        description:``,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg',
    },
    {
        name:'Trandoshan',
        description:`Trandoshans are reptilian humanoids, with slimy, scaled-skin. They have long arms and legs, and are known to be excellent hunters. In Mos Espa, a rowdy group of the species has been known to try their luck at the gambling tables in Garsa's Sanctuary.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/trandoshian-main_19804be7.jpeg',
    },
    {
        name:'Mon Calamari',
        description:`The Mon Calamari people are a humanoid, aquatic species with high-domed heads, webbed hands and large, goggle-like eyes. They hail from the oceans of Mon Cala, a planet they share with the Quarren. During the Clone Wars, differences between the two cultures were fanned by Separatist troublemakers to erupt in civil war. During the Galactic Civil War, the Mon Calamari were said to be the soul of the Rebel Alliance. The Empire pressed these gentle, amphibious people into war by subjugating their watery world. In retaliation, the Mon Calamari became one of the key species of the Rebellion, supplying badly needed warships to the outnumbered Alliance fleet.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_moncalamari_01_169_135967d9.jpeg',
    },
    {
        name:'Ewok',
        description:`The Ewoks are sentient furred bipeds native to the moon of Endor. They are curious individuals that stand about one meter tall. They are extremely skilled in forest survival and the construction of primitive technology like gliders and catapults. They are quick learners when exposed to advanced technology, however. The Ewoks accepted members of the Rebel Alliance into their tribe, and allied themselves to their cause. The Ewoks helped in the ground battle to destroy the Imperial shield generator built in their forests, and their primitive weapons felled the stormtroopers and the scout walkers of the Empire. Their help paved the way to victory at the Battle of Endor.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_ewok_01_169_747db03a.jpeg',
    },
    {
        name:'Sullustan',
        description:`Sullustans are humanoid beings from the planet Sullust with two flaps of jowls aound their cheeks; Nien Nunb, co-pilot to Lando Calrissian in the Battle of Endor, was a notable Sullustan.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_sullustan_01_169_01e4c3e0.jpeg',
    },
    {
        name:'Neimodian',
        description:`Neimoidians are a humanoid species with green skin, large single-colored eyes, and no nose. They are notorious for running the Trade Federation, who joined the Separatist movement and started the Clone Wars.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_neimoidian_01_169_f4d61512.jpeg',
    },
    {
        name:'Gungan',
        description:`The Gungans are the native inhabitants of the planet Naboo, an amphibious species with hardy lungs capable of holding breath for extended periods. Their skeletal structure is extremely flexible, as it is made of cartilaginous material rather than hard bone. The long Gungan face has a tough yet flexible bill for burrowing and rooting out food. They have long muscular tongues with which they scoop mollusks and lesser amphibians from the Naboo swamps. While most spacefarers would dismiss Gungans as primitives, they have developed an advanced technology.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/ep1_ia_70138_bd7b9296.jpeg',
    },
    {
        name:'Toydarian',
        description:`Toydarian are fly-like humanoids, with wings, a snout, and webbed feed. They are known to be strong-willed and resistant to manipulation through the Force.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_toydarian_01_169_748d4d11.jpeg',
    },
    {
        name:'Dug',
        description:`Dugs are a sentient species with elongated faces, walking with their upper limbs. The podracer Sebulba is a Dug.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_dug_01_169_a36b6959.jpeg',
    },
    {
        name:`Twi'lek`,
        description:`Twi'leks are tall, thin humanoids with skin pigment that spans a rainbow of colors. Their most distinctive feature is a pair of shapely prehensile tentacles that grow from the base of their skulls. Few things are as graceful as a female Twi'lek in motion. This beautiful image has forever doomed generations of young Twi'leks into servitude, as the wealthy and corrupt have taken to brandishing Twi'leks as badges of prestige. In the waning years of the Republic, the Twi'lek homeworld of Ryloth was represented in the Galactic Senate by the corpulent blue-skinned politician Orn Free Taa. Even a politician of high office was not above flaunting a pair of lovely Twi'lek aides as a sign of influence and wealth.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/twi-lek-main_93917d40.jpeg',
    },
    {
        name:'Aleena',
        description:`Aleena are a short, blue- and scaly-skinned people, featuring large mouths filled with tiny teeth. They are a friendly people, welcoming the clone army and seeking peace with fellow co-habitors of Aleen. The podracer Ratts Tyerell is an Aleena.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_aleena_01_169_04301079.jpeg',
    },
    {
        name:'Vulptereen',
        description:`The Vulptereen were native to the planet of Vulpter, a world that once contained a thriving ecosystem. The Vulptereen, however, transformed their verdant homeworld into a wasteland due to their over-industrialization.`,
        speciesImageLink:'https://static.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png',
    },
    {
        name:'Xexto',
        description:`Xexto were a sentient species of slight, spindly, six-limbed aliens who were native to the planet Troiken. Xexto were highly dexterous, enabling them to participate in the highly dangerous sport of Podracing. Slingshots were extremely popular with Xexto, since their multiple sets of limbs made the weapons convenient to use. Gasgano, a famed Podracer pilot, was a Xexto, as was the pickpocket and pawn shop owner Ferpil Wallaway. A Xexto known as Sister Six worked as an assassin during the Galactic Civil War, while Captain Perrili of the bulk freighter Romary was a smuggler and Resistance contact`,
        speciesImageLink:'https://static.wikia.nocookie.net/starwars/images/6/6e/Gasgano-TPM.png',
    },
    {
        name:'Toong',
        description:`The Toong were a sentient species of bipeds with a unique appearance that were native to the planet Tund. They possessed long legs and arms, several skin colors, and a large head located where the torso would normally be in humanoids. One famous Toong was Ben Quadinaros, a podracer who participated in the Boonta Eve Classic.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_benquadinaros_01_169_0c77b6a0.jpeg',
    },
    {
        name:'Cerean',
        description:`Cereans were mammalian humanoids with massive coned craniums that contained complex binary brains. During the last days of the Galactic Republic, a Cerean named Ki-Adi-Mundi was a prominent member of the Jedi Council. They hail from planet Cerea.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_cerean_01_169_61617903.jpeg',
    },
    {
        name:'Nautolan',
        description:`Nautolans are amphibious beings with tentacles draping over their shoulders and large black eyes from the planet Glee Anselm. Jedi Kit Fisto was a notable Nautolan.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_nautolan_01_169_9be3d603.jpeg',
    },
    {
        name:'Zabrak',
        description:`Inhabitants of the planet Dathomir. The Dathomirian Zabrak males, known as the Nightbrothers, are easily identifiable by the intimidating crown of horns around their head, as well as the distinct markings on their skin. The females, known as Nightsisters, have pale skin and are known to be powerful witches.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_dathomirian_01_169_7cb460fd.jpeg',
    },
    {
        name:'Tholothian',
        description:`Tholothians were a species of sentient humanoids native to the planet Tholoth. They could be distinguished from typical humans by their partial bluish skin pigmentation, their scaled craniums and fleshy white, blue, or red tendrils that sprouted from their skullcaps. Jedi Adi Gallia, Stass Allie, Indeera Stokes, former Padawan Ty Yorrick, and the youngling Katooni were members of the species.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/stass-allie_cbfbe9a1.jpeg',
    },
    {
        name:'Iktotchi',
        description:`Iktotchi were a horned sentient species from the moon Iktotch. Jedi Master Saesee Tiin, a member of the Jedi High Council prior to and during the Clone Wars, was an Iktotchi.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_saeseetiin_01_169_c9a8a41c.jpeg',
    },
    {
        name:'Quermian',
        description:`Quermians were a gaunt, long-necked humanoid sentient species native to the planet Quermia. They had two brains, one located inside their head and the other within their chest cavity, and two pairs of arms. During the Trade Federation's Invasion of Naboo, four Quermians were enrolled in the Jedi Order, one of whom was Jedi Master Yarael Poof, a member of the Jedi High Council.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-08-03_at_10_b0b47660.jpeg',
    },
    {
        name:'Kel Dor',
        description:`Kel Dors were a sentient species native to the planet Dorin. In order to survive oxygen-rich environments, they were required to wear specialized breath masks that covered their eyes and nostrils. A notable Kel Dor was Jedi Master Plo Koon, who served on the Jedi Council prior to the fall of the Jedi Order. He was among the Jedi killed during Order 66. Bo Keevil was also a member of the species, who served as a pilot in Ace Squadron.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_plokoon_01_169_92e6679c.jpeg',
    },
    {
        name:'Chagrian',
        description:`These amphibious bipeds had long, black forked tongues, blue skin, and two pairs of horns. The top pair of horns protruded from their skulls and the other pair came from fleshy head tails that grow over their shoulders. A Chagrian, Mas Amedda, rose to the rank of Vice Chair of the Galactic Senate during the waning days of the Republic and became Grand Vizier to Emperor Palpatine at the formation of the Empire.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_chagrain_01_169_e8ce3def.jpeg',
    },
    {
        name:'Geonosian',
        description:`Geonosians are insect-like beings, complete with wings, nesting in colonies, who conspired with the Separatists to develop plans for the first Death Star.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_geonosian_01_169_c6020111.jpeg',
    },
    {
        name:'Mirialan',
        description:`Mirialans are human-like, sentient beings with yellow-green skin, and patterned black markings on their face.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_mirialan_01_169_958106f8.jpeg',
    },
    {
        name:'Clawdite',
        description:`Clawdites were a sentient reptilian species whose members could change shape to impersonate any humanoid close to their shape. Chromatophores allowed Clawdites to replicate the appearance of another person, but could not change their body size or mass. Adopting a new form, however required great concentration, and wearing heavy armor could interfere with the shape-shifting. Many Clawdites chose to transform into personas that they would use in public so as to not reveal themselves as Clawdites.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/zam-wesell_bbaffe9f.jpeg',
    },
    {
        name:'Besalisk',
        description:`Besalisks are a species of humanoid being with four arms and inflatable wattle. Dexter Jettster, a Besalisk, owned the popular eatery Dex's Diner on Coruscant.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_besalisk_01_169_875a3eee.jpeg',
    },
    {
        name:'Kaminoan',
        description:`Kaminoans are very tall, with long, slender bodies giving them a graceful, gliding walk, and have large black eyes with white pupils. They are known to be expert cloners, and developed the Grand Army of the Republic.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/kaminoan-main-image_8f582a48.jpeg',
    },
    {
        name:'Skakoan',
        description:`Skakoans were a sentient species native to the planet Skako. In order to survive off of their homeworld, they were required to wear pressure suits to simulate its unique atmosphere and pressure, which were vastly different from the galactic standard. A male Skakoan known as Wat Tambor was the foreman of the Techno Union during the final years of the Galactic Republic.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/1-wat-tambor-bio-1_copy_279d4f2b.jpeg',
    },
    {
        name:'Muun',
        description:`Muuns were a thin, tall humanoid species who ran the InterGalactic Banking Clan. Senator Rush Clovis was raised by a family of Muuns. They constructed their empire high amidst snowy mountain peaks. The species were able to have a connection to the Force, and use it.`,
        speciesImageLink:'https://static.wikia.nocookie.net/star-wars-canon/images/6/6f/SanHill_hs.jpg',
    },
    {
        name:'Togruta',
        description:`Native to the planet Shili, the Togruta are notable for their striped, horn-like montrals and head-tails. The species has spread beyond their homeworld to colonies such as Kiros, which was despoiled by Zygerrian slavers during the Clone Wars. Notable Togruta include Governor Roshti of Kiros and three members of the Jedi Order: Ashla, a youngling; the Jedi Master Shaak Ti; and Anakin Skywalker’s Padawan, Ahsoka Tano.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_togruta_01_169_4618d329.jpeg',
    },
    {
        name:'Kaleesh',
        description:`The Kaleesh were a sentient species from the Wild Space world of Kalee. They had red skin, tusks, and long nostrils, yellow eyes with slit pupils, and bendback legs and were a proud and warlike people despite their technological inferiority. When in battle, they wore masks made of carved animal bones painted with blood. The most notorious member of the species, General Grievous, fought as the Supreme Martial Commander of the Separatist Droid Armies during the Clone Wars.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/General-Grievous_c9df9cb5.jpeg',
    },
    {
        name:`Pau'an`,
        description:`Pau'ans are tall humanoids from Utapau with an intimidating appearance, including jagged teeth, nails, and lined skin. The Pau’ans shared Utapau with their smaller neighbors, the Utai, as well as with bands of Amani and Sugi. The Pau’ans ran Utapau’s government and dealt with outsiders visiting the planet. The Inquisitor, the Empire's Jedi hunter, was a Pau'an.`,
        speciesImageLink:'https://lumiere-a.akamaihd.net/v1/images/databank_pauan_01_169_7fbc02c1.jpeg',
    },
];

export default SpeciesData;