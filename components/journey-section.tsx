"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CaseStudyModal, NikeSearchCaseStudy, ViewpointCaseStudy, WayfairCaseStudy, JamaCaseStudy, WorkdayCaseStudy } from "./case-study-modal";

interface Pillar {
  name: string;
  vision: string;
  description: string;
  covered?: string;
  principle?: string;
}

interface JourneyRole {
  company: string;
  title: string;
  dates: string;
  color: string;
  narrative: string;
  tags: string[];
  hasPillars?: boolean;
  headerLine?: string;
  pillars?: Pillar[];
  footerLine?: string;
  stat?: {
    value: string;
    color: string; // Tailwind color class
  };
}

const journeyRoles: JourneyRole[] = [
  {
    company: "VIEWPOINT",
    title: "International Product Manager",
    dates: "2010–2012",
    color: "#B89B7A", // Warm brown - lightened for dark bg
    narrative:
      "Joined as a consultant and became the top revenue producer before ever touching a product role. Traveled constantly — Australia, Canada, customer sites across the US. When Viewpoint decided to expand internationally, I was already their most experienced person on the ground in both markets. Became their first International PM. Learned fast what it means to sell a product before it's ready — and what it takes to hold relationships together when trust is broken.",
    tags: ["ERP", "International Expansion", "Consulting"],
  },
  {
    company: "JAMA SOFTWARE",
    title: "Product Manager",
    dates: "2012–2016",
    color: "#8AB4C7", // Slate blue - lightened for dark bg
    narrative:
      "Joined as employee #40 and their first real PM. The company was saying yes to everyone. I did the segmentation work that changed that — small customers were costing as much to serve as large ones and churning faster. We started saying no to the wrong deals and yes to aerospace, defense, and automotive. Launched a decision-tracking feature that logged 10,000 decisions in its first month. Then spent six months learning automotive well enough to convince TÜV SÜD — a European certification body — to certify us as the first agile SaaS company to achieve ISO 26262. It worked.",
    tags: ["0→1", "Market Segmentation", "Automotive", "ISO 26262"],
    stat: { value: "5x pipeline", color: "#F59E0B" }, // amber
  },
  {
    company: "NIKE",
    title: "Senior PM, Search",
    dates: "2016–2020",
    color: "#5C9E6E", // Primary green - matches new primary
    narrative:
      "Joined right as Nike decided to replace Endeca with an in-house ML platform. Nobody owned the migration — I did. Spent four years in the middle of a genuine organizational tension: brand wanted curation and storytelling, commerce wanted revenue and optimization. Built the shared language that let both sides move forward. Reduced manual merchandising from ~85% of top queries to ~5%. Launched Search Preview — drove $50M+ in the first few months. The VP got cold feet the day before launch. We talked it through. We shipped.",
    tags: ["ML Search", "$50M Revenue", "Global Rollout", "Organizational Alignment"],
    stat: { value: "$50M+", color: "#5C9E6E" }, // accent green
  },
  {
    company: "CONSTRUCTOR",
    title: "Group Product Manager",
    dates: "2020",
    color: "#C9A66B", // Muted gold - lightened for dark bg
    narrative:
      "Joined as employee ~30 at a search startup I'd seen demo'd and thought: this is the real thing. Took a pay cut, joined right before the pandemic. Focused entirely on growth — built a pre-sales tool that let prospects compare their search against Constructor live, which doubled trial engagement. Cut onboarding from months to days. Helped land Sephora and Target Australia. Six months, big impact, then the funding round fell apart and I had to make a hard call.",
    tags: ["Early Stage", "Growth", "Pre-Sales"],
  },
  {
    company: "APPLE",
    title: "Senior PM, Search Experience",
    dates: "2020–2021",
    color: "#9A9A9A", // Apple gray - lightened for dark bg
    narrative:
      "Joined two months into the pandemic as Apple accelerated its e-commerce push. Defined a federated search strategy spanning Apple.com, the App Store, Help, and Siri — connecting experiences that had never been coordinated before. Built mockups, navigated the approval chain, got a 3-year roadmap bought in. Apple is as top-down as advertised. Success there is about precision of thinking and knowing exactly who needs to say yes before you move.",
    tags: ["Federated Search", "Roadmap", "Cross-functional Alignment"],
  },
  {
    company: "WAYFAIR",
    title: "Associate Director, Search Platform",
    dates: "2021–2022",
    color: "#A875C9", // Muted purple - lightened for dark bg
    narrative:
      "Led the launch of a neural network-powered search engine to replace Wayfair's legacy system. The technical work was real — ranking models, A/B testing frameworks, relevance tuning across five international markets. But the harder job was getting 60+ people across merchandising, data science, SEO, and international teams to trust a new algorithm enough to let it run. We launched in the US with no major incidents. $100M+ in incremental revenue globally.",
    tags: ["Neural Search", "$100M Revenue", "5 Markets", "A/B Testing"],
    stat: { value: "$100M+", color: "#5C9E6E" }, // accent green
  },
  {
    company: "WORKDAY",
    title: "Manager, Platform Product Management",
    dates: "2022–2025",
    color: "#E9A033", // Workday orange - lightened for dark bg
    narrative: "", // Using pillars instead
    hasPillars: true,
    headerLine: "Inherited the Interoperability team — three people, no shared direction, no product identity. Built it to nine across two pillars and three countries.",
    pillars: [
      {
        name: "INTEROPERABILITY",
        vision: "Make Workday feel like a platform instead of a suite.",
        description: "The Interoperability work (Kernel/Megatron) was about invisible architectural boundaries, consistent experiences across acquisitions and partners. Started with front-end orchestration and expanded into back-end and data layers.",
        covered: "90+ payroll partner integrations, acquired product integration (Evisort), skills cloud connectivity, marketplace infrastructure.",
      },
      {
        name: "DELIVERY",
        vision: "Save developers time.",
        description: "The Delivery work was simpler to explain: save developers time. Consolidated CI, built observability, established guardrails. Divested proprietary systems that no longer belonged to the team.",
        principle: "Operating principle: time is the universal currency. Everything was measured against it.",
      },
    ],
    footerLine: "Made six hires, promoted two, managed out two. Built both teams from scratch simultaneously.",
    tags: ["Platform", "Interoperability", "Developer Experience", "Team Building", "People Management", "GenAI", "Full-Stack Orchestration"],
    stat: { value: "9 PMs", color: "#14B8A6" }, // teal
  },
  {
    company: "NIKE",
    title: "Principal PM, HR Global Technology",
    dates: "2025–Present",
    color: "#5C9E6E", // Primary green - matches new primary
    narrative:
      "Back at Nike in a completely different domain — enterprise HR instead of consumer search. Same problem though: disconnected systems that slow people down every day. Rebuilt the onboarding journey, saved hundreds of thousands in licensing by consolidating document management, automated California compliance workflows. Now shaping strategic workforce planning — connecting Workday, planning tools, and skills data across 75,000+ employees. The orchestration problem doesn't change. The domain does.",
    tags: ["Enterprise HR", "Workday", "Workforce Planning", "Automation"],
    stat: { value: "75K+ employees", color: "#5C9E6E" }, // accent green
  },
];

