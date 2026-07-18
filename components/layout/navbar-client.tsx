'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, ShoppingBag, Heart, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { UserMenu } from './user-menu';
import { SearchDialog } from './search-dialog';
import { useCart } from '@/components/providers/cart-provider';
import { useWishlist } from '@/components/providers/wishlist-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ProductCategory } from '@/lib/data';

export function NavbarClient({ categories }: { categories: ProductCategory[] }) {
  const pathname = usePathname();
  const { count: cartCount, setIsOpen: setCartOpen } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60'
            : 'border-b border-transparent bg-background'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="Home">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                const hasDropdown = link.href === '/products';
                return (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        active
                          ? 'text-primary'
                          : 'text-foreground/80 hover:text-primary'
                      )}
                    >
                      {link.label}
                      {hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                    </Link>
                    {hasDropdown && categories.length > 0 && (
                      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                          <div className="grid gap-1 p-2">
                            <Link
                              href="/products"
                              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                            >
                              All Products
                            </Link>
                            {categories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/products/category/${cat.slug}`}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <ThemeToggle />
              <UserMenu />
              <Link
                href="/wishlist"
                className="relative flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                {mounted && wishlistCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {mounted && cartCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </button>
              <Button asChild className="ml-1 hidden sm:inline-flex" size="sm">
                <Link href="/order">Order Now</Link>
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-secondary lg:hidden"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm overflow-y-auto border-l border-border bg-background p-6 lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-muted-foreground hover:bg-secondary"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                      pathname === link.href
                        ? 'bg-secondary text-primary'
                        : 'text-foreground/80 hover:bg-secondary'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                {categories.length > 0 && (
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Categories
                    </p>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products/category/${cat.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </nav>
              <Button asChild className="mt-6 w-full">
                <Link href="/order">Order Now</Link>
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} categories={categories} />
    </>
  );
}
