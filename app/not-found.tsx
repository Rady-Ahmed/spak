import React from "react";
import Link from "next/link";
import { Wrench, Home, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
      dir="rtl"
    >
      <div className="max-w-md w-full text-center p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="w-20 h-20 rounded-3xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-10 h-10 animate-bounce" />
        </div>

        <span className="text-4xl font-black text-cyan-400 block mb-2 font-mono">
          404
        </span>

        <h1 className="text-2xl font-black text-white mb-3">
          عفواً، هذه الصفحة غير موجودة
        </h1>

        <p className="text-slate-300 text-sm leading-relaxed mb-8">
          ربما تم نقل الصفحة أو أن الرابط غير صحيح. لا تقلق، كافة خدماتنا وفريق الصيانة متواجد دائماً لمساعدتك.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>

          <a
            href={createPhoneUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <div className="flex flex-col items-start leading-tight">
              <span>اتصل بنا</span>
              <span className="text-[10px] font-mono text-cyan-400" dir="ltr">{companyConfig.displayPhone}</span>
            </div>
          </a>

          <a
            href={createWhatsAppUrl("مرحبًا، أود الاستفسار من فريق فَنّي الطائف")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <div className="flex flex-col items-start leading-tight">
              <span>واتساب</span>
              <span className="text-[10px] font-mono opacity-90" dir="ltr">{companyConfig.displayWhatsapp}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
