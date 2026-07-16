import { supabase } from './supabase';
import type { Product } from './data';

export type RawProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  short_description: string;
  price: number;
  old_price: number | null;
  image_url: string;
  images: string[] | null;
  category: string;
  category_slug: string;
  unit: string;
  stock: number;
  in_stock: boolean;
  discount: number;
  is_featured: boolean;
  badge: string | null;
  rating: number;
  reviews: number;
  features: string[] | null;
  nutrition: { label: string; value: string }[] | null;
};

function mapProduct(raw: RawProduct): Product {
  const images = raw.images && raw.images.length > 0 ? raw.images : [raw.image_url];

  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    category: raw.category,
    categorySlug: raw.category_slug,
    price: Number(raw.price),
    oldPrice: raw.old_price ? Number(raw.old_price) : undefined,
    rating: Number(raw.rating),
    reviews: raw.reviews,
    shortDescription: raw.short_description,
    description: raw.description,
    images,
    badge: raw.badge || undefined,
    features: raw.features || [],
    nutrition: raw.nutrition || [],
    inStock: raw.in_stock,
    bestseller: raw.is_featured,
    unit: raw.unit,
    stock: raw.stock,
    discount: raw.discount,
    isFeatured: raw.is_featured,
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('is_featured', { ascending: false })
    .order('name', { ascending: true });

  if (error || !data) return [];
  return (data as RawProduct[]).map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !data) return null;
  return mapProduct(data as RawProduct);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_slug', categorySlug)
    .order('is_featured', { ascending: false })
    .order('name', { ascending: true });

  if (error || !data) return [];
  return (data as RawProduct[]).map(mapProduct);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_featured', true)
    .order('rating', { ascending: false })
    .limit(4);

  if (error || !data) return [];
  return (data as RawProduct[]).map(mapProduct);
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase.from('products').select('slug');
  if (error || !data) return [];
  return (data as { slug: string }[]).map((r) => r.slug);
}
