import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Award,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "عن الشركة وخبراتنا",
  description:
    "تعرف على سباك برو: فريق فني معتمد بخبرة تزيد عن 10 سنوات في صيانة وتأسيس شبكات السباكة الحديثة وحلول كشف التسربات دون تكسير.",
};

export default function AboutPage() {
  const companyValues = [
    {
      icon: ShieldCheck,
      title: "الثقة والأمانة الميدانية",
      description:
        "نضع مصلحة العميل أولاً ونقدم الفحص والتشخيص الفعلي دون تضخيم الأعطال أو إضافة قطع غيار غير لازمة.",
    },
    {
      icon: Clock,
      title: "الالتزام التام بالمواعيد",
      description:
        "نحترم جدول وقتك بدقة متناهية، ونوفر جاهزية طوارئ 24/7 للتعامل مع المفاجآت والأعطال الحرجة في وقت قياسي.",
    },
    {
      icon: Award,
      title: "جودة التنفيذ الهندسية",
      description:
        "نطبق أحدث تقنيات اللحام الحراري والعزل المعتمد واختبارات الضغط الهيدروليكي لضمان دوام الإصلاح لعقود.",
    },
    {
      icon: Target,
      title: "سرعة الاستجابة والحل الجذري",
      description:
        "لا نلجأ إلى المسكنات المؤقتة، بل نعالج جذر المشكلة من مصدرها بأحدث أجهزة الاستشعار لمنع تكرارها.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-950 text-white min-h-screen" dir="rtl">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>هويتنا وقيمنا المهنية</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          نبذة عن سباك برو لخدمات السباكة المتكاملة
        </h1>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          تأسسنا بهدف الارتقاء بمستوى خدمات السباكة والصيانة المنزلية في مصر من خلال أطقم عمل محترفة، أدوات فحص دقيقة، وتسعير معلن بضمان مكتوب.
        </p>
      </div>

      {/* Story & Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Story */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              قصتنا ورؤيتنا لتطوير قطاع الصيانة المنزلية
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              بدأت سباك برو بعد ملاحظة المعاناة الشائعة لأصحاب المنازل والشركات من السباكة التقليدية: تكسير عشوائي للسيراميك، مواعيد غير منضبطة، وانعدام الضمان بعد انتهاء الإصلاح.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              لذلك، وضعنا نموذج عمل متطور يعتمد على الفنيين المعتمدين والمعدات التكنولوجية الحديثة (كشف التسربات بالألتراسونيك، كاميرات الفحص الحراري، وسوست التسليك الكهربائية الأمريكية). واليوم نفخر بثقة مئات العملاء في مختلف الأحياء.
            </p>

            {/* Guarantees Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>فحص رقمي متقدم بدون تكسير</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ضمان مكتوب ومعتمد على الإصلاح</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>قطع غيار ومواسير أصلية معتمدة</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>استجابة طوارئ على مدار الساعة</span>
              </div>
            </div>
          </div>

          {/* Visual Technical Badge */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 mb-6">
                <Wrench className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                فريق فني معتمد وخبرات متراكمة
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                كل فني في فريقنا يجتاز اختبارات نظرية وعملية دقيقة في التعامل مع الدوائر المضغوطة، صناديق الطرد المدفونة، وأنظمة الغاز والكهرباء لضمان أعلى مستويات الأمان.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">تغطية الخدمة</span>
                <span className="text-cyan-300 font-bold">القاهرة الكبرى والجيزة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Metrics Section */}
      <TrustMetrics />

      {/* Core Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            القيم والمبادئ التي نلتزم بها أمام كل عميل
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            معايير صارمة نطبقها في كل زيارة ميدانية للحفاظ على راحة بالك وسلامة ممتلكاتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {companyValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-cyan-950/60 border border-blue-500/30 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            هل تحتاج إلى فحص أو صيانة سباكة لمنزلك اليوم؟
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            فريقنا جاهز على مدار الساعة للرد المباشر والتنقل إلى عنوانك فوراً بأحدث المعدات.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#request-service"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all active:scale-95"
            >
              <span>طلب خدمة الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <a
              href={createPhoneUrl()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span dir="ltr">{companyConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
