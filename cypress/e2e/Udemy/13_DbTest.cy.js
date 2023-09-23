//install mysql plugin
//add db variables in cypress.json
//this needs to learned right now it is not working
describe('Db Testing',()=>{
    it('first query',()=>{
        cy.sqlServer("select * from persons").then((result)=>{
            console.log(result[0][1]);

            
        })
    })
})
