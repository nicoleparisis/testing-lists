import { test, expect, type Page } from "@playwright/test";

test.describe("New Todo", () => {
  test("should allow me to add todo items", async ({ page }) => {
    //Step 1- Navigate to localhost
    await page.goto("http://localhost:3000/");

    //Step 2- Create a variable called "newTodo" to replace the filler in the text box

    //Step 3- Fill an item of your choice on the todo list and press enter

    // Step 4- Fill an item of your choice on the todo list and press enter

    //Step 5- Run your test with "npx playwright test --headed" to check it out!
  });
});