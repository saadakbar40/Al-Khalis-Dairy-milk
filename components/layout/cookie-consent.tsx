'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const KEY = 'alkhalis-cookie-consent';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(KEY);
    if (!consent) {
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const handle = (value: 'accepted' | 'declined') => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-2xl sm:left-6 sm:right-6"
        >
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-2xl sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <p className="flex-1 text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyse site traffic. By
              clicking accept, you agree to our use of cookies.{' '}
              <Link href="/privacy-policy" className="font-medium text-primary hover:underline">
                Learn more
              </Link>
            </p>
            <div className="flex w-full gap-2 sm:w-auto">
              <Button variant="outline" size="sm" onClick={() => handle('declined')} className="flex-1 sm:flex-none">
                Decline
              </Button>
              <Button size="sm" onClick={() => handle('accepted')} className="flex-1 sm:flex-none">
                Accept
              </Button>
              <button
                onClick={() => handle('declined')}
                aria-label="Close"
                className="rounded-md p-1 text-muted-foreground hover:bg-secondary sm:hidden"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
