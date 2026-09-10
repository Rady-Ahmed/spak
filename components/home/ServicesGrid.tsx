"use client";

import React from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import {
  Droplets,
  Pipette,
  Wrench,
  Flame,
  AlertCircle,
  Bath,
  ArrowLeft,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const getIcon = (name: ServiceItem["iconName"]) => {
    switch (name) {
      case "Droplets":
        return <Droplets className="w-6 h-6" />;
      case "Pipette":
        return <Pipette className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      case "Flame":
        return <Flame className="w-6 h-6" />;
      case "AlertCircle":
        return <AlertCircle className="w-6 h-6" />;
      case "Bath":
        return <Bath className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="services-grid" className="py-20 bg-slate-900/60 text-white relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <span>خدمات متكاملة ومعتمدة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            حلول السباكة الاحترافية لكافة الاحتياجات
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات المتخصصة بأحدث المعدات الألمانية والأمريكية ومعايير أمان قياسية لراحتك التامة.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      {getIcon(service.iconName)}
                    </div>

                    {service.emergencyAvailable && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                        طوارئ 24/7
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Feature bullet preview */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{service.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{service.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom: View Details Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm font-bold text-cyan-400 group-hover:text-cyan-300">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 w-full justify-between focus:outline-none"
                  >
                    <span>تفاصيل الخدمة وحجز فني</span>
                    <span className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 group-hover:-translate-x-1">
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
