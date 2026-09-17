const DAY = "2026-09-16";

const seed = {
  platforms: ["Edge Tutor", "Private", "Corporate", "Other ESL Platform"],
  notes: [],
  students: [
    { id: "s1", name: "Maria Santos", platform: "Edge Tutor", email: "maria@example.com", timezone: "Asia/Manila", level: "Intermediate", cefr: "B1", age: "Adult", occupation: "HR Specialist", industry: "Business", goal: "Speak confidently in meetings", topics: "Work, travel, interviews", strengths: "Good fluency and strong listening", weaknesses: "Present perfect, articles, word stress", notes: "Likes roleplays and practical correction.", grammar: [{ topic: "Present Perfect", status: "Needs Practice" }, { topic: "Articles", status: "Needs Practice" }, { topic: "Prepositions of Time", status: "Improving" }], progress: { Grammar: 56, Vocabulary: 68, Speaking: 72, Listening: 74, Reading: 62, Writing: 52, Pronunciation: 48, Fluency: 71, Accuracy: 55, Confidence: 64 } },
    { id: "s2", name: "Kenji Mori", platform: "Private", email: "kenji@example.com", timezone: "Asia/Tokyo", level: "Upper-Intermediate", cefr: "B2", age: "Adult", occupation: "Software Engineer", industry: "Technology", goal: "Technical interviews and small talk", topics: "Technology, careers, product design", strengths: "Precise vocabulary and strong reading", weaknesses: "Articles, intonation, indirect questions", notes: "Prefers structured lessons with written examples.", grammar: [{ topic: "Indirect Questions", status: "Needs Practice" }, { topic: "Articles", status: "Improving" }, { topic: "Conditionals", status: "Comfortable" }], progress: { Grammar: 70, Vocabulary: 78, Speaking: 66, Listening: 75, Reading: 84, Writing: 69, Pronunciation: 58, Fluency: 65, Accuracy: 72, Confidence: 61 } },
    { id: "s3", name: "Ana Ribeiro", platform: "Corporate", email: "ana@example.com", timezone: "America/Sao_Paulo", level: "Pre-Intermediate", cefr: "A2", age: "Adult", occupation: "Sales Associate", industry: "Sales", goal: "Customer conversations", topics: "Sales, daily life, travel", strengths: "Friendly speaking style", weaknesses: "Past simple, question formation, plural nouns", notes: "Needs repetition and visual timelines.", grammar: [{ topic: "Simple Past", status: "Needs Practice" }, { topic: "Question Formation", status: "Needs Practice" }, { topic: "Plural Nouns", status: "Improving" }], progress: { Grammar: 42, Vocabulary: 55, Speaking: 60, Listening: 52, Reading: 46, Writing: 38, Pronunciation: 51, Fluency: 57, Accuracy: 43, Confidence: 59 } },
    { id: "s4", name: "Omar Haddad", platform: "Edge Tutor", email: "omar@example.com", timezone: "Asia/Dubai", level: "Advanced", cefr: "C1", age: "Adult", occupation: "Finance Manager", industry: "Finance", goal: "Executive presentations", topics: "Finance, presentations, leadership", strengths: "Strong vocabulary and clear arguments", weaknesses: "Cleft sentences, hedging, sentence stress", notes: "Enjoys challenging business cases.", grammar: [{ topic: "Cleft Sentences", status: "Needs Practice" }, { topic: "Inversion", status: "Improving" }, { topic: "Modal Verbs", status: "Comfortable" }], progress: { Grammar: 82, Vocabulary: 86, Speaking: 80, Listening: 88, Reading: 90, Writing: 78, Pronunciation: 72, Fluency: 84, Accuracy: 80, Confidence: 77 } }
  ],
  classes: [
    { id: "c1", date: DAY, start: "08:00", end: "08:30", duration: 30, studentId: "s1", platform: "Edge Tutor", lesson: "Present Perfect vs Simple Past", topic: "Experience and finished time", grammar: "Present Perfect", vocabulary: "Work achievements", type: "Grammar", status: "Scheduled", notes: "Review previous errors with ever/never.", performance: "", homework: "", followup: "Ask about recent work achievements." },
    { id: "c2", date: DAY, start: "10:00", end: "10:45", duration: 45, studentId: "s2", platform: "Private", lesson: "Indirect Questions for Interviews", topic: "Polite questions", grammar: "Indirect Questions", vocabulary: "Interview phrases", type: "Interview Preparation", status: "Scheduled", notes: "Practice recruiter follow-up questions.", performance: "", homework: "", followup: "" },
    { id: "c3", date: DAY, start: "14:00", end: "14:30", duration: 30, studentId: "s3", platform: "Corporate", lesson: "Customer Service Roleplay", topic: "Past problems", grammar: "Simple Past", vocabulary: "Complaint handling", type: "Business English", status: "In Progress", notes: "Needs past tense correction prompts.", performance: "", homework: "", followup: "" },
    { id: "c4", date: "2026-09-14", start: "09:00", end: "09:30", duration: 30, studentId: "s1", platform: "Edge Tutor", lesson: "Articles in Business Contexts", topic: "A, an, the", grammar: "Articles", vocabulary: "Office nouns", type: "Grammar", status: "Completed", notes: "Confuses general and specific nouns.", performance: "Good correction after examples.", homework: "Write 8 sentences using a/the.", followup: "Contrast zero article next time." },
    { id: "c5", date: "2026-09-12", start: "13:00", end: "13:45", duration: 45, studentId: "s2", platform: "Private", lesson: "Product Demo Language", topic: "Explaining features", grammar: "Relative Clauses", vocabulary: "Product features", type: "Business English", status: "Completed", notes: "Good technical examples.", performance: "Clear but sometimes too long.", homework: "Record a 2-minute demo.", followup: "Shorter answers for interviews." },
    { id: "c6", date: "2026-09-10", start: "15:00", end: "15:30", duration: 30, studentId: "s3", platform: "Corporate", lesson: "Travel Vocabulary", topic: "At the airport", grammar: "Question Formation", vocabulary: "Travel", type: "Vocabulary", status: "Completed", notes: "Word order needs drilling.", performance: "Understood roleplay well.", homework: "Prepare 5 travel questions.", followup: "Past travel story." }
  ],
  lessons: [
    ["Present Perfect vs Simple Past", "B1", "Grammar", "Students compare life experience with finished past events.", "Present Perfect", "ever, never, already, yet", "Ask three experience questions, then ask when it happened.", "Timeline contrast, controlled sentence repair, interview practice.", "Write six experience sentences with follow-up details.", ["#B1", "#Grammar", "#PresentPerfect"]],
    ["Articles in Business Contexts", "B1", "Grammar", "A practical article lesson using workplace nouns.", "Articles", "department, agenda, update, report", "Show objects and ask general vs specific.", "A/an/the sorting, missing article correction, meeting roleplay.", "Find article uses in a short email.", ["#B1", "#Business", "#Articles"]],
    ["Customer Service Roleplay", "A2", "Business English", "Handle basic customer complaints and past problems.", "Simple Past", "refund, receipt, delay, replacement", "Tell a short bad-service story.", "Complaint phrases, past simple correction, roleplay.", "Write a complaint and response.", ["#A2", "#Business", "#Speaking"]],
    ["Indirect Questions for Interviews", "B2", "Interview English", "Make direct interview questions sound polite and professional.", "Indirect Questions", "wondering, could you tell me, would it be possible", "Convert direct questions into softer forms.", "Pattern noticing, recruiter roleplay, follow-up questions.", "Prepare five polite questions for a recruiter.", ["#B2", "#Interview", "#Questions"]],
    ["Conditionals for Advice", "B1", "Grammar", "Use first and second conditionals to give practical advice.", "Conditionals", "if, unless, would, might", "Ask: What will you do if the meeting is cancelled?", "Advice cards, problem solving, sentence transformation.", "Write advice for three workplace problems.", ["#B1", "#Conditionals"]],
    ["Presentation Signposting", "C1", "Presentation Skills", "Structure a business presentation clearly.", "Cleft Sentences", "firstly, moving on, to summarize", "Reorder a scrambled presentation.", "Signpost phrases, mini presentation, peer feedback.", "Record a two-minute update.", ["#C1", "#Business"]],
    ["Prepositions of Time", "A2", "Grammar", "Use in, on, and at for common time expressions.", "Prepositions", "in July, on Monday, at 5 PM", "Calendar speed round.", "Sorting, error correction, schedule roleplay.", "Write tomorrow's schedule.", ["#A2", "#Prepositions"]],
    ["Travel Problems", "A2", "Conversation", "Describe common travel problems and ask for help.", "Simple Past", "lost, delayed, missed, booked", "Show a travel problem picture prompt.", "Story sequencing, help desk roleplay.", "Write one travel problem story.", ["#A2", "#Travel"]],
    ["Modal Verbs for Obligation", "B1", "Grammar", "Compare must, have to, should, and don't have to.", "Modal Verbs", "must, should, have to", "Work rule guessing game.", "Rule cards, advice practice, policy discussion.", "Write five rules for your workplace.", ["#B1", "#Modals"]],
    ["Small Talk at Work", "B1", "Conversation", "Start and extend casual workplace conversations.", "Question Formation", "weekend, project, plans", "Rank safe and risky topics.", "Conversation ladders, follow-up questions.", "Prepare three small-talk openers.", ["#B1", "#Speaking"]],
    ["Email Apologies", "B2", "Writing", "Write polite apology and delay emails.", "Perfect Tenses", "apologize, delay, inconvenience", "Compare too casual vs professional email.", "Phrase bank, rewrite task, tone check.", "Send a draft apology email.", ["#B2", "#Writing"]],
    ["Word Stress for Business Terms", "B2", "Pronunciation", "Improve stress in common business vocabulary.", "Word Stress", "increase, present, record", "Stress shift listening task.", "Mark stress, drill, meeting simulation.", "Record ten target words.", ["#B2", "#Pronunciation"]],
    ["Used To for Past Habits", "B1", "Grammar", "Talk about past routines that are not true now.", "Used To", "used to, didn't use to", "Compare childhood and now.", "Memory prompts, sentence correction, interview.", "Write a before-and-now paragraph.", ["#B1", "#PastTense"]],
    ["Negotiation Language", "C1", "Business English", "Use flexible language during negotiation.", "Modal Verbs", "could, might, would be willing to", "Rank strong vs flexible offers.", "Phrase upgrade, negotiation roleplay.", "Prepare three concessions.", ["#C1", "#Business"]],
    ["Describing Charts", "B2", "Business English", "Describe trends and data clearly.", "Comparatives", "increase, decrease, remain stable", "Quick chart description.", "Trend vocabulary, chart talk, correction.", "Describe one chart from work.", ["#B2", "#Business"]]
  ].map((l, i) => ({ id: `l${i+1}`, title: l[0], level: l[1], category: l[2], description: l[3], grammar: l[4], vocabulary: l[5], warmup: l[6], practice: l[7], homework: l[8], tags: l[9], duration: i % 2 ? 45 : 30 })),
  grammar: [],
  vocabulary: [],
  idioms: [],
  phrasal: [],
  collocations: [],
  pronunciation: [
    ["Schwa /ə/", "The most common weak vowel sound in English.", "Practice unstressed syllables in common words like about and support."],
    ["Word Stress", "One syllable is stronger in multi-syllable words.", "Mark stress before drilling business vocabulary."],
    ["Sentence Stress", "Content words usually carry the main meaning.", "Have the student repeat the sentence with stress on different words."],
    ["Intonation in Questions", "Yes/no questions often rise; wh-questions often fall.", "Compare 'Are you ready?' and 'Where do you work?'"],
    ["Connected Speech", "Words link together in natural speech.", "Drill phrases like 'want to' and 'going to' in context."],
    ["Minimal Pairs: /i:/ vs /ɪ/", "Contrast sheep/ship and leave/live.", "Use quick listen-and-point practice."],
    ["Final Consonants", "Many learners drop final consonants.", "Use short phrases where final sounds affect meaning."],
    ["TH Sounds", "Practice /θ/ and /ð/ in think, this, and although.", "Contrast with /t/, /d/, /s/, and /z/ depending on L1."],
    ["Vowel Length", "Long and short vowels can change meaning.", "Drill beat/bit, pool/pull, cart/cut."],
    ["Linking R", "Some accents link final r to a following vowel.", "Useful for listening comprehension, not required for all accents."]
  ].map((p, i) => ({ id: `pr${i+1}`, title: p[0], description: p[1], tip: p[2] })),
  mistakes: []
};

