# jeremymyrland-site

The source for [jeremymyrland.com](https://jeremymyrland.com), my personal site: the
career story, the products I've built, and my writing.

I'm a product leader without a CS background. I build real software with AI coding
tools, and this repo is public so you can see how. Changes go through a branch, a pull
request, and a Vercel preview before they ship.

## What's here

- **Home page.** A role timeline, the work behind each role with case studies, the
  products I've built, recent writing, and community work.
- **Writing** at [/writing](https://jeremymyrland.com/writing). Posts live as objects
  in `lib/posts.ts` and render with react-markdown.
- **Resume** at [/resume](https://jeremymyrland.com/resume). One source of truth
  (`app/resume/page.tsx`) for both the web page and the PDF it prints.

## How it's built

- Next.js (App Router) and TypeScript
- Tailwind CSS and shadcn/ui
- Hosted on Vercel
- Started in [v0](https://v0.app), now built and maintained with Claude Code

It's a static site on purpose. No backend, no database, no auth.

## Running it locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000. Check a change with `pnpm build` before opening a PR.

## The other products

What I'm building is listed on the site. [pairwise](https://github.com/blazerbeam/pairwise)
and the original [bethere.community prototype](https://github.com/blazerbeam/v0-be-there-app)
are public. [Roost](https://roost.directory), the parent directory I run as a business,
is private.
