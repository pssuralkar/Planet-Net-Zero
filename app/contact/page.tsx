import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { LocationsSection } from '@/components/contact/locations-section';

export const metadata: Metadata = {
  title: 'Contact Us - Planet Net Zero',
  description: 'Get in touch with Planet Net Zero for environmental technology solutions. Free consultation available. Contact our experts today.',
  keywords: ['contact planet net zero', 'environmental technology consultation', 'emission control experts', 'free consultation'],
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24">
        <ContactForm />
        <ContactInfo />
      </div>
      <LocationsSection />
    </>
  );
}