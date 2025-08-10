"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, DollarSign, Calendar } from 'lucide-react';

const caseStudies = [
  {
    title: '1,200 MW Coal Power Plant',
    location: 'Texas, USA',
    industry: 'Power Generation',
    technology: 'Wet Limestone FGD',
    challenge: 'Meet stringent SO₂ emission limits while maintaining high availability',
    solution: 'Installed dual-loop wet FGD system with forced oxidation and gypsum production',
    results: {
      so2Reduction: '99.2%',
      availability: '98.5%',
      payback: '3.2 years',
      savings: '$2.5M annually',
    },
    timeline: '18 months',
  },
  {
    title: 'Integrated Steel Mill',
    location: 'Ruhr Valley, Germany',
    industry: 'Steel Production',
    technology: 'Multi-stage Scrubber',
    challenge: 'Control multiple pollutants from coke oven and sinter plant operations',
    solution: 'Implemented comprehensive scrubbing system with chemical recovery',
    results: {
      so2Reduction: '95%',
      availability: '99.1%',
      payback: '2.8 years',
      savings: '$1.8M annually',
    },
    timeline: '14 months',
  },
  {
    title: 'Petrochemical Complex',
    location: 'Singapore',
    industry: 'Chemical Processing',
    technology: 'PSA Gas Separation',
    challenge: 'Purify hydrogen stream for downstream processes',
    solution: 'Deployed multi-bed PSA system with automated control',
    results: {
      so2Reduction: '99.9%',
      availability: '99.8%',
      payback: '1.9 years',
      savings: '$3.2M annually',
    },
    timeline: '10 months',
  },
];

export function CaseStudiesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Proven Success Stories
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Real-world case studies demonstrating the effectiveness and ROI of our industrial emission control solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.title}
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{study.industry}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {study.location}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {study.title}
                </CardTitle>
                <p className="text-sm text-blue-600 font-medium">{study.technology}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-900 text-sm">Key Results:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                      <div>
                        <div className="text-sm font-bold text-green-600">{study.results.so2Reduction}</div>
                        <div className="text-xs text-gray-600">Reduction</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-blue-500 mr-2" />
                      <div>
                        <div className="text-sm font-bold text-blue-600">{study.results.savings}</div>
                        <div className="text-xs text-gray-600">Annual Savings</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-purple-500 mr-2" />
                      <div>
                        <div className="text-sm font-bold text-purple-600">{study.results.payback}</div>
                        <div className="text-xs text-gray-600">Payback</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-orange-500 mr-2" />
                      <div>
                        <div className="text-sm font-bold text-orange-600">{study.results.availability}</div>
                        <div className="text-xs text-gray-600">Availability</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Project Timeline:</span>
                      <span className="font-medium text-gray-900">{study.timeline}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}