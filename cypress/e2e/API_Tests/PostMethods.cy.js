const { floor, random } = require("cypress/types/lodash");

describe('different ways to post call', () => {
    it('approch 1-hardcoded date', () => {
        const reqBody = {
            "tourist_name": "Test tourist",
            "tourist_email": "example12345@gmail.com",
            "tourist_location": "paris"
        }
        // cy.request({
        //     method:'POST',
        //     url:'http://restapi.adequateshop.com/api/Tourist',
        //     body:{
        //         "tourist_name":"Test tourist",
        //         "tourist_email":"example123@gmail.com",
        //         "tourist_location": "paris"
        //     }
        // });

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: reqBody
        })
            .then((res) => {
                expect(res.status).to.equal(201);
                expect(res.body.tourist_name).to.equal('Test tourist')
                expect(res.body.tourist_email).to.equal('example12345@gmail.com')
                expect(res.body.tourist_location).to.equal('paris')
            })
    })

    it('Approach Dynamically generate data', () => {
        var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWYYZabcdefghijklmnopqrstuvwxyz';
        var random_text;
        for (var i = 0; i < 10; i++) {
            random_text += pattern.charAt(Math.floor(Math.random() + pattern.length))

        }
        console.log(random_text)
        const reqBody = {
            "tourist_name": random_text,
            "tourist_email": random_text + "@gmail.com",
            "tourist_location": "paris"
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: reqBody
        })
            .then((res) => {
                expect(res.status).to.equal(201);
                expect(res.body.tourist_name).to.equal(random_text)
                expect(res.body.tourist_email).to.equal(random_text + '@gmail.com')
                expect(res.body.tourist_location).to.equal('paris')
            })
    })

    it('approach3-using fixtures', () => {
        cy.fixture('tourist').then((data) => {
            const reqBody = data;

            cy.request({
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: reqBody
            })
                .then((res) => {
                    expect(res.status).to.equal(201);
                    expect(res.body.tourist_name).to.equal(random_text)
                    expect(res.body.tourist_email).to.equal(random_text + '@gmail.com')
                    expect(res.body.tourist_location).to.equal('paris')

                    //validate properties from the response
                    expect(res.body).has.property('tourist_name',reqBody.tourist_name);
                    expect(res.body).to.have.property('tourist_name',reqBody.tourist_name);
                })
        })
    })
})