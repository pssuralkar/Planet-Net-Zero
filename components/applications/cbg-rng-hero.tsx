"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Recycle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function CBGRNGHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Recycle className="w-4 h-4 mr-2" />
              Renewable Energy Solutions
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Compressed Biogas (CBG) &{' '}
              <span className="gradient-eco bg-clip-text text-transparent">
                Renewable Natural Gas
              </span>
            </h1>
            
            <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Transform organic waste into high-quality renewable energy with our advanced biogas 
              purification and upgrading systems. Achieve 95%+ methane purity for grid injection 
              and vehicle fuel applications.
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-600">95%+</div>
                <div className="text-sm text-gray-600">Methane Purity</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">CO₂ Removal</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Operation</div>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/contact" className="flex items-center">
                  Get CBG/RNG Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/products/biogas">
                  View Technology
                </Link>
              </Button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-400 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center text-white font-semibold text-lg">
                  CBG/RNG Production Process
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Recycle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">Raw Biogas</span>
                    </div>
                    <div className="text-white/80 text-sm">60% CH₄</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">Purification</span>
                    </div>
                    <div className="text-white/80 text-sm">CO₂ Removal</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">CBG/RNG</span>
                    </div>
                    <div className="text-white/80 text-sm">95%+ CH₄</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm font-medium">Purity Level</span>
                    <span className="text-white text-sm font-bold">95%+</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
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