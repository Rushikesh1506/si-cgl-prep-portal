"""AP SI Telegram bot: scheduled posts (9AM quiz / 10AM lesson / 6PM exam) + on-demand explain/retest/shortcut.
Usage:
  python bot.py --post morning|learn|evening [--day N]   # one-shot (GitHub Actions)
  python bot.py --poll                                    # long-poll replies (home PC / Render worker)
  python bot.py --poll-once                               # check inbox once, reply, exit (Actions cron 10 min)
Commands in Telegram: /today /explain <n> /retest <n> /shortcut <n> /score <got> <total>
Env: BOT_TOKEN, CHAT_ID. Scores appended to scores.json (parents dashboard)."""
import os, sys, json, time, pathlib, urllib.request, urllib.parse, datetime

BASE = pathlib.Path(__file__).parent
TOKEN = os.environ.get("BOT_TOKEN", "")
CHAT = os.environ.get("CHAT_ID", "")
OFFSET_FILE = BASE / ".offset"


def load_pack():
    days = {}
    for fn in ["polity_days01_06.json", "polity_days07_12.json"]:
        p = BASE / "content" / fn
        if p.exists():
            for d in json.loads(p.read_text(encoding="utf-8"))["days"]:
                days[d["day"]] = d
    return days


def api(method, **kw):
    if not TOKEN:
        print(f"DRY-RUN {method}: {str(kw)[:300]}")
        return {}
    url = f"https://api.telegram.org/bot{TOKEN}/{method}"
    data = urllib.parse.urlencode({k: (v if isinstance(v, str) else json.dumps(v)) for k, v in kw.items()}).encode()
    with urllib.request.urlopen(urllib.request.Request(url, data=data), timeout=25) as r:
        return json.loads(r.read())


def send_text(text, chat=None):
    for i in range(0, len(text), 3900):
        api("sendMessage", chat_id=chat or CHAT, text=text[i:i+3900], parse_mode="Markdown")


def send_quiz(question, options, correct, explanation, chat=None):
    api("sendPoll", chat_id=chat or CHAT, question=question[:290], options=options[:4],
        type="quiz", correct_option_id=correct, explanation=explanation[:190])


def load_bank():
    p = BASE / "content" / "gs_bank.json"
    data = json.loads(p.read_text(encoding="utf-8"))
    return data if isinstance(data, list) else data.get("items", data)


def load_hardset():
    p = BASE / "content" / "day01_quiz.json"
    return json.loads(p.read_text(encoding="utf-8"))


def bank_options(items, idx):
    correct = items[idx]["a"]
    distract = []
    for j, q in enumerate(items):
        if j != idx and q["a"] not in distract:
            distract.append(q["a"])
        if len(distract) == 3:
            break
    opts = [correct] + distract
    rot = idx % 4
    opts = opts[rot:] + opts[:rot]
    return opts, opts.index(correct)


def debrief_list(paper, day):
    """Post-exam analysis: two-layer per Q + diagnosis + trap tally. Attempt first, open after."""
    rounds = {"F": "Foundation", "C": "Competitive", "M": "Multi", "K": "Case", "P": "AP", "I": "Institution", "A": "Advanced", "T": "Trap", "X": "Analytical", "V": "Current", "S": "SI-Field"}
    lines = [f"*Day-{day} ANALYSIS | open only after attempting all*"]
    stat = {}
    for i, q in enumerate(paper, 1):
        right = q["options"][q["answer"]]
        rnd = q.get("round", "-")
        tag = q.get("trapcat", "-")
        stat[rnd] = stat.get(rnd, 0) + 1
        lines.append(f"{i}. [{rounds.get(rnd, rnd)}/{tag}] {q['q']}\n   => *{right}*.\n   WHY: {q.get('why', q['expl'])}\n   TRAP: {q.get('trapnote', q['expl'])}")
    tally = ", ".join(f"{rounds.get(k, k)} {v}" for k, v in stat.items())
    lines.append(f"_Composition: {tally}. Log round-wise misses in diary; weakest round repeats tomorrow._")
    return "\n".join(lines)


