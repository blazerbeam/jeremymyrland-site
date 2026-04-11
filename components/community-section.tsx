"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const communityItems = [
  {
    name: "LAKE OSWEGO SCHOOLS FOUNDATION",
    description: "Board Member. Secretary → Procurement Lead → incoming VP. Led the gala procurement process that inspired inkind.one.",
  },
  {
    name: "FOREST HILLS PTO",
    description: "Vice President, incoming President. Forest Hills Elementary, Lake Oswego.",
  },
  {
    name: "CHILDREN'S CANCER ASSOCIATION",
    description: "Chemo Pal Mentor. One-on-one support for kids going through cancer treatment.",
  },
  {
    name: "SPECIAL OLYMPICS OREGON",
    description: "Super Plunger — raised $10,000+. Unified softball teammate.",
  },
  {
    name: "HABITAT FOR HUMANITY",
    description: "House builds.",
  },
  {
    name: "YOUNG ENTREPRENEURS BUSINESS WEEK",
    description: "Company Advisor.",
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

        {/* Editorial List */}
        <div className="space-y-8">
          {communityItems.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
            >
              <h3 className="font-serif text-base font-semibold text-foreground tracking-wide">
                {item.name}
              </h3>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className={cn(
            "mt-16 mb-10 h-px bg-border transition-all duration-700 ease-out delay-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Leadership Thread */}
        <p
          className={cn(
            "text-muted-foreground italic leading-relaxed transition-all duration-700 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Leadership has been a thread since early on — student government, campus organizing, always finding the thing that needed doing and jumping in.
        </p>

        {/* Someday line */}
        <p
          className={cn(
            "mt-4 text-sm text-muted-foreground transition-all duration-700 ease-out delay-600",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Someday: school board. Maybe city council. We&apos;ll see where it goes.
        </p>

        {/* Community Photos */}
        <div
          className={cn(
            "mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-700 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Gala Photo */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-80 rounded-xl overflow-hidden border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gala-kHYr0mpcYNjCHvMsVjNDLnRBDUULUW.jpeg"
                alt="Jeremy Myrland with Congressman Earl Blumenauer at the Lake Oswego Schools Foundation Annual Gala"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-center max-w-xs">
              With Congressman Earl Blumenauer at the Lake Oswego Schools Foundation Annual Gala
            </p>
          </div>

          {/* Blazers Photo */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-72 rounded-xl overflow-hidden border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blazers-0WMhjY7frE309gKTApm9AEdAHf6VcU.jpeg"
                alt="Jeremy Myrland with his kids at a Portland Trail Blazers game"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-center">
              Rip City.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
