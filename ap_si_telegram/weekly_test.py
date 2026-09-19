"""Cumulative Sunday test: W1 50 new, W2 35 old+45 new=80, W3+ 25+25+50=100 cap."""
import json, pathlib
BASE = pathlib.Path(__file__).parent
BANK = json.loads((BASE / "content" / "gs_bank.json").read_text(encoding="utf-8"))

def build(week):
    if week == 1:
        return BANK[:50] if len(BANK) >= 50 else BANK + BANK[:50-len(BANK)]
    if week == 2:
        return BANK[:35] + BANK[10:55] if len(BANK) >= 20 else (BANK*4)[:80]
    # week 3+: 25 W1 + 25 W2 + 50 new rotation
    old1, old2 = BANK[:25], BANK[5:30]
    new = [BANK[(week*13+i) % len(BANK)] for i in range(50)]
    return old1 + old2 + new

if __name__ == "__main__":
    import sys
    w = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    qs = build(w)
    print(f"SUNDAY WEEK-{w} TEST: {len(qs)}Q (cumulative)")
    for i, q in enumerate(qs, 1):
        print(f"{i}. [{q['topic']}] {q['q']} -> {q['a']}")
