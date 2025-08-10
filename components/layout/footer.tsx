import React from 'react';
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-width section-padding">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Planet Net Zero</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading the way in environmental technology solutions for a sustainable future. 
                Committed to reducing emissions and creating cleaner industrial processes.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/applications" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Applications
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/products/industrial" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Sulphur Removal Systems
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products/biogas" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Biogas Purification
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/applications/industrial-emissions" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Flue Gas Desulfurization
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products/industrial" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Chemical Scrubbers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm">info@planetnetzero.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    123 Green Technology Blvd<br />
                    Sustainable City, SC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Planet Net Zero. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}