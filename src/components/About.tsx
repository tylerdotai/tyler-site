import Image from 'next/image'

const interests = [
  'AI / Agentic Workflows',
  'OpenClaw Platform',
  'Flume SaaS Factory',
  'Clawplex Community',
  'Local LLM Infrastructure',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary/20">
      <div className="container">
        <h2 className="font-display font-[200] text-3xl md:text-4xl mb-16">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-border">
              <Image
                src="/tyler-headshot.jpg"
                alt="Tyler Delano"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="font-body text-lg leading-relaxed space-y-6 text-text-primary">
              <p>
                IT Support Associate at Amazon by day. AI agent builder and SaaS founder by night.
                Based in Springtown, Texas — building the future of software with autonomous agent teams.
              </p>
              <p>
                I run <a href="https://flumeusa.com" className="text-accent hover:underline">
                  Flume SaaS Factory
                </a> — products include agent-hosting, Clawplex, and client portal. I also organize the{' '}
                <a href="https://clawplex.dev" className="text-accent hover:underline">
                  Clawplex community
                </a>, a DFW-based network of builders shipping with AI agents.
              </p>
              <p>
                I believe the future of software is autonomous agents working together — and I'm
                building that future now, one agent team at a time.
              </p>
            </div>

            {/* Callout */}
            <blockquote className="mt-10 pl-6 border-l-4 border-accent">
              <p className="font-display font-[200] text-xl md:text-2xl text-text-primary italic">
                "AI agents will replace 80% of SaaS in 5 years."
              </p>
            </blockquote>

            {/* Interests grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interests.map((label) => (
                <div
                  key={label}
                  className="px-4 py-3 border border-border rounded-lg text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  <span className="font-body text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
