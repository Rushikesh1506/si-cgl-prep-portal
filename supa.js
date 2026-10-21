/* supa.js — thin Supabase sync wrapper for the AP-SI prep portal.
   Every call here is additive and best-effort: localStorage stays the source
   of truth for the UI (so the site keeps working offline / if Supabase is
   unreachable), this just mirrors writes so a mentor can view progress
   remotely. Requires supa-config.js (SUPA_URL/SUPA_ANON_KEY) and the
   supabase-js UMD build to be loaded first — see login.html for the script
   order to copy into other pages. */
"use strict";

window.Supa = (function () {
  const SESSION_KEY = "si_session";
  let client = null;

  function getClient() {
    if (client) return client;
    if (typeof supabase === "undefined" || typeof SUPA_URL === "undefined" || typeof SUPA_ANON_KEY === "undefined") return null;
    client = supabase.createClient(SUPA_URL, SUPA_ANON_KEY);
    return client;
  }

  function session() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch (e) { return null; }
  }
  function setSession(s) { localStorage.setItem(SESSION_KEY, JSON.stringify(s)); }
  function logout() { localStorage.removeItem(SESSION_KEY); }

  async function sha256Hex(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  /* name: a real profile name (e.g. "KrishnaChetan", "Rushikesh"), pin: 4-digit
     string, defaultRole: used only the FIRST time this name signs in (creates
     the profile). First login for a name creates that profile with the given
     PIN; later logins must match regardless of defaultRole. This is "family-
     grade" gating, not real auth — see supabase_schema.sql for the accepted
     security tradeoff. */
  async function login(name, pin, defaultRole) {
    const c = getClient();
    if (!c) throw new Error("Supabase not configured (check supa-config.js and your network connection).");
    const pin_hash = await sha256Hex(name + ":" + pin);
    const { data: existing, error: selErr } = await c.from("profiles").select("*").eq("name", name).maybeSingle();
    if (selErr) throw selErr;
    let profile = existing;
    if (!profile) {
      const role = defaultRole || "student";
      const { data: created, error: insErr } = await c.from("profiles").insert({ name, pin_hash, role }).select().single();
      if (insErr) throw insErr;
      profile = created;
    } else if (profile.pin_hash !== pin_hash) {
      throw new Error("Wrong PIN for " + name);
    }
    const sess = { id: profile.id, name: profile.name, role: profile.role };
    setSession(sess);
    return sess;
  }

  async function saveProgress(topicKey, done) {
    const s = session(), c = getClient();
    if (!s || !c) return;
    try {
      await c.from("study_progress").upsert(
        { profile_id: s.id, topic_key: topicKey, done, updated_at: new Date().toISOString() },
        { onConflict: "profile_id,topic_key" }
      );
    } catch (e) { console.warn("Supa.saveProgress failed", e); }
  }

  /* Returns the new exam_attempts row id (or null on failure) so the caller
     can pass it into saveQuestionAttempts. */
  async function saveAttempt(examKey, score, total, pct, timeTakenSec) {
    const s = session(), c = getClient();
    if (!s || !c) return null;
    try {
      const { data, error } = await c
        .from("exam_attempts")
        .insert({ profile_id: s.id, exam_key: examKey, score, total, pct, time_taken_sec: timeTakenSec || null })
        .select()
        .single();
      if (error) throw error;
      return data.id;
    } catch (e) { console.warn("Supa.saveAttempt failed", e); return null; }
  }

  /* rows: [{q_index, topic, trapcat, picked, correct, is_correct}, ...] */
  async function saveQuestionAttempts(examKey, attemptId, rows) {
    const s = session(), c = getClient();
    if (!s || !c || !attemptId || !rows || !rows.length) return;
    try {
      const payload = rows.map((r) => ({
        attempt_id: attemptId,
        profile_id: s.id,
        exam_key: examKey,
        q_index: r.q_index,
        topic: r.topic || null,
        trapcat: r.trapcat || null,
        picked: r.picked,
        correct: r.correct,
        is_correct: !!r.is_correct,
      }));
      await c.from("question_attempts").insert(payload);
    } catch (e) { console.warn("Supa.saveQuestionAttempts failed", e); }
  }

  async function saveFocus(topicKey, rating) {
    const s = session(), c = getClient();
    if (!s || !c) return;
    try {
      await c.from("topic_focus").upsert(
        { profile_id: s.id, topic_key: topicKey, rating, updated_at: new Date().toISOString() },
        { onConflict: "profile_id,topic_key" }
      );
    } catch (e) { console.warn("Supa.saveFocus failed", e); }
  }

  async function studentByName(name) {
    const c = getClient();
    if (!c) return null;
    const { data, error } = await c.from("profiles").select("*").eq("name", name).maybeSingle();
    if (error) { console.warn("Supa.studentByName failed", error); return null; }
    return data;
  }

  /* Joins everything a mentor view needs for one profile id, in parallel. */
  async function mentorData(profileId) {
    const c = getClient();
    if (!c) return null;
    const [progress, attempts, qAttempts, focus] = await Promise.all([
      c.from("study_progress").select("*").eq("profile_id", profileId),
      c.from("exam_attempts").select("*").eq("profile_id", profileId).order("submitted_at", { ascending: true }),
      c.from("question_attempts").select("*").eq("profile_id", profileId),
      c.from("topic_focus").select("*").eq("profile_id", profileId),
    ]);
    return {
      progress: progress.data || [],
      attempts: attempts.data || [],
      qAttempts: qAttempts.data || [],
      focus: focus.data || [],
    };
  }

  return { session, login, logout, saveProgress, saveAttempt, saveQuestionAttempts, saveFocus, studentByName, mentorData };
})();
