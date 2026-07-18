'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, CornerDownLeft } from 'lucide-react';
import { products, categories } from '@/lib/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

type SearchResult = {
  type: 'product' | 'category';
  id: string;
  label: string;
  sublabel: string;
  image: string;
  href: string;
};

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
      if (e.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onOpenChange]);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const catMatches = categories
      .filter((c) => c.name.toLowerCase().includes(q))
      .slice(0, 3)
      .map((c) => ({
        type: 'category' as const,
        id: c.id,
        label: c.name,
        sublabel: c.tagline,
        image: c.image,
        href: `/products/category/${c.slug}`,
      }));
    const productMatches = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
      .slice(0, 6)
      .map((p) => ({
        type: 'product' as const,
        id: p.id,
        label: p.name,
        sublabel: p.category,
        image: p.images[0],
        href: `/products/${p.slug}`,
      }));
    return [...catMatches, ...productMatches];
  }, [query]);

  const selectItem = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      e.preventDefault();
      selectItem(results[activeIndex].href);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-[12%] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for milk, yogurt, cheese…"
                  className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                />
                <button
                  onClick={() => onOpenChange(false)}
                  className="rounded-md p-1 text-muted-foreground hover:bg-secondary"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {query.trim() === '' ? (
                  <div className="px-3 py-8 text-center text-sm text-muted-foreground">
                    Type to search our products and categories
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-3 py-8 text-center text-sm text-muted-foreground">
                    No results for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  <ul className="space-y-1">
                    {results.map((r, i) => (
                      <li key={`${r.type}-${r.id}`}>
                        <button
                          onMouseEnter={() => setActiveIndex(i)}
                          onClick={() => selectItem(r.href)}
                          className={cn(
                            'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                            activeIndex === i ? 'bg-secondary' : 'hover:bg-secondary/60'
                          )}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={r.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">{r.label}</p>
                            <p className="truncate text-xs text-muted-foreground">{r.sublabel}</p>
                          </div>
                          <span className="rounded-md border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                            {r.type}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {query.trim() !== '' && results.length > 0 && (
                <div className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CornerDownLeft className="h-3 w-3" /> to select
                  </span>
                  <span>{results.length} results</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
