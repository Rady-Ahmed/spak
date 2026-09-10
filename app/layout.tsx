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
    default: `${companyConfig.name} | حلول سباكة احترافية وطوارئ 24/7`,
    template: `%s | ${companyConfig.name}`,
  },
  description: companyConfig.subTagline,
  keywords: [
    "سباك",
    "سباك طوارئ",
    "كشف تسريب مياه",
    "تسليك مجاري",
    "صيانة سخانات",
    "تركيب أدوات صحية",
    "تصليح حنفيات",
    "سباكة القاهرة",
    "سباك التجمع الخامس",
    "سباك الشيخ زايد",
    "سباك مدينة نصر",
    "سباك المعادي",
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
    locale: "ar_EG",
    url: companyConfig.websiteUrl,
    title: `${companyConfig.name} | خدمات سباكة معتمدة`,
    description: companyConfig.tagline,
    siteName: companyConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.name} | خدمات سباكة معتمدة`,
    description: companyConfig.tagline,
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
  // LocalBusiness Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: companyConfig.name,
    description: companyConfig.tagline,
    url: companyConfig.websiteUrl,
    telephone: companyConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
      streetAddress: companyConfig.address,
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
    priceRange: "$$",
    areaServed: companyConfig.serviceAreas,
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
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
