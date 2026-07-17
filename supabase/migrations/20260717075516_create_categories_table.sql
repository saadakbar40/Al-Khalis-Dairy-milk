/*
# Create categories table (single-tenant, public catalog)

1. New Tables
- `categories`
  - `id` (uuid, primary key)
  - `slug` (text, unique, not null) — URL slug
  - `name` (text, not null) — display name
  - `tagline` (text, not null) — short marketing tagline
  - `description` (text, not null) — full category description
  - `image` (text, not null) — Pexels image URL
  - `icon` (text, not null) — lucide icon name
  - `created_at` (timestamptz, default now())
2. Security
  - Enable RLS on `categories`.
  - Public read-only access for anon + authenticated.
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  tagline text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_categories" ON categories;
CREATE POLICY "anon_select_categories" ON categories FOR SELECT
  TO anon, authenticated USING (true);
