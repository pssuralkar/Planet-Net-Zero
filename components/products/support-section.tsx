"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Wrench, BookOpen, Users, Clock } from 'lucide-react';

const supportServices = [
  {
    icon: Wrench,
    title: 'Technical Support',
    description: '24/7 technical assistance from our expert engineers',
    features: ['Remote diagnostics', 'Troubleshooting', 'Performance optimization', 'Emergency response'],
    availability: '24/7',
  },
  {
    icon: BookOpen,
    title: 'Training Programs',
    description: 'Comprehensive operator and maintenance training',
    features: ['On-site training', 'Online courses', 'Certification programs', 'Custom curricula'],
    availability: 'Scheduled',
  },
  {
    icon: Users,
    title: 'Field Service',
    description: 'Expert field engineers for installation and maintenance',
    features: ['Installation support', 'Commissioning', 'Preventive maintenance', 'Repairs'],
    availability: 'On-demand',
  },
];

const maintenancePackages = [
  {
    name: 'Basic',
    price: 'From $5,000/year',
    features: ['Annual inspection', 'Basic maintenance', 'Phone support', 'Performance reports'],
    recommended: false,
  },
  {
    name: 'Professional',
    price: 'From $12,000/year',
    features: ['Quarterly inspections', 'Preventive maintenance', '24/7 support', 'Remote monitoring', 'Spare parts discount'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    features: ['Monthly inspections', 'Predictive maintenance', 'Dedicated engineer', 'Priority support', 'Full parts coverage'],
    recommended: false,
  },
];

export function SupportSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive Support Services
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Maximize system performance and uptime with our complete range of support services, 
            from installation to long-term maintenance.
          </p>
        </div>

        {/* Support Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className={`text-center hover:shadow-lg transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-center text-sm">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-600">{service.availability}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Maintenance Packages */}
        <div className={`transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Maintenance Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenancePackages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`relative ${pkg.recommended ? 'ring-2 ring-blue-500 scale-105' : ''}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.recommended ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={pkg.recommended ? 'default' : 'outline'}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Immediate Support?</h3>
            <p className="text-gray-600">Our technical experts are available 24/7 to assist you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center space-x-4 p-4 bg-green-50 rounded-lg">
              <Phone className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Emergency Hotline</div>
                <div className="text-green-600">+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Technical Support</div>
                <div className="text-blue-600">support@planetnetzero.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}