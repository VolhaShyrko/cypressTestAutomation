describe('Login page', () => {
    it('Check Login page is loaded with Status Code 200', () => {
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Check Login page is loaded with Status Code 200 #2', () => {
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/').as('response');
        cy.get('@response').its('status').should('eq', 200);
    });
  });