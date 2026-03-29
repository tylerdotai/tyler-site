'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import type { Post } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

interface BlogClientProps {
  post: Post
  content: string
  allSlugs: { slug: string; title: string }[]
}

export default function BlogClient({ post, content, allSlugs }: BlogClientProps) {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-24 pb-24">
        <div className="container max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent mb-12 transition-colors"
          >
            <ArrowLeft size={16} />
            All posts
          </Link>

          {/* Post header */}
          <header className="mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 font-mono text-sm text-text-secondary">
              <time>{formatDate(post.date)}</time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-accent">#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Post content */}
          <article
            className="prose prose-invert prose-lg max-w-none font-body"
            dangerouslySetInnerHTML={{ __html: post.content || content }}
          />

          {/* Prev/Next navigation */}
          <nav className="mt-16 pt-8 border-t border-border">
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-4">More writing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allSlugs.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  href={`/blog/${s.slug}`}
                  className="block p-4 bg-bg-secondary border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <span className="font-display font-bold text-sm">{s.title}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
