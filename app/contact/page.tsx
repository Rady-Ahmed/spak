import React from "react";
import type { Metadata } from "next";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { ServiceRequest } from "@/components/forms/ServiceRequest";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "تواصل معنا | رقم سباك الطائف 0502123049 - حجز فني واستشارة فورية",
  description:
    "تواصل مباشرة مع فَنّي الطائف لخدمات السباكة والصيانة المنزلية عبر الهاتف 0502123049 أو واتساب لحجز موعد فوري. خدمة طوارئ 24 ساعة في جميع أحياء الطائف وضواحيها.",
  alternates: {
    canonical: `${companyConfig.websiteUrl}/contact`,
  },
  openGraph: {
    title: "تواصل معنا | رقم سباك الطائف 0502123049 - فَنّي الطائف",
    description:
      "قنوات اتصال مباشرة واستجابة فورية 24/7 لكافة مشكلات وأعطال السباكة الطارئة في الطائف.",
    url: `${companyConfig.websiteUrl}/contact`,
    images: [
      {
        url: `${companyConfig.websiteUrl}/images/hero-plumbing-tech.jpg`,
        width: 1200,
        height: 630,
        alt: "تواصل مع سباك الطائف",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-950 text-white min-h-screen" dir="rtl">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>قنوات تواصل مباشرة وسريعة</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          تواصل معنا أو احجز فني سباكة الآن
        </h1>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          فريق خدمة العملاء والدعم الفني متواجد لاستقبال بلاغاتكم واستفساراتكم على مدار اليوم، مع خدمة طوارئ سريعة 24/7.
        </p>
      </div>

      {/* Main Container: Contact Channels & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <a
              href={createPhoneUrl()}
              className="flex items-start gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 shadow-xl transition-all hover:-translate-y-1 block group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block mb-1">
                  الاتصال الهاتفي المباشر
                </span>
                <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors" dir="ltr">
                  {companyConfig.displayPhone}
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  رد فوري من مسؤول الصيانة وتوجيه الفني الأقرب إليك.
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={createWhatsAppUrl("مرحبًا، أود طلب خدمة سباكة")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-[#25D366]/40 shadow-xl transition-all hover:-translate-y-1 block group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block mb-1">
                  المحادثة عبر WhatsApp
                </span>
                <span className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors" dir="ltr">
                  {companyConfig.displayWhatsapp}
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  إرسال صور العطل والموقع الجغرافي المباشر لتسريع الحضور.
                </p>
              </div>
            </a>

            {/* Working Hours Card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl text-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">مواعيد العمل</h3>
                  <span className="text-xs text-slate-400">طوال أيام الأسبوع</span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <p>• الزيارات الاعتيادية: {companyConfig.workingHours.regular}</p>
                <p className="text-red-400 font-bold">
                  • بلاغات الطوارئ: {companyConfig.workingHours.emergency}
                </p>
              </div>
            </div>

            {/* Location & Google Maps Card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl text-right">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">العنوان والتغطية</h3>
                  <span className="text-xs text-slate-400">{companyConfig.address}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                تغطي سياراتنا المتنقلة كافة أحياء الطائف: الحوية، الشهداء، الشفا، الهدا، السلامة، النزهة، والربوة.
              </p>
              <a
                href={companyConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
              >
                <span>فتح خريطة التغطية على Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ServiceRequest
              title="نموذج طلب الخدمة والتواصل"
              subtitle="املأ البيانات وسنقوم بتحويلك مباشرة إلى محادثة WhatsApp لتأكيد موعد الزيارة والتفاصيل."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
