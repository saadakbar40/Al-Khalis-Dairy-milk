/**
 * AL KHALIS DAIRY — Central site configuration.
 * All business contact details, social links, and branding live here.
 * Edit these values to update them across the entire site without touching any UI.
 */
export const SiteConfig = {
  name: 'Al Khalis Dairy',
  shortName: 'Al Khalis',
  tagline: 'Pure. Fresh. Natural.',
  description:
    'Al Khalis Dairy delivers farm-fresh milk, yogurt, cheese, butter, and ghee straight from our family-owned farms to your table — 100% pure, preservative-free, and naturally rich.',
  url: 'https://alkhalisdairy.com',
  ogImage: '/og-image.jpg',

  // ---- EDITABLE CONTACT DETAILS (change freely) ----
  contact: {
    address: {
      line1: 'F-11',
      line2: 'Islamabad Capital Territory',
      city: 'Islamabad',
      province: 'Islamabad Capital Territory',
      postalCode: '',
      country: 'Pakistan',
      full: 'F-11, Islamabad, Islamabad Capital Territory, Pakistan',
    },
    // Replace with your own Google Maps embed src URL
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.5!2d73.0443!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzIzLjgiTiA3M8KwMDInMzEuNSJF!5e0!3m2!1sen!2sus!4v1700000000000',
    email: 'saad.akbar.global@gmail.com',
    phonePrimary: '03061487240',
    phoneSecondary: '03154515175',
    whatsapp: '03061487240',
  },

  hours: [
    { day: 'Monday — Friday', time: '7:00 AM — 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM — 8:00 PM' },
    { day: 'Sunday', time: '9:00 AM — 6:00 PM' },
  ],

  social: {
    facebook: 'https://facebook.com/alkhalisdairy',
    instagram: 'https://instagram.com/alkhalisdairy',
    twitter: 'https://twitter.com/alkhalisdairy',
    youtube: 'https://youtube.com/@alkhalisdairy',
    linkedin: 'https://linkedin.com/company/alkhalisdairy',
  },

  whatsappNumber: '923061487240',
} as const;

export type SiteConfig = typeof SiteConfig;
