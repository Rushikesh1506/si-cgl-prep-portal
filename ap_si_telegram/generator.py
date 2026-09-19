"""Generate fixed 9AM + 6PM Telegram revision messages. English. Cloud-free."""
import json, datetime, argparse, pathlib

BANK = pathlib.Path(__file__).parent / "content" / "gs_bank.json"

def load():
    return json.loads(BANK.read_text(encoding="utf-8"))

def pick(items, day_num, count, offset):
    n = len(items)
    start = (day_num * 5 + offset) % n
    return [items[(start + i) % n] for i in range(count)]

def morning_msg(items, date):
    day_num = date.toordinal()
    today = pick(items, day_num, 5, 0)
    old7 = pick(items, day_num - 7, 5, 10)
    lines = ["*AP SI Civil | 9 AM Recall | 10 min*",
             f"_{date.strftime('%d %b %Y')}_", "",
             "Part A - Answer from memory (no book):"]
    for i, q in enumerate(old7, 1):
        lines.append(f"{i}. [{q['topic']}] {q['q']}")
    lines += ["", "Part B - Yesterday check (answers below, verify in 2 min):"]
    for i, q in enumerate(today, 1):
        lines.append(f"{i}. {q['q']} -> *{q['a']}*")
    lines += ["", "_Train task: pick 1 tip and repeat 3x without seeing._",
              "Evening 6 PM will give new 5 points."]
    return "\n".join(lines)

def evening_msg(items, date):
    day_num = date.toordinal()
    new = pick(items, day_num, 5, 20)
    lines = ["*AP SI Civil | 6 PM New | 15 min*",
             f"_{date.strftime('%d %b %Y')}_", "",
             "Part A - Today's 5 (read + 1-line tip):"]
    for i, q in enumerate(new, 1):
        lines.append(f"{i}. [{q['topic']}] {q['q']}")
        lines.append(f"   Ans: *{q['a']}* | _{q['tip']}_")
    lines += ["", "Part B - Blank-page test (home, 5 min):",
              "Close phone/book. Write answers to above 5 on paper.",
              "Score: /5. Wrong ones -> error diary.",
              "",
              "Maths maintenance (since 120 safe): 10 problems only, no new chapter."]
    return "\n".join(lines)

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--slot", choices=["morning", "evening", "auto"], default="auto")
    ap.add_argument("--date", default=None, help="YYYY-MM-DD for testing")
    args = ap.parse_args()
    items = load()
    if args.date:
        d = datetime.date.fromisoformat(args.date)
    else:
        # IST date
        d = (datetime.datetime.utcnow() + datetime.timedelta(hours=5, minutes=30)).date()
    slot = args.slot
    if slot == "auto":
        ist_h = (datetime.datetime.utcnow() + datetime.timedelta(hours=5, minutes=30)).hour
        slot = "morning" if ist_h < 12 else "evening"
    print(morning_msg(items, d) if slot == "morning" else evening_msg(items, d))
