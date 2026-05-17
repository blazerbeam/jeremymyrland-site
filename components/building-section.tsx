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
  {
    name: "fhpto.org",
    url: "https://fhpto.org",
    github: "https://github.com/blazerbeam/v0-forest-hills-pto-website",
    problem:
      "The Forest Hills PTO \"site\" was a district compliance page. Dense, ugly, useless to the parents it was supposed to serve. Layer on a weekly newsletter that overwhelms more than it informs, and new families had nowhere good to start. The spring survey was blunt: parents want to help but don't know how.",
    solution:
      "A parent-friendly site built around what a busy parent needs in 30 seconds. What's this week. What's the year look like. Who runs this. How do I get involved. Calendar is authoritative enough to plan around. An \"at a glance\" page fits the entire PTO on one screen. Two evenings, about 8 hours total.",
    builtWith: "Claude AI, v0, and Vercel",
  },
  {
    name: "pairwise.one",
    url: "https://pairwise.one",
    tagline: "Prioritization made simple. Compare two things at a time.",
    problem:
      "A pairwise comparison tool for groups. Instead of ranking ten things on a whiteboard, you compare two at a time until the math sorts out a ranking and a 2D plot sorts out which ones are quick wins and which are big bets.",
    solution:
      "The deeper story is what the rebuild itself proved. The original version of this product was a two-week team effort at Jama in 2015 that never shipped. I rebuilt it solo in 2026 over a few evening sessions. The first 80% of the work is genuinely transformed by AI tooling. The last 20% is where judgment takes over.",
    builtWith: "Claude AI, v0, and Vercel",
    storyLink: "/writing/the-wall-that-killed-array",
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
      className="py-24 px-4 sm:px-6 bg-secondary/30 overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl w-full">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={cn(
                "bg-card border border-border rounded-xl p-5 sm:p-8 transition-all duration-700 ease-out max-w-full",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              {/* Project Name + Tag */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  {project.name}
                  <svg
                    className="w-4 h-4 flex-shrink-0"
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
                <span className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground bg-secondary px-2 py-1 rounded whitespace-nowrap self-start">
                  Experiment in progress
                </span>
              </div>

              {/* Tagline (for Pairwise) */}
              {"tagline" in project && project.tagline && (
                <p className="mb-5 text-sm sm:text-base text-muted-foreground italic">
                  {project.tagline}
                </p>
              )}

              {/* Problem section */}
              <div className="mb-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  {"tagline" in project ? "What it does" : "Problem I faced"}
                </span>
                <blockquote className="mt-2 border-l-2 border-primary pl-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {project.problem}
                </blockquote>
              </div>

              {/* Solution section */}
              <div className="mb-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  {"tagline" in project ? "The deeper story" : "What I built"}
                </span>
                <blockquote className="mt-2 border-l-2 border-primary pl-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {project.solution}
                </blockquote>
                {"storyLink" in project && project.storyLink && (
                  <a
                    href={project.storyLink}
                    className="mt-3 inline-block text-sm text-[#5C9E6E] hover:underline"
                  >
                    Read the full story →
                  </a>
                )}
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
