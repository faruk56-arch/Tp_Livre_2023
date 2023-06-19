import Categorie from './categorie';
import Livre from './livre';

export const CATEGORIES = [
  new Categorie('c1', 'Historique', '#f5428d'),
  new Categorie('c2', 'Policier', '#f54242'),
  new Categorie('c3', 'SF', '#f5a442'),
  new Categorie('c4', 'Romance', '#f5d142'),
];

export const LIVRES = [
  new Livre(
    'm1',
    ['c2'],
    'Detective conan',
    "Le manga retrace le parcours de Shinichi Kudo, détective lycéen rajeuni à la suite de l'ingestion d'une mystérieuse drogue qui le fait rajeunir au stade d'écolier de 7 ans. Hébergé chez son amie d'enfance Ran et son père Kogoro Mouri, il va devoir, secrètement, chercher à retrouver son corps d'antan et mettre l'Organisation responsable de son état sous les verrous…",
    100,
    'https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Logo_D%C3%A9tective_Conan.svg/langfr-2880px-Logo_D%C3%A9tective_Conan.svg.png',
    true,
  ),
  new Livre(
    'm2',
    ['c1', 'c2'],
    "Les disparus de Blackmore",
    "Octobre 1925. À Blackmore, une île coupée du monde au large de Guernesey, meurtres et disparitions sèment la terreur. Alors que la police piétine, Lorraine Chapelle, première femme diplômée de l’Institut de criminologie de Paris, est appelée en renfort. Cette cartésienne irréductible va devoir mener l’enquête aux côtés d’Edward Pierce, un Britannique spécialisé dans les sciences occultes qui se présente comme « détective de l’étrange ».",
    1,
    "https://www.xoeditions.com/wp-content/uploads/2023/02/LES-DISPARUS-DE-BLACKMORE-copie-654x1024.jpg",
    false
  ),
  new Livre(
    'm3',
    ['c3'],
    "Metro 2033",
    "Vingt années se sont écoulées depuis l'apocalypse nucléaire qui a ravagé la planète, obligeant les quelques survivants à se mettre à l'abri sous terre pour fuir une surface désormais inhabitable. Réfugiés dans les souterrains du métro de Moscou, ils se sont organisés en micro-sociétés et survivent tant bien que mal aux pénuries, maladies et aux guerres pour la possession des dernières ressources.",
    1,
    "https://images.epagine.fr/213/9782367930213_1_75.jpg",
    false
  ),
  new Livre(
    'm4',
    ['c3'],
    "Dune",
    "Le duc Leto Atréides, chef de la Maison Atréides, règne sur son fief planétaire de Caladan, une planète constituée de jungles et de vastes océans dont il tire sa puissance. Sa concubine officielle, Dame Jessica, est une adepte du Bene Gesserit, une école exclusivement féminine qui poursuit de mystérieuses visées politiques et qui enseigne des capacités non moins étranges.",
    2,
    "https://images.noosfere.org/couv/p/pp5069-1981.jpg",
    false
  ),
  new Livre(
    'm5',
    ['c4'],
    "La rose écarlate",
    "Dans le Périgord, Maud mène une vie paisible avec son père forgeron et ses amis. Mais un soir, son père se fait assassiner par un inconnu venant de Paris, et qui convoitait le carnet de voyage de son père dans l'Empire ottoman ; elle réussit cependant à infliger une balafre au meurtrier. Très vite, elle apprend qu'elle a un grand-père, un noble, qui vit près de la capitale, et décide donc de le rejoindre dans le but de venger son père.",
    19,
    "https://static.wikia.nocookie.net/bestlecture/images/6/63/La_Rose_%C3%A9carlate%2C_tome_1_Je_savais_que_je_te_rencontrerais_de_Patricia_Lyfoung.jpg/revision/latest?cb=20150112131040&path-prefix=fr",
    true
  ),
  new Livre(
    'm6',
    ['c1'],
    'War and Peace',
    'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.',
    5,
    'https://images.penguinrandomhouse.com/cover/9780679600848',
    true
  ),
  new Livre(
    'm7',
    ['c4'],
    'Pride and Prejudice',
    'The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
    10,
    'https://images.penguinrandomhouse.com/cover/9780553213102',
    false
  ),
  new Livre(
    'm8',
    ['c4'],
    'Outlander',
    'The story focuses on 20th century nurse Claire Randall, who time travels to 18th-century Scotland and finds adventure and romance with the dashing Jamie Fraser.',
    15,
    'https://media.vanityfair.fr/photos/60d36f58043ccb70e8d2b17a/16:9/w_2560%2Cc_limit/vf_outlander_main_1907.jpeg',
    true
  ),
  new Livre(
    'm9',
    ['c1'],
    'A Tale of Two Cities',
    'Set in London and Paris before and during the French Revolution. With well over 200 million copies sold, it ranks among the most famous works in the history of literary fiction.',
    7,
    'https://victorianweb.org/art/illustration/phiz/2cities/5b.jpg',
    false
),
new Livre(
  'm10',
  ['c2'],
  'The Girl with the Dragon Tattoo',
  'Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.',
  10,
  'https://m.media-amazon.com/images/M/MV5BMTc2Mjc0MDg3MV5BMl5BanBnXkFtZTcwMjUzMDkxMw@@._V1_QL75_UX190_CR0,0,190,281_.jpg',
  false
),
new Livre(
  'm11',
  ['c3'],
  'Ender\'s Game',
  'The novel presents an imperiled mankind after two conflicts with the Formics, an insectoid alien species they dub the "buggers". In preparation for an anticipated third invasion, an international fleet maintains a school to find and train future fleet commanders.',
  7,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_maDyI-xbnV_zBUVJOdQf80eYzAoay6JMZ2fkf6FVw&s',
  true
),



];