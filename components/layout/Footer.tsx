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
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  سباك برو
                </span>
                <span className="text-xs text-cyan-400">
                  حلول سباكة احترافية معتمدة
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
              href={createWhatsAppUrl("مرحبًا، أود التواصل مع سباك برو")}
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

        {/* Bottom Bar: Copyright & Map Link */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {companyConfig.name}. جميع الحقوق محفوظة.</p>

          <a
            href={companyConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <span>عرض موقعنا على خرائط Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
