import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getProductsByCategory, getCategoryBySlug } from '@/lib/data';
import { ProductGrid } from '@/components/products/product-grid';
import { PageHero } from '@/components/shared/page-hero';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: 'Category Not Found' };
  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(params.slug);

  return (
    <>
      <PageHero
        eyebrow={category.tagline}
        title={category.name}
        description={category.description}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Products', href: '/products' }, { label: category.name }]}
          className="mb-8"
        />
        <ProductGrid products={categoryProducts} showCategoryFilter={false} />
      </div>
    </>
  );
}