def debrief_text(d, day):
    """Single-message full debrief: every exam Q with correct option + why others fail."""
    return debrief_list(d["quiz"], day)


def evening_paper(day, d):
    """Evening set: 20 core + 10 advanced + 10 analytical/current + 5 SI-field (=45)."""
    paper = []
    for suffix in ("_quiz", "_hard", "_ca", "_si"):
        fp = BASE / "content" / f"day{day:02d}{suffix}.json"
        if fp.exists():
            paper += json.loads(fp.read_text(encoding="utf-8"))
    return paper if paper else d["quiz"]


def today_day():
    ist = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=5, minutes=30)
    return ((ist.date() - datetime.date(2026, 9, 20)).days % 12) + 1


def post(slot, day=None):
    days = load_pack()
    day = day or today_day()
    d = days.get(day)
    if not d:
        return print("No pack for day", day)
    if slot == "morning":
        send_text(f"*Day-{day} 9AM Recall | {d['topic']}*\nAttempt blind, 10 min. Answers reveal on tap in 6PM retest.")
        for q in d["quiz"][:5]:
            opts = q["options"][:]
            send_quiz(f"[D{day}] {q['q']}", opts, q["answer"], q["expl"][:190])
    elif slot == "learn":
        send_text(f"*Day-{day} 10AM LEARN | {d['topic']}*\n{d['lesson']}\n\n*SHORTCUTS*\n{d['shortcuts']}\n\n*45-sec*: {d['blueprint']}")
    elif slot == "evening":
        paper = evening_paper(day, d)
        fnd = [q for q in paper if q.get("round") == "F"]
        cmp_ = [q for q in paper if q.get("round") in ("C", "M")]
        adv = [q for q in paper if q.get("round") in ("A", "K", "P", "I")]
        trp = [q for q in paper if q.get("round") == "T"]
        xtra = [q for q in paper if q.get("round") == "X"]
        curr = [q for q in paper if q.get("round") == "V"]
        sfield = [q for q in paper if q.get("round") == "S"]
        blocks = [("FOUNDATION", fnd), ("COMPETITIVE", cmp_), ("ADVANCED", adv), ("TRAPS", trp),
                  ("ANALYTICAL ZONE", xtra), ("CURRENT+STATIC", curr), ("SI-FIELD", sfield)]
        if not fnd:
            blocks = [("EXAM", paper)]
        send_text(f"*Day-{day} 6PM EXAM | 45Q Advanced | 40 min, attempt all before opening analysis*")
        n = 0
        for name, qs in blocks:
            if not qs:
                continue
            send_text(f"_{name} | {len(qs)}Q_")
            for q in qs:
                n += 1
                send_quiz(f"[D{day} {n}/{len(paper)}] {q['q']}", q["options"][:], q["answer"], q["expl"][:190])
        send_text(debrief_list(paper, day))


def log_score(got, total, label):
    fp = BASE / "scores.json"
    data = json.loads(fp.read_text(encoding="utf-8")) if fp.exists() else {"scores": []}
    ist = (datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=5, minutes=30)).date().isoformat()
    data["scores"].append({"date": ist, "slot": label, "scored": int(got), "total": int(total)})
    fp.write_text(json.dumps(data, indent=1), encoding="utf-8")
    return f"Logged {got}/{total} ({label}). Parents dashboard updated."


def handle(text):
    days = load_pack()
    t = text.strip().split()
    cmd = t[0].lower() if t else ""
    arg = int(t[1]) if len(t) > 1 and t[1].isdigit() else today_day()
    d = days.get(arg)
    if cmd == "/explain" and d:
        return ("explain", f"*Re-teach Day-{arg} | {d['topic']}*\n{d['lesson']}")
    if cmd == "/shortcut" and d:
        return ("shortcut", f"*Day-{arg} shortcuts*\n{d['shortcuts']}\n\n*45-sec*: {d['blueprint']}")
    if cmd == "/debrief" and d:
        return ("debrief", debrief_list(evening_paper(arg, d), arg))
    if cmd == "/bank":
        return ("bank", None)
    if cmd == "/hardset":
        return ("hardset", None)
    if cmd == "/retest":
        return ("retest", arg)
    if cmd == "/today":
        return ("today", f"Today = Day-{today_day()}: {days[today_day()]['topic']}. Use /explain N /retest N /shortcut N /debrief N | /bank /hardset | /score got total")
    if cmd == "/score" and len(t) >= 3 and t[1].isdigit() and t[2].isdigit():
        return ("score", log_score(t[1], t[2], f"Day-{today_day()} manual"))
    return (None, None)


