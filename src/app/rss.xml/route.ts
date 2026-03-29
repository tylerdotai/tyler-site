import { getSortedPosts } from '@/lib/posts'
import { Feed } from 'feed'

const SITE_URL = 'https://tylerdotai.com'

export async function GET() {
  const posts = getSortedPosts()

  const feed = new Feed({
    title: 'Tyler — tylerdotai.com',
    description: 'IT Pro. AI Builder. Homesteader.',
    id: SITE_URL,
    link: SITE_URL,
    language: 'en-us',
    copyright: `All rights reserved ${new Date().getFullYear()}, Tyler Delano`,
    updated: posts.length > 0 ? new Date(posts[0].date) : new Date(),
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
    },
    author: {
      name: 'Tyler Delano',
      link: SITE_URL,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/blog/${post.slug}/`,
      link: `${SITE_URL}/blog/${post.slug}/`,
      description: post.excerpt,
      date: new Date(post.date),
      author: [
        {
          name: 'Tyler Delano',
          link: SITE_URL,
        },
      ],
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
