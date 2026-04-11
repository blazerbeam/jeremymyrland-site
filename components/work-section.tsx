"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const workHistory = [
  {
    company: "Nike",
    title: "Principal PM, HR Global Technology",
    dates: "2025–Present",
    summary:
      "Redesigning enterprise HR systems for 75,000+ employees.",
    outcomes: [
      "Rebuilt U.S. onboarding journey — fewer steps, faster productivity",
      "Consolidated document systems — saved hundreds of thousands in licensing",
      "Automated California compliance workflows",
    ],
  },
  {
    company: "Workday",
    title: "Manager, Platform Product Management",
    dates: "2022–2025",
    summary:
      "Led global team of 5–9 PMs across US, Canada, Ireland building the connective tissue for Workday's platform ecosystem.",
    outcomes: [
      "Defined interoperability vision adopted across 90+ payroll partner integrations",
      "Built and shipped first GenAI chatbot strategy",
      "Made 6 hires, promoted 2, managed a team across 3 countries",
    ],
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
  },
  {
    company: "Apple",
    title: "Senior PM, Search Experience",
    dates: "2020–2021",
    summary:
      "Defined federated search strategy across Apple retail, support, apps, and Siri.",
    outcomes: [
      "3-year roadmap established and bought in across a highly top-down organization",
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
  },
  {
    company: "Earlier",
    title: "Jama (2012–2016) & Viewpoint (2010–2012)",
    dates: "2010–2016",
    summary: "First PM at Jama — 10,000 decisions logged in month one.",
    outcomes: [
      "First agile company ISO 26262 certified for automotive",
      "5x pipeline growth in one quarter",
    ],
  },
];

export function WorkSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
