'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, LogOut, Heart, ShoppingBag, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '@/components/providers/auth-provider';
import { useMounted } from '@/hooks/use-ui';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function UserMenu() {
  const router = useRouter();
  const { user, isAuthenticated, signOut } = useAuth();
  const mounted = useMounted();
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    setOpen(false);
    toast.success('Signed out successfully');
    router.push('/');
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60">
        <User className="h-[18px] w-[18px] text-foreground" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-1.5">
        <Link
          href="/login"
          className="hidden rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary sm:inline-flex"
        >
          Sign In
        </Link>
        <Button
          asChild
          size="sm"
          className="hidden h-9 rounded-full px-4 sm:inline-flex"
        >
          <Link href="/signup">Sign Up</Link>
        </Button>
        {/* Mobile icon */}
        <Link
          href="/login"
          aria-label="Sign in"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-secondary sm:hidden"
        >
          <User className="h-[18px] w-[18px]" />
        </Link>
      </div>
    );
  }

  const initials = user?.name
    ?.split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'U';

  const menuItems = [
    { label: 'My Orders', href: '/order', icon: ShoppingBag },
    { label: 'Wishlist', href: '/wishlist', icon: Heart },
    { label: 'Account Settings', href: '/account', icon: Settings },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-border/60 py-1 pl-1 pr-2 transition-colors hover:bg-secondary"
        aria-label="Account menu"
      >
        <Avatar className="h-7 w-7 border border-border">
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <ChevronDown className={cn('h-3.5 w-3.5 text-muted-foreground transition-transform', open && 'rotate-180')} />
      </button>

      {/* Dropdown */}
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            {/* User info header */}
            <div className="border-b border-border bg-secondary/30 px-4 py-3">
              <p className="truncate text-sm font-semibold">{user?.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
            </div>

            {/* Menu items */}
            <div className="p-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Sign out */}
            <div className="border-t border-border p-2">
              <button
                onClick={handleSignOut}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
