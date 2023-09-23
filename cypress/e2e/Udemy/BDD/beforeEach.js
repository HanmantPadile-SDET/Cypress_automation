beforeEach(()=>{
    let userdata;
    cy.fixture('example').then(function (data){
        userdata=data;
    })
})