'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag, Check, Minus, Plus, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from '@/components/providers/cart-provider';
import { useWishlist } from '@/components/providers/wishlist-provider';
import { RatingStars } from '@/components/shared/rating-stars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function ProductInfo({ product }: { product: Product }) {
  const { addItem, setIsOpen } = useCart();
  const { toggle, has } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const wished = has(product.id);

  const handleAdd = () => {
    addItem(
      {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0],
        unit: product.unit,
      },
      quantity
    );
    setIsOpen(true);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount =
    product.discount && product.discount > 0
      ? product.discount
      : product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <Link
          href={`/products/category/${product.categorySlug}`}
          className="text-sm font-medium uppercase tracking-wide text-primary hover:underline"
        >
          {product.category}
        </Link>
        {product.badge && (
          <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>
        )}
        {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
      </div>

      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {product.name}
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <RatingStars rating={product.rating} size={18} showValue reviews={product.reviews} />
      </div>

      <p className="mt-4 text-base text-muted-foreground">{product.shortDescription}</p>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-3xl font-bold text-primary">
          Rs {product.price.toLocaleString()}
        </span>
        {product.oldPrice && (
          <span className="text-lg text-muted-foreground line-through">
            Rs {product.oldPrice.toLocaleString()}
          </span>
        )}
        <span className="text-sm text-muted-foreground">/ {product.unit}</span>
      </div>

      <Separator className="my-6" />

      {/* Stock */}
      <div className="flex items-center gap-2">
        {product.inStock ? (
          <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Check className="h-4 w-4" /> In Stock
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-sm font-medium text-destructive">
            <span className="h-2 w-2 rounded-full bg-destructive" /> Out of Stock
          </span>
        )}
      </div>

      {/* Quantity + Add to cart */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-xl border border-border">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-11 w-11 items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-12 text-center font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-11 w-11 items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <Button
          onClick={handleAdd}
          disabled={!product.inStock || added}
          size="lg"
          className="flex-1"
        >
          {!product.inStock ? (
            'Out of Stock'
          ) : added ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Added to Cart!
            </>
          ) : (
            <>
              <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
            </>
          )}
        </Button>

        <button
          onClick={() =>
            toggle({
              id: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.images[0],
            })
          }
          aria-label="Toggle wishlist"
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-xl border transition-colors',
            wished
              ? 'border-destructive bg-destructive text-destructive-foreground'
              : 'border-border hover:bg-secondary'
          )}
        >
          <Heart className={cn('h-5 w-5', wished && 'fill-current')} />
        </button>
      </div>

      {/* Trust badges */}
      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <Truck className="h-5 w-5 text-primary" />
          <p className="text-xs text-muted-foreground">Fresh delivery in 12 hrs</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <p className="text-xs text-muted-foreground">Quality tested</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <RotateCcw className="h-5 w-5 text-primary" />
          <p className="text-xs text-muted-foreground">Easy returns</p>
        </div>
      </div>
    </div>
  );
}
