import 'cypress-file-upload';
/// <reference types = "Cypress" />


describe('Free resume review file upload', () => {
    it('single file upload', () => {
        cy.viewport(1980,1080)
        cy.visit("https://www.topresume.com/")
        //upload doc
        cy.get("#upload_round_cta").attachFile('rrresume.docx')
        // cy.get("#post-upload-modal.modal.fade.dz-modal.dz-preview").invoke('attr','display','block')
        cy.get('#post-upload-modal.modal.fade.dz-modal.dz-preview').then(function($input){
            $input[0].setAttribute('style', 'display:block')
          })
          .should('have.attr', 'style', 'display:block')
        
        cy.get('input#emailForm_email').type("hanmant.padile+145@talentinc.com");
        cy.get("span#emailFormButton").click()
        cy.wait(5000);
        

    })
})