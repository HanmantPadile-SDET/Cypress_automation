describe('Navigations',()=>{
    it('',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq','Your Store');
        cy.get('li.nav-item:nth-child(7) > a.nav-link')
        .click();
        cy.title().should('eq','Cameras');
        cy.go('back');
        cy.go('forward');
        cy.reload();

        cy.go(-1)//home
        cy.go(1)//cameras

    })
})