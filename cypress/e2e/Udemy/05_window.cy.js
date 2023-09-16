describe('Handle window',()=>{
    it('handling window and tab',()=>{
        //by default can not switch to new tab or window
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr','target').click();
        //cross domain is not allowed

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.url().should('include','qa');
            cy.get(`#navbarSupportedContent li [href='about.html']`).click();
        })
        
        //approach 2

        cy.get('#opentab').then((el)=>{
            let url = ele.prop('href');
            cy.log(url);
            cy.visit(url);
        })




    })
})