"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Let's Build a Sustainable 
            <span className="gradient-eco bg-clip-text text-transparent"> Future Together</span>
          </h1>
          
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Ready to reduce your environmental impact? Our team of experts is here to help you 
            find the perfect solution for your emission control and sustainability needs.
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">info@planetnetzero.com</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">123 Green Tech Blvd</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}