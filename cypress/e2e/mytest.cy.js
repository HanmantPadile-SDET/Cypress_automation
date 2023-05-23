
describe('my first test suite',()=>{
it('Verify title positive test',()=>{
    cy.visit('https://www.topresume.com/')
    cy.title().should('eq','Best Resume Writing Service | Professional Resume Writers | TopResume')
   })

it('Verify title negative test',()=>{
    cy.visit('https://www.topresume.com/')
    cy.title().should('eq','Best Resume Writing Service | Professional Resume Writers | TopCV')
   })
});

// //we can use function also
// describe('my first test suite',function(){
//     it('This is sample test',function(){
//         expect(true).to.equal(true);
//     })
// });