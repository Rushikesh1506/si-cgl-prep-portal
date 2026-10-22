# TECH_STACK — technical reference

## Stack
- HTML/CSS/vanilla JS only. No framework (no React/Vue/etc.), no bundler, no
  npm, no TypeScript, no build step of any kind.
- One external library, loaded via CDN script tag on pages that need it:
  `@supabase/supabase-js@2.45.4` (UMD build, from jsdelivr). Pinned version,
  don't bump without checking the pages that depend on it still work.
- Backend: Supabase (Postgres + PostgREST + Supabase Auth is NOT used —
  auth is custom PIN-based, see `Context/CREDENTIALS.md`).
- Hosting: Render static site (`render.yaml`), auto-deploys from `main`.
- Fonts: Google Fonts (`Inter` + `Fraunces`), loaded via `<link>` in
  `notes.html`/`welcome.html`.

## Repo layout (top-level, AP-SI-relevant files only — there's also a frozen
SSC-CGL subtree under `cgl/`, `english/`, `data/day*` etc. that's done and
not being extended)

```
si-cgl-portal/
├── Context/                    ← YOU ARE HERE (this handoff folder)
├── welcome.html / .css / .js   ← new hub/landing page
├── login.html                  ← PIN auth, photo+wave-animation theme
├── auth-guard.js               ← include as FIRST <head> script on any gated page
├── notes.html / .css / .js     ← new subject-notes reader
├── notes-data.js               ← the syllabus TREE (subject>unit>lesson), content:null placeholders
├── notes-content.js            ← the actual authored HTML, keyed separately (see below)
├── focus.html / .js            ← self-rating survey
├── syllabus-focus-data.js      ← the 124-subtopic/11-subject syllabus data for focus.html
├── mentor.html                 ← developer-only analytics view
├── results.html                ← "My Exams" history + paper replay
├── ap-mains-diagnostic.html    ← AP SI Mains 2023 diagnostic (196 Q, real paper)
├── polity-practice.html        ← Polity practice MCQs (skeleton; bank not yet built)
├── supa-config.js              ← Supabase URL + anon key (public, see CREDENTIALS.md)
├── supa.js                     ← thin Supabase wrapper (Supa.* functions)
├── supabase_schema.sql         ← the 5-table schema + RLS policies (idempotent, re-runnable)
├── POLITY_CONTENT_RULES.md     ← (superseded by Context/CONTENT_RULES.md, kept for history)
├── data/
│   └── ap_mains2023_gs.js      ← the 196-question diagnostic bank (AP_MAINS_MOCKS global)
│   └── (polity_practice.js — NOT YET CREATED, see Context/NEXT_TASKS.md)
├── assets/
│   └── study-room.jpg          ← login page background photo
├── si-resources/               ← GITIGNORED, large reference PDFs (not in a fresh clone)
│   └── Polity Material/
│       ├── Indian_Polity_Laxmi-Kant-6th-Edition.pdf   (1547pp, clean extractable text)
│       ├── Indian-polity-Questions.pdf                (428pp, 1700+ Q with embedded "Ans: (x)")
│       └── Polity-Material-1.pdf                      (SCANNED IMAGES, not text-extractable)
├── ap_si_telegram/              ← separate Telegram-bot side-project, own render.yaml, not part of the main site
│
│  --- old/frozen portal, still live, not being rebuilt ---
├── index.html / script.js / articles.js / cases.js / takeaways.js / lessons-a.js / lessons-b.js / passages.js / pyq.js
└── si-syllabus.js               ← dead-ish code from an abandoned attempt, harmless, leave alone
```

## The two data-vs-content split patterns (important, don't break these)

### `notes-data.js` vs `notes-content.js`
`notes-data.js` defines `const NOTES_TREE = [...]` — subjects → units →
lessons, each lesson `{ lesson, slug, minutes, content: null }`. This file
can be regenerated from a structure script at any time (see
`Context/original/HANDOFF.md` §7) — **so authored content must never be
written into it directly**, or regenerating wipes it. Instead,
`notes-content.js` defines `const NOTES_CONTENT = { "subjectSlug/unitSlug/lessonSlug": "<html string>", ... }`.
`notes.js`'s `openLesson()` checks `NOTES_CONTENT[key]` first, falls back
to the tree's own `content` field (null → shows a placeholder). **Any new
Polity (or other subject) content goes into `notes-content.js`, keyed
exactly like this** — get the subject/unit/lesson slugs from `notes-data.js`
itself, don't guess them.

### The quiz-engine clones
`ap-mains-diagnostic.html` and `polity-practice.html` are both clones of an
older SSC-CGL engine (`cgl/daily-exam.html`). The pattern for a new exam: **clone
one of these two, don't write a new engine.** Each clone expects:
- A bank file (e.g. `data/ap_mains2023_gs.js`) defining
  `const <SOME_NAME>_MOCKS = [{ id: "...", label: "...", timeLimitMin: N,
  questions: [{ q, options: [4 strings], answer: 0-3 index, explanation: "",
  trapcat: "<topic tag>", level: "L1 Direct"|"L2 Application"|"L3 Trap" }, ...] }]`.
- The HTML file's own inline script reads `?mock=<id>` from the URL,
  finds that id in the bank array, and runs the exam. Look for
  `const DAILY_MOCKS = (typeof <SOME_NAME>_MOCKS !== "undefined") ? <SOME_NAME>_MOCKS : [];`
  near the top of the inline `<script>` — that's the one line you change
  per clone, along with the `<script src="data/....js">` tag.
