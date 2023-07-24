describe('Aplicação Simples', () => {
  // it('Login SGQ', () => {
  //   cy.visit('http://185.209.179.253:7500/login')
  //   cy.get('[type="text"]').type('0001')
  //   cy.get('[type="password"]').type('admin@0001')
  //   cy.get('.btnLogin').click()
  // })


  // it('Mudar modo light para dark', () => {
  //   cy.visit('http://185.209.179.253:7500/login')
  //   cy.get('[type="text"]').type('0001')
  //   cy.get('[type="password"]').type('admin@0001')
  //   cy.get('.btnLogin').click()

  //   cy.wait(5000)
  //   cy.get('.darkModeButton').click()
  //   cy.get('.darkModeButton').click()
  // })

  it('Testar se SAP está funcionando no SGQ',  () => {
    // cy.visit('http://185.209.179.253:7500/login')
    // cy.get('[type="text"]').type('0001')
    // cy.get('[type="password"]').type('admin@0001')
    // cy.get('.btnLogin').click()
    

    // cy.wait(5000)

    // cy.get(':nth-child(2) > a').click()

    // cy.wait(5000)

    // cy.get('.search-field > input').type('47895')

    // cy.get('.search-field > button').click();

    cy.request('GET', 'http://185.209.179.253:8400/rrim/list/aprovadas?page=0&offset=10&statusId=1')
      .then((response) => {
        expect(response.status).to.eq(200)
      });


  })



})
