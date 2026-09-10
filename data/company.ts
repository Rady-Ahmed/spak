// ============================================================================
// COMPANY CONFIGURATION (بيانات الشركة القابلة للتخصيص)
// ============================================================================
// قم بتحديث هذه البيانات بحرية حسب هوية شركتك وبيانات الاتصال الفعلية.

export interface CompanyConfig {
  name: string;
  nameEn: string;
  tagline: string;
  subTagline: string;
  phone: string;
  displayPhone: string;
  emergencyPhone: string;
  whatsapp: string;
  displayWhatsapp: string;
  email: string;
  address: string;
  mapsUrl: string;
  workingHours: {
    regular: string;
    emergency: string;
  };
  serviceAreas: string[];
  websiteUrl: string;
  trustMetrics: {
    value: string;
    numericValue: number;
    suffix: string;
    label: string;
    description: string;
  }[];
}

export const companyConfig: CompanyConfig = {
  // اسم الشركة
  name: "سباك برو لخدمات السباكة المتكاملة",
  nameEn: "SpakPro Plumbing Services",
  tagline: "حلول سباكة احترافية وسريعة بأعلى معايير الجودة والدقة",
  subTagline: "فريق فني معتمد متاح 24/7 للتعامل مع كافة مشكلات وأعطال السباكة الطارئة والتركيبات الحديثة بأحدث المعدات.",

  // أرقام التواصل (يمكن استبدالها برقمك الفعلي)
  phone: "+201000000000",
  displayPhone: "01000000000",
  emergencyPhone: "+201000000000",

  // واتساب (رقم دولي بدون علامة + أو مسافات في الرابط)
  whatsapp: "201000000000",
  displayWhatsapp: "01000000000",

  // البريد والعنوان
  email: "info@spakpro.com",
  address: "القاهرة والجيزة، جمهورية مصر العربية",
  mapsUrl: "https://maps.google.com/?q=Cairo,Egypt",

  // أوقات العمل
  workingHours: {
    regular: "يومياً من 8:00 صباحاً حتى 11:00 مساءً",
    emergency: "خدمة طوارئ مخصصة 24 ساعة / 7 أيام في الأسبوع",
  },

  // مناطق الخدمة والتغطية
  serviceAreas: [
    "مدينة نصر ومصر الجديدة",
    "التجمع الخامس والقاهرة الجديدة",
    "المعادي والمقطم",
    "الشيخ زايد و6 أكتوبر",
    "الدقي والمهندسين والعجوزة",
    "الهرم وفيصل والجيزة",
    "الشروق ومدينتي والرحاب",
  ],

  // رابط الموقع
  websiteUrl: "https://spakpro.com",

  // إحصائيات الثقة (أرقام توضيحية قابلة للتعديل بسهولة)
  trustMetrics: [
    {
      value: "+500",
      numericValue: 500,
      suffix: "+",
      label: "خدمة منجزة",
      description: "إصلاحات وتأسيسات بأعلى مستويات الجودة",
    },
    {
      value: "+300",
      numericValue: 300,
      suffix: "+",
      label: "عميل راضٍ",
      description: "تقييمات ممتازة وخدمة ما بعد الإصلاح",
    },
    {
      value: "24/7",
      numericValue: 24,
      suffix: "/7",
      label: "جاهزية طوارئ",
      description: "استجابة فورية للأعطال والتسريبات الحرجة",
    },
    {
      value: "+10",
      numericValue: 10,
      suffix: "+",
      label: "سنوات خبرة",
      description: "خبرة تراكمية في أنظمة السباكة الحديثة",
    },
  ],
};
