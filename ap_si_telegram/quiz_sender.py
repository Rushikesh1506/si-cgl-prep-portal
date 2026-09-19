"""Instant-reveal quiz sender: Telegram sendPoll quiz mode shows answer at tap time."""
import os, json, pathlib, urllib.request, urllib.parse, datetime

BASE = pathlib.Path(__file__).parent
BANK = json.loads((BASE / "content" / "gs_bank.json").read_text(encoding="utf-8"))

def make_options(correct, topic):
    # Build 4 options: correct + 3 distractors from same/diff topics (simple rotation)
    distract = []
    for q in BANK:
        if q["a"] != correct and q["a"] not in distract:
            distract.append(q["a"])
        if len(distract) == 3:
            break
    opts = [correct] + distract
    # rotate by day so correct position changes
    day = (datetime.datetime.utcnow() + datetime.timedelta(hours=5, minutes=30)).date().toordinal()
    rot = day % 4
    opts = opts[rot:] + opts[:rot]
    return opts, opts.index(correct)

def send_poll(question, options, correct_id, explanation):
    token, chat = os.environ.get("BOT_TOKEN", ""), os.environ.get("CHAT_ID", "")
    if not token or not chat:
        print(f"DRY-RUN POLL: {question}\n opts={options} correct={correct_id}\n expl={explanation}\n")
        return
    url = f"https://api.telegram.org/bot{token}/sendPoll"
    payload = {"chat_id": chat, "question": question[:290], "options": json.dumps(options[:4]),
               "type": "quiz", "correct_option_id": correct_id, "explanation": explanation[:190]}
    data = urllib.parse.urlencode(payload).encode()
    with urllib.request.urlopen(urllib.request.Request(url, data=data), timeout=20) as r:
        print(r.status)

if __name__ == "__main__":
    import sys
    n = int(sys.argv[1]) if len(sys.argv) > 1 else 5
    day = (datetime.datetime.utcnow() + datetime.timedelta(hours=5, minutes=30)).date().toordinal()
    batch = [BANK[(day * 5 + i) % len(BANK)] for i in range(n)]
    for q in batch:
        opts, cid = make_options(q["a"], q["topic"])
        send_poll(f"[{q['topic']}] {q['q']}", opts, cid, f"Ans: {q['a']} | {q['tip']}")
