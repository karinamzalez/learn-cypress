describe('Cinebody Login', function() {
  beforeEach(function(){
    cy.visit('https://pro.cinebody.com/login')
  })

  it('Successfully logs in as creator & redirects to projects', function() {
    cy.visit('https://pro.cinebody.com/login')

    cy.get('input[type=email]')
      .type('karina+1@barbershop.io')
      .should('have.value', 'karina+1@barbershop.io')

    cy.get('input[type=password]')
      .type('abc123$')
      .should('have.value', 'abc123$')

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/projects')
  })

  it('empty inputs - log in button should be disabled', function() {
    cy.visit('https://pro.cinebody.com/login')

    cy.get('input[type=email]')
      .should('have.value', '')

    cy.get('input[type=password]')
      .type('abc123$')
      .should('have.value', 'abc123$')

    cy.get('button[type=submit]')
      .should('be.disabled')
  })
})
