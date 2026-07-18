import { supabase } from '@/lib/supabase';
import type { Product, ProductCategory } from '@/lib/data';

type ProductRow = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  category_slug: string;
  image_url: string;
  images: string[];
  stock: number;
  in_stock: boolean;
  discount: number;
  is_featured: boolean;
  unit: string;
  old_price: number | null;
  rating: number;
  reviews: number;
  short_description: string;
  description: string;
  badge: string | null;
  features: string[];
  nutrition: { label: string; value: string }[];
};

type CategoryRow = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
};

const PRODUCT_SELECT =
  'id, name, slug, price, category, category_slug, image_url, images, stock, in_stock, discount, is_featured, unit, old_price, rating, reviews, short_description, description, badge, features, nutrition';

function mapRowToProduct(row: ProductRow): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category,
    categorySlug: row.category_slug,
    price: Number(row.price),
    unit: row.unit,
    oldPrice: row.old_price != null ? Number(row.old_price) : undefined,
    rating: Number(row.rating),
    reviews: row.reviews,
    shortDescription: row.short_description,
    description: row.description,
    images: row.images?.length ? row.images : [row.image_url],
    badge: row.badge ?? undefined,
    features: row.features ?? [],
    nutrition: row.nutrition ?? [],
    inStock: row.in_stock,
    bestseller: row.is_featured,
  };
}

function mapRowToCategory(row: CategoryRow): ProductCategory {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    description: row.description,
    image: row.image,
    icon: row.icon,
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(PRODUCT_SELECT)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(mapRowToProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(PRODUCT_SELECT)
    .eq('slug', slug)
    .maybeSingle();
  if (error) throw error;
  return data ? mapRowToProduct(data as ProductRow) : null;
}

export async function getProductsByCategory(slug: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(PRODUCT_SELECT)
    .eq('category_slug', slug)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(mapRowToProduct);
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(PRODUCT_SELECT)
    .eq('is_featured', true)
    .order('rating', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []).map(mapRowToProduct);
}

export async function getRelatedProducts(
  categorySlug: string,
  excludeId: string,
  limit = 4
): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(PRODUCT_SELECT)
    .eq('category_slug', categorySlug)
    .neq('id', excludeId)
    .limit(limit);
  if (error) throw error;
  return (data ?? []).map(mapRowToProduct);
}

export async function getAllCategories(): Promise<ProductCategory[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('id, slug, name, tagline, description, image, icon')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(mapRowToCategory);
}

export async function getCategoryBySlug(slug: string): Promise<ProductCategory | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('id, slug, name, tagline, description, image, icon')
    .eq('slug', slug)
    .maybeSingle();
  if (error) throw error;
  return data ? mapRowToCategory(data as CategoryRow) : null;
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase.from('products').select('slug');
  if (error) throw error;
  return (data ?? []).map((r) => r.slug);
}

export async function getAllCategorySlugs(): Promise<string[]> {
  const { data, error } = await supabase.from('categories').select('slug');
  if (error) throw error;
  return (data ?? []).map((r) => r.slug);
}
