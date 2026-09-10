"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { companyConfig } from "@/data/company";
import {
  buildWhatsAppMessage,
  createWhatsAppUrl,
  createPhoneUrl,
  ServiceRequestFormData,
} from "@/lib/whatsapp";
import {
  Send,
  Phone,
  CheckCircle2,
  AlertCircle,
  Clock,
  Camera,
  MapPin,
  User,
  Wrench,
  FileText,
  Calendar,
  Navigation,
} from "lucide-react";

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  service?: string;
  problemDescription?: string;
}

interface ServiceRequestProps {
  preselectedService?: string;
  title?: string;
  subtitle?: string;
}

export const ServiceRequest: React.FC<ServiceRequestProps> = ({
  preselectedService,
  title = "اطلب خدمة سباكة الآن",
  subtitle = "املأ النموذج وسيتم تحويلك فوراً إلى WhatsApp بمحتوى طلبك للتأكيد السريع وحجز الموعد.",
}) => {
  const [formData, setFormData] = useState<ServiceRequestFormData>({
    name: "",
    phone: "",
    address: "",
    service: preselectedService || servicesData[0].title,
    problemDescription: "",
    preferredDateTime: "",
    notes: "",
    hasPhoto: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [photoSelected, setPhotoSelected] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationDetected, setLocationDetected] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("خاصية تحديد الموقع غير مدعومة في متصفحك الحالي.");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
        setFormData((prev) => ({
          ...prev,
          mapsLocationUrl: mapsUrl,
          address: prev.address.trim()
            ? prev.address
            : `موقعي الجغرافي المباشر (GPS)`,
        }));
        setIsLocating(false);
        setLocationDetected(true);
        if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
      },
      (error) => {
        setIsLocating(false);
        alert("تعذر الوصول إلى الموقع الجغرافي. يرجى تفعيل إذن الموقع في المتصفح أو كتابة العنوان يدوياً.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "يرجى كتابة الاسم الكريم";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "الاسم يجب أن يكون 3 أحرف على الأقل";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "يرجى إدخال رقم الهاتف";
    } else if (!/^[0-9+ ]{8,16}$/.test(formData.phone.trim())) {
      newErrors.phone = "يرجى إدخال رقم هاتف صحيح";
    }

    if (!formData.address.trim()) {
      newErrors.address = "يرجى إدخال العنوان أو المنطقة";
    }

    if (!formData.service.trim()) {
      newErrors.service = "يرجى اختيار نوع الخدمة";
    }

    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = "يرجى توضيح وصف المشكلة باختصار";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoSelected(file.name);
      setFormData((prev) => ({ ...prev, hasPhoto: true }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate polished transition before redirecting to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const message = buildWhatsAppMessage(formData);
      const url = createWhatsAppUrl(message);

      // Open WhatsApp after brief success confirmation
      setTimeout(() => {
        window.open(url, "_blank");
      }, 1200);
    }, 600);
  };

  return (
    <div
      id="request-service"
      className="scroll-mt-24 relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12 text-white"
      dir="rtl"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-2xl mb-8 sm:mb-10 text-right">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-cyan-300 border border-blue-400/30 mb-3">
          <Wrench className="w-3.5 h-3.5 text-cyan-400" />
          <span>حجز سريع وبدون انتظار</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {isSuccess ? (
        /* Success State */
        <div className="relative z-10 py-12 px-6 rounded-2xl bg-slate-950/80 border border-emerald-500/40 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 ring-8 ring-emerald-500/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">
            تم تجهيز طلبك بنجاح!
          </h4>
          <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
            جارٍ فتح محادثة WhatsApp تلقائياً لإرسال التفاصيل مباشرة إلى فريق الدعم الفني وتأكيد الموعد فوراً.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl(buildWhatsAppMessage(formData))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all"
            >
              <span>فتح WhatsApp الآن يدويًا</span>
            </a>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
            >
              طلب خدمة أخرى
            </button>
          </div>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
                الاسم بالكامل <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="مثال: أحمد محمد"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                />
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
                رقم الهاتف (أو واتساب) <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  dir="ltr"
                  placeholder="010XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  className={`w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 transition-all text-right ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                />
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
                نوع الخدمة المطلوبة <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-950/80 text-white text-sm border border-slate-700/80 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer"
                >
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.title} className="bg-slate-900 text-white">
                      {svc.title}
                    </option>
                  ))}
                  <option value="صيانة سباكة عامة أخرى" className="bg-slate-900 text-white">
                    صيانة سباكة عامة أخرى
                  </option>
                </select>
                <Wrench className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-200">
                  العنوان والمنطقة <span className="text-red-400">*</span>
                </label>
                <button
                  type="button"
                  onClick={handleGetLocation}
                  disabled={isLocating}
                  className={`text-[11px] font-bold inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all active:scale-95 cursor-pointer ${
                    locationDetected
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                      : "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20"
                  }`}
                >
                  <Navigation className={`w-3 h-3 ${isLocating ? "animate-spin" : ""}`} />
                  <span>
                    {isLocating
                      ? "جارٍ تحديد موقعك..."
                      : locationDetected
                      ? "✓ تم ربط موقعك بالخريطة"
                      : "📍 حدد موقعي الحالي (GPS)"}
                  </span>
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="مثال: التجمع الخامس، النرجس، عمارة 15 أو اضغط الزر أعلاه"
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    if (errors.address) setErrors({ ...errors, address: undefined });
                  }}
                  className={`w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 transition-all ${
                    errors.address
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                />
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
              {locationDetected && (
                <p className="mt-1 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ سيتم إرسال رابط موقعك على Google Maps في رسالة الواتساب مباشرة للفني.</span>
                </p>
              )}
              {errors.address && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.address}
                </p>
              )}
            </div>

            {/* Preferred Date/Time */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
                الموعد أو الوقت المفضل (اختياري)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="مثال: اليوم مساءً أو غداً الساعة 2 ظهراً"
                  value={formData.preferredDateTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDateTime: e.target.value })
                  }
                  className="w-full px-4 py-3.5 pl-10 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-sm border border-slate-700/80 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Photo attachment simulation */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
                صورة توضيحية للمشكلة (اختياري)
              </label>
              <label className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/80 border border-dashed border-slate-700 hover:border-cyan-500/60 cursor-pointer transition-colors group">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Camera className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-slate-300 truncate">
                    {photoSelected ? photoSelected : "اضغط لاختيار صورة من جهازك"}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-md shrink-0">
                  {photoSelected ? "تم التحديد" : "رفع ملف"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
              <p className="text-[11px] text-slate-400 mt-1">
                يمكنك أيضاً إرسال الصورة مباشرة داخل محادثة واتساب.
              </p>
            </div>
          </div>

          {/* Problem Description */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
              وصف المشكلة بالتفصيل <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <textarea
                rows={3}
                placeholder="صف العطل أو ما تلاحظه (مثال: تسريب مياه خلف الحمام، أو انسداد في حوض المطبخ...)"
                value={formData.problemDescription}
                onChange={(e) => {
                  setFormData({ ...formData, problemDescription: e.target.value });
                  if (errors.problemDescription)
                    setErrors({ ...errors, problemDescription: undefined });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 transition-all ${
                  errors.problemDescription
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />
            </div>
            {errors.problemDescription && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.problemDescription}
              </p>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-2">
              ملاحظات إضافية (اختياري)
            </label>
            <input
              type="text"
              placeholder="مثال: يرجى الاتصال قبل الحضور بربع ساعة، أو نوع السخان كذا..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-sm border border-slate-700/80 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>جارٍ تجهيز الطلب...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب عبر WhatsApp الآن</span>
                </>
              )}
            </button>

            {/* Direct Phone Backup CTA */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <span>أو تفضل الاتصال الفوري؟</span>
              <a
                href={createPhoneUrl()}
                className="font-bold text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span dir="ltr">{companyConfig.displayPhone}</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
