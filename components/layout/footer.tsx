'use client';

import Link from 'next/link';
import { Logo } from './logo';
import { SiteConfig } from '@/lib/site-config';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Newsletter } from '@/components/shared/newsletter';

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'Fresh Milk', href: '/products/category/fresh-milk' },
      { label: 'Yogurt & Dahi', href: '/products/category/yogurt' },
      { label: 'Cheese', href: '/products/category/cheese' },
      { label: 'Butter & Ghee', href: '/products/category/butter-ghee' },
      { label: 'All Products', href: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Reviews', href: '/testimonials' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Order Now', href: '/order' },
      { label: 'Wishlist', href: '/wishlist' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Sign In', href: '/login' },
      { label: 'Sign Up', href: '/signup' },
      { label: 'Wishlist', href: '/wishlist' },
      { label: 'Order Now', href: '/order' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: SiteConfig.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: SiteConfig.social.instagram, label: 'Instagram' },
  { icon: Twitter, href: SiteConfig.social.twitter, label: 'Twitter' },
  { icon: Youtube, href: SiteConfig.social.youtube, label: 'YouTube' },
  { icon: Linkedin, href: SiteConfig.social.linkedin, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Fresh dairy, every morning.
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Join our newsletter for seasonal recipes, farm stories, and exclusive offers —
              straight to your inbox.
            </p>
          </div>
          <Newsletter />
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {SiteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-6 border-t border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium">Address</p>
              <p className="text-sm text-muted-foreground">
                {SiteConfig.contact.address.line1}, {SiteConfig.contact.address.city}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a
                href={`tel:${SiteConfig.contact.phonePrimary.replace(/\s/g, '')}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {SiteConfig.contact.phonePrimary}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <a
                href={`mailto:${SiteConfig.contact.email}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {SiteConfig.contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium">Hours</p>
              <p className="text-sm text-muted-foreground">
                {SiteConfig.hours[0].day}: {SiteConfig.hours[0].time}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SiteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
