/* 
presteps
Generate authorization code
GET https://github.com/login/oauth/authorize/{client_id}

1-get the auth token 
 POST https://github.com/login/oauth/access_token
 params 
 1.client id
 2. client secret
 3.code

2. get the repos list hitting api
GET: https://github.com/user/repos
Auth : accessToken

*/


describe('oAuth2 Auth', () => {
    let accessToken;
    before('get oauth access token ', () => {
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id: '',
                client_secret: '',
                code: ''
            }
        }).then((res) => {
            expect(res.status).to.eq(201);
            let raw = res.body.access_token
            let token = raw.split('&')
            accessToken = token[0].split('=')[1]
        })
    })
    it('get the repo list ', () => {
        cy.request({
            method: 'GET',
            url: 'https://github.com/user/repos',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body[1].id).to.equal(10001);
        })
    })

})