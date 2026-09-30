/* September 30 — Test 1: Morning Full English Mock — 25 Questions
   SSC CGL Tier-1 Pattern · Timed · No Hints · Real Exam Feel · DIFFICULTY UPGRADED
   ============================================================ */

/* EXAM INSTRUCTIONS */
"use strict";
/* Questions: 25 · Time: 20 minutes · Max Marks: 25 · Negative Marking: 0.5 */
"Use question selection. Attempt clear questions first. Keep track of time. Use elimination for close options. Submit after completing."

/* ============================================================
   QUESTIONS — 25 SSC CGL-style English questions
   Difficulty: 20% Easy, 50% Moderate, 30% Hard/Tricky
   ============================================================ */

const questions = [
/* ======================================
   ERROR DETECTION (Q1-Q5) — MIXED DIFFICULTY
   ====================================== */

  /* Q1: Error Detection - Easy (now fixed) */
  { q: "The committee has decided to postpone the meeting due to unavoidable circumstances.", options: ["The committee has decided", "to postpone the meeting", "due to unavoidable circumstances", "No error"], answer: 3, explanation: "Correct: Committee is a collective noun acting as a single unit, taking singular verb 'has'. This tests whether the student recognises a grammatically correct sentence with collective nouns. Exam tip: Always identify the true subject - prepositional phrases like 'of the meeting' do not change the verb.", rule: "Collective noun acting as one unit → singular verb (has, is, was).", trapcat: "Subject-verb agreement", level: "L1 Direct" },
  { q: "One of the highest peaks in the Himalayas is Kanchenjunga.", options: ["One of the highest peaks", "in the Himalayas is", "Kanchenjunga", "No error"], answer: 3, explanation: "Correct: 'One of + plural noun' → verb is singular. This is a classic SSC trick: students often see 'Himalayas are' and select error, but the verb after 'who/that' governs, not the noun before 'of'.", rule: "One of + plural noun + who/that → singular verb (or plural after who/that depending on context).", trapcat: "One of + plural (common error)", level: "L1 Direct" },
  { q: "The hunter as well as the guides were tracking the tiger.", options: ["The hunter", "as well as the guides", "were tracking the tiger", "No error"], answer: 1, explanation: "Along with / as well as does not pluralise the subject; hunter stays singular → was tracking (not were). SSC examiners love this trap - the nearest noun 'guides' distracts students.", rule: "R4 — as well as does not make subject plural.", trapcat: "As well as trap", level: "L2 Application" },
  { q: "The list of items is missing from the inventory.", options: ["The list of items", "is missing from the inventory", "No error"], answer: 3, explanation: "Correct: The list is singular; 'of items' is a prepositional phrase that does not change the subject verb. This tests the student's ability to ignore intervening phrases.", rule: "R1 — verb follows the real subject, ignore prepositional phrases.", trapcat: "Intervenient phrase", level: "L2 Application" },
  { q: "Either the manager or his staff is responsible for this mistake.", options: ["Either the manager or his staff", "is responsible for this mistake", "No error"], answer: 3, explanation: "Correct: Neither/nor → verb agrees with NEARER subject. Here 'manager' is closer to the verb than 'staff', so 'is' is correct. Many students mistakenly match with 'staff' (plural).", rule: "R2 — either/or, neither/nor → nearer subject.", trapcat: "Either/neither pairs - nearer trap", level: "L2 Application" },
  { q: "Neither the director nor the producer have agreed to the terms.", options: ["Neither the director nor the producer", "have agreed to the terms", "No error"], answer: 1, explanation: "Error: Neither/nor → verb agrees with NEARER subject. 'Producer' is singular, so it should be 'has agreed', not 'have agreed'. This is a tricky reversal - usually the nearer subject determines the verb, and here the producer (singular) is nearer than director.", rule: "Neither/nor → verb agrees with nearer subject.", trapcat: "Neither/nor - singular/plural trap", level: "L3 Trap" },

/* ======================================
   SENTENCE IMPROVEMENT (Q6-Q10) — MIXED DIFFICULTY
   ====================================== */

  /* Q6: Sentence Improvement - Moderate */
  { q: "The manager together with his team is working on the project.", options: ["The manager together with his team", "is working on the project", "No improvement", "No error"], answer: 3, explanation: "Correct: 'Together with' keeps the subject singular. This is a subtle trap - many students see 'team' (collective) and assume plural verb. Key exam strategy: Ignore prepositional phrases starting with 'along with', 'as well as', 'together with'.", rule: "R4 — as well as / together with does not pluralise the subject.", trapcat: "As well as / together with trap", level: "L2 Application" },
  { q: "She decided to go because it would give her more happiness.", options: ["She decided to go", "because it would give her more happiness", "No improvement", "because it would make her much happier"], answer: 3, explanation: "Correct: 'More + happiness' is acceptable because 'happiness' is a noun, not an adjective. The error 'more happier' is a common mistake - students try to apply the 'more + adjective' rule to nouns.", rule: "Do not use 'more' with comparative forms of adjectives; 'more' can be used with nouns directly.", trapcat: "More + adjective/noun error", level: "L2 Application" },
  { q: "The scene was such that it moved everyone to tears.", options: ["The scene was such", "that it moved everyone to tears", "No improvement", "No error"], answer: 3, explanation: "Correct: 'Such...that' is the proper structure. This tests correct usage of the emphatic 'such...that' construction, a favourite SSC pattern.", rule: "Such + singular countable noun + that..., or such + uncountable noun + that...", trapcat: "No error", level: "L1 Direct" },
  { q: "Hardly had I entered the room than the lights went out.", options: ["Hardly had I entered", "the room than the lights went out", "No improvement", "No error"], answer: 1, explanation: "Error: The correct correlative conjunction is 'Hardly...when' or 'Hardly...and when', not 'than'. 'Hardly...than' is grammatically incorrect. This tests knowledge of the exact SSC-prescribed pattern.", rule: "Hardly/scarcely/barely + had + subject + verb + when (not than).", trapcat: "Conjunction error - than vs when", level: "L3 Trap" },
  { q: "No sooner did the train leave when it started raining.", options: ["No sooner did the train leave", "than it started raining", "No improvement", "No error"], answer: 3, explanation: "Correct: 'No sooner...than' is the proper inversion structure. Note: Some examiners accept 'No sooner...when', but SSC pattern strictly uses 'than'.", rule: "No sooner + auxiliary verb + subject + than.", trapcat: "No error", level: "L2 Application" },

/* ======================================
   FILL IN THE BLANKS (Q11-Q13) — MODERATE/HARD
   ====================================== */

  /* Q11: Preposition - Hard */
  { q: "The book is conducive ___ learning.", options: ["to", "for", "towards", "of"], answer: 0, explanation: "Correct: 'conducive to' means helping or assisting a purpose. This is the standard fixed expression. 'Conducive for' is a common error - students often misremember the preposition. Exam tip: Memorize fixed expressions: conducive to, adverse to, opposed to.", rule: "Conducive to + noun (purpose).", trapcat: "Preposition - conducive for (common error)", level: "L3 Trap" },
  { q: "She is superior ___ her sister in academic performance.", options: ["to", "than", "over", "with"], answer: 0, explanation: "Correct: 'superior to' is the standard comparative form. 'Superior than' is grammatically incorrect in formal English, though colloquially heard. SSC CGL strictly tests 'superior to'. Key memory trick: For comparison, use 'senior to', 'junior to', 'superior to' - all take 'to'.", rule: "Superior to (not than).", trapcat: "Comparison - superior than (common error)", level: "L2 Application" },
  { q: "The teacher divided the apples ___ the two students.", options: ["between", "among", "between among", "amongst"], answer: 0, explanation: "Correct: 'Between' is used when distributing among two individuals. 'Among' is for more than two. This is a classic SSC binary choice trap - students often default to 'among' without checking the count.", rule: "Between = two entities; Among = more than two.", trapcat: "Between/among - count trap", level: "L2 Application" },

/* ======================================
   CLOZE TEST (Q14-Q17) — MODERATE
   ====================================== */

  /* Q14: Cloze - Moderate */
  { q: "Passage: Digital India initiative aims ___ transform the country into a knowledge economy. The programme focuses ___ providing digital infrastructure to rural areas. (Fill in the blanks with correct prepositions.)", options: ["to, in", "for, to", "to, to", "for, in"], answer: 0, explanation: "Aims to + infinitive (transform); focuses on + noun (infrastructure). This tests two different verb-preposition combinations in the same sentence, a common SSC pattern. Students often repeat the same preposition by habit.", rule: "Aims to + infinitive; focuses on + noun.", trapcat: "Repeating same preposition by habit", level: "L2 Application" },
  { q: "The government launched scheme ___ poor people ___ clean drinking water.", options: ["for, to get", "for, providing", "for, access to", "to, for"], answer: 2, explanation: "Launched scheme for + beneficiaries; provided + -ing form after provide. This tests verb + preposition + gerund patterns. Common error: 'launched scheme to' (incorrect - launch takes 'for' for beneficiaries).", rule: "Launch scheme for; provide + gerund.", trapcat: "Verb + preposition + gerund pattern", level: "L2 Application" },
  { q: "He concentrates ___ his studies ___ neglecting outdoor games.", options: ["on, by", "in, with", "on, by", "at, from"], answer: 0, explanation: "Concentrates on + gerund; neglects + gerund (or bare infinitive). This tests two different verb patterns in one question. Error pattern: 'concentrates in' (incorrect - must be 'on').", rule: "Concentrate on; neglect + gerund.", trapcat: "Verb pattern - concentrate in (common error)", level: "L2 Application" },
  { q: "Please refer ___ the attachment ___ further details.", options: ["to, for", "of, to", "of, for", "to, of"], answer: 0, explanation: "Refer to + noun (the attachment); further details directly - no second preposition needed. This tests whether students add redundant prepositions. Common error: 'refer of' or 'refer for the attachment'.", rule: "Refer to; further details directly.", trapcat: "Redundant preposition", level: "L3 Trap" },

/* ======================================
   PARA JUMBLES (Q18-Q19) — HARD
   ====================================== */

  /* Q18: Para jumble - Hard */
  { q: "Rearrange the sentences in logical order: A. The scientist accepted the award. B. He had made a groundbreaking discovery. C. The award was given for his research. D. Many people attended the ceremony.", options: ["A, B, C, D", "B, A, D, C", "C, D, A, B", "D, B, A, C"], answer: 1, explanation: "Logical flow: Discovery (B) → Acceptance (A) → Reason (C) → Ceremony (D). Proper sequence: B → A → C → D. SSC trick: The 'because' reasoning (C) must follow the action (A), not precede it. Many students incorrectly start with 'Award was given' (C).", rule: "Chronological/logical cause-effect ordering: effect follows cause.", trapcat: "Starting with the effect (C) instead of cause (B)", level: "L3 Trap" },
  { q: "Rearrange the sentences: A. The match was cancelled. B. Rain stopped play. C. Players left the field. D. Umpires decided.", options: ["A, B, C, D", "D, B, A, C", "B, D, A, C", "A, D, B, C"], answer: 2, explanation: "Logical flow: Rain stopped play (B) → Umpires decided (D) → Match cancelled (A) → Players left field (C). Sequence: B → D → A → C. SSC trap: Students often start with 'Match was cancelled' (A) or 'Players left' (C) without considering the cause-effect chain.", rule: "Event sequencing: cause (rain) → decision (umpires) → result (cancellation) → consequence (players leaving).", trapcat: "Starting with result rather than cause", level: "L3 Trap" },

/* ======================================
   SYNONYMS (Q20-Q21) — MODERATE/HARD
   ====================================== */

  { q: "Choose the word nearest in meaning: VAGRANT", options: ["Homeless", "Wealthy", "Resident", "Citizen"], answer: 0, explanation: "Vagrant means a person without a home or settled residence. SSC often tests less-common vocabulary words. Memory trick: Vagabond = vagrant; both relate to wandering without fixed abode.", rule: "Vocabulary — vagrant definition.", trapcat: "Word meaning", level: "L2 Application" },
  { q: "Choose the word nearest in meaning: CANDID", options: ["Honest", "Fake", "Deceptive", "Secret"], answer: 0, explanation: "Candid means open, honest, and straightforward in speech or expression. SSC frequently tests words that are commonly confused with their antonyms. Note: 'Candid' is NOT the same as 'candidature' (which means application for a position).", rule: "Vocabulary — candid definition.", trapcat: "Word meaning - candid vs candidature", level: "L2 Application" },

/* ======================================
   ONE WORD SUBSTITUTION (Q22) — HARD
   ====================================== */

  { q: "One who studies the science of fungi:", options: ["Mycologist", "Geologist", "Biologist", "Botanist"], answer: 0, explanation: "Mycologist is the scientist who studies fungi. SSC CGL often tests specialised one-word substitutions from biology and science. Memory trick: Myco- = fungus (like microbiology), geo- = earth, bio- = life, botany = plants.", rule: "One word substitution — mycologist.", trapcat: "Word meaning - specialization", level: "L3 Trap" },

/* ======================================
   IDIOMS & PHRASES (Q23) — HARD
   ====================================== */

  { q: "The underlined idiom in 'He has a bee in his bonnet about the new project' means:", options: ["He is very angry", "He is very excited", "He is obsessed", "He is confused"], answer: 2, explanation: "Bee in his bonnet = obsessed or preoccupied with an idea. This is a less-common idiom that SSC sometimes includes. Distractors: angry (related to irritation), excited (positive but wrong), confused (different idiom). Key: 'Bonnet' hints at head/idea, not anger.", rule: "Idiom: bee in one's bonnet = obsessed.", trapcat: "Idiom interpretation - anger vs obsession", level: "L3 Trap" },

/* ======================================
   ACTIVE & PASSIVE VOICE (Q24) — MODERATE
   ====================================== */

  { q: "Convert to passive voice: The examiner will check all answer sheets.", options: ["All answer sheets will be checked by the examiner", "All answer sheets are checked by the examiner", "All answer sheets were checked by the examiner", "Examiner will check all answer sheets"], answer: 0, explanation: "Future simple passive: object + will/shall + be + past participle + by subject. Key exam tip: Identify the tense first (here: future), then apply the passive transformation rule: object → subject, subject → 'by' + object.", rule: "Active → Passive: object becomes subject; subject becomes object of 'by'; add will/shall + be + past participle for future tense.", trapcat: "Voice conversion - tense maintenance", level: "L2 Application" },

/* ======================================
   DIRECT & INDIRECT SPEECH (Q25) — HARD
   ====================================== */

  { q: "Convert to indirect speech: She said, \"I have completed the work.\"", options: ["She said that she had completed the work", "She said that she has completed the work", "She said that she has been completed the work", "She said that she had been completing the work"], answer: 0, explanation: "Present perfect tense backshift: have/has → had. Rule: After 'said that', present perfect (have/has + past participle) shifts to past perfect (had + past participle). Common error: retaining 'have/has' without backshifting. Exam tip: For past reporting verbs, always check tense backshifting.", rule: "Said + that + past perfect (had + past participle) for present perfect in direct.", trapcat: "Tense backshifting - retaining have/has (common error)", level: "L3 Trap" },
];

/* ============================================================
   TEST CONFIGURATION
   ============================================================ */
const testConfig = {
  testId: "sept30_test1_morning_english",
  date: "September 30",
  testNumber: 1,
  name: "Morning Full English Mock",
  subject: "English",
  totalQuestions: questions.length,
  timeLimitMinutes: 20,
  maxMarks: 25,
  negativeMarking: 0.5,
  examMode: true,
  instructions: "Questions: 25 · Time: 20 minutes · Max Marks: 25 · Negative Marking: 0.5 · Difficulty: 20% Easy, 50% Moderate, 30% Hard/Tricky. Strategy: ROUND 1 (7 min): Solve easy + moderate questions. ROUND 2 (8 min): Attempt tricky questions using elimination. ROUND 3 (5 min): Review flagged questions. Submit before time ends."
};

/* ============================================================
   EXPORT FOR INTEGRATION
   ============================================================ */
module.exports = { questions, testConfig };