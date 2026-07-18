import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCategoryBySlug,
  getProductsByCategory,
  getAllCategorySlugs,
} from '@/lib/products';
import { ProductGrid } from '@/components/products/product-grid';
import { PageHero } from '@/components/shared/page-hero';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await getAllCategorySlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const category = await getCategoryBySlug(params.slug);
    if (!category) return { title: 'Category Not Found' };
    return {
      title: category.name,
      description: category.description,
    };
  } catch {
    return { title: 'Category Not Found' };
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  let category;
  try {
    category = await getCategoryBySlug(params.slug);
  } catch {
    notFound();
  }
  if (!category) notFound();

  let categoryProducts: Awaited<ReturnType<typeof getProductsByCategory>> = [];
  let hasError = false;
  try {
    categoryProducts = await getProductsByCategory(params.slug);
  } catch {
    hasError = true;
  }

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
        {hasError ? (
          <div className="py-20 text-center">
            <p className="text-lg font-medium">Something went wrong</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We couldn’t load the products. Please try again later.
            </p>
          </div>
        ) : categoryProducts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-medium">No products available</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We’re stocking this category soon. Please check back later.
            </p>
          </div>
        ) : (
          <ProductGrid products={categoryProducts} showCategoryFilter={false} />
        )}
      </div>
    </>
  );
}
