"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Users, Award, Calendar } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our experts',
    primary: '+1 (555) 123-4567',
    secondary: 'Mon-Fri: 8AM-6PM EST',
    action: 'tel:+15551234567',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get detailed technical information',
    primary: 'info@planetnetzero.com',
    secondary: 'Response within 24 hours',
    action: 'mailto:info@planetnetzero.com',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    description: 'Schedule an in-person consultation',
    primary: '123 Green Technology Blvd',
    secondary: 'Sustainable City, SC 12345',
    action: 'https://maps.google.com',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const departments = [
  {
    name: 'Sales & Consulting',
    email: 'sales@planetnetzero.com',
    phone: '+1 (555) 123-4567',
    description: 'New projects and consultations',
  },
  {
    name: 'Technical Support',
    email: 'support@planetnetzero.com',
    phone: '+1 (555) 123-4568',
    description: 'Existing system support',
  },
  {
    name: 'Engineering',
    email: 'engineering@planetnetzero.com',
    phone: '+1 (555) 123-4569',
    description: 'Technical specifications',
  },
  {
    name: 'Customer Success',
    email: 'success@planetnetzero.com',
    phone: '+1 (555) 123-4570',
    description: 'Account management',
  },
];

export function ContactInfo() {
  return (
    <div className="container-width section-padding">
      <div className="space-y-8">
        {/* Contact Methods */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        <p className="font-medium text-gray-900">{method.primary}</p>
                        <p className="text-sm text-gray-500">{method.secondary}</p>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="hover:bg-green-50 hover:border-green-200"
                      >
                        <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined}>
                          Contact
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
          <div className="space-y-3">
            {departments.map((dept, index) => (
              <Card key={dept.name} className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{dept.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                      <div className="flex space-x-4 text-sm">
                        <a href={`mailto:${dept.email}`} className="text-green-600 hover:underline">
                          {dept.email}
                        </a>
                        <a href={`tel:${dept.phone}`} className="text-blue-600 hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
          <CardHeader>
            <CardTitle>Why Choose Planet Net Zero?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Expert Engineers</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <h3 className="font-bold text-red-800 mb-2">Emergency Technical Support</h3>
            <p className="text-red-700 text-sm mb-3">
              For urgent technical issues with existing systems
            </p>
            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="destructive"
                size="sm"
              >
                <a href="tel:+15551234567">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Line
                </a>
              </Button>
              <span className="text-sm text-red-600">Available 24/7</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}