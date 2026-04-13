"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CaseStudyModal, NikeSearchCaseStudy, ViewpointCaseStudy, WayfairCaseStudy, JamaCaseStudy, WorkdayCaseStudy } from "./case-study-modal";

const workHistory = [
  {
    company: "Nike",
    title: "Principal PM, HR Global Technology",
    dates: "2025–Present",
    summary:
      "Redesigning enterprise HR systems for 75,000+ employees across retail, corporate, and supply chain.",
    outcomes: [
      "Rebuilt U.S. onboarding journey — reduced steps and shortened time to productivity",
      "Consolidated document management from ServiceNow into Workday — saved hundreds of thousands in annual licensing costs",
      "Automated California meal waiver compliance — reduced regulatory overhead and ongoing costs",
    ],
  },
  {
    company: "Workday",
    title: "Manager, Platform Product Management",
    dates: "2022–2025",
    summary:
      "Led global team of 9 PMs across US, Canada, Ireland building the connective tissue for Workday's platform ecosystem.",
    outcomes: [
      "Defined interoperability vision adopted across 90+ payroll partner integrations",
      "Built and shipped first GenAI chatbot strategy",
      "Made 6 hires, promoted 2, managed a team across 3 countries",
    ],
    caseStudyId: "workday",
  },
  {
    company: "Wayfair",
    title: "Associate Director, Search Platform",
    dates: "2021–2022",
    summary:
      "Launched neural network-powered search replacing a legacy system.",
    outcomes: [
      "$100M+ in incremental global revenue",
      "$65M+ in the US alone",
      "Rolled out across 5 international markets",
    ],
    caseStudyId: "wayfair",
  },
  {
    company: "Constructor",
    title: "Senior Product Manager",
    dates: "2020–2021",
    summary:
      "Early employee at a search startup. Focused on growth and getting customers live fast.",
    outcomes: [
      "Built pre-sales \"try it out\" tool — doubled trial engagement by letting prospects compare their legacy search directly against Constructor",
      "Cut customer onboarding from months to days by standardizing implementation workflows",
      "Helped land early customers including Sephora and Target Australia",
    ],
  },
  {
    company: "Apple",
    title: "Senior PM, Search Experience",
    dates: "2020–2021",
    summary:
      "Defined Apple's unified search strategy across retail, support, apps, and Siri.",
    outcomes: [
      "Established 3-year federated search roadmap — bought in across product, ML, and marketing in a highly top-down environment",
      "Connected search experiences across Apple.com, Apple Store app, Help, and Siri into a unified strategy for the first time",
      "Partnered with ML team to deploy predictive, context-aware results using collaborative filtering and relevance models",
    ],
  },
  {
    company: "Nike",
    title: "Senior PM, Search",
    dates: "2016–2020",
    summary:
      "Led migration from legacy Endeca to ML-driven search platform.",
    outcomes: [
      "Search Preview drove $50M+ incremental revenue in first few months",
      "6%+ conversion vs 3% baseline",
      "Reduced manual merchandising from ~85% to ~5% of top queries",
    ],
    caseStudyId: "nike-search",
  },
  {
    company: "Jama Software",
    title: "Product Manager",
    dates: "2012–2016",
    summary: "First PM at Jama — 10,000 decisions logged in month one.",
    outcomes: [
      "First agile company ISO 26262 certified for automotive",
      "5x pipeline growth in one quarter",
    ],
    caseStudyId: "jama",
  },
  {
    company: "Viewpoint",
    title: "International Product Manager",
    dates: "2010–2012",
    summary: "Launched a 20-year-old US ERP product in Australia and Canada.",
    outcomes: [
      "First customer went live and became strongest advocate",
      "Largest selling quarter in company history",
    ],
    caseStudyId: "viewpoint",
  },
];

export function WorkSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
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

  return (
    <section id="work" ref={sectionRef} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            The Work
          </span>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            The through-line across every role is the same: take something
            broken or disconnected, figure out why it&apos;s not working, and fix it
            at the system level — not just the surface.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {workHistory.map((role, index) => (
              <div
                key={index}
                data-index={index}
                className={cn(
                  "relative md:pl-20 transition-all duration-700 ease-out",
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary hidden md:block" />

                <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {role.company}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {role.title}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {role.dates}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{role.summary}</p>

                  <ul className="space-y-2">
                    {role.outcomes.map((outcome, outcomeIndex) => (
                      <li
                        key={outcomeIndex}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  {/* Case Study Link */}
                  {role.caseStudyId && (
                    <button
                      onClick={() => setCaseStudyOpen(role.caseStudyId)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
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
