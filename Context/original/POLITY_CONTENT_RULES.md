# CLAUDE RULES — AP SI Polity Content Engine

Standing content rules for all Indian Polity notes on this site (notes.html /
notes-content.js). Apply these to every topic going forward, and when revising
existing topics. This file is the source of truth — if content drifts from it,
fix the content, not this file (unless the user changes the rules).

## 1. Core objective
Create content that helps students understand, remember, apply and answer exam
questions correctly. Do not merely summarise the Constitution or produce
textbook notes. Every topic must answer: What is the concept? Why does it
exist? How does it work? How can it be tested in AP SI? How can a student
remember it?

## 2. Teach through situations
- Start each difficult concept with a realistic situation, preferably
  involving police recruitment, an SI, a citizen, a government officer, a
  court or a public authority.
- Explain the situation first, then reveal the constitutional principle and
  Article.
- Show how changing one fact changes the answer.
- Clearly distinguish legally valid actions from illegal/arbitrary/
  unconstitutional actions.
- Use situations to explain the law, not to replace accurate legal
  definitions.
- Never invent legal powers, exceptions, case holdings or procedural rules for
  the sake of an example.

## 3. Fixed learning structure (per major topic, at chapter level)
1. Hook — a short, relatable problem or question.
2. Understand — the concept in simple English.
3. Visualise — diagram, decision tree, comparison or flowchart.
4. Remember — a meaningful mnemonic, pattern or memory trick.
5. Apply — a practical scenario solved step by step.
6. Exam traps — common confusions and misleading options.
7. Recall — 3-5 high-value takeaways.
8. Test yourself — 3-5 MCQs, including application and statement-based ones.

Don't force every element into every tiny subsection — keep the sequence
complete at the chapter level, not forced onto every paragraph.

## 4. Visual-first UI
Convert abstract rules into visual structures: decision trees for legal tests/
exceptions, comparison cards for similar Articles/authorities/bodies,
timelines for amendments/judgments, flowcharts for procedures, numbered
diagrams for multi-part Articles, tables for eligibility/powers/appointment/
removal/exceptions, cause→change→effect chains, highlighted keywords for
traps. No decorative visuals that don't teach a recallable rule.

## 5. Mnemonics and memory
Provide a mnemonic for every suitable list/sequence/category/set of
exceptions. Prefer short, logical mnemonics over forced acronyms. Explain what
each letter represents. Never invent a mnemonic that changes the legal
meaning or hides an exception.

## 6. Exam-oriented content
Prioritise: exact Articles/clauses; who can exercise a right (citizens/all
persons/specified groups); who is bound (State/private/both); exceptions,
conditions, thresholds; appointment/tenure/removal/powers; constitutional vs
statutory bodies; commonly-confused similar provisions; landmark
judgments/amendments; verified PYQ patterns. Label content as **MUST
REMEMBER**, **COMMON EXAM TRAP**, **APPLICATION**, or **EXTRA DEPTH**. Never
claim a topic is "frequently asked" without evidence.

## 7. MCQ design
Test understanding, not recognition: direct factual, Statement I/II,
correct/incorrect pairs, assertion-reason where appropriate, scenario-based
application, and "change one fact" exception-testing questions. For every
answer explain: (1) why it's correct, (2) why the tempting alternative is
wrong, (3) the exact concept/keyword being tested. No ambiguous questions, no
unsupported answer keys, no disguised repeats.

## 8. Accuracy rules
Verify constitutional text/amendments/judgments/current legal position.
Distinguish constitutional text from judicial interpretation and
administrative practice. Case names/years/holdings only when verified. Flag
unsettled/evolving positions rather than presenting them as absolute. Never
sacrifice legal accuracy for simplicity.

## 9. English and readability
Simple, precise English for a beginner. Explain legal terms on first use.
Short paragraphs, descriptive headings. One strong example beats several
repetitive ones. Not every sentence needs to be a bullet point.

## 10. Progressive depth (3 layers)
Layer 1 — the basic rule. Layer 2 — exceptions, comparisons, important legal
detail. Layer 3 — tricky application-based exam questions. A beginner
understands Layer 1 before Layer 3 piles on.

## 11. End-of-topic revision UI
Every topic page should include: a 30-second visual summary; the most
important Articles/keywords; a mnemonic/recall technique; three common traps;
a short application quiz; a bookmarkable list of mistakes for later revision.
Keep the full explanation available, but make the revision layer scannable in
30-60 seconds.

## 12. Final quality check (before publishing any topic)
Can a beginner explain the concept in their own words? Is there a memorable
visual/mental model? Can the student apply the rule to a new situation? Are
exceptions/traps clear? Are all legal claims accurate? Can the topic be
revised in under a minute? Does the quiz test actual understanding?

**Final principle:** Don't just tell students what the Constitution says.
Train them to recognise the situation, identify the applicable Article, apply
the rule, eliminate traps, and select the correct answer.

---

## Implementation notes (how this maps onto this specific site)

- Available CSS classes in `notes.css`: `<span class="art">Art. 123</span>`,
  `<div class="callout info|tip|warn">`, `<div class="steps">`,
  `<table class="rev">`. New components to add for this rules doc:
  `.hook` (scenario-opener box), `.mnemonic` (memory-trick box), `.flow`
  (simple CSS decision-tree/flowchart, arrows via CSS not images),
  `.testyourself` (inline mini-quiz block, 3-5 Qs with click-to-reveal
  answer), `.revision-30s` (sticky/boxed 30-second summary at the top of a
  topic), label spans for **MUST REMEMBER** / **COMMON EXAM TRAP** /
  **APPLICATION** / **EXTRA DEPTH**.
- "Test yourself" MCQs live inline in the content (click-to-reveal), separate
  from the standalone Polity Practice MCQ exam page (sourced from
  `si-resources/Polity Material/Indian-polity-Questions.pdf`) — the inline
  ones are per-topic reinforcement, the standalone exam is full-syllabus
  practice.
