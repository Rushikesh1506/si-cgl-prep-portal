# HANDOFF — AP-SI Prep Portal

Last updated: 2026-10-22 (Claude session, handing off to Gemini for day-to-day work)

## 1. What this project is

A static, no-backend-framework exam-prep website for **AP Police SI** (Sub-
Inspector) recruitment, built for one real student ("KrishnaChetan") with
his brother ("Rushikesh") acting as developer/mentor. Earlier in the
project's life it also covered SSC CGL prep for a different person — that
work is **done and frozen**, not being extended further. All *new* work from
here on is AP-SI only.

The repo was originally called `si-cgl-portal` (SI = Sub-Inspector, CGL =
the SSC exam) — the name is historical, don't read anything into it.

## 2. Current architecture (verified facts, not assumptions)

- **Pure static site.** No build step, no bundler, no npm, no framework.
  Plain `.html` / `.css` / `.js`, deployed as a static site on **Render**
  (see `render.yaml` — publishes the whole repo root, no build command).
- **Backend = Supabase** (Postgres + PostgREST), added this session. See
  `Context/CREDENTIALS.md` for how it's wired and `Context/TECH_STACK.md`
  for the schema. The site still works fully offline/without Supabase —
  every write goes to `localStorage` first, Supabase is a best-effort
  mirror (see `supa.js`).
- **Auth = a 4-digit PIN, not real auth.** Two profiles only:
  **KrishnaChetan** (role `student`) and **Rushikesh** (role `developer`).
  See `login.html` + `auth-guard.js`. This is intentionally lightweight
  ("family-grade security", a decision made explicitly earlier in the
  project — see `Context/original/TRACKING_CONTEXT.md` §3 and §6).
- **Two "portal" generations coexist on purpose:**
  - **Old portal**: `index.html` + `script.js` + `articles.js` + `cases.js`
    + `data/day01-12_*.json`. Has deep, real Polity content (Fundamental
    Rights, DPSP, Duties) and a 12-day practice bank + 29 case files. This
    is **not being rebuilt** — it still works and is linked from the new
    hub as "Practice Portal".
  - **New portal**: `notes.html` + `notes.js` + `notes.css` + `notes-data.js`
    (the syllabus tree, 22 subjects / 95 units / 484 lessons, mostly still
    `content: null` placeholders) + `notes-content.js` (the actual authored
    HTML, keyed by `"subject/unit/lesson"` slug, kept **separate from**
    `notes-data.js` specifically so regenerating the tree never wipes
    authored content — see the comment at the top of `notes-content.js`).
- **welcome.html** is the new home/hub page (product-style landing: course
  catalog computed live from the data files, no hardcoded counts, progress
  ring, entry points to everything else).
- **mentor.html** is the developer-only analytics view (role-gated) —
  pulls the student's real Supabase data (progress, diagnostic accuracy by
  subject, self-ratings) and surfaces a "what to focus on next" list.
- **results.html** is "My Exams" — every exam attempt synced to Supabase,
  expandable to replay the full question paper with the student's answers
  highlighted, by joining `question_attempts` against the actual bank file
  the exam was built from.
- **focus.html** is the self-rating survey — full official Mains syllabus
  (124 subtopics across 11 subjects, from `syllabus-focus-data.js`), rate
  Weak/Medium/Strong per subtopic.
- **ap-mains-diagnostic.html** and **polity-practice.html** are two clones
  of the same generic timed-MCQ engine (originally `cgl/daily-exam.html`
  from the SSC-CGL era), re-branded and re-pointed at different question
  banks. See `Context/TECH_STACK.md` for exactly what differs between
  clones — if you need a THIRD exam (e.g. a Prelims diagnostic), clone one
  of these two rather than writing a new engine from scratch.

## 3. What's actually done (verified, shipped, pushed to `main`)

- Supabase backend live: 5 tables created and verified with real data in
  them (`profiles`, `study_progress`, `exam_attempts`, `question_attempts`,
  `topic_focus`).
- Login/auth-gate on every AP-SI page, with a "first login ever → straight
  to the diagnostic, every login after → Welcome" rule.
- `ap-mains-diagnostic.html` fully built and verified: 196 real questions
  from the actual **AP SI Mains 2023 GS Paper-IV** (a genuine previous-year
  paper, extracted from `ap_si_telegram/papers/mains2023_gs.txt`), every
  answer independently researched and verified (the source PDF had **no**
  answer key at all — see `Context/original/HANDOFF.md`-adjacent commit
  history for how that was done). 4 questions dropped for unrecoverable
  source corruption.
- `results.html` ("My Exams") — verified live, correctly replays a full
  196-question paper with highlighting.
- `focus.html` — full 124-subtopic self-rating survey, live.
- `mentor.html` — live, pulls real data, currently shows real (if still
  sparse) results for KrishnaChetan.
