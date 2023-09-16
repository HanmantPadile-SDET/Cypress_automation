describe('Child tab scenarions',()=>{
    it('handle child tab',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")//parent
        //we need to change attribute "target" so that href open in same tab
        //to manupulate attribute cy.invoke
        cy.get(`.example a `).invoke('removeAttr','target').click();
        cy.url().should('include','window/new');
        cy.go('back');//goback

    })

    it('handle child tab-aaproach 2',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")//parent
        //we need to change attribute "target" so that href open in same tab
        //to manupulate attribute cy.invoke
        cy.get(`.example a `).then((el)=>{
            let url=el.prop('href');
            cy.visit(url)
        })
        cy.url().should('include','window/new');
    })
   

})