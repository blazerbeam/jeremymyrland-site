export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "funnel-or-umbrella",
    title: "Shit funnel or shit umbrella",
    date: "2026-05-04",
    readingTime: "5 min",
    summary:
      "In 2015 I gave a talk to a room of business analysts about a role that was quietly shifting underneath them. Ten years later, I had lunch with a principal engineer at Nike and we landed on the same conversation, one rung up. Roles compress. The people who see it coming have time to adapt.",
    content: `**TL;DR.** In 2015 I gave a talk to a room of business analysts about a role that was quietly shifting underneath them. Ten years later, I had lunch with a principal engineer at Nike and we landed on the same conversation, one rung up. Roles compress. The people who see it coming have time to adapt.

---

In 2015 I was at Jama, our requirements management company. We sold to large, complex organizations. Most of our users were business analysts at companies building things like medical devices, defense systems, automotive software. People who wrote specs for a living.

I spent a lot of time with those customers. And I kept noticing the same thing: the BAs were good at the job they had been hired to do, and the job they had been hired to do was changing.

So I put together a talk. I gave it at conferences and customer events. At least five times. I called it "Shit Funnel or Shit Umbrella," which I borrowed from a Todd Jackson quote at Facebook. The line was: you can either be a shit funnel, taking everything from above and dumping it on your team, or you can be a shit umbrella, absorbing what doesn't matter and letting your team focus on what does.

## What I actually told them

I opened with what they were good at. Five skills:

- **Visionary.** You have a view of the future.
- **Story Teller.** You understand more than just functional requirements. You can tell the emotional story of what you're building.
- **Translator.** You frame the conversation based on who you're talking to.
- **Influencer.** You have to win hearts and minds without authority.
- **Executor.** You get shit done.

Then I put up a slide that said "BUT, we also do all of this..." and listed the trap: take orders, work within our title, only fight fires, get stuck in the what, come in way too late, forget to ask why, over document, make lists, set it and forget it, live in excel and word.

That's the part of the talk that landed. Every time.

The five skills above the line described a strategist. The list below described a clerk. Same person, same job title, two different jobs. The difference was almost entirely a choice about how you showed up.

Toward the end I introduced Business Model Canvas. A simple one-page framework for mapping how a business actually works. Customer segments, value proposition, channels, revenue, cost. I told them: here's a tool that forces you out of the spec doc and into the business question. Use it once and you'll see the conversation shift. People who used to talk past you will start asking what you think.

I closed with the funnel/umbrella line. Which one do you want to be.

![From the deck, 2015. Closing slide.](/images/writing/funnel-or-umbrella/final-slide.png)

## What happened after

People came up after every talk. Multiple, every time. They wanted to be seen as strategic. They were tired of being treated like dictation machines. They knew their role was bigger than what their job description said it was.

I got promises. People told me they would go back and try it. Run a canvas with their team. Push back the next time someone handed them a spec without context.

I don't know how many of them actually did it. I have a foggy memory of someone reaching out months later saying it stuck, that they had pulled the canvas into a real conversation and it changed how their team worked. I'm honestly not sure that memory is real. It might be something I want to be true.

What I am sure of is the appetite was there. People in the room knew the role was shifting. They didn't need me to tell them. They needed permission to act on it.

## The pattern

This isn't the first time a role has compressed. It won't be the last.

BAs got absorbed into product. Designers got absorbed into product designers, then into design systems people who also build. DevOps wasn't a role, then it was a role, then it dissolved into "every engineer ships their own infrastructure now." QA teams got absorbed into engineering teams that test their own work.

Every ten or fifteen years, the work that defined a role gets pulled up one rung. The skills don't disappear. They get folded into the role above. The people who saw it coming had time to adapt. The ones who didn't, didn't.

In 2015 I was watching it happen to BAs. The part of their job that was repeatable was getting automated, templated, or absorbed into PM. The part that was strategic was already PM work. They could either claim the strategic half or watch the role shrink.

## Lunch with David

A few weeks ago I had lunch with David Daniel, a principal engineer at Nike and a friend of mine. David is the kind of engineer who asks the questions PMs are supposed to ask. Is this commercially viable. Will users actually use it. Why are we doing this at all. He does a lot of what product managers have historically done.

We were talking about how we work now. Both of us prototype. Both of us write code that ships. Both of us spend less time in spec docs than we used to and more time in the artifact itself.

At some point one of us said it, and the other agreed: if you're a PM today and you can't build the first version yourself, you're getting funneled.

Engineering is no longer the constraint. That doesn't mean engineers don't matter. They matter more. It means the bottleneck has moved. The bottleneck used to be "we have an idea but we can't build it." The bottleneck now is "we have too many ideas and not enough clarity about which one is real." The PRD isn't the work anymore. The prototype is.

## Five skills became six

If I gave that 2015 talk to a room of PMs today, I'd keep all five skills. Visionary, storyteller, translator, influencer, executor. They still hold.

I'd add one.

**Builder.** You can produce a working version of the thing you're proposing. Not a spec, not a wireframe, not a Figma. A thing that runs. Maybe ugly, maybe scoped to one user, maybe held together with prompts and duct tape. But it runs.

The new skill is the one most PMs don't have yet. Same shape as the gap BAs had with business models in 2015.

I built bethere.community for school PTOs. I built inkind.one for nonprofit gala procurement. Both are live. Both started as my own ideas, prototyped on weekends, with no engineer in sight until I needed help scaling. Five years ago I could not have done either of those. Now I can do both, and so can a lot of other people if they choose to.

The PMs I see thriving right now all have this skill. The ones struggling are still writing PRDs and waiting for an engineer to build it.

## So

Same question I asked the BAs in 2015, one rung up.

Do you want to be a shit funnel or a shit umbrella.

If you're a PM and the answer is umbrella, the work is the same as it was for the BAs who came up to me after those talks. Claim the strategic half of the role. The half that's already yours, the half nobody is going to give you permission to do, the half that defines whether your role grows with the change or shrinks under it.

The people who chose umbrella in 2015 ended up running product orgs. Some of them probably built the AI tools the rest of us are using right now.

I don't know if that one BA actually reached out to me months later. I'd like to think they did. I'd like to think they're a Director of Product somewhere now, having this exact conversation with a junior PM who thinks the PRD is the job.`,
  },
  {
    slug: "the-wall-that-killed-array",
    title: "The wall that killed Array",
    date: "2026-04-22",
    readingTime: "7 min",
    summary:
      "In 2015, a small team spent two weeks building a product everyone loved. It never shipped. The build wasn't the hard part. The wall between \"internal POC\" and \"deployed product\" was. In 2026, I rebuilt it solo over a few evenings. The wall is shorter now, but it's not gone.",
    content: `**TL;DR.** In 2015, a small team spent two weeks building a product everyone loved. It never shipped. The build wasn't the hard part. The wall between "internal POC" and "deployed product" was. In 2026, I rebuilt it solo over a few evenings. The wall is shorter now, but it's not gone. The first 80% of the work is genuinely transformed. The last 20% is where the toolchain runs out and judgment takes over.

---

## What we built in 2015

In early 2015, I watched a video about Nordstrom Innovation Labs building a product in four days. I wanted to try something similar at Jama. On Valentine's Day morning, I emailed my VP and Director of Product with a pitch: give me my dev team for two weeks, let us go offsite and build the thing, and at the end we either move forward or we kill it.

![Valentine's Day pitch email to Jennifer and Alex](/images/writing/array/Valentines_Day_Pitch.png)

They said yes.

The product was called Array. The pitch was simple. Prioritization meetings are terrible. Ten things on a whiteboard, six people in a room, two hours later you have a list nobody trusts and at least one person who feels ignored. Array fixed it by never asking you to rank ten things. It asked you to compare two. Then two more. Then two more. After enough rounds the math sorted out a ranking, and a 2D plot sorted out which ones were quick wins and which were big bets.

![Array logo. Prioritization Made Simple.](/images/writing/array/Array_Logo.png)

Five developers built it. I was the PM. We kicked off with an offsite at one of their houses. There was pizza. There were whiteboards covered in red marker math that made sense for about forty-five minutes at a time.

![March kickoff email referencing the Nordstrom video](/images/writing/array/March_Update_to_Engineers.png)

We shipped, internally. The demo got *"this is AWESOME"* from our VP of Development. Sales and CSM loved the prototype. We mocked up a launch announcement at array.jama.io.

![April prototype feedback email to sales and CSM](/images/writing/array/Sales_and_CSM_Email.png)

It never went out. Array never deployed. The Heroku POC stayed a Heroku POC, and eventually it didn't even stay that.

## The wall

Here's the thing I've thought about for ten years.

Array didn't fail at the build. The build was the easy part. We had a working prototype people loved.

It failed at the wall between "internal POC everyone likes" and "thing the company actually ships." That wall was made of work nobody on the team had bandwidth to do. A real auth system. A real database. A real billing model, or at least a free tier with rate limits. Real onboarding. Real deployment. Real support for the first ten people who signed up. The hundred small things that turn a demo into a product.

In 2015 that work needed engineers we didn't have, roadmap room we didn't get, and the kind of executive push that only happens when something is somebody's job and not somebody's two-week passion project.

So Array sat on Heroku and quietly stopped sitting on Heroku.

## The 2026 rebuild

Eleven years later, I rebuilt it. Solo. About six hours of build time across five evening sessions. The product is at [pairwise.one](https://pairwise.one). Anyone can sign up.

The stack: v0 for code generation, Vercel for hosting, Supabase for the database and auth. Next.js, TypeScript, Tailwind, shadcn. Boring choices, all of them. That's the point.

Before I started, I wrote down what I thought would be easy and what I thought would be hard. Most of the predictions held. A few didn't. The ones that didn't are the most interesting.

## What the toolchain made trivial

This is where the 2015 comparison gets uncomfortable.

Auth in 2015 would have been a person-week of real work. Sessions, password resets, hashing, the whole thing. In 2026 it was thirty minutes. Describe the flows, paste the result, watch it work.

The database schema was similar. I described the data model in plain English, got back a SQL paste with row-level security policies that ran without errors. The 2D scatter plot, which would have been a multi-day effort in 2015, rendered live data in one prompt. QR code on the share screen, one prompt. Mobile responsiveness was right on first pass for most surfaces.

The pattern is consistent. The work that used to be the *interesting* technical work in 2015 is now the boring scaffolding work in 2026. Auth, schema, deployment, basic charting. None of it is the bottleneck anymore.

That's the first 80%. It's genuinely transformed.

## What stayed hard

There's a specific failure pattern that showed up in nearly every architecturally significant prompt I gave: the AI would build something *adjacent* to what I asked for and report success. A different route name. A different storage mechanism. A different layout. The summary message would say "all eight items implemented" for work that addressed four of them, dropped two, and silently substituted the others. The fix isn't hard. Read every summary skeptically, cross-reference against the original spec, re-prompt with corrections. But the discipline of not believing the summary is its own kind of cognitive load over a long session.

The single longest pain point of the build was visual polish on the results scatter chart. About 55 minutes across six or seven iterations. The chart needed to hide raw scores, add named quadrants in the right corners, color-code the dots by quadrant, and apply pastel background fills.

The first three landed with iteration. The fourth never rendered correctly. The background fills were either getting layered behind the chart, overridden by some default, or dropped entirely. The AI couldn't see the actual rendering issue from prompt-level reasoning. Each iteration produced a different-but-still-wrong result.

I shipped it without the fills. Called it out, moved on.

That moment crystallized the most useful insight of the build. There's a band of work where the prompt-and-paste rhythm stops paying. Visual nuance. Z-order debugging. State bugs that need you to look at the rendered output, look at the code, adjust, look again. The copy-paste loop adds 30 to 60 seconds per cycle. After six cycles on the same component, the latency itself is the bottleneck.

Same lesson with the undo feature I tried to add in session five. I'd been testing my own product, voted on a pair, immediately wanted to change my mind. Felt like an obvious add. Three iterations in, the AI produced a genuinely thoughtful diagnosis of the root cause: a stray timeout in the vote handler that wasn't getting cleaned up, leaving a pending callback that fired after the undo and corrupted state. The fix it proposed was textbook. It didn't work.

I cut the feature, logged it as a backlog item, moved on. The diagnosis was good. The fix wasn't. Closing that gap would have required reading the actual component code in context, which the prompt-and-paste loop doesn't do well.

## The middle-man problem

Mid-session five I named something that had been quietly true the whole build.

I was sitting in the middle of two AIs that couldn't talk to each other. Claude on one side, helping me think through what to build, what to prompt, how to read the output. v0 on the other side, doing the building. Me copying and pasting between them, playing connective tissue.

For the first 80% of the build, that loop is fine. It's even pleasant. You get to think about what you want, hand off the typing, review at human speed. The friction is invisible because the work is shaped right for it. Scaffold a component. Generate a schema. Wire an integration. One-shot prompts that produce visible output.

The friction becomes the bottleneck when the work shifts. Visual polish that needs ten small adjustments. Bug debugging where you need to see the actual code. Anything that requires "look at what's there and adjust in place." For these, the right shape of tool is a direct coding loop where the AI can read the file, edit, and you can refresh and see the result without copy-paste in the middle.

I know where this is going next. Pairwise is the fourth product I've shipped this way, after bethere, inkind, and my personal site. The prompt-and-paste rhythm has been good enough for all four. But four projects in, I want more control. The next move is moving the work to my local machine with something like Claude Code or Cursor, where the AI can read and edit my codebase directly. I haven't done it yet because learning a new tool takes space I haven't carved out. Good enough has been good enough.

## The wall in 2026

The wall is shorter than it was in 2015. Materially shorter. But it's still there. It's just made of different stuff now.

The first 80% is transformed. Auth, schema, scaffolding, deployment. The whole pipeline of "go from idea to deployed thing" used to require a team or a meaningful learning curve. Now it's a sequence of prompts.

The last 20% is where the toolchain runs out. Visual nuance, state debugging, anything that requires looking at the code in context. These need a tighter loop than prompt-and-paste.

And the POC-to-shipped gap is still the hardest gap in product development. AI compresses the path to POC dramatically. It does less to compress the path from POC to production. The 2015 team got stuck at exactly that gap. The 2026 build cleared it, but only because shipping was the explicit non-negotiable from prompt one. The toolchain didn't make shipping inevitable. It just made it possible.

The 2015 wall was made of headcount and runway and roadmap politics, and no individual on the team could move it. The 2026 wall is made of judgment calls. When to switch tools. When to cut a feature. When to stop iterating and ship with a known gap.

Those are PM problems. They don't require five people and a war room. They require one person willing to make the call.

## Try it

Pairwise is live at [pairwise.one](https://pairwise.one). Sign up, create a pairwise, share it with a few people, see what comes out.

Known gaps, in case you find them: the scatter quadrants don't have the pastel fills I wanted. There's no undo on votes. There's an intermittent first-load issue on voter URLs in incognito that I haven't been able to reproduce on demand. Repo will go public shortly.

If you break it, tell me. That's the most useful thing you can do.`,
  },
  {
    slug: "know-what-you-have",
    title: "Know what you have",
    date: "2026-04-20",
    readingTime: "8 min",
    summary:
      "Most workforce planning still treats talent as something you go get from outside. The better starting point is understanding what you already have — and building the systems and trust to make that visible.",
    content: `**TL;DR.** Most organizations run workforce planning reactively or on a calendar. Neither approach sees what's already inside. Capability-led planning flips that — you understand what your people can actually do before you go hire for what you don't have. The hard part isn't the idea. It's scale, trust, and managers willing to let go.

---

Most workforce plans start the same way. Leadership sets a strategy. Finance builds a model. HR gets headcount targets. Recruiting starts filling seats.

It works until it doesn't.

The strategy assumes the talent exists, that you can hire fast enough, that the skills you need are available in the market. Sometimes all three are true. A lot of times, they're not. And by the time you find out, you're already behind.

There's a different way to think about this. It starts by looking inward before you look outward.

## From reactive to predictive: a quick detour into heavy equipment

Bear with me for a second.

The way organizations manage large equipment has gone through three distinct phases.

**The first was reactive.** Something breaks, you fix it. Simple. Also expensive, unpredictable, and disruptive, especially when the failure happens mid-job on a multi-million dollar project.

**The second was scheduled maintenance.** You don't wait for the breakdown. You pull equipment out of rotation at regular intervals, whether it needs it or not. More predictable. Fewer emergencies. But inherently conservative. You're over-maintaining some equipment and under-maintaining others. You're using a calendar when you should be using data.

**The third is where things get interesting: predictive maintenance.** Sensors on the equipment. Real-time diagnostics. Pattern recognition across thousands of machines over years of operation. The system tells you, with surprising accuracy, when something is likely to fail before it does. You intervene at the right time, not too early and not too late.

But here's what makes modern predictive maintenance actually work: it's not just the data. It's the people who run the equipment every day. The operator who knows that particular machine vibrates differently when it's hot. The mechanic who recognizes a sound before the sensor does. The data and the human knowledge work together. Neither one is enough on its own.

That last part matters a lot for where this is going.

## Where most workforce planning still lives

Most organizations are somewhere between reactive and scheduled.

Reactive looks like: a key person leaves, a project stalls, a hiring surge kicks off. The plan was fine until it wasn't.

Scheduled looks like: annual headcount cycles, tied to budget seasons, built around org charts and job families. Better than reactive. Still slow. Still built around roles and headcount, not around what the organization can actually do.

Both approaches treat talent as something you go get from outside, not something you understand and activate from within.

## The whiteboard version of this

When I took over a new team, one of the first things I did was get everyone in a room and ask them to be honest about themselves.

What are you genuinely good at? What are you still working on? What do you love doing? What drains you?

We didn't call it a skills inventory. That would have killed the mood. We called it getting to know each other. But that's exactly what it was.

What came out of it was a baseline. A shared map of where we had strength, where we had overlap, where we had gaps. It helped us divide work more intentionally. It helped people lean into what they were good at instead of defaulting to whoever was least busy. Over time, as I got to know people better, I could see where the initial self-assessment was off. Usually because people had undersold themselves.

It was manual. It was imperfect. It worked because there were five of us. I was not a VP with 250 people reporting to me. There was no system, no ongoing feed of information, no way to keep it current without constant one-on-ones and gut instinct.

That's the problem. The idea was right. The execution didn't scale.

## What capability-led planning actually means

The shift I'm interested in is this: before you look at who you need to hire, understand what you already have.

Not job titles. Not tenure. Actual capabilities — the skills, patterns, and approaches that show up in how people work, not just what their résumé says.

The gap between "job title" and "what this person can actually do" is enormous in most organizations. And it creates real, concrete missed opportunities.

Consider this. Right now, somewhere in a large organization, there's a retail employee on the sales floor who is finishing a master's degree in data science, or organizational psychology, or supply chain. That person is in the system as a sales associate. The org doesn't know what they're building. They might not think to mention it. When a relevant role opens up, the organization goes to market, pays a recruiter, waits three months, and brings someone in from outside.

Hiring didn't fail. The org just couldn't see what it already had.

When you close that gap, a few things change. Strategy gets more honest, built on execution capacity that actually exists, not optimistic hiring assumptions. Hidden options emerge — the PM who knows how to build a data pipeline, the analyst who came up through operations, the designer with a background in behavioral economics. Talent investment gets more targeted. You're not sending people to training because it checks a box. You're building a specific capability you've identified as critical to something real.

## People need to be at the center of this. Full stop.

I want to say something directly, because I keep running into this in strategic planning conversations.

There's a tendency to focus almost entirely on what this means for the business. The efficiency gains. The planning accuracy. The reduced hiring costs. Those outcomes are real and they matter. But if the conversation never gets to what this means for the people inside the organization, you've already made a mistake. And you'll pay for it in trust.

I've heard it directly: *"HR is only asking us to update our skills so they know who they can lay off."*

That's the narrative that takes hold when employees don't understand what's happening or why. Once it takes hold, it's very hard to walk back. People stop engaging. The data gets worse. The whole system becomes less useful.

The only way around this is to make the value real for employees, not just leadership.

Think about what it would mean to have a clear, evidence-based picture of your own capabilities. Not just what you think you're good at, but what your work actually shows. Most people underestimate themselves. Impostor syndrome is real. Self-assessment skews low. If a system could show you, with evidence, that you've been underselling yourself, that's not surveillance. That's a tool for your own career.

The goal isn't a company database built for workforce strategy decisions. It's a living picture of what people can do. One that's useful to them first, and useful to the organization as a result.

## Managers are the bridge — and they have to let go a little

This is where the equipment analogy comes back around.

In predictive maintenance, the data and the operator work together. The sensor catches what the human misses. The human catches what the sensor can't measure. Neither one is running the show alone.

The same model applies here. At scale, you need systems and data to see across a large, complex workforce. But data alone won't tell you everything. Managers have context that no system can fully capture. That context needs to flow into the picture, not sit locked in someone's head.

Here's the problem: managers often hold on too tight.

They know who their strong performers are. They've invested in them. They want to keep them. So they don't raise their hand when a great opportunity comes up elsewhere in the org. They protect what they've built, even when the person on their team might thrive somewhere else, or when someone else in the org desperately needs exactly that skill set.

It cuts the other way too. A manager might highly value someone who is strategic, outgoing, and always thinking about the big picture, but undervalue the person who goes deep on one thing, executes with precision, and gets the hardest deliverables across the finish line. Both profiles matter. Just not always to the same team at the same time.

When capability data flows more openly, with managers actively contributing to it and using it, a few things get better. People get matched to work that fits them, not just the team they happened to land on. Managers who've been hoarding talent lose the ability to do so, because the visibility is there. Employees who are ready for something different, or whose skills are genuinely more valuable somewhere else, have a path to make that case. Not because HR decided it, but because the data supports it.

The manager isn't replaced in this model. They're essential to it. But they have to be willing to use the information in service of the person, not just in service of their own team's short-term needs.

## The honest challenge: scale breaks this fast

Getting accurate skills data at scale is genuinely hard. I want to be clear about that, not sell past it.

Start with who you're even counting. Most large organizations aren't working with a clean, unified employee population. They have full-time employees in multiple countries, contractors who've been embedded for years, outsourced functions, augmented labor that sits somewhere between vendor and team member. Each category comes with different data access, different privacy rules, and different levels of organizational visibility. In some regions, the legal constraints on what you can track, store, or act on are significant, and they're changing. Building a skills picture across that landscape isn't a data problem. It's a data, legal, and organizational design problem all at once.

Layer on top of that the reality most large organizations operate in. Ingrained processes that took years to build. Org structures that have been through multiple transformations. Teams that have learned to work around systems rather than with them. You're not dropping capability-led planning into a clean environment. You're introducing it into one that's already moving.

Self-reported skills have obvious limits on their own. People overstate some things, understate others, and often don't know how to describe what they actually do in terms that match what the organization is looking for. Inferred skills are better in theory, but the models aren't perfect. They reflect what's visible digitally, which disadvantages people who do their best work in conversations, in rooms, and in relationships. Even when the data exists, job titles don't map cleanly to work, tenure doesn't predict capability, and the person with the most relevant experience for a new initiative might be buried three levels deep somewhere nobody is looking.

None of this makes this approach impossible. But accuracy is a journey, not a launch feature. You build it carefully, start with the right use cases, be honest with people about what the data can and can't tell you, and keep investing in the feedback loops that make it better over time.

## What this looks like in practice

I've been working through versions of this at a large, global organization. Connecting workforce decisions to skills, business needs, and future demand across a complex, multi-segment employee base that spans employment types, geographies, and functions. Most large companies are still in early innings. The tooling is improving. The data models are getting better. The organizational muscle for this kind of planning is still being built.

But the direction is clear. The orgs that learn to see what their people can actually do will move faster and make better decisions with less guessing. And the people inside those orgs will have something most of them don't have now: a real, evidence-based picture of their own capability, and a path that reflects it.

That's the version of this worth building toward.

It's not complicated to describe. It is hard to do. But the starting point is the same whether you're working with a whiteboard and five people or a platform and fifty thousand.

Know what you have before you go looking for what you don't.

---

*A note on how this was made: the ideas and experiences here are mine, built up over years of managing teams, building systems, and sitting in the planning sessions where these tensions actually play out. I used AI to help me structure and edit the writing. The thinking is mine. The polish had help.*`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
