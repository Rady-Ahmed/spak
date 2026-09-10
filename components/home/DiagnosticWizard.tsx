"use client";

import React, { useState } from "react";
import {
  Wrench,
  Droplets,
  Flame,
  AlertTriangle,
  Bath,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  MessageCircle,
  Phone,
  HelpCircle,
  MapPin,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { createWhatsAppUrl, createPhoneUrl } from "@/lib/whatsapp";

interface DiagnosticResult {
  title: string;
  problemSummary: string;
  urgency: "urgent" | "high" | "moderate";
  recommendedAction: string;
  estimatedFixTime: string;
  recommendedService: string;
  toolsNeeded: string[];
}

export const DiagnosticWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedSymptom, setSelectedSymptom] = useState<string>("");

  const locations = [
    {
      id: "bathroom",
      title: "الحمام",
      icon: Bath,
      desc: "تسريب، خلاطات، مرحاض، صرف أو بانيو",
    },
    {
      id: "kitchen",
      title: "المطبخ",
      icon: Droplets,
      desc: "حوض المطبخ، الصرف، فلتر أو خلاطات",
    },
    {
      id: "heater",
      title: "السخان والغاز",
      icon: Flame,
      desc: "سخان غاز أو كهرباء أو مياه ساخنة",
    },
    {
      id: "main-pipes",
      title: "الشبكة الرئيسية والسطح",
      icon: Wrench,
      desc: "مواسير التغذية، خزان المياه، أو المحابس الرئيسية",
    },
  ];

  const symptomsByLocation: Record<
    string,
    { id: string; title: string; hint: string }[]
  > = {
    bathroom: [
      {
        id: "wall-moisture",
        title: "رطوبة أو تساقط دهان على الجدران",
        hint: "علامة على تسريب خفي داخل المواسير المدفونة",
      },
      {
        id: "toilet-leak",
        title: "تنقيط أو تجمع مياه حول قاعدة المرحاض",
        hint: "تلف في الجلبة أو تسريب صندوق الطرد",
      },
      {
        id: "drain-clog",
        title: "طفح البالوعة الأرضية أو بطء شديد في الصرف",
        hint: "انسداد في الخط الفرعي أو الرئيسي",
      },
      {
        id: "faucet-drip",
        title: "تنقيط مستمر من الخلاط أو صعوبة إغلاقه",
        hint: "تآكل القلب السيراميكي الداخلي للخلاط",
      },
    ],
    kitchen: [
      {
        id: "sink-clog",
        title: "انسداد كامل وتجمع المياه بحوض المطبخ",
        hint: "تراكم الدهون والشحوم الصلبة في خرطوم الصرف",
      },
      {
        id: "under-sink-leak",
        title: "تسريب مياه أسفل الحوض والدولاب",
        hint: "تلف خراطيم التغذية المرنة أو مخرج الهراب",
      },
      {
        id: "low-pressure",
        title: "ضعف مفاجئ في تدفق وضغط المياه",
        hint: "انسداد فلاتر الخلاط أو تكلسات بالشبكة",
      },
    ],
    heater: [
      {
        id: "heater-no-hot",
        title: "السخان لا يعمل أو لا يسخن نهائياً",
        hint: "تلف الرداخ، ضعف ضغط الماء، أو عطل شمعة التسخين",
      },
      {
        id: "heater-leak",
        title: "تنقيط مياه من أسفل السخان أو التوصيلات",
        hint: "تلف جوان التسخين أو صمام الأمان الحراري",
      },
      {
        id: "heater-cuts-off",
        title: "السخان يشتعل ويفصل سريعاً بعد ثوانٍ",
        hint: "خلل في حساس الأمان أو تراكم أملاح بالسربنتينة",
      },
    ],
    "main-pipes": [
      {
        id: "pipe-burst",
        title: "كسر أو تدفق مياه شديد ومفاجئ",
        hint: "حالة طوارئ قصوى تتطلب إغلاق المحبس العمومي فوراً",
      },
      {
        id: "meter-running",
        title: "دوران عداد المياه مستمر مع إغلاق كافة الحنفيات",
        hint: "وجود تسريب نشط غير مرئي في شبكة التغذية",
      },
      {
        id: "valve-jammed",
        title: "المحبس الرئيسي معطل أو لا يغلق تماماً",
        hint: "تآكل أو صدأ قلب المحبس العمومي للمبنى",
      },
    ],
  };

  const calculateDiagnostic = (): DiagnosticResult => {
    if (selectedSymptom === "pipe-burst") {
      return {
        title: "حالة طوارئ قصوى: كسر في خط التغذية الرئيسي",
        problemSummary:
          "تدفق المياه بضغط قوي يؤدي لتلفيات سريعة في المنشأة. يلزم إغلاق المحبس العمومي فوراً وطلب فني طوارئ.",
        urgency: "urgent",
        recommendedAction:
          "أغلق المحبس الرئيسي للعقار حالياً، وفريق الطوارئ مجهز بماكينة لحام حراري سريعة للوصول فوراً.",
        estimatedFixTime: "30 - 45 دقيقة للوصول والإصلاح",
        recommendedService: "تركيب وإصلاح شبكات المواسير",
        toolsNeeded: ["ماكينة لحام بولي ألمانية", "قوافيز طوارئ", "مواسير ضغط عالي"],
      };
    }

    if (
      selectedSymptom === "wall-moisture" ||
      selectedSymptom === "meter-running"
    ) {
      return {
        title: "تسريب مياه خفي داخل الجدران أو تحت الأرضية",
        problemSummary:
          "يوجد ثقب أو شرخ في خطوط التغذية المضغوطة يتسبب في تغلغل الرطوبة وتلف الدهانات والخرسانة.",
        urgency: "high",
        recommendedAction:
          "فحص رقمي بالألتراسونيك والكاميرات الحرارية لتحديد موقع الثقب بالمليمتر بدون تكسير عشوائي.",
        estimatedFixTime: "45 - 60 دقيقة للفحص والإصلاح الموضعي",
        recommendedService: "إصلاح تسريب المياه بدون تكسير",
        toolsNeeded: ["جهاز كشف تسرب بالألتراسونيك", "كاميرا تصوير حراري FLIR", "لحام موضعي"],
      };
    }

    if (selectedSymptom === "sink-clog" || selectedSymptom === "drain-clog") {
      return {
        title: "انسداد صلب في خطوط الصرف والبالوعات",
        problemSummary:
          "تراكم دهون وشحوم صلبة أو عوالق في مسار التصريف تمنع سريان الماء وتسبب الروائح والطفح.",
        urgency: "high",
        recommendedAction:
          "تسليك ميكانيكي هيدروليكي بسوستة دوارة وتطهير الخط بضغط الماء العالي.",
        estimatedFixTime: "25 - 40 دقيقة",
        recommendedService: "تسليك انسداد الصرف",
        toolsNeeded: ["سوستة كهربائية هيدروليكية", "رؤوس تفتيت دهون", "مضخة غسيل وتطهير"],
      };
    }

    if (
      selectedSymptom === "heater-no-hot" ||
      selectedSymptom === "heater-leak" ||
      selectedSymptom === "heater-cuts-off"
    ) {
      return {
        title: "عطل في منظومة السخان أو صمام الأمان الحراري",
        problemSummary:
          "خلل في دورة التسخين أو تلف الرداخ وصمامات التنفيس يستدعي ضبط مستويات الأمان فوراً.",
        urgency: "high",
        recommendedAction:
          "فحص عزل الغاز/الكهرباء، استبدال الرداخ التالف بقطعة أصلية وغسيل السربنتينة لإزالة التكلس.",
        estimatedFixTime: "45 دقيقة",
        recommendedService: "صيانة وإصلاح السخانات",
        toolsNeeded: ["رداخ أصلي", "جهاز فحص تسريب الغاز", "صمام أمان حراري معتمد"],
      };
    }

    return {
      title: "صيانة أطقم وخلاطات السباكة وإحكام العزل",
      problemSummary:
        "تآكل في القلوب أو جلب منع التسريب يؤدي إلى الهدر المائي وتراكم الرطوبة حول الأحواض والمراحيض.",
      urgency: "moderate",
      recommendedAction:
        "استبدال القلوب التالفة بقطع سيراميكية أصلية وإعادة التقفيل بسيليكون ألماني مضاد للعفن.",
      estimatedFixTime: "30 دقيقة",
      recommendedService: "إصلاح الحنفيات وتركيب الأدوات الصحية",
      toolsNeeded: ["قلوب سيراميك أصلية", "سيليكون مضاد للبكتيريا", "مفاتيح ربط مبطنة"],
    };
  };

  const result = calculateDiagnostic();

  const resetWizard = () => {
    setCurrentStep(1);
    setSelectedLocation("");
    setSelectedSymptom("");
  };

  return (
    <section className="py-20 bg-slate-900/50 text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>المعالج التفاعلي الذكي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            شخّص مشكلتك في 3 خطوات بسيطة
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            أجب عن سؤالين سريعين ليقوم النظام بتشخيص العطل، تحديد مدى خطورته، وتجهيز الفني بالأدوات المطلوبة فوراً.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
          {[
            { step: 1, label: "الموقع" },
            { step: 2, label: "الملاحظة" },
            { step: 3, label: "التشخيص والحل" },
          ].map((s) => (
            <div key={s.step} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep === s.step
                    ? "bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/20 shadow-lg shadow-cyan-500/30"
                    : currentStep > s.step
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {currentStep > s.step ? "✓" : s.step}
              </div>
              <span
                className={`text-xs font-bold hidden sm:inline ${
                  currentStep >= s.step ? "text-white" : "text-slate-500"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step Container Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300">
          {/* STEP 1: Select Location */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-6 text-right flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                الخطوة 1: أين يقع العطل أو المشكلة؟
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locations.map((loc) => {
                  const Icon = loc.icon;
                  const isSelected = selectedLocation === loc.id;

                  return (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setSelectedLocation(loc.id);
                        setCurrentStep(2);
                      }}
                      className={`p-5 rounded-2xl border text-right transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? "bg-blue-600 border-cyan-400 text-white shadow-xl shadow-blue-600/30 scale-[1.02]"
                          : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-bold text-base text-white block mb-1">
                          {loc.title}
                        </span>
                        <span className="text-xs text-slate-400 leading-relaxed">
                          {loc.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Select Symptom */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  الخطوة 2: ماذا تلاحظ تحديداً؟
                </h3>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>تغيير المكان</span>
                </button>
              </div>

              <div className="space-y-3">
                {(symptomsByLocation[selectedLocation] || []).map((sym) => {
                  const isSelected = selectedSymptom === sym.id;

                  return (
                    <button
                      key={sym.id}
                      onClick={() => {
                        setSelectedSymptom(sym.id);
                        setCurrentStep(3);
                      }}
                      className={`w-full p-4 sm:p-5 rounded-2xl border text-right transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? "bg-blue-600 border-cyan-400 text-white shadow-lg"
                          : "bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <div>
                        <span className="font-bold text-sm sm:text-base text-white block mb-1">
                          • {sym.title}
                        </span>
                        <span className="text-xs text-slate-400">
                          {sym.hint}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-cyan-400 shrink-0">
                        اختيار ←
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Diagnostic Report & Instant Conversion */}
          {currentStep === 3 && (
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  تقرير التشخيص الفوري
                </span>
                <button
                  onClick={resetWizard}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>تشخيص مشكلة أخرى</span>
                </button>
              </div>

              {/* Urgency and Title */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold px-3 py-0.5 rounded-full ${
                      result.urgency === "urgent"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {result.urgency === "urgent"
                      ? "🚨 حالة طوارئ حرجة"
                      : "⚠️ عطل يتطلب فحص متخصص"}
                  </span>
                  <span className="text-xs text-slate-400">
                    الخدمة الموصى بها: {result.recommendedService}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {result.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {result.problemSummary}
                </p>
              </div>

              {/* Action Plan */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">خطة العمل المقترحة: </span>
                    <span>{result.recommendedAction}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>المدة المتوقعة: {result.estimatedFixTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ضمان كتابي معتمد</span>
                  </div>
                </div>
              </div>

              {/* Tools Preview */}
              <div className="mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  المعدات التي سيصطحبها الفني:
                </span>
                <div className="flex flex-wrap gap-2">
                  {result.toolsNeeded.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-950 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5"
                    >
                      <Wrench className="w-3 h-3 text-cyan-400" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={createWhatsAppUrl(
                    `مرحبًا، قمت بتشخيص مشكلتي عبر المعالج التفاعلي: (${result.title}) في (${selectedLocation}). أود حجز فني للمعاينة والإصلاح.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>إرسال هذا التشخيص وحجز فني عبر WhatsApp</span>
                </a>

                <a
                  href={createPhoneUrl()}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصل الآن</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
