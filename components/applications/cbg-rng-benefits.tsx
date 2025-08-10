"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, DollarSign, Zap, Recycle, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description: 'Significant reduction in greenhouse gas emissions and carbon footprint',
    metrics: ['80-90% GHG reduction', 'Carbon negative fuel', 'Waste diversion'],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: DollarSign,
    title: 'Economic Benefits',
    description: 'Multiple revenue streams and attractive return on investment',
    metrics: ['LCFS credits', 'RIN values', '15-20% IRR typical'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Energy Security',
    description: 'Domestic renewable energy production reducing import dependence',
    metrics: ['Local production', 'Grid injection ready', 'Fuel diversification'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'Convert organic waste streams into valuable energy resources',
    metrics: ['Landfill diversion', 'Odor reduction', 'Circular economy'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Meet renewable fuel standards and environmental regulations',
    metrics: ['RFS compliance', 'LCFS eligibility', 'EPA certified'],
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: TrendingUp,
    title: 'Market Opportunities',
    description: 'Growing demand for renewable natural gas across sectors',
    metrics: ['Transportation fuel', 'Industrial heating', 'Power generation'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
  },
];

const applications = [
  {
    title: 'Vehicle Fuel (CNG)',
    description: 'Compressed natural gas for fleet vehicles and public transportation',
    specs: ['95%+ methane', '3,600 psi compression', 'Automotive standards'],
  },
  {
    title: 'Pipeline Injection',
    description: 'Direct injection into natural gas distribution networks',
    specs: ['Pipeline quality', 'Tariff compliance', 'Continuous monitoring'],
  },
  {
    title: 'Industrial Applications',
    description: 'Process heating, steam generation, and industrial operations',
    specs: ['High BTU content', 'Consistent quality', 'Reliable supply'],
  },
];

export function CBGRNGBenefits() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Benefits of CBG/RNG Production
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Discover the comprehensive advantages of implementing compressed biogas and 
            renewable natural gas solutions for your organization.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.title}
                className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="space-y-2">
                    {benefit.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Applications */}
        <div className={`transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={app.title} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">{app.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{app.description}</p>
                  <div className="space-y-1">
                    {app.specs.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs mr-1 mb-1">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Economic Impact */}
        <div className={`mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Economic Impact</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              CBG/RNG projects deliver strong financial returns through multiple revenue streams 
              and environmental incentives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$15-25</div>
              <div className="text-sm text-white/80">per MMBtu typical</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15-20%</div>
              <div className="text-sm text-white/80">IRR typical</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5-7 years</div>
              <div className="text-sm text-white/80">Payback period</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">20+ years</div>
              <div className="text-sm text-white/80">Project life</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}