describe('css locators suite',()=>{
    it('CSS locators Id',()=>{
        cy.visit('https://www.topresume.com/')
        cy.get("#upload_free_review_cta").click();  ///id

       })
    it('CSS locators class',()=>{
        cy.visit('https://www.topresume.com/')
        cy.get(".buy-now-button").click();
        cy.get(".package-name wf-package-name").contains("Starter");  //class

       })
    it('CSS locators xpath',()=>{
        cy.visit('https://www.topresume.com/')
        cy.xpath("//ul[@id='main-nav']//li").should('have.length',12);

       })
    
    });