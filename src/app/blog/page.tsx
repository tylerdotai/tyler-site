'use client'

import { useState, useEffect } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
}

export default function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-24 pb-24">
        <div className="container">
          <h1 className="font-display font-[200] text-4xl md:text-5xl mb-4">Writing</h1>
          <p className="font-body text-text-secondary text-lg mb-12 max-w-2xl">
            Thoughts on AI agents, homesteader life, IT pro tips, and building SaaS.
          </p>

          {loading ? (
            <p className="text-text-secondary font-body">Loading...</p>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 bg-bg-secondary border border-border rounded-lg transition-colors hover:border-accent"
                >
                  <h2 className="font-display font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-text-secondary mb-4">{post.date}</p>
                  <p className="font-body text-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-accent">
                    Read <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary font-body">No posts yet. Check back soon.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
