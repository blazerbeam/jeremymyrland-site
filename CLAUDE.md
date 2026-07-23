# CLAUDE.md

Working context for Claude Code on this project. Read this first.

## Project identity

This repo is **jeremymyrland-site**, the personal site / portfolio for Jeremy Myrland,
a product leader (Principal PM, HR Global Technology at Nike). Live at
**jeremymyrland.com**. It is a static, marketing-style Next.js site: a career story, a
"what I'm building" section, and a writing/blog section. There is no backend and no
database.

The site's own thesis is that Jeremy ships real products without a CS background, so the
repo is intentionally **public** and acts as a proof point that his live site links to.
Keep it clean.

## Tech stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 + shadcn/ui components (Radix primitives)
- Deployed on Vercel. DNS via Porkbun.
- Package manager: **pnpm** (not npm). `sharp`'s build script is allow-listed in
  `pnpm-workspace.yaml`, which modern pnpm requires or the build gate fails locally.

## Working norms

### The workflow (direct edit -> PR -> Vercel preview)

This project no longer uses v0. Claude Code edits files directly. The loop:

1. **Branch.** Never commit to `main`. Create a feature branch.
2. **Edit** on the branch.
3. **Commit + push** with a descriptive message.
4. **Open a PR** against `main`. Vercel auto-deploys it as a preview and posts the URL as
   a bot comment within a minute or so.
5. **Share the preview URL** so Jeremy can review live before merge.
6. **Jeremy merges.** Never merge a PR yourself.

> Note: an older context doc said to hand back "ready-to-paste v0 prompts." That is
> retired. Take UI passes directly and let the Vercel preview be the visual review.

### Writing style (applies to site copy and blog posts)

- Conversational but direct. Clear, not corporate.
- Short to medium sentences. Bullets over long paragraphs.
- **No em dashes.** No fluff, jargon, or generic statements.
- Slightly opinionated when appropriate.
- Focus on systems, not features. Real-world execution, ownership, edge cases.
- Reframe the problem before solving it. Call out the real issue.
- Avoid: corporate speak, inspirational language, repetition.
- AI tells to watch for and strip from drafts: "said out loud," "different tool, same
  trap," "the signal was clear," overuse of "completely," reflexive parallel-structure
  kickers.
- Goal: an experienced operator explaining how things work and what to do next.

### Blog / writing section (technical)

- Posts live in `lib/posts.ts` as objects (title, slug, date ISO, readingTime, summary,
  content markdown). No filesystem reads.
- Rendered with react-markdown. H2s serif, italic for real quotes.
- First paragraph of each post is a baked-in TL;DR. AI-assistance disclosure lives on the
  listing page only, not per post.
- Images go in `public/` and are real artifacts (old slides, screenshots, photos) over
  stock illustrations, captioned in italics.
- Length: target 600-1200 words for most posts; mix lengths deliberately.

## Design system

- Background `#0F1117`, cards `#1A1D27`, text `#F0EDE6`, accent green `#5C9E6E`
- Serif display for headings, sans-serif for body
- Editorial / magazine feel
- Post pages: max-width 2xl, 17px body, 1.75 line-height

## Site structure

Home page sections, in order: Hero (stats bar), The Journey (role timeline), The Work
(case study cards), What I'm Building, Community, Testimonials, Education, Contact, Footer
("Go Blazers. Go Beavs."). Separate pages: `/writing` and `/writing/[slug]`.

Nav: left "Jeremy Myrland" (home). Right: Journey, Work, Building, Writing, Community,
Contact, LinkedIn, GitHub.

More detail in `docs/context.md`.

## What NOT to do (this is a PUBLIC repo)

- **Do not commit private or job-hunt-sensitive material.** No phone number, no explicit
  "target job title" language (a current employer may read this), no personnel specifics
  (hiring/management details), no civic-ambition specifics. Civic content stays vague, on
  the site and in the repo.
- Private and strategic context (post pipeline, career targets, contacts held in reserve)
  is kept **outside this repo** (in Jeremy's Drive). If any of it needs to live locally,
  put it under `docs/local/`, which is gitignored, never in a tracked file.
- Don't reintroduce v0 workflows or v0 prompts.
- Don't add a backend, database, or auth. This is a static site by design.
- Don't merge your own PRs.
