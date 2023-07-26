/// <reference types="Cypress" />

describe('Teste E2E - Realizando a compra dos produtos com sucesso!', () => {
    it('Fluxo Fechado de Compras do Produto', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain', 'Products')

        cy.get('.product_sort_container').select('Price (low to high)')

        cy.get(':nth-child(1) > .inventory_item_label').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')

        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click()


        // Checagem de quantida de produtos

        cy.get('.fa-layers-counter').should('have.text', '3').click()

        cy.get('.btn_action').click()

        cy.get('[data-test="firstName"]').type('PrimeiroNome')

        cy.get('[data-test="lastName"]').type('SegundoNome')

        cy.get('[data-test="postalCode"]').type('xxxxx-xxx')

        cy.get('.btn_primary').click()

        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')

        cy.get('.btn_action').click()

        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')




    });

});