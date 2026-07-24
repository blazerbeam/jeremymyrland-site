"use client";

import { useEffect } from "react";

// Single source of truth for the résumé. Add a role or product here and both
// the on-screen page and the printed/downloaded PDF update. No more static PDFs.
const experience = [
  {
    company: "Roost",
    title: "Founder",
    dates: "2026–Present",
    summary:
      "A modern parent directory replacing DirectorySpot. Built solo, from the data model to the iOS and Android apps, while working full-time at Nike. First customer signed and over 100 families using it.",
  },
  {
    company: "Nike",
    title: "Principal PM, HR Global Technology",
    dates: "2025–Present",
    summary:
      "Redesigning enterprise HR systems for 75,000+ employees across retail, corporate, and supply chain. Rebuilt U.S. onboarding, consolidated document management into Workday (saving hundreds of thousands in annual licensing), and automated California meal-waiver compliance.",
  },
  {
    company: "Workday",
    title: "Manager, Platform Product Management",
    dates: "2022–2025",
    summary:
      "Led a global team of 9 PMs across the US, Canada, and Ireland. Defined the interoperability vision powering hundreds of platform integrations and delivered mobile and desktop client parity across the platform.",
  },
  {
    company: "Wayfair",
    title: "Associate Director, Search Platform",
    dates: "2021–2022",
    summary:
      "Launched neural-network-powered search to replace a legacy system. Over $100M in incremental global revenue across five international markets.",
  },
  {
    company: "Apple",
    title: "Senior PM, Search Experience",
    dates: "2020–2021",
    summary:
      "Defined Apple's unified search strategy across Apple.com, the App Store, Help, and Siri. Established a three-year federated search roadmap bought in across product, ML, and marketing.",
  },
  {
    company: "Constructor",
    title: "Group Product Manager",
    dates: "2020",
    summary:
      "Early employee at a search startup. Built a pre-sales tool that doubled trial engagement, cut customer onboarding from months to days, and helped land Sephora and Target Australia.",
  },
  {
    company: "Nike",
    title: "Senior PM, Search",
    dates: "2016–2020",
    summary:
      "Led migration from legacy Endeca to an ML-driven search platform. Search Preview drove over $50M in incremental revenue; reduced manual merchandising from ~85% to ~5% of top queries.",
  },
  {
    company: "Jama Software",
    title: "Product Manager",
    dates: "2012–2016",
    summary:
      "First PM at Jama. Market segmentation that refocused the company, the first agile company ISO 26262 certified for automotive, and 5x pipeline growth in a quarter.",
  },
  {
    company: "Viewpoint",
    title: "International Product Manager",
    dates: "2010–2012",
    summary:
      "Launched a 20-year-old US ERP product in Australia and Canada. Largest selling quarter in company history.",
  },
];

const products = [
  {
    name: "Roost",
    detail:
      "Parent directory at roost.directory. First customer, 100+ families, live on iOS and Android.",
  },
  {
    name: "bethere.community",
    detail: "Volunteer matching for school communities.",
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
    <main className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
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
        <header className="border-b border-border pb-6 print:border-neutral-300">
          <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Jeremy Myrland
          </h1>
          <p className="mt-2 text-base text-muted-foreground print:text-neutral-700">
            Principal PM @ Nike · Founder, Roost
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground print:text-neutral-700">
            Staff PM and Director of Product are where I do my best work.
            Remote-friendly. Based in Lake Oswego, Oregon (Portland metro).
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a
              href="mailto:jeremymyrland@gmail.com"
              className="text-primary hover:underline print:text-black print:no-underline"
            >
              jeremymyrland@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jpmyrland/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline print:text-black print:no-underline"
            >
              linkedin.com/in/jpmyrland
            </a>
            <a
              href="https://github.com/blazerbeam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline print:text-black print:no-underline"
            >
              github.com/blazerbeam
            </a>
            <a
              href="https://jeremymyrland.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline print:text-black print:no-underline"
            >
              jeremymyrland.com
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="mt-8 print:mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary print:text-black">
            Experience
          </h2>
          <div className="mt-4 space-y-5 print:space-y-3">
            {experience.map((role) => (
              <div
                key={`${role.company}-${role.dates}`}
                className="break-inside-avoid"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-serif text-lg font-semibold">
                    {role.company}{" "}
                    <span className="font-sans text-base font-normal text-muted-foreground print:text-neutral-700">
                      — {role.title}
                    </span>
                  </h3>
                  <span className="whitespace-nowrap text-sm tabular-nums text-muted-foreground print:text-neutral-600">
                    {role.dates}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground print:text-neutral-800">
                  {role.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mt-8 print:mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary print:text-black">
            Products I&apos;ve Built
          </h2>
          <div className="mt-4 space-y-2">
            {products.map((product) => (
              <div key={product.name} className="break-inside-avoid text-sm">
                <span className="font-semibold">{product.name}</span>
                <span className="text-muted-foreground print:text-neutral-800">
                  {" "}
                  — {product.detail}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground print:text-neutral-600">
            Built solo with AI tooling, no CS background. Most are open source at
            github.com/blazerbeam.
          </p>
        </section>

        {/* Education */}
        <section className="mt-8 print:mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary print:text-black">
            Education
          </h2>
          <div className="mt-4 break-inside-avoid">
            <h3 className="font-serif text-lg font-semibold">
              Oregon State University
            </h3>
            <p className="mt-1 text-sm text-muted-foreground print:text-neutral-800">
              B.S. Business Administration (Accounting), Minor in Speech
              Communications
            </p>
            <p className="mt-1 text-sm text-muted-foreground print:text-neutral-800">
              Ford Family Scholar — full-ride scholarship from the Ford Family
              Foundation, awarded to up to 120 Oregon students statewide each year.
            </p>
          </div>
        </section>
      </article>

      {/* Print-only overrides that Tailwind utilities can't express */}
      <style>{`
        @media print {
          @page { margin: 0.6in; }
          html, body {
            background: #ffffff !important;
            background-image: none !important;
          }
        }
      `}</style>
    </main>
  );
}
