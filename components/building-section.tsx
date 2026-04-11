"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "bethere.community",
    description:
      "Volunteer matching tool for school PTOs. Parents answer a few questions, get matched to opportunities that fit their schedule and interests. Includes admin dashboard for committee and event management.",
    link: "https://bethere.community",
  },
  {
    name: "inkind.one",
    description:
      "Nonprofit gala auction procurement app. Replaces spreadsheet chaos with clear ownership, flexible item packaging, and AI-generated donor outreach emails. Currently in early access.",
    link: "https://inkind.one",
  },
];

export function BuildingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="building"
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/30"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            What I&apos;m Building
          </span>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            I&apos;m a PM who actually ships. These are real products, live on the
            internet, built nights and weekends because I genuinely like solving
            these problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={cn(
                "bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
                index === 1 && "delay-150"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <Button
                asChild
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Site
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
