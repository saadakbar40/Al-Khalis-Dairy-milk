'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Phone, User, LogOut } from 'lucide-react';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { SearchDialog } from './search-dialog';
import { CartDrawer } from './cart-drawer';
import { UserMenu } from './user-menu';
import { useCart } from '@/components/providers/cart-provider';
import { useWishlist } from '@/components/providers/wishlist-provider';
import { useAuth } from '@/components/providers/auth-provider';
import { useScrolled } from '@/hooks/use-ui';
import { categories } from '@/lib/data';
import { SiteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products', hasDropdown: true },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const scrolled = useScrolled(20);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const { count: wishCount } = useWishlist();
  const { user, isAuthenticated, signOut } = useAuth();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const handleSignOut = () => {
    signOut();
    setMobileOpen(false);
    toast.success('Signed out successfully');
    router.push('/');
  };

  return (
    <>
      <div className="hidden bg-primary px-4 py-1.5 text-center text-xs font-medium text-primary-foreground md:block">
        Free delivery on orders over Rs 1,000 · Fresh milk delivered every morning
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled ? 'glass border-b border-border/60 shadow-sm' : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="Al Khalis Dairy home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  )}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>

                {link.hasDropdown && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-2 grid grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-3 shadow-xl">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/products/category/${cat.slug}`}
                          className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-secondary"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={cat.image}
                            alt=""
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-sm font-semibold">{cat.name}</p>
                            <p className="text-xs text-muted-foreground">{cat.tagline}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-secondary"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <ThemeToggle />

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-secondary"
            >
              <Heart className="h-[18px] w-[18px]" />
              {wishCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
                  {wishCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-secondary"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </button>

            <UserMenu />

            <a
              href={`tel:${SiteConfig.contact.phonePrimary.replace(/\s/g, '')}`}
              className="hidden items-center gap-2 rounded-full border border-border/60 px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary xl:inline-flex"
            >
              <Phone className="h-4 w-4 text-primary" />
              {SiteConfig.contact.phonePrimary}
            </a>

            <Button asChild size="sm" className="hidden h-9 rounded-full px-4 lg:inline-flex">
              <Link href="/order">Order Now</Link>
            </Button>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[90] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 360, damping: 38 }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-card shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-muted-foreground hover:bg-secondary"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-3 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive(link.href)
                        ? 'bg-secondary text-primary'
                        : 'text-foreground/80 hover:bg-secondary/60'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-4 border-t border-border pt-4">
                  <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Categories
                  </p>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products/category/${cat.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm hover:bg-secondary/60"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cat.image} alt="" className="h-8 w-8 rounded-lg object-cover" />
                      {cat.name}
                    </Link>
                  ))}
                </div>

                {/* Account section */}
                <div className="mt-4 border-t border-border pt-4">
                  <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Account
                  </p>
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center gap-3 rounded-xl px-4 py-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {user?.name?.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase() || 'U'}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{user?.name}</p>
                          <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
                        </div>
                      </div>
                      <Link
                        href="/wishlist"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm hover:bg-secondary/60"
                      >
                        <Heart className="h-4 w-4 text-muted-foreground" />
                        Wishlist
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-2 px-4">
                      <Button asChild className="w-full" onClick={() => setMobileOpen(false)}>
                        <Link href="/login">
                          <User className="mr-2 h-4 w-4" /> Sign In
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full" onClick={() => setMobileOpen(false)}>
                        <Link href="/signup">Create Account</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-border p-4">
                <Button asChild className="w-full" size="lg">
                  <Link href="/order" onClick={() => setMobileOpen(false)}>
                    Order Now
                  </Link>
                </Button>
                <a
                  href={`tel:${SiteConfig.contact.phonePrimary.replace(/\s/g, '')}`}
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {SiteConfig.contact.phonePrimary}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <CartDrawer />
    </>
  );
}
