"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type WritingCard = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export function WritingSection({ posts }: { posts: WritingCard[] }) {
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
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={cn(
                "group transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <Link
                href={`/writing/${post.slug}`}
                className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow"
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
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
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/writing"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            All writing →
          </Link>
        </div>
      </div>
    </section>
  );
}
