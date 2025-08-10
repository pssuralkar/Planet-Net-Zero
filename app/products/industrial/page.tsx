import { Metadata } from 'next';
import { IndustrialProductsHero } from '@/components/products/industrial-products-hero';
import { ProductCategories } from '@/components/products/product-categories';
import { TechnicalSpecs } from '@/components/products/technical-specs';
import { CaseStudiesSection } from '@/components/products/case-studies-section';
import { SupportSection } from '@/components/products/support-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Industrial Emission Control Products - Planet Net Zero',
  description: 'Advanced industrial emission control systems including sulphur removal, chemical scrubbers, flue gas desulfurization, and PSA/VPSA units for manufacturing and power generation.',
  keywords: ['industrial emission control', 'sulphur removal systems', 'chemical scrubbers', 'flue gas desulfurization', 'PSA units', 'VPSA systems', 'industrial air pollution control'],
};

export default function IndustrialProductsPage() {
  return (
    <>
      <IndustrialProductsHero />
      <ProductCategories />
      <TechnicalSpecs />
      <CaseStudiesSection />
      <SupportSection />
      <CTASection />
    </>
  );
}