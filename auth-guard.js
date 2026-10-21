/* auth-guard.js - the portal now requires sign-in. Include this as the FIRST
   script in <head> (before any stylesheet/content) on every protected page -
   it only reads localStorage (synchronous, no Supabase round-trip needed) so
   it blocks render before anything flashes on screen. login.html itself must
   NOT include this file, or every failed check would redirect back into a
   loop. */
(function () {
  "use strict";
  try {
    var s = JSON.parse(localStorage.getItem("si_session") || "null");
    if (!s || !s.id || !s.name) {
      location.replace("login.html");
    }
  } catch (e) {
    location.replace("login.html");
  }
})();
