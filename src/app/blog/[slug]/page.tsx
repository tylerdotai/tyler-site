import { getPost, getSortedPosts } from '@/lib/posts'
import BlogClient from '../BlogClient'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Tyler Delano`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = getSortedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)
  const allPosts = getSortedPosts()

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl mb-4">Post not found</h1>
          <a href="/blog/" className="text-accent hover:underline">← Back to writing</a>
        </div>
      </div>
    )
  }

  return (
    <BlogClient
      post={post}
      content={post.content}
      allSlugs={allPosts.map((p) => ({ slug: p.slug, title: p.title }))}
    />
  )
}
