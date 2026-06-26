// =============================================================================
// SITE CONFIG — edit this file to modify site-wide values
// Every hardcoded value on the site should come from here.
// =============================================================================

export const SITE = {
  url: 'https://tylerdotai.com',
  title: 'Tyler Delano',
  description: 'AI Developer. Running the Agent Builders Club — a DFW community of 600+ people learning to build with AI.',
  author: 'Tyler Delano',
  tagline: 'AI DEVELOPER',
  bio: 'Community builder. Running the Agent Builders Club — a DFW community of 600+ people learning to build with AI.',
  location: 'DFW, Texas',
  email: 'tyler@tylerdotai.com',
  github: 'https://github.com/tylerdotai',
  x: 'https://x.com/tylerdotai',
  linkedin: 'https://linkedin.com/in/tylerpdelano',
} as const;

// -----------------------------------------------------------------------------
// PALETTE — the five neo-brutalist colors
// All pages and components reference these via Tailwind custom colors:
// bg-[var(--color-ground)] = #D2D2D2, text-[var(--color-accent)] = #00B8FF, etc.
// CSS vars are defined in src/styles/global.css @theme block
// -----------------------------------------------------------------------------
export const PALETTE = {
  GROUND:   '#D2D2D2',  // light gray — backgrounds
  INK:      '#000000',  // pure black — text, borders
  ACCENT:   '#00B8FF',  // electric blue — links, highlights
  SURFACE:  '#FFFFFF',  // pure white — cards, surfaces
  MUTED:    '#4D4D4D', // dark gray — secondary text
} as const;

// -----------------------------------------------------------------------------
// TYPOGRAPHY
// -----------------------------------------------------------------------------
export const FONTS = {
  display: "'Bebas Neue', sans-serif",
  body:    "'Space Grotesk', sans-serif",
  mono:    "'Space Mono', monospace",
} as const;

// -----------------------------------------------------------------------------
// HERO — homepage
// -----------------------------------------------------------------------------
export const HERO = {
  heading: 'DEVELOPER\nOF AI',
  subheading: 'Running the Agent Builders Club — a DFW community of 600+ people learning to build with AI.',
  ctaPrimary:   { label: 'SEE WHAT I BUILD', href: '/builds' },
  ctaSecondary: { label: 'AGENT BUILDERS CLUB', href: '/community' },
} as const;

// -----------------------------------------------------------------------------
// THREE PILLARS — homepage
// -----------------------------------------------------------------------------
export const PILLARS = [
  {
    number: '01',
    name: 'BUILD',
    heading: 'AGENTS\n& TOOLS',
    body: 'Provider-neutral AI agent harnesses, closed-loop systems, and research pipelines. Bun, TypeScript, Python — whatever gets the job done.',
    link: { label: 'VIEW ALL BUILDS →', href: '/builds' },
  },
  {
    number: '02',
    name: 'COMMUNITY',
    heading: 'AGENT\nBUILDERS CLUB',
    body: '600+ members across 6 DFW locations learning to build AI-powered workflows. No fluff. Just builders showing each other what works.',
    link: { label: 'JOIN THE CLUB →', href: '/community' },
  },
  {
    number: '03',
    name: 'CREATE',
    heading: 'FILM\n& STORY',
    body: '30 days with the Sony ZV-E10. Every clip is a real moment. No crew. No script. Just a camera and whatever showed up that day.',
    link: { label: 'SEE THE FOOTAGE →', href: '/creative' },
  },
] as const;