const grammarRows = [
  ["Simple Present", "Subject + base verb / s", "I teach online.", "Habits, facts, routines", "now, usually, every day", "Forgetting third-person -s", "Use a weekly routine grid."],
  ["Present Continuous", "Subject + am/is/are + verb-ing", "She is practicing questions.", "Actions happening now or temporary situations", "now, today, this week", "Using stative verbs incorrectly", "Mime actions and ask what is happening."],
  ["Present Perfect", "Subject + have/has + past participle", "I have taught Maria before.", "Past action connected to now", "ever, never, already, yet, since, for", "Using exact finished time", "Draw a bridge from past to now."],
  ["Present Perfect Continuous", "Subject + have/has been + verb-ing", "He has been studying for two years.", "Duration from past to now", "since, for, lately", "Confusing result and duration", "Ask 'How long have you been...?'"],
  ["Simple Past", "Subject + past verb", "We reviewed articles yesterday.", "Finished past events", "yesterday, last week, in 2020", "Using present perfect with finished time", "Use a timeline with a clear past point."],
  ["Past Continuous", "Subject + was/were + verb-ing", "I was teaching when he joined.", "Background action in the past", "while, when, at 8 PM", "Using it for completed main events", "Act out an interruption scene."],
  ["Past Perfect", "Subject + had + past participle", "She had finished before class started.", "Earlier past before another past event", "before, after, by the time", "Using it without a second past reference", "Stack two past events on a timeline."],
  ["Past Perfect Continuous", "Subject + had been + verb-ing", "They had been waiting for ten minutes.", "Duration before a past event", "for, since, before", "Overusing it for simple sequences", "Use 'tired because...' prompts."],
  ["Simple Future", "Subject + will + base verb", "I will send the homework.", "Predictions, decisions, promises", "tomorrow, soon, next week", "Using will for fixed plans only", "Make quick promises and predictions."],
  ["Future Continuous", "Subject + will be + verb-ing", "I will be teaching at 9.", "Action in progress at a future time", "at this time tomorrow", "Confusing with simple future", "Use future schedule conflicts."],
  ["Future Perfect", "Subject + will have + past participle", "By Friday, we will have finished.", "Completed before a future point", "by, by the time", "Missing the future deadline", "Set a deadline and ask what will be done."],
  ["Future Perfect Continuous", "Subject + will have been + verb-ing", "By June, she will have been studying for a year.", "Duration up to a future time", "by, for", "Too complex for low levels", "Use milestone prompts."],
  ["Going to Future", "Subject + am/is/are going to + base verb", "We are going to practice interviews.", "Plans and evidence-based predictions", "later, next, soon", "Mixing with go to", "Use calendar plans and visible evidence."],
  ["Used To", "Subject + used to + base verb", "I used to work nights.", "Past habit or state no longer true", "when I was young, before", "Using used to for current habits", "Compare past life and current life."],
  ["Would for Past Habits", "Subject + would + base verb", "After work, he would study English.", "Repeated past actions, often in stories", "when, every summer", "Using would for past states", "Tell a childhood routine story."],
  ["Future in the Past", "Subject + was/were going to / would + base", "I thought she would join.", "Future idea viewed from the past", "said, thought, planned", "Confusing viewpoint", "Use reported plans."]
];

const extraGrammar = [
  "Subject-Verb Agreement", "Articles", "Countable and Uncountable Nouns", "Quantifiers", "Determiners", "Pronouns", "Possessives", "Adjectives", "Adverbs", "Comparatives", "Superlatives", "Prepositions", "Prepositions of Time", "Conjunctions", "Interjections", "Modal Verbs", "Semi-modals", "Imperatives", "Gerunds", "Infinitives", "Participles", "Phrasal Verbs", "Relative Clauses", "Noun Clauses", "Adverb Clauses", "Conditionals", "Passive Voice", "Active Voice", "Reported Speech", "Direct Speech", "Question Formation", "Tag Questions", "Indirect Questions", "Causatives", "Wish / If Only", "Ellipsis", "Inversion", "Emphasis", "Cleft Sentences", "Subjunctive", "Parallel Structure", "Modifiers", "Dangling Modifiers", "Word Order", "Negation", "Punctuation", "Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional", "Mixed Conditionals", "Nouns", "Verbs", "Objects", "Complements", "Subject", "Predicate", "Direct Object", "Indirect Object", "Subject Complement", "Object Complement", "Simple Sentence", "Compound Sentence", "Complex Sentence", "Compound-Complex Sentence"
];

seed.vocabulary = [
  "agenda", "deadline", "feedback", "proposal", "negotiate", "reschedule", "refund", "receipt", "appointment", "candidate", "strength", "weakness", "achievement", "priority", "reliable", "efficient", "collaborate", "implement", "increase", "decrease", "stable", "customer", "complaint", "solution", "budget", "invoice", "contract", "presentation", "confidence", "accuracy"
].map((w, i) => ({ id: `v${i+1}`, word: w, definition: vocabDefinition(w), part: i % 5 === 0 ? "verb" : i % 3 === 0 ? "adjective" : "noun", pronunciation: `/${w.slice(0, Math.min(5, w.length))}/`, example: `Please use "${w}" in a practical workplace sentence.`, synonyms: "related term, useful phrase", antonyms: "opposite idea", collocations: collocationFor(w), register: i % 4 === 0 ? "Business" : "Neutral", cefr: ["A2","B1","B2","C1"][i % 4], topic: ["Business","Travel","Technology","Daily Life","Work","Education","Finance","Customer Service"][i % 8] }));

seed.idioms = [
  "break the ice", "get the ball rolling", "on the same page", "touch base", "learn the ropes", "a win-win situation", "cut corners", "back to square one", "the bottom line", "by the book", "call it a day", "up in the air", "under the weather", "once in a blue moon", "hit the nail on the head", "in hot water", "keep an eye on", "miss the boat", "pull your weight", "raise the bar", "think outside the box", "ahead of the curve", "behind schedule", "a blessing in disguise", "cost an arm and a leg", "easy does it", "go the extra mile", "in the long run", "make ends meet", "take it with a grain of salt"
].map((x, i) => ({ id: `i${i+1}`, idiom: x, meaning: idiomMeaning(x), literal: "The literal meaning is not the intended meaning.", example: `In a meeting: "Let's ${x} before the client joins."`, register: ["Casual","Neutral","Business","Formal"][i % 4], difficulty: ["A2","B1","B2","C1"][i % 4], category: ["Work","Business","Money","Relationships","Emotion","Travel","Food","Time","Success","Failure","Conversation","Daily Life"][i % 12], similar: "related expression", contrast: "opposite idea", mistake: "Students may translate it word for word." }));

seed.phrasal = [
  "bring up", "carry out", "come across", "cut down on", "deal with", "figure out", "fill in", "follow up", "get along", "give up", "go over", "hand in", "look after", "look into", "point out", "put off", "run into", "set up", "take over", "turn down", "work out", "write down", "pick up", "drop off", "check in", "check out", "sort out", "come up with", "get back to", "look forward to"
].map((x, i) => ({ id: `p${i+1}`, verb: x, meaning: phrasalMeaning(x), example: `Could you ${x} this issue before class?`, transitive: i % 2 ? "Transitive" : "Intransitive / depends on meaning", separable: i % 3 === 0 ? "Separable" : "Usually inseparable", register: ["Neutral","Business","Casual"][i % 3], difficulty: ["A2","B1","B2"][i % 3], synonyms: "simple equivalent", mistake: "Wrong particle or object placement." }));

seed.collocations = [
  "make a decision", "take responsibility", "do business", "heavy rain", "strong coffee", "meet a deadline", "give feedback", "make progress", "solve a problem", "raise a question", "pay attention", "take notes", "reach an agreement", "launch a product", "hold a meeting", "book a flight", "miss a class", "achieve a goal", "build confidence", "gain experience", "highly recommended", "deeply concerned", "strict deadline", "strong argument", "brief summary", "customer satisfaction", "sales target", "learning objective", "common mistake", "natural expression"
].map((x, i) => ({ id: `co${i+1}`, expression: x, meaning: "A natural word combination English speakers commonly use.", example: `Try to ${x} in a realistic sentence.`, alternatives: "nearby phrase depending on context", mistake: `Avoid saying an unnatural version of "${x}".` }));

seed.mistakes = [
  ["I am agree.", "I agree.", "Agree is a verb in English.", "I agree with your point.", "Say: agree, not am agree."],
  ["She go to work.", "She goes to work.", "Third-person singular needs -s in simple present.", "He works from home.", "One person: add -s."],
  ["I have seen him yesterday.", "I saw him yesterday.", "Finished time uses simple past.", "I saw her last week.", "If the time is finished, use past simple."],
  ["I need an information.", "I need some information.", "Information is uncountable.", "Can you send me some information?", "No a/an with uncountable nouns."],
  ["Depends of the situation.", "Depends on the situation.", "Depend uses the preposition on.", "It depends on the client.", "Teach as a chunk: depends on."],
  ["I am boring.", "I am bored.", "Bored describes feeling; boring describes the thing.", "The meeting was boring, so I was bored.", "Person feels bored; thing is boring."],
  ["Explain me the rule.", "Explain the rule to me.", "Explain takes object + to person.", "Can you explain this to me?", "Use explain something to someone."],
  ["People is friendly.", "People are friendly.", "People is plural.", "The people are helpful.", "People = they."],
  ["I look forward to meet you.", "I look forward to meeting you.", "To is a preposition here, so use -ing.", "I look forward to hearing from you.", "After look forward to, use noun or -ing."],
  ["She said me the answer.", "She told me the answer.", "Say and tell use different patterns.", "She said that she was ready.", "Tell someone; say something."],
  ["I very like it.", "I really like it.", "Very does not modify verbs directly.", "I really enjoy this topic.", "Use really with verbs."],
  ["I have 30 years.", "I am 30 years old.", "English uses be for age.", "She is 25.", "Age uses be, not have."],
  ["He is married with Ana.", "He is married to Ana.", "Married uses to.", "She is married to a teacher.", "Teach the fixed phrase."],
  ["Can you borrow me a pen?", "Can you lend me a pen?", "Borrow means receive; lend means give temporarily.", "Can I borrow your pen?", "Borrow from, lend to."],
  ["I made a party.", "I had a party.", "English uses have/throw a party.", "We had a party last night.", "Collocations must be learned as phrases."],
  ["I am here since Monday.", "I have been here since Monday.", "Since connects past start to now.", "She has worked here since 2020.", "Use present perfect with since/for."],
  ["Despite of the rain", "Despite the rain", "Despite does not use of.", "Despite the delay, we continued.", "Despite + noun."],
  ["More better", "Better", "Better already means more good.", "This version is better.", "Do not double comparatives."],
  ["Informations", "Information", "Information is uncountable.", "The information is useful.", "No plural -s."],
  ["How you say?", "How do you say?", "Questions need auxiliary do.", "How do you pronounce this?", "Use do/does/did for many questions."]
].map((m, i) => ({ id: `m${i+1}`, incorrect: m[0], correct: m[1], why: m[2], example: m[3], teacher: m[4] }));

const navItems = ["Dashboard", "Students", "Classes", "Lessons", "Grammar", "Vocabulary", "Idioms", "Notes", "Teaching Tools", "Reports", "Settings"];

function grammarEntry(id, name, formula, example, use, signal, mistake, tip) {
  const definition = definitionFor(name, use);
  const examples = examplesFor(name, example);
  const explain = explanationFor(name, definition);
  return {
    id, name, category: grammarCategory(name), formula, example, examples, use, signal, mistake, tip,
    what: definition,
    negative: negativeFor(name),
    questions: questionFor(name),
    contrast: contrastFor(name),
    practice: [`Ask a student to make one true sentence with ${name}.`, "Correct one common mistake together.", "Ask a follow-up question using the target form."],
    explain
  };
}

