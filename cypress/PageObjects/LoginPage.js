/// <reference types = "Cypress" />

class Login{
    txtUsername ="input[name='username']";
    txtPassword ="input[name='password']";
    btnSubmit ="button[type='submit']";
    lblMessage="span.oxd-topbar-header-breadcrumb h6";

    setUsername(username){
        cy.get(this.txtUsername).type(username);
        
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }

    verifyLogin(){
        cy.get(this.lblMessage).should("have.text","Dashboard")
    }
}

export default Login;