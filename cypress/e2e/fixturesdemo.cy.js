describe('Login demo', () => {
    //using pom - every method has elements
    // it('Login the application', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     cy.fixture("orangehrm.json").then((data) => {

    //         cy.get("input[placeholder='Username']").type(data.username)
    //         cy.get("input[placeholder='Password']").type(data.password)
    //         cy.get("button[type='submit']").click();
    //         cy.get("span.oxd-topbar-header-breadcrumb h6").should('have.text', data.expected)

    //     })
    before(()=>{
            cy.fixture("orangehrm").then((data)=>{
               let userdata= data;
            })
    })
    //access through the hooks -for multiple it blocks
        
    it('Access through the hooks',()=>{
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click();
        cy.get("span.oxd-topbar-header-breadcrumb h6").should('have.text', userdata.expected)
    })

    //access through the hooks -for multiple data sets
    






})