# PROJECT_CONTEXT — single-file long-term reference

This file is the "read only this one thing" version. Each section below is a
condensed pointer into its own dedicated file for full detail — read this
first, then follow the links for anything you need to act on.

---

## HANDOFF

**What this is:** A static HTML/CSS/JS exam-prep site for one real AP Police
SI aspirant ("KrishnaChetan", student) with his brother ("Rushikesh",
developer/mentor). An earlier SSC-CGL prep thread for a different person is
done and frozen. No framework, no build step, deployed on Render, backed by
Supabase (added this session). Full detail → **`Context/HANDOFF.md`**.

**Architecture in one paragraph:** Two notes "portals" coexist on purpose —
an old, working, frozen one (`index.html`/`articles.js`/`script.js`) and a
new one being actively built (`notes.html`/`notes-data.js`/
`notes-content.js`, deliberately split so regenerating the syllabus tree
never wipes authored content). `welcome.html` is the new hub. `login.html`
gates everything via a 4-digit PIN (not real auth, a deliberate "family-
grade" tradeoff). `supa.js`/`supa-config.js` wrap Supabase, which mirrors
every localStorage write best-effort. `ap-mains-diagnostic.html` and
`polity-practice.html` are two clones of one generic timed-MCQ engine.
`mentor.html` and `results.html` read the Supabase data back out for the
developer and student respectively.

---

## RULES

All study content (notes, MCQs, explanations) must follow a strict,
user-specified pedagogical spec: Hook → Understand → Visualise → Remember →
Apply → Exam traps → Recall → Test yourself, with situational openers,
mnemonics, decision-tree visuals, labeled tags (must-remember / exam-trap /
application / extra-depth), a 30-second revision summary, and inline
click-to-reveal quizzes. Never invent facts, case law, or mnemonics that
hide an exception. Every MCQ explanation must cover why-correct,
why-the-tempting-wrong-answer-is-wrong, and the exact concept tested. A
self-validation protocol (read it fresh, attempt the quiz blind, self-rate
5 axes, fix anything below 4/5) must run before anything is called "done."
Full detail, including the user's own verbatim spec → **`Context/CONTENT_RULES.md`**.

---

## CREDS

No `.env`, nothing secret in the traditional sense. The one external
service is Supabase: its anon/publishable key lives openly in
`supa-config.js` (by Supabase's own design — RLS policies, not key secrecy,
are the real gate). The ONE genuinely sensitive credential used this
session (a Supabase personal access token, for one-time schema creation via
the Management API) was never committed anywhere and isn't needed again —
future schema changes go through the Supabase Dashboard's SQL Editor
directly. Full detail → **`Context/CREDENTIALS.md`**.

---

## TECH STACK

Plain HTML/CSS/JS, one CDN library (`supabase-js@2.45.4`), Render static
hosting, Supabase Postgres backend (5 tables: `profiles`, `study_progress`,
`exam_attempts`, `question_attempts`, `topic_focus`). Key contracts to
preserve: the `notes-data.js`/`notes-content.js` split, the quiz-engine
bank-file schema (`{id, label, timeLimitMin, questions:[{q, options[4],
answer, explanation, trapcat, level}]}`), and the fact that a plain
`const X = [...]` in a `<script src>` is NOT `window.X` (bit this project
twice already — use `new Function("return X")()` if you need it by a
dynamic name). Full file-by-file map, schema details, localStorage key
list, and CSS component reference → **`Context/TECH_STACK.md`**.

---

## CURRENT STATUS

Shipped and verified: Supabase backend, login/auth-gate, the 196-question
AP-SI Mains diagnostic (real previous-year paper, independently verified
answers), results/My-Exams replay, developer mentor view, focus survey, the
new Welcome hub, and several rounds of `login.html` visual redesign.

**Mid-flight, not yet merged into the live site:**
- A large Polity content expansion (~23 new lessons + a Fundamental-Rights
  depth upgrade) written against an earlier, plainer spec, then a second
  pass to restructure it onto the final `CONTENT_RULES.md` spec — 2 of 6
  restructuring batches finished before the work was interrupted by a rate
  limit; the other 4 exist only in their pre-restructure form (still
  factually solid, just not yet in the final pedagogical shape).
- A 172-question Polity practice MCQ bank — verification + explanations
  for all 172 are reported complete, but not yet assembled into
  `data/polity_practice.js`, so `polity-practice.html` currently shows
  "mock not found."

Everything above was being tracked in a Claude session's temp scratchpad
directory that Gemini will likely NOT have access to — check immediately
and report which case you're in. Full detail, exact file names, and the
resume procedure → **`Context/HANDOFF.md`** §4 and **`Context/NEXT_TASKS.md`**.

---

## NEXT ACTIONS (priority order)

1. Determine whether the in-flight Polity work (above) is recoverable;
   merge or redo accordingly.
2. Build `data/polity_practice.js` from the verified MCQ batches (or
   redo the extraction+verification if unrecoverable) and confirm
   `polity-practice.html` runs a real exam.
3. Ask the user which subject to tackle after Polity — don't assume.
4. Lower priority: revisit `si-syllabus.js` cleanup, reconsider
   `mentor.html`'s UI once real usage data exists, consider a
   mistake-bookmarking feature if asked.

Full detail → **`Context/NEXT_TASKS.md`**.

---

## OPEN QUESTIONS

Which subject comes after Polity; whether to remove `si-syllabus.js`;
whether the permissive-RLS "family-grade" security model should be
re-confirmed now that real data exists; how much of the interrupted
restructuring work actually survived; what time limit to set on the new
Polity practice exam; whether a mistake-bookmarking feature is wanted.
None of these should be decided unilaterally — full detail and reasoning
for each → **`Context/OPEN_QUESTIONS.md`**.
