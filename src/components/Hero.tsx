'use client'

import { useEffect, useState } from 'react'

const headlines = [
  'Building agentic systems that actually ship.',
  'IT Pro. AI Builder. Flume Founder.',
  'Autonomous agents. Real products. No sleep.',
]

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const headline = headlines[headlineIndex]
    let charIndex = 0
    setDisplayedText('')
    setIsTyping(true)

    const interval = setInterval(() => {
      if (charIndex < headline.length) {
        setDisplayedText(headline.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(interval)
        setIsTyping(false)
        setTimeout(() => {
          setHeadlineIndex((prev) => (prev + 1) % headlines.length)
        }, 2500)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [headlineIndex])

  const handleScroll = () => {
    const el = document.querySelector('#about')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 24px',
        paddingTop: 80,
      }}
    >
      {/* Pre-title */}
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#606060',
          marginBottom: 32,
        }}
      >
        Tyler Delano
      </p>

      {/* Main headline */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(40px, 7vw, 96px)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#f0f0f0',
          maxWidth: 900,
          marginBottom: 32,
        }}
      >
        {displayedText}
        {isTyping && (
          <span
            style={{
              display: 'inline-block',
              width: 3,
              height: '0.9em',
              background: '#ff6b00',
              marginLeft: 4,
              verticalAlign: 'text-bottom',
              animation: 'blink 0.8s step-end infinite',
            }}
          />
        )}
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: '#a0a0a0',
          maxWidth: 560,
          lineHeight: 1.7,
          marginBottom: 48,
        }}
      >
        IT Support Associate at Amazon by day. AI agent builder by night.
        Co-founder of Flume SaaS Factory. Springtown, Texas.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <a
          href="#projects"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 500,
            padding: '14px 28px',
            background: '#ff6b00',
            color: '#000',
            borderRadius: 6,
            textDecoration: 'none',
            transition: 'background 0.2s, transform 0.1s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ff8533'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ff6b00'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          See Projects
        </a>
        <a
          href="#about"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 500,
            padding: '14px 28px',
            background: 'transparent',
            color: '#f0f0f0',
            border: '1px solid #2e2e2e',
            borderRadius: 6,
            textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ff6b00'
            e.currentTarget.style.color = '#ff6b00'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#2e2e2e'
            e.currentTarget.style.color = '#f0f0f0'
          }}
        >
          About Me
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        style={{
          position: 'absolute',
          bottom: 40,
          background: 'none',
          border: 'none',
          cursor: 'none',
          color: '#606060',
          padding: 12,
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b00')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#606060')}
        aria-label="Scroll down"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
