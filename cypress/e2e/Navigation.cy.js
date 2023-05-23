describe("Browser Navigation",()=>{
    it("BAck",()=>{
        cy.visit("https://topresume.com")
       cy.title().should('eq',"Best Resume Writing Service | Professional Resume Writers | TopResume") 
       cy.get(".products a").click();
       cy.get("h1.breaking-headlines").should('eq','Land your next job, faster.')
       cy.go('back')
       cy.title().should('eq',"Best Resume Writing Service | Professional Resume Writers | TopResume") 
       cy.go('forward')
       cy.reload()



    })
})