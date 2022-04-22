Given('I visit the login page', () => {
    cy.visit('http://localhost:3000/login');
    cy.wait(1000) // wait for page to load
    cy.get('h1').contains('login')

});
When('I type in a random username and password', () => {
   cy.get('form')
   cy.get('input').get('[type="email"]').click().type('cypresstest@gmail.com')
   cy.wait(500)
   cy.get('input').get('[type="password"]').type('Testing1!')
   cy.wait(200)
   cy.get('button').get('[class="login-button"]').contains('Log in').click()
});
Then('I should see the error message and stay on the same page', () => {
    cy.get('div').get('[id="errorMessage"]').contains('Wrong email or password')
    cy.wait(1000)
    cy.get('div').get('[id="errorMessage"]')
    cy.get('[id="errorMessage"]').should("be.visible", { timeout: 60000 }); 
    cy.get('[id="errorMessage"]').should("not.be.visible");

});
