/* script.js — navigation tree, notes loader, quiz v2 (45/day bank), case library */
"use strict";

/* ---------- NAV TREE: AP SI > GS > Polity > FR > Equality > Art 14-18 ---------- */
const NAV_TREE = [
  { label: "AP SI", icon: "🛡️", children: [
    { label: "General Studies", icon: "📚", children: [
      { label: "Indian Polity", icon: "🏛️", children: [
        { label: "Fundamental Rights (Art. 12–35)", topicId: "fr_overview", children: [
          { label: "Right to Equality (Art. 14–18)", header: true, children: [
            { label: "Article 14 — Equality before law", topicId: "fr_art14" },
            { label: "Article 15 — No discrimination", topicId: "fr_art15" },
            { label: "Article 16 — Public employment", topicId: "fr_art16" },
            { label: "Article 17 — Untouchability", topicId: "fr_art17" },
            { label: "Article 18 — Titles", topicId: "fr_art18" },
          ]},
          { label: "📖 FR Overview (Art. 12–13 + map)", topicId: "fr_overview" },
          { label: "🏛️ Case Files Library (29 cases)", topicId: "fr_cases_hub", gotoTab: "cases" },
        ]},
        { label: "DPSP & Fundamental Duties", topicId: "polity_dpsp" },
        { label: "Executive & Union Parliament", topicId: "polity_exec" },
        { label: "Judiciary, CAG & PIL", topicId: "polity_judi" },
        { label: "Emergency & Local Bodies", topicId: "polity_emerg" },
        { label: "Important Amendments", topicId: "polity_amend" },
      ]},
      { label: "Indian History", icon: "📜", soon: true, children: [
        { label: "Ancient India", topicId: "hist_ancient" },
        { label: "Medieval India", topicId: "hist_medieval" },
        { label: "Modern India", topicId: "hist_modern" },
      ]},
      { label: "General Science", icon: "🔬", soon: true, children: [
        { label: "Physics", topicId: "sci_phy" },
        { label: "Chemistry", topicId: "sci_chem" },
        { label: "Biology", topicId: "sci_bio" },
      ]},
      { label: "Geography & Economy", icon: "🌍", soon: true, children: [
        { label: "Indian Geography", topicId: "geo_india" },
        { label: "Economy Basics", topicId: "econ_basic" },
      ]},
      { label: "Current Affairs & Mocks", icon: "📰", soon: true, children: [
        { label: "Current Affairs", topicId: "ca_monthly" },
        { label: "Full Mocks (bank in Mock tab)", topicId: "mock_full" },
      ]},
    ]},
  ]},
  /* SSC CGL English lives standalone at english/index.html (header badge links there),
     so it is intentionally absent from this sidebar. */
];

const FLAT_ORDER = ["fr_overview","fr_art14","fr_art15","fr_art16","fr_art17","fr_art18","fr_cases_hub","polity_dpsp","polity_exec","polity_judi","polity_emerg","polity_amend"];

/* ---------- STATE ---------- */
const store = {
  get done() { try { return JSON.parse(localStorage.getItem("si_done") || "[]"); } catch (e) { return []; } },
  set done(v) { localStorage.setItem("si_done", JSON.stringify(v)); },
};
let currentId = "fr_art14";
let quiz = { list: [], qi: 0, score: 0, locked: false, answers: [], mode: "topic", label: "", exam: false, submitted: false };

const $ = (s) => document.querySelector(s);
const topicById = (id) => (typeof studyData !== "undefined" ? studyData.find(t => t.id === id) : null);
// English mastery bank ships in english.js; merge once so nav + quiz see it.
// english.js wins on id collision (replaces old stubs).
if (typeof englishData !== "undefined" && typeof studyData !== "undefined") {
  englishData.forEach(t => {
    const i = studyData.findIndex(x => x.id === t.id);
    if (i >= 0) studyData[i] = t; else studyData.push(t);
  });
}

/* ---------- CGL-ENGLISH LESSONS + PASSAGES + PYQ MERGE (from cgl-english repo) ----------
   Data files ship verbatim (lessons-a/b.js, passages.js, pyq.js); ALL merge logic lives here
   so english.js / bank sources stay untouched. */
