describe('take screenshot ',()=>{

    it('take SS intentionally',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.screenshot('homepage');
        cy.wait(5000);
        cy.get('img[title="Your Store"]').screenshot('logo')
    })

    //Cypress captures ss for failed tests automatically-only when run through CLI

    it('only failure',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get("div[class='product-name'] h1").click();
    })
})