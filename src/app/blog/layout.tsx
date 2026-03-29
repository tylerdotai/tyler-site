import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing | Tyler Delano',
  description: 'Thoughts on AI agents, homesteader life, IT pro tips, and building SaaS.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
