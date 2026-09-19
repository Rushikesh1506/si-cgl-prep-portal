/* articles.js — study notes + topic-level mock questions (per-article split) */
const studyData = [
{
  id: "fr_overview",
  crumbs: ["AP SI", "General Studies", "Indian Polity", "Fundamental Rights"],
  kicker: "AP SI • GS • Polity • Fundamental Rights • Overview",
  title: "FR Overview: Arts. 12–13, the 6 groups, who gets what",
  meta: "Part III • Art. 12–13 + map • ~15 min • 4 Q topic mock (45/day bank in Mock tab)",
  content: `
    <p><b>Start here if you are new.</b> Part III (<span class="art">Art. 12–35</span>) is called the <b>Magna Carta of India</b>. These promises are <b>Fundamental Rights</b>: if the government breaks them you can go <b>directly to the Supreme Court (<span class="art">Art. 32</span>)</b> or a High Court (<span class="art">Art. 226</span>). That direct ticket to court is called <b>justiciable</b>.</p>
    <div class="box blue">📌 <b>Foundation 1 — who must obey? (<span class="art">Art. 12</span>)</b> Mostly the <b>State</b>: Union + State governments, Parliament + State legislatures, panchayats/municipalities, and statutory bodies (universities, boards). Tests for <b>other authorities</b>: deep government money + monopoly + government functions + management control (R.D. Shetty / Ajay Hasia). Courts count only for admin acts — <b>judicial judgments cannot be attacked as FR violations</b> (Mirajkar, 1967). <b>BCCI is NOT State</b> (Zee Telefilms, 2005) — so no Art. 32 against it, but Art. 226 still works because it runs against any person or authority doing public functions.</div>
    <div class="box blue">📌 <b>Foundation 2 — what if a law breaks an FR? (<span class="art">Art. 13</span>)</b> It is <b>void</b> to that extent. Pre-1950 inconsistent laws go dormant, not dead (eclipse); only the bad part is cut (severability). A constitutional amendment is <b>not</b> ordinary law under Art. 13 (24th Amendment, reverses Golaknath) — but it still dies if it damages the <b>basic structure</b> (Kesavananda, 1973).</div>
    <div class="box green">✅ <b>Foundation 3 — who gets which right?</b> <b>Person</b> (citizens + foreigners + companies): <span class="art">Art. 14, 20, 21, 22, 23, 24, 25–28</span>. <b>Citizen only</b>: <span class="art">Art. 15, 16, 19, 29, 30</span>. <b>Horizontal</b> (even against private people): <span class="art">Art. 15(2), 17, 23, 24</span>. Half of all AP SI traps live in these three lists.</div>
    <h3>The 6 groups in 60 seconds</h3>
    <table class="rev"><tr><th>Group</th><th>Articles</th><th>Hook</th></tr>
    <tr><td>Right to Equality</td><td><span class="art">14–18</span></td><td>Same law for all; no discrimination; fair govt jobs; no untouchability; no titles</td></tr>
    <tr><td>Right to Freedom</td><td><span class="art">19–22</span></td><td>6 freedoms for citizens; safety if arrested; life and liberty for all</td></tr>
    <tr><td>Against Exploitation</td><td><span class="art">23–24</span></td><td>No trafficking or forced labour; no under-14 in dangerous work</td></tr>
    <tr><td>Religion</td><td><span class="art">25–28</span></td><td>Practise any religion; run religious affairs; no religious tax; no religion class in full-govt schools</td></tr>
    <tr><td>Culture & Education</td><td><span class="art">29–30</span></td><td>Minorities keep language; run their own schools</td></tr>
    <tr><td>Remedies</td><td><span class="art">32–35</span></td><td>Heart and Soul — 5 writs enforce everything above</td></tr></table>
    <div class="takeaway">🎯 <b>How to use this subtree:</b> read this overview, then open each Article 14 → 15 → 16 → 17 → 18 in order from the sidebar. Each article page ends with its own mini-mock; the full 45/day bank lives in the Mock Practice tab.</div>`,
  questions: [
    { q: "Ravi, a foreign student, is denied a government college seat explicitly because of religion. Which is the most accurate advice?", options: ["He can invoke Article 15(1) since it protects all persons", "He cannot invoke Article 15 since Articles 15, 16 and 19 are citizen-only — but Article 14 (every person) may help against State action", "He can invoke Article 16 since education is public employment", "No remedy exists for foreigners"], answer: 1, explanation: "Article 15 says citizen, so a foreigner cannot claim it — option A is the classic person-vs-citizen trap. Article 14 says person and binds State action, so C's confusion of education with employment fails and D's no-remedy claim fails. Correct: B." },
    { q: "The BCCI cancels a telecast contract. Zee files a writ under Article 32 against the BCCI. What is the correct position?", options: ["Maintainable — BCCI is State under Article 12", "Not maintainable under 32 since BCCI is not State, but a High Court writ under 226 may lie for its public functions", "No writ against BCCI in any court", "Maintainable only in an Emergency"], answer: 1, explanation: "Zee Telefilms (2005): BCCI fails the instrumentality test (no state funds or control) so no Article 32. But Article 226 runs against any person or authority, so public functions like running national cricket are reviewable there. Correct: B — state both halves." },
    { q: "Which rights can a private shop owner violate directly?", options: ["Articles 14 and 19", "Only Article 32", "Articles 15(2), 17, 23 and 24", "None — FRs never bind private persons"], answer: 2, explanation: "Most FRs are vertical (State only), but four are horizontal: 15(2) listed access, 17 untouchability, 23 forced labour, 24 child labour. Correct: C. Hook: 15(2), 17, 23, 24 reach private hands." },
    { q: "A pre-1950 law partly violates a Fundamental Right. What happens to it?", options: ["Whole law dies permanently", "Inconsistent part goes dormant (eclipse) and only the bad part is cut (severability)", "It stays fully valid", "Only Parliament can repeal it"], answer: 1, explanation: "Article 13(1): pre-Constitution laws are void to the extent of inconsistency — dormant while inconsistent (eclipse), revivable if the inconsistency is removed; courts sever only the offending part. Correct: B." },
  ]
},
{
  id: "fr_art14",
  crumbs: ["AP SI", "General Studies", "Indian Polity", "Fundamental Rights", "Right to Equality"],
  kicker: "Right to Equality • Article 14 • Active Now",
  title: "Article 14 — Equality Before Law",
  meta: "Every person • 3 test layers • ~15 min • 5 Q topic mock",
  content: `
    <p><b>Background.</b> One sentence carries two foreign ideas. <b>Equality before law</b> (Britain, Dicey) is negative — nobody is above the law. <b>Equal protection of the laws</b> (USA, 14th Amendment) is positive — the law must treat people in the same situation the same way, so people in <b>different</b> situations may be treated differently. Tax slabs, age limits for SI recruitment, and quotas all survive because of the second half.</p>
    <div class="steps"><b>How courts test it — 3 layers, step by step:</b><ol>
    <li><b>Layer 1 — Classification test:</b> grouping is allowed only if (a) <b>intelligible differentia</b> (a real, clear difference) AND (b) <b>rational nexus</b> (that difference links to the law's purpose). Both compulsory. Fails: only Monday-born candidates may apply — clear difference, zero link to policing.</li>
    <li><b>Layer 2 — Arbitrariness test (Royappa 1974 + Maneka 1978):</b> a fair-looking rule applied arbitrarily still violates Art. 14. Full story in Case Files: Royappa, a Chief Secretary shifted to lower-status posts, lost on facts but gave us <b>equality is the antithesis of arbitrariness</b>.</li>
    <li><b>Layer 3 — Manifest arbitrariness (Shayara Bano 2017):</b> even a law of Parliament can fall if capricious with no guiding principle.</li></ol></div>
    <div class="example">👮 <b>SI-field example:</b> thirty shops play loudspeakers after 10 pm; you book only the rival-group shopkeeper. Law valid, selection principle-less → arbitrary → quashed under Art. 226. Always record <b>why this person and not that one</b>.</div>
    <div class="box amber">⚠️ <b>Exceptions:</b> <span class="art">Art. 361</span> (President/Governor immune); <span class="art">Art. 105/194</span> (legislative privileges); <span class="art">Art. 31C</span> (39(b)–(c) laws shielded); <span class="art">Art. 33</span> (forces/police rights restrictable); <span class="art">Art. 359</span> suspension (never 20/21).</div>
    <div class="takeaway">🎯 <b>Takeaway:</b> Art. 14 = every <b>person</b>. Test = differentia + nexus + non-arbitrariness. Valid law + arbitrary action still fails. Full Royappa story: Case Files tab → Case 2.</div>`,
  questions: [
    { q: "A constable rule bars only left-handed applicants. Classification test outcome?", options: ["Valid — State has absolute discretion", "Valid — difference is real so it passes", "Fails — real difference but no link to constable duties; both limbs are cumulative", "Fails — left-handedness is a constitutionally barred ground"], answer: 2, explanation: "Handedness is real (limb 1 met) but has no nexus to the job (limb 2 fails). Both limbs are cumulative. Correct: C." },
    { q: "An officer transfers a constable with no ground on record though none existed. Governing principle?", options: ["Directive Principles override", "Arbitrariness itself breaches equality (Royappa) — no classification analysis needed", "Courts cannot review transfers", "Only legislative competence matters"], answer: 1, explanation: "Since Royappa (1974), arbitrariness is the antithesis of equality; Maneka extended it to unfair procedure. Correct: B." },
    { q: "Equality is the antithesis of arbitrariness — which case?", options: ["E.P. Royappa (1974)", "Golaknath (1967)", "Berubari (1960)", "Wadhwa (1987)"], answer: 0, explanation: "Royappa, per Bhagwati J. Note: Royappa lost on facts (could not prove mala fide) but the principle outlived the result. Correct: A." },
    { q: "A law treating two groups differently survives because the court finds a real difference linked to the purpose. Doctrine applied?", options: ["Basic structure test", "Valid classification test (differentia + nexus)", "Colourable legislation test", "Pith and substance test"], answer: 1, explanation: "Difference-plus-link is the two-limb classification test. Pith-and-substance tests legislative competence, not equality. Correct: B." },
    { q: "Which is NOT an exception to Article 14?", options: ["Article 361 immunity", "Article 33 forces restriction", "Article 31C shield for 39(b)–(c) laws", "Article 19(1)(a) freedom of speech"], answer: 3, explanation: "19(1)(a) is a separate right, not an exception to 14. The other three are genuine carve-outs. Correct: D." },
  ]
},
{
  id: "fr_art15",
  crumbs: ["AP SI", "General Studies", "Indian Polity", "Fundamental Rights", "Right to Equality"],
  kicker: "Right to Equality • Article 15 • Active Now",
  title: "Article 15 — No Discrimination (5 grounds)",
  meta: "Citizens • RRCSP • horizontal 15(2) • ~15 min • 5 Q topic mock",
  content: `
    <p><b>Background.</b> Hotels, wells and schools shut doors on caste/religious grounds. Art. 15 bans State discrimination on exactly <b>five</b> grounds — <b>RRCSP: Religion, Race, Caste, Sex, Place of birth</b>. <b>Descent and residence are NOT here</b> — only in Art. 16.</p>
    <div class="steps"><b>Clause flow:</b><ol>
    <li><b>15(1)</b> — State shall not discriminate (vertical only).</li>
    <li><b>15(2) — horizontal, TWO limbs:</b> (a) <b>shops, hotels, restaurants, cinemas</b> — no State-funding condition, binds private owners; (b) <b>wells, tanks, bathing ghats, roads, public resorts</b> — only if State-funded OR dedicated to the public. Shortcut: <b>pay-and-enter places need no State link; shared resources do</b>.</li>
    <li><b>15(3)</b> — women and children: special provisions always allowed.</li>
    <li><b>15(4)</b> — 1st Amendment 1951 after <b>Champakam Dorairajan (1951)</b>: Brahmin student denied a medical seat by communal quota won (FR beats DPSP), so Nehru inserted 15(4) for SC/ST/SEBC. Full story: Case Files → Case 1.</li>
    <li><b>15(5)</b> — 93rd Amendment 2005: quota in private colleges, <b>minority institutions under Art. 30 expressly excluded</b> (see T.M.A. Pai, Case 21).</li>
    <li><b>15(6)</b> — 103rd Amendment 2019: up to 10% EWS, upheld in <b>Janhit Abhiyan (2022)</b> — full story: Case Files → Case 24.</li></ol></div>
    <div class="example">🏨 <b>Real example:</b> private hotel refuses a family on caste grounds → squarely <span class="art">Art. 15(2)(a)</span>, no funding link needed, plus Atrocities Act case. An SI cannot say no FR is involved because the hotel is private.</div>
    <div class="takeaway">🎯 <b>Takeaway:</b> 5 grounds only; 15(2)(a) vs (b) split decides funding questions; 15(4)→1st, 15(5)→93rd minus minorities, 15(6)→103rd.</div>`,
  questions: [
    { q: "A dhaba open to travellers turns away a family, stating caste. Most directly implicated?", options: ["Equality in public employment", "Equality before law against the owner", "Ban on state titles", "Access to listed public places — 15(2)(a), binds private parties, no funding needed"], answer: 3, explanation: "Eating houses fall in 15(2)(a): listed, horizontal, no State-funding condition. Article 14 binds the State, not the dhaba owner. Correct: D." },
    { q: "A panchayat-fund pond is closed to Dalit households. Provision violated?", options: ["No clause — ponds are private", "Listed-access clause for State-maintained water sources — 15(2)(b), funding + public use met", "Anti-title clause", "Public-employment clause"], answer: 1, explanation: "Wells/tanks/bathing ghats maintained from State funds and dedicated to public use fall squarely in 15(2)(b); both conditions satisfied. A private farm pond would fail the funding leg. Correct: B." },
    { q: "Statements on 15(2): 1. Shops/hotels covered only if State-funded. 2. Enforceable against private persons. 3. Covers State-funded wells/tanks/ghats for public use. Correct?", options: ["1 and 3 only", "2 and 3 only", "1 and 2 only", "1, 2 and 3"], answer: 1, explanation: "Statement 1 is the coaching-note error: funding condition belongs only to limb (b). Statements 2 (horizontal) and 3 are true. Correct: B." },
    { q: "Which amendment inserted Article 15(4), and why?", options: ["42nd — Emergency excesses", "1st (1951) — after Champakam Dorairajan struck the Communal G.O.", "44th — property deletion", "103rd — EWS"], answer: 1, explanation: "Champakam (1951): FR beats DPSP, Communal G.O. struck under 29(2). Parliament replied within months with the 1st Amendment inserting 15(4). Correct: B." },
    { q: "An unaided non-minority college denies an EWS seat; a minority college denies a backward-class seat. Position?", options: ["Both violate equally", "First protected, second violates", "First violates quota law, second protected — 15(5) expressly excepts Art. 30 minority institutions", "Neither violates"], answer: 2, explanation: "15(5) (93rd) covers unaided non-minority colleges including EWS but excepts minority institutions that both establish and administer. Correct: C." },
  ]
},
{
  id: "fr_art16",
  crumbs: ["AP SI", "General Studies", "Indian Polity", "Fundamental Rights", "Right to Equality"],
  kicker: "Right to Equality • Article 16 • Active Now",
  title: "Article 16 — Public Employment (7 grounds)",
  meta: "Citizens • 16(3)/(4)/(4A)/(4B)/(6) • ~20 min • 5 Q topic mock",
  content: `
    <p><b>Background.</b> Every <b>citizen</b> can apply for State jobs; discrimination banned on <b>seven</b> grounds — the five of Art. 15 <b>plus descent and residence</b>. Spot either word and the answer must be Art. 16, never 15.</p>
    <div class="steps"><b>Reservation machinery:</b><ol>
    <li><b>16(1)</b> general equality; <b>16(2)</b> the 7-ground ban.</li>
    <li><b>16(3)</b> — residence requirement only by <b>Parliament law</b>, never a State order. Contrast <span class="art">Art. 371D</span>: AP local cadres by <b>Presidential Order</b> (1975) under the 32nd Amendment — different actor, different instrument (Case Files → AP chain, Topic 28).</li>
    <li><b>16(4)</b> backward-class reservation; <b>16(4A)</b> SC/ST promotion + consequential seniority (77th + 85th); <b>16(4B)</b> backlog carry-forward outside ceiling (81st); <b>16(6)</b> EWS (103rd).</li></ol></div>
    <div class="case"><b class="t">Indra Sawhney / Mandal (1992, 9 judges) — 4 holdings:</b> (1) 16(4) is a <b>facet of equality, not an exception</b>; (2) <b>50% ceiling</b> for backward-class quota, extraordinary situations only; (3) <b>creamy layer excluded</b>; (4) no promotion quota — reversed by the 77th Amendment. <b>Update — Janhit Abhiyan (2022, 3:2):</b> 50% is <b>not basic structure</b>; EWS sits <b>outside</b> it. <b>Update — Maratha (2021) → 105th (2021):</b> 102nd (NCBC/342A) read as stripping States of SEBC-identification power; 105th restored it. Full stories: Case Files → Cases 4, 23, 24.</div>
    <div class="takeaway">🎯 <b>Takeaway:</b> 7 grounds; residence = Parliament; 50% governs 16(4) only; promotion quota exists only via amendment; 102nd→Maratha→105th is one cause-effect chain.</div>`,
  questions: [
    { q: "A State order reserves clerk posts for district-born candidates. A non-local challenges. Outcome?", options: ["Valid as State privilege", "Valid as backward-class welfare", "Invalid — residence qualifications need a Parliamentary law (16(3))", "Valid under the AP special provision"], answer: 2, explanation: "16(3): residence power sits with Parliament alone. A State order cannot do it; backward-class welfare is a different route. Correct: C." },
    { q: "Assertion: a combined 60% (SC/ST/OBC + EWS) quota is automatically unconstitutional. Reason: Indra Sawhney fixed 50%. Correct option?", options: ["Both true, R explains A", "Both true, R does not explain A", "A false, R true", "Both false"], answer: 2, explanation: "R true (50% for 16(4)); A false — after Janhit Abhiyan (2022) EWS sits outside the ceiling and the ceiling is not basic structure. Trap word: automatically. Correct: C." },
    { q: "An Assembly residence rule for State posts vs an AP zonal quota under Presidential Order. Validity pair?", options: ["Assembly valid, Order invalid", "Assembly invalid, Order route valid (371D, not residence power)", "Both valid", "Both invalid"], answer: 1, explanation: "Assembly fails (Parliament-only residence power); AP quotas validly flow from Art. 371D via Presidential Order. Never reduce 371D to a residence requirement. Correct: B." },
    { q: "Which statement reflects Indra Sawhney correctly?", options: ["16(4) is an exception derogating from equality", "16(4) is a facet of real equality; creamy layer excluded; 50% ceiling for backward-class quota", "It created a universal right to quota for every disadvantaged group", "It allowed unlimited promotion quota"], answer: 1, explanation: "Text is reservation, doctrine is facet-of-equality; class bounded (backward + inadequately represented); promotion quota was disallowed (later restored by amendment). Correct: B." },
    { q: "A State provides 62% backward-class quota with no EWS part and no extraordinary conditions. Outcome?", options: ["Valid — backwardness data suffices", "Fails — non-EWS quota above the ceiling without extraordinary justification", "Valid — ceiling applies only to EWS", "Fails — all quota unconstitutional"], answer: 1, explanation: "Ceiling binds the non-EWS compartment; EWS sits outside it. 62% backward-class with no extraordinary case breaches Indra Sawhney. Correct: B." },
  ]
},
{
  id: "fr_art17",
  crumbs: ["AP SI", "General Studies", "Indian Polity", "Fundamental Rights", "Right to Equality"],
  kicker: "Right to Equality • Article 17 • Active Now",
  title: "Article 17 — Abolition of Untouchability",
  meta: "Absolute + horizontal • ~10 min • 3 Q topic mock",
  content: `
    <p><b>Background.</b> Centuries of caste-based exclusion from temples, wells and schools. The framers made this the only <b>absolute</b> FR: <b>untouchability is abolished; its practice in any form is an offence punishable by law</b>. No exceptions, no reasonable restriction, no Emergency escape in practice — enforceable against <b>private persons</b> too.</p>
    <div class="steps"><b>How to apply it:</b><ol>
    <li>Constitution deliberately <b>does not define</b> untouchability — courts read it as caste-based social disability (not every caste insult automatically qualifies, but refusal of temple/well/school access on caste grounds squarely does).</li>
    <li>Enforced via <b>Protection of Civil Rights Act, 1955</b> + <b>SC/ST (Prevention of Atrocities) Act, 1989</b>.</li>
    <li>Exam test: any option adding reasonable restriction, Emergency suspension, or State-only availability is <b>false</b>.</li></ol></div>
    <div class="example">👮 <b>SI example:</b> panchayat bars Dalits from the shrine festival → Art. 17 + registrable offence under PCR/Atrocities Acts, not merely a civil dispute.</div>
    <div class="takeaway">🎯 <b>Takeaway:</b> absolute + horizontal; no definition in Constitution; two statutes give it teeth.</div>`,
  questions: [
    { q: "A panchayat bars Dalits from the village shrine festival. Nature of protection?", options: ["Absolute and enforceable even against private parties", "Suspendable in Emergency", "Subject to reasonable restriction", "Available only against the State"], answer: 0, explanation: "Art. 17 admits no exception, reaches private conduct, and is enforced via PCR Act 1955 + Atrocities Act. Correct: A." },
    { q: "Assertion (A): Untouchability is abolished under Article 17. Reason (R): Article 17 is available only against the State.", options: ["Both true, R explains A", "A true, R false", "A false, R true", "Both false"], answer: 1, explanation: "A true; R false — 17 is horizontal (with 15(2), 23, 24). Correct: B." },
    { q: "Which statutes enforce Article 17?", options: ["Protection of Civil Rights Act 1955 + SC/ST Atrocities Act 1989", "Only the Indian Contract Act", "Only municipal bye-laws", "No statute — it is self-executing only"], answer: 0, explanation: "PCR Act 1955 (renamed from Untouchability Offences Act) + POA 1989 carry the penal load. Correct: A." },
  ]
},
{
  id: "fr_art18",
  crumbs: ["AP SI", "General Studies", "Indian Polity", "Fundamental Rights", "Right to Equality"],
  kicker: "Right to Equality • Article 18 • Active Now",
  title: "Article 18 — Abolition of Titles",
  meta: "Military/academic only • awards vs titles • ~10 min • 3 Q topic mock",
  content: `
    <p><b>Background.</b> British rule handed out Rai Bahadur and knighthoods to build a ranked class. A republic of equals bans them: State shall confer no <b>title</b> except <b>military and academic</b> distinctions. A <b>citizen</b> may not accept any foreign title (18(2), outright bar); a <b>non-citizen holding office of profit</b> needs the <b>President's</b> consent (18(3)); no presents/offices from foreign States without consent (18(4).</p>
    <div class="case"><b class="t">Balaji Raghavan (1996):</b> petitions said Bharat Ratna/Padma awards are banned titles. Court: they are <b>awards recognising achievement, not titles conferring rank</b> — valid, but must <b>not be used as prefix/suffix</b> to names. Full story: Case Files → Case 7.</div>
    <div class="takeaway">🎯 <b>Takeaway:</b> citizen + foreign title = barred outright (no consent route); consent belongs to 18(3) non-citizens; awards valid, no prefix use.</div>`,
  questions: [
    { q: "An Indian architect accepts a foreign knighthood without Rashtrapati Bhavan clearance. Position?", options: ["Barred outright for citizens", "Valid for professionals", "Valid with retrospective consent", "Valid — awards are not titles"], answer: 0, explanation: "18(2) bars citizens outright; consent route is 18(3) non-citizen office-holders. A knighthood is a title, unlike excellence awards. Correct: A." },
    { q: "Are Bharat Ratna and Padma awards titles under Article 18?", options: ["Yes — banned, must be scrapped", "No — awards, not titles (Balaji Raghavan 1996), but no prefix/suffix use", "Yes — but usable as prefix", "Only Padma is banned"], answer: 1, explanation: "Recognition vs rank distinction; awards valid with the no-prefix condition. Correct: B." },
    { q: "Who needs the President's consent for a foreign title?", options: ["Any Indian citizen", "A non-citizen holding an office of profit under the State (Art. 18(3))", "Every student abroad", "No one — consent was abolished"], answer: 1, explanation: "Citizens are barred outright under 18(2); consent belongs to 18(3). Correct: B." },
  ]
},
{
  id: "fr_cases_hub",
  crumbs: ["AP SI", "General Studies", "Indian Polity", "Fundamental Rights"],
  kicker: "Fundamental Rights • Case Files Library",
  title: "Case Files Library — 29 cases (Equality + full Polity)",
  meta: "Zero-background format • filter by tag • open the Case Files tab",
  content: `<div class="box blue">🏛️ <b>The 29 case files live in the Case Files tab</b> (same page, third tab) — filterable by Equality / Freedom / Basic structure / Police duty / AP. Equality-linked starters: Champakam (1951), Royappa (1974), Indra Sawhney (1992), Balaji Raghavan (1996), Janhit Abhiyan (2022), Maratha–102nd–105th chain. Open the tab above to read them in full: background → steps → decision → analogy → takeaway → how asked.</div>`,
  questions: [{ q: "Which case gave us equality is the antithesis of arbitrariness?", options: ["Royappa (1974)", "Berubari (1960)", "Wadhwa (1987)", "Coelho (2007)"], answer: 0, explanation: "Royappa, Bhagwati J. Correct: A." }]
},

// ---- Other Polity units (stubs keep sidebar complete; expand later, no HTML change) ----
{ id: "polity_dpsp", crumbs: ["AP SI","General Studies","Indian Polity"], kicker: "Indian Polity", title: "DPSP & Fundamental Duties", meta: "Part IV + IVA • stub",
  content: `<div class="box blue">📝 <b>Stub.</b> Socialist/Gandhian/Liberal buckets, FR-vs-DPSP 4 rounds, 86th three-Part split go here.</div>`,
  questions: [{ q: "Which part holds Directive Principles?", options: ["Part III", "Part IV — Art. 36–51", "Part IVA", "Part IX"], answer: 1, explanation: "DPSP = Part IV, borrowed from Ireland, non-justiciable per Art. 37." }] },
{ id: "polity_exec", crumbs: ["AP SI","General Studies","Indian Polity"], kicker: "Indian Polity", title: "Executive & Union Parliament", meta: "Art. 52–123 • stub",
  content: `<div class="box blue">📝 <b>Stub.</b> President/PM/CoM/AG + Lok Sabha/Rajya Sabha, Money Bill 110, joint sitting 108 go here.</div>`,
  questions: [{ q: "Money Bill is defined under?", options: ["Art. 108", "Art. 110", "Art. 112", "Art. 122"], answer: 1, explanation: "Art. 110; Speaker certifies; Rajya Sabha gets 14 days." }] },
{ id: "polity_judi", crumbs: ["AP SI","General Studies","Indian Polity"], kicker: "Indian Polity", title: "Judiciary, CAG & PIL", meta: "stub",
  content: `<div class="box blue">📝 <b>Stub.</b> SC/HC, collegium–NJAC, CAG 148–151, PIL trilogy go here. See Case Files 17–18.</div>`,
  questions: [{ q: "CAG of India is provided under?", options: ["Art. 148", "Art. 280", "Art. 324", "Art. 370"], answer: 0, explanation: "CAG — Art. 148–151." }] },
{ id: "polity_emerg", crumbs: ["AP SI","General Studies","Indian Polity"], kicker: "Indian Polity", title: "Emergency & Local Bodies", meta: "stub",
  content: `<div class="box blue">📝 <b>Stub.</b> 352/356/360, Bommai, PESA, 73rd/74th go here. See Case Files 12 and Topic 27.</div>`,
  questions: [{ q: "Financial Emergency is under?", options: ["Art. 352", "Art. 356", "Art. 360", "Art. 368"], answer: 2, explanation: "Art. 360 — never imposed." }] },
{ id: "polity_amend", crumbs: ["AP SI","General Studies","Indian Polity"], kicker: "Indian Polity", title: "Important Amendments", meta: "stub",
  content: `<div class="box blue">📝 <b>Stub.</b> 1st/24th/42nd/44th/52nd/73rd/86th/101st/102nd/103rd/105th table goes here.</div>`,
  questions: [{ q: "Which amendment is the Mini Constitution?", options: ["44th, 1978", "42nd, 1976", "52nd, 1985", "86th, 2002"], answer: 1, explanation: "42nd (1976): Socialist/Secular/Integrity, 10 duties." }] },
{ id: "hist_ancient", crumbs: ["AP SI","General Studies","History"], kicker: "History", title: "Ancient India (Upcoming)", meta: "Locked",
  content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "hist_medieval", crumbs: ["AP SI","General Studies","History"], kicker: "History", title: "Medieval India (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "hist_modern", crumbs: ["AP SI","General Studies","History"], kicker: "History", title: "Modern India (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "sci_phy", crumbs: ["AP SI","General Studies","Science"], kicker: "Science", title: "Physics (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "sci_chem", crumbs: ["AP SI","General Studies","Science"], kicker: "Science", title: "Chemistry (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "sci_bio", crumbs: ["AP SI","General Studies","Science"], kicker: "Science", title: "Biology (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "geo_india", crumbs: ["AP SI","General Studies","Geo & Econ"], kicker: "Geo & Econ", title: "Indian Geography (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "econ_basic", crumbs: ["AP SI","General Studies","Geo & Econ"], kicker: "Geo & Econ", title: "Economy Basics (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "ca_monthly", crumbs: ["AP SI","General Studies","CA & Mocks"], kicker: "CA & Mocks", title: "Current Affairs (Upcoming)", meta: "Locked", content: `<div class="box amber">🔒 Upcoming.</div>`, questions: [] },
{ id: "mock_full", crumbs: ["AP SI","General Studies","CA & Mocks"], kicker: "CA & Mocks", title: "Full Mocks — use the Mock Practice tab", meta: "12-day audited bank live • 45 Q/day",
  content: `<div class="box green">✅ <b>The 12-day audited bank is live in the Mock Practice tab:</b> pick Day 1–12 + Full 45 (20 core + 10 advanced + 5 analytical + 5 current + 5 SI-field), or any single set, then Load set. GS Bank drill is in the Day dropdown too. Topic pages also carry their own mini-mocks.</div>`,
  questions: [{ q: "How many questions per day does the audited bank hold?", options: ["10", "20", "40", "45 — 20 core + 10 advanced + 5 analytical + 5 current + 5 SI-field"], answer: 3, explanation: "Audited structure: 20 core (quiz) + 10 advanced (hard) + 5 analytical + 5 current (ca rounds X/V) + 5 SI-field (si) = 45/day across 12 days, plus the GS bank. Correct: D." }] },
];
