import { test, expect } from "@playwright/test";

test("Navigate to localhost + login attempt", async ({ page }) => {
  //Step 1- Navigate to the login site
  await page.goto("http://localhost:3000/login");

  //Step 2- Click on the email placeholder
  await page.getByPlaceholder("email").click();

  //Step 3- Enter your email

  //Step 4- Click on password placeholder

  //Step 5 - Enter your password

  //Step 6- Click the login button.

  //Step 7- Assert that the error message is present

  //Step 8- Run your test with "npx playwright test --headed" to check it out!
});
