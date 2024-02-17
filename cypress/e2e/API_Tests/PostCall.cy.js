const { floor } = require("cypress/types/lodash");
const dataJson= require("../../fixtures/post.json")

describe("post user post api call",()=>{
    let Access_token= 'cd47d5ce44096fc8e3ffee3ab6080f090d30e20952f7e4eaff00d34b268368e8';
    let random_text;
    let testEmail;
    it("First post api-users",()=>{
        var pattern='ABCDEFGHIJKLMNOPQRSTUVWYYZabcdefghijklmnopqrstuvwxyz'
        for(var i=0;i<10;i++){
            random_text +=pattern.charAt(Math.floor(Math.random()+pattern.length))
        }

        // cy.fixture('post.json').then((payload)=>{
        //     //all further steps will be here
        // })
        testEmail=random_text+'@example.com'
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization':  'Bearer '+Access_token
            },
            // body:{
            //     "name": "happy",
            //     "gender": "male",
            //     "email":testEmail,
            //     "status":"active"
            // }
            body:{
                "name": dataJson.name,
                "gender": dataJson.gender,
                "email":testEmail,
                "status":dataJson.status
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            // expect(res.body.data).has.property('email',testEmail)
            // expect(res.body.data).has.property('gender','male')
            expect(res.body.data).has.property(dataJson.email,testEmail)
            expect(res.body.data).has.property(dataJson.gender,'male')
            //request chaining 
        }).then((res)=>{
            const user_id= res.body.data.id
            cy.log("User id is : "+user_id)
            cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/'+user_id,
            headers:{
                'authorization':'Bearer 75sdfefx7c85sxc45xf' 
            }

            }).then((res)=>{
                expect(res.body.data.id).should('eq',user_id)})
            })
        })
    })
