import { formatDate } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import type { Post } from '@/lib/posts'

export default function BlogCard({ post }: { post: Post }) {
  return (
    <article className="bg-bg-primary border border-border rounded-lg p-6 card-hover flex flex-col">
      {/* Date */}
      <time
        dateTime={post.date}
        className="font-body text-sm text-text-tertiary mb-3"
      >
        {formatDate(post.date)}
      </time>

      {/* Title */}
      <h3 className="font-display font-[400] text-xl mb-3 leading-snug">
        <a
          href={`/blog/${post.slug}/`}
          className="hover:text-accent transition-colors"
        >
          {post.title}
        </a>
      </h3>

      {/* Excerpt */}
      <p className="font-body text-text-secondary text-base flex-1 mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-bg-secondary text-text-tertiary rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Read link */}
      <a
        href={`/blog/${post.slug}/`}
        className="inline-flex items-center gap-1 text-accent font-body font-[400] hover:gap-2 transition-all"
      >
        Read <ArrowRight size={16} />
      </a>
    </article>
  )
}
