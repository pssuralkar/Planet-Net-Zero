"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Filter, Droplets, Zap, Wind } from 'lucide-react';

const technologies = {
  membrane: {
    title: 'Membrane Separation',
    icon: Filter,
    description: 'Advanced polymer membranes for selective CO₂ permeation',
    specs: {
      'Methane Purity': '95-98%',
      'CO₂ Removal': '99%+',
      'Energy Consumption': '0.2-0.3 kWh/Nm³',
      'Pressure': '8-16 bar',
      'Capacity Range': '50-5000 Nm³/h',
      'Availability': '>98%',
    },
    advantages: [
      'Low energy consumption',
      'Compact footprint',
      'Continuous operation',
      'High reliability',
      'Minimal maintenance',
      'Modular design',
    ],
    applications: [
      'Large-scale plants (>500 Nm³/h)',
      'Pipeline injection quality',
      'Continuous operation required',
      'Space-constrained installations',
    ],
  },
  psa: {
    title: 'Pressure Swing Adsorption',
    icon: Zap,
    description: 'Cyclic adsorption process using molecular sieves',
    specs: {
      'Methane Purity': '95-97%',
      'CO₂ Removal': '98%+',
      'Energy Consumption': '0.25-0.35 kWh/Nm³',
      'Pressure': '4-8 bar',
      'Capacity Range': '20-2000 Nm³/h',
      'Availability': '>97%',
    },
    advantages: [
      'Proven technology',
      'High efficiency',
      'Flexible operation',
      'Quick startup/shutdown',
      'Dry product gas',
      'No chemicals required',
    ],
    applications: [
      'Medium-scale plants (100-1000 Nm³/h)',
      'Variable feed gas composition',
      'Intermittent operation',
      'Vehicle fuel applications',
    ],
  },
  scrubbing: {
    title: 'Water Scrubbing',
    icon: Droplets,
    description: 'Physical absorption of CO₂ in pressurized water',
    specs: {
      'Methane Purity': '94-96%',
      'CO₂ Removal': '97%+',
      'Energy Consumption': '0.3-0.4 kWh/Nm³',
      'Pressure': '6-10 bar',
      'Capacity Range': '10-1000 Nm³/h',
      'Availability': '>96%',
    },
    advantages: [
      'Simple operation',
      'Low maintenance',
      'Environmentally friendly',
      'No chemicals required',
      'Cost-effective',
      'Robust technology',
    ],
    applications: [
      'Small to medium plants (<500 Nm³/h)',
      'Rural installations',
      'Cost-sensitive projects',
      'Simple operation preferred',
    ],
  },
  chemical: {
    title: 'Chemical Absorption',
    icon: Wind,
    description: 'Chemical solvents for selective CO₂ removal',
    specs: {
      'Methane Purity': '96-99%',
      'CO₂ Removal': '99%+',
      'Energy Consumption': '0.4-0.6 kWh/Nm³',
      'Pressure': '1-5 bar',
      'Capacity Range': '100-10000 Nm³/h',
      'Availability': '>95%',
    },
    advantages: [
      'Very high purity',
      'Low pressure operation',
      'High CO₂ removal',
      'Selective absorption',
      'Proven in industry',
      'Scalable design',
    ],
    applications: [
      'High purity requirements',
      'Large-scale plants',
      'Low-pressure biogas',
      'Chemical industry experience',
    ],
  },
};

export function BiogasTechnologies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('membrane');

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Biogas Purification Technologies
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Choose from our range of proven biogas upgrading technologies, each optimized 
            for specific applications and operating conditions.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              {Object.entries(technologies).map(([key, tech]) => {
                const Icon = tech.icon;
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tech.title.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(technologies).map(([key, tech]) => {
              const Icon = tech.icon;
              return (
                <TabsContent key={key} value={key}>
                  <Card className="max-w-6xl mx-auto">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                        {tech.title}
                      </CardTitle>
                      <p className="text-gray-600">{tech.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Specifications */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Technical Specifications</h4>
                          <div className="space-y-3">
                            {Object.entries(tech.specs).map(([spec, value]) => (
                              <div key={spec} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm font-medium text-gray-700">{spec}</span>
                                <Badge variant="secondary">{value}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Advantages */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Key Advantages</h4>
                          <ul className="space-y-2">
                            {tech.advantages.map((advantage, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                {advantage}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applications */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Ideal Applications</h4>
                          <ul className="space-y-2">
                            {tech.applications.map((application, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                                {application}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
}