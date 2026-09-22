/* paper01-reas.js  — SSC CGL Tier-1 Diagnostic Paper 01 · Reasoning (25 Q) */
/* ans is the 0-based index of the correct option.  lvl: 1 easy, 2 medium, 3 hard.
   expSec = seconds a good candidate should need.  Answer positions are balanced
   across A-D so the key is not guessable from position alone. */

const P01_REAS = {
 "questions": [
  {
   "id": "reas_01",
   "topic": "Series",
   "qtype": "Number Series",
   "lvl": 1,
   "expSec": 20,
   "q": "Select the number that will come next in the series: 7, 14, 28, 56, ?",
   "opts": [
    "98",
    "112",
    "110",
    "120"
   ],
   "ans": 1,
   "exp": "Each term is double the previous one: 7x2=14, 14x2=28, 28x2=56, so 56x2=112.",
   "trick": "Ratio is constant at 2. Delete 98 and 110 instantly since they are not doubles; 120 is 56+64, the trap for anyone who switches to adding."
  },
  {
   "id": "reas_02",
   "topic": "Series",
   "qtype": "Number Series",
   "lvl": 2,
   "expSec": 35,
   "q": "Select the number that will come in place of the question mark: 4, 9, 19, 39, 79, ?",
   "opts": [
    "159",
    "155",
    "149",
    "161"
   ],
   "ans": 0,
   "exp": "The rule is multiply by 2 and add 1: 4x2+1=9, 9x2+1=19, 19x2+1=39, 39x2+1=79, so 79x2+1=159.",
   "trick": "Differences are 5, 10, 20, 40 and they keep doubling, so the next gap is 80 and 79+80=159. Delete any option that is not 79 plus a power-of-two multiple of 5."
  },
  {
   "id": "reas_03",
   "topic": "Analogy",
   "qtype": "Word Analogy",
   "lvl": 1,
   "expSec": 20,
   "q": "Select the option that is related to the third word in the same way as the second word is related to the first word. Pen : Write :: Knife : ?",
   "opts": [
    "Sharp",
    "Metal",
    "Cut",
    "Kitchen"
   ],
   "ans": 2,
   "exp": "A pen is a tool whose function is to write; a knife is a tool whose function is to cut.",
   "trick": "The relation is tool-to-function, so the answer must be a verb. Delete Sharp, Metal and Kitchen because all three are properties or places, not actions."
  },
  {
   "id": "reas_04",
   "topic": "Analogy",
   "qtype": "Number Analogy",
   "lvl": 2,
   "expSec": 35,
   "q": "Select the number that is related to the third number in the same way as the second number is related to the first number. 7 : 56 :: 9 : ?",
   "opts": [
    "90",
    "72",
    "99",
    "81"
   ],
   "ans": 0,
   "exp": "The rule is n x (n+1): 7 x 8 = 56, so 9 x 10 = 90.",
   "trick": "Confirm the rule two ways on the first pair (7x8 and 7 squared plus 7 both give 56). That immediately exposes 81 (9 squared) and 72 (9x8) as the planted traps."
  },
  {
   "id": "reas_05",
   "topic": "Classification",
   "qtype": "Odd One Out (Numbers)",
   "lvl": 2,
   "expSec": 40,
   "q": "Select the number that does NOT belong to the group.",
   "opts": [
    "26",
    "124",
    "215",
    "65"
   ],
   "ans": 3,
   "exp": "26 = 3 cubed minus 1, 124 = 5 cubed minus 1 and 215 = 6 cubed minus 1, but 65 = 4 cubed plus 1, so it breaks the pattern.",
   "trick": "Add 1 to every option and look for a perfect cube: 27, 125 and 216 are cubes, 66 is not. One pass of plus-one settles it in five seconds."
  },
  {
   "id": "reas_06",
   "topic": "Classification",
   "qtype": "Odd One Out (Words)",
   "lvl": 1,
   "expSec": 20,
   "q": "Select the word that does NOT belong to the group.",
   "opts": [
    "Bronze",
    "Copper",
    "Zinc",
    "Iron"
   ],
   "ans": 0,
   "exp": "Copper, zinc and iron are pure metals (elements), whereas bronze is an alloy of copper and tin.",
   "trick": "Ask whether each item appears on the periodic table. Only bronze does not, so delete the other three without further thought."
  },
  {
   "id": "reas_07",
   "topic": "Coding-Decoding",
   "qtype": "Letter Shift Coding",
   "lvl": 1,
   "expSec": 25,
   "q": "In a certain code language, FLOWER is written as GMPXFS. How will GARDEN be written in the same code?",
   "opts": [
    "HBSEFO",
    "HBSFEO",
    "HBTEFO",
    "GBSEFO"
   ],
   "ans": 0,
   "exp": "Every letter moves one step forward, so G-A-R-D-E-N becomes H-B-S-E-F-O.",
   "trick": "Code only the first two letters: G gives H and A gives B. HB deletes GBSEFO, then the third letter S deletes HBTEFO, leaving a single-letter check."
  },
  {
   "id": "reas_08",
   "topic": "Coding-Decoding",
   "qtype": "Letter Shift Coding",
   "lvl": 2,
   "expSec": 35,
   "q": "In a certain code language, PAINT is written as SDLQW. How will EXCEL be written in the same code?",
   "opts": [
    "HAFHO",
    "HBFHO",
    "HAFIO",
    "GAFHO"
   ],
   "ans": 0,
   "exp": "Each letter moves three steps forward (P to S, A to D, I to L, N to Q, T to W). So E gives H, X wraps around to A, C gives F, E gives H and L gives O, that is HAFHO.",
   "trick": "The wrap on X is the whole question: X plus 3 passes Z and lands on A. Fix the first two letters as HA and three options die at once."
  },
  {
   "id": "reas_09",
   "topic": "Coding-Decoding",
   "qtype": "Substitution Coding",
   "lvl": 3,
   "expSec": 60,
   "q": "In a certain code language, 297 means tie is blue, 579 means is blue good, and 238 means tie looks nice. Which digit stands for the word tie?",
   "opts": [
    "9",
    "7",
    "2",
    "8"
   ],
   "ans": 2,
   "exp": "The first and third statements share only the word tie, and their digit sets {2,9,7} and {2,3,8} share only the digit 2. Hence tie is coded as 2.",
   "trick": "Never decode every word. Pick the two statements that have exactly one word in common with the target, intersect their digits, and the single survivor is the answer."
  },
  {
   "id": "reas_10",
   "topic": "Blood Relations",
   "qtype": "Relation Chain",
   "lvl": 3,
   "expSec": 55,
   "q": "A is the brother of B. C is the mother of B. D is the father of C. E is the son of D. How is A related to E?",
   "opts": [
    "Son",
    "Nephew",
    "Brother",
    "Uncle"
   ],
   "ans": 1,
   "exp": "D is the father of both C and E, so E is the brother of C. Since C is the mother of A and B, E is the maternal uncle of A, and A, being male, is the nephew of E.",
   "trick": "Sketch generation levels only: D on top, C and E on the middle line, A and B below. Anything one level under an uncle must be a nephew, which deletes Son, Brother and Uncle by level alone."
  },
  {
   "id": "reas_11",
   "topic": "Syllogism",
   "qtype": "Two Statement Syllogism",
   "lvl": 2,
   "expSec": 40,
   "q": "Statements: All pens are books. All books are tables. Conclusions: I. All pens are tables. II. Some tables are pens. Which conclusion logically follows?",
   "opts": [
    "Neither conclusion follows",
    "Both conclusions follow",
    "Only conclusion II follows",
    "Only conclusion I follows"
   ],
   "ans": 1,
   "exp": "Pens lie inside books, which lie inside tables, so all pens are tables and conclusion I follows. Since pens exist and every pen is a table, some tables are pens, so conclusion II follows too.",
   "trick": "When both statements are All-type and the middle term chains cleanly, the universal conclusion and its particular converse both follow. Delete the two single-conclusion options on sight."
  },
  {
   "id": "reas_12",
   "topic": "Syllogism",
   "qtype": "Two Statement Syllogism",
   "lvl": 3,
   "expSec": 55,
   "q": "Statements: Some cats are dogs. No dog is a rat. Conclusions: I. Some cats are not rats. II. No cat is a rat. Which conclusion logically follows?",
   "opts": [
    "Neither conclusion follows",
    "Only conclusion II follows",
    "Both conclusions follow",
    "Only conclusion I follows"
   ],
   "ans": 3,
   "exp": "The cats that are dogs cannot be rats, so some cats are definitely not rats and conclusion I follows. Cats outside the dog region may still be rats, so the universal conclusion II does not follow.",
   "trick": "One particular statement plus one universal can only produce a particular conclusion, never a universal one. That single rule deletes conclusion II and both options that contain it."
  },
  {
   "id": "reas_13",
   "topic": "Venn/Set",
   "qtype": "Set Theory",
   "lvl": 2,
   "expSec": 40,
   "q": "In a class of 60 students, 35 play cricket, 30 play football and 15 play both games. How many students play neither game?",
   "opts": [
    "20",
    "10",
    "15",
    "5"
   ],
   "ans": 1,
   "exp": "Students playing at least one game = 35 + 30 minus 15 = 50, so students playing neither = 60 minus 50 = 10.",
   "trick": "Fill the overlap first with 15, giving only-cricket 20 and only-football 15. Those three add to 50 and the rest of the class is the answer."
  },
  {
   "id": "reas_14",
   "topic": "Mathematical Operations",
   "qtype": "Symbol Substitution",
   "lvl": 2,
   "expSec": 40,
   "q": "If + means divide, - means multiply, divide means add and x means subtract, then what is the value of 16 + 4 - 5 divide 12 x 8 ?",
   "opts": [
    "20",
    "24",
    "32",
    "28"
   ],
   "ans": 1,
   "exp": "After substitution the line reads 16 divided by 4, times 5, plus 12, minus 8, that is 4 x 5 + 12 - 8 = 20 + 12 - 8 = 24.",
   "trick": "Rewrite the whole expression with real signs before doing any arithmetic, then apply BODMAS. Working left to right without rewriting is exactly what produces the distractor 32."
  },
  {
   "id": "reas_15",
   "topic": "Mathematical Operations",
   "qtype": "Correct Sign Selection",
   "lvl": 3,
   "expSec": 50,
   "q": "Select the correct combination of mathematical signs that can sequentially replace the star symbols and balance the equation: 24 * 6 * 3 * 3 * 15",
   "opts": [
    "x, divide, -, =",
    "+, -, divide, =",
    "divide, x, +, =",
    "-, +, x, ="
   ],
   "ans": 2,
   "exp": "Using divide, x, + and = gives 24 divided by 6, times 3, plus 3 = 4 x 3 + 3 = 12 + 3 = 15, which balances the equation.",
   "trick": "The fourth star is the equals sign in every option, so only the first three matter. The left side starts at 24 and must fall to 15, so test the option beginning with divide first."
  },
  {
   "id": "reas_16",
   "topic": "Order-Ranking",
   "qtype": "Row Position",
   "lvl": 2,
   "expSec": 35,
   "q": "In a row of 40 students, Rahul is 12th from the left end and Amit is 18th from the right end. How many students are sitting between Rahul and Amit?",
   "opts": [
    "10",
    "9",
    "12",
    "11"
   ],
   "ans": 0,
   "exp": "Amit position from the left = 40 minus 18 plus 1 = 23. Students strictly between positions 12 and 23 = 23 minus 12 minus 1 = 10.",
   "trick": "Convert both ranks to the same end, subtract, then remove one. Skipping the final minus one gives 11 and skipping the plus one gives 9 — both are planted options."
  },
  {
   "id": "reas_17",
   "topic": "Direction Sense",
   "qtype": "Path Tracing",
   "lvl": 2,
   "expSec": 45,
   "q": "Ravi starts from his house facing north. He walks 8 m, then turns right and walks 5 m, then turns right and walks 12 m, then turns right and walks 5 m. How far is he from his house and in which direction?",
   "opts": [
    "8 m south",
    "4 m north",
    "5 m south",
    "4 m south"
   ],
   "ans": 3,
   "exp": "Taking the house as origin he reaches 8 m north, then 5 m east, then 12 m south which puts him 4 m below the start, then 5 m west which returns him to the starting line. He is 4 m south of the house.",
   "trick": "Track the two axes separately: north-south is +8 then -12 = -4, and east-west is +5 then -5 = 0. A zero on one axis means the answer is a pure direction, so no square-root work is needed."
  },
  {
   "id": "reas_18",
   "topic": "Dictionary Order",
   "qtype": "Alphabetical Arrangement",
   "lvl": 2,
   "expSec": 35,
   "q": "Arrange the following words in the order in which they appear in an English dictionary and select the word that comes third: Perfume, Perfect, Perform, Perhaps, Period",
   "opts": [
    "Perform",
    "Period",
    "Perhaps",
    "Perfume"
   ],
   "ans": 3,
   "exp": "All five share Per, so compare the fourth letter: f, f, f, h, i. Among the three f words the fifth letters are e, o and u, giving Perfect, Perform, Perfume. The full order is Perfect, Perform, Perfume, Perhaps, Period, so the third word is Perfume.",
   "trick": "Fix the common prefix Per and compare only what follows. Since f precedes h and i, the three f words occupy the first three slots, so Perhaps and Period can be deleted immediately."
  },
  {
   "id": "reas_19",
   "topic": "Alphanumeric Series",
   "qtype": "Element Position",
   "lvl": 3,
   "expSec": 60,
   "q": "Study the following series: 4 M A 7 K R 2 E 9 B 5 U T 3 P 6 J. How many numbers in the series are immediately preceded by a consonant and immediately followed by a consonant?",
   "opts": [
    "3",
    "4",
    "1",
    "2"
   ],
   "ans": 3,
   "exp": "Checking each number: 4 has nothing before it, 7 is preceded by the vowel A, 2 is followed by the vowel E, 9 is preceded by the vowel E, 5 is followed by the vowel U, 3 has T before and P after, and 6 has P before and J after. Only 3 and 6 qualify, so the count is 2.",
   "trick": "Mark the vowels A, E and U first and strike out every number that touches one. Only two numbers survive, so you never scan the series twice."
  },
  {
   "id": "reas_20",
   "topic": "Arithmetic Reasoning",
   "qtype": "Ages",
   "lvl": 2,
   "expSec": 40,
   "q": "A father is three times as old as his son. After 12 years, the father will be twice as old as his son. What is the present age of the son?",
   "opts": [
    "16",
    "12",
    "10",
    "14"
   ],
   "ans": 1,
   "exp": "Let the son be x, so the father is 3x. Then 3x + 12 = 2(x + 12), giving 3x + 12 = 2x + 24 and x = 12. Check: 36 and 12 now, 48 and 24 after 12 years.",
   "trick": "Skip the algebra and test options: the son must make the father a multiple of 3 now and exactly double after 12 years. Son 12 gives 36 and 48 against 24 on the first try."
  },
  {
   "id": "reas_21",
   "topic": "Mirror/Water Image",
   "qtype": "Mirror Image of Figure",
   "lvl": 1,
   "expSec": 25,
   "q": "Select the figure that is the correct mirror image of the given figure when the mirror is placed on the right-hand side.",
   "svg": "<div class=\"figrow\"><div><svg viewBox=\"0 0 80 80\" width=\"90\" height=\"90\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"70\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"48\" cy=\"20\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">Given figure</div></div></div><div class=\"figrow\"><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"70\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"20\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">A</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"10\" x2=\"10\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"20\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">B</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"70\" y1=\"10\" x2=\"10\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"48\" cy=\"20\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">C</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"70\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"48\" cy=\"20\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">D</div></div></div>",
   "opts": [
    "Figure A",
    "Figure B",
    "Figure C",
    "Figure D"
   ],
   "ans": 1,
   "exp": "A mirror on the right flips the figure left-to-right. The circle in the top-right corner must move to the top-left, and the diagonal running top-left to bottom-right must become one running top-right to bottom-left. Only figure B changes both.",
   "trick": "In a right-side mirror every single element must swap sides — check two elements, not one. Figure D is the unchanged original and figures A and C each move only one element, so all three die on that test."
  },
  {
   "id": "reas_22",
   "topic": "Cube & Dice",
   "qtype": "Opposite Face",
   "lvl": 3,
   "expSec": 45,
   "q": "Two different positions of the same dice are shown below. Which number will be on the face opposite to the face showing 1?",
   "svg": "<div class=\"figrow\"><div><svg viewBox=\"0 0 86 86\" width=\"100\" height=\"100\"><rect x=\"12\" y=\"28\" width=\"44\" height=\"44\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"12,28 30,12 74,12 56,28\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"56,28 74,12 74,56 56,72\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"43\" y=\"25\" font-size=\"13\" text-anchor=\"middle\" fill=\"#111\" stroke=\"none\">1</text><text x=\"34\" y=\"55\" font-size=\"14\" text-anchor=\"middle\" fill=\"#111\" stroke=\"none\">2</text><text x=\"65\" y=\"47\" font-size=\"13\" text-anchor=\"middle\" fill=\"#111\" stroke=\"none\">3</text></svg><div class=\"figcap\">(i)</div></div><div><svg viewBox=\"0 0 86 86\" width=\"100\" height=\"100\"><rect x=\"12\" y=\"28\" width=\"44\" height=\"44\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"12,28 30,12 74,12 56,28\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><polygon points=\"56,28 74,12 74,56 56,72\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><text x=\"43\" y=\"25\" font-size=\"13\" text-anchor=\"middle\" fill=\"#111\" stroke=\"none\">1</text><text x=\"34\" y=\"55\" font-size=\"14\" text-anchor=\"middle\" fill=\"#111\" stroke=\"none\">4</text><text x=\"65\" y=\"47\" font-size=\"13\" text-anchor=\"middle\" fill=\"#111\" stroke=\"none\">5</text></svg><div class=\"figcap\">(ii)</div></div></div>",
   "opts": [
    "2",
    "6",
    "4",
    "3"
   ],
   "ans": 1,
   "exp": "Position (i) shows 2 and 3 adjacent to 1, and position (ii) shows 4 and 5 adjacent to 1. So four of the six faces touch 1, and the only number left, 6, must be opposite to it.",
   "trick": "List every number seen next to the target face. The instant four distinct neighbours are collected, the one missing number is the opposite face — no mental rotation needed."
  },
  {
   "id": "reas_23",
   "topic": "Counting Figures",
   "qtype": "Triangle Counting",
   "lvl": 3,
   "expSec": 50,
   "q": "How many triangles are there in the figure given below?",
   "svg": "<svg viewBox=\"0 0 140 90\" width=\"180\" height=\"116\"><rect x=\"15\" y=\"12\" width=\"110\" height=\"66\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"15\" y1=\"12\" x2=\"125\" y2=\"78\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"125\" y1=\"12\" x2=\"15\" y2=\"78\" stroke=\"#111\" stroke-width=\"2\"/></svg>",
   "opts": [
    "6",
    "4",
    "8",
    "10"
   ],
   "ans": 2,
   "exp": "The two diagonals form 4 small triangles around the centre point. In addition each diagonal cuts the rectangle into 2 large triangles, which gives 4 more. Total = 4 + 4 = 8.",
   "trick": "Count by size, never by eye. Four smallest plus four half-rectangles is the fixed count for this standard figure, so 4 and 6 are undercounts and 10 means you double-counted."
  },
  {
   "id": "reas_24",
   "topic": "Paper Folding & Cutting",
   "qtype": "Paper Folding and Punching",
   "lvl": 3,
   "expSec": 55,
   "q": "A square sheet of paper is folded along the dotted line as shown in figure (i), and then a hole is punched in the folded sheet as shown in figure (ii). Select the figure that shows how the sheet will look when it is unfolded.",
   "svg": "<div class=\"figrow\"><div><svg viewBox=\"0 0 80 80\" width=\"82\" height=\"82\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"10\" y1=\"40\" x2=\"70\" y2=\"40\" stroke=\"#111\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/></svg><div class=\"figcap\">(i)</div></div><div><svg viewBox=\"0 0 80 80\" width=\"82\" height=\"82\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"30\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"28\" cy=\"25\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">(ii)</div></div></div><div class=\"figrow\"><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"28\" cy=\"20\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"28\" cy=\"35\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">A</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"28\" cy=\"25\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"28\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">B</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"40\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">C</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"28\" cy=\"25\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><circle cx=\"52\" cy=\"25\" r=\"6\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">D</div></div></div>",
   "opts": [
    "Figure A",
    "Figure B",
    "Figure C",
    "Figure D"
   ],
   "ans": 1,
   "exp": "The fold is along the horizontal centre line, so unfolding reflects the punched hole across that line. The hole stays where it is in the upper half and a matching hole appears in the lower half at the same distance from the left edge, which is figure B.",
   "trick": "One fold always doubles the holes, so delete the single-hole figure C at once. The remaining pair must be mirror images about the fold line, which is horizontal here — that kills figure D (mirrored about a vertical line) and figure A (both holes on the same side of the fold)."
  },
  {
   "id": "reas_25",
   "topic": "Embedded/Hidden Figure",
   "qtype": "Embedded Figure",
   "lvl": 3,
   "expSec": 50,
   "q": "Select the figure that is embedded in the given figure (rotation is not allowed).",
   "svg": "<div class=\"figrow\"><div><svg viewBox=\"0 0 80 80\" width=\"92\" height=\"92\"><rect x=\"10\" y=\"10\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"70\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"70\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">Given figure</div></div></div><div class=\"figrow\"><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><circle cx=\"40\" cy=\"40\" r=\"26\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">A</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><polygon points=\"40,14 66,62 14,62\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">B</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><polygon points=\"16,18 52,18 52,54\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">C</div></div><div><svg viewBox=\"0 0 80 80\" width=\"78\" height=\"78\"><polygon points=\"26,20 54,20 68,62 12,62\" fill=\"none\" stroke=\"#111\" stroke-width=\"2\"/></svg><div class=\"figcap\">D</div></div></div>",
   "opts": [
    "Figure A",
    "Figure B",
    "Figure C",
    "Figure D"
   ],
   "ans": 2,
   "exp": "In the given figure the top edge, the vertical centre line and the diagonal together enclose a right-angled triangle whose two perpendicular sides are equal, which is exactly figure C.",
   "trick": "Count the slanted lines in the given figure — there is only one. Any option needing two different slants (figures B and D) is impossible, and figure A has a curve while the given figure has none, so C is the only survivor."
  }
 ]
};
