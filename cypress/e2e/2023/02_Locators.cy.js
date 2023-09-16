describe('Locators demo ',()=>{
    it('css locators demo',()=>{
        cy.visit('https://resume.io/');
        cy.get('.home__button.button').click();//class
        cy.get('.templates-filter__tabs a').should('have.length',5);//css
        cy.get(`h1[class='templates-root__header-title']`).should('be.visible');
    })

    it('xpath locators',()=>{
        //xpath locator is not available by default
        //we need to add plugin cypress-xpath
        cy.xpath(`//div[@class='templates-card__name']`).should('have.length',27);
    })

    it('chained',()=>{
       
        cy.xpath(`//div[@class='templates-card__preview']`).xpath('//img').should('have.length',95);
    })
})