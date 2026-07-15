'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Package, Truck, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function ConfirmationContent() {
  const params = useSearchParams();
  const orderId = params.get('id') || 'AKD-000000';

  const steps = [
    { icon: CheckCircle2, title: 'Order Confirmed', desc: "We've received your order", active: true },
    { icon: Package, title: 'Processing', desc: 'Packing your fresh dairy', active: false },
    { icon: Truck, title: 'Out for Delivery', desc: 'On the way to your door', active: false },
    { icon: Home, title: 'Delivered', desc: 'Enjoy your fresh dairy!', active: false },
  ];

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
      >
        <CheckCircle2 className="h-10 w-10 text-primary" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Order Confirmed!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-3 text-lg text-muted-foreground"
      >
        Thank you for your order. Your fresh dairy is on its way!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 rounded-xl border border-border bg-secondary/50 px-6 py-3"
      >
        <p className="text-sm text-muted-foreground">Order ID</p>
        <p className="font-display text-xl font-bold text-primary">{orderId}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 w-full"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`flex flex-col items-center gap-2 rounded-xl border p-4 ${
                step.active ? 'border-primary bg-primary/5' : 'border-border bg-card opacity-60'
              }`}
            >
              <step.icon
                className={`h-7 w-7 ${step.active ? 'text-primary' : 'text-muted-foreground'}`}
              />
              <p className="text-sm font-semibold">{step.title}</p>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </motion.div>
    </div>
  );
}

export { ConfirmationContent };
