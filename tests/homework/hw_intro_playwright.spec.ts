import { test } from "@playwright/test";

test("HW - Open eshop, find and add to cart", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop/");
  await page.locator('[name="search"]').fill("iPhone");
  await page.locator('#search [type="button"]').click();
  await page.locator('//a[text()="iPhone"]').click();
  await page.locator("#button-cart").click();
});

/*
! Tady jsem přidal o krok navíc, kde jsem alespoň provizorně zkontoloval, že se zboží přidalo do košíku. V testu výše se mi totiž děje to, že v UI Playwrightu mi poslední krok končí tím, že se loaduje tlačítko "Add to Cart" a neukáže se mi přidaná položka v košíku - nevím, jestli to je pomalým připojením / slabým notebookem

import { expect, test } from "@playwright/test";

test("HW - Open eshop, find and add to cart", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop/");
  await page.locator('[name="search"]').fill("iPhone");
  await page.locator('#search [type="button"]').click();
  await page.locator('//a[text()="iPhone"]').click();
  await page.locator("#button-cart").click();
  await expect(
    page.locator('//div[@class="alert alert-success alert-dismissible"]')
  ).toContainText("Success: You have added ");
});
*/
