/// <reference types="Cypress" />

describe('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso!', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain', 'Products')
    });

    it('Validando Login Incorreto!', () => {
        cy.login('user_incorreto', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Validando Senha Incorreta!', () => {
        cy.login('standard_user', 'password_incorreto')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});