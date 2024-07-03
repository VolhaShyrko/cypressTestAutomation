describe('EXTRA TESTING TASK #3: Example of implementation', () => {
    it('Login Page check', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('.orangehrm-login-title').should('have.text', 'Login');

        //Navigate to 'Admin' page
        cy.get('oxd-main-menu-item--name').contain('Admin').click();
        //Search by 'Username' 
        cy.get('.oxd-grid-item--gutters input').eq(0).type('John2');
        cy.get('.oxd-form-actions .oxd-button--secondary').click();

        //Verifications
        cy.get('.oxd-table-card .oxd-table-row').its('length').should('be.gt', 0);
        cy.get('.oxd-table-card .oxd-table-row .oxd-padding-cell').eq(1).should('contain', 'John2');
        cy.get('.oxd-table-card .oxd-table-row').eq(0).find('.bi-trash').should('be.visible');
        cy.get('.oxd-table-card .oxd-table-row').eq(0).find('.bi-pencil-fill').should('be.visible');
      });
  });