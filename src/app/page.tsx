import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Currently from '@/components/Currently'
import BlogSection from '@/components/BlogSection'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <Hero />
        <Currently />
        <BlogSection />
        <About />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
