/* paper01-eng.js   — SSC CGL Tier-1 Diagnostic Paper 01 · English (25 Q) */
/* ans is the 0-based index of the correct option.  lvl: 1 easy, 2 medium, 3 hard.
   expSec = seconds a good candidate should need.  Answer positions are balanced
   across A-D so the key is not guessable from position alone. */

const P01_ENG = {
 "passages": {
  "cz1": {
   "title": "Cloze Test",
   "text": "For most of human history the night sky was a shared inheritance. Anyone who stepped outdoors could (1)___ thousands of stars, and the Milky Way was an ordinary sight rather than a rare spectacle. Artificial lighting has changed this (2)___. More than eighty per cent of the world now lives under skies washed pale by streetlamps and billboards, and a child born in a large city may never see a truly dark night. The loss is not merely aesthetic. Migrating birds, guided for millennia by starlight, are (3)___ by the glare of tall towers, and nesting turtles crawl inland instead of towards the sea. Ecologists therefore argue that light, (4)___ carelessly managed, is a pollutant like any other. Shielded lamps and sensible timers, they point out, would restore much of the darkness (5)___ leaving a single street unsafe."
  }
 },
 "questions": [
  {
   "id": "eng_01",
   "topic": "Error Spotting",
   "qtype": "Error Spotting",
   "lvl": 2,
   "expSec": 25,
   "q": "Select the part of the sentence that contains an error: The number of students / in the senior class / have increased / considerably this year.",
   "opts": [
    "The number of students",
    "in the senior class",
    "have increased",
    "considerably this year"
   ],
   "ans": 2,
   "exp": "Rule: THE number of + plural noun takes a SINGULAR verb (the head noun is number); A number of + plural noun takes a plural verb. So it must be has increased, not have increased.",
   "trick": "Subject-verb: cross out the whole of-phrase between subject and verb first. Once you delete in the senior class, the subject reads The number ... have, and the mismatch is visible. Parts 1, 2 and 4 carry no verb to disagree with, so they cannot be the error."
  },
  {
   "id": "eng_02",
   "topic": "Error Spotting",
   "qtype": "Error Spotting",
   "lvl": 3,
   "expSec": 30,
   "q": "Select the part of the sentence that contains an error: Hardly had he / entered the hall / than the audience / began to clap.",
   "opts": [
    "Hardly had he",
    "entered the hall",
    "than the audience",
    "began to clap"
   ],
   "ans": 2,
   "exp": "Fixed pairs: Hardly/Scarcely ... WHEN and No sooner ... THAN. Since the sentence opens with Hardly, the correlative must be when, not than. The inversion Hardly had he entered is correct, and both verb forms (past perfect + simple past) are correct.",
   "trick": "Correlative pairs: delete every part that does not contain the second half of a fixed pair. Only one part can hold when/than/as, so eliminate parts 1, 2 and 4 on sight and test the connector alone."
  },
  {
   "id": "eng_03",
   "topic": "Sentence Improvement",
   "qtype": "Sentence Improvement",
   "lvl": 2,
   "expSec": 25,
   "q": "Select the option that best improves the underlined part: If I WOULD HAVE KNOWN about the change in schedule, I would have reached the venue on time.",
   "opts": [
    "would know",
    "No improvement required",
    "have known",
    "had known"
   ],
   "ans": 3,
   "exp": "Third conditional: If + past perfect (had + V3) in the if-clause, and would have + V3 in the main clause. The main clause already carries would have reached, so the if-clause must be had known.",
   "trick": "In a conditional if-clause, delete any option carrying would - that removes would know. Then delete have known, which lacks the auxiliary had that the past perfect needs. No improvement cannot stand either, because the original repeats would in both halves and no conditional pattern allows that. Only had known survives."
  },
  {
   "id": "eng_04",
   "topic": "Sentence Improvement",
   "qtype": "Sentence Improvement",
   "lvl": 3,
   "expSec": 30,
   "q": "Select the option that best improves the underlined part: He is one of the best students WHO HAS EVER STUDIED in this college.",
   "opts": [
    "No improvement required",
    "whom have ever studied",
    "who have ever studied",
    "which has ever studied"
   ],
   "ans": 2,
   "exp": "Rule: one of the + plural noun + who/that + PLURAL verb. The relative pronoun who refers back to students (plural), not to He, so the verb is have studied. Who is the subject of the clause, so whom is wrong, and which cannot refer to people.",
   "trick": "Relative clauses: find the noun immediately before who and match the verb to it, then delete on two mechanical grounds. Strike which (people need who) and strike whom (a subject slot, since the verb follows directly). Only the number of the verb is left to decide."
  },
  {
   "id": "eng_05",
   "topic": "Fill in the Blanks",
   "qtype": "Fill in the Blanks",
   "lvl": 2,
   "expSec": 22,
   "q": "Select the most appropriate word to fill in the blank: Despite the overwhelming evidence placed before him, the minister remained ___ in his denial and refused to concede a single point.",
   "opts": [
    "apathetic",
    "amenable",
    "adamant",
    "ambivalent"
   ],
   "ans": 2,
   "exp": "Adamant means unshakeably firm, refusing to be persuaded. The clause refused to concede a single point demands firmness. Apathetic means indifferent, amenable means willing to agree (the opposite), and ambivalent means having mixed feelings, which contradicts a flat denial.",
   "trick": "Fill in the blanks: read the clause AFTER the blank as the definition, then delete every option that contradicts it. Refused to concede kills amenable (agreeable) and ambivalent (undecided) instantly, and apathetic describes mood, not resistance."
  },
  {
   "id": "eng_06",
   "topic": "Fill in the Blanks",
   "qtype": "Fill in the Blanks",
   "lvl": 3,
   "expSec": 28,
   "q": "Select the most appropriate word to fill in the blank: A single leaked email ___ the spotless reputation that the auditing firm had built over four decades.",
   "opts": [
    "garnished",
    "varnished",
    "burnished",
    "tarnished"
   ],
   "ans": 3,
   "exp": "Tarnish means to spoil or stain a reputation. Burnish means to polish or enhance (the exact opposite here), garnish means to decorate food or to attach wages by court order, and varnish means to coat with a glossy finish.",
   "trick": "Rhyming-set questions: SSC plants three near-rhymes, so ignore the sound and test each meaning against the sentence polarity. The word spotless plus a leaked email fixes the polarity as negative, so delete burnish (positive) first, then the two literal, physical verbs garnish and varnish."
  },
  {
   "id": "eng_07",
   "topic": "Synonyms",
   "qtype": "Synonyms",
   "lvl": 1,
   "expSec": 18,
   "q": "Select the word that is MOST SIMILAR in meaning to: FRUGAL",
   "opts": [
    "Lavish",
    "Fertile",
    "Thrifty",
    "Timid"
   ],
   "ans": 2,
   "exp": "Frugal means economical, sparing in the use of money or resources; thrifty is its direct synonym. Lavish is the antonym, fertile relates to productivity of soil, and timid means shy.",
   "trick": "Synonyms: SSC always plants the antonym as a distractor, so delete the clear opposite first. Lavish goes immediately, and fertile and timid belong to unrelated fields (soil, temperament), leaving only the money word."
  },
  {
   "id": "eng_08",
   "topic": "Synonyms",
   "qtype": "Synonyms",
   "lvl": 3,
   "expSec": 25,
   "q": "Select the word that is MOST SIMILAR in meaning to: OBDURATE",
   "opts": [
    "Stubborn",
    "Obscure",
    "Abundant",
    "Obedient"
   ],
   "ans": 0,
   "exp": "Obdurate means stubbornly refusing to change an opinion or course of action, hardened against persuasion. Obedient is almost the opposite, obscure means unclear or unknown, and abundant means plentiful.",
   "trick": "Hard vocabulary: do not match by prefix. Delete every option that merely looks or sounds like the key word, which removes obedient and obscure, and delete abundant as an unrelated quantity word. Root ob- plus durus (hard) confirms what survives."
  },
  {
   "id": "eng_09",
   "topic": "Antonyms",
   "qtype": "Antonyms",
   "lvl": 2,
   "expSec": 22,
   "q": "Select the word that is MOST OPPOSITE in meaning to: EPHEMERAL",
   "opts": [
    "Transient",
    "Permanent",
    "Fleeting",
    "Momentary"
   ],
   "ans": 1,
   "exp": "Ephemeral means lasting for a very short time. Its opposite is permanent, meaning lasting indefinitely. Transient, fleeting and momentary are all synonyms of ephemeral, not antonyms.",
   "trick": "Antonyms: strike the near-synonyms SSC always plants first. Here three of the four options mean short-lived, so they cluster together and cancel one another out. The odd word out is the answer."
  },
  {
   "id": "eng_10",
   "topic": "Antonyms",
   "qtype": "Antonyms",
   "lvl": 3,
   "expSec": 28,
   "q": "Select the word that is MOST OPPOSITE in meaning to: PROFLIGATE",
   "opts": [
    "Extravagant",
    "Wasteful",
    "Frugal",
    "Prodigal"
   ],
   "ans": 2,
   "exp": "Profligate means recklessly wasteful with money. Frugal, meaning economical and sparing, is its antonym. Extravagant, wasteful and prodigal all mean the same as profligate.",
   "trick": "Antonyms: group the options before you translate the key word. Extravagant, wasteful and prodigal form one meaning-cluster, so delete all three as a block. You do not even need to know profligate to pick the lone survivor."
  },
  {
   "id": "eng_11",
   "topic": "Idioms & Phrases",
   "qtype": "Idioms & Phrases",
   "lvl": 1,
   "expSec": 18,
   "q": "Select the option that best expresses the meaning of the idiom: To beat about the bush",
   "opts": [
    "To punish someone severely",
    "To talk around the main point without coming to it",
    "To search thoroughly for something lost",
    "To destroy a plan at the outset"
   ],
   "ans": 1,
   "exp": "To beat about the bush means to avoid the main topic and speak indirectly or evasively instead of coming to the point.",
   "trick": "Idioms: delete every option that translates the words literally. Beat tempts you toward punish, and bush tempts you toward search, so both literal readings go. Idiom meanings are almost always figurative and about speech, behaviour or attitude."
  },
  {
   "id": "eng_12",
   "topic": "Idioms & Phrases",
   "qtype": "Idioms & Phrases",
   "lvl": 2,
   "expSec": 25,
   "q": "Select the option that best expresses the meaning of the idiom: To steal a march on someone",
   "opts": [
    "To gain an advantage by acting before someone else does",
    "To copy the work of another and present it as your own",
    "To follow someone secretly over a long distance",
    "To take credit for a victory won by others"
   ],
   "ans": 0,
   "exp": "To steal a march on someone means to gain an advantage over a rival by acting earlier or more quickly than expected. The phrase comes from an army secretly marching at night to reach a position before the enemy.",
   "trick": "Idioms: the verb steal invites two theft readings, so delete both plagiarism and credit-grabbing as literal traps. March invites the following-someone option, which is the second literal trap. What remains is the figurative sense of timing and advantage."
  },
  {
   "id": "eng_13",
   "topic": "One Word Substitution",
   "qtype": "One Word Substitution",
   "lvl": 1,
   "expSec": 18,
   "q": "Select the one-word substitution for: One who believes that nothing can be known about the existence of God",
   "opts": [
    "Atheist",
    "Theist",
    "Agnostic",
    "Heretic"
   ],
   "ans": 2,
   "exp": "An agnostic holds that the existence of God is unknown or unknowable. An atheist positively denies the existence of God, a theist positively believes in God, and a heretic holds beliefs contrary to established religious doctrine.",
   "trick": "One word substitution: lock on to the operative phrase, here nothing can be KNOWN. Delete every option that states a definite belief either way, which removes atheist and theist as a pair, and heretic is about doctrine, not knowledge."
  },
  {
   "id": "eng_14",
   "topic": "One Word Substitution",
   "qtype": "One Word Substitution",
   "lvl": 3,
   "expSec": 25,
   "q": "Select the one-word substitution for: A speech delivered without any previous preparation",
   "opts": [
    "Elegy",
    "Exposition",
    "Eulogy",
    "Extempore"
   ],
   "ans": 3,
   "exp": "Extempore means spoken or done without preparation, on the spur of the moment. An elegy is a mournful poem for the dead, a eulogy is a speech of high praise, and an exposition is a detailed explanation or a public exhibition.",
   "trick": "One word substitution: when all options share a first letter, sort them by what each one is ABOUT, not by sound. Elegy and eulogy are both about a person being mourned or praised, so delete that pair, and exposition is about explaining content. Only one option describes the MANNER of speaking."
  },
  {
   "id": "eng_15",
   "topic": "Spelling",
   "qtype": "Spelling",
   "lvl": 1,
   "expSec": 18,
   "q": "Select the correctly spelt word.",
   "opts": [
    "Occurrence",
    "Ocurrence",
    "Occurence",
    "Occurance"
   ],
   "ans": 0,
   "exp": "The correct spelling is occurrence: double c, double r, and the suffix -ence (not -ance). It follows occur, where the final r doubles before a suffix beginning with a vowel.",
   "trick": "Spelling: check one letter-cluster at a time and delete in batches. First demand double r, which kills any single-r form; then demand -ence, which kills the -ance form. One option survives both filters."
  },
  {
   "id": "eng_16",
   "topic": "Spelling",
   "qtype": "Spelling",
   "lvl": 3,
   "expSec": 25,
   "q": "Select the INCORRECTLY spelt word.",
   "opts": [
    "Harassment",
    "Liaison",
    "Accommodation",
    "Embarassment"
   ],
   "ans": 3,
   "exp": "The correct spelling is EMBARRASSMENT, with double r and double s. Harassment (single r, double s), accommodation (double c, double m) and liaison (two i letters) are all spelt correctly here.",
   "trick": "Spelling: in a spot-the-wrong-one set, test only the doubling points, because that is where SSC hides the error. Confirm the known double-letter words first and delete them; the word whose doubling has been quietly halved is the answer."
  },
  {
   "id": "eng_17",
   "topic": "Para Jumble",
   "qtype": "Para Jumble",
   "lvl": 1,
   "expSec": 30,
   "q": "Arrange the following parts in the correct order to form a meaningful paragraph. P: A small boy was selling newspapers at the crossing. Q: One winter morning a businessman stopped his car at a red light. R: The businessman bought one and handed him a hundred-rupee note. S: The boy ran a long way after the car to return the change.",
   "opts": [
    "PQRS",
    "QRPS",
    "PRQS",
    "QPRS"
   ],
   "ans": 3,
   "exp": "Q is the opening sentence because it sets the time and introduces the businessman with a full noun phrase. P then introduces the boy. R follows because bought ONE needs newspapers already mentioned in P, and the businessman is now referred to by a definite phrase. S closes with the consequence of the hundred-rupee note.",
   "trick": "Step 1, find the opener: R says bought ONE, which needs newspapers already mentioned, and S needs the note already mentioned, so neither can be first; Q sets the time and opens. Delete every option not starting with Q, leaving QRPS and QPRS. Step 2, only P introduces the newspapers that R depends on, so P must precede R. Answer QPRS."
  },
  {
   "id": "eng_18",
   "topic": "Para Jumble",
   "qtype": "Para Jumble",
   "lvl": 3,
   "expSec": 35,
   "q": "Arrange the following parts in the correct order to form a meaningful paragraph. P: Yet the benefits of that silence are still rarely measured. Q: Cities have grown noisier with every passing decade. R: Studies now show that unrelenting noise raises stress hormones and disturbs sleep. S: Hospitals, therefore, have begun designing quiet zones for recovering patients.",
   "opts": [
    "QRSP",
    "QSRP",
    "RQPS",
    "SRQP"
   ],
   "ans": 0,
   "exp": "Q states the general situation and contains no back-reference, so it opens. R supplies the evidence about why that matters. S begins with therefore, so it must follow the evidence in R, not precede it. P begins with Yet and refers to that silence, which only makes sense after the quiet zones of S.",
   "trick": "Step 1, link words cannot open a paragraph: P starts with Yet and S with therefore, so delete the option beginning with S. Step 2, Q states the general situation with no back-reference, so it opens - delete the option beginning with R. That leaves QRSP and QSRP. Step 3, therefore in S must follow the evidence it draws on, which is R, so S cannot come before R. Answer QRSP."
  },
  {
   "id": "eng_19",
   "topic": "Active/Passive Voice",
   "qtype": "Active/Passive Voice",
   "lvl": 2,
   "expSec": 25,
   "q": "Select the correct PASSIVE form of the given sentence: The organising committee has postponed the annual sports meet.",
   "opts": [
    "The annual sports meet has been postponed by the organising committee.",
    "The annual sports meet was postponed by the organising committee.",
    "The annual sports meet is being postponed by the organising committee.",
    "The annual sports meet had been postponed by the organising committee."
   ],
   "ans": 0,
   "exp": "Rule: the passive keeps the tense of the active verb. Present perfect active (has postponed) becomes has/have been + V3, so it is has been postponed. The object becomes the subject and the agent takes by.",
   "trick": "Voice: freeze the tense first, then hunt the be-form, because three of the four options are tense-shift decoys. Has in the active demands has been, so delete was (simple past), is being (present continuous) and had been (past perfect) without reading the rest of the sentence."
  },
  {
   "id": "eng_20",
   "topic": "Direct/Indirect Speech",
   "qtype": "Direct/Indirect Speech",
   "lvl": 3,
   "expSec": 30,
   "q": "Select the correct INDIRECT form of the given sentence: He said to me, \"Why are you wasting your time on this?\"",
   "opts": [
    "He asked me why was I wasting my time on that.",
    "He asked me why I was wasting my time on that.",
    "He asked me that why I was wasting my time on that.",
    "He said me why I was wasting my time on that."
   ],
   "ans": 1,
   "exp": "Rules for a wh-question in reported speech: said to becomes asked, the wh-word itself acts as the connector so that is not used, the interrogative word order is dropped in favour of subject before verb, and the tense back-shifts (are wasting becomes was wasting). Pronouns shift you to I and your to my.",
   "trick": "Narration: the connector and the word order alone kill three options. Delete any option that adds that after a wh-word, delete any option that keeps question order (auxiliary before subject), and delete said me, which is ungrammatical because said never takes a direct personal object."
  },
  {
   "id": "eng_21",
   "topic": "Cloze Test",
   "qtype": "Cloze Test",
   "lvl": 2,
   "expSec": 20,
   "psg": "cz1",
   "q": "Select the most appropriate word for blank (1).",
   "opts": [
    "behold",
    "glance",
    "stare",
    "peer"
   ],
   "ans": 0,
   "exp": "The blank needs a transitive verb that takes the object thousands of stars directly. Behold means to see or observe and is transitive. Glance, stare and peer are intransitive and would each require a preposition (glance at, stare at, peer at).",
   "trick": "Cloze verbs: look at what follows the blank before you weigh meaning. A bare noun phrase with no preposition deletes every intransitive option at once, so glance, stare and peer all fall together and only the transitive verb can stand."
  },
  {
   "id": "eng_22",
   "topic": "Cloze Test",
   "qtype": "Cloze Test",
   "lvl": 2,
   "expSec": 20,
   "psg": "cz1",
   "q": "Select the most appropriate word for blank (2).",
   "opts": [
    "utter",
    "utterly",
    "utmost",
    "uttermost"
   ],
   "ans": 1,
   "exp": "The blank modifies the verb phrase has changed, so an adverb is required: has changed this utterly. Utter, utmost and uttermost are adjectives and cannot modify a verb.",
   "trick": "Cloze grammar: identify the part of speech the slot needs, then delete by form alone. The blank follows a completed verb plus object, so only an adverb fits, and the -ly ending picks itself out of a set of look-alike adjectives."
  },
  {
   "id": "eng_23",
   "topic": "Cloze Test",
   "qtype": "Cloze Test",
   "lvl": 2,
   "expSec": 20,
   "psg": "cz1",
   "q": "Select the most appropriate word for blank (3).",
   "opts": [
    "disorienting",
    "disoriented",
    "disorient",
    "disorientation"
   ],
   "ans": 1,
   "exp": "The structure is are ___ by the glare, which is the passive voice and therefore needs the past participle: are disoriented by the glare. The birds receive the action, so the -ing form would reverse the meaning, and a bare verb or a noun cannot complete a passive.",
   "trick": "Cloze voice: the frame be + blank + by is a passive signature, so delete everything that is not a past participle. That removes the noun and the base verb immediately, and the -ing form is deleted because by marks the doer as the glare, not the birds."
  },
  {
   "id": "eng_24",
   "topic": "Cloze Test",
   "qtype": "Cloze Test",
   "lvl": 2,
   "expSec": 20,
   "psg": "cz1",
   "q": "Select the most appropriate word for blank (4).",
   "opts": [
    "which",
    "when",
    "despite",
    "however"
   ],
   "ans": 1,
   "exp": "The frame needs a reduced clause: light, when carelessly managed, is a pollutant. Which requires a finite verb after it, so it dies on structure. Despite needs a noun or an -ing form and cannot take the past participle managed. However carelessly managed is in fact perfectly grammatical, meaning no matter how carelessly managed - it is ruled out on SENSE, not grammar, because the passage says light turns into a pollutant only under careless management, not regardless of it. When carries exactly that conditional sense.",
   "trick": "Do not throw however out on grammar - however plus an adverb is legal and means no matter how. Kill it on meaning instead: the sentence needs the pollutant claim to DEPEND on carelessness, not survive it. Which needs a finite verb and despite cannot take a past participle, so those two die on structure."
  },
  {
   "id": "eng_25",
   "topic": "Cloze Test",
   "qtype": "Cloze Test",
   "lvl": 2,
   "expSec": 20,
   "psg": "cz1",
   "q": "Select the most appropriate word for blank (5).",
   "opts": [
    "besides",
    "despite",
    "instead",
    "without"
   ],
   "ans": 3,
   "exp": "The sentence needs a preposition that takes the -ing form leaving and expresses the absence of a bad side effect: would restore the darkness without leaving a single street unsafe. Despite would create a contradiction in logic, besides would mean in addition to, and instead requires of before an -ing form and would also distort the sense.",
   "trick": "Cloze prepositions: first delete whatever cannot take a bare -ing form, which removes instead (it needs instead of). Then decide polarity: the sentence is making a reassuring claim, so the contrast word despite and the additive word besides both break the logic and go."
  }
 ]
};
