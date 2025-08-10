import { Metadata } from 'next';
import { CBGRNGHero } from '@/components/applications/cbg-rng-hero';
import { CBGRNGProcess } from '@/components/applications/cbg-rng-process';
import { CBGRNGBenefits } from '@/components/applications/cbg-rng-benefits';
import { CBGRNGCaseStudies } from '@/components/applications/cbg-rng-case-studies';
import { CBGRNGTechnology } from '@/components/applications/cbg-rng-technology';

export const metadata: Metadata = {
  title: 'Compressed Biogas (CBG) & RNG Solutions - Planet Net Zero',
  description: 'Advanced biogas purification and upgrading solutions for compressed biogas (CBG) and renewable natural gas (RNG) production. Achieve 95%+ methane purity.',
  keywords: ['compressed biogas', 'CBG', 'RNG', 'renewable natural gas', 'biogas purification', 'biogas upgrading', 'methane purification'],
};

export default function CBGRNGPage() {
  return (
    <>
      <CBGRNGHero />
      <CBGRNGProcess />
      <CBGRNGTechnology />
      <CBGRNGBenefits />
      <CBGRNGCaseStudies />
    </>
  );
}