/* paper01-ga.js    — SSC CGL Tier-1 Diagnostic Paper 01 · General Awareness (25 Q) */
/* ans is the 0-based index of the correct option.  lvl: 1 easy, 2 medium, 3 hard.
   expSec = seconds a good candidate should need.  Answer positions are balanced
   across A-D so the key is not guessable from position alone. */

const P01_GA = {
 "questions": [
  {
   "id": "ga_01",
   "topic": "Polity",
   "qtype": "Constitution - Articles",
   "lvl": 3,
   "expSec": 16,
   "q": "Under which Article of the Constitution of India can the President seek the advisory opinion of the Supreme Court on a question of law or fact?",
   "opts": [
    "Article 131",
    "Article 137",
    "Article 143",
    "Article 147"
   ],
   "ans": 2,
   "exp": "Article 143 gives the President the power to refer a question to the Supreme Court for its advisory opinion, and the opinion is not binding on the President. Article 131 covers the original jurisdiction of the Supreme Court in Centre-State disputes, while Article 137 covers its power to review its own judgements.",
   "trick": "Trio to hold: 131 original jurisdiction (Centre-State disputes), 137 review, 143 advisory. A reference under 143 goes to a Constitution Bench of at least five judges, and the opinion is NOT binding on the President."
  },
  {
   "id": "ga_02",
   "topic": "Polity",
   "qtype": "Constitution - Schedules",
   "lvl": 1,
   "expSec": 12,
   "q": "Provisions relating to disqualification of members on grounds of defection are contained in which Schedule of the Constitution of India?",
   "opts": [
    "Eighth Schedule",
    "Tenth Schedule",
    "Ninth Schedule",
    "Twelfth Schedule"
   ],
   "ans": 1,
   "exp": "The Tenth Schedule, the Anti-Defection Law, was added by the 52nd Constitutional Amendment Act of 1985. The Eighth Schedule lists the official languages, the Ninth protects certain laws from judicial review, and the Twelfth lists municipal subjects.",
   "trick": "Anti-defection sits in the Tenth Schedule, added by the 52nd Amendment in 1985. Learn the ladder rather than a word trick: 8th languages, 9th protected laws, 10th defection, 11th panchayats, 12th municipalities."
  },
  {
   "id": "ga_03",
   "topic": "Polity",
   "qtype": "Constitutional Bodies",
   "lvl": 2,
   "expSec": 14,
   "q": "The Finance Commission of India is constituted by the President under which Article of the Constitution?",
   "opts": [
    "Article 315",
    "Article 263",
    "Article 280",
    "Article 324"
   ],
   "ans": 2,
   "exp": "Article 280 requires the President to constitute a Finance Commission every fifth year to recommend the distribution of tax proceeds between the Centre and the States. Article 263 covers the Inter-State Council, Article 315 the Public Service Commissions and Article 324 the Election Commission.",
   "trick": "280 for money, 324 for votes, 315 for jobs, 263 for Centre-State talks. Finance Commission is quasi-judicial and reconstituted every 5 years."
  },
  {
   "id": "ga_04",
   "topic": "History",
   "qtype": "Ancient - Dynasty Founders",
   "lvl": 3,
   "expSec": 16,
   "q": "Who was the founder of the Satavahana dynasty?",
   "opts": [
    "Gautamiputra Satakarni",
    "Hala",
    "Simuka",
    "Vasishthiputra Pulumavi"
   ],
   "ans": 2,
   "exp": "Simuka founded the Satavahana dynasty in the first century BCE after the decline of the Mauryas. Gautamiputra Satakarni was its greatest ruler, and Hala is credited with the Prakrit poetry anthology Gatha Saptasati. The capital was Pratishthana, modern Paithan on the Godavari.",
   "trick": "Founder-first chain: Satavahana Simuka, Rashtrakuta Dantidurga, Chalukya Pulakeshin I, Pallava Simhavishnu."
  },
  {
   "id": "ga_05",
   "topic": "History",
   "qtype": "Modern - Congress Sessions",
   "lvl": 3,
   "expSec": 16,
   "q": "Who presided over the 1907 Surat session of the Indian National Congress, in which the Congress split into Moderates and Extremists?",
   "opts": [
    "Dadabhai Naoroji",
    "Rash Behari Ghosh",
    "Pherozeshah Mehta",
    "Lala Lajpat Rai"
   ],
   "ans": 1,
   "exp": "Rash Behari Ghosh presided over the Surat session of 1907 where the famous Surat Split took place between the Moderates and the Extremists. Dadabhai Naoroji had presided over the previous Calcutta session of 1906, where the Purna Swadeshi and Swaraj demand was voiced.",
   "trick": "Calcutta 1906 Naoroji, Surat 1907 Rash Behari Ghosh, Lucknow 1916 Ambika Charan Mazumdar reunion. Split at Surat, patch-up at Lucknow."
  },
  {
   "id": "ga_06",
   "topic": "History",
   "qtype": "Modern - Freedom Movement",
   "lvl": 2,
   "expSec": 14,
   "q": "Who was chosen by Mahatma Gandhi as the first Satyagrahi of the Individual Satyagraha launched in 1940?",
   "opts": [
    "Sardar Vallabhbhai Patel",
    "Jawaharlal Nehru",
    "Vinoba Bhave",
    "Brahma Datt"
   ],
   "ans": 2,
   "exp": "Vinoba Bhave was selected as the first individual Satyagrahi in October 1940, with Jawaharlal Nehru as the second and Brahma Datt as the third. The movement was a limited, symbolic protest against being dragged into the Second World War without consultation.",
   "trick": "Order to memorise: Vinoba, then Nehru, then Brahma Datt. V-N-B in 1940."
  },
  {
   "id": "ga_07",
   "topic": "Geography",
   "qtype": "Mountain Passes",
   "lvl": 3,
   "expSec": 15,
   "q": "Shipki La, a pass on the India-China border through which the Sutlej enters India, lies in which Indian state?",
   "opts": [
    "Uttarakhand",
    "Himachal Pradesh",
    "Sikkim",
    "Arunachal Pradesh"
   ],
   "ans": 1,
   "exp": "Shipki La is in Kinnaur district of Himachal Pradesh and is the point where the Sutlej river enters India from Tibet. Himachal Pradesh also has Rohtang, Baralacha La and Kunzum passes.",
   "trick": "Sutlej and Shipki both start with S, and both belong to Himachal. Nathu La and Jelep La are Sikkim, Bomdi La is Arunachal."
  },
  {
   "id": "ga_08",
   "topic": "Geography",
   "qtype": "Rivers",
   "lvl": 1,
   "expSec": 11,
   "q": "Which is the longest river of peninsular India, rising at Trimbakeshwar near Nashik in Maharashtra?",
   "opts": [
    "Krishna",
    "Kaveri",
    "Mahanadi",
    "Godavari"
   ],
   "ans": 3,
   "exp": "The Godavari is the longest river of peninsular India at about 1465 km and drains into the Bay of Bengal. Its major tributaries are the Indravati, Manjira, Pranhita, Wainganga and Penganga, and it is the second longest river in India after the Ganga.",
   "trick": "The source decides it before length does. Godavari rises at Trimbakeshwar and Krishna at Mahabaleshwar, both in Maharashtra; Kaveri rises at Talakaveri in Karnataka and Mahanadi in Chhattisgarh. The stem says Trimbakeshwar, so Kaveri and Mahanadi die immediately. Peninsular length order: Godavari, Krishna, Narmada, Mahanadi, Kaveri."
  },
  {
   "id": "ga_09",
   "topic": "Economy",
   "qtype": "Banking and Monetary Policy",
   "lvl": 2,
   "expSec": 14,
   "q": "In India, the repo rate is decided by which of the following bodies?",
   "opts": [
    "Central Board of Directors of RBI",
    "Monetary Policy Committee",
    "Department of Economic Affairs",
    "NITI Aayog"
   ],
   "ans": 1,
   "exp": "The six-member Monetary Policy Committee, set up under the amended RBI Act in 2016, fixes the policy repo rate to achieve the inflation target. It has three RBI members including the Governor, who has a casting vote, and three members nominated by the Central Government.",
   "trick": "MPC equals 3 plus 3 and the Governor breaks the tie. Inflation target 4 percent with a band of plus or minus 2 percent."
  },
  {
   "id": "ga_10",
   "topic": "Economy",
   "qtype": "National Income",
   "lvl": 3,
   "expSec": 16,
   "q": "Who made the first scientific estimate of national income in India, for the year 1931-32?",
   "opts": [
    "Dadabhai Naoroji",
    "R C Desai",
    "P C Mahalanobis",
    "V K R V Rao"
   ],
   "ans": 3,
   "exp": "V K R V Rao made the first scientific estimate of Indian national income, for 1931-32. The first estimate of any kind was by Dadabhai Naoroji, who presented national-income figures from 1868 onwards; his book Poverty and Un-British Rule in India came much later, in 1901. That early estimate was not scientific. After independence the National Income Committee of 1949 was chaired by P C Mahalanobis.",
   "trick": "Naoroji first ever, Rao first scientific, Mahalanobis first official committee. N-R-M in that order."
  },
  {
   "id": "ga_11",
   "topic": "Biology",
   "qtype": "Vitamins and Deficiency Diseases",
   "lvl": 2,
   "expSec": 14,
   "q": "Pernicious anaemia in human beings is caused by the deficiency of which vitamin?",
   "opts": [
    "Vitamin B1",
    "Vitamin B6",
    "Vitamin C",
    "Vitamin B12"
   ],
   "ans": 3,
   "exp": "Vitamin B12, also called cobalamin, is needed for red blood cell formation, and its deficiency causes pernicious anaemia. It is the only vitamin that contains a metal, cobalt, at its centre. Deficiency of B1 causes beri-beri and of vitamin C causes scurvy.",
   "trick": "B12 carries cobalt, so think Cobalamin for Cobalt. Beri-beri B1, Pellagra B3, Pernicious anaemia B12."
  },
  {
   "id": "ga_12",
   "topic": "Biology",
   "qtype": "Human Physiology",
   "lvl": 3,
   "expSec": 15,
   "q": "Insulin is secreted by which cells of the islets of Langerhans in the human pancreas?",
   "opts": [
    "Alpha cells",
    "Delta cells",
    "Beta cells",
    "Kupffer cells"
   ],
   "ans": 2,
   "exp": "Beta cells of the islets of Langerhans secrete insulin, which lowers blood glucose, while alpha cells secrete glucagon, which raises it, and delta cells secrete somatostatin. Kupffer cells are found in the liver, not the pancreas.",
   "trick": "Beta Brings glucose down, Alpha Adds glucose up. The pancreas is a heterocrine or mixed gland, both exocrine and endocrine."
  },
  {
   "id": "ga_13",
   "topic": "Chemistry",
   "qtype": "Common Names and Formulae",
   "lvl": 1,
   "expSec": 12,
   "q": "Blue vitriol is the common name of which chemical compound?",
   "opts": [
    "Ferrous sulphate heptahydrate",
    "Magnesium sulphate heptahydrate",
    "Zinc sulphate heptahydrate",
    "Copper sulphate pentahydrate"
   ],
   "ans": 3,
   "exp": "Blue vitriol is copper sulphate pentahydrate, CuSO4 dot 5H2O, and it turns white on heating as it loses water of crystallisation. Green vitriol is ferrous sulphate heptahydrate and white vitriol is zinc sulphate heptahydrate.",
   "trick": "Colour equals metal. Blue for copper, green for iron, white for zinc, and oil of vitriol is sulphuric acid."
  },
  {
   "id": "ga_14",
   "topic": "Chemistry",
   "qtype": "Periodic Properties",
   "lvl": 3,
   "expSec": 17,
   "q": "Which of the following elements has the highest electron affinity?",
   "opts": [
    "Chlorine",
    "Fluorine",
    "Bromine",
    "Iodine"
   ],
   "ans": 0,
   "exp": "Chlorine has the highest electron affinity among all elements, higher even than fluorine, because the small size of the fluorine atom causes strong inter-electronic repulsion in its compact 2p subshell. Fluorine still remains the most electronegative element.",
   "trick": "Most electronegative is Fluorine, but highest electron affinity is Chlorine. Two different questions, two different answers."
  },
  {
   "id": "ga_15",
   "topic": "Physics",
   "qtype": "SI Units",
   "lvl": 2,
   "expSec": 13,
   "q": "What is the SI unit of magnetic flux?",
   "opts": [
    "Weber",
    "Tesla",
    "Henry",
    "Gauss"
   ],
   "ans": 0,
   "exp": "The SI unit of magnetic flux is the weber, where one weber equals one tesla times one square metre. The tesla is the unit of magnetic flux density, the henry is the unit of inductance and the gauss is the CGS unit of flux density.",
   "trick": "Weber is the Whole flux, Tesla is flux per unit area. 1 tesla equals 10000 gauss."
  },
  {
   "id": "ga_16",
   "topic": "Physics",
   "qtype": "Dimensions and Mechanics",
   "lvl": 3,
   "expSec": 17,
   "q": "The dimensional formula of Planck constant is the same as that of which physical quantity?",
   "opts": [
    "Angular momentum",
    "Energy",
    "Power",
    "Force"
   ],
   "ans": 0,
   "exp": "Planck constant has the dimensions of energy multiplied by time, which is the same as that of angular momentum, namely M L squared T to the power minus one. This is why the Bohr model quantises angular momentum in units of h divided by 2 pi.",
   "trick": "E equals h nu, so h equals energy times time, which equals angular momentum. Same trick pair: impulse and momentum, work and torque."
  },
  {
   "id": "ga_17",
   "topic": "Static GK and Art/Culture",
   "qtype": "Classical Dances",
   "lvl": 2,
   "expSec": 14,
   "q": "The classical dance form Sattriya, recognised as a classical dance in the year 2000, was introduced by which Vaishnava saint?",
   "opts": [
    "Srimanta Sankardeva",
    "Madhavdeva",
    "Chaitanya Mahaprabhu",
    "Ramanujacharya"
   ],
   "ans": 0,
   "exp": "Sattriya of Assam was introduced in the fifteenth century by the Vaishnava saint Srimanta Sankardeva as part of the Ankiya Naat performed in the monasteries called Sattras. It was the eighth and latest dance form to receive classical status from the Sangeet Natak Akademi.",
   "trick": "Sattriya lives in a Sattra, started by Sankardeva. All three start with S, and all belong to Assam."
  },
  {
   "id": "ga_18",
   "topic": "Static GK and Art/Culture",
   "qtype": "Folk Dances",
   "lvl": 2,
   "expSec": 13,
   "q": "Cheraw, the well known bamboo dance of India, is the folk dance of which state?",
   "opts": [
    "Nagaland",
    "Tripura",
    "Manipur",
    "Mizoram"
   ],
   "ans": 3,
   "exp": "Cheraw is the bamboo dance of Mizoram, in which dancers step in and out of bamboo staves tapped in rhythm on the ground. Another popular Mizo dance is Khuallam, and the Mizo spring festival is Chapchar Kut.",
   "trick": "Cheraw equals Chapchar equals Mizoram, all in the C and M pair. Bihu is Assam, Bamboo is Mizoram."
  },
  {
   "id": "ga_19",
   "topic": "Static GK and Art/Culture",
   "qtype": "Festivals and Tribes",
   "lvl": 3,
   "expSec": 16,
   "q": "Wangala, the hundred drums harvest festival, is celebrated by which tribe of Meghalaya?",
   "opts": [
    "Bodo",
    "Garo",
    "Khasi",
    "Jaintia"
   ],
   "ans": 1,
   "exp": "Wangala is the post harvest festival of the Garo tribe of Meghalaya, held in honour of the sun god of fertility called Saljong, and is known as the Hundred Drums Festival. The Khasi tribe celebrates Ka Shad Suk Mynsiem and Nongkrem, while the Jaintia celebrate Behdienkhlam.",
   "trick": "Meghalaya splits three ways: Garo gets Wangala (hundred drums, harvest), Khasi gets Nongkrem and Ka Shad Suk Mynsiem, Jaintia gets Behdienkhlam. Bodo is an Assam tribe, not Meghalaya, so it dies on the state alone before you even reach the festival."
  },
  {
   "id": "ga_20",
   "topic": "Static GK and Art/Culture",
   "qtype": "Sports Trophies",
   "lvl": 2,
   "expSec": 13,
   "q": "The Agha Khan Cup is associated with which sport?",
   "opts": [
    "Hockey",
    "Football",
    "Cricket",
    "Badminton"
   ],
   "ans": 0,
   "exp": "The Agha Khan Cup is a hockey tournament. Other Indian hockey trophies are the Beighton Cup, the Dhyan Chand Trophy and the Rangaswami Cup, while the Durand Cup and the Santosh Trophy belong to football.",
   "trick": "Hockey group: Agha Khan, Beighton, Rangaswami, Dhyan Chand. Football group: Durand, Santosh, Rovers, Subroto."
  },
  {
   "id": "ga_21",
   "topic": "Current Affairs",
   "qtype": "Sports - Cricket",
   "lvl": 1,
   "expSec": 12,
   "q": "India defeated which team in the final of the ICC Mens T20 World Cup 2026 played at the Narendra Modi Stadium, Ahmedabad?",
   "opts": [
    "Australia",
    "England",
    "South Africa",
    "New Zealand"
   ],
   "ans": 3,
   "exp": "India beat New Zealand by 96 runs in the final on 8 March 2026 at Ahmedabad, scoring 255 for 5 and bowling New Zealand out for 159. India thus became the first team to win three Mens T20 World Cup titles and the first host nation to win the trophy.",
   "trick": "2024 title in Barbados, 2026 title defended at home in Ahmedabad. Three titles: 2007, 2024, 2026."
  },
  {
   "id": "ga_22",
   "topic": "Current Affairs",
   "qtype": "Sports - Football",
   "lvl": 1,
   "expSec": 12,
   "q": "Which country won the FIFA World Cup 2026 hosted jointly by Canada, Mexico and the United States?",
   "opts": [
    "Argentina",
    "Spain",
    "France",
    "Brazil"
   ],
   "ans": 1,
   "exp": "Spain beat Argentina 1-0 after extra time in the final on 19 July 2026 to lift its second FIFA World Cup title, the first having come in 2010. It was the first World Cup with 48 teams and the first hosted by three nations.",
   "trick": "Spain 2010 and 2026, sixteen years apart. Argentina were the defending champions from 2022."
  },
  {
   "id": "ga_23",
   "topic": "Current Affairs",
   "qtype": "Awards and Honours",
   "lvl": 2,
   "expSec": 15,
   "q": "The 60th Jnanpith Award, announced in March 2026 and conferred on the poet and lyricist Vairamuthu, recognises literature in which language?",
   "opts": [
    "Tamil",
    "Malayalam",
    "Telugu",
    "Kannada"
   ],
   "ans": 0,
   "exp": "Vairamuthu was named the 60th Jnanpith awardee for the year 2025, becoming the third Tamil writer to receive it after Akilan in 1975 and Jayakanthan in 2002. The award carries eleven lakh rupees, a citation and a bronze statuette of Vagdevi, the goddess Saraswati.",
   "trick": "Jnanpith is Indias highest literary award, given by Bharatiya Jnanpith for the 22 scheduled languages plus English. Tamil winners: Akilan, Jayakanthan, Vairamuthu."
  },
  {
   "id": "ga_24",
   "topic": "Current Affairs",
   "qtype": "Sports - Multi-sport Events",
   "lvl": 2,
   "expSec": 15,
   "q": "India finished at which position in the overall medal tally of the 2026 Commonwealth Games held at Glasgow?",
   "opts": [
    "Fourth",
    "Third",
    "Second",
    "Fifth"
   ],
   "ans": 0,
   "exp": "India finished fourth with 39 medals made up of 13 gold, 17 silver and 9 bronze. Boxing was the standout sport with a record 10 medals including 7 gold, the most by any nation in boxing at a single edition. The next Commonwealth Games in 2030 are to be held in Ahmedabad, India.",
   "trick": "Glasgow 2026 hosted a trimmed down Games, next stop Ahmedabad 2030. India 13 gold, fourth place."
  },
  {
   "id": "ga_25",
   "topic": "Current Affairs",
   "qtype": "Awards and Honours",
   "lvl": 2,
   "expSec": 15,
   "q": "Joheirry Mola, who was crowned Miss World 2026 in September 2026, represented which country?",
   "opts": [
    "Venezuela",
    "Thailand",
    "Dominican Republic",
    "Philippines"
   ],
   "ans": 2,
   "exp": "Joheirry Mola of the Dominican Republic was crowned the 73rd Miss World at the finale held in Nha Trang, Vietnam, on 5 September 2026, succeeding Suchata Chuangsri of Thailand. It was the second Miss World title for the Dominican Republic after Mariasela Alvarez in 1982.",
   "trick": "Recent hosts: Miss World 2025 in Hyderabad, India; 2026 in Nha Trang, Vietnam. The Dominican Republic now has two titles, 1982 and 2026. India has six wins in all, the first being Reita Faria in 1966, who was also the first Asian woman to take the crown."
  }
 ]
};
