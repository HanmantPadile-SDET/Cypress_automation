describe('Https methods ',()=>{
    it('GET call',()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/todos/1')
        .its('status').should('equal',200);
    })

    it('POST call',()=>{
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:{
                "title":"test title",
                "body":"this is post call",
                "userId":1
            }
        })
        .its('status').should('equal',201);
    })
    it('PUT call',()=>{

        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                "title":"test title",
                "body":"this is post call",
                "userId":1,
                "id":1 
            }
        })
        .its('status').should('equal',200);
    })

    it('DELETE call',()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1',
        })
        .its('status').should('equal',200);
    })
   
})