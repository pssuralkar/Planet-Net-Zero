"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Zap, Shield } from 'lucide-react';

const comparisonData = [
  {
    category: 'Efficiency',
    industrial: {
      value: '99%',
      description: 'SO₂ removal efficiency',
      details: ['Proven FGD technology', 'Multi-stage scrubbing', 'Optimized reagent use'],
    },
    biogas: {
      value: '95%+',
      description: 'Methane purity achieved',
      details: ['Advanced separation', 'CO₂ removal', 'Trace contaminant control'],
    },
  },
  {
    category: 'Applications',
    industrial: {
      value: '6',
      description: 'Major product categories',
      details: ['Power generation', 'Manufacturing', 'Chemical processing'],
    },
    biogas: {
      value: '5',
      description: 'Key market segments',
      details: ['Vehicle fuel', 'Grid injection', 'Industrial heating'],
    },
  },
  {
    category: 'Capacity Range',
    industrial: {
      value: '10-5000',
      description: 'Nm³/h processing capacity',
      details: ['Scalable design', 'Modular systems', 'Custom configurations'],
    },
    biogas: {
      value: '50-5000',
      description: 'Nm³/h biogas processing',
      details: ['Small to large scale', 'Flexible operation', 'Automated control'],
    },
  },
  {
    category: 'ROI Timeline',
    industrial: {
      value: '18-24',
      description: 'Months typical payback',
      details: ['Compliance savings', 'Efficiency gains', 'Reduced penalties'],
    },
    biogas: {
      value: '12-18',
      description: 'Months typical payback',
      details: ['Energy sales', 'Carbon credits', 'Waste disposal savings'],
    },
  },
];

const features = [
  {
    icon: CheckCircle,
    title: 'Proven Technology',
    description: 'Field-tested solutions with thousands of successful installations worldwide',
  },
  {
    icon: TrendingUp,
    title: 'Superior Performance',
    description: 'Industry-leading efficiency rates and reliability metrics',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Optimized designs that minimize energy consumption and operating costs',
  },
  {
    icon: Shield,
    title: 'Comprehensive Support',
    description: '24/7 technical support, training, and maintenance services',
  },
];

export function ProductComparison() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Product Comparison
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Compare our industrial and biogas product segments to understand which solution 
            best fits your environmental technology needs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Segment Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Category</th>
                      <th className="text-center p-4">Industrial Segment</th>
                      <th className="text-center p-4">Biogas Segment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{row.category}</td>
                        <td className="p-4 text-center">
                          <div className="space-y-2">
                            <div className="text-2xl font-bold text-blue-600">{row.industrial.value}</div>
                            <div className="text-sm text-gray-600">{row.industrial.description}</div>
                            <div className="flex flex-wrap justify-center gap-1">
                              {row.industrial.details.map((detail, detailIndex) => (
                                <Badge key={detailIndex} variant="outline" className="text-xs">
                                  {detail}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="space-y-2">
                            <div className="text-2xl font-bold text-green-600">{row.biogas.value}</div>
                            <div className="text-sm text-gray-600">{row.biogas.description}</div>
                            <div className="flex flex-wrap justify-center gap-1">
                              {row.biogas.details.map((detail, detailIndex) => (
                                <Badge key={detailIndex} variant="outline" className="text-xs">
                                  {detail}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className={`transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Performance Stats */}
        <div className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Combined Portfolio Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Total Installations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2.5M</div>
              <div className="text-sm text-gray-600">Tons CO₂ Reduced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}