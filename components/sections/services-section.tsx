"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Factory, Wind, Recycle, Filter, Zap, Droplets } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Factory,
    title: 'Sulphur Removal Systems',
    description: 'Advanced desulfurization technology for industrial applications, reducing SO₂ emissions by up to 99%.',
    features: ['High efficiency removal', 'Low maintenance costs', 'Automated monitoring'],
    link: '/products/industrial',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Wind,
    title: 'Biogas Purification',
    description: 'Complete biogas upgrading solutions for renewable natural gas production and grid injection.',
    features: ['CO₂ separation', 'H₂S removal', 'Moisture control'],
    link: '/products/biogas',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Filter,
    title: 'Flue Gas Desulfurization',
    description: 'Comprehensive FGD systems for power plants and industrial facilities with proven reliability.',
    features: ['Wet/dry technologies', 'Limestone/lime systems', 'Byproduct utilization'],
    link: '/applications/industrial-emissions',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Recycle,
    title: 'Chemical Scrubbers',
    description: 'Custom-designed scrubbing systems for removing pollutants from gas streams.',
    features: ['Multi-stage scrubbing', 'Chemical recovery', 'Corrosion resistance'],
    link: '/products/industrial',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Zap,
    title: 'PSA/VPSA Units',
    description: 'Pressure swing adsorption systems for gas separation and purification applications.',
    features: ['Energy efficient', 'Automated operation', 'Modular design'],
    link: '/products/industrial',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Droplets,
    title: 'Membrane Purification',
    description: 'Advanced membrane technology for selective gas separation and water treatment.',
    features: ['Selective permeability', 'Low energy consumption', 'Compact footprint'],
    link: '/products/biogas',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our Core Services
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive Environmental Solutions
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From biogas purification to industrial emission control, we provide cutting-edge technology 
            solutions that help businesses achieve their environmental goals while maintaining operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group-hover:bg-green-50 group-hover:border-green-200 group-hover:text-green-600 transition-all duration-200"
                  >
                    <Link href={service.link}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/products">
              View All Solutions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}