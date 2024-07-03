describe('Login page', () => {
  it('Login Page check', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.orangehrm-login-title').should('have.text', 'Login');
    cy.get('.oxd-button').should('be.visible');
  });

  it('Login Page fail test: check Forgot your password link', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.orangehrm-login-forgot').should('have.text', 'Hello world');
  });
});