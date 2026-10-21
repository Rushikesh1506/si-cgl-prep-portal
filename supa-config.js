/* supa-config.js — Supabase project connection (public anon key, safe to commit).
   The anon key is meant to be embedded in client-side code for a static site;
   it is NOT a secret — see supabase_schema.sql for the RLS policies that gate it. */
"use strict";
const SUPA_URL = "https://pziuyiiveokamnsndebt.supabase.co";
const SUPA_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6aXV5aWl2ZW9rYW1uc25kZWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1NzQ4NjcsImV4cCI6MjEwODE1MDg2N30.Bs5uMNaPwmAj4EvpXjE78NTPexc7l16Y53DuOYWYcQY";
