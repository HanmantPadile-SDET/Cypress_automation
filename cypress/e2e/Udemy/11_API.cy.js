describe('test to verify api',()=>{

    it('Get request',()=>{
        cy.request({
            method:'POST',
            url:'http://216.10.245.166/Library/Addbook.php',
            body:{
                "name":"Learn automation with cypress",
                "isbn": "xdfcdd",
                "aisle":"45h7",
                "author":"john kandy"
            }
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('Msg',"successfully added");
        })
    })
})