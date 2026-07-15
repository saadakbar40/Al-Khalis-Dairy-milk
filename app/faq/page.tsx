'use client';

import { useState, useMemo } from 'react';
import { faqItems } from '@/lib/content';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SiteConfig } from '@/lib/site-config';

const categoriesList = ['All', 'Products', 'Delivery', 'Orders'];

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const filtered = useMemo(
    () => (activeCat === 'All' ? faqItems : faqItems.filter((f) => f.category === activeCat)),
    [activeCat]
  );

  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products, delivery, and policies."
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setOpenId(null);
              }}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeCat === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card hover:bg-secondary'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {filtered.map((item, i) => {
            const open = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.03}>
                <div className="overflow-hidden rounded-xl border border-border bg-card">
                  <button
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300',
                        open && 'rotate-180 text-primary'
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still have questions */}
        <Reveal className="mt-12 rounded-2xl border border-border bg-secondary/30 p-8 text-center">
          <h3 className="font-display text-xl font-semibold">Still have questions?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team is here to help. Reach out and we&apos;ll get back to you within one business day.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <a
              href={`https://wa.me/${SiteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
}
