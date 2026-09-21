# Articles 14-18 for a Software Brain

## Art 14 — the Base Class
Think of Art 14 as the base class every government action inherits from. Two methods:
- `equalityBeforeLaw()` — British import. Nobody gets admin privileges over the law. Minister or porter, same court, same procedure. Like prod access rules applying to interns and CTOs alike.
- `equalProtection()` — American import. objects in the SAME state must be treated alike. Two identical requests, same response. But different states can branch: tax slabs differ by income because inputs differ.

The golden test, like code review with two mandatory checks:
1. Is the grouping based on a REAL difference? (intelligible differentia — doctors vs engineers for a medical allowance: real.)
2. Does that difference CONNECT to what the law wants? (rational nexus — medical allowance for doctors: connected. For engineers: fails review, merge rejected.)
Ban = hardcoding one user (`if name == "Ravi": tax *= 2`) — that's class legislation, struck down.
Royappa (1974) added the linter rule: arbitrary action = build failure. An officer denied promotion with no reason on file. Court: equality and arbitrariness are sworn enemies. Maneka (1978) added: procedure must be fair, just, reasonable — not just any script that runs.

## Art 15 — the Allowlist/Denylist for Citizens
Only citizens get this module. Exactly FIVE denylisted grounds: religion, race, caste, sex, birthplace. Mnemonic: RRSCP.
- 15(2)(a): shops, hotels, restaurants, entertainment — binds PRIVATE owners too, no funding needed. A hotel refusing a Dalit family is a violation, full stop. Think: public API endpoint — cannot 403 on caste header.
- 15(2)(b): wells, tanks, roads — needs state funding + public use. Private farm pond = private server, not covered.
- 15(3): women/children get feature flags (maternity, girls' schools).
- 15(4)/15(5)/15(6): reservation patches — backward classes, private colleges except minority institutions, EWS 10%. These are NOT exceptions or bugs; per Mandal 1992 they're the intended feature for real equality.
- Descent and residence are NOT here. They live only in Art 16. Number-one trap.

## Art 16 — Role-Based Access Control for Govt Jobs
Citizens only. Seven grounds (five + descent + residence). Rules:
- Residence condition = super-admin (Parliament) only. A state order fixing domicile quota = privilege escalation, invalid.
- 16(4)/4A/4B/6 = quota policies with hard cap: 50% (Sawhney), creamy layer filtered out, EWS in a separate bucket (Janhit 2022).
- Your own SI recruitment runs on Art 16 + Art 371D (Presidential Order zones). You're literally a product of this Article.

## Art 17 — the Kill Switch
One line, zero config, no exceptions, no emergency override: untouchability = deleted. Binds private parties too. UPSC 2020 placed it under Equality — remember its address.

## Art 18 — Deprecation of Titles
State titles (Raja, Nawab) = deprecated API, removed. Allowed: military/academic distinctions (return values, not ranks). Bharat Ratna = award badge, not a title — using it as name prefix violates spec (Balaji Raghavan 1996). Citizens can't accept foreign titles, period; consent route exists only for non-citizen office-holders.

## Shields (try-catch blocks)
- 361: President/Governor immunity while in office.
- 359: emergency catch-block, but Arts 20-21 can never be caught (44th Amendment firewall).
- 31C: only 39(b)-(c) laws bypass Art 14 scrutiny (Minerva Mills 1980 narrowed it).

## Debug in 60 seconds
Foreigner in facts? Only Art 14 loads (15/16 are citizen-only modules). Descent/residence keyword? Route to 16. Immunity/emergency/DPSP keyword? Jump to shields. "Reservation is exception"? Always false — it's the feature. Match-type? Pin 17 (untouchability) first, then 14's phrase; rest auto-aligns.
