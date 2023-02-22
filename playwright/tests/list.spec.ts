import { test, expect, type Page } from "@playwright/test";

test.describe.only("New Todo", () => {
  test("should allow me to add todo items", async ({ page }) => {
    //Step 1- Navigate to localhost
    await page.goto("http://localhost:3000/");

    //Step 2- Create a new todo locator by making a variable

    //Step 3- Add an item of your choice to the todo list

    // Step 3- Add another item to the todo list.

    //Step 4- Run your test with "npx playwright test --headed" to check it out!
  });
});
