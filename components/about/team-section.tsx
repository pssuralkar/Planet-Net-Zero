"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';

const leadership = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Chief Executive Officer & Co-Founder',
    bio: 'Environmental engineer with 25+ years of experience in sustainable technology development. Former VP of Engineering at GreenTech Solutions.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    specialties: ['Strategic Leadership', 'Environmental Engineering', 'Technology Innovation'],
    education: 'PhD Environmental Engineering, MIT',
  },
  {
    name: 'Michael Chen',
    title: 'Chief Technology Officer',
    bio: 'Leading expert in emission control systems and biogas purification with 20+ years of R&D experience in environmental technologies.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    specialties: ['R&D Leadership', 'Process Engineering', 'System Design'],
    education: 'MS Chemical Engineering, Stanford',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Chief Operations Officer',
    bio: 'Operations expert with extensive experience in scaling technology companies and managing global deployments.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    specialties: ['Operations Management', 'Global Scaling', 'Process Optimization'],
    education: 'MBA Operations, Wharton',
  },
  {
    name: 'Dr. James Thompson',
    title: 'VP of Research & Development',
    bio: 'Research scientist specializing in catalysis and chemical processes for environmental applications with 100+ published papers.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    specialties: ['Research Leadership', 'Catalysis', 'Chemical Engineering'],
    education: 'PhD Chemistry, Caltech',
  },
];

export function TeamSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Meet Our Leadership Team
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our diverse team of experts brings together decades of experience in environmental technology, 
            engineering, and business leadership to drive innovation and deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((member, index) => (
            <Card 
              key={member.name}
              className={`group hover:shadow-xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-20 h-20 border-4 border-green-100 group-hover:border-green-200 transition-colors duration-200">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-3">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Education:</p>
                      <p className="text-sm font-medium text-gray-700">{member.education}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map(specialty => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-green-600 transition-colors duration-200">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">Advanced Degrees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">40+</div>
            <div className="text-sm text-gray-600">Nationalities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Avg Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}