class registerPage{

    elements = {
        nameInput : () => cy.get('#full-name'),
        emailInput : () => cy.get('#email'),
        passwordInput : () => cy.get('#password'),
        confirmPasswordInput : () => cy.get('#confirm-password'),
        registerButton : () => cy.get('form > button'),
        passwordErrorMessage : () => cy.get('label .text-error'),
        registrationAlertCloseButton: () => cy.get('div[role="alert"] button[aria-label="Close"]')
    }

    typeName(name){
        this.elements.nameInput().type(name);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    typeConfirmPassword(password){
        this.elements.confirmPasswordInput().type(password);
    }

    fillForm(name, email, password){
        this.typeName(name);
        this.typeEmail(email);
        this.typePassword(password);
        this.typeConfirmPassword(password);
    }

    clickRegisterButton(){
        this.elements.registerButton().click();
    }

    enableRegisterButton(){
        this.elements.registerButton().invoke('removeAttr', 'disabled');
    }

    getSubmitButtonStatus(){
        return this.elements.registerButton().invoke('attr', 'disabled');
    }

    isPasswordErrorMessageVisible(){
        this.elements.passwordErrorMessage().should('exist');
    }

    closeRegistrationAlert(){
        this.elements.registrationAlertCloseButton().click();
    }
}   

module.exports = new registerPage();