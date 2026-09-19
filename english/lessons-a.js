/* LESSONS-A — teacher-voice guided lessons: grammar phase.
   Step kinds: coach | rule | table | trap | try | pick | forget | card
   try.q / pick = inline items (bank holds the big practice sets). */
const LESSONS_A = {
eng_sva: { title: "Subject-Verb Agreement", sub: "Find the real subject. Ignore the noise.",
hook: "SSC never asks you 'is boy singular or plural?' That would be a gift. Instead it buries the subject under a pile of words and puts the WRONG verb next to a nearby noun — and waits.",
paperNote: "Paper proof (Sept 2024): 'The team always anticipate' (13 Sept S1). The examiner counted on you reading 'team' as plural. SVA rarely comes as a direct question — it hides inside error-spotting. This lesson is worth 2–3 marks per paper.",
steps: [
{ k: "coach", h: "How the examiner thinks", html: "The examiner's recipe: <b>1.</b> pick a singular subject, <b>2.</b> park a plural noun right before the verb, <b>3.</b> offer the plural verb as an option. Your defence is one habit: <b>bracket the real subject first, look at options second.</b>" },
{ k: "rule", h: "The bracket method", html: "Draw mental brackets around everything between commas or starting with <i>of / along with / as well as / together with</i> — then delete it. <i>The box [of chocolates] <b>was</b> open.</i> Whatever remains is your subject." },
{ k: "table", h: "The 6 triggers SSC repeats", html: "<table class='lt'><tr><th>You see</th><th>You do</th></tr><tr><td>along with / as well as</td><td>NOT 'and' — subject stays singular</td></tr><tr><td>each / every / either / neither</td><td>always singular verb</td></tr><tr><td>either…or / neither…nor</td><td>verb matches the NEARER subject</td></tr><tr><td>one of the X who…</td><td>verb after who is PLURAL (the X)</td></tr><tr><td>there + be</td><td>verb matches the noun AFTER</td></tr><tr><td>the number / a number</td><td>the = singular, a = plural</td></tr></table>" },
{ k: "try", h: "Try it — bracket first", q: { q: "The list of items ___ on the table.", options: ["are", "were", "is", "have been"], answer: 2, explanation: "Bracket [of items] → subject is list → is.", rule: "Real subject decides.", elim: "Kill plurals the moment you see list.", trap: "Items-proximity trap.", trapcat: "Intervening phrase", level: "L1" } },
{ k: "trap", h: "Trap autopsy: as-well-as", html: "'The minister, <b>along with</b> his aides, ___ arrived.' Half the hall marks <i>have</i>. The examiner used <i>along with</i> as fake paint over the word <i>and</i>. Strip it: The minister … <b>has</b> arrived." },
{ k: "pick", h: "Beat the examiner", stem: "Neither the dancers nor the singer ___ ready. Which option did the examiner plant for you?", options: ["were — matches dancers", "was — matches singer", "are — present feels safe"], answer: 0, why: "Correct is 'was' (nearer subject singer). Option 'were' is bait for everyone who matches the FIRST noun. When you see a pair, your eyes must jump to the NEARER subject." },
{ k: "forget", h: "If you forget every rule", html: "Cover all extra phrases with your thumb. Read the bare sentence aloud with is/are. Your ear knows more grammar than you think — then kill the options that sound wrong." },
{ k: "card", h: "Master card", html: "<b>Core:</b> verb follows the real subject. <b>5 patterns:</b> phrases • each/every • pairs→nearer • as-well-as≠and • one-of-who plural. <b>2-min:</b> each singular; pairs→nearer; quantities singular." },
],
revision: { min2: "Each/every singular. Pairs match nearer. As-well-as is not and.", lastmin: "Bracket subject → pairs→nearer → each singular." } },

eng_tenses: { title: "Tenses", sub: "The time marker decides. You just obey it.",
hook: "Tense questions are the most obedient marks in the paper: the sentence always leaves a time marker as a clue. Students lose them only because they read the verb first and the marker second. Flip that order.",
paperNote: "Paper proof: 'They ___ their house for the past two months' → have been renovating (18 Sept S3). SSC tests tense through FILLERS, not theory. Marker for + unfinished stretch = perfect continuous. That is one full mark for circling two words.",
steps: [
{ k: "coach", h: "The 3-second habit", html: "Before looking at options: <b>1.</b> circle the time words (since, for, ago, yesterday, by, when), <b>2.</b> ask finished or still going?, <b>3.</b> now look at options. Markers first, options second — always." },
{ k: "rule", h: "Marker → tense map", html: "<i>yesterday / last / ago</i> → simple past. <i>since/for + still true</i> → perfect (continuous if ongoing). <i>before/after + two pasts</i> → earlier gets <i>had</i>. <i>by + future time</i> → will have. Timetables → simple present." },
{ k: "try", h: "Try it — real paper filler", q: { q: "They ___ their house for the past two months, and it is finally looking fantastic.", options: ["has renovated", "have been renovating", "were renovating", "will renovate"], answer: 1, explanation: "For + stretch still true → present perfect continuous. This exact pattern fetched 2 marks on 18 Sept 2024.", rule: "For + ongoing → have been + -ing.", elim: "For two months + is looking → continuous perfect.", trap: "Were-renovating past trap.", trapcat: "Tense filler", level: "L1" } },
{ k: "trap", h: "Trap autopsy: since five years", html: "SSC's favourite frame: 'He has worked here <b>since</b> five years.' Since needs a POINT (2019, Monday); five years is a PERIOD → <i>for</i>. One word, one mark. When you see since/for, check point-vs-period before anything else." },
{ k: "pick", h: "Beat the examiner", stem: "'I met him three days ___.' Which option is the trap?", options: ["ago — too simple, surely wrong", "before — sounds formal and safe", "since — pairs with past"], answer: 1, why: "'Before' sounds clever and traps overthinkers. Ago + simple past is the whole rule: met (past) + ago. Simple is correct here." },
{ k: "forget", h: "If you forget every rule", html: "Point in time → since. Length of time → for. Two past actions → the more-past one gets had. See ago/yesterday → simple past, no perfect ever." },
{ k: "card", h: "Master card", html: "<b>Core:</b> marker decides tense. <b>2-min:</b> since-point/for-period • before/after + had • ago → past • know ≠ knowing." },
],
revision: { min2: "Since-point, for-period. Two pasts: earlier gets had.", lastmin: "Circle marker → had? → stative?" } },

eng_articles: { title: "Articles", sub: "Specific or not? Sound, not spelling.",
hook: "Articles feel like guesswork until you learn the examiner asks exactly one question: is this noun specific, or one-of-many? Answer that and a/an/the picks itself.",
paperNote: "Paper note: articles hide inside error-spotting and fillers ('an appropriate location' — 23 Sept S1). The sound-rule (an hour, a university) is tested almost every cycle. Two marks for one habit.",
steps: [
{ k: "coach", h: "The one question", html: "Only one of it in the world, or already mentioned? → <b>the</b>. First mention, one of many? → <b>a/an</b>. Meal, game, language, lone mountain peak? → <b>nothing</b>. That is the whole chapter." },
{ k: "rule", h: "Sound, not spelling", html: "Say the word aloud: vowel SOUND → an (<i>an hour, an honest man, an MLA</i>). Consonant sound → a (<i>a university, a one-rupee note</i>). SSC sets this trap yearly — spelling is the bait, sound is the answer." },
{ k: "table", h: "The zero-article list", html: "No article before: meals • games • languages • subjects • <i>Mount Everest</i> (but <i>the Himalayas</i>) • <i>go to school/hospital</i> for the real purpose. Superlatives and ordinals always take <i>the</i>." },
{ k: "try", h: "Try it", q: { q: "He took admission in ___ university in Delhi.", options: ["an", "a", "the", "no article"], answer: 1, explanation: "University = yoo sound (consonant) → a.", rule: "Sound decides.", elim: "Say yoo → consonant → a.", trap: "U-is-a-vowel-letter trap.", trapcat: "A/an sound", level: "L1" } },
{ k: "pick", h: "Beat the examiner", stem: "'___ MLA raised the issue.' The examiner wants you to pick 'a' because M is a consonant letter. What beats him?", options: ["a MLA — M is consonant", "an MLA — spoken em-", "the MLA — specific person"], answer: 1, why: "Said aloud it is 'em-el-ay' — vowel sound → an. The examiner banks on silent reading. Read article questions aloud in your head." },
{ k: "card", h: "Master card", html: "<b>Core:</b> specific→the, general→a/an by sound, general-plural→zero. <b>2-min:</b> an hour/honest/MLA • a university • the best • Everest zero/Himalayas the." },
],
revision: { min2: "Sound not spelling. Superlative→the. Peaks zero, ranges the.", lastmin: "Say it aloud → specific? → zero-list?" } },

eng_prepositions: { title: "Prepositions", sub: "30 fixed pairs carry half the marks.",
hook: "Here is the truth about prepositions: half the questions come from a fixed list of about 30 verb/adjective pairs that NEVER change. Memorise the pairs and logic questions become free time.",
paperNote: "Paper proof: 'pitch TO their easy victory' (13 Sept S1) and 'talks FOR anybody' → to (18 Sept S3). Both marks needed zero logic — only the fixed pair. Pairs first, logic second.",
steps: [
{ k: "coach", h: "Pairs beat logic", html: "When the verb or adjective is in your pair list, STOP thinking and use the pair. Logic (at→on→in ladders) is only for the leftovers. Prefer→to. Junior→to. Fond→of. Good→at. No debate." },
{ k: "table", h: "The killer five (most repeated)", html: "<table class='lt'><tr><th>Word</th><th>Always</th></tr><tr><td>prefer / junior / senior / superior / married</td><td><b>to</b> (never than/with)</td></tr><tr><td>good / skilled</td><td><b>at</b></td></tr><tr><td>fond / afraid / full / capable</td><td><b>of</b></td></tr><tr><td>insist / rely / depend</td><td><b>on</b></td></tr><tr><td>refrain / differ</td><td><b>from</b></td></tr></table>" },
{ k: "rule", h: "Time and place ladders", html: "Time: <i>at</i> 5pm → <i>on</i> Monday → <i>in</i> June. Place: <i>at</i> the gate → <i>in</i> Delhi → <i>on</i> the table. Between = two, among = many. Arrive <i>at</i> small, <i>in</i> big." },
{ k: "try", h: "Try it — real paper logic", q: { q: "He never talks ___ anybody. He is alone all day.", options: ["for", "to", "with", "about"], answer: 1, explanation: "Talk to a person. The real 2024 error used 'for' — 2 marks for the pair.", rule: "talk to.", elim: "Person → to.", trap: "For/to blur.", trapcat: "Pairs in errors", level: "L1" } },
{ k: "pick", h: "Beat the examiner", stem: "'She prefers coffee ___ tea.' The examiner offers 'than'. Why is it irresistible — and wrong?", options: ["than — comparisons use than", "to — prefer is special", "over — sounds premium"], answer: 1, why: "Comparisons DO use than — that true fact is the bait. But prefer is married to 'to' forever. The examiner weaponises a nearby true rule. Prefer→to, no thinking." },
{ k: "card", h: "Master card", html: "<b>Core:</b> pair beats logic; else at→on→in. <b>2-min:</b> to-list • of-list • time ladder • between-2/among-many." },
],
revision: { min2: "Prefer/junior/married + to. Good at. Fond of. at→on→in.", lastmin: "Pair? → to/at/of. Else ladder." } },

eng_pronouns: { title: "Pronouns + Modifiers", sub: "Small words, big traps.",
hook: "Pronoun questions are worth full marks to students who know just THREE checks: case after prepositions, no fake reflexives, and adjective-vs-adverb. Three checks, two marks.",
paperNote: "Paper proof: 'without IT'S mother board' → its (18 Sept S3). One apostrophe, two marks. SSC loves its/it's, fewer/less, and look+adjective.",
steps: [
{ k: "coach", h: "The three checks", html: "<b>1.</b> After a preposition (between, to, for) → me/him/them, never I/he. <b>2.</b> Myself needs the subject doing something to itself — else use you/me. <b>3.</b> After look/seem/feel → adjective (looks smart, NOT smartly); after action verbs → adverb (sings beautifully)." },
{ k: "rule", h: "Its vs it's + fewer vs less", html: "<i>Its</i> = belonging (no apostrophe). <i>It's</i> = it is. <i>Fewer</i> counts things (students), <i>less</i> measures stuff (water). Both pairs appear almost every cycle." },
{ k: "try", h: "Try it — real paper", q: { q: "A computer can't function without ___ mother board.", options: ["it's", "its", "their", "his"], answer: 1, explanation: "Possession → its. The 2024 paper planted it's.", rule: "its = possessive.", elim: "Belongs to → its.", trap: "Apostrophe-everywhere trap.", trapcat: "Its/it's", level: "L1" } },
{ k: "trap", h: "Trap autopsy: between you and I", html: "Sounds posh, scores zero. Between is a preposition → 'between you and ME'. Whenever posh-English and grammar fight, grammar wins the mark." },
{ k: "card", h: "Master card", html: "<b>Core:</b> preposition→me/him • self-word needs self-action • look+adjective • fewer-countable. <b>2-min:</b> between→me • its possessive • fewer-students." },
],
revision: { min2: "Between→me. Its possessive. Look+adjective.", lastmin: "Preposition? → object case." } },

eng_modifiers: { title: "Degree, Pairs, Modals, Conditionals, Tags", sub: "Fixed patterns. Learn the partner, not the theory.",
hook: "This whole topic is pairs: no-sooner wants than, hardly wants when, unless forbids not, imaginary-if wants were. Collect the pairs and the marks follow.",
paperNote: "Paper proof: 'Gourav was NO GOOD THAN' → no better (9 Sept S1) and 'IF I WAS the queen' → were (9 Sept S1). Degree + subjunctive = 4 marks in a single shift. Pairs pay.",
steps: [
{ k: "coach", h: "Collect partners", html: "no sooner→<b>than</b> • hardly/scarcely→<b>when</b> • unless = if-not (never add not) • until = time (never add not) • imaginary if → <b>were + would</b>. Five partnerships, five marks." },
{ k: "rule", h: "Conditionals in one line", html: "Real future: If it rains, we <i>will</i> stay. Imaginary now: If I <i>were</i> rich, I <i>would</i> travel. Imaginary past: If he <i>had worked</i>, he <i>would have passed</i>. Match the halves." },
{ k: "rule", h: "Tags + degree", html: "Tag = copy the auxiliary, flip +/−, add pronoun: <i>You are coming, aren't you?</i> Degree: two things → taller; family → elder; countable → fewer; never <i>more better</i>." },
{ k: "try", h: "Try it — real paper", q: { q: "Gourav was no good than a foolish person. Improve:", options: ["no better", "not good", "no best", "No improvement"], answer: 0, explanation: "Than = comparison → comparative: no better.", rule: "Comparison → comparative.", elim: "Than → -er form.", trap: "Double-form confusion.", trapcat: "Redundancy", level: "L1" } },
{ k: "pick", h: "Beat the examiner", stem: "'Unless you do not hurry, you will miss the bus.' The examiner hopes you accept this. What is the planted bait?", options: ["unless — formal, must be right", "do not — double safety", "will miss — future is wrong"], answer: 1, why: "Unless ALREADY means 'if not' — adding 'not' makes a double negative. Correct: 'Unless you hurry…'. The bait is 'extra words feel safer'. In grammar, extra is guiltier." },
{ k: "card", h: "Master card", html: "<b>Core:</b> pairs forced; imaginary-if uses were. <b>2-min:</b> than/when • no-not-after-unless • were • tag flips." },
],
revision: { min2: "No-sooner-than. Hardly-when. Unless≠not. Were-subjunctive.", lastmin: "Spot pair-word → forced partner." } },
};
