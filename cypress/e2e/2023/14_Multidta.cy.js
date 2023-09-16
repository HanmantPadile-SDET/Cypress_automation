describe('fixture Data Driven tests',()=>{

    it('load the data from fixture',()=>{
        
        cy.fixture('orangehrm2.json').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            data.forEach((userdata) => {

                cy.get(`[name='username']`).type(userdata.username);
                cy.get(`[name='password']`).type(userdata.password);
                cy.get(`[type='submit']`).click();

                if(userdata.username=='Admin' && userdata.password=='admin123'){
                    cy.get("span.oxd-topbar-header-breadcrumb h6")
                    .should('have.text', userdata.expected);
                    cy.get("input['logout]").click();
                }
                else{
                    cy.get('.oxd-text oxd-text--p.oxd-alert-content-text').should('have.text',userdata.expected);
                }
                
            });
        })
    })
})