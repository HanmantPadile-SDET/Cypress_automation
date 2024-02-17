import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor/steps";
import Homepage from "../../../../PageObjects/Homepage";
import Productpage from "../../../../PageObjects/Productspage";
import CheckoutPage from "../../../../PageObjects/CheckoutPage";

const homepage = new Homepage();
const productpage = new Productpage();
const checkoutpage = new CheckoutPage();

Given("User in on home page", () => {
    cy.visit(Cypress.env('url') + "/angularpractice/");
    homepage.getName().eq(0).type(userdata.name);
    homepage.getGender().select(userdata.gender);
    homepage.getTwoWayDatabunding().should('have.value', userdata.name);
    homepage.getEntBtn().should('be.disabled');

})

When("User clicks on shop ", () => {
    homepage.getShopTab().click();
})

And("adds items to the cart", () => {
    productpage.addProduct('Blackberry');
    productpage.addProduct('Nokia Edge');

})

And("click on checkout", () => {
    productpage.getCheckout().click();
})

And("validating the total price", () => {
    var sum = 0;
    var expAmount;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        var actualText = $el.text();
        var result = actualText.split(" ");
        result = result[1].trim();
        sum = sum + Number(result);
    }).then(() => {
        cy.log(sum);
    })
    cy.get('h3 strong').then((element) => {
        var totalText = element.text();
        expAmount = totalText.split(" ");
        expAmount = expAmount[1].trim();
        cy.log(expAmount);
        expect(sum).to.equal(Number(expAmount));
    })

})

Then("Select country and submit the order should be success", () => {
    checkoutpage.checkout().click();
    checkoutpage.getCountry().type('India');
    cy.wait(2000);
    checkoutpage.selectCountry().click();
    checkoutpage.getTerms().click({ force: true });
    checkoutpage.checkout().click();
    checkoutpage.getSuccess().should('include.text', 'Success');
})

When("User fills form details ", (dataTable) => {
    cy.get('.form-group input').eq(0).type(dataTable.rawTable[1][0]);
    cy.get('#exampleFormControlSelect1').select(dataTable.rawTable[1][1]);
    cy.get(':nth-child(4)> .ng-untouched').should('have.value', dataTable.rawTable[1][0]);
    
})

And("validates the forms behavior", () => {
    cy.get('.form-group input').eq(0).should('have.attr', 'minlength', '2');
    cy.get('#inlineRadio3').should('be.disabled');

})

Then("Select the shop page", () => {
    cy.contains('Shop').click();
    
})
