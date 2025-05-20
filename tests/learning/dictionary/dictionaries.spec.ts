import { test } from "@playwright/test";
import { LoginPage } from "src/pages/pmtool/login_page";
import { pmtoolTexts } from "../../../src/pages/pmtool/asserts/dictionaries/dictionary.ts";

test("Using Dictionaries to Reuse Texts", async ({ page }) => {
  const username = process.env.PMTOOL_USERNAME as string;
  const password = process.env.PMTOOL_PASSWORD as string;
  const loginPage = new LoginPage(page);

  await loginPage
    .openAndLogin(username, password)
    .then((dashboard) =>
      dashboard.appHeaderHasText(pmtoolTexts.general.appHeader)
    );
});
