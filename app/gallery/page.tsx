'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '@/lib/content';
import { PageHero } from '@/components/shared/page-hero';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Glimpse Into Our World"
        description="From lush green pastures to golden ghee — see the care and craft behind every Al Khalis product."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border',
                img.span
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
              <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                {img.alt}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={lightbox}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/80">
              {galleryImages[lightbox].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
