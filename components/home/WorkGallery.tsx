"use client";

import React, { useState, useEffect } from "react";
import {
  Wrench,
  Droplets,
  Flame,
  AlertCircle,
  Bath,
  CheckCircle2,
  Sparkles,
  Layers,
  X,
  Clock,
  ShieldCheck,
  MessageCircle,
  Phone,
  ArrowLeft,
  Eye,
} from "lucide-react";
import { createWhatsAppUrl, createPhoneUrl } from "@/lib/whatsapp";

interface GalleryProject {
  id: string;
  title: string;
  category: "all" | "تسريبات" | "مواسير" | "سخانات" | "صرف" | "أدوات صحية";
  location: string;
  badge: string;
  summary: string;
  beforeState: string;
  afterState: string;
  toolsUsed: string[];
  specs: string[];
  executionTime: string;
}

export const WorkGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const categories = [
    { id: "all", label: "كافة الأعمال" },
    { id: "تسريبات", label: "كشف التسريبات" },
    { id: "مواسير", label: "شبكات المواسير" },
    { id: "سخانات", label: "صيانة السخانات" },
    { id: "صرف", label: "تسليك الصرف" },
    { id: "أدوات صحية", label: "أدوات صحية" },
  ];

  const projects: GalleryProject[] = [
    {
      id: "p1",
      title: "كشف وعزل تسريب خفي داخل جدار فيلا",
      category: "تسريبات",
      location: "الرياض - حي الملقا",
      badge: "فحص حراري دقيق",
      summary: "تحديد ثقب بقطر 2 ملم في خط التغذية الحار تحت رخام الحمام الرئيسي دون تكسير الجدار بالكامل، وإصلاحه بلحام ألماني واختبار 12 بار.",
      beforeState: "رطوبة متزايدة وتلف بدهان الغرفة المجاورة وسخونة غير طبيعية في أرضية الحمام مع ارتفاع فاتورة المياه.",
      afterState: "عزل الثقب باللحام الحراري الألماني واختبار ضغط هيدروليكي 12 بار واستعادة سلامة الحائط بنسبة 100%.",
      toolsUsed: ["جهاز كشف بالألتراسونيك ألماني", "كاميرا تصوير حراري FLIR", "ماكينة لحام بولي حرارية"],
      specs: ["فحص بالألتراسونيك", "لحام حراري موضعي", "ضمان 5 سنوات"],
      executionTime: "ساعتان ونصف",
    },
    {
      id: "p2",
      title: "تأسيس شبكة تغذية وصرف متكاملة لفيلا وقصر مودرن",
      category: "مواسير",
      location: "الرياض - حي النرجس",
      badge: "تأسيس معتمد",
      summary: "تمديد شبكة مواسير بولي بروبلين خضراء معزولة حرارياً بالكامل وتوزيع خطوط ضغط متوازنة لـ 4 حمامات ومطبخ رئيسي.",
      beforeState: "شبكة قديمة متآكلة تسبب انخفاض حاد في ضغط المياه وتغير لون الماء إلى صدأ بني خفيف.",
      afterState: "استبدال كامل للمنظومة بشبكة بولي بروبلين معتمدة مطابقة للمواصفات وضمان مصنعي 10 سنوات.",
      toolsUsed: ["مواسير بولي بروبلين ألماني", "قوافيز ماصة للاهتزاز", "مضخة اختبار ضغط هيدروليكي"],
      specs: ["مواسير ألمانية معتمدة", "قوافيز ماصة للصوت", "شهادة ضغط مصنعية"],
      executionTime: "يومان عمل",
    },
    {
      id: "p3",
      title: "تركيب شاسيه مدفون جروهي مع كرسي معلق",
      category: "أدوات صحية",
      location: "جدة - حي الروضة",
      badge: "تشطيب فندقي",
      summary: "تثبيت صندوق طرد مدفون بميزان ليزر رقمي، وتوصيل عوازل السيليكون المضادة للعفن مع زر تحكم هيدروليكي فخم.",
      beforeState: "تجديد الحمام ورغبة العميل في إخفاء خزان الطرد وإعطاء مظهر عصري يوفر مساحة أرضية سهلة التنظيف.",
      afterState: "تثبيت صلب للشاسيه بميزان ليزر ثلاثي، مع عزل صوتي واختبار انسياب للمياه دون أي تسريب داخلي.",
      toolsUsed: ["ميزان ليزر رقمي 3D", "سيليكون ألماني مانع للبكتيريا", "أدوات تثبيت أحمال ثقيلة"],
      specs: ["ميزان ليزر ثلاثي", "سيليكون مضاد للبكتيريا", "اختبار سريان كامل"],
      executionTime: "4 ساعات",
    },
    {
      id: "p4",
      title: "إصلاح وصيانة سخان مركزي ودينمو ضغط مياه",
      category: "سخانات",
      location: "الدمام - حي الشاطئ",
      badge: "أمان متكامل",
      summary: "إزالة التكلسات الملحية من دورة التسخين، ضبط صمام الأمان وتغيير الرداخ الأصلي واستعادة تدفق المياه الساخنة بكفاءة 100%.",
      beforeState: "ضعف حاد في ضغط المياه الساخنة مع تنقيط مستمر أسفل الخزان وصدور صوت غير طبيعي من مضخة الضغط.",
      afterState: "تنظيف دورة السخان بمحلول فوسفاتي آمن، ضبط حساس الأمان ومعايرة مضخة الضغط لتدفق متوازن.",
      toolsUsed: ["قطع غيار أصلية", "أجهزة كشف ضغط هيدروليكي", "مضخة غسيل الخزان"],
      specs: ["قطع غيار أصلية", "فحص ضغط شبكة", "معايرة صمامات الأمان"],
      executionTime: "ساعة ونصف",
    },
    {
      id: "p5",
      title: "تسليك خط تصريف رئيسي لمطعم بالسوستة الهيدروليكية",
      category: "صرف",
      location: "الرياض - حي السليمانية",
      badge: "تدخل طوارئ سريع",
      summary: "تفتيت كتل دهنية صلبة متراكمة على مسافة 18 متراً داخل الماسورة الرئيسية وغسيل الخط بضغط الماء العالي خلال 40 دقيقة.",
      beforeState: "طفح مفاجئ في بالوعات المطبخ وتهديد بوقف العمل في المطعم نتيجة تراكم الدهون والشحوم الصلبة.",
      afterState: "اختراق الانسداد بالكامل، تنظيف جدران المواسير بالضغط العالي وتطهير الخط وتعقيمه تماماً.",
      toolsUsed: ["سوستة كهربائية هيدروليكية أمريكية", "رؤوس تفتيت دهون متقدمة", "معقمات بيئية آمنة"],
      specs: ["سوستة كهربائية أمريكية", "غسيل ضغط عالي", "تطهير وقائي"],
      executionTime: "45 دقيقة",
    },
    {
      id: "p6",
      title: "تركيب كابينة شاور زجاجية وخلاط شلال ذكي",
      category: "أدوات صحية",
      location: "الرياض - حي حطين",
      badge: "تصميم عصري",
      summary: "تركيب دقيق ومحكم لمنع تسرب المياه من حواف الكابينة الزجاجية مع ربط خلاط الشلال وضبط ضغط المياه المتدفق.",
      beforeState: "تسرب مستمر لمياه الاستحمام إلى أرضية الحمام الخارجية وتلف باركيه المدخل المجاور.",
      afterState: "عزل زجاجي محكم بفواصل سيليكونية فائقة النقاء وضبط استواء المسارات لحركة انسيابية ناعمة.",
      toolsUsed: ["سيليكون شفاف عالي المرونة", "مفاتيح ربط مبطنة لمنع الخدش", "مثبتات زجاجية غير قابلة للصدأ"],
      specs: ["عزل حواف محكم", "تثبيت مانع للاهتزاز", "تجربة فورية بالضغط"],
      executionTime: "3 ساعات",
    },
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>معرض الأعمال والمشاريع الميدانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            نماذج حية من مشاريعنا وإصلاحاتنا الهندسية
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            اضغط على أي بطاقة لعرض التقرير الفني الشامل، المعدات المستخدمة، وحالة العطل قبل وبعد الإصلاح.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Project Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400">
                    📍 {project.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Specs pill list & View Action */}
              <div>
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 mb-4">
                  {project.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    عرض التقرير الفني
                  </span>
                  <span>←</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white text-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 left-6 w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="إغلاق التقرير"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pb-4 border-b border-slate-800 mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 inline-block mb-2">
                {selectedProject.badge} • 📍 {selectedProject.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Before vs After Comparison in Modal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40">
                <span className="text-xs font-bold text-amber-400 block mb-1">
                  ⚠️ حالة العطل قبل التدخل:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.beforeState}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
                <span className="text-xs font-bold text-emerald-400 block mb-1">
                  ✅ النتيجة بعد الإصلاح الهندسي:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.afterState}
                </p>
              </div>
            </div>

            {/* Tools Used */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                المعدات والتقنيات المستخدمة:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-200 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 flex items-center gap-1.5"
                  >
                    <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Execution Meta */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 mb-6">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>زمن التنفيذ: {selectedProject.executionTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ضمان معتمد على العمل</span>
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={createWhatsAppUrl(
                  `مرحبًا، رأيت مشروع (${selectedProject.title}) وأود طلب فني لمعاينة مشكلة مشابهة لدي`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>طلب معاينة لحالة مشابهة عبر WhatsApp</span>
              </a>

              <a
                href={createPhoneUrl()}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <div className="flex flex-col items-start leading-tight">
                  <span>اتصال</span>
                  <span className="text-[10px] font-mono opacity-90" dir="ltr">{companyConfig.displayPhone}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
