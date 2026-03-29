import { getSortedPosts } from '@/lib/posts'
import BlogCard from './BlogCard'
import { Rss } from 'lucide-react'

export default function BlogSection() {
  const posts = getSortedPosts().slice(0, 3)

  return (
    <section id="blog" className="py-24">
      <div className="container">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display font-[200] text-3xl md:text-4xl">Writing</h2>
          <a
            href="/rss.xml"
            className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-accent transition-colors"
            title="RSS Feed"
          >
            <Rss size={16} />
            <span className="hidden sm:inline">RSS</span>
          </a>
        </div>

        {/* Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-text-secondary font-body">No posts yet. Check back soon.</p>
        )}

        {/* View all */}
        {posts.length > 0 && (
          <div className="mt-12 text-center">
            <a
              href="/blog/"
              className="inline-flex items-center gap-2 text-accent font-body hover:underline"
            >
              View all posts →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
