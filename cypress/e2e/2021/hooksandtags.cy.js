const { beforeEach, afterEach } = require("mocha")

describe('my test suite',()=>{
    before(()=>{
        cy.log("launching application")
    
    })
    beforeEach('login',()=>{
        cy.log("login application")
    })
    afterEach('logout',()=>{
        cy.log("logout application")
    })
    after(()=>{
        cy.log("closing  application")
    })
    it('search',()=>{

        cy.log("searching ======>  ")
    })
    it('advances search',()=>{

        cy.log("advances searching ======>  ")
    })
    it('listing products',()=>{

        cy.log("listing products======>  ")
    })






})