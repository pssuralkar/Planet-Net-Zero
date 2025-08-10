"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, DollarSign, Calendar, Zap } from 'lucide-react';

export function ROICalculator() {
  const [systemCost, setSystemCost] = useState([500000]);
  const [currentEmissions, setCurrentEmissions] = useState([1000]);
  const [reductionRate, setReductionRate] = useState([85]);
  const [carbonPrice, setCarbonPrice] = useState([25]);
  const [systemType, setSystemType] = useState('biogas');
  const [energySavings, setEnergySavings] = useState([30]);

  const [results, setResults] = useState({
    annualSavings: 0,
    paybackPeriod: 0,
    roi: 0,
    co2Reduced: 0,
    energySaved: 0,
  });

  useEffect(() => {
    const calculateROI = () => {
      const emissions = currentEmissions[0];
      const reduction = reductionRate[0] / 100;
      const carbonCost = carbonPrice[0];
      const investment = systemCost[0];
      const energy = energySavings[0] / 100;

      // Calculate CO2 reduction (tons per year)
      const co2Reduced = emissions * reduction;
      
      // Calculate carbon savings
      const carbonSavings = co2Reduced * carbonCost;
      
      // Calculate energy savings (assuming $0.10 per kWh and 8760 hours/year)
      const energySaved = investment * energy * 0.1;
      
      // Calculate maintenance savings (typically 5-10% of system cost)
      const maintenanceSavings = investment * 0.07;
      
      // Total annual savings
      const annualSavings = carbonSavings + energySaved + maintenanceSavings;
      
      // Payback period (years)
      const paybackPeriod = investment / annualSavings;
      
      // 5-year ROI
      const roi = ((annualSavings * 5 - investment) / investment) * 100;

      setResults({
        annualSavings: Math.round(annualSavings),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        roi: Math.round(roi),
        co2Reduced: Math.round(co2Reduced),
        energySaved: Math.round(energySaved / 1000), // Convert to MWh
      });
    };

    calculateROI();
  }, [systemCost, currentEmissions, reductionRate, carbonPrice, systemType, energySavings]);

  return (
    <div className="space-y-8">
      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium mb-3 block">System Type</Label>
            <Select value={systemType} onValueChange={setSystemType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="biogas">Biogas Purification</SelectItem>
                <SelectItem value="sulphur">Sulphur Removal</SelectItem>
                <SelectItem value="scrubber">Chemical Scrubber</SelectItem>
                <SelectItem value="fgd">Flue Gas Desulfurization</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">
              System Investment: ${systemCost[0].toLocaleString()}
            </Label>
            <Slider
              value={systemCost}
              onValueChange={setSystemCost}
              max={2000000}
              min={100000}
              step={50000}
              className="w-full"
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">
              Current Emissions: {currentEmissions[0]} tons CO₂/year
            </Label>
            <Slider
              value={currentEmissions}
              onValueChange={setCurrentEmissions}
              max={5000}
              min={100}
              step={50}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Expected Reduction: {reductionRate[0]}%
            </Label>
            <Slider
              value={reductionRate}
              onValueChange={setReductionRate}
              max={95}
              min={50}
              step={5}
              className="w-full"
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">
              Carbon Price: ${carbonPrice[0]}/ton
            </Label>
            <Slider
              value={carbonPrice}
              onValueChange={setCarbonPrice}
              max={100}
              min={10}
              step={5}
              className="w-full"
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">
              Energy Savings: {energySavings[0]}%
            </Label>
            <Slider
              value={energySavings}
              onValueChange={setEnergySavings}
              max={50}
              min={0}
              step={5}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Annual Savings</span>
            </div>
            <div className="text-2xl font-bold text-green-900">
              ${results.annualSavings.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Payback Period</span>
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {results.paybackPeriod} years
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">5-Year ROI</span>
            </div>
            <div className="text-2xl font-bold text-purple-900">
              {results.roi}%
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">CO₂ Reduced</span>
            </div>
            <div className="text-2xl font-bold text-orange-900">
              {results.co2Reduced} tons/year
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Initial Investment:</span>
              <div className="font-semibold">${systemCost[0].toLocaleString()}</div>
            </div>
            <div>
              <span className="text-gray-600">Annual Environmental Impact:</span>
              <div className="font-semibold">{results.co2Reduced} tons CO₂ reduced</div>
            </div>
            <div>
              <span className="text-gray-600">Break-even Point:</span>
              <div className="font-semibold">{results.paybackPeriod} years</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}