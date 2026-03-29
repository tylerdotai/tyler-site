import { getSortedPosts } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Thoughts on AI agents, homesteader life, IT pro tips, and building SaaS.',
}

export default function BlogIndex() {
  const posts = getSortedPosts()

  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-24 pb-24">
        <div className="container">
          <h1 className="font-display font-[200] text-4xl md:text-5xl mb-4">Writing</h1>
          <p className="font-body text-text-secondary text-lg mb-12 max-w-2xl">
            Thoughts on AI agents, homesteader life, IT pro tips, and building SaaS.
          </p>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
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
