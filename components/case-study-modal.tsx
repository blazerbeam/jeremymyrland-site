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
    <article className="max-w-[680px] mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
          Case Study
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          Nike Search Preview
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          How a platform team shipped a $50M feature they didn&apos;t own
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

      {/* The Situation */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Situation
        </h2>
        <p className="text-foreground leading-[1.8]">
          Nike.com search ran on legacy Endeca — thousands of manually curated rules, no ML, every result touched by a human. A decision was made to rebuild from scratch with an in-house ML system. I joined right as that decision was being made.
        </p>
      </section>

      {/* The Real Problem */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Real Problem
        </h2>
        <p className="text-foreground leading-[1.8]">
          The tech was the easy part. The real problem was organizational. Brand wanted control and storytelling — products placed for visual impact, full-price items front and center regardless of what consumers were actually searching for. Commerce wanted revenue and optimization. These teams had never had to agree on anything before. Now they had to agree on everything. And nobody trusted an algorithm they couldn&apos;t see into.
        </p>
      </section>

      {/* What I Did */}
      <section className="space-y-6">
        <h2 className="font-serif text-xl font-semibold text-primary">
          What I Did
        </h2>
        <p className="text-foreground leading-[1.8]">
          Three moves that mattered:
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              1. Built alignment before building anything.
            </h3>
            <p className="text-foreground leading-[1.8]">
              Got brand and commerce leadership to agree on shared OKRs before a line of code was written. Forced the conversation about what &ldquo;better&rdquo; actually meant. Without this, any result the algorithm produced would have been disputed.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              2. Demystified the black box.
            </h3>
            <p className="text-foreground leading-[1.8]">
              Built transparency tooling so stakeholders could see WHY specific products ranked where they did. Showed the signals, the weights, the logic. People don&apos;t trust what they can&apos;t see. Once they could see it, they could argue about it — which is actually progress.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              3. Shipped Search Preview without owning the front end.
            </h3>
            <p className="text-foreground leading-[1.8]">
              Saw that queries landing directly on a PDP converted at nearly 150% higher than search results pages. Wanted to capture that. Problem: I owned the platform, not the front end. That team was 12+ months out. So I got VP buy-in, borrowed engineers, and built it ourselves using our own services before they were fully hardened.
            </p>
            <p className="text-foreground leading-[1.8]">
              Right before launch, a VP got cold feet. Thought the experience was &ldquo;too different.&rdquo; I walked him through every brand conversation we&apos;d already had, showed him how quickly we could make changes, and reminded him he&apos;d been in the status meetings the whole time. He had cold feet. We launched anyway. No issues. Within days we were all looking at the next thing.
            </p>
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="space-y-6">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Numbers
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">$50M+</p>
            <p className="text-sm text-muted-foreground">incremental revenue in first few months</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">6%+</p>
            <p className="text-sm text-muted-foreground">conversion rate vs 3% baseline</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">85% → 5%</p>
            <p className="text-sm text-muted-foreground">manual merchandising of top queries</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">Hundreds</p>
            <p className="text-sm text-muted-foreground">of stakeholders with real-time reporting globally</p>
          </div>
        </div>
      </section>

      {/* The Lesson */}
      <section className="space-y-4 pb-8">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Lesson
        </h2>
        <p className="text-foreground leading-[1.8]">
          Alignment is the product. The algorithm was the easy part. The hard part was getting two organizations with genuinely different goals to build shared language around what success looked like — and then trust the system enough to let it run.
        </p>
      </section>
    </article>
  );
}

// Viewpoint Case Study Content
export function ViewpointCaseStudy() {
  return (
    <article className="max-w-[680px] mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
          Case Study
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          Rebuilding Trust in the Field
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          What happens when you sell a product before it&apos;s ready — and you&apos;re the only one who can fix it
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary">
            Viewpoint
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            2010–2012
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            International Expansion
          </span>
        </div>
      </header>

      <hr className="border-border" />

      {/* The Situation */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Situation
        </h2>
        <p className="text-foreground leading-[1.8]">
          A 20-year-old US construction ERP product — used by hundreds of complex companies for payroll, project management, and equipment tracking — was sold into Australia and Canada before it was ready. I was sent in as the first person on the ground in both countries. The product worked in the US. It didn&apos;t fully work there yet.
        </p>
      </section>

      {/* The Real Problem */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Real Problem
        </h2>
        <p className="text-foreground leading-[1.8]">
          The product gaps were fixable. The trust wasn&apos;t — at least not easily. Buyers felt misled. They&apos;d signed contracts based on what they were told the product could do, and what they got wasn&apos;t that. I was the first company representative many of them had met in person. I walked into rooms full of people who had every reason not to trust me or anyone I worked for.
        </p>
        <p className="text-foreground leading-[1.8]">
          The other problem: I had to figure out what actually mattered. Not everything on the gap list was equal. Some things were critical for their first tax season. Some things were nice-to-haves that could wait a year. Nobody had done this before for these markets, so nobody could tell me which was which. I had to learn it myself — from the customers.
        </p>
      </section>

      {/* What I Did */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          What I Did
        </h2>
        <p className="text-foreground leading-[1.8]">
          I showed up. In person. Multiple times. I sat with CEOs and CFOs. I sat with the people who would actually use the product every day. I asked what was keeping them up at night and I listened without defending the product.
        </p>
        <p className="text-foreground leading-[1.8]">
          Then I made a list of what absolutely had to work for their first tax season, their first major project close, their first regulatory deadline. Everything else went into a backlog with honest timelines. I stopped telling customers what they wanted to hear and started telling them what I could actually promise.
        </p>
        <p className="text-foreground leading-[1.8]">
          Internally I had to do the same thing — bring our product and engineering teams along on what actually mattered for these markets, and why some of what felt urgent in the US wasn&apos;t the right priority here. That required building credibility on two fronts simultaneously.
        </p>
      </section>

      {/* The Outcome */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Outcome
        </h2>
        <p className="text-foreground leading-[1.8]">
          Our first Australian customer went live, got through their first tax season, and became one of our strongest advocates. That one customer helped unlock momentum in the market. The quarter we went live in Australia was the largest selling quarter in company history — not just in Australia, but company-wide.
        </p>
        <p className="text-foreground leading-[1.8]">
          I still keep in touch with the CFO from that first customer.
        </p>
      </section>

      {/* The Lesson */}
      <section className="space-y-4 pb-8">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Lesson
        </h2>
        <p className="text-foreground leading-[1.8]">
          When trust is broken, the only currency that matters is honesty about what you can actually deliver. A realistic promise kept is worth more than an optimistic one missed. Showing up in person and saying &ldquo;here&apos;s what I can commit to and here&apos;s what I can&apos;t&rdquo; did more for those relationships than any roadmap or feature release.
        </p>
        <p className="text-foreground leading-[1.8]">
          It also taught me something I&apos;ve used in every role since: ruthless prioritization isn&apos;t about saying no to things — it&apos;s about being clear on what saying yes to one thing means you can&apos;t do another.
        </p>
      </section>
    </article>
  );
}
