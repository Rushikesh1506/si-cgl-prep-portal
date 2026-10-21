/* welcome.js - AP SI Prep command center: computes everything live from the
   same data files the rest of the site already uses (NOTES_TREE, NOTES_CONTENT,
   SYLLABUS_FOCUS, AP_MAINS_MOCKS) plus localStorage/Supabase progress - no
   hardcoded counts to go stale. */
"use strict";

(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const THEME_KEY = "si_notes_theme";
  const NOTES_DONE_KEY = "si_notes_done_v2";
  const FOCUS_KEY = "si_topic_focus";
  const WEAK_HINT_KEY = "apsi_diag_weak_subjects";
  const LAST_RESULT_KEY = "apsi_diag_last_result";

  const ICONS = {
    arithmetic: "🧮", reasoning: "🧠", science: "🔬", "current-affairs": "📰",
    history: "🏛️", geography: "🌍", polity: "⚖️", economy: "💰",
    "english-mains": "✍️", "telugu-mains": "📝",
  };
  /* SYLLABUS_FOCUS slug -> the NOTES_TREE subject slug(s) that cover it, so
     a course card can honestly say how much of it has real written notes. */
  const NOTES_SUBJECT_MAP = {
    economy: ["economy"], geography: ["geography"], history: ["history"], polity: ["polity"],
    science: ["science"], "english-mains": ["english"], "telugu-mains": ["telugu-mains-paper-2"],
    arithmetic: ["arithmetic-pc", "arithmetic-si"], reasoning: ["reasoning-pc", "reasoning-si"],
    "current-affairs": ["current-affairs-india", "current-affairs-andhra-pradesh"],
  };

  const safeJson = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; } };

  /* ---------- Theme (shared key with notes.html, so the whole site agrees) ---------- */
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    const btn = $("#themeBtn");
    if (btn) btn.textContent = t === "dark" ? "☀" : "☾";
  }
  $("#themeBtn").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
  applyTheme(localStorage.getItem(THEME_KEY) || "light");

  /* ---------- Notes lesson coverage (per NOTES_TREE subject slug) ---------- */
  const notesBySubjectSlug = {};
  (typeof NOTES_TREE !== "undefined" ? NOTES_TREE : []).forEach((s) => {
    let total = 0, written = 0;
    (s.units || []).forEach((u) => (u.lessons || []).forEach((l) => {
      total++;
      const key = `${s.slug}/${u.slug}/${l.slug}`;
      if (l.content != null || (typeof NOTES_CONTENT !== "undefined" && NOTES_CONTENT[key])) written++;
    }));
    notesBySubjectSlug[s.slug] = { total, written };
  });
  const totalLessons = Object.values(notesBySubjectSlug).reduce((n, v) => n + v.total, 0);
  const totalWritten = Object.values(notesBySubjectSlug).reduce((n, v) => n + v.written, 0);

  function notesCoverageFor(focusSlug) {
    const subjSlugs = NOTES_SUBJECT_MAP[focusSlug] || [];
    return subjSlugs.reduce((acc, slug) => {
      const v = notesBySubjectSlug[slug];
      if (v) { acc.total += v.total; acc.written += v.written; }
      return acc;
    }, { total: 0, written: 0 });
  }

  /* ---------- Site-wide stat strip ---------- */
  function renderStatStrip() {
    const topicCount = (typeof SYLLABUS_FOCUS !== "undefined" ? SYLLABUS_FOCUS : []).reduce((n, s) => n + s.topics.length, 0);
    const diagCount = (typeof AP_MAINS_MOCKS !== "undefined" && AP_MAINS_MOCKS[0]) ? AP_MAINS_MOCKS[0].questions.length : 0;
    const tiles = [
      { n: (typeof SYLLABUS_FOCUS !== "undefined" ? SYLLABUS_FOCUS.length : 0), label: "Mains subjects mapped" },
      { n: topicCount, label: "Syllabus subtopics, trackable" },
      { n: `${totalWritten}/${totalLessons}`, label: "Notes lessons written" },
      { n: diagCount, label: "Diagnostic questions, verified" },
    ];
    $("#statStrip").innerHTML = tiles.map((t) => `<div class="stat-tile"><b>${t.n}</b><span>${t.label}</span></div>`).join("");
  }

  /* ---------- Course catalog ---------- */
  function renderCatalog() {
    const ratings = safeJson(FOCUS_KEY, {});
    const weakSubjects = new Set(safeJson(WEAK_HINT_KEY, []));
    const grid = $("#catalogGrid");
    if (typeof SYLLABUS_FOCUS === "undefined") { grid.innerHTML = ""; return; }

    grid.innerHTML = SYLLABUS_FOCUS.map((s) => {
      const n = s.topics.length;
      let rated = 0;
      s.topics.forEach((t) => { if (ratings[t.key]) rated++; });
      const coverage = notesCoverageFor(s.slug);
      const pct = n ? Math.round((rated / n) * 100) : 0;
      const weakBadge = weakSubjects.has(s.slug) ? `<span class="badge-weak">⚠ diagnostic: weak</span>` : "";
      const notesLink = coverage.written > 0
        ? `<a class="chip-btn" href="notes.html">Browse notes (${coverage.written}/${coverage.total})</a>`
        : `<a class="chip-btn" href="${s.slug === "polity" ? "notes.html" : "focus.html#" + s.slug}">${coverage.total ? "Notes coming soon" : "Self-rate only"}</a>`;
      return (
        `<div class="course-card">` +
        `<div class="course-top">` +
        `<div class="course-icon">${ICONS[s.slug] || "📚"}</div>` +
        `<div><h3>${s.subject} ${weakBadge}</h3><div class="course-stage">${s.stage}</div></div>` +
        `</div>` +
        `<div class="course-progress"><span style="width:${pct}%"></span></div>` +
        `<div class="course-meta"><span>${n} subtopics</span><span>${rated}/${n} rated</span></div>` +
        `<div class="course-actions">` +
        `<a class="chip-btn primary" href="focus.html#${s.slug}">Rate confidence</a>` +
        notesLink +
        `</div>` +
        `</div>`
      );
    }).join("");
  }

  /* ---------- Hero: session + progress ring ---------- */
  function renderHero() {
    const session = window.Supa ? Supa.session() : null;
    const chip = $("#sessionChip");
    if (session) {
      chip.textContent = "✓ " + session.name;
      chip.classList.remove("signed-out");
      chip.href = session.role === "developer" ? "mentor.html" : "focus.html";
      $("#heroTitle").innerHTML = `Welcome back, <em>${session.name}</em>.`;
      $("#sideHeading").textContent = session.name + "'s progress";
      $("#signInCard").hidden = true;
      $("#devCard").hidden = session.role !== "developer";
    } else {
      $("#devCard").hidden = true;
    }

    const doneSet = safeJson(NOTES_DONE_KEY, []);
    const ratings = safeJson(FOCUS_KEY, {});
    const weakSubjects = safeJson(WEAK_HINT_KEY, []);
    const lastResult = safeJson(LAST_RESULT_KEY, null);

    const topicCount = (typeof SYLLABUS_FOCUS !== "undefined" ? SYLLABUS_FOCUS : []).reduce((n, s) => n + s.topics.length, 0);
    const ratedCount = Object.keys(ratings).length;
    const pct = topicCount ? Math.round((ratedCount / topicCount) * 100) : 0;

    $("#statLessonsDone").textContent = String(doneSet.length);
    $("#statTopicsRated").textContent = `${ratedCount}/${topicCount}`;
    $("#statDiagScore").textContent = lastResult ? `${lastResult.net}/${lastResult.max}` : "—";
    $("#statWeakCount").textContent = String(weakSubjects.length);

    const CIRC = 2 * Math.PI * 34;
    const ring = $("#heroRing");
    ring.setAttribute("stroke-dasharray", String(CIRC));
    ring.setAttribute("stroke-dashoffset", String(CIRC * (1 - pct / 100)));
    $("#heroRingLabel").textContent = pct + "%";
    $("#heroRingHeadline").textContent = pct === 0 ? "Not started yet" : "Self-assessment " + pct + "% done";
    $("#heroRingSub").textContent = session
      ? "Synced to your account"
      : (pct > 0 ? "Saved on this device only — sign in to sync" : "Rate a few topics to get started");
  }

  function init() {
    renderStatStrip();
    renderCatalog();
    renderHero();
  }
  init();
})();
