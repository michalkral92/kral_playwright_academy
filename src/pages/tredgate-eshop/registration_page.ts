import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
  private readonly page: Page;
  private readonly url =
    "https://tredgate.com/eshop/index.php?route=account/register";
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly phoneInput: Locator;
  private readonly passwordInput: Locator;
  private readonly confirmPasswordInput: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.phoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.confirmPasswordInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async typeFirstName(firstName: string): Promise<RegistrationPage> {
    await this.firstNameInput.fill(firstName);
    return this;
  }

  async typeLastName(lastName: string): Promise<RegistrationPage> {
    await this.lastNameInput.fill(lastName);
    return this;
  }

  async typeEmail(email: string): Promise<RegistrationPage> {
    await this.emailInput.fill(email);
    return this;
  }

  async typePhone(phone: string): Promise<RegistrationPage> {
    await this.phoneInput.fill(phone);
    return this;
  }

  async typePassword(password: string): Promise<RegistrationPage> {
    await this.passwordInput.fill(password);
    return this;
  }

  async typeConfirmPassword(
    confirmedPassword: string
  ): Promise<RegistrationPage> {
    await this.confirmPasswordInput.fill(confirmedPassword);
    return this;
  }

  async clickContinue(): Promise<RegistrationPage> {
    await this.continueButton.click();
    return this;
  }

  async openRegistration(): Promise<RegistrationPage> {
    await this.page.goto(this.url);
    return this;
  }
}
