Given('I visit the site localhost', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000) // wait for page to load
});
When('I add an item to the todo list', () => {
  cy.get('#add-todo').click().type('walk dog{enter}');
});
Then('The item I added should appear in the list', () => {
    cy.get('section').get('ul').get('#todo-list').get('label').contains('walk dog').should('be.visible');
});

Given('I click a list item to mark it as complete', () => {
cy.get('div').get('input').get('[type=checkbox]').check()
});
Then('The item should have the class completed', () => {
    cy.get('section').get('li').get('[class="todo completed"]')
    });



