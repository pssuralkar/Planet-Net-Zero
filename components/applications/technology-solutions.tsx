"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Filter, Droplets, Zap, Wind, Flame, Recycle } from 'lucide-react';

const technologies = {
  fgd: {
    name: 'Flue Gas Desulfurization',
    icon: Droplets,
    description: 'Advanced SO₂ removal systems for power plants and industrial facilities',
    types: [
      {
        name: 'Wet Limestone FGD',
        efficiency: '95-99%',
        description: 'Most common FGD technology using limestone slurry',
        advantages: ['High efficiency', 'Proven technology', 'Gypsum byproduct'],
        applications: ['Coal power plants', 'Large industrial boilers'],
      },
      {
        name: 'Dry Sorbent Injection',
        efficiency: '80-95%',
        description: 'Injection of dry sorbents into flue gas stream',
        advantages: ['Lower capital cost', 'No wastewater', 'Retrofit friendly'],
        applications: ['Medium-sized boilers', 'Waste incinerators'],
      },
      {
        name: 'Seawater FGD',
        efficiency: '95-98%',
        description: 'Uses natural alkalinity of seawater',
        advantages: ['No reagent cost', 'Simple operation', 'No waste disposal'],
        applications: ['Coastal power plants', 'Marine applications'],
      },
    ],
  },
  scrubbers: {
    name: 'Chemical Scrubbers',
    icon: Filter,
    description: 'Multi-pollutant removal systems for acid gases and particulates',
    types: [
      {
        name: 'Packed Tower Scrubbers',
        efficiency: '90-99%',
        description: 'Counter-current gas-liquid contact in packed beds',
        advantages: ['High efficiency', 'Low pressure drop', 'Compact design'],
        applications: ['Chemical plants', 'Metal processing', 'Semiconductor'],
      },
      {
        name: 'Spray Tower Scrubbers',
        efficiency: '85-95%',
        description: 'Direct spray contact for gas absorption',
        advantages: ['Simple design', 'Low maintenance', 'Handle high dust loads'],
        applications: ['Cement plants', 'Steel mills', 'Glass manufacturing'],
      },
      {
        name: 'Venturi Scrubbers',
        efficiency: '95-99%',
        description: 'High-energy scrubbing for fine particulates',
        advantages: ['Very high efficiency', 'Handle sticky particles', 'Compact'],
        applications: ['Foundries', 'Incinerators', 'Asphalt plants'],
      },
    ],
  },
  nox: {
    name: 'NOₓ Control Systems',
    icon: Zap,
    description: 'Selective catalytic and non-catalytic reduction systems',
    types: [
      {
        name: 'Selective Catalytic Reduction (SCR)',
        efficiency: '80-95%',
        description: 'Catalytic reduction of NOₓ using ammonia',
        advantages: ['High efficiency', 'Selective reaction', 'Proven technology'],
        applications: ['Power plants', 'Large industrial boilers', 'Gas turbines'],
      },
      {
        name: 'Selective Non-Catalytic Reduction (SNCR)',
        efficiency: '30-70%',
        description: 'Non-catalytic reduction at high temperatures',
        advantages: ['Lower capital cost', 'No catalyst', 'Retrofit friendly'],
        applications: ['Waste incinerators', 'Cement kilns', 'Glass furnaces'],
      },
      {
        name: 'Low NOₓ Burners',
        efficiency: '30-60%',
        description: 'Combustion modification to reduce NOₓ formation',
        advantages: ['Primary control', 'No reagents', 'Energy efficient'],
        applications: ['Boilers', 'Furnaces', 'Process heaters'],
      },
    ],
  },
  particulate: {
    name: 'Particulate Control',
    icon: Wind,
    description: 'Advanced filtration and electrostatic precipitation systems',
    types: [
      {
        name: 'Electrostatic Precipitators (ESP)',
        efficiency: '95-99.9%',
        description: 'Electrical charging and collection of particles',
        advantages: ['Very high efficiency', 'Low pressure drop', 'Handle high temperatures'],
        applications: ['Power plants', 'Cement plants', 'Steel mills'],
      },
      {
        name: 'Baghouse Filters',
        efficiency: '99-99.9%',
        description: 'Fabric filtration for fine particle removal',
        advantages: ['Highest efficiency', 'Dry collection', 'Chemical resistance'],
        applications: ['Chemical plants', 'Pharmaceutical', 'Food processing'],
      },
      {
        name: 'Cyclone Separators',
        efficiency: '70-90%',
        description: 'Centrifugal separation of coarse particles',
        advantages: ['Simple design', 'Low cost', 'No moving parts'],
        applications: ['Pre-cleaning', 'Woodworking', 'Mining'],
      },
    ],
  },
};

export function TechnologySolutions() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('fgd');

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Advanced Control Technologies
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our comprehensive portfolio of emission control technologies provides optimal solutions 
            for every industrial application and regulatory requirement.
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
                    <span className="hidden sm:inline">{tech.name.split(' ')[0]}</span>
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
                        <Icon className="w-6 h-6 text-blue-600" />
                        {tech.name}
                      </CardTitle>
                      <p className="text-gray-600">{tech.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tech.types.map((type, index) => (
                          <Card key={type.name} className="border-l-4 border-l-blue-500">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-gray-900">{type.name}</h4>
                                <Badge variant="secondary">{type.efficiency}</Badge>
                              </div>
                              
                              <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                              
                              <div className="space-y-3">
                                <div>
                                  <h5 className="font-semibold text-gray-900 text-sm mb-2">Key Advantages:</h5>
                                  <ul className="space-y-1">
                                    {type.advantages.map(advantage => (
                                      <li key={advantage} className="flex items-center text-xs text-gray-600">
                                        <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                                        {advantage}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h5 className="font-semibold text-gray-900 text-sm mb-2">Applications:</h5>
                                  <div className="flex flex-wrap gap-1">
                                    {type.applications.map(app => (
                                      <span key={app} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                        {app}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
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