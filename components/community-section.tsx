"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const communityItems = [
  {
    title: "Lake Oswego Schools Foundation",
    role: "Board Member",
    description:
      "Secretary year one. Led procurement for annual gala (which led to building inkind.one). Incoming Vice President.",
  },
  {
    title: "Forest Hills PTO",
    role: "Vice President",
    description: "Incoming President.",
  },
  {
    title: "Special Olympics Oregon",
    role: "Super Plunger",
    description: "Raised $10,000+. Unified softball player.",
  },
  {
    title: "Habitat for Humanity",
    role: "Volunteer",
    description: "House builds.",
  },
  {
    title: "High School Leadership",
    role: "Student Leader",
    description: "ASB Treasurer, FBLA President, School Newspaper Editor.",
  },
  {
    title: "Oregon State University",
    role: "Campus Involvement",
    description:
      "Ran for ASOSU President. Endorsed by The Daily Barometer student newspaper.",
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
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Community
          </span>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            I&apos;ve been showing up and taking on more responsibility in every
            community I&apos;ve been part of. That&apos;s not a coincidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "border border-border rounded-xl p-6 bg-card/50 transition-all duration-700 ease-out hover:shadow-md",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h3 className="font-serif font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    {item.role}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Photos */}
        <div
          className={cn(
            "mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-700 ease-out delay-500",
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

        <p
          className={cn(
            "mt-12 text-center text-muted-foreground italic transition-all duration-700 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Someday: school board. Maybe city council. We&apos;ll see where it goes.
        </p>
      </div>
    </section>
  );
}
