/* September 30 — Test 3: Additional Maths Mock — 20 Questions
   SSC CGL Tier-1 Pattern · Timed · Speed + Accuracy · Shortcut focus
   ============================================================ */

/* EXAM INSTRUCTIONS */
"use strict";
/* Questions: 20 · Time: 25 minutes · Max Marks: 20 · Negative Marking: 0.25 */
"Use question selection. Solve immediately clear questions first. Use shortcuts for calculation-based questions. Flag difficult ones for later review. Submit after completing."

/* ======================================
   QUESTIONS — 20 SSC CGL-style Maths questions
   Focus: Speed + Accuracy + Shortcut Recognition
   Difficulty: 20% Easy, 50% Moderate, 30% Hard
   ====================================== */

const questions = [
/* ======================================
   PERCENTAGE (Q1-Q3)
   ====================================== */

  /* Q1: Percentage - basic */
  { q: "40% of 250 + 20% of 150 = ?", options: ["130", "140", "110", "120"], answer: 0, explanation: "40% of 250 = 100; 20% of 150 = 30; 100 + 30 = 130.", rule: "Percentage of number: (percentage/100) × number.", trapcat: "Calculation error", level: "L1 Direct" },
  { q: "If 30% of a number is 45, the number is:", options: ["150", "135", "120", "180"], answer: 0, explanation: "Number × 30/100 = 45 → Number = 45 × 100/30 = 150.", rule: "Reverse percentage: number = value × 100/%.", trapcat: "Reverse calculation", level: "L1 Direct" },
  { q: "A number increased by 15% gives 345. The original number is:", options: ["300", "320", "280", "350"], answer: 0, explanation: "Original × 1.15 = 345 → Original = 345/1.15 = 300. Shortcut: 345/115 × 100 = 300.", rule: "Percentage increase reverse calculation.", trapcat: "Percentage increase", level: "L1 Direct" },

/* ======================================
   RATIO & PROPORTION (Q4-Q5)
   ====================================== */

  { q: "If a:b = 3:4 and b:c = 5:7, then a:c = ?", options: ["15:28", "3:7", "5:28", "12:35"], answer: 0, explanation: "a:c = a:b × b:c ÷ b = 3:4 × 5:7 = (3×5):(4×7) = 15:28 (after eliminating b).", rule: "Chain ratio: a:c = (a:b × b:c) / b.", trapcat: "Ratio chain", level: "L2 Application" },
  { q: "If x:y = 2:3, then (3x+2y):(2x+y) = ?", options: ["13:7", "12:7", "11:7", "10:7"], answer: 1, explanation: "Substitute x=2k, y=3k: (3×2k+2×3k):(2×2k+3k) = (6k+6k):(4k+3k) = 12k:7k = 12:7.", rule: "Ratio substitution with variable k.", trapcat: "Ratio algebra", level: "L2 Application" },

/* ======================================
   AVERAGE (Q6-Q7)
   ====================================== */

  { q: "The average of 10 numbers is 25. If each number is increased by 5, the new average is:", options: ["20", "25", "30", "35"], answer: 2, explanation: "If each number increased by 5, the average also increases by 5 → 25+5 = 30.", rule: "Average adjustment: new avg = old avg ± change.", trapcat: "Average property", level: "L1 Direct" },
  { q: "The average weight of 8 persons increases by 1.5 kg when a new person replaces one of them weighing 68 kg. What is the weight of the new person?", options: ["70", "75", "80", "85"], answer: 2, explanation: "Total increase = 8 × 1.5 = 12 kg. New person's weight = 68 + 12 = 80 kg exactly.", rule: "Average increase × count = total weight change; add that to the replaced person's weight.", trapcat: "Average with replacement", level: "L2 Application" },

/* ======================================
   PROFIT & LOSS (Q8-Q9)
   ====================================== */

  { q: "An article is sold for Rs. 595 at a loss of 15%. What is the cost price?", options: ["Rs. 600", "Rs. 650", "Rs. 700", "Rs. 750"], answer: 2, explanation: "CP = SP × 100/(100-loss%) = 595 × 100/85 = Rs. 700 exactly.", rule: "Cost price = Selling price × 100/(100−loss%).", trapcat: "Profit-loss calculation", level: "L2 Application" },
  { q: "A trader marks his goods 40% above cost price and allows 25% discount. His gain percent is:", options: ["5%", "10%", "15%", "20%"], answer: 0, explanation: "CP = 100, Marked Price = 140, SP = 140 × 0.75 = 105, Gain = 5%. Rule: Marked price discount chain.", trapcat: "Profit-loss with discount", level: "L2 Application" },

/* ======================================
   DISCOUNT (Q10)
   ====================================== */

  { q: "Marked price of a table is Rs. 800 and discount offered is 15%. Selling price is:", options: ["Rs. 680", "Rs. 700", "Rs. 720", "Rs. 740"], answer: 0, explanation: "SP = MP × (1 - discount%) = 800 × 0.85 = Rs. 680.", rule: "Selling price = Marked price × (1 − discount%).", trapcat: "Discount calculation", level: "L1 Direct" },

/* ======================================
   SI & CI (Q11-Q12)
   ====================================== */

  { q: "The simple interest on Rs. 1500 for 3 years at 5% per annum is:", options: ["Rs. 150", "Rs. 225", "Rs. 300", "Rs. 175"], answer: 1, explanation: "SI = P × R × T/100 = 1500 × 5 × 3/100 = Rs. 225.", rule: "Simple interest formula.", trapcat: "SI calculation", level: "L1 Direct" },
  { q: "The compound interest on Rs. 1000 at 5% per annum for 2 years compounded annually is:", options: ["Rs. 102.50", "Rs. 105", "Rs. 50", "Rs. 100"], answer: 0, explanation: "CI = P(1+R/100)^T − P = 1000(1.05)^2 − 1000 = 1000×1.1025 − 1000 = Rs. 102.50.", rule: "Compound interest formula annually.", trapcat: "CI calculation", level: "L1 Direct" },

/* ======================================
   MIXTURE & ALLIGATION (Q13)
   ====================================== */

  { q: "In what ratio must rice at Rs. 10 per kg be mixed with rice at Rs. 15 per kg to get a mixture worth Rs. 12 per kg?", options: ["2:3", "3:2", "1:2", "2:1"], answer: 1, explanation: "By alligation: (15-12):(12-10) = 3:2. Ratio = 3:2 (dearer:cheaper).", rule: "Alligation method: (d-c):(m-d) where d=dearer, c=cheaper, m=mean.", trapcat: "Alligation", level: "L2 Application" },

/* ======================================
   PARTNERSHIP (Q14)
   ====================================== */

  { q: "A and B invest in a business in the ratio 3:2. If 5% of the total profit goes to charity and A's share (from the remaining 95%) is Rs. 1140, the total profit is:", options: ["Rs. 2000", "Rs. 2500", "Rs. 3000", "Rs. 3500"], answer: 0, explanation: "After charity, 95% of the profit remains. A's share = (3/5) × 95% = 57% of total profit. So 0.57 × Total = 1140 → Total = 1140/0.57 = Rs. 2000 exactly.", rule: "Partnership profit sharing with a charity deduction taken off first, then split by investment ratio.", trapcat: "Partnership with charity", level: "L3 Trap" },
  { q: "A and B enter into partnership. A invests Rs. 20,000 for 6 months and B invests Rs. 15,000 for 8 months. Out of total profit, A gets Rs. 1200. What is 20% of total profit?", options: ["Rs. 480", "Rs. 500", "Rs. 520", "Rs. 540"], answer: 0, explanation: "A's capital-months = 20000 × 6 = 120000; B's = 15000 × 8 = 120000. Ratio = 1:1. A's share = 1/2 of profit = 1200 → Total = 2400. 20% of total = 480.", rule: "Partnership: profit ratio = capital × time.", trapcat: "Partnership capital-time", level: "L2 Application" },

/* ======================================
   AGES (Q15)
   ====================================== */

  { q: "The ratio of ages of A and B is 3:5 and their sum is 64. Age of A after 4 years will be:", options: ["28", "32", "36", "40"], answer: 0, explanation: "A's share = 3/8 × 64 = 24. After 4 years = 24 + 4 = 28.", rule: "Age ratio with sum.", trapcat: "Age calculation", level: "L1 Direct" },

/* ======================================
   TIME & WORK (Q16-Q17)
   ====================================== */

  { q: "A can complete a work in 10 days and B in 15 days. Working together, they will complete the work in:", options: ["6 days", "8 days", "10 days", "12 days"], answer: 0, explanation: "A's 1 day work = 1/10, B's 1 day work = 1/15. Together = 1/10 + 1/15 = 5/30 = 1/6. So 6 days.", rule: "Work together: 1/A + 1/B = 1/Combined time.", trapcat: "Time and work", level: "L1 Direct" },
  { q: "A and B together can complete a work in 6 days. A alone can do it in 9 days. B alone can do it in:", options: ["12 days", "15 days", "18 days", "20 days"], answer: 2, explanation: "Together 1 day = 1/6; A alone 1 day = 1/9; B alone 1 day = 1/6 - 1/9 = 3/18 - 2/18 = 1/18 → 18 days.", rule: "Work efficiency: combined - one = other.", trapcat: "Time and work", level: "L1 Direct" },

/* ======================================
   PIPES & CISTERNS (Q18)
   ====================================== */

  { q: "Pipe A can fill a tank in 4 hours and Pipe B in 6 hours. If both pipes are opened together, the tank will be filled in:", options: ["2.4 hours", "3 hours", "4.5 hours", "5 hours"], answer: 0, explanation: "A's rate = 1/4, B's rate = 1/6. Together = 1/4 + 1/6 = 5/12 → time = 12/5 = 2.4 hours.", rule: "Pipes together: 1/A + 1/B = 1/Time.", trapcat: "Pipes and cisterns", level: "L1 Direct" },

/* ======================================
   TIME, SPEED & DISTANCE (Q19-Q20)
   ====================================== */

  /* Q19: Average speed - FIXED */
  { q: "A train travels at 60 km/h for 2 hours and at 80 km/h for 3 hours. Average speed is:", options: ["65 km/h", "68 km/h", "70 km/h", "72 km/h"], answer: 3, explanation: "Total distance = 60×2 + 80×3 = 120 + 240 = 360 km. Total time = 5 h. Average speed = Total distance / Total time = 360/5 = 72 km/h. Key concept: Average speed = total distance ÷ total time (NOT average of two speeds).", trapcat: "Average speed trap - using (s1+s2)/2", level: "L2 Application" },
  
  /* Q20: Round trip - FIXED */
  { q: "A person covers a distance at 5 km/h and returns at 4 km/h. If total time taken is 9 hours, the distance is:", options: ["20 km", "18 km", "16 km", "22 km"], answer: 0, explanation: "Let distance = d. Time1 = d/5, Time2 = d/4. Total time = d/5 + d/4 = (4d+5d)/20 = 9d/20 = 9 → d = 20 km. Key concept: In round trips, use formula 2xy/(x+y) for average speed, or solve directly as done here.", trapcat: "Round trip speed trap - using wrong formula", level: "L2 Application" },
];

/* ============================================================
   TEST CONFIGURATION
   ============================================================ */
const testConfig = {
  testId: "sept30_test3_maths",
  date: "September 30",
  testNumber: 3,
  name: "Additional Maths Mock",
  subject: "Quantitative Aptitude",
  totalQuestions: questions.length,
  timeLimitMinutes: 25,
  maxMarks: 20,
  negativeMarking: 0.25,
  examMode: true,
  instructions: "Questions: 20 · Time: 25 minutes · Max Marks: 20 · Negative Marking: 0.25 · Difficulty: 20% Easy, 50% Moderate, 30% Hard. Strategy: ROUND 1 (8 min): Solve immediately clear questions. ROUND 2 (10 min): Attempt moderate questions using shortcuts. ROUND 3 (7 min): Attempt difficult if time permits. Submit before time ends."
};

/* ============================================================
   EXPORT FOR INTEGRATION
   ============================================================ */
module.exports = { questions, testConfig };