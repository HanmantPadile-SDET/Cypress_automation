describe("This is simple get call",()=>{
    it("First get api-users",()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2',
            // headers:{
            //     'authorization':'Bearer 75sdfefx7c85sxc45xf' 
            // }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[1].id).to.eq(8)

        })
    })

    it("First get api-users",()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/2',
            // headers:{
            //     'authorization':'Bearer 75sdfefx7c85sxc45xf' 
            // }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.first_name).to.eq("Janet")

        })
    })




})