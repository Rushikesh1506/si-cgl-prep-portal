# Context folder — start here

This folder is the single source of truth for continuing this project in a
**new AI session** (Gemini, Claude, or anyone else), without re-explaining
everything from scratch.

**Short on time or tokens? Read just `PROJECT_CONTEXT.md`** — it's a single
condensed file covering everything below, with pointers into the full
version of each section. Otherwise, read these in order:

1. **HANDOFF.md** — what this project is, what's done, what's broken, what's next.
2. **TECH_STACK.md** — stack, folder structure, database schema, key files.
3. **CREDENTIALS.md** — how auth/config works (no real secrets are in this folder).
4. **CONTENT_RULES.md** — the mandatory rules for writing any study content (notes, MCQs, explanations) on this site. This is the most important file if your task is "write/fix content."
5. **GEMINI_RULES.md** — working rules for how to operate in this codebase.
6. **NEXT_TASKS.md** — prioritized to-do list, with exact file paths and resume instructions for in-flight work.
7. **OPEN_QUESTIONS.md** — things that genuinely need the user's decision, not an assumption.
8. **PROJECT_CONTEXT.md** — the condensed single-file version of everything above.
9. **original/** — verbatim copies of the pre-existing planning docs (`HANDOFF.md`, `SYLLABUS_MAP.md`, `TRACKING_CONTEXT.md`, `NOTES_PAGE.md`, `POLITY_CONTENT_RULES.md`) from earlier in the project, kept for historical reference. Where they conflict with the files in this folder, **this folder wins** (it's newer and supersedes them).

## Master prompt (paste this at the start of a new Gemini conversation)

```
You're continuing an existing project, not starting a new one. Before doing
anything else, read every file in the Context/ folder at the repo root
(Context/README.md first, it tells you the reading order). This is a static
HTML/CSS/JS exam-prep site (si-cgl-portal) for a real AP Police SI aspirant,
with a Supabase backend already wired up. Follow Context/CONTENT_RULES.md
for any study-content work and Context/GEMINI_RULES.md for how to work in
this codebase. Do not rebuild anything that already works. At the end of
this session, update Context/HANDOFF.md's "Current Status" and
"Session Log" sections with what you did, so the next session (Gemini or
Claude) can continue seamlessly. If something in Context/ seems to
contradict what you observe in the actual code, trust the code and flag the
mismatch rather than guessing.
```

## Why this folder exists

The user is moving day-to-day development from Claude to Gemini (quota
reasons — Claude is used occasionally going forward). This folder exists so
that switch loses as little context as possible, and so that **every**
session (Gemini today, Claude next week, anyone later) keeps the project's
quality bar consistent instead of drifting.
