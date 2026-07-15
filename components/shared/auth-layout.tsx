'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from '@/components/layout/logo';
import { SiteConfig } from '@/lib/site-config';

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background lg:flex-row">
      {/* Left brand panel */}
      <div className="relative hidden lg:flex lg:w-1/2">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <Link href="/" className="inline-flex w-fit">
            <Logo variant="light" />
          </Link>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl font-bold leading-tight"
            >
              Pure, Fresh & Natural Dairy — Delivered to Your Door
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-md text-lg text-white/80"
            >
              Join thousands of families who trust {SiteConfig.name} for farm-fresh milk, yogurt,
              cheese, and more — every single morning.
            </motion.p>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <p className="font-display text-3xl font-bold">10,000+</p>
                <p className="text-sm text-white/70">Happy Customers</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="font-display text-3xl font-bold">100%</p>
                <p className="text-sm text-white/70">Pure & Natural</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="font-display text-3xl font-bold">12 hrs</p>
                <p className="text-sm text-white/70">Farm to Door</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/60">
            &ldquo;Al Khalis has completely changed how my family enjoys dairy.&rdquo;
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-display text-3xl font-bold tracking-tight">{title}</h1>
            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8"
          >
            {children}
          </motion.div>

          <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>
        </div>
      </div>
    </div>
  );
}
