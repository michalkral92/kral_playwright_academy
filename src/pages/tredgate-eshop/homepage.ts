import { Locator, Page } from "@playwright/test";
import { RegistrationPage } from "./registration_page.ts";

export class Homepage {
  private readonly page: Page;
  private readonly url = "https://tredgate.com/eshop/";
  private readonly myAccountDropdown: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountDropdown = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      "a[href='https://tredgate.com/eshop/index.php?route=account/register']"
    );
  }

  async openTredgateEshop(): Promise<Homepage> {
    await this.page.goto(this.url);
    return this;
  }

  async clickMyAccountDropdown(): Promise<Homepage> {
    await this.myAccountDropdown.click();
    return this;
  }

  async clickRegister(): Promise<RegistrationPage> {
    await this.registerButton.click();
    return new RegistrationPage(this.page);
  }
}
