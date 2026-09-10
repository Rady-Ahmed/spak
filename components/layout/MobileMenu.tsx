"use client";

import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  X,
  Phone,
  MessageCircle,
  Home,
  Wrench,
  Info,
  Send,
  Clock,
  ShieldCheck,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activePath = "/",
}) => {
  if (!isOpen) return null;

  const navLinks = [
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "خدماتنا", href: "/services", icon: Wrench },
    { label: "عن الشركة", href: "/about", icon: Info },
    { label: "تواصل معنا", href: "/contact", icon: Send },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-slate-950/95 backdrop-blur-2xl text-white transition-all duration-300">
      {/* Header bar with close button and theme toggle */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Wrench className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white">
              سباك برو
            </span>
            <span className="text-[10px] text-cyan-400 font-medium">
              خدمات سباكة معتمدة
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle className="w-11 h-11" />
          <button
            onClick={onClose}
            aria-label="إغلاق القائمة"
            className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center gap-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          التنقل السريع
        </span>
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activePath === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-200 text-lg font-bold ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-800 text-cyan-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span>{link.label}</span>
              </div>
              <span className="text-xs opacity-60">←</span>
            </Link>
          );
        })}

        {/* Emergency Alert Banner */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-red-950/60 to-slate-900 border border-red-500/30 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-red-400">حالة طوارئ؟</p>
            <p className="text-slate-300 mt-0.5">فريق الطوارئ يصلك خلال 30 دقيقة</p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 border-t border-slate-800/80 bg-slate-950/80 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={createPhoneUrl()}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <div className="flex flex-col items-center leading-tight">
              <span>اتصل الآن</span>
              <span className="text-[10px] font-mono opacity-85" dir="ltr">{companyConfig.displayPhone}</span>
            </div>
          </a>

          <a
            href={createWhatsAppUrl("مرحبًا، أحتاج فني سباكة من فضلك")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <div className="flex flex-col items-center leading-tight">
              <span>واتساب</span>
              <span className="text-[10px] font-mono opacity-85" dir="ltr">{companyConfig.displayWhatsapp}</span>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-1">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>{companyConfig.workingHours.emergency}</span>
        </div>
      </div>
    </div>
  );
};
