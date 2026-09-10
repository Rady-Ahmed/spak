"use client";

import React, { useEffect, useState } from "react";
import { ShieldAlert, X } from "lucide-react";

export const CodeProtection: React.FC = () => {
  const [warningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    // 1. Authoritative Console Copyright Watermark
    try {
      console.clear();
      console.log(
        "%c⚠️ تحذير أمني وقانوني: حقوق الملكية الفكرية والبرمجية محفوظة 2026 ©",
        "color: #06b6d4; font-size: 18px; font-weight: 800; padding: 6px 0;"
      );
      console.log(
        "%cتم تصميم وهندسة وتطوير هذا الموقع بالكامل بواسطة المطور: راضي أحمد (Rady Ahmed)",
        "color: #3b82f6; font-size: 14px; font-weight: 600;"
      );
      console.log(
        "%c🌐 الموقع الرسمي للمطور: https://radyahmed.vercel.app/",
        "color: #10b981; font-size: 13px; text-decoration: underline;"
      );
      console.log(
        "%cيُحظر قانوناً نسخ أو استخراج أو إعادة استخدام أي جزء من الكود البرمجي أو الأصول الرقمية دون ترخيص مسبق.",
        "color: #ef4444; font-size: 12px; font-style: italic;"
      );
    } catch {
      // Ignore console restrictions
    }

    const showWarning = () => {
      setWarningVisible(true);
      const timer = setTimeout(() => {
        setWarningVisible(false);
      }, 3500);
      return () => clearTimeout(timer);
    };

    // 2. Disable Right Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right click only on standard text input/textarea if user is editing
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }
      e.preventDefault();
      showWarning();
    };

    // 3. Disable DevTools and Source Code Inspection Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        showWarning();
        return;
      }

      // Ctrl+Shift+I / Cmd+Option+I (Inspect)
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      // Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")
      ) {
        e.preventDefault();
        showWarning();
        return;
      }

      // Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        showWarning();
        return;
      }

      // Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        showWarning();
        return;
      }
    };

    // 4. Disable Image Dragging
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("dragstart", handleDragStart);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  if (!warningVisible) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-24 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-950/95 border border-red-500/50 text-white shadow-2xl shadow-red-950/50 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200"
      dir="rtl"
    >
      <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
        <ShieldAlert className="w-4 h-4" />
      </div>
      <div className="text-right">
        <p className="text-xs font-bold text-white">
          أكواد وتصميم هذا الموقع محمية بموجب حقوق الملكية الفكرية 2026 ©
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">
          مطور بواسطة:{" "}
          <a
            href="https://radyahmed.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-bold hover:underline"
          >
            راضي أحمد (Rady Ahmed)
          </a>
        </p>
      </div>
      <button
        onClick={() => setWarningVisible(false)}
        className="p-1 rounded-lg text-slate-400 hover:text-white mr-2"
        aria-label="إغلاق"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
