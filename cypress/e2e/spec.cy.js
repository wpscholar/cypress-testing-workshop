describe('My First Test', () => {
  it('Gets, types, and asserts', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})