"use client";

import React, { useState } from "react";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  Calculator,
  Home,
  Building,
  Building2,
  Trees,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

interface PropertyType {
  id: string;
  name: string;
  icon: React.ElementType;
  multiplier: number;
}

interface ServiceOption {
  id: string;
  name: string;
  baseMin: number;
  baseMax: number;
  timeEstimate: string;
}

const propertyTypes: PropertyType[] = [
  { id: "apt", name: "شقة سكنية", icon: Home, multiplier: 1.0 },
  { id: "villa", name: "فيلا مستقلة", icon: Building, multiplier: 1.25 },
  { id: "building", name: "عمارة كاملة", icon: Building2, multiplier: 1.5 },
  { id: "resort", name: "استراحة / شاليه", icon: Trees, multiplier: 1.15 },
];

const serviceOptions: ServiceOption[] = [
  {
    id: "leak",
    name: "كشف تسربات المياه إلكترونياً",
    baseMin: 150,
    baseMax: 250,
    timeEstimate: "30 - 45 دقيقة",
  },
  {
    id: "drain",
    name: "تسليك مجاري بالضغط والنيتروجين",
    baseMin: 120,
    baseMax: 220,
    timeEstimate: "40 - 60 دقيقة",
  },
  {
    id: "heater",
    name: "تركيب أو صيانة سخان مياه",
    baseMin: 100,
    baseMax: 180,
    timeEstimate: "30 - 50 دقيقة",
  },
  {
    id: "pump",
    name: "صيانة أو تركيب مضخة مياه (دينمو)",
    baseMin: 130,
    baseMax: 230,
    timeEstimate: "45 - 60 دقيقة",
  },
  {
    id: "renovate",
    name: "تأسيس أو تشطيب حمام / مطبخ",
    baseMin: 350,
    baseMax: 700,
    timeEstimate: "معاينة هندسية",
  },
];

export const CostEstimator: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<string>("apt");
  const [selectedService, setSelectedService] = useState<string>("leak");
  const [isEmergency, setIsEmergency] = useState<boolean>(false);

  const activeProp = propertyTypes.find((p) => p.id === selectedProperty) || propertyTypes[0];
  const activeSvc = serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];

  const emergencyMultiplier = isEmergency ? 1.2 : 1.0;
  const estimatedMin = Math.round(activeSvc.baseMin * activeProp.multiplier * emergencyMultiplier);
  const estimatedMax = Math.round(activeSvc.baseMax * activeProp.multiplier * emergencyMultiplier);

  const whatsappMessage = `مرحبًا، قمت بحساب تكلفة تقديرية عبر حاسبة الأسعار بالموقع:
- نوع العقار: ${activeProp.name}
- نوع الخدمة: ${activeSvc.name}
- الأولوية: ${isEmergency ? "طوارئ مستعجلة الآن 🚨" : "موعد اعتيادي 📅"}
- التقدير المبدئي: ${estimatedMin} - ${estimatedMax} ريال
أود تأكيد موعد زيارة الفني في الطائف.`;

  return (
    <section className="py-20 bg-slate-900/50 text-white relative overflow-hidden" dir="rtl">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>تسعير واضح وشفاف 100%</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            حاسبة التكلفة التقديرية الذكية لأعمال السباكة
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            احسب التكلفة التقريبية لصيانة أو تركيب السباكة في الطائف خلال ثوانٍ، واحجز فنيك المعتمد فوراً بدون وسيط.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: Property Type */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  1. نوع العقار:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {propertyTypes.map((prop) => {
                    const Icon = prop.icon;
                    const isSelected = selectedProperty === prop.id;
                    return (
                      <button
                        key={prop.id}
                        type="button"
                        onClick={() => setSelectedProperty(prop.id)}
                        className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/20"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                        <span className="text-xs font-bold">{prop.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Service Type */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  2. نوع الخدمة أو المشكلة:
                </label>
                <div className="space-y-2">
                  {serviceOptions.map((svc) => {
                    const isSelected = selectedService === svc.id;
                    return (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setSelectedService(svc.id)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-600/20 border-blue-500 text-white shadow-sm"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                              isSelected ? "border-cyan-400 bg-cyan-400" : "border-slate-600"
                            }`}
                          />
                          <span className="text-xs sm:text-sm font-bold text-white">
                            {svc.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {svc.timeEstimate}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Emergency Checkbox */}
              <div className="pt-2 border-t border-slate-800/80">
                <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 cursor-pointer hover:border-amber-500/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={isEmergency}
                    onChange={(e) => setIsEmergency(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900"
                  />
                  <div className="flex-1">
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      طلب طوارئ فوري (حضور عاجل خلال 30 دقيقة)
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      أولوية قصوى لسيارات الطوارئ المتنقلة في أحياء الطائف.
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Result Card Column (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-blue-950/70 via-slate-900 to-slate-950 border border-blue-500/40 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-xs text-cyan-300 font-bold uppercase tracking-wider">
                  التقدير الفوري المبدئي
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                  شامل الفحص والضمان
                </span>
              </div>

              <div className="text-center py-4">
                <span className="text-xs text-slate-400 block mb-1">
                  نطاق التكلفة المتوقعة:
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-center justify-center gap-2">
                  <span className="text-cyan-400 font-mono">{estimatedMin}</span>
                  <span className="text-slate-500 text-2xl font-light">-</span>
                  <span className="text-cyan-400 font-mono">{estimatedMax}</span>
                  <span className="text-lg text-slate-300 font-bold">ريال</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  * التكلفة النهائية الدقيقة تحدد بعد المعاينة الميدانية بدون أي رسوم خفية.
                </p>
              </div>

              {/* Perks List */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80 my-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>فحص رقمي حراري بدون تكسير عشوائي</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>شهادة ضمان رسمي معتمد على العمل وقطع الغيار</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>وصول خلال 30 - 45 دقيقة في أحياء الطائف</span>
                </div>
              </div>
            </div>

            {/* Direct Conversion Actions */}
            <div className="space-y-2.5 pt-4">
              <a
                href={createWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>حجز بالسعر التقديري عبر WhatsApp</span>
                <span className="text-[11px] font-mono opacity-90" dir="ltr">
                  {companyConfig.displayWhatsapp}
                </span>
              </a>

              <a
                href={createPhoneUrl()}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>اتصال فوري ومباشر:</span>
                <span className="font-mono text-cyan-300 text-xs" dir="ltr">
                  {companyConfig.displayPhone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
