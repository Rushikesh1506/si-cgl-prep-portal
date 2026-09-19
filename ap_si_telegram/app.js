/* CGL English Coach — fresh engine: roadmap + guided lessons + practice + tests + sectional mock. */
"use strict";
const LESSONS = Object.assign({}, LESSONS_A, LESSONS_B);
const ORDER = ["eng_sva","eng_tenses","eng_articles","eng_prepositions","eng_pronouns","eng_modifiers","eng_voice","eng_narration","eng_vocab","eng_ows","eng_idioms","eng_error","eng_improve","eng_cloze_rc","eng_jumble"];
const PHASES = [
  { name: "Phase 1 · Grammar tools", ids: ["eng_sva","eng_tenses","eng_articles","eng_prepositions","eng_pronouns","eng_modifiers"] },
  { name: "Phase 2 · Voice & narration", ids: ["eng_voice","eng_narration"] },
  { name: "Phase 3 · Vocabulary", ids: ["eng_vocab","eng_ows","eng_idioms"] },
  { name: "Phase 4 · Passage, jumbles & exam skills", ids: ["eng_error","eng_improve","eng_cloze_rc","eng_jumble"] },
];
const BANK = {};
englishData.forEach(t => { BANK[t.id] = (t.questions || []).slice(); });
PYQ.forEach(p => { (BANK[p.topic] = BANK[p.topic] || []).push(p); });
const PSGMAP = {};
PASSAGES.forEach(p => { PSGMAP[p.id] = p; });

