"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  Droplets,
  AlertCircle,
  Flame,
  Wrench,
  Pipette,
  Bath,
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";

export const ProblemSelector: React.FC = () => {
  // Default selected: water-leak
  const [selectedService, setSelectedService] = useState<ServiceItem>(
    servicesData[0]
  );

  const problemIcons: Record<string, React.ReactNode> = {
    "تسريب مياه": <Droplets className="w-5 h-5" />,
    "انسداد صرف": <AlertCircle className="w-5 h-5" />,
    "مشكلة سخان": <Flame className="w-5 h-5" />,
    "تسريب حنفية": <Wrench className="w-5 h-5" />,
    "مشكلة مواسير": <Pipette className="w-5 h-5" />,
    "تركيب أدوات صحية": <Bath className="w-5 h-5" />,
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" dir="rtl">
      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>تشخيص فوري للأعطال</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ما المشكلة التي تواجهها الآن؟
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            حدد نوع العطل أو الخدمة المطلوبة لنعطيك التشخيص المباشر والحل المقترح مع إمكانية حجز فني فوري.
          </p>
        </div>

        {/* Diagnostic Grid: Options on Top or Side, Result Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column (Buttons) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {servicesData.map((svc) => {
              const isSelected = selectedService.id === svc.id;
              const icon = problemIcons[svc.problemSelectorMatch] || <Wrench className="w-5 h-5" />;

              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 text-right cursor-pointer border ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-cyan-400/50 shadow-xl shadow-blue-600/25 scale-[1.02]"
                      : "bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800/80 border-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-800 text-cyan-400"
                      }`}
                    >
                      {icon}
                    </div>
                    <div>
                      <span className="font-bold text-sm sm:text-base block">
                        {svc.problemSelectorMatch}
                      </span>
                      <span
                        className={`text-xs hidden sm:block ${
                          isSelected ? "text-cyan-100" : "text-slate-400"
                        }`}
                      >
                        {svc.title}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-bold ${
                      isSelected ? "text-white" : "text-slate-500"
                    }`}
                  >
                    ←
                  </span>
                </button>
              );
            })}
          </div>

          {/* Solution & Diagnostic Display Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300">
              {/* Card top badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center">
                    {problemIcons[selectedService.problemSelectorMatch]}
                  </div>
                  <div>
                    <span className="text-xs text-cyan-400 font-semibold">
                      الخدمة الموصى بها:
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {selectedService.heroBadge}
                  </span>
                </div>
              </div>

              {/* Diagnostic Question & Summary */}
              <div className="my-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  التشخيص المبدئي:
                </h4>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 leading-relaxed">
                  {selectedService.diagnosticQuestion}
                </div>
              </div>

              {/* Proposed Solution Steps */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  كيف نصلح المشكلة؟
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.solutions.slice(0, 4).map((solution, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta: Timing & Warranty */}
              <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>الوقت المقدر: {selectedService.estimatedTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{selectedService.warranty}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/services/${selectedService.slug}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  <span>تفاصيل الخدمة وحجز فني</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <a
                  href={createWhatsAppUrl(
                    `مرحبًا، لدي مشكلة في (${selectedService.problemSelectorMatch}) وأحتاج فني للمعاينة`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <div className="flex flex-col items-start leading-tight">
                    <span>طلب عبر WhatsApp</span>
                    <span className="text-[10px] font-mono opacity-90" dir="ltr">{companyConfig.displayWhatsapp}</span>
                  </div>
                </a>

                <a
                  href={createPhoneUrl()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold transition-all"
                  title="اتصال سريع"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <div className="flex flex-col items-start leading-tight">
                    <span>اتصال</span>
                    <span className="text-[10px] font-mono text-cyan-400" dir="ltr">{companyConfig.displayPhone}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
