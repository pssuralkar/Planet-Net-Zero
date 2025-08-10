"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Zap, Leaf } from 'lucide-react';

const caseStudies = [
  {
    title: 'Municipal Wastewater Treatment Plant',
    location: 'California, USA',
    capacity: '2.5 MW',
    feedstock: 'Sewage sludge',
    technology: 'Membrane separation',
    results: {
      methane: '96.5%',
      production: '180,000 MMBtu/year',
      ghgReduction: '85%',
      roi: '18 months',
    },
    description: 'Large-scale RNG production facility converting municipal wastewater biogas to pipeline-quality renewable natural gas.',
    highlights: ['LCFS credits', 'Grid injection', '24/7 operation'],
  },
  {
    title: 'Agricultural Waste-to-Energy',
    location: 'Iowa, USA',
    capacity: '1.8 MW',
    feedstock: 'Livestock manure',
    technology: 'PSA purification',
    results: {
      methane: '95.2%',
      production: '125,000 MMBtu/year',
      ghgReduction: '90%',
      roi: '22 months',
    },
    description: 'Farm-based CBG production system processing dairy and swine manure for local CNG vehicle fuel.',
    highlights: ['Vehicle fuel', 'Odor reduction', 'Nutrient recovery'],
  },
  {
    title: 'Food Processing Facility',
    location: 'Ontario, Canada',
    capacity: '1.2 MW',
    feedstock: 'Food waste',
    technology: 'Water scrubbing',
    results: {
      methane: '94.8%',
      production: '95,000 MMBtu/year',
      ghgReduction: '88%',
      roi: '24 months',
    },
    description: 'Industrial biogas upgrading system converting food processing waste to renewable natural gas.',
    highlights: ['Waste diversion', 'Process heat', 'Carbon credits'],
  },
];

const technologies = [
  {
    name: 'Membrane Separation',
    description: 'Selective permeation technology for CO₂ removal',
    advantages: ['Low energy consumption', 'Compact design', 'High reliability'],
    applications: ['Large scale plants', 'Continuous operation', 'High purity requirements'],
  },
  {
    name: 'Pressure Swing Adsorption',
    description: 'Cyclic adsorption process for gas purification',
    advantages: ['High efficiency', 'Proven technology', 'Flexible operation'],
    applications: ['Medium scale plants', 'Variable feed gas', 'Quick startup'],
  },
  {
    name: 'Water Scrubbing',
    description: 'Physical absorption of CO₂ in water',
    advantages: ['Simple operation', 'Low maintenance', 'Environmentally friendly'],
    applications: ['Small to medium plants', 'Rural locations', 'Cost-sensitive projects'],
  },
];

export function CBGRNGCaseStudies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Successful CBG/RNG Projects
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Real-world examples of successful compressed biogas and renewable natural gas 
            implementations across various industries and applications.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.title}
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{study.capacity}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {study.location}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">Feedstock:</span>
                    <div className="font-medium">{study.feedstock}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Technology:</span>
                    <div className="font-medium">{study.technology}</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-green-500 mr-2" />
                      <span>{study.results.methane} CH₄</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                      <span>{study.results.production}</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-4 h-4 text-green-500 mr-2" />
                      <span>{study.results.ghgReduction} GHG↓</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-purple-500 mr-2" />
                      <span>{study.results.roi} ROI</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-1">
                    {study.highlights.map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className={`transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Purification Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="bg-gray-50 border-0">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">{tech.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Advantages:</h5>
                    <ul className="space-y-1">
                      {tech.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Best For:</h5>
                    <div className="flex flex-wrap gap-1">
                      {tech.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your CBG/RNG Project?</h3>
              <p className="text-lg mb-6 text-white/90">
                Let our experts help you design and implement the optimal biogas upgrading 
                solution for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-green-600 hover:bg-gray-100">
                  <a href="/contact">Get Project Quote</a>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <a href="/products/biogas">View Technology</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}