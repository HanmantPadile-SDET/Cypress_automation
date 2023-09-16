
class CheckoutPage{

    getTotalPrice(){
        return cy.get('h3 strong');
    }

    checkout(){
        return cy.get('.btn.btn-success');
    }

    getCountry(){
        return cy.get('#country');
    }

    getTerms(){
        return cy.get('#checkbox2');
    }

    submit(){
        return cy.get(`[value='Purchase']`);
    }

    getSuccess(){
        return cy.get(`div.alert.alert-success.alert-dismissible`);
    }

    selectCountry(){
        return cy.get('.suggestions ul > li > a');
    }

}

export default CheckoutPage;