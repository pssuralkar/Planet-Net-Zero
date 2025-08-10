"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Factory, Filter, Zap, Droplets, Wind, Settings } from 'lucide-react';
import Link from 'next/link';

const productCategories = [
  {
    icon: Factory,
    title: 'Sulphur Removal Systems',
    description: 'Advanced desulfurization technology for industrial applications',
    features: ['SO₂ reduction up to 99%', 'Limestone/lime systems', 'Automated control', 'Heat recovery'],
    applications: ['Power plants', 'Refineries', 'Steel mills', 'Cement plants'],
    efficiency: '99%',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Filter,
    title: 'Chemical Scrubbers',
    description: 'Multi-pollutant removal systems for diverse industrial needs',
    features: ['Acid gas removal', 'Particulate control', 'Chemical recovery', 'Corrosion resistance'],
    applications: ['Chemical plants', 'Pharmaceutical', 'Food processing', 'Electronics'],
    efficiency: '95%',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Droplets,
    title: 'Flue Gas Desulfurization',
    description: 'Comprehensive FGD systems for power generation facilities',
    features: ['Wet/dry technologies', 'Gypsum byproduct', 'High availability', 'Low maintenance'],
    applications: ['Coal plants', 'Gas turbines', 'Biomass facilities', 'Waste incinerators'],
    efficiency: '98%',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Zap,
    title: 'PSA/VPSA Units',
    description: 'Pressure swing adsorption systems for gas separation',
    features: ['Energy efficient', 'Automated operation', 'Modular design', 'Quick startup'],
    applications: ['Gas separation', 'Hydrogen purification', 'Oxygen generation', 'Nitrogen production'],
    efficiency: '90%',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Wind,
    title: 'Particulate Control',
    description: 'Advanced filtration and electrostatic precipitation',
    features: ['High efficiency', 'Low pressure drop', 'Fabric filters', 'ESP technology'],
    applications: ['Cement plants', 'Steel mills', 'Power plants', 'Mining operations'],
    efficiency: '99.9%',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Settings,
    title: 'Control Systems',
    description: 'Integrated automation and monitoring solutions',
    features: ['Real-time monitoring', 'Predictive maintenance', 'Remote diagnostics', 'Data analytics'],
    applications: ['All systems', 'Process optimization', 'Compliance reporting', 'Performance tracking'],
    efficiency: '24/7',
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
  },
];

export function ProductCategories() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Industrial Product Portfolio
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive range of emission control technologies designed for maximum efficiency, 
            reliability, and environmental compliance across all industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                  <Badge className="w-fit bg-green-100 text-green-800">
                    {category.efficiency} Efficiency
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-200"
                  >
                    <Link href="/contact">
                      Get Specifications
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}