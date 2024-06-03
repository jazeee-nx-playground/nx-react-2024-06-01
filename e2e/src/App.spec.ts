import { test, expect } from '@playwright/test';

test('App', async ({ page }) => {
  await page.goto('/');

  const testPageLink = page.getByRole('link', { name: 'Go to Test Page' });
  await expect(testPageLink).toBeVisible();
  await testPageLink.click();
  await expect(page.getByText('This is a test')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Hello World' })).toBeVisible();
});
