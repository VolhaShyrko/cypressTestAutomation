describe('EXTRA TESTING TASK #1: Example of implementation', () => {
    it('Login Page check', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('.orangehrm-login-title').should('have.text', 'Login');
        cy.get('.oxd-button').should('be.visible');

        //Verify 'Username' field is present
        cy.get('input[name=\'username\']').should('be.visible');
        //Verify 'Username' field is present
        cy.get('input[name=\'password\']').should('be.visible');       
      });
  });