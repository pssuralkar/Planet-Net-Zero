"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Factory, Wind, Filter, Zap, Settings, CheckCircle } from 'lucide-react';

const systemTypes = {
  biogas: {
    name: 'Biogas Purification',
    icon: Wind,
    description: 'Complete biogas upgrading solutions',
    basePrice: 250000,
    features: ['CO₂ removal', 'H₂S removal', 'Moisture control', 'Siloxane removal'],
  },
  sulphur: {
    name: 'Sulphur Removal',
    icon: Factory,
    description: 'Advanced desulfurization systems',
    basePrice: 180000,
    features: ['SO₂ reduction', 'Catalyst systems', 'Heat recovery', 'Automated control'],
  },
  scrubber: {
    name: 'Chemical Scrubber',
    icon: Filter,
    description: 'Multi-pollutant removal systems',
    basePrice: 320000,
    features: ['Acid gas removal', 'Particulate control', 'Chemical recovery', 'Corrosion resistance'],
  },
  psa: {
    name: 'PSA/VPSA Units',
    icon: Zap,
    description: 'Pressure swing adsorption systems',
    basePrice: 150000,
    features: ['Gas separation', 'Energy efficient', 'Modular design', 'Automated operation'],
  },
};

const capacityOptions = [
  { value: 'small', label: 'Small (< 1 MW)', multiplier: 0.8 },
  { value: 'medium', label: 'Medium (1-5 MW)', multiplier: 1.0 },
  { value: 'large', label: 'Large (5-20 MW)', multiplier: 1.5 },
  { value: 'industrial', label: 'Industrial (> 20 MW)', multiplier: 2.2 },
];

const optionalFeatures = [
  { id: 'monitoring', name: 'Real-time Monitoring System', price: 25000 },
  { id: 'automation', name: 'Advanced Automation Package', price: 45000 },
  { id: 'redundancy', name: 'Redundant Systems', price: 75000 },
  { id: 'heat_recovery', name: 'Heat Recovery System', price: 35000 },
  { id: 'remote_control', name: 'Remote Control & Diagnostics', price: 20000 },
  { id: 'training', name: 'Operator Training Program', price: 15000 },
];

export function SystemConfigurator() {
  const [selectedSystem, setSelectedSystem] = useState('biogas');
  const [capacity, setCapacity] = useState('medium');
  const [installationType, setInstallationType] = useState('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [environment, setEnvironment] = useState('standard');

  const calculateTotalPrice = () => {
    const system = systemTypes[selectedSystem as keyof typeof systemTypes];
    const capacityMultiplier = capacityOptions.find(c => c.value === capacity)?.multiplier || 1;
    const installationMultiplier = installationType === 'custom' ? 1.3 : 1.0;
    const environmentMultiplier = environment === 'harsh' ? 1.2 : 1.0;
    
    const basePrice = system.basePrice * capacityMultiplier * installationMultiplier * environmentMultiplier;
    const featuresPrice = selectedFeatures.reduce((total, featureId) => {
      const feature = optionalFeatures.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
    
    return basePrice + featuresPrice;
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const currentSystem = systemTypes[selectedSystem as keyof typeof systemTypes];
  const Icon = currentSystem.icon;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* System Type Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                System Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedSystem} onValueChange={setSelectedSystem}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(systemTypes).map(([key, system]) => {
                    const SystemIcon = system.icon;
                    return (
                      <label key={key} className="cursor-pointer">
                        <div className={`border rounded-lg p-4 transition-all ${selectedSystem === key ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value={key} id={key} />
                            <SystemIcon className="w-5 h-5 text-gray-600" />
                            <span className="font-medium">{system.name}</span>
                          </div>
                          <p className="text-sm text-gray-600 ml-6">{system.description}</p>
                          <div className="ml-6 mt-2">
                            <Badge variant="secondary">
                              From ${system.basePrice.toLocaleString()}
                            </Badge>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Capacity Selection */}
          <Card>
            <CardHeader>
              <CardTitle>System Capacity</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={capacity} onValueChange={setCapacity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {capacityOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Installation Type */}
          <Card>
            <CardHeader>
              <CardTitle>Installation Type</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={installationType} onValueChange={setInstallationType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard Installation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="custom" />
                  <Label htmlFor="custom">Custom Installation (+30%)</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Environment */}
          <Card>
            <CardHeader>
              <CardTitle>Operating Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={environment} onValueChange={setEnvironment}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="env-standard" />
                  <Label htmlFor="env-standard">Standard Environment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="harsh" id="harsh" />
                  <Label htmlFor="harsh">Harsh Environment (+20%)</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Optional Features */}
          <Card>
            <CardHeader>
              <CardTitle>Optional Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {optionalFeatures.map(feature => (
                  <div key={feature.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={feature.id}
                        checked={selectedFeatures.includes(feature.id)}
                        onCheckedChange={() => handleFeatureToggle(feature.id)}
                      />
                      <Label htmlFor={feature.id} className="font-medium">
                        {feature.name}
                      </Label>
                    </div>
                    <Badge variant="outline">
                      +${feature.price.toLocaleString()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Panel */}
        <div className="space-y-6">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-green-600" />
                Configuration Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Selected System</h4>
                <p className="text-sm text-gray-600">{currentSystem.name}</p>
                <p className="text-xs text-gray-500 mt-1">{currentSystem.description}</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Included Features</h4>
                <ul className="space-y-1">
                  {currentSystem.features.map(feature => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedFeatures.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Optional Features</h4>
                    <ul className="space-y-1">
                      {selectedFeatures.map(featureId => {
                        const feature = optionalFeatures.find(f => f.id === featureId);
                        return (
                          <li key={featureId} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{feature?.name}</span>
                            <span className="text-gray-900 font-medium">
                              +${feature?.price.toLocaleString()}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}

              <Separator />

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Total Investment</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  ${calculateTotalPrice().toLocaleString()}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Includes installation and commissioning
                </p>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Request Detailed Quote
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>

              <div className="text-xs text-gray-500 text-center">
                * Prices are estimates. Final pricing may vary based on specific requirements and site conditions.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}