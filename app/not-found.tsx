'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Milk } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/logo';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      {/* Decorative blobs */}
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" />
      <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-blob" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="font-display text-[120px] font-bold leading-none text-primary/20 sm:text-[180px]">
            4
          </span>
          <div className="flex h-20 w-20 items-center justify-center sm:h-28 sm:w-28">
            <Logo showText={false} className="scale-[2.5] sm:scale-[3.5]" />
          </div>
          <span className="font-display text-[120px] font-bold leading-none text-primary/20 sm:text-[180px]">
            4
          </span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Oops! Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative mt-3 max-w-md text-muted-foreground"
      >
        The page you&apos;re looking for seems to have gone sour. Let&apos;s get you back to something
        fresh.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/products">
            <Search className="mr-2 h-4 w-4" />
            Browse Products
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative mt-8 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Milk className="h-4 w-4 text-primary" />
        <Link href="/contact" className="hover:text-primary">
          Need help? Contact us
        </Link>
      </motion.div>
    </div>
  );
}
