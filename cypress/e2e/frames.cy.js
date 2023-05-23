import "cypress-iframe";

describe("Handling iframes",()=>{
    it("Approch 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe=cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iframe.clear().type("welcome to cypress {ctrl+a}")
        cy.get("button[aria-label='Bold']").click();

    })

    it("Approch 2-using custom commands",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("welcome to cypress {ctrl+a}")
        cy.get("button[aria-label='Bold']").click();
        
    })

    it.only("Approch 3-using cypress iframe plugin",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr") // load the frame
        cy.iframe("#mce_0_ifr").clear().type("welcome {ctrl+a}")
        cy.get("button[aria-label='Bold']").click();
        
    })
})