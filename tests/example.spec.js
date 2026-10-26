// @ts-check
import { test, expect } from '@playwright/test';
import { trace } from 'console';

test('has title', async ({ page, context }) => {

  await context.tracing.start
  ({ screenshots: true,
     snapshots : true });
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await context.tracing.stop({path : test1-trace.zip})
});
