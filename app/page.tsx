import React from "react";
import { Hero } from "@/components/home/Hero";
import { Emergency } from "@/components/home/Emergency";
import { DiagnosticWizard } from "@/components/home/DiagnosticWizard";
import { ProblemSelector } from "@/components/home/ProblemSelector";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ServiceExplorer } from "@/components/home/ServiceExplorer";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { DigitalWarranty } from "@/components/home/DigitalWarranty";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WorkGallery } from "@/components/home/WorkGallery";
import { PlumbingGuides } from "@/components/home/PlumbingGuides";
import { Testimonials } from "@/components/home/Testimonials";
import { CostEstimator } from "@/components/home/CostEstimator";
import { FAQSection } from "@/components/home/FAQSection";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { ServiceRequest } from "@/components/forms/ServiceRequest";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Emergency 24/7 Action Banner */}
      <Emergency />

      {/* 3. Interactive 3-Step Problem Diagnostic Wizard (Feature 4) */}
      <DiagnosticWizard />

      {/* 4. Interactive Problem Diagnostic Selector */}
      <ProblemSelector />

      {/* 5. Core Services Grid */}
      <ServicesGrid />

      {/* 6. Interactive Visual Service Explorer */}
      <ServiceExplorer />

      {/* 7. Interactive Before / After Comparison Slider */}
      <BeforeAfter />

      {/* 8. Why Choose Us (Trust Blocks) */}
      <WhyChooseUs />

      {/* 9. Trust Metrics (Animated Counters) */}
      <TrustMetrics />

      {/* 10. Official Digital Warranty Simulator (Feature 5) */}
      <DigitalWarranty />

      {/* 11. How It Works (4-Step Timeline) */}
      <HowItWorks />

      {/* 12. Work & Projects Gallery with Lightbox */}
      <WorkGallery />

      {/* 13. Plumbing Care & Emergency Guides (Feature 6) */}
      <PlumbingGuides />

      {/* 14. Interactive Cost & Price Estimator */}
      <CostEstimator />

      {/* 15. Customer Testimonials */}
      <Testimonials />

      {/* 15. Smart Service Request Form (WhatsApp Generator + GPS Location Feature 2) */}
      <section id="request-service" className="py-20 bg-slate-950 relative overflow-hidden" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ServiceRequest />
        </div>
      </section>

      {/* 16. FAQ Accordion */}
      <FAQSection />

      {/* 17. Service Areas & Coverage */}
      <ServiceAreas />
    </div>
  );
}

