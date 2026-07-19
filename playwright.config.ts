import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  workers: 1,

  expect: {
    timeout: 15000,
  },

  retries: 1,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    baseURL: 'https://app.todoist.com',

    headless: false,

    viewport: {
      width: 1440,
      height: 900
    },

    actionTimeout: 15000,

    navigationTimeout: 30000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

});