const grammarDetails = {
  "Subject-Verb Agreement": ["Subject + verb that matches number/person", "She works from home. They work from home.", "Make the verb match the subject, especially with he/she/it in the simple present.", "Forgetting the -s with he/she/it: She work every day.", "Circle the subject first, then choose the verb form."],
  "Articles": ["a/an + singular count noun; the + specific noun", "I read a report. The report was useful.", "Show whether a noun is general, one of many, or already known/specific.", "Using the for general ideas: The honesty is important.", "Use classroom objects: a pen, the pen, pens in general."],
  "Countable and Uncountable Nouns": ["count noun: one/two + plural; uncount noun: some/much", "I need some advice, not three advices.", "Choose correct quantity words and avoid incorrect plurals.", "Adding -s to uncountable nouns: informations, advices.", "Sort nouns into countable and uncountable columns with real examples."],
  "Quantifiers": ["some/any/much/many/a few/a little + noun", "We have a few questions and a little time.", "Talk about amount, quantity, and limits.", "Using much with plural count nouns: much people.", "Pair quantifiers with countable or uncountable nouns."],
  "Determiners": ["determiner + noun", "This lesson, my student, every question", "Introduce or limit a noun before the noun appears.", "Stacking determiners incorrectly: my the student.", "Use noun phrases from the student's work or life."],
  "Pronouns": ["pronoun replaces or refers to a noun", "Maria is ready. She can start now.", "Avoid repeating nouns and make reference clear.", "Unclear reference: John told Ali he was late.", "Ask: Who does this pronoun refer to?"],
  "Possessives": ["possessive adjective/noun + noun; noun + 's", "This is Maria's notebook. Her notes are clear.", "Show ownership, relationships, and belonging.", "Confusing it's and its.", "Use personal items and workplace relationships."],
  "Adjectives": ["adjective + noun; be + adjective", "The lesson was useful. It was a useful lesson.", "Describe people, things, quality, size, opinion, and condition.", "Putting adjectives after nouns: a lesson useful.", "Have students upgrade bland nouns with precise adjectives."],
  "Adverbs": ["adverb modifies verb/adjective/adverb/sentence", "She speaks clearly. The task was extremely useful.", "Describe how, when, where, how often, or how strongly something happens.", "Using adjective form after verbs: She speaks clear.", "Contrast adjective vs adverb pairs: careful/carefully."],
  "Comparatives": ["adjective/adverb + -er or more + adjective/adverb + than", "This email is clearer than the first one.", "Compare two people, things, actions, or situations.", "Double comparatives: more better.", "Use two real options and ask which is better, faster, cheaper, clearer."],
  "Superlatives": ["the + adjective/adverb + -est; the most + adjective/adverb", "This is the most useful example.", "Choose one item as number one in a group.", "Missing the: This is best option.", "Rank three examples from a lesson topic."],
  "Prepositions": ["preposition + noun phrase", "We talked about the project after class.", "Show relationships such as time, place, direction, reason, and topic.", "Direct translation from L1: discuss about the issue.", "Teach common verb/preposition chunks together."],
  "Prepositions of Time": ["in + months/years; on + days/dates; at + clock times", "Class is at 8:00 on Monday in September.", "Place events accurately in time.", "Using in Monday or on 8:00.", "Use the student's weekly schedule for fast practice."],
  "Conjunctions": ["clause + conjunction + clause/phrase", "I wanted to join, but I was busy.", "Connect ideas: addition, contrast, reason, result, and choice.", "Comma splices or overusing and.", "Ask students to combine short sentences naturally."],
  "Modal Verbs": ["subject + modal + base verb", "You should review this. We can start now.", "Express ability, advice, obligation, permission, possibility, and certainty.", "Using to after modals: must to go.", "Make advice cards using should, must, can, might."],
  "Semi-modals": ["have to / need to / be able to / be going to + base verb", "I have to prepare. She is able to explain it.", "Express modal-like meanings with verb phrases.", "Treating them like pure modals: He have to go.", "Compare must vs have to using workplace rules."],
  "Imperatives": ["base verb; do not + base verb", "Open your book. Don't worry.", "Give instructions, warnings, invitations, and classroom directions.", "Adding a subject unnecessarily: You open your book.", "Use commands from recipes, apps, or classroom tasks."],
  "Gerunds": ["verb-ing used as noun", "Speaking English every day helps.", "Use actions as subjects, objects, or after certain verbs/prepositions.", "Using infinitive after enjoy: I enjoy to read.", "Teach common verbs followed by -ing: enjoy, avoid, finish."],
  "Infinitives": ["to + base verb", "I want to improve my speaking.", "Show purpose, goals, plans, and verbs followed by to.", "Using gerund after want: I want improving.", "Ask students to complete: I need to..., I decided to..."],
  "Participles": ["present participle -ing; past participle -ed/irregular", "The boring meeting made us tired.", "Build verb forms and adjective meanings.", "Confusing bored/boring or tired/tiring.", "Teach feeling vs cause pairs with pictures or situations."],
  "Phrasal Verbs": ["verb + particle", "Please fill in the form and send it back.", "Use common verb-particle meanings in everyday and work English.", "Changing the particle: depend of, look to.", "Teach them as whole phrases with context, not isolated verbs."],
  "Relative Clauses": ["relative pronoun + clause", "A tutor who listens carefully helps students improve.", "Add information about a person, thing, place, or idea.", "Repeating the subject: The man who he called me.", "Combine two short sentences into one."],
  "Noun Clauses": ["clause used as subject/object/complement", "I know what she means.", "Use a whole clause as a noun idea.", "Keeping question word order: I know what does she mean.", "Convert direct questions into noun clauses."],
  "Adverb Clauses": ["subordinating conjunction + subject + verb", "Because she practiced, she improved.", "Show time, reason, condition, contrast, or result.", "Sentence fragments: Because I was tired.", "Finish the thought after because/although/when."],
  "Conditionals": ["if + condition, result clause", "If you practice daily, you will improve.", "Talk about facts, real possibilities, imaginary situations, and regrets.", "Mixing forms: If I will have time...", "Start with meaning first: real, imaginary, or past regret."],
  "Passive Voice": ["subject + be + past participle", "The lesson was recorded.", "Focus on the action or receiver when the doer is unknown/unimportant.", "Wrong be form: The report written yesterday.", "Ask: Is the doer important here?"],
  "Active Voice": ["subject + verb + object", "The teacher explained the rule.", "Make sentences direct and clear by naming the doer.", "Using passive when active is clearer.", "Have students identify who did the action."],
  "Reported Speech": ["reporting verb + shifted clause", "She said that she was busy.", "Report what someone said without quoting exact words.", "Not shifting tense/time words when needed.", "Use real class dialogue and report it."],
  "Direct Speech": ["speaker + reporting verb + exact quoted words", "Maria said, 'I need more practice.'", "Quote someone's exact words.", "Missing punctuation or quotation marks.", "Contrast direct quote vs reported meaning."],
  "Question Formation": ["auxiliary/modal + subject + main verb", "Where do you work? Can you join?", "Ask clear information, yes/no, and follow-up questions.", "Using statement order: Where you work?", "Drill question word + auxiliary + subject."],
  "Tag Questions": ["statement + auxiliary tag", "You're ready, aren't you?", "Check information or invite agreement.", "Wrong auxiliary: You like coffee, aren't you?", "Match the tag to the auxiliary and polarity."],
  "Indirect Questions": ["intro phrase + question word/if + subject + verb", "Could you tell me where the office is?", "Ask politely or embed a question in a sentence.", "Using question order: Could you tell me where is it?", "Teach as polite question frames."],
  "Causatives": ["have/get + object + past participle; make/let/help + object + base verb", "I had my laptop repaired.", "Show that someone causes another person to do something.", "Confusing doer and receiver.", "Use services: haircut, repair, delivery."],
  "Wish / If Only": ["wish/if only + past form or past perfect", "I wish I had more time.", "Talk about unreal present desires or past regrets.", "Using present after wish: I wish I have.", "Ask students about changes they want now vs regrets."],
  "Ellipsis": ["omit repeated understood words", "I can join if you can.", "Avoid repeating words when meaning is clear.", "Omitting too much so the sentence becomes unclear.", "Compare full sentence and natural shortened version."],
  "Inversion": ["negative/limiting adverb + auxiliary + subject + verb", "Rarely have I seen such progress.", "Add emphasis or formal style by changing word order.", "Forgetting auxiliary after fronted negative phrase.", "Use only with advanced students and formal examples."],
  "Emphasis": ["cleft, do-emphasis, fronting, stress", "I do understand your point.", "Make one part of the sentence stronger or clearer.", "Overusing emphasis so every sentence sounds dramatic.", "Ask what information the speaker wants to highlight."],
  "Cleft Sentences": ["It is/was + focus + that/who clause", "It was the pronunciation that caused confusion.", "Emphasize a specific person, thing, time, or reason.", "Using clefts for every sentence.", "Start from a normal sentence, then choose the focus."],
  "Subjunctive": ["suggest/insist/recommend + that + subject + base verb", "I recommend that he be on time.", "Use formal recommendation, demand, or necessity structures.", "Using third-person -s: I suggest that he goes.", "Teach as formal/business English, not daily conversation."],
  "Parallel Structure": ["same grammatical form in a list or pair", "She likes teaching, planning, and correcting.", "Make lists and paired ideas balanced and easy to read.", "Mixing forms: teaching, to plan, and correction.", "Underline list items and make their forms match."],
  "Modifiers": ["modifier placed next to the word it describes", "The student with a blue notebook asked a question.", "Add detail without confusing what is being described.", "Modifier too far from target word.", "Move the modifier and ask what meaning changes."],
  "Dangling Modifiers": ["intro modifier must match the subject that follows", "After finishing the lesson, Maria wrote notes.", "Avoid unclear sentences where the doer is missing or wrong.", "After finishing the lesson, the notes were written.", "Ask: who did the first action?"],
  "Word Order": ["subject + verb + object/complement + adverbials", "She studies English at night.", "Put words in a natural English sequence.", "Using L1 order: English I study every day.", "Use sentence strips and reorder them."],
  "Negation": ["auxiliary + not + main verb/base form", "She does not work on Sundays.", "Make negative statements accurately.", "Double negatives or missing auxiliary.", "Teach do/does/did not with simple tenses."],
  "Punctuation": ["commas, periods, apostrophes, question marks", "Let's eat, Grandma. / Let's eat Grandma.", "Make writing easier to read and meaning clear.", "Comma splices and missing apostrophes.", "Use one short paragraph and edit punctuation together."],
  "Nouns": ["word for person/place/thing/idea", "teacher, classroom, progress, confidence", "Name things students talk about and build noun phrases.", "Plural/countability errors.", "Sort nouns by person, place, thing, idea."],
  "Verbs": ["word showing action/state", "She teaches. They are ready.", "Express actions, states, events, and time.", "Wrong tense or missing auxiliary.", "Ask: action or state? now, past, or future?"],
  "Objects": ["receiver of the verb", "She explained the answer.", "Identify who or what receives an action.", "Confusing subject and object pronouns.", "Ask: subject did what to whom/what?"],
  "Complements": ["word/phrase completing subject or object meaning", "She is confident. They elected him leader.", "Complete the meaning after linking verbs or object structures.", "Treating complements like objects.", "Contrast action verbs with linking verbs."],
  "Zero Conditional": ["if/when + present, present", "If water reaches 100°C, it boils.", "Talk about facts, rules, and repeated results.", "Using will in the result for general facts.", "Use science, routines, or workplace rules."],
  "First Conditional": ["if + present, will/can/may + base verb", "If you practice, you will improve.", "Talk about real future possibilities.", "Using will in the if-clause.", "Ask realistic future consequence questions."],
  "Second Conditional": ["if + past, would/could + base verb", "If I had more time, I would study daily.", "Talk about imaginary present/future situations.", "Using present form for unreal situations.", "Ask dream-job or advice scenarios."],
  "Third Conditional": ["if + past perfect, would have + past participle", "If I had prepared, I would have passed.", "Talk about past regrets or unreal past results.", "Mixing past simple with would have.", "Use regret and lesson-learned prompts."],
  "Mixed Conditionals": ["if + past perfect, would + base OR if + past, would have + past participle", "If I had studied business, I would have a better job now.", "Connect an unreal past condition to a present result, or present condition to past result.", "Mixing timelines without clear meaning.", "Draw two timelines: past condition and present result."]
};

Object.assign(grammarDetails, {
  "Interjections": ["short word/phrase showing feeling or reaction", "Oh! Really? Well, I see.", "Use natural reactions in conversation without building a full sentence.", "Overusing strong interjections in formal speaking.", "Teach mild classroom-safe reactions: oh, wow, really, well."],
  "Subject": ["subject + predicate", "Maria joined the class. The lesson started at 8.", "Identify who or what the sentence is about.", "Missing the subject: Is important to practice.", "Ask: who or what is doing or being something?"],
  "Predicate": ["subject + predicate", "Maria practiced pronunciation. The meeting was useful.", "Show what the subject does, has, or is.", "Writing only a subject with no complete idea.", "Split sentences into subject and predicate with a vertical line."],
  "Direct Object": ["subject + verb + direct object", "She explained the answer. We reviewed the homework.", "Identify the thing or person directly receiving the action.", "Using an object after an intransitive verb.", "Ask: subject did the verb to what or whom?"],
  "Indirect Object": ["subject + verb + indirect object + direct object", "I sent Maria the worksheet. He gave the student feedback.", "Show who receives or benefits from the direct object.", "Wrong order with pronouns: I sent to her it.", "Practice both patterns: give Maria feedback / give feedback to Maria."],
  "Subject Complement": ["subject + linking verb + complement", "She is confident. The lesson became difficult.", "Complete the meaning of the subject after be, seem, become, feel.", "Using an adverb after a linking verb: I feel badly.", "Contrast action verbs with linking verbs: speak clearly vs feel confident."],
  "Object Complement": ["subject + verb + object + complement", "They made the task easy. We consider him ready.", "Add information that describes or renames the object.", "Mistaking the object complement for a second object.", "Ask: what did the object become or what do we call it?"],
  "Simple Sentence": ["one independent clause", "Maria practiced. The class ended early.", "Express one complete idea clearly.", "Calling every short phrase a sentence.", "Check for a subject and a complete verb."],
  "Compound Sentence": ["independent clause + coordinating conjunction + independent clause", "I prepared the lesson, and Maria completed the homework.", "Connect two complete ideas with equal importance.", "Comma splice: I prepared, Maria practiced.", "Teach FANBOYS and require two complete clauses."],
  "Complex Sentence": ["independent clause + dependent clause", "Because Maria practiced, she improved.", "Show reason, time, condition, contrast, or extra information.", "Leaving a dependent clause alone: Because she practiced.", "Ask students to complete because/when/although clauses."],
  "Compound-Complex Sentence": ["two independent clauses + at least one dependent clause", "Because Maria practiced, she improved, and she felt more confident.", "Combine multiple related ideas in advanced writing or speaking.", "Making long sentences without clear clause boundaries.", "Build it step by step: dependent clause, main clause, second main clause."]
});

