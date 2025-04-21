import { test } from "@playwright/test";
import { Homepage } from "../../src/pages/tredgate-eshop/homepage.ts";
import { RegistrationPage } from "../../src/pages/tredgate-eshop/registration_page.ts";

test("Open Tredgate Eshop and confirm a registration", async ({ page }) => {
  const homepage = new Homepage(page);
  const registrationPage = new RegistrationPage(page);
  await homepage.openTredgateEshop();
  await homepage.clickMyAccountDropdown();
  await homepage.clickRegister();
  await registrationPage.typeFirstName("Pedro");
  await registrationPage.typeLastName("Peevo");
  await registrationPage.typePhone("+420721666999");
  await registrationPage.typeEmail("peevo@gmail.com");
  await registrationPage.typePassword("bezpecneheslo");
  await registrationPage.typeConfirmPassword("bezpecneheslo");
  await registrationPage.clickContinue();
});

test("Open Tredgate Eshop and go to registration", async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.openTredgateEshop();
  await homepage.clickMyAccountDropdown();
  await homepage.clickRegister();
});

test("Filling out the registration", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.openRegistration();
  await registrationPage.typeFirstName("Pedro");
  await registrationPage.typeLastName("Peevo");
  await registrationPage.typePhone("+420721666999");
  await registrationPage.typeEmail("peevo@gmail.com");
  await registrationPage.typePassword("bezpecneheslo");
  await registrationPage.typeConfirmPassword("bezpecneheslo");
  await registrationPage.clickContinue();
});
