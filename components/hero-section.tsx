"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={cn(
              "lg:col-span-3 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              I make complex systems actually work.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              15 years of product leadership at Nike, Workday, Wayfair, and Apple — across consumer search, enterprise HR, developer platforms, and ecommerce. I specialize in orchestration: taking fragmented systems, teams, and workflows and making them actually produce outcomes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
              >
                <a href="#work">See My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-foreground/40 md:border md:border-foreground/20 hover:bg-secondary font-medium px-8 text-base md:text-sm"
              >
                <a href="#building">What I&apos;m Building</a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-border/50 max-w-xl">
              <div className="text-center sm:px-4 first:sm:pl-0 last:sm:pr-0">
                <p className="text-2xl sm:text-3xl font-semibold text-primary">$150M+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Revenue Impact</p>
              </div>
              <div className="text-center sm:px-4">
                <p className="text-2xl sm:text-3xl font-semibold text-primary">75K+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Employees Served</p>
              </div>
              <div className="text-center sm:px-4">
                <p className="text-2xl sm:text-3xl font-semibold text-primary">9</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">PMs Led</p>
              </div>
              <div className="text-center sm:px-4 last:sm:pr-0">
                <p className="text-2xl sm:text-3xl font-semibold text-primary">15</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Headshot */}
          <div
            className={cn(
              "lg:col-span-2 flex justify-center lg:justify-end transition-all duration-700 ease-out delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border" />
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot-hHgHPVf6CZiheNfE43flBj5RQXLtBl.jpeg"
                  alt="Jeremy Myrland - Senior Product Leader"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#journey"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50 hover:text-primary/70 transition-colors"
        aria-label="Scroll to Journey section"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ animationDuration: "2s" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
