"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Factory, Zap, Building, Truck, Flame, Beaker } from 'lucide-react';

const industries = [
  {
    icon: Zap,
    name: 'Power Generation',
    description: 'Coal, natural gas, and renewable energy facilities',
    challenges: ['SO₂ emissions', 'NOₓ control', 'Mercury removal', 'Particulate matter'],
    solutions: ['Wet FGD systems', 'SCR/SNCR', 'ESP/Baghouse', 'Activated carbon injection'],
    results: {
      so2Reduction: '99%',
      noxReduction: '90%',
      compliance: '100%',
      projects: '150+',
    },
    caseStudy: {
      title: '1,200 MW Coal Plant Retrofit',
      description: 'Complete emission control upgrade achieving all environmental standards',
      results: ['99.2% SO₂ removal', '92% NOₓ reduction', '$2.5M annual savings'],
    },
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Factory,
    name: 'Steel & Metals',
    description: 'Primary metals production and processing',
    challenges: ['Coke oven emissions', 'Sinter plant SO₂', 'Blast furnace dust', 'Rolling mill fumes'],
    solutions: ['Coke oven gas cleaning', 'Sinter plant FGD', 'Baghouse filtration', 'Fume extraction'],
    results: {
      so2Reduction: '95%',
      noxReduction: '85%',
      compliance: '100%',
      projects: '80+',
    },
    caseStudy: {
      title: 'Integrated Steel Mill Upgrade',
      description: 'Comprehensive emission control for 5 million ton/year facility',
      results: ['95% SO₂ reduction', '99.8% dust removal', '18-month ROI'],
    },
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
  },
  {
    icon: Building,
    name: 'Cement & Minerals',
    description: 'Cement production and mineral processing',
    challenges: ['Kiln SO₂ emissions', 'NOₓ from combustion', 'Particulate matter', 'Mercury emissions'],
    solutions: ['SNCR systems', 'Dry sorbent injection', 'Baghouse filters', 'Mercury control'],
    results: {
      so2Reduction: '90%',
      noxReduction: '60%',
      compliance: '100%',
      projects: '120+',
    },
    caseStudy: {
      title: '5,000 TPD Cement Plant',
      description: 'Multi-pollutant control system for modern cement facility',
      results: ['92% SO₂ removal', '65% NOₓ reduction', 'Zero violations'],
    },
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Beaker,
    name: 'Chemical & Petrochemical',
    description: 'Chemical processing and refining operations',
    challenges: ['VOC emissions', 'Acid gas removal', 'Catalyst regeneration', 'Process vents'],
    solutions: ['Thermal oxidizers', 'Absorption towers', 'Adsorption systems', 'Catalytic treatment'],
    results: {
      so2Reduction: '98%',
      noxReduction: '88%',
      compliance: '100%',
      projects: '200+',
    },
    caseStudy: {
      title: 'Petrochemical Complex',
      description: 'Integrated emission control for multi-unit refinery',
      results: ['98% acid gas removal', '95% VOC destruction', '$5M annual savings'],
    },
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Truck,
    name: 'Waste-to-Energy',
    description: 'Municipal and industrial waste incineration',
    challenges: ['Dioxin control', 'Heavy metals', 'Acid gases', 'Particulate emissions'],
    solutions: ['Multi-stage scrubbing', 'Activated carbon', 'Baghouse filtration', 'SNCR systems'],
    results: {
      so2Reduction: '99%',
      noxReduction: '70%',
      compliance: '100%',
      projects: '60+',
    },
    caseStudy: {
      title: '500 TPD Waste Incinerator',
      description: 'Advanced emission control for municipal waste facility',
      results: ['99.5% acid gas removal', '99.9% dioxin destruction', 'EU compliance'],
    },
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Flame,
    name: 'Glass & Ceramics',
    description: 'Glass manufacturing and ceramic production',
    challenges: ['Furnace NOₓ', 'SO₂ emissions', 'Particulate matter', 'Heavy metals'],
    solutions: ['Oxy-fuel conversion', 'SNCR systems', 'Dry sorbent injection', 'Fabric filtration'],
    results: {
      so2Reduction: '85%',
      noxReduction: '75%',
      compliance: '100%',
      projects: '40+',
    },
    caseStudy: {
      title: 'Float Glass Production Line',
      description: 'Complete emission control for 600 TPD glass furnace',
      results: ['88% NOₓ reduction', '90% SO₂ removal', '25% energy savings'],
    },
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
];

export function IndustryApplications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Industry Applications
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Proven emission control solutions across diverse industrial sectors, 
            each tailored to specific operational requirements and environmental challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card 
                key={industry.name}
                className={`group hover:shadow-xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${industry.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${industry.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                          {industry.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{industry.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">{industry.results.so2Reduction}</div>
                      <div className="text-xs text-gray-600">SO₂ Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{industry.results.noxReduction}</div>
                      <div className="text-xs text-gray-600">NOₓ Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{industry.results.compliance}</div>
                      <div className="text-xs text-gray-600">Compliance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{industry.results.projects}</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Challenges:</h4>
                      <ul className="space-y-1">
                        {industry.challenges.map(challenge => (
                          <li key={challenge} className="flex items-center text-xs text-gray-600">
                            <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Our Solutions:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map(solution => (
                          <li key={solution} className="flex items-center text-xs text-gray-600">
                            <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Featured Case Study:</h4>
                    <h5 className="font-medium text-gray-800 mb-1">{industry.caseStudy.title}</h5>
                    <p className="text-xs text-gray-600 mb-3">{industry.caseStudy.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {industry.caseStudy.results.map(result => (
                        <Badge key={result} variant="secondary" className="text-xs">
                          {result}
                        </Badge>
                      ))}
                    </div>
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