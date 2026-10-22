# OPEN_QUESTIONS — needs a decision from the user, not an assumption

1. **Which subject after Polity?** `syllabus-focus-data.js` lists 10 other
   Mains subjects with zero `notes.html` content. Don't pick one and start
   writing — ask. (Some reference material may not even be usable yet — the
   History PDFs in `si-resources/` were reported as scanned images needing
   OCR, not extractable text like the Polity textbook was.)

2. **Should `si-syllabus.js` be removed?** It's dead-ish code from an
   abandoned early attempt, still harmlessly wired into `index.html`/
   `script.js`. Flagged as an open decision since the project started,
   never actioned. Ask before touching it.

3. **Is the "family-grade" security model (permissive RLS, PIN-only auth,
   no reset flow) still acceptable** now that real exam/progress data is
   accumulating? This was an explicit, accepted tradeoff earlier in the
   project (see `Context/original/TRACKING_CONTEXT.md`) — worth a one-time
   re-confirmation now that it's live with real data, not a redesign unless
   asked.

4. **How much of the interrupted Polity restructuring work survived the
   session handoff?** `Context/HANDOFF.md` §4 explains the scratchpad-path
   dependency. Whoever picks this up first should check immediately and
   report back — "the files still exist, continuing the merge" or "they're
   gone, restarting that specific piece" — rather than silently assuming
   either way.

5. **`polity-practice.html`'s time limit.** It was cloned with the parent
   diagnostic's structure but the question count/pacing for the final
   Polity practice bank wasn't finalized before the session ended — whoever
   builds `data/polity_practice.js` should set `timeLimitMin` deliberately
   (roughly 1 minute/question is the project's usual convention for
   generic practice sets, vs. matching a real paper's actual stated time
   for diagnostic-style exams) and can just proceed with that convention
   without asking, but should say what they chose and why.

6. **Does the user want a "bookmark mistakes for revision" feature?** It's
   named as a nice-to-have in the content spec (`Context/CONTENT_RULES.md`
   §11) but was never explicitly requested as a build task. Don't build it
   speculatively — ask first, it'd touch the data model (a new Supabase
   table or localStorage key) which is worth confirming before adding.
