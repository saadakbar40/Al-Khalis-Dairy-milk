'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from '@/components/providers/cart-provider';
import { useWishlist } from '@/components/providers/wishlist-provider';
import { RatingStars } from './rating-stars';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem, setIsOpen } = useCart();
  const { toggle, has } = useWishlist();
  const wished = has(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      unit: product.unit,
    });
    setIsOpen(true);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  const discount =
    product.discount && product.discount > 0
      ? product.discount
      : product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-1.5">
              {product.badge && (
                <Badge className="bg-primary text-primary-foreground shadow-sm">
                  {product.badge}
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="destructive" className="shadow-sm">
                  -{discount}%
                </Badge>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={handleWishlist}
              aria-label="Toggle wishlist"
              className={cn(
                'absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-all',
                wished
                  ? 'bg-destructive text-destructive-foreground'
                  : 'bg-white/80 text-foreground hover:bg-white'
              )}
            >
              <Heart className={cn('h-4 w-4', wished && 'fill-current')} />
            </button>

            {/* Quick add on hover */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
              <Button
                onClick={handleAdd}
                disabled={!product.inStock}
                className="w-full"
                size="sm"
              >
                <ShoppingBag className="mr-1.5 h-4 w-4" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {product.category}
              </p>
              <RatingStars rating={product.rating} size={13} showValue reviews={product.reviews} />
            </div>
            <h3 className="mt-1.5 line-clamp-1 font-semibold text-foreground transition-colors group-hover:text-primary">
              {product.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {product.shortDescription}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">
                  Rs {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    Rs {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-xs text-muted-foreground">{product.unit}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="aspect-square animate-pulse bg-secondary" />
      <div className="space-y-2 p-4">
        <div className="h-3 w-20 animate-pulse rounded bg-secondary" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-secondary" />
        <div className="h-3 w-full animate-pulse rounded bg-secondary" />
        <div className="flex justify-between pt-2">
          <div className="h-5 w-16 animate-pulse rounded bg-secondary" />
          <div className="h-3 w-10 animate-pulse rounded bg-secondary" />
        </div>
      </div>
    </div>
  );
}
