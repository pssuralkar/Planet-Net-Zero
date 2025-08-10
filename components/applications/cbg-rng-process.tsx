"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Filter, Droplets, Wind, Zap } from 'lucide-react';

const processSteps = [
  {
    icon: Wind,
    title: 'Raw Biogas Input',
    description: 'Biogas from anaerobic digestion containing 50-70% methane, 30-40% CO₂, and trace impurities',
    specs: ['CH₄: 50-70%', 'CO₂: 30-40%', 'H₂S: 100-3000 ppm', 'H₂O: Saturated'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Droplets,
    title: 'Pre-treatment',
    description: 'Removal of moisture, hydrogen sulfide, and other trace contaminants',
    specs: ['H₂S removal', 'Moisture control', 'Siloxane removal', 'Particulate filtration'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Filter,
    title: 'CO₂ Separation',
    description: 'Advanced separation technology to remove CO₂ and concentrate methane',
    specs: ['Membrane separation', 'PSA technology', 'Water scrubbing', 'Chemical absorption'],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Zap,
    title: 'Final Polishing',
    description: 'Final purification to achieve pipeline quality or vehicle fuel standards',
    specs: ['CH₄: 95%+', 'CO₂: <2%', 'H₂S: <4 ppm', 'Dew point: -40°C'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
];

export function CBGRNGProcess() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            CBG/RNG Production Process
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our comprehensive biogas upgrading process transforms raw biogas into high-quality 
            compressed biogas (CBG) and renewable natural gas (RNG) suitable for various applications.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={step.title}
                className={`flex items-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <Card className={`flex-1 hover:shadow-xl transition-all duration-300 ${isEven ? 'mr-8' : 'ml-8 order-2'}`}>
                  <CardContent className="p-8">
                    <div className={`flex items-start space-x-6 ${!isEven ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {step.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Process Flow Arrow */}
                {index < processSteps.length - 1 && (
                  <div className={`flex items-center justify-center w-16 h-16 ${isEven ? 'order-2' : 'order-1'}`}>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Summary */}
        <div className={`mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">60% → 95%+</div>
              <div className="text-sm text-gray-600">Methane Concentration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%+</div>
              <div className="text-sm text-gray-600">CO₂ Removal Efficiency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Pipeline Quality</div>
              <div className="text-sm text-gray-600">Final Product Standard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}