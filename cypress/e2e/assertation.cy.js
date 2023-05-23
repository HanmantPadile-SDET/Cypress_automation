describe('Assertions demo', () => {
    it('implicit assertations', () => {
        cy.visit('https://resumerabbit.com/')
        // cy.url().should('include','rabbit');
        // cy.url().should('eq','https://resumerabbit.com/')
        // cy.url().should('contain','https://resumerabbit.com/')
        // cy.url().should('include','rabbit')
        // .should('eq','https://resumerabbit.com/')
        // .should('contain','https://resumerabbit.com/')
        // cy.url().should('include','rabbit')
        // .and('eq','https://resumerabbit.com/')
        // .and('contain','https://resumerabbit.com/')

        // //negative 
        // cy.url().should('not.include','rabbit12')
        // .and('not.eq','https://resumerabbit12.com/')
        // .and('not.contain','https://resumerabbit.com/')

        cy.title().should('include', 'Best Resume')
            .and('eq', 'ResumeRabbit: Best Resume Posting Service | Private Resume Posting')
            .and('contain', 'Posting')


        // cy.xpath("//a[contains(text(),'Log in')]").should('be.visible')
        // .and('exist')
        // cy.xpath("//a").should('have.length.below','100');

    })
    it('Verify values in textbox', () => {
        cy.visit('https://topresume.portal.careers/login')
        cy.xpath("//input[@id='1-email']").type('hanmant.padile@gmail.com')
        cy.xpath("//input[@id='1-email']").should('have.value', 'hanmant.padile@gmail.com')  //value check
        cy.xpath("//input[@name='password']").type('Test123')
        cy.xpath("//input[@name='password']").should('have.value', 'Test123')
    })
    it('Explicit assertations', () => {
        cy.visit('https://topresume.portal.careers/login')
        cy.xpath("//input[@id='1-email']").type('hanmant.padile+301122@talentinc.com')
        cy.xpath("//input[@name='password']").type('Test123')
        cy.xpath("//button[@name='submit']").click()
        cy.xpath("//span[text()='Account']").click()

        let expName= "Test Order";
        cy.xpath("//li//div//p").then((ele)=>{
            let actName= ele.text();
            expect(actName).to.equal(expName);
           // expect(actName).to.not.equal(expName);

           assert.equal(actName,expName);
           assert.notEqual(actName,expName);
           
        })
    })


});