export function JourneySection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            The Journey
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground text-balance">
            The Full Story
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From ERP consultant to enterprise product leader. Click any role to read the full story.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {journeyRoles.map((role, index) => (
              <div
                key={index}
                data-index={index}
                className={cn(
                  "relative pl-12 sm:pl-16 transition-all duration-700 ease-out",
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Timeline dot with company color */}
                <div
                  className="absolute left-2 sm:left-4 top-6 w-4 h-4 rounded-full border-2 border-background shadow-sm"
                  style={{ backgroundColor: role.color }}
                />

                {/* Connector line from dot to card */}
                <div
                  className="absolute left-6 sm:left-8 top-7 w-4 sm:w-6 h-px"
                  style={{ backgroundColor: role.color, opacity: 0.4 }}
                />

                <button
                  onClick={() => toggleExpand(index)}
                  className={cn(
                    "w-full text-left bg-card border border-border rounded-xl p-5 sm:p-6 transition-all duration-300",
                    "hover:shadow-md hover:border-border/80",
                    expandedIndex === index && "shadow-lg ring-1 ring-primary/20"
                  )}
                  style={{
                    borderLeftWidth: "3px",
                    borderLeftColor: role.color,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="font-serif text-lg sm:text-xl font-semibold"
                        style={{ color: role.color }}
                      >
                        {role.company}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {role.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Key stat (only shown when collapsed) */}
                      {role.stat && expandedIndex !== index && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{ 
                            color: role.stat.color,
                            backgroundColor: `${role.stat.color}15`
                          }}
                        >
                          {role.stat.value}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                        {role.dates}
                      </span>
                      {/* Expand/Close pill button */}
                      <span
                        className={cn(
                          "flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full transition-colors",
                          "bg-primary/15 text-primary hover:bg-primary/25"
                        )}
                      >
                        {expandedIndex === index ? "close" : "expand"}
                        <svg
                          className={cn(
                            "w-3 h-3 transition-transform duration-300",
                            expandedIndex === index && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {role.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable narrative - using CSS grid for Safari-safe animation */}
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out",
                      expandedIndex === index 
                        ? "grid-rows-[1fr] opacity-100 mt-4" 
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="pt-4 border-t border-border">
                      {role.hasPillars && role.pillars ? (
                        <div className="space-y-5">
                          {/* Header line */}
                          <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                            {role.headerLine}
                          </p>

                          {/* Pillars */}
                          <div className="grid gap-4 sm:grid-cols-2">
                            {role.pillars.map((pillar, pillarIndex) => (
                              <div
                                key={pillarIndex}
                                className="bg-secondary/50 border border-border/50 rounded-lg p-4 space-y-3"
                              >
                                {/* Pillar name */}
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground">
                                    PILLAR {pillarIndex + 1}
                                  </span>
                                  <div className="h-px flex-1 bg-border/50" />
                                </div>
                                <h4
                                  className="font-serif text-base font-semibold"
                                  style={{ color: role.color }}
                                >
                                  {pillar.name}
                                </h4>

                                {/* Vision as pull quote */}
                                <blockquote className="border-l-2 pl-3 italic text-sm text-foreground/90" style={{ borderColor: role.color }}>
                                  &ldquo;{pillar.vision}&rdquo;
                                </blockquote>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {pillar.description}
                                </p>

                                {/* Covered items (for Interoperability) */}
                                {pillar.covered && (
                                  <div className="text-xs text-muted-foreground pt-2 border-t border-border/30">
                                    <span className="font-semibold text-foreground/70">Covered:</span>{" "}
                                    {pillar.covered}
                                  </div>
                                )}

                                {/* Operating principle (for Delivery) */}
                                {pillar.principle && (
                                  <p className="text-xs text-muted-foreground italic pt-2 border-t border-border/30">
                                    {pillar.principle}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Footer line */}
                          <p className="text-sm text-muted-foreground font-medium pt-2">
                            {role.footerLine}
                          </p>

                          {/* Case study link for Workday */}
                          {role.company === "WORKDAY" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCaseStudyOpen("workday");
                              }}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-4"
                            >
                              Read case study
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">
                            {role.narrative}
                          </p>
                          {/* Case study link for Nike Search (2016-2020) */}
                          {role.company === "NIKE" && role.dates === "2016–2020" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCaseStudyOpen("nike-search");
                              }}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              Read case study
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          )}
                          {/* Case study link for Viewpoint (2010-2012) */}
                          {role.company === "VIEWPOINT" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCaseStudyOpen("viewpoint");
                              }}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              Read case study
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          )}
                          {/* Case study link for Wayfair (2021-2022) */}
                          {role.company === "WAYFAIR" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCaseStudyOpen("wayfair");
                              }}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              Read case study
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          )}
                          {/* Case study link for Jama (2012-2016) */}
                          {role.company === "JAMA SOFTWARE" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCaseStudyOpen("jama");
                              }}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              Read case study
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modals */}
      <CaseStudyModal
        isOpen={caseStudyOpen === "nike-search"}
        onClose={() => setCaseStudyOpen(null)}
      >
        <NikeSearchCaseStudy />
      </CaseStudyModal>
      <CaseStudyModal
        isOpen={caseStudyOpen === "viewpoint"}
        onClose={() => setCaseStudyOpen(null)}
      >
        <ViewpointCaseStudy />
      </CaseStudyModal>
      <CaseStudyModal
        isOpen={caseStudyOpen === "wayfair"}
        onClose={() => setCaseStudyOpen(null)}
      >
        <WayfairCaseStudy />
      </CaseStudyModal>
      <CaseStudyModal
        isOpen={caseStudyOpen === "jama"}
        onClose={() => setCaseStudyOpen(null)}
      >
        <JamaCaseStudy />
      </CaseStudyModal>
      <CaseStudyModal
        isOpen={caseStudyOpen === "workday"}
        onClose={() => setCaseStudyOpen(null)}
      >
        <WorkdayCaseStudy />
      </CaseStudyModal>
    </section>
  );
}
