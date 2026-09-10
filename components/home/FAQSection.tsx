"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { companyConfig } from "@/data/company";
import { createWhatsAppUrl, createPhoneUrl } from "@/lib/whatsapp";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            كل ما تود معرفته عن خدمات السباكة لدينا
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            إجابات واضحة ومباشرة على أكثر الاستفسارات التي تصلنا من العملاء الكرام.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900 border border-slate-800/90 overflow-hidden transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-right cursor-pointer hover:bg-slate-800/40 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-300 shrink-0 mr-2 ${
                      isOpen ? "rotate-180 bg-blue-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="font-bold text-white text-sm">
              لديك سؤال آخر لم تجد إجابته هنا؟
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              فريق الدعم الفني جاهز للرد على استفسارك في أي وقت عبر الهاتف أو WhatsApp
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={createPhoneUrl()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>اتصال مباشر:</span>
              <span dir="ltr" className="font-mono text-cyan-200">{companyConfig.displayPhone}</span>
            </a>

            <a
              href={createWhatsAppUrl("مرحبًا، لدي استفسار بخصوص خدمات السباكة")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب:</span>
              <span dir="ltr" className="font-mono text-emerald-100">{companyConfig.displayWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
