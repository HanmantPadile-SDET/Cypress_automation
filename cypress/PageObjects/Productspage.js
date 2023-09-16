class Productpage{

    addProduct(product){
        return cy.AddProduct('h4.card-title',product,'button.btn.btn-info');
    }

    getCheckout(){
        return cy.get('.nav-item.active a');
    }



}

export default Productpage;