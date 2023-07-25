/// <reference types="Cypress" />

Cypress.Commands.add('login', (username, password) => {
    cy.visit("https://www.saucedemo.com/v1/index.html")
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
})