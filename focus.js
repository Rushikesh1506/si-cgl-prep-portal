/* focus.js — renders SYLLABUS_FOCUS (syllabus-focus-data.js) as a collapsible,
   self-rated checklist. Ratings persist to localStorage (si_topic_focus) and,
   when signed in, sync to Supabase (topic_focus table) via supa.js — same
   additive/non-blocking pattern as notes.js/script.js's progress tracking.
   Subjects flagged weak by a diagnostic mock (localStorage key
   apsi_diag_weak_subjects, an array of SYLLABUS_FOCUS `slug`s, written by
   ap-mains-diagnostic.html) get a "suggested" badge the student can confirm
   or override by rating normally. */
"use strict";

(function () {
  const STORAGE_KEY = "si_topic_focus";
  const WEAK_HINT_KEY = "apsi_diag_weak_subjects";

  const store = {
    get all() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch (e) { return {}; } },
    set(key, rating) {
      const d = store.all; d[key] = rating;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
    },
  };
  function suggestedWeakSubjects() {
    try { return new Set(JSON.parse(localStorage.getItem(WEAK_HINT_KEY) || "[]")); } catch (e) { return new Set(); }
  }

  const escapeHtml = (t) => String(t == null ? "" : t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function renderSummary() {
    const ratings = store.all;
    let weak = 0, medium = 0, strong = 0, unrated = 0, total = 0;
    SYLLABUS_FOCUS.forEach((s) => s.topics.forEach((t) => {
      total++;
      const r = ratings[t.key];
      if (r === "weak") weak++; else if (r === "medium") medium++; else if (r === "strong") strong++; else unrated++;
    }));
    document.getElementById("summary").innerHTML =
      `<div class="sum-chip weak"><b>${weak}</b><span>Weak</span></div>` +
      `<div class="sum-chip medium"><b>${medium}</b><span>Medium</span></div>` +
      `<div class="sum-chip strong"><b>${strong}</b><span>Strong</span></div>` +
      `<div class="sum-chip unrated"><b>${unrated}</b><span>Not yet rated / ${total} total</span></div>`;
  }

  function miniBar(subject, ratings) {
    const n = subject.topics.length;
    let weak = 0, medium = 0, strong = 0;
    subject.topics.forEach((t) => {
      const r = ratings[t.key];
      if (r === "weak") weak++; else if (r === "medium") medium++; else if (r === "strong") strong++;
    });
    const unrated = n - weak - medium - strong;
    const pct = (x) => (x / n) * 100;
    return `<div class="mini-bar" title="${weak} weak · ${medium} medium · ${strong} strong · ${unrated} unrated">` +
      `<span style="width:${pct(weak)}%;background:var(--red)"></span>` +
      `<span style="width:${pct(medium)}%;background:var(--amber)"></span>` +
      `<span style="width:${pct(strong)}%;background:var(--green)"></span>` +
      `</div>`;
  }

  function rateButtons(topicKey, current) {
    return ["weak", "medium", "strong"].map((r) =>
      `<button data-r="${r}" data-key="${escapeHtml(topicKey)}" class="${current === r ? "active" : ""}">${r[0].toUpperCase() + r.slice(1)}</button>`
    ).join("");
  }

  function render() {
    const ratings = store.all;
    const weakSubjects = suggestedWeakSubjects();
    const hashSlug = decodeURIComponent(location.hash.replace(/^#/, ""));
    const container = document.getElementById("subjects");
    container.innerHTML = SYLLABUS_FOCUS.map((s, i) => {
      const suggested = weakSubjects.has(s.slug) ? `<span class="suggested">⚠ diagnostic: weak</span>` : "";
      const isOpen = hashSlug ? s.slug === hashSlug : i === 0;
      return (
        `<div class="subject${isOpen ? " open" : ""}" data-slug="${s.slug}">` +
        `<div class="subject-head">` +
        `<span class="caret">▶</span>` +
        `<div><h2>${escapeHtml(s.subject)} ${suggested}</h2><div class="stage">${escapeHtml(s.stage)}</div></div>` +
        miniBar(s, ratings) +
        `</div>` +
        `<div class="topics">` +
        s.topics.map((t) => (
          `<div class="topic-row">` +
          `<div class="topic-main"><div class="topic-name">${escapeHtml(t.name)}</div><div class="topic-note">${escapeHtml(t.note)}</div></div>` +
          `<div class="rate">${rateButtons(t.key, ratings[t.key])}</div>` +
          `</div>`
        )).join("") +
        `</div>` +
        `</div>`
      );
    }).join("");
    renderSummary();
  }

  document.getElementById("subjects").addEventListener("click", (e) => {
    const head = e.target.closest(".subject-head");
    if (head) { head.parentElement.classList.toggle("open"); return; }
    const btn = e.target.closest(".rate button");
    if (btn) {
      store.set(btn.dataset.key, btn.dataset.r);
      if (window.Supa) Supa.saveFocus(btn.dataset.key, btn.dataset.r);
      render();
    }
  });

  render();
  if (location.hash) {
    const target = document.querySelector(`.subject[data-slug="${CSS.escape(decodeURIComponent(location.hash.slice(1)))}"]`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
