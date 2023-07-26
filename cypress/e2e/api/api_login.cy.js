/// <reference types="Cypress" />

describe('API - Teste Funcional de Login', () => {
    it('Deve realizar o Login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }
        }).then( (res) => {
            expect(res.status).to.equal(200)
            expect(res.body.message).to.equal('Login realizado com sucesso')
        })
    })

    it('Deve realizar o Login com erro (por senha)', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "SenhaIncorreta"
            },
            failOnStatusCode: false
        }).then( (res) => {
            expect(res.status).to.equal(401)
            expect(res.body.message).to.equal('Email e/ou senha inválidos')
        })
    })
});