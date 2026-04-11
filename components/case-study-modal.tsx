"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function CaseStudyModal({ isOpen, onClose, children }: CaseStudyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] max-w-4xl",
          "bg-background border-l border-border shadow-2xl",
          "transform transition-transform duration-500 ease-out",
          "overflow-y-auto focus:outline-none",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-6 right-6 float-right mr-6 mt-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors z-10"
          aria-label="Close case study"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="px-6 sm:px-10 lg:px-16 py-12 max-w-[800px] mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}

// Nike Search Preview Case Study Content
export function NikeSearchCaseStudy() {
  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
          Case Study
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          Nike Search Preview
        </h1>
        <p className="text-lg text-muted-foreground">
          How a single feature drove $50M+ in incremental revenue
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary">
            Nike
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            2016–2020
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            ML Search
          </span>
        </div>
      </header>

      <hr className="border-border" />

      {/* Placeholder sections - to be filled in */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          The Context
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          [Content coming soon]
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          The Problem
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          [Content coming soon]
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          The Approach
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          [Content coming soon]
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          The Outcome
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          [Content coming soon]
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          What I Learned
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          [Content coming soon]
        </p>
      </section>
    </article>
  );
}
