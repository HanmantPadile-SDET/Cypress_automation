describe('handling alerts',()=>{
    it('simple alerts',()=>{
        //cypress automatically closed alerts we no need to handle
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(`button[onclick='jsAlert()']`).click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert');
    })

    it('confirmation alert ',()=>{
        //cypress closed by ok 
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(`button[onclick='jsConfirm()']`).click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get('#result').should('have.text','You clicked: Ok');
    })

    it('confirmation alert ',()=>{
        //now we want to close by cancel button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(`button[onclick='jsConfirm()']`).click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm',()=>false);
        cy.get('#result').should('have.text','You clicked: Ok');
    })

    it('prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win)=>{
            cy.stub(win,'promp').returns('welcome');
        })
        cy.get(`button[onclick='jsPrompt()']`).click();
        //cypress automatically close using okay
        cy.get('#result').should('have.text','You entered: welcome');
        //using cancel button
        // cy.on('window:confirm',()=>false);
        // cy.get('#result').should('have.text','You entered: null');
    })

    it('Auth alerts',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{
                auth:{
                    username:"admin",
                    password:"admin",
                }
        })
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations');
        //method 2
    // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    // cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })
})