# GEMINI_RULES — how to work in this codebase

These are the user's explicit working rules for AI-assisted development on
this project, plus the project-specific conventions observed so far.

## Working rules (user's own words, lightly organized)

1. **Treat the existing implementation as the source of truth.** Read
   `Context/HANDOFF.md` and `Context/TECH_STACK.md` before changing
   anything. Don't assume a feature works a certain way — open the actual
   file and check.
2. **Inspect before editing.** Do not assume functionality that hasn't been
   verified by actually reading the code or running it.
3. **Make minimal, targeted changes.** Preserve backward compatibility —
   localStorage keys, Supabase column names, the `notes-data.js`/
   `notes-content.js` split, the quiz-engine bank-file contract — none of
   these should change shape without a real reason.
4. **Explain what you changed, why, and how to test it**, every time —
   don't just say "done."
5. **Identify risks and dependencies before major modifications** — e.g.
   before touching `supabase_schema.sql`, note that RLS is intentionally
   permissive and changing it would break the offline-first sync design.
6. **Ask only when essential information is missing**; otherwise proceed
   using the verified context already in this folder and the repo itself.
7. **Never claim a feature, test, or verification is complete unless it
   actually is.** If you didn't open a browser and check, say "I wrote
   this but haven't verified it renders/works," not "verified."
8. **Do not rebuild from scratch.** This has been said multiple times
   across this handoff for a reason — there is a lot of working,
   user-approved functionality here. Extend it.
9. **At the end of every session, update `Context/HANDOFF.md`'s "Session
   Log" section** (§7) with what was done — a few sentences, newest entry
   on top. This is how continuity survives a model/tool switch. Also update
   the "Current Status" sections (§3-4) if something there changed (e.g. a
   pending item got finished, or a new bug was found).

## How "verification" works on this project (there are no automated tests)

Every feature on this site has been verified the same way, consistently:
1. Serve the site locally (`py -m http.server 8080` or equivalent) or use
   whatever browser-automation tool is available to you.
2. Load the actual page.
3. For data-driven checks: read `localStorage`, inspect global JS variables
   (`NOTES_CONTENT`, `AP_MAINS_MOCKS`, etc.) directly via the browser's JS
   console/execution, not by re-reading the source file and assuming it
   parses.
4. For UI checks: take a screenshot or read the rendered DOM text, don't
   just trust that correct HTML implies correct rendering (this project
   found a real bug this way — see `Context/HANDOFF.md` §5, the unstyled
   callout-box issue — where the HTML was "correct" but the CSS classes it
   referenced didn't exist).
5. For exam/quiz engines specifically, the established self-test pattern
   is: inject the KNOWN-correct answer for every question
   (`S.ans[q.id] = {chosen: q.ans, ...}` for each question in `BANK`), call
   `finish('test')`, and assert the resulting score equals the maximum
   possible (`q × CFG.correct`). This proves the scoring logic and the
   bank's `answer` indices agree with each other.
6. For Supabase-backed features: after an action, independently query the
   table (via the Supabase JS client, or ask the user to check the Table
   Editor) rather than assuming a write succeeded just because no error was
   thrown client-side.

**If your environment cannot do steps 1-2 (no browser/no local server
available to you), say so explicitly** rather than reporting a feature as
verified. This matters a lot on this project specifically — the user has
caught and called out unverified/overclaimed work before.

## Content work specifically

See `Context/CONTENT_RULES.md` — it is binding for anything that's study
content (notes, MCQs, explanations, answer keys). The short version: don't
invent facts, always explain *why* an answer is right and the tempting
alternative is wrong, use the site's actual CSS component vocabulary (not
invented class names), and self-validate as a student before calling
something finished.

## Cost/quota awareness

The user is running Gemini on a company Pro subscription with real usage
limits they want respected, and switching to Gemini specifically because
Claude's own usage got rate-limited mid-session on this exact project.
Practical implications:
- Don't re-read entire large files (e.g. the 1547-page Laxmikanth PDF, or
  big JSON content files) more than once per task if the content hasn't
  changed — cache/remember what you already extracted within a session.
- Batch related work (e.g. writing multiple lesson pages in one pass)
  rather than many small round-trips, where that doesn't compromise
  quality.
- Prefer targeted edits (read the specific section you need, change it)
  over wholesale file rewrites, both for cost and for the "minimal change"
  rule above.
