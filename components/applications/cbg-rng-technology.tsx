"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter, Droplets, Zap, Settings } from 'lucide-react';

const technologies = {
  membrane: {
    icon: Filter,
    title: 'Membrane Separation',
    description: 'Advanced polymer membranes for selective CO₂ permeation',
    specs: {
      'Methane Purity': '95-98%',
      'CO₂ Removal': '99%+',
      'Energy Consumption': '0.2-0.3 kWh/Nm³',
      'Pressure': '8-16 bar',
    },
    advantages: [
      'Low energy consumption',
      'Compact footprint',
      'Continuous operation',
      'High reliability',
      'Minimal maintenance',
    ],
    applications: [
      'Large-scale plants (>500 Nm³/h)',
      'Pipeline injection quality',
      'Continuous operation required',
      'Space-constrained installations',
    ],
  },
  psa: {
    icon: Zap,
    title: 'Pressure Swing Adsorption',
    description: 'Cyclic adsorption process using molecular sieves',
    specs: {
      'Methane Purity': '95-97%',
      'CO₂ Removal': '98%+',
      'Energy Consumption': '0.25-0.35 kWh/Nm³',
      'Pressure': '4-8 bar',
    },
    advantages: [
      'Proven technology',
      'High efficiency',
      'Flexible operation',
      'Quick startup/shutdown',
      'Dry product gas',
    ],
    applications: [
      'Medium-scale plants (100-1000 Nm³/h)',
      'Variable feed gas composition',
      'Intermittent operation',
      'Vehicle fuel applications',
    ],
  },
  scrubbing: {
    icon: Droplets,
    title: 'Water Scrubbing',
    description: 'Physical absorption of CO₂ in pressurized water',
    specs: {
      'Methane Purity': '94-96%',
      'CO₂ Removal': '97%+',
      'Energy Consumption': '0.3-0.4 kWh/Nm³',
      'Pressure': '6-10 bar',
    },
    advantages: [
      'Simple operation',
      'Low maintenance',
      'Environmentally friendly',
      'No chemicals required',
      'Cost-effective',
    ],
    applications: [
      'Small to medium plants (<500 Nm³/h)',
      'Rural installations',
      'Cost-sensitive projects',
      'Simple operation preferred',
    ],
  },
};

const systemComponents = [
  {
    name: 'Pre-treatment System',
    description: 'Removes H₂S, moisture, and other contaminants',
    components: ['Activated carbon', 'Molecular sieves', 'Condensate separator'],
  },
  {
    name: 'Purification Unit',
    description: 'Core technology for CO₂ separation',
    components: ['Membrane modules', 'PSA vessels', 'Scrubbing tower'],
  },
  {
    name: 'Polishing System',
    description: 'Final cleanup to meet specifications',
    components: ['Drying system', 'Trace removal', 'Quality monitoring'],
  },
  {
    name: 'Control System',
    description: 'Automated operation and monitoring',
    components: ['PLC control', 'HMI interface', 'Remote monitoring'],
  },
];

export function CBGRNGTechnology() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            CBG/RNG Purification Technologies
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Choose from our range of proven biogas upgrading technologies, each optimized 
            for specific applications and operating conditions.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Tabs defaultValue="membrane" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="membrane">Membrane</TabsTrigger>
              <TabsTrigger value="psa">PSA</TabsTrigger>
              <TabsTrigger value="scrubbing">Scrubbing</TabsTrigger>
            </TabsList>

            {Object.entries(technologies).map(([key, tech]) => {
              const Icon = tech.icon;
              return (
                <TabsContent key={key} value={key}>
                  <Card className="max-w-4xl mx-auto">
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
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

                        {/* Advantages & Applications */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Key Advantages</h4>
                            <ul className="space-y-2">
                              {tech.advantages.map((advantage, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                  {advantage}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Ideal Applications</h4>
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
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        {/* System Components */}
        <div className={`mt-16 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Complete System Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemComponents.map((component, index) => (
              <Card key={component.name} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{component.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{component.description}</p>
                  <div className="space-y-1">
                    {component.components.map((comp, compIndex) => (
                      <Badge key={compIndex} variant="outline" className="text-xs mr-1 mb-1">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Comparison */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-center">Technology Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Technology</th>
                      <th className="text-center p-3">Methane Purity</th>
                      <th className="text-center p-3">Energy Use</th>
                      <th className="text-center p-3">CAPEX</th>
                      <th className="text-center p-3">OPEX</th>
                      <th className="text-center p-3">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Membrane</td>
                      <td className="text-center p-3">95-98%</td>
                      <td className="text-center p-3">Low</td>
                      <td className="text-center p-3">Medium</td>
                      <td className="text-center p-3">Low</td>
                      <td className="text-center p-3">Large scale</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">PSA</td>
                      <td className="text-center p-3">95-97%</td>
                      <td className="text-center p-3">Medium</td>
                      <td className="text-center p-3">High</td>
                      <td className="text-center p-3">Medium</td>
                      <td className="text-center p-3">Medium scale</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Water Scrubbing</td>
                      <td className="text-center p-3">94-96%</td>
                      <td className="text-center p-3">Medium</td>
                      <td className="text-center p-3">Low</td>
                      <td className="text-center p-3">Low</td>
                      <td className="text-center p-3">Small scale</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}