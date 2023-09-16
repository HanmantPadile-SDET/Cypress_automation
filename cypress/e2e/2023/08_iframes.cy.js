describe('handling frames',()=>{
    it('approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        const iframe= cy.get('#mce_0_ifr').its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('welcome {ctrl+a}');
        cy.get("button[aria-label='Bold']").click();
    })

    it('approach 2-create a custom commands',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.getIframe('#mce_0_ifr').clear().type('welcome {ctrl+a}');
        cy.get("button[aria-label='Bold']").click();
    })

    it('using iframe plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr');//load the frame
        cy.iframe('#mce_0_ifr').clear().type('welcome');//use
    })


})