function lessonStepHTML(st) {
  const h = st.h ? `<b>${st.h}</b>` : "";
  const letters = ["A", "B", "C", "D"];
  const revealQ = (q, title) => `<div class="qcard" style="margin:12px 0"><p class="qtext">${title} — ${q.q || st.stem || ""}</p>`
    + `<div class="opts" style="pointer-events:none">${(q.options || st.options || []).map((o, i) => `<div class="opt"><span class="key">${letters[i] || ""}</span><span>${o}</span></div>`).join("")}</div>`
    + `<details><summary><b>Reveal answer + why</b></summary><div class="explain show">${q.why || st.why || `✔ <b>${letters[q.answer] || ""} — ${((q.options || st.options || [])[q.answer]) || ""}</b><br>${q.explanation || ""}`}${q.rule ? `<br><b>Rule:</b> ${q.rule}` : ""}${q.elim ? `<br><b>Elimination:</b> ${q.elim}` : ""}${q.trap ? `<br><b>Trap:</b> ${q.trap}` : ""}</div></details></div>`;
  switch (st.k) {
    case "coach": return `<div class="box blue">🎓 ${h}<br>${st.html || ""}</div>`;
    case "rule": return `<div class="box green">📏 ${h}<br>${st.html || ""}</div>`;
    case "table": return `<div class="steps">📊 ${h}${st.html || ""}</div>`;
    case "trap": return `<div class="box red">🪤 ${h}<br>${st.html || ""}</div>`;
    case "forget": return `<div class="box amber">🧠 ${h}<br>${st.html || ""}</div>`;
    case "card": return `<div class="takeaway">🗂️ ${h}<br>${st.html || ""}</div>`;
    case "try": return revealQ(st.q || {}, "✏️ " + h);
    case "pick": return revealQ({ answer: st.answer, explanation: "", options: st.options }, "🎯 " + h);
    default: return st.html ? `<div class="box">${h}<br>${st.html}</div>` : "";
  }
}
function guidedLessonHTML(L) {
  if (!L) return "";
  return `<h3>🎓 Guided lesson${L.title ? " — " + L.title : ""}</h3>`
    + (L.sub ? `<p class="meta">${L.sub}</p>` : "")
    + (L.hook ? `<div class="box blue">${L.hook}</div>` : "")
    + (L.steps || []).map(lessonStepHTML).join("")
    + (L.revision ? `<div class="takeaway">⏱️ <b>2-min:</b> ${L.revision.min2 || ""}<br>⚡ <b>Last-min:</b> ${L.revision.lastmin || ""}</div>` : "");
}
(function mergeEnglishExtras() {
  if (typeof studyData === "undefined") return;
  const byId = {};
  studyData.forEach(t => { byId[t.id] = t; });
  const lessons = Object.assign({}, (typeof LESSONS_A !== "undefined" ? LESSONS_A : {}), (typeof LESSONS_B !== "undefined" ? LESSONS_B : {}));
  Object.keys(lessons).forEach(id => {
    if (byId[id] && !byId[id]._lessonsMerged) {
      byId[id].content += guidedLessonHTML(lessons[id]);
      byId[id]._lessonsMerged = true;
    }
  });
  if (typeof PYQ !== "undefined") {
    PYQ.forEach(q => {
      if (byId[q.topic]) {
        const pool = byId[q.topic].questions = byId[q.topic].questions || [];
        if (!pool.some(x => x.q === q.q)) pool.push(Object.assign({}, q, { _set: "PYQ" }));
      }
    });
  }
  if (typeof PASSAGES !== "undefined" && byId.eng_cloze_rc && !byId.eng_cloze_rc._passagesMerged) {
    const letters = ["A", "B", "C", "D"];
    byId.eng_cloze_rc.content += `<h3>📖 Cloze practice passages</h3>` + PASSAGES.map(p =>
      `<div class="case"><b class="t">${p.title}</b><br><span class="mini">${p.note || ""}</span><p>${p.text || ""}</p>`
      + (p.blanks || []).map((b, i) => `<details><summary><b>Blank ${i + 1}:</b> ${b.q || ""}</summary><div class="explain show">✔ <b>${letters[b.answer] || ""} — ${(b.options || [])[b.answer] || ""}</b><br>${b.explanation || ""}${b.rule ? `<br><b>Rule:</b> ${b.rule}` : ""}${b.elim ? `<br><b>Elimination:</b> ${b.elim}` : ""}</div></details>`).join("") + `</div>`
    ).join("");
    byId.eng_cloze_rc._passagesMerged = true;
    const pool = byId.eng_cloze_rc.questions = byId.eng_cloze_rc.questions || [];
    PASSAGES.forEach(p => (p.blanks || []).forEach(b => {
      if (!pool.some(x => x.q === b.q)) pool.push(Object.assign({}, b, { _set: "Cloze" }));
    }));
  }
  if (!byId.eng_jumble) {
    const jpyq = (typeof PYQ !== "undefined" ? PYQ : []).filter(q => q.topic === "eng_jumble").map(q => Object.assign({}, q, { _set: "PYQ" }));
    studyData.push({
      id: "eng_jumble",
      crumbs: ["SSC CGL", "English", "Vocabulary"],
      kicker: "SSC CGL English • Parajumbles",
      title: "Parajumbles (Jumbled Sentences)",
      meta: `guided lesson + ${jpyq.length} PYQ • ~15 min`,
      content: `<p><b>Parajumbles:</b> arrange jumbled sentences into a coherent paragraph. SSC tests <b>connectors, pronouns, chronology and mandatory pairs</b> — not vocabulary.</p>` + guidedLessonHTML(lessons.eng_jumble),
      questions: jpyq,
    });
  }
})();

