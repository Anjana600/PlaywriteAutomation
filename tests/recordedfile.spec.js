import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('polo');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('polo tshirt');
  await page.getByRole('button', { name: 'polo tshirts shirts for women' }).click();
  await page.getByRole('link', { name: 'Apply Puff Sleeve filter to' }).click();
  await page.getByRole('link', { name: 'Apply Cape Sleeve filter to' }).click();
  await page.getByRole('link', { name: 'Remove Puff Sleeve filter to' }).click();
});