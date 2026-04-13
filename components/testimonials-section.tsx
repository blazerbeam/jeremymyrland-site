"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Jeremy led the organization's largest investment in upgrading our global search platform. This upgrade generated over $100M in incremental revenue.",
    name: "Stephen Jacobs",
    title: "Senior Director of Product Management, The Knot Worldwide",
  },
  {
    quote:
      "He grew Nike Search revenue to higher levels significantly sooner than we ever imagined possible.",
    name: "Dan Wakefield",
    title: "Director of Technology, Nike",
  },
  {
    quote:
      "Jeremy knows no fear and is willing to make the tough calls that so many product managers evade. This is why development teams love him.",
    name: "Eva Miller",
    title: "User Experience Researcher, Brainola",
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          className={cn(
            "mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            What Others Say
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-foreground">
            Recommendations
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-card border border-border rounded-lg p-6 border-l-2 border-l-primary transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{
                transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms",
              }}
            >
              {/* Quote */}
              <blockquote className="text-sm sm:text-base text-foreground leading-relaxed mb-5">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <footer className="pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {testimonial.title}
                  {testimonial.context && (
                    <span className="text-muted-foreground/70">
                      {" "}
                      ({testimonial.context})
                    </span>
                  )}
                </p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
