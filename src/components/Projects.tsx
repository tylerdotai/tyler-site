const projects = [
  {
    name: 'agent-hosting',
    tagline: 'Your OpenClaw agent, always on.',
    description:
      'Deploy and manage AI agents on your own infrastructure. Built for developers and teams who want the power of autonomous agents without surrendering control to a third-party API. VPS provisioning, Telegram/Discord integration, persistent sessions, and 99.5–99.9% SLA.',
    url: 'https://flumeusa.com/agent-hosting',
    status: 'Live',
    statusColor: '#22c55e',
    tags: ['OpenClaw', 'Infrastructure', 'Node.js'],
  },
  {
    name: 'clawplex',
    tagline: 'DFW AI builder community.',
    description:
      "The community feed for AI agent builders in the Dallas-Fort Worth area. Built with a team of sub-agents, maintained in public. If you're building with AI agents in North Texas, you're already part of it whether you know it or not.",
    url: 'https://clawplex.dev',
    status: 'Live',
    statusColor: '#22c55e',
    tags: ['Community', 'Next.js', 'OpenClaw'],
  },
  {
    name: 'client-portal',
    tagline: 'Professional workspace for your clients.',
    description:
      'A clean, minimal client portal for Flume projects. Share deliverables, track progress, and keep client relationships organized without the bloat of full CRM systems. Built for flume, usable by anyone.',
    url: 'https://client-portal.flumeusa.com',
    status: 'MVP',
    statusColor: '#ff6b00',
    tags: ['SaaS', 'Next.js', 'Vercel'],
  },
  {
    name: 'agent-to-agent-sms',
    tagline: 'Agent SMS via Sendblue.',
    description:
      'Open-source tool for sending SMS and iMessages between AI agents. Uses Sendblue API to give your agent fleet a phone number. Useful for alerts, coordination, and making your agent team reachable without tying into personal phone lines.',
    url: 'https://github.com/tylerdotai/agent-to-agent-sms',
    status: 'Open Source',
    statusColor: '#a78bfa',
    tags: ['Open Source', 'SMS', 'MCP'],
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
        Real things, shipping to real users.
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

            {/* Name */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 22,
                color: '#f0f0f0',
                marginBottom: 8,
                letterSpacing: '-0.01em',
              }}
            >
              {project.name}
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
