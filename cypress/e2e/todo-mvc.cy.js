// <reference types="Cypress" />

describe('TODO MVC', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Add a new task', () => {
        cy.get('[data-testid="text-input"]').type('Learn Cypress').type('{enter}')
        cy.get('[data-testid="todo-list"]').should('have.length', 1)
        cy.get('[data-testid="todo-list"]').should('contain', 'Learn Cypress')
    })

    it('Mark a task complete', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.todo-list li').first().find('.toggle').click()
        cy.get('.todo-list li').first().should('have.class', 'completed')
    })

    it('Edit a task', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.todo-list li').first().contains('Learn Cypress').dblclick()
        cy.get('.todo-list li').first().find('input').clear().type('Teach Cypress').type('{enter}')
        cy.get('.todo-list li').first().should('contain', 'Teach Cypress')
    })

    it('Delete a task', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.todo-list li').first().find('.destroy').click({ force: true })
        cy.get('.todo-list li').should('have.length', 0)
    })

    it('Filter tasks', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.new-todo').type('Teach Cypress').type('{enter}')
        cy.get('.todo-list li').first().find('.toggle').click()
        cy.get('.todo-list li').should('have.length', 2)
        cy.get('.todo-list li').first().should('have.class', 'completed')
        cy.get('[href="#/completed"]').click()
        cy.get('.todo-list li').should('have.length', 1)
        cy.get('.todo-list li').should('contain', 'Learn Cypress').should('have.class', 'completed')
        cy.get('[href="#/active"]').click()
        cy.get('.todo-list li').should('have.length', 1)
        cy.get('.todo-list li').should('contain', 'Teach Cypress').should('not.have.class', 'completed')
    })

    it('Clear completed tasks', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.new-todo').type('Teach Cypress').type('{enter}')
        cy.get('.todo-list li').should('have.length', 2)
        cy.get('.todo-list li').first().find('.toggle').click()
        cy.get('.clear-completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('Mark all tasks complete', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.new-todo').type('Teach Cypress').type('{enter}')
        cy.get('.todo-list li.completed').should('have.length', 0)
        cy.get('.toggle-all').click()
        cy.get('.todo-list li.completed').should('have.length', 2)
    })

    it('Mark all tasks active', () => {
        cy.get('.new-todo').type('Learn Cypress').type('{enter}')
        cy.get('.new-todo').type('Teach Cypress').type('{enter}')
        cy.get('.todo-list li.completed').should('have.length', 0)
        cy.get('.toggle-all').click()
        cy.get('.todo-list li.completed').should('have.length', 2)
        cy.get('.toggle-all').click()
        cy.get('.todo-list li.completed').should('have.length', 0)
    })

})