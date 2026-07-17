import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getRelatedProducts,
  getAllSlugs,
} from '@/lib/products';
import { ProductGallery } from '@/components/products/product-gallery';
import { ProductInfo } from '@/components/products/product-info';
import { ProductCard } from '@/components/shared/product-card';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { Reveal } from '@/components/shared/reveal';
import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs();
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
    const product = await getProductBySlug(params.slug);
    if (!product) return { title: 'Product Not Found' };
    return {
      title: product.name,
      description: product.shortDescription,
    };
  } catch {
    return { title: 'Product Not Found' };
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let product;
  try {
    product = await getProductBySlug(params.slug);
  } catch {
    notFound();
  }
  if (!product) notFound();

  let related: Awaited<ReturnType<typeof getRelatedProducts>> = [];
  try {
    related = await getRelatedProducts(product.categorySlug, product.id, 4);
  } catch {
    related = [];
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: product.category, href: `/products/category/${product.categorySlug}` },
          { label: product.name },
        ]}
        className="mb-8"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} alt={product.name} />
        <ProductInfo product={product} />
      </div>

      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b border-border">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6 max-w-3xl">
            <p className="text-base leading-relaxed text-foreground/90">{product.description}</p>
          </TabsContent>

          <TabsContent value="features" className="mt-6 max-w-3xl">
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6 max-w-md">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-4 py-3 text-left font-semibold">Nutrient</th>
                    <th className="px-4 py-3 text-right font-semibold">Per 100g</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nutrition.map((n, i) => (
                    <tr key={n.label} className={i % 2 === 0 ? '' : 'bg-secondary/20'}>
                      <td className="px-4 py-3 text-muted-foreground">{n.label}</td>
                      <td className="px-4 py-3 text-right font-medium">{n.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <Reveal className="mb-8">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              You may also like
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
