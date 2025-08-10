"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, Factory, Building, Leaf, Truck, Home } from 'lucide-react';

const wasteTypes = [
  {
    icon: Utensils,
    title: 'Food Waste',
    description: 'Organic waste from restaurants, food processing, and households',
    characteristics: ['High moisture content', 'Rich in nutrients', 'Fast decomposition'],
    applications: ['Biogas production', 'Composting', 'Animal feed'],
    volume: '1.3 billion tons/year globally',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Factory,
    title: 'Industrial Organic Waste',
    description: 'Organic byproducts from manufacturing and processing industries',
    characteristics: ['Variable composition', 'High energy content', 'Consistent supply'],
    applications: ['Energy recovery', 'Biogas generation', 'Soil amendment'],
    volume: '800 million tons/year',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Building,
    title: 'Municipal Solid Waste',
    description: 'Mixed waste streams from urban and suburban communities',
    characteristics: ['Heterogeneous mix', 'Seasonal variation', 'Recyclable components'],
    applications: ['Waste-to-energy', 'Material recovery', 'Landfill diversion'],
    volume: '2.01 billion tons/year',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Leaf,
    title: 'Agricultural Waste',
    description: 'Crop residues, livestock manure, and agricultural byproducts',
    characteristics: ['Seasonal availability', 'High fiber content', 'Distributed sources'],
    applications: ['Biomass energy', 'Biogas production', 'Soil improvement'],
    volume: '5 billion tons/year',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Truck,
    title: 'Commercial Waste',
    description: 'Waste from offices, retail, and commercial establishments',
    characteristics: ['Paper-heavy', 'Packaging materials', 'Regular generation'],
    applications: ['Recycling', 'Energy recovery', 'Material reuse'],
    volume: '600 million tons/year',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Home,
    title: 'Residential Waste',
    description: 'Household waste including organic and recyclable materials',
    characteristics: ['Mixed composition', 'Daily generation', 'Seasonal patterns'],
    applications: ['Source separation', 'Composting', 'Recycling programs'],
    volume: '1.2 billion tons/year',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
  },
];

export function WasteTypesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Waste Stream Analysis
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive Waste Management Solutions
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our advanced technologies handle diverse waste streams, converting them into valuable resources 
            while minimizing environmental impact and maximizing resource recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wasteTypes.map((waste, index) => {
            const Icon = waste.icon;
            return (
              <Card 
                key={waste.title}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 600}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${waste.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${waste.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    {waste.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {waste.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Characteristics:</h4>
                    <ul className="space-y-1">
                      {waste.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {waste.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={`${waste.bgColor} rounded-lg p-3 mt-4`}>
                    <div className="text-xs text-gray-600 mb-1">Global Volume:</div>
                    <div className={`font-bold ${waste.color}`}>{waste.volume}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Global Waste Challenge</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">11.2B</div>
              <div className="text-sm text-gray-600">Total Waste Generated (tons/year)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-sm text-gray-600">Organic Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
              <div className="text-sm text-gray-600">Currently Recycled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">Potential Recovery Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}