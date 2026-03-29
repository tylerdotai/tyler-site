const links = [
  {
    label: 'X / Twitter',
    handle: '@tylerdotai',
    description: 'Thoughts, builds, chaos.',
    href: 'https://x.com/tylerdotai',
  },
  {
    label: 'GitHub',
    handle: 'tylerdotai',
    description: 'Repos and experiments.',
    href: 'https://github.com/tylerdotai',
  },
  {
    label: 'LinkedIn',
    handle: 'Tyler Delano',
    description: 'Professional trail.',
    href: 'https://linkedin.com/in/tylerdelano',
  },
  {
    label: 'Email',
    handle: 'tyler@tyler.ai',
    description: 'Direct line.',
    href: 'mailto:tyler@tyler.ai',
  },
]

export default function Connect() {
  return (
    <section
      id="connect"
      style={{
        padding: '120px 24px',
        textAlign: 'center',
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
        Let's Connect
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          color: '#606060',
          marginBottom: 64,
          maxWidth: 400,
          margin: '0 auto 64px',
        }}
      >
        Reach out. I'm always interested in what builders are working on.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16,
          maxWidth: 700,
          margin: '0 auto',
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              padding: '24px 32px',
              background: '#141414',
              border: '1px solid #1e1e1e',
              borderRadius: 8,
              textDecoration: 'none',
              minWidth: 160,
              transition: 'border-color 0.2s, transform 0.15s',
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
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 18,
                color: '#f0f0f0',
              }}
            >
              {link.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: '#ff6b00',
              }}
            >
              {link.handle}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                color: '#606060',
              }}
            >
              {link.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
