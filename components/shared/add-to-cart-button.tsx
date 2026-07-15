'use client';

import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/components/providers/cart-provider';
import { Product } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type AddToCartButtonProps = {
  product: Product;
  quantity?: number;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  openCart?: boolean;
};

export function AddToCartButton({
  product,
  quantity = 1,
  className,
  size = 'default',
  openCart = true,
}: AddToCartButtonProps) {
  const { addItem, setIsOpen } = useCart();
  const [added, setAdded] = useState(false);

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
    if (openCart) setIsOpen(true);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button
      onClick={handleAdd}
      disabled={!product.inStock || added}
      size={size}
      className={cn(className)}
    >
      {!product.inStock ? (
        'Out of Stock'
      ) : added ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Added!
        </>
      ) : (
        <>
          <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
        </>
      )}
    </Button>
  );
}
