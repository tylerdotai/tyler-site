'use client'

const graveyard = [
  {
    name: 'agent-hosting',
    description: 'VPS agent hosting platform. Replaced by fortOS.',
    url: 'https://github.com/tylerdotai/agent-hosting',
    year: '2024-2025',
  },
  {
    name: 'client-portal',
    description: 'Client project portal. Killed for focus.',
    url: 'https://github.com/tylerdotai/client-portal',
    year: '2024-2025',
  },
  {
    name: 'agent-to-agent-sms',
    description: 'Agent SMS via Sendblue. Useful concept, no traction.',
    url: 'https://github.com/tylerdotai/agent-to-agent-sms',
    year: '2024',
  },
  {
    name: 'leadforge-ai',
    description: 'Lead generation tool. Deprecated.',
    url: 'https://github.com/tylerdotai/leadforge-ai',
    year: '2024',
  },
  {
    name: 'flume-crm',
    description: 'Internal CRM. Absorbed into fortOS.',
    url: 'https://github.com/tylerdotai',
    year: '2024',
  },
  {
    name: 'flume-board',
    description: 'Project board tool. Deprecated.',
    url: 'https://github.com/tylerdotai',
    year: '2024',
  },
]

export default function Graveyard() {
  return (
    <section
      id="graveyard"
      style={{
        padding: '120px 24px',
        maxWidth: 800,
        margin: '0 auto',
        borderTop: '1px solid #1e1e1e',
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
        Graveyard
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          color: '#606060',
          marginBottom: 48,
          maxWidth: 500,
        }}
      >
        Dead projects. Lessons learned. Everything here shipped something real.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {graveyard.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '16px 0',
              borderBottom: '1px solid #1a1a1a',
              textDecoration: 'none',
              transition: 'padding-left 0.2s',
              gap: 24,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.paddingLeft = '8px'
              e.currentTarget.style.borderBottomColor = '#2a2a2a'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.paddingLeft = '0'
              e.currentTarget.style.borderBottomColor = '#1a1a1a'
            }}
          >
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  color: '#f0f0f0',
                  marginRight: 12,
                }}
              >
                {project.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: '#505050',
                }}
              >
                {project.description}
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: '#303030',
                whiteSpace: 'nowrap',
              }}
            >
              {project.year}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
