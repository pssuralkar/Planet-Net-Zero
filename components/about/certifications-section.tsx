"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, CheckCircle, Globe, Leaf } from 'lucide-react';

const certifications = [
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management Systems',
    icon: Leaf,
    category: 'Environmental',
    validUntil: '2026',
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management Systems',
    icon: Award,
    category: 'Quality',
    validUntil: '2025',
  },
  {
    name: 'OHSAS 18001',
    description: 'Occupational Health & Safety',
    icon: Shield,
    category: 'Safety',
    validUntil: '2025',
  },
  {
    name: 'CE Marking',
    description: 'European Conformity',
    icon: CheckCircle,
    category: 'Compliance',
    validUntil: 'Ongoing',
  },
];

const partnerships = [
  {
    name: 'Environmental Protection Agency',
    type: 'Regulatory Partner',
    logo: 'EPA',
  },
  {
    name: 'International Energy Agency',
    type: 'Research Collaboration',
    logo: 'IEA',
  },
  {
    name: 'Green Technology Institute',
    type: 'Technology Partner',
    logo: 'GTI',
  },
  {
    name: 'Sustainable Development Coalition',
    type: 'Industry Alliance',
    logo: 'SDC',
  },
];

export function CertificationsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Certifications & Partnerships
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our commitment to excellence is validated through international certifications 
            and strategic partnerships with leading organizations worldwide.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Industry Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card 
                  key={cert.name}
                  className={`text-center hover:shadow-lg transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                    <div className="space-y-2">
                      <Badge variant="secondary">{cert.category}</Badge>
                      <p className="text-xs text-gray-500">Valid until {cert.validUntil}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Partnerships */}
        <div>
          <h3 className={`text-2xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card 
                key={partner.name}
                className={`text-center hover:shadow-lg transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 1000}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-sm">{partner.logo}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <Badge variant="outline">{partner.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-12 h-12 text-gold-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Green Technology Award 2023</h4>
              <p className="text-sm text-gray-600">Environmental Innovation Excellence</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Global Sustainability Leader 2022</h4>
              <p className="text-sm text-gray-600">Outstanding Contribution to Clean Technology</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Best Innovation 2021</h4>
              <p className="text-sm text-gray-600">Breakthrough in Emission Control Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}