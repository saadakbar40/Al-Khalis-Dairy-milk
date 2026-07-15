import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { BackToTop } from '@/components/layout/back-to-top';
import { CookieConsent } from '@/components/layout/cookie-consent';
import { LoadingScreen } from '@/components/shared/loading-screen';
import { SiteConfig } from '@/lib/site-config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1c14' },
  ],
  metadataBase: new URL(SiteConfig.url),
  title: {
    default: `${SiteConfig.name} — Pure, Fresh & Natural Dairy`,
    template: `%s | ${SiteConfig.name}`,
  },
  description: SiteConfig.description,
  keywords: [
    'dairy',
    'fresh milk',
    'organic dairy',
    'Al Khalis Dairy',
    'farm fresh',
    'yogurt',
    'cheese',
    'butter',
    'ghee',
    'pure milk delivery',
  ],
  authors: [{ name: SiteConfig.name }],
  creator: SiteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SiteConfig.url,
    siteName: SiteConfig.name,
    title: `${SiteConfig.name} — Pure, Fresh & Natural Dairy`,
    description: SiteConfig.description,
    images: [{ url: SiteConfig.ogImage, width: 1200, height: 630, alt: SiteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SiteConfig.name} — Pure, Fresh & Natural Dairy`,
    description: SiteConfig.description,
    images: [SiteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SiteConfig.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
          <LoadingScreen />
        </Providers>
      </body>
    </html>
  );
}