// -----------------------------------------------------------------------------
// ABOUT — homepage bio section
// -----------------------------------------------------------------------------
export const ABOUT = {
  year: '2026',
  yearLabel: 'YEAR OF THE AGENT',
  heading: 'FROM PIP TO\nDEVELOPER',
  paragraphs: [
    'March 2024, Amazon put me on a Performance Improvement Plan. Three months to turn it around or get cut. Instead of panic-applying to jobs, I got curious about AI agents.',
    'Built a crew of AI subagents to handle the PIP tasks for me. They didn\'t save my job — but they showed me what was actually possible when you stop using AI as a chatbot and start treating it like a workforce.',
    'Got rated "Exceeds High Bar" on my mid-year review. Got a raise. Decided: this is the thing. Let\'s go all in.',
  ],
  stats: [
    { value: '600+', label: 'Members' },
    { value: '6', label: 'DFW Nodes', borderLeft: true },
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
    badgeVariant: 'ink' as const,
  },
  {
    name: 'Agent Loop System',
    description: 'Closed-loop agent harness with Python and JSON. Structured outputs, step-by-step reasoning.',
    stack: ['Python'],
    github: 'https://github.com/tylerdotai/agent-loop-system',
    badge: 'PYTHON',
    badgeVariant: 'ink' as const,
  },
  {
    name: 'AIAgainstParkinson',
    description: 'Daily AI research pipeline. PubMed → summary → EN/ES delivery. Every day, automatically.',
    stack: ['Research'],
    github: 'https://github.com/tylerdotai/parkinson-research',
    badge: 'RESEARCH',
    badgeVariant: 'ground' as const,
  },
] as const;

// -----------------------------------------------------------------------------
// CTA — homepage
// -----------------------------------------------------------------------------
export const CTA = {
  heading: 'WANT TO\nBUILD WITH ME?',
  body: 'Join the Agent Builders Club — 600+ DFW builders learning to ship AI-powered workflows. No hype. Just hands-on work and real connections.',
  ctaPrimary:   { label: 'JOIN AGENT BUILDERS CLUB', href: '/community' },
  ctaSecondary: { label: 'SEE MY PROJECTS', href: '/builds' },
  grid: [
    { value: '600+', label: 'Members', bg: PALETTE.SURFACE, shadow: PALETTE.ACCENT },
    { value: '6',     label: 'DFW Nodes', bg: PALETTE.INK,    shadow: null },
    { value: 'DFW',   label: 'Metro Area', bg: PALETTE.INK,   shadow: null },
    { value: '2026',  label: 'Founded', bg: PALETTE.SURFACE, shadow: PALETTE.ACCENT },
  ],
} as const;

// -----------------------------------------------------------------------------
// AGENT BUILDERS CLUB — shared data
// -----------------------------------------------------------------------------
export const COMMUNITY = {
  name: 'Agent Builders Club',
  tagline: 'DFW AI Community',
  description: 'Agent Builders Club — DFW AI community. 600+ members, 6 physical nodes, learning to build with AI.',
  memberCount: '600+',
  nodeCount: 6,
  location: 'Dallas-Fort Worth Metroplex',
  nextEvent: {
    date: 'July 15, 2026',
    time: '5–7pm',
    venue: 'The DEC Network @ Fort Worth · 600 Bryan Ave #220, Fort Worth, TX',
    host: 'ClawPlex × FWTX DAO',
    rsvpUrl: null as string | null,
  },
  about: 'The community grew to 600+ across 6 physical nodes in the DFW metro. Each node is independently organized. Each has its own flavor. All of them are focused on the same thing: building.',
  nodes: [
    {
      name: 'DFW Node 06 — Hermes',
      location: 'Spark Coworking Arlington',
      description: null as string | null,
      photos: [
        { src: '/assets/community/node-06-hermes-01.webp', alt: 'DFW Node 06 — Hermes at Spark Coworking Arlington' },
        { src: '/assets/community/node-06-hermes-02.webp', alt: 'DFW Node 06 — Hermes at Spark Coworking Arlington' },
        { src: '/assets/community/node-06-hermes-03.webp', alt: 'DFW Node 06 — Hermes at Spark Coworking Arlington' },
      ],
    },
    {
      name: 'DFW Node 05 — Claude Tools',
      location: 'Office Evolution Southlake',
      description: '30+ DFW builders gathered for an honest conversation about the AI tools actually on their desks — Cursor, Claude Code, OpenCode, OpenAI, Hermes, OpenClaw, and more. No slides, no pitches.',
      photos: [
        { src: '/assets/community/node-05-claude-tools-01.webp', alt: 'DFW Node 05 — Claude Tools at Office Evolution Southlake' },
      ],
    },
    {
      name: 'DFW Node 04 — Frisco',
      location: '25N Coworking',
      description: null as string | null,
      photos: [
        { src: '/assets/community/node-04-frisco-01.jpeg', alt: 'DFW Node 04 — Frisco at 25N Coworking' },
      ],
    },
    {
      name: 'DFW Node 03 — Fort Worth',
      location: null as string | null,
      description: null as string | null,
      photos: [
        { src: '/assets/community/node-03-fort-worth-01.png', alt: 'DFW Node 03 — Fort Worth Mac Mini OpenClaw Workshop' },
      ],
    },
    {
      name: 'ClawCon DFW',
      location: 'DFW',
      description: "The inaugural ClawCon — DFW's first AI builders conference. A full day of live demos, agent builds, and honest conversations about what's actually working in AI right now.",
      photos: [
        { src: '/assets/community/clawcon-01.webp', alt: 'ClawCon DFW — inaugural AI builders conference' },
      ],
    },
  ],
} as const;