- `welcome.html` — the new hub, live, verified.
- `login.html` — redesigned several times this session per user feedback;
  current state: a real photo background (`assets/study-room.jpg`, a
  cozy-study-room stock photo) on the left, emerald/gold theme (not blue,
  not brown — the user explicitly rejected both earlier choices), flowing
  diagonal "wave" animation in the background (CSS/SVG, no video), glass
  card on the right with a working profile→PIN→Supabase flow.
- `notes.html` content ported/written so far for the **Polity** subject
  (see §4 below — this is the biggest open thread right now).
- `polity-practice.html` — **skeleton only**, not yet wired to real
  questions (see §4).

## 4. ⚠️ In-flight work — read this carefully before touching Polity content

This is the most important section for whoever picks this up next.

### What happened
The user gave two rounds of feedback on Polity notes quality:
1. First: "the depth is missing... if u ask me with that content if i will
   be able to solve means no" → triggered a depth-upgrade pass on
   Fundamental Rights (adding Articles 19-32, which had zero coverage
   before) plus writing entirely new content for ~23 previously-empty
   Polity lessons (Constitutional Framework, System of Government, Union
   Government, State Government, Local Government, Constitutional Bodies,
   Non-Constitutional Bodies), sourced from
   `si-resources/Polity Material/Indian_Polity_Laxmi-Kant-6th-Edition.pdf`
   (Laxmikanth's textbook — confirmed real, extractable text, 1547 pages).
2. Then, **after** that first round was already written, the user pasted a
   much more detailed content spec (now saved as
   `Context/original/POLITY_CONTENT_RULES.md` — **this is binding, read it**)
   requiring every topic to follow a Hook → Understand → Visualise →
   Remember → Apply → Exam traps → Recall → Test-yourself structure, with
   situational/scenario openers, mnemonics, simple CSS decision-tree
   "flows", labeled tags (`tag-must`/`tag-trap`/`tag-apply`/`tag-extra`), a
   30-second revision summary per topic, and inline click-to-reveal
   test-yourself quizzes. New CSS classes for all of this were added to
   `notes.css` (`.hook`, `.mnemonic`, `.flow`, `.testyourself`,
   `.revision-30s`, `.tag-*`) — **these are committed and live**, use them.

So a **second restructuring pass** was launched to rewrite the first
round's output onto the new spec (reusing the already-verified facts, not
re-researching) — **this is the work that got interrupted by a Claude
rate limit** (resets 2:10pm Asia/Kolkata on the day it happened; if you're
reading this later, that limit is long gone, it's just context for why
things stopped mid-way).

### Exact current state of each piece (check the actual files before assuming)

| Piece | Status | Where the output lives |
|---|---|---|
| Constitutional Framework (6 lessons) | v1 done, **v2 restructure did NOT complete** | v1: scratchpad `polity_constitutional_framework.json`. No v2 file was written. |
| System of Government (5 lessons) | v1 done, **v2 restructure did NOT complete** | v1: scratchpad `polity_system_of_government.json`. No v2 file. |
| Union Government (4 lessons) | v1 done, **v2 restructure COMPLETE** | v2: scratchpad `polity_union_government_v2.json` |
| State Government (3 lessons) | v1 done, **v2 restructure did NOT complete** | v1: scratchpad `polity_state_government.json`. No v2 file. |
| Local Gov + Constitutional/Non-Constitutional Bodies (5 lessons) | v1 done, **v2 restructure COMPLETE** | v2: scratchpad `polity_local_and_bodies_v2.json` |
| Fundamental Rights/DPSP/Duties depth-upgrade | v1 (depth upgrade) done, **v2 restructure did NOT complete** | v1: scratchpad `polity_depth_upgrade.json`. No v2 file. |
| Polity Practice MCQs (172 Qs from `Indian-polity-Questions.pdf`) | **Verification + explanations COMPLETE for all 4 batches** (172/172, despite the "failed" status messages — the work finished, only the final confirmation reply hit the rate limit) | scratchpad `polity_q_explained1.json` through `polity_q_explained4.json`, 43 each |

