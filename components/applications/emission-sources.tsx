"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Zap, Flame, Truck, Building, Beaker } from 'lucide-react';

const emissionSources = [
  {
    icon: Zap,
    title: 'Power Generation',
    description: 'Coal, natural gas, and biomass power plants',
    pollutants: ['SO₂', 'NOₓ', 'Particulates', 'Mercury'],
    solutions: ['Wet FGD', 'Dry Sorbent Injection', 'SCR/SNCR', 'ESP/Baghouse'],
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Steel, cement, aluminum, and glass production',
    pollutants: ['SO₂', 'NOₓ', 'CO', 'Particulates'],
    solutions: ['Chemical Scrubbers', 'Thermal Oxidizers', 'Catalytic Reduction'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Beaker,
    title: 'Chemical Processing',
    description: 'Petrochemicals, pharmaceuticals, and specialty chemicals',
    pollutants: ['VOCs', 'Acid Gases', 'Organic Compounds'],
    solutions: ['Absorption Towers', 'Adsorption Systems', 'Thermal Treatment'],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Flame,
    title: 'Refineries',
    description: 'Oil refining and petrochemical complexes',
    pollutants: ['SO₂', 'H₂S', 'VOCs', 'Particulates'],
    solutions: ['Amine Treating', 'Claus Process', 'Tail Gas Treatment'],
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Building,
    title: 'Industrial Boilers',
    description: 'Steam generation and process heating',
    pollutants: ['SO₂', 'NOₓ', 'CO', 'Particulates'],
    solutions: ['Low NOₓ Burners', 'FGD Systems', 'Selective Catalytic Reduction'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Truck,
    title: 'Waste Treatment',
    description: 'Incineration and waste-to-energy facilities',
    pollutants: ['Dioxins', 'Heavy Metals', 'Acid Gases'],
    solutions: ['Multi-stage Scrubbing', 'Activated Carbon', 'Baghouse Filtration'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export function EmissionSources() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Industrial Emission Sources
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            We provide tailored emission control solutions for diverse industrial applications, 
            addressing specific pollutants and regulatory requirements for each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emissionSources.map((source, index) => {
            const Icon = source.icon;
            return (
              <Card 
                key={source.title}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${source.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${source.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    {source.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{source.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common Pollutants:</h4>
                    <div className="flex flex-wrap gap-1">
                      {source.pollutants.map(pollutant => (
                        <span key={pollutant} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                          {pollutant}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solutions:</h4>
                    <ul className="space-y-1">
                      {source.solutions.map(solution => (
                        <li key={solution} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}