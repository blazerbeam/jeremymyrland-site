"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "bethere.community",
    url: "https://bethere.community",
    problem:
      "Running a PTO, I watched parents get asked to volunteer with zero context on what was actually needed or whether it fit their life.",
    solution:
      "A matching tool where parents answer a few questions and get connected to opportunities that fit their schedule and interests.",
    builtWith: "Next.js, Vercel, Claude AI, v0.dev",
  },
  {
    name: "inkind.one",
    url: "https://inkind.one",
    problem:
      "Leading procurement for a nonprofit gala, I watched the whole process fall apart across spreadsheets, emails, and tribal knowledge.",
    solution:
      "An auction procurement app with clear ownership, flexible item packaging, and AI-generated donor outreach — single source of truth.",
    builtWith: "Next.js, Vercel, Claude AI, v0.dev",
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
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            What I&apos;m Building
          </span>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            I&apos;ve never taken a CS class. Never written a line of code on my own.
            For most of my career, ideas died because I couldn&apos;t get developer
            time fast enough. Generative AI changed that. Now I can go from problem
            to working product in days, not quarters. These aren&apos;t businesses
            yet — they&apos;re real experiments built to solve real problems I&apos;ve
            actually lived. And honestly, I&apos;m still getting used to how fast
            this moves.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={cn(
                "bg-card border border-border rounded-xl p-6 sm:p-8 transition-all duration-700 ease-out flex flex-col",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              {/* Project Name + Link */}
              <div className="flex items-center justify-between mb-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  {project.name}
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <span className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground bg-secondary px-2 py-1 rounded">
                  Experiment in progress
                </span>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary/80">
                  Problem I faced
                </span>
                <p className="mt-1 text-sm text-foreground/90 leading-relaxed border-l-2 border-primary/30 pl-3">
                  &ldquo;{project.problem}&rdquo;
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary/80">
                  What I built
                </span>
                <p className="mt-1 text-sm text-foreground/90 leading-relaxed border-l-2 border-primary/30 pl-3">
                  &ldquo;{project.solution}&rdquo;
                </p>
              </div>

              {/* Built With */}
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary/80">
                  Built with
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.builtWith}
                </p>
              </div>

              {/* Spacer to push footer to bottom */}
              <div className="flex-1" />

              {/* Footer link */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  Want to know more about who built this?{" "}
                  <a
                    href="https://jeremymyrland.com"
                    className="text-primary hover:underline"
                  >
                    jeremymyrland.com
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className={cn(
            "mt-12 text-center text-sm text-muted-foreground italic transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
        >
          More experiments coming. This is what happens when a PM finally gets a coding superpower.
        </p>
      </div>
    </section>
  );
}
