class Homepage {
    getName() {
        return cy.get('.form-group input');
    }

    getTwoWayDatabunding() {
        return cy.get(':nth-child(4)> .ng-untouched');
    }

    getGender(){
       return cy.get('#exampleFormControlSelect1');
    }

    getEntBtn(){
       return cy.get('#inlineRadio3');
    }

    getShopTab(){
       return cy.contains('Shop');
    }


}

export default Homepage;