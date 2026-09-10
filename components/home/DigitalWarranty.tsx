"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
  QrCode,
  FileCheck,
  Wrench,
  Calendar,
  Lock,
} from "lucide-react";
import { companyConfig } from "@/data/company";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const DigitalWarranty: React.FC = () => {
  const [clientName, setClientName] = useState("أحمد محمد");
  const [serviceName, setServiceName] = useState("إصلاح وعزل تسريب مياه مخفي");
  const [serialCode] = useState("SPK-2026-WAR-9842");

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" dir="rtl">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ضمان معتمد وحقيقي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            معاينة شهادة الضمان الرقمية المعتمدة
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            لا نكتفي بالإصلاح الشفهي؛ كل عميل يستلم شهادة ضمان رسمية موثقة بكود تحقق إلكتروني يضمن حقه الكامل في الصيانة المجانية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
              <h3 className="font-bold text-base text-white mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-cyan-400" />
                <span>جرب تخصيص شهادة الضمان باسمك:</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    اسم العميل:
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value || "العميل الكريم")}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                    placeholder="اكتب اسمك للمعاينة"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    الخدمة المشمولة بالضمان:
                  </label>
                  <select
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                  >
                    <option value="إصلاح وعزل تسريب مياه مخفي">
                      إصلاح وعزل تسريب مياه مخفي
                    </option>
                    <option value="تأسيس وتمديد شبكة مواسير بولي بروبلين">
                      تأسيس وتمديد شبكة مواسير بولي بروبلين
                    </option>
                    <option value="تسليك الخطوط الرئيسية والصرف">
                      تسليك الخطوط الرئيسية والصرف
                    </option>
                    <option value="صيانة سخان وتغيير صمامات الأمان">
                      صيانة سخان وتغيير صمامات الأمان
                    </option>
                    <option value="تركيب شاسيه وصندوق طرد مدفون">
                      تركيب شاسيه وصندوق طرد مدفون
                    </option>
                  </select>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>زيارة فورية مجانية في حال ظهور أي خلل.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>استبدال قطع الغيار المعيبة دون أي رسوم.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>دعم فني واستشارة هاتفية مباشرة طوال فترة الضمان.</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={createWhatsAppUrl(
                    `مرحبًا، أرغب في حجز خدمة (${serviceName}) مع استلام شهادة الضمان المعتمدة باسم (${clientName})`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>حجز هذه الخدمة بالضمان عبر WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Realistic Digital Certificate Visual Card */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border-2 border-cyan-500/40 shadow-2xl overflow-hidden text-right">
              {/* Certificate Watermark Stamp */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-8 border-cyan-500/5 flex items-center justify-center pointer-events-none">
                <ShieldCheck className="w-48 h-48 text-cyan-500/5" />
              </div>

              {/* Certificate Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-white">
                      شهادة ضمان وجودة تنفيذ
                    </h4>
                    <span className="text-[11px] text-cyan-400 font-mono" dir="ltr">
                      CERTIFICATE OF PLUMBING WARRANTY
                    </span>
                  </div>
                </div>

                <div className="text-left" dir="ltr">
                  <span className="text-[10px] text-slate-400 block font-mono">
                    VERIFIED CODE
                  </span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {serialCode}
                  </span>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="py-8 space-y-5 relative z-10">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  تشهد إدارة الدعم الفني بشركة <strong className="text-white font-bold">{companyConfig.name}</strong> بأن الأعمال المنفذة للعميل الكريم:
                </p>

                {/* Client Name Display */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">
                    اسم العميل المعتمد:
                  </span>
                  <span className="text-base sm:text-lg font-black text-cyan-300">
                    {clientName}
                  </span>
                </div>

                {/* Service Details */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">
                    نوع الخدمة المشمولة:
                  </span>
                  <span className="text-sm font-bold text-white">
                    {serviceName}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                    <span className="text-slate-400 block mb-1">فترة الضمان:</span>
                    <span className="font-bold text-emerald-400">
                      ضمان شامل ومكتوب
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                    <span className="text-slate-400 block mb-1">حالة الاعتماد:</span>
                    <span className="font-bold text-cyan-300">
                      معتمد ومختوم رقمياً
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate Footer with Official Seal & QR */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400">
                    <QrCode className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <span className="block text-white font-bold">
                      رمز التحقق السريع QR
                    </span>
                    <span>مسح مباشر للتأكد من سريان الضمان</span>
                  </div>
                </div>

                {/* Golden Stamp Seal */}
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-400/60 bg-amber-500/10 flex flex-col items-center justify-center text-amber-300 text-center select-none shadow-lg shadow-amber-500/10 rotate-6">
                  <Lock className="w-4 h-4 mb-0.5" />
                  <span className="text-[9px] font-black uppercase">ختم معتمد</span>
                  <span className="text-[8px] opacity-80">SPAKPRO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
