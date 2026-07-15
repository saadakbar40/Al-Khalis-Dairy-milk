'use client';

import Link from 'next/link';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '@/components/providers/wishlist-provider';
import { useCart } from '@/components/providers/cart-provider';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/shared/page-hero';
import { motion, AnimatePresence } from 'framer-motion';

export default function WishlistPage() {
  const { items, remove: removeWish, clear } = useWishlist();
  const { addItem, setIsOpen } = useCart();

  const moveToCart = (item: (typeof items)[0]) => {
    addItem({
      id: item.id,
      slug: item.slug,
      name: item.name,
      price: item.price,
      image: item.image,
      unit: '1 unit',
    });
    removeWish(item.id);
    setIsOpen(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Saved Items"
        title="Your Wishlist"
        description="Products you've saved to buy later."
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-9 w-9 text-muted-foreground" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">Your wishlist is empty</h2>
            <p className="mt-2 text-muted-foreground">
              Save products you love by tapping the heart icon.
            </p>
            <Button asChild className="mt-6">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {items.length} item{items.length !== 1 ? 's' : ''} in your wishlist
              </p>
              <Button variant="outline" size="sm" onClick={clear}>
                Clear All
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} className="h-24 w-24 shrink-0 rounded-xl object-cover" />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <Link href={`/products/${item.slug}`} className="truncate font-semibold hover:text-primary">
                        {item.name}
                      </Link>
                      <p className="mt-1 font-bold text-primary">Rs {item.price.toLocaleString()}</p>
                      <div className="mt-auto flex items-center gap-2 pt-3">
                        <Button size="sm" onClick={() => moveToCart(item)}>
                          <ShoppingBag className="mr-1.5 h-3.5 w-3.5" />
                          Add to Cart
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => removeWish(item.id)} aria-label="Remove">
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </>
  );
}
