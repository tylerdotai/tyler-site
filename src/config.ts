// =============================================================================
// SITE CONFIG — edit this file to modify site-wide values
// =============================================================================

export const SITE = {
  url: 'https://tylerdotai.com',
  title: 'Tyler Delano',
  description: 'Tinkerer of AI. Running the Agent Builders Club — a DFW community of 600+ people learning to build with AI.',
  author: 'Tyler Delano',
  authorTagline: 'TINKERER OF AI',
  authorBio: 'IT Support Associate (L3) at Amazon by day. AI agent builder by night. Exceeds High Bar.',
  location: 'DFW, Texas',
  email: 'tyler@tylerdotai.com',
  github: 'https://github.com/tylerdotai',
  x: 'https://x.com/tylerdotai',
  linkedin: 'https://linkedin.com/in/tylerpdelano',
} as const;

// -----------------------------------------------------------------------------
// PALETTE — the five neo-brutalist colors
// Used in Tailwind as: bg-[#D2D2D2], text-[#00B8FF], border-[#000000], etc.
// -----------------------------------------------------------------------------


export const PALETTE = {
  /** Light gray — ground/background */
  GROUND: '#D2D2D2',
  /** Pure black — ink, text, borders */
  INK: '#000000',
  /** Electric blue — accent, links, highlights */
  ACCENT: '#00B8FF',
  /** Pure white — surface, cards, reversed text */
  SURFACE: '#FFFFFF',
  /** Dark gray — muted text, secondary elements */
  MUTED: '#4D4D4D',
} as const;

// -----------------------------------------------------------------------------
// TYPOGRAPHY
// -----------------------------------------------------------------------------


export const FONTS = {
  display: "'Bebas Neue', sans-serif",
  body: "'Space Grotesk', sans-serif",
  mono: "'Space Mono', monospace",
} as const;

// -----------------------------------------------------------------------------
// NAVIGATION
// -----------------------------------------------------------------------------


export const NAV_LINKS = [
  { label: 'BUILDS', href: '/builds' },
  { label: 'CREATIVE', href: '/creative' },
  { label: 'COMMUNITY', href: '/community' },
] as const;

// -----------------------------------------------------------------------------
// AGENT BUILDERS CLUB
// -----------------------------------------------------------------------------


export const COMMUNITY = {
  name: 'Agent Builders Club',
  tagline: 'DFW\'s AI Community',
  memberCount: 600,
  nodeCount: 6,
  location: 'Dallas-Fort Worth Metroplex',
  nextEvent: {
    date: 'August 2, 2025',
    time: '5–8pm',
    venue: '113 Barnett Blvd, Highland Village, TX 75077',
    host: 'Rony Daniel',
    rsvpUrl: null, // set to a URL when approval-required link exists
  },
  platforms: [
    { name: 'GitHub', href: 'https://github.com/tylerdotai', icon: 'github' },
    { name: 'X', href: 'https://x.com/tylerdotai', icon: 'x' },
    { name: 'Discord', href: 'https://discord.gg', icon: 'discord' }, // TODO: real Discord invite
  ],
} as const;

// -----------------------------------------------------------------------------
// BUILDS / PROJECTS
// -----------------------------------------------------------------------------


export const BUILDS = [
  {
    name: 'Singularity',
    description: 'Provider-neutral AI agent harness. Runs on your own API keys. Bun, TypeScript, SQLite.',
    stack: ['Bun', 'TypeScript'],
    github: 'https://github.com/tylerdotai/singularity',
    badge: 'BUN · TS',
    badgeBg: PALETTE.INK,
    badgeColor: PALETTE.ACCENT,
  },
  {
    name: 'Agent Loop System',
    description: 'Closed-loop agent harness with Python and JSON. Structured outputs, step-by-step reasoning.',
    stack: ['Python'],
    github: 'https://github.com/tylerdotai/agent-loop-system',
    badge: 'PYTHON',
    badgeBg: PALETTE.INK,
    badgeColor: PALETTE.ACCENT,
  },
  {
    name: 'AIAgainstParkinson',
    description: 'Daily AI research pipeline. PubMed → summary → EN/ES delivery. Every day, automatically.',
    stack: ['Research'],
    github: 'https://github.com/tylerdotai/parkinson-research',
    badge: 'RESEARCH',
    badgeBg: PALETTE.GROUND,
    badgeColor: PALETTE.INK,
    badgeBorder: PALETTE.INK,
  },
] as const;

// -----------------------------------------------------------------------------
// CREATIVE — ZV-E10 30-day challenge
// -----------------------------------------------------------------------------


export const CREATIVE = {
  camera: 'Sony ZV-E10',
  challenge: '30-day film challenge',
  manifesto: 'Every clip is a real moment. No crew. No script. Just a camera and whatever showed up that day.',
} as const;

// -----------------------------------------------------------------------------
// AIAgainstParkinson
// -----------------------------------------------------------------------------


export const PARKINSON = {
  title: 'AIAgainstParkinson',
  description: 'Daily AI research reports on Parkinson\'s disease, delivered in English and Spanish.',
  github: 'https://github.com/tylerdotai/parkinson-research',
  x: 'https://x.com/tylerdotai',
  languages: ['EN', 'ES'],
} as const;

// -----------------------------------------------------------------------------
// FOOTER
// -----------------------------------------------------------------------------


export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Tyler Delano. Built with OpenClaw.`,
  links: [
    { label: 'GitHub', href: SITE.github },
    { label: 'X', href: SITE.x },
    { label: 'LinkedIn', href: SITE.linkedin },
  ],
} as const;
