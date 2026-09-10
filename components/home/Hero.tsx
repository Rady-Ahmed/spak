"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  Wrench,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Droplets,
  Flame,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a1628] to-slate-950 text-white">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(6,182,212,0.15),transparent_45%)] pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Right Column (Arabic RTL: Headline & CTAs) */}
          <div className="lg:col-span-7 flex flex-col text-right items-start">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>متاحون الآن — استجابة فورية لكافة المناطق</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] sm:leading-[1.18] text-white">
              حلول سباكة{" "}
              <span className="bg-gradient-to-l from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                احترافية وسريعة
              </span>{" "}
              تصل إليك عندما تحتاجها
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              {companyConfig.subTagline}
            </p>

            {/* Key Value Props Pill Row */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>ضمان معتمد</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>وصول خلال 30 دقيقة</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>فحص رقمي بدون تكسير</span>
              </div>
            </div>

            {/* CTA Buttons Group */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="#request-service"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blue-400/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>اطلب خدمة الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              {/* Secondary CTA: Phone */}
              <a
                href={createPhoneUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-300 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>اتصل بنا</span>
                <span className="text-xs text-slate-400 font-mono" dir="ltr">
                  {companyConfig.displayPhone}
                </span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={createWhatsAppUrl("مرحبًا، أحتاج فني سباكة من فضلك")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
                <span className="text-xs text-white/90 font-mono" dir="ltr">
                  {companyConfig.displayWhatsapp}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Plumber Photo with Overlay Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow backdrop */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 opacity-30 blur-2xl animate-pulse" />

              {/* Real Photo Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/70 shadow-2xl">
                {/* Actual plumber image */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/hero-plumbing-tech.jpg"
                    alt="فني سباكة محترف يستخدم أجهزة كشف التسريبات المتقدمة في الطائف"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Dark overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                </div>

                {/* Floating Status Badge — top right */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[11px] font-bold text-emerald-300">متاح الآن</span>
                </div>

                {/* Metric Pills — top left */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[11px] font-bold">
                    <Droplets className="w-3 h-3 text-cyan-400" />
                    <span className="text-white">4.8 BAR</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[11px] font-bold">
                    <Flame className="w-3 h-3 text-amber-400" />
                    <span className="text-white">99.4% دقة</span>
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/25 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-white block">فريق الطوارئ المتنقل</span>
                        <span className="text-slate-400">متواجد في محيط منطقتك الآن</span>
                      </div>
                    </div>
                    <a
                      href={createPhoneUrl()}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shrink-0"
                    >
                      طلب فوري
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
