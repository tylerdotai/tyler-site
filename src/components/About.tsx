export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 24px',
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 56px)',
          color: '#f0f0f0',
          marginBottom: 48,
          letterSpacing: '-0.02em',
        }}
      >
        About
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#a0a0a0',
            lineHeight: 1.8,
          }}
        >
          I'm an IT Support Associate at Amazon by day. By night, I'm building Flume SaaS Factory — a product studio where AI agents do the heavy lifting so small businesses don't have to pay enterprise prices for enterprise software.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#a0a0a0',
            lineHeight: 1.8,
          }}
        >
          The short version: I've spent 15 years in IT learning how systems actually work. Now I'm applying that to AI agent infrastructure — building tools, hosting platforms, and automation systems that make autonomous agents actually useful in the real world.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#a0a0a0',
            lineHeight: 1.8,
          }}
        >
          I live in Springtown, Texas with my wife Justine and our son Spencer. We raise chickens, grow food, and generally try to stay stubborn about doing hard things without asking big tech for permission.
        </p>

        {/* Key facts */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 24,
            marginTop: 16,
            paddingTop: 40,
            borderTop: '1px solid #1e1e1e',
          }}
        >
          {[
            { label: 'Location', value: 'Springtown, TX' },
            { label: 'Day Job', value: 'L3 IT Support @ Amazon' },
            { label: 'Night Job', value: 'Co-founder, Flume' },
            { label: 'Focus', value: 'AI Agent Infrastructure' },
          ].map((fact) => (
            <div key={fact.label}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#606060',
                  marginBottom: 6,
                }}
              >
                {fact.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  color: '#f0f0f0',
                }}
              >
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
