import type { Metadata } from 'next';
import { testimonials } from '@/lib/content';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what our customers say about Al Khalis Dairy — from home chefs to restaurant owners, thousands trust our pure, fresh dairy.',
};

export default function TestimonialsPage() {
  const avgRating =
    testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length;

  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title="What Our Customers Say"
        description="Real stories from real families and businesses who trust Al Khalis for their daily dairy."
      />

      {/* Rating summary */}
      <section className="border-b border-border bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
            <div>
              <p className="font-display text-5xl font-bold text-primary">
                {avgRating.toFixed(1)}
              </p>
              <div className="mt-1 flex items-center justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.round(avgRating) ? 'h-5 w-5 fill-accent text-accent' : 'h-5 w-5 fill-muted text-muted-foreground/30'}
                  />
                ))}
              </div>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <p className="text-sm text-muted-foreground">
              Based on <span className="font-semibold text-foreground">{testimonials.length * 100}+</span> verified reviews
            </p>
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05} className="mb-6 break-inside-avoid">
                <div className="relative rounded-2xl border border-border bg-card p-6">
                  <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} · {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
