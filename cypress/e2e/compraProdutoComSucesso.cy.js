/// <reference types="Cypress" />

describe('Teste E2E - Realizando a compra dos produtos com sucesso!', () => {
    it('Fluxo de Compras do Produto', () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')

        cy.get('.product_sort_container').select('Price (low to high)')

        cy.get(':nth-child(1) > .inventory_item_label').should('contain', 'Sauce Labs Onesie')
    });

});