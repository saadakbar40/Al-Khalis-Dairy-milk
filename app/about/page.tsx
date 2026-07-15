import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { ProcessSection, FeatureStrip } from '@/components/home/features';
import { CTASection } from '@/components/home/cta-section';
import { Leaf, Users, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the story of Al Khalis Dairy — three generations of family farming, committed to pure, fresh, and natural dairy.',
};

const stats = [
  { icon: TrendingUp, value: '5+', label: 'Years of farming' },
  { icon: Users, value: '10,000+', label: 'Happy customers' },
  { icon: Award, value: '50+', label: 'Awards & certifications' },
  { icon: Leaf, value: '100%', label: 'Natural & pure' },
];

const values = [
  {
    title: 'Purity Above All',
    description:
      'We never compromise on quality. Every drop of milk, every wheel of cheese, every jar of ghee is made with pure ingredients — no shortcuts, no additives, ever.',
  },
  {
    title: 'Animal Welfare',
    description:
      'Our cows and buffaloes are family. They graze freely on lush pastures, receive regular veterinary care, and live stress-free lives. Happy animals make better milk.',
  },
  {
    title: 'Sustainable Farming',
    description:
      'We practise sustainable agriculture — rotating pastures, conserving water, and minimising waste. We believe in leaving the land better than we found it.',
  },
  {
    title: 'Community First',
    description:
      'We support local farmers, provide fair employment, and give back to our community. When you choose Al Khalis, you support a whole ecosystem of families.',
  },
];

const timeline = [
  {
    year: '1999',
    title: 'The Beginning',
    description:
      'Our grandfather started with just five cows on a small plot of land, selling fresh milk to neighbours.',
  },
  {
    year: '2008',
    title: 'Growing the Herd',
    description:
      'We expanded to 200 cows and buffaloes, investing in modern hygienic milking systems.',
  },
  {
    year: '2015',
    title: 'Adding Products',
    description:
      'Beyond milk, we introduced yogurt, cheese, butter, and our signature Pure Desi Ghee.',
  },
  {
    year: '2024',
    title: 'Trusted Brand',
    description:
      'Today, Al Khalis Dairy serves over 10,000 families and 200 businesses across three cities.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Family Tradition of Pure Dairy"
        description="Three generations. One commitment: to bring you the purest, freshest, most natural dairy — the way it should be."
      />

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center">
                  <s.icon className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-3 font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story with image */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/162870/cow-calf-animal-mammal-162870.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Our farm"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                From a Single Farm to Your Table
              </h2>
              <div className="mt-4 space-y-4 text-base text-muted-foreground">
                <p>
                  It started in 1999, when our grandfather began milking five cows by hand every
                  morning and delivering fresh milk to his neighbours on a bicycle. He believed
                  that dairy should be simple — pure, natural, and honest.
                </p>
                <p>
                  Twenty-five years later, that belief still drives everything we do. We&apos;ve grown
                  from a single farm to a network of family-owned farms, but we&apos;ve never lost
                  sight of his original promise: to deliver the purest dairy, straight from our
                  farms to your table.
                </p>
                <p>
                  Today, Al Khalis Dairy serves over 10,000 families and 200 businesses across
                  Lahore, Karachi, and Islamabad. Every product is still made with the same care,
                  the same purity, and the same love for what we do.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Journey
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              25 Years of Growth
            </h2>
          </Reveal>
          <div className="relative space-y-8 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-border sm:before:left-1/2">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <div
                  className={`relative flex gap-6 sm:gap-0 ${
                    i % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />
                  <div className="absolute left-4 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-card sm:left-1/2 sm:-translate-x-1/2" />
                  <div className="ml-10 flex-1 sm:ml-0 sm:px-8">
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <span className="font-display text-2xl font-bold text-primary">{t.year}</span>
                      <h3 className="mt-1 font-semibold">{t.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureStrip />
      <ProcessSection />
      <CTASection />
    </>
  );
}
