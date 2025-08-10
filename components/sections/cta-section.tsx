"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Calendar, FileText } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-white animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white animate-float"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Ready to Transform Your Environmental Impact?
          </h2>
          
          <p className={`text-xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Join hundreds of companies worldwide who have reduced their emissions by up to 95% 
            while achieving rapid ROI with our proven environmental technology solutions.
          </p>

          {/* Key Benefits */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">Free</div>
              <div className="text-white/90 text-sm">Initial Consultation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">48hrs</div>
              <div className="text-white/90 text-sm">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">25+</div>
              <div className="text-white/90 text-sm">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact" className="flex items-center">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-200"
            >
              <Link href="tel:+1-555-123-4567" className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (555) 123-4567
              </Link>
            </Button>
          </div>

          {/* Additional Options */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link 
              href="/contact" 
              className="flex items-center hover:text-white transition-colors duration-200 group"
            >
              <FileText className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              Download Technical Specifications
            </Link>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <Link 
              href="/about" 
              className="flex items-center hover:text-white transition-colors duration-200 group"
            >
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-12 pt-8 border-t border-white/20 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70 text-sm">
              <div className="flex items-center">
                <span className="font-semibold text-white mr-1">ISO 14001</span>
                Certified
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <div className="flex items-center">
                <span className="font-semibold text-white mr-1">24/7</span>
                Technical Support
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <div className="flex items-center">
                <span className="font-semibold text-white mr-1">Warranty</span>
                Up to 10 Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}