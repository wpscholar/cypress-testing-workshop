describe('Perform Google Search', () => {
    it('Validate that wpscholar.com shows on the first page', () => {
        cy.visit('https://www.google.com')
        cy.get('[name="q"]').type('wpscholar{enter}')
    })
})