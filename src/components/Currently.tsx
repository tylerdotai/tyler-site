export default function Currently() {
  const items = [
    'Building agent-hosting v2',
    'Growing the Clawplex DFW community',
    'Shipping AI agent workflows for Flume clients',
    'Running production agents on OpenClaw',
    'Experimenting with local models on Titan',
  ]

  return (
    <section
      id="currently"
      className="py-24 border-t border-b border-border"
    >
      <div className="container">
        {/* Label */}
        <p className="font-display font-[200] text-xs tracking-[0.2em] uppercase text-text-tertiary mb-8">
          Currently
        </p>

        {/* Items */}
        <div className="flex flex-wrap gap-4">
          {items.map((text, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-base text-text-secondary hover:border-border-strong hover:text-text-primary transition-colors cursor-default"
            >
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
