/*
# Add 7th category and 6 additional products to the catalog

1. New Data
- Inserts a new "Laban & Drinks" category (slug: laban-drinks).
- Inserts 6 new dairy products spanning existing and the new category, bringing the catalog from 16 to 22 products.
2. Security
- No schema changes. Existing anon SELECT policies on products & categories cover the new rows.
3. Notes
- Uses ON CONFLICT (slug) DO NOTHING so it is safe to re-run.
- All image URLs use images.pexels.com with verified photo IDs.
*/

INSERT INTO categories (slug, name, tagline, description, image, icon)
VALUES (
  'laban-drinks',
  'Laban & Drinks',
  'Refreshing & traditional',
  'Traditional laban, ayran, and cultured dairy drinks — naturally refreshing, probiotic-rich, and perfect for hot days or alongside spicy meals.',
  'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'GlassWater'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, price, category, category_slug, image_url, images, stock, in_stock, discount, is_featured, unit, old_price, rating, reviews, short_description, description, badge, features, nutrition) VALUES
(
  'Skimmed Milk', 'skimmed-milk-1l', 150, 'Fresh Milk', 'fresh-milk',
  'https://images.pexels.com/photos/1260699/pexels-photo-1260699.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '["https://images.pexels.com/photos/1260699/pexels-photo-1260699.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200"]'::jsonb,
  55, true, 0, false, '1 Litre', NULL, 4.6, 98,
  'Virtually fat-free milk with all the protein and calcium intact.',
  'Our Skimmed Milk is fully skimmed to remove nearly all fat while keeping the full protein and calcium content. Light, clean, and refreshing — it is the choice for anyone watching their fat intake without compromising on nutrition.',
  NULL,
  '["Less than 0.5% fat","Full protein & calcium","Light & refreshing","Ideal for low-fat diets"]'::jsonb,
  '[{"label":"Energy","value":"34 kcal"},{"label":"Fat","value":"0.5 g"},{"label":"Carbohydrates","value":"5.0 g"},{"label":"Protein","value":"3.4 g"},{"label":"Calcium","value":"125 mg"}]'::jsonb
),
(
  'Organic Cow Milk', 'organic-cow-milk-1l', 240, 'Fresh Milk', 'fresh-milk',
  'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '["https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1200"]'::jsonb,
  40, true, 0, true, '1 Litre', NULL, 4.9, 156,
  'Certified organic whole milk from pasture-raised, antibiotic-free cows.',
  'Our Organic Cow Milk comes from certified organic farms where cows graze on pesticide-free pastures and are never given growth hormones or routine antibiotics. The result is pure, rich, full-flavoured milk the way nature intended.',
  'Organic',
  '["Certified organic","No hormones or antibiotics","Pasture-raised cows","Rich, full flavour"]'::jsonb,
  '[{"label":"Energy","value":"69 kcal"},{"label":"Fat","value":"4.0 g"},{"label":"Carbohydrates","value":"4.9 g"},{"label":"Protein","value":"3.4 g"},{"label":"Calcium","value":"122 mg"}]'::jsonb
),
(
  'Cream Cheese', 'cream-cheese-200g', 390, 'Cheese', 'cheese',
  'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '["https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/414776/pexels-photo-414776.jpeg?auto=compress&cs=tinysrgb&w=1200"]'::jsonb,
  28, true, 0, false, '200 g', NULL, 4.7, 102,
  'Smooth, spreadable cream cheese with a mild, fresh taste.',
  'Our Cream Cheese is whipped to a smooth, spreadable consistency with a mild, fresh flavour. It is incredibly versatile — perfect for bagels, cheesecakes, dips, and frosting. Made fresh with no gums or stabilisers.',
  NULL,
  '["Smooth & spreadable","Mild, fresh flavour","No stabilisers","Great for dips & baking"]'::jsonb,
  '[{"label":"Energy","value":"342 kcal"},{"label":"Fat","value":"34 g"},{"label":"Carbohydrates","value":"4.1 g"},{"label":"Protein","value":"6.2 g"},{"label":"Calcium","value":"97 mg"}]'::jsonb
),
(
  'Paneer', 'paneer-300g', 360, 'Cheese', 'cheese',
  'https://images.pexels.com/photos/414776/pexels-photo-414776.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '["https://images.pexels.com/photos/414776/pexels-photo-414776.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200"]'::jsonb,
  22, true, 0, true, '300 g', NULL, 4.9, 178,
  'Fresh, firm paneer — the perfect cheese for curries and grilling.',
  'Our Paneer is a fresh, firm cheese that holds its shape beautifully when cooked. Made by curdling hot milk with a natural acid, it is the staple cheese for South Asian curries, tikka, and grilled dishes. Mild, milky, and endlessly versatile.',
  'Bestseller',
  '["Fresh & firm","Holds shape when cooked","Ideal for curries & tikka","No preservatives"]'::jsonb,
  '[{"label":"Energy","value":"265 kcal"},{"label":"Fat","value":"20 g"},{"label":"Carbohydrates","value":"3.4 g"},{"label":"Protein","value":"18 g"},{"label":"Calcium","value":"208 mg"}]'::jsonb
),
(
  'Cultured Butter', 'cultured-butter-250g', 420, 'Butter & Ghee', 'butter-ghee',
  'https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '["https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/3617397/pexels-photo-3617397.jpeg?auto=compress&cs=tinysrgb&w=1200"]'::jsonb,
  18, true, 0, false, '250 g', NULL, 4.8, 67,
  'Tangy, rich butter made from cultured cream — a gourmet touch.',
  'Our Cultured Butter is churned from cream that has been gently cultured with live cultures, giving it a distinctive tangy, complex flavour and a rich, creamy texture. A gourmet upgrade for toast, baking, and finishing dishes.',
  'Premium',
  '["Made from cultured cream","Tangy, complex flavour","Rich, creamy texture","Gourmet choice"]'::jsonb,
  '[{"label":"Energy","value":"717 kcal"},{"label":"Fat","value":"81 g"},{"label":"Carbohydrates","value":"0.1 g"},{"label":"Protein","value":"0.9 g"},{"label":"Calcium","value":"24 mg"}]'::jsonb
),
(
  'Ayran', 'ayran-300ml', 100, 'Laban & Drinks', 'laban-drinks',
  'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '["https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1200"]'::jsonb,
  65, true, 0, true, '300 ml', NULL, 4.8, 134,
  'Salty, frothy yogurt drink — the classic accompaniment to grilled meats.',
  'Our Ayran is a traditional salty yogurt drink, whipped until frothy and lightly salted. Refreshing and probiotic-rich, it is the perfect accompaniment to kebabs, biryani, and spicy meals — or simply as a cooling drink on a hot day.',
  'Bestseller',
  '["Salty & frothy","Probiotic-rich","Perfect with grilled meats","Refreshing classic"]'::jsonb,
  '[{"label":"Energy","value":"38 kcal"},{"label":"Fat","value":"1.5 g"},{"label":"Carbohydrates","value":"3.6 g"},{"label":"Protein","value":"1.7 g"},{"label":"Calcium","value":"60 mg"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;
