describe('handling frames',()=>{

    //install cypress-iframe
    it('approach 1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        const iframe= cy.get('#google_esf').its('0.contentDocument.body')
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

    it.only('using iframe plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#google_esf');//load the frame
        cy.iframe('#google_esf').find("a[href*='courses']").eq(2).click();//use the frame
    })


})