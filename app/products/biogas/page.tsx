import { Metadata } from 'next';
import { BiogasProductsHero } from '@/components/products/biogas-products-hero';
import { BiogasTechnologies } from '@/components/products/biogas-technologies';
import { BiogasApplications } from '@/components/products/biogas-applications';
import { BiogasPerformance } from '@/components/products/biogas-performance';
import { BiogasSupport } from '@/components/products/biogas-support';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Biogas Purification Products - Planet Net Zero',
  description: 'Complete biogas purification and upgrading solutions including membrane separation, PSA systems, water scrubbing, and biogas-to-RNG conversion technologies.',
  keywords: ['biogas purification', 'biogas upgrading', 'membrane separation', 'biogas to RNG', 'renewable natural gas', 'biogas cleaning', 'methane purification'],
};

export default function BiogasProductsPage() {
  return (
    <>
      <BiogasProductsHero />
      <BiogasTechnologies />
      <BiogasApplications />
      <BiogasPerformance />
      <BiogasSupport />
      <CTASection />
    </>
  );
}