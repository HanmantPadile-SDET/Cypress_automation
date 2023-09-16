describe('Hanling dropdowns',()=>{
    it.skip('dropdown with select',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
        cy.get('#zcf_address_country').select('Japan')
        .should('have.value','Japan');
    })

    it('dropdown without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.wait(2000);
        cy.get('#select2-search__field').type('singap').type('{enter}');
        cy.get('#select2-billing_country-container').should('have.text','Singapore');

    })

    it('dropdown autosuggest',()=>{
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type('Delhi');
        cy.get('#suggestion-title').contains('Delhi University').click();

        
    })

    it.only('dropdown dynamic ',()=>{
        cy.visit('https://www.google.com/');
        cy.get(`[name='q']`).type('Cypress Automation');
        cy.wait(2000);
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
            if($el.text()=='cypress automation tool'){
                cy.wrap($el).click();
            }
        })

        cy.get(`[name='q']`).should('have.value','cypress automation tool')
        
        
    })
})