"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Factory, Home, Truck, Utensils, TreePine } from 'lucide-react';
import Link from 'next/link';

const applications = [
  {
    icon: Building,
    title: 'Municipal Waste Management',
    description: 'Comprehensive solutions for cities and municipalities',
    challenge: 'Managing 2.01 billion tons of municipal solid waste annually with increasing urbanization',
    solution: 'Integrated waste management systems combining mechanical sorting, biological treatment, and energy recovery',
    results: {
      wasteReduction: '85%',
      energyGeneration: '500 kWh/ton',
      recyclingRate: '75%',
      costSavings: '$50/ton',
    },
    technologies: ['MBT Systems', 'Waste-to-Energy', 'Material Recovery', 'Composting'],
    caseStudy: {
      location: 'Stockholm, Sweden',
      scale: '500,000 residents',
      achievement: '99% waste diversion from landfills',
    },
  },
  {
    icon: Factory,
    title: 'Industrial Waste Processing',
    description: 'Specialized treatment for manufacturing and processing industries',
    challenge: 'Handling diverse industrial waste streams with varying compositions and hazard levels',
    solution: 'Customized treatment systems designed for specific industrial processes and waste characteristics',
    results: {
      wasteReduction: '90%',
      energyGeneration: '800 kWh/ton',
      recyclingRate: '80%',
      costSavings: '$75/ton',
    },
    technologies: ['Thermal Treatment', 'Chemical Recovery', 'Solvent Recycling', 'Metal Recovery'],
    caseStudy: {
      location: 'Chemical Plant, Germany',
      scale: '50,000 tons/year',
      achievement: '95% waste valorization rate',
    },
  },
  {
    icon: Utensils,
    title: 'Food Waste Recovery',
    description: 'Converting food waste into valuable resources',
    challenge: 'Processing 1.3 billion tons of food waste globally while recovering maximum value',
    solution: 'Anaerobic digestion systems optimized for food waste with biogas upgrading and digestate processing',
    results: {
      wasteReduction: '95%',
      energyGeneration: '600 kWh/ton',
      recyclingRate: '90%',
      costSavings: '$40/ton',
    },
    technologies: ['Anaerobic Digestion', 'Biogas Upgrading', 'Digestate Processing', 'Nutrient Recovery'],
    caseStudy: {
      location: 'Food Processing Facility, Netherlands',
      scale: '100 tons/day',
      achievement: '85% energy self-sufficiency',
    },
  },
  {
    icon: TreePine,
    title: 'Agricultural Waste Management',
    description: 'Sustainable solutions for agricultural residues and livestock waste',
    challenge: 'Managing 5 billion tons of agricultural waste while maintaining soil health and reducing emissions',
    solution: 'Integrated systems for crop residue processing, livestock waste treatment, and nutrient cycling',
    results: {
      wasteReduction: '80%',
      energyGeneration: '400 kWh/ton',
      recyclingRate: '95%',
      costSavings: '$30/ton',
    },
    technologies: ['Biomass Processing', 'Manure Treatment', 'Biogas Production', 'Soil Amendment'],
    caseStudy: {
      location: 'Dairy Farm, Denmark',
      scale: '1,000 cattle',
      achievement: '100% energy independence',
    },
  },
  {
    icon: Home,
    title: 'Residential Waste Solutions',
    description: 'Community-scale waste management and resource recovery',
    challenge: 'Implementing efficient waste collection and treatment for residential communities',
    solution: 'Decentralized treatment systems with source separation and local resource recovery',
    results: {
      wasteReduction: '70%',
      energyGeneration: '300 kWh/ton',
      recyclingRate: '85%',
      costSavings: '$25/ton',
    },
    technologies: ['Source Separation', 'Community Composting', 'Small-scale AD', 'Material Recovery'],
    caseStudy: {
      location: 'Eco-Community, Canada',
      scale: '5,000 residents',
      achievement: '90% waste diversion rate',
    },
  },
  {
    icon: Truck,
    title: 'Commercial Waste Management',
    description: 'Efficient solutions for offices, retail, and commercial establishments',
    challenge: 'Optimizing waste collection routes and treatment for diverse commercial waste streams',
    solution: 'Smart waste management systems with route optimization and specialized treatment facilities',
    results: {
      wasteReduction: '75%',
      energyGeneration: '350 kWh/ton',
      recyclingRate: '80%',
      costSavings: '$35/ton',
    },
    technologies: ['Smart Collection', 'Route Optimization', 'Material Sorting', 'Energy Recovery'],
    caseStudy: {
      location: 'Business District, Singapore',
      scale: '200 buildings',
      achievement: '60% cost reduction',
    },
  },
];

export function WasteApplications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Real-World Applications
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Proven Success Across Industries
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our waste management solutions have been successfully implemented across diverse sectors, 
            delivering measurable environmental and economic benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <Card 
                key={app.title}
                className={`group hover:shadow-xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                          {app.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{app.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Challenge & Solution */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">Challenge:</h4>
                      <p className="text-sm text-gray-600">{app.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">Our Solution:</h4>
                      <p className="text-sm text-gray-600">{app.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 text-sm">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">{app.results.wasteReduction}</div>
                        <div className="text-xs text-gray-600">Waste Reduction</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">{app.results.energyGeneration}</div>
                        <div className="text-xs text-gray-600">Energy Generation</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-purple-600">{app.results.recyclingRate}</div>
                        <div className="text-xs text-gray-600">Recycling Rate</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-orange-600">{app.results.costSavings}</div>
                        <div className="text-xs text-gray-600">Cost Savings</div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Case Study:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{app.caseStudy.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Scale:</span>
                        <span className="font-medium">{app.caseStudy.scale}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Achievement: </span>
                        <span className="font-medium text-green-600">{app.caseStudy.achievement}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Waste Management?</h3>
              <p className="text-lg mb-6 text-white/90">
                Let our experts design a customized waste management solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Get Free Assessment
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  <Link href="/products/biogas">
                    View Technologies
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}