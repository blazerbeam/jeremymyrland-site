"use client";

import { useEffect } from "react";

// Single source of truth for the résumé. Add a role, bullet, or skill here and
// both the on-screen page and the printed/downloaded PDF update. No static PDFs.

const experience = [
  {
    company: "Roost",
    title: "Founder",
    dates: "2026–Present",
    bullets: [
      "Built a modern parent directory replacing the incumbent (DirectorySpot), solo: the Postgres data model and row-level security, the Next.js web app, and native iOS and Android apps.",
      "Shipped it with AI coding agents, MCP tooling, and CLIs — no CS background — while working full time at Nike.",
      "Five school customers signed across elementary, middle, and high school, covering about 1,700 families on web and mobile, plus the district education foundation.",
    ],
  },
  {
    company: "Nike",
    title: "Principal PM, HR Global Technology",
    dates: "2025–Present",
    bullets: [
      "Own product strategy for an enterprise HR platform serving 75,000+ employees across retail, corporate, and supply chain, with Workday as the system of record.",
      "Drove platform consolidation and automation: collapsed document management into Workday, eliminating redundant tooling and saving hundreds of thousands in annual licensing.",
      "Build intake and prioritization frameworks and outcome-based metrics tied to self-service adoption and process efficiency.",
      "Introduced manager-facing workflow intelligence and proactive recommendations to reduce HR support escalations.",
    ],
  },
  {
    company: "Workday",
    title: "Manager, Platform Product Management",
    dates: "2022–2025",
    bullets: [
      "Built two PM teams from scratch simultaneously; grew the Interoperability team from 3 to 9 PMs across the US, Canada, and Ireland.",
      "Defined the vision and roadmap for the platform as Workday's ecosystem connective tissue: 90+ payroll partner API integrations, a universal header for acquisitions, and a mobile web view platform.",
      "Ran Delivery as a force multiplier for UI Platform: GitHub Actions CI consolidation, observability frameworks, and quality guardrails, with a north star of saving developer time.",
      "Hired and developed a distributed team and launched the org's first GenAI chatbot strategy.",
    ],
  },
  {
    company: "Wayfair",
    title: "Associate Director, Search Platform",
    dates: "2021–2022",
    bullets: [
      "Launched neural-network-powered search replacing the legacy system: $100M+ in incremental global revenue ($65M+ US).",
      "Built an A/B testing framework from scratch and iterated ranking models across 5 international markets with no major incidents.",
      "Aligned 60+ stakeholders across merchandising, data science, SEO, and international teams around a new algorithm.",
    ],
  },
  {
    company: "Apple",
    title: "Senior PM, Search Experience",
    dates: "2020–2021",
    bullets: [
      "Defined the first federated search strategy connecting Apple.com, the App Store, Help, and Siri.",
      "Established a 3-year roadmap bought in across product, ML, and marketing in a highly top-down environment.",
      "Partnered with the ML team on predictive, context-aware results using collaborative filtering and relevance models.",
    ],
  },
  {
    company: "Constructor",
    title: "Group Product Manager",
    dates: "2020",
    bullets: [
      "Built a pre-sales \"try it out\" tool that doubled trial engagement by letting prospects compare against their live legacy search.",
      "Cut customer onboarding from months to days and helped land early customers including Sephora and Target Australia.",
    ],
  },
  {
    company: "Nike",
    title: "Senior PM, Search",
    dates: "2016–2020",
    bullets: [
      "Led the migration from legacy Endeca to an in-house ML-driven search platform across nike.com and the Nike app.",
      "Launched Search Preview: $50M+ incremental revenue in the first months at 6%+ conversion versus a 3% baseline.",
      "Reduced manual merchandising from ~85% to ~5% of top queries and built transparency tooling to demystify algorithm outputs.",
      "Resolved org tension between brand curation and commerce optimization across globally distributed teams.",
    ],
  },
  {
    company: "Jama Software",
    title: "Product Manager",
    dates: "2012–2016",
    bullets: [
      "Joined as the first PM (~40th employee); segmentation work shifted the company toward large, complex customers.",
      "Launched a decision-tracking feature: 10,000 decisions logged in month one.",
      "Led ISO 26262 automotive certification, the first agile SaaS company certified; 5x automotive pipeline growth in one quarter.",
    ],
  },
  {
    company: "Viewpoint",
    title: "International Product Manager",
    dates: "2010–2012",
    bullets: [
      "Top revenue-driving consultant before moving to product, first in Canada and Australia.",
      "Became the first International PM and launched a 20-year-old US construction ERP in both countries.",
      "Rebuilt customer trust in markets where the product had been sold before it was ready.",
    ],
  },
];

const expertise = [
  {
    label: "AI & Building",
    detail:
      "LLM agent tooling · MCP · evals · Claude Code · shipping solo to production",
  },
  {
    label: "Search & Discovery",
    detail:
      "Ecommerce search · ML/NLP · relevance tuning · A/B experimentation · federated search",
  },
  {
    label: "Platform & Systems",
    detail:
      "Developer platforms · interoperability · API ecosystems · CI/CD · enterprise SaaS",
  },
  {
    label: "HR Technology",
    detail:
      "Workday · HRIS · workforce planning · self-service automation · compliance workflows",
  },
  {
    label: "Leadership",
    detail:
      "Team building · hiring · cross-functional alignment · OKR design · stakeholder management",
  },
];