function detailFor(name, index) {
  const fallback = [`Core pattern for ${name}`, `${name}: use one clear student-centered example.`, `${name} helps students express a specific meaning accurately in class communication.`, `Students may overuse a familiar pattern or translate directly from their first language.`, `Teach ${name.toLowerCase()} with one rule, one model, one correction, and one personal question.`];
  return grammarDetails[name] || fallback;
}
const grammarDefinitions = {
  "Simple Present": "Use the simple present for routines, habits, facts, schedules, and things that are generally true.",
  "Present Continuous": "Use the present continuous for actions happening now, temporary situations, and changing situations.",
  "Present Perfect": "Use the present perfect for past experiences, recent actions, unfinished time periods, or past actions with a present result.",
  "Present Perfect Continuous": "Use the present perfect continuous to emphasize how long an activity has continued from the past until now.",
  "Simple Past": "Use the simple past for completed actions or situations at a finished time in the past.",
  "Past Continuous": "Use the past continuous for an action in progress at a specific past time or as background for another past event.",
  "Past Perfect": "Use the past perfect to show that one past action happened before another past action.",
  "Past Perfect Continuous": "Use the past perfect continuous to show how long an activity had been happening before another past event.",
  "Simple Future": "Use will for predictions, promises, offers, and decisions made at the moment of speaking.",
  "Future Continuous": "Use the future continuous for actions that will be in progress at a specific future time.",
  "Future Perfect": "Use the future perfect for actions that will be completed before a future deadline or point in time.",
  "Future Perfect Continuous": "Use the future perfect continuous to show duration up to a future point.",
  "Going to Future": "Use going to for plans already decided and predictions based on present evidence.",
  "Used To": "Use used to for past habits or states that are no longer true now.",
  "Would for Past Habits": "Use would for repeated past actions, especially when telling stories or describing old routines.",
  "Future in the Past": "Use future in the past to describe a future plan, prediction, or expectation from a past viewpoint."
};
const grammarExampleSets = {
  "Simple Present": ["I teach online every morning.", "Maria studies English after work.", "The platform opens at 8 PM."],
  "Present Continuous": ["She is practicing questions now.", "We are working on pronunciation this week.", "The class is getting easier for him."],
  "Present Perfect": ["I have taught Maria before.", "She has finished the homework.", "We have practiced this topic three times."],
  "Present Perfect Continuous": ["He has been studying for two years.", "Maria has been practicing pronunciation all week.", "They have been working on interview answers since Monday."],
  "Simple Past": ["We reviewed articles yesterday.", "She missed class last Friday.", "They completed the lesson in 30 minutes."],
  "Past Continuous": ["I was teaching when he joined.", "She was taking notes during the explanation.", "They were practicing roleplays at 8 PM."],
  "Past Perfect": ["She had finished before class started.", "I had prepared the lesson before the student arrived.", "They had already studied the vocabulary."],
  "Past Perfect Continuous": ["They had been waiting for ten minutes.", "She had been practicing before the interview began.", "I had been teaching all morning when the platform crashed."],
  "Simple Future": ["I will send the homework.", "She will probably improve quickly.", "We will review this again next class."],
  "Future Continuous": ["I will be teaching at 9.", "She will be traveling during tomorrow's class.", "We will be practicing roleplays at this time next week."],
  "Future Perfect": ["By Friday, we will have finished the unit.", "She will have completed ten classes by June.", "They will have reviewed all interview questions before the test."],
  "Future Perfect Continuous": ["By June, she will have been studying for a year.", "By 8 PM, I will have been teaching for six hours.", "By the next review, he will have been practicing daily for a month."],
  "Going to Future": ["We are going to practice interviews.", "She is going to take an English test.", "Look at those clouds; it is going to rain."],
  "Used To": ["I used to work nights.", "She used to be shy in class.", "They used to study only grammar."],
  "Would for Past Habits": ["After work, he would study English.", "When she was younger, she would watch English movies.", "Every summer, they would travel abroad."],
  "Future in the Past": ["I thought she would join.", "He was going to cancel, but he attended.", "They said they would send the report."]
};
function definitionFor(name, use) {
  return grammarDefinitions[name] || detailFor(name)[2] || use;
}
function examplesFor(name, example) {
  if (grammarExampleSets[name]) return grammarExampleSets[name];
  const detail = detailFor(name);
  const base = detail[1] || example;
  return [
    base,
    `Classroom scenario: ask the student to use ${name.toLowerCase()} in a sentence about work, study, or daily life.`,
    `Correction scenario: show the common mistake, then have the student rewrite it correctly.`
  ];
}
function starterFormula(name) { return detailFor(name)[0]; }
function starterExample(name) { return detailFor(name)[1]; }
function starterUse(name) { return detailFor(name)[2]; }
function starterMistake(name) { return detailFor(name)[3]; }
function starterTip(name) { return detailFor(name)[4]; }
function explanationFor(name, use) {
  return {
    technical: `${name}: ${use}`,
    teacher: `Teach ${name} by showing the pattern, one natural example, one common mistake, and then asking the student to make a personal sentence.`,
    student: `${name}: use this pattern to say your idea more clearly. Look at the example, then make your own sentence.`
  };
}
seed.grammar = grammarRows.map((g, i) => grammarEntry(`g${i+1}`, ...g)).concat(extraGrammar.map((name, i) => grammarEntry(`gx${i+1}`, name, starterFormula(name), starterExample(name), starterUse(name), "", starterMistake(name), starterTip(name))));
function negativeFor(name) { return name.includes("Tense") ? "Add not after the auxiliary." : "Show the negative version only after the positive pattern is clear."; }
function questionFor(name) { return name.includes("Question") ? "Focus on word order and auxiliary choice." : "Ask one controlled question, then one personal question."; }
function contrastFor(name) {
  if (name === "Present Perfect") return "Simple Past";
  if (name === "Simple Past") return "Present Perfect";
  if (name.includes("Article")) return "Zero Article";
  if (name.includes("Conditional")) return "Other conditional forms";
  return "A related form students commonly confuse.";
}
function grammarCategory(name) {
  if (name.includes("Future") || name.includes("Past") || name.includes("Present") || name === "Used To") return "Tenses";
  if (name.includes("Conditional")) return "Conditionals";
  if (["Articles","Nouns","Pronouns","Determiners","Quantifiers","Adjectives","Adverbs","Comparatives","Superlatives","Prepositions","Conjunctions","Interjections","Possessives"].some(x => name.includes(x)) || name === "Verbs") return "Parts of Speech";
  if (["Subject","Predicate","Question","Clause","Sentence","Object","Complement","Word Order"].some(x => name.includes(x))) return "Sentence Structure";
  return "Core Grammar";
}

let state = loadState();
let currentView = "Dashboard";
let selectedStudent = state.students?.[0]?.id;
let selectedGrammar = state.grammar?.find(g => g.name === "Present Perfect")?.id || state.grammar?.[0]?.id || "";
let grammarMode = "teacher";

function loadState() {
  const saved = localStorage.getItem("eslTeacherOsState");
  const data = saved ? normalizeState(JSON.parse(saved)) : normalizeState(structuredClone(seed));
  localStorage.setItem("eslTeacherOsState", JSON.stringify(data));
  return data;
}
function normalizeState(data) {
  data.students = data.students || [];
  data.classes = data.classes || [];
  data.lessons = data.lessons || [];
  data.grammar = data.grammar || [];
  data.vocabulary = data.vocabulary || [];
  data.idioms = data.idioms || [];
  data.collocations = data.collocations || [];
  data.platforms = data.platforms || seed.platforms;
  data.notes = data.notes || [];
  data.supabase = data.supabase || { url: "", anonKey: "", syncId: "default" };
  syncScratchpadNote(data);
  upgradeGrammarContent(data);
  return data;
}
function upgradeGrammarContent(data = state) {
  if (!Array.isArray(data.grammar)) return;
  const wanted = grammarRows.map((g, i) => grammarEntry(`g${i+1}`, ...g)).concat(extraGrammar.map((name, i) => grammarEntry(`gx${i+1}`, name, starterFormula(name), starterExample(name), starterUse(name), "", starterMistake(name), starterTip(name))));
  wanted.forEach(topic => {
    if (!data.grammar.some(existing => existing.name === topic.name)) data.grammar.push(topic);
  });
  data.grammar.forEach(topic => {
    const detail = detailFor(topic.name);
    topic.formula = detail[0];
    topic.example = detail[1];
    topic.examples = examplesFor(topic.name, topic.example);
    topic.use = detail[2];
    topic.mistake = detail[3];
    topic.tip = detail[4];
    topic.what = definitionFor(topic.name, topic.use);
    topic.category = grammarCategory(topic.name);
    topic.explain = explanationFor(topic.name, topic.what);
  });
}
function syncScratchpadNote(data = state) {
  data.notes = data.notes || [];
  if (!data.scratchpad) return;
  const now = new Date().toISOString();
  let note = data.notes.find(item => item.source === "dashboard-scratchpad");
  if (!note) {
    note = { id: "n-dashboard", title: "Dashboard Scratchpad", body: data.scratchpad, createdAt: now, updatedAt: now, source: "dashboard-scratchpad", studentId: "", classId: "" };
    data.notes.unshift(note);
  } else if (!note.body && data.scratchpad) {
    note.body = data.scratchpad;
    note.updatedAt = now;
  }
}
function saveState() {
  localStorage.setItem("eslTeacherOsState", JSON.stringify(state));
}
function $(id) { return document.getElementById(id); }
function studentName(id) { return state.students.find(s => s.id === id)?.name || "Unknown student"; }
function classStudent(c) { return state.students.find(s => s.id === c.studentId); }
function todayClasses() { return state.classes.filter(c => c.date === DAY).sort((a,b) => a.start.localeCompare(b.start)); }
function completedClasses() { return state.classes.filter(c => c.status === "Completed"); }
function hours(list) { return (list.reduce((sum, c) => sum + Number(c.duration || 0), 0) / 60).toFixed(1); }

function renderNav() {
  $("nav").innerHTML = navItems.map(item => `<button class="${item === currentView ? "active" : ""}" data-view="${item}"><span>${item}</span><span>${countFor(item)}</span></button>`).join("");
  document.querySelectorAll("[data-view]").forEach(btn => btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    document.querySelector(".sidebar").classList.remove("open");
    render();
  }));
}
function countFor(item) {
  const map = { Students: state.students.length, Classes: state.classes.length, Lessons: state.lessons.length, Grammar: state.grammar.length, Vocabulary: state.vocabulary.length, Idioms: state.idioms.length, Notes: state.notes.length };
  return map[item] || "";
}

function render() {
  syncScratchpadNote();
  renderNav();
  const views = { Dashboard: dashboardView, Students: studentsView, Classes: classesView, Lessons: lessonsView, Grammar: grammarView, Vocabulary: vocabularyView, Idioms: idiomsView, Notes: notesView, "Teaching Tools": toolsView, Reports: reportsView, Settings: settingsView };
  $("view").innerHTML = views[currentView]();
  bindView();
}

