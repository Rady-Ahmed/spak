"use client";

import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { Phone, MessageCircle, CalendarPlus } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl shadow-black"
      dir="rtl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call CTA */}
        <a
          href={createPhoneUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] shadow-sm shadow-blue-600/30 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>اتصل الآن</span>
          <span className="text-[9px] font-mono opacity-85" dir="ltr">{companyConfig.displayPhone}</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={createWhatsAppUrl("مرحبًا، أود طلب سباك")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] shadow-sm shadow-emerald-600/30 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>واتساب</span>
          <span className="text-[9px] font-mono opacity-85" dir="ltr">{companyConfig.displayWhatsapp}</span>
        </a>

        {/* Service Request Form Jump */}
        <Link
          href="/#request-service"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-[11px] border border-cyan-500/30 active:scale-95 transition-all"
        >
          <CalendarPlus className="w-4 h-4 mb-0.5" />
          <span>اطلب خدمة</span>
        </Link>
      </div>
    </div>
  );
};