const products = [
  {
    name: "Roost",
    detail:
      "Parent directory at roost.directory. Five schools and a district education foundation, about 1,700 families, live on iOS and Android.",
  },
  {
    name: "bethere.community",
    detail:
      "Volunteer matching for school communities. Now shipped as part of Roost.",
  },
  {
    name: "inkind.one",
    detail: "Gala procurement and donor outreach for nonprofits.",
  },
  {
    name: "pairwise.one",
    detail: "Group prioritization by pairwise comparison.",
  },
];

const community = [
  {
    org: "Lake Oswego Schools Foundation",
    detail: "Board member, fundraising strategy",
  },
  { org: "Forest Hills PTO", detail: "Board" },
  {
    org: "Special Olympics Oregon",
    detail: "Super Plunger, $10,000+ raised",
  },
  { org: "Children's Cancer Association", detail: "Chemo Pal mentor" },
];

const links = [
  { label: "jeremymyrland@gmail.com", href: "mailto:jeremymyrland@gmail.com" },
  { label: "linkedin.com/in/jpmyrland", href: "https://www.linkedin.com/in/jpmyrland/" },
  { label: "github.com/blazerbeam", href: "https://github.com/blazerbeam" },
  { label: "jeremymyrland.com", href: "https://jeremymyrland.com" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  useEffect(() => {
    const previous = document.title;
    // Browsers use the document title as the default filename when saving to PDF.
    document.title = "Jeremy Myrland — Résumé";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Toolbar — screen only */}
      <div className="print:hidden sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <a
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to site
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Download PDF
            <span className="text-xs">↓</span>
          </button>
        </div>
      </div>

      {/* Résumé document */}
      <article className="mx-auto max-w-3xl px-6 py-12 print:max-w-none print:px-0 print:py-0">
        {/* Header */}
        <header>
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Jeremy Myrland
          </h1>
          <p className="mt-2 text-lg font-medium text-primary">
            Principal PM @ Nike · Founder, Roost
          </p>
          <p className="mt-3 max-w-2xl text-sm italic leading-relaxed text-muted-foreground">
            15+ years making complex systems actually work, across consumer search,
            enterprise HR, developer platforms, and ecommerce. Lately I build as much as
            I lead: shipping production software solo with AI agent tooling. I specialize
            in orchestration, taking fragmented teams, systems, and workflows and
            connecting them into real outcomes.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-primary underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Staff PM and Director of Product are where I do my best work. Remote-friendly.
            Based in Lake Oswego, Oregon (Portland metro).
          </p>
        </header>

        <div className="mt-8 h-px w-full bg-border" />

        {/* Experience */}
        <section className="mt-8">
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-5 space-y-6">
            {experience.map((role) => (
              <div
                key={`${role.company}-${role.dates}`}
                className="break-inside-avoid"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-serif text-lg font-semibold">
                    {role.company}{" "}
                    <span className="font-sans text-base font-normal text-muted-foreground">
                      — {role.title}
                    </span>
                  </h3>
                  <span className="whitespace-nowrap text-sm tabular-nums text-muted-foreground">
                    {role.dates}
                  </span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                      <span
                        aria-hidden
                        className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span className="text-foreground/90">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 h-px w-full bg-border" />

        {/* Expertise */}
        <section className="mt-8 break-inside-avoid">
          <SectionLabel>Expertise</SectionLabel>
          <dl className="mt-5 space-y-2.5">
            {expertise.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row"
              >
                <dt className="w-44 shrink-0 text-sm font-semibold text-primary">
                  {item.label}
                </dt>
                <dd className="text-sm text-foreground/85">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-8 h-px w-full bg-border" />

        {/* Products */}
        <section className="mt-8 break-inside-avoid">
          <SectionLabel>Products I&apos;ve Built</SectionLabel>
          <div className="mt-5 space-y-2">
            {products.map((product) => (
              <div key={product.name} className="text-sm">
                <span className="font-semibold">{product.name}</span>
                <span className="text-foreground/85"> — {product.detail}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Built solo with AI agent tooling (Claude Code, MCP), no CS background. Most are
            open source at github.com/blazerbeam.
          </p>
        </section>

        <div className="mt-8 h-px w-full bg-border" />

        {/* Community */}
        <section className="mt-8 break-inside-avoid">
          <SectionLabel>Community</SectionLabel>
          <div className="mt-5 space-y-1.5">
            {community.map((item) => (
              <div key={item.org} className="text-sm">
                <span className="font-semibold text-primary">{item.org}</span>
                <span className="text-foreground/85"> {item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 h-px w-full bg-border" />

        {/* Education */}
        <section className="mt-8 break-inside-avoid">
          <SectionLabel>Education</SectionLabel>
          <div className="mt-5">
            <h3 className="font-serif text-lg font-semibold">
              Oregon State University
            </h3>
            <p className="mt-1 text-sm text-foreground/85">
              B.S. Business Administration (Accounting) · Minor in Speech Communications
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Ford Family Scholar — a full-ride scholarship awarded to up to 120 Oregon
              students statewide each year.
            </p>
          </div>
        </section>
      </article>

      {/* Print: keep the dark, green-accented look in the downloaded PDF */}
      <style>{`
        @media print {
          @page { margin: 0.5in; }
          html, body {
            background: #15171D !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          main, article, section, header {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </main>
  );
}