**"Scratchpad" means** the Claude session's temp working directory, which
Gemini will NOT have access to — it was something like
`C:\Users\<user>\AppData\Local\Temp\claude\<session-id>\scratchpad\`. **If
you are Gemini reading this and that path doesn't exist for you, this work
is lost and needs to be redone** — the source PDFs are still in
`si-resources/Polity Material/` and the methodology is fully described
above and in `Context/original/POLITY_CONTENT_RULES.md`. Nothing here has
been merged into `notes-content.js` or `data/polity_practice.js` yet — the
live site currently still shows only Fundamental Rights (basic, pre-depth-
upgrade version), DPSP, and Fundamental Duties for Polity, same as before
this round of work started. `polity-practice.html` shows "mock not found"
since `data/polity_practice.js` doesn't exist yet.

### What to actually do with this (priority order)
1. If the scratchpad files above still exist: merge the **v2 files where
   they exist** (Union Government, Local Gov+Bodies) and the **v1 files**
   for the other three topic groups (Constitutional Framework, System of
   Government, State Government, Rights and Duties depth-upgrade) into
   `notes-content.js`, matching the exact keying convention already used
   there (see `Context/TECH_STACK.md`). Then run the v1-content groups
   through the SAME restructuring instructions used for the two that
   succeeded (the full prompts are preserved in this session's transcript
   if available, or just re-derive them from
   `Context/original/POLITY_CONTENT_RULES.md` directly — same bar).
2. Build `data/polity_practice.js` from `polity_q_explained1-4.json` (172
   verified, explained MCQs) in the same shape as `data/ap_mains2023_gs.js`
   (see `Context/TECH_STACK.md` for the exact schema) — this unblocks
   `polity-practice.html`.
3. If the scratchpad files are GONE (most likely scenario for Gemini):
   re-run the pipeline from scratch using
   `si-resources/Polity Material/Indian_Polity_Laxmi-Kant-6th-Edition.pdf`
   (textbook, for notes content) and
   `si-resources/Polity Material/Indian-polity-Questions.pdf` (question
   bank, already has an answer key embedded as "Ans: (x)" after each
   question — **verify it against your own knowledge anyway**, don't
   blindly trust it; this session found the key was reliable but spot-
   checking is still required per `Context/CONTENT_RULES.md`). **Do not
   copy multi-sentence passages verbatim from either PDF** — paraphrase
   into original notes (copyright + house-style reasons).

## 5. Known bugs fixed this session (don't reintroduce them)

- **`const X = [...]` at the top of a plain `<script src="...">` does NOT
  attach to `window`.** Hit this twice (once in `results.html` trying
  `window[bankGlobal]`, once understanding why `Supa.login` needed a bare
  identifier not `window.SUPA_URL`). If you need to read a bank file's
  global by a *dynamic* name, use `new Function("return " + name)()`, not
  `window[name]`.
- **Browser caches a `?v=N` query-string'd `<script>` URL by the HTML
  document's own cached copy**, not just the script itself — bumping the
  script's version number does nothing if the *page* that references it is
  what's cached. Bump the HTML page's own cache life (hard reload /
  different query) when debugging "my content change isn't showing up."
- `notes-content.js`'s HTML used `class="box blue"` / `class="case"` /
  `class="takeaway"` / `class="example"` (the OLD portal's style.css
  classes) which **do not exist** in `notes.css` — they rendered as plain
  unstyled text. Remapped onto `notes.css`'s native `.callout
  info|tip|warn` + added `.art` / `.steps` helpers. **Any new Polity
  content must use the NEW class names** (`.callout`, `.art`, `.steps`,
  `.hook`, `.mnemonic`, `.flow`, `.testyourself`, `.revision-30s`,
  `.tag-*`) — never the old `style.css` names, they won't render.
- `ap-mains-diagnostic.html`'s result page had a hardcoded "wrong × 0.50"
  string regardless of the actual `CFG.negative` value — fixed to branch on
  whether negative marking is actually configured. If you clone this engine
  again, check `CFG.negative` is read dynamically everywhere, not assumed.

## 6. Known limitations / non-goals

- `si-resources/` and `ssc-previous-papers/` are gitignored (144MB+13MB of
  reference PDFs) — they exist on the developer's machine but won't be in
  a fresh clone unless someone re-adds them. If Gemini is running in an
  environment without these files, the Polity PDF-sourcing work in §4
  cannot be done until they're provided again.
- No automated tests exist anywhere in this repo. "Verification" in this
  project has always meant: open the page in a real/headless browser,
  interact with it, and read back the DOM/localStorage/network state. See
  `Context/GEMINI_RULES.md` for how to keep doing this.
- `si-syllabus.js` is dead-ish code from an abandoned early attempt (see
  `Context/original/HANDOFF.md` §2.3) — still wired into `index.html` and
  `script.js` harmlessly. Nobody has decided to remove it; leave it unless
  asked.
- The GitHub push credential on the developer's machine has needed
  re-authentication mid-session before (it self-resolved once as a slow,
  not actually stuck, push) — if a `git push` seems to hang, it may just be
  slow, not broken; don't assume failure within the first couple of
  minutes.

## 7. Session log

Keep adding entries here, newest on top, one short paragraph per session,
whoever's doing the work (Gemini or Claude).

- **2026-10-22 (Claude):** Built Supabase backend, login/auth-gate, AP-SI
  Mains diagnostic (196 real Q, verified), results/My-Exams page,
  mentor/developer view, focus survey, new Welcome hub, several rounds of
  login.html visual redesign per feedback. Started a large Polity
  content-depth pass (textbook-sourced, ~23 new lessons + FR/DPSP/Duties
  deepening) and a Polity practice-MCQ pipeline (172 Qs, verified +
  explained), both using parallel background agents; mid-way through a
  second "restructure onto the new POLITY_CONTENT_RULES.md spec" pass when
  the session hit a Claude rate limit. Created this `Context/` folder and
  handed off to Gemini for continued day-to-day work. **Nothing in §4 has
  been merged into the live site yet — that's the very next task.**
