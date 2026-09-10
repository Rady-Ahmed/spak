import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, getServiceBySlug } from "@/data/services";
import { companyConfig } from "@/data/company";
import { createPhoneUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { ServiceRequest } from "@/components/forms/ServiceRequest";
import {
  Wrench,
  Droplets,
  Pipette,
  Flame,
  AlertCircle,
  Bath,
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Phone,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  return {
    title: `${service.title} | ${companyConfig.name}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${companyConfig.name}`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-slate-950 text-white min-h-screen" dir="rtl">
      {/* Breadcrumb & Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">
            الخدمات
          </Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">{service.title}</span>
        </nav>

        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-800">
          <div className="lg:col-span-8 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-cyan-300 border border-blue-400/30 mb-4">
              <span>{service.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>

            {/* Timing & Guarantee Pill row */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>الوقت المقدر: {service.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{service.warranty}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Box */}
          <div className="lg:col-span-4 flex flex-col gap-3 p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <h3 className="font-bold text-sm text-white mb-1">
              طلب فوري ومباشر لهذه الخدمة:
            </h3>

            <a
              href={createPhoneUrl()}
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <div className="flex flex-col items-start leading-tight">
                <span>اتصال هاتفي مباشر</span>
                <span className="text-[10px] font-mono opacity-90" dir="ltr">{companyConfig.displayPhone}</span>
              </div>
            </a>

            <a
              href={createWhatsAppUrl(
                `مرحبًا، أود طلب فني لخدمة (${service.title}) فوراً`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <div className="flex flex-col items-start leading-tight">
                <span>طلب عبر WhatsApp</span>
                <span className="text-[10px] font-mono opacity-90" dir="ltr">{companyConfig.displayWhatsapp}</span>
              </div>
            </a>

            <Link
              href="#service-booking-form"
              className="text-center text-xs text-cyan-400 hover:text-cyan-300 underline font-semibold mt-1"
            >
              أو حجز موعد عبر النموذج بالأسفل ↓
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Sections: Common Problems & Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left / Main Column */}
          <div className="lg:col-span-7 space-y-12">
            {/* Common Problems */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>الأعطال والمشكلات الشائعة وكيفية التعرف عليها</span>
              </h2>
              <div className="space-y-4">
                {service.commonProblems.map((cp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-right"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-sm sm:text-base text-white">
                        {cp.problem}
                      </h3>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          cp.urgency === "urgent"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        }`}
                      >
                        {cp.urgency === "urgent" ? "حالة حرجة" : "تحتاج فحص"}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      💡 المؤشر التشخيصي: {cp.diagnosticTip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Process */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-cyan-400" />
                <span>مراحل وخطوات تنفيذ العمل</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800"
                  >
                    <div className="text-2xl font-black text-cyan-400 mb-2">
                      {step.stepNumber}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions & Guarantees */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>المميزات والضمانات التي نقدمها</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Service Request Form */}
          <div className="lg:col-span-5" id="service-booking-form">
            <div className="sticky top-28">
              <ServiceRequest
                preselectedService={service.title}
                title={`حجز خدمة: ${service.title}`}
                subtitle="املأ بياناتك وسيتم إرسال الطلب فوراً عبر WhatsApp لتأكيد موعد الزيارة وتحديد الفني المختص."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
