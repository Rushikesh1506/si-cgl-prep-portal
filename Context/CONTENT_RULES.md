# CONTENT_RULES — mandatory rules for any study content on this site

Applies to **every subject** (Polity, History, Geography, Science, Economy,
Current Affairs, Arithmetic, Reasoning, English, Telugu), not just Polity —
the pedagogical spec was written against Polity first because that's what's
being worked on, but the bar is the same everywhere. If you're writing or
editing study notes, MCQs, explanations, or answer keys anywhere on this
site, this file governs you.

**Source of this spec:** sections 1-12 below are the user's own words
(pasted verbatim into the project, preserved exactly), with one exception —
section 13 ("Self-validation protocol") was added by Claude per an explicit
follow-up instruction ("write strict rules for gemini and content
validation, rating itself, think as student"). Everything in 1-12 is an
**existing project rule**; section 13 is the **recommended implementation**
of a user instruction that didn't come with its own exact wording — treat it
as a strong recommendation, not sacred text, and improve it if you find a
better way to achieve the same goal (content must survive a real student
actually trying to use it).

---

## 1. Core objective
Create content that helps students understand, remember, apply and answer
exam questions correctly. Do not merely summarise the Constitution/textbook
or produce generic notes. Every topic must answer: What is the concept? Why
does it exist? How does it work? How can it be tested in AP SI? How can a
student remember it?

## 2. Teach through situations
- Start each difficult concept with a realistic situation, preferably
  involving police recruitment, an SI, a citizen, a government officer, a
  court or a public authority.
- Explain the situation first, then reveal the principle/rule/Article.
- Show how changing one fact changes the answer.
- Clearly distinguish legally/factually valid actions from invalid/
  arbitrary/incorrect ones.
- Use situations to explain the concept, not to replace accurate
  definitions.
- **Never invent powers, exceptions, case holdings, procedural rules, or
  facts for the sake of an example.**

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
complete at the **chapter level**, not forced onto every paragraph.

## 4. Visual-first UI
Convert abstract rules into visual structures: decision trees for logic
tests/exceptions, comparison cards for similar concepts/authorities/bodies,
timelines for amendments/events/judgments, flowcharts for procedures,
numbered diagrams for multi-part rules, tables for eligibility/powers/
appointment/removal/exceptions, cause→change→effect chains, highlighted
keywords for traps. No decorative visuals that don't teach a recallable
rule.

**On this site specifically**, the available components are (see
`notes.css`, and `Context/TECH_STACK.md` for the full list with examples):
`.hook`, `.mnemonic`, `.flow`, `.testyourself`, `.revision-30s`,
`.tag-must`/`.tag-trap`/`.tag-apply`/`.tag-extra`, plus the older
`.callout info|tip|warn`, `.steps`, `.art`, `table.rev`. **Use these exact
class names — inventing new ones renders unstyled** (this has already
happened once this project, see `Context/HANDOFF.md` §5).

## 5. Mnemonics and memory
Provide a mnemonic for every suitable list/sequence/category/set of
exceptions. Prefer short, logical mnemonics over forced acronyms. Explain
what each letter represents. **Never invent a mnemonic that changes the
meaning or hides an exception.**

## 6. Exam-oriented content
Prioritise: exact Articles/clauses/facts; who/what a rule applies to and who
is bound; exceptions, conditions, thresholds; appointment/tenure/removal/
powers where relevant; official vs unofficial/statutory vs constitutional
distinctions; commonly-confused similar provisions; landmark judgments/
amendments/events; verified PYQ patterns. Label content as **MUST
REMEMBER**, **COMMON EXAM TRAP**, **APPLICATION**, or **EXTRA DEPTH** (via
the `.tag-*` spans). **Never claim a topic is "frequently asked" or
"high-weightage" without evidence** (an actual PYQ or a named, real source).

## 7. MCQ design
Test understanding, not recognition: direct factual, Statement I/II,
correct/incorrect pairs, assertion-reason where appropriate, scenario-based
application, and "change one fact" exception-testing questions. For every
answer, the explanation must cover:
1. Why the correct option is correct.
2. Why the single most tempting wrong option is wrong.
3. The exact concept/keyword/Article being tested.

No ambiguous questions, no unsupported answer keys, no disguised repeats of
the same question.

## 8. Accuracy rules
Verify facts/amendments/judgments/current position against reliable
sources. Distinguish primary text from interpretation/administrative
practice. Case names/years/holdings/dates only when verified — **if
genuinely unsure, say so explicitly rather than stating it as fact**. Flag
unsettled/evolving positions as such. **Never sacrifice accuracy for
simplicity or for hitting a word count.**

## 9. English and readability
Simple, precise English for a beginner. Explain technical terms on first
use. Short paragraphs, descriptive headings. One strong example beats
several repetitive ones. Not every sentence needs to be a bullet point.

## 10. Progressive depth (3 layers)
Layer 1 — the basic rule. Layer 2 — exceptions, comparisons, important
detail. Layer 3 — tricky application-based exam questions. A beginner
understands Layer 1 before Layer 3 piles on.

## 11. End-of-topic revision UI
Every topic page should include: a 30-second visual summary
(`.revision-30s`); the most important facts/keywords; a mnemonic/recall
technique; three common traps; a short application quiz (`.testyourself`);
ideally a way to flag/bookmark a mistake for later revision (not yet built
site-wide — if you build this, it's a genuinely new feature, say so rather
than assuming it exists). Keep the full explanation available, but make the
revision layer scannable in 30-60 seconds.

## 12. Final quality check (before publishing any topic)
Can a beginner explain the concept in their own words? Is there a memorable
visual/mental model? Can the student apply the rule to a new situation? Are
exceptions/traps clear? Are all factual claims accurate? Can the topic be
revised in under a minute? Does the quiz test actual understanding?

**Final principle:** Don't just tell students what the source says. Train
them to recognise the situation, identify the applicable rule, apply it,
eliminate traps, and select the correct answer.

---

## 13. Self-validation protocol (recommended implementation — see note above)

Before marking any piece of content "done," run this check **as if you were
the actual student**, not as the author:

### Step 1 — Fresh-eyes read
Close your own authoring context. Read the finished topic page top to
bottom as a nervous aspirant would, a few days before the exam, who has
**never seen this concept before**.

### Step 2 — Attempt the test-yourself quiz blind
Using *only* what's written above it on the page (not your own outside
knowledge), attempt every `.testyourself` question. If you can't answer one
correctly from the page's own content alone, the page has a gap — fix the
page, don't just fix the answer.

