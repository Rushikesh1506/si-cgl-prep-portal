# AP SI Telegram Revision - 9AM + 6PM fixed

Stdlib only. Cloud-free via GitHub Actions.

## Setup (5 min)
1. Telegram: message @BotFather -> /newbot -> copy BOT_TOKEN.
2. Message your new bot once (Hi). Then open `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates` -> copy `chat.id` as CHAT_ID.
3. Push this folder to GitHub (as repo root or move `.github` to repo root).
4. GitHub repo Settings -> Secrets -> Actions -> add `BOT_TOKEN` and `CHAT_ID`.
5. Done. Actions runs 9:00 AM IST (`30 3 * * *`) and 6:00 PM IST (`30 12 * * *`).
   Manual test: Actions tab -> Run workflow.

## Local test
python generator.py --slot morning
python generator.py --slot evening
python sender.py auto   # dry-run preview if no env set

## Content logic (for GS 76 -> 130)
- 9AM = recall old 5 (7-day gap) + verify yesterday 5. 10 min, for lodge/rest.
- 6PM = new 5 with 1-line tip + blank-page test. 15 min, for home.
- Maths untouched (120 safe): 10 problems maintenance only.
- Bank: content/gs_bank.json (30 now). Add weekly current affairs as id 31+.

## Add current affairs
Append to gs_bank.json: {"id": 31, "topic": "Current", "q": "...", "a": "...", "tip": "..."}
No code change needed - rotation is automatic by date.
