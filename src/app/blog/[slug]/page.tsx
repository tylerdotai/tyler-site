import { getPost, getSortedPosts } from '@/lib/posts'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { formatDate } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkHtml from 'remark-html'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
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

  if (!post) {
    return (
      <>
        <NavBar />
        <main className="pt-24 pb-24">
          <div className="container">
            <h1 className="font-display font-[200] text-4xl mb-4">Post not found</h1>
            <a href="/blog/" className="text-accent hover:underline">
              ← Back to writing
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-24 pb-24">
        <article className="container max-w-3xl">
          {/* Back link */}
          <a
            href="/blog/"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Writing
          </a>

          {/* Header */}
          <header className="mb-12">
            <time dateTime={post.date} className="text-sm text-text-tertiary mb-4 block">
              {formatDate(post.date)}
            </time>
            <h1 className="font-display font-[200] text-4xl md:text-5xl leading-tight mb-6">
              {post.title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2">
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
          </header>

          {/* Content */}
          <div className="prose font-body">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [],
                },
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
