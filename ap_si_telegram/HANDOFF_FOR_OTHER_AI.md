# HANDOFF — Telegram bot merge guide (for the portal AI)

## What to add (nothing existing changes)
Copy these into the repo root, keeping portal files untouched:
- `ap_si_telegram/` (full folder: bot.py, content/, dashboard/, requirements.txt, render.yaml, README.md)
  - OMIT these dev-only files if present: sendpolls.py, sendpolls2.py, mkpush*.py, mkchunks.py, qshow.py, showflags.py, push_*.txt, chunk_*.txt, teaser.json, .offset
- `.github/workflows/daily.yml` (9 AM / 10 AM / 6 PM IST posts)
- `.github/workflows/reply.yml` (10-min inbox replies for /today /explain N /retest N /shortcut N /debrief N /bank /hardset /score)

## Do NOT touch
- index.html, style.css, script.js, articles.js, cases.js, english.js, lessons-a.js, lessons-b.js, passages.js, pyq.js, takeaways.js, data/
- Any existing .github/workflows files with other names (leave them running)

## Secrets required (repo Settings → Secrets → Actions)
- BOT_TOKEN = Telegram bot token (ask owner, never commit it)
- CHAT_ID = brother's chat id (ask owner)

## Settings required
- Settings → Actions → General → Workflow permissions → Read and write (lets reply.yml save scores/offset)

## Verify (in order)
1. `python -c "import json,glob;print(sum(len(json.load(open(f,encoding='utf-8'))) for f in glob.glob('ap_si_telegram/content/day*_*.json')))"` → expect 540
2. Actions tab → run `ap-si-daily` manually → brother's Telegram gets test post
3. Scheduled crons: `30 3 * * *`, `30 4 * * *`, `30 12 * * *` UTC (= 9 AM / 10 AM / 6 PM IST)

## If a push is rejected on .github/workflows
The token needs `workflow` scope. Either regenerate with it, or add the two workflow files via GitHub web UI (Add file → Create new file).
