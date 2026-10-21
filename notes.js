/* notes.js - rendering engine for notes.html (v2).
   Reads NOTES_TREE (notes-data.js) and renders:
     - Subject > Unit > Lesson sidebar with counts, search, done ticks
     - lesson article (In-short summary, headings, on-this-page TOC)
     - breadcrumbs, pager with titles, reading-progress bar, theme toggle
   No framework, no build step. Progress in localStorage under si_notes_done_v2. */

"use strict";

(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const STORAGE_KEY = "si_notes_done_v2";
  const THEME_KEY = "si_notes_theme";

  /* ---------- Progress store ---------- */
  const store = {
    get done() { try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); } catch (e) { return new Set(); } },
    save(set) { localStorage.setItem(STORAGE_KEY, JSON.stringify([...set])); },
  };

  const state = { currentKey: null, filter: "" };

  /* ---------- Flat index ---------- */
  const flat = [];
  const byKey = new Map();
  NOTES_TREE.forEach((s) => (s.units || []).forEach((u) => (u.lessons || []).forEach((l) => {
    const rec = { subject: s, unit: u, lesson: l, key: `${s.slug}/${u.slug}/${l.slug}` };
    flat.push(rec); byKey.set(rec.key, rec);
  })));

  const chapterCount = (s) => (s.units || []).reduce((n, u) => n + (u.lessons || []).length, 0);
  const escapeHtml = (t) => String(t == null ? "" : t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const readingLabel = (min) => `⏱ ${min || 15} min read`;

  const ICONS = [
    [/history/i, "📜"], [/polity|constitution/i, "🏛️"], [/geography/i, "🌍"],
    [/economy/i, "📈"], [/science/i, "🔬"], [/environment|ecology/i, "🌱"],
    [/andhra/i, "🪷"], [/arithmetic|maths/i, "🧮"], [/reasoning/i, "🧩"],
    [/english/i, "🔤"], [/telugu/i, "✍️"], [/current/i, "📰"],
    [/disaster/i, "🚨"], [/general knowledge|gk/i, "🎓"],
  ];
  const iconFor = (s) => (ICONS.find(([re]) => re.test(s)) || [, "📘"])[1];

  /* ---------- Sidebar ---------- */
  function renderSidebar() {
    const nav = $("#nav");
    nav.innerHTML = "";
    const filter = state.filter.trim().toLowerCase();
    const done = store.done;
    let visibleSubjects = 0;

    NOTES_TREE.forEach((s) => {
      const lessons = [];
      s.units.forEach((u) => u.lessons.forEach((l) => lessons.push({ unit: u, lesson: l })));
      const hit = (name) => !filter || name.toLowerCase().includes(filter) || s.subject.toLowerCase().includes(filter);
      if (filter && !lessons.some((r) => hit(r.lesson.lesson))) return;
      visibleSubjects++;

      const subj = document.createElement("section");
      subj.className = "subject" + (filter || visibleSubjects <= 2 ? " open" : "");

      const head = document.createElement("button");
      head.className = "subject-head";
      head.type = "button";
      head.setAttribute("aria-expanded", String(subj.classList.contains("open")));
      head.innerHTML =
        `<span class="ico" aria-hidden="true">${iconFor(s.subject)}</span>` +
        `<span>${escapeHtml(s.subject)}</span>` +
        `<span class="count">${chapterCount(s)}</span>` +
        `<span class="chev" aria-hidden="true">▾</span>`;
      head.addEventListener("click", () => {
        const open = subj.classList.toggle("open");
        head.setAttribute("aria-expanded", String(open));
      });
      subj.appendChild(head);

      const body = document.createElement("div");
      body.className = "subject-body";

      s.units.forEach((u) => {
        const unitLessons = u.lessons.filter((l) => !filter || hit(l.lesson) || u.unit.toLowerCase().includes(filter));
        if (filter && unitLessons.length === 0) return;

        const unit = document.createElement("div");
        unit.className = "unit" + (filter ? " open" : "");
        const uh = document.createElement("button");
        uh.className = "unit-head";
        uh.type = "button";
        uh.innerHTML = `<span class="chev" aria-hidden="true">▸</span><span>${escapeHtml(u.unit)}</span>`;
        uh.addEventListener("click", () => unit.classList.toggle("open"));
        unit.appendChild(uh);

        const ub = document.createElement("div");
        ub.className = "unit-body";
        unitLessons.forEach((l) => {
          const key = `${s.slug}/${u.slug}/${l.slug}`;
          const link = document.createElement("button");
          link.className = "lesson-link" + (key === state.currentKey ? " active" : "");
          link.type = "button";
          link.innerHTML =
            `<span class="dot" aria-hidden="true"></span>` +
            `<span>${escapeHtml(l.lesson)}</span>` +
            (done.has(key) ? `<span class="done" aria-hidden="true">✓</span>`
              : (l.content == null ? `<span class="soon">soon</span>` : ""));
          link.addEventListener("click", () => openLesson(key, true));
          ub.appendChild(link);
        });
        unit.appendChild(ub);
        body.appendChild(unit);
      });

      subj.appendChild(body);
      nav.appendChild(subj);
    });

    if (filter && visibleSubjects === 0) {
      nav.innerHTML = `<p style="padding:16px;text-align:center;color:var(--muted);font-size:.85rem;">No lessons match “${escapeHtml(state.filter)}”.</p>`;
    }

    const total = flat.length;
    const pct = total ? Math.round((done.size / total) * 100) : 0;
    $("#progressPct").textContent = pct + "%";
    const arc = $("#prArc");
    if (arc) arc.style.strokeDashoffset = String(100.5 - (100.5 * pct) / 100);
  }

  /* ---------- Headings -> ids for TOC ---------- */
  function decorateHeadings(article) {
    const used = new Set();
    const heads = $$("h2, h3", article);
    heads.forEach((h) => {
      let id = h.id || h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      while (used.has(id)) id += "-x";
      used.add(id);
      h.id = id;
    });
    return heads;
  }

  function renderToc(heads) {
    const toc = $("#toc");
    if (!toc) return;
    if (!heads.length) { toc.innerHTML = ""; return; }
    toc.innerHTML = `<p class="toc-title">On this page</p>` +
      heads.filter((h) => h.tagName === "H2").map((h) =>
        `<a href="#${h.id}">${escapeHtml(h.textContent.trim())}</a>`).join("");
    const links = $$("a", toc);
    if (!links.length) { toc.innerHTML = ""; return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-84px 0px -70% 0px" });
    heads.filter((h) => h.tagName === "H2").forEach((h) => obs.observe(h));
  }

  /* ---------- Placeholder ---------- */
  const BLUEPRINT = [
    ["01", "Concept", "Plain-English definition and the exam-relevant core, in 2–3 short paragraphs."],
    ["02", "Key facts", "Dates, articles, figures and classifications — the recall layer."],
    ["03", "AP angle", "Andhra Pradesh / Telangana-specific facts this paper favours."],
    ["04", "PYQ + traps", "Previous-year question patterns and the common wrong turns."],
    ["05", "Diagram / table", "One revision table or flow diagram for last-minute revision."],
    ["06", "Practice", "8–12 MCQs with worked explanations."],
  ];
  function placeholderHtml(rec) {
    return (
      `<div class="placeholder">` +
      `<div class="big" aria-hidden="true">🚧</div>` +
      `<h2>Notes are not written yet</h2>` +
      `<p><b>${escapeHtml(rec.lesson.lesson)}</b> belongs to <b>${escapeHtml(rec.subject.subject)} → ${escapeHtml(rec.unit.unit)}</b>. ` +
      `The page shell, navigation and progress tracking are live — only the content is pending.</p>` +
      `<div class="blueprint">` +
      BLUEPRINT.map(([n, t, d]) => `<div class="bp-card"><div class="n">${n}</div><div class="bt">${escapeHtml(t)}</div><div class="bd">${escapeHtml(d)}</div></div>`).join("") +
      `</div></div>`
    );
  }

  /* ---------- Lesson ---------- */
  function openLesson(key, scrollTop) {
    const rec = byKey.get(key);
    if (!rec) return;
    state.currentKey = key;
    const { subject, unit, lesson } = rec;

    const crumb = $("#crumbs");
    crumb.innerHTML = "";
    [subject.subject, unit.unit].forEach((label) => {
      const b = document.createElement("button");
      b.textContent = label;
      b.addEventListener("click", () => { state.filter = label; $("#searchBox").value = label; renderSidebar(); });
      crumb.appendChild(b);
      const sep = document.createElement("span");
      sep.className = "sep"; sep.textContent = "›";
      crumb.appendChild(sep);
    });
    const here = document.createElement("b");
    here.textContent = lesson.lesson;
    crumb.appendChild(here);

    const portedContent = (typeof NOTES_CONTENT !== "undefined" && NOTES_CONTENT[key]) || null;
    const content = portedContent || lesson.content;

    $("#heroKicker").textContent = `${subject.subject} • ${unit.unit}`;
    $("#heroTitle").textContent = lesson.lesson;
    const written = content != null;
    $("#heroLead").textContent = written ? `${lesson.lesson} — study notes.` : "Skeleton page — notes to be written.";
    $("#heroMeta").innerHTML =
      `<span class="chip">${readingLabel(lesson.minutes)}</span>` +
      (written ? `<span class="chip ok">✓ Written</span>` : `<span class="chip warn">🚧 Content pending</span>`);

    const article = $("#article");
    article.innerHTML = written ? content : placeholderHtml(rec);
    const heads = decorateHeadings(article);
    renderToc(heads);

    const done = store.done;
    const mb = $("#markDone");
    mb.textContent = done.has(key) ? "✓ Completed — undo" : "✓ Mark complete";
    mb.classList.toggle("is-done", done.has(key));

    const idx = flat.findIndex((r) => r.key === key);
    const prev = flat[idx - 1], next = flat[idx + 1];
    $("#prevLesson").disabled = !prev;
    $("#nextLesson").disabled = !next;
    $("#prevTitle").textContent = prev ? prev.lesson.lesson : "";
    $("#nextTitle").textContent = next ? next.lesson.lesson : "";

    document.title = `${lesson.lesson} — AP SI Notes`;
    $("#docMeta").textContent = `${subject.subject} › ${unit.unit}`;
    renderSidebar();
    window.scrollTo({ top: 0, behavior: scrollTop ? "smooth" : "auto" });
    closeMobile();
  }

  /* ---------- Actions ---------- */
  function toggleDone() {
    if (!state.currentKey) return;
    const d = store.done;
    const nowDone = !d.has(state.currentKey);
    nowDone ? d.add(state.currentKey) : d.delete(state.currentKey);
    store.save(d);
    if (window.Supa) Supa.saveProgress(state.currentKey, nowDone);
    openLesson(state.currentKey, false);
  }
  function step(delta) {
    const i = flat.findIndex((r) => r.key === state.currentKey);
    const n = flat[i + delta];
    if (n) openLesson(n.key, true);
  }

  /* ---------- Reading progress ---------- */
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    $("#readbar").style.width = pct + "%";
  }

  /* ---------- Theme ---------- */
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    const btn = $("#themeBtn");
    if (btn) btn.textContent = t === "dark" ? "☀" : "☾";
  }
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  /* ---------- Mobile ---------- */
  function openMobile() { $("#sidebar").classList.add("open"); $("#scrim").hidden = false; $("#menuBtn").setAttribute("aria-expanded", "true"); }
  function closeMobile() { $("#sidebar").classList.remove("open"); $("#scrim").hidden = true; $("#menuBtn").setAttribute("aria-expanded", "false"); }

  /* ---------- Boot ---------- */
  function init() {
    if (typeof NOTES_TREE === "undefined" || !NOTES_TREE.length) {
      $("#nav").innerHTML = `<p style="padding:16px;color:var(--muted);">notes-data.js did not load.</p>`;
      return;
    }
    applyTheme(localStorage.getItem(THEME_KEY) || "light");
    $("#statSubjects").textContent = String(NOTES_TREE.length);
    $("#statLessons").textContent = String(flat.length);
    $("#searchBox").placeholder = `Search ${flat.length} lessons…`;

    $("#menuBtn").addEventListener("click", () => $("#sidebar").classList.contains("open") ? closeMobile() : openMobile());
    $("#scrim").addEventListener("click", closeMobile);
    $("#themeBtn").addEventListener("click", toggleTheme);
    $("#markDone").addEventListener("click", toggleDone);
    $("#prevLesson").addEventListener("click", () => step(-1));
    $("#nextLesson").addEventListener("click", () => step(1));
    $("#resetBtn").addEventListener("click", () => {
      if (confirm("Reset all notes progress in this browser?")) { store.save(new Set()); renderSidebar(); if (state.currentKey) openLesson(state.currentKey, false); }
    });

    let t = null;
    $("#searchBox").addEventListener("input", (e) => {
      clearTimeout(t);
      const v = e.target.value;
      t = setTimeout(() => { state.filter = v; renderSidebar(); }, 110);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== $("#searchBox")) { e.preventDefault(); $("#searchBox").focus(); }
    });
    window.addEventListener("scroll", onScroll, { passive: true });

    renderSidebar();
    const first = flat.find((r) => r.lesson.content != null) || flat[0];
    if (first) openLesson(first.key, false);
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