/* ---------- SIDEBAR (nested tree) ---------- */
function isLockedTopic(t) {
  if (!t) return true;
  if ((t.questions || []).length > 0) return false;
  return /Upcoming|Locked/.test(t.meta || "");
}
function renderSidebar(filter) {
  filter = (filter || "").toLowerCase();
  const nav = $("#navAccordion");
  nav.innerHTML = "";
  const done = store.done;
  NAV_TREE.forEach(exam => {
    const box = document.createElement("div");
    box.className = "acc-item open";
    box.innerHTML = `<button class="acc-header"><span>${exam.icon || ""} ${exam.label}</span><span class="chev">▾</span></button><div class="acc-body"></div>`;
    box.querySelector(".acc-header").onclick = () => box.classList.toggle("open");
    const body = box.querySelector(".acc-body");
    (exam.children || []).forEach(subj => {
      const lvl = document.createElement("div");
      lvl.className = "nav-lvl";
      lvl.textContent = `${subj.icon || ""} ${subj.label}`;
      body.appendChild(lvl);
      (subj.children || []).forEach(unit => {
        if (unit.soon && filter && !unit.label.toLowerCase().includes(filter)) return;
        if (!unit.children) {
          appendLeaf(body, unit, "", done, filter);
          return;
        }
        const sub = document.createElement("div");
        sub.className = "nav-sub";
        sub.textContent = `${unit.icon || ""} ${unit.label}`;
        body.appendChild(sub);
        (unit.children || []).forEach(item => {
          renderBranch(body, item, "", done, filter);
        });
      });
    });
    nav.appendChild(box);
  });
  const total = typeof studyData !== "undefined" ? studyData.length : 1;
  const pct = Math.round((store.done.length / total) * 100);
  $("#progressFill").style.width = pct + "%";
  $("#progressPct").textContent = pct + "%";
}
function branchMatches(item, filter) {
  if (!filter) return true;
  const t = item.topicId ? topicById(item.topicId) : null;
  if (((item.label || "") + " " + (t ? t.title : "")).toLowerCase().includes(filter)) return true;
  return (item.children || []).some(ch => branchMatches(ch, filter));
}
function renderBranch(body, item, cls, done, filter) {
  if (!branchMatches(item, filter)) return;
  const kids = item.children || [];
  if (item.header || kids.length) {
    // Collapsible group row: click label toggles open/close.
    const wrap = document.createElement("div");
    wrap.className = "nav-group open";
    const row = document.createElement("div");
    row.className = "nav-row";
    const tgl = document.createElement("button");
    tgl.className = "nav-toggle";
    tgl.innerHTML = `<span class="chev">▾</span><span>${item.label}</span>`;
    tgl.onclick = () => {
      const open = wrap.classList.toggle("open");
      tgl.querySelector(".chev").textContent = open ? "▾" : "▸";
    };
    row.appendChild(tgl);
    if (item.topicId && !item.header) {
      // parent doubles as a notes page: small book button opens it (row click only toggles)
      const openBtn = document.createElement("button");
      openBtn.className = "nav-open-btn";
      openBtn.title = "Open notes";
      openBtn.setAttribute("aria-label", "Open " + item.label + " notes");
      openBtn.textContent = "📖";
      openBtn.onclick = (e) => {
        e.stopPropagation();
        const t = topicById(item.topicId);
        if (t && isLockedTopic(t)) { alert("🔒 This module unlocks in its week."); return; }
        loadTopic(item.topicId, item.gotoTab);
        closeMobile();
      };
      row.appendChild(openBtn);
    }
    const kidsBox = document.createElement("div");
    kidsBox.className = "nav-kids";
    wrap.appendChild(row);
    wrap.appendChild(kidsBox);
    body.appendChild(wrap);
    kids.forEach(ch => renderBranch(kidsBox, ch, "lvl3", done, filter));
    return;
  }
  if (item.topicId) appendLeaf(body, item, cls, done, "");
}
function appendLeaf(body, item, cls, done, filter) {
  const t = item.topicId ? topicById(item.topicId) : null;
  const label = item.label + (t ? " " + t.title : "");
  if (filter && !label.toLowerCase().includes(filter)) return;
  const b = document.createElement("button");
  const locked = t ? isLockedTopic(t) : false;
  const nq = t ? (t.questions || []).length : 0;
  b.className = "topic-link " + cls + (item.topicId === currentId ? " active" : "") + (locked ? " locked" : "");
  b.innerHTML = `<span class="dot"></span><span>${item.label}</span>${nq ? `<span class="qcount">${nq}Q</span>` : ""}${t && done.includes(t.id) ? '<span class="tick">✓</span>' : ""}`;
  b.onclick = () => {
    if (locked) { alert("🔒 This module unlocks in its week. Start with FR Overview → Articles 14–18."); return; }
    loadTopic(item.topicId, item.gotoTab);
    closeMobile();
  };
  body.appendChild(b);
}

