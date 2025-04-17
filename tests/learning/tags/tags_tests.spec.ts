import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test.describe("Using Tags to Filter Tests", { tag: "@describeTag" }, () => {
  //  test("Tag Test",{ tag: "@mujTag", }, async ({ page }) => {}) - takto to vypadá bez prettieru
  test(
    "Tag Test",
    {
      tag: "@mujTag",
    },
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.openPmtool();
    }
  );

  test("Without Tag Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openPmtool();
  });
});
