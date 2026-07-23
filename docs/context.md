# Project context: jeremymyrland-site

Operational context for the site, migrated out of Notion (Session 11 context doc, May 17,
2026) and sanitized for a public repo.

> **Public repo.** This file holds only context that is already public (on the live site
> or LinkedIn) or harmless. Private and strategic material (career targets, unpublished
> post pipeline, personnel details, contacts in reserve, civic ambitions, personal PII)
> is intentionally **not** in this repo. It lives in Jeremy's Drive, or locally under the
> gitignored `docs/local/`.

## Who Jeremy is

Product leader, 15+ years. Through-line: orchestration, making fragmented systems, teams,
and workflows function together. Currently Principal PM, HR Global Technology at Nike
(Jan 2025 to present). Based in Lake Oswego, OR (Portland metro).

## The site

- Live at jeremymyrland.com
- Repo: `blazerbeam/jeremymyrland-site` (public)
- Stack: Next.js + TypeScript + Tailwind, hosted on Vercel, DNS via Porkbun

### Home page sections (in order)

1. Hero (stats bar)
2. The Journey (role timeline)
3. The Work (case study cards)
4. What I'm Building (bethere + inkind + fhpto)
5. Community (grid + photos)
6. Testimonials (quotes)
7. Education (Oregon State + Ford Family Scholar)
8. Contact (resume downloads + links)
9. Footer ("Go Blazers. Go Beavs.")

Separate pages: `/writing`, `/writing/[slug]`.

### Design system

- Background `#0F1117`, cards `#1A1D27`, text `#F0EDE6`, accent green `#5C9E6E`
- Serif display headings, sans-serif body, editorial feel
- Post pages: max-width 2xl, 17px body, 1.75 line-height

## Writing section

Content lives in `lib/posts.ts` as objects (title, slug, date, readingTime, summary,
content markdown), rendered with react-markdown. First paragraph is a baked-in TL;DR.
AI-assistance disclosure on the listing page only.

### Published posts

| Date | Title | Slug | Read |
| --- | --- | --- | --- |
| 2026-04-20 | Know what you have | `know-what-you-have` | 8 min |
| 2026-05-04 | Shit funnel or shit umbrella | `funnel-or-umbrella` | 5 min |

(A third post, "The wall that killed Array," also exists in the routes.)

Writing conventions: H2s serif, italic for real quotes, no em dashes, target 600-1200
words, mix lengths deliberately, real artifact images over stock.

## Career summary (public, as reflected on the site)

- **Nike** — Principal PM, HR Global Technology (Jan 2025 to present). 75K+ employees. No
  case study (current employer).
- **Workday** — Manager, Platform Product Management (Jun 2022 to Jan 2025). Case study:
  "Building the Team Before Building the Product."
- **Wayfair** — Associate Director, Search Platform (Apr 2021 to Jun 2022). Neural search,
  $100M+. Case study: "Neural Search at Scale."
- **Apple** — Senior PM, Search (Jun 2020 to Apr 2021). Federated search, 3-year roadmap.
- **Constructor** — Group PM (Jan 2020 to Jun 2020). Early employee at a search startup.
- **Nike** — Senior PM, Search (Jun 2016 to Jan 2020). $50M Search Preview. Case study:
  "Nike Search Preview."
- **Jama** — PM (Oct 2012 to Jun 2016). First PM, ISO 26262 automotive. Case study:
  "Finding the Right Customer."
- **Viewpoint** — International PM (Apr 2010 to Oct 2012). Australia + Canada. Case study:
  "Rebuilding Trust in the Field."

## Side projects ("What I'm Building")

- **bethere.community** — volunteer matching for school PTOs. First thing Jeremy shipped.
- **inkind.one** — nonprofit gala auction procurement app. Also uses Supabase.
- **fhpto.org** — Forest Hills Elementary PTO site. Beta, in active use. Built in ~8 hours
  as incoming PTO President. Mobile-first, organized around what a busy parent needs in 30
  seconds.

Stack for all three: Next.js, TypeScript, Vercel, Claude AI.

## Community & civic (public)

American Leadership Forum (ALF) Oregon Chapter Fellow, Class of 2026-27. Lake Oswego
Schools Foundation board. Forest Hills PTO (incoming President). Children's Cancer
Association, Special Olympics Oregon, Habitat for Humanity, Young Entrepreneurs Business
Week. Big Blazers and OSU fan (footer only).

## Education

Oregon State University, B.S. Business Administration (Accounting), Minor in Speech
Communications. Ford Family Scholar (full-ride).

## Recommendations shown on the site

- Stephen Jacobs (Sr Director of PM, The Knot Worldwide)
- Patti Cousins (PM, Nike)
- Eva Miller (UX Researcher, Brainola)
