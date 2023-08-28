// @ts-check
import { test, expect } from '@playwright/test';

const catPrefix = 'https://cataas.com'
const local = 'http://localhost:5173/'

test('has title', async ({ page }) => {
  await page.goto(local);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(catPrefix)).toBeTruthy
});


