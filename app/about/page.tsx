import { Metadata } from 'next';
import { AboutHero } from '@/components/about/about-hero';
import { CompanyStory } from '@/components/about/company-story';
import { TeamSection } from '@/components/about/team-section';
import { ValuesSection } from '@/components/about/values-section';
import { CertificationsSection } from '@/components/about/certifications-section';

export const metadata: Metadata = {
  title: 'About Us - Planet Net Zero',
  description: 'Learn about Planet Net Zero\'s mission to provide cutting-edge environmental technology solutions. Our team of experts has been leading the industry for over 25 years.',
  keywords: ['about planet net zero', 'environmental technology company', 'emission control experts', 'sustainability solutions'],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <ValuesSection />
      <TeamSection />
      <CertificationsSection />
    </>
  );
}