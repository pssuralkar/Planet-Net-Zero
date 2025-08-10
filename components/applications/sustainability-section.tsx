"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Leaf, Recycle, Zap, Droplets, Target, Award } from 'lucide-react';

const sustainabilityMetrics = [
  {
    icon: Leaf,
    title: 'Carbon Footprint Reduction',
    description: 'Significant reduction in greenhouse gas emissions through waste diversion and energy recovery',
    metrics: [
      { label: 'CO₂ Emissions Avoided', value: '2.5M tons/year', progress: 85 },
      { label: 'Methane Capture Rate', value: '95%', progress: 95 },
      { label: 'Carbon Neutrality Timeline', value: '18 months', progress: 75 },
    ],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Recycle,
    title: 'Circular Economy Impact',
    description: 'Maximizing resource recovery and creating closed-loop systems',
    metrics: [
      { label: 'Material Recovery Rate', value: '85%', progress: 85 },
      { label: 'Waste-to-Resource Conversion', value: '90%', progress: 90 },
      { label: 'Landfill Diversion', value: '95%', progress: 95 },
    ],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Energy Generation',
    description: 'Converting waste into clean, renewable energy sources',
    metrics: [
      { label: 'Renewable Energy Output', value: '500 GWh/year', progress: 80 },
      { label: 'Energy Self-Sufficiency', value: '75%', progress: 75 },
      { label: 'Grid Injection Capacity', value: '200 MW', progress: 70 },
    ],
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Protecting water resources through advanced treatment and recycling',
    metrics: [
      { label: 'Water Recovery Rate', value: '90%', progress: 90 },
      { label: 'Leachate Treatment', value: '99%', progress: 99 },
      { label: 'Process Water Recycling', value: '85%', progress: 85 },
    ],
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
  },
];

const sdgGoals = [
  { number: 6, title: 'Clean Water and Sanitation', progress: 85 },
  { number: 7, title: 'Affordable and Clean Energy', progress: 90 },
  { number: 11, title: 'Sustainable Cities and Communities', progress: 80 },
  { number: 12, title: 'Responsible Consumption and Production', progress: 95 },
  { number: 13, title: 'Climate Action', progress: 88 },
  { number: 15, title: 'Life on Land', progress: 75 },
];

const certifications = [
  { name: 'ISO 14001', description: 'Environmental Management', status: 'Certified' },
  { name: 'ISO 50001', description: 'Energy Management', status: 'Certified' },
  { name: 'LEED Platinum', description: 'Green Building', status: 'Achieved' },
  { name: 'Carbon Trust', description: 'Carbon Footprint', status: 'Verified' },
];

export function SustainabilitySection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Sustainability Impact
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Driving Environmental Excellence
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our waste management solutions contribute to global sustainability goals while delivering 
            measurable environmental benefits and supporting the transition to a circular economy.
          </p>
        </div>

        {/* Sustainability Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sustainabilityMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={metric.title}
                className={`group hover:shadow-xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                        {metric.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600">{metric.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {metric.metrics.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="font-bold text-gray-900">{item.value}</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* UN SDG Goals */}
        <div className={`mb-16 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                UN Sustainable Development Goals Contribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sdgGoals.map((goal, index) => (
                  <div key={goal.number} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                        {goal.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{goal.title}</h4>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications and Awards */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="w-6 h-6 text-green-600" />
                Environmental Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={cert.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {cert.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Environmental Impact Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">2.5M</div>
                  <div className="text-sm text-gray-600">Tons CO₂ Avoided</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">500</div>
                  <div className="text-sm text-gray-600">GWh Clean Energy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Waste Diversion</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">85%</div>
                  <div className="text-sm text-gray-600">Resource Recovery</div>
                </div>
              </div>
              <div className="pt-4 border-t border-green-200">
                <p className="text-sm text-green-700 text-center">
                  Contributing to a sustainable future through innovative waste management solutions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}