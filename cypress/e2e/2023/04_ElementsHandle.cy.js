describe('Handle UI elements',()=>{
    it('Handle radio buttons',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        //visibility
        cy.get('#male').should('be.visible')
        .should('not.be.checked')
        

        cy.get('#male').check().should('be.checked');
        cy.get('#female').should('be.visible')
        .should('not.be.checked')

        //vice-versa
        cy.get('#female').check().should('be.checked');
        cy.get('#male').should('be.visible')
        .should('not.be.checked')
    })

    it('handle checkboxed',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get('#monday').should('be.visible')
        .check()
        .should('be.checked');

        //uncheck
        cy.get('#monday').should('be.visible')
        .uncheck()
        .should('not.be.checked');
    })

    it('handle multi checkboxed',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get(`input.form-check-input[type='checkbox']`).check()
        .should('be.checked');
        cy.get(`input.form-check-input[type='checkbox']`).uncheck()
        .should('not.be.checked');
    })

    it('select checkbox of choice',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get(`input.form-check-input[type='checkbox']`).first().check()
        .should('be.checked');
        cy.get(`input.form-check-input[type='checkbox']`).last().check()
        .should('be.checked');
    })
})