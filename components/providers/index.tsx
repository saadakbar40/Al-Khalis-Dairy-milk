'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { CartProvider } from './cart-provider';
import { WishlistProvider } from './wishlist-provider';
import { AuthProvider } from './auth-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </NextThemesProvider>
  );
}
