import { expect, test } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://spike.land/");
  await page.click("#monacoEditor");
});
