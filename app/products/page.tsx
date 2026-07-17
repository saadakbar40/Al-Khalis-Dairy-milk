import type { Metadata } from 'next';
import { getAllProducts, getAllCategories } from '@/lib/products';
import { ProductGrid } from '@/components/products/product-grid';
import { PageHero } from '@/components/shared/page-hero';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Browse our full range of fresh milk, yogurt, cheese, butter, ghee, and dairy desserts — all 100% pure and preservative-free.',
};

export const revalidate = 3600;

export default async function ProductsPage() {
  let products: Awaited<ReturnType<typeof getAllProducts>> = [];
  let categories: Awaited<ReturnType<typeof getAllCategories>> = [];
  let hasError = false;

  try {
    [products, categories] = await Promise.all([getAllProducts(), getAllCategories()]);
  } catch {
    hasError = true;
  }

  return (
    <>
      <PageHero
        eyebrow="Shop All"
        title="Our Products"
        description="Pure, fresh, and natural dairy — sourced from our family farms and delivered to your door."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Products' }]} className="mb-8" />
        {hasError ? (
          <div className="py-20 text-center">
            <p className="text-lg font-medium">Something went wrong</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We couldn’t load the products. Please try again later.
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-medium">No products available</p>
            <p className="mt-1 text-sm text-muted-foreground">
              New products are coming soon. Please check back later.
            </p>
          </div>
        ) : (
          <ProductGrid products={products} categories={categories} />
        )}
      </div>
    </>
  );
}
