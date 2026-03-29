import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-text-tertiary">
          © {new Date().getFullYear()} Tyler Delano. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-text-tertiary hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Top
          </a>
          <span className="text-sm text-text-tertiary">
            Built with{' '}
            <a
              href="https://openclaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              OpenClaw
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
