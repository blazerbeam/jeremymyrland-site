import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Jeremy Myrland`,
    description: post.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <article className="mx-auto max-w-2xl px-6">
        {/* Back Link */}
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium mb-8"
        >
          &larr; All writing
        </Link>

        {/* Post Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
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
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Post Content */}
        <div className="prose-custom">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-serif text-xl font-semibold text-foreground mt-10 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children, node }) => {
                // Check if this is the first paragraph (TL;DR)
                const parent = node?.position?.start;
                const isFirstParagraph = parent?.line === 1;

                if (isFirstParagraph) {
                  return (
                    <p className="text-[18px] leading-[1.75] text-foreground/85 mb-8 border-l-[3px] border-primary pl-5 py-4 bg-foreground/[0.03] rounded-r">
                      {children}
                    </p>
                  );
                }

                return (
                  <p className="text-[17px] leading-[1.75] text-foreground/85 mb-6">
                    {children}
                  </p>
                );
              },
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-foreground/85">{children}</em>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-foreground/80">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside pl-6 mb-6 text-[17px] leading-[1.75] text-foreground/85 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside pl-6 mb-6 text-[17px] leading-[1.75] text-foreground/85 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li>{children}</li>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              hr: () => <hr className="border-border my-10" />,
              code: ({ children }) => (
                <code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                  {children}
                </code>
              ),
              img: ({ src, alt }) => (
                <figure className="my-8 flex flex-col items-center">
                  <div className="w-full border border-border rounded overflow-hidden">
                    <Image
                      src={src || ""}
                      alt={alt || ""}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  {alt && (
                    <figcaption className="mt-3 text-sm italic text-muted-foreground text-center">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
