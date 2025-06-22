




import { test, expect } from '@playwright/test';

test.setTimeout(60_000); // Set generous timeout

test('homepage shows hero image', async ({ page }) => {
  // Load the deployed frontend
  await page.goto('https://clientshoestoreclient.onrender.com', {
    waitUntil: 'domcontentloaded',
  });

  // Look for hero image
  const heroImage = page.locator('.hero-image');
  console.log('Waiting for hero image to appear...');

  await heroImage.waitFor({ state: 'visible', timeout: 20_000 });
  await expect(heroImage).toBeVisible();

  // Save screenshot
  await page.screenshot({ path: 'homepage-after-wait.png', fullPage: true });
});









