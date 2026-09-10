"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/data/testimonials";
import { Star, Quote, ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-slate-900/60 text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>آراء وتقييمات حقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ماذا يقول عملاؤنا عن جودة وسرعة الخدمة؟
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            ثقة عملائنا هي رأس مالنا الحقيقي. نفخر بتقييمات ممتازة وتجارب صيانة ناجحة في كافة المناطق.
          </p>
        </div>

        {/* Testimonials Grid for Large Screens + Carousel Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-md">
                  {item.avatarPlaceholder}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{item.author}</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span className="text-cyan-400">{item.serviceType}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
