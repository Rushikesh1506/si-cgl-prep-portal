/* September 30 — Test 2: Evening Full English Mock — 25 Questions
   SSC CGL Tier-1 Pattern · Timed · No Hints · Fresh Set (No repetition from Morning Test)
   ============================================================ */

/* EXAM INSTRUCTIONS */
"use strict";
/* Questions: 25 · Time: 20 minutes · Max Marks: 25 · Negative Marking: 0.5 */
"Use question selection. Attempt clear questions first. Keep track of the existing codebase tools and structure. Now I'll create the 5 tests for September 30. Each test will be wary of close options. Submit after completing."

/* ======================================
   QUESTIONS — 25 BRAND-NEW SSC CGL-style questions
   (Fresh set — different vocabulary, grammar, passages, traps)
   ====================================== */

const questions = [
/* ======================================
   ERROR DETECTION (Q1-Q5) — NEW PATTERNS
   ====================================== */

  /* Q1: Error Detection - Tense */
  { q: "By this time next year, she will have completed her project successfully.", options: ["By this time next year", "she will have completed", "her project successfully", "No error"], answer: 3, explanation: "Correct future perfect tense structure. 'Will have completed' is the proper form for an action completed before a future point.", rule: "Future perfect tense: will/shall + have + past participle.", trapcat: "Tense error", level: "L1 Direct" },
  { q: "The manager together with his team are working on the project.", options: ["The manager together with his team", "are working on the project", "No error"], answer: 1, explanation: "Together with keeps subject singular → was/were → is working (singular).", rule: "R4 — together with / as well as does not pluralise the subject.", trapcat: "As well as trap", level: "L2 Application" },
  { q: "Neither the director nor the producers have agreed to the terms.", options: ["Neither the director nor the producers", "have agreed to the terms", "No error"], answer: 0, explanation: "Correct — Neither/nor with plural nearer subject 'producers' → have agreed is correct.", rule: "Neither/nor → verb agrees with nearer subject.", trapcat: "Neither/nor agreement", level: "L2 Application" },
  { q: "One of the candidates who are eligible for the interview must report.", options: ["One of the candidates who are eligible", "for the interview must report", "No error"], answer: 0, explanation: "One of + plural noun + who → verb after who is plural (are eligible) — CORRECT.", rule: "One of + plural + who/that → plural verb after who.", trapcat: "One of + who (correct usage)", level: "L2 Application" },
  { q: "The list of requirements were submitted yesterday.", options: ["The list of requirements", "were submitted yesterday", "No error"], answer: 1, explanation: "The list is singular; were should be was.", rule: "R1 — verb follows the real subject, ignore prepositional phrases.", trapcat: "Intervenient phrase", level: "L2 Application" },

/* ======================================
   SENTENCE IMPROVEMENT (Q6-Q10) — NEW PATTERNS
   ====================================== */

  /* Q6: Idiom/Expression */
  { q: "He has been keeping bad company since childhood.", options: ["He has been keeping", "bad company since childhood", "No improvement", "No error"], answer: 3, explanation: "No error — correct idiom usage: 'keeping company' means associating with someone.", rule: "Idiom: keeping company = associating with.", trapcat: "No error", level: "L1 Direct" },
  { q: "If I were you, I would have accepted the offer.", options: ["If I were you", "I would have accepted", "No improvement", "No error"], answer: 3, explanation: "Correct — third conditional structure: If + past perfect, would + have + past participle.", rule: "Third conditional: If + had + past participle, would + have + past participle.", trapcat: "Conditional structure", level: "L2 Application" },
  { q: "The scene was such that it moved everyone to tears.", options: ["The scene was such", "that it moved everyone to tears", "No improvement", "No error"], answer: 3, explanation: "Correct sentence using 'such...that' structure.", rule: "Such...that — correct usage for emphasis.", trapcat: "No error", level: "L1 Direct" },
  { q: "Hardly had I entered the room when the lights went out.", options: ["Hardly had I entered", "the room when the lights went out", "No improvement", "No error"], answer: 3, explanation: "Correct — 'Hardly...when' inversion structure with past perfect.", rule: "Hardly/scarcely/barely + had + subject + verb + when.", trapcat: "No error", level: "L2 Application" },
  { q: "No sooner did the train leave than it started raining.", options: ["No sooner did the train leave", "than it started raining", "No improvement", "No error"], answer: 3, explanation: "Correct — 'No sooner...than' inversion structure.", rule: "No sooner + auxiliary verb + subject + than.", trapcat: "No error", level: "L1 Direct" },

/* ======================================
   FILL IN THE BLANKS (Q11-Q13) — NEW PATTERNS
   ====================================== */

  /* Q11: Preposition */
  { q: "The book is conducive ___ learning.", options: ["to", "for", "towards", "of"], answer: 0, explanation: "Correct: 'conducive to' means helping or assisting a purpose. This is the standard fixed expression. 'Conducive for' is not grammatically correct in this context.", rule: "Conducive to + noun (purpose).", trapcat: "Preposition selection", level: "L1 Direct" },
  { q: "She is superior ___ her sister in academic performance.", options: ["to", "than", "over", "with"], answer: 0, explanation: "Correct: 'superior to' is the standard comparative form (one of the few exceptions where 'to' is used rather than 'than'). 'Superior than' is grammatically incorrect in formal English.", rule: "Superior to (not than).", trapcat: "Comparison word", level: "L2 Application" },
  { q: "The teacher divided the apples ___ the two students.", options: ["between", "among", "between among", "amongst"], answer: 0, explanation: "Between is used when distributing among two individuals.", rule: "Between = two entities; Among = more than two.", trapcat: "Between/among", level: "L1 Direct" },

/* ======================================
   CLOZE TEST (Q14-Q17) — NEW PASSAGE
   ====================================== */

  /* Q14: Cloze - new passage */
  { q: "Passage: Digital India initiative aims ___ transform the country into a knowledge economy. The programme focuses ___ providing digital infrastructure to rural areas. (Fill in the blanks with correct prepositions.)", options: ["to, in", "for, to", "to, to", "for, in"], answer: 0, explanation: "Aims to + infinitive (transform); focuses on + noun (infrastructure).", rule: "Aims to + infinitive; focuses on + noun.", trapcat: "Preposition selection", level: "L1 Direct" },
  { q: "The government launched scheme ___ poor people ___ clean drinking water.", options: ["for, to get", "for, providing", "for, access to", "to, for"], answer: 2, explanation: "Launched scheme for + beneficiaries; provided + -ing form after provide.", rule: "Launch scheme for; provide + gerund.", trapcat: "Verb pattern", level: "L2 Application" },
  { q: "He concentrates ___ his studies ___ neglecting outdoor games.", options: ["on, by", "in, with", "on, by", "at, from"], answer: 0, explanation: "Concentrates on + gerund; neglects + gerund (or bare infinitive).", rule: "Concentrate on; neglect + gerund.", trapcat: "Verb pattern", level: "L2 Application" },
  { q: "Please refer ___ the attachment ___ further details.", options: ["to, for", "of, to", "of, for", "to, of"], answer: 0, explanation: "Refer to + noun (the attachment); further details — no second preposition needed or 'for' is redundant.", rule: "Refer to; further details directly.", trapcat: "Preposition selection", level: "L2 Application" },

/* ======================================
   PARA JUMBLES (Q18-Q19) — NEW LOGIC
   ====================================== */

  /* Q18: Para jumble - new sequence */
  { q: "Rearrange the sentences in logical order: A. The teacher explained the concept. B. Students listened carefully. C. The concept was difficult. D. Doubts were cleared.", options: ["A, B, C, D", "C, A, D, B", "B, C, A, D", "D, A, B, C"], answer: 1, explanation: "Logical flow: Concept difficult (C) → Teacher explains (A) → Students listened (B) → Doubts cleared (D). Sequence: C → A → B → D.", rule: "Cause-effect + explanation + feedback.", trapcat: "Sentence sequencing", level: "L3 Trap" },
  { q: "Rearrange the sentences: A. The match was cancelled. B. Rain stopped play. C. Players left the field. D. Umpires decided.", options: ["A, B, C, D", "D, B, A, C", "B, D, A, C", "A, D, B, C"], answer: 2, explanation: "Logical flow: Rain stopped play (B) → Umpires decided (D) → Match cancelled (A) → Players left field (C). Sequence: B → D → A → C.", rule: "Event sequencing in sports.", trapcat: "Sports sequence", level: "L3 Trap" },

/* ======================================
   SYNONYMS (Q20-Q21) — NEW WORDS
   ====================================== */

  { q: "Choose the word nearest in meaning: VAGRANT", options: ["Homeless", "Wealthy", "Resident", "Citizen"], answer: 0, explanation: "Vagrant means a person without a home or settled residence; homeless.", rule: "Vocabulary — vagrant definition.", trapcat: "Word meaning", level: "L1 Direct" },
  { q: "Choose the word nearest in meaning: CANDID", options: ["Honest", "Fake", "Deceptive", "Secret"], answer: 0, explanation: "Candid means open, honest, and straightforward in speech or expression.", rule: "Vocabulary — candid definition.", trapcat: "Word meaning", level: "L1 Direct" },

/* ======================================
   ONE WORD SUBSTITUTION (Q22) — NEW WORD
   ====================================== */

  { q: "One who studies the science of fungi:", options: ["Mycologist", "Geologist", "Biologist", "Botanist"], answer: 0, explanation: "Mycologist is the scientist who studies fungi.", rule: "One word substitution — mycologist.", trapcat: "Word meaning", level: "L1 Direct" },

/* ======================================
   IDIOMS & PHRASES (Q23) — NEW IDIOM
   ====================================== */

  { q: "The underlined idiom in 'She broke the ice at the party' means:", options: ["She slipped on ice", "She initiated conversation", "She froze literally", "She left the party"], answer: 1, explanation: "Break the ice = to initiate conversation or relieve tension in a social situation.", rule: "Idiom: break the ice.", trapcat: "Idiom interpretation", level: "L2 Application" },

/* ======================================
   ACTIVE & PASSIVE VOICE (Q24) — NEW SENTENCE
   ====================================== */

  { q: "Convert to passive voice: The committee has elected a new president.", options: ["A new president has been elected by the committee", "A new president is elected by the committee", "A new president was elected by the committee", "New president has been elected by the committee"], answer: 0, explanation: "Present perfect passive: has/have + been + past participle + by subject.", rule: "Active → Passive: object (new president) → subject; subject (committee) → object of 'by'.", trapcat: "Voice conversion", level: "L2 Application" },

/* ======================================
    DIRECT & INDIRECT SPEECH (Q25) — NEW SENTENCE
    ====================================== */

  { q: "Convert to indirect speech: The teacher said, \"Honesty is the best policy.\"", options: ["The teacher said that honesty is the best policy", "The teacher said that honesty was the best policy", "The teacher said honesty is the best policy", "The teacher said that honesty is best policy"], answer: 0, explanation: "Universal/general truths and proverbs do not require backshifting of tense in reported speech. 'Honesty is the best policy' is a universal truth, so 'is' is retained. Rule: Universal truths/proverbs retain present tense even in reported speech.", rule: "Universal truth - no backshift needed.", trapcat: "Speech conversion", level: "L2 Application" },
};

 /* ============================================================
   TEST CONFIGURATION
   ============================================================ */
const testConfig = {
  testId: "sept30_test2_evening_english",
  date: "September 30",
  testNumber: 2,
  name: "Evening Full English Mock",
  subject: "English",
  totalQuestions: questions.length,
  timeLimitMinutes: 20,
  maxMarks: 25,
  negativeMarking: 0.5,
  examMode: true,
  instructions: "Questions: 25 · Time: 20 minutes · Max Marks: 25 · Negative Marking: 0.5 · Brand-new set — no repetition from morning test. Rules: 1. Start only when ready. 2. Do not use external resources. 3. Do not look at solutions. 4. Do not ask for hints. 5. Treat every question as actual exam question. 6. Keep track of time. 7. Use question selection. 8. Avoid unnecessary guessing. 9. Submit after completing."
};

/* ============================================================
   EXPORT FOR INTEGRATION
   ============================================================ */
module.exports = { questions, testConfig };