'use client'

import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

// Dynamically import heavy client components (no SSR needed)
const AgentCanvas = dynamic(() => import('@/components/AgentCanvas'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
const ClawScratch = dynamic(() => import('@/components/ClawScratch'), { ssr: false })

export default function Home() {
  return (
    <>
      <AgentCanvas />
      <CustomCursor />
      <ClawScratch />
      <NavBar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Connect />
        <Footer />
      </div>
    </>
  )
}
