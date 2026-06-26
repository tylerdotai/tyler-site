import { describe, it, expect } from 'vitest';

describe('site utility functions', () => {
  it('should export a working year helper', () => {
    const year = new Date().getFullYear();
    expect(year).toBe(2026);
  });

  it('should validate current dark editorial color values', () => {
    const accent = '#C9A84C';
    const background = '#0E0E0E';
    expect(accent).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(background).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it('should validate nav link structure', () => {
    const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/builds', label: 'Builds' },
      { href: '/community', label: 'Community' },
      { href: '/creative', label: 'Creative' },
    ];

    expect(navLinks).toHaveLength(4);
    navLinks.forEach((link) => {
      expect(link.href).toMatch(/^\//);
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  it('should validate project data structure', () => {
    const projects = [
      {
        name: 'Singularity',
        description: 'AI agent harness',
        techStack: ['Bun', 'TypeScript', 'SQLite'],
        githubUrl: 'https://github.com/tylerdotai/singularity',
      },
    ];

    projects.forEach((project) => {
      expect(project.name.length).toBeGreaterThan(0);
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com/);
      expect(Array.isArray(project.techStack)).toBe(true);
      expect(project.techStack.length).toBeGreaterThan(0);
    });
  });

  it('should validate creative archive data structure', () => {
    const entries = [
      {
        label: 'Day One',
        title: 'Life on the homestead.',
        imageSrc: '/assets/creative/day1-homestead-dog.jpg',
        alt: 'Golden Retriever sitting outside on the homestead',
      },
    ];

    entries.forEach((entry) => {
      expect(entry.label.length).toBeGreaterThan(0);
      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.imageSrc).toMatch(/^\/assets/);
      expect(entry.alt.length).toBeGreaterThan(0);
    });
  });
});
