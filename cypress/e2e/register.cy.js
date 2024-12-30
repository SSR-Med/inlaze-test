// Dependencies
const { faker } = require('@faker-js/faker');
// Pages
import registerPage from "../pages/registerPage";

describe('Register tests', () => {

    beforeEach(() => {
        cy.visit("https://test-qa.inlaze.com/auth/sign-up")
    })


    it("Register with valid data", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000)

        // Check the button status
        registerPage.getSubmitButtonStatus().should('be.undefined');

        // Click on the register button
        registerPage.clickRegisterButton();

        cy.wait(1000);

        // Check the redirection
        cy.url().should('eq', 'https://test-qa.inlaze.com/auth/sign-in');
    })

    it("Register with only name", () => {
        // Generate random data
        const completeName = faker.person.firstName()
        const email = faker.internet.email();
        const password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    // Email tests

    it("Register with invalid email format", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.color();
        const password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Register with email without domain (first level)", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = "a@.com";
        const password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Register with email without domain (top level)", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = "a@a.";
        const password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Register with email without user", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = "@gmail.com";
        const password ="Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Register without @ inside email", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = "emailgmail.com";
        const password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })



    it("Register with repeated email", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "Aa#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('be.undefined');

        // Click on the register button
        registerPage.clickRegisterButton();

        cy.wait(1000);

        // Check the redirection
        cy.url().should('eq', 'https://test-qa.inlaze.com/auth/sign-in');

        // Go to the register page
        cy.visit("https://test-qa.inlaze.com/auth/sign-up");

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('be.undefined');

        // Click on the register button
        registerPage.clickRegisterButton();

        cy.wait(1000);

        // Check no redirection
        cy.url().should('eq', 'https://test-qa.inlaze.com/auth/sign-up');
    })

    // Password tests
    it("Password with less than 8 characters", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "Aa#1234"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    }) 

    it("Password with 8 characters", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "Aa#12345"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('be.undefined');
    })

    it("Password without uppercase letter", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "a#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Password without lowercase letter", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "A#123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Password without special character", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "Aa123456"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Password without number", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "Aa#bcdef"

        // Fill the form
        registerPage.fillForm(completeName, email, password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    // Password confirmation tests
    it("Password confirmation different from password", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();
        const email = faker.internet.email();
        const password = "Aa#123456"
        const confirmPassword = "Aa#654321"

        // Fill the form
        registerPage.fillForm(completeName, email, password);
        registerPage.typeConfirmPassword(confirmPassword);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');

        // Check the error message
        registerPage.isPasswordErrorMessageVisible()
    })

    // Unfilled fields tests

    it("Only name field filled", () => {
        // Generate random data
        const completeName = faker.person.firstName() + " " + faker.person.lastName();

        // Fill the form
        registerPage.typeName(completeName);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Only email field filled", () => {
        // Generate random data
        const email = faker.internet.email();

        // Fill the form
        registerPage.typeEmail(email);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Only password field filled", () => {
        // Generate random data
        const password = "Aa#123456"

        // Fill the form
        registerPage.typePassword(password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Only password confirmation field filled", () => {
        // Generate random data
        const confirmPassword = "Aa#123456"

        // Fill the form
        registerPage.typeConfirmPassword(confirmPassword);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

    it("Password and password confirmation fields filled", () => {
        // Generate random data
        const password = "Aa#123456"

        // Fill the form
        registerPage.typePassword(password);
        registerPage.typeConfirmPassword(password);

        cy.wait(1000);

        // Check the button status
        registerPage.getSubmitButtonStatus().should('exist');
    })

})