function dashboardView() {
  const todays = todayClasses();
  const week = state.classes.filter(c => c.date >= "2026-09-10" && c.date <= DAY);
  const prepNeeded = todays.filter(c => !c.lesson || !c.topic || !c.grammar);
  const noteGaps = state.classes.filter(c => c.status === "Completed" && (!c.notes || !c.homework || !c.followup));
  return `
    <div class="page-head">
      <div><h2>Today</h2><p>Classes, quick actions, and the next teaching decision in one place.</p></div>
      <button class="primary-action" data-action="quick-log">Post-Class Quick Log</button>
    </div>
    <div class="grid dashboard-metrics">
      ${metric("Classes Today", todays.length)}
      ${metric("Hours Today", hours(todays))}
      ${metric("Classes This Week", week.length)}
      ${metric("Lesson Library", state.lessons.length)}
      ${metric("Need Notes", noteGaps.length)}
      ${metric("Need Prep", prepNeeded.length)}
    </div>
    <section class="panel dashboard-wide" style="margin-top:16px">
      <div class="section-head"><h3>Today's Classes</h3><button class="secondary-action" data-action="quick-log">Add Class</button></div>
      ${classTable(todays)}
    </section>
    <div class="dashboard-grid" style="margin-top:16px">
      <section class="panel">
        <h3>Quick Actions</h3>
        <div class="quick-actions">
          <button class="secondary-action" data-action="add-student">Add Student</button>
          <button class="secondary-action" data-action="quick-log">Log Class</button>
          <button class="secondary-action" data-action="create-lesson">Create Lesson</button>
          <button class="ghost-action" data-jump="Grammar">Search Grammar</button>
          <button class="ghost-action" data-jump="Lessons">Search Lesson</button>
          <button class="ghost-action" data-action="add-note">Add Note</button>
        </div>
      </section>
      <section class="panel">${nextClassPanel(todays)}</section>
      <section class="panel">${scratchpadPanel()}</section>
      <section class="panel">${studentsToReviewPanel()}</section>
      <section class="panel">${lessonPrepPanel(prepNeeded)}</section>
      <section class="panel">${noteGapsPanel(noteGaps)}</section>
      <section class="panel">${weekSnapshotPanel(week)}</section>
      <section class="panel">${platformBreakdownPanel(week)}</section>
      <section class="panel">${grammarQueuePanel()}</section>
      <section class="panel">${recentHistoryPanel()}</section>
      <section class="panel">${recentVocabularyPanel()}</section>
      <section class="panel dashboard-wide"><h3>Student Snapshot</h3><p class="panel-note">A quick summary pulled from each student profile and class history so you can remember what to review before class.</p><div class="brain-grid">${state.students.map(s => studentBrain(s)).join("")}</div></section>
    </div>`;
}
function metric(label, value) { return `<div class="panel metric"><strong>${value}</strong><span>${label}</span></div>`; }
function classTable(classes) {
  if (!classes.length) return `<div class="empty">No classes yet.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Time</th><th>Student</th><th>Level</th><th>Platform</th><th>Lesson</th><th>Status</th><th>Actions</th></tr></thead><tbody>${classes.map(c => {
    const s = classStudent(c);
    return `<tr><td>${c.date}<br>${c.start}-${c.end}<br><span class="muted small">${c.duration} min</span></td><td>${s?.name || "Deleted student"}</td><td>${s?.cefr || ""}</td><td>${c.platform}</td><td>${c.lesson || "Untitled class"}<br><span class="muted small">${c.topic || ""}</span></td><td><span class="status ${c.status.replace(" ","")}">${c.status}</span></td><td><div class="row-actions"><button class="ghost-action" data-edit-class="${c.id}">Edit</button><button class="ghost-action" data-complete="${c.id}">Complete</button><button class="danger-action" data-delete-class="${c.id}">Delete</button></div></td></tr>`;
  }).join("")}</tbody></table></div>`;
}
function studentBrain(s) {
  const previous = state.classes.filter(c => c.studentId === s.id && c.status === "Completed").slice(0, 2);
  const next = suggestNext(s);
  return `<article class="card" style="margin-top:10px">
    <strong>${s.name}</strong><div class="muted small">${s.level} · ${s.platform}</div>
    <div style="margin-top:8px">${s.grammar.map(g => `<span class="tag">${g.topic}: ${g.status}</span>`).join("")}</div>
    <p class="small"><b>Previous:</b> ${previous.map(p => p.lesson).join(", ") || "No completed lessons yet."}</p>
    <p class="small"><b>Suggested next:</b> ${next}</p>
  </article>`;
}
function suggestNext(s) {
  const weak = s.grammar.find(g => g.status.includes("Needs"))?.topic;
  if (weak === "Present Perfect") return "Present Perfect vs Simple Past";
  if (weak === "Articles") return "Articles in Business Contexts";
  if (weak === "Simple Past") return "Travel Problems or Customer Service Roleplay";
  return weak || "Review previous lesson and choose a speaking task";
}
function nextClassPanel(classes) {
  const next = classes.find(c => c.status !== "Completed" && c.status !== "Cancelled");
  if (!next) return `<h3>Next Class</h3><div class="empty">No upcoming class left today.</div>`;
  const s = classStudent(next);
  return `<h3>Next Class</h3><div class="focus-block"><strong>${next.start} · ${s?.name || "Student"}</strong><p>${next.lesson || "No lesson selected yet"}</p><span class="tag">${next.platform}</span><span class="tag">${s?.cefr || "No CEFR"}</span></div>`;
}
function scratchpadPanel() {
  const latest = latestDashboardNote();
  return `<h3>Dashboard Notes</h3><p class="panel-note">Quick reminders for yourself. Saving here creates or updates a note in the Notes tab.</p><div class="field"><label>Scratchpad</label><textarea id="scratchpad" placeholder="Example: remind Maria to review articles next class.">${escapeHtml(latest?.body || "")}</textarea></div><div class="save-row"><button class="secondary-action" data-action="save-scratchpad">Save to Notes</button><button class="ghost-action" data-jump="Notes">Open Notes</button><span id="scratchpadStatus" class="save-status">${latest ? `Last saved ${formatDateTime(latest.updatedAt)}` : "Not saved yet"}</span></div>`;
}
function latestDashboardNote() {
  return state.notes.find(note => note.source === "dashboard-scratchpad");
}
function studentsToReviewPanel() {
  const rows = state.students
    .map(s => ({ student: s, issues: (s.grammar || []).filter(g => /Needs Practice|Improving/i.test(g.status)) }))
    .filter(row => row.issues.length)
    .slice(0, 6);
  return `<h3>Student Weakness Review</h3><p class="panel-note">Pulled from each student's Grammar Focus list. Use it to decide who needs review soon.</p>${rows.length ? rows.map(row => `<div class="mini-row"><b>${row.student.name}</b><span>${row.issues.map(i => i.topic).join(", ")}</span></div>`).join("") : `<div class="empty">No review flags yet.</div>`}`;
}
function lessonPrepPanel(rows) {
  return `<h3>Missing Class Prep</h3><p class="panel-note">Checks today's scheduled classes for missing lesson, topic, or grammar focus fields.</p>${rows.length ? rows.map(c => `<div class="mini-row"><b>${studentName(c.studentId)}</b><span>${c.start} · missing lesson/topic/grammar detail</span></div>`).join("") : `<div class="empty">All of today's classes have prep details.</div>`}`;
}
function noteGapsPanel(rows) {
  return `<h3>Post-Class Follow-Ups</h3><p class="panel-note">Completed classes appear here when notes, homework, or the next-topic field is still blank.</p>${rows.length ? rows.slice(0, 6).map(c => `<div class="mini-row"><b>${studentName(c.studentId)}</b><span>${formatDate(c.date)} · ${c.lesson || "Untitled class"}</span></div>`).join("") : `<div class="empty">No completed classes need notes.</div>`}`;
}
function weekSnapshotPanel(week) {
  const cancelled = week.filter(c => ["Cancelled", "No-show"].includes(c.status)).length;
  const active = topByCount(week.map(c => studentName(c.studentId)));
  return `<h3>This Week Snapshot</h3><div class="stat-list"><div><b>${week.length}</b><span>classes</span></div><div><b>${hours(week)}</b><span>hours</span></div><div><b>${cancelled}</b><span>cancel/no-show</span></div><div><b>${active || "None"}</b><span>most active student</span></div></div>`;
}
function platformBreakdownPanel(classes) {
  const rows = groupSum(classes, "platform");
  return `<h3>Platform Breakdown</h3>${rows.length ? barList(rows) : `<div class="empty">No platform data yet.</div>`}`;
}
function grammarQueuePanel() {
  const issues = state.students.flatMap(s => (s.grammar || []).map(g => g.topic));
  const counts = countItems(issues).slice(0, 6);
  return `<h3>Common Grammar Issues</h3><p class="panel-note">Counts grammar topics marked on student profiles. Use it to spot patterns across all students.</p>${counts.length ? counts.map(row => `<div class="mini-row"><b>${row.label}</b><span>${row.value} student flag${row.value === 1 ? "" : "s"}</span></div>`).join("") : `<div class="empty">No grammar issues recorded yet.</div>`}`;
}
function recentHistoryPanel() {
  const rows = state.classes.filter(c => c.status === "Completed").sort((a,b) => b.date.localeCompare(a.date) || b.start.localeCompare(a.start)).slice(0, 5);
  return `<h3>Recent Teaching History</h3>${rows.length ? rows.map(c => `<div class="mini-row"><b>${studentName(c.studentId)}</b><span>${formatDate(c.date)} · ${c.lesson || "Untitled class"}</span></div>`).join("") : `<div class="empty">No completed classes yet.</div>`}`;
}
function recentVocabularyPanel() {
  const rows = state.vocabulary.slice(0, 6);
  return `<h3>Recent Vocabulary</h3>${rows.length ? rows.map(v => `<div class="mini-row"><b>${v.word}</b><span>${v.topic || v.cefr || "No topic"}</span></div>`).join("") : `<div class="empty">No vocabulary added yet.</div>`}`;
}
function countItems(items) {
  const map = {};
  items.filter(Boolean).forEach(item => map[item] = (map[item] || 0) + 1);
  return Object.entries(map).map(([label, value]) => ({ label, value })).sort((a,b) => b.value - a.value || a.label.localeCompare(b.label));
}
function topByCount(items) {
  return countItems(items)[0]?.label || "";
}

function studentsView() {
  const s = state.students.find(x => x.id === selectedStudent) || state.students[0];
  if (!s) return `<div class="page-head"><div><h2>Students</h2><p>Add students manually as you begin teaching them.</p></div><button class="primary-action" data-action="add-student">Add Student</button></div><div class="empty">No students yet.</div>`;
  return `
    <div class="page-head"><div><h2>Students</h2><p>Profiles connect platforms, history, weaknesses, progress, and next lesson ideas.</p></div><button class="primary-action" data-action="add-student">Add Student</button></div>
    <div class="split">
      <aside class="list">${state.students.map(st => `<button class="list-button ${st.id === s.id ? "active" : ""}" data-student="${st.id}"><b>${st.name}</b><br><span class="muted small">${st.platform} · ${st.cefr} · ${st.goal}</span></button>`).join("")}</aside>
      <section class="grid">
        <div class="panel">
          <div class="page-head"><div><h2>${s.name}</h2><p>${s.level} · ${s.cefr} · ${s.platform} · ${s.timezone}</p></div><div class="row-actions"><button class="secondary-action" data-log-student="${s.id}">Log Class</button><button class="ghost-action" data-edit-student="${s.id}">Edit</button><button class="danger-action" data-delete-student="${s.id}">Delete</button></div></div>
          <div class="grid two">
            <div><h3>Profile</h3><p><b>Goal:</b> ${s.goal}</p><p><b>Occupation:</b> ${s.occupation}</p><p><b>Preferred topics:</b> ${s.topics}</p><p><b>Notes:</b> ${s.notes}</p></div>
            <div><h3>Weaknesses</h3><p>${s.weaknesses}</p><h3>Grammar Focus</h3>${s.grammar.map(g => `<span class="tag">${g.topic} — ${g.status}</span>`).join("")}</div>
          </div>
        </div>
        <div class="grid two">
          <div class="panel"><div class="section-head"><h3>Teaching History</h3><button class="secondary-action" data-log-student="${s.id}">Add History</button></div>${historyFor(s.id)}</div>
          <div class="panel"><div class="section-head"><h3>Progress</h3><button class="secondary-action" data-edit-progress="${s.id}">Edit Progress</button></div>${progressFor(s.progress)}</div>
        </div>
      </section>
    </div>`;
}
function historyFor(studentId) {
  const list = state.classes.filter(c => c.studentId === studentId).sort((a,b) => b.date.localeCompare(a.date) || b.start.localeCompare(a.start));
  if (!list.length) return `<div class="empty">No teaching history yet.</div>`;
  return list.map(c => `<div class="card"><div class="section-head"><b>${formatDate(c.date)} · ${c.lesson || "Untitled class"}</b><div class="row-actions"><button class="ghost-action" data-edit-class="${c.id}">Edit</button><button class="danger-action" data-delete-class="${c.id}">Delete</button></div></div><p class="small">${c.notes || c.topic || ""}</p><span class="tag">${c.grammar || "No grammar focus"}</span><span class="tag">${c.status}</span><p class="small"><b>Next:</b> ${c.followup || "Choose after class."}</p></div>`).join("");
}
function progressFor(progress) {
  return Object.entries(progress).map(([k,v]) => `<div class="progress-row"><span>${k}</span><div class="bar"><span style="width:${v}%"></span></div><b>${v}</b></div>`).join("");
}

function classesView() {
  return `<div class="page-head"><div><h2>Classes</h2><p>Manual class logging for platforms, private students, and corporate clients.</p></div><button class="primary-action" data-action="quick-log">Log Class</button></div>
  <section class="panel">${classTable(state.classes.slice().sort((a,b) => b.date.localeCompare(a.date) || b.start.localeCompare(a.start)))}</section>`;
}

function lessonsView() {
  return `<div class="page-head"><div><h2>Lesson Library</h2><p>Manual lesson archive. Add lessons from your company materials and edit them as needed.</p></div><div class="row-actions"><button class="ghost-action" data-action="clear-lessons">Clear Lessons</button><button class="primary-action" data-action="create-lesson">Add Lesson</button></div></div>
  <section class="panel">${lessonsTable()}</section>`;
}
function lessonsTable() {
  if (!state.lessons.length) return `<div class="empty">No lessons yet. Add your company-provided lesson materials here.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Lesson</th><th>Level</th><th>Category</th><th>Grammar</th><th>Duration</th><th>Actions</th></tr></thead><tbody>${state.lessons.map(l => `<tr><td><b>${l.title}</b><br><span class="muted small">${l.description || ""}</span></td><td>${l.level || ""}</td><td>${l.category || ""}</td><td>${l.grammar || ""}</td><td>${l.duration || ""} min</td><td><div class="row-actions"><button class="secondary-action" data-open-lesson="${l.id}">Open</button><button class="ghost-action" data-edit-lesson="${l.id}">Edit</button><button class="danger-action" data-delete-lesson="${l.id}">Delete</button></div></td></tr>`).join("")}</tbody></table></div>`;
}

function grammarView() {
  const g = state.grammar.find(x => x.id === selectedGrammar) || state.grammar[0];
  const cats = [...new Set(state.grammar.map(x => x.category))];
  return `<div class="page-head"><div><h2>Grammar Matrix</h2><p>An interactive teaching reference with formulas, mistakes, contrasts, tips, and explanations at three depths.</p></div></div>
  <section class="panel">
    <div class="section-tabs">${cats.map(c => `<button class="${c === g.category ? "active" : ""}" data-grammar-cat="${c}">${c}</button>`).join("")}</div>
    <div class="grammar-tree">${state.grammar.filter(x => x.category === g.category).map(x => `<button class="grammar-node ${x.id === g.id ? "active" : ""}" data-grammar="${x.id}"><h4>${x.name}</h4><p class="small muted">${x.what || x.use}</p><p class="grammar-example"><b>Examples:</b> ${(x.examples || [x.example]).slice(0, 2).join(" / ")}</p><p class="grammar-mistake"><b>Watch:</b> ${x.mistake}</p></button>`).join("")}</div>
  </section>
  <section class="panel" style="margin-top:16px">
    <h3>Tense Matrix</h3>
    <div class="compact-grid">${grammarRows.map(row => `<button class="list-button" data-grammar-name="${row[0]}"><b>${row[0]}</b><br><span class="small muted">${row[1]}</span></button>`).join("")}</div>
  </section>
  <section class="panel" style="margin-top:16px">
    <div class="page-head"><div><h2>${g.name}</h2><p>${g.what}</p></div></div>
    <h3>Formula</h3><div class="formula">${g.formula}</div>
    <div class="grid two" style="margin-top:16px"><div><h3>Examples and Scenarios</h3><ul class="example-list">${(g.examples || [g.example]).map(example => `<li>${example}</li>`).join("")}</ul><h3>When To Use It</h3><p>${g.use}</p><h3>Negative</h3><p>${g.negative}</p></div><div><h3>Questions</h3><p>${g.questions}</p><h3>Common Mistake</h3><p>${g.mistake}</p><h3>Contrast</h3><p>${g.contrast}</p></div></div>
    <h3>Teaching Tip</h3><p>${g.tip}</p>
  </section>
  <section class="panel" style="margin-top:16px">
    <h3>Explain It 3 Ways</h3>
    <div class="explain-toggle"><button class="${grammarMode === "technical" ? "active" : ""}" data-mode="technical">Technical</button><button class="${grammarMode === "teacher" ? "active" : ""}" data-mode="teacher">Teacher</button><button class="${grammarMode === "student" ? "active" : ""}" data-mode="student">Student</button></div>
    <p class="card">${g.explain[grammarMode]}</p>
    <h3>Practice Questions</h3>${g.practice.map(p => `<span class="tag">${p}</span>`).join("")}
  </section>`;
}

