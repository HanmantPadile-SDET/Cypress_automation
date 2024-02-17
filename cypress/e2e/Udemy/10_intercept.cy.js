

describe('mocking api response', () => {

    it.skip('first mocking response', () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]

            }).as('fetchbooks');

        cy.get("button.btn.btn-primary").click();
        cy.wait('@fetchbooks').then(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1);
        })
        cy.get('p').should('include.text','Oops')

        //get the length of response array= rows shown on the ui

  



    })

    it('second type of intercept',()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept('GET',"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",(req)=>{
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>{
                // expect(res.statusCode).to.equal(403);

            });
        }).as('dummyurl');

        cy.get("button.btn.btn-primary").click();

        cy.wait('@dummyurl')

    })
})