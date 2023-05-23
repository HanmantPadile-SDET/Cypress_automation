describe("check weather information",()=>{
    it("weather of city",()=>{
        //1st request
        cy.request({
            method:'GET',
            url:'https://www.metaweather.com/api/location/search/?query=San',
        }).then((res)=>{
            expect(res.status).to.eq(200)
            const title=res.body[0].title
            return title
        }).then((title)=>{
            //2nd request
            cy.request({
                method:'GET',
                url:'https://www.metaweather.com/api/location/search/?query='+title,
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expepct(resp.body[0].city).to.have.property('San Francisco')
            })
        })
    })

    it("weather of all cities",()=>{
        //1st request
        cy.request({
            method:'GET',
            url:'https://www.metaweather.com/api/location/search/?query=Am',
        }).then((res)=>{
            expect(res.status).to.eq(200)
            const location=res.body
            return location
        }).then((location)=>{
            for(let i=0;i<location.length;i++){
            //2nd request
            cy.request({
                method:'GET',
                url:'https://www.metaweather.com/api/location/search/?query='+location[i].title,
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body[0].city).to.have.property(location[i].title)
            })
        }
        })
    })
})