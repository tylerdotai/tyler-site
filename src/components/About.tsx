import Image from 'next/image'

const interests = [
  'AI / Agents',
  'Homesteader',
  'IT Pro',
  '3D Printing',
  'DFW Community',
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
                alt="Tyler Delano on his homestead in Springtown, Texas"
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
                I'm an IT Support Associate at Amazon by day, and an AI agent builder by night. I
                live on a small homestead in Springtown, Texas with my wife Justine and son
                Spencer. We raise chickens, grow vegetables, and I spend every spare cycle
                building SaaS products with AI agent teams.
              </p>
              <p>
                I believe the future of software is autonomous agents working together. I'm
                building that future at{' '}
                <a href="https://flumeusa.com" className="text-accent hover:underline">
                  Flume SaaS Factory
                </a>
                .
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
