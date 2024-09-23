import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env['BASE_URL'] || 'https://www.saucedemo.com/';

export default defineConfig({
  testDir: 'src/tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});