export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  unit: string;
  oldPrice?: number;
  rating: number;
  reviews: number;
  shortDescription: string;
  description: string;
  images: string[];
  badge?: string;
  features: string[];
  nutrition: { label: string; value: string }[];
  inStock: boolean;
  bestseller?: boolean;
};
