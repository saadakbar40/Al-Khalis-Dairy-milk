'use client';

import { useState, useMemo } from 'react';
import { ProductCard, ProductCardSkeleton } from '@/components/shared/product-card';
import type { Product, ProductCategory } from '@/lib/data';
import { cn } from '@/lib/utils';
import { SlidersHorizontal } from 'lucide-react';

type ProductGridProps = {
  products: Product[];
  categories?: ProductCategory[];
  showCategoryFilter?: boolean;
};

type SortKey = 'featured' | 'price-low' | 'price-high' | 'rating';

export function ProductGrid({
  products: allProducts,
  categories = [],
  showCategoryFilter = true,
}: ProductGridProps) {
  const [category, setCategory] = useState<string>('all');
  const [sort, setSort] = useState<SortKey>('featured');
  const [loading] = useState(false);

  const filtered = useMemo(() => {
    let result = [...allProducts];
    if (category !== 'all') {
      result = result.filter((p) => p.categorySlug === category);
    }
    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }
    return result;
  }, [allProducts, category, sort]);

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {showCategoryFilter && (
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                category === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card hover:bg-secondary'
              )}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.slug)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  category === cat.slug
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card hover:bg-secondary'
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium outline-none focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
          : filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>

      {filtered.length === 0 && !loading && (
        <div className="py-20 text-center">
          <p className="text-lg font-medium">No products found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try selecting a different category.
          </p>
        </div>
      )}
    </div>
  );
}
