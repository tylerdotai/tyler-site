'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const TAGLINES = [
  'Building agents that ship.',
  'IT Pro. AI Builder. Chicken Farmer.',
  'I make AI agents work. Then I make them work harder.',
]

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const tagline = TAGLINES[currentTagline]
    let charIndex = 0
    setDisplayedText('')
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (charIndex < tagline.length) {
        setDisplayedText(tagline.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        // Pause then move to next tagline
        setTimeout(() => {
          setCurrentTagline((prev) => (prev + 1) % TAGLINES.length)
        }, 2500)
      }
    }, 40)

    return () => clearInterval(typeInterval)
  }, [currentTagline])

  const handleScroll = () => {
    const element = document.querySelector('#currently')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="text-center max-w-4xl animate-fade-in-up">
        {/* Pre-title */}
        <p className="font-body text-sm tracking-widest uppercase text-text-tertiary mb-6">
          Tyler Delano
        </p>

        {/* Kinetic tagline */}
        <h1
          className="font-display font-[200] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[1] tracking-tight mb-8"
          style={{ fontOpticalSizing: 'auto' }}
        >
          <span className="text-text-primary">{displayedText}</span>
          {isTyping && (
            <span className="inline-block w-[3px] h-[0.8em] bg-accent ml-1 animate-pulse" />
          )}
        </h1>

        {/* Subtext */}
        <p className="font-body font-[300] text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          IT Support Associate at Amazon by day. AI agent builder by night. Living the
          homestead life in Springtown, Texas with my wife Justine and son Spencer.
        </p>

        {/* CTA */}
        <div className="mt-12 flex gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-body font-[400] rounded-lg hover:bg-accent-hover transition-colors"
          >
            See Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-strong text-text-primary font-body font-[400] rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-tertiary hover:text-accent transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
