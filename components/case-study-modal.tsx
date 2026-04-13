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

// Wayfair Case Study Content
export function WayfairCaseStudy() {
  return (
    <article className="max-w-[680px] mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
          Case Study
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          Neural Search at Scale
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Replacing Wayfair&apos;s legacy search engine across 5 markets without breaking anything
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary">
            Wayfair
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            2021–2022
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            Search Platform
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
          Wayfair&apos;s search platform was running on a legacy system that couldn&apos;t keep pace with the business. The task: replace it with a neural network-powered engine, validate it with real revenue impact, and roll it out across five international markets and brands. No pressure.
        </p>
      </section>

      {/* The Real Problem */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Real Problem
        </h2>
        <p className="text-foreground leading-[1.8]">
          Replacing a search engine isn&apos;t a technical problem — it&apos;s an organizational and trust problem. Wayfair had merchandisers, SEO teams, category managers, and regional GMs who all had opinions about search results and a lot of anxiety about handing control to an algorithm. The technical work was challenging. Getting 60+ people across multiple countries to trust the new system enough to let it run was harder.
        </p>
        <p className="text-foreground leading-[1.8]">
          The other real problem: we didn&apos;t fully know what &ldquo;better&rdquo; looked like until we were in it. The nearest neighbor algorithm we launched with needed adjustment. We had to build in enough experimentation infrastructure to catch that quickly and fix it without losing momentum.
        </p>
      </section>

      {/* What I Did */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          What I Did
        </h2>
        <p className="text-foreground leading-[1.8]">
          Built the A/B testing framework before we needed it. That was the foundational decision — we couldn&apos;t make claims about revenue impact without a rigorous way to measure it, and we couldn&apos;t iterate on the ranking model without fast feedback loops.
        </p>
        <p className="text-foreground leading-[1.8]">
          Worked closely with data science on the ranking model itself — defining which signals mattered for relevance, where business goals like margin and newness should come in, and how to balance personalization against consistency across markets.
        </p>
        <p className="text-foreground leading-[1.8]">
          Partnered with each international market&apos;s merchandising team before rollout, not after. Understood the regional nuances — what &ldquo;relevant&rdquo; meant in Germany vs the UK vs the US isn&apos;t the same. Built those inputs into the model rather than treating them as edge cases to handle later.
        </p>
        <p className="text-foreground leading-[1.8]">
          On the US launch: no diving catches. We planned for things to go wrong and they didn&apos;t. The contingency plans never had to be used, which meant the international rollouts could follow on the timeline we&apos;d promised.
        </p>
      </section>

      {/* The Numbers */}
      <section className="space-y-6">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Numbers
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">$100M+</p>
            <p className="text-sm text-muted-foreground">incremental global revenue</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">$65M+</p>
            <p className="text-sm text-muted-foreground">in the US alone</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">5 markets</p>
            <p className="text-sm text-muted-foreground">rolled out internationally</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">Mid-flight</p>
            <p className="text-sm text-muted-foreground">algorithm adjusted based on test results</p>
          </div>
        </div>
      </section>

      {/* The Lesson */}
      <section className="space-y-4 pb-8">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Lesson
        </h2>
        <p className="text-foreground leading-[1.8]">
          Experimentation infrastructure is not a nice-to-have. It&apos;s what lets you move fast without guessing. We could have launched and hoped. Instead we launched, measured, learned, and adjusted — and had the receipts to prove what worked. That&apos;s the difference between a successful platform migration and a lucky one.
        </p>
      </section>
    </article>
  );
}

// Jama Case Study Content
export function JamaCaseStudy() {
  return (
    <article className="max-w-[680px] mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
          Case Study
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          Finding the Right Customer
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          How market segmentation saved a startup from growing in the wrong direction
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary">
            Jama Software
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            2012–2016
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            0→1
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
          Jama was saying yes to everyone. Requirements management software for any company that would pay for it — small, large, simple, complex. I joined as their first PM when the company had fewer than 40 employees. We had around 10 large complex customers and 25-30 smaller ones. The CEO was still helping close deals. The sales team was immature. The product was being dog-fooded and shaped by whoever was loudest.
        </p>
      </section>

      {/* The Real Problem */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Real Problem
        </h2>
        <p className="text-foreground leading-[1.8]">
          The small customers looked like growth. They had shorter sales cycles and we were closing them. But when I did the analysis on who was renewing and what the unit economics looked like, the picture was different. Small customers churned. They cost almost as much to support as the large ones. And they were pulling the product in directions that didn&apos;t serve the complex use cases where we were actually winning.
        </p>
        <p className="text-foreground leading-[1.8]">
          The large customers — aerospace, defense, medical devices, automotive — were harder to close. But when we closed them, they stayed. And they had problems complex enough that our product actually mattered to them in a way it never would for a company that could just use Jira.
        </p>
      </section>

      {/* What I Did */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          What I Did
        </h2>
        <p className="text-foreground leading-[1.8]">
          Made the case for minimum deal sizes. That meant saying no to a category of customer we&apos;d been saying yes to, which is uncomfortable for any early-stage company with revenue pressure. Had to build the argument from data, not intuition — churn rates, support costs, renewal rates, lifetime value by segment.
        </p>
        <p className="text-foreground leading-[1.8]">
          Then shifted focus to the segments where we had real defensibility. Automotive was the most interesting — Tesla was becoming a major player, companies like Faraday Future were promising full autonomy. The regulatory requirements for automotive electronics software were intense, and nobody in our space was set up to serve them well.
        </p>
        <p className="text-foreground leading-[1.8]">
          I identified ISO 26262 — a critical certification for automotive electronics development — as the key unlock. Competitors had it. We didn&apos;t. Prospects weren&apos;t always asking for it upfront, but it was becoming a deal-stopper at contract time. I got a quote from TUV SUD (the leading certification body, based in Europe), built the business case, and convinced the executive team and board to invest in the certification process.
        </p>
        <p className="text-foreground leading-[1.8]">
          We were the first agile SaaS company they had ever certified. Their process wasn&apos;t designed for how we worked — I had to work with them to adapt their surveys and audit approach. Then coordinated the internal audit process across the whole org.
        </p>
      </section>

      {/* The Outcome */}
      <section className="space-y-6">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Outcome
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">5x</p>
            <p className="text-sm text-muted-foreground">automotive pipeline growth in one quarter</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">10,000</p>
            <p className="text-sm text-muted-foreground">decisions logged in month one of new feature</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">#1</p>
            <p className="text-sm text-muted-foreground">fastest-growing startup in Oregon</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">First</p>
            <p className="text-sm text-muted-foreground">agile SaaS company ISO 26262 certified</p>
          </div>
        </div>
        <p className="text-foreground leading-[1.8]">
          I also launched a decision-tracking feature during this period — zero to one, built with our design and research team — that logged 10,000 decisions in its first month. Customers immediately started asking for it in other parts of the product.
        </p>
      </section>

      {/* The Lesson */}
      <section className="space-y-4 pb-8">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Lesson
        </h2>
        <p className="text-foreground leading-[1.8]">
          Growth in the wrong direction is worse than slow growth. Saying no to a customer type you&apos;ve been successfully closing requires conviction and data. The data was there — we just hadn&apos;t looked at it the right way. Once we did, the path was clear: go deep on the customers who actually needed us, and become the best possible solution for problems complex enough that nobody else wanted to solve them.
        </p>
      </section>
    </article>
  );
}

// Workday Case Study Content
export function WorkdayCaseStudy() {
  return (
    <article className="max-w-[680px] mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
          Case Study
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          Building the Team Before Building the Product
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          What it actually takes to lead a platform PM team with no direction, no trust, and no identity
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary">
            Workday
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            2022–2025
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            Platform
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
            Team Leadership
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
          When I joined Workday as a Manager of Platform Product Management, I inherited a team of three people. No shared direction. No product identity. No trust in the roadmap or in each other. The org had a name — UI Platform — but nobody could tell you what it stood for or why it mattered.
        </p>
        <p className="text-foreground leading-[1.8]">
          My job on paper was to lead the Interoperability and Delivery pillars. My real job was to build a team that could do the work first.
        </p>
      </section>

      {/* The Real Problem */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Real Problem
        </h2>
        <p className="text-foreground leading-[1.8]">
          Platform PM is a hard job to hire for and a harder job to manage. The work is invisible — you&apos;re not shipping features customers can see, you&apos;re building the connective tissue that makes everything else possible. Without a clear story for why that matters, teams drift. Engineers lose faith in product. Product loses credibility with engineering. And everyone loses the plot.
        </p>
        <p className="text-foreground leading-[1.8]">
          That&apos;s where I started. Two of the original three people weren&apos;t working out. The team had no vision document, no operating model, no way of measuring whether what they were doing mattered. And Workday was simultaneously pushing hard to become a platform — which meant the stakes for getting interoperability right were only going up.
        </p>
      </section>

      {/* What I Did */}
      <section className="space-y-6">
        <h2 className="font-serif text-xl font-semibold text-primary">
          What I Did
        </h2>
        <p className="text-foreground leading-[1.8]">
          Three things in parallel, and order mattered.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              1. Established identity before strategy.
            </h3>
            <p className="text-foreground leading-[1.8]">
              Before we could have a roadmap, we needed to know who we were. I led sessions to build our team identity — what we stood for, how we operated, what good looked like. This sounds soft. It wasn&apos;t. Without it, every prioritization conversation became a political fight. With it, we had a shared language for tradeoffs.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              2. Built the vision from the bottom up, then sold it from the top down.
            </h3>
            <p className="text-foreground leading-[1.8]">
              The Kernel/Megatron vision — making architectural boundaries invisible to users and frictionless for developers — came from the team doing the work, not from me. My job was to help them articulate it, push it up to VP level, and create the conditions for leadership to champion it. When Patrick (VP) started using our documentation as an example of what &ldquo;good looks like,&rdquo; that was the signal we&apos;d gotten the flywheel moving. A former detractor became one of our strongest advocates.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              3. Coached relentlessly on the things platform PMs don&apos;t naturally do: influence, visibility, and product marketing.
            </h3>
            <p className="text-foreground leading-[1.8]">
              Technical platform work tends to stay hidden. I pushed every person on my team to get out of their 1:1s and into the broader organization — share what they were learning, make the work visible, build allies. One PM let a customer champion take credit for messaging she&apos;d written, because she recognized it would land better coming from them. That&apos;s sophisticated thinking. I tried to build that into how the whole team operated.
            </p>
          </div>
        </div>

        <p className="text-foreground leading-[1.8]">
          On the managed-out side: I had to make two difficult calls early. Both people left on good terms. Making those calls quickly was one of the most important things I did — it cleared the way for the people who could do the work.
        </p>
      </section>

      {/* The Outcomes */}
      <section className="space-y-6">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Outcomes
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">3 → 9</p>
            <p className="text-sm text-muted-foreground">PMs across US, Canada, and Ireland</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">6 hires</p>
            <p className="text-sm text-muted-foreground">4 of them women, in a hard-to-hire space</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">90+</p>
            <p className="text-sm text-muted-foreground">payroll partner integrations on Kernel</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-2xl font-semibold text-primary">7–8.5/10</p>
            <p className="text-sm text-muted-foreground">team satisfaction during uncertainty</p>
          </div>
        </div>
        <p className="text-foreground leading-[1.8]">
          The Kernel platform went from an internal tool to the connective tissue for Workday&apos;s ecosystem play — universal header for acquisitions, mobile web view platform, first GenAI chatbot strategy established. WebView Extend launched to all customers after a successful early access program. CI test time cut 50% through code migrations. GitHub Actions migration reduced pipeline failures and freed up developer capacity.
        </p>
      </section>

      {/* The Lesson */}
      <section className="space-y-4 pb-8">
        <h2 className="font-serif text-xl font-semibold text-primary">
          The Lesson
        </h2>
        <p className="text-foreground leading-[1.8]">
          Platform product management lives or dies on trust — trust between product and engineering, trust between the team and leadership, and trust that the invisible work actually matters. You can&apos;t build a platform strategy without first building the conditions for people to do the work. That took about a year. Everything after that was leverage.
        </p>
      </section>
    </article>
  );
}
