import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { servicesData } from "@/data/services";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  Wrench,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-28 lg:pb-16 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group select-none">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 opacity-60" />
                  <Wrench className="w-6 h-6 text-cyan-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-2">
                  <span className="font-black text-2xl tracking-tight leading-none bg-gradient-to-l from-cyan-300 via-white to-white bg-clip-text text-transparent">
                    فَنّي الطائف
                  </span>
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-400/30">
                    معتمد
                  </span>
                </div>
                <span className="text-xs font-semibold text-cyan-400/90 mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  للسباكة والصيانة المنزلية
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              {companyConfig.tagline}. نصل إليك في أسرع وقت بأحدث أجهزة كشف الأعطال وأفضل الفنيين المعتمدين لضمان سلامة منزلك.
            </p>

            <div className="flex items-center gap-2 mt-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>فنيون معتمدون وضمان كتابي على كافة الإصلاحات</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-xs text-slate-600">◀</span>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-xs text-slate-600">◀</span>
                  كافة خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-xs text-slate-600">◀</span>
                  عن الشركة وخبراتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-xs text-slate-600">◀</span>
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link
                  href="/#request-service"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 font-bold"
                >
                  <span className="text-xs text-cyan-500">◀</span>
                  طلب خدمة فورية
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              خدمات السباكة
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 line-clamp-1"
                  >
                    <span className="text-xs text-slate-600">◀</span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-xs mt-1 inline-block"
                >
                  عرض جميع الخدمات ←
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-white font-bold text-base mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              الاتصال والدعم
            </h3>

            {/* Direct Phone */}
            <a
              href={createPhoneUrl()}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 transition-colors text-white group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400">اتصال هاتفي مباشر</span>
                <span className="text-sm font-bold text-cyan-300" dir="ltr">
                  {companyConfig.displayPhone}
                </span>
              </div>
            </a>

            {/* Direct WhatsApp */}
            <a
              href={createWhatsAppUrl("مرحبًا، أود التواصل مع فَنّي الطائف")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 transition-colors text-white group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400">تواصل عبر واتساب</span>
                <span className="text-sm font-bold text-emerald-400" dir="ltr">
                  {companyConfig.displayWhatsapp}
                </span>
              </div>
            </a>

            {/* Location & Hours */}
            <div className="flex items-start gap-2.5 text-xs text-slate-400 mt-1">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{companyConfig.address}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p>{companyConfig.workingHours.regular}</p>
                <p className="text-red-400 font-semibold mt-0.5">
                  {companyConfig.workingHours.emergency}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 سباك الطائف | فَنّي الطائف للسباكة والصيانة المنزلية. جميع الحقوق محفوظة.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Developer Credit Badge */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>تصميم وتطوير:</span>
              <a
                href="https://radyahmed.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="موقع المطور راضي أحمد"
                className="inline-flex items-center gap-1 font-bold text-cyan-400 hover:text-cyan-300 transition-all px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 shadow-sm"
              >
                <span>راضي أحمد</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Maps Link */}
            <a
              href={companyConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <span>خرائط Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
