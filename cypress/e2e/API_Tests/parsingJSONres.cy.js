describe('parsing json response',()=>{
    it('parsing simple json response',()=>{
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products'
        }).then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body[0].id).to.eq(1);
            expect(res.body[0].price).to.eq(109.95);
            expect(res.body[0].rating.rate).to.eq(3.9);

            // read 20th record
            expect(res.body[19].id).to.eq(20);
            expect(res.body[19].price).to.eq(12.99);
            expect(res.body[19].rating.rate).to.eq(3.6);
        })
    });
    let totalprice = 0;
    it.only('parsing complex json response',()=>{
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',
            qs:{limit:5}
        }).then((res)=>{
            expect(res.status).to.eq(200);
            res.body.forEach(element => {
                totalprice = totalprice+element.price;
            });
            expect(totalprice).to.equal(899.23);
        })
    })
})