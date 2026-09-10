"use client";

import React, { useState } from "react";
import {
  BookOpen,
  AlertTriangle,
  Clock,
  ChevronLeft,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  Share2,
  X,
  Flame,
  Droplet,
  Sparkles,
  Search,
} from "lucide-react";
import { guidesData, GuideItem } from "@/data/guides";
import { companyConfig } from "@/data/company";
import { createWhatsAppUrl, createPhoneUrl } from "@/lib/whatsapp";

export const PlumbingGuides: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("الكل");
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["الكل", "طوارئ", "تشخيص منزلي", "صيانة", "وقاية"];

  const filteredGuides =
    activeCategory === "الكل"
      ? guidesData
      : guidesData.filter((g) => g.category === activeCategory);

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case "طوارئ":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      case "تشخيص منزلي":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "صيانة":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "وقاية":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
    }
  };

  const handleShare = (guide: GuideItem) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}#guides - ${guide.title}`);
      setCopiedId(guide.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="guides" className="py-20 bg-slate-900 text-white relative overflow-hidden" dir="rtl">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>موسوعة فَنّي الطائف التثقيفية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            أدلة وإرشادات السباكة والطوارئ المنزلية
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            تعلم كيف تحمي بيتك وتتصرف في الدقائق الأولى من حوادث السباكة، وكيف تتجنب الأعطال المكلفة بأبسط الخطوات الوقائية.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 border-slate-700/60 hover:border-slate-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Guides Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="group bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/70 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <div>
                {/* Meta Top: Category & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryBadgeClass(
                      guide.category
                    )}`}
                  >
                    {guide.category === "طوارئ" && <AlertTriangle className="w-3 h-3" />}
                    {guide.category === "صيانة" && <Flame className="w-3 h-3" />}
                    {guide.category === "وقاية" && <ShieldCheck className="w-3 h-3" />}
                    {guide.category === "تشخيص منزلي" && <Sparkles className="w-3 h-3" />}
                    <span>{guide.category}</span>
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>قراءة في {guide.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-3">
                  {guide.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {guide.summary}
                </p>

                {/* Quick Step Preview Pill */}
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-xs text-slate-300 flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">
                    <strong className="text-white ml-1">الخطوة الأولى:</strong>
                    {guide.steps[0]?.title}
                  </span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <button
                  onClick={() => setSelectedGuide(guide)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>قراءة الدليل كاملاً ({guide.steps.length} خطوات)</span>
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                </button>

                <button
                  onClick={() => handleShare(guide)}
                  title="نسخ رابط الدليل"
                  className="p-2 rounded-lg bg-slate-700/40 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  {copiedId === guide.id ? (
                    <span className="text-xs text-emerald-400 font-bold px-1">تم النسخ!</span>
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Dialog for Full Guide */}
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              dir="rtl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedGuide(null)}
                className="absolute top-4 left-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="إغلاق النافذة"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryBadgeClass(
                    selectedGuide.category
                  )}`}
                >
                  <span>{selectedGuide.category}</span>
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  قراءة في {selectedGuide.readTime}
                </span>
              </div>

              {/* Modal Title */}
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                {selectedGuide.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 pb-4 border-b border-slate-800">
                {selectedGuide.summary}
              </p>

              {/* Steps List */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
                  خطوات التنفيذ الموصى بها:
                </h4>
                {selectedGuide.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/70 border border-slate-750 flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/40">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1">{step.title}</h5>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expert Tip Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed mb-6 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block mb-0.5">نصيحة خبير فَنّي الطائف:</strong>
                  {selectedGuide.expertTip}
                </div>
              </div>

              {/* Call to action inside modal */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-right">
                  <span className="text-xs text-slate-400 block">هل المشكلة مستمرة أو تفوق قدرتك؟</span>
                  <span className="text-sm font-bold text-white">فريقنا جاهز للمساعدة الفورية في أي وقت</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={createWhatsAppUrl({
                      service: selectedGuide.title,
                      problem: `أحتاج مساعدة فنية بخصوص: ${selectedGuide.title}`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <div className="flex flex-col items-start leading-tight">
                      <span>واتساب الفوري</span>
                      <span className="text-[9px] font-mono opacity-90" dir="ltr">{companyConfig.displayWhatsapp}</span>
                    </div>
                  </a>
                  <a
                    href={createPhoneUrl()}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <div className="flex flex-col items-start leading-tight">
                      <span>اتصال</span>
                      <span className="text-[9px] font-mono opacity-90" dir="ltr">{companyConfig.displayPhone}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
