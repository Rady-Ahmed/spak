"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Wrench,
  Phone,
  MessageCircle,
  Menu,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "الخدمات", href: "/services" },
    { label: "من نحن", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none select-none"
              aria-label="فَنّي الطائف - للسباكة والصيانة المنزلية"
            >
              {/* Logo Emblem */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/25 group-hover:shadow-cyan-500/35 group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-[14px] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-slate-950 shadow-sm animate-pulse" />
                </div>
              </div>

              {/* Brand Wordmark */}
              <div className="flex flex-col justify-center text-right">
                <div className="flex items-center gap-2">
                  <span className="font-black text-xl sm:text-2xl tracking-tight leading-none bg-gradient-to-l from-cyan-300 via-white to-white bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-white transition-colors drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">
                    فَنّي الطائف
                  </span>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-sm">
                    معتمد
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-300 group-hover:text-cyan-300/90 transition-colors tracking-wide mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                  للسباكة والصيانة المنزلية
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-white bg-blue-600 shadow-md shadow-blue-600/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Mode Switcher */}
              <ThemeToggle />

              {/* WhatsApp Quick Action */}
              <a
                href={createWhatsAppUrl("مرحبًا، أود الاستفسار عن خدمات السباكة")}
                target="_blank"
                rel="noopener noreferrer"
                title="تحدث عبر واتساب"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-[#25D366]/20 border border-slate-800 hover:border-[#25D366]/40 text-slate-200 hover:text-[#25D366] text-xs font-bold transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>واتساب</span>
              </a>

              {/* Direct Phone Call */}
              <a
                href={createPhoneUrl()}
                title="اتصال هاتفي مباشر"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/40 text-slate-200 hover:text-cyan-300 text-xs font-bold transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span dir="ltr">{companyConfig.displayPhone}</span>
              </a>

              {/* Primary Conversion CTA */}
              <Link
                href="/#request-service"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blue-400/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>اطلب خدمة الآن</span>
              </Link>
            </div>

            {/* Mobile Actions: Phone icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle className="w-10 h-10" />

              <a
                href={createPhoneUrl()}
                className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30 active:scale-95 transition-transform"
                aria-label="اتصل هاتفياً"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppUrl("مرحبًا، أود طلب خدمة سباكة")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-emerald-600/30 active:scale-95 transition-transform"
                aria-label="تواصل عبر واتساب"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="فتح القائمة"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
};
