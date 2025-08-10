"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingDown, Leaf, Droplets, Zap } from 'lucide-react';

// Mock data for environmental impact
const emissionData = [
  { month: 'Jan', baseline: 1000, current: 150, target: 100 },
  { month: 'Feb', baseline: 1050, current: 140, target: 100 },
  { month: 'Mar', baseline: 1100, current: 130, target: 100 },
  { month: 'Apr', baseline: 1000, current: 120, target: 100 },
  { month: 'May', baseline: 1200, current: 110, target: 100 },
  { month: 'Jun', baseline: 1150, current: 105, target: 100 },
];

const energyData = [
  { category: 'Electricity', saved: 2500, unit: 'MWh' },
  { category: 'Natural Gas', saved: 1800, unit: 'MCF' },
  { category: 'Steam', saved: 3200, unit: 'tonnes' },
  { category: 'Cooling', saved: 1500, unit: 'MWh' },
];

const pollutantData = [
  { name: 'CO₂', value: 45, color: '#10B981' },
  { name: 'SO₂', value: 25, color: '#3B82F6' },
  { name: 'NOₓ', value: 20, color: '#8B5CF6' },
  { name: 'Other', value: 10, color: '#F59E0B' },
];

export function ImpactTracker() {
  const [activeMetric, setActiveMetric] = useState('emissions');
  const [realTimeData, setRealTimeData] = useState({
    co2Reduced: 850,
    energySaved: 2340,
    waterSaved: 1250,
    efficiency: 94,
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        co2Reduced: prev.co2Reduced + Math.random() * 5,
        energySaved: prev.energySaved + Math.random() * 10,
        waterSaved: prev.waterSaved + Math.random() * 3,
        efficiency: Math.min(98, prev.efficiency + (Math.random() - 0.5) * 2),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Live
              </Badge>
            </div>
            <div className="text-2xl font-bold text-green-900">
              {Math.round(realTimeData.co2Reduced)}
            </div>
            <div className="text-sm text-green-700">tons CO₂ reduced</div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Live
              </Badge>
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {Math.round(realTimeData.energySaved)}
            </div>
            <div className="text-sm text-blue-700">MWh energy saved</div>
          </CardContent>
        </Card>

        <Card className="bg-cyan-50 border-cyan-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Droplets className="w-5 h-5 text-cyan-600" />
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
                Live
              </Badge>
            </div>
            <div className="text-2xl font-bold text-cyan-900">
              {Math.round(realTimeData.waterSaved)}
            </div>
            <div className="text-sm text-cyan-700">m³ water saved</div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingDown className="w-5 h-5 text-purple-600" />
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                Live
              </Badge>
            </div>
            <div className="text-2xl font-bold text-purple-900">
              {Math.round(realTimeData.efficiency)}%
            </div>
            <div className="text-sm text-purple-700">system efficiency</div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Selection */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveMetric('emissions')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeMetric === 'emissions'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Emissions Trend
        </button>
        <button
          onClick={() => setActiveMetric('energy')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeMetric === 'energy'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Energy Savings
        </button>
        <button
          onClick={() => setActiveMetric('pollutants')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeMetric === 'pollutants'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Pollutant Reduction
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeMetric === 'emissions' && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emission Reduction Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={emissionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="baseline"
                      stroke="#9CA3AF"
                      strokeDasharray="5 5"
                      name="Baseline"
                    />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#10B981"
                      strokeWidth={3}
                      name="Current"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#3B82F6"
                      strokeDasharray="3 3"
                      name="Target"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monthly Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Current Month Reduction</span>
                  <span className="text-lg font-bold text-green-600">89.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Target Achievement</span>
                  <span className="text-lg font-bold text-blue-600">105%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">Yearly Progress</span>
                  <span className="text-lg font-bold text-purple-600">78%</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeMetric === 'energy' && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Energy Savings by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="saved" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Monthly Savings</span>
                  <span className="text-lg font-bold text-green-600">$45,200</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Annual Projection</span>
                  <span className="text-lg font-bold text-blue-600">$542,400</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">ROI Timeline</span>
                  <span className="text-lg font-bold text-purple-600">16 months</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeMetric === 'pollutants' && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pollutant Reduction Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pollutantData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pollutantData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Air Quality Index Improvement</span>
                  <span className="text-lg font-bold text-green-600">+42%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Regulatory Compliance</span>
                  <span className="text-lg font-bold text-blue-600">100%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">Carbon Credits Earned</span>
                  <span className="text-lg font-bold text-purple-600">1,250</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}