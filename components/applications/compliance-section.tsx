"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileText, Globe, Award, CheckCircle, AlertTriangle } from 'lucide-react';

const regulations = [
  {
    region: 'United States',
    standards: [
      { name: 'Clean Air Act', description: 'Federal air quality standards', status: 'Compliant' },
      { name: 'NSPS', description: 'New Source Performance Standards', status: 'Compliant' },
      { name: 'MATS', description: 'Mercury and Air Toxics Standards', status: 'Compliant' },
      { name: 'CSAPR', description: 'Cross-State Air Pollution Rule', status: 'Compliant' },
    ],
    icon: Shield,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    region: 'European Union',
    standards: [
      { name: 'IED', description: 'Industrial Emissions Directive', status: 'Compliant' },
      { name: 'LCPD', description: 'Large Combustion Plant Directive', status: 'Compliant' },
      { name: 'WID', description: 'Waste Incineration Directive', status: 'Compliant' },
      { name: 'BREF', description: 'Best Available Techniques', status: 'Compliant' },
    ],
    icon: Globe,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    region: 'Asia Pacific',
    standards: [
      { name: 'China GB Standards', description: 'National emission standards', status: 'Compliant' },
      { name: 'Japan K-Value', description: 'Sulfur oxide regulations', status: 'Compliant' },
      { name: 'India CPCB', description: 'Central Pollution Control Board', status: 'Compliant' },
      { name: 'Australia NEPM', description: 'National Environment Protection', status: 'Compliant' },
    ],
    icon: Award,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
];

const complianceServices = [
  {
    icon: FileText,
    title: 'Regulatory Assessment',
    description: 'Comprehensive analysis of applicable regulations and permit requirements',
    features: ['Permit application support', 'Compliance gap analysis', 'Regulatory updates'],
  },
  {
    icon: CheckCircle,
    title: 'Performance Monitoring',
    description: 'Continuous monitoring systems to ensure ongoing compliance',
    features: ['Real-time monitoring', 'Automated reporting', 'Alarm systems'],
  },
  {
    icon: AlertTriangle,
    title: 'Risk Management',
    description: 'Proactive identification and mitigation of compliance risks',
    features: ['Risk assessment', 'Contingency planning', 'Emergency response'],
  },
];

export function ComplianceSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Regulatory Compliance & Standards
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our emission control systems are designed to meet and exceed the most stringent 
            environmental regulations worldwide, ensuring long-term compliance and operational security.
          </p>
        </div>

        {/* Global Compliance Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {regulations.map((region, index) => {
            const Icon = region.icon;
            return (
              <Card 
                key={region.region}
                className={`hover:shadow-xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${region.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${region.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {region.region}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {region.standards.map(standard => (
                      <div key={standard.name} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{standard.name}</h4>
                          <p className="text-xs text-gray-600">{standard.description}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {standard.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compliance Services */}
        <div className={`transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Compliance Support Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center justify-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Compliance Statistics */}
        <div className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Compliance Track Record</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Compliance Rate</div>
              <div className="text-xs text-gray-500 mt-1">Across all installations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Permits Obtained</div>
              <div className="text-xs text-gray-500 mt-1">Worldwide approvals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Countries</div>
              <div className="text-xs text-gray-500 mt-1">Regulatory experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Violations</div>
              <div className="text-xs text-gray-500 mt-1">Perfect compliance record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}