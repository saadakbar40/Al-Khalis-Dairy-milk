'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';

const points = [
  'Three generations of family farming',
  'Grass-fed, free-roaming livestock',
  'Zero preservatives or additives',
  'Lab-tested for purity every batch',
  'Delivered fresh within 12 hours',
];

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/162870/cow-calf-animal-mammal-162870.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Our farm"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
                <p className="font-display text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years of farming</p>
              </div>
              {/* Floating badge */}
              <div className="absolute -left-4 -top-4 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
                Family Owned
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.1}>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A Family Tradition of Pure Dairy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Al Khalis Dairy began on a small family farm three generations ago. What started as a
              few cows and a passion for pure milk has grown into a trusted dairy brand — but our
              values haven&apos;t changed. We still believe dairy should be simple, natural, and
              honest.
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className="rounded-full">
                <Link href="/about">
                  Read Our Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
