/*
# Create products table (single-tenant, public catalog)

1. New Tables
- `products`
  - `id` (uuid, primary key)
  - `name` (text, not null) — product display name
  - `slug` (text, unique, not null) — URL slug
  - `price` (numeric, not null) — current price in PKR
  - `category` (text, not null) — category display name (e.g. "Fresh Milk")
  - `category_slug` (text, not null) — category URL slug (e.g. "fresh-milk")
  - `image_url` (text, not null) — primary image URL (Pexels)
  - `images` (jsonb, not null default '[]') — array of image URLs
  - `stock` (integer, not null default 0) — inventory count
  - `in_stock` (boolean, not null default true) — availability flag
  - `discount` (numeric, default 0) — discount percentage (0 = none)
  - `is_featured` (boolean, not null default false) — bestseller flag
  - `unit` (text, not null) — unit label (e.g. "1 Litre")
  - `old_price` (numeric, nullable) — original price before discount
  - `rating` (numeric, not null default 5) — average rating (0-5)
  - `reviews` (integer, not null default 0) — review count
  - `short_description` (text, not null) — one-line summary
  - `description` (text, not null) — full description
  - `badge` (text, nullable) — optional badge label (e.g. "Bestseller")
  - `features` (jsonb, not null default '[]') — array of feature strings
  - `nutrition` (jsonb, not null default '[]') — array of {label, value} objects
  - `created_at` (timestamptz, default now())
2. Indexes
  - Unique index on `slug`
  - Index on `category_slug` for category filtering
  - Index on `is_featured` for bestseller queries
3. Security
  - Enable RLS on `products`.
  - Public read-only access for anon + authenticated (catalog is shared, no sign-in required).
  - No insert/update/delete policies — data is managed via migrations only.
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  price numeric(10, 2) NOT NULL,
  category text NOT NULL,
  category_slug text NOT NULL,
  image_url text NOT NULL,
  images jsonb NOT NULL DEFAULT '[]'::jsonb,
  stock integer NOT NULL DEFAULT 0,
  in_stock boolean NOT NULL DEFAULT true,
  discount numeric(5, 2) NOT NULL DEFAULT 0,
  is_featured boolean NOT NULL DEFAULT false,
  unit text NOT NULL,
  old_price numeric(10, 2),
  rating numeric(2, 1) NOT NULL DEFAULT 5.0,
  reviews integer NOT NULL DEFAULT 0,
  short_description text NOT NULL,
  description text NOT NULL,
  badge text,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  nutrition jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_products_category_slug ON products(category_slug);
CREATE INDEX IF NOT EXISTS idx_products_is_featured ON products(is_featured) WHERE is_featured = true;

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);
