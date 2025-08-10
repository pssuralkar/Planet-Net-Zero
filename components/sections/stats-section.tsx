"use client";

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Average Emission Reduction',
    description: 'Across all our deployed systems',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Systems Deployed',
    description: 'Worldwide installations',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Based on customer surveys',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global presence and support',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setStartCount(true), 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our Impact
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Proven Results Across the Globe
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our environmental technology solutions have delivered measurable results for businesses worldwide, 
            helping them achieve sustainability goals while improving operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 600}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">
                      {startCount ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                        />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Impact Metrics */}
        <div className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {startCount ? (
                  <CountUp start={0} end={2.5} duration={2.5} decimals={1} suffix="M tons" />
                ) : (
                  '0.0M tons'
                )}
              </div>
              <div className="text-sm text-gray-600">CO₂ Emissions Reduced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {startCount ? (
                  <CountUp start={0} end={40} duration={2.5} suffix="%" />
                ) : (
                  '0%'
                )}
              </div>
              <div className="text-sm text-gray-600">Average Energy Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {startCount ? (
                  <CountUp start={0} end={18} duration={2.5} suffix=" months" />
                ) : (
                  '0 months'
                )}
              </div>
              <div className="text-sm text-gray-600">Average ROI Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}