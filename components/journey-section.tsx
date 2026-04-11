"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

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
      "Started as a consultant traveling 90% of the time helping construction companies implement ERP software. Became their first consultant in Canada and Australia, which led to an International PM role. Launched the product in both countries, led the decision not to expand to India, and was the top revenue-driving consultant before moving into product.",
    tags: ["ERP", "International Expansion", "Consulting"],
  },
  {
    company: "JAMA SOFTWARE",
    title: "Product Manager",
    dates: "2012–2016",
    color: "#8AB4C7", // Slate blue - lightened for dark bg
    narrative:
      "Joined as employee ~40 and their first real PM. Did the market segmentation work that shifted the company away from small customers toward large, complex ones — aerospace, defense, automotive. Launched a decision-tracking feature that logged 10,000 decisions in its first month. Became the first agile SaaS company to achieve ISO 26262 automotive certification, growing the automotive pipeline 5x in a single quarter. Named fastest-growing startup in Oregon while there.",
    tags: ["0→1", "Market Segmentation", "Automotive", "ISO 26262"],
    stat: { value: "5x pipeline", color: "#F59E0B" }, // amber
  },
  {
    company: "NIKE",
    title: "Senior PM, Search",
    dates: "2016–2020",
    color: "#5C9E6E", // Primary green - matches new primary
    narrative:
      "Joined right as Nike decided to replace its legacy Endeca search platform with an in-house ML system. Spent four years orchestrating the migration while managing real tension between brand (who wanted curation and control) and commerce (who wanted revenue). Reduced manual merchandising from ~85% of top queries to ~5%. Launched Search Preview, which drove $50M+ in incremental revenue in the first few months at 6%+ conversion vs a 3% baseline. Built transparency tooling so stakeholders could understand why the algorithm ranked products the way it did.",
    tags: ["ML Search", "$50M Revenue", "Global Rollout", "Organizational Alignment"],
    stat: { value: "$50M+", color: "#5C9E6E" }, // accent green
  },
  {
    company: "CONSTRUCTOR",
    title: "Group Product Manager",
    dates: "2020",
    color: "#C9A66B", // Muted gold - lightened for dark bg
    narrative:
      "Joined as employee ~30 at a search startup right before the pandemic. Built a \"try it out\" pre-sales tool that doubled trial engagement. Cut customer onboarding from months to days. Short stint, but shaped the sales process and helped land early customers including Sephora and Target Australia.",
    tags: ["Early Stage", "Growth", "Pre-Sales"],
  },
  {
    company: "APPLE",
    title: "Senior PM, Search Experience",
    dates: "2020–2021",
    color: "#9A9A9A", // Apple gray - lightened for dark bg
    narrative:
      "Joined early in the pandemic as Apple accelerated its e-commerce push. Defined a federated search strategy spanning Apple.com, the Apple Store app, Help, and Siri. Built mockups, got buy-in from product marketing, and established a 3-year roadmap in a highly top-down environment where one wrong step in the approval chain cost weeks.",
    tags: ["Federated Search", "Roadmap", "Cross-functional Alignment"],
  },
  {
    company: "WAYFAIR",
    title: "Associate Director, Search Platform",
    dates: "2021–2022",
    color: "#A875C9", // Muted purple - lightened for dark bg
    narrative:
      "Led the launch of a neural network-powered search engine that replaced Wayfair's legacy system. Built the A/B testing framework from scratch, iterated on the ranking model, and rolled out across 5 international markets with no major incidents on the US launch. $100M+ in incremental global revenue, $65M+ in the US alone.",
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
    headerLine: "Led a team of 9 product managers across the US, Canada, and Ireland. Built two distinct product pillars from scratch simultaneously.",
    pillars: [
      {
        name: "INTEROPERABILITY",
        vision: "Seamless, scalable experiences through full-stack orchestration.",
        description: "The job: Be the connective tissue for Workday's platform and ecosystem play. Started with Kernel (front-end orchestration) and expanded into back-end and data layers. The pitch to leadership was simple — Workday needed to stop being a suite and start being a platform. Interoperability was what made that possible.",
        covered: "90+ payroll partner integrations, acquired product integration (Evisort), skills cloud connectivity, marketplace infrastructure.",
      },
      {
        name: "DELIVERY",
        vision: "Force multiplier for UI Platform.",
        description: "North star metric: save developers time getting products to market. Consolidated fragmented CI infrastructure into GitHub Actions, built observability frameworks, established quality guardrails, divested proprietary systems that no longer belonged to the team.",
        principle: "Operating principle: time is the universal currency. Everything was measured against it.",
      },
    ],
    footerLine: "6 hires total across both pillars. 2 promoted. 2 managed out.",
    tags: ["Platform", "Interoperability", "Developer Experience", "Team Building", "GenAI", "Full-Stack Orchestration"],
    stat: { value: "9 PMs", color: "#14B8A6" }, // teal
  },
  {
    company: "NIKE",
    title: "Principal PM, HR Global Technology",
    dates: "2025–Present",
    color: "#5C9E6E", // Primary green - matches new primary
    narrative:
      "Back at Nike, this time in enterprise HR. Same problem, different domain: disconnected systems that slow people down every day. Rebuilt the U.S. onboarding journey. Consolidated document management from ServiceNow into Workday — saved hundreds of thousands in licensing. Automated California compliance workflows. Now shaping Nike's strategic workforce planning — connecting Workday, planning tools, and skills data across 75,000+ employees.",
    tags: ["Enterprise HR", "Workday", "Workforce Planning", "Automation"],
    stat: { value: "75K+ employees", color: "#5C9E6E" }, // accent green
  },
];

export function JourneySection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
            15 Years of Building Products
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

                  {/* Expandable narrative */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-out",
                      expandedIndex === index
                        ? "max-h-[800px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    )}
                  >
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
                        </div>
                      ) : (
                        <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">
                          {role.narrative}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