/* ---------- TOPIC + BREADCRUMB + TABS ---------- */
function loadTopic(id, gotoTab) {
  const t = topicById(id);
  if (!t) return;
  currentId = id;
  $("#topicKicker").textContent = t.kicker || "";
  $("#topicTitle").textContent = t.title || "";
  $("#topicMeta").textContent = t.meta || "";
  $("#notesBody").innerHTML = t.content || "";
  if (id.indexOf("eng_") === 0) {
    const b = engStore.best[id];
    const nq = (t.questions || []).length;
    const cats = engStore.last[id] || [];
    const uniq = [...new Set(cats)];
    $("#notesBody").innerHTML =
      `<div class="checklist"><b>📋 Topic checklist:</b><span>✓ Notes</span><span>•</span><span>${nq} practice Qs (Mock tab)</span><span>•</span><span>Master Test best: ${b ? b.s + "/" + b.t : "not taken"}</span><span>•</span><span>${b ? engTier(b.s, b.t) : "⚪ Not taken"}</span>${uniq.length ? `<span>•</span><span>Weakest: ${uniq.slice(0, 3).join(", ")}</span>` : ""}</div>` +
      $("#notesBody").innerHTML;
  }
  $("#crumb").innerHTML = (t.crumbs || []).map((c, i, a) =>
    i < a.length - 1 ? `<button data-crumb="${i}">${c}</button><span>›</span>` : `<b>${c}</b>`
  ).join(" ");
  renderSidebar($("#searchBox").value || "");
  loadTopicQuiz();
  switchTab(gotoTab || "notes");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function switchTab(which) {
  ["notes", "quiz", "cases"].forEach(k => {
    const on = k === which;
    const tab = $("#tab" + k[0].toUpperCase() + k.slice(1));
    const pane = $("#pane" + k[0].toUpperCase() + k.slice(1));
    if (tab) { tab.classList.toggle("active", on); tab.setAttribute("aria-selected", on); }
    if (pane) { pane.classList.toggle("active", on); pane.hidden = !on; }
  });
}

/* ---------- QUIZ v2: topic mock + 45/day bank ---------- */
function buildExplanation(raw) {
  const parts = [];
  if (raw.explanation) parts.push(raw.explanation);
  if (raw.expl) parts.push("<b>Rule:</b> " + raw.expl);
  if (raw.rule) parts.push("<b>Rule:</b> " + raw.rule);
  if (raw.why) {
    if (typeof raw.why === "object") {
      const letters = ["A", "B", "C", "D"];
      parts.push("<b>Option-wise:</b><br>" + ["0", "1", "2", "3"]
        .filter(k => raw.why[k])
        .map(k => `<b>${letters[+k]}:</b> ${raw.why[k]}`).join("<br>"));
    } else {
      parts.push("<b>Why:</b> " + raw.why);
    }
  }
  if (raw.tip) parts.push("<b>Elimination:</b> " + raw.tip);
  if (raw.elim) parts.push("<b>Elimination:</b> " + raw.elim);
  if (raw.trapnote) parts.push("<b>Trap:</b> " + raw.trapnote);
  if (raw.trap) parts.push("<b>Trap:</b> " + raw.trap);
  if (raw.level) parts.push("<span class='lvl-tag'>" + raw.level + "</span>");
  return parts.join("<br><br>") || "No explanation available.";
}
function normQ(raw) {
  if (raw.options && raw.options.length) {
    return { q: raw.q, options: raw.options, answer: raw.answer, explanation: buildExplanation(raw),
      flash: false, trapcat: raw.trapcat || "", level: raw.level || "", _set: raw._set || "", src: raw.src || "" };
  }
  return { q: raw.q, options: [], answer: -1, explanation: (raw.a ? "<b>Answer:</b> " + raw.a : "") + (raw.tip ? "<br><br><b>Tip:</b> " + raw.tip : ""), flash: true, topic: raw.topic, trapcat: raw.trapcat || "", level: raw.level || "", src: raw.src || "" };
}
function setQuizList(list, label, mode) {
  quiz = { list: list.map(normQ), qi: 0, score: 0, locked: false, answers: [], mode, label, exam: false, submitted: false };
  stopTimer();
  $("#resultCard").hidden = true;
  const ac = $("#analysisCard");
  if (ac) ac.hidden = true;
  $("#quizCount").textContent = quiz.list.length;
  setStatus(`${label}: ${quiz.list.length} questions loaded. Practice mode — explanation after every answer.`);
  syncModeBtn();
  renderQ();
}
/* ---------- ENGLISH MIXED SCOPES (§22/§23): quota-built mixes ---------- */
const TOPIC_GROUPS = {
  grammar: { label: "Grammar mix", quota: { eng_sva: 5, eng_tenses: 4, eng_articles: 4, eng_prepositions: 4, eng_pronouns: 2, eng_modifiers: 1 } },
  voicenarr: { label: "Voice + Narration", quota: { eng_voice: 6, eng_narration: 6 } },
  vocab: { label: "Vocabulary mix", quota: { eng_vocab: 5, eng_ows: 5, eng_idioms: 5 } },
  sectional: { label: "Full 25-Q sectional", quota: { eng_sva: 3, eng_tenses: 2, eng_articles: 2, eng_prepositions: 2, eng_pronouns: 1, eng_modifiers: 1, eng_voice: 2, eng_narration: 2, eng_vocab: 2, eng_ows: 2, eng_idioms: 2, eng_error: 2, eng_improve: 1, eng_cloze_rc: 1 } },
};
function shuffle(a) { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = x[i]; x[i] = x[j]; x[j] = t; } return x; }
function collectScope(scope) {
  if (scope === "topic" || !TOPIC_GROUPS[scope]) {
    const t = topicById(currentId);
    const list = ((t && t.questions) || []).slice();
    return { list, label: "MASTER TEST — " + (t ? t.title : ""), key: currentId };
  }
  const g = TOPIC_GROUPS[scope];
  let list = [];
  Object.entries(g.quota).forEach(([id, n]) => {
    const t = topicById(id);
    list = list.concat(shuffle((t && t.questions) || []).slice(0, n));
  });
  list = shuffle(list);
  return { list, label: "MASTER TEST — " + g.label + " (" + list.length + "Q)", key: "mix_" + scope };
}
/* ---------- ENGLISH MASTERY STORE (§10/§14): best score + weakest pattern ---------- */
const engStore = {
  get best() { try { return JSON.parse(localStorage.getItem("eng_best") || "{}"); } catch (e) { return {}; } },
  set best(v) { localStorage.setItem("eng_best", JSON.stringify(v)); },
  get last() { try { return JSON.parse(localStorage.getItem("eng_last") || "{}"); } catch (e) { return {}; } },
  set last(v) { localStorage.setItem("eng_last", JSON.stringify(v)); },
};
function engTier(score, total) {
  if (!total) return "⚪ Not taken";
  const pct = score / total;
  if (pct >= 0.85) return "🟢 Mastered";
  if (pct >= 0.6) return "🟡 Needs Revision";
  return "🔴 Weak";
}
/* ---------- MASTER TEST TIMER (§24) ---------- */
let timerInt = null;
function fmtT(ms) { const s = Math.floor(ms / 1000); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
function startTimer() { stopTimer(); const el = $("#qTimer"); if (el) { el.hidden = false; el.textContent = "⏱ 00:00"; } timerInt = setInterval(() => { const e2 = $("#qTimer"); if (e2 && quiz.t0) e2.textContent = "⏱ " + fmtT(Date.now() - quiz.t0); }, 1000); }
function stopTimer() { if (timerInt) { clearInterval(timerInt); timerInt = null; } const el = $("#qTimer"); if (el) el.hidden = true; }
function startMasterTest() {
  const scope = ($("#scopeSel") && $("#scopeSel").value) || "topic";
  const pack = collectScope(scope);
  if (!pack.list.length) { setStatus("No questions in this set yet.", true); return; }
  quiz = { list: pack.list.map(normQ), qi: 0, score: 0, locked: false, answers: [], mode: "master",
    label: pack.label, exam: true, submitted: false, storeKey: pack.key, t0: Date.now() };
  $("#resultCard").hidden = true;
  const ac = $("#analysisCard");
  if (ac) ac.hidden = true;
  $("#quizCount").textContent = quiz.list.length;
  setStatus(`${quiz.label}: ${quiz.list.length} questions. No hints — answer all, then Submit.`);
  syncModeBtn();
  startTimer();
  renderQ();
  switchTab("quiz");
}
/* Practice a scope mix with instant hints (exam skills). */
function loadMixPractice() {
  const scope = ($("#scopeSel") && $("#scopeSel").value) || "topic";
  const pack = collectScope(scope);
  if (!pack.list.length) { setStatus("No questions in this set yet.", true); return; }
  setQuizList(pack.list, "Practice mix — " + pack.label.replace("MASTER TEST — ", ""), "master");
  quiz.storeKey = pack.key;
  switchTab("quiz");
}
function syncModeBtn() {
  const b = $("#masterTestBtn");
  if (b) b.textContent = quiz.exam && !quiz.submitted ? "📝 Back to Practice" : "🎯 Master Test (exam mode)";
}
function setStatus(msg, isErr) {
  const el = $("#bankStatus");
  el.textContent = msg;
  el.classList.toggle("err", !!isErr);
}
function loadTopicQuiz() {
  const t = topicById(currentId);
  const qs = (t && t.questions) || [];
  setQuizList(qs, `Topic mock — ${t ? t.title : ""}`, "topic");
  switchTabKeep();
}
function switchTabKeep() { /* keep current tab; only update counts */ }

async function loadBank() {
  const day = $("#daySel").value;
  const mode = $("#modeSel").value;
  setStatus("Loading bank…");
  try {
    if (day === "topic") { loadTopicQuiz(); return; }
    if (day === "bank") {
      const r = await fetch("data/gs_bank.json");
      if (!r.ok) throw new Error("gs_bank.json HTTP " + r.status);
      const arr = await r.json();
      setQuizList(arr, "GS Bank drill (flashcards)", "bank");
      return;
    }
    if (day === "fr120") {
      // FR 120-bank tiers: B=Foundation 20, C=Conceptual 30, D=Difficult 25, T=Tricky 25, S=Application 20
      const TIER = { full: null, core: "B", hard: "D", analy: "C", ca: "C", curr: "T", si: "S" };
      const r = await fetch("data/fr120_bank.json");
      if (!r.ok) throw new Error("fr120_bank.json HTTP " + r.status);
      let arr = await r.json();
      const want = TIER[mode];
      if (want) arr = arr.filter(q => q.round === want);
      setQuizList(arr, want ? `FR 120-bank tier ${want} (${arr.length}Q)` : "FR 120-bank full (120Q)", "bank");
      return;
    }
    // 45/day audited bank: quiz=Core 20, hard=Advanced 10,
    // ca round X=Analytical 5 + round V=Current 5, si round S=SI-Field 5
    const SETS = {
      core:  { files: ["quiz"],                                    label: `Day ${day} core 20` },
      hard:  { files: ["hard"],                                    label: `Day ${day} advanced 10` },
      analy: { files: ["ca"], round: "X",                          label: `Day ${day} analytical 5` },
      curr:  { files: ["ca"], round: "V",                          label: `Day ${day} current 5` },
      ca:    { files: ["ca"],                                      label: `Day ${day} analytical 10` },
      si:    { files: ["si"],                                      label: `Day ${day} SI-field 5` },
      full:  { files: ["quiz", "hard", "ca", "si"],                label: `Day ${day} full 45` },
    };
    const cfg = SETS[mode] || SETS.full;
    const names = { quiz: "Core", hard: "Advanced", ca: "Analy/Current", si: "SI-Field" };
    let all = [];
    for (const k of cfg.files) {
      const r = await fetch(`data/day${String(day).padStart(2, "0")}_${k}.json`);
      if (!r.ok) throw new Error(`day${day}_${k}.json HTTP ${r.status}`);
      let arr = await r.json();
      if (cfg.round) arr = arr.filter(q => q.round === cfg.round);
      all = all.concat(arr.map(q => ({ ...q, _set: names[k] })));
    }
    setQuizList(all, cfg.label, "bank");
  } catch (e) {
    setStatus("Could not load bank files (" + e.message + "). Run via http server in si-cgl-portal, not file://. Showing topic mock instead.", true);
    loadTopicQuiz();
  }
}

function renderQ() {
  const qs = quiz.list;
  renderPalette();
  if (!qs.length) {
    $("#quizBody").innerHTML = `<div class="qcard"><p class="qtext">No questions in this set.</p><p>Use the Day/Set controls above to load the 45/day bank.</p></div>`;
    $("#qCounter").textContent = "No set loaded";
    $("#qScore").textContent = "Score: 0";
    $("#quizFill").style.width = "0%";
    return;
  }
  if (quiz.qi >= qs.length) { showResult(); return; }
  const q = qs[quiz.qi];
  quiz.locked = false;
  $("#qCounter").textContent = `Question ${quiz.qi + 1} of ${qs.length}${q._set ? " • " + q._set : ""}`;
  const scored = quiz.answers.filter((a, i) => a !== undefined && !qs[i].flash && a === qs[i].answer).length;
  quiz.score = scored;
  $("#qScore").textContent = `Score: ${quiz.score}`;
  $("#quizFill").style.width = (quiz.qi / qs.length * 100) + "%";
  const letters = ["A", "B", "C", "D"];
  if (q.flash) {
    $("#quizBody").innerHTML = `
      <div class="qcard">
        <p class="mini">${q.topic || "GS Bank"}</p>
        <p class="qtext">Q${quiz.qi + 1}. ${q.q}</p>
        <div class="explain" id="exp">${q.explanation}</div>
        <div class="quiz-nav">
          <button class="btn btn-ghost" id="prevQ" ${quiz.qi === 0 ? "disabled" : ""}>← Back</button>
          <button class="btn btn-ghost" id="revealQ">Reveal answer</button>
          <button class="btn btn-primary" id="nextQ">Next →</button>
        </div>
      </div>`;
    $("#revealQ").onclick = () => { $("#exp").classList.add("show"); quiz.answers[quiz.qi] = -2; renderPalette(); };
    $("#prevQ").onclick = () => { if (quiz.qi > 0) { quiz.qi--; renderQ(); } };
    $("#nextQ").onclick = () => { if (quiz.answers[quiz.qi] === undefined) quiz.answers[quiz.qi] = -2; quiz.qi++; renderQ(); };
    if (quiz.answers[quiz.qi] !== undefined) $("#exp").classList.add("show");
    return;
  }
  const EXAM = quiz.exam && !quiz.submitted;
  const tags = [q.level, q.trapcat].filter(Boolean).join(" • ");
  const srcBadge = q.src ? `<span class="src-badge">PYQ · ${q.src}</span>` : (q.level ? `<span class="src-badge pat">SSC-pattern</span>` : "");
  const tagLine = (srcBadge || tags) ? `<p class="mini">${srcBadge}${srcBadge && tags ? " " : ""}${tags}</p>` : "";
  $("#quizBody").innerHTML = `
    <div class="qcard">
      ${tagLine}
      <p class="qtext">Q${quiz.qi + 1}. ${q.q}</p>
      <div class="opts">${q.options.map((o, i) => `<button class="opt" data-i="${i}"><span class="key">${letters[i] || ""}</span><span>${o}</span></button>`).join("")}</div>
      <div class="explain" id="exp">${EXAM ? "<b>🔒 Locked.</b> Explanation reveals after you submit the Master Test." : "<b>💡 Explanation:</b><br>" + q.explanation}</div>
      <div class="quiz-nav">
        <button class="btn btn-ghost" id="prevQ" ${quiz.qi === 0 ? "disabled" : ""}>← Back</button>
        ${EXAM && quiz.qi === qs.length - 1
          ? `<button class="btn btn-primary" id="submitTest">Submit Test →</button>`
          : `<button class="btn btn-primary" id="nextQ" ${EXAM ? "" : "disabled"}>${quiz.qi === qs.length - 1 ? "See result →" : "Next →"}</button>`}
      </div>
    </div>`;
  document.querySelectorAll(".opt").forEach(btn => { btn.onclick = () => answer(+btn.dataset.i); });
  $("#prevQ").onclick = () => { if (quiz.qi > 0) { quiz.qi--; renderQRestore(); } };
  const nqBtn = $("#nextQ");
  if (nqBtn) nqBtn.onclick = () => { quiz.qi++; renderQ(); };
  const stBtn = $("#submitTest");
  if (stBtn) stBtn.onclick = () => { quiz.qi = qs.length; renderQ(); };
  if (EXAM) {
    const attempted = quiz.answers.filter(a => a !== undefined).length;
    $("#qCounter").textContent = `Question ${quiz.qi + 1} of ${qs.length} • Attempted ${attempted}`;
    $("#qScore").textContent = "Master Test — no live score";
    $("#quizFill").style.width = (attempted / qs.length * 100) + "%";
  }
  renderQRestore(true);
}
function renderQRestore(firstPaint) {
  const saved = quiz.answers[quiz.qi];
  if (saved === undefined || saved < 0) return;
  const q = quiz.list[quiz.qi];
  if (q.flash) return;
  const btns = document.querySelectorAll(".opt");
  if (quiz.exam && !quiz.submitted) {
    // Exam mode: show the learner's pick, reveal nothing about correctness.
    if (btns[saved]) btns[saved].classList.add("selected");
    return;
  }
  quiz.locked = true;
  btns.forEach(b => { b.disabled = true; });
  if (saved === q.answer) { if (btns[saved]) btns[saved].classList.add("correct"); }
  else { if (btns[saved]) btns[saved].classList.add("wrong"); if (btns[q.answer]) btns[q.answer].classList.add("correct"); }
  const exp = $("#exp");
  if (exp) exp.classList.add("show");
  const nq = $("#nextQ");
  if (nq) nq.disabled = false;
}
function renderPalette() {
  const pal = $("#palette");
  pal.innerHTML = "";
  quiz.list.forEach((q, i) => {
    const b = document.createElement("button");
    const a = quiz.answers[i];
    let cls = "pal";
    if (i === quiz.qi) cls += " cur";
    if (a !== undefined) {
      if (q.flash) cls += " skip";
      else if (quiz.exam && !quiz.submitted) cls += " skip";
      else cls += (a === q.answer ? " ok" : " bad");
    }
    b.className = cls;
    b.textContent = i + 1;
    b.onclick = () => { quiz.qi = i; $("#resultCard").hidden = true; renderQ(); };
    pal.appendChild(b);
  });
}
function answer(i) {
  if (quiz.locked) return;
  const q = quiz.list[quiz.qi];
  if (quiz.exam && !quiz.submitted) {
    // Exam mode: record pick, mark selected, reveal nothing.
    quiz.answers[quiz.qi] = i;
    document.querySelectorAll(".opt").forEach((b, bi) => { b.classList.toggle("selected", bi === i); });
    const attempted = quiz.answers.filter(a => a !== undefined).length;
    $("#qCounter").textContent = `Question ${quiz.qi + 1} of ${quiz.list.length} • Attempted ${attempted}`;
    $("#quizFill").style.width = (attempted / quiz.list.length * 100) + "%";
    renderPalette();
    return;
  }
  quiz.locked = true;
  quiz.answers[quiz.qi] = i;
  const btns = document.querySelectorAll(".opt");
  btns.forEach(b => { b.disabled = true; });
  if (i === q.answer) { btns[i].classList.add("correct"); }
  else { btns[i].classList.add("wrong"); if (btns[q.answer]) btns[q.answer].classList.add("correct"); }
  const scored = quiz.answers.filter((a, idx) => a !== undefined && !quiz.list[idx].flash && a === quiz.list[idx].answer).length;
  quiz.score = scored;
  $("#qScore").textContent = `Score: ${quiz.score}`;
  $("#exp").classList.add("show");
  $("#nextQ").disabled = false;
  const denom = quiz.list.filter(x => !x.flash).length || 1;
  $("#quizFill").style.width = (quiz.answers.filter(a => a !== undefined).length / quiz.list.length * 100) + "%";
  renderPalette();
}
function showResult() {
  const n = quiz.list.length;
  const scorable = quiz.list.filter(q => !q.flash);
  if (quiz.exam) quiz.submitted = true;
  stopTimer();
  const elapsed = (quiz.exam && quiz.t0) ? fmtT(Date.now() - quiz.t0) : "";
  const scored = quiz.answers.filter((a, idx) => a !== undefined && !quiz.list[idx].flash && a === quiz.list[idx].answer).length;
  quiz.score = scored;
  $("#quizBody").innerHTML = "";
  $("#qCounter").textContent = `Completed ${n}/${n}`;
  $("#quizFill").style.width = "100%";
  $("#qScore").textContent = `Score: ${quiz.score}`;
  $("#resultCard").hidden = false;
  $("#resultScore").textContent = scorable.length ? `${quiz.score} / ${scorable.length} scored` : `${n} cards reviewed`;
  const pct = scorable.length ? quiz.score / scorable.length : 0;
  const lvl = !scorable.length ? "bank" : pct === 1 ? "mastered" : pct >= 0.6 ? "revise" : "weak";
  $("#resultMsg").textContent =
    !scorable.length ? "Bank drill done — re-read the tips and retry." :
    lvl === "mastered" ? "Outstanding! Mastered — move to the next topic." :
    lvl === "revise" ? "Needs Revision — study the Trap lines below and retry." :
    "Weak — re-read the Core Rules for this topic, then retry.";
  // Mistake-category analysis (trapcat-wise): more useful than the bare score.
  const ac = $("#analysisCard");
  if (ac) {
    const wrong = [];
    quiz.list.forEach((q, idx) => {
      if (q.flash) return;
      if (quiz.answers[idx] !== q.answer) wrong.push({ q, idx });
    });
    if (!scorable.length || !wrong.length) {
      ac.innerHTML = scorable.length
        ? `<h4>✅ Analysis — no mistakes. All ${scorable.length} correct.${elapsed ? " • ⏱ " + elapsed : ""}</h4>`
        : `<h4>Bank drill done.</h4>`;
    } else {
      const byCat = {};
      wrong.forEach(w => { const c = w.q.trapcat || "Untagged"; byCat[c] = (byCat[c] || 0) + 1; });
      const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1])
        .map(([c, k]) => `<tr><td>${c}</td><td>${k}</td></tr>`).join("");
      const top = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0][0];
      ac.innerHTML = `
        <h4>🔍 Mistake Analysis — ${wrong.length} wrong out of ${scorable.length}${elapsed ? " • ⏱ " + elapsed : ""}</h4>
        <table class="rev"><tr><th>Error pattern</th><th>Missed</th></tr>${rows}</table>
        <div class="takeaway">🎯 <b>Fix first:</b> ${top} — re-read that rule + trap in the notes, then retry the Master Test.
        Ask yourself for each miss: concept gap (didn't know) / memory gap (forgot) / application error (misapplied) / elimination error (could have cut options) / careless (misread)?</div>`;
    }
    ac.hidden = false;
  }
  const storeKey = quiz.storeKey || currentId;
  if (scorable.length && (quiz.mode === "topic" || quiz.mode === "master")) {
    const wrongCats = [];
    quiz.list.forEach((q, idx) => { if (!q.flash && quiz.answers[idx] !== q.answer) wrongCats.push(q.trapcat || "Untagged"); });
    const b = engStore.best;
    const prev = b[storeKey] || { s: -1, t: 0 };
    if (quiz.score > prev.s) { b[storeKey] = { s: quiz.score, t: scorable.length }; engStore.best = b; }
    const l = engStore.last; l[storeKey] = wrongCats.slice(0, 8); engStore.last = l;
  }
  if (scorable.length && quiz.score >= Math.ceil(scorable.length * 0.6) && (quiz.mode === "topic" || quiz.mode === "master")) {
    if (topicById(storeKey)) {
      const d = new Set(store.done);
      d.add(storeKey);
      store.done = [...d];
      renderSidebar($("#searchBox").value || "");
    }
  }
  syncModeBtn();
  renderPalette();
}
function renderReview() {
  $("#quizBody").innerHTML = quiz.list.map((q, idx) => {
    const ua = quiz.answers[idx];
    const rtags = (q.level || q.trapcat) ? [q.level, q.trapcat].filter(Boolean).join(" • ") : "";
    const rsrc = q.src ? `<span class="src-badge">PYQ · ${q.src}</span>` : (q.level ? `<span class="src-badge pat">SSC-pattern</span>` : "");
    const tag = (rsrc || rtags) ? `<p class="mini">${rsrc}${rsrc && rtags ? " " : ""}${rtags}</p>` : "";
    const head = q.flash
      ? `<p>📌 Reviewed${ua === undefined ? " (skipped)" : ""}</p>`
      : (ua === q.answer ? "✅ Correct" : `❌ Your answer: ${ua !== undefined && ua >= 0 ? q.options[ua] : "—"}<br>✔ Correct: ${q.options[q.answer]}`);
    return `<div class="qcard" style="margin-bottom:12px">${tag}<p class="qtext">Q${idx + 1}. ${q.q}</p><p>${head}</p><div class="explain show">${q.flash ? "" : "<b>💡</b><br>"}${q.explanation}</div></div>`;
  }).join("");
  $("#qCounter").textContent = "Review mode";
}

