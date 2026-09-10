"use client";

import React from "react";
import Link from "next/link";
import { Wrench, Droplets } from "lucide-react";

interface BrandLogoProps {
  /** يُصغَّر اللوجو في بعض السياقات كالـ MobileMenu */
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  onClick,
  className = "",
}) => {
  const sizes = {
    sm: {
      wrap: "w-9 h-9",
      wrench: "w-4 h-4",
      name: "text-base",
      sub: "text-[10px]",
      dot: "w-1 h-1",
      badge: "text-[9px] px-1.5 py-0.5",
    },
    md: {
      wrap: "w-11 h-11 sm:w-12 sm:h-12",
      wrench: "w-5 h-5 sm:w-6 sm:h-6",
      name: "text-xl sm:text-2xl",
      sub: "text-[11px] sm:text-xs",
      dot: "w-1.5 h-1.5",
      badge: "text-[10px] px-2 py-0.5",
    },
    lg: {
      wrap: "w-14 h-14",
      wrench: "w-7 h-7",
      name: "text-2xl",
      sub: "text-xs",
      dot: "w-2 h-2",
      badge: "text-[11px] px-2.5 py-0.5",
    },
  };

  const s = sizes[size];

  const inner = (
    <span
      className={`flex items-center gap-3 group focus:outline-none select-none ${className}`}
      onClick={onClick}
    >
      {/* Logo Emblem — مفتاح + قطرة ماء */}
      <span
        className={`relative ${s.wrap} rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/25 group-hover:shadow-cyan-500/35 group-hover:scale-105 transition-all duration-300 shrink-0`}
        aria-hidden="true"
      >
        <span className="w-full h-full rounded-[14px] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
          {/* تأثير الضوء الداخلي */}
          <span className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 opacity-60 group-hover:opacity-100 transition-opacity" />
          {/* مفتاح السباكة */}
          <Wrench
            className={`${s.wrench} text-cyan-300 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]`}
          />
          {/* قطرة ماء صغيرة في الزاوية */}
          <Droplets className="absolute bottom-0.5 left-0.5 w-2.5 h-2.5 text-cyan-400/80 z-10" />
          {/* مؤشر الحالة النشطة */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-slate-950 shadow-sm animate-pulse z-20" />
        </span>
      </span>

      {/* Wordmark — الاسم والوصف */}
      <span className="flex flex-col justify-center text-right">
        {/* السطر الأول: الاسم + شارة معتمد */}
        <span className="flex items-center gap-2 leading-none">
          <span
            className={`font-black ${s.name} tracking-tight bg-gradient-to-l from-cyan-300 via-white to-white bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-white transition-colors drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]`}
          >
            فَنّي الطائف
          </span>
          <span
            className={`${s.badge} uppercase font-extrabold tracking-wider rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-sm shrink-0`}
          >
            معتمد
          </span>
        </span>

        {/* السطر الثاني: الشعار الفرعي */}
        <span
          className={`${s.sub} font-semibold text-slate-300 group-hover:text-cyan-300/90 transition-colors tracking-wide mt-1 flex items-center gap-1.5`}
        >
          <span
            className={`${s.dot} rounded-full bg-cyan-400 shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]`}
          />
          للسباكة والصيانة المنزلية
        </span>
      </span>
    </span>
  );

  // إذا لم يكن هناك onClick يعني الاستخدام داخل رابط خارجي
  if (onClick) return inner;

  return (
    <Link href="/" aria-label="فَنّي الطائف — للسباكة والصيانة المنزلية">
      {inner}
    </Link>
  );
};
