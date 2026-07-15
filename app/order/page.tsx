'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/components/providers/cart-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrderPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Lahore',
    notes: '',
  });

  const deliveryFee = subtotal > 0 && subtotal < 1000 ? 100 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const orderId = `AKD-${Date.now().toString().slice(-6)}`;
      setLoading(false);
      clearCart();
      router.push(`/order/confirmation?id=${orderId}`);
    }, 1500);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  if (items.length === 0) {
    return (
      <>
        <PageHero eyebrow="Checkout" title="Order Now" />
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <ShoppingBag className="h-9 w-9 text-muted-foreground" />
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Add some products to your cart before checking out.
          </p>
          <Button asChild className="mt-6">
            <a href="/products">Browse Products</a>
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Checkout" title="Order Now" description="Complete your order and we'll deliver fresh dairy to your door." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Order Now' }]} className="mb-8" />

        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12">
          {/* Form */}
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-semibold">Delivery Information</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required value={form.name} onChange={update('name')} placeholder="Saad Akbar" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" required value={form.phone} onChange={update('phone')} placeholder="+92 30 61487240" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={form.email} onChange={update('email')} placeholder="saad.akbar.global@gmail.com" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Input id="address" required value={form.address} onChange={update('address')} placeholder="House #, Street, Area" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" required value={form.city} onChange={update('city')} />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-semibold">Payment Method</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  We currently accept Cash on Delivery. Online payment coming soon.
                </p>
                <div className="mt-4 flex items-center gap-3 rounded-xl border-2 border-primary bg-primary/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Cash on Delivery</span>
                </div>
              </div>

              <Button type="submit" size="lg" disabled={loading} className="w-full">
                {loading ? (
                  'Placing Order...'
                ) : (
                  <>
                    Place Order — Rs {total.toLocaleString()}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>

          {/* Order summary */}
          <Reveal delay={0.1}>
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Order Summary</h2>
              <div className="mt-4 max-h-[300px] space-y-3 overflow-y-auto">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-3"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="truncate text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.unit}</p>
                        <div className="mt-1 flex items-center justify-between">
                          <div className="flex items-center rounded-lg border border-border">
                            <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex h-6 w-6 items-center justify-center text-muted-foreground hover:text-foreground">
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-6 text-center text-xs font-medium">{item.quantity}</span>
                            <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex h-6 w-6 items-center justify-center text-muted-foreground hover:text-foreground">
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            Rs {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id)} className="self-start rounded p-1 text-muted-foreground hover:text-destructive" aria-label="Remove">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">Rs {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-medium">{deliveryFee === 0 ? 'Free' : `Rs ${deliveryFee}`}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-primary">Rs {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
