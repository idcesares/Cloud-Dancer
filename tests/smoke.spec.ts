import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage renders key sections", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator("#hero")).toBeVisible();
  await expect(page.locator("#about")).toBeVisible();
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.locator("#skills")).toBeVisible();
  await expect(page.locator("#experience")).toBeVisible();
  await expect(page.locator("#principles")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();

  await page.click("nav >> text=Projects");
  await expect(page).toHaveURL(/#projects/);

  const accessibilityScanResults = await new AxeBuilder({ page }).include("main").analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