/* ---------- CASE LIBRARY ---------- */
let caseView = "stories"; // stories | rapid
function renderCaseViewToggle() {
  let bar = $("#caseViewBar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "caseViewBar";
    bar.className = "quiz-toolbar";
    const grid = $("#caseGrid");
    grid.parentNode.insertBefore(bar, grid);
  }
  const nT = (typeof TAKEAWAYS !== "undefined" ? TAKEAWAYS.length : 0);
  const nC = (typeof CASES !== "undefined" ? CASES.length : 0);
  bar.innerHTML = `
    <button class="btn btn-sm ${caseView === "stories" ? "btn-primary" : "btn-ghost"}" data-cv="stories">📖 Full stories (${nC})</button>
    <button class="btn btn-sm ${caseView === "rapid" ? "btn-primary" : "btn-ghost"}" data-cv="rapid">⚡ Rapid revision (${nT})</button>
    <span class="bank-status">Rapid cards = takeaway + SI relevance + 3 how-asked patterns.</span>`;
  bar.querySelectorAll("[data-cv]").forEach(b => { b.onclick = () => { caseView = b.dataset.cv; renderCases(); }; });
}
function renderTakeaways(grid, f, tag) {
  const all = (typeof TAKEAWAYS !== "undefined" ? TAKEAWAYS : []);
  const byN = {};
  (typeof CASES !== "undefined" ? CASES : []).forEach(c => { byN[c.n] = c; });
  const list = all.filter(t => {
    const c = byN[t.n] || {};
    if (tag && !((c.tags || []).includes(tag))) return false;
    if (f && !((t.title + " " + t.take + " " + t.si + " " + t.how.join(" ")).toLowerCase().includes(f))) return false;
    return true;
  });
  grid.innerHTML = list.length ? "" : `<div class="qcard"><p class="qtext">No takeaways match this filter.</p></div>`;
  list.forEach(t => {
    const c = byN[t.n] || {};
    const d = document.createElement("div");
    d.className = "case-card";
    d.innerHTML = `
      <h4>#${t.n} — ${t.title}</h4>
      <div>${((c.tags || []).map(x => `<span class="ctag">${x}</span>`).join(""))}</div>
      <div class="takeaway">📌 <b>TAKEAWAY:</b> ${t.take}</div>
      <div class="example">👮 <b>SI relevance:</b> ${t.si}</div>
      <details open><summary>How asked — 3 patterns</summary><ol>${t.how.map(h => `<li>${h}</li>`).join("")}</ol></details>`;
    grid.appendChild(d);
  });
  if (!tag && !f && typeof EXAM_CAUTIONS !== "undefined") {
    const d = document.createElement("div");
    d.className = "case-card";
    d.innerHTML = `<h4>⛔ Exam-hall cautions</h4><div class="takeaway"><ul>${EXAM_CAUTIONS.map(x => `<li>${x}</li>`).join("")}</ul></div>`;
    grid.appendChild(d);
  }
}
function renderCases() {
  renderCaseViewToggle();
  const grid = $("#caseGrid");
  const f = ($("#caseSearch").value || "").toLowerCase();
  const tag = $("#caseTag").value || "";
  if (caseView === "rapid") { renderTakeaways(grid, f, tag); return; }
  const list = (typeof CASES !== "undefined" ? CASES : []).filter(c =>
    (!tag || (c.tags || []).includes(tag)) &&
    (!f || (c.title + " " + c.year + " " + (c.arts || "") + " " + (c.take || "")).toLowerCase().includes(f))
  );
  $("#caseCount").textContent = (typeof CASES !== "undefined" ? CASES.length : 0);
  grid.innerHTML = list.length ? "" : `<div class="qcard"><p class="qtext">No cases match this filter.</p></div>`;
  list.forEach(c => {
    const d = document.createElement("div");
    d.className = "case-card";
    d.innerHTML = `
      <h4>Case ${c.n} — ${c.title} (${c.year})</h4>
      <div class="cmeta">${c.arts || ""}</div>
      <div>${(c.tags || []).map(t => `<span class="ctag">${t}</span>`).join("")}</div>
      <details open><summary>Background</summary><p>${c.bg || ""}</p></details>
      <details><summary>What happened — step by step</summary><ol>${(c.steps || []).map(s => `<li>${s}</li>`).join("")}</ol></details>
      <details><summary>What the Court decided</summary><p>${c.held || ""}</p></details>
      <details><summary>Simple analogy</summary><p>${c.analogy || ""}</p></details>
      <div class="takeaway">📌 <b>Takeaway:</b> ${c.take || ""}</div>
      <div class="example">🎯 <b>How asked:</b> ${c.asked || ""}</div>`;
    grid.appendChild(d);
  });
}

