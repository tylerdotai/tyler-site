export default function Currently() {
  const items = [
    { text: 'Building agent-hosting v2', emoji: '🚀' },
    { text: 'Reading The Making of the Atomic Bomb', emoji: '📚' },
    { text: 'Growing tomatoes (poorly)', emoji: '🌱' },
    { text: 'Teaching Spencer to code', emoji: '💻' },
    { text: 'Shipping Clawplex community features', emoji: '🦞' },
  ]

  return (
    <section
      id="currently"
      className="py-24 border-t border-b border-border bg-bg-secondary/30"
    >
      <div className="container">
        {/* Label */}
        <p className="font-display font-[200] text-xs tracking-[0.2em] uppercase text-text-tertiary mb-8">
          Currently
        </p>

        {/* Items */}
        <div className="flex flex-wrap gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-base text-text-secondary hover:border-border-strong hover:text-text-primary transition-colors cursor-default"
            >
              <span className="text-lg" role="img" aria-hidden="true">
                {item.emoji}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
