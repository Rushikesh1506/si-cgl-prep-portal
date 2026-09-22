# Paper 01 — review brief

Hand this file plus **one** of the four question files to a reviewer (human or AI).
Four files means four reviewers can work at once without collisions.

| Section | File | Q |
|---|---|---|
| Reasoning | `cgl/data/paper01-reas.js` | 25 |
| General Awareness | `cgl/data/paper01-ga.js` | 25 |
| Quantitative Aptitude | `cgl/data/paper01-quant.js` | 25 |
| English | `cgl/data/paper01-eng.js` | 25 |

Engine (do not edit when reviewing questions): `cgl/exam.html`
Deferred drafts, not part of tonight: `cgl/_deferred/`

---

## Format

Each file is plain JavaScript holding one global object. `ans` is the **0-based**
index of the correct option, so `ans: 2` means the third option is correct.

```js
const P01_GA = { "questions": [
 { "id":"ga_01", "topic":"Polity", "qtype":"Constitution - Articles",
   "lvl":2,             // 1 easy · 2 medium · 3 hard
   "expSec":14,         // seconds a good candidate should need
   "q":"...", "opts":["A","B","C","D"], "ans":2,
   "exp":"why the answer is right",
   "trick":"the elimination shortcut" }
]};
```

Reasoning questions may also carry `"svg"` — inline SVG drawn for the figure-based
items (mirror image, cube & dice, counting figures, paper folding, embedded figure).
English carries a `"passages"` object; the five cloze questions reference it via `"psg":"cz1"`.

---

## What to check

**1. Answer keys — the top priority.** Solve each question independently and confirm
`opts[ans]` is the correct option. A wrong key here does more damage than a missing
question, because the study plan for the next three weeks is built from the result.

**2. Factual accuracy (GA especially).** Flag anything you cannot verify. The five
current-affairs questions cover March–September 2026; check them against a source.

**3. Arithmetic (Quant).** Re-solve every item. Check the DI table is internally
consistent and that each of the three DI questions is answerable from the table alone.

**4. Ambiguity.** Is exactly one option defensible? Flag any question where a second
option could be argued. Also flag any option that gives the answer away by being
obviously longer, more precise, or differently formatted than the others.

**5. Difficulty tags.** Each file should be 5 easy / 11 medium / 9 hard. This paper is
deliberately set **harder than a real SSC shift** — flag anything that is *too* hard to
be a fair diagnostic, but do not soften genuinely difficult questions.

**6. `trick` fields.** These must be an *elimination* rule — what to delete and why —
not a restatement of the answer. Flag any that are just the answer rephrased.

**7. Figures (Reasoning only).** Check the SVG actually depicts what the question
describes and that the keyed option matches the drawing.

## What NOT to change

- The schema, field names, or `id` values
- The question count (25 per file) or the topic mix
- The answer-position spread — keys are balanced roughly 6/6/6/7 across A–D on purpose

## How to report

List findings as: `question id — what is wrong — what it should be`. Do not rewrite the
file; send the list back and it will be patched. Example:

```
ga_14 — key says option B (Godavari) but the question asks for the longest river
        wholly within India, which is the Godavari only if you exclude... — verify
quant_09 — arithmetic error: 45/15 + 40/10 = 7, not 6.5 — ans should be index 2
```

---

## Running it locally

No build step and no dependencies. Serve the folder over HTTP and open `/cgl/exam.html`:

```bash
python -m http.server 8231 --directory ap_si_telegram
```

Opening the file directly with `file://` also works, except that saved progress
(localStorage) may be blocked by the browser.
