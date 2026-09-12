import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { companyConfig } from "@/data/company";
import { servicesData } from "@/data/services";
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
    default: "سباك الطائف | فَنّي الطائف للسباكة والصيانة المنزلية 24/7",
    template: "%s | سباك الطائف - فَنّي الطائف",
  },
  description: "أفضل سباك في الطائف - خدمات سباكة احترافية وطوارئ 24 ساعة في كافة أحياء الطائف (الحوية، الشفا، الهدا، الشهداء، السلامة). كشف تسربات المياه بأحدث الأجهزة بدون تكسير، تسليك مجاري بالضغط، تركيب وصيانة سخانات، وتأسيس سباكة فلل مع ضمان رسمي معتمد. اتصل الآن 0502123049.",
  keywords: [
    // الطائف - الكلمات الرئيسية الأساسية
    "سباك الطائف",
    "سباك في الطائف",
    "سباك بالطائف",
    "رقم سباك الطائف",
    "افضل سباك في الطائف",
    "سباك معتمد الطائف",
    "سباك شاطر بالطائف",
    "سباك ممتاز بالطائف",
    "سباك طوارئ الطائف",
    "ارقام سباكين الطائف",
    "فني سباكة الطائف",
    "سباك منازل الطائف",
    "معلم سباك الطائف",
    "سباك فلبيني الطائف",
    "سباك باكستاني الطائف",
    // خدمات السباكة المتخصصة
    "كشف تسربات المياه بالطائف",
    "كشف تسربات المياه بدون تكسير الطائف",
    "حل ارتفاع فاتورة المياه الطائف",
    "تسليك مجاري الطائف",
    "تسليك مجاري بالضغط بالطائف",
    "تسليك بالوعة المطبخ والحمام الطائف",
    "صيانة سباكة الطائف",
    "تأسيس سباكة فلل الطائف",
    "تشطيب سباكة الطائف",
    "تركيب وصيانة سخانات الطائف",
    "تصليح سخان بالطائف",
    "تركيب مضخات مياه الطائف",
    "تركيب فلاتر مياه الطائف",
    "تركيب وتصليح خلاطات ومحابس الطائف",
    "صيانة شبكات التغذية والصرف الطائف",
    // أحياء ومناطق الطائف
    "سباك الحوية الطائف",
    "سباك حي الشهداء الطائف",
    "سباك حي السلامة الطائف",
    "سباك الشفا الطائف",
    "سباك الهدا الطائف",
    "سباك حي النزهة الطائف",
    "سباك حي العزيزية الطائف",
    "سباك حي الفيصلية الطائف",
    "سباك حي الوشحاء الطائف",
    "سباك حي القمرية الطائف",
    "سباك حي السداد الطائف",
    "سباك حي الروابى الطائف",
    "سباك حي الريان الطائف",
    "سباك حي النخيل الطائف",
    "سباك حي السليمانية الطائف",
    "سباك حي الورود الطائف",
    "سباك حي الملك فهد الطائف",
    // عام ومناطق الغربية
    "سباك طوارئ 24 ساعة",
    "سباك بالسعودية 24 ساعة",
    "شركة سباكة بالطائف معتمدة",
    "صيانة سباكة منزلية الطائف",
  ],
  authors: [{ name: companyConfig.name, url: companyConfig.websiteUrl }],
  creator: companyConfig.name,
  publisher: companyConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
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
    title: `سباك الطائف | فَنّي الطائف للسباكة والصيانة المنزلية 24/7`,
    description: "أفضل سباك في الطائف لخدمات السباكة الشاملة وكشف تسربات المياه وتسليك المجاري وتأسيس الفلل 24 ساعة بأعلى دقة وضمان معتمد. اتصل الآن 0502123049.",
    siteName: companyConfig.name,
    images: [
      {
        url: `${companyConfig.websiteUrl}/images/hero-plumbing-tech.jpg`,
        width: 1200,
        height: 630,
        alt: "سباك الطائف - فَنّي الطائف لخدمات السباكة والصيانة 24 ساعة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `سباك الطائف | فَنّي الطائف للسباكة والصيانة 24/7`,
    description: "خدمات سباكة احترافية وطوارئ 24 ساعة في جميع أحياء الطائف - اتصل بنا الآن 0502123049",
    images: [`${companyConfig.websiteUrl}/images/hero-plumbing-tech.jpg`],
  },
  alternates: {
    canonical: companyConfig.websiteUrl,
    languages: {
      "ar-SA": companyConfig.websiteUrl,
    },
  },
  other: {
    "geo.region": "SA-02",
    "geo.placename": "الطائف",
    "geo.position": "21.2703;40.4158",
    "ICBM": "21.2703, 40.4158",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data Schema.org JSON-LD (Graph: Plumber + WebSite + Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": `${companyConfig.websiteUrl}/#plumber`,
        name: companyConfig.name,
        alternateName: [
          "سباك الطائف",
          "فَنّي الطائف للسباكة",
          "فني سباكة الطائف 24 ساعة",
          "شركة سباكة الطائف",
        ],
        description: companyConfig.tagline,
        url: companyConfig.websiteUrl,
        telephone: companyConfig.phone,
        email: companyConfig.email,
        image: `${companyConfig.websiteUrl}/images/hero-plumbing-tech.jpg`,
        logo: `${companyConfig.websiteUrl}/favicon.ico`,
        currenciesAccepted: "SAR",
        paymentAccepted: "Cash, Credit Card, Mada, Bank Transfer",
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
        areaServed: companyConfig.serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        hasMap: companyConfig.mapsUrl,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: companyConfig.phone,
          contactType: "customer service",
          areaServed: "SA",
          availableLanguage: ["Arabic"],
          contactOption: "TollFree",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "خدمات السباكة المتكاملة في الطائف",
          itemListElement: servicesData.map((svc) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: svc.title,
              description: svc.shortDescription,
              url: `${companyConfig.websiteUrl}/services/${svc.slug}`,
            },
          })),
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "380",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${companyConfig.websiteUrl}/#website`,
        url: companyConfig.websiteUrl,
        name: companyConfig.name,
        description: companyConfig.tagline,
        inLanguage: "ar-SA",
        publisher: {
          "@id": `${companyConfig.websiteUrl}/#plumber`,
        },
      },
    ],
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
