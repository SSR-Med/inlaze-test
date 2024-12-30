// Dependencies
const { faker} = require('@faker-js/faker');
// Pages
import loginPage from '../pages/loginPage';

describe('Login tests', () => {

    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com/auth/sign-in');
    });

    it("Login with valid credentiales", () => {
        // Data
        const email = "we@gmail.com"
        const password = "We1234567#"

        // Fill the form
        loginPage.fillForm(email, password);

        cy.wait(1000)

        // Click the login button
        loginPage.clickLoginButton();

        cy.wait(1000)

        // Assertion
        cy.url().should('eq', 'https://test-qa.inlaze.com/panel');
    })

    it("Login with unregistered email", () => {
        // Data
        const email = faker.internet.email();
        const password = "We1234567#"

        // Fill the form
        loginPage.fillForm(email, password);

        cy.wait(1000)

        // Click the login button
        loginPage.clickLoginButton();

        cy.wait(1000)

        // Assertion
        loginPage.isErrorMessageVisible();
    })

    it("Login with wrong password", () => {
        // Data
        const email = "we@gmail.com"
        const password = "Wa2234567#"

        // Fill the form
        loginPage.fillForm(email, password);

        cy.wait(1000)

        // Click the login button
        loginPage.clickLoginButton();

        cy.wait(1000)

        // Assertion
        loginPage.isErrorMessageVisible();
    })


    // Unfilled fields tests
    it("Login with empty email", () => {
        // Data
        const password = "We1234567"

        // Fill the form
        loginPage.typePassword(password);

        cy.wait(1000)

        // Assertion
        loginPage.isSubmitButtonActive().should('exist');
    })

    it("Login with empty password", () => {
        // Data
        const email = faker.internet.email();

        // Fill the form
        loginPage.typeEmail(email);

        cy.wait(1000)

        // Assertion
        loginPage.isSubmitButtonActive().should('exist');
    })
})