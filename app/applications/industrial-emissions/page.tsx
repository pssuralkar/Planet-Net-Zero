import { Metadata } from 'next';
import { IndustrialEmissionsHero } from '@/components/applications/industrial-emissions-hero';
import { EmissionSources } from '@/components/applications/emission-sources';
import { TechnologySolutions } from '@/components/applications/technology-solutions';
import { IndustryApplications } from '@/components/applications/industry-applications';
import { ComplianceSection } from '@/components/applications/compliance-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Industrial Emissions Control - Planet Net Zero',
  description: 'Advanced industrial emission control solutions including flue gas desulfurization, chemical scrubbers, and multi-pollutant removal systems for manufacturing, power generation, and chemical processing.',
  keywords: ['industrial emissions control', 'flue gas desulfurization', 'chemical scrubbers', 'SO2 removal', 'NOx reduction', 'particulate control', 'air pollution control'],
};

export default function IndustrialEmissionsPage() {
  return (
    <>
      <IndustrialEmissionsHero />
      <EmissionSources />
      <TechnologySolutions />
      <IndustryApplications />
      <ComplianceSection />
      <CTASection />
    </>
  );
}