function vocabularyView() {
  return `<div class="page-head"><div><h2>Vocabulary</h2><p>Manual vocabulary bank for words taught or explained during class.</p></div><button class="primary-action" data-action="add-vocab">Add Word</button></div><section class="panel">${vocabularyTable()}</section>`;
}
function idiomsView() {
  return `<div class="page-head"><div><h2>Idioms</h2><p>Manual idiom bank for expressions taught in class.</p></div><button class="primary-action" data-action="add-idiom">Add Idiom</button></div><section class="panel">${idiomsTable()}</section>`;
}
function notesView() {
  syncScratchpadNote();
  const notes = state.notes.slice().sort((a,b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  return `<div class="page-head"><div><h2>Notes</h2><p>All saved teaching notes and dashboard reminders live here. Dashboard Notes appear as "Dashboard Scratchpad." Notes are stored locally in this browser.</p></div><button class="primary-action" data-action="add-note-entry">Add Note</button></div>
  <section class="panel">${notes.length ? `<div class="notes-list">${notes.map(noteCard).join("")}</div>` : `<div class="empty">No notes yet. Add one here or save from Dashboard Notes.</div>`}</section>`;
}
function noteCard(note) {
  const student = note.studentId ? studentName(note.studentId) : "No student linked";
  const className = note.classId ? (state.classes.find(c => c.id === note.classId)?.lesson || "Linked class") : "No class linked";
  return `<article class="note-card"><div class="section-head"><div><h3>${note.title || "Untitled note"}</h3><p class="panel-note">${student} · ${className} · Updated ${formatDateTime(note.updatedAt)}</p></div><div class="row-actions"><button class="ghost-action" data-edit-note="${note.id}">Edit</button><button class="danger-action" data-delete-note="${note.id}">Delete</button></div></div><p>${escapeHtml(note.body || "").replace(/\n/g, "<br>")}</p></article>`;
}
function vocabularyTable() {
  if (!state.vocabulary.length) return `<div class="empty">No vocabulary yet. Add words from class notes or company lessons.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Word</th><th>Part</th><th>Topic</th><th><span class="help" data-tip="CEFR is a simple level guide: A1-A2 beginner, B1-B2 intermediate, C1-C2 advanced.">CEFR</span></th><th>Example</th><th>Actions</th></tr></thead><tbody>${state.vocabulary.map(v => `<tr><td><b>${v.word}</b><br><span class="muted small">${v.definition || ""}</span></td><td>${v.part || ""}</td><td>${v.topic || ""}</td><td>${v.cefr || ""}</td><td>${v.example || ""}</td><td><div class="row-actions"><button class="ghost-action" data-edit-vocab="${v.id}">Edit</button><button class="danger-action" data-delete-vocab="${v.id}">Delete</button></div></td></tr>`).join("")}</tbody></table></div>`;
}
function idiomsTable() {
  if (!state.idioms.length) return `<div class="empty">No idioms yet. Add idioms as you teach them.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Idiom</th><th>Meaning</th><th>Register</th><th>Difficulty</th><th>Example</th><th>Actions</th></tr></thead><tbody>${state.idioms.map(i => `<tr><td><b>${i.idiom}</b></td><td>${i.meaning || ""}</td><td>${i.register || ""}</td><td>${i.difficulty || ""}</td><td>${i.example || ""}</td><td><div class="row-actions"><button class="ghost-action" data-edit-idiom="${i.id}">Edit</button><button class="danger-action" data-delete-idiom="${i.id}">Delete</button></div></td></tr>`).join("")}</tbody></table></div>`;
}

function toolsView() {
  return `<div class="page-head"><div><h2>Teaching Tools</h2><p>Manual classroom helpers with clear prompts and hover guidance.</p></div></div>
  <div class="grid two">
    <section class="panel"><h3>Manual Question Builder <span class="help" data-tip="Use this as a workspace. Type your own questions from class or company material, then keep them on screen while teaching.">?</span></h3><div class="form-grid"><div class="field"><label>Topic</label><input id="toolTopic" placeholder="job interviews"></div><div class="field"><label>Level <span class="help" data-tip="A1-A2: simple everyday English. B1-B2: independent conversation. C1-C2: advanced, nuanced communication.">?</span></label><select id="toolLevel"><option>A1</option><option>A2</option><option selected>B1</option><option>B2</option><option>C1</option><option>C2</option></select></div><div class="field wide"><label>Your Questions</label><textarea id="manualQuestions" placeholder="1. Tell me about your last interview.&#10;2. What question is difficult for you?"></textarea></div></div><button class="primary-action" style="margin-top:12px" data-tool="questions">Preview</button><div id="toolOutput" class="card" style="margin-top:12px">Type questions manually, choose a level for your own reference, then preview them here.</div></section>
    <section class="panel"><h3>Grammar Comparison Tool <span class="help" data-tip="This helps you plan how to explain the difference between two grammar points. It does not decide what to teach; it gives you a classroom contrast frame.">?</span></h3><p class="muted">Choose two grammar targets and the type of comparison you need.</p><div class="form-grid"><div class="field"><label>Target A</label><select id="compareA">${state.grammar.slice(0,30).map(g => `<option>${g.name}</option>`)}</select></div><div class="field"><label>Target B</label><select id="compareB"><option>Simple Past</option>${state.grammar.slice(0,30).map(g => `<option>${g.name}</option>`)}</select></div><div class="field wide"><label>Comparison Option</label><select id="compareOption"><option>Simple classroom explanation</option><option>Common mistakes</option><option>Example sentences</option><option>Practice prompt</option></select></div></div><button class="secondary-action" style="margin-top:12px" data-tool="compare">Preview Comparison</button><div id="compareOutput" class="card" style="margin-top:12px">Hover over the question mark to see what this tool can and cannot do.</div></section>
    <section class="panel"><h3>Common Mistakes</h3>${state.mistakes.map(m => `<div class="card"><b class="muted">Incorrect:</b> ${m.incorrect}<br><b>Correct:</b> ${m.correct}<p class="small">${m.teacher}</p></div>`).join("")}</section>
    <section class="panel"><h3>Pronunciation Reference</h3>${state.pronunciation.map(p => `<div class="card"><b>${p.title}</b><p>${p.description}</p><p class="small muted">${p.tip}</p></div>`).join("")}</section>
  </div>`;
}

function reportsView() {
  const byPlatform = groupSum(state.classes, "platform");
  const byStudent = state.students.map(s => ({ label: s.name, value: state.classes.filter(c => c.studentId === s.id).reduce((n,c) => n + c.duration, 0) / 60 }));
  return `<div class="page-head"><div><h2>Reports</h2><p>Simple teaching totals without overwhelming analytics.</p></div></div>
  <div class="grid three">${metric("Total Classes", state.classes.length)}${metric("Completed Hours", hours(completedClasses()))}${metric("Total Students", state.students.length)}</div>
  <div class="grid two" style="margin-top:16px"><section class="panel"><h3>Hours by Platform</h3>${barList(byPlatform)}</section><section class="panel"><h3>Hours by Student</h3>${barList(byStudent)}</section></div>`;
}
function groupSum(rows, key) {
  const map = {};
  rows.forEach(r => map[r[key]] = (map[r[key]] || 0) + r.duration / 60);
  return Object.entries(map).map(([label, value]) => ({ label, value }));
}
function barList(rows) {
  const max = Math.max(...rows.map(r => r.value), 1);
  return rows.map(r => `<div class="progress-row"><span>${r.label}</span><div class="bar"><span style="width:${Math.round((r.value/max)*100)}%"></span></div><b>${r.value.toFixed(1)}</b></div>`).join("");
}

function settingsView() {
  return `<div class="page-head"><div><h2>Settings</h2><p>Platform-agnostic configuration and local data controls.</p></div></div>
  <div class="grid two"><section class="panel"><h3>Platforms</h3>${state.platforms.map(p => `<span class="tag">${p}</span>`).join("")}<div class="field" style="margin-top:12px"><label>Add Platform</label><input id="newPlatform" placeholder="Platform / Company"></div><button class="secondary-action" style="margin-top:10px" data-action="add-platform">Add Platform</button></section><section class="panel"><h3>Local Storage</h3><p>Your prototype data is stored in this browser only. Export/import lets you move your students, classes, lessons, notes, and custom entries to another computer.</p><div class="quick-actions"><button class="secondary-action" data-action="export-data">Export Data</button><button class="ghost-action" data-action="import-data">Import Data</button><button class="ghost-action" data-action="upgrade-grammar">Refresh Grammar Content</button><button class="danger-action" data-action="reset-data">Reset Seed Data</button></div><input id="importDataFile" type="file" accept="application/json" class="hidden"></section>
  <section class="panel dashboard-wide"><h3>Supabase Cloud Sync</h3><p class="panel-note">Use your Supabase project URL and public anon key. Do not use the service-role key in this browser app.</p><div class="form-grid">${field("supabaseUrl","Supabase Project URL","url", state.supabase?.url || "", "supabaseUrl")}${field("supabaseAnonKey","Anon Public Key","text", state.supabase?.anonKey || "", "supabaseAnonKey")}${field("supabaseSyncId","Sync ID","text", state.supabase?.syncId || "default", "supabaseSyncId")}</div><div class="quick-actions" style="margin-top:12px"><button class="secondary-action" data-action="save-supabase">Save Supabase Settings</button><button class="ghost-action" data-action="push-supabase">Push Data to Supabase</button><button class="ghost-action" data-action="pull-supabase">Pull Data from Supabase</button></div><p class="panel-note" id="supabaseStatus">Run the SQL file in your Supabase SQL Editor first: <b>supabase-setup.sql</b>.</p></section></div>`;
}

function bindView() {
  document.querySelectorAll("[data-jump]").forEach(b => b.addEventListener("click", () => { currentView = b.dataset.jump; render(); }));
  document.querySelectorAll("[data-action]").forEach(b => b.addEventListener("click", () => handleAction(b.dataset.action)));
  document.querySelectorAll("[data-student]").forEach(b => b.addEventListener("click", () => { selectedStudent = b.dataset.student; render(); }));
  document.querySelectorAll("[data-log-student]").forEach(b => b.addEventListener("click", () => openLogModal(b.dataset.logStudent)));
  document.querySelectorAll("[data-complete]").forEach(b => b.addEventListener("click", () => openCompleteModal(b.dataset.complete)));
  document.querySelectorAll("[data-edit-class]").forEach(b => b.addEventListener("click", () => openClassEdit(b.dataset.editClass)));
  document.querySelectorAll("[data-delete-class]").forEach(b => b.addEventListener("click", () => deleteClass(b.dataset.deleteClass)));
  document.querySelectorAll("[data-edit-student]").forEach(b => b.addEventListener("click", () => openStudentModal(b.dataset.editStudent)));
  document.querySelectorAll("[data-delete-student]").forEach(b => b.addEventListener("click", () => deleteStudent(b.dataset.deleteStudent)));
  document.querySelectorAll("[data-edit-progress]").forEach(b => b.addEventListener("click", () => openProgressModal(b.dataset.editProgress)));
  document.querySelectorAll("[data-open-lesson]").forEach(b => b.addEventListener("click", () => openLesson(b.dataset.openLesson)));
  document.querySelectorAll("[data-edit-lesson]").forEach(b => b.addEventListener("click", () => openLessonModal(state.lessons.find(l => l.id === b.dataset.editLesson))));
  document.querySelectorAll("[data-delete-lesson]").forEach(b => b.addEventListener("click", () => deleteLesson(b.dataset.deleteLesson)));
  document.querySelectorAll("[data-edit-vocab]").forEach(b => b.addEventListener("click", () => openVocabModal(b.dataset.editVocab)));
  document.querySelectorAll("[data-delete-vocab]").forEach(b => b.addEventListener("click", () => deleteItem("vocabulary", b.dataset.deleteVocab)));
  document.querySelectorAll("[data-edit-idiom]").forEach(b => b.addEventListener("click", () => openIdiomModal(b.dataset.editIdiom)));
  document.querySelectorAll("[data-delete-idiom]").forEach(b => b.addEventListener("click", () => deleteItem("idioms", b.dataset.deleteIdiom)));
  document.querySelectorAll("[data-edit-note]").forEach(b => b.addEventListener("click", () => openNoteModal(b.dataset.editNote)));
  document.querySelectorAll("[data-delete-note]").forEach(b => b.addEventListener("click", () => deleteNote(b.dataset.deleteNote)));
  document.querySelectorAll("[data-grammar]").forEach(b => b.addEventListener("click", () => { selectedGrammar = b.dataset.grammar; render(); }));
  document.querySelectorAll("[data-grammar-name]").forEach(b => b.addEventListener("click", () => { const found = state.grammar.find(g => g.name === b.dataset.grammarName); if (found) selectedGrammar = found.id; render(); }));
  document.querySelectorAll("[data-grammar-cat]").forEach(b => b.addEventListener("click", () => { const found = state.grammar.find(g => g.category === b.dataset.grammarCat); if (found) selectedGrammar = found.id; render(); }));
  document.querySelectorAll("[data-mode]").forEach(b => b.addEventListener("click", () => { grammarMode = b.dataset.mode; render(); }));
  document.querySelectorAll("[data-tool]").forEach(b => b.addEventListener("click", () => runTool(b.dataset.tool)));
  const scratchpad = $("scratchpad");
  if (scratchpad) {
    scratchpad.addEventListener("input", () => saveScratchpad(false));
    scratchpad.addEventListener("blur", () => saveScratchpad(true));
  }
  const importInput = $("importDataFile");
  if (importInput) importInput.addEventListener("change", importData);
}

function handleAction(action) {
  if (action === "quick-log") openLogModal();
  if (action === "add-student") openStudentModal();
  if (action === "create-lesson") openLessonModal();
  if (action === "add-vocab") openVocabModal();
  if (action === "add-idiom") openIdiomModal();
  if (action === "add-note-entry") openNoteModal();
  if (action === "clear-lessons" && confirm("Clear all lessons from the library?")) {
    state.lessons = [];
    saveState(); render();
  }
  if (action === "add-note") alert("Quick note captured in the class log workflow for this prototype.");
  if (action === "save-scratchpad") saveScratchpad(true);
  if (action === "add-platform") {
    const value = $("newPlatform").value.trim();
    if (value && !state.platforms.includes(value)) state.platforms.push(value);
    saveState(); render();
  }
  if (action === "upgrade-grammar") {
    upgradeGrammarContent(state);
    saveState(); render();
    alert("Grammar content refreshed.");
  }
  if (action === "export-data") exportData();
  if (action === "import-data") $("importDataFile")?.click();
  if (action === "save-supabase") saveSupabaseSettings();
  if (action === "push-supabase") pushSupabase();
  if (action === "pull-supabase") pullSupabase();
  if (action === "reset-data" && confirm("Reset local prototype data?")) {
    localStorage.removeItem("eslTeacherOsState");
    state = loadState();
    render();
  }
}
function saveScratchpad(showConfirmation = false) {
  const scratchpad = $("scratchpad");
  if (!scratchpad) return;
  state.scratchpad = scratchpad.value;
  const now = new Date().toISOString();
  let note = latestDashboardNote();
  if (!note) {
    note = { id: `n${Date.now()}`, title: "Dashboard Scratchpad", body: "", createdAt: now, updatedAt: now, source: "dashboard-scratchpad", studentId: "", classId: "" };
    state.notes.unshift(note);
  }
  note.body = scratchpad.value;
  note.updatedAt = now;
  saveState();
  const status = $("scratchpadStatus");
  if (status) {
    status.textContent = showConfirmation ? "Saved to Notes just now" : "Autosaved to Notes";
  }
}
function exportData() {
  const payload = JSON.stringify({ exportedAt: new Date().toISOString(), app: "ESL Teacher OS", state }, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `esl-teacher-os-data-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state = normalizeState(parsed.state || parsed);
      saveState();
      currentView = "Dashboard";
      selectedStudent = state.students?.[0]?.id;
      selectedGrammar = state.grammar?.find(g => g.name === "Present Perfect")?.id || state.grammar?.[0]?.id || "";
      render();
      alert("Data imported successfully.");
    } catch (error) {
      alert("Could not import that file. Please choose a valid ESL Teacher OS JSON export.");
    }
  };
  reader.readAsText(file);
}
function saveSupabaseSettings() {
  state.supabase = {
    url: normalizeSupabaseUrl($("supabaseUrl")?.value || ""),
    anonKey: $("supabaseAnonKey")?.value.trim() || "",
    syncId: $("supabaseSyncId")?.value.trim() || "default"
  };
  saveState();
  setSupabaseStatus("Supabase settings saved locally. You can now push or pull data.");
}
function supabaseConfig() {
  const config = state.supabase || {};
  if (!config.url || !config.anonKey || !config.syncId) throw new Error("Missing Supabase URL, anon key, or sync ID.");
  return config;
}
function normalizeSupabaseUrl(value) {
  const raw = value.trim();
  if (!raw) return "";
  try {
    const parsed = new URL(raw);
    parsed.pathname = parsed.pathname.replace(/\/rest\/v1\/?$/i, "").replace(/\/+$/, "");
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return raw.replace(/\/rest\/v1\/?$/i, "").replace(/\/+$/, "");
  }
}
function supabaseTableUrl(config) {
  return `${config.url}/rest/v1/esl_teacher_os_states`;
}
function appStateForCloud() {
  const copy = structuredClone(state);
  return copy;
}
async function pushSupabase() {
  try {
    saveSupabaseSettings();
    const config = supabaseConfig();
    const response = await fetch(`${supabaseTableUrl(config)}?on_conflict=id`, {
      method: "POST",
      headers: supabaseHeaders(config, { prefer: "resolution=merge-duplicates,return=minimal" }),
      body: JSON.stringify({ id: config.syncId, state: appStateForCloud(), updated_at: new Date().toISOString() })
    });
    if (!response.ok) throw new Error(await readableSupabaseError(response));
    setSupabaseStatus("Pushed current data to Supabase.");
  } catch (error) {
    setSupabaseStatus(`Push failed: ${readableFetchFailure(error)}`);
  }
}
async function pullSupabase() {
  try {
    saveSupabaseSettings();
    const config = supabaseConfig();
    const response = await fetch(`${supabaseTableUrl(config)}?id=eq.${encodeURIComponent(config.syncId)}&select=state,updated_at`, {
      headers: supabaseHeaders(config)
    });
    if (!response.ok) throw new Error(await readableSupabaseError(response));
    const rows = await response.json();
    if (!rows.length) throw new Error("No cloud data found for this Sync ID.");
    state = normalizeState(rows[0].state);
    state.supabase = config;
    saveState();
    currentView = "Dashboard";
    selectedStudent = state.students?.[0]?.id;
    selectedGrammar = state.grammar?.find(g => g.name === "Present Perfect")?.id || state.grammar?.[0]?.id || "";
    render();
    alert(`Pulled cloud data from Supabase. Last updated: ${formatDateTime(rows[0].updated_at)}`);
  } catch (error) {
    setSupabaseStatus(`Pull failed: ${readableFetchFailure(error)}`);
  }
}
function supabaseHeaders(config, options = {}) {
  const headers = {
    "apikey": config.anonKey,
    "Authorization": `Bearer ${config.anonKey}`,
    "Content-Type": "application/json"
  };
  if (options.prefer) headers.Prefer = options.prefer;
  return headers;
}
async function readableSupabaseError(response) {
  const text = await response.text();
  try {
    const parsed = JSON.parse(text);
    const message = parsed.message || parsed.msg || text;
    const hint = parsed.hint ? ` Hint: ${parsed.hint}` : "";
    return `${response.status} ${message}${hint}`;
  } catch {
    return `${response.status} ${text || response.statusText}`;
  }
}
function setSupabaseStatus(message) {
  const el = $("supabaseStatus");
  if (el) el.textContent = message;
  else alert(message);
}
function readableFetchFailure(error) {
  if (error instanceof TypeError && /fetch/i.test(error.message)) {
    return "Could not reach Supabase. Check that the Project URL is the main .supabase.co URL, the project is not paused, and your internet connection is active.";
  }
  return error.message;
}

function openLogModal(studentId = "", existing = null) {
  modal(`<div class="modal-head"><div><h2>Post-Class Quick Log</h2><p class="muted">Designed to finish in under two minutes.</p></div><button class="close" data-close>×</button></div>
  <form id="logForm" class="form-grid">
    ${field("date","Date","date", existing?.date || DAY)}${field("start","Start Time","time", existing?.start || "09:00")}${field("end","End Time","time", existing?.end || "09:30")}
    <div class="field"><label>Student</label><select name="studentId">${state.students.map(s => `<option value="${s.id}" ${s.id === (existing?.studentId || studentId) ? "selected" : ""}>${s.name}</option>`)}</select></div>
    <div class="field"><label>Platform</label><select name="platform">${state.platforms.map(p => `<option ${p === existing?.platform ? "selected" : ""}>${p}</option>`)}</select></div>
    <div class="field"><label>Class Type</label><select name="type">${["Conversation","Grammar","Business English","Interview Preparation","Pronunciation","Vocabulary","Writing","Reading","Listening","General English"].map(x => `<option ${x === existing?.type ? "selected" : ""}>${x}</option>`)}</select></div>
    <div class="field"><label>Status</label><select name="status">${["Scheduled","In Progress","Completed","Cancelled","No-show","Rescheduled"].map(x => `<option ${x === (existing?.status || "Completed") ? "selected" : ""}>${x}</option>`)}</select></div>
    ${field("lesson","Lesson / Topic","text", existing?.lesson || "")}
    <div class="field"><label>Grammar Issues</label><select name="grammar">${state.grammar.slice(0,40).map(g => `<option ${g.name === existing?.grammar ? "selected" : ""}>${g.name}</option>`)}</select></div>
    ${textarea("notes","What did the student struggle with?", existing?.notes || "")}
    ${textarea("performance","What did the student do well?", existing?.performance || "")}
    ${field("followup","Recommended next topic","text", existing?.followup || "")}
    ${field("homework","Homework","text", existing?.homework || "")}
    <div class="actions wide"><button type="button" class="ghost-action" data-close>Cancel</button><button class="primary-action">Save Class</button></div>
  </form>`);
  $("logForm").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const duration = diffMinutes(data.start, data.end);
    const nextClass = { id: existing?.id || `c${Date.now()}`, ...data, duration, topic: data.lesson, vocabulary: existing?.vocabulary || "", notes: data.notes };
    if (existing) Object.assign(existing, nextClass);
    else state.classes.push(nextClass);
    const st = state.students.find(s => s.id === data.studentId);
    if (st && data.grammar && !st.grammar.some(g => g.topic === data.grammar)) st.grammar.unshift({ topic: data.grammar, status: "Needs Practice" });
    saveState(); closeModal(); currentView = "Classes"; render();
  });
}
function openCompleteModal(classId) {
  const c = state.classes.find(x => x.id === classId);
  if (!c) return;
  openLogModal(c.studentId, c);
  document.querySelector("[name='status']").value = "Completed";
}
function openClassEdit(classId) {
  const c = state.classes.find(x => x.id === classId);
  if (c) openLogModal(c.studentId, c);
}
function deleteClass(classId) {
  if (!confirm("Delete this class or teaching history entry?")) return;
  state.classes = state.classes.filter(c => c.id !== classId);
  saveState(); render();
}
function openStudentModal(studentId = null) {
  const existing = state.students.find(s => s.id === studentId);
  modal(`<div class="modal-head"><div><h2>${existing ? "Edit Student" : "Add Student"}</h2><p class="muted">Create or update a student profile with goals and known weak areas.</p></div><button class="close" data-close>×</button></div>
  <form id="studentForm" class="form-grid">
    ${field("name","Student Name","text", existing?.name || "")}${field("email","Email","email", existing?.email || "")}
    <div class="field"><label>Platform / Company</label><select name="platform">${state.platforms.map(p => `<option ${p === existing?.platform ? "selected" : ""}>${p}</option>`)}</select></div>
    ${field("timezone","Timezone","text", existing?.timezone || "Asia/Manila")}
    <div class="field"><label>English Level</label><select name="level">${["Beginner","Elementary","Pre-Intermediate","Intermediate","Upper-Intermediate","Advanced"].map(x => `<option ${x === existing?.level ? "selected" : ""}>${x}</option>`)}</select></div>
    <div class="field"><label>CEFR <span class="help" data-tip="A1-A2: beginner. B1-B2: independent user. C1-C2: advanced user.">?</span></label><select name="cefr">${["A1","A2","B1","B2","C1","C2"].map(x => `<option ${x === existing?.cefr ? "selected" : ""}>${x}</option>`)}</select></div>
    ${field("occupation","Occupation","text", existing?.occupation || "")}${field("industry","Industry","text", existing?.industry || "")}
    ${field("goal","Learning Goal","text", existing?.goal || "")}
    ${field("topics","Preferred Topics","text", existing?.topics || "")}
    ${textarea("weaknesses","Weaknesses", existing?.weaknesses || "")}
    ${textarea("notes","Notes", existing?.notes || "")}
    <div class="actions wide"><button type="button" class="ghost-action" data-close>Cancel</button><button class="primary-action">Save Student</button></div>
  </form>`);
  $("studentForm").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const id = existing?.id || `s${Date.now()}`;
    const next = { id, ...existing, ...data, age: existing?.age || "Adult", strengths: existing?.strengths || "", grammar: existing?.grammar || [], progress: existing?.progress || defaultProgress() };
    if (existing) Object.assign(existing, next);
    else state.students.push(next);
    selectedStudent = id; saveState(); closeModal(); currentView = "Students"; render();
  });
}
function deleteStudent(studentId) {
  const student = state.students.find(s => s.id === studentId);
  if (!student || !confirm(`Delete ${student.name}? Their class history will also be removed.`)) return;
  state.students = state.students.filter(s => s.id !== studentId);
  state.classes = state.classes.filter(c => c.studentId !== studentId);
  selectedStudent = state.students[0]?.id;
  saveState(); render();
}
function defaultProgress() {
  return { Grammar: 40, Vocabulary: 40, Speaking: 40, Listening: 40, Reading: 40, Writing: 40, Pronunciation: 40, Fluency: 40, Accuracy: 40, Confidence: 40 };
}
function openProgressModal(studentId) {
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;
  student.progress = student.progress || defaultProgress();
  modal(`<div class="modal-head"><div><h2>Edit Progress</h2><p class="muted">Use simple 0-100 progress estimates. These are for your own tracking, not official scores.</p></div><button class="close" data-close>×</button></div>
  <form id="progressForm" class="form-grid">${Object.entries(student.progress).map(([key, value]) => `<div class="field"><label>${key}</label><input type="number" min="0" max="100" name="${key}" value="${value}"></div>`).join("")}
  <div class="actions wide"><button type="button" class="ghost-action" data-close>Cancel</button><button class="primary-action">Save Progress</button></div></form>`);
  $("progressForm").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    student.progress = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, Math.max(0, Math.min(100, Number(v) || 0))]));
    saveState(); closeModal(); render();
  });
}
function openLessonModal(base = {}) {
  const existing = base?.id ? state.lessons.find(l => l.id === base.id) : null;
  base = existing || base || {};
  modal(`<div class="modal-head"><div><h2>${existing ? "Edit Lesson" : "Add Lesson"}</h2><p class="muted">Add lessons from your company materials. Keep only the fields you actually use.</p></div><button class="close" data-close>×</button></div>
  <form id="lessonForm" class="form-grid">
    ${field("title","Title","text", base.title || "")}${field("level","Level","text", base.level || "B1")}
    ${field("category","Category","text", base.category || "Grammar")}${field("duration","Estimated Duration","number", base.duration || 30)}
    ${textarea("description","Description", base.description || "")}${field("grammar","Target Grammar","text", base.grammar || "")}
    ${textarea("vocabulary","Vocabulary", base.vocabulary || "")}${textarea("warmup","Warm-up", base.warmup || "")}
    ${textarea("practice","Practice / Production", base.practice || "")}${textarea("homework","Homework", base.homework || "")}
    <div class="actions wide"><button type="button" class="ghost-action" data-close>Cancel</button><button class="primary-action">Save Lesson</button></div>
  </form>`);
  $("lessonForm").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const next = { id: existing?.id || `l${Date.now()}`, ...base, ...data, tags: [`#${data.level}`, `#${data.category.replace(/\s/g,"")}`] };
    if (existing) Object.assign(existing, next);
    else state.lessons.unshift(next);
    saveState(); closeModal(); currentView = "Lessons"; render();
  });
}
function deleteLesson(id) {
  if (!confirm("Delete this lesson?")) return;
  state.lessons = state.lessons.filter(l => l.id !== id);
  saveState(); render();
}
function openLesson(id) {
  const l = state.lessons.find(x => x.id === id);
  if (!l) return;
  modal(`<div class="modal-head"><div><h2>${l.title}</h2><p class="muted">${l.category} · ${l.level} · ${l.duration} min</p></div><button class="close" data-close>×</button></div><div class="grid two"><div><h3>Objective</h3><p>${l.description}</p><h3>Warm-up</h3><p>${l.warmup}</p><h3>Presentation / Practice</h3><p>${l.practice}</p></div><div><h3>Target Grammar</h3><p>${l.grammar}</p><h3>Vocabulary</h3><p>${l.vocabulary}</p><h3>Homework</h3><p>${l.homework}</p>${l.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div></div>`);
}
function openVocabModal(id = null) {
  const existing = state.vocabulary.find(v => v.id === id);
  modal(`<div class="modal-head"><div><h2>${existing ? "Edit Word" : "Add Word"}</h2><p class="muted">Save vocabulary that was taught, explained, or noticed in class.</p></div><button class="close" data-close>×</button></div>
  <form id="vocabForm" class="form-grid">
    ${field("word","Word","text", existing?.word || "")}
    ${field("part","Part of Speech","text", existing?.part || "")}
    ${field("topic","Topic","text", existing?.topic || "")}
    <div class="field"><label>CEFR <span class="help" data-tip="A1-A2: beginner words. B1-B2: useful independent communication. C1-C2: advanced or specialized words.">?</span></label><select name="cefr">${["A1","A2","B1","B2","C1","C2"].map(x => `<option ${x === existing?.cefr ? "selected" : ""}>${x}</option>`)}</select></div>
    ${textarea("definition","Definition / Class Note", existing?.definition || "")}
    ${textarea("example","Example", existing?.example || "")}
    <div class="actions wide"><button type="button" class="ghost-action" data-close>Cancel</button><button class="primary-action">Save Word</button></div>
  </form>`);
  $("vocabForm").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const next = { id: existing?.id || `v${Date.now()}`, ...existing, ...data };
    if (existing) Object.assign(existing, next);
    else state.vocabulary.unshift(next);
    saveState(); closeModal(); currentView = "Vocabulary"; render();
  });
}
function openIdiomModal(id = null) {
  const existing = state.idioms.find(i => i.id === id);
  modal(`<div class="modal-head"><div><h2>${existing ? "Edit Idiom" : "Add Idiom"}</h2><p class="muted">Save expressions as they come up in class.</p></div><button class="close" data-close>×</button></div>
  <form id="idiomForm" class="form-grid">
    ${field("idiom","Idiom","text", existing?.idiom || "")}
    ${field("register","Register","text", existing?.register || "Neutral")}
    <div class="field"><label>Difficulty</label><select name="difficulty">${["A1","A2","B1","B2","C1","C2"].map(x => `<option ${x === existing?.difficulty ? "selected" : ""}>${x}</option>`)}</select></div>
    ${field("category","Topic","text", existing?.category || "")}
    ${textarea("meaning","Meaning", existing?.meaning || "")}
    ${textarea("example","Example", existing?.example || "")}
    <div class="actions wide"><button type="button" class="ghost-action" data-close>Cancel</button><button class="primary-action">Save Idiom</button></div>
  </form>`);
  $("idiomForm").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const next = { id: existing?.id || `i${Date.now()}`, ...existing, ...data };
    if (existing) Object.assign(existing, next);
    else state.idioms.unshift(next);
    saveState(); closeModal(); currentView = "Idioms"; render();
  });
}
function openNoteModal(id = null) {
  const existing = state.notes.find(n => n.id === id);
  modal(`<div class="modal-head"><div><h2>${existing ? "Edit Note" : "Add Note"}</h2><p class="muted">Save a dashboard reminder, teaching note, or student/class note.</p></div><button class="close" data-close>×</button></div>
  <form id="noteForm" class="form-grid">
    ${field("title","Title","text", existing?.title || "")}
    <div class="field"><label>Student Link</label><select name="studentId"><option value="">No student</option>${state.students.map(s => `<option value="${s.id}" ${s.id === existing?.studentId ? "selected" : ""}>${s.name}</option>`)}</select></div>
    <div class="field wide"><label>Class Link</label><select name="classId"><option value="">No class</option>${state.classes.map(c => `<option value="${c.id}" ${c.id === existing?.classId ? "selected" : ""}>${c.date} · ${studentName(c.studentId)} · ${c.lesson || "Untitled class"}</option>`)}</select></div>
    ${textarea("body","Note", existing?.body || "")}
    <div class="actions wide"><button type="button" class="ghost-action" data-close>Cancel</button><button class="primary-action">Save Note</button></div>
  </form>`);
  $("noteForm").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const now = new Date().toISOString();
    const next = { id: existing?.id || `n${Date.now()}`, title: data.title || "Untitled note", body: data.body || "", studentId: data.studentId || "", classId: data.classId || "", source: existing?.source || "manual", createdAt: existing?.createdAt || now, updatedAt: now };
    if (existing) Object.assign(existing, next);
    else state.notes.unshift(next);
    saveState(); closeModal(); currentView = "Notes"; render();
  });
}
function deleteNote(id) {
  if (!confirm("Delete this note?")) return;
  const removed = state.notes.find(note => note.id === id);
  state.notes = state.notes.filter(note => note.id !== id);
  if (removed?.source === "dashboard-scratchpad") state.scratchpad = "";
  saveState(); render();
}
function deleteItem(collection, id) {
  if (!confirm("Delete this entry?")) return;
  state[collection] = state[collection].filter(item => item.id !== id);
  saveState(); render();
}
function modal(content) {
  $("modal").classList.remove("hidden");
  $("modal").innerHTML = `<div class="modal-card">${content}</div>`;
  document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", closeModal));
}
function closeModal() { $("modal").classList.add("hidden"); $("modal").innerHTML = ""; }
function field(name, label, type, value, id = "") {
  const idAttr = id ? ` id="${id}"` : "";
  return `<div class="field"><label>${label}</label><input${idAttr} name="${name}" type="${type}" value="${escapeHtml(value)}" ${name === "title" || name === "name" ? "required" : ""}></div>`;
}
function textarea(name, label, value = "") { return `<div class="field wide"><label>${label}</label><textarea name="${name}">${escapeHtml(value)}</textarea></div>`; }
function diffMinutes(start, end) {
  const [sh, sm] = start.split(":").map(Number), [eh, em] = end.split(":").map(Number);
  return Math.max(15, (eh * 60 + em) - (sh * 60 + sm));
}

