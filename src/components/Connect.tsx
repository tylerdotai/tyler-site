import { Twitter, Github, Send, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    name: 'Twitter / X',
    url: 'https://x.com/tylerdotai',
    icon: Twitter,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tylerdotai',
    icon: Github,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/tylerdotai',
    icon: Send,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tylerpdelano',
    icon: Linkedin,
  },
]

export default function Connect() {
  return (
    <section id="connect" className="py-24 bg-bg-dark text-text-inverse">
      <div className="container text-center">
        <h2 className="font-display font-[200] text-3xl md:text-4xl mb-6">Let's Connect</h2>
        <p className="font-body text-text-inverse/70 mb-12 max-w-md mx-auto">
          Follow along as I build in public. Questions, collabs, or just want to say hi? Reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 border border-text-inverse/20 rounded-lg hover:border-accent hover:text-accent transition-colors min-w-[160px] justify-center"
            >
              <link.icon size={20} />
              <span className="font-body">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
