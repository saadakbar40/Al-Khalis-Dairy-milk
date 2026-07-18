import { HeroSlider } from '@/components/home/hero-slider';
import { CategoryGrid } from '@/components/home/category-grid';
import { FeaturedProducts } from '@/components/home/featured-products';
import { FeatureStrip, ProcessSection } from '@/components/home/features';
import { AboutPreview } from '@/components/home/about-preview';
import { TestimonialSection } from '@/components/home/testimonial-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeatureStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <ProcessSection />
      <AboutPreview />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
