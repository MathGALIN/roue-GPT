// ============================================================
// ROUE GPT — Application principale (v2 - Premium UI)
// ============================================================

// Données films intégrées (évite les problèmes CORS en file://)
const FILMS_DATA = [
  {
    "id": 1,
    "title": "Stalker",
    "titleFr": "Stalker",
    "year": 1979,
    "director": "Andreï Tarkovski",
    "genres": ["Science-fiction", "Drame"],
    "country": "URSS",
    "duration": 163,
    "synopsis": "Un passeur clandestin guide un écrivain et un scientifique à travers la Zone, un territoire interdit abritant une chambre censée exaucer les désirs les plus profonds. Un voyage contemplatif et philosophique sur la foi et la nature humaine.",
    "note": 8.2,
    "type": "film"
  },
  {
    "id": 2,
    "title": "Dark City",
    "titleFr": "Dark City",
    "year": 1998,
    "director": "Alex Proyas",
    "genres": ["Science-fiction", "Thriller"],
    "country": "Australie",
    "duration": 100,
    "synopsis": "Un homme se réveille sans aucun souvenir dans une métropole plongée dans une nuit éternelle. Pourchassé par des êtres capables de remodeler la réalité, il découvre que la ville cache un terrible secret. Sorti la même année que Matrix, mais resté injustement dans son ombre.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 3,
    "title": "Moon",
    "titleFr": "Moon",
    "year": 2009,
    "director": "Duncan Jones",
    "genres": ["Science-fiction", "Drame"],
    "country": "Royaume-Uni",
    "duration": 97,
    "synopsis": "Sam Bell, seul employé d'une base lunaire, approche de la fin de son contrat de trois ans. Quand il découvre qu'il n'est pas aussi seul qu'il le pensait, sa perception de la réalité s'effondre.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 4,
    "title": "Primer",
    "titleFr": "Primer",
    "year": 2004,
    "director": "Shane Carruth",
    "genres": ["Science-fiction", "Thriller"],
    "country": "États-Unis",
    "duration": 77,
    "synopsis": "Deux ingénieurs bricolent dans leur garage et créent accidentellement une machine à remonter le temps. Un thriller de science-fiction ultra-cérébral au budget dérisoire, considéré comme l'un des films les plus complexes jamais réalisés.",
    "note": 6.9,
    "type": "film"
  },
  {
    "id": 5,
    "title": "Brazil",
    "titleFr": "Brazil",
    "year": 1985,
    "director": "Terry Gilliam",
    "genres": ["Science-fiction", "Comédie"],
    "country": "Royaume-Uni",
    "duration": 132,
    "synopsis": "Dans une société bureaucratique dystopique, un fonctionnaire rêveur se retrouve pris dans les engrenages d'un système totalitaire après une erreur administrative. La vision cauchemardesque et satirique de Terry Gilliam.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 6,
    "title": "Solaris",
    "titleFr": "Solaris",
    "year": 1972,
    "director": "Andreï Tarkovski",
    "genres": ["Science-fiction", "Drame"],
    "country": "URSS",
    "duration": 167,
    "synopsis": "Un psychologue est envoyé sur une station spatiale en orbite autour de Solaris, dont l'océan semble matérialiser les souvenirs les plus intimes des astronautes. Une méditation profonde sur l'amour, le deuil et les limites de la connaissance.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 7,
    "title": "eXistenZ",
    "titleFr": "eXistenZ",
    "year": 1999,
    "director": "David Cronenberg",
    "genres": ["Science-fiction", "Thriller"],
    "country": "Canada",
    "duration": 97,
    "synopsis": "Une conceptrice de jeux vidéo en réalité virtuelle est la cible d'un groupe de résistants anti-technologie. Avec un stagiaire en sécurité, elle plonge dans son dernier jeu où les frontières entre réel et virtuel s'effacent.",
    "note": 6.8,
    "type": "film"
  },
  {
    "id": 8,
    "title": "Pi",
    "titleFr": "Pi",
    "year": 1998,
    "director": "Darren Aronofsky",
    "genres": ["Science-fiction", "Thriller"],
    "country": "États-Unis",
    "duration": 84,
    "synopsis": "Un mathématicien paranoïaque est persuadé que tout dans la nature peut être compris à travers les nombres. Sa quête obsessionnelle d'un schéma universel attire l'attention de Wall Street et d'une secte kabbaliste.",
    "note": 7.4,
    "type": "film"
  },
  {
    "id": 9,
    "title": "Under the Skin",
    "titleFr": "Under the Skin",
    "year": 2013,
    "director": "Jonathan Glazer",
    "genres": ["Science-fiction", "Horreur"],
    "country": "Royaume-Uni",
    "duration": 108,
    "synopsis": "Une mystérieuse femme parcourt les rues d'Écosse, séduisant des hommes solitaires pour les attirer vers un destin terrifiant. Un film hypnotique et dérangeant avec Scarlett Johansson dans un rôle inoubliable.",
    "note": 6.3,
    "type": "film"
  },
  {
    "id": 10,
    "title": "The Lobster",
    "titleFr": "The Lobster",
    "year": 2015,
    "director": "Yorgos Lanthimos",
    "genres": ["Science-fiction", "Comédie noire"],
    "country": "Grèce",
    "duration": 119,
    "synopsis": "Dans un futur dystopique, les célibataires sont envoyés dans un hôtel où ils ont 45 jours pour trouver l'âme sœur, sous peine d'être transformés en animal de leur choix. Une satire grinçante sur les conventions amoureuses.",
    "note": 7.1,
    "type": "film"
  },
  {
    "id": 11,
    "title": "Paprika",
    "titleFr": "Paprika",
    "year": 2006,
    "director": "Satoshi Kon",
    "genres": ["Science-fiction", "Fantasy"],
    "country": "Japon",
    "duration": 90,
    "synopsis": "Une chercheuse utilise un appareil révolutionnaire permettant de pénétrer dans les rêves à des fins thérapeutiques. Quand l'appareil est volé, la frontière entre monde onirique et réalité commence à s'effondrer.",
    "note": 7.7,
    "type": "anime"
  },
  {
    "id": 12,
    "title": "Perfect Blue",
    "titleFr": "Perfect Blue",
    "year": 1997,
    "director": "Satoshi Kon",
    "genres": ["Thriller", "Horreur"],
    "country": "Japon",
    "duration": 81,
    "synopsis": "Mima, chanteuse pop, quitte son groupe pour devenir actrice. Harcelée par un fan obsessionnel et rongée par le doute, elle perd progressivement prise sur la réalité. Un thriller psychologique d'animation qui a inspiré Darren Aronofsky.",
    "note": 8.0,
    "type": "anime"
  },
  {
    "id": 13,
    "title": "Millennium Actress",
    "titleFr": "Millennium Actress",
    "year": 2001,
    "director": "Satoshi Kon",
    "genres": ["Drame", "Romance"],
    "country": "Japon",
    "duration": 87,
    "synopsis": "Un documentariste retrace la carrière d'une actrice légendaire retirée du monde. À travers ses souvenirs, les frontières entre sa vie et ses rôles au cinéma se confondent dans un voyage à travers l'histoire du Japon.",
    "note": 7.9,
    "type": "anime"
  },
  {
    "id": 14,
    "title": "Tokyo Godfathers",
    "titleFr": "Tokyo Godfathers",
    "year": 2003,
    "director": "Satoshi Kon",
    "genres": ["Comédie", "Aventure"],
    "country": "Japon",
    "duration": 92,
    "synopsis": "La nuit de Noël à Tokyo, trois sans-abri découvrent un bébé abandonné dans les poubelles. Leur quête pour retrouver ses parents les entraîne dans une aventure pleine de coïncidences miraculeuses et d'humanité.",
    "note": 7.9,
    "type": "anime"
  },
  {
    "id": 15,
    "title": "Ghost in the Shell",
    "titleFr": "Ghost in the Shell",
    "year": 1995,
    "director": "Mamoru Oshii",
    "genres": ["Science-fiction", "Action"],
    "country": "Japon",
    "duration": 83,
    "synopsis": "Dans un futur cyberpunk, le Major Kusanagi, cyborg d'élite, traque un hacker mystérieux capable de pirater les esprits humains. Un film d'animation révolutionnaire qui questionne l'identité à l'ère numérique.",
    "note": 8.0,
    "type": "anime"
  },
  {
    "id": 16,
    "title": "Akira",
    "titleFr": "Akira",
    "year": 1988,
    "director": "Katsuhiro Otomo",
    "genres": ["Science-fiction", "Action"],
    "country": "Japon",
    "duration": 124,
    "synopsis": "Dans un Neo-Tokyo post-apocalyptique, un jeune motard acquiert d'immenses pouvoirs psychiques après un accident, menaçant de détruire la ville entière. Un monument de l'animation japonaise qui a redéfini le genre.",
    "note": 8.0,
    "type": "anime"
  },
  {
    "id": 17,
    "title": "Jin-Roh: The Wolf Brigade",
    "titleFr": "Jin-Roh, la brigade des loups",
    "year": 1999,
    "director": "Hiroyuki Okiura",
    "genres": ["Thriller", "Drame"],
    "country": "Japon",
    "duration": 102,
    "synopsis": "Dans un Japon alternatif d'après-guerre, un membre d'une unité anti-émeute d'élite est hanté par le souvenir d'une jeune terroriste. Un anime politique et mélancolique, relecture sombre du Petit Chaperon rouge.",
    "note": 7.5,
    "type": "anime"
  },
  {
    "id": 18,
    "title": "Redline",
    "titleFr": "Redline",
    "year": 2009,
    "director": "Takeshi Koike",
    "genres": ["Action", "Science-fiction"],
    "country": "Japon",
    "duration": 102,
    "synopsis": "JP, pilote téméraire, se qualifie pour la Redline, la course spatiale la plus dangereuse de la galaxie. Sept ans d'animation artisanale pour un spectacle visuel vertigineux et une explosion d'adrénaline pure.",
    "note": 7.4,
    "type": "anime"
  },
  {
    "id": 19,
    "title": "Tekkonkinkreet",
    "titleFr": "Tekkonkinkreet",
    "year": 2006,
    "director": "Michael Arias",
    "genres": ["Action", "Drame"],
    "country": "Japon",
    "duration": 111,
    "synopsis": "Noir et Blanc, deux orphelins des rues, règnent sur leur quartier de Takara-machi. Quand des yakuzas et des promoteurs menacent leur territoire, les deux frères de cœur se battent pour préserver leur monde.",
    "note": 7.5,
    "type": "anime"
  },
  {
    "id": 20,
    "title": "Vampire Hunter D: Bloodlust",
    "titleFr": "Vampire Hunter D: Bloodlust",
    "year": 2000,
    "director": "Yoshiaki Kawajiri",
    "genres": ["Fantasy", "Action"],
    "country": "Japon",
    "duration": 103,
    "synopsis": "Dans un futur post-apocalyptique, le chasseur de vampires D est engagé pour retrouver une jeune femme enlevée par un noble vampire. Une quête épique aux frontières du western gothique et de la dark fantasy.",
    "note": 7.7,
    "type": "anime"
  },
  {
    "id": 21,
    "title": "Sword of the Stranger",
    "titleFr": "Sword of the Stranger",
    "year": 2007,
    "director": "Masahiro Andō",
    "genres": ["Action", "Historique"],
    "country": "Japon",
    "duration": 103,
    "synopsis": "Un jeune garçon et son chien fuient des guerriers chinois qui le recherchent pour un rituel sanglant. Ils trouvent un allié inattendu en un rōnin sans nom au passé trouble. Des scènes de combat parmi les plus spectaculaires de l'animation.",
    "note": 7.6,
    "type": "anime"
  },
  {
    "id": 22,
    "title": "Metropolis",
    "titleFr": "Metropolis",
    "year": 2001,
    "director": "Rintaro",
    "genres": ["Science-fiction", "Drame"],
    "country": "Japon",
    "duration": 108,
    "synopsis": "Dans une mégalopole futuriste stratifiée, un détective et son neveu recherchent un scientifique fou qui a créé un androïde à l'image de sa fille décédée. Librement inspiré du manga d'Osamu Tezuka et du film de Fritz Lang.",
    "note": 7.2,
    "type": "anime"
  },
  {
    "id": 23,
    "title": "Mind Game",
    "titleFr": "Mind Game",
    "year": 2004,
    "director": "Masaaki Yuasa",
    "genres": ["Comédie", "Fantasy"],
    "country": "Japon",
    "duration": 103,
    "synopsis": "Après s'être fait tuer par un yakuza, Nishi obtient une seconde chance et se retrouve avalé par une baleine avec la femme qu'il aime. Un anime visuellement démentiel et inclassable signé Masaaki Yuasa.",
    "note": 7.8,
    "type": "anime"
  },
  {
    "id": 24,
    "title": "La Planète sauvage",
    "titleFr": "La Planète sauvage",
    "year": 1973,
    "director": "René Laloux",
    "genres": ["Science-fiction", "Animation"],
    "country": "France",
    "duration": 72,
    "synopsis": "Sur une planète lointaine, les minuscules Oms sont réduits en esclavage par les géants Draags. Un jeune Om s'instruit grâce à une machine d'apprentissage et mène la révolte de son peuple. Un classique aux visuels surréalistes inoubliables.",
    "note": 7.8,
    "type": "animation"
  },
  {
    "id": 25,
    "title": "Les Triplettes de Belleville",
    "titleFr": "Les Triplettes de Belleville",
    "year": 2003,
    "director": "Sylvain Chomet",
    "genres": ["Comédie", "Animation"],
    "country": "France",
    "duration": 80,
    "synopsis": "Quand son petit-fils cycliste est kidnappé pendant le Tour de France, une grand-mère déterminée traverse l'Atlantique pour le retrouver avec l'aide de trois anciennes chanteuses de music-hall. Un bijou d'animation quasi muet.",
    "note": 7.8,
    "type": "animation"
  },
  {
    "id": 26,
    "title": "Persepolis",
    "titleFr": "Persepolis",
    "year": 2007,
    "director": "Marjane Satrapi",
    "genres": ["Drame", "Animation"],
    "country": "France",
    "duration": 96,
    "synopsis": "Marjane grandit à Téhéran pendant la révolution islamique. Entre contestation et conformisme, elle découvre le punk, l'exil et la quête d'identité. Adapté de la bande dessinée autobiographique de Satrapi.",
    "note": 8.0,
    "type": "animation"
  },
  {
    "id": 27,
    "title": "Waltz with Bashir",
    "titleFr": "Valse avec Bachir",
    "year": 2008,
    "director": "Ari Folman",
    "genres": ["Guerre", "Animation"],
    "country": "Israël",
    "duration": 90,
    "synopsis": "Un ancien soldat israélien, hanté par des visions nocturnes, tente de reconstituer ses souvenirs perdus de la guerre du Liban en 1982. Un documentaire d'animation bouleversant sur la mémoire et les traumatismes de guerre.",
    "note": 8.0,
    "type": "animation"
  },
  {
    "id": 28,
    "title": "The Secret of Kells",
    "titleFr": "Brendan et le secret de Kells",
    "year": 2009,
    "director": "Tomm Moore",
    "genres": ["Fantasy", "Animation"],
    "country": "Irlande",
    "duration": 75,
    "synopsis": "Dans l'Irlande médiévale, le jeune moine Brendan brave les dangers de la forêt enchantée pour achever un manuscrit enluminé légendaire. Un conte visuel éblouissant inspiré du véritable Livre de Kells.",
    "note": 7.6,
    "type": "animation"
  },
  {
    "id": 29,
    "title": "Song of the Sea",
    "titleFr": "Le Chant de la mer",
    "year": 2014,
    "director": "Tomm Moore",
    "genres": ["Fantasy", "Animation"],
    "country": "Irlande",
    "duration": 93,
    "synopsis": "Ben et sa petite sœur Saoirse, dernière des selkies, doivent sauver les esprits du monde merveilleux irlandais. Un film d'animation d'une beauté envoûtante, nourri de folklore celtique.",
    "note": 8.1,
    "type": "animation"
  },
  {
    "id": 30,
    "title": "La Tortue rouge",
    "titleFr": "La Tortue rouge",
    "year": 2016,
    "director": "Michael Dudok de Wit",
    "genres": ["Drame", "Animation"],
    "country": "France",
    "duration": 80,
    "synopsis": "Un naufragé échoué sur une île déserte tente de s'échapper, mais une mystérieuse tortue rouge détruit systématiquement son radeau. Un conte universel et silencieux sur le cycle de la vie, coproduit par le Studio Ghibli.",
    "note": 7.6,
    "type": "animation"
  },
  {
    "id": 31,
    "title": "Panique au village",
    "titleFr": "Panique au village",
    "year": 2009,
    "director": "Stéphane Aubier, Vincent Patar",
    "genres": ["Comédie", "Animation"],
    "country": "Belgique",
    "duration": 75,
    "synopsis": "Cowboy et Indien veulent construire un barbecue pour l'anniversaire de Cheval, mais commandent accidentellement 50 millions de briques. Une aventure délirante en stop-motion belge à l'humour absurde et irrésistible.",
    "note": 7.4,
    "type": "animation"
  },
  {
    "id": 32,
    "title": "Gandahar",
    "titleFr": "Gandahar",
    "year": 1988,
    "director": "René Laloux",
    "genres": ["Science-fiction", "Animation"],
    "country": "France",
    "duration": 83,
    "synopsis": "Le paisible pays de Gandahar est menacé par une armée de robots qui pétrifient ses habitants. Un guerrier est envoyé pour trouver l'origine de cette menace. Un classique méconnu de l'animation française.",
    "note": 6.9,
    "type": "animation"
  },
  {
    "id": 33,
    "title": "Anomalisa",
    "titleFr": "Anomalisa",
    "year": 2015,
    "director": "Charlie Kaufman, Duke Johnson",
    "genres": ["Drame", "Animation"],
    "country": "États-Unis",
    "duration": 90,
    "synopsis": "Michael, auteur à succès, perçoit tous les gens comme identiques — même voix, même visage. Jusqu'à sa rencontre avec Lisa dans un hôtel de Cincinnati. Un film en stop-motion d'une mélancolie saisissante.",
    "note": 7.3,
    "type": "animation"
  },
  {
    "id": 34,
    "title": "Spoorloos",
    "titleFr": "L'Homme qui voulait savoir",
    "year": 1988,
    "director": "George Sluizer",
    "genres": ["Thriller", "Drame"],
    "country": "Pays-Bas",
    "duration": 107,
    "synopsis": "Trois ans après la disparition de sa petite amie dans une station-service, Rex est obsédé par la vérité. Le ravisseur, un homme ordinaire, lui propose un marché : vivre ce qu'elle a vécu pour enfin savoir.",
    "note": 7.7,
    "type": "film"
  },
  {
    "id": 35,
    "title": "Caché",
    "titleFr": "Caché",
    "year": 2005,
    "director": "Michael Haneke",
    "genres": ["Thriller", "Drame"],
    "country": "France",
    "duration": 117,
    "synopsis": "Un présentateur télé parisien reçoit des cassettes de surveillance filmées devant son domicile, accompagnées de dessins menaçants. L'enquête le ramène vers un passé colonial qu'il croyait enfoui.",
    "note": 7.3,
    "type": "film"
  },
  {
    "id": 36,
    "title": "Memories of Murder",
    "titleFr": "Memories of Murder",
    "year": 2003,
    "director": "Bong Joon-ho",
    "genres": ["Thriller", "Crime"],
    "country": "Corée du Sud",
    "duration": 131,
    "synopsis": "En 1986 dans la campagne sud-coréenne, deux détectives aux méthodes opposées enquêtent sur une série de meurtres de femmes. Inspiré de la première affaire de tueur en série du pays, restée non résolue pendant des décennies.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 37,
    "title": "Cure",
    "titleFr": "Cure",
    "year": 1997,
    "director": "Kiyoshi Kurosawa",
    "genres": ["Thriller", "Horreur"],
    "country": "Japon",
    "duration": 111,
    "synopsis": "Un détective traque un mystérieux hypnotiseur qui pousse des gens ordinaires à commettre des meurtres atroces sans en garder le moindre souvenir. Un thriller psychologique glaçant.",
    "note": 7.7,
    "type": "film"
  },
  {
    "id": 38,
    "title": "Infernal Affairs",
    "titleFr": "Infernal Affairs",
    "year": 2002,
    "director": "Andrew Lau, Alan Mak",
    "genres": ["Thriller", "Crime"],
    "country": "Hong Kong",
    "duration": 101,
    "synopsis": "Un policier infiltré dans la triade et un mafieux infiltré dans la police se traquent mutuellement sans connaître l'identité de l'autre. Le thriller hongkongais original qui a inspiré Les Infiltrés de Scorsese.",
    "note": 8.0,
    "type": "film"
  },
  {
    "id": 39,
    "title": "The Handmaiden",
    "titleFr": "Mademoiselle",
    "year": 2016,
    "director": "Park Chan-wook",
    "genres": ["Thriller", "Romance"],
    "country": "Corée du Sud",
    "duration": 145,
    "synopsis": "Dans la Corée des années 1930, une pickpocket est engagée comme servante d'une riche héritière dans le cadre d'une escroquerie. Mais les sentiments viennent bouleverser le plan. Un thriller érotique virtuose.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 40,
    "title": "Le Trou",
    "titleFr": "Le Trou",
    "year": 1960,
    "director": "Jacques Becker",
    "genres": ["Thriller", "Drame"],
    "country": "France",
    "duration": 132,
    "synopsis": "Cinq détenus de la prison de la Santé planifient une évasion minutieuse en perçant un tunnel à travers les sous-sols. Inspiré d'une histoire vraie, un modèle de suspense et de réalisme carcéral.",
    "note": 8.4,
    "type": "film"
  },
  {
    "id": 41,
    "title": "The Wailing",
    "titleFr": "The Wailing",
    "year": 2016,
    "director": "Na Hong-jin",
    "genres": ["Horreur", "Thriller"],
    "country": "Corée du Sud",
    "duration": 156,
    "synopsis": "Après l'arrivée d'un mystérieux étranger japonais dans un village coréen, les habitants sombrent dans la folie meurtrière. Un policier local tente de protéger sa fille dans un climat de paranoïa croissante.",
    "note": 7.4,
    "type": "film"
  },
  {
    "id": 42,
    "title": "Audition",
    "titleFr": "Audition",
    "year": 1999,
    "director": "Takashi Miike",
    "genres": ["Horreur", "Drame"],
    "country": "Japon",
    "duration": 115,
    "synopsis": "Un veuf organise un faux casting pour trouver sa future compagne. La jeune femme qu'il choisit semble parfaite, mais cache un passé terrifiant. Un film dont la dernière demi-heure est devenue légendaire.",
    "note": 7.2,
    "type": "film"
  },
  {
    "id": 43,
    "title": "El Orfanato",
    "titleFr": "L'Orphelinat",
    "year": 2007,
    "director": "J.A. Bayona",
    "genres": ["Horreur", "Drame"],
    "country": "Espagne",
    "duration": 105,
    "synopsis": "Laura retourne dans l'orphelinat où elle a grandi pour en faire un foyer pour enfants handicapés. Quand son fils adoptif disparaît après avoir évoqué des amis imaginaires, elle découvre les sombres secrets du lieu.",
    "note": 7.4,
    "type": "film"
  },
  {
    "id": 44,
    "title": "[REC]",
    "titleFr": "[REC]",
    "year": 2007,
    "director": "Jaume Balagueró, Paco Plaza",
    "genres": ["Horreur"],
    "country": "Espagne",
    "duration": 78,
    "synopsis": "Une journaliste et son cameraman suivent des pompiers lors d'une intervention nocturne dans un immeuble barcelonais. Ce qui devait être un reportage de routine se transforme en cauchemar. Un found footage terriblement efficace.",
    "note": 7.4,
    "type": "film"
  },
  {
    "id": 45,
    "title": "Suspiria",
    "titleFr": "Suspiria",
    "year": 1977,
    "director": "Dario Argento",
    "genres": ["Horreur", "Fantasy"],
    "country": "Italie",
    "duration": 99,
    "synopsis": "Une jeune danseuse américaine intègre une prestigieuse académie de danse en Allemagne et découvre que l'école est le repaire d'un coven de sorcières. Un cauchemar baroque aux couleurs hallucinées.",
    "note": 7.4,
    "type": "film"
  },
  {
    "id": 46,
    "title": "Les Diaboliques",
    "titleFr": "Les Diaboliques",
    "year": 1955,
    "director": "Henri-Georges Clouzot",
    "genres": ["Thriller", "Horreur"],
    "country": "France",
    "duration": 117,
    "synopsis": "La femme et la maîtresse d'un directeur d'école tyrannique s'allient pour l'assassiner. Mais le corps disparaît et d'étranges événements se produisent. Un chef-d'œuvre du suspense qui a influencé Hitchcock lui-même.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 47,
    "title": "Possession",
    "titleFr": "Possession",
    "year": 1981,
    "director": "Andrzej Żuławski",
    "genres": ["Horreur", "Drame"],
    "country": "France",
    "duration": 124,
    "synopsis": "À Berlin-Ouest, un espion rentre chez lui pour découvrir que sa femme veut le quitter. Leur séparation prend des proportions monstrueuses — au sens propre. Un film d'horreur conjugal démentiel avec Isabelle Adjani au sommet.",
    "note": 7.4,
    "type": "film"
  },
  {
    "id": 48,
    "title": "Synecdoche, New York",
    "titleFr": "Synecdoche, New York",
    "year": 2008,
    "director": "Charlie Kaufman",
    "genres": ["Drame"],
    "country": "États-Unis",
    "duration": 124,
    "synopsis": "Un metteur en scène hypocondriaque monte sa pièce la plus ambitieuse : une réplique grandeur nature de New York dans un entrepôt. Une méditation vertigineuse sur la mort, la création et le sens de la vie.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 49,
    "title": "The Fall",
    "titleFr": "The Fall",
    "year": 2006,
    "director": "Tarsem Singh",
    "genres": ["Aventure", "Drame"],
    "country": "États-Unis",
    "duration": 117,
    "synopsis": "Dans un hôpital des années 1920, un cascadeur immobilisé raconte une histoire épique à une fillette pour la manipuler. Le conte prend vie dans des décors naturels spectaculaires filmés dans 28 pays.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 50,
    "title": "Barton Fink",
    "titleFr": "Barton Fink",
    "year": 1991,
    "director": "Joel et Ethan Coen",
    "genres": ["Drame", "Comédie noire"],
    "country": "États-Unis",
    "duration": 116,
    "synopsis": "Un dramaturge new-yorkais intellectuel est engagé par Hollywood pour écrire un film de catch. Enfermé dans un hôtel miteux et en proie au syndrome de la page blanche, il sombre dans un cauchemar kafkaïen.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 51,
    "title": "Der Himmel über Berlin",
    "titleFr": "Les Ailes du désir",
    "year": 1987,
    "director": "Wim Wenders",
    "genres": ["Drame", "Fantasy"],
    "country": "Allemagne",
    "duration": 128,
    "synopsis": "Deux anges veillent sur Berlin, écoutant les pensées des mortels sans pouvoir intervenir. L'un d'eux tombe amoureux d'une trapéziste et envisage de renoncer à l'éternité pour devenir humain.",
    "note": 8.0,
    "type": "film"
  },
  {
    "id": 52,
    "title": "La Double Vie de Véronique",
    "titleFr": "La Double Vie de Véronique",
    "year": 1991,
    "director": "Krzysztof Kieślowski",
    "genres": ["Drame", "Romance"],
    "country": "France",
    "duration": 98,
    "synopsis": "Deux jeunes femmes identiques, l'une polonaise et l'autre française, mènent des vies parallèles sans se connaître. Quand l'une meurt, l'autre ressent un vide inexplicable. Un film envoûtant sur les liens invisibles entre les êtres.",
    "note": 7.8,
    "type": "film"
  },
  {
    "id": 53,
    "title": "Ikiru",
    "titleFr": "Vivre",
    "year": 1952,
    "director": "Akira Kurosawa",
    "genres": ["Drame"],
    "country": "Japon",
    "duration": 143,
    "synopsis": "Un fonctionnaire japonais apprend qu'il est atteint d'un cancer en phase terminale. Réalisant qu'il n'a jamais vécu, il décide de consacrer ses derniers mois à construire un parc pour enfants. Un des films les plus bouleversants de Kurosawa.",
    "note": 8.3,
    "type": "film"
  },
  {
    "id": 54,
    "title": "In the Mood for Love",
    "titleFr": "In the Mood for Love",
    "year": 2000,
    "director": "Wong Kar-wai",
    "genres": ["Drame", "Romance"],
    "country": "Hong Kong",
    "duration": 98,
    "synopsis": "Hong Kong, 1962. Deux voisins découvrent que leurs époux respectifs ont une liaison. Leur rapprochement pudique devient une histoire d'amour impossible d'une beauté douloureuse. Un chef-d'œuvre d'élégance et de retenue.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 55,
    "title": "Amores perros",
    "titleFr": "Amours chiennes",
    "year": 2000,
    "director": "Alejandro González Iñárritu",
    "genres": ["Drame", "Thriller"],
    "country": "Mexique",
    "duration": 154,
    "synopsis": "Trois histoires s'entremêlent autour d'un accident de voiture à Mexico : un adolescent dans les combats de chiens, un mannequin brisé et un ancien guérillero devenu tueur à gages. Le premier film percutant d'Iñárritu.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 56,
    "title": "Yi Yi",
    "titleFr": "Yi Yi",
    "year": 2000,
    "director": "Edward Yang",
    "genres": ["Drame"],
    "country": "Taïwan",
    "duration": 173,
    "synopsis": "Le quotidien d'une famille taïwanaise est bouleversé par un mariage, un coma, un premier amour et des retrouvailles avec un ex. Edward Yang livre une fresque familiale d'une humanité rare, véritable somme de la vie.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 57,
    "title": "Tokyo Story",
    "titleFr": "Voyage à Tokyo",
    "year": 1953,
    "director": "Yasujirō Ozu",
    "genres": ["Drame"],
    "country": "Japon",
    "duration": 136,
    "synopsis": "Un couple âgé rend visite à ses enfants à Tokyo, mais ceux-ci, trop occupés, les traitent avec indifférence. Seule leur belle-fille veuve leur témoigne de l'attention. Le chef-d'œuvre d'Ozu sur la famille et le temps qui passe.",
    "note": 8.2,
    "type": "film"
  },
  {
    "id": 58,
    "title": "Ta'm e guilass",
    "titleFr": "Le Goût de la cerise",
    "year": 1997,
    "director": "Abbas Kiarostami",
    "genres": ["Drame"],
    "country": "Iran",
    "duration": 95,
    "synopsis": "Un homme parcourt les collines de Téhéran en voiture, cherchant quelqu'un qui acceptera de l'enterrer après son suicide. Chaque passager lui offre une perspective différente sur la vie. Palme d'or méditative de Kiarostami.",
    "note": 7.7,
    "type": "film"
  },
  {
    "id": 59,
    "title": "Seppuku",
    "titleFr": "Harakiri",
    "year": 1962,
    "director": "Masaki Kobayashi",
    "genres": ["Drame", "Historique"],
    "country": "Japon",
    "duration": 133,
    "synopsis": "Un rōnin se présente aux portes d'un clan féodal pour demander l'autorisation de pratiquer le seppuku. Derrière cette requête se cache une vengeance longuement préparée. Un drame samouraï magistral qui déconstruit le code d'honneur.",
    "note": 8.6,
    "type": "film"
  },
  {
    "id": 60,
    "title": "Tampopo",
    "titleFr": "Tampopo",
    "year": 1985,
    "director": "Juzo Itami",
    "genres": ["Comédie"],
    "country": "Japon",
    "duration": 114,
    "synopsis": "Un routier aide une veuve à transformer son médiocre restaurant de ramen en établissement d'excellence. Entrecoupé de vignettes sur le rapport des Japonais à la nourriture. Un western culinaire jubilatoire et unique en son genre.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 61,
    "title": "Four Lions",
    "titleFr": "We Are Four Lions",
    "year": 2010,
    "director": "Chris Morris",
    "genres": ["Comédie noire"],
    "country": "Royaume-Uni",
    "duration": 97,
    "synopsis": "Quatre apprentis terroristes islamistes de Sheffield préparent un attentat-suicide, mais leur incompétence totale transforme chaque tentative en fiasco. Une comédie noire britannique d'une audace rare.",
    "note": 7.3,
    "type": "film"
  },
  {
    "id": 62,
    "title": "Delicatessen",
    "titleFr": "Delicatessen",
    "year": 1991,
    "director": "Jean-Pierre Jeunet, Marc Caro",
    "genres": ["Comédie noire", "Science-fiction"],
    "country": "France",
    "duration": 99,
    "synopsis": "Dans un futur post-apocalyptique, un boucher tue les locataires de son immeuble pour nourrir ses clients. Un nouveau locataire, ancien clown, va perturber ce sinistre commerce. Le premier film délirant de Jeunet et Caro.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 63,
    "title": "Punch-Drunk Love",
    "titleFr": "Punch-Drunk Love",
    "year": 2002,
    "director": "Paul Thomas Anderson",
    "genres": ["Comédie", "Romance"],
    "country": "États-Unis",
    "duration": 95,
    "synopsis": "Barry, petit entrepreneur timide et colérique, tombe amoureux d'une femme mystérieuse tout en étant harcelé par une arnaque téléphonique. Adam Sandler dans un rôle dramatique inattendu dirigé par Paul Thomas Anderson.",
    "note": 7.3,
    "type": "film"
  },
  {
    "id": 64,
    "title": "Un prophète",
    "titleFr": "Un prophète",
    "year": 2009,
    "director": "Jacques Audiard",
    "genres": ["Crime", "Drame"],
    "country": "France",
    "duration": 155,
    "synopsis": "Malik, jeune Franco-Algérien de 19 ans condamné à six ans de prison, est pris sous la coupe d'un parrain corse. Il apprend les codes du milieu et gravit les échelons du crime. Grand Prix du Festival de Cannes.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 65,
    "title": "Oldboy",
    "titleFr": "Old Boy",
    "year": 2003,
    "director": "Park Chan-wook",
    "genres": ["Thriller", "Action"],
    "country": "Corée du Sud",
    "duration": 120,
    "synopsis": "Un homme est séquestré dans une chambre pendant quinze ans sans explication, puis libéré avec un téléphone et de l'argent. Il dispose de cinq jours pour comprendre pourquoi. Un thriller d'une violence et d'une inventivité sidérantes.",
    "note": 8.4,
    "type": "film"
  },
  {
    "id": 66,
    "title": "A Bittersweet Life",
    "titleFr": "A Bittersweet Life",
    "year": 2005,
    "director": "Kim Jee-woon",
    "genres": ["Action", "Crime"],
    "country": "Corée du Sud",
    "duration": 120,
    "synopsis": "Kim, bras droit loyal d'un patron de la pègre de Séoul, est chargé de surveiller la petite amie de son boss. Quand il hésite à la tuer, il se retrouve traqué par ceux qu'il servait. Un polar coréen élégant et brutal.",
    "note": 7.5,
    "type": "film"
  },
  {
    "id": 67,
    "title": "Gomorra",
    "titleFr": "Gomorra",
    "year": 2008,
    "director": "Matteo Garrone",
    "genres": ["Crime", "Drame"],
    "country": "Italie",
    "duration": 137,
    "synopsis": "Cinq histoires entremêlées dans l'univers de la Camorra napolitaine : un livreur d'argent sale, deux adolescents qui jouent aux gangsters, un tailleur exploité. Un portrait cru et réaliste du crime organisé italien.",
    "note": 7.0,
    "type": "film"
  },
  {
    "id": 68,
    "title": "Le Cercle rouge",
    "titleFr": "Le Cercle rouge",
    "year": 1970,
    "director": "Jean-Pierre Melville",
    "genres": ["Crime", "Thriller"],
    "country": "France",
    "duration": 140,
    "synopsis": "Un truand évadé, un ancien policier alcoolique et un tireur d'élite s'associent pour un cambriolage audacieux. Melville orchestre un polar minimaliste et mélancolique, sommet du film de casse à la française.",
    "note": 8.0,
    "type": "film"
  },
  {
    "id": 69,
    "title": "Le Samouraï",
    "titleFr": "Le Samouraï",
    "year": 1967,
    "director": "Jean-Pierre Melville",
    "genres": ["Crime", "Thriller"],
    "country": "France",
    "duration": 105,
    "synopsis": "Jef Costello, tueur à gages solitaire et méthodique, exécute un contrat dans une boîte de nuit mais est aperçu par une pianiste. La traque commence. Alain Delon incarne le crime stylisé à la perfection.",
    "note": 8.0,
    "type": "film"
  },
  {
    "id": 70,
    "title": "Du rififi chez les hommes",
    "titleFr": "Du rififi chez les hommes",
    "year": 1955,
    "director": "Jules Dassin",
    "genres": ["Crime", "Thriller"],
    "country": "France",
    "duration": 118,
    "synopsis": "Quatre malfrats montent un cambriolage chez un joaillier de la rue de la Paix. La scène du casse, trente minutes sans un mot ni une note de musique, est considérée comme l'une des plus grandes séquences du cinéma.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 71,
    "title": "The Raid",
    "titleFr": "The Raid",
    "year": 2011,
    "director": "Gareth Evans",
    "genres": ["Action"],
    "country": "Indonésie",
    "duration": 101,
    "synopsis": "Une unité de police d'élite est piégée dans un immeuble de trente étages contrôlé par un baron de la drogue. Ils doivent se battre étage par étage pour survivre. Un pur film d'action aux chorégraphies de combat époustouflantes.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 72,
    "title": "Hard Boiled",
    "titleFr": "À toute épreuve",
    "year": 1992,
    "director": "John Woo",
    "genres": ["Action", "Crime"],
    "country": "Hong Kong",
    "duration": 128,
    "synopsis": "Un inspecteur solitaire s'allie à un agent infiltré pour démanteler un réseau de trafiquants d'armes. John Woo livre un ballet de violence chorégraphié dans un hôpital, repoussant les limites du film d'action.",
    "note": 7.8,
    "type": "film"
  },
  {
    "id": 73,
    "title": "13 Assassins",
    "titleFr": "13 Assassins",
    "year": 2010,
    "director": "Takashi Miike",
    "genres": ["Action", "Historique"],
    "country": "Japon",
    "duration": 141,
    "synopsis": "Dans le Japon féodal, treize samouraïs sont recrutés pour assassiner le demi-frère sadique du Shogun avant qu'il n'accède au pouvoir. La bataille finale de 45 minutes est un morceau d'anthologie.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 74,
    "title": "The Sword of Doom",
    "titleFr": "Le Sabre du mal",
    "year": 1966,
    "director": "Kihachi Okamoto",
    "genres": ["Action", "Drame"],
    "country": "Japon",
    "duration": 119,
    "synopsis": "Un samouraï au talent meurtrier mais dénué de conscience sème la mort sur son passage, sombrant progressivement dans la folie. Tatsuya Nakadai livre une performance terrifiante dans ce drame de sabre nihiliste.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 75,
    "title": "Come and See",
    "titleFr": "Requiem pour un massacre",
    "year": 1985,
    "director": "Elem Klimov",
    "genres": ["Guerre", "Drame"],
    "country": "URSS",
    "duration": 142,
    "synopsis": "Biélorussie, 1943. Un adolescent s'engage dans la résistance contre l'occupation nazie et assiste aux horreurs de la guerre. Considéré comme le film de guerre le plus éprouvant jamais réalisé.",
    "note": 8.4,
    "type": "film"
  },
  {
    "id": 76,
    "title": "The Ascent",
    "titleFr": "L'Ascension",
    "year": 1977,
    "director": "Larisa Shepitko",
    "genres": ["Guerre", "Drame"],
    "country": "URSS",
    "duration": 111,
    "synopsis": "Deux partisans soviétiques capturés par les nazis en Biélorussie font face à des choix moraux opposés devant la mort. Un drame de guerre d'une intensité spirituelle rare, entre humanisme et tragédie.",
    "note": 8.2,
    "type": "film"
  },
  {
    "id": 77,
    "title": "Fires on the Plain",
    "titleFr": "Feux dans la plaine",
    "year": 1959,
    "director": "Kon Ichikawa",
    "genres": ["Guerre", "Drame"],
    "country": "Japon",
    "duration": 108,
    "synopsis": "Un soldat japonais tuberculeux erre dans les Philippines à la fin de la Seconde Guerre mondiale, témoin de la désintégration morale de l'armée impériale. Un film de guerre d'une noirceur absolue.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 78,
    "title": "Les Parapluies de Cherbourg",
    "titleFr": "Les Parapluies de Cherbourg",
    "year": 1964,
    "director": "Jacques Demy",
    "genres": ["Musical", "Romance"],
    "country": "France",
    "duration": 91,
    "synopsis": "Geneviève, jeune vendeuse de parapluies, et Guy, mécanicien, s'aiment passionnément. Mais la guerre d'Algérie les sépare et le destin en décide autrement. Un film entièrement chanté, porté par la musique de Michel Legrand.",
    "note": 7.8,
    "type": "film"
  },
  {
    "id": 79,
    "title": "Hedwig and the Angry Inch",
    "titleFr": "Hedwig and the Angry Inch",
    "year": 2001,
    "director": "John Cameron Mitchell",
    "genres": ["Musical", "Comédie"],
    "country": "États-Unis",
    "duration": 95,
    "synopsis": "Hedwig, chanteuse transgenre est-allemande victime d'une opération bâclée, poursuit en tournée le rockeur qui lui a volé ses chansons. Un musical punk et émouvant sur l'identité et la recherche de sa moitié.",
    "note": 7.7,
    "type": "film"
  },
  {
    "id": 80,
    "title": "Chungking Express",
    "titleFr": "Chungking Express",
    "year": 1994,
    "director": "Wong Kar-wai",
    "genres": ["Drame", "Romance"],
    "country": "Hong Kong",
    "duration": 102,
    "synopsis": "Deux histoires d'amour parallèles dans le Hong Kong nocturne : un policier éconduit croise une trafiquante mystérieuse, tandis qu'un autre voit sa routine bouleversée par une serveuse excentrique. La solitude urbaine captée avec une énergie contagieuse.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 81,
    "title": "Certified Copy",
    "titleFr": "Copie conforme",
    "year": 2010,
    "director": "Abbas Kiarostami",
    "genres": ["Drame", "Romance"],
    "country": "France",
    "duration": 106,
    "synopsis": "Un écrivain britannique et une galeriste française se promènent dans un village toscan. Leur conversation glisse du formel à l'intime, brouillant la frontière entre fiction et réalité. Kiarostami et Juliette Binoche explorent les masques du couple.",
    "note": 7.3,
    "type": "film"
  },
  {
    "id": 82,
    "title": "Dead Man",
    "titleFr": "Dead Man",
    "year": 1995,
    "director": "Jim Jarmusch",
    "genres": ["Western", "Drame"],
    "country": "États-Unis",
    "duration": 121,
    "synopsis": "William Blake, comptable de Cleveland, arrive dans une ville frontière et se retrouve en fuite après un meurtre. Guidé par un Amérindien nommé Nobody, il entame un voyage vers la mort. Un anti-western poétique de Jim Jarmusch.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 83,
    "title": "Il Grande Silenzio",
    "titleFr": "Le Grand Silence",
    "year": 1968,
    "director": "Sergio Corbucci",
    "genres": ["Western"],
    "country": "Italie",
    "duration": 105,
    "synopsis": "Dans les montagnes enneigées de l'Utah, un pistolero muet protège des hors-la-loi affamés contre un chasseur de primes sadique. Un western-spaghetti unique par son cadre hivernal et sa fin d'une noirceur absolue.",
    "note": 7.4,
    "type": "film"
  },
  {
    "id": 84,
    "title": "Aguirre, der Zorn Gottes",
    "titleFr": "Aguirre, la colère de Dieu",
    "year": 1972,
    "director": "Werner Herzog",
    "genres": ["Aventure", "Drame"],
    "country": "Allemagne",
    "duration": 94,
    "synopsis": "En 1560, une expédition espagnole descend l'Amazone à la recherche de l'Eldorado. Le conquistador Aguirre prend le pouvoir et entraîne ses hommes dans une dérive mégalomane au cœur de la jungle. Klaus Kinski dans un rôle halluciné.",
    "note": 7.8,
    "type": "film"
  },
  {
    "id": 85,
    "title": "Fitzcarraldo",
    "titleFr": "Fitzcarraldo",
    "year": 1982,
    "director": "Werner Herzog",
    "genres": ["Aventure", "Drame"],
    "country": "Allemagne",
    "duration": 158,
    "synopsis": "Un amateur d'opéra rêve de construire un théâtre lyrique en pleine Amazonie. Pour financer son projet, il entreprend de faire passer un bateau à vapeur par-dessus une montagne. Herzog a réellement fait déplacer un navire de 320 tonnes.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 86,
    "title": "Sorcerer",
    "titleFr": "Le Convoi de la peur",
    "year": 1977,
    "director": "William Friedkin",
    "genres": ["Thriller", "Aventure"],
    "country": "États-Unis",
    "duration": 121,
    "synopsis": "Quatre fugitifs de nationalités différentes acceptent une mission-suicide : transporter de la nitroglycérine instable à travers la jungle sud-américaine. Le film maudit de Friedkin, sorti la même semaine que Star Wars.",
    "note": 7.7,
    "type": "film"
  },
  {
    "id": 87,
    "title": "La Cité des enfants perdus",
    "titleFr": "La Cité des enfants perdus",
    "year": 1995,
    "director": "Jean-Pierre Jeunet, Marc Caro",
    "genres": ["Fantasy", "Science-fiction"],
    "country": "France",
    "duration": 112,
    "synopsis": "Un scientifique fou enlève des enfants pour voler leurs rêves, car il est incapable de rêver. Un forain costaud et une petite orpheline rusée unissent leurs forces pour sauver le frère du forain. Un conte steampunk visuellement foisonnant.",
    "note": 7.6,
    "type": "film"
  },
  {
    "id": 88,
    "title": "Time Bandits",
    "titleFr": "Bandits, bandits",
    "year": 1981,
    "director": "Terry Gilliam",
    "genres": ["Fantasy", "Comédie"],
    "country": "Royaume-Uni",
    "duration": 116,
    "synopsis": "Un jeune garçon est entraîné à travers le temps par une bande de nains voleurs qui ont dérobé la carte des trous de l'univers au Créateur. Terry Gilliam mélange histoire, fantasy et humour absurde.",
    "note": 7.0,
    "type": "film"
  },
  {
    "id": 89,
    "title": "Dogtooth",
    "titleFr": "Canine",
    "year": 2009,
    "director": "Yorgos Lanthimos",
    "genres": ["Drame", "Thriller"],
    "country": "Grèce",
    "duration": 96,
    "synopsis": "Un père séquestre ses trois enfants adultes dans une propriété isolée, leur enseignant un langage et une vision du monde entièrement falsifiés. Un huis clos dérangeant sur le contrôle familial et l'endoctrinement.",
    "note": 7.3,
    "type": "film"
  },
  {
    "id": 90,
    "title": "The Killing of a Sacred Deer",
    "titleFr": "Mise à mort du cerf sacré",
    "year": 2017,
    "director": "Yorgos Lanthimos",
    "genres": ["Thriller", "Horreur"],
    "country": "Royaume-Uni",
    "duration": 121,
    "synopsis": "Un chirurgien cardiaque renommé entretient une relation ambiguë avec un adolescent. Quand des événements inexplicables frappent sa famille, il est confronté à un choix impossible. Un thriller aux allures de tragédie grecque.",
    "note": 7.0,
    "type": "film"
  },
  {
    "id": 91,
    "title": "El Ángel Exterminador",
    "titleFr": "L'Ange exterminateur",
    "year": 1962,
    "director": "Luis Buñuel",
    "genres": ["Drame", "Comédie noire"],
    "country": "Mexique",
    "duration": 95,
    "synopsis": "Après un dîner mondain, les invités se découvrent mystérieusement incapables de quitter le salon. Les jours passent, le vernis social craque et les instincts primitifs refont surface. La satire la plus féroce de Buñuel.",
    "note": 8.1,
    "type": "film"
  },
  {
    "id": 92,
    "title": "Ascenseur pour l'échafaud",
    "titleFr": "Ascenseur pour l'échafaud",
    "year": 1958,
    "director": "Louis Malle",
    "genres": ["Thriller", "Crime"],
    "country": "France",
    "duration": 91,
    "synopsis": "Un ancien officier assassine le mari de sa maîtresse mais reste bloqué dans l'ascenseur de l'immeuble. Pendant ce temps, un voyou vole sa voiture et commet un second meurtre. Un polar magnifié par la bande-son improvisée de Miles Davis.",
    "note": 7.7,
    "type": "film"
  },
  {
    "id": 93,
    "title": "Sans Soleil",
    "titleFr": "Sans Soleil",
    "year": 1983,
    "director": "Chris Marker",
    "genres": ["Documentaire"],
    "country": "France",
    "duration": 100,
    "synopsis": "Un film-essai poétique composé de lettres lues par une femme, accompagnant les images d'un cameraman voyageur entre le Japon et l'Afrique. Une méditation unique sur la mémoire, le temps et les images.",
    "note": 8.0,
    "type": "film"
  },
  {
    "id": 94,
    "title": "F for Fake",
    "titleFr": "Vérités et mensonges",
    "year": 1973,
    "director": "Orson Welles",
    "genres": ["Documentaire"],
    "country": "France",
    "duration": 88,
    "synopsis": "Orson Welles explore l'art de la tromperie à travers les portraits d'un faussaire de tableaux et d'un biographe mythomane. Un documentaire ludique et novateur sur l'authenticité et l'illusion.",
    "note": 7.8,
    "type": "film"
  },
  {
    "id": 95,
    "title": "High and Low",
    "titleFr": "Entre le ciel et l'enfer",
    "year": 1963,
    "director": "Akira Kurosawa",
    "genres": ["Thriller", "Crime"],
    "country": "Japon",
    "duration": 143,
    "synopsis": "Un riche industriel reçoit un appel exigeant une rançon pour son fils kidnappé, mais les ravisseurs ont enlevé le fils de son chauffeur par erreur. Doit-il sacrifier sa fortune pour un enfant qui n'est pas le sien ?",
    "note": 8.4,
    "type": "film"
  },
  {
    "id": 96,
    "title": "El secreto de sus ojos",
    "titleFr": "Dans ses yeux",
    "year": 2009,
    "director": "Juan José Campanella",
    "genres": ["Thriller", "Drame"],
    "country": "Argentine",
    "duration": 129,
    "synopsis": "Un officier de justice à la retraite écrit un roman basé sur une affaire de meurtre non résolue qui l'a obsédé pendant 25 ans. L'enquête se mêle aux sentiments inavoués pour sa supérieure. Oscar du meilleur film étranger.",
    "note": 8.2,
    "type": "film"
  },
  {
    "id": 97,
    "title": "The Man from Earth",
    "titleFr": "The Man from Earth",
    "year": 2007,
    "director": "Richard Schenkman",
    "genres": ["Science-fiction", "Drame"],
    "country": "États-Unis",
    "duration": 87,
    "synopsis": "Un professeur d'université qui déménage révèle à ses collègues qu'il est un homme de Cro-Magnon vieux de 14 000 ans. Un huis clos fascinant entièrement basé sur le dialogue et la réflexion.",
    "note": 7.9,
    "type": "film"
  },
  {
    "id": 98,
    "title": "Coherence",
    "titleFr": "Coherence",
    "year": 2013,
    "director": "James Ward Byrkit",
    "genres": ["Science-fiction", "Thriller"],
    "country": "États-Unis",
    "duration": 89,
    "synopsis": "Huit amis se retrouvent pour un dîner le soir du passage d'une comète. Des événements étranges commencent à se produire, suggérant l'existence de réalités parallèles. Un thriller de science-fiction brillant tourné avec un budget minuscule.",
    "note": 7.2,
    "type": "film"
  },
  {
    "id": 99,
    "title": "Happiness",
    "titleFr": "Happiness",
    "year": 1998,
    "director": "Todd Solondz",
    "genres": ["Comédie noire", "Drame"],
    "country": "États-Unis",
    "duration": 134,
    "synopsis": "Les vies entremêlées de trois sœurs et de leur entourage révèlent les désirs inavouables et les solitudes de la banlieue américaine. Une comédie noire provocante qui oscille entre malaise et compassion.",
    "note": 7.7,
    "type": "film"
  },
  {
    "id": 100,
    "title": "La Haine",
    "titleFr": "La Haine",
    "year": 1995,
    "director": "Mathieu Kassovitz",
    "genres": ["Drame", "Crime"],
    "country": "France",
    "duration": 98,
    "synopsis": "Vingt-quatre heures dans la vie de trois jeunes de banlieue parisienne après une nuit d'émeutes. Vinz, Saïd et Hubert errent entre cité et Paris, sur un fil tendu vers la violence. Un film choc en noir et blanc devenu culte.",
    "note": 8.1,
    "type": "film"
  }
];

