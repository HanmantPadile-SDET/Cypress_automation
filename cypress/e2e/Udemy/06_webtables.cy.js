describe('Handle window',()=>{
    it('handling window and tab',()=>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('table#product tr td:nth-child(2)').each(($el,index,$list)=>{
           let text = $el.text();
           if(text.includes('QA Expert Course :Software Testing + Bugzilla + SQL + Agile')){
            cy.wrap($el).next().then((price)=>{
                expect(price.text()).to.equal('25');
            })
    }})
       

    })
})