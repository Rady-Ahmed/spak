"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal, CheckCircle2, AlertTriangle } from "lucide-react";

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    [containerRef]
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-slate-900/80 text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>نتائج حقيقية ودقة تنفيذ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            قارن بنفسك: قبل وبعد أعمال الصيانة
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            اسحب المقبض يميناً ويساراً لمشاهدة التحول الهندسي من تسريب وتآكل الشبكات القديمة إلى أعمال السباكة المعزولة والمحكمة.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-80 sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 select-none cursor-ew-resize"
          >
            {/* "AFTER" (الجانب الأيمن أو الخلفية الكاملة: بعد الإصلاح الاحترافي) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 flex flex-col justify-between p-6 sm:p-10">
              <div className="flex justify-between items-start">
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/90 text-slate-950 font-black text-xs sm:text-sm shadow-md">
                  بعد الإصلاح والتأسيس الاحترافي
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                  معزول 100% وبدون أي تسريب
                </span>
              </div>

              {/* After Graphic Representation: Clean, Modern Plumbing */}
              <div className="my-auto flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-cyan-500/25 mb-4">
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  شبكة بولي بروبلين ألمانية حرارية
                </h3>
                <p className="text-xs sm:text-sm text-cyan-200 mt-1 max-w-sm">
                  مواسير معزولة حرارياً ومثبتة بقوافيز ماصة للاهتزاز ومحابس دفن ذكية مع اختبار ضغط 12 بار.
                </p>
              </div>

              <div className="text-[11px] text-slate-400 text-left" dir="ltr">
                Quality Certified: SpakPro Inspection 100% Passed
              </div>
            </div>

            {/* "BEFORE" (مقتطع حسب موضع السلايدر: قبل الإصلاح) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-amber-950/90 via-stone-900 to-slate-950 border-r-2 border-white/80 shadow-2xl"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[400px] sm:w-[896px] p-6 sm:p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3.5 py-1.5 rounded-xl bg-red-600/90 text-white font-black text-xs sm:text-sm shadow-md">
                    قبل الصيانة (تسريب وصدأ)
                  </span>
                  <span className="text-xs text-amber-400 font-bold flex items-center gap-1.5 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/30">
                    <AlertTriangle className="w-4 h-4" />
                    تآكل ورطوبة بالجدران
                  </span>
                </div>

                {/* Before Graphic Representation */}
                <div className="my-auto flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-amber-900/60 border border-amber-700/80 flex items-center justify-center text-amber-400 shadow-xl mb-4">
                    <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-amber-200">
                    مواسير حديد قديمة متآكلة
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-sm">
                    تسريب خفي داخل الجدران، انخفاض ضغط المياه، وتراكم الأملاح والصدأ المضر بالصحة.
                  </p>
                </div>

                <div className="text-[11px] text-stone-500 text-left" dir="ltr">
                  State: High Risk / Active Water Leakage
                </div>
              </div>
            </div>

            {/* Drag Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-blue-600 font-bold hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Slider usage helper note */}
          <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1.5">
            <span>◄ اسحب المؤشر للمقارنة المباشرة بين الحالتين ►</span>
          </p>
        </div>
      </div>
    </section>
  );
};
