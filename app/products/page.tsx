import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/products';
import { ProductGrid } from '@/components/products/product-grid';
import { PageHero } from '@/components/shared/page-hero';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Browse our full range of fresh milk, yogurt, cheese, butter, ghee, and dairy desserts — all 100% pure and preservative-free.',
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <>
      <PageHero
        eyebrow="Shop All"
        title="Our Products"
        description="Pure, fresh, and natural dairy — sourced from our family farms and delivered to your door."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Products' }]} className="mb-8" />
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg font-medium">No products available</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Please check back soon — our fresh dairy is on the way.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
