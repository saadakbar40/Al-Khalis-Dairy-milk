export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ayesha Khan',
    role: 'Home Chef',
    location: 'Lahore',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'Al Khalis milk has completely changed how my kheer tastes. The cream layer is thick and the flavour is just like the milk from my village childhood. I will not buy from anyone else now.',
  },
  {
    id: '2',
    name: 'Bilal Ahmed',
    role: 'Cafe Owner',
    location: 'Karachi',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'We switched our entire cafe to Al Khalis dairy for lattes and yogurt parfaits. The consistency and quality are unmatched, and my customers can taste the difference. Reliable delivery too.',
  },
  {
    id: '3',
    name: 'Sana Malik',
    role: 'Mother of two',
    location: 'Islamabad',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'My kids love the chocolate milk and mango yogurt. As a mom, I love that there are no artificial colours or preservatives. It feels good to give them something pure and healthy.',
  },
  {
    id: '4',
    name: 'Imran Sheikh',
    role: 'Fitness Coach',
    location: 'Lahore',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'The Greek yogurt is a staple in my diet — high protein, thick, and genuinely delicious. I recommend Al Khalis to all my clients. The purity is something you can actually taste.',
  },
  {
    id: '5',
    name: 'Fatima Raza',
    role: 'Food Blogger',
    location: 'Multan',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'I feature Al Khalis ghee in so many of my recipes. The aroma is incredible and it makes every dish richer. Their cheese selection is also fantastic — the mozzarella melts perfectly.',
  },
  {
    id: '6',
    name: 'Usman Tariq',
    role: 'Restaurant Owner',
    location: 'Faisalabad',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'Supplying a restaurant means consistency is everything. Al Khalis has never let me down in two years. The butter, cream, and paneer are all top-tier. Genuinely the best dairy supplier around.',
  },
];

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Where does Al Khalis milk come from?',
    answer:
      'All our milk comes from our own family-owned farms where cows and buffaloes are grass-fed and free-roaming. We collect milk every morning and deliver it fresh — never frozen, never powdered, never reconstituted.',
    category: 'Products',
  },
  {
    id: '2',
    question: 'Is your milk pasteurised?',
    answer:
      'We offer both fresh raw milk (delivered within hours) and gently pasteurised options. Our pasteurisation uses low-temperature methods that preserve the natural flavour and nutritional value while ensuring safety.',
    category: 'Products',
  },
  {
    id: '3',
    question: 'Do you use any preservatives or additives?',
    answer:
      'Never. Our entire product range is 100% free of preservatives, artificial colours, artificial flavours, and added water. What you get is pure, natural dairy — exactly as it should be.',
    category: 'Products',
  },
  {
    id: '4',
    question: 'How is delivery handled?',
    answer:
      'We deliver fresh to your doorstep in temperature-controlled vehicles. Orders placed before 8 PM are delivered the next morning between 6 AM and 10 AM. Same-day delivery is available in select areas.',
    category: 'Delivery',
  },
  {
    id: '5',
    question: 'What areas do you deliver to?',
    answer:
      'We currently deliver across Lahore, Karachi, and Islamabad. We are expanding to new cities every month — enter your address at checkout to see if we deliver to your area.',
    category: 'Delivery',
  },
  {
    id: '6',
    question: 'What is the shelf life of your products?',
    answer:
      'Fresh milk is best consumed within 3 days of delivery. Yogurt stays fresh for 5–7 days refrigerated. Cheese varies by type — cheddar lasts up to 4 weeks, while fresh mozzarella is best within 5 days. Always keep refrigerated.',
    category: 'Products',
  },
  {
    id: '7',
    question: 'Can I subscribe to regular deliveries?',
    answer:
      'Yes! Our milk subscription lets you schedule daily or alternate-day deliveries of your favourite products. Subscribers save 10% on every order and never run out of fresh dairy. Set it up from any product page.',
    category: 'Orders',
  },
  {
    id: '8',
    question: 'What is your return and refund policy?',
    answer:
      'If any product does not meet your expectations, contact us within 24 hours of delivery and we will replace it free of charge or issue a full refund. Your satisfaction is our priority.',
    category: 'Orders',
  },
  {
    id: '9',
    question: 'Are your products halal certified?',
    answer:
      'Yes, all Al Khalis products are 100% halal. Our farms, processing, and packaging follow strict halal standards, and our ghee and butter are rendered using traditional halal methods.',
    category: 'Products',
  },
  {
    id: '10',
    question: 'Do you offer bulk or wholesale pricing?',
    answer:
      'Yes, we supply cafes, restaurants, and retailers at special wholesale rates. Please contact our sales team through the Contact page with your requirements and we will get back to you within one business day.',
    category: 'Orders',
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Fresh milk being poured into a glass',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/162870/cow-calf-animal-mammal-162870.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cow and calf grazing on the farm',
    span: '',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Fresh yogurt in a bowl',
    span: '',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Artisanal cheese on a wooden board',
    span: 'md:col-span-2',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Fresh butter on a plate',
    span: '',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Milk bottles ready for delivery',
    span: '',
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/3733593/pexels-photo-3733593.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Creamy dairy dessert',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/1260699/pexels-photo-1260699.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Glass of milk on a table',
    span: '',
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Greek yogurt with toppings',
    span: '',
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/3617397/pexels-photo-3617397.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Butter being spread on bread',
    span: 'md:col-span-2',
  },
];

export const heroSlides = [
  {
    id: '1',
    eyebrow: 'Farm to Table in 12 Hours',
    title: 'Pure Milk, The Way Nature Intended',
    subtitle:
      'From our grass-fed cows to your kitchen before sunrise. No preservatives, no powders — just pure, creamy, farm-fresh dairy.',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cta: { label: 'Shop Fresh Milk', href: '/products/category/fresh-milk' },
    secondaryCta: { label: 'Our Story', href: '/about' },
  },
  {
    id: '2',
    eyebrow: 'Naturally Cultured',
    title: 'Probiotic Yogurt, Thick & Creamy',
    subtitle:
      'Live cultures, slow-set in the pot for a tangy, gut-healthy treat. Discover the difference real yogurt makes.',
    image: 'https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cta: { label: 'Explore Yogurt', href: '/products/category/yogurt' },
    secondaryCta: { label: 'View All Products', href: '/products' },
  },
  {
    id: '3',
    eyebrow: 'Golden & Aromatic',
    title: 'Pure Desi Ghee, Rendered by Hand',
    subtitle:
      'Slow-cooked from cultured butter into golden, nutty ghee. The soul of traditional cooking, made the old-fashioned way.',
    image: 'https://images.pexels.com/photos/4223914/pexels-photo-4223914.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cta: { label: 'Shop Ghee & Butter', href: '/products/category/butter-ghee' },
    secondaryCta: { label: 'Order Now', href: '/order' },
  },
];
