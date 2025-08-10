"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Play, Zap, Wind, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import content from "@/data/homepage-content.json";
import type { HomePageContent } from "@/types/content";

const typedContent = content as HomePageContent;

const iconMap = {
  ArrowRight,
  Play,
  Zap,
  Wind,
  Droplets,
};

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { heroSection } = typedContent;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!heroSection) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-white px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSection.backgroundElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} rounded-full ${element.color} animate-pulse-slow ${element.position}`}
            style={{ animationDelay: element.animationDelay }}
          ></div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {heroSection.floatingIcons.map((icon, index) => {
          const IconComponent = iconMap[icon.icon as keyof typeof iconMap];
          return (
            <IconComponent
              key={index}
              className={`absolute ${icon.position} ${icon.size} ${icon.color} animate-float hidden sm:block`}
              style={{ animationDelay: icon.animationDelay }}
            />
          );
        })}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div
                className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-100 text-green-800 text-xs sm:text-sm font-medium transition-all duration-1000 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                {heroSection.badge.text}
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {heroSection.title.main}{" "}
                <span className="gradient-eco bg-clip-text text-transparent">
                  {heroSection.title.highlight}
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {heroSection.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div
              className={`flex flex-row justify-center lg:justify-start gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-600 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {heroSection.keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20"
                >
                  <div
                    className={`text-xl sm:text-2xl font-bold ${benefit.color}`}
                  >
                    {benefit.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {benefit.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-1000 delay-800 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {heroSection.ctaButtons.map((button, index) => {
                const IconComponent =
                  iconMap[button.icon as keyof typeof iconMap];
                return (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    variant={
                      button.variant === "primary" ? "default" : "outline"
                    }
                    className={`w-full sm:w-auto ${button.className}`}
                  >
                    {button.href ? (
                      <Link
                        href={button.href}
                        className="flex items-center justify-center"
                      >
                        {button.text}
                        {IconComponent && (
                          <IconComponent
                            className={`${
                              button.variant === "primary" ? "ml-2" : "mr-2"
                            } w-4 h-4 sm:w-5 sm:h-5`}
                          />
                        )}
                      </Link>
                    ) : (
                      <button className="flex items-center justify-center">
                        {IconComponent && button.variant !== "primary" && (
                          <IconComponent className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                        {button.text}
                        {IconComponent && button.variant === "primary" && (
                          <IconComponent className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </button>
                    )}
                  </Button>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500 transition-all duration-1000 delay-1000 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {heroSection.trustIndicators.map((indicator, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 mr-1">
                      {indicator.value}
                    </span>
                    {indicator.label}
                  </div>
                  {index < heroSection.trustIndicators.length - 1 && (
                    <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 3D Model or Image */}
          <div
            className={`relative transition-all duration-1000 delay-400 order-first lg:order-last hidden lg:block ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-2xl sm:rounded-3xl backdrop-blur-sm"></div>

              <div className="relative z-10 space-y-4 sm:space-y-6 text-white">
                <div className="text-center font-semibold text-lg sm:text-xl">
                  {heroSection.solutions.title}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Product Categories */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {heroSection.solutions.categories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg p-3 sm:p-4"
                      >
                        <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                          {category.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/80">
                          {category.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    {heroSection.solutions.stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-lg sm:text-2xl font-bold">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-white/80">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 sm:space-y-2">
                    {heroSection.solutions.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-xs sm:text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
