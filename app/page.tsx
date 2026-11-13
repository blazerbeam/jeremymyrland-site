import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { WorkSection } from "@/components/work-section";
import { BuildingSection } from "@/components/building-section";
import { WritingSection } from "@/components/writing-section";
import { CaseStudyProvider } from "@/components/case-study-modal";
import { getAllPosts } from "@/lib/posts";
import { CommunitySection } from "@/components/community-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";

// The three newest posts, with the first sentence of each summary as the excerpt.
const latestPosts = getAllPosts()
  .slice(0, 3)
  .map(({ slug, title, date, summary }) => ({
    slug,
    title,
    date,
    excerpt: summary.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? summary,
  }));

export default function Home() {
  return (
    <CaseStudyProvider>
      <main>
        <HeroSection />
        <JourneySection />
        <WorkSection />
        <BuildingSection />
        <WritingSection posts={latestPosts} />
        <CommunitySection />
        <TestimonialsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </CaseStudyProvider>
  );
}
