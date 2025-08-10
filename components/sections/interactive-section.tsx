"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calculator, BarChart3, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ROICalculator } from '@/components/interactive/roi-calculator';
import { ImpactTracker } from '@/components/interactive/impact-tracker';
import { SystemConfigurator } from '@/components/interactive/system-configurator';

export function InteractiveSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Interactive Tools
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Explore Our Solutions
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Use our interactive tools to calculate ROI, track environmental impact, 
            and configure the perfect system for your needs.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Tabs defaultValue="roi" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="roi" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                ROI Calculator
              </TabsTrigger>
              <TabsTrigger value="impact" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Impact Tracker
              </TabsTrigger>
              <TabsTrigger value="configurator" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                System Config
              </TabsTrigger>
            </TabsList>

            <TabsContent value="roi">
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-green-600" />
                    ROI Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate the return on investment for your environmental technology solution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ROICalculator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact">
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Environmental Impact Tracker
                  </CardTitle>
                  <CardDescription>
                    Monitor real-time environmental impact metrics and improvements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImpactTracker />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="configurator">
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-purple-600" />
                    Virtual System Configurator
                  </CardTitle>
                  <CardDescription>
                    Design and configure your custom environmental technology solution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SystemConfigurator />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/contact" className="flex items-center">
              Get Professional Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}