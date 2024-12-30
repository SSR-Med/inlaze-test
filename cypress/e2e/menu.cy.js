// Dependencies
const { faker } = require('@faker-js/faker');

// Pages
import loginPage from "../pages/loginPage";
import registerPage from "../pages/registerPage";
import menuPage from "../pages/menuPage";

describe('Menu tests', () => {

    let email;
    let password;
    let userName;

    beforeEach(() => {
        cy.visit("https://test-qa.inlaze.com/auth/sign-up");

        // Data
        userName = faker.person.firstName() + " " + faker.person.lastName();
        email = faker.internet.email();
        password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(userName, email, password);

        cy.wait(1000)



        // Click the register button
        registerPage.clickRegisterButton();
        registerPage.closeRegistrationAlert();

        cy.wait(1000)

        // Login

        loginPage.fillForm(email, password);

        cy.wait(1000)


        // Click the login button
        loginPage.clickLoginButton();

        cy.wait(1000)
    })

    it("Sign out", () => {
        menuPage.signOut();

        cy.wait(1000)

        // Assertion
        cy.url().should('eq', 'https://test-qa.inlaze.com/auth/sign-in');
    })

    it("Check user name", () => {
        // Assertion
        menuPage.getUserName().should('eq', userName);
    })

})