/* english.js — SSC CGL Tier-1 English Topic-Wise Mastery Engine.
   Merged into studyData by script.js. Questions are SSC-pattern practice
   written for this portal (NOT claimed PYQs — never labelled with Year/Shift).
   Q fields: q, options[4], answer, explanation(why), rule, elim, trap, trapcat, level. */
const englishData = [
{
  id: "eng_hub",
  crumbs: ["SSC CGL", "English", "Start Here"],
  kicker: "SSC CGL English • Topic Mastery • Read First",
  title: "Start Here — How SSC Actually Tests English",
  meta: "Working target 22+/25 • one topic at a time • ~10 min • 4 Q orientation",
  content: `
    <p><b>You already know basic English. This section does not reteach it.</b> It trains one skill: <span class="hl">recognise what the examiner is testing, then eliminate your way to the answer.</span> One topic per session. Finish it fully before opening the next.</p>
    <h3>1. The loop for every topic</h3>
    <div class="steps"><b>LEARN → PRACTICE → ANALYSE → ELIMINATION → MASTER TEST → REVISION.</b><ol>
    <li><b>Learn:</b> read the notes below (rules + patterns + traps).</li>
    <li><b>Practice:</b> Mock Practice tab answers each question instantly with rule + elimination + trap.</li>
    <li><b>Master Test:</b> press <b>🎯 Master Test</b> — no hints until you submit, then you get a mistake analysis.</li>
    <li><b>Revision:</b> use the 2-min / 5-min / last-minute boxes at the bottom of each topic.</li></ol></div>
    <h3>2. What the 25-question section roughly looks like</h3>
    <table class="rev"><tr><th>Area</th><th>Rough share</th><th>Where to master it</th></tr>
    <tr><td>Reading Comprehension</td><td>~5 Q</td><td>Cloze + RC topic</td></tr>
    <tr><td>Cloze Test</td><td>~5 Q</td><td>Cloze + RC topic</td></tr>
    <tr><td>Error Detection / Sentence Improvement / Fillers</td><td>~6–7 Q</td><td>Grammar topics first, then Exam Skills</td></tr>
    <tr><td>Synonyms / Antonyms / Idioms / OWS / Spelling</td><td>~5–6 Q</td><td>Vocabulary topics</td></tr>
    <tr><td>Voice / Narration</td><td>~2–3 Q</td><td>Voice + Narration topics</td></tr></table>
    <p>Shares shift every year — treat this as a working map, not a promise.</p>
    <h3>3. Intelligent order (follow the sidebar top to bottom)</h3>
    <div class="steps"><ol>
    <li>Subject-Verb Agreement → Tenses → Articles → Prepositions → Pronouns (grammar foundation).</li>
    <li>Voice → Narration (mechanical, high accuracy once practised).</li>
    <li>Vocabulary in parallel, a little daily (Syn/Ant → OWS + Spelling → Idioms).</li>
    <li>Mixed Error Detection → Sentence Improvement + Fillers (needs the grammar above).</li>
    <li>Cloze + RC last (uses everything) → 25-Q Sectional in exam mode.</li></ol></div>
    <h3>4. After every test, classify each miss</h3>
    <table class="rev"><tr><th>Miss type</th><th>Meaning</th><th>Fix</th></tr>
    <tr><td>Concept gap</td><td>Never knew the rule</td><td>Re-read Core Rules</td></tr>
    <tr><td>Memory gap</td><td>Knew it, forgot in the moment</td><td>2-min revision box</td></tr>
    <tr><td>Application error</td><td>Knew it, applied to the wrong word</td><td>Elimination box steps</td></tr>
    <tr><td>Elimination error</td><td>Could have cut 2 options, didn't</td><td>Re-do the question by elimination only</td></tr>
    <tr><td>Careless</td><td>Misread / wrong click</td><td>Slow down; underline the verb</td></tr></table>
    <div class="box green">📝 <b>HOW REVISION WORKS HERE:</b> every topic ends with a <b>master card</b> = your 2-minute revision. Flagship topics (SVA, Tenses, Voice, Narration) add a full <b>ladder</b>: 2-min (card) → 5-min (card + traps) → 10-min (card + traps + patterns) → last-minute (bold lines). Re-take the Master Test after each pass.</div>
    <div class="takeaway">🎯 <b>Mastery rule:</b> a topic is done only at high accuracy + low guessing in the Master Test — never just because you read it. 🟢 Mastered / 🟡 Needs Revision / 🔴 Weak.</div>`,
  questions: [
    { q: "What is the correct way to use this English section?", options: ["Read all grammar topics in one day, then attempt a full mock", "Finish one topic fully (notes + practice + Master Test + revision) before moving on", "Only memorise vocabulary since grammar is unpredictable", "Attempt only previous-year papers with no notes"], answer: 1, explanation: "The whole engine is one-topic-at-a-time mastery; mixing five grammar topics in a day destroys pattern recognition.", rule: "Progression: Topic → Practice → Test → Revision → Mixed → Sectional.", elim: "Options A, C, D all skip the topic loop described in the notes.", trap: "Impatience trap — jumping to full mocks before topic mastery.", trapcat: "Strategy", level: "L1 Direct" },
    { q: "You score 17/25 on a mixed set with 4 SVA errors. What is the most useful conclusion?", options: ["17 is fine, move on", "The score alone says everything", "SVA is the weak pattern — fix SVA specifically, then retry", "Grammar cannot be improved"], answer: 2, explanation: "Score is not enough — the error pattern (4 SVA) names the exact next topic.", rule: "Analyse accuracy by topic/error type, not just total.", elim: "A ignores the pattern; B restates the score; D gives up.", trap: "Score-comfort trap — a decent total hiding a fixable cluster.", trapcat: "Strategy", level: "L1 Direct" },
    { q: "When should Mixed Error Detection be studied?", options: ["First, since it covers everything", "After the underlying grammar topics are learned separately", "Never — it does not appear in CGL", "Only through vocabulary"], answer: 1, explanation: "Mixed detection tests multiple rules at once, so it comes after SVA, tenses, articles, prepositions and pronouns.", rule: "Concept dependency: foundations before mixed application.", elim: "A reverses the dependency; C is factually wrong; D is irrelevant.", trap: "Order trap — attempting mixed sets with no foundation.", trapcat: "Strategy", level: "L1 Direct" },
    { q: "In the Master Test, when do you see explanations?", options: ["After every answer, as in practice", "Only after submitting the whole test", "Never", "Before attempting"], answer: 1, explanation: "Exam mode locks hints until submit — that is what makes it a real test of retrieval.", rule: "No spoiler: question → your answer → submit → analysis.", elim: "A describes Practice mode; C/D contradict the design.", trap: "Mode-confusion — treating the Master Test like practice.", trapcat: "Strategy", level: "L1 Direct" },
  ]
},
{
  id: "eng_sva",
  crumbs: ["SSC CGL", "English", "Grammar", "Subject-Verb Agreement"],
  kicker: "SSC CGL English • Grammar 1 • Highest Yield",
  title: "Subject-Verb Agreement — Find the Real Subject",
  meta: "Exam patterns first • traps + elimination • ~20 min • 10 Q (L1→L4)",
  content: `
    <p><b>What SSC actually tests here:</b> not whether you know singular/plural — <span class="hl">whether you can find the REAL subject when the examiner buries it</span> under phrases, pairs, and quantities.</p>
    <h3>Core rules (only these)</h3>
    <div class="box blue">📌 <b>R1 — The verb follows the real subject, never the nearest noun.</b> Ignore <i>along with, as well as, together with, in addition to, accompanied by, besides, except</i> + any prepositional phrase. <i>The box <b>of chocolates was</b> open (not were).</i></div>
    <div class="box blue">📌 <b>R2 — either/or, neither/nor:</b> verb agrees with the <b>nearer</b> subject. <i>Neither the players nor the captain <b>was</b> ready.</i></div>
    <div class="box blue">📌 <b>R3 — each / every / either / neither / one / everyone / somebody:</b> always <b>singular</b>. <i>Each of the boys <b>has</b> a bat.</i></div>
    <div class="box blue">📌 <b>R4 — as well as / along with / together with</b> do NOT make the subject plural (unlike <b>and</b>). <i>The minister, along with his aides, <b>has</b> arrived.</i></div>
    <div class="box blue">📌 <b>R5 — Amounts, distances, time, percentages, titles, and collective nouns acting as one unit</b> take singular verbs. <i>Ten kilometres <b>is</b> a long walk. The committee <b>has</b> decided.</i> But plural when members act individually: <i>The committee <b>were</b> divided.</i></div>
    <h3>High-frequency SSC patterns</h3>
    <table class="rev"><tr><th>Trigger</th><th>Check</th></tr>
    <tr><td>along with / as well as / together with</td><td>Singular subject stays singular</td></tr>
    <tr><td>each / every / either / neither</td><td>Singular verb, no exceptions</td></tr>
    <tr><td>either…or / neither…nor</td><td>Verb matches the NEARER subject</td></tr>
    <tr><td>One of + plural noun + who/that</td><td>Verb after who/that is PLURAL (refers to the group): <i>One of the boys who <b>are</b> here</i></td></tr>
    <tr><td>There + be</td><td>Verb matches the noun AFTER it: <i>There <b>were</b> many reasons</i></td></tr>
    <tr><td>Not only…but also</td><td>Verb matches the nearer subject (like either/or)</td></tr></table>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) long intervening phrase between subject and verb; (2) <i>as well as</i> disguised as <i>and</i>; (3) <i>one of the X who…</i> — verb must be plural; (4) <i>the number</i> (singular) vs <i>a number</i> (plural); (5) inverted <i>there</i> sentences where learners match the verb to <i>there</i>.</div>
    <div class="elim"><b class="t">✅ Elimination for SVA:</b> 1. bracket the real subject (cut commas/prepositional phrases) → 2. decide singular/plural → 3. scan the special list (each/either/neither, pairs, quantities) → 4. strike options with the wrong number. If you forget the rule: cover everything between the subject and the blank and read again.</div>
    <div class="box green">🧠 <b>If you forget the rule:</b> find who/what the sentence is about → delete extra phrases → say it aloud with <i>is/are, has/have, was/were</i> → kill options that sound wrong with the bare subject.</div>
    <div class="box green">📝 <b>TOPIC REVISION LADDER — SVA</b><br><b>2-min:</b> each/every singular • pairs match the nearer subject • as-well-as ≠ and • quantities singular • there → after-noun.<br><b>5-min:</b> above + one-of-who plural • the-number/a-number • divided collective → plural.<br><b>10-min:</b> above + trigger table + all 5 traps.<br><b>Last-minute:</b> bracket the subject; pairs → nearer; each → singular.</div>
    <div class="master-card"><b>🎯 SVA MASTER CARD</b><br><b>Core:</b> verb follows the real subject.<br><b>5 must-know:</b> intervening phrases • each/every • either-or-nearer • as-well-as ≠ and • one-of-who = plural.<br><b>Traps:</b> nearest-noun matching • as-well-as-as-and • the-number/a-number.<br><b>Elimination:</b> bracket subject → number → special list → strike.<br><b>2-min revision:</b> each/every singular; pairs → nearer; quantities singular; there → after-noun.</div>`,
  questions: [
    { q: "The box of chocolates ___ open on the table.", options: ["were", "was", "are", "have been"], answer: 1, explanation: "Real subject is box (singular); of chocolates is just a phrase between.", rule: "R1 — verb follows the real subject, ignore prepositional phrases.", elim: "Strike plural verbs first (were/are/have been) — only was matches box.", trap: "Nearest-noun trap: chocolates pulls you to were.", trapcat: "Intervening phrase", level: "L1 Direct" },
    { q: "Each of the candidates ___ a separate hall ticket.", options: ["have", "has", "are having", "have had"], answer: 1, explanation: "Each is always singular, even with of + plural noun.", rule: "R3 — each/every/either/neither + singular verb.", elim: "Kill every plural option; only has survives.", trap: "Plural-noun-after-each trap (candidates → have).", trapcat: "Each/every", level: "L1 Direct" },
    { q: "Neither the players nor the captain ___ ready for the toss.", options: ["were", "have been", "was", "are"], answer: 2, explanation: "With neither/nor the verb matches the nearer subject — captain is singular.", rule: "R2 — either/or, neither/nor → nearer subject.", elim: "Nearer subject captain is singular → strike all plurals.", trap: "First-subject trap: players pulls you to were.", trapcat: "Either/neither pairs", level: "L1 Direct" },
    { q: "The minister, along with his personal aides, ___ arrived at the venue.", options: ["have", "has", "are", "were"], answer: 1, explanation: "Along with does not pluralise the subject; minister stays singular.", rule: "R4 — along with / as well as / together with ≠ and.", elim: "Treat aides as invisible; minister → has only.", trap: "Fake-and trap: along with read as and.", trapcat: "As well as / along with", level: "L2 Application" },
    { q: "Ten kilometres ___ a long distance to walk every day.", options: ["are", "were", "is", "have"], answer: 2, explanation: "Distances/amounts/time taken as one unit → singular.", rule: "R5 — quantities as a single unit take singular verbs.", elim: "One distance = singular → only is fits.", trap: "Plural-number trap: ten pulls you to are.", trapcat: "Quantities", level: "L2 Application" },
    { q: "One of the boys who ___ present yesterday won the prize.", options: ["was", "has been", "are", "is"], answer: 2, explanation: "Who refers to boys (plural), not one — so the verb is plural.", rule: "One of + plural noun + who/that → plural verb.", elim: "Ask what who points to: boys → plural → are.", trap: "One-of trap: one pulls you to was/is.", trapcat: "One of + who", level: "L2 Application" },
    { q: "There ___ many reasons for the delay in results.", options: ["was", "has been", "were", "is"], answer: 2, explanation: "In there-sentences the verb matches the noun after it — reasons is plural.", rule: "There + be → agree with the following noun.", elim: "Look right of there: reasons → plural → were.", trap: "Matching with there itself (singular).", trapcat: "Inverted there", level: "L3 Trap" },
    { q: "The number of applicants ___ risen sharply this year.", options: ["have", "has", "are", "were"], answer: 1, explanation: "The number = a single figure → singular; a number would be plural.", rule: "The number (singular) vs a number (plural).", elim: "The + number → singular → has.", trap: "Applicants-proximity trap + the/a-number confusion.", trapcat: "The/a number", level: "L3 Trap" },
    { q: "Not only the students but also the teacher ___ responsible for the event.", options: ["are", "were", "is", "have been"], answer: 2, explanation: "Not only…but also follows the nearer-subject rule — teacher is singular.", rule: "Not only…but also → verb matches nearer subject.", elim: "Nearer subject teacher → singular → is.", trap: "First-subject trap (students → are).", trapcat: "Either/neither pairs", level: "L4 SSC-pattern" },
    { q: "The committee ___ divided on the new transfer policy.", options: ["has", "was", "were", "is"], answer: 2, explanation: "Divided = members acting individually → plural verb.", rule: "R5 — collective noun as individuals → plural.", elim: "Divided signals individuals → were.", trap: "Committee-always-singular assumption.", trapcat: "Collective nouns", level: "L4 SSC-pattern" },
    { q: "The quality of the apples ___ not good.", options: ["were", "was", "are", "have been"], answer: 1, explanation: "Real subject is quality (singular); of the apples is only a phrase.", rule: "R1 — verb follows the real subject.", elim: "Bracket quality → singular → was.", trap: "Apples-proximity trap.", trapcat: "Intervening phrase", level: "L2 Application" },
    { q: "Neither of the answers ___ correct.", options: ["were", "was", "are", "have been"], answer: 1, explanation: "Neither is always singular.", rule: "R3 — neither + singular verb.", elim: "Neither → singular → was.", trap: "Answers-proximity trap.", trapcat: "Either/neither pairs", level: "L2 Application" },
    { q: "A number of students ___ absent today.", options: ["was", "has been", "were", "is"], answer: 2, explanation: "A number means many → plural verb.", rule: "A number (plural) vs the number (singular).", elim: "A number → plural → were.", trap: "The/a-number swap trap.", trapcat: "The/a number", level: "L3 Trap" },
    { q: "The jury ___ given its verdict.", options: ["have", "has", "have been", "are"], answer: 1, explanation: "One single verdict = acting as a unit → singular.", rule: "R5 — collective noun as one unit → singular.", elim: "Its verdict (one) → has.", trap: "Jury-always-plural assumption.", trapcat: "Collective nouns", level: "L3 Trap" },
    { q: "Either the manager or the workers ___ responsible.", options: ["is", "was", "has been", "are"], answer: 3, explanation: "Nearer subject workers is plural.", rule: "R2 — pairs match the nearer subject.", elim: "Nearer workers → plural → are.", trap: "First-subject trap (manager → is).", trapcat: "Either/neither pairs", level: "L4 SSC-pattern" },
    { q: "Fifty thousand rupees ___ a big amount for a student.", options: ["are", "were", "is", "have"], answer: 2, explanation: "One amount taken as a unit → singular.", rule: "R5 — amounts as a unit → singular.", elim: "One amount → is.", trap: "Rupees-plural trap.", trapcat: "Quantities", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_tenses",
  crumbs: ["SSC CGL", "English", "Grammar", "Tenses"],
  kicker: "SSC CGL English • Grammar 2",
  title: "Tenses — Time Markers Decide Everything",
  meta: "Sequence + markers • ~15 min • 8 Q (L1→L4)",
  content: `
    <p><b>What SSC actually tests:</b> not tense names — <span class="hl">whether the verb matches the time marker and the sequence of events.</span> Underline the marker first, choose second.</p>
    <h3>Core rules</h3>
    <div class="box blue">📌 <b>R1 — Marker → tense:</b> <i>every day / always / never</i> → simple present; <i>yesterday / last week / in 2019 / ago</i> → simple past; <i>since / for + unfinished time</i> → present perfect (continuous for ongoing action); <i>by + future time</i> → future perfect.</div>
    <div class="box blue">📌 <b>R2 — Two past events:</b> earlier → past perfect, later → simple past. <i>The train <b>had left</b> before I <b>reached</b>.</i> One marker like <i>before/after</i> already shows order — still keep had + past.</div>
    <div class="box blue">📌 <b>R3 — since vs for:</b> <i>since</i> + point (2019, Monday, morning); <i>for</i> + period (3 years, two hours). Wrong pairing is a favourite error-spotting trap.</div>
    <div class="box blue">📌 <b>R4 — Stative verbs</b> (know, believe, belong, own, prefer) avoid continuous forms. <i>I <b>know</b> him (not am knowing).</i> <b>R5 — Universal truths / habits</b> stay in simple present even inside past narration.</div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) <i>since five years</i> (should be for); (2) past perfect with a single past event and no earlier action; (3) <i>ago</i> paired with present perfect (<i>ago</i> needs simple past); (4) continuous stative verbs (<i>am knowing</i>).</div>
    <div class="elim"><b class="t">✅ Elimination for tenses:</b> 1. circle time markers → 2. finished or ongoing? → 3. one event or two (sequence?) → 4. strike tenses that clash with the marker. <i>Ago/yesterday/last</i> kills all perfect-continuous options instantly.</div>
    <div class="box green">🧠 <b>If you forget the rule:</b> point in time (2019, Monday, morning) → <i>since</i>; length (3 years, two hours) → <i>for</i>. Two past actions? The MORE-past one gets <i>had</i>. See <i>ago/yesterday/last</i> → simple past, no perfect.</div>
    <div class="box green">📝 <b>TOPIC REVISION LADDER — TENSES</b><br><b>2-min:</b> since-point/for-period • before/after + had • ago → simple past • know ≠ knowing.<br><b>5-min:</b> above + by + future → will-have • timetable → present.<br><b>10-min:</b> above + sequence rule + all 4 traps.<br><b>Last-minute:</b> circle the marker; two pasts → earlier gets had.</div>
    <div class="master-card"><b>🎯 TENSES MASTER CARD</b><br><b>Core:</b> marker decides tense.<br><b>5 must-know:</b> since-point/for-period • before/after + had • ago → simple past • stative ≠ continuous • by + time → perfect.<br><b>2-min revision:</b> since/for • had + past • ago + past • know ≠ knowing.</div>`,
  questions: [
    { q: "She ___ in this school since 2019.", options: ["works", "is working", "has been working", "worked"], answer: 2, explanation: "Since + unfinished period continuing to now → present perfect continuous.", rule: "R1 — since + ongoing → present perfect continuous.", elim: "Since kills simple past; continuity kills simple present.", trap: "Simple-present trap (works) ignoring since.", trapcat: "Since/for", level: "L1 Direct" },
    { q: "The train had left before I ___ the station.", options: ["had reached", "reached", "reach", "have reached"], answer: 1, explanation: "Earlier event had left (past perfect); later event reached (simple past).", rule: "R2 — earlier past perfect, later simple past.", elim: "Only one had allowed — the earlier action already has it.", trap: "Double past-perfect trap (had reached).", trapcat: "Sequence", level: "L1 Direct" },
    { q: "He has lived here ___ five years.", options: ["since", "for", "from", "by"], answer: 1, explanation: "Five years is a period → for; since needs a point.", rule: "R3 — since + point, for + period.", elim: "Period → for; kill since/from/by.", trap: "Since-with-period trap.", trapcat: "Since/for", level: "L1 Direct" },
    { q: "I met him three days ___.", options: ["before", "ago", "since", "for"], answer: 1, explanation: "Ago completes a past-time phrase and pairs with simple past (met).", rule: "Ago + simple past.", elim: "Met is simple past → only ago fits the phrase.", trap: "Before/ago confusion.", trapcat: "Time markers", level: "L2 Application" },
    { q: "I ___ him for ten years; he is completely trustworthy.", options: ["am knowing", "know", "have been knowing", "am known"], answer: 1, explanation: "Know is stative — no continuous form.", rule: "R4 — stative verbs avoid continuous.", elim: "Strike every -ing form of know.", trap: "Continuous-everywhere trap.", trapcat: "Stative verbs", level: "L2 Application" },
    { q: "By next March, she ___ her training.", options: ["completes", "will have completed", "completed", "is completing"], answer: 1, explanation: "By + future time → future perfect.", rule: "R1 — by + future time → will have + past participle.", elim: "By next March kills present and simple past.", trap: "Simple-future trap (will complete).", trapcat: "Time markers", level: "L2 Application" },
    { q: "He ___ here yesterday, but nobody saw him.", options: ["has come", "came", "had come", "comes"], answer: 1, explanation: "Yesterday is finished past with no earlier event → simple past.", rule: "Finished marker + single event → simple past.", elim: "Yesterday kills present and perfect options.", trap: "Present-perfect-with-yesterday trap.", trapcat: "Time markers", level: "L3 Trap" },
    { q: "When I entered the hall, the programme ___ already.", options: ["begins", "had begun", "has begun", "is beginning"], answer: 1, explanation: "Programme began before I entered — earlier of two past events.", rule: "R2 — earlier → past perfect.", elim: "Entered is past; already signals earlier → had begun.", trap: "Simple-past-for-both trap.", trapcat: "Sequence", level: "L4 SSC-pattern" },
    { q: "Our train ___ at 6 in the morning. (timetable)", options: ["leaves", "will have left", "left", "has left"], answer: 0, explanation: "Fixed timetables use simple present.", rule: "Timetables → simple present.", elim: "Timetable → present → leaves.", trap: "Future-tense instinct trap.", trapcat: "Time markers", level: "L2 Application" },
    { q: "Look! The baby ___.", options: ["cries", "is crying", "has cried", "cry"], answer: 1, explanation: "Look signals action happening right now.", rule: "Now-markers → present continuous.", elim: "Look! → -ing form.", trap: "Simple-present-for-now trap.", trapcat: "Time markers", level: "L2 Application" },
    { q: "I ___ my homework before he came.", options: ["finish", "have finished", "had finished", "am finishing"], answer: 2, explanation: "Earlier of two past events → past perfect.", rule: "R2 — earlier past → had + past participle.", elim: "Before + came(past) → had finished.", trap: "Simple-past-for-both trap.", trapcat: "Sequence", level: "L3 Trap" },
    { q: "He ___ in Delhi for ten years before he moved to Jaipur.", options: ["lived", "has lived", "had lived", "lives"], answer: 2, explanation: "Finished period ending before a past move → past perfect.", rule: "R2 — earlier of two pasts → had.", elim: "Before + moved → had lived.", trap: "For + period → has-lived instinct.", trapcat: "Sequence", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_articles",
  crumbs: ["SSC CGL", "English", "Grammar", "Articles"],
  kicker: "SSC CGL English • Grammar 3",
  title: "Articles — Specific or Not?",
  meta: "a/an/the/zero • ~15 min • 8 Q (L1→L4)",
  content: `
    <p><b>What SSC actually tests:</b> one question — <span class="hl">is this noun specific (the), general singular (a/an), or a no-article case?</span> A/an follows <b>sound</b>, not spelling.</p>
    <h3>Core rules</h3>
    <div class="box blue">📌 <b>R1 — a/an:</b> first mention, one of many, profession, <i>such/what + singular</i>. Sound decides: <i>a university, a one-rupee note, an hour, an honest man, an MLA</i> (vowel sound = an).</div>
    <div class="box blue">📌 <b>R2 — the:</b> already mentioned, unique (sun, moon, earth), superlatives/ordinals (<i>the best, the first</i>), rivers/seas/mountain <b>ranges</b>/deserts, newspapers, directions with fixed use, <i>whole family/class</i> nouns (<i>the rich</i>), and <i>of</i>-phrases that specify (<i>the boy in blue</i>).</div>
    <div class="box blue">📌 <b>R3 — zero article:</b> plural/general nouns (<i>Books are useful</i>), meals, games, languages, subjects, single mountains/lakes/islands (<i>Mount Everest</i> — but <i>the Himalayas</i>), man/woman in general, <i>go to school/hospital/bed/prison</i> for the <b>primary purpose</b> (else <i>the</i>: <i>went to the hospital to meet him</i>).</div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) <i>an university / an one-way</i> (consonant <i>yoo</i> sound → a); (2) <i>a hour</i> (silent h → an); (3) <i>the Mount Everest</i>; (4) <i>the</i> before games/meals/languages; (5) <i>go to the school</i> when studying (primary purpose → zero).</div>
    <div class="elim"><b class="t">✅ Elimination for articles:</b> 1. specific or general? → 2. countable singular/plural? → 3. check the sound (a/an) → 4. check the zero-list (meals, games, languages, mountains) → strike. Superlative or <i>of</i>-phrase specifying → <i>the</i> almost always.</div>
    <div class="box green">🧠 <b>If you forget the rule:</b> only one of it in the world? → <i>the</i>. First mention, one of many? → <i>a/an</i> by SOUND (an hour, a university). Meal, game, language, lone peak, or going to school/hospital for its real purpose? → no article.</div>
    <div class="master-card"><b>🎯 ARTICLES MASTER CARD</b><br><b>Core:</b> specific → the; general singular → a/an (by sound); general plural/uncountable → zero.<br><b>5 must-know:</b> sound not spelling • superlative → the • ranges/the but peak/zero • meals/games zero • primary-purpose zero.<br><b>2-min revision:</b> an hour/honest/MLA • a university/one • the best/first • the Himalayas, Mount Everest.</div>`,
  questions: [
    { q: "He is ___ honest officer.", options: ["a", "an", "the", "no article"], answer: 1, explanation: "Honest starts with a vowel sound (silent h) → an.", rule: "R1 — a/an follows sound, not spelling.", elim: "H is silent → vowel sound → an; strike a.", trap: "Spelling trap (h → a).", trapcat: "A/an sound", level: "L1 Direct" },
    { q: "___ sun rises in the east.", options: ["A", "An", "The", "No article"], answer: 2, explanation: "Unique object → the.", rule: "R2 — unique things take the.", elim: "Only one sun → the.", trap: "General-statement trap (no article).", trapcat: "The for unique", level: "L1 Direct" },
    { q: "She plays ___ badminton every evening.", options: ["the", "a", "an", "no article"], answer: 3, explanation: "Games take zero article.", rule: "R3 — games, meals, languages → zero.", elim: "Game name → kill all articles.", trap: "The-with-games trap.", trapcat: "Zero article", level: "L1 Direct" },
    { q: "He took admission in ___ university in Delhi.", options: ["an", "a", "the", "no article"], answer: 1, explanation: "University starts with consonant yoo sound → a.", rule: "R1 — sound decides.", elim: "Yoo is consonant → a.", trap: "Vowel-letter trap (u → an).", trapcat: "A/an sound", level: "L2 Application" },
    { q: "___ Mount Everest is the highest peak in the world.", options: ["The", "A", "An", "No article"], answer: 3, explanation: "Single peaks take zero article (ranges take the).", rule: "R3 — Mount Everest, no the.", elim: "Single mountain → zero.", trap: "The-with-famous-mountain trap.", trapcat: "Zero article", level: "L2 Application" },
    { q: "He is ___ best player in the team.", options: ["a", "an", "the", "no article"], answer: 2, explanation: "Superlative → the.", rule: "R2 — superlatives take the.", elim: "Best → the automatically.", trap: "A-with-superlative trap.", trapcat: "The for unique", level: "L2 Application" },
    { q: "The injured man was taken to ___ hospital.", options: ["the", "a", "an", "no article needed"], answer: 3, explanation: "Taken as a patient = primary purpose → zero article.", rule: "R3 — hospital/school/bed for primary purpose → zero.", elim: "Patient → purpose → zero.", trap: "The-for-building trap.", trapcat: "Zero article", level: "L3 Trap" },
    { q: "___ MLA from our area raised the issue in the House.", options: ["A", "An", "The", "No article"], answer: 1, explanation: "MLA is pronounced em-el-ay — vowel sound → an.", rule: "R1 — abbreviations follow spoken sound.", elim: "Em = vowel sound → an.", trap: "Consonant-letter trap (M → a).", trapcat: "A/an sound", level: "L4 SSC-pattern" },
    { q: "___ Ganga is a sacred river.", options: ["A", "An", "The", "No article"], answer: 2, explanation: "Rivers take the.", rule: "R2 — rivers/seas/ranges → the.", elim: "River → the.", trap: "Proper-noun-no-article instinct.", trapcat: "The for unique", level: "L1 Direct" },
    { q: "What ___ beautiful flower!", options: ["a", "an", "the", "no article"], answer: 0, explanation: "What + singular countable noun → a.", rule: "R1 — what/such + singular → a/an.", elim: "What + singular → a.", trap: "Exclamation-no-article trap.", trapcat: "A/an sound", level: "L2 Application" },
    { q: "She went to ___ school to meet the principal.", options: ["no article", "the", "a", "an"], answer: 1, explanation: "Visiting, not studying — not the primary purpose → the.", rule: "R3 — primary purpose zero, visit → the.", elim: "Meet principal = visit → the.", trap: "School-always-zero trap.", trapcat: "Zero article", level: "L3 Trap" },
    { q: "___ poor need our help.", options: ["A", "An", "The", "No article"], answer: 2, explanation: "The + adjective names the whole class.", rule: "R2 — the rich/poor = whole class.", elim: "Whole class → the.", trap: "Adjective-no-article trap.", trapcat: "The for unique", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_prepositions",
  crumbs: ["SSC CGL", "English", "Grammar", "Prepositions"],
  kicker: "SSC CGL English • Grammar 4",
  title: "Prepositions — Fixed Pairs + Time/Place Logic",
  meta: "Collocations first • ~15 min • 8 Q (L1→L4)",
  content: `
    <p><b>What SSC actually tests:</b> <span class="hl">fixed verb/adjective + preposition pairs</span> (memory) and <span class="hl">time/place logic</span> (reasoning). Half the paper is 30 fixed pairs repeated yearly.</p>
    <h3>Core rules</h3>
    <div class="box blue">📌 <b>Time:</b> <i>at</i> point (at 5 pm, at noon) → <i>on</i> day/date (on Monday, on 15th August) → <i>in</i> longer (in June, in 2024, in the morning). <i>By</i> = not later than; <i>since/for</i> as in tenses; <i>between</i> two, <i>among</i> many.</div>
    <div class="box blue">📌 <b>Place/movement:</b> <i>at</i> point → <i>in</i> enclosed/large (in the room, in Delhi) → <i>on</i> surface (on the table). <i>Into</i> = motion inside; <i>onto</i> = motion on top; <i>across</i> = the other side; <i>through</i> = inside across.</div>
    <div class="box blue">📌 <b>High-frequency fixed pairs (memorise these 20):</b> <i>afraid of, angry with (person) / at (thing), apply for, approve of, arrive at (small) / in (city), believe in, boast of, capable of, consist of, depend on, die of, differ from, eager for, eligible for, fond of, full of, good at, insist on, interested in, junior to, key to, married to, prefer to, proud of, refrain from, rely on, short of, succeed in, superior to, sympathy for, vote for, wait for, worthy of.</i></div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) <i>prefer than</i> (always <i>to</i>); (2) <i>junior/senior/superior/inferior + than</i> (always <i>to</i>); (3) <i>married with</i>; (4) <i>good in English</i> (<i>at</i> for skills); (5) <i>between/among</i> swap; (6) <i>since five years</i>.</div>
    <div class="elim"><b class="t">✅ Elimination for prepositions:</b> 1. is the verb/adjective in the fixed-pair list? → use it, ignore logic. 2. else time-ladder (at→on→in) or place-ladder. 3. <i>to</i> after junior/senior/prefer/married kills <i>than/with</i> options instantly.</div>
    <div class="box green">🧠 <b>If you forget the rule:</b> prefer/junior/senior/married → <i>to</i>. Skill → <i>at</i> (good at). Feeling-word → <i>of</i> (fond of). Time riddle → climb at→on→in (hour→day→month).</div>
    <div class="master-card"><b>🎯 PREPOSITIONS MASTER CARD</b><br><b>Core:</b> fixed pair beats logic; else at→on→in ladder.<br><b>5 must-know:</b> prefer/junior/senior/married + to • good at • fond of • arrive at/in • between-2/among-many.<br><b>2-min revision:</b> to-list • of-list • in-list • time ladder.</div>`,
  questions: [
    { q: "She prefers coffee ___ tea.", options: ["than", "to", "over", "from"], answer: 1, explanation: "Prefer always pairs with to.", rule: "Fixed pair: prefer to.", elim: "See prefer → to; kill than/with.", trap: "Than-by-analogy trap (comparative habit).", trapcat: "To-pairs", level: "L1 Direct" },
    { q: "He is junior ___ me in service.", options: ["than", "to", "from", "with"], answer: 1, explanation: "Junior/senior/superior/inferior take to, never than.", rule: "Fixed pair: junior to.", elim: "Junior → to instantly.", trap: "Comparative-than trap.", trapcat: "To-pairs", level: "L1 Direct" },
    { q: "The meeting is ___ Monday morning.", options: ["in", "at", "on", "by"], answer: 2, explanation: "Days take on.", rule: "Time ladder: on + day.", elim: "Day name → on.", trap: "In-for-morning trap (morning inside a named day still takes on).", trapcat: "Time ladder", level: "L1 Direct" },
    { q: "He jumped ___ the river to save the child.", options: ["in", "into", "on", "at"], answer: 1, explanation: "Motion from outside to inside → into.", rule: "Into = motion inside.", elim: "Jumped (motion) + water → into.", trap: "In-for-motion trap.", trapcat: "Place/movement", level: "L2 Application" },
    { q: "She has been fond ___ classical music since childhood.", options: ["of", "for", "with", "about"], answer: 0, explanation: "Fond pairs with of.", rule: "Fixed pair: fond of.", elim: "Fond → of.", trap: "For-by-feeling trap.", trapcat: "Of-pairs", level: "L2 Application" },
    { q: "The prize was distributed ___ the four winners.", options: ["between", "among", "in", "within"], answer: 1, explanation: "More than two → among.", rule: "Between = two; among = many.", elim: "Four → among.", trap: "Between-for-any-division trap.", trapcat: "Between/among", level: "L2 Application" },
    { q: "He arrived ___ New Delhi late at night.", options: ["at", "in", "on", "to"], answer: 1, explanation: "Arrive in + city/country; at + small place.", rule: "Arrive at (small) / in (large).", elim: "City → in.", trap: "At-everywhere trap.", trapcat: "Fixed pairs", level: "L3 Trap" },
    { q: "You must refrain ___ smoking in public places.", options: ["to", "from", "of", "with"], answer: 1, explanation: "Refrain pairs with from.", rule: "Fixed pair: refrain from.", elim: "Refrain → from.", trap: "To-infinitive trap.", trapcat: "From-pairs", level: "L4 SSC-pattern" },
    { q: "Ravi is good ___ mathematics.", options: ["in", "at", "for", "with"], answer: 1, explanation: "Good + skill → at.", rule: "Fixed pair: good at.", elim: "Skill → at.", trap: "In-for-subject trap.", trapcat: "Fixed pairs", level: "L1 Direct" },
    { q: "He died ___ cancer last year.", options: ["from", "of", "with", "by"], answer: 1, explanation: "Die of + disease.", rule: "Fixed pair: die of.", elim: "Disease → of.", trap: "Die-from instinct trap.", trapcat: "Of-pairs", level: "L2 Application" },
    { q: "Divide the money ___ the two brothers.", options: ["among", "between", "in", "within"], answer: 1, explanation: "Two → between.", rule: "Between = two; among = many.", elim: "Two → between.", trap: "Among-everywhere trap.", trapcat: "Between/among", level: "L2 Application" },
    { q: "She insisted ___ paying the bill herself.", options: ["to", "for", "on", "about"], answer: 2, explanation: "Insist pairs with on.", rule: "Fixed pair: insist on.", elim: "Insist → on.", trap: "To-infinitive trap.", trapcat: "Fixed pairs", level: "L3 Trap" },
  ]
},
{
  id: "eng_pronouns",
  crumbs: ["SSC CGL", "English", "Grammar", "Pronouns"],
  kicker: "SSC CGL English • Grammar 5",
  title: "Pronouns + Adjectives/Adverbs Essentials",
  meta: "Case + reflexives + modifiers • ~15 min • 6 Q",
  content: `
    <p><b>What SSC actually tests:</b> pronoun <b>case</b> (who/whom, I/me), <b>reflexives</b>, and <b>adjective-vs-adverb</b> confusion — small words, big traps.</p>
    <h3>Core rules</h3>
    <div class="box blue">📌 <b>P1 — Case:</b> subject position → I/he/she/they/who; object → me/him/her/them/whom. Test: <i>between you and <b>me</b></i> (never I). <i>It was <b>he</b> who called</i> (formal) — SSC usually accepts <i>him</i> only in object slots.</div>
    <div class="box blue">📌 <b>P2 — Reflexives:</b> myself/yourself/himself only when the subject acts on itself. <i>He hurt <b>himself</b></i> but <i>keep <b>this book with you</b></i> (no self-word without self-action). Verbs like <i>enjoy/acquit/avail</i> need one: <i>They enjoyed <b>themselves</b>.</i></div>
    <div class="box blue">📌 <b>P3 — who/whose/which/that:</b> people → who/whose; things → which/that; <i>whose</i> for possession by people. <i>One of those who…</i> → plural verb (see SVA).</div>
    <div class="box blue">📌 <b>A1 — Adjective vs adverb:</b> adjectives modify nouns (<i>a <b>quick</b> run</i>); adverbs modify verbs/adjectives (<i>run <b>quickly</b>; <b>very</b> quick</i>). After <i>seem/look/feel/become/taste</i> use adjectives: <i>She looks <b>beautiful</b></i> (not beautifully).</div>
    <div class="box blue">📌 <b>A2 — Order/degree:</b> <i>elder/eldest</i> for family seniority, <i>older/oldest</i> for age/things; <i>later/latter</i> (time vs second-mentioned); <i>less</i> uncountable, <i>fewer</i> countable.</div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) <i>between you and I</i>; (2) reflexive without self-action (<i>myself</i> as subject); (3) <i>she sings beautiful</i>; (4) <i>less students</i>; (5) <i>elder brother than me</i> (elder takes no than).</div>
    <div class="elim"><b class="t">✅ Elimination:</b> preposition + pronoun → object case (kill I/he/she). Linking verb (look/seem) + modifier → adjective (kill -ly). Countable plural noun → fewer (kill less).</div>
    <div class="master-card"><b>🎯 MASTER CARD</b> — preposition → me/him/them • self-word needs self-action • look/seem + adjective • fewer-countable/less-uncountable • elder-family/older-age.</div>`,
  questions: [
    { q: "Between you and ___, the secret is safe.", options: ["I", "me", "myself", "mine"], answer: 1, explanation: "Between is a preposition → object case me.", rule: "P1 — preposition + object pronoun.", elim: "After between kill I/myself.", trap: "Over-formal I trap.", trapcat: "Case", level: "L1 Direct" },
    { q: "She sings ___.", options: ["beautiful", "beautifully", "beauty", "beautify"], answer: 1, explanation: "Sings is an action verb → adverb beautifully.", rule: "A1 — adverb modifies verbs.", elim: "Verb + modifier → -ly form.", trap: "Adjective-for-verb trap.", trapcat: "Adj/adv", level: "L1 Direct" },
    { q: "There are ___ students in this batch than the last one.", options: ["less", "lesser", "fewer", "little"], answer: 2, explanation: "Students countable → fewer.", rule: "A2 — fewer for countable, less for uncountable.", elim: "Countable noun → fewer.", trap: "Less-everywhere trap.", trapcat: "Less/fewer", level: "L2 Application" },
    { q: "They enjoyed ___ during the trip.", options: ["them", "themselves", "their", "they"], answer: 1, explanation: "Enjoy needs a reflexive when no object follows.", rule: "P2 — enjoy/avail/acquit + reflexive.", elim: "Enjoy + blank → reflexive.", trap: "Bare-object trap (enjoy them).", trapcat: "Reflexives", level: "L2 Application" },
    { q: "She looks ___ in that uniform.", options: ["smartly", "smart", "smarterly", "smartness"], answer: 1, explanation: "Looks is a linking verb → adjective smart.", rule: "A1 — linking verbs take adjectives.", elim: "Look/seem/feel → kill -ly.", trap: "-ly-after-look trap.", trapcat: "Adj/adv", level: "L3 Trap" },
    { q: "Myself will ensure the work is done on time.", options: ["Myself will ensure", "I will myself ensure", "I will ensure", "Myself is ensuring"], answer: 2, explanation: "Myself cannot be a subject; plain I will ensure.", rule: "P2 — reflexive needs a subject acting on itself.", elim: "Sentence-subject is myself → wrong in every such option.", trap: "Fancy-myself-as-subject trap.", trapcat: "Reflexives", level: "L4 SSC-pattern" },
    { q: "It was ___ who called you yesterday. (formal)", options: ["him", "he", "his", "himself"], answer: 1, explanation: "Complement of be in the subject slot → he (formal).", rule: "P1 — subject slot → subject case.", elim: "After was → he.", trap: "Him-by-position trap.", trapcat: "Case", level: "L3 Trap" },
    { q: "My ___ brother lives in Delhi.", options: ["older", "elder", "oldest", "eldest"], answer: 1, explanation: "Family seniority → elder.", rule: "A2 — elder = family, older = age.", elim: "Family → elder.", trap: "Older-everywhere trap.", trapcat: "Elder/older", level: "L2 Application" },
  ]
},
{
  id: "eng_modifiers",
  crumbs: ["SSC CGL", "English", "Grammar", "Advanced Grammar"],
  kicker: "SSC CGL English • Grammar 6",
  title: "Advanced Grammar — Degree, Pairs, Modals, Conditionals, Tags",
  meta: "Second-order grammar • ~20 min • 8 Q (L1→L4)",
  content: `
    <p><b>What SSC actually tests:</b> the grammar <i>around</i> the basics — <span class="hl">comparisons, conjunction pairs, modal shades, if-clauses, and question tags.</span> Each has one fixed pattern; learn the pattern, not the theory.</p>
    <h3>Core rules</h3>
    <div class="box blue">📌 <b>D1 — Degree:</b> two things → comparative (<i>taller <b>of</b> the two</i>); three+ → superlative. <i>Elder/eldest</i> = family seniority; <i>older/oldest</i> = age/things. <i>Less</i> uncountable, <i>fewer</i> countable. Never <i>more better / most brightest</i>.</div>
    <div class="box blue">📌 <b>D2 — Conjunction pairs (fixed):</b> <i>no sooner…<b>than</b></i> (had/did) • <i>hardly/scarcely…<b>when</b></i> • <i>not only…<b>but also</b></i> (parallel forms) • <i>though/although…<b>,</b></i> (no but) • <i><b>unless</b> = if…not</i> (never add not after unless) • <i><b>until</b></i> = time (never add not).</div>
    <div class="box blue">📌 <b>D3 — Modals:</b> <i>must</i> obligation • <i>should</i> advice • <i>can/could</i> ability • <i>may/might</i> possibility • past of must = <i>had to</i> • <i>dare/need</i> act as modals in negatives (<i>He dare not go</i>).</div>
    <div class="box blue">📌 <b>D4 — Conditionals:</b> Type 1 real (<i>If it rains, we <b>will stay</b></i>) • Type 2 unreal present (<i>If I <b>were</b> rich…<b>would</b></i> — always <i>were</i>, never was) • Type 3 unreal past (<i>If he <b>had worked</b>…<b>would have passed</b></i>).</div>
    <div class="box blue">📌 <b>D5 — Question tags:</b> opposite polarity + same auxiliary + pronoun: <i>You are coming, <b>aren't you</b>?</i> • <i>He left, <b>didn't he</b>?</i> • <i>Let's go, <b>shall we</b>?</i> • Imperative → <i><b>will you</b>?</i></div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) <i>no sooner…when</i>; (2) <i>unless + not</i> double negative; (3) <i>If I was you</i> (needs were); (4) <i>more + -er</i> doubles; (5) tag with wrong auxiliary (<i>He has gone, hasn't he</i> — right — vs <i>didn't he</i> — wrong).</div>
    <div class="elim"><b class="t">✅ Elimination:</b> spot the pair word first (no sooner/hardly/unless/if) → the partner is forced (than/when/no-not/would). Tags: copy the auxiliary from the statement, flip +/−, add pronoun.</div>
    <div class="box green">🧠 <b>If you forget the rule:</b> no sooner → than • hardly → when • unless already means not (never add not) • imaginary if → were + would.</div>
    <div class="master-card"><b>🎯 MODIFIERS MASTER CARD</b><br><b>Core:</b> pairs are forced; imaginary-if uses were.<br><b>5 must-know:</b> no-sooner-than • hardly-when • unless≠not • if-were-would • tags flip polarity.<br><b>2-min revision:</b> than/when • no-not-after-unless • were-subjunctive • tag = aux-flip-pronoun.</div>`,
  questions: [
    { q: "He is the ___ of the two brothers.", options: ["tallest", "taller", "tall", "most tall"], answer: 1, explanation: "Two things → comparative.", rule: "D1 — two → comparative.", elim: "Two → taller; kill superlatives.", trap: "The + superlative instinct.", trapcat: "Degree", level: "L1 Direct" },
    { q: "You ___ obey the traffic rules.", options: ["must", "might", "could", "would"], answer: 0, explanation: "Obligation → must.", rule: "D3 — must = obligation.", elim: "Rule-book duty → must.", trap: "Should-softening trap.", trapcat: "Modals", level: "L1 Direct" },
    { q: "You are coming with us, ___?", options: ["aren't you", "are you", "don't you", "isn't it"], answer: 0, explanation: "Positive statement → negative tag with same auxiliary.", rule: "D5 — flip polarity, copy aux.", elim: "Are + positive → aren't you.", trap: "Same-polarity trap.", trapcat: "Question tags", level: "L1 Direct" },
    { q: "No sooner ___ he arrived than the bell rang.", options: ["did", "had", "has", "have"], answer: 1, explanation: "No sooner + past perfect + than.", rule: "D2 — no sooner…than.", elim: "No sooner → than-partner; past → had.", trap: "No-sooner-when trap.", trapcat: "Pairs", level: "L2 Application" },
    { q: "If he had worked hard, he ___ passed.", options: ["would pass", "will pass", "would have", "would have passed"], answer: 3, explanation: "Type 3: had + past participle → would have + past participle.", rule: "D4 — unreal past.", elim: "Had worked → would have passed.", trap: "Half-conditional trap (would have, no verb).", trapcat: "Conditionals", level: "L2 Application" },
    { q: "She works very ___.", options: ["hard", "hardly", "harderly", "hardness"], answer: 0, explanation: "Hard = with effort; hardly = barely.", rule: "D-adverbs: hard vs hardly.", elim: "Effort-meaning → hard.", trap: "Hardly = hard trap.", trapcat: "Adverbs", level: "L2 Application" },
    { q: "Hardly had I reached the station ___ it started raining.", options: ["than", "then", "when", "that"], answer: 2, explanation: "Hardly/scarcely pair with when.", rule: "D2 — hardly…when.", elim: "Hardly → when.", trap: "Than-by-analogy trap.", trapcat: "Pairs", level: "L3 Trap" },
    { q: "He talks as if he ___ the owner of the company.", options: ["is", "was", "were", "has been"], answer: 2, explanation: "Imaginary as-if → subjunctive were.", rule: "D4 — unreal → were.", elim: "As-if imaginary → were.", trap: "Was-agreement trap.", trapcat: "Conditionals", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_voice",
  crumbs: ["SSC CGL", "English", "Voice"],
  kicker: "SSC CGL English • Voice • Mechanical Marks",
  title: "Active → Passive Voice — Swap + be + V3",
  meta: "All tense patterns • ~20 min • 8 Q (L1→L4)",
  content: `
    <p><b>What SSC actually tests:</b> a <span class="hl">mechanical swap</span> — object becomes subject, verb becomes <i>be + V3</i>, subject becomes <i>by + agent</i>. Tense never changes. Modals keep their modal.</p>
    <h3>Core patterns (tense stays identical)</h3>
    <table class="rev"><tr><th>Active</th><th>Passive</th></tr>
    <tr><td>writes / write</td><td>is / are written</td></tr>
    <tr><td>wrote</td><td>was / were written</td></tr>
    <tr><td>is writing</td><td>is being written</td></tr>
    <tr><td>has written</td><td>has been written</td></tr>
    <tr><td>will write</td><td>will be written</td></tr>
    <tr><td>can / must / should write</td><td>can / must / should <b>be</b> written</td></tr>
    <tr><td>to write (inf.)</td><td>to <b>be</b> written</td></tr></table>
    <div class="box blue">📌 <b>Imperatives:</b> <i>Close the door → Let the door <b>be closed</b></i> (or <i>You are ordered to close…</i>). <b>Questions:</b> <i>Who wrote it? → By whom <b>was</b> it written?</i> <b>No-agent passives</b> drop <i>by</i>: <i>The thief was arrested.</i></div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) tense shift (wrote → <i>is</i> written); (2) missing <i>being/been/be</i> (<i>is written</i> for continuous → needs <i>being</i>); (3) wrong V3 (<i>wrote</i> instead of <i>written</i>); (4) keeping both subject and agent (<i>He was written by him the letter</i>); (5) <i>who → by who</i> (needs <i>whom</i>).</div>
    <div class="elim"><b class="t">✅ Elimination for voice:</b> 1. find the tense in the active sentence → 2. strike every option with a different tense → 3. check <i>being/been/be</i> per the table → 4. check V3 → 5. check by + agent. Tense-match alone kills 2 options most times.</div>
    <div class="box green">🧠 <b>If you forget the rule:</b> keep the SAME tense as the active sentence, then add be-form + V3 — continuous → <i>being</i>, perfect → <i>been</i>, modal/future → <i>be</i>. Tense-match alone kills two options.</div>
    <div class="box green">📝 <b>TOPIC REVISION LADDER — VOICE</b><br><b>2-min:</b> tense never changes • continuous → being • perfect → been • modal/future → be.<br><b>5-min:</b> above + imperatives → Let…be • who → by whom • V3 check.<br><b>10-min:</b> above + full tense table + all 5 traps.<br><b>Last-minute:</b> match the tense, find being/been/be.</div>
    <div class="master-card"><b>🎯 VOICE MASTER CARD</b> — tense never changes • continuous → being • perfect → been • modal/future/infinitive → be • imperatives → Let…be • who → by whom.</div>`,
  questions: [
    { q: "Active: She writes a letter. Passive:", options: ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has been written by her."], answer: 0, explanation: "Simple present → is + V3; tense unchanged.", rule: "writes → is written.", elim: "Present → kill was/being/been options.", trap: "Tense-shift trap.", trapcat: "Tense match", level: "L1 Direct" },
    { q: "Active: They are building a bridge. Passive:", options: ["A bridge is built by them.", "A bridge is being built by them.", "A bridge was built by them.", "A bridge has been built by them."], answer: 1, explanation: "Present continuous → is being + V3.", rule: "Continuous → being.", elim: "Continuous needs being — only one option has it.", trap: "Missing-being trap.", trapcat: "Being/been", level: "L1 Direct" },
    { q: "Active: He has finished the work. Passive:", options: ["The work is finished by him.", "The work was finished by him.", "The work has been finished by him.", "The work is being finished by him."], answer: 2, explanation: "Present perfect → has been + V3.", rule: "Perfect → been.", elim: "Perfect needs been.", trap: "Simple-past substitution trap.", trapcat: "Being/been", level: "L1 Direct" },
    { q: "Active: She can solve the problem. Passive:", options: ["The problem can be solved by her.", "The problem is solved by her.", "The problem could be solved by her.", "The problem has been solved by her."], answer: 0, explanation: "Modal stays; add be + V3.", rule: "Modal → modal + be + V3.", elim: "Modal can must survive → kill is/could/has.", trap: "Modal-change trap (could).", trapcat: "Modals", level: "L2 Application" },
    { q: "Active: Who broke the window? Passive:", options: ["By who was the window broken?", "By whom was the window broken?", "Who was the window broken?", "The window was broken by who?"], answer: 1, explanation: "Who → by whom; past → was + V3.", rule: "Who-questions → by whom.", elim: "Kill by-who options first, then tense-check.", trap: "By-who trap.", trapcat: "Questions", level: "L2 Application" },
    { q: "Active: Close the door. Passive:", options: ["Let the door be closed.", "The door is closed.", "Let the door closed.", "You close the door."], answer: 0, explanation: "Imperative → Let + object + be + V3.", rule: "Imperatives → Let…be + V3.", elim: "Imperative passive needs Let + be — only A has both.", trap: "Missing-be trap (Let the door closed).", trapcat: "Imperatives", level: "L2 Application" },
    { q: "Active: The committee will announce the results. Passive:", options: ["The results will announced.", "The results will be announced by the committee.", "The results are announced by the committee.", "The results have been announced by the committee."], answer: 1, explanation: "Future → will be + V3.", rule: "Future → will be + V3.", elim: "Future needs will be.", trap: "Missing-be trap (will announced).", trapcat: "Being/been", level: "L3 Trap" },
    { q: "Choose the correct passive: They made him captain.", options: ["He was made captain by them.", "He was made captain.", "He is made captain by them.", "Captain was made him."], answer: 0, explanation: "Past → was + V3 with agent retained; object him → he.", rule: "made → was made; pronoun swaps case.", elim: "Past kills is; word-order kills D.", trap: "Case-swap trap (him kept as subject).", trapcat: "Tense match", level: "L4 SSC-pattern" },
    { q: "Active: He wrote a novel. Passive:", options: ["A novel is written by him.", "A novel was written by him.", "A novel has been written by him.", "A novel is being written by him."], answer: 1, explanation: "Simple past → was + V3.", rule: "wrote → was written.", elim: "Past → kill is/has/being.", trap: "Tense-shift trap.", trapcat: "Tense match", level: "L1 Direct" },
    { q: "Active: People speak English all over the world. Passive:", options: ["English is spoken all over the world.", "English was spoken all over the world.", "English is being spoken all over the world.", "English has been spoken all over the world."], answer: 0, explanation: "Simple present → is + V3; agent drops naturally.", rule: "speak → is spoken.", elim: "Present → is.", trap: "Tense-shift trap.", trapcat: "Tense match", level: "L2 Application" },
    { q: "Active: The teacher gave him a prize. Passive:", options: ["He was given a prize by the teacher.", "He is given a prize by the teacher.", "A prize was gave to him.", "He had been given a prize by the teacher."], answer: 0, explanation: "Indirect object becomes subject; past → was + given.", rule: "Double-object passive.", elim: "Past → was; gave → given kills C.", trap: "V2-as-V3 trap (gave).", trapcat: "Tense match", level: "L3 Trap" },
    { q: "Active: They will have completed the work. Passive:", options: ["The work will have completed.", "The work will have been completed.", "The work will be completed.", "The work has been completed."], answer: 1, explanation: "Future perfect → will have been + V3.", rule: "Future perfect passive.", elim: "Needs have been — only B.", trap: "Missing-been trap.", trapcat: "Being/been", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_narration",
  crumbs: ["SSC CGL", "English", "Narration"],
  kicker: "SSC CGL English • Narration • Mechanical Marks",
  title: "Direct → Indirect Speech — Backshift + Point of View",
  meta: "Statements/questions/commands • ~20 min • 8 Q (L1→L4)",
  content: `
    <p><b>What SSC actually tests:</b> three mechanical moves — <span class="hl">backshift the tense, shift pronouns/pointers, pick the right connector</span> (that / if-whether / to / wh-word).</p>
    <h3>Core rules</h3>
    <div class="box blue">📌 <b>R1 — Backshift (past reporting verb):</b> present → past (<i>is → was</i>), past → past perfect (<i>went → had gone</i>), will → would, can → could, may → might. NO backshift if reporting verb is present (<i>He says…</i>) or the speech is a universal truth.</div>
    <div class="box blue">📌 <b>R2 — Connectors:</b> statement → <i>that</i>; yes/no question → <i>if/whether</i>; wh-question → the wh-word itself (no that, no inversion); command/request → <i>to</i>-infinitive (<i>ordered him <b>to</b> leave</i>); <i>let us</i> suggestion → <i>proposed/suggested … should</i>.</div>
    <div class="box blue">📌 <b>R3 — Pointers:</b> <i>this → that, these → those, here → there, now → then, today → that day, yesterday → the previous day, tomorrow → the next day, ago → before.</i> Pronouns shift to the reporter's viewpoint: <i>I → he/she, you → I/they</i> per context.</div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) backshifting after <i>says</i>; (2) keeping question inversion (<i>asked where was he</i>); (3) <i>that</i> after a wh-word; (4) forgetting will→would; (5) leaving <i>tomorrow/yesterday</i> unchanged.</div>
    <div class="elim"><b class="t">✅ Elimination for narration:</b> 1. reporting verb past? → backshift must exist (kill unchanged tenses) → 2. sentence type → connector check (kill <i>that</i> with wh-questions, kill inversion) → 3. pointer check (kill <i>tomorrow/yesterday</i>). Connector alone usually kills 2 options.</div>
    <div class="box green">🧠 <b>If you forget the rule:</b> <i>said</i> + past → push every verb one step back (is→was, will→would). Question? Drop the inversion, join with <i>if</i> or the wh-word. <i>Tomorrow/yesterday</i> must change.</div>
    <div class="box green">📝 <b>TOPIC REVISION LADDER — NARRATION</b><br><b>2-min:</b> said+past → backshift • says → no shift • that / if-wh / to connectors.<br><b>5-min:</b> above + no inversion • pointers (tomorrow → next day).<br><b>10-min:</b> above + commands/proposals + all 5 traps.<br><b>Last-minute:</b> connector first, then tense.</div>
    <div class="master-card"><b>🎯 NARRATION MASTER CARD</b> — said + past → backshift • says → no shift • that / if-whether / wh-word / to • no inversion in reported questions • tomorrow → next day.</div>`,
  questions: [
    { q: "Direct: He said, I am busy today. Indirect:", options: ["He said that he is busy today.", "He said that he was busy that day.", "He says that he was busy that day.", "He said that I was busy today."], answer: 1, explanation: "Said + present → backshift (am→was); today → that day; I → he.", rule: "R1 + R3 — backshift with pointer shift.", elim: "Kill no-shift (A), says (C), unshifted I/today (D).", trap: "No-shift trap.", trapcat: "Backshift", level: "L1 Direct" },
    { q: "Direct: She said, I will call you tomorrow. Indirect:", options: ["She said that she will call me tomorrow.", "She said that she would call me the next day.", "She says that she would call me the next day.", "She said me that she would call."], answer: 1, explanation: "Will→would, tomorrow→next day, said stays.", rule: "R1 + R3.", elim: "Must have would + next day — only B.", trap: "Unshifted-will trap.", trapcat: "Backshift", level: "L1 Direct" },
    { q: "Direct: He asked, Are you coming? Indirect:", options: ["He asked that I was coming.", "He asked if I was coming.", "He asked are you coming.", "He asked that was I coming."], answer: 1, explanation: "Yes/no question → if/whether, statement order, backshift.", rule: "R2 — yes/no → if/whether + no inversion.", elim: "Question → kill that (A); kill inversion (C/D).", trap: "That-with-question trap.", trapcat: "Connectors", level: "L1 Direct" },
    { q: "Direct: She asked, Where do you live? Indirect:", options: ["She asked where did I live.", "She asked that where I lived.", "She asked where I lived.", "She asked where do I live."], answer: 2, explanation: "Wh-word repeats as connector, then statement order with backshift.", rule: "R2 — wh-word, no that, no inversion.", elim: "Kill inversion (A/D) and that (B).", trap: "Inversion-retention trap.", trapcat: "Connectors", level: "L2 Application" },
    { q: "Direct: The teacher ordered, Leave the room. Indirect:", options: ["The teacher ordered to leave the room.", "The teacher ordered him to leave the room.", "The teacher ordered that he leaves.", "The teacher said to leave."], answer: 1, explanation: "Command → ordered + object + to-infinitive.", rule: "R2 — commands → to.", elim: "Command needs object + to — only B complete.", trap: "Missing-object trap (A).", trapcat: "Commands", level: "L2 Application" },
    { q: "Direct: He says, I am tired. Indirect:", options: ["He says that he was tired.", "He says that he is tired.", "He said that he is tired.", "He says that I am tired."], answer: 1, explanation: "Present reporting verb → no backshift.", rule: "R1 — says → no shift.", elim: "Says → tense must stay.", trap: "Auto-backshift trap.", trapcat: "Backshift", level: "L2 Application" },
    { q: "Direct: He said, I met her yesterday. Indirect:", options: ["He said that he had met her the previous day.", "He said that he met her yesterday.", "He said that he has met her yesterday.", "He says that he had met her."], answer: 0, explanation: "Past → past perfect; yesterday → previous day.", rule: "R1 + R3.", elim: "Met (past) must become had met; yesterday must shift.", trap: "Half-shift trap (tense or pointer only).", trapcat: "Backshift", level: "L3 Trap" },
    { q: "Direct: He said, Let us play. Indirect:", options: ["He said to let them play.", "He proposed that they should play.", "He ordered to play.", "He asked if they play."], answer: 1, explanation: "Let us suggestion → proposed/suggested + should.", rule: "R2 — suggestions → proposed … should.", elim: "Suggestion → proposed/should pattern.", trap: "Literal-let trap.", trapcat: "Commands", level: "L4 SSC-pattern" },
    { q: "Direct: He said, I live here. Indirect:", options: ["He said that he lives here.", "He said that he lived there.", "He says that he lived there.", "He said that I lived here."], answer: 1, explanation: "Said + present → lived; here → there; I → he. All three shift.", rule: "R1 + R3 — full shift.", elim: "Kill any option with an unshifted word.", trap: "Half-shift trap.", trapcat: "Backshift", level: "L2 Application" },
    { q: "Direct: She said to me, Please help me. Indirect:", options: ["She requested me to help her.", "She ordered to help me.", "She asked that I help.", "She said to help."], answer: 0, explanation: "Please-request → requested + object + to-infinitive; me → her.", rule: "R2 — requests → requested … to.", elim: "Request needs requested + me + to.", trap: "Missing-object trap.", trapcat: "Commands", level: "L2 Application" },
    { q: "Direct: He asked, Did you sleep well? Indirect:", options: ["He asked if I slept well.", "He asked if I had slept well.", "He asked that did I sleep.", "He asked did I sleep well."], answer: 1, explanation: "Past question → past perfect; if + statement order.", rule: "R2 + backshift.", elim: "Did(past) → had slept; kill inversion.", trap: "Simple-past-retention trap.", trapcat: "Connectors", level: "L3 Trap" },
    { q: "Direct: The teacher said, The earth revolves round the sun. Indirect:", options: ["The teacher said that the earth revolved round the sun.", "The teacher said that the earth revolves round the sun.", "The teacher said that the earth had revolved round the sun.", "The teacher said that the earth would revolve round the sun."], answer: 1, explanation: "Universal truth → no backshift.", rule: "R1 exception — truth stays.", elim: "Truth → tense stays → B.", trap: "Auto-backshift trap.", trapcat: "Backshift", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_vocab",
  crumbs: ["SSC CGL", "English", "Vocabulary", "Synonyms-Antonyms"],
  kicker: "SSC CGL English • Vocabulary 1",
  title: "Synonyms, Antonyms + Commonly Confused Words",
  meta: "Elimination-first vocab • ~15 min • 6 Q",
  content: `
    <p><b>What SSC actually tests:</b> whether you can <span class="hl">extract the charge (positive/negative) and intensity</span> of a word from context — even for words you half-know.</p>
    <h3>Core method (use before memorising)</h3>
    <div class="elim"><b class="t">✅ Elimination for vocab:</b> 1. positive or negative? (kill opposite charge) → 2. part of speech fit? → 3. intensity match (annoyed ≠ furious)? → 4. context fit. Charge alone kills 2 options in most SSC synonym sets.</div>
    <div class="box blue">📌 <b>Confused pairs SSC loves:</b> <i>adapt/adopt/adept • affect/effect • altar/alter • assure/ensure/insure • bare/bear • beside/besides • canvas/canvass • cite/site/sight • compliment/complement • council/counsel • dairy/diary • elicit/illicit • eminent/imminent • fair/fare • hoard/horde • loose/lose • principal/principle • stationary/stationery • story/storey • discreet/discrete • dual/duel • emigrate/immigrate • historic/historical.</i></div>
    <div class="box blue">📌 <b>High-frequency synonym/antonym roots:</b> <i>bene- (good), mal- (bad), phil- (love), mis- (wrong), pre- (before), sub- (under), trans- (across), -cide (kill), -vorous (eat), -phobia (fear).</i> Roots rescue unknown words: <i>malevolent = mal (bad) + volent (wish) → ill-wishing.</i></div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) near-synonym with wrong intensity; (2) same-charge wrong-context word; (3) affect/effect, principal/principle swaps; (4) old-form antonyms (<i>un- / dis- / in-</i> options where the real antonym is a different word).</div>
    <div class="master-card"><b>🎯 VOCAB MASTER CARD</b> — charge first • POS second • intensity third • roots rescue unknowns • confused-pair list above is the real syllabus.</div>`,
  questions: [
    { q: "Synonym of TRANSPARENT (in the SSC sense of obvious):", options: ["Opaque", "Clear", "Murky", "Hidden"], answer: 1, explanation: "Transparent = easy to see through → clear.", rule: "Charge match: positive clarity.", elim: "Opaque/murky/hidden share the opposite charge — kill all three.", trap: "Opposite-as-option trap.", trapcat: "Synonyms", level: "L1 Direct" },
    { q: "Antonym of ARRIVE:", options: ["Come", "Reach", "Depart", "Enter"], answer: 2, explanation: "Arrive ≠ depart.", rule: "Direction reversal.", elim: "Come/reach/enter all mean approach — only depart reverses.", trap: "Same-direction trap.", trapcat: "Antonyms", level: "L1 Direct" },
    { q: "The new policy will ___ the lives of farmers. (affect/effect)", options: ["effect", "affect", "effects", "affectedly"], answer: 1, explanation: "Verb needed (will ___) → affect; effect is the noun.", rule: "Affect = verb, effect = noun.", elim: "After will + base verb → only affect fits.", trap: "Classic affect/effect swap.", trapcat: "Confused words", level: "L2 Application" },
    { q: "He is the ___ of the college. (principal/principle)", options: ["principle", "principals", "principal", "principles"], answer: 2, explanation: "Head of institution → principal (pal = person).", rule: "Principal = head/person; principle = rule.", elim: "Person → principal.", trap: "-le/-al ending trap.", trapcat: "Confused words", level: "L2 Application" },
    { q: "Synonym of FURIOUS:", options: ["Calm", "Angry", "Happy", "Quiet"], answer: 1, explanation: "Furious = intensely angry.", rule: "Intensity match within same charge.", elim: "Negative charge → kill calm/happy/quiet.", trap: "Charge-ignorance trap.", trapcat: "Synonyms", level: "L3 Trap" },
    { q: "The soldiers stood ___ the statue. (beside/besides)", options: ["besides", "beside", "among", "between"], answer: 1, explanation: "Beside = next to; besides = in addition to.", rule: "Beside (place) vs besides (addition).", elim: "Physical position → beside.", trap: "S-form confusion trap.", trapcat: "Confused words", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_ows",
  crumbs: ["SSC CGL", "English", "Vocabulary", "OWS-Spelling"],
  kicker: "SSC CGL English • Vocabulary 2",
  title: "One-Word Substitution + Spelling Patterns",
  meta: "Definition-first • ~15 min • 6 Q",
  content: `
    <p><b>What SSC actually tests:</b> OWS = <span class="hl">match the definition's key hook</span>; spelling = <span class="hl">5 recurring letter traps</span> (ie/ei, double consonants, -ance/-ence, silent letters, -able/-ible).</p>
    <h3>Core method</h3>
    <div class="box blue">📌 <b>OWS hooks:</b> <i>one who…</i> (person: <i>orphan, vegetarian, bibliophile</i>), <i>fear of…</i> (<i>-phobia</i>), <i>killing of…</i> (<i>-cide</i>), <i>government by…</i> (<i>-cracy/-archy</i>), <i>lover of…</i> (<i>-phile</i>), <i>all…</i> (<i>omni-</i>: <i>omnipotent, omniscient</i>), <i>cannot…</i> (<i>in-/il-/im-/ir-</i>: <i>illegible, incorrigible</i>).</div>
    <div class="box blue">📌 <b>Spelling traps SSC repeats:</b> <i>receive/believe/relief</i> (i before e except after c); <i>accommodate, embarrass, occurrence, recommend</i> (double letters); <i>maintenance, occurrence, calendar</i> (no such word as <i>maintainance/occurrance/calender</i> for these senses); <i>conscience, condemn, debt</i> (silent letters); <i>accessible, collapsible</i> (-ible) vs <i>readable, manageable</i> (-able).</div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) two near-definitions differing by one hook word; (2) <i>-phobia/-mania</i> swap; (3) <i>separate</i> spelled <i>seperate</i>; (4) <i>occasion</i> (one c) vs <i>occurrence</i> (two c's).</div>
    <div class="elim"><b class="t">✅ Elimination:</b> OWS → find the hook noun (fear? killing? lover?) → match the suffix → kill the rest. Spelling → pronounce slowly, check ie/ei and doubles first.</div>
    <div class="master-card"><b>🎯 MASTER CARD</b> — hooks: -phobia fear • -cide killing • -phile lover • omni- all • in-/il- cannot • ie except after c • doubles: accommodate/embarrass/occurrence.</div>`,
  questions: [
    { q: "One who can use both hands equally well:", options: ["Versatile", "Ambidextrous", "Ambivalent", "Skilful"], answer: 1, explanation: "Ambi- (both) + dextrous (handed).", rule: "Hook: both-hands → ambi-.", elim: "Both → ambi- prefix; only ambidextrous has it.", trap: "Ambivalent (mixed feelings) lookalike trap.", trapcat: "OWS", level: "L1 Direct" },
    { q: "Fear of closed spaces:", options: ["Agoraphobia", "Claustrophobia", "Hydrophobia", "Acrophobia"], answer: 1, explanation: "Claustro- (closed) + phobia.", rule: "Hook: closed → claustro-.", elim: "Closed → claustro; kill open/water/height roots.", trap: "Agoraphobia (open spaces) mirror trap.", trapcat: "OWS", level: "L1 Direct" },
    { q: "Correctly spelt word:", options: ["Occurrance", "Occurrence", "Ocurrence", "Occurence"], answer: 1, explanation: "Double c + double r: oc-cur-rence.", rule: "Double-letter trap word.", elim: "Only B has cc + rr.", trap: "Single-double confusion.", trapcat: "Spelling", level: "L2 Application" },
    { q: "A government by the rich:", options: ["Democracy", "Plutocracy", "Oligarchy", "Theocracy"], answer: 1, explanation: "Pluto- (wealth) + cracy.", rule: "Hook: rich → pluto-.", elim: "Rich → pluto; few = oligo (kill).", trap: "Oligarchy (few, not rich) trap.", trapcat: "OWS", level: "L2 Application" },
    { q: "Correctly spelt word:", options: ["Recieve", "Receive", "Riceive", "Receeve"], answer: 1, explanation: "i before e except after c → receive.", rule: "ie/ei rule.", elim: "After c → ei.", trap: "Phonetic-spelling trap.", trapcat: "Spelling", level: "L3 Trap" },
    { q: "One who eats everything:", options: ["Herbivore", "Carnivore", "Omnivore", "Frugivore"], answer: 2, explanation: "Omni- (all) + vorous (eat).", rule: "Hook: all → omni-.", elim: "Everything → omni — only C.", trap: "Partial-eater traps.", trapcat: "OWS", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_idioms",
  crumbs: ["SSC CGL", "English", "Vocabulary", "Idioms"],
  kicker: "SSC CGL English • Vocabulary 3",
  title: "Idioms & Phrases — Story Hooks Beat Rote",
  meta: "~40 high-frequency idioms • ~15 min • 6 Q",
  content: `
    <p><b>What SSC actually tests:</b> <span class="hl">meaning in one line</span>, usually through sentence use. Learn each idiom as a mini-story, not a definition.</p>
    <h3>High-frequency SSC idioms (batch 1 — learn as stories)</h3>
    <table class="rev"><tr><th>Idiom</th><th>Hook story</th><th>Meaning</th></tr>
    <tr><td>To bite the dust</td><td>Loser eats dust</td><td>To fail / be defeated</td></tr>
    <tr><td>To break the ice</td><td>First crack in frozen silence</td><td>Start a conversation</td></tr>
    <tr><td>A blessing in disguise</td><td>Gift wrapped as trouble</td><td>Hidden benefit</td></tr>
    <tr><td>To burn the midnight oil</td><td>Lamp on till late</td><td>Work late</td></tr>
    <tr><td>To call it a day</td><td>Close the shop</td><td>Stop work for the day</td></tr>
    <tr><td>A dime a dozen</td><td>Too cheap to count</td><td>Very common</td></tr>
    <tr><td>To hit the nail on the head</td><td>One exact hammer hit</td><td>Say exactly the right thing</td></tr>
    <tr><td>Once in a blue moon</td><td>Moon rarely blue</td><td>Very rarely</td></tr>
    <tr><td>To spill the beans</td><td>Secrets tumble out</td><td>Reveal secret</td></tr>
    <tr><td>Under the weather</td><td>Cloud over your head</td><td>Slightly ill</td></tr>
    <tr><td>To steal the show</td><td>One actor grabs eyes</td><td>Attract most attention</td></tr>
    <tr><td>Through thick and thin</td><td>Forest and desert together</td><td>Through good and bad times</td></tr></table>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) literal-meaning option (bite dust → <i>fall while running</i>); (2) two close positives where only one fits the sentence's charge; (3) changed keyword (<i>break the glass</i> — wrong idiom entirely).</div>
    <div class="elim"><b class="t">✅ Elimination:</b> kill literal meanings first → check sentence charge (good/bad) → pick the story that matches. Never pick an option just because it shares a word with the idiom.</div>
    <div class="master-card"><b>🎯 MASTER CARD</b> — story > definition • kill literal options • charge-match • batch-1 table above is this week's list.</div>`,
  questions: [
    { q: "To bite the dust means:", options: ["To fall while running", "To fail or be defeated", "To eat quickly", "To work hard"], answer: 1, explanation: "Loser eats dust → defeated.", rule: "Story hook beats literal reading.", elim: "Kill literal fall/eat options.", trap: "Literal-meaning trap (A).", trapcat: "Idioms", level: "L1 Direct" },
    { q: "Once in a blue moon means:", options: ["Every month", "Very rarely", "On full-moon nights", "Quite often"], answer: 1, explanation: "Blue moons are rare → rarely.", rule: "Story hook.", elim: "Rare story → kill frequent options.", trap: "Moon-literal trap (C).", trapcat: "Idioms", level: "L1 Direct" },
    { q: "After years of hard work, he finally hit the nail on the head with his business plan. The idiom means:", options: ["Hammered a nail", "Said exactly the right thing", "Hurt himself", "Built a house"], answer: 1, explanation: "Exact hit → exactly right.", rule: "Charge + story fit.", elim: "Kill literal hammer options.", trap: "Literal-meaning trap.", trapcat: "Idioms", level: "L2 Application" },
    { q: "She was feeling under the weather, so she left early.", options: ["Caught in rain", "Slightly ill", "In a bad mood", "Travelling by air"], answer: 1, explanation: "Cloud over head → unwell.", rule: "Story hook.", elim: "Leaving early → illness fits best.", trap: "Weather-literal trap (A/D).", trapcat: "Idioms", level: "L2 Application" },
    { q: "A blessing in disguise — choose the closest meaning:", options: ["A hidden benefit", "A religious gift", "A curse", "A costume party"], answer: 0, explanation: "Good hidden inside bad.", rule: "Positive charge inside negative wrapping.", elim: "Kill curse (opposite) and literals.", trap: "Disguise-literal trap (D).", trapcat: "Idioms", level: "L3 Trap" },
    { q: "Engineering graduates are a dime a dozen these days. Means:", options: ["Very expensive", "Very common", "Very rare", "Paid in dimes"], answer: 1, explanation: "Too cheap to count → common.", rule: "Story hook.", elim: "Kill literal dime (D) and rare/expensive.", trap: "Currency-literal trap.", trapcat: "Idioms", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_error",
  crumbs: ["SSC CGL", "English", "Exam Skills", "Error Detection"],
  kicker: "SSC CGL English • Exam Skill 1 • Read After Grammar",
  title: "Mixed Error Detection — Which Rule Is Being Tested?",
  meta: "Multi-rule spotting • ~15 min • 6 Q",
  content: `
    <p><b>What SSC actually tests:</b> <span class="hl">rule identification under time pressure</span>. Every error sentence is one grammar topic in disguise. Your first job is naming the topic, not fixing the sentence.</p>
    <h3>The 4-pass scan (same order every time)</h3>
    <div class="steps"><ol>
    <li><b>Pass 1 — SVA:</b> bracket the subject, check the verb's number.</li>
    <li><b>Pass 2 — Tense/markers:</b> circle since/for/ago/yesterday; check sequence.</li>
    <li><b>Pass 3 — Articles/prepositions/pronouns:</b> fixed pairs, a/an sound, case.</li>
    <li><b>Pass 4 — Modifiers:</b> adjective/adverb, less/fewer, parallelism (and/but/or joins identical forms).</li></ol></div>
    <div class="box blue">📌 <b>Parallelism (bonus rule, heavily tested here):</b> items joined by <i>and/but/or/not only…but also</i> must match form — <i>She likes <b>singing, dancing and swimming</b></i> (not <i>to swim</i>).</div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) error placed far from its trigger word; (2) TWO suspicious spots, one legal (<i>the number…has</i> looks odd but is right); (3) no-error option when the sentence is fine — never force an error.</div>
    <div class="elim"><b class="t">✅ Elimination:</b> name the topic first (SVA? tense? pair?) → apply that topic's kill-steps → if all four passes clear, choose No Error with confidence.</div>
    <div class="master-card"><b>🎯 MASTER CARD</b> — scan order: SVA → tense → pairs → modifiers • name the topic before fixing • parallelism: joined items match form.</div>`,
  questions: [
    { q: "Find the error: Each of the students have submitted their project.", options: ["Each of the students", "have submitted", "their project", "No error"], answer: 1, explanation: "Each → singular has; their project is fine.", rule: "SVA R3 — each + singular.", elim: "Topic = SVA → each → kill have.", trap: "Plural-proximity trap (students → have).", trapcat: "SVA in errors", level: "L1 Direct" },
    { q: "Find the error: He has been working since five years.", options: ["He has been working", "since five years", "No error", "He has been"], answer: 1, explanation: "Period → for, not since.", rule: "Since + point / for + period.", elim: "Topic = marker → period → for.", trap: "Since-everywhere trap.", trapcat: "Tense in errors", level: "L1 Direct" },
    { q: "Find the error: She prefers tea than coffee in the morning.", options: ["She prefers tea", "than coffee", "in the morning", "No error"], answer: 1, explanation: "Prefer + to, never than.", rule: "Fixed pair: prefer to.", elim: "Topic = pair → prefer → to.", trap: "Comparative-than trap.", trapcat: "Pairs in errors", level: "L2 Application" },
    { q: "Find the error: Between you and I, he is honest.", options: ["Between you and I", "he is honest", "No error", "Between you"], answer: 0, explanation: "Between + object case → me.", rule: "Preposition + object pronoun.", elim: "Topic = case → after between kill I.", trap: "Over-formal I trap.", trapcat: "Case in errors", level: "L2 Application" },
    { q: "Find the error: She likes singing, dancing and to swim.", options: ["She likes singing", "dancing and to swim", "No error", "She likes"], answer: 1, explanation: "Parallel -ing list broken by to swim → swimming.", rule: "Parallelism — joined forms match.", elim: "Topic = parallelism → and joins -ing → to swim wrong.", trap: "Last-item-break trap.", trapcat: "Parallelism", level: "L3 Trap" },
    { q: "Find the error: The number of cases have increased.", options: ["The number of cases", "have increased", "No error", "of cases have"], answer: 1, explanation: "The number → singular has.", rule: "The number (singular) vs a number (plural).", elim: "Topic = SVA → the number → has.", trap: "Cases-proximity trap.", trapcat: "SVA in errors", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_improve",
  crumbs: ["SSC CGL", "English", "Exam Skills", "Improvement-Fillers"],
  kicker: "SSC CGL English • Exam Skill 2",
  title: "Sentence Improvement + Fill in the Blanks",
  meta: "Best-option + collocation • ~15 min • 6 Q",
  content: `
    <p><b>What SSC actually tests:</b> improvement = <span class="hl">pick the most grammatical + natural option</span> (the original may already be right — <i>No improvement</i> is often correct); fillers = <span class="hl">collocation + context charge</span>.</p>
    <h3>Core method</h3>
    <div class="box blue">📌 <b>Improvement (3 checks):</b> 1. grammar (tense/SVA/pair?) → 2. redundancy (<i>return back, repeat again, more better</i> always wrong) → 3. idiom/collocation (<i>take a decision → make/take?</i> SSC accepts <i>take a decision</i>; <i>commit a mistake → make a mistake</i>). If the original passes all three, choose <b>No improvement</b>.</div>
    <div class="box blue">📌 <b>Fillers (4 checks):</b> 1. grammar slot (noun? verb? tense?) → 2. collocation (which word <i>lives with</i> its neighbours? <i>pay attention, make progress, take responsibility</i>) → 3. charge (positive/negative story?) → 4. logic (cause-effect?). Read the full sentence — never fill from half of it.</div>
    <div class="box blue">📌 <b>Top collocations:</b> <i>make a mistake/progress/effort • take a decision/rest/responsibility • pay attention/heed • draw attention • bear responsibility • commit a crime/suicide (never mistake) • break the news/law • keep a promise • hold a meeting • raise a question • pose a threat • meet a demand • suffer a loss • avail of.</i></div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) punishing <i>No improvement</i> avoidance — learners refuse to pick it; (2) formal-sounding but ungrammatical option; (3) filler with right charge but wrong collocation (<i>do progress</i>); (4) double blank where only one blank decides — solve the certain blank first.</div>
    <div class="elim"><b class="t">✅ Elimination:</b> kill redundancy options first, then grammar-breakers, then wrong collocations. In double fillers, lock the sure blank and strike options that fail it.</div>
    <div class="master-card"><b>🎯 MASTER CARD</b> — No-improvement is real • redundancy always wrong • collocation beats synonyms • one certain blank decides doubles.</div>`,
  questions: [
    { q: "He returned back from Delhi yesterday. Best improvement:", options: ["returned back", "returned", "return back", "No improvement"], answer: 1, explanation: "Return already means come back — back is redundant.", rule: "Redundancy: return back wrong.", elim: "Kill every back option first.", trap: "Original-sounds-fine trap.", trapcat: "Redundancy", level: "L1 Direct" },
    { q: "The manager ___ the responsibility for the loss.", options: ["denied", "bore", "refused", "avoided"], answer: 1, explanation: "Bear responsibility is the collocation.", rule: "Collocation: bear responsibility.", elim: "Responsibility → bear; kill rest.", trap: "Right-charge-wrong-collocation trap.", trapcat: "Collocation", level: "L1 Direct" },
    { q: "She is more better than her sister in maths. Best improvement:", options: ["more better", "much better", "most better", "No improvement"], answer: 1, explanation: "Double comparative wrong; much better is correct.", rule: "No more + -er together.", elim: "Kill more better/most better.", trap: "Double-comparative trap.", trapcat: "Redundancy", level: "L2 Application" },
    { q: "His hard work ___ fruits when he topped the exam.", options: ["bore", "bear", "born", "borne away"], answer: 0, explanation: "Bear fruit (past bore) = yield results.", rule: "Idiom-collocation: bear fruit.", elim: "Idiom needs bore here.", trap: "Born/bear confusion trap.", trapcat: "Collocation", level: "L2 Application" },
    { q: "No sooner did he arrive ___ the train left. Best improvement:", options: ["when", "than", "then", "No improvement"], answer: 1, explanation: "No sooner pairs with than.", rule: "Fixed pair: no sooner…than.", elim: "No sooner → than.", trap: "When/then soundalike trap.", trapcat: "Fixed pairs", level: "L3 Trap" },
    { q: "___ of the two brothers is responsible, and ___ story is false. (double filler)", options: ["Neither / every", "Either / each", "Neither / each", "Either / every"], answer: 2, explanation: "Neither (not one nor other) + each (every single one separately).", rule: "Neither of two; each = individually.", elim: "First blank: two brothers, negative → Neither; lock it, then each.", trap: "Either/neither swap trap.", trapcat: "Double filler", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_cloze_rc",
  crumbs: ["SSC CGL", "English", "Exam Skills", "Cloze-RC"],
  kicker: "SSC CGL English • Exam Skill 3 • Uses Everything",
  title: "Cloze Test + Reading Comprehension",
  meta: "Logic + context • ~20 min • 5 Q",
  content: `
    <p><b>What SSC actually tests:</b> cloze = <span class="hl">grammar + collocation + story logic</span> per blank; RC = <span class="hl">prove every answer from the passage lines</span> — never from outside knowledge.</p>
    <h3>Cloze method (blank by blank)</h3>
    <div class="steps"><ol>
    <li>Read the whole passage once — never fill blank 1 blind.</li>
    <li>Grammar slot first (noun/verb/adjective? tense? preposition after it?).</li>
    <li>Collocation (which option <i>lives with</i> the neighbour words?).</li>
    <li>Story logic (cause-effect, contrast words: <i>but/however/although</i> flip the charge).</li></ol></div>
    <h3>RC method (per question)</h3>
    <div class="elim"><b class="t">✅ Elimination for RC:</b> 1. find the exact lines → 2. kill options the passage never says (outside info) → 3. kill too-extreme words (<i>always/never/all/none</i>) → 4. kill too-broad options → 5. the survivor must answer the asked question (main idea ≠ detail). Inference = must-be-true from lines, not could-be-true.</div>
    <div class="trap"><b class="t">⚠️ Examiner traps:</b> (1) true-in-real-life but not-in-passage option; (2) half-line quote completed with a twist; (3) extreme words; (4) cloze option that fits grammar but breaks story logic.</div>
    <div class="master-card"><b>🎯 MASTER CARD</b> — cloze: full read → slot → collocation → logic • RC: lines prove it • kill outside-info/extreme/broad • inference = must-be-true.</div>`,
  questions: [
    { q: "Cloze logic: Read the full passage before filling any blank because:", options: ["It wastes time but looks serious", "Later lines fix the story charge and decide earlier blanks", "The first blank is always the toughest", "Examiners dislike fast readers"], answer: 1, explanation: "Contrast/cause words later can flip the whole passage charge.", rule: "Full read first.", elim: "Only B gives a functional reason.", trap: "Speed trap — filling blind.", trapcat: "Cloze strategy", level: "L1 Direct" },
    { q: "Passage: The cheetah, the fastest land animal, owes its speed to a light frame and enlarged heart. Yet it abandons most hunts, exhausted within a minute. Q: Why does the cheetah abandon hunts?", options: ["It is slow", "It tires quickly despite its speed", "It prefers smaller prey", "It hunts only at night"], answer: 1, explanation: "Lines say: exhausted within a minute.", rule: "Answer from lines.", elim: "A contradicts lines; C/D never stated.", trap: "Outside-knowledge trap (C/D sound true).", trapcat: "RC factual", level: "L1 Direct" },
    { q: "Same passage. What can be inferred?", options: ["Speed guarantees a kill", "Extreme speed has a stamina cost", "Cheetahs never fail", "Cheetahs hunt in packs"], answer: 1, explanation: "Fastest animal + abandons most hunts = speed costs stamina. Must-be-true from lines.", rule: "Inference = must-be-true.", elim: "A/C contradict abandonment; D unstated.", trap: "Could-be-true trap (D).", trapcat: "RC inference", level: "L2 Application" },
    { q: "Cloze: He ___ his request with evidence, so the officer approved it. (supported / supported by luck only)", options: ["ignored", "supported", "hid", "opposed"], answer: 1, explanation: "Cause (evidence) → effect (approved) needs positive supported.", rule: "Cause-effect logic.", elim: "Approved-effect kills negative options.", trap: "Grammar-fits-but-logic-breaks trap.", trapcat: "Cloze logic", level: "L2 Application" },
    { q: "Same cheetah passage. Which title fits best?", options: ["Why Cheetahs Never Fail", "Speed and Its Price: The Cheetah", "Night Hunting Techniques", "The Heart of All Animals"], answer: 1, explanation: "Covers both speed and exhaustion — the passage's two halves.", rule: "Title = whole passage, not one detail.", elim: "A contradicts; C/D cover unstated details.", trap: "Too-narrow/too-broad trap.", trapcat: "RC main idea", level: "L3 Trap" },
    { q: "Same cheetah passage. The tone of the passage is:", options: ["mocking", "informative", "angry", "sarcastic"], answer: 1, explanation: "Plain facts about speed and limits, no emotion words.", rule: "Tone = attitude shown in the lines.", elim: "No emotion words → informative.", trap: "Over-reading trap.", trapcat: "RC tone", level: "L3 Trap" },
    { q: "Same cheetah passage. The author's purpose is to:", options: ["warn runners", "inform readers about the cheetah's speed and its limits", "argue cheetahs are weak", "describe night hunting"], answer: 1, explanation: "Both halves covered: speed + exhaustion.", rule: "Purpose covers the whole passage.", elim: "Must include both halves — only B.", trap: "Half-passage trap.", trapcat: "RC purpose", level: "L3 Trap" },
    { q: "Same cheetah passage. Abandons most hunts — abandons here means:", options: ["starts", "gives up", "watches", "joins"], answer: 1, explanation: "Quits exhausted mid-chase → gives up.", rule: "Word meaning from context lines.", elim: "Exhausted → gives up.", trap: "First-dictionary-meaning trap.", trapcat: "RC vocab", level: "L2 Application" },
    { q: "Which conclusion follows from the cheetah passage?", options: ["Speed alone guarantees hunting success.", "Great speed can come with a stamina cost.", "Cheetahs are slow starters.", "All fast animals tire equally."], answer: 1, explanation: "Fastest + abandons most hunts = cost; D over-generalises beyond the lines.", rule: "Conclusion stays inside the lines.", elim: "A contradicts; C unstated; D too broad.", trap: "Over-generalisation trap.", trapcat: "RC conclusion", level: "L4 SSC-pattern" },
  ]
},
{
  id: "eng_mock",
  crumbs: ["SSC CGL", "English", "Exam Skills", "Sectional"],
  kicker: "SSC CGL English • Final Skill • Exam Mode",
  title: "25-Q English Sectional — Exam Mode Guide",
  meta: "Mixed set • timed • no hints • 10 Q mixed sample",
  content: `
    <p><b>When to open this:</b> only after most topics show 🟢/🟡. This page trains <span class="hl">mixed application</span> — spotting <i>which</i> rule is tested — under exam conditions.</p>
    <h3>How to take it</h3>
    <div class="steps"><ol>
    <li>Pick a <b>Scope</b> in the Mock Practice toolbar (This topic / Grammar mix / Vocab mix / Full 25-Q sectional), then press <b>🎯 Master Test</b> — or <b>Load mix</b> to practise the mix with instant hints. No hints till submit in a Master Test.</li>
    <li>No hints till submit. Attempt all — SSC has no negative marking fear built into this drill; mark guesses honestly.</li>
    <li>After submit, read the <b>Mistake Analysis</b>: fix the top error pattern first, then retry.</li>
    <li>Target allocation for ~25 Q in ~20 min: vocab/voice/narration fast (30–40s each), grammar medium, cloze/RC slow (bank time here).</li></ol></div>
    <div class="box blue">📌 <b>Working 25-Q map:</b> RC ~5 • Cloze ~5 • Error/Improvement/Fillers ~6–7 • Vocab (syn/ant/idiom/OWS/spelling) ~5–6 • Voice/Narration ~2–3. Adjust to the latest verified pattern.</div>
    <div class="trap"><b class="t">⚠️ Sectional traps:</b> (1) burning 5 minutes on one RC inference; (2) changing answers on review without a rule reason; (3) leaving blanks unattempted out of fear; (4) re-reading the whole passage per question instead of scanning lines.</div>
    <div class="master-card"><b>🎯 SECTIONAL MASTER CARD</b> — fast: vocab/voice • medium: grammar • slow: cloze/RC • attempt all • fix top error pattern after every test.</div>`,
  questions: [
    { q: "Each of the players ___ given a medal. [Grammar?]", options: ["were", "was", "are", "have been"], answer: 1, explanation: "Each → singular was.", rule: "SVA R3.", elim: "Each → kill plurals.", trap: "Players-proximity trap.", trapcat: "SVA in errors", level: "L4 SSC-pattern" },
    { q: "He has lived here ___ 2020. [Grammar?]", options: ["for", "from", "since", "by"], answer: 2, explanation: "Point of time → since.", rule: "Since + point.", elim: "2020 = point → since.", trap: "For-with-year trap.", trapcat: "Tense in errors", level: "L4 SSC-pattern" },
    { q: "Active: She completed the project. Passive:", options: ["The project is completed by her.", "The project was completed by her.", "The project has been completed by her.", "The project is being completed by her."], answer: 1, explanation: "Simple past → was + V3.", rule: "Voice tense match.", elim: "Past → was.", trap: "Tense-shift trap.", trapcat: "Tense match", level: "L4 SSC-pattern" },
    { q: "Direct: He said, I am ready. Indirect:", options: ["He said that he is ready.", "He said that he was ready.", "He says that he was ready.", "He said that I am ready."], answer: 1, explanation: "Said + present → was; I → he.", rule: "Narration backshift.", elim: "Kill no-shift and says.", trap: "No-shift trap.", trapcat: "Backshift", level: "L4 SSC-pattern" },
    { q: "Synonym of RAPID:", options: ["Slow", "Fast", "Lazy", "Calm"], answer: 1, explanation: "Rapid = fast.", rule: "Charge/intensity match.", elim: "Kill slow/lazy/calm.", trap: "Opposite trap.", trapcat: "Synonyms", level: "L4 SSC-pattern" },
    { q: "One who writes books:", options: ["Author", "Reader", "Publisher", "Critic"], answer: 0, explanation: "Author writes; publisher prints.", rule: "OWS hook: writes → author.", elim: "Writes → author.", trap: "Publisher lookalike trap.", trapcat: "OWS", level: "L4 SSC-pattern" },
    { q: "To spill the beans means:", options: ["To cook", "To reveal a secret", "To waste food", "To buy beans"], answer: 1, explanation: "Secrets tumble out.", rule: "Story hook.", elim: "Kill literals.", trap: "Literal trap.", trapcat: "Idioms", level: "L4 SSC-pattern" },
    { q: "She prefers milk ___ tea. [Grammar?]", options: ["than", "to", "over", "from"], answer: 1, explanation: "Prefer + to.", rule: "Fixed pair.", elim: "Prefer → to.", trap: "Than trap.", trapcat: "To-pairs", level: "L4 SSC-pattern" },
    { q: "Correctly spelt:", options: ["Embarass", "Embarrass", "Embaras", "Embarras"], answer: 1, explanation: "Double r + double s.", rule: "Double-letter word.", elim: "Only B has rr + ss.", trap: "Single-double trap.", trapcat: "Spelling", level: "L4 SSC-pattern" },
    { q: "Find the error: The committee were divided in their opinion.", options: ["The committee", "were divided", "in their opinion", "No error"], answer: 3, explanation: "Divided members → were is correct; sentence is fine.", rule: "Collective-as-individuals → plural.", elim: "Divided → plural correct → No error.", trap: "Forced-error trap — No error is correct.", trapcat: "SVA in errors", level: "L4 SSC-pattern" },
  ]
},
];
