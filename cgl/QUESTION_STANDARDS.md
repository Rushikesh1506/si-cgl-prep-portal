# SSC CGL Tier-1 Diagnostic Paper — Question Authoring Standard

Applies to every `cgl/data/paper*.js` file going forward. Set 2026-09-30 after two
rounds of difficulty review on Paper 02.

## Target difficulty (tough-shift calibration)

| Section | Target |
|---|---|
| Reasoning | 8.5/10 |
| General Awareness | 8.5/10 |
| Quantitative Aptitude | 9/10 |
| English | 8/10 |

0% easy. Difficulty must come from the question's actual structure, not the `lvl` label.

## Rules

1. **Prefer multi-step, trap-based, close-option and application questions.** A
   question that needs one formula plug-in or one fact recall is not hard, no matter
   how it's labelled.
2. **Avoid direct textbook/fact recall** unless the fact is obscure or conceptually
   combined with another fact (e.g. a match-the-following across amendment + committee
   + duty count, not just "which amendment added X").
3. **Avoid repeating the same question pattern within a section** — no two questions
   testing the identical rule via near-identical wording.
4. **Distractors must be plausible and close** — not obviously wrong by length,
   formatting, or category.
5. **GA:** mix static GK with conceptual polity/history/geography/economy/science;
   prefer less-obvious facts over headline trivia. No time-sensitive current affairs
   (keeps the key verifiable long-term).
6. **Quant:** prioritize multi-concept arithmetic, algebra, geometry, DI, ratio,
   time-work, TSD, and genuine calculation traps (wrong-formula distractors, reverse
   problems, multi-stage setups) over more arithmetic on one known formula.
7. **Reasoning:** multi-layered series, coding, arrangements, syllogisms, relations,
   logical deductions. Seating/syllogism questions must have a verifiably single
   deduction path — do not sacrifice unambiguity for difficulty.
8. **English:** high-level error spotting, confusing usage, vocabulary, idioms,
   narration/voice, close-option grammar. Prefer rarer confusions over the most
   commonly-drilled ones (e.g. "dispense with / weary of" over "despite of").
9. **Verify EVERY answer independently** — recalculate numerical answers
   programmatically where possible; logically re-derive reasoning/grammar answers
   step by step. Do not trust a first-draft `ans` index.
10. **Exactly one defensible option per question.** Before finalizing, check that no
    other option is also arguably correct (this has caused real bugs — e.g. an
    "improve the sentence" question where two different options both fixed the
    error). When full-sentence rewrite creates that risk, prefer error-spotting
    format (identify the flawed segment) over open rewrite.
11. **If an existing question is already genuinely tough, retain it** — do not
    churn working content for churn's sake.
12. Keep `exp` (explanation) and `trick` (elimination technique) fields in the
    stored JSON — the app shows these after submission for review. The "output only
    question + options + answer key, no explanations" instruction applies to how
    changes are *reported back in chat*, not to the stored schema.

## Process for a recalibration pass

1. List questions flagged as too easy/direct, per section, with question numbers.
2. Replace or substantially rewrite each — not just relabel `lvl`.
3. Recompute/re-derive every changed answer before writing it into the file.
4. Validate the file (JSON parses, exactly 4 options, no duplicate options, `ans`
   in range 0-3).
5. Load-test in the browser (`Loaded 100/100 questions`, zero console errors).
6. Report: questions changed + reason + corrected answer key + final difficulty
   distribution.
