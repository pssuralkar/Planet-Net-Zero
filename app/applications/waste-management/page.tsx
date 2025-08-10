import { Metadata } from 'next';
import { WasteManagementHero } from '@/components/applications/waste-management-hero';
import { WasteTypesSection } from '@/components/applications/waste-types-section';
import { TreatmentTechnologies } from '@/components/applications/treatment-technologies';
import { WasteApplications } from '@/components/applications/waste-applications';
import { SustainabilitySection } from '@/components/applications/sustainability-section';

export const metadata: Metadata = {
  title: 'Waste Management Solutions - Planet Net Zero',
  description: 'Advanced waste management and treatment technologies for sustainable waste processing, biogas recovery, and circular economy solutions.',
  keywords: ['waste management', 'waste treatment', 'biogas recovery', 'circular economy', 'waste to energy', 'sustainable waste processing'],
};

export default function WasteManagementPage() {
  return (
    <>
      <WasteManagementHero />
      <WasteTypesSection />
      <TreatmentTechnologies />
      <WasteApplications />
      <SustainabilitySection />
    </>
  );
}