import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { companyConfig } from "@/data/company";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingHelp } from "@/components/layout/FloatingHelp";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

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
    default: `${companyConfig.name} | سباك بالرياض وجدة وكافة مدن السعودية 24/7`,
    template: `%s | ${companyConfig.name}`,
  },
  description: "خدمات سباكة احترافية وطوارئ 24 ساعة في الرياض، جدة، الدمام وكافة مدن المملكة. كشف تسربات المياه بأحدث الأجهزة بدون تكسير، تقارير معتمدة لشركة المياه الوطنية، تسليك مجاري بالضغط، وتأسيس فلل مع ضمان رسمي.",
  keywords: [
    "سباك بالرياض",
    "سباك بجدة",
    "سباك بالدمام",
    "كشف تسربات المياه بالرياض",
    "كشف تسربات المياه معتمد شركة المياه الوطنية",
    "حل مشكلة ارتفاع فاتورة المياه",
    "تسليك مجاري بالرياض",
    "تسليك مجاري بجدة",
    "سباك طوارئ 24 ساعة",
    "سباك ممتاز بالرياض",
    "سباك فلبيني بالرياض",
    "سباك شاطر بالرياض",
    "سباك شمال الرياض",
    "سباك شرق الرياض",
    "تأسيس سباكة فلل وقصور",
    "صيانة سخانات الخزف السعودي",
    "تصليح دينمو ومضخات مياه",
    "سباكة السعودية",
  ],
  authors: [{ name: companyConfig.name }],
  creator: companyConfig.name,
  publisher: companyConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: companyConfig.websiteUrl,
    title: `${companyConfig.name} | سباك بالرياض وجدة - خدمات معتمدة 24 ساعة`,
    description: "أفضل خدمات سباكة معتمدة بالمملكة العربية السعودية. استجابة فورية خلال 30 دقيقة، كشف تسربات، تسليك مجاري، وضمان شامل 3 سنوات.",
    siteName: companyConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.name} | سباك بالرياض والمملكة`,
    description: "خدمات سباكة طوارئ واحترافية في الرياض وكافة مدن السعودية 24/7 مع ضمان معتمد.",
  },
  alternates: {
    canonical: companyConfig.websiteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema.org JSON-LD for Saudi Arabian Search Visibility
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: companyConfig.name,
    alternateName: "سباك بالرياض - سباك برو السعودية",
    description: companyConfig.tagline,
    url: companyConfig.websiteUrl,
    telephone: companyConfig.phone,
    currenciesAccepted: "SAR",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      addressCountry: "SA",
      streetAddress: companyConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.6753,
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
      </body>
    </html>
  );
}
