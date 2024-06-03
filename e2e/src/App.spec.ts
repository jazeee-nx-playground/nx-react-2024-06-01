import { test, expect } from '@playwright/test';

test('App', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('link', { name: 'Go to Test Page' })
  ).toBeInViewport();
});
