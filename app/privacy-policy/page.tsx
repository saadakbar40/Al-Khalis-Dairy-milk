import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { SiteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Al Khalis Dairy collects, uses, and protects your personal information.',
};

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly to us, such as your name, email address, phone number, delivery address, and order details when you place an order or contact us. We also automatically collect certain information about your device and browsing activity, including IP address, browser type, and pages visited, through cookies and similar technologies.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use your personal information to process and deliver your orders, communicate with you about your orders and our products, provide customer support, send newsletters and promotional materials (if you opt in), improve our website and services, and comply with legal obligations.',
  },
  {
    title: 'Cookies',
    body: 'We use cookies to enhance your browsing experience, remember your preferences, and analyse site traffic. You can control cookies through your browser settings. Our Cookie Consent banner allows you to accept or decline non-essential cookies.',
  },
  {
    title: 'Information Sharing',
    body: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting business, or servicing you — such as delivery partners and payment processors — under strict confidentiality agreements.',
  },
  {
    title: 'Data Security',
    body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: 'Your Rights',
    body: 'You have the right to access, correct, update, or delete your personal information. You can also opt out of marketing communications at any time. To exercise any of these rights, please contact us using the details provided below.',
  },
  {
    title: 'Children\'s Privacy',
    body: 'Our website is not directed to children under 16, and we do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us and we will promptly delete it.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the date at the bottom. We encourage you to review this policy periodically.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2025" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <p className="text-base text-muted-foreground">
            At {SiteConfig.name}, we are committed to protecting your privacy. This policy explains
            how we collect, use, and safeguard your information.
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
            <h2 className="font-display text-lg font-semibold">Contact Us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href={`mailto:${SiteConfig.contact.email}`} className="font-medium text-primary hover:underline">
                {SiteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
