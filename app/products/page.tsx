import { Metadata } from 'next';
import { ProductsHero } from '@/components/products/products-hero';
import { ProductOverview } from '@/components/products/product-overview';
import { ProductComparison } from '@/components/products/product-comparison';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Products - Planet Net Zero',
  description: 'Comprehensive range of environmental technology products including biogas purification systems, industrial emission control, sulphur removal, and chemical scrubbers.',
  keywords: ['environmental technology products', 'biogas purification', 'industrial emission control', 'sulphur removal systems', 'chemical scrubbers', 'FGD systems'],
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductOverview />
      <ProductComparison />
      <CTASection />
    </>
  );
}