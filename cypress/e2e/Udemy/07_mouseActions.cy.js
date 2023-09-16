describe('Handle mouse action',()=>{
    it('mouse hover',()=>{
        //cypress will not support directly but we can manage through jquery
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get("div.mouse-hover-content").invoke('show'); 
        cy.contains('Top').click();
        cy.url().should('include','top');

        //when clicking on hidden elements force:true 
        // cy.contains('top').click({force:true});

        

       

    })
})