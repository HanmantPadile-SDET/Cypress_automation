import Homepage from "../../PageObjects/Homepage";
import Productpage from "../../PageObjects/Productspage";
import CheckoutPage from "../../PageObjects/CheckoutPage";


describe('Ecommerce Framework ',()=>{
    let userdata;
    before('setup connection',()=>{
        cy.fixture('example.json').then((data)=>{
             userdata= data;
        })
    })

    it.skip('Test 1',()=>{
        cy.visit(Cypress.env('url')+"/angularpractice/");
        // cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('.form-group input').eq(0).type(userdata.name);
        cy.get('#exampleFormControlSelect1').select(userdata.gender);
        cy.get(':nth-child(4)> .ng-untouched').should('have.value',userdata.name);
        cy.get('.form-group input').eq(0).should('have.attr','minlength','2');

        cy.get('#inlineRadio3').should('be.disabled');
       // cy.pause();//used to debug

        //open shop
        cy.contains('Shop').click();
        // cy.get('h4.card-title').each(($el,index,$list)=>{
        //     if($el.text().includes('Blackberry')){
        //         cy.get('button.btn.btn-info').eq(index).click();
        //     }
        // })

        //use custom command instead
        cy.AddProduct('h4.card-title','Blackberry','button.btn.btn-info');

        //optimize it for multiple products
        userdata.productName.forEach((element) => {
            cy.AddProduct('h4.card-title',element,'button.btn.btn-info');
        });

    })

    it('using page object',()=>{

        const homepage = new Homepage();
        const productpage = new Productpage();
        const checkoutpage = new CheckoutPage();
        Cypress.config('defaultCommandTimeout',8000);//only for test level

        cy.visit(Cypress.env('url')+"/angularpractice/"); //get it from cypress.config
        homepage.getName().eq(0).type(userdata.name);
        homepage.getGender().select(userdata.gender);
        homepage.getTwoWayDatabunding().should('have.value',userdata.name);
        homepage.getEntBtn().should('be.disabled');
        homepage.getShopTab().click();
        productpage.addProduct('Blackberry');
        productpage.addProduct('Nokia Edge');
        productpage.getCheckout().click();
        var sum=0;
        var expAmount;
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            
            var actualText = $el.text();
            var result = actualText.split(" ");
            result= result[1].trim();
            sum = sum+Number(result);
        }).then(()=>{
            cy.log(sum);
        })
        cy.get('h3 strong').then((element)=>{
            var totalText = element.text();
            expAmount = totalText.split(" ");
            expAmount= expAmount[1].trim();
            cy.log(expAmount);
            expect(sum).to.equal(Number(expAmount));
        })
        
        cy.pause();
        checkoutpage.checkout().click();
        checkoutpage.getCountry().type('India');
        cy.wait(2000);
        checkoutpage.selectCountry().click();
        checkoutpage.getTerms().click({force:true});
        checkoutpage.checkout().click();
        checkoutpage.getSuccess().should('include.text','Success');

    })
})