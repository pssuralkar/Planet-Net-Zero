"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Factory, Wind, Filter, Zap } from 'lucide-react';
import Link from 'next/link';

export function ProductsHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Environmental Technology
            <span className="gradient-eco bg-clip-text text-transparent"> Products</span>
          </h1>
          
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comprehensive portfolio of proven environmental technology solutions for industrial emission control, 
            biogas purification, and sustainable energy production. Choose from our range of cutting-edge systems 
            designed for maximum efficiency and reliability.
          </p>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Factory className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">99%</div>
              <div className="text-sm text-gray-600">SO₂ Removal</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wind className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">95%+</div>
              <div className="text-sm text-gray-600">Biogas Purity</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Filter className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Operation</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Installations</div>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact" className="flex items-center">
                Get Product Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/applications">
                View Applications
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}