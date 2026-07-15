'use client';

import Link from 'next/link';
import { ArrowRight, Leaf, Truck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'No preservatives, no additives, no artificial anything. Just pure, natural dairy.',
  },
  {
    icon: Truck,
    title: 'Fresh Delivery',
    description: 'From farm to your doorstep within hours. Never frozen, never reconstituted.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Tested',
    description: 'Every batch is tested for purity, freshness, and nutritional value before delivery.',
  },
  {
    icon: HeartHandshake,
    title: 'Family Owned',
    description: 'Three generations of dairy farmers, committed to quality you can taste.',
  },
];

export function FeatureStrip() {
  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Grass-Fed Farms',
      description: 'Our cows and buffaloes graze freely on lush, green pastures every single day.',
    },
    {
      number: '02',
      title: 'Morning Milking',
      description: 'We collect milk fresh each morning using hygienic, automated milking systems.',
    },
    {
      number: '03',
      title: 'Quality Testing',
      description: 'Every batch is lab-tested for purity, fat content, and nutritional value.',
    },
    {
      number: '04',
      title: 'Doorstep Delivery',
      description: 'Delivered to you in temperature-controlled vehicles within hours of milking.',
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Process
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From Pasture to Your Plate
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Every step of our process is designed to preserve the natural goodness of our dairy.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg">
                <span className="font-display text-5xl font-bold text-primary/15">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 text-border lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
