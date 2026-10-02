import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

const BASE_URL = 'https://jeremymyrland.com'

// Built from lib/posts.ts, so a new post is listed as soon as it is added.
export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/writing/${post.slug}`,
    lastModified: post.date,
  }))

  // The writing index changes whenever a post is published.
  const latestPost = posts.map((post) => post.date).sort().at(-1)

  return [
    { url: BASE_URL },
    { url: `${BASE_URL}/resume` },
    { url: `${BASE_URL}/writing`, ...(latestPost ? { lastModified: latestPost } : {}) },
    ...postEntries,
  ]
}
