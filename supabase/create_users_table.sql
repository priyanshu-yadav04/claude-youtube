-- ================================================
-- VidSync Database Schema
-- Run this in Supabase SQL Editor
-- ================================================

-- Drop existing table if you want a fresh start (uncomment if needed)
-- DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    clerk_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Disable RLS since we use service_role key from server actions
-- (service_role key already bypasses RLS, but disabling avoids
--  issues if you ever use the anon key for reads)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
