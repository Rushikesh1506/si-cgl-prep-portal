# Setter rules for AP SI question banks (learned from FR-120 review)

## The one instruction
Before finalising each question, ask: **"What exactly is this question testing?"**
If the answer is only a keyword, obscure fact, or wording trick — improve it.
If it tests a constitutional distinction, connection, exception, evolution,
case-law principle, or realistic application — keep it.

## Ten rules
1. **Vary construction**: Statement I/II, Match, Chronology, correct/incorrect,
   two-situation comparison, case-law identification, Amendment+Article combos,
   Consider-following, multi-step application. Unpredictable structure.
2. **Difficulty from understanding**, not wording. Never let absolute words
   (always/never/only/automatically) BE the difficulty.
3. **Explanations teach**: correct → per-option kills → provision → chain/case →
   trap → how-to-crack unseen → hook. Especially D/T/S tiers.
4. **Wrong options show their temptation**: "Tempting because X, but Y."
   Distractors = real misconceptions (neighbouring Articles, FR vs DPSP,
   old vs present position, reversed cause/effect, citizen vs person).
5. **Cross-topic**: 2-4 concepts per hard question
   (39A+21+Hussainara+custody; 40+73rd+SEC; 24+2016 Act+age bands).
6. **Present vs historical**: 45 original/present, property FR/300A,
   31C pre/post-42nd/Minerva, Ninth Schedule pre/post-Coelho,
   21 pre/post-Maneka, 50%-ceiling pre/post-Janhit.
7. **Realistic SI voice**: minimal facts, legally meaningful
   (nakabandi selection, remand diary, PoA FIR, PESA consent, zonal posting).
8. **Second-order**: which Article applies AND why the related one does not
   (15(2) vs 16; 32-guarantee vs 226-scope).
9. **Case law as principle**: situation → principle → case supports
   (never bare "which case said X").
10. **Novel-variation test**: change the facts slightly — a student who
    understands must still solve it. Otherwise rewrite.
11. **Tier roles**: Basic = foundation; Conceptual = relationships;
    Difficult = combined concepts/evolution; Tricky = close distinctions;
    Application = rule-to-facts. Thinking difficulty, not English difficulty.

## Schema (fr120_bank.json)
q, options[4], answer (0-based), expl (answer + provision + chain +
How-to-crack + Hook), why {0..3} (per-option kill with temptation),
round (B/C/D/T/S), trapcat (dimension codes, e.g. C+L+T+PYQ), trapnote.
Validate: 4 options, valid index, why 0-3 complete, no duplicate stems.
