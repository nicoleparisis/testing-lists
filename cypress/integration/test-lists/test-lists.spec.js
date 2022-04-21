Given('I visit the site localhost', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000) // wait for page to load
});

When('I add an item to the todo list', () => {
    // code your next step here
});