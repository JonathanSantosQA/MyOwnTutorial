describe('My First Test!', function () {
  it("clicking 'type' navigates to a new url" , function(){
    cy.visit('http://example.cypress.io')

    cy.contains('type').click()

    //Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    //Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  
      cy.contains('.type()').click()
    // Should be on a new URL which includes 'commands/type.html'
      cy.url().should('include', 'commands/type.html')

      cy.contains('check').click()
    // Should be on a new URL which includes 'commands/check.html'
      cy.url().should('include', 'commands/check.html')
  
      cy.contains('Guides').click()
      //ASSERTION - on new URL - should include /why-cypress.html#In-a-nutshell'
      cy.url().should('include', '/why-cypress.html#In-a-nutshell')

      cy.get('#search-input')
      .type('Hello')
      .should('have.value', 'Hello')
    })


})