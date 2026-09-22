/* paper01-quant.js — SSC CGL Tier-1 Diagnostic Paper 01 · Quantitative Aptitude (25 Q) */
/* ans is the 0-based index of the correct option.  lvl: 1 easy, 2 medium, 3 hard.
   expSec = seconds a good candidate should need.  Answer positions are balanced
   across A-D so the key is not guessable from position alone. */

const P01_QUANT = {
 "questions": [
  {
   "id": "quant_01",
   "topic": "Percentage",
   "qtype": "Election / Valid Votes",
   "lvl": 2,
   "expSec": 60,
   "q": "In an election between two candidates, 12 percent of the votes polled were declared invalid. The winner secured 56 percent of the valid votes and won by 1584 votes. How many votes were polled in all?",
   "opts": [
    "13200",
    "15000",
    "14400",
    "16500"
   ],
   "ans": 1,
   "exp": "Winner 56 percent, loser 44 percent of valid votes, so the margin is 12 percent of the valid votes. 0.12 x V = 1584, V = 13200 valid votes. Valid votes are 88 percent of the total, so total = 13200 / 0.88 = 15000.",
   "trick": "Margin percent = (winner percent - loser percent) always taken on VALID votes, never on total. Get valid first, then divide by (100 - invalid percent) to reach total."
  },
  {
   "id": "quant_02",
   "topic": "Profit and Loss",
   "qtype": "Successive Discount on Marked Price",
   "lvl": 2,
   "expSec": 50,
   "q": "A shopkeeper marks his goods 40 percent above the cost price and then allows two successive discounts of 10 percent and 5 percent. What is his profit percent?",
   "opts": [
    "19 percent",
    "18.5 percent",
    "21 percent",
    "19.7 percent"
   ],
   "ans": 3,
   "exp": "Take CP = 100, so MP = 140. After 10 percent: 140 x 0.9 = 126. After 5 percent: 126 x 0.95 = 119.7. SP = 119.7, so profit = 19.7 percent.",
   "trick": "Successive discounts: total discount = x + y - xy/100 with x and y taken POSITIVE. Here 10 + 5 - 50/100 = 14.5 percent, so SP = 140 x 0.855 = 119.7 and profit = 19.7 percent. Simply adding 10 + 5 = 15 percent gives SP 119 and the trap answer 19 percent, which is option A."
  },
  {
   "id": "quant_03",
   "topic": "Profit and Loss",
   "qtype": "Two Articles at Same Selling Price",
   "lvl": 2,
   "expSec": 55,
   "q": "A man sells two watches at Rs 1980 each. On one he gains 10 percent and on the other he loses 10 percent. What is his overall loss in the whole transaction?",
   "opts": [
    "Rs 44",
    "No loss no gain",
    "Rs 40",
    "Rs 36"
   ],
   "ans": 2,
   "exp": "CP of the gain watch = 1980 / 1.1 = Rs 1800. CP of the loss watch = 1980 / 0.9 = Rs 2200. Total CP = 4000, total SP = 3960, so loss = Rs 40 (which is 1 percent of 4000).",
   "trick": "Same SP with plus and minus x percent is ALWAYS a loss of x^2/100 percent, here 100/100 = 1 percent. Loss amount = 1 percent of total CP; total CP = total SP x 100/99 = 4000."
  },
  {
   "id": "quant_04",
   "topic": "Ratio and Proportion",
   "qtype": "Chained Ratio / Division of Money",
   "lvl": 1,
   "expSec": 40,
   "q": "An amount of Rs 8400 is divided among A, B and C such that A : B = 2 : 3 and B : C = 4 : 5. What is the share of C?",
   "opts": [
    "Rs 3000",
    "Rs 2880",
    "Rs 3600",
    "Rs 4200"
   ],
   "ans": 2,
   "exp": "Make B common: A : B = 8 : 12 and B : C = 12 : 15, so A : B : C = 8 : 12 : 15, total 35 parts. C = 8400 x 15 / 35 = Rs 3600.",
   "trick": "Chain ratios through the common term B: scale A:B = 2:3 by 4 and B:C = 4:5 by 3, giving A:B:C = 8:12:15, total 35 parts. C = 8400 x 15/35 = 3600. Reading the numbers naively as 2:3:5 gives a total of 10 and C = 8400 x 5/10 = Rs 4200, which is option D, the trap."
  },
  {
   "id": "quant_05",
   "topic": "Mixture and Alligation",
   "qtype": "Alligation with Profit on Mixture",
   "lvl": 2,
   "expSec": 60,
   "q": "In what ratio must tea costing Rs 240 per kg be mixed with tea costing Rs 360 per kg so that the mixture, sold at Rs 396 per kg, yields a profit of 20 percent?",
   "opts": [
    "1 : 3",
    "3 : 1",
    "1 : 2",
    "2 : 3"
   ],
   "ans": 0,
   "exp": "CP of the mixture = 396 / 1.2 = Rs 330 per kg. By alligation, cheaper : dearer = (360 - 330) : (330 - 240) = 30 : 90 = 1 : 3. Check: (1 x 240 + 3 x 360) / 4 = 1320 / 4 = 330.",
   "trick": "Convert the selling price to the mean cost price BEFORE any alligation: 396/1.2 = 330. Alligation cross: cheaper share is proportional to (dearer - mean) = 30, dearer share to (mean - cheaper) = 90, so 30 : 90 = 1 : 3. Flipping the two arms gives 3 : 1, which is option B, the trap."
  },
  {
   "id": "quant_06",
   "topic": "Average",
   "qtype": "Overlapping Groups",
   "lvl": 2,
   "expSec": 45,
   "q": "The average of 11 numbers is 50. The average of the first six numbers is 49 and the average of the last six numbers is 52. What is the sixth number?",
   "opts": [
    "54",
    "55",
    "58",
    "56"
   ],
   "ans": 3,
   "exp": "Sum of first six = 6 x 49 = 294. Sum of last six = 6 x 52 = 312. Their total 606 counts the sixth number twice. Total of all 11 = 11 x 50 = 550. Sixth number = 606 - 550 = 56.",
   "trick": "When two groups of six overlap in one term out of eleven, the overlap = (sum of the two group sums) - (total sum). No equations needed."
  },
  {
   "id": "quant_07",
   "topic": "Simple and Compound Interest",
   "qtype": "CI minus SI for 2 Years",
   "lvl": 2,
   "expSec": 45,
   "q": "The difference between the compound interest and the simple interest on a certain sum for 2 years at 8 percent per annum, compounded annually, is Rs 96. What is the sum?",
   "opts": [
    "Rs 12000",
    "Rs 15000",
    "Rs 9600",
    "Rs 18000"
   ],
   "ans": 1,
   "exp": "For 2 years, CI - SI = P x (r/100)^2 = P x (0.08)^2 = 0.0064 P. So 0.0064 P = 96, giving P = 96 / 0.0064 = Rs 15000.",
   "trick": "Two-year gap formula: CI - SI = P(r/100)^2. Equivalently the difference is one year of simple interest on the first year interest: 8 percent of (8 percent of P)."
  },
  {
   "id": "quant_08",
   "topic": "Simple and Compound Interest",
   "qtype": "Half-Yearly Compounding",
   "lvl": 3,
   "expSec": 65,
   "q": "Find the compound interest on Rs 16000 at 10 percent per annum for 1 year 6 months, when the interest is compounded half-yearly.",
   "opts": [
    "Rs 2400",
    "Rs 2520",
    "Rs 2522",
    "Rs 2648"
   ],
   "ans": 2,
   "exp": "Half-yearly: rate = 5 percent per period, number of periods = 3. Amount = 16000 x (1.05)^3 = 16000 x 1.157625 = Rs 18522. CI = 18522 - 16000 = Rs 2522.",
   "trick": "Half-yearly means halve the rate and double the periods: 5 percent for 3 periods. Ladder it mentally: 16000 to 16800 to 17640 to 18522, so CI = 2522. Plain simple interest, 16000 x 10 percent x 1.5 years = Rs 2400, is option A and is the trap."
  },
  {
   "id": "quant_09",
   "topic": "Time and Work",
   "qtype": "Work Left After Joint Work",
   "lvl": 2,
   "expSec": 50,
   "q": "A can complete a piece of work in 12 days and B can complete the same work in 15 days. They work together for 4 days and then A leaves. In how many more days will B finish the remaining work?",
   "opts": [
    "5 days",
    "6 days",
    "7 days",
    "8 days"
   ],
   "ans": 1,
   "exp": "LCM of 12 and 15 = 60 units of work. A does 5 units a day, B does 4 units a day. In 4 days together they do 4 x 9 = 36 units. Remaining = 60 - 36 = 24 units, which B finishes in 24 / 4 = 6 days.",
   "trick": "Always convert days to LCM work units so efficiencies become whole numbers, then it is pure subtraction and division. No fractions at all."
  },
  {
   "id": "quant_10",
   "topic": "Pipes and Cisterns",
   "qtype": "Two Inlets and One Outlet",
   "lvl": 3,
   "expSec": 55,
   "q": "Pipes A and B can fill a tank in 20 minutes and 30 minutes respectively, while pipe C can empty the full tank in 40 minutes. If all three pipes are opened together when the tank is empty, in how much time will the tank be full?",
   "opts": [
    "17 and 1/7 minutes",
    "15 minutes",
    "16 minutes",
    "18 and 2/3 minutes"
   ],
   "ans": 0,
   "exp": "LCM of 20, 30, 40 = 120 units. A = 6 units per minute, B = 4 units per minute, C = -3 units per minute. Net = 6 + 4 - 3 = 7 units per minute. Time = 120 / 7 = 17 and 1/7 minutes.",
   "trick": "LCM units: tank = 120, A = 6 per minute, B = 4, C = -3. The emptying pipe simply carries a minus sign. Net = 7 per minute, so 120/7 = 17 and 1/7 minutes. A non-integer answer is normal here; if you land on a round number you have probably dropped the minus sign or averaged the times."
  },
  {
   "id": "quant_11",
   "topic": "Boats and Streams",
   "qtype": "Two Equations in Downstream and Upstream",
   "lvl": 3,
   "expSec": 70,
   "q": "A man rows 30 km downstream and 20 km upstream in 4 hours. He rows 45 km downstream and 40 km upstream in 7 hours. What is the speed of the stream?",
   "opts": [
    "2 km/h",
    "5 km/h",
    "3 km/h",
    "2.5 km/h"
   ],
   "ans": 3,
   "exp": "Let 1/downstream speed = x and 1/upstream speed = y. Then 30x + 20y = 4 and 45x + 40y = 7. Doubling the first: 60x + 40y = 8. Subtracting: 15x = 1, so x = 1/15 and downstream speed = 15 km/h. Then 30/15 = 2, so 20y = 2, y = 1/10 and upstream speed = 10 km/h. Stream = (15 - 10)/2 = 2.5 km/h.",
   "trick": "Never solve for boat and stream directly. Substitute x = 1/d and y = 1/u to make the pair linear, solve for d and u, then stream = (d - u)/2 and boat = (d + u)/2. Here d - u = 5 gives the trap 5 km/h if you forget to halve."
  },
  {
   "id": "quant_12",
   "topic": "Algebra",
   "qtype": "Sum and Product Identity",
   "lvl": 2,
   "expSec": 45,
   "q": "If a + b = 7 and ab = 10, then what is the value of a^3 + b^3?",
   "opts": [
    "133",
    "123",
    "163",
    "343"
   ],
   "ans": 0,
   "exp": "a^3 + b^3 = (a + b)^3 - 3ab(a + b) = 343 - 3 x 10 x 7 = 343 - 210 = 133.",
   "trick": "Use a^3 + b^3 = (a+b)^3 - 3ab(a+b) rather than factorising and hunting for a and b. Forgetting the -3ab(a+b) correction leaves the trap 343."
  },
  {
   "id": "quant_13",
   "topic": "Algebra",
   "qtype": "x plus 1/x Identity Family",
   "lvl": 3,
   "expSec": 60,
   "q": "If x^2 - 3x + 1 = 0, then what is the value of x^4 + 1/x^4?",
   "opts": [
    "45",
    "49",
    "47",
    "51"
   ],
   "ans": 2,
   "exp": "Divide x^2 - 3x + 1 = 0 by x: x + 1/x = 3. Square: x^2 + 1/x^2 = 9 - 2 = 7. Square again: x^4 + 1/x^4 = 49 - 2 = 47.",
   "trick": "Divide the quadratic by x to reach x + 1/x, then climb the ladder by squaring and subtracting 2 each time: 3 to 7 to 47. Squaring without subtracting 2 leaves the trap 49."
  },
  {
   "id": "quant_14",
   "topic": "Geometry",
   "qtype": "Incentre Angle",
   "lvl": 1,
   "expSec": 40,
   "q": "In triangle ABC, angle A = 70 degrees. If I is the incentre of the triangle, what is the measure of angle BIC?",
   "opts": [
    "125 degrees",
    "110 degrees",
    "135 degrees",
    "145 degrees"
   ],
   "ans": 0,
   "exp": "For the incentre, angle BIC = 90 + A/2 = 90 + 35 = 125 degrees.",
   "trick": "Three centre formulas: incentre 90 + A/2, circumcentre 2A, orthocentre 180 - A. Here the incentre gives 90 + 35 = 125. Note the orthocentre value 180 - 70 = 110 IS sitting in the options as the trap; the circumcentre value 140 is not offered at all."
  },
  {
   "id": "quant_15",
   "topic": "Geometry",
   "qtype": "Common Tangent to Two Circles",
   "lvl": 3,
   "expSec": 55,
   "q": "Two circles of radii 9 cm and 4 cm touch each other externally. What is the length of their direct common tangent?",
   "opts": [
    "5 cm",
    "6 cm",
    "13 cm",
    "12 cm"
   ],
   "ans": 3,
   "exp": "Circles touching externally have centre distance d = 9 + 4 = 13 cm. Direct common tangent = square root of (d^2 - (r1 - r2)^2) = square root of (169 - 25) = square root of 144 = 12 cm.",
   "trick": "For externally touching circles the direct common tangent is simply 2 x square root of (r1 x r2) = 2 x square root of 36 = 12. The centre distance 13 and the radius difference 5 are the planted traps."
  },
  {
   "id": "quant_16",
   "topic": "Mensuration",
   "qtype": "Sphere Recast into Cones",
   "lvl": 2,
   "expSec": 55,
   "q": "A solid sphere of radius 6 cm is melted and recast into small right circular cones, each of base radius 2 cm and height 3 cm. How many such cones are formed?",
   "opts": [
    "36",
    "54",
    "72",
    "96"
   ],
   "ans": 2,
   "exp": "Volume of sphere = (4/3) x pi x 6^3 = 288 pi. Volume of one cone = (1/3) x pi x 2^2 x 3 = 4 pi. Number of cones = 288 pi / 4 pi = 72.",
   "trick": "Cancel pi immediately and work with the bare numbers: (4/3)(216) = 288 against (1/3)(4)(3) = 4. Using the hemisphere formula 2/3 gives the trap 36."
  },
  {
   "id": "quant_17",
   "topic": "Mensuration",
   "qtype": "Percentage Change in Volume",
   "lvl": 2,
   "expSec": 50,
   "q": "If the radius and the height of a right circular cylinder are each increased by 20 percent, by what percent does its volume increase?",
   "opts": [
    "44 percent",
    "72.8 percent",
    "66.4 percent",
    "60 percent"
   ],
   "ans": 1,
   "exp": "Volume is proportional to r^2 h, so the new volume factor = 1.2 x 1.2 x 1.2 = 1.728. Increase = 0.728, that is 72.8 percent.",
   "trick": "Scaling every linear dimension by k scales area by k^2 and volume by k^3. So 1.2^3 = 1.728 directly. 1.2^2 = 1.44 gives the area trap 44 percent and simple addition gives 60 percent."
  },
  {
   "id": "quant_18",
   "topic": "Trigonometry",
   "qtype": "sin plus cos Identity",
   "lvl": 1,
   "expSec": 40,
   "q": "If sin A + cos A = square root of 2, where A is acute, then what is the value of sin A x cos A?",
   "opts": [
    "1/2",
    "0",
    "1",
    "square root of 2 divided by 2"
   ],
   "ans": 0,
   "exp": "Square both sides: sin^2 A + cos^2 A + 2 sin A cos A = 2. So 1 + 2 sin A cos A = 2, giving sin A cos A = 1/2. (Indeed A = 45 degrees and sin A cos A = (1/root 2)(1/root 2) = 1/2.)",
   "trick": "Squaring sin A + cos A always produces 1 + 2 sin A cos A. Whenever the sum is root 2, the angle is 45 degrees, so every such expression can be checked instantly by substitution."
  },
  {
   "id": "quant_19",
   "topic": "Trigonometry",
   "qtype": "Height and Distance",
   "lvl": 3,
   "expSec": 60,
   "q": "The angle of elevation of the top of a tower from a point on level ground is 30 degrees. On walking 40 metres towards the tower along the same straight line, the angle of elevation becomes 60 degrees. What is the height of the tower?",
   "opts": [
    "20 metres",
    "20 root 3 metres",
    "40 root 3 metres",
    "60 metres"
   ],
   "ans": 1,
   "exp": "Let the height be h and the nearer distance be d. Then h = d tan 60 = d root 3, and h = (d + 40) tan 30 = (d + 40)/root 3. So 3d = d + 40, giving d = 20 and h = 20 root 3, about 34.64 metres.",
   "trick": "Standard 30-60 pair: h = walked distance x (tan A tan B)/(tan B - tan A) = 40 x 1/(root 3 - 1/root 3) = 40 x root 3/2 = 20 root 3. For 30 and 60 the height is always half the walked distance times root 3."
  },
  {
   "id": "quant_20",
   "topic": "Number System",
   "qtype": "Same Remainder HCF",
   "lvl": 3,
   "expSec": 60,
   "q": "What is the largest number which divides 1305, 4665 and 6905 leaving the same remainder in each case?",
   "opts": [
    "1070",
    "1240",
    "1150",
    "1120"
   ],
   "ans": 3,
   "exp": "Take the differences: 4665 - 1305 = 3360, 6905 - 4665 = 2240, 6905 - 1305 = 5600. HCF of 3360 and 2240 is 1120, and 5600 = 5 x 1120, so the HCF is 1120. Check: each of 1305, 4665, 6905 leaves remainder 185 on division by 1120.",
   "trick": "Same remainder, remainder unknown: answer is the HCF of the pairwise differences. Two differences are enough, the third is only a check."
  },
  {
   "id": "quant_21",
   "topic": "Number System",
   "qtype": "Unit Digit of a Power Product",
   "lvl": 2,
   "expSec": 45,
   "q": "What is the unit digit of the product 7^95 x 3^58?",
   "opts": [
    "1",
    "3",
    "9",
    "7"
   ],
   "ans": 3,
   "exp": "Cyclicity of 7 is 4: 95 = 4 x 23 + 3, so the unit digit of 7^95 matches 7^3 = 343, that is 3. Cyclicity of 3 is 4: 58 = 4 x 14 + 2, so the unit digit of 3^58 matches 3^2 = 9. Product 3 x 9 = 27, unit digit 7.",
   "trick": "Divide the exponent by 4 and use the remainder; a remainder of 0 means use the 4th power. Then multiply only the two unit digits."
  },
  {
   "id": "quant_22",
   "topic": "Simplification",
   "qtype": "a cube plus b cube Identity",
   "lvl": 1,
   "expSec": 40,
   "q": "Simplify: (0.8 x 0.8 x 0.8 + 0.2 x 0.2 x 0.2) divided by (0.8 x 0.8 - 0.8 x 0.2 + 0.2 x 0.2)",
   "opts": [
    "0.5",
    "0.6",
    "1",
    "1.6"
   ],
   "ans": 2,
   "exp": "The expression is (a^3 + b^3)/(a^2 - ab + b^2) with a = 0.8 and b = 0.2, which equals a + b = 1. Numerically: (0.512 + 0.008)/(0.64 - 0.16 + 0.04) = 0.52/0.52 = 1.",
   "trick": "Whenever the numerator is a^3 + b^3 and the denominator is a^2 - ab + b^2, the answer is just a + b. The mirror case a^3 - b^3 over a^2 + ab + b^2 gives a - b, which would give the trap 0.6."
  },
  {
   "id": "quant_23",
   "topic": "Data Interpretation",
   "qtype": "Table - Total",
   "lvl": 1,
   "expSec": 45,
   "q": "Study the table of cars sold by five showrooms (figures in hundreds): Showroom | 2021 | 2022 ; A | 12 | 15 ; B | 18 | 16 ; C | 10 | 14 ; D | 20 | 25 ; E | 15 | 12. What is the total number of cars sold by all five showrooms together in the year 2022?",
   "opts": [
    "7500",
    "8000",
    "8200",
    "8500"
   ],
   "ans": 2,
   "exp": "2022 column: 15 + 16 + 14 + 25 + 12 = 82 hundred = 8200 cars.",
   "trick": "Add the column in hundreds first and convert only once at the end. Adding the 2021 column by mistake gives 75 hundred, the trap 7500."
  },
  {
   "id": "quant_24",
   "topic": "Data Interpretation",
   "qtype": "Table - Percentage Increase",
   "lvl": 2,
   "expSec": 45,
   "q": "Study the table of cars sold by five showrooms (figures in hundreds): Showroom | 2021 | 2022 ; A | 12 | 15 ; B | 18 | 16 ; C | 10 | 14 ; D | 20 | 25 ; E | 15 | 12. What is the percentage increase in the sales of showroom D from 2021 to 2022?",
   "opts": [
    "20 percent",
    "25 percent",
    "24 percent",
    "30 percent"
   ],
   "ans": 1,
   "exp": "Increase = 25 - 20 = 5 hundred on a base of 20 hundred. Percentage increase = 5/20 x 100 = 25 percent.",
   "trick": "Percentage increase is always taken on the EARLIER year. Dividing 5 by the later value 25 gives the classic trap 20 percent."
  },
  {
   "id": "quant_25",
   "topic": "Data Interpretation",
   "qtype": "Table - Year on Year Total Comparison",
   "lvl": 3,
   "expSec": 60,
   "q": "Study the table of cars sold by five showrooms (figures in hundreds): Showroom | 2021 | 2022 ; A | 12 | 15 ; B | 18 | 16 ; C | 10 | 14 ; D | 20 | 25 ; E | 15 | 12. The total sales of all five showrooms in 2022 is approximately what percent more than the total sales of all five showrooms in 2021?",
   "opts": [
    "9.33 percent",
    "8.54 percent",
    "7 percent",
    "10 percent"
   ],
   "ans": 0,
   "exp": "Total 2021 = 12 + 18 + 10 + 20 + 15 = 75 hundred. Total 2022 = 15 + 16 + 14 + 25 + 12 = 82 hundred. Increase = 7 on a base of 75, so 7/75 x 100 = 9.33 percent.",
   "trick": "Percent MORE than 2021 uses 2021 as the base. Using 82 as the base gives 7/82 = 8.54 percent, the planted trap."
  }
 ]
};
