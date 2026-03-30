'use client'

import { useState, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&'

function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [active, setActive] = useState(false)
  const [displayed, setDisplayed] = useState(text)
  const frameRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)

  const animate = (now: number) => {
    const elapsed = now - startRef.current
    const duration = 400
    const progress = Math.min(elapsed / duration, 1)

    let result = ''
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        result += ' '
        continue
      }
      if (progress > i / text.length) {
        result += text[i]
      } else {
        result += CHARS[Math.floor(Math.random() * CHARS.length)]
      }
    }
    setDisplayed(result)

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }

  const handleEnter = () => {
    setActive(true)
    startRef.current = performance.now()
    const frame = requestAnimationFrame(animate)
    frameRef.current = frame
  }

  const handleLeave = () => {
    setActive(false)
    setDisplayed(text)
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
  }

  return (
    <span
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {displayed}
    </span>
  )
}

const projects = [
  {
    name: 'fortOS',
    tagline: 'AI agents that run your business.',
    description:
      'Autonomous AI agents handle operations, client communication, and delivery — so you focus on building. The operating system for agent-powered businesses.',
    url: 'https://fort-os.com',
    status: 'Live',
    statusColor: '#22c55e',
    tags: ['AI Agents', 'Operations', 'SaaS'],
  },
  {
    name: 'clawplex',
    tagline: 'DFW AI builder community.',
    description:
      "The gathering point for AI agent builders in North Texas. Built with a team of sub-agents, maintained in public. If you're building with AI agents in DFW, you're already part of it.",
    url: 'https://clawplex.dev',
    status: 'Live',
    statusColor: '#22c55e',
    tags: ['Community', 'Next.js', 'OpenClaw'],
  },
  {
    name: 'fwpdhockey.com',
    tagline: 'Fort Worth Panthers Police Hockey.',
    description:
      'Official site for the Fort Worth Panthers Police Hockey Team. Schedule, roster, and team info for the men and women in badge and blade.',
    url: 'https://fwpanthers.vercel.app',
    status: 'Live',
    statusColor: '#22c55e',
    tags: ['Sports', 'Next.js', 'Vercel'],
  },
  {
    name: 'tylerdotai.com',
    tagline: 'This site.',
    description:
      'AI agent builder. IT Pro at Amazon by day. Building the future of autonomous operations by night. Springtown, Texas.',
    url: 'https://tylerdotai.com',
    status: 'Live',
    statusColor: '#22c55e',
    tags: ['Personal', 'Next.js', 'OpenClaw'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '120px 24px',
        maxWidth: 1000,
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 56px)',
          color: '#f0f0f0',
          marginBottom: 16,
          letterSpacing: '-0.02em',
        }}
      >
        Projects
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          color: '#606060',
          marginBottom: 64,
          maxWidth: 500,
        }}
      >
        Things that exist and work.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}
      >
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: '#141414',
              border: '1px solid #1e1e1e',
              borderRadius: 10,
              padding: '28px 28px 24px',
              textDecoration: 'none',
              transition: 'border-color 0.2s, transform 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ff6b00'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e1e1e'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Status badge */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: project.statusColor,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: project.statusColor,
                  boxShadow: `0 0 6px ${project.statusColor}`,
                }}
              />
              {project.status}
            </span>

            {/* Name — scramble on hover */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 22,
                color: '#f0f0f0',
                marginBottom: 8,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
              }}
            >
              <ScrambleText text={project.name} />
            </h3>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                color: '#ff6b00',
                marginBottom: 16,
                fontStyle: 'italic',
              }}
            >
              {project.tagline}
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: '#808080',
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: '#606060',
                    background: '#1e1e1e',
                    padding: '4px 10px',
                    borderRadius: 4,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow indicator */}
            <span
              style={{
                position: 'absolute',
                top: 28,
                right: 28,
                color: '#2e2e2e',
                transition: 'color 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
