"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  Wrench,
  Phone,
  MessageCircle,
  CalendarClock,
  X,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const FloatingHelp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-20 lg:bottom-8 left-4 sm:left-6 z-40 flex flex-col items-start select-none"
      dir="rtl"
    >
      {/* Popover Action Panel */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl p-4 text-white animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold text-sm text-white">
                فريق السباكة في خدمتك
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white"
              aria-label="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-400 my-2.5 leading-relaxed">
            جاهزون للرد الفوري على استفساراتك وحل أعطال السباكة الطارئة والتركيبات.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            {/* Call */}
            <a
              href={createPhoneUrl()}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
            >
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span>اتصل الآن مباشرة</span>
                <span className="text-[10px] opacity-80" dir="ltr">
                  {companyConfig.displayPhone}
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={createWhatsAppUrl("مرحبًا، محتاج سباك ضروري")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20 active:scale-[0.98]"
            >
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span>محادثة WhatsApp سريعة</span>
                <span className="text-[10px] opacity-80">رد خلال دقيقة</span>
              </div>
            </a>

            {/* Service Request Link */}
            <Link
              href="/#request-service"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-cyan-300 hover:text-cyan-200 text-xs font-bold transition-all active:scale-[0.98]"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <CalendarClock className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span>حجز موعد عبر النموذج</span>
                <span className="text-[10px] text-slate-400">تحديد المشكلة والموعد</span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="محتاج سباك؟ اضغط لفتح خيارات التواصل"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
          <Wrench className="w-3.5 h-3.5 text-white" />
        </div>

        <span>محتاج سباك؟</span>
      </button>
    </div>
  );
};
