'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { CartProvider } from './cart-provider';
import { WishlistProvider } from './wishlist-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </NextThemesProvider>
  );
}
