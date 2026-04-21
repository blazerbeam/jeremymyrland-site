import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing | Jeremy Myrland",
  description:
    "Notes on product, platforms, workforce planning, and the systems that connect them.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">
            Writing
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Thinking out loud.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Notes on product, platforms, workforce planning, and the systems
            that connect them. Some of this is tied to work I&apos;m doing now.
            Some is lessons from the last 15 years. I use AI to help with
            structure and editing. The thinking is mine.
          </p>
        </div>

        {/* Posts List */}
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/writing/${post.slug}`}>
              <article className="group p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors cursor-pointer">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-border">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.summary}
                </p>
                <span className="text-primary text-sm font-medium">
                  Read &rarr;
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
