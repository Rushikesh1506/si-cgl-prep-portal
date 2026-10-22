# NEXT_TASKS — prioritized

Read `Context/HANDOFF.md` §4 first — it has the full story behind tasks 1-3.

## 1. (Highest priority) Finish and merge the Polity content restructuring
- Check whether the Claude scratchpad path mentioned in `Context/HANDOFF.md`
  §4 still exists and has the listed JSON files. If yes: merge them into
  `notes-content.js` (v2 files for Union Government and Local-Gov+Bodies;
  v1 files — then restructure per `Context/CONTENT_RULES.md` — for
  Constitutional Framework, System of Government, State Government, and
  the Rights-and-Duties depth upgrade).
- If the scratchpad is gone: redo from
  `si-resources/Polity Material/Indian_Polity_Laxmi-Kant-6th-Edition.pdf`
  directly, following `Context/CONTENT_RULES.md` from the start (don't
  write a "plain" version first and restructure later — go straight to the
  full spec this time, now that it's known up front).
- Lessons still needed (check `notes-data.js`'s `Polity` subject tree for
  the authoritative slug list): Constitutional Framework (6: historical-
  background, making-constitution, salient-features, preamble, union-
  territory, citizenship), System of Government (5: parliamentary-system,
  federal-system, centre-state-relations, inter-state-relations, emergency-
  provisions), Union Government (4: president-vice-president, pm-council-
  ministers, parliament, supreme-court), State Government (3: state-
  governor-cm, state-legislature, high-courts), Local Government (3:
  panchayati-raj, municipalities, union-territories-admin), Constitutional
  Bodies (1, consolidated: EC+UPSC+Finance Commission+CAG),
  Non-Constitutional Bodies (1, consolidated: NITI Aayog+NHRC+CVC+CBI+
  Lokpal). Fundamental Rights/DPSP/Fundamental Duties already have a v1
  depth-upgrade (Articles 19-32 added to FR) that itself still needs the
  restructuring pass.
- **Verify after merging:** bump `notes-content.js`'s cache-busting query
  string wherever it's referenced (`notes.html`, `welcome.html` — currently
  `?v=2`, go to `?v=3`), then actually load each new lesson in a browser and
  confirm (a) it renders without raw HTML showing as text, (b) the new
  component classes (`.hook`, `.flow`, etc.) are visually styled, (c) the
  on-page table of contents picks up each `<h2>`.

## 2. Build the Polity Practice MCQ bank and wire it up
- The question verification/explanation work may already be done (see
  `Context/HANDOFF.md` §4 — 172 questions across
  `polity_q_explained1.json`..`polity_q_explained4.json` in the scratchpad,
  if it still exists).
- If it exists: assemble into `data/polity_practice.js` as
  `const POLITY_PRACTICE_MOCKS = [{ id: "polity_practice_1", label: "Polity Practice — Full Syllabus", timeLimitMin: <~1 min/question>, questions: [...] }]`
  matching the exact schema in `Context/TECH_STACK.md`'s quiz-engine
  section. `polity-practice.html` already expects this file and this global
  name — just add the `<script src="data/polity_practice.js">` tag isn't
  needed, it's already there (check — it should already reference
  `data/polity_practice.js` since the HTML was already rebranded this
  session).
- If it doesn't exist: re-extract and verify from
  `si-resources/Polity Material/Indian-polity-Questions.pdf` (it has
  "Ans: (x)" embedded after each question — verify, don't blind-trust, per
  `Context/CONTENT_RULES.md` §13).
- **Verify after building:** run the full-correct self-test (see
  `Context/GEMINI_RULES.md`'s verification section) and confirm the score
  equals the maximum. Confirm the welcome.html nav link
  (`polity-practice.html?mock=polity_practice_1`) actually loads questions
  instead of "mock not found."

## 3. Decide what to do about the other 9 subjects
`syllabus-focus-data.js` lists 11 Mains subjects; only Polity has real
`notes.html` content (once task 1 lands). Arithmetic, Reasoning, General
Science, Current Affairs, History, Geography, Economy, English-Mains,
Telugu-Mains are all still empty placeholders in `notes-data.js`. This
wasn't explicitly requested yet for this round — **ask the user which
subject to tackle next** rather than assuming, since each one needs its own
reference material sourced (check `si-resources/` for what's available per
subject — History PDFs exist there but are reported scanned/image-only per
`Context/original/HANDOFF.md`, OCR would be needed).

## 4. Smaller/lower-priority items
- `si-syllabus.js` cleanup decision still pending (leave as-is unless
  asked — see `Context/HANDOFF.md` §6).
- No bookmark/mistake-list feature exists yet for revision (mentioned as
  a nice-to-have in `Context/CONTENT_RULES.md` §11) — not built, don't
  claim it exists.
- Consider whether `mentor.html` needs a UI refresh now that real data
  exists (it was built and verified with near-empty data; worth a fresh
  look once the student has actually used the diagnostic/focus survey for
  a while).

## How to resume if you ARE a continuation of the interrupted Claude session

If you have access to the same machine/scratchpad referenced in
`Context/HANDOFF.md` §4 (unlikely for Gemini, but possible if a human copies
the files over), the exact scratchpad filenames are listed there. Each
"v1" JSON is `{"slug/path": "<html string>", ...}` — load it, read the
HTML strings, and write the restructured versions back in the same shape,
then merge into `notes-content.js` by adding/overwriting those exact keys
in the `NOTES_CONTENT` object literal.
