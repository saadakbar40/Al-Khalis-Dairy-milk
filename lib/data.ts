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
  stock?: number;
  discount?: number;
  isFeatured?: boolean;
};

export const categories: ProductCategory[] = [
  {
    id: '1',
    slug: 'fresh-milk',
    name: 'Fresh Milk',
    tagline: 'Farm-fresh & creamy',
    description:
      'Our signature fresh milk is sourced from grass-fed cows every morning and delivered to you within hours — unprocessed, unpasteurized goodness in every glass.',
    image:
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Milk',
  },
  {
    id: '2',
    slug: 'yogurt',
    name: 'Yogurt & Dahi',
    tagline: 'Thick, probiotic & creamy',
    description:
      'Naturally cultured yogurt made with live probiotic cultures for a thick, creamy texture and a tangy, refreshing taste. Perfect for breakfast, cooking, or a healthy snack.',
    image:
      'https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Soup',
  },
  {
    id: '3',
    slug: 'cheese',
    name: 'Cheese',
    tagline: 'Aged & artisanal',
    description:
      'Handcrafted cheeses aged to perfection. From mild cheddar to sharp aged varieties, every wheel is made with traditional methods and our purest milk.',
    image:
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Sandwich',
  },
  {
    id: '4',
    slug: 'butter-ghee',
    name: 'Butter & Ghee',
    tagline: 'Golden & aromatic',
    description:
      'Slow-churned butter and traditionally rendered ghee with a rich, nutty aroma. Made from pure cream with no artificial additives — just golden goodness.',
    image:
      'https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Droplet',
  },
  {
    id: '5',
    slug: 'cream-desserts',
    name: 'Cream & Desserts',
    tagline: 'Silky & indulgent',
    description:
      'Whipping cream, labneh, and traditional dairy desserts like kheer and firni. Silky-smooth, naturally sweet, and made fresh daily.',
    image:
      'https://images.pexels.com/photos/3733593/pexels-photo-3733593.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'IceCream',
  },
  {
    id: '6',
    slug: 'flavored-milk',
    name: 'Flavored Milk',
    tagline: 'Delicious & nutritious',
    description:
      'Naturally flavored milk drinks for the whole family — chocolate, strawberry, and mango. No artificial colors or preservatives, just pure dairy deliciousness.',
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'GlassWater',
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
