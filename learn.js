describe('MY SECOND TEST', function () {
    it("is a test run", function() {
    cy.visit('http://example.cypress.io')

    cy.contains('type').click()

    })
})