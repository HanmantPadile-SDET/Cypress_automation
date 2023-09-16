describe('Handling ui elements',()=>{
    it('handle checkbox',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked')
        .and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        //selecting multiple checkbox
        cy.get('input[type=checkbox]').check(['option2','option3']);

        //static- dropdowns 

        cy.get('select').select('option2').should('have.value','option2');

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()=='India'){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');


        //visibility of elements
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.wait(2000);
        cy.get('#displayed-text').should('be.visible');


        //radio buttons
        cy.get(`[value="radio2"]`).check()
        .should('be.checked');



    })
})