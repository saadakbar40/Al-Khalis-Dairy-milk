import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllCategories } from '@/lib/products';
import { Reveal } from '@/components/shared/reveal';

export const revalidate = 3600;

export async function CategoryGrid() {
  let categories: Awaited<ReturnType<typeof getAllCategories>> = [];
  try {
    categories = await getAllCategories();
  } catch {
    categories = [];
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Explore Our Range
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            From fresh milk to artisanal cheese, every product is crafted with care and delivered
            fresh to your door.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.05}>
              <Link
                href={`/products/category/${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-secondary transition-all group-hover:ring-primary/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {cat.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{cat.tagline}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
