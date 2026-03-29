import { ExternalLink, Github, ArrowRight } from 'lucide-react'

interface Project {
  name: string
  description: string
  url: string
  github?: string
  tags: string[]
  screenshot: string
}

const projects: Project[] = [
  {
    name: 'agent-hosting',
    description: 'AI agent deployment platform. Ship your agents to production in minutes.',
    url: 'https://flumeusa.com/agent-hosting',
    github: 'https://github.com/tylerdotai/agent-hosting',
    tags: ['Live'],
    screenshot: '/screenshots/agent-hosting.png',
  },
  {
    name: 'clawplex',
    description: 'DFW AI builders community. Connect, collaborate, and ship together.',
    url: 'https://clawplex.dev',
    github: 'https://github.com/tylerdotai/clawplex',
    tags: ['Live'],
    screenshot: '/screenshots/clawplex.png',
  },
  {
    name: 'client-portal',
    description: 'Flume client management. Keep your projects organized and on track.',
    url: 'https://client-portal.flumeusa.com',
    github: 'https://github.com/tylerdotai/client-portal',
    tags: ['Beta'],
    screenshot: '/screenshots/client-portal.png',
  },
  {
    name: 'agent-to-agent-sms',
    description: 'Open source agent communication. Let your agents talk to each other via SMS.',
    url: 'https://github.com/tylerdotai/agent-to-agent-sms',
    github: 'https://github.com/tylerdotai/agent-to-agent-sms',
    tags: ['Experimental'],
    screenshot: '/screenshots/agent-to-agent-sms.png',
  },
]

const tagStyles: Record<string, string> = {
  Live: 'bg-success/10 text-success',
  Beta: 'bg-accent/10 text-accent',
  Experimental: 'bg-text-tertiary/10 text-text-tertiary',
}

const tagDotStyles: Record<string, string> = {
  Live: 'bg-success',
  Beta: 'bg-accent',
  Experimental: 'bg-text-tertiary',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="font-display font-[200] text-3xl md:text-4xl mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border border-border rounded-lg overflow-hidden card-hover"
            >
              {/* Screenshot placeholder */}
              <div className="relative aspect-[16/10] bg-bg-secondary border-b border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-text-tertiary font-body text-sm">
                    {project.name} screenshot
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-bg-dark/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg text-sm hover:bg-white/10 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display font-[400] text-xl">{project.name}</h3>
                  <div className="flex gap-2 shrink-0">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${tagStyles[tag]}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${tagDotStyles[tag]}`}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-body hover:underline"
                >
                  Visit <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
