"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Zap, Droplets, Recycle, Wind, Factory, Leaf } from 'lucide-react';

const technologies = {
  anaerobic: {
    title: 'Anaerobic Digestion',
    icon: Droplets,
    description: 'Biological process that breaks down organic matter in oxygen-free environment',
    efficiency: 85,
    applications: ['Food waste', 'Agricultural residues', 'Sewage sludge', 'Industrial organics'],
    benefits: ['Biogas production', 'Digestate fertilizer', 'Odor reduction', 'Pathogen destruction'],
    process: [
      { step: 'Feedstock Preparation', description: 'Sorting, sizing, and mixing organic waste' },
      { step: 'Anaerobic Digestion', description: 'Bacterial breakdown in sealed reactors' },
      { step: 'Biogas Collection', description: 'Methane and CO₂ capture and purification' },
      { step: 'Digestate Processing', description: 'Nutrient-rich fertilizer production' },
    ],
    specs: {
      'Retention Time': '15-30 days',
      'Temperature': '35-55°C',
      'Biogas Yield': '300-800 m³/ton',
      'Methane Content': '50-70%',
    },
  },
  thermal: {
    title: 'Thermal Treatment',
    icon: Zap,
    description: 'High-temperature processes for waste volume reduction and energy recovery',
    efficiency: 90,
    applications: ['Municipal solid waste', 'Medical waste', 'Hazardous materials', 'Industrial waste'],
    benefits: ['Volume reduction', 'Energy generation', 'Pathogen elimination', 'Metal recovery'],
    process: [
      { step: 'Waste Preparation', description: 'Sorting and pre-treatment of incoming waste' },
      { step: 'Combustion/Gasification', description: 'High-temperature thermal conversion' },
      { step: 'Energy Recovery', description: 'Steam and electricity generation' },
      { step: 'Emission Control', description: 'Advanced air pollution control systems' },
    ],
    specs: {
      'Operating Temperature': '850-1200°C',
      'Volume Reduction': '85-95%',
      'Energy Output': '500-700 kWh/ton',
      'Emission Standards': 'EU/US EPA compliant',
    },
  },
  mechanical: {
    title: 'Mechanical Biological Treatment',
    icon: Recycle,
    description: 'Combined mechanical sorting and biological treatment processes',
    efficiency: 75,
    applications: ['Mixed municipal waste', 'Commercial waste', 'Construction debris', 'Bulky waste'],
    benefits: ['Material recovery', 'Waste stabilization', 'Landfill diversion', 'RDF production'],
    process: [
      { step: 'Mechanical Sorting', description: 'Automated separation of recyclables' },
      { step: 'Biological Treatment', description: 'Composting or anaerobic digestion' },
      { step: 'Material Recovery', description: 'Extraction of valuable materials' },
      { step: 'Residue Processing', description: 'RDF or stabilized output production' },
    ],
    specs: {
      'Recovery Rate': '60-80%',
      'Processing Time': '2-8 weeks',
      'Throughput': '50-500 tons/day',
      'Automation Level': '85-95%',
    },
  },
  composting: {
    title: 'Advanced Composting',
    icon: Leaf,
    description: 'Controlled aerobic decomposition for organic waste treatment',
    efficiency: 70,
    applications: ['Garden waste', 'Food scraps', 'Agricultural residues', 'Paper waste'],
    benefits: ['Soil amendment', 'Carbon sequestration', 'Nutrient recycling', 'Waste reduction'],
    process: [
      { step: 'Feedstock Mixing', description: 'Optimal C:N ratio preparation' },
      { step: 'Active Composting', description: 'Controlled aerobic decomposition' },
      { step: 'Curing Phase', description: 'Stabilization and maturation' },
      { step: 'Screening & Packaging', description: 'Final product preparation' },
    ],
    specs: {
      'Process Time': '8-16 weeks',
      'Temperature': '55-70°C',
      'Moisture Content': '50-60%',
      'Volume Reduction': '40-60%',
    },
  },
};

export function TreatmentTechnologies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('anaerobic');

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Treatment Technologies
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Advanced Waste Treatment Solutions
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our comprehensive suite of treatment technologies ensures optimal resource recovery 
            and environmental protection for every type of waste stream.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Technology Overview */}
                    <div className="lg:col-span-2 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            {tech.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {tech.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {/* Efficiency */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Treatment Efficiency</span>
                              <span className="font-bold text-green-600">{tech.efficiency}%</span>
                            </div>
                            <Progress value={tech.efficiency} className="h-2" />
                          </div>

                          {/* Applications */}
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Suitable Applications</h4>
                            <div className="flex flex-wrap gap-2">
                              {tech.applications.map((app, index) => (
                                <Badge key={index} variant="secondary">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Key Benefits</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {tech.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Process Flow */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Process Flow</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {tech.process.map((step, index) => (
                              <div key={index} className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                                </div>
                                <div>
                                  <h5 className="font-medium text-gray-900">{step.step}</h5>
                                  <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Technical Specifications */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Technical Specifications</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {Object.entries(tech.specs).map(([spec, value]) => (
                            <div key={spec} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                              <span className="text-sm text-gray-600">{spec}</span>
                              <span className="font-medium text-gray-900">{value}</span>
                            </div>
                          ))}
                        </CardContent>
                      </Card>

                      {/* Performance Metrics */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Performance Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">{tech.efficiency}%</div>
                            <div className="text-sm text-gray-600">Treatment Efficiency</div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div className="text-lg font-bold text-blue-600">24/7</div>
                              <div className="text-xs text-gray-600">Operation</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-purple-600">99%</div>
                              <div className="text-xs text-gray-600">Uptime</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Environmental Impact */}
                      <Card className="bg-green-50 border-green-200">
                        <CardHeader>
                          <CardTitle className="text-green-800">Environmental Impact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-green-700">CO₂ Reduction</span>
                            <span className="font-medium text-green-800">80-95%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-green-700">Landfill Diversion</span>
                            <span className="font-medium text-green-800">85-99%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-green-700">Resource Recovery</span>
                            <span className="font-medium text-green-800">70-90%</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
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