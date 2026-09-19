"""10AM learn pack: standard content + shortcuts + 30-50 PYQ/mock drill for the day's topic.
Usage: python content_pack.py --day 1  (day 1-42 of 60-day plan)
Posts at 10AM, read when free (lodge/home). 6PM quiz comes from this pack."""
import json, sys, pathlib
BASE = pathlib.Path(__file__).parent

# 42 learn-days (6 weeks x 7). Each day: topic + must-learn points + shortcuts + drill source.
PLAN = {
 1: {"topic": "Polity: Articles 14-18 Equality", "learn": ["14 equality before law", "15 no discrimination", "16 equal opportunity", "17 untouchability abolished", "18 titles abolished"], "shortcuts": ["14-18 = EQUALITY chain", "15: Religion-Race-Caste-Sex-Place (RRSCP)"], "drill": "PYQ: Art 14/15/16 matching - 30Q from 2023 Mains IV + 2016 IV Art Qs"},
 2: {"topic": "Polity: Articles 19-22 Freedom", "learn": ["19 six freedoms", "20 ex-post-facto/double jeopardy", "21 life+liberty+RTE 21A", "22 arrest safeguards"], "shortcuts": ["19: Speech-Assembly-Association-Movement-Residence-Profession", "21A RTE = 86th Amendment"], "drill": "30Q Art 19-22 + Emergency 44th link"},
 3: {"topic": "Polity: DPSP 36-51 + Duties 51A", "learn": ["DPSP non-justiciable, 42nd added 39A/43A/48A", "51A 11 duties, 86th added parent duty", "Gandhian/Socialist/Liberal split"], "shortcuts": ["DPSP Ireland, Duties USSR", "42nd = Mini Constitution"], "drill": "30Q DPSP vs FR match/arrange"},
 4: {"topic": "Polity: Preamble + Emergency 352/356/360", "learn": ["Preamble: Justice-Liberty-Equality-Fraternity; 42nd added Socialist/Secular/Integrity", "352 National (44th: Armed Rebellion), 356 State, 360 Financial (never used)"], "shortcuts": ["352-356-360 sequence", "44th fixed 42nd excesses"], "drill": "30Q amendment-number match"},
 5: {"topic": "Polity: Parliament + President + 91st", "learn": ["President Art 52-62, Money Bill 109-110, 91st: CoM max 15%", "Parliament sessions, Governor Art 153-167"], "shortcuts": ["91st = 15% cap", "Money Bill = Lok Sabha only"], "drill": "40Q executive/legislature PYQ"},
 6: {"topic": "Polity: Panchayati Raj 73rd/74th + 243M", "learn": ["73rd Part IX Sch 11, 74th Part IXA Sch 12, 243M exceptions", "CAG Art 148, PIL, Art 1 territory"], "shortcuts": ["73 Rural-11, 74 Urban-12", "243M = Mizoram/Meghalaya/Nagaland areas"], "drill": "40Q local-body + CAG/PIL"},
 7: {"topic": "Polity: Sunday-50 revision", "learn": ["Week-1 number sheet: all Articles/Amendments mixed"], "shortcuts": ["Night sheet: 44-91-73-74-352-360"], "drill": "SUNDAY-50 Polity cumulative"},
}

if __name__ == "__main__":
    day = int(sys.argv[2]) if len(sys.argv) > 2 and sys.argv[1] == "--day" else 1
    d = PLAN.get(day, PLAN[1])
    out = [f"*AP SI | 10 AM LEARN Day-{day}*", f"Topic: *{d['topic']}*", "",
           "LEARN (read 2x, 20 min):"]
    out += [f"- {x}" for x in d["learn"]]
    out += ["", "SHORTCUTS (repeat 3x without seeing):"]
    out += [f"- {x}" for x in d["shortcuts"]]
    out += ["", f"DRILL (30-50Q, 40 min, from printouts):", f"- {d['drill']}",
            "- Rule: tick wrong, diary only wrong", "",
            "6PM quiz will come ONLY from above. Sunday-50 covers the week."]
    print("\n".join(out))
