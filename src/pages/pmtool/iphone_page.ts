import { type Locator, type Page } from "@playwright/test";

export class IphonePage {
  readonly page: Page;
  readonly url =
    "https://tredgate.com/eshop/index.php?route=product/product&product_id=40";
  readonly addToWishListButton: Locator;
  readonly compareProductButton: Locator;
  readonly productNameLine: Locator;
  readonly brandLine: Locator;
  readonly productCodeLine: Locator;
  readonly availabilityLine: Locator;
  readonly priceLine: Locator;
  readonly exTaxLine: Locator;
  readonly quantityLine: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly succesAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToWishListButton = page.locator(
      "div[class='btn-group'] button:nth-child(1)"
    );
    this.compareProductButton = page.locator(
      "//div[@class='col-sm-4']//button[2]"
    );
    this.productNameLine = page.locator("//h1[normalize-space()='iPhone']");
    this.brandLine = page.locator("//div[@class='col-sm-4']//ul[1]//li[1]");
    this.productCodeLine = page.locator(
      "//li[normalize-space()='Product Code: product 11']"
    );
    this.availabilityLine = page.locator(
      "//li[normalize-space()='Availability: In Stock']"
    );
    this.priceLine = page.locator("//h2[normalize-space()='$101.00']");
    this.exTaxLine = page.locator("//li[normalize-space()='Ex Tax: $101.00']");
    this.quantityLine = page.locator("//label[normalize-space()='Qty']");
    this.quantityInput = page.locator("//input[@id='input-quantity']");
    this.addToCartButton = page.locator("//button[@id='button-cart']");
    this.succesAlert = page.locator(
      "//div[@class='alert alert-success alert-dismissible']"
    );
  }

  async clickAddToCart(): Promise<IphonePage> {
    await this.addToCartButton.click();
    return this;
  }
}
