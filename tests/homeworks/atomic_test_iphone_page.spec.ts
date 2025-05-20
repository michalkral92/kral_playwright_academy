import { expect, test } from "@playwright/test";

test.describe("HW - atomic tests on iPhone page", () => {
  test.beforeEach(async ({ page }) => {
    page.goto(
      "https://tredgate.com/eshop/index.php?route=product/product&product_id=40)"
    );
  });

  test("Checking elements, texts an Add to cart button", async ({ page }) => {
    await test.step("Add to wish list button", async () => {
      await expect
        .soft(page.locator("div[class='btn-group'] button:nth-child(1)"))
        .toBeVisible();
    });

    await test.step("Compare product button", async () => {
      await expect
        .soft(page.locator("//div[@class='col-sm-4']//button[2]"))
        .toBeVisible();
    });

    await test.step("Product name line", async () => {
      await expect
        .soft(page.locator("//h1[normalize-space()='iPhone']"))
        .toBeVisible();
      await expect
        .soft(page.locator("//h1[normalize-space()='iPhone']"))
        .toHaveText("iPhone");
    });

    await test.step("Brand line", async () => {
      await expect
        .soft(page.locator("//div[@class='col-sm-4']//ul[1]//li[1]"))
        .toBeVisible();
      await expect
        .soft(page.locator("//div[@class='col-sm-4']//ul[1]//li[1]"))
        .toContainText("Apple");
    });

    await test.step("Product code line", async () => {
      await expect
        .soft(
          page.locator("//li[normalize-space()='Product Code: product 11']")
        )
        .toBeVisible();
      await expect
        .soft(
          page.locator("//li[normalize-space()='Product Code: product 11']")
        )
        .toContainText("product 11");
    });

    await test.step("Availability line", async () => {
      await expect
        .soft(page.locator("//li[normalize-space()='Availability: In Stock']"))
        .toBeVisible();
      await expect
        .soft(page.locator("//li[normalize-space()='Availability: In Stock']"))
        .toContainText("In Stock");
    });

    await test.step("Price line", async () => {
      await expect
        .soft(page.locator("//h2[normalize-space()='$101.00']"))
        .toBeVisible();
      await expect
        .soft(page.locator("//h2[normalize-space()='$101.00']"))
        .toContainText("$101.00");
    });

    await test.step("Ex tax line", async () => {
      await expect
        .soft(page.locator("//li[normalize-space()='Ex Tax: $101.00']"))
        .toBeVisible();
      await expect
        .soft(page.locator("//li[normalize-space()='Ex Tax: $101.00']"))
        .toContainText("$101.00");
    });

    await test.step("Quantity line", async () => {
      await expect
        .soft(page.locator("//label[normalize-space()='Qty']"))
        .toBeVisible();
      await expect
        .soft(page.locator("//label[normalize-space()='Qty']"))
        .toHaveText("Qty");
    });

    await test.step("Quantity input", async () => {
      await expect
        .soft(page.locator("//input[@id='input-quantity']"))
        .toBeVisible();
    });

    await test.step("Add to cart button", async () => {
      await expect
        .soft(page.locator("//button[@id='button-cart']"))
        .toBeVisible();
      await page.locator("//button[@id='button-cart']").click();
      await expect
        .soft(
          page.locator("//div[@class='alert alert-success alert-dismissible']")
        )
        .toBeVisible();
    });
  });
});
