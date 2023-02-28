describe('I visit the login page', () => {
      it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.wait(1000) // wait for page to load
      cy.get('h1').contains('login');
      
      //email
     
     //password

  //error message
  
  });
  });

//run = yarn cypress open / to launch cypress dashboard to run your tests in headed-mode