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
  // اسم الشركة والبراند
  name: "سباك الطائف | فَنّي الطائف للسباكة والصيانة المنزلية",
  nameEn: "Taif Plumber - Taif Technician Plumbing Services",
  tagline: "سباك الطائف - فَنّي الطائف لخدمات السباكة والصيانة المنزلية 24 ساعة",
  subTagline: "فريق فَنّي الطائف المعتمد متاح 24/7 للتعامل مع كافة مشكلات السباكة الطارئة والتركيبات الحديثة بأحدث المعدات.",

  // أرقام التواصل
  phone: "+966560935248",
  displayPhone: "056 093 5248",
  emergencyPhone: "+966560935248",

  // واتساب (رقم دولي بدون علامة + أو مسافات في الرابط)
  whatsapp: "966560935248",
  displayWhatsapp: "056 093 5248",

  // البريد والعنوان
  email: "info@spakpro.com",
  address: "المملكة العربية السعودية - الطائف، منطقة مكة المكرمة",
  mapsUrl: "https://maps.google.com/?q=الطائف,مكة+المكرمة,Saudi+Arabia",

  // أوقات العمل
  workingHours: {
    regular: "يومياً من 7:00 صباحاً حتى 11:00 مساءً",
    emergency: "خدمة طوارئ مخصصة 24 ساعة / 7 أيام في الأسبوع في كافة أحياء الطائف",
  },

  // مناطق الخدمة والتغطية في الطائف والمنطقة
  serviceAreas: [
    "الطائف (الحوية، الشهداء، السلامة، العزيزية)",
    "حي الربوة والشفا والهدا",
    "حي النزهة والورود والملك فهد",
    "حي القروية والمفرق والعمرة",
    "حي النخيل والسليمانية",
    "أحياء غرب وشرق وشمال الطائف",
    "جدة ومكة المكرمة (تغطية موسعة)",
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
