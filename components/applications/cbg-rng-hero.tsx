"use client";

import React, { JSX } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Recycle, TrendingUp } from "lucide-react";
import Link from "next/link";
import content from "@/data/applications-content.json";
import type { ApplicationsContent } from "@/types/content";

const typedContent = content as ApplicationsContent;

const iconMap = {
  ArrowRight,
  Zap,
  Recycle,
  TrendingUp,
};

export function CBGRNGHero(): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { cbgRngHero: heroContent } = typedContent;

  if (!heroContent) {
    return <></>;
  }

  return (
    <section
      ref={ref}
      className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50"
    >
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium transition-all duration-1000 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {React.createElement(
                iconMap[heroContent.badge.icon as keyof typeof iconMap],
                { className: "w-4 h-4 mr-2" }
              )}
              {heroContent.badge.text}
            </div>

            <h1
              className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {heroContent.title.main}{" "}
              <span className="gradient-eco bg-clip-text text-transparent">
                {heroContent.title.highlight}
              </span>
            </h1>

            <p
              className={`text-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {heroContent.description}
            </p>

            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 delay-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {heroContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {heroContent.buttons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={button.variant === "primary" ? "default" : "outline"}
                  className={
                    button.variant === "primary"
                      ? "bg-green-600 hover:bg-green-700"
                      : ""
                  }
                >
                  <Link
                    href={button.href}
                    className={button.icon ? "flex items-center" : ""}
                  >
                    {button.text}
                    {button.icon &&
                      React.createElement(
                        iconMap[button.icon as keyof typeof iconMap],
                        { className: "ml-2 w-5 h-5" }
                      )}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>

              <div className="relative z-10 space-y-6">
                <div className="text-center text-white font-semibold text-lg">
                  {heroContent.process.title}
                </div>

                <div className="space-y-4">
                  {heroContent.process.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 bg-white/20 rounded-full flex items-center justify-center ${
                            index === 1 ? "animate-pulse" : ""
                          }`}
                        >
                          {React.createElement(
                            iconMap[step.icon as keyof typeof iconMap],
                            { className: "w-5 h-5 text-white" }
                          )}
                        </div>
                        <span className="text-white font-medium">
                          {step.label}
                        </span>
                      </div>
                      <div className="text-white/80 text-sm">{step.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