def fetch_updates(offset, timeout=25):
    url = f"https://api.telegram.org/bot{TOKEN}/getUpdates"
    data = urllib.parse.urlencode({"timeout": timeout, "offset": offset}).encode()
    with urllib.request.urlopen(urllib.request.Request(url, data=data), timeout=timeout + 15) as r:
        return json.loads(r.read())["result"]


def reply_to(text, chat_id):
    kind, payload = handle(text)
    if kind in ("explain", "shortcut", "today", "score", "debrief"):
        send_text(payload, chat=chat_id)
    elif kind == "bank":
        items = load_bank()
        day_n = (today_day() * 5) % max(1, len(items))
        send_text("*Mixed bank drill | 5 tap-quiz, answers instant*")
        for k in range(min(5, len(items))):
            it = items[(day_n + k) % len(items)]
            opts, cid = bank_options(items, (day_n + k) % len(items))
            send_quiz(f"[BANK] {it['q']}", opts, cid, f"Ans: {it['a']} | {it.get('tip', '')}"[:190], chat=chat_id)
    elif kind == "hardset":
        send_text("*Day-1 HARDSET | 20 tough-medium, answers instant*")
        for qq in load_hardset():
            send_quiz(f"[HARD] {qq['q']}", qq["options"][:], qq["answer"], qq["expl"][:190], chat=chat_id)
    elif kind == "retest":
        d = load_pack()[payload]
        send_text(f"*Re-test Day-{payload} | {d['topic']}*", chat=chat_id)
        for qq in d["quiz"]:
            send_quiz(f"[D{payload}] {qq['q']}", qq["options"][:], qq["answer"], qq["expl"][:190], chat=chat_id)
    return kind


def read_offset():
    try:
        return int(OFFSET_FILE.read_text().strip())
    except Exception:
        return 0


def poll_once():
    """One inbox pass for Actions cron: replies to new commands, saves offset. Exit 0 always."""
    if not TOKEN:
        return print("Set BOT_TOKEN.")
    off = read_offset()
    try:
        updates = fetch_updates(off, timeout=10)
    except Exception as e:
        return print("fetch err", e)
    new_off = off
    for u in updates:
        new_off = max(new_off, u["update_id"] + 1)
        msg = u.get("message", {})
        text = msg.get("text", "")
        chat_id = str(msg.get("chat", {}).get("id", ""))
        if text.startswith("/"):
            try:
                reply_to(text, chat_id)
            except Exception as e:
                print("reply err", e)
    OFFSET_FILE.write_text(str(new_off))
    print(f"done, {len(updates)} updates, offset {new_off}")


def poll():
    off = read_offset() or 0
    print("Polling... Ctrl+C to stop.")
    while True:
        try:
            if not TOKEN:
                return print("Set BOT_TOKEN to poll.")
            for u in fetch_updates(off):
                off = u["update_id"] + 1
                OFFSET_FILE.write_text(str(off))
                msg = u.get("message", {})
                text = msg.get("text", "")
                chat_id = str(msg.get("chat", {}).get("id", ""))
                if text.startswith("/"):
                    reply_to(text, chat_id)
        except Exception as e:
            print("poll err", e)
            time.sleep(5)


if __name__ == "__main__":
    a = sys.argv
    if "--poll" in a:
        poll()
    elif "--poll-once" in a:
        poll_once()
    elif "--post" in a:
        i = a.index("--post")
        slot = a[i+1] if len(a) > i+1 else "morning"
        day = int(a[a.index("--day")+1]) if "--day" in a else None
        post(slot, day)
    else:
        print("Use --post morning|learn|evening [--day N] | --poll | --poll-once")
