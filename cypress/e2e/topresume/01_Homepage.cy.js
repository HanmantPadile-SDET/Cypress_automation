
describe('Check homepage functionality', () => {
    it('should have right package name', () => {

        cy.visit("https://staging.topresume.com/");
        cy.title().should('contain', 'Best Resume');
        cy.get('#accept-all').click();
        cy.wait(2000);
        cy.get(`button[aria-label='menu']`).then(elements=>{
            cy.wrap(elements).eq(0).click();
        })
        cy.contains('Resume Services').click({force:true});
        cy.get('div> h4 ').eq(0).then((el) => {
            const text = el.text();
            expect(text).to.equal('Professional Growth');
        })

       
    })

})