"use client";

import React from "react";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink } from "lucide-react";

export const ServiceAreas: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/40 text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>نطاق التغطية الجغرافية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            نصل إليك في أسرع وقت في كافة هذه المناطق
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            سيارات صيانة متنقلة وفنيون موزعون استراتيجياً لتقليل وقت الانتظار وتلبية البلاغات العاجلة.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {companyConfig.serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {area}
                </h3>
                <span className="text-[11px] text-emerald-400 font-medium">
                  • تغطية فورية 24/7
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box with Google Maps link and Emergency Hotline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                هل منطقتك غير مدرجة بالقائمة أعلاه؟
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                تواصل معنا فوراً، وغالباً ما نوفر سيارات طوارئ متنقلة للمناطق المجاورة في أسرع وقت.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
            <a
              href={companyConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-all active:scale-95"
            >
              <span>فتح على Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={createPhoneUrl()}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل للتأكد</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
