"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const communityItems = [
  {
    name: "LAKE OSWEGO SCHOOLS FOUNDATION",
    description: "Secretary → Procurement Lead → incoming VP. The gala work led to building inkind.one.",
    color: "#5C9E6E", // green
  },
  {
    name: "FOREST HILLS PTO",
    description: (
      <>
        Vice President, incoming President.{" "}
        <a
          href="https://fhpto.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Forest Hills Elementary
        </a>
        , Lake Oswego.
      </>
    ),
    color: "#14B8A6", // teal
  },
  {
    name: "CHILDREN'S CANCER ASSOCIATION",
    description: "Chemo Pal Mentor — one-on-one support for kids in cancer treatment.",
    color: "#F59E0B", // amber
  },
  {
    name: "SPECIAL OLYMPICS OREGON",
    description: "Super Plunger ($10,000+ raised). Unified softball teammate.",
    color: "#8AB4C7", // slate blue
  },
  {
    name: "HABITAT FOR HUMANITY",
    description: "House builds.",
    color: "#A875C9", // muted purple
  },
  {
    name: "YOUNG ENTREPRENEURS BUSINESS WEEK",
    description: "Company Advisor.",
    color: "#E9A033", // orange
  },
];

export function CommunitySection() {
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
    <section id="community" ref={sectionRef} className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Community
          </span>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            I&apos;ve been showing up and taking on more responsibility in every
            community I&apos;ve been part of. That&apos;s not a coincidence.
          </p>
        </div>

        {/* 2x3 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {communityItems.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "bg-card border border-border rounded-lg p-5 transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{ 
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                borderLeftWidth: '3px',
                borderLeftColor: item.color,
              }}
            >
              <h3 className="font-serif text-sm font-semibold text-foreground tracking-wide">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Community Photos */}
        <div
          className={cn(
            "mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center max-w-xl mx-auto transition-all duration-700 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Gala Photo */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden" style={{ width: '240px', height: '240px' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gala-kHYr0mpcYNjCHvMsVjNDLnRBDUULUW.jpeg"
                alt="Jeremy Myrland with Congressman Earl Blumenauer at the Annual OMSI Gala"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-center">
              With Congressman Earl Blumenauer at the Annual OMSI Gala
            </p>
          </div>

          {/* Blazers Photo */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden" style={{ width: '240px', height: '240px' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blazers-0WMhjY7frE309gKTApm9AEdAHf6VcU.jpeg"
                alt="Jeremy Myrland with his kids at a Portland Trail Blazers game"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-center">
              Rip City.
            </p>
          </div>
        </div>

        {/* Leadership Thread */}
        <p
          className={cn(
            "mt-12 text-center text-muted-foreground italic leading-relaxed transition-all duration-700 ease-out delay-600",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Leadership has been a thread since early on — student government, campus organizing, always finding the thing that needed doing and jumping in.
        </p>

        {/* Someday line */}
        <p
          className={cn(
            "mt-4 text-center text-sm text-muted-foreground transition-all duration-700 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Someday: school board. Maybe city council. We&apos;ll see where it goes.
        </p>
      </div>
    </section>
  );
}
