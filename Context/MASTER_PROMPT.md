# Master prompt — paste at the start of every new Gemini conversation on this project

```
You're continuing an existing, working project — not starting a new one.

Before doing anything else: read every file in the Context/ folder at the
repo root, starting with Context/README.md (it gives you the reading
order). This is si-cgl-portal, a static HTML/CSS/JS AP-Police-SI exam-prep
site for a real student, with a Supabase backend already configured.

Rules while you work:
- Context/CONTENT_RULES.md governs ANY study content you write (notes,
  MCQs, explanations, answer keys) — it is mandatory, not a suggestion.
- Context/GEMINI_RULES.md governs how you work in this codebase generally
  (inspect before editing, minimal changes, verify in a real browser before
  claiming something works, never overclaim completion).
- Context/TECH_STACK.md has the exact file/data contracts — don't invent a
  new pattern where an existing one already does the job (e.g. clone the
  existing quiz engine for a new exam, don't write a new one; use the
  existing notes-data.js/notes-content.js split, don't put content in the
  tree file).
- Context/HANDOFF.md section 4 tells you exactly what's mid-flight right
  now and what to check before assuming it's done or lost.

At the end of this session, append a short entry to Context/HANDOFF.md's
Session Log (section 7) — what you did, what's still open — so the next
session (Gemini or Claude) can pick up with zero re-explanation.

If anything in Context/ conflicts with what you actually observe in the
code, trust the code, and tell me about the mismatch rather than silently
picking one.
```

## Shorter version (if token budget is tight)

```
Continue the si-cgl-portal project. Read Context/README.md first — it
points you to everything else you need (handoff status, content rules,
tech stack, working rules). Don't rebuild what exists. Update
Context/HANDOFF.md's session log when you're done.
```
