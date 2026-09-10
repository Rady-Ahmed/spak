"use client";

import React from "react";
import { companyConfig } from "@/data/company";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Award, Users, ShieldAlert, Calendar } from "lucide-react";

export const TrustMetrics: React.FC = () => {
  const metricIcons = [
    <Award key="1" className="w-6 h-6 text-cyan-400" />,
    <Users key="2" className="w-6 h-6 text-blue-400" />,
    <ShieldAlert key="3" className="w-6 h-6 text-red-400" />,
    <Calendar key="4" className="w-6 h-6 text-amber-400" />,
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-y border-slate-800/80 relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {companyConfig.trustMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-4 border border-slate-700/60 shadow-inner">
                {metricIcons[idx] || <Award className="w-6 h-6 text-cyan-400" />}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-baseline justify-center">
                <AnimatedCounter
                  target={metric.numericValue}
                  suffix={metric.suffix}
                  duration={2000}
                />
              </div>

              <div className="font-bold text-sm sm:text-base text-cyan-300 mt-2">
                {metric.label}
              </div>

              <p className="text-xs text-slate-400 mt-1 leading-normal max-w-[180px]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