// ============================================================
// Particle System
// ============================================================
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.running = true;
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const count = Math.min(60, Math.floor(window.innerWidth / 25));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.3 + 0.05,
                hue: Math.random() > 0.7 ? 45 : Math.random() > 0.5 ? 270 : 190,
            });
        }
        this.animate();
    }

    animate() {
        if (!this.running) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, ${p.opacity})`;
            this.ctx.fill();
        }

        // Connection lines
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const a = this.particles[i];
                const b = this.particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    const opacity = (1 - dist / 120) * 0.08;
                    this.ctx.beginPath();
                    this.ctx.moveTo(a.x, a.y);
                    this.ctx.lineTo(b.x, b.y);
                    this.ctx.strokeStyle = `rgba(240, 192, 64, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================================
// Confetti System
// ============================================================
class ConfettiSystem {
    constructor() {
        this.colors = ['#f0c040', '#e84057', '#8b5cf6', '#06b6d4', '#4ade80', '#f97316', '#ec4899', '#ffd700'];
    }

    burst(count = 80) {
        const container = document.getElementById('confetti-canvas');
        if (!container) return;

        for (let i = 0; i < count; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';

            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            const size = Math.random() * 10 + 5;
            const x = 40 + Math.random() * 20;
            const drift = (Math.random() - 0.5) * 200;
            const duration = 2 + Math.random() * 2;
            const delay = Math.random() * 0.3;
            const shapes = ['circle', 'rect', 'triangle'];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            piece.style.cssText = `
                left: ${x}%;
                top: -5%;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                border-radius: ${shape === 'circle' ? '50%' : shape === 'rect' ? '2px' : '0'};
                ${shape === 'triangle' ? `clip-path: polygon(50% 0%, 0% 100%, 100% 100%); background: ${color};` : ''}
                --drift: ${drift}px;
            `;

            piece.style.animation = `confetti-fall ${duration}s ${delay}s linear forwards`;
            piece.style.setProperty('--x-drift', `${drift}px`);

            container.appendChild(piece);

            setTimeout(() => piece.remove(), (duration + delay) * 1000 + 100);
        }
    }
}

// ============================================================
// Main Application
// ============================================================
class RoueGPT {
    constructor() {
        this.films = [];
        this.availableFilms = [];
        this.isSpinning = false;
        this.currentAngle = 0;
        this.confetti = new ConfettiSystem();

        // Palette de couleurs pour les segments (recyclée si plus de genres que de couleurs)
        this.segmentColors = [
            '#0096c7', '#d62839', '#e76f51', '#7b2d8b', '#f4508e',
            '#3a9fbf', '#2a9d8f', '#e63900', '#264653', '#c9184a',
            '#6a30a7', '#606c38', '#b5651d', '#d1198e', '#1e8a7a',
            '#b8860b', '#5b8a9a', '#3a3a4a', '#8b5cf6', '#ef4444',
        ];

        // Segments générés dynamiquement après chargement des films
        this.segments = [];

        // DOM
        this.canvas = document.getElementById('wheel-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.spinBtn = document.getElementById('spin-btn');
        this.overlay = document.getElementById('overlay');
        this.filmCard = document.getElementById('film-card');

        this.init();
    }

    async init() {
        this.setupCanvas();
        await this.loadFilms();
        this.drawWheel();
        this.bindEvents();

        // Start idle animations
        this.setIdle(true);

        // Start particle system
        const particlesCanvas = document.getElementById('particles-canvas');
        if (particlesCanvas) {
            new ParticleSystem(particlesCanvas);
        }
    }

    // ---- Idle animations ----
    setIdle(idle) {
        const pointer = document.querySelector('.wheel-pointer');
        if (idle) {
            this.canvas.classList.add('idle');
            pointer.classList.add('idle');
        } else {
            this.canvas.classList.remove('idle');
            pointer.classList.remove('idle');
        }
    }

    // ---- Canvas setup (retina) ----
    setupCanvas() {
        const container = this.canvas.parentElement;
        const size = container.clientWidth;
        const dpr = window.devicePixelRatio || 1;
        this.size = size;
        this.canvas.width = size * dpr;
        this.canvas.height = size * dpr;
        this.canvas.style.width = size + 'px';
        this.canvas.style.height = size + 'px';
        this.ctx.scale(dpr, dpr);
    }

    // ---- Load films & build segments from genres ----
    async loadFilms() {
        this.films = FILMS_DATA;
        this.availableFilms = [...this.films];

        // Extract unique genres from all films
        const genreSet = new Set();
        this.films.forEach(f => f.genres.forEach(g => genreSet.add(g)));
        const genres = [...genreSet];

        // Build segments dynamically
        this.segments = genres.map((genre, i) => ({
            label: genre,
            color: this.segmentColors[i % this.segmentColors.length],
        }));
    }

    // ---- Draw wheel (Premium version) ----
    drawWheel() {
        const ctx = this.ctx;
        const cx = this.size / 2;
        const cy = this.size / 2;
        const outerR = cx - 8;
        const innerR = 32;
        const segCount = this.segments.length;
        const arc = (2 * Math.PI) / segCount;

        ctx.clearRect(0, 0, this.size, this.size);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((this.currentAngle * Math.PI) / 180);

        // Segments
        for (let i = 0; i < segCount; i++) {
            const start = i * arc - Math.PI / 2;
            const end = start + arc;
            const seg = this.segments[i];

            // Gradient fill
            const midAngle = start + arc / 2;
            const gx = Math.cos(midAngle) * outerR * 0.5;
            const gy = Math.sin(midAngle) * outerR * 0.5;
            const gradient = ctx.createLinearGradient(0, 0, gx, gy);
            gradient.addColorStop(0, this.adjustColor(seg.color, 0.8));
            gradient.addColorStop(1, seg.color);

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, outerR, start, end);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();

            // Segment border
            ctx.strokeStyle = 'rgba(0,0,0,0.25)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Inner highlight
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, outerR, start, end);
            ctx.closePath();
            const highlightGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, outerR);
            highlightGrad.addColorStop(0, 'rgba(255,255,255,0.12)');
            highlightGrad.addColorStop(0.5, 'rgba(255,255,255,0.03)');
            highlightGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = highlightGrad;
            ctx.fill();

            // Label
            ctx.save();
            ctx.rotate(start + arc / 2);
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'rgba(255,255,255,0.95)';
            ctx.font = `600 ${Math.max(10, this.size * 0.03)}px "Space Grotesk", sans-serif`;
            ctx.shadowColor = 'rgba(0,0,0,0.6)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.fillText(seg.label, outerR - 16, 0);
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.restore();
        }

        // Outer ring glow
        ctx.beginPath();
        ctx.arc(0, 0, outerR + 1, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(240, 192, 64, 0.25)';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Tick marks
        for (let i = 0; i < segCount * 3; i++) {
            const angle = (i / (segCount * 3)) * 2 * Math.PI - Math.PI / 2;
            const isMajor = i % 3 === 0;
            ctx.save();
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(outerR - (isMajor ? 8 : 4), 0);
            ctx.lineTo(outerR, 0);
            ctx.strokeStyle = isMajor ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)';
            ctx.lineWidth = isMajor ? 2 : 1;
            ctx.stroke();
            ctx.restore();
        }

        // Center circle with gradient
        const centerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, innerR);
        centerGrad.addColorStop(0, '#1a1a35');
        centerGrad.addColorStop(1, '#0a0a18');
        ctx.beginPath();
        ctx.arc(0, 0, innerR, 0, 2 * Math.PI);
        ctx.fillStyle = centerGrad;
        ctx.fill();

        // Center ring
        ctx.beginPath();
        ctx.arc(0, 0, innerR, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(240, 192, 64, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner center ring
        ctx.beginPath();
        ctx.arc(0, 0, innerR - 5, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(240, 192, 64, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
    }

    // Adjust color brightness
    adjustColor(hex, factor) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${Math.round(r * factor)}, ${Math.round(g * factor)}, ${Math.round(b * factor)})`;
    }

    // ---- Spin (enhanced) ----
    spin() {
        if (this.isSpinning || this.availableFilms.length === 0) return;
        this.isSpinning = true;

        this.setIdle(false);
        this.spinBtn.disabled = true;
        this.spinBtn.classList.add('spin-btn--spinning');
        this.spinBtn.querySelector('.spin-btn__text').textContent = 'EN COURS...';
        this.canvas.classList.add('spinning');

        const extraTurns = 5 + Math.random() * 4; // 5-9 full turns
        const totalRotation = extraTurns * 360 + Math.random() * 360;
        const duration = 5000 + Math.random() * 2000; // 5-7s
        const startAngle = this.currentAngle;
        const startTime = performance.now();

        const pointer = document.querySelector('.wheel-pointer');
        const segAngle = 360 / this.segments.length;
        let lastSegIndex = -1;

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutQuint for smoother deceleration
            const eased = 1 - Math.pow(1 - progress, 5);
            this.currentAngle = startAngle + eased * totalRotation;

            // Pointer tick — the pointer is at the top (-π/2),
            // so the segment under the pointer is at angle (-currentAngle)
            const normAngle = ((-this.currentAngle % 360) + 360) % 360;
            const currentSeg = Math.floor(normAngle / segAngle);
            if (currentSeg !== lastSegIndex) {
                lastSegIndex = currentSeg;
                pointer.classList.add('tick');
                setTimeout(() => pointer.classList.remove('tick'), 70);
            }

            this.drawWheel();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                this.canvas.classList.remove('spinning');
                this.spinBtn.classList.remove('spin-btn--spinning');
                this.spinBtn.disabled = false;
                this.spinBtn.querySelector('.spin-btn__text').textContent = 'TOURNER LA ROUE';
                this.setIdle(true);

                // Determine which segment the pointer landed on
                const finalNorm = ((-this.currentAngle % 360) + 360) % 360;
                const finalSeg = Math.floor(finalNorm / segAngle);
                const selectedGenre = this.segments[finalSeg].label;

                setTimeout(() => this.selectFilm(selectedGenre), 500);
            }
        };

        requestAnimationFrame(animate);
    }

    // ---- Select a random film matching the wheel genre ----
    selectFilm(genre) {
        if (this.availableFilms.length === 0) {
            this.showEmpty();
            return;
        }

        const filtered = this.availableFilms.filter(f =>
            f.genres.includes(genre)
        );

        if (filtered.length === 0) {
            this.showEmpty();
            return;
        }

        const idx = Math.floor(Math.random() * filtered.length);
        const film = filtered[idx];
        this.showFilmCard(film);
    }

    // ---- Genre colors ----
    getGenreColor(genre) {
        const seg = this.segments.find(s => s.label === genre);
        return seg ? seg.color : '#555';
    }

    // ---- Build & show film card ----
    showFilmCard(film) {
        const typeLabels = { film: 'Film', anime: 'Anime', animation: 'Animation' };
        const typeClass = `film-card__type--${film.type}`;
        const showOriginal = film.title !== film.titleFr;

        // Rating bar width
        const ratingPercent = (film.note / 10) * 100;

        this.filmCard.innerHTML = `
            <div class="film-card__header">
                <button class="film-card__close" id="card-close">&times;</button>
                <span class="film-card__type ${typeClass}">${typeLabels[film.type] || 'Film'}</span>
                <div class="film-card__genres">
                    ${film.genres.map(g => `<span class="genre-tag" style="border-color:${this.getGenreColor(g)}33; color:${this.getGenreColor(g)}">${g}</span>`).join('')}
                </div>
                <h2 class="film-card__title">${film.titleFr}</h2>
                ${showOriginal ? `<p class="film-card__original">${film.title}</p>` : '<div style="height:0.5rem"></div>'}
            </div>
            <div class="film-card__body">
                <div class="film-card__meta">
                    <span class="film-card__meta-item"><span class="film-card__meta-icon">🎬</span> ${film.director}</span>
                    <span class="film-card__meta-item"><span class="film-card__meta-icon">📅</span> ${film.year}</span>
                    <span class="film-card__meta-item"><span class="film-card__meta-icon">⏱</span> ${film.duration} min</span>
                    <span class="film-card__meta-item"><span class="film-card__meta-icon">🌍</span> ${film.country}</span>
                </div>
                <div class="film-card__rating">
                    <span class="film-card__rating-star">★</span> ${film.note.toFixed(1)} / 10
                </div>
                <p class="film-card__synopsis">${film.synopsis}</p>
                <div class="film-card__actions">
                    <button class="btn btn--secondary" id="card-next">Autre film</button>
                    <button class="btn btn--primary" id="card-ok">J'ai trouvé !</button>
                </div>
            </div>
        `;

        // Show overlay with confetti
        this.overlay.classList.add('active');
        setTimeout(() => this.confetti.burst(60), 200);

        // Bind card buttons
        document.getElementById('card-close').onclick = () => this.hideOverlay();
        document.getElementById('card-ok').onclick = () => this.hideOverlay();

        document.getElementById('card-next').onclick = () => {
            this.hideOverlay();
            setTimeout(() => this.spin(), 400);
        };

        // Close on overlay click
        this.overlay.onclick = (e) => {
            if (e.target === this.overlay) this.hideOverlay();
        };

        // Close on Escape
        this._escHandler = (e) => {
            if (e.key === 'Escape') this.hideOverlay();
        };
        document.addEventListener('keydown', this._escHandler);
    }

    hideOverlay() {
        this.overlay.classList.remove('active');
        if (this._escHandler) {
            document.removeEventListener('keydown', this._escHandler);
        }
    }

    // ---- Segment click → random film from that genre ----
    handleCanvasClick(e) {
        if (this.isSpinning) return;

        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = this.size / 2;
        const cy = this.size / 2;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const outerR = cx - 8;
        const innerR = 32;

        // Ignore clicks outside the wheel or on center hub
        if (dist < innerR || dist > outerR) return;

        const segCount = this.segments.length;
        const arc = (2 * Math.PI) / segCount;

        // Angle of click, adjusted for wheel rotation and top-start offset
        let angle = Math.atan2(dy, dx) - (this.currentAngle * Math.PI) / 180 + Math.PI / 2;
        angle = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        const segIndex = Math.floor(angle / arc);
        const genre = this.segments[segIndex].label;
        this.selectFilm(genre);
    }

    // ---- Events ----
    bindEvents() {
        this.spinBtn.addEventListener('click', () => this.spin());

        // Click on segment → propose a film from that genre
        this.canvas.style.cursor = 'pointer';
        this.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));

        // Resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.setupCanvas();
                this.drawWheel();
            }, 200);
        });
    }
}

// ---- Launch ----
document.addEventListener('DOMContentLoaded', () => {
    new RoueGPT();
});
