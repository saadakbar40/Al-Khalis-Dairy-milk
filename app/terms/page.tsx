import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { SiteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions for using Al Khalis Dairy\'s website and services.',
};

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing and using the Al Khalis Dairy website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
  },
  {
    title: 'Products & Pricing',
    body: 'All products are subject to availability. We reserve the right to modify or discontinue any product without notice. Prices are listed in Pakistani Rupees (PKR) and are subject to change. We strive for accuracy in pricing, but errors may occur — in such cases, we will inform you before processing your order.',
  },
  {
    title: 'Orders & Delivery',
    body: 'When you place an order, you receive an order confirmation with a unique ID. Orders placed before 8 PM are delivered the next morning. Delivery is available in select cities. We reserve the right to refuse or cancel any order at our discretion. Delivery fees are calculated at checkout.',
  },
  {
    title: 'Quality & Freshness',
    body: 'We guarantee the freshness and quality of our products. If you receive a product that does not meet our quality standards, contact us within 24 hours of delivery for a free replacement or full refund.',
  },
  {
    title: 'Returns & Refunds',
    body: 'Due to the perishable nature of dairy products, returns are limited to quality issues. If a product is spoiled, damaged, or incorrect, contact us within 24 hours with your order ID and a photo. We will arrange a replacement or refund at no cost to you.',
  },
  {
    title: 'User Conduct',
    body: 'You agree to use our website only for lawful purposes. You must not misuse the site, attempt to gain unauthorised access, transmit viruses or harmful code, or engage in any activity that could damage or impair the site\'s functionality.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website — including text, graphics, logos, images, and software — is the property of Al Khalis Dairy and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Al Khalis Dairy shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the relevant order.',
  },
  {
    title: 'Changes to Terms',
    body: 'We may update these Terms of Service at any time. Changes are effective immediately upon posting. Continued use of the website after changes constitutes acceptance of the new terms.',
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: January 2025" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-base text-muted-foreground">
          Welcome to {SiteConfig.name}. These Terms of Service govern your use of our website and
          the purchase of our products. Please read them carefully.
        </p>
        {sections.map((s, i) => (
          <div key={s.title} className="mt-8">
            <h2 className="font-display text-xl font-bold tracking-tight">
              {i + 1}. {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
        <div className="mt-10 rounded-xl border border-border bg-secondary/30 p-6">
          <h2 className="font-display text-lg font-semibold">Questions?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            If you have any questions about these Terms, please contact us at{' '}
            <a href={`mailto:${SiteConfig.contact.email}`} className="font-medium text-primary hover:underline">
              {SiteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
