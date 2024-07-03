describe('EXTRA TESTING TASK #2: Example of implementation', () => {
    it('Login Page check', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('.orangehrm-login-title').should('have.text', 'Login');

        //Enter username and password and login
        cy.get('input[name=\'username\']').type('Admin');
        cy.get('input[name=\'password\']').should('admin123');
        cy.get('.oxd-button').click();

        //Verifications
        cy.get('.oxd-userdropdown').should('be.visible');
        cy.get('.oxd-grid-3 orangehrm-dashboard-grid').should('be.visible');
        cy.get('.orangehrm-dashboard-widget-name').contains('Time at Work').should('be.visible');
        cy.get('.orangehrm-dashboard-widget-name').contains('My actions').should('be.visible');
      });
  });