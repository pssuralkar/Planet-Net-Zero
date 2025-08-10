"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Recycle, Leaf, Zap, Droplets } from 'lucide-react';
import Link from 'next/link';

export function WasteManagementHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-300 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-300 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-purple-300 animate-float"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Recycle className="w-4 h-4 mr-2" />
                Sustainable Waste Management
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Transform Waste into{' '}
                <span className="gradient-eco bg-clip-text text-transparent">
                  Valuable Resources
                </span>
              </h1>
              
              <p className={`text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Advanced waste management technologies that convert organic waste into clean energy, 
                reduce landfill dependency, and create sustainable circular economy solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-lg font-bold text-green-600">90%</div>
                    <div className="text-sm text-gray-600">Waste Diversion</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-lg font-bold text-blue-600">Clean</div>
                    <div className="text-sm text-gray-600">Energy Generation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button 
                asChild 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  Get Waste Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="px-8 py-3 rounded-lg font-medium border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200"
              >
                <Link href="/products/biogas">
                  View Technologies
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-400 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Visualization */}
              <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                
                {/* Waste to Energy Process */}
                <div className="relative z-10 space-y-6">
                  <div className="text-center text-white font-semibold text-lg">
                    Waste-to-Energy Process
                  </div>
                  
                  {/* Process Steps */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Recycle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">Collection</span>
                      </div>
                      <div className="flex-1 mx-4 h-0.5 bg-white/30"></div>
                      <div className="text-white/80 text-sm">Organic Waste</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                          <Droplets className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">Treatment</span>
                      </div>
                      <div className="flex-1 mx-4 h-0.5 bg-white/30"></div>
                      <div className="text-white/80 text-sm">Anaerobic Digestion</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">Output</span>
                      </div>
                      <div className="flex-1 mx-4 h-0.5 bg-white/30"></div>
                      <div className="text-white/80 text-sm">Clean Energy</div>
                    </div>
                  </div>
                  
                  {/* Efficiency Meter */}
                  <div className="bg-white/10 rounded-lg p-4 mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm font-medium">Energy Recovery</span>
                      <span className="text-white text-sm font-bold">85%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="text-xs text-gray-500">Waste Processed</div>
                <div className="text-lg font-bold text-green-600">500 tons/day</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-xs text-gray-500">CO₂ Avoided</div>
                <div className="text-lg font-bold text-blue-600">1,200 tons/year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}