import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { ContactForm, ContactInfoCards } from '@/components/contact/contact-sections';
import { SiteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Al Khalis Dairy. Find our address, phone numbers, email, business hours, and send us a message.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question, feedback, or want to place a bulk order? We'd love to hear from you."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and we&apos;ll respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold tracking-tight">Contact Information</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Reach us through any of these channels — we&apos;re always happy to help.
            </p>
            <div className="mt-6">
              <ContactInfoCards />
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src={SiteConfig.contact.mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Khalis Dairy location map"
            />
          </div>
        </Reveal>
      </div>
    </>
  );
}
