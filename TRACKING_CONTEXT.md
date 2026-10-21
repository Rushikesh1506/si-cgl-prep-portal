# AP-SI Prep — Tracking + Login Context

Date: 2026-10-13
Folder: `si-cgl-portal` (static HTML/CSS/JS, hosted on Render static)

## 1. Goal
- Prepare **A (brother — main focus)** for **AP-SI** exam.
- **B (friend — inconsistent / secondary)** also takes exams, needs basic tracking only.
- Track **study progress + exam results centrally** (currently not tracked).
- For **A only**: analyse **wrong questions** → auto-prepare **drill / course** from weak topics.

## 2. Current state (important)
- Static site, no backend, no login.
- All progress is per-browser `localStorage`, mentor cannot see it:
  - `si_done` → completed notes/topics (index.html / script.js)
  - `eng_best`, `eng_last` → English topic best score + wrong `trapcat` list (script.js)
  - `cgle_best`, `cgle_last`, `cgle_done` → English standalone (english/app.js, ap_si_telegram/app.js)
  - `cgl_exam_paper02_v1 ... paper05, mock1-4`, `daily_*` → full/daily exam state (cgl/daily-exam.html, cgl/exam*.html)
  - `dashboard.html` reads `cgle_best` + `cgl_exam_*` locally only.
- Content: AP-SI GS notes + 29 case files + 12-day 45Q bank (`data/day*_*.json`, `fr120_bank.json`) + CGL English + CGL full papers (Paper 02-05, Mock 1-4).

## 3. Decisions (locked)
1. **Login = PIN (simple), but centrally tracked.** No anonymous local-only mode. Flow: pick profile `A` / `B` → enter 4-digit PIN → session. PINs stored hashed in backend, mentor can reset.
2. **Backend = Supabase free** (Postgres + Auth custom PIN + JS client). Keep frontend static on Render, just add Supabase JS sync layer. No server migration.
3. **Mentor view = A-centric, not A-vs-B leaderboard.**
   - A: full depth — study %, exam trend, wrong-question pattern (`trapcat`/topic-wise), weak-topic list → drill suggestion.
   - B: lightweight row — last active, attempts, best scores only. No deep analysis.
4. **Phase 1 only now = login + tracking.** Course/drill auto-generation is Phase 3, but schema must capture per-question wrong data from day one.

## 4. What to track (minimum schema)
Table `profiles`: `id, name ('A'|'B'), pin_hash, role ('student'|'mentor'), created_at`
Table `study_progress`: `profile_id, topic_id, done (bool), updated_at` — replaces `si_done` / `cgle_done`.
Table `exam_attempts`: `id, profile_id, exam_key (e.g. 'daily_oct9_polity1','cgl_exam_paper05_v1'), score, total, pct, time_taken_sec, submitted_at`
Table `question_attempts`: `attempt_id, profile_id, exam_key, q_index, q_text_hash, topic, trapcat, level, picked, correct, is_correct` — **this powers wrong-question analysis for A.**
Table `topic_mastery` (derived/cached): `profile_id, topic/trapcat, attempts, accuracy, tier (mastered/revise/weak), updated_at`

Existing local keys map 1:1 to above so old data can be one-time migrated via Export JSON → Import.

## 5. Phase plan
- **Phase 1 — Login + tracking layer:**
  1. Supabase project + tables above + RLS (students see own rows, mentor sees all).
  2. `login.html` (A/B + PIN) + session in `localStorage` (`si_session`).
  3. Tiny `supa.js` wrapper; patch `script.js`, `english/app.js`, `cgl/daily-exam.html`, `cgl/exam*.html` to write every submit to Supabase (keep localStorage as offline fallback).
  4. `mentor.html` — A deep panel (trend chart, trapcat table, weak list) + B mini row.
- **Phase 2 — Wrong-question analysis (A only):** aggregate `question_attempts` by `trapcat/topic` → weakest top-5 + "fix first" card in mentor view.
- **Phase 3 — Drill/course from weakness:** generate drill set = sample N questions from weakest `trapcat`/topic pools (`data/day*`, `fr120_bank`, PYQ); save as `drill_key` linked to attempt. No new content authoring yet.

## 6. Non-goals / constraints
- No email/password auth now. No A-vs-B comparison/leaderboard.
- No rewrite of quiz engine. No paid backend. Keep Render static deploy working (`render.yaml` unchanged).
- PIN is family-grade security only — acceptable; mentor holds reset.

## 7. Next action
Build Phase 1 in this order: Supabase SQL → `login.html` + `supa.js` → patch quiz/exam submit → `mentor.html` → test A end-to-end, then enable B.
