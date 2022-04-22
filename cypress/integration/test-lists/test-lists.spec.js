Given('I visit the site localhost', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000) // wait for page to load
});
When('I add an item to the todo list', () => {
  cy.get('#add-todo').click().type('walk dog{enter}');
});
Then('The item I added should appear in the list', () => {
    cy.get('.todo').should('have.length', 3)
    cy.get('section').get('ul').get('#todo-list').get('label').contains('walk dog').should('be.visible');
});

Given('I click a list item to mark it as complete', () => {
    cy.get('#add-todo').get(':nth-child(2) > .view > .toggle').click()
    //cy.get('div').get('input').get('[type=checkbox]').check()
});
Then('The item should have the class completed', () => {
    cy.get('.todo').eq(1).should('have.class', 'completed')
    //cy.get('section').get('li').get('[class="todo completed"]')
});

Given('I click the red x on a todo item', () => {
    cy.get('#todo-list').get('li').eq(1).trigger('mouseover')
    cy.get('#add-todo').get(':nth-child(1) > .view >  .destroy').invoke('show').click()
});

Then('The item I removed should no longer be in the list', () => {
    cy.get('.todo').should('have.length', 1)
});

Given('I add items to the list', () => {
    cy.get('#add-todo').click().type('shoe shopping{enter}');
    cy.get('#add-todo').click().type('gardening{enter}');
});

And('I refresh the page', () => {
    cy.reload()
});

And('The list stays in the same state and same order', () => {
    cy.get('.todo').should('have.length', 4)
});

And('I click and drag the bottom list item to the top', () => {
    cy.get('#todo-list').get('li').eq(1)
  .trigger('mousedown', { which: 1, pageX: 600, pageY: 286 })
  .trigger('mousemove', { which: 1, pageX: 600, pageY: 100 })
  .trigger('mouseup')
});


