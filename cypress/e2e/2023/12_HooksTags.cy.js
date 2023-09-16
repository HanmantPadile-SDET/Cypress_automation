describe('Hooks and Tags',()=>{
    before('Db connection',()=>{
        cy.log('db connection established')
    })

    after('Db connection closed',()=>{
        cy.log('Db connection closed')
    })

    beforeEach('Login app',()=>{
        cy.log('logged in ')
    })

    afterEach('Logout app',()=>{
        cy.log('logged out ')
    })
    
    it('search',()=>{

    })

    it('advanced search',()=>{

    })

    it('listing products',()=>{

    })
})