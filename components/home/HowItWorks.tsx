"use client";

import React, { useState } from "react";
import { MessageSquare, ClipboardCheck, Truck, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "تواصل معنا فوراً",
      description:
        "اتصل مباشرة أو أرسل رسالة عبر WhatsApp أو املأ النموذج السريع لطلب الفني في ثوانٍ معدودة.",
      icon: MessageSquare,
      color: "from-blue-600 to-cyan-500",
    },
    {
      number: "02",
      title: "حدد المشكلة والموقع",
      description:
        "شاركنا وصف العطل، وصورة إن أمكن، وموقعك الجغرافي لتحديد الأدوات وقطع الغيار المناسبة فوراً.",
      icon: ClipboardCheck,
      color: "from-cyan-500 to-teal-500",
    },
    {
      number: "03",
      title: "يصل إليك الفني المعتمد",
      description:
        "يصل فني مجهز بالكامل خلال وقت قياسي ومعه أحدث أجهزة الفحص الميدانية بدون أي تكسير عشوائي.",
      icon: Truck,
      color: "from-emerald-500 to-green-600",
    },
    {
      number: "04",
      title: "يتم الإصلاح وتقديم الضمان",
      description:
        "تنفيذ فوري وعالي الجودة، اختبار ضغط المياه، تنظيف المكان، وتسليمك فاتورة وشهادة ضمان معتمدة.",
      icon: CheckCircle2,
      color: "from-indigo-600 to-blue-600",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-3">
            <span>سهولة وسرعة الإجراءات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            كيف نعمل؟ 4 خطوات بسيطة لإنهاء أي مشكلة
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            من أول مكالمة حتى إنهاء الإصلاح واختبار ضغط المياه، نضمن لك تجربة احترافية وسلسة تخلصك من عناء السباكة.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal / Grid Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative p-6 sm:p-8 rounded-3xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-cyan-400/50 shadow-2xl shadow-cyan-500/10 scale-[1.02]"
                    : "bg-slate-950/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-3xl font-black text-slate-700 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Active indicator dot */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-cyan-400 animate-ping" : "bg-slate-600"
                    }`}
                  />
                  <span className="text-[11px] text-slate-400 font-semibold">
                    {isSelected ? "الخطوة النشطة" : "خطوة المعالجة"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
