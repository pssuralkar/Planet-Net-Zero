"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Applications',
    href: '/applications',
    children: [
      { name: 'Compressed Biogas (CBG) / RNG', href: '/applications/cbg-rng' },
      { name: 'Industrial Emissions Control', href: '/applications/industrial-emissions' },
      { name: 'Waste Management', href: '/applications/waste-management' },
    ],
  },
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Industrial Segment', href: '/products/industrial' },
      { name: 'Biogas Segment', href: '/products/biogas' },
    ],
  },
  { name: 'Contact Us', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200" 
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus-visible:rounded"
            aria-label="Planet Net Zero home"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Planet Net Zero
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200 focus-visible:rounded",
                        pathname.startsWith(item.href) && "text-green-600 font-medium"
                      )}
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200",
                              pathname === child.href && "bg-green-50 text-green-600 font-medium"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-700 hover:text-green-600 transition-colors duration-200 focus-visible:rounded",
                      pathname === item.href && "text-green-600 font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="text-gray-900 font-medium py-2 border-b border-gray-100">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200",
                              pathname === child.href && "text-green-600 font-medium"
                            )}
                            onClick={toggleMobile}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-gray-700 hover:text-green-600 transition-colors duration-200",
                        pathname === item.href && "text-green-600 font-medium"
                      )}
                      onClick={toggleMobile}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  asChild 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={toggleMobile}
                >
                  <Link href="/contact">Get Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}