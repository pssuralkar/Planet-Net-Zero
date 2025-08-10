"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Zap, Home, Factory, Flame, Building } from 'lucide-react';

const applications = [
  {
    icon: Truck,
    title: 'Vehicle Fuel (CNG)',
    description: 'Compressed natural gas for fleet vehicles and public transportation',
    specs: ['95%+ methane', '3,600 psi compression', 'Automotive standards', 'Low emissions'],
    benefits: ['Reduced fuel costs', 'Lower emissions', 'Energy independence', 'Government incentives'],
    markets: ['Public transport', 'Fleet vehicles', 'Refuse trucks', 'Delivery vehicles'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Grid Injection',
    description: 'Direct injection into natural gas distribution networks',
    specs: ['Pipeline quality', 'Tariff compliance', 'Continuous monitoring', 'Odorization'],
    benefits: ['Revenue generation', 'Grid stability', 'Renewable content', 'Long-term contracts'],
    markets: ['Utility companies', 'Gas distributors', 'Energy traders', 'Municipal utilities'],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Factory,
    title: 'Industrial Applications',
    description: 'Process heating, steam generation, and industrial operations',
    specs: ['High BTU content', 'Consistent quality', 'Reliable supply', 'Custom specifications'],
    benefits: ['Cost savings', 'Sustainability goals', 'Process efficiency', 'Carbon reduction'],
    markets: ['Manufacturing', 'Food processing', 'Chemical plants', 'Textile industry'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Flame,
    title: 'Power Generation',
    description: 'Electricity generation using biogas-fired engines and turbines',
    specs: ['Engine-grade quality', 'Low sulfur content', 'Consistent heating value', 'Clean combustion'],
    benefits: ['Renewable electricity', 'Grid support', 'Baseload power', 'CHP applications'],
    markets: ['Independent power', 'Utilities', 'Industrial CHP', 'Microgrids'],
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Home,
    title: 'Residential Heating',
    description: 'Domestic heating and cooking applications',
    specs: ['Household quality', 'Safety standards', 'Consistent pressure', 'Clean burning'],
    benefits: ['Renewable heating', 'Cost effective', 'Reduced emissions', 'Energy security'],
    markets: ['Rural communities', 'Off-grid homes', 'Eco-developments', 'Remote areas'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Building,
    title: 'Commercial Buildings',
    description: 'Heating, cooling, and hot water for commercial facilities',
    specs: ['Commercial grade', 'Building codes', 'Efficiency standards', 'Monitoring systems'],
    benefits: ['Operating savings', 'Green certification', 'Tenant attraction', 'CSR goals'],
    markets: ['Office buildings', 'Hotels', 'Hospitals', 'Schools'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
  },
];

export function BiogasApplications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Biogas Applications & Markets
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Purified biogas opens up diverse market opportunities across transportation, 
            energy, and industrial sectors with attractive economic returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <Card 
                key={app.title}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${app.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${app.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    {app.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{app.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Technical Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.specs.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {app.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Target Markets:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.markets.map((market, marketIndex) => (
                        <Badge key={marketIndex} variant="secondary" className="text-xs">
                          {market}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Market Statistics */}
        <div className={`mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Market Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$15-25</div>
              <div className="text-sm text-gray-600">per MMBtu typical pricing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15-20%</div>
              <div className="text-sm text-gray-600">IRR typical projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5-7 years</div>
              <div className="text-sm text-gray-600">Payback period</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">20+ years</div>
              <div className="text-sm text-gray-600">Project life</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}