
describe('custom commands demo', () => {
    it('verify link', () => {
        cy.visit("https://demo.nopcommerce.com/")

        // cy.get("div.master-wrapper-page:nth-child(6) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.home-page div.page-body div.product-grid.home-page-product-grid div.item-grid div.item-box:nth-child(2) div.product-item div.details > h2.product-title").click()
        //  cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it('override existing commands', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', 'APPLE MacBook Pro 13-inch')
    })

    it('private login commnad',()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.LoginApp("Admin","admin123");
    })

})