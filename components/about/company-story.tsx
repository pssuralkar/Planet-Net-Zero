"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Lightbulb, Rocket, Award } from 'lucide-react';

const milestones = [
  {
    year: '1998',
    title: 'Company Founded',
    description: 'Started as a small environmental consulting firm with a vision to combat industrial pollution.',
    icon: Calendar,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    year: '2005',
    title: 'First Breakthrough',
    description: 'Developed revolutionary biogas purification technology that achieved 95% efficiency rates.',
    icon: Lightbulb,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    year: '2012',
    title: 'Global Expansion',
    description: 'Expanded operations to 15 countries and established partnerships with major industrial players.',
    icon: Rocket,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    year: '2020',
    title: 'Industry Recognition',
    description: 'Received multiple awards for innovation in environmental technology and sustainability.',
    icon: Award,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export function CompanyStory() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our Journey to Net Zero
          </h2>
          <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From a small startup to a global leader in environmental technology, 
            our commitment to innovation and sustainability has driven us forward for over two decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <Card 
                key={milestone.year}
                className={`group hover:shadow-xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${milestone.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${milestone.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className={`mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-green-700 leading-relaxed">
                To provide innovative, sustainable environmental technology solutions that enable 
                industries to achieve net-zero emissions while maintaining operational excellence 
                and economic viability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
              <p className="text-blue-700 leading-relaxed">
                To be the global leader in environmental technology solutions, creating a cleaner, 
                more sustainable world for future generations through continuous innovation and 
                technological advancement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}