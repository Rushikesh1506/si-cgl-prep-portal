# NOTES_PAGE.md — why `notes.html` exists alongside `index.html`

Date: 2026-10-21
Author: senior frontend (portal maintainer)
Reference site studied: `https://appolicehub.com/notes/history/ancient-india/pre-history`

---

## TL;DR

- `index.html` (the original portal) is **kept exactly as it is**. Nothing in it was changed.
- A **new** page, `notes.html`, was added. It is a subject-wise study-notes reader modelled on the AP-Police-Hub structure: **Subject › Unit › Lesson**, every lesson its own page.
- The new page ships as **three new files only** (`notes.html`, `notes.css`, `notes.js`) plus a generated data file (`notes-data.js`). It does **not** touch `style.css`, `script.js`, `articles.js`, or any existing content.

---

## What the OLD `index.html` does (unchanged)

`index.html` is the **practice portal**. It is a single-page app driven by
`articles.js` + `script.js` and it is organised around one deep topic family:

- **Fundamental Rights (Art. 12–35)** and **DPSP (Art. 36–51)** — 34 hand-written
  topic pages, each with notes and a mini-mock.
- A **12-day audited question bank** (`data/day01–12`), the **FR 120-bank**, and a
  **GS flash bank**.
- A **Case Files** tab with 29 landmark judgments.
- Mock/exam engine, per-question palette, timer, score analysis, `si_done`
  progress tracking.

It is excellent at **drilling polity and mixed GS objective questions**, and it is
deployed to Render as a static site (`render.yaml`). It is a *practise-and-quiz*
tool, not a *read-the-syllabus-end-to-end* tool.

### Why we did not extend it in place

1. **Scope mismatch.** The exam needs ~15 subjects (History, Geography, Economy,
   Science, Environment, AP studies, Arithmetic, Reasoning, English, Telugu,
   Current Affairs, Disaster Management, GK). `index.html`'s navigation tree
   (`NAV_TREE` in `script.js`) is hard-coded around polity/FR. Bolting 484 lesson
   pages onto that array would make a 1000-line tree and a confusing sidebar.
2. **Risk.** FR/DPSP content is the most polished, exam-critical material in the
   repo. Editing `articles.js`/`script.js` to add a whole new hierarchy risks
   regressions in the banks, cases and mock engine that already work.
3. **Different UX.** A notes reader wants a **scannable three-level tree**, fast
   lesson switching, breadcrumbs, prev/next, and a "not written yet" placeholder —
   not a quiz toolbar. That is a different information architecture.

So the new page is **additive**: it reuses the same conventions (localStorage
progress, static files, no build step, Render-compatible) but lives in its own
files.

---

## What the NEW `notes.html` does

A standalone, no-build, static study-notes reader.

| File | Role |
|---|---|
| `notes.html` | Page shell: top bar, sidebar, breadcrumb, hero, article, footer |
| `notes.css` | Self-contained stylesheet (design tokens, responsive, print, reduced-motion) |
| `notes.js` | Rendering engine — builds the tree, opens lessons, search, progress, prev/next |
| `notes-data.js` | **Generated** data: the full Subject › Unit › Lesson tree (content empty) |

### Structure mirrored from appolicehub.com

The tree in `notes-data.js` is generated from
`si-resources/aphub_structure.txt` (601 note URLs pulled from the reference site's
`sitemap.xml`). Current counts:

- **22 subjects**
- **95 units**
- **484 lessons**

Subjects include: Indian History (ancient / medieval / modern), Polity,
Geography, Economy, General Science, Environment & Ecology, **Andhra Pradesh**
History / Movement / Society / Culture / Geography / Economy, Arithmetic (SI & PC),
Reasoning (SI & PC), English, Telugu (Mains Paper-2), Current Affairs (India & AP),
Disaster Management, and General Knowledge.

### How a lesson is presented

- **Sidebar**: collapsible Subject → Unit → Lesson tree with per-subject lesson
  count, search box, completed ticks, and a "soon" tag on unwritten lessons.
- **Lesson page**: breadcrumb (`Subject › Unit › Lesson`), hero with title,
  reading-time chip and status chip, then the article body.
- **Unwritten lessons**: render a clear **🚧 placeholder** that also documents the
  intended page structure (Concept / Key facts / AP angle / PYQ + traps / Practice)
  so writers know exactly what to fill.
- **Navigation**: Previous / Next across the whole flat lesson order, plus
  **Mark as complete**.
- **Progress**: saved in this browser under `si_notes_done_v1` (separate key from
  the old portal's `si_done`, so the two pages never clash).

### UI improvements over the reference site

The reference is a React SPA served from a bundled `/assets` build. The new page
is plain static HTML/CSS/JS (loads instantly, works offline, deploys anywhere) and
adds: a denser scannable tree with counts, a "soon vs written" status, search
across all 484 lessons, keyboard-focusable controls, `aria-expanded` states,
reduced-motion and print support, and a documented placeholder so empty pages look
intentional rather than broken.

---

## How to write content later

1. Open `notes-data.js`.
2. Find the lesson object, e.g.
   `{ lesson: "Indus Valley", slug: "indus-valley", minutes: 18, content: null }`.
3. Replace `null` with an HTML string using the portal's existing classes
   (`callout info`, `callout tip`, `callout warn`, `table.rev`, `box`, etc. — add
   matching CSS to `notes.css` if needed).
4. Save. The sidebar "soon" tag disappears and the page renders the notes.

> Regenerating the tree: the generator script lived at
> `%TEMP%\opencode\build_notes_tree.ps1` and reads
> `si-resources/aphub_structure.txt`. Re-run it only if the subject list changes;
> it will **overwrite** `notes-data.js`, so re-apply any written `content` first
> (or move content into a separate `notes-content.js` keyed by lesson slug if the
> tree will be regenerated often).

---

## Access

- Local: `http://localhost:8080/notes.html` (served by `py -m http.server 8080`
  from the repo root) while the old portal is at `http://localhost:8080/index.html`.
- The two pages cross-link: `notes.html` → "Practice Portal" / "English", and you
  can add a link back from `index.html`'s header if desired (not done, to keep the
  old file untouched).

---

## Non-goals / deliberately unchanged

- `index.html`, `style.css`, `script.js`, `articles.js`, `cases.js`, all `data/*`
  banks, `english/*`, `cgl/*`, `render.yaml` — **untouched**.
- No new dependencies, no bundler, no framework.
- `SYLLABUS_MAP.md` and `TRACKING_CONTEXT.md` remain the planning docs; this page
  is the first structural implementation that matches the syllabus breadth.