function runTool(tool) {
  if (tool === "questions") {
    const topic = escapeHtml($("toolTopic").value || "Untitled topic");
    const level = $("toolLevel").value;
    const questions = escapeHtml($("manualQuestions").value || "No questions entered yet.").replace(/\n/g, "<br>");
    $("toolOutput").innerHTML = `<b>${level} questions for ${topic}</b><p class="muted small">Manual preview only. Edit the text box whenever your company material changes.</p><p>${questions}</p>`;
  }
  if (tool === "compare") {
    const a = $("compareA").value, b = $("compareB").value;
    const option = $("compareOption").value;
    const messages = {
      "Simple classroom explanation": `Explain ${a} first with one use and one example. Then show how ${b} changes the time, meaning, or sentence pattern.`,
      "Common mistakes": `Watch for students mixing the form of ${a} with the use of ${b}. Ask them to correct one sentence for each target.`,
      "Example sentences": `Write one clear sentence using ${a}, one clear sentence using ${b}, then ask the student what changed.`,
      "Practice prompt": `Give the student a real situation and ask for two answers: one using ${a}, one using ${b}.`
    };
    $("compareOutput").innerHTML = `<b>${a} vs ${b}</b><p><b>${option}:</b> ${messages[option]}</p><p class="muted small">This is a planning aid. You still choose the final explanation and examples.</p>`;
  }
}

