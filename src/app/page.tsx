'use client'

import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Graveyard from '@/components/Graveyard'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

// Agent canvas — ambient background only
const AgentCanvas = dynamic(() => import('@/components/AgentCanvas'), { ssr: false })

export default function Home() {
  return (
    <>
      <AgentCanvas />
      <NavBar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Graveyard />
        <Connect />
        <Footer />
      </div>
    </>
  )
}
