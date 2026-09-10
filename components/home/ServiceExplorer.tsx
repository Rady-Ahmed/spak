"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import { companyConfig } from "@/data/company";
import { createWhatsAppUrl, createPhoneUrl } from "@/lib/whatsapp";
import {
  Wrench,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  Activity,
  Gauge,
  Layers,
} from "lucide-react";

export const ServiceExplorer: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[0]);

  // Dynamic schematic visual renderer for the active service
  const renderSchematic = (serviceId: string) => {
    switch (serviceId) {
      case "water-leak":
        return (
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between text-cyan-300 font-bold border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cyan-400" />
                مخطط الكشف الصوتي والحراري
              </span>
              <span className="text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-300">
                تردد 45 KHz
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>مجس الاستشعار الجداري:</span>
              <span className="text-emerald-400 font-semibold">محدد بدقة ±1 ملم</span>
            </div>
            <div className="flex items-center justify-between">
              <span>حالة تدفق المياه:</span>
              <span className="text-blue-400 font-semibold">ضغط مستقر 4.5 بار</span>
            </div>
            <div className="flex items-center justify-between">
              <span>التدخل المطلوب:</span>
              <span className="text-amber-400 font-semibold">لحام موضعي بدون تكسير كامل</span>
            </div>
          </div>
        );
      case "drain-blockage":
        return (
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-blue-500/30 text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between text-blue-300 font-bold border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-blue-400" />
                منظومة التسليك الهيدروليكي
              </span>
              <span className="text-[10px] bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">
                سوستة 25 متر
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>قوة دوران رأس التفتيت:</span>
              <span className="text-emerald-400 font-semibold">1400 دورة/دقيقة</span>
            </div>
            <div className="flex items-center justify-between">
              <span>تفتيت الكتل الدهنية:</span>
              <span className="text-emerald-400 font-semibold">إزالة تامة 100%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>مرحلة الغسيل بالضغط:</span>
              <span className="text-cyan-400 font-semibold">تدفق مائي تطهيري كامل</span>
            </div>
          </div>
        );
      case "water-heater":
        return (
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-amber-500/30 text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between text-amber-300 font-bold border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-amber-400" />
                فحص دائرة الأمان الحراري
              </span>
              <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">
                صمام أمان مزدوج
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>كفاءة صمام التنفيس:</span>
              <span className="text-emerald-400 font-semibold">معاير على 8 بار</span>
            </div>
            <div className="flex items-center justify-between">
              <span>سربنتينة التسخين:</span>
              <span className="text-cyan-400 font-semibold">خالية من التكلس بعد الغسيل</span>
            </div>
            <div className="flex items-center justify-between">
              <span>فحص الغاز / الكهرباء:</span>
              <span className="text-emerald-400 font-semibold">آمن ومعزول تماماً</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-700/60 text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between text-cyan-300 font-bold border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                المعايير الهندسية المتبعة
              </span>
              <span className="text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-300">
                كود السباكة العالمي
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>جودة التثبيت والعزل:</span>
              <span className="text-emerald-400 font-semibold">بميزان ليزر رقمي</span>
            </div>
            <div className="flex items-center justify-between">
              <span>الخامات المعتمدة:</span>
              <span className="text-cyan-400 font-semibold">أصلية 100% ومقاومة للأملاح</span>
            </div>
            <div className="flex items-center justify-between">
              <span>شهادة الفحص:</span>
              <span className="text-emerald-400 font-semibold">ضمان مكتوب وموثق</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مستكشف الحلول التفاعلي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            استكشف كيف ننفذ كل خدمة بأعلى مقاييس الهندسة
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            مرر أو اضغط على أي خدمة للاطلاع على الأعطال الشائعة، خطة العمل الدقيقة، وضمانات التنفيذ.
          </p>
        </div>

        {/* Interactive Explorer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Service Selector Tabs (List) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {servicesData.map((svc) => {
              const isActive = activeService.id === svc.id;

              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveService(svc)}
                  onMouseEnter={() => setActiveService(svc)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-right transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-cyan-400/50 shadow-lg shadow-blue-600/20"
                      : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-white animate-ping" : "bg-slate-600"
                      }`}
                    />
                    <div>
                      <span className="font-bold text-sm block">{svc.title}</span>
                      <span
                        className={`text-[11px] ${
                          isActive ? "text-cyan-100" : "text-slate-400"
                        }`}
                      >
                        {svc.problemSelectorMatch}
                      </span>
                    </div>
                  </div>

                  <ChevronLeft
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "text-white -translate-x-1" : "text-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Visual Workspace */}
          <div className="lg:col-span-8">
            <div className="h-full p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300">
              {/* Subtle visual ambient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header of Active Service */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-cyan-400">
                      نظرة تفصيلية على الخدمة:
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      {activeService.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-cyan-300 border border-blue-400/30">
                      {activeService.heroBadge}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-6">
                  {activeService.fullDescription}
                </p>

                {/* Interactive Schematic Visual Blueprint */}
                <div className="mt-6 mb-6">
                  {renderSchematic(activeService.id)}
                </div>

                {/* Common Problems Checklist */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>أبرز المشكلات التي نعالجها في هذه الخدمة:</span>
                  </h4>
                  <div className="space-y-2.5">
                    {activeService.commonProblems.map((cp, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                      >
                        <span className="font-semibold text-white">
                          • {cp.problem}
                        </span>
                        <span className="text-slate-400 text-xs">
                          {cp.diagnosticTip}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Summary */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>الحلول والضمانات الفنية:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.solutions.map((sol, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="pt-8 mt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{activeService.warranty}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all active:scale-95"
                  >
                    <span>تفاصيل الخدمة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>

                  <a
                    href={createPhoneUrl()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold border border-slate-700 shadow-md transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>اتصال:</span>
                    <span className="font-mono text-cyan-300 text-xs" dir="ltr">{companyConfig.displayPhone}</span>
                  </a>

                  <a
                    href={createWhatsAppUrl(
                      `مرحبًا، أود طلب فني لخدمة (${activeService.title})`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>واتساب</span>
                    <span className="font-mono text-xs opacity-90" dir="ltr">{companyConfig.displayWhatsapp}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
