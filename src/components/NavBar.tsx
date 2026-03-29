'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#connect', label: 'Connect' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%)',
      }}
    >
      {/* Logo / Name */}
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 18,
          color: '#f0f0f0',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        Tyler<span style={{ color: '#ff6b00' }}>.</span>
      </a>

      {/* Desktop nav */}
      <ul
        style={{
          display: 'flex',
          gap: 40,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: '#a0a0a0',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'none',
          padding: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
        }}
        aria-label="Toggle menu"
      >
        <span
          style={{
            display: 'block',
            width: 24,
            height: 2,
            background: '#f0f0f0',
            transition: 'transform 0.2s, opacity 0.2s',
            transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: 24,
            height: 2,
            background: '#f0f0f0',
            opacity: isOpen ? 0 : 1,
            transition: 'opacity 0.2s',
          }}
        />
        <span
          style={{
            display: 'block',
            width: 24,
            height: 2,
            background: '#f0f0f0',
            transition: 'transform 0.2s, opacity 0.2s',
            transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}
        />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 70,
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            zIndex: 99,
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 32,
                color: '#f0f0f0',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
