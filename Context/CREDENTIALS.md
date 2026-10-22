# CREDENTIALS — how auth/config works on this project

**No `.env` file exists or is needed.** This is a static site with no build
step and no server-side code, so there is nothing to keep secret in the
traditional sense — the one credential this project uses is *designed* to
be public. Read this file fully before assuming you need to set anything up.

## 1. Supabase (the only external service)

- **Project URL:** `https://pziuyiiveokamnsndebt.supabase.co` (not secret —
  a Supabase project URL identifies the project, it doesn't grant access by
  itself).
- **Anon (publishable) key:** stored in `supa-config.js` at the repo root,
  as `const SUPA_ANON_KEY = "..."`. **This is meant to be public** —
  Supabase's own model is that the anon key ships in client-side code and
  Row Level Security (RLS) policies on the database are what actually gate
  access, not secrecy of the key. Do not treat this file as something to
  hide; do treat the *database policies* as the real security boundary (see
  `supabase_schema.sql` for them — currently permissive, "family-grade,"
  see `Context/original/TRACKING_CONTEXT.md` §3/§6 for why that was an
  accepted, deliberate tradeoff, not an oversight).
- **How the client uses it:** `supa.js` loads the `@supabase/supabase-js`
  UMD build from a CDN (`https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/...`),
  reads `SUPA_URL`/`SUPA_ANON_KEY` as bare identifiers (⚠️ see
  `Context/TECH_STACK.md`'s note on why it's NOT `window.SUPA_URL`), and
  exposes a small `Supa` object (`Supa.login`, `Supa.saveProgress`,
  `Supa.saveAttempt`, `Supa.saveQuestionAttempts`, `Supa.saveFocus`,
  `Supa.studentByName`, `Supa.mentorData`, `Supa.session`, `Supa.logout`).
  Every page that needs Supabase loads, in this exact order: the CDN
  script → `supa-config.js` → `supa.js` → (the page's own script).

## 2. The ONE credential that is genuinely sensitive (and is NOT in this repo)

A **Supabase personal access token** (format `sbp_...`, from
`supabase.com/dashboard/account/tokens`) was used **once**, out-of-band, by
the user pasting it directly into the Claude chat, so Claude could call
Supabase's Management API and run `supabase_schema.sql` directly (the anon
key cannot do DDL/`CREATE TABLE` — that's a hard platform restriction, not
a choice). **This token was never written to any file in this repository**
and should not be. If schema changes are needed in the future:
- **Preferred:** the user pastes the new SQL into the Supabase Dashboard's
  SQL Editor themselves (Project → SQL Editor → New query → paste → Run).
  Takes ~15 seconds, needs no credential sharing.
- **Alternative:** if the user wants the AI to do it directly again, they'd
  need to generate a fresh personal access token and paste it into the chat
  again (tokens can be revoked after use from the same Supabase dashboard
  page). Never ask for this unless the user explicitly offers — default to
  asking them to run SQL themselves.

## 3. GitHub

- Remote: `https://github.com/Rushikesh1506/si-cgl-prep-portal.git`
- Push auth is whatever's configured on the developer's local machine
  (observed once this session to need re-authentication, then it turned
  out to just be a slow push, not actually broken — see
  `Context/HANDOFF.md` §6). Nothing in this repo manages GitHub auth; it's
  entirely the local git/credential-manager setup on whichever machine is
  running.

## 4. Render (deployment)

- `render.yaml` at the repo root defines a single static-site service,
  `si-cgl-prep-portal`, publishing the whole repo root with no build
  command. No environment variables are configured or needed there either
  — the Supabase anon key is already baked into `supa-config.js` which
  ships as a static file.
- `ap_si_telegram/render.yaml` is a **separate, optional** blueprint for a
  Telegram bot worker (needs `BOT_TOKEN` + `CHAT_ID` as actual secrets, set
  in Render's own dashboard if that worker is ever deployed) — this is
  unrelated to the main site and not part of the AP-SI work described in
  this handoff. See `ap_si_telegram/README.md`.

## 5. Local development setup

No install step. From the repo root:
```
py -m http.server 8080
```
(or any static file server) then open `http://localhost:8080/welcome.html`.
**Do not open files via `file://`** — Supabase's CORS and some relative
`fetch()` calls expect an actual HTTP origin.

Python is needed only for one-off content-pipeline scripts (PDF extraction,
JSON building), never for the site itself. On the developer's Windows
machine, the bare `python` command is unreliable (sometimes resolves to a
Microsoft Store stub) — the working interpreter is at the full path
`C:\Users\<user>\AppData\Local\Python\pythoncore-3.14-64\python.exe`. This
is a local-machine quirk, not a project requirement; Gemini's own execution
environment may differ and this note may not apply.

## 6. If something's missing or invalid

- **"Supabase not configured" error in the browser console:** check
  `supa-config.js` exists and has non-empty `SUPA_URL`/`SUPA_ANON_KEY`
  values, and that the CDN script tag loaded before it (check Network tab).
- **"Could not find the table 'public.X' in the schema cache":** the schema
  hasn't been run yet — see `supabase_schema.sql`, run it in the Supabase
  SQL Editor.
- **Login always fails with "Wrong PIN":** PINs are set on *first* login
  per profile name and hashed (`sha256(name + ":" + pin)`, see `supa.js`'s
  `login()`); there is no reset flow in the UI. The fix is to delete the
  relevant row directly in Supabase's Table Editor (`profiles` table) so
  the next login re-creates it with a fresh PIN.