- **⚠️ `const <SOME_NAME>_MOCKS = [...]` at the top of a plain script tag
  does NOT become `window.<SOME_NAME>_MOCKS`.** Both clones already handle
  this correctly (they reference the bare identifier, not `window[...]`) —
  if you build a NEW page that needs to read a bank file's global
  *dynamically by name* (like `results.html` does, to know which bank
  matches which `exam_key`), you MUST use
  `new Function("return typeof X !== 'undefined' ? X : null")()`, not
  `window[name]`. This bit `results.html` once this session (see
  `Context/HANDOFF.md` §5) — the fix is already in place there, just don't
  reintroduce the bug elsewhere.
- Marking scheme is set via `CFG.correct` / `CFG.negative` near the top of
  the inline script — `ap-mains-diagnostic.html` uses `1/0` (matching the
  real paper's own "no negative marking" rule, confirmed from the source
  paper's own instructions); `polity-practice.html` uses `2/0.5` (standard
  SSC/AP-SI convention, since it's generic practice not a specific real
  paper replica).
- On finish, the engine writes to `localStorage` (`LS_KEY`, per-mock), and
  — if `window.Supa` and a session exist — also calls
  `Supa.saveAttempt(...)` then `Supa.saveQuestionAttempts(...)` (see the
  `syncAttempt()` function in either clone). This is what feeds
  `mentor.html` and `results.html`.

## Supabase schema (from `supabase_schema.sql` — the actual source of truth, read it directly for exact column types)

| Table | Key columns | Purpose |
|---|---|---|
| `profiles` | `id (uuid pk)`, `name` (unique: `"KrishnaChetan"` / `"Rushikesh"`), `pin_hash`, `role` (`"student"`/`"developer"`) | the 2 user identities |
| `study_progress` | `profile_id`, `topic_key`, `done` | replaces `si_notes_done_v2` localStorage, one row per done lesson/topic |
| `exam_attempts` | `id`, `profile_id`, `exam_key`, `score`, `total`, `pct`, `time_taken_sec`, `submitted_at` | one row per finished exam |
| `question_attempts` | `attempt_id (fk)`, `profile_id`, `exam_key`, `q_index`, `topic`, `trapcat`, `picked`, `correct`, `is_correct` | per-question results, joined against the bank file by `q_index` to replay a paper |
| `topic_focus` | `profile_id`, `topic_key`, `rating` (`weak`/`medium`/`strong`) | from `focus.html` |

RLS is enabled on all 5 tables with **permissive policies for the `anon`
role** (read+write allowed) — this is a deliberate, documented tradeoff (see
`Context/CREDENTIALS.md` §1 and `Context/original/TRACKING_CONTEXT.md`),
not an oversight. Don't "harden" this without the user asking — it would
break the app's localStorage-first, best-effort-sync design, which assumes
the anon key can always write.

## Important localStorage keys (still used alongside Supabase, as the offline-first layer)

- `si_session` — `{id, name, role}`, the current login
- `si_notes_done_v2` — Set of `"subject/unit/lesson"` keys marked done
- `si_topic_focus` — `{topicKey: "weak"|"medium"|"strong"}`
- `si_seen_onboarding` — first-visit nudge flag (login.html)
- `si_first_login_<name>` — per-profile "has this person ever logged in
  before" flag, drives the "first login → diagnostic, else → welcome" rule
- `apsi_diag_<mockId>_v1` — raw exam state for the AP-mains-diagnostic clone
- `apsi_diag_last_result` / `apsi_diag_weak_subjects` — summary data read by
  `welcome.html` and `focus.html` respectively
- `polity_practice_<mockId>_v1` / `polity_practice_last_result` — same
  pattern for the Polity practice clone

## CSS component reference (all in `notes.css`, theme-aware light/dark)

| Class | Use for |
|---|---|
| `<span class="art">Art. 123</span>` | inline article/rule-number badge |
| `<div class="callout info\|tip\|warn">` | blue/green/amber boxes (background facts / takeaways / exceptions) |
| `<div class="steps"><ol><li>` | numbered step-by-step breakdown, plain |
| `<table class="rev">` | comparison/summary tables |
| `<div class="hook"><b class="q">Scenario</b>...` | situational opener (new, per `Context/CONTENT_RULES.md` §2-3) |
| `<div class="mnemonic">🧠 <span class="word">ACRONYM</span> — ...` | memory-trick box |
| `<div class="flow"><div class="step"><span class="n">1</span>...</div><div class="arrow">↓</div>...` | simple circled-number decision-chain/flowchart |
| `<div class="testyourself"><details><summary>Q...</summary><div class="reveal">...</div></details>` | click-to-reveal inline mini-quiz |
| `<div class="revision-30s"><h4>30-second revision</h4>...` | condensed top-of-page summary |
| `<span class="tag-must\|tag-trap\|tag-apply\|tag-extra">Label</span>` | inline label pills |

## Known one-off scripting notes
- On the primary developer's machine, Python's bare `python`/`python3`
  commands are flaky (can hang waiting on an interactive prompt or resolve
  to a Microsoft Store stub) — always use the full interpreter path AND
  pass `-I` (isolated mode) when running one-off content-pipeline scripts,
  and avoid heredocs for multi-line Python — write a `.py` file and execute
  it, don't pipe via `<<EOF`.
