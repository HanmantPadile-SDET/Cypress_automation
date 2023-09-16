

describe('fixture Data Driven tests',()=>{

    //access through the before hooks
    let userdata;
    before('load the data from fixture',()=>{
        cy.fixture('orangehrm.json').then((data)=>{
            userdata=data;
        })
    })
    
    it('External data ',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangehrm.json').then((data)=>{
            cy.get(`[name='username']`).type(data.username);
            cy.get(`[name='password']`).type(data.password);
            cy.get(`[type='submit']`).click();
            cy.get("span.oxd-topbar-header-breadcrumb h6").should('have.text', data.expected);
        })
        
    })
    it('use data thorugh hook',()=>{
        cy.get(`[name='username']`).type(userdata.username);
        cy.get(`[name='password']`).type(userdata.password);
        cy.get(`[type='submit']`).click();
        cy.get("span.oxd-topbar-header-breadcrumb h6").should('have.text', userdata.expected);
    })


})