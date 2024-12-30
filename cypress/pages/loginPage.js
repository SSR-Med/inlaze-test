class loginPage{
    elements = {
        emailInput : () => cy.get('#email'),
        passwordInput : () => cy.get('#password'),
        loginButton : () => cy.get('form > button'),
        errorMessage: () => cy.get('div[role="alert"]')
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    fillForm(email, password){
        this.typeEmail(email);
        this.typePassword(password);
    }

    enableLoginButton(){
        this.elements.loginButton().invoke('removeAttr', 'disabled');
    }

    isSubmitButtonActive(){
        return this.elements.loginButton().invoke('attr', 'disabled');
    }

    isErrorMessageVisible(){
        this.elements.errorMessage().should('exist');
    }
}

module.exports = new loginPage();