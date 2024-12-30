class menuPage{

    elements = {
        userName: () => cy.get('app-navbar h2'),
        userPfp: () => cy.get('app-navbar .rounded-full'),
        signOutButton: () => cy.get('.menu li:last-of-type a'),
    }

    getUserName(){
        return this.elements.userName().invoke('text');
    }

    signOut(){
        this.elements.userPfp().click();
        this.elements.signOutButton().click();
    }

}
module.exports = new menuPage();