function setupSearch() {
  const input = $("globalSearch");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return $("searchResults").classList.add("hidden");
    const rows = searchAll(q).slice(0, 18);
    $("searchResults").innerHTML = rows.length ? rows.map(r => `<div class="result-row"><span class="tag">${r.type}</span><button data-result-type="${r.type}" data-result-id="${r.id}">${r.title}</button><span class="muted small">${r.text}</span></div>`).join("") : `<div class="empty">No matches found.</div>`;
    $("searchResults").classList.remove("hidden");
    document.querySelectorAll("[data-result-type]").forEach(b => b.addEventListener("click", () => openSearchResult(b.dataset.resultType, b.dataset.resultId)));
  });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault(); input.focus();
    }
    if (e.key === "Escape") { $("searchResults").classList.add("hidden"); closeModal(); }
  });
}
function searchAll(q) {
  const rows = [];
  state.students.forEach(s => rows.push({ type: "Students", id: s.id, title: s.name, text: `${s.platform} ${s.level} ${s.goal} ${s.weaknesses}` }));
  state.classes.forEach(c => rows.push({ type: "Classes", id: c.id, title: `${studentName(c.studentId)} · ${c.lesson}`, text: `${c.topic} ${c.grammar} ${c.notes}` }));
  state.lessons.forEach(l => rows.push({ type: "Lessons", id: l.id, title: l.title, text: `${l.description} ${l.grammar} ${l.vocabulary} ${l.tags.join(" ")}` }));
  state.notes.forEach(n => rows.push({ type: "Notes", id: n.id, title: n.title || "Untitled note", text: `${n.body || ""} ${studentName(n.studentId)} ${n.classId || ""}` }));
  state.grammar.forEach(g => rows.push({ type: "Grammar", id: g.id, title: g.name, text: `${g.formula} ${g.use} ${g.mistake} ${g.tip}` }));
  state.vocabulary.forEach(v => rows.push({ type: "Vocabulary", id: v.id, title: v.word, text: `${v.definition} ${v.topic} ${v.collocations}` }));
  state.idioms.forEach(i => rows.push({ type: "Idioms", id: i.id, title: i.idiom, text: `${i.meaning} ${i.category}` }));
  state.collocations.forEach(c => rows.push({ type: "Collocations", id: c.id, title: c.expression, text: `${c.meaning} ${c.example}` }));
  return rows.filter(r => `${r.title} ${r.text}`.toLowerCase().includes(q));
}
function openSearchResult(type, id) {
  $("searchResults").classList.add("hidden");
  $("globalSearch").value = "";
  if (type === "Students") { selectedStudent = id; currentView = "Students"; render(); return; }
  if (type === "Grammar") { selectedGrammar = id; currentView = "Grammar"; render(); return; }
  if (type === "Lessons") { currentView = "Lessons"; render(); openLesson(id); return; }
  if (type === "Notes") { currentView = "Notes"; render(); return; }
  currentView = navItems.includes(type) ? type : currentView;
  render();
}

function vocabDefinition(w) { return `A practical ${w} term useful for ESL lessons and workplace communication.`; }
function collocationFor(w) { return `${w} plan, ${w} meeting, ${w} example`; }
function idiomMeaning(x) { return `To ${x} means to communicate a common idea in a natural idiomatic way.`; }
function phrasalMeaning(x) { return `A common phrasal verb used in everyday or workplace English.`; }
function formatDate(date) { return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, { month: "long", day: "numeric" }); }
function formatDateTime(value) {
  if (!value) return "never";
  return new Date(value).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function escapeHtml(value = "") { return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch])); }

$("menuToggle").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
$("modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
setupSearch();
render();