### Step 3 — Self-rate on these 5 axes (1-5 each, be honest, don't inflate)
1. **Clarity** — could a first-time reader explain this back in their own
   words?
2. **Completeness** — does it cover what an actual exam question on this
   topic would need (check against `si-resources/` source material or your
   own verified knowledge, not vibes)?
3. **Memorability** — is there a mnemonic/visual/hook that would actually
   stick, or is it just more prose to forget?
4. **Trap-awareness** — are the realistic wrong-answer traps named and
   explained, not just the right answer?
5. **Solvability** — the user's own bar, verbatim from feedback earlier in
   this project: *"if u ask me with that content if i will be able to
   solve [a question] means no"* — would a real exam MCQ on this exact
   topic be solvable from this page alone?

**Any axis scoring below 4/5 means the content is not done.** Go back and
fix it before moving to the next topic. Do not report a topic as complete
in `Context/HANDOFF.md`'s session log unless it actually passed this check.

### Step 4 — Record, don't just assert
When you report work as finished (to the user, or in the session log),
state what you actually verified — e.g. "re-derived the Kesavananda
Bharati holding from [source], cross-checked the year" — not just "verified
for accuracy." If you did NOT independently verify something (e.g. you
reused a prior AI's fact because re-deriving it wasn't in scope), **say
that explicitly** rather than implying fresh verification happened.

### What "never invent" means in practice
- No case name, year, or holding you can't trace to the textbook/PDF
  sources in `si-resources/` or your own confident, verifiable knowledge.
- No "this is frequently tested" claim without an actual PYQ backing it.
- No answer key you haven't independently re-derived (even if a source PDF
  already provides one — this project found source-provided keys were
  *mostly* reliable but not perfectly so; spot-check, don't blind-trust).
- No mnemonic that quietly drops an exception to make the acronym work.
- If source material (a PDF page, an extracted text block) is garbled or
  ambiguous, **exclude that specific claim/question rather than guess** —
  this project has an established pattern of explicitly excluding a small
  number of unrecoverable items rather than fabricating a fix (e.g. 4
  questions dropped from the AP-SI Mains diagnostic for unrecoverable
  source corruption, documented in the data file's own header comment).
