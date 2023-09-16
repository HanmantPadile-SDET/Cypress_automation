describe('css locators suite',()=>{
    it('xpath locators xpath',()=>{
        cy.visit('https://www.topresume.com/')
        cy.xpath("//ul[@id='main-nav']//li").should('have.length',12);

       })

    it('locators chained xpath',()=>{
        cy.visit('https://www.topresume.com/')
        cy.xpath("//ul[@id='main-nav']").xpath("//li").should('have.length',12);

       })
    
    });