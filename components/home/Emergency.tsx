"use client";

import React from "react";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  AlertTriangle,
  Phone,
  MessageCircle,
  Clock,
  ShieldAlert,
  Zap,
} from "lucide-react";

export const Emergency: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-red-950 via-slate-950 to-blue-950 border-y border-red-500/20 text-white overflow-hidden">
      {/* Subtle pulse and glow effect */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-red-500/30 shadow-2xl">
          {/* Emergency Text */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-6 text-right">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-xl shadow-red-600/40 shrink-0">
              <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-ping" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-400/30 mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>طوارئ 24/7 — وصول فوري</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                مشكلة سباكة طارئة؟ لا تنتظر تفاقم الأضرار
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
                كسور المواسير، انفجار محابس التغذية، تسريب المياه الخطير أو طفح الصرف؟ فريق التدخل السريع جاهز بكامل المعدات للوصول إلى باب منزلك فوراً.
              </p>
            </div>
          </div>

          {/* Emergency CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0 justify-end">
            <a
              href={createPhoneUrl(companyConfig.emergencyPhone)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-600/30 hover:shadow-red-600/50 active:scale-95 transition-all border border-red-400/40"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <div className="flex flex-col items-start">
                <span>اتصل بالطوارئ الآن</span>
                <span className="text-[11px] font-mono opacity-90" dir="ltr">{companyConfig.displayPhone}</span>
              </div>
            </a>

            <a
              href={createWhatsAppUrl(
                "🚨 حالة طوارئ سباكة حرجة! أحتاج فني سباكة بأسرع وقت ممكن"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp طوارئ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
