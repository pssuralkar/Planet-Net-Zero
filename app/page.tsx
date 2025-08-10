import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { StatsSection } from '@/components/sections/stats-section';
import { InteractiveSection } from '@/components/sections/interactive-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <InteractiveSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}