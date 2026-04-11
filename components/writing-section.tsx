"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const articles = [
  {
    title: "The black box problem: why search teams need transparency tooling",
    teaser:
      "When your search algorithm makes decisions, everyone needs to understand why — especially when revenue is on the line.",
    link: "#",
  },
  {
    title:
      "What building bethere.community taught me about volunteer coordination",
    teaser:
      "The real problem isn't finding volunteers. It's matching the right people to the right opportunities at the right time.",
    link: "#",
  },
  {
    title: "Orchestration vs. feature shipping: the distinction that matters",
    teaser:
      "Most product managers build features. The best ones build systems that make features work together.",
    link: "#",
  },
];

export function WritingSection() {
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
      id="writing"
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/30"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            How I Think
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={cn(
                "group cursor-pointer transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {article.teaser}
                </p>
                <a
                  href={article.link}
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
