"use client";

import React from "react";
import {
  Zap,
  Award,
  ShieldCheck,
  CheckCircle,
  Eye,
  FileText,
  BadgePercent,
  Sparkles,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const trustBlocks = [
    {
      icon: Zap,
      title: "سرعة الاستجابة والوصول",
      description:
        "نقدّر أهمية وقتك وحرج مشاكل المياه، لذا يتواجد فنيونا في قطاعات جغرافية متعددة للوصول إليك في أسرع وقت ممكن.",
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-400",
    },
    {
      icon: Award,
      title: "خبرة واحترافية فنية",
      description:
        "فريقنا ليس مجرد عمالة عادية، بل فنيون مدربون على أحدث المعايير الهندسية وأنظمة العزل واختبارات الضغط بالبار.",
      color: "from-blue-600 to-cyan-500",
      accent: "text-cyan-400",
    },
    {
      icon: ShieldCheck,
      title: "خدمة موثوقة بضمان معتمد",
      description:
        "نمنحك شهادة ضمان مكتوبة على كافة الإصلاحات وقطع الغيار المركبة، مع التزام كامل بخدمة ما بعد الإصلاح.",
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400",
    },
    {
      icon: CheckCircle,
      title: "حلول عملية بدون تكسير عشوائي",
      description:
        "نعتمد على التكنولوجيا والأجهزة الصوتية والحرارية لتحديد مكان العطل بدقة متناهية للحفاظ على سلامة وتشطيب منزلك.",
      color: "from-indigo-600 to-blue-500",
      accent: "text-indigo-400",
    },
    {
      icon: Eye,
      title: "اهتمام بأدق التفاصيل",
      description:
        "نهتم بنظافة موقع العمل بعد الانتهاء، استخدام عوازل سيليكونية مضادة للعفن، واستواء الخلاطات والأدوات بميزان الليزر.",
      color: "from-purple-600 to-pink-500",
      accent: "text-pink-400",
    },
    {
      icon: FileText,
      title: "وضوح وشفافية في التعامل",
      description:
        "لا توجد تكاليف خفية أو مفاجآت؛ نوضح لك تفاصيل العطل وتكلفة الإصلاح وقطع الغيار المطلوبة مسبقاً وبكل شفافية.",
      color: "from-sky-500 to-blue-600",
      accent: "text-sky-400",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" dir="rtl">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معايير الاحترافية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            لماذا يختارنا مئات العملاء لخدمات السباكة؟
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            نجمع بين الخبرة العملية العميقة وأحدث التقنيات لتقديم تجربة صيانة مريحة وموثوقة خالية من المتاعب.
          </p>
        </div>

        {/* 6 Trust Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trustBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${block.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {block.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {block.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
