"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Shield, Users, Lightbulb, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description: 'We are committed to protecting our planet through innovative solutions that reduce environmental impact.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Integrity & Trust',
    description: 'We build lasting relationships through honest communication, ethical practices, and reliable service delivery.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Excellence',
    description: 'We continuously push the boundaries of technology to develop cutting-edge environmental solutions.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'We work closely with our clients as partners, ensuring their success through tailored solutions.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable outcomes that provide real value and sustainable benefits.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Heart,
    title: 'Social Responsibility',
    description: 'We believe in making a positive impact on communities and society through our work and values.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
];

export function ValuesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our Core Values
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            These fundamental principles guide everything we do and shape our commitment 
            to creating a sustainable future for generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={value.title}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Us in Creating a Sustainable Future</h3>
              <p className="text-lg mb-6 text-white/90">
                Together, we can build a world where industry and environment thrive in harmony. 
                Let's work towards a net-zero future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Partner With Us
                </a>
                <a
                  href="/careers"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                >
                  Join Our Team
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}