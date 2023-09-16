describe('Authentications ',()=>{
    it('basic auth',()=>{
        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                'user':'postman',
                'pass':'password'
            }

        }).then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.authenticated).to.eq(true);
        })
    })

    it('digest auth',()=>{
        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                'username':'postman',
                'password':'password',
                'method':'digest'
            }

        }).then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.authenticated).to.equal(true);
        })
    })

    it('bearer token auth',()=>{
        const token ='gfgyfjhghd545dfdfgdsddt'
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
               Authorization:'bearer '+token
            }

        }).then((res)=>{
            expect(res.status).to.eq(200);
        })
    })

    it('api key and value auth',()=>{
        const token ='gfgyfjhghd545dfdfgdsddt'
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            qs:{
                appid:'sfvfgdws5fd', //api key
            }

        }).then((res)=>{
            expect(res.status).to.eq(200);
        })
    })
})