/* ---------- store ---------- */
const store = {
  get best() { try { return JSON.parse(localStorage.getItem("cgle_best") || "{}"); } catch (e) { return {}; } },
  set best(v) { localStorage.setItem("cgle_best", JSON.stringify(v)); },
  get last() { try { return JSON.parse(localStorage.getItem("cgle_last") || "{}"); } catch (e) { return {}; } },
  set last(v) { localStorage.setItem("cgle_last", JSON.stringify(v)); },
  get done() { try { return JSON.parse(localStorage.getItem("cgle_done") || "[]"); } catch (e) { return []; } },
  set done(v) { localStorage.setItem("cgle_done", JSON.stringify(v)); },
};
function tierOf(key) {
  const b = store.best[key];
  if (!b || !b.t) return "";
  const p = b.s / b.t;
  if (p >= 0.85) return "g";
  if (p >= 0.6) return "y";
  return "r";
}

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
function shuffle(a) { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = x[i]; x[i] = x[j]; x[j] = t; } return x; }
function fmtT(ms) { const s = Math.floor(ms / 1000); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
function topicQs(id) {
  let list = (BANK[id] || []).slice();
  if (id === "eng_cloze_rc") {
    PASSAGES.forEach(p => p.blanks.forEach(b => list.push(Object.assign({ psg: p.id }, b))));
  }
  return list;
}
function qCount(id) { return topicQs(id).length; }
function explOf(q) {
  const parts = [];
  if (q.explanation) parts.push(q.explanation);
  if (q.rule) parts.push("<b>Rule:</b> " + q.rule);
  if (q.elim) parts.push("<b>Elimination:</b> " + q.elim);
  if (q.trap) parts.push("<b>Trap:</b> " + q.trap);
  return parts.join("<br><br>");
}
function badge(q) {
  const tags = [q.level, q.trapcat].filter(Boolean).join(" • ");
  const src = q.src ? `<span class="src">PYQ · ${q.src}</span>` : ((q.level || q.src === undefined) && q.level ? `<span class="src pat">SSC-pattern</span>` : "");
  return (src || tags) ? `<div style="margin-bottom:6px">${src}<span class="lvl">${tags}</span></div>` : "";
}
function catTopic(cat) {
  const c = cat || "";
  const M = [
    [/Intervening|Each\/every|Either\/neither|As well as|Quantit|One of|Collective|number|Inverted|SVA/, "eng_sva"],
    [/Since|Sequence|Time markers|Tense filler/, "eng_tenses"],
    [/A\/an|The for|Zero article/, "eng_articles"],
    [/To-pairs|Of-pairs|Between|From-pairs|Fixed pairs|Place\/movement|Pairs in errors/, "eng_prepositions"],
    [/Case|Reflexive|Adj\/adv|Less\/fewer|Elder|Its\/it/, "eng_pronouns"],
    [/Degree|Pairs$|Modals|Conditionals|Question tags|Redundancy/, "eng_modifiers"],
    [/Tense match|Being\/been|Negatives|Imperatives|Questions|Modals/, "eng_voice"],
    [/Backshift|Reported|Commands|Connectors/, "eng_narration"],
    [/Synonyms|Antonyms|Confused/, "eng_vocab"],
    [/OWS|Spelling/, "eng_ows"],
    [/Idiom/, "eng_idioms"],
    [/errors|Parallelism|Modifiers/, "eng_error"],
    [/Collocation|Double filler|Homonyms/, "eng_improve"],
    [/Cloze|RC /, "eng_cloze_rc"],
    [/order|Order/, "eng_jumble"],
  ];
  for (const [re, id] of M) if (re.test(c)) return id;
  return "eng_error";
}
const ADVICE = {
  eng_sva: "Bracket the subject, ignore the noise. Pairs match the NEARER subject.",
  eng_tenses: "Circle the time marker first. Two pasts → the earlier one gets had.",
  eng_articles: "Ask specific-or-not, and say the word aloud for a/an.",
  eng_prepositions: "Pairs beat logic: prefer/junior/married + to, good + at, fond + of.",
  eng_pronouns: "After prepositions use me/him/them. Linking verbs take adjectives.",
  eng_modifiers: "No-sooner→than, hardly→when, unless forbids not, imaginary-if uses were.",
  eng_voice: "Freeze the tense. Then find being/been/be.",
  eng_narration: "Connector first (that/if/wh-word/to), then backshift, no inversion.",
  eng_vocab: "Feel the charge (+/−) first; in antonyms, strike same-meaning options first.",
  eng_ows: "Match the hook (fear/kill/all/oath). Spelling: check doubles and ie/ei.",
  eng_idioms: "Think picture-story, kill literal options, confirm with the sentence mood.",
  eng_error: "Run the 4-pass scan in order; name the topic before fixing.",
  eng_improve: "Kill redundancy, prefer formal register, solve the sure blank first.",
  eng_cloze_rc: "Read the whole passage first; circle contrasts; logic judges, grammar filters.",
  eng_jumble: "Find one certain link (pronoun/however/chronology) and kill two options.",
};

/* ---------- roadmap ---------- */
function renderRoad(filter) {
  filter = (filter || "").toLowerCase();
  const nav = $("#roadNav");
  nav.innerHTML = "";
  let mastered = 0;
  PHASES.forEach(ph => {
    const items = ph.ids.filter(id => (LESSONS[id].title + " " + id).toLowerCase().includes(filter));
    if (!items.length) return;
    const h = document.createElement("div");
    h.className = "phase";
    h.textContent = ph.name;
    nav.appendChild(h);
    items.forEach(id => {
      const L = LESSONS[id];
      const t = tierOf(id);
      if (t === "g") mastered++;
      const b = document.createElement("button");
      b.className = "tcard" + (state.topic === id ? " active" : "");
      b.dataset.tier = t;
      b.innerHTML = `<span class="dot"></span><span>${L.title}</span><span class="best">${qCount(id)}Q${store.best[id] ? " · " + store.best[id].s + "/" + store.best[id].t : ""}</span>`;
      b.onclick = () => { goLesson(id); closeMobile(); };
      nav.appendChild(b);
    });
  });
  $("#roadPct").textContent = mastered + "/" + ORDER.length;
  $("#roadFill").style.width = (mastered / ORDER.length * 100) + "%";
}

/* ---------- state ---------- */
const state = { topic: null, step: 0, stepDone: false };
let quiz = null;
let timerInt = null;
function stopTimer() { if (timerInt) { clearInterval(timerInt); timerInt = null; } }
function crumb(parts) {
  $("#crumb").innerHTML = parts.map((p, i) => i < parts.length - 1 ? `<b style="cursor:pointer" data-c="${i}">${p}</b><span> › </span>` : `<b>${p}</b>`).join("");
  $("#crumb").querySelectorAll("[data-c]").forEach(el => { el.onclick = () => goHome(); });
}
function closeMobile() { $("#road").classList.remove("open"); $("#scrim").hidden = true; }

/* ---------- HOME ---------- */
function totalQs() { return ORDER.reduce((n, id) => n + qCount(id), 0); }
function realPyqCount() { return PYQ.length; }
function goHome() {
  stopTimer();
  state.topic = null;
  renderRoad($("#roadSearch").value || "");
  const next = ORDER.find(id => !store.best[id]) || ORDER[0];
  const NL = LESSONS[next];
  crumb(["Home"]);
  $("#view").innerHTML = `
    <div class="hero">
      <h2>Beat the examiner, one topic at a time.</h2>
      <p>You know basic English. This coach trains exam recognition: what SSC tests, how options trap you, and how to eliminate your way to 22+/25 — built from real Sept 2024 Tier-1 papers.</p>
      <div class="row">
        <button class="btn btn-mock" id="hStart">▶ Start: ${NL.title}</button>
        <button class="btn" style="background:#fff" id="hMock">📝 Sectional Mock (25Q · 20 min)</button>
        <button class="btn btn-ghost" style="background:transparent;color:#fff;border-color:#666" id="hPaper">📊 How the real paper looks</button>
      </div>
    </div>
    <div class="stat-strip">
      <div class="stat"><b>${ORDER.length}</b><span>topics</span></div>
      <div class="stat"><b>${totalQs()}</b><span>practice questions</span></div>
      <div class="stat"><b>${realPyqCount()}</b><span>real 2024 PYQs</span></div>
      <div class="stat"><b>${PASSAGES.length}</b><span>cloze passages</span></div>
    </div>
    <div class="card"><h3 style="margin-top:0">How coaching works here</h3>
      <p>📖 <b>Lesson</b> — your coach explains how SSC asks this topic, shows the traps, makes you try.<br>
      🕵️ <b>Beat the examiner</b> — inside every lesson: spot the planted trap option.<br>
      ✍️ <b>Practice</b> — instant rule + elimination after every attempt.<br>
      🎯 <b>Topic Test</b> — locked, timed, analysed like the real thing.<br>
      📝 <b>Sectional Mock</b> — 25 questions in the real 2024 pattern when topics turn green.</p></div>`;
  $("#hStart").onclick = () => goLesson(next);
  $("#hMock").onclick = () => goMock();
  $("#hPaper").onclick = () => goAnalysis();
  window.scrollTo({ top: 0 });
}

/* ---------- PAPER ANALYSIS ---------- */
function goAnalysis() {
  stopTimer();
  state.topic = null;
  renderRoad($("#roadSearch").value || "");
  crumb(["Home", "Real-paper analysis"]);
  $("#view").innerHTML = `
  <div class="card"><p class="lvl">Grounded in Sept 2024 Tier-1 official answer keys</p>
  <h2 style="margin-top:0">What the real paper looks like (25 questions)</h2>
  <table class="lt"><tr><th>Area</th><th>Qs</th><th>What actually came</th></tr>
  <tr><td>Cloze passage</td><td>5</td><td>Literary/descriptive (O. Henry style, 9 Sept S1) — vocab + logic blanks</td></tr>
  <tr><td>Error detection</td><td>2–3</td><td>superior-than, ran-quick, team-anticipate, talks-for</td></tr>
  <tr><td>Sentence improvement</td><td>2–3</td><td>owing-primarily (register!), no-better, pitch-to</td></tr>
  <tr><td>Fillers</td><td>2</td><td>tense filler (have-been-renovating), homonym double blank (row/roe)</td></tr>
  <tr><td>Synonyms / Antonyms</td><td>4–5</td><td>ALL inside sentences (bold/bracket/blank); munificent trapped most</td></tr>
  <tr><td>Idioms</td><td>2–3</td><td>ALL in sentences (fish-out-of-water, hit-the-roof…)</td></tr>
  <tr><td>One-word substitution</td><td>2</td><td>incl. literary terms (alliteration!)</td></tr>
  <tr><td>Voice + Narration</td><td>2–3</td><td>BOTH directions; negatives; reported-Q grammar</td></tr>
  <tr><td>Spelling</td><td>1–2</td><td>3 formats: find-misspelt, rectify, fill-blank</td></tr>
  <tr><td>Para jumbles</td><td>2</td><td>sentence order + paragraph coherence, every shift</td></tr>
  <tr><td>Separate RC passage</td><td>0</td><td>None in Tier-1 2024 — the cloze IS your passage section</td></tr></table>
  <div class="coach"><span class="who">🎓 Coach's 6 readings of the paper</span><br>
  <b>1. Grammar is tested through errors</b>, not rules. SVA/tense/article sense decides error + improvement + filler marks.<br>
  <b>2. Vocabulary lives in sentences.</b> Practise synonyms/antonyms/OWS/idioms inside sentences only.<br>
  <b>3. Cloze is the passage section.</b> Literary tone, vocab-heavy — read story first, blanks second.<br>
  <b>4. Spelling has 3 doors.</b> Find-misspelt, rectify-in-sentence, fill-blank — drill all three.<br>
  <b>5. Voice runs both ways</b>, negatives included; narration includes reported-question grammar.<br>
  <b>6. Jumbles are free marks</b> via pronoun/connector/chronology links — never skip them.</div>
  <div class="coach"><span class="who">🎓 The 22+/25 path</span><br>Lock cloze-5 + vocab-10 + voice/narr-3 + jumbles-2 (= 20 safe marks), then let grammar-error/improvement/fillers push you to 22+. That is exactly the roadmap order in the sidebar.</div>
  <div class="navrow"><button class="btn btn-coach" id="aStart">▶ Start Phase 1</button></div></div>`;
  $("#aStart").onclick = () => goLesson("eng_sva");
  window.scrollTo({ top: 0 });
}

/* ---------- LESSON ---------- */
function stepCard(s) {
  if (s.k === "coach") return `<div class="coach"><span class="who">🎓 Coach says</span><h4 style="margin:6px 0">${s.h}</h4><div>${s.html}</div></div>`;
  if (s.k === "rule") return `<div class="rulebox"><h4 style="margin:0 0 6px">✅ ${s.h}</h4><div>${s.html}</div></div>`;
  if (s.k === "table") return `<div class="card" style="margin:12px 0"><h4 style="margin-top:0">📋 ${s.h}</h4><div>${s.html}</div></div>`;
  if (s.k === "trap") return `<div class="trapbox"><span class="who">⚠️ Examiner trap autopsy</span><h4 style="margin:6px 0">${s.h}</h4><div>${s.html}</div></div>`;
  if (s.k === "forget") return `<div class="rulebox"><h4 style="margin:0 0 6px">🧠 ${s.h}</h4><div>${s.html}</div></div>`;
  if (s.k === "card") return `<div class="card" style="background:#1c1917;color:#fff;border-color:#1c1917"><h4 style="margin-top:0;color:#fbbf24">🎯 ${s.h}</h4><div>${s.html}</div></div>`;
  return "";
}
function goLesson(id) {
  stopTimer();
  state.topic = id; state.step = 0;
  renderRoad($("#roadSearch").value || "");
  renderStep();
  window.scrollTo({ top: 0 });
}
function renderStep() {
  const L = LESSONS[state.topic];
  const steps = L.steps;
  const i = Math.min(state.step, steps.length);
  crumb(["Home", L.title, i < steps.length ? `Step ${i + 1}/${steps.length}` : "Done"]);
  if (i >= steps.length) return renderLessonEnd();
  const s = steps[i];
  state.stepDone = !(s.k === "try" || s.k === "pick");
  let html = `<div class="stepbar"><span class="lvl">Step ${i + 1} of ${steps.length}</span><div class="track"><div class="fill" style="width:${(i) / steps.length * 100}%"></div></div></div>`;
  if (i === 0) {
    html += `<div class="card" style="margin-top:0"><p class="lvl">${L.sub}</p><h2 style="margin:4px 0">${L.title}</h2>
    <div class="coach"><span class="who">🎓 Why this topic matters</span><br>${L.hook}</div>
    <div class="paper"><b>📰 Paper proof:</b> ${L.paperNote}</div></div>`;
  }
  if (s.k === "try" || s.k === "pick") {
    const isPick = s.k === "pick";
    const q = isPick ? { q: s.stem, options: s.options, answer: s.answer } : s.q;
    html += `<div class="card"><p class="lvl">${isPick ? "🕵️ Beat the examiner" : "✍️ Try it"} · ${s.h}</p>
      <div class="qcard"><p class="qtext">${q.q}</p>
      <div class="opts">${q.options.map((o, bi) => `<button class="opt" data-i="${bi}"><span class="key">${"ABCD"[bi]}</span><span>${o}</span></button>`).join("")}</div>
      <div class="explain" id="lexp">${isPick ? `<b>Why:</b> ${s.why}` : explOf(q)}</div></div></div>`;
  } else {
    html += stepCard(s);
  }
  html += `<div class="navrow"><button class="btn btn-ghost" id="sBack" ${i === 0 ? "disabled" : ""}>← Back</button>
    <button class="btn btn-primary" id="sNext" ${(s.k === "try" || s.k === "pick") ? "disabled" : ""}>${i === steps.length - 1 ? "Finish lesson →" : "Next →"}</button></div>`;
  $("#view").innerHTML = html;
  $("#sBack").onclick = () => { state.step--; renderStep(); window.scrollTo({ top: 0 }); };
  $("#sNext").onclick = () => { state.step++; renderStep(); window.scrollTo({ top: 0 }); };
  if (s.k === "try" || s.k === "pick") {
    document.querySelectorAll(".opt").forEach(btn => {
      btn.onclick = () => {
        const q = s.k === "pick" ? { answer: s.answer } : s.q;
        const v = +btn.dataset.i;
        document.querySelectorAll(".opt").forEach(b => { b.disabled = true; });
        if (v === q.answer) btn.classList.add("correct");
        else { btn.classList.add("wrong"); document.querySelectorAll(".opt")[q.answer].classList.add("correct"); }
        $("#lexp").classList.add("show");
        $("#sNext").disabled = false;
        state.stepDone = true;
      };
    });
  }
}
function renderLessonEnd() {
  const L = LESSONS[state.topic];
  const n = qCount(state.topic);
  const b = store.best[state.topic];
  crumb(["Home", L.title, "Ready"]);
  $("#view").innerHTML = `
  <div class="result"><h2 style="margin:0">📖 Lesson done: ${L.title}</h2>
    <p class="lvl">2-minute revision: ${L.revision.min2}</p>
    <p class="lvl">Last-minute: ${L.revision.lastmin}</p>
    <p>${b ? `Master Test best: <b>${b.s}/${b.t}</b>` : `${n} practice questions waiting.`}</p>
    <div class="navrow" style="justify-content:center">
      <button class="btn btn-coach" id="ePrac">✍️ Practice (${n})</button>
      <button class="btn btn-primary" id="eTest">🎯 Topic Test (locked)</button>
      <button class="btn btn-ghost" id="eRev">📝 Revise</button>
    </div></div>`;
  $("#ePrac").onclick = () => goPractice(state.topic);
  $("#eTest").onclick = () => goTest(state.topic);
  $("#eRev").onclick = () => goRevise(state.topic);
}

/* ---------- QUESTION RENDER ---------- */
function qBlock(q, idx, total, showPsg) {
  const psg = q.psg ? PSGMAP[q.psg] : null;
  return `${showPsg && psg ? `<div class="passage"><h4>${psg.title}</h4><p>${psg.text}</p></div>` : ""}
  <div class="qcard">${badge(q)}<p class="qtext">Q${idx + 1}/${total}. ${q.q}</p>
  <div class="opts">${q.options.map((o, bi) => `<button class="opt" data-i="${bi}"><span class="key">${"ABCD"[bi]}</span><span>${o}</span></button>`).join("")}</div>
  <div class="explain" id="exp"></div></div>`;
}

/* ---------- PRACTICE ---------- */
function goPractice(id) {
  stopTimer();
  state.topic = id;
  renderRoad($("#roadSearch").value || "");
  const list = topicQs(id);
  quiz = { list, qi: 0, answers: [], mode: "practice", exam: false, submitted: false, label: LESSONS[id].title, storeKey: id, lastPsg: null };
  crumb(["Home", LESSONS[id].title, "Practice"]);
  renderPrac();
  window.scrollTo({ top: 0 });
}
function renderPrac() {
  const L = LESSONS[state.topic];
  if (quiz.qi >= quiz.list.length) {
    const ok = quiz.answers.filter((a, i) => a === quiz.list[i].answer).length;
    $("#view").innerHTML = `<div class="result"><h2 style="margin:0">Practice done</h2><p class="score">${ok}/${quiz.list.length}</p>
      <p>${ok === quiz.list.length ? "Flawless. Take the Topic Test." : "Read the trap lines above via Review, then test yourself."}</p>
      <div class="navrow" style="justify-content:center"><button class="btn btn-ghost" id="pRev">Review</button><button class="btn btn-primary" id="pTest">🎯 Topic Test</button><button class="btn btn-coach" id="pBack">📖 Lesson</button></div></div>`;
    $("#pRev").onclick = () => renderReview(quiz.list, quiz.answers, () => renderPracResult());
    $("#pTest").onclick = () => goTest(state.topic);
    $("#pBack").onclick = () => goLesson(state.topic);
    return;
  }
  renderPracResult();
}
function renderPracResult() {
  const q = quiz.list[quiz.qi];
  const showPsg = q.psg && q.psg !== quiz.lastPsg;
  quiz.lastPsg = q.psg || quiz.lastPsg;
  $("#view").innerHTML = `
  <div class="stepbar"><span class="lvl">${LESSONS[state.topic].title} · Practice ${quiz.qi + 1}/${quiz.list.length}</span><div class="track"><div class="fill" style="width:${quiz.qi / quiz.list.length * 100}%"></div></div></div>
  <div class="dots">${quiz.list.map((qq, i) => `<button class="pdot${i === quiz.qi ? " cur" : ""}${quiz.answers[i] !== undefined ? (quiz.answers[i] === qq.answer ? " ok" : " bad") : ""}" data-i="${i}">${i + 1}</button>`).join("")}</div>
  ${qBlock(q, quiz.qi, quiz.list.length, showPsg)}
  <div class="navrow"><button class="btn btn-ghost" id="qBack" ${quiz.qi === 0 ? "disabled" : ""}>← Back</button>
  <button class="btn btn-primary" id="qNext" disabled>${quiz.qi === quiz.list.length - 1 ? "See result →" : "Next →"}</button></div>`;
  document.querySelectorAll(".pdot").forEach(d => { d.onclick = () => { quiz.qi = +d.dataset.i; renderPracResult(); }; });
  document.querySelectorAll(".opt").forEach(btn => {
    btn.onclick = () => {
      const v = +btn.dataset.i;
      quiz.answers[quiz.qi] = v;
      document.querySelectorAll(".opt").forEach(b => { b.disabled = true; });
      if (v === q.answer) btn.classList.add("correct");
      else { btn.classList.add("wrong"); document.querySelectorAll(".opt")[q.answer].classList.add("correct"); }
      const e = $("#exp");
      e.innerHTML = "<b>💡 Coach explains:</b><br>" + explOf(q);
      e.classList.add("show");
      $("#qNext").disabled = false;
      document.querySelectorAll(".pdot")[quiz.qi].classList.add(v === q.answer ? "ok" : "bad");
    };
  });
  const saved = quiz.answers[quiz.qi];
  if (saved !== undefined) {
    document.querySelectorAll(".opt").forEach(b => { b.disabled = true; });
    if (saved === q.answer) document.querySelectorAll(".opt")[saved].classList.add("correct");
    else { document.querySelectorAll(".opt")[saved].classList.add("wrong"); document.querySelectorAll(".opt")[q.answer].classList.add("correct"); }
    const e = $("#exp");
    e.innerHTML = "<b>💡 Coach explains:</b><br>" + explOf(q);
    e.classList.add("show");
    $("#qNext").disabled = false;
  }
  $("#qBack").onclick = () => { if (quiz.qi > 0) { quiz.qi--; renderPracResult(); } };
  $("#qNext").onclick = () => { quiz.qi++; renderPrac(); };
}

/* ---------- TEST (locked + timer) ---------- */
function goTest(id) {
  stopTimer();
  state.topic = id;
  renderRoad($("#roadSearch").value || "");
  let list;
  if (id === "eng_cloze_rc") {
    const p = PASSAGES[Math.floor(Math.random() * PASSAGES.length)];
    list = p.blanks.map(b => Object.assign({ psg: p.id }, b));
  } else list = (BANK[id] || []).slice();
  if (!list.length) { goPractice(id); return; }
  quiz = { list, qi: 0, answers: [], mode: "test", exam: true, submitted: false, label: LESSONS[id].title + " — Topic Test", storeKey: id, t0: Date.now(), lastPsg: null };
  crumb(["Home", LESSONS[id].title, "Topic Test (locked)"]);
  startCountUp();
  renderExam();
  window.scrollTo({ top: 0 });
}
function startCountUp() {
  timerInt = setInterval(() => { const e = $("#qtimer"); if (e && quiz && quiz.t0) e.textContent = "⏱ " + fmtT(Date.now() - quiz.t0); }, 1000);
}
function renderExam() {
  if (quiz.qi >= quiz.list.length) return finishQuiz();
  const q = quiz.list[quiz.qi];
  const showPsg = q.psg && q.psg !== quiz.lastPsg;
  quiz.lastPsg = q.psg || quiz.lastPsg;
  const att = quiz.answers.filter(a => a !== undefined).length;
  $("#view").innerHTML = `
  <div class="stepbar"><span class="lvl">${quiz.label} · Q${quiz.qi + 1}/${quiz.list.length} · Attempted ${att} · <span id="qtimer">⏱ 00:00</span></span><div class="track"><div class="fill" style="width:${att / quiz.list.length * 100}%"></div></div></div>
  <div class="dots">${quiz.list.map((qq, i) => `<button class="pdot${i === quiz.qi ? " cur" : ""}${quiz.answers[i] !== undefined ? " skip" : ""}" data-i="${i}">${i + 1}</button>`).join("")}</div>
  <div class="qcard"><p class="qtext">Q${quiz.qi + 1}. ${q.q}</p>
  ${showPsg ? `<div class="passage"><h4>${PSGMAP[q.psg].title}</h4><p>${PSGMAP[q.psg].text}</p></div>` : ""}
  <div class="opts">${q.options.map((o, bi) => `<button class="opt${quiz.answers[quiz.qi] === bi ? " selected" : ""}" data-i="${bi}" style="${quiz.answers[quiz.qi] === bi ? "border-color:var(--coach);background:#eff6ff" : ""}"><span class="key">${"ABCD"[bi]}</span><span>${o}</span></button>`).join("")}</div>
  <p class="lvl">🔒 Explanations unlock after you submit.</p></div>
  <div class="navrow"><button class="btn btn-ghost" id="qBack" ${quiz.qi === 0 ? "disabled" : ""}>← Back</button>
  ${quiz.qi === quiz.list.length - 1 ? `<button class="btn btn-primary" id="qSub">Submit Test →</button>` : `<button class="btn btn-primary" id="qNext">Next →</button>`}</div>`;
  document.querySelectorAll(".pdot").forEach(d => { d.onclick = () => { quiz.qi = +d.dataset.i; renderExam(); }; });
  document.querySelectorAll(".opt").forEach(btn => {
    btn.onclick = () => { quiz.answers[quiz.qi] = +btn.dataset.i; renderExam(); };
  });
  $("#qBack").onclick = () => { if (quiz.qi > 0) { quiz.qi--; renderExam(); } };
  const nx = $("#qNext");
  if (nx) nx.onclick = () => { quiz.qi++; renderExam(); };
  const sb = $("#qSub");
  if (sb) sb.onclick = () => { quiz.qi = quiz.list.length; renderExam(); };
}

/* ---------- SECTIONAL MOCK (real 2024 pattern, 25Q, 20 min) ---------- */
const MOCK_QUOTA = [["eng_error", 3, null], ["eng_improve", 3, null], ["eng_vocab", 2, "Synonyms"], ["eng_vocab", 2, "Antonyms"], ["eng_idioms", 2, null], ["eng_ows", 2, "OWS"], ["eng_ows", 1, "Spelling"], ["eng_voice", 1, null], ["eng_narration", 2, null], ["eng_jumble", 2, null]];
function pickBank(id, cat, n) {
  let pool = (BANK[id] || []).slice();
  if (cat) { const f = pool.filter(q => q.trapcat === cat); if (f.length >= n) pool = f; }
  return shuffle(pool).slice(0, n);
}
function goMock() {
  stopTimer();
  state.topic = null;
  renderRoad($("#roadSearch").value || "");
  const p = PASSAGES[Math.floor(Math.random() * PASSAGES.length)];
  let list = p.blanks.map(b => Object.assign({ psg: p.id }, b));
  MOCK_QUOTA.forEach(([id, n, cat]) => { list = list.concat(pickBank(id, cat, n)); });
  list = shuffle(list);
  quiz = { list, qi: 0, answers: [], mode: "mock", exam: true, submitted: false, label: "Sectional Mock · real 2024 pattern", storeKey: "mix_mock", t0: Date.now(), deadline: Date.now() + 20 * 60 * 1000, lastPsg: null };
  crumb(["Home", "Sectional Mock (25Q · 20 min)"]);
  timerInt = setInterval(() => {
    const e = $("#qtimer");
    if (!e || !quiz || quiz.mode !== "mock" || quiz.submitted) return;
    const left = quiz.deadline - Date.now();
    if (left <= 0) { quiz.qi = quiz.list.length; renderExam(); return; }
    e.textContent = "⏱ " + fmtT(left) + " left";
  }, 1000);
  renderExam();
  window.scrollTo({ top: 0 });
}

/* ---------- FINISH + TEACHER ANALYSIS ---------- */
function finishQuiz() {
  stopTimer();
  quiz.submitted = true;
  const list = quiz.list;
  const scorable = list.filter(q => q.options && q.options.length);
  const score = list.filter((q, i) => quiz.answers[i] === q.answer).length;
  const elapsed = quiz.t0 ? fmtT(Date.now() - quiz.t0) : "";
  const wrong = [];
  list.forEach((q, i) => { if (quiz.answers[i] !== q.answer) wrong.push({ q, i }); });
  const byCat = {};
  wrong.forEach(w => { const c = w.q.trapcat || "Untagged"; byCat[c] = (byCat[c] || 0) + 1; });
  const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1]).map(([c, k]) => `<tr><td>${c}</td><td>${k}</td></tr>`).join("");
  const topCat = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0];
  const recId = topCat ? catTopic(topCat[0]) : null;
  // record
  const key = quiz.storeKey;
  if (scorable.length) {
    const b = store.best;
    if (!b[key] || score > b[key].s) { b[key] = { s: score, t: scorable.length }; store.best = b; }
    const l = store.last;
    l[key] = wrong.map(w => w.q.trapcat || "Untagged").slice(0, 8);
    store.last = l;
    if (LESSONS[key] && score >= Math.ceil(scorable.length * 0.6)) {
      const d = new Set(store.done);
      d.add(key);
      store.done = [...d];
    }
  }
  const pct = scorable.length ? score / scorable.length : 0;
  const remark = !scorable.length ? "Drill done." :
    pct === 1 ? `🎓 Flawless ${score}/${scorable.length}. This topic is yours — move to the next one on the roadmap.` :
    pct >= 0.6 ? `🎓 Good fight. Your errors cluster around <b>${topCat[0]}</b> — ${ADVICE[recId] || "re-read the lesson"}. Fix that one pattern and retake.` :
    `🎓 Don't count the score — count the lesson. ${topCat ? `Most misses: <b>${topCat[0]}</b>. ${ADVICE[recId] || ""}` : ""} Re-read the lesson slowly, practise, then retake. Weak today, strong next week.`;
  renderRoad($("#roadSearch").value || "");
  $("#view").innerHTML = `
  <div class="result"><h2 style="margin:0">${quiz.mode === "mock" ? "📝 Mock Complete" : "🎯 Test Complete"}</h2>
    <p class="score">${score} / ${scorable.length}</p>
    <p class="lvl">${quiz.label}${elapsed ? " • ⏱ " + elapsed : ""}</p>
    <div class="remark">${remark}</div>
    ${wrong.length ? `<table class="lt" style="text-align:left"><tr><th>Error pattern</th><th>Missed</th></tr>${rows}</table>
    <p style="text-align:left"><b>Fix first:</b> ${topCat[0]}. For each miss ask: concept gap (never knew) / memory gap (forgot) / application error (wrong word) / elimination error (could have cut options) / careless (misread)?</p>` : `<p>✅ Zero mistakes. Beautiful.</p>`}
    <div class="navrow" style="justify-content:center">
      ${recId && LESSONS[recId] ? `<button class="btn btn-coach" id="fFix">📖 Fix: ${LESSONS[recId].title}</button>` : ""}
      <button class="btn btn-ghost" id="fRev">Review all</button>
      <button class="btn btn-primary" id="fRetry">↻ Retry</button>
      <button class="btn btn-ghost" id="fHome">Roadmap</button>
    </div></div>`;
  const fl = $("#fFix");
  if (fl) fl.onclick = () => goLesson(recId);
  $("#fRev").onclick = () => renderReview(list, quiz.answers, () => finishQuiz());
  $("#fRetry").onclick = () => {
    if (quiz.mode === "mock") goMock();
    else if (state.topic && state.topic.indexOf("eng_") === 0) goTest(state.topic);
    else goHome();
  };
  $("#fHome").onclick = () => goHome();
  window.scrollTo({ top: 0 });
}
function renderReview(list, answers, back) {
  $("#view").innerHTML = `<div class="navrow"><button class="btn btn-ghost" id="rBack">← Back to result</button></div>` +
    list.map((q, i) => {
      const ua = answers[i];
      const head = ua === q.answer ? "✅ Correct" : `❌ Yours: ${ua !== undefined ? q.options[ua] : "—"}<br>✔ Correct: ${q.options[q.answer]}`;
      return `<div class="qcard">${badge(q)}${q.psg ? `<div class="passage"><h4>${PSGMAP[q.psg].title}</h4><p>${PSGMAP[q.psg].text}</p></div>` : ""}<p class="qtext">Q${i + 1}. ${q.q}</p><p>${head}</p><div class="explain show">${explOf(q)}</div></div>`;
    }).join("");
  $("#rBack").onclick = back;
  window.scrollTo({ top: 0 });
}

/* ---------- REVISE ---------- */
function goRevise(id) {
  stopTimer();
  state.topic = id;
  renderRoad($("#roadSearch").value || "");
  const L = LESSONS[id];
  const b = store.best[id];
  const cats = [...new Set(store.last[id] || [])];
  crumb(["Home", L.title, "Revision"]);
  $("#view").innerHTML = `
  <div class="card"><p class="lvl">📝 2-minute revision</p><h3 style="margin-top:0">${L.revision.min2}</h3>
  <div class="coach"><span class="who">🎓 Last-minute</span><br>${L.revision.lastmin}</div>
  ${b ? `<p>Master Test best: <b>${b.s}/${b.t}</b></p>` : `<p class="lvl">No test taken yet — take the Topic Test first.</p>`}
  ${cats.length ? `<div class="trapbox"><span class="who">Your weak patterns</span><br>${cats.join(" • ")}</div>` : ""}
  <div class="navrow"><button class="btn btn-coach" id="rLes">📖 Lesson</button><button class="btn btn-primary" id="rTest">🎯 Topic Test</button></div></div>`;
  $("#rLes").onclick = () => goLesson(id);
  $("#rTest").onclick = () => goTest(id);
  window.scrollTo({ top: 0 });
}

/* ---------- wiring + init ---------- */
$("#mockBtn").onclick = () => goMock();
$("#paperBtn").onclick = () => goAnalysis();
$("#roadSearch").addEventListener("input", e => renderRoad(e.target.value));
const roadEl = $("#road"), scrimEl = $("#scrim"), menuEl = $("#menuBtn");
function closeMobile2() { roadEl.classList.remove("open"); scrimEl.hidden = true; }
menuEl.onclick = () => { const o = roadEl.classList.toggle("open"); scrimEl.hidden = !o; };
scrimEl.onclick = closeMobile2;
renderRoad();
goHome();
