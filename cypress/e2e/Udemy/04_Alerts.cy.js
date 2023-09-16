describe('Handle alerts ',()=>{
    it('handling alerts',()=>{
        //by default cypress auto handles alerts
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
      
        //cypress can listen to the browser events
        cy.on('window:alert',(str)=>{
            expect(str).to.contain("Hello , share this practice page and share your knowledge");
        })
        //confirm
        cy.get("[value='Confirm']").click();
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contains(`Hello , Are you sure you want to confirm?`);
        })



    })
})