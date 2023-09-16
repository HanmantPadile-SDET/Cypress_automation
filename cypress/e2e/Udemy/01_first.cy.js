describe('My first test',()=>{
    it('visit the website',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input[type='search']").type('ca');
        cy.wait(2000);
        // cy.get(".product:visible").should('have.length',4);

        //parent -child chaining
        cy.get('.products').as('productLocator'); // aliases to store the elements
        cy.get('@productLocator').find(".product").should('have.length',4);

       // cy.get(".products").find(".product").should('have.length',4);
        //eq- search element based on index
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

        //more dynamically
        cy.get(".products").find(".product").each(($el,index,$list)=>{
           const text= $el.find('h4.product-name').text()
           if(text.includes('Cashews')){
            cy.wrap($el).find('button').click();
           }
        })
        cy.get('.brand').should('have.text','GREENKART');
        cy.get('.brand').then((el)=>{
            cy.log(el.text());
            expect(el.text()).to.equal("GREENKART");
        })


    })
})