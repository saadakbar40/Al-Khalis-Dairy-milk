import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/lib/products';
import { ProductCard } from '@/components/shared/product-card';
import { Reveal } from '@/components/shared/reveal';

export const revalidate = 3600;

export async function FeaturedProducts() {
  let featured: Awaited<ReturnType<typeof getFeaturedProducts>> = [];
  try {
    featured = await getFeaturedProducts(4);
  } catch {
    featured = [];
  }

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Customer Favourites
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Bestselling Dairy
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              The products our customers keep coming back for, week after week.
            </p>
          </Reveal>
          <Reveal>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
