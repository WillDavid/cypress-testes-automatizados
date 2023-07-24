/// <reference types="Cypress" />

describe('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso!', () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
    });

    it('Validando Login Incorreto!', () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('[data-test="username"]').type('standard_user1')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Validando Senha Incorreta!', () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('1223')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});