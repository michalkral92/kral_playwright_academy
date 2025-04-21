import { test } from "@playwright/test";

// Pro zjednodušení můžeme použít zkratku pwt, která nabídne snippet se základní strukturou testu (nutno mít Playwright Test Snippets  rozšíření od M. Skeltona)
test("První test", async ({ page }) => {
  //Testovací kroky
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator(".btn").click();
});
