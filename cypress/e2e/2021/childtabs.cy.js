describe('handle child tabs', () => {
    it.skip('approch 1- new window', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")//parent
        //remove target attribute
        cy.get(".example a").invoke('removeAttr','target').click(); //click link
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child tab
        cy.wait(5000)
        cy.go('back') //back parent 

    })

    it('approch 2- new window using href', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")//parent
        //capturing href attribute
        cy.get(".example a").then((e)=>{
            let url= e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child tab
        cy.wait(5000)
        cy.go('back') //back parent 

    })
})