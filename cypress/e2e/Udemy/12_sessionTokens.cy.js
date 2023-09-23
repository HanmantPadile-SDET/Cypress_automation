/// <reference types="cypress" />
//login is created in commands.js
import neatCSV from 'neat-csv';


describe('Login using session token', () => {

    let productName;
    it.skip('login using session token ', () => {
        cy.LoginShop().then(() => {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            });
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
            cy.get('.order-summary button').eq(0).click();



        })
    })

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
        cy.get('.order-summary button').eq(0).click();

       // Cypress.config('fileServerFolder') //gets the files path
        cy.readFile(Cypress.config('fileServerFolder')+'/cypress/downloads/order-invoice_hanmant.padile.csv').then(async (text)=>{
            const csv = await neatCSV(text);
            console.log(csv);
            const actualProductCSV = csv[0]["Product Name"]
            expect(productName).to.equal(actualProductCSV)
        })

        

    })
})