import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/components/ui/ui/sheet';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/builds', label: 'Builds' },
  { href: '/community', label: 'Community' },
  { href: '/creative', label: 'Creative' },
];

interface MobileNavProps {
  currentPath: string;
}

export function MobileNav({ currentPath }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-50 relative"
        >
          <span className="block w-full h-[2px] bg-white transition-transform duration-200 origin-center" />
          <span className="block w-full h-[2px] bg-white transition-opacity duration-200" />
          <span className="block w-full h-[2px] bg-white transition-transform duration-200 origin-center" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full bg-[#000000] border-l-4 border-[#000000] p-0 flex flex-col items-center justify-center gap-10"
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map(link => {
            const isActive =
              link.href === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-display text-5xl uppercase tracking-wide transition-colors duration-150 no-underline ${
                  isActive ? 'text-[#00B8FF]' : 'text-white hover:text-[#00B8FF]'
                }`}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://x.com/tylerdotai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-5xl uppercase tracking-wide text-white hover:text-[#00B8FF] transition-colors duration-150"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
            onClick={() => setOpen(false)}
          >
            X / TWITTER
          </a>
        </nav>

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 bg-transparent border-none cursor-pointer p-2"
        >
          <X className="w-8 h-8 text-white" />
        </button>
      </SheetContent>
    </Sheet>
  );
}
