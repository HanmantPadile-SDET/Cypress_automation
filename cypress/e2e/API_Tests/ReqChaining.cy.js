describe('request chaining go rest api', () => {

    const auth_token = 'Bearer dbshgoerhihfo';
    it('go rest api', () => {
        cy.request({
            method: 'POST',
            url: '/public/v2/users',
            body: {
                name: 'tetst 123',
                gender: 'Male',
                email: Math.random().toString(5).substring(2) + '@gmail.com',
                status: 'active'
            },
            headers: {
                'Authorization': auth_token
            }

        }).then((res) => {
            expect(res.status).to.eq(200);
            let userid = res.body.id;
            //update the user
            cy.request({
                method: 'PUT',
                url: `/public/v2/users/${userid}`,
                body: {
                    name: 'tetst 456'
                },
                headers: {
                    'Authorization': auth_token
                }
            }).then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body.name).to.eq('tetst 456');

                //delete resource
                cy.request({
                    method: 'DELETE',
                    url: `/public/v2/users/${userid}`,
                    headers: {
                        'Authorization': auth_token
                    }
                }).then((res)=>{
                    expect(res.status).to.eq(204);
                })
            })
        })
    })

})