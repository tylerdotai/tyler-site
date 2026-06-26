import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:4321';

const pages = [
  { path: '/', title: 'Home' },
  { path: '/builds', title: 'Builds' },
  { path: '/community', title: 'Community' },
  { path: '/creative', title: 'Creative' },
  { path: '/parkinson', title: 'Parkinson' },
  { path: '/parkinson/es', title: 'Parkinson' },
];

for (const { path, title } of pages) {
  test(`page loads: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    const response = await page.goto(`${BASE}${path}`);
    expect(response?.status()).toBe(200);

    await expect(page).toHaveTitle(/Tyler Delano/i);

    expect(errors).toHaveLength(0);
  });
}

test('navigation links are present on homepage', async ({ page }) => {
  await page.goto(BASE);

  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  await expect(page.locator('a[href="/builds"]').first()).toBeVisible();
  await expect(page.locator('a[href="/community"]').first()).toBeVisible();
  await expect(page.locator('a[href="/creative"]').first()).toBeVisible();
});

test('footer is present', async ({ page }) => {
  await page.goto(BASE);
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer')).toContainText('Tyler Delano');
});

test('homepage hero section', async ({ page }) => {
  await page.goto(BASE);
  await expect(page.locator('main h1')).toContainText('DEVELOPER');
});

test('parkinson language toggle works', async ({ page }) => {
  await page.goto(`${BASE}/parkinson`);
  await expect(page.getByRole('link', { name: 'Español' })).toBeVisible();

  await page.goto(`${BASE}/parkinson/es`);
  await expect(page.getByRole('link', { name: 'English' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Cada día');
});

test('mobile menu toggle works', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE);

  // Wait for React (client:load) to fully hydrate before interacting
  await page.waitForLoadState('networkidle');

  // React-based shadcn Sheet — click the hamburger-style button
  const toggle = page.locator('button[aria-label="Open menu"]').first();
  await expect(toggle).toBeVisible();

  await toggle.click();

  // Wait for Sheet to render and find nav links inside it
  const sheetNav = page.locator('[data-slot="sheet-content"] a');
  await expect(sheetNav.first()).toBeVisible({ timeout: 8000 });

  // Verify a link inside the sheet is correct
  await expect(sheetNav.filter({ hasText: 'Builds' }).first()).toBeVisible();
});
