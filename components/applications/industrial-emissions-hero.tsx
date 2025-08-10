"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Factory, TrendingDown, Shield, Award } from 'lucide-react';

export function IndustrialEmissionsHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Industrial Emissions Control
            <span className="gradient-eco bg-clip-text text-transparent"> Solutions</span>
          </h1>
          
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive emission control systems for manufacturing, power generation, and chemical processing. 
            Our advanced technologies reduce SO₂, NOₓ, particulates, and other pollutants by up to 99% 
            while ensuring regulatory compliance and operational efficiency.
          </p>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Factory className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">99%</div>
              <div className="text-sm text-gray-600">SO₂ Removal</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingDown className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">NOₓ Reduction</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Compliance</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}