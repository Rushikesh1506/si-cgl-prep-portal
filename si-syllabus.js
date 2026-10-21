/* si-syllabus.js — AP SI syllabus skeleton (base scaffold).
   Empty section placeholders only; content + question banks to be filled later.
   Merged into studyData by script.js. Keeps articles.js untouched. */

const siSyllabusData = [
  /* ================= HISTORY ================= */
  {
    id: "hist_ancient",
    crumbs: ["AP SI", "General Studies", "Indian History"],
    kicker: "AP SI • GS • History • Ancient India",
    title: "Ancient India",
    meta: "Indus Valley • Vedic • Buddhism/Jainism • Mauryas • Gupta • Sangam • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b> Section structure below; each block expands into notes + topic mock.</div>
      <h3>Section map</h3>
      <div class="box blue">Indus Valley Civilisation — sites, town planning, trade, decline</div>
      <div class="box blue">Vedic Age — early/later Vedic, literature, polity, society</div>
      <div class="box blue">Mahajanapadas — rise, Magadha, Persian & Greek invasions</div>
      <div class="box blue">Buddhism & Jainism — founders, doctrines, councils, sects</div>
      <div class="box blue">Mauryan Empire — Chandragupta, Ashoka, administration, Arthashastra</div>
      <div class="box blue">Post-Mauryan — Shunga, Satavahana, Kushana, Sangam age, Indo-Greeks</div>
      <div class="box blue">Gupta Empire — polity, economy, science, art & architecture</div>
      <div class="box blue">Art, architecture, coins, inscriptions</div>
    `,
    questions: [],
  },
  {
    id: "hist_medieval",
    crumbs: ["AP SI", "General Studies", "Indian History"],
    kicker: "AP SI • GS • History • Medieval India",
    title: "Medieval India",
    meta: "Delhi Sultanate • Vijayanagar • Mughals • Marathas • Bhakti/Sufi • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">Delhi Sultanate — Slave, Khalji, Tughlaq, Sayyid, Lodi dynasties</div>
      <div class="box blue">Administration, coinage, land revenue, invasions</div>
      <div class="box blue">Vijayanagar Empire — dynasties, foreign travellers, art</div>
      <div class="box blue">Bahmani Kingdom & Deccan Sultanates</div>
      <div class="box blue">Mughal Empire — Babur to Aurangzeb, administration, land revenue</div>
      <div class="box blue">Marathas — Shivaji, Peshwas, expansion</div>
      <div class="box blue">Bhakti & Sufi movements</div>
      <div class="box blue">Regional kingdoms — Bengal, Gujarat, Rajasthan, Sikhs</div>
    `,
    questions: [],
  },
  {
    id: "hist_modern",
    crumbs: ["AP SI", "General Studies", "Indian History"],
    kicker: "AP SI • GS • History • Modern India",
    title: "Modern India & Indian National Movement",
    meta: "Company rule • 1857 • Social reform • INC • Gandhi era • Freedom • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">European arrival — Portuguese, Dutch, French, British</div>
      <div class="box blue">Battle of Plassey & Buxar; Company rule 1757–1858</div>
      <div class="box blue">Economic impact — Drain theory, land revenue systems, deindustrialisation</div>
      <div class="box blue">Revolt of 1857 — causes, leaders, consequences</div>
      <div class="box blue">Governance acts — Regulating Act to Government of India Act 1935</div>
      <div class="box blue">Social & religious reform movements</div>
      <div class="box blue">Birth of INC; Moderates & Extremists; Partition of Bengal; Swadeshi</div>
      <div class="box blue">Revolutionary movement; Home Rule; Lucknow Pact</div>
      <div class="box blue">Gandhian era — Champaran to Quit India</div>
      <div class="box blue">Road to freedom — INA, Cabinet Mission, Mountbatten Plan, Partition</div>
      <div class="box blue">Post-independence integration & reorganisation</div>
      <div class="box blue">AP-specific history (Satavahanas, Kakatiyas, modern leaders)</div>
    `,
    questions: [],
  },

  /* ================= SCIENCE ================= */
  {
    id: "sci_phy",
    crumbs: ["AP SI", "General Studies", "General Science"],
    kicker: "AP SI • GS • Science • Physics",
    title: "Physics",
    meta: "Degree level • units, mechanics, heat, sound, light, electricity, modern • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written (Degree level).</b></div>
      <h3>Section map</h3>
      <div class="box blue">Units & measurements — SI units, dimensions, errors</div>
      <div class="box blue">Mechanics — Newton's laws, momentum, friction, work-energy-power, machines</div>
      <div class="box blue">Heat & thermodynamics — temperature scales, expansion, heat transfer, laws</div>
      <div class="box blue">Sound — speed, wavelength, echo, SONAR, ultrasound/infrasound</div>
      <div class="box blue">Light — reflection, refraction, lenses, TIR, dispersion, interference, diffraction, polarisation</div>
      <div class="box blue">Electricity & magnetism — Ohm's law, circuits, magnetic effect, induction, AC</div>
      <div class="box blue">Modern physics — atomic models, nucleus, radioactivity, semiconductors, lasers</div>
      <div class="box blue">Instruments — thermometer, barometer, seismograph, bolometer, etc.</div>
    `,
    questions: [],
  },
  {
    id: "sci_chem",
    crumbs: ["AP SI", "General Studies", "General Science"],
    kicker: "AP SI • GS • Science • Chemistry",
    title: "Chemistry",
    meta: "Degree level • atomic structure, bonding, physical, inorganic, organic • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written (Degree level).</b></div>
      <h3>Section map</h3>
      <div class="box blue">Structure of matter — atomic models, quantum numbers, configuration, periodic trends</div>
      <div class="box blue">Chemical bonding — ionic, covalent, coordination, hybridisation</div>
      <div class="box blue">States of matter — gas laws, kinetic theory, crystal systems</div>
      <div class="box blue">Physical chemistry — thermodynamics, equilibrium, pH, electrochemistry, kinetics</div>
      <div class="box blue">Inorganic chemistry — metallurgy, alloys, fertilizers, water treatment, acids/bases</div>
      <div class="box blue">Organic chemistry — functional groups, hydrocarbons, polymers, drugs, reactions</div>
      <div class="box blue">Everyday chemistry — fuels, detergents, food chemistry, corrosion</div>
    `,
    questions: [],
  },
  {
    id: "sci_bio",
    crumbs: ["AP SI", "General Studies", "General Science"],
    kicker: "AP SI • GS • Science • Biology",
    title: "Biology",
    meta: "Degree level • cell, genetics, physiology, ecology, health • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written (Degree level). Largest science block in Mains.</b></div>
      <h3>Section map</h3>
      <div class="box blue">Cell biology — structure, organelles, cell division, chromosomes</div>
      <div class="box blue">Classification & taxonomy — Linnaeus, five kingdoms, alpha/cytotaxonomy</div>
      <div class="box blue">Genetics — Mendel, inheritance, DNA/RNA, genetic engineering</div>
      <div class="box blue">Plant physiology — photosynthesis, hormones, photoperiodism, reproduction</div>
      <div class="box blue">Human physiology — digestive, respiratory, circulatory, excretory, nervous, endocrine</div>
      <div class="box blue">Nutrition & health — vitamins, deficiency diseases</div>
      <div class="box blue">Diseases & immunity — pathogens, vaccines, antibiotics</div>
      <div class="box blue">Ecology & environment — ecosystem, biodiversity, pollution, conservation</div>
      <div class="box blue">Biotechnology & S&T — GM crops, cloning, tissue culture, nanotech, defense</div>
    `,
    questions: [],
  },

  /* ================= GEOGRAPHY & ECONOMY ================= */
  {
    id: "geo_india",
    crumbs: ["AP SI", "General Studies", "Geography & Economy"],
    kicker: "AP SI • GS • Geography • India",
    title: "Indian Geography",
    meta: "Physical • drainage • climate • vegetation • minerals • population • AP • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">Physical geography — universe, solar system, earth interior, geomorphology</div>
      <div class="box blue">Climatology — atmosphere, insolation, pressure belts, jet streams</div>
      <div class="box blue">Oceanography — currents, tides, salinity</div>
      <div class="box blue">Indian physical features — mountains, peaks, passes, plateaus, plains, islands</div>
      <div class="box blue">Indian drainage — Himalayan vs peninsular rivers, tributaries</div>
      <div class="box blue">Indian climate — monsoon, seasons, rainfall distribution</div>
      <div class="box blue">Vegetation & soil — forest types, soil types</div>
      <div class="box blue">Minerals & industries — coal, iron, mica, bauxite; industrial regions</div>
      <div class="box blue">Agriculture — Green Revolution, cropping, irrigation, food security</div>
      <div class="box blue">Population & settlement — Census 2011, urbanisation, tribes</div>
      <div class="box blue">Transport & communication — highways, railways, ports, airports</div>
      <div class="box blue">Geography of Andhra Pradesh — rivers, climate, minerals, districts</div>
    `,
    questions: [],
  },
  {
    id: "econ_basic",
    crumbs: ["AP SI", "General Studies", "Geography & Economy"],
    kicker: "AP SI • GS • Economy",
    title: "Economy Basics & Rural Development",
    meta: "Basics • planning • banking • schemes • rural • reforms • AP • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">Basics — GDP/GNP, inflation, fiscal & monetary policy, budget process</div>
      <div class="box blue">Planning — NITI Aayog, Five-Year Plans, Bharat Nirman</div>
      <div class="box blue">Banking & finance — RBI, SEBI, NABARD, GST, CBDC, fiscal deficit</div>
      <div class="box blue">Government schemes — PM-KISAN, MGNREGA, AAY, PM Vishwakarma, Ayushman Bharat</div>
      <div class="box blue">Rural development — SHGs, FPOs, Panchayati Raj finance, agricultural marketing</div>
      <div class="box blue">Economic reforms (1991+) — LPG, industrial & trade policy, FDI, disinvestment</div>
      <div class="box blue">Agriculture & allied — food security, procurement, Green Revolution</div>
      <div class="box blue">Employment & poverty — schemes, MPI, unemployment types</div>
      <div class="box blue">AP economy — Socio-Economic Survey, budget, schemes, industries</div>
      <div class="box blue">Economic Survey & Budget data — key figures</div>
    `,
    questions: [],
  },

  /* ================= CURRENT AFFAIRS ================= */
  {
    id: "ca_monthly",
    crumbs: ["AP SI", "General Studies", "Current Affairs & Mocks"],
    kicker: "AP SI • GS • Current Affairs",
    title: "Current Affairs",
    meta: "National • international • economy • AP • sports • awards • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written. ~40% of Mains GS paper.</b></div>
      <h3>Section map</h3>
      <div class="box blue">National — schemes, bills/acts, appointments, defence, space</div>
      <div class="box blue">International — summits, treaties, reports/indices, organisations</div>
      <div class="box blue">Economy — budget, Economic Survey, GST, FDI, trade data</div>
      <div class="box blue">Andhra Pradesh — schemes, budget, appointments, developments</div>
      <div class="box blue">Sports — championships, awards, trophies</div>
      <div class="box blue">Awards & honours — national, film, literature, gallantry</div>
      <div class="box blue">Books & authors, important days, personalities</div>
      <div class="box blue">Monthly digest structure — Jan through Dec</div>
    `,
    questions: [],
  },

  /* ================= AP-SPECIFIC GS ================= */
  {
    id: "ap_polity",
    crumbs: ["AP SI", "General Studies", "Andhra Pradesh"],
    kicker: "AP SI • GS • AP Studies • Polity",
    title: "AP Polity",
    meta: "AP Reorganisation Act • state symbols • legislature • governance • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">AP Reorganisation Act 2014 — capital, committees, provisions</div>
      <div class="box blue">State symbols — emblem, animal, bird, tree, flower, sport</div>
      <div class="box blue">Legislature — Assembly, Council, Speaker, constituencies</div>
      <div class="box blue">Governor & Chief Minister — powers, discretionary role</div>
      <div class="box blue">State governance — districts, revenue divisions, local bodies</div>
      <div class="box blue">AP state schemes & institutions</div>
    `,
    questions: [],
  },
  {
    id: "ap_geography",
    crumbs: ["AP SI", "General Studies", "Andhra Pradesh"],
    kicker: "AP SI • GS • AP Studies • Geography",
    title: "AP Geography",
    meta: "Rivers • climate • soils • agriculture • minerals • districts • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">Location & boundaries; physiographic divisions</div>
      <div class="box blue">Rivers — Krishna, Godavari, Penner, Tungabhadra</div>
      <div class="box blue">Climate & rainfall</div>
      <div class="box blue">Soils & vegetation; forests & national parks</div>
      <div class="box blue">Agriculture & crops; irrigation projects</div>
      <div class="box blue">Minerals & industries</div>
      <div class="box blue">Districts, cities, transport</div>
    `,
    questions: [],
  },
  {
    id: "ap_history",
    crumbs: ["AP SI", "General Studies", "Andhra Pradesh"],
    kicker: "AP SI • GS • AP Studies • History",
    title: "AP History",
    meta: "Satavahanas • Ikshvakus • Kakatiyas • Vijayanagar • modern AP • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">Satavahanas — rulers, administration, trade, art</div>
      <div class="box blue">Ikshvakus, Pallavas, Vishnukundins, Eastern Chalukyas</div>
      <div class="box blue">Kakatiyas — administration, architecture, literature</div>
      <div class="box blue">Vijayanagar & Reddy/Recherla kingdoms in AP</div>
      <div class="box blue">Qutb Shahis & Mughal Deccan</div>
      <div class="box blue">Modern AP — colonial rule, freedom movement, formation of AP (1956, 2014)</div>
      <div class="box blue">AP cultural heritage — temples, literature, festivals</div>
    `,
    questions: [],
  },
  {
    id: "ap_economy",
    crumbs: ["AP SI", "General Studies", "Andhra Pradesh"],
    kicker: "AP SI • GS • AP Studies • Economy",
    title: "AP Economy",
    meta: "Socio-Economic Survey • budget • schemes • agriculture • industry • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written.</b></div>
      <h3>Section map</h3>
      <div class="box blue">AP Socio-Economic Survey — key indicators</div>
      <div class="box blue">AP budget — revenue, expenditure, deficits</div>
      <div class="box blue">AP agriculture & allied sectors</div>
      <div class="box blue">AP industries & investment; SEZs, ports</div>
      <div class="box blue">AP government schemes & welfare</div>
      <div class="box blue">AP infrastructure — power, roads, irrigation</div>
    `,
    questions: [],
  },

  /* ================= ENGLISH DESCRIPTIVE ================= */
  {
    id: "eng_desc",
    crumbs: ["AP SI", "Mains", "English (Descriptive)"],
    kicker: "AP SI • Mains Paper-I • English Descriptive",
    title: "English — Descriptive Paper",
    meta: "Essay • précis • letter • report • translation • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written. Mains Paper-I is descriptive (qualifying).</b></div>
      <h3>Section map</h3>
      <div class="box blue">Comprehension — passage reading + written answers</div>
      <div class="box blue">Précis writing — condense to 1/3, title, summary rules</div>
      <div class="box blue">Essay writing — social, political, economic, contemporary, AP-specific</div>
      <div class="box blue">Letter writing — formal & informal</div>
      <div class="box blue">Paragraph & report writing</div>
      <div class="box blue">Translation — English ↔ Telugu</div>
      <div class="box blue">Grammar for writing — voice, narration, error spotting, SVA</div>
    `,
    questions: [],
  },

  /* ================= TELUGU DESCRIPTIVE ================= */
  {
    id: "tel_desc",
    crumbs: ["AP SI", "Mains", "Telugu (Descriptive)"],
    kicker: "AP SI • Mains Paper-II • Telugu Descriptive",
    title: "Telugu — Descriptive Paper",
    meta: "Comprehension • précis • essay • letter • translation • grammar • ~TBD",
    content: `
      <div class="box amber">🚧 <b>Skeleton — content to be written. Mains Paper-II is descriptive (qualifying). No portal content yet.</b></div>
      <h3>Section map</h3>
      <div class="box blue">Comprehension — passage + questions (గద్యభాగం)</div>
      <div class="box blue">Précis — సంగ్రహం</div>
      <div class="box blue">Essay — వ్యాసరచన</div>
      <div class="box blue">Letter writing — లేఖరచన (formal + informal)</div>
      <div class="box blue">Paragraph / report writing — పేరా, నివేదిక</div>
      <div class="box blue">Translation — Telugu ↔ English</div>
      <div class="box blue">Telugu grammar — సంధి, సమాసాలు, అలంకారాలు, వ్యాకరణం, ఛందస్సు</div>
    `,
    questions: [],
  },
];
