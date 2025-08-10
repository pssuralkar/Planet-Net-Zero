"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Environmental Director',
    company: 'GreenTech Industries',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'Planet Net Zero\'s biogas purification system exceeded our expectations. We achieved 95% emission reduction within the first month of operation.',
    rating: 5,
    industry: 'Manufacturing',
    result: '95% Emission Reduction',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Plant Manager',
    company: 'Sustainable Power Solutions',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The ROI was incredible. Our flue gas desulfurization system paid for itself in just 14 months, and we\'re now saving $50k monthly.',
    rating: 5,
    industry: 'Energy',
    result: '14-month ROI',
  },
  {
    name: 'Dr. Emily Watson',
    title: 'Chief Technology Officer',
    company: 'EcoProcess Corp',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'Outstanding technical support and system reliability. The automated monitoring gives us complete visibility into our emission control performance.',
    rating: 5,
    industry: 'Chemical',
    result: '99.9% Uptime',
  },
  {
    name: 'James Thompson',
    title: 'Operations Director',
    company: 'Clean Energy Partners',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The system integration was seamless and the training provided was comprehensive. Our team was operational within days of installation.',
    rating: 5,
    industry: 'Renewable Energy',
    result: 'Seamless Integration',
  },
];

const companyLogos = [
  { name: 'GreenTech Industries', logo: 'GT' },
  { name: 'Sustainable Power', logo: 'SP' },
  { name: 'EcoProcess Corp', logo: 'EC' },
  { name: 'Clean Energy Partners', logo: 'CE' },
  { name: 'Industrial Solutions', logo: 'IS' },
  { name: 'Environmental Systems', logo: 'ES' },
];

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Client Success Stories
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            See how our environmental technology solutions have helped businesses achieve 
            their sustainability goals while delivering exceptional ROI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200 + 600}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.title}</div>
                          <div className="text-sm text-gray-500">{testimonial.company}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-1">
                          {testimonial.industry}
                        </Badge>
                        <div className="text-sm font-semibold text-green-600">
                          {testimonial.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className={`transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-center text-gray-500 text-sm mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companyLogos.map((company, index) => (
              <div 
                key={company.name}
                className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                title={company.name}
              >
                <span className="text-gray-600 font-bold text-sm">
                  {company.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Technical Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Successful Installations</div>
          </div>
        </div>
      </div>
    </section>
  );
}