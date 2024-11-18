// <reference types="Cypress" />

describe('TODO MVC', () => {

    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
    })

    it('Add a new task', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.todo-list li').should('have.length', 1)
        cy.get('.todo-list li').should('contain', 'Learn Cypress')
    })

    it('Mark a task complete', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.todo-list li').first().find('.toggle').click()
        cy.get('.todo-list li').first().should('have.class', 'completed')
    })

    it('Edit a task', () => {

    })

    it('Delete a task', () => {

    })

    it('Filter tasks', () => {

    })

    it('Clear completed tasks', () => {

    })

    it('Mark all tasks complete', () => {

    })

    it('Mark all tasks active', () => {

    })

})