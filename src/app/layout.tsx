import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Tyler Delano | IT Pro. AI Builder. Agent Builder.',
    template: '%s | Tyler Delano',
  },
  description:
    'IT Support Associate at Amazon by day, AI agent builder by night. Living the homestead life in Springtown, Texas.',
  keywords: ['AI', 'agent hosting', 'homesteader', 'IT professional', 'Flume SaaS', 'Tyler Delano'],
  authors: [{ name: 'Tyler Delano', url: 'https://tylerdotai.com' }],
  creator: 'Tyler Delano',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tylerdotai.com',
    siteName: 'Tyler Delano',
    title: 'Tyler Delano | IT Pro. AI Builder. Homesteader.',
    description:
      'IT Support Associate at Amazon by day, AI agent builder by night. Living the homestead life in Springtown, Texas.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tylerdotai',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,200;9..144,400&family=Literata:wght@300;400;500&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" title="Tyler Delano RSS Feed" href="/rss.xml" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
