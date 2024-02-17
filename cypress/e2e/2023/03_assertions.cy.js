describe('Assertions Demo',()=>{
    it('implicit assertions',()=>{
        //implicit assetions = should,and
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include','orange');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain','orangehrm');
    })

    it('implicit assertions-with chaining',()=>{
        //implicit assetions = should,and
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include','orange')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm');
    })

    
    it('implicit assertions-with chaining',()=>{
        //implicit assetions = expect,and
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include','orange')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm');//negative 
    })

       
    it('implicit assertions-with chaining-title',()=>{
        //implicit assetions = expect,and
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('include','orange')
        .and('eq','orangeHRM')
        .and('not.contain','greenhrm');//negative 
    })

    it('implicit assertions-with chaining-element',()=>{
        //implicit assetions = expect,and
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.orangehrm-login-branding img').should('be.visible')
        .should('exist')
        cy.xpath('//a').should('have.length','5');

        cy.get(`[name='username']`).type('admin')
        .should('have.value','admin')
    })


})

describe('explicit assertions-expect',()=>{
    it('expect assertion',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(`[name='username']`).type('Admin');
        cy.get(`[name='password']`).type('admin123');
        cy.get(`[type='submit']`).click();
        let exp_name= 'xyz';
        cy.get('.oxd-userdropdown-tab').then((t)=>{
            let act_name=t.text();
            expect(act_name).to.equal(exp_name);
        })

        //TDD
        assert.equal(act_name,exp_name);
        assert.notDeepEqual(act_name,"xyz");

    })

    
})