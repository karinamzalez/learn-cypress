describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('Cinebody Login', function() {
  it('Successfully logs in as creator', function() {
    cy.visit('https://pro.cinebody.com/login')

    cy.get('input[type=email]')
      .type('karina+1@barbershop.io')
      .should('have.value', 'karina+1@barbershop.io')

    cy.get('input[type=password]')
      .type('abc123$')
      .should('have.value', 'abc123$')

    cy.get('button[type=submit]').click()
  })
})
