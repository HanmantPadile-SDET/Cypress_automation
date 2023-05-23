describe('my  test suite', () => {
    it('capture the screenshot', () => {
        cy.visit('https://www.topresume.com/')
        cy.screenshot("myscreenshot")
        cy.title().should('eq', 'Best Resume Writing Service | Professional Resume Writers | TopResume')

        cy.wait(5000)
        cy.get("div.group-item-block").screenshot("logo")
    })
    //only when run through CLI mode
    it('capture the screenshot-on failure automatically', () => {
        cy.visit('https://www.topresume.com/')
       // cy.screenshot("myscreenshot")
        cy.title().should('eq', 'Best Resume Writing Service | Professional Resume Writers | TopResume')
        cy.get("#upload_free_review_cta").should('have.text','fet a free resume review')
        cy.wait(5000)
      //  cy.get("div.group-item-block").screenshot("logo")
    })

})
