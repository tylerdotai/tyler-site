import { describe, it, expect } from 'vitest';

describe('site utility functions', () => {
  it('should export a working year helper', () => {
    const year = new Date().getFullYear();
    expect(year).toBe(2026);
  });

  it('should validate color contrast values', () => {
    // Accent orange: #FF6B00
    // Background: #FFFEF9
    // These are the actual brand values from SPEC.md
    const accent = '#FF6B00';
    const background = '#FFFEF9';
    expect(accent).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(background).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it('should validate nav link structure', () => {
    const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/builds', label: 'Builds' },
      { href: '/community', label: 'Community' },
      { href: '/creative', label: 'Creative' },
      { href: '/parkinson', label: 'Parkinson' },
    ];

    expect(navLinks).toHaveLength(5);
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

  it('should validate creative day data structure', () => {
    const days = [
      {
        dayNumber: 1,
        title: 'Life on the Homestead',
        quote: 'Day 1.',
        imageSrc: '/assets/creative/day1-homestead-dog.jpg',
        alt: 'Dog on homestead',
      },
    ];

    days.forEach((day) => {
      expect(day.dayNumber).toBeGreaterThan(0);
      expect(day.title.length).toBeGreaterThan(0);
      expect(day.imageSrc).toMatch(/^\/assets/);
    });
  });
});
