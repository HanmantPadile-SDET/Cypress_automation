describe('alert suite ', () => {
    it('simple alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //auto handles simple alerts
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    it('confirmation alert-ok button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        //cypress automatically closed using ok
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('confirmation alert-cancel button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        //cypress automatically closed using ok
        cy.on('window:confirm', () => false); //close using cancel 
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('prompt alert-input text', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")


        //cypress automatically closes using ok
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()

        cy.get('#result').should('have.text', 'You entered: welcome')

        //using cancel button
        // cy.on('window:prompt',()=>false); //close using cancel 
        //cy.get('#result').should('have.text','You entered: null')
    })
    it.only('authenticated alert', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: 'admin',
                password: 'admin',
            }
        })
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })

    //method 2
    // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    // cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

})