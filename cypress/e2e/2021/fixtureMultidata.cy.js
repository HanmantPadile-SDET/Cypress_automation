describe("Data Driven Test",()=>{
    it('data driven test',()=>{
        cy.fixture("orangehrm2").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click();
                if(userdata.username=="Admin" && userdata.password=="admin123"){
                    cy.get("span.oxd-topbar-header-breadcrumb h6").should('have.text', userdata.expected) 
                    //logout
                    cy.get("input['logout]").click();
                }
                else{
                    cy.get(".oxd-text oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected)
                }
                
            })
        })
        
    })
})