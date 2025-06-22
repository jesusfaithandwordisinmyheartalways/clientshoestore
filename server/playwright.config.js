

// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwrightTests',
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});