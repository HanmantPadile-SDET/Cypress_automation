describe('Query params verify', () => {
    let authToken = null;
    before('create access token', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: "Test 1234 user",
                clientEmail: Math.random().toString(5).substring(2) + "@example.com"
            }
        }).then((res) => {
            authToken = res.body.accessToken;
        });
    });

    before('create order using access token', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: {
                "bookId": "1",
                "clientEmail": "Test 1234 user"
            }
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body.created).to.eq(true);
        });
    });

    it('fetch orders from DB', () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            cookies: {
                'cookieName':"mycookie"
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).has.length(1);

        });
    });
});