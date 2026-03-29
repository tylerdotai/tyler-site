export default function Footer() {
  return (
    <footer
      style={{
        padding: '48px 24px',
        borderTop: '1px solid #1e1e1e',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 1000,
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 16,
            color: '#f0f0f0',
          }}
        >
          Tyler<span style={{ color: '#ff6b00' }}>.</span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: '#606060',
          }}
        >
          © {new Date().getFullYear()}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: '#606060',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b00')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#606060')}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
