/// <reference types = "Cypress" />
describe('check Ui element ',()=>{
    it('checking radio buttons',()=>{
        cy.visit("https://www.topresume.com/purchase/iFbBA45?pid=")
        //visibility of radio buttons
        cy.get("input#affirm-checkbox").should('be.visible')

        //selecting radio button
        cy.get("input#affirm-checkbox").check().should('be.checked')

        
    })
    it('checking checkboxes',()=>{
        cy.visit("https://www.topresume.com/purchase/iFbBA45?pid=")
        //visibility of radio buttons
        cy.get("input#agree_to_terms").should('be.visible')

        //selecting radio button
        cy.get("input#agree_to_terms").should('be.checked')
       // cy.get("input#agree_to_terms").uncheck().should('not.be.checked')
        
        
    })

    it('checking multiple checkboxes at a time',()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
         
        //select first check box from multiple 
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
    })
})