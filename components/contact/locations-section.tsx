"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
  {
    name: 'North America Headquarters',
    address: '123 Green Technology Blvd, Sustainable City, SC 12345, USA',
    phone: '+1 (555) 123-4567',
    email: 'na@planetnetzero.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
    services: ['Sales', 'Engineering', 'Manufacturing', 'Support'],
    isHeadquarters: true,
  },
  {
    name: 'European Operations',
    address: '45 Eco Innovation Street, Green District, Berlin, Germany',
    phone: '+49 30 12345678',
    email: 'eu@planetnetzero.com',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM CET',
    services: ['Sales', 'Engineering', 'Support'],
    isHeadquarters: false,
  },
  {
    name: 'Asia Pacific Center',
    address: '789 Sustainability Avenue, Singapore 123456',
    phone: '+65 6123 4567',
    email: 'apac@planetnetzero.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
    services: ['Sales', 'Support', 'Regional Manufacturing'],
    isHeadquarters: false,
  },
  {
    name: 'Middle East & Africa',
    address: '321 Clean Energy Plaza, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'mea@planetnetzero.com',
    hours: 'Sun-Thu: 8:00 AM - 5:00 PM GST',
    services: ['Sales', 'Project Management', 'Support'],
    isHeadquarters: false,
  },
];

const serviceAreas = [
  { region: 'North America', countries: '3 countries', projects: '150+ projects' },
  { region: 'Europe', countries: '12 countries', projects: '200+ projects' },
  { region: 'Asia Pacific', countries: '8 countries', projects: '120+ projects' },
  { region: 'Middle East & Africa', countries: '6 countries', projects: '80+ projects' },
];

export function LocationsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Global Presence, Local Support
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            With offices and service centers worldwide, we provide local expertise 
            and support wherever your projects are located.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card 
              key={location.name}
              className={`hover:shadow-xl transition-all duration-500 ${location.isHeadquarters ? 'ring-2 ring-green-200 bg-green-50' : ''} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {location.name}
                  </CardTitle>
                  {location.isHeadquarters && (
                    <Badge className="bg-green-100 text-green-800">
                      Headquarters
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{location.address}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-sm text-blue-600 hover:underline">
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-sm text-blue-600 hover:underline">
                    {location.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{location.hours}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Services Available:</p>
                  <div className="flex flex-wrap gap-1">
                    {location.services.map(service => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className={`transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Service Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={area.region} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">{area.region}</h4>
                  <p className="text-sm text-gray-600 mb-1">{area.countries}</p>
                  <p className="text-sm text-green-600 font-medium">{area.projects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Support in Your Region?</h3>
              <p className="text-lg mb-6 text-white/90">
                Our global team is ready to assist you with your environmental technology needs, 
                no matter where you're located.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Call Now
                </a>
                <a
                  href="mailto:info@planetnetzero.com"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}