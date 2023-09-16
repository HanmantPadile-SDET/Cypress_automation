
describe('This is the login test',()=>{
    it('topresume login test 1',()=>{
        cy.visit("https://topresume.portal.careers/login");
        cy.title().should('eq','Login | TopResume Customer Portal');
    })

    it('login sauce labs',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq','Swag Labs');
        cy.get(`[name='user-name']`).type('standard_user');
        cy.get(`[name='password']`).type('secret_sauce');
        
    })


})