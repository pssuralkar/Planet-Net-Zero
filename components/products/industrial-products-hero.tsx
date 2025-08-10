"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Factory, Shield, TrendingDown, Award } from 'lucide-react';
import Link from 'next/link';

export function IndustrialProductsHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Factory className="w-4 h-4 mr-2" />
              Industrial Emission Control
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Advanced Industrial{' '}
              <span className="gradient-eco bg-clip-text text-transparent">
                Emission Control Systems
              </span>
            </h1>
            
            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Comprehensive portfolio of proven emission control technologies for manufacturing, 
              power generation, and chemical processing. Achieve up to 99% pollutant removal 
              with our industry-leading solutions.
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-red-600">99%</div>
                <div className="text-sm text-gray-600">SO₂ Removal</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">NOₓ Reduction</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact" className="flex items-center">
                  Get Product Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/applications/industrial-emissions">
                  View Applications
                </Link>
              </Button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-400 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative bg-gradient-to-br from-blue-400 to-gray-500 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center text-white font-semibold text-lg">
                  Industrial Control Systems
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Factory className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">Sulphur Removal</span>
                    </div>
                    <div className="text-white/80 text-sm">99% Efficiency</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">Chemical Scrubbers</span>
                    </div>
                    <div className="text-white/80 text-sm">Multi-pollutant</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">FGD Systems</span>
                    </div>
                    <div className="text-white/80 text-sm">Proven Technology</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm font-medium">System Reliability</span>
                    <span className="text-white text-sm font-bold">99.5%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '99.5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}