'use client'

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
          IT Support Associate at Amazon by day. AI agent builder by night. I spend my off-hours building autonomous systems that do the work so operators don&apos;t have to.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#a0a0a0',
            lineHeight: 1.8,
          }}
        >
          15 years in IT taught me how systems actually work. Now I&apos;m applying that to AI agent infrastructure — building tools, hosting platforms, and automation systems that make autonomous agents actually useful in the real world. Not demos. Not prompts. Systems that run.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#a0a0a0',
            lineHeight: 1.8,
          }}
        >
          Springtown, Texas. Married to Justine, dad to Spencer. Chickens, garden, and a stubborn refusal to ask big tech for permission to build things.
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
            { label: 'Night Job', value: 'AI Agent Builder' },
            { label: 'Focus', value: 'Autonomous Operations' },
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
