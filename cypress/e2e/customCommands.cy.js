
describe('custom commands ', () => {
    //direct approch
    it('Handling Links', () => {
        cy.visit("https://demo.nopcommerce.com/")
        
       // cy.get("div.master-wrapper-page:nth-child(6) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.home-page div.page-body div.product-grid.home-page-product-grid div.item-grid div.item-box:nth-child(2) div.product-item div.details > h2.product-title").click()
      //  cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

      //using custom command
      cy.clickLink("Apple MacBook Pro 13-inch");
      cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it.only('overwriting existing commands', () => {
        //overwriting custom commant contains()
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        //find the dropdown
        cy.get("#zcf_address_country").select("Mali").should('have.value', 'Mali')
    })
    it('Login command',()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.LoginApp("Admin","admin123")
    })
})