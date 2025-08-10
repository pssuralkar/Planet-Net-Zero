"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Zap, Wind, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-green-200/30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-200/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-100/20 animate-float"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Wind className="absolute top-1/4 left-1/4 w-8 h-8 text-green-400/40 animate-float" style={{animationDelay: '1s'}} />
        <Droplets className="absolute top-1/3 right-1/4 w-6 h-6 text-blue-400/40 animate-float" style={{animationDelay: '3s'}} />
        <Zap className="absolute bottom-1/3 left-1/3 w-7 h-7 text-green-500/40 animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Revolutionary Environmental Technology
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Transforming Industries for a{' '}
                <span className="gradient-eco bg-clip-text text-transparent">
                  Net Zero Future
                </span>
              </h1>
              
              <p className={`text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Advanced emission control solutions, biogas purification systems, and sustainable technology 
                that reduces environmental impact while maximizing operational efficiency.
              </p>
            </div>

            {/* Key Benefits */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Emission Reduction</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">System Monitoring</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-600">ROI</div>
                <div className="text-sm text-gray-600">Within 18 Months</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button 
                asChild 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 rounded-lg font-medium border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex items-center space-x-6 text-sm text-gray-500 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 mr-1">500+</span>
                Systems Deployed
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 mr-1">98%</span>
                Client Satisfaction
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 mr-1">ISO</span>
                Certified
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Visualization */}
              <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                
                {/* Process Flow Visualization */}
                <div className="relative z-10 space-y-6">
                  <div className="text-center text-white font-semibold text-lg">
                    Emission Control Process
                  </div>
                  
                  {/* Process Steps */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Wind className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">Intake</span>
                      </div>
                      <div className="flex-1 mx-4 h-0.5 bg-white/30"></div>
                      <div className="text-white/80 text-sm">Raw Gas</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">Process</span>
                      </div>
                      <div className="flex-1 mx-4 h-0.5 bg-white/30"></div>
                      <div className="text-white/80 text-sm">Purification</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Droplets className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">Output</span>
                      </div>
                      <div className="flex-1 mx-4 h-0.5 bg-white/30"></div>
                      <div className="text-white/80 text-sm">Clean Gas</div>
                    </div>
                  </div>
                  
                  {/* Efficiency Meter */}
                  <div className="bg-white/10 rounded-lg p-4 mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm font-medium">Efficiency</span>
                      <span className="text-white text-sm font-bold">95%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="text-xs text-gray-500">CO₂ Reduced</div>
                <div className="text-lg font-bold text-green-600">2.5M tons</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-xs text-gray-500">Energy Saved</div>
                <div className="text-lg font-bold text-blue-600">40%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}