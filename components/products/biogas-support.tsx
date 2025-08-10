"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Wrench, BookOpen, Users, Clock, Settings, BarChart3 } from 'lucide-react';

const supportServices = [
  {
    icon: Wrench,
    title: 'Technical Support',
    description: '24/7 technical assistance and remote diagnostics',
    features: ['Remote monitoring', 'Troubleshooting', 'Performance optimization', 'Emergency response'],
    availability: '24/7',
    response: '< 2 hours',
  },
  {
    icon: BookOpen,
    title: 'Training & Certification',
    description: 'Comprehensive operator and maintenance training programs',
    features: ['On-site training', 'Online courses', 'Certification programs', 'Custom curricula'],
    availability: 'Scheduled',
    response: 'Flexible',
  },
  {
    icon: Users,
    title: 'Field Service',
    description: 'Expert field engineers for installation and maintenance',
    features: ['Installation support', 'Commissioning', 'Preventive maintenance', 'Emergency repairs'],
    availability: 'On-demand',
    response: '< 24 hours',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Advanced analytics and optimization services',
    features: ['Performance monitoring', 'Efficiency analysis', 'Predictive maintenance', 'Reporting'],
    availability: 'Continuous',
    response: 'Real-time',
  },
];

const servicePackages = [
  {
    name: 'Essential',
    price: 'From $8,000/year',
    features: [
      'Annual inspection',
      'Basic maintenance',
      'Phone support (business hours)',
      'Performance reports',
      'Standard response time',
    ],
    recommended: false,
    color: 'border-gray-200',
  },
  {
    name: 'Professional',
    price: 'From $18,000/year',
    features: [
      'Quarterly inspections',
      'Preventive maintenance',
      '24/7 technical support',
      'Remote monitoring',
      'Priority response',
      'Spare parts discount (10%)',
      'Performance optimization',
    ],
    recommended: true,
    color: 'border-green-500 ring-2 ring-green-200',
  },
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    features: [
      'Monthly inspections',
      'Predictive maintenance',
      'Dedicated support engineer',
      'Advanced analytics',
      'Emergency response',
      'Full parts coverage',
      'Performance guarantees',
      'Custom SLA',
    ],
    recommended: false,
    color: 'border-blue-500',
  },
];

const digitalServices = [
  {
    icon: Settings,
    title: 'Remote Monitoring',
    description: 'Real-time system monitoring and control',
    capabilities: ['Live data streaming', 'Alarm management', 'Trend analysis', 'Mobile access'],
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Advanced data analytics and insights',
    capabilities: ['Efficiency tracking', 'Predictive analytics', 'Benchmarking', 'Custom reports'],
  },
  {
    icon: Phone,
    title: 'Digital Support',
    description: 'Digital support tools and platforms',
    capabilities: ['Video diagnostics', 'AR assistance', 'Knowledge base', 'Ticketing system'],
  },
];

export function BiogasSupport() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive Support Services
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Maximize your biogas system performance with our complete range of support services, 
            from installation to long-term optimization.
          </p>
        </div>

        {/* Support Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className={`text-center hover:shadow-lg transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-sm">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-600">{service.availability}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Response: {service.response}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Packages */}
        <div className={`mb-16 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Service Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePackages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`relative ${pkg.color} ${pkg.recommended ? 'scale-105' : ''}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
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
                    className={`w-full ${pkg.recommended ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    variant={pkg.recommended ? 'default' : 'outline'}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Services */}
        <div className={`mb-16 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Digital Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => {
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
                      {service.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-center justify-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Support */}
        <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Support?</h3>
            <p className="text-gray-600">Our biogas experts are available 24/7 to assist you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg">
              <Phone className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Biogas Support Hotline</div>
                <div className="text-green-600">+1 (555) 123-4568</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Biogas Technical Support</div>
                <div className="text-blue-600">biogas@planetnetzero.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}