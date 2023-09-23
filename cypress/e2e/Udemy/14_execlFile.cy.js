
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

describe('Login using session token and excel validations', () => {

    let productName;

    it('login using normal login ', () => {
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('#userEmail').type('hanmant.padile@example.com')
        cy.get('#userPassword').type('Test@123');
        cy.get('#login').click();

        cy.get('.card-body b').eq(1).then((ele)=>{
            productName = ele.text();
        })
        cy.get('div.card-body button.btn.w-10.rounded').eq(1).click();
        cy.get(`[routerlink='/dashboard/cart']`).click();
        cy.contains('Checkout').click();
        cy.get("[placeholder*='Country']").type('ind')
        cy.get('.ta-results button ').each(($el, index, $list) => {
            if ($el.text() === ' India') {
                cy.wrap($el).click();
            }
        })
        cy.get('.action__submit').click();
        cy.wait(3000);
        cy.get('.order-summary button').eq(1).click();

        //cypress does not support fs as it runs on browser engine added task in config file

        const filepath = Cypress.config('fileServerFolder')+"/cypress/downloads/order-invoice_hanmant.padile.xlsx";
        cy.task('execelToJsonCon',filepath).then((result)=>{
            cy.log(result.data[1].A);
            expect(productName).to.equal(result.data[1].B)
        })
       
        //read excel file short cut
        cy.readFile(filepath).then((text)=>{
            expect(text).to.include(productName);
        })

        

    })
})