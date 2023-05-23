import Login from "../PageObjects/LoginPage.js";

describe('POM pattern', () => {
    //using pom - every method has elements
    it('Login the application', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        const ln = new Login();
        ln.setUsername("Admin");
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();


    })
    it('Login the application', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        const ln = new Login();
        ln.setUsername("Admin");
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();


    })
    it.only('Login using pom with fixture', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture("orangehrm").then((data) => {
            const ln = new Login();
            ln.setUsername(data.username);
            ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();

    })

})
})