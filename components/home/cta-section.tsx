'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Decorative blobs */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
            >
              Start Your Day with Pure Freshness
            </motion.h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Order now and experience the Al Khalis difference. Farm-fresh dairy delivered to your
              door — pure, natural, and delicious.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full bg-white px-6 text-primary hover:bg-white/90"
              >
                <Link href="/order">
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
