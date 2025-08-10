"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Factory, Wind, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const productSegments = [
  {
    icon: Factory,
    title: 'Industrial Segment',
    description: 'Comprehensive emission control solutions for manufacturing, power generation, and chemical processing industries.',
    products: [
      'Sulphur Removal Systems',
      'Chemical Scrubbers',
      'Flue Gas Desulfurization',
      'PSA/VPSA Units',
      'Particulate Control',
      'Control Systems'
    ],
    applications: ['Power Plants', 'Steel Mills', 'Refineries', 'Chemical Plants', 'Cement Plants'],
    efficiency: '99% SO₂ Removal',
    link: '/products/industrial',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    gradient: 'from-blue-500 to-gray-500',
  },
  {
    icon: Wind,
    title: 'Biogas Segment',
    description: 'Advanced biogas purification and upgrading systems for renewable natural gas production and grid injection.',
    products: [
      'Membrane Separation',
      'Pressure Swing Adsorption',
      'Water Scrubbing',
      'Chemical Absorption',
      'Gas Conditioning',
      'Monitoring Systems'
    ],
    applications: ['Wastewater Treatment', 'Agricultural Waste', 'Food Processing', 'Landfills', 'Anaerobic Digesters'],
    efficiency: '95%+ CH₄ Purity',
    link: '/products/biogas',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    gradient: 'from-green-500 to-blue-500',
  },
];

export function ProductOverview() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Product Segments
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our comprehensive product portfolio is organized into two main segments, each designed to address 
            specific environmental challenges and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {productSegments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card 
                key={segment.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 300 + 400}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${segment.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 ${segment.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${segment.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                        {segment.title}
                      </CardTitle>
                      <Badge className="mt-1 bg-green-100 text-green-800">
                        {segment.efficiency}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {segment.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Products:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {segment.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Target Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {segment.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-green-600 group-hover:text-white transition-all duration-200"
                    variant="outline"
                  >
                    <Link href={segment.link} className="flex items-center justify-center">
                      Explore {segment.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
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