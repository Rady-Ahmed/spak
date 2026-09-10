import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { companyConfig } from "@/data/company";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingHelp } from "@/components/layout/FloatingHelp";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { CodeProtection } from "@/components/security/CodeProtection";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070e1b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(companyConfig.websiteUrl),
  title: {
    default: `سباك الطائف | ${companyConfig.name} - خدمات سباكة 24/7`,
    template: `%s | سباك الطائف - ${companyConfig.name}`,
  },
  description: "أفضل سباك في الطائف - خدمات سباكة احترافية وطوارئ 24 ساعة في الطائف، الحوية، الشفا، الهدا. كشف تسربات المياه بأحدث الأجهزة بدون تكسير، تسليك مجاري، تركيب وصيانة سخانات، وتأسيس سباكة فلل مع ضمان رسمي. اتصل الآن 0560935248.",
  keywords: [
    // الطائف - الكلمات الرئيسية
    "سباك الطائف",
    "سباك في الطائف",
    "سباك بالطائف",
    "سباك طوارئ الطائف",
    "سباك ممتاز بالطائف",
    "رقم سباك الطائف",
    "افضل سباك في الطائف",
    "سباك معتمد الطائف",
    // خدمات الطائف
    "كشف تسربات المياه بالطائف",
    "تسليك مجاري الطائف",
    "تسليك بالوعة الطائف",
    "صيانة سباكة الطائف",
    "تركيب سخان الطائف",
    "تصليح سخان بالطائف",
    "تأسيس سباكة فلل الطائف",
    "تركيب مضخة ماء الطائف",
    // أحياء الطائف
    "سباك حي الشهداء الطائف",
    "سباك الحوية الطائف",
    "سباك الشفا الطائف",
    "سباك الهدا الطائف",
    "سباك حي السلامة الطائف",
    "سباك حي النزهة الطائف",
    // عام السعودية
    "سباك بالسعودية 24 ساعة",
    "كشف تسربات معتمد شركة المياه الوطنية",
    "تسليك مجاري بالضغط",
    "سباكة السعودية",
    "سباك طوارئ 24 ساعة",
  ],
  authors: [{ name: companyConfig.name, url: companyConfig.websiteUrl }],
  creator: companyConfig.name,
  publisher: companyConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: companyConfig.websiteUrl,
    title: `سباك الطائف | ${companyConfig.name} - خدمات معتمدة 24 ساعة`,
    description: "أفضل سباك في الطائف بالمملكة العربية السعودية. استجابة فورية خلال 30 دقيقة، كشف تسربات المياه، تسليك مجاري، وضمان شامل على كافة الأعمال.",
    siteName: companyConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `سباك الطائف | ${companyConfig.name}`,
    description: "خدمات سباكة طوارئ واحترافية في الطائف 24/7 - كشف تسربات، تسليك مجاري، وضمان معتمد.",
  },
  alternates: {
    canonical: companyConfig.websiteUrl,
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema.org JSON-LD for Taif / Saudi Arabian Search Visibility
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: companyConfig.name,
    alternateName: "سباك الطائف - سباك برو السعودية",
    description: companyConfig.tagline,
    url: companyConfig.websiteUrl,
    telephone: companyConfig.phone,
    currenciesAccepted: "SAR",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "الطائف",
      addressRegion: "منطقة مكة المكرمة",
      addressCountry: "SA",
      streetAddress: companyConfig.address,
      postalCode: "21944",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.2703,
      longitude: 40.4158,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: companyConfig.serviceAreas,
    hasMap: companyConfig.mapsUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyConfig.phone,
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: "Arabic",
      contactOption: "TollFree",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "380",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white antialiased font-sans">
        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white text-xs font-bold"
        >
          تخطي إلى المحتوى الرئيسي
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingHelp />
        <MobileStickyBar />
        <CodeProtection />
      </body>
    </html>
  );
}
