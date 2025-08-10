"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Factory, Filter, Droplets, Zap } from 'lucide-react';

const technicalSpecs = {
  sulphur: {
    title: 'Sulphur Removal Systems',
    icon: Factory,
    specs: {
      'SO₂ Removal Efficiency': '95-99%',
      'Operating Temperature': '150-400°C',
      'Pressure Range': '1-15 bar',
      'Capacity Range': '10-5000 Nm³/h',
      'Reagent Consumption': '1.05-1.2 mol/mol SO₂',
      'Availability': '>98%',
    },
    technologies: [
      { name: 'Limestone FGD', efficiency: '95-98%', description: 'Wet limestone scrubbing with gypsum production' },
      { name: 'Lime FGD', efficiency: '98-99%', description: 'Lime-based wet scrubbing for high efficiency' },
      { name: 'Dry Sorbent Injection', efficiency: '80-95%', description: 'Dry reagent injection for retrofit applications' },
    ],
  },
  scrubbers: {
    title: 'Chemical Scrubbers',
    icon: Filter,
    specs: {
      'Removal Efficiency': '90-99%',
      'Gas Velocity': '1-4 m/s',
      'Pressure Drop': '500-2000 Pa',
      'L/G Ratio': '1-10 L/m³',
      'pH Range': '1-14',
      'Temperature Range': '10-80°C',
    },
    technologies: [
      { name: 'Packed Tower', efficiency: '95-99%', description: 'Counter-current gas-liquid contact' },
      { name: 'Spray Tower', efficiency: '85-95%', description: 'Direct spray contact for gas absorption' },
      { name: 'Venturi Scrubber', efficiency: '95-99%', description: 'High-energy scrubbing for fine particles' },
    ],
  },
  fgd: {
    title: 'Flue Gas Desulfurization',
    icon: Droplets,
    specs: {
      'SO₂ Removal': '95-99%',
      'Flue Gas Flow': '100-10000 Nm³/h',
      'Inlet SO₂': '500-5000 mg/Nm³',
      'Outlet SO₂': '<50 mg/Nm³',
      'Limestone Utilization': '>95%',
      'Gypsum Purity': '>95%',
    },
    technologies: [
      { name: 'Wet FGD', efficiency: '95-99%', description: 'Limestone/lime wet scrubbing with gypsum byproduct' },
      { name: 'Semi-dry FGD', efficiency: '85-95%', description: 'Spray drying with lime slurry' },
      { name: 'Dry FGD', efficiency: '80-90%', description: 'Dry sorbent injection with fabric filter' },
    ],
  },
  psa: {
    title: 'PSA/VPSA Units',
    icon: Zap,
    specs: {
      'Product Purity': '90-99.9%',
      'Recovery Rate': '70-95%',
      'Cycle Time': '60-600 seconds',
      'Operating Pressure': '1-10 bar',
      'Power Consumption': '0.3-0.8 kWh/Nm³',
      'Availability': '>99%',
    },
    technologies: [
      { name: 'PSA (Pressure Swing)', efficiency: '90-99%', description: 'Pressure-based adsorption cycles' },
      { name: 'VPSA (Vacuum PSA)', efficiency: '85-95%', description: 'Vacuum-assisted desorption' },
      { name: 'TSA (Temperature Swing)', efficiency: '95-99.9%', description: 'Temperature-based regeneration' },
    ],
  },
};

export function TechnicalSpecs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('sulphur');

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Technical Specifications
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Detailed technical specifications and performance data for our industrial emission control systems.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              {Object.entries(technicalSpecs).map(([key, spec]) => {
                const Icon = spec.icon;
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{spec.title.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(technicalSpecs).map(([key, spec]) => {
              const Icon = spec.icon;
              return (
                <TabsContent key={key} value={key}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Specifications */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-blue-600" />
                          Performance Specifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {Object.entries(spec.specs).map(([specName, value]) => (
                            <div key={specName} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-sm font-medium text-gray-700">{specName}</span>
                              <Badge variant="secondary">{value}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Technologies */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Available Technologies</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {spec.technologies.map((tech, index) => (
                            <div key={index} className="border rounded-lg p-4">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-900">{tech.name}</h4>
                                <Badge className="bg-green-100 text-green-800">
                                  {tech.efficiency}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{tech.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
}