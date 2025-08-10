"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Zap, Droplets, Wind, Clock, Shield } from 'lucide-react';

const performanceMetrics = [
  {
    icon: TrendingUp,
    title: 'Methane Recovery',
    value: 95,
    unit: '%',
    description: 'Typical methane recovery from raw biogas',
    benchmark: 'Industry leading',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Droplets,
    title: 'CO₂ Removal',
    value: 99,
    unit: '%',
    description: 'Carbon dioxide separation efficiency',
    benchmark: 'Best in class',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    value: 92,
    unit: '%',
    description: 'Overall system energy efficiency',
    benchmark: 'Optimized design',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Clock,
    title: 'System Availability',
    value: 98,
    unit: '%',
    description: 'Annual system uptime and reliability',
    benchmark: 'Proven reliability',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

const qualityStandards = [
  {
    parameter: 'Methane Content',
    specification: '≥95%',
    typical: '96-98%',
    standard: 'Pipeline Quality',
  },
  {
    parameter: 'Carbon Dioxide',
    specification: '≤2%',
    typical: '<1%',
    standard: 'Grid Injection',
  },
  {
    parameter: 'Hydrogen Sulfide',
    specification: '≤4 ppm',
    typical: '<1 ppm',
    standard: 'Vehicle Fuel',
  },
  {
    parameter: 'Water Content',
    specification: '≤50 mg/Nm³',
    typical: '<20 mg/Nm³',
    standard: 'Dry Gas',
  },
  {
    parameter: 'Oxygen Content',
    specification: '≤0.5%',
    typical: '<0.1%',
    standard: 'Safety Standard',
  },
  {
    parameter: 'Heating Value',
    specification: '35-40 MJ/Nm³',
    typical: '36-38 MJ/Nm³',
    standard: 'Energy Content',
  },
];

const operationalBenefits = [
  {
    icon: Shield,
    title: 'Automated Operation',
    description: 'Fully automated systems with minimal operator intervention',
    features: ['PLC control', 'Remote monitoring', 'Predictive maintenance', 'Alarm systems'],
  },
  {
    icon: Wind,
    title: 'Environmental Compliance',
    description: 'Meet all environmental regulations and emission standards',
    features: ['Zero liquid discharge', 'Low noise operation', 'Minimal footprint', 'Odor control'],
  },
  {
    icon: Zap,
    title: 'Energy Integration',
    description: 'Optimized energy integration and heat recovery systems',
    features: ['Heat recovery', 'Power optimization', 'Grid synchronization', 'Load balancing'],
  },
];

export function BiogasPerformance() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Performance & Quality Standards
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our biogas purification systems deliver industry-leading performance with 
            guaranteed quality standards for all applications.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={metric.title}
                className={`text-center hover:shadow-lg transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{metric.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {metric.benchmark}
                  </Badge>
                  <div className="mt-4">
                    <Progress value={metric.value} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quality Standards */}
        <div className={`mb-16 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Product Quality Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Parameter</th>
                      <th className="text-center p-3">Specification</th>
                      <th className="text-center p-3">Typical Performance</th>
                      <th className="text-center p-3">Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityStandards.map((standard, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{standard.parameter}</td>
                        <td className="text-center p-3">{standard.specification}</td>
                        <td className="text-center p-3 text-green-600 font-medium">{standard.typical}</td>
                        <td className="text-center p-3">
                          <Badge variant="outline">{standard.standard}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operational Benefits */}
        <div className={`transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Operational Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{benefit.description}</p>
                    <ul className="space-y-1">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
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
      </div>
    </section>
  );
}