// -----------------------------------------------------------------------------
// CREATIVE — ZV-E10 challenge
// -----------------------------------------------------------------------------
export const CREATIVE = {
  camera: 'Sony Alpha ZV-E10',
  cameraLine: 'Shot on Sony Alpha ZV-E10. Edited in CapCut.',
  challenge: '30-day film challenge',
  manifesto: 'Every clip is a real moment. No crew. No script. Just a camera and whatever showed up that day.',
  vaultLabel: 'DEVICE // SONY ZV-E10',
  archiveIntro: "Photography, video stills, and short-form motion work from Tyler Delan's Sony ZV-E10 archive — high contrast, real frames, no stock filler.",
  reelIntro: 'Video work is separated from the photo vault. Poster frames are labeled as video stills — not standalone photos.',
} as const;

// -----------------------------------------------------------------------------
// AIAgainstParkinson
// -----------------------------------------------------------------------------
export const PARKINSON = {
  title: 'AIAgainstParkinson',
  heroHeading: 'Every day.\nEvery paper.',
  heroBody: 'AIAgainstParkinson surfaces and summarizes the latest Parkinson\'s research every day — automatically. Built for patients, caregivers, and researchers who don\'t have time to read everything.',
  missionHeadline1: 'This is personal.',
  missionBody1: "Someone I care about lives with Parkinson's. Every morning, a cron job reads the latest PubMed papers, generates a plain-language summary in both English and Spanish, and posts it — automatically.\nNo paywall. No algorithm. Just research, delivered.",
  missionHeadline2: 'Reports posting daily.',
  missionBody2: 'Currently delivering in English and Spanish. Zero subscribers — the system runs regardless. Follow updates on X.',
  ctaBody: 'AIAgainstParkinson is a daily automated research pipeline.',
  github: 'https://github.com/tylerdotai/parkinson-research',
  x: 'https://x.com/tylerdotai',
  languages: ['EN', 'ES'] as const,
} as const;

// -----------------------------------------------------------------------------
// NAVIGATION
// -----------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: 'HOME',     href: '/' },
  { label: 'BUILDS',   href: '/builds' },
  { label: 'CREATIVE', href: '/creative' },
  { label: 'COMMUNITY',href: '/community' },
] as const;

// -----------------------------------------------------------------------------
// FOOTER
// -----------------------------------------------------------------------------
export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Tyler Delano. All rights reserved.`,
  links: [
    { label: 'GitHub',  href: SITE.github },
    { label: 'X',       href: SITE.x },
    { label: 'LinkedIn',href: SITE.linkedin },
  ],
} as const;
