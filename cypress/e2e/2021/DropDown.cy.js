describe('dropdown suite ', () => {
    it.skip('dropdown with select tag', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        //find the dropdown
        cy.get("#zcf_address_country").select("Mali").should('have.value', 'Mali')
    })

    it.skip('dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        //find the dropdown
        cy.get("#select2-billing_country-container").click()
        cy.get("input.select2-search__field").type("Italy").type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text', 'Italy')
    })

    it.skip('dropdown with autosuggest', () => {
        cy.visit("https://www.wikipedia.org/")
        //find the dropdown
        cy.get("input#searchInput").type("Delhi")
        cy.get("h3.suggestion-title").contains("Delhi University").click()
    })

    it('dropdown dyanmic autosuggest ', () => {
        cy.visit("https://www.google.com/")
        //find the dropdown
        cy.get("input[name='q']").type("cypress automation")
        cy.wait(3000);
        cy.get("div.wM6W7d>span").should('have.length',11)
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click();
            }
        })
        cy.get("input[name='q']").should('have.value','cypress automation tutorial');
    })
})