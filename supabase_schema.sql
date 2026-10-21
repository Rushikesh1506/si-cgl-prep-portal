-- AP-SI Prep Portal — Supabase schema
-- Run this ONCE in your Supabase project's SQL Editor (Dashboard -> SQL Editor -> New query -> paste -> Run).
-- Safe to re-run: every statement uses IF NOT EXISTS / DROP POLICY IF EXISTS first.

-- 1. profiles — one row per person using the portal (A = brother, B = friend, mentor = you)
create table if not exists profiles (
  id          uuid primary key default gen_random_uuid(),
  name        text not null unique,              -- 'A' | 'B' | 'mentor'
  pin_hash    text not null,                      -- sha-256 hex of the 4-digit PIN (hashed client-side, not real auth)
  role        text not null default 'student',    -- 'student' | 'mentor'
  created_at  timestamptz not null default now()
);

-- 2. study_progress — one row per (profile, topic) marked done, replaces si_done / si_notes_done_v2
create table if not exists study_progress (
  id          bigint generated always as identity primary key,
  profile_id  uuid not null references profiles(id) on delete cascade,
  topic_key   text not null,                      -- e.g. "polity/rights-and-duties/fundamental-rights" or an articles.js id
  done        boolean not null default true,
  updated_at  timestamptz not null default now(),
  unique (profile_id, topic_key)
);

-- 3. exam_attempts — one row per submitted mock/quiz
create table if not exists exam_attempts (
  id              bigint generated always as identity primary key,
  profile_id      uuid not null references profiles(id) on delete cascade,
  exam_key        text not null,                  -- e.g. "apsi_diag_mains2023_gs", "cgl_exam_mock5_v1"
  score           numeric not null,
  total           numeric not null,
  pct             numeric not null,
  time_taken_sec  integer,
  submitted_at    timestamptz not null default now()
);

-- 4. question_attempts — per-question result inside an exam_attempts row (powers weak-topic analysis)
create table if not exists question_attempts (
  id          bigint generated always as identity primary key,
  attempt_id  bigint not null references exam_attempts(id) on delete cascade,
  profile_id  uuid not null references profiles(id) on delete cascade,
  exam_key    text not null,
  q_index     integer not null,
  topic       text,
  trapcat     text,
  picked      integer,
  correct     integer,
  is_correct  boolean,
  created_at  timestamptz not null default now()
);

-- 5. topic_focus — student's own self-rating of each syllabus subtopic (new, powers the Focus Survey)
create table if not exists topic_focus (
  id          bigint generated always as identity primary key,
  profile_id  uuid not null references profiles(id) on delete cascade,
  topic_key   text not null,                      -- matches notes-data.js / syllabus-focus-data.js slugs
  rating      text not null check (rating in ('weak','medium','strong')),
  updated_at  timestamptz not null default now(),
  unique (profile_id, topic_key)
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- This is a 2-person family prep tool, not a multi-tenant product. The anon
-- key is necessarily embedded in the static site's client JS (standard
-- Supabase practice for static sites), and login is a 4-digit PIN, not real
-- Supabase Auth — so per-row restriction by auth.uid() isn't meaningful here.
-- RLS is enabled (so nothing is open by accident later) but policies are
-- permissive for the anon role: this matches the already-agreed "family-grade
-- security is acceptable, mentor holds reset" decision. Do not reuse this
-- schema/key for anything with real end-user data.
-- ---------------------------------------------------------------------------

alter table profiles         enable row level security;
alter table study_progress   enable row level security;
alter table exam_attempts    enable row level security;
alter table question_attempts enable row level security;
alter table topic_focus      enable row level security;

drop policy if exists anon_all_profiles on profiles;
create policy anon_all_profiles on profiles for all to anon using (true) with check (true);

drop policy if exists anon_all_study_progress on study_progress;
create policy anon_all_study_progress on study_progress for all to anon using (true) with check (true);

drop policy if exists anon_all_exam_attempts on exam_attempts;
create policy anon_all_exam_attempts on exam_attempts for all to anon using (true) with check (true);

drop policy if exists anon_all_question_attempts on question_attempts;
create policy anon_all_question_attempts on question_attempts for all to anon using (true) with check (true);

drop policy if exists anon_all_topic_focus on topic_focus;
create policy anon_all_topic_focus on topic_focus for all to anon using (true) with check (true);

-- Done. Verify: Table Editor should now show 5 tables (profiles, study_progress,
-- exam_attempts, question_attempts, topic_focus), each with RLS "enabled".
