"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Education
          </span>
        </div>

        <div
          className={cn(
            "bg-card border border-border rounded-lg p-6 transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
          style={{
            borderLeftWidth: "3px",
            borderLeftColor: "#DC4405", // Oregon State orange
          }}
        >
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Oregon State University
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            B.S. Business Administration (Accounting), Minor in Speech Communications
          </p>
          <p className="mt-4 text-sm text-primary/80 leading-relaxed">
            <span className="font-medium">Ford Family Scholar</span> — full-ride scholarship awarded by the Ford Family Foundation to Oregon students who demonstrate resilience, hard work, and potential. One of up to 120 awarded statewide each year.
          </p>
        </div>
      </div>
    </section>
  );
}