/* ---------- WIRING ---------- */
document.querySelectorAll("[data-tab]").forEach(b => { b.onclick = () => switchTab(b.dataset.tab); });
document.querySelector("[data-goto-quiz]").onclick = () => switchTab("quiz");
$("#loadBank").onclick = loadBank;
function resetQuiz() {
  $("#resultCard").hidden = true;
  const ac = $("#analysisCard");
  if (ac) ac.hidden = true;
  quiz.qi = 0; quiz.score = 0; quiz.answers = []; quiz.locked = false; quiz.submitted = false;
  if (quiz.exam) { quiz.t0 = Date.now(); startTimer(); } else { stopTimer(); }
  syncModeBtn();
  renderQ();
}
$("#restartQuiz").onclick = resetQuiz;
$("#retryBtn").onclick = resetQuiz;
const mtb = $("#masterTestBtn");
if (mtb) mtb.onclick = () => {
  if (quiz.exam && !quiz.submitted) loadTopicQuiz();
  else startMasterTest();
};
const lmx = $("#loadMix");
if (lmx) lmx.onclick = () => loadMixPractice();
$("#reviewBtn").onclick = () => { $("#resultCard").hidden = true; renderReview(); };
$("#searchBox").addEventListener("input", e => renderSidebar(e.target.value));
$("#caseSearch").addEventListener("input", renderCases);
$("#caseTag").addEventListener("change", renderCases);
document.querySelectorAll("#crumb").forEach(() => {});
$("#crumb").addEventListener("click", e => {
  const b = e.target.closest("button[data-crumb]");
  if (b) loadTopic(currentId);
});
$("#markDone").onclick = () => {
  const d = new Set(store.done);
  if (d.has(currentId)) d.delete(currentId); else d.add(currentId);
  store.done = [...d];
  renderSidebar($("#searchBox").value || "");
  $("#markDone").textContent = store.done.includes(currentId) ? "✓ Completed — tap to undo" : "✓ Mark as complete";
};
$("#resetBtn").onclick = () => { if (confirm("Reset all progress?")) { store.done = []; renderSidebar(); } };
$("#prevTopic").onclick = () => stepTopic(-1);
$("#nextTopic").onclick = () => stepTopic(1);
function stepTopic(dir) {
  const i = FLAT_ORDER.indexOf(currentId);
  const n = FLAT_ORDER[(i + dir + FLAT_ORDER.length) % FLAT_ORDER.length];
  if (topicById(n)) loadTopic(n);
}

const sidebar = $("#sidebar"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
function closeMobile() { sidebar.classList.remove("open"); scrim.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }
menuBtn.onclick = () => {
  const open = sidebar.classList.toggle("open");
  scrim.hidden = !open;
  menuBtn.setAttribute("aria-expanded", open);
};
scrim.onclick = closeMobile;

/* ---------- INIT ---------- */
(function initModeSel() {
  const sel = $("#modeSel");
  if (!sel) return;
  const MODES = [
    ["full", "Full 45 (20 core + 10 adv + 5 analy + 5 curr + 5 SI)"],
    ["core", "Core 20"],
    ["hard", "Advanced 10"],
    ["analy", "Analytical 5"],
    ["curr", "Current 5"],
    ["si", "SI-Field 5"],
    ["ca", "Analytical 10"],
  ];
  sel.innerHTML = MODES.map(([v, l]) => `<option value="${v}">${l}</option>`).join("");
})();
renderSidebar();
renderCases();
loadTopic("fr_art14");
