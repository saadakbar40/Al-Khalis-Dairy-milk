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

export const products: Product[] = [
  {
    id: '1',
    slug: 'pure-cows-milk-1l',
    name: 'Pure Cow’s Milk',
    category: 'Fresh Milk',
    categorySlug: 'fresh-milk',
    price: 180,
    unit: '1 Litre',
    oldPrice: 210,
    rating: 4.9,
    reviews: 312,
    shortDescription: 'Farm-fresh, full-cream cow’s milk delivered within hours of milking.',
    description:
      'Our Pure Cow’s Milk comes from grass-fed Holstein Friesian cows raised on our family farms. It is collected every morning, gently filtered, and delivered to your doorstep within hours — never frozen, never reconstituted. With a rich, creamy texture and naturally sweet taste, it is perfect for drinking, pouring over cereal, frothing into lattes, or making your favourite recipes. No preservatives, no additives, no compromise.',
    images: [
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1260699/pexels-photo-1260699.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badge: 'Bestseller',
    bestseller: true,
    features: [
      '100% pure & preservative-free',
      'Grass-fed, free-roaming cows',
      'Delivered within hours of milking',
      'Rich in calcium & vitamin D',
      'No added water or powder',
    ],
    nutrition: [
      { label: 'Energy', value: '67 kcal' },
      { label: 'Fat', value: '3.9 g' },
      { label: 'Carbohydrates', value: '4.8 g' },
      { label: 'Protein', value: '3.3 g' },
      { label: 'Calcium', value: '120 mg' },
    ],
    inStock: true,
  },
  {
    id: '2',
    slug: 'fresh-buffalo-milk-1l',
    name: 'Fresh Buffalo Milk',
    category: 'Fresh Milk',
    categorySlug: 'fresh-milk',
    price: 220,
    unit: '1 Litre',
    rating: 4.8,
    reviews: 198,
    shortDescription: 'Thick, creamy buffalo milk — naturally richer in protein and calcium.',
    description:
      'Our Fresh Buffalo Milk is known for its thick, luxurious cream layer and naturally higher protein and calcium content. Sourced from well-cared-for Nili-Ravi buffaloes on our farms, it is the traditional choice for creamy kheer, rich chai, and thick lassi. Delivered fresh, never powdered.',
    images: [
      'https://images.pexels.com/photos/162870/cow-calf-animal-mammal-162870.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: [
      'Naturally higher protein',
      'Thick cream layer',
      'Ideal for lassi & traditional sweets',
      'No preservatives',
    ],
    nutrition: [
      { label: 'Energy', value: '97 kcal' },
      { label: 'Fat', value: '6.7 g' },
      { label: 'Carbohydrates', value: '5.2 g' },
      { label: 'Protein', value: '4.0 g' },
      { label: 'Calcium', value: '195 mg' },
    ],
    inStock: true,
  },
  {
    id: '3',
    slug: 'low-fat-milk-1l',
    name: 'Low-Fat Milk',
    category: 'Fresh Milk',
    categorySlug: 'fresh-milk',
    price: 160,
    unit: '1 Litre',
    rating: 4.7,
    reviews: 142,
    shortDescription: 'Lighter on fat, full on nutrition — perfect for everyday health.',
    description:
      'Our Low-Fat Milk gives you all the protein, calcium, and vitamins of whole milk with significantly less fat. It is gently skimmed and homogenised for a smooth, clean taste that is perfect for everyday drinking, cereals, and light cooking.',
    images: [
      'https://images.pexels.com/photos/1260699/pexels-photo-1260699.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Only 1.5% fat', 'High protein & calcium', 'Smooth, clean taste', 'Great for daily health'],
    nutrition: [
      { label: 'Energy', value: '44 kcal' },
      { label: 'Fat', value: '1.5 g' },
      { label: 'Carbohydrates', value: '5.0 g' },
      { label: 'Protein', value: '3.4 g' },
      { label: 'Calcium', value: '125 mg' },
    ],
    inStock: true,
  },
  {
    id: '4',
    slug: 'natural-set-yogurt-500g',
    name: 'Natural Set Yogurt',
    category: 'Yogurt & Dahi',
    categorySlug: 'yogurt',
    price: 140,
    unit: '500 g',
    rating: 4.9,
    reviews: 256,
    shortDescription: 'Thick, probiotic-rich set yogurt with a classic tangy taste.',
    description:
      'Our Natural Set Yogurt is cultured in the pot for a firm, spoonable texture and a clean, tangy flavour. Loaded with live probiotic cultures, it supports digestion and gut health. Enjoy it plain, with fruit and honey, or use it in marinades and raitas.',
    images: [
      'https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badge: 'Bestseller',
    bestseller: true,
    features: ['Live probiotic cultures', 'Set in the pot — thick & creamy', 'No added sugar', 'Supports gut health'],
    nutrition: [
      { label: 'Energy', value: '59 kcal' },
      { label: 'Fat', value: '3.3 g' },
      { label: 'Carbohydrates', value: '4.7 g' },
      { label: 'Protein', value: '3.5 g' },
      { label: 'Calcium', value: '110 mg' },
    ],
    inStock: true,
  },
  {
    id: '5',
    slug: 'greek-yogurt-400g',
    name: 'Greek Yogurt',
    category: 'Yogurt & Dahi',
    categorySlug: 'yogurt',
    price: 220,
    unit: '400 g',
    rating: 4.8,
    reviews: 174,
    shortDescription: 'Strained for extra protein — thick, velvety and satisfying.',
    description:
      'Our Greek Yogurt is triple-strained for an ultra-thick, velvety texture and double the protein of regular yogurt. It is tangy, rich, and incredibly satisfying — ideal for breakfast bowls, smoothies, or a healthy savoury dip.',
    images: [
      'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Triple-strained — double protein', 'Ultra-thick & velvety', 'No added sugar', 'Great for breakfast & dips'],
    nutrition: [
      { label: 'Energy', value: '98 kcal' },
      { label: 'Fat', value: '5.0 g' },
      { label: 'Carbohydrates', value: '3.6 g' },
      { label: 'Protein', value: '9.0 g' },
      { label: 'Calcium', value: '100 mg' },
    ],
    inStock: true,
  },
  {
    id: '6',
    slug: 'fruit-yogurt-mango-200g',
    name: 'Mango Fruit Yogurt',
    category: 'Yogurt & Dahi',
    categorySlug: 'yogurt',
    price: 130,
    unit: '200 g',
    rating: 4.7,
    reviews: 88,
    shortDescription: 'Creamy yogurt swirled with real Alphonso mango pulp.',
    description:
      'Enjoy the taste of summer year-round with our Mango Fruit Yogurt. We swirl creamy natural yogurt with real Alphonso mango pulp for a naturally sweet, fruity treat — no artificial flavours or colours.',
    images: [
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Real Alphonso mango pulp', 'No artificial flavours', 'Naturally sweet', 'Kid-friendly'],
    nutrition: [
      { label: 'Energy', value: '88 kcal' },
      { label: 'Fat', value: '2.8 g' },
      { label: 'Carbohydrates', value: '12 g' },
      { label: 'Protein', value: '3.0 g' },
      { label: 'Calcium', value: '95 mg' },
    ],
    inStock: true,
  },
  {
    id: '7',
    slug: 'cheddar-cheese-250g',
    name: 'Aged Cheddar',
    category: 'Cheese',
    categorySlug: 'cheese',
    price: 480,
    unit: '250 g',
    oldPrice: 540,
    rating: 4.8,
    reviews: 134,
    shortDescription: 'Sharp, crumbly, and aged for 8 months for a deep flavour.',
    description:
      'Our Aged Cheddar is matured for 8 months to develop a sharp, complex flavour and a satisfying crumbly texture. It is made by hand using traditional cheddaring methods and our purest cow’s milk. Perfect for cheese boards, grilled cheese, and bold snacking.',
    images: [
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/414776/pexels-photo-414776.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Aged 8 months', 'Sharp, complex flavour', 'Handmade traditional cheddaring', 'No artificial additives'],
    nutrition: [
      { label: 'Energy', value: '403 kcal' },
      { label: 'Fat', value: '33 g' },
      { label: 'Carbohydrates', value: '1.3 g' },
      { label: 'Protein', value: '25 g' },
      { label: 'Calcium', value: '721 mg' },
    ],
    inStock: true,
  },
  {
    id: '8',
    slug: 'mozzarella-cheese-300g',
    name: 'Fresh Mozzarella',
    category: 'Cheese',
    categorySlug: 'cheese',
    price: 520,
    unit: '300 g',
    rating: 4.9,
    reviews: 201,
    shortDescription: 'Soft, milky mozzarella — the perfect pizza and salad cheese.',
    description:
      'Our Fresh Mozzarella is a soft, milky cheese with a delicate texture that melts beautifully. Made using the pasta filata method and stored in brine, it is the ideal cheese for pizzas, caprese salads, and pasta bakes.',
    images: [
      'https://images.pexels.com/photos/414776/pexels-photo-414776.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badge: 'Bestseller',
    bestseller: true,
    features: ['Soft, milky & delicate', 'Perfect melt for pizzas', 'Stored in brine for freshness', 'Made daily'],
    nutrition: [
      { label: 'Energy', value: '280 kcal' },
      { label: 'Fat', value: '22 g' },
      { label: 'Carbohydrates', value: '2.2 g' },
      { label: 'Protein', value: '18 g' },
      { label: 'Calcium', value: '505 mg' },
    ],
    inStock: true,
  },
  {
    id: '9',
    slug: 'feta-cheese-200g',
    name: 'Traditional Feta',
    category: 'Cheese',
    categorySlug: 'cheese',
    price: 420,
    unit: '200 g',
    rating: 4.7,
    reviews: 76,
    shortDescription: 'Tangy, crumbly feta in brine — a Mediterranean classic.',
    description:
      'Our Traditional Feta is a tangy, crumbly white cheese stored in brine for a salty, refreshing bite. It is the classic cheese for Greek salads, spanakopita, and Mediterranean grain bowls.',
    images: [
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Tangy & crumbly', 'Stored in brine', 'Mediterranean classic', 'Great for salads'],
    nutrition: [
      { label: 'Energy', value: '264 kcal' },
      { label: 'Fat', value: '21 g' },
      { label: 'Carbohydrates', value: '4.1 g' },
      { label: 'Protein', value: '14 g' },
      { label: 'Calcium', value: '493 mg' },
    ],
    inStock: true,
  },
  {
    id: '10',
    slug: 'unsalted-butter-250g',
    name: 'Unsalted Butter',
    category: 'Butter & Ghee',
    categorySlug: 'butter-ghee',
    price: 380,
    unit: '250 g',
    rating: 4.8,
    reviews: 112,
    shortDescription: 'Slow-churned, creamy butter with a sweet, clean flavour.',
    description:
      'Our Unsalted Butter is slow-churned from fresh cream for a rich, creamy texture and a sweet, clean flavour. It is the baker’s choice — perfect for cakes, cookies, pastries, and spreading on warm toast.',
    images: [
      'https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3617397/pexels-photo-3617397.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Slow-churned from fresh cream', 'Sweet, clean flavour', 'Baker’s favourite', 'No salt added'],
    nutrition: [
      { label: 'Energy', value: '717 kcal' },
      { label: 'Fat', value: '81 g' },
      { label: 'Carbohydrates', value: '0.1 g' },
      { label: 'Protein', value: '0.9 g' },
      { label: 'Calcium', value: '24 mg' },
    ],
    inStock: true,
  },
  {
    id: '11',
    slug: 'pure-desi-ghee-500g',
    name: 'Pure Desi Ghee',
    category: 'Butter & Ghee',
    categorySlug: 'butter-ghee',
    price: 850,
    unit: '500 g',
    oldPrice: 920,
    rating: 5.0,
    reviews: 289,
    shortDescription: 'Golden, aromatic ghee rendered by hand — rich in flavour.',
    description:
      'Our Pure Desi Ghee is traditionally rendered from cultured butter over a slow flame, producing a golden, aromatic ghee with a nutty, caramelised aroma. It has a high smoke point, making it ideal for cooking, frying, and traditional sweets. Rich in healthy fats and vitamin A.',
    images: [
      'https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3617397/pexels-photo-3617397.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badge: 'Premium',
    bestseller: true,
    features: ['Traditionally rendered', 'Nutty, aromatic flavour', 'High smoke point', 'Rich in vitamin A'],
    nutrition: [
      { label: 'Energy', value: '900 kcal' },
      { label: 'Fat', value: '100 g' },
      { label: 'Carbohydrates', value: '0 g' },
      { label: 'Protein', value: '0 g' },
      { label: 'Vitamin A', value: '840 µg' },
    ],
    inStock: true,
  },
  {
    id: '12',
    slug: 'whipping-cream-250ml',
    name: 'Fresh Whipping Cream',
    category: 'Cream & Desserts',
    categorySlug: 'cream-desserts',
    price: 290,
    unit: '250 ml',
    rating: 4.7,
    reviews: 64,
    shortDescription: 'Light, fluffy cream that whips up perfectly every time.',
    description:
      'Our Fresh Whipping Cream is a 35% fat cream that whips up to light, fluffy peaks every time. It is the ideal cream for topping desserts, filling cakes, and making ganache. No stabilisers or thickeners — just pure cream.',
    images: [
      'https://images.pexels.com/photos/3733593/pexels-photo-3733593.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['35% fat — whips perfectly', 'No stabilisers', 'Great for desserts & ganache', 'Fresh daily'],
    nutrition: [
      { label: 'Energy', value: '345 kcal' },
      { label: 'Fat', value: '36 g' },
      { label: 'Carbohydrates', value: '2.9 g' },
      { label: 'Protein', value: '2.2 g' },
      { label: 'Calcium', value: '65 mg' },
    ],
    inStock: true,
  },
  {
    id: '13',
    slug: 'kheer-traditional-300g',
    name: 'Traditional Kheer',
    category: 'Cream & Desserts',
    categorySlug: 'cream-desserts',
    price: 180,
    unit: '300 g',
    rating: 4.8,
    reviews: 53,
    shortDescription: 'Slow-cooked rice pudding in pure milk with cardamom & nuts.',
    description:
      'Our Traditional Kheer is slow-cooked with pure full-cream milk, fragrant basmati rice, cardamom, and a generous garnish of pistachios and almonds. A timeless dessert, ready to serve chilled or warm.',
    images: [
      'https://images.pexels.com/photos/3733593/pexels-photo-3733593.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Slow-cooked in pure milk', 'Cardamom & nuts', 'No artificial flavours', 'Serve warm or chilled'],
    nutrition: [
      { label: 'Energy', value: '156 kcal' },
      { label: 'Fat', value: '5.2 g' },
      { label: 'Carbohydrates', value: '22 g' },
      { label: 'Protein', value: '4.5 g' },
      { label: 'Calcium', value: '130 mg' },
    ],
    inStock: true,
  },
  {
    id: '14',
    slug: 'chocolate-milk-250ml',
    name: 'Chocolate Milk',
    category: 'Flavored Milk',
    categorySlug: 'flavored-milk',
    price: 110,
    unit: '250 ml',
    rating: 4.8,
    reviews: 167,
    shortDescription: 'Rich chocolate milk made with real cocoa — a kid favourite.',
    description:
      'Our Chocolate Milk is made with pure fresh milk and real cocoa for a rich, chocolatey taste that kids and adults love. Lightly sweetened, no artificial colours — the perfect after-school treat or post-workout recovery drink.',
    images: [
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Real cocoa', 'No artificial colours', 'Great for recovery', 'Kid favourite'],
    nutrition: [
      { label: 'Energy', value: '83 kcal' },
      { label: 'Fat', value: '3.5 g' },
      { label: 'Carbohydrates', value: '10 g' },
      { label: 'Protein', value: '3.4 g' },
      { label: 'Calcium', value: '115 mg' },
    ],
    inStock: true,
  },
  {
    id: '15',
    slug: 'strawberry-milk-250ml',
    name: 'Strawberry Milk',
    category: 'Flavored Milk',
    categorySlug: 'flavored-milk',
    price: 110,
    unit: '250 ml',
    rating: 4.6,
    reviews: 92,
    shortDescription: 'Sweet, fruity strawberry milk — a refreshing treat.',
    description:
      'Our Strawberry Milk blends pure fresh milk with natural strawberry flavour for a sweet, fruity, refreshing drink. No artificial colours — just a delightful pink treat in every sip.',
    images: [
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Natural strawberry flavour', 'No artificial colours', 'Refreshing & sweet', 'Ready to drink'],
    nutrition: [
      { label: 'Energy', value: '78 kcal' },
      { label: 'Fat', value: '3.4 g' },
      { label: 'Carbohydrates', value: '9.2 g' },
      { label: 'Protein', value: '3.3 g' },
      { label: 'Calcium', value: '112 mg' },
    ],
    inStock: false,
  },
  {
    id: '16',
    slug: 'mango-lassi-300ml',
    name: 'Mango Lassi',
    category: 'Flavored Milk',
    categorySlug: 'flavored-milk',
    price: 130,
    unit: '300 ml',
    rating: 4.9,
    reviews: 145,
    shortDescription: 'Thick, creamy mango lassi — a refreshing classic.',
    description:
      'Our Mango Lassi blends our natural set yogurt with real Alphonso mango pulp for a thick, creamy, refreshing drink. It is the perfect cooler on a hot day and a wonderful accompaniment to spicy meals.',
    images: [
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badge: 'Seasonal',
    features: ['Real Alphonso mango', 'Made with our yogurt', 'Thick & creamy', 'Refreshing classic'],
    nutrition: [
      { label: 'Energy', value: '95 kcal' },
      { label: 'Fat', value: '2.9 g' },
      { label: 'Carbohydrates', value: '14 g' },
      { label: 'Protein', value: '3.1 g' },
      { label: 'Calcium', value: '105 mg' },
    ],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}
