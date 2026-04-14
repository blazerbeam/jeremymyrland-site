"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { WorkSection } from "@/components/work-section";
import { BuildingSection } from "@/components/building-section";
import { CommunitySection } from "@/components/community-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <JourneySection />
        <WorkSection />
        <BuildingSection />
        <CommunitySection />
        <TestimonialsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
