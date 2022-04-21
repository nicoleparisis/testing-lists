Given('I visit the site localhost', () => {
    cy.visit('http://localhost:3000/login');
    cy.wait(1000) // wait for page to load
});

When('I type in a random username and password', () => {
    // code your next step here
});