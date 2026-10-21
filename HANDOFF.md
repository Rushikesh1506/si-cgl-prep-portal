# HANDOFF.md — AP SI Prep Portal: what we did, current state, what's next

Last updated: 2026-10-21
Folder: `C:\development\codebase\si-cgl-portal` (static HTML/CSS/JS, Render static host)
Companion docs: `TRACKING_CONTEXT.md` (login/tracking decisions), `SYLLABUS_MAP.md` (syllabus + 16-week plan), `NOTES_PAGE.md` (why the new notes page exists).

---

## 1. Big picture

Building a **syllabus-first study + tracking system for AP-SI** aspirants.

- **A (brother)** — main focus. Needs depth: notes, weak-question analysis, drills.
- **B (friend)** — secondary, inconsistent. Lightweight tracking only.
- Frontend stays **static on Render** (`render.yaml` unchanged). Backend later = **Supabase free**.
- Mentor view is **A-centric**, never an A-vs-B leaderboard.

The exam (verified from official syllabus + real Mains 2023 paper):
- **Prelims**: Paper-I Arithmetic & Reasoning (100Q), Paper-II General Studies (100Q).
- **Mains**: Paper-I English (descriptive), Paper-II Telugu (descriptive), Paper-III Arithmetic+Reasoning (200Q), Paper-IV GS (200Q).
- **Mains 2023 GS reality**: ~40% Current Affairs, ~40Q degree-level Science, rest static GS — this shaped the syllabus map and notes tree.

---

## 2. What we did this session (in order)

### 2.1 Syllabus research + planning docs (earlier)
- Inventoried the whole portal (44 study topics in `articles.js`, `data/day01–12` banks, `fr120_bank.json`, `gs_bank.json`, English banks, CGL papers, 40 localStorage keys).
- Read the **real Mains 2023 GS paper** (`ap_si_telegram/papers/mains2023_gs.txt`, 200Q) and derived the true subject distribution.
- Wrote **`SYLLABUS_MAP.md`** — subtopic-level expansion of every syllabus head, portal coverage vs gap (done/partial/missing), completion standards, and a **16-week week-wise plan** (Weeks 1–6 Prelims, 7–16 Mains). Identified biggest gaps: Current Affairs, degree-level Science, History, Geography, Economy, AP-specific GS, English/Telugu descriptive.
- Wrote **`TRACKING_CONTEXT.md`** — locked login=centrally-tracked-PIN, Supabase schema (5 tables), 3-phase plan.

### 2.2 Studied the reference site (appolicehub.com)
- The user asked to mirror `https://appolicehub.com/notes/history/ancient-india/pre-history`.
- It is a **React/Vite SPA**; content is client-rendered, so raw fetches only show the shell.
- Pulled its **`sitemap.xml`** → **601 note URLs** → decoded the full **Subject › Unit › Lesson** tree.
- Saved the structure to **`si-resources/aphub_structure.txt`** (601 paths).
- Counts: **22 subjects, 95 units, 484 lessons**.

### 2.3 First attempt — extended the old portal (superseded)
- Added `si-syllabus.js` (skeleton topics) + wired into `script.js` NAV_TREE + `index.html`.
- **This was abandoned per user instruction** ("keep existing, write a new one"). It is still wired in but harmless; decide later whether to remove it (see §6).

### 2.4 Built the NEW notes page (kept, this is the main deliverable)
User's brief: **keep `index.html` and existing polity content untouched; write a NEW html mirroring the reference and beat its UI.**

New files (all standalone, no build step):

| File | Lines | Role |
|---|---|---|
| `notes.html` | ~110 | Page shell: reading bar, top bar, sidebar, hero, article+TOC grid, pager |
| `notes.css` | ~430 | Full design system: light+dark tokens, Inter+Fraunces, responsive, print, reduced-motion |
| `notes.js` | ~300 | Engine: tree render, search, TOC scroll-spy, pager, progress ring, theme toggle, reading bar |
| `notes-data.js` | ~726 | **Generated** tree (22 subjects / 95 units / 484 lessons), every lesson `content: null` |
| `NOTES_PAGE.md` | — | Rationale: why new html, what old html does |
| `si-resources/aphub_structure.txt` | 601 | Source structure reference |

Generator script (temp, not committed): `%TEMP%\opencode\build_notes_tree.ps1` — reads `aphub_structure.txt`, writes `notes-data.js`.

### 2.5 UI upgrade (v2)
First version was called "below average". Rewrote to premium:
- Inter + **Fraunces** display serif, fluid type, gradient brand mark.
- **Light/dark theme** toggle (key `si_notes_theme`).
- **Reading-progress bar** (top), **on-this-page TOC** with `IntersectionObserver` scroll-spy.
- Sidebar: guide-lines, active dot, per-subject counts, "soon" badges, live stats, `/` to focus search, circular **progress ring**.
- Placeholder pages: centered card + **6-step blueprint grid** (Concept / Key facts / AP angle / PYQ+traps / Diagram / Practice).
- Pager shows prev/next **lesson titles**; green mark-complete button.
- Progress stored under **`si_notes_done_v2`** (separate from old `si_done`).

### 2.6 Local serving
- Served with `py -m http.server 8080` (Python 3.14 via `py`, `python` alias is broken, no `node`/`npx`).
- Old portal: `http://localhost:8080/index.html` · New notes: `http://localhost:8080/notes.html`.

---

## 3. Current state (accurate as of now)

### Files that exist and work
- **Old portal (unchanged, working):** `index.html`, `style.css`, `script.js`, `articles.js`, `cases.js`, `english.js`, `takeaways.js`, `lessons-a/b.js`, `passages.js`, `pyq.js`, `data/*`, `english/*`, `cgl/*`, `dashboard.html`.
  - Note: `script.js` (merge block ~line 100) and `index.html` (~line 174) DO reference `si-syllabus.js` from §2.3. `si-syllabus.js` also exists. This is the only modification to old files.
- **New notes page (working):** `notes.html`, `notes.css`, `notes.js`, `notes-data.js`.
- **Docs:** `SYLLABUS_MAP.md`, `TRACKING_CONTEXT.md`, `NOTES_PAGE.md`, `HANDOFF.md` (this file).
- **Reference:** `si-resources/aphub_structure.txt`.

### Verified
- All element IDs used by `notes.js` exist in `notes.html` (checked).
- Brace balance OK in `notes.js`. Node not available so no formal `--check`.
- Tree counts verified: 22/95/484.

### Not done
- **No lesson content written yet.** All 484 lessons are `content: null` → show the placeholder.
- No Supabase / login / tracking implemented (Phase 1 not started).
- No lesson-to-question-bank link yet (notes page has no practice questions wired).

---

## 4. Repo conventions to follow

- **Static only.** No bundler, no npm, no framework. Plain `.html`/`.css`/`.js`.
- Data files export a global const (e.g. `const NOTES_TREE = [...]`), loaded via `<script src>`.
- localStorage for progress; separate keys per feature to avoid clashes.
- `render.yaml` must stay unchanged (static deploy).
- Don't edit working polity/quiz content when adding new things — prefer new files.
- Comments: the repo uses fairly heavy explanatory comments; match that tone in new files.

---

## 5. What we are planning (next)

### Immediate (this feature)
1. **Decide on `si-syllabus.js`** — either remove it (revert the 2 lines in `script.js` + 1 in `index.html`) or repurpose. It is currently dead weight / duplicate of `notes-data.js`.
2. **Write lesson content** into `notes-data.js` (replace `content: null` with HTML strings). Best path: pick high-yield lessons first — e.g. Ancient India (Indus Valley, Vedic), Polity, AP History — following the 16-week plan order in `SYLLABUS_MAP.md`.
   - Content format = HTML using `callout info/tip/warn`, `table.rev`, `.inshort`, headings H2/H3 (H2 auto-appears in the TOC).
   - **Risk:** regenerating `notes-data.js` from the script overwrites content. If the tree will change often, move content to a separate `notes-content.js` keyed by lesson slug and merge in `notes.js`.
3. Optionally add **practice MCQs per lesson** (link to `data/*` banks or inline questions) — the notes page currently has no quiz surface.

### Phase 1 — Login + tracking (per `TRACKING_CONTEXT.md`)
4. Supabase project + 5 tables (`profiles`, `study_progress`, `exam_attempts`, `question_attempts`, `topic_mastery`) + RLS.
5. `login.html` (A/B + PIN) + `si_session`; tiny `supa.js` wrapper.
6. Patch quiz/exam submits (`script.js`, `english/app.js`, `cgl/*`) to write to Supabase, localStorage as offline fallback.
7. `mentor.html` — A deep panel (trend, trapcat table, weak list) + B mini row.

### Phase 2/3
8. Wrong-question analysis (A only) from `question_attempts`.
9. Drill generation from weakest `trapcat`/topic pools.

### Content gaps to fill (from `SYLLABUS_MAP.md`)
- 🔴 Highest: Current Affairs track, degree-level Science, History, Geography, Economy, AP-specific GS.
- 🟡 Medium: English descriptive, Telugu descriptive, AP-SI-specific Reasoning.

---

## 6. Open questions / risks

- **`si-syllabus.js` cleanup not requested yet** — confirm before touching `script.js`/`index.html`.
- **Content-vs-regeneration conflict** in `notes-data.js` (see §5.2) — plan a content-merge strategy before writing lots of lessons.
- **No `node`** in this environment — JS syntax checks are manual/brace-count only.
- **`notes.css` uses `color-mix()`** — fine in modern browsers; verify if very old browsers matter.
- **Reference site content is copyrighted** — mirror the *structure* only; author original notes, don't scrape/reproduce their text.

---

## 7. How to run / where things are

```
Serve:      py -m http.server 8080   (from C:\development\codebase\si-cgl-portal)
Old portal: http://localhost:8080/index.html
New notes:  http://localhost:8080/notes.html
Regen tree: run build_notes_tree.ps1 logic against si-resources/aphub_structure.txt  -> notes-data.js
```
