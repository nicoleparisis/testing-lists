# todomvc-expanded

Expanded todomvc with login, signup and drag and drop

Simple todoMVC app build with Vue.js, originally forked from [testing-workshop-cypress](https://github.com/cypress-io/testing-workshop-cypress). I expanded the appliaction and added a couple of features.

## Start up instructions

1. Clone the repo
2. cd into testing-lists
3. run `npm i`
4. run `npm start`
5. Go to localhost:3000 to ensure application is running

## Cypress instructions

1. open a new terminal
2. cd into testing-lists folder
3. run `npx cypress open`
4. Look at the BDD scenarios in the .feature files within the cypress folder
5. Go to the corresponding spec.js file and write the test definitions for the scenarios
6. (Optional) install the vscode plugin for cucumber (Given when... scenarios) https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete

## Playwright instructions

1. Open a new terminal
2. Go to the Playwright folder
3. Start with the login.spec.ts file. Instructions will be on every line
4. Run tests with `npx playwright test`. If you want to see it, run it with `npx playwright test --headed`.
5. To run each file individually, run `npx playwright test playwright/tests/login.spec.ts` or `npx playwright test playwright/tests/list.spec.ts`. Add `--headed` to the end of the script for the browser to appear
6. (Optional) To see all the browsers in action, go to the playwright.config.ts file and uncomment out webkit and firefox. Run `npx playwright test --headed` to see all the browsers in action!

## Features

### drag & drop

Reorder todos in list.
TBD: make sure the reorder keeps it’s state after refresh 🙂
![Drag and drop](/img/dragndrop.gif "Drag and drop")

### signup page

Signup page with ability to send a real welcome email. Using [sendmail](https://www.npmjs.com/package/sendmail) to do that. Signups are stored in data.json, in plain text. So, yeah.
![Signup](/img/signup.png "Signup")

### login page

Works with previously signed up emails. Server returns an auth cookie in form of auth=true, LOL 😆
![Login](/img/login.png "Login")

## api

Backend is a json-server on a static json file. Middleware handles couple of cases. Some of these are:

### POST /reset

Deletes all todos and all accounts, that were created on signup page.

### DELETE /todos

Deletes all todos

### DELETE /accounts

Deletes all accounts, created on signup page

## Installation

1. `npm i`
2. `npm start`

App runs on localhost:3000 by default.
