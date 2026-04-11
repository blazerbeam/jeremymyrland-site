"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "bethere.community",
    url: "https://bethere.community",
    problem:
      "I was running our school PTO and watched the same thing happen every year — parents get blasted with generic volunteer asks, most ignore them, and the same five people end up doing everything. The matching problem seemed solvable.",
    solution:
      "Answer a few questions, get matched to opportunities that actually fit your life. First real thing I've ever shipped.",
    builtWith: "Claude AI, v0, and Vercel",
  },
  {
    name: "inkind.one",
    url: "https://inkind.one",
    problem:
      "I ran procurement for our school foundation's annual gala. The whole process lived in spreadsheets, email chains, and people's heads. Donor outreach was inconsistent, ownership was unclear, and nothing was trackable.",
    solution:
      "One place for sourcing items, tracking outreach, managing packages, and generating donor emails with AI. Second thing I've ever shipped.",
    builtWith: "Claude AI, v0, and Vercel",
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
                "bg-card border border-border rounded-xl p-6 sm:p-8 transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              {/* Project Name + Tag */}
              <div className="flex items-start justify-between mb-6">
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
                <span className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground bg-secondary px-2 py-1 rounded whitespace-nowrap ml-4">
                  Experiment in progress
                </span>
              </div>

              {/* Problem section */}
              <div className="mb-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  Problem I faced
                </span>
                <blockquote className="mt-2 border-l-2 border-primary pl-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {project.problem}
                </blockquote>
              </div>

              {/* Solution section */}
              <div className="mb-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  What I built
                </span>
                <blockquote className="mt-2 border-l-2 border-primary pl-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {project.solution}
                </blockquote>
              </div>

              {/* Built with */}
              <div className="pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">
                  <span className="font-semibold">Built with:</span>{" "}
                  {project.builtWith}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Open Source Line */}
        <p
          className={cn(
            "mt-10 text-center text-sm text-muted-foreground transition-all duration-700 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          All projects are open source.{" "}
          <a
            href="https://github.com/blazerbeam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/blazerbeam
          </a>
        </p>
      </div>
    </section>
  );
}
