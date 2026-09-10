import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  Wrench,
  Droplets,
  Pipette,
  Flame,
  AlertCircle,
  Bath,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات السباكة المتكاملة",
  description:
    "استكشف كافة خدمات السباكة المنزلية والتجارية: كشف تسريب المياه، صيانة السخانات، تسليك الصرف، وتركيب الأدوات الصحية بأعلى دقة وضمان معتمد.",
};

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Droplets":
        return <Droplets className="w-7 h-7" />;
      case "Pipette":
        return <Pipette className="w-7 h-7" />;
      case "Wrench":
        return <Wrench className="w-7 h-7" />;
      case "Flame":
        return <Flame className="w-7 h-7" />;
      case "AlertCircle":
        return <AlertCircle className="w-7 h-7" />;
      case "Bath":
        return <Bath className="w-7 h-7" />;
      default:
        return <Wrench className="w-7 h-7" />;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 text-white min-h-screen" dir="rtl">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>خدمات معتمدة بضمان كتابي</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          خدمات السباكة الاحترافية المتكاملة
        </h1>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          نقدم حلولاً هندسية دقيقة لكافة مشكلات السباكة السكنية والتجارية، من كشف التسربات إلى التركيبات الفاخرة، مع تواجد طوارئ 24 ساعة.
        </p>

        {/* Quick Contact Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={createPhoneUrl()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>اتصل الآن للاستشارة المجانية</span>
          </a>

          <a
            href={createWhatsAppUrl("مرحبًا، أود الاستفسار عن تفاصيل خدمات السباكة")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تحدث عبر WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Services Detailed Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getIcon(svc.iconName)}
                  </div>

                  {svc.emergencyAvailable && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                      طوارئ 24/7
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {svc.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {svc.shortDescription}
                </p>

                {/* Features preview */}
                <div className="space-y-2 mb-6">
                  {svc.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Time & Warranty */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800/80 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{svc.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ضمان شامل</span>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <Link
                  href={`/services/${svc.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <span>التفاصيل والحجز</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <a
                  href={createWhatsAppUrl(`مرحبًا، أود حجز خدمة (${svc.title})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md"
                  title="طلب سريع عبر واتساب"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
