import type { Metadata } from 'next';
import { products } from '@/lib/data';
import { ProductGrid } from '@/components/products/product-grid';
import { PageHero } from '@/components/shared/page-hero';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Browse our full range of fresh milk, yogurt, cheese, butter, ghee, and dairy desserts — all 100% pure and preservative-free.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop All"
        title="Our Products"
        description="Pure, fresh, and natural dairy — sourced from our family farms and delivered to your door."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Products' }]} className="mb-8" />
        <ProductGrid products={products} />
      </div>
    